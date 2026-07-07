// ===== 学习笔记页面逻辑 =====
// 依赖：marked.js（CDN）、notes-list.js（window.NOTES）
// 两种列表视图：时间线（timeline）/ 分类视图（category）；点开进入 markdown 详情。

(function () {
  var VIEW_KEY = "notes_view";
  var state = { view: localStorage.getItem(VIEW_KEY) || "timeline" };

  function escapeHtml(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  // "2026-07-06" -> "2026年07月"
  function monthLabel(date) {
    var m = /^(\d{4})-(\d{2})/.exec(date || "");
    return m ? m[1] + "年" + m[2] + "月" : "未标日期";
  }
  // "2026-07-06" -> "07-06"
  function shortDate(date) {
    var m = /^\d{4}-(\d{2})-(\d{2})/.exec(date || "");
    return m ? m[1] + "-" + m[2] : "";
  }

  function noteLink(n, inner) {
    return '<a class="note-link" href="notes.html?note=' +
      encodeURIComponent(n.file) + '">' + inner + '</a>';
  }
  function tag(cat) {
    return cat ? '<span class="cat-tag">' + escapeHtml(cat) + '</span>' : '';
  }

  // ---- 时间线视图：按月分组，日期降序 ----
  function renderTimeline(notes) {
    var sorted = notes.slice().sort(function (a, b) {
      return (b.date || "").localeCompare(a.date || "");
    });
    var html = '<div class="timeline">';
    var curMonth = null;
    sorted.forEach(function (n) {
      var ml = monthLabel(n.date);
      if (ml !== curMonth) {
        curMonth = ml;
        html += '<div class="tl-month">' + escapeHtml(ml) + '</div>';
      }
      html += '<div class="tl-item">' +
        '<span class="tl-dot"></span>' +
        '<div class="tl-date">' + escapeHtml(shortDate(n.date)) + '</div>' +
        '<div class="tl-body">' +
          noteLink(n, '<span class="tl-title">' + escapeHtml(n.title) + '</span>') +
          tag(n.category) +
          (n.desc ? '<div class="tl-desc">' + escapeHtml(n.desc) + '</div>' : '') +
        '</div>' +
      '</div>';
    });
    html += '</div>';
    return html;
  }

  // ---- 分类视图：按 category 分组 ----
  function renderCategory(notes) {
    var groups = {};
    var order = [];
    notes.forEach(function (n) {
      var c = n.category || "未分类";
      if (!groups[c]) { groups[c] = []; order.push(c); }
      groups[c].push(n);
    });
    var html = "";
    order.forEach(function (c) {
      html += '<div class="cat-block">' +
        '<div class="cat-head">' + escapeHtml(c) +
        '<span class="cat-count">' + groups[c].length + '</span></div>';
      groups[c].slice().sort(function (a, b) {
        return (b.date || "").localeCompare(a.date || "");
      }).forEach(function (n) {
        html += noteLink(n,
          '<div class="cat-item">' +
            '<span class="cat-date">' + escapeHtml(shortDate(n.date)) + '</span>' +
            '<span class="cat-title">' + escapeHtml(n.title) + '</span>' +
          '</div>');
      });
      html += '</div>';
    });
    return html;
  }

  function renderList() {
    var listEl = document.getElementById("note-list");
    var detailEl = document.getElementById("note-detail");
    var toggleEl = document.getElementById("view-toggle");
    if (!listEl) return;

    listEl.style.display = "block";
    detailEl.style.display = "none";
    if (toggleEl) toggleEl.style.display = "flex";

    var notes = window.NOTES || [];
    if (notes.length === 0) {
      listEl.innerHTML = '<p class="hint">还没有笔记，去 notes/ 目录添加吧。</p>';
      return;
    }

    // 高亮当前视图按钮
    document.querySelectorAll("#view-toggle .vt-btn").forEach(function (b) {
      b.classList.toggle("active", b.dataset.view === state.view);
    });

    listEl.innerHTML = state.view === "category"
      ? renderCategory(notes)
      : renderTimeline(notes);
  }

  // ---- 详情视图 ----
  async function renderDetail(file) {
    var listEl = document.getElementById("note-list");
    var detailEl = document.getElementById("note-detail");
    var toggleEl = document.getElementById("view-toggle");
    var bodyEl = document.getElementById("note-body");

    listEl.style.display = "none";
    if (toggleEl) toggleEl.style.display = "none";
    detailEl.style.display = "block";

    try {
      var res = await fetch("notes/" + file, { cache: "no-cache" });
      if (!res.ok) throw new Error("HTTP " + res.status);
      var md = await res.text();
      bodyEl.innerHTML = marked.parse(md);
    } catch (err) {
      bodyEl.innerHTML =
        '<p class="hint">笔记加载失败：' + escapeHtml(String(err.message)) +
        '。<br>如果是双击本地文件打开的，浏览器会禁止读取本地 .md，' +
        '请用本地服务器访问（见 README）。</p>';
      console.error("笔记加载失败", err);
    }
  }

  function bindToggle() {
    var toggleEl = document.getElementById("view-toggle");
    if (!toggleEl) return;
    toggleEl.addEventListener("click", function (e) {
      var btn = e.target.closest(".vt-btn");
      if (!btn) return;
      state.view = btn.dataset.view;
      localStorage.setItem(VIEW_KEY, state.view);
      renderList();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var note = new URLSearchParams(window.location.search).get("note");
    bindToggle();
    if (note) renderDetail(note);
    else renderList();
  });
})();
