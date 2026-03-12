"use client";

import { useState, useMemo } from "react";

interface Token {
  name: string;
  symbol: string;
  price: number;
  marketCap: number;
  change24h: number;
  change7d: number;
  volume24h: number;
  category: string;
  chain: string;
}

const MOCK_TOKENS: Token[] = [
  { name: "Bitcoin", symbol: "BTC", price: 87450, marketCap: 1720e9, change24h: 1.2, change7d: 4.5, volume24h: 38.5e9, category: "Store of Value", chain: "Bitcoin" },
  { name: "Ethereum", symbol: "ETH", price: 3250, marketCap: 390e9, change24h: 0.8, change7d: 3.1, volume24h: 18.2e9, category: "Smart Contract", chain: "Ethereum" },
  { name: "Solana", symbol: "SOL", price: 195, marketCap: 92e9, change24h: 2.1, change7d: 6.3, volume24h: 4.8e9, category: "Smart Contract", chain: "Solana" },
  { name: "XRP", symbol: "XRP", price: 2.45, marketCap: 140e9, change24h: -0.3, change7d: 1.8, volume24h: 5.2e9, category: "Payments", chain: "XRP Ledger" },
  { name: "Cardano", symbol: "ADA", price: 0.98, marketCap: 35e9, change24h: -1.2, change7d: 2.4, volume24h: 1.2e9, category: "Smart Contract", chain: "Cardano" },
  { name: "Avalanche", symbol: "AVAX", price: 42, marketCap: 17e9, change24h: 1.5, change7d: 5.2, volume24h: 680e6, category: "Smart Contract", chain: "Avalanche" },
  { name: "Chainlink", symbol: "LINK", price: 18.50, marketCap: 11.8e9, change24h: 0.9, change7d: 4.1, volume24h: 520e6, category: "Oracle", chain: "Ethereum" },
  { name: "Polkadot", symbol: "DOT", price: 8.50, marketCap: 12.5e9, change24h: 0.6, change7d: 3.8, volume24h: 450e6, category: "Interoperability", chain: "Polkadot" },
  { name: "Render", symbol: "RNDR", price: 11.82, marketCap: 6.1e9, change24h: 12.4, change7d: 18.3, volume24h: 890e6, category: "AI & DePIN", chain: "Ethereum" },
  { name: "Aave", symbol: "AAVE", price: 295, marketCap: 4.4e9, change24h: 8.7, change7d: 15.2, volume24h: 620e6, category: "DeFi", chain: "Ethereum" },
  { name: "Arbitrum", symbol: "ARB", price: 1.45, marketCap: 5.8e9, change24h: 7.1, change7d: 12.1, volume24h: 780e6, category: "Layer 2", chain: "Ethereum" },
  { name: "Ondo", symbol: "ONDO", price: 2.34, marketCap: 3.2e9, change24h: 9.8, change7d: 22.5, volume24h: 510e6, category: "RWA", chain: "Ethereum" },
  { name: "Sui", symbol: "SUI", price: 3.85, marketCap: 11.2e9, change24h: 3.4, change7d: 8.9, volume24h: 920e6, category: "Smart Contract", chain: "Sui" },
  { name: "Aptos", symbol: "APT", price: 12.80, marketCap: 6.5e9, change24h: 2.8, change7d: 7.4, volume24h: 340e6, category: "Smart Contract", chain: "Aptos" },
  { name: "Uniswap", symbol: "UNI", price: 14.20, marketCap: 8.5e9, change24h: 1.9, change7d: 5.6, volume24h: 290e6, category: "DeFi", chain: "Ethereum" },
  { name: "Immutable", symbol: "IMX", price: 2.85, marketCap: 4.3e9, change24h: 5.4, change7d: 10.2, volume24h: 180e6, category: "Gaming", chain: "Ethereum" },
  { name: "Filecoin", symbol: "FIL", price: 7.82, marketCap: 4.1e9, change24h: -1.9, change7d: -0.5, volume24h: 220e6, category: "Storage", chain: "Filecoin" },
  { name: "Cosmos", symbol: "ATOM", price: 11.30, marketCap: 4.4e9, change24h: 1.1, change7d: 3.2, volume24h: 190e6, category: "Interoperability", chain: "Cosmos" },
];

type SortKey = "marketCap" | "price" | "change24h" | "change7d" | "volume24h";

function formatNum(n: number): string {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`;
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`;
  return `$${n.toLocaleString()}`;
}

export default function CryptoScreenerFilters() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [minMarketCap, setMinMarketCap] = useState<string>("0");
  const [sortBy, setSortBy] = useState<SortKey>("marketCap");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [onlyGainers, setOnlyGainers] = useState(false);

  const categories = ["all", ...Array.from(new Set(MOCK_TOKENS.map((t) => t.category)))];

  const filtered = useMemo(() => {
    let result = [...MOCK_TOKENS];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter((t) => t.name.toLowerCase().includes(q) || t.symbol.toLowerCase().includes(q));
    }

    if (category !== "all") {
      result = result.filter((t) => t.category === category);
    }

    const minCap = parseFloat(minMarketCap) * 1e9;
    if (minCap > 0) {
      result = result.filter((t) => t.marketCap >= minCap);
    }

    if (onlyGainers) {
      result = result.filter((t) => t.change24h > 0);
    }

    result.sort((a, b) => {
      const mul = sortDir === "desc" ? -1 : 1;
      return (a[sortBy] - b[sortBy]) * mul;
    });

    return result;
  }, [search, category, minMarketCap, sortBy, sortDir, onlyGainers]);

  const toggleSort = (key: SortKey) => {
    if (sortBy === key) setSortDir((d) => (d === "desc" ? "asc" : "desc"));
    else { setSortBy(key); setSortDir("desc"); }
  };

  const SortArrow = ({ field }: { field: SortKey }) => {
    if (sortBy !== field) return <span className="text-[var(--color-text-secondary)] opacity-30 ml-1">&#8597;</span>;
    return <span className="text-[var(--color-primary)] ml-1">{sortDir === "desc" ? "&#9660;" : "&#9650;"}</span>;
  };

  return (
    <div>
      {/* Filter Bar */}
      <div className="glass p-4 mb-4">
        <div className="flex flex-wrap gap-3 items-end">
          {/* Search */}
          <div className="flex-1 min-w-[200px]">
            <label className="text-xs text-[var(--color-text-secondary)] mb-1 block">Search</label>
            <input
              type="text"
              placeholder="Token name or symbol..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)]"
            />
          </div>

          {/* Category */}
          <div className="min-w-[160px]">
            <label className="text-xs text-[var(--color-text-secondary)] mb-1 block">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)]"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c === "all" ? "All Categories" : c}</option>
              ))}
            </select>
          </div>

          {/* Min Market Cap */}
          <div className="min-w-[140px]">
            <label className="text-xs text-[var(--color-text-secondary)] mb-1 block">Min Market Cap ($B)</label>
            <input
              type="number"
              min="0"
              step="1"
              value={minMarketCap}
              onChange={(e) => setMinMarketCap(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)]"
            />
          </div>

          {/* Only Gainers Toggle */}
          <div className="flex items-center gap-2 pb-0.5">
            <button
              onClick={() => setOnlyGainers(!onlyGainers)}
              className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-colors ${
                onlyGainers
                  ? "bg-green-500/20 text-green-400 border-green-500/40"
                  : "bg-[var(--glass-bg)] text-[var(--color-text-secondary)] border-[var(--glass-border)]"
              }`}
            >
              {onlyGainers ? "Gainers Only" : "All Movers"}
            </button>
          </div>
        </div>
        <div className="mt-2 text-xs text-[var(--color-text-secondary)]">
          Showing {filtered.length} of {MOCK_TOKENS.length} tokens
        </div>
      </div>

      {/* Table */}
      <div className="glass overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--glass-border)]">
              <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">#</th>
              <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">Token</th>
              <th className="text-right px-4 py-3 text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] cursor-pointer hover:text-[var(--color-text)]" onClick={() => toggleSort("price")}>
                Price <SortArrow field="price" />
              </th>
              <th className="text-right px-4 py-3 text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] cursor-pointer hover:text-[var(--color-text)]" onClick={() => toggleSort("marketCap")}>
                Market Cap <SortArrow field="marketCap" />
              </th>
              <th className="text-right px-4 py-3 text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] cursor-pointer hover:text-[var(--color-text)]" onClick={() => toggleSort("change24h")}>
                24h <SortArrow field="change24h" />
              </th>
              <th className="text-right px-4 py-3 text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] cursor-pointer hover:text-[var(--color-text)]" onClick={() => toggleSort("change7d")}>
                7d <SortArrow field="change7d" />
              </th>
              <th className="text-right px-4 py-3 text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] cursor-pointer hover:text-[var(--color-text)]" onClick={() => toggleSort("volume24h")}>
                Volume <SortArrow field="volume24h" />
              </th>
              <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">Category</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((t, i) => (
              <tr key={t.symbol} className="border-b border-[var(--glass-border)] hover:bg-[var(--glass-bg)] transition-colors">
                <td className="px-4 py-3 text-[var(--color-text-secondary)]">{i + 1}</td>
                <td className="px-4 py-3">
                  <div className="font-semibold text-[var(--color-text)]">{t.name}</div>
                  <div className="text-xs text-[var(--color-text-secondary)]">{t.symbol}</div>
                </td>
                <td className="px-4 py-3 text-right font-mono text-[var(--color-text)]">
                  ${t.price < 1 ? t.price.toFixed(4) : t.price.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-right text-[var(--color-text)]">{formatNum(t.marketCap)}</td>
                <td className={`px-4 py-3 text-right font-bold ${t.change24h >= 0 ? "text-green-400" : "text-red-400"}`}>
                  {t.change24h >= 0 ? "+" : ""}{t.change24h.toFixed(1)}%
                </td>
                <td className={`px-4 py-3 text-right font-bold ${t.change7d >= 0 ? "text-green-400" : "text-red-400"}`}>
                  {t.change7d >= 0 ? "+" : ""}{t.change7d.toFixed(1)}%
                </td>
                <td className="px-4 py-3 text-right text-[var(--color-text)]">{formatNum(t.volume24h)}</td>
                <td className="px-4 py-3">
                  <span className="text-xs px-2 py-0.5 rounded-md bg-[var(--glass-subtle-bg)] text-[var(--color-text-secondary)] border border-[var(--glass-border)]">
                    {t.category}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="p-12 text-center text-[var(--color-text-secondary)]">
            No tokens match your filters. Try adjusting your criteria.
          </div>
        )}
      </div>
    </div>
  );
}
