// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-07-16 22:47",
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
              "pos52": 95.2,
              "drawdown": -0.9,
              "m1": -0.3,
              "m3": 7.5
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 79.7,
              "drawdown": -5.3,
              "m1": -5.0,
              "m3": 10.9
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 94.8,
              "drawdown": -1.0,
              "m1": 1.5,
              "m3": 8.7
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 94.5,
              "drawdown": -1.6,
              "m1": 0.3,
              "m3": 10.0
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
              "drawdown": -14.9,
              "m1": -12.1,
              "m3": 25.6
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 71.0,
              "drawdown": -10.3,
              "m1": -7.3,
              "m3": 18.3
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
              "pos52": 60.2,
              "drawdown": -11.9,
              "m1": -2.4,
              "m3": 4.4
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 12.4,
              "m3": 25.2
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 26.0,
              "drawdown": -25.5,
              "m1": 0.3,
              "m3": -2.2
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 78.2,
              "drawdown": -11.9,
              "m1": -4.0,
              "m3": 5.2
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 67.1,
              "drawdown": -9.1,
              "m1": 1.6,
              "m3": 0.6
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 53.1,
              "drawdown": -15.6,
              "m1": 12.0,
              "m3": -1.0
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 47.2,
              "drawdown": -20.2,
              "m1": -4.9,
              "m3": -0.2
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
              "pos52": 60.2,
              "drawdown": -11.9,
              "m1": -2.4,
              "m3": 4.4
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 81.4,
              "drawdown": -13.8,
              "m1": -8.5,
              "m3": 94.1
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 47.9,
              "drawdown": -22.1,
              "m1": -4.8,
              "m3": -5.5
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
              "pos52": 73.2,
              "drawdown": -14.2,
              "m1": -7.2,
              "m3": 9.5
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 63.9,
              "drawdown": -31.2,
              "m1": -24.2,
              "m3": 49.3
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
              "pos52": 59.7,
              "drawdown": -36.9,
              "m1": -26.9,
              "m3": 67.0
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 67.5,
              "drawdown": -29.7,
              "m1": -21.6,
              "m3": 87.0
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 64.0,
              "drawdown": -29.7,
              "m1": -26.4,
              "m3": 23.5
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 34.6,
              "drawdown": -61.7,
              "m1": -32.6,
              "m3": 130.8
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 46.4,
              "drawdown": -35.2,
              "m1": -26.4,
              "m3": 51.8
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
              "pos52": 56.2,
              "drawdown": -42.9,
              "m1": -35.3,
              "m3": 77.5
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 47.5,
              "drawdown": -49.4,
              "m1": -40.6,
              "m3": 74.7
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 59.7,
              "drawdown": -39.6,
              "m1": -33.1,
              "m3": 58.2
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
              "pos52": 63.3,
              "drawdown": -31.8,
              "m1": -26.8,
              "m3": 43.6
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 58.9,
              "drawdown": -37.4,
              "m1": -28.6,
              "m3": 27.9
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
              "pos52": 59.6,
              "drawdown": -35.9,
              "m1": -14.2,
              "m3": 21.8
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
              "drawdown": -35.1,
              "m1": -33.1,
              "m3": -10.1
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 63.6,
              "drawdown": -32.9,
              "m1": -26.2,
              "m3": -14.3
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 39.0,
              "drawdown": -38.4,
              "m1": -27.6,
              "m3": -32.9
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 56.1,
              "drawdown": -38.0,
              "m1": -16.1,
              "m3": -18.3
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
              "pos52": 77.8,
              "drawdown": -19.5,
              "m1": -10.8,
              "m3": 44.2
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 86.1,
              "drawdown": -11.1,
              "m1": -1.2,
              "m3": 46.3
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 62.4,
              "drawdown": -31.1,
              "m1": -24.8,
              "m3": -0.9
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
              "pos52": 26.0,
              "drawdown": -25.5,
              "m1": 0.3,
              "m3": -2.2
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 78.2,
              "drawdown": -11.9,
              "m1": -4.0,
              "m3": 5.2
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 67.1,
              "drawdown": -9.1,
              "m1": 1.6,
              "m3": 0.6
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 0.0,
              "drawdown": -61.7,
              "m1": -35.3,
              "m3": -26.6
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
              "pos52": 9.9,
              "drawdown": -51.0,
              "m1": -31.7,
              "m3": -38.6
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 67.8,
              "drawdown": -21.8,
              "m1": -5.7,
              "m3": -2.3
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 79.0,
              "drawdown": -16.0,
              "m1": -4.3,
              "m3": 121.5
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 10.3,
              "drawdown": -59.3,
              "m1": -20.0,
              "m3": -9.6
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
