'use client';

import { useState, useMemo, useCallback } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

/* ──────────────── Types ──────────────── */
interface LiquidationLevel {
  price: number;
  longLiq: number;   // millions USD
  shortLiq: number;  // millions USD
}

interface CoinLiqData {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  color: string;
  currentPrice: number;
  levels: LiquidationLevel[];
  totalLongLiq: number;
  totalShortLiq: number;
  highestCluster: { price: number; amount: number; side: 'long' | 'short' };
  leverage24hAvg: number;
  openInterest: number;
  longShortRatio: number;
}

/* ──────────────── Seed Data Generator ──────────────── */
function generateLevels(current: number, range: number, count: number): LiquidationLevel[] {
  const levels: LiquidationLevel[] = [];
  const step = (range * 2) / count;
  for (let i = 0; i < count; i++) {
    const price = current - range + step * i;
    const distFromCurrent = Math.abs(price - current) / current;
    const proximity = Math.max(0, 1 - distFromCurrent * 8);
    const longBase = price < current ? 20 + proximity * 180 + Math.random() * 60 : 5 + Math.random() * 15;
    const shortBase = price > current ? 20 + proximity * 180 + Math.random() * 60 : 5 + Math.random() * 15;
    levels.push({
      price: Math.round(price * 100) / 100,
      longLiq: Math.round(longBase * 10) / 10,
      shortLiq: Math.round(shortBase * 10) / 10,
    });
  }
  return levels;
}

function buildCoinData(): CoinLiqData[] {
  const coins = [
    { id: 'btc', name: 'Bitcoin', symbol: 'BTC', icon: '₿', color: '#F7931A', price: 86420, range: 12000 },
    { id: 'eth', name: 'Ethereum', symbol: 'ETH', icon: 'Ξ', color: '#627EEA', price: 3180, range: 600 },
    { id: 'sol', name: 'Solana', symbol: 'SOL', icon: '◎', color: '#9945FF', price: 142, range: 35 },
    { id: 'bnb', name: 'BNB', symbol: 'BNB', icon: '◆', color: '#F3BA2F', price: 598, range: 80 },
    { id: 'xrp', name: 'XRP', symbol: 'XRP', icon: '✕', color: '#23292F', price: 2.41, range: 0.6 },
    { id: 'doge', name: 'Dogecoin', symbol: 'DOGE', icon: 'Ð', color: '#C3A634', price: 0.182, range: 0.06 },
    { id: 'avax', name: 'Avalanche', symbol: 'AVAX', icon: '▲', color: '#E84142', price: 38.5, range: 10 },
    { id: 'link', name: 'Chainlink', symbol: 'LINK', icon: '⬡', color: '#2A5ADA', price: 18.2, range: 5 },
    { id: 'ada', name: 'Cardano', symbol: 'ADA', icon: '₳', color: '#0033AD', price: 0.72, range: 0.18 },
    { id: 'arb', name: 'Arbitrum', symbol: 'ARB', icon: '◈', color: '#28A0F0', price: 1.38, range: 0.4 },
  ];

  return coins.map(c => {
    const levels = generateLevels(c.price, c.range, 40);
    const totalLong = levels.reduce((s, l) => s + l.longLiq, 0);
    const totalShort = levels.reduce((s, l) => s + l.shortLiq, 0);
    let highestCluster = { price: 0, amount: 0, side: 'long' as 'long' | 'short' };
    levels.forEach(l => {
      if (l.longLiq > highestCluster.amount) highestCluster = { price: l.price, amount: l.longLiq, side: 'long' };
      if (l.shortLiq > highestCluster.amount) highestCluster = { price: l.price, amount: l.shortLiq, side: 'short' };
    });
    return {
      ...c,
      currentPrice: c.price,
      levels,
      totalLongLiq: Math.round(totalLong),
      totalShortLiq: Math.round(totalShort),
      highestCluster,
      leverage24hAvg: Math.round((15 + Math.random() * 30) * 10) / 10,
      openInterest: Math.round((200 + Math.random() * 800) * 10) / 10,
      longShortRatio: Math.round((0.6 + Math.random() * 0.8) * 100) / 100,
    };
  });
}

/* ──────────────── Heatmap SVG ──────────────── */
function HeatmapChart({ coin, height = 400 }: { coin: CoinLiqData; height?: number }) {
  const width = 900;
  const pad = { top: 30, right: 60, bottom: 40, left: 80 };
  const cw = width - pad.left - pad.right;
  const ch = height - pad.top - pad.bottom;

  const prices = coin.levels.map(l => l.price);
  const minP = Math.min(...prices);
  const maxP = Math.max(...prices);
  const maxLiq = Math.max(...coin.levels.map(l => Math.max(l.longLiq, l.shortLiq)));

  const yScale = (p: number) => pad.top + ch - ((p - minP) / (maxP - minP)) * ch;
  const barH = ch / coin.levels.length * 0.85;

  const getColor = (value: number, side: 'long' | 'short') => {
    const intensity = Math.min(value / maxLiq, 1);
    if (side === 'long') {
      const r = Math.round(34 + intensity * 210);
      const g = Math.round(197 + intensity * 58);
      const b = Math.round(94 - intensity * 40);
      return `rgb(${r},${g},${b})`;
    } else {
      const r = Math.round(239 + intensity * 16);
      const g = Math.round(68 - intensity * 40);
      const b = Math.round(68 - intensity * 30);
      return `rgb(${r},${g},${b})`;
    }
  };

  const formatPrice = (p: number) => {
    if (p >= 1000) return `$${(p/1000).toFixed(1)}K`;
    if (p >= 1) return `$${p.toFixed(2)}`;
    return `$${p.toFixed(4)}`;
  };

  // Y-axis ticks
  const yTicks = Array.from({ length: 8 }, (_, i) => minP + (maxP - minP) * (i / 7));

  return (
    <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
      <defs>
        <linearGradient id="currentLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFD700" stopOpacity={0} />
          <stop offset="20%" stopColor="#FFD700" stopOpacity={1} />
          <stop offset="80%" stopColor="#FFD700" stopOpacity={1} />
          <stop offset="100%" stopColor="#FFD700" stopOpacity={0} />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect x={pad.left} y={pad.top} width={cw} height={ch} fill="#0d1117" rx={4} />

      {/* Grid lines */}
      {yTicks.map((t, i) => (
        <g key={i}>
          <line x1={pad.left} y1={yScale(t)} x2={width - pad.right} y2={yScale(t)} stroke="#21262d" strokeWidth={1} />
          <text x={pad.left - 8} y={yScale(t) + 4} textAnchor="end" fill="#8b949e" fontSize={11}>{formatPrice(t)}</text>
        </g>
      ))}

      {/* Bars */}
      {coin.levels.map((l, i) => {
        const y = yScale(l.price);
        const longW = (l.longLiq / maxLiq) * (cw / 2 - 20);
        const shortW = (l.shortLiq / maxLiq) * (cw / 2 - 20);
        const centerX = pad.left + cw / 2;
        return (
          <g key={i}>
            {/* Long (left) */}
            <rect x={centerX - longW} y={y - barH / 2} width={longW} height={barH} fill={getColor(l.longLiq, 'long')} opacity={0.85} rx={2} />
            {/* Short (right) */}
            <rect x={centerX} y={y - barH / 2} width={shortW} height={barH} fill={getColor(l.shortLiq, 'short')} opacity={0.85} rx={2} />
            {/* Value labels for large bars */}
            {l.longLiq > maxLiq * 0.5 && (
              <text x={centerX - longW - 4} y={y + 3} textAnchor="end" fill="#3fb950" fontSize={9} fontWeight={700}>${l.longLiq.toFixed(0)}M</text>
            )}
            {l.shortLiq > maxLiq * 0.5 && (
              <text x={centerX + shortW + 4} y={y + 3} textAnchor="start" fill="#f85149" fontSize={9} fontWeight={700}>${l.shortLiq.toFixed(0)}M</text>
            )}
          </g>
        );
      })}

      {/* Current price line */}
      <line x1={pad.left} y1={yScale(coin.currentPrice)} x2={width - pad.right} y2={yScale(coin.currentPrice)} stroke="url(#currentLine)" strokeWidth={2} strokeDasharray="6 3" />
      <rect x={width - pad.right + 4} y={yScale(coin.currentPrice) - 10} width={54} height={20} fill="#F3BA2F" rx={4} />
      <text x={width - pad.right + 31} y={yScale(coin.currentPrice) + 4} textAnchor="middle" fill="#000" fontSize={10} fontWeight={800}>{formatPrice(coin.currentPrice)}</text>

      {/* Legend */}
      <rect x={pad.left + 10} y={pad.top + 8} width={10} height={10} fill="#3fb950" rx={2} />
      <text x={pad.left + 24} y={pad.top + 17} fill="#8b949e" fontSize={11}>Long Liquidations</text>
      <rect x={pad.left + 150} y={pad.top + 8} width={10} height={10} fill="#f85149" rx={2} />
      <text x={pad.left + 164} y={pad.top + 17} fill="#8b949e" fontSize={11}>Short Liquidations</text>

      {/* Center axis label */}
      <text x={pad.left + cw / 2} y={height - 8} textAnchor="middle" fill="#6e7681" fontSize={10}>← LONGS &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; SHORTS →</text>
    </svg>
  );
}

/* ──────────────── Main Page ──────────────── */
export default function LiquidationHeatmapPage() {
  const allCoins = useMemo(() => buildCoinData(), []);
  const [selectedCoin, setSelectedCoin] = useState('btc');
  const [timeframe, setTimeframe] = useState<'24h' | '4h' | '1h'>('24h');
  const [leverage, setLeverage] = useState<'all' | '10x' | '25x' | '50x' | '100x'>('all');

  const coin = allCoins.find(c => c.id === selectedCoin)!;

  const formatM = (n: number) => n >= 1000 ? `$${(n/1000).toFixed(1)}B` : `$${n.toFixed(0)}M`;
  const formatPrice = (p: number) => {
    if (p >= 1000) return `$${p.toLocaleString()}`;
    if (p >= 1) return `$${p.toFixed(2)}`;
    return `$${p.toFixed(4)}`;
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px 80px' }}>
        <Breadcrumb items={[{ label: 'Tools', href: '/tools' }, { label: 'Liquidation Heatmap' }]} />

        {/* Header */}
        <div style={{ textAlign: 'center', paddingBottom: 32, paddingTop: 20 }}>
          <div style={{ display: 'inline-block', padding: '4px 14px', background: '#ef444420', border: '1px solid #ef444440', borderRadius: 20, fontSize: 12, color: '#f87171', fontWeight: 600, marginBottom: 16 }}>
            🔥 Liquidation Intelligence
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 900, color: 'var(--color-text)', marginBottom: 12 }}>
            Liquidation Heatmap
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, maxWidth: 600, margin: '0 auto' }}>
            Visualize liquidation clusters across price levels. See where leveraged positions will get wiped — the areas exchanges are targeting.
          </p>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 24, justifyContent: 'center' }}>
          {/* Coin selector */}
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
            {allCoins.map(c => (
              <button key={c.id} onClick={() => setSelectedCoin(c.id)}
                style={{
                  background: selectedCoin === c.id ? `${c.color}25` : '#161b22',
                  border: `1px solid ${selectedCoin === c.id ? c.color : '#30363d'}`,
                  color: selectedCoin === c.id ? c.color : '#8b949e',
                  borderRadius: 8, padding: '6px 14px', cursor: 'pointer', fontSize: 12, fontWeight: 700,
                  display: 'flex', alignItems: 'center', gap: 5,
                }}>
                <span style={{ fontSize: 14 }}>{c.icon}</span> {c.symbol}
              </button>
            ))}
          </div>
        </div>

        {/* Filters row */}
        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', marginBottom: 28, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <span style={{ fontSize: 11, color: '#8b949e', fontWeight: 700 }}>TIMEFRAME:</span>
            {(['24h', '4h', '1h'] as const).map(tf => (
              <button key={tf} onClick={() => setTimeframe(tf)}
                style={{
                  background: timeframe === tf ? '#6366f120' : 'transparent',
                  border: `1px solid ${timeframe === tf ? '#6366f1' : '#30363d'}`,
                  color: timeframe === tf ? '#818cf8' : '#8b949e',
                  borderRadius: 6, padding: '3px 10px', cursor: 'pointer', fontSize: 11, fontWeight: 600,
                }}>
                {tf}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <span style={{ fontSize: 11, color: '#8b949e', fontWeight: 700 }}>LEVERAGE:</span>
            {(['all', '10x', '25x', '50x', '100x'] as const).map(lv => (
              <button key={lv} onClick={() => setLeverage(lv)}
                style={{
                  background: leverage === lv ? '#f59e0b20' : 'transparent',
                  border: `1px solid ${leverage === lv ? '#f59e0b' : '#30363d'}`,
                  color: leverage === lv ? '#fbbf24' : '#8b949e',
                  borderRadius: 6, padding: '3px 10px', cursor: 'pointer', fontSize: 11, fontWeight: 600,
                }}>
                {lv === 'all' ? 'All' : lv}
              </button>
            ))}
          </div>
        </div>

        {/* Key metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12, marginBottom: 24 }}>
          {[
            { label: 'Total Long Liq', value: formatM(coin.totalLongLiq), color: '#3fb950', sub: 'liquidation exposure' },
            { label: 'Total Short Liq', value: formatM(coin.totalShortLiq), color: '#f85149', sub: 'liquidation exposure' },
            { label: 'Biggest Cluster', value: formatPrice(coin.highestCluster.price), color: '#fbbf24', sub: `${formatM(coin.highestCluster.amount)} ${coin.highestCluster.side}s` },
            { label: 'Open Interest', value: formatM(coin.openInterest), color: '#818cf8', sub: `${coin.leverage24hAvg}x avg leverage` },
            { label: 'Long/Short Ratio', value: coin.longShortRatio.toFixed(2), color: coin.longShortRatio > 1 ? '#3fb950' : '#f85149', sub: coin.longShortRatio > 1 ? 'More longs' : 'More shorts' },
            { label: 'Current Price', value: formatPrice(coin.currentPrice), color: '#F3BA2F', sub: coin.symbol },
          ].map((m, i) => (
            <div key={i} style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 10, padding: '12px 14px' }}>
              <div style={{ fontSize: 10, color: '#8b949e', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{m.label}</div>
              <div style={{ fontSize: 20, fontWeight: 900, color: m.color }}>{m.value}</div>
              <div style={{ fontSize: 10, color: '#6e7681', marginTop: 2 }}>{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Heatmap chart */}
        <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 14, padding: 20, marginBottom: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div>
              <h2 style={{ fontSize: 16, fontWeight: 800, color: '#e6edf3' }}>{coin.name} Liquidation Heatmap</h2>
              <div style={{ fontSize: 12, color: '#8b949e', marginTop: 2 }}>{timeframe} liquidation clusters • {leverage === 'all' ? 'All leverage' : leverage + ' leverage'}</div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 10, height: 10, borderRadius: 2, background: '#3fb950' }} />
                <span style={{ fontSize: 11, color: '#8b949e' }}>Longs</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 10, height: 10, borderRadius: 2, background: '#f85149' }} />
                <span style={{ fontSize: 11, color: '#8b949e' }}>Shorts</span>
              </div>
            </div>
          </div>
          <HeatmapChart coin={coin} />
        </div>

        {/* Top Liquidation Levels Table */}
        <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 14, padding: 20, marginBottom: 28 }}>
          <h3 style={{ fontSize: 15, fontWeight: 800, color: '#e6edf3', marginBottom: 16 }}>Top Liquidation Clusters</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr>
                  {['Price Level', 'Long Liq', 'Short Liq', 'Total', 'Dominant Side', 'Distance from Current'].map(h => (
                    <th key={h} style={{ padding: '8px 12px', textAlign: 'left', color: '#8b949e', fontSize: 11, fontWeight: 700, borderBottom: '1px solid #21262d', textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[...coin.levels]
                  .sort((a, b) => (b.longLiq + b.shortLiq) - (a.longLiq + a.shortLiq))
                  .slice(0, 10)
                  .map((l, i) => {
                    const dist = ((l.price - coin.currentPrice) / coin.currentPrice * 100);
                    const dominant = l.longLiq > l.shortLiq ? 'Long' : 'Short';
                    return (
                      <tr key={i} style={{ borderBottom: '1px solid #21262d' }}>
                        <td style={{ padding: '8px 12px', fontWeight: 700, color: '#e6edf3' }}>{formatPrice(l.price)}</td>
                        <td style={{ padding: '8px 12px', color: '#3fb950' }}>${l.longLiq.toFixed(1)}M</td>
                        <td style={{ padding: '8px 12px', color: '#f85149' }}>${l.shortLiq.toFixed(1)}M</td>
                        <td style={{ padding: '8px 12px', color: '#e6edf3', fontWeight: 700 }}>${(l.longLiq + l.shortLiq).toFixed(1)}M</td>
                        <td style={{ padding: '8px 12px' }}>
                          <span style={{ padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 700, background: dominant === 'Long' ? '#3fb95020' : '#f8514920', color: dominant === 'Long' ? '#3fb950' : '#f85149' }}>
                            {dominant}
                          </span>
                        </td>
                        <td style={{ padding: '8px 12px', color: dist > 0 ? '#3fb950' : '#f85149' }}>
                          {dist > 0 ? '+' : ''}{dist.toFixed(2)}%
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Multi-coin overview */}
        <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 14, padding: 20, marginBottom: 28 }}>
          <h3 style={{ fontSize: 15, fontWeight: 800, color: '#e6edf3', marginBottom: 16 }}>Cross-Market Liquidation Summary</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
            {allCoins.map(c => {
              const ratio = c.totalLongLiq / (c.totalLongLiq + c.totalShortLiq) * 100;
              return (
                <div key={c.id} onClick={() => setSelectedCoin(c.id)}
                  style={{
                    background: selectedCoin === c.id ? `${c.color}10` : '#0d1117',
                    border: `1px solid ${selectedCoin === c.id ? c.color : '#21262d'}`,
                    borderRadius: 10, padding: 14, cursor: 'pointer',
                  }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 18, color: c.color }}>{c.icon}</span>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 800, color: '#e6edf3' }}>{c.symbol}</div>
                        <div style={{ fontSize: 10, color: '#8b949e' }}>{formatPrice(c.currentPrice)}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: '#e6edf3' }}>{formatM(c.totalLongLiq + c.totalShortLiq)}</div>
                      <div style={{ fontSize: 10, color: '#8b949e' }}>total liq</div>
                    </div>
                  </div>
                  {/* Long/Short bar */}
                  <div style={{ display: 'flex', height: 6, borderRadius: 3, overflow: 'hidden', background: '#21262d' }}>
                    <div style={{ width: `${ratio}%`, background: '#3fb950', borderRadius: '3px 0 0 3px' }} />
                    <div style={{ width: `${100 - ratio}%`, background: '#f85149', borderRadius: '0 3px 3px 0' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4, fontSize: 10 }}>
                    <span style={{ color: '#3fb950' }}>Long {ratio.toFixed(0)}%</span>
                    <span style={{ color: '#f85149' }}>Short {(100 - ratio).toFixed(0)}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Educational */}
        <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 14, padding: 24 }}>
          <h3 style={{ fontSize: 16, fontWeight: 800, color: '#e6edf3', marginBottom: 16 }}>How to Read the Liquidation Heatmap</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              { title: 'What Are Liquidation Clusters?', text: 'When traders open leveraged positions, their liquidation prices create "clusters" at specific price levels. The heatmap shows where these clusters are densest — these are the areas where price is magnetically attracted because liquidation cascades feed on themselves.' },
              { title: 'Green Bars (Longs)', text: 'Green bars show long liquidation levels — mostly below the current price. If price drops to these levels, long positions get liquidated, creating forced sell pressure that can cascade further down.' },
              { title: 'Red Bars (Shorts)', text: 'Red bars show short liquidation levels — mostly above the current price. If price pumps into these zones, shorts get squeezed, creating forced buy pressure that can push price higher (short squeeze).' },
              { title: 'Trading Implications', text: 'Dense liquidation clusters act as magnets for price action. Market makers and whales often target these clusters to trigger cascading liquidations and profit from the resulting volatility. Use this data alongside other indicators.' },
            ].map((item, i) => (
              <div key={i}>
                <h4 style={{ fontSize: 13, fontWeight: 700, color: '#e6edf3', marginBottom: 6 }}>{item.title}</h4>
                <p style={{ fontSize: 12, color: '#8b949e', lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, padding: '10px 14px', background: '#f8514910', border: '1px solid #f8514930', borderRadius: 8, fontSize: 11, color: '#f87171' }}>
            ⚠️ <strong>Disclaimer:</strong> Liquidation data is simulated for educational purposes. Real liquidation data requires exchange-specific APIs. This tool demonstrates the concept — always verify with live data before trading.
          </div>
        </div>
      </div>
    </div>
  );
}
