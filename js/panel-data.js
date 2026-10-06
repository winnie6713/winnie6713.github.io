// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-10-06 01:58",
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
              "pos52": 99.2,
              "drawdown": -0.1,
              "m1": 0.5,
              "m3": 3.9
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 5.5,
              "m3": 6.7
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 68.8,
              "drawdown": -5.4,
              "m1": -4.4,
              "m3": -2.8
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 73.0,
              "drawdown": -6.9,
              "m1": -3.8,
              "m3": -4.1
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
              "pos52": 89.8,
              "drawdown": -5.2,
              "m1": 14.7,
              "m3": 9.0
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 8.2,
              "m3": 12.3
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
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 4.7,
              "m3": 21.4
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 91.5,
              "drawdown": -2.4,
              "m1": 1.4,
              "m3": 7.2
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 93.3,
              "drawdown": -2.3,
              "m1": 3.0,
              "m3": 35.3
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 66.5,
              "drawdown": -13.8,
              "m1": 1.2,
              "m3": -5.5
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 61.7,
              "drawdown": -11.5,
              "m1": -2.9,
              "m3": 2.2
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 85.9,
              "drawdown": -4.6,
              "m1": 21.6,
              "m3": 20.6
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 42.0,
              "drawdown": -22.7,
              "m1": 0.6,
              "m3": -6.0
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
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 4.7,
              "m3": 21.4
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 99.5,
              "drawdown": -0.3,
              "m1": 38.5,
              "m3": 22.4
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 37.4,
              "drawdown": -24.5,
              "m1": 1.7,
              "m3": -2.1
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
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 16.8,
              "m3": 12.6
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 76.9,
              "drawdown": -17.6,
              "m1": 26.7,
              "m3": 5.3
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
              "pos52": 55.5,
              "drawdown": -38.3,
              "m1": 11.7,
              "m3": -17.6
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 85.5,
              "drawdown": -12.3,
              "m1": 11.0,
              "m3": 13.4
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 68.3,
              "drawdown": -23.8,
              "m1": 10.2,
              "m3": -3.5
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 16.9,
              "drawdown": -78.4,
              "m1": 21.4,
              "m3": -55.8
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 64.0,
              "drawdown": -23.6,
              "m1": 10.1,
              "m3": 1.8
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
              "pos52": 48.8,
              "drawdown": -48.5,
              "m1": 9.9,
              "m3": -26.5
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 48.0,
              "drawdown": -49.0,
              "m1": 6.7,
              "m3": -18.2
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 71.6,
              "drawdown": -27.0,
              "m1": 9.6,
              "m3": 5.3
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
              "pos52": 76.7,
              "drawdown": -18.8,
              "m1": 11.2,
              "m3": 7.3
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 51.9,
              "drawdown": -40.8,
              "m1": 0.0,
              "m3": -17.0
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
              "pos52": 24.2,
              "drawdown": -58.2,
              "m1": -20.9,
              "m3": -49.6
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
              "pos52": 70.6,
              "drawdown": -21.8,
              "m1": 26.2,
              "m3": 6.2
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 28.8,
              "m3": 56.2
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 23.9,
              "drawdown": -39.2,
              "m1": 14.9,
              "m3": -3.1
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 50.1,
              "drawdown": -37.8,
              "m1": 22.8,
              "m3": -7.0
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
              "pos52": 44.6,
              "drawdown": -41.5,
              "m1": -5.1,
              "m3": -29.3
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 44.8,
              "drawdown": -36.3,
              "m1": -3.2,
              "m3": -23.6
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 63.0,
              "drawdown": -26.3,
              "m1": -0.7,
              "m3": 4.2
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
              "pos52": 93.3,
              "drawdown": -2.3,
              "m1": 3.0,
              "m3": 35.3
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 66.5,
              "drawdown": -13.8,
              "m1": 1.2,
              "m3": -5.5
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 61.7,
              "drawdown": -11.5,
              "m1": -2.9,
              "m3": 2.2
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 14.1,
              "drawdown": -54.0,
              "m1": -7.5,
              "m3": 1.0
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
              "pos52": 32.3,
              "drawdown": -38.9,
              "m1": 3.3,
              "m3": 4.6
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 45.9,
              "drawdown": -32.6,
              "m1": -5.6,
              "m3": -17.0
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 92.4,
              "drawdown": -6.1,
              "m1": 7.0,
              "m3": 32.6
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 59.4,
              "drawdown": -26.4,
              "m1": 14.0,
              "m3": 64.5
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
