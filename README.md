# 美股学习笔记站

个人美股学习网站，纯静态（HTML/CSS/JS），部署在 GitHub Pages。

## 页面结构

| 页面 | 文件 | 说明 |
| --- | --- | --- |
| 首页 | `index.html` | 介绍 + 入口 |
| 数据面板 | `panel.html` | 按板块分组的标的表格（52周位/高点跌幅/近1月/近3月） |
| 学习笔记 | `notes.html` | Markdown 笔记，自动渲染 |
| 资源导航 | `resources.html` | 常用美股工具/数据源 |

```
meigu-site/
├── index.html / panel.html / notes.html / resources.html
├── css/style.css
├── js/
│   ├── panel-data.js   # 数据面板的板块/标的数据（改这个加标的）
│   ├── panel.js        # 数据面板渲染逻辑
│   ├── notes-list.js   # 笔记登记表（改这个加笔记）
│   └── app.js          # 笔记渲染逻辑
└── notes/*.md          # 每篇笔记一个 markdown 文件
```

## 本地预览

笔记页用 `fetch` 读取 `.md`，**不能直接双击 html 打开**（浏览器会拦截本地文件读取），要起一个本地服务器：

```bash
cd ~/meigu-site
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000
```

## 部署到 GitHub Pages

1. 在 GitHub 新建一个仓库，例如 `meigu-site`（或用户站 `<用户名>.github.io`）。
2. 推送代码：

   ```bash
   cd ~/meigu-site
   git init
   git add .
   git commit -m "init: 美股学习站"
   git branch -M main
   git remote add origin git@github.com:<你的用户名>/meigu-site.git
   git push -u origin main
   ```

3. 仓库 → Settings → Pages → Source 选 `main` 分支 `/ (root)`，保存。
4. 等一两分钟，访问 `https://<你的用户名>.github.io/meigu-site/`。

## 怎么加内容

### 加一篇笔记
1. 在 `notes/` 放一个 `.md` 文件，比如 `notes/my-note.md`。
2. 在 `js/notes-list.js` 的数组里加一条 `{ file, title, date, desc }`。

### 加一个板块 / 标的
编辑 `js/panel-data.js`，照着现有结构往 `sectors` / `groups` / `rows` 里加。

### 加一个资源链接
编辑 `resources.html`，复制一条 `linkitem`。

## 关于数据面板的数据

目前 `panel-data.js` 里是**示例占位数据**。要变成真实数据，两条路：

- **手动维护**：自己定期填数（简单，但费手）。
- **自动抓取（推荐）**：加一个 GitHub Action，定时用免费行情源（如 yfinance）算出各标的的
  52周位/回撤/近1月/近3月，生成 `panel-data.js` 后自动提交。这样站点仍是纯静态，但数据每天自动刷新。

> 想上自动抓取的话告诉我，我帮你把这个 Action 脚本写好。

---

内容仅为个人学习记录，不构成任何投资建议。
