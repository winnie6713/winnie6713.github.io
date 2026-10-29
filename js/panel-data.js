// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-10-29 01:21",
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
              "pos52": 93.7,
              "drawdown": -1.2,
              "m1": 0.5,
              "m3": 5.8
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 81.0,
              "drawdown": -5.1,
              "m1": -2.1,
              "m3": 9.1
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 80.9,
              "drawdown": -3.3,
              "m1": 1.8,
              "m3": 1.9
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 68.9,
              "drawdown": -7.9,
              "m1": 0.1,
              "m3": -2.7
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
              "pos52": 67.8,
              "drawdown": -16.6,
              "m1": -7.0,
              "m3": 10.7
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 83.3,
              "drawdown": -6.2,
              "m1": -2.6,
              "m3": 13.9
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
              "pos52": 71.4,
              "drawdown": -8.9,
              "m1": -4.8,
              "m3": 14.8
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 98.9,
              "drawdown": -0.3,
              "m1": 2.6,
              "m3": 2.7
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 93.7,
              "drawdown": -2.2,
              "m1": 4.3,
              "m3": 36.3
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 36.8,
              "drawdown": -20.3,
              "m1": -6.5,
              "m3": -4.7
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 63.7,
              "drawdown": -10.9,
              "m1": 2.8,
              "m3": 11.7
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 37.7,
              "drawdown": -20.2,
              "m1": -13.3,
              "m3": 6.0
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 57.0,
              "drawdown": -16.8,
              "m1": 14.0,
              "m3": 36.6
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
              "pos52": 71.4,
              "drawdown": -8.9,
              "m1": -4.8,
              "m3": 14.8
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 80.6,
              "drawdown": -13.7,
              "m1": -7.8,
              "m3": 30.4
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 26.6,
              "drawdown": -28.7,
              "m1": -2.1,
              "m3": -7.4
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
              "pos52": 77.1,
              "drawdown": -10.1,
              "m1": -3.5,
              "m3": 16.9
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 56.0,
              "drawdown": -33.5,
              "m1": -19.2,
              "m3": 14.5
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
              "pos52": 42.3,
              "drawdown": -47.5,
              "m1": -13.3,
              "m3": -15.6
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 71.9,
              "drawdown": -23.4,
              "m1": -11.9,
              "m3": 25.7
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 53.6,
              "drawdown": -34.3,
              "m1": -11.9,
              "m3": -6.4
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 9.0,
              "drawdown": -85.9,
              "m1": -37.9,
              "m3": -19.0
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 43.0,
              "drawdown": -37.4,
              "m1": -15.4,
              "m3": 12.6
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
              "pos52": 37.4,
              "drawdown": -57.8,
              "m1": -14.4,
              "m3": -15.9
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 35.0,
              "drawdown": -60.0,
              "m1": -18.8,
              "m3": -9.0
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 51.9,
              "drawdown": -44.1,
              "m1": -23.8,
              "m3": 28.4
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
              "pos52": 50.4,
              "drawdown": -38.9,
              "m1": -27.5,
              "m3": -12.6
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 40.0,
              "drawdown": -48.9,
              "m1": -16.0,
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
              "pos52": 2.2,
              "drawdown": -66.9,
              "m1": -31.2,
              "m3": -36.4
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
              "pos52": 35.9,
              "drawdown": -44.8,
              "m1": -16.5,
              "m3": 6.2
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 71.7,
              "drawdown": -23.6,
              "m1": -6.0,
              "m3": 43.8
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 6.6,
              "drawdown": -54.0,
              "m1": -16.3,
              "m3": -17.2
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 38.8,
              "drawdown": -44.0,
              "m1": 2.0,
              "m3": 6.3
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
              "pos52": 19.5,
              "drawdown": -53.9,
              "m1": -32.3,
              "m3": -40.6
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 11.9,
              "drawdown": -57.9,
              "m1": -43.8,
              "m3": -48.4
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 39.4,
              "drawdown": -43.1,
              "m1": -27.9,
              "m3": -4.8
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
              "pos52": 93.7,
              "drawdown": -2.2,
              "m1": 4.3,
              "m3": 36.3
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 36.8,
              "drawdown": -20.3,
              "m1": -6.5,
              "m3": -4.7
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 63.7,
              "drawdown": -10.9,
              "m1": 2.8,
              "m3": 11.7
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 10.2,
              "drawdown": -52.0,
              "m1": -1.2,
              "m3": 11.3
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
              "pos52": 6.2,
              "drawdown": -57.4,
              "m1": -30.0,
              "m3": -2.1
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 26.0,
              "drawdown": -44.5,
              "m1": -14.5,
              "m3": -6.5
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 82.1,
              "drawdown": -14.6,
              "m1": -7.5,
              "m3": 36.0
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 45.3,
              "drawdown": -33.4,
              "m1": -16.0,
              "m3": 36.5
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
