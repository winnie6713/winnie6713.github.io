// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-11-11 01:34",
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
              "pos52": 80.6,
              "drawdown": -3.7,
              "m1": -3.6,
              "m3": -2.7
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 58.1,
              "drawdown": -11.2,
              "m1": -9.6,
              "m3": -6.7
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 79.3,
              "drawdown": -3.6,
              "m1": 0.8,
              "m3": -2.5
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 69.4,
              "drawdown": -7.8,
              "m1": 1.0,
              "m3": -7.1
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
              "pos52": 46.3,
              "drawdown": -27.7,
              "m1": -18.2,
              "m3": -17.3
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 55.8,
              "drawdown": -16.4,
              "m1": -14.0,
              "m3": -10.5
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
              "pos52": 5.5,
              "drawdown": -29.4,
              "m1": -25.4,
              "m3": -24.5
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 97.9,
              "drawdown": -0.6,
              "m1": 2.2,
              "m3": 15.3
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 88.9,
              "drawdown": -4.1,
              "m1": -1.5,
              "m3": 8.5
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 11.0,
              "drawdown": -28.5,
              "m1": -18.5,
              "m3": -16.3
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 84.6,
              "drawdown": -4.6,
              "m1": 4.4,
              "m3": 1.3
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 46.1,
              "drawdown": -17.5,
              "m1": -10.8,
              "m3": 7.1
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 42.5,
              "drawdown": -22.5,
              "m1": 0.5,
              "m3": 16.0
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
              "pos52": 5.5,
              "drawdown": -29.4,
              "m1": -25.4,
              "m3": -24.5
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 70.7,
              "drawdown": -20.7,
              "m1": -13.3,
              "m3": 6.7
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 21.5,
              "drawdown": -30.8,
              "m1": -6.4,
              "m3": -20.1
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
              "pos52": 58.2,
              "drawdown": -18.4,
              "m1": -10.8,
              "m3": -7.4
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 22.8,
              "drawdown": -58.8,
              "m1": -42.6,
              "m3": -42.4
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
              "pos52": 29.3,
              "drawdown": -58.1,
              "m1": -15.3,
              "m3": -14.0
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 51.8,
              "drawdown": -40.2,
              "m1": -26.7,
              "m3": -20.4
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 40.6,
              "drawdown": -44.0,
              "m1": -14.1,
              "m3": -12.2
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 1.6,
              "drawdown": -92.9,
              "m1": -62.2,
              "m3": -53.6
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 26.5,
              "drawdown": -48.2,
              "m1": -26.9,
              "m3": -17.9
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
              "pos52": 19.5,
              "drawdown": -74.3,
              "m1": -46.9,
              "m3": -42.7
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 18.2,
              "drawdown": -75.5,
              "m1": -47.2,
              "m3": -43.2
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 32.3,
              "drawdown": -62.0,
              "m1": -44.0,
              "m3": -30.3
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
              "pos52": 31.0,
              "drawdown": -54.1,
              "m1": -33.4,
              "m3": -42.8
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 24.8,
              "drawdown": -61.2,
              "m1": -25.3,
              "m3": -36.3
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
              "pos52": 3.6,
              "drawdown": -69.4,
              "m1": -18.7,
              "m3": -39.5
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
              "pos52": 27.1,
              "drawdown": -49.7,
              "m1": -25.5,
              "m3": -39.6
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 40.7,
              "drawdown": -47.4,
              "m1": -46.0,
              "m3": -27.3
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 12.2,
              "drawdown": -53.3,
              "m1": -23.6,
              "m3": -39.1
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 21.2,
              "drawdown": -56.6,
              "m1": -32.8,
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
              "pos52": 2.5,
              "drawdown": -65.9,
              "m1": -35.0,
              "m3": -50.2
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 2.7,
              "drawdown": -69.9,
              "m1": -47.1,
              "m3": -56.7
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 9.5,
              "drawdown": -64.3,
              "m1": -44.9,
              "m3": -41.6
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
              "pos52": 88.9,
              "drawdown": -4.1,
              "m1": -1.5,
              "m3": 8.5
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 11.0,
              "drawdown": -28.5,
              "m1": -18.5,
              "m3": -16.3
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 84.6,
              "drawdown": -4.6,
              "m1": 4.4,
              "m3": 1.3
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 2.6,
              "drawdown": -52.1,
              "m1": -14.1,
              "m3": -22.7
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
              "pos52": 5.6,
              "drawdown": -64.5,
              "m1": -40.3,
              "m3": -45.8
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 22.4,
              "drawdown": -46.7,
              "m1": -17.4,
              "m3": -28.8
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 49.4,
              "drawdown": -41.1,
              "m1": -40.8,
              "m3": -21.4
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 24.5,
              "drawdown": -44.6,
              "m1": -30.5,
              "m3": -26.1
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
