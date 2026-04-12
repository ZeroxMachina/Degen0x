'use client';

import { useState, useMemo } from 'react';

interface RiskDimensions {
  smartContract: number;
  liquidity: number;
  governance: number;
  oracle: number;
  economic: number;
  regulatory: number;
}

interface Protocol {
  id: string;
  name: string;
  tvl: string;
  audits: string;
  riskDimensions: RiskDimensions;
  description: string;
  category: string;
}

const PROTOCOLS: Protocol[] = [
  {
    id: 'aave',
    name: 'Aave',
    tvl: '$10.2B',
    audits: 'OpenZeppelin, Trail of Bits',
    category: 'Lending',
    description: 'Leading decentralized lending protocol',
    riskDimensions: {
      smartContract: 25,
      liquidity: 20,
      governance: 35,
      oracle: 30,
      economic: 40,
      regulatory: 45,
    },
  },
  {
    id: 'uniswap',
    name: 'Uniswap',
    tvl: '$8.5B',
    audits: 'Trail of Bits, OpenZeppelin',
    category: 'DEX',
    description: 'Most liquid decentralized exchange',
    riskDimensions: {
      smartContract: 20,
      liquidity: 15,
      governance: 40,
      oracle: 25,
      economic: 35,
      regulatory: 50,
    },
  },
  {
    id: 'compound',
    name: 'Compound',
    tvl: '$3.1B',
    audits: 'OpenZeppelin, Certora',
    category: 'Lending',
    description: 'Pioneering algorithmic money market',
    riskDimensions: {
      smartContract: 30,
      liquidity: 35,
      governance: 45,
      oracle: 35,
      economic: 50,
      regulatory: 55,
    },
  },
  {
    id: 'makerdao',
    name: 'MakerDAO',
    tvl: '$5.8B',
    audits: 'Multiple audits, continuous monitoring',
    category: 'Stablecoin',
    description: 'Decentralized stablecoin protocol (DAI)',
    riskDimensions: {
      smartContract: 35,
      liquidity: 25,
      governance: 55,
      oracle: 40,
      economic: 45,
      regulatory: 60,
    },
  },
  {
    id: 'curve',
    name: 'Curve',
    tvl: '$6.2B',
    audits: 'Trail of Bits, Quantstamp',
    category: 'DEX',
    description: 'Stablecoin-optimized DEX',
    riskDimensions: {
      smartContract: 28,
      liquidity: 18,
      governance: 48,
      oracle: 28,
      economic: 42,
      regulatory: 48,
    },
  },
  {
    id: 'lido',
    name: 'Lido',
    tvl: '$25.3B',
    audits: 'Certora, MixBytes, Sigma Prime',
    category: 'Liquid Staking',
    description: 'Leading Ethereum liquid staking',
    riskDimensions: {
      smartContract: 32,
      liquidity: 22,
      governance: 58,
      oracle: 35,
      economic: 48,
      regulatory: 65,
    },
  },
  {
    id: 'convex',
    name: 'Convex',
    tvl: '$2.8B',
    audits: 'Single audit, community review',
    category: 'Yield Farming',
    description: 'Curve yield optimizer',
    riskDimensions: {
      smartContract: 45,
      liquidity: 42,
      governance: 62,
      oracle: 38,
      economic: 55,
      regulatory: 52,
    },
  },
  {
    id: 'yearn',
    name: 'Yearn',
    tvl: '$1.9B',
    audits: 'Multiple audits, complex strategies',
    category: 'Yield Farming',
    description: 'Automated yield optimization',
    riskDimensions: {
      smartContract: 48,
      liquidity: 38,
      governance: 52,
      oracle: 40,
      economic: 58,
      regulatory: 55,
    },
  },
  {
    id: 'sushiswap',
    name: 'SushiSwap',
    tvl: '$1.4B',
    audits: 'Audited, community governance',
    category: 'DEX',
    description: 'Community-driven DEX',
    riskDimensions: {
      smartContract: 42,
      liquidity: 45,
      governance: 55,
      oracle: 42,
      economic: 60,
      regulatory: 58,
    },
  },
  {
    id: 'pancakeswap',
    name: 'PancakeSwap',
    tvl: '$2.1B',
    audits: 'Certik, Binance Chain',
    category: 'DEX',
    description: 'BSC leading DEX',
    riskDimensions: {
      smartContract: 38,
      liquidity: 32,
      governance: 58,
      oracle: 44,
      economic: 55,
      regulatory: 62,
    },
  },
  {
    id: 'gmx',
    name: 'GMX',
    tvl: '$0.8B',
    audits: 'OpenZeppelin, Halborn',
    category: 'Derivatives',
    description: 'Decentralized perpetual DEX',
    riskDimensions: {
      smartContract: 40,
      liquidity: 48,
      governance: 60,
      oracle: 50,
      economic: 65,
      regulatory: 70,
    },
  },
  {
    id: 'dydx',
    name: 'dYdX',
    tvl: '$0.9B',
    audits: 'TrailofBits, Hardhat',
    category: 'Derivatives',
    description: 'Decentralized perpetuals and borrowing',
    riskDimensions: {
      smartContract: 38,
      liquidity: 52,
      governance: 58,
      oracle: 48,
      economic: 62,
      regulatory: 72,
    },
  },
  {
    id: 'balancer',
    name: 'Balancer',
    tvl: '$1.2B',
    audits: 'Cantina, OpenZeppelin',
    category: 'DEX',
    description: 'Liquidity protocol with flexible pools',
    riskDimensions: {
      smartContract: 35,
      liquidity: 40,
      governance: 50,
      oracle: 38,
      economic: 52,
      regulatory: 56,
    },
  },
  {
    id: '1inch',
    name: '1inch',
    tvl: '$0.6B',
    audits: 'Quantstamp, Trail of Bits',
    category: 'DEX',
    description: 'Aggregation and swap optimization',
    riskDimensions: {
      smartContract: 33,
      liquidity: 28,
      governance: 54,
      oracle: 32,
      economic: 48,
      regulatory: 60,
    },
  },
  {
    id: 'stargate',
    name: 'Stargate',
    tvl: '$0.7B',
    audits: 'Certora, formal verification',
    category: 'Cross-Chain',
    description: 'Cross-chain bridge and liquidity',
    riskDimensions: {
      smartContract: 44,
      liquidity: 50,
      governance: 62,
      oracle: 46,
      economic: 58,
      regulatory: 68,
    },
  },
];

const DIMENSION_LABELS = {
  smartContract: 'Smart Contract Risk',
  liquidity: 'Liquidity Risk',
  governance: 'Governance Risk',
  oracle: 'Oracle Risk',
  economic: 'Economic Risk',
  regulatory: 'Regulatory Risk',
};

const DIMENSION_DESCRIPTIONS = {
  smartContract: 'Code quality, audit status, historical bugs',
  liquidity: 'TVL, pool depth, concentration risks',
  governance: 'Decentralization, voter participation, control',
  oracle: 'Oracle dependencies, redundancy, flash loan risks',
  economic: 'Tokenomics, inflation rate, sustainability',
  regulatory: 'Jurisdiction, compliance, legal exposure',
};

function calculateOverallRisk(dimensions: RiskDimensions): number {
  const weights = {
    smartContract: 0.2,
    liquidity: 0.15,
    governance: 0.15,
    oracle: 0.15,
    economic: 0.2,
    regulatory: 0.15,
  };

  return Math.round(
    dimensions.smartContract * weights.smartContract +
      dimensions.liquidity * weights.liquidity +
      dimensions.governance * weights.governance +
      dimensions.oracle * weights.oracle +
      dimensions.economic * weights.economic +
      dimensions.regulatory * weights.regulatory
  );
}

function getRiskTier(score: number): { tier: string; color: string; bgColor: string } {
  if (score <= 25) return { tier: 'Low', color: '#10b981', bgColor: 'rgba(16, 185, 129, 0.1)' };
  if (score <= 40) return { tier: 'Medium', color: '#f59e0b', bgColor: 'rgba(245, 158, 11, 0.1)' };
  if (score <= 60) return { tier: 'High', color: '#ef4444', bgColor: 'rgba(239, 68, 68, 0.1)' };
  return { tier: 'Critical', color: '#991b1b', bgColor: 'rgba(153, 27, 27, 0.1)' };
}

function CircularGauge({ score }: { score: number }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const risk = getRiskTier(score);

  return (
    <div className="flex flex-col items-center gap-4">
      <svg width="200" height="200" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="var(--glass-border)"
          strokeWidth="3"
        />
        <circle
          r={radius}
          stroke={risk.color}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transform: 'rotate(-90deg)', transformOrigin: '100px 100px' }}
        />
        <text
          x="100"
          y="105"
          textAnchor="middle"
          fontSize="48"
          fontWeight="bold"
          fill="var(--color-text)"
        >
          {score}
        </text>
        <text x="100" y="130" textAnchor="middle" fontSize="14" fill="var(--color-text-secondary)">
          Overall Risk
        </text>
      </svg>
      <div
        className="px-3 py-1 rounded-full text-sm font-semibold"
        style={{ color: risk.color, backgroundColor: risk.bgColor }}
      >
        {risk.tier}
      </div>
    </div>
  );
}

function RadarChart({ dimensions, protocol }: { dimensions: RiskDimensions; protocol: Protocol }) {
  const keys = Object.keys(dimensions) as (keyof RiskDimensions)[];
  const values = keys.map((k) => dimensions[k]);
  const n = keys.length;
  const angle = (2 * Math.PI) / n;
  const radius = 60;
  const centerX = 100;
  const centerY = 100;

  const points = values
    .map((value, i) => {
      const a = angle * i - Math.PI / 2;
      const r = (value / 100) * radius;
      return [centerX + r * Math.cos(a), centerY + r * Math.sin(a)];
    })
    .flat();

  const polygonPoints = [];
  for (let i = 0; i < n; i++) {
    const a = angle * i - Math.PI / 2;
    const r = radius;
    polygonPoints.push([centerX + r * Math.cos(a), centerY + r * Math.sin(a)]);
  };

  const gridLines = [];
  for (let i = 0; i < 5; i++) {
    const gridRadius = (radius / 5) * (i + 1);
    gridLines.push(
      <circle
        key={`grid-${i}`}
        cx={centerX}
        cy={centerY}
        r={gridRadius}
        strokeWidth="1"
        opacity="0.5"
      />
    );
  };

  const axisLines = polygonPoints.map((point, i) => (
    <line
      key={`axis-${i}`}
      x1={centerX}
      y1={centerY}
      x2={point[0]}
      y2={point[1]}
      opacity="0.3"
    />
  ));

  const dataPolygonPoints = points.map((p, i) => (i % 2 === 0 ? [points[i], points[i + 1]] : null)).filter(Boolean);

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="220" height="220" viewBox="0 0 220 220">
        <defs>
          <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {gridLines}
        {axisLines}
        <polygon
          points={polygonPoints.map((p) => p.join(',')).join(' ')}
          fill="url(#radarGradient)"
          stroke="var(--color-primary)"
          strokeWidth="2"
        />
        {values.map((value, i) => {
          const a = angle * i - Math.PI / 2;
          const r = (value / 100) * radius;
          return (
            <circle
              key={`point-${i}`}
              cx={centerX + r * Math.cos(a)}
              cy={centerY + r * Math.sin(a)}
              r="4"
              fill="var(--color-primary)"
              stroke="var(--color-bg)"
            />
          );
        })}
      </svg>
      <div className="grid grid-cols-2 gap-2 text-xs">
        {keys.map((key) => (
          <div key={key} className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }} />
            <span className="text-color-text-secondary">{DIMENSION_LABELS[key]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DimensionCard({
  dimension,
  value,
  label,
  description,
}: {
  dimension: keyof RiskDimensions;
  value: number;
  label: string;
  description: string;
}) {
  const risk = getRiskTier(value);
  const percentage = (value / 100) * 100;

  return (
    <div
      className="p-4 rounded-lg border backdrop-blur-sm"
      style={{
        backgroundColor: 'var(--glass-bg)',
        borderColor: 'var(--glass-border)',
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-semibold text-sm" style={{ color: 'var(--color-text)' }}>
            {label}
          </h4>
          <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
            {description}
          </p>
        </div>
        <div
          className="px-2 py-1 rounded text-xs font-semibold"
          style={{ color: risk.color, backgroundColor: risk.bgColor }}
        >
          {value}
        </div>
      </div>
      <div
        className="h-2 rounded-full overflow-hidden"
        style={{ backgroundColor: 'var(--glass-border)' }}
      >
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${percentage}%`, backgroundColor: risk.color }}
        />
      </div>
    </div>
  );
}

export default function DeFiRiskScorer() {
  const [selectedProtocols, setSelectedProtocols] = useState<string[]>(['aave']);
  const [compareMode, setCompareMode] = useState(false);

  const handleProtocolSelect = (id: string) => {
    if (compareMode) {
      if (selectedProtocols.includes(id)) {
        setSelectedProtocols(selectedProtocols.filter((p) => p !== id));
      } else if (selectedProtocols.length < 3) {
        setSelectedProtocols([...selectedProtocols, id]);
      }
    } else {
      setSelectedProtocols([id]);
    }
  };

  const activeProtocols = useMemo(
    () => PROTOCOLS.filter((p) => selectedProtocols.includes(p.id)),
    [selectedProtocols]
  );

  return (
    <div
      className="min-h-screen p-6 space-y-8"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
            DeFi Risk Scoring Engine
          </h1>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Comprehensive risk assessment across 15+ major DeFi protocols
          </p>
        </div>

        {/* Controls */}
        <div
          className="p-4 rounded-lg border backdrop-blur-sm flex items-center justify-between"
          style={{
            backgroundColor: 'var(--glass-bg)',
            borderColor: 'var(--glass-border)',
          }}
        >
          <div>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--color-text)' }}>
              Compare Mode
            </h3>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              {compareMode ? 'Select up to 3 protocols to compare' : 'Select a protocol to analyze'}
            </p>
          </div>
          <button
            onClick={() => {
              setCompareMode(!compareMode);
              setSelectedProtocols([selectedProtocols[0] || 'aave']);
            }}
            className="px-6 py-2 rounded-lg font-semibold transition-all"
            style={{
              backgroundColor: compareMode ? 'var(--color-primary)' : 'var(--glass-border)',
              color: compareMode ? '#fff' : 'var(--color-text)',
            }}
          >
            {compareMode ? 'Exit Compare' : 'Compare Protocols'}
          </button>
        </div>

        {/* Protocol List */}
        <div>
          <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-text)' }}>
            Protocols
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {PROTOCOLS.map((protocol) => {
              const overallRisk = calculateOverallRisk(protocol.riskDimensions);
              const risk = getRiskTier(overallRisk);
              const isSelected = selectedProtocols.includes(protocol.id);

              return (
                <button
                  key={protocol.id}
                  onClick={() => handleProtocolSelect(protocol.id)}
                  className={`p-4 rounded-lg border backdrop-blur-sm text-left transition-all ${
                    isSelected
                      ? 'ring-2'
                      : 'hover:border-opacity-100'
                  }`}
                  style={{
                    backgroundColor: 'var(--glass-bg)',
                    borderColor: isSelected
                      ? 'var(--color-primary)'
                      : 'var(--glass-border)',
                    ringColor: 'var(--color-primary)',
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold" style={{ color: 'var(--color-text)' }}>
                        {protocol.name}
                      </h3>
                      <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                        {protocol.category}
                      </p>
                    </div>
                    <div
                      style={{ color: risk.color, backgroundColor: risk.bgColor }}
                    >
                      {risk.tier}
                    </div>
                  </div>
                  <p className="text-xs mb-3" style={{ color: 'var(--color-text-secondary)' }}>
                    {protocol.description}
                  </p>
                  <div className="text-xs space-y-1" style={{ color: 'var(--color-text-secondary)' }}>
                    <p>TVL: {protocol.tvl}</p>
                    <p>Overall Risk: {overallRisk}/100</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Analysis Section */}
        {activeProtocols.length > 0 && (
          <div className="space-y-8">
            {compareMode ? (
              // Compare Mode
              <div>
                <h2 className="text-lg font-semibold mb-6" style={{ color: 'var(--color-text)' }}>
                  Comparison View ({activeProtocols.length} protocols)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activeProtocols.map((protocol) => {
                    const overallRisk = calculateOverallRisk(protocol.riskDimensions);
                    return (
                      <div
                        key={protocol.id}
                        className="p-6 rounded-lg border backdrop-blur-sm"
                        style={{
                          backgroundColor: 'var(--glass-bg)',
                          borderColor: 'var(--glass-border)',
                        }}
                      >
                        <div className="text-center mb-6">
                          <h3 className="text-xl font-bold" style={{ color: 'var(--color-text)' }}>
                            {protocol.name}
                          </h3>
                          <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                            {protocol.category}
                          </p>
                        </div>
                        <CircularGauge score={overallRisk} />
                        <div className="mt-6">
                          <RadarChart dimensions={protocol.riskDimensions} protocol={protocol} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              // Single Protocol View
              activeProtocols.map((protocol) => {
                const overallRisk = calculateOverallRisk(protocol.riskDimensions);

                return (
                  <div key={protocol.id} className="space-y-6">
                    {/* Header */}
                    <div
                      style={{
                        backgroundColor: 'var(--glass-bg)',
                        borderColor: 'var(--glass-border)',
                      }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>
                            {protocol.name}
                          </h2>
                          <p className="text-sm mt-2" style={{ color: 'var(--color-text-secondary)' }}>
                            {protocol.description}
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t" style={{ borderColor: 'var(--glass-border)' }}>
                        <div>
                          <p className="text-xs mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                            Total Value Locked
                          </p>
                          <p className="text-lg font-semibold" style={{ color: 'var(--color-text)' }}>
                            {protocol.tvl}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                            Audits
                          </p>
                          <p className="text-sm" style={{ color: 'var(--color-text)' }}>
                            {protocol.audits}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Gauge and Radar */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div
                        className="p-6 rounded-lg border backdrop-blur-sm flex justify-center"
                        style={{
                          backgroundColor: 'var(--glass-bg)',
                          borderColor: 'var(--glass-border)',
                        }}
                      >
                        <CircularGauge score={overallRisk} />
                      </div>
                      <div
                        style={{
                          backgroundColor: 'var(--glass-bg)',
                          borderColor: 'var(--glass-border)',
                        }}
                      >
                        <RadarChart dimensions={protocol.riskDimensions} protocol={protocol} />
                      </div>
                    </div>

                    {/* Dimension Breakdown */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-text)' }}>
                        Risk Assessment Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {(Object.keys(protocol.riskDimensions) as Array<keyof RiskDimensions>).map((dim) => (
                          <DimensionCard
                            key={dim}
                            dimension={dim}
                            value={protocol.riskDimensions[dim]}
                            label={DIMENSION_LABELS[dim]}
                            description={DIMENSION_DESCRIPTIONS[dim]}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Risk Summary */}
                    <div
                      style={{
                        backgroundColor: 'var(--glass-bg)',
                        borderColor: 'var(--glass-border)',
                      }}
                    >
                      <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-text)' }}>
                        Risk Summary
                      </h3>
                      <div className="space-y-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        <p>
                          {protocol.name} has an overall risk score of <strong>{overallRisk}/100</strong>. This
                          assessment considers smart contract security, liquidity depth, governance decentralization,
                          oracle reliability, economic sustainability, and regulatory exposure.
                        </p>
                        <p>
                          Higher scores indicate greater risk. Factors are weighted to emphasize smart contract and
                          economic risks (20% each), while governance, liquidity, oracle, and regulatory risks are equally
                          weighted at 15% each.
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* Footer */}
        <div
          className="p-4 rounded-lg border backdrop-blur-sm text-center text-xs"
          style={{
            backgroundColor: 'var(--glass-bg)',
            borderColor: 'var(--glass-border)',
            color: 'var(--color-text-secondary)',
          }}
        >
          <p>Risk assessments are based on demo data and on-chain metrics. Always conduct your own research before engaging with DeFi protocols.</p>
        </div>
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Defi Risk Scorer",
              "url": "https://degen0x.com/tools/defi-risk-scorer",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </div>
  );
}
