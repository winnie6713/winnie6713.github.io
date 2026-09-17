// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-09-17 23:46",
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
              "pos52": 89.6,
              "drawdown": -2.0,
              "m1": -0.6,
              "m3": 3.2
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 84.9,
              "drawdown": -3.8,
              "m1": -0.1,
              "m3": -0.7
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 74.2,
              "drawdown": -4.4,
              "m1": -2.7,
              "m3": 0.8
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 75.7,
              "drawdown": -6.2,
              "m1": -4.7,
              "m3": -1.3
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
              "drawdown": -16.2,
              "m1": -1.6,
              "m3": -10.2
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 86.0,
              "drawdown": -5.0,
              "m1": 1.3,
              "m3": 1.3
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
              "pos52": 77.5,
              "drawdown": -6.7,
              "m1": -0.1,
              "m3": 7.3
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 97.3,
              "drawdown": -0.8,
              "m1": 8.7,
              "m3": 14.0
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 78.5,
              "drawdown": -7.4,
              "m1": 3.5,
              "m3": 31.6
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 67.0,
              "drawdown": -13.6,
              "m1": 1.0,
              "m3": -4.5
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 61.5,
              "drawdown": -11.6,
              "m1": -3.2,
              "m3": 5.8
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 62.2,
              "drawdown": -12.3,
              "m1": 25.5,
              "m3": 20.2
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 35.4,
              "drawdown": -25.2,
              "m1": 8.7,
              "m3": -7.6
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
              "pos52": 77.5,
              "drawdown": -6.7,
              "m1": -0.1,
              "m3": 7.3
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 91.5,
              "drawdown": -6.2,
              "m1": 12.5,
              "m3": 6.4
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 28.9,
              "drawdown": -27.8,
              "m1": -8.6,
              "m3": -11.5
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
              "pos52": 78.5,
              "drawdown": -9.7,
              "m1": 4.4,
              "m3": -0.2
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 71.3,
              "drawdown": -22.8,
              "m1": 12.5,
              "m3": -10.2
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
              "pos52": 54.6,
              "drawdown": -40.2,
              "m1": 16.4,
              "m3": -35.0
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 77.7,
              "drawdown": -19.4,
              "m1": 3.9,
              "m3": -6.3
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 61.5,
              "drawdown": -30.3,
              "m1": 2.0,
              "m3": -30.3
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 16.1,
              "drawdown": -79.2,
              "m1": 6.0,
              "m3": -73.0
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 56.7,
              "drawdown": -28.4,
              "m1": 4.9,
              "m3": -17.4
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
              "pos52": 43.6,
              "drawdown": -54.1,
              "m1": -0.1,
              "m3": -48.5
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 44.7,
              "drawdown": -52.1,
              "m1": 0.0,
              "m3": -41.9
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 67.8,
              "drawdown": -30.9,
              "m1": -0.7,
              "m3": -17.6
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
              "pos52": 67.1,
              "drawdown": -26.5,
              "m1": -11.1,
              "m3": -24.6
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 49.8,
              "drawdown": -43.2,
              "m1": -14.5,
              "m3": -40.5
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
              "pos52": 36.3,
              "drawdown": -53.7,
              "m1": -11.6,
              "m3": -45.6
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
              "pos52": 59.1,
              "drawdown": -30.7,
              "m1": -3.4,
              "m3": -21.9
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 82.3,
              "drawdown": -15.1,
              "m1": 2.3,
              "m3": 2.7
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 5.7,
              "drawdown": -49.0,
              "m1": -21.1,
              "m3": -34.8
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 42.3,
              "drawdown": -45.1,
              "m1": -15.1,
              "m3": -21.2
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
              "pos52": 53.1,
              "drawdown": -35.2,
              "m1": 0.0,
              "m3": -35.2
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 53.6,
              "drawdown": -30.5,
              "m1": 3.1,
              "m3": -26.8
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 69.7,
              "drawdown": -21.5,
              "m1": 0.3,
              "m3": -14.7
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
              "pos52": 78.5,
              "drawdown": -7.4,
              "m1": 3.5,
              "m3": 31.6
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 67.0,
              "drawdown": -13.6,
              "m1": 1.0,
              "m3": -4.5
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 61.5,
              "drawdown": -11.6,
              "m1": -3.2,
              "m3": 5.8
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 17.0,
              "drawdown": -53.6,
              "m1": 5.5,
              "m3": -17.7
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
              "pos52": 23.2,
              "drawdown": -44.2,
              "m1": -14.3,
              "m3": -30.7
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 43.4,
              "drawdown": -35.8,
              "m1": -11.4,
              "m3": -23.9
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 25.6,
              "m3": 40.6
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 52.0,
              "drawdown": -31.2,
              "m1": 7.9,
              "m3": 45.2
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
