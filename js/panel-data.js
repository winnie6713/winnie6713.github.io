// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-08-14 22:11",
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
              "pos52": 99.0,
              "drawdown": -0.2,
              "m1": 3.4,
              "m3": 4.0
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 92.4,
              "drawdown": -1.9,
              "m1": 3.6,
              "m3": 1.7
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 94.1,
              "drawdown": -1.1,
              "m1": 2.3,
              "m3": 7.6
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 3.2,
              "m3": 7.5
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
              "pos52": 78.8,
              "drawdown": -12.1,
              "m1": 3.3,
              "m3": 1.6
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 88.7,
              "drawdown": -4.0,
              "m1": 7.0,
              "m3": 6.0
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
              "pos52": 85.4,
              "drawdown": -4.4,
              "m1": 8.6,
              "m3": -4.4
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 70.7,
              "drawdown": -10.0,
              "m1": -8.1,
              "m3": 2.7
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 76.7,
              "drawdown": -8.0,
              "m1": 23.5,
              "m3": 21.3
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 72.3,
              "drawdown": -14.0,
              "m1": -2.4,
              "m3": -13.7
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 74.9,
              "drawdown": -7.5,
              "m1": 5.1,
              "m3": -1.7
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 25.1,
              "drawdown": -24.6,
              "m1": -11.2,
              "m3": -4.5
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 22.9,
              "drawdown": -30.1,
              "m1": -12.5,
              "m3": -22.8
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
              "pos52": 85.4,
              "drawdown": -4.4,
              "m1": 8.6,
              "m3": -4.4
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 84.5,
              "drawdown": -11.5,
              "m1": 2.7,
              "m3": 14.4
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 54.6,
              "drawdown": -18.3,
              "m1": 5.0,
              "m3": -10.5
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
              "pos52": 79.7,
              "drawdown": -10.7,
              "m1": 4.1,
              "m3": 2.3
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 67.3,
              "drawdown": -27.3,
              "m1": 5.7,
              "m3": -11.6
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
              "pos52": 50.4,
              "drawdown": -45.4,
              "m1": -16.7,
              "m3": -19.4
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 78.0,
              "drawdown": -19.9,
              "m1": 13.9,
              "m3": 25.2
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 68.1,
              "drawdown": -26.0,
              "m1": 1.9,
              "m3": -5.5
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 13.0,
              "drawdown": -82.1,
              "m1": -53.2,
              "m3": -68.2
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 55.8,
              "drawdown": -29.0,
              "m1": 9.5,
              "m3": 6.6
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
              "pos52": 48.3,
              "drawdown": -50.6,
              "m1": -22.2,
              "m3": 20.9
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 45.6,
              "drawdown": -51.2,
              "m1": -3.8,
              "m3": 11.7
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 69.7,
              "drawdown": -29.7,
              "m1": 16.3,
              "m3": 18.7
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
              "pos52": 87.3,
              "drawdown": -11.0,
              "m1": 30.6,
              "m3": 21.0
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 64.7,
              "drawdown": -31.8,
              "m1": 9.0,
              "m3": 4.0
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
              "pos52": 50.2,
              "drawdown": -43.8,
              "m1": -12.3,
              "m3": -31.2
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
              "pos52": 70.3,
              "drawdown": -23.7,
              "m1": 17.6,
              "m3": -19.5
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 86.5,
              "drawdown": -12.1,
              "m1": 31.1,
              "m3": -7.6
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 62.5,
              "drawdown": -23.6,
              "m1": 23.9,
              "m3": -23.6
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 63.3,
              "drawdown": -31.6,
              "m1": 10.3,
              "m3": -27.5
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
              "pos52": 61.6,
              "drawdown": -31.8,
              "m1": -15.3,
              "m3": -9.8
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 63.6,
              "drawdown": -26.6,
              "m1": -17.4,
              "m3": 4.8
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 65.0,
              "drawdown": -27.4,
              "m1": -0.9,
              "m3": -9.8
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
              "pos52": 76.7,
              "drawdown": -8.0,
              "m1": 23.5,
              "m3": 21.3
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 72.3,
              "drawdown": -14.0,
              "m1": -2.4,
              "m3": -13.7
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 74.9,
              "drawdown": -7.5,
              "m1": 5.1,
              "m3": -1.7
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 16.9,
              "drawdown": -53.6,
              "m1": 21.2,
              "m3": -22.8
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
              "pos52": 54.0,
              "drawdown": -26.4,
              "m1": 44.4,
              "m3": -7.8
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 67.7,
              "drawdown": -21.9,
              "m1": -0.1,
              "m3": -21.9
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 99.0,
              "drawdown": -0.7,
              "m1": 25.6,
              "m3": 98.3
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 50.6,
              "drawdown": -32.1,
              "m1": 61.4,
              "m3": 20.6
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
