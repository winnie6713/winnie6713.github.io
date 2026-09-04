// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-09-04 23:32",
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
              "pos52": 94.8,
              "drawdown": -1.0,
              "m1": 0.2,
              "m3": 4.7
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 85.9,
              "drawdown": -3.5,
              "m1": 0.6,
              "m3": 2.1
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 91.2,
              "drawdown": -1.5,
              "m1": -0.7,
              "m3": 5.2
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 88.3,
              "drawdown": -3.0,
              "m1": -0.8,
              "m3": 5.3
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
              "pos52": 72.9,
              "drawdown": -15.2,
              "m1": -0.8,
              "m3": -0.5
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 84.9,
              "drawdown": -5.4,
              "m1": 1.1,
              "m3": 4.0
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
              "pos52": 92.8,
              "drawdown": -2.2,
              "m1": 5.2,
              "m3": 12.3
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 82.6,
              "drawdown": -5.8,
              "m1": 2.5,
              "m3": 4.2
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 79.5,
              "drawdown": -7.1,
              "m1": 0.2,
              "m3": 20.2
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 62.1,
              "drawdown": -15.9,
              "m1": -5.4,
              "m3": -8.1
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 70.1,
              "drawdown": -9.0,
              "m1": -5.1,
              "m3": 5.1
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 36.3,
              "drawdown": -20.7,
              "m1": 4.6,
              "m3": 4.1
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 29.1,
              "drawdown": -27.7,
              "m1": 10.8,
              "m3": -9.4
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
              "pos52": 92.8,
              "drawdown": -2.2,
              "m1": 5.2,
              "m3": 12.3
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 76.0,
              "drawdown": -17.8,
              "m1": -2.4,
              "m3": 2.4
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 34.6,
              "drawdown": -25.6,
              "m1": -14.9,
              "m3": -7.1
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
              "pos52": 79.5,
              "drawdown": -10.2,
              "m1": 2.6,
              "m3": 3.6
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 61.4,
              "drawdown": -32.0,
              "m1": -4.0,
              "m3": -3.4
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
              "pos52": 52.1,
              "drawdown": -43.6,
              "m1": -1.2,
              "m3": -20.4
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 81.8,
              "drawdown": -16.2,
              "m1": 15.3,
              "m3": 17.7
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 63.7,
              "drawdown": -29.4,
              "m1": 3.9,
              "m3": -22.3
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 12.9,
              "drawdown": -82.2,
              "m1": -14.2,
              "m3": -74.8
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 60.3,
              "drawdown": -26.1,
              "m1": 16.0,
              "m3": 7.0
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
              "pos52": 48.9,
              "drawdown": -49.9,
              "m1": 0.3,
              "m3": -30.3
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 49.7,
              "drawdown": -47.4,
              "m1": 18.9,
              "m3": -17.3
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 73.7,
              "drawdown": -25.5,
              "m1": 38.3,
              "m3": 11.6
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
              "pos52": 73.1,
              "drawdown": -22.3,
              "m1": -0.4,
              "m3": 0.3
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 57.4,
              "drawdown": -37.4,
              "m1": 3.5,
              "m3": -8.6
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
              "pos52": 40.9,
              "drawdown": -52.0,
              "m1": -5.3,
              "m3": -28.5
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
              "pos52": 55.9,
              "drawdown": -34.0,
              "m1": -15.7,
              "m3": -25.2
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 81.0,
              "drawdown": -16.3,
              "m1": 5.2,
              "m3": 2.0
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 13.3,
              "drawdown": -45.4,
              "m1": -25.1,
              "m3": -34.4
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 40.0,
              "drawdown": -48.8,
              "m1": -20.5,
              "m3": -34.2
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
              "pos52": 45.2,
              "drawdown": -41.1,
              "m1": -14.8,
              "m3": -29.5
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 44.1,
              "drawdown": -36.8,
              "m1": -8.5,
              "m3": -25.3
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 58.0,
              "drawdown": -29.8,
              "m1": 10.4,
              "m3": -17.9
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
              "pos52": 79.5,
              "drawdown": -7.1,
              "m1": 0.2,
              "m3": 20.2
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 62.1,
              "drawdown": -15.9,
              "m1": -5.4,
              "m3": -8.1
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 70.1,
              "drawdown": -9.0,
              "m1": -5.1,
              "m3": 5.1
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 20.9,
              "drawdown": -51.1,
              "m1": 10.7,
              "m3": -25.4
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
              "pos52": 34.7,
              "drawdown": -37.5,
              "m1": 4.7,
              "m3": -11.0
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 62.4,
              "drawdown": -25.4,
              "m1": 1.9,
              "m3": -6.6
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 19.8,
              "m3": 33.1
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 50.0,
              "drawdown": -32.5,
              "m1": 34.8,
              "m3": -4.9
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
