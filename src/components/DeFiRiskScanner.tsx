'use client';

import { useState, useMemo } from 'react';
import { ChevronDown, TrendingUp, TrendingDown, AlertCircle, CheckCircle, Search } from 'lucide-react';

interface RiskFactors {
  smartContract: number;
  liquidity: number;
  governance: number;
  oracle: number;
  regulatory: number;
}

interface Protocol {
  id: string;
  name: string;
  category: 'Lending' | 'DEX' | 'Liquid Staking' | 'Stablecoin' | 'Yield' | 'AMM' | 'Derivatives';
  tvl: string;
  tvlUSD: number;
  chain: 'Ethereum' | 'Multi-chain' | 'Solana' | 'Arbitrum' | 'Optimism';
  overallRiskScore: number;
  riskFactors: RiskFactors;
  protocolAge: number; // in years
  auditStatus: 'audited' | 'unaudited';
  auditors: string[];
  bugBountyInfo: string;
  riskMitigationTips: string[];
  description: string;
}

const PROTOCOLS: Protocol[] = [
  {
    id: 'aave',
    name: 'Aave',
    category: 'Lending',
    tvl: '$10.2B',
    tvlUSD: 10200000000,
    chain: 'Multi-chain',
    overallRiskScore: 28,
    riskFactors: {
      smartContract: 22,
      liquidity: 18,
      governance: 35,
      oracle: 28,
      regulatory: 32,
    },
    protocolAge: 5,
    auditStatus: 'audited',
    auditors: ['OpenZeppelin', 'Trail of Bits', 'Consensys'],
    bugBountyInfo: 'Active bug bounty on Immunefi ($50,000+ rewards)',
    riskMitigationTips: [
      'Enable risk management features in settings',
      'Monitor governance votes for risk parameter changes',
      'Use isolated markets for experimental assets',
      'Check oracle health status regularly',
    ],
    description: 'Leading decentralized lending and borrowing protocol',
  },
  {
    id: 'uniswap',
    name: 'Uniswap',
    category: 'DEX',
    tvl: '$8.5B',
    tvlUSD: 8500000000,
    chain: 'Multi-chain',
    overallRiskScore: 25,
    riskFactors: {
      smartContract: 18,
      liquidity: 15,
      governance: 38,
      oracle: 22,
      regulatory: 42,
    },
    protocolAge: 4,
    auditStatus: 'audited',
    auditors: ['Trail of Bits', 'OpenZeppelin'],
    bugBountyInfo: 'Immunefi bug bounty (up to $75,000)',
    riskMitigationTips: [
      'Use price oracles carefully in composable protocols',
      'Monitor swap slippage settings',
      'Be aware of liquidity depth for traded pairs',
      'Use time-weighted average prices (TWAP) for safety',
    ],
    description: 'Most liquid automated market maker (AMM) protocol',
  },
  {
    id: 'lido',
    name: 'Lido',
    category: 'Liquid Staking',
    tvl: '$25.3B',
    tvlUSD: 25300000000,
    chain: 'Multi-chain',
    overallRiskScore: 35,
    riskFactors: {
      smartContract: 28,
      liquidity: 20,
      governance: 52,
      oracle: 32,
      regulatory: 48,
    },
    protocolAge: 4,
    auditStatus: 'audited',
    auditors: ['Certora', 'MixBytes', 'Sigma Prime'],
    bugBountyInfo: 'Immunefi bug bounty program active',
    riskMitigationTips: [
      'Monitor operator diversity and performance',
      'Check stETH exchange rate stability',
      'Track governance voting concentration',
      'Monitor peg risk vs ETH',
    ],
    description: 'Leading Ethereum liquid staking protocol',
  },
  {
    id: 'makerdao',
    name: 'MakerDAO',
    category: 'Stablecoin',
    tvl: '$5.8B',
    tvlUSD: 5800000000,
    chain: 'Ethereum',
    overallRiskScore: 38,
    riskFactors: {
      smartContract: 32,
      liquidity: 25,
      governance: 55,
      oracle: 38,
      regulatory: 48,
    },
    protocolAge: 7,
    auditStatus: 'audited',
    auditors: ['Multiple audits', 'Continuous monitoring'],
    bugBountyInfo: 'Formal verification and continuous security',
    riskMitigationTips: [
      'Monitor collateralization ratio',
      'Track DAI peg stability',
      'Review stability fee changes',
      'Monitor oracle price feeds',
    ],
    description: 'Decentralized stablecoin protocol (DAI)',
  },
  {
    id: 'compound',
    name: 'Compound',
    category: 'Lending',
    tvl: '$3.1B',
    tvlUSD: 3100000000,
    chain: 'Multi-chain',
    overallRiskScore: 32,
    riskFactors: {
      smartContract: 25,
      liquidity: 32,
      governance: 42,
      oracle: 32,
      regulatory: 35,
    },
    protocolAge: 5,
    auditStatus: 'audited',
    auditors: ['OpenZeppelin', 'Certora'],
    bugBountyInfo: 'Immunefi bug bounty available',
    riskMitigationTips: [
      'Monitor interest rate models',
      'Check collateral utilization',
      'Track governance decisions',
      'Monitor liquidation health factor',
    ],
    description: 'Pioneer algorithmic money market protocol',
  },
  {
    id: 'curve',
    name: 'Curve',
    category: 'DEX',
    tvl: '$6.2B',
    tvlUSD: 6200000000,
    chain: 'Multi-chain',
    overallRiskScore: 28,
    riskFactors: {
      smartContract: 24,
      liquidity: 16,
      governance: 44,
      oracle: 26,
      regulatory: 36,
    },
    protocolAge: 4,
    auditStatus: 'audited',
    auditors: ['Trail of Bits', 'Quantstamp'],
    bugBountyInfo: 'Active security program',
    riskMitigationTips: [
      'Monitor impermanent loss for LP positions',
      'Check pool concentration and stability',
      'Track governance voting patterns',
      'Monitor stablecoin peg risks',
    ],
    description: 'Stablecoin-optimized decentralized exchange',
  },
  {
    id: 'yearn',
    name: 'Yearn',
    category: 'Yield',
    tvl: '$1.9B',
    tvlUSD: 1900000000,
    chain: 'Multi-chain',
    overallRiskScore: 42,
    riskFactors: {
      smartContract: 44,
      liquidity: 36,
      governance: 48,
      oracle: 38,
      regulatory: 42,
    },
    protocolAge: 4,
    auditStatus: 'audited',
    auditors: ['Multiple audits', 'Trail of Bits'],
    bugBountyInfo: 'Bug bounty for critical issues',
    riskMitigationTips: [
      'Review strategy composition before investing',
      'Monitor strategy performance metrics',
      'Check smart contract complexity',
      'Track governance and strategy changes',
    ],
    description: 'Automated yield optimization vaults',
  },
  {
    id: 'convex',
    name: 'Convex',
    category: 'Yield',
    tvl: '$2.8B',
    tvlUSD: 2800000000,
    chain: 'Multi-chain',
    overallRiskScore: 45,
    riskFactors: {
      smartContract: 42,
      liquidity: 40,
      governance: 58,
      oracle: 36,
      regulatory: 38,
    },
    protocolAge: 3,
    auditStatus: 'audited',
    auditors: ['Community review', 'Certora'],
    bugBountyInfo: 'Active security monitoring',
    riskMitigationTips: [
      'Monitor Curve pool health',
      'Check CVX token concentration',
      'Track bribe market dynamics',
      'Monitor governance concentration',
    ],
    description: 'Curve liquidity farming optimizer',
  },
  {
    id: 'balancer',
    name: 'Balancer',
    category: 'AMM',
    tvl: '$1.2B',
    tvlUSD: 1200000000,
    chain: 'Multi-chain',
    overallRiskScore: 35,
    riskFactors: {
      smartContract: 32,
      liquidity: 38,
      governance: 48,
      oracle: 36,
      regulatory: 34,
    },
    protocolAge: 4,
    auditStatus: 'audited',
    auditors: ['Cantina', 'OpenZeppelin'],
    bugBountyInfo: 'Security bounty program active',
    riskMitigationTips: [
      'Review custom pool risk profiles',
      'Monitor pool composition changes',
      'Check liquidity provider concentration',
      'Track governance voting',
    ],
    description: 'Flexible liquidity protocol with customizable pools',
  },
  {
    id: 'pancakeswap',
    name: 'PancakeSwap',
    category: 'DEX',
    tvl: '$2.1B',
    tvlUSD: 2100000000,
    chain: 'Arbitrum',
    overallRiskScore: 40,
    riskFactors: {
      smartContract: 35,
      liquidity: 30,
      governance: 54,
      oracle: 40,
      regulatory: 42,
    },
    protocolAge: 3,
    auditStatus: 'audited',
    auditors: ['CertiK', 'Binance Chain Security'],
    bugBountyInfo: 'Immunefi bug bounty program',
    riskMitigationTips: [
      'Monitor PancakeSwap ecosystem health',
      'Check fee tier selection for liquidity',
      'Track governance decisions',
      'Monitor regulatory developments',
    ],
    description: 'Leading decentralized exchange on BSC and multi-chain',
  },
  {
    id: 'sushiswap',
    name: 'SushiSwap',
    category: 'DEX',
    tvl: '$1.4B',
    tvlUSD: 1400000000,
    chain: 'Multi-chain',
    overallRiskScore: 48,
    riskFactors: {
      smartContract: 38,
      liquidity: 42,
      governance: 58,
      oracle: 40,
      regulatory: 48,
    },
    protocolAge: 3,
    auditStatus: 'audited',
    auditors: ['Community audits', 'Peckshield'],
    bugBountyInfo: 'Security bug bounty available',
    riskMitigationTips: [
      'Monitor liquidity provider diversity',
      'Check SUSHI token concentration',
      'Track governance participation rates',
      'Monitor strategic partnerships',
    ],
    description: 'Community-driven decentralized exchange',
  },
  {
    id: 'raydium',
    name: 'Raydium',
    category: 'DEX',
    tvl: '$0.8B',
    tvlUSD: 800000000,
    chain: 'Solana',
    overallRiskScore: 52,
    riskFactors: {
      smartContract: 48,
      liquidity: 45,
      governance: 62,
      oracle: 44,
      regulatory: 50,
    },
    protocolAge: 2,
    auditStatus: 'audited',
    auditors: ['OtterSec'],
    bugBountyInfo: 'Security program available',
    riskMitigationTips: [
      'Monitor Solana network stability',
      'Check liquidity pool composition',
      'Track governance changes',
      'Monitor Solana MEV risks',
    ],
    description: 'High-performance AMM on Solana',
  },
];

const RISK_COLORS = {
  low: '#10b981',
  medium: '#f59e0b',
  high: '#ef4444',
  critical: '#991b1b',
};

const getRiskLevel = (score: number): { level: string; color: string; bgColor: string } => {
  if (score <= 30) return { level: 'Low', color: RISK_COLORS.low, bgColor: 'rgba(16, 185, 129, 0.1)' };
  if (score <= 50) return { level: 'Medium', color: RISK_COLORS.medium, bgColor: 'rgba(245, 158, 11, 0.1)' };
  if (score <= 75) return { level: 'High', color: RISK_COLORS.high, bgColor: 'rgba(239, 68, 68, 0.1)' };
  return { level: 'Critical', color: RISK_COLORS.critical, bgColor: 'rgba(153, 27, 27, 0.1)' };
};

function RiskGauge({ score }: { score: number }) {
  const risk = getRiskLevel(score);
  const percentage = (score / 100) * 100;

  return (
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 rounded-full border-8 flex items-center justify-center relative" style={{
        borderColor: 'var(--glass-border)',
        background: `conic-gradient(${risk.color} 0deg ${percentage * 3.6}deg, var(--glass-border) ${percentage * 3.6}deg)`
      }}>
        <div className="absolute inset-2 rounded-full" style={{ backgroundColor: 'var(--color-bg)' }}>
          <div className="flex flex-col items-center justify-center h-full">
            <span className="text-2xl font-bold" style={{ color: risk.color }}>{score}</span>
            <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>Risk</span>
          </div>
        </div>
      </div>
      <div
        className="mt-3 px-3 py-1 rounded-full text-xs font-semibold"
        style={{ color: risk.color, backgroundColor: risk.bgColor }}
      >
        {risk.level} Risk
      </div>
    </div>
  );
}

function RadarChart({ factors }: { factors: RiskFactors }) {
  const keys = Object.keys(factors) as (keyof RiskFactors)[];
  const values = keys.map(k => factors[k]);
  const n = keys.length;
  const angle = (2 * Math.PI) / n;
  const radius = 50;
  const centerX = 120;
  const centerY = 120;

  const points = values.map((value, i) => {
    const a = angle * i - Math.PI / 2;
    const r = (value / 100) * radius;
    return [centerX + r * Math.cos(a), centerY + r * Math.sin(a)];
  });

  const polygonPoints = [];
  for (let i = 0; i < n; i++) {
    const a = angle * i - Math.PI / 2;
    const r = radius;
    polygonPoints.push([centerX + r * Math.cos(a), centerY + r * Math.sin(a)]);
  }

  const labels = ['Smart Contract', 'Liquidity', 'Governance', 'Oracle', 'Regulatory'];

  return (
    <div className="flex flex-col items-center">
      <svg width="240" height="280" viewBox="0 0 240 280" style={{ overflow: 'visible' }}>
        {/* Grid circles */}
        {[1, 2, 3, 4, 5].map(i => (
          <circle
            key={`grid-${i}`}
            cx={centerX}
            cy={centerY}
            r={(radius / 5) * i}
            fill="none"
            stroke="var(--glass-border)"
            strokeWidth="1"
            opacity="0.3"
          />
        ))}

        {/* Axis lines */}
        {polygonPoints.map((point, i) => (
          <line
            key={`axis-${i}`}
            x1={centerX}
            y1={centerY}
            x2={point[0]}
            y2={point[1]}
            stroke="var(--glass-border)"
            strokeWidth="1"
            opacity="0.2"
          />
        ))}

        {/* Data polygon */}
        <polygon
          points={points.map(p => p.join(',')).join(' ')}
          fill="var(--color-primary)"
          fillOpacity="0.15"
          stroke="var(--color-primary)"
          strokeWidth="2"
        />

        {/* Data points */}
        {points.map((point, i) => (
          <circle
            key={`point-${i}`}
            cx={point[0]}
            cy={point[1]}
            r="4"
            fill="var(--color-primary)"
            stroke="var(--color-bg)"
            strokeWidth="2"
          />
        ))}

        {/* Labels */}
        {polygonPoints.map((point, i) => {
          const labelX = centerX + ((radius + 15) / radius) * (point[0] - centerX);
          const labelY = centerY + ((radius + 15) / radius) * (point[1] - centerY);
          return (
            <text
              key={`label-${i}`}
              x={labelX}
              y={labelY}
              textAnchor="middle"
              fontSize="10"
              fill="var(--color-text-secondary)"
              dominantBaseline="middle"
            >
              {labels[i]}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

export default function DeFiRiskScanner() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChain, setSelectedChain] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'risk' | 'tvl' | 'name'>('risk');
  const [expandedProtocol, setExpandedProtocol] = useState<string | null>(null);

  const chains = ['all', ...new Set(PROTOCOLS.map(p => p.chain))];
  const categories = ['all', ...new Set(PROTOCOLS.map(p => p.category))];

  const filteredAndSorted = useMemo(() => {
    let filtered = PROTOCOLS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesChain = selectedChain === 'all' || p.chain === selectedChain;
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      return matchesSearch && matchesChain && matchesCategory;
    });

    filtered.sort((a, b) => {
      if (sortBy === 'risk') return a.overallRiskScore - b.overallRiskScore;
      if (sortBy === 'tvl') return b.tvlUSD - a.tvlUSD;
      return a.name.localeCompare(b.name);
    });

    return filtered;
  }, [searchTerm, selectedChain, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen p-4 md:p-6 space-y-6" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--color-text)' }}>
            DeFi Protocol Risk Scanner
          </h1>
          <p style={{ color: 'var(--color-text-secondary)' }} className="text-lg">
            Interactive risk assessment of 12 major DeFi protocols
          </p>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: 'var(--color-text-secondary)' }} />
            <input
              type="text"
              placeholder="Search protocols..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border backdrop-blur-sm outline-none transition-colors"
              style={{
                backgroundColor: 'var(--glass-bg)',
                borderColor: 'var(--glass-border)',
                color: 'var(--color-text)',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary)';
                e.currentTarget.style.background = 'var(--glass-bg-hover)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.background = 'var(--glass-bg)';
              }}
            />
          </div>

          {/* Chain Filter */}
          <select
            value={selectedChain}
            onChange={(e) => setSelectedChain(e.target.value)}
            className="px-4 py-2 rounded-lg border backdrop-blur-sm outline-none cursor-pointer transition-colors"
            style={{
              backgroundColor: 'var(--glass-bg)',
              borderColor: 'var(--glass-border)',
              color: 'var(--color-text)',
            }}
          >
            {chains.map(chain => (
              <option key={chain} value={chain}>
                {chain === 'all' ? 'All Chains' : chain}
              </option>
            ))}
          </select>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 rounded-lg border backdrop-blur-sm outline-none cursor-pointer transition-colors"
            style={{
              backgroundColor: 'var(--glass-bg)',
              borderColor: 'var(--glass-border)',
              color: 'var(--color-text)',
            }}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'All Categories' : cat}
              </option>
            ))}
          </select>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-4 py-2 rounded-lg border backdrop-blur-sm outline-none cursor-pointer transition-colors"
            style={{
              backgroundColor: 'var(--glass-bg)',
              borderColor: 'var(--glass-border)',
              color: 'var(--color-text)',
            }}
          >
            <option value="risk">Sort by Risk Score</option>
            <option value="tvl">Sort by TVL</option>
            <option value="name">Sort by Name</option>
          </select>
        </div>

        {/* Results Count */}
        <div style={{ color: 'var(--color-text-secondary)' }} className="text-sm">
          Showing {filteredAndSorted.length} of {PROTOCOLS.length} protocols
        </div>

        {/* Protocol Cards */}
        <div className="space-y-4">
          {filteredAndSorted.map((protocol) => {
            const risk = getRiskLevel(protocol.overallRiskScore);
            const isExpanded = expandedProtocol === protocol.id;

            return (
              <div
                key={protocol.id}
                className="rounded-lg border backdrop-blur-sm transition-all overflow-hidden"
                style={{
                  backgroundColor: 'var(--glass-bg)',
                  borderColor: 'var(--glass-border)',
                }}
              >
                {/* Card Header - Always visible */}
                <button
                  onClick={() => setExpandedProtocol(isExpanded ? null : protocol.id)}
                  className="w-full p-4 md:p-6 text-left hover:bg-opacity-80 transition-all"
                  style={{
                    background: isExpanded ? 'var(--glass-bg-hover)' : 'transparent',
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
                    {/* Name & Category */}
                    <div>
                      <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--color-text)' }}>
                        {protocol.name}
                      </h3>
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-xs px-2 py-1 rounded" style={{
                          backgroundColor: 'var(--glass-border)',
                          color: 'var(--color-text-secondary)',
                        }}>
                          {protocol.category}
                        </span>
                        <span className="text-xs px-2 py-1 rounded" style={{
                          backgroundColor: 'var(--glass-border)',
                          color: 'var(--color-text-secondary)',
                        }}>
                          {protocol.chain}
                        </span>
                      </div>
                    </div>

                    {/* TVL */}
                    <div className="hidden md:block">
                      <p style={{ color: 'var(--color-text-secondary)' }} className="text-xs uppercase tracking-wide mb-1">TVL</p>
                      <p style={{ color: 'var(--color-text)' }} className="text-lg font-semibold">
                        {protocol.tvl}
                      </p>
                    </div>

                    {/* Risk Gauge */}
                    <div className="hidden lg:block">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--glass-border)' }}>
                          <div
                            className="h-full rounded-full transition-all"
                            style={{
                              width: `${protocol.overallRiskScore}%`,
                              backgroundColor: risk.color,
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Risk Score */}
                    <div>
                      <p style={{ color: 'var(--color-text-secondary)' }} className="text-xs uppercase tracking-wide mb-1">Risk Score</p>
                      <div className="flex items-center gap-2">
                        <span
                          className="text-2xl font-bold"
                          style={{ color: risk.color }}
                        >
                          {protocol.overallRiskScore}
                        </span>
                      </div>
                    </div>

                    {/* Risk Level & Toggle */}
                    <div className="flex items-center justify-between">
                      <div
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ color: risk.color, backgroundColor: risk.bgColor }}
                      >
                        {risk.level}
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        style={{ color: 'var(--color-text-secondary)' }}
                      />
                    </div>
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div
                    className="border-t p-4 md:p-6 space-y-6"
                    style={{ borderColor: 'var(--glass-border)' }}
                  >
                    <p style={{ color: 'var(--color-text-secondary)' }} className="text-sm">
                      {protocol.description}
                    </p>

                    {/* Risk Visualization */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Gauge */}
                      <div className="flex justify-center">
                        <RiskGauge score={protocol.overallRiskScore} />
                      </div>

                      {/* Radar Chart */}
                      <div className="flex justify-center">
                        <RadarChart factors={protocol.riskFactors} />
                      </div>
                    </div>

                    {/* Risk Factors Detail */}
                    <div>
                      <h4 className="font-semibold mb-4" style={{ color: 'var(--color-text)' }}>
                        Risk Factors Breakdown
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {Object.entries(protocol.riskFactors).map(([key, value]) => {
                          const factorRisk = getRiskLevel(value);
                          const labels: Record<string, string> = {
                            smartContract: 'Smart Contract Risk',
                            liquidity: 'Liquidity Risk',
                            governance: 'Governance Risk',
                            oracle: 'Oracle Risk',
                            regulatory: 'Regulatory Risk',
                          };

                          return (
                            <div
                              key={key}
                              className="p-3 rounded-lg border"
                              style={{
                                backgroundColor: 'var(--glass-bg)',
                                borderColor: 'var(--glass-border)',
                              }}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span style={{ color: 'var(--color-text)' }} className="text-sm font-medium">
                                  {labels[key]}
                                </span>
                                <span style={{ color: factorRisk.color }} className="text-sm font-semibold">
                                  {value}
                                </span>
                              </div>
                              <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--glass-border)' }}>
                                <div
                                  className="h-full rounded-full transition-all"
                                  style={{
                                    width: `${value}%`,
                                    backgroundColor: factorRisk.color,
                                  }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Protocol Info */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="p-3 rounded-lg" style={{
                        backgroundColor: 'var(--glass-subtle-bg)',
                      }}>
                        <p style={{ color: 'var(--color-text-secondary)' }} className="text-xs mb-1">Protocol Age</p>
                        <p style={{ color: 'var(--color-text)' }} className="font-semibold">{protocol.protocolAge} years</p>
                      </div>
                      <div className="p-3 rounded-lg" style={{
                        backgroundColor: 'var(--glass-subtle-bg)',
                      }}>
                        <p style={{ color: 'var(--color-text-secondary)' }} className="text-xs mb-1">Audit Status</p>
                        <div className="flex items-center gap-2">
                          {protocol.auditStatus === 'audited' ? (
                            <>
                              <CheckCircle className="w-4 h-4" style={{ color: RISK_COLORS.low }} />
                              <span style={{ color: 'var(--color-text)' }} className="font-semibold">Audited</span>
                            </>
                          ) : (
                            <>
                              <AlertCircle className="w-4 h-4" style={{ color: RISK_COLORS.medium }} />
                              <span style={{ color: 'var(--color-text)' }} className="font-semibold">Unaudited</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="p-3 rounded-lg col-span-2" style={{
                        backgroundColor: 'var(--glass-subtle-bg)',
                      }}>
                        <p style={{ color: 'var(--color-text-secondary)' }} className="text-xs mb-1">Auditors</p>
                        <p style={{ color: 'var(--color-text)' }} className="font-semibold text-sm">
                          {protocol.auditors.join(', ')}
                        </p>
                      </div>
                    </div>

                    {/* Bug Bounty */}
                    <div className="p-4 rounded-lg border" style={{
                      backgroundColor: 'var(--glass-subtle-bg)',
                      borderColor: 'var(--glass-border)',
                    }}>
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                        <div>
                          <p style={{ color: 'var(--color-text)' }} className="font-semibold text-sm mb-1">Bug Bounty</p>
                          <p style={{ color: 'var(--color-text-secondary)' }} className="text-sm">
                            {protocol.bugBountyInfo}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Risk Mitigation Tips */}
                    <div>
                      <h4 className="font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
                        Risk Mitigation Tips
                      </h4>
                      <ul className="space-y-2">
                        {protocol.riskMitigationTips.map((tip, idx) => (
                          <li key={idx} className="flex gap-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                            <span style={{ color: 'var(--color-primary)' }} className="font-bold flex-shrink-0">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredAndSorted.length === 0 && (
          <div className="text-center py-12">
            <p style={{ color: 'var(--color-text-secondary)' }} className="text-lg">
              No protocols found matching your filters.
            </p>
          </div>
        )}

        {/* Footer Disclaimer */}
        <div
          className="p-4 rounded-lg border text-center text-xs"
          style={{
            backgroundColor: 'var(--glass-bg)',
            borderColor: 'var(--glass-border)',
            color: 'var(--color-text-secondary)',
          }}
        >
          <p>
            This risk assessment is based on on-chain metrics and historical data. Always conduct your own research and due diligence before interacting with any DeFi protocol. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </div>
  );
}
