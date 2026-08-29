// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-08-29 03:25",
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
              "pos52": 94.2,
              "drawdown": -1.1,
              "m1": 3.7,
              "m3": 2.0
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 84.6,
              "drawdown": -3.9,
              "m1": 4.8,
              "m3": -2.9
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 92.4,
              "drawdown": -1.3,
              "m1": 2.7,
              "m3": 5.2
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 88.0,
              "drawdown": -3.1,
              "m1": 1.1,
              "m3": 2.1
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
              "pos52": 69.8,
              "drawdown": -17.3,
              "m1": 2.6,
              "m3": -7.7
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 82.6,
              "drawdown": -6.2,
              "m1": 5.7,
              "m3": -2.7
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
              "pos52": 74.6,
              "drawdown": -7.6,
              "m1": 11.5,
              "m3": 3.2
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 82.4,
              "drawdown": -5.9,
              "m1": -4.0,
              "m3": 2.5
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 87.0,
              "drawdown": -4.5,
              "m1": 14.1,
              "m3": 14.3
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 70.9,
              "drawdown": -13.9,
              "m1": 3.9,
              "m3": -8.8
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 79.4,
              "drawdown": -6.2,
              "m1": 13.1,
              "m3": -1.6
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 20.9,
              "drawdown": -25.7,
              "m1": 7.2,
              "m3": -8.5
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 26.3,
              "drawdown": -28.8,
              "m1": 12.9,
              "m3": -20.0
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
              "pos52": 74.6,
              "drawdown": -7.6,
              "m1": 11.5,
              "m3": 3.2
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 73.2,
              "drawdown": -19.9,
              "m1": -4.1,
              "m3": -9.8
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 40.4,
              "drawdown": -23.3,
              "m1": -4.9,
              "m3": -17.3
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
              "m1": 3.5,
              "m3": 0.0
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 56.0,
              "drawdown": -36.5,
              "m1": -1.8,
              "m3": -22.0
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
              "pos52": 52.5,
              "drawdown": -43.4,
              "m1": 18.0,
              "m3": -27.8
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 74.4,
              "drawdown": -23.1,
              "m1": 6.7,
              "m3": -3.9
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 64.4,
              "drawdown": -29.0,
              "m1": 23.3,
              "m3": -14.1
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 16.6,
              "drawdown": -78.7,
              "m1": 22.1,
              "m3": -70.1
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 53.0,
              "drawdown": -30.8,
              "m1": 6.7,
              "m3": -11.7
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
              "pos52": 42.8,
              "drawdown": -55.9,
              "m1": 24.8,
              "m3": -27.3
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 38.9,
              "drawdown": -57.5,
              "m1": -3.3,
              "m3": -27.9
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 62.8,
              "drawdown": -36.4,
              "m1": 16.0,
              "m3": -12.4
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
              "pos52": 71.6,
              "drawdown": -24.1,
              "m1": -2.6,
              "m3": -5.6
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 56.9,
              "drawdown": -38.4,
              "m1": -13.8,
              "m3": -13.5
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
              "pos52": 45.6,
              "drawdown": -47.9,
              "m1": 11.2,
              "m3": -25.3
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
              "pos52": 56.4,
              "drawdown": -34.6,
              "m1": 12.1,
              "m3": -22.8
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 82.8,
              "drawdown": -15.0,
              "m1": 29.1,
              "m3": 4.7
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 20.0,
              "drawdown": -44.5,
              "m1": -5.7,
              "m3": -36.7
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 53.4,
              "drawdown": -39.6,
              "m1": 1.7,
              "m3": -34.8
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
              "pos52": 49.5,
              "drawdown": -37.9,
              "m1": -0.7,
              "m3": -24.0
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 47.3,
              "drawdown": -34.6,
              "m1": 7.5,
              "m3": -17.7
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 63.9,
              "drawdown": -25.6,
              "m1": 64.6,
              "m3": -13.8
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
              "pos52": 87.0,
              "drawdown": -4.5,
              "m1": 14.1,
              "m3": 14.3
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 70.9,
              "drawdown": -13.9,
              "m1": 3.9,
              "m3": -8.8
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 79.4,
              "drawdown": -6.2,
              "m1": 13.1,
              "m3": -1.6
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 17.1,
              "drawdown": -53.5,
              "m1": 18.3,
              "m3": -33.0
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
              "pos52": 28.5,
              "drawdown": -41.1,
              "m1": 14.0,
              "m3": -23.1
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 53.2,
              "drawdown": -31.7,
              "m1": 13.0,
              "m3": -18.6
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 90.0,
              "drawdown": -7.7,
              "m1": 12.7,
              "m3": 8.6
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 43.4,
              "drawdown": -36.8,
              "m1": 33.7,
              "m3": -19.5
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
