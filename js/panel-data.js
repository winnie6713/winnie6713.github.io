// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-08-25 22:14",
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
              "pos52": 91.9,
              "drawdown": -1.5,
              "m1": 3.6,
              "m3": 2.3
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 81.6,
              "drawdown": -4.6,
              "m1": 4.2,
              "m3": -2.6
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 92.6,
              "drawdown": -1.3,
              "m1": 2.8,
              "m3": 6.3
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 92.5,
              "drawdown": -1.9,
              "m1": 2.2,
              "m3": 3.2
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
              "pos52": 70.5,
              "drawdown": -16.9,
              "m1": 1.3,
              "m3": -7.7
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 77.0,
              "drawdown": -8.2,
              "m1": 4.3,
              "m3": -1.7
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
              "pos52": 68.2,
              "drawdown": -9.5,
              "m1": 8.4,
              "m3": -0.7
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 73.7,
              "drawdown": -8.8,
              "m1": -7.9,
              "m3": 0.6
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 75.2,
              "drawdown": -8.5,
              "m1": 26.6,
              "m3": 18.4
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 71.7,
              "drawdown": -13.8,
              "m1": 6.2,
              "m3": -10.7
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 73.1,
              "drawdown": -8.1,
              "m1": 12.8,
              "m3": -1.6
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 17.8,
              "drawdown": -26.7,
              "m1": -4.0,
              "m3": -6.8
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 27.1,
              "drawdown": -28.5,
              "m1": 13.3,
              "m3": -19.2
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
              "pos52": 68.2,
              "drawdown": -9.5,
              "m1": 8.4,
              "m3": -0.7
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 76.3,
              "drawdown": -17.5,
              "m1": -3.2,
              "m3": -4.9
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 34.0,
              "drawdown": -25.8,
              "m1": -6.9,
              "m3": -15.3
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
              "m1": 4.6,
              "m3": 1.5
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 54.3,
              "drawdown": -37.9,
              "m1": -4.6,
              "m3": -29.2
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
              "pos52": 53.4,
              "drawdown": -42.5,
              "m1": -4.6,
              "m3": -13.5
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 74.4,
              "drawdown": -23.1,
              "m1": 3.6,
              "m3": 4.2
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 64.4,
              "drawdown": -29.0,
              "m1": 3.0,
              "m3": -12.0
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 14.8,
              "drawdown": -80.4,
              "m1": -30.4,
              "m3": -62.2
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 53.8,
              "drawdown": -30.3,
              "m1": 7.3,
              "m3": -7.1
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
              "pos52": 46.0,
              "drawdown": -52.8,
              "m1": -8.5,
              "m3": -17.9
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 42.3,
              "drawdown": -54.3,
              "m1": 6.0,
              "m3": -24.3
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 62.7,
              "drawdown": -36.6,
              "m1": 15.8,
              "m3": -6.8
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
              "pos52": 70.8,
              "drawdown": -24.8,
              "m1": 0.6,
              "m3": -2.8
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 55.7,
              "drawdown": -39.6,
              "m1": -9.5,
              "m3": -14.1
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
              "pos52": 44.5,
              "drawdown": -48.9,
              "m1": -1.1,
              "m3": -32.9
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
              "pos52": 59.1,
              "drawdown": -32.5,
              "m1": 6.2,
              "m3": -24.4
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 82.0,
              "drawdown": -15.9,
              "m1": 24.4,
              "m3": -2.8
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 24.3,
              "drawdown": -42.2,
              "m1": -8.3,
              "m3": -36.6
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 55.3,
              "drawdown": -38.2,
              "m1": 2.8,
              "m3": -35.6
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
              "pos52": 49.8,
              "drawdown": -38.8,
              "m1": -21.4,
              "m3": -23.9
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 48.8,
              "drawdown": -34.3,
              "m1": -18.4,
              "m3": -19.1
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 62.9,
              "drawdown": -27.5,
              "m1": 22.9,
              "m3": -15.8
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
              "pos52": 75.2,
              "drawdown": -8.5,
              "m1": 26.6,
              "m3": 18.4
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 71.7,
              "drawdown": -13.8,
              "m1": 6.2,
              "m3": -10.7
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 73.1,
              "drawdown": -8.1,
              "m1": 12.8,
              "m3": -1.6
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 14.2,
              "drawdown": -55.4,
              "m1": 20.7,
              "m3": -24.8
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
              "drawdown": -38.5,
              "m1": 24.4,
              "m3": -16.9
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 52.7,
              "drawdown": -32.0,
              "m1": -11.1,
              "m3": -21.0
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 88.8,
              "drawdown": -8.7,
              "m1": 5.8,
              "m3": 48.2
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 47.0,
              "drawdown": -34.5,
              "m1": 29.0,
              "m3": 3.7
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
