// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-11-19 02:52",
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
              "pos52": 67.5,
              "drawdown": -6.3,
              "m1": -5.1,
              "m3": -4.0
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 50.6,
              "drawdown": -13.2,
              "m1": -8.1,
              "m3": -7.1
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 57.7,
              "drawdown": -7.3,
              "m1": -4.3,
              "m3": -4.6
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 55.9,
              "drawdown": -11.2,
              "m1": -2.1,
              "m3": -9.0
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
              "pos52": 39.3,
              "drawdown": -31.3,
              "m1": -15.9,
              "m3": -18.3
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 48.9,
              "drawdown": -18.9,
              "m1": -11.7,
              "m3": -10.4
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
              "drawdown": -36.9,
              "m1": -30.3,
              "m3": -30.3
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 96.5,
              "drawdown": -1.1,
              "m1": 3.9,
              "m3": 13.3
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 76.7,
              "drawdown": -8.5,
              "m1": -4.4,
              "m3": 5.6
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 7.2,
              "drawdown": -29.8,
              "m1": -17.0,
              "m3": -17.0
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 80.9,
              "drawdown": -5.7,
              "m1": 1.9,
              "m3": 2.9
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
              "pos52": 44.6,
              "drawdown": -21.7,
              "m1": 2.7,
              "m3": 11.2
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
              "drawdown": -36.9,
              "m1": -30.3,
              "m3": -30.3
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 74.0,
              "drawdown": -18.4,
              "m1": -0.9,
              "m3": 12.9
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 33.2,
              "drawdown": -26.2,
              "m1": 5.9,
              "m3": -2.6
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
              "pos52": 42.3,
              "drawdown": -25.4,
              "m1": -14.7,
              "m3": -12.6
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 19.6,
              "drawdown": -61.2,
              "m1": -40.4,
              "m3": -40.7
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
              "pos52": 25.4,
              "drawdown": -61.3,
              "m1": -12.8,
              "m3": -32.1
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 49.8,
              "drawdown": -41.9,
              "m1": -21.3,
              "m3": -27.6
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 37.3,
              "drawdown": -46.5,
              "m1": -14.7,
              "m3": -27.8
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 1.6,
              "drawdown": -92.9,
              "m1": -22.7,
              "m3": -63.5
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
              "pos52": 15.7,
              "drawdown": -77.8,
              "m1": -38.9,
              "m3": -61.0
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 14.0,
              "drawdown": -79.3,
              "m1": -42.4,
              "m3": -55.5
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 27.2,
              "drawdown": -66.8,
              "m1": -43.1,
              "m3": -51.5
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
              "pos52": 32.7,
              "drawdown": -52.8,
              "m1": -23.6,
              "m3": -39.3
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 24.6,
              "drawdown": -61.4,
              "m1": -20.9,
              "m3": -38.5
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
              "pos52": 0.1,
              "drawdown": -72.2,
              "m1": -19.3,
              "m3": -50.5
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
              "pos52": 26.5,
              "drawdown": -50.1,
              "m1": -8.2,
              "m3": -26.6
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
              "pos52": 6.0,
              "drawdown": -57.1,
              "m1": -10.0,
              "m3": -28.1
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 20.0,
              "drawdown": -57.5,
              "m1": -22.0,
              "m3": -32.1
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
              "pos52": 0.4,
              "drawdown": -71.2,
              "m1": -38.6,
              "m3": -57.8
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 0.7,
              "drawdown": -73.6,
              "m1": -45.2,
              "m3": -64.0
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 2.3,
              "drawdown": -69.4,
              "m1": -49.6,
              "m3": -59.5
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
              "pos52": 76.7,
              "drawdown": -8.5,
              "m1": -4.4,
              "m3": 5.6
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 7.2,
              "drawdown": -29.8,
              "m1": -17.0,
              "m3": -17.0
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 80.9,
              "drawdown": -5.7,
              "m1": 1.9,
              "m3": 2.9
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 0.0,
              "drawdown": -53.8,
              "m1": -13.2,
              "m3": -19.5
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
              "pos52": 13.0,
              "drawdown": -51.4,
              "m1": -24.9,
              "m3": -33.2
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
