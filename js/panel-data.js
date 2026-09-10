// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-09-10 23:32",
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
              "pos52": 86.4,
              "drawdown": -2.6,
              "m1": -1.7,
              "m3": 4.7
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 80.5,
              "drawdown": -4.9,
              "m1": -1.4,
              "m3": 2.3
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 76.8,
              "drawdown": -4.0,
              "m1": -3.0,
              "m3": 4.5
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 77.6,
              "drawdown": -5.7,
              "m1": -4.4,
              "m3": 2.2
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
              "pos52": 70.3,
              "drawdown": -16.2,
              "m1": -2.2,
              "m3": -1.9
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 81.9,
              "drawdown": -6.4,
              "m1": -0.5,
              "m3": 5.0
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
              "pos52": 75.7,
              "drawdown": -7.3,
              "m1": 0.4,
              "m3": 9.0
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 88.1,
              "drawdown": -3.9,
              "m1": 7.1,
              "m3": 12.1
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 75.6,
              "drawdown": -8.4,
              "m1": -2.1,
              "m3": 24.2
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 58.2,
              "drawdown": -17.3,
              "m1": -3.2,
              "m3": -6.6
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 62.3,
              "drawdown": -11.3,
              "m1": -7.5,
              "m3": 5.8
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 47.2,
              "drawdown": -17.1,
              "m1": 7.6,
              "m3": 13.0
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 34.1,
              "drawdown": -25.8,
              "m1": 9.2,
              "m3": -4.7
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
              "pos52": 75.7,
              "drawdown": -7.3,
              "m1": 0.4,
              "m3": 9.0
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 81.8,
              "drawdown": -13.3,
              "m1": 6.2,
              "m3": 11.3
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 36.1,
              "drawdown": -25.0,
              "m1": -13.3,
              "m3": -2.9
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
              "pos52": 77.6,
              "drawdown": -10.4,
              "m1": 1.4,
              "m3": 5.0
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 65.2,
              "drawdown": -28.8,
              "m1": 2.7,
              "m3": -6.3
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
              "pos52": 59.3,
              "drawdown": -36.5,
              "m1": 30.1,
              "m3": -11.8
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 77.8,
              "drawdown": -19.4,
              "m1": 12.5,
              "m3": 9.6
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 67.9,
              "drawdown": -25.7,
              "m1": 12.3,
              "m3": -9.9
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 19.2,
              "drawdown": -76.3,
              "m1": 58.6,
              "m3": -54.7
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 58.2,
              "drawdown": -27.5,
              "m1": 15.1,
              "m3": 2.1
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
              "pos52": 51.9,
              "drawdown": -46.6,
              "m1": 16.5,
              "m3": -23.0
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 49.7,
              "drawdown": -47.3,
              "m1": 28.9,
              "m3": -19.1
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 71.5,
              "drawdown": -27.5,
              "m1": 33.2,
              "m3": 3.0
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
              "pos52": 74.3,
              "drawdown": -21.1,
              "m1": 5.1,
              "m3": 5.8
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 56.1,
              "drawdown": -38.2,
              "m1": 5.3,
              "m3": -5.9
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
              "pos52": 40.4,
              "drawdown": -52.0,
              "m1": -16.2,
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
              "pos52": 58.7,
              "drawdown": -31.3,
              "m1": -10.8,
              "m3": -17.4
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 87.0,
              "drawdown": -11.1,
              "m1": 14.0,
              "m3": 9.7
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 12.4,
              "drawdown": -45.9,
              "m1": -23.2,
              "m3": -30.4
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 41.0,
              "drawdown": -46.6,
              "m1": -13.7,
              "m3": -23.0
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
              "pos52": 52.5,
              "drawdown": -35.6,
              "m1": -3.4,
              "m3": -22.5
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 50.3,
              "drawdown": -32.7,
              "m1": -4.0,
              "m3": -18.9
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 66.1,
              "drawdown": -24.1,
              "m1": 12.1,
              "m3": -4.3
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
              "pos52": 75.6,
              "drawdown": -8.4,
              "m1": -2.1,
              "m3": 24.2
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 58.2,
              "drawdown": -17.3,
              "m1": -3.2,
              "m3": -6.6
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 62.3,
              "drawdown": -11.3,
              "m1": -7.5,
              "m3": 5.8
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 18.1,
              "drawdown": -52.9,
              "m1": 5.1,
              "m3": -23.7
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
              "pos52": 34.4,
              "drawdown": -37.7,
              "m1": -1.3,
              "m3": -6.8
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 47.0,
              "drawdown": -34.0,
              "m1": -12.0,
              "m3": -11.7
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 93.3,
              "drawdown": -5.3,
              "m1": 14.9,
              "m3": 37.2
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 44.2,
              "drawdown": -36.3,
              "m1": 18.3,
              "m3": 27.7
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
