// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-09-26 00:14",
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
              "pos52": 94.0,
              "drawdown": -1.1,
              "m1": 0.4,
              "m3": 4.7
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 96.7,
              "drawdown": -0.9,
              "m1": 4.4,
              "m3": 3.6
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 69.4,
              "drawdown": -5.3,
              "m1": -4.0,
              "m3": -0.9
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 70.8,
              "drawdown": -7.4,
              "m1": -5.6,
              "m3": -5.5
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
              "pos52": 80.4,
              "drawdown": -10.2,
              "m1": 8.0,
              "m3": -5.7
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 95.7,
              "drawdown": -1.5,
              "m1": 7.3,
              "m3": 5.6
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
              "pos52": 84.9,
              "drawdown": -4.5,
              "m1": 5.5,
              "m3": 14.9
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 95.9,
              "drawdown": -1.1,
              "m1": 8.4,
              "m3": 22.2
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 78.6,
              "drawdown": -7.4,
              "m1": 1.3,
              "m3": 41.4
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 64.0,
              "drawdown": -14.9,
              "m1": -1.3,
              "m3": -0.3
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 59.4,
              "drawdown": -12.2,
              "m1": -4.5,
              "m3": 9.9
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 36.5,
              "m3": 43.3
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 41.6,
              "drawdown": -22.9,
              "m1": 7.9,
              "m3": 0.8
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
              "pos52": 84.9,
              "drawdown": -4.5,
              "m1": 5.5,
              "m3": 14.9
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 31.3,
              "m3": 18.2
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 30.9,
              "drawdown": -27.0,
              "m1": -1.6,
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
              "pos52": 87.8,
              "drawdown": -5.3,
              "m1": 8.4,
              "m3": 4.0
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 87.4,
              "drawdown": -9.6,
              "m1": 45.6,
              "m3": -4.1
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
              "pos52": 59.1,
              "drawdown": -36.2,
              "m1": 11.0,
              "m3": -28.9
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 87.4,
              "drawdown": -10.9,
              "m1": 15.8,
              "m3": -10.9
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 72.6,
              "drawdown": -21.2,
              "m1": 11.1,
              "m3": -16.1
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 18.0,
              "drawdown": -77.3,
              "m1": 13.4,
              "m3": -72.9
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 62.2,
              "drawdown": -24.8,
              "m1": 8.0,
              "m3": -21.0
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
              "pos52": 49.3,
              "drawdown": -48.7,
              "m1": 9.5,
              "m3": -39.6
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 47.8,
              "drawdown": -49.2,
              "m1": 13.0,
              "m3": -37.3
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 74.0,
              "drawdown": -24.9,
              "m1": 18.4,
              "m3": -24.9
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
              "pos52": 78.9,
              "drawdown": -17.1,
              "m1": 10.3,
              "m3": -11.6
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 53.8,
              "drawdown": -39.6,
              "m1": -0.1,
              "m3": -33.3
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
              "pos52": 32.8,
              "drawdown": -54.1,
              "m1": -8.9,
              "m3": -54.1
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
              "pos52": 57.4,
              "drawdown": -31.9,
              "m1": 0.9,
              "m3": -28.6
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 86.3,
              "drawdown": -11.8,
              "m1": 4.9,
              "m3": 7.8
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 10.2,
              "drawdown": -46.6,
              "m1": -7.7,
              "m3": -29.8
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 44.6,
              "drawdown": -42.8,
              "m1": -7.5,
              "m3": -26.0
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
              "pos52": 53.1,
              "drawdown": -35.2,
              "m1": 5.3,
              "m3": -26.6
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 56.3,
              "drawdown": -28.7,
              "m1": 9.1,
              "m3": -21.9
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 65.8,
              "drawdown": -24.3,
              "m1": 5.9,
              "m3": -9.1
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
              "pos52": 78.6,
              "drawdown": -7.4,
              "m1": 1.3,
              "m3": 41.4
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 64.0,
              "drawdown": -14.9,
              "m1": -1.3,
              "m3": -0.3
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 59.4,
              "drawdown": -12.2,
              "m1": -4.5,
              "m3": 9.9
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 12.6,
              "drawdown": -55.0,
              "m1": -3.6,
              "m3": -8.2
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
              "pos52": 35.6,
              "drawdown": -37.0,
              "m1": 2.4,
              "m3": -8.7
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 45.0,
              "drawdown": -34.8,
              "m1": -4.1,
              "m3": -24.6
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 89.0,
              "drawdown": -8.9,
              "m1": 18.7,
              "m3": 31.1
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 55.0,
              "drawdown": -29.3,
              "m1": 7.9,
              "m3": 31.0
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
