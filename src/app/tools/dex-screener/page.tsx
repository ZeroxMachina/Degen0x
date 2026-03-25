'use client';

import React, { useState, useMemo } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import {
  Search,
  Filter,
  AlertTriangle,
  CheckCircle,
  XCircle,
  TrendingUp,
  Zap,
  Shield,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface Token {
  id: string;
  name: string;
  symbol: string;
  chain: 'Ethereum' | 'Solana' | 'Base' | 'Arbitrum' | 'BSC';
  price: number;
  marketCap: number;
  liquidity: number;
  volume24h: number;
  ageMinutes: number;
  holders: number;
  txCount: number;
  contractAddress: string;
  buyTax: number;
  sellTax: number;
  topHolders: Array<{ percentage: number }>;
  honeypotStatus: 'safe' | 'caution' | 'honeypot';
  rugScore: number;
  change24h: number;
}

const mockTokens: Token[] = [
  {
    id: '1',
    name: 'Degen Moon',
    symbol: 'DMOON',
    chain: 'Ethereum',
    price: 0.000124,
    marketCap: 1200000,
    liquidity: 150000,
    volume24h: 450000,
    ageMinutes: 45,
    holders: 3421,
    txCount: 8934,
    contractAddress: '0x1234...5678',
    buyTax: 2,
    sellTax: 5,
    topHolders: [{ percentage: 15 }, { percentage: 8 }, { percentage: 7 }],
    honeypotStatus: 'safe',
    rugScore: 12,
    change24h: 245,
  },
  {
    id: '2',
    name: 'Solana Rocket',
    symbol: 'SROCKET',
    chain: 'Solana',
    price: 0.00089,
    marketCap: 890000,
    liquidity: 120000,
    volume24h: 320000,
    ageMinutes: 78,
    holders: 2156,
    txCount: 6234,
    contractAddress: '0x9876...5432',
    buyTax: 1,
    sellTax: 1,
    topHolders: [{ percentage: 12 }, { percentage: 9 }, { percentage: 6 }],
    honeypotStatus: 'safe',
    rugScore: 8,
    change24h: 182,
  },
  {
    id: '3',
    name: 'Base Tsunami',
    symbol: 'BTSUN',
    chain: 'Base',
    price: 0.00234,
    marketCap: 2100000,
    liquidity: 280000,
    volume24h: 620000,
    ageMinutes: 23,
    holders: 5234,
    txCount: 12456,
    contractAddress: '0xabcd...efgh',
    buyTax: 3,
    sellTax: 6,
    topHolders: [{ percentage: 18 }, { percentage: 10 }, { percentage: 8 }],
    honeypotStatus: 'safe',
    rugScore: 15,
    change24h: 456,
  },
  {
    id: '4',
    name: 'Arb Phantom',
    symbol: 'APHM',
    chain: 'Arbitrum',
    price: 0.00167,
    marketCap: 1450000,
    liquidity: 95000,
    volume24h: 280000,
    ageMinutes: 156,
    holders: 2834,
    txCount: 5678,
    contractAddress: '0x5678...9abc',
    buyTax: 4,
    sellTax: 8,
    topHolders: [{ percentage: 22 }, { percentage: 14 }, { percentage: 11 }],
    honeypotStatus: 'caution',
    rugScore: 48,
    change24h: 78,
  },
  {
    id: '5',
    name: 'BSC Surge',
    symbol: 'BSURGE',
    chain: 'BSC',
    price: 0.000567,
    marketCap: 780000,
    liquidity: 105000,
    volume24h: 210000,
    ageMinutes: 234,
    holders: 1923,
    txCount: 4123,
    contractAddress: '0xdef0...1234',
    buyTax: 5,
    sellTax: 10,
    topHolders: [{ percentage: 25 }, { percentage: 18 }, { percentage: 12 }],
    honeypotStatus: 'caution',
    rugScore: 65,
    change24h: -45,
  },
  {
    id: '6',
    name: 'Ethereum Spark',
    symbol: 'ESPARK',
    chain: 'Ethereum',
    price: 0.000892,
    marketCap: 950000,
    liquidity: 180000,
    volume24h: 380000,
    ageMinutes: 12,
    holders: 4123,
    txCount: 9876,
    contractAddress: '0x2468...1357',
    buyTax: 2,
    sellTax: 4,
    topHolders: [{ percentage: 10 }, { percentage: 7 }, { percentage: 5 }],
    honeypotStatus: 'safe',
    rugScore: 9,
    change24h: 234,
  },
  {
    id: '7',
    name: 'Solana Flare',
    symbol: 'SFLARE',
    chain: 'Solana',
    price: 0.00156,
    marketCap: 1680000,
    liquidity: 220000,
    volume24h: 510000,
    ageMinutes: 89,
    holders: 3567,
    txCount: 7234,
    contractAddress: '0x3579...2468',
    buyTax: 1,
    sellTax: 2,
    topHolders: [{ percentage: 11 }, { percentage: 8 }, { percentage: 6 }],
    honeypotStatus: 'safe',
    rugScore: 7,
    change24h: 189,
  },
  {
    id: '8',
    name: 'Base Vortex',
    symbol: 'BVORT',
    chain: 'Base',
    price: 0.000723,
    marketCap: 1350000,
    liquidity: 145000,
    volume24h: 290000,
    ageMinutes: 167,
    holders: 2456,
    txCount: 5123,
    contractAddress: '0x4680...3579',
    buyTax: 6,
    sellTax: 12,
    topHolders: [{ percentage: 28 }, { percentage: 20 }, { percentage: 15 }],
    honeypotStatus: 'honeypot',
    rugScore: 92,
    change24h: -234,
  },
  {
    id: '9',
    name: 'Arb Blaze',
    symbol: 'ABLAZE',
    chain: 'Arbitrum',
    price: 0.00245,
    marketCap: 2340000,
    liquidity: 350000,
    volume24h: 780000,
    ageMinutes: 34,
    holders: 6234,
    txCount: 14567,
    contractAddress: '0x5791...4680',
    buyTax: 2,
    sellTax: 3,
    topHolders: [{ percentage: 9 }, { percentage: 6 }, { percentage: 5 }],
    honeypotStatus: 'safe',
    rugScore: 10,
    change24h: 456,
  },
  {
    id: '10',
    name: 'BSC Thunder',
    symbol: 'BTHUN',
    chain: 'BSC',
    price: 0.001234,
    marketCap: 1567000,
    liquidity: 210000,
    volume24h: 420000,
    ageMinutes: 67,
    holders: 3789,
    txCount: 8901,
    contractAddress: '0x6802...5791',
    buyTax: 3,
    sellTax: 5,
    topHolders: [{ percentage: 13 }, { percentage: 9 }, { percentage: 7 }],
    honeypotStatus: 'safe',
    rugScore: 14,
    change24h: 167,
  },
  {
    id: '11',
    name: 'Degen Pulse',
    symbol: 'DPULSE',
    chain: 'Ethereum',
    price: 0.00067,
    marketCap: 1120000,
    liquidity: 165000,
    volume24h: 340000,
    ageMinutes: 145,
    holders: 2678,
    txCount: 6789,
    contractAddress: '0x7913...6802',
    buyTax: 4,
    sellTax: 7,
    topHolders: [{ percentage: 16 }, { percentage: 11 }, { percentage: 8 }],
    honeypotStatus: 'caution',
    rugScore: 52,
    change24h: 89,
  },
  {
    id: '12',
    name: 'Solana Echo',
    symbol: 'SECHO',
    chain: 'Solana',
    price: 0.000445,
    marketCap: 650000,
    liquidity: 85000,
    volume24h: 156000,
    ageMinutes: 201,
    holders: 1456,
    txCount: 3456,
    contractAddress: '0x8024...7913',
    buyTax: 1,
    sellTax: 1,
    topHolders: [{ percentage: 14 }, { percentage: 10 }, { percentage: 8 }],
    honeypotStatus: 'safe',
    rugScore: 6,
    change24h: 123,
  },
  {
    id: '13',
    name: 'Base Nexus',
    symbol: 'BNXS',
    chain: 'Base',
    price: 0.00189,
    marketCap: 1890000,
    liquidity: 265000,
    volume24h: 540000,
    ageMinutes: 56,
    holders: 4567,
    txCount: 10234,
    contractAddress: '0x9135...8024',
    buyTax: 2,
    sellTax: 4,
    topHolders: [{ percentage: 12 }, { percentage: 8 }, { percentage: 6 }],
    honeypotStatus: 'safe',
    rugScore: 11,
    change24h: 278,
  },
  {
    id: '14',
    name: 'Arb Surge',
    symbol: 'ASURGE',
    chain: 'Arbitrum',
    price: 0.000934,
    marketCap: 920000,
    liquidity: 110000,
    volume24h: 240000,
    ageMinutes: 178,
    holders: 2123,
    txCount: 4678,
    contractAddress: '0xacbd...9135',
    buyTax: 5,
    sellTax: 9,
    topHolders: [{ percentage: 20 }, { percentage: 15 }, { percentage: 10 }],
    honeypotStatus: 'caution',
    rugScore: 58,
    change24h: -67,
  },
  {
    id: '15',
    name: 'BSC Nova',
    symbol: 'BNOVA',
    chain: 'BSC',
    price: 0.00345,
    marketCap: 2145000,
    liquidity: 320000,
    volume24h: 650000,
    ageMinutes: 28,
    holders: 5678,
    txCount: 12789,
    contractAddress: '0xbcde...acbd',
    buyTax: 2,
    sellTax: 3,
    topHolders: [{ percentage: 10 }, { percentage: 7 }, { percentage: 5 }],
    honeypotStatus: 'safe',
    rugScore: 8,
    change24h: 389,
  },
  {
    id: '16',
    name: 'Ethereum Cipher',
    symbol: 'ECIPH',
    chain: 'Ethereum',
    price: 0.00521,
    marketCap: 2680000,
    liquidity: 420000,
    volume24h: 890000,
    ageMinutes: 41,
    holders: 7234,
    txCount: 16234,
    contractAddress: '0xcdef...bcde',
    buyTax: 1,
    sellTax: 2,
    topHolders: [{ percentage: 8 }, { percentage: 5 }, { percentage: 4 }],
    honeypotStatus: 'safe',
    rugScore: 5,
    change24h: 567,
  },
  {
    id: '17',
    name: 'Solana Wave',
    symbol: 'SWAVE',
    chain: 'Solana',
    price: 0.000678,
    marketCap: 1120000,
    liquidity: 145000,
    volume24h: 340000,
    ageMinutes: 112,
    holders: 2934,
    txCount: 6789,
    contractAddress: '0xdef0...cdef',
    buyTax: 2,
    sellTax: 3,
    topHolders: [{ percentage: 13 }, { percentage: 9 }, { percentage: 7 }],
    honeypotStatus: 'safe',
    rugScore: 9,
    change24h: 145,
  },
  {
    id: '18',
    name: 'Base Aurora',
    symbol: 'BAURO',
    chain: 'Base',
    price: 0.000456,
    marketCap: 780000,
    liquidity: 95000,
    volume24h: 180000,
    ageMinutes: 189,
    holders: 1678,
    txCount: 3456,
    contractAddress: '0xe101...def0',
    buyTax: 7,
    sellTax: 14,
    topHolders: [{ percentage: 32 }, { percentage: 25 }, { percentage: 18 }],
    honeypotStatus: 'honeypot',
    rugScore: 88,
    change24h: -123,
  },
  {
    id: '19',
    name: 'Arb Inferno',
    symbol: 'AINF',
    chain: 'Arbitrum',
    price: 0.001567,
    marketCap: 1680000,
    liquidity: 240000,
    volume24h: 480000,
    ageMinutes: 73,
    holders: 4123,
    txCount: 9234,
    contractAddress: '0xf212...e101',
    buyTax: 3,
    sellTax: 5,
    topHolders: [{ percentage: 14 }, { percentage: 10 }, { percentage: 8 }],
    honeypotStatus: 'safe',
    rugScore: 16,
    change24h: 201,
  },
  {
    id: '20',
    name: 'BSC Cipher',
    symbol: 'BCIPH',
    chain: 'BSC',
    price: 0.000812,
    marketCap: 1089000,
    liquidity: 155000,
    volume24h: 310000,
    ageMinutes: 95,
    holders: 3123,
    txCount: 7234,
    contractAddress: '0xg323...f212',
    buyTax: 4,
    sellTax: 6,
    topHolders: [{ percentage: 15 }, { percentage: 11 }, { percentage: 9 }],
    honeypotStatus: 'caution',
    rugScore: 44,
    change24h: 112,
  },
];

const chainColors: Record<Token['chain'], string> = {
  Ethereum: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  Solana: 'bg-green-500/20 text-green-300 border-green-500/30',
  Base: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Arbitrum: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  BSC: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
};

function formatNumber(num: number): string {
  if (num >= 1000000) return `$${(num / 1000000).toFixed(2)}M`;
  if (num >= 1000) return `$${(num / 1000).toFixed(2)}K`;
  return `$${num.toFixed(2)}`;
}

function formatAge(minutes: number): string {
  if (minutes < 60) return `${minutes}m ago`;
  if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
  return `${Math.floor(minutes / 1440)}d ago`;
}

function getRugScoreColor(score: number): string {
  if (score <= 20) return 'text-green-400';
  if (score <= 50) return 'text-yellow-400';
  return 'text-red-400';
}

function getRugScoreBgColor(score: number): string {
  if (score <= 20) return 'bg-green-500/20';
  if (score <= 50) return 'bg-yellow-500/20';
  return 'bg-red-500/20';
}

function getHoneypotIcon(status: Token['honeypotStatus']) {
  switch (status) {
    case 'safe':
      return <CheckCircle className="w-4 h-4 text-green-400" />;
    case 'caution':
      return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
    case 'honeypot':
      return <XCircle className="w-4 h-4 text-red-400" />;
  }
}

function getHoneypotLabel(status: Token['honeypotStatus']) {
  switch (status) {
    case 'safe':
      return 'Safe';
    case 'caution':
      return 'Caution';
    case 'honeypot':
      return 'Honeypot';
  }
}

export default function DexScreener() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChain, setSelectedChain] = useState<Token['chain'] | 'All'>('All');
  const [minLiquidity, setMinLiquidity] = useState(50000);
  const [minHolders, setMinHolders] = useState(1000);
  const [sortBy, setSortBy] = useState<'Volume' | 'Liquidity' | 'Newest' | 'MarketCap'>('Newest');
  const [expandedTokenId, setExpandedTokenId] = useState<string | null>(null);

  const filteredAndSortedTokens = useMemo(() => {
    let filtered = mockTokens.filter((token) => {
      const matchesSearch =
        token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        token.symbol.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesChain = selectedChain === 'All' || token.chain === selectedChain;
      const matchesLiquidity = token.liquidity >= minLiquidity;
      const matchesHolders = token.holders >= minHolders;

      return matchesSearch && matchesChain && matchesLiquidity && matchesHolders;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'Volume':
          return b.volume24h - a.volume24h;
        case 'Liquidity':
          return b.liquidity - a.liquidity;
        case 'Newest':
          return a.ageMinutes - b.ageMinutes;
        case 'MarketCap':
          return b.marketCap - a.marketCap;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedChain, minLiquidity, minHolders, sortBy]);

  const topMovers = useMemo(() => {
    return [...mockTokens]
      .sort((a, b) => b.change24h - a.change24h)
      .slice(0, 5);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "DEX Screener" },
          ]}
        />
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-8 h-8 text-yellow-400" aria-hidden="true" />
            <h1 className="text-4xl font-bold text-white">DEX Screener</h1>
          </div>
          <p className="text-slate-400">Real-time token scanner with honeypot detection and rug score analysis</p>
        </div>

        {/* Trending Section */}
        <div className="mb-8 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <h2 className="text-xl font-bold text-white">Top 5 Movers (24h)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {topMovers.map((token) => (
              <div key={token.id} className="p-4 bg-slate-900/50 rounded border border-slate-700 hover:border-slate-600 transition">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-white">{token.symbol}</span>
                  <span className={token.change24h >= 0 ? 'text-green-400' : 'text-red-400'}>
                    {token.change24h >= 0 ? '+' : ''}{token.change24h.toFixed(2)}%
                  </span>
                </div>
                <div className="text-sm text-slate-400">
                  <div>{formatNumber(token.marketCap)}</div>
                  <div className="text-xs">{token.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mb-6 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Filters</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-slate-500" aria-hidden="true" />
              <input
                type="text"
                placeholder="Search token name or symbol..."
                aria-label="Search tokens by name or symbol"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-900 text-white border border-slate-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            {/* Chain Filter */}
            <div>
              <label className="block text-sm text-slate-400 mb-2">Chain</label>
              <select
                value={selectedChain}
                onChange={(e) => setSelectedChain(e.target.value as Token['chain'] | 'All')}
                className="w-full px-4 py-2 bg-slate-900 text-white border border-slate-600 rounded focus:outline-none focus:border-blue-500 transition"
              >
                <option value="All">All Chains</option>
                <option value="Ethereum">Ethereum</option>
                <option value="Solana">Solana</option>
                <option value="Base">Base</option>
                <option value="Arbitrum">Arbitrum</option>
                <option value="BSC">BSC</option>
              </select>
            </div>

            {/* Min Liquidity */}
            <div>
              <label className="block text-sm text-slate-400 mb-2">
                Min Liquidity: {formatNumber(minLiquidity)}
              </label>
              <input
                type="range"
                min="0"
                max="500000"
                step="10000"
                value={minLiquidity}
                onChange={(e) => setMinLiquidity(Number(e.target.value))}
                aria-label={`Minimum liquidity: ${formatNumber(minLiquidity)}`}
                className="w-full"
              />
            </div>

            {/* Min Holders */}
            <div>
              <label className="block text-sm text-slate-400 mb-2">Min Holders: {minHolders}</label>
              <input
                type="range"
                min="100"
                max="10000"
                step="100"
                value={minHolders}
                onChange={(e) => setMinHolders(Number(e.target.value))}
                aria-label={`Minimum holders: ${minHolders}`}
                className="w-full"
              />
            </div>
          </div>

          {/* Sort By */}
          <div className="mt-4">
            <label className="block text-sm text-slate-400 mb-2">Sort By</label>
            <div className="flex gap-2 flex-wrap">
              {(['Volume', 'Liquidity', 'Newest', 'MarketCap'] as const).map((option) => (
                <button
                  key={option}
                  onClick={() => setSortBy(option)}
                  className={`px-4 py-2 rounded transition ${
                    sortBy === option
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-600'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tokens Table */}
        <div className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-900/80 border-b border-slate-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Token</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Chain</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Market Cap</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Liquidity</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Vol 24h</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Age</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Holders</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Rug Score</th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedTokens.length === 0 ? (
                  <tr>
                    <td colSpan={10} className="px-6 py-8 text-center text-slate-400">
                      No tokens found matching your filters
                    </td>
                  </tr>
                ) : (
                  filteredAndSortedTokens.map((token) => (
                    <React.Fragment key={token.id}>
                      <tr
                        onClick={() => setExpandedTokenId(expandedTokenId === token.id ? null : token.id)}
                        className="border-b border-slate-700 hover:bg-slate-700/30 cursor-pointer transition"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-xs font-bold text-white">
                                {token.symbol.substring(0, 2)}
                              </div>
                              <div>
                                <div className="font-semibold text-white">{token.name}</div>
                                <div className="text-sm text-slate-400">{token.symbol}</div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${chainColors[token.chain]}`}>
                            {token.chain}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-white">${token.price.toFixed(6)}</td>
                        <td className="px-6 py-4 text-white font-medium">{formatNumber(token.marketCap)}</td>
                        <td className="px-6 py-4 text-white">{formatNumber(token.liquidity)}</td>
                        <td className="px-6 py-4 text-white">{formatNumber(token.volume24h)}</td>
                        <td className="px-6 py-4 text-slate-300 text-sm">{formatAge(token.ageMinutes)}</td>
                        <td className="px-6 py-4 text-white">{token.holders.toLocaleString()}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {getHoneypotIcon(token.honeypotStatus)}
                            <span className="text-sm text-slate-300">{getHoneypotLabel(token.honeypotStatus)}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getRugScoreBgColor(token.rugScore)} ${getRugScoreColor(token.rugScore)}`}>
                            {token.rugScore}
                          </div>
                        </td>
                      </tr>

                      {/* Expanded Details Row */}
                      {expandedTokenId === token.id && (
                        <tr className="bg-slate-900/50 border-b border-slate-700">
                          <td colSpan={10} className="px-6 py-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {/* Left Column */}
                              <div>
                                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                                  <Shield className="w-4 h-4 text-blue-400" />
                                  Token Details
                                </h4>
                                <div className="space-y-3 text-sm">
                                  <div className="flex justify-between">
                                    <span className="text-slate-400">Contract Address:</span>
                                    <span className="text-white font-mono text-xs">{token.contractAddress}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-slate-400">Buy Tax:</span>
                                    <span className="text-white">{token.buyTax}%</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-slate-400">Sell Tax:</span>
                                    <span className="text-white">{token.sellTax}%</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-slate-400">TX Count:</span>
                                    <span className="text-white">{token.txCount.toLocaleString()}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-slate-400">24h Change:</span>
                                    <span className={token.change24h >= 0 ? 'text-green-400' : 'text-red-400'}>
                                      {token.change24h >= 0 ? '+' : ''}{token.change24h.toFixed(2)}%
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {/* Right Column */}
                              <div>
                                <h4 className="font-semibold text-white mb-4">Top Holders Distribution</h4>
                                <div className="space-y-2">
                                  {token.topHolders.map((holder, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                      <span className="text-slate-400 text-sm w-20">Holder {idx + 1}:</span>
                                      <div className="flex-1 bg-slate-700 rounded h-6 overflow-hidden">
                                        <div
                                          className="bg-gradient-to-r from-orange-500 to-red-500 h-full flex items-center px-2"
                                          style={{ width: `${holder.percentage}%` }}
                                        >
                                          <span className="text-xs font-bold text-white">{holder.percentage}%</span>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 flex items-center gap-2">
                              <ExternalLink className="w-4 h-4 text-slate-400" />
                              <a
                                href={
                                  token.chain === 'Ethereum' ? `https://etherscan.io/token/${token.contractAddress}` :
                                  token.chain === 'Solana' ? `https://solscan.io/token/${token.contractAddress}` :
                                  token.chain === 'Base' ? `https://basescan.org/token/${token.contractAddress}` :
                                  token.chain === 'Arbitrum' ? `https://arbiscan.io/token/${token.contractAddress}` :
                                  `https://bscscan.com/token/${token.contractAddress}`
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 text-sm transition"
                                onClick={(e) => e.stopPropagation()}
                              >
                                View on {token.chain === 'BSC' ? 'BscScan' : token.chain === 'Base' ? 'BaseScan' : token.chain === 'Arbitrum' ? 'ArbScan' : token.chain === 'Solana' ? 'Solscan' : 'Etherscan'}
                              </a>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-800/50 rounded border border-slate-700">
            <div className="text-slate-400 text-sm mb-1">Total Tokens</div>
            <div className="text-2xl font-bold text-white">{mockTokens.length}</div>
          </div>
          <div className="p-4 bg-slate-800/50 rounded border border-slate-700">
            <div className="text-slate-400 text-sm mb-1">Tokens Displayed</div>
            <div className="text-2xl font-bold text-white">{filteredAndSortedTokens.length}</div>
          </div>
          <div className="p-4 bg-slate-800/50 rounded border border-slate-700">
            <div className="text-slate-400 text-sm mb-1">Combined Market Cap</div>
            <div className="text-2xl font-bold text-white">
              {formatNumber(filteredAndSortedTokens.reduce((sum, t) => sum + t.marketCap, 0))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
