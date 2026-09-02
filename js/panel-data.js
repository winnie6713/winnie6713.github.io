// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-09-02 23:40",
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
              "m1": -0.8,
              "m3": 1.7
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 80.8,
              "drawdown": -4.8,
              "m1": -2.0,
              "m3": -4.6
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 87.8,
              "drawdown": -2.2,
              "m1": -1.7,
              "m3": 4.8
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 85.7,
              "drawdown": -3.6,
              "m1": -2.6,
              "m3": 2.4
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
              "pos52": 69.1,
              "drawdown": -17.7,
              "m1": -4.4,
              "m3": -13.7
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 79.6,
              "drawdown": -7.3,
              "m1": -1.8,
              "m3": -6.3
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
              "pos52": 84.3,
              "drawdown": -4.7,
              "m1": 5.9,
              "m3": 4.6
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 87.0,
              "drawdown": -4.4,
              "m1": 5.1,
              "m3": 4.8
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 78.0,
              "drawdown": -7.6,
              "m1": 1.0,
              "m3": 16.5
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 62.1,
              "drawdown": -16.2,
              "m1": -10.7,
              "m3": -6.0
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 65.9,
              "drawdown": -10.2,
              "m1": -8.1,
              "m3": 2.0
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 26.8,
              "drawdown": -23.8,
              "m1": 0.8,
              "m3": -4.7
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 30.6,
              "drawdown": -27.1,
              "m1": 9.1,
              "m3": -15.7
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
              "pos52": 84.3,
              "drawdown": -4.7,
              "m1": 5.9,
              "m3": 4.6
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 71.2,
              "drawdown": -21.3,
              "m1": -11.9,
              "m3": -15.8
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 39.5,
              "drawdown": -23.6,
              "m1": -12.2,
              "m3": -23.2
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
              "pos52": 75.0,
              "drawdown": -13.0,
              "m1": -0.4,
              "m3": -4.6
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 56.5,
              "drawdown": -36.1,
              "m1": -10.7,
              "m3": -20.1
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
              "pos52": 50.9,
              "drawdown": -44.7,
              "m1": 3.0,
              "m3": -31.6
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 76.5,
              "drawdown": -21.2,
              "m1": 7.1,
              "m3": -11.4
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 62.0,
              "drawdown": -30.8,
              "m1": 4.6,
              "m3": -30.4
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 15.0,
              "drawdown": -80.2,
              "m1": 4.6,
              "m3": -73.3
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 53.7,
              "drawdown": -30.4,
              "m1": 2.4,
              "m3": -19.4
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
              "pos52": 45.6,
              "drawdown": -53.1,
              "m1": 3.7,
              "m3": -34.7
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 43.2,
              "drawdown": -53.5,
              "m1": -7.7,
              "m3": -36.1
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 65.7,
              "drawdown": -33.5,
              "m1": 8.8,
              "m3": -15.2
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
              "drawdown": -26.0,
              "m1": -4.4,
              "m3": -14.0
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 55.0,
              "drawdown": -39.8,
              "m1": -18.2,
              "m3": -24.4
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
              "pos52": 43.3,
              "drawdown": -49.9,
              "m1": 7.8,
              "m3": -36.3
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
              "pos52": 53.2,
              "drawdown": -37.1,
              "m1": -17.0,
              "m3": -35.6
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 80.1,
              "drawdown": -17.3,
              "m1": 2.5,
              "m3": -7.2
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 14.1,
              "drawdown": -47.0,
              "m1": -25.6,
              "m3": -45.5
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 48.7,
              "drawdown": -43.5,
              "m1": -13.9,
              "m3": -42.9
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
              "pos52": 46.0,
              "drawdown": -40.5,
              "m1": -19.5,
              "m3": -35.7
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 44.3,
              "drawdown": -36.7,
              "m1": -13.7,
              "m3": -30.1
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 58.5,
              "drawdown": -29.5,
              "m1": 17.9,
              "m3": -27.0
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
              "pos52": 78.0,
              "drawdown": -7.6,
              "m1": 1.0,
              "m3": 16.5
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 62.1,
              "drawdown": -16.2,
              "m1": -10.7,
              "m3": -6.0
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 65.9,
              "drawdown": -10.2,
              "m1": -8.1,
              "m3": 2.0
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 14.7,
              "drawdown": -55.1,
              "m1": 0.0,
              "m3": -36.5
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
              "m1": -11.9,
              "m3": -27.0
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 53.1,
              "drawdown": -31.8,
              "m1": -4.9,
              "m3": -22.5
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 99.4,
              "drawdown": -0.5,
              "m1": 5.3,
              "m3": 17.1
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 43.2,
              "drawdown": -36.9,
              "m1": 16.8,
              "m3": -22.0
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
