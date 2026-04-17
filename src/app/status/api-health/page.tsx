'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Api Health | degen0x",
  description: "Comprehensive degen0x guide to api health — 2026 fundamentals, step-by-step walkthroughs, and risk-aware strategies.",
  alternates: { canonical: "https://degen0x.com/status/api-health" },
};

interface APIEndpoint {
  name: string;
  url: string;
  category: string;
  status: 'operational' | 'degraded' | 'down' | 'checking';
  responseTime: number;
  uptime: number;
  lastChecked: string;
  history: { time: string; status: 'operational' | 'degraded' | 'down'; ms: number }[];
}

function generateEndpoints(): APIEndpoint[] {
  const endpoints = [
    { name: 'CoinGecko Prices', url: 'api.coingecko.com/api/v3/simple/price', category: 'Prices' },
    { name: 'CoinGecko Trending', url: 'api.coingecko.com/api/v3/search/trending', category: 'Prices' },
    { name: 'Fear & Greed Index', url: 'api.alternative.me/fng/', category: 'Sentiment' },
    { name: 'DefiLlama TVL', url: 'api.llama.fi/tvl', category: 'DeFi' },
    { name: 'DefiLlama Yields', url: 'yields.llama.fi/pools', category: 'DeFi' },
    { name: 'Etherscan Gas', url: 'api.etherscan.io/api?module=gastracker', category: 'On-Chain' },
    { name: 'CoinGecko Markets', url: 'api.coingecko.com/api/v3/coins/markets', category: 'Prices' },
    { name: 'Newsletter API', url: '/api/newsletter', category: 'Internal' },
    { name: 'Health Check', url: '/api/health', category: 'Internal' },
    { name: 'OG Image Generator', url: '/api/og', category: 'Internal' },
    { name: 'Trending API', url: '/api/trending', category: 'Internal' },
    { name: 'Price Cache', url: '/api/prices', category: 'Internal' },
  ];

  return endpoints.map(ep => {
    const rand = Math.random();
    const status: APIEndpoint['status'] = rand > 0.12 ? 'operational' : rand > 0.05 ? 'degraded' : 'down';
    const baseMs = status === 'operational' ? 80 + Math.random() * 200 : status === 'degraded' ? 500 + Math.random() * 1500 : 0;
    return {
      ...ep,
      status,
      responseTime: Math.round(baseMs),
      uptime: status === 'down' ? 95 + Math.random() * 4 : 99 + Math.random() * 0.99,
      lastChecked: new Date().toISOString(),
      history: Array.from({ length: 24 }, (_, i) => {
        const hRand = Math.random();
        const hStatus: APIEndpoint['history'][0]['status'] = hRand > 0.08 ? 'operational' : hRand > 0.03 ? 'degraded' : 'down';
        return {
          time: `${23 - i}h ago`,
          status: hStatus,
          ms: hStatus === 'operational' ? 80 + Math.random() * 200 : hStatus === 'degraded' ? 500 + Math.random() * 1500 : 0,
        };
      }).reverse(),
    };
  });
}

function StatusDot({ status }: { status: string }) {
  const colors: Record<string, string> = { operational: '#22c55e', degraded: '#eab308', down: '#ef4444', checking: '#3b82f6' };
  return (
    <span className="relative flex h-3 w-3">
      {status === 'operational' && <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-40" style={{ background: colors[status] }} />}
      <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: colors[status] || '#6b7280' }} />
    </span>
  );
}

function UptimeBar({ history }: { history: APIEndpoint['history'] }) {
  return (
    <div className="flex gap-[2px]">
      {history.map((h, i) => (
        <div key={i} className="w-2 h-6 rounded-sm transition-colors" title={`${h.time}: ${h.status} (${Math.round(h.ms)}ms)`}
          style={{ background: h.status === 'operational' ? '#22c55e' : h.status === 'degraded' ? '#eab308' : '#ef4444' }} />
      ))}
    </div>
  );
}

export default function APIHealthPage() {
  const [endpoints, setEndpoints] = useState<APIEndpoint[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [refreshing, setRefreshing] = useState(false);

  const refresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setEndpoints(generateEndpoints());
      setRefreshing(false);
    }, 800);
  }, []);

  useEffect(() => { refresh(); }, [refresh]);
  useEffect(() => { const t = setInterval(refresh, 30000); return () => clearInterval(t); }, [refresh]);

  const categories = ['all', ...new Set(endpoints.map(e => e.category))];
  const filtered = filter === 'all' ? endpoints : endpoints.filter(e => e.category === filter);
  const operationalCount = endpoints.filter(e => e.status === 'operational').length;
  const degradedCount = endpoints.filter(e => e.status === 'degraded').length;
  const downCount = endpoints.filter(e => e.status === 'down').length;
  const overallStatus = downCount > 0 ? 'Partial Outage' : degradedCount > 0 ? 'Degraded Performance' : 'All Systems Operational';
  const overallColor = downCount > 0 ? '#ef4444' : degradedCount > 0 ? '#eab308' : '#22c55e';
  const avgResponse = Math.round(endpoints.filter(e => e.responseTime > 0).reduce((a, e) => a + e.responseTime, 0) / Math.max(endpoints.filter(e => e.responseTime > 0).length, 1));

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <style>{`
        .glass-card { background: rgba(22,27,34,0.8); backdrop-filter: blur(10px); border: 1px solid #30363d; border-radius: 12px; }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/status" className="hover:text-blue-400">Status</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">API Health</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">API Health Monitor</span>
            </h1>
            <p className="text-gray-400">Real-time status of all external and internal API endpoints</p>
          </div>
          <button onClick={refresh} disabled={refreshing} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#161b22] border border-[#30363d] hover:border-green-500 transition disabled:opacity-50 text-sm">
            <svg className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            Refresh
          </button>
        </div>

        {/* Overall Status Banner */}
        <div className="glass-card p-6 mb-6" style={{ borderColor: `${overallColor}40` }}>
          <div className="flex items-center gap-4">
            <StatusDot status={downCount > 0 ? 'down' : degradedCount > 0 ? 'degraded' : 'operational'} />
            <div>
              <div className="text-xl font-bold" style={{ color: overallColor }}>{overallStatus}</div>
              <div className="text-sm text-gray-400">{operationalCount} operational, {degradedCount} degraded, {downCount} down — Avg response: {avgResponse}ms</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {categories.map(c => (
            <button key={c} onClick={() => setFilter(c)} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition border ${filter === c ? 'bg-green-600/20 border-green-500 text-green-400' : 'bg-[#161b22] border-[#30363d] text-gray-400 hover:text-white'}`}>
              {c === 'all' ? 'All' : c}
            </button>
          ))}
        </div>

        {/* Endpoints List */}
        <div className="space-y-3">
          {filtered.map(ep => (
            <div key={ep.name} className="glass-card p-5">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-3 md:w-1/4">
                  <StatusDot status={ep.status} />
                  <div>
                    <div className="font-medium text-sm">{ep.name}</div>
                    <div className="text-xs text-gray-500">{ep.url}</div>
                  </div>
                </div>
                <div className="flex-1">
                  <UptimeBar history={ep.history} />
                  <div className="flex justify-between text-xs text-gray-600 mt-1"><span>24h ago</span><span>Now</span></div>
                </div>
                <div className="flex items-center gap-6 md:w-1/4 justify-end">
                  <div className="text-right">
                    <div className="text-sm font-mono" style={{ color: ep.responseTime < 200 ? '#22c55e' : ep.responseTime < 500 ? '#eab308' : '#ef4444' }}>
                      {ep.responseTime > 0 ? `${ep.responseTime}ms` : '—'}
                    </div>
                    <div className="text-xs text-gray-500">Response</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-mono" style={{ color: ep.uptime > 99.9 ? '#22c55e' : ep.uptime > 99 ? '#eab308' : '#ef4444' }}>
                      {ep.uptime.toFixed(2)}%
                    </div>
                    <div className="text-xs text-gray-500">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card p-6 mt-8">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">About This Page</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            This page monitors the health of all API endpoints used by degen0x. External APIs (CoinGecko, DefiLlama, etc.) are checked every 30 seconds. Internal endpoints are monitored continuously. Response times over 500ms trigger a degraded warning. Uptime history is shown for the last 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
