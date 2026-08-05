// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-08-05 22:47",
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
              "pos52": 98.9,
              "drawdown": -0.2,
              "m1": 3.0,
              "m3": 6.6
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 85.1,
              "drawdown": -3.8,
              "m1": 1.1,
              "m3": 5.4
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 2.7,
              "m3": 10.5
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 97.7,
              "drawdown": -0.6,
              "m1": 1.2,
              "m3": 6.3
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
              "pos52": 74.1,
              "drawdown": -14.8,
              "m1": -2.0,
              "m3": 9.0
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 82.9,
              "drawdown": -6.1,
              "m1": 3.8,
              "m3": 12.4
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
              "pos52": 77.0,
              "drawdown": -6.9,
              "m1": 11.3,
              "m3": 11.7
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 77.2,
              "drawdown": -8.6,
              "m1": 0.1,
              "m3": 9.5
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 72.4,
              "drawdown": -9.5,
              "m1": 25.4,
              "m3": 18.8
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 80.7,
              "drawdown": -9.9,
              "m1": -1.3,
              "m3": -6.6
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 86.7,
              "drawdown": -4.0,
              "m1": 10.8,
              "m3": -0.3
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 24.2,
              "drawdown": -25.2,
              "m1": -4.4,
              "m3": -2.6
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 12.1,
              "drawdown": -34.4,
              "m1": -20.2,
              "m3": -17.4
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
              "pos52": 77.0,
              "drawdown": -6.9,
              "m1": 11.3,
              "m3": 11.7
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 77.0,
              "drawdown": -17.0,
              "m1": -6.6,
              "m3": 35.7
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 67.7,
              "drawdown": -13.0,
              "m1": 12.8,
              "m3": -2.0
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
              "pos52": 74.8,
              "drawdown": -13.3,
              "m1": -4.3,
              "m3": 5.2
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 67.1,
              "drawdown": -28.3,
              "m1": -8.5,
              "m3": -6.6
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
              "pos52": 53.2,
              "drawdown": -42.9,
              "m1": -28.8,
              "m3": 15.3
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 71.0,
              "drawdown": -26.4,
              "m1": -4.8,
              "m3": 39.5
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 60.7,
              "drawdown": -32.1,
              "m1": -22.6,
              "m3": 5.9
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 15.0,
              "drawdown": -80.2,
              "m1": -65.9,
              "m3": -36.6
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 49.1,
              "drawdown": -33.4,
              "m1": -11.3,
              "m3": 16.1
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
              "drawdown": -50.0,
              "m1": -33.4,
              "m3": 25.1
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 44.1,
              "drawdown": -52.6,
              "m1": -23.9,
              "m3": 12.7
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 57.1,
              "drawdown": -42.2,
              "m1": -16.5,
              "m3": -4.0
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
              "pos52": 73.0,
              "drawdown": -23.4,
              "m1": 1.2,
              "m3": 8.7
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 66.2,
              "drawdown": -30.4,
              "m1": -2.4,
              "m3": 11.6
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
              "pos52": 43.7,
              "drawdown": -49.5,
              "m1": -41.9,
              "m3": -24.4
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
              "pos52": 71.0,
              "drawdown": -23.1,
              "m1": 4.5,
              "m3": -2.2
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 75.9,
              "drawdown": -21.5,
              "m1": 18.2,
              "m3": -16.9
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 52.2,
              "drawdown": -30.0,
              "m1": 11.5,
              "m3": -20.9
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 59.6,
              "drawdown": -34.8,
              "m1": -2.4,
              "m3": -25.0
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
              "pos52": 63.0,
              "drawdown": -31.4,
              "m1": -15.5,
              "m3": 8.0
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 61.3,
              "drawdown": -30.5,
              "m1": -16.8,
              "m3": 5.6
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 51.4,
              "drawdown": -38.8,
              "m1": -11.2,
              "m3": -7.3
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
              "pos52": 72.4,
              "drawdown": -9.5,
              "m1": 25.4,
              "m3": 18.8
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 80.7,
              "drawdown": -9.9,
              "m1": -1.3,
              "m3": -6.6
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 86.7,
              "drawdown": -4.0,
              "m1": 10.8,
              "m3": -0.3
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 14.0,
              "drawdown": -55.5,
              "m1": 2.3,
              "m3": -21.8
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
              "pos52": 33.1,
              "drawdown": -39.6,
              "m1": 7.6,
              "m3": -29.7
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 61.4,
              "drawdown": -26.1,
              "m1": -9.0,
              "m3": -18.5
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 98.7,
              "drawdown": -1.0,
              "m1": 11.1,
              "m3": 114.2
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 25.7,
              "drawdown": -48.3,
              "m1": 15.5,
              "m3": 8.9
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
