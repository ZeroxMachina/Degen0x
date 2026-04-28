/**
 * DeFiLlama API Integration Layer
 * Provides type-safe access to DeFiLlama's yields API
 * with caching, error handling, and timeout protection
 */

import { cachedFetchJSON } from './api-helpers';

// ── Types ──────────────────────────────────────────────────────────────────

/**
 * Standardized DeFi yield type for internal use
 */
export interface DeFiYield {
  pool: string;
  chain: string;
  project: string;
  symbol: string;
  tvlUsd: number;
  apy: number;
  apyBase: number;
  apyReward: number;
  rewardTokens: string[];
  stablecoin: boolean;
  ilRisk: string;
  exposure: string;
  predictedClass: string | null;
  poolMeta: string | null;
}

/**
 * Raw DeFiLlama API response
 */
interface DeFiLlamaPool {
  pool: string;
  chain: string;
  project: string;
  symbol: string;
  tvlUsd: number;
  apy?: number;
  apyBase?: number;
  apyReward?: number;
  rewardTokens?: string[];
  stablecoin?: boolean;
  ilRisk?: string;
  exposure?: string;
  predictions?: {
    predictedClass?: string;
    binnedConfidence?: number;
  };
  poolMeta?: string;
}

interface DeFiLlamaResponse {
  data: DeFiLlamaPool[];
}

// ── Constants ──────────────────────────────────────────────────────────────

const DEFILLAMA_API_URL = 'https://yields.llama.fi/pools';

/**
 * Well-known, established DeFi protocols to filter for
 */
export const KNOWN_PROTOCOLS = new Set([
  'aave-v3',
  'compound-v3',
  'lido',
  'rocket-pool',
  'curve-dex',
  'uniswap-v3',
  'yearn-finance',
  'convex-finance',
  'gmx',
  'morpho',
  'maker',
  'spark',
  'jupiter',
  'marinade-finance',
  'raydium',
  'orca',
  'kamino-lend',
]);

/**
 * Supported chains for filtering
 */
export const SUPPORTED_CHAINS = new Set([
  'Ethereum',
  'Arbitrum',
  'Solana',
  'Polygon',
  'Optimism',
  'Avalanche',
  'Base',
  'Linea',
  'Scroll',
  'zkSync',
  'Mantle',
]);

// ── Utilities ──────────────────────────────────────────────────────────────

/**
 * Normalize chain names for consistent comparison
 */
function normalizeChain(chain: string): string {
  const chainMap: Record<string, string> = {
    'ethereum': 'Ethereum',
    'eth': 'Ethereum',
    'arbitrum': 'Arbitrum',
    'arb': 'Arbitrum',
    'solana': 'Solana',
    'sol': 'Solana',
    'polygon': 'Polygon',
    'matic': 'Polygon',
    'optimism': 'Optimism',
    'op': 'Optimism',
    'avalanche': 'Avalanche',
    'avax': 'Avalanche',
    'base': 'Base',
    'linea': 'Linea',
    'scroll': 'Scroll',
    'zksync': 'zkSync',
    'mantle': 'Mantle',
  };

  const normalized = chainMap[chain.toLowerCase()];
  return normalized || chain;
}

/**
 * Transform raw DeFiLlama pool data to standardized DeFiYield type
 */
function transformPool(pool: DeFiLlamaPool): DeFiYield {
  return {
    pool: pool.pool || '',
    chain: normalizeChain(pool.chain),
    project: pool.project || '',
    symbol: pool.symbol || '',
    tvlUsd: pool.tvlUsd || 0,
    apy: pool.apy ?? 0,
    apyBase: pool.apyBase ?? 0,
    apyReward: pool.apyReward ?? 0,
    rewardTokens: pool.rewardTokens ?? [],
    stablecoin: pool.stablecoin ?? false,
    ilRisk: pool.ilRisk ?? 'N/A',
    exposure: pool.exposure ?? 'N/A',
    predictedClass: pool.predictions?.predictedClass ?? null,
    poolMeta: pool.poolMeta ?? null,
  };
}

/**
 * Filter pools by well-known protocols
 */
function filterKnownProtocols(pools: DeFiLlamaPool[]): DeFiLlamaPool[] {
  return pools.filter((pool) => KNOWN_PROTOCOLS.has(pool.project));
}

/**
 * Filter pools by stablecoin designation
 */
function filterStablecoins(pools: DeFiYield[]): DeFiYield[] {
  return pools.filter((pool) => pool.stablecoin);
}

/**
 * Filter pools by supported chains
 */
function filterSupportedChains(pools: DeFiYield[]): DeFiYield[] {
  return pools.filter((pool) => SUPPORTED_CHAINS.has(normalizeChain(pool.chain)));
}

/**
 * Sort pools by APY descending
 */
function sortByApy(pools: DeFiYield[], descending = true): DeFiYield[] {
  return [...pools].sort((a, b) =>
    descending ? b.apy - a.apy : a.apy - b.apy,
  );
}

/**
 * Sort pools by TVL descending
 */
function sortByTvl(pools: DeFiYield[], descending = true): DeFiYield[] {
  return [...pools].sort((a, b) =>
    descending ? b.tvlUsd - a.tvlUsd : a.tvlUsd - b.tvlUsd,
  );
}

// ── Public API ─────────────────────────────────────────────────────────────

/**
 * Fetch top yields from DeFiLlama API
 *
 * @param limit - Number of top yields to return (default: 50)
 * @returns Array of top yielding pools
 */
export async function fetchTopYields(limit: number = 50): Promise<DeFiYield[]> {
  try {
    const response = await cachedFetchJSON<DeFiLlamaResponse>(
      DEFILLAMA_API_URL,
      {
        timeout: 5000,
        retries: 2,
        tags: ['defillama', 'yields'],
      },
    );

    // Transform and filter pools
    let pools = (response.data || [])
      .filter((pool) => pool.apy !== undefined && pool.apy > 0)
      .map(transformPool);

    // Filter to known protocols and supported chains
    const knownProtocolPoolIds = new Set(
      filterKnownProtocols(response.data || []).map((p) => p.pool),
    );

    pools = pools
      .filter((pool) => knownProtocolPoolIds.has(pool.pool))
      .filter((pool) => SUPPORTED_CHAINS.has(pool.chain));

    // Sort by APY and limit results
    return sortByApy(pools, true).slice(0, limit);
  } catch (error) {
    console.error('Error fetching top yields from DeFiLlama:', error);
    throw new Error('Failed to fetch DeFi yields data');
  }
}

/**
 * Fetch yields for a specific chain
 *
 * @param chain - Chain name (e.g., 'Ethereum', 'Arbitrum', 'Solana')
 * @param options - Additional filter options
 * @returns Array of yields for the specified chain
 */
export async function fetchYieldsByChain(
  chain: string,
  options: {
    limit?: number;
    sortBy?: 'apy' | 'tvl';
    stableOnly?: boolean;
    minApy?: number;
  } = {},
): Promise<DeFiYield[]> {
  try {
    const { limit = 100, sortBy = 'apy', stableOnly = false, minApy = 0 } =
      options;

    const response = await cachedFetchJSON<DeFiLlamaResponse>(
      DEFILLAMA_API_URL,
      {
        timeout: 5000,
        retries: 2,
        tags: ['defillama', 'yields', `chain-${chain.toLowerCase()}`],
      },
    );

    // Transform and filter pools
    let pools = (response.data || [])
      .filter((pool) => pool.apy !== undefined && pool.apy >= minApy)
      .map(transformPool);

    // Filter by chain
    const normalizedChain = normalizeChain(chain);
    pools = pools.filter((pool) => normalizeChain(pool.chain) === normalizedChain);

    // Filter to known protocols
    const knownProtocolPoolIds = new Set(
      filterKnownProtocols(response.data || []).map((p) => p.pool),
    );
    pools = pools.filter((pool) => knownProtocolPoolIds.has(pool.pool));

    // Apply additional filters
    if (stableOnly) {
      pools = filterStablecoins(pools);
    }

    // Sort
    if (sortBy === 'tvl') {
      pools = sortByTvl(pools, true);
    } else {
      pools = sortByApy(pools, true);
    }

    return pools.slice(0, limit);
  } catch (error) {
    console.error(`Error fetching yields for chain ${chain}:`, error);
    throw new Error(`Failed to fetch DeFi yields for ${chain}`);
  }
}

/**
 * Fetch all available yields with optional filtering
 *
 * @param options - Filter and sort options
 * @returns Array of yields matching the criteria
 */
export async function fetchAllYields(options: {
  limit?: number;
  chain?: string;
  sortBy?: 'apy' | 'tvl';
  stableOnly?: boolean;
  minApy?: number;
} = {}): Promise<DeFiYield[]> {
  try {
    const {
      limit = 200,
      chain,
      sortBy = 'apy',
      stableOnly = false,
      minApy = 0,
    } = options;

    const response = await cachedFetchJSON<DeFiLlamaResponse>(
      DEFILLAMA_API_URL,
      {
        timeout: 5000,
        retries: 2,
        tags: ['defillama', 'yields', 'all'],
      },
    );

    // Transform and filter pools
    let pools = (response.data || [])
      .filter((pool) => pool.apy !== undefined && pool.apy >= minApy)
      .map(transformPool);

    // Filter to known protocols and supported chains
    const knownProtocolPoolIds = new Set(
      filterKnownProtocols(response.data || []).map((p) => p.pool),
    );

    pools = pools
      .filter((pool) => knownProtocolPoolIds.has(pool.pool))
      .filter((pool) => SUPPORTED_CHAINS.has(pool.chain));

    // Filter by chain if specified
    if (chain) {
      const normalizedChain = normalizeChain(chain);
      pools = pools.filter(
        (pool) => normalizeChain(pool.chain) === normalizedChain,
      );
    }

    // Apply additional filters
    if (stableOnly) {
      pools = filterStablecoins(pools);
    }

    // Sort
    if (sortBy === 'tvl') {
      pools = sortByTvl(pools, true);
    } else {
      pools = sortByApy(pools, true);
    }

    return pools.slice(0, limit);
  } catch (error) {
    console.error('Error fetching all yields from DeFiLlama:', error);
    throw new Error('Failed to fetch DeFi yields data');
  }
}

/**
 * Get risk classification based on APY level
 */
export function getRiskLevel(apy: number): 'Low' | 'Medium' | 'High' {
  if (apy < 5) return 'Low';
  if (apy < 15) return 'Medium';
  return 'High';
}

/**
 * Format TVL USD to human-readable string
 */
export function formatTvl(tvlUsd: number): string {
  if (tvlUsd >= 1e9) {
    return `$${(tvlUsd / 1e9).toFixed(2)}B`;
  }
  if (tvlUsd >= 1e6) {
    return `$${(tvlUsd / 1e6).toFixed(2)}M`;
  }
  if (tvlUsd >= 1e3) {
    return `$${(tvlUsd / 1e3).toFixed(2)}K`;
  }
  return `$${tvlUsd.toFixed(2)}`;
}
