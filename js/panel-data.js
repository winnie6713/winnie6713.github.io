// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-08-27 02:22",
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
              "m1": 3.4,
              "m3": 2.3
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 81.9,
              "drawdown": -4.6,
              "m1": 5.3,
              "m3": -2.4
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 91.5,
              "drawdown": -1.5,
              "m1": 1.5,
              "m3": 5.8
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 92.1,
              "drawdown": -2.0,
              "m1": 1.9,
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
              "m1": 4.9,
              "m3": -6.7
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 78.6,
              "drawdown": -7.6,
              "m1": 6.9,
              "m3": -0.7
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
              "pos52": 63.4,
              "drawdown": -11.0,
              "m1": 6.4,
              "m3": -1.3
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 76.9,
              "drawdown": -7.8,
              "m1": -7.8,
              "m3": 0.9
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 77.7,
              "drawdown": -7.7,
              "m1": 26.4,
              "m3": 20.5
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 69.1,
              "drawdown": -15.0,
              "m1": 2.5,
              "m3": -12.0
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 72.1,
              "drawdown": -8.4,
              "m1": 12.7,
              "m3": -4.3
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 20.2,
              "drawdown": -25.9,
              "m1": -2.9,
              "m3": -9.2
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 24.8,
              "drawdown": -29.4,
              "m1": 12.5,
              "m3": -21.5
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
              "pos52": 63.4,
              "drawdown": -11.0,
              "m1": 6.4,
              "m3": -1.3
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 76.7,
              "drawdown": -17.2,
              "m1": 5.8,
              "m3": -2.9
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 33.3,
              "drawdown": -26.0,
              "m1": -6.6,
              "m3": -15.6
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
              "pos52": 76.2,
              "drawdown": -12.5,
              "m1": 6.5,
              "m3": -1.0
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 54.9,
              "drawdown": -37.4,
              "m1": 2.2,
              "m3": -27.5
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
              "pos52": 55.8,
              "drawdown": -40.3,
              "m1": 12.4,
              "m3": -22.3
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 74.9,
              "drawdown": -22.7,
              "m1": 14.4,
              "m3": 1.1
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 67.8,
              "drawdown": -26.3,
              "m1": 21.4,
              "m3": -12.9
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 16.7,
              "drawdown": -78.6,
              "m1": 5.5,
              "m3": -69.7
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 54.1,
              "drawdown": -30.1,
              "m1": 18.0,
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
              "pos52": 47.2,
              "drawdown": -51.7,
              "m1": 17.9,
              "m3": -14.3
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 41.7,
              "drawdown": -54.9,
              "m1": 22.1,
              "m3": -18.0
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 63.5,
              "drawdown": -35.8,
              "m1": 36.8,
              "m3": -5.7
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
              "pos52": 73.4,
              "drawdown": -22.6,
              "m1": 13.3,
              "m3": -2.7
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 58.4,
              "drawdown": -37.2,
              "m1": 1.2,
              "m3": -11.6
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
              "pos52": 45.4,
              "drawdown": -48.0,
              "m1": 14.0,
              "m3": -31.7
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
              "pos52": 60.9,
              "drawdown": -31.0,
              "m1": 21.0,
              "m3": -22.6
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 87.7,
              "drawdown": -10.8,
              "m1": 44.0,
              "m3": 4.1
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 25.7,
              "drawdown": -41.4,
              "m1": -2.7,
              "m3": -36.3
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 58.3,
              "drawdown": -35.6,
              "m1": 15.3,
              "m3": -30.6
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
              "pos52": 51.8,
              "drawdown": -36.9,
              "m1": -8.3,
              "m3": -24.9
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 49.5,
              "drawdown": -33.2,
              "m1": -3.2,
              "m3": -19.1
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 65.4,
              "drawdown": -24.5,
              "m1": 46.9,
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
              "pos52": 77.7,
              "drawdown": -7.7,
              "m1": 26.4,
              "m3": 20.5
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 69.1,
              "drawdown": -15.0,
              "m1": 2.5,
              "m3": -12.0
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 72.1,
              "drawdown": -8.4,
              "m1": 12.7,
              "m3": -4.3
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 16.2,
              "drawdown": -54.1,
              "m1": 24.1,
              "m3": -21.8
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
              "m1": 30.8,
              "m3": -15.6
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 55.9,
              "drawdown": -29.9,
              "m1": -2.1,
              "m3": -17.5
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 92.0,
              "drawdown": -6.2,
              "m1": 18.3,
              "m3": 52.2
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 44.2,
              "drawdown": -36.3,
              "m1": 31.4,
              "m3": -2.1
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
