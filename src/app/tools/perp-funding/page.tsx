"use client";

import { useState, useEffect, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";

/* ────────────────────────────────────────────────────────────
   Types
──────────────────────────────────────────────────────────── */
interface FundingRate {
  id: string;
  symbol: string;
  exchange: string;
  rate: number;          // hourly funding rate %
  annualized: number;    // annualized %
  nextFunding: string;   // countdown
  openInterest: number;
  volume24h: number;
  longShortRatio: number;
  prediction: "bullish" | "bearish" | "neutral";
  trend7d: number[];
}

interface ArbitrageOpp {
  symbol: string;
  longExchange: string;
  shortExchange: string;
  spread: number;
  annualizedYield: number;
  risk: "low" | "medium" | "high";
}

/* ────────────────────────────────────────────────────────────
   Mock Data Generators
──────────────────────────────────────────────────────────── */
const EXCHANGES = ["Binance", "Bybit", "OKX", "dYdX", "Hyperliquid", "GMX", "Vertex", "Aevo"];
const SYMBOLS = ["BTC", "ETH", "SOL", "ARB", "OP", "AVAX", "DOGE", "PEPE", "WIF", "JUP", "TIA", "SEI", "SUI", "INJ", "FET", "RNDR", "WLD", "PYTH", "JTO", "BONK"];

function generateFundingRates(): FundingRate[] {
  const rates: FundingRate[] = [];
  for (const symbol of SYMBOLS) {
    for (const exchange of EXCHANGES.slice(0, 3 + Math.floor(Math.random() * 5))) {
      const rate = (Math.random() - 0.35) * 0.12;
      const annualized = rate * 3 * 365;
      rates.push({
        id: `${symbol}-${exchange}`,
        symbol,
        exchange,
        rate,
        annualized,
        nextFunding: `${Math.floor(Math.random() * 8)}h ${Math.floor(Math.random() * 60)}m`,
        openInterest: Math.random() * 2_000_000_000 + 10_000_000,
        volume24h: Math.random() * 5_000_000_000 + 50_000_000,
        longShortRatio: 0.7 + Math.random() * 0.6,
        prediction: rate > 0.02 ? "bullish" : rate < -0.02 ? "bearish" : "neutral",
        trend7d: Array.from({ length: 7 }, () => (Math.random() - 0.35) * 0.1),
      });
    }
  }
  return rates;
}

function generateArbitrageOpps(rates: FundingRate[]): ArbitrageOpp[] {
  const opps: ArbitrageOpp[] = [];
  const symbolGroups = new Map<string, FundingRate[]>();
  for (const r of rates) {
    if (!symbolGroups.has(r.symbol)) symbolGroups.set(r.symbol, []);
    symbolGroups.get(r.symbol)!.push(r);
  }
  for (const [symbol, group] of symbolGroups) {
    if (group.length < 2) continue;
    const sorted = [...group].sort((a, b) => a.rate - b.rate);
    const low = sorted[0];
    const high = sorted[sorted.length - 1];
    const spread = high.rate - low.rate;
    if (spread > 0.005) {
      opps.push({
        symbol,
        longExchange: low.exchange,
        shortExchange: high.exchange,
        spread,
        annualizedYield: spread * 3 * 365,
        risk: spread > 0.05 ? "high" : spread > 0.02 ? "medium" : "low",
      });
    }
  }
  return opps.sort((a, b) => b.annualizedYield - a.annualizedYield).slice(0, 15);
}

/* ────────────────────────────────────────────────────────────
   Formatters
──────────────────────────────────────────────────────────── */
function fmtPct(n: number) {
  const s = n >= 0 ? "+" : "";
  return `${s}${n.toFixed(4)}%`;
}
function fmtAnnual(n: number) {
  const s = n >= 0 ? "+" : "";
  return `${s}${n.toFixed(2)}%`;
}
function fmtUsd(n: number) {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`;
  if (n >= 1e3) return `$${(n / 1e3).toFixed(0)}K`;
  return `$${n.toFixed(0)}`;
}

/* ────────────────────────────────────────────────────────────
   Sparkline Component
──────────────────────────────────────────────────────────── */
function Sparkline({ data, width = 80, height = 24 }: { data: number[]; width?: number; height?: number }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const points = data
    .map((v, i) => `${(i / (data.length - 1)) * width},${height - ((v - min) / range) * height}`)
    .join(" ");
  const color = data[data.length - 1] >= data[0] ? "#3fb950" : "#f85149";
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <polyline points={points} fill="none" stroke={color} strokeWidth={1.5} />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────
   Main Component
──────────────────────────────────────────────────────────── */
export default function PerpFundingPage() {
  const [rates, setRates] = useState<FundingRate[]>([]);
  const [arbitrage, setArbitrage] = useState<ArbitrageOpp[]>([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"rate" | "annualized" | "oi" | "volume">("rate");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [exchangeFilter, setExchangeFilter] = useState<string>("all");
  const [tab, setTab] = useState<"rates" | "arbitrage" | "heatmap">("rates");
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const r = generateFundingRates();
    setRates(r);
    setArbitrage(generateArbitrageOpps(r));
  }, []);

  function refresh() {
    setRefreshing(true);
    setTimeout(() => {
      const r = generateFundingRates();
      setRates(r);
      setArbitrage(generateArbitrageOpps(r));
      setRefreshing(false);
    }, 600);
  }

  const filteredRates = useMemo(() => {
    let f = rates;
    if (search) f = f.filter((r) => r.symbol.toLowerCase().includes(search.toLowerCase()));
    if (exchangeFilter !== "all") f = f.filter((r) => r.exchange === exchangeFilter);
    f.sort((a, b) => {
      let av: number, bv: number;
      switch (sortBy) {
        case "rate": av = a.rate; bv = b.rate; break;
        case "annualized": av = a.annualized; bv = b.annualized; break;
        case "oi": av = a.openInterest; bv = b.openInterest; break;
        case "volume": av = a.volume24h; bv = b.volume24h; break;
      }
      return sortDir === "desc" ? bv - av : av - bv;
    });
    return f;
  }, [rates, search, exchangeFilter, sortBy, sortDir]);

  // Heatmap data
  const heatmapData = useMemo(() => {
    const map = new Map<string, Map<string, number>>();
    for (const r of rates) {
      if (!map.has(r.symbol)) map.set(r.symbol, new Map());
      map.get(r.symbol)!.set(r.exchange, r.rate);
    }
    return map;
  }, [rates]);

  // Summary stats
  const avgRate = rates.length ? rates.reduce((s, r) => s + r.rate, 0) / rates.length : 0;
  const totalOI = rates.reduce((s, r) => s + r.openInterest, 0);
  const mostPositive = [...rates].sort((a, b) => b.rate - a.rate)[0];
  const mostNegative = [...rates].sort((a, b) => a.rate - b.rate)[0];

  function handleSort(col: typeof sortBy) {
    if (sortBy === col) setSortDir(sortDir === "desc" ? "asc" : "desc");
    else { setSortBy(col); setSortDir("desc"); }
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", color: "#e6edf3" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "24px 20px" }}>
        <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "Perp Funding Rates" }]} />

        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, background: "linear-gradient(135deg, #6366f1, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Perpetual Funding Rate Dashboard
          </h1>
          <p style={{ color: "#8b949e", fontSize: 15, maxWidth: 700 }}>
            Track real-time funding rates across all major perpetual exchanges. Find arbitrage opportunities, monitor market sentiment, and optimize your delta-neutral strategies.
          </p>
        </div>

        {/* Summary Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 24 }}>
          {[
            { label: "Avg Funding Rate", value: fmtPct(avgRate), color: avgRate >= 0 ? "#3fb950" : "#f85149" },
            { label: "Total Open Interest", value: fmtUsd(totalOI / EXCHANGES.length), color: "#58a6ff" },
            { label: "Highest Funding", value: mostPositive ? `${mostPositive.symbol} ${fmtPct(mostPositive.rate)}` : "—", color: "#3fb950" },
            { label: "Most Negative", value: mostNegative ? `${mostNegative.symbol} ${fmtPct(mostNegative.rate)}` : "—", color: "#f85149" },
          ].map((c) => (
            <div key={c.label} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "16px 20px" }}>
              <div style={{ fontSize: 12, color: "#8b949e", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{c.label}</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: c.color }}>{c.value}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          {(["rates", "arbitrage", "heatmap"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 20px", borderRadius: 8, border: "1px solid " + (tab === t ? "#6366f1" : "#30363d"),
                background: tab === t ? "#6366f120" : "#161b22", color: tab === t ? "#818cf8" : "#8b949e",
                cursor: "pointer", fontWeight: 600, fontSize: 14, textTransform: "capitalize",
              }}
            >
              {t === "rates" ? "Funding Rates" : t === "arbitrage" ? "Arbitrage Finder" : "Heatmap"}
            </button>
          ))}
          <button
            onClick={refresh}
            style={{
              marginLeft: "auto", padding: "8px 16px", borderRadius: 8, border: "1px solid #30363d",
              background: "#161b22", color: "#8b949e", cursor: "pointer", fontSize: 13,
            }}
          >
            {refreshing ? "Refreshing..." : "Refresh"}
          </button>
        </div>

        {/* Filters */}
        {tab === "rates" && (
          <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
            <input
              type="text" placeholder="Search token..." value={search} onChange={(e) => setSearch(e.target.value)}
              style={{ padding: "8px 14px", borderRadius: 8, border: "1px solid #30363d", background: "#161b22", color: "#e6edf3", fontSize: 14, width: 200 }}
            />
            <select
              value={exchangeFilter} onChange={(e) => setExchangeFilter(e.target.value)}
              style={{ padding: "8px 14px", borderRadius: 8, border: "1px solid #30363d", background: "#161b22", color: "#e6edf3", fontSize: 14 }}
            >
              <option value="all">All Exchanges</option>
              {EXCHANGES.map((ex) => <option key={ex} value={ex}>{ex}</option>)}
            </select>
          </div>
        )}

        {/* RATES TABLE */}
        {tab === "rates" && (
          <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid #30363d" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "#161b22" }}>
                  {[
                    { key: "symbol" as const, label: "Token" },
                    { key: "exchange" as const, label: "Exchange" },
                    { key: "rate" as const, label: "Funding Rate" },
                    { key: "annualized" as const, label: "Annualized" },
                    { key: "oi" as const, label: "Open Interest" },
                    { key: "volume" as const, label: "24h Volume" },
                    { key: "ls" as const, label: "Long/Short" },
                    { key: "trend" as const, label: "7d Trend" },
                  ].map((h) => (
                    <th
                      key={h.key}
                      onClick={() => ["rate", "annualized", "oi", "volume"].includes(h.key) ? handleSort(h.key as any) : null}
                      style={{
                        padding: "12px 16px", textAlign: "left", color: "#8b949e", fontWeight: 600,
                        cursor: ["rate", "annualized", "oi", "volume"].includes(h.key) ? "pointer" : "default",
                        borderBottom: "1px solid #30363d", whiteSpace: "nowrap",
                      }}
                    >
                      {h.label} {sortBy === h.key ? (sortDir === "desc" ? " ▼" : " ▲") : ""}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredRates.slice(0, 50).map((r) => (
                  <tr key={r.id} style={{ borderBottom: "1px solid #21262d" }}>
                    <td style={{ padding: "10px 16px", fontWeight: 700 }}>{r.symbol}</td>
                    <td style={{ padding: "10px 16px", color: "#8b949e" }}>{r.exchange}</td>
                    <td style={{ padding: "10px 16px", fontWeight: 600, color: r.rate >= 0 ? "#3fb950" : "#f85149" }}>{fmtPct(r.rate)}</td>
                    <td style={{ padding: "10px 16px", fontWeight: 600, color: r.annualized >= 0 ? "#3fb950" : "#f85149" }}>{fmtAnnual(r.annualized)}</td>
                    <td style={{ padding: "10px 16px" }}>{fmtUsd(r.openInterest)}</td>
                    <td style={{ padding: "10px 16px" }}>{fmtUsd(r.volume24h)}</td>
                    <td style={{ padding: "10px 16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <div style={{ width: 60, height: 6, background: "#21262d", borderRadius: 3, overflow: "hidden" }}>
                          <div style={{ width: `${(r.longShortRatio / (r.longShortRatio + 1)) * 100}%`, height: "100%", background: r.longShortRatio > 1 ? "#3fb950" : "#f85149", borderRadius: 3 }} />
                        </div>
                        <span style={{ fontSize: 12, color: "#8b949e" }}>{r.longShortRatio.toFixed(2)}</span>
                      </div>
                    </td>
                    <td style={{ padding: "10px 16px" }}><Sparkline data={r.trend7d} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ARBITRAGE TABLE */}
        {tab === "arbitrage" && (
          <div>
            <div style={{ background: "#161b2280", border: "1px solid #30363d", borderRadius: 12, padding: 20, marginBottom: 20 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: "#58a6ff" }}>Delta-Neutral Funding Arbitrage</h3>
              <p style={{ color: "#8b949e", fontSize: 13, lineHeight: 1.6 }}>
                These opportunities exploit funding rate differences between exchanges. Go long on the exchange with lower funding and short on the exchange with higher funding to capture the spread.
              </p>
            </div>
            <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid #30363d" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr style={{ background: "#161b22" }}>
                    {["Token", "Long On", "Short On", "Spread", "Est. APY", "Risk"].map((h) => (
                      <th key={h} style={{ padding: "12px 16px", textAlign: "left", color: "#8b949e", fontWeight: 600, borderBottom: "1px solid #30363d" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {arbitrage.map((a) => (
                    <tr key={`${a.symbol}-${a.longExchange}`} style={{ borderBottom: "1px solid #21262d" }}>
                      <td style={{ padding: "10px 16px", fontWeight: 700 }}>{a.symbol}</td>
                      <td style={{ padding: "10px 16px", color: "#3fb950" }}>{a.longExchange}</td>
                      <td style={{ padding: "10px 16px", color: "#f85149" }}>{a.shortExchange}</td>
                      <td style={{ padding: "10px 16px", fontWeight: 600 }}>{fmtPct(a.spread)}</td>
                      <td style={{ padding: "10px 16px", fontWeight: 700, color: "#3fb950" }}>{fmtAnnual(a.annualizedYield)}</td>
                      <td style={{ padding: "10px 16px" }}>
                        <span style={{
                          padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 600,
                          background: a.risk === "low" ? "#3fb95020" : a.risk === "medium" ? "#d2992220" : "#f8514920",
                          color: a.risk === "low" ? "#3fb950" : a.risk === "medium" ? "#d29922" : "#f85149",
                          border: `1px solid ${a.risk === "low" ? "#3fb95040" : a.risk === "medium" ? "#d2992240" : "#f8514940"}`,
                        }}>{a.risk}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* HEATMAP */}
        {tab === "heatmap" && (
          <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid #30363d" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#161b22" }}>
                  <th style={{ padding: "10px 14px", textAlign: "left", color: "#8b949e", fontWeight: 600, borderBottom: "1px solid #30363d", position: "sticky", left: 0, background: "#161b22", zIndex: 1 }}>Token</th>
                  {EXCHANGES.map((ex) => (
                    <th key={ex} style={{ padding: "10px 14px", textAlign: "center", color: "#8b949e", fontWeight: 600, borderBottom: "1px solid #30363d", whiteSpace: "nowrap" }}>{ex}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SYMBOLS.map((sym) => (
                  <tr key={sym} style={{ borderBottom: "1px solid #21262d" }}>
                    <td style={{ padding: "8px 14px", fontWeight: 700, position: "sticky", left: 0, background: "#0d1117", zIndex: 1 }}>{sym}</td>
                    {EXCHANGES.map((ex) => {
                      const val = heatmapData.get(sym)?.get(ex);
                      if (val === undefined) return <td key={ex} style={{ padding: "8px 14px", textAlign: "center", color: "#30363d" }}>—</td>;
                      const intensity = Math.min(Math.abs(val) / 0.08, 1);
                      const bg = val >= 0
                        ? `rgba(63, 185, 80, ${intensity * 0.4})`
                        : `rgba(248, 81, 73, ${intensity * 0.4})`;
                      return (
                        <td key={ex} style={{ padding: "8px 14px", textAlign: "center", background: bg, fontWeight: 600, fontSize: 12, color: val >= 0 ? "#3fb950" : "#f85149" }}>
                          {fmtPct(val)}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Info Section */}
        <div style={{ marginTop: 40, background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 24 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Understanding Perpetual Funding Rates</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, color: "#8b949e", fontSize: 14, lineHeight: 1.7 }}>
            <div>
              <h3 style={{ color: "#e6edf3", fontWeight: 600, marginBottom: 8 }}>What are Funding Rates?</h3>
              <p>Funding rates are periodic payments between long and short traders in perpetual futures markets. They keep the perpetual price anchored to the spot price. Positive rates mean longs pay shorts; negative rates mean shorts pay longs.</p>
            </div>
            <div>
              <h3 style={{ color: "#e6edf3", fontWeight: 600, marginBottom: 8 }}>How to Use This Tool</h3>
              <p>Monitor funding rates to gauge market sentiment. Extremely positive rates suggest overleveraged longs (potential for a squeeze). Use the Arbitrage Finder to identify delta-neutral yield opportunities across exchanges.</p>
            </div>
            <div>
              <h3 style={{ color: "#e6edf3", fontWeight: 600, marginBottom: 8 }}>Risk Disclaimer</h3>
              <p>Funding rate arbitrage involves counterparty risk, liquidation risk, and execution risk. Past funding rates do not guarantee future rates. This tool is for informational purposes only — not financial advice.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
