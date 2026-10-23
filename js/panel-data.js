// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-10-23 00:14",
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
              "pos52": 96.0,
              "drawdown": -0.8,
              "m1": -0.0,
              "m3": 5.0
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 83.0,
              "drawdown": -4.5,
              "m1": -3.0,
              "m3": 4.9
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 85.7,
              "drawdown": -2.5,
              "m1": 1.9,
              "m3": 2.6
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 64.1,
              "drawdown": -9.1,
              "m1": -3.7,
              "m3": -5.1
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
              "pos52": 67.5,
              "drawdown": -16.8,
              "m1": -8.4,
              "m3": -4.0
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 82.0,
              "drawdown": -6.7,
              "m1": -3.9,
              "m3": 5.8
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
              "pos52": 76.8,
              "drawdown": -7.2,
              "m1": -3.0,
              "m3": 6.4
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 1.2,
              "m3": 7.0
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 94.5,
              "drawdown": -1.9,
              "m1": 7.0,
              "m3": 39.9
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 55.0,
              "drawdown": -16.8,
              "m1": -4.7,
              "m3": 5.4
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 74.6,
              "drawdown": -7.6,
              "m1": 2.9,
              "m3": 12.3
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 68.3,
              "drawdown": -10.3,
              "m1": -5.3,
              "m3": 15.2
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 46.0,
              "drawdown": -21.1,
              "m1": 2.0,
              "m3": 20.9
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
              "pos52": 76.8,
              "drawdown": -7.2,
              "m1": -3.0,
              "m3": 6.4
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 78.9,
              "drawdown": -14.9,
              "m1": -11.4,
              "m3": 2.4
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 24.2,
              "drawdown": -29.6,
              "m1": -7.3,
              "m3": -13.8
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
              "pos52": 74.8,
              "drawdown": -11.1,
              "m1": -4.4,
              "m3": 4.2
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 55.3,
              "drawdown": -34.0,
              "m1": -24.9,
              "m3": -7.3
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
              "pos52": 30.6,
              "drawdown": -58.1,
              "m1": -29.9,
              "m3": -30.7
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 70.4,
              "drawdown": -24.7,
              "m1": -16.6,
              "m3": -7.7
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 44.9,
              "drawdown": -40.8,
              "m1": -15.0,
              "m3": -12.1
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 5.1,
              "drawdown": -89.5,
              "m1": -54.7,
              "m3": -64.8
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 40.4,
              "drawdown": -39.1,
              "m1": -22.7,
              "m3": -15.7
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
              "pos52": 30.0,
              "drawdown": -65.2,
              "m1": -24.2,
              "m3": -27.5
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 28.0,
              "drawdown": -67.4,
              "m1": -38.8,
              "m3": -30.1
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 55.9,
              "drawdown": -41.0,
              "m1": -27.0,
              "m3": -14.4
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
              "pos52": 54.6,
              "drawdown": -36.2,
              "m1": -24.2,
              "m3": -23.6
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 40.9,
              "drawdown": -49.3,
              "m1": -18.5,
              "m3": -32.2
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
              "pos52": 11.3,
              "drawdown": -66.5,
              "m1": -26.3,
              "m3": -38.9
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
              "pos52": 38.0,
              "drawdown": -44.4,
              "m1": -23.5,
              "m3": -24.2
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 70.7,
              "drawdown": -24.9,
              "m1": -10.0,
              "m3": 2.0
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 0.1,
              "drawdown": -52.3,
              "m1": -11.8,
              "m3": -31.2
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 41.5,
              "drawdown": -42.4,
              "m1": -2.0,
              "m3": -11.3
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
              "pos52": 16.0,
              "drawdown": -57.2,
              "m1": -31.6,
              "m3": -39.7
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 12.2,
              "drawdown": -57.7,
              "m1": -35.0,
              "m3": -46.6
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 37.6,
              "drawdown": -44.3,
              "m1": -23.3,
              "m3": -6.6
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
              "pos52": 94.5,
              "drawdown": -1.9,
              "m1": 7.0,
              "m3": 39.9
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 55.0,
              "drawdown": -16.8,
              "m1": -4.7,
              "m3": 5.4
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 74.6,
              "drawdown": -7.6,
              "m1": 2.9,
              "m3": 12.3
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 8.8,
              "drawdown": -53.8,
              "m1": -13.1,
              "m3": 8.0
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
              "pos52": 1.3,
              "drawdown": -55.8,
              "m1": -28.7,
              "m3": -23.8
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 27.6,
              "drawdown": -43.6,
              "m1": -16.3,
              "m3": -30.2
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 78.7,
              "drawdown": -17.3,
              "m1": -11.4,
              "m3": 10.7
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 46.8,
              "drawdown": -32.5,
              "m1": -14.4,
              "m3": 14.0
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
