// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-09-01 00:52",
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
              "pos52": 92.7,
              "drawdown": -1.4,
              "m1": 2.7,
              "m3": 1.4
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 84.8,
              "drawdown": -3.8,
              "m1": 4.2,
              "m3": -3.4
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 88.8,
              "drawdown": -2.0,
              "m1": 1.5,
              "m3": 4.3
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 85.6,
              "drawdown": -3.7,
              "m1": 0.9,
              "m3": 2.0
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
              "pos52": 70.7,
              "drawdown": -16.8,
              "m1": 3.0,
              "m3": -8.4
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 83.8,
              "drawdown": -5.8,
              "m1": 6.4,
              "m3": -4.6
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
              "pos52": 79.2,
              "drawdown": -6.2,
              "m1": 10.0,
              "m3": -1.5
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 79.9,
              "drawdown": -6.8,
              "m1": 2.7,
              "m3": 3.5
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 83.6,
              "drawdown": -5.6,
              "m1": 9.4,
              "m3": 10.4
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 67.1,
              "drawdown": -15.7,
              "m1": -4.7,
              "m3": -9.8
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 71.5,
              "drawdown": -8.5,
              "m1": -4.3,
              "m3": -0.6
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 18.7,
              "drawdown": -26.4,
              "m1": 2.8,
              "m3": -4.6
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 36.3,
              "drawdown": -24.9,
              "m1": 18.2,
              "m3": -11.5
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
              "pos52": 79.2,
              "drawdown": -6.2,
              "m1": 10.0,
              "m3": -1.5
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 74.4,
              "drawdown": -19.0,
              "m1": -1.1,
              "m3": -7.7
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 41.2,
              "drawdown": -23.0,
              "m1": -4.9,
              "m3": -19.4
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
              "pos52": 75.3,
              "drawdown": -13.0,
              "m1": 2.7,
              "m3": -4.4
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 56.0,
              "drawdown": -36.5,
              "m1": -0.8,
              "m3": -18.1
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
              "pos52": 53.3,
              "drawdown": -42.6,
              "m1": -2.4,
              "m3": -29.1
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 76.7,
              "drawdown": -21.0,
              "m1": 16.5,
              "m3": -7.4
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 64.4,
              "drawdown": -29.0,
              "m1": -2.1,
              "m3": -26.3
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 14.6,
              "drawdown": -80.6,
              "m1": 43.7,
              "m3": -73.5
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 55.0,
              "drawdown": -29.5,
              "m1": 13.0,
              "m3": -16.3
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
              "pos52": 44.5,
              "drawdown": -54.2,
              "m1": 7.1,
              "m3": -35.8
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 41.1,
              "drawdown": -55.4,
              "m1": 12.8,
              "m3": -34.4
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 66.4,
              "drawdown": -32.9,
              "m1": 29.0,
              "m3": -11.1
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
              "pos52": 71.3,
              "drawdown": -24.2,
              "m1": -3.2,
              "m3": -10.0
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 55.5,
              "drawdown": -39.6,
              "m1": -17.3,
              "m3": -17.5
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
              "pos52": 46.4,
              "drawdown": -47.2,
              "m1": 10.0,
              "m3": -26.5
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
              "pos52": 56.0,
              "drawdown": -34.9,
              "m1": 5.7,
              "m3": -23.4
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 85.0,
              "drawdown": -13.1,
              "m1": 28.1,
              "m3": 1.1
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 18.8,
              "drawdown": -44.7,
              "m1": -5.2,
              "m3": -33.7
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 54.2,
              "drawdown": -38.9,
              "m1": 1.5,
              "m3": -32.8
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
              "pos52": 48.8,
              "drawdown": -38.4,
              "m1": -5.6,
              "m3": -28.5
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 48.1,
              "drawdown": -34.2,
              "m1": 1.5,
              "m3": -24.5
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 63.7,
              "drawdown": -25.8,
              "m1": 53.8,
              "m3": -19.2
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
              "pos52": 83.6,
              "drawdown": -5.6,
              "m1": 9.4,
              "m3": 10.4
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 67.1,
              "drawdown": -15.7,
              "m1": -4.7,
              "m3": -9.8
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 71.5,
              "drawdown": -8.5,
              "m1": -4.3,
              "m3": -0.6
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 16.3,
              "drawdown": -54.1,
              "m1": 14.8,
              "m3": -39.7
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
              "pos52": 29.3,
              "drawdown": -40.7,
              "m1": 18.3,
              "m3": -32.0
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 53.9,
              "drawdown": -31.2,
              "m1": 7.1,
              "m3": -20.0
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 90.0,
              "drawdown": -7.8,
              "m1": 12.5,
              "m3": -2.0
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 43.9,
              "drawdown": -36.5,
              "m1": 31.3,
              "m3": -20.5
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
