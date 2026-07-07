// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-07-07 08:42",
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
              "pos52": 95.6,
              "drawdown": -0.8,
              "m1": -0.1,
              "m3": 14.8
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 88.5,
              "drawdown": -3.0,
              "m1": -2.8,
              "m3": 23.7
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 4.6,
              "m3": 14.4
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 98.2,
              "drawdown": -0.5,
              "m1": 4.2,
              "m3": 19.2
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
              "pos52": 83.4,
              "drawdown": -9.7,
              "m1": -5.3,
              "m3": 54.0
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 79.8,
              "drawdown": -7.3,
              "m1": -6.3,
              "m3": 35.1
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
              "pos52": 48.2,
              "drawdown": -17.0,
              "m1": -8.9,
              "m3": 10.2
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 97.8,
              "drawdown": -0.8,
              "m1": 0.8,
              "m3": 22.3
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 18.2,
              "drawdown": -28.2,
              "m1": -9.5,
              "m3": 3.8
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 84.3,
              "drawdown": -8.9,
              "m1": 2.1,
              "m3": 24.0
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 59.5,
              "drawdown": -11.2,
              "m1": -2.3,
              "m3": 16.4
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 28.6,
              "drawdown": -23.8,
              "m1": -3.6,
              "m3": 4.6
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 64.2,
              "drawdown": -14.3,
              "m1": -0.9,
              "m3": 16.4
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
              "pos52": 48.2,
              "drawdown": -17.0,
              "m1": -8.9,
              "m3": 10.2
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 93.5,
              "drawdown": -5.0,
              "m1": 1.8,
              "m3": 153.8
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 49.3,
              "drawdown": -22.2,
              "m1": -21.9,
              "m3": 19.1
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
              "pos52": 89.8,
              "drawdown": -5.4,
              "m1": 3.7,
              "m3": 33.6
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 84.6,
              "drawdown": -13.3,
              "m1": 8.4,
              "m3": 142.6
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
              "pos52": 73.7,
              "drawdown": -24.1,
              "m1": 15.9,
              "m3": 152.9
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 79.4,
              "drawdown": -18.8,
              "m1": -8.8,
              "m3": 168.9
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 78.4,
              "drawdown": -18.0,
              "m1": 0.6,
              "m3": 59.6
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 60.0,
              "drawdown": -37.8,
              "m1": -16.0,
              "m3": 345.8
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 69.9,
              "drawdown": -19.8,
              "m1": -7.1,
              "m3": 133.3
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
              "pos52": 65.6,
              "drawdown": -33.6,
              "m1": 0.4,
              "m3": 230.2
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 69.1,
              "drawdown": -29.1,
              "m1": -2.7,
              "m3": 266.3
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 74.3,
              "drawdown": -25.3,
              "m1": -4.8,
              "m3": 148.6
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
              "pos52": 76.4,
              "drawdown": -20.6,
              "m1": -7.6,
              "m3": 102.4
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 75.3,
              "drawdown": -22.6,
              "m1": -2.8,
              "m3": 95.8
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
              "pos52": 93.6,
              "drawdown": -5.7,
              "m1": 19.9,
              "m3": 128.4
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
