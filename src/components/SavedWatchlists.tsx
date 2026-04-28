"use client";

import { useState, useCallback } from "react";

interface WatchlistToken {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume24h: number;
  sparkline: number[];
  alertPrice?: number;
}

interface Watchlist {
  id: string;
  name: string;
  icon: string;
  tokens: WatchlistToken[];
  createdAt: string;
}

const DEFAULT_WATCHLISTS: Watchlist[] = [
  {
    id: "wl-1", name: "Blue Chips", icon: "💎", createdAt: "2026-03-10",
    tokens: [
      { symbol: "BTC", name: "Bitcoin", price: 98432.50, change24h: 2.34, change7d: 8.12, marketCap: 1940000000000, volume24h: 42300000000, sparkline: [95, 96, 94, 97, 98, 97, 98.4] },
      { symbol: "ETH", name: "Ethereum", price: 3845.20, change24h: 1.87, change7d: 5.43, marketCap: 462000000000, volume24h: 18700000000, sparkline: [3700, 3750, 3720, 3800, 3830, 3810, 3845] },
      { symbol: "SOL", name: "Solana", price: 187.65, change24h: 4.12, change7d: 12.34, marketCap: 86400000000, volume24h: 4560000000, sparkline: [165, 170, 172, 178, 182, 185, 187] },
      { symbol: "LINK", name: "Chainlink", price: 18.92, change24h: -0.34, change7d: 3.21, marketCap: 11800000000, volume24h: 890000000, sparkline: [18.2, 18.5, 18.3, 18.8, 19.1, 18.7, 18.9] },
    ],
  },
  {
    id: "wl-2", name: "Meme Coins", icon: "🐸", createdAt: "2026-03-11",
    tokens: [
      { symbol: "DOGE", name: "Dogecoin", price: 0.1823, change24h: 6.45, change7d: -2.13, marketCap: 26500000000, volume24h: 2340000000, sparkline: [0.17, 0.175, 0.18, 0.185, 0.178, 0.18, 0.182] },
      { symbol: "PEPE", name: "Pepe", price: 0.00001234, change24h: 12.34, change7d: 45.67, marketCap: 5200000000, volume24h: 1230000000, sparkline: [0.000008, 0.000009, 0.0000095, 0.00001, 0.000011, 0.0000115, 0.00001234] },
      { symbol: "WIF", name: "dogwifhat", price: 2.45, change24h: -3.21, change7d: 18.76, marketCap: 2450000000, volume24h: 567000000, sparkline: [2.1, 2.2, 2.35, 2.5, 2.4, 2.38, 2.45] },
      { symbol: "BONK", name: "Bonk", price: 0.0000234, change24h: 8.76, change7d: 23.45, marketCap: 1560000000, volume24h: 345000000, sparkline: [0.000018, 0.000019, 0.00002, 0.000021, 0.000022, 0.0000225, 0.0000234] },
    ],
  },
  {
    id: "wl-3", name: "DeFi Gems", icon: "🌾", createdAt: "2026-03-12",
    tokens: [
      { symbol: "AAVE", name: "Aave", price: 312.40, change24h: 1.23, change7d: 7.89, marketCap: 4680000000, volume24h: 234000000, sparkline: [290, 295, 300, 305, 308, 310, 312] },
      { symbol: "UNI", name: "Uniswap", price: 14.56, change24h: -1.45, change7d: 4.32, marketCap: 8760000000, volume24h: 345000000, sparkline: [13.8, 14, 14.2, 14.5, 14.3, 14.4, 14.56] },
      { symbol: "MKR", name: "Maker", price: 2890.30, change24h: 0.87, change7d: 5.67, marketCap: 2670000000, volume24h: 123000000, sparkline: [2750, 2780, 2810, 2850, 2870, 2880, 2890] },
      { symbol: "JUP", name: "Jupiter", price: 1.234, change24h: 5.67, change7d: 15.43, marketCap: 1670000000, volume24h: 456000000, sparkline: [1.05, 1.08, 1.12, 1.15, 1.2, 1.22, 1.234] },
    ],
  },
];

export default function SavedWatchlists() {
  const [watchlists, setWatchlists] = useState<Watchlist[]>(DEFAULT_WATCHLISTS);
  const [activeList, setActiveList] = useState<string>(DEFAULT_WATCHLISTS[0].id);
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState("");
  const [newIcon, setNewIcon] = useState("📌");
  const [sortKey, setSortKey] = useState<"change24h" | "change7d" | "marketCap" | "volume24h">("change24h");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const currentList = watchlists.find(w => w.id === activeList)!;

  const sortedTokens = [...(currentList?.tokens || [])].sort((a, b) => {
    const mul = sortDir === "desc" ? -1 : 1;
    return mul * ((a[sortKey] as number) - (b[sortKey] as number));
  });

  const createWatchlist = useCallback(() => {
    if (!newName.trim()) return;
    const wl: Watchlist = {
      id: `wl-${Date.now()}`,
      name: newName.trim(),
      icon: newIcon,
      tokens: [],
      createdAt: new Date().toISOString().split("T")[0],
    };
    setWatchlists(prev => [...prev, wl]);
    setActiveList(wl.id);
    setNewName("");
    setShowCreate(false);
  }, [newName, newIcon]);

  const deleteWatchlist = (id: string) => {
    setWatchlists(prev => prev.filter(w => w.id !== id));
    if (activeList === id) setActiveList(watchlists[0]?.id || "");
  };

  const removeToken = (symbol: string) => {
    setWatchlists(prev =>
      prev.map(w =>
        w.id === activeList ? { ...w, tokens: w.tokens.filter(t => t.symbol !== symbol) } : w
      )
    );
  };

  const formatPrice = (p: number) => {
    if (p < 0.001) return `$${p.toFixed(8)}`;
    if (p < 1) return `$${p.toFixed(4)}`;
    if (p >= 1_000_000_000) return `$${(p / 1_000_000_000).toFixed(1)}B`;
    if (p >= 1_000_000) return `$${(p / 1_000_000).toFixed(1)}M`;
    if (p >= 1_000) return `$${p.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
    return `$${p.toFixed(2)}`;
  };

  const MiniSparkline = ({ data, positive }: { data: number[]; positive: boolean }) => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const w = 80, h = 28;
    const points = data.map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * h}`).join(" ");
    return (
      <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} className="inline-block">
        <polyline
          points={points}
          fill="none"
          stroke={positive ? "#3fb950" : "#f85149"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const toggleSort = (key: typeof sortKey) => {
    if (sortKey === key) setSortDir(d => d === "desc" ? "asc" : "desc");
    else { setSortKey(key); setSortDir("desc"); }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">My Watchlists</h2>
          <p className="text-[var(--color-text-secondary)] text-sm mt-1">
            Track your favorite tokens across custom lists. Prices update in real-time.
          </p>
        </div>
        <button
          onClick={() => setShowCreate(!showCreate)}
          className="px-4 py-2 bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 rounded-lg text-sm font-semibold hover:bg-indigo-500/20 transition-colors"
        >
          + New Watchlist
        </button>
      </div>

      {/* Create Form */}
      {showCreate && (
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-4 flex items-center gap-3">
          <select
            value={newIcon}
            onChange={e => setNewIcon(e.target.value)}
            className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg px-2 py-2 text-xl"
          >
            {["📌", "🔥", "💎", "🐸", "🌾", "🚀", "⭐", "🎯", "🛡️", "🧪"].map(ic => (
              <option key={ic} value={ic}>{ic}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Watchlist name..."
            value={newName}
            onChange={e => setNewName(e.target.value)}
            onKeyDown={e => e.key === "Enter" && createWatchlist()}
            className="flex-1 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          />
          <button onClick={createWatchlist} className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm font-semibold hover:bg-indigo-600 transition-colors">
            Create
          </button>
          <button onClick={() => setShowCreate(false)} className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] text-sm">
            Cancel
          </button>
        </div>
      )}

      {/* Watchlist Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {watchlists.map(wl => (
          <button
            key={wl.id}
            onClick={() => setActiveList(wl.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap border transition-colors ${
              activeList === wl.id
                ? "bg-indigo-500/20 text-indigo-400 border-indigo-500/40"
                : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-text-secondary)]"
            }`}
          >
            <span>{wl.icon}</span>
            <span>{wl.name}</span>
            <span className="text-xs opacity-60">({wl.tokens.length})</span>
          </button>
        ))}
      </div>

      {/* Token Table */}
      {currentList && (
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-left text-xs font-semibold text-[var(--color-text-secondary)] uppercase px-4 py-3">Token</th>
                <th className="text-right text-xs font-semibold text-[var(--color-text-secondary)] uppercase px-4 py-3">Price</th>
                <th
                  className="text-right text-xs font-semibold text-[var(--color-text-secondary)] uppercase px-4 py-3 cursor-pointer hover:text-[var(--color-text)]"
                  onClick={() => toggleSort("change24h")}
                >24H {sortKey === "change24h" && (sortDir === "desc" ? "↓" : "↑")}</th>
                <th
                  className="text-right text-xs font-semibold text-[var(--color-text-secondary)] uppercase px-4 py-3 cursor-pointer hover:text-[var(--color-text)]"
                  onClick={() => toggleSort("change7d")}
                >7D {sortKey === "change7d" && (sortDir === "desc" ? "↓" : "↑")}</th>
                <th
                  className="text-right text-xs font-semibold text-[var(--color-text-secondary)] uppercase px-4 py-3 cursor-pointer hover:text-[var(--color-text)]"
                  onClick={() => toggleSort("marketCap")}
                >Market Cap {sortKey === "marketCap" && (sortDir === "desc" ? "↓" : "↑")}</th>
                <th className="text-center text-xs font-semibold text-[var(--color-text-secondary)] uppercase px-4 py-3">7D Chart</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {sortedTokens.map(token => (
                <tr key={token.symbol} className="border-b border-[var(--color-border)] hover:bg-[var(--color-surface-hover)] transition-colors">
                  <td className="px-4 py-3">
                    <div className="font-semibold text-sm">{token.symbol}</div>
                    <div className="text-xs text-[var(--color-text-secondary)]">{token.name}</div>
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-sm font-semibold">{formatPrice(token.price)}</td>
                  <td className={`px-4 py-3 text-right text-sm font-semibold ${token.change24h >= 0 ? "text-green-400" : "text-red-400"}`}>
                    {token.change24h >= 0 ? "+" : ""}{token.change24h.toFixed(2)}%
                  </td>
                  <td className={`px-4 py-3 text-right text-sm font-semibold ${token.change7d >= 0 ? "text-green-400" : "text-red-400"}`}>
                    {token.change7d >= 0 ? "+" : ""}{token.change7d.toFixed(2)}%
                  </td>
                  <td className="px-4 py-3 text-right text-sm">{formatPrice(token.marketCap)}</td>
                  <td className="px-4 py-3 text-center">
                    <MiniSparkline data={token.sparkline} positive={token.change7d >= 0} />
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => removeToken(token.symbol)}
                      className="text-[var(--color-text-secondary)] hover:text-red-400 text-xs transition-colors"
                      title="Remove from watchlist"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
              {sortedTokens.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-[var(--color-text-secondary)] text-sm">
                    No tokens in this watchlist yet. Search and add tokens to start tracking.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Summary Cards */}
      {currentList && currentList.tokens.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-3">
            <div className="text-xs text-[var(--color-text-secondary)]">Total Tokens</div>
            <div className="text-lg font-bold">{currentList.tokens.length}</div>
          </div>
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-3">
            <div className="text-xs text-[var(--color-text-secondary)]">Best 24H</div>
            <div className="text-lg font-bold text-green-400">
              +{Math.max(...currentList.tokens.map(t => t.change24h)).toFixed(2)}%
            </div>
          </div>
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-3">
            <div className="text-xs text-[var(--color-text-secondary)]">Worst 24H</div>
            <div className="text-lg font-bold text-red-400">
              {Math.min(...currentList.tokens.map(t => t.change24h)).toFixed(2)}%
            </div>
          </div>
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-3">
            <div className="text-xs text-[var(--color-text-secondary)]">Avg 24H</div>
            <div className={`text-lg font-bold ${(currentList.tokens.reduce((s, t) => s + t.change24h, 0) / currentList.tokens.length) >= 0 ? "text-green-400" : "text-red-400"}`}>
              {(currentList.tokens.reduce((s, t) => s + t.change24h, 0) / currentList.tokens.length).toFixed(2)}%
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
