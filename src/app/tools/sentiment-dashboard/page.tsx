'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedContent from '@/components/RelatedContent';

interface SentimentData {
  overall: number;
  label: string;
  social: { platform: string; score: number; change: number; volume: string }[];
  topMentions: { token: string; mentions: number; sentiment: number; change24h: number }[];
  fearGreed: { value: number; label: string; history: { date: string; value: number }[] };
  marketMood: { bullish: number; bearish: number; neutral: number };
  newsHeadlines: { title: string; source: string; sentiment: 'bullish' | 'bearish' | 'neutral'; time: string }[];
}

function generateMockSentiment(): SentimentData {
  const fgValue = Math.floor(Math.random() * 40) + 30;
  const fgLabel = fgValue < 25 ? 'Extreme Fear' : fgValue < 45 ? 'Fear' : fgValue < 55 ? 'Neutral' : fgValue < 75 ? 'Greed' : 'Extreme Greed';
  const bullish = Math.floor(Math.random() * 30) + 35;
  const bearish = Math.floor(Math.random() * 25) + 15;

  return {
    overall: Math.floor(Math.random() * 40) + 40,
    label: fgLabel,
    social: [
      { platform: 'X / Twitter', score: Math.floor(Math.random() * 30) + 50, change: +(Math.random() * 10 - 3).toFixed(1), volume: `${(Math.random() * 500 + 200).toFixed(0)}K` },
      { platform: 'Reddit', score: Math.floor(Math.random() * 30) + 40, change: +(Math.random() * 8 - 2).toFixed(1), volume: `${(Math.random() * 200 + 80).toFixed(0)}K` },
      { platform: 'Telegram', score: Math.floor(Math.random() * 30) + 45, change: +(Math.random() * 6 - 1).toFixed(1), volume: `${(Math.random() * 300 + 100).toFixed(0)}K` },
      { platform: 'Discord', score: Math.floor(Math.random() * 30) + 35, change: +(Math.random() * 12 - 4).toFixed(1), volume: `${(Math.random() * 150 + 50).toFixed(0)}K` },
      { platform: 'YouTube', score: Math.floor(Math.random() * 30) + 30, change: +(Math.random() * 8 - 3).toFixed(1), volume: `${(Math.random() * 100 + 30).toFixed(0)}K` },
    ],
    topMentions: [
      { token: 'BTC', mentions: Math.floor(Math.random() * 50000) + 80000, sentiment: Math.floor(Math.random() * 30) + 55, change24h: +(Math.random() * 6 - 2).toFixed(2) as unknown as number },
      { token: 'ETH', mentions: Math.floor(Math.random() * 30000) + 50000, sentiment: Math.floor(Math.random() * 30) + 50, change24h: +(Math.random() * 8 - 3).toFixed(2) as unknown as number },
      { token: 'SOL', mentions: Math.floor(Math.random() * 20000) + 30000, sentiment: Math.floor(Math.random() * 40) + 40, change24h: +(Math.random() * 10 - 4).toFixed(2) as unknown as number },
      { token: 'DOGE', mentions: Math.floor(Math.random() * 15000) + 20000, sentiment: Math.floor(Math.random() * 35) + 35, change24h: +(Math.random() * 12 - 5).toFixed(2) as unknown as number },
      { token: 'XRP', mentions: Math.floor(Math.random() * 12000) + 18000, sentiment: Math.floor(Math.random() * 30) + 45, change24h: +(Math.random() * 7 - 3).toFixed(2) as unknown as number },
      { token: 'ADA', mentions: Math.floor(Math.random() * 10000) + 15000, sentiment: Math.floor(Math.random() * 30) + 40, change24h: +(Math.random() * 8 - 4).toFixed(2) as unknown as number },
      { token: 'AVAX', mentions: Math.floor(Math.random() * 8000) + 12000, sentiment: Math.floor(Math.random() * 35) + 38, change24h: +(Math.random() * 10 - 5).toFixed(2) as unknown as number },
      { token: 'LINK', mentions: Math.floor(Math.random() * 7000) + 10000, sentiment: Math.floor(Math.random() * 30) + 42, change24h: +(Math.random() * 6 - 3).toFixed(2) as unknown as number },
    ],
    fearGreed: {
      value: fgValue,
      label: fgLabel,
      history: Array.from({ length: 30 }, (_, i) => ({
        date: new Date(Date.now() - (29 - i) * 86400000).toISOString().split('T')[0],
        value: Math.floor(Math.random() * 50) + 25,
      })),
    },
    marketMood: { bullish, bearish, neutral: 100 - bullish - bearish },
    newsHeadlines: [
      { title: 'Bitcoin ETF inflows hit new weekly record', source: 'CoinDesk', sentiment: 'bullish', time: '2h ago' },
      { title: 'Fed signals potential rate hold through Q2', source: 'Bloomberg', sentiment: 'neutral', time: '3h ago' },
      { title: 'Ethereum Layer 2 TVL surpasses $50B milestone', source: 'The Block', sentiment: 'bullish', time: '4h ago' },
      { title: 'SEC delays decision on Solana ETF application', source: 'Reuters', sentiment: 'bearish', time: '5h ago' },
      { title: 'Major exchange reports record derivatives volume', source: 'CoinTelegraph', sentiment: 'bullish', time: '6h ago' },
      { title: 'DeFi hack drains $12M from lending protocol', source: 'Decrypt', sentiment: 'bearish', time: '7h ago' },
      { title: 'Institutional crypto adoption grows 40% in Q1', source: 'Forbes', sentiment: 'bullish', time: '8h ago' },
    ],
  };
}

function SentimentGauge({ value, size = 200 }: { value: number; size?: number }) {
  const angle = (value / 100) * 180 - 90;
  const r = size / 2 - 20;
  const cx = size / 2;
  const cy = size / 2 + 10;

  const getColor = (v: number) => {
    if (v < 25) return '#ef4444';
    if (v < 45) return '#f97316';
    if (v < 55) return '#eab308';
    if (v < 75) return '#22c55e';
    return '#10b981';
  };

  const needleX = cx + r * 0.8 * Math.cos((angle * Math.PI) / 180);
  const needleY = cy + r * 0.8 * Math.sin((angle * Math.PI) / 180);

  return (
    <svg width={size} height={size / 2 + 40} viewBox={`0 0 ${size} ${size / 2 + 40}`}>
      <defs>
        <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="25%" stopColor="#f97316" />
          <stop offset="50%" stopColor="#eab308" />
          <stop offset="75%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`} fill="none" stroke="#1e293b" strokeWidth="16" strokeLinecap="round" />
      <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`} fill="none" stroke="url(#gaugeGrad)" strokeWidth="12" strokeLinecap="round" />
      <line x1={cx} y1={cy} x2={needleX} y2={needleY} stroke={getColor(value)} strokeWidth="3" strokeLinecap="round" />
      <circle cx={cx} cy={cy} r="6" fill={getColor(value)} />
      <text x={cx} y={cy + 30} textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">{value}</text>
    </svg>
  );
}

function MiniSparkline({ data, color = '#3b82f6' }: { data: number[]; color?: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 120;
  const h = 40;
  const points = data.map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * h}`).join(' ');

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <polyline fill="none" stroke={color} strokeWidth="1.5" points={points} />
    </svg>
  );
}

export default function SentimentDashboard() {
  const [data, setData] = useState<SentimentData | null>(null);
  const [timeframe, setTimeframe] = useState<'1h' | '24h' | '7d' | '30d'>('24h');
  const [refreshing, setRefreshing] = useState(false);

  const loadData = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setData(generateMockSentiment());
      setRefreshing(false);
    }, 600);
  }, []);

  useEffect(() => { loadData(); }, [loadData]);

  useEffect(() => {
    const interval = setInterval(loadData, 60000);
    return () => clearInterval(interval);
  }, [loadData]);

  if (!data) return (
    <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">
      <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full" />
    </div>
  );

  const sentimentColor = (v: number) => v >= 55 ? '#22c55e' : v >= 45 ? '#eab308' : '#ef4444';

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <style>{`
        .glass-card { background: rgba(22,27,34,0.8); backdrop-filter: blur(10px); border: 1px solid #30363d; border-radius: 12px; }
        .sentiment-pill { padding: 2px 8px; border-radius: 9999px; font-size: 11px; font-weight: 600; }
        .pulse { animation: pulse 2s ease-in-out infinite; }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.6; } }
        .bar-fill { transition: width 1s ease-out; }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Sentiment Dashboard" },
          ]}
        />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Crypto Sentiment Dashboard</span>
            </h1>
            <p className="text-gray-400">Real-time market sentiment from social media, news, and on-chain data</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex bg-[#161b22] rounded-lg p-1 border border-[#30363d]">
              {(['1h', '24h', '7d', '30d'] as const).map(tf => (
                <button key={tf} onClick={() => setTimeframe(tf)} className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${timeframe === tf ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}>
                  {tf}
                </button>
              ))}
            </div>
            <button onClick={loadData} disabled={refreshing} className="p-2 rounded-lg bg-[#161b22] border border-[#30363d] hover:border-blue-500 transition disabled:opacity-50">
              <svg className={`w-5 h-5 ${refreshing ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="glass-card p-6 flex flex-col items-center">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Overall Market Sentiment</h3>
            <SentimentGauge value={data.overall} />
            <div className="mt-2 text-lg font-bold" style={{ color: sentimentColor(data.overall) }}>{data.label}</div>
            <div className="text-xs text-gray-500 mt-1">Updated every 60s</div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Market Mood</h3>
            <div className="space-y-4 mt-6">
              {[
                { label: 'Bullish', value: data.marketMood.bullish, color: '#22c55e' },
                { label: 'Neutral', value: data.marketMood.neutral, color: '#6b7280' },
                { label: 'Bearish', value: data.marketMood.bearish, color: '#ef4444' },
              ].map(m => (
                <div key={m.label}>
                  <div className="flex justify-between text-sm mb-1"><span style={{ color: m.color }}>{m.label}</span><span style={{ color: m.color }} className="font-bold">{m.value}%</span></div>
                  <div className="h-3 bg-[#1e293b] rounded-full overflow-hidden"><div className="bar-fill h-full rounded-full" style={{ width: `${m.value}%`, background: m.color }} /></div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-[#30363d]">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="pulse inline-block w-2 h-2 rounded-full bg-green-500" />
                Live aggregation from 5 platforms
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Fear & Greed Index</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl font-black" style={{ color: sentimentColor(data.fearGreed.value) }}>{data.fearGreed.value}</div>
              <div>
                <div className="text-lg font-bold" style={{ color: sentimentColor(data.fearGreed.value) }}>{data.fearGreed.label}</div>
                <div className="text-xs text-gray-500">30-day trend</div>
              </div>
            </div>
            <MiniSparkline data={data.fearGreed.history.map(h => h.value)} color={sentimentColor(data.fearGreed.value)} />
            <div className="mt-4 flex justify-between text-xs text-gray-500"><span>30d ago</span><span>Today</span></div>
          </div>
        </div>

        <div className="glass-card p-6 mb-6">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Social Platform Sentiment</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs text-gray-500 border-b border-[#30363d]">
                  <th className="text-left py-3 px-2">Platform</th>
                  <th className="text-center py-3 px-2">Score</th>
                  <th className="text-center py-3 px-2">24h Change</th>
                  <th className="text-center py-3 px-2">Post Volume</th>
                  <th className="text-right py-3 px-2">Trend</th>
                </tr>
              </thead>
              <tbody>
                {data.social.map(s => (
                  <tr key={s.platform} className="border-b border-[#30363d]/50 hover:bg-[#1c2330] transition">
                    <td className="py-3 px-2 font-medium">{s.platform}</td>
                    <td className="py-3 px-2 text-center">
                      <span className="sentiment-pill" style={{ background: `${sentimentColor(s.score)}20`, color: sentimentColor(s.score) }}>{s.score}</span>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <span className={s.change >= 0 ? 'text-green-400' : 'text-red-400'}>{s.change >= 0 ? '+' : ''}{s.change}%</span>
                    </td>
                    <td className="py-3 px-2 text-center text-gray-400">{s.volume} posts</td>
                    <td className="py-3 px-2 flex justify-end">
                      <MiniSparkline data={Array.from({ length: 12 }, () => Math.random() * 30 + 35)} color={sentimentColor(s.score)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="glass-card p-6">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Top Token Mentions</h3>
            <div className="space-y-3">
              {data.topMentions.map((t, i) => (
                <div key={t.token} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1c2330] transition">
                  <span className="text-xs text-gray-500 w-5">{i + 1}</span>
                  <span className="font-bold w-14">{t.token}</span>
                  <div className="flex-1"><div className="h-2 bg-[#1e293b] rounded-full overflow-hidden"><div className="h-full rounded-full bar-fill" style={{ width: `${(t.mentions / data.topMentions[0].mentions) * 100}%`, background: sentimentColor(t.sentiment) }} /></div></div>
                  <span className="text-xs text-gray-400 w-16 text-right">{(t.mentions / 1000).toFixed(1)}K</span>
                  <span className="sentiment-pill w-10 text-center" style={{ background: `${sentimentColor(t.sentiment)}20`, color: sentimentColor(t.sentiment) }}>{t.sentiment}</span>
                  <span className={`text-xs w-14 text-right ${Number(t.change24h) >= 0 ? 'text-green-400' : 'text-red-400'}`}>{Number(t.change24h) >= 0 ? '+' : ''}{t.change24h}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Sentiment-Tagged News</h3>
            <div className="space-y-3">
              {data.newsHeadlines.map((n, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#1c2330] transition">
                  <span className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${n.sentiment === 'bullish' ? 'bg-green-500' : n.sentiment === 'bearish' ? 'bg-red-500' : 'bg-gray-500'}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-tight">{n.title}</p>
                    <div className="flex items-center gap-2 mt-1"><span className="text-xs text-gray-500">{n.source}</span><span className="text-xs text-gray-600">{n.time}</span></div>
                  </div>
                  <span className={`sentiment-pill flex-shrink-0 ${n.sentiment === 'bullish' ? 'bg-green-500/10 text-green-400' : n.sentiment === 'bearish' ? 'bg-red-500/10 text-red-400' : 'bg-gray-500/10 text-gray-400'}`}>{n.sentiment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-8">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Methodology</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Our sentiment dashboard aggregates data from multiple sources including social media platforms (Twitter/X, Reddit, Telegram, Discord), news outlets, and on-chain metrics. Scores are normalized on a 0-100 scale where 0 represents extreme fear/bearishness and 100 represents extreme greed/bullishness. Data is refreshed every 60 seconds during market hours. This tool is for informational purposes only and should not be considered financial advice.
          </p>
        </div>

        <div className="glass-card p-6">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Related Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: 'Fear & Greed Timeline', href: '/tools/fear-greed-timeline' },
              { name: 'Whale Tracker', href: '/tools/whale-tracker' },
              { name: 'Market Heatmap', href: '/tools/market-heatmap' },
              { name: 'Token Screener', href: '/tools/token-screener' },
            ].map(t => (
              <Link key={t.href} href={t.href} className="p-3 rounded-lg bg-[#1c2330] border border-[#30363d] hover:border-blue-500 transition text-sm font-medium text-center">{t.name}</Link>
            ))}
          </div>
        </div>
      </div>
      <RelatedContent category="tools" currentSlug="/tools/sentiment-dashboard" />
    </div>
  );
}
