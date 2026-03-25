"use client";

import { useState, useEffect, useCallback } from "react";

/* ─── Types ─────────────────────────────────────────────────── */
interface PortfolioAsset {
  id: string;
  symbol: string;
  name: string;
  icon: string;
  quantity: number;
  avgBuyPrice: number;
  currentPrice: number;
  color: string;
  chain: string;
}

interface PriceHistory {
  time: string;
  value: number;
}

/* ─── Mock prices (in prod: fetch from CoinGecko/CoinCap) ─────── */
const MOCK_ASSETS: PortfolioAsset[] = [
  { id: "bitcoin", symbol: "BTC", name: "Bitcoin", icon: "₿", quantity: 0.42, avgBuyPrice: 38000, currentPrice: 82450, color: "#f0883e", chain: "Bitcoin" },
  { id: "ethereum", symbol: "ETH", name: "Ethereum", icon: "Ξ", quantity: 3.5, avgBuyPrice: 2100, currentPrice: 3780, color: "#58a6ff", chain: "Ethereum" },
  { id: "solana", symbol: "SOL", name: "Solana", icon: "◎", quantity: 45, avgBuyPrice: 78, currentPrice: 183, color: "#9945ff", chain: "Solana" },
  { id: "arbitrum", symbol: "ARB", name: "Arbitrum", icon: "🔵", quantity: 2400, avgBuyPrice: 0.85, currentPrice: 1.24, color: "#12aaff", chain: "Arbitrum" },
  { id: "optimism", symbol: "OP", name: "Optimism", icon: "🔴", quantity: 800, avgBuyPrice: 1.2, currentPrice: 2.15, color: "#f85149", chain: "Optimism" },
  { id: "chainlink", symbol: "LINK", name: "Chainlink", icon: "🔗", quantity: 120, avgBuyPrice: 8.5, currentPrice: 16.8, color: "#3fb950", chain: "Ethereum" },
];

function generateHistory(baseValue: number, points = 30): PriceHistory[] {
  const arr: PriceHistory[] = [];
  let val = baseValue * 0.7;
  for (let i = 0; i < points; i++) {
    val = val * (1 + (Math.random() - 0.44) * 0.08);
    arr.push({
      time: `D${i + 1}`,
      value: Math.round(val),
    });
  }
  arr[arr.length - 1] = { time: "Now", value: Math.round(baseValue) };
  return arr;
}

/* ─── Mini sparkline ─────────────────────────────────────────── */
function Sparkline({ data, color, w = 80, h = 28 }: { data: number[]; color: string; w?: number; h?: number }) {
  if (!data.length) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / range) * h;
    return `${x},${y}`;
  });
  const polyline = pts.join(" ");
  const firstY = parseFloat(pts[0].split(",")[1]);
  const lastY = parseFloat(pts[pts.length - 1].split(",")[1]);
  const area = `0,${h} ${polyline} ${w},${h}`;

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
      <defs>
        <linearGradient id={`sg-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill={`url(#sg-${color.replace("#", "")})`} />
      <polyline points={polyline} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={(data.length - 1) / (data.length - 1) * w} cy={lastY} r="2.5" fill={color} />
    </svg>
  );
}

/* ─── Donut chart ─────────────────────────────────────────────── */
function DonutChart({ assets }: { assets: PortfolioAsset[] }) {
  const total = assets.reduce((s, a) => s + a.quantity * a.currentPrice, 0);
  const slices: { pct: number; color: string; symbol: string }[] = assets.map((a) => ({
    pct: (a.quantity * a.currentPrice) / total,
    color: a.color,
    symbol: a.symbol,
  }));

  let cumulative = 0;
  const SIZE = 100;
  const R = 40;
  const CX = SIZE / 2;
  const CY = SIZE / 2;
  const STROKE = 14;

  const paths = slices.map((s) => {
    const startAngle = cumulative * 2 * Math.PI - Math.PI / 2;
    const endAngle = (cumulative + s.pct) * 2 * Math.PI - Math.PI / 2;
    cumulative += s.pct;

    const x1 = CX + R * Math.cos(startAngle);
    const y1 = CY + R * Math.sin(startAngle);
    const x2 = CX + R * Math.cos(endAngle);
    const y2 = CY + R * Math.sin(endAngle);
    const largeArc = s.pct > 0.5 ? 1 : 0;

    return {
      d: `M ${x1} ${y1} A ${R} ${R} 0 ${largeArc} 1 ${x2} ${y2}`,
      color: s.color,
      symbol: s.symbol,
    };
  });

  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-full max-w-[120px]">
      <circle cx={CX} cy={CY} r={R} fill="none" stroke="var(--surface2)" strokeWidth={STROKE} />
      {paths.map((p, i) => (
        <path key={i} d={p.d} fill="none" stroke={p.color} strokeWidth={STROKE - 2} strokeLinecap="round" />
      ))}
    </svg>
  );
}

/* ─── Main ────────────────────────────────────────────────────── */
export default function PortfolioTracker({ compact = false }: { compact?: boolean }) {
  const [assets] = useState<PortfolioAsset[]>(MOCK_ASSETS);
  const [selected, setSelected] = useState<PortfolioAsset | null>(null);
  const [tab, setTab] = useState<"holdings" | "performance">("holdings");
  const [showAddModal, setShowAddModal] = useState(false);
  const [historyMap] = useState(() =>
    Object.fromEntries(MOCK_ASSETS.map((a) => [a.id, generateHistory(a.currentPrice)]))
  );

  const totalValue = assets.reduce((s, a) => s + a.quantity * a.currentPrice, 0);
  const totalCost = assets.reduce((s, a) => s + a.quantity * a.avgBuyPrice, 0);
  const totalPnL = totalValue - totalCost;
  const totalPnLPct = (totalPnL / totalCost) * 100;

  const portfolioHistory = generateHistory(totalValue, 30);

  const fmtUSD = (n: number) =>
    n >= 1000
      ? `$${(n / 1000).toFixed(2)}K`
      : `$${n.toFixed(2)}`;

  const fmtPnL = (n: number) => (n >= 0 ? `+${fmtUSD(n)}` : `-${fmtUSD(Math.abs(n))}`);
  const fmtPct = (n: number) => (n >= 0 ? `+${n.toFixed(2)}%` : `${n.toFixed(2)}%`);

  const assetPnL = (a: PortfolioAsset) => (a.currentPrice - a.avgBuyPrice) * a.quantity;
  const assetPnLPct = (a: PortfolioAsset) => ((a.currentPrice - a.avgBuyPrice) / a.avgBuyPrice) * 100;

  if (compact) {
    return (
      <div
        className="rounded-2xl p-4"
        style={{ background: "var(--surface, #161b22)", border: "1px solid var(--border, #30363d)" }}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-bold">📊 Portfolio</div>
          <div className="text-xs font-semibold" style={{ color: totalPnL >= 0 ? "#3fb950" : "#f85149" }}>
            {fmtPct(totalPnLPct)}
          </div>
        </div>
        <div className="text-2xl font-black mb-1">{fmtUSD(totalValue).replace("K", ",000")}</div>
        <div className="text-xs" style={{ color: totalPnL >= 0 ? "#3fb950" : "#f85149" }}>
          {fmtPnL(totalPnL)} all time
        </div>
        <div className="mt-3">
          <Sparkline data={portfolioHistory.map((h) => h.value)} color="#6366f1" w={200} h={40} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--bg, #0d1117)", color: "var(--text, #e6edf3)" }}>
      {/* Header */}
      <div
        className="px-4 py-5 sticky top-0 z-10"
        style={{ background: "var(--surface, #161b22)", borderBottom: "1px solid var(--border, #30363d)" }}
      >
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black">📊 Portfolio Tracker</h1>
            <p className="text-xs mt-0.5" style={{ color: "var(--text2)" }}>Track your crypto PnL</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 rounded-xl text-sm font-semibold text-white flex items-center gap-2"
            style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", boxShadow: "0 3px 12px rgba(99,102,241,0.3)" }}
          >
            + Add Asset
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {/* Summary card */}
        <div
          className="rounded-2xl p-5"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(6,182,212,0.08))",
            border: "1px solid rgba(99,102,241,0.25)",
          }}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--text2)" }}>
                Total Portfolio Value
              </div>
              <div className="text-3xl font-black">
                ${totalValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <div className="flex items-center gap-3 mt-2">
                <span
                  className="text-sm font-bold"
                  style={{ color: totalPnL >= 0 ? "#3fb950" : "#f85149" }}
                >
                  {fmtPnL(totalPnL)}
                </span>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{
                    background: totalPnL >= 0 ? "rgba(63,185,80,0.15)" : "rgba(248,81,73,0.15)",
                    color: totalPnL >= 0 ? "#3fb950" : "#f85149",
                  }}
                >
                  {fmtPct(totalPnLPct)}
                </span>
                <span className="text-xs" style={{ color: "var(--text2)" }}>all time</span>
              </div>
            </div>

            <DonutChart assets={assets} />
          </div>

          {/* Portfolio sparkline */}
          <Sparkline data={portfolioHistory.map((h) => h.value)} color="#6366f1" w={500} h={60} />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            {[
              { label: "Invested", value: `$${totalCost.toLocaleString("en-US", { maximumFractionDigits: 0 })}` },
              { label: "Best asset", value: "SOL +135%" },
              { label: "Assets", value: String(assets.length) },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="text-xs" style={{ color: "var(--text2)" }}>{label}</div>
                <div className="font-bold text-sm mt-0.5">{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div
          className="flex rounded-xl overflow-hidden p-1"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          {(["holdings", "performance"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="flex-1 py-2.5 rounded-lg text-sm font-semibold capitalize transition-all"
              style={{
                background: tab === t ? "var(--border)" : "transparent",
                color: tab === t ? "var(--text)" : "var(--text2)",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Holdings list */}
        {tab === "holdings" && (
          <div className="space-y-2">
            {assets.map((asset) => {
              const value = asset.quantity * asset.currentPrice;
              const pnl = assetPnL(asset);
              const pnlPct = assetPnLPct(asset);
              const hist = historyMap[asset.id];

              return (
                <div
                  key={asset.id}
                  className="rounded-2xl px-4 py-4 cursor-pointer transition-all"
                  style={{
                    background: selected?.id === asset.id ? `${asset.color}10` : "var(--surface)",
                    border: `1px solid ${selected?.id === asset.id ? `${asset.color}40` : "var(--border)"}`,
                  }}
                  onClick={() => setSelected(selected?.id === asset.id ? null : asset)}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-black flex-shrink-0"
                      style={{ background: `${asset.color}20`, color: asset.color }}
                    >
                      {asset.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold">{asset.symbol}</span>
                        <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: "var(--surface2)", color: "var(--text2)" }}>
                          {asset.chain}
                        </span>
                      </div>
                      <div className="text-xs mt-0.5" style={{ color: "var(--text2)" }}>
                        {asset.quantity} {asset.symbol} · avg ${asset.avgBuyPrice.toLocaleString()}
                      </div>
                    </div>

                    <div className="text-center hidden sm:block">
                      <Sparkline data={hist.map((h) => h.value)} color={pnl >= 0 ? "#3fb950" : "#f85149"} w={70} h={24} />
                    </div>

                    <div className="text-right flex-shrink-0">
                      <div className="font-black text-sm">
                        ${value.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                      </div>
                      <div className="text-xs font-semibold" style={{ color: pnl >= 0 ? "#3fb950" : "#f85149" }}>
                        {fmtPct(pnlPct)}
                      </div>
                    </div>
                  </div>

                  {/* Expanded detail */}
                  {selected?.id === asset.id && (
                    <div className="mt-4 pt-4 grid grid-cols-3 gap-3" style={{ borderTop: "1px solid var(--border)" }}>
                      {[
                        { label: "Current Price", value: `$${asset.currentPrice.toLocaleString()}` },
                        { label: "PnL", value: fmtPnL(pnl), color: pnl >= 0 ? "#3fb950" : "#f85149" },
                        { label: "Allocation", value: `${((value / totalValue) * 100).toFixed(1)}%` },
                      ].map(({ label, value: v, color }) => (
                        <div key={label} className="text-center">
                          <div className="text-xs" style={{ color: "var(--text2)" }}>{label}</div>
                          <div className="font-bold text-sm mt-0.5" style={{ color: color || "var(--text)" }}>{v}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Performance view */}
        {tab === "performance" && (
          <div
            className="rounded-2xl p-5 space-y-4"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <h3 className="font-bold">Asset Performance</h3>
            {[...assets].sort((a, b) => assetPnLPct(b) - assetPnLPct(a)).map((asset) => {
              const pnlPct = assetPnLPct(asset);
              const barWidth = Math.min(100, Math.abs(pnlPct) / 2);
              return (
                <div key={asset.id}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <div className="flex items-center gap-2">
                      <span style={{ color: asset.color }}>{asset.icon}</span>
                      <span className="font-semibold">{asset.symbol}</span>
                    </div>
                    <span className="font-bold" style={{ color: pnlPct >= 0 ? "#3fb950" : "#f85149" }}>
                      {fmtPct(pnlPct)}
                    </span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--surface2)" }}>
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${barWidth}%`,
                        background: pnlPct >= 0 ? "linear-gradient(90deg, #3fb950, #39d353)" : "linear-gradient(90deg, #f85149, #f0883e)",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Note */}
        <div
          className="text-xs px-4 py-3 rounded-xl"
          style={{ background: "var(--surface2)", color: "var(--text2)", border: "1px solid var(--border)" }}
        >
          💡 Prices shown are for demo purposes. Connect your wallet for real-time portfolio tracking (coming in Sprint 48).
        </div>
      </div>
    </div>
  );
}
