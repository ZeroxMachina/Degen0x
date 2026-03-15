"use client";

import { useState, useEffect, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────
interface MarketSentiment {
  score: number; // 0-100
  label: "Extreme Fear" | "Fear" | "Neutral" | "Greed" | "Extreme Greed";
  change24h: number;
  btcDominance: number;
  totalMarketCap: string;
  volume24h: string;
  topMover: { name: string; symbol: string; change: number };
  topLoser: { name: string; symbol: string; change: number };
  timestamp: number;
}

// ─── Simulated real-time data (replace with API in prod) ──────────
function generateSentimentData(): MarketSentiment {
  const score = Math.floor(Math.random() * 100);
  const labels: MarketSentiment["label"][] = [
    "Extreme Fear", "Fear", "Neutral", "Greed", "Extreme Greed",
  ];
  const label = labels[Math.min(Math.floor(score / 20), 4)];

  const marketCapT = (2.8 + Math.random() * 0.4).toFixed(2);
  const volumeB = (85 + Math.random() * 40).toFixed(1);

  return {
    score,
    label,
    change24h: +(Math.random() * 10 - 5).toFixed(1),
    btcDominance: +(58 + Math.random() * 6).toFixed(1),
    totalMarketCap: `$${marketCapT}T`,
    volume24h: `$${volumeB}B`,
    topMover: {
      name: ["Solana", "Ethereum", "Chainlink", "Avalanche", "Cardano"][Math.floor(Math.random() * 5)],
      symbol: ["SOL", "ETH", "LINK", "AVAX", "ADA"][Math.floor(Math.random() * 5)],
      change: +(Math.random() * 15 + 2).toFixed(1),
    },
    topLoser: {
      name: ["Dogecoin", "Shiba Inu", "Pepe", "Floki", "Bonk"][Math.floor(Math.random() * 5)],
      symbol: ["DOGE", "SHIB", "PEPE", "FLOKI", "BONK"][Math.floor(Math.random() * 5)],
      change: -(Math.random() * 12 + 1).toFixed(1) as any * 1,
    },
    timestamp: Date.now(),
  };
}

// ─── Sentiment Gauge ──────────────────────────────────────────────
function SentimentGauge({ score }: { score: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h - 8;
    const radius = Math.min(cx, cy) - 12;

    ctx.clearRect(0, 0, w, h);

    // Draw arc background
    const gradient = ctx.createLinearGradient(0, 0, w, 0);
    gradient.addColorStop(0, "#ef4444");
    gradient.addColorStop(0.25, "#f97316");
    gradient.addColorStop(0.5, "#eab308");
    gradient.addColorStop(0.75, "#22c55e");
    gradient.addColorStop(1, "#16a34a");

    ctx.beginPath();
    ctx.arc(cx, cy, radius, Math.PI, 0);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#1c2330";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, radius, Math.PI, Math.PI + (Math.PI * score) / 100);
    ctx.lineWidth = 10;
    ctx.strokeStyle = gradient;
    ctx.lineCap = "round";
    ctx.stroke();

    // Draw needle
    const angle = Math.PI + (Math.PI * score) / 100;
    const needleLen = radius - 18;
    const nx = cx + needleLen * Math.cos(angle);
    const ny = cy + needleLen * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(nx, ny);
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "#e6edf3";
    ctx.stroke();

    // Center dot
    ctx.beginPath();
    ctx.arc(cx, cy, 4, 0, Math.PI * 2);
    ctx.fillStyle = "#e6edf3";
    ctx.fill();
  }, [score]);

  return <canvas ref={canvasRef} width={140} height={80} className="block" />;
}

// ─── Color by score ───────────────────────────────────────────────
function getScoreColor(score: number): string {
  if (score < 20) return "#ef4444";
  if (score < 40) return "#f97316";
  if (score < 60) return "#eab308";
  if (score < 80) return "#22c55e";
  return "#16a34a";
}

function getScoreBg(score: number): string {
  if (score < 20) return "bg-red-500/10 border-red-500/20";
  if (score < 40) return "bg-orange-500/10 border-orange-500/20";
  if (score < 60) return "bg-yellow-500/10 border-yellow-500/20";
  if (score < 80) return "bg-green-500/10 border-green-500/20";
  return "bg-emerald-500/10 border-emerald-500/20";
}

// ─── Main Component ───────────────────────────────────────────────
export default function MarketSentimentBanner() {
  const [sentiment, setSentiment] = useState<MarketSentiment | null>(null);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    setSentiment(generateSentimentData());
    setIsLive(true);

    const interval = setInterval(() => {
      setSentiment(generateSentimentData());
    }, 30000); // refresh every 30s

    return () => clearInterval(interval);
  }, []);

  if (!sentiment) return null;

  return (
    <div className={`rounded-2xl border ${getScoreBg(sentiment.score)} p-5 transition-all duration-500`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h2 className="text-base font-bold text-white">Market Pulse</h2>
          {isLive && (
            <span className="flex items-center gap-1.5 text-[11px] text-green-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              LIVE
            </span>
          )}
        </div>
        <span className="text-[11px] text-gray-500">
          Updated {new Date(sentiment.timestamp).toLocaleTimeString()}
        </span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Sentiment Gauge */}
        <div className="col-span-2 lg:col-span-1 flex flex-col items-center">
          <SentimentGauge score={sentiment.score} />
          <div className="text-center mt-1">
            <p className="text-2xl font-black" style={{ color: getScoreColor(sentiment.score) }}>
              {sentiment.score}
            </p>
            <p className="text-xs font-semibold" style={{ color: getScoreColor(sentiment.score) }}>
              {sentiment.label}
            </p>
            <p className="text-[10px] text-gray-500 mt-0.5">
              {sentiment.change24h > 0 ? "+" : ""}{sentiment.change24h} from yesterday
            </p>
          </div>
        </div>

        {/* Market Cap */}
        <div className="rounded-xl bg-[#0d1117]/60 p-3">
          <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-1">Total Market Cap</p>
          <p className="text-xl font-bold text-white">{sentiment.totalMarketCap}</p>
          <p className="text-[10px] text-gray-500 mt-1">BTC Dom: {sentiment.btcDominance}%</p>
        </div>

        {/* Volume */}
        <div className="rounded-xl bg-[#0d1117]/60 p-3">
          <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-1">24h Volume</p>
          <p className="text-xl font-bold text-white">{sentiment.volume24h}</p>
        </div>

        {/* Top Mover */}
        <div className="rounded-xl bg-[#0d1117]/60 p-3">
          <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-1">Top Gainer</p>
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-bold text-white">{sentiment.topMover.symbol}</span>
            <span className="text-lg font-black text-green-400">+{sentiment.topMover.change}%</span>
          </div>
          <p className="text-[10px] text-gray-500 mt-0.5">{sentiment.topMover.name}</p>
        </div>

        {/* Top Loser */}
        <div className="rounded-xl bg-[#0d1117]/60 p-3">
          <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-1">Top Loser</p>
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-bold text-white">{sentiment.topLoser.symbol}</span>
            <span className="text-lg font-black text-red-400">{sentiment.topLoser.change}%</span>
          </div>
          <p className="text-[10px] text-gray-500 mt-0.5">{sentiment.topLoser.name}</p>
        </div>
      </div>

      {/* CTA */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
        <p className="text-[11px] text-gray-500">
          Fear & Greed Index · Data refreshes every 30s
        </p>
        <a
          href="/tools/fear-greed-timeline"
          className="text-[11px] font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          View Full Timeline →
        </a>
      </div>
    </div>
  );
}
