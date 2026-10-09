// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====
// 要改抓取哪些标的，编辑 scripts/tickers.json
window.PANEL = {
  "updated": "2026-10-09 01:32",
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
              "pos52": 96.6,
              "drawdown": -0.7,
              "m1": 1.8,
              "m3": 2.8
            },
            {
              "name": "纳指100 ETF",
              "code": "QQQ",
              "market": "美股",
              "pos52": 94.0,
              "drawdown": -1.6,
              "m1": 4.5,
              "m3": 3.1
            },
            {
              "name": "道指 ETF",
              "code": "DIA",
              "market": "美股",
              "pos52": 68.3,
              "drawdown": -5.4,
              "m1": -2.1,
              "m3": -2.4
            },
            {
              "name": "罗素2000 ETF",
              "code": "IWM",
              "market": "美股",
              "pos52": 65.5,
              "drawdown": -8.8,
              "m1": -4.2,
              "m3": -6.0
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
              "pos52": 82.1,
              "drawdown": -9.2,
              "m1": 5.7,
              "m3": -0.6
            },
            {
              "name": "科技 ETF",
              "code": "XLK",
              "market": "美股",
              "pos52": 94.4,
              "drawdown": -2.1,
              "m1": 5.4,
              "m3": 6.6
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
              "pos52": 88.2,
              "drawdown": -3.7,
              "m1": 3.2,
              "m3": 9.4
            },
            {
              "name": "苹果",
              "code": "AAPL",
              "market": "美股",
              "pos52": 99.3,
              "drawdown": -0.2,
              "m1": 8.0,
              "m3": 8.1
            },
            {
              "name": "微软",
              "code": "MSFT",
              "market": "美股",
              "pos52": 91.9,
              "drawdown": -2.8,
              "m1": 6.3,
              "m3": 36.0
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 67.6,
              "drawdown": -13.4,
              "m1": 5.3,
              "m3": -2.4
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 64.8,
              "drawdown": -10.5,
              "m1": 0.7,
              "m3": 3.6
            },
            {
              "name": "Meta",
              "code": "META",
              "market": "美股",
              "pos52": 77.6,
              "drawdown": -7.3,
              "m1": 10.4,
              "m3": 7.8
            },
            {
              "name": "特斯拉",
              "code": "TSLA",
              "market": "美股",
              "pos52": 40.0,
              "drawdown": -23.5,
              "m1": 2.0,
              "m3": -8.0
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
              "pos52": 88.2,
              "drawdown": -3.7,
              "m1": 3.2,
              "m3": 9.4
            },
            {
              "name": "AMD",
              "code": "AMD",
              "market": "美股",
              "pos52": 93.7,
              "drawdown": -4.4,
              "m1": 19.1,
              "m3": 11.3
            },
            {
              "name": "博通",
              "code": "AVGO",
              "market": "美股",
              "pos52": 36.1,
              "drawdown": -25.0,
              "m1": -1.0,
              "m3": -9.8
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
              "pos52": 87.0,
              "drawdown": -5.7,
              "m1": 5.5,
              "m3": 5.8
            },
            {
              "name": "英特尔",
              "code": "INTC",
              "market": "美股",
              "pos52": 68.4,
              "drawdown": -24.0,
              "m1": 0.8,
              "m3": -2.5
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
              "pos52": 50.7,
              "drawdown": -42.4,
              "m1": 2.1,
              "m3": -28.2
            },
            {
              "name": "美光科技",
              "code": "MU",
              "market": "美股",
              "pos52": 82.8,
              "drawdown": -14.6,
              "m1": 0.8,
              "m3": 5.8
            },
            {
              "name": "三星电子",
              "code": "005930",
              "market": "韩国",
              "pos52": 63.1,
              "drawdown": -27.6,
              "m1": 2.5,
              "m3": -17.6
            },
            {
              "name": "南方两倍做多海力士",
              "code": "07709",
              "market": "港股",
              "pos52": 15.1,
              "drawdown": -80.1,
              "m1": -9.3,
              "m3": -61.2
            },
            {
              "name": "Roundhill Memory ETF",
              "code": "DRAM",
              "market": "美股",
              "star": true,
              "pos52": 55.1,
              "drawdown": -29.5,
              "m1": -7.6,
              "m3": -9.7
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
              "pos52": 44.2,
              "drawdown": -52.8,
              "m1": -13.7,
              "m3": -29.1
            },
            {
              "name": "铠侠 ADR",
              "code": "KXIAY",
              "market": "美股",
              "pos52": 45.9,
              "drawdown": -50.9,
              "m1": -8.0,
              "m3": -32.3
            },
            {
              "name": "闪迪",
              "code": "SNDK",
              "market": "美股",
              "pos52": 67.3,
              "drawdown": -31.1,
              "m1": -8.8,
              "m3": -16.0
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
              "pos52": 64.0,
              "drawdown": -29.1,
              "m1": -12.5,
              "m3": -14.8
            },
            {
              "name": "西部数据",
              "code": "WDC",
              "market": "美股",
              "pos52": 44.3,
              "drawdown": -47.3,
              "m1": -18.4,
              "m3": -32.5
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
              "pos52": 21.8,
              "drawdown": -60.1,
              "m1": -21.8,
              "m3": -53.3
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
              "pos52": 60.8,
              "drawdown": -29.2,
              "m1": -0.4,
              "m3": -6.8
            },
            {
              "name": "Lumentum",
              "code": "LITE",
              "market": "美股",
              "pos52": 91.4,
              "drawdown": -7.5,
              "m1": 6.0,
              "m3": 30.7
            },
            {
              "name": "Fabrinet",
              "code": "FN",
              "market": "美股",
              "pos52": 32.6,
              "drawdown": -34.7,
              "m1": 16.5,
              "m3": 3.4
            },
            {
              "name": "Ciena",
              "code": "CIEN",
              "market": "美股",
              "pos52": 57.3,
              "drawdown": -32.1,
              "m1": 26.0,
              "m3": -7.6
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
              "pos52": 42.2,
              "drawdown": -43.4,
              "m1": -8.9,
              "m3": -29.8
            },
            {
              "name": "新易盛",
              "code": "300502",
              "market": "A股",
              "pos52": 42.2,
              "drawdown": -38.0,
              "m1": -6.0,
              "m3": -28.0
            },
            {
              "name": "天孚通信",
              "code": "300394",
              "market": "A股",
              "pos52": 52.7,
              "drawdown": -33.6,
              "m1": -6.5,
              "m3": -5.8
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
              "pos52": 91.9,
              "drawdown": -2.8,
              "m1": 6.3,
              "m3": 36.0
            },
            {
              "name": "谷歌",
              "code": "GOOGL",
              "market": "美股",
              "pos52": 67.6,
              "drawdown": -13.4,
              "m1": 5.3,
              "m3": -2.4
            },
            {
              "name": "亚马逊",
              "code": "AMZN",
              "market": "美股",
              "pos52": 64.8,
              "drawdown": -10.5,
              "m1": 0.7,
              "m3": 3.6
            },
            {
              "name": "甲骨文",
              "code": "ORCL",
              "market": "美股",
              "pos52": 10.6,
              "drawdown": -56.2,
              "m1": -16.0,
              "m3": -3.5
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
              "pos52": 25.2,
              "drawdown": -43.0,
              "m1": -14.1,
              "m3": -8.2
            },
            {
              "name": "Vertiv（供电散热）",
              "code": "VRT",
              "market": "美股",
              "pos52": 41.5,
              "drawdown": -35.2,
              "m1": -7.3,
              "m3": -23.5
            },
            {
              "name": "戴尔",
              "code": "DELL",
              "market": "美股",
              "pos52": 97.1,
              "drawdown": -2.4,
              "m1": 7.3,
              "m3": 32.3
            },
            {
              "name": "超微电脑",
              "code": "SMCI",
              "market": "美股",
              "pos52": 59.4,
              "drawdown": -26.2,
              "m1": 9.9,
              "m3": 51.1
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
