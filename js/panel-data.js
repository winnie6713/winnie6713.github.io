// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-09-16 23:57",
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
              "pos52": 83.8,
              "drawdown": -3.1,
              "m1": -2.4,
              "m3": 0.8
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 78.4,
              "drawdown": -5.4,
              "m1": -3.4,
              "m3": -3.3
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 70.9,
              "drawdown": -5.0,
              "m1": -3.5,
              "m3": -0.8
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 73.7,
              "drawdown": -6.7,
              "m1": -6.4,
              "m3": -2.5
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
              "pos52": 66.2,
              "drawdown": -18.4,
              "m1": -8.2,
              "m3": -11.4
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 80.1,
              "drawdown": -7.1,
              "m1": -3.4,
              "m3": -1.2
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
              "pos52": 69.7,
              "drawdown": -9.1,
              "m1": -4.8,
              "m3": 3.2
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 92.8,
              "drawdown": -2.2,
              "m1": 8.8,
              "m3": 11.2
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 74.5,
              "drawdown": -8.8,
              "m1": 2.3,
              "m3": 24.7
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 64.3,
              "drawdown": -14.7,
              "m1": -0.3,
              "m3": -8.1
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 55.3,
              "drawdown": -13.4,
              "m1": -5.9,
              "m3": -0.0
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 58.7,
              "drawdown": -13.4,
              "m1": 18.3,
              "m3": 12.2
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 31.2,
              "drawdown": -26.9,
              "m1": 5.5,
              "m3": -11.5
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
              "pos52": 69.7,
              "drawdown": -9.1,
              "m1": -4.8,
              "m3": 3.2
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 83.8,
              "drawdown": -11.8,
              "m1": 1.3,
              "m3": 1.0
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 24.8,
              "drawdown": -29.4,
              "m1": -13.5,
              "m3": -9.7
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
              "pos52": 72.4,
              "drawdown": -12.5,
              "m1": -3.1,
              "m3": -1.9
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 65.6,
              "drawdown": -28.3,
              "m1": -2.4,
              "m3": -13.7
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
              "pos52": 55.2,
              "drawdown": -39.7,
              "m1": 5.9,
              "m3": -30.2
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 72.9,
              "drawdown": -23.6,
              "m1": -8.4,
              "m3": -9.2
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 61.9,
              "drawdown": -30.0,
              "m1": -5.6,
              "m3": -26.8
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 14.8,
              "drawdown": -80.4,
              "m1": -9.9,
              "m3": -71.4
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 52.1,
              "drawdown": -31.5,
              "m1": -8.4,
              "m3": -18.8
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
              "pos52": 44.5,
              "drawdown": -53.3,
              "m1": -11.1,
              "m3": -47.1
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 42.7,
              "drawdown": -53.9,
              "m1": -16.3,
              "m3": -42.5
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 63.6,
              "drawdown": -34.9,
              "m1": -14.9,
              "m3": -23.7
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
              "pos52": 64.9,
              "drawdown": -28.4,
              "m1": -21.3,
              "m3": -24.0
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 49.0,
              "drawdown": -44.1,
              "m1": -22.2,
              "m3": -38.8
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
              "pos52": 37.0,
              "drawdown": -53.1,
              "m1": -17.8,
              "m3": -41.3
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
              "pos52": 57.7,
              "drawdown": -32.1,
              "m1": -17.5,
              "m3": -24.3
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 85.2,
              "drawdown": -12.7,
              "m1": -5.1,
              "m3": 5.0
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 8.9,
              "drawdown": -47.4,
              "m1": -34.4,
              "m3": -33.2
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 41.6,
              "drawdown": -45.7,
              "m1": -23.5,
              "m3": -20.9
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
              "pos52": 54.2,
              "drawdown": -34.3,
              "m1": -8.1,
              "m3": -33.6
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 53.5,
              "drawdown": -30.6,
              "m1": -6.3,
              "m3": -27.1
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 66.1,
              "drawdown": -24.1,
              "m1": -7.7,
              "m3": -20.1
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
              "pos52": 74.5,
              "drawdown": -8.8,
              "m1": 2.3,
              "m3": 24.7
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 64.3,
              "drawdown": -14.7,
              "m1": -0.3,
              "m3": -8.1
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 55.3,
              "drawdown": -13.4,
              "m1": -5.9,
              "m3": -0.0
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 13.4,
              "drawdown": -55.9,
              "m1": -2.4,
              "m3": -23.7
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
              "pos52": 27.4,
              "drawdown": -41.7,
              "m1": -21.4,
              "m3": -28.8
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 42.9,
              "drawdown": -36.3,
              "m1": -18.1,
              "m3": -20.1
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 99.1,
              "drawdown": -0.7,
              "m1": 17.4,
              "m3": 39.6
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 42.8,
              "drawdown": -37.2,
              "m1": -3.7,
              "m3": 26.1
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
