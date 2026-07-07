// ===== 数据面板：板块 / 分组 / 标的 数据源 =====
// 说明：
//   下面的数值目前是「示例占位数据」，仅用于把界面跑起来。
//   之后可替换为真实数据（手动维护，或用 GitHub Action 定时抓取生成，见 README）。
//
// 字段含义：
//   pos52    52周位（0~100，当前价在过去一年高低点之间的位置，%）
//   drawdown 高点跌幅（距 52周高点回撤，负数，%）
//   m1       近1月涨跌幅（%）
//   m3       近3月涨跌幅（%）
//   market   地区标签：美股 / 港股 / A股 / 韩国 / 日股 ...
//   star     是否高亮标记（重点关注）
//
// 新增板块/标的：照着结构往下加即可，页面会自动渲染。

window.PANEL = {
  updated: "2026-07-06",
  note: "示例数据，非实时行情，仅用于演示界面",

  sectors: [
    { id: "01", name: "指数与行业 ETF", groups: [] },
    {
      id: "02", name: "美股七巨头",
      groups: [
        { name: "Magnificent 7", rows: [
          { name: "英伟达",   code: "NVDA",  market: "美股", pos52: 92, drawdown: -8.1,  m1: 6.4,  m3: 21.3 },
          { name: "苹果",     code: "AAPL",  market: "美股", pos52: 74, drawdown: -12.5, m1: 2.1,  m3: 8.9 },
          { name: "微软",     code: "MSFT",  market: "美股", pos52: 80, drawdown: -9.7,  m1: 3.3,  m3: 11.2 },
          { name: "谷歌",     code: "GOOGL", market: "美股", pos52: 71, drawdown: -14.0, m1: -1.2, m3: 6.5 },
          { name: "亚马逊",   code: "AMZN",  market: "美股", pos52: 68, drawdown: -15.4, m1: 1.8,  m3: 4.7 },
          { name: "Meta",     code: "META",  market: "美股", pos52: 85, drawdown: -7.2,  m1: 4.9,  m3: 18.6 },
          { name: "特斯拉",   code: "TSLA",  market: "美股", pos52: 55, drawdown: -28.3, m1: -5.6, m3: -9.4 }
        ]}
      ]
    },
    { id: "03", name: "半导体芯片（设计、制造与 IP）", groups: [] },
    {
      id: "04", name: "存储、硬盘与存储 ETF",
      groups: [
        { name: "HBM/DRAM 三巨头", rows: [
          { name: "SK海力士", code: "000660.KS", market: "韩国", pos52: 88, drawdown: -21.6, m1: 13.2, m3: 164.5 },
          { name: "美光科技", code: "MU",        market: "美股", pos52: 89, drawdown: -22.3, m1: 12.9, m3: 166.4 },
          { name: "三星电子", code: "005930",    market: "韩国", pos52: 75, drawdown: -12.3, m1: -3.3, m3: 64.7 },
          { name: "南方两倍做多海力士", code: "07709", market: "港股", pos52: 82, drawdown: -25.1, m1: 20.4, m3: -11.8 },
          { name: "Roundhill Memory ETF", code: "DRAM", market: "美股", pos52: 90, drawdown: -18.0, m1: 18.4, m3: 120.0, star: true }
        ]},
        { name: "NAND 与闪存", rows: [
          { name: "铠侠",     code: "285A",  market: "日股", pos52: 79, drawdown: -19.5, m1: 8.7,  m3: 57.9 },
          { name: "铠侠 ADR", code: "KXIAY", market: "美股", pos52: 76, drawdown: -20.2, m1: 6.1,  m3: 31.1 },
          { name: "闪迪",     code: "SNDK",  market: "美股", pos52: 81, drawdown: -17.8, m1: 9.5,  m3: 48.7 }
        ]},
        { name: "HDD 近线存储", rows: [
          { name: "希捷科技",   code: "STX", market: "美股", pos52: 94, drawdown: -6.4,  m1: 11.2, m3: 91.2 },
          { name: "西部数据",   code: "WDC", market: "美股", pos52: 91, drawdown: -9.1,  m1: 10.3, m3: 82.8 }
        ]},
        { name: "存储模组", rows: [
          { name: "江波龙", code: "301308", market: "A股", pos52: 64, drawdown: -18.4, m1: 5.7, m3: 139.2 }
        ]}
      ]
    },
    { id: "05", name: "光连接与光模块（衬底→芯片→模块→CPO）", groups: [] },
    { id: "06", name: "云与 AI 算力数据中心", groups: [] },
    { id: "07", name: "半导体设备", groups: [] },
    { id: "08", name: "半导体材料", groups: [] },
    { id: "09", name: "封装测试（OSAT 与先进封装）", groups: [] }
  ]
};
