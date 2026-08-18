// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-08-18 22:11",
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
              "pos52": 93.0,
              "drawdown": -1.3,
              "m1": 3.4,
              "m3": 4.2
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 85.2,
              "drawdown": -3.7,
              "m1": 3.1,
              "m3": 1.8
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 90.2,
              "drawdown": -1.8,
              "m1": 2.9,
              "m3": 7.5
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 94.1,
              "drawdown": -1.6,
              "m1": 2.7,
              "m3": 9.0
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
              "pos52": 74.1,
              "drawdown": -14.8,
              "m1": 2.0,
              "m3": 4.3
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 82.5,
              "drawdown": -6.2,
              "m1": 5.6,
              "m3": 6.6
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
              "pos52": 77.7,
              "drawdown": -6.7,
              "m1": 8.1,
              "m3": -1.0
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 74.3,
              "drawdown": -8.8,
              "m1": -5.0,
              "m3": 4.2
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 69.3,
              "drawdown": -10.6,
              "m1": 19.7,
              "m3": 14.0
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 71.4,
              "drawdown": -14.5,
              "m1": -2.2,
              "m3": -13.2
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 71.2,
              "drawdown": -8.7,
              "m1": 3.8,
              "m3": -2.0
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 7.3,
              "drawdown": -30.1,
              "m1": -15.8,
              "m3": -11.0
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 20.1,
              "drawdown": -31.2,
              "m1": -8.8,
              "m3": -17.8
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
              "pos52": 77.7,
              "drawdown": -6.7,
              "m1": 8.1,
              "m3": -1.0
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 77.5,
              "drawdown": -16.6,
              "m1": -3.8,
              "m3": 15.1
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 47.9,
              "drawdown": -21.0,
              "m1": 0.5,
              "m3": -9.5
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
              "pos52": 74.6,
              "drawdown": -13.4,
              "m1": 2.8,
              "m3": 4.7
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 62.3,
              "drawdown": -31.4,
              "m1": -0.4,
              "m3": -10.6
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
              "pos52": 53.0,
              "drawdown": -43.1,
              "m1": -9.8,
              "m3": -8.6
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 75.2,
              "drawdown": -22.5,
              "m1": 8.7,
              "m3": 38.1
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 68.3,
              "drawdown": -25.8,
              "m1": 5.3,
              "m3": -0.6
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 17.1,
              "drawdown": -78.3,
              "m1": -8.9,
              "m3": -55.1
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 51.6,
              "drawdown": -31.7,
              "m1": 3.8,
              "m3": 11.7
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
              "pos52": 51.5,
              "drawdown": -47.4,
              "m1": -8.0,
              "m3": 14.8
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 44.7,
              "drawdown": -52.1,
              "m1": -1.2,
              "m3": 0.1
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 69.0,
              "drawdown": -30.4,
              "m1": 16.9,
              "m3": 22.0
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
              "pos52": 79.8,
              "drawdown": -17.3,
              "m1": 12.6,
              "m3": 22.1
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 62.8,
              "drawdown": -33.5,
              "m1": 1.8,
              "m3": 8.2
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
              "pos52": 51.1,
              "drawdown": -43.0,
              "m1": 9.5,
              "m3": -27.7
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
              "pos52": 64.6,
              "drawdown": -28.2,
              "m1": 7.4,
              "m3": -15.5
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 80.8,
              "drawdown": -17.1,
              "m1": 14.1,
              "m3": -1.3
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 43.8,
              "drawdown": -35.4,
              "m1": -0.8,
              "m3": -30.7
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 59.0,
              "drawdown": -35.3,
              "m1": 7.1,
              "m3": -22.7
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
              "pos52": 64.9,
              "drawdown": -28.5,
              "m1": -1.6,
              "m3": -4.7
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 63.7,
              "drawdown": -25.9,
              "m1": -11.3,
              "m3": 7.9
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 77.1,
              "drawdown": -17.8,
              "m1": 36.5,
              "m3": 13.9
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
              "pos52": 69.3,
              "drawdown": -10.6,
              "m1": 19.7,
              "m3": 14.0
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 71.4,
              "drawdown": -14.5,
              "m1": -2.2,
              "m3": -13.2
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 71.2,
              "drawdown": -8.7,
              "m1": 3.8,
              "m3": -2.0
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 13.3,
              "drawdown": -56.0,
              "m1": 17.6,
              "m3": -23.2
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
              "pos52": 39.3,
              "drawdown": -34.9,
              "m1": 27.5,
              "m3": -10.2
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 59.3,
              "drawdown": -27.5,
              "m1": -6.6,
              "m3": -19.8
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 93.3,
              "drawdown": -5.2,
              "m1": 22.9,
              "m3": 97.2
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 44.2,
              "drawdown": -36.2,
              "m1": 57.0,
              "m3": 21.3
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
