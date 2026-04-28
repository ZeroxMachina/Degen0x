"use client";

import { useState, useEffect, useMemo } from "react";

interface WhaleTransaction {
  id: string;
  chain: "ethereum" | "solana" | "bitcoin";
  from: string;
  to: string;
  amount: number;
  token: string;
  usdValue: number;
  type: "transfer" | "swap" | "bridge" | "deposit" | "withdraw";
  timestamp: Date;
  txHash: string;
}

interface TrackedWallet {
  address: string;
  label: string;
  chain: "ethereum" | "solana" | "bitcoin";
  tags: string[];
  pnl30d: number;
  totalValue: number;
  lastActive: Date;
}

const CHAIN_COLORS: Record<string, { bg: string; text: string; icon: string }> = {
  ethereum: { bg: "#627eea20", text: "#627eea", icon: "⟠" },
  solana: { bg: "#9945ff20", text: "#9945ff", icon: "◎" },
  bitcoin: { bg: "#f7931a20", text: "#f7931a", icon: "₿" },
};

const TYPE_LABELS: Record<string, { label: string; color: string }> = {
  transfer: { label: "Transfer", color: "#58a6ff" },
  swap: { label: "Swap", color: "#bc8cff" },
  bridge: { label: "Bridge", color: "#f0883e" },
  deposit: { label: "CEX Deposit", color: "#f85149" },
  withdraw: { label: "CEX Withdraw", color: "#3fb950" },
};

function generateWhaleData(): WhaleTransaction[] {
  const tokens = ["ETH", "WBTC", "USDC", "USDT", "SOL", "LINK", "UNI", "AAVE", "ARB", "OP", "PEPE", "WIF"];
  const types: WhaleTransaction["type"][] = ["transfer", "swap", "bridge", "deposit", "withdraw"];
  const chains: WhaleTransaction["chain"][] = ["ethereum", "solana", "bitcoin"];

  return Array.from({ length: 30 }, (_, i) => ({
    id: `tx-${i}`,
    chain: chains[Math.floor(Math.random() * chains.length)],
    from: `0x${Math.random().toString(16).slice(2, 10)}...${Math.random().toString(16).slice(2, 6)}`,
    to: `0x${Math.random().toString(16).slice(2, 10)}...${Math.random().toString(16).slice(2, 6)}`,
    amount: Math.floor(Math.random() * 10000) + 100,
    token: tokens[Math.floor(Math.random() * tokens.length)],
    usdValue: Math.floor(Math.random() * 50000000) + 100000,
    type: types[Math.floor(Math.random() * types.length)],
    timestamp: new Date(Date.now() - Math.random() * 86400000 * 2),
    txHash: `0x${Math.random().toString(16).slice(2)}`,
  }));
}

function generateTrackedWallets(): TrackedWallet[] {
  const labels = [
    "Jump Trading", "Wintermute", "Galaxy Digital", "Three Arrows Capital (Remnant)",
    "Paradigm Fund", "a]16z Portfolio", "Temasek Crypto", "Dragonfly Capital",
    "Vitalik.eth", "Justin Sun", "CZ Binance (personal)", "Nansen Smart Money #42",
    "GMX Top Trader", "Aave Whale #7", "Uniswap LP King",
  ];
  const chains: TrackedWallet["chain"][] = ["ethereum", "solana", "bitcoin"];
  const tagOptions = ["Market Maker", "VC Fund", "DeFi Power User", "NFT Collector", "MEV Bot", "Influencer", "Exchange"];

  return labels.map((label, i) => ({
    address: `0x${Math.random().toString(16).slice(2, 10)}...${Math.random().toString(16).slice(2, 6)}`,
    label,
    chain: chains[i % chains.length],
    tags: [tagOptions[i % tagOptions.length], tagOptions[(i + 3) % tagOptions.length]],
    pnl30d: (Math.random() - 0.3) * 2000000,
    totalValue: Math.floor(Math.random() * 500000000) + 1000000,
    lastActive: new Date(Date.now() - Math.random() * 86400000 * 7),
  }));
}

function formatUSD(n: number): string {
  if (Math.abs(n) >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (Math.abs(n) >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
  if (Math.abs(n) >= 1e3) return `$${(n / 1e3).toFixed(1)}K`;
  return `$${n.toFixed(0)}`;
}

function timeAgo(date: Date): string {
  const s = Math.floor((Date.now() - date.getTime()) / 1000);
  if (s < 60) return `${s}s ago`;
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
}

export default function WhaleTrackerClient() {
  const [transactions] = useState<WhaleTransaction[]>(generateWhaleData);
  const [wallets] = useState<TrackedWallet[]>(generateTrackedWallets);
  const [activeTab, setActiveTab] = useState<"feed" | "wallets" | "flow">("feed");
  const [chainFilter, setChainFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [minValue, setMinValue] = useState(100000);
  const [liveCount, setLiveCount] = useState(0);

  const [flowData] = useState(() => ({
    ethereum: { inflow: Math.random() * 100000000, outflow: Math.random() * 100000000 },
    solana: { inflow: Math.random() * 100000000, outflow: Math.random() * 100000000 },
    bitcoin: { inflow: Math.random() * 100000000, outflow: Math.random() * 100000000 },
  }));
  const [tokenMovements] = useState(() =>
    ["BTC", "ETH", "USDC", "USDT", "SOL", "LINK"].map((token) => ({
      token,
      vol: Math.random() * 500000000 + 10000000,
      txCount: Math.floor(Math.random() * 200) + 10,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount((c) => c + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const filteredTx = useMemo(() => {
    return transactions
      .filter((tx) => chainFilter === "all" || tx.chain === chainFilter)
      .filter((tx) => typeFilter === "all" || tx.type === typeFilter)
      .filter((tx) => tx.usdValue >= minValue)
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }, [transactions, chainFilter, typeFilter, minValue]);

  const totalVolume = transactions.reduce((s, tx) => s + tx.usdValue, 0);
  const cexDeposits = transactions.filter((t) => t.type === "deposit").reduce((s, t) => s + t.usdValue, 0);
  const cexWithdraws = transactions.filter((t) => t.type === "withdraw").reduce((s, t) => s + t.usdValue, 0);

  return (
    <div className="min-h-screen" style={{ background: "#0d1117", color: "#e6edf3" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🐋</span>
            <h1 className="text-3xl md:text-4xl font-bold">Whale Wallet Tracker</h1>
            <span className="ml-3 px-2.5 py-1 text-xs font-bold rounded-full animate-pulse"
              style={{ background: "#3fb95020", color: "#3fb950", border: "1px solid #3fb95040" }}>
              LIVE {liveCount > 0 && `+${liveCount}`}
            </span>
          </div>
          <p className="text-lg" style={{ color: "#8b949e" }}>
            Track smart money flows, whale transactions, and institutional moves across major blockchains.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "24h Whale Volume", value: formatUSD(totalVolume), color: "#58a6ff" },
            { label: "CEX Inflows", value: formatUSD(cexDeposits), color: "#f85149", sub: "Bearish signal" },
            { label: "CEX Outflows", value: formatUSD(cexWithdraws), color: "#3fb950", sub: "Bullish signal" },
            { label: "Tracked Wallets", value: wallets.length.toString(), color: "#bc8cff" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl p-4" style={{ background: "#161b22", border: "1px solid #30363d" }}>
              <div className="text-xs font-semibold uppercase mb-1" style={{ color: "#8b949e" }}>{stat.label}</div>
              <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
              {stat.sub && <div className="text-xs mt-1" style={{ color: "#8b949e" }}>{stat.sub}</div>}
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6" role="tablist" aria-label="Whale tracker views">
          {[
            { id: "feed" as const, label: "Live Feed", icon: "📡" },
            { id: "wallets" as const, label: "Tracked Wallets", icon: "👁" },
            { id: "flow" as const, label: "Flow Analysis", icon: "📊" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              style={{
                background: activeTab === tab.id ? "#6366f120" : "#161b22",
                color: activeTab === tab.id ? "#818cf8" : "#8b949e",
                border: `1px solid ${activeTab === tab.id ? "#6366f140" : "#30363d"}`,
              }}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Feed Tab */}
        {activeTab === "feed" && (
          <>
            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-6">
              <select
                value={chainFilter}
                onChange={(e) => setChainFilter(e.target.value)}
                className="rounded-lg px-3 py-2 text-sm"
                style={{ background: "#161b22", color: "#e6edf3", border: "1px solid #30363d" }}
              >
                <option value="all">All Chains</option>
                <option value="ethereum">⟠ Ethereum</option>
                <option value="solana">◎ Solana</option>
                <option value="bitcoin">₿ Bitcoin</option>
              </select>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="rounded-lg px-3 py-2 text-sm"
                style={{ background: "#161b22", color: "#e6edf3", border: "1px solid #30363d" }}
              >
                <option value="all">All Types</option>
                {Object.entries(TYPE_LABELS).map(([k, v]) => (
                  <option key={k} value={k}>{v.label}</option>
                ))}
              </select>
              <select
                value={minValue}
                onChange={(e) => setMinValue(Number(e.target.value))}
                className="rounded-lg px-3 py-2 text-sm"
                style={{ background: "#161b22", color: "#e6edf3", border: "1px solid #30363d" }}
              >
                <option value={100000}>Min $100K</option>
                <option value={500000}>Min $500K</option>
                <option value={1000000}>Min $1M</option>
                <option value={5000000}>Min $5M</option>
                <option value={10000000}>Min $10M</option>
              </select>
            </div>

            {/* Transaction Feed */}
            <div className="space-y-2">
              {filteredTx.map((tx) => {
                const chain = CHAIN_COLORS[tx.chain];
                const type = TYPE_LABELS[tx.type];
                return (
                  <div
                    key={tx.id}
                    className="rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3 transition-colors hover:border-[#6366f180]"
                    style={{ background: "#161b22", border: "1px solid #30363d" }}
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <span className="text-xl w-8 text-center" style={{ color: chain.text }}>{chain.icon}</span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono text-sm" style={{ color: "#e6edf3" }}>{tx.from}</span>
                          <span style={{ color: "#8b949e" }}>→</span>
                          <span className="font-mono text-sm" style={{ color: "#e6edf3" }}>{tx.to}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
                            style={{ background: `${type.color}20`, color: type.color }}>
                            {type.label}
                          </span>
                          <span className="text-xs" style={{ color: "#8b949e" }}>{timeAgo(tx.timestamp)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right sm:min-w-[140px]">
                      <div className="font-bold text-lg" style={{ color: "#e6edf3" }}>
                        {tx.amount.toLocaleString()} {tx.token}
                      </div>
                      <div className="text-sm font-semibold" style={{ color: "#8b949e" }}>{formatUSD(tx.usdValue)}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Wallets Tab */}
        {activeTab === "wallets" && (
          <div className="space-y-3">
            {wallets.map((w, i) => {
              const chain = CHAIN_COLORS[w.chain];
              return (
                <div
                  key={i}
                  className="rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3"
                  style={{ background: "#161b22", border: "1px solid #30363d" }}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span className="text-xl w-8 text-center" style={{ color: chain.text }}>{chain.icon}</span>
                    <div>
                      <div className="font-semibold text-sm">{w.label}</div>
                      <div className="font-mono text-xs" style={{ color: "#8b949e" }}>{w.address}</div>
                      <div className="flex gap-1.5 mt-1">
                        {w.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded-full"
                            style={{ background: "#6366f115", color: "#818cf8", border: "1px solid #6366f130" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 sm:min-w-[300px] text-right">
                    <div>
                      <div className="text-xs" style={{ color: "#8b949e" }}>Total Value</div>
                      <div className="font-bold text-sm">{formatUSD(w.totalValue)}</div>
                    </div>
                    <div>
                      <div className="text-xs" style={{ color: "#8b949e" }}>30d PnL</div>
                      <div className="font-bold text-sm" style={{ color: w.pnl30d >= 0 ? "#3fb950" : "#f85149" }}>
                        {w.pnl30d >= 0 ? "+" : ""}{formatUSD(w.pnl30d)}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs" style={{ color: "#8b949e" }}>Last Active</div>
                      <div className="text-sm" style={{ color: "#e6edf3" }}>{timeAgo(w.lastActive)}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Flow Analysis Tab */}
        {activeTab === "flow" && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6" style={{ background: "#161b22", border: "1px solid #30363d" }}>
              <h3 className="font-bold text-lg mb-4">Net Exchange Flow (24h)</h3>
              <div className="space-y-4">
                {(["ethereum", "solana", "bitcoin"] as const).map((chain) => {
                  const c = CHAIN_COLORS[chain];
                  const { inflow, outflow } = flowData[chain];
                  const net = outflow - inflow;
                  return (
                    <div key={chain} className="p-3 rounded-lg" style={{ background: "#0d1117" }}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="flex items-center gap-2 font-semibold text-sm">
                          <span style={{ color: c.text }}>{c.icon}</span> {chain.charAt(0).toUpperCase() + chain.slice(1)}
                        </span>
                        <span className="font-bold text-sm" style={{ color: net >= 0 ? "#3fb950" : "#f85149" }}>
                          {net >= 0 ? "+" : ""}{formatUSD(net)}
                        </span>
                      </div>
                      <div className="flex gap-4 text-xs" style={{ color: "#8b949e" }}>
                        <span>In: <span style={{ color: "#f85149" }}>{formatUSD(inflow)}</span></span>
                        <span>Out: <span style={{ color: "#3fb950" }}>{formatUSD(outflow)}</span></span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-xl p-6" style={{ background: "#161b22", border: "1px solid #30363d" }}>
              <h3 className="font-bold text-lg mb-4">Top Token Movements (24h)</h3>
              <div className="space-y-3">
                {tokenMovements.map(({ token, vol, txCount }) => {
                  return (
                    <div key={token} className="flex items-center justify-between p-3 rounded-lg" style={{ background: "#0d1117" }}>
                      <div>
                        <span className="font-bold text-sm">{token}</span>
                        <span className="text-xs ml-2" style={{ color: "#8b949e" }}>{txCount} txs</span>
                      </div>
                      <span className="font-mono font-bold text-sm" style={{ color: "#58a6ff" }}>{formatUSD(vol)}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="md:col-span-2 rounded-xl p-6" style={{ background: "#161b22", border: "1px solid #30363d" }}>
              <h3 className="font-bold text-lg mb-4">Smart Money Signal</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { signal: "CEX outflows > inflows", sentiment: "Bullish", confidence: 72, color: "#3fb950" },
                  { signal: "Stablecoin accumulation rising", sentiment: "Neutral-Bullish", confidence: 58, color: "#d29922" },
                  { signal: "DeFi TVL increasing", sentiment: "Bullish", confidence: 65, color: "#3fb950" },
                ].map((s) => (
                  <div key={s.signal} className="p-4 rounded-lg" style={{ background: "#0d1117" }}>
                    <div className="text-sm mb-2" style={{ color: "#8b949e" }}>{s.signal}</div>
                    <div className="font-bold text-lg" style={{ color: s.color }}>{s.sentiment}</div>
                    <div className="mt-2 h-2 rounded-full overflow-hidden" style={{ background: "#30363d" }}>
                      <div className="h-full rounded-full" style={{ background: s.color, width: `${s.confidence}%` }} />
                    </div>
                    <div className="text-xs mt-1" style={{ color: "#8b949e" }}>Confidence: {s.confidence}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
