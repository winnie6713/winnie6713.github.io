// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-10-28 00:48",
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
              "pos52": 90.9,
              "drawdown": -1.8,
              "m1": -0.8,
              "m3": 3.6
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 76.6,
              "drawdown": -6.2,
              "m1": -4.3,
              "m3": 5.5
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 80.6,
              "drawdown": -3.3,
              "m1": 1.1,
              "m3": -0.4
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 64.8,
              "drawdown": -9.0,
              "m1": -1.8,
              "m3": -5.3
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
              "pos52": 63.1,
              "drawdown": -19.0,
              "m1": -10.7,
              "m3": 2.3
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 79.0,
              "drawdown": -7.8,
              "m1": -5.1,
              "m3": 9.0
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
              "pos52": 68.8,
              "drawdown": -9.7,
              "m1": -4.0,
              "m3": 9.8
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 95.8,
              "drawdown": -1.2,
              "m1": 0.8,
              "m3": 1.2
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 94.3,
              "drawdown": -2.0,
              "m1": 3.2,
              "m3": 35.7
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 37.0,
              "drawdown": -21.2,
              "m1": -7.9,
              "m3": -5.0
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 59.0,
              "drawdown": -12.3,
              "m1": -0.2,
              "m3": 7.9
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 41.8,
              "drawdown": -18.9,
              "m1": -16.1,
              "m3": 6.3
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 48.7,
              "drawdown": -20.1,
              "m1": 5.2,
              "m3": 27.4
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
              "pos52": 68.8,
              "drawdown": -9.7,
              "m1": -4.0,
              "m3": 9.8
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 74.2,
              "drawdown": -18.2,
              "m1": -15.8,
              "m3": 16.9
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 19.6,
              "drawdown": -31.4,
              "m1": -6.7,
              "m3": -13.4
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
              "pos52": 71.2,
              "drawdown": -12.6,
              "m1": -5.8,
              "m3": 8.5
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 53.0,
              "drawdown": -35.8,
              "m1": -26.4,
              "m3": 4.8
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
              "pos52": 36.0,
              "drawdown": -52.7,
              "m1": -25.8,
              "m3": -21.5
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 69.4,
              "drawdown": -25.5,
              "m1": -16.5,
              "m3": 10.2
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 52.2,
              "drawdown": -35.4,
              "m1": -18.0,
              "m3": -6.2
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 4.7,
              "drawdown": -89.9,
              "m1": -56.9,
              "m3": -65.3
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 38.8,
              "drawdown": -40.1,
              "m1": -21.9,
              "m3": 1.2
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
              "pos52": 31.8,
              "drawdown": -62.9,
              "m1": -24.4,
              "m3": -28.0
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 29.8,
              "drawdown": -64.8,
              "m1": -26.9,
              "m3": 5.6
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 50.0,
              "drawdown": -46.2,
              "m1": -29.4,
              "m3": 14.5
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
              "pos52": 48.5,
              "drawdown": -41.0,
              "m1": -29.7,
              "m3": -13.7
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 37.3,
              "drawdown": -52.3,
              "m1": -22.0,
              "m3": -23.1
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
              "drawdown": -68.5,
              "m1": -34.3,
              "m3": -41.3
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
              "pos52": 31.1,
              "drawdown": -48.1,
              "m1": -25.1,
              "m3": -9.0
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 66.6,
              "drawdown": -27.8,
              "m1": -13.1,
              "m3": 25.5
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 2.4,
              "drawdown": -56.4,
              "m1": -22.1,
              "m3": -27.7
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 35.4,
              "drawdown": -46.4,
              "m1": -5.9,
              "m3": -4.2
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
              "pos52": 13.1,
              "drawdown": -58.2,
              "m1": -37.6,
              "m3": -45.5
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 7.1,
              "drawdown": -61.1,
              "m1": -46.6,
              "m3": -53.3
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 34.3,
              "drawdown": -46.7,
              "m1": -33.7,
              "m3": -13.2
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
              "pos52": 94.3,
              "drawdown": -2.0,
              "m1": 3.2,
              "m3": 35.7
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 37.0,
              "drawdown": -21.2,
              "m1": -7.9,
              "m3": -5.0
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 59.0,
              "drawdown": -12.3,
              "m1": -0.2,
              "m3": 7.9
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 7.1,
              "drawdown": -54.5,
              "m1": -7.7,
              "m3": 5.5
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
              "pos52": 1.1,
              "drawdown": -60.6,
              "m1": -37.0,
              "m3": -18.0
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 22.1,
              "drawdown": -46.9,
              "m1": -21.1,
              "m3": -25.9
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 74.7,
              "drawdown": -20.5,
              "m1": -16.9,
              "m3": 19.3
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 37.8,
              "drawdown": -38.0,
              "m1": -24.4,
              "m3": 14.9
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
