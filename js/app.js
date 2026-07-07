// ===== 知识库页面逻辑 =====
// 依赖：marked.js（CDN 引入）、notes-list.js（window.NOTES）

/**
 * 渲染笔记列表（notes.html 无 ?note 参数时）
 */
function renderNoteList() {
  const listEl = document.getElementById("note-list");
  const detailEl = document.getElementById("note-detail");
  if (!listEl) return;

  listEl.style.display = "grid";
  detailEl.style.display = "none";

  const notes = window.NOTES || [];
  if (notes.length === 0) {
    listEl.innerHTML = '<p class="hint">还没有笔记，去 notes/ 目录添加吧。</p>';
    return;
  }

  listEl.innerHTML = notes.map(function (n) {
    return (
      '<a class="noteitem" href="notes.html?note=' + encodeURIComponent(n.file) + '">' +
      '<div class="title">' + escapeHtml(n.title) + '</div>' +
      '<div class="meta">' + escapeHtml(n.date || "") +
      (n.desc ? " · " + escapeHtml(n.desc) : "") + '</div>' +
      '</a>'
    );
  }).join("");
}

/**
 * 渲染单篇笔记详情（notes.html?note=xxx.md）
 */
async function renderNoteDetail(file) {
  const listEl = document.getElementById("note-list");
  const detailEl = document.getElementById("note-detail");
  const bodyEl = document.getElementById("note-body");

  listEl.style.display = "none";
  detailEl.style.display = "block";

  try {
    const res = await fetch("notes/" + file, { cache: "no-cache" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const md = await res.text();
    bodyEl.innerHTML = marked.parse(md);
  } catch (err) {
    // 明确错误提示，方便排查（例如本地用 file:// 打开时 fetch 会被拦）
    bodyEl.innerHTML =
      '<p class="hint">笔记加载失败：' + escapeHtml(String(err.message)) +
      '。<br>如果你是双击本地文件打开的，浏览器会禁止读取本地 .md，' +
      '请用本地服务器访问（见 README）。</p>';
    console.error("笔记加载失败", err);
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// ===== 入口 =====
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const note = params.get("note");
  if (note) {
    renderNoteDetail(note);
  } else {
    renderNoteList();
  }
});
