// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-07-21 22:43",
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
              "pos52": 93.5,
              "drawdown": -1.2,
              "m1": 0.2,
              "m3": 5.9
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 81.3,
              "drawdown": -4.9,
              "m1": -4.2,
              "m3": 9.7
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 91.6,
              "drawdown": -1.6,
              "m1": 1.2,
              "m3": 5.9
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 95.5,
              "drawdown": -1.3,
              "m1": 0.3,
              "m3": 7.2
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
              "pos52": 78.0,
              "drawdown": -12.7,
              "m1": -11.5,
              "m3": 25.9
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 75.7,
              "drawdown": -8.7,
              "m1": -5.5,
              "m3": 17.1
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
              "pos52": 60.0,
              "drawdown": -12.0,
              "m1": -1.6,
              "m3": 2.7
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 95.5,
              "drawdown": -1.8,
              "m1": 10.0,
              "m3": 20.1
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 24.2,
              "drawdown": -26.2,
              "m1": 4.8,
              "m3": -4.7
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 74.2,
              "drawdown": -13.7,
              "m1": -5.7,
              "m3": 2.9
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 64.0,
              "drawdown": -10.0,
              "m1": 1.3,
              "m3": -0.3
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 45.2,
              "drawdown": -18.2,
              "m1": 11.5,
              "m3": -4.0
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 40.7,
              "drawdown": -22.6,
              "m1": -5.4,
              "m3": -3.5
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
              "pos52": 60.0,
              "drawdown": -12.0,
              "m1": -1.6,
              "m3": 2.7
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 91.5,
              "drawdown": -6.3,
              "m1": 1.3,
              "m3": 98.0
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 53.8,
              "drawdown": -19.6,
              "m1": -5.9,
              "m3": -3.1
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
              "pos52": 79.0,
              "drawdown": -11.1,
              "m1": -8.1,
              "m3": 16.2
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 70.8,
              "drawdown": -25.2,
              "m1": -21.3,
              "m3": 60.5
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
              "pos52": 59.5,
              "drawdown": -37.1,
              "m1": -33.6,
              "m3": 59.0
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 78.1,
              "drawdown": -20.0,
              "m1": -14.4,
              "m3": 116.5
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 65.2,
              "drawdown": -28.6,
              "m1": -26.8,
              "m3": 19.1
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 23.7,
              "drawdown": -72.0,
              "m1": -63.7,
              "m3": 36.6
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 58.7,
              "drawdown": -27.1,
              "m1": -23.3,
              "m3": 67.8
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
              "pos52": 55.2,
              "drawdown": -43.8,
              "m1": -43.8,
              "m3": 80.3
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 53.7,
              "drawdown": -43.6,
              "m1": -37.2,
              "m3": 104.9
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 67.5,
              "drawdown": -31.9,
              "m1": -27.3,
              "m3": 74.1
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
              "pos52": 78.7,
              "drawdown": -18.4,
              "m1": -16.6,
              "m3": 65.3
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 70.9,
              "drawdown": -26.5,
              "m1": -26.5,
              "m3": 46.6
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
              "pos52": 53.1,
              "drawdown": -41.7,
              "m1": -31.5,
              "m3": 14.1
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
              "pos52": 67.8,
              "drawdown": -25.7,
              "m1": -18.6,
              "m3": -8.7
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 77.4,
              "drawdown": -20.5,
              "m1": -1.5,
              "m3": -6.4
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 53.3,
              "drawdown": -29.4,
              "m1": -8.1,
              "m3": -24.7
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 59.8,
              "drawdown": -34.8,
              "m1": -4.6,
              "m3": -18.8
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
              "pos52": 79.5,
              "drawdown": -17.8,
              "m1": -17.8,
              "m3": 33.7
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 87.9,
              "drawdown": -9.6,
              "m1": -4.9,
              "m3": 31.4
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 57.9,
              "drawdown": -34.8,
              "m1": -29.2,
              "m3": -14.5
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
              "pos52": 24.2,
              "drawdown": -26.2,
              "m1": 4.8,
              "m3": -4.7
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 74.2,
              "drawdown": -13.7,
              "m1": -5.7,
              "m3": 2.9
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 64.0,
              "drawdown": -10.0,
              "m1": 1.3,
              "m3": -0.3
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 2.8,
              "drawdown": -60.9,
              "m1": -30.8,
              "m3": -28.2
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
              "pos52": 17.9,
              "drawdown": -46.5,
              "m1": -32.5,
              "m3": -32.2
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 71.8,
              "drawdown": -19.0,
              "m1": -8.6,
              "m3": -3.1
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 82.6,
              "drawdown": -13.3,
              "m1": -1.3,
              "m3": 98.5
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 12.4,
              "drawdown": -58.0,
              "m1": -16.8,
              "m3": -11.5
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
