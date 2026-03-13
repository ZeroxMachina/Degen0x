'use client';

import React, { useState, useMemo } from 'react';
import { ArrowRightLeft, TrendingUp } from 'lucide-react';

interface TokenData {
  id: string;
  symbol: string;
  name: string;
  price: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  ath: number;
  athDate: string;
  change24h: number;
  change7d: number;
  change30d: number;
  change90d: number;
  change1y: number;
  consensus: string;
  tps: number;
  txCost: number;
  smartContracts: boolean;
  defiTvl: number;
  twitterFollowers: number;
  githubCommits: number;
  redditSubscribers: number;
  devActivityScore: number;
}

const TOKENS: TokenData[] = [
  {
    id: 'btc',
    symbol: 'BTC',
    name: 'Bitcoin',
    price: 68420,
    marketCap: 1340000000000,
    volume24h: 28000000000,
    circulatingSupply: 21000000,
    ath: 69000,
    athDate: '2024-11-13',
    change24h: 2.45,
    change7d: 5.12,
    change30d: 12.34,
    change90d: 28.56,
    change1y: 156.78,
    consensus: 'PoW',
    tps: 7,
    txCost: 15.50,
    smartContracts: false,
    defiTvl: 0,
    twitterFollowers: 8200000,
    githubCommits: 27000,
    redditSubscribers: 4100000,
    devActivityScore: 92,
  },
  {
    id: 'eth',
    symbol: 'ETH',
    name: 'Ethereum',
    price: 3580,
    marketCap: 430000000000,
    volume24h: 18500000000,
    circulatingSupply: 120200000,
    ath: 4891,
    athDate: '2021-11-16',
    change24h: 1.82,
    change7d: 4.56,
    change30d: 9.23,
    change90d: 22.11,
    change1y: 89.34,
    consensus: 'PoS',
    tps: 30,
    txCost: 2.35,
    smartContracts: true,
    defiTvl: 45200000000,
    twitterFollowers: 5600000,
    githubCommits: 18500,
    redditSubscribers: 2300000,
    devActivityScore: 96,
  },
  {
    id: 'sol',
    symbol: 'SOL',
    name: 'Solana',
    price: 189.45,
    marketCap: 87000000000,
    volume24h: 3200000000,
    circulatingSupply: 460000000,
    ath: 260,
    athDate: '2021-11-06',
    change24h: 3.21,
    change7d: 6.78,
    change30d: 15.42,
    change90d: 32.15,
    change1y: 245.67,
    consensus: 'PoH',
    tps: 65000,
    txCost: 0.00025,
    smartContracts: true,
    defiTvl: 2800000000,
    twitterFollowers: 3400000,
    githubCommits: 12000,
    redditSubscribers: 450000,
    devActivityScore: 88,
  },
  {
    id: 'avax',
    symbol: 'AVAX',
    name: 'Avalanche',
    price: 32.56,
    marketCap: 13500000000,
    volume24h: 1200000000,
    circulatingSupply: 415000000,
    ath: 146,
    athDate: '2021-11-21',
    change24h: 2.15,
    change7d: 3.42,
    change30d: 8.56,
    change90d: 18.23,
    change1y: 124.34,
    consensus: 'PoS',
    tps: 4500,
    txCost: 0.08,
    smartContracts: true,
    defiTvl: 1200000000,
    twitterFollowers: 1800000,
    githubCommits: 8500,
    redditSubscribers: 280000,
    devActivityScore: 82,
  },
  {
    id: 'dot',
    symbol: 'DOT',
    name: 'Polkadot',
    price: 11.42,
    marketCap: 18200000000,
    volume24h: 890000000,
    circulatingSupply: 1593000000,
    ath: 55,
    athDate: '2021-11-04',
    change24h: 1.23,
    change7d: 2.56,
    change30d: 5.67,
    change90d: 12.34,
    change1y: 67.89,
    consensus: 'PoS',
    tps: 1200,
    txCost: 0.005,
    smartContracts: true,
    defiTvl: 890000000,
    twitterFollowers: 1600000,
    githubCommits: 9200,
    redditSubscribers: 320000,
    devActivityScore: 85,
  },
  {
    id: 'link',
    symbol: 'LINK',
    name: 'Chainlink',
    price: 28.73,
    marketCap: 14200000000,
    volume24h: 890000000,
    circulatingSupply: 495000000,
    ath: 52.88,
    athDate: '2021-05-12',
    change24h: 0.89,
    change7d: 1.23,
    change30d: 3.45,
    change90d: 8.92,
    change1y: 142.56,
    consensus: 'PoS',
    tps: 'N/A',
    txCost: 0.0,
    smartContracts: false,
    defiTvl: 0,
    twitterFollowers: 1400000,
    githubCommits: 6800,
    redditSubscribers: 240000,
    devActivityScore: 84,
  },
  {
    id: 'matic',
    symbol: 'MATIC',
    name: 'Polygon',
    price: 0.89,
    marketCap: 9200000000,
    volume24h: 650000000,
    circulatingSupply: 10300000000,
    ath: 2.92,
    athDate: '2021-12-27',
    change24h: 1.45,
    change7d: 2.89,
    change30d: 6.23,
    change90d: 14.56,
    change1y: 98.34,
    consensus: 'PoS',
    tps: 7000,
    txCost: 0.0001,
    smartContracts: true,
    defiTvl: 2100000000,
    twitterFollowers: 1200000,
    githubCommits: 7500,
    redditSubscribers: 310000,
    devActivityScore: 83,
  },
  {
    id: 'arb',
    symbol: 'ARB',
    name: 'Arbitrum',
    price: 1.28,
    marketCap: 6800000000,
    volume24h: 450000000,
    circulatingSupply: 5310000000,
    ath: 4.12,
    athDate: '2023-03-16',
    change24h: 2.78,
    change7d: 5.23,
    change30d: 11.45,
    change90d: 24.56,
    change1y: 0.0,
    consensus: 'PoS',
    tps: 40000,
    txCost: 0.00005,
    smartContracts: true,
    defiTvl: 1800000000,
    twitterFollowers: 980000,
    githubCommits: 5200,
    redditSubscribers: 180000,
    devActivityScore: 80,
  },
  {
    id: 'op',
    symbol: 'OP',
    name: 'Optimism',
    price: 3.42,
    marketCap: 1800000000,
    volume24h: 290000000,
    circulatingSupply: 526000000,
    ath: 4.99,
    athDate: '2023-01-17',
    change24h: 3.12,
    change7d: 6.45,
    change30d: 13.67,
    change90d: 28.34,
    change1y: 0.0,
    consensus: 'PoS',
    tps: 4000,
    txCost: 0.00008,
    smartContracts: true,
    defiTvl: 950000000,
    twitterFollowers: 620000,
    githubCommits: 3800,
    redditSubscribers: 95000,
    devActivityScore: 78,
  },
  {
    id: 'atom',
    symbol: 'ATOM',
    name: 'Cosmos',
    price: 9.34,
    marketCap: 12100000000,
    volume24h: 420000000,
    circulatingSupply: 1296000000,
    ath: 44.70,
    athDate: '2021-09-10',
    change24h: 1.67,
    change7d: 3.23,
    change30d: 7.89,
    change90d: 16.45,
    change1y: 89.23,
    consensus: 'PoS',
    tps: 600,
    txCost: 0.0025,
    smartContracts: true,
    defiTvl: 650000000,
    twitterFollowers: 1100000,
    githubCommits: 5600,
    redditSubscribers: 205000,
    devActivityScore: 79,
  },
  {
    id: 'ada',
    symbol: 'ADA',
    name: 'Cardano',
    price: 1.08,
    marketCap: 41000000000,
    volume24h: 1800000000,
    circulatingSupply: 37900000000,
    ath: 3.10,
    athDate: '2021-09-02',
    change24h: 0.45,
    change7d: 1.23,
    change30d: 4.56,
    change90d: 10.23,
    change1y: 56.78,
    consensus: 'PoS',
    tps: 250,
    txCost: 0.17,
    smartContracts: true,
    defiTvl: 380000000,
    twitterFollowers: 2100000,
    githubCommits: 11200,
    redditSubscribers: 850000,
    devActivityScore: 81,
  },
  {
    id: 'bnb',
    symbol: 'BNB',
    name: 'BNB Chain',
    price: 612.45,
    marketCap: 94200000000,
    volume24h: 3800000000,
    circulatingSupply: 153800000,
    ath: 686,
    athDate: '2021-05-11',
    change24h: 1.98,
    change7d: 3.56,
    change30d: 8.45,
    change90d: 19.23,
    change1y: 145.67,
    consensus: 'PoS',
    tps: 5000,
    txCost: 0.0005,
    smartContracts: true,
    defiTvl: 8900000000,
    twitterFollowers: 4200000,
    githubCommits: 9800,
    redditSubscribers: 620000,
    devActivityScore: 86,
  },
];

type PerformanceMetric = 'change24h' | 'change7d' | 'change30d' | 'change90d' | 'change1y';

const TokenComparison: React.FC = () => {
  const [token1Id, setToken1Id] = useState('btc');
  const [token2Id, setToken2Id] = useState('eth');
  const [performanceMetric, setPerformanceMetric] = useState<PerformanceMetric>('change24h');

  const token1 = useMemo(() => TOKENS.find((t) => t.id === token1Id) || TOKENS[0], [token1Id]);
  const token2 = useMemo(() => TOKENS.find((t) => t.id === token2Id) || TOKENS[1], [token2Id]);

  const handleSwap = () => {
    setToken1Id(token2Id);
    setToken2Id(token1Id);
  };

  const formatPrice = (price: number): string => {
    return price > 100 ? `$${price.toFixed(2)}` : `$${price.toFixed(4)}`;
  };

  const formatNumber = (num: number): string => {
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    return `$${num.toFixed(0)}`;
  };

  const getMetricColor = (value: number): string => {
    if (value > 0) return 'text-green-400';
    if (value < 0) return 'text-red-400';
    return 'text-gray-400';
  };

  const getWinnerHighlight = (val1: number, val2: number): { winner: number; class1: string; class2: string } => {
    if (val1 > val2) return { winner: 1, class1: 'bg-green-900/30', class2: '' };
    if (val2 > val1) return { winner: 2, class1: '', class2: 'bg-green-900/30' };
    return { winner: 0, class1: '', class2: '' };
  };

  const radarScore = (token: TokenData): { label: string; value: number }[] => [
    {
      label: 'Price Performance',
      value: Math.min(100, Math.max(0, 50 + Math.log(token.change1y) * 10)),
    },
    { label: 'Adoption', value: Math.min(100, (token.twitterFollowers / 10000000) * 100) },
    { label: 'Technology', value: token.devActivityScore || 75 },
    {
      label: 'DeFi TVL',
      value: Math.min(100, (token.defiTvl / 50000000000) * 100),
    },
    { label: 'Security', value: token.consensus === 'PoS' ? 85 : 75 },
    { label: 'Community', value: Math.min(100, (token.redditSubscribers / 4000000) * 100) },
  ];

  const radarPoints = [radarScore(token1), radarScore(token2)];

  const generateRadarPath = (scores: { label: string; value: number }[], scale: number = 40): string => {
    const points = scores
      .map((s, i) => {
        const angle = (i / scores.length) * Math.PI * 2 - Math.PI / 2;
        const r = (s.value / 100) * scale;
        return `${100 + r * Math.cos(angle)},${100 + r * Math.sin(angle)}`;
      })
      .join(' ');
    return `polygon(${points})`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <TrendingUp className="w-10 h-10 text-green-400" />
            Token Comparison
          </h1>
          <p className="text-gray-400">Compare metrics and fundamentals side by side</p>
        </div>

        {/* Token Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Token 1</label>
            <select
              value={token1Id}
              onChange={(e) => setToken1Id(e.target.value)}
              className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg p-3 focus:outline-none focus:border-green-400"
            >
              {TOKENS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.symbol} - {t.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end justify-center">
            <button
              onClick={handleSwap}
              className="bg-green-600 hover:bg-green-700 text-white rounded-lg p-3 transition-colors"
              title="Swap tokens"
            >
              <ArrowRightLeft className="w-6 h-6" />
            </button>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Token 2</label>
            <select
              value={token2Id}
              onChange={(e) => setToken2Id(e.target.value)}
              className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg p-3 focus:outline-none focus:border-green-400"
            >
              {TOKENS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.symbol} - {t.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Price & Market Data */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-4">Price & Market Data</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Price', key: 'price', formatter: formatPrice },
              { label: 'Market Cap', key: 'marketCap', formatter: formatNumber },
              { label: '24h Volume', key: 'volume24h', formatter: formatNumber },
              { label: 'Circ. Supply', key: 'circulatingSupply', formatter: (n: number) => n.toLocaleString() },
              { label: 'ATH', key: 'ath', formatter: formatPrice },
              { label: 'ATH Date', key: 'athDate', formatter: (d: string) => d },
            ].map((metric) => {
              const val1 = token1[metric.key as keyof TokenData];
              const val2 = token2[metric.key as keyof TokenData];
              const formatted1 = metric.formatter(val1 as number | string);
              const formatted2 = metric.formatter(val2 as number | string);
              const winner =
                typeof val1 === 'number' && typeof val2 === 'number'
                  ? getWinnerHighlight(val1, val2)
                  : { winner: 0, class1: '', class2: '' };

              return (
                <div key={metric.label} className="space-y-2">
                  <p className="text-gray-400 text-sm">{metric.label}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className={`bg-slate-700/50 rounded p-2 ${winner.class1}`}>
                      <p className="text-white font-mono text-sm">{formatted1}</p>
                    </div>
                    <div className={`bg-slate-700/50 rounded p-2 ${winner.class2}`}>
                      <p className="text-white font-mono text-sm">{formatted2}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Performance Comparison */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-4">Performance</h2>
          <div className="mb-4 flex gap-2">
            {['change24h', 'change7d', 'change30d', 'change90d', 'change1y'].map((metric) => (
              <button
                key={metric}
                onClick={() => setPerformanceMetric(metric as PerformanceMetric)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  performanceMetric === metric
                    ? 'bg-green-600 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {metric === 'change24h'
                  ? '24h'
                  : metric === 'change7d'
                    ? '7d'
                    : metric === 'change30d'
                      ? '30d'
                      : metric === 'change90d'
                        ? '90d'
                        : '1y'}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { token: token1, value: token1[performanceMetric] },
              { token: token2, value: token2[performanceMetric] },
            ].map((item, idx) => (
              <div key={idx}>
                <p className="text-gray-400 mb-2">{item.token.symbol}</p>
                <div className="space-y-1">
                  <p className={`text-2xl font-bold ${getMetricColor(item.value)}`}>
                    {item.value > 0 ? '+' : ''}
                    {item.value.toFixed(2)}%
                  </p>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${item.value > 0 ? 'bg-green-500' : 'bg-red-500'}`}
                      style={{ width: `${Math.min(100, Math.abs(item.value * 2))}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fundamentals */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-4">Fundamentals</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: 'Consensus', key: 'consensus', formatter: (v: string) => v },
              { label: 'TPS', key: 'tps', formatter: (v: number | string) => v },
              { label: 'Tx Cost', key: 'txCost', formatter: (v: number) => `$${v.toFixed(4)}` },
              { label: 'Smart Contracts', key: 'smartContracts', formatter: (v: boolean) => (v ? 'Yes' : 'No') },
              { label: 'DeFi TVL', key: 'defiTvl', formatter: formatNumber },
            ].map((metric) => {
              const val1 = token1[metric.key as keyof TokenData];
              const val2 = token2[metric.key as keyof TokenData];
              const formatted1 = metric.formatter(val1 as never);
              const formatted2 = metric.formatter(val2 as never);

              return (
                <div key={metric.label} className="space-y-2">
                  <p className="text-gray-400 text-sm">{metric.label}</p>
                  <div className="space-y-1">
                    <div className="bg-slate-700/50 rounded p-2">
                      <p className="text-white text-sm font-mono">{formatted1}</p>
                    </div>
                    <div className="bg-slate-700/50 rounded p-2">
                      <p className="text-white text-sm font-mono">{formatted2}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Social & Community */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-4">Social & Community</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Twitter Followers', key: 'twitterFollowers', formatter: (n: number) => (n / 1e6).toFixed(1) + 'M' },
              { label: 'GitHub Commits', key: 'githubCommits', formatter: (n: number) => n.toLocaleString() },
              { label: 'Reddit Subs', key: 'redditSubscribers', formatter: (n: number) => (n / 1e6).toFixed(2) + 'M' },
              { label: 'Dev Activity', key: 'devActivityScore', formatter: (n: number) => n.toFixed(0) + '/100' },
            ].map((metric) => {
              const val1 = token1[metric.key as keyof TokenData] as number;
              const val2 = token2[metric.key as keyof TokenData] as number;
              const winner = getWinnerHighlight(val1, val2);

              return (
                <div key={metric.label} className="space-y-2">
                  <p className="text-gray-400 text-sm">{metric.label}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className={`bg-slate-700/50 rounded p-2 ${winner.class1}`}>
                      <p className="text-white text-sm font-mono">{metric.formatter(val1)}</p>
                    </div>
                    <div className={`bg-slate-700/50 rounded p-2 ${winner.class2}`}>
                      <p className="text-white text-sm font-mono">{metric.formatter(val2)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Radar Chart */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-6">Multi-Axis Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[token1, token2].map((token, idx) => {
              const scores = radarPoints[idx];
              return (
                <div key={token.id} className="flex flex-col items-center">
                  <h3 className="text-lg font-semibold text-white mb-4">{token.symbol}</h3>
                  <svg width="250" height="250" viewBox="0 0 200 200" className="mb-4">
                    {/* Grid circles */}
                    {[20, 40, 60, 80, 100].map((r) => (
                      <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#475569" strokeWidth="0.5" />
                    ))}

                    {/* Axes */}
                    {scores.map((_, i) => {
                      const angle = (i / scores.length) * Math.PI * 2 - Math.PI / 2;
                      const x2 = 100 + 100 * Math.cos(angle);
                      const y2 = 100 + 100 * Math.sin(angle);
                      return (
                        <line
                          key={`axis-${i}`}
                          x1="100"
                          y1="100"
                          x2={x2}
                          y2={y2}
                          stroke="#475569"
                          strokeWidth="0.5"
                        />
                      );
                    })}

                    {/* Data polygon */}
                    <polygon
                      points={scores
                        .map((s, i) => {
                          const angle = (i / scores.length) * Math.PI * 2 - Math.PI / 2;
                          const r = (s.value / 100) * 100;
                          return `${100 + r * Math.cos(angle)},${100 + r * Math.sin(angle)}`;
                        })
                        .join(' ')}
                      fill={idx === 0 ? 'rgba(34, 197, 94, 0.2)' : 'rgba(59, 130, 246, 0.2)'}
                      stroke={idx === 0 ? '#22c55e' : '#3b82f6'}
                      strokeWidth="2"
                    />

                    {/* Labels */}
                    {scores.map((s, i) => {
                      const angle = (i / scores.length) * Math.PI * 2 - Math.PI / 2;
                      const x = 100 + 120 * Math.cos(angle);
                      const y = 100 + 120 * Math.sin(angle);
                      return (
                        <text
                          key={`label-${i}`}
                          x={x}
                          y={y}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="text-xs fill-gray-400"
                        >
                          {s.label.split(' ')[0]}
                        </text>
                      );
                    })}
                  </svg>
                  <div className="text-xs text-gray-400 space-y-1">
                    {scores.map((s, i) => (
                      <div key={i} className="flex justify-between gap-4">
                        <span>{s.label}:</span>
                        <span className="font-mono text-green-400">{s.value.toFixed(0)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Verdict */}
        <div className="bg-gradient-to-r from-green-900/40 to-blue-900/40 backdrop-blur border border-green-700/50 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-3">Verdict</h2>
          <div className="space-y-2 text-gray-200">
            <p>
              <span className="font-semibold text-green-400">{token1.symbol}</span> leads in{' '}
              {token1.devActivityScore > token2.devActivityScore ? 'developer activity' : 'adoption'} with strong{' '}
              {token1.change1y > token2.change1y ? 'long-term performance' : 'fundamentals'}.
            </p>
            <p>
              <span className="font-semibold text-blue-400">{token2.symbol}</span> offers{' '}
              {token2.tps > token1.tps ? 'superior throughput' : 'better security'} and a{' '}
              {token2.defiTvl > token1.defiTvl ? 'robust DeFi ecosystem' : 'growing community'}.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Both tokens represent strong positions in their respective categories. Consider your investment goals and risk tolerance
              when making decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenComparison;
