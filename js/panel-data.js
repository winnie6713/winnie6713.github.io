// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-07-20 22:44",
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
              "pos52": 89.1,
              "drawdown": -2.0,
              "m1": 0.4,
              "m3": 4.8
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 74.6,
              "drawdown": -6.6,
              "m1": -3.6,
              "m3": 7.4
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 88.1,
              "drawdown": -2.3,
              "m1": 0.6,
              "m3": 5.2
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 90.7,
              "drawdown": -2.7,
              "m1": 0.8,
              "m3": 6.2
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
              "pos52": 71.5,
              "drawdown": -16.5,
              "m1": -10.4,
              "m3": 20.4
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 68.5,
              "drawdown": -11.2,
              "m1": -5.3,
              "m3": 14.0
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
              "pos52": 54.3,
              "drawdown": -13.7,
              "m1": -0.7,
              "m3": 0.9
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 94.6,
              "drawdown": -2.1,
              "m1": 10.4,
              "m3": 21.0
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 26.6,
              "drawdown": -25.3,
              "m1": 6.2,
              "m3": -4.6
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 76.4,
              "drawdown": -12.5,
              "m1": -3.2,
              "m3": 3.1
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 67.2,
              "drawdown": -9.1,
              "m1": 5.3,
              "m3": -0.2
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 46.0,
              "drawdown": -18.0,
              "m1": 13.8,
              "m3": -6.1
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 35.7,
              "drawdown": -24.6,
              "m1": -6.8,
              "m3": -7.8
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
              "pos52": 54.3,
              "drawdown": -13.7,
              "m1": -0.7,
              "m3": 0.9
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 82.0,
              "drawdown": -13.3,
              "m1": -1.7,
              "m3": 80.9
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 49.7,
              "drawdown": -21.3,
              "m1": -3.6,
              "m3": -6.8
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
              "pos52": 70.2,
              "drawdown": -15.8,
              "m1": -6.9,
              "m3": 8.8
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 63.9,
              "drawdown": -31.1,
              "m1": -19.9,
              "m3": 41.7
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
              "pos52": 56.8,
              "drawdown": -39.6,
              "m1": -34.3,
              "m3": 55.3
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 68.6,
              "drawdown": -28.7,
              "m1": -17.0,
              "m3": 90.2
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 60.1,
              "drawdown": -32.7,
              "m1": -32.7,
              "m3": 15.6
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 19.3,
              "drawdown": -76.1,
              "m1": -65.1,
              "m3": 21.4
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 47.8,
              "drawdown": -34.3,
              "m1": -24.1,
              "m3": 49.1
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
              "pos52": 46.8,
              "drawdown": -52.1,
              "m1": -46.2,
              "m3": 60.8
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 45.3,
              "drawdown": -51.5,
              "m1": -41.2,
              "m3": 68.2
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 58.9,
              "drawdown": -40.4,
              "m1": -29.0,
              "m3": 51.0
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
              "pos52": 69.3,
              "drawdown": -26.6,
              "m1": -24.7,
              "m3": 46.6
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 61.9,
              "drawdown": -34.7,
              "m1": -31.6,
              "m3": 30.9
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
              "pos52": 46.0,
              "drawdown": -47.9,
              "m1": -34.8,
              "m3": 1.4
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
              "pos52": 58.4,
              "drawdown": -33.1,
              "m1": -24.7,
              "m3": -17.3
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 69.8,
              "drawdown": -27.3,
              "m1": -12.0,
              "m3": -14.4
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 46.3,
              "drawdown": -33.8,
              "m1": -15.4,
              "m3": -28.4
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 54.3,
              "drawdown": -39.6,
              "m1": -13.3,
              "m3": -25.4
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
              "pos52": 68.4,
              "drawdown": -27.4,
              "m1": -26.6,
              "m3": 24.2
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 79.4,
              "drawdown": -16.5,
              "m1": -12.3,
              "m3": 33.1
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 51.9,
              "drawdown": -39.8,
              "m1": -36.6,
              "m3": -15.7
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
              "pos52": 26.6,
              "drawdown": -25.3,
              "m1": 6.2,
              "m3": -4.6
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 76.4,
              "drawdown": -12.5,
              "m1": -3.2,
              "m3": 3.1
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 67.2,
              "drawdown": -9.1,
              "m1": 5.3,
              "m3": -0.2
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 0.0,
              "drawdown": -62.6,
              "m1": -33.6,
              "m3": -30.4
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
              "pos52": 10.1,
              "drawdown": -50.9,
              "m1": -36.6,
              "m3": -37.5
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 66.8,
              "drawdown": -22.5,
              "m1": -8.2,
              "m3": -5.1
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 76.3,
              "drawdown": -18.0,
              "m1": -8.9,
              "m3": 94.9
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 8.2,
              "drawdown": -60.7,
              "m1": -14.2,
              "m3": -16.6
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
