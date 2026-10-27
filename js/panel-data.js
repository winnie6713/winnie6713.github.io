// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-10-27 00:59",
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
              "pos52": 87.3,
              "drawdown": -2.5,
              "m1": -0.9,
              "m3": 3.1
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 72.7,
              "drawdown": -7.3,
              "m1": -5.0,
              "m3": 3.4
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 78.9,
              "drawdown": -3.6,
              "m1": 1.7,
              "m3": 0.4
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 63.2,
              "drawdown": -9.4,
              "m1": -2.1,
              "m3": -5.6
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
              "pos52": 58.9,
              "drawdown": -21.2,
              "m1": -12.2,
              "m3": -3.9
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 74.9,
              "drawdown": -9.3,
              "m1": -5.9,
              "m3": 5.2
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
              "pos52": 62.0,
              "drawdown": -11.8,
              "m1": -6.1,
              "m3": 7.5
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 99.5,
              "drawdown": -0.1,
              "m1": 3.5,
              "m3": 3.3
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 90.1,
              "drawdown": -3.5,
              "m1": 5.3,
              "m3": 35.1
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 39.5,
              "drawdown": -20.4,
              "m1": -6.5,
              "m3": -1.9
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 57.7,
              "drawdown": -12.7,
              "m1": -0.6,
              "m3": 7.2
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 46.6,
              "drawdown": -17.4,
              "m1": -17.4,
              "m3": 8.3
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 38.6,
              "drawdown": -24.0,
              "m1": -1.5,
              "m3": 20.4
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
              "pos52": 62.0,
              "drawdown": -11.8,
              "m1": -6.1,
              "m3": 7.5
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 71.1,
              "drawdown": -20.4,
              "m1": -17.9,
              "m3": 4.4
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 15.6,
              "drawdown": -33.0,
              "m1": -8.2,
              "m3": -15.9
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
              "pos52": 68.5,
              "drawdown": -13.9,
              "m1": -7.2,
              "m3": 5.1
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 49.7,
              "drawdown": -38.3,
              "m1": -31.7,
              "m3": -5.1
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
              "pos52": 35.0,
              "drawdown": -53.5,
              "m1": -26.2,
              "m3": -29.2
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 66.8,
              "drawdown": -27.7,
              "m1": -18.8,
              "m3": -2.5
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 48.0,
              "drawdown": -38.5,
              "m1": -19.4,
              "m3": -17.5
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 4.6,
              "drawdown": -90.1,
              "m1": -56.1,
              "m3": -64.6
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 36.4,
              "drawdown": -41.7,
              "m1": -22.5,
              "m3": -10.2
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
              "pos52": 30.2,
              "drawdown": -64.4,
              "m1": -30.6,
              "m3": -37.5
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 29.2,
              "drawdown": -65.3,
              "m1": -31.9,
              "m3": -6.2
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 49.2,
              "drawdown": -47.0,
              "m1": -29.4,
              "m3": -3.1
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
              "pos52": 47.0,
              "drawdown": -42.3,
              "m1": -30.4,
              "m3": -22.8
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 35.2,
              "drawdown": -53.9,
              "m1": -23.7,
              "m3": -31.0
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
              "drawdown": -67.8,
              "m1": -30.5,
              "m3": -44.8
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
              "pos52": 27.0,
              "drawdown": -51.0,
              "m1": -28.0,
              "m3": -22.9
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 60.1,
              "drawdown": -33.3,
              "m1": -18.6,
              "m3": 6.2
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 0.0,
              "drawdown": -57.8,
              "m1": -20.9,
              "m3": -33.1
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 31.9,
              "drawdown": -48.9,
              "m1": -10.6,
              "m3": -15.1
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
              "pos52": 15.0,
              "drawdown": -56.9,
              "m1": -33.5,
              "m3": -47.6
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 10.7,
              "drawdown": -58.8,
              "m1": -40.7,
              "m3": -54.4
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 37.6,
              "drawdown": -44.3,
              "m1": -29.1,
              "m3": -14.6
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
              "pos52": 90.1,
              "drawdown": -3.5,
              "m1": 5.3,
              "m3": 35.1
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 39.5,
              "drawdown": -20.4,
              "m1": -6.5,
              "m3": -1.9
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 57.7,
              "drawdown": -12.7,
              "m1": -0.6,
              "m3": 7.2
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 7.1,
              "drawdown": -54.6,
              "m1": -9.3,
              "m3": 5.6
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
              "pos52": 0.0,
              "drawdown": -61.2,
              "m1": -39.8,
              "m3": -23.4
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 19.7,
              "drawdown": -48.3,
              "m1": -20.8,
              "m3": -32.4
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 72.5,
              "drawdown": -22.3,
              "m1": -14.7,
              "m3": 7.1
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 38.6,
              "drawdown": -37.5,
              "m1": -20.6,
              "m3": 10.5
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
