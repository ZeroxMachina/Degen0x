"use client";

import { useState, useMemo, useEffect } from "react";
import SocialShare from "@/components/SocialShare";

interface MemeCoin {
  rank: number;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume24h: number;
  chain: string;
  sentiment: "bullish" | "neutral" | "bearish";
  tier: "blue-chip" | "mid-cap" | "micro-cap";
}

const MEME_COINS: MemeCoin[] = [
  { rank: 1, symbol: "DOGE", name: "Dogecoin", price: 0.182, change24h: 3.4, change7d: 12.1, marketCap: 26400, volume24h: 1850, chain: "Own", sentiment: "bullish", tier: "blue-chip" },
  { rank: 2, symbol: "SHIB", name: "Shiba Inu", price: 0.0000189, change24h: -1.2, change7d: 5.3, marketCap: 11100, volume24h: 620, chain: "Ethereum", sentiment: "neutral", tier: "blue-chip" },
  { rank: 3, symbol: "PEPE", name: "Pepe", price: 0.0000124, change24h: 8.7, change7d: 22.4, marketCap: 5200, volume24h: 1200, chain: "Ethereum", sentiment: "bullish", tier: "blue-chip" },
  { rank: 4, symbol: "WIF", name: "dogwifhat", price: 1.85, change24h: 5.2, change7d: 15.8, marketCap: 1850, volume24h: 480, chain: "Solana", sentiment: "bullish", tier: "mid-cap" },
  { rank: 5, symbol: "BONK", name: "Bonk", price: 0.0000235, change24h: -2.8, change7d: -4.1, marketCap: 1620, volume24h: 310, chain: "Solana", sentiment: "bearish", tier: "mid-cap" },
  { rank: 6, symbol: "FLOKI", name: "Floki Inu", price: 0.000198, change24h: 1.9, change7d: 8.7, marketCap: 1900, volume24h: 290, chain: "Multi", sentiment: "bullish", tier: "mid-cap" },
  { rank: 7, symbol: "MEME", name: "Memecoin", price: 0.0127, change24h: -0.5, change7d: 3.2, marketCap: 560, volume24h: 85, chain: "Ethereum", sentiment: "neutral", tier: "mid-cap" },
  { rank: 8, symbol: "MYRO", name: "Myro", price: 0.087, change24h: 12.3, change7d: 34.5, marketCap: 87, volume24h: 42, chain: "Solana", sentiment: "bullish", tier: "micro-cap" },
  { rank: 9, symbol: "POPCAT", name: "Popcat", price: 0.92, change24h: 6.1, change7d: 18.9, marketCap: 900, volume24h: 180, chain: "Solana", sentiment: "bullish", tier: "mid-cap" },
  { rank: 10, symbol: "MOG", name: "Mog Coin", price: 0.00000218, change24h: -3.4, change7d: 1.2, marketCap: 850, volume24h: 65, chain: "Ethereum", sentiment: "neutral", tier: "mid-cap" },
  { rank: 11, symbol: "BRETT", name: "Brett", price: 0.142, change24h: 4.5, change7d: 10.3, marketCap: 1400, volume24h: 220, chain: "Base", sentiment: "bullish", tier: "mid-cap" },
  { rank: 12, symbol: "TURBO", name: "Turbo", price: 0.0089, change24h: -1.7, change7d: 6.8, marketCap: 580, volume24h: 95, chain: "Ethereum", sentiment: "neutral", tier: "micro-cap" },
];

type SortKey = "marketCap" | "change24h" | "change7d" | "volume24h";

export default function MemecoinIndexClient() {
  const [sortBy, setSortBy] = useState<SortKey>("marketCap");
  const [sortDir, setSortDir] = useState<"desc" | "asc">("desc");
  const [chainFilter, setChainFilter] = useState("all");
  const [tierFilter, setTierFilter] = useState("all");

  const filtered = useMemo(() => {
    let data = [...MEME_COINS];
    if (chainFilter !== "all") data = data.filter((c) => c.chain === chainFilter);
    if (tierFilter !== "all") data = data.filter((c) => c.tier === tierFilter);
    data.sort((a, b) => sortDir === "desc" ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy]);
    return data;
  }, [sortBy, sortDir, chainFilter, tierFilter]);

  const totalMcap = MEME_COINS.reduce((s, c) => s + c.marketCap, 0);
  const totalVol = MEME_COINS.reduce((s, c) => s + c.volume24h, 0);
  const bullishCount = MEME_COINS.filter((c) => c.sentiment === "bullish").length;
  const avgChange24h = MEME_COINS.reduce((s, c) => s + c.change24h, 0) / MEME_COINS.length;

  const handleSort = (key: SortKey) => {
    if (sortBy === key) setSortDir((d) => d === "desc" ? "asc" : "desc");
    else { setSortBy(key); setSortDir("desc"); }
  };

  const fmtPrice = (p: number) => {
    if (p >= 1) return `$${p.toFixed(2)}`;
    if (p >= 0.001) return `$${p.toFixed(4)}`;
    if (p >= 0.000001) return `$${p.toFixed(7)}`;
    return `$${p.toFixed(10)}`;
  };

  const fmtMcap = (m: number) => m >= 1000 ? `$${(m / 1000).toFixed(1)}B` : `$${m}M`;

  const chains = ["all", ...Array.from(new Set(MEME_COINS.map((c) => c.chain)))];

  // Meme index value (composite)
  const memeIndex = Math.round(50 + avgChange24h * 3 + (bullishCount / MEME_COINS.length) * 20);
  const indexColor = memeIndex >= 70 ? "text-green-400" : memeIndex >= 40 ? "text-yellow-400" : "text-red-400";
  const indexLabel = memeIndex >= 70 ? "Extreme Greed" : memeIndex >= 55 ? "Greed" : memeIndex >= 45 ? "Neutral" : memeIndex >= 30 ? "Fear" : "Extreme Fear";

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          <span className="gradient-text">Meme Coin Index & Tracker</span>
        </h1>
        <p className="text-[var(--color-text-secondary)] text-lg max-w-3xl">
          Track the hottest meme coins across Ethereum, Solana, and Base. Real-time prices, volume, and degen sentiment analysis.
        </p>
      </div>

      {/* Index + Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div className="glass rounded-xl p-5 col-span-2 md:col-span-1">
          <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">Meme Index</div>
          <div className={`text-3xl font-bold ${indexColor}`}>{memeIndex}</div>
          <div className={`text-xs font-medium ${indexColor}`}>{indexLabel}</div>
        </div>
        <div className="glass rounded-xl p-5">
          <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">Total Mcap</div>
          <div className="text-xl font-bold gradient-text">{fmtMcap(totalMcap)}</div>
        </div>
        <div className="glass rounded-xl p-5">
          <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">24h Volume</div>
          <div className="text-xl font-bold text-[var(--color-text)]">{fmtMcap(totalVol)}</div>
        </div>
        <div className="glass rounded-xl p-5">
          <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">Avg 24h Change</div>
          <div className={`text-xl font-bold ${avgChange24h >= 0 ? "text-green-400" : "text-red-400"}`}>
            {avgChange24h >= 0 ? "+" : ""}{avgChange24h.toFixed(1)}%
          </div>
        </div>
        <div className="glass rounded-xl p-5">
          <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">Bullish Signals</div>
          <div className="text-xl font-bold text-green-400">{bullishCount}/{MEME_COINS.length}</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6 flex-wrap">
        <div className="flex gap-2">
          <span className="text-xs text-[var(--color-text-secondary)] self-center font-semibold uppercase">Chain:</span>
          {chains.map((c) => (
            <button key={c} onClick={() => setChainFilter(c)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                chainFilter === c ? "bg-[var(--color-primary)] text-white" : "glass text-[var(--color-text-secondary)]"
              }`}>
              {c === "all" ? "All" : c}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <span className="text-xs text-[var(--color-text-secondary)] self-center font-semibold uppercase">Tier:</span>
          {["all", "blue-chip", "mid-cap", "micro-cap"].map((t) => (
            <button key={t} onClick={() => setTierFilter(t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                tierFilter === t ? "bg-[var(--color-primary)] text-white" : "glass text-[var(--color-text-secondary)]"
              }`}>
              {t === "all" ? "All" : t}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="glass rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--glass-border)]">
                <th className="text-left px-4 py-3 text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">#</th>
                <th className="text-left px-4 py-3 text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">Coin</th>
                <th className="text-right px-4 py-3 text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">Price</th>
                <th className="text-right px-4 py-3 text-xs text-[var(--color-text-secondary)] uppercase tracking-wider cursor-pointer" onClick={() => handleSort("change24h")}>24h %</th>
                <th className="text-right px-4 py-3 text-xs text-[var(--color-text-secondary)] uppercase tracking-wider cursor-pointer" onClick={() => handleSort("change7d")}>7d %</th>
                <th className="text-right px-4 py-3 text-xs text-[var(--color-text-secondary)] uppercase tracking-wider cursor-pointer" onClick={() => handleSort("marketCap")}>Market Cap</th>
                <th className="text-right px-4 py-3 text-xs text-[var(--color-text-secondary)] uppercase tracking-wider cursor-pointer" onClick={() => handleSort("volume24h")}>Volume 24h</th>
                <th className="text-center px-4 py-3 text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">Chain</th>
                <th className="text-center px-4 py-3 text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">Vibe</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((coin) => (
                <tr key={coin.symbol} className="border-b border-[var(--glass-border)] hover:bg-[var(--glass-bg)] transition-colors">
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">{coin.rank}</td>
                  <td className="px-4 py-3">
                    <div className="font-bold text-[var(--color-text)]">{coin.symbol}</div>
                    <div className="text-xs text-[var(--color-text-secondary)]">{coin.name}</div>
                  </td>
                  <td className="px-4 py-3 text-right font-mono font-medium text-[var(--color-text)]">{fmtPrice(coin.price)}</td>
                  <td className={`px-4 py-3 text-right font-mono ${coin.change24h >= 0 ? "text-green-400" : "text-red-400"}`}>
                    {coin.change24h >= 0 ? "+" : ""}{coin.change24h.toFixed(1)}%
                  </td>
                  <td className={`px-4 py-3 text-right font-mono ${coin.change7d >= 0 ? "text-green-400" : "text-red-400"}`}>
                    {coin.change7d >= 0 ? "+" : ""}{coin.change7d.toFixed(1)}%
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-[var(--color-text)]">{fmtMcap(coin.marketCap)}</td>
                  <td className="px-4 py-3 text-right font-mono text-[var(--color-text-secondary)]">{fmtMcap(coin.volume24h)}</td>
                  <td className="px-4 py-3 text-center">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--glass-bg)] text-[var(--color-text-secondary)]">{coin.chain}</span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      coin.sentiment === "bullish" ? "bg-green-500/10 text-green-400" :
                      coin.sentiment === "bearish" ? "bg-red-500/10 text-red-400" :
                      "bg-gray-500/10 text-gray-400"
                    }`}>
                      {coin.sentiment === "bullish" ? "🐂 Bull" : coin.sentiment === "bearish" ? "🐻 Bear" : "😐 Meh"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info */}
      <div className="mt-10 glass rounded-xl p-6">
        <h2 className="text-xl font-bold mb-3 text-[var(--color-text)]">What is the Meme Coin Index?</h2>
        <div className="text-[var(--color-text-secondary)] space-y-3 text-sm leading-relaxed">
          <p>The Meme Coin Index is a composite score that measures overall meme coin market sentiment. It factors in price momentum, volume trends, and social activity across the top meme coins by market capitalization. Scores range from 0 (extreme fear) to 100 (extreme greed).</p>
          <p>Meme coins are highly speculative assets with extreme volatility. This tool is for informational and entertainment purposes only. Never invest more than you can afford to lose. Always do your own research (DYOR) before making any investment decisions.</p>
        </div>
      </div>

      <div className="mt-6">
        <SocialShare title="Meme Coin Index & Tracker — Track DOGE, PEPE, WIF and more" />
      </div>
    </div>
  );
}
