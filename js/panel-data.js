// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-08-12 22:29",
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
              "pos52": 99.5,
              "drawdown": -0.1,
              "m1": 2.7,
              "m3": 4.9
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 88.5,
              "drawdown": -2.9,
              "m1": 0.6,
              "m3": 2.4
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 94.4,
              "drawdown": -1.0,
              "m1": 2.4,
              "m3": 8.3
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 2.8,
              "m3": 7.4
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
              "pos52": 78.1,
              "drawdown": -12.6,
              "m1": -2.6,
              "m3": 4.2
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 87.1,
              "drawdown": -4.6,
              "m1": 2.9,
              "m3": 7.9
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
              "pos52": 83.9,
              "drawdown": -4.8,
              "m1": 5.8,
              "m3": 1.6
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 67.6,
              "drawdown": -11.0,
              "m1": -3.9,
              "m3": 2.6
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 75.1,
              "drawdown": -8.6,
              "m1": 27.9,
              "m3": 21.0
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 71.1,
              "drawdown": -14.6,
              "m1": -4.4,
              "m3": -11.3
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 80.4,
              "drawdown": -5.9,
              "m1": 8.0,
              "m3": 0.5
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 20.8,
              "drawdown": -26.0,
              "m1": -12.4,
              "m3": -3.9
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 15.2,
              "drawdown": -33.1,
              "m1": -17.3,
              "m3": -24.4
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
              "pos52": 83.9,
              "drawdown": -4.8,
              "m1": 5.8,
              "m3": 1.6
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 77.2,
              "drawdown": -16.9,
              "m1": -11.9,
              "m3": 7.7
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 66.5,
              "drawdown": -13.5,
              "m1": 6.9,
              "m3": -0.6
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
              "pos52": 80.8,
              "drawdown": -10.1,
              "m1": 2.1,
              "m3": 8.3
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 66.3,
              "drawdown": -28.4,
              "m1": -6.3,
              "m3": -16.3
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
              "pos52": 47.1,
              "drawdown": -48.5,
              "m1": -18.5,
              "m3": -18.0
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 72.5,
              "drawdown": -24.9,
              "m1": -7.3,
              "m3": 18.9
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 63.9,
              "drawdown": -29.4,
              "m1": 0.4,
              "m3": -8.3
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 9.9,
              "drawdown": -85.0,
              "m1": -53.1,
              "m3": -71.0
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 51.1,
              "drawdown": -32.1,
              "m1": -10.5,
              "m3": 6.8
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
              "pos52": 44.7,
              "drawdown": -54.1,
              "m1": -35.2,
              "m3": -1.2
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 43.0,
              "drawdown": -53.7,
              "m1": -25.9,
              "m3": 14.0
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 56.7,
              "drawdown": -42.4,
              "m1": -23.5,
              "m3": -7.4
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
              "pos52": 77.1,
              "drawdown": -19.7,
              "m1": -0.0,
              "m3": 8.7
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 56.5,
              "drawdown": -39.1,
              "m1": -19.4,
              "m3": -7.1
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
              "pos52": 51.5,
              "drawdown": -42.7,
              "m1": -23.1,
              "m3": -30.7
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
              "pos52": 79.1,
              "drawdown": -16.7,
              "m1": 14.4,
              "m3": -4.9
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 87.1,
              "drawdown": -11.5,
              "m1": 14.4,
              "m3": -6.0
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 62.8,
              "drawdown": -23.4,
              "m1": 18.5,
              "m3": -8.7
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 63.9,
              "drawdown": -31.1,
              "m1": -3.3,
              "m3": -25.1
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
              "pos52": 60.1,
              "drawdown": -33.4,
              "m1": -22.2,
              "m3": -14.6
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 60.7,
              "drawdown": -29.9,
              "m1": -24.7,
              "m3": -2.8
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 58.9,
              "drawdown": -32.3,
              "m1": -12.2,
              "m3": -14.1
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
              "pos52": 75.1,
              "drawdown": -8.6,
              "m1": 27.9,
              "m3": 21.0
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 71.1,
              "drawdown": -14.6,
              "m1": -4.4,
              "m3": -11.3
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 80.4,
              "drawdown": -5.9,
              "m1": 8.0,
              "m3": 0.5
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 18.3,
              "drawdown": -52.8,
              "m1": 19.8,
              "m3": -17.7
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
              "pos52": 57.0,
              "drawdown": -24.7,
              "m1": 34.8,
              "m3": -0.0
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 65.5,
              "drawdown": -23.3,
              "m1": -5.0,
              "m3": -21.4
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 6.1,
              "m3": 103.1
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 44.8,
              "drawdown": -35.9,
              "m1": 36.0,
              "m3": 14.7
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
