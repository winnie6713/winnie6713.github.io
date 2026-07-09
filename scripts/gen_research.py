#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
公司研究笔记生成器：喂进代码+定位，自动拉 yfinance 数据、套 7 问框架，
生成 notes/<slug>-research.md（客观数字填好，主观判断留空 ____）。

用法：
    python3 scripts/gen_research.py          # 生成 COMPANIES 里所有公司
新增公司：往下面 COMPANIES 列表加一条即可。
"""

import os
from datetime import datetime

import yfinance as yf

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NOTES_DIR = os.path.join(BASE_DIR, "notes")

# ==== 要生成的公司（加公司就往这加）====
# slug 是文件名前缀；layer 是产业链层级；positioning 一句话定位；
# rivals 直接竞争对手；kpi 该盯的关键指标（一句话）
COMPANIES = [
    {
        "ticker": "TSM", "slug": "tsm", "name": "台积电 TSM",
        "category": "公司深度",
        "layer": "① 算力硬件层 · 晶圆代工",
        "positioning": "全球先进芯片的代工总厂，几乎所有顶级 AI 芯片（英伟达/AMD/苹果）都由它制造，是 AI 链最上游的「卖水人」，先进制程近乎垄断。",
        "rivals": "三星代工、英特尔代工（IFS）——但先进制程差距明显",
        "kpi": "先进制程(3nm/5nm)营收占比、月度营收（AI 风向标）、资本开支、HPC 平台占比",
    },
    {
        "ticker": "AVGO", "slug": "avgo", "name": "博通 AVGO",
        "category": "公司深度",
        "layer": "① 算力硬件层 · 定制芯片与网络",
        "positioning": "帮谷歌、Meta 等云厂设计定制 AI 芯片(ASIC/TPU)，加上数据中心网络芯片，是英伟达之外「让大客户自研」的另一极，也做企业软件(VMware)。",
        "rivals": "Marvell（定制 ASIC）、英伟达（网络与整体方案）",
        "kpi": "AI 相关半导体营收及增速、定制 ASIC 大客户进展、软件(VMware)整合、订单积压",
    },
    {
        "ticker": "MSFT", "slug": "msft", "name": "微软 MSFT",
        "category": "公司深度",
        "layer": "③ 云平台层 + ④/⑤ 模型与应用",
        "positioning": "靠 Azure 云卡位算力出租，靠重仓 OpenAI 拿到最强模型，靠 Copilot 把 AI 塞进 Office 变现——是全链条卡位最全、AI 变现最领先的大厂之一。",
        "rivals": "亚马逊 AWS、谷歌 GCP（云）；谷歌、Meta（模型）",
        "kpi": "Azure 云增速、资本开支(capex)及指引、Copilot 付费渗透、云业务毛利率、RPO 剩余合同",
    },
]


def compute_price_position(hist):
    """从一年日线算 52周位 / 高点跌幅。"""
    closes = hist["Close"].dropna()
    if len(closes) < 2:
        return None, None
    last, hi, lo = float(closes.iloc[-1]), float(closes.max()), float(closes.min())
    pos52 = round((last - lo) / (hi - lo) * 100, 1) if hi > lo else None
    drawdown = round((last - hi) / hi * 100, 1) if hi > 0 else None
    return pos52, drawdown


def fmt(v, suffix="", pct=False):
    """数字格式化；缺失返回填空占位 ____。"""
    if v is None:
        return "____"
    if pct:
        return f"{round(v * 100, 1)}%"
    return f"{v}{suffix}"


def fetch(company):
    """拉取单家公司数据，返回渲染所需字段。"""
    t = yf.Ticker(company["ticker"])
    info = t.info
    hist = t.history(period="1y", auto_adjust=True)
    pos52, drawdown = compute_price_position(hist)

    def g(k):
        return info.get(k)

    rev = g("totalRevenue")
    return {
        "cur": g("financialCurrency") or "USD",
        "price": g("currentPrice"),
        "mktcap_t": round(g("marketCap") / 1e12, 2) if g("marketCap") else None,
        "pe": round(g("trailingPE"), 1) if g("trailingPE") else None,
        "fpe": round(g("forwardPE"), 1) if g("forwardPE") else None,
        "ps": round(g("priceToSalesTrailing12Months"), 1) if g("priceToSalesTrailing12Months") else None,
        "peg": round(g("trailingPegRatio"), 2) if g("trailingPegRatio") else None,
        "gross": g("grossMargins"),
        "oper": g("operatingMargins"),
        "net": g("profitMargins"),
        "rev_growth": g("revenueGrowth"),
        "rev_ttm_yi": round(rev / 1e8, 0) if rev else None,
        "pos52": pos52,
        "drawdown": drawdown,
    }


TEMPLATE = """# {name} 研究（模板 · 边填边学）

> 单家公司研究模板，7 问依次回答。`⚙️` 是 yfinance 自动填的客观数字（{today}），会过时，每季度财报后更新；`____` 是留给你写的主观判断。

**一句话定位**：{positioning}

> 📌 客观数字：当前股价约 ${price}、市值约 {mktcap} 万亿美元。

---

## 1. 卡位：在产业链哪一层？卖什么给谁？

- 所在层级：{layer}
- 主要产品 / 客户：____
- 客户集中度风险：____

## 2. 收入结构：AI 收入占比与增速？

- ⚙️ 近12个月(TTM)总营收：约 **{rev_ttm} 亿{cur_name}**，同比增速 **{rev_growth}**{cur_note}
- AI / 核心业务营收占比与增速：____（从财报电话会抄，yfinance 给不了分部）
- 👉 数据来源：财报 10-Q/10-K、公司 IR

## 3. 护城河：为什么别人抢不走？

- 核心护城河是什么？你的理解：____
- 会不会被削弱？____

## 4. 关键 KPI：该盯哪些数？

- 本公司重点盯：{kpi}
- ⚙️ 毛利率 **{gross}** / 营业利润率 **{oper}** / 净利率 **{net}**
- [ ] 下季度营收/利润**指引**（Guidance）——市场最看这个
- [ ] 下次财报日期：____

## 5. 竞争与威胁：谁在追它？

- 直接对手：{rivals}
- 替代威胁有多大？你的判断：____

## 6. 估值：现在贵不贵？price in 了多少？

- ⚙️ PE **{pe}** / 远期 PE **{fpe}** / PS **{ps}** / PEG **{peg}**{ps_note}
- ⚙️ 价格位置：52周位 **{pos52}** / 高点跌幅 **{drawdown}**
- 市场已经假设了怎样的增长？高不高？你的判断：____

## 7. 催化剂与风险

**催化剂（往上）**：____
**风险（往下）**：____

---

## 我的结论（研究完再写）

- 它现在处在故事的哪个阶段？____
- 多头逻辑 / 空头逻辑各一句：____
- 我会怎么跟踪它（每季度看哪几个数）：____

---

*模板复用：研究下一家时，用 `scripts/gen_research.py` 加一条公司即可自动生成。*
"""


CUR_NAME = {"USD": "美元", "TWD": "新台币", "KRW": "韩元", "JPY": "日元", "CNY": "人民币", "HKD": "港元"}


def render(company, data):
    cur = data["cur"]
    is_usd = (cur == "USD")
    cur_note = "" if is_usd else f"（注：{company['name'].split()[0]}以{CUR_NAME.get(cur, cur)}计，绝对营收/PS 勿与美元公司直接比）"
    ps_note = "" if is_usd else "（PS 为美元市值÷本币营收，跨币种口径失真，仅参考 PE）"
    return TEMPLATE.format(
        name=company["name"],
        today=datetime.now().strftime("%Y-%m-%d"),
        cur_name=CUR_NAME.get(cur, cur),
        cur_note=cur_note,
        ps_note=ps_note,
        positioning=company["positioning"],
        layer=company["layer"],
        rivals=company["rivals"],
        kpi=company["kpi"],
        price=fmt(data["price"]),
        mktcap=fmt(data["mktcap_t"]),
        rev_ttm=fmt(data["rev_ttm_yi"]),
        rev_growth=("+" + fmt(data["rev_growth"], pct=True)) if data["rev_growth"] and data["rev_growth"] > 0 else fmt(data["rev_growth"], pct=True),
        gross=fmt(data["gross"], pct=True),
        oper=fmt(data["oper"], pct=True),
        net=fmt(data["net"], pct=True),
        pe=fmt(data["pe"]),
        fpe=fmt(data["fpe"]),
        ps=fmt(data["ps"]),
        peg=fmt(data["peg"]),
        pos52=(f"{data['pos52']}%" if data["pos52"] is not None else "____"),
        drawdown=(f"{data['drawdown']}%" if data["drawdown"] is not None else "____"),
    )


def main():
    for c in COMPANIES:
        data = fetch(c)
        md = render(c, data)
        path = os.path.join(NOTES_DIR, c["slug"] + "-research.md")
        with open(path, "w", encoding="utf-8") as f:
            f.write(md)
        print(f"生成 {path}")
        # 打印可粘进 notes-list.js 的登记条目
        print(f'  登记：{{ file: "{c["slug"]}-research.md", title: "{c["name"]} 研究（模板）", '
              f'date: "{datetime.now().strftime("%Y-%m-%d")}", category: "{c["category"]}", desc: "7问框架，客观数据已自动填充。" }},')


if __name__ == "__main__":
    main()
