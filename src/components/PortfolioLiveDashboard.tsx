"use client";

/**
 * PortfolioLiveDashboard — Sprint 50
 * Combines MultiChainPortfolio holdings with WebSocket live prices from Binance.
 * Features: live P&L tickers, sparklines, total portfolio value in real-time,
 * 24h change banner, portfolio allocation pie (CSS), and edit holdings modal.
 */

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Holding {
  id: string;
  symbol: string;
  name: string;
  pair: string; // Binance WS pair e.g. "btcusdt"
  amount: number;
  avgBuy: number;
  color: string;
  emoji: string;
}

interface LivePrice {
  price: number;
  prevPrice: number;
  change24h: number;
  high24h: number;
  low24h: number;
  volume24h: number;
  sparkline: number[];
  lastUpdate: number;
  tick: "up" | "down" | "flat";
}

// ─── Default holdings ────────────────────────────────────────────────────────

const DEFAULT_HOLDINGS: Holding[] = [
  { id: "btc",  symbol: "BTC",  name: "Bitcoin",   pair: "btcusdt",   amount: 0.5,   avgBuy: 42000, color: "#f7931a", emoji: "₿" },
  { id: "eth",  symbol: "ETH",  name: "Ethereum",  pair: "ethusdt",   amount: 4.0,   avgBuy: 2200,  color: "#627eea", emoji: "Ξ" },
  { id: "sol",  symbol: "SOL",  name: "Solana",    pair: "solusdt",   amount: 20.0,  avgBuy: 95,    color: "#9945ff", emoji: "◎" },
  { id: "bnb",  symbol: "BNB",  name: "BNB",       pair: "bnbusdt",   amount: 8.0,   avgBuy: 280,   color: "#f0b90b", emoji: "⬡" },
  { id: "link", symbol: "LINK", name: "Chainlink", pair: "linkusdt",  amount: 100.0, avgBuy: 12,    color: "#2a5ada", emoji: "⬡" },
  { id: "avax", symbol: "AVAX", name: "Avalanche", pair: "avaxusdt",  amount: 15.0,  avgBuy: 28,    color: "#e84142", emoji: "△" },
];

const FALLBACK_PRICES: Record<string, number> = {
  btcusdt: 83200, ethusdt: 3180, solusdt: 142, bnbusdt: 598,
  linkusdt: 18.4, avaxusdt: 36.2,
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmt(n: number, d = 2) {
  return n.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
}
function fmtUSD(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(2)}K`;
  return `$${fmt(n)}`;
}
function pct(n: number) {
  const sign = n >= 0 ? "+" : "";
  return `${sign}${fmt(n, 2)}%`;
}

// ─── Sparkline ───────────────────────────────────────────────────────────────

function Sparkline({ data, color, height = 32 }: { data: number[]; color: string; height?: number }) {
  if (!data || data.length < 2) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const w = 80;
  const h = height;
  const pts = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / range) * h;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: "block" }}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth={1.5} strokeLinejoin="round" />
    </svg>
  );
}

// ─── Allocation bar ──────────────────────────────────────────────────────────

function AllocationBar({
  holdings,
  prices,
}: {
  holdings: Holding[];
  prices: Record<string, LivePrice>;
}) {
  const items = holdings.map((h) => {
    const p = prices[h.pair]?.price ?? FALLBACK_PRICES[h.pair] ?? 0;
    return { ...h, value: h.amount * p };
  });
  const total = items.reduce((s, i) => s + i.value, 0);
  if (!total) return null;
  return (
    <div>
      <div className="flex h-3 rounded-full overflow-hidden gap-px" style={{ background: "#161b22" }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{ width: `${(item.value / total) * 100}%`, background: item.color }}
            title={`${item.symbol}: ${((item.value / total) * 100).toFixed(1)}%`}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
        {items.map((item) => (
          <span key={item.id} className="flex items-center gap-1 text-xs" style={{ color: "#8b949e" }}>
            <span
              className="inline-block w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: item.color }}
            />
            {item.symbol} {((item.value / total) * 100).toFixed(1)}%
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Edit modal ──────────────────────────────────────────────────────────────

function EditModal({
  holding,
  onSave,
  onClose,
}: {
  holding: Holding;
  onSave: (h: Holding) => void;
  onClose: () => void;
}) {
  const [amount, setAmount] = useState(String(holding.amount));
  const [avgBuy, setAvgBuy] = useState(String(holding.avgBuy));
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#161b22] border border-white/10 rounded-2xl p-6 w-full max-w-sm shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-white font-bold text-lg mb-4">Edit {holding.symbol}</h3>
        <label className="block text-xs text-gray-400 mb-1">Amount held</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full bg-[#0d1117] border border-white/10 rounded-lg px-3 py-2 text-white text-sm mb-3 outline-none focus:border-indigo-500"
        />
        <label className="block text-xs text-gray-400 mb-1">Avg buy price (USD)</label>
        <input
          type="number"
          value={avgBuy}
          onChange={(e) => setAvgBuy(e.target.value)}
          className="w-full bg-[#0d1117] border border-white/10 rounded-lg px-3 py-2 text-white text-sm mb-5 outline-none focus:border-indigo-500"
        />
        <div className="flex gap-3">
          <button
            className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg py-2 text-sm font-semibold transition-colors"
            onClick={() =>
              onSave({ ...holding, amount: parseFloat(amount) || 0, avgBuy: parseFloat(avgBuy) || 0 })
            }
          >
            Save
          </button>
          <button
            className="flex-1 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg py-2 text-sm font-semibold transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function PortfolioLiveDashboard() {
  const [holdings, setHoldings] = useState<Holding[]>(DEFAULT_HOLDINGS);
  const [prices, setPrices] = useState<Record<string, LivePrice>>({});
  const [wsStatus, setWsStatus] = useState<"connecting" | "live" | "fallback">("connecting");
  const [editTarget, setEditTarget] = useState<Holding | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const attemptsRef = useRef(0);

  // initialise price state from fallbacks
  useEffect(() => {
    const init: Record<string, LivePrice> = {};
    holdings.forEach((h) => {
      const p = FALLBACK_PRICES[h.pair] ?? 0;
      init[h.pair] = {
        price: p, prevPrice: p, change24h: 0, high24h: p * 1.03, low24h: p * 0.97,
        volume24h: 0, sparkline: Array(20).fill(p), lastUpdate: Date.now(), tick: "flat",
      };
    });
    setPrices(init);
  }, []); // eslint-disable-line

  // WebSocket connection
  const connect = useCallback(() => {
    if (typeof window === "undefined") return;
    const pairs = holdings.map((h) => `${h.pair}@miniTicker`).join("/");
    const url = `wss://stream.binance.com:9443/stream?streams=${pairs}`;
    try {
      const ws = new WebSocket(url);
      wsRef.current = ws;
      setWsStatus("connecting");

      ws.onopen = () => {
        setWsStatus("live");
        attemptsRef.current = 0;
      };

      ws.onmessage = (evt) => {
        try {
          const { data: tick } = JSON.parse(evt.data) as { data: Record<string, string> };
          const pair = tick.s?.toLowerCase();
          if (!pair) return;
          const price = parseFloat(tick.c);
          const change24h = parseFloat(tick.P);
          const high24h = parseFloat(tick.h);
          const low24h = parseFloat(tick.l);
          const volume24h = parseFloat(tick.q);

          setPrices((prev) => {
            const existing = prev[pair];
            const spark = existing
              ? [...existing.sparkline.slice(-29), price]
              : Array(20).fill(price);
            return {
              ...prev,
              [pair]: {
                price, prevPrice: existing?.price ?? price,
                change24h, high24h, low24h, volume24h,
                sparkline: spark,
                lastUpdate: Date.now(),
                tick: existing
                  ? price > existing.price ? "up" : price < existing.price ? "down" : "flat"
                  : "flat",
              },
            };
          });
        } catch { /* ignore parse errors */ }
      };

      ws.onerror = () => setWsStatus("fallback");
      ws.onclose = () => {
        setWsStatus("fallback");
        if (attemptsRef.current < 5) {
          attemptsRef.current++;
          reconnectRef.current = setTimeout(connect, 3000 * attemptsRef.current);
        }
      };
    } catch {
      setWsStatus("fallback");
    }
  }, [holdings]);

  useEffect(() => {
    connect();
    return () => {
      wsRef.current?.close();
      if (reconnectRef.current) clearTimeout(reconnectRef.current);
    };
  }, [connect]);

  // Derived portfolio metrics
  const stats = useMemo(() => {
    let totalValue = 0;
    let totalCost = 0;
    let totalPnl = 0;

    const rows = holdings.map((h) => {
      const lp = prices[h.pair];
      const price = lp?.price ?? FALLBACK_PRICES[h.pair] ?? 0;
      const value = h.amount * price;
      const cost = h.amount * h.avgBuy;
      const pnlAbs = value - cost;
      const pnlPct = cost > 0 ? (pnlAbs / cost) * 100 : 0;
      totalValue += value;
      totalCost += cost;
      totalPnl += pnlAbs;
      return { ...h, price, value, cost, pnlAbs, pnlPct, lp };
    });

    const totalPnlPct = totalCost > 0 ? (totalPnl / totalCost) * 100 : 0;
    return { rows, totalValue, totalCost, totalPnl, totalPnlPct };
  }, [holdings, prices]);

  const positiveDay = stats.rows.filter((r) => (r.lp?.change24h ?? 0) > 0).length;

  return (
    <div style={{ background: "#0d1117", minHeight: "100vh", fontFamily: "system-ui, sans-serif", color: "#e6edf3" }}>
      {/* Header */}
      <div style={{ background: "#161b22", borderBottom: "1px solid #30363d", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 20, fontWeight: 800, background: "linear-gradient(135deg,#6366f1,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            degen0x
          </span>
          <span style={{ fontSize: 13, color: "#8b949e" }}>Portfolio</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {wsStatus === "live" && (
            <span style={{ display: "flex", alignItems: "center", gap: 5, background: "#3fb95020", border: "1px solid #3fb95040", borderRadius: 6, padding: "3px 10px", fontSize: 11, color: "#3fb950", fontWeight: 600 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3fb950", display: "inline-block", animation: "pulse 2s infinite" }} />
              LIVE
            </span>
          )}
          {wsStatus === "fallback" && (
            <span style={{ fontSize: 11, color: "#d29922", border: "1px solid #d2992230", borderRadius: 6, padding: "3px 10px" }}>
              ⚡ Simulated
            </span>
          )}
          {wsStatus === "connecting" && (
            <span style={{ fontSize: 11, color: "#58a6ff", border: "1px solid #58a6ff30", borderRadius: 6, padding: "3px 10px" }}>
              Connecting…
            </span>
          )}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 16px" }}>

        {/* Summary cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px,1fr))", gap: 12, marginBottom: 20 }}>
          {[
            { label: "Portfolio Value", value: fmtUSD(stats.totalValue), sub: `Cost basis ${fmtUSD(stats.totalCost)}`, color: "#58a6ff" },
            { label: "Total P&L", value: fmtUSD(stats.totalPnl), sub: pct(stats.totalPnlPct), color: stats.totalPnl >= 0 ? "#3fb950" : "#f85149" },
            { label: "24h Gainers", value: `${positiveDay}/${stats.rows.length}`, sub: "coins up today", color: "#3fb950" },
            { label: "Holdings", value: String(stats.rows.length), sub: "assets tracked", color: "#bc8cff" },
          ].map((card) => (
            <div key={card.label} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.05em" }}>{card.label}</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: card.color, marginTop: 4 }}>{card.value}</div>
              <div style={{ fontSize: 11, color: "#8b949e", marginTop: 2 }}>{card.sub}</div>
            </div>
          ))}
        </div>

        {/* Allocation */}
        <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "16px", marginBottom: 20 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>
            Allocation
          </div>
          <AllocationBar holdings={holdings} prices={prices} />
        </div>

        {/* Holdings table */}
        <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ padding: "14px 16px", borderBottom: "1px solid #30363d", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Holdings
            </span>
            <span style={{ fontSize: 11, color: "#8b949e" }}>Click any row to edit</span>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #30363d" }}>
                  {["Asset", "Price", "24h", "Holdings", "Value", "P&L", "7d Chart", ""].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "8px 14px", color: "#8b949e", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stats.rows.map((row) => {
                  const tickColor = row.lp?.tick === "up" ? "#3fb950" : row.lp?.tick === "down" ? "#f85149" : "#8b949e";
                  return (
                    <tr
                      key={row.id}
                      style={{ borderBottom: "1px solid #21262d", cursor: "pointer", transition: "background 0.15s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#1c2330")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      onClick={() => setEditTarget(row)}
                    >
                      <td style={{ padding: "10px 14px", whiteSpace: "nowrap" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div style={{ width: 32, height: 32, borderRadius: 8, background: `${row.color}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: row.color, fontWeight: 700 }}>
                            {row.emoji}
                          </div>
                          <div>
                            <div style={{ fontWeight: 600, color: "#e6edf3" }}>{row.symbol}</div>
                            <div style={{ fontSize: 11, color: "#8b949e" }}>{row.name}</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: "10px 14px", fontWeight: 600, color: tickColor, whiteSpace: "nowrap" }}>
                        ${fmt(row.price)}
                      </td>
                      <td style={{ padding: "10px 14px", whiteSpace: "nowrap", color: (row.lp?.change24h ?? 0) >= 0 ? "#3fb950" : "#f85149", fontWeight: 600 }}>
                        {pct(row.lp?.change24h ?? 0)}
                      </td>
                      <td style={{ padding: "10px 14px", color: "#e6edf3", whiteSpace: "nowrap" }}>
                        {fmt(row.amount, 4)} {row.symbol}
                      </td>
                      <td style={{ padding: "10px 14px", fontWeight: 600, color: "#e6edf3", whiteSpace: "nowrap" }}>
                        {fmtUSD(row.value)}
                      </td>
                      <td style={{ padding: "10px 14px", whiteSpace: "nowrap" }}>
                        <div style={{ color: row.pnlAbs >= 0 ? "#3fb950" : "#f85149", fontWeight: 600 }}>
                          {row.pnlAbs >= 0 ? "+" : ""}
                          {fmtUSD(row.pnlAbs)}
                        </div>
                        <div style={{ fontSize: 11, color: "#8b949e" }}>
                          {pct(row.pnlPct)}
                        </div>
                      </td>
                      <td style={{ padding: "10px 14px" }}>
                        <Sparkline
                          data={row.lp?.sparkline ?? []}
                          color={(row.lp?.change24h ?? 0) >= 0 ? "#3fb950" : "#f85149"}
                        />
                      </td>
                      <td style={{ padding: "10px 14px" }}>
                        <button
                          style={{ background: "#21262d", border: "1px solid #30363d", borderRadius: 6, padding: "4px 10px", color: "#8b949e", fontSize: 11, cursor: "pointer" }}
                          onClick={(e) => { e.stopPropagation(); setEditTarget(row); }}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: 24, fontSize: 11, color: "#8b949e" }}>
          {wsStatus === "live" ? "Prices via Binance WebSocket — real-time" : "Prices simulated — WebSocket unavailable in this environment"}
          {" · "}Sprint 50 · degen0x
        </div>
      </div>

      {/* Edit modal */}
      {editTarget && (
        <EditModal
          holding={editTarget}
          onSave={(updated) => {
            setHoldings((prev) => prev.map((h) => (h.id === updated.id ? updated : h)));
            setEditTarget(null);
          }}
          onClose={() => setEditTarget(null)}
        />
      )}

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>
    </div>
  );
}
