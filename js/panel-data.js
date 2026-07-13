// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-07-13 22:43",
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
              "pos52": 94.1,
              "drawdown": -1.1,
              "m1": 3.5,
              "m3": 10.5
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 82.7,
              "drawdown": -4.5,
              "m1": 2.7,
              "m3": 16.6
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 94.4,
              "drawdown": -1.1,
              "m1": 5.1,
              "m3": 9.8
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 92.1,
              "drawdown": -2.3,
              "m1": 4.3,
              "m3": 12.6
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
              "pos52": 78.4,
              "drawdown": -12.5,
              "m1": 2.6,
              "m3": 34.0
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 76.4,
              "drawdown": -8.4,
              "m1": 2.8,
              "m3": 27.3
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
              "pos52": 55.4,
              "drawdown": -13.6,
              "m1": 1.6,
              "m3": 8.0
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 8.8,
              "m3": 21.9
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 20.5,
              "drawdown": -27.4,
              "m1": -1.6,
              "m3": 5.7
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 77.5,
              "drawdown": -12.4,
              "m1": -1.1,
              "m3": 11.2
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 63.7,
              "drawdown": -10.1,
              "m1": 3.9,
              "m3": 3.7
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 50.2,
              "drawdown": -16.6,
              "m1": 15.1,
              "m3": 4.4
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 49.2,
              "drawdown": -19.4,
              "m1": 3.5,
              "m3": 13.1
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
              "pos52": 55.4,
              "drawdown": -13.6,
              "m1": 1.6,
              "m3": 8.0
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 89.3,
              "drawdown": -8.0,
              "m1": 18.1,
              "m3": 118.1
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 53.3,
              "drawdown": -20.1,
              "m1": 3.4,
              "m3": 3.5
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
              "pos52": 77.8,
              "drawdown": -11.7,
              "m1": 3.4,
              "m3": 14.0
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 68.9,
              "drawdown": -26.8,
              "m1": -3.7,
              "m3": 65.3
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
              "pos52": 59.9,
              "drawdown": -36.8,
              "m1": -14.2,
              "m3": 84.9
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 75.1,
              "drawdown": -22.8,
              "m1": 5.1,
              "m3": 122.8
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 64.1,
              "drawdown": -29.8,
              "m1": -21.1,
              "m3": 24.8
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 44.5,
              "drawdown": -52.4,
              "m1": -21.4,
              "m3": 187.8
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 55.8,
              "drawdown": -29.0,
              "m1": -0.1,
              "m3": 76.7
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
              "pos52": 60.9,
              "drawdown": -38.3,
              "m1": -17.4,
              "m3": 142.2
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 57.2,
              "drawdown": -40.3,
              "m1": -2.6,
              "m3": 118.9
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 71.2,
              "drawdown": -28.3,
              "m1": 1.9,
              "m3": 96.5
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
              "pos52": 75.5,
              "drawdown": -21.3,
              "m1": 5.5,
              "m3": 71.2
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 72.0,
              "drawdown": -25.6,
              "m1": 13.4,
              "m3": 61.8
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
              "pos52": 68.7,
              "drawdown": -27.8,
              "m1": 1.4,
              "m3": 60.7
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
              "pos52": 64.9,
              "drawdown": -28.0,
              "m1": -13.4,
              "m3": -0.0
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 70.3,
              "drawdown": -27.1,
              "m1": -10.0,
              "m3": -14.4
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 42.1,
              "drawdown": -36.4,
              "m1": -18.2,
              "m3": -28.3
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 66.7,
              "drawdown": -29.0,
              "m1": 2.5,
              "m3": -10.2
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
              "pos52": 77.7,
              "drawdown": -19.8,
              "m1": -1.4,
              "m3": 60.1
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 81.1,
              "drawdown": -16.1,
              "m1": -2.6,
              "m3": 46.7
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 67.7,
              "drawdown": -26.8,
              "m1": -11.7,
              "m3": 4.9
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
              "pos52": 20.5,
              "drawdown": -27.4,
              "m1": -1.6,
              "m3": 5.7
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 77.5,
              "drawdown": -12.4,
              "m1": -1.1,
              "m3": 11.2
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 63.7,
              "drawdown": -10.1,
              "m1": 3.9,
              "m3": 3.7
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 0.0,
              "drawdown": -59.5,
              "m1": -34.4,
              "m3": -4.4
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
              "pos52": 22.3,
              "drawdown": -44.0,
              "m1": -12.9,
              "m3": -18.3
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 72.4,
              "drawdown": -18.7,
              "m1": 8.9,
              "m3": 3.7
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 89.1,
              "drawdown": -8.3,
              "m1": 15.5,
              "m3": 141.0
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 17.7,
              "drawdown": -54.4,
              "m1": -5.5,
              "m3": 9.5
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
