// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-08-21 22:12",
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
              "pos52": 91.8,
              "drawdown": -1.6,
              "m1": 3.7,
              "m3": 3.4
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 83.0,
              "drawdown": -4.3,
              "m1": 3.1,
              "m3": -0.0
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 89.0,
              "drawdown": -2.0,
              "m1": 3.1,
              "m3": 6.1
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 93.4,
              "drawdown": -1.7,
              "m1": 2.7,
              "m3": 6.4
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
              "pos52": 71.7,
              "drawdown": -16.2,
              "m1": -3.4,
              "m3": -1.3
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 79.2,
              "drawdown": -7.4,
              "m1": 2.7,
              "m3": 2.8
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
              "pos52": 70.6,
              "drawdown": -8.8,
              "m1": 2.9,
              "m3": -2.1
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 73.3,
              "drawdown": -9.0,
              "m1": -3.7,
              "m3": 1.5
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 70.7,
              "drawdown": -10.1,
              "m1": 26.9,
              "m3": 15.5
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 70.8,
              "drawdown": -14.3,
              "m1": 8.5,
              "m3": -11.0
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 70.2,
              "drawdown": -8.9,
              "m1": 10.7,
              "m3": -3.7
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 9.8,
              "drawdown": -29.3,
              "m1": -9.3,
              "m3": -9.4
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 33.7,
              "drawdown": -25.9,
              "m1": 13.5,
              "m3": -13.2
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
              "pos52": 70.6,
              "drawdown": -8.8,
              "m1": 2.9,
              "m3": -2.1
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 74.9,
              "drawdown": -18.5,
              "m1": -12.3,
              "m3": 5.3
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 40.5,
              "drawdown": -23.4,
              "m1": -6.1,
              "m3": -11.0
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
              "pos52": 76.7,
              "drawdown": -12.3,
              "m1": 0.8,
              "m3": 3.1
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 56.5,
              "drawdown": -36.1,
              "m1": -10.1,
              "m3": -24.0
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
              "pos52": 55.6,
              "drawdown": -40.7,
              "m1": -5.5,
              "m3": -0.8
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 77.5,
              "drawdown": -20.3,
              "m1": -2.4,
              "m3": 26.9
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 72.7,
              "drawdown": -22.3,
              "m1": 8.1,
              "m3": 2.1
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 15.3,
              "drawdown": -79.9,
              "m1": -32.5,
              "m3": -54.0
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 56.5,
              "drawdown": -28.5,
              "m1": -1.1,
              "m3": 6.1
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
              "pos52": 48.9,
              "drawdown": -50.0,
              "m1": -15.5,
              "m3": -5.4
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 44.9,
              "drawdown": -51.8,
              "m1": -11.2,
              "m3": -9.3
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 67.7,
              "drawdown": -31.6,
              "m1": -0.9,
              "m3": 3.5
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
              "pos52": 74.0,
              "drawdown": -22.3,
              "m1": -6.9,
              "m3": 5.0
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 57.2,
              "drawdown": -38.4,
              "m1": -17.7,
              "m3": -5.5
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
              "pos52": 46.2,
              "drawdown": -47.4,
              "m1": 1.3,
              "m3": -32.6
            }
          ]
        }
      ]
    },
    {
      "id": "05",
      "name": "光连接与光模块（衬底→芯片→模块→CPO）",
      "groups": [
        {
          "name": "海外光模块/光器件",
          "rows": [
            {
              "name": "Coherent",
              "code": "COHR",
              "market": "美股",
              "pos52": 59.5,
              "drawdown": -32.2,
              "m1": -7.6,
              "m3": -23.4
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 80.0,
              "drawdown": -17.7,
              "m1": 4.0,
              "m3": -10.1
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 31.5,
              "drawdown": -41.5,
              "m1": -15.7,
              "m3": -37.9
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 57.0,
              "drawdown": -36.9,
              "m1": -2.9,
              "m3": -32.6
            }
          ]
        },
        {
          "name": "国内光模块（A股）",
          "rows": [
            {
              "name": "中际旭创",
              "code": "300308",
              "market": "A股",
              "pos52": 60.7,
              "drawdown": -31.8,
              "m1": -12.1,
              "m3": -13.7
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 60.5,
              "drawdown": -27.6,
              "m1": -11.1,
              "m3": -5.9
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 69.8,
              "drawdown": -23.0,
              "m1": 28.8,
              "m3": -3.4
            }
          ]
        }
      ]
    },
    {
      "id": "06",
      "name": "云与 AI 算力数据中心",
      "groups": [
        {
          "name": "超大规模云厂",
          "rows": [
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 70.7,
              "drawdown": -10.1,
              "m1": 26.9,
              "m3": 15.5
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 70.8,
              "drawdown": -14.3,
              "m1": 8.5,
              "m3": -11.0
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 70.2,
              "drawdown": -8.9,
              "m1": 10.7,
              "m3": -3.7
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 15.0,
              "drawdown": -54.9,
              "m1": 22.0,
              "m3": -22.5
            }
          ]
        },
        {
          "name": "AI 云新势力与算力配套",
          "rows": [
            {
              "name": "CoreWeave",
              "code": "CRWV",
              "market": "美股",
              "pos52": 32.9,
              "drawdown": -38.6,
              "m1": 8.3,
              "m3": -18.3
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 55.1,
              "drawdown": -30.4,
              "m1": -13.8,
              "m3": -19.0
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 86.3,
              "drawdown": -10.6,
              "m1": 0.6,
              "m3": 75.2
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 43.8,
              "drawdown": -36.5,
              "m1": 19.4,
              "m3": 11.3
            }
          ]
        }
      ]
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
