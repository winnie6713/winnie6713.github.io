// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-07-27 22:50",
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
              "pos52": 87.0,
              "drawdown": -2.4,
              "m1": 0.7,
              "m3": 3.8
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 67.4,
              "drawdown": -8.5,
              "m1": -4.8,
              "m3": 2.9
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 91.4,
              "drawdown": -1.6,
              "m1": 0.4,
              "m3": 6.3
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 91.4,
              "drawdown": -2.5,
              "m1": -2.0,
              "m3": 6.1
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
              "pos52": 68.8,
              "drawdown": -18.0,
              "m1": -13.9,
              "m3": 8.3
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 66.5,
              "drawdown": -12.0,
              "m1": -5.6,
              "m3": 8.9
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
              "pos52": 44.7,
              "drawdown": -16.5,
              "m1": 0.4,
              "m3": -5.5
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 22.4,
              "m3": 24.4
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 19.5,
              "drawdown": -27.8,
              "m1": 10.3,
              "m3": -8.2
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 64.5,
              "drawdown": -18.8,
              "m1": -5.0,
              "m3": -5.1
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 42.8,
              "drawdown": -15.9,
              "m1": 1.9,
              "m3": -12.3
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 26.2,
              "drawdown": -24.6,
              "m1": 9.4,
              "m3": -11.9
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 3.5,
              "drawdown": -36.9,
              "m1": -17.6,
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
              "pos52": 44.7,
              "drawdown": -16.5,
              "m1": 0.4,
              "m3": -5.5
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 80.0,
              "drawdown": -14.8,
              "m1": -7.1,
              "m3": 42.3
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 49.8,
              "drawdown": -20.3,
              "m1": 1.1,
              "m3": -9.2
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
              "pos52": 68.9,
              "drawdown": -16.4,
              "m1": -8.3,
              "m3": -0.6
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 59.5,
              "drawdown": -35.0,
              "m1": -31.0,
              "m3": 11.1
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
              "pos52": 58.8,
              "drawdown": -37.8,
              "m1": -37.7,
              "m3": 48.5
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 71.8,
              "drawdown": -25.8,
              "m1": -25.8,
              "m3": 81.3
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 63.3,
              "drawdown": -29.9,
              "m1": -29.1,
              "m3": 16.8
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 23.8,
              "drawdown": -71.9,
              "m1": -65.8,
              "m3": 22.0
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 46.6,
              "drawdown": -35.0,
              "m1": -31.8,
              "m3": 40.9
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
              "pos52": 49.1,
              "drawdown": -49.8,
              "m1": -47.5,
              "m3": 56.8
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 39.5,
              "drawdown": -56.9,
              "m1": -53.1,
              "m3": 34.4
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 53.9,
              "drawdown": -45.3,
              "m1": -45.3,
              "m3": 29.1
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
              "pos52": 70.8,
              "drawdown": -25.3,
              "m1": -20.3,
              "m3": 39.5
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 63.3,
              "drawdown": -33.3,
              "m1": -26.3,
              "m3": 23.3
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
              "pos52": 45.2,
              "drawdown": -48.3,
              "m1": -45.0,
              "m3": 4.6
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
              "pos52": 54.3,
              "drawdown": -36.4,
              "m1": -33.4,
              "m3": -19.3
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 64.0,
              "drawdown": -32.4,
              "m1": -17.4,
              "m3": -19.2
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 41.3,
              "drawdown": -36.9,
              "m1": -17.1,
              "m3": -34.6
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 53.8,
              "drawdown": -39.8,
              "m1": -22.2,
              "m3": -27.6
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
              "pos52": 74.4,
              "drawdown": -22.1,
              "m1": -14.1,
              "m3": 20.2
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 75.3,
              "drawdown": -19.6,
              "m1": -13.3,
              "m3": 13.2
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 50.1,
              "drawdown": -41.0,
              "m1": -34.2,
              "m3": -16.1
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
              "pos52": 19.5,
              "drawdown": -27.8,
              "m1": 10.3,
              "m3": -8.2
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 64.5,
              "drawdown": -18.8,
              "m1": -5.0,
              "m3": -5.1
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 42.8,
              "drawdown": -15.9,
              "m1": 1.9,
              "m3": -12.3
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 2.3,
              "drawdown": -63.1,
              "m1": -21.1,
              "m3": -30.6
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
              "pos52": 7.4,
              "drawdown": -52.4,
              "m1": -28.3,
              "m3": -35.7
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 65.2,
              "drawdown": -23.5,
              "m1": -11.7,
              "m3": -11.1
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 89.2,
              "drawdown": -8.2,
              "m1": 4.4,
              "m3": 97.9
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 23.1,
              "drawdown": -50.9,
              "m1": -5.9,
              "m3": 2.5
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
