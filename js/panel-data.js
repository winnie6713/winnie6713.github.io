// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-08-07 22:24",
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
              "m1": 2.9,
              "m3": 6.0
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 88.1,
              "drawdown": -3.0,
              "m1": -0.0,
              "m3": 4.2
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 97.1,
              "drawdown": -0.6,
              "m1": 3.0,
              "m3": 9.2
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 99.8,
              "drawdown": -0.0,
              "m1": 1.5,
              "m3": 7.1
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
              "pos52": 77.5,
              "drawdown": -12.9,
              "m1": -4.1,
              "m3": 7.9
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 85.8,
              "drawdown": -5.1,
              "m1": 1.4,
              "m3": 10.9
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
              "pos52": 83.7,
              "drawdown": -4.9,
              "m1": 10.4,
              "m3": 6.0
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 76.9,
              "drawdown": -7.9,
              "m1": -0.9,
              "m3": 9.1
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 79.2,
              "drawdown": -7.2,
              "m1": 30.1,
              "m3": 19.1
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 76.4,
              "drawdown": -11.9,
              "m1": -1.3,
              "m3": -10.9
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 88.8,
              "drawdown": -3.4,
              "m1": 11.1,
              "m3": 1.2
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 25.5,
              "drawdown": -24.8,
              "m1": -6.2,
              "m3": -3.9
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 15.8,
              "drawdown": -32.9,
              "m1": -19.2,
              "m3": -20.2
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
              "pos52": 83.7,
              "drawdown": -4.9,
              "m1": 10.4,
              "m3": 6.0
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 77.3,
              "drawdown": -16.8,
              "m1": -11.6,
              "m3": 18.3
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 72.6,
              "drawdown": -11.0,
              "m1": 6.6,
              "m3": 3.8
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
              "pos52": 77.2,
              "drawdown": -12.0,
              "m1": -3.9,
              "m3": 1.7
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 67.5,
              "drawdown": -27.9,
              "m1": -9.7,
              "m3": -7.3
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
              "drawdown": -51.3,
              "m1": -31.5,
              "m3": -14.0
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 69.4,
              "drawdown": -27.7,
              "m1": -11.5,
              "m3": 35.7
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 55.6,
              "drawdown": -36.2,
              "m1": -16.8,
              "m3": -14.8
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 11.8,
              "drawdown": -83.2,
              "m1": -61.9,
              "m3": -56.2
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 43.1,
              "drawdown": -37.3,
              "m1": -21.4,
              "m3": 8.7
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
              "pos52": 42.7,
              "drawdown": -56.1,
              "m1": -33.6,
              "m3": 3.9
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 39.1,
              "drawdown": -57.3,
              "m1": -41.2,
              "m3": 9.4
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 51.0,
              "drawdown": -48.1,
              "m1": -34.8,
              "m3": -9.5
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
              "pos52": 70.3,
              "drawdown": -25.7,
              "m1": -8.7,
              "m3": 6.1
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 53.6,
              "drawdown": -41.8,
              "m1": -24.9,
              "m3": -6.4
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
              "pos52": 47.1,
              "drawdown": -46.5,
              "m1": -37.6,
              "m3": -30.4
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
              "pos52": 86.0,
              "drawdown": -11.2,
              "m1": 15.9,
              "m3": 18.8
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 82.6,
              "drawdown": -15.5,
              "m1": 13.3,
              "m3": -0.3
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 60.8,
              "drawdown": -24.7,
              "m1": 16.5,
              "m3": -10.2
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 60.3,
              "drawdown": -34.2,
              "m1": -10.8,
              "m3": -23.5
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
              "pos52": 60.6,
              "drawdown": -33.5,
              "m1": -23.0,
              "m3": -2.2
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 60.6,
              "drawdown": -31.0,
              "m1": -22.8,
              "m3": 4.7
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 56.3,
              "drawdown": -34.9,
              "m1": -15.0,
              "m3": -2.5
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
              "pos52": 79.2,
              "drawdown": -7.2,
              "m1": 30.1,
              "m3": 19.1
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 76.4,
              "drawdown": -11.9,
              "m1": -1.3,
              "m3": -10.9
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 88.8,
              "drawdown": -3.4,
              "m1": 11.1,
              "m3": 1.2
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 15.3,
              "drawdown": -54.7,
              "m1": 2.3,
              "m3": -24.2
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
              "pos52": 33.9,
              "drawdown": -39.0,
              "m1": 1.1,
              "m3": -29.6
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 59.2,
              "drawdown": -27.6,
              "m1": -15.9,
              "m3": -19.9
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 96.2,
              "drawdown": -2.9,
              "m1": 1.0,
              "m3": 97.4
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 27.8,
              "drawdown": -46.9,
              "m1": 10.2,
              "m3": -7.4
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
