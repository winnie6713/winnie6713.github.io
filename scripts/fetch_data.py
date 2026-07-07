#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
抓取数据面板行情并生成 js/panel-data.js。

用 yfinance（免费、免密钥，数据源为雅虎财经）拉取每个标的近一年日线，
计算：52周位、距52周高点回撤、近1月涨跌幅、近3月涨跌幅。

用法：
    python3 scripts/fetch_data.py

依赖：
    pip install yfinance
"""

import json
import logging
import os
import sys
from datetime import datetime

import yfinance as yf

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
logger = logging.getLogger("fetch_data")

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TICKERS_FILE = os.path.join(BASE_DIR, "scripts", "tickers.json")
OUTPUT_FILE = os.path.join(BASE_DIR, "js", "panel-data.js")


def compute_metrics(hist):
    """根据一年日线收盘价计算各指标；数据不足时对应项返回 None。"""
    closes = hist["Close"].dropna()
    if len(closes) < 2:
        return {}

    last = float(closes.iloc[-1])
    hi = float(closes.max())
    lo = float(closes.min())

    # 52周位：当前价在一年高低点之间的位置（0~100）
    pos52 = round((last - lo) / (hi - lo) * 100, 1) if hi > lo else None
    # 高点跌幅：距一年最高点的回撤（负数）
    drawdown = round((last - hi) / hi * 100, 1) if hi > 0 else None
    # 近1月/近3月涨跌幅（按交易日近似：21 / 63 个交易日）
    m1 = _pct_change(closes, 21)
    m3 = _pct_change(closes, 63)

    return {"pos52": pos52, "drawdown": drawdown, "m1": m1, "m3": m3}


def _pct_change(closes, n_days):
    """近 n_days 交易日涨跌幅（%）；历史不足则用最早一条兜底。"""
    if len(closes) <= 1:
        return None
    idx = -min(n_days + 1, len(closes))
    past = float(closes.iloc[idx])
    last = float(closes.iloc[-1])
    if past == 0:
        return None
    return round((last - past) / past * 100, 1)


def fetch_one(yahoo_symbol):
    """抓单个标的一年日线，失败返回空 dict（不中断整体）。"""
    try:
        hist = yf.Ticker(yahoo_symbol).history(period="1y", auto_adjust=True)
        if hist is None or hist.empty:
            logger.warning("无数据：%s", yahoo_symbol)
            return {}
        return compute_metrics(hist)
    except Exception as exc:  # 单个标的失败不影响其他
        logger.warning("抓取失败 %s：%s", yahoo_symbol, exc)
        return {}


def build_panel(config):
    """遍历配置，抓取并组装成 panel 数据结构。"""
    out_sectors = []
    for sector in config["sectors"]:
        out_groups = []
        for group in sector.get("groups", []):
            rows = []
            for t in group.get("tickers", []):
                metrics = fetch_one(t["yahoo"])
                row = {
                    "name": t["name"],
                    "code": t["code"],
                    "market": t.get("market", ""),
                }
                if t.get("star"):
                    row["star"] = True
                row.update({
                    "pos52": metrics.get("pos52"),
                    "drawdown": metrics.get("drawdown"),
                    "m1": metrics.get("m1"),
                    "m3": metrics.get("m3"),
                })
                logger.info("  %s(%s): %s", t["name"], t["yahoo"], metrics or "无")
                rows.append(row)
            out_groups.append({"name": group["name"], "rows": rows})
        out_sectors.append({
            "id": sector["id"],
            "name": sector["name"],
            "groups": out_groups,
        })
    return out_sectors


def write_js(sectors):
    """写出 js/panel-data.js（供前端 window.PANEL 读取）。"""
    payload = {
        "updated": datetime.now().strftime("%Y-%m-%d %H:%M"),
        "note": "数据来自雅虎财经，每日自动更新，仅供学习参考",
        "sectors": sectors,
    }
    body = json.dumps(payload, ensure_ascii=False, indent=2)
    content = (
        "// ===== 数据面板：由 scripts/fetch_data.py 自动生成，请勿手改 =====\n"
        "// 要改抓取哪些标的，编辑 scripts/tickers.json\n"
        "window.PANEL = " + body + ";\n"
    )
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(content)
    logger.info("已写出 %s", OUTPUT_FILE)


def main():
    with open(TICKERS_FILE, encoding="utf-8") as f:
        config = json.load(f)
    logger.info("开始抓取行情……")
    sectors = build_panel(config)
    write_js(sectors)
    logger.info("完成")


if __name__ == "__main__":
    sys.exit(main())
