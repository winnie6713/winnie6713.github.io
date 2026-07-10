// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-07-10 22:49",
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
              "m1": 2.7,
              "m3": 11.3
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 89.8,
              "drawdown": -2.7,
              "m1": 2.6,
              "m3": 19.0
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 95.7,
              "drawdown": -0.8,
              "m1": 3.5,
              "m3": 9.5
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 94.9,
              "drawdown": -1.5,
              "m1": 4.1,
              "m3": 13.3
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
              "pos52": 85.0,
              "drawdown": -8.7,
              "m1": 3.4,
              "m3": 42.0
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 82.8,
              "drawdown": -6.2,
              "m1": 2.9,
              "m3": 30.9
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
              "pos52": 65.8,
              "drawdown": -10.4,
              "m1": 1.3,
              "m3": 14.8
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 99.2,
              "drawdown": -0.3,
              "m1": 8.5,
              "m3": 21.2
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 17.4,
              "drawdown": -28.5,
              "m1": -4.5,
              "m3": 3.4
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 79.7,
              "drawdown": -11.2,
              "m1": -1.9,
              "m3": 12.2
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 61.1,
              "drawdown": -10.8,
              "m1": 0.5,
              "m3": 5.0
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 54.9,
              "drawdown": -15.0,
              "m1": 14.6,
              "m3": 6.6
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 56.1,
              "drawdown": -16.8,
              "m1": 2.8,
              "m3": 18.0
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
              "pos52": 65.8,
              "drawdown": -10.4,
              "m1": 1.3,
              "m3": 14.8
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 94.7,
              "drawdown": -4.0,
              "m1": 17.3,
              "m3": 135.8
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 61.2,
              "drawdown": -16.8,
              "m1": 2.2,
              "m3": 12.9
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
              "pos52": 82.8,
              "drawdown": -9.1,
              "m1": 1.7,
              "m3": 19.1
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 74.4,
              "drawdown": -22.1,
              "m1": 1.8,
              "m3": 78.0
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
              "pos52": 72.4,
              "drawdown": -25.3,
              "m1": 3.8,
              "m3": 111.1
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 78.9,
              "drawdown": -19.3,
              "m1": 4.7,
              "m3": 132.4
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 74.4,
              "drawdown": -21.4,
              "m1": -4.7,
              "m3": 35.4
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 48.2,
              "drawdown": -48.8,
              "m1": -2.6,
              "m3": 352.0
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 66.6,
              "drawdown": -21.9,
              "m1": 5.3,
              "m3": 94.7
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
              "pos52": 70.2,
              "drawdown": -29.2,
              "m1": 2.1,
              "m3": 179.0
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 67.3,
              "drawdown": -30.8,
              "m1": 6.3,
              "m3": 168.8
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 81.7,
              "drawdown": -17.9,
              "m1": 16.4,
              "m3": 125.0
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
              "pos52": 80.7,
              "drawdown": -16.7,
              "m1": 7.7,
              "m3": 81.9
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 75.9,
              "drawdown": -21.9,
              "m1": 12.5,
              "m3": 72.5
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
              "pos52": 78.9,
              "drawdown": -18.7,
              "m1": 15.9,
              "m3": 81.8
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
              "pos52": 69.9,
              "drawdown": -24.0,
              "m1": -8.8,
              "m3": 14.2
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 73.9,
              "drawdown": -23.8,
              "m1": -2.4,
              "m3": -10.3
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 41.3,
              "drawdown": -36.9,
              "m1": -19.6,
              "m3": -23.8
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 69.7,
              "drawdown": -26.5,
              "m1": 4.9,
              "m3": -5.5
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
              "pos52": 76.7,
              "drawdown": -20.9,
              "m1": -4.6,
              "m3": 59.2
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 83.1,
              "drawdown": -14.3,
              "m1": -5.0,
              "m3": 46.3
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 71.7,
              "drawdown": -23.5,
              "m1": -7.4,
              "m3": 12.9
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
              "pos52": 17.4,
              "drawdown": -28.5,
              "m1": -4.5,
              "m3": 3.4
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 79.7,
              "drawdown": -11.2,
              "m1": -1.9,
              "m3": 12.2
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 61.1,
              "drawdown": -10.8,
              "m1": 0.5,
              "m3": 5.0
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 2.4,
              "drawdown": -56.8,
              "m1": -31.7,
              "m3": 2.0
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
              "drawdown": -40.2,
              "m1": -9.7,
              "m3": -3.4
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 77.5,
              "drawdown": -15.2,
              "m1": 10.2,
              "m3": 10.9
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 91.3,
              "drawdown": -6.7,
              "m1": 13.9,
              "m3": 140.4
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 19.4,
              "drawdown": -53.4,
              "m1": -30.3,
              "m3": 21.9
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
