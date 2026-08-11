// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-08-11 22:30",
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
              "pos52": 98.1,
              "drawdown": -0.3,
              "m1": 2.9,
              "m3": 4.5
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 85.7,
              "drawdown": -3.6,
              "m1": 0.9,
              "m3": 0.8
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 94.7,
              "drawdown": -1.0,
              "m1": 2.5,
              "m3": 8.5
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 99.1,
              "drawdown": -0.2,
              "m1": 2.6,
              "m3": 5.7
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
              "m1": -2.2,
              "m3": -0.6
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 83.2,
              "drawdown": -6.0,
              "m1": 2.7,
              "m3": 4.7
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
              "pos52": 74.5,
              "drawdown": -7.6,
              "m1": 6.9,
              "m3": -0.8
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 69.9,
              "drawdown": -10.3,
              "m1": -3.8,
              "m3": 4.3
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 81.2,
              "drawdown": -6.5,
              "m1": 28.9,
              "m3": 22.4
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 71.2,
              "drawdown": -14.6,
              "m1": -2.5,
              "m3": -11.5
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 86.2,
              "drawdown": -4.1,
              "m1": 10.1,
              "m3": 1.2
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 28.2,
              "drawdown": -23.9,
              "m1": -8.8,
              "m3": 0.1
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 18.0,
              "drawdown": -32.1,
              "m1": -15.7,
              "m3": -25.2
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
              "pos52": 74.5,
              "drawdown": -7.6,
              "m1": 6.9,
              "m3": -0.8
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 75.2,
              "drawdown": -18.3,
              "m1": -11.2,
              "m3": 3.4
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 66.5,
              "drawdown": -13.5,
              "m1": 8.3,
              "m3": -2.7
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
              "pos52": 78.0,
              "drawdown": -11.6,
              "m1": 0.1,
              "m3": 4.6
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 63.7,
              "drawdown": -30.7,
              "m1": -5.2,
              "m3": -24.5
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
              "pos52": 44.1,
              "drawdown": -51.2,
              "m1": -34.6,
              "m3": -24.2
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 68.6,
              "drawdown": -28.4,
              "m1": -7.3,
              "m3": 9.2
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 58.5,
              "drawdown": -33.9,
              "m1": -16.0,
              "m3": -16.0
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 10.2,
              "drawdown": -84.7,
              "m1": -67.9,
              "m3": -63.4
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 43.7,
              "drawdown": -37.0,
              "m1": -11.2,
              "m3": -7.6
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
              "pos52": 43.0,
              "drawdown": -55.8,
              "m1": -38.3,
              "m3": 4.1
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 39.6,
              "drawdown": -56.9,
              "m1": -27.8,
              "m3": -0.9
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 53.6,
              "drawdown": -45.6,
              "m1": -24.1,
              "m3": -17.9
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
              "pos52": 71.0,
              "drawdown": -24.9,
              "m1": -4.7,
              "m3": -1.5
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 54.1,
              "drawdown": -41.3,
              "m1": -21.2,
              "m3": -15.1
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
              "pos52": 52.0,
              "drawdown": -42.3,
              "m1": -20.0,
              "m3": -31.6
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
              "pos52": 71.1,
              "drawdown": -23.0,
              "m1": 6.9,
              "m3": -13.5
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 75.2,
              "drawdown": -22.1,
              "m1": 6.8,
              "m3": -22.1
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 53.0,
              "drawdown": -29.6,
              "m1": 10.8,
              "m3": -19.0
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 55.7,
              "drawdown": -38.2,
              "m1": -13.0,
              "m3": -33.4
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
              "pos52": 57.6,
              "drawdown": -35.8,
              "m1": -19.9,
              "m3": -15.5
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 58.7,
              "drawdown": -32.0,
              "m1": -19.0,
              "m3": -7.4
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 53.0,
              "drawdown": -37.2,
              "m1": -14.2,
              "m3": -17.4
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
              "pos52": 81.2,
              "drawdown": -6.5,
              "m1": 28.9,
              "m3": 22.4
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 71.2,
              "drawdown": -14.6,
              "m1": -2.5,
              "m3": -11.5
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 86.2,
              "drawdown": -4.1,
              "m1": 10.1,
              "m3": 1.2
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 14.5,
              "drawdown": -55.2,
              "m1": 10.6,
              "m3": -24.7
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
              "pos52": 33.5,
              "drawdown": -39.3,
              "m1": 8.4,
              "m3": -21.3
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 62.9,
              "drawdown": -25.1,
              "m1": -7.9,
              "m3": -23.4
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 92.6,
              "drawdown": -5.6,
              "m1": 3.4,
              "m3": 78.8
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 29.0,
              "drawdown": -46.1,
              "m1": 14.2,
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
