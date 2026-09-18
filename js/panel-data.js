// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-09-18 23:43",
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
              "pos52": 89.0,
              "drawdown": -2.1,
              "m1": -1.0,
              "m3": 2.0
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 87.3,
              "drawdown": -3.2,
              "m1": 0.7,
              "m3": -2.5
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 71.6,
              "drawdown": -4.9,
              "m1": -3.4,
              "m3": 0.2
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 73.9,
              "drawdown": -6.6,
              "m1": -5.6,
              "m3": -3.6
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
              "pos52": 72.9,
              "drawdown": -14.3,
              "m1": 2.2,
              "m3": -13.2
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 88.1,
              "drawdown": -4.2,
              "m1": 3.2,
              "m3": -0.8
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
              "pos52": 81.6,
              "drawdown": -5.5,
              "m1": 2.3,
              "m3": 5.6
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 96.2,
              "drawdown": -1.1,
              "m1": 6.1,
              "m3": 12.9
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 76.3,
              "drawdown": -8.2,
              "m1": 2.1,
              "m3": 30.4
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 68.4,
              "drawdown": -13.1,
              "m1": 1.5,
              "m3": -5.0
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 64.4,
              "drawdown": -10.7,
              "m1": -4.6,
              "m3": 3.8
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 56.1,
              "drawdown": -14.2,
              "m1": 21.9,
              "m3": 15.3
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 34.4,
              "drawdown": -25.6,
              "m1": 3.7,
              "m3": -9.0
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
              "pos52": 81.6,
              "drawdown": -5.5,
              "m1": 2.3,
              "m3": 5.6
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 95.0,
              "drawdown": -3.6,
              "m1": 20.0,
              "m3": 4.2
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 34.4,
              "drawdown": -25.6,
              "m1": -1.3,
              "m3": -12.9
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
              "pos52": 80.6,
              "drawdown": -8.7,
              "m1": 5.8,
              "m3": -5.7
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 71.2,
              "drawdown": -22.9,
              "m1": 17.0,
              "m3": -18.9
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
              "pos52": 58.9,
              "drawdown": -36.4,
              "m1": 9.8,
              "m3": -32.8
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 81.3,
              "drawdown": -16.3,
              "m1": 8.4,
              "m3": -10.4
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 64.2,
              "drawdown": -27.9,
              "m1": -3.7,
              "m3": -26.2
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 16.3,
              "drawdown": -79.0,
              "m1": 8.3,
              "m3": -75.5
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 60.1,
              "drawdown": -26.2,
              "m1": 8.1,
              "m3": -22.3
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
              "m1": 3.1,
              "m3": -49.8
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 49.1,
              "drawdown": -48.0,
              "m1": 13.2,
              "m3": -42.1
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 75.8,
              "drawdown": -23.3,
              "m1": 14.2,
              "m3": -18.0
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
              "pos52": 73.4,
              "drawdown": -21.4,
              "m1": 3.2,
              "m3": -19.7
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 52.4,
              "drawdown": -40.8,
              "m1": -4.5,
              "m3": -40.8
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
              "pos52": 38.3,
              "drawdown": -52.0,
              "m1": -8.5,
              "m3": -41.8
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
              "pos52": 65.8,
              "drawdown": -25.7,
              "m1": 10.4,
              "m3": -18.5
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 86.5,
              "drawdown": -11.6,
              "m1": 12.5,
              "m3": 9.5
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 7.7,
              "drawdown": -47.9,
              "m1": -14.5,
              "m3": -32.3
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 43.2,
              "drawdown": -44.4,
              "m1": -12.7,
              "m3": -18.5
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
              "pos52": 56.0,
              "drawdown": -33.0,
              "m1": 2.5,
              "m3": -29.3
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 58.8,
              "drawdown": -27.1,
              "m1": 7.5,
              "m3": -19.4
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 72.5,
              "drawdown": -19.5,
              "m1": 3.2,
              "m3": -8.3
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
              "pos52": 76.3,
              "drawdown": -8.2,
              "m1": 2.1,
              "m3": 30.4
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 68.4,
              "drawdown": -13.1,
              "m1": 1.5,
              "m3": -5.0
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 64.4,
              "drawdown": -10.7,
              "m1": -4.6,
              "m3": 3.8
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 15.6,
              "drawdown": -54.5,
              "m1": 2.6,
              "m3": -19.6
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
              "pos52": 25.0,
              "drawdown": -43.1,
              "m1": -10.5,
              "m3": -31.0
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 46.7,
              "drawdown": -33.7,
              "m1": -4.4,
              "m3": -25.1
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 95.7,
              "drawdown": -3.5,
              "m1": 29.8,
              "m3": 38.9
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 48.7,
              "drawdown": -33.4,
              "m1": 6.9,
              "m3": 27.5
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
