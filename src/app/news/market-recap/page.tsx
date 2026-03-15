"use client";

import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Daily Market Recap | degen0x AI",
  description:
    "AI-powered daily crypto market analysis, sentiment tracking, and on-chain signals",
  keywords: [
    "crypto market recap",
    "Bitcoin",
    "Ethereum",
    "market sentiment",
    "trading signals",
  ],
};

interface TypewriterProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

function Typewriter({ text, speed = 50, onComplete }: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [displayText, text, speed, onComplete]);

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

export default function MarketRecapPage() {
  const [showContent, setShowContent] = useState(false);
  const today = new Date();
  const dateStr = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Mock data
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
    {
      name: "AI/ML",
      momentum: 85,
      trending: true,
      change: "+12.3%",
    },
    {
      name: "RWA",
      momentum: 72,
      trending: true,
      change: "+8.7%",
    },
    {
      name: "DePIN",
      momentum: 68,
      trending: false,
      change: "+5.2%",
    },
    {
      name: "L2",
      momentum: 55,
      trending: true,
      change: "+3.1%",
    },
    {
      name: "Meme Coins",
      momentum: 42,
      trending: false,
      change: "-2.4%",
    },
  ];

  const upcomingEvents = [
    {
      date: "Mar 15, 2026",
      title: "Ethereum Shanghai Update Impact",
      type: "Upgrade",
    },
    {
      date: "Mar 18, 2026",
      title: "Solana Network Upgrade",
      type: "Upgrade",
    },
    {
      date: "Mar 20, 2026",
      title: "Bitcoin Halving Countdown",
      type: "Event",
    },
    {
      date: "Mar 25, 2026",
      title: "Major Token Unlock - $500M worth",
      type: "Unlock",
    },
  ];

  const previousRecaps = Array.from({ length: 7 }).map((_, i) => {
    const date = new Date(today);
    date.setDate(date.getDate() - (i + 1));
    const sentiments: Array<"bullish" | "bearish" | "neutral"> = [
      "bullish",
      "neutral",
      "bearish",
      "bullish",
      "bullish",
      "neutral",
      "bearish",
    ];

    return {
      date: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      sentiment: sentiments[i],
    };
  });

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
    >
      {/* Hero Section */}
      <div
        className="border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Brain className="w-8 h-8" style={{ color: "var(--blue)" }} />
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                <Typewriter
                  text="AI Market Recap"
                  speed={80}
                  onComplete={() => setShowContent(true)}
                />
              </h1>
            </div>
            <div
              className="px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 border"
              style={{
                backgroundColor: "rgba(88, 166, 255, 0.1)",
                borderColor: "var(--blue)",
                color: "var(--blue)",
              }}
            >
              <Zap className="w-4 h-4" />
              Generated by degen0x AI
            </div>
          </div>
          <p
            className="text-lg"
            style={{ color: "var(--text2)" }}
          >
            {dateStr}
          </p>
        </div>
      </div>

      {/* Main Content */}
      {showContent && (
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-12 animate-fadeIn">
          {/* Market Pulse Summary */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="rounded-lg border p-6"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" style={{ color: "var(--blue)" }} />
                Market Pulse
              </h2>
              <SentimentGauge sentiment="bullish" />
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div>
                  <p
                    className="text-sm mb-1"
                    style={{ color: "var(--text2)" }}
                  >
                    Market Cap Change
                  </p>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "var(--green)" }}
                  >
                    +2.8%
                  </p>
                </div>
                <div>
                  <p
                    className="text-sm mb-1"
                    style={{ color: "var(--text2)" }}
                  >
                    24h Volume
                  </p>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "var(--blue)" }}
                  >
                    $94.2B
                  </p>
                </div>
                <div>
                  <p
                    className="text-sm mb-1"
                    style={{ color: "var(--text2)" }}
                  >
                    BTC Dominance
                  </p>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "var(--yellow)" }}
                  >
                    42.3%
                  </p>
                </div>
                <div>
                  <p
                    className="text-sm mb-1"
                    style={{ color: "var(--text2)" }}
                  >
                    Total Market Cap
                  </p>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "var(--purple)" }}
                  >
                    $2.14T
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-4">
              <div
                className="rounded-lg border p-6"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" style={{ color: "var(--green)" }} />
                  Top 5 Gainers
                </h3>
                <div className="space-y-3">
                  {gainers.map((gainer) => (
                    <div
                      key={gainer.symbol}
                      className="flex justify-between items-center pb-2 border-b"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <div>
                        <p className="font-semibold">{gainer.symbol}</p>
                        <p style={{ color: "var(--text2)" }} className="text-sm">
                          {gainer.price}
                        </p>
                      </div>
                      <p
                        className="font-bold text-lg"
                        style={{ color: "var(--green)" }}
                      >
                        {gainer.change}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-lg border p-6"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <TrendingDown className="w-5 h-5" style={{ color: "var(--red)" }} />
                  Top 5 Losers
                </h3>
                <div className="space-y-3">
                  {losers.map((loser) => (
                    <div
                      key={loser.symbol}
                      className="flex justify-between items-center pb-2 border-b"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <div>
                        <p className="font-semibold">{loser.symbol}</p>
                        <p style={{ color: "var(--text2)" }} className="text-sm">
                          {loser.price}
                        </p>
                      </div>
                      <p
                        className="font-bold text-lg"
                        style={{ color: "var(--red)" }}
                      >
                        {loser.change}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Narrative Tracker */}
          <section
            className="rounded-lg border p-6"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
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
                        <span
                          className="text-xs px-2 py-1 rounded"
                          style={{
                            backgroundColor: "rgba(63, 185, 80, 0.2)",
                            color: "var(--green)",
                          }}
                        >
                          Trending
                        </span>
                      )}
                    </div>
                    <span
                      className="font-bold"
                      style={{
                        color: narrative.change.includes("+")
                          ? "var(--green)"
                          : "var(--red)",
                      }}
                    >
                      {narrative.change}
                    </span>
                  </div>
                  <div
                    className="h-2 rounded-full overflow-hidden"
                    style={{
                      backgroundColor: "var(--bg)",
                      borderColor: "var(--border)",
                      border: "1px solid",
                    }}
                  >
                    <div
                      className="h-full transition-all duration-500"
                      style={{
                        width: `${narrative.momentum}%`,
                        backgroundColor: "var(--purple)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Whale Activity & On-Chain Signals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Whale Activity */}
            <section
              className="rounded-lg border p-6"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" style={{ color: "var(--red)" }} />
                Whale Activity
              </h2>
              <div className="space-y-4">
                <div
                  className="p-4 rounded border"
                  style={{
                    backgroundColor: "rgba(63, 185, 80, 0.1)",
                    borderColor: "var(--green)",
                  }}
                >
                  <p className="font-semibold text-sm mb-2">Large BTC Accumulation</p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text2)" }}
                  >
                    Whale addresses acquired 1,247 BTC (~$78.2M) in the last 48 hours.
                  </p>
                </div>
                <div
                  className="p-4 rounded border"
                  style={{
                    backgroundColor: "rgba(88, 166, 255, 0.1)",
                    borderColor: "var(--blue)",
                  }}
                >
                  <p className="font-semibold text-sm mb-2">ETH Whale Moving</p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text2)" }}
                  >
                    Large ETH holder transferred 50k ETH to exchange wallet, signaling potential action.
                  </p>
                </div>
                <div
                  className="p-4 rounded border"
                  style={{
                    backgroundColor: "rgba(248, 81, 73, 0.1)",
                    borderColor: "var(--red)",
                  }}
                >
                  <p className="font-semibold text-sm mb-2">Stablecoin Outflows</p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text2)" }}
                  >
                    $4.2B in stablecoins moved off exchanges over 24 hours.
                  </p>
                </div>
              </div>
            </section>

            {/* On-Chain Signals */}
            <section
              className="rounded-lg border p-6"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5" style={{ color: "var(--blue)" }} />
                On-Chain Signals
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-sm">Funding Rates</span>
                    <span
                      className="font-semibold text-sm"
                      style={{ color: "var(--green)" }}
                    >
                      Long Bias
                    </span>
                  </div>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text2)" }}
                  >
                    Funding rates are positive across major pairs, indicating bullish sentiment.
                  </p>
                </div>
                <div className="h-px" style={{ backgroundColor: "var(--border)" }} />
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-sm">Exchange Flows</span>
                    <span
                      className="font-semibold text-sm"
                      style={{ color: "var(--green)" }}
                    >
                      Outflow +$2.8B
                    </span>
                  </div>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text2)" }}
                  >
                    Net outflows suggest accumulation phase among HODLers.
                  </p>
                </div>
                <div className="h-px" style={{ backgroundColor: "var(--border)" }} />
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-sm">Stablecoin Minting</span>
                    <span
                      className="font-semibold text-sm"
                      style={{ color: "var(--yellow)" }}
                    >
                      Neutral
                    </span>
                  </div>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text2)" }}
                  >
                    USDC and USDT issuance remains stable at current levels.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* What to Watch */}
          <section
            className="rounded-lg border p-6"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5" style={{ color: "var(--yellow)" }} />
              What to Watch
            </h2>
            <div className="space-y-3">
              {upcomingEvents.map((event, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 pb-4 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="pt-1">
                    <Clock
                      className="w-5 h-5"
                      style={{ color: "var(--blue)" }}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{event.title}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span
                        className="text-xs px-2 py-1 rounded"
                        style={{
                          backgroundColor: "rgba(88, 166, 255, 0.2)",
                          color: "var(--blue)",
                        }}
                      >
                        {event.type}
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: "var(--text2)" }}
                      >
                        {event.date}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    className="w-5 h-5 mt-1"
                    style={{ color: "var(--text2)" }}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Previous Recaps */}
          <section
            className="rounded-lg border p-6"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Newspaper
                className="w-5 h-5"
                style={{ color: "var(--text2)" }}
              />
              Previous Recaps
            </h2>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {previousRecaps.map((recap, idx) => {
                const colors = {
                  bullish: { bg: "rgba(63, 185, 80, 0.2)", text: "var(--green)" },
                  bearish: { bg: "rgba(248, 81, 73, 0.2)", text: "var(--red)" },
                  neutral: {
                    bg: "rgba(210, 153, 34, 0.2)",
                    text: "var(--yellow)",
                  },
                };
                const color = colors[recap.sentiment];
                return (
                  <button
                    key={idx}
                    className="px-4 py-3 rounded border whitespace-nowrap transition-all hover:opacity-80 flex flex-col items-center gap-1"
                    style={{
                      backgroundColor: color.bg,
                      borderColor: color.text,
                      color: color.text,
                    }}
                  >
                    <span className="text-xs">{recap.date}</span>
                    <span className="text-xs font-semibold capitalize">
                      {recap.sentiment}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Footer */}
          <div
            className="text-center py-8 border-t"
            style={{
              borderColor: "var(--border)",
              color: "var(--text2)",
            }}
          >
            <p className="text-sm">
              This market recap is generated by AI and should not be considered financial advice.
            </p>
            <p className="text-xs mt-2">
              Last updated: {new Date().toLocaleTimeString()}
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
