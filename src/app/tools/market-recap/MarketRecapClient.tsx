"use client";

import { useState } from "react";
import Link from "next/link";

interface MarketEvent {
  time: string;
  title: string;
  description: string;
  impact: "bullish" | "bearish" | "neutral";
  category: "macro" | "defi" | "regulation" | "adoption" | "technical";
}

interface SectorPerformance {
  name: string;
  change: number;
  topCoin: string;
  topCoinChange: number;
}

const TODAYS_EVENTS: MarketEvent[] = [
  { time: "09:30", title: "Bitcoin breaks above $88K resistance", description: "Strong institutional buying pressure pushes BTC past key technical level with high volume.", impact: "bullish", category: "technical" },
  { time: "11:15", title: "Ethereum Pectra upgrade date confirmed", description: "Core devs finalize the timeline for the next major Ethereum protocol upgrade.", impact: "bullish", category: "technical" },
  { time: "13:00", title: "SEC approves new spot ETH ETF applications", description: "Three additional asset managers receive approval for Ethereum spot ETFs.", impact: "bullish", category: "regulation" },
  { time: "14:45", title: "Solana TVL hits new all-time high of $32B", description: "DeFi activity on Solana surges with new lending protocols and DEX volume records.", impact: "bullish", category: "defi" },
  { time: "16:30", title: "Fed signals potential rate hold through Q2", description: "Federal Reserve minutes suggest no rate changes expected until mid-year review.", impact: "neutral", category: "macro" },
  { time: "18:00", title: "Major exchange reports record-low BTC reserves", description: "On-chain data shows exchange BTC balances at multi-year lows, indicating accumulation.", impact: "bullish", category: "adoption" },
];

const SECTORS: SectorPerformance[] = [
  { name: "Layer 1s", change: 3.8, topCoin: "SOL", topCoinChange: 6.3 },
  { name: "DeFi", change: 2.1, topCoin: "AAVE", topCoinChange: 8.7 },
  { name: "Layer 2s", change: 4.2, topCoin: "ARB", topCoinChange: 7.1 },
  { name: "AI & DePIN", change: 5.6, topCoin: "RNDR", topCoinChange: 12.4 },
  { name: "Memecoins", change: -1.3, topCoin: "PEPE", topCoinChange: -3.2 },
  { name: "RWA", change: 3.1, topCoin: "ONDO", topCoinChange: 9.8 },
  { name: "Gaming", change: 1.8, topCoin: "IMX", topCoinChange: 5.4 },
  { name: "Oracles", change: 2.9, topCoin: "LINK", topCoinChange: 4.1 },
];

const TOP_GAINERS = [
  { name: "Render", symbol: "RNDR", change: 12.4, price: 11.82 },
  { name: "Ondo", symbol: "ONDO", change: 9.8, price: 2.34 },
  { name: "Aave", symbol: "AAVE", change: 8.7, price: 295 },
  { name: "Arbitrum", symbol: "ARB", change: 7.1, price: 1.45 },
  { name: "Solana", symbol: "SOL", change: 6.3, price: 195 },
];

const TOP_LOSERS = [
  { name: "Dogecoin", symbol: "DOGE", change: -4.1, price: 0.168 },
  { name: "Pepe", symbol: "PEPE", change: -3.2, price: 0.0000089 },
  { name: "Shiba Inu", symbol: "SHIB", change: -2.8, price: 0.0000235 },
  { name: "Filecoin", symbol: "FIL", change: -1.9, price: 7.82 },
  { name: "Internet Computer", symbol: "ICP", change: -1.5, price: 12.40 },
];

function ImpactBadge({ impact }: { impact: MarketEvent["impact"] }) {
  const styles = {
    bullish: "bg-green-500/15 text-green-400 border-green-500/30",
    bearish: "bg-red-500/15 text-red-400 border-red-500/30",
    neutral: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  };
  return (
    <span className={`text-xs font-bold px-2 py-0.5 rounded-md border ${styles[impact]} uppercase`} role="status" aria-label={`Market impact: ${impact}`}>
      {impact}
    </span>
  );
}

function CategoryBadge({ category }: { category: MarketEvent["category"] }) {
  const styles: Record<string, string> = {
    macro: "bg-blue-500/15 text-blue-400",
    defi: "bg-purple-500/15 text-purple-400",
    regulation: "bg-orange-500/15 text-orange-400",
    adoption: "bg-cyan-500/15 text-cyan-400",
    technical: "bg-indigo-500/15 text-indigo-400",
  };
  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${styles[category]}`} aria-label={`Category: ${category}`}>
      {category}
    </span>
  );
}

export default function MarketRecapClient() {
  const [filter, setFilter] = useState<string>("all");

  const filteredEvents = filter === "all" ? TODAYS_EVENTS : TODAYS_EVENTS.filter((e) => e.category === filter);

  const totalMarketCap = 3.42;
  const btcDominance = 52.3;
  const ethDominance = 17.8;
  const fearGreed = 72;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] mb-8">
        <Link href="/" className="hover:text-[var(--color-text)]">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/tools" className="hover:text-[var(--color-text)]">Tools</Link>
        <span aria-hidden="true">/</span>
        <span className="text-[var(--color-text)]" aria-current="page">Market Recap</span>
      </nav>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">
            Daily Market Recap
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            March 12, 2026 — Everything that moved the crypto market today.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
          <span className="text-[var(--color-text-secondary)]">Updated live</span>
        </div>
      </div>

      {/* Market Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10" role="region" aria-label="Market overview statistics">
        {[
          { label: "Total Market Cap", value: `$${totalMarketCap}T`, sub: "+2.1% today", color: "var(--color-primary)" },
          { label: "BTC Dominance", value: `${btcDominance}%`, sub: "-0.3% today", color: "#f59e0b" },
          { label: "ETH Dominance", value: `${ethDominance}%`, sub: "+0.1% today", color: "#818cf8" },
          { label: "Fear & Greed", value: String(fearGreed), sub: "Greed", color: "#22c55e" },
        ].map((card) => (
          <div key={card.label} className="glass p-5">
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] mb-1">{card.label}</div>
            <div className="text-2xl font-bold" style={{ color: card.color }}>{card.value}</div>
            <div className="text-xs text-[var(--color-text-secondary)] mt-1">{card.sub}</div>
          </div>
        ))}
      </div>

      {/* Two-column: Gainers / Losers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Gainers */}
        <div className="glass p-5" role="region" aria-label="Top gaining cryptocurrencies">
          <h2 className="text-sm font-bold uppercase tracking-wider text-green-400 mb-4">Top Gainers</h2>
          <div className="space-y-3">
            {TOP_GAINERS.map((t) => (
              <div key={t.symbol} className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-[var(--color-text)] text-sm">{t.name}</span>
                  <span className="text-xs text-[var(--color-text-secondary)] ml-2">{t.symbol}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm text-[var(--color-text)] mr-3">${t.price.toLocaleString()}</span>
                  <span className="text-sm font-bold text-green-400" aria-label={`Up ${t.change} percent`}>+{t.change}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Losers */}
        <div className="glass p-5" role="region" aria-label="Top losing cryptocurrencies">
          <h2 className="text-sm font-bold uppercase tracking-wider text-red-400 mb-4">Top Losers</h2>
          <div className="space-y-3">
            {TOP_LOSERS.map((t) => (
              <div key={t.symbol} className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-[var(--color-text)] text-sm">{t.name}</span>
                  <span className="text-xs text-[var(--color-text-secondary)] ml-2">{t.symbol}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm text-[var(--color-text)] mr-3">${t.price}</span>
                  <span className="text-sm font-bold text-red-400" aria-label={`Down ${Math.abs(t.change)} percent`}>{t.change}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sector Performance */}
      <div className="glass p-6 mb-10">
        <h2 className="text-lg font-bold text-[var(--color-text)] mb-5">Sector Performance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SECTORS.map((s) => (
            <div key={s.name} className="p-4 rounded-xl bg-[var(--glass-subtle-bg)] border border-[var(--glass-border)]">
              <div className="text-sm font-semibold text-[var(--color-text)] mb-1">{s.name}</div>
              <div className={`text-xl font-bold ${s.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                {s.change >= 0 ? "+" : ""}{s.change}%
              </div>
              <div className="text-xs text-[var(--color-text-secondary)] mt-1">
                Top: {s.topCoin} <span className={s.topCoinChange >= 0 ? "text-green-400" : "text-red-400"}>({s.topCoinChange >= 0 ? "+" : ""}{s.topCoinChange}%)</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Events */}
      <div className="glass p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h2 className="text-lg font-bold text-[var(--color-text)]">Market Events Timeline</h2>
          <div className="flex gap-2 mt-3 sm:mt-0 flex-wrap" role="group" aria-label="Filter events by category">
            {["all", "technical", "defi", "regulation", "adoption", "macro"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
                  filter === f
                    ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                    : "bg-[var(--glass-bg)] text-[var(--color-text-secondary)] border-[var(--glass-border)] hover:border-[var(--color-primary)]"
                }`}
              >
                {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-0" role="list" aria-label="Market events">
          {filteredEvents.map((event, i) => (
            <div key={i} className="flex gap-4 relative" role="listitem">
              {/* Timeline line */}
              <div className="flex flex-col items-center" aria-hidden="true">
                <div className="w-3 h-3 rounded-full bg-[var(--color-primary)] border-2 border-[var(--glass-bg)] z-10 mt-1" />
                {i < filteredEvents.length - 1 && <div className="w-px flex-1 bg-[var(--glass-border)]" />}
              </div>
              {/* Content */}
              <div className="pb-6 flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <time className="text-xs font-mono text-[var(--color-text-secondary)]">{event.time}</time>
                  <ImpactBadge impact={event.impact} />
                  <CategoryBadge category={event.category} />
                </div>
                <h3 className="text-sm font-bold text-[var(--color-text)] mb-1">{event.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-[var(--color-text-secondary)] mt-8 text-center">
        Market recap data is simulated for demonstration. In production, data feeds from CoinGecko, CoinMarketCap, and on-chain analytics providers.
      </p>
    </div>
  );
}
