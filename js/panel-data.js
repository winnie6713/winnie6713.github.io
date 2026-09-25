// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-09-25 00:07",
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
              "pos52": 94.5,
              "drawdown": -1.0,
              "m1": 0.8,
              "m3": 5.0
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 96.7,
              "drawdown": -0.8,
              "m1": 5.0,
              "m3": 4.4
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 71.1,
              "drawdown": -5.0,
              "m1": -3.1,
              "m3": -0.1
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 71.1,
              "drawdown": -7.4,
              "m1": -5.1,
              "m3": -4.7
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
              "pos52": 80.7,
              "drawdown": -10.1,
              "m1": 10.0,
              "m3": -2.8
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 96.6,
              "drawdown": -1.2,
              "m1": 6.7,
              "m3": 6.2
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
              "pos52": 86.2,
              "drawdown": -4.1,
              "m1": 8.3,
              "m3": 13.4
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 97.1,
              "drawdown": -0.8,
              "m1": 8.6,
              "m3": 15.1
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 80.0,
              "drawdown": -6.9,
              "m1": 2.7,
              "m3": 37.2
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 61.3,
              "drawdown": -16.0,
              "m1": -2.9,
              "m3": -2.1
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 59.2,
              "drawdown": -12.2,
              "m1": -4.9,
              "m3": 6.4
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 97.8,
              "drawdown": -0.7,
              "m1": 33.2,
              "m3": 33.5
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 42.7,
              "drawdown": -22.4,
              "m1": 8.9,
              "m3": 1.2
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
              "pos52": 86.2,
              "drawdown": -4.1,
              "m1": 8.3,
              "m3": 13.4
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 98.0,
              "drawdown": -1.5,
              "m1": 34.6,
              "m3": 18.3
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 33.4,
              "drawdown": -26.0,
              "m1": -0.9,
              "m3": -6.9
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
              "pos52": 85.6,
              "drawdown": -6.2,
              "m1": 9.2,
              "m3": 1.6
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 82.9,
              "drawdown": -13.0,
              "m1": 40.5,
              "m3": -6.9
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
              "pos52": 86.6,
              "drawdown": -11.7,
              "m1": 17.7,
              "m3": 2.2
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
              "pos52": 18.8,
              "drawdown": -76.6,
              "m1": 17.7,
              "m3": -76.0
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 64.5,
              "drawdown": -23.3,
              "m1": 14.0,
              "m3": -11.5
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
              "pos52": 48.1,
              "drawdown": -49.8,
              "m1": 0.5,
              "m3": -49.8
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 45.8,
              "drawdown": -51.0,
              "m1": 7.6,
              "m3": -46.7
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 76.9,
              "drawdown": -22.2,
              "m1": 21.7,
              "m3": -5.1
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
              "pos52": 80.8,
              "drawdown": -15.5,
              "m1": 8.7,
              "m3": -11.0
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 57.4,
              "drawdown": -36.5,
              "m1": 8.8,
              "m3": -26.4
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
              "pos52": 60.6,
              "drawdown": -29.6,
              "m1": 9.1,
              "m3": -23.4
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 87.2,
              "drawdown": -11.0,
              "m1": 12.9,
              "m3": 11.2
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 10.8,
              "drawdown": -46.3,
              "m1": -8.2,
              "m3": -31.3
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 44.7,
              "drawdown": -43.2,
              "m1": -10.1,
              "m3": -22.6
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
              "pos52": 80.0,
              "drawdown": -6.9,
              "m1": 2.7,
              "m3": 37.2
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 61.3,
              "drawdown": -16.0,
              "m1": -2.9,
              "m3": -2.1
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 59.2,
              "drawdown": -12.2,
              "m1": -4.9,
              "m3": 6.4
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 15.2,
              "drawdown": -53.4,
              "m1": 1.5,
              "m3": -7.9
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
              "pos52": 31.7,
              "drawdown": -39.3,
              "m1": 0.8,
              "m3": -13.9
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 46.4,
              "drawdown": -33.8,
              "m1": -5.0,
              "m3": -21.8
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 91.9,
              "drawdown": -6.6,
              "m1": 26.9,
              "m3": 26.9
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 54.8,
              "drawdown": -29.4,
              "m1": 17.8,
              "m3": 27.7
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
