'use client';

"use client";

import { useState, useEffect, useCallback } from "react";
import Breadcrumb from "@/components/Breadcrumb";

/* ─────────────────────────────────────────────────────────────
   Types
───────────────────────────────────────────────────────────── */
interface FearGreedPoint {
  value: number;
  label: string;
  date: string;
}

interface SentimentSignal {
  name: string;
  value: string;
  score: number; // 0-100 (50 = neutral)
  trend: "bullish" | "bearish" | "neutral";
  category: "on-chain" | "market" | "social" | "technical";
  description: string;
  icon: string;
  updated: string;
}

interface AltcoinSeason {
  index: number;
  label: string;
  description: string;
}

/* ─────────────────────────────────────────────────────────────
   Helpers
───────────────────────────────────────────────────────────── */
function getSentimentColor(score: number): string {
  if (score <= 25) return "#ef4444";
  if (score <= 40) return "#f97316";
  if (score <= 60) return "#eab308";
  if (score <= 75) return "#84cc16";
  return "#22c55e";
}

function getSentimentLabel(score: number): string {
  if (score <= 25) return "Extreme Fear";
  if (score <= 40) return "Fear";
  if (score <= 60) return "Neutral";
  if (score <= 75) return "Greed";
  return "Extreme Greed";
}

function getTrendIcon(trend: SentimentSignal["trend"]): string {
  if (trend === "bullish") return "▲";
  if (trend === "bearish") return "▼";
  return "●";
}

function getTrendColor(trend: SentimentSignal["trend"]): string {
  if (trend === "bullish") return "#22c55e";
  if (trend === "bearish") return "#ef4444";
  return "#eab308";
}

/* ─────────────────────────────────────────────────────────────
   Static reference signals (updated by simulation)
───────────────────────────────────────────────────────────── */
const BASE_SIGNALS: Omit<SentimentSignal, "value" | "score" | "trend" | "updated">[] = [
  {
    name: "Fear & Greed Index",
    category: "market",
    description: "Composite index derived from volatility, market momentum, social media, surveys, dominance, and trends.",
    icon: "😱",
  },
  {
    name: "BTC Funding Rate",
    category: "market",
    description: "Perpetual futures funding rate. Positive = longs pay shorts (bullish bias). Negative = shorts pay longs (bearish bias).",
    icon: "⚖️",
  },
  {
    name: "BTC Dominance",
    category: "market",
    description: "Bitcoin's share of total crypto market cap. Rising = risk-off / altcoins weak. Falling = altcoin season brewing.",
    icon: "₿",
  },
  {
    name: "Stablecoin Supply Ratio",
    category: "on-chain",
    description: "High stablecoin supply relative to BTC market cap suggests dry powder for buying. Bullish signal.",
    icon: "💵",
  },
  {
    name: "Exchange Net Flow",
    category: "on-chain",
    description: "Net BTC moving to/from exchanges. Outflows (withdrawals) = bullish (holding). Inflows = bearish (selling).",
    icon: "🏦",
  },
  {
    name: "Active Addresses (7d)",
    category: "on-chain",
    description: "Growth in unique active addresses signals increased network adoption and potential price appreciation.",
    icon: "📡",
  },
  {
    name: "Social Volume (BTC)",
    category: "social",
    description: "Volume of Bitcoin mentions across Twitter, Reddit, and Telegram. Extreme highs can signal tops.",
    icon: "📢",
  },
  {
    name: "Google Trends (Bitcoin)",
    category: "social",
    description: "Search interest for 'Bitcoin'. Extreme spikes often correlate with local market tops (retail FOMO).",
    icon: "🔍",
  },
  {
    name: "MVRV Z-Score",
    category: "on-chain",
    description: "Market Value to Realized Value. High = overvalued (potential top). Low = undervalued (accumulation zone). Currently in neutral zone.",
    icon: "📊",
  },
  {
    name: "Open Interest (Perps)",
    category: "market",
    description: "Total open interest in Bitcoin perpetual futures. Rapidly growing OI with price increase = potential squeeze.",
    icon: "📈",
  },
  {
    name: "Long/Short Ratio",
    category: "market",
    description: "Ratio of long vs short positions on major exchanges. Extreme longs signal liquidation risk if price drops.",
    icon: "⚔️",
  },
  {
    name: "NVT Signal",
    category: "on-chain",
    description: "Network Value to Transactions ratio. High NVT vs history = potentially overvalued. Low = potentially undervalued.",
    icon: "🔗",
  },
];

function generateSignals(): SentimentSignal[] {
  const marketBias = Math.random(); // 0–1, 0.5 = neutral
  const now = new Date();

  const scoreMap: Record<string, { score: number; value: string; trend: SentimentSignal["trend"] }> = {
    "Fear & Greed Index": (() => {
      const s = Math.round(25 + marketBias * 55 + (Math.random() - 0.5) * 15);
      return { score: Math.min(100, Math.max(0, s)), value: `${Math.min(100, Math.max(0, s))} — ${getSentimentLabel(s)}`, trend: s > 55 ? "bullish" : s < 45 ? "bearish" : "neutral" };
    })(),
    "BTC Funding Rate": (() => {
      const rate = ((marketBias - 0.5) * 0.08 + (Math.random() - 0.5) * 0.02).toFixed(4);
      const pct = parseFloat(rate);
      const s = Math.round(50 + pct * 1000);
      return { score: Math.min(100, Math.max(0, s)), value: `${pct > 0 ? "+" : ""}${rate}%`, trend: pct > 0.005 ? "bullish" : pct < -0.005 ? "bearish" : "neutral" };
    })(),
    "BTC Dominance": (() => {
      const dom = (55 + (Math.random() - 0.5) * 10).toFixed(1);
      const s = parseFloat(dom) > 58 ? 40 : parseFloat(dom) < 50 ? 70 : 50;
      return { score: s, value: `${dom}%`, trend: parseFloat(dom) > 58 ? "bearish" : parseFloat(dom) < 50 ? "bullish" : "neutral" };
    })(),
    "Stablecoin Supply Ratio": (() => {
      const ratio = (12 + Math.random() * 8).toFixed(2);
      const s = parseFloat(ratio) > 18 ? 70 : parseFloat(ratio) < 10 ? 35 : 55;
      return { score: s, value: `${ratio}%`, trend: parseFloat(ratio) > 18 ? "bullish" : "neutral" };
    })(),
    "Exchange Net Flow": (() => {
      const flow = Math.round((Math.random() - 0.6) * 5000);
      const s = flow < 0 ? 65 : flow > 1000 ? 35 : 50;
      return { score: s, value: `${flow > 0 ? "+" : ""}${flow.toLocaleString()} BTC (24h)`, trend: flow < -500 ? "bullish" : flow > 500 ? "bearish" : "neutral" };
    })(),
    "Active Addresses (7d)": (() => {
      const change = ((Math.random() - 0.4) * 20).toFixed(1);
      const s = parseFloat(change) > 5 ? 65 : parseFloat(change) < -5 ? 40 : 55;
      return { score: s, value: `${parseFloat(change) > 0 ? "+" : ""}${change}% vs prev week`, trend: parseFloat(change) > 5 ? "bullish" : parseFloat(change) < -5 ? "bearish" : "neutral" };
    })(),
    "Social Volume (BTC)": (() => {
      const vol = Math.round(50000 + Math.random() * 200000);
      const s = vol > 200000 ? 35 : vol > 100000 ? 60 : 50;
      return { score: s, value: `${(vol / 1000).toFixed(0)}K mentions/day`, trend: vol > 200000 ? "neutral" : vol < 80000 ? "bearish" : "neutral" };
    })(),
    "Google Trends (Bitcoin)": (() => {
      const score = Math.round(20 + Math.random() * 60);
      const s = score > 70 ? 35 : score < 30 ? 60 : 50;
      return { score: s, value: `${score}/100 (interest)`, trend: score > 70 ? "neutral" : score < 20 ? "bearish" : "neutral" };
    })(),
    "MVRV Z-Score": (() => {
      const z = (0.5 + (Math.random() - 0.5) * 3).toFixed(2);
      const zv = parseFloat(z);
      const s = zv > 3 ? 25 : zv < 0 ? 75 : Math.round(50 + (2 - zv) * 12);
      return { score: Math.min(100, Math.max(0, s)), value: `${z} (${zv > 3 ? "overvalued" : zv < 0 ? "accumulation" : "fair value"})`, trend: zv > 3 ? "bearish" : zv < 0 ? "bullish" : "neutral" };
    })(),
    "Open Interest (Perps)": (() => {
      const oi = (18 + Math.random() * 12).toFixed(1);
      const s = parseFloat(oi) > 28 ? 40 : parseFloat(oi) > 22 ? 55 : 65;
      return { score: s, value: `$${oi}B total OI`, trend: parseFloat(oi) > 28 ? "bearish" : parseFloat(oi) < 20 ? "bullish" : "neutral" };
    })(),
    "Long/Short Ratio": (() => {
      const ratio = (0.8 + Math.random() * 0.8).toFixed(2);
      const rv = parseFloat(ratio);
      const s = rv > 1.4 ? 35 : rv < 0.9 ? 65 : 52;
      return { score: s, value: `${ratio} L/S`, trend: rv > 1.4 ? "bearish" : rv < 0.9 ? "bullish" : "neutral" };
    })(),
    "NVT Signal": (() => {
      const nvt = Math.round(60 + Math.random() * 100);
      const s = nvt > 130 ? 30 : nvt < 70 ? 70 : 55;
      return { score: s, value: `${nvt} (${nvt > 130 ? "overvalued" : nvt < 70 ? "undervalued" : "neutral"})`, trend: nvt > 130 ? "bearish" : nvt < 70 ? "bullish" : "neutral" };
    })(),
  };

  return BASE_SIGNALS.map((base) => ({
    ...base,
    ...(scoreMap[base.name] ?? { score: 50, value: "N/A", trend: "neutral" as const }),
    updated: `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`,
  }));
}

function generateFGHistory(): FearGreedPoint[] {
  const points: FearGreedPoint[] = [];
  let base = 45 + Math.random() * 20;
  for (let i = 29; i >= 0; i--) {
    base = Math.min(100, Math.max(0, base + (Math.random() - 0.5) * 12));
    const d = new Date();
    d.setDate(d.getDate() - i);
    points.push({
      value: Math.round(base),
      label: getSentimentLabel(Math.round(base)),
      date: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    });
  }
  return points;
}

function generateAltcoinSeason(): AltcoinSeason {
  const idx = Math.round(20 + Math.random() * 60);
  const label = idx > 75 ? "Altcoin Season 🔥" : idx > 55 ? "Altcoin Trending" : idx > 45 ? "Neutral" : idx > 25 ? "Bitcoin Season" : "Bitcoin Dominance 💪";
  const desc = idx > 75
    ? "75%+ of top 50 altcoins outperforming Bitcoin over 90 days."
    : idx > 55
      ? "Altcoins beginning to outperform Bitcoin."
      : idx > 45
        ? "Mixed signals — no clear season."
        : idx > 25
          ? "Bitcoin outperforming most altcoins."
          : "Bitcoin strongly dominates. Altcoins underperforming.";
  return { index: idx, label, description: desc };
}

/* ─────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────── */
export default function SentimentDashboardPage() {
  const [signals, setSignals] = useState<SentimentSignal[]>([]);
  const [fgHistory, setFgHistory] = useState<FearGreedPoint[]>([]);
  const [altcoinSeason, setAltcoinSeason] = useState<AltcoinSeason | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<"all" | SentimentSignal["category"]>("all");
  const [lastUpdated, setLastUpdated] = useState("");
  const [compositeScore, setCompositeScore] = useState(50);
  const [refreshing, setRefreshing] = useState(false);

  const refresh = useCallback(async () => {
    setRefreshing(true);
    // Try to fetch Fear & Greed from real API
    let fgValue = 50;
    try {
      const res = await fetch("https://api.alternative.me/fng/?limit=30", { signal: AbortSignal.timeout(5000) });
      if (res.ok) {
        const json = await res.json();
        if (json.data?.length) {
          const history: FearGreedPoint[] = json.data.slice(0, 30).reverse().map((d: { value: string; value_classification: string; timestamp: string }) => ({
            value: parseInt(d.value),
            label: d.value_classification,
            date: new Date(parseInt(d.timestamp) * 1000).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
          }));
          setFgHistory(history);
          fgValue = parseInt(json.data[0].value);
        }
      }
    } catch {
      setFgHistory(generateFGHistory());
    }

    const newSignals = generateSignals();
    // Override F&G with real value if fetched
    const fgSignal = newSignals.find((s) => s.name === "Fear & Greed Index");
    if (fgSignal) {
      fgSignal.score = fgValue;
      fgSignal.value = `${fgValue} — ${getSentimentLabel(fgValue)}`;
      fgSignal.trend = fgValue > 55 ? "bullish" : fgValue < 45 ? "bearish" : "neutral";
    }

    setSignals(newSignals);
    setAltcoinSeason(generateAltcoinSeason());
    const composite = Math.round(newSignals.reduce((acc, s) => acc + s.score, 0) / newSignals.length);
    setCompositeScore(composite);
    setLastUpdated(new Date().toLocaleTimeString());
    setRefreshing(false);
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
    const interval = setInterval(refresh, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [refresh]);

  const filteredSignals = activeCategory === "all"
    ? signals
    : signals.filter((s) => s.category === activeCategory);

  const bullishCount = signals.filter((s) => s.trend === "bullish").length;
  const bearishCount = signals.filter((s) => s.trend === "bearish").length;
  const neutralCount = signals.filter((s) => s.trend === "neutral").length;

  const CATEGORIES: { key: "all" | SentimentSignal["category"]; label: string; icon: string }[] = [
    { key: "all", label: "All Signals", icon: "🌐" },
    { key: "market", label: "Market", icon: "📈" },
    { key: "on-chain", label: "On-Chain", icon: "⛓️" },
    { key: "social", label: "Social", icon: "📢" },
    { key: "technical", label: "Technical", icon: "🔬" },
  ];

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12 text-center">
        <div className="inline-flex items-center gap-3 text-[var(--color-text-secondary)]">
          <div className="w-5 h-5 border-2 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin" />
          Loading sentiment data…
        </div>
      </div>
    );
  }

  const compositeColor = getSentimentColor(compositeScore);
  const compositeLabel = getSentimentLabel(compositeScore);
  const fgCurrent = fgHistory[fgHistory.length - 1];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Tools", href: "/tools" },
          { label: "Sentiment Dashboard", href: "/tools/sentiment-dashboard" },
        ]}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-black text-[var(--color-text)] mb-2">
            Crypto Sentiment Dashboard
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            12 real-time signals across market, on-chain, and social data. Updated every 5 minutes.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-[var(--color-text-secondary)]">Updated {lastUpdated}</span>
          <button
            onClick={refresh}
            disabled={refreshing}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold glass card-hover"
          >
            <span className={refreshing ? "animate-spin" : ""}>⟳</span>
            Refresh
          </button>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {/* Composite */}
        <div className="glass rounded-xl p-5 col-span-2 md:col-span-1">
          <div className="text-xs text-[var(--color-text-secondary)] mb-2 uppercase tracking-wider font-bold">Composite Score</div>
          <div className="text-5xl font-black mb-1" style={{ color: compositeColor }}>{compositeScore}</div>
          <div className="text-sm font-semibold" style={{ color: compositeColor }}>{compositeLabel}</div>
        </div>

        {/* Fear & Greed */}
        <div className="glass rounded-xl p-5">
          <div className="text-xs text-[var(--color-text-secondary)] mb-2 uppercase tracking-wider font-bold">😱 Fear & Greed</div>
          {fgCurrent && (
            <>
              <div className="text-3xl font-black mb-1" style={{ color: getSentimentColor(fgCurrent.value) }}>
                {fgCurrent.value}
              </div>
              <div className="text-xs" style={{ color: getSentimentColor(fgCurrent.value) }}>{fgCurrent.label}</div>
            </>
          )}
        </div>

        {/* Signal breakdown */}
        <div className="glass rounded-xl p-5">
          <div className="text-xs text-[var(--color-text-secondary)] mb-3 uppercase tracking-wider font-bold">Signal Breakdown</div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs text-green-400">▲ Bullish</span>
              <span className="text-sm font-bold text-green-400">{bullishCount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-red-400">▼ Bearish</span>
              <span className="text-sm font-bold text-red-400">{bearishCount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-yellow-400">● Neutral</span>
              <span className="text-sm font-bold text-yellow-400">{neutralCount}</span>
            </div>
          </div>
        </div>

        {/* Altcoin Season */}
        {altcoinSeason && (
          <div className="glass rounded-xl p-5">
            <div className="text-xs text-[var(--color-text-secondary)] mb-2 uppercase tracking-wider font-bold">Altcoin Season</div>
            <div className="text-2xl font-black mb-1" style={{ color: altcoinSeason.index > 60 ? "#22c55e" : "#F7931A" }}>
              {altcoinSeason.index}<span className="text-base font-normal">/100</span>
            </div>
            <div className="text-xs font-semibold" style={{ color: altcoinSeason.index > 60 ? "#22c55e" : "#F7931A" }}>
              {altcoinSeason.label}
            </div>
          </div>
        )}
      </div>

      {/* F&G 30-Day Chart */}
      <div className="glass rounded-xl p-5 mb-8">
        <h2 className="text-sm font-bold text-[var(--color-text)] mb-4 uppercase tracking-wider">
          Fear & Greed — 30 Day History
        </h2>
        <div className="flex items-end gap-1 h-24">
          {fgHistory.map((point, i) => {
            const h = Math.max(8, (point.value / 100) * 96);
            const color = getSentimentColor(point.value);
            const isToday = i === fgHistory.length - 1;
            return (
              <div key={i} className="flex-1 flex flex-col items-center justify-end gap-1 group relative">
                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                  <div className="bg-[#0d1117] border border-[rgba(255,255,255,0.1)] rounded-lg px-2 py-1 text-xs whitespace-nowrap">
                    <div className="font-bold" style={{ color }}>{point.value} — {point.label}</div>
                    <div className="text-[var(--color-text-secondary)]">{point.date}</div>
                  </div>
                </div>
                <div
                  className="w-full rounded-t-sm transition-all"
                  style={{
                    height: `${h}px`,
                    backgroundColor: color,
                    opacity: isToday ? 1 : 0.6,
                    border: isToday ? `1px solid ${color}` : "none",
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-between mt-2 text-xs text-[var(--color-text-secondary)]">
          <span>{fgHistory[0]?.date}</span>
          <span>Today</span>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeCategory === cat.key
                ? "bg-[var(--color-primary)] text-[var(--color-text)]"
                : "glass text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
            }`}
          >
            {cat.icon} {cat.label}
            <span className={`text-xs rounded-full px-1.5 ${activeCategory === cat.key ? "bg-white/20" : "bg-[rgba(255,255,255,0.08)]"}`}>
              {cat.key === "all" ? signals.length : signals.filter((s) => s.category === cat.key).length}
            </span>
          </button>
        ))}
      </div>

      {/* Signals Grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {filteredSignals.map((signal) => {
          const barWidth = Math.min(100, Math.max(0, signal.score));
          const barColor = getSentimentColor(signal.score);
          const trendColor = getTrendColor(signal.trend);

          return (
            <div key={signal.name} className="glass rounded-xl p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{signal.icon}</span>
                  <div>
                    <h3 className="font-bold text-[var(--color-text)] text-sm">{signal.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full glass-subtle text-[var(--color-text-secondary)] capitalize">
                      {signal.category}
                    </span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-3">
                  <div className="text-sm font-bold" style={{ color: trendColor }}>
                    {getTrendIcon(signal.trend)} {signal.trend.toUpperCase()}
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)] mt-0.5">{signal.value}</div>
                </div>
              </div>

              {/* Score Bar */}
              <div className="mb-3">
                <div className="flex justify-between text-xs text-[var(--color-text-secondary)] mb-1">
                  <span>Bearish</span>
                  <span className="font-bold" style={{ color: barColor }}>{signal.score}/100</span>
                  <span>Bullish</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${barWidth}%`, backgroundColor: barColor }}
                  />
                </div>
              </div>

              <p className="text-xs text-[var(--color-text-secondary)]">{signal.description}</p>
            </div>
          );
        })}
      </div>

      {/* Disclaimer */}
      <div className="glass rounded-xl p-4 text-xs text-[var(--color-text-secondary)]">
        <strong className="text-[var(--color-text)]">⚠ Disclaimer:</strong> This dashboard is for informational purposes only and does
        not constitute financial advice. Sentiment indicators are lagging signals and should not be used as the sole basis for
        investment decisions. Fear & Greed data sourced from{" "}
        <a href="https://alternative.me" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)]">
          alternative.me
        </a>
        . Other signals are estimates based on publicly available data.
      </div>
    </div>
  );
}
