// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-07-15 22:47",
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
              "pos52": 98.0,
              "drawdown": -0.4,
              "m1": 2.0,
              "m3": 9.0
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 85.8,
              "drawdown": -3.7,
              "m1": -0.4,
              "m3": 14.3
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 95.9,
              "drawdown": -0.8,
              "m1": 2.8,
              "m3": 8.7
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 94.7,
              "drawdown": -1.6,
              "m1": 1.2,
              "m3": 10.3
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
              "pos52": 79.7,
              "drawdown": -11.7,
              "m1": -4.7,
              "m3": 30.7
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 76.8,
              "drawdown": -8.3,
              "m1": -1.6,
              "m3": 22.9
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
              "pos52": 67.4,
              "drawdown": -9.8,
              "m1": 3.6,
              "m3": 8.3
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 12.5,
              "m3": 26.6
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 23.0,
              "drawdown": -26.6,
              "m1": 1.3,
              "m3": 0.9
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 85.7,
              "drawdown": -7.8,
              "m1": 3.1,
              "m3": 11.5
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 73.7,
              "drawdown": -7.3,
              "m1": 6.9,
              "m3": 2.4
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 59.5,
              "drawdown": -13.5,
              "m1": 20.3,
              "m3": 2.9
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 49.0,
              "drawdown": -19.5,
              "m1": -2.9,
              "m3": 8.3
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
              "pos52": 67.4,
              "drawdown": -9.8,
              "m1": 3.6,
              "m3": 8.3
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 88.0,
              "drawdown": -8.9,
              "m1": 3.4,
              "m3": 107.4
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 57.6,
              "drawdown": -18.0,
              "m1": 3.4,
              "m3": 3.7
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
              "pos52": 77.0,
              "drawdown": -12.2,
              "m1": -1.0,
              "m3": 10.7
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 68.8,
              "drawdown": -26.9,
              "m1": -17.3,
              "m3": 61.4
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
              "pos52": 68.7,
              "drawdown": -28.7,
              "m1": -12.6,
              "m3": 100.2
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 72.1,
              "drawdown": -25.5,
              "m1": -7.9,
              "m3": 94.2
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 72.3,
              "drawdown": -22.9,
              "m1": -18.5,
              "m3": 39.1
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 30.9,
              "drawdown": -65.3,
              "m1": -38.5,
              "m3": 116.0
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 56.0,
              "drawdown": -28.9,
              "m1": -11.7,
              "m3": 61.4
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
              "pos52": 66.5,
              "drawdown": -32.8,
              "m1": -22.8,
              "m3": 133.8
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 56.7,
              "drawdown": -40.7,
              "m1": -21.0,
              "m3": 87.6
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 68.6,
              "drawdown": -30.8,
              "m1": -18.4,
              "m3": 71.0
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
              "pos52": 72.0,
              "drawdown": -24.2,
              "m1": -11.0,
              "m3": 55.4
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 65.8,
              "drawdown": -31.1,
              "m1": -8.7,
              "m3": 40.3
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
              "pos52": 63.4,
              "drawdown": -32.5,
              "m1": -7.8,
              "m3": 37.9
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
              "pos52": 62.5,
              "drawdown": -29.9,
              "m1": -22.2,
              "m3": -4.5
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 68.4,
              "drawdown": -28.6,
              "m1": -18.4,
              "m3": -11.8
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 44.7,
              "drawdown": -34.8,
              "m1": -20.4,
              "m3": -28.6
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 61.6,
              "drawdown": -33.3,
              "m1": -6.2,
              "m3": -10.4
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
              "pos52": 82.4,
              "drawdown": -15.4,
              "m1": -6.1,
              "m3": 58.6
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 89.1,
              "drawdown": -8.9,
              "m1": 2.9,
              "m3": 52.1
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 67.6,
              "drawdown": -26.8,
              "m1": -15.0,
              "m3": 3.7
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
              "pos52": 23.0,
              "drawdown": -26.6,
              "m1": 1.3,
              "m3": 0.9
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 85.7,
              "drawdown": -7.8,
              "m1": 3.1,
              "m3": 11.5
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 73.7,
              "drawdown": -7.3,
              "m1": 6.9,
              "m3": 2.4
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 2.3,
              "drawdown": -59.2,
              "m1": -27.8,
              "m3": -18.4
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
              "pos52": 14.9,
              "drawdown": -48.2,
              "m1": -23.3,
              "m3": -34.2
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 71.9,
              "drawdown": -19.0,
              "m1": 0.6,
              "m3": -1.9
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 85.0,
              "drawdown": -11.4,
              "m1": 4.3,
              "m3": 124.4
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 15.8,
              "drawdown": -55.7,
              "m1": -11.7,
              "m3": -1.1
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
