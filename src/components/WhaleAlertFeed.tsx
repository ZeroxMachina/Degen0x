'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

// ─── Types ───────────────────────────────────────────────────────────────
type TransactionType = 'exchange_deposit' | 'exchange_withdrawal' | 'whale_transfer' | 'unknown';
type TokenType = 'BTC' | 'ETH' | 'USDT' | 'USDC' | 'SOL';

interface WhaleTransaction {
  id: string;
  from: { label: string };
  to: { label: string };
  amount: string;
  token: TokenType;
  usdValue: string;
  timestamp: number;
  type: TransactionType;
}

// ─── Mock Data Generation ────────────────────────────────────────────────
function generateMockTransaction(): WhaleTransaction {
  const tokens: TokenType[] = ['BTC', 'ETH', 'USDT', 'USDC', 'SOL'];
  const exchanges = [
    'Binance',
    'Coinbase',
    'Kraken',
    'Bitfinex',
    'OKX',
    'Bybit',
    'Gate.io',
  ];
  const walletLabels = [
    'Whale 0x7a..f3',
    'Whale 0x3d..a1',
    'MEV Bot',
    'Unknown Wallet',
  ];

  const token = tokens[Math.floor(Math.random() * tokens.length)];
  const types: TransactionType[] = [
    'exchange_deposit',
    'exchange_withdrawal',
    'whale_transfer',
  ];
  const type = types[Math.floor(Math.random() * types.length)];

  const amountRanges: Record<TokenType, [number, number]> = {
    BTC: [10, 500],
    ETH: [100, 20000],
    USDT: [5000000, 100000000],
    USDC: [2000000, 75000000],
    SOL: [5000, 250000],
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

  return {
    id: Math.random().toString(36).slice(2, 10),
    from: {
      label:
        Math.random() > 0.4
          ? exchanges[Math.floor(Math.random() * exchanges.length)]
          : walletLabels[Math.floor(Math.random() * walletLabels.length)],
    },
    to: {
      label:
        Math.random() > 0.4
          ? exchanges[Math.floor(Math.random() * exchanges.length)]
          : walletLabels[Math.floor(Math.random() * walletLabels.length)],
    },
    amount: formatAmount(rawAmount),
    token,
    usdValue: formatAmount(usdVal),
    timestamp: Date.now() - Math.floor(Math.random() * 3600000),
    type,
  };
}

// ─── Utility Functions ────────────────────────────────────────────────────
function formatTime(timestamp: number): string {
  const now = Date.now();
  const diff = Math.floor((now - timestamp) / 1000);

  if (diff < 60) return `${diff}s`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
  return `${Math.floor(diff / 86400)}d`;
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

// ─── Main Widget Component ──────────────────────────────────────────────
export default function WhaleAlertFeed() {
  const [transactions, setTransactions] = useState<WhaleTransaction[]>([]);
  const [isLive, setIsLive] = useState(true);
  const [highlightId, setHighlightId] = useState<string | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Initialize transactions
  useEffect(() => {
    const initial = Array.from({ length: 5 }, () => generateMockTransaction()).sort(
      (a, b) => b.timestamp - a.timestamp
    );
    setTransactions(initial);
  }, []);

  // Live update effect
  useEffect(() => {
    if (isLive) {
      intervalRef.current = setInterval(() => {
        const newTx = generateMockTransaction();
        newTx.timestamp = Date.now();
        setTransactions((prev) => [newTx, ...prev.slice(0, 4)]);
        setHighlightId(newTx.id);
        setTimeout(() => setHighlightId(null), 2000);
      }, 6000 + Math.random() * 4000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isLive]);

  return (
    <div className="glass rounded-xl overflow-hidden border border-gray-700/30">
      {/* Header */}
      <div className="p-4 border-b border-gray-700/30 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">🐋</span>
          <h3 className="font-bold text-gray-100 text-sm">Whale Alerts</h3>
          {isLive && (
            <span className="flex items-center gap-1 text-xs text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            </span>
          )}
        </div>
        <button
          onClick={() => setIsLive(!isLive)}
          className={`px-2 py-1 rounded text-xs font-medium transition-all ${
            isLive
              ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
              : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
          }`}
        >
          {isLive ? '⏸' : '▶'}
        </button>
      </div>

      {/* Transactions */}
      <div className="max-h-[280px] overflow-y-auto">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className={`p-3 border-b border-gray-700/20 last:border-0 transition-all duration-500 ${
              highlightId === tx.id
                ? 'bg-blue-500/10 animate-pulse'
                : 'hover:bg-gray-900/30'
            }`}
          >
            {/* Token and Amount */}
            <div className="flex items-start justify-between gap-2 mb-1">
              <div className="flex items-center gap-2 min-w-0">
                <span className={`px-2 py-0.5 rounded text-xs font-semibold whitespace-nowrap ${getTokenColor(tx.token)}`}>
                  {tx.token}
                </span>
                <span className="text-xs text-gray-300 font-medium truncate">{tx.amount}</span>
              </div>
              <span className="text-xs text-gray-500 flex-shrink-0">{formatTime(tx.timestamp)} ago</span>
            </div>

            {/* From → To */}
            <div className="text-xs text-gray-400 truncate">
              <span className="text-gray-500">{tx.from.label}</span>
              <span className="text-gray-600 mx-1">→</span>
              <span className="text-gray-500">{tx.to.label}</span>
            </div>

            {/* USD Value */}
            <div className="text-xs text-gray-500 mt-1">
              <span className="text-blue-400">${tx.usdValue}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Link
        href="/alerts/whale-tracker"
        className="block p-3 text-center border-t border-gray-700/30 text-xs text-blue-400 hover:text-blue-300 hover:bg-gray-900/30 transition-all font-medium"
      >
        View All Alerts →
      </Link>
    </div>
  );
}
