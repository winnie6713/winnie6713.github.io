// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-10-21 00:13",
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
              "pos52": 91.6,
              "drawdown": -1.6,
              "m1": 0.6,
              "m3": 2.7
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 79.6,
              "drawdown": -5.4,
              "m1": -0.3,
              "m3": 1.4
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 76.2,
              "drawdown": -4.1,
              "m1": 0.6,
              "m3": -0.2
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 57.4,
              "drawdown": -10.8,
              "m1": -4.5,
              "m3": -8.3
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
              "pos52": 65.1,
              "drawdown": -18.0,
              "m1": -4.3,
              "m3": -6.1
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 78.6,
              "drawdown": -7.9,
              "m1": -1.8,
              "m3": 3.0
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
              "pos52": 70.2,
              "drawdown": -9.3,
              "m1": -2.3,
              "m3": 4.8
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 99.5,
              "drawdown": -0.2,
              "m1": 2.0,
              "m3": 4.7
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 94.8,
              "drawdown": -1.8,
              "m1": 8.0,
              "m3": 34.4
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 62.0,
              "drawdown": -14.4,
              "m1": -1.5,
              "m3": -0.8
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 74.7,
              "drawdown": -7.6,
              "m1": 3.4,
              "m3": 6.0
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 71.5,
              "drawdown": -9.3,
              "m1": 6.0,
              "m3": 9.7
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 36.4,
              "drawdown": -24.9,
              "m1": 1.0,
              "m3": -2.9
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
              "pos52": 70.2,
              "drawdown": -9.3,
              "m1": -2.3,
              "m3": 4.8
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 75.7,
              "drawdown": -17.1,
              "m1": -3.9,
              "m3": -1.2
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 22.5,
              "drawdown": -30.3,
              "m1": -6.3,
              "m3": -13.3
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
              "pos52": 69.3,
              "drawdown": -13.5,
              "m1": -3.3,
              "m3": -0.8
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 54.4,
              "drawdown": -34.7,
              "m1": -15.3,
              "m3": -12.7
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
              "pos52": 30.6,
              "drawdown": -58.1,
              "m1": -27.6,
              "m3": -41.2
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 69.6,
              "drawdown": -25.4,
              "m1": -10.9,
              "m3": -6.8
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 43.8,
              "drawdown": -41.6,
              "m1": -14.9,
              "m3": -24.3
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 3.8,
              "drawdown": -90.8,
              "m1": -56.4,
              "m3": -70.2
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 38.8,
              "drawdown": -40.1,
              "m1": -18.9,
              "m3": -17.9
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
              "pos52": 31.9,
              "drawdown": -63.7,
              "m1": -23.8,
              "m3": -46.1
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 31.5,
              "drawdown": -64.1,
              "m1": -32.8,
              "m3": -37.5
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 55.9,
              "drawdown": -41.3,
              "m1": -23.5,
              "m3": -13.7
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
              "pos52": 50.9,
              "drawdown": -39.5,
              "m1": -23.0,
              "m3": -25.8
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 37.1,
              "drawdown": -52.8,
              "m1": -20.2,
              "m3": -35.8
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
              "pos52": 12.1,
              "drawdown": -66.1,
              "m1": -27.8,
              "m3": -49.8
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
              "pos52": 37.4,
              "drawdown": -45.6,
              "m1": -26.9,
              "m3": -26.9
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 69.4,
              "drawdown": -26.4,
              "m1": -10.4,
              "m3": -0.4
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 0.0,
              "drawdown": -51.4,
              "m1": -6.7,
              "m3": -31.2
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 38.9,
              "drawdown": -45.1,
              "m1": -1.3,
              "m3": -15.8
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
              "pos52": 25.1,
              "drawdown": -53.1,
              "m1": -29.9,
              "m3": -44.5
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 22.2,
              "drawdown": -51.2,
              "m1": -29.5,
              "m3": -46.4
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 40.6,
              "drawdown": -42.2,
              "m1": -21.8,
              "m3": -21.0
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
              "pos52": 94.8,
              "drawdown": -1.8,
              "m1": 8.0,
              "m3": 34.4
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 62.0,
              "drawdown": -14.4,
              "m1": -1.5,
              "m3": -0.8
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 74.7,
              "drawdown": -7.6,
              "m1": 3.4,
              "m3": 6.0
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 9.1,
              "drawdown": -53.6,
              "m1": -11.9,
              "m3": 2.4
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
              "pos52": 0.4,
              "drawdown": -56.3,
              "m1": -24.9,
              "m3": -23.2
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 24.9,
              "drawdown": -45.2,
              "m1": -17.4,
              "m3": -32.3
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 72.2,
              "drawdown": -22.6,
              "m1": -19.8,
              "m3": 12.7
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 33.7,
              "drawdown": -41.4,
              "m1": -17.9,
              "m3": 25.9
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
