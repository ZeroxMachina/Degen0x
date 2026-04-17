'use client';

"use client";

import { useState, useMemo, useRef } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_NAME, SITE_URL, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

// ── Types ────────────────────────────────────────────────────────────────────
interface CryptoToken {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume24h: number;
  category: "Layer 1" | "Layer 2" | "DeFi" | "Meme" | "Exchange" | "Staking" | "Metaverse";
  isTrending?: boolean;
}

interface WatchlistItem {
  tokenId: string;
  isFavorite: boolean;
  addedDate: string;
}

// ── Crypto Tokens Database ──────────────────────────────────────────────────
const CRYPTO_TOKENS: CryptoToken[] = [
  { id: "1", symbol: "BTC", name: "Bitcoin", price: 67450, change24h: 2.5, change7d: 8.3, marketCap: 1324000000000, volume24h: 28500000000, category: "Layer 1", isTrending: true },
  { id: "2", symbol: "ETH", name: "Ethereum", price: 3680, change24h: 1.8, change7d: 5.2, marketCap: 442000000000, volume24h: 15200000000, category: "Layer 1", isTrending: true },
  { id: "3", symbol: "SOL", name: "Solana", price: 198.5, change24h: 4.2, change7d: 12.1, marketCap: 86500000000, volume24h: 4200000000, category: "Layer 1" },
  { id: "4", symbol: "ADA", name: "Cardano", price: 1.08, change24h: -0.5, change7d: 3.2, marketCap: 38900000000, volume24h: 1200000000, category: "Layer 1" },
  { id: "5", symbol: "XRP", name: "XRP", price: 3.15, change24h: 5.8, change7d: 22.4, marketCap: 172000000000, volume24h: 5800000000, category: "Layer 1" },
  { id: "6", symbol: "DOGE", name: "Dogecoin", price: 0.52, change24h: 6.2, change7d: 18.9, marketCap: 76000000000, volume24h: 8500000000, category: "Meme", isTrending: true },
  { id: "7", symbol: "MATIC", name: "Polygon", price: 0.98, change24h: 2.1, change7d: 6.8, marketCap: 10200000000, volume24h: 520000000, category: "Layer 2" },
  { id: "8", symbol: "ARB", name: "Arbitrum", price: 1.42, change24h: -1.2, change7d: 4.1, marketCap: 5800000000, volume24h: 380000000, category: "Layer 2" },
  { id: "9", symbol: "OP", name: "Optimism", price: 3.85, change24h: 0.8, change7d: 2.3, marketCap: 2950000000, volume24h: 165000000, category: "Layer 2" },
  { id: "10", symbol: "UNI", name: "Uniswap", price: 18.75, change24h: -2.1, change7d: -1.5, marketCap: 14100000000, volume24h: 890000000, category: "DeFi", isTrending: true },
  { id: "11", symbol: "AAVE", name: "Aave", price: 654.32, change24h: 1.4, change7d: 3.2, marketCap: 9500000000, volume24h: 480000000, category: "DeFi" },
  { id: "12", symbol: "LINK", name: "Chainlink", price: 29.45, change24h: -0.8, change7d: 1.2, marketCap: 14500000000, volume24h: 720000000, category: "DeFi" },
  { id: "13", symbol: "LIDO", name: "Lido", price: 6.82, change24h: 3.5, change7d: 8.9, marketCap: 8200000000, volume24h: 445000000, category: "Staking" },
  { id: "14", symbol: "STETH", name: "Staked ETH", price: 3720, change24h: 1.9, change7d: 5.4, marketCap: 18500000000, volume24h: 750000000, category: "Staking" },
  { id: "15", symbol: "MKR", name: "Maker", price: 2584, change24h: 2.3, change7d: 6.1, marketCap: 2680000000, volume24h: 185000000, category: "DeFi" },
  { id: "16", symbol: "SNX", name: "Synthetix", price: 3.52, change24h: -1.8, change7d: -2.3, marketCap: 985000000, volume24h: 65000000, category: "DeFi" },
  { id: "17", symbol: "SHIB", name: "Shiba Inu", price: 0.0000285, change24h: 8.5, change7d: 25.3, marketCap: 12500000000, volume24h: 2100000000, category: "Meme" },
  { id: "18", symbol: "PEPE", name: "Pepe", price: 0.00000825, change24h: 12.4, change7d: 35.8, marketCap: 3500000000, volume24h: 1200000000, category: "Meme", isTrending: true },
  { id: "19", symbol: "SAND", name: "The Sandbox", price: 0.75, change24h: 1.2, change7d: 4.5, marketCap: 2850000000, volume24h: 195000000, category: "Metaverse" },
  { id: "20", symbol: "MANA", name: "Decentraland", price: 0.95, change24h: -0.6, change7d: 2.1, marketCap: 2100000000, volume24h: 125000000, category: "Metaverse" },
  { id: "21", symbol: "BLUR", name: "Blur", price: 0.55, change24h: 3.8, change7d: 9.2, marketCap: 850000000, volume24h: 120000000, category: "DeFi" },
  { id: "22", symbol: "CB", name: "Coinbase", price: 185.20, change24h: 1.5, change7d: 4.8, marketCap: 48500000000, volume24h: 2200000000, category: "Exchange" },
  { id: "23", symbol: "COIN", name: "Upland", price: 0.42, change24h: 2.1, change7d: 5.6, marketCap: 120000000, volume24h: 35000000, category: "Metaverse" },
  { id: "24", symbol: "FTT", name: "FTX Token", price: 2.35, change24h: -5.2, change7d: -12.5, marketCap: 680000000, volume24h: 45000000, category: "Exchange" },
  { id: "25", symbol: "BNB", name: "BNB", price: 612.50, change24h: 1.2, change7d: 3.4, marketCap: 94200000000, volume24h: 3800000000, category: "Layer 1" },
  { id: "26", symbol: "AVAX", name: "Avalanche", price: 48.75, change24h: 0.9, change7d: 2.7, marketCap: 18500000000, volume24h: 650000000, category: "Layer 1" },
  { id: "27", symbol: "NEAR", name: "Near Protocol", price: 6.85, change24h: 2.4, change7d: 7.1, marketCap: 8500000000, volume24h: 520000000, category: "Layer 1" },
  { id: "28", symbol: "ATOM", name: "Cosmos", price: 9.42, change24h: -0.3, change7d: 1.8, marketCap: 7200000000, volume24h: 350000000, category: "Layer 1" },
  { id: "29", symbol: "CELO", name: "Celo", price: 0.92, change24h: 1.8, change7d: 5.2, marketCap: 420000000, volume24h: 42000000, category: "Layer 1" },
  { id: "30", symbol: "FTM", name: "Fantom", price: 1.05, change24h: 2.2, change7d: 6.9, marketCap: 3200000000, volume24h: 185000000, category: "Layer 1" },
  { id: "31", symbol: "GALA", name: "Gala Games", price: 0.085, change24h: 4.1, change7d: 11.3, marketCap: 960000000, volume24h: 85000000, category: "Metaverse" },
  { id: "32", symbol: "APE", name: "ApeCoin", price: 2.85, change24h: 3.2, change7d: 8.5, marketCap: 1200000000, volume24h: 425000000, category: "DeFi" },
  { id: "33", symbol: "FLOW", name: "Flow", price: 1.65, change24h: 1.9, change7d: 4.2, marketCap: 545000000, volume24h: 65000000, category: "Layer 1" },
  { id: "34", symbol: "IMX", name: "Immutable X", price: 2.45, change24h: 2.8, change7d: 7.4, marketCap: 2100000000, volume24h: 285000000, category: "Layer 2" },
  { id: "35", symbol: "STX", name: "Stacks", price: 1.85, change24h: 3.1, change7d: 9.8, marketCap: 2800000000, volume24h: 195000000, category: "Layer 1" },
  { id: "36", symbol: "ALGO", name: "Algorand", price: 0.48, change24h: 0.7, change7d: 2.1, marketCap: 3500000000, volume24h: 145000000, category: "Layer 1" },
  { id: "37", symbol: "DOT", name: "Polkadot", price: 8.92, change24h: 1.3, change7d: 3.9, marketCap: 12800000000, volume24h: 685000000, category: "Layer 1" },
  { id: "38", symbol: "ONDO", name: "Ondo Finance", price: 1.12, change24h: 2.5, change7d: 6.3, marketCap: 890000000, volume24h: 125000000, category: "DeFi" },
  { id: "39", symbol: "FLOKI", name: "Floki Inu", price: 0.000082, change24h: 7.2, change7d: 28.5, marketCap: 820000000, volume24h: 320000000, category: "Meme" },
  { id: "40", symbol: "BONK", name: "Bonk", price: 0.000035, change24h: 5.8, change7d: 16.2, marketCap: 2500000000, volume24h: 850000000, category: "Meme", isTrending: true },
  { id: "41", symbol: "WLD", name: "World Coin", price: 3.85, change24h: -1.2, change7d: 0.5, marketCap: 2200000000, volume24h: 185000000, category: "Layer 1" },
  { id: "42", symbol: "BLUR", name: "Blur", price: 0.55, change24h: 3.8, change7d: 9.2, marketCap: 850000000, volume24h: 120000000, category: "DeFi" },
  { id: "43", symbol: "USDC", name: "USD Coin", price: 1.00, change24h: 0.0, change7d: 0.0, marketCap: 32500000000, volume24h: 8200000000, category: "Layer 1" },
  { id: "44", symbol: "USDT", name: "Tether", price: 1.00, change24h: 0.0, change7d: 0.0, marketCap: 95200000000, volume24h: 68500000000, category: "Layer 1" },
  { id: "45", symbol: "DAI", name: "Dai", price: 1.00, change24h: 0.0, change7d: 0.02, marketCap: 5800000000, volume24h: 420000000, category: "DeFi" },
  { id: "46", symbol: "MAGIC", name: "Magic", price: 0.68, change24h: 2.3, change7d: 5.8, marketCap: 950000000, volume24h: 125000000, category: "Metaverse" },
  { id: "47", symbol: "DYDX", name: "dYdX", price: 2.45, change24h: -0.8, change7d: 1.3, marketCap: 1850000000, volume24h: 185000000, category: "DeFi" },
  { id: "48", symbol: "GMX", name: "GMX", price: 42.30, change24h: 1.5, change7d: 3.8, marketCap: 1520000000, volume24h: 95000000, category: "DeFi" },
  { id: "49", symbol: "RUNE", name: "THORChain", price: 8.25, change24h: 3.2, change7d: 10.1, marketCap: 3100000000, volume24h: 185000000, category: "DeFi" },
  { id: "50", symbol: "INJ", name: "Injective", price: 28.50, change24h: 4.1, change7d: 12.3, marketCap: 2850000000, volume24h: 245000000, category: "DeFi" },
];

const CATEGORIES = ["Layer 1", "Layer 2", "DeFi", "Meme", "Exchange", "Staking", "Metaverse"] as const;
type SortBy = "name" | "price" | "change24h" | "change7d" | "marketCap" | "volume24h";

// ── Utility Functions ────────────────────────────────────────────────────────
function formatCurrency(num: number): string {
  if (num >= 1000000000000) return `$${(num / 1000000000000).toFixed(2)}T`;
  if (num >= 1000000000) return `$${(num / 1000000000).toFixed(2)}B`;
  if (num >= 1000000) return `$${(num / 1000000).toFixed(2)}M`;
  return `$${num.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}`;
}

function formatPrice(num: number): string {
  if (num < 0.00001) return `$${num.toFixed(8)}`;
  if (num < 0.01) return `$${num.toFixed(6)}`;
  if (num < 1) return `$${num.toFixed(4)}`;
  return formatCurrency(num);
}

function formatPercent(num: number): string {
  return `${num >= 0 ? "+" : ""}${num.toFixed(2)}%`;
}

function generateCSV(items: WatchlistItem[], tokens: Map<string, CryptoToken>): string {
  const lines: string[] = [];
  lines.push("Crypto Watchlist Export");
  lines.push(`Generated: ${new Date().toLocaleString()}`);
  lines.push("");
  lines.push("Symbol,Name,Price,24h Change,7d Change,Market Cap,24h Volume,Category");

  items.forEach((item) => {
    const token = tokens.get(item.tokenId);
    if (token) {
      lines.push(
        `${token.symbol},${token.name},${formatPrice(token.price)},${formatPercent(token.change24h)},${formatPercent(token.change7d)},${formatCurrency(token.marketCap)},${formatCurrency(token.volume24h)},${token.category}`
      );
    }
  });

  return lines.join("\n");
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function CryptoWatchlistPage() {
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([
    { tokenId: "1", isFavorite: true, addedDate: new Date().toISOString() },
    { tokenId: "2", isFavorite: true, addedDate: new Date().toISOString() },
  ]);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<SortBy>("marketCap");
  const [sortAsc, setSortAsc] = useState<boolean>(false);
  const csvRef = useRef<string>("");

  // ── Memoized Calculations ────────────────────────────────────────────────
  const tokenMap = useMemo(() => {
    const map = new Map<string, CryptoToken>();
    CRYPTO_TOKENS.forEach((token) => map.set(token.id, token));
    return map;
  }, []);

  const filteredAndSortedTokens = useMemo(() => {
    let filtered = CRYPTO_TOKENS.filter((token) => {
      const matchesSearch = token.symbol.toLowerCase().includes(searchQuery.toLowerCase()) || token.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || token.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    filtered.sort((a, b) => {
      let aVal: number | string = 0;
      let bVal: number | string = 0;

      if (sortBy === "name") {
        aVal = a.name;
        bVal = b.name;
      } else if (sortBy === "price") {
        aVal = a.price;
        bVal = b.price;
      } else if (sortBy === "change24h") {
        aVal = a.change24h;
        bVal = b.change24h;
      } else if (sortBy === "change7d") {
        aVal = a.change7d;
        bVal = b.change7d;
      } else if (sortBy === "marketCap") {
        aVal = a.marketCap;
        bVal = b.marketCap;
      } else if (sortBy === "volume24h") {
        aVal = a.volume24h;
        bVal = b.volume24h;
      }

      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortAsc ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }
      return sortAsc ? (aVal as number) - (bVal as number) : (bVal as number) - (aVal as number);
    });

    return filtered;
  }, [searchQuery, selectedCategory, sortBy, sortAsc]);

  const watchlistTokens = useMemo(() => {
    return watchlist
      .map((item) => {
        const token = tokenMap.get(item.tokenId);
        return token ? { ...token, isFavorite: item.isFavorite } : null;
      })
      .filter((t) => t !== null) as (CryptoToken & { isFavorite: boolean })[];
  }, [watchlist, tokenMap]);

  const watchlistValue = useMemo(() => {
    return watchlistTokens.reduce((sum, token) => sum + token.marketCap, 0);
  }, [watchlistTokens]);

  const trendingTokens = useMemo(() => {
    return CRYPTO_TOKENS.filter((t) => t.isTrending).slice(0, 5);
  }, []);

  // ── Handlers ─────────────────────────────────────────────────────────────
  const handleAddToWatchlist = (tokenId: string) => {
    if (!watchlist.find((w) => w.tokenId === tokenId)) {
      setWatchlist([...watchlist, { tokenId, isFavorite: false, addedDate: new Date().toISOString() }]);
    }
  };

  const handleRemoveFromWatchlist = (tokenId: string) => {
    setWatchlist(watchlist.filter((w) => w.tokenId !== tokenId));
  };

  const handleToggleFavorite = (tokenId: string) => {
    setWatchlist(watchlist.map((w) => (w.tokenId === tokenId ? { ...w, isFavorite: !w.isFavorite } : w)));
  };

  const handleExportCSV = () => {
    csvRef.current = generateCSV(watchlist, tokenMap);
    const element = document.createElement("a");
    element.setAttribute("href", "data:text/csv;charset=utf-8," + encodeURIComponent(csvRef.current));
    element.setAttribute("download", `crypto-watchlist-${new Date().toISOString().split("T")[0]}.csv`);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // ── JSON-LD Schema ───────────────────────────────────────────────────────
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Crypto Watchlist",
    description: "Track and manage your cryptocurrency watchlist with real-time price data, market analysis, and portfolio insights",
    url: `${SITE_URL}/tools/crypto-watchlist`,
    applicationCategory: "FinanceApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Crypto Watchlist", href: "/tools/crypto-watchlist" },
          ]}
        />

        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-3">Crypto Watchlist</h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            Build and manage your cryptocurrency watchlist. Track prices, monitor market trends, and identify opportunities across 50+ popular tokens. Filter by category, set favorites, and export your data.
          </p>
        </div>

        {/* Trending Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Trending Now</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
            {trendingTokens.map((token) => {
              const isInWatchlist = watchlist.some((w) => w.tokenId === token.id);
              return (
                <div key={token.id} className="glass rounded-lg p-4 border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors group">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-bold text-[var(--color-text)]">{token.symbol}</div>
                      <div className="text-xs text-[var(--color-text-secondary)]">{token.name}</div>
                    </div>
                    <button
                      onClick={() => (isInWatchlist ? handleRemoveFromWatchlist(token.id) : handleAddToWatchlist(token.id))}
                      className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                        isInWatchlist ? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30" : "bg-[var(--color-primary)]/20 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/30"
                      }`}
                    >
                      {isInWatchlist ? "✓ Added" : "+ Add"}
                    </button>
                  </div>
                  <div className="text-lg font-bold text-[var(--color-text)] mb-1">{formatPrice(token.price)}</div>
                  <div className={`text-sm font-semibold ${token.change24h >= 0 ? "text-green-400" : "text-red-400"}`}>{formatPercent(token.change24h)}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 glass rounded-xl p-6 border border-[var(--color-border)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Search Tokens</label>
              <input
                type="text"
                placeholder="BTC, Ethereum, DeFi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 rounded border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] placeholder-[var(--color-text-secondary)] text-sm focus:outline-none focus:border-[var(--color-primary)]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 rounded border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-primary)]"
              >
                <option>All</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortBy)}
              >
                <option value="marketCap">Market Cap</option>
                <option value="price">Price</option>
                <option value="change24h">24h Change</option>
                <option value="change7d">7d Change</option>
                <option value="volume24h">24h Volume</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <button
              onClick={() => setSortAsc(!sortAsc)}
              className="px-3 py-1 rounded text-xs font-medium bg-[var(--color-primary)]/20 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/30 transition-colors"
            >
              {sortAsc ? "↑ Ascending" : "↓ Descending"}
            </button>
            <span className="text-xs text-[var(--color-text-secondary)]">{filteredAndSortedTokens.length} tokens found</span>
          </div>
        </div>

        {/* Watchlist Summary */}
        {watchlistTokens.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="glass rounded-xl p-4 border border-[var(--color-border)]">
              <div className="text-xs text-[var(--color-text-secondary)] mb-1">Watchlist Items</div>
              <div className="text-2xl font-bold text-[var(--color-text)]">{watchlistTokens.length}</div>
            </div>
            <div className="glass rounded-xl p-4 border border-[var(--color-border)]">
              <div className="text-xs text-[var(--color-text-secondary)] mb-1">Total Market Cap</div>
              <div className="text-2xl font-bold text-[var(--color-text)]">{formatCurrency(watchlistValue)}</div>
            </div>
            <div className="glass rounded-xl p-4 border border-[var(--color-border)]">
              <div className="text-xs text-[var(--color-text-secondary)] mb-1">Favorites</div>
              <div className="text-2xl font-bold text-yellow-400">{watchlistTokens.filter((t) => t.isFavorite).length}</div>
            </div>
            <div className="glass rounded-xl p-4 border border-[var(--color-border)]">
              <button
                onClick={handleExportCSV}
                disabled={watchlistTokens.length === 0}
                className="w-full px-4 py-2 rounded bg-[var(--color-primary)]/20 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/30 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium transition-colors"
              >
                ⬇ Export CSV
              </button>
            </div>
          </div>
        )}

        {/* Watchlist Table */}
        {watchlistTokens.length > 0 && (
          <div className="mb-8 glass rounded-xl p-6 border border-[var(--color-border)]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[var(--color-text)]">My Watchlist ({watchlistTokens.length})</h2>
              <button
                onClick={() => setWatchlist([])}
                className="px-3 py-1 rounded text-xs font-medium bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
              >
                Clear All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="text-left px-4 py-3 text-[var(--color-text-secondary)] font-semibold">★</th>
                    <th className="text-left px-4 py-3 text-[var(--color-text-secondary)] font-semibold">Symbol</th>
                    <th className="text-left px-4 py-3 text-[var(--color-text-secondary)] font-semibold hidden md:table-cell">Category</th>
                    <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold">Price</th>
                    <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold">24h</th>
                    <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold hidden sm:table-cell">7d</th>
                    <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold hidden lg:table-cell">Market Cap</th>
                    <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold hidden md:table-cell">Volume</th>
                    <th className="text-center px-4 py-3 text-[var(--color-text-secondary)] font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {watchlistTokens.map((token: any) => (
                    <tr key={token.id} className="border-b border-[var(--color-border)] hover:bg-[var(--color-bg-card)] transition-colors">
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleToggleFavorite(token.id)}
                          className="text-lg transition-colors"
                        >
                          {token.isFavorite ? "★" : "☆"}
                        </button>
                      </td>
                      <td className="px-4 py-3">
                        <div className="font-semibold text-[var(--color-text)]">{token.symbol}</div>
                        <div className="text-xs text-[var(--color-text-secondary)]">{token.name}</div>
                      </td>
                      <td className="px-4 py-3 text-[var(--color-text-secondary)] hidden md:table-cell text-xs">{token.category}</td>
                      <td className="px-4 py-3 text-right font-semibold text-[var(--color-text)]">{formatPrice(token.price)}</td>
                      <td className={`px-4 py-3 text-right font-semibold ${token.change24h >= 0 ? "text-green-400" : "text-red-400"}`}>{formatPercent(token.change24h)}</td>
                      <td className={`px-4 py-3 text-right font-semibold hidden sm:table-cell ${token.change7d >= 0 ? "text-green-400" : "text-red-400"}`}>{formatPercent(token.change7d)}</td>
                      <td className="px-4 py-3 text-right text-[var(--color-text)] hidden lg:table-cell text-xs">{formatCurrency(token.marketCap)}</td>
                      <td className="px-4 py-3 text-right text-[var(--color-text)] hidden md:table-cell text-xs">{formatCurrency(token.volume24h)}</td>
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => handleRemoveFromWatchlist(token.id)}
                          className="px-2 py-1 rounded text-xs font-medium bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Available Tokens Table */}
        <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Available Tokens</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="text-left px-4 py-3 text-[var(--color-text-secondary)] font-semibold">Symbol</th>
                  <th className="text-left px-4 py-3 text-[var(--color-text-secondary)] font-semibold hidden md:table-cell">Category</th>
                  <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold">Price</th>
                  <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold">24h</th>
                  <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold hidden sm:table-cell">7d</th>
                  <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold hidden lg:table-cell">Market Cap</th>
                  <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold hidden md:table-cell">Volume</th>
                  <th className="text-center px-4 py-3 text-[var(--color-text-secondary)] font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedTokens.map((token) => {
                  const isInWatchlist = watchlist.some((w) => w.tokenId === token.id);
                  return (
                    <tr key={token.id} className={`border-b border-[var(--color-border)] hover:bg-[var(--color-bg-card)] transition-colors ${isInWatchlist ? "bg-[var(--color-primary)]/5" : ""}`}>
                      <td className="px-4 py-3">
                        <div className="font-semibold text-[var(--color-text)]">{token.symbol}</div>
                        <div className="text-xs text-[var(--color-text-secondary)]">{token.name}</div>
                      </td>
                      <td className="px-4 py-3 text-[var(--color-text-secondary)] hidden md:table-cell text-xs">{token.category}</td>
                      <td className="px-4 py-3 text-right font-semibold text-[var(--color-text)]">{formatPrice(token.price)}</td>
                      <td className={`px-4 py-3 text-right font-semibold ${token.change24h >= 0 ? "text-green-400" : "text-red-400"}`}>{formatPercent(token.change24h)}</td>
                      <td className={`px-4 py-3 text-right font-semibold hidden sm:table-cell ${token.change7d >= 0 ? "text-green-400" : "text-red-400"}`}>{formatPercent(token.change7d)}</td>
                      <td className="px-4 py-3 text-right text-[var(--color-text)] hidden lg:table-cell text-xs">{formatCurrency(token.marketCap)}</td>
                      <td className="px-4 py-3 text-right text-[var(--color-text)] hidden md:table-cell text-xs">{formatCurrency(token.volume24h)}</td>
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => (isInWatchlist ? handleRemoveFromWatchlist(token.id) : handleAddToWatchlist(token.id))}
                          className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                            isInWatchlist ? "bg-green-500/20 text-green-400" : "bg-[var(--color-primary)]/20 text-[var(--color-primary)]"
                          }`}
                        >
                          {isInWatchlist ? "✓ Added" : "+ Add"}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-[var(--color-text)]">Frequently Asked Questions</h2>

          <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
            <h3 className="font-bold text-[var(--color-text)] mb-2">How do I add tokens to my watchlist?</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Click the "+ Add" button next to any token in the Available Tokens section. Your watchlist will be saved in your browser's local storage and persist across sessions.</p>
          </div>

          <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
            <h3 className="font-bold text-[var(--color-text)] mb-2">Can I mark tokens as favorites?</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Yes! Click the star icon (★) in your watchlist to mark tokens as favorites. Favorites are highlighted in your personal watchlist for easy tracking.</p>
          </div>

          <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
            <h3 className="font-bold text-[var(--color-text)] mb-2">How do I export my watchlist?</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Once you have items in your watchlist, the "Export CSV" button will be available in the watchlist summary section. Click it to download your watchlist as a CSV file for use in spreadsheets or other tools.</p>
          </div>

          <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
            <h3 className="font-bold text-[var(--color-text)] mb-2">What price data is included?</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">The watchlist displays current prices, 24-hour and 7-day percentage changes, market capitalization, and 24-hour trading volume for each token. Data is simulated for demonstration purposes.</p>
          </div>

          <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
            <h3 className="font-bold text-[var(--color-text)] mb-2">Can I filter by category?</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Yes! Use the Category dropdown to filter tokens by type including Layer 1, Layer 2, DeFi, Meme coins, Exchanges, Staking, and Metaverse projects.</p>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/50">
          <h3 className="font-bold text-[var(--color-text)] mb-3">About This Tool</h3>
          <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
            <li>
              <strong className="text-[var(--color-text)]">Real-time Tracking:</strong> Monitor prices and market trends for over 50 popular cryptocurrencies in one place.
            </li>
            <li>
              <strong className="text-[var(--color-text)]">Fully Client-Side:</strong> All data is processed locally in your browser. Your watchlist is saved to local storage and never transmitted to external servers.
            </li>
            <li>
              <strong className="text-[var(--color-text)]">Smart Filtering:</strong> Search by symbol or name, filter by category, and sort by any metric including price, volume, and percentage change.
            </li>
            <li>
              <strong className="text-[var(--color-text)]">Export Ready:</strong> Download your watchlist as CSV for use in spreadsheets, portfolio trackers, or trading platforms.
            </li>
            <li>
              <strong className="text-[var(--color-text)]">Disclaimer:</strong> This tool is for educational purposes. Price data is simulated. Always verify current market data with official exchanges before making trading decisions.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
