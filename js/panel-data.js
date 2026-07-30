// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-07-30 22:55",
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
              "pos52": 88.8,
              "drawdown": -2.1,
              "m1": -0.7,
              "m3": 4.5
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 68.2,
              "drawdown": -8.3,
              "m1": -7.2,
              "m3": 3.4
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 91.6,
              "drawdown": -1.6,
              "m1": -0.1,
              "m3": 7.1
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 91.0,
              "drawdown": -2.6,
              "m1": -2.6,
              "m3": 7.8
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
              "pos52": 66.3,
              "drawdown": -19.4,
              "m1": -17.8,
              "m3": 7.9
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 68.5,
              "drawdown": -11.2,
              "m1": -7.8,
              "m3": 10.6
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
              "pos52": 42.6,
              "drawdown": -17.2,
              "m1": -2.5,
              "m3": -6.7
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 95.2,
              "drawdown": -2.0,
              "m1": 15.2,
              "m3": 23.5
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 52.9,
              "drawdown": -16.3,
              "m1": 20.9,
              "m3": 6.5
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 67.9,
              "drawdown": -17.1,
              "m1": -6.6,
              "m3": -4.6
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 48.2,
              "drawdown": -14.4,
              "m1": -1.2,
              "m3": -10.5
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 5.3,
              "drawdown": -31.5,
              "m1": -4.3,
              "m3": -19.4
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 5.5,
              "drawdown": -37.0,
              "m1": -26.6,
              "m3": -17.2
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
              "pos52": 42.6,
              "drawdown": -17.2,
              "m1": -2.5,
              "m3": -6.7
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 77.8,
              "drawdown": -16.4,
              "m1": -16.4,
              "m3": 44.0
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 52.1,
              "drawdown": -19.3,
              "m1": 2.7,
              "m3": -4.2
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
              "pos52": 70.6,
              "drawdown": -15.5,
              "m1": -15.5,
              "m3": 2.6
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 59.0,
              "drawdown": -35.3,
              "m1": -34.7,
              "m3": -3.8
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
              "pos52": 40.3,
              "drawdown": -54.7,
              "m1": -50.1,
              "m3": 2.3
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 69.4,
              "drawdown": -27.9,
              "m1": -24.2,
              "m3": 68.7
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 47.4,
              "drawdown": -42.9,
              "m1": -38.0,
              "m3": -7.8
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 12.5,
              "drawdown": -82.6,
              "m1": -77.7,
              "m3": -30.5
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 46.4,
              "drawdown": -35.2,
              "m1": -29.1,
              "m3": 36.9
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
              "pos52": 35.0,
              "drawdown": -63.7,
              "m1": -56.0,
              "m3": 11.4
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 40.6,
              "drawdown": -56.0,
              "m1": -47.6,
              "m3": 31.7
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 54.0,
              "drawdown": -45.2,
              "m1": -43.7,
              "m3": 20.3
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
              "pos52": 74.5,
              "drawdown": -22.1,
              "m1": -11.7,
              "m3": 32.5
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 68.3,
              "drawdown": -28.6,
              "m1": -16.5,
              "m3": 29.2
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
              "pos52": 39.6,
              "drawdown": -53.1,
              "m1": -49.3,
              "m3": -11.1
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
              "pos52": 47.7,
              "drawdown": -41.7,
              "m1": -36.9,
              "m3": -18.3
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 62.0,
              "drawdown": -34.2,
              "m1": -19.2,
              "m3": -19.2
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 34.6,
              "drawdown": -41.1,
              "m1": -21.8,
              "m3": -31.7
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 52.8,
              "drawdown": -40.7,
              "m1": -24.2,
              "m3": -21.7
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
              "pos52": 55.9,
              "drawdown": -37.5,
              "m1": -29.4,
              "m3": 4.9
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 50.2,
              "drawdown": -39.2,
              "m1": -35.5,
              "m3": -2.8
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 31.3,
              "drawdown": -54.8,
              "m1": -43.8,
              "m3": -27.5
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
              "pos52": 52.9,
              "drawdown": -16.3,
              "m1": 20.9,
              "m3": 6.5
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 67.9,
              "drawdown": -17.1,
              "m1": -6.6,
              "m3": -4.6
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 48.2,
              "drawdown": -14.4,
              "m1": -1.2,
              "m3": -10.5
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 6.0,
              "drawdown": -60.7,
              "m1": -12.7,
              "m3": -21.9
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
              "pos52": 14.9,
              "drawdown": -50.3,
              "m1": -25.8,
              "m3": -35.3
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 41.6,
              "drawdown": -39.5,
              "m1": -32.1,
              "m3": -25.7
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 83.0,
              "drawdown": -13.0,
              "m1": -6.0,
              "m3": 97.2
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 18.7,
              "drawdown": -53.0,
              "m1": -5.5,
              "m3": 5.4
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
