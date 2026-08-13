// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-08-13 22:29",
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
              "m1": 3.1,
              "m3": 5.1
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 92.9,
              "drawdown": -1.8,
              "m1": 2.0,
              "m3": 2.5
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 95.2,
              "drawdown": -0.9,
              "m1": 2.3,
              "m3": 8.6
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 2.6,
              "m3": 7.6
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
              "pos52": 79.2,
              "drawdown": -11.9,
              "m1": -0.3,
              "m3": 2.9
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 89.8,
              "drawdown": -3.6,
              "m1": 5.1,
              "m3": 8.0
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
              "pos52": 85.6,
              "drawdown": -4.3,
              "m1": 6.0,
              "m3": -0.1
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 70.2,
              "drawdown": -10.2,
              "m1": -6.7,
              "m3": 2.2
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 77.5,
              "drawdown": -7.8,
              "m1": 25.6,
              "m3": 22.9
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 72.5,
              "drawdown": -13.9,
              "m1": -6.6,
              "m3": -13.9
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 77.8,
              "drawdown": -6.7,
              "m1": 4.0,
              "m3": -1.9
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 27.1,
              "drawdown": -24.0,
              "m1": -12.7,
              "m3": -3.4
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 21.7,
              "drawdown": -30.6,
              "m1": -13.8,
              "m3": -23.7
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
              "pos52": 85.6,
              "drawdown": -4.3,
              "m1": 6.0,
              "m3": -0.1
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 77.2,
              "drawdown": -16.9,
              "m1": -8.7,
              "m3": 8.4
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 67.4,
              "drawdown": -13.1,
              "m1": 6.0,
              "m3": 0.4
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
              "pos52": 81.4,
              "drawdown": -9.9,
              "m1": 2.6,
              "m3": 7.9
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 69.0,
              "drawdown": -25.8,
              "m1": 1.5,
              "m3": -13.1
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
              "pos52": 76.0,
              "drawdown": -21.7,
              "m1": 5.0,
              "m3": 18.2
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 63.9,
              "drawdown": -29.4,
              "m1": 0.4,
              "m3": -8.3
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 9.9,
              "drawdown": -85.0,
              "m1": -53.1,
              "m3": -71.0
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 55.1,
              "drawdown": -29.5,
              "m1": -0.8,
              "m3": 4.4
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
              "pos52": 44.7,
              "drawdown": -54.1,
              "m1": -35.2,
              "m3": -1.2
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 47.3,
              "drawdown": -49.6,
              "m1": -15.4,
              "m3": 10.4
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 64.8,
              "drawdown": -34.6,
              "m1": -5.4,
              "m3": 5.6
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
              "pos52": 81.7,
              "drawdown": -15.7,
              "m1": 11.2,
              "m3": 12.8
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 61.5,
              "drawdown": -34.7,
              "m1": -5.2,
              "m3": -1.4
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
              "pos52": 48.8,
              "drawdown": -45.1,
              "m1": -18.6,
              "m3": -32.6
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
              "pos52": 70.7,
              "drawdown": -23.3,
              "m1": 9.3,
              "m3": -18.9
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 81.6,
              "drawdown": -16.4,
              "m1": 17.1,
              "m3": -14.6
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 61.7,
              "drawdown": -24.1,
              "m1": 16.4,
              "m3": -18.6
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 65.9,
              "drawdown": -29.4,
              "m1": 5.8,
              "m3": -23.4
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
              "pos52": 59.7,
              "drawdown": -33.4,
              "m1": -21.2,
              "m3": -12.3
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 59.5,
              "drawdown": -29.6,
              "m1": -22.7,
              "m3": -1.2
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 58.8,
              "drawdown": -32.3,
              "m1": -12.2,
              "m3": -14.1
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
              "pos52": 77.5,
              "drawdown": -7.8,
              "m1": 25.6,
              "m3": 22.9
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 72.5,
              "drawdown": -13.9,
              "m1": -6.6,
              "m3": -13.9
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 77.8,
              "drawdown": -6.7,
              "m1": 4.0,
              "m3": -1.9
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 19.7,
              "drawdown": -51.9,
              "m1": 17.9,
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
              "pos52": 55.3,
              "drawdown": -25.7,
              "m1": 37.8,
              "m3": -4.5
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 65.0,
              "drawdown": -23.7,
              "m1": -5.7,
              "m3": -22.4
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 20.0,
              "m3": 103.1
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 48.8,
              "drawdown": -33.3,
              "m1": 45.6,
              "m3": 22.4
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
