'use client';

import { useState, useMemo } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

/* ──────── Types ──────── */
interface DayData {
  date: string;
  value: number;
  label: string;
  btcPrice: number;
  ethPrice: number;
  volume24h: number; // billions
  dominance: number; // BTC dominance %
}

/* ──────── Generator ──────── */
function generateTimeline(days: number): DayData[] {
  const result: DayData[] = [];
  let value = 55;
  let btc = 42000;
  let eth = 2200;

  const baseDate = new Date(2026, 2, 10); // March 10, 2026

  for (let i = days; i >= 0; i--) {
    const date = new Date(baseDate);
    date.setDate(date.getDate() - i);

    // Mean-reverting with momentum
    const momentum = (Math.random() - 0.48) * 6;
    const meanRevert = (50 - value) * 0.03;
    value = Math.max(2, Math.min(98, value + momentum + meanRevert));
    value = Math.round(value);

    // Correlated price movement
    const priceCorr = (value - 50) / 50;
    btc *= (1 + priceCorr * 0.008 + (Math.random() - 0.5) * 0.02);
    eth *= (1 + priceCorr * 0.01 + (Math.random() - 0.5) * 0.025);

    const label = value <= 10 ? 'Extreme Fear' :
                  value <= 25 ? 'Fear' :
                  value <= 45 ? 'Neutral' :
                  value <= 75 ? 'Greed' : 'Extreme Greed';

    result.push({
      date: date.toISOString().split('T')[0],
      value,
      label,
      btcPrice: Math.round(btc),
      ethPrice: Math.round(eth * 100) / 100,
      volume24h: Math.round((60 + Math.random() * 80) * 10) / 10,
      dominance: Math.round((48 + Math.random() * 10) * 10) / 10,
    });
  }
  return result;
}

/* ──────── Color utils ──────── */
function getColor(value: number): string {
  if (value <= 10) return '#ef4444';
  if (value <= 25) return '#f97316';
  if (value <= 45) return '#eab308';
  if (value <= 55) return '#a3a3a3';
  if (value <= 75) return '#22c55e';
  return '#10b981';
}

/* ──────── Gauge Component ──────── */
function FearGreedGauge({ value }: { value: number }) {
  const angle = -90 + (value / 100) * 180;
  const r = 100;
  const cx = 120;
  const cy = 120;

  // Arc segments
  const segments = [
    { start: -90, end: -54, color: '#ef4444' },  // Extreme Fear
    { start: -54, end: -18, color: '#f97316' },  // Fear
    { start: -18, end: 18, color: '#eab308' },   // Neutral
    { start: 18, end: 54, color: '#22c55e' },    // Greed
    { start: 54, end: 90, color: '#10b981' },    // Extreme Greed
  ];

  const polarToCart = (a: number) => ({
    x: cx + r * Math.cos(a * Math.PI / 180),
    y: cy + r * Math.sin(a * Math.PI / 180),
  });

  return (
    <svg viewBox="0 0 240 150" style={{ width: 280, height: 'auto' }}>
      {segments.map((seg, i) => {
        const s = polarToCart(seg.start);
        const e = polarToCart(seg.end);
        const largeArc = seg.end - seg.start > 180 ? 1 : 0;
        return (
          <path key={i} d={`M ${s.x} ${s.y} A ${r} ${r} 0 ${largeArc} 1 ${e.x} ${e.y}`}
            fill="none" stroke={seg.color} strokeWidth={16} strokeLinecap="round" opacity={0.7} />
        );
      })}
      {/* Needle */}
      <line x1={cx} y1={cy} x2={cx + 75 * Math.cos(angle * Math.PI / 180)} y2={cy + 75 * Math.sin(angle * Math.PI / 180)}
        stroke="#e6edf3" strokeWidth={3} strokeLinecap="round" />
      <circle cx={cx} cy={cy} r={8} fill="#e6edf3" />
      <circle cx={cx} cy={cy} r={4} fill={getColor(value)} />
      {/* Value */}
      <text x={cx} y={cy + 35} textAnchor="middle" fill={getColor(value)} fontSize={32} fontWeight={900}>{value}</text>
    </svg>
  );
}

/* ──────── Timeline Chart ──────── */
function TimelineChart({ data, height = 280 }: { data: DayData[]; height?: number }) {
  const width = 900;
  const pad = { top: 20, right: 20, bottom: 30, left: 40 };
  const cw = width - pad.left - pad.right;
  const ch = height - pad.top - pad.bottom;

  const xScale = (i: number) => pad.left + (i / (data.length - 1)) * cw;
  const yScale = (v: number) => pad.top + ch - (v / 100) * ch;

  // Build path
  const path = data.map((d, i) => `${i === 0 ? 'M' : 'L'}${xScale(i)},${yScale(d.value)}`).join(' ');
  const areaPath = path + ` L${xScale(data.length - 1)},${yScale(0)} L${xScale(0)},${yScale(0)} Z`;

  // Zone backgrounds
  const zones = [
    { min: 0, max: 25, color: '#ef4444', label: 'Fear' },
    { min: 25, max: 45, color: '#f97316', label: '' },
    { min: 45, max: 55, color: '#eab308', label: 'Neutral' },
    { min: 55, max: 75, color: '#22c55e', label: '' },
    { min: 75, max: 100, color: '#10b981', label: 'Greed' },
  ];

  // X-axis ticks (show ~8 dates)
  const tickStep = Math.max(1, Math.floor(data.length / 8));
  const xTicks = data.filter((_, i) => i % tickStep === 0 || i === data.length - 1);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
      <rect x={pad.left} y={pad.top} width={cw} height={ch} fill="#0d1117" rx={4} />

      {/* Zone bands */}
      {zones.map((z, i) => (
        <rect key={i} x={pad.left} y={yScale(z.max)} width={cw} height={yScale(z.min) - yScale(z.max)}
          fill={z.color} opacity={0.05} />
      ))}

      {/* Horizontal guides */}
      {[0, 25, 50, 75, 100].map(v => (
        <g key={v}>
          <line x1={pad.left} y1={yScale(v)} x2={width - pad.right} y2={yScale(v)} stroke="#21262d" strokeWidth={1} />
          <text x={pad.left - 6} y={yScale(v) + 4} textAnchor="end" fill="#6e7681" fontSize={10}>{v}</text>
        </g>
      ))}

      {/* Area fill */}
      <defs>
        <linearGradient id="fgGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
          <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#fgGrad)" />

      {/* Line with color segments */}
      {data.slice(0, -1).map((d, i) => (
        <line key={i} x1={xScale(i)} y1={yScale(d.value)} x2={xScale(i + 1)} y2={yScale(data[i + 1].value)}
          stroke={getColor(d.value)} strokeWidth={2} />
      ))}

      {/* Dots for today and notable points */}
      <circle cx={xScale(data.length - 1)} cy={yScale(data[data.length - 1].value)} r={5} fill={getColor(data[data.length - 1].value)} stroke="#0d1117" strokeWidth={2} />

      {/* X-axis ticks */}
      {xTicks.map((d, i) => {
        const idx = data.indexOf(d);
        return (
          <text key={i} x={xScale(idx)} y={height - 6} textAnchor="middle" fill="#6e7681" fontSize={9}>
            {new Date(d.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </text>
        );
      })}

      {/* Labels */}
      <text x={pad.left + 6} y={yScale(88)} fill="#10b981" fontSize={9} opacity={0.6}>Extreme Greed</text>
      <text x={pad.left + 6} y={yScale(12)} fill="#ef4444" fontSize={9} opacity={0.6}>Extreme Fear</text>
    </svg>
  );
}

/* ──────── Main Page ──────── */
export default function FearGreedTimelinePage() {
  const [period, setPeriod] = useState<'30d' | '90d' | '180d' | '365d'>('90d');

  const days = period === '30d' ? 30 : period === '90d' ? 90 : period === '180d' ? 180 : 365;
  const timeline = useMemo(() => generateTimeline(days), [days]);
  const today = timeline[timeline.length - 1];
  const yesterday = timeline[timeline.length - 2];
  const weekAgo = timeline[Math.max(0, timeline.length - 8)];
  const monthAgo = timeline[Math.max(0, timeline.length - 31)];

  // Stats
  const avg = Math.round(timeline.reduce((s, d) => s + d.value, 0) / timeline.length);
  const fearDays = timeline.filter(d => d.value <= 25).length;
  const greedDays = timeline.filter(d => d.value >= 75).length;
  const lowestDay = timeline.reduce((a, b) => a.value < b.value ? a : b);
  const highestDay = timeline.reduce((a, b) => a.value > b.value ? a : b);

  const formatPrice = (p: number) => p >= 1000 ? `$${p.toLocaleString()}` : `$${p.toFixed(2)}`;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px 80px' }}>
        <Breadcrumb items={[{ label: 'Tools', href: '/tools' }, { label: 'Fear & Greed Timeline' }]} />

        {/* Header */}
        <div style={{ textAlign: 'center', paddingBottom: 32, paddingTop: 20 }}>
          <div style={{ display: 'inline-block', padding: '4px 14px', background: '#eab30820', border: '1px solid #eab30840', borderRadius: 20, fontSize: 12, color: '#fbbf24', fontWeight: 600, marginBottom: 16 }}>
            🧠 Market Psychology
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 900, color: 'var(--color-text)', marginBottom: 12 }}>
            Fear & Greed Timeline
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, maxWidth: 600, margin: '0 auto' }}>
            Track the crypto market&apos;s emotional state over time. Historical Fear &amp; Greed index with BTC price correlation and sentiment analysis.
          </p>
        </div>

        {/* Current gauge + comparison */}
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 28, marginBottom: 32, alignItems: 'center' }}>
          <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 14, padding: '24px 32px', textAlign: 'center' }}>
            <div style={{ fontSize: 11, color: '#8b949e', fontWeight: 700, textTransform: 'uppercase', marginBottom: 4 }}>Today&apos;s Index</div>
            <FearGreedGauge value={today.value} />
            <div style={{ fontSize: 16, fontWeight: 800, color: getColor(today.value), marginTop: -4 }}>{today.label}</div>
            <div style={{ fontSize: 11, color: '#6e7681', marginTop: 4 }}>{today.date}</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12 }}>
            {[
              { label: 'Yesterday', value: yesterday.value, date: yesterday.date },
              { label: '1 Week Ago', value: weekAgo.value, date: weekAgo.date },
              { label: '1 Month Ago', value: monthAgo.value, date: monthAgo.date },
              { label: 'Period Average', value: avg, date: `${days}d avg` },
              { label: `BTC Price`, value: null, price: formatPrice(today.btcPrice), color: '#F7931A' },
              { label: 'ETH Price', value: null, price: formatPrice(today.ethPrice), color: '#627EEA' },
              { label: 'Fear Days', value: null, price: `${fearDays} days`, color: '#ef4444', sub: `of ${days}d` },
              { label: 'Greed Days', value: null, price: `${greedDays} days`, color: '#10b981', sub: `of ${days}d` },
            ].map((m, i) => (
              <div key={i} style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 10, padding: '10px 14px' }}>
                <div style={{ fontSize: 10, color: '#8b949e', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 4 }}>{m.label}</div>
                {m.value !== null ? (
                  <>
                    <div style={{ fontSize: 22, fontWeight: 900, color: getColor(m.value) }}>{m.value}</div>
                    <div style={{ fontSize: 10, color: '#6e7681' }}>{m.date}</div>
                  </>
                ) : (
                  <>
                    <div style={{ fontSize: 18, fontWeight: 900, color: m.color }}>{m.price}</div>
                    {m.sub && <div style={{ fontSize: 10, color: '#6e7681' }}>{m.sub}</div>}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Period selector */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 20 }}>
          {(['30d', '90d', '180d', '365d'] as const).map(p => (
            <button key={p} onClick={() => setPeriod(p)}
              style={{
                background: period === p ? '#6366f120' : 'transparent',
                border: `1px solid ${period === p ? '#6366f1' : '#30363d'}`,
                color: period === p ? '#818cf8' : '#8b949e',
                borderRadius: 8, padding: '6px 16px', cursor: 'pointer', fontSize: 13, fontWeight: 700,
              }}>
              {p}
            </button>
          ))}
        </div>

        {/* Timeline Chart */}
        <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 14, padding: 20, marginBottom: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <h2 style={{ fontSize: 16, fontWeight: 800, color: '#e6edf3' }}>Fear & Greed Index — {days} Days</h2>
            <div style={{ display: 'flex', gap: 12, fontSize: 11 }}>
              <span style={{ color: '#ef4444' }}>■ Fear</span>
              <span style={{ color: '#eab308' }}>■ Neutral</span>
              <span style={{ color: '#10b981' }}>■ Greed</span>
            </div>
          </div>
          <TimelineChart data={timeline} />
        </div>

        {/* Heatmap calendar (last 90 days) */}
        <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 14, padding: 20, marginBottom: 28 }}>
          <h3 style={{ fontSize: 15, fontWeight: 800, color: '#e6edf3', marginBottom: 16 }}>Sentiment Calendar (Last 90 Days)</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            {timeline.slice(-90).map((d, i) => (
              <div key={i} title={`${d.date}: ${d.value} (${d.label})`}
                style={{
                  width: 14, height: 14, borderRadius: 2,
                  background: getColor(d.value),
                  opacity: 0.3 + (d.value / 100) * 0.7,
                }} />
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 10, fontSize: 10, color: '#8b949e' }}>
            <span>Extreme Fear</span>
            <div style={{ display: 'flex', gap: 2 }}>
              {[10, 25, 40, 55, 70, 85].map(v => (
                <div key={v} style={{ width: 12, height: 12, borderRadius: 2, background: getColor(v), opacity: 0.3 + (v / 100) * 0.7 }} />
              ))}
            </div>
            <span>Extreme Greed</span>
          </div>
        </div>

        {/* Notable Events */}
        <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 14, padding: 20, marginBottom: 28 }}>
          <h3 style={{ fontSize: 15, fontWeight: 800, color: '#e6edf3', marginBottom: 16 }}>Notable Extremes</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div style={{ background: '#ef444410', border: '1px solid #ef444430', borderRadius: 10, padding: 16 }}>
              <div style={{ fontSize: 12, color: '#ef4444', fontWeight: 700, marginBottom: 8 }}>Most Fearful Day</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: '#ef4444' }}>{lowestDay.value}</div>
              <div style={{ fontSize: 12, color: '#8b949e', marginTop: 4 }}>{lowestDay.date} — BTC at {formatPrice(lowestDay.btcPrice)}</div>
              <div style={{ fontSize: 11, color: '#6e7681', marginTop: 2 }}>{lowestDay.label}</div>
            </div>
            <div style={{ background: '#10b98110', border: '1px solid #10b98130', borderRadius: 10, padding: 16 }}>
              <div style={{ fontSize: 12, color: '#10b981', fontWeight: 700, marginBottom: 8 }}>Most Greedy Day</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: '#10b981' }}>{highestDay.value}</div>
              <div style={{ fontSize: 12, color: '#8b949e', marginTop: 4 }}>{highestDay.date} — BTC at {formatPrice(highestDay.btcPrice)}</div>
              <div style={{ fontSize: 11, color: '#6e7681', marginTop: 2 }}>{highestDay.label}</div>
            </div>
          </div>
        </div>

        {/* Historical data table */}
        <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 14, padding: 20, marginBottom: 28 }}>
          <h3 style={{ fontSize: 15, fontWeight: 800, color: '#e6edf3', marginBottom: 16 }}>Recent History (Last 30 Days)</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr>
                  {['Date', 'Index', 'Sentiment', 'BTC Price', 'ETH Price', '24h Volume', 'BTC Dominance'].map(h => (
                    <th key={h} style={{ padding: '8px 12px', textAlign: 'left', color: '#8b949e', fontSize: 11, fontWeight: 700, borderBottom: '1px solid #21262d', textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeline.slice(-30).reverse().map((d, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #21262d' }}>
                    <td style={{ padding: '6px 12px', color: '#8b949e', fontSize: 12 }}>{d.date}</td>
                    <td style={{ padding: '6px 12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <div style={{ width: 24, height: 24, borderRadius: '50%', background: getColor(d.value), display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 900, color: '#fff' }}>{d.value}</div>
                      </div>
                    </td>
                    <td style={{ padding: '6px 12px' }}>
                      <span style={{ padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 700, background: `${getColor(d.value)}15`, color: getColor(d.value) }}>{d.label}</span>
                    </td>
                    <td style={{ padding: '6px 12px', color: '#e6edf3', fontWeight: 600 }}>{formatPrice(d.btcPrice)}</td>
                    <td style={{ padding: '6px 12px', color: '#e6edf3' }}>{formatPrice(d.ethPrice)}</td>
                    <td style={{ padding: '6px 12px', color: '#8b949e' }}>${d.volume24h}B</td>
                    <td style={{ padding: '6px 12px', color: '#8b949e' }}>{d.dominance}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Education */}
        <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 14, padding: 24 }}>
          <h3 style={{ fontSize: 16, fontWeight: 800, color: '#e6edf3', marginBottom: 16 }}>Understanding the Fear & Greed Index</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              { title: 'What Drives the Index?', text: 'The Fear & Greed Index aggregates multiple signals: market volatility, momentum/volume, social media sentiment, Bitcoin dominance, Google Trends data, and survey results. Each factor is weighted to produce a score from 0 (Extreme Fear) to 100 (Extreme Greed).' },
              { title: 'Contrarian Indicator', text: 'Warren Buffett famously said "be fearful when others are greedy, and greedy when others are fearful." Historically, extreme fear periods have been some of the best buying opportunities, while extreme greed often precedes corrections.' },
              { title: 'Reading the Zones', text: '0–25: Extreme Fear (potential buying opportunity). 25–45: Fear. 45–55: Neutral. 55–75: Greed. 75–100: Extreme Greed (potential selling signal). The index works best as a longer-term indicator, not for day trading.' },
              { title: 'Price Correlation', text: 'The Fear & Greed Index tends to correlate with price — but extreme readings often precede reversals. Look for divergences: rising prices with falling greed, or falling prices with rising fear, as these can signal turning points.' },
            ].map((item, i) => (
              <div key={i}>
                <h4 style={{ fontSize: 13, fontWeight: 700, color: '#e6edf3', marginBottom: 6 }}>{item.title}</h4>
                <p style={{ fontSize: 12, color: '#8b949e', lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, padding: '10px 14px', background: '#eab30810', border: '1px solid #eab30830', borderRadius: 8, fontSize: 11, color: '#fbbf24' }}>
            ℹ️ <strong>Note:</strong> Historical data is simulated for demonstration. The actual Fear & Greed Index is published daily by alternative.me. This tool shows the concept with synthetic data to illustrate the analytical framework.
          </div>
        </div>
      </div>
    </div>
  );
}
