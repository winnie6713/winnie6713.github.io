// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-10-02 01:11",
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
              "drawdown": -1.7,
              "m1": -0.3,
              "m3": 2.5
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 96.0,
              "drawdown": -1.0,
              "m1": 3.3,
              "m3": 2.1
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 65.0,
              "drawdown": -6.0,
              "m1": -4.1,
              "m3": -2.3
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 65.9,
              "drawdown": -8.7,
              "m1": -5.2,
              "m3": -6.9
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
              "pos52": 82.6,
              "drawdown": -9.0,
              "m1": 9.4,
              "m3": -1.8
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 97.2,
              "drawdown": -1.0,
              "m1": 5.1,
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
              "pos52": 90.3,
              "drawdown": -2.9,
              "m1": 3.6,
              "m3": 15.7
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 91.7,
              "drawdown": -2.4,
              "m1": 5.1,
              "m3": 13.2
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 86.7,
              "drawdown": -4.6,
              "m1": 1.1,
              "m3": 33.7
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 65.1,
              "drawdown": -14.4,
              "m1": 1.5,
              "m3": -4.7
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 59.1,
              "drawdown": -12.3,
              "m1": -4.1,
              "m3": 3.1
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 79.3,
              "drawdown": -6.7,
              "m1": 26.8,
              "m3": 18.4
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 29.5,
              "drawdown": -27.6,
              "m1": -3.6,
              "m3": -16.6
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
              "pos52": 90.3,
              "drawdown": -2.9,
              "m1": 3.6,
              "m3": 15.7
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 96.0,
              "drawdown": -3.0,
              "m1": 30.0,
              "m3": 13.1
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 31.3,
              "drawdown": -26.8,
              "m1": -5.0,
              "m3": -4.7
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
              "pos52": 90.2,
              "drawdown": -4.2,
              "m1": 10.1,
              "m3": 3.0
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 80.7,
              "drawdown": -14.7,
              "m1": 34.3,
              "m3": -5.3
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
              "pos52": 57.2,
              "drawdown": -37.0,
              "m1": 8.6,
              "m3": -28.1
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 85.6,
              "drawdown": -12.2,
              "m1": 11.1,
              "m3": 3.2
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 68.1,
              "drawdown": -24.1,
              "m1": 5.4,
              "m3": -12.6
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 16.7,
              "drawdown": -78.6,
              "m1": 8.1,
              "m3": -65.7
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 61.6,
              "drawdown": -25.2,
              "m1": 6.1,
              "m3": -8.4
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
              "pos52": 49.7,
              "drawdown": -47.8,
              "m1": 13.5,
              "m3": -36.8
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 48.1,
              "drawdown": -48.9,
              "m1": 15.7,
              "m3": -20.2
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 73.2,
              "drawdown": -25.5,
              "m1": 11.1,
              "m3": -14.4
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
              "pos52": 80.7,
              "drawdown": -15.6,
              "m1": 11.4,
              "m3": 0.9
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 53.9,
              "drawdown": -39.1,
              "m1": 0.9,
              "m3": -24.0
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
              "pos52": 24.2,
              "drawdown": -58.2,
              "m1": -20.9,
              "m3": -49.6
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
              "pos52": 56.2,
              "drawdown": -32.6,
              "m1": 3.6,
              "m3": -21.9
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 90.9,
              "drawdown": -7.8,
              "m1": 6.2,
              "m3": 21.2
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 16.2,
              "drawdown": -43.2,
              "m1": 2.7,
              "m3": -22.5
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 42.1,
              "drawdown": -43.9,
              "m1": -8.1,
              "m3": -23.9
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
              "pos52": 44.6,
              "drawdown": -41.5,
              "m1": -5.1,
              "m3": -29.3
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 44.8,
              "drawdown": -36.3,
              "m1": -3.2,
              "m3": -23.6
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 63.0,
              "drawdown": -26.3,
              "m1": -0.7,
              "m3": 4.2
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
              "pos52": 86.7,
              "drawdown": -4.6,
              "m1": 1.1,
              "m3": 33.7
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 65.1,
              "drawdown": -14.4,
              "m1": 1.5,
              "m3": -4.7
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 59.1,
              "drawdown": -12.3,
              "m1": -4.1,
              "m3": 3.1
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 11.4,
              "drawdown": -55.7,
              "m1": -7.9,
              "m3": -3.3
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
              "pos52": 32.0,
              "drawdown": -39.1,
              "m1": 2.6,
              "m3": 1.7
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 40.5,
              "drawdown": -35.8,
              "m1": -6.7,
              "m3": -22.5
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 89.4,
              "drawdown": -8.6,
              "m1": 18.0,
              "m3": 26.7
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 53.8,
              "drawdown": -30.0,
              "m1": 10.2,
              "m3": 48.5
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
