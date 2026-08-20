// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-08-20 22:15",
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
              "pos52": 89.8,
              "drawdown": -2.0,
              "m1": 2.0,
              "m3": 3.1
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 81.7,
              "drawdown": -4.6,
              "m1": 0.8,
              "m3": -0.2
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 84.9,
              "drawdown": -2.8,
              "m1": 1.2,
              "m3": 5.8
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 90.9,
              "drawdown": -2.4,
              "m1": 1.3,
              "m3": 6.6
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
              "pos52": 72.3,
              "drawdown": -15.9,
              "m1": -4.1,
              "m3": -0.4
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 78.9,
              "drawdown": -7.5,
              "m1": 1.6,
              "m3": 3.5
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
              "pos52": 73.6,
              "drawdown": -7.9,
              "m1": 2.3,
              "m3": -2.8
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 75.4,
              "drawdown": -8.4,
              "m1": -4.4,
              "m3": 3.1
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 69.1,
              "drawdown": -10.7,
              "m1": 23.3,
              "m3": 14.5
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 69.6,
              "drawdown": -15.3,
              "m1": -0.4,
              "m3": -12.4
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 71.9,
              "drawdown": -8.4,
              "m1": 6.2,
              "m3": -1.8
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 8.2,
              "drawdown": -29.8,
              "m1": -13.0,
              "m3": -9.7
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 24.4,
              "drawdown": -29.5,
              "m1": -7.7,
              "m3": -17.3
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
              "pos52": 73.6,
              "drawdown": -7.9,
              "m1": 2.3,
              "m3": -2.8
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 74.1,
              "drawdown": -19.2,
              "m1": -15.0,
              "m3": 4.9
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 39.6,
              "drawdown": -24.3,
              "m1": -8.3,
              "m3": -12.7
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
              "pos52": 75.6,
              "drawdown": -12.9,
              "m1": -1.2,
              "m3": 3.8
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 58.4,
              "drawdown": -34.6,
              "m1": -10.2,
              "m3": -22.6
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
              "pos52": 54.1,
              "drawdown": -42.1,
              "m1": -7.9,
              "m3": -3.1
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 78.2,
              "drawdown": -19.7,
              "m1": 1.5,
              "m3": 33.1
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 69.2,
              "drawdown": -25.2,
              "m1": 4.6,
              "m3": -1.5
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 14.6,
              "drawdown": -80.6,
              "m1": -36.9,
              "m3": -55.1
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 56.3,
              "drawdown": -28.7,
              "m1": -0.3,
              "m3": 11.8
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
              "pos52": 47.6,
              "drawdown": -51.3,
              "m1": -13.3,
              "m3": -4.3
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 43.3,
              "drawdown": -53.4,
              "m1": -18.9,
              "m3": -1.6
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 67.9,
              "drawdown": -31.5,
              "m1": 0.1,
              "m3": 14.9
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
              "pos52": 74.1,
              "drawdown": -22.2,
              "m1": -6.4,
              "m3": 13.3
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 58.7,
              "drawdown": -37.1,
              "m1": -15.7,
              "m3": 2.1
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
              "m1": -2.4,
              "m3": -30.9
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
              "pos52": 59.8,
              "drawdown": -32.1,
              "m1": -7.1,
              "m3": -19.1
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 81.4,
              "drawdown": -16.5,
              "m1": 6.0,
              "m3": 1.3
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 35.8,
              "drawdown": -40.4,
              "m1": -13.4,
              "m3": -32.8
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 56.5,
              "drawdown": -37.4,
              "m1": -1.2,
              "m3": -29.3
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
              "pos52": 57.2,
              "drawdown": -34.6,
              "m1": -14.8,
              "m3": -12.9
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 54.2,
              "drawdown": -32.2,
              "m1": -18.6,
              "m3": -4.3
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 71.0,
              "drawdown": -22.1,
              "m1": 26.9,
              "m3": 4.1
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
              "pos52": 69.1,
              "drawdown": -10.7,
              "m1": 23.3,
              "m3": 14.5
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 69.6,
              "drawdown": -15.3,
              "m1": -0.4,
              "m3": -12.4
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 71.9,
              "drawdown": -8.4,
              "m1": 6.2,
              "m3": -1.8
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 12.9,
              "drawdown": -56.2,
              "m1": 12.9,
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
              "pos52": 35.2,
              "drawdown": -37.3,
              "m1": 8.6,
              "m3": -11.4
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 56.2,
              "drawdown": -29.6,
              "m1": -12.1,
              "m3": -16.2
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 84.4,
              "drawdown": -12.1,
              "m1": -1.6,
              "m3": 79.3
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 41.9,
              "drawdown": -37.8,
              "m1": 19.4,
              "m3": 9.1
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
