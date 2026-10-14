// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-10-14 00:43",
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
              "pos52": 99.3,
              "drawdown": -0.1,
              "m1": 2.1,
              "m3": 3.8
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 93.3,
              "drawdown": -1.8,
              "m1": 4.5,
              "m3": 3.8
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 75.0,
              "drawdown": -4.3,
              "m1": -1.3,
              "m3": -1.0
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 65.9,
              "drawdown": -8.7,
              "m1": -3.6,
              "m3": -5.4
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
              "pos52": 77.4,
              "drawdown": -11.6,
              "m1": 4.0,
              "m3": -1.6
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 92.5,
              "drawdown": -2.8,
              "m1": 4.8,
              "m3": 7.1
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
              "pos52": 82.6,
              "drawdown": -5.4,
              "m1": 3.7,
              "m3": 7.0
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 99.9,
              "drawdown": -0.0,
              "m1": 2.6,
              "m3": 8.4
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 9.2,
              "m3": 40.8
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 68.6,
              "drawdown": -12.3,
              "m1": 4.2,
              "m3": -1.8
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 71.3,
              "drawdown": -8.6,
              "m1": 1.1,
              "m3": 4.9
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 86.3,
              "drawdown": -4.5,
              "m1": 14.7,
              "m3": 12.5
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 41.6,
              "drawdown": -22.8,
              "m1": 3.4,
              "m3": -4.6
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
              "pos52": 82.6,
              "drawdown": -5.4,
              "m1": 3.7,
              "m3": 7.0
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 88.0,
              "drawdown": -8.5,
              "m1": 15.1,
              "m3": 8.4
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 33.2,
              "drawdown": -26.1,
              "m1": -1.8,
              "m3": -8.7
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
              "pos52": 80.6,
              "drawdown": -8.5,
              "m1": 2.8,
              "m3": 6.0
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 63.1,
              "drawdown": -28.1,
              "m1": -1.5,
              "m3": -5.9
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
              "pos52": 42.1,
              "drawdown": -49.7,
              "m1": -21.0,
              "m3": -32.9
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 78.1,
              "drawdown": -18.5,
              "m1": 1.4,
              "m3": 0.6
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 54.4,
              "drawdown": -34.1,
              "m1": -11.5,
              "m3": -14.2
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 12.0,
              "drawdown": -83.0,
              "m1": -27.8,
              "m3": -51.2
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 50.9,
              "drawdown": -32.2,
              "m1": -7.4,
              "m3": -10.6
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
              "pos52": 39.5,
              "drawdown": -57.2,
              "m1": -18.3,
              "m3": -40.2
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 39.5,
              "drawdown": -56.6,
              "m1": -13.9,
              "m3": -30.6
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 61.6,
              "drawdown": -36.3,
              "m1": -8.9,
              "m3": -15.4
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
              "pos52": 61.5,
              "drawdown": -31.0,
              "m1": -9.2,
              "m3": -14.2
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 43.3,
              "drawdown": -48.1,
              "m1": -13.5,
              "m3": -31.3
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
              "pos52": 18.6,
              "drawdown": -62.5,
              "m1": -21.8,
              "m3": -54.2
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
              "pos52": 56.3,
              "drawdown": -32.5,
              "m1": -5.7,
              "m3": -7.3
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 85.9,
              "drawdown": -12.2,
              "m1": 7.4,
              "m3": 22.2
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 21.9,
              "drawdown": -38.9,
              "m1": 10.1,
              "m3": -5.5
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 52.0,
              "drawdown": -35.4,
              "m1": 15.9,
              "m3": -9.4
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
              "pos52": 37.7,
              "drawdown": -46.7,
              "m1": -9.6,
              "m3": -34.8
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 35.5,
              "drawdown": -42.5,
              "m1": -9.0,
              "m3": -31.2
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 57.4,
              "drawdown": -30.3,
              "m1": -0.6,
              "m3": 0.6
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
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 9.2,
              "m3": 40.8
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 68.6,
              "drawdown": -12.3,
              "m1": 4.2,
              "m3": -1.8
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 71.3,
              "drawdown": -8.6,
              "m1": 1.1,
              "m3": 4.9
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 11.7,
              "drawdown": -55.5,
              "m1": -8.2,
              "m3": 7.8
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
              "pos52": 24.0,
              "drawdown": -43.4,
              "m1": -9.8,
              "m3": 0.4
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 39.6,
              "drawdown": -36.4,
              "m1": -6.9,
              "m3": -21.1
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 97.6,
              "drawdown": -2.0,
              "m1": 1.7,
              "m3": 26.3
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 56.4,
              "drawdown": -27.4,
              "m1": -0.3,
              "m3": 44.6
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
