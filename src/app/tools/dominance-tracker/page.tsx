'use client';

import { useState, useMemo } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

/* ──────────────── Types ──────────────── */
interface DominancePoint {
  date: string;
  btc: number;
  eth: number;
  sol: number;
  bnb: number;
  others: number;
}

type ViewMode = 'dominance' | 'altseason' | 'rotation';

/* ──────────────── Data Generator ──────────────── */
function seed(s: number): () => number {
  let x = s;
  return () => { x = (x * 16807 + 0) % 2147483647; return (x - 1) / 2147483646; };
}

function generateDominanceData(): DominancePoint[] {
  const rng = seed(77);
  const points: DominancePoint[] = [];
  let btc = 52, eth = 18, sol = 4.5, bnb = 3.5;

  for (let i = 365; i >= 0; i--) {
    const date = new Date(2026, 2, 10);
    date.setDate(date.getDate() - i);
    const ds = date.toISOString().split('T')[0];

    btc += (rng() - 0.48) * 0.4;
    eth += (rng() - 0.5) * 0.25;
    sol += (rng() - 0.47) * 0.15;
    bnb += (rng() - 0.5) * 0.1;

    btc = Math.max(38, Math.min(62, btc));
    eth = Math.max(12, Math.min(22, eth));
    sol = Math.max(2, Math.min(8, sol));
    bnb = Math.max(2, Math.min(6, bnb));

    const others = Math.max(5, 100 - btc - eth - sol - bnb);
    const total = btc + eth + sol + bnb + others;

    points.push({
      date: ds,
      btc: Math.round((btc / total) * 10000) / 100,
      eth: Math.round((eth / total) * 10000) / 100,
      sol: Math.round((sol / total) * 10000) / 100,
      bnb: Math.round((bnb / total) * 10000) / 100,
      others: Math.round((others / total) * 10000) / 100,
    });
  }
  return points;
}

/* ──────────────── Altseason Index ──────────────── */
function computeAltseasonIndex(data: DominancePoint[]): number {
  if (data.length < 30) return 50;
  const recent = data.slice(-30);
  const btcDomStart = recent[0].btc;
  const btcDomEnd = recent[recent.length - 1].btc;
  const btcDelta = btcDomEnd - btcDomStart;
  // Inverse of BTC dominance change → altseason indicator
  const raw = 50 + (-btcDelta) * 8;
  return Math.max(0, Math.min(100, Math.round(raw)));
}

/* ──────────────── SVG Chart ──────────────── */
function DominanceChart({ data, range }: { data: DominancePoint[]; range: number }) {
  const sliced = data.slice(-range);
  const W = 800, H = 300;
  const pad = { t: 20, r: 10, b: 30, l: 40 };
  const cW = W - pad.l - pad.r;
  const cH = H - pad.t - pad.b;

  const colors = { btc: '#F7931A', eth: '#627EEA', sol: '#9945FF', bnb: '#F3BA2F', others: '#6b7280' };
  const keys = ['others', 'bnb', 'sol', 'eth', 'btc'] as const;

  // Stacked area
  const stacks = sliced.map((d, i) => {
    const x = pad.l + (i / (sliced.length - 1)) * cW;
    let y0 = pad.t + cH;
    const layers: Record<string, { y0: number; y1: number }> = {};
    for (const k of keys) {
      const h = (d[k] / 100) * cH;
      layers[k] = { y0, y1: y0 - h };
      y0 -= h;
    }
    return { x, layers };
  });

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: 340 }}>
      {/* Y axis labels */}
      {[0, 25, 50, 75, 100].map(v => {
        const y = pad.t + cH - (v / 100) * cH;
        return (
          <g key={v}>
            <line x1={pad.l} x2={W - pad.r} y1={y} y2={y} stroke="#1e293b" strokeWidth={0.5} />
            <text x={pad.l - 6} y={y + 4} textAnchor="end" fill="#6b7280" fontSize={10}>{v}%</text>
          </g>
        );
      })}

      {/* Stacked areas */}
      {keys.map(k => {
        const d = stacks.map((s, i) =>
          `${i === 0 ? 'M' : 'L'}${s.x},${s.layers[k].y1}`
        ).join(' ') + stacks.map((s, i) =>
          `${i === 0 ? 'L' : 'L'}${stacks[stacks.length - 1 - i].x},${stacks[stacks.length - 1 - i].layers[k].y0}`
        ).join(' ') + 'Z';
        return <path key={k} d={d} fill={colors[k]} opacity={0.75} />;
      })}

      {/* X axis dates */}
      {[0, Math.floor(sliced.length / 4), Math.floor(sliced.length / 2), Math.floor(3 * sliced.length / 4), sliced.length - 1].map(i => {
        const x = pad.l + (i / (sliced.length - 1)) * cW;
        return (
          <text key={i} x={x} y={H - 8} textAnchor="middle" fill="#6b7280" fontSize={10}>
            {sliced[i]?.date.slice(5)}
          </text>
        );
      })}
    </svg>
  );
}

/* ──────────────── Gauge ──────────────── */
function AltseasonGauge({ value }: { value: number }) {
  const angle = -90 + (value / 100) * 180;
  const label = value >= 75 ? 'Altseason' : value >= 55 ? 'Alt-Leaning' : value >= 45 ? 'Neutral' : value >= 25 ? 'BTC-Leaning' : 'BTC Season';
  const color = value >= 75 ? '#22c55e' : value >= 55 ? '#84cc16' : value >= 45 ? '#eab308' : value >= 25 ? '#f97316' : '#ef4444';

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 200 120" className="w-48 h-28">
        {/* Background arc */}
        <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#1e293b" strokeWidth={14} strokeLinecap="round" />
        {/* Colored arc */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="url(#gaugeGrad)"
          strokeWidth={14}
          strokeLinecap="round"
          strokeDasharray={`${(value / 100) * 251.3} 251.3`}
        />
        <defs>
          <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="25%" stopColor="#f97316" />
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="75%" stopColor="#84cc16" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>
        {/* Needle */}
        <line
          x1="100" y1="100"
          x2={100 + 65 * Math.cos((angle * Math.PI) / 180)}
          y2={100 + 65 * Math.sin((angle * Math.PI) / 180)}
          stroke="white" strokeWidth={2.5} strokeLinecap="round"
        />
        <circle cx="100" cy="100" r="5" fill="white" />
        <text x="100" y="85" textAnchor="middle" fill={color} fontSize={22} fontWeight={900}>{value}</text>
      </svg>
      <div className="text-lg font-black mt-1" style={{ color }}>{label}</div>
      <div className="text-xs text-gray-500 mt-1">0 = Full BTC Season • 100 = Full Altseason</div>
    </div>
  );
}

/* ──────────────── Sector Rotation Table ──────────────── */
const SECTOR_ROTATION = [
  { sector: 'Layer 1', inflow7d: 2.4, inflow30d: 8.1, momentum: 'Rising', color: '#22c55e' },
  { sector: 'Layer 2', inflow7d: 0.8, inflow30d: 3.2, momentum: 'Rising', color: '#22c55e' },
  { sector: 'DeFi', inflow7d: 1.2, inflow30d: -1.5, momentum: 'Flat', color: '#eab308' },
  { sector: 'Meme', inflow7d: -0.6, inflow30d: 5.8, momentum: 'Cooling', color: '#f97316' },
  { sector: 'AI', inflow7d: 1.8, inflow30d: 12.4, momentum: 'Hot', color: '#22c55e' },
  { sector: 'Gaming', inflow7d: -0.3, inflow30d: -2.1, momentum: 'Declining', color: '#ef4444' },
  { sector: 'Exchange', inflow7d: 0.2, inflow30d: 0.8, momentum: 'Stable', color: '#6b7280' },
  { sector: 'Privacy', inflow7d: 0.5, inflow30d: 1.2, momentum: 'Rising', color: '#22c55e' },
  { sector: 'Storage', inflow7d: -0.1, inflow30d: -0.5, momentum: 'Flat', color: '#eab308' },
  { sector: 'Oracle', inflow7d: 0.3, inflow30d: 2.1, momentum: 'Rising', color: '#22c55e' },
  { sector: 'RWA', inflow7d: 2.1, inflow30d: 15.2, momentum: 'Hot', color: '#22c55e' },
];

/* ──────────────── Page ──────────────── */
export default function DominanceTrackerPage() {
  const data = useMemo(generateDominanceData, []);
  const [view, setView] = useState<ViewMode>('dominance');
  const [range, setRange] = useState(90);

  const latest = data[data.length - 1];
  const altIndex = useMemo(() => computeAltseasonIndex(data), [data]);

  // Dominance change calculations
  const prev30 = data[data.length - 31] || data[0];
  const btcChange30 = latest.btc - prev30.btc;
  const ethChange30 = latest.eth - prev30.eth;

  return (
    <main className="min-h-screen bg-[#0d1117] text-gray-100 pb-20">
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/tools' },
          { label: 'Dominance Tracker' },
        ]} />

        {/* Header */}
        <div className="mt-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
            BTC Dominance & Altcoin Season Index
          </h1>
          <p className="text-gray-400 mt-2 max-w-2xl">
            Track Bitcoin dominance trends, detect altcoin seasons, and monitor capital rotation between sectors.
            The Altseason Index measures whether alts are outperforming BTC.
          </p>
        </div>

        {/* View Tabs */}
        <div className="flex bg-[#161b22] border border-gray-700 rounded-lg overflow-hidden mb-6 w-fit">
          {([['dominance', '📊 Dominance'], ['altseason', '🌡️ Altseason'], ['rotation', '🔄 Rotation']] as [ViewMode, string][]).map(([m, label]) => (
            <button
              key={m}
              onClick={() => setView(m)}
              className={`px-5 py-2.5 text-sm font-bold transition-colors ${
                view === m ? 'bg-orange-600 text-[var(--color-text)]' : 'text-gray-400 hover:text-[var(--color-text)] hover:bg-[#1c2330]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
          <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4">
            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">BTC Dominance</div>
            <div className="text-2xl font-black text-orange-400 mt-1">{latest.btc.toFixed(1)}%</div>
            <div className={`text-xs mt-1 font-bold ${btcChange30 > 0 ? 'text-green-400' : 'text-red-400'}`}>
              {btcChange30 > 0 ? '▲' : '▼'} {Math.abs(btcChange30).toFixed(2)}% (30d)
            </div>
          </div>
          <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4">
            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">ETH Dominance</div>
            <div className="text-2xl font-black text-blue-400 mt-1">{latest.eth.toFixed(1)}%</div>
            <div className={`text-xs mt-1 font-bold ${ethChange30 > 0 ? 'text-green-400' : 'text-red-400'}`}>
              {ethChange30 > 0 ? '▲' : '▼'} {Math.abs(ethChange30).toFixed(2)}% (30d)
            </div>
          </div>
          <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4">
            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">SOL Dominance</div>
            <div className="text-2xl font-black text-purple-400 mt-1">{latest.sol.toFixed(1)}%</div>
          </div>
          <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4">
            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Altseason Index</div>
            <div className="text-2xl font-black mt-1" style={{ color: altIndex >= 50 ? '#22c55e' : '#f97316' }}>
              {altIndex}/100
            </div>
          </div>
          <div className="bg-[#161b22] border border-gray-700 rounded-xl p-4">
            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Others</div>
            <div className="text-2xl font-black text-gray-400 mt-1">{latest.others.toFixed(1)}%</div>
          </div>
        </div>

        {/* Range Selector */}
        <div className="flex gap-2 mb-6">
          {[30, 90, 180, 365].map(r => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors ${
                range === r ? 'bg-orange-600 text-[var(--color-text)]' : 'bg-[#161b22] border border-gray-700 text-gray-400 hover:text-[var(--color-text)]'
              }`}
            >
              {r}d
            </button>
          ))}
        </div>

        {/* DOMINANCE VIEW */}
        {view === 'dominance' && (
          <>
            <div className="bg-[#161b22] border border-gray-700 rounded-xl p-5 mb-6">
              <h2 className="text-lg font-black mb-4">Market Dominance (Stacked Area)</h2>
              <DominanceChart data={data} range={range} />
              {/* Legend */}
              <div className="flex flex-wrap gap-4 mt-4">
                {[['BTC', '#F7931A'], ['ETH', '#627EEA'], ['SOL', '#9945FF'], ['BNB', '#F3BA2F'], ['Others', '#6b7280']].map(([name, color]) => (
                  <div key={name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded" style={{ backgroundColor: color as string }} />
                    <span className="text-xs text-gray-400 font-bold">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dominance Bars */}
            <div className="bg-[#161b22] border border-gray-700 rounded-xl p-5 mb-6">
              <h2 className="text-lg font-black mb-4">Current Dominance Breakdown</h2>
              <div className="space-y-3">
                {[
                  { name: 'Bitcoin', val: latest.btc, color: '#F7931A' },
                  { name: 'Ethereum', val: latest.eth, color: '#627EEA' },
                  { name: 'Solana', val: latest.sol, color: '#9945FF' },
                  { name: 'BNB', val: latest.bnb, color: '#F3BA2F' },
                  { name: 'Others', val: latest.others, color: '#6b7280' },
                ].map(item => (
                  <div key={item.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-bold">{item.name}</span>
                      <span className="font-mono" style={{ color: item.color }}>{item.val.toFixed(2)}%</span>
                    </div>
                    <div className="h-3 bg-[#0d1117] rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all" style={{ width: `${item.val}%`, backgroundColor: item.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ALTSEASON VIEW */}
        {view === 'altseason' && (
          <>
            <div className="bg-[#161b22] border border-gray-700 rounded-xl p-5 mb-6">
              <h2 className="text-lg font-black mb-4">Altcoin Season Index</h2>
              <AltseasonGauge value={altIndex} />
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#0d1117] rounded-lg p-4">
                  <div className="text-xs text-gray-500 mb-1">How It Works</div>
                  <p className="text-sm text-gray-400">
                    When BTC dominance drops, altcoins typically outperform. The index tracks 30-day dominance
                    shifts to determine if we are in Bitcoin Season (0–25), Neutral (25–75), or Altcoin Season (75–100).
                  </p>
                </div>
                <div className="bg-[#0d1117] rounded-lg p-4">
                  <div className="text-xs text-gray-500 mb-1">Current Signal</div>
                  <p className="text-sm text-gray-400">
                    {altIndex >= 60
                      ? 'Altcoins are showing strength relative to Bitcoin. Capital is rotating into smaller-cap assets. Consider diversifying.'
                      : altIndex >= 40
                      ? 'The market is relatively balanced between BTC and alts. No strong rotation signal detected.'
                      : 'Bitcoin is dominant. Historically, this means alts may underperform in the near term. Consider BTC-heavy positioning.'
                    }
                  </p>
                </div>
                <div className="bg-[#0d1117] rounded-lg p-4">
                  <div className="text-xs text-gray-500 mb-1">Historical Context</div>
                  <p className="text-sm text-gray-400">
                    The last major altseason (index {">"} 85) occurred when BTC dominance dropped below 40%. Current
                    BTC dominance of {latest.btc.toFixed(1)}% suggests
                    {latest.btc > 50 ? ' BTC still holds majority market share.' : ' alts are gaining ground.'}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ROTATION VIEW */}
        {view === 'rotation' && (
          <div className="bg-[#161b22] border border-gray-700 rounded-xl overflow-hidden mb-6">
            <div className="p-4 border-b border-gray-700">
              <h2 className="text-lg font-black">Sector Capital Rotation</h2>
              <p className="text-sm text-gray-500 mt-1">Estimated net flows and momentum by sector over 7d and 30d periods</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700 text-gray-500 text-xs uppercase tracking-wider">
                    <th className="p-3 text-left">Sector</th>
                    <th className="p-3 text-right">Net Flow 7d</th>
                    <th className="p-3 text-right">Net Flow 30d</th>
                    <th className="p-3 text-left">Momentum</th>
                    <th className="p-3 text-left">Signal</th>
                  </tr>
                </thead>
                <tbody>
                  {SECTOR_ROTATION.sort((a, b) => b.inflow30d - a.inflow30d).map(s => (
                    <tr key={s.sector} className="border-b border-gray-800 hover:bg-[#1c2330]">
                      <td className="p-3 font-bold">{s.sector}</td>
                      <td className="p-3 text-right font-mono font-bold" style={{ color: s.inflow7d > 0 ? '#22c55e' : s.inflow7d < 0 ? '#ef4444' : '#6b7280' }}>
                        {s.inflow7d > 0 ? '+' : ''}{s.inflow7d.toFixed(1)}%
                      </td>
                      <td className="p-3 text-right font-mono font-bold" style={{ color: s.inflow30d > 0 ? '#22c55e' : s.inflow30d < 0 ? '#ef4444' : '#6b7280' }}>
                        {s.inflow30d > 0 ? '+' : ''}{s.inflow30d.toFixed(1)}%
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded text-xs font-bold" style={{ color: s.color, backgroundColor: s.color + '20' }}>
                          {s.momentum}
                        </span>
                      </td>
                      <td className="p-3 text-gray-400 text-xs">
                        {s.momentum === 'Hot' ? '🔥 Strong buy signal' :
                         s.momentum === 'Rising' ? '📈 Accumulation' :
                         s.momentum === 'Cooling' ? '⚠️ Take profits' :
                         s.momentum === 'Declining' ? '📉 Avoid new entries' :
                         s.momentum === 'Flat' ? '➡️ Wait for breakout' : '⏸️ Hold'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* SEO Content */}
        <div className="bg-[#161b22] border border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-black mb-4">Understanding BTC Dominance and Altcoin Seasons</h2>
          <div className="text-gray-400 space-y-3 text-sm leading-relaxed">
            <p>
              Bitcoin dominance measures BTC&#39;s share of the total cryptocurrency market capitalization. When BTC dominance
              rises, it typically means Bitcoin is outperforming altcoins — traders are moving capital from riskier assets
              into Bitcoin as a &quot;safe haven&quot; within crypto. Conversely, falling BTC dominance signals that altcoins are
              attracting more capital, often called an &quot;altcoin season.&quot;
            </p>
            <p>
              The Altcoin Season Index quantifies this rotation on a 0–100 scale. Readings above 75 indicate a strong
              altseason where the majority of top altcoins are outperforming Bitcoin. Readings below 25 suggest BTC Season
              where holding Bitcoin is likely the best risk-adjusted strategy.
            </p>
            <p>
              Sector rotation analysis adds another dimension — even during neutral market conditions, capital often flows
              between sectors. For example, in early 2026, the AI and RWA (Real World Assets) sectors have seen significant
              inflows while gaming tokens have experienced outflows. Monitoring these rotation patterns can help investors
              position ahead of major sector moves.
            </p>
          </div>
        </div>
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Dominance Tracker",
              "url": "https://degen0x.com/tools/dominance-tracker",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </div>
    
        <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
          <span style={{ color: "#8b949e" }}>Related: </span>
          <a href="/tools/exchange-cashback" style={{ color: "#fb923c", marginRight: "1rem" }}>Exchange Cashback</a>
        
          <a href="/tools/index-fund-simulator" style={{ color: "#fb923c", marginRight: "1rem" }}>Index Fund Simulator</a>
        
          <a href="/tools/social-sentiment" style={{ color: "#fb923c", marginRight: "1rem" }}>Social Sentiment</a>
        </nav>
    </main>
  );
}
