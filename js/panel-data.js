// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-07-14 22:45",
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
              "pos52": 95.9,
              "drawdown": -0.8,
              "m1": 2.2,
              "m3": 9.9
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 86.8,
              "drawdown": -3.4,
              "m1": 0.5,
              "m3": 16.7
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 94.6,
              "drawdown": -1.0,
              "m1": 3.3,
              "m3": 9.2
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 93.2,
              "drawdown": -2.0,
              "m1": 1.7,
              "m3": 11.4
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
              "pos52": 82.2,
              "drawdown": -10.3,
              "m1": -1.5,
              "m3": 35.4
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 79.7,
              "drawdown": -7.3,
              "m1": 0.3,
              "m3": 26.3
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
              "pos52": 66.4,
              "drawdown": -10.1,
              "m1": 3.4,
              "m3": 12.0
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 97.9,
              "drawdown": -0.8,
              "m1": 6.5,
              "m3": 21.6
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 17.3,
              "drawdown": -28.5,
              "m1": -1.4,
              "m3": 0.4
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 80.6,
              "drawdown": -10.7,
              "m1": 0.5,
              "m3": 12.0
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 63.9,
              "drawdown": -10.0,
              "m1": 2.5,
              "m3": 3.2
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 51.8,
              "drawdown": -16.0,
              "m1": 16.4,
              "m3": 4.3
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 50.0,
              "drawdown": -19.1,
              "m1": -0.7,
              "m3": 12.4
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
              "pos52": 66.4,
              "drawdown": -10.1,
              "m1": 3.4,
              "m3": 12.0
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 92.4,
              "drawdown": -5.6,
              "m1": 12.2,
              "m3": 122.1
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 55.1,
              "drawdown": -19.1,
              "m1": 1.1,
              "m3": 2.6
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
              "pos52": 77.4,
              "drawdown": -12.0,
              "m1": -0.2,
              "m3": 14.0
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 72.7,
              "drawdown": -23.5,
              "m1": -7.9,
              "m3": 65.3
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
              "pos52": 62.4,
              "drawdown": -34.5,
              "m1": -16.4,
              "m3": 86.3
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 79.2,
              "drawdown": -19.0,
              "m1": -1.3,
              "m3": 130.5
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 66.9,
              "drawdown": -27.4,
              "m1": -22.0,
              "m3": 27.7
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 27.9,
              "drawdown": -68.1,
              "m1": -39.1,
              "m3": 108.4
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 63.2,
              "drawdown": -24.1,
              "m1": -6.0,
              "m3": 82.5
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
              "pos52": 62.8,
              "drawdown": -36.4,
              "m1": -24.0,
              "m3": 129.3
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 60.1,
              "drawdown": -37.6,
              "m1": -14.3,
              "m3": 113.7
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 74.8,
              "drawdown": -24.7,
              "m1": -6.6,
              "m3": 84.5
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
              "pos52": 77.3,
              "drawdown": -19.7,
              "m1": 1.2,
              "m3": 71.2
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 73.1,
              "drawdown": -24.5,
              "m1": 6.4,
              "m3": 60.9
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
              "pos52": 71.2,
              "drawdown": -25.5,
              "m1": 4.6,
              "m3": 58.1
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
              "pos52": 65.9,
              "drawdown": -27.2,
              "m1": -14.5,
              "m3": 0.9
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 75.0,
              "drawdown": -22.6,
              "m1": -8.4,
              "m3": -6.5
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 43.8,
              "drawdown": -35.3,
              "m1": -17.1,
              "m3": -30.0
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 66.9,
              "drawdown": -28.7,
              "m1": 0.4,
              "m3": -6.9
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
              "pos52": 83.9,
              "drawdown": -14.3,
              "m1": 3.1,
              "m3": 61.4
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 91.9,
              "drawdown": -6.8,
              "m1": 12.3,
              "m3": 52.7
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 72.5,
              "drawdown": -22.8,
              "m1": -2.6,
              "m3": 6.9
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
              "pos52": 17.3,
              "drawdown": -28.5,
              "m1": -1.4,
              "m3": 0.4
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 80.6,
              "drawdown": -10.7,
              "m1": 0.5,
              "m3": 12.0
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 63.9,
              "drawdown": -10.0,
              "m1": 2.5,
              "m3": 3.2
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 0.0,
              "drawdown": -60.6,
              "m1": -30.3,
              "m3": -17.5
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
              "pos52": 18.3,
              "drawdown": -46.3,
              "m1": -16.5,
              "m3": -27.5
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 71.5,
              "drawdown": -19.3,
              "m1": 1.9,
              "m3": 1.2
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 97.6,
              "drawdown": -1.8,
              "m1": 16.9,
              "m3": 141.8
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 17.7,
              "drawdown": -54.5,
              "m1": -13.5,
              "m3": 6.5
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
