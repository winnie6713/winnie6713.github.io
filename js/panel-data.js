// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-07-29 22:47",
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
              "pos52": 80.3,
              "drawdown": -3.7,
              "m1": -1.6,
              "m3": 2.8
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 56.9,
              "drawdown": -11.2,
              "m1": -8.6,
              "m3": 0.7
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 85.6,
              "drawdown": -2.7,
              "m1": -1.2,
              "m3": 5.3
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 86.5,
              "drawdown": -4.0,
              "m1": -3.5,
              "m3": 5.6
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
              "pos52": 57.3,
              "drawdown": -24.6,
              "m1": -20.2,
              "m3": 2.6
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 55.5,
              "drawdown": -15.9,
              "m1": -10.2,
              "m3": 5.7
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
              "pos52": 35.5,
              "drawdown": -19.3,
              "m1": -2.5,
              "m3": -10.8
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 98.6,
              "drawdown": -0.6,
              "m1": 20.0,
              "m3": 25.0
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 20.3,
              "drawdown": -27.5,
              "m1": 6.0,
              "m3": -8.8
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 69.3,
              "drawdown": -16.3,
              "m1": -4.8,
              "m3": -3.7
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 36.6,
              "drawdown": -17.6,
              "m1": -5.6,
              "m3": -12.7
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 23.0,
              "drawdown": -25.6,
              "m1": 4.1,
              "m3": -12.7
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 0.0,
              "drawdown": -39.1,
              "m1": -27.6,
              "m3": -20.7
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
              "pos52": 35.5,
              "drawdown": -19.3,
              "m1": -2.5,
              "m3": -10.8
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 64.8,
              "drawdown": -26.1,
              "m1": -20.4,
              "m3": 32.9
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 43.1,
              "drawdown": -23.0,
              "m1": -0.6,
              "m3": -7.2
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
              "pos52": 59.3,
              "drawdown": -21.5,
              "m1": -17.7,
              "m3": -4.3
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 51.4,
              "drawdown": -41.9,
              "m1": -37.8,
              "m3": -3.1
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
              "pos52": 43.3,
              "drawdown": -52.0,
              "m1": -46.7,
              "m3": 14.7
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 57.2,
              "drawdown": -39.1,
              "m1": -35.5,
              "m3": 46.6
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 47.9,
              "drawdown": -42.5,
              "m1": -35.4,
              "m3": -5.0
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 15.5,
              "drawdown": -79.7,
              "m1": -75.8,
              "m3": -10.9
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 32.3,
              "drawdown": -44.4,
              "m1": -37.7,
              "m3": 20.1
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
              "pos52": 33.9,
              "drawdown": -64.7,
              "m1": -56.6,
              "m3": 11.0
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 29.2,
              "drawdown": -66.7,
              "m1": -58.2,
              "m3": 5.7
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 42.5,
              "drawdown": -56.5,
              "m1": -50.5,
              "m3": 1.4
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
              "pos52": 65.3,
              "drawdown": -30.1,
              "m1": -21.1,
              "m3": 32.1
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 57.9,
              "drawdown": -38.1,
              "m1": -29.1,
              "m3": 18.2
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
              "pos52": 38.2,
              "drawdown": -54.4,
              "m1": -53.2,
              "m3": -16.1
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
              "pos52": 39.8,
              "drawdown": -48.0,
              "m1": -43.2,
              "m3": -27.0
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 52.4,
              "drawdown": -42.8,
              "m1": -29.3,
              "m3": -23.9
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 29.3,
              "drawdown": -44.5,
              "m1": -21.5,
              "m3": -35.0
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 45.1,
              "drawdown": -47.3,
              "m1": -31.0,
              "m3": -30.3
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
              "pos52": 63.3,
              "drawdown": -31.2,
              "m1": -25.1,
              "m3": 11.1
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 60.6,
              "drawdown": -31.0,
              "m1": -30.6,
              "m3": 9.8
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 39.1,
              "drawdown": -48.6,
              "m1": -39.8,
              "m3": -20.7
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
              "pos52": 20.3,
              "drawdown": -27.5,
              "m1": 6.0,
              "m3": -8.8
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 69.3,
              "drawdown": -16.3,
              "m1": -4.8,
              "m3": -3.7
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 36.6,
              "drawdown": -17.6,
              "m1": -5.6,
              "m3": -12.7
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 1.3,
              "drawdown": -63.7,
              "m1": -20.0,
              "m3": -28.8
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
              "pos52": 0.0,
              "drawdown": -59.1,
              "m1": -36.3,
              "m3": -42.4
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 39.8,
              "drawdown": -40.7,
              "m1": -27.3,
              "m3": -26.9
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 73.1,
              "drawdown": -20.5,
              "m1": -10.7,
              "m3": 79.8
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 12.9,
              "drawdown": -57.7,
              "m1": -8.7,
              "m3": -5.7
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
