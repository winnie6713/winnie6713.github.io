// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-08-04 22:51",
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
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 2.7,
              "m3": 7.7
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 88.6,
              "drawdown": -2.9,
              "m1": 0.1,
              "m3": 7.7
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 2.0,
              "m3": 10.8
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 0.9,
              "m3": 8.8
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
              "pos52": 75.7,
              "drawdown": -13.9,
              "m1": -4.7,
              "m3": 13.6
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 84.3,
              "drawdown": -5.6,
              "m1": 1.8,
              "m3": 15.5
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
              "pos52": 66.6,
              "drawdown": -10.0,
              "m1": 8.4,
              "m3": 6.9
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 77.7,
              "drawdown": -9.0,
              "m1": -1.0,
              "m3": 11.9
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 75.3,
              "drawdown": -8.5,
              "m1": 27.4,
              "m3": 19.4
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 88.1,
              "drawdown": -6.1,
              "m1": 3.1,
              "m3": -1.4
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 92.3,
              "drawdown": -2.3,
              "m1": 13.6,
              "m3": 2.0
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 23.9,
              "drawdown": -25.3,
              "m1": -2.1,
              "m3": -3.6
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 15.2,
              "drawdown": -33.2,
              "m1": -22.0,
              "m3": -16.6
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
              "pos52": 66.6,
              "drawdown": -10.0,
              "m1": 8.4,
              "m3": 6.9
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 85.5,
              "drawdown": -10.7,
              "m1": -6.1,
              "m3": 51.8
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 67.6,
              "drawdown": -13.0,
              "m1": 11.8,
              "m3": 0.6
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
              "pos52": 76.1,
              "drawdown": -12.6,
              "m1": -7.7,
              "m3": 4.1
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 66.9,
              "drawdown": -28.4,
              "m1": -17.5,
              "m3": 5.3
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
              "pos52": 49.5,
              "drawdown": -46.3,
              "m1": -28.3,
              "m3": 21.2
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 71.0,
              "drawdown": -26.4,
              "m1": -9.4,
              "m3": 54.9
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 58.5,
              "drawdown": -33.9,
              "m1": -16.3,
              "m3": 6.1
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 14.0,
              "drawdown": -81.1,
              "m1": -69.7,
              "m3": -25.5
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 51.2,
              "drawdown": -32.0,
              "m1": -15.2,
              "m3": 29.2
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
              "pos52": 44.0,
              "drawdown": -54.8,
              "m1": -35.5,
              "m3": 30.9
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 47.2,
              "drawdown": -49.7,
              "m1": -29.0,
              "m3": 28.0
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 60.5,
              "drawdown": -38.9,
              "m1": -18.2,
              "m3": 13.7
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
              "pos52": 73.8,
              "drawdown": -22.7,
              "m1": -2.6,
              "m3": 14.5
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 70.6,
              "drawdown": -26.5,
              "m1": -5.0,
              "m3": 24.0
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
              "pos52": 36.6,
              "drawdown": -55.8,
              "m1": -48.3,
              "m3": -20.1
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
              "pos52": 69.7,
              "drawdown": -24.2,
              "m1": -3.6,
              "m3": -1.9
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 78.5,
              "drawdown": -19.3,
              "m1": 16.2,
              "m3": -13.0
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 54.1,
              "drawdown": -28.9,
              "m1": 6.0,
              "m3": -26.0
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 60.1,
              "drawdown": -34.4,
              "m1": -5.2,
              "m3": -23.7
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
              "pos52": 59.1,
              "drawdown": -34.7,
              "m1": -19.1,
              "m3": 5.2
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 55.0,
              "drawdown": -35.4,
              "m1": -25.1,
              "m3": 5.1
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 38.5,
              "drawdown": -49.1,
              "m1": -27.8,
              "m3": -17.6
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
              "pos52": 75.3,
              "drawdown": -8.5,
              "m1": 27.4,
              "m3": 19.4
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 88.1,
              "drawdown": -6.1,
              "m1": 3.1,
              "m3": -1.4
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 92.3,
              "drawdown": -2.3,
              "m1": 13.6,
              "m3": 2.0
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 14.7,
              "drawdown": -55.1,
              "m1": 1.7,
              "m3": -18.9
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
              "pos52": 35.3,
              "drawdown": -38.2,
              "m1": 6.3,
              "m3": -26.7
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 58.3,
              "drawdown": -28.2,
              "m1": -15.2,
              "m3": -18.4
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 13.7,
              "m3": 121.2
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 29.3,
              "drawdown": -46.0,
              "m1": 16.6,
              "m3": 13.5
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
