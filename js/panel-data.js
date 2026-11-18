// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-11-18 03:12",
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
              "pos52": 69.0,
              "drawdown": -6.0,
              "m1": -4.4,
              "m3": -4.5
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 49.3,
              "drawdown": -13.5,
              "m1": -8.5,
              "m3": -8.2
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 63.7,
              "drawdown": -6.2,
              "m1": -2.2,
              "m3": -4.7
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 54.5,
              "drawdown": -11.6,
              "m1": -0.8,
              "m3": -10.6
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
              "pos52": 39.4,
              "drawdown": -31.2,
              "m1": -16.1,
              "m3": -18.0
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 48.2,
              "drawdown": -19.2,
              "m1": -12.2,
              "m3": -11.0
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
              "pos52": 0.0,
              "drawdown": -35.0,
              "m1": -28.4,
              "m3": -28.5
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 96.1,
              "drawdown": -1.2,
              "m1": 2.7,
              "m3": 11.2
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 75.7,
              "drawdown": -8.9,
              "m1": -5.1,
              "m3": 4.7
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 5.5,
              "drawdown": -30.3,
              "m1": -18.6,
              "m3": -18.7
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 69.3,
              "drawdown": -9.2,
              "m1": -1.7,
              "m3": -3.0
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 37.2,
              "drawdown": -20.4,
              "m1": -12.3,
              "m3": 13.4
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 42.7,
              "drawdown": -22.4,
              "m1": 3.3,
              "m3": 8.3
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
              "pos52": 0.0,
              "drawdown": -35.0,
              "m1": -28.4,
              "m3": -28.5
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 68.2,
              "drawdown": -22.5,
              "m1": -6.4,
              "m3": 7.9
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 26.6,
              "drawdown": -28.8,
              "m1": 2.1,
              "m3": -5.6
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
              "pos52": 41.0,
              "drawdown": -26.0,
              "m1": -14.4,
              "m3": -12.5
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 20.1,
              "drawdown": -60.9,
              "m1": -40.1,
              "m3": -40.5
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
              "pos52": 24.8,
              "drawdown": -61.9,
              "m1": -9.1,
              "m3": -32.4
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 50.5,
              "drawdown": -41.3,
              "m1": -21.3,
              "m3": -24.0
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 36.7,
              "drawdown": -46.9,
              "m1": -10.6,
              "m3": -29.9
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 1.5,
              "drawdown": -92.9,
              "m1": -30.8,
              "m3": -64.0
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 21.1,
              "drawdown": -51.8,
              "m1": -19.4,
              "m3": -29.4
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
              "pos52": 15.2,
              "drawdown": -78.3,
              "m1": -42.2,
              "m3": -56.0
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 14.5,
              "drawdown": -78.9,
              "m1": -42.4,
              "m3": -54.2
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 28.2,
              "drawdown": -65.9,
              "m1": -41.9,
              "m3": -49.2
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
              "pos52": 31.3,
              "drawdown": -53.8,
              "m1": -23.7,
              "m3": -39.4
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 23.8,
              "drawdown": -62.0,
              "m1": -19.6,
              "m3": -38.7
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
              "pos52": 0.0,
              "drawdown": -72.5,
              "m1": -18.8,
              "m3": -49.9
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
              "pos52": 25.8,
              "drawdown": -50.6,
              "m1": -9.1,
              "m3": -26.6
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 36.3,
              "drawdown": -50.6,
              "m1": -32.9,
              "m3": -32.3
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 4.8,
              "drawdown": -57.8,
              "m1": -13.2,
              "m3": -30.8
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 19.6,
              "drawdown": -57.8,
              "m1": -23.1,
              "m3": -33.7
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
              "pos52": 0.0,
              "drawdown": -71.6,
              "m1": -39.6,
              "m3": -57.4
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 0.0,
              "drawdown": -74.2,
              "m1": -47.3,
              "m3": -63.4
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 1.8,
              "drawdown": -69.7,
              "m1": -47.6,
              "m3": -58.3
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
              "pos52": 75.7,
              "drawdown": -8.9,
              "m1": -5.1,
              "m3": 4.7
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 5.5,
              "drawdown": -30.3,
              "m1": -18.6,
              "m3": -18.7
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 69.3,
              "drawdown": -9.2,
              "m1": -1.7,
              "m3": -3.0
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 0.3,
              "drawdown": -53.3,
              "m1": -11.3,
              "m3": -19.7
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
              "pos52": 6.6,
              "drawdown": -63.8,
              "m1": -18.4,
              "m3": -45.1
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 18.0,
              "drawdown": -49.4,
              "m1": -7.6,
              "m3": -27.0
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 44.5,
              "drawdown": -45.1,
              "m1": -29.0,
              "m3": -26.1
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 12.2,
              "drawdown": -51.9,
              "m1": -24.8,
              "m3": -34.0
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
