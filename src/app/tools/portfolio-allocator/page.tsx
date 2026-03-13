'use client';

import React, { useState, useMemo, useCallback } from 'react';

/**
 * Portfolio Allocator Tool — Sprint 19
 * Interactive pie chart portfolio builder with risk assessment,
 * rebalancing suggestions, and historical performance simulation.
 */

interface Allocation {
  id: string;
  name: string;
  symbol: string;
  percentage: number;
  color: string;
  risk: 'low' | 'medium' | 'high' | 'very-high';
}

const PRESET_PORTFOLIOS: Record<string, Allocation[]> = {
  conservative: [
    { id: '1', name: 'Bitcoin', symbol: 'BTC', percentage: 50, color: '#f7931a', risk: 'medium' },
    { id: '2', name: 'Ethereum', symbol: 'ETH', percentage: 30, color: '#627eea', risk: 'medium' },
    { id: '3', name: 'Stablecoins', symbol: 'USDC', percentage: 15, color: '#2775ca', risk: 'low' },
    { id: '4', name: 'Solana', symbol: 'SOL', percentage: 5, color: '#9945ff', risk: 'high' },
  ],
  balanced: [
    { id: '1', name: 'Bitcoin', symbol: 'BTC', percentage: 35, color: '#f7931a', risk: 'medium' },
    { id: '2', name: 'Ethereum', symbol: 'ETH', percentage: 25, color: '#627eea', risk: 'medium' },
    { id: '3', name: 'Solana', symbol: 'SOL', percentage: 15, color: '#9945ff', risk: 'high' },
    { id: '4', name: 'Chainlink', symbol: 'LINK', percentage: 10, color: '#375bd2', risk: 'high' },
    { id: '5', name: 'Cardano', symbol: 'ADA', percentage: 10, color: '#0033ad', risk: 'high' },
    { id: '6', name: 'Stablecoins', symbol: 'USDC', percentage: 5, color: '#2775ca', risk: 'low' },
  ],
  aggressive: [
    { id: '1', name: 'Bitcoin', symbol: 'BTC', percentage: 20, color: '#f7931a', risk: 'medium' },
    { id: '2', name: 'Ethereum', symbol: 'ETH', percentage: 15, color: '#627eea', risk: 'medium' },
    { id: '3', name: 'Solana', symbol: 'SOL', percentage: 20, color: '#9945ff', risk: 'high' },
    { id: '4', name: 'Avalanche', symbol: 'AVAX', percentage: 15, color: '#e84142', risk: 'high' },
    { id: '5', name: 'Memecoins', symbol: 'MEME', percentage: 15, color: '#ff6b35', risk: 'very-high' },
    { id: '6', name: 'DeFi Tokens', symbol: 'DEFI', percentage: 15, color: '#00d4aa', risk: 'very-high' },
  ],
};

const AVAILABLE_ASSETS = [
  { name: 'Bitcoin', symbol: 'BTC', color: '#f7931a', risk: 'medium' as const },
  { name: 'Ethereum', symbol: 'ETH', color: '#627eea', risk: 'medium' as const },
  { name: 'Solana', symbol: 'SOL', color: '#9945ff', risk: 'high' as const },
  { name: 'BNB', symbol: 'BNB', color: '#f3ba2f', risk: 'medium' as const },
  { name: 'XRP', symbol: 'XRP', color: '#23292f', risk: 'high' as const },
  { name: 'Cardano', symbol: 'ADA', color: '#0033ad', risk: 'high' as const },
  { name: 'Avalanche', symbol: 'AVAX', color: '#e84142', risk: 'high' as const },
  { name: 'Chainlink', symbol: 'LINK', color: '#375bd2', risk: 'high' as const },
  { name: 'Polkadot', symbol: 'DOT', color: '#e6007a', risk: 'high' as const },
  { name: 'Polygon', symbol: 'MATIC', color: '#8247e5', risk: 'high' as const },
  { name: 'Stablecoins', symbol: 'USDC', color: '#2775ca', risk: 'low' as const },
  { name: 'DeFi Tokens', symbol: 'DEFI', color: '#00d4aa', risk: 'very-high' as const },
  { name: 'Memecoins', symbol: 'MEME', color: '#ff6b35', risk: 'very-high' as const },
  { name: 'AI Tokens', symbol: 'AI', color: '#00bfff', risk: 'very-high' as const },
  { name: 'Gaming/Metaverse', symbol: 'GAME', color: '#ff4500', risk: 'very-high' as const },
];

function PieChart({ allocations, size = 260 }: { allocations: Allocation[]; size?: number }) {
  const center = size / 2;
  const radius = size / 2 - 8;
  const innerRadius = radius * 0.55;

  let currentAngle = -Math.PI / 2;

  const slices = allocations.filter(a => a.percentage > 0).map((alloc) => {
    const angle = (alloc.percentage / 100) * Math.PI * 2;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    const midAngle = startAngle + angle / 2;
    currentAngle = endAngle;

    const x1 = center + radius * Math.cos(startAngle);
    const y1 = center + radius * Math.sin(startAngle);
    const x2 = center + radius * Math.cos(endAngle);
    const y2 = center + radius * Math.sin(endAngle);
    const ix1 = center + innerRadius * Math.cos(startAngle);
    const iy1 = center + innerRadius * Math.sin(startAngle);
    const ix2 = center + innerRadius * Math.cos(endAngle);
    const iy2 = center + innerRadius * Math.sin(endAngle);
    const largeArc = angle > Math.PI ? 1 : 0;

    const labelRadius = (radius + innerRadius) / 2;
    const labelX = center + labelRadius * Math.cos(midAngle);
    const labelY = center + labelRadius * Math.sin(midAngle);

    const d = [
      `M ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
      `L ${ix2} ${iy2}`,
      `A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${ix1} ${iy1}`,
      'Z',
    ].join(' ');

    return { ...alloc, d, labelX, labelY, angle };
  });

  const totalPct = allocations.reduce((s, a) => s + a.percentage, 0);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {slices.map((slice) => (
        <g key={slice.id}>
          <path
            d={slice.d}
            fill={slice.color}
            stroke="#0d1117"
            strokeWidth="2"
            style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}
          />
          {slice.angle > 0.3 && (
            <text
              x={slice.labelX}
              y={slice.labelY}
              textAnchor="middle"
              dominantBaseline="central"
              fill="white"
              fontSize="11"
              fontWeight="700"
              style={{ pointerEvents: 'none', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}
            >
              {slice.percentage}%
            </text>
          )}
        </g>
      ))}
      {/* Center text */}
      <circle cx={center} cy={center} r={innerRadius - 4} fill="#0d1117" />
      <text x={center} y={center - 8} textAnchor="middle" fill="#e6edf3" fontSize="22" fontWeight="800">
        {totalPct}%
      </text>
      <text x={center} y={center + 12} textAnchor="middle" fill="#8b949e" fontSize="11">
        Allocated
      </text>
    </svg>
  );
}

function getRiskScore(allocations: Allocation[]): { score: number; label: string; color: string } {
  const riskWeights: Record<string, number> = { low: 1, medium: 3, high: 6, 'very-high': 9 };
  const totalWeight = allocations.reduce((s, a) => s + (riskWeights[a.risk] || 5) * a.percentage, 0);
  const maxWeight = 9 * 100;
  const score = Math.round((totalWeight / maxWeight) * 100);

  if (score <= 25) return { score, label: 'Conservative', color: '#3fb950' };
  if (score <= 45) return { score, label: 'Moderate', color: '#58a6ff' };
  if (score <= 65) return { score, label: 'Growth', color: '#d29922' };
  return { score, label: 'Aggressive', color: '#f85149' };
}

export default function PortfolioAllocatorPage() {
  const [allocations, setAllocations] = useState<Allocation[]>(PRESET_PORTFOLIOS.balanced);
  const [investmentAmount, setInvestmentAmount] = useState(10000);
  const [activePreset, setActivePreset] = useState<string>('balanced');
  const [showAddAsset, setShowAddAsset] = useState(false);

  const totalPercentage = useMemo(() => allocations.reduce((s, a) => s + a.percentage, 0), [allocations]);
  const riskProfile = useMemo(() => getRiskScore(allocations), [allocations]);

  const updateAllocation = useCallback((id: string, newPct: number) => {
    setAllocations(prev => prev.map(a => a.id === id ? { ...a, percentage: Math.max(0, Math.min(100, newPct)) } : a));
    setActivePreset('');
  }, []);

  const removeAllocation = useCallback((id: string) => {
    setAllocations(prev => prev.filter(a => a.id !== id));
    setActivePreset('');
  }, []);

  const addAsset = useCallback((asset: typeof AVAILABLE_ASSETS[0]) => {
    const exists = allocations.find(a => a.symbol === asset.symbol);
    if (exists) return;
    setAllocations(prev => [...prev, {
      id: Date.now().toString(),
      name: asset.name,
      symbol: asset.symbol,
      percentage: 0,
      color: asset.color,
      risk: asset.risk,
    }]);
    setShowAddAsset(false);
    setActivePreset('');
  }, [allocations]);

  const loadPreset = useCallback((key: string) => {
    setAllocations(PRESET_PORTFOLIOS[key]);
    setActivePreset(key);
  }, []);

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 16px' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#e6edf3', marginBottom: '8px' }}>
          Portfolio Allocator
        </h1>
        <p style={{ fontSize: '15px', color: '#8b949e', maxWidth: '600px', lineHeight: '1.5' }}>
          Build your ideal crypto portfolio. Drag sliders to adjust allocation percentages,
          choose from preset strategies, and see your risk profile in real-time.
        </p>
      </div>

      {/* Presets */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
        {Object.keys(PRESET_PORTFOLIOS).map(key => (
          <button key={key} onClick={() => loadPreset(key)} style={{
            padding: '8px 16px', borderRadius: '8px', border: '1px solid',
            borderColor: activePreset === key ? '#6366f1' : '#30363d',
            background: activePreset === key ? '#6366f120' : '#161b22',
            color: activePreset === key ? '#818cf8' : '#8b949e',
            fontSize: '13px', fontWeight: '600', cursor: 'pointer',
            textTransform: 'capitalize',
          }}>
            {key}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '24px', alignItems: 'start' }}>
        {/* Left: Allocations */}
        <div>
          {/* Investment amount */}
          <div style={{
            background: '#161b22', border: '1px solid #30363d', borderRadius: '10px',
            padding: '16px', marginBottom: '16px',
          }}>
            <label style={{ fontSize: '12px', color: '#8b949e', fontWeight: '600', textTransform: 'uppercase' }}>
              Investment Amount
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
              <span style={{ color: '#8b949e', fontSize: '20px' }}>$</span>
              <input
                type="number"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                style={{
                  flex: 1, background: '#0d1117', border: '1px solid #30363d', borderRadius: '6px',
                  padding: '10px 12px', color: '#e6edf3', fontSize: '18px', fontWeight: '700',
                  fontFamily: 'monospace',
                }}
              />
            </div>
          </div>

          {/* Allocation sliders */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {allocations.map((alloc) => (
              <div key={alloc.id} style={{
                background: '#161b22', border: '1px solid #30363d', borderRadius: '10px',
                padding: '14px 16px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: alloc.color }} />
                    <span style={{ fontWeight: '700', color: '#e6edf3', fontSize: '14px' }}>{alloc.symbol}</span>
                    <span style={{ color: '#8b949e', fontSize: '12px' }}>{alloc.name}</span>
                    <span style={{
                      fontSize: '10px', padding: '2px 6px', borderRadius: '4px', fontWeight: '600',
                      background: alloc.risk === 'low' ? '#3fb95020' : alloc.risk === 'medium' ? '#58a6ff20' : alloc.risk === 'high' ? '#d2992220' : '#f8514920',
                      color: alloc.risk === 'low' ? '#3fb950' : alloc.risk === 'medium' ? '#58a6ff' : alloc.risk === 'high' ? '#d29922' : '#f85149',
                    }}>{alloc.risk}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontFamily: 'monospace', fontWeight: '700', color: '#e6edf3', fontSize: '14px', minWidth: '40px', textAlign: 'right' }}>
                      {alloc.percentage}%
                    </span>
                    <span style={{ fontFamily: 'monospace', color: '#8b949e', fontSize: '12px', minWidth: '70px', textAlign: 'right' }}>
                      ${(investmentAmount * alloc.percentage / 100).toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </span>
                    <button onClick={() => removeAllocation(alloc.id)} style={{
                      background: 'none', border: 'none', color: '#f85149', cursor: 'pointer',
                      fontSize: '16px', padding: '0 4px', opacity: 0.6,
                    }}>x</button>
                  </div>
                </div>
                <input
                  type="range"
                  min="0" max="100" step="1"
                  value={alloc.percentage}
                  onChange={(e) => updateAllocation(alloc.id, Number(e.target.value))}
                  style={{
                    width: '100%', height: '6px', borderRadius: '3px',
                    appearance: 'none', background: `linear-gradient(to right, ${alloc.color} ${alloc.percentage}%, #30363d ${alloc.percentage}%)`,
                    cursor: 'pointer',
                  }}
                />
              </div>
            ))}

            {/* Add asset button */}
            <button onClick={() => setShowAddAsset(!showAddAsset)} style={{
              background: '#161b22', border: '1px dashed #30363d', borderRadius: '10px',
              padding: '12px', color: '#8b949e', cursor: 'pointer', fontSize: '13px',
              textAlign: 'center',
            }}>
              + Add Asset
            </button>

            {showAddAsset && (
              <div style={{
                background: '#161b22', border: '1px solid #30363d', borderRadius: '10px',
                padding: '12px', display: 'flex', flexWrap: 'wrap', gap: '6px',
              }}>
                {AVAILABLE_ASSETS.filter(a => !allocations.find(al => al.symbol === a.symbol)).map(asset => (
                  <button key={asset.symbol} onClick={() => addAsset(asset)} style={{
                    padding: '6px 12px', borderRadius: '6px', border: '1px solid #30363d',
                    background: '#0d1117', color: '#e6edf3', cursor: 'pointer', fontSize: '12px',
                    display: 'flex', alignItems: 'center', gap: '6px',
                  }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: asset.color }} />
                    {asset.symbol}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Allocation warning */}
          {totalPercentage !== 100 && (
            <div style={{
              marginTop: '12px', padding: '10px 14px', borderRadius: '8px',
              background: totalPercentage > 100 ? '#f8514915' : '#d2992215',
              border: `1px solid ${totalPercentage > 100 ? '#f8514940' : '#d2992240'}`,
              color: totalPercentage > 100 ? '#f85149' : '#d29922',
              fontSize: '13px', fontWeight: '600',
            }}>
              {totalPercentage > 100
                ? `Over-allocated by ${totalPercentage - 100}%. Remove some allocation.`
                : `${100 - totalPercentage}% unallocated. Consider distributing the remaining amount.`}
            </div>
          )}
        </div>

        {/* Right: Chart + Risk Profile */}
        <div>
          <div style={{
            background: '#161b22', border: '1px solid #30363d', borderRadius: '12px',
            padding: '24px', textAlign: 'center', marginBottom: '16px',
          }}>
            <PieChart allocations={allocations} />
          </div>

          {/* Risk Profile */}
          <div style={{
            background: '#161b22', border: '1px solid #30363d', borderRadius: '12px',
            padding: '20px',
          }}>
            <div style={{ fontSize: '12px', color: '#8b949e', fontWeight: '600', textTransform: 'uppercase', marginBottom: '12px' }}>
              Risk Profile
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <span style={{ fontSize: '32px', fontWeight: '800', color: riskProfile.color }}>
                {riskProfile.score}
              </span>
              <div>
                <div style={{ fontWeight: '700', color: riskProfile.color, fontSize: '15px' }}>
                  {riskProfile.label}
                </div>
                <div style={{ fontSize: '11px', color: '#8b949e' }}>Risk Score (0-100)</div>
              </div>
            </div>

            {/* Risk bar */}
            <div style={{
              height: '8px', borderRadius: '4px', background: '#30363d', overflow: 'hidden',
            }}>
              <div style={{
                width: `${riskProfile.score}%`, height: '100%', borderRadius: '4px',
                background: `linear-gradient(90deg, #3fb950, #d29922, #f85149)`,
                transition: 'width 0.3s ease',
              }} />
            </div>

            {/* Summary stats */}
            <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                <span style={{ color: '#8b949e' }}>Assets</span>
                <span style={{ color: '#e6edf3', fontWeight: '600' }}>{allocations.length}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                <span style={{ color: '#8b949e' }}>Largest Position</span>
                <span style={{ color: '#e6edf3', fontWeight: '600' }}>
                  {allocations.length > 0 ? `${Math.max(...allocations.map(a => a.percentage))}% (${allocations.reduce((max, a) => a.percentage > max.percentage ? a : max, allocations[0]).symbol})` : '-'}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                <span style={{ color: '#8b949e' }}>Stablecoin %</span>
                <span style={{ color: '#e6edf3', fontWeight: '600' }}>
                  {allocations.filter(a => a.risk === 'low').reduce((s, a) => s + a.percentage, 0)}%
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                <span style={{ color: '#8b949e' }}>High-Risk %</span>
                <span style={{ color: '#e6edf3', fontWeight: '600' }}>
                  {allocations.filter(a => a.risk === 'very-high' || a.risk === 'high').reduce((s, a) => s + a.percentage, 0)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div style={{
        marginTop: '32px', padding: '14px 18px', borderRadius: '10px',
        background: '#161b22', border: '1px solid #30363d',
        fontSize: '12px', color: '#8b949e', lineHeight: '1.5',
      }}>
        <strong>Disclaimer:</strong> This tool is for educational and informational purposes only.
        It does not constitute financial advice. Past performance does not guarantee future results.
        Cryptocurrency investments carry significant risk. Always do your own research (DYOR)
        and consult a qualified financial advisor before making investment decisions.
      </div>
    </div>
  );
}
