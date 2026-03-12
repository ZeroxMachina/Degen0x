/**
 * Cache Statistics API Endpoint
 * Returns comprehensive cache and rate limiting statistics
 * GET /api/cache-stats
 * POST /api/cache-stats?action=clear - Clear cache
 * POST /api/cache-stats?action=invalidate-tag - Invalidate by tag
 */

import { NextRequest, NextResponse } from "next/server";
import { getGlobalCache } from "@/lib/api-cache";
import { getGlobalRateLimiter } from "@/lib/rate-limiter";
import { getAllCircuitBreakerStates } from "@/lib/api-helpers";

export async function GET(request: NextRequest) {
  try {
    const cache = getGlobalCache();
    const rateLimiter = getGlobalRateLimiter();

    // Get all statistics
    const stats = cache.getStats();
    const sizeInfo = cache.getSizeInfo();
    const rateLimitInfo = cache.getRateLimitInfo();
    const cacheKeys = cache.keys();
    const globalRateLimiterStatus = rateLimiter.getGlobalStatus();
    const circuitBreakerStates = getAllCircuitBreakerStates();

    return NextResponse.json(
      {
        status: "success",
        timestamp: new Date().toISOString(),
        cache: {
          statistics: stats,
          size: sizeInfo,
          rateLimit: rateLimitInfo,
          keysCount: cacheKeys.length,
          keys: cacheKeys.slice(0, 50), // Return first 50 keys for debugging
        },
        rateLimiter: {
          globalStatus: globalRateLimiterStatus,
          circuitBreakers: {
            total: Object.keys(circuitBreakerStates).length,
            states: Object.entries(circuitBreakerStates).map(([url, state]) => ({
              url,
              ...state,
            })).slice(0, 20), // Return first 20 circuit breakers
          },
        },
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
      }
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        status: "error",
        error: errorMessage,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get("action");

    const cache = getGlobalCache();

    if (action === "clear") {
      cache.clear();
      return NextResponse.json(
        {
          status: "success",
          message: "Cache cleared",
          timestamp: new Date().toISOString(),
        },
        { status: 200 }
      );
    }

    if (action === "invalidate-tag") {
      const body = await request.json() as { tag: string };
      if (!body.tag) {
        return NextResponse.json(
          {
            status: "error",
            error: "Missing 'tag' parameter",
            timestamp: new Date().toISOString(),
          },
          { status: 400 }
        );
      }

      const invalidatedCount = cache.invalidateByTag(body.tag);
      return NextResponse.json(
        {
          status: "success",
          message: `Invalidated ${invalidatedCount} entries with tag '${body.tag}'`,
          invalidatedCount,
          timestamp: new Date().toISOString(),
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        status: "error",
        error: `Unknown action: ${action}`,
        timestamp: new Date().toISOString(),
      },
      { status: 400 }
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        status: "error",
        error: errorMessage,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
