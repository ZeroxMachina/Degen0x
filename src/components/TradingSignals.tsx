"use client";

import { useState, useMemo } from "react";

interface Signal {
  id: string;
  token: string;
  pair: string;
  type: "bullish" | "bearish" | "neutral";
  strength: number; // 0-100
  indicator: string;
  timeframe: string;
  price: number;
  targetPrice: number;
  stopLoss: number;
  riskReward: number;
  confidence: number;
  chain: string;
  timestamp: number;
  source: string;
  description: string;
  tags: string[];
}

const MOCK_SIGNALS: Signal[] = [
  {
    id: "s1", token: "SOL", pair: "SOL/USDT", type: "bullish", strength: 87,
    indicator: "Golden Cross (50/200 MA)", timeframe: "4H", price: 187.65, targetPrice: 215.00,
    stopLoss: 175.00, riskReward: 2.17, confidence: 82, chain: "SOL",
    timestamp: Date.now() - 300000, source: "Technical Analysis",
    description: "50-day MA crossed above 200-day MA with increasing volume. RSI at 62, room to run. Support at $175 holding strong.",
    tags: ["Momentum", "Trend Following", "High Volume"],
  },
  {
    id: "s2", token: "ETH", pair: "ETH/USDT", type: "bullish", strength: 74,
    indicator: "Ascending Triangle Breakout", timeframe: "1D", price: 3845.20, targetPrice: 4200.00,
    stopLoss: 3650.00, riskReward: 1.82, confidence: 76, chain: "ETH",
    timestamp: Date.now() - 600000, source: "Chart Pattern",
    description: "Ascending triangle forming since Feb. Resistance at $3,900 being tested. Break above could target $4,200.",
    tags: ["Pattern", "Breakout", "Resistance Test"],
  },
  {
    id: "s3", token: "PEPE", pair: "PEPE/USDT", type: "bullish", strength: 91,
    indicator: "Whale Accumulation + Social Spike", timeframe: "1H", price: 0.00001234, targetPrice: 0.00001800,
    stopLoss: 0.00001050, riskReward: 3.08, confidence: 65, chain: "ETH",
    timestamp: Date.now() - 180000, source: "On-Chain + Social",
    description: "3 whale wallets accumulated 500B+ PEPE in last 6 hours. Social mentions up 340%. Historically correlates with 40-60% pumps.",
    tags: ["Whale Alert", "Social Spike", "Meme"],
  },
  {
    id: "s4", token: "ARB", pair: "ARB/USDT", type: "bearish", strength: 68,
    indicator: "Bearish Divergence (RSI)", timeframe: "4H", price: 1.42, targetPrice: 1.15,
    stopLoss: 1.55, riskReward: 2.08, confidence: 71, chain: "ARB",
    timestamp: Date.now() - 1200000, source: "Technical Analysis",
    description: "Price making higher highs but RSI making lower highs. Bearish divergence on 4H. Volume declining on upswings.",
    tags: ["Divergence", "Overbought", "Reversal"],
  },
  {
    id: "s5", token: "JUP", pair: "JUP/USDT", type: "bullish", strength: 79,
    indicator: "Support Bounce + Volume Surge", timeframe: "4H", price: 1.234, targetPrice: 1.580,
    stopLoss: 1.100, riskReward: 2.58, confidence: 74, chain: "SOL",
    timestamp: Date.now() - 900000, source: "Technical + On-Chain",
    description: "Bounced perfectly off $1.10 support with 3x average volume. TVL in Jupiter protocols increasing. Launchpad announcement pending.",
    tags: ["Support Bounce", "Catalyst", "DeFi"],
  },
  {
    id: "s6", token: "LINK", pair: "LINK/USDT", type: "neutral", strength: 52,
    indicator: "Consolidation Range", timeframe: "1D", price: 18.92, targetPrice: 22.50,
    stopLoss: 17.00, riskReward: 1.87, confidence: 58, chain: "ETH",
    timestamp: Date.now() - 2400000, source: "Technical Analysis",
    description: "Trading in $17-$20 range for 2 weeks. Waiting for breakout direction. CCIP adoption metrics growing but not yet reflected in price.",
    tags: ["Range", "Consolidation", "Waiting"],
  },
  {
    id: "s7", token: "AVAX", pair: "AVAX/USDT", type: "bearish", strength: 63,
    indicator: "Death Cross Approaching", timeframe: "1D", price: 38.50, targetPrice: 32.00,
    stopLoss: 42.00, riskReward: 1.86, confidence: 67, chain: "AVAX",
    timestamp: Date.now() - 3600000, source: "Technical Analysis",
    description: "50 MA approaching 200 MA from above. If cross occurs, historical data suggests 15-20% further downside. On-chain activity declining.",
    tags: ["Death Cross", "Trend Reversal", "Bearish"],
  },
  {
    id: "s8", token: "AERO", pair: "AERO/USDT", type: "bullish", strength: 83,
    indicator: "TVL Breakout + Fee Revenue", timeframe: "1D", price: 1.89, targetPrice: 2.80,
    stopLoss: 1.55, riskReward: 2.68, confidence: 78, chain: "BASE",
    timestamp: Date.now() - 1800000, source: "Fundamental + On-Chain",
    description: "Aerodrome TVL hit new ATH at $1.2B. Fee revenue 2nd highest on Base. ve(3,3) flywheel accelerating. Base ecosystem expanding.",
    tags: ["Fundamental", "TVL", "Base Ecosystem"],
  },
];

type SignalFilter = "all" | "bullish" | "bearish" | "neutral";
type TimeframeFilter = "all" | "1H" | "4H" | "1D";

export default function TradingSignals() {
  const [typeFilter, setTypeFilter] = useState<SignalFilter>("all");
  const [tfFilter, setTfFilter] = useState<TimeframeFilter>("all");
  const [minConfidence, setMinConfidence] = useState(0);
  const [expandedSignal, setExpandedSignal] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let signals = [...MOCK_SIGNALS];
    if (typeFilter !== "all") signals = signals.filter(s => s.type === typeFilter);
    if (tfFilter !== "all") signals = signals.filter(s => s.timeframe === tfFilter);
    signals = signals.filter(s => s.confidence >= minConfidence);
    return signals.sort((a, b) => b.strength - a.strength);
  }, [typeFilter, tfFilter, minConfidence]);

  const StrengthBar = ({ value, type }: { value: number; type: string }) => {
    const color = type === "bullish" ? "bg-green-400" : type === "bearish" ? "bg-red-400" : "bg-yellow-400";
    return (
      <div className="w-full h-1.5 bg-[var(--color-bg)] rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color} transition-all`} style={{ width: `${value}%` }} />
      </div>
    );
  };

  const typeColors = {
    bullish: "text-green-400 bg-green-400/10 border-green-400/20",
    bearish: "text-red-400 bg-red-400/10 border-red-400/20",
    neutral: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  };

  const timeAgo = (ts: number) => {
    const diff = Date.now() - ts;
    if (diff < 60000) return "just now";
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  // Stats
  const bullishCount = MOCK_SIGNALS.filter(s => s.type === "bullish").length;
  const bearishCount = MOCK_SIGNALS.filter(s => s.type === "bearish").length;
  const avgConfidence = Math.round(MOCK_SIGNALS.reduce((s, sig) => s + sig.confidence, 0) / MOCK_SIGNALS.length);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Trading Signals</h1>
          <p className="text-[var(--color-text-secondary)] mt-1">
            AI-powered signals combining technical analysis, on-chain data, and social sentiment.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-green-400 font-semibold">{MOCK_SIGNALS.length} Active Signals</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-3">
          <div className="text-xs text-[var(--color-text-secondary)]">Bullish Signals</div>
          <div className="text-2xl font-bold text-green-400">{bullishCount}</div>
        </div>
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-3">
          <div className="text-xs text-[var(--color-text-secondary)]">Bearish Signals</div>
          <div className="text-2xl font-bold text-red-400">{bearishCount}</div>
        </div>
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-3">
          <div className="text-xs text-[var(--color-text-secondary)]">Avg Confidence</div>
          <div className="text-2xl font-bold text-indigo-400">{avgConfidence}%</div>
        </div>
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-3">
          <div className="text-xs text-[var(--color-text-secondary)]">Market Sentiment</div>
          <div className="text-2xl font-bold text-green-400">
            {bullishCount > bearishCount ? "Bullish" : bullishCount < bearishCount ? "Bearish" : "Neutral"}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex gap-2">
          {(["all", "bullish", "bearish", "neutral"] as SignalFilter[]).map(f => (
            <button
              key={f}
              onClick={() => setTypeFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                typeFilter === f
                  ? "bg-indigo-500/20 text-indigo-400 border-indigo-500/40"
                  : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] border-[var(--color-border)]"
              }`}
            >
              {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          {(["all", "1H", "4H", "1D"] as TimeframeFilter[]).map(f => (
            <button
              key={f}
              onClick={() => setTfFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                tfFilter === f
                  ? "bg-indigo-500/20 text-indigo-400 border-indigo-500/40"
                  : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] border-[var(--color-border)]"
              }`}
            >
              {f === "all" ? "All TF" : f}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
          <span>Min Confidence:</span>
          <input
            type="range"
            min={0}
            max={90}
            step={10}
            value={minConfidence}
            onChange={e => setMinConfidence(Number(e.target.value))}
            className="w-24"
          />
          <span className="font-semibold text-[var(--color-text)]">{minConfidence}%</span>
        </div>
      </div>

      {/* Signal Cards */}
      <div className="space-y-3">
        {filtered.map(signal => (
          <div
            key={signal.id}
            className={`bg-[var(--color-surface)] border rounded-xl overflow-hidden transition-colors cursor-pointer ${
              signal.type === "bullish" ? "border-green-500/20 hover:border-green-500/40" :
              signal.type === "bearish" ? "border-red-500/20 hover:border-red-500/40" :
              "border-yellow-500/20 hover:border-yellow-500/40"
            }`}
            onClick={() => setExpandedSignal(expandedSignal === signal.id ? null : signal.id)}
          >
            {/* Main Row */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-2 py-1 rounded-lg border font-bold uppercase ${typeColors[signal.type]}`}>
                    {signal.type}
                  </span>
                  <span className="font-bold text-lg">{signal.token}</span>
                  <span className="text-xs text-[var(--color-text-secondary)]">{signal.pair}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[var(--color-text-secondary)]">{timeAgo(signal.timestamp)}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-[var(--color-bg)] text-[var(--color-text-secondary)]">{signal.timeframe}</span>
                </div>
              </div>

              <div className="text-sm font-semibold mb-2 text-[var(--color-text-secondary)]">
                {signal.indicator}
              </div>

              <div className="flex items-center gap-6 text-sm mb-2">
                <div>
                  <span className="text-[var(--color-text-secondary)] text-xs">Entry</span>
                  <div className="font-mono font-bold">${signal.price < 1 ? signal.price.toFixed(8) : signal.price.toFixed(2)}</div>
                </div>
                <div>
                  <span className="text-[var(--color-text-secondary)] text-xs">Target</span>
                  <div className="font-mono font-bold text-green-400">
                    ${signal.targetPrice < 1 ? signal.targetPrice.toFixed(8) : signal.targetPrice.toFixed(2)}
                  </div>
                </div>
                <div>
                  <span className="text-[var(--color-text-secondary)] text-xs">Stop Loss</span>
                  <div className="font-mono font-bold text-red-400">
                    ${signal.stopLoss < 1 ? signal.stopLoss.toFixed(8) : signal.stopLoss.toFixed(2)}
                  </div>
                </div>
                <div>
                  <span className="text-[var(--color-text-secondary)] text-xs">R:R</span>
                  <div className="font-mono font-bold text-indigo-400">{signal.riskReward.toFixed(2)}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex items-center justify-between text-[10px] mb-1">
                    <span className="text-[var(--color-text-secondary)]">Strength</span>
                    <span className="font-semibold">{signal.strength}%</span>
                  </div>
                  <StrengthBar value={signal.strength} type={signal.type} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between text-[10px] mb-1">
                    <span className="text-[var(--color-text-secondary)]">Confidence</span>
                    <span className="font-semibold">{signal.confidence}%</span>
                  </div>
                  <StrengthBar value={signal.confidence} type={signal.type} />
                </div>
              </div>
            </div>

            {/* Expanded Details */}
            {expandedSignal === signal.id && (
              <div className="border-t border-[var(--color-border)] p-4 bg-[var(--color-bg)]">
                <p className="text-sm text-[var(--color-text-secondary)] mb-3">{signal.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {signal.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
                  <span>Source: {signal.source}</span>
                  <span>Chain: {signal.chain}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-lg p-3 text-xs text-yellow-400/80">
        Trading signals are for informational purposes only and do not constitute financial advice. Always do your own research (DYOR) and never invest more than you can afford to lose.
      </div>
    </div>
  );
}
