'use client';

import { useState, useMemo } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

// ── Page Title Comment ────────────────────────────────────────────────────────
// Page Title: Liquidity Pool Explorer | AMM Pools | DeFi Yield Opportunities | degen0x

// ── Types ────────────────────────────────────────────────────────────────────
interface LiquidityPool {
  id: string;
  pair: string;
  amm: 'Uniswap V3' | 'Raydium' | 'Orca' | 'Curve' | 'PancakeSwap' | 'Aerodrome';
  chain: 'Ethereum' | 'Solana' | 'Base' | 'Arbitrum' | 'BSC';
  tvl: number;
  volume24h: number;
  fees7d: number;
  apr: number;
  impermanentLoss: number;
}

interface ImpermanentLossInput {
  tokenAChange: number;
  tokenBChange: number;
}

// ── Constants ────────────────────────────────────────────────────────────────
const COLORS = {
  bg: '#0d1117',
  surface: '#161b22',
  border: '#30363d',
  text: '#e6edf3',
  textSecondary: '#8b949e',
  success: '#3fb950',
  warning: '#d29922',
  danger: '#f85149',
  info: '#58a6ff',
};

const CHAIN_COLORS: Record<string, string> = {
  Ethereum: '#627eea',
  Solana: '#14f195',
  Base: '#0052ff',
  Arbitrum: '#28a0f0',
  BSC: '#f3ba2f',
};

const MOCK_POOLS: LiquidityPool[] = [
  {
    id: '1',
    pair: 'ETH/USDC',
    amm: 'Uniswap V3',
    chain: 'Ethereum',
    tvl: 450000000,
    volume24h: 1200000000,
    fees7d: 2100000,
    apr: 12.5,
    impermanentLoss: 2.3,
  },
  {
    id: '2',
    pair: 'WBTC/ETH',
    amm: 'Uniswap V3',
    chain: 'Ethereum',
    tvl: 280000000,
    volume24h: 890000000,
    fees7d: 1680000,
    apr: 15.8,
    impermanentLoss: 3.1,
  },
  {
    id: '3',
    pair: 'USDC/USDT',
    amm: 'Curve',
    chain: 'Ethereum',
    tvl: 1200000000,
    volume24h: 2500000000,
    fees7d: 680000,
    apr: 4.2,
    impermanentLoss: 0.1,
  },
  {
    id: '4',
    pair: 'SOL/USDC',
    amm: 'Raydium',
    chain: 'Solana',
    tvl: 95000000,
    volume24h: 450000000,
    fees7d: 360000,
    apr: 18.3,
    impermanentLoss: 4.7,
  },
  {
    id: '5',
    pair: 'RAY/SOL',
    amm: 'Raydium',
    chain: 'Solana',
    tvl: 42000000,
    volume24h: 120000000,
    fees7d: 185000,
    apr: 42.1,
    impermanentLoss: 8.9,
  },
  {
    id: '6',
    pair: 'USDC/ORCA',
    amm: 'Orca',
    chain: 'Solana',
    tvl: 28000000,
    volume24h: 85000000,
    fees7d: 127000,
    apr: 22.5,
    impermanentLoss: 2.1,
  },
  {
    id: '7',
    pair: 'ETH/USDC',
    amm: 'Aerodrome',
    chain: 'Base',
    tvl: 165000000,
    volume24h: 780000000,
    fees7d: 520000,
    apr: 28.7,
    impermanentLoss: 3.4,
  },
  {
    id: '8',
    pair: 'DAI/USDC',
    amm: 'Curve',
    chain: 'Base',
    tvl: 320000000,
    volume24h: 1800000000,
    fees7d: 290000,
    apr: 6.8,
    impermanentLoss: 0.2,
  },
  {
    id: '9',
    pair: 'ARB/ETH',
    amm: 'Uniswap V3',
    chain: 'Arbitrum',
    tvl: 210000000,
    volume24h: 620000000,
    fees7d: 890000,
    apr: 17.2,
    impermanentLoss: 5.1,
  },
  {
    id: '10',
    pair: 'USDC/USDT',
    amm: 'Curve',
    chain: 'Arbitrum',
    tvl: 580000000,
    volume24h: 3200000000,
    fees7d: 520000,
    apr: 5.3,
    impermanentLoss: 0.15,
  },
  {
    id: '11',
    pair: 'BNB/BUSD',
    amm: 'PancakeSwap',
    chain: 'BSC',
    tvl: 380000000,
    volume24h: 2100000000,
    fees7d: 1540000,
    apr: 9.4,
    impermanentLoss: 2.8,
  },
  {
    id: '12',
    pair: 'CAKE/BNB',
    amm: 'PancakeSwap',
    chain: 'BSC',
    tvl: 124000000,
    volume24h: 580000000,
    fees7d: 620000,
    apr: 31.5,
    impermanentLoss: 6.2,
  },
  {
    id: '13',
    pair: 'ETH/USDC',
    amm: 'Uniswap V3',
    chain: 'Arbitrum',
    tvl: 185000000,
    volume24h: 520000000,
    fees7d: 745000,
    apr: 16.9,
    impermanentLoss: 3.7,
  },
  {
    id: '14',
    pair: 'LINK/ETH',
    amm: 'Uniswap V3',
    chain: 'Ethereum',
    tvl: 92000000,
    volume24h: 280000000,
    fees7d: 412000,
    apr: 19.8,
    impermanentLoss: 4.3,
  },
  {
    id: '15',
    pair: 'MATIC/ETH',
    amm: 'Uniswap V3',
    chain: 'Ethereum',
    tvl: 68000000,
    volume24h: 210000000,
    fees7d: 298000,
    apr: 21.4,
    impermanentLoss: 5.6,
  },
  {
    id: '16',
    pair: 'FRAX/USDC',
    amm: 'Curve',
    chain: 'Ethereum',
    tvl: 450000000,
    volume24h: 1100000000,
    fees7d: 380000,
    apr: 5.9,
    impermanentLoss: 0.3,
  },
  {
    id: '17',
    pair: 'cbETH/ETH',
    amm: 'Curve',
    chain: 'Ethereum',
    tvl: 620000000,
    volume24h: 850000000,
    fees7d: 290000,
    apr: 3.8,
    impermanentLoss: 0.05,
  },
  {
    id: '18',
    pair: 'LIDO/ETH',
    amm: 'Uniswap V3',
    chain: 'Ethereum',
    tvl: 165000000,
    volume24h: 390000000,
    fees7d: 518000,
    apr: 14.2,
    impermanentLoss: 2.9,
  },
  {
    id: '19',
    pair: 'AERO/ETH',
    amm: 'Aerodrome',
    chain: 'Base',
    tvl: 78000000,
    volume24h: 320000000,
    fees7d: 285000,
    apr: 35.8,
    impermanentLoss: 7.1,
  },
  {
    id: '20',
    pair: 'GMX/ETH',
    amm: 'Uniswap V3',
    chain: 'Arbitrum',
    tvl: 105000000,
    volume24h: 180000000,
    fees7d: 385000,
    apr: 24.6,
    impermanentLoss: 6.8,
  },
];

// ── Utility Functions ────────────────────────────────────────────────────────
function formatCurrency(value: number): string {
  if (value >= 1000000000) return `$${(value / 1000000000).toFixed(2)}B`;
  if (value >= 1000000) return `$${(value / 1000000).toFixed(2)}M`;
  if (value >= 1000) return `$${(value / 1000).toFixed(2)}K`;
  return `$${value.toFixed(2)}`;
}

function getAPRColor(apr: number): string {
  if (apr >= 20) return COLORS.success;
  if (apr >= 10) return COLORS.warning;
  return COLORS.danger;
}

function calculateImpermanentLoss(priceChangeA: number, priceChangeB: number): number {
  const ratio = (1 + priceChangeA / 100) / (1 + priceChangeB / 100);
  const il = (2 * Math.sqrt(ratio) - (1 + ratio)) / (1 + ratio);
  return il * 100;
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function LiquidityPoolExplorerPage() {
  const [selectedChain, setSelectedChain] = useState<string>('All');
  const [selectedAMM, setSelectedAMM] = useState<string>('All');
  const [minTVL, setMinTVL] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>('tvl');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [ilInput, setIlInput] = useState<ImpermanentLossInput>({
    tokenAChange: 0,
    tokenBChange: 0,
  });

  const chains = ['All', ...new Set(MOCK_POOLS.map((p) => p.chain))];
  const amms = ['All', ...new Set(MOCK_POOLS.map((p) => p.amm))];

  const filteredPools = useMemo(() => {
    return MOCK_POOLS.filter((pool) => {
      const chainMatch = selectedChain === 'All' || pool.chain === selectedChain;
      const ammMatch = selectedAMM === 'All' || pool.amm === selectedAMM;
      const tvlMatch = pool.tvl >= minTVL;
      const searchMatch =
        searchQuery === '' ||
        pool.pair.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pool.amm.toLowerCase().includes(searchQuery.toLowerCase());
      return chainMatch && ammMatch && tvlMatch && searchMatch;
    }).sort((a, b) => {
      switch (sortBy) {
        case 'tvl':
          return b.tvl - a.tvl;
        case 'apr':
          return b.apr - a.apr;
        case 'volume':
          return b.volume24h - a.volume24h;
        case 'fees':
          return b.fees7d - a.fees7d;
        default:
          return 0;
      }
    });
  }, [selectedChain, selectedAMM, minTVL, searchQuery, sortBy]);

  const ilResult = useMemo(() => {
    return calculateImpermanentLoss(ilInput.tokenAChange, ilInput.tokenBChange);
  }, [ilInput]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/tools' },
          { label: 'Liquidity Pool Explorer', href: '/tools/liquidity-pool-explorer' },
        ]}
      />

      {/* ──────────────── Hero Section ──────────────── */}
      <div className="space-y-4">
        <div>
          <h1 className="text-5xl font-bold text-[var(--color-text)] mb-4">
            Liquidity Pool Explorer
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-4xl leading-relaxed">
            Discover and analyze liquidity pools across top AMMs. Compare TVL, APR, fees, and
            estimated impermanent loss across Ethereum, Solana, Base, Arbitrum, and BSC.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mt-8">
          {[
            { label: 'Total Pools', value: MOCK_POOLS.length.toString(), icon: '🏊' },
            { label: 'Supported AMMs', value: '6', icon: '🔄' },
            { label: 'Blockchains', value: '5', icon: '⛓️' },
            { label: 'Combined TVL', value: '$5.8B+', icon: '💰' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-sm text-[var(--color-text-secondary)]">{stat.label}</div>
              <div className="text-lg font-bold text-[var(--color-text)]">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ──────────────── Pool Explorer Section ──────────────── */}
      <section className="space-y-4">
        <div>
          <h2 className="text-3xl font-bold text-[var(--color-text)] mb-2">
            Interactive Pool Explorer
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Filter pools by chain, AMM, TVL, and search by pair. View in grid or table format.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search by pool pair or AMM (e.g., ETH/USDC, Uniswap)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-3 bg-[#161b22] border border-[#30363d] rounded-lg text-[var(--color-text)] placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff]"
          />
        </div>

        {/* Filters Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {/* Chain Filter */}
          <div>
            <label className="text-sm text-[var(--color-text-secondary)] block mb-2">
              Chain
            </label>
            <select
              value={selectedChain}
              onChange={(e) => setSelectedChain(e.target.value)}
              className="w-full px-3 py-2 bg-[#161b22] border border-[#30363d] rounded text-[var(--color-text)] text-sm focus:outline-none focus:border-[#58a6ff]"
            >
              {chains.map((chain) => (
                <option key={chain} value={chain}>
                  {chain}
                </option>
              ))}
            </select>
          </div>

          {/* AMM Filter */}
          <div>
            <label className="text-sm text-[var(--color-text-secondary)] block mb-2">
              AMM
            </label>
            <select
              value={selectedAMM}
              onChange={(e) => setSelectedAMM(e.target.value)}
              className="w-full px-3 py-2 bg-[#161b22] border border-[#30363d] rounded text-[var(--color-text)] text-sm focus:outline-none focus:border-[#58a6ff]"
            >
              {amms.map((amm) => (
                <option key={amm} value={amm}>
                  {amm}
                </option>
              ))}
            </select>
          </div>

          {/* Min TVL Filter */}
          <div>
            <label className="text-sm text-[var(--color-text-secondary)] block mb-2">
              Min TVL (M)
            </label>
            <input
              type="number"
              min="0"
              step="10"
              value={minTVL / 1000000}
              onChange={(e) => setMinTVL(parseInt(e.target.value || '0') * 1000000)}
              className="w-full px-3 py-2 bg-[#161b22] border border-[#30363d] rounded text-[var(--color-text)] text-sm focus:outline-none focus:border-[#58a6ff]"
            />
          </div>

          {/* Sort Filter */}
          <div>
            <label className="text-sm text-[var(--color-text-secondary)] block mb-2">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 bg-[#161b22] border border-[#30363d] rounded text-[var(--color-text)] text-sm focus:outline-none focus:border-[#58a6ff]"
            >
              <option value="tvl">TVL (High)</option>
              <option value="apr">APR (High)</option>
              <option value="volume">Volume (High)</option>
              <option value="fees">Fees (High)</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div>
            <label className="text-sm text-[var(--color-text-secondary)] block mb-2">
              View
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex-1 px-3 py-2 rounded text-sm font-medium transition ${
                  viewMode === 'grid'
                    ? 'bg-[#58a6ff] text-[#0d1117]'
                    : 'bg-[#161b22] border border-[#30363d] text-[var(--color-text)] hover:border-[#58a6ff]'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`flex-1 px-3 py-2 rounded text-sm font-medium transition ${
                  viewMode === 'table'
                    ? 'bg-[#58a6ff] text-[#0d1117]'
                    : 'bg-[#161b22] border border-[#30363d] text-[var(--color-text)] hover:border-[#58a6ff]'
                }`}
              >
                Table
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-sm text-[var(--color-text-secondary)]">
          Found {filteredPools.length} pool{filteredPools.length !== 1 ? 's' : ''}
        </div>

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPools.map((pool) => (
              <div
                key={pool.id}
                className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 hover:border-[#58a6ff] transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-text)]">{pool.pair}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">{pool.amm}</p>
                  </div>
                  <div
                    className="px-3 py-1 rounded-full text-xs font-medium text-white"
                    style={{ backgroundColor: CHAIN_COLORS[pool.chain] || '#58a6ff' }}
                  >
                    {pool.chain}
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[var(--color-text-secondary)]">TVL</span>
                      <span className="font-semibold text-[var(--color-text)]">
                        {formatCurrency(pool.tvl)}
                      </span>
                    </div>
                    <div className="w-full bg-[#0d1117] rounded h-2">
                      <div
                        className="bg-[#58a6ff] h-2 rounded"
                        style={{ width: `${Math.min((pool.tvl / 1200000000) * 100, 100)}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-[var(--color-text-secondary)] mb-1">24h Vol</p>
                      <p className="font-semibold text-[var(--color-text)]">
                        {formatCurrency(pool.volume24h)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-text-secondary)] mb-1">7d Fees</p>
                      <p className="font-semibold text-[var(--color-text)]">
                        {formatCurrency(pool.fees7d)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#30363d]">
                    <div>
                      <p className="text-xs text-[var(--color-text-secondary)] mb-1">APR</p>
                      <p
                        className="font-bold text-lg"
                        style={{ color: getAPRColor(pool.apr) }}
                      >
                        {pool.apr.toFixed(1)}%
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-text-secondary)] mb-1">Est. IL</p>
                      <p className="font-semibold text-[#f85149]">{pool.impermanentLoss.toFixed(1)}%</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Table View */}
        {viewMode === 'table' && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#30363d]">
                  <th className="text-left py-3 px-4 text-[var(--color-text-secondary)] font-semibold">
                    Pool
                  </th>
                  <th className="text-left py-3 px-4 text-[var(--color-text-secondary)] font-semibold">
                    AMM
                  </th>
                  <th className="text-left py-3 px-4 text-[var(--color-text-secondary)] font-semibold">
                    Chain
                  </th>
                  <th className="text-right py-3 px-4 text-[var(--color-text-secondary)] font-semibold">
                    TVL
                  </th>
                  <th className="text-right py-3 px-4 text-[var(--color-text-secondary)] font-semibold">
                    24h Vol
                  </th>
                  <th className="text-right py-3 px-4 text-[var(--color-text-secondary)] font-semibold">
                    7d Fees
                  </th>
                  <th className="text-right py-3 px-4 text-[var(--color-text-secondary)] font-semibold">
                    APR
                  </th>
                  <th className="text-right py-3 px-4 text-[var(--color-text-secondary)] font-semibold">
                    Est. IL
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredPools.map((pool) => (
                  <tr
                    key={pool.id}
                    className="border-b border-[#30363d] hover:bg-[#161b22] transition"
                  >
                    <td className="py-3 px-4 text-[var(--color-text)] font-medium">{pool.pair}</td>
                    <td className="py-3 px-4 text-[var(--color-text-secondary)]">{pool.amm}</td>
                    <td className="py-3 px-4">
                      <span
                        className="px-2 py-1 rounded text-xs font-medium text-white"
                        style={{ backgroundColor: CHAIN_COLORS[pool.chain] || '#58a6ff' }}
                      >
                        {pool.chain}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right text-[var(--color-text)] font-medium">
                      {formatCurrency(pool.tvl)}
                    </td>
                    <td className="py-3 px-4 text-right text-[var(--color-text)] font-medium">
                      {formatCurrency(pool.volume24h)}
                    </td>
                    <td className="py-3 px-4 text-right text-[var(--color-text)] font-medium">
                      {formatCurrency(pool.fees7d)}
                    </td>
                    <td
                      className="py-3 px-4 text-right font-bold text-lg"
                      style={{ color: getAPRColor(pool.apr) }}
                    >
                      {pool.apr.toFixed(1)}%
                    </td>
                    <td className="py-3 px-4 text-right font-semibold text-[#f85149]">
                      {pool.impermanentLoss.toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {filteredPools.length === 0 && (
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-8 text-center">
            <p className="text-[var(--color-text-secondary)]">
              No pools found matching your filters. Try adjusting your search criteria.
            </p>
          </div>
        )}
      </section>

      {/* ──────────────── Impermanent Loss Calculator ──────────────── */}
      <section className="space-y-4">
        <div>
          <h2 className="text-3xl font-bold text-[var(--color-text)] mb-2">
            Impermanent Loss Calculator
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Estimate potential impermanent loss based on token price changes. Enter the percentage
            change for each token to see the impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="text-lg font-bold text-[var(--color-text)] mb-6">Price Change Input</h3>

            <div className="space-y-5">
              <div>
                <label className="text-sm text-[var(--color-text-secondary)] block mb-2">
                  Token A Price Change (%)
                </label>
                <input
                  type="number"
                  value={ilInput.tokenAChange}
                  onChange={(e) =>
                    setIlInput({
                      ...ilInput,
                      tokenAChange: parseFloat(e.target.value) || 0,
                    })
                  }
                  className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded text-[var(--color-text)] focus:outline-none focus:border-[#58a6ff]"
                  placeholder="e.g., 50 for +50%"
                />
                <p className="text-xs text-[var(--color-text-secondary)] mt-2">
                  Current value: {ilInput.tokenAChange.toFixed(1)}%
                </p>
              </div>

              <div>
                <label className="text-sm text-[var(--color-text-secondary)] block mb-2">
                  Token B Price Change (%)
                </label>
                <input
                  type="number"
                  value={ilInput.tokenBChange}
                  onChange={(e) =>
                    setIlInput({
                      ...ilInput,
                      tokenBChange: parseFloat(e.target.value) || 0,
                    })
                  }
                  className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded text-[var(--color-text)] focus:outline-none focus:border-[#58a6ff]"
                  placeholder="e.g., 20 for +20%"
                />
                <p className="text-xs text-[var(--color-text-secondary)] mt-2">
                  Current value: {ilInput.tokenBChange.toFixed(1)}%
                </p>
              </div>
            </div>
          </div>

          {/* Result Section */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="text-lg font-bold text-[var(--color-text)] mb-6">Estimated IL Result</h3>

            <div className="space-y-6">
              <div className="bg-[#0d1117] rounded-lg p-5 border border-[#30363d]">
                <p className="text-[var(--color-text-secondary)] text-sm mb-3">Impermanent Loss</p>
                <p
                  className="text-5xl font-bold"
                  style={{
                    color:
                      ilResult > 0
                        ? COLORS.danger
                        : ilResult < -0.1
                          ? COLORS.success
                          : COLORS.text,
                  }}
                >
                  {ilResult.toFixed(2)}%
                </p>
                {ilResult > 0 && (
                  <p className="text-sm text-[#f85149] mt-2">
                    You would lose {ilResult.toFixed(2)}% of your LP value
                  </p>
                )}
                {ilResult < -0.1 && (
                  <p className="text-sm text-[#3fb950] mt-2">
                    Favorable conditions - IL is minimal
                  </p>
                )}
              </div>

              {/* IL Indicator */}
              <div>
                <p className="text-xs text-[var(--color-text-secondary)] mb-2">IL Risk Level</p>
                <div className="flex gap-2 items-center">
                  <div className="flex-1 bg-[#0d1117] rounded h-2 overflow-hidden">
                    <div
                      className={`h-full transition-all ${
                        ilResult < 5
                          ? 'bg-[#3fb950]'
                          : ilResult < 10
                            ? 'bg-[#d29922]'
                            : 'bg-[#f85149]'
                      }`}
                      style={{ width: `${Math.min(Math.abs(ilResult), 100)}%` }}
                    />
                  </div>
                  <span className="text-xs text-[var(--color-text-secondary)]">
                    {ilResult < 5 ? 'Low' : ilResult < 10 ? 'Medium' : 'High'}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="bg-[#0d1117] border border-[#30363d] rounded p-3">
                <p className="text-xs text-[var(--color-text-secondary)]">
                  <strong>Note:</strong> Impermanent loss occurs when token prices diverge
                  significantly. Fees earned may offset this loss.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── What is Impermanent Loss ──────────────── */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-6">
          What is Impermanent Loss?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Definition',
              icon: '📚',
              content:
                'Impermanent loss is the unrealized loss when providing liquidity in an AMM. It occurs when the price ratio of your pooled tokens changes from the entry price, causing your portfolio to be worth less than if you held the tokens separately.',
            },
            {
              title: 'When It Happens',
              icon: '📊',
              content:
                'IL increases when there is significant price divergence between the two tokens. The larger the price change, the greater the loss. A 10% divergence results in ~0.5% IL, while a 100% divergence results in ~25% IL.',
            },
            {
              title: 'Fee Offset',
              icon: '💰',
              content:
                'Liquidity providers earn trading fees proportional to the volume in their pool. These fees can offset or exceed impermanent losses, especially in high-volume pools. Total returns = Fees Earned - Impermanent Loss.',
            },
            {
              title: 'Risk Mitigation',
              icon: '🛡️',
              content:
                'To reduce IL risk: (1) Choose pairs with low volatility correlation, (2) Provide liquidity in stablecoin pairs, (3) Use concentrated liquidity ranges (Uniswap V3), or (4) Focus on high-fee pools.',
            },
          ].map((item, i) => (
            <div key={i} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="text-lg font-bold text-[var(--color-text)]">{item.title}</h3>
              </div>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ──────────────── Key Metrics ──────────────── */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-6">Key Pool Metrics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              metric: 'TVL',
              full: 'Total Value Locked',
              desc: 'Total value of liquidity in the pool',
              icon: '💰',
            },
            {
              metric: '24h Volume',
              full: 'Trading Volume',
              desc: 'Total value of trades in past 24 hours',
              icon: '📈',
            },
            {
              metric: '7d Fees',
              full: 'Fee Revenue',
              desc: 'Total fees collected over 7 days',
              icon: '💸',
            },
            {
              metric: 'APR',
              full: 'Annual Percentage Return',
              desc: 'Estimated annual return from fees',
              icon: '📊',
            },
          ].map((item, i) => (
            <div key={i} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h4 className="font-bold text-[var(--color-text)] text-sm mb-1">{item.metric}</h4>
              <p className="text-xs text-[#58a6ff] mb-2">{item.full}</p>
              <p className="text-xs text-[var(--color-text-secondary)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ──────────────── Best Practices ──────────────── */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-6">
          Liquidity Providing Best Practices
        </h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Due Diligence',
                icon: '🔍',
                tips: [
                  'Research the AMM protocol and its security audits',
                  'Check pool trading volume and fee tiers',
                  'Verify smart contract code for vulnerabilities',
                  'Monitor pool metrics over time',
                  'Start with small amounts to test',
                ],
              },
              {
                title: 'Risk Management',
                icon: '🛡️',
                tips: [
                  'Diversify across multiple pools and chains',
                  'Avoid volatile token pairs if new to LP',
                  'Use stable pairs (stablecoins) for consistent yields',
                  'Monitor your position regularly',
                  'Withdraw early if IL gets too high',
                ],
              },
              {
                title: 'Yield Optimization',
                icon: '💡',
                tips: [
                  'Compare APR across different pools',
                  'Factor in gas fees and impermanent loss',
                  'Consider incentive programs and boosters',
                  'Rebalance positions periodically',
                  'Track fee accrual vs. impermanent loss',
                ],
              },
              {
                title: 'Technical Tips',
                icon: '⚙️',
                tips: [
                  'Use price limit orders to avoid bad fills',
                  'Time entries/exits during low slippage periods',
                  'Monitor gas prices before transacting',
                  'Use concentrated liquidity for capital efficiency',
                  'Enable slippage protection mechanisms',
                ],
              },
            ].map((section, i) => (
              <div key={i} className="border border-[#30363d] rounded-lg p-4">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{section.icon}</span>
                  <h4 className="text-lg font-bold text-[var(--color-text)]">{section.title}</h4>
                </div>
                <ul className="space-y-2">
                  {section.tips.map((tip, j) => (
                    <li key={j} className="flex gap-2 text-sm text-[var(--color-text-secondary)]">
                      <span className="text-[#58a6ff] flex-shrink-0">→</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── Disclaimers ──────────────── */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 space-y-4">
        <h3 className="font-bold text-[var(--color-text)] text-lg flex items-center gap-2">
          <span>⚠️</span> Important Disclaimers
        </h3>
        <ul className="text-sm text-[var(--color-text-secondary)] space-y-3 list-disc list-inside">
          <li>
            <strong className="text-[var(--color-text)]">Mock Data:</strong> All pool data is
            simulated for educational purposes and does not reflect real market conditions.
          </li>
          <li>
            <strong className="text-[var(--color-text)]">Not Investment Advice:</strong> This tool
            is informational only. Always conduct your own research before providing liquidity.
          </li>
          <li>
            <strong className="text-[var(--color-text)]">Smart Contract Risk:</strong> All DeFi
            protocols carry smart contract risk. Only deposit funds you can afford to lose.
          </li>
          <li>
            <strong className="text-[var(--color-text)]">Impermanent Loss:</strong> IL can reduce
            your position value significantly. Fees may or may not offset losses.
          </li>
          <li>
            <strong className="text-[var(--color-text)]">Market Volatility:</strong> APR and fees
            fluctuate with market conditions. Historical performance is not indicative of future
            results.
          </li>
        </ul>
      </div>
    </div>
  );
}
