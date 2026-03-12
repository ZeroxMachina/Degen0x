'use client';

import { useState, useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import { TrendingUp, TrendingDown, Activity, Users, Github, Zap } from 'lucide-react';

interface NarrativeData {
  id: string;
  name: string;
  emoji: string;
  heat: number;
  momentum: 'up' | 'down' | 'flat';
  marketCap: number;
  tokens: { name: string; change: number; price: string }[];
  mentions: { platform: string; count: number }[];
  description: string;
  rotation: 'early' | 'mid' | 'late' | 'exhausted';
  twitterTrend: number[];
  redditActivity: number;
  githubCommits: number;
  vcFunding: number;
}

const narratives: NarrativeData[] = [
  {
    id: 'ai-agents',
    name: 'AI Agents',
    emoji: '🤖',
    heat: 92,
    momentum: 'up',
    marketCap: 45.2,
    tokens: [
      { name: 'FETCH', change: 24.5, price: '$2.45' },
      { name: 'AGIX', change: 18.2, price: '$1.02' },
      { name: 'OCEAN', change: 15.8, price: '$0.89' },
      { name: 'ALI', change: 12.4, price: '$0.34' },
      { name: 'AĞIX', change: 8.9, price: '$0.67' },
    ],
    mentions: [
      { platform: 'Twitter', count: 8450 },
      { platform: 'Reddit', count: 2340 },
      { platform: 'Discord', count: 1890 },
    ],
    description: 'Autonomous AI agents trading, analyzing, and executing on-chain',
    rotation: 'mid',
    twitterTrend: [45, 52, 58, 65, 72, 78, 85, 92],
    redditActivity: 342,
    githubCommits: 1245,
    vcFunding: 156,
  },
  {
    id: 'depin',
    name: 'DePIN',
    emoji: '🌐',
    heat: 87,
    momentum: 'up',
    marketCap: 38.5,
    tokens: [
      { name: 'RNDR', change: 31.2, price: '$8.42' },
      { name: 'POL', change: 22.1, price: '$0.58' },
      { name: 'RENDER', change: 19.5, price: '$9.23' },
      { name: 'IO', change: 14.7, price: '$12.56' },
      { name: 'DIONE', change: 9.3, price: '$2.15' },
    ],
    mentions: [
      { platform: 'Twitter', count: 6230 },
      { platform: 'Reddit', count: 1820 },
      { platform: 'Discord', count: 1450 },
    ],
    description: 'Decentralized Physical Infrastructure Networks',
    rotation: 'mid',
    twitterTrend: [40, 48, 55, 62, 70, 78, 82, 87],
    redditActivity: 278,
    githubCommits: 892,
    vcFunding: 203,
  },
  {
    id: 'rwa',
    name: 'RWA',
    emoji: '🏦',
    heat: 78,
    momentum: 'up',
    marketCap: 52.1,
    tokens: [
      { name: 'ONDO', change: 28.4, price: '$1.34' },
      { name: 'USDY', change: 0.1, price: '$1.00' },
      { name: 'EURC', change: 0.2, price: '$1.00' },
      { name: 'IUSD', change: 12.3, price: '$0.98' },
      { name: 'STO', change: 5.6, price: '$0.45' },
    ],
    mentions: [
      { platform: 'Twitter', count: 5120 },
      { platform: 'Reddit', count: 1340 },
      { platform: 'Discord', count: 920 },
    ],
    description: 'Real-world assets tokenized on-chain',
    rotation: 'mid',
    twitterTrend: [38, 45, 52, 60, 68, 73, 76, 78],
    redditActivity: 215,
    githubCommits: 456,
    vcFunding: 320,
  },
  {
    id: 'bitcoin-l2',
    name: 'Bitcoin L2',
    emoji: '⚡',
    heat: 73,
    momentum: 'up',
    marketCap: 28.3,
    tokens: [
      { name: 'STX', change: 45.2, price: '$3.89' },
      { name: 'RSK', change: 8.3, price: '$0.23' },
      { name: 'ARB', change: 19.2, price: '$1.45' },
      { name: 'OP', change: 16.8, price: '$2.12' },
      { name: 'MERLIN', change: 62.1, price: '$4.56' },
    ],
    mentions: [
      { platform: 'Twitter', count: 4890 },
      { platform: 'Reddit', count: 1560 },
      { platform: 'Discord', count: 1120 },
    ],
    description: 'Layer 2 scaling solutions for Bitcoin',
    rotation: 'early',
    twitterTrend: [20, 28, 35, 45, 55, 65, 70, 73],
    redditActivity: 298,
    githubCommits: 734,
    vcFunding: 89,
  },
  {
    id: 'restaking',
    name: 'Restaking',
    emoji: '🔗',
    heat: 65,
    momentum: 'flat',
    marketCap: 18.9,
    tokens: [
      { name: 'EigenToken', change: 5.2, price: '$2.34' },
      { name: 'LRT', change: -2.1, price: '$0.89' },
      { name: 'PUFFER', change: 12.5, price: '$1.23' },
      { name: 'KELP', change: -4.3, price: '$0.56' },
      { name: 'SYMBIOTIC', change: 3.1, price: '$0.78' },
    ],
    mentions: [
      { platform: 'Twitter', count: 3450 },
      { platform: 'Reddit', count: 980 },
      { platform: 'Discord', count: 720 },
    ],
    description: 'Staking derivatives and restaking protocols',
    rotation: 'late',
    twitterTrend: [60, 62, 64, 64, 65, 65, 65, 65],
    redditActivity: 142,
    githubCommits: 312,
    vcFunding: 156,
  },
  {
    id: 'intent-based',
    name: 'Intent-Based',
    emoji: '🎯',
    heat: 71,
    momentum: 'up',
    marketCap: 12.4,
    tokens: [
      { name: 'ANOMA', change: 34.5, price: '$5.67' },
      { name: 'SUAVE', change: 18.2, price: '$0.92' },
      { name: 'MEZO', change: 25.8, price: '$8.34' },
      { name: 'SOLVER', change: 11.3, price: '$0.45' },
      { name: 'INTENT', change: 7.6, price: '$0.34' },
    ],
    mentions: [
      { platform: 'Twitter', count: 2890 },
      { platform: 'Reddit', count: 650 },
      { platform: 'Discord', count: 580 },
    ],
    description: 'Intent-centric architecture and order flow',
    rotation: 'early',
    twitterTrend: [25, 35, 45, 55, 62, 67, 70, 71],
    redditActivity: 176,
    githubCommits: 598,
    vcFunding: 67,
  },
  {
    id: 'modular',
    name: 'Modular Chains',
    emoji: '🧱',
    heat: 68,
    momentum: 'down',
    marketCap: 34.2,
    tokens: [
      { name: 'AVAIL', change: -8.2, price: '$4.23' },
      { name: 'CELESTIA', change: -5.3, price: '$6.78' },
      { name: 'EigenDA', change: -2.1, price: '$0.56' },
      { name: 'NEAR', change: -1.5, price: '$5.12' },
      { name: 'DYMENSION', change: -6.8, price: '$0.89' },
    ],
    mentions: [
      { platform: 'Twitter', count: 3120 },
      { platform: 'Reddit', count: 890 },
      { platform: 'Discord', count: 620 },
    ],
    description: 'Modular blockchain architecture and DA layers',
    rotation: 'late',
    twitterTrend: [72, 71, 70, 69, 69, 68, 68, 68],
    redditActivity: 203,
    githubCommits: 456,
    vcFunding: 198,
  },
  {
    id: 'socialfi',
    name: 'SocialFi',
    emoji: '👥',
    heat: 54,
    momentum: 'down',
    marketCap: 8.7,
    tokens: [
      { name: 'FRIEND', change: -14.2, price: '$0.34' },
      { name: 'DESO', change: -8.5, price: '$2.45' },
      { name: 'LENS', change: -2.3, price: '$0.12' },
      { name: 'BLUESKY', change: 15.2, price: '$0.89' },
      { name: 'NOSTR', change: 8.9, price: '$0.34' },
    ],
    mentions: [
      { platform: 'Twitter', count: 2340 },
      { platform: 'Reddit', count: 670 },
      { platform: 'Discord', count: 450 },
    ],
    description: 'Social platforms and decentralized networks',
    rotation: 'exhausted',
    twitterTrend: [75, 70, 65, 60, 57, 55, 54, 54],
    redditActivity: 98,
    githubCommits: 234,
    vcFunding: 45,
  },
  {
    id: 'gamefi',
    name: 'GameFi',
    emoji: '🎮',
    heat: 48,
    momentum: 'down',
    marketCap: 15.3,
    tokens: [
      { name: 'GALA', change: -18.5, price: '$0.08' },
      { name: 'SAND', change: -12.3, price: '$0.34' },
      { name: 'AXS', change: -22.1, price: '$5.67' },
      { name: 'ENJ', change: -5.6, price: '$0.45' },
      { name: 'ILV', change: -8.9, price: '$125.34' },
    ],
    mentions: [
      { platform: 'Twitter', count: 1890 },
      { platform: 'Reddit', count: 540 },
      { platform: 'Discord', count: 820 },
    ],
    description: 'Gaming and metaverse tokens',
    rotation: 'exhausted',
    twitterTrend: [85, 78, 68, 58, 52, 50, 49, 48],
    redditActivity: 167,
    githubCommits: 345,
    vcFunding: 78,
  },
  {
    id: 'memecoins',
    name: 'Memecoins',
    emoji: '🤡',
    heat: 81,
    momentum: 'up',
    marketCap: 24.5,
    tokens: [
      { name: 'DOGE', change: 15.2, price: '$0.38' },
      { name: 'SHIB', change: 8.4, price: '$0.000023' },
      { name: 'FLOKI', change: 34.2, price: '$0.0234' },
      { name: 'BONK', change: 42.1, price: '$0.034' },
      { name: 'WIF', change: 28.5, price: '$2.45' },
    ],
    mentions: [
      { platform: 'Twitter', count: 7890 },
      { platform: 'Reddit', count: 2120 },
      { platform: 'Discord', count: 1650 },
    ],
    description: 'Community-driven meme tokens',
    rotation: 'mid',
    twitterTrend: [35, 45, 58, 68, 75, 79, 81, 81],
    redditActivity: 456,
    githubCommits: 0,
    vcFunding: 0,
  },
];

type SortBy = 'heat' | 'momentum' | 'marketCap' | 'mentions';
type RotationFilter = 'all' | 'early' | 'mid' | 'late' | 'exhausted';

export default function NarrativeTracker() {
  const [sortBy, setSortBy] = useState<SortBy>('heat');
  const [rotationFilter, setRotationFilter] = useState<RotationFilter>('all');
  const [selectedNarrative, setSelectedNarrative] = useState<NarrativeData | null>(null);
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => {
    if (!autoRefresh) return;
    const interval = setInterval(() => {
      // Simulate data refresh
    }, 30000);
    return () => clearInterval(interval);
  }, [autoRefresh]);

  const getHeatColor = (heat: number): string => {
    if (heat >= 80) return 'from-green-600 to-emerald-500';
    if (heat >= 65) return 'from-yellow-600 to-amber-500';
    if (heat >= 50) return 'from-orange-600 to-yellow-500';
    return 'from-gray-600 to-slate-500';
  };

  const getHeatBgColor = (heat: number): string => {
    if (heat >= 80) return 'bg-green-900/20';
    if (heat >= 65) return 'bg-yellow-900/20';
    if (heat >= 50) return 'bg-orange-900/20';
    return 'bg-gray-900/20';
  };

  const getRotationLabel = (rotation: string): string => {
    const labels: Record<string, string> = {
      early: '🔥 Early',
      mid: '📈 Mid',
      late: '⚠️ Late',
      exhausted: '❄️ Exhausted',
    };
    return labels[rotation] || rotation;
  };

  const filteredNarratives = narratives.filter((n) => {
    if (rotationFilter === 'all') return true;
    return n.rotation === rotationFilter;
  });

  const sortedNarratives = [...filteredNarratives].sort((a, b) => {
    switch (sortBy) {
      case 'heat':
        return b.heat - a.heat;
      case 'momentum':
        const momentumScore = { up: 2, flat: 1, down: 0 };
        return momentumScore[b.momentum] - momentumScore[a.momentum];
      case 'marketCap':
        return b.marketCap - a.marketCap;
      case 'mentions':
        const aMentions = a.mentions.reduce((sum, m) => sum + m.count, 0);
        const bMentions = b.mentions.reduce((sum, m) => sum + m.count, 0);
        return bMentions - aMentions;
      default:
        return 0;
    }
  });

  const earlyNarratives = narratives.filter((n) => n.rotation === 'early');
  const totalMentions = narratives.reduce(
    (sum, n) => sum + n.mentions.reduce((s, m) => s + m.count, 0),
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: 'Tools', href: '/tools' },
            { label: 'Narrative Tracker', href: '/tools/narrative-tracker' },
          ]}
        />

        {/* Header */}
        <div className="mb-8 mt-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
            Crypto Narrative Tracker
          </h1>
          <p className="text-slate-400">
            Identify and ride trending crypto narratives in real-time
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <div className="text-slate-400 text-sm mb-1">Hot Narratives</div>
            <div className="text-3xl font-bold text-green-400">
              {narratives.filter((n) => n.heat >= 80).length}
            </div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <div className="text-slate-400 text-sm mb-1">Heating Up</div>
            <div className="text-3xl font-bold text-yellow-400">
              {narratives.filter((n) => n.momentum === 'up').length}
            </div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <div className="text-slate-400 text-sm mb-1">Total Social Volume</div>
            <div className="text-3xl font-bold text-blue-400">
              {(totalMentions / 1000).toFixed(1)}K
            </div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <div className="text-slate-400 text-sm mb-1">Refresh Rate</div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={autoRefresh}
                onChange={(e) => setAutoRefresh(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-slate-300">30s</span>
            </div>
          </div>
        </div>

        {/* Alpha Signals - Emerging Narratives */}
        {earlyNarratives.length > 0 && (
          <div className="mb-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/50 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-yellow-400" />
              <h2 className="text-xl font-bold text-yellow-400">Alpha Signals - Early Stage</h2>
            </div>
            <p className="text-sm text-slate-300 mb-4">
              Narratives just starting to get traction - potential high ROI plays
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {earlyNarratives.map((narrative) => (
                <button
                  key={narrative.id}
                  onClick={() => setSelectedNarrative(narrative)}
                  className="text-left bg-slate-800/50 hover:bg-slate-700/50 border border-purple-500/30 rounded-lg p-4 transition"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg">{narrative.emoji} {narrative.name}</span>
                    <span className="text-yellow-400 font-bold">{narrative.heat}°</span>
                  </div>
                  <div className="text-xs text-slate-400">
                    {narrative.tokens[0].name} +{narrative.tokens[0].change.toFixed(1)}%
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="mb-6 flex flex-wrap gap-4">
          <div>
            <label className="text-sm text-slate-400 block mb-2">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortBy)}
              className="bg-slate-800 border border-slate-700 rounded px-3 py-2 text-sm text-slate-100"
            >
              <option value="heat">Heat Score</option>
              <option value="momentum">Momentum</option>
              <option value="marketCap">Market Cap</option>
              <option value="mentions">Social Volume</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-slate-400 block mb-2">Rotation Phase</label>
            <select
              value={rotationFilter}
              onChange={(e) => setRotationFilter(e.target.value as RotationFilter)}
              className="bg-slate-800 border border-slate-700 rounded px-3 py-2 text-sm text-slate-100"
            >
              <option value="all">All Phases</option>
              <option value="early">Early</option>
              <option value="mid">Mid</option>
              <option value="late">Late</option>
              <option value="exhausted">Exhausted</option>
            </select>
          </div>
        </div>

        {/* Narrative Heatmap */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Narrative Heatmap</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {sortedNarratives.map((narrative) => (
              <button
                key={narrative.id}
                onClick={() => setSelectedNarrative(narrative)}
                className={`bg-gradient-to-br ${getHeatColor(
                  narrative.heat
                )} p-4 rounded-lg hover:scale-105 transition duration-200 cursor-pointer`}
              >
                <div className="text-2xl mb-2">{narrative.emoji}</div>
                <div className="font-semibold text-sm text-[var(--color-text)] mb-2">{narrative.name}</div>
                <div className="text-3xl font-bold text-[var(--color-text)]">{narrative.heat}°</div>
                <div className="text-xs mt-2 opacity-80">
                  {narrative.momentum === 'up' && '📈 +5.2%'}
                  {narrative.momentum === 'down' && '📉 -3.8%'}
                  {narrative.momentum === 'flat' && '➡️ Flat'}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Narrative Cards */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-4">Narrative Details</h2>
            <div className="space-y-4 max-h-[800px] overflow-y-auto pr-4">
              {sortedNarratives.map((narrative) => {
                const totalMentions = narrative.mentions.reduce((sum, m) => sum + m.count, 0);
                return (
                  <div
                    key={narrative.id}
                    onClick={() => setSelectedNarrative(narrative)}
                    className={`bg-slate-800/50 border rounded-lg p-5 cursor-pointer transition hover:border-cyan-500/50 ${
                      selectedNarrative?.id === narrative.id
                        ? 'border-cyan-500 bg-slate-800'
                        : 'border-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{narrative.emoji}</span>
                        <div>
                          <h3 className="font-bold text-lg">{narrative.name}</h3>
                          <p className="text-xs text-slate-400">{narrative.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                          {narrative.heat}°
                        </div>
                        <div className="text-xs text-slate-400">{getRotationLabel(narrative.rotation)}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="bg-slate-900/50 rounded p-2">
                        <div className="text-xs text-slate-400 mb-1">Market Cap</div>
                        <div className="font-semibold">${narrative.marketCap.toFixed(1)}B</div>
                      </div>
                      <div className="bg-slate-900/50 rounded p-2">
                        <div className="text-xs text-slate-400 mb-1">7d Momentum</div>
                        <div className="flex items-center gap-1">
                          {narrative.momentum === 'up' && (
                            <>
                              <TrendingUp className="w-4 h-4 text-green-400" />
                              <span className="text-green-400 font-semibold">+5.2%</span>
                            </>
                          )}
                          {narrative.momentum === 'down' && (
                            <>
                              <TrendingDown className="w-4 h-4 text-red-400" />
                              <span className="text-red-400 font-semibold">-3.8%</span>
                            </>
                          )}
                          {narrative.momentum === 'flat' && (
                            <span className="text-slate-400 font-semibold">→ 0%</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Top Tokens */}
                    <div className="mb-3">
                      <div className="text-xs font-semibold text-slate-300 mb-2">Top 5 Tokens</div>
                      <div className="grid grid-cols-5 gap-2">
                        {narrative.tokens.map((token, idx) => (
                          <div key={idx} className="bg-slate-900/50 rounded p-2 text-center">
                            <div className="text-xs font-mono text-slate-300">{token.name}</div>
                            <div
                              className={`text-xs font-bold ${
                                token.change >= 0 ? 'text-green-400' : 'text-red-400'
                              }`}
                            >
                              {token.change >= 0 ? '+' : ''}
                              {token.change.toFixed(1)}%
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Social Mentions */}
                    <div className="flex justify-between text-xs pt-3 border-t border-slate-700">
                      {narrative.mentions.map((mention) => (
                        <div key={mention.platform} className="text-slate-400">
                          {mention.platform}: <span className="font-semibold text-slate-200">{mention.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detail Panel */}
          <div>
            <h2 className="text-xl font-bold mb-4">Sentiment Analysis</h2>
            {selectedNarrative ? (
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5 space-y-4">
                <div>
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    {selectedNarrative.name}
                  </h3>
                </div>

                {/* Twitter Trend Sparkline */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <label className="text-sm font-semibold">Twitter/X Activity</label>
                  </div>
                  <div className="bg-slate-900/50 rounded p-3 mb-2">
                    <div className="flex items-end justify-between h-12 gap-1">
                      {selectedNarrative.twitterTrend.map((val, idx) => (
                        <div
                          key={idx}
                          className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-400 rounded-t"
                          style={{ height: `${(val / 100) * 100}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">
                    {selectedNarrative.mentions[0].count} tweets (7d avg)
                  </div>
                </div>

                {/* Sentiment Metrics */}
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-slate-400 block mb-2">Reddit Activity</label>
                    <div className="bg-slate-900/50 rounded p-3">
                      <div className="text-2xl font-bold text-orange-400">
                        {selectedNarrative.redditActivity}
                      </div>
                      <div className="text-xs text-slate-400">posts in past 7d</div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-slate-400 block mb-2">Developer Activity</label>
                    <div className="bg-slate-900/50 rounded p-3 flex items-center gap-3">
                      <Github className="w-4 h-4 text-purple-400" />
                      <div>
                        <div className="text-2xl font-bold text-purple-400">
                          {selectedNarrative.githubCommits}
                        </div>
                        <div className="text-xs text-slate-400">commits/repos</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-slate-400 block mb-2">VC Funding Activity</label>
                    <div className="bg-slate-900/50 rounded p-3">
                      <div className="text-2xl font-bold text-green-400">
                        ${selectedNarrative.vcFunding}M
                      </div>
                      <div className="text-xs text-slate-400">30d funding volume</div>
                    </div>
                  </div>
                </div>

                {/* Rotation Signal */}
                <div className="bg-slate-900/50 rounded p-3 border border-slate-600">
                  <label className="text-sm font-semibold block mb-2">Rotation Signal</label>
                  <div className="text-sm text-slate-300">
                    {selectedNarrative.rotation === 'early' && (
                      <span className="text-yellow-400">
                        🔥 Just entering trend cycle - high risk/high reward
                      </span>
                    )}
                    {selectedNarrative.rotation === 'mid' && (
                      <span className="text-green-400">
                        📈 Mid-cycle - sustained momentum expected
                      </span>
                    )}
                    {selectedNarrative.rotation === 'late' && (
                      <span className="text-orange-400">
                        ⚠️ Late cycle - watch for signs of exhaustion
                      </span>
                    )}
                    {selectedNarrative.rotation === 'exhausted' && (
                      <span className="text-red-400">
                        ❄️ Exhausted - rotation likely, avoid entries
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5 text-center text-slate-400">
                Select a narrative to view detailed sentiment analysis
              </div>
            )}
          </div>
        </div>

        {/* Rotation Timeline */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">30-Day Rotation Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {narratives.slice(0, 4).map((narrative) => (
              <div key={narrative.id} className="bg-slate-900/50 rounded p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{narrative.emoji}</span>
                  <h3 className="font-semibold">{narrative.name}</h3>
                </div>
                <div className="flex gap-1 h-6 items-end">
                  {narrative.twitterTrend.map((val, idx) => (
                    <div
                      key={idx}
                      className="flex-1 rounded-sm bg-gradient-to-t from-cyan-500/80 to-blue-400/80"
                      style={{ height: `${(val / 100) * 100}%`, minHeight: '2px' }}
                      title={`${val}°`}
                    />
                  ))}
                </div>
                <div className="text-xs text-slate-400 mt-2">Trend: {narrative.momentum}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
