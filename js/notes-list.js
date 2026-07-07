// ===== 学习笔记登记表 =====
// 新增笔记：在 notes/ 目录放一个 .md 文件，然后在下面数组里加一条。
//   file:     notes 目录下的文件名
//   title:    显示标题
//   date:     日期 YYYY-MM-DD（时间线按此排序分组）
//   category: 分类标签（分类视图按此分组，自己随便定，相同名字会归到一组）
//   desc:     一句话简介（可选）
window.NOTES = [
  {
    file: "meigu-basics.md",
    title: "美股基础：从零看懂一只股票",
    date: "2026-07-06",
    category: "基础入门",
    desc: "股票代码、交易时间、涨跌颜色、常见术语扫盲。"
  },
  {
    file: "how-to-read-earnings.md",
    title: "怎么读一份财报",
    date: "2026-07-06",
    category: "财报分析",
    desc: "三大报表在看什么，EPS、营收、指引这些词是啥意思。"
  }
];
