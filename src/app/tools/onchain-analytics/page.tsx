'use client';

import { useState, useMemo } from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { ToolStructuredData } from '@/components/StructuredData';

/* ──────────────── Types ──────────────── */
interface ChainMetrics {
  chain: string;
  icon: string;
  dailyTransactions: number;
  activeAddresses: number;
  gasUsage: number;
  avgGasPrice: number;
  transactionVolume: number; // USD billions
  tvl: number; // Total Value Locked in billions
  tps: number; // Transactions per second
  avgFeeUSD: number;
}

interface Protocol {
  name: string;
  icon: string;
  tvl: number; // billions
  uniqueUsers: number;
  monthlyRevenue: number; // millions
  dominance: number; // percentage
  change24h: number;
}

interface GasData {
  chain: string;
  safe: number;
  standard: number;
  fast: number;
  timestamp: string;
}

type ChainFilter = 'All' | 'Ethereum' | 'Solana' | 'Bitcoin' | 'Arbitrum' | 'Base' | 'Polygon';

/* ──────────────── Data Generation ──────────────── */
function seed(s: number): () => number {
  let x = s;
  return () => { x = (x * 16807 + 0) % 2147483647; return (x - 1) / 2147483646; };
}

function generateChainMetrics(): ChainMetrics[] {
  const rng = seed(123);
  const r = (min: number, max: number) => min + rng() * (max - min);

  return [
    {
      chain: 'Ethereum',
      icon: 'Ξ',
      dailyTransactions: 1_280_000,
      activeAddresses: 485_000,
      gasUsage: 92.5,
      avgGasPrice: 28.5,
      transactionVolume: 142.8,
      tvl: 85.4,
      tps: 14.8,
      avgFeeUSD: 0.85,
    },
    {
      chain: 'Solana',
      icon: '◎',
      dailyTransactions: 24_500_000,
      activeAddresses: 2_160_000,
      gasUsage: 12.3,
      avgGasPrice: 0.00025,
      transactionVolume: 18.4,
      tvl: 4.2,
      tps: 2800,
      avgFeeUSD: 0.00025,
    },
    {
      chain: 'Bitcoin',
      icon: '₿',
      dailyTransactions: 450_000,
      activeAddresses: 720_000,
      gasUsage: 78.9,
      avgGasPrice: 45.2,
      transactionVolume: 32.6,
      tvl: 1.8,
      tps: 5.2,
      avgFeeUSD: 2.15,
    },
    {
      chain: 'Arbitrum',
      icon: '🔵',
      dailyTransactions: 8_900_000,
      activeAddresses: 956_000,
      gasUsage: 34.6,
      avgGasPrice: 0.15,
      transactionVolume: 28.3,
      tvl: 12.6,
      tps: 102,
      avgFeeUSD: 0.008,
    },
    {
      chain: 'Base',
      icon: '⬠',
      dailyTransactions: 6_200_000,
      activeAddresses: 742_000,
      gasUsage: 28.4,
      avgGasPrice: 0.12,
      transactionVolume: 19.7,
      tvl: 8.3,
      tps: 71,
      avgFeeUSD: 0.005,
    },
    {
      chain: 'Polygon',
      icon: '⬟',
      dailyTransactions: 5_800_000,
      activeAddresses: 618_000,
      gasUsage: 22.1,
      avgGasPrice: 35.4,
      transactionVolume: 15.2,
      tvl: 6.1,
      tps: 67,
      avgFeeUSD: 0.012,
    },
  ];
}

function generateProtocols(): Protocol[] {
  return [
    { name: 'Uniswap', icon: '🦄', tvl: 5.2, uniqueUsers: 1_240_000, monthlyRevenue: 145, dominance: 28.4, change24h: 2.3 },
    { name: 'Aave', icon: '👻', tvl: 14.8, uniqueUsers: 680_000, monthlyRevenue: 89, dominance: 22.1, change24h: -1.2 },
    { name: 'Lido', icon: '🔷', tvl: 8.4, uniqueUsers: 420_000, monthlyRevenue: 156, dominance: 18.6, change24h: 4.5 },
    { name: 'Curve', icon: '🔵', tvl: 6.2, uniqueUsers: 380_000, monthlyRevenue: 78, dominance: 12.8, change24h: 0.8 },
    { name: 'MakerDAO', icon: '🎭', tvl: 5.8, uniqueUsers: 290_000, monthlyRevenue: 62, dominance: 11.2, change24h: -0.5 },
    { name: 'Compound', icon: '⬡', tvl: 3.1, uniqueUsers: 156_000, monthlyRevenue: 42, dominance: 8.4, change24h: 1.1 },
    { name: 'Convex', icon: '⚫', tvl: 2.9, uniqueUsers: 142_000, monthlyRevenue: 35, dominance: 7.6, change24h: -2.1 },
    { name: 'Yearn', icon: '🏺', tvl: 2.4, uniqueUsers: 98_000, monthlyRevenue: 28, dominance: 6.2, change24h: 0.3 },
    { name: 'Balancer', icon: '⚖️', tvl: 1.8, uniqueUsers: 74_000, monthlyRevenue: 18, dominance: 4.1, change24h: 1.8 },
    { name: 'dYdX', icon: '📊', tvl: 1.2, uniqueUsers: 62_000, monthlyRevenue: 12, dominance: 2.8, change24h: -3.2 },
  ];
}

function generateGasData(): GasData[] {
  return [
    { chain: 'Ethereum', safe: 24, standard: 28, fast: 32, timestamp: 'Now' },
    { chain: 'Solana', safe: 0.00020, standard: 0.00025, fast: 0.00030, timestamp: 'Now' },
    { chain: 'Bitcoin', safe: 38, standard: 45, fast: 52, timestamp: 'Now' },
    { chain: 'Arbitrum', safe: 0.12, standard: 0.15, fast: 0.18, timestamp: 'Now' },
    { chain: 'Base', safe: 0.10, standard: 0.12, fast: 0.15, timestamp: 'Now' },
    { chain: 'Polygon', safe: 30, standard: 35, fast: 40, timestamp: 'Now' },
  ];
}

/* ──────────────── Metadata ──────────────── */
export const metadata: Metadata = {
  title: 'On-Chain Analytics Dashboard | Real-Time Blockchain Metrics',
  description: 'Monitor network activity, TVL, TPS, and gas fees across top blockchains. Track DeFi protocol health with live metrics for Ethereum, Solana, Bitcoin, Arbitrum, Base, and Polygon.',
  keywords: 'blockchain analytics, on-chain metrics, network activity, TVL, TPS, gas fees, DeFi protocols',
  openGraph: {
    title: 'On-Chain Analytics Dashboard',
    description: 'Real-time blockchain metrics and DeFi protocol health tracking.',
    type: 'website',
  },
};

/* ──────────────── Color Helpers ──────────────── */
function getChangeColor(val: number): string {
  return val >= 0 ? '#22c55e' : '#ef4444';
}

function formatNumber(num: number): string {
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
  return num.toFixed(0);
}

function formatGwei(num: number): string {
  return `${num.toFixed(1)} Gwei`;
}

function formatBillion(num: number): string {
  return `$${num.toFixed(1)}B`;
}

/* ──────────────── Component ──────────────── */
export default function OnChainAnalyticsDashboard() {
  const chains = useMemo(() => generateChainMetrics(), []);
  const protocols = useMemo(() => generateProtocols(), []);
  const gasData = useMemo(() => generateGasData(), []);

  const [selectedChain, setSelectedChain] = useState<ChainFilter>('All');
  const [sortBy, setSortBy] = useState<'tvl' | 'users' | 'revenue'>('tvl');

  const filteredChains = useMemo(() => {
    if (selectedChain === 'All') return chains;
    return chains.filter(c => c.chain === selectedChain);
  }, [chains, selectedChain]);

  const sortedProtocols = useMemo(() => {
    const sorted = [...protocols];
    if (sortBy === 'tvl') sorted.sort((a, b) => b.tvl - a.tvl);
    else if (sortBy === 'users') sorted.sort((a, b) => b.uniqueUsers - a.uniqueUsers);
    else sorted.sort((a, b) => b.monthlyRevenue - a.monthlyRevenue);
    return sorted;
  }, [protocols, sortBy]);

  const totalTVL = useMemo(() => protocols.reduce((sum, p) => sum + p.tvl, 0), [protocols]);
  const totalUsers = useMemo(() => protocols.reduce((sum, p) => sum + p.uniqueUsers, 0), [protocols]);
  const totalRevenue = useMemo(() => protocols.reduce((sum, p) => sum + p.monthlyRevenue, 0), [protocols]);

  return (
    <main className="min-h-screen bg-[#0d1117] text-gray-100 pb-20">
      <ToolStructuredData
        title="On-Chain Analytics Dashboard"
        description="Real-time blockchain metrics and DeFi protocol health tracking"
        slug="tools/onchain-analytics"
      />

      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/tools' },
          { label: 'On-Chain Analytics' },
        ]} />

        {/* Header */}
        <div className="mt-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            On-Chain Analytics Dashboard
          </h1>
          <p className="text-gray-400 mt-2 max-w-3xl">
            Monitor real-time blockchain activity across major chains. Track network metrics, DeFi protocol health,
            TVL movements, and gas fees all in one place.
          </p>
        </div>

        {/* Top Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
          <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4">
            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Total DeFi TVL</div>
            <div className="text-2xl font-black text-cyan-400 mt-1">{formatBillion(totalTVL)}</div>
            <div className="text-xs text-green-400 mt-1">+5.2% (7d)</div>
          </div>
          <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4">
            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Unique Users</div>
            <div className="text-2xl font-black text-purple-400 mt-1">{formatNumber(totalUsers)}</div>
            <div className="text-xs text-green-400 mt-1">+8.1% (7d)</div>
          </div>
          <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4">
            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Monthly Revenue</div>
            <div className="text-2xl font-black text-indigo-400 mt-1">${totalRevenue.toFixed(0)}M</div>
            <div className="text-xs text-green-400 mt-1">+3.4% (30d)</div>
          </div>
          <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4">
            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Protocols Tracked</div>
            <div className="text-2xl font-black text-pink-400 mt-1">{protocols.length}</div>
            <div className="text-xs text-gray-500 mt-1">Top DeFi apps</div>
          </div>
        </div>

        {/* Chain Selector */}
        <div className="mb-6">
          <div className="text-sm font-bold text-gray-400 mb-3">Filter by Blockchain</div>
          <div className="flex flex-wrap gap-2">
            {(['All', 'Ethereum', 'Solana', 'Bitcoin', 'Arbitrum', 'Base', 'Polygon'] as ChainFilter[]).map(chain => (
              <button
                key={chain}
                onClick={() => setSelectedChain(chain)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                  selectedChain === chain
                    ? 'bg-cyan-600 text-white'
                    : 'bg-[#161b22] border border-gray-700 text-gray-400 hover:text-white hover:bg-[#1c2330]'
                }`}
              >
                {chain}
              </button>
            ))}
          </div>
        </div>

        {/* Network Activity Metrics */}
        <div className="bg-[#161b22] border border-gray-700 rounded-xl p-5 mb-6">
          <h2 className="text-lg font-black mb-4">📊 Network Activity Metrics</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="p-3 text-left">Chain</th>
                  <th className="p-3 text-right">Daily Txs</th>
                  <th className="p-3 text-right">Active Addresses</th>
                  <th className="p-3 text-right">Gas Usage</th>
                  <th className="p-3 text-right">Avg Gas Price</th>
                  <th className="p-3 text-right">Tx Volume (24h)</th>
                </tr>
              </thead>
              <tbody>
                {filteredChains.map(chain => (
                  <tr key={chain.chain} className="border-b border-gray-800 hover:bg-[#1c2330] transition-colors">
                    <td className="p-3 font-bold">
                      <span className="mr-2">{chain.icon}</span>
                      {chain.chain}
                    </td>
                    <td className="p-3 text-right font-mono text-cyan-400">{formatNumber(chain.dailyTransactions)}</td>
                    <td className="p-3 text-right font-mono text-purple-400">{formatNumber(chain.activeAddresses)}</td>
                    <td className="p-3 text-right font-mono text-indigo-400">{chain.gasUsage.toFixed(1)}%</td>
                    <td className="p-3 text-right font-mono text-pink-400">
                      {chain.chain === 'Solana' ? `${chain.avgGasPrice.toFixed(6)}` : `${chain.avgGasPrice.toFixed(1)}`}
                    </td>
                    <td className="p-3 text-right font-mono text-green-400">{formatBillion(chain.transactionVolume)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Chain Comparison */}
        <div className="bg-[#161b22] border border-gray-700 rounded-xl p-5 mb-6">
          <h2 className="text-lg font-black mb-4">⚡ Chain Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="p-3 text-left">Chain</th>
                  <th className="p-3 text-right">TVL</th>
                  <th className="p-3 text-right">TPS</th>
                  <th className="p-3 text-right">Avg Fee (USD)</th>
                  <th className="p-3 text-right">Finality</th>
                </tr>
              </thead>
              <tbody>
                {filteredChains.map(chain => (
                  <tr key={chain.chain} className="border-b border-gray-800 hover:bg-[#1c2330] transition-colors">
                    <td className="p-3 font-bold">{chain.icon} {chain.chain}</td>
                    <td className="p-3 text-right font-bold text-cyan-400">{formatBillion(chain.tvl)}</td>
                    <td className="p-3 text-right font-bold text-purple-400">{chain.tps.toFixed(0)}</td>
                    <td className="p-3 text-right font-bold text-indigo-400">${chain.avgFeeUSD.toFixed(4)}</td>
                    <td className="p-3 text-right text-gray-400 text-xs">
                      {chain.chain === 'Bitcoin' ? '~60 min' : chain.chain === 'Ethereum' ? '~12 sec' : '~2 sec'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Transaction Volume Chart */}
        <div className="bg-[#161b22] border border-gray-700 rounded-xl p-5 mb-6">
          <h2 className="text-lg font-black mb-4">📈 24h Transaction Volume</h2>
          <div className="space-y-4">
            {filteredChains.map(chain => {
              const maxVolume = Math.max(...filteredChains.map(c => c.transactionVolume));
              const percentage = (chain.transactionVolume / maxVolume) * 100;
              return (
                <div key={chain.chain}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-sm">{chain.icon} {chain.chain}</span>
                    <span className="text-cyan-400 font-bold text-sm">{formatBillion(chain.transactionVolume)}</span>
                  </div>
                  <div className="w-full bg-[#0d1117] rounded-lg h-8 overflow-hidden border border-gray-700">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300 flex items-center justify-end pr-2"
                      style={{ width: `${percentage}%` }}
                    >
                      {percentage > 15 && <span className="text-xs font-bold text-white">{percentage.toFixed(0)}%</span>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* DeFi Protocol Health */}
        <div className="bg-[#161b22] border border-gray-700 rounded-xl p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-black">🏛️ Top DeFi Protocols</h2>
            <div className="flex gap-2">
              {(['tvl', 'users', 'revenue'] as const).map(sort => (
                <button
                  key={sort}
                  onClick={() => setSortBy(sort)}
                  className={`px-3 py-1 text-xs font-bold rounded transition-colors ${
                    sortBy === sort
                      ? 'bg-purple-600 text-white'
                      : 'bg-[#0d1117] text-gray-400 hover:text-white'
                  }`}
                >
                  {sort === 'tvl' ? 'TVL' : sort === 'users' ? 'Users' : 'Revenue'}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {sortedProtocols.map((protocol, idx) => (
              <div
                key={protocol.name}
                className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 hover:border-gray-600 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{protocol.icon}</span>
                    <div>
                      <div className="font-bold">{idx + 1}. {protocol.name}</div>
                      <div className="text-xs text-gray-500">
                        {(protocol.dominance).toFixed(1)}% of DeFi TVL
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-cyan-400">{formatBillion(protocol.tvl)}</div>
                    <div className="text-xs" style={{ color: getChangeColor(protocol.change24h) }}>
                      {protocol.change24h > 0 ? '+' : ''}{protocol.change24h.toFixed(1)}% (24h)
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-[#161b22] rounded p-2">
                    <div className="text-[10px] text-gray-500 uppercase font-bold">TVL</div>
                    <div className="text-sm font-bold text-cyan-400 mt-1">{formatBillion(protocol.tvl)}</div>
                  </div>
                  <div className="bg-[#161b22] rounded p-2">
                    <div className="text-[10px] text-gray-500 uppercase font-bold">Users</div>
                    <div className="text-sm font-bold text-purple-400 mt-1">{formatNumber(protocol.uniqueUsers)}</div>
                  </div>
                  <div className="bg-[#161b22] rounded p-2">
                    <div className="text-[10px] text-gray-500 uppercase font-bold">Revenue</div>
                    <div className="text-sm font-bold text-indigo-400 mt-1">${protocol.monthlyRevenue}M</div>
                  </div>
                </div>

                {/* TVL Dominance Bar */}
                <div className="mt-3">
                  <div className="w-full bg-[#0d1117] rounded-full h-1.5 border border-gray-700 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-600"
                      style={{ width: `${protocol.dominance}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gas Fee Tracker */}
        <div className="bg-[#161b22] border border-gray-700 rounded-xl p-5 mb-6">
          <h2 className="text-lg font-black mb-4">⛽ Gas Fee Tracker</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gasData.map(gas => (
              <div key={gas.chain} className="bg-[#0d1117] border border-gray-800 rounded-lg p-4">
                <div className="font-bold mb-3 flex items-center gap-2">
                  <span>{chains.find(c => c.chain === gas.chain)?.icon}</span>
                  {gas.chain}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Safe</span>
                    <span className="font-mono font-bold text-green-400">
                      {gas.chain === 'Solana' ? gas.safe.toFixed(7) : `${gas.safe.toFixed(1)} Gwei`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Standard</span>
                    <span className="font-mono font-bold text-yellow-400">
                      {gas.chain === 'Solana' ? gas.standard.toFixed(7) : `${gas.standard.toFixed(1)} Gwei`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Fast</span>
                    <span className="font-mono font-bold text-red-400">
                      {gas.chain === 'Solana' ? gas.fast.toFixed(7) : `${gas.fast.toFixed(1)} Gwei`}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Protocol Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* TVL Distribution */}
          <div className="bg-[#161b22] border border-gray-700 rounded-xl p-5">
            <h3 className="font-black mb-4">TVL Distribution</h3>
            <div className="space-y-2">
              {sortedProtocols.slice(0, 5).map((protocol, idx) => {
                const percentage = (protocol.tvl / totalTVL) * 100;
                return (
                  <div key={protocol.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">{idx + 1}. {protocol.name}</span>
                      <span className="text-xs text-gray-500">{percentage.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-[#0d1117] rounded-full h-2 border border-gray-700 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-600"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* User Growth */}
          <div className="bg-[#161b22] border border-gray-700 rounded-xl p-5">
            <h3 className="font-black mb-4">User Base Distribution</h3>
            <div className="space-y-2">
              {sortedProtocols.filter(p => p.uniqueUsers > 100_000).slice(0, 5).map((protocol, idx) => {
                const percentage = (protocol.uniqueUsers / totalUsers) * 100;
                return (
                  <div key={protocol.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">{idx + 1}. {protocol.name}</span>
                      <span className="text-xs text-gray-500">{percentage.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-[#0d1117] rounded-full h-2 border border-gray-700 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-600"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <div className="bg-[#161b22] border border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-black mb-4">What is On-Chain Analytics?</h2>
          <div className="text-gray-400 space-y-4 text-sm leading-relaxed">
            <p>
              On-chain analytics refers to the analysis of blockchain data directly from the distributed ledger.
              By monitoring metrics like transaction volumes, active addresses, and network activity, users gain
              real-time insights into blockchain health and adoption trends. This data is crucial for understanding
              market movements and protocol performance.
            </p>
            <p>
              Key metrics tracked include Total Value Locked (TVL), which measures the total cryptocurrency locked
              in DeFi protocols; Transactions Per Second (TPS), which indicates network throughput; and gas fees,
              which represent the cost of network operations. These metrics help investors, developers, and traders
              make informed decisions.
            </p>
            <p>
              This dashboard monitors six major blockchain networks: Ethereum (the largest smart contract platform),
              Solana (known for high throughput), Bitcoin (the original blockchain), Arbitrum (Layer 2 scaling solution),
              Base (Coinbase's Layer 2), and Polygon (leading sidechain). Each offers different trade-offs between
              decentralization, security, and scalability.
            </p>
            <p>
              DeFi protocol health indicators include user counts, monthly revenue, and TVL dominance. Protocols like
              Uniswap, Aave, and Lido lead the DeFi ecosystem by managing billions in assets. By analyzing these metrics,
              users can identify trends, assess protocol sustainability, and evaluate investment opportunities.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
