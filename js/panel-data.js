// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-07-22 22:52",
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
              "pos52": 92.8,
              "drawdown": -1.3,
              "m1": 0.4,
              "m3": 6.4
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 79.4,
              "drawdown": -5.4,
              "m1": -4.4,
              "m3": 9.6
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 91.6,
              "drawdown": -1.6,
              "m1": 0.9,
              "m3": 6.5
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 92.4,
              "drawdown": -2.2,
              "m1": -1.5,
              "m3": 7.3
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
              "pos52": 78.7,
              "drawdown": -12.3,
              "m1": -12.3,
              "m3": 26.3
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 74.9,
              "drawdown": -8.9,
              "m1": -6.2,
              "m3": 16.7
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
              "pos52": 66.8,
              "drawdown": -9.9,
              "m1": 1.6,
              "m3": 6.2
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 94.1,
              "drawdown": -2.4,
              "m1": 9.7,
              "m3": 22.5
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 20.2,
              "drawdown": -27.5,
              "m1": 6.3,
              "m3": -7.8
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 71.8,
              "drawdown": -15.0,
              "m1": -2.2,
              "m3": 3.0
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 60.4,
              "drawdown": -11.0,
              "m1": 5.2,
              "m3": -2.0
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 38.9,
              "drawdown": -20.4,
              "m1": 11.2,
              "m3": -6.1
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 38.1,
              "drawdown": -23.7,
              "m1": -7.7,
              "m3": -3.2
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
              "pos52": 66.8,
              "drawdown": -9.9,
              "m1": 1.6,
              "m3": 6.2
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 93.3,
              "drawdown": -4.9,
              "m1": 0.1,
              "m3": 94.1
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 57.8,
              "drawdown": -17.5,
              "m1": 1.2,
              "m3": -1.2
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
              "pos52": 77.7,
              "drawdown": -11.8,
              "m1": -9.9,
              "m3": 14.7
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 68.5,
              "drawdown": -27.2,
              "m1": -27.2,
              "m3": 54.9
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
              "pos52": 59.3,
              "drawdown": -37.3,
              "m1": -37.3,
              "m3": 62.3
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 77.1,
              "drawdown": -20.9,
              "m1": -20.8,
              "m3": 113.5
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 65.7,
              "drawdown": -28.1,
              "m1": -26.3,
              "m3": 20.6
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 26.7,
              "drawdown": -69.2,
              "m1": -64.1,
              "m3": 56.2
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 56.7,
              "drawdown": -28.4,
              "m1": -28.4,
              "m3": 65.4
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
              "pos52": 58.2,
              "drawdown": -40.9,
              "m1": -40.9,
              "m3": 110.5
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 55.0,
              "drawdown": -42.4,
              "m1": -42.4,
              "m3": 100.5
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 67.9,
              "drawdown": -31.5,
              "m1": -29.7,
              "m3": 77.0
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
              "pos52": 80.5,
              "drawdown": -16.9,
              "m1": -16.9,
              "m3": 62.3
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 72.0,
              "drawdown": -25.4,
              "m1": -24.0,
              "m3": 45.1
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
              "pos52": 47.9,
              "drawdown": -46.3,
              "m1": -34.8,
              "m3": 3.7
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
              "pos52": 66.3,
              "drawdown": -26.9,
              "m1": -26.6,
              "m3": -9.2
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 76.5,
              "drawdown": -21.2,
              "m1": -7.2,
              "m3": -0.9
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 50.4,
              "drawdown": -31.2,
              "m1": -16.8,
              "m3": -26.1
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 57.5,
              "drawdown": -36.7,
              "m1": -13.7,
              "m3": -21.5
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
              "pos52": 73.2,
              "drawdown": -23.3,
              "m1": -19.0,
              "m3": 24.9
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 79.1,
              "drawdown": -16.7,
              "m1": -7.8,
              "m3": 22.4
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 53.3,
              "drawdown": -38.6,
              "m1": -30.0,
              "m3": -18.4
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
              "pos52": 20.2,
              "drawdown": -27.5,
              "m1": 6.3,
              "m3": -7.8
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 71.8,
              "drawdown": -15.0,
              "m1": -2.2,
              "m3": 3.0
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 60.4,
              "drawdown": -11.0,
              "m1": 5.2,
              "m3": -2.0
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 2.2,
              "drawdown": -61.2,
              "m1": -27.9,
              "m3": -30.3
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
              "pos52": 21.5,
              "drawdown": -44.4,
              "m1": -25.7,
              "m3": -28.2
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 70.5,
              "drawdown": -19.9,
              "m1": -15.9,
              "m3": -3.6
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 93.4,
              "drawdown": -5.0,
              "m1": 5.7,
              "m3": 108.4
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 25.0,
              "drawdown": -49.7,
              "m1": -13.8,
              "m3": 7.5
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
