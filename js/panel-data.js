// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-09-01 23:39",
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
              "pos52": 89.1,
              "drawdown": -2.1,
              "m1": 0.5,
              "m3": 0.5
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 79.9,
              "drawdown": -5.1,
              "m1": 1.1,
              "m3": -5.1
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 84.8,
              "drawdown": -2.7,
              "m1": 0.7,
              "m3": 3.6
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 81.3,
              "drawdown": -4.8,
              "m1": -0.2,
              "m3": 0.8
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
              "pos52": 67.7,
              "drawdown": -18.5,
              "m1": 0.9,
              "m3": -10.3
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 79.7,
              "drawdown": -7.2,
              "m1": 3.1,
              "m3": -7.2
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
              "pos52": 74.4,
              "drawdown": -7.7,
              "m1": 5.2,
              "m3": -2.3
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 87.1,
              "drawdown": -4.3,
              "m1": 7.2,
              "m3": 3.2
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 80.3,
              "drawdown": -6.8,
              "m1": 2.9,
              "m3": 13.7
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 64.8,
              "drawdown": -16.7,
              "m1": -10.3,
              "m3": -7.4
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 65.9,
              "drawdown": -10.2,
              "m1": -10.2,
              "m3": -0.6
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 21.1,
              "drawdown": -25.6,
              "m1": -2.0,
              "m3": -3.1
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 30.2,
              "drawdown": -27.3,
              "m1": 10.6,
              "m3": -16.0
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
              "pos52": 74.4,
              "drawdown": -7.7,
              "m1": 5.2,
              "m3": -2.3
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 71.8,
              "drawdown": -20.9,
              "m1": -5.2,
              "m3": -11.9
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 40.8,
              "drawdown": -23.1,
              "m1": -5.7,
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
              "pos52": 74.7,
              "drawdown": -13.3,
              "m1": 1.9,
              "m3": -7.1
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 55.6,
              "drawdown": -36.9,
              "m1": -2.2,
              "m3": -17.6
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
              "pos52": 54.0,
              "drawdown": -42.0,
              "m1": -1.4,
              "m3": -28.3
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 74.4,
              "drawdown": -23.1,
              "m1": 12.5,
              "m3": -12.3
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 65.8,
              "drawdown": -27.9,
              "m1": -0.6,
              "m3": -25.1
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 14.8,
              "drawdown": -80.4,
              "m1": -13.7,
              "m3": -74.6
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 51.5,
              "drawdown": -31.8,
              "m1": 7.7,
              "m3": -20.9
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
              "m1": 9.7,
              "m3": -34.2
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 41.1,
              "drawdown": -55.5,
              "m1": 12.7,
              "m3": -34.5
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 65.1,
              "drawdown": -34.2,
              "m1": 19.3,
              "m3": -10.5
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
              "pos52": 70.1,
              "drawdown": -25.3,
              "m1": -4.6,
              "m3": -11.3
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
              "pos52": 44.4,
              "drawdown": -48.9,
              "m1": 15.4,
              "m3": -30.7
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
              "pos52": 54.3,
              "drawdown": -36.3,
              "m1": -5.6,
              "m3": -36.3
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 80.0,
              "drawdown": -17.5,
              "m1": 21.7,
              "m3": -4.0
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 16.2,
              "drawdown": -46.1,
              "m1": -7.7,
              "m3": -35.4
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 50.0,
              "drawdown": -42.5,
              "m1": -4.4,
              "m3": -36.7
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
              "pos52": 49.5,
              "drawdown": -37.8,
              "m1": -4.8,
              "m3": -32.6
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 48.3,
              "drawdown": -34.0,
              "m1": 2.2,
              "m3": -27.8
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 59.2,
              "drawdown": -29.0,
              "m1": 39.5,
              "m3": -29.0
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
              "pos52": 80.3,
              "drawdown": -6.8,
              "m1": 2.9,
              "m3": 13.7
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 64.8,
              "drawdown": -16.7,
              "m1": -10.3,
              "m3": -7.4
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 65.9,
              "drawdown": -10.2,
              "m1": -10.2,
              "m3": -0.6
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 12.6,
              "drawdown": -56.5,
              "m1": -0.4,
              "m3": -42.0
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
              "pos52": 25.6,
              "drawdown": -42.8,
              "m1": -4.6,
              "m3": -31.4
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 52.8,
              "drawdown": -32.0,
              "m1": 6.0,
              "m3": -20.8
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 81.9,
              "drawdown": -14.1,
              "m1": -0.9,
              "m3": -2.2
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 42.4,
              "drawdown": -37.4,
              "m1": 28.2,
              "m3": -26.8
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
