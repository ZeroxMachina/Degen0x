'use client';

import { useState, useMemo, useCallback } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedContent from '@/components/RelatedContent';

/* ──────────────── Types ──────────────── */
interface CoinData {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  marketCap: number;       // billions
  price: number;
  change1h: number;
  change24h: number;
  change7d: number;
  change30d: number;
  volume24h: number;       // billions
  sector: string;
}

type TimeFrame = '1h' | '24h' | '7d' | '30d';
type SortMode = 'marketCap' | 'change' | 'volume';

/* ──────────────── Data ──────────────── */
const SECTORS = [
  'Layer 1', 'Layer 2', 'DeFi', 'Meme', 'AI', 'Gaming',
  'Exchange', 'Privacy', 'Storage', 'Oracle', 'RWA',
] as const;

function seed(s: number): () => number {
  let x = s;
  return () => { x = (x * 16807 + 0) % 2147483647; return (x - 1) / 2147483646; };
}

function generateCoins(): CoinData[] {
  const rng = seed(42);
  const r = (min: number, max: number) => min + rng() * (max - min);

  const coins: Omit<CoinData, 'change1h' | 'change24h' | 'change7d' | 'change30d'>[] = [
    { id: 'btc', name: 'Bitcoin', symbol: 'BTC', icon: '₿', marketCap: 1720, price: 86420, volume24h: 38.2, sector: 'Layer 1' },
    { id: 'eth', name: 'Ethereum', symbol: 'ETH', icon: 'Ξ', marketCap: 420, price: 3480, volume24h: 18.5, sector: 'Layer 1' },
    { id: 'sol', name: 'Solana', symbol: 'SOL', icon: '◎', marketCap: 98, price: 198, volume24h: 4.8, sector: 'Layer 1' },
    { id: 'bnb', name: 'BNB', symbol: 'BNB', icon: '⬡', marketCap: 92, price: 612, volume24h: 2.1, sector: 'Exchange' },
    { id: 'xrp', name: 'XRP', symbol: 'XRP', icon: '✕', marketCap: 82, price: 1.52, volume24h: 3.4, sector: 'Layer 1' },
    { id: 'ada', name: 'Cardano', symbol: 'ADA', icon: '₳', marketCap: 32, price: 0.89, volume24h: 1.2, sector: 'Layer 1' },
    { id: 'avax', name: 'Avalanche', symbol: 'AVAX', icon: '🔺', marketCap: 22, price: 52, volume24h: 0.9, sector: 'Layer 1' },
    { id: 'dot', name: 'Polkadot', symbol: 'DOT', icon: '●', marketCap: 12, price: 8.6, volume24h: 0.5, sector: 'Layer 1' },
    { id: 'link', name: 'Chainlink', symbol: 'LINK', icon: '⬡', marketCap: 14.5, price: 24.3, volume24h: 0.8, sector: 'Oracle' },
    { id: 'uni', name: 'Uniswap', symbol: 'UNI', icon: '🦄', marketCap: 8.2, price: 13.8, volume24h: 0.4, sector: 'DeFi' },
    { id: 'aave', name: 'Aave', symbol: 'AAVE', icon: '👻', marketCap: 5.8, price: 388, volume24h: 0.35, sector: 'DeFi' },
    { id: 'mkr', name: 'Maker', symbol: 'MKR', icon: '⬟', marketCap: 3.2, price: 3450, volume24h: 0.15, sector: 'DeFi' },
    { id: 'matic', name: 'Polygon', symbol: 'POL', icon: '⬟', marketCap: 7.8, price: 0.78, volume24h: 0.45, sector: 'Layer 2' },
    { id: 'arb', name: 'Arbitrum', symbol: 'ARB', icon: '🔵', marketCap: 4.5, price: 1.32, volume24h: 0.35, sector: 'Layer 2' },
    { id: 'op', name: 'Optimism', symbol: 'OP', icon: '🔴', marketCap: 3.8, price: 3.45, volume24h: 0.25, sector: 'Layer 2' },
    { id: 'stx', name: 'Stacks', symbol: 'STX', icon: '⬡', marketCap: 2.8, price: 1.92, volume24h: 0.12, sector: 'Layer 2' },
    { id: 'doge', name: 'Dogecoin', symbol: 'DOGE', icon: '🐕', marketCap: 28, price: 0.192, volume24h: 2.1, sector: 'Meme' },
    { id: 'shib', name: 'Shiba Inu', symbol: 'SHIB', icon: '🐕‍🦺', marketCap: 11, price: 0.0000186, volume24h: 0.8, sector: 'Meme' },
    { id: 'pepe', name: 'Pepe', symbol: 'PEPE', icon: '🐸', marketCap: 5.8, price: 0.0000138, volume24h: 1.2, sector: 'Meme' },
    { id: 'wif', name: 'dogwifhat', symbol: 'WIF', icon: '🎩', marketCap: 2.8, price: 2.82, volume24h: 0.6, sector: 'Meme' },
    { id: 'bonk', name: 'Bonk', symbol: 'BONK', icon: '🦴', marketCap: 1.9, price: 0.0000285, volume24h: 0.4, sector: 'Meme' },
    { id: 'fet', name: 'Fetch.ai', symbol: 'FET', icon: '🤖', marketCap: 6.2, price: 2.42, volume24h: 0.55, sector: 'AI' },
    { id: 'render', name: 'Render', symbol: 'RENDER', icon: '🎨', marketCap: 5.1, price: 9.85, volume24h: 0.42, sector: 'AI' },
    { id: 'rndr', name: 'Ocean Protocol', symbol: 'OCEAN', icon: '🌊', marketCap: 1.8, price: 1.24, volume24h: 0.08, sector: 'AI' },
    { id: 'tao', name: 'Bittensor', symbol: 'TAO', icon: '🧠', marketCap: 4.2, price: 620, volume24h: 0.18, sector: 'AI' },
    { id: 'imx', name: 'Immutable', symbol: 'IMX', icon: '🎮', marketCap: 3.2, price: 2.15, volume24h: 0.12, sector: 'Gaming' },
    { id: 'gala', name: 'Gala', symbol: 'GALA', icon: '🎰', marketCap: 1.5, price: 0.042, volume24h: 0.15, sector: 'Gaming' },
    { id: 'axs', name: 'Axie Infinity', symbol: 'AXS', icon: '⚔️', marketCap: 1.2, price: 8.9, volume24h: 0.08, sector: 'Gaming' },
    { id: 'sand', name: 'The Sandbox', symbol: 'SAND', icon: '🏖️', marketCap: 1.4, price: 0.62, volume24h: 0.1, sector: 'Gaming' },
    { id: 'xmr', name: 'Monero', symbol: 'XMR', icon: 'ɱ', marketCap: 5.2, price: 285, volume24h: 0.15, sector: 'Privacy' },
    { id: 'zec', name: 'Zcash', symbol: 'ZEC', icon: 'ⓩ', marketCap: 0.9, price: 55, volume24h: 0.06, sector: 'Privacy' },
    { id: 'fil', name: 'Filecoin', symbol: 'FIL', icon: '📁', marketCap: 4.1, price: 7.85, volume24h: 0.22, sector: 'Storage' },
    { id: 'ar', name: 'Arweave', symbol: 'AR', icon: '♾️', marketCap: 1.8, price: 28, volume24h: 0.08, sector: 'Storage' },
    { id: 'ondo', name: 'Ondo Finance', symbol: 'ONDO', icon: '🏦', marketCap: 3.5, price: 2.48, volume24h: 0.22, sector: 'RWA' },
    { id: 'mantra', name: 'MANTRA', symbol: 'OM', icon: '🕉️', marketCap: 2.1, price: 2.38, volume24h: 0.12, sector: 'RWA' },
  ];

  return coins.map((c) => ({
    ...c,
    change1h: Math.round((r(-3, 3)) * 100) / 100,
    change24h: Math.round((r(-12, 12)) * 100) / 100,
    change7d: Math.round((r(-25, 25)) * 100) / 100,
    change30d: Math.round((r(-40, 40)) * 100) / 100,
  }));
}

/* ──────────────── Color Helpers ──────────────── */
function changeColor(val: number, alpha = 1): string {
  if (val > 0) {
    const intensity = Math.min(val / 15, 1);
    return `rgba(34, 197, 94, ${0.15 + intensity * 0.85 * alpha})`;
  };
  const intensity = Math.min(Math.abs(val) / 15, 1);
  return `rgba(239, 68, 68, ${0.15 + intensity * 0.85 * alpha})`;
}

function textColor(val: number): string {
  return val >= 0 ? '#22c55e' : '#ef4444';
}

function formatMcap(b: number): string {
  if (b >= 1000) return `$${(b / 1000).toFixed(1)}T`;
  if (b >= 1) return `$${b.toFixed(1)}B`;
  return `$${(b * 1000).toFixed(0)}M`;
}

/* ──────────────── Component ──────────────── */
export default function MarketHeatmapPage() {
  const allCoins = useMemo(() => generateCoins(), []);
  const [timeframe, setTimeframe] = useState<TimeFrame>('24h');
  const [sortMode, setSortMode] = useState<SortMode>('marketCap');
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [hoveredCoin, setHoveredCoin] = useState<CoinData | null>(null);

  const getChange = useCallback((c: CoinData) => {
    switch (timeframe) {
      case '1h': return c.change1h;
      case '24h': return c.change24h;
      case '7d': return c.change7d;
      case '30d': return c.change30d;
    }
  }, [timeframe]);

  const filteredCoins = useMemo(() => {
    let coins = selectedSector === 'All' ? allCoins : allCoins.filter(c => c.sector === selectedSector);
    if (sortMode === 'change') coins = [...coins].sort((a, b) => Math.abs(getChange(b)) - Math.abs(getChange(a)));
    else if (sortMode === 'volume') coins = [...coins].sort((a, b) => b.volume24h - a.volume24h);
    else coins = [...coins].sort((a, b) => b.marketCap - a.marketCap);
    return coins;
  }, [allCoins, selectedSector, sortMode, getChange]);

  const totalMcap = useMemo(() => filteredCoins.reduce((s, c) => s + c.marketCap, 0), [filteredCoins]);

  // Sector aggregates
  const sectorStats = useMemo(() => {
    const map: Record<string, { mcap: number; avgChange: number; count: number }> = {};
    for (const c of allCoins) {
      if (!map[c.sector]) map[c.sector] = { mcap: 0, avgChange: 0, count: 0 };
      map[c.sector].mcap += c.marketCap;
      map[c.sector].avgChange += getChange(c);
      map[c.sector].count += 1;
    }
    for (const k of Object.keys(map)) map[k].avgChange /= map[k].count;
    return map;
  }, [allCoins, getChange]);

  const avgChange = useMemo(() => {
    if (!filteredCoins.length) return 0;
    return filteredCoins.reduce((s, c) => s + getChange(c), 0) / filteredCoins.length;
  }, [filteredCoins, getChange]);

  const gainers = useMemo(() => filteredCoins.filter(c => getChange(c) > 0).length, [filteredCoins, getChange]);
  const losers = useMemo(() => filteredCoins.filter(c => getChange(c) < 0).length, [filteredCoins, getChange]);

  return (
    <main className="min-h-screen bg-[#0d1117] text-gray-100 pb-20">
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/tools' },
          { label: 'Market Heatmap' },
        ]} />

        {/* Header */}
        <div className="mt-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Crypto Market Heatmap
          </h1>
          <p className="text-gray-400 mt-2 max-w-2xl">
            Visual treemap of the crypto market — sized by market cap, colored by performance.
            Spot trends, identify sectors, and find opportunities at a glance.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex bg-[#161b22] border border-gray-700 rounded-lg overflow-hidden">
            {(['1h', '24h', '7d', '30d'] as TimeFrame[]).map(tf => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-4 py-2 text-sm font-bold transition-colors ${
                  timeframe === tf ? 'bg-indigo-600 text-[var(--color-text)]' : 'text-gray-400 hover:text-[var(--color-text)] hover:bg-[#1c2330]'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
          <div className="flex bg-[#161b22] border border-gray-700 rounded-lg overflow-hidden">
            {([['marketCap', 'Mkt Cap'], ['change', 'Change'], ['volume', 'Volume']] as [SortMode, string][]).map(([mode, label]) => (
              <button
                key={mode}
                onClick={() => setSortMode(mode)}
                className={`px-4 py-2 text-sm font-bold transition-colors ${
                  sortMode === mode ? 'bg-cyan-600 text-[var(--color-text)]' : 'text-gray-400 hover:text-[var(--color-text)] hover:bg-[#1c2330]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap bg-[#161b22] border border-gray-700 rounded-lg overflow-hidden">
            {['All', ...SECTORS].map(s => (
              <button
                key={s}
                onClick={() => setSelectedSector(s)}
                className={`px-3 py-2 text-xs font-bold transition-colors ${
                  selectedSector === s ? 'bg-purple-600 text-[var(--color-text)]' : 'text-gray-400 hover:text-[var(--color-text)] hover:bg-[#1c2330]'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Market Summary Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
          <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4">
            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Total Mkt Cap</div>
            <div className="text-xl font-black text-indigo-400 mt-1">{formatMcap(totalMcap)}</div>
          </div>
          <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4">
            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Avg Change ({timeframe})</div>
            <div className="text-xl font-black mt-1" style={{ color: textColor(avgChange) }}>
              {avgChange > 0 ? '+' : ''}{avgChange.toFixed(2)}%
            </div>
          </div>
          <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4">
            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Gainers</div>
            <div className="text-xl font-black text-green-400 mt-1">{gainers}</div>
          </div>
          <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4">
            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Losers</div>
            <div className="text-xl font-black text-red-400 mt-1">{losers}</div>
          </div>
          <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4">
            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Coins Shown</div>
            <div className="text-xl font-black text-cyan-400 mt-1">{filteredCoins.length}</div>
          </div>
        </div>

        {/* Heatmap Treemap */}
        <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4 mb-6">
          <div className="text-sm font-bold text-gray-400 mb-3">
            🗺️ Market Heatmap — sized by market cap, colored by {timeframe} change
          </div>
          <div className="flex flex-wrap gap-1">
            {filteredCoins.map(coin => {
              const change = getChange(coin);
              const weight = coin.marketCap / totalMcap;
              const minPx = 60;
              const maxPx = 280;
              const size = Math.max(minPx, Math.min(maxPx, Math.round(weight * 2000)));
              return (
                <div
                  key={coin.id}
                  className="relative rounded-lg cursor-pointer transition-all hover:scale-[1.02] hover:z-10"
                  style={{
                    width: `${size}px`,
                    height: `${Math.max(60, size * 0.65)}px`,
                    backgroundColor: changeColor(change, 0.85),
                    border: hoveredCoin?.id === coin.id ? '2px solid white' : '1px solid rgba(255,255,255,0.08)',
                    flexGrow: weight > 0.15 ? 2 : weight > 0.05 ? 1.5 : 1,
                  }}
                  onMouseEnter={() => setHoveredCoin(coin)}
                  onMouseLeave={() => setHoveredCoin(null)}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
                    <div className="text-[var(--color-text)] font-black text-sm md:text-base drop-shadow-lg">{coin.symbol}</div>
                    <div className="text-[var(--color-text)]/90 font-bold text-xs drop-shadow" style={{ color: textColor(change) }}>
                      {change > 0 ? '+' : ''}{change.toFixed(1)}%
                    </div>
                    {size > 100 && (
                      <div className="text-[var(--color-text)]/60 text-[10px] mt-0.5">{formatMcap(coin.marketCap)}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {/* Color legend */}
          <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
            <span>-15%</span>
            <div className="flex-1 h-2 rounded-full" style={{
              background: 'linear-gradient(90deg, rgba(239,68,68,0.9), rgba(239,68,68,0.2), rgba(50,50,50,0.3), rgba(34,197,94,0.2), rgba(34,197,94,0.9))'
            }} />
            <span>+15%</span>
          </div>
        </div>

        {/* Hovered Coin Detail */}
        {hoveredCoin && (
          <div className="bg-[#161b22] border border-indigo-500/40 rounded-xl p-5 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{hoveredCoin.icon}</span>
              <div>
                <div className="font-black text-lg">{hoveredCoin.name} <span className="text-gray-500">{hoveredCoin.symbol}</span></div>
                <div className="text-sm text-gray-400">{hoveredCoin.sector}</div>
              </div>
              <div className="ml-auto text-right">
                <div className="text-xl font-black">${hoveredCoin.price < 0.01 ? hoveredCoin.price.toFixed(7) : hoveredCoin.price.toLocaleString()}</div>
                <div className="text-sm font-bold" style={{ color: textColor(getChange(hoveredCoin)) }}>
                  {getChange(hoveredCoin) > 0 ? '+' : ''}{getChange(hoveredCoin).toFixed(2)}% ({timeframe})
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {([['1h', hoveredCoin.change1h], ['24h', hoveredCoin.change24h], ['7d', hoveredCoin.change7d], ['30d', hoveredCoin.change30d]] as [string, number][]).map(([tf, val]) => (
                <div key={tf} className="bg-[#0d1117] rounded-lg p-3">
                  <div className="text-xs text-gray-500">{tf} Change</div>
                  <div className="text-sm font-bold mt-1" style={{ color: textColor(val) }}>
                    {val > 0 ? '+' : ''}{val.toFixed(2)}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sector Performance */}
        <div className="bg-[#161b22] border border-gray-700 rounded-xl p-5 mb-6">
          <h2 className="text-lg font-black mb-4">📊 Sector Performance ({timeframe})</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {Object.entries(sectorStats)
              .sort(([, a], [, b]) => b.avgChange - a.avgChange)
              .map(([sector, stats]) => (
                <button
                  key={sector}
                  onClick={() => setSelectedSector(sector === selectedSector ? 'All' : sector)}
                  className={`rounded-lg p-3 text-left transition-all hover:scale-[1.02] ${
                    selectedSector === sector ? 'ring-2 ring-indigo-500' : ''
                  }`}
                  style={{ backgroundColor: changeColor(stats.avgChange, 0.5) }}
                >
                  <div className="text-xs font-bold text-gray-300">{sector}</div>
                  <div className="text-lg font-black mt-1" style={{ color: textColor(stats.avgChange) }}>
                    {stats.avgChange > 0 ? '+' : ''}{stats.avgChange.toFixed(1)}%
                  </div>
                  <div className="text-[10px] text-gray-500">{stats.count} coins • {formatMcap(stats.mcap)}</div>
                </button>
              ))}
          </div>
        </div>

        {/* Full Table */}
        <div className="bg-[#161b22] border border-gray-700 rounded-xl overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-lg font-black">📋 Detailed Breakdown</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="p-3 text-left">#</th>
                  <th className="p-3 text-left">Coin</th>
                  <th className="p-3 text-left">Sector</th>
                  <th className="p-3 text-right">Price</th>
                  <th className="p-3 text-right">Mkt Cap</th>
                  <th className="p-3 text-right">1h</th>
                  <th className="p-3 text-right">24h</th>
                  <th className="p-3 text-right">7d</th>
                  <th className="p-3 text-right">30d</th>
                  <th className="p-3 text-right">Volume 24h</th>
                </tr>
              </thead>
              <tbody>
                {filteredCoins.map((coin, i) => (
                  <tr key={coin.id} className="border-b border-gray-800 hover:bg-[#1c2330] transition-colors">
                    <td className="p-3 text-gray-500 font-mono">{i + 1}</td>
                    <td className="p-3 font-bold">
                      <span className="mr-2">{coin.icon}</span>
                      {coin.name} <span className="text-gray-500">{coin.symbol}</span>
                    </td>
                    <td className="p-3">
                      <span className="text-xs px-2 py-0.5 rounded bg-[#0d1117] text-gray-400">{coin.sector}</span>
                    </td>
                    <td className="p-3 text-right font-mono">
                      ${coin.price < 0.01 ? coin.price.toFixed(7) : coin.price.toLocaleString()}
                    </td>
                    <td className="p-3 text-right font-mono text-gray-400">{formatMcap(coin.marketCap)}</td>
                    <td className="p-3 text-right font-bold" style={{ color: textColor(coin.change1h) }}>
                      {coin.change1h > 0 ? '+' : ''}{coin.change1h.toFixed(2)}%
                    </td>
                    <td className="p-3 text-right font-bold" style={{ color: textColor(coin.change24h) }}>
                      {coin.change24h > 0 ? '+' : ''}{coin.change24h.toFixed(2)}%
                    </td>
                    <td className="p-3 text-right font-bold" style={{ color: textColor(coin.change7d) }}>
                      {coin.change7d > 0 ? '+' : ''}{coin.change7d.toFixed(2)}%
                    </td>
                    <td className="p-3 text-right font-bold" style={{ color: textColor(coin.change30d) }}>
                      {coin.change30d > 0 ? '+' : ''}{coin.change30d.toFixed(2)}%
                    </td>
                    <td className="p-3 text-right font-mono text-gray-400">{formatMcap(coin.volume24h)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SEO Content */}
        <div className="bg-[#161b22] border border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-black mb-4">What is a Crypto Market Heatmap?</h2>
          <div className="text-gray-400 space-y-3 text-sm leading-relaxed">
            <p>
              A crypto market heatmap is a visual representation of the cryptocurrency market where each asset is represented
              as a tile — sized proportionally to its market capitalization and colored by its recent price performance.
              Green tiles indicate positive price movement, while red tiles indicate losses. The intensity of the color
              reflects the magnitude of the change.
            </p>
            <p>
              This tool covers 35+ cryptocurrencies across 11 sectors including Layer 1, Layer 2, DeFi, Meme coins, AI,
              Gaming, Exchange tokens, Privacy coins, Storage, Oracles, and Real World Assets (RWA). You can filter by
              sector, change the timeframe from 1 hour to 30 days, and sort by market cap, change magnitude, or trading volume.
            </p>
            <p>
              Heatmaps are especially useful for identifying market-wide trends — when the entire map glows green, it signals
              broad bullish sentiment, while a red-dominated map suggests widespread selling pressure. Sector-level analysis
              can reveal rotation patterns where capital flows from one sector to another.
            </p>
          </div>
        </div>
      </div>
      <RelatedContent category="tools" currentSlug="/tools/market-heatmap" />
    </main>
  );
}
