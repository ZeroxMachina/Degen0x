/**
 * DeFi Yields API Route
 * Provides filtered and sorted DeFi yield data from DeFiLlama
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  fetchAllYields,
  fetchTopYields,
  fetchYieldsByChain,
  DeFiYield,
  SUPPORTED_CHAINS,
} from '@/lib/defillama';

// ── Types ──────────────────────────────────────────────────────────────────

interface ApiResponse {
  success: boolean;
  data?: DeFiYield[];
  count?: number;
  error?: string;
  timestamp?: string;
}

// ── Constants ──────────────────────────────────────────────────────────────

const CACHE_DURATION = 300; // 5 minutes
const DEFAULT_LIMIT = 50;
const MAX_LIMIT = 500;

// ── Validation ─────────────────────────────────────────────────────────────

/**
 * Parse and validate query parameters
 */
function parseQueryParams(request: NextRequest): {
  chain?: string;
  sort: 'apy' | 'tvl';
  limit: number;
  stableOnly: boolean;
  minApy: number;
} {
  const { searchParams } = new URL(request.url);

  const chain = searchParams.get('chain')?.trim();
  const sort = (searchParams.get('sort')?.toLowerCase() ?? 'apy') as
    | 'apy'
    | 'tvl';
  const stableOnly = searchParams.get('stableOnly') === 'true';
  const minApy = Math.max(0, parseFloat(searchParams.get('minApy') ?? '0'));

  let limit = parseInt(searchParams.get('limit') ?? String(DEFAULT_LIMIT), 10);
  if (isNaN(limit) || limit < 1) {
    limit = DEFAULT_LIMIT;
  }
  if (limit > MAX_LIMIT) {
    limit = MAX_LIMIT;
  }

  // Validate sort parameter
  if (sort !== 'apy' && sort !== 'tvl') {
    return { sort: 'apy', limit, stableOnly, minApy };
  }

  // Validate chain if provided
  if (chain && !SUPPORTED_CHAINS.has(chain)) {
    return { chain: undefined, sort, limit, stableOnly, minApy };
  }

  return { chain, sort, limit, stableOnly, minApy };
}

// ── Main Handler ───────────────────────────────────────────────────────────

export async function GET(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const { chain, sort, limit, stableOnly, minApy } =
      parseQueryParams(request);

    let yields: DeFiYield[];

    // Fetch yields based on parameters
    if (chain) {
      yields = await fetchYieldsByChain(chain, {
        limit,
        sortBy: sort,
        stableOnly,
        minApy,
      });
    } else {
      yields = await fetchAllYields({
        limit,
        sortBy: sort,
        stableOnly,
        minApy,
      });
    }

    const response: ApiResponse = {
      success: true,
      data: yields,
      count: yields.length,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response, {
      status: 200,
      headers: {
        'Cache-Control': `public, s-maxage=${CACHE_DURATION}, stale-while-revalidate=${CACHE_DURATION * 2}`,
        'Content-Type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error) {
    console.error('DeFi Yields API Error:', error);

    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Failed to fetch DeFi yields data';

    const response: ApiResponse = {
      success: false,
      error: errorMessage,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response, {
      status: 500,
      headers: {
        'Cache-Control': 'public, s-maxage=60',
        'Content-Type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  }
}

// ── OPTIONS Handler ────────────────────────────────────────────────────────

export async function OPTIONS(): Promise<NextResponse> {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Allow': 'GET, OPTIONS',
      'Content-Type': 'application/json',
    },
  });
}
