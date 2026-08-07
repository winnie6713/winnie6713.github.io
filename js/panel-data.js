// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-08-07 01:27",
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
              "drawdown": -0.4,
              "m1": 3.1,
              "m3": 5.0
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 83.6,
              "drawdown": -4.1,
              "m1": 0.5,
              "m3": 2.8
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 95.8,
              "drawdown": -0.9,
              "m1": 3.0,
              "m3": 8.2
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 95.9,
              "drawdown": -1.1,
              "m1": 1.6,
              "m3": 4.2
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
              "pos52": 74.6,
              "drawdown": -14.6,
              "m1": -3.6,
              "m3": 4.0
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 82.1,
              "drawdown": -6.4,
              "m1": 2.2,
              "m3": 9.1
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
              "pos52": 76.6,
              "drawdown": -7.0,
              "m1": 7.3,
              "m3": 5.5
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 77.1,
              "drawdown": -8.1,
              "m1": -0.3,
              "m3": 8.8
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 79.1,
              "drawdown": -7.2,
              "m1": 30.4,
              "m3": 21.0
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 78.4,
              "drawdown": -11.1,
              "m1": -1.2,
              "m3": -10.1
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 86.2,
              "drawdown": -4.1,
              "m1": 11.8,
              "m3": -1.0
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 24.7,
              "drawdown": -25.1,
              "m1": -2.2,
              "m3": -3.7
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 11.1,
              "drawdown": -34.8,
              "m1": -18.9,
              "m3": -19.9
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
              "pos52": 76.6,
              "drawdown": -7.0,
              "m1": 7.3,
              "m3": 5.5
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 78.7,
              "drawdown": -15.8,
              "m1": -5.4,
              "m3": 16.1
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 68.8,
              "drawdown": -12.5,
              "m1": 8.2,
              "m3": -1.0
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
              "pos52": 76.5,
              "drawdown": -12.4,
              "m1": -4.3,
              "m3": -0.1
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 66.1,
              "drawdown": -29.2,
              "m1": -9.5,
              "m3": -11.7
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
              "pos52": 45.9,
              "drawdown": -49.6,
              "m1": -29.1,
              "m3": -11.0
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 69.9,
              "drawdown": -27.4,
              "m1": -7.1,
              "m3": 32.3
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 57.3,
              "drawdown": -34.8,
              "m1": -15.0,
              "m3": -13.0
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 11.9,
              "drawdown": -83.1,
              "m1": -61.7,
              "m3": -56.0
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 44.7,
              "drawdown": -36.3,
              "m1": -17.1,
              "m3": 5.7
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
              "pos52": 41.1,
              "drawdown": -57.7,
              "m1": -36.0,
              "m3": 0.1
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 40.8,
              "drawdown": -55.7,
              "m1": -34.4,
              "m3": 3.9
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 53.1,
              "drawdown": -46.1,
              "m1": -27.1,
              "m3": -10.7
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
              "pos52": 74.6,
              "drawdown": -22.0,
              "m1": -0.8,
              "m3": 8.5
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 56.1,
              "drawdown": -39.5,
              "m1": -18.0,
              "m3": -6.5
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
              "pos52": 43.9,
              "drawdown": -49.3,
              "m1": -38.2,
              "m3": -23.5
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
              "pos52": 72.8,
              "drawdown": -21.7,
              "m1": 5.4,
              "m3": -3.0
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 77.2,
              "drawdown": -20.4,
              "m1": 18.5,
              "m3": -11.2
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 56.9,
              "drawdown": -27.1,
              "m1": 13.3,
              "m3": -19.9
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 58.7,
              "drawdown": -35.6,
              "m1": -8.4,
              "m3": -30.0
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
              "pos52": 63.6,
              "drawdown": -30.9,
              "m1": -15.4,
              "m3": 7.8
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 60.7,
              "drawdown": -30.9,
              "m1": -17.4,
              "m3": 7.3
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 54.4,
              "drawdown": -36.4,
              "m1": -8.3,
              "m3": -3.1
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
              "pos52": 79.1,
              "drawdown": -7.2,
              "m1": 30.4,
              "m3": 21.0
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 78.4,
              "drawdown": -11.1,
              "m1": -1.2,
              "m3": -10.1
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 86.2,
              "drawdown": -4.1,
              "m1": 11.8,
              "m3": -1.0
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 13.6,
              "drawdown": -55.8,
              "m1": 2.5,
              "m3": -25.8
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
              "pos52": 27.9,
              "drawdown": -42.6,
              "m1": -5.2,
              "m3": -38.2
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 60.3,
              "drawdown": -26.8,
              "m1": -13.4,
              "m3": -23.3
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 91.7,
              "drawdown": -6.3,
              "m1": 1.5,
              "m3": 83.6
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 23.2,
              "drawdown": -49.9,
              "m1": 4.3,
              "m3": -15.2
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
