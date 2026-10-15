// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-10-15 23:57",
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
              "pos52": 95.1,
              "drawdown": -0.9,
              "m1": 2.6,
              "m3": 4.1
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 84.4,
              "drawdown": -4.2,
              "m1": 3.4,
              "m3": 4.8
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 78.5,
              "drawdown": -3.7,
              "m1": 1.4,
              "m3": 0.4
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 62.3,
              "drawdown": -9.6,
              "m1": -3.1,
              "m3": -6.2
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
              "pos52": 68.1,
              "drawdown": -16.5,
              "m1": 2.4,
              "m3": 0.4
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 82.9,
              "drawdown": -6.3,
              "m1": 3.0,
              "m3": 7.9
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
              "pos52": 70.4,
              "drawdown": -9.2,
              "m1": 1.6,
              "m3": 7.2
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 99.0,
              "drawdown": -0.3,
              "m1": 2.9,
              "m3": 2.6
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 97.9,
              "drawdown": -0.7,
              "m1": 10.0,
              "m3": 37.2
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 65.3,
              "drawdown": -13.2,
              "m1": 1.9,
              "m3": 0.8
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 65.7,
              "drawdown": -10.3,
              "m1": 3.6,
              "m3": 3.0
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 83.8,
              "drawdown": -5.3,
              "m1": 9.5,
              "m3": 14.1
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 33.5,
              "drawdown": -26.0,
              "m1": 1.2,
              "m3": -4.8
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
              "pos52": 70.4,
              "drawdown": -9.2,
              "m1": 1.6,
              "m3": 7.2
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 81.0,
              "drawdown": -13.4,
              "m1": 9.7,
              "m3": 13.4
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 27.7,
              "drawdown": -28.3,
              "m1": 1.6,
              "m3": -7.0
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
              "pos52": 70.3,
              "drawdown": -13.1,
              "m1": 1.1,
              "m3": 6.3
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 57.5,
              "drawdown": -32.3,
              "m1": -5.6,
              "m3": 0.3
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
              "pos52": 33.7,
              "drawdown": -56.8,
              "m1": -31.9,
              "m3": -42.1
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 72.2,
              "drawdown": -23.2,
              "m1": 0.5,
              "m3": 9.7
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 43.3,
              "drawdown": -42.0,
              "m1": -21.9,
              "m3": -26.3
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 8.0,
              "drawdown": -86.8,
              "m1": -33.3,
              "m3": -56.3
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 40.7,
              "drawdown": -38.9,
              "m1": -10.8,
              "m3": -6.4
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
              "pos52": 31.6,
              "drawdown": -64.5,
              "m1": -33.5,
              "m3": -49.8
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 32.5,
              "drawdown": -63.2,
              "m1": -20.1,
              "m3": -25.0
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 57.2,
              "drawdown": -40.3,
              "m1": -8.2,
              "m3": 3.0
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
              "pos52": 54.3,
              "drawdown": -36.8,
              "m1": -11.7,
              "m3": -12.2
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 37.7,
              "drawdown": -52.2,
              "m1": -14.5,
              "m3": -25.3
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
              "pos52": 13.5,
              "drawdown": -66.3,
              "m1": -32.0,
              "m3": -58.5
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
              "pos52": 43.4,
              "drawdown": -41.3,
              "m1": -13.6,
              "m3": -9.7
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 72.9,
              "drawdown": -23.3,
              "m1": -5.4,
              "m3": 18.7
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 2.8,
              "drawdown": -48.4,
              "m1": -1.9,
              "m3": -19.5
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 41.5,
              "drawdown": -43.1,
              "m1": 4.7,
              "m3": -4.8
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
              "pos52": 29.6,
              "drawdown": -52.4,
              "m1": -27.1,
              "m3": -39.9
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 24.2,
              "drawdown": -49.9,
              "m1": -26.5,
              "m3": -41.5
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 48.1,
              "drawdown": -36.9,
              "m1": -13.4,
              "m3": -17.5
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
              "pos52": 97.9,
              "drawdown": -0.7,
              "m1": 10.0,
              "m3": 37.2
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 65.3,
              "drawdown": -13.2,
              "m1": 1.9,
              "m3": 0.8
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 65.7,
              "drawdown": -10.3,
              "m1": 3.6,
              "m3": 3.0
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 10.2,
              "drawdown": -56.5,
              "m1": -5.7,
              "m3": 6.8
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
              "pos52": 11.0,
              "drawdown": -50.8,
              "m1": -16.4,
              "m3": -4.8
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 28.7,
              "drawdown": -42.9,
              "m1": -10.3,
              "m3": -25.8
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 75.9,
              "drawdown": -19.5,
              "m1": -16.0,
              "m3": 19.6
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 42.2,
              "drawdown": -36.2,
              "m1": -4.8,
              "m3": 45.1
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
