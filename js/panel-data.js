// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-09-15 23:48",
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
              "pos52": 86.1,
              "drawdown": -2.6,
              "m1": -2.4,
              "m3": 0.6
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 78.3,
              "drawdown": -5.5,
              "m1": -3.6,
              "m3": -5.2
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 77.3,
              "drawdown": -3.9,
              "m1": -2.8,
              "m3": 0.9
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 74.3,
              "drawdown": -6.5,
              "m1": -6.5,
              "m3": -3.2
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
              "pos52": 65.2,
              "drawdown": -19.0,
              "m1": -7.8,
              "m3": -16.2
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 79.8,
              "drawdown": -7.2,
              "m1": -3.3,
              "m3": -4.1
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
              "pos52": 67.3,
              "drawdown": -9.8,
              "m1": -5.7,
              "m3": -0.0
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 91.8,
              "drawdown": -2.5,
              "m1": 8.3,
              "m3": 11.9
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 78.2,
              "drawdown": -7.5,
              "m1": 0.5,
              "m3": 24.6
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 65.6,
              "drawdown": -14.2,
              "m1": -0.2,
              "m3": -6.5
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 58.2,
              "drawdown": -12.5,
              "m1": -5.4,
              "m3": 1.0
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 57.4,
              "drawdown": -13.8,
              "m1": 13.6,
              "m3": 12.9
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 30.4,
              "drawdown": -27.2,
              "m1": 4.2,
              "m3": -13.3
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
              "pos52": 67.3,
              "drawdown": -9.8,
              "m1": -5.7,
              "m3": -0.0
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 81.9,
              "drawdown": -13.2,
              "m1": -2.0,
              "m3": -7.9
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 24.7,
              "drawdown": -29.4,
              "m1": -13.7,
              "m3": -13.7
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
              "pos52": 70.7,
              "drawdown": -13.4,
              "m1": -3.0,
              "m3": -6.3
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 62.3,
              "drawdown": -31.1,
              "m1": -5.2,
              "m3": -24.0
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
              "drawdown": -42.1,
              "m1": 2.8,
              "m3": -29.0
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 73.0,
              "drawdown": -23.6,
              "m1": -4.5,
              "m3": -14.7
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 60.4,
              "drawdown": -31.4,
              "m1": -9.5,
              "m3": -27.5
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 14.9,
              "drawdown": -80.3,
              "m1": 0.2,
              "m3": -69.5
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 51.5,
              "drawdown": -31.9,
              "m1": -4.0,
              "m3": -22.6
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
              "pos52": 45.4,
              "drawdown": -52.4,
              "m1": -16.3,
              "m3": -45.4
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 43.5,
              "drawdown": -53.2,
              "m1": -7.1,
              "m3": -37.6
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 64.2,
              "drawdown": -34.4,
              "m1": -6.7,
              "m3": -27.4
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
              "pos52": 63.6,
              "drawdown": -29.4,
              "m1": -20.7,
              "m3": -24.2
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 48.2,
              "drawdown": -44.8,
              "m1": -19.0,
              "m3": -36.9
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
              "pos52": 35.5,
              "drawdown": -54.6,
              "m1": -21.6,
              "m3": -42.5
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
              "pos52": 51.9,
              "drawdown": -36.5,
              "m1": -16.8,
              "m3": -34.5
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 76.3,
              "drawdown": -20.3,
              "m1": -9.4,
              "m3": -12.4
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 5.0,
              "drawdown": -49.8,
              "m1": -34.3,
              "m3": -41.0
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 40.3,
              "drawdown": -46.7,
              "m1": -22.0,
              "m3": -27.9
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
              "pos52": 50.0,
              "drawdown": -37.5,
              "m1": -13.7,
              "m3": -32.3
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 46.8,
              "drawdown": -35.0,
              "m1": -14.9,
              "m3": -28.8
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 61.4,
              "drawdown": -27.4,
              "m1": -10.2,
              "m3": -21.8
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
              "pos52": 78.2,
              "drawdown": -7.5,
              "m1": 0.5,
              "m3": 24.6
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 65.6,
              "drawdown": -14.2,
              "m1": -0.2,
              "m3": -6.5
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 58.2,
              "drawdown": -12.5,
              "m1": -5.4,
              "m3": 1.0
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 12.1,
              "drawdown": -56.7,
              "m1": -6.8,
              "m3": -26.9
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
              "pos52": 24.4,
              "drawdown": -43.4,
              "m1": -23.1,
              "m3": -24.2
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 41.0,
              "drawdown": -37.6,
              "m1": -20.1,
              "m3": -24.8
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 94.8,
              "drawdown": -4.2,
              "m1": 10.7,
              "m3": 33.1
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 39.6,
              "drawdown": -39.3,
              "m1": -10.5,
              "m3": 15.5
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
