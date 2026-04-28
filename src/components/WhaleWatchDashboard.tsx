"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { TrendingUp, ArrowDownUp, Zap, Activity, Filter, X } from "lucide-react";

type Chain = "BTC" | "ETH" | "SOL" | "ADA" | "MATIC" | "BASE";
type TransactionType = "inflow" | "outflow" | "whale-to-whale";

interface WhaleTransaction {
  id: string;
  hash: string;
  from: string;
  to: string;
  amountUSD: number;
  token: string;
  chain: Chain;
  timestamp: Date;
  type: TransactionType;
  animationKey: number;
}

const CHAINS: Chain[] = ["BTC", "ETH", "SOL", "ADA", "MATIC", "BASE"];
const TOKENS = {
  BTC: "Bitcoin",
  ETH: "Ethereum",
  SOL: "Solana",
  ADA: "Cardano",
  MATIC: "Polygon",
  BASE: "Base",
};

const CHAIN_COLORS: Record<Chain, string> = {
  BTC: "#F7931A",
  ETH: "#627EEA",
  SOL: "#14F195",
  ADA: "#0033AD",
  MATIC: "#8247E5",
  BASE: "#0052FF",
};

function generateTransactions(): WhaleTransaction[] {
  const transactions: WhaleTransaction[] = [];
  const types: TransactionType[] = ["inflow", "outflow", "whale-to-whale"];

  for (let i = 0; i < 8; i++) {
    const chain = CHAINS[Math.floor(Math.random() * CHAINS.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const amountUSD = Math.floor(Math.random() * 9000000) + 1000000;
    const hoursAgo = Math.floor(Math.random() * 24);
    const minutesAgo = Math.floor(Math.random() * 60);

    transactions.push({
      id: `tx-${Date.now()}-${i}`,
      hash: generateHash(),
      from: generateAddress(),
      to: generateAddress(),
      amountUSD,
      token: chain,
      chain,
      timestamp: new Date(Date.now() - hoursAgo * 3600000 - minutesAgo * 60000),
      type,
      animationKey: i,
    });
  }

  return transactions.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
}

function generateHash(): string {
  const chars = "0123456789abcdef";
  let hash = "0x";
  for (let i = 0; i < 12; i++) {
    hash += chars[Math.floor(Math.random() * chars.length)];
  }
  return hash;
}

function generateAddress(): string {
  const chars = "0123456789abcdef";
  let address = "0x";
  for (let i = 0; i < 8; i++) {
    address += chars[Math.floor(Math.random() * chars.length)];
  }
  return address;
}

function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  return `${diffDays}d ago`;
}

function formatUSD(amount: number): string {
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(1)}M`;
  }
  return `$${(amount / 1000).toFixed(0)}K`;
}

function getTransactionTypeLabel(type: TransactionType): string {
  switch (type) {
    case "inflow":
      return "Exchange Inflow";
    case "outflow":
      return "Exchange Outflow";
    case "whale-to-whale":
      return "Whale-to-Whale";
  }
}

function getTransactionColor(type: TransactionType): string {
  switch (type) {
    case "inflow":
      return "text-red-400";
    case "outflow":
      return "text-green-400";
    case "whale-to-whale":
      return "text-yellow-400";
  }
}

function getTransactionBgColor(type: TransactionType): string {
  switch (type) {
    case "inflow":
      return "bg-red-500/10 border-red-500/30";
    case "outflow":
      return "bg-green-500/10 border-green-500/30";
    case "whale-to-whale":
      return "bg-yellow-500/10 border-yellow-500/30";
  }
}

export default function WhaleWatchDashboard() {
  const [transactions, setTransactions] = useState<WhaleTransaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<WhaleTransaction[]>([]);
  const [selectedChains, setSelectedChains] = useState<Set<Chain>>(new Set(CHAINS));
  const [selectedTypes, setSelectedTypes] = useState<Set<TransactionType>>(
    new Set<TransactionType>(["inflow", "outflow", "whale-to-whale"])
  );
  const [isLoading, setIsLoading] = useState(true);
  const transactionCountRef = useRef(0);

  // Initialize and generate transactions
  useEffect(() => {
    setTransactions(generateTransactions());
    setIsLoading(false);
  }, []);

  // Filter transactions
  useEffect(() => {
    const filtered = transactions.filter(
      (tx) => selectedChains.has(tx.chain) && selectedTypes.has(tx.type)
    );
    setFilteredTransactions(filtered);
  }, [transactions, selectedChains, selectedTypes]);

  // Auto-refresh with new transactions
  const addNewTransaction = useCallback(() => {
    const chain = CHAINS[Math.floor(Math.random() * CHAINS.length)];
    const types: TransactionType[] = ["inflow", "outflow", "whale-to-whale"];
    const type = types[Math.floor(Math.random() * types.length)];
    const amountUSD = Math.floor(Math.random() * 9000000) + 1000000;

    const newTx: WhaleTransaction = {
      id: `tx-${Date.now()}-${transactionCountRef.current}`,
      hash: generateHash(),
      from: generateAddress(),
      to: generateAddress(),
      amountUSD,
      token: chain,
      chain,
      timestamp: new Date(),
      type,
      animationKey: transactionCountRef.current,
    };

    transactionCountRef.current += 1;
    setTransactions((prev) => [newTx, ...prev.slice(0, 49)]);
  }, []);

  useEffect(() => {
    const interval = setInterval(addNewTransaction, 5000);
    return () => clearInterval(interval);
  }, [addNewTransaction]);

  const totalVolume = filteredTransactions.reduce((sum, tx) => sum + tx.amountUSD, 0);
  const largestTx = filteredTransactions[0];
  const netExchangeFlow = filteredTransactions.reduce((sum, tx) => {
    if (tx.type === "outflow") return sum + tx.amountUSD;
    if (tx.type === "inflow") return sum - tx.amountUSD;
    return sum;
  }, 0);
  const uniqueWallets = new Set(
    filteredTransactions.flatMap((tx) => [tx.from, tx.to])
  ).size;

  const toggleChain = (chain: Chain) => {
    const newChains = new Set(selectedChains);
    if (newChains.has(chain)) {
      newChains.delete(chain);
    } else {
      newChains.add(chain);
    }
    setSelectedChains(newChains);
  };

  const toggleType = (type: TransactionType) => {
    const newTypes = new Set(selectedTypes);
    if (newTypes.has(type)) {
      newTypes.delete(type);
    } else {
      newTypes.add(type);
    }
    setSelectedTypes(newTypes);
  };

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass rounded-xl p-5 border border-[var(--color-border)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[var(--color-text-secondary)] mb-1">
                Total Whale Volume (24h)
              </p>
              <p className="text-2xl font-bold text-[var(--color-text)]">
                {formatUSD(totalVolume)}
              </p>
            </div>
            <Zap className="w-6 h-6 text-[var(--color-primary)]" />
          </div>
        </div>

        <div className="glass rounded-xl p-5 border border-[var(--color-border)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[var(--color-text-secondary)] mb-1">
                Largest Single Tx
              </p>
              <p className="text-2xl font-bold text-[var(--color-text)]">
                {largestTx ? formatUSD(largestTx.amountUSD) : "—"}
              </p>
            </div>
            <TrendingUp className="w-6 h-6 text-green-400" />
          </div>
        </div>

        <div className="glass rounded-xl p-5 border border-[var(--color-border)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[var(--color-text-secondary)] mb-1">
                Net Exchange Flow
              </p>
              <p
                className={`text-2xl font-bold ${
                  netExchangeFlow > 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {netExchangeFlow > 0 ? "+" : ""}
                {formatUSD(Math.abs(netExchangeFlow))}
              </p>
            </div>
            <ArrowDownUp className="w-6 h-6 text-blue-400" />
          </div>
        </div>

        <div className="glass rounded-xl p-5 border border-[var(--color-border)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[var(--color-text-secondary)] mb-1">
                Active Whale Wallets
              </p>
              <p className="text-2xl font-bold text-[var(--color-text)]">{uniqueWallets}</p>
            </div>
            <Activity className="w-6 h-6 text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="space-y-3">
        {/* Chain Filter */}
        <div className="glass rounded-xl p-4 border border-[var(--color-border)]">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-4 h-4 text-[var(--color-text-secondary)]" />
            <h3 className="text-sm font-semibold text-[var(--color-text)]">Filter by Chain</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {CHAINS.map((chain) => (
              <button
                key={chain}
                onClick={() => toggleChain(chain)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedChains.has(chain)
                    ? "bg-[var(--color-primary)] text-white"
                    : "glass text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                }`}
                style={
                  selectedChains.has(chain)
                    ? { backgroundColor: CHAIN_COLORS[chain] }
                    : {}
                }
              >
                {chain}
              </button>
            ))}
          </div>
        </div>

        {/* Type Filter */}
        <div className="glass rounded-xl p-4 border border-[var(--color-border)]">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-4 h-4 text-[var(--color-text-secondary)]" />
            <h3 className="text-sm font-semibold text-[var(--color-text)]">
              Filter by Transaction Type
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => toggleType("inflow")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedTypes.has("inflow")
                  ? "bg-red-500/20 text-red-400 border border-red-500/50"
                  : "glass text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                Exchange Inflow
              </span>
            </button>
            <button
              onClick={() => toggleType("outflow")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedTypes.has("outflow")
                  ? "bg-green-500/20 text-green-400 border border-green-500/50"
                  : "glass text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Exchange Outflow
              </span>
            </button>
            <button
              onClick={() => toggleType("whale-to-whale")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedTypes.has("whale-to-whale")
                  ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/50"
                  : "glass text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-yellow-500" />
                Whale-to-Whale
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Transactions Feed */}
      <div className="glass rounded-xl border border-[var(--color-border)] overflow-hidden">
        <div className="px-5 py-4 border-b border-[var(--color-border)]">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-[var(--color-text)]">
              Live Whale Transactions
            </h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-[var(--color-text-secondary)]">
                {filteredTransactions.length} shown
              </span>
            </div>
          </div>
        </div>

        <div className="divide-y divide-[var(--color-border)] max-h-[600px] overflow-y-auto">
          {isLoading ? (
            <div className="px-5 py-8 text-center text-[var(--color-text-secondary)]">
              Loading transactions...
            </div>
          ) : filteredTransactions.length === 0 ? (
            <div className="px-5 py-8 text-center text-[var(--color-text-secondary)]">
              No transactions match your filters
            </div>
          ) : (
            filteredTransactions.map((tx, idx) => (
              <div
                key={tx.id}
                className={`px-5 py-4 hover:bg-[var(--color-bg-card)] transition-all ${
                  idx === 0 ? "animate-fadeIn" : ""
                } ${getTransactionBgColor(tx.type)} border-l-4 ${
                  tx.type === "inflow"
                    ? "border-red-500"
                    : tx.type === "outflow"
                      ? "border-green-500"
                      : "border-yellow-500"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                        style={{ backgroundColor: CHAIN_COLORS[tx.chain] }}
                      >
                        {tx.token}
                      </span>
                      <span className={`text-xs font-semibold ${getTransactionColor(tx.type)}`}>
                        {getTransactionTypeLabel(tx.type)}
                      </span>
                      <span className="text-xs text-[var(--color-text-secondary)]">
                        {formatTimeAgo(tx.timestamp)}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2">
                      <div>
                        <p className="text-xs text-[var(--color-text-secondary)] mb-0.5">From</p>
                        <p className="text-xs font-mono text-[var(--color-text)] break-all">
                          {tx.from}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[var(--color-text-secondary)] mb-0.5">To</p>
                        <p className="text-xs font-mono text-[var(--color-text)] break-all">
                          {tx.to}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[var(--color-text-secondary)] mb-0.5">
                          Transaction Hash
                        </p>
                        <p className="text-xs font-mono text-[var(--color-text)]">{tx.hash}</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <p className="text-lg font-bold text-[var(--color-text)]">
                      {formatUSD(tx.amountUSD)}
                    </p>
                    <p className="text-xs text-[var(--color-text-secondary)] mt-1">USD Value</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-[var(--color-text-secondary)] text-center px-4 py-2 rounded-lg bg-[var(--color-bg-card)]">
        Data updates every 5 seconds with simulated whale transactions for demonstration purposes.
        Real whale monitoring requires on-chain analytics integration.
      </p>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
