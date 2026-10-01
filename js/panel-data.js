// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-10-01 00:54",
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
              "pos52": 92.0,
              "drawdown": -1.5,
              "m1": -0.4,
              "m3": 2.6
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 95.0,
              "drawdown": -1.3,
              "m1": 3.1,
              "m3": 0.3
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 69.6,
              "drawdown": -5.2,
              "m1": -3.9,
              "m3": -1.5
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 67.4,
              "drawdown": -8.3,
              "m1": -5.4,
              "m3": -6.9
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
              "pos52": 82.0,
              "drawdown": -9.3,
              "m1": 9.7,
              "m3": -7.5
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 95.4,
              "drawdown": -1.6,
              "m1": 4.9,
              "m3": 2.2
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
              "pos52": 88.6,
              "drawdown": -3.4,
              "m1": 4.6,
              "m3": 13.7
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 87.9,
              "drawdown": -3.4,
              "m1": 3.0,
              "m3": 13.9
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 84.5,
              "drawdown": -5.3,
              "m1": -0.9,
              "m3": 36.7
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 63.2,
              "drawdown": -15.2,
              "m1": -1.6,
              "m3": -4.5
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 56.2,
              "drawdown": -13.2,
              "m1": -7.4,
              "m3": 3.5
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 84.7,
              "drawdown": -5.0,
              "m1": 27.9,
              "m3": 31.3
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 28.5,
              "drawdown": -28.0,
              "m1": 1.2,
              "m3": -16.1
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
              "pos52": 88.6,
              "drawdown": -3.4,
              "m1": 4.6,
              "m3": 13.7
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 95.1,
              "drawdown": -3.7,
              "m1": 30.5,
              "m3": 4.6
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 33.4,
              "drawdown": -26.0,
              "m1": -3.5,
              "m3": -5.8
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
              "pos52": 90.5,
              "drawdown": -4.1,
              "m1": 9.7,
              "m3": -4.1
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 76.7,
              "drawdown": -17.7,
              "m1": 29.6,
              "m3": -17.0
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
              "drawdown": -39.8,
              "m1": 5.0,
              "m3": -33.7
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 85.6,
              "drawdown": -12.2,
              "m1": 14.2,
              "m3": -7.7
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 65.0,
              "drawdown": -26.7,
              "m1": 2.0,
              "m3": -20.6
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 16.6,
              "drawdown": -78.7,
              "m1": 9.0,
              "m3": -63.5
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 63.3,
              "drawdown": -24.1,
              "m1": 9.8,
              "m3": -17.0
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
              "pos52": 49.6,
              "drawdown": -48.3,
              "m1": 17.4,
              "m3": -36.4
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 45.5,
              "drawdown": -51.3,
              "m1": 9.3,
              "m3": -33.6
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 72.7,
              "drawdown": -25.9,
              "m1": 16.5,
              "m3": -23.9
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
              "pos52": 79.7,
              "drawdown": -16.4,
              "m1": 10.2,
              "m3": -5.3
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 53.8,
              "drawdown": -39.2,
              "m1": -1.3,
              "m3": -29.0
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
              "pos52": 24.2,
              "drawdown": -58.2,
              "m1": -20.9,
              "m3": -49.6
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
              "pos52": 57.6,
              "drawdown": -31.5,
              "m1": 4.7,
              "m3": -25.9
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 91.2,
              "drawdown": -7.6,
              "m1": 8.8,
              "m3": 13.5
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 16.2,
              "drawdown": -43.2,
              "m1": 2.4,
              "m3": -24.5
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 42.8,
              "drawdown": -43.4,
              "m1": -6.2,
              "m3": -27.7
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
              "pos52": 44.6,
              "drawdown": -41.5,
              "m1": -5.1,
              "m3": -29.3
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 44.8,
              "drawdown": -36.3,
              "m1": -3.2,
              "m3": -23.6
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 63.0,
              "drawdown": -26.3,
              "m1": -0.7,
              "m3": 4.2
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
              "pos52": 84.5,
              "drawdown": -5.3,
              "m1": -0.9,
              "m3": 36.7
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 63.2,
              "drawdown": -15.2,
              "m1": -1.6,
              "m3": -4.5
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 56.2,
              "drawdown": -13.2,
              "m1": -7.4,
              "m3": 3.5
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 11.7,
              "drawdown": -55.6,
              "m1": -8.7,
              "m3": -5.7
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
              "pos52": 30.5,
              "drawdown": -39.9,
              "m1": 2.0,
              "m3": -13.7
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 43.6,
              "drawdown": -34.0,
              "m1": -3.4,
              "m3": -25.8
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 89.8,
              "drawdown": -8.3,
              "m1": 18.3,
              "m3": 25.3
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 53.7,
              "drawdown": -30.1,
              "m1": 10.6,
              "m3": 39.9
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
