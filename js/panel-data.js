// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-08-03 22:51",
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
              "m1": 1.7,
              "m3": 5.4
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 75.9,
              "drawdown": -6.1,
              "m1": -1.8,
              "m3": 4.0
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 0.7,
              "m3": 7.7
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 94.9,
              "drawdown": -1.4,
              "m1": -0.5,
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
              "pos52": 67.8,
              "drawdown": -18.5,
              "m1": -7.9,
              "m3": 7.0
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 71.8,
              "drawdown": -10.1,
              "m1": -1.4,
              "m3": 10.1
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
              "pos52": 59.1,
              "drawdown": -12.2,
              "m1": 6.1,
              "m3": 4.2
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 73.4,
              "drawdown": -10.8,
              "m1": -1.7,
              "m3": 8.4
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 72.6,
              "drawdown": -9.5,
              "m1": 24.9,
              "m3": 17.9
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 86.1,
              "drawdown": -7.2,
              "m1": 3.8,
              "m3": -3.1
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 17.0,
              "m3": 5.9
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 24.8,
              "drawdown": -25.0,
              "m1": 1.3,
              "m3": -3.0
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 12.4,
              "drawdown": -34.3,
              "m1": -18.1,
              "m3": -17.6
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
              "pos52": 59.1,
              "drawdown": -12.2,
              "m1": 6.1,
              "m3": 4.2
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 77.6,
              "drawdown": -16.6,
              "m1": -6.4,
              "m3": 34.4
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 54.2,
              "drawdown": -18.4,
              "m1": 8.8,
              "m3": -6.7
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
              "pos52": 71.7,
              "drawdown": -15.0,
              "m1": -6.5,
              "m3": 2.4
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 58.9,
              "drawdown": -35.4,
              "m1": -24.4,
              "m3": -8.7
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
              "pos52": 55.1,
              "drawdown": -41.1,
              "m1": -32.9,
              "m3": 32.2
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 65.3,
              "drawdown": -31.6,
              "m1": -15.0,
              "m3": 53.0
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 66.3,
              "drawdown": -27.5,
              "m1": -16.5,
              "m3": 18.4
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 18.0,
              "drawdown": -77.3,
              "m1": -61.2,
              "m3": -10.3
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 44.1,
              "drawdown": -36.7,
              "m1": -15.7,
              "m3": 26.5
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
              "pos52": 41.5,
              "drawdown": -57.2,
              "m1": -47.2,
              "m3": 28.0
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 41.4,
              "drawdown": -55.1,
              "m1": -30.0,
              "m3": 25.6
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 54.4,
              "drawdown": -44.8,
              "m1": -26.2,
              "m3": 8.5
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
              "pos52": 72.3,
              "drawdown": -24.0,
              "m1": 1.3,
              "m3": 14.4
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 67.4,
              "drawdown": -29.3,
              "m1": -2.2,
              "m3": 22.2
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
              "m1": -42.1,
              "m3": -16.1
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
              "pos52": 59.2,
              "drawdown": -32.5,
              "m1": -13.6,
              "m3": -12.6
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 71.1,
              "drawdown": -25.9,
              "m1": 7.1,
              "m3": -17.9
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 38.1,
              "drawdown": -38.9,
              "m1": -8.7,
              "m3": -35.5
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 56.3,
              "drawdown": -37.7,
              "m1": -7.5,
              "m3": -27.0
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
              "m1": -21.1,
              "m3": 6.7
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 55.4,
              "drawdown": -35.1,
              "m1": -22.2,
              "m3": 3.4
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 35.2,
              "drawdown": -51.8,
              "m1": -31.8,
              "m3": -22.9
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
              "pos52": 72.6,
              "drawdown": -9.5,
              "m1": 24.9,
              "m3": 17.9
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 86.1,
              "drawdown": -7.2,
              "m1": 3.8,
              "m3": -3.1
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 17.0,
              "m3": 5.9
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 12.8,
              "drawdown": -56.3,
              "m1": 1.5,
              "m3": -17.2
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
              "pos52": 28.4,
              "drawdown": -42.3,
              "m1": 4.9,
              "m3": -27.9
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 55.6,
              "drawdown": -30.1,
              "m1": -12.5,
              "m3": -19.9
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 89.8,
              "drawdown": -7.8,
              "m1": 9.0,
              "m3": 104.5
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 21.3,
              "drawdown": -51.2,
              "m1": 5.2,
              "m3": 5.7
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
