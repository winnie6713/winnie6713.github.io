// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-07-09 23:01",
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
              "m1": 2.0,
              "m3": 11.5
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 88.6,
              "drawdown": -3.0,
              "m1": 1.1,
              "m3": 19.5
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 94.1,
              "drawdown": -1.1,
              "m1": 3.3,
              "m3": 9.8
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 96.3,
              "drawdown": -1.1,
              "m1": 4.9,
              "m3": 14.4
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
              "pos52": 84.1,
              "drawdown": -9.1,
              "m1": 1.6,
              "m3": 43.7
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 82.2,
              "drawdown": -6.4,
              "m1": 0.8,
              "m3": 31.0
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
              "pos52": 54.0,
              "drawdown": -14.0,
              "m1": -2.8,
              "m3": 11.4
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 100.0,
              "drawdown": 0.0,
              "m1": 4.9,
              "m3": 22.3
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 17.0,
              "drawdown": -28.6,
              "m1": -6.6,
              "m3": 2.9
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 80.7,
              "drawdown": -10.8,
              "m1": -1.2,
              "m3": 13.2
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 63.3,
              "drawdown": -10.2,
              "m1": 0.7,
              "m3": 11.7
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 40.5,
              "drawdown": -19.8,
              "m1": 8.0,
              "m3": 3.2
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 55.5,
              "drawdown": -17.0,
              "m1": -0.6,
              "m3": 18.4
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
              "pos52": 54.0,
              "drawdown": -14.0,
              "m1": -2.8,
              "m3": 11.4
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 92.2,
              "drawdown": -5.9,
              "m1": 11.5,
              "m3": 135.8
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 61.8,
              "drawdown": -16.6,
              "m1": 1.3,
              "m3": 14.6
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
              "pos52": 83.9,
              "drawdown": -8.5,
              "m1": 2.6,
              "m3": 19.7
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 76.7,
              "drawdown": -20.2,
              "m1": 2.1,
              "m3": 90.9
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
              "pos52": 72.6,
              "drawdown": -25.1,
              "m1": 6.7,
              "m3": 138.7
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 80.0,
              "drawdown": -18.3,
              "m1": 4.5,
              "m3": 143.8
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 72.1,
              "drawdown": -23.3,
              "m1": -8.1,
              "m3": 41.5
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 40.8,
              "drawdown": -55.9,
              "m1": -22.6,
              "m3": 244.7
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 69.1,
              "drawdown": -20.3,
              "m1": 6.3,
              "m3": 98.2
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
              "pos52": 71.0,
              "drawdown": -28.4,
              "m1": 10.4,
              "m3": 234.6
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 70.9,
              "drawdown": -27.4,
              "m1": 6.0,
              "m3": 190.4
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 79.2,
              "drawdown": -20.4,
              "m1": 13.2,
              "m3": 138.0
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
              "pos52": 78.6,
              "drawdown": -18.6,
              "m1": 1.6,
              "m3": 79.5
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 75.3,
              "drawdown": -22.5,
              "m1": 9.7,
              "m3": 70.6
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
              "pos52": 84.0,
              "drawdown": -14.3,
              "m1": 20.5,
              "m3": 108.8
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
              "pos52": 70.7,
              "drawdown": -23.3,
              "m1": -18.6,
              "m3": 16.1
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 72.2,
              "drawdown": -25.4,
              "m1": -12.2,
              "m3": -12.3
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 43.8,
              "drawdown": -35.3,
              "m1": -22.6,
              "m3": -20.9
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 70.0,
              "drawdown": -26.3,
              "m1": -0.9,
              "m3": -6.4
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
              "pos52": 84.9,
              "drawdown": -13.6,
              "m1": 1.3,
              "m3": 93.1
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 87.4,
              "drawdown": -10.6,
              "m1": -2.6,
              "m3": 66.8
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 71.9,
              "drawdown": -23.4,
              "m1": -14.2,
              "m3": 20.1
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
              "pos52": 17.0,
              "drawdown": -28.6,
              "m1": -6.6,
              "m3": 2.9
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 80.7,
              "drawdown": -10.8,
              "m1": -1.2,
              "m3": 13.2
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 63.3,
              "drawdown": -10.2,
              "m1": 0.7,
              "m3": 11.7
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 4.3,
              "drawdown": -55.7,
              "m1": -31.9,
              "m3": 0.7
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
              "pos52": 29.9,
              "drawdown": -39.7,
              "m1": -12.4,
              "m3": 0.9
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 79.6,
              "drawdown": -13.9,
              "m1": 7.8,
              "m3": 15.3
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 95.6,
              "drawdown": -3.4,
              "m1": 12.3,
              "m3": 143.5
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 19.2,
              "drawdown": -53.5,
              "m1": -35.8,
              "m3": 20.8
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
