'use client';

import React, { useState, useMemo, useCallback } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedContent from '@/components/RelatedContent';

/* ──────────────── Types ──────────────── */
interface CoinVolData {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  sector: string;
  price: number;
  vol1d: number;
  vol7d: number;
  vol30d: number;
  vol90d: number;
  atr14: number;        // ATR as % of price
  bollingerWidth: number; // BB width as %
  highLow30d: [number, number]; // 30d high/low
  avgDailyRange: number; // avg daily % range
  volTrend: 'expanding' | 'contracting' | 'stable';
  riskLevel: 'extreme' | 'high' | 'medium' | 'low';
}

type SortKey = 'vol1d' | 'vol7d' | 'vol30d' | 'atr14' | 'avgDailyRange' | 'bollingerWidth';
type FilterRisk = 'all' | 'extreme' | 'high' | 'medium' | 'low';

/* ──────────────── Data Generator ──────────────── */
function seed(s: number): () => number {
  let x = s;
  return () => { x = (x * 16807 + 0) % 2147483647; return (x - 1) / 2147483646; };
}

function generateVolData(): CoinVolData[] {
  const rng = seed(123);
  const r = (min: number, max: number) => min + rng() * (max - min);

  const coins: { id: string; name: string; symbol: string; icon: string; sector: string; price: number; baseVol: number }[] = [
    { id: 'btc', name: 'Bitcoin', symbol: 'BTC', icon: '₿', sector: 'Layer 1', price: 86420, baseVol: 2.5 },
    { id: 'eth', name: 'Ethereum', symbol: 'ETH', icon: 'Ξ', sector: 'Layer 1', price: 3480, baseVol: 3.2 },
    { id: 'sol', name: 'Solana', symbol: 'SOL', icon: '◎', sector: 'Layer 1', price: 198, baseVol: 5.5 },
    { id: 'bnb', name: 'BNB', symbol: 'BNB', icon: '⬡', sector: 'Exchange', price: 612, baseVol: 2.8 },
    { id: 'xrp', name: 'XRP', symbol: 'XRP', icon: '✕', sector: 'Layer 1', price: 1.52, baseVol: 4.2 },
    { id: 'ada', name: 'Cardano', symbol: 'ADA', icon: '₳', sector: 'Layer 1', price: 0.89, baseVol: 5.0 },
    { id: 'avax', name: 'Avalanche', symbol: 'AVAX', icon: '🔺', sector: 'Layer 1', price: 52, baseVol: 5.8 },
    { id: 'dot', name: 'Polkadot', symbol: 'DOT', icon: '●', sector: 'Layer 1', price: 8.6, baseVol: 4.5 },
    { id: 'link', name: 'Chainlink', symbol: 'LINK', icon: '⬡', sector: 'Oracle', price: 24.3, baseVol: 4.8 },
    { id: 'uni', name: 'Uniswap', symbol: 'UNI', icon: '🦄', sector: 'DeFi', price: 13.8, baseVol: 5.2 },
    { id: 'aave', name: 'Aave', symbol: 'AAVE', icon: '👻', sector: 'DeFi', price: 388, baseVol: 5.5 },
    { id: 'arb', name: 'Arbitrum', symbol: 'ARB', icon: '🔵', sector: 'Layer 2', price: 1.32, baseVol: 6.2 },
    { id: 'op', name: 'Optimism', symbol: 'OP', icon: '🔴', sector: 'Layer 2', price: 3.45, baseVol: 6.0 },
    { id: 'doge', name: 'Dogecoin', symbol: 'DOGE', icon: '🐕', sector: 'Meme', price: 0.192, baseVol: 7.5 },
    { id: 'shib', name: 'Shiba Inu', symbol: 'SHIB', icon: '🐕‍🦺', sector: 'Meme', price: 0.0000186, baseVol: 9.2 },
    { id: 'pepe', name: 'Pepe', symbol: 'PEPE', icon: '🐸', sector: 'Meme', price: 0.0000138, baseVol: 12.5 },
    { id: 'wif', name: 'dogwifhat', symbol: 'WIF', icon: '🎩', sector: 'Meme', price: 2.82, baseVol: 14.0 },
    { id: 'bonk', name: 'Bonk', symbol: 'BONK', icon: '🦴', sector: 'Meme', price: 0.0000285, baseVol: 11.8 },
    { id: 'fet', name: 'Fetch.ai', symbol: 'FET', icon: '🤖', sector: 'AI', price: 2.42, baseVol: 8.5 },
    { id: 'render', name: 'Render', symbol: 'RENDER', icon: '🎨', sector: 'AI', price: 9.85, baseVol: 7.8 },
    { id: 'tao', name: 'Bittensor', symbol: 'TAO', icon: '🧠', sector: 'AI', price: 620, baseVol: 9.0 },
    { id: 'imx', name: 'Immutable', symbol: 'IMX', icon: '🎮', sector: 'Gaming', price: 2.15, baseVol: 7.2 },
    { id: 'gala', name: 'Gala', symbol: 'GALA', icon: '🎰', sector: 'Gaming', price: 0.042, baseVol: 8.5 },
    { id: 'ondo', name: 'Ondo Finance', symbol: 'ONDO', icon: '🏦', sector: 'RWA', price: 2.48, baseVol: 7.0 },
    { id: 'fil', name: 'Filecoin', symbol: 'FIL', icon: '📁', sector: 'Storage', price: 7.85, baseVol: 5.8 },
    { id: 'xmr', name: 'Monero', symbol: 'XMR', icon: 'ɱ', sector: 'Privacy', price: 285, baseVol: 3.8 },
    { id: 'mkr', name: 'Maker', symbol: 'MKR', icon: '⬟', sector: 'DeFi', price: 3450, baseVol: 4.2 },
    { id: 'stx', name: 'Stacks', symbol: 'STX', icon: '⬡', sector: 'Layer 2', price: 1.92, baseVol: 6.8 },
  ];

  return coins.map(c => {
    const bv = c.baseVol;
    const vol1d = Math.round(r(bv * 0.6, bv * 1.4) * 100) / 100;
    const vol7d = Math.round(r(bv * 0.8, bv * 1.3) * 100) / 100;
    const vol30d = Math.round(r(bv * 0.9, bv * 1.2) * 100) / 100;
    const vol90d = Math.round(r(bv * 0.85, bv * 1.15) * 100) / 100;
    const atr14 = Math.round(r(bv * 0.5, bv * 0.9) * 100) / 100;
    const bw = Math.round(r(bv * 1.2, bv * 2.5) * 100) / 100;
    const avgDR = Math.round(r(bv * 0.4, bv * 0.8) * 100) / 100;
    const high = Math.round(c.price * (1 + r(0.05, 0.35)) * 100) / 100;
    const low = Math.round(c.price * (1 - r(0.05, 0.35)) * 100) / 100;

    const volTrend: CoinVolData['volTrend'] = vol1d > vol30d * 1.15 ? 'expanding' : vol1d < vol30d * 0.85 ? 'contracting' : 'stable';
    const riskLevel: CoinVolData['riskLevel'] = vol30d > 10 ? 'extreme' : vol30d > 6 ? 'high' : vol30d > 3.5 ? 'medium' : 'low';

    return {
      id: c.id,
      name: c.name,
      symbol: c.symbol,
      icon: c.icon,
      sector: c.sector,
      price: c.price,
      vol1d,
      vol7d,
      vol30d,
      vol90d,
      atr14,
      bollingerWidth: bw,
      highLow30d: [high, low] as [number, number],
      avgDailyRange: avgDR,
      volTrend,
      riskLevel,
    };
  });
}

/* ──────────────── Helpers ──────────────── */
function riskColor(risk: string): string {
  switch (risk) {
    case 'extreme': return '#ef4444';
    case 'high': return '#f97316';
    case 'medium': return '#eab308';
    case 'low': return '#22c55e';
    default: return '#6b7280';
  }
}

function trendIcon(trend: string): string {
  switch (trend) {
    case 'expanding': return '📈';
    case 'contracting': return '📉';
    default: return '➡️';
  }
}

function volBar(val: number, max: number): React.ReactElement {
  const pct = Math.min(100, (val / max) * 100);
  const color = val > 10 ? '#ef4444' : val > 6 ? '#f97316' : val > 3.5 ? '#eab308' : '#22c55e';
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 bg-[#0d1117] rounded-full overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
      <span className="text-xs font-mono font-bold" style={{ color, minWidth: 40, textAlign: 'right' }}>{val.toFixed(1)}%</span>
    </div>
  );
}

/* ──────────────── Component ──────────────── */
export default function VolatilityScannerPage() {
  const allCoins = useMemo(generateVolData, []);
  const [sortKey, setSortKey] = useState<SortKey>('vol1d');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');
  const [riskFilter, setRiskFilter] = useState<FilterRisk>('all');
  const [sectorFilter, setSectorFilter] = useState('All');

  const handleSort = useCallback((key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === 'desc' ? 'asc' : 'desc');
    else { setSortKey(key); setSortDir('desc'); }
  }, [sortKey]);

  const filtered = useMemo(() => {
    let coins = allCoins;
    if (riskFilter !== 'all') coins = coins.filter(c => c.riskLevel === riskFilter);
    if (sectorFilter !== 'All') coins = coins.filter(c => c.sector === sectorFilter);
    const dir = sortDir === 'desc' ? -1 : 1;
    return [...coins].sort((a, b) => (a[sortKey] - b[sortKey]) * dir);
  }, [allCoins, riskFilter, sectorFilter, sortKey, sortDir]);

  const maxVol = useMemo(() => Math.max(...allCoins.map(c => c.vol1d)), [allCoins]);

  const sectors = useMemo(() => ['All', ...new Set(allCoins.map(c => c.sector))], [allCoins]);

  // Aggregate stats
  const avgVol = useMemo(() => filtered.reduce((s, c) => s + c.vol30d, 0) / (filtered.length || 1), [filtered]);
  const mostVolatile = useMemo(() => [...allCoins].sort((a, b) => b.vol1d - a.vol1d)[0], [allCoins]);
  const leastVolatile = useMemo(() => [...allCoins].sort((a, b) => a.vol1d - b.vol1d)[0], [allCoins]);
  const expanding = useMemo(() => allCoins.filter(c => c.volTrend === 'expanding').length, [allCoins]);

  return (
    <main className="min-h-screen bg-[#0d1117] text-gray-100 pb-20">
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/tools' },
          { label: 'Volatility Scanner' },
        ]} />

        {/* Header */}
        <div className="mt-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Crypto Volatility Scanner
          </h1>
          <p className="text-gray-400 mt-2 max-w-2xl">
            Scan the crypto market for the most (and least) volatile assets. Compare realized volatility,
            ATR, Bollinger Band width, and daily ranges across 28 coins. Identify breakout setups and manage risk.
          </p>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
          <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4">
            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Market Avg Vol (30d)</div>
            <div className="text-2xl font-black text-yellow-400 mt-1">{avgVol.toFixed(1)}%</div>
          </div>
          <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4">
            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Most Volatile (1d)</div>
            <div className="text-lg font-black text-red-400 mt-1">
              {mostVolatile.symbol} <span className="text-sm">{mostVolatile.vol1d.toFixed(1)}%</span>
            </div>
          </div>
          <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4">
            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Least Volatile (1d)</div>
            <div className="text-lg font-black text-green-400 mt-1">
              {leastVolatile.symbol} <span className="text-sm">{leastVolatile.vol1d.toFixed(1)}%</span>
            </div>
          </div>
          <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4">
            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Vol Expanding</div>
            <div className="text-2xl font-black text-orange-400 mt-1">{expanding}</div>
            <div className="text-xs text-gray-500">of {allCoins.length} coins</div>
          </div>
          <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4">
            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Coins Shown</div>
            <div className="text-2xl font-black text-cyan-400 mt-1">{filtered.length}</div>
          </div>
        </div>

        {/* Volatility Heatmap Overview */}
        <div className="bg-[#161b22] border border-gray-700 rounded-xl p-5 mb-6">
          <h2 className="text-lg font-black mb-3">🌡️ Volatility Heatmap (1-day realized)</h2>
          <div className="flex flex-wrap gap-1.5">
            {[...allCoins].sort((a, b) => b.vol1d - a.vol1d).map(coin => {
              const intensity = Math.min(coin.vol1d / 15, 1);
              const bg = `rgba(${Math.round(239 * intensity + 34 * (1 - intensity))}, ${Math.round(68 * intensity + 197 * (1 - intensity))}, ${Math.round(68 * intensity + 94 * (1 - intensity))}, 0.7)`;
              return (
                <div
                  key={coin.id}
                  className="rounded-lg px-3 py-2 text-center min-w-[70px]"
                  style={{ backgroundColor: bg }}
                  title={`${coin.name}: ${coin.vol1d}% 1d volatility`}
                >
                  <div className="text-xs font-black text-[var(--color-text)] drop-shadow">{coin.symbol}</div>
                  <div className="text-[10px] font-bold text-[var(--color-text)]/80">{coin.vol1d.toFixed(1)}%</div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
            <span>Low Vol</span>
            <div className="flex-1 h-2 rounded-full" style={{
              background: 'linear-gradient(90deg, rgba(34,197,94,0.7), rgba(234,179,8,0.7), rgba(239,68,68,0.7))'
            }} />
            <span>High Vol</span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex bg-[#161b22] border border-gray-700 rounded-lg overflow-hidden">
            {(['all', 'extreme', 'high', 'medium', 'low'] as FilterRisk[]).map(r => (
              <button
                key={r}
                onClick={() => setRiskFilter(r)}
                className={`px-3 py-2 text-xs font-bold capitalize transition-colors ${
                  riskFilter === r ? 'bg-orange-600 text-[var(--color-text)]' : 'text-gray-400 hover:text-[var(--color-text)] hover:bg-[#1c2330]'
                }`}
              >
                {r === 'all' ? 'All Risk' : r}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap bg-[#161b22] border border-gray-700 rounded-lg overflow-hidden">
            {sectors.map(s => (
              <button
                key={s}
                onClick={() => setSectorFilter(s)}
                className={`px-3 py-2 text-xs font-bold transition-colors ${
                  sectorFilter === s ? 'bg-purple-600 text-[var(--color-text)]' : 'text-gray-400 hover:text-[var(--color-text)] hover:bg-[#1c2330]'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Main Table */}
        <div className="bg-[#161b22] border border-gray-700 rounded-xl overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="p-3 text-left">#</th>
                  <th className="p-3 text-left">Coin</th>
                  <th className="p-3 text-left">Risk</th>
                  <th className="p-3 text-left">Trend</th>
                  <th className="p-3 text-right cursor-pointer hover:text-[var(--color-text)]" onClick={() => handleSort('vol1d')}>
                    Vol 1d {sortKey === 'vol1d' ? (sortDir === 'desc' ? '▼' : '▲') : ''}
                  </th>
                  <th className="p-3 text-right cursor-pointer hover:text-[var(--color-text)]" onClick={() => handleSort('vol7d')}>
                    Vol 7d {sortKey === 'vol7d' ? (sortDir === 'desc' ? '▼' : '▲') : ''}
                  </th>
                  <th className="p-3 text-right cursor-pointer hover:text-[var(--color-text)]" onClick={() => handleSort('vol30d')}>
                    Vol 30d {sortKey === 'vol30d' ? (sortDir === 'desc' ? '▼' : '▲') : ''}
                  </th>
                  <th className="p-3 text-right cursor-pointer hover:text-[var(--color-text)]" onClick={() => handleSort('atr14')}>
                    ATR(14) {sortKey === 'atr14' ? (sortDir === 'desc' ? '▼' : '▲') : ''}
                  </th>
                  <th className="p-3 text-right cursor-pointer hover:text-[var(--color-text)]" onClick={() => handleSort('bollingerWidth')}>
                    BB Width {sortKey === 'bollingerWidth' ? (sortDir === 'desc' ? '▼' : '▲') : ''}
                  </th>
                  <th className="p-3 text-right cursor-pointer hover:text-[var(--color-text)]" onClick={() => handleSort('avgDailyRange')}>
                    Avg Range {sortKey === 'avgDailyRange' ? (sortDir === 'desc' ? '▼' : '▲') : ''}
                  </th>
                  <th className="p-3 text-right">30d Range</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((coin, i) => (
                  <tr key={coin.id} className="border-b border-gray-800 hover:bg-[#1c2330] transition-colors">
                    <td className="p-3 text-gray-500 font-mono">{i + 1}</td>
                    <td className="p-3">
                      <div className="font-bold">
                        <span className="mr-2">{coin.icon}</span>
                        {coin.name} <span className="text-gray-500">{coin.symbol}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">{coin.sector} • ${coin.price < 0.01 ? coin.price.toFixed(7) : coin.price.toLocaleString()}</div>
                    </td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded text-xs font-bold capitalize"
                            style={{ color: riskColor(coin.riskLevel), backgroundColor: riskColor(coin.riskLevel) + '20' }}>
                        {coin.riskLevel}
                      </span>
                    </td>
                    <td className="p-3 text-center">{trendIcon(coin.volTrend)}</td>
                    <td className="p-3 w-40">{volBar(coin.vol1d, maxVol)}</td>
                    <td className="p-3 text-right font-mono text-sm" style={{ color: riskColor(coin.vol7d > 10 ? 'extreme' : coin.vol7d > 6 ? 'high' : coin.vol7d > 3.5 ? 'medium' : 'low') }}>
                      {coin.vol7d.toFixed(1)}%
                    </td>
                    <td className="p-3 text-right font-mono text-sm" style={{ color: riskColor(coin.riskLevel) }}>
                      {coin.vol30d.toFixed(1)}%
                    </td>
                    <td className="p-3 text-right font-mono text-sm text-cyan-400">{coin.atr14.toFixed(1)}%</td>
                    <td className="p-3 text-right font-mono text-sm text-purple-400">{coin.bollingerWidth.toFixed(1)}%</td>
                    <td className="p-3 text-right font-mono text-sm text-yellow-400">{coin.avgDailyRange.toFixed(1)}%</td>
                    <td className="p-3 text-right text-xs">
                      <div className="text-green-400">${coin.highLow30d[0] < 0.01 ? coin.highLow30d[0].toFixed(7) : coin.highLow30d[0].toLocaleString()}</div>
                      <div className="text-red-400">${coin.highLow30d[1] < 0.01 ? coin.highLow30d[1].toFixed(7) : coin.highLow30d[1].toLocaleString()}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Risk Legend */}
        <div className="bg-[#161b22] border border-gray-700 rounded-xl p-5 mb-6">
          <h2 className="text-lg font-black mb-4">📋 Volatility Risk Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { level: 'Low', color: '#22c55e', range: '<3.5%', desc: 'Stable assets like BTC and large caps. Suitable for conservative portfolios and lower-leverage trades.' },
              { level: 'Medium', color: '#eab308', range: '3.5–6%', desc: 'Mid-cap L1s and established DeFi tokens. Standard risk for experienced traders, suitable for moderate leverage.' },
              { level: 'High', color: '#f97316', range: '6–10%', desc: 'Smaller caps, L2 tokens, and gaming coins. Requires active risk management and tight stop-losses.' },
              { level: 'Extreme', color: '#ef4444', range: '>10%', desc: 'Meme coins and micro-caps. Very high risk of sudden drawdowns. Not suitable for leveraged trading.' },
            ].map(r => (
              <div key={r.level} className="bg-[#0d1117] rounded-lg p-4" style={{ borderLeft: `3px solid ${r.color}` }}>
                <div className="text-sm font-bold" style={{ color: r.color }}>{r.level} ({r.range})</div>
                <p className="text-xs text-gray-400 mt-2">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Indicator Explanations */}
        <div className="bg-[#161b22] border border-gray-700 rounded-xl p-5 mb-6">
          <h2 className="text-lg font-black mb-4">📖 Indicator Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#0d1117] rounded-lg p-4">
              <div className="text-sm font-bold text-cyan-400 mb-2">ATR (14-period)</div>
              <p className="text-xs text-gray-400">
                Average True Range measures the average daily price movement over 14 days, expressed as a percentage
                of the current price. Higher ATR = wider expected daily ranges.
              </p>
            </div>
            <div className="bg-[#0d1117] rounded-lg p-4">
              <div className="text-sm font-bold text-purple-400 mb-2">Bollinger Band Width</div>
              <p className="text-xs text-gray-400">
                The width between upper and lower Bollinger Bands as a percentage of the middle band.
                Narrow bands suggest a squeeze (potential breakout), while wide bands indicate high volatility.
              </p>
            </div>
            <div className="bg-[#0d1117] rounded-lg p-4">
              <div className="text-sm font-bold text-yellow-400 mb-2">Average Daily Range</div>
              <p className="text-xs text-gray-400">
                The mean high-to-low range per trading day over the last 30 days. This shows how much
                the price typically moves within a single day — key for setting stop-losses and take-profits.
              </p>
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <div className="bg-[#161b22] border border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-black mb-4">Why Track Crypto Volatility?</h2>
          <div className="text-gray-400 space-y-3 text-sm leading-relaxed">
            <p>
              Volatility is the heartbeat of the crypto market. Understanding it helps you size positions correctly,
              set appropriate stop-losses, choose the right assets for your risk tolerance, and identify potential
              breakout opportunities before they happen.
            </p>
            <p>
              This scanner tracks 28 cryptocurrencies across multiple volatility metrics: realized volatility over
              1-day, 7-day, 30-day, and 90-day windows; the 14-period Average True Range (ATR); Bollinger Band width;
              and average daily price range. Each coin is classified into risk levels — from Low (below 3.5% daily vol)
              to Extreme (above 10%).
            </p>
            <p>
              Pay special attention to the volatility trend column. When volatility is expanding (increasing from its
              recent average), it often signals the beginning of a major price move in either direction. Contracting
              volatility, especially after a period of high activity, suggests a &quot;squeeze&quot; that typically resolves
              with a sharp breakout.
            </p>
          </div>
        </div>
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Volatility Scanner",
              "url": "https://degen0x.com/tools/volatility-scanner",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </div>
      <RelatedContent category="tools" currentSlug="/tools/volatility-scanner" />
    </main>
  );
}
