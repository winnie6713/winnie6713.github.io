// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-10-31 01:11",
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
              "m1": 0.9,
              "m3": 3.2
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 78.1,
              "drawdown": -5.8,
              "m1": -3.3,
              "m3": 4.1
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 80.3,
              "drawdown": -3.4,
              "m1": 2.8,
              "m3": 0.0
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 73.8,
              "drawdown": -6.7,
              "m1": 2.2,
              "m3": -2.2
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
              "pos52": 68.9,
              "drawdown": -16.0,
              "m1": -7.8,
              "m3": 3.9
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 82.3,
              "drawdown": -6.6,
              "m1": -3.6,
              "m3": 7.8
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
              "pos52": 65.6,
              "drawdown": -10.7,
              "m1": -6.4,
              "m3": 6.5
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 4.8,
              "m3": 13.0
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 93.0,
              "drawdown": -2.4,
              "m1": 3.4,
              "m3": 14.3
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 8.3,
              "drawdown": -29.4,
              "m1": -17.5,
              "m3": -20.3
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 52.8,
              "drawdown": -14.2,
              "m1": -2.2,
              "m3": -10.2
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 39.4,
              "drawdown": -19.7,
              "m1": -13.9,
              "m3": 12.3
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 54.8,
              "drawdown": -17.7,
              "m1": 13.7,
              "m3": 29.6
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
              "pos52": 65.6,
              "drawdown": -10.7,
              "m1": -6.4,
              "m3": 6.5
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 81.9,
              "drawdown": -12.8,
              "m1": -7.4,
              "m3": 19.0
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 28.0,
              "drawdown": -28.1,
              "m1": -1.8,
              "m3": -11.2
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
              "drawdown": -11.1,
              "m1": -5.3,
              "m3": 7.1
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 54.5,
              "drawdown": -34.7,
              "m1": -23.4,
              "m3": 2.1
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
              "pos52": 37.5,
              "drawdown": -51.4,
              "m1": -19.7,
              "m3": -8.5
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 72.4,
              "drawdown": -23.0,
              "m1": -12.3,
              "m3": 13.5
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 48.9,
              "drawdown": -37.9,
              "m1": -17.4,
              "m3": 2.3
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 8.5,
              "drawdown": -86.3,
              "m1": -35.2,
              "m3": 1.0
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 45.3,
              "drawdown": -35.9,
              "m1": -14.3,
              "m3": 2.7
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
              "pos52": 31.9,
              "drawdown": -62.8,
              "m1": -25.6,
              "m3": -9.3
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 26.3,
              "drawdown": -68.0,
              "m1": -37.6,
              "m3": -28.9
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 53.1,
              "drawdown": -43.0,
              "m1": -23.6,
              "m3": 9.5
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
              "pos52": 54.2,
              "drawdown": -35.9,
              "m1": -24.1,
              "m3": -18.1
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 42.2,
              "drawdown": -47.0,
              "m1": -13.0,
              "m3": -27.4
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
              "pos52": 0.0,
              "drawdown": -70.7,
              "m1": -38.7,
              "m3": -43.3
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
              "pos52": 36.4,
              "drawdown": -44.4,
              "m1": -17.6,
              "m3": -9.8
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 77.4,
              "drawdown": -18.9,
              "m1": -5.3,
              "m3": 28.8
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 7.8,
              "drawdown": -53.3,
              "m1": -17.8,
              "m3": -19.9
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 38.4,
              "drawdown": -44.3,
              "m1": -0.7,
              "m3": -7.3
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
              "pos52": 10.5,
              "drawdown": -59.9,
              "m1": -40.0,
              "m3": -48.6
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 0.0,
              "drawdown": -67.9,
              "m1": -56.6,
              "m3": -60.1
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 18.1,
              "drawdown": -58.2,
              "m1": -46.3,
              "m3": -29.1
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
              "pos52": 93.0,
              "drawdown": -2.4,
              "m1": 3.4,
              "m3": 14.3
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 8.3,
              "drawdown": -29.4,
              "m1": -17.5,
              "m3": -20.3
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 52.8,
              "drawdown": -14.2,
              "m1": -2.2,
              "m3": -10.2
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 17.3,
              "drawdown": -46.1,
              "m1": 2.0,
              "m3": 7.9
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
              "pos52": 7.8,
              "drawdown": -56.0,
              "m1": -30.3,
              "m3": -15.4
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 42.5,
              "drawdown": -34.6,
              "m1": 1.9,
              "m3": 1.8
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 76.5,
              "drawdown": -19.1,
              "m1": -11.5,
              "m3": 17.5
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 44.2,
              "drawdown": -33.7,
              "m1": -16.2,
              "m3": 21.2
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
