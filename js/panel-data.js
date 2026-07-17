// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-07-17 22:37",
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
              "pos52": 90.0,
              "drawdown": -1.9,
              "m1": -0.7,
              "m3": 6.2
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 74.2,
              "drawdown": -6.7,
              "m1": -4.6,
              "m3": 8.7
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 90.8,
              "drawdown": -1.8,
              "m1": 0.2,
              "m3": 7.6
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 92.7,
              "drawdown": -2.1,
              "m1": 0.7,
              "m3": 9.2
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
              "pos52": 70.9,
              "drawdown": -16.8,
              "m1": -9.7,
              "m3": 22.4
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 68.3,
              "drawdown": -11.3,
              "m1": -5.7,
              "m3": 15.6
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
              "pos52": 53.7,
              "drawdown": -13.9,
              "m1": -2.2,
              "m3": 2.4
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 11.5,
              "m3": 26.8
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 22.1,
              "drawdown": -26.9,
              "m1": -0.0,
              "m3": -6.1
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 74.5,
              "drawdown": -13.8,
              "m1": -7.1,
              "m3": 3.3
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 63.6,
              "drawdown": -10.1,
              "m1": 0.5,
              "m3": -1.0
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 46.1,
              "drawdown": -18.0,
              "m1": 7.6,
              "m3": -4.5
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 41.8,
              "drawdown": -22.3,
              "m1": -5.9,
              "m3": -2.1
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
              "pos52": 53.7,
              "drawdown": -13.9,
              "m1": -2.2,
              "m3": 2.4
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 80.2,
              "drawdown": -14.7,
              "m1": -2.3,
              "m3": 78.2
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 46.2,
              "drawdown": -22.9,
              "m1": -1.4,
              "m3": -6.8
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
              "pos52": 68.7,
              "drawdown": -16.6,
              "m1": -6.4,
              "m3": 9.9
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 62.3,
              "drawdown": -32.6,
              "m1": -18.8,
              "m3": 38.7
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
              "pos52": 59.7,
              "drawdown": -36.9,
              "m1": -26.9,
              "m3": 67.0
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 67.1,
              "drawdown": -30.0,
              "m1": -16.8,
              "m3": 85.7
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 64.0,
              "drawdown": -29.7,
              "m1": -26.4,
              "m3": 23.5
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 25.9,
              "drawdown": -69.9,
              "m1": -53.4,
              "m3": 59.4
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 47.1,
              "drawdown": -34.7,
              "m1": -22.6,
              "m3": 50.5
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
              "pos52": 46.8,
              "drawdown": -52.1,
              "m1": -46.2,
              "m3": 60.8
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 46.0,
              "drawdown": -50.9,
              "m1": -38.7,
              "m3": 58.8
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 57.3,
              "drawdown": -42.0,
              "m1": -32.0,
              "m3": 47.3
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
              "pos52": 67.8,
              "drawdown": -28.0,
              "m1": -23.6,
              "m3": 48.2
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 60.4,
              "drawdown": -36.0,
              "m1": -29.9,
              "m3": 32.0
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
              "pos52": 49.1,
              "drawdown": -45.2,
              "m1": -30.7,
              "m3": 6.8
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
              "pos52": 56.1,
              "drawdown": -35.0,
              "m1": -27.5,
              "m3": -15.4
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 66.4,
              "drawdown": -30.4,
              "m1": -16.3,
              "m3": -17.8
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 42.9,
              "drawdown": -35.9,
              "m1": -18.6,
              "m3": -28.9
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 53.5,
              "drawdown": -40.3,
              "m1": -13.0,
              "m3": -24.4
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
              "pos52": 66.6,
              "drawdown": -29.1,
              "m1": -23.2,
              "m3": 25.7
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 73.8,
              "drawdown": -20.9,
              "m1": -13.4,
              "m3": 36.3
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 51.2,
              "drawdown": -40.4,
              "m1": -35.8,
              "m3": -10.3
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
              "pos52": 22.1,
              "drawdown": -26.9,
              "m1": -0.0,
              "m3": -6.1
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 74.5,
              "drawdown": -13.8,
              "m1": -7.1,
              "m3": 3.3
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 63.6,
              "drawdown": -10.1,
              "m1": 0.5,
              "m3": -1.0
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 1.1,
              "drawdown": -61.1,
              "m1": -32.6,
              "m3": -28.9
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
              "pos52": 10.3,
              "drawdown": -50.8,
              "m1": -37.4,
              "m3": -38.8
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 66.0,
              "drawdown": -23.0,
              "m1": -3.4,
              "m3": -1.5
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 80.4,
              "drawdown": -14.9,
              "m1": -1.9,
              "m3": 105.9
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 9.1,
              "drawdown": -60.2,
              "m1": -17.2,
              "m3": -14.9
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
