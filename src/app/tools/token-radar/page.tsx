'use client';

import { useState, useMemo } from 'react';
import type { Metadata } from 'next';
import {
  Rocket,
  TrendingUp,
  Clock,
  Shield,
  AlertTriangle,
  Search,
  Filter,
  Star,
  ExternalLink,
  Users,
  BarChart3,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Token Launch Radar | degen0x',
  description:
    'Track upcoming and recently launched tokens across multiple blockchains. Real-time token launch radar with risk analysis, social metrics, and audit status.',
  keywords: [
    'token launches',
    'crypto radar',
    'blockchain tokens',
    'DeFi',
    'token analysis',
  ],
};

interface Token {
  id: string;
  name: string;
  ticker: string;
  chain: 'Ethereum' | 'Solana' | 'Base' | 'Arbitrum' | 'BNB';
  launchDate: Date;
  category: 'DeFi' | 'GameFi' | 'AI' | 'Meme' | 'Infrastructure' | 'RWA';
  initialMarketCap: number;
  currentPriceChange: number;
  socialFollowers: number;
  auditStatus: 'verified' | 'unverified';
  riskScore: number;
  description: string;
}

const mockTokens: Token[] = [
  {
    id: '1',
    name: 'QuantumFlow',
    ticker: 'QF',
    chain: 'Ethereum',
    launchDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    category: 'AI',
    initialMarketCap: 5000000,
    currentPriceChange: 0,
    socialFollowers: 45000,
    auditStatus: 'verified',
    riskScore: 2,
    description: 'AI-powered trading assistant',
  },
  {
    id: '2',
    name: 'LunaGames',
    ticker: 'LG',
    chain: 'Solana',
    launchDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    category: 'GameFi',
    initialMarketCap: 3500000,
    currentPriceChange: 0,
    socialFollowers: 32000,
    auditStatus: 'verified',
    riskScore: 3,
    description: 'Web3 gaming platform',
  },
  {
    id: '3',
    name: 'DefiMax',
    ticker: 'DMX',
    chain: 'Arbitrum',
    launchDate: new Date(Date.now() - 8 * 60 * 60 * 1000),
    category: 'DeFi',
    initialMarketCap: 8000000,
    currentPriceChange: 24.5,
    socialFollowers: 67000,
    auditStatus: 'verified',
    riskScore: 2,
    description: 'Advanced yield farming protocol',
  },
  {
    id: '4',
    name: 'MemeRocket',
    ticker: 'MRKT',
    chain: 'Base',
    launchDate: new Date(Date.now() - 4 * 60 * 60 * 1000),
    category: 'Meme',
    initialMarketCap: 1200000,
    currentPriceChange: 156.3,
    socialFollowers: 89000,
    auditStatus: 'unverified',
    riskScore: 8,
    description: 'Community-driven meme token',
  },
  {
    id: '5',
    name: 'ChainSync',
    ticker: 'SYNC',
    chain: 'Solana',
    launchDate: new Date(Date.now() - 18 * 60 * 60 * 1000),
    category: 'Infrastructure',
    initialMarketCap: 6000000,
    currentPriceChange: 18.2,
    socialFollowers: 52000,
    auditStatus: 'verified',
    riskScore: 3,
    description: 'Cross-chain bridge protocol',
  },
  {
    id: '6',
    name: 'RealEstate.io',
    ticker: 'REAL',
    chain: 'Ethereum',
    launchDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    category: 'RWA',
    initialMarketCap: 12000000,
    currentPriceChange: 8.5,
    socialFollowers: 41000,
    auditStatus: 'verified',
    riskScore: 2,
    description: 'Tokenized real estate',
  },
  {
    id: '7',
    name: 'NeuralNet',
    ticker: 'NNAI',
    chain: 'Base',
    launchDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    category: 'AI',
    initialMarketCap: 7500000,
    currentPriceChange: 0,
    socialFollowers: 38000,
    auditStatus: 'verified',
    riskScore: 3,
    description: 'Decentralized AI compute network',
  },
  {
    id: '8',
    name: 'DuckPond',
    ticker: 'DUCK',
    chain: 'Solana',
    launchDate: new Date(Date.now() - 6 * 60 * 60 * 1000),
    category: 'Meme',
    initialMarketCap: 800000,
    currentPriceChange: 234.7,
    socialFollowers: 123000,
    auditStatus: 'unverified',
    riskScore: 9,
    description: 'The friendliest meme on Solana',
  },
  {
    id: '9',
    name: 'VaultPro',
    ticker: 'VAULT',
    chain: 'Arbitrum',
    launchDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    category: 'DeFi',
    initialMarketCap: 4500000,
    currentPriceChange: 0,
    socialFollowers: 29000,
    auditStatus: 'verified',
    riskScore: 2,
    description: 'Non-custodial asset vault',
  },
  {
    id: '10',
    name: 'MetaWorld',
    ticker: 'MWLD',
    chain: 'BNB',
    launchDate: new Date(Date.now() - 12 * 60 * 60 * 1000),
    category: 'GameFi',
    initialMarketCap: 5500000,
    currentPriceChange: 42.1,
    socialFollowers: 76000,
    auditStatus: 'verified',
    riskScore: 4,
    description: 'Immersive metaverse experience',
  },
  {
    id: '11',
    name: 'DataChain',
    ticker: 'DATA',
    chain: 'Ethereum',
    launchDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
    category: 'Infrastructure',
    initialMarketCap: 9000000,
    currentPriceChange: 0,
    socialFollowers: 58000,
    auditStatus: 'verified',
    riskScore: 2,
    description: 'Decentralized data marketplace',
  },
  {
    id: '12',
    name: 'GoldToken',
    ticker: 'GOLD',
    chain: 'Base',
    launchDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    category: 'RWA',
    initialMarketCap: 15000000,
    currentPriceChange: 3.2,
    socialFollowers: 35000,
    auditStatus: 'verified',
    riskScore: 1,
    description: 'Gold-backed digital asset',
  },
  {
    id: '13',
    name: 'DogeMoon',
    ticker: 'DOGE2',
    chain: 'Solana',
    launchDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    category: 'Meme',
    initialMarketCap: 950000,
    currentPriceChange: 189.4,
    socialFollowers: 105000,
    auditStatus: 'unverified',
    riskScore: 7,
    description: 'Legendary meme reborn',
  },
  {
    id: '14',
    name: 'SwapLab',
    ticker: 'SWAP',
    chain: 'Arbitrum',
    launchDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
    category: 'DeFi',
    initialMarketCap: 3800000,
    currentPriceChange: 0,
    socialFollowers: 44000,
    auditStatus: 'verified',
    riskScore: 2,
    description: 'Advanced DEX platform',
  },
  {
    id: '15',
    name: 'CyberPunk',
    ticker: 'CYBER',
    chain: 'BNB',
    launchDate: new Date(Date.now() - 10 * 60 * 60 * 1000),
    category: 'Meme',
    initialMarketCap: 1100000,
    currentPriceChange: 312.8,
    socialFollowers: 94000,
    auditStatus: 'unverified',
    riskScore: 8,
    description: 'Cyberpunk-themed community token',
  },
  {
    id: '16',
    name: 'BrainChip',
    ticker: 'BRAIN',
    chain: 'Ethereum',
    launchDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    category: 'AI',
    initialMarketCap: 6500000,
    currentPriceChange: 31.5,
    socialFollowers: 48000,
    auditStatus: 'verified',
    riskScore: 3,
    description: 'Neural network infrastructure',
  },
  {
    id: '17',
    name: 'LiquidGold',
    ticker: 'LGD',
    chain: 'Base',
    launchDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    category: 'RWA',
    initialMarketCap: 10500000,
    currentPriceChange: 0,
    socialFollowers: 32000,
    auditStatus: 'verified',
    riskScore: 2,
    description: 'Liquid precious metals token',
  },
  {
    id: '18',
    name: 'QuestNFT',
    ticker: 'QNFT',
    chain: 'Solana',
    launchDate: new Date(Date.now() - 20 * 60 * 60 * 1000),
    category: 'GameFi',
    initialMarketCap: 4200000,
    currentPriceChange: 67.3,
    socialFollowers: 61000,
    auditStatus: 'verified',
    riskScore: 4,
    description: 'Quest-based gaming NFT platform',
  },
  {
    id: '19',
    name: 'ByteFlow',
    ticker: 'BYTE',
    chain: 'Arbitrum',
    launchDate: new Date(Date.now() - 14 * 60 * 60 * 1000),
    category: 'Infrastructure',
    initialMarketCap: 5200000,
    currentPriceChange: 22.1,
    socialFollowers: 39000,
    auditStatus: 'verified',
    riskScore: 3,
    description: 'Data streaming protocol',
  },
  {
    id: '20',
    name: 'PizzaSlice',
    ticker: 'PIZZA',
    chain: 'BNB',
    launchDate: new Date(Date.now() - 7 * 60 * 60 * 1000),
    category: 'Meme',
    initialMarketCap: 650000,
    currentPriceChange: 445.2,
    socialFollowers: 112000,
    auditStatus: 'unverified',
    riskScore: 9,
    description: 'The most delicious meme token',
  },
  {
    id: '21',
    name: 'ProtocolX',
    ticker: 'PTX',
    chain: 'Ethereum',
    launchDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    category: 'DeFi',
    initialMarketCap: 11000000,
    currentPriceChange: 15.7,
    socialFollowers: 72000,
    auditStatus: 'verified',
    riskScore: 2,
    description: 'Enterprise DeFi protocol',
  },
];

type TabType = 'launching' | 'launched' | 'trending';
type SortType = 'date' | 'marketcap' | 'social' | 'risk';

export default function TokenRadarPage() {
  const [activeTab, setActiveTab] = useState<TabType>('trending');
  const [selectedChain, setSelectedChain] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [riskLevel, setRiskLevel] = useState<string>('All');
  const [sortBy, setSortBy] = useState<SortType>('date');
  const [searchQuery, setSearchQuery] = useState('');

  const chains = ['All', 'Ethereum', 'Solana', 'Base', 'Arbitrum', 'BNB'];
  const categories = ['All', 'DeFi', 'GameFi', 'AI', 'Meme', 'Infrastructure', 'RWA'];
  const riskLevels = ['All', 'Low (1-3)', 'Medium (4-6)', 'High (7-10)'];

  const filteredTokens = useMemo(() => {
    let filtered = mockTokens.filter((token) => {
      const now = Date.now();
      const timeDiff = token.launchDate.getTime() - now;

      if (activeTab === 'launching') {
        return timeDiff > 0 && timeDiff <= 7 * 24 * 60 * 60 * 1000;
      } else if (activeTab === 'launched') {
        return timeDiff <= 0 && timeDiff >= -24 * 60 * 60 * 1000;
      } else {
        return timeDiff <= 0 && timeDiff >= -7 * 24 * 60 * 60 * 1000;
      }
    });

    if (selectedChain !== 'All') {
      filtered = filtered.filter((t) => t.chain === selectedChain);
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((t) => t.category === selectedCategory);
    }

    if (riskLevel !== 'All') {
      const [min, max] = riskLevel.includes('Low')
        ? [1, 3]
        : riskLevel.includes('Medium')
          ? [4, 6]
          : [7, 10];
      filtered = filtered.filter((t) => t.riskScore >= min && t.riskScore <= max);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (t) =>
          t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.ticker.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    filtered.sort((a, b) => {
      if (sortBy === 'date') return a.launchDate.getTime() - b.launchDate.getTime();
      if (sortBy === 'marketcap') return b.initialMarketCap - a.initialMarketCap;
      if (sortBy === 'social') return b.socialFollowers - a.socialFollowers;
      if (sortBy === 'risk') return a.riskScore - b.riskScore;
      return 0;
    });

    return filtered;
  }, [activeTab, selectedChain, selectedCategory, riskLevel, searchQuery, sortBy]);

  const trendingTokens = mockTokens
    .filter((t) => t.launchDate.getTime() <= Date.now() && t.launchDate.getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000)
    .sort((a, b) => b.currentPriceChange - a.currentPriceChange)
    .slice(0, 3);

  const statsData = {
    totalLaunches: mockTokens.filter((t) => t.launchDate.getTime() <= Date.now() && t.launchDate.getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000).length,
    avgMarketCap: Math.round(
      mockTokens.reduce((sum, t) => sum + t.initialMarketCap, 0) / mockTokens.length / 1000000
    ),
    topChain: 'Solana',
    topCategory: 'Meme',
  };

  const getRiskColor = (score: number) => {
    if (score <= 2) return 'var(--green)';
    if (score <= 4) return 'var(--blue)';
    if (score <= 6) return 'var(--yellow)';
    return 'var(--red)';
  };

  const formatDate = (date: Date) => {
    const now = Date.now();
    const diff = date.getTime() - now;

    if (diff > 0) {
      const days = Math.floor(diff / (24 * 60 * 60 * 1000));
      const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      if (days > 0) return `${days}d ${hours}h`;
      return `${hours}h`;
    } else {
      const absDiff = -diff;
      const days = Math.floor(absDiff / (24 * 60 * 60 * 1000));
      const hours = Math.floor((absDiff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      if (days > 0) return `${days}d ${hours}h ago`;
      return `${hours}h ago`;
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }} className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Rocket size={32} style={{ color: 'var(--purple)' }} />
            <h1 className="text-4xl font-bold">Token Launch Radar</h1>
          </div>
          <p style={{ color: 'var(--text2)' }} className="text-lg">
            Track upcoming and trending token launches across all major chains
          </p>
        </div>

        {trendingTokens.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Zap size={20} style={{ color: 'var(--yellow)' }} />
              <h2 className="text-2xl font-bold">Hot Launches</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {trendingTokens.map((token, idx) => (
                <div
                  key={token.id}
                  style={{
                    backgroundColor: 'var(--surface)',
                    borderColor: 'var(--border)',
                  }}
                  className="border rounded-lg p-4 hover:scale-105 transition-transform"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <div
                          style={{ backgroundColor: 'var(--blue)', opacity: 0.2 }}
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                        >
                          <span className="font-bold text-sm">{token.ticker.slice(0, 2)}</span>
                        </div>
                        <div>
                          <p className="font-bold">{token.name}</p>
                          <p style={{ color: 'var(--text2)' }} className="text-sm">
                            {token.ticker}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 justify-end">
                        <Star size={16} style={{ color: 'var(--yellow)' }} />
                        <span className="text-sm font-bold"># {idx + 1}</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ color: 'var(--green)' }} className="text-lg font-bold">
                    +{token.currentPriceChange.toFixed(1)}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div
          style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
          className="border rounded-lg p-4 mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p style={{ color: 'var(--text2)' }} className="text-sm mb-1">
                Launches This Week
              </p>
              <p className="text-2xl font-bold">{statsData.totalLaunches}</p>
            </div>
            <div>
              <p style={{ color: 'var(--text2)' }} className="text-sm mb-1">
                Avg Initial MCap
              </p>
              <p className="text-2xl font-bold">${statsData.avgMarketCap}M</p>
            </div>
            <div>
              <p style={{ color: 'var(--text2)' }} className="text-sm mb-1">
                Most Popular Chain
              </p>
              <p className="text-2xl font-bold">{statsData.topChain}</p>
            </div>
            <div>
              <p style={{ color: 'var(--text2)' }} className="text-sm mb-1">
                Top Category
              </p>
              <p className="text-2xl font-bold">{statsData.topCategory}</p>
            </div>
          </div>
        </div>

        <div className="mb-6 space-y-4">
          <div className="flex gap-2 items-center relative">
            <Search size={18} style={{ color: 'var(--text2)', position: 'absolute', left: 12 }} />
            <input
              type="text"
              placeholder="Search tokens by name or ticker..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)',
                color: 'var(--text)',
                paddingLeft: 40,
              }}
              className="w-full border rounded-lg p-2 outline-none focus:border-opacity-100"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Filter size={18} style={{ color: 'var(--text2)' }} />
            <select
              value={selectedChain}
              onChange={(e) => setSelectedChain(e.target.value)}
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)',
                color: 'var(--text)',
              }}
              className="border rounded-lg px-3 py-1 outline-none text-sm"
            >
              {chains.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)',
                color: 'var(--text)',
              }}
              className="border rounded-lg px-3 py-1 outline-none text-sm"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select
              value={riskLevel}
              onChange={(e) => setRiskLevel(e.target.value)}
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)',
                color: 'var(--text)',
              }}
              className="border rounded-lg px-3 py-1 outline-none text-sm"
            >
              {riskLevels.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortType)}
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)',
                color: 'var(--text)',
              }}
              className="border rounded-lg px-3 py-1 outline-none text-sm ml-auto"
            >
              <option value="date">Sort by Date</option>
              <option value="marketcap">Sort by Market Cap</option>
              <option value="social">Sort by Social</option>
              <option value="risk">Sort by Risk</option>
            </select>
          </div>
        </div>

        <div
          style={{ borderColor: 'var(--border)' }}
          className="border-b mb-6 flex gap-6"
        >
          {[
            { id: 'launching', label: 'Launching Soon' },
            { id: 'launched', label: 'Just Launched (24h)' },
            { id: 'trending', label: 'Trending Launches (7d)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              style={{
                color: activeTab === tab.id ? 'var(--blue)' : 'var(--text2)',
                borderBottomColor: activeTab === tab.id ? 'var(--blue)' : 'transparent',
              }}
              className="pb-3 border-b-2 font-semibold transition-colors"
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filteredTokens.length > 0 ? (
            filteredTokens.map((token) => (
              <div
                key={token.id}
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border)',
                }}
                className="border rounded-lg p-4 hover:border-opacity-100 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div
                      style={{ backgroundColor: 'var(--blue)', opacity: 0.1 }}
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    >
                      <span className="font-bold">{token.ticker.slice(0, 2)}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg">{token.name}</h3>
                        <span
                          style={{ color: 'var(--text2)', borderColor: 'var(--border)' }}
                          className="border rounded px-2 py-1 text-xs"
                        >
                          {token.ticker}
                        </span>
                      </div>
                      <p style={{ color: 'var(--text2)' }} className="text-sm mb-2">
                        {token.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span
                          style={{ backgroundColor: 'var(--blue)', color: 'var(--bg)' }}
                          className="rounded-full px-3 py-1 text-xs font-semibold"
                        >
                          {token.chain}
                        </span>
                        <span
                          style={{
                            backgroundColor:
                              token.category === 'DeFi'
                                ? 'rgb(63, 185, 80, 0.2)'
                                : token.category === 'GameFi'
                                  ? 'rgb(88, 166, 255, 0.2)'
                                  : token.category === 'AI'
                                    ? 'rgb(188, 140, 255, 0.2)'
                                    : 'rgb(210, 153, 34, 0.2)',
                            color: token.category === 'DeFi' ? 'var(--green)' : token.category === 'GameFi' ? 'var(--blue)' : token.category === 'AI' ? 'var(--purple)' : 'var(--yellow)',
                          }}
                          className="rounded-full px-3 py-1 text-xs font-semibold"
                        >
                          {token.category}
                        </span>
                        {token.auditStatus === 'verified' && (
                          <span
                            style={{
                              backgroundColor: 'rgb(63, 185, 80, 0.2)',
                              color: 'var(--green)',
                            }}
                            className="rounded-full px-3 py-1 text-xs font-semibold flex items-center gap-1"
                          >
                            <Shield size={12} />
                            Verified
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 md:items-center">
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p style={{ color: 'var(--text2)' }} className="text-xs mb-1">
                          {token.launchDate.getTime() > Date.now() ? 'Launches in' : 'Launched'}
                        </p>
                        <div className="flex items-center gap-1">
                          <Clock size={16} style={{ color: 'var(--text2)' }} />
                          <p className="font-semibold text-sm">{formatDate(token.launchDate)}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <p style={{ color: 'var(--text2)' }} className="text-xs mb-1">
                          Social
                        </p>
                        <div className="flex items-center gap-1">
                          <Users size={16} style={{ color: 'var(--text2)' }} />
                          <p className="font-semibold text-sm">
                            {(token.socialFollowers / 1000).toFixed(0)}K
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <p style={{ color: 'var(--text2)' }} className="text-xs mb-1">
                          Price Change
                        </p>
                        <p
                          style={{
                            color: token.currentPriceChange > 0 ? 'var(--green)' : token.currentPriceChange < 0 ? 'var(--red)' : 'var(--text2)',
                          }}
                          className="font-semibold text-sm"
                        >
                          {token.currentPriceChange > 0 ? '+' : ''}
                          {token.currentPriceChange.toFixed(1)}%
                        </p>
                      </div>

                      <div className="text-right">
                        <p style={{ color: 'var(--text2)' }} className="text-xs mb-1">
                          Risk Score
                        </p>
                        <div className="flex items-center gap-1 justify-end">
                          <AlertTriangle size={16} style={{ color: getRiskColor(token.riskScore) }} />
                          <p
                            style={{ color: getRiskColor(token.riskScore) }}
                            className="font-bold text-sm"
                          >
                            {token.riskScore}/10
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      style={{ backgroundColor: 'var(--blue)', color: 'var(--bg)' }}
                      className="rounded-lg px-4 py-2 font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink size={16} />
                      <span className="hidden sm:inline">View</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)',
                color: 'var(--text2)',
              }}
              className="border rounded-lg p-8 text-center"
            >
              <p className="text-lg">No tokens found matching your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
