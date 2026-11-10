// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-11-10 03:52",
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
              "pos52": 82.4,
              "drawdown": -3.4,
              "m1": -3.3,
              "m3": -2.1
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 60.4,
              "drawdown": -10.6,
              "m1": -9.6,
              "m3": -5.3
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 81.0,
              "drawdown": -3.3,
              "m1": 1.4,
              "m3": -2.3
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 71.9,
              "drawdown": -7.2,
              "m1": 1.3,
              "m3": -5.9
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
              "pos52": 47.4,
              "drawdown": -27.1,
              "m1": -19.2,
              "m3": -14.9
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 58.4,
              "drawdown": -15.4,
              "m1": -14.0,
              "m3": -8.1
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
              "pos52": 18.6,
              "drawdown": -25.3,
              "m1": -22.1,
              "m3": -17.8
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 4.2,
              "m3": 15.0
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 94.8,
              "drawdown": -1.9,
              "m1": 1.9,
              "m3": 8.4
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 11.6,
              "drawdown": -28.3,
              "m1": -18.1,
              "m3": -16.1
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 79.9,
              "drawdown": -6.0,
              "m1": 1.7,
              "m3": -2.0
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 46.1,
              "drawdown": -17.5,
              "m1": -10.8,
              "m3": 7.1
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 41.6,
              "drawdown": -22.8,
              "m1": -1.2,
              "m3": 13.6
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
              "pos52": 18.6,
              "drawdown": -25.3,
              "m1": -22.1,
              "m3": -17.8
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 69.3,
              "drawdown": -21.7,
              "m1": -16.4,
              "m3": 7.2
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 14.8,
              "drawdown": -33.4,
              "m1": -11.6,
              "m3": -23.1
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
              "pos52": 54.5,
              "drawdown": -20.0,
              "m1": -14.3,
              "m3": -7.7
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 24.0,
              "drawdown": -57.9,
              "m1": -43.3,
              "m3": -39.2
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
              "pos52": 28.8,
              "drawdown": -58.6,
              "m1": -24.7,
              "m3": -19.1
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 52.6,
              "drawdown": -39.6,
              "m1": -28.7,
              "m3": -15.6
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 40.4,
              "drawdown": -44.1,
              "m1": -20.6,
              "m3": -12.3
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 2.9,
              "drawdown": -91.7,
              "m1": -55.7,
              "m3": -45.5
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 26.5,
              "drawdown": -48.2,
              "m1": -26.9,
              "m3": -17.9
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
              "pos52": 18.2,
              "drawdown": -75.5,
              "m1": -50.4,
              "m3": -50.9
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 18.2,
              "drawdown": -75.5,
              "m1": -47.2,
              "m3": -43.2
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 32.3,
              "drawdown": -62.0,
              "m1": -44.0,
              "m3": -30.3
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
              "pos52": 31.5,
              "drawdown": -53.7,
              "m1": -35.4,
              "m3": -38.3
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 24.8,
              "drawdown": -61.2,
              "m1": -27.1,
              "m3": -33.8
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
              "pos52": 3.6,
              "drawdown": -69.4,
              "m1": -18.6,
              "m3": -39.4
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
              "pos52": 30.8,
              "drawdown": -47.2,
              "m1": -28.0,
              "m3": -31.5
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 40.7,
              "drawdown": -47.4,
              "m1": -46.0,
              "m3": -27.3
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 16.1,
              "drawdown": -51.0,
              "m1": -24.7,
              "m3": -30.4
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 20.6,
              "drawdown": -57.0,
              "m1": -40.1,
              "m3": -30.5
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
              "pos52": 2.8,
              "drawdown": -65.6,
              "m1": -34.5,
              "m3": -49.9
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 3.2,
              "drawdown": -69.5,
              "m1": -46.5,
              "m3": -56.2
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 10.2,
              "drawdown": -63.8,
              "m1": -44.2,
              "m3": -40.8
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
              "pos52": 94.8,
              "drawdown": -1.9,
              "m1": 1.9,
              "m3": 8.4
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 11.6,
              "drawdown": -28.3,
              "m1": -18.1,
              "m3": -16.1
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 79.9,
              "drawdown": -6.0,
              "m1": 1.7,
              "m3": -2.0
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 4.0,
              "drawdown": -51.4,
              "m1": -15.3,
              "m3": -17.4
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
              "pos52": 5.6,
              "drawdown": -64.5,
              "m1": -40.3,
              "m3": -45.8
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 22.4,
              "drawdown": -46.7,
              "m1": -17.4,
              "m3": -28.8
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 49.4,
              "drawdown": -41.1,
              "m1": -40.8,
              "m3": -21.4
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 27.2,
              "drawdown": -43.0,
              "m1": -31.7,
              "m3": -9.5
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
