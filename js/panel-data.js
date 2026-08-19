// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-08-19 22:13",
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
              "m1": 2.8,
              "m3": 5.1
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 84.4,
              "drawdown": -3.9,
              "m1": 1.0,
              "m3": 2.2
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 91.6,
              "drawdown": -1.6,
              "m1": 2.4,
              "m3": 8.5
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 95.9,
              "drawdown": -1.1,
              "m1": 1.7,
              "m3": 10.8
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
              "pos52": 71.8,
              "drawdown": -16.1,
              "m1": -4.0,
              "m3": 3.1
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 79.7,
              "drawdown": -7.2,
              "m1": 1.6,
              "m3": 6.1
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
              "pos52": 74.6,
              "drawdown": -7.6,
              "m1": 5.0,
              "m3": -1.3
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 80.2,
              "drawdown": -6.8,
              "m1": -3.2,
              "m3": 6.1
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 70.8,
              "drawdown": -10.1,
              "m1": 21.8,
              "m3": 16.3
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 71.7,
              "drawdown": -14.3,
              "m1": -0.7,
              "m3": -11.0
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 78.7,
              "drawdown": -6.4,
              "m1": 7.4,
              "m3": 2.5
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 8.2,
              "drawdown": -29.8,
              "m1": -15.2,
              "m3": -9.3
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 27.6,
              "drawdown": -28.3,
              "m1": -7.3,
              "m3": -13.1
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
              "pos52": 74.6,
              "drawdown": -7.6,
              "m1": 5.0,
              "m3": -1.3
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 73.4,
              "drawdown": -19.7,
              "m1": -14.3,
              "m3": 12.6
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 38.8,
              "drawdown": -24.6,
              "m1": -6.2,
              "m3": -11.7
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
              "pos52": 74.1,
              "drawdown": -13.7,
              "m1": -2.9,
              "m3": 5.2
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 59.0,
              "drawdown": -34.2,
              "m1": -12.0,
              "m3": -16.2
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
              "pos52": 47.0,
              "drawdown": -48.6,
              "m1": -15.0,
              "m3": -18.5
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 74.8,
              "drawdown": -22.8,
              "m1": -3.5,
              "m3": 34.1
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 61.2,
              "drawdown": -31.6,
              "m1": 1.4,
              "m3": -11.8
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 14.9,
              "drawdown": -80.3,
              "m1": -29.8,
              "m3": -59.2
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 51.7,
              "drawdown": -31.7,
              "m1": -6.3,
              "m3": 10.8
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
              "pos52": 44.8,
              "drawdown": -54.0,
              "m1": -4.1,
              "m3": -2.6
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 42.6,
              "drawdown": -54.1,
              "m1": -19.4,
              "m3": -1.7
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 66.6,
              "drawdown": -32.8,
              "m1": -1.3,
              "m3": 13.4
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
              "pos52": 72.3,
              "drawdown": -23.8,
              "m1": -6.6,
              "m3": 13.6
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 57.7,
              "drawdown": -38.1,
              "m1": -15.7,
              "m3": 1.4
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
              "pos52": 45.9,
              "drawdown": -47.6,
              "m1": -10.2,
              "m3": -29.6
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
              "pos52": 59.0,
              "drawdown": -32.7,
              "m1": -9.4,
              "m3": -18.7
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 75.9,
              "drawdown": -21.4,
              "m1": -1.2,
              "m3": -7.0
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 37.8,
              "drawdown": -39.1,
              "m1": -13.8,
              "m3": -32.9
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 57.9,
              "drawdown": -36.3,
              "m1": -2.3,
              "m3": -26.3
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
              "pos52": 56.5,
              "drawdown": -35.2,
              "m1": -21.2,
              "m3": -9.8
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 53.6,
              "drawdown": -32.6,
              "m1": -25.4,
              "m3": 2.0
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 71.4,
              "drawdown": -21.7,
              "m1": 20.1,
              "m3": 15.4
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
              "pos52": 70.8,
              "drawdown": -10.1,
              "m1": 21.8,
              "m3": 16.3
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 71.7,
              "drawdown": -14.3,
              "m1": -0.7,
              "m3": -11.0
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 78.7,
              "drawdown": -6.4,
              "m1": 7.4,
              "m3": 2.5
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 13.7,
              "drawdown": -55.7,
              "m1": 13.2,
              "m3": -20.5
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
              "pos52": 36.5,
              "drawdown": -36.5,
              "m1": 14.2,
              "m3": -9.0
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 54.7,
              "drawdown": -30.6,
              "m1": -14.3,
              "m3": -19.1
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 85.2,
              "drawdown": -11.5,
              "m1": 8.3,
              "m3": 86.3
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 42.1,
              "drawdown": -37.7,
              "m1": 43.5,
              "m3": 19.7
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
