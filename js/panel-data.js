// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-08-17 22:13",
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
              "pos52": 96.5,
              "drawdown": -0.7,
              "m1": 4.0,
              "m3": 4.8
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 91.8,
              "drawdown": -2.1,
              "m1": 5.0,
              "m3": 3.1
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 91.5,
              "drawdown": -1.6,
              "m1": 2.6,
              "m3": 8.2
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 98.7,
              "drawdown": -0.3,
              "m1": 3.4,
              "m3": 9.8
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
              "pos52": 80.5,
              "drawdown": -11.2,
              "m1": 6.7,
              "m3": 6.8
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 89.2,
              "drawdown": -3.9,
              "m1": 8.4,
              "m3": 8.1
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
              "pos52": 85.2,
              "drawdown": -4.4,
              "m1": 10.9,
              "m3": -0.0
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 70.4,
              "drawdown": -10.1,
              "m1": -8.4,
              "m3": 1.9
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 68.6,
              "drawdown": -10.8,
              "m1": 22.0,
              "m3": 14.1
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 71.3,
              "drawdown": -14.5,
              "m1": -0.8,
              "m3": -13.3
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 73.4,
              "drawdown": -8.0,
              "m1": 5.7,
              "m3": -1.1
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 17.3,
              "drawdown": -26.8,
              "m1": -11.9,
              "m3": -7.3
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 21.4,
              "drawdown": -30.7,
              "m1": -10.9,
              "m3": -19.6
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
              "pos52": 85.2,
              "drawdown": -4.4,
              "m1": 10.9,
              "m3": -0.0
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 82.6,
              "drawdown": -12.9,
              "m1": 2.1,
              "m3": 19.3
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 54.3,
              "drawdown": -18.4,
              "m1": 5.8,
              "m3": -7.6
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
              "pos52": 81.6,
              "drawdown": -9.8,
              "m1": 8.2,
              "m3": 6.8
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 68.1,
              "drawdown": -26.6,
              "m1": 8.9,
              "m3": -4.9
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
              "pos52": 52.4,
              "drawdown": -43.6,
              "m1": -21.0,
              "m3": -16.5
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 81.6,
              "drawdown": -16.6,
              "m1": 19.2,
              "m3": 39.6
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 70.3,
              "drawdown": -24.2,
              "m1": -1.8,
              "m3": -7.2
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 14.9,
              "drawdown": -80.3,
              "m1": -34.6,
              "m3": -64.8
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 61.6,
              "drawdown": -25.2,
              "m1": 14.5,
              "m3": 18.2
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
              "pos52": 56.0,
              "drawdown": -43.1,
              "m1": -15.4,
              "m3": 20.2
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 52.3,
              "drawdown": -44.9,
              "m1": 12.1,
              "m3": 15.7
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 76.1,
              "drawdown": -23.5,
              "m1": 31.9,
              "m3": 26.9
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
              "pos52": 89.5,
              "drawdown": -9.0,
              "m1": 26.3,
              "m3": 25.1
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 68.7,
              "drawdown": -28.2,
              "m1": 12.3,
              "m3": 11.2
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
              "pos52": 52.3,
              "drawdown": -42.0,
              "m1": 5.9,
              "m3": -25.3
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
              "pos52": 77.8,
              "drawdown": -17.7,
              "m1": 26.5,
              "m3": -8.2
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 91.0,
              "drawdown": -8.0,
              "m1": 32.2,
              "m3": -0.2
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 68.5,
              "drawdown": -19.8,
              "m1": 25.1,
              "m3": -17.1
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 66.4,
              "drawdown": -29.0,
              "m1": 18.9,
              "m3": -19.7
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
              "pos52": 66.0,
              "drawdown": -27.6,
              "m1": 2.2,
              "m3": -2.8
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 67.0,
              "drawdown": -23.6,
              "m1": -3.4,
              "m3": 14.3
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 75.4,
              "drawdown": -19.1,
              "m1": 35.6,
              "m3": 10.8
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
              "pos52": 68.6,
              "drawdown": -10.8,
              "m1": 22.0,
              "m3": 14.1
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 71.3,
              "drawdown": -14.5,
              "m1": -0.8,
              "m3": -13.3
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 73.4,
              "drawdown": -8.0,
              "m1": 5.7,
              "m3": -1.1
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 15.1,
              "drawdown": -54.8,
              "m1": 16.0,
              "m3": -23.7
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
              "pos52": 54.9,
              "drawdown": -25.9,
              "m1": 44.8,
              "m3": -1.2
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 67.1,
              "drawdown": -22.3,
              "m1": 1.0,
              "m3": -21.1
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 96.2,
              "drawdown": -3.0,
              "m1": 21.3,
              "m3": 98.6
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 46.5,
              "drawdown": -34.8,
              "m1": 58.3,
              "m3": 23.3
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
