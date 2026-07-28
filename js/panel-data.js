// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-07-28 22:50",
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
              "pos52": 88.3,
              "drawdown": -2.2,
              "m1": 1.6,
              "m3": 3.9
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 64.0,
              "drawdown": -9.4,
              "m1": -4.4,
              "m3": 1.8
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 97.0,
              "drawdown": -0.6,
              "m1": 1.8,
              "m3": 7.5
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 91.9,
              "drawdown": -2.4,
              "m1": -2.2,
              "m3": 6.1
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
              "pos52": 63.9,
              "drawdown": -20.8,
              "m1": -13.4,
              "m3": 4.6
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 61.9,
              "drawdown": -13.6,
              "m1": -5.5,
              "m3": 6.7
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
              "pos52": 45.4,
              "drawdown": -16.3,
              "m1": 2.3,
              "m3": -8.9
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 19.8,
              "m3": 27.2
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 21.8,
              "drawdown": -27.0,
              "m1": 5.5,
              "m3": -7.2
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 67.9,
              "drawdown": -17.1,
              "m1": -1.1,
              "m3": -4.7
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 42.1,
              "drawdown": -16.0,
              "m1": -0.8,
              "m3": -11.6
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 26.0,
              "drawdown": -24.6,
              "m1": 7.8,
              "m3": -12.5
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 2.6,
              "drawdown": -37.2,
              "m1": -19.0,
              "m3": -18.8
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
              "pos52": 45.4,
              "drawdown": -16.3,
              "m1": 2.3,
              "m3": -8.9
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 70.6,
              "drawdown": -21.7,
              "m1": -12.8,
              "m3": 35.9
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 48.6,
              "drawdown": -20.8,
              "m1": 4.4,
              "m3": -8.8
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
              "pos52": 66.3,
              "drawdown": -17.9,
              "m1": -9.3,
              "m3": -2.9
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 55.1,
              "drawdown": -38.8,
              "m1": -32.7,
              "m3": 1.5
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
              "pos52": 48.8,
              "drawdown": -46.9,
              "m1": -42.0,
              "m3": 26.6
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 64.6,
              "drawdown": -32.4,
              "m1": -27.5,
              "m3": 56.4
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 51.8,
              "drawdown": -39.3,
              "m1": -35.2,
              "m3": -2.0
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 24.8,
              "drawdown": -71.0,
              "m1": -70.1,
              "m3": 28.2
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 37.8,
              "drawdown": -40.8,
              "m1": -33.5,
              "m3": 23.9
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
              "pos52": 39.7,
              "drawdown": -59.0,
              "m1": -51.7,
              "m3": 25.9
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 33.0,
              "drawdown": -63.0,
              "m1": -54.4,
              "m3": 10.7
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 46.0,
              "drawdown": -53.1,
              "m1": -47.6,
              "m3": 2.4
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
              "pos52": 63.5,
              "drawdown": -31.6,
              "m1": -17.0,
              "m3": 25.5
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 58.2,
              "drawdown": -37.9,
              "m1": -21.0,
              "m3": 15.7
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
              "pos52": 38.3,
              "drawdown": -54.4,
              "m1": -54.4,
              "m3": -11.4
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
              "pos52": 46.1,
              "drawdown": -43.0,
              "m1": -36.1,
              "m3": -24.3
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 57.6,
              "drawdown": -38.1,
              "m1": -20.2,
              "m3": -24.2
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 36.8,
              "drawdown": -39.8,
              "m1": -14.3,
              "m3": -34.3
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 48.8,
              "drawdown": -44.1,
              "m1": -26.9,
              "m3": -30.8
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
              "pos52": 60.2,
              "drawdown": -34.3,
              "m1": -25.6,
              "m3": 2.5
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 57.9,
              "drawdown": -33.3,
              "m1": -26.9,
              "m3": 6.2
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 40.7,
              "drawdown": -48.8,
              "m1": -38.5,
              "m3": -21.3
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
              "pos52": 21.8,
              "drawdown": -27.0,
              "m1": 5.5,
              "m3": -7.2
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 67.9,
              "drawdown": -17.1,
              "m1": -1.1,
              "m3": -4.7
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 42.1,
              "drawdown": -16.0,
              "m1": -0.8,
              "m3": -11.6
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 2.4,
              "drawdown": -63.0,
              "m1": -19.0,
              "m3": -30.4
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
              "pos52": 3.3,
              "drawdown": -54.8,
              "m1": -30.3,
              "m3": -39.9
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 58.1,
              "drawdown": -28.3,
              "m1": -11.3,
              "m3": -16.4
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 79.4,
              "drawdown": -15.7,
              "m1": -1.7,
              "m3": 81.9
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 19.7,
              "drawdown": -53.1,
              "m1": -7.1,
              "m3": 2.2
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
