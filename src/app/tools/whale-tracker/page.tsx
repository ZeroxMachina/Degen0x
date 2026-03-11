"use client";

import { useState, useEffect, useCallback } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

/* ────────────────────────────────────────────────────────────
   Types
──────────────────────────────────────────────────────────── */
interface WhaleTransaction {
  id: string;
  hash: string;
  chain: string;
  chainColor: string;
  chainIcon: string;
  from: string;
  fromLabel?: string;
  to: string;
  toLabel?: string;
  amount: number;
  amountUsd: number;
  symbol: string;
  symbolColor: string;
  type: "transfer" | "swap" | "mint" | "burn" | "bridge" | "stake";
  timestamp: Date;
  isNew?: boolean;
}

/* ────────────────────────────────────────────────────────────
   Helpers
──────────────────────────────────────────────────────────── */
function shortAddr(addr: string) {
  return addr.startsWith("0x") || addr.startsWith("1") || addr.startsWith("bc1")
    ? `${addr.slice(0, 6)}…${addr.slice(-4)}`
    : addr;
}

function ago(date: Date) {
  const s = Math.floor((Date.now() - date.getTime()) / 1000);
  if (s < 60) return `${s}s ago`;
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  return `${Math.floor(s / 3600)}h ago`;
}

function formatUsd(n: number) {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}K`;
  return `$${n.toFixed(2)}`;
}

/* ────────────────────────────────────────────────────────────
   Simulated whale-feed generator (real API would replace this)
──────────────────────────────────────────────────────────── */
const CHAINS = [
  { name: "Ethereum", icon: "⟠", color: "#627EEA" },
  { name: "Solana",   icon: "◎", color: "#9945FF" },
  { name: "BNB Chain",icon: "💛", color: "#F0B90B" },
  { name: "Arbitrum", icon: "◉", color: "#28A0F0" },
  { name: "Base",     icon: "🔵", color: "#0052FF" },
  { name: "Bitcoin",  icon: "₿",  color: "#F7931A" },
];

const TOKENS = [
  { symbol: "BTC",  color: "#F7931A", priceUsd: 97_800 },
  { symbol: "ETH",  color: "#627EEA", priceUsd: 3_280 },
  { symbol: "SOL",  color: "#9945FF", priceUsd: 185 },
  { symbol: "USDT", color: "#26A17B", priceUsd: 1 },
  { symbol: "USDC", color: "#2775CA", priceUsd: 1 },
  { symbol: "BNB",  color: "#F0B90B", priceUsd: 680 },
  { symbol: "XRP",  color: "#00AAE4", priceUsd: 2.45 },
  { symbol: "LINK", color: "#375BD2", priceUsd: 18.7 },
  { symbol: "ARB",  color: "#28A0F0", priceUsd: 1.12 },
  { symbol: "UNI",  color: "#FF007A", priceUsd: 9.85 },
];

const LABELS = [
  "Binance Hot Wallet", "Coinbase Custody", "Kraken Exchange", "Jump Trading",
  "Wintermute", "Alameda Research", "Galaxy Digital", "Three Arrows Capital (Defunct)",
  "Unknown Whale", "DeFi Protocol: Aave", "DeFi Protocol: Uniswap", "Polychain Capital",
  "Paradigm Capital", "a16z Crypto", "Multicoin Capital", "FTX Estate",
];

const TX_TYPES: WhaleTransaction["type"][] = ["transfer", "swap", "mint", "burn", "bridge", "stake"];

let idCounter = 1;

function generateTx(): WhaleTransaction {
  const chain   = CHAINS[Math.floor(Math.random() * CHAINS.length)];
  const token   = TOKENS[Math.floor(Math.random() * TOKENS.length)];
  // Whale size: $500K – $250M
  const amountUsd = 500_000 + Math.random() * 249_500_000;
  const amount    = amountUsd / token.priceUsd;
  const fromLabel = Math.random() > 0.45 ? LABELS[Math.floor(Math.random() * LABELS.length)] : undefined;
  const toLabel   = Math.random() > 0.55 ? LABELS[Math.floor(Math.random() * LABELS.length)] : undefined;

  return {
    id: `tx-${idCounter++}`,
    hash: `0x${Math.random().toString(16).slice(2, 18)}…`,
    chain: chain.name,
    chainColor: chain.color,
    chainIcon: chain.icon,
    from: fromLabel ? `0x${Math.random().toString(16).slice(2, 12)}` : `0x${Math.random().toString(16).slice(2, 12)}`,
    fromLabel,
    to: `0x${Math.random().toString(16).slice(2, 12)}`,
    toLabel,
    amount,
    amountUsd,
    symbol: token.symbol,
    symbolColor: token.color,
    type: TX_TYPES[Math.floor(Math.random() * TX_TYPES.length)],
    timestamp: new Date(Date.now() - Math.random() * 60_000),
    isNew: true,
  };
}

function buildInitialFeed(n = 30): WhaleTransaction[] {
  return Array.from({ length: n }, () => generateTx()).map((tx) => ({
    ...tx,
    timestamp: new Date(Date.now() - Math.random() * 3_600_000),
    isNew: false,
  }));
}

/* ────────────────────────────────────────────────────────────
   Type badge colours
──────────────────────────────────────────────────────────── */
const TYPE_META: Record<WhaleTransaction["type"], { label: string; bg: string; text: string }> = {
  transfer: { label: "Transfer",  bg: "rgba(99,102,241,0.12)",  text: "#6366f1" },
  swap:     { label: "Swap",      bg: "rgba(6,182,212,0.12)",   text: "#06b6d4" },
  mint:     { label: "Mint",      bg: "rgba(34,197,94,0.12)",   text: "#22c55e" },
  burn:     { label: "Burn",      bg: "rgba(239,68,68,0.12)",   text: "#ef4444" },
  bridge:   { label: "Bridge",    bg: "rgba(245,158,11,0.12)",  text: "#f59e0b" },
  stake:    { label: "Stake",     bg: "rgba(168,85,247,0.12)",  text: "#a855f7" },
};

/* ────────────────────────────────────────────────────────────
   Component
──────────────────────────────────────────────────────────── */
export default function WhaleTrackerPage() {
  const [txs, setTxs]             = useState<WhaleTransaction[]>([]);
  const [minUsd, setMinUsd]       = useState(1_000_000);
  const [filterChain, setFilterChain] = useState("All");
  const [filterType, setFilterType]   = useState("All");
  const [filterToken, setFilterToken] = useState("All");
  const [paused, setPaused]       = useState(false);
  const [totalVol, setTotalVol]   = useState(0);
  const [alertCount, setAlertCount] = useState(0);

  // ── Init ──
  useEffect(() => {
    const feed = buildInitialFeed(30);
    setTxs(feed);
    setTotalVol(feed.reduce((a, t) => a + t.amountUsd, 0));
    setAlertCount(feed.filter((t) => t.amountUsd >= 10_000_000).length);
  }, []);

  // ── Live feed: new tx every 4-8 seconds ──
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      const newTx = generateTx();
      setTxs((prev) => {
        const updated = [newTx, ...prev].slice(0, 200);
        return updated;
      });
      setTotalVol((v) => v + newTx.amountUsd);
      if (newTx.amountUsd >= 10_000_000) setAlertCount((c) => c + 1);
      // Clear isNew after 3s
      setTimeout(() => {
        setTxs((prev) => prev.map((t) => t.id === newTx.id ? { ...t, isNew: false } : t));
      }, 3_000);
    }, 4_000 + Math.random() * 4_000);
    return () => clearInterval(interval);
  }, [paused]);

  // ── Filter ──
  const filtered = txs.filter((tx) => {
    if (tx.amountUsd < minUsd) return false;
    if (filterChain !== "All" && tx.chain !== filterChain) return false;
    if (filterType  !== "All" && tx.type  !== filterType)  return false;
    if (filterToken !== "All" && tx.symbol !== filterToken) return false;
    return true;
  });

  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "Whale Tracker", href: "/tools/whale-tracker" }]} />

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 mt-6">
          <div>
            <h1 className="text-3xl font-bold text-[var(--color-text)] flex items-center gap-3">
              🐋 Whale Alert Tracker
              <span style={{
                background: "rgba(239,68,68,0.12)", color: "#ef4444",
                fontSize: "12px", fontWeight: 700, padding: "2px 10px",
                borderRadius: "999px", border: "1px solid rgba(239,68,68,0.3)",
                animation: "pulse 2s infinite",
              }}>
                ● LIVE
              </span>
            </h1>
            <p className="text-[var(--color-text-secondary)] mt-1">
              Real-time on-chain large transactions across major blockchains. Follow the smart money.
            </p>
          </div>
          <button
            onClick={() => setPaused((p) => !p)}
            style={{
              background: paused ? "rgba(34,197,94,0.12)" : "rgba(239,68,68,0.12)",
              color: paused ? "#22c55e" : "#ef4444",
              border: `1px solid ${paused ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)"}`,
              borderRadius: "10px", padding: "8px 20px", fontWeight: 600, cursor: "pointer",
              fontSize: "14px",
            }}
          >
            {paused ? "▶ Resume Feed" : "⏸ Pause Feed"}
          </button>
        </div>

        {/* ── Stats Bar ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Live Transactions", value: txs.length.toString(), icon: "📡", color: "#6366f1" },
            { label: "Total Volume (Session)", value: formatUsd(totalVol), icon: "💰", color: "#22c55e" },
            { label: "Mega Whales (>$10M)", value: alertCount.toString(), icon: "🚨", color: "#ef4444" },
            { label: "Filtered Results", value: filtered.length.toString(), icon: "🔍", color: "#06b6d4" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-2xl p-4">
              <div style={{ fontSize: "24px", marginBottom: "4px" }}>{s.icon}</div>
              <div style={{ fontSize: "20px", fontWeight: 700, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Filters ── */}
        <div className="glass rounded-2xl p-4 mb-6 flex flex-wrap gap-4 items-center">
          {/* Min USD */}
          <div>
            <label style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "4px" }}>
              Min Size
            </label>
            <select
              value={minUsd}
              onChange={(e) => setMinUsd(Number(e.target.value))}
              style={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "6px 10px", color: "var(--color-text)", fontSize: "13px" }}
            >
              <option value={500_000}>$500K+</option>
              <option value={1_000_000}>$1M+</option>
              <option value={5_000_000}>$5M+</option>
              <option value={10_000_000}>$10M+</option>
              <option value={50_000_000}>$50M+</option>
              <option value={100_000_000}>$100M+</option>
            </select>
          </div>

          {/* Chain */}
          <div>
            <label style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "4px" }}>
              Chain
            </label>
            <select
              value={filterChain}
              onChange={(e) => setFilterChain(e.target.value)}
              style={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "6px 10px", color: "var(--color-text)", fontSize: "13px" }}
            >
              <option>All</option>
              {CHAINS.map((c) => <option key={c.name}>{c.name}</option>)}
            </select>
          </div>

          {/* Token */}
          <div>
            <label style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "4px" }}>
              Token
            </label>
            <select
              value={filterToken}
              onChange={(e) => setFilterToken(e.target.value)}
              style={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "6px 10px", color: "var(--color-text)", fontSize: "13px" }}
            >
              <option>All</option>
              {TOKENS.map((t) => <option key={t.symbol}>{t.symbol}</option>)}
            </select>
          </div>

          {/* Type */}
          <div>
            <label style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "4px" }}>
              Tx Type
            </label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              style={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: "8px", padding: "6px 10px", color: "var(--color-text)", fontSize: "13px" }}
            >
              <option>All</option>
              {TX_TYPES.map((t) => <option key={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>)}
            </select>
          </div>
        </div>

        {/* ── Transaction Feed ── */}
        <div className="space-y-2">
          {filtered.length === 0 && (
            <div className="glass rounded-2xl p-12 text-center text-[var(--color-text-secondary)]">
              No transactions match the current filters. Try lowering the minimum size.
            </div>
          )}
          {filtered.map((tx) => (
            <div
              key={tx.id}
              style={{
                background: tx.isNew
                  ? "rgba(99,102,241,0.08)"
                  : "var(--color-bg-card)",
                border: tx.isNew
                  ? "1px solid rgba(99,102,241,0.3)"
                  : "1px solid var(--color-border)",
                borderRadius: "14px",
                padding: "14px 18px",
                transition: "all 0.6s ease",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                {/* Chain + Type */}
                <div className="flex items-center gap-2 flex-shrink-0" style={{ minWidth: "160px" }}>
                  <span style={{ fontSize: "20px" }}>{tx.chainIcon}</span>
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: 600, color: tx.chainColor }}>{tx.chain}</div>
                    <span style={{
                      background: TYPE_META[tx.type].bg,
                      color: TYPE_META[tx.type].text,
                      fontSize: "10px", fontWeight: 700, padding: "1px 7px",
                      borderRadius: "999px",
                    }}>
                      {TYPE_META[tx.type].label}
                    </span>
                  </div>
                </div>

                {/* From → To */}
                <div className="flex-1 flex items-center gap-2 flex-wrap text-sm">
                  <div style={{ background: "var(--color-bg)", borderRadius: "6px", padding: "3px 8px" }}>
                    <span style={{ fontSize: "10px", color: "var(--color-text-secondary)" }}>FROM </span>
                    <span style={{ fontWeight: 600, color: "var(--color-text)", fontFamily: "monospace" }}>
                      {tx.fromLabel ?? shortAddr(tx.from)}
                    </span>
                  </div>
                  <span style={{ color: "var(--color-text-secondary)", fontSize: "16px" }}>→</span>
                  <div style={{ background: "var(--color-bg)", borderRadius: "6px", padding: "3px 8px" }}>
                    <span style={{ fontSize: "10px", color: "var(--color-text-secondary)" }}>TO </span>
                    <span style={{ fontWeight: 600, color: "var(--color-text)", fontFamily: "monospace" }}>
                      {tx.toLabel ?? shortAddr(tx.to)}
                    </span>
                  </div>
                </div>

                {/* Amount */}
                <div className="text-right flex-shrink-0">
                  <div style={{ fontWeight: 800, fontSize: "16px", color: tx.symbolColor }}>
                    {tx.amount >= 1 ? tx.amount.toLocaleString("en-US", { maximumFractionDigits: 2 }) : tx.amount.toFixed(6)} {tx.symbol}
                  </div>
                  <div style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginTop: "1px" }}>
                    {formatUsd(tx.amountUsd)}
                  </div>
                </div>

                {/* Time */}
                <div style={{ fontSize: "12px", color: "var(--color-text-secondary)", flexShrink: 0, textAlign: "right", minWidth: "60px" }}>
                  {ago(tx.timestamp)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Disclaimer ── */}
        <div className="mt-8 glass rounded-xl p-4 text-center">
          <p style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>
            🔔 Whale tracker shows simulated on-chain data for demonstration. In production, this feeds from Etherscan, Solscan, and BscScan APIs in real-time. Not financial advice.
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
