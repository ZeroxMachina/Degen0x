"use client";

import React, { useState, useEffect } from "react";
import {
  Activity,
  TrendingUp,
  TrendingDown,
  ArrowRightLeft,
  Wallet,
  Fish,
  Eye,
  Filter,
  Bell,
  ExternalLink,
} from "lucide-react";

// Types
type TransactionType = "Transfer" | "Swap" | "Bridge" | "Stake" | "Unstake";
type Chain = "Ethereum" | "Solana" | "BSC" | "Arbitrum";

interface Transaction {
  id: string;
  timestamp: string;
  from: string;
  to: string;
  amount: number;
  token: string;
  usdValue: number;
  type: TransactionType;
  chain: Chain;
}

interface SmartMoneyWallet {
  address: string;
  name: string;
  chain: Chain;
  portfolio24hChange: number;
  recentMoves: number;
  totalValue: number;
  holdings: string;
}

// Mock data generators
const generateMockTransactions = (): Transaction[] => {
  const tokens = ["ETH", "USDC", "USDT", "SOL", "BNB", "ARB", "PEPE", "DOGE"];
  const chains: Chain[] = ["Ethereum", "Solana", "BSC", "Arbitrum"];
  const types: TransactionType[] = [
    "Transfer",
    "Swap",
    "Bridge",
    "Stake",
    "Unstake",
  ];

  const addresses = Array.from({ length: 25 }, () =>
    "0x" + Math.random().toString(16).slice(2, 10)
  );

  return Array.from({ length: 30 }, (_, i) => ({
    id: `tx-${i}`,
    timestamp: new Date(
      Date.now() - Math.random() * 86400000
    ).toLocaleString(),
    from: addresses[Math.floor(Math.random() * addresses.length)],
    to: addresses[Math.floor(Math.random() * addresses.length)],
    amount: Math.floor(Math.random() * 10000) + 100,
    token: tokens[Math.floor(Math.random() * tokens.length)],
    usdValue:
      Math.floor(Math.random() * 15000000) + 100000 * Math.random() * 10,
    type: types[Math.floor(Math.random() * types.length)],
    chain: chains[Math.floor(Math.random() * chains.length)],
  })).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
};

const generateMockWallets = (): SmartMoneyWallet[] => {
  return [
    {
      address: "0x1234567890ab",
      name: "Whale Alpha",
      chain: "Ethereum",
      portfolio24hChange: 12.5,
      recentMoves: 4,
      totalValue: 48500000,
      holdings: "ETH, USDC, PEPE",
    },
    {
      address: "0xabcdef123456",
      name: "Smart Money Bot",
      chain: "Solana",
      portfolio24hChange: -3.2,
      recentMoves: 2,
      totalValue: 22300000,
      holdings: "SOL, USDT",
    },
    {
      address: "0x9876543210cd",
      name: "Crypto Whale II",
      chain: "Ethereum",
      portfolio24hChange: 8.7,
      recentMoves: 6,
      totalValue: 35800000,
      holdings: "ETH, USDC, ARB, PEPE",
    },
    {
      address: "0xfedcba987654",
      name: "Arbitrage Master",
      chain: "Arbitrum",
      portfolio24hChange: 5.3,
      recentMoves: 5,
      totalValue: 18900000,
      holdings: "ARB, ETH, USDC",
    },
    {
      address: "0x5555666677778",
      name: "Solana Accumulator",
      chain: "Solana",
      portfolio24hChange: 21.4,
      recentMoves: 8,
      totalValue: 42100000,
      holdings: "SOL, ORCA, MAGIC",
    },
    {
      address: "0xaaaa111122223",
      name: "BSC Trader",
      chain: "BSC",
      portfolio24hChange: -7.8,
      recentMoves: 3,
      totalValue: 12500000,
      holdings: "BNB, USDT, CAKE",
    },
    {
      address: "0xccccddddeeee1",
      name: "Cross-Chain Whale",
      chain: "Ethereum",
      portfolio24hChange: 15.2,
      recentMoves: 7,
      totalValue: 55700000,
      holdings: "ETH, USDC, SOL, BNB",
    },
    {
      address: "0xffff000011112",
      name: "Silent Accumulator",
      chain: "Arbitrum",
      portfolio24hChange: 3.1,
      recentMoves: 1,
      totalValue: 8900000,
      holdings: "ARB, ETH",
    },
  ];
};

// Components
const SentimentGauge: React.FC<{ sentiment: number }> = ({ sentiment }) => {
  const isBullish = sentiment > 50;
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-48 h-32 rounded-full border-4 border-gray-700 bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center overflow-hidden">
        <div
          className="absolute h-full w-full bg-gradient-to-r from-red-600 via-yellow-600 to-green-600"
          style={{
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
          }}
        />
        <div className="absolute w-1 h-20 bg-white origin-bottom" style={{
          transform: `rotate(${sentiment * 1.8 - 90}deg)`,
          transformOrigin: "bottom center",
        }} />
        <div className="relative z-10 text-center">
          <div className="text-2xl font-bold text-white">
            {sentiment.toFixed(0)}%
          </div>
          <div className={`text-sm font-semibold ${isBullish ? "text-green-400" : "text-red-400"}`}>
            {isBullish ? "BULLISH" : "BEARISH"}
          </div>
        </div>
      </div>
    </div>
  );
};

const TransactionRow: React.FC<{ tx: Transaction }> = ({ tx }) => {
  const getTypeColor = (type: TransactionType) => {
    if (type === "Swap" || type === "Transfer") return "text-blue-400";
    if (type === "Stake") return "text-green-400";
    if (type === "Unstake") return "text-red-400";
    if (type === "Bridge") return "text-purple-400";
    return "text-gray-400";
  };

  const getRowColor = (type: TransactionType) => {
    if (type === "Swap" || type === "Transfer") return "border-l-4 border-l-blue-500";
    if (type === "Stake") return "border-l-4 border-l-green-500";
    if (type === "Unstake") return "border-l-4 border-l-red-500";
    if (type === "Bridge") return "border-l-4 border-l-purple-500";
    return "";
  };

  return (
    <div className={`bg-gray-900 p-3 rounded-lg flex items-center justify-between hover:bg-gray-800 transition ${getRowColor(tx.type)}`}>
      <div className="flex-1 grid grid-cols-6 gap-3 text-xs sm:text-sm">
        <div className="text-gray-400">{tx.timestamp.split(",")[1]?.trim() || tx.timestamp}</div>
        <div className="font-mono text-gray-300">{tx.from.slice(0, 6)}...{tx.from.slice(-4)}</div>
        <div className="hidden sm:block font-mono text-gray-300">{tx.to.slice(0, 6)}...{tx.to.slice(-4)}</div>
        <div className="text-white font-semibold">{tx.amount.toLocaleString()}</div>
        <div className="text-cyan-400 font-bold">{tx.token}</div>
        <div className="text-right">
          <div className="text-white font-bold">${(tx.usdValue / 1000000).toFixed(1)}M</div>
          <div className={`text-xs ${getTypeColor(tx.type)} font-semibold`}>{tx.type}</div>
        </div>
      </div>
    </div>
  );
};

const SmartWalletCard: React.FC<{ wallet: SmartMoneyWallet }> = ({
  wallet,
}) => {
  const isPositive = wallet.portfolio24hChange >= 0;

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="font-bold text-white text-sm">{wallet.name}</p>
          <p className="text-xs font-mono text-gray-400">
            {wallet.address.slice(0, 6)}...{wallet.address.slice(-4)}
          </p>
        </div>
        <span className="text-xs px-2 py-1 bg-gray-700 rounded text-gray-300">
          {wallet.chain}
        </span>
      </div>

      <div className="space-y-2 mb-3">
        <div>
          <p className="text-xs text-gray-400">Portfolio Value</p>
          <p className="text-sm font-bold text-white">
            ${(wallet.totalValue / 1000000).toFixed(1)}M
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-400">24h Change</p>
          <div className="flex items-center gap-2">
            <p
              className={`text-sm font-bold ${isPositive ? "text-green-400" : "text-red-400"}`}
            >
              {isPositive ? "+" : ""}
              {wallet.portfolio24hChange.toFixed(1)}%
            </p>
            {isPositive ? (
              <TrendingUp size={14} className="text-green-400" />
            ) : (
              <TrendingDown size={14} className="text-red-400" />
            )}
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-400">Recent Moves</p>
          <p className="text-sm font-bold text-cyan-400">{wallet.recentMoves}</p>
        </div>
      </div>

      <div className="pt-3 border-t border-gray-700">
        <p className="text-xs text-gray-400 mb-2">Holdings</p>
        <div className="flex flex-wrap gap-1">
          {wallet.holdings.split(", ").map((token) => (
            <span
              key={token}
              className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded"
            >
              {token}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Component
export default function WhaleAlertTracker() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [wallets, setWallets] = useState<SmartMoneyWallet[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedChain, setSelectedChain] = useState<Chain | "All">("All");
  const [selectedSize, setSelectedSize] = useState<string>("$100K+");
  const [tokenSearch, setTokenSearch] = useState("");
  const [sentiment, setSentiment] = useState(62);

  useEffect(() => {
    setTransactions(generateMockTransactions());
    setWallets(generateMockWallets());
  }, []);

  // Filter transactions
  const filteredTransactions = transactions.filter((tx) => {
    const chainMatch =
      selectedChain === "All" || tx.chain === selectedChain;
    const tokenMatch = tx.token
      .toLowerCase()
      .includes(tokenSearch.toLowerCase());

    let sizeMatch = true;
    const size = tx.usdValue / 1000000; // Convert to millions
    if (selectedSize === "$100K+") sizeMatch = tx.usdValue >= 100000;
    if (selectedSize === "$500K+") sizeMatch = tx.usdValue >= 500000;
    if (selectedSize === "$1M+") sizeMatch = size >= 1;
    if (selectedSize === "$5M+") sizeMatch = size >= 5;
    if (selectedSize === "$10M+") sizeMatch = size >= 10;

    return chainMatch && tokenMatch && sizeMatch;
  });

  // Calculate stats
  const totalVolume = transactions.reduce((sum, tx) => sum + tx.usdValue, 0);
  const largestTx = transactions.reduce((max, tx) =>
    tx.usdValue > max.usdValue ? tx : max
  );
  const tokenCounts: Record<string, number> = {};
  transactions.forEach((tx) => {
    tokenCounts[tx.token] = (tokenCounts[tx.token] || 0) + 1;
  });
  const mostActiveToken = Object.entries(tokenCounts).sort(
    ([, a], [, b]) => b - a
  )[0]?.[0] || "ETH";

  // Simulate live refresh
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setTransactions(generateMockTransactions());
      setWallets(generateMockWallets());
      setSentiment(Math.floor(Math.random() * 40) + 30); // 30-70
      setIsRefreshing(false);
    }, 600);
  };

  const chains: (Chain | "All")[] = [
    "All",
    "Ethereum",
    "Solana",
    "BSC",
    "Arbitrum",
  ];
  const sizes = ["$100K+", "$500K+", "$1M+", "$5M+", "$10M+"];

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Fish size={32} className="text-cyan-500" />
            <h1 className="text-3xl sm:text-4xl font-bold">Whale Alert Tracker</h1>
          </div>
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 disabled:opacity-50 px-4 py-2 rounded-lg font-semibold transition"
          >
            <Activity size={18} />
            <span className="hidden sm:inline">
              {isRefreshing ? "Refreshing..." : "Refresh"}
            </span>
            {isRefreshing && (
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            )}
          </button>
        </div>
        <p className="text-gray-400 text-sm sm:text-base">
          Real-time tracking of large crypto whale transactions and smart money movements
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-cyan-900 to-gray-900 rounded-lg p-4 border border-cyan-700">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={16} className="text-cyan-400" />
            <span className="text-gray-400 text-xs sm:text-sm">24h Whale Volume</span>
          </div>
          <p className="text-lg sm:text-2xl font-bold text-cyan-400">
            ${(totalVolume / 1000000).toFixed(1)}M
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-gray-900 rounded-lg p-4 border border-purple-700">
          <div className="flex items-center gap-2 mb-2">
            <ArrowRightLeft size={16} className="text-purple-400" />
            <span className="text-gray-400 text-xs sm:text-sm">Largest Transaction</span>
          </div>
          <p className="text-lg sm:text-2xl font-bold text-purple-400">
            ${(largestTx.usdValue / 1000000).toFixed(1)}M
          </p>
          <p className="text-xs text-gray-400 mt-1">{largestTx.token}</p>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-gray-900 rounded-lg p-4 border border-green-700">
          <div className="flex items-center gap-2 mb-2">
            <Eye size={16} className="text-green-400" />
            <span className="text-gray-400 text-xs sm:text-sm">Most Active Token</span>
          </div>
          <p className="text-lg sm:text-2xl font-bold text-green-400">
            {mostActiveToken}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            {tokenCounts[mostActiveToken] || 0} transactions
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-gray-900 rounded-lg p-4 border border-orange-700">
          <div className="flex items-center gap-2 mb-2">
            <Wallet size={16} className="text-orange-400" />
            <span className="text-gray-400 text-xs sm:text-sm">Net Flow Direction</span>
          </div>
          <p className="text-lg sm:text-2xl font-bold text-orange-400">
            {Math.random() > 0.5 ? "Inflow" : "Outflow"}
          </p>
          <p className="text-xs text-gray-400 mt-1">Active accumulation</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-4">
          {/* Filters */}
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center gap-2 mb-4">
              <Filter size={18} className="text-cyan-400" />
              <h2 className="font-bold text-lg">Filters</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Size Filter */}
              <div>
                <label className="text-xs font-semibold text-gray-400 mb-2 block">
                  Transaction Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`text-xs px-3 py-1 rounded transition ${
                        selectedSize === size
                          ? "bg-cyan-600 text-white"
                          : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chain Filter */}
              <div>
                <label className="text-xs font-semibold text-gray-400 mb-2 block">
                  Blockchain
                </label>
                <div className="flex flex-wrap gap-2">
                  {chains.map((chain) => (
                    <button
                      key={chain}
                      onClick={() => setSelectedChain(chain)}
                      className={`text-xs px-3 py-1 rounded transition ${
                        selectedChain === chain
                          ? "bg-purple-600 text-white"
                          : "bg-[#161b22] text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                      }`}
                    >
                      {chain}
                    </button>
                  ))}
                </div>
              </div>

              {/* Token Search */}
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-gray-400 mb-2 block">
                  Search Token
                </label>
                <input
                  type="text"
                  placeholder="ETH, SOL, USDC..."
                  value={tokenSearch}
                  onChange={(e) => setTokenSearch(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition"
                />
              </div>
            </div>
          </div>

          {/* Transaction Feed */}
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg flex items-center gap-2">
                <Activity size={20} className="text-cyan-400" />
                Real-Time Feed
              </h2>
              <span className="text-xs text-gray-400">
                {filteredTransactions.length} transactions
              </span>
            </div>

            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((tx) => (
                  <TransactionRow key={tx.id} tx={tx} />
                ))
              ) : (
                <div className="text-center py-8 text-gray-400">
                  No transactions match your filters
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-4">
          {/* Whale Sentiment */}
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center gap-2 mb-4">
              <Bell size={18} className="text-yellow-400" />
              <h2 className="font-bold text-lg">Whale Sentiment</h2>
            </div>
            <SentimentGauge sentiment={sentiment} />
            <p className="text-center text-xs text-gray-400 mt-4">
              {sentiment > 65
                ? "Strong bullish whale activity - accumulation phase"
                : sentiment > 50
                  ? "Bullish sentiment - whales buying"
                  : sentiment > 35
                    ? "Mixed sentiment - consolidation"
                    : "Bearish sentiment - distribution phase"}
            </p>
          </div>
        </div>
      </div>

      {/* Smart Money Wallets */}
      <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Wallet size={20} className="text-green-400" />
          <h2 className="font-bold text-lg">Smart Money Wallets</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {wallets.map((wallet) => (
            <SmartWalletCard key={wallet.address} wallet={wallet} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-500 border-t border-gray-800 pt-4">
        <p>
          Data updates every 10 seconds. For research and tracking purposes only.{" "}
          <ExternalLink size={12} className="inline" />
        </p>
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Whale Alert Tracker",
              "url": "https://degen0x.com/tools/whale-alert-tracker",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </div>
  );
}
