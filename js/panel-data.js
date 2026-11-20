// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-11-20 02:44",
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
              "pos52": 57.9,
              "drawdown": -8.1,
              "m1": -7.4,
              "m3": -6.3
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 43.4,
              "drawdown": -15.1,
              "m1": -11.1,
              "m3": -9.5
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 46.0,
              "drawdown": -9.3,
              "m1": -7.0,
              "m3": -7.6
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 48.3,
              "drawdown": -13.2,
              "m1": -4.4,
              "m3": -11.7
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
              "pos52": 35.8,
              "drawdown": -33.1,
              "m1": -19.6,
              "m3": -20.2
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 44.8,
              "drawdown": -20.5,
              "m1": -14.8,
              "m3": -12.2
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
              "drawdown": -39.0,
              "m1": -34.2,
              "m3": -31.9
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 93.6,
              "drawdown": -2.0,
              "m1": 1.6,
              "m3": 13.0
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 72.2,
              "drawdown": -10.2,
              "m1": -6.3,
              "m3": 3.3
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 0.0,
              "drawdown": -32.2,
              "m1": -18.6,
              "m3": -20.9
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 68.7,
              "drawdown": -9.4,
              "m1": -1.9,
              "m3": -0.5
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 36.2,
              "drawdown": -20.7,
              "m1": -11.2,
              "m3": 13.0
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 39.7,
              "drawdown": -23.6,
              "m1": -3.1,
              "m3": 3.2
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
              "drawdown": -39.0,
              "m1": -34.2,
              "m3": -31.9
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 65.1,
              "drawdown": -24.7,
              "m1": -11.5,
              "m3": 3.4
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 29.3,
              "drawdown": -27.8,
              "m1": 2.6,
              "m3": -5.7
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
              "pos52": 37.4,
              "drawdown": -27.5,
              "m1": -18.5,
              "m3": -15.7
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 20.6,
              "drawdown": -60.5,
              "m1": -40.1,
              "m3": -38.1
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
              "pos52": 24.9,
              "drawdown": -61.8,
              "m1": -8.8,
              "m3": -25.7
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 48.3,
              "drawdown": -43.1,
              "m1": -24.4,
              "m3": -28.6
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 35.1,
              "drawdown": -48.1,
              "m1": -13.8,
              "m3": -24.0
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 1.3,
              "drawdown": -93.1,
              "m1": -34.4,
              "m3": -65.8
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 21.5,
              "drawdown": -51.5,
              "m1": -18.0,
              "m3": -32.0
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
              "pos52": 13.4,
              "drawdown": -79.9,
              "m1": -46.3,
              "m3": -61.8
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 13.9,
              "drawdown": -79.4,
              "m1": -43.0,
              "m3": -57.3
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 26.2,
              "drawdown": -67.7,
              "m1": -45.2,
              "m3": -52.7
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
              "pos52": 33.3,
              "drawdown": -52.3,
              "m1": -25.2,
              "m3": -38.6
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 26.0,
              "drawdown": -60.2,
              "m1": -21.6,
              "m3": -35.4
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
              "drawdown": -73.2,
              "m1": -20.0,
              "m3": -53.8
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
              "pos52": 27.2,
              "drawdown": -49.6,
              "m1": -9.5,
              "m3": -25.8
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 35.3,
              "drawdown": -51.4,
              "m1": -33.0,
              "m3": -37.3
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 4.1,
              "drawdown": -58.2,
              "m1": -12.5,
              "m3": -28.6
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 19.1,
              "drawdown": -58.1,
              "m1": -27.3,
              "m3": -33.6
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
              "pos52": 0.6,
              "drawdown": -71.1,
              "m1": -32.3,
              "m3": -60.0
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 2.3,
              "drawdown": -72.4,
              "m1": -34.7,
              "m3": -63.9
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 1.2,
              "drawdown": -70.1,
              "m1": -46.4,
              "m3": -63.1
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
              "pos52": 72.2,
              "drawdown": -10.2,
              "m1": -6.3,
              "m3": 3.3
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 0.0,
              "drawdown": -32.2,
              "m1": -18.6,
              "m3": -20.9
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 68.7,
              "drawdown": -9.4,
              "m1": -1.9,
              "m3": -0.5
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 0.0,
              "drawdown": -55.1,
              "m1": -14.4,
              "m3": -24.2
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
              "pos52": 4.4,
              "drawdown": -65.3,
              "m1": -23.0,
              "m3": -46.7
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 19.8,
              "drawdown": -48.3,
              "m1": -4.5,
              "m3": -26.5
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 42.5,
              "drawdown": -46.7,
              "m1": -32.2,
              "m3": -27.9
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 11.2,
              "drawdown": -52.5,
              "m1": -33.0,
              "m3": -36.0
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
