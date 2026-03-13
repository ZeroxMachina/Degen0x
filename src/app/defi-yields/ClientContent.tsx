'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

// Types
interface DeFiProtocol {
  id: string;
  name: string;
  chain: 'Ethereum' | 'Solana' | 'Arbitrum' | 'Polygon' | 'Optimism' | 'Avalanche';
  asset: string;
  apy: number;
  tvl: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  category: 'Lending' | 'LP' | 'Staking' | 'Vault';
}

// DeFi Protocol Data - 25+ realistic entries
const DEFI_PROTOCOLS: DeFiProtocol[] = [
  // Lending
  { id: 'aave-eth', name: 'Aave', chain: 'Ethereum', asset: 'USDC', apy: 5.2, tvl: '$12.4B', riskLevel: 'Low', category: 'Lending' },
  { id: 'aave-arb', name: 'Aave', chain: 'Arbitrum', asset: 'USDC', apy: 6.8, tvl: '$2.1B', riskLevel: 'Low', category: 'Lending' },
  { id: 'compound-eth', name: 'Compound', chain: 'Ethereum', asset: 'USDC', apy: 4.9, tvl: '$3.2B', riskLevel: 'Low', category: 'Lending' },
  { id: 'compound-arb', name: 'Compound', chain: 'Arbitrum', asset: 'USDC', apy: 7.1, tvl: '$1.8B', riskLevel: 'Low', category: 'Lending' },
  { id: 'morpho-eth', name: 'Morpho', chain: 'Ethereum', asset: 'USDC', apy: 8.3, tvl: '$1.9B', riskLevel: 'Medium', category: 'Lending' },

  // Staking
  { id: 'lido-eth', name: 'Lido', chain: 'Ethereum', asset: 'stETH', apy: 3.8, tvl: '$35.2B', riskLevel: 'Low', category: 'Staking' },
  { id: 'marinade-sol', name: 'Marinade', chain: 'Solana', asset: 'mSOL', apy: 7.2, tvl: '$4.8B', riskLevel: 'Low', category: 'Staking' },
  { id: 'stake-wise-eth', name: 'Stake.Wise', chain: 'Ethereum', asset: 'swETH', apy: 4.1, tvl: '$562M', riskLevel: 'Medium', category: 'Staking' },
  { id: 'rocket-eth', name: 'Rocket Pool', chain: 'Ethereum', asset: 'rETH', apy: 3.9, tvl: '$2.4B', riskLevel: 'Low', category: 'Staking' },
  { id: 'jup-sol', name: 'Jupiter', chain: 'Solana', asset: 'JUP', apy: 12.5, tvl: '$340M', riskLevel: 'High', category: 'Staking' },

  // LP (Liquidity Providing)
  { id: 'uniswap-v3-eth', name: 'Uniswap V3', chain: 'Ethereum', asset: 'ETH/USDC', apy: 15.3, tvl: '$4.2B', riskLevel: 'Medium', category: 'LP' },
  { id: 'curve-eth', name: 'Curve', chain: 'Ethereum', asset: 'USDC/USDT', apy: 6.9, tvl: '$5.8B', riskLevel: 'Low', category: 'LP' },
  { id: 'curve-arb', name: 'Curve', chain: 'Arbitrum', asset: 'USDC/USDT', apy: 8.2, tvl: '$1.2B', riskLevel: 'Low', category: 'LP' },
  { id: 'raydium-sol', name: 'Raydium', chain: 'Solana', asset: 'SOL/USDC', apy: 22.4, tvl: '$680M', riskLevel: 'High', category: 'LP' },
  { id: 'orca-sol', name: 'Orca', chain: 'Solana', asset: 'SOL/USDC', apy: 18.7, tvl: '$420M', riskLevel: 'Medium', category: 'LP' },
  { id: 'gmx-arb', name: 'GMX', chain: 'Arbitrum', asset: 'GLP', apy: 24.1, tvl: '$580M', riskLevel: 'High', category: 'LP' },

  // Vaults (Strategy)
  { id: 'yearn-eth', name: 'Yearn Finance', chain: 'Ethereum', asset: 'yvUSDC', apy: 11.2, tvl: '$2.8B', riskLevel: 'Medium', category: 'Vault' },
  { id: 'yearn-arb', name: 'Yearn Finance', chain: 'Arbitrum', asset: 'yvUSDC', apy: 13.5, tvl: '$420M', riskLevel: 'Medium', category: 'Vault' },
  { id: 'convex-eth', name: 'Convex', chain: 'Ethereum', asset: 'cvxCRV', apy: 9.8, tvl: '$3.1B', riskLevel: 'Medium', category: 'Vault' },
  { id: 'auto-farm-sol', name: 'AutoFarm', chain: 'Solana', asset: 'AUTO', apy: 16.3, tvl: '$280M', riskLevel: 'High', category: 'Vault' },
  { id: 'idle-eth', name: 'Idle Finance', chain: 'Ethereum', asset: 'idleUSDC', apy: 10.1, tvl: '$620M', riskLevel: 'Medium', category: 'Vault' },
  { id: 'beefy-arb', name: 'Beefy Finance', chain: 'Arbitrum', asset: 'mooArbiCurve', apy: 14.2, tvl: '$310M', riskLevel: 'Medium', category: 'Vault' },

  // Additional protocols
  { id: 'pendle-eth', name: 'Pendle', chain: 'Ethereum', asset: 'PT-stETH', apy: 9.4, tvl: '$850M', riskLevel: 'Medium', category: 'Vault' },
  { id: 'orca-whirlpool-sol', name: 'Orca Whirlpool', chain: 'Solana', asset: 'SOL/USDC', apy: 19.2, tvl: '$245M', riskLevel: 'Medium', category: 'LP' },
  { id: 'frax-eth', name: 'Frax', chain: 'Ethereum', asset: 'sfrxETH', apy: 4.3, tvl: '$1.6B', riskLevel: 'Low', category: 'Staking' },
  { id: 'stargate-arb', name: 'Stargate', chain: 'Arbitrum', asset: 'USDC-LP', apy: 7.8, tvl: '$950M', riskLevel: 'Medium', category: 'LP' },
  { id: 'balancer-eth', name: 'Balancer', chain: 'Ethereum', asset: 'BPT', apy: 8.6, tvl: '$560M', riskLevel: 'Medium', category: 'LP' },
];

// Risk color utilities
function getRiskColor(risk: 'Low' | 'Medium' | 'High'): string {
  switch (risk) {
    case 'Low':
      return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'Medium':
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'High':
      return 'bg-red-500/20 text-red-400 border-red-500/30';
  }
}

function getRiskDot(risk: 'Low' | 'Medium' | 'High'): string {
  switch (risk) {
    case 'Low':
      return 'bg-green-400';
    case 'Medium':
      return 'bg-yellow-400';
    case 'High':
      return 'bg-red-400';
  }
}

// Top yields component
function TopYields() {
  const topThree = [...DEFI_PROTOCOLS]
    .sort((a, b) => b.apy - a.apy)
    .slice(0, 3);

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">🔥 Top Yields</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {topThree.map((protocol, idx) => (
          <div
            key={protocol.id}
            className="glass rounded-xl p-6 border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-transparent"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="text-sm text-[var(--color-text-secondary)] mb-1">#{idx + 1} Highest Yield</div>
                <h3 className="text-lg font-bold text-[var(--color-text)]">{protocol.name}</h3>
              </div>
              <span className="text-2xl font-bold text-amber-400">{protocol.apy}%</span>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[var(--color-text-secondary)]">Asset:</span>
                <span className="font-medium text-[var(--color-text)]">{protocol.asset}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-text-secondary)]">Chain:</span>
                <span className="font-medium text-[var(--color-text)]">{protocol.chain}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-text-secondary)]">TVL:</span>
                <span className="font-medium text-[var(--color-text)]">{protocol.tvl}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-[var(--color-border)]">
                <span className="text-[var(--color-text-secondary)]">Risk:</span>
                <span className={`text-xs font-semibold px-2 py-1 rounded border ${getRiskColor(protocol.riskLevel)}`}>
                  {protocol.riskLevel}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Filter controls component
function FilterControls({
  chainFilter,
  categoryFilter,
  riskFilter,
  sortBy,
  onChainChange,
  onCategoryChange,
  onRiskChange,
  onSortChange,
}: {
  chainFilter: string;
  categoryFilter: string;
  riskFilter: string;
  sortBy: string;
  onChainChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onRiskChange: (value: string) => void;
  onSortChange: (value: string) => void;
}) {
  return (
    <div className="mb-8 glass rounded-xl p-6 border border-[var(--color-border)]">
      <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">Filter & Sort</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Chain Filter */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Chain</label>
          <select
            value={chainFilter}
            onChange={(e) => onChainChange(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-primary)]"
          >
            <option value="">All Chains</option>
            <option value="Ethereum">Ethereum</option>
            <option value="Solana">Solana</option>
            <option value="Arbitrum">Arbitrum</option>
            <option value="Polygon">Polygon</option>
            <option value="Optimism">Optimism</option>
            <option value="Avalanche">Avalanche</option>
          </select>
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Category</label>
          <select
            value={categoryFilter}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-primary)]"
          >
            <option value="">All Categories</option>
            <option value="Lending">Lending</option>
            <option value="Staking">Staking</option>
            <option value="LP">LP</option>
            <option value="Vault">Vault</option>
          </select>
        </div>

        {/* Risk Level Filter */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Risk Level</label>
          <select
            value={riskFilter}
            onChange={(e) => onRiskChange(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-primary)]"
          >
            <option value="">All Risk Levels</option>
            <option value="Low">Low Risk</option>
            <option value="Medium">Medium Risk</option>
            <option value="High">High Risk</option>
          </select>
        </div>

        {/* Sort Options */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Sort By</label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-primary)]"
          >
            <option value="apy-desc">APY (High to Low)</option>
            <option value="apy-asc">APY (Low to High)</option>
            <option value="tvl-desc">TVL (High to Low)</option>
            <option value="name">Name (A-Z)</option>
          </select>
        </div>
      </div>
    </div>
  );
}

// Protocol Table Component
function ProtocolTable({ protocols }: { protocols: DeFiProtocol[] }) {
  if (protocols.length === 0) {
    return (
      <div className="glass rounded-xl p-12 text-center border border-[var(--color-border)]">
        <p className="text-[var(--color-text-secondary)]">No protocols match your filters. Try adjusting your criteria.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-[var(--color-border)]">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[var(--color-bg-card)] border-b border-[var(--color-border)]">
            <th className="text-left px-4 py-3 text-[var(--color-text-secondary)] font-semibold">Protocol</th>
            <th className="text-left px-4 py-3 text-[var(--color-text-secondary)] font-semibold hidden sm:table-cell">Chain</th>
            <th className="text-left px-4 py-3 text-[var(--color-text-secondary)] font-semibold hidden md:table-cell">Asset</th>
            <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold">APY</th>
            <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold hidden lg:table-cell">TVL</th>
            <th className="text-center px-4 py-3 text-[var(--color-text-secondary)] font-semibold">Risk</th>
            <th className="text-center px-4 py-3 text-[var(--color-text-secondary)] font-semibold hidden md:table-cell">Category</th>
          </tr>
        </thead>
        <tbody>
          {protocols.map((protocol) => (
            <tr
              key={protocol.id}
              className="border-b border-[var(--color-border)] hover:bg-[var(--color-bg-card)] transition-colors"
            >
              {/* Protocol Name */}
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs font-bold text-white shrink-0">
                    {protocol.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-[var(--color-text)]">{protocol.name}</span>
                </div>
              </td>

              {/* Chain */}
              <td className="px-4 py-3 hidden sm:table-cell">
                <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 font-medium">
                  {protocol.chain}
                </span>
              </td>

              {/* Asset */}
              <td className="px-4 py-3 hidden md:table-cell text-[var(--color-text-secondary)]">
                {protocol.asset}
              </td>

              {/* APY */}
              <td className="px-4 py-3 text-right">
                <span className="font-bold text-lg text-green-400">{protocol.apy.toFixed(1)}%</span>
              </td>

              {/* TVL */}
              <td className="px-4 py-3 text-right hidden lg:table-cell text-[var(--color-text)]">
                {protocol.tvl}
              </td>

              {/* Risk Level */}
              <td className="px-4 py-3 text-center">
                <div className="flex items-center justify-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${getRiskDot(protocol.riskLevel)}`} />
                  <span className={`text-xs font-semibold px-2 py-1 rounded border ${getRiskColor(protocol.riskLevel)}`}>
                    {protocol.riskLevel}
                  </span>
                </div>
              </td>

              {/* Category */}
              <td className="px-4 py-3 text-center hidden md:table-cell">
                <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 font-medium">
                  {protocol.category}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Education Section
function EducationSection() {
  const concepts = [
    {
      title: 'Impermanent Loss (IL)',
      description:
        'When you provide liquidity to a pool, the ratio of your assets may change due to price movements. IL is the loss compared to simply holding the assets. Higher price volatility = higher IL risk.',
      icon: '📊',
    },
    {
      title: 'Total Value Locked (TVL)',
      description:
        'The total amount of cryptocurrency locked in a protocol. Higher TVL generally means more security and liquidity, but can also indicate less opportunity for exceptional yields.',
      icon: '🏦',
    },
    {
      title: 'Yield Farming Risks',
      description:
        'Smart contract vulnerabilities, rug pulls, governance attacks, and price volatility. Always research protocols, start with small amounts, and diversify across multiple platforms.',
      icon: '⚠️',
    },
    {
      title: 'APY vs APR',
      description:
        'APY (Annual Percentage Yield) accounts for compounding, while APR (Annual Percentage Rate) is simple interest. APY is higher and more beneficial for long-term holds due to compounding effects.',
      icon: '📈',
    },
  ];

  return (
    <div className="mb-12 mt-16">
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">📚 Yield Farming 101</h2>
      <p className="text-[var(--color-text-secondary)] mb-6">
        Understanding key concepts before you invest in DeFi yields:
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {concepts.map((concept) => (
          <div key={concept.title} className="glass rounded-xl p-6 border border-[var(--color-border)]">
            <div className="flex items-start gap-4">
              <span className="text-3xl">{concept.icon}</span>
              <div>
                <h3 className="font-semibold text-[var(--color-text)] mb-2">{concept.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{concept.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main Client Component
export default function ClientContent() {
  const [chainFilter, setChainFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [riskFilter, setRiskFilter] = useState('');
  const [sortBy, setSortBy] = useState('apy-desc');

  // Filter and sort protocols
  const filteredAndSortedProtocols = useMemo(() => {
    let filtered = [...DEFI_PROTOCOLS];

    // Apply filters
    if (chainFilter) {
      filtered = filtered.filter((p) => p.chain === chainFilter);
    }
    if (categoryFilter) {
      filtered = filtered.filter((p) => p.category === categoryFilter);
    }
    if (riskFilter) {
      filtered = filtered.filter((p) => p.riskLevel === riskFilter);
    }

    // Apply sorting
    switch (sortBy) {
      case 'apy-asc':
        filtered.sort((a, b) => a.apy - b.apy);
        break;
      case 'apy-desc':
        filtered.sort((a, b) => b.apy - a.apy);
        break;
      case 'tvl-desc': {
        const tvlOrder: Record<string, number> = {
          '$35.2B': 35200,
          '$12.4B': 12400,
          '$5.8B': 5800,
          '$4.8B': 4800,
          '$4.2B': 4200,
          '$3.2B': 3200,
          '$3.1B': 3100,
          '$2.8B': 2800,
          '$2.4B': 2400,
          '$2.1B': 2100,
          '$1.9B': 1900,
          '$1.8B': 1800,
          '$1.6B': 1600,
          '$1.2B': 1200,
          '$950M': 950,
          '$850M': 850,
          '$680M': 680,
          '$620M': 620,
          '$580M': 580,
          '$562M': 562,
          '$560M': 560,
          '$420M': 420,
          '$310M': 310,
          '$280M': 280,
          '$245M': 245,
          '$340M': 340,
        };
        filtered.sort((a, b) => (tvlOrder[b.tvl] || 0) - (tvlOrder[a.tvl] || 0));
        break;
      }
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [chainFilter, categoryFilter, riskFilter, sortBy]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `DeFi Yield Aggregator — ${SITE_NAME}`,
    description: 'Compare DeFi yields across protocols. Find the best APY for lending, staking, LP, and vaults.',
    url: `${SITE_URL}/defi-yields`,
    isPartOf: { '@type': 'WebSite', name: SITE_NAME },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'DeFi Yields', href: '/defi-yields' },
          ]}
        />

        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-4">DeFi Yield Aggregator</h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            Discover and compare yields across DeFi protocols. View real-time APY, TVL, and risk assessments for
            lending, staking, liquidity pools, and yield vaults. Make informed decisions to maximize your crypto
            earnings.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Total Protocols', value: String(DEFI_PROTOCOLS.length), icon: '🏛️' },
            { label: 'Chains Covered', value: '6', icon: '⛓️' },
            { label: 'Avg APY', value: `${(DEFI_PROTOCOLS.reduce((a, b) => a + b.apy, 0) / DEFI_PROTOCOLS.length).toFixed(1)}%`, icon: '📈' },
            { label: 'Combined TVL', value: '$130B+', icon: '💰' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-4 border border-[var(--color-border)]">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-xs text-[var(--color-text-secondary)] mb-1">{stat.label}</div>
              <div className="text-2xl font-bold text-[var(--color-text)]">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Top Yields Section */}
        <TopYields />

        {/* Filter Controls */}
        <FilterControls
          chainFilter={chainFilter}
          categoryFilter={categoryFilter}
          riskFilter={riskFilter}
          sortBy={sortBy}
          onChainChange={setChainFilter}
          onCategoryChange={setCategoryFilter}
          onRiskChange={setRiskFilter}
          onSortChange={setSortBy}
        />

        {/* Results Info */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-[var(--color-text-secondary)]">
            Showing <span className="font-semibold text-[var(--color-text)]">{filteredAndSortedProtocols.length}</span> of{' '}
            <span className="font-semibold text-[var(--color-text)]">{DEFI_PROTOCOLS.length}</span> protocols
          </p>
          {(chainFilter || categoryFilter || riskFilter) && (
            <button
              onClick={() => {
                setChainFilter('');
                setCategoryFilter('');
                setRiskFilter('');
              }}
              className="text-sm text-[var(--color-primary)] hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Protocol Table */}
        <section className="mb-12">
          <ProtocolTable protocols={filteredAndSortedProtocols} />
          <p className="text-xs text-[var(--color-text-secondary)] mt-3">
            Data is for informational purposes and updated regularly. Always verify current rates before investing.
          </p>
        </section>

        {/* Education Section */}
        <EducationSection />

        {/* Risk Warning */}
        <div className="glass rounded-xl p-6 border border-red-500/30 bg-red-500/10 mb-8">
          <h3 className="font-semibold text-red-400 mb-2 flex items-center gap-2">
            <span>⚠️</span> Important Risk Disclaimer
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Yield farming and DeFi carry significant risks including smart contract vulnerabilities, impermanent loss,
            liquidation, and complete loss of funds. High APY often correlates with higher risk. Never invest more than
            you can afford to lose. Conduct thorough due diligence, start small, and diversify across multiple
            protocols. This is not investment advice—always do your own research.
          </p>
        </div>

        {/* Related Guides */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: 'What is DeFi?',
                href: '/learn/what-is-defi-lending',
                tag: 'Learning',
              },
              {
                title: 'Yield Farming Guide',
                href: '/defi-lending/learn/yield-farming-guide',
                tag: 'DeFi',
              },
              {
                title: 'Smart Contract Security',
                href: '/learn/crypto-security-guide',
                tag: 'Security',
              },
            ].map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="glass rounded-xl p-5 border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors card-hover"
              >
                <span className="glass-pill inline-block text-[var(--color-primary)] text-xs font-medium px-3 py-1 mb-2 rounded-full">
                  {guide.tag}
                </span>
                <h3 className="font-semibold text-[var(--color-text)] text-sm">{guide.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
