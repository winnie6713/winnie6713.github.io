// ===== 数据面板渲染逻辑 =====
// 依赖：panel-data.js（window.PANEL）

(function () {
  var PANEL = window.PANEL || { sectors: [] };
  var state = { sectorId: null, keyword: "" };

  // ---- 工具函数 ----
  function fmtPct(v, withSign) {
    if (v === null || v === undefined || isNaN(v)) return "—";
    var s = (withSign && v > 0 ? "+" : "") + v.toFixed(1) + "%";
    return s;
  }
  function colorClass(v) {
    if (v === null || v === undefined || isNaN(v)) return "flat";
    if (v > 0) return "up";
    if (v < 0) return "down";
    return "flat";
  }
  function escapeHtml(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function getSector(id) {
    return PANEL.sectors.filter(function (s) { return s.id === id; })[0];
  }

  // 计算板块统计：标的数 + 平均回撤
  function sectorStats(sector) {
    var count = 0, sum = 0, n = 0;
    (sector.groups || []).forEach(function (g) {
      (g.rows || []).forEach(function (r) {
        count++;
        if (typeof r.drawdown === "number") { sum += r.drawdown; n++; }
      });
    });
    return { count: count, avgDrawdown: n ? sum / n : null };
  }

  // 关键词过滤（名称/代码）
  function matchRow(r, kw) {
    if (!kw) return true;
    kw = kw.toLowerCase();
    return (r.name && r.name.toLowerCase().indexOf(kw) >= 0) ||
           (r.code && r.code.toLowerCase().indexOf(kw) >= 0);
  }

  // ---- 渲染：板块下拉 ----
  function renderSelector() {
    var sel = document.getElementById("sector-select");
    sel.innerHTML = PANEL.sectors.map(function (s) {
      var st = sectorStats(s);
      var label = s.id + " " + s.name + (st.count ? "（" + st.count + "）" : "（暂无）");
      return '<option value="' + s.id + '"' +
        (s.id === state.sectorId ? " selected" : "") + ">" +
        escapeHtml(label) + "</option>";
    }).join("");
  }

  // ---- 渲染：板块主体 ----
  function renderSector() {
    var sector = getSector(state.sectorId);
    var head = document.getElementById("sector-head");
    var body = document.getElementById("sector-body");
    if (!sector) { body.innerHTML = ""; return; }

    var st = sectorStats(sector);
    head.innerHTML =
      '<div class="sector-title">' + escapeHtml(sector.id + " " + sector.name) + '</div>' +
      '<div class="sector-meta">' +
        '<span>' + st.count + ' 个标的</span>' +
        (st.avgDrawdown !== null
          ? '<span>板块平均回撤 <b class="down">' + st.avgDrawdown.toFixed(1) + '%</b></span>'
          : '') +
      '</div>';

    if (!sector.groups || sector.groups.length === 0) {
      body.innerHTML = '<p class="hint" style="padding:24px 4px;">这个板块还没有数据。编辑 <code>js/panel-data.js</code> 往里加标的即可。</p>';
      return;
    }

    var html = '<table class="ptable"><thead><tr>' +
      '<th class="c-name">名称</th>' +
      '<th class="c-num">52周位</th>' +
      '<th class="c-num">高点跌幅</th>' +
      '<th class="c-num">近1月</th>' +
      '<th class="c-num">近3月</th>' +
      '</tr></thead><tbody>';

    var anyRow = false;
    sector.groups.forEach(function (g) {
      var rows = (g.rows || []).filter(function (r) { return matchRow(r, state.keyword); });
      if (rows.length === 0) return;
      anyRow = true;
      html += '<tr class="group-row"><td colspan="5">▸ ' + escapeHtml(g.name) + '</td></tr>';
      rows.forEach(function (r) {
        html += renderRow(r);
      });
    });
    html += '</tbody></table>';

    body.innerHTML = anyRow ? html :
      '<p class="hint" style="padding:24px 4px;">没有匹配「' + escapeHtml(state.keyword) + '」的标的。</p>';
  }

  function renderRow(r) {
    var pos = (typeof r.pos52 === "number") ? r.pos52 : null;
    var bar = pos !== null
      ? '<span class="pos-bar"><span class="pos-fill" style="width:' + pos + '%"></span></span>'
      : '';
    var posText = pos !== null ? pos + "%" : "—";
    return '<tr class="data-row' + (r.star ? " star" : "") + '">' +
      '<td class="c-name">' +
        (r.star ? '<span class="star-mark">★</span>' : '') +
        '<span class="s-name">' + escapeHtml(r.name) + '</span>' +
        '<span class="s-code">' + escapeHtml(r.code || "") + '</span>' +
        (r.market ? '<span class="s-tag">' + escapeHtml(r.market) + '</span>' : '') +
      '</td>' +
      '<td class="c-num">' + bar + '<span class="pos-text">' + posText + '</span></td>' +
      '<td class="c-num down">' + fmtPct(r.drawdown, false) + '</td>' +
      '<td class="c-num ' + colorClass(r.m1) + '">' + fmtPct(r.m1, true) + '</td>' +
      '<td class="c-num ' + colorClass(r.m3) + '">' + fmtPct(r.m3, true) + '</td>' +
      '</tr>';
  }

  // ---- 事件绑定 ----
  function bind() {
    document.getElementById("sector-select").addEventListener("change", function (e) {
      state.sectorId = e.target.value;
      renderSector();
    });
    document.getElementById("panel-search").addEventListener("input", function (e) {
      state.keyword = e.target.value.trim();
      renderSector();
    });
  }

  // ---- 初始化 ----
  document.addEventListener("DOMContentLoaded", function () {
    if (!PANEL.sectors.length) return;
    // 默认选中第一个「有数据」的板块，没有就选第一个
    var first = PANEL.sectors.filter(function (s) { return (s.groups || []).length; })[0]
      || PANEL.sectors[0];
    state.sectorId = first.id;

    var updEl = document.getElementById("panel-updated");
    if (updEl && PANEL.updated) {
      updEl.textContent = "数据更新于 " + PANEL.updated +
        (PANEL.note ? " · " + PANEL.note : "");
    }

    renderSelector();
    renderSector();
    bind();
  });
})();
