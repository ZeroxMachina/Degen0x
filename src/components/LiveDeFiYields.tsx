'use client';

/**
 * Live DeFi Yields Component
 * Displays real-time DeFi yields from DeFiLlama with filtering and sorting
 */

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { DeFiYield, SUPPORTED_CHAINS, formatTvl, getRiskLevel } from '@/lib/defillama';

// ── Types ──────────────────────────────────────────────────────────────────

interface FilterState {
  chain: string; // empty string for "All"
  category: 'all' | 'stablecoin' | 'lp';
  sortBy: 'apy' | 'tvl';
  minApy: number;
}

interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

// ── Constants ──────────────────────────────────────────────────────────────

const CHAIN_COLORS: Record<string, string> = {
  'Ethereum': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'Solana': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Arbitrum': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Polygon': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  'Optimism': 'bg-red-500/20 text-red-400 border-red-500/30',
  'Avalanche': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  'Base': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  'Linea': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
};

const RISK_COLORS: Record<'Low' | 'Medium' | 'High', string> = {
  'Low': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Medium': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'High': 'bg-red-500/20 text-red-400 border-red-500/30',
};

const RISK_DOTS: Record<'Low' | 'Medium' | 'High', string> = {
  'Low': 'bg-green-400',
  'Medium': 'bg-yellow-400',
  'High': 'bg-red-400',
};

// ── Utility Functions ──────────────────────────────────────────────────────

/**
 * Classify yield category based on pool characteristics
 */
function classifyCategory(yield_: DeFiYield): 'stablecoin' | 'lp' | 'other' {
  if (yield_.stablecoin) return 'stablecoin';
  if (
    yield_.symbol.includes('/') ||
    yield_.ilRisk !== 'N/A' ||
    yield_.exposure !== 'N/A'
  ) {
    return 'lp';
  }
  return 'other';
}

/**
 * Get chain color class
 */
function getChainColorClass(chain: string): string {
  return CHAIN_COLORS[chain] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
}

/**
 * Get risk color class
 */
function getRiskColorClass(risk: 'Low' | 'Medium' | 'High'): string {
  return RISK_COLORS[risk];
}

/**
 * Get risk dot color class
 */
function getRiskDotClass(risk: 'Low' | 'Medium' | 'High'): string {
  return RISK_DOTS[risk];
}

// ── Loading Skeleton Component ─────────────────────────────────────────────

function YieldsSkeleton(): React.ReactElement {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="glass rounded-lg p-4 border border-[var(--glass-border)] animate-pulse"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="h-4 bg-[var(--glass-bg)] rounded w-32 mb-2" />
              <div className="h-3 bg-[var(--glass-bg)] rounded w-24" />
            </div>
            <div className="h-4 bg-[var(--glass-bg)] rounded w-16" />
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Filter Controls Component ──────────────────────────────────────────────

interface FilterControlsProps {
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
}

function FilterControls({ filters, onFilterChange }: FilterControlsProps): React.ReactElement {
  const chainOptions = Array.from(SUPPORTED_CHAINS).sort();

  return (
    <div className="glass rounded-xl p-6 border border-[var(--glass-border)] mb-6">
      <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">
        Filters & Sort
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Chain Filter */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
            Chain
          </label>
          <select
            value={filters.chain}
            onChange={(e) =>
              onFilterChange({ chain: e.target.value })
            }
            className="w-full px-3 py-2 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--color-text)] text-sm focus:outline-none focus:border-blue-500 transition-colors"
          >
            <option value="">All Chains</option>
            {chainOptions.map((chain) => (
              <option key={chain} value={chain}>
                {chain}
              </option>
            ))}
          </select>
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) =>
              onFilterChange({ category: e.target.value as FilterState['category'] })
            }
            className="w-full px-3 py-2 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--color-text)] text-sm focus:outline-none focus:border-blue-500 transition-colors"
          >
            <option value="all">All Categories</option>
            <option value="stablecoin">Stablecoin</option>
            <option value="lp">LP / Liquidity</option>
          </select>
        </div>

        {/* Minimum APY Filter */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
            Min APY (%)
          </label>
          <input
            type="number"
            min="0"
            max="100"
            step="0.5"
            value={filters.minApy}
            onChange={(e) =>
              onFilterChange({ minApy: Math.max(0, parseFloat(e.target.value) || 0) })
            }
            className="w-full px-3 py-2 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--color-text)] text-sm focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Sort Options */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
            Sort By
          </label>
          <select
            value={filters.sortBy}
            onChange={(e) =>
              onFilterChange({ sortBy: e.target.value as 'apy' | 'tvl' })
            }
            className="w-full px-3 py-2 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--color-text)] text-sm focus:outline-none focus:border-blue-500 transition-colors"
          >
            <option value="apy">APY (High to Low)</option>
            <option value="tvl">TVL (High to Low)</option>
          </select>
        </div>
      </div>
    </div>
  );
}

// ── Yields Table Component ─────────────────────────────────────────────────

interface YieldsTableProps {
  yields: DeFiYield[];
}

function YieldsTable({ yields }: YieldsTableProps): React.ReactElement {
  if (yields.length === 0) {
    return (
      <div className="glass rounded-xl p-12 text-center border border-[var(--glass-border)]">
        <p className="text-[var(--color-text-secondary)]">
          No yields match your filters. Try adjusting your criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-[var(--glass-border)]">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[var(--glass-bg)] border-b border-[var(--glass-border)]">
            <th className="text-left px-4 py-3 text-[var(--color-text-secondary)] font-semibold">
              Protocol
            </th>
            <th className="text-left px-4 py-3 text-[var(--color-text-secondary)] font-semibold hidden sm:table-cell">
              Chain
            </th>
            <th className="text-left px-4 py-3 text-[var(--color-text-secondary)] font-semibold hidden md:table-cell">
              Asset
            </th>
            <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold">
              APY
            </th>
            <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold hidden lg:table-cell">
              TVL
            </th>
            <th className="text-center px-4 py-3 text-[var(--color-text-secondary)] font-semibold">
              Risk
            </th>
          </tr>
        </thead>
        <tbody>
          {yields.map((yield_) => {
            const risk = getRiskLevel(yield_.apy);
            const category = classifyCategory(yield_);

            return (
              <tr
                key={yield_.pool}
                className="border-b border-[var(--glass-border)] hover:bg-[var(--glass-bg)] transition-colors"
              >
                {/* Protocol Name */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs font-bold text-white shrink-0">
                      {yield_.project.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--color-text)]">
                        {yield_.project}
                      </p>
                      <p className="text-xs text-[var(--color-text-secondary)]">
                        {yield_.pool}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Chain */}
                <td className="px-4 py-3 hidden sm:table-cell">
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium border ${getChainColorClass(
                      yield_.chain,
                    )}`}
                  >
                    {yield_.chain}
                  </span>
                </td>

                {/* Asset */}
                <td className="px-4 py-3 hidden md:table-cell text-[var(--color-text-secondary)]">
                  <span className="text-sm font-medium">{yield_.symbol}</span>
                  {category !== 'other' && (
                    <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                      {category === 'stablecoin' ? 'Stablecoin' : 'LP'}
                    </p>
                  )}
                </td>

                {/* APY */}
                <td className="px-4 py-3 text-right">
                  <span className="font-bold text-lg text-green-400">
                    {yield_.apy.toFixed(2)}%
                  </span>
                  {yield_.apyBase > 0 && (
                    <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                      Base: {yield_.apyBase.toFixed(2)}%
                    </p>
                  )}
                </td>

                {/* TVL */}
                <td className="px-4 py-3 text-right hidden lg:table-cell text-[var(--color-text)]">
                  <span className="font-medium">{formatTvl(yield_.tvlUsd)}</span>
                </td>

                {/* Risk */}
                <td className="px-4 py-3 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${getRiskDotClass(risk)}`} />
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded border ${getRiskColorClass(
                        risk,
                      )}`}
                    >
                      {risk}
                    </span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────

export default function LiveDeFiYields(): React.ReactElement {
  const [yields, setYields] = useState<DeFiYield[]>([]);
  const [loading, setLoading] = useState<LoadingState>({
    isLoading: true,
    error: null,
  });
  const [filters, setFilters] = useState<FilterState>({
    chain: '',
    category: 'all',
    sortBy: 'apy',
    minApy: 0,
  });

  // Fetch yields data
  useEffect(() => {
    const fetchYields = async (): Promise<void> => {
      try {
        setLoading({ isLoading: true, error: null });

        const params = new URLSearchParams();
        if (filters.chain) {
          params.append('chain', filters.chain);
        }
        params.append('sort', filters.sortBy);
        params.append('limit', '100');
        params.append('stableOnly', filters.category === 'stablecoin' ? 'true' : 'false');
        params.append('minApy', filters.minApy.toString());

        const response = await fetch(`/api/defi-yields?${params.toString()}`);

        if (!response.ok) {
          throw new Error(`API returned status ${response.status}`);
        }

        const data = await response.json();

        if (!data.success || !data.data) {
          throw new Error(data.error || 'Failed to fetch yields');
        }

        // Filter by category after fetching
        let filteredYields = data.data;
        if (filters.category === 'lp') {
          filteredYields = filteredYields.filter(
            (y: DeFiYield) => classifyCategory(y) === 'lp',
          );
        }

        setYields(filteredYields);
        setLoading({ isLoading: false, error: null });
      } catch (error) {
        console.error('Error fetching yields:', error);
        setLoading({
          isLoading: false,
          error:
            error instanceof Error
              ? error.message
              : 'Failed to fetch DeFi yields',
        });
      }
    };

    fetchYields();
  }, [filters]);

  // Handle filter changes
  const handleFilterChange = useCallback((newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  }, []);

  // Memoize filtered yields
  const filteredYields = useMemo(() => {
    return yields;
  }, [yields]);

  return (
    <div className="w-full">
      {/* Filter Controls */}
      <FilterControls filters={filters} onFilterChange={handleFilterChange} />

      {/* Loading State */}
      {loading.isLoading && <YieldsSkeleton />}

      {/* Error State */}
      {loading.error && !loading.isLoading && (
        <div className="glass rounded-xl p-6 border border-red-500/30 bg-red-500/10">
          <h3 className="font-semibold text-red-400 mb-2">Error</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">{loading.error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg text-sm font-medium transition-colors"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Results */}
      {!loading.isLoading && !loading.error && (
        <>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-[var(--color-text-secondary)]">
              Showing{' '}
              <span className="font-semibold text-[var(--color-text)]">
                {filteredYields.length}
              </span>{' '}
              yields
              {filters.chain && (
                <>
                  {' '}
                  on <span className="font-semibold">{filters.chain}</span>
                </>
              )}
            </p>
            {(filters.chain || filters.category !== 'all' || filters.minApy > 0) && (
              <button
                onClick={() =>
                  setFilters({
                    chain: '',
                    category: 'all',
                    sortBy: 'apy',
                    minApy: 0,
                  })
                }
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>

          <YieldsTable yields={filteredYields} />

          {/* Data Disclaimer */}
          <p className="text-xs text-[var(--color-text-secondary)] mt-4">
            Data is sourced from DeFiLlama and updated in real-time. Always verify current rates and conduct
            thorough due diligence before investing in DeFi protocols.
          </p>
        </>
      )}
    </div>
  );
}
