'use client';

import { useState, useMemo } from 'react';

type RiskLevel = 'conservative' | 'moderate' | 'aggressive' | 'degen';

interface AllocationCategory {
  name: string;
  tooltip: string;
  conservative: number;
  moderate: number;
  aggressive: number;
  degen: number;
  color: string;
  emoji: string;
}

const ALLOCATION_DATA: AllocationCategory[] = [
  {
    name: 'Bitcoin',
    emoji: '₿',
    tooltip: 'Store of value, largest market cap, lowest volatility',
    conservative: 50,
    moderate: 25,
    aggressive: 15,
    degen: 5,
    color: '#f7931a',
  },
  {
    name: 'Ethereum',
    emoji: 'Ξ',
    tooltip: 'Smart contract platform, second largest, ecosystem foundation',
    conservative: 25,
    moderate: 20,
    aggressive: 15,
    degen: 10,
    color: '#627eea',
  },
  {
    name: 'Large Cap Alts',
    emoji: '◆',
    tooltip: 'SOL, BNB, XRP, ADA - established ecosystems',
    conservative: 15,
    moderate: 20,
    aggressive: 20,
    degen: 15,
    color: '#06b6d4',
  },
  {
    name: 'Mid Cap',
    emoji: '▲',
    tooltip: '1B-10B market cap projects with growth potential',
    conservative: 0,
    moderate: 10,
    aggressive: 15,
    degen: 20,
    color: '#a855f7',
  },
  {
    name: 'Small Cap/Meme',
    emoji: '◆',
    tooltip: 'Speculative high-risk high-reward positions',
    conservative: 0,
    moderate: 0,
    aggressive: 10,
    degen: 25,
    color: '#ec4899',
  },
  {
    name: 'DeFi',
    emoji: '⚙',
    tooltip: 'Decentralized finance protocols and yield farming',
    conservative: 0,
    moderate: 10,
    aggressive: 15,
    degen: 15,
    color: '#22c55e',
  },
  {
    name: 'Stablecoins',
    emoji: '💵',
    tooltip: 'USDT, USDC, DAI - stable value and yields',
    conservative: 10,
    moderate: 15,
    aggressive: 10,
    degen: 10,
    color: '#64748b',
  },
];

export default function PortfolioAllocationAdvisor() {
  const [riskLevel, setRiskLevel] = useState<RiskLevel>('moderate');
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const allocations = useMemo(() => {
    return ALLOCATION_DATA.map((cat) => ({
      ...cat,
      allocation: cat[riskLevel],
    }));
  }, [riskLevel]);

  const totalAllocation = allocations.reduce((sum, cat) => sum + cat.allocation, 0);
  const isBalanced = totalAllocation === 100;

  const handleMouseEnter = (e: React.MouseEvent, category: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({ x: rect.left, y: rect.top });
    setHoveredCategory(category);
  };

  const getRiskDescription = (level: RiskLevel): string => {
    const descriptions = {
      conservative: 'Best for: Risk-averse investors, long-term holders, capital preservation',
      moderate: 'Best for: Balanced growth, long-term investors, diversified exposure',
      aggressive: 'Best for: Experienced traders, 2-5 year horizon, higher risk tolerance',
      degen: 'Best for: Sophisticated investors, active trading, maximum returns (max risk)',
    };
    return descriptions[level];
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      {/* Risk Tolerance Slider */}
      <div
        style={{
          padding: '2rem',
          borderRadius: '16px',
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          marginBottom: '2rem',
        }}
      >
        <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--color-text)' }}>
          Select Your Risk Tolerance
        </h2>

        {/* Slider */}
        <div style={{ marginBottom: '1.5rem' }}>
          <input
            type="range"
            min="0"
            max="3"
            value={['conservative', 'moderate', 'aggressive', 'degen'].indexOf(riskLevel)}
            onChange={(e) => {
              const levels: RiskLevel[] = ['conservative', 'moderate', 'aggressive', 'degen'];
              setRiskLevel(levels[parseInt(e.target.value)]);
            }}
            style={{
              width: '100%',
              height: '8px',
              borderRadius: '4px',
              background: 'linear-gradient(90deg, #22c55e 0%, #f59e0b 50%, #ef4444 100%)',
              outline: 'none',
              WebkitAppearance: 'slider-horizontal',
              cursor: 'pointer',
            }}
          />
        </div>

        {/* Risk Level Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {['conservative', 'moderate', 'aggressive', 'degen'].map((level) => (
            <button
              key={level}
              onClick={() => setRiskLevel(level as RiskLevel)}
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: riskLevel === level ? '2px solid #6366f1' : '1px solid var(--glass-border)',
                background: riskLevel === level ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                color: riskLevel === level ? '#6366f1' : 'var(--color-text-secondary)',
                fontWeight: riskLevel === level ? 600 : 400,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textTransform: 'capitalize',
              }}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Description */}
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
          {getRiskDescription(riskLevel)}
        </p>
      </div>

      {/* Allocation Display */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem',
        }}
      >
        {/* Pie Chart */}
        <div
          style={{
            padding: '2rem',
            borderRadius: '16px',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-text)' }}>Allocation Breakdown</h3>
          <svg width="200" height="200" viewBox="0 0 200 200" style={{ marginBottom: '1rem' }}>
            {allocations.reduce((acc, cat, idx) => {
              let startAngle = 0;
              for (let i = 0; i < idx; i++) {
                startAngle += (allocations[i].allocation / 100) * 360;
              }
              const angle = (cat.allocation / 100) * 360;
              const startRad = (startAngle - 90) * (Math.PI / 180);
              const endRad = (startAngle + angle - 90) * (Math.PI / 180);

              const x1 = 100 + 80 * Math.cos(startRad);
              const y1 = 100 + 80 * Math.sin(startRad);
              const x2 = 100 + 80 * Math.cos(endRad);
              const y2 = 100 + 80 * Math.sin(endRad);

              const largeArc = angle > 180 ? 1 : 0;

              const path = `M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`;

              return acc.concat(
                <path
                  key={idx}
                  d={path}
                  fill={cat.color}
                  opacity={hoveredCategory === cat.name ? 0.9 : 0.8}
                  onMouseEnter={(e) => handleMouseEnter(e, cat.name)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  style={{ cursor: 'pointer', transition: 'opacity 0.2s ease' }}
                />
              );
            }, [] as JSX.Element[])}
          </svg>

          <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', textAlign: 'center' }}>
            Total: <strong style={{ color: 'var(--color-text)' }}>{totalAllocation}%</strong>
            {!isBalanced && <div style={{ color: '#f59e0b', marginTop: '0.5rem' }}>(not balanced)</div>}
          </div>
        </div>

        {/* Allocation Table */}
        <div
          style={{
            padding: '2rem',
            borderRadius: '16px',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
          }}
        >
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-text)' }}>Recommended Allocation</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {allocations.map((cat) => (
              <div
                key={cat.name}
                onMouseEnter={(e) => handleMouseEnter(e, cat.name)}
                onMouseLeave={() => setHoveredCategory(null)}
                style={{
                  padding: '1rem',
                  borderRadius: '8px',
                  background: hoveredCategory === cat.name ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                  border: hoveredCategory === cat.name ? `1px solid ${cat.color}` : '1px solid transparent',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >
                {/* Name and Emoji */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>{cat.emoji}</span>
                  <span style={{ fontWeight: 600, color: 'var(--color-text)' }}>{cat.name}</span>
                  <span style={{ marginLeft: 'auto', fontWeight: 700, color: cat.color, fontSize: '1.1rem' }}>
                    {cat.allocation}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div
                  style={{
                    height: '6px',
                    borderRadius: '3px',
                    background: 'rgba(99, 102, 241, 0.1)',
                    overflow: 'hidden',
                    marginBottom: '0.5rem',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${cat.allocation}%`,
                      background: cat.color,
                      borderRadius: '3px',
                      transition: 'width 0.3s ease',
                    }}
                  />
                </div>

                {/* Tooltip */}
                {hoveredCategory === cat.name && (
                  <div
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--color-text-secondary)',
                      paddingTop: '0.5rem',
                      borderTop: `1px solid ${cat.color}40`,
                    }}
                  >
                    {cat.tooltip}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Educational Stats */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
        {[
          { label: 'Bitcoin Allocation', value: `${allocations.find((a) => a.name === 'Bitcoin')?.allocation}%` },
          { label: 'Stablecoins', value: `${allocations.find((a) => a.name === 'Stablecoins')?.allocation}%` },
          { label: 'Altcoins', value: `${allocations.filter((a) => ['Large Cap Alts', 'Mid Cap', 'Small Cap/Meme'].includes(a.name)).reduce((sum, a) => sum + a.allocation, 0)}%` },
          { label: 'Risk Level', value: riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1) },
        ].map((stat, idx) => (
          <div
            key={idx}
            style={{
              padding: '1rem',
              borderRadius: '12px',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
              {stat.label}
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#6366f1' }}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Implementation Guide */}
      <div
        style={{
          padding: '2rem',
          borderRadius: '16px',
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
        }}
      >
        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--color-text)' }}>
          How to Implement This Allocation
        </h3>
        <ol style={{ color: 'var(--color-text-secondary)', paddingLeft: '1.5rem', lineHeight: 1.8 }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: 'var(--color-text)' }}>Calculate your portfolio value:</strong> Determine your total crypto investment amount
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: 'var(--color-text)' }}>Calculate target amounts:</strong> Multiply each category's percentage by your total portfolio value
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: 'var(--color-text)' }}>Plan purchases:</strong> Buy assets to reach target allocations
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: 'var(--color-text)' }}>Monitor and rebalance:</strong> Review quarterly and rebalance if allocations drift 5%+ off target
          </li>
          <li>
            <strong style={{ color: 'var(--color-text)' }}>Scale responsibly:</strong> Use dollar-cost averaging (DCA) to reduce timing risk
          </li>
        </ol>
      </div>
    </div>
  );
}
