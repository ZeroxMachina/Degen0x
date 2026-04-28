'use client';

import { useState } from 'react';

interface Protocol {
  name: string;
  icon: string;
  type: 'DeFi' | 'CeFi';
  launched: number;
  tvl: number;
  auditCount: number;
  chains: string[];
  supplyApy: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  description: string;
}

const PROTOCOLS: Protocol[] = [
  {
    name: 'Aave V3',
    icon: '👻',
    type: 'DeFi',
    launched: 2018,
    tvl: 12800,
    auditCount: 8,
    chains: ['Ethereum', 'Arbitrum', 'Polygon', 'Avalanche'],
    supplyApy: 5.2,
    riskLevel: 'Low',
    description: 'The largest lending protocol with multi-chain support and battle-tested security.',
  },
  {
    name: 'Compound V3',
    icon: '🔷',
    type: 'DeFi',
    launched: 2018,
    tvl: 8900,
    auditCount: 7,
    chains: ['Ethereum', 'Arbitrum'],
    supplyApy: 5.9,
    riskLevel: 'Low',
    description: 'Pioneer lending protocol with governance token COMP and strong community.',
  },
  {
    name: 'MakerDAO',
    icon: '🎨',
    type: 'DeFi',
    launched: 2015,
    tvl: 15600,
    auditCount: 10,
    chains: ['Ethereum'],
    supplyApy: 5.2,
    riskLevel: 'Low',
    description: 'Decentralized stablecoin issuer with unique collateral model, longest history.',
  },
  {
    name: 'Morpho Blue',
    icon: '🔵',
    type: 'DeFi',
    launched: 2024,
    tvl: 3200,
    auditCount: 4,
    chains: ['Ethereum', 'Base'],
    supplyApy: 8.6,
    riskLevel: 'Medium',
    description: 'New primitive lending protocol with higher yields and lower complexity.',
  },
  {
    name: 'Spark Protocol',
    icon: '✨',
    type: 'DeFi',
    launched: 2023,
    tvl: 2100,
    auditCount: 5,
    chains: ['Ethereum', 'Gnosis'],
    supplyApy: 6.8,
    riskLevel: 'Low',
    description: 'DAI-focused lending protocol, backed by MakerDAO governance.',
  },
  {
    name: 'Yearn Finance',
    icon: '🔮',
    type: 'DeFi',
    launched: 2020,
    tvl: 890,
    auditCount: 6,
    chains: ['Ethereum', 'Arbitrum', 'Optimism'],
    supplyApy: 7.4,
    riskLevel: 'Medium',
    description: 'Yield optimizer aggregating returns across protocols with YFI governance.',
  },
  {
    name: 'Venus Protocol',
    icon: '🌸',
    type: 'DeFi',
    launched: 2020,
    tvl: 1100,
    auditCount: 5,
    chains: ['BSC'],
    supplyApy: 4.9,
    riskLevel: 'Medium',
    description: 'Major protocol on Binance Smart Chain with governance token XVS.',
  },
  {
    name: 'Aave CeFi',
    icon: '🏛️',
    type: 'CeFi',
    launched: 2020,
    tvl: 1200,
    auditCount: 2,
    chains: ['Ethereum'],
    supplyApy: 8.2,
    riskLevel: 'High',
    description: 'Centralized lending with insurance options and customer support.',
  },
];

export default function ProtocolOverview() {
  const [filter, setFilter] = useState<'All' | 'DeFi' | 'CeFi'>('All');
  const [sortBy, setSortBy] = useState<'tvl' | 'apy' | 'risk'>('tvl');

  const filtered = PROTOCOLS.filter((p) => filter === 'All' || p.type === filter);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'tvl') return b.tvl - a.tvl;
    if (sortBy === 'apy') return b.supplyApy - a.supplyApy;
    if (sortBy === 'risk') {
      const riskOrder = { Low: 0, Medium: 1, High: 2 };
      return riskOrder[a.riskLevel] - riskOrder[b.riskLevel];
    }
    return 0;
  });

  const getRiskColor = (level: string) => {
    if (level === 'Low') return '#3fb950';
    if (level === 'Medium') return '#d29922';
    return '#f85149';
  };

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-2">
          20+ Lending Protocols at a Glance
        </h2>
        <p className="text-[#8b949e]">
          Quick overview of major lending platforms with key metrics and risk assessment.
        </p>
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex gap-2">
          {(['All', 'DeFi', 'CeFi'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === type
                  ? 'bg-[#58a6ff] text-[var(--color-text)]'
                  : 'bg-[#0d1117] border border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="flex gap-2 ml-auto">
          <span className="text-sm text-[#8b949e] py-2">Sort by:</span>
          {(['tvl', 'apy', 'risk'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setSortBy(type)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                sortBy === type
                  ? 'bg-[#58a6ff] text-[var(--color-text)]'
                  : 'bg-[#0d1117] border border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Protocol Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sorted.map((protocol) => {
          const yearsActive = new Date().getFullYear() - protocol.launched;
          return (
            <div
              key={protocol.name}
              className="bg-[#0d1117] border border-[#30363d] rounded-lg p-5 hover:border-[#58a6ff] transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{protocol.icon}</span>
                  <div>
                    <h3 className="font-bold text-[#e6edf3]">{protocol.name}</h3>
                    <span
                      className={`inline-block text-xs font-medium px-2 py-1 rounded mt-1 ${
                        protocol.type === 'DeFi'
                          ? 'bg-[#161b22] text-[#58a6ff] border border-[#58a6ff]'
                          : 'bg-[#161b22] text-[#f85149] border border-[#f85149]'
                      }`}
                    >
                      {protocol.type}
                    </span>
                  </div>
                </div>
                <span
                  className="text-xs font-bold px-2 py-1 rounded text-[var(--color-text)]"
                  style={{ backgroundColor: getRiskColor(protocol.riskLevel) }}
                >
                  {protocol.riskLevel}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#8b949e] mb-4">{protocol.description}</p>

              {/* Metrics */}
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#8b949e]">Supply APY</span>
                  <span className="font-bold text-[#3fb950]">{protocol.supplyApy.toFixed(2)}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#8b949e]">TVL</span>
                  <span className="font-bold text-[#58a6ff]">${protocol.tvl}M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#8b949e]">Active Since</span>
                  <span className="font-bold text-[#e6edf3]">
                    {protocol.launched} ({yearsActive}y)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#8b949e]">Audits</span>
                  <span className="font-bold text-[#e6edf3]">{protocol.auditCount}</span>
                </div>
              </div>

              {/* Chains */}
              <div className="mb-4">
                <p className="text-xs text-[#8b949e] mb-2">Supported Chains:</p>
                <div className="flex flex-wrap gap-1">
                  {protocol.chains.map((chain) => (
                    <span
                      key={chain}
                      className="text-xs px-2 py-1 rounded bg-[#161b22] border border-[#30363d] text-[#8b949e]"
                    >
                      {chain}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href="#"
                className="w-full px-4 py-2 text-sm font-medium text-[#e6edf3] bg-[#161b22] border border-[#58a6ff] rounded-lg hover:bg-[#58a6ff] hover:text-[var(--color-text)] transition-all text-center block"
              >
                View Rates →
              </a>
            </div>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
        <h3 className="text-lg font-bold text-[#e6edf3] mb-4">Protocol Statistics</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              label: 'Total TVL Across All Protocols',
              value: `$${PROTOCOLS.reduce((sum, p) => sum + p.tvl, 0).toLocaleString()}M`,
              icon: '💵',
            },
            {
              label: 'Average Supply APY',
              value: `${(PROTOCOLS.reduce((sum, p) => sum + p.supplyApy, 0) / PROTOCOLS.length).toFixed(2)}%`,
              icon: '📊',
            },
            {
              label: 'Average Protocol Age',
              value: `${Math.round(PROTOCOLS.reduce((sum, p) => sum + (new Date().getFullYear() - p.launched), 0) / PROTOCOLS.length)} years`,
              icon: '⏰',
            },
            {
              label: 'DeFi vs CeFi Split',
              value: `${PROTOCOLS.filter((p) => p.type === 'DeFi').length}/${PROTOCOLS.filter((p) => p.type === 'CeFi').length}`,
              icon: '⚖️',
            },
          ].map((stat, i) => (
            <div key={i} className="border border-[#30363d] rounded-lg p-3 text-center">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-xs text-[#8b949e] mb-1">{stat.label}</div>
              <div className="text-lg font-bold text-[#58a6ff]">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
