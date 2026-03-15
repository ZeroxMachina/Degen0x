'use client';

import { useState, useEffect } from 'react';
import { Activity, ArrowUpRight, ArrowDownRight, Wallet, TrendingUp, Filter, RefreshCw, Eye, AlertTriangle } from 'lucide-react';
import { Metadata } from 'next';

// Mock data generation functions
const generateMockWhaleTx = () => {
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

const generateTopWhales = () => {
  const whales = [];
  for (let i = 0; i < 10; i++) {
    whales.push({
      address: `0x${Math.random().toString(16).substr(2, 8)}...${Math.random().toString(16).substr(2, 4)}`,
      volume: `$${(Math.random() * 500 + 100).toFixed(1)}M`,
      txCount: Math.floor(Math.random() * 150) + 10,
    });
  }
  return whales.sort(() => Math.random() - 0.5);
};

const generateAccumulationZones = () => {
  const tokens = ['ETH', 'USDC', 'SOL', 'WBTC', 'ARB', 'USDT'];
  return tokens.map((token) => ({
    token,
    accumulated: `${(Math.random() * 80 + 20).toFixed(1)}M`,
    change: Math.floor(Math.random() * 40) - 20,
    whaleCount: Math.floor(Math.random() * 100) + 20,
  }));
};

export const metadata: Metadata = {
  title: 'Whale Watch - Real-time Crypto Transaction Tracking | degen0x',
  description: 'Monitor large whale transactions across ETH, SOL, BTC, and ARB in real-time. Track accumulation zones and top whale activity with advanced filtering.',
  keywords: 'whale watching, crypto transactions, blockchain, ethereum, solana, bitcoin, arbitrum, trading signals',
  openGraph: {
    title: 'Whale Watch Dashboard',
    description: 'Real-time monitoring of large crypto transactions',
    type: 'website',
  },
};

export default function WhaleWatchPage() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [topWhales, setTopWhales] = useState<any[]>([]);
  const [accumulationZones, setAccumulationZones] = useState<any[]>([]);
  const [filterChain, setFilterChain] = useState<string>('ALL');
  const [filterType, setFilterType] = useState<string>('ALL');
  const [minAmount, setMinAmount] = useState<number>(1);
  const [refreshCount, setRefreshCount] = useState(0);
  const [totalVolume, setTotalVolume] = useState('0');
  const [largestTx, setLargestTx] = useState('0');

  // Initialize mock data
  useEffect(() => {
    const initialTxs = Array.from({ length: 15 }, generateMockWhaleTx);
    setTransactions(initialTxs);
    setTopWhales(generateTopWhales());
    setAccumulationZones(generateAccumulationZones());
    updateStats(initialTxs);
  }, []);

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

      if (refreshCount % 3 === 0) {
        setTopWhales(generateTopWhales());
        setAccumulationZones(generateAccumulationZones());
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [refreshCount]);

  const updateStats = (txs: any[]) => {
    const volume = txs.reduce((sum, tx) => {
      const val = parseFloat(tx.value);
      return sum + val;
    }, 0);
    setTotalVolume(`$${volume.toFixed(1)}M`);

    const largest = Math.max(...txs.map(tx => parseFloat(tx.value)));
    setLargestTx(`$${largest.toFixed(1)}M`);
  };

  const filteredTransactions = transactions.filter(tx => {
    if (filterChain !== 'ALL' && tx.chain !== filterChain) return false;
    if (filterType !== 'ALL' && tx.type !== filterType) return false;
    if (parseFloat(tx.value) < minAmount) return false;
    return true;
  });

  const chains = ['ALL', 'ETH', 'SOL', 'BTC', 'ARB'];
  const types = ['ALL', 'buy', 'sell', 'transfer'];

  return (
    <div style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }} className="min-h-screen pb-12">
      {/* Header */}
      <div style={{ backgroundColor: 'var(--surface)', borderBottomColor: 'var(--border)' }} className="border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div style={{ backgroundColor: 'var(--purple)', color: 'var(--bg)' }} className="p-2 rounded-lg">
                <Eye size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter">Whale Watch</h1>
                <p style={{ color: 'var(--text2)' }} className="text-sm">Real-time large transaction monitoring</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div style={{ backgroundColor: 'var(--green)', color: 'var(--bg)' }} className="px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full animate-pulse bg-white"></span>
                LIVE
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Volume */}
          <div style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }} className="border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <p style={{ color: 'var(--text2)' }} className="text-sm font-medium">24H Volume</p>
              <Activity size={18} style={{ color: 'var(--blue)' }} />
            </div>
            <p className="text-2xl font-bold">{totalVolume}</p>
            <p style={{ color: 'var(--green)' }} className="text-xs mt-2">+12.5% from last period</p>
          </div>

          {/* Largest Transaction */}
          <div style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }} className="border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <p style={{ color: 'var(--text2)' }} className="text-sm font-medium">Largest Tx</p>
              <TrendingUp size={18} style={{ color: 'var(--yellow)' }} />
            </div>
            <p className="text-2xl font-bold">{largestTx}</p>
            <p style={{ color: 'var(--text2)' }} className="text-xs mt-2">Last 24 hours</p>
          </div>

          {/* Most Active Chain */}
          <div style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }} className="border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <p style={{ color: 'var(--text2)' }} className="text-sm font-medium">Top Chain</p>
              <Wallet size={18} style={{ color: 'var(--green)' }} />
            </div>
            <p className="text-2xl font-bold">ETH</p>
            <p style={{ color: 'var(--text2)' }} className="text-xs mt-2">45% of volume</p>
          </div>

          {/* Buy/Sell Ratio */}
          <div style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }} className="border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <p style={{ color: 'var(--text2)' }} className="text-sm font-medium">Buy/Sell</p>
              <Activity size={18} style={{ color: 'var(--purple)' }} />
            </div>
            <p className="text-2xl font-bold">1.3x</p>
            <p style={{ color: 'var(--green)' }} className="text-xs mt-2">Bullish sentiment</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Transactions Feed */}
          <div className="lg:col-span-3 space-y-4">
            {/* Filters */}
            <div style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }} className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <Filter size={18} style={{ color: 'var(--text2)' }} />
                <span style={{ color: 'var(--text2)' }} className="text-sm font-medium">Filters</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Chain Filter */}
                <div>
                  <label style={{ color: 'var(--text2)' }} className="text-xs font-medium block mb-2">Chain</label>
                  <select
                    value={filterChain}
                    onChange={(e) => setFilterChain(e.target.value)}
                    style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)', color: 'var(--text)' }}
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1"
                  >
                    {chains.map(chain => (
                      <option key={chain} value={chain}>{chain}</option>
                    ))}
                  </select>
                </div>

                {/* Type Filter */}
                <div>
                  <label style={{ color: 'var(--text2)' }} className="text-xs font-medium block mb-2">Type</label>
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1"
                  >
                    {types.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Min Amount Filter */}
                <div>
                  <label style={{ color: 'var(--text2)' }} className="text-xs font-medium block mb-2">Min Amount ($M)</label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={minAmount}
                    onChange={(e) => setMinAmount(parseInt(e.target.value))}
                    style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1"
                  />
                </div>
              </div>
            </div>

            {/* Transaction Feed */}
            <div style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }} className="border rounded-lg overflow-hidden">
              <div style={{ borderBottomColor: 'var(--border)' }} className="border-b px-4 sm:px-6 py-4 flex items-center justify-between">
                <h2 className="font-semibold text-base">Live Transaction Feed</h2>
                <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text2)' }}>
                  <RefreshCw size={14} className={refreshCount > 0 ? 'animate-spin' : ''} />
                  {filteredTransactions.length} transactions
                </div>
              </div>
              <div className="divide-y" style={{ divideColor: 'var(--border)' }}>
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((tx) => (
                    <div key={tx.id} style={{ borderBottomColor: 'var(--border)' }} className="px-4 sm:px-6 py-3 hover:opacity-70 transition-opacity">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            {tx.type === 'buy' ? (
                              <ArrowDownRight size={16} style={{ color: 'var(--green)' }} />
                            ) : tx.type === 'sell' ? (
                              <ArrowUpRight size={16} style={{ color: 'var(--red)' }} />
                            ) : (
                              <Activity size={16} style={{ color: 'var(--blue)' }} />
                            )}
                            <span className="font-mono text-xs sm:text-sm truncate">{tx.wallet}</span>
                            <span style={{ backgroundColor: 'var(--border)', color: 'var(--text2)' }} className="px-2 py-0.5 rounded text-xs font-medium">
                              {tx.chain}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text2)' }}>
                            <span>{tx.token}</span>
                            <span>•</span>
                            <span>{tx.timestamp}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-sm">{tx.value}</p>
                          <p style={{ color: 'var(--text2)' }} className="text-xs capitalize">{tx.type}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-4 sm:px-6 py-8 text-center">
                    <AlertTriangle size={32} style={{ color: 'var(--text2)' }} className="mx-auto mb-2 opacity-40" />
                    <p style={{ color: 'var(--text2)' }} className="text-sm">No transactions match current filters</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Whales */}
            <div style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }} className="border rounded-lg p-4">
              <h3 className="font-semibold text-base mb-4 flex items-center gap-2">
                <Wallet size={18} style={{ color: 'var(--purple)' }} />
                Top Whales
              </h3>
              <div className="space-y-3">
                {topWhales.slice(0, 8).map((whale, idx) => (
                  <div key={idx} style={{ borderBottomColor: 'var(--border)' }} className="border-b pb-3 last:border-b-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs truncate">{whale.address}</span>
                      <span style={{ color: 'var(--green)' }} className="text-xs font-semibold">{whale.volume}</span>
                    </div>
                    <p style={{ color: 'var(--text2)' }} className="text-xs">{whale.txCount} txs</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Accumulation Zones */}
            <div style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }} className="border rounded-lg p-4">
              <h3 className="font-semibold text-base mb-4 flex items-center gap-2">
                <TrendingUp size={18} style={{ color: 'var(--yellow)' }} />
                Accumulation
              </h3>
              <div className="space-y-2">
                {accumulationZones.slice(0, 6).map((zone, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{zone.token}</span>
                      <span style={{ color: zone.change >= 0 ? 'var(--green)' : 'var(--red)' }} className="text-xs font-semibold">
                        {zone.change >= 0 ? '+' : ''}{zone.change}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p style={{ color: 'var(--text2)' }} className="text-xs">{zone.accumulated}</p>
                      <p style={{ color: 'var(--text2)' }} className="text-xs">{zone.whaleCount} whales</p>
                    </div>
                    <div style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }} className="border rounded h-1 mt-1 overflow-hidden">
                      <div
                        style={{ backgroundColor: 'var(--blue)', width: `${(zone.whaleCount / 150) * 100}%` }}
                        className="h-full"
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
