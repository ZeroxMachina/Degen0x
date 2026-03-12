'use client';

"use client";

import { useState, useEffect } from "react";
import Breadcrumb from "@/components/Breadcrumb";

/* ────────────────────────────────────────────────────────────
   Types
──────────────────────────────────────────────────────────── */
interface SmartMoneyWallet {
  id: string;
  address: string;
  label: string;
  category: "VC" | "Whale" | "DEX Trader" | "NFT Flipper" | "Airdrop Farmer";
  chain: string;
  netWorth: number;
  pnl7d: number;
  pnl30d: number;
  pnl90d: number;
  topHoldings: { symbol: string; amount: number; value: number }[];
  recentActivity: { type: string; amount: number; time: string }[];
  winRate: number;
}

interface Transaction {
  id: string;
  walletLabel: string;
  type: "buy" | "sell" | "transfer";
  amount: number;
  usdValue: number;
  symbol: string;
  chain: string;
  timestamp: Date;
}

/* ────────────────────────────────────────────────────────────
   Helpers
──────────────────────────────────────────────────────────── */
function shortAddr(addr: string) {
  return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
}

function formatUsd(n: number) {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}K`;
  return `$${n.toFixed(2)}`;
}

function ago(date: Date) {
  const s = Math.floor((Date.now() - date.getTime()) / 1000);
  if (s < 60) return `${s}s ago`;
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
}

/* ────────────────────────────────────────────────────────────
   Data Generators
──────────────────────────────────────────────────────────── */
const WALLET_LABELS = [
  "Paradigm Capital",
  "a16z Crypto",
  "Polychain Capital",
  "Multicoin Capital",
  "Galaxy Digital",
  "Jump Trading",
  "Wintermute",
  "DeFi Protocol Vault",
  "Unknown Whale Alpha",
  "Arbitrage Bot #42",
  "NFT Collection Curator",
  "Airdrop Optimizer",
];

const CATEGORIES = ["VC", "Whale", "DEX Trader", "NFT Flipper", "Airdrop Farmer"] as const;
const CHAINS = ["Ethereum", "Solana", "Arbitrum", "Base", "Polygon"];
const SYMBOLS = ["BTC", "ETH", "SOL", "USDT", "USDC", "ARB", "OP", "GMX"];

function generateWallet(): SmartMoneyWallet {
  const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
  const chain = CHAINS[Math.floor(Math.random() * CHAINS.length)];
  const netWorth = 500_000 + Math.random() * 50_000_000;
  const pnl7d = (Math.random() - 0.3) * 150;
  const pnl30d = (Math.random() - 0.2) * 300;
  const pnl90d = (Math.random() - 0.1) * 500;

  return {
    id: `wallet-${Math.random().toString(36).slice(2, 10)}`,
    address: `0x${Math.random().toString(16).slice(2, 42)}`,
    label: WALLET_LABELS[Math.floor(Math.random() * WALLET_LABELS.length)],
    category,
    chain,
    netWorth,
    pnl7d,
    pnl30d,
    pnl90d,
    topHoldings: [
      { symbol: SYMBOLS[0], amount: Math.random() * 100, value: Math.random() * 5_000_000 },
      { symbol: SYMBOLS[1], amount: Math.random() * 500, value: Math.random() * 3_000_000 },
      { symbol: SYMBOLS[2], amount: Math.random() * 1000, value: Math.random() * 2_000_000 },
    ],
    recentActivity: [
      { type: "buy", amount: Math.random() * 500_000, time: "2h ago" },
      { type: "sell", amount: Math.random() * 300_000, time: "4h ago" },
    ],
    winRate: 50 + Math.random() * 35,
  };
}

function generateTransaction(): Transaction {
  const wallets = ["Paradigm Capital", "a16z Crypto", "Jump Trading"];
  return {
    id: `tx-${Math.random().toString(36).slice(2, 10)}`,
    walletLabel: wallets[Math.floor(Math.random() * wallets.length)],
    type: ["buy", "sell", "transfer"][Math.floor(Math.random() * 3)] as "buy" | "sell" | "transfer",
    amount: Math.random() * 500,
    usdValue: 100_000 + Math.random() * 5_000_000,
    symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
    chain: CHAINS[Math.floor(Math.random() * CHAINS.length)],
    timestamp: new Date(Date.now() - Math.random() * 3600_000),
  };
}

/* ────────────────────────────────────────────────────────────
   Component
──────────────────────────────────────────────────────────── */
export default function SmartMoneyTrackerPage() {
  const [wallets, setWallets] = useState<SmartMoneyWallet[]>([]);
  const [txFeed, setTxFeed] = useState<Transaction[]>([]);
  const [activeTab, setActiveTab] = useState<"feed" | "leaderboard" | "copy-trade" | "alerts">("feed");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterChain, setFilterChain] = useState("All");
  const [minTxSize, setMinTxSize] = useState(500_000);
  const [selectedWallet, setSelectedWallet] = useState<SmartMoneyWallet | null>(null);
  const [copyTradeReturn, setCopyTradeReturn] = useState(0);
  const [paused, setPaused] = useState(false);
  const [leaderboardPeriod, setLeaderboardPeriod] = useState<"7d" | "30d" | "90d">("7d");

  // Init
  useEffect(() => {
    const initialWallets = Array.from({ length: 12 }, () => generateWallet());
    setWallets(initialWallets);
    const initialTxs = Array.from({ length: 30 }, () => generateTransaction());
    setTxFeed(initialTxs);
    if (initialWallets.length > 0) {
      setSelectedWallet(initialWallets[0]);
    }
  }, []);

  // Live feed
  useEffect(() => {
    if (paused || activeTab !== "feed") return;
    const interval = setInterval(() => {
      const newTx = generateTransaction();
      setTxFeed((prev) => [newTx, ...prev].slice(0, 100));
    }, 5000 + Math.random() * 3000);
    return () => clearInterval(interval);
  }, [paused, activeTab]);

  // Filter transactions
  const filteredTxs = txFeed.filter((tx) => {
    if (tx.usdValue < minTxSize) return false;
    if (filterChain !== "All" && tx.chain !== filterChain) return false;
    return true;
  });

  // Sort wallets by period
  const sortedWallets = [...wallets].sort((a, b) => {
    if (leaderboardPeriod === "7d") return b.pnl7d - a.pnl7d;
    if (leaderboardPeriod === "30d") return b.pnl30d - a.pnl30d;
    return b.pnl90d - a.pnl90d;
  });

  // Calculate copy trade return
  useEffect(() => {
    if (selectedWallet) {
      if (leaderboardPeriod === "7d") setCopyTradeReturn(selectedWallet.pnl7d);
      else if (leaderboardPeriod === "30d") setCopyTradeReturn(selectedWallet.pnl30d);
      else setCopyTradeReturn(selectedWallet.pnl90d);
    }
  }, [selectedWallet, leaderboardPeriod]);

  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "Smart Money Tracker", href: "/tools/smart-money-tracker" }]} />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 mt-6">
          <div>
            <h1 className="text-3xl font-bold text-[var(--color-text)] flex items-center gap-3">
              💡 Smart Money Tracker
              <span
                style={{
                  background: "rgba(99, 102, 241, 0.12)",
                  color: "#6366f1",
                  fontSize: "12px",
                  fontWeight: 700,
                  padding: "2px 10px",
                  borderRadius: "999px",
                  border: "1px solid rgba(99, 102, 241, 0.3)",
                  animation: "pulse 2s infinite",
                }}
              >
                ● LIVE
              </span>
            </h1>
            <p className="text-[var(--color-text-secondary)] mt-1">Track whale wallets, VCs, and smart money across blockchains</p>
          </div>
          <button
            onClick={() => setPaused((p) => !p)}
            style={{
              background: paused ? "rgba(34, 197, 94, 0.12)" : "rgba(239, 68, 68, 0.12)",
              color: paused ? "#22c55e" : "#ef4444",
              border: `1px solid ${paused ? "rgba(34, 197, 94, 0.3)" : "rgba(239, 68, 68, 0.3)"}`,
              borderRadius: "10px",
              padding: "8px 20px",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            {paused ? "▶ Resume" : "⏸ Pause"}
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="glass rounded-2xl p-4 mb-6 flex gap-2 flex-wrap">
          {["feed", "leaderboard", "copy-trade", "alerts"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "feed" | "leaderboard" | "copy-trade" | "alerts")}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                border: "1px solid var(--color-border)",
                background: activeTab === tab ? "rgba(99, 102, 241, 0.12)" : "transparent",
                color: activeTab === tab ? "#6366f1" : "var(--color-text-secondary)",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "13px",
                transition: "all 0.2s",
              }}
            >
              {tab === "feed" && "📡 Live Feed"}
              {tab === "leaderboard" && "🏆 Leaderboard"}
              {tab === "copy-trade" && "📋 Copy Trade"}
              {tab === "alerts" && "🔔 Alerts"}
            </button>
          ))}
        </div>

        {/* ──────────────────────────────────────────────────────────────
            TAB: LIVE FEED
        ────────────────────────────────────────────────────────────── */}
        {activeTab === "feed" && (
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Active Wallets", value: wallets.length.toString(), icon: "👛", color: "#6366f1" },
                { label: "Tracked Transactions", value: txFeed.length.toString(), icon: "🔄", color: "#22c55e" },
                { label: "Total Volume", value: formatUsd(txFeed.reduce((a, t) => a + t.usdValue, 0)), icon: "💰", color: "#f59e0b" },
                { label: "Avg Wallet Size", value: formatUsd(wallets.reduce((a, w) => a + w.netWorth, 0) / (wallets.length || 1)), icon: "📊", color: "#06b6d4" },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-2xl p-4">
                  <div style={{ fontSize: "24px", marginBottom: "4px" }}>{stat.icon}</div>
                  <div style={{ fontSize: "18px", fontWeight: 700, color: stat.color }}>{stat.value}</div>
                  <div style={{ fontSize: "11px", color: "var(--color-text-secondary)" }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Filters */}
            <div className="glass rounded-2xl p-4 flex flex-wrap gap-4">
              <div>
                <label style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-text-secondary)", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                  Category
                </label>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  style={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "6px 10px", color: "var(--color-text)", fontSize: "13px" }}
                >
                  <option>All</option>
                  {CATEGORIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-text-secondary)", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                  Chain
                </label>
                <select
                  value={filterChain}
                  onChange={(e) => setFilterChain(e.target.value)}
                  style={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "6px 10px", color: "var(--color-text)", fontSize: "13px" }}
                >
                  <option>All</option>
                  {CHAINS.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-text-secondary)", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                  Min Size
                </label>
                <select
                  value={minTxSize}
                  onChange={(e) => setMinTxSize(Number(e.target.value))}
                  style={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "6px 10px", color: "var(--color-text)", fontSize: "13px" }}
                >
                  <option value={100_000}>$100K+</option>
                  <option value={500_000}>$500K+</option>
                  <option value={1_000_000}>$1M+</option>
                  <option value={5_000_000}>$5M+</option>
                </select>
              </div>
            </div>

            {/* Transaction Feed */}
            <div className="space-y-2">
              {filteredTxs.slice(0, 20).map((tx) => (
                <div
                  key={tx.id}
                  style={{
                    background: "var(--glass-bg)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "12px",
                    padding: "12px 16px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <div style={{ flex: 1, minWidth: "150px" }}>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text)" }}>{tx.walletLabel}</div>
                    <div style={{ fontSize: "12px", color: "var(--color-text-secondary)", marginTop: "2px" }}>{tx.chain}</div>
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <span
                      style={{
                        background: tx.type === "buy" ? "rgba(34, 197, 94, 0.12)" : tx.type === "sell" ? "rgba(239, 68, 68, 0.12)" : "rgba(6, 182, 212, 0.12)",
                        color: tx.type === "buy" ? "#22c55e" : tx.type === "sell" ? "#ef4444" : "#06b6d4",
                        fontSize: "11px",
                        fontWeight: 700,
                        padding: "4px 8px",
                        borderRadius: "6px",
                      }}
                    >
                      {tx.type === "buy" ? "🟢" : tx.type === "sell" ? "🔴" : "🔵"} {tx.type.toUpperCase()}
                    </span>
                  </div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-text)" }}>
                    {tx.amount.toFixed(2)} {tx.symbol}
                  </div>
                  <div style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>{formatUsd(tx.usdValue)}</div>
                  <div style={{ fontSize: "12px", color: "var(--color-text-secondary)", minWidth: "60px", textAlign: "right" }}>{ago(tx.timestamp)}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ──────────────────────────────────────────────────────────────
            TAB: LEADERBOARD
        ────────────────────────────────────────────────────────────── */}
        {activeTab === "leaderboard" && (
          <div className="space-y-6">
            {/* Period Selector */}
            <div className="glass rounded-2xl p-4 flex gap-2">
              {["7d", "30d", "90d"].map((period) => (
                <button
                  key={period}
                  onClick={() => setLeaderboardPeriod(period as "7d" | "30d" | "90d")}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    border: "1px solid var(--color-border)",
                    background: leaderboardPeriod === period ? "rgba(99, 102, 241, 0.12)" : "transparent",
                    color: leaderboardPeriod === period ? "#6366f1" : "var(--color-text-secondary)",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  {period}
                </button>
              ))}
            </div>

            {/* Leaderboard */}
            <div className="space-y-3">
              {sortedWallets.map((wallet, idx) => {
                const pnl = leaderboardPeriod === "7d" ? wallet.pnl7d : leaderboardPeriod === "30d" ? wallet.pnl30d : wallet.pnl90d;
                const medals = ["🥇", "🥈", "🥉"];
                return (
                  <div
                    key={wallet.id}
                    style={{
                      background: "var(--glass-bg)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "12px",
                      padding: "14px 16px",
                      display: "flex",
                      gap: "16px",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ fontSize: "20px", minWidth: "30px" }}>{idx < 3 ? medals[idx] : `#${idx + 1}`}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text)" }}>{wallet.label}</div>
                      <div style={{ fontSize: "11px", color: "var(--color-text-secondary)", marginTop: "2px" }}>
                        {wallet.category} • {wallet.chain} • {formatUsd(wallet.netWorth)}
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: "16px", fontWeight: 700, color: pnl >= 0 ? "#22c55e" : "#ef4444" }}>
                        {pnl >= 0 ? "+" : ""}{pnl.toFixed(2)}%
                      </div>
                      <div style={{ fontSize: "11px", color: "var(--color-text-secondary)", marginTop: "2px" }}>
                        Win Rate: {wallet.winRate.toFixed(0)}%
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ──────────────────────────────────────────────────────────────
            TAB: COPY TRADE SIMULATOR
        ────────────────────────────────────────────────────────────── */}
        {activeTab === "copy-trade" && (
          <div className="space-y-6">
            {/* Wallet Selector */}
            <div className="glass rounded-2xl p-6">
              <h3 style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px" }}>Select Wallet to Follow</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {wallets.slice(0, 6).map((wallet) => (
                  <div
                    key={wallet.id}
                    onClick={() => setSelectedWallet(wallet)}
                    style={{
                      background: selectedWallet?.id === wallet.id ? "rgba(99, 102, 241, 0.12)" : "var(--color-bg-card)",
                      border: selectedWallet?.id === wallet.id ? "2px solid #6366f1" : "1px solid var(--color-border)",
                      borderRadius: "10px",
                      padding: "14px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text)" }}>{wallet.label}</div>
                    <div style={{ fontSize: "11px", color: "var(--color-text-secondary)", marginTop: "4px" }}>
                      {wallet.category}
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: 600, color: "#6366f1", marginTop: "6px" }}>
                      {formatUsd(wallet.netWorth)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {selectedWallet && (
              <div className="space-y-6">
                {/* Wallet Details */}
                <div className="glass rounded-2xl p-6">
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px" }}>
                    {selectedWallet.label}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <div style={{ fontSize: "11px", color: "var(--color-text-secondary)", marginBottom: "4px" }}>Net Worth</div>
                      <div style={{ fontSize: "18px", fontWeight: 700, color: "#6366f1" }}>{formatUsd(selectedWallet.netWorth)}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", color: "var(--color-text-secondary)", marginBottom: "4px" }}>7d Return</div>
                      <div style={{ fontSize: "18px", fontWeight: 700, color: selectedWallet.pnl7d >= 0 ? "#22c55e" : "#ef4444" }}>
                        {selectedWallet.pnl7d >= 0 ? "+" : ""}{selectedWallet.pnl7d.toFixed(2)}%
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", color: "var(--color-text-secondary)", marginBottom: "4px" }}>Win Rate</div>
                      <div style={{ fontSize: "18px", fontWeight: 700, color: "#f59e0b" }}>{selectedWallet.winRate.toFixed(1)}%</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", color: "var(--color-text-secondary)", marginBottom: "4px" }}>Chain</div>
                      <div style={{ fontSize: "18px", fontWeight: 700, color: "#06b6d4" }}>{selectedWallet.chain}</div>
                    </div>
                  </div>
                </div>

                {/* Top Holdings */}
                <div className="glass rounded-2xl p-6">
                  <h3 style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-text)", marginBottom: "12px" }}>Top Holdings</h3>
                  <div className="space-y-3">
                    {selectedWallet.topHoldings.map((holding, idx) => (
                      <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "8px", borderBottom: "1px solid var(--color-border)" }}>
                        <div>
                          <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text)" }}>{holding.symbol}</div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text)" }}>{holding.amount.toFixed(2)}</div>
                          <div style={{ fontSize: "11px", color: "var(--color-text-secondary)" }}>{formatUsd(holding.value)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Copy Trade Simulation */}
                <div className="glass rounded-2xl p-6" style={{ border: "2px solid rgba(99, 102, 241, 0.3)" }}>
                  <h3 style={{ fontSize: "14px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px" }}>📈 Hypothetical Returns (if you copy-traded)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "32px", fontWeight: 800, color: copyTradeReturn >= 0 ? "#22c55e" : "#ef4444", marginBottom: "8px" }}>
                        {copyTradeReturn >= 0 ? "+" : ""}{copyTradeReturn.toFixed(2)}%
                      </div>
                      <div style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>
                        {leaderboardPeriod === "7d" && "7-Day Return"}
                        {leaderboardPeriod === "30d" && "30-Day Return"}
                        {leaderboardPeriod === "90d" && "90-Day Return"}
                      </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "24px", fontWeight: 700, color: "#06b6d4", marginBottom: "8px" }}>$10,000</div>
                      <div style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>Initial Investment</div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "24px", fontWeight: 700, color: copyTradeReturn >= 0 ? "#22c55e" : "#ef4444", marginBottom: "8px" }}>
                        {formatUsd(10_000 * (1 + copyTradeReturn / 100))}
                      </div>
                      <div style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>Current Value</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ──────────────────────────────────────────────────────────────
            TAB: ALERTS SETUP
        ────────────────────────────────────────────────────────────── */}
        {activeTab === "alerts" && (
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 space-y-4">
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)" }}>Alert Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-secondary)", display: "block", marginBottom: "8px" }}>
                    Alert When Buy Detected
                  </label>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <input type="checkbox" defaultChecked style={{ cursor: "pointer" }} />
                    <span style={{ fontSize: "13px", color: "var(--color-text)" }}>Enabled</span>
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-secondary)", display: "block", marginBottom: "8px" }}>
                    Min Transaction Size
                  </label>
                  <input
                    type="number"
                    defaultValue="500000"
                    style={{
                      width: "100%",
                      background: "var(--color-bg-card)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "8px",
                      padding: "8px 12px",
                      color: "var(--color-text)",
                      fontSize: "13px",
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-secondary)", display: "block", marginBottom: "8px" }}>
                    Alert Method
                  </label>
                  <select
                    style={{
                      width: "100%",
                      background: "var(--color-bg-card)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "8px",
                      padding: "8px 12px",
                      color: "var(--color-text)",
                      fontSize: "13px",
                    }}
                  >
                    <option>Email</option>
                    <option>Discord Webhook</option>
                    <option>Telegram Bot</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-text-secondary)", display: "block", marginBottom: "8px" }}>
                    Include Sell Alerts
                  </label>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <input type="checkbox" defaultChecked style={{ cursor: "pointer" }} />
                    <span style={{ fontSize: "13px", color: "var(--color-text)" }}>Enabled</span>
                  </div>
                </div>
              </div>
              <button
                style={{
                  background: "linear-gradient(to right, #6366f1, #8b5cf6)",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "10px 24px",
                  fontWeight: 600,
                  cursor: "pointer",
                  marginTop: "12px",
                }}
              >
                💾 Save Alert Configuration
              </button>
            </div>

            {/* Active Alerts */}
            <div className="glass rounded-2xl p-6">
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--color-text)", marginBottom: "16px" }}>Active Alerts (Simulated)</h3>
              <div className="space-y-3">
                {[
                  { wallet: "Paradigm Capital", type: "Buy", size: "$2.5M", time: "2 mins ago" },
                  { wallet: "a16z Crypto", type: "Sell", size: "$1.8M", time: "15 mins ago" },
                  { wallet: "Jump Trading", type: "Buy", size: "$5.2M", time: "1 hour ago" },
                ].map((alert, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "12px",
                      background: "var(--color-bg-card)",
                      borderRadius: "8px",
                      borderLeft: alert.type === "Buy" ? "4px solid #22c55e" : "4px solid #ef4444",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text)" }}>{alert.wallet}</div>
                      <div style={{ fontSize: "11px", color: "var(--color-text-secondary)", marginTop: "2px" }}>
                        {alert.type} {alert.size}
                      </div>
                    </div>
                    <div style={{ fontSize: "11px", color: "var(--color-text-secondary)" }}>{alert.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-8 glass rounded-xl p-4 text-center">
          <p style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>
            Smart Money Tracker shows simulated blockchain data for demonstration. Not financial advice. Past performance does not guarantee future results. Copy trading is risky.
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}
