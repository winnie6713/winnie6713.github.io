// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-09-08 23:44",
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
              "pos52": 91.9,
              "drawdown": -1.5,
              "m1": -0.9,
              "m3": 3.9
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 85.6,
              "drawdown": -3.6,
              "m1": -0.6,
              "m3": 0.4
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 84.6,
              "drawdown": -2.6,
              "m1": -2.1,
              "m3": 4.2
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 86.6,
              "drawdown": -3.4,
              "m1": -2.3,
              "m3": 4.0
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
              "pos52": 74.4,
              "drawdown": -14.2,
              "m1": -1.5,
              "m3": -4.1
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 85.7,
              "drawdown": -5.1,
              "m1": -0.1,
              "m3": 2.1
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
              "pos52": 86.2,
              "drawdown": -4.1,
              "m1": 0.8,
              "m3": 8.2
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 79.3,
              "drawdown": -6.9,
              "m1": 1.0,
              "m3": 5.0
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 76.4,
              "drawdown": -8.1,
              "m1": -1.0,
              "m3": 20.2
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 61.6,
              "drawdown": -15.9,
              "m1": -4.4,
              "m3": -6.8
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 68.3,
              "drawdown": -9.5,
              "m1": -6.4,
              "m3": 4.8
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 35.0,
              "drawdown": -21.1,
              "m1": 3.6,
              "m3": 4.9
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 36.5,
              "drawdown": -24.8,
              "m1": 12.0,
              "m3": -10.0
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
              "pos52": 86.2,
              "drawdown": -4.1,
              "m1": 0.8,
              "m3": 8.2
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 82.3,
              "drawdown": -12.9,
              "m1": 4.6,
              "m3": 3.1
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 40.2,
              "drawdown": -23.3,
              "m1": -13.8,
              "m3": -6.9
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
              "pos52": 83.2,
              "drawdown": -8.1,
              "m1": 4.5,
              "m3": 3.1
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 68.8,
              "drawdown": -25.9,
              "m1": 2.8,
              "m3": -5.3
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
              "pos52": 57.4,
              "drawdown": -38.6,
              "m1": 26.1,
              "m3": -19.0
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 80.2,
              "drawdown": -17.6,
              "m1": 14.0,
              "m3": 5.4
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 68.4,
              "drawdown": -25.6,
              "m1": 16.7,
              "m3": -16.2
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 17.2,
              "drawdown": -78.1,
              "m1": 32.2,
              "m3": -58.4
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 63.0,
              "drawdown": -24.3,
              "m1": 20.8,
              "m3": 1.0
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
              "pos52": 51.4,
              "drawdown": -47.2,
              "m1": 20.3,
              "m3": -24.9
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 49.8,
              "drawdown": -47.2,
              "m1": 24.0,
              "m3": -22.9
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 73.6,
              "drawdown": -25.6,
              "m1": 43.4,
              "m3": 5.8
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
              "pos52": 79.1,
              "drawdown": -17.3,
              "m1": 11.3,
              "m3": 3.2
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 58.7,
              "drawdown": -36.0,
              "m1": 9.9,
              "m3": -9.4
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
              "pos52": 42.3,
              "drawdown": -50.4,
              "m1": -13.0,
              "m3": -29.2
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
              "pos52": 61.8,
              "drawdown": -29.3,
              "m1": -20.4,
              "m3": -24.9
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 91.7,
              "drawdown": -7.1,
              "m1": 9.9,
              "m3": 9.3
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 15.5,
              "drawdown": -44.2,
              "m1": -26.0,
              "m3": -33.3
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 43.4,
              "drawdown": -45.6,
              "m1": -17.2,
              "m3": -26.9
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
              "pos52": 53.7,
              "drawdown": -34.7,
              "m1": 4.4,
              "m3": -21.3
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 51.7,
              "drawdown": -31.8,
              "m1": 4.2,
              "m3": -24.4
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 61.9,
              "drawdown": -27.1,
              "m1": 15.9,
              "m3": -11.8
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
              "pos52": 76.4,
              "drawdown": -8.1,
              "m1": -1.0,
              "m3": 20.2
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 61.6,
              "drawdown": -15.9,
              "m1": -4.4,
              "m3": -6.8
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 68.3,
              "drawdown": -9.5,
              "m1": -6.4,
              "m3": 4.8
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 22.7,
              "drawdown": -49.9,
              "m1": 10.5,
              "m3": -23.0
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
              "pos52": 47.4,
              "drawdown": -30.2,
              "m1": 10.1,
              "m3": -2.5
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 66.0,
              "drawdown": -22.7,
              "m1": 6.8,
              "m3": -3.2
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 17.7,
              "m3": 33.4
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 51.7,
              "drawdown": -31.4,
              "m1": 29.3,
              "m3": -8.5
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
