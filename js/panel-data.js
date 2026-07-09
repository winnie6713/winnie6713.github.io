// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-07-09 16:02",
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
              "pos52": 91.4,
              "drawdown": -1.6,
              "m1": 1.3,
              "m3": 13.4
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 82.5,
              "drawdown": -4.5,
              "m1": 1.0,
              "m3": 21.0
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 92.7,
              "drawdown": -1.4,
              "m1": 2.8,
              "m3": 12.6
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 92.1,
              "drawdown": -2.3,
              "m1": 4.4,
              "m3": 16.3
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
              "pos52": 80.3,
              "drawdown": -11.3,
              "m1": 4.1,
              "m3": 48.3
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 76.6,
              "drawdown": -8.4,
              "m1": 0.7,
              "m3": 32.2
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
              "pos52": 56.6,
              "drawdown": -13.4,
              "m1": -0.5,
              "m3": 14.6
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 98.4,
              "drawdown": -0.6,
              "m1": 2.0,
              "m3": 23.7
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 16.4,
              "drawdown": -28.8,
              "m1": -8.0,
              "m3": 3.2
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 82.1,
              "drawdown": -10.1,
              "m1": -1.7,
              "m3": 18.6
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 58.8,
              "drawdown": -11.4,
              "m1": -1.0,
              "m3": 14.0
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 29.7,
              "drawdown": -23.4,
              "m1": 1.8,
              "m3": 5.0
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 50.6,
              "drawdown": -19.6,
              "m1": 0.8,
              "m3": 13.7
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
              "pos52": 56.6,
              "drawdown": -13.4,
              "m1": -0.5,
              "m3": 14.6
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 85.6,
              "drawdown": -10.9,
              "m1": 10.9,
              "m3": 133.6
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 55.8,
              "drawdown": -19.2,
              "m1": 0.9,
              "m3": 16.6
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
              "pos52": 83.9,
              "drawdown": -8.5,
              "m1": 5.5,
              "m3": 26.8
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 74.8,
              "drawdown": -21.8,
              "m1": 11.2,
              "m3": 108.4
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
              "pos52": 72.6,
              "drawdown": -25.1,
              "m1": 6.7,
              "m3": 138.7
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 76.1,
              "drawdown": -21.8,
              "m1": 9.8,
              "m3": 151.3
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 72.1,
              "drawdown": -23.3,
              "m1": -8.1,
              "m3": 41.5
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 48.2,
              "drawdown": -48.8,
              "m1": -2.6,
              "m3": 352.0
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 64.7,
              "drawdown": -23.1,
              "m1": 11.2,
              "m3": 110.7
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
              "pos52": 71.0,
              "drawdown": -28.4,
              "m1": 10.4,
              "m3": 234.6
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 65.5,
              "drawdown": -32.5,
              "m1": 6.1,
              "m3": 226.5
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 73.5,
              "drawdown": -26.0,
              "m1": 10.8,
              "m3": 143.0
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
              "pos52": 75.5,
              "drawdown": -21.3,
              "m1": 1.6,
              "m3": 83.6
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 71.3,
              "drawdown": -26.3,
              "m1": 7.5,
              "m3": 76.4
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
              "pos52": 84.0,
              "drawdown": -14.3,
              "m1": 20.5,
              "m3": 108.8
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
              "pos52": 67.7,
              "drawdown": -25.7,
              "m1": -15.9,
              "m3": 24.3
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 64.1,
              "drawdown": -32.9,
              "m1": -18.1,
              "m3": -13.3
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 43.3,
              "drawdown": -35.7,
              "m1": -22.7,
              "m3": -13.9
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 66.1,
              "drawdown": -29.7,
              "m1": -9.7,
              "m3": -1.5
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
              "pos52": 84.9,
              "drawdown": -13.6,
              "m1": 1.3,
              "m3": 93.1
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 87.4,
              "drawdown": -10.6,
              "m1": -2.6,
              "m3": 66.8
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 71.9,
              "drawdown": -23.4,
              "m1": -14.2,
              "m3": 20.1
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
              "pos52": 16.4,
              "drawdown": -28.8,
              "m1": -8.0,
              "m3": 3.2
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 82.1,
              "drawdown": -10.1,
              "m1": -1.7,
              "m3": 18.6
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 58.8,
              "drawdown": -11.4,
              "m1": -1.0,
              "m3": 14.0
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 2.4,
              "drawdown": -56.9,
              "m1": -34.3,
              "m3": -1.5
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
              "pos52": 28.8,
              "drawdown": -41.2,
              "m1": -10.3,
              "m3": 5.6
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 77.2,
              "drawdown": -15.5,
              "m1": 5.8,
              "m3": 21.2
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 90.4,
              "drawdown": -7.3,
              "m1": 9.5,
              "m3": 143.9
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 19.0,
              "drawdown": -53.6,
              "m1": -32.3,
              "m3": 24.3
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
