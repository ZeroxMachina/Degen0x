'use client';

import { useState, useEffect, useCallback } from 'react';
import { Activity, ArrowUpRight, ArrowDownRight, Wallet, TrendingUp, Filter, RefreshCw, Eye, AlertTriangle } from 'lucide-react';

// ── Interfaces ──────────────────────────────────────────
interface WhaleTx {
  id: string;
  wallet: string;
  token: string;
  amount: number;
  chain: string;
  type: 'buy' | 'sell' | 'transfer';
  timestamp: string;
  value: string;
}

interface TopWhale {
  address: string;
  volume: string;
  txCount: number;
}

interface AccumulationZone {
  token: string;
  accumulated: string;
  change: number;
  whaleCount: number;
}

// ── Constants ───────────────────────────────────────────
const CHAINS = ['ALL', 'ETH', 'SOL', 'BTC', 'ARB'];
const TX_TYPES = ['ALL', 'buy', 'sell', 'transfer'];
const REFRESH_INTERVAL = 5000;

// ── Helpers ─────────────────────────────────────────────
const generateMockWhaleTx = (): WhaleTx => {
  const chains = ['ETH', 'SOL', 'BTC', 'ARB'];
  const tokens = ['ETH', 'USDC', 'WBTC', 'SOL', 'ARB', 'USDT', 'DAI', 'WETH'];
  const types = ['buy', 'sell', 'transfer'] as const;

  return {
    id: Math.random().toString(36).substr(2, 9),
    wallet: `0x${Math.random().toString(16).substr(2, 8)}...${Math.random().toString(16).substr(2, 4)}`,
    token: tokens[Math.floor(Math.random() * tokens.length)],
    amount: Math.floor(Math.random() * 50) + 1,
    chain: chains[Math.floor(Math.random() * chains.length)],
    type: types[Math.floor(Math.random() * types.length)],
    timestamp: new Date(Date.now() - Math.random() * 3600000).toLocaleTimeString(),
    value: `$${(Math.random() * 50 + 1).toFixed(1)}M`,
  };
};

const generateTopWhales = (): TopWhale[] => {
  const whales: TopWhale[] = [];
  for (let i = 0; i < 10; i++) {
    whales.push({
      address: `0x${Math.random().toString(16).substr(2, 8)}...${Math.random().toString(16).substr(2, 4)}`,
      volume: `$${(Math.random() * 500 + 100).toFixed(1)}M`,
      txCount: Math.floor(Math.random() * 150) + 10,
    });
  }
  return whales.sort(() => Math.random() - 0.5);
};

const generateAccumulationZones = (): AccumulationZone[] => {
  const tokens = ['ETH', 'USDC', 'SOL', 'WBTC', 'ARB', 'USDT'];
  return tokens.map((token) => ({
    token,
    accumulated: `${(Math.random() * 80 + 20).toFixed(1)}M`,
    change: Math.floor(Math.random() * 40) - 20,
    whaleCount: Math.floor(Math.random() * 100) + 20,
  }));
};

// ── Component ───────────────────────────────────────────
export default function WhaleWatchClient() {
  const [transactions, setTransactions] = useState<WhaleTx[]>([]);
  const [topWhales, setTopWhales] = useState<TopWhale[]>([]);
  const [accumulationZones, setAccumulationZones] = useState<AccumulationZone[]>([]);
  const [filterChain, setFilterChain] = useState<string>('ALL');
  const [filterType, setFilterType] = useState<string>('ALL');
  const [minAmount, setMinAmount] = useState<number>(1);
  const [refreshCount, setRefreshCount] = useState(0);
  const [totalVolume, setTotalVolume] = useState('$0.0M');
  const [largestTx, setLargestTx] = useState('$0.0M');
  const [isLoading, setIsLoading] = useState(true);

  const updateStats = useCallback((txs: WhaleTx[]) => {
    const volume = txs.reduce((sum, tx) => {
      const val = parseFloat(tx.value.replace('$', '').replace('M', ''));
      return sum + val;
    }, 0);
    setTotalVolume(`$${volume.toFixed(1)}M`);

    const largest = Math.max(...txs.map(tx => parseFloat(tx.value.replace('$', '').replace('M', ''))));
    setLargestTx(`$${largest.toFixed(1)}M`);
  }, []);

  // Initialize mock data
  useEffect(() => {
    const initialTxs = Array.from({ length: 15 }, generateMockWhaleTx);
    setTransactions(initialTxs);
    setTopWhales(generateTopWhales());
    setAccumulationZones(generateAccumulationZones());
    updateStats(initialTxs);
    setIsLoading(false);
  }, [updateStats]);

  // Auto-refresh simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setTransactions(prev => {
        const newTx = generateMockWhaleTx();
        const updated = [newTx, ...prev.slice(0, 14)];
        updateStats(updated);
        return updated;
      });
      setRefreshCount(c => c + 1);
    }, REFRESH_INTERVAL);

    return () => clearInterval(interval);
  }, [updateStats]);

  // Periodically refresh whales & accumulation
  useEffect(() => {
    if (refreshCount > 0 && refreshCount % 3 === 0) {
      setTopWhales(generateTopWhales());
      setAccumulationZones(generateAccumulationZones());
    }
  }, [refreshCount]);

  const filteredTransactions = transactions.filter(tx => {
    if (filterChain !== 'ALL' && tx.chain !== filterChain) return false;
    if (filterType !== 'ALL' && tx.type !== filterType) return false;
    if (parseFloat(tx.value.replace('$', '').replace('M', '')) < minAmount) return false;
    return true;
  });

  // Loading skeleton
  if (isLoading) {
    return (
      <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }} className="min-h-screen pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[1,2,3,4].map(i => (
              <div key={i} style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 'var(--glass-radius-sm)' }} className="p-6">
                <div className="h-4 w-24 rounded" style={{ background: 'var(--color-border)', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
                <div className="h-8 w-32 rounded mt-3" style={{ background: 'var(--color-border)', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }} className="min-h-screen pb-12">
      {/* Header */}
      <div style={{ background: 'var(--glass-nav-bg)', borderBottom: '1px solid var(--glass-nav-border)', backdropFilter: 'blur(var(--glass-blur))', WebkitBackdropFilter: 'blur(var(--glass-blur))' }} className="sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div style={{ background: 'var(--color-primary)', color: '#fff' }} className="p-2 rounded-lg">
                <Eye size={24} strokeWidth={2.5} aria-hidden="true" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter">Whale Watch</h1>
                <p style={{ color: 'var(--color-text-secondary)' }} className="text-sm">Real-time large transaction monitoring</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div style={{ background: '#22c55e', color: '#fff' }} className="px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1" role="status" aria-label="Live data feed active">
                <span className="w-2 h-2 rounded-full animate-pulse bg-white" aria-hidden="true"></span>
                LIVE
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Volume */}
          <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 'var(--glass-radius-sm)', backdropFilter: 'blur(var(--glass-blur))' }} className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-2">
              <p style={{ color: 'var(--color-text-secondary)' }} className="text-xs sm:text-sm font-medium">24H Volume</p>
              <Activity size={18} style={{ color: 'var(--color-secondary)' }} aria-hidden="true" />
            </div>
            <p className="text-xl sm:text-2xl font-bold">{totalVolume}</p>
            <p style={{ color: '#22c55e' }} className="text-xs mt-2">+12.5% from last period</p>
          </div>

          {/* Largest Transaction */}
          <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 'var(--glass-radius-sm)', backdropFilter: 'blur(var(--glass-blur))' }} className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-2">
              <p style={{ color: 'var(--color-text-secondary)' }} className="text-xs sm:text-sm font-medium">Largest Tx</p>
              <TrendingUp size={18} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
            </div>
            <p className="text-xl sm:text-2xl font-bold">{largestTx}</p>
            <p style={{ color: 'var(--color-text-secondary)' }} className="text-xs mt-2">Last 24 hours</p>
          </div>

          {/* Most Active Chain */}
          <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 'var(--glass-radius-sm)', backdropFilter: 'blur(var(--glass-blur))' }} className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-2">
              <p style={{ color: 'var(--color-text-secondary)' }} className="text-xs sm:text-sm font-medium">Top Chain</p>
              <Wallet size={18} style={{ color: '#22c55e' }} aria-hidden="true" />
            </div>
            <p className="text-xl sm:text-2xl font-bold">ETH</p>
            <p style={{ color: 'var(--color-text-secondary)' }} className="text-xs mt-2">45% of volume</p>
          </div>

          {/* Buy/Sell Ratio */}
          <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 'var(--glass-radius-sm)', backdropFilter: 'blur(var(--glass-blur))' }} className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-2">
              <p style={{ color: 'var(--color-text-secondary)' }} className="text-xs sm:text-sm font-medium">Buy/Sell</p>
              <Activity size={18} style={{ color: 'var(--color-primary)' }} aria-hidden="true" />
            </div>
            <p className="text-xl sm:text-2xl font-bold">1.3x</p>
            <p style={{ color: '#22c55e' }} className="text-xs mt-2">Bullish sentiment</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Transactions Feed */}
          <div className="lg:col-span-3 space-y-4">
            {/* Filters */}
            <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 'var(--glass-radius-sm)' }} className="p-4">
              <fieldset>
                <legend className="flex items-center gap-2 mb-4">
                  <Filter size={18} style={{ color: 'var(--color-text-secondary)' }} aria-hidden="true" />
                  <span style={{ color: 'var(--color-text-secondary)' }} className="text-sm font-medium">Filters</span>
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Chain Filter */}
                  <div>
                    <label htmlFor="filter-chain" style={{ color: 'var(--color-text-secondary)' }} className="text-xs font-medium block mb-2">Chain</label>
                    <select
                      id="filter-chain"
                      value={filterChain}
                      onChange={(e) => setFilterChain(e.target.value)}
                      style={{ borderColor: 'var(--glass-border)', background: 'var(--color-bg)', color: 'var(--color-text)' }}
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                    >
                      {CHAINS.map(chain => (
                        <option key={chain} value={chain}>{chain}</option>
                      ))}
                    </select>
                  </div>

                  {/* Type Filter */}
                  <div>
                    <label htmlFor="filter-type" style={{ color: 'var(--color-text-secondary)' }} className="text-xs font-medium block mb-2">Type</label>
                    <select
                      id="filter-type"
                      value={filterType}
                      onChange={(e) => setFilterType(e.target.value)}
                      style={{ background: 'var(--color-bg)', borderColor: 'var(--glass-border)', color: 'var(--color-text)' }}
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                    >
                      {TX_TYPES.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Min Amount Filter */}
                  <div>
                    <label htmlFor="filter-min-amount" style={{ color: 'var(--color-text-secondary)' }} className="text-xs font-medium block mb-2">Min Amount ($M)</label>
                    <input
                      id="filter-min-amount"
                      type="number"
                      min="1"
                      max="50"
                      value={minAmount}
                      onChange={(e) => setMinAmount(parseInt(e.target.value) || 1)}
                      style={{ background: 'var(--color-bg)', borderColor: 'var(--glass-border)', color: 'var(--color-text)' }}
                      className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
                    />
                  </div>
                </div>
              </fieldset>
            </div>

            {/* Transaction Feed */}
            <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 'var(--glass-radius-sm)' }} className="overflow-hidden" role="region" aria-label="Live transaction feed">
              <div style={{ borderBottom: '1px solid var(--glass-border)' }} className="px-4 sm:px-6 py-4 flex items-center justify-between">
                <h2 className="font-semibold text-base">Live Transaction Feed</h2>
                <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                  <RefreshCw size={14} className={refreshCount > 0 ? 'animate-spin' : ''} aria-hidden="true" />
                  {filteredTransactions.length} transactions
                </div>
              </div>
              <div>
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((tx) => (
                    <div key={tx.id} style={{ borderBottom: '1px solid var(--glass-border)' }} className="px-4 sm:px-6 py-3 hover:opacity-80 transition-opacity">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            {tx.type === 'buy' ? (
                              <ArrowDownRight size={16} style={{ color: '#22c55e' }} aria-label="Buy" />
                            ) : tx.type === 'sell' ? (
                              <ArrowUpRight size={16} style={{ color: '#ef4444' }} aria-label="Sell" />
                            ) : (
                              <Activity size={16} style={{ color: 'var(--color-secondary)' }} aria-label="Transfer" />
                            )}
                            <span className="font-mono text-xs sm:text-sm truncate">{tx.wallet}</span>
                            <span style={{ background: 'var(--glass-subtle-bg)', color: 'var(--color-text-secondary)' }} className="px-2 py-0.5 rounded text-xs font-medium">
                              {tx.chain}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                            <span>{tx.token}</span>
                            <span aria-hidden="true">·</span>
                            <span>{tx.timestamp}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-sm">{tx.value}</p>
                          <p style={{ color: 'var(--color-text-secondary)' }} className="text-xs capitalize">{tx.type}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-4 sm:px-6 py-8 text-center">
                    <AlertTriangle size={32} style={{ color: 'var(--color-text-secondary)' }} className="mx-auto mb-2 opacity-40" aria-hidden="true" />
                    <p style={{ color: 'var(--color-text-secondary)' }} className="text-sm">No transactions match current filters</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Whales */}
            <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 'var(--glass-radius-sm)' }} className="p-4">
              <h3 className="font-semibold text-base mb-4 flex items-center gap-2">
                <Wallet size={18} style={{ color: 'var(--color-primary)' }} aria-hidden="true" />
                Top Whales
              </h3>
              <div className="space-y-3">
                {topWhales.slice(0, 8).map((whale, idx) => (
                  <div key={idx} style={{ borderBottom: '1px solid var(--glass-border)' }} className="pb-3 last:border-b-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs truncate">{whale.address}</span>
                      <span style={{ color: '#22c55e' }} className="text-xs font-semibold">{whale.volume}</span>
                    </div>
                    <p style={{ color: 'var(--color-text-secondary)' }} className="text-xs">{whale.txCount} txs</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Accumulation Zones */}
            <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: 'var(--glass-radius-sm)' }} className="p-4">
              <h3 className="font-semibold text-base mb-4 flex items-center gap-2">
                <TrendingUp size={18} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                Accumulation
              </h3>
              <div className="space-y-2">
                {accumulationZones.slice(0, 6).map((zone, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{zone.token}</span>
                      <span style={{ color: zone.change >= 0 ? '#22c55e' : '#ef4444' }} className="text-xs font-semibold">
                        {zone.change >= 0 ? '+' : ''}{zone.change}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p style={{ color: 'var(--color-text-secondary)' }} className="text-xs">{zone.accumulated}</p>
                      <p style={{ color: 'var(--color-text-secondary)' }} className="text-xs">{zone.whaleCount} whales</p>
                    </div>
                    <div style={{ background: 'var(--color-bg)', border: '1px solid var(--glass-border)' }} className="rounded h-1 mt-1 overflow-hidden">
                      <div
                        style={{ background: 'var(--color-secondary)', width: `${(zone.whaleCount / 150) * 100}%` }}
                        className="h-full transition-all duration-500"
                        role="progressbar"
                        aria-valuenow={zone.whaleCount}
                        aria-valuemin={0}
                        aria-valuemax={150}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
