'use client';

import React, { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';

/* ─── types ─── */
interface Asset {
  id: string;
  name: string;
  symbol: string;
  currentValue: number;
  targetPct: number;
  color: string;
}

interface RebalanceTrade {
  asset: string;
  symbol: string;
  action: 'BUY' | 'SELL';
  amount: number;
  pctChange: number;
}

/* ─── palette ─── */
const COLORS = [
  '#6366f1', '#06b6d4', '#f59e0b', '#ef4444', '#10b981',
  '#8b5cf6', '#ec4899', '#14b8a6', '#f97316', '#3b82f6',
];

const PRESETS: Record<string, { name: string; symbol: string; pct: number }[]> = {
  'BTC Maxi': [
    { name: 'Bitcoin', symbol: 'BTC', pct: 60 },
    { name: 'Ethereum', symbol: 'ETH', pct: 20 },
    { name: 'Solana', symbol: 'SOL', pct: 10 },
    { name: 'Stablecoins', symbol: 'USDC', pct: 10 },
  ],
  'DeFi Degen': [
    { name: 'Ethereum', symbol: 'ETH', pct: 30 },
    { name: 'Solana', symbol: 'SOL', pct: 20 },
    { name: 'Aave', symbol: 'AAVE', pct: 15 },
    { name: 'Uniswap', symbol: 'UNI', pct: 15 },
    { name: 'Chainlink', symbol: 'LINK', pct: 10 },
    { name: 'Stablecoins', symbol: 'USDC', pct: 10 },
  ],
  'Conservative': [
    { name: 'Bitcoin', symbol: 'BTC', pct: 40 },
    { name: 'Ethereum', symbol: 'ETH', pct: 25 },
    { name: 'Stablecoins', symbol: 'USDC', pct: 25 },
    { name: 'Solana', symbol: 'SOL', pct: 10 },
  ],
  'Equal Weight Top 5': [
    { name: 'Bitcoin', symbol: 'BTC', pct: 20 },
    { name: 'Ethereum', symbol: 'ETH', pct: 20 },
    { name: 'Solana', symbol: 'SOL', pct: 20 },
    { name: 'Cardano', symbol: 'ADA', pct: 20 },
    { name: 'Polkadot', symbol: 'DOT', pct: 20 },
  ],
};

const INITIAL_ASSETS: Asset[] = [
  { id: '1', name: 'Bitcoin', symbol: 'BTC', currentValue: 25000, targetPct: 40, color: COLORS[0] },
  { id: '2', name: 'Ethereum', symbol: 'ETH', currentValue: 15000, targetPct: 30, color: COLORS[1] },
  { id: '3', name: 'Solana', symbol: 'SOL', currentValue: 8000, targetPct: 15, color: COLORS[2] },
  { id: '4', name: 'Stablecoins', symbol: 'USDC', currentValue: 2000, targetPct: 15, color: COLORS[3] },
];

let nextId = 5;

export default function PortfolioRebalancer() {
  const [assets, setAssets] = useState<Asset[]>(INITIAL_ASSETS);
  const [threshold, setThreshold] = useState<number>(5);
  const [showTrades, setShowTrades] = useState(false);

  const totalValue = useMemo(() => assets.reduce((s, a) => s + a.currentValue, 0), [assets]);
  const totalTargetPct = useMemo(() => assets.reduce((s, a) => s + a.targetPct, 0), [assets]);

  const driftData = useMemo(() => {
    if (totalValue === 0) return [];
    return assets.map((a) => {
      const currentPct = (a.currentValue / totalValue) * 100;
      const drift = currentPct - a.targetPct;
      const targetValue = (a.targetPct / 100) * totalValue;
      const tradeAmount = targetValue - a.currentValue;
      return { ...a, currentPct, drift, targetValue, tradeAmount };
    });
  }, [assets, totalValue]);

  const maxDrift = useMemo(() => Math.max(...driftData.map((d) => Math.abs(d.drift)), 0), [driftData]);
  const needsRebalance = maxDrift > threshold;

  const trades: RebalanceTrade[] = useMemo(() => {
    return driftData
      .filter((d) => Math.abs(d.drift) > threshold)
      .map((d) => ({
        asset: d.name,
        symbol: d.symbol,
        action: d.tradeAmount > 0 ? 'BUY' as const : 'SELL' as const,
        amount: Math.abs(d.tradeAmount),
        pctChange: d.drift,
      }))
      .sort((a, b) => b.amount - a.amount);
  }, [driftData, threshold]);

  const addAsset = useCallback(() => {
    const id = String(nextId++);
    setAssets((prev) => [
      ...prev,
      { id, name: '', symbol: '', currentValue: 0, targetPct: 0, color: COLORS[prev.length % COLORS.length] },
    ]);
  }, []);

  const removeAsset = useCallback((id: string) => {
    setAssets((prev) => prev.filter((a) => a.id !== id));
  }, []);

  const updateAsset = useCallback((id: string, field: keyof Asset, value: string | number) => {
    setAssets((prev) => prev.map((a) => (a.id === id ? { ...a, [field]: value } : a)));
  }, []);

  const applyPreset = useCallback((presetName: string) => {
    const preset = PRESETS[presetName];
    if (!preset) return;
    const newAssets: Asset[] = preset.map((p, i) => ({
      id: String(nextId++),
      name: p.name,
      symbol: p.symbol,
      currentValue: 0,
      targetPct: p.pct,
      color: COLORS[i % COLORS.length],
    }));
    setAssets(newAssets);
    setShowTrades(false);
  }, []);

  const normalizeTargets = useCallback(() => {
    if (totalTargetPct === 0) return;
    setAssets((prev) =>
      prev.map((a) => ({ ...a, targetPct: Math.round((a.targetPct / totalTargetPct) * 100) }))
    );
  }, [totalTargetPct]);

  const fmt = (n: number) => {
    if (n >= 1000) return `$${(n / 1000).toFixed(1)}K`;
    return `$${n.toFixed(0)}`;
  };

  const renderDonut = (data: { label: string; value: number; color: string }[], size: number) => {
    const total = data.reduce((s, d) => s + d.value, 0);
    if (total === 0) return null;
    const cx = size / 2;
    const cy = size / 2;
    const r = size * 0.38;
    const strokeW = size * 0.15;
    const circumference = 2 * Math.PI * r;
    let offset = 0;

    return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {data.map((d, i) => {
          const pct = d.value / total;
          const dashLen = pct * circumference;
          const dashOffset = -offset;
          offset += dashLen;
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke={d.color}
              strokeWidth={strokeW}
              strokeDasharray={`${dashLen} ${circumference - dashLen}`}
              strokeDashoffset={dashOffset}
              transform={`rotate(-90 ${cx} ${cy})`}
              style={{ transition: 'all 0.5s ease' }}
            />
          );
        })}
        <text x={cx} y={cy - 8} textAnchor="middle" fill="#e6edf3" fontSize={size * 0.1} fontWeight="800">
          {fmt(total)}
        </text>
        <text x={cx} y={cy + 12} textAnchor="middle" fill="#8b949e" fontSize={size * 0.06}>
          Total Value
        </text>
      </svg>
    );
  };

  const renderDriftBar = (drift: number) => {
    const maxBar = 50;
    const width = Math.min(Math.abs(drift), maxBar);
    const isOver = Math.abs(drift) > threshold;
    const bgColor = isOver ? (drift > 0 ? '#f8514940' : '#3fb95040') : '#30363d40';
    const barColor = isOver ? (drift > 0 ? '#f85149' : '#3fb950') : '#8b949e';
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%' }}>
        <div style={{ width: 120, height: 8, borderRadius: 4, background: bgColor, position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: drift < 0 ? `${50 - width}%` : '50%',
              width: `${width}%`,
              height: '100%',
              borderRadius: 4,
              background: barColor,
              transition: 'all 0.3s',
            }}
          />
          <div style={{ position: 'absolute', top: -2, left: '50%', width: 1, height: 12, background: '#e6edf3' }} />
        </div>
        <span style={{ fontSize: 12, fontWeight: 600, color: barColor, minWidth: 55, textAlign: 'right' }}>
          {drift > 0 ? '+' : ''}{drift.toFixed(1)}%
        </span>
      </div>
    );
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0d1117', color: '#e6edf3', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ padding: '16px 24px', borderBottom: '1px solid #21262d' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 8, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#58a6ff', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <Link href="/tools" style={{ color: '#58a6ff', textDecoration: 'none' }}>Tools</Link>
          <span>/</span>
          <span style={{ color: '#e6edf3' }}>Portfolio Rebalancer</span>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 32 }}>⚖️</span>
            <h1 style={{ fontSize: 32, fontWeight: 800, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Portfolio Rebalancer
            </h1>
            <span style={{ background: '#3fb95020', color: '#3fb950', border: '1px solid #3fb95040', borderRadius: 6, padding: '3px 10px', fontSize: 12, fontWeight: 600 }}>
              Free Tool
            </span>
          </div>
          <p style={{ color: '#8b949e', fontSize: 16, maxWidth: 700, lineHeight: 1.6 }}>
            Visualize portfolio drift, set target allocations, and generate optimal rebalancing trades.
            Supports threshold-based rebalancing to minimize unnecessary trading.
          </p>
        </div>

        <div style={{ marginBottom: 24, display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: '#8b949e', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Presets:</span>
          {Object.keys(PRESETS).map((name) => (
            <button
              key={name}
              onClick={() => applyPreset(name)}
              style={{ padding: '6px 14px', borderRadius: 8, border: '1px solid #30363d', background: '#161b22', color: '#e6edf3', cursor: 'pointer', fontSize: 13, fontWeight: 500 }}
            >
              {name}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24, alignItems: 'start' }}>
          <div>
            <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 16, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 13, color: '#8b949e' }}>Rebalance Threshold:</span>
                <input type="range" min={1} max={20} value={threshold} onChange={(e) => setThreshold(Number(e.target.value))} style={{ width: 120, accentColor: '#6366f1' }} />
                <span style={{ fontWeight: 700, color: '#6366f1', fontSize: 14 }}>{threshold}%</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: needsRebalance ? '#f85149' : '#3fb950' }} />
                <span style={{ fontSize: 13, color: needsRebalance ? '#f85149' : '#3fb950', fontWeight: 600 }}>
                  {needsRebalance ? `Rebalance needed (max drift: ${maxDrift.toFixed(1)}%)` : 'Portfolio is balanced'}
                </span>
              </div>
              {totalTargetPct !== 100 && totalTargetPct > 0 && (
                <button onClick={normalizeTargets} style={{ padding: '5px 12px', borderRadius: 6, border: '1px solid #d29922', background: '#d2992220', color: '#d29922', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                  Normalize to 100% (currently {totalTargetPct}%)
                </button>
              )}
            </div>

            <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 12, overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '36px 1fr 1fr 120px 160px 36px', gap: 8, padding: '10px 16px', borderBottom: '1px solid #30363d', fontSize: 11, color: '#8b949e', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <div></div><div>Asset</div><div>Current Value ($)</div><div>Target %</div><div>Drift</div><div></div>
              </div>
              {assets.map((asset, idx) => {
                const dd = driftData.find((d) => d.id === asset.id);
                return (
                  <div key={asset.id} style={{ display: 'grid', gridTemplateColumns: '36px 1fr 1fr 120px 160px 36px', gap: 8, padding: '12px 16px', alignItems: 'center', borderBottom: '1px solid #21262d' }}>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: asset.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: '#fff' }}>{idx + 1}</div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <input value={asset.name} onChange={(e) => updateAsset(asset.id, 'name', e.target.value)} placeholder="Asset name" style={{ flex: 1, background: '#0d1117', border: '1px solid #30363d', borderRadius: 6, padding: '6px 10px', color: '#e6edf3', fontSize: 13, outline: 'none' }} />
                      <input value={asset.symbol} onChange={(e) => updateAsset(asset.id, 'symbol', e.target.value.toUpperCase())} placeholder="SYM" style={{ width: 60, background: '#0d1117', border: '1px solid #30363d', borderRadius: 6, padding: '6px 8px', color: '#e6edf3', fontSize: 13, textAlign: 'center', outline: 'none' }} />
                    </div>
                    <input type="number" min={0} value={asset.currentValue || ''} onChange={(e) => updateAsset(asset.id, 'currentValue', Number(e.target.value))} placeholder="0" style={{ background: '#0d1117', border: '1px solid #30363d', borderRadius: 6, padding: '6px 10px', color: '#e6edf3', fontSize: 13, outline: 'none' }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <input type="number" min={0} max={100} value={asset.targetPct || ''} onChange={(e) => updateAsset(asset.id, 'targetPct', Number(e.target.value))} placeholder="0" style={{ width: 60, background: '#0d1117', border: '1px solid #30363d', borderRadius: 6, padding: '6px 8px', color: '#e6edf3', fontSize: 13, textAlign: 'center', outline: 'none' }} />
                      <span style={{ fontSize: 12, color: '#8b949e' }}>%</span>
                    </div>
                    <div>{dd ? renderDriftBar(dd.drift) : null}</div>
                    <button onClick={() => removeAsset(asset.id)} style={{ width: 28, height: 28, borderRadius: 6, border: '1px solid #30363d', background: 'transparent', color: '#f85149', cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }} title="Remove">×</button>
                  </div>
                );
              })}
              <div style={{ padding: '12px 16px' }}>
                <button onClick={addAsset} style={{ width: '100%', padding: '10px', borderRadius: 8, border: '1px dashed #30363d', background: 'transparent', color: '#58a6ff', cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>+ Add Asset</button>
              </div>
            </div>

            <div style={{ marginTop: 16 }}>
              <button onClick={() => setShowTrades(true)} disabled={!needsRebalance || totalTargetPct === 0} style={{ width: '100%', padding: '14px', borderRadius: 10, border: 'none', background: needsRebalance ? 'linear-gradient(135deg, #6366f1, #06b6d4)' : '#30363d', color: needsRebalance ? '#fff' : '#8b949e', fontSize: 15, fontWeight: 700, cursor: needsRebalance ? 'pointer' : 'not-allowed' }}>
                ⚖️ Generate Rebalancing Trades
              </button>
            </div>

            {showTrades && trades.length > 0 && (
              <div style={{ marginTop: 16, background: '#161b22', border: '1px solid #30363d', borderRadius: 12, overflow: 'hidden' }}>
                <div style={{ padding: '14px 16px', borderBottom: '1px solid #30363d', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 16 }}>📋</span>
                  <span style={{ fontWeight: 700, fontSize: 15 }}>Rebalancing Trade Plan</span>
                  <span style={{ fontSize: 12, color: '#8b949e' }}>({trades.length} trades)</span>
                </div>
                {trades.map((trade, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid #21262d' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ padding: '4px 10px', borderRadius: 6, fontSize: 12, fontWeight: 700, background: trade.action === 'BUY' ? '#3fb95020' : '#f8514920', color: trade.action === 'BUY' ? '#3fb950' : '#f85149', border: `1px solid ${trade.action === 'BUY' ? '#3fb95040' : '#f8514940'}` }}>
                        {trade.action}
                      </span>
                      <span style={{ fontWeight: 600 }}>{trade.asset}</span>
                      <span style={{ fontSize: 12, color: '#8b949e' }}>{trade.symbol}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <span style={{ fontWeight: 700, fontSize: 15, color: trade.action === 'BUY' ? '#3fb950' : '#f85149' }}>{fmt(trade.amount)}</span>
                      <span style={{ fontSize: 12, color: '#8b949e' }}>drift: {trade.pctChange > 0 ? '+' : ''}{trade.pctChange.toFixed(1)}%</span>
                    </div>
                  </div>
                ))}
                <div style={{ padding: '12px 16px', background: '#1c2330', fontSize: 12, color: '#8b949e' }}>
                  💡 Tip: Execute sells first, then use the proceeds for buys to minimize capital needed.
                </div>
              </div>
            )}
          </div>

          <div style={{ position: 'sticky', top: 24 }}>
            <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 16 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 16, color: '#8b949e', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Current Allocation</h3>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                {renderDonut(driftData.map((d) => ({ label: d.symbol, value: d.currentValue, color: d.color })), 200)}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {driftData.map((d) => (
                  <div key={d.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 10, height: 10, borderRadius: 3, background: d.color }} />
                      <span>{d.symbol || '?'}</span>
                    </div>
                    <span style={{ fontWeight: 600 }}>{d.currentPct.toFixed(1)}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 16 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 16, color: '#8b949e', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Target Allocation</h3>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                {renderDonut(assets.map((a) => ({ label: a.symbol, value: a.targetPct, color: a.color })), 200)}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {assets.map((a) => (
                  <div key={a.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 10, height: 10, borderRadius: 3, background: a.color }} />
                      <span>{a.symbol || '?'}</span>
                    </div>
                    <span style={{ fontWeight: 600 }}>{a.targetPct}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div><div style={{ fontSize: 11, color: '#8b949e', fontWeight: 600, textTransform: 'uppercase' }}>Assets</div><div style={{ fontSize: 22, fontWeight: 800, color: '#6366f1' }}>{assets.length}</div></div>
                <div><div style={{ fontSize: 11, color: '#8b949e', fontWeight: 600, textTransform: 'uppercase' }}>Max Drift</div><div style={{ fontSize: 22, fontWeight: 800, color: maxDrift > threshold ? '#f85149' : '#3fb950' }}>{maxDrift.toFixed(1)}%</div></div>
                <div><div style={{ fontSize: 11, color: '#8b949e', fontWeight: 600, textTransform: 'uppercase' }}>Trades</div><div style={{ fontSize: 22, fontWeight: 800, color: '#d29922' }}>{trades.length}</div></div>
                <div><div style={{ fontSize: 11, color: '#8b949e', fontWeight: 600, textTransform: 'uppercase' }}>Threshold</div><div style={{ fontSize: 22, fontWeight: 800, color: '#58a6ff' }}>{threshold}%</div></div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 48, maxWidth: 800 }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16 }}>How Portfolio Rebalancing Works</h2>
          <div style={{ color: '#8b949e', lineHeight: 1.8, fontSize: 15 }}>
            <p style={{ marginBottom: 16 }}>Portfolio rebalancing is the process of realigning the weightings of your assets to maintain your desired risk profile. Over time, as prices move, your actual allocation drifts from your targets — Bitcoin might rally and become 60% of your portfolio when your target was 40%.</p>
            <p style={{ marginBottom: 16 }}><strong style={{ color: '#e6edf3' }}>Threshold-based rebalancing</strong> only triggers trades when drift exceeds your set threshold (e.g., 5%). This minimizes trading fees and tax events while keeping your portfolio aligned with your strategy.</p>
            <p style={{ marginBottom: 16 }}><strong style={{ color: '#e6edf3' }}>Common strategies:</strong> Calendar rebalancing (monthly/quarterly), threshold rebalancing (drift-based), and tactical rebalancing (based on market conditions). Most crypto portfolios benefit from a 5-10% threshold to account for higher volatility.</p>
          </div>
          <div style={{ marginTop: 32 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Related Tools</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
              {[
                { href: '/tools/portfolio-tracker', icon: '📊', title: 'Portfolio Tracker' },
                { href: '/tools/dca-calculator', icon: '📅', title: 'DCA Calculator' },
                { href: '/tools/correlation-matrix', icon: '🔗', title: 'Correlation Matrix' },
                { href: '/tools/tax-calculator', icon: '🧾', title: 'Tax Calculator' },
              ].map((tool) => (
                <Link key={tool.href} href={tool.href} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderRadius: 8, background: '#161b22', border: '1px solid #30363d', textDecoration: 'none', color: '#e6edf3', fontSize: 13, fontWeight: 500 }}>
                  <span>{tool.icon}</span><span>{tool.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
