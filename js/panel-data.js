// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-10-03 00:48",
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
              "pos52": 91.9,
              "drawdown": -1.5,
              "m1": 0.5,
              "m3": 2.8
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 97.1,
              "drawdown": -0.7,
              "m1": 5.0,
              "m3": 4.2
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 65.0,
              "drawdown": -6.0,
              "m1": -3.4,
              "m3": -3.3
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 67.4,
              "drawdown": -8.3,
              "m1": -3.7,
              "m3": -6.0
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
              "pos52": 85.2,
              "drawdown": -7.6,
              "m1": 13.3,
              "m3": 4.3
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 7.8,
              "m3": 9.7
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
              "pos52": 93.8,
              "drawdown": -1.8,
              "m1": 6.3,
              "m3": 18.6
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 88.9,
              "drawdown": -3.2,
              "m1": 1.6,
              "m3": 7.1
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 86.6,
              "drawdown": -4.6,
              "m1": 2.4,
              "m3": 31.6
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 61.6,
              "drawdown": -15.9,
              "m1": 1.0,
              "m3": -6.0
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 58.0,
              "drawdown": -12.6,
              "m1": -2.6,
              "m3": 2.3
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 79.6,
              "drawdown": -6.6,
              "m1": 25.6,
              "m3": 24.6
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 29.1,
              "drawdown": -27.7,
              "m1": -0.6,
              "m3": -10.0
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
              "pos52": 93.8,
              "drawdown": -1.8,
              "m1": 6.3,
              "m3": 18.6
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 96.8,
              "drawdown": -2.4,
              "m1": 34.0,
              "m3": 18.9
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 27.3,
              "drawdown": -28.4,
              "m1": -6.9,
              "m3": -4.5
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
              "pos52": 91.6,
              "drawdown": -3.6,
              "m1": 11.2,
              "m3": 6.1
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 80.5,
              "drawdown": -14.9,
              "m1": 34.9,
              "m3": -0.3
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
              "pos52": 57.3,
              "drawdown": -36.9,
              "m1": 8.7,
              "m3": -28.1
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 88.8,
              "drawdown": -9.6,
              "m1": 17.6,
              "m3": 12.5
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 68.5,
              "drawdown": -23.8,
              "m1": 5.7,
              "m3": -12.2
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 17.9,
              "drawdown": -77.5,
              "m1": 22.6,
              "m3": -61.2
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 64.7,
              "drawdown": -23.2,
              "m1": 12.7,
              "m3": 2.3
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
              "pos52": 50.8,
              "drawdown": -46.7,
              "m1": 15.8,
              "m3": -35.4
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 48.1,
              "drawdown": -48.9,
              "m1": 9.8,
              "m3": -27.8
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 75.3,
              "drawdown": -23.4,
              "m1": 16.3,
              "m3": 2.4
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
              "pos52": 83.4,
              "drawdown": -13.4,
              "m1": 15.9,
              "m3": 15.4
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 55.2,
              "drawdown": -38.0,
              "m1": 2.7,
              "m3": -14.2
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
              "pos52": 66.1,
              "drawdown": -25.2,
              "m1": 17.3,
              "m3": -4.3
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 99.2,
              "drawdown": -0.7,
              "m1": 20.3,
              "m3": 43.6
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 23.3,
              "drawdown": -39.5,
              "m1": 12.3,
              "m3": -9.6
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 47.9,
              "drawdown": -39.5,
              "m1": 5.2,
              "m3": -10.3
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
              "pos52": 86.6,
              "drawdown": -4.6,
              "m1": 2.4,
              "m3": 31.6
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 61.6,
              "drawdown": -15.9,
              "m1": 1.0,
              "m3": -6.0
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 58.0,
              "drawdown": -12.6,
              "m1": -2.6,
              "m3": 2.3
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 11.8,
              "drawdown": -55.5,
              "m1": -2.3,
              "m3": -1.2
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
              "pos52": 33.7,
              "drawdown": -38.1,
              "m1": 8.2,
              "m3": 8.3
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 42.6,
              "drawdown": -34.6,
              "m1": -3.8,
              "m3": -18.1
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 90.2,
              "drawdown": -7.9,
              "m1": 27.5,
              "m3": 37.6
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 56.1,
              "drawdown": -28.6,
              "m1": 14.2,
              "m3": 54.0
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
