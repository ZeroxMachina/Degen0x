'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Search,
  Filter,
  RefreshCw,
  Clock,
  Star,
  AlertCircle,
} from 'lucide-react';

// ── Types ────────────────────────────────────────────────────────────────────
interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  category: 'Bitcoin' | 'Ethereum' | 'DeFi' | 'NFTs' | 'Regulation' | 'Layer 2' | 'Solana' | 'Markets';
  sentiment: 'bullish' | 'bearish' | 'neutral';
  impactScore: number; // 1-5
  timestamp: string; // relative time like "2h ago"
  isBreaking: boolean;
}

// ── Mock News Database ────────────────────────────────────────────────────────
const MOCK_NEWS_DATA: NewsItem[] = [
  {
    id: '1',
    title: 'Bitcoin Surges Past $70K on Institutional Adoption Wave',
    summary: 'Major institutions continue to increase BTC holdings as mainstream adoption accelerates. Market analysts predict sustained upward momentum.',
    source: 'CoinDesk',
    category: 'Bitcoin',
    sentiment: 'bullish',
    impactScore: 5,
    timestamp: '15m ago',
    isBreaking: true,
  },
  {
    id: '2',
    title: 'Ethereum Developers Propose Major Scalability Upgrade',
    summary: 'Core Ethereum developers unveil plans for Dencun upgrade focusing on blob storage optimization. Expected to improve L2 throughput by 100x.',
    source: 'The Block',
    category: 'Ethereum',
    sentiment: 'bullish',
    impactScore: 5,
    timestamp: '32m ago',
    isBreaking: true,
  },
  {
    id: '3',
    title: 'SEC Delays Solana ETF Decision Amid Regulatory Uncertainty',
    summary: 'The Securities and Exchange Commission postpones ruling on Solana spot ETF application. Market remains cautious on approval timeline.',
    source: 'Decrypt',
    category: 'Regulation',
    sentiment: 'bearish',
    impactScore: 4,
    timestamp: '1h ago',
    isBreaking: false,
  },
  {
    id: '4',
    title: 'DeFi TVL Reaches All-Time High of $200B',
    summary: 'Total value locked across DeFi protocols hits historic milestone. Aave, Curve, and Lido lead the gains with strong ecosystem growth.',
    source: 'CoinTelegraph',
    category: 'DeFi',
    sentiment: 'bullish',
    impactScore: 5,
    timestamp: '2h ago',
    isBreaking: true,
  },
  {
    id: '5',
    title: 'NFT Market Shows Signs of Recovery in Q1',
    summary: 'Trading volume surges 45% month-over-month as top collections gain renewed attention. Digital art and gaming NFTs lead the recovery.',
    source: 'The Block',
    category: 'NFTs',
    sentiment: 'bullish',
    impactScore: 3,
    timestamp: '2h ago',
    isBreaking: false,
  },
  {
    id: '6',
    title: 'Arbitrum Network Reaches 500M Transactions Milestone',
    summary: 'Layer 2 scaling solution celebrates massive adoption. Network continues to outpace other L2 solutions with lower fees and faster transactions.',
    source: 'CoinDesk',
    category: 'Layer 2',
    sentiment: 'bullish',
    impactScore: 4,
    timestamp: '3h ago',
    isBreaking: false,
  },
  {
    id: '7',
    title: 'Bitcoin Mining Difficulty Hits New Record',
    summary: 'Network difficulty increases 10% in latest adjustment. Miners remain profitable despite increased competition and energy costs.',
    source: 'Decrypt',
    category: 'Bitcoin',
    sentiment: 'neutral',
    impactScore: 3,
    timestamp: '3h ago',
    isBreaking: false,
  },
  {
    id: '8',
    title: 'EU Crypto Regulations Framework Now Official',
    summary: 'Markets in Crypto-Assets Regulation (MiCA) officially becomes law. Global crypto exchanges begin compliance preparations.',
    source: 'CoinTelegraph',
    category: 'Regulation',
    sentiment: 'neutral',
    impactScore: 4,
    timestamp: '4h ago',
    isBreaking: false,
  },
  {
    id: '9',
    title: 'Solana Validator Network Expands to 3,000+ Nodes',
    summary: 'Decentralization milestone reached as community validators increase participation. Network security and resilience continue to strengthen.',
    source: 'The Block',
    category: 'Solana',
    sentiment: 'bullish',
    impactScore: 4,
    timestamp: '4h ago',
    isBreaking: false,
  },
  {
    id: '10',
    title: 'Major Crypto Exchange Suffers Temporary Outage',
    summary: 'Platform experiences 30-minute downtime affecting spot trading. Company compensates affected traders. Investigation ongoing.',
    source: 'Decrypt',
    category: 'Markets',
    sentiment: 'bearish',
    impactScore: 3,
    timestamp: '5h ago',
    isBreaking: false,
  },
  {
    id: '11',
    title: 'Lightning Network Payment Channels Exceed 100,000',
    summary: 'Bitcoin layer 2 solution gains momentum with record channel count. Micropayment ecosystem shows rapid growth and adoption.',
    source: 'CoinDesk',
    category: 'Bitcoin',
    sentiment: 'bullish',
    impactScore: 3,
    timestamp: '5h ago',
    isBreaking: false,
  },
  {
    id: '12',
    title: 'Smart Contract Audit Reveals Critical DeFi Vulnerability',
    summary: 'Major lending protocol fixes security flaw affecting $500M in assets. No funds lost. Team recommends immediate updates.',
    source: 'The Block',
    category: 'DeFi',
    sentiment: 'bearish',
    impactScore: 4,
    timestamp: '6h ago',
    isBreaking: false,
  },
  {
    id: '13',
    title: 'Ethereum Staking APY Increases Amid Network Expansion',
    summary: 'Validators now earning 4.2% APY as network traffic increases. More attractive returns draw additional capital to staking.',
    source: 'CoinTelegraph',
    category: 'Ethereum',
    sentiment: 'bullish',
    impactScore: 3,
    timestamp: '6h ago',
    isBreaking: false,
  },
  {
    id: '14',
    title: 'Binance Delists Low-Volume Altcoins',
    summary: 'Major exchange removes 50+ trading pairs to improve platform efficiency. Affected tokens show mixed market reactions.',
    source: 'Decrypt',
    category: 'Markets',
    sentiment: 'bearish',
    impactScore: 2,
    timestamp: '7h ago',
    isBreaking: false,
  },
  {
    id: '15',
    title: 'Optimism Foundation Grants $10M for App Development',
    summary: 'Layer 2 network invests in ecosystem growth through developer grants. Over 200 projects now building on Optimism.',
    source: 'CoinDesk',
    category: 'Layer 2',
    sentiment: 'bullish',
    impactScore: 4,
    timestamp: '7h ago',
    isBreaking: false,
  },
  {
    id: '16',
    title: 'OpenAI Partners with Crypto Platform on AI Integration',
    summary: 'Partnership aims to bring advanced AI models to blockchain. Potential use cases include smart contract auditing and trading.',
    source: 'The Block',
    category: 'Markets',
    sentiment: 'bullish',
    impactScore: 4,
    timestamp: '8h ago',
    isBreaking: false,
  },
  {
    id: '17',
    title: 'Polygon Launches New Gaming Initiative with $100M Fund',
    summary: 'Layer 2 scaling solution commits major resources to gaming ecosystem. Targets next generation of blockchain gaming experiences.',
    source: 'CoinTelegraph',
    category: 'Layer 2',
    sentiment: 'bullish',
    impactScore: 3,
    timestamp: '8h ago',
    isBreaking: false,
  },
  {
    id: '18',
    title: 'Bitcoin Hash Rate Reaches 600 Exahashes Per Second',
    summary: 'Network security reaches new heights with record computational power. Energy efficiency improvements noted across major mining pools.',
    source: 'Decrypt',
    category: 'Bitcoin',
    sentiment: 'bullish',
    impactScore: 3,
    timestamp: '9h ago',
    isBreaking: false,
  },
  {
    id: '19',
    title: 'Crypto Market Cap Briefly Tops $3 Trillion',
    summary: 'Digital assets surge on positive macroeconomic outlook. Bitcoin and Ethereum lead rally with strong institutional demand.',
    source: 'CoinDesk',
    category: 'Markets',
    sentiment: 'bullish',
    impactScore: 5,
    timestamp: '10h ago',
    isBreaking: false,
  },
  {
    id: '20',
    title: 'NFT Marketplace Sees Gaming Item Explosion',
    summary: 'In-game assets trading reaches $50M daily volume. Top game franchises announce blockchain partnerships. Play-to-earn gains traction.',
    source: 'The Block',
    category: 'NFTs',
    sentiment: 'bullish',
    impactScore: 4,
    timestamp: '10h ago',
    isBreaking: false,
  },
  {
    id: '21',
    title: 'Solana Network Performs Under Network Load Test',
    summary: 'Latest stress test demonstrates 65,000 TPS capability. Network stability maintained through peak transaction volume.',
    source: 'CoinTelegraph',
    category: 'Solana',
    sentiment: 'bullish',
    impactScore: 3,
    timestamp: '11h ago',
    isBreaking: false,
  },
  {
    id: '22',
    title: 'FED Rate Pause Boosts Risk-On Sentiment',
    summary: 'Federal Reserve holds rates steady. Crypto markets rally on reduced inflation concerns. Bitcoin and altcoins gain together.',
    source: 'Decrypt',
    category: 'Markets',
    sentiment: 'bullish',
    impactScore: 4,
    timestamp: '12h ago',
    isBreaking: false,
  },
];

const CATEGORIES: Array<'All' | NewsItem['category']> = [
  'All',
  'Bitcoin',
  'Ethereum',
  'DeFi',
  'NFTs',
  'Regulation',
  'Layer 2',
  'Solana',
  'Markets',
];

const SENTIMENT_OPTIONS: Array<'All' | NewsItem['sentiment']> = ['All', 'bullish', 'bearish', 'neutral'];

const CATEGORY_COLORS: Record<NewsItem['category'], string> = {
  Bitcoin: '#f7931a',
  Ethereum: '#627eea',
  DeFi: '#06b6d4',
  NFTs: '#8b5cf6',
  Regulation: '#ef4444',
  'Layer 2': '#10b981',
  Solana: '#00d4aa',
  Markets: '#f59e0b',
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function CryptoNewsAggregator() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | NewsItem['category']>('All');
  const [selectedSentiment, setSelectedSentiment] = useState<'All' | NewsItem['sentiment']>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'impact' | 'sentiment'>('newest');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [refreshCountdown, setRefreshCountdown] = useState(30);
  const [newsData, setNewsData] = useState<NewsItem[]>(MOCK_NEWS_DATA);

  // ── Auto-refresh simulation ────────────────────────────────────────────────
  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshCountdown((prev) => {
        if (prev <= 1) {
          // Shuffle and update news items
          const shuffled = [...newsData].sort(() => Math.random() - 0.5);
          setNewsData(shuffled);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [newsData]);

  // ── Filtered and sorted news ───────────────────────────────────────────────
  const filteredNews = useMemo(() => {
    let filtered = newsData;

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    // Sentiment filter
    if (selectedSentiment !== 'All') {
      filtered = filtered.filter((item) => item.sentiment === selectedSentiment);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.summary.toLowerCase().includes(query) ||
          item.source.toLowerCase().includes(query)
      );
    }

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'newest') {
        // Parse relative time to get rough ordering
        const timeA = parseInt(a.timestamp);
        const timeB = parseInt(b.timestamp);
        return timeB - timeA;
      } else if (sortBy === 'impact') {
        return b.impactScore - a.impactScore;
      } else if (sortBy === 'sentiment') {
        const sentimentOrder = { bullish: 3, neutral: 2, bearish: 1 };
        return sentimentOrder[b.sentiment] - sentimentOrder[a.sentiment];
      }
      return 0;
    });

    return filtered;
  }, [newsData, selectedCategory, selectedSentiment, searchQuery, sortBy]);

  // ── Sentiment distribution ─────────────────────────────────────────────────
  const sentimentDistribution = useMemo(() => {
    const bullish = filteredNews.filter((item) => item.sentiment === 'bullish').length;
    const bearish = filteredNews.filter((item) => item.sentiment === 'bearish').length;
    const neutral = filteredNews.filter((item) => item.sentiment === 'neutral').length;
    const total = bullish + bearish + neutral;

    return {
      bullish: total > 0 ? Math.round((bullish / total) * 100) : 0,
      neutral: total > 0 ? Math.round((neutral / total) * 100) : 0,
      bearish: total > 0 ? Math.round((bearish / total) * 100) : 0,
    };
  }, [filteredNews]);

  // ── Sentiment icon component ───────────────────────────────────────────────
  const SentimentIcon = ({ sentiment }: { sentiment: NewsItem['sentiment'] }) => {
    if (sentiment === 'bullish') {
      return <TrendingUp className="w-4 h-4 text-green-500" />;
    } else if (sentiment === 'bearish') {
      return <TrendingDown className="w-4 h-4 text-red-500" />;
    }
    return <Minus className="w-4 h-4 text-gray-500" />;
  };

  // ── Impact score renderer ──────────────────────────────────────────────────
  const ImpactDots = ({ score }: { score: number }) => {
    return (
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
              i < score ? 'bg-yellow-400' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full space-y-6">
      {/* ── Header ────────────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-[var(--color-text)]">Live Crypto News</h1>
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            <span>Refreshing in {refreshCountdown}s</span>
          </div>
        </div>

        {/* ── Sentiment Distribution Bar ────────────────────────────────── */}
        <div className="glass rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-[var(--color-text-secondary)]">
              Sentiment Distribution
            </span>
            <span className="text-xs text-[var(--color-text-secondary)]">
              {filteredNews.length} items
            </span>
          </div>
          <div className="flex gap-1 h-2 rounded-full overflow-hidden bg-gray-700">
            {sentimentDistribution.bullish > 0 && (
              <div
                className="bg-green-500 transition-all duration-300"
                style={{ width: `${sentimentDistribution.bullish}%` }}
              />
            )}
            {sentimentDistribution.neutral > 0 && (
              <div
                className="bg-gray-500 transition-all duration-300"
                style={{ width: `${sentimentDistribution.neutral}%` }}
              />
            )}
            {sentimentDistribution.bearish > 0 && (
              <div
                className="bg-red-500 transition-all duration-300"
                style={{ width: `${sentimentDistribution.bearish}%` }}
              />
            )}
          </div>
          <div className="flex gap-4 mt-3 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[var(--color-text-secondary)]">
                Bullish: {sentimentDistribution.bullish}%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-500" />
              <span className="text-[var(--color-text-secondary)]">
                Neutral: {sentimentDistribution.neutral}%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-[var(--color-text-secondary)]">
                Bearish: {sentimentDistribution.bearish}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Search and Filters ────────────────────────────────────────────── */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-secondary)]" />
          <input
            type="text"
            placeholder="Search news by title, source, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-lg py-3 pl-12 pr-4 text-[var(--color-text)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--glass-border-hover)] transition-colors"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg transition-all text-sm font-medium ${
                selectedCategory === cat
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'glass text-[var(--color-text)] hover:bg-[var(--glass-bg-hover)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sentiment and Sort Filters */}
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[var(--color-text-secondary)]" />
            <span className="text-sm text-[var(--color-text-secondary)]">Sentiment:</span>
            <div className="flex gap-2">
              {SENTIMENT_OPTIONS.map((sent) => (
                <button
                  key={sent}
                  onClick={() => setSelectedSentiment(sent)}
                  className={`px-3 py-1.5 rounded-lg transition-all text-xs font-medium ${
                    selectedSentiment === sent
                      ? sent === 'bullish'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                        : sent === 'bearish'
                          ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                          : 'bg-gray-500/20 text-gray-400 border border-gray-500/50'
                      : 'glass text-[var(--color-text)] hover:bg-[var(--glass-bg-hover)]'
                  }`}
                >
                  {sent.charAt(0).toUpperCase() + sent.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <span className="text-sm text-[var(--color-text-secondary)]">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'newest' | 'impact' | 'sentiment')}
              className="glass px-3 py-1.5 rounded-lg text-xs text-[var(--color-text)] border border-[var(--glass-border)] focus:outline-none focus:border-[var(--glass-border-hover)] transition-colors"
            >
              <option value="newest">Newest</option>
              <option value="impact">Impact Score</option>
              <option value="sentiment">Sentiment</option>
            </select>
          </div>
        </div>
      </div>

      {/* ── News Feed ─────────────────────────────────────────────────────── */}
      {filteredNews.length > 0 ? (
        <div className="grid gap-4">
          {filteredNews.map((item) => (
            <div
              key={item.id}
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
              className={`glass rounded-xl p-5 border border-[var(--glass-border)] hover:border-[var(--glass-border-hover)] transition-all cursor-pointer hover:shadow-lg ${
                item.isBreaking ? 'ring-1 ring-red-500/50 bg-red-500/5' : ''
              }`}
            >
              {/* Breaking News Badge */}
              {item.isBreaking && (
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1.5 bg-red-500/20 text-red-400 px-3 py-1.5 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-semibold">BREAKING</span>
                  </div>
                </div>
              )}

              {/* Title and Metadata */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[var(--color-text)] mb-2 line-clamp-2 hover:text-[var(--color-primary)] transition-colors">
                    {item.title}
                  </h3>

                  {/* Summary (expandable) */}
                  <p
                    className={`text-sm text-[var(--color-text-secondary)] mb-3 transition-all ${
                      expandedId === item.id ? '' : 'line-clamp-2'
                    }`}
                  >
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Bottom Row: Source, Category, Sentiment, Impact */}
              <div className="flex flex-wrap items-center gap-4 text-xs">
                {/* Source Badge */}
                <div className="flex items-center gap-1.5 bg-[var(--color-bg)] px-2.5 py-1 rounded-lg border border-[var(--glass-border)]">
                  <span className="font-medium text-[var(--color-text-secondary)]">{item.source}</span>
                </div>

                {/* Category Badge */}
                <div
                  className="px-2.5 py-1 rounded-lg font-medium text-white"
                  style={{ backgroundColor: CATEGORY_COLORS[item.category] + '30', color: CATEGORY_COLORS[item.category] }}
                >
                  {item.category}
                </div>

                {/* Sentiment */}
                <div className="flex items-center gap-1.5 text-[var(--color-text-secondary)]">
                  <SentimentIcon sentiment={item.sentiment} />
                  <span className="capitalize">{item.sentiment}</span>
                </div>

                {/* Impact Score */}
                <div className="flex items-center gap-1.5">
                  <ImpactDots score={item.impactScore} />
                </div>

                {/* Timestamp */}
                <div className="flex items-center gap-1.5 ml-auto text-[var(--color-text-secondary)]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{item.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="glass rounded-xl p-8 flex flex-col items-center justify-center gap-3">
          <AlertCircle className="w-8 h-8 text-[var(--color-text-secondary)]" />
          <p className="text-[var(--color-text-secondary)]">No news items match your filters</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedSentiment('All');
            }}
            className="text-sm text-[var(--color-primary)] hover:underline"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
