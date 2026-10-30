// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-10-30 01:24",
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
              "pos52": 95.5,
              "drawdown": -0.9,
              "m1": 1.1,
              "m3": 4.4
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 83.2,
              "drawdown": -4.5,
              "m1": -1.7,
              "m3": 6.3
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 82.4,
              "drawdown": -3.0,
              "m1": 2.3,
              "m3": 0.9
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 70.3,
              "drawdown": -7.6,
              "m1": 0.8,
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
              "pos52": 70.6,
              "drawdown": -15.1,
              "m1": -6.5,
              "m3": 5.3
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 85.3,
              "drawdown": -5.4,
              "m1": -1.8,
              "m3": 8.8
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
              "pos52": 68.0,
              "drawdown": -10.0,
              "m1": -5.2,
              "m3": 10.6
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 95.7,
              "drawdown": -1.3,
              "m1": 4.4,
              "m3": 3.2
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 93.5,
              "drawdown": -2.3,
              "m1": 4.3,
              "m3": 17.9
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 40.1,
              "drawdown": -19.2,
              "m1": -4.7,
              "m3": -2.6
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 65.5,
              "drawdown": -10.4,
              "m1": 3.2,
              "m3": 8.1
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 34.7,
              "drawdown": -21.2,
              "m1": -17.1,
              "m3": 13.7
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 55.3,
              "drawdown": -17.5,
              "m1": 14.6,
              "m3": 30.9
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
              "pos52": 68.0,
              "drawdown": -10.0,
              "m1": -5.2,
              "m3": 10.6
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 84.5,
              "drawdown": -10.9,
              "m1": -4.8,
              "m3": 19.2
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 31.7,
              "drawdown": -26.7,
              "m1": -0.9,
              "m3": -9.1
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
              "pos52": 78.3,
              "drawdown": -9.5,
              "m1": -3.8,
              "m3": 9.3
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 57.7,
              "drawdown": -32.2,
              "m1": -17.6,
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
              "pos52": 36.5,
              "drawdown": -52.2,
              "m1": -21.0,
              "m3": -10.0
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 77.3,
              "drawdown": -19.0,
              "m1": -7.7,
              "m3": 12.4
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 47.1,
              "drawdown": -39.2,
              "m1": -19.2,
              "m3": 0.1
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 6.3,
              "drawdown": -88.4,
              "m1": -44.9,
              "m3": -14.1
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 49.8,
              "drawdown": -33.0,
              "m1": -11.7,
              "m3": 3.4
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
              "pos52": 30.9,
              "drawdown": -63.8,
              "m1": -27.5,
              "m3": -11.6
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 33.5,
              "drawdown": -61.4,
              "m1": -20.6,
              "m3": -2.2
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 56.5,
              "drawdown": -39.8,
              "m1": -18.8,
              "m3": 9.8
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
              "pos52": 53.9,
              "drawdown": -36.1,
              "m1": -23.6,
              "m3": -18.0
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 42.5,
              "drawdown": -46.9,
              "m1": -12.6,
              "m3": -25.6
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
              "drawdown": -69.4,
              "m1": -36.4,
              "m3": -40.1
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
              "pos52": 37.2,
              "drawdown": -43.9,
              "m1": -18.0,
              "m3": -3.8
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 76.8,
              "drawdown": -19.4,
              "m1": -6.1,
              "m3": 31.8
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 12.1,
              "drawdown": -50.8,
              "m1": -13.4,
              "m3": -16.4
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 41.5,
              "drawdown": -42.1,
              "m1": 2.3,
              "m3": -2.4
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
              "pos52": 13.7,
              "drawdown": -57.8,
              "m1": -37.2,
              "m3": -44.3
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 4.9,
              "drawdown": -62.6,
              "m1": -49.8,
              "m3": -52.0
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 23.5,
              "drawdown": -54.3,
              "m1": -41.4,
              "m3": -20.4
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
              "pos52": 93.5,
              "drawdown": -2.3,
              "m1": 4.3,
              "m3": 17.9
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 40.1,
              "drawdown": -19.2,
              "m1": -4.7,
              "m3": -2.6
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 65.5,
              "drawdown": -10.4,
              "m1": 3.2,
              "m3": 8.1
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 20.7,
              "drawdown": -44.2,
              "m1": 5.3,
              "m3": 13.7
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
              "pos52": 11.6,
              "drawdown": -53.7,
              "m1": -25.6,
              "m3": -13.5
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 41.2,
              "drawdown": -35.4,
              "m1": -2.2,
              "m3": 6.8
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 80.3,
              "drawdown": -16.0,
              "m1": -8.4,
              "m3": 22.1
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 48.6,
              "drawdown": -31.1,
              "m1": -12.7,
              "m3": 29.1
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
