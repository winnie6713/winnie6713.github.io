// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-11-21 02:54",
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
              "pos52": 40.6,
              "drawdown": -11.5,
              "m1": -9.7,
              "m3": -9.4
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 25.4,
              "drawdown": -19.9,
              "m1": -13.6,
              "m3": -13.8
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 36.1,
              "drawdown": -11.0,
              "m1": -8.8,
              "m3": -9.5
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 32.9,
              "drawdown": -15.7,
              "m1": -7.3,
              "m3": -13.7
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
              "pos52": 21.8,
              "drawdown": -40.2,
              "m1": -23.6,
              "m3": -26.8
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 29.2,
              "drawdown": -26.2,
              "m1": -18.3,
              "m3": -17.1
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
              "pos52": 0.0,
              "drawdown": -47.5,
              "m1": -40.8,
              "m3": -39.7
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 87.6,
              "drawdown": -3.8,
              "m1": -1.6,
              "m3": 10.5
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 65.5,
              "drawdown": -12.7,
              "m1": -6.8,
              "m3": -0.4
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 0.0,
              "drawdown": -34.0,
              "m1": -18.2,
              "m3": -23.7
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 56.4,
              "drawdown": -13.1,
              "m1": -1.4,
              "m3": -5.8
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 14.3,
              "drawdown": -27.9,
              "m1": -13.6,
              "m3": 0.4
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 24.8,
              "drawdown": -29.4,
              "m1": -7.7,
              "m3": -0.9
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
              "pos52": 0.0,
              "drawdown": -47.5,
              "m1": -40.8,
              "m3": -39.7
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 50.9,
              "drawdown": -34.7,
              "m1": -16.4,
              "m3": -7.1
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 6.8,
              "drawdown": -36.6,
              "m1": -5.8,
              "m3": -15.0
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
              "pos52": 21.8,
              "drawdown": -34.4,
              "m1": -22.7,
              "m3": -22.1
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 15.8,
              "drawdown": -63.6,
              "m1": -40.0,
              "m3": -41.2
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
              "pos52": 24.8,
              "drawdown": -61.9,
              "m1": -9.0,
              "m3": -25.8
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 38.5,
              "drawdown": -51.0,
              "m1": -30.6,
              "m3": -34.7
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 34.4,
              "drawdown": -48.6,
              "m1": -14.6,
              "m3": -24.7
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 2.4,
              "drawdown": -92.1,
              "m1": -24.7,
              "m3": -60.7
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 10.6,
              "drawdown": -58.7,
              "m1": -27.0,
              "m3": -38.5
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
              "pos52": 13.5,
              "drawdown": -79.8,
              "m1": -45.9,
              "m3": -61.6
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 10.1,
              "drawdown": -83.0,
              "m1": -47.5,
              "m3": -61.8
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 26.2,
              "drawdown": -67.7,
              "m1": -45.2,
              "m3": -52.7
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
              "pos52": 25.8,
              "drawdown": -58.2,
              "m1": -28.8,
              "m3": -42.4
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 20.1,
              "drawdown": -65.0,
              "m1": -26.3,
              "m3": -40.0
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
              "drawdown": -74.0,
              "m1": -22.2,
              "m3": -55.1
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
              "pos52": 16.6,
              "drawdown": -56.1,
              "m1": -9.9,
              "m3": -32.0
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 23.3,
              "drawdown": -59.4,
              "m1": -38.8,
              "m3": -44.5
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 0.0,
              "drawdown": -61.8,
              "m1": -10.3,
              "m3": -32.3
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 12.5,
              "drawdown": -62.6,
              "m1": -27.4,
              "m3": -37.0
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
              "pos52": 0.0,
              "drawdown": -71.5,
              "m1": -33.4,
              "m3": -60.7
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 1.5,
              "drawdown": -73.0,
              "m1": -36.0,
              "m3": -64.6
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 0.0,
              "drawdown": -71.1,
              "m1": -48.1,
              "m3": -64.3
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
              "pos52": 65.5,
              "drawdown": -12.7,
              "m1": -6.8,
              "m3": -0.4
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 0.0,
              "drawdown": -34.0,
              "m1": -18.2,
              "m3": -23.7
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 56.4,
              "drawdown": -13.1,
              "m1": -1.4,
              "m3": -5.8
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 0.0,
              "drawdown": -58.9,
              "m1": -19.4,
              "m3": -28.7
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
              "drawdown": -71.4,
              "m1": -28.9,
              "m3": -54.2
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 7.3,
              "drawdown": -55.8,
              "m1": -15.0,
              "m3": -34.8
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 35.1,
              "drawdown": -52.7,
              "m1": -38.6,
              "m3": -35.7
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 3.8,
              "drawdown": -56.8,
              "m1": -35.8,
              "m3": -38.4
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
