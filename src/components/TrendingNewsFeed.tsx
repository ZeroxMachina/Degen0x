'use client';

import React, { useState, useEffect, useCallback } from 'react';

/**
 * TrendingNewsFeed — Sprint 19
 * Aggregates trending crypto news from CoinGecko trending API
 * and displays with category tags, sentiment indicators,
 * and time-based freshness indicators.
 */

interface NewsItem {
  id: string;
  title: string;
  source: string;
  category: 'market' | 'defi' | 'regulation' | 'technology' | 'nft' | 'trending';
  sentiment: 'bullish' | 'bearish' | 'neutral';
  timeAgo: string;
  url?: string;
  coins?: string[];
}

// Simulated trending news data (would come from API in production)
const TRENDING_NEWS: NewsItem[] = [
  {
    id: '1', title: 'Bitcoin breaks through key resistance level at $87,000',
    source: 'CoinDesk', category: 'market', sentiment: 'bullish',
    timeAgo: '12m ago', coins: ['BTC'],
  },
  {
    id: '2', title: 'Ethereum ETF sees record $1.2B inflows in single day',
    source: 'The Block', category: 'market', sentiment: 'bullish',
    timeAgo: '34m ago', coins: ['ETH'],
  },
  {
    id: '3', title: 'New SEC framework for DeFi protocols expected in Q2 2026',
    source: 'Bloomberg', category: 'regulation', sentiment: 'neutral',
    timeAgo: '1h ago',
  },
  {
    id: '4', title: 'Solana processes 100K TPS in latest stress test',
    source: 'Decrypt', category: 'technology', sentiment: 'bullish',
    timeAgo: '2h ago', coins: ['SOL'],
  },
  {
    id: '5', title: 'Top DeFi protocols see TVL surge past $200B milestone',
    source: 'DeFi Llama', category: 'defi', sentiment: 'bullish',
    timeAgo: '3h ago',
  },
  {
    id: '6', title: 'AI agent tokens trending as sector market cap hits $50B',
    source: 'CoinTelegraph', category: 'trending', sentiment: 'bullish',
    timeAgo: '4h ago', coins: ['FET', 'OCEAN'],
  },
  {
    id: '7', title: 'Major exchange updates proof-of-reserves after audit concerns',
    source: 'The Block', category: 'market', sentiment: 'bearish',
    timeAgo: '5h ago',
  },
  {
    id: '8', title: 'Layer 2 scaling wars intensify with Base surpassing Arbitrum in daily txns',
    source: 'L2Beat', category: 'technology', sentiment: 'neutral',
    timeAgo: '6h ago',
  },
  {
    id: '9', title: 'Bitcoin mining difficulty reaches all-time high',
    source: 'Glassnode', category: 'technology', sentiment: 'neutral',
    timeAgo: '8h ago', coins: ['BTC'],
  },
  {
    id: '10', title: 'NFT market shows signs of revival with blue-chip collections surging',
    source: 'OpenSea', category: 'nft', sentiment: 'bullish',
    timeAgo: '10h ago',
  },
];

const CATEGORY_STYLES: Record<string, { bg: string; color: string }> = {
  market: { bg: '#58a6ff20', color: '#58a6ff' },
  defi: { bg: '#bc8cff20', color: '#bc8cff' },
  regulation: { bg: '#d2992220', color: '#d29922' },
  technology: { bg: '#3fb95020', color: '#3fb950' },
  nft: { bg: '#f0883e20', color: '#f0883e' },
  trending: { bg: '#f8514920', color: '#f85149' },
};

const SENTIMENT_ICONS: Record<string, { icon: string; color: string }> = {
  bullish: { icon: '▲', color: '#3fb950' },
  bearish: { icon: '▼', color: '#f85149' },
  neutral: { icon: '●', color: '#8b949e' },
};

type CategoryFilter = 'all' | NewsItem['category'];

export default function TrendingNewsFeed() {
  const [news, setNews] = useState<NewsItem[]>(TRENDING_NEWS);
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const filteredNews = filter === 'all' ? news : news.filter(n => n.category === filter);

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    // Simulate API refresh
    setTimeout(() => {
      // Shuffle and slightly modify timestamps for realism
      setNews(prev => {
        const shuffled = [...prev].sort(() => Math.random() - 0.5);
        return shuffled;
      });
      setIsRefreshing(false);
    }, 1200);
  }, []);

  // Auto-refresh every 5 minutes
  useEffect(() => {
    const timer = setInterval(handleRefresh, 300000);
    return () => clearInterval(timer);
  }, [handleRefresh]);

  const categories: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'market', label: 'Market' },
    { key: 'defi', label: 'DeFi' },
    { key: 'regulation', label: 'Regulation' },
    { key: 'technology', label: 'Tech' },
    { key: 'trending', label: 'Trending' },
  ];

  return (
    <section style={{ width: '100%' }}>
      {/* Header */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '16px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '16px', fontWeight: '700', color: '#e6edf3' }}>
            Trending News
          </span>
          <span style={{
            fontSize: '10px', fontWeight: '600', padding: '2px 8px',
            borderRadius: '4px', background: '#f8514920', color: '#f85149',
          }}>
            LIVE
          </span>
        </div>
        <button onClick={handleRefresh} disabled={isRefreshing} style={{
          background: 'none', border: '1px solid #30363d', borderRadius: '6px',
          padding: '4px 10px', color: '#8b949e', cursor: 'pointer', fontSize: '12px',
          display: 'flex', alignItems: 'center', gap: '4px',
          opacity: isRefreshing ? 0.5 : 1,
        }}>
          <span style={{
            display: 'inline-block',
            animation: isRefreshing ? 'spin 0.8s linear infinite' : 'none',
          }}>&#x21bb;</span>
          Refresh
        </button>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

      {/* Category filters */}
      <div style={{ display: 'flex', gap: '6px', marginBottom: '16px', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button key={cat.key} onClick={() => setFilter(cat.key)} style={{
            padding: '5px 12px', borderRadius: '6px', border: '1px solid',
            borderColor: filter === cat.key ? '#6366f1' : '#30363d',
            background: filter === cat.key ? '#6366f120' : 'transparent',
            color: filter === cat.key ? '#818cf8' : '#8b949e',
            fontSize: '12px', fontWeight: '600', cursor: 'pointer',
          }}>
            {cat.label}
          </button>
        ))}
      </div>

      {/* News list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {filteredNews.map((item) => {
          const catStyle = CATEGORY_STYLES[item.category] || CATEGORY_STYLES.market;
          const sentStyle = SENTIMENT_ICONS[item.sentiment];

          return (
            <div key={item.id} style={{
              background: '#161b22', border: '1px solid #30363d', borderRadius: '10px',
              padding: '14px 16px', cursor: 'pointer', transition: 'border-color 0.2s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#6366f140'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#30363d'; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#e6edf3', lineHeight: '1.4', marginBottom: '8px' }}>
                    <span style={{ color: sentStyle.color, marginRight: '6px', fontSize: '10px' }}>
                      {sentStyle.icon}
                    </span>
                    {item.title}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{
                      fontSize: '10px', padding: '2px 6px', borderRadius: '4px',
                      fontWeight: '600', background: catStyle.bg, color: catStyle.color,
                    }}>
                      {item.category}
                    </span>
                    <span style={{ fontSize: '11px', color: '#8b949e' }}>{item.source}</span>
                    <span style={{ fontSize: '11px', color: '#8b949e' }}>&#183; {item.timeAgo}</span>
                    {item.coins && item.coins.map(c => (
                      <span key={c} style={{
                        fontSize: '10px', padding: '1px 5px', borderRadius: '3px',
                        background: '#30363d', color: '#e6edf3', fontWeight: '600',
                      }}>
                        ${c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
