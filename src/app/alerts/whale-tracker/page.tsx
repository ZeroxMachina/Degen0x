'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whale Tracker | degen0x",
  description: "Comprehensive degen0x guide to whale tracker — 2026 fundamentals, step-by-step walkthroughs, and risk-aware strategies.",
  alternates: { canonical: "https://degen0x.com/alerts/whale-tracker" },
};

// ─── Types ───────────────────────────────────────────────────────────────
type TransactionType = 'exchange_deposit' | 'exchange_withdrawal' | 'whale_transfer' | 'unknown';
type TokenType = 'BTC' | 'ETH' | 'USDT' | 'USDC' | 'SOL';
type Chain = 'Bitcoin' | 'Ethereum' | 'Solana' | 'Tron' | 'Polygon' | 'Arbitrum';

interface WhaleTransaction {
  id: string;
  txHash: string;
  from: { address: string; label: string };
  to: { address: string; label: string };
  amount: string;
  token: TokenType;
  usdValue: string;
  timestamp: number;
  chain: Chain;
  type: TransactionType;
  isNew?: boolean;
}

// ─── Mock Data Generation ────────────────────────────────────────────────
function generateMockTransaction(): WhaleTransaction {
  const tokens: TokenType[] = ['BTC', 'ETH', 'USDT', 'USDC', 'SOL'];
  const chains: Chain[] = ['Bitcoin', 'Ethereum', 'Solana', 'Tron', 'Polygon', 'Arbitrum'];
  const exchanges = [
    'Binance',
    'Coinbase',
    'Kraken',
    'Bitfinex',
    'OKX',
    'Bybit',
    'Gate.io',
    'Huobi',
    'FTX',
    'Crypto.com',
  ];
  const walletLabels = [
    'Whale 0x7a..f3',
    'Whale 0x3d..a1',
    'MEV Bot',
    'Unknown Wallet',
    'Treasury Wallet',
    'Bridge Contract',
  ];

  const token = tokens[Math.floor(Math.random() * tokens.length)];
  const types: TransactionType[] = [
    'exchange_deposit',
    'exchange_withdrawal',
    'whale_transfer',
    'unknown',
  ];
  const type = types[Math.floor(Math.random() * types.length)];

  const amountRanges: Record<TokenType, [number, number]> = {
    BTC: [10, 1000],
    ETH: [100, 50000],
    USDT: [1000000, 200000000],
    USDC: [500000, 150000000],
    SOL: [5000, 500000],
  };

  const prices: Record<TokenType, number> = {
    BTC: 67500,
    ETH: 3450,
    USDT: 1,
    USDC: 1,
    SOL: 148,
  };

  const range = amountRanges[token];
  const rawAmount = Math.floor(Math.random() * (range[1] - range[0]) + range[0]);
  const usdVal = rawAmount * prices[token];

  const formatAmount = (n: number) => {
    if (n >= 1e9) return `${(n / 1e9).toFixed(1)}B`;
    if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
    if (n >= 1e3) return `${(n / 1e3).toFixed(1)}K`;
    return n.toLocaleString();
  };

  const fromLabel = Math.random() > 0.3 ? exchanges[Math.floor(Math.random() * exchanges.length)] : walletLabels[Math.floor(Math.random() * walletLabels.length)];
  const toLabel = Math.random() > 0.3 ? exchanges[Math.floor(Math.random() * exchanges.length)] : walletLabels[Math.floor(Math.random() * walletLabels.length)];

  return {
    id: Math.random().toString(36).slice(2, 10),
    txHash: Math.random().toString(16).slice(2, 12),
    from: {
      address: `0x${Math.random().toString(16).slice(2, 10)}`,
      label: fromLabel,
    },
    to: {
      address: `0x${Math.random().toString(16).slice(2, 10)}`,
      label: toLabel,
    },
    amount: formatAmount(rawAmount),
    token,
    usdValue: formatAmount(usdVal),
    timestamp: Date.now() - Math.floor(Math.random() * 86400000),
    chain: token === 'BTC' ? 'Bitcoin' : token === 'SOL' ? 'Solana' : ['Ethereum', 'Tron', 'Polygon', 'Arbitrum'][Math.floor(Math.random() * 4)] as Chain,
    type,
  };
}

// ─── Utility Functions ────────────────────────────────────────────────────
function formatTime(timestamp: number): string {
  const now = Date.now();
  const diff = Math.floor((now - timestamp) / 1000);

  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

function getTypeColor(type: TransactionType): { bg: string; text: string; border: string } {
  switch (type) {
    case 'exchange_deposit':
      return {
        bg: 'bg-red-500/10',
        text: 'text-red-400',
        border: 'border-red-500/30',
      };
    case 'exchange_withdrawal':
      return {
        bg: 'bg-green-500/10',
        text: 'text-green-400',
        border: 'border-green-500/30',
      };
    case 'whale_transfer':
      return {
        bg: 'bg-blue-500/10',
        text: 'text-blue-400',
        border: 'border-blue-500/30',
      };
    default:
      return {
        bg: 'bg-gray-500/10',
        text: 'text-gray-400',
        border: 'border-gray-500/30',
      };
  }
}

function getTypeLabel(type: TransactionType): string {
  switch (type) {
    case 'exchange_deposit':
      return 'Exchange Deposit';
    case 'exchange_withdrawal':
      return 'Exchange Withdrawal';
    case 'whale_transfer':
      return 'Whale Transfer';
    default:
      return 'Unknown';
  }
}

function getTokenColor(token: TokenType): string {
  switch (token) {
    case 'BTC':
      return 'bg-orange-500/20 text-orange-300';
    case 'ETH':
      return 'bg-purple-500/20 text-purple-300';
    case 'USDT':
      return 'bg-green-500/20 text-green-300';
    case 'USDC':
      return 'bg-blue-500/20 text-blue-300';
    case 'SOL':
      return 'bg-fuchsia-500/20 text-fuchsia-300';
    default:
      return 'bg-gray-500/20 text-gray-300';
  }
}

// ─── Summary Stats Component ─────────────────────────────────────────────
function SummaryStats({ transactions }: { transactions: WhaleTransaction[] }) {
  const stats = useMemo(() => {
    const oneDayAgo = Date.now() - 86400000;
    const last24h = transactions.filter((tx) => tx.timestamp > oneDayAgo);

    const totalVolume = last24h.reduce((sum, tx) => {
      const usdVal = parseFloat(tx.usdValue.replace(/[^0-9.-]+/g, ''));
      const multiplier = tx.usdValue.includes('B') ? 1e9 : tx.usdValue.includes('M') ? 1e6 : tx.usdValue.includes('K') ? 1e3 : 1;
      return sum + usdVal * multiplier;
    }, 0);

    const largest = last24h.reduce((max, tx) => {
      const usdVal = parseFloat(tx.usdValue.replace(/[^0-9.-]+/g, ''));
      const multiplier = tx.usdValue.includes('B') ? 1e9 : tx.usdValue.includes('M') ? 1e6 : tx.usdValue.includes('K') ? 1e3 : 1;
      const val = usdVal * multiplier;
      return val > max ? val : max;
    }, 0);

    const deposits = last24h.filter((tx) => tx.type === 'exchange_deposit').length;
    const withdrawals = last24h.filter((tx) => tx.type === 'exchange_withdrawal').length;
    const netFlow = withdrawals - deposits;

    return {
      totalVolume,
      largest,
      netFlow,
      last24hCount: last24h.length,
    };
  }, [transactions]);

  const formatUSD = (num: number) => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
    return `$${num.toFixed(2)}`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <div className="glass p-6 rounded-xl border border-gray-700/30">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">24h Volume</p>
        <p className="text-2xl font-bold text-blue-400">{formatUSD(stats.totalVolume)}</p>
        <p className="text-xs text-gray-500 mt-2">{stats.last24hCount} transactions</p>
      </div>

      <div className="glass p-6 rounded-xl border border-gray-700/30">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Largest Tx</p>
        <p className="text-2xl font-bold text-amber-400">{formatUSD(stats.largest)}</p>
        <p className="text-xs text-gray-500 mt-2">Peak transaction size</p>
      </div>

      <div className="glass p-6 rounded-xl border border-gray-700/30">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Net Exchange Flow</p>
        <p className={`text-2xl font-bold ${stats.netFlow > 0 ? 'text-green-400' : 'text-red-400'}`}>
          {stats.netFlow > 0 ? '+' : ''}{stats.netFlow}
        </p>
        <p className={`text-xs mt-2 ${stats.netFlow > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {stats.netFlow > 0 ? 'More withdrawals (bullish)' : 'More deposits (bearish)'}
        </p>
      </div>

      <div className="glass p-6 rounded-xl border border-gray-700/30">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Status</p>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
          <p className="text-lg font-bold text-green-400">LIVE</p>
        </div>
        <p className="text-xs text-gray-500 mt-2">Real-time tracking</p>
      </div>
    </div>
  );
}

// ─── Transaction Row Component ───────────────────────────────────────────
function TransactionRow({ transaction, isNew }: { transaction: WhaleTransaction; isNew: boolean }) {
  const typeColors = getTypeColor(transaction.type);

  return (
    <div
      className={`p-4 border-b border-gray-700/30 hover:bg-gray-900/30 transition-all duration-300 ${
        isNew ? 'bg-blue-500/5 animate-pulse' : ''
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Token Badge */}
        <div className="flex-shrink-0">
          <div className={`px-3 py-1.5 rounded-lg font-semibold text-sm ${getTokenColor(transaction.token)}`}>
            {transaction.token}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Amount and USD Value */}
          <div className="flex items-baseline gap-2 mb-2 flex-wrap">
            <span className="font-semibold text-gray-100">
              {transaction.amount} {transaction.token}
            </span>
            <span className="text-sm text-gray-400">${transaction.usdValue}</span>
          </div>

          {/* Transaction Details */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2 text-xs text-gray-400">
            <div className="flex items-center gap-1 min-w-0">
              <span className="truncate">{transaction.from.label}</span>
              <span>→</span>
              <span className="truncate">{transaction.to.label}</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span className="text-xs px-2 py-1 rounded bg-gray-800/50 text-gray-300">{transaction.chain}</span>
          </div>

          {/* Type Badge and Time */}
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-xs px-2.5 py-1 rounded-lg font-medium ${typeColors.bg} ${typeColors.text} border ${typeColors.border}`}
            >
              {getTypeLabel(transaction.type)}
            </span>
            <span className="text-xs text-gray-500">{formatTime(transaction.timestamp)}</span>
          </div>
        </div>

        {/* TX Hash */}
        <div className="flex-shrink-0 text-right">
          <p className="text-xs text-gray-500 font-mono">{transaction.txHash}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page Component ─────────────────────────────────────────────────
export default function WhaleTrackerPage() {
  const [transactions, setTransactions] = useState<WhaleTransaction[]>([]);
  const [isLive, setIsLive] = useState(true);
  const [filterToken, setFilterToken] = useState<'All' | TokenType>('All');
  const [filterType, setFilterType] = useState<'All' | TransactionType>('All');
  const [filterMinValue, setFilterMinValue] = useState<1 | 5 | 10 | 50>(5);
  const [sortBy, setSortBy] = useState<'time' | 'value'>('time');
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Initialize transactions
  useEffect(() => {
    const initial = Array.from({ length: 30 }, () => generateMockTransaction()).sort((a, b) => b.timestamp - a.timestamp);
    setTransactions(initial);
  }, []);

  // Live update effect
  useEffect(() => {
    if (isLive) {
      intervalRef.current = setInterval(() => {
        const newTx = generateMockTransaction();
        newTx.timestamp = Date.now();
        newTx.isNew = true;
        setTransactions((prev) => [newTx, ...prev.slice(0, 29)]);
        // Remove isNew flag after animation
        setTimeout(() => {
          setTransactions((prev) => prev.map((tx) => ({ ...tx, isNew: false })));
        }, 2000);
      }, 5000 + Math.random() * 3000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isLive]);

  // Filter transactions
  const filteredTransactions = useMemo(() => {
    let filtered = transactions.filter((tx) => {
      if (filterToken !== 'All' && tx.token !== filterToken) return false;
      if (filterType !== 'All' && tx.type !== filterType) return false;

      const usdVal = parseFloat(tx.usdValue.replace(/[^0-9.-]+/g, ''));
      const multiplier = tx.usdValue.includes('B') ? 1e9 : tx.usdValue.includes('M') ? 1e6 : tx.usdValue.includes('K') ? 1e3 : 1;
      const fullValue = usdVal * multiplier;
      const minValueNum = filterMinValue * 1e6;

      if (fullValue < minValueNum) return false;
      return true;
    });

    // Sort
    if (sortBy === 'value') {
      filtered.sort((a, b) => {
        const aVal = parseFloat(a.usdValue.replace(/[^0-9.-]+/g, ''));
        const bVal = parseFloat(b.usdValue.replace(/[^0-9.-]+/g, ''));
        const aMultiplier = a.usdValue.includes('B') ? 1e9 : a.usdValue.includes('M') ? 1e6 : a.usdValue.includes('K') ? 1e3 : 1;
        const bMultiplier = b.usdValue.includes('B') ? 1e9 : b.usdValue.includes('M') ? 1e6 : b.usdValue.includes('K') ? 1e3 : 1;
        return bVal * bMultiplier - aVal * aMultiplier;
      });
    }

    return filtered;
  }, [transactions, filterToken, filterType, filterMinValue, sortBy]);

  return (
    <main className="min-h-screen bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Alerts', href: '/alerts' },
            { label: 'Whale Tracker' },
          ]}
        />

        {/* Hero Section */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 mb-4">
            <span className="text-sm font-semibold text-blue-400">🐋 Whale Alert Tracker</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-4 leading-tight">
            Whale Alert Feed
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
            Track large cryptocurrency movements in real-time. Monitor whale transactions, exchange deposits, and
            significant transfers across major blockchains.
          </p>
        </div>

        {/* Summary Stats */}
        <SummaryStats transactions={transactions} />

        {/* Controls Section */}
        <div className="glass p-6 rounded-2xl border border-gray-700/30 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            {/* Token Filter */}
            <div>
              <label className="block text-xs text-gray-400 uppercase tracking-wide mb-2">Token</label>
              <select
                value={filterToken}
                onChange={(e) => setFilterToken(e.target.value as 'All' | TokenType)}
                className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 text-sm focus:outline-none focus:border-blue-500"
              >
                <option>All</option>
                <option>BTC</option>
                <option>ETH</option>
                <option>USDT</option>
                <option>USDC</option>
                <option>SOL</option>
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-xs text-gray-400 uppercase tracking-wide mb-2">Type</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value as 'All' | TransactionType)}
              >
                <option value="All">All</option>
                <option value="exchange_deposit">Exchange Deposit</option>
                <option value="exchange_withdrawal">Exchange Withdrawal</option>
                <option value="whale_transfer">Whale Transfer</option>
              </select>
            </div>

            {/* Min Value Filter */}
            <div>
              <label className="block text-xs text-gray-400 uppercase tracking-wide mb-2">Min Value</label>
              <select
                value={filterMinValue}
                onChange={(e) => setFilterMinValue(parseInt(e.target.value) as 1 | 5 | 10 | 50)}
              >
                <option value={1}>$1M+</option>
                <option value={5}>$5M+</option>
                <option value={10}>$10M+</option>
                <option value={50}>$50M+</option>
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-xs text-gray-400 uppercase tracking-wide mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'time' | 'value')}
              >
                <option value="time">Time (Newest)</option>
                <option value="value">Value (Largest)</option>
              </select>
            </div>

            {/* Live Toggle */}
            <div className="flex items-end">
              <button
                onClick={() => setIsLive(!isLive)}
                className={`w-full px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isLive
                    ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/50'
                    : 'bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/50'
                }`}
              >
                {isLive ? '● Pause' : '○ Resume'}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>
              Showing {filteredTransactions.length} of {transactions.length} transactions
            </span>
            {isLive && (
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Live feed active
              </span>
            )}
          </div>
        </div>

        {/* Transactions List */}
        <div className="glass rounded-2xl border border-gray-700/30 overflow-hidden">
          {filteredTransactions.length > 0 ? (
            <div>
              {filteredTransactions.map((tx) => (
                <TransactionRow key={tx.id} transaction={tx} isNew={tx.isNew ?? false} />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center">
              <p className="text-gray-400">No transactions match your filters.</p>
              <p className="text-sm text-gray-500 mt-2">Try adjusting the filter criteria.</p>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-2xl border border-gray-700/30">
            <h3 className="text-lg font-bold text-gray-100 mb-4">Understanding Whale Transactions</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-3">
                <span className="text-red-400 flex-shrink-0">•</span>
                <span>
                  <strong>Exchange Deposits:</strong> Selling pressure. Large deposits suggest potential selling activity.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400 flex-shrink-0">•</span>
                <span>
                  <strong>Exchange Withdrawals:</strong> Bullish signal. Whales moving coins to personal wallets suggest
                  long-term holding.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 flex-shrink-0">•</span>
                <span>
                  <strong>Whale Transfers:</strong> Large movements between wallets or addresses. May indicate repositioning or
                  portfolio management.
                </span>
              </li>
            </ul>
          </div>

          <div className="glass p-6 rounded-2xl border border-gray-700/30">
            <h3 className="text-lg font-bold text-gray-100 mb-4">How to Use This Tracker</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-3">
                <span className="text-blue-400 flex-shrink-0">→</span>
                <span>
                  <strong>Monitor trends:</strong> Watch for patterns in whale behavior to anticipate market moves.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 flex-shrink-0">→</span>
                <span>
                  <strong>Filter by token:</strong> Focus on specific assets relevant to your trading strategy.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 flex-shrink-0">→</span>
                <span>
                  <strong>Track exchange flow:</strong> Use net flow metrics to gauge market sentiment.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
