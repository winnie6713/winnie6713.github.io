// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-07-23 22:45",
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
              "pos52": 86.4,
              "drawdown": -2.6,
              "m1": 0.6,
              "m3": 4.1
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 72.5,
              "drawdown": -7.2,
              "m1": -3.0,
              "m3": 5.7
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 86.4,
              "drawdown": -2.6,
              "m1": -0.0,
              "m3": 4.7
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 90.5,
              "drawdown": -2.8,
              "m1": -1.1,
              "m3": 5.9
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
              "pos52": 77.0,
              "drawdown": -13.3,
              "m1": -6.7,
              "m3": 21.7
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 72.4,
              "drawdown": -9.9,
              "m1": -3.1,
              "m3": 13.0
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
              "pos52": 62.1,
              "drawdown": -11.3,
              "m1": 4.4,
              "m3": 3.2
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 90.9,
              "drawdown": -3.6,
              "m1": 9.3,
              "m3": 17.9
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 15.5,
              "drawdown": -29.2,
              "m1": 2.0,
              "m3": -11.7
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 60.4,
              "drawdown": -21.0,
              "m1": -8.2,
              "m3": -6.3
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 45.8,
              "drawdown": -15.0,
              "m1": -0.2,
              "m3": -8.5
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 30.8,
              "drawdown": -23.0,
              "m1": 7.8,
              "m3": -10.1
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 9.1,
              "drawdown": -34.7,
              "m1": -16.2,
              "m3": -17.5
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
              "pos52": 62.1,
              "drawdown": -11.3,
              "m1": 4.4,
              "m3": 3.2
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 90.4,
              "drawdown": -7.1,
              "m1": 3.8,
              "m3": 77.8
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 54.5,
              "drawdown": -18.4,
              "m1": 3.2,
              "m3": -7.0
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
              "pos52": 75.5,
              "drawdown": -13.0,
              "m1": -4.8,
              "m3": 7.5
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 66.5,
              "drawdown": -28.9,
              "m1": -24.2,
              "m3": 53.6
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
              "pos52": 62.6,
              "drawdown": -34.3,
              "m1": -24.9,
              "m3": 64.6
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 79.9,
              "drawdown": -18.4,
              "m1": -5.8,
              "m3": 103.2
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 68.9,
              "drawdown": -25.5,
              "m1": -12.9,
              "m3": 25.9
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 25.5,
              "drawdown": -70.3,
              "m1": -70.3,
              "m3": 42.9
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 57.7,
              "drawdown": -27.8,
              "m1": -15.8,
              "m3": 56.3
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
              "pos52": 56.0,
              "drawdown": -43.1,
              "m1": -33.0,
              "m3": 102.8
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 51.5,
              "drawdown": -45.6,
              "m1": -33.3,
              "m3": 69.2
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 68.4,
              "drawdown": -31.0,
              "m1": -18.0,
              "m3": 64.5
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
              "pos52": 81.0,
              "drawdown": -16.5,
              "m1": -12.0,
              "m3": 57.6
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 72.3,
              "drawdown": -25.2,
              "m1": -16.8,
              "m3": 43.5
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
              "pos52": 45.9,
              "drawdown": -48.0,
              "m1": -39.4,
              "m3": 0.2
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
              "pos52": 66.6,
              "drawdown": -26.6,
              "m1": -17.8,
              "m3": -10.6
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 76.9,
              "drawdown": -20.8,
              "m1": 0.7,
              "m3": -4.6
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 51.3,
              "drawdown": -30.6,
              "m1": -11.3,
              "m3": -25.0
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 59.4,
              "drawdown": -35.0,
              "m1": -11.4,
              "m3": -18.3
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
              "pos52": 74.1,
              "drawdown": -22.4,
              "m1": -18.3,
              "m3": 24.2
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 76.8,
              "drawdown": -18.5,
              "m1": -10.4,
              "m3": 20.6
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 51.5,
              "drawdown": -40.2,
              "m1": -34.8,
              "m3": -15.7
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
              "pos52": 15.5,
              "drawdown": -29.2,
              "m1": 2.0,
              "m3": -11.7
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 60.4,
              "drawdown": -21.0,
              "m1": -8.2,
              "m3": -6.3
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 45.8,
              "drawdown": -15.0,
              "m1": -0.2,
              "m3": -8.5
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 0.0,
              "drawdown": -63.0,
              "m1": -27.1,
              "m3": -35.8
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
              "pos52": 19.7,
              "drawdown": -45.5,
              "m1": -23.3,
              "m3": -33.8
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 71.7,
              "drawdown": -19.2,
              "m1": -4.5,
              "m3": -0.3
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 92.7,
              "drawdown": -5.6,
              "m1": 2.9,
              "m3": 105.0
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 26.6,
              "drawdown": -48.6,
              "m1": -6.4,
              "m3": 6.9
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
