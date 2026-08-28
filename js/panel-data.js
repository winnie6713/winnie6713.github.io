// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-08-28 05:51",
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
              "pos52": 95.4,
              "drawdown": -0.9,
              "m1": 5.7,
              "m3": 2.4
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 87.1,
              "drawdown": -3.3,
              "m1": 9.0,
              "m3": -1.9
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 92.6,
              "drawdown": -1.3,
              "m1": 3.9,
              "m3": 6.0
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 93.2,
              "drawdown": -1.7,
              "m1": 3.9,
              "m3": 2.9
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
              "pos52": 75.0,
              "drawdown": -14.3,
              "m1": 13.6,
              "m3": -4.5
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 86.7,
              "drawdown": -4.7,
              "m1": 13.2,
              "m3": 1.1
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
              "pos52": 89.4,
              "drawdown": -3.2,
              "m1": 20.0,
              "m3": 6.5
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 77.9,
              "drawdown": -7.4,
              "m1": -6.9,
              "m3": 0.7
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 82.4,
              "drawdown": -6.1,
              "m1": 29.6,
              "m3": 18.5
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 67.8,
              "drawdown": -15.3,
              "m1": 1.2,
              "m3": -12.6
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 67.4,
              "drawdown": -9.8,
              "m1": 13.1,
              "m3": -6.5
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 18.2,
              "drawdown": -26.6,
              "m1": -2.5,
              "m3": -10.0
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 29.5,
              "drawdown": -27.6,
              "m1": 18.9,
              "m3": -19.7
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
              "pos52": 89.4,
              "drawdown": -3.2,
              "m1": 20.0,
              "m3": 6.5
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 75.7,
              "drawdown": -17.9,
              "m1": 11.0,
              "m3": -8.0
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 41.8,
              "drawdown": -22.7,
              "m1": 0.3,
              "m3": -12.8
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
              "pos52": 80.0,
              "drawdown": -10.5,
              "m1": 14.0,
              "m3": 0.8
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 58.2,
              "drawdown": -34.7,
              "m1": 12.5,
              "m3": -23.8
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
              "pos52": 53.3,
              "drawdown": -42.6,
              "m1": 19.7,
              "m3": -26.8
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 74.6,
              "drawdown": -22.9,
              "m1": 26.6,
              "m3": 1.3
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 64.7,
              "drawdown": -28.8,
              "m1": 23.6,
              "m3": -13.8
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 15.0,
              "drawdown": -80.2,
              "m1": 13.4,
              "m3": -72.2
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 54.9,
              "drawdown": -29.6,
              "m1": 26.7,
              "m3": -9.2
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
              "pos52": 43.2,
              "drawdown": -55.5,
              "m1": 26.0,
              "m3": -26.6
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 42.6,
              "drawdown": -54.1,
              "m1": 37.7,
              "m3": -20.4
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 62.8,
              "drawdown": -36.4,
              "m1": 46.2,
              "m3": -9.5
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
              "pos52": 73.5,
              "drawdown": -22.5,
              "m1": 10.8,
              "m3": -3.7
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 57.3,
              "drawdown": -38.1,
              "m1": -0.0,
              "m3": -13.0
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
              "pos52": 46.1,
              "drawdown": -47.5,
              "m1": 12.1,
              "m3": -24.8
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
              "pos52": 61.2,
              "drawdown": -30.8,
              "m1": 33.0,
              "m3": -21.6
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 89.5,
              "drawdown": -9.2,
              "m1": 58.7,
              "m3": 11.1
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 24.4,
              "drawdown": -42.0,
              "m1": 4.4,
              "m3": -35.2
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 57.4,
              "drawdown": -36.2,
              "m1": 21.0,
              "m3": -29.9
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
              "pos52": 50.4,
              "drawdown": -37.2,
              "m1": 0.5,
              "m3": -23.2
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 48.2,
              "drawdown": -34.1,
              "m1": 8.5,
              "m3": -17.0
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 64.8,
              "drawdown": -25.0,
              "m1": 66.1,
              "m3": -13.0
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
              "pos52": 82.4,
              "drawdown": -6.1,
              "m1": 29.6,
              "m3": 18.5
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 67.8,
              "drawdown": -15.3,
              "m1": 1.2,
              "m3": -12.6
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 67.4,
              "drawdown": -9.8,
              "m1": 13.1,
              "m3": -6.5
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 17.6,
              "drawdown": -53.2,
              "m1": 29.0,
              "m3": -25.2
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
              "pos52": 31.6,
              "drawdown": -39.3,
              "m1": 42.7,
              "m3": -18.8
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 58.0,
              "drawdown": -28.4,
              "m1": 20.7,
              "m3": -14.3
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 94.2,
              "drawdown": -4.5,
              "m1": 27.8,
              "m3": 49.2
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 47.0,
              "drawdown": -34.5,
              "m1": 49.6,
              "m3": -6.9
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
