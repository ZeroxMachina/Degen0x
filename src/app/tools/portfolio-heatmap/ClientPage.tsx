'use client';

import { useState, useMemo, useCallback } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedContent from '@/components/RelatedContent';

import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";

/* ──────────────── Types ──────────────── */
interface Asset {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  category: string;
  allocation: number;
  change24h: number;
  change7d: number;
  change30d: number;
  risk: 'low' | 'medium' | 'high' | 'extreme';
  correlation: Record<string, number>;
}

type ViewMode = 'treemap' | 'correlation' | 'risk';
type TimeFrame = '24h' | '7d' | '30d';
type RiskLevel = 'low' | 'medium' | 'high' | 'extreme';

/* ──────────────── Seed RNG ──────────────── */
function seed(s: number): () => number {
  let x = s;
  return () => { x = (x * 16807 + 0) % 2147483647; return (x - 1) / 2147483646; };
}

/* ──────────────── Data ──────────────── */
function generateAssets(): Asset[] {
  const rng = seed(88);
  const r = (min: number, max: number) => min + rng() * (max - min);

  const base: Omit<Asset, 'change24h' | 'change7d' | 'change30d' | 'correlation'>[] = [
    { id: 'btc', name: 'Bitcoin', symbol: 'BTC', icon: '₿', category: 'Layer 1', allocation: 35, risk: 'medium' },
    { id: 'eth', name: 'Ethereum', symbol: 'ETH', icon: 'Ξ', category: 'Layer 1', allocation: 25, risk: 'medium' },
    { id: 'sol', name: 'Solana', symbol: 'SOL', icon: '◎', category: 'Layer 1', allocation: 8, risk: 'high' },
    { id: 'bnb', name: 'BNB', symbol: 'BNB', icon: '⬡', category: 'Layer 1', allocation: 5, risk: 'medium' },
    { id: 'arb', name: 'Arbitrum', symbol: 'ARB', icon: '🔵', category: 'Layer 2', allocation: 4, risk: 'high' },
    { id: 'op', name: 'Optimism', symbol: 'OP', icon: '🔴', category: 'Layer 2', allocation: 3, risk: 'high' },
    { id: 'aave', name: 'Aave', symbol: 'AAVE', icon: '👻', category: 'DeFi', allocation: 4, risk: 'high' },
    { id: 'uni', name: 'Uniswap', symbol: 'UNI', icon: '🦄', category: 'DeFi', allocation: 3, risk: 'high' },
    { id: 'link', name: 'Chainlink', symbol: 'LINK', icon: '⬡', category: 'DeFi', allocation: 3, risk: 'medium' },
    { id: 'doge', name: 'Dogecoin', symbol: 'DOGE', icon: '🐕', category: 'Meme', allocation: 2, risk: 'extreme' },
    { id: 'pepe', name: 'Pepe', symbol: 'PEPE', icon: '🐸', category: 'Meme', allocation: 1, risk: 'extreme' },
    { id: 'fet', name: 'Fetch.ai', symbol: 'FET', icon: '🤖', category: 'AI', allocation: 3, risk: 'high' },
    { id: 'render', name: 'Render', symbol: 'RENDER', icon: '🎨', category: 'AI', allocation: 2, risk: 'high' },
    { id: 'usdc', name: 'USD Coin', symbol: 'USDC', icon: '💵', category: 'Stablecoin', allocation: 2, risk: 'low' },
  ];

  const ids = base.map(b => b.id);

  return base.map((a) => {
    const corr: Record<string, number> = {};
    ids.forEach(otherId => {
      if (otherId === a.id) { corr[otherId] = 1; return; };
      const sameCategory = base.find(b => b.id === otherId)?.category === a.category;
      corr[otherId] = Math.round((sameCategory ? r(0.5, 0.95) : r(-0.2, 0.7)) * 100) / 100;
    });

    return {
      ...a,
      change24h: Math.round(r(-8, 8) * 100) / 100,
      change7d: Math.round(r(-18, 22) * 100) / 100,
      change30d: Math.round(r(-30, 45) * 100) / 100,
      correlation: corr,
    };
  });
};

const ASSETS = generateAssets();

/* ──────────────── Helpers ──────────────── */
function getChangeColor(val: number): string {
  if (val > 10) return '#22c55e';
  if (val > 5) return '#4ade80';
  if (val > 0) return '#86efac';
  if (val > -5) return '#fca5a5';
  if (val > -10) return '#f87171';
  return '#ef4444';
}

function getCorrelationColor(val: number): string {
  if (val >= 0.8) return '#ef4444';
  if (val >= 0.6) return '#f97316';
  if (val >= 0.3) return '#eab308';
  if (val >= 0) return '#22c55e';
  return '#3b82f6';
}

function getRiskColor(risk: RiskLevel): string {
  switch (risk) {
    case 'low': return '#22c55e';
    case 'medium': return '#eab308';
    case 'high': return '#f97316';
    case 'extreme': return '#ef4444';
  }
}

/* ──────────────── Component ──────────────── */
export default function PortfolioHeatmapPage() {
  const [view, setView] = useState<ViewMode>('treemap');
  const [timeframe, setTimeframe] = useState<TimeFrame>('24h');
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);
  const [hoveredCell, setHoveredCell] = useState<{ row: string; col: string } | null>(null);

  const getChange = useCallback((asset: Asset) => {
    switch (timeframe) {
      case '24h': return asset.change24h;
      case '7d': return asset.change7d;
      case '30d': return asset.change30d;
    }
  }, [timeframe]);

  const metrics = useMemo(() => {
    const totalAlloc = ASSETS.reduce((s, a) => s + a.allocation, 0);
    const weightedChange = ASSETS.reduce((s, a) => s + (a.allocation / totalAlloc) * getChange(a), 0);
    const riskCounts: Record<string, number> = { low: 0, medium: 0, high: 0, extreme: 0 };
    ASSETS.forEach(a => { riskCounts[a.risk] += a.allocation; });
    const highRiskPct = riskCounts.high + riskCounts.extreme;
    const diversification = new Set(ASSETS.map(a => a.category)).size;

    let totalCorr = 0;
    let corrCount = 0;
    ASSETS.forEach(a => {
      ASSETS.forEach(b => {
        if (a.id !== b.id) {
          totalCorr += a.correlation[b.id] ?? 0;
          corrCount++;
        }
      });
    });
    const avgCorrelation = corrCount > 0 ? totalCorr / corrCount : 0;

    return { totalAlloc, weightedChange, riskCounts, highRiskPct, diversification, avgCorrelation };
  }, [getChange]);

  const treemapBlocks = useMemo(() => {
    const sorted = [...ASSETS].sort((a, b) => b.allocation - a.allocation);
    const total = sorted.reduce((s, a) => s + a.allocation, 0);
    const blocks: { asset: Asset; x: number; y: number; w: number; h: number }[] = [];
    let cx = 0, cy = 0;
    const H = 100;
    let remainingW = 100, remainingH = H;
    let horizontal = true;

    sorted.forEach((asset, i) => {
      const frac = asset.allocation / total;
      let bw: number, bh: number;

      if (i === sorted.length - 1) {
        bw = remainingW; bh = remainingH;
      } else if (horizontal) {
        bw = remainingW; bh = frac * H;
      } else {
        bw = frac * 100; bh = remainingH;
      }

      blocks.push({ asset, x: cx, y: cy, w: Math.max(bw, 0), h: Math.max(bh, 0) });

      if (horizontal) { cy += bh; remainingH -= bh; }
      else { cx += bw; remainingW -= bw; }

      if (i % 3 === 2) horizontal = !horizontal;
    });

    return blocks;
  }, []);

  const sty = {
    page: { maxWidth: 1280, margin: '0 auto', padding: '24px 16px' } as React.CSSProperties,
    title: { fontSize: 32, fontWeight: 800, marginBottom: 8, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' } as React.CSSProperties,
    subtitle: { fontSize: 15, color: 'var(--color-text-secondary, #8b949e)', marginBottom: 24 } as React.CSSProperties,
    controls: { display: 'flex', gap: 8, flexWrap: 'wrap' as const, marginBottom: 20 } as React.CSSProperties,
    btn: (active: boolean) => ({ padding: '8px 16px', borderRadius: 8, border: '1px solid var(--color-border, #30363d)', background: active ? '#6366f1' : 'var(--color-surface, #161b22)', color: active ? '#fff' : 'var(--color-text, #e6edf3)', fontWeight: 600, fontSize: 13, cursor: 'pointer', transition: 'all 0.2s' }) as React.CSSProperties,
    card: { background: 'var(--color-surface, #161b22)', border: '1px solid var(--color-border, #30363d)', borderRadius: 12, padding: 20, marginBottom: 20 } as React.CSSProperties,
    grid4: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 24 } as React.CSSProperties,
    statCard: { background: 'var(--color-surface, #161b22)', border: '1px solid var(--color-border, #30363d)', borderRadius: 10, padding: 16 } as React.CSSProperties,
    statLabel: { fontSize: 11, color: 'var(--color-text-secondary, #8b949e)', textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: 4 } as React.CSSProperties,
    statVal: { fontSize: 24, fontWeight: 800 } as React.CSSProperties,
    sectionTitle: { fontSize: 18, fontWeight: 700, marginBottom: 16 } as React.CSSProperties,
  };

  return (
    <div style={sty.page}>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/portfolio-heatmap"
        name="Why Diversification Matters"
        description="Why Diversification Matters"
      />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools' },
        { label: 'Portfolio Heatmap' },
      ]} />

      <h1 style={sty.title}>Portfolio Heatmap</h1>
      <p style={sty.subtitle}>
        Visualize your crypto portfolio allocation, performance, correlations, and risk exposure in an interactive heatmap.
      </p>

      {/* Stats Row */}
      <div style={sty.grid4}>
        <div style={sty.statCard}>
          <div style={sty.statLabel}>Portfolio Return</div>
          <div style={{ ...sty.statVal, color: metrics.weightedChange >= 0 ? '#22c55e' : '#ef4444' }}>
            {metrics.weightedChange >= 0 ? '+' : ''}{metrics.weightedChange.toFixed(2)}%
          </div>
          <div style={{ fontSize: 11, color: 'var(--color-text-secondary, #8b949e)' }}>Weighted {timeframe}</div>
        </div>
        <div style={sty.statCard}>
          <div style={sty.statLabel}>Avg Correlation</div>
          <div style={{ ...sty.statVal, color: getCorrelationColor(metrics.avgCorrelation) }}>
            {metrics.avgCorrelation.toFixed(2)}
          </div>
          <div style={{ fontSize: 11, color: 'var(--color-text-secondary, #8b949e)' }}>Cross-asset avg</div>
        </div>
        <div style={sty.statCard}>
          <div style={sty.statLabel}>High Risk Exposure</div>
          <div style={{ ...sty.statVal, color: metrics.highRiskPct > 30 ? '#ef4444' : '#eab308' }}>
            {metrics.highRiskPct}%
          </div>
          <div style={{ fontSize: 11, color: 'var(--color-text-secondary, #8b949e)' }}>High + extreme</div>
        </div>
        <div style={sty.statCard}>
          <div style={sty.statLabel}>Diversification</div>
          <div style={{ ...sty.statVal, color: '#6366f1' }}>
            {metrics.diversification} sectors
          </div>
          <div style={{ fontSize: 11, color: 'var(--color-text-secondary, #8b949e)' }}>{ASSETS.length} assets</div>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
        <div style={sty.controls}>
          {(['treemap', 'correlation', 'risk'] as ViewMode[]).map(v => (
            <button key={v} style={sty.btn(view === v)} onClick={() => setView(v)}>
              {v === 'treemap' ? 'Treemap' : v === 'correlation' ? 'Correlation' : 'Risk Matrix'}
            </button>
          ))}
        </div>
        <div style={sty.controls}>
          {(['24h', '7d', '30d'] as TimeFrame[]).map(tf => (
            <button key={tf} style={sty.btn(timeframe === tf)} onClick={() => setTimeframe(tf)}>
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Treemap View */}
      {view === 'treemap' && (
        <div style={sty.card}>
          <div style={sty.sectionTitle}>Allocation Treemap — Color by {timeframe} Change</div>
          <div style={{ position: 'relative', width: '100%', paddingBottom: '60%', borderRadius: 8, overflow: 'hidden', border: '1px solid var(--color-border, #30363d)' }}>
            {treemapBlocks.map(({ asset, x, y, w, h }) => {
              const change = getChange(asset);
              const isSelected = selectedAsset === asset.id;
              return (
                <div
                  key={asset.id}
                  onClick={() => setSelectedAsset(isSelected ? null : asset.id)}
                  style={{
                    position: 'absolute',
                    left: `${x}%`, top: `${y}%`,
                    width: `${w}%`, height: `${h}%`,
                    background: getChangeColor(change),
                    border: isSelected ? '2px solid #fff' : '1px solid rgba(0,0,0,0.15)',
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                    cursor: 'pointer', transition: 'opacity 0.2s',
                    opacity: selectedAsset && !isSelected ? 0.5 : 1,
                    padding: 4, boxSizing: 'border-box',
                  }}
                >
                  {w > 8 && h > 8 && (
                    <>
                      <span style={{ fontSize: w > 15 ? 16 : 11, fontWeight: 800, color: '#fff', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                        {asset.symbol}
                      </span>
                      <span style={{ fontSize: w > 15 ? 12 : 9, color: '#fff', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                        {asset.allocation}%
                      </span>
                      {w > 15 && h > 15 && (
                        <span style={{ fontSize: 11, color: '#fff', fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                          {change >= 0 ? '+' : ''}{change.toFixed(1)}%
                        </span>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 12, fontSize: 11, color: 'var(--color-text-secondary, #8b949e)', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 12, height: 12, borderRadius: 2, background: '#22c55e', display: 'inline-block' }} /> Strong gain
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 12, height: 12, borderRadius: 2, background: '#86efac', display: 'inline-block' }} /> Mild gain
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 12, height: 12, borderRadius: 2, background: '#fca5a5', display: 'inline-block' }} /> Mild loss
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 12, height: 12, borderRadius: 2, background: '#ef4444', display: 'inline-block' }} /> Strong loss
            </span>
          </div>
        </div>
      )}

      {/* Correlation Matrix */}
      {view === 'correlation' && (
        <div style={sty.card}>
          <div style={sty.sectionTitle}>Cross-Asset Correlation Matrix</div>
          <p style={{ fontSize: 13, color: 'var(--color-text-secondary, #8b949e)', marginBottom: 16 }}>
            Red = highly correlated (move together), Blue = negatively correlated (move opposite). Diversify by holding assets with low correlation.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ borderCollapse: 'collapse', fontSize: 11, width: '100%', minWidth: 600 }}>
              <thead>
                <tr>
                  <th style={{ padding: '6px 8px', textAlign: 'left', color: 'var(--color-text-secondary, #8b949e)' }}></th>
                  {ASSETS.map(a => (
                    <th key={a.id} style={{ padding: '6px 4px', textAlign: 'center', color: 'var(--color-text, #e6edf3)', fontWeight: 700, fontSize: 10 }}>
                      {a.symbol}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ASSETS.map(row => (
                  <tr key={row.id}>
                    <td style={{ padding: '6px 8px', fontWeight: 700, color: 'var(--color-text, #e6edf3)', whiteSpace: 'nowrap', fontSize: 11 }}>{row.symbol}</td>
                    {ASSETS.map(col => {
                      const val = row.correlation[col.id] ?? 0;
                      const isHovered = hoveredCell?.row === row.id && hoveredCell?.col === col.id;
                      return (
                        <td
                          key={col.id}
                          onMouseEnter={() => setHoveredCell({ row: row.id, col: col.id })}
                          onMouseLeave={() => setHoveredCell(null)}
                          style={{
                            padding: '4px', textAlign: 'center',
                            background: row.id === col.id ? 'var(--color-surface, #161b22)' : getCorrelationColor(val),
                            color: '#fff', fontWeight: 600, fontSize: 10, cursor: 'pointer',
                            opacity: row.id === col.id ? 0.3 : isHovered ? 1 : 0.85,
                            border: isHovered ? '2px solid #fff' : '1px solid rgba(0,0,0,0.1)',
                            minWidth: 36, transition: 'opacity 0.15s',
                          }}
                        >
                          {row.id === col.id ? '—' : val.toFixed(2)}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Risk Matrix */}
      {view === 'risk' && (
        <div style={sty.card}>
          <div style={sty.sectionTitle}>Risk-Return Matrix</div>
          <p style={{ fontSize: 13, color: 'var(--color-text-secondary, #8b949e)', marginBottom: 16 }}>
            X-axis = risk level, Y-axis = return ({timeframe}). Bubble size = allocation weight.
          </p>
          <div style={{ position: 'relative', width: '100%', height: 400, background: 'var(--color-bg, #0d1117)', borderRadius: 8, border: '1px solid var(--color-border, #30363d)', overflow: 'hidden' }}>
            {[-20, -10, 0, 10, 20].map(v => {
              const y = 50 - v * 2;
              return (
                <div key={v} style={{ position: 'absolute', left: 0, right: 0, top: `${y}%`, borderTop: v === 0 ? '1px solid var(--color-border, #30363d)' : '1px dashed rgba(255,255,255,0.05)' }}>
                  <span style={{ position: 'absolute', left: 4, top: -8, fontSize: 9, color: 'var(--color-text-secondary, #8b949e)' }}>{v}%</span>
                </div>
              );
            })}

            {(['low', 'medium', 'high', 'extreme'] as RiskLevel[]).map((level, i) => (
              <div key={level} style={{ position: 'absolute', left: `${12.5 + i * 25}%`, bottom: 4, fontSize: 10, color: getRiskColor(level), fontWeight: 700, textTransform: 'uppercase', transform: 'translateX(-50%)' }}>
                {level}
              </div>
            ))}

            {ASSETS.map(asset => {
              const change = getChange(asset);
              const riskX = ({ low: 12.5, medium: 37.5, high: 62.5, extreme: 87.5 } as Record<string, number>)[asset.risk];
              const y = 50 - change * 2;
              const size = Math.max(24, Math.min(60, asset.allocation * 3.5));
              const isSelected = selectedAsset === asset.id;

              return (
                <div
                  key={asset.id}
                  onClick={() => setSelectedAsset(isSelected ? null : asset.id)}
                  style={{
                    position: 'absolute',
                    left: `${riskX}%`, top: `${Math.max(5, Math.min(85, y))}%`,
                    transform: 'translate(-50%, -50%)',
                    width: size, height: size, borderRadius: '50%',
                    background: `${getRiskColor(asset.risk)}${isSelected ? 'ff' : '88'}`,
                    border: isSelected ? '2px solid #fff' : `2px solid ${getRiskColor(asset.risk)}`,
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    cursor: 'pointer', transition: 'all 0.2s',
                    zIndex: isSelected ? 10 : 1,
                  }}
                >
                  <span style={{ fontSize: size > 35 ? 11 : 8, fontWeight: 800, color: '#fff', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                    {asset.symbol}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Asset Detail Panel */}
      {selectedAsset && (() => {
        const asset = ASSETS.find(a => a.id === selectedAsset);
        if (!asset) return null;
        return (
          <div style={{ ...sty.card, borderColor: '#6366f1' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 28 }}>{asset.icon}</span>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--color-text, #e6edf3)' }}>{asset.name} ({asset.symbol})</div>
                  <div style={{ fontSize: 12, color: 'var(--color-text-secondary, #8b949e)' }}>{asset.category} — {asset.allocation}% allocation</div>
                </div>
              </div>
              <button onClick={() => setSelectedAsset(null)} style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary, #8b949e)', cursor: 'pointer', fontSize: 20 }}>✕</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12 }}>
              {[
                { label: '24h Change', val: asset.change24h },
                { label: '7d Change', val: asset.change7d },
                { label: '30d Change', val: asset.change30d },
              ].map(m => (
                <div key={m.label} style={{ padding: 12, background: 'var(--color-bg, #0d1117)', borderRadius: 8 }}>
                  <div style={sty.statLabel}>{m.label}</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: m.val >= 0 ? '#22c55e' : '#ef4444' }}>
                    {m.val >= 0 ? '+' : ''}{m.val.toFixed(2)}%
                  </div>
                </div>
              ))}
              <div style={{ padding: 12, background: 'var(--color-bg, #0d1117)', borderRadius: 8 }}>
                <div style={sty.statLabel}>Risk Level</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: getRiskColor(asset.risk), textTransform: 'uppercase' }}>{asset.risk}</div>
              </div>
            </div>

            <div style={{ marginTop: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8, color: 'var(--color-text, #e6edf3)' }}>Top Correlations</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {Object.entries(asset.correlation)
                  .filter(([id]) => id !== asset.id)
                  .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]))
                  .slice(0, 5)
                  .map(([id, val]) => {
                    const other = ASSETS.find(a => a.id === id);
                    return (
                      <div key={id} style={{ padding: '6px 12px', borderRadius: 8, background: `${getCorrelationColor(val)}20`, border: `1px solid ${getCorrelationColor(val)}40`, fontSize: 12, fontWeight: 600, color: getCorrelationColor(val) }}>
                        {other?.symbol}: {val.toFixed(2)}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        );
      })()}

      {/* Holdings Table */}
      <div style={sty.card}>
        <div style={sty.sectionTitle}>All Holdings</div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-border, #30363d)' }}>
                {['Asset', 'Category', 'Allocation', '24h', '7d', '30d', 'Risk'].map(h => (
                  <th key={h} style={{ padding: '10px 8px', textAlign: h === 'Asset' ? 'left' : 'right', color: 'var(--color-text-secondary, #8b949e)', fontWeight: 700, fontSize: 11, textTransform: 'uppercase' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...ASSETS].sort((a, b) => b.allocation - a.allocation).map(asset => (
                <tr key={asset.id} onClick={() => setSelectedAsset(asset.id)} style={{ borderBottom: '1px solid var(--color-border, #30363d)', cursor: 'pointer', background: selectedAsset === asset.id ? 'rgba(99,102,241,0.1)' : 'transparent' }}>
                  <td style={{ padding: '10px 8px', fontWeight: 600, color: 'var(--color-text, #e6edf3)' }}>
                    <span style={{ marginRight: 8 }}>{asset.icon}</span>{asset.name} <span style={{ color: 'var(--color-text-secondary, #8b949e)' }}>{asset.symbol}</span>
                  </td>
                  <td style={{ padding: '10px 8px', textAlign: 'right', color: 'var(--color-text-secondary, #8b949e)' }}>{asset.category}</td>
                  <td style={{ padding: '10px 8px', textAlign: 'right', fontWeight: 700, color: '#6366f1' }}>{asset.allocation}%</td>
                  <td style={{ padding: '10px 8px', textAlign: 'right', fontWeight: 600, color: asset.change24h >= 0 ? '#22c55e' : '#ef4444' }}>
                    {asset.change24h >= 0 ? '+' : ''}{asset.change24h.toFixed(2)}%
                  </td>
                  <td style={{ padding: '10px 8px', textAlign: 'right', fontWeight: 600, color: asset.change7d >= 0 ? '#22c55e' : '#ef4444' }}>
                    {asset.change7d >= 0 ? '+' : ''}{asset.change7d.toFixed(2)}%
                  </td>
                  <td style={{ padding: '10px 8px', textAlign: 'right', fontWeight: 600, color: asset.change30d >= 0 ? '#22c55e' : '#ef4444' }}>
                    {asset.change30d >= 0 ? '+' : ''}{asset.change30d.toFixed(2)}%
                  </td>
                  <td style={{ padding: '10px 8px', textAlign: 'right' }}>
                    <span style={{ padding: '3px 8px', borderRadius: 6, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', background: `${getRiskColor(asset.risk)}20`, color: getRiskColor(asset.risk), border: `1px solid ${getRiskColor(asset.risk)}40` }}>
                      {asset.risk}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Educational Section */}
      <div style={sty.card}>
        <div style={sty.sectionTitle}>Understanding Portfolio Heatmaps</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {[
            { title: 'Why Diversification Matters', desc: 'Spreading investments across uncorrelated assets reduces portfolio volatility. When one asset drops, uncorrelated assets may hold steady or rise, cushioning losses.' },
            { title: 'Reading Correlation Values', desc: 'Values range from -1 (perfect inverse) to +1 (move in lockstep). Below 0.3 is considered low correlation — ideal for diversification.' },
            { title: 'Risk-Return Tradeoff', desc: 'Higher risk assets like memecoins can deliver explosive gains but also steep losses. A balanced portfolio mixes risk levels based on your tolerance.' },
            { title: 'Rebalancing Strategy', desc: 'When an asset outperforms and grows beyond its target allocation, rebalancing involves selling some to buy underperformers — systematically buying low and selling high.' },
          ].map((card, i) => (
            <div key={i} style={{ padding: 16, background: 'var(--color-bg, #0d1117)', borderRadius: 8, border: '1px solid var(--color-border, #30363d)' }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#6366f1', marginBottom: 8 }}>{card.title}</div>
              <div style={{ fontSize: 13, color: 'var(--color-text-secondary, #8b949e)', lineHeight: 1.6 }}>{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Portfolio Heatmap",
              "url": "https://degen0x.com/tools/portfolio-heatmap",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      <RelatedContent category="tools" currentSlug="/tools/portfolio-heatmap" />
      </div>
  );
}
