// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-08-24 22:14",
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
              "pos52": 90.2,
              "drawdown": -1.9,
              "m1": 3.3,
              "m3": 2.7
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 79.2,
              "drawdown": -5.2,
              "m1": 3.2,
              "m3": -1.5
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 90.9,
              "drawdown": -1.6,
              "m1": 3.0,
              "m3": 5.8
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 90.8,
              "drawdown": -2.3,
              "m1": 2.3,
              "m3": 4.8
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
              "pos52": 68.1,
              "drawdown": -18.3,
              "m1": -2.6,
              "m3": -5.1
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 74.6,
              "drawdown": -9.1,
              "m1": 2.4,
              "m3": -0.1
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
              "pos52": 61.7,
              "drawdown": -11.5,
              "m1": 0.8,
              "m3": -3.1
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 74.1,
              "drawdown": -8.7,
              "m1": -6.7,
              "m3": 0.6
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 72.9,
              "drawdown": -9.4,
              "m1": 27.9,
              "m3": 16.6
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 72.3,
              "drawdown": -13.5,
              "m1": 8.9,
              "m3": -9.1
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 74.2,
              "drawdown": -7.7,
              "m1": 12.9,
              "m3": -1.6
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 13.4,
              "drawdown": -28.1,
              "m1": -6.1,
              "m3": -8.3
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 26.4,
              "drawdown": -28.8,
              "m1": 11.5,
              "m3": -18.1
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
              "pos52": 61.7,
              "drawdown": -11.5,
              "m1": 0.8,
              "m3": -3.1
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 71.1,
              "drawdown": -21.4,
              "m1": -12.5,
              "m3": -2.3
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 35.3,
              "drawdown": -25.4,
              "m1": -6.1,
              "m3": -13.2
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
              "pos52": 73.2,
              "drawdown": -14.1,
              "m1": 1.7,
              "m3": 1.6
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 54.1,
              "drawdown": -38.1,
              "m1": -5.5,
              "m3": -27.2
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
              "pos52": 55.4,
              "drawdown": -40.7,
              "m1": -5.5,
              "m3": -0.8
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 72.4,
              "drawdown": -25.0,
              "m1": -1.1,
              "m3": 21.2
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
              "pos52": 16.4,
              "drawdown": -78.9,
              "m1": -34.5,
              "m3": -57.4
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 50.1,
              "drawdown": -32.8,
              "m1": 2.0,
              "m3": 2.8
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
              "pos52": 48.8,
              "drawdown": -50.0,
              "m1": -15.5,
              "m3": -5.4
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 41.3,
              "drawdown": -55.2,
              "m1": -4.0,
              "m3": -12.4
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 63.2,
              "drawdown": -36.1,
              "m1": 3.9,
              "m3": 1.0
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
              "pos52": 67.9,
              "drawdown": -27.3,
              "m1": -6.7,
              "m3": -2.2
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 53.4,
              "drawdown": -41.7,
              "m1": -16.2,
              "m3": -10.1
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
              "pos52": 55.4,
              "drawdown": -35.5,
              "m1": -2.4,
              "m3": -27.0
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 76.0,
              "drawdown": -21.2,
              "m1": 8.8,
              "m3": -12.3
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 25.1,
              "drawdown": -43.6,
              "m1": -11.5,
              "m3": -40.2
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 52.4,
              "drawdown": -40.7,
              "m1": -4.9,
              "m3": -36.3
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
              "pos52": 58.9,
              "drawdown": -31.8,
              "m1": -12.1,
              "m3": -13.7
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 58.8,
              "drawdown": -27.6,
              "m1": -11.1,
              "m3": -5.9
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 69.0,
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
              "pos52": 72.9,
              "drawdown": -9.4,
              "m1": 27.9,
              "m3": 16.6
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 72.3,
              "drawdown": -13.5,
              "m1": 8.9,
              "m3": -9.1
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 74.2,
              "drawdown": -7.7,
              "m1": 12.9,
              "m3": -1.6
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 13.1,
              "drawdown": -56.1,
              "m1": 23.9,
              "m3": -25.6
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
              "pos52": 30.9,
              "drawdown": -39.7,
              "m1": 20.0,
              "m3": -18.2
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 52.4,
              "drawdown": -32.2,
              "m1": -12.2,
              "m3": -22.1
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 84.0,
              "drawdown": -12.4,
              "m1": -1.0,
              "m3": 47.0
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 38.4,
              "drawdown": -40.1,
              "m1": 16.8,
              "m3": -1.2
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
