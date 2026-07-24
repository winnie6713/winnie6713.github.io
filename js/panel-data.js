// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-07-24 22:51",
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
              "pos52": 86.9,
              "drawdown": -2.5,
              "m1": 0.8,
              "m3": 4.6
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 68.5,
              "drawdown": -8.2,
              "m1": -3.7,
              "m3": 5.2
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 88.9,
              "drawdown": -2.1,
              "m1": 0.1,
              "m3": 5.6
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 89.4,
              "drawdown": -3.1,
              "m1": -1.9,
              "m3": 5.9
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
              "pos52": 72.1,
              "drawdown": -16.1,
              "m1": -9.3,
              "m3": 16.5
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 68.7,
              "drawdown": -11.2,
              "m1": -3.9,
              "m3": 13.0
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
              "pos52": 59.4,
              "drawdown": -12.2,
              "m1": 3.9,
              "m3": 3.7
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 99.5,
              "drawdown": -0.2,
              "m1": 13.6,
              "m3": 21.9
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 15.5,
              "drawdown": -29.1,
              "m1": 4.4,
              "m3": -8.0
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 61.3,
              "drawdown": -20.5,
              "m1": -7.4,
              "m3": -5.6
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 43.7,
              "drawdown": -15.6,
              "m1": -0.9,
              "m3": -9.0
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 26.7,
              "drawdown": -24.4,
              "m1": 6.7,
              "m3": -9.6
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 5.6,
              "drawdown": -36.1,
              "m1": -16.6,
              "m3": -16.2
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
              "pos52": 59.4,
              "drawdown": -12.2,
              "m1": 3.9,
              "m3": 3.7
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 86.3,
              "drawdown": -10.1,
              "m1": 0.4,
              "m3": 70.9
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 49.1,
              "drawdown": -20.6,
              "m1": -0.0,
              "m3": -8.9
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
              "pos52": 70.7,
              "drawdown": -15.5,
              "m1": -8.5,
              "m3": 5.7
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 60.0,
              "drawdown": -34.5,
              "m1": -29.9,
              "m3": 38.2
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
              "pos52": 56.6,
              "drawdown": -39.7,
              "m1": -32.9,
              "m3": 43.7
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 73.6,
              "drawdown": -24.1,
              "m1": -12.2,
              "m3": 91.2
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 62.0,
              "drawdown": -31.2,
              "m1": -26.7,
              "m3": 13.9
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 28.2,
              "drawdown": -67.8,
              "m1": -57.9,
              "m3": 41.6
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 48.0,
              "drawdown": -34.1,
              "m1": -23.9,
              "m3": 46.3
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
              "pos52": 50.5,
              "drawdown": -48.5,
              "m1": -39.4,
              "m3": 71.1
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 42.9,
              "drawdown": -53.8,
              "m1": -41.3,
              "m3": 48.4
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 60.8,
              "drawdown": -38.5,
              "m1": -25.0,
              "m3": 54.1
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
              "pos52": 74.5,
              "drawdown": -22.1,
              "m1": -14.3,
              "m3": 45.0
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 66.6,
              "drawdown": -30.3,
              "m1": -19.3,
              "m3": 29.0
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
              "pos52": 44.6,
              "drawdown": -48.8,
              "m1": -45.4,
              "m3": -3.1
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
              "pos52": 57.5,
              "drawdown": -33.8,
              "m1": -28.1,
              "m3": -16.4
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 69.4,
              "drawdown": -27.5,
              "m1": -9.4,
              "m3": -9.9
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 42.4,
              "drawdown": -36.2,
              "m1": -16.2,
              "m3": -31.0
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 56.3,
              "drawdown": -37.6,
              "m1": -15.7,
              "m3": -24.2
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
              "pos52": 72.0,
              "drawdown": -24.3,
              "m1": -20.9,
              "m3": 18.2
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 72.4,
              "drawdown": -22.0,
              "m1": -22.0,
              "m3": 7.2
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 48.5,
              "drawdown": -42.6,
              "m1": -40.5,
              "m3": -24.0
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
              "pos52": 15.5,
              "drawdown": -29.1,
              "m1": 4.4,
              "m3": -8.0
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 61.3,
              "drawdown": -20.5,
              "m1": -7.4,
              "m3": -5.6
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 43.7,
              "drawdown": -15.6,
              "m1": -0.9,
              "m3": -9.0
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 0.0,
              "drawdown": -64.6,
              "m1": -26.8,
              "m3": -34.5
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
              "pos52": 8.7,
              "drawdown": -51.7,
              "m1": -28.7,
              "m3": -38.8
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 66.3,
              "drawdown": -22.8,
              "m1": -8.2,
              "m3": -9.7
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 92.2,
              "drawdown": -6.0,
              "m1": 1.0,
              "m3": 106.6
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 23.8,
              "drawdown": -50.4,
              "m1": -7.2,
              "m3": 12.5
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
