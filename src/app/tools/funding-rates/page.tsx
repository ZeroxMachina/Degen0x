'use client';

import { useState, useMemo } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedContent from '@/components/RelatedContent';

/* ──────── Types ──────── */
interface FundingEntry {
  symbol: string;
  name: string;
  icon: string;
  color: string;
  price: number;
  exchanges: Record<string, {
    rate8h: number;
    rateAnnual: number;
    nextFunding: number; // minutes until
    openInterest: number; // millions
    volume24h: number; // millions
    longShortRatio: number;
  }>;
  avgRate: number;
  trend: 'bullish' | 'bearish' | 'neutral';
}

/* ──────── Data ──────── */
function generateData(): FundingEntry[] {
  const coins = [
    { symbol: 'BTC', name: 'Bitcoin', icon: '₿', color: '#F7931A', price: 86420 },
    { symbol: 'ETH', name: 'Ethereum', icon: 'Ξ', color: '#627EEA', price: 3180 },
    { symbol: 'SOL', name: 'Solana', icon: '◎', color: '#9945FF', price: 142 },
    { symbol: 'BNB', name: 'BNB', icon: '◆', color: '#F3BA2F', price: 598 },
    { symbol: 'XRP', name: 'XRP', icon: '✕', color: '#23292F', price: 2.41 },
    { symbol: 'DOGE', name: 'Dogecoin', icon: 'Ð', color: '#C3A634', price: 0.182 },
    { symbol: 'AVAX', name: 'Avalanche', icon: '▲', color: '#E84142', price: 38.5 },
    { symbol: 'LINK', name: 'Chainlink', icon: '⬡', color: '#2A5ADA', price: 18.2 },
    { symbol: 'ARB', name: 'Arbitrum', icon: '◈', color: '#28A0F0', price: 1.38 },
    { symbol: 'OP', name: 'Optimism', icon: '⊕', color: '#FF0420', price: 2.65 },
    { symbol: 'ADA', name: 'Cardano', icon: '₳', color: '#0033AD', price: 0.72 },
    { symbol: 'MATIC', name: 'Polygon', icon: '⬟', color: '#8247E5', price: 0.58 },
    { symbol: 'DOT', name: 'Polkadot', icon: '●', color: '#E6007A', price: 7.8 },
    { symbol: 'NEAR', name: 'NEAR', icon: '◉', color: '#00C1DE', price: 5.6 },
    { symbol: 'SUI', name: 'Sui', icon: '◈', color: '#6FBCF0', price: 3.2 },
    { symbol: 'APT', name: 'Aptos', icon: '◆', color: '#06BCC1', price: 9.4 },
    { symbol: 'FIL', name: 'Filecoin', icon: '◉', color: '#0090FF', price: 5.1 },
    { symbol: 'INJ', name: 'Injective', icon: '◈', color: '#00F2FE', price: 22.5 },
    { symbol: 'PEPE', name: 'Pepe', icon: '🐸', color: '#4CAF50', price: 0.0000089 },
    { symbol: 'WIF', name: 'dogwifhat', icon: '🐕', color: '#E67E22', price: 1.42 },
  ];

  const exchanges = ['Binance', 'Bybit', 'OKX', 'dYdX', 'Hyperliquid'];

  return coins.map(c => {
    const baseRate = -0.005 + Math.random() * 0.025;
    const exData: Record<string, FundingEntry['exchanges'][string]> = {};
    let sum = 0;
    exchanges.forEach(ex => {
      const rate = baseRate + (Math.random() - 0.5) * 0.008;
      const annual = rate * 3 * 365;
      sum += rate;
      exData[ex] = {
        rate8h: Math.round(rate * 10000) / 10000,
        rateAnnual: Math.round(annual * 100) / 100,
        nextFunding: Math.floor(Math.random() * 480),
        openInterest: Math.round((50 + Math.random() * 500) * 10) / 10,
        volume24h: Math.round((100 + Math.random() * 2000) * 10) / 10,
        longShortRatio: Math.round((0.6 + Math.random() * 0.8) * 100) / 100,
      };
    });
    const avg = sum / exchanges.length;
    return {
      ...c,
      exchanges: exData,
      avgRate: Math.round(avg * 10000) / 10000,
      trend: avg > 0.005 ? 'bullish' : avg < -0.002 ? 'bearish' : 'neutral',
    };
  });
}

/* ──────── Funding History Sparkline ──────── */
function FundingSparkline({ positive, color }: { positive: boolean; color: string }) {
  const points: number[] = [];
  let v = 0.005;
  for (let i = 0; i < 24; i++) {
    v += (Math.random() - 0.48) * 0.003;
    points.push(v);
  };
  const min = Math.min(...points);
  const max = Math.max(...points);
  const h = 30;
  const w = 120;
  const path = points.map((p, i) => {
    const x = (i / (points.length - 1)) * w;
    const y = h - ((p - min) / (max - min || 1)) * h;
    return `${i === 0 ? 'M' : 'L'}${x},${y}`;
  }).join(' ');

  return (
    <svg width={w} height={h} style={{ display: 'block' }}>
      <path d={path} fill="none" stroke={positive ? '#3fb950' : '#f85149'} strokeWidth={1.5} />
    </svg>
  );
}

/* ──────── Main Page ──────── */
export default function FundingRatesPage() {
  const data = useMemo(() => generateData(), []);
  const [sortBy, setSortBy] = useState<'symbol' | 'rate' | 'oi' | 'volume'>('rate');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');
  const [selectedExchange, setSelectedExchange] = useState<string>('all');
  const [filter, setFilter] = useState<'all' | 'positive' | 'negative'>('all');

  const exchanges = ['Binance', 'Bybit', 'OKX', 'dYdX', 'Hyperliquid'];

  const sorted = useMemo(() => {
    let filtered = [...data];
    if (filter === 'positive') filtered = filtered.filter(d => d.avgRate > 0);
    if (filter === 'negative') filtered = filtered.filter(d => d.avgRate < 0);

    return filtered.sort((a, b) => {
      let av = 0, bv = 0;
      if (sortBy === 'symbol') return sortDir === 'asc' ? a.symbol.localeCompare(b.symbol) : b.symbol.localeCompare(a.symbol);
      if (sortBy === 'rate') { av = a.avgRate; bv = b.avgRate; }
      if (sortBy === 'oi') {
        av = Object.values(a.exchanges).reduce((s, e) => s + e.openInterest, 0);
        bv = Object.values(b.exchanges).reduce((s, e) => s + e.openInterest, 0);
      }
      if (sortBy === 'volume') {
        av = Object.values(a.exchanges).reduce((s, e) => s + e.volume24h, 0);
        bv = Object.values(b.exchanges).reduce((s, e) => s + e.volume24h, 0);
      }
      return sortDir === 'asc' ? av - bv : bv - av;
    });
  }, [data, sortBy, sortDir, filter]);

  const toggleSort = (col: typeof sortBy) => {
    if (sortBy === col) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortBy(col); setSortDir('desc'); }
  };

  const formatRate = (r: number) => {
    const pct = (r * 100).toFixed(4);
    return `${r >= 0 ? '+' : ''}${pct}%`;
  };

  // Summary stats
  const avgPositive = data.filter(d => d.avgRate > 0).length;
  const avgRate = data.reduce((s, d) => s + d.avgRate, 0) / data.length;
  const totalOI = data.reduce((s, d) => s + Object.values(d.exchanges).reduce((ss, e) => ss + e.openInterest, 0), 0);
  const highestRate = [...data].sort((a, b) => b.avgRate - a.avgRate)[0];
  const lowestRate = [...data].sort((a, b) => a.avgRate - b.avgRate)[0];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 16px 80px' }}>
        <Breadcrumb items={[{ label: 'Tools', href: '/tools' }, { label: 'Funding Rates' }]} />

        {/* Header */}
        <div style={{ textAlign: 'center', paddingBottom: 32, paddingTop: 20 }}>
          <div style={{ display: 'inline-block', padding: '4px 14px', background: '#6366f120', border: '1px solid #6366f140', borderRadius: 20, fontSize: 12, color: '#818cf8', fontWeight: 600, marginBottom: 16 }}>
            📊 Perpetual Futures Intelligence
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 900, color: 'var(--color-text)', marginBottom: 12 }}>
            Funding Rate Tracker
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, maxWidth: 620, margin: '0 auto' }}>
            Compare perpetual futures funding rates across 5 exchanges and 20 coins. Positive rates mean longs pay shorts (bullish sentiment). Negative rates mean shorts pay longs.
          </p>
        </div>

        {/* Key Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12, marginBottom: 28 }}>
          {[
            { label: 'Market Sentiment', value: avgPositive > data.length / 2 ? 'Bullish' : 'Bearish', color: avgPositive > data.length / 2 ? '#3fb950' : '#f85149', sub: `${avgPositive}/${data.length} coins positive` },
            { label: 'Avg Funding Rate', value: formatRate(avgRate), color: avgRate > 0 ? '#3fb950' : '#f85149', sub: '8h weighted average' },
            { label: 'Total Open Interest', value: `$${(totalOI / 1000).toFixed(1)}B`, color: '#818cf8', sub: 'across 5 exchanges' },
            { label: 'Highest Rate', value: `${highestRate.symbol} ${formatRate(highestRate.avgRate)}`, color: '#3fb950', sub: 'most bullish' },
            { label: 'Lowest Rate', value: `${lowestRate.symbol} ${formatRate(lowestRate.avgRate)}`, color: '#f85149', sub: 'most bearish' },
          ].map((m, i) => (
            <div key={i} style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 10, padding: '12px 14px' }}>
              <div style={{ fontSize: 10, color: '#8b949e', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{m.label}</div>
              <div style={{ fontSize: 18, fontWeight: 900, color: m.color }}>{m.value}</div>
              <div style={{ fontSize: 10, color: '#6e7681', marginTop: 2 }}>{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 20, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <span style={{ fontSize: 11, color: '#8b949e', fontWeight: 700 }}>FILTER:</span>
            {(['all', 'positive', 'negative'] as const).map(f => (
              <button key={f} onClick={() => setFilter(f)}
                style={{
                  background: filter === f ? '#6366f120' : 'transparent',
                  border: `1px solid ${filter === f ? '#6366f1' : '#30363d'}`,
                  color: filter === f ? '#818cf8' : '#8b949e',
                  borderRadius: 6, padding: '3px 10px', cursor: 'pointer', fontSize: 11, fontWeight: 600, textTransform: 'capitalize',
                }}>
                {f}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <span style={{ fontSize: 11, color: '#8b949e', fontWeight: 700 }}>EXCHANGE:</span>
            <button onClick={() => setSelectedExchange('all')}
              style={{
                background: selectedExchange === 'all' ? '#f59e0b20' : 'transparent',
                border: `1px solid ${selectedExchange === 'all' ? '#f59e0b' : '#30363d'}`,
                color: selectedExchange === 'all' ? '#fbbf24' : '#8b949e',
                borderRadius: 6, padding: '3px 10px', cursor: 'pointer', fontSize: 11, fontWeight: 600,
              }}>All</button>
            {exchanges.map(ex => (
              <button key={ex} onClick={() => setSelectedExchange(ex)}
                style={{
                  background: selectedExchange === ex ? '#f59e0b20' : 'transparent',
                  border: `1px solid ${selectedExchange === ex ? '#f59e0b' : '#30363d'}`,
                  color: selectedExchange === ex ? '#fbbf24' : '#8b949e',
                  borderRadius: 6, padding: '3px 10px', cursor: 'pointer', fontSize: 11, fontWeight: 600,
                }}>{ex}</button>
            ))}
          </div>
        </div>

        {/* Main Table */}
        <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 14, overflow: 'hidden', marginBottom: 28 }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: '#0d1117' }}>
                  <th onClick={() => toggleSort('symbol')} style={{ padding: '10px 14px', textAlign: 'left', color: '#8b949e', fontSize: 11, fontWeight: 700, cursor: 'pointer', borderBottom: '1px solid #21262d', textTransform: 'uppercase' }}>
                    Asset {sortBy === 'symbol' ? (sortDir === 'asc' ? '↑' : '↓') : ''}
                  </th>
                  {selectedExchange === 'all' ? exchanges.map(ex => (
                    <th key={ex} style={{ padding: '10px 14px', textAlign: 'center', color: '#8b949e', fontSize: 11, fontWeight: 700, borderBottom: '1px solid #21262d', textTransform: 'uppercase' }}>{ex}</th>
                  )) : (
                    <>
                      <th style={{ padding: '10px 14px', textAlign: 'center', color: '#8b949e', fontSize: 11, fontWeight: 700, borderBottom: '1px solid #21262d' }}>8h RATE</th>
                      <th style={{ padding: '10px 14px', textAlign: 'center', color: '#8b949e', fontSize: 11, fontWeight: 700, borderBottom: '1px solid #21262d' }}>ANNUAL</th>
                      <th style={{ padding: '10px 14px', textAlign: 'center', color: '#8b949e', fontSize: 11, fontWeight: 700, borderBottom: '1px solid #21262d' }}>OPEN INTEREST</th>
                      <th style={{ padding: '10px 14px', textAlign: 'center', color: '#8b949e', fontSize: 11, fontWeight: 700, borderBottom: '1px solid #21262d' }}>24H VOLUME</th>
                      <th style={{ padding: '10px 14px', textAlign: 'center', color: '#8b949e', fontSize: 11, fontWeight: 700, borderBottom: '1px solid #21262d' }}>L/S RATIO</th>
                    </>
                  )}
                  <th onClick={() => toggleSort('rate')} style={{ padding: '10px 14px', textAlign: 'center', color: '#8b949e', fontSize: 11, fontWeight: 700, cursor: 'pointer', borderBottom: '1px solid #21262d' }}>
                    AVG {sortBy === 'rate' ? (sortDir === 'asc' ? '↑' : '↓') : ''}
                  </th>
                  <th style={{ padding: '10px 14px', textAlign: 'center', color: '#8b949e', fontSize: 11, fontWeight: 700, borderBottom: '1px solid #21262d' }}>24H TREND</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((coin, i) => (
                  <tr key={coin.symbol} style={{ borderBottom: '1px solid #21262d', background: i % 2 === 0 ? 'transparent' : '#0d111708' }}>
                    <td style={{ padding: '10px 14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontSize: 16, color: coin.color }}>{coin.icon}</span>
                        <div>
                          <div style={{ fontWeight: 700, color: '#e6edf3' }}>{coin.symbol}</div>
                          <div style={{ fontSize: 10, color: '#8b949e' }}>${coin.price >= 1 ? coin.price.toLocaleString() : coin.price.toFixed(6)}</div>
                        </div>
                      </div>
                    </td>
                    {selectedExchange === 'all' ? exchanges.map(ex => {
                      const d = coin.exchanges[ex];
                      return (
                        <td key={ex} style={{ padding: '10px 14px', textAlign: 'center' }}>
                          <div style={{ fontSize: 13, fontWeight: 700, color: d.rate8h >= 0 ? '#3fb950' : '#f85149' }}>
                            {formatRate(d.rate8h)}
                          </div>
                          <div style={{ fontSize: 10, color: '#6e7681' }}>{d.rateAnnual.toFixed(1)}% APR</div>
                        </td>
                      );
                    }) : (() => {
                      const d = coin.exchanges[selectedExchange];
                      return (
                        <>
                          <td style={{ padding: '10px 14px', textAlign: 'center', fontWeight: 700, color: d.rate8h >= 0 ? '#3fb950' : '#f85149' }}>{formatRate(d.rate8h)}</td>
                          <td style={{ padding: '10px 14px', textAlign: 'center', color: d.rateAnnual >= 0 ? '#3fb950' : '#f85149' }}>{d.rateAnnual.toFixed(1)}%</td>
                          <td style={{ padding: '10px 14px', textAlign: 'center', color: '#e6edf3' }}>${d.openInterest.toFixed(0)}M</td>
                          <td style={{ padding: '10px 14px', textAlign: 'center', color: '#e6edf3' }}>${d.volume24h.toFixed(0)}M</td>
                          <td style={{ padding: '10px 14px', textAlign: 'center' }}>
                            <span style={{ color: d.longShortRatio > 1 ? '#3fb950' : '#f85149', fontWeight: 700 }}>{d.longShortRatio.toFixed(2)}</span>
                          </td>
                        </>
                      );
                    })()}
                    <td style={{ padding: '10px 14px', textAlign: 'center' }}>
                      <span style={{
                        display: 'inline-block', padding: '2px 8px', borderRadius: 6, fontWeight: 800, fontSize: 12,
                        background: coin.avgRate >= 0 ? '#3fb95015' : '#f8514915',
                        color: coin.avgRate >= 0 ? '#3fb950' : '#f85149',
                        border: `1px solid ${coin.avgRate >= 0 ? '#3fb95030' : '#f8514930'}`,
                      }}>
                        {formatRate(coin.avgRate)}
                      </span>
                    </td>
                    <td style={{ padding: '10px 14px', textAlign: 'center' }}>
                      <FundingSparkline positive={coin.avgRate >= 0} color={coin.color} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Funding Rate Arbitrage Opportunities */}
        <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 14, padding: 20, marginBottom: 28 }}>
          <h3 style={{ fontSize: 15, fontWeight: 800, color: '#e6edf3', marginBottom: 4 }}>Funding Rate Arbitrage Opportunities</h3>
          <p style={{ fontSize: 12, color: '#8b949e', marginBottom: 16 }}>When funding rates differ significantly across exchanges, arbitrageurs can profit by going long on the exchange with lower rates and short on the one with higher rates.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 12 }}>
            {data
              .map(coin => {
                const rates = Object.entries(coin.exchanges).map(([ex, d]) => ({ ex, rate: d.rate8h }));
                const maxRate = rates.reduce((a, b) => a.rate > b.rate ? a : b);
                const minRate = rates.reduce((a, b) => a.rate < b.rate ? a : b);
                const spread = maxRate.rate - minRate.rate;
                return { coin, maxRate, minRate, spread };
              })
              .sort((a, b) => b.spread - a.spread)
              .slice(0, 6)
              .map(({ coin, maxRate, minRate, spread }, i) => (
                <div key={i} style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: 10, padding: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontSize: 16, color: coin.color }}>{coin.icon}</span>
                      <span style={{ fontWeight: 800, color: '#e6edf3' }}>{coin.symbol}</span>
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#fbbf24' }}>Spread: {(spread * 100).toFixed(4)}%</span>
                  </div>
                  <div style={{ fontSize: 12, color: '#8b949e' }}>
                    Short on <span style={{ color: '#f85149', fontWeight: 700 }}>{maxRate.ex}</span> ({formatRate(maxRate.rate)}) — Long on <span style={{ color: '#3fb950', fontWeight: 700 }}>{minRate.ex}</span> ({formatRate(minRate.rate)})
                  </div>
                  <div style={{ fontSize: 11, color: '#6e7681', marginTop: 4 }}>
                    Est. annual return: <span style={{ color: '#fbbf24', fontWeight: 700 }}>{(spread * 3 * 365 * 100).toFixed(1)}%</span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Education */}
        <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 14, padding: 24 }}>
          <h3 style={{ fontSize: 16, fontWeight: 800, color: '#e6edf3', marginBottom: 16 }}>Understanding Funding Rates</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              { title: 'What Are Funding Rates?', text: 'Funding rates are periodic payments between long and short traders on perpetual futures. They keep the perpetual contract price anchored to the spot price. Rates are typically paid every 8 hours.' },
              { title: 'Positive vs Negative', text: 'Positive funding: longs pay shorts (bullish market — more demand to go long). Negative funding: shorts pay longs (bearish market — more demand to go short). Extreme rates often precede reversals.' },
              { title: 'Trading Strategy', text: 'High positive rates suggest overleveraged longs — potential for a long squeeze. High negative rates suggest overleveraged shorts — potential for a short squeeze. Use alongside liquidation data for confluence.' },
              { title: 'Funding Arbitrage', text: 'When rates differ across exchanges, traders can go delta-neutral: long on the exchange with lower funding and short on the one with higher funding, collecting the spread as profit.' },
            ].map((item, i) => (
              <div key={i}>
                <h4 style={{ fontSize: 13, fontWeight: 700, color: '#e6edf3', marginBottom: 6 }}>{item.title}</h4>
                <p style={{ fontSize: 12, color: '#8b949e', lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, padding: '10px 14px', background: '#f8514910', border: '1px solid #f8514930', borderRadius: 8, fontSize: 11, color: '#f87171' }}>
            ⚠️ <strong>Disclaimer:</strong> Funding rate data is simulated for educational purposes. Real data requires exchange API connections. Always verify with live exchange data before making trading decisions.
          </div>
        </div>
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Funding Rates",
              "url": "https://degen0x.com/tools/funding-rates",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      <RelatedContent category="tools" currentSlug="/tools/funding-rates" />
      </div>
  );
}
