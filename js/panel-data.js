// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-07-07 22:50",
  "note": "数据来自雅虎财经，每日自动更新，仅供学习参考",
  "sectors": [
    {
      "id": "01",
      "name": "指数与行业 ETF",
      "groups": [
        {
          "name": "宽基指数",
          "rows": [
            {
              "name": "标普500 ETF",
              "code": "SPY",
              "market": "美股",
              "pos52": 93.1,
              "drawdown": -1.3,
              "m1": -1.0,
              "m3": 13.8
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 81.6,
              "drawdown": -4.8,
              "m1": -4.1,
              "m3": 20.7
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 98.4,
              "drawdown": -0.3,
              "m1": 2.6,
              "m3": 13.6
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 95.1,
              "drawdown": -1.4,
              "m1": 1.7,
              "m3": 17.6
            }
          ]
        },
        {
          "name": "行业 ETF",
          "rows": [
            {
              "name": "半导体 ETF",
              "code": "SMH",
              "market": "美股",
              "pos52": 77.4,
              "drawdown": -13.1,
              "m1": -7.3,
              "m3": 46.8
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 73.5,
              "drawdown": -9.5,
              "m1": -7.1,
              "m3": 31.2
            }
          ]
        }
      ]
    },
    {
      "id": "02",
      "name": "美股七巨头",
      "groups": [
        {
          "name": "Magnificent 7",
          "rows": [
            {
              "name": "英伟达",
              "code": "NVDA",
              "market": "美股",
              "pos52": 48.8,
              "drawdown": -16.5,
              "m1": -9.9,
              "m3": 10.9
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 96.0,
              "drawdown": -1.4,
              "m1": -0.2,
              "m3": 20.1
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 19.4,
              "drawdown": -27.8,
              "m1": -9.2,
              "m3": 4.5
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 84.5,
              "drawdown": -8.8,
              "m1": -1.3,
              "m3": 22.4
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 61.9,
              "drawdown": -10.5,
              "m1": -3.1,
              "m3": 15.6
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 34.5,
              "drawdown": -21.8,
              "m1": -1.8,
              "m3": 7.5
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 55.2,
              "drawdown": -17.8,
              "m1": -3.7,
              "m3": 14.2
            }
          ]
        }
      ]
    },
    {
      "id": "03",
      "name": "半导体芯片（设计、制造与 IP）",
      "groups": [
        {
          "name": "设计与算力",
          "rows": [
            {
              "name": "英伟达",
              "code": "NVDA",
              "market": "美股",
              "pos52": 48.8,
              "drawdown": -16.5,
              "m1": -9.9,
              "m3": 10.9
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 85.4,
              "drawdown": -11.2,
              "m1": -1.4,
              "m3": 134.4
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 47.9,
              "drawdown": -22.9,
              "m1": -11.3,
              "m3": 18.1
            }
          ]
        },
        {
          "name": "制造与代工",
          "rows": [
            {
              "name": "台积电",
              "code": "TSM",
              "market": "美股",
              "pos52": 82.2,
              "drawdown": -9.4,
              "m1": -2.5,
              "m3": 26.9
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 74.9,
              "drawdown": -21.7,
              "m1": -1.2,
              "m3": 117.4
            }
          ]
        }
      ]
    },
    {
      "id": "04",
      "name": "存储、硬盘与存储 ETF",
      "groups": [
        {
          "name": "HBM/DRAM 三巨头",
          "rows": [
            {
              "name": "SK海力士",
              "code": "000660.KS",
              "market": "韩国",
              "pos52": 73.2,
              "drawdown": -24.6,
              "m1": 15.2,
              "m3": 151.3
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 75.2,
              "drawdown": -22.7,
              "m1": -5.8,
              "m3": 148.4
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 78.0,
              "drawdown": -18.3,
              "m1": 0.2,
              "m3": 59.0
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 55.4,
              "drawdown": -42.1,
              "m1": -25.6,
              "m3": 363.3
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 62.0,
              "drawdown": -24.9,
              "m1": -7.8,
              "m3": 107.8
            }
          ]
        },
        {
          "name": "NAND 与闪存",
          "rows": [
            {
              "name": "铠侠",
              "code": "285A",
              "market": "日股",
              "pos52": 65.9,
              "drawdown": -33.4,
              "m1": 0.7,
              "m3": 231.4
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 59.8,
              "drawdown": -37.9,
              "m1": -10.9,
              "m3": 200.3
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 68.7,
              "drawdown": -30.7,
              "m1": -8.1,
              "m3": 123.2
            }
          ]
        },
        {
          "name": "HDD 近线存储",
          "rows": [
            {
              "name": "希捷科技",
              "code": "STX",
              "market": "美股",
              "pos52": 72.1,
              "drawdown": -24.3,
              "m1": -10.6,
              "m3": 82.7
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 68.6,
              "drawdown": -28.7,
              "m1": -7.5,
              "m3": 75.0
            }
          ]
        },
        {
          "name": "存储模组",
          "rows": [
            {
              "name": "江波龙",
              "code": "301308",
              "market": "A股",
              "pos52": 85.2,
              "drawdown": -13.2,
              "m1": 20.7,
              "m3": 117.4
            }
          ]
        }
      ]
    },
    {
      "id": "05",
      "name": "光连接与光模块（衬底→芯片→模块→CPO）",
      "groups": []
    },
    {
      "id": "06",
      "name": "云与 AI 算力数据中心",
      "groups": []
    },
    {
      "id": "07",
      "name": "半导体设备",
      "groups": []
    },
    {
      "id": "08",
      "name": "半导体材料",
      "groups": []
    },
    {
      "id": "09",
      "name": "封装测试（OSAT 与先进封装）",
      "groups": []
    }
  ]
};
