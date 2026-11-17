// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-11-17 04:14",
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
              "pos52": 74.0,
              "drawdown": -5.0,
              "m1": -3.1,
              "m3": -3.3
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 51.7,
              "drawdown": -12.9,
              "m1": -6.8,
              "m3": -7.7
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 72.8,
              "drawdown": -4.7,
              "m1": -0.7,
              "m3": -2.9
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 59.5,
              "drawdown": -10.3,
              "m1": 0.9,
              "m3": -8.9
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
              "pos52": 40.0,
              "drawdown": -30.9,
              "m1": -14.4,
              "m3": -18.9
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 50.2,
              "drawdown": -18.4,
              "m1": -10.2,
              "m3": -11.1
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
              "drawdown": -34.7,
              "m1": -27.1,
              "m3": -28.9
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 96.8,
              "drawdown": -1.0,
              "m1": 2.8,
              "m3": 13.9
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 81.4,
              "drawdown": -6.8,
              "m1": -2.1,
              "m3": 7.8
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 8.2,
              "drawdown": -29.4,
              "m1": -16.7,
              "m3": -17.5
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 69.2,
              "drawdown": -9.2,
              "m1": 3.1,
              "m3": -0.7
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 40.2,
              "drawdown": -19.4,
              "m1": -11.7,
              "m3": 15.3
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 42.5,
              "drawdown": -22.5,
              "m1": 7.1,
              "m3": 12.7
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
              "drawdown": -34.7,
              "m1": -27.1,
              "m3": -28.9
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 68.3,
              "drawdown": -22.3,
              "m1": -4.6,
              "m3": 4.1
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 22.2,
              "drawdown": -30.5,
              "m1": 1.4,
              "m3": -12.1
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
              "pos52": 47.4,
              "drawdown": -23.1,
              "m1": -9.5,
              "m3": -9.4
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 20.4,
              "drawdown": -60.6,
              "m1": -38.3,
              "m3": -42.6
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
              "m1": -11.7,
              "m3": -29.2
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 51.2,
              "drawdown": -40.7,
              "m1": -18.2,
              "m3": -23.6
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 37.8,
              "drawdown": -46.0,
              "m1": -11.9,
              "m3": -27.1
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 1.6,
              "drawdown": -92.9,
              "m1": -28.5,
              "m3": -67.3
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 21.7,
              "drawdown": -51.4,
              "m1": -15.5,
              "m3": -28.7
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
              "pos52": 15.3,
              "drawdown": -78.2,
              "m1": -40.9,
              "m3": -54.2
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 15.2,
              "drawdown": -78.3,
              "m1": -35.8,
              "m3": -54.6
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 28.7,
              "drawdown": -65.3,
              "m1": -37.7,
              "m3": -50.2
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
              "pos52": 30.7,
              "drawdown": -54.3,
              "m1": -21.9,
              "m3": -44.7
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 23.4,
              "drawdown": -62.3,
              "m1": -15.4,
              "m3": -43.4
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
              "pos52": 1.0,
              "drawdown": -71.4,
              "m1": -14.9,
              "m3": -50.1
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
              "pos52": 23.3,
              "drawdown": -52.3,
              "m1": -12.7,
              "m3": -33.6
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 34.7,
              "drawdown": -51.8,
              "m1": -33.7,
              "m3": -37.5
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 4.0,
              "drawdown": -58.3,
              "m1": -14.4,
              "m3": -35.6
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 18.0,
              "drawdown": -58.9,
              "m1": -22.6,
              "m3": -36.5
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
              "drawdown": -70.5,
              "m1": -38.4,
              "m3": -55.7
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 0.0,
              "drawdown": -73.0,
              "m1": -46.5,
              "m3": -61.5
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 2.5,
              "drawdown": -69.2,
              "m1": -46.4,
              "m3": -54.5
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
              "pos52": 81.4,
              "drawdown": -6.8,
              "m1": -2.1,
              "m3": 7.8
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 8.2,
              "drawdown": -29.4,
              "m1": -16.7,
              "m3": -17.5
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 69.2,
              "drawdown": -9.2,
              "m1": 3.1,
              "m3": -0.7
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 3.4,
              "drawdown": -51.7,
              "m1": -7.1,
              "m3": -16.3
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
              "m1": -18.7,
              "m3": -46.5
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 17.2,
              "drawdown": -49.8,
              "m1": -8.6,
              "m3": -30.8
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 44.0,
              "drawdown": -45.4,
              "m1": -28.9,
              "m3": -31.5
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 15.2,
              "drawdown": -50.1,
              "m1": -20.9,
              "m3": -33.1
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
