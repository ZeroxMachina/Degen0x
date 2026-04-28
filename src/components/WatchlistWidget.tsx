"use client";

import { useState, useEffect } from "react";

interface WatchlistToken {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  sparkline: number[];
}

const DEFAULT_WATCHLIST: WatchlistToken[] = [
  { id: "bitcoin", name: "Bitcoin", symbol: "BTC", price: 87450, change24h: 1.2, sparkline: [84200, 84800, 85500, 86100, 85900, 86800, 87100, 87450] },
  { id: "ethereum", name: "Ethereum", symbol: "ETH", price: 3250, change24h: 0.8, sparkline: [3180, 3195, 3210, 3230, 3215, 3240, 3255, 3250] },
  { id: "solana", name: "Solana", symbol: "SOL", price: 195, change24h: 2.1, sparkline: [185, 187, 189, 191, 190, 193, 194, 195] },
];

const ALL_TOKENS: WatchlistToken[] = [
  ...DEFAULT_WATCHLIST,
  { id: "xrp", name: "XRP", symbol: "XRP", price: 2.45, change24h: -0.3, sparkline: [2.48, 2.46, 2.44, 2.43, 2.45, 2.44, 2.46, 2.45] },
  { id: "cardano", name: "Cardano", symbol: "ADA", price: 0.98, change24h: -1.2, sparkline: [1.02, 1.01, 0.99, 0.98, 0.99, 0.97, 0.98, 0.98] },
  { id: "avax", name: "Avalanche", symbol: "AVAX", price: 42, change24h: 1.5, sparkline: [40, 40.5, 41, 41.2, 41.8, 42.1, 41.9, 42] },
  { id: "link", name: "Chainlink", symbol: "LINK", price: 18.50, change24h: 0.9, sparkline: [17.8, 17.9, 18.1, 18.2, 18.3, 18.4, 18.3, 18.5] },
  { id: "dot", name: "Polkadot", symbol: "DOT", price: 8.50, change24h: 0.6, sparkline: [8.2, 8.3, 8.35, 8.4, 8.45, 8.48, 8.5, 8.5] },
  { id: "rndr", name: "Render", symbol: "RNDR", price: 11.82, change24h: 12.4, sparkline: [10.2, 10.5, 10.8, 11.1, 11.3, 11.5, 11.7, 11.82] },
  { id: "aave", name: "Aave", symbol: "AAVE", price: 295, change24h: 8.7, sparkline: [270, 275, 280, 282, 285, 290, 292, 295] },
];

function MiniSparkline({ data, positive }: { data: number[]; positive: boolean }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const w = 80;
  const h = 28;

  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / range) * h;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="inline-block">
      <polyline
        points={points}
        fill="none"
        stroke={positive ? "#22c55e" : "#ef4444"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WatchlistWidget() {
  const [watchlist, setWatchlist] = useState<WatchlistToken[]>(DEFAULT_WATCHLIST);
  const [showAdd, setShowAdd] = useState(false);
  const [search, setSearch] = useState("");

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("degen0x-watchlist");
      if (saved) {
        const ids: string[] = JSON.parse(saved);
        const tokens = ids.map((id) => ALL_TOKENS.find((t) => t.id === id)).filter(Boolean) as WatchlistToken[];
        if (tokens.length > 0) setWatchlist(tokens);
      }
    } catch {}
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("degen0x-watchlist", JSON.stringify(watchlist.map((t) => t.id)));
    } catch {}
  }, [watchlist]);

  const addToken = (token: WatchlistToken) => {
    if (!watchlist.find((t) => t.id === token.id)) {
      setWatchlist([...watchlist, token]);
    }
    setShowAdd(false);
    setSearch("");
  };

  const removeToken = (id: string) => {
    setWatchlist(watchlist.filter((t) => t.id !== id));
  };

  const available = ALL_TOKENS.filter(
    (t) => !watchlist.find((w) => w.id === t.id) && (search === "" || t.name.toLowerCase().includes(search.toLowerCase()) || t.symbol.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="glass p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text)]">
          Your Watchlist
        </h3>
        <button
          onClick={() => setShowAdd(!showAdd)}
          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-colors"
        >
          {showAdd ? "Close" : "+ Add"}
        </button>
      </div>

      {/* Add Token Panel */}
      {showAdd && (
        <div className="mb-4 p-3 rounded-xl bg-[var(--glass-subtle-bg)] border border-[var(--glass-border)]">
          <input
            type="text"
            placeholder="Search token..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)] mb-2"
          />
          <div className="max-h-32 overflow-y-auto space-y-1">
            {available.map((t) => (
              <button
                key={t.id}
                onClick={() => addToken(t)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-[var(--glass-bg)] transition-colors"
              >
                <span className="font-semibold text-[var(--color-text)]">{t.name} <span className="text-[var(--color-text-secondary)]">{t.symbol}</span></span>
                <span className={`font-mono text-xs ${t.change24h >= 0 ? "text-green-400" : "text-red-400"}`}>
                  {t.change24h >= 0 ? "+" : ""}{t.change24h}%
                </span>
              </button>
            ))}
            {available.length === 0 && (
              <p className="text-xs text-[var(--color-text-secondary)] text-center py-2">No more tokens to add</p>
            )}
          </div>
        </div>
      )}

      {/* Watchlist Items */}
      <div className="space-y-2">
        {watchlist.map((token) => (
          <div
            key={token.id}
            className="flex items-center justify-between p-3 rounded-xl bg-[var(--glass-subtle-bg)] border border-[var(--glass-border)] group"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div>
                <div className="text-sm font-semibold text-[var(--color-text)]">{token.symbol}</div>
                <div className="text-xs text-[var(--color-text-secondary)]">{token.name}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MiniSparkline data={token.sparkline} positive={token.change24h >= 0} />
              <div className="text-right">
                <div className="text-sm font-bold text-[var(--color-text)]">
                  ${token.price < 1 ? token.price.toFixed(4) : token.price.toLocaleString()}
                </div>
                <div className={`text-xs font-bold ${token.change24h >= 0 ? "text-green-400" : "text-red-400"}`}>
                  {token.change24h >= 0 ? "+" : ""}{token.change24h}%
                </div>
              </div>
              <button
                onClick={() => removeToken(token.id)}
                className="opacity-0 group-hover:opacity-100 text-[var(--color-text-secondary)] hover:text-red-400 transition-all p-1"
                title="Remove"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {watchlist.length === 0 && (
        <p className="text-sm text-[var(--color-text-secondary)] text-center py-6">
          Your watchlist is empty. Add tokens to track them here.
        </p>
      )}
    </div>
  );
}
