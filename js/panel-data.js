// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-08-10 22:25",
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
              "pos52": 99.8,
              "drawdown": -0.0,
              "m1": 2.4,
              "m3": 5.1
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 87.0,
              "drawdown": -3.3,
              "m1": -0.6,
              "m3": 1.5
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 96.5,
              "drawdown": -0.7,
              "m1": 2.5,
              "m3": 9.0
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 97.9,
              "drawdown": -0.6,
              "m1": 1.3,
              "m3": 5.8
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
              "pos52": 74.0,
              "drawdown": -14.9,
              "m1": -6.8,
              "m3": 0.5
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 83.5,
              "drawdown": -5.9,
              "m1": 0.3,
              "m3": 6.3
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
              "m1": 3.1,
              "m3": 1.2
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 72.5,
              "drawdown": -9.4,
              "m1": -2.2,
              "m3": 5.2
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 82.5,
              "drawdown": -6.1,
              "m1": 31.4,
              "m3": 22.2
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 78.0,
              "drawdown": -11.1,
              "m1": 0.1,
              "m3": -10.7
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 93.0,
              "drawdown": -2.1,
              "m1": 13.3,
              "m3": 2.0
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 26.6,
              "drawdown": -24.4,
              "m1": -11.1,
              "m3": -2.3
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 17.0,
              "drawdown": -32.5,
              "m1": -18.9,
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
              "pos52": 74.6,
              "drawdown": -7.6,
              "m1": 3.1,
              "m3": 1.2
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 74.1,
              "drawdown": -19.2,
              "m1": -15.8,
              "m3": 3.2
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 69.8,
              "drawdown": -12.1,
              "m1": 5.6,
              "m3": -1.6
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
              "pos52": 76.6,
              "drawdown": -12.4,
              "m1": -3.6,
              "m3": 1.9
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 63.9,
              "drawdown": -30.8,
              "m1": -11.2,
              "m3": -21.9
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
              "pos52": 44.0,
              "drawdown": -51.4,
              "m1": -35.0,
              "m3": -15.8
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 67.9,
              "drawdown": -29.0,
              "m1": -12.1,
              "m3": 15.3
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 55.3,
              "drawdown": -36.5,
              "m1": -17.3,
              "m3": -14.2
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 11.6,
              "drawdown": -83.4,
              "m1": -67.6,
              "m3": -59.6
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 41.2,
              "drawdown": -38.6,
              "m1": -21.3,
              "m3": -6.1
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
              "pos52": 43.0,
              "drawdown": -55.8,
              "m1": -38.3,
              "m3": 4.1
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 37.2,
              "drawdown": -59.1,
              "m1": -41.0,
              "m3": -7.9
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 52.1,
              "drawdown": -47.0,
              "m1": -35.4,
              "m3": -20.8
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
              "pos52": 69.0,
              "drawdown": -26.7,
              "m1": -12.0,
              "m3": 2.4
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 54.2,
              "drawdown": -41.3,
              "m1": -24.8,
              "m3": -8.7
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
              "pos52": 51.2,
              "drawdown": -43.0,
              "m1": -29.8,
              "m3": -26.4
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
              "pos52": 70.1,
              "drawdown": -23.8,
              "m1": 0.2,
              "m3": -3.0
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 74.5,
              "drawdown": -22.8,
              "m1": 1.4,
              "m3": -10.0
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 53.3,
              "drawdown": -29.4,
              "m1": 11.9,
              "m3": -15.2
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 55.7,
              "drawdown": -38.2,
              "m1": -15.8,
              "m3": -29.3
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
              "pos52": 55.7,
              "drawdown": -37.5,
              "m1": -21.0,
              "m3": -15.1
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 55.4,
              "drawdown": -34.5,
              "m1": -23.6,
              "m3": -5.4
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 53.2,
              "drawdown": -37.1,
              "m1": -17.7,
              "m3": -8.6
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
              "pos52": 82.5,
              "drawdown": -6.1,
              "m1": 31.4,
              "m3": 22.2
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 78.0,
              "drawdown": -11.1,
              "m1": 0.1,
              "m3": -10.7
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 93.0,
              "drawdown": -2.1,
              "m1": 13.3,
              "m3": 2.0
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 17.2,
              "drawdown": -53.5,
              "m1": 7.4,
              "m3": -22.6
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
              "pos52": 31.1,
              "drawdown": -40.7,
              "m1": -0.8,
              "m3": -22.7
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 58.3,
              "drawdown": -28.2,
              "m1": -15.3,
              "m3": -20.5
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 97.4,
              "drawdown": -2.0,
              "m1": 5.4,
              "m3": 76.1
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 28.7,
              "drawdown": -46.4,
              "m1": 11.1,
              "m3": -11.1
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
