"use client";

import { useState, useEffect, useCallback } from "react";

interface TradeActivity {
  id: string;
  trader: string;
  traderAvatar: string;
  verified: boolean;
  action: "buy" | "sell" | "swap" | "stake" | "unstake" | "bridge";
  tokenIn: string;
  tokenOut?: string;
  amount: string;
  usdValue: number;
  chain: string;
  timestamp: number;
  pnlPercent?: number;
  txHash?: string;
  copiedBy: number;
  likes: number;
  comments: number;
  note?: string;
}

const ACTION_ICONS: Record<string, string> = {
  buy: "🟢", sell: "🔴", swap: "🔄", stake: "🔒", unstake: "🔓", bridge: "🌉",
};
const ACTION_LABELS: Record<string, string> = {
  buy: "Bought", sell: "Sold", swap: "Swapped", stake: "Staked", unstake: "Unstaked", bridge: "Bridged",
};
const CHAIN_COLORS: Record<string, string> = {
  SOL: "text-purple-400 bg-purple-400/10", ETH: "text-blue-400 bg-blue-400/10",
  ARB: "text-blue-300 bg-blue-300/10", BASE: "text-cyan-400 bg-cyan-400/10",
  AVAX: "text-red-400 bg-red-400/10", OP: "text-red-300 bg-red-300/10",
};

const MOCK_FEED: TradeActivity[] = [
  { id: "t1", trader: "CryptoWhale.sol", traderAvatar: "🐋", verified: true, action: "buy", tokenIn: "JUP", amount: "45,000", usdValue: 89100, chain: "SOL", timestamp: Date.now() - 120000, copiedBy: 34, likes: 89, comments: 12, note: "Jupiter accumulation before launchpad announcement. NFA." },
  { id: "t2", trader: "AlphaHunter", traderAvatar: "🎯", verified: true, action: "swap", tokenIn: "ETH", tokenOut: "PEPE", amount: "12 ETH", usdValue: 46140, chain: "ETH", timestamp: Date.now() - 300000, copiedBy: 21, likes: 56, comments: 8 },
  { id: "t3", trader: "DeFi_Sage", traderAvatar: "🧙", verified: true, action: "stake", tokenIn: "AAVE", amount: "250", usdValue: 78100, chain: "ETH", timestamp: Date.now() - 480000, pnlPercent: 12.4, copiedBy: 15, likes: 43, comments: 5, note: "Locking for safety module rewards. 8.2% APY currently." },
  { id: "t4", trader: "MemeKing420", traderAvatar: "👑", verified: false, action: "buy", tokenIn: "BOME", amount: "5,000,000", usdValue: 12500, chain: "SOL", timestamp: Date.now() - 900000, copiedBy: 67, likes: 134, comments: 23, note: "New meta loading... 100x or bust" },
  { id: "t5", trader: "NFA_Larry", traderAvatar: "🎰", verified: false, action: "sell", tokenIn: "SOL", amount: "500", usdValue: 93825, chain: "SOL", timestamp: Date.now() - 1500000, pnlPercent: 234.5, copiedBy: 12, likes: 78, comments: 15, note: "Taking profits. Bought at $54. Still bullish long term." },
  { id: "t6", trader: "OnChainSherlock", traderAvatar: "🔍", verified: true, action: "bridge", tokenIn: "ETH", tokenOut: "ETH (Base)", amount: "25 ETH", usdValue: 96125, chain: "BASE", timestamp: Date.now() - 2100000, copiedBy: 8, likes: 34, comments: 6, note: "Bridging to Base for AERO farming opportunities." },
  { id: "t7", trader: "AirdropMaxi", traderAvatar: "🪂", verified: true, action: "swap", tokenIn: "USDC", tokenOut: "ZK", amount: "15,000", usdValue: 15000, chain: "ETH", timestamp: Date.now() - 2700000, copiedBy: 45, likes: 67, comments: 9 },
  { id: "t8", trader: "The_Compounder", traderAvatar: "📈", verified: true, action: "stake", tokenIn: "stETH", amount: "50", usdValue: 192250, chain: "ETH", timestamp: Date.now() - 3600000, pnlPercent: 5.2, copiedBy: 19, likes: 41, comments: 3, note: "Auto-compounding staking rewards. Slow and steady." },
];

type FilterType = "all" | "buy" | "sell" | "swap" | "stake" | "bridge";

export default function SocialTradingFeed() {
  const [feed, setFeed] = useState<TradeActivity[]>(MOCK_FEED);
  const [filter, setFilter] = useState<FilterType>("all");
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [expandedNotes, setExpandedNotes] = useState<Set<string>>(new Set());

  const filteredFeed = filter === "all" ? feed : feed.filter(t => t.action === filter);

  const toggleLike = (id: string) => {
    setLikedPosts(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    setFeed(prev => prev.map(t =>
      t.id === id ? { ...t, likes: likedPosts.has(id) ? t.likes - 1 : t.likes + 1 } : t
    ));
  };

  const timeAgo = (ts: number) => {
    const diff = Date.now() - ts;
    if (diff < 60000) return "just now";
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
    return `${Math.floor(diff / 86400000)}d ago`;
  };

  const formatUsd = (n: number) => {
    if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}K`;
    return `$${n.toFixed(0)}`;
  };

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Social Trading Feed</h2>
          <p className="text-[var(--color-text-secondary)] text-sm mt-1">
            Real-time trades from top traders. Like, comment, and copy.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-xs text-green-400 font-semibold">Live</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {(["all", "buy", "sell", "swap", "stake", "bridge"] as FilterType[]).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border whitespace-nowrap transition-colors ${
              filter === f
                ? "bg-indigo-500/20 text-indigo-400 border-indigo-500/40"
                : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-text-secondary)]"
            }`}
          >
            {f === "all" ? "All Trades" : `${ACTION_ICONS[f]} ${f.charAt(0).toUpperCase() + f.slice(1)}`}
          </button>
        ))}
      </div>

      {/* Feed Cards */}
      <div className="space-y-3">
        {filteredFeed.map(trade => (
          <div key={trade.id} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-4 hover:border-indigo-500/20 transition-colors">
            {/* Trader Info Row */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{trade.traderAvatar}</span>
                <div>
                  <span className="font-semibold text-sm flex items-center gap-1">
                    {trade.trader}
                    {trade.verified && <span className="text-blue-400 text-[10px]">✓</span>}
                  </span>
                  <span className="text-[10px] text-[var(--color-text-secondary)]">{timeAgo(trade.timestamp)}</span>
                </div>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded font-semibold ${CHAIN_COLORS[trade.chain] || "text-gray-400 bg-gray-400/10"}`}>
                {trade.chain}
              </span>
            </div>

            {/* Trade Action */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{ACTION_ICONS[trade.action]}</span>
              <span className="text-sm">
                <span className="font-semibold">{ACTION_LABELS[trade.action]}</span>{" "}
                <span className="font-bold">{trade.amount} {trade.tokenIn}</span>
                {trade.tokenOut && (
                  <span> → <span className="font-bold">{trade.tokenOut}</span></span>
                )}
              </span>
              <span className="text-xs text-[var(--color-text-secondary)] ml-auto">
                {formatUsd(trade.usdValue)}
              </span>
            </div>

            {/* PnL if applicable */}
            {trade.pnlPercent !== undefined && (
              <div className={`text-xs font-semibold mb-2 ${trade.pnlPercent >= 0 ? "text-green-400" : "text-red-400"}`}>
                Realized PnL: {trade.pnlPercent >= 0 ? "+" : ""}{trade.pnlPercent}%
              </div>
            )}

            {/* Note */}
            {trade.note && (
              <div className="bg-[var(--color-bg)] rounded-lg p-3 mb-3 text-sm text-[var(--color-text-secondary)] italic">
                &ldquo;{trade.note}&rdquo;
              </div>
            )}

            {/* Actions Row */}
            <div className="flex items-center gap-4 text-xs text-[var(--color-text-secondary)]">
              <button
                onClick={() => toggleLike(trade.id)}
                className={`flex items-center gap-1 transition-colors ${
                  likedPosts.has(trade.id) ? "text-red-400" : "hover:text-red-400"
                }`}
              >
                {likedPosts.has(trade.id) ? "❤️" : "🤍"} {trade.likes}
              </button>
              <span className="flex items-center gap-1">
                💬 {trade.comments}
              </span>
              <span className="flex items-center gap-1">
                📋 {trade.copiedBy} copied
              </span>
              <button className="ml-auto px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500/20 transition-colors">
                Copy Trade
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
