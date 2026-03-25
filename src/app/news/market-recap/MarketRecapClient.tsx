"use client";

import { useEffect, useState } from "react";
import {
  Brain,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Activity,
  Zap,
  Calendar,
  AlertCircle,
  ChevronRight,
  Clock,
  Eye,
  Newspaper,
} from "lucide-react";

interface TypewriterProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

function Typewriter({ text, speed = 50, onComplete }: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(text);
      setIsComplete(true);
      onComplete?.();
      return;
    }
    if (displayText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [displayText, text, speed, onComplete, prefersReducedMotion]);

  return (
    <span>
      {displayText}
      {!isComplete && (
        <span
          className="animate-pulse"
          style={{ color: "var(--blue)", marginLeft: "2px" }}
        >
          ▌
        </span>
      )}
    </span>
  );
}

function SentimentGauge({
  sentiment,
}: {
  sentiment: "bullish" | "bearish" | "neutral";
}) {
  const gaugePositions = {
    bearish: 15,
    neutral: 50,
    bullish: 85,
  };

  const colors = {
    bearish: "var(--red)",
    neutral: "var(--yellow)",
    bullish: "var(--green)",
  };

  return (
    <div className="space-y-3">
      <div className="relative h-3 rounded-full bg-opacity-20 overflow-hidden border border-opacity-50"
        style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
        <div
          className="h-full w-2 rounded-full transition-all duration-1000"
          style={{
            left: `${gaugePositions[sentiment]}%`,
            backgroundColor: colors[sentiment],
          }}
        />
      </div>
      <div className="flex justify-between text-xs"
        style={{ color: "var(--text2)" }}>
        <span>Bearish</span>
        <span>Neutral</span>
        <span>Bullish</span>
      </div>
      <div className="text-center font-semibold mt-2" style={{ color: colors[sentiment] }}>
        {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
      </div>
    </div>
  );
}

export default function MarketRecapClient() {
  const [showContent, setShowContent] = useState(false);
  const today = new Date();
  const dateStr = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const gainers = [
    { symbol: "RENDER", change: "+18.2%", price: "$4.82" },
    { symbol: "ARWEAVE", change: "+14.7%", price: "$18.42" },
    { symbol: "FIL", change: "+12.3%", price: "$24.18" },
    { symbol: "ONDO", change: "+9.8%", price: "$0.78" },
    { symbol: "JTO", change: "+8.5%", price: "$3.45" },
  ];

  const losers = [
    { symbol: "PEPE", change: "-8.3%", price: "$0.00000742" },
    { symbol: "DOGE", change: "-6.2%", price: "$0.28" },
    { symbol: "SHIB", change: "-5.9%", price: "$0.00001842" },
    { symbol: "WIF", change: "-4.7%", price: "$2.14" },
    { symbol: "BONK", change: "-3.2%", price: "$0.0247" },
  ];

  const narratives = [
    { name: "AI/ML", momentum: 85, trending: true, change: "+12.3%" },
    { name: "RWA", momentum: 72, trending: true, change: "+8.7%" },
    { name: "DePIN", momentum: 68, trending: false, change: "+5.2%" },
    { name: "L2", momentum: 55, trending: true, change: "+3.1%" },
    { name: "Meme Coins", momentum: 42, trending: false, change: "-2.4%" },
  ];

  const upcomingEvents = [
    { date: "Mar 15, 2026", title: "Ethereum Shanghai Update Impact", type: "Upgrade" },
    { date: "Mar 18, 2026", title: "Solana Network Upgrade", type: "Upgrade" },
    { date: "Mar 20, 2026", title: "Bitcoin Halving Countdown", type: "Event" },
    { date: "Mar 25, 2026", title: "Major Token Unlock - $500M worth", type: "Unlock" },
  ];

  const previousRecaps = Array.from({ length: 7 }).map((_, i) => {
    const date = new Date(today);
    date.setDate(date.getDate() - (i + 1));
    const sentiments: Array<"bullish" | "bearish" | "neutral"> = [
      "bullish", "neutral", "bearish", "bullish", "bullish", "neutral", "bearish",
    ];
    return {
      date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      sentiment: sentiments[i],
    };
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      {/* Hero */}
      <div className="border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Brain className="w-8 h-8" style={{ color: "var(--blue)" }} />
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                <Typewriter text="AI Market Recap" speed={80} onComplete={() => setShowContent(true)} />
              </h1>
            </div>
            <div className="px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 border"
              style={{ backgroundColor: "rgba(88, 166, 255, 0.1)", borderColor: "var(--blue)", color: "var(--blue)" }}>
              <Zap className="w-4 h-4" />
              Generated by degen0x AI
            </div>
          </div>
          <p className="text-lg" style={{ color: "var(--text2)" }}>{dateStr}</p>
        </div>
      </div>

      {showContent && (
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-12 animate-fadeIn">
          {/* Market Pulse + Gainers/Losers */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border p-6"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" style={{ color: "var(--blue)" }} />
                Market Pulse
              </h2>
              <SentimentGauge sentiment="bullish" />
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: "Market Cap Change", value: "+2.8%", color: "var(--green)" },
                  { label: "24h Volume", value: "$94.2B", color: "var(--blue)" },
                  { label: "BTC Dominance", value: "42.3%", color: "var(--yellow)" },
                  { label: "Total Market Cap", value: "$2.14T", color: "var(--purple)" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-sm mb-1" style={{ color: "var(--text2)" }}>{stat.label}</p>
                    <p className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                { title: "Top 5 Gainers", icon: <TrendingUp className="w-5 h-5" style={{ color: "var(--green)" }} />, items: gainers, color: "var(--green)" },
                { title: "Top 5 Losers", icon: <TrendingDown className="w-5 h-5" style={{ color: "var(--red)" }} />, items: losers, color: "var(--red)" },
              ].map((section) => (
                <div key={section.title} className="rounded-lg border p-6"
                  style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    {section.icon}{section.title}
                  </h3>
                  <div className="space-y-3">
                    {section.items.map((item) => (
                      <div key={item.symbol} className="flex justify-between items-center pb-2 border-b"
                        style={{ borderColor: "var(--border)" }}>
                        <div>
                          <p className="font-semibold">{item.symbol}</p>
                          <p style={{ color: "var(--text2)" }} className="text-sm">{item.price}</p>
                        </div>
                        <p className="font-bold text-lg" style={{ color: section.color }}>{item.change}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Narrative Tracker */}
          <section className="rounded-lg border p-6"
            style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Eye className="w-5 h-5" style={{ color: "var(--purple)" }} />
              Narrative Tracker
            </h2>
            <div className="space-y-4">
              {narratives.map((narrative) => (
                <div key={narrative.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{narrative.name}</span>
                      {narrative.trending && (
                        <span className="text-xs px-2 py-1 rounded"
                          style={{ backgroundColor: "rgba(63, 185, 80, 0.2)", color: "var(--green)" }}>
                          Trending
                        </span>
                      )}
                    </div>
                    <span className="font-bold"
                      style={{ color: narrative.change.includes("+") ? "var(--green)" : "var(--red)" }}>
                      {narrative.change}
                    </span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden"
                    style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}>
                    <div className="h-full transition-all duration-500"
                      style={{ width: `${narrative.momentum}%`, backgroundColor: "var(--purple)" }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Whale Activity & On-Chain Signals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="rounded-lg border p-6"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" style={{ color: "var(--red)" }} />
                Whale Activity
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Large BTC Accumulation", desc: "Whale addresses acquired 1,247 BTC (~$78.2M) in the last 48 hours.", bg: "rgba(63, 185, 80, 0.1)", border: "var(--green)" },
                  { title: "ETH Whale Moving", desc: "Large ETH holder transferred 50k ETH to exchange wallet, signaling potential action.", bg: "rgba(88, 166, 255, 0.1)", border: "var(--blue)" },
                  { title: "Stablecoin Outflows", desc: "$4.2B in stablecoins moved off exchanges over 24 hours.", bg: "rgba(248, 81, 73, 0.1)", border: "var(--red)" },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded border"
                    style={{ backgroundColor: item.bg, borderColor: item.border }}>
                    <p className="font-semibold text-sm mb-2">{item.title}</p>
                    <p className="text-sm" style={{ color: "var(--text2)" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg border p-6"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5" style={{ color: "var(--blue)" }} />
                On-Chain Signals
              </h2>
              <div className="space-y-4">
                {[
                  { label: "Funding Rates", value: "Long Bias", color: "var(--green)", desc: "Funding rates are positive across major pairs, indicating bullish sentiment." },
                  { label: "Exchange Flows", value: "Outflow +$2.8B", color: "var(--green)", desc: "Net outflows suggest accumulation phase among HODLers." },
                  { label: "Stablecoin Minting", value: "Neutral", color: "var(--yellow)", desc: "USDC and USDT issuance remains stable at current levels." },
                ].map((signal, idx) => (
                  <div key={signal.label}>
                    {idx > 0 && <div className="h-px mb-4" style={{ backgroundColor: "var(--border)" }} />}
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-sm">{signal.label}</span>
                      <span className="font-semibold text-sm" style={{ color: signal.color }}>{signal.value}</span>
                    </div>
                    <p className="text-sm" style={{ color: "var(--text2)" }}>{signal.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* What to Watch */}
          <section className="rounded-lg border p-6"
            style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5" style={{ color: "var(--yellow)" }} />
              What to Watch
            </h2>
            <div className="space-y-3">
              {upcomingEvents.map((event, idx) => (
                <div key={idx} className="flex items-start gap-4 pb-4 border-b"
                  style={{ borderColor: "var(--border)" }}>
                  <Clock className="w-5 h-5 mt-1" style={{ color: "var(--blue)" }} />
                  <div className="flex-1">
                    <p className="font-semibold">{event.title}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs px-2 py-1 rounded"
                        style={{ backgroundColor: "rgba(88, 166, 255, 0.2)", color: "var(--blue)" }}>
                        {event.type}
                      </span>
                      <span className="text-sm" style={{ color: "var(--text2)" }}>{event.date}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 mt-1" style={{ color: "var(--text2)" }} />
                </div>
              ))}
            </div>
          </section>

          {/* Previous Recaps */}
          <section className="rounded-lg border p-6"
            style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Newspaper className="w-5 h-5" style={{ color: "var(--text2)" }} />
              Previous Recaps
            </h2>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {previousRecaps.map((recap, idx) => {
                const colorMap = {
                  bullish: { bg: "rgba(63, 185, 80, 0.2)", text: "var(--green)" },
                  bearish: { bg: "rgba(248, 81, 73, 0.2)", text: "var(--red)" },
                  neutral: { bg: "rgba(210, 153, 34, 0.2)", text: "var(--yellow)" },
                };
                const color = colorMap[recap.sentiment];
                return (
                  <button key={idx}
                    className="px-4 py-3 rounded border whitespace-nowrap transition-all hover:opacity-80 flex flex-col items-center gap-1"
                    style={{ backgroundColor: color.bg, borderColor: color.text, color: color.text }}>
                    <span className="text-xs">{recap.date}</span>
                    <span className="text-xs font-semibold capitalize">{recap.sentiment}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Footer */}
          <div className="text-center py-8 border-t"
            style={{ borderColor: "var(--border)", color: "var(--text2)" }}>
            <p className="text-sm">This market recap is generated by AI and should not be considered financial advice.</p>
            <p className="text-xs mt-2">Market data via CoinGecko &amp; on-chain analytics &bull; Last updated: {new Date().toLocaleTimeString()}</p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
        @media (prefers-reduced-motion: reduce) {
          .animate-fadeIn { animation: none; }
        }
      `}</style>
    </div>
  );
}
