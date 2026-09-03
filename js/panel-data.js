// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-09-03 23:39",
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
              "pos52": 96.8,
              "drawdown": -0.6,
              "m1": 0.4,
              "m3": 2.4
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 85.3,
              "drawdown": -3.7,
              "m1": 0.1,
              "m3": -3.0
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 94.2,
              "drawdown": -1.0,
              "m1": -1.0,
              "m3": 4.3
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 87.3,
              "drawdown": -3.2,
              "m1": -1.5,
              "m3": 1.3
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
              "pos52": 69.4,
              "drawdown": -17.4,
              "m1": -3.0,
              "m3": -11.9
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 83.0,
              "drawdown": -6.1,
              "m1": 0.0,
              "m3": -3.6
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
              "pos52": 90.0,
              "drawdown": -3.0,
              "m1": 4.2,
              "m3": 4.5
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 89.8,
              "drawdown": -3.4,
              "m1": 5.6,
              "m3": 5.5
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 85.2,
              "drawdown": -5.1,
              "m1": 4.8,
              "m3": 19.4
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 64.9,
              "drawdown": -14.9,
              "m1": -5.5,
              "m3": -7.9
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 70.5,
              "drawdown": -8.8,
              "m1": -5.0,
              "m3": 2.0
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 33.8,
              "drawdown": -21.5,
              "m1": 3.7,
              "m3": -2.6
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 40.7,
              "drawdown": -23.2,
              "m1": 17.0,
              "m3": -10.1
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
              "pos52": 90.0,
              "drawdown": -3.0,
              "m1": 4.2,
              "m3": 4.5
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 71.0,
              "drawdown": -21.5,
              "m1": -5.4,
              "m3": -12.8
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 34.2,
              "drawdown": -25.7,
              "m1": -14.6,
              "m3": -14.6
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
              "pos52": 75.3,
              "drawdown": -12.7,
              "m1": 0.7,
              "m3": -6.1
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 57.8,
              "drawdown": -35.0,
              "m1": -9.3,
              "m3": -18.0
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
              "pos52": 50.2,
              "drawdown": -45.3,
              "m1": 1.2,
              "m3": -30.5
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 76.6,
              "drawdown": -21.0,
              "m1": 7.3,
              "m3": -3.8
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 61.8,
              "drawdown": -31.0,
              "m1": 4.2,
              "m3": -28.8
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 13.5,
              "drawdown": -81.7,
              "m1": -7.2,
              "m3": -76.5
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 53.3,
              "drawdown": -30.6,
              "m1": 4.2,
              "m3": -14.8
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
              "pos52": 46.2,
              "drawdown": -52.5,
              "m1": -0.8,
              "m3": -32.8
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 44.5,
              "drawdown": -52.3,
              "m1": 0.6,
              "m3": -31.6
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 65.7,
              "drawdown": -33.4,
              "m1": 15.1,
              "m3": -11.6
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
              "pos52": 67.6,
              "drawdown": -27.0,
              "m1": -4.7,
              "m3": -13.7
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 53.5,
              "drawdown": -40.8,
              "m1": -14.9,
              "m3": -23.3
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
              "pos52": 42.9,
              "drawdown": -50.3,
              "m1": -1.4,
              "m3": -30.8
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
              "pos52": 51.0,
              "drawdown": -38.1,
              "m1": -19.4,
              "m3": -37.3
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 77.4,
              "drawdown": -19.5,
              "m1": 2.6,
              "m3": -10.3
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 10.1,
              "drawdown": -47.1,
              "m1": -24.4,
              "m3": -44.7
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 39.3,
              "drawdown": -49.4,
              "m1": -22.3,
              "m3": -40.7
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
              "pos52": 45.1,
              "drawdown": -41.2,
              "m1": -14.2,
              "m3": -31.1
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 43.8,
              "drawdown": -37.0,
              "m1": -9.3,
              "m3": -27.9
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 58.0,
              "drawdown": -29.8,
              "m1": 14.7,
              "m3": -23.6
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
              "pos52": 85.2,
              "drawdown": -5.1,
              "m1": 4.8,
              "m3": 19.4
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 64.9,
              "drawdown": -14.9,
              "m1": -5.5,
              "m3": -7.9
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 70.5,
              "drawdown": -8.8,
              "m1": -5.0,
              "m3": 2.0
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 18.6,
              "drawdown": -52.5,
              "m1": 6.7,
              "m3": -34.6
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
              "pos52": 28.9,
              "drawdown": -40.9,
              "m1": -5.9,
              "m3": -21.7
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 57.8,
              "drawdown": -28.5,
              "m1": -3.3,
              "m3": -17.0
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 11.6,
              "m3": 22.6
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 45.5,
              "drawdown": -35.5,
              "m1": 24.9,
              "m3": -19.3
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
