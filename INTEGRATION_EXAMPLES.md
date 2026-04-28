# Integration Examples

Quick examples of how to integrate the caching and rate limiting system into your API routes.

## Example 1: Simple Cached API Endpoint

Update `/src/app/api/prices/route.ts` to use the new system:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { cachedFetchJSON } from '@/lib/api-helpers';
import { getGlobalRateLimiter } from '@/lib/rate-limiter';

// Helper to get client IP
function getClientIP(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

interface CoinPrice {
  id: string;
  symbol: string;
  current_price: number;
  market_cap?: number;
  market_cap_rank?: number;
  price_change_percentage_24h?: number;
}

export async function GET(request: NextRequest) {
  try {
    // Check rate limits
    const ip = getClientIP(request);
    const limiter = getGlobalRateLimiter();
    const rateLimit = limiter.checkLimit(ip, '/api/prices');

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        {
          status: 429,
          headers: {
            'Retry-After': Math.ceil(
              (rateLimit.retryAfterMs ?? 60000) / 1000
            ).toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': new Date(rateLimit.resetAt).toISOString(),
          },
        }
      );
    }

    // Fetch prices with automatic caching, retries, and circuit breaker
    const prices = await cachedFetchJSON<CoinPrice[]>(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=1h,24h,7d',
      {
        tags: ['prices', 'markets', 'crypto-data'],
        timeout: 15000,
        retries: 5,
        retryDelayMs: 1000,
        retryBackoffMultiplier: 2,
        cacheOptions: {
          ttlSeconds: 60, // Cache for 1 minute
          staleWhileRevalidateSeconds: 30,
        },
      }
    );

    return NextResponse.json(prices, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
        'X-RateLimit-Remaining': Math.max(0, rateLimit.remaining).toString(),
        'X-RateLimit-Reset': new Date(rateLimit.resetAt).toISOString(),
      },
    });
  } catch (error) {
    console.error('Error fetching prices:', error);
    return NextResponse.json(
      { error: 'Failed to fetch crypto prices' },
      { status: 502 }
    );
  }
}

// Cleanup on server shutdown (if needed)
export const runtime = 'nodejs';
```

---

## Example 2: Trending Cryptocurrencies with Custom Rate Limit

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { cachedFetchJSON } from '@/lib/api-helpers';
import { getGlobalRateLimiter } from '@/lib/rate-limiter';

function getClientIP(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

interface TrendingCoin {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
  data: {
    price: string;
    price_change_percentage_24h: {
      aed: number;
      ars: number;
      [key: string]: number;
    };
    market_cap: string;
    market_cap_change_percentage_24h: {
      [key: string]: number;
    };
    total_volume: string;
  };
}

interface TrendingResponse {
  coins: { item: TrendingCoin }[];
  exchanges: unknown[];
  nfts: unknown[];
}

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIP(request);
    const limiter = getGlobalRateLimiter();

    // This route uses the predefined 150 req/min limit (from rate-limiter.ts)
    const rateLimit = limiter.checkLimit(ip, '/api/trending');

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        {
          status: 429,
          headers: {
            'Retry-After': Math.ceil(
              (rateLimit.retryAfterMs ?? 60000) / 1000
            ).toString(),
          },
        }
      );
    }

    const data = await cachedFetchJSON<TrendingResponse>(
      'https://api.coingecko.com/api/v3/search/trending',
      {
        tags: ['trending', 'crypto-data'],
        timeout: 12000,
        retries: 4,
        cacheOptions: { ttlSeconds: 120 }, // 2 minutes
      }
    );

    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=120, stale-while-revalidate=240',
        'X-RateLimit-Remaining': Math.max(0, rateLimit.remaining).toString(),
      },
    });
  } catch (error) {
    console.error('Error fetching trending:', error);
    return NextResponse.json(
      { error: 'Failed to fetch trending cryptocurrencies' },
      { status: 502 }
    );
  }
}
```

---

## Example 3: Fear and Greed Index

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { cachedFetchJSON } from '@/lib/api-helpers';
import { getGlobalRateLimiter } from '@/lib/rate-limiter';

function getClientIP(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

interface FearGreedData {
  data: Array<{
    value: string;
    value_classification: string;
    timestamp: string;
    time_until_update?: string;
  }>;
  metadata?: {
    error?: string;
  };
}

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIP(request);
    const limiter = getGlobalRateLimiter();
    const rateLimit = limiter.checkLimit(ip, '/api/fear-greed');

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Too many requests' },
        {
          status: 429,
          headers: {
            'Retry-After': Math.ceil(
              (rateLimit.retryAfterMs ?? 60000) / 1000
            ).toString(),
          },
        }
      );
    }

    const data = await cachedFetchJSON<FearGreedData>(
      'https://api.alternative.me/fng/?limit=1',
      {
        tags: ['fear-greed', 'sentiment', 'crypto-data'],
        timeout: 10000,
        retries: 3,
        cacheOptions: { ttlSeconds: 300 }, // 5 minutes (updates slowly)
      }
    );

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    console.error('Fear/Greed API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch fear and greed index' },
      { status: 502 }
    );
  }
}
```

---

## Example 4: Cache Invalidation on Demand

Create a new endpoint `/src/app/api/cache-invalidate/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { getGlobalCache } from '@/lib/api-cache';
import { invalidateCacheByTags } from '@/lib/api-helpers';

// Protect this endpoint with authentication
async function isAuthorized(request: NextRequest): Promise<boolean> {
  const token = request.headers.get('authorization')?.replace('Bearer ', '');
  const validToken = process.env.CACHE_ADMIN_TOKEN;

  if (!validToken || !token) {
    return false;
  }

  return token === validToken;
}

export async function POST(request: NextRequest) {
  // Check authorization
  if (!(await isAuthorized(request))) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const body = (await request.json()) as { action: string; tags?: string[] };

    if (body.action === 'invalidate-tags' && body.tags) {
      invalidateCacheByTags(body.tags);
      return NextResponse.json({
        status: 'success',
        message: `Invalidated tags: ${body.tags.join(', ')}`,
        tags: body.tags,
      });
    }

    if (body.action === 'clear-all') {
      const cache = getGlobalCache();
      cache.clear();
      return NextResponse.json({
        status: 'success',
        message: 'All cache cleared',
      });
    }

    return NextResponse.json(
      { error: 'Unknown action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Cache invalidation error:', error);
    return NextResponse.json(
      { error: 'Failed to invalidate cache' },
      { status: 500 }
    );
  }
}
```

Usage:
```bash
# Invalidate price-related caches
curl -X POST https://example.com/api/cache-invalidate \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"action": "invalidate-tags", "tags": ["prices", "markets"]}'

# Clear everything
curl -X POST https://example.com/api/cache-invalidate \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"action": "clear-all"}'
```

---

## Example 5: Batch Fetching Multiple APIs

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { cachedFetchBatch } from '@/lib/api-helpers';

interface CombinedData {
  prices: unknown[];
  trending: unknown[];
  sentiment: unknown[];
}

export async function GET(request: NextRequest) {
  try {
    const [prices, trending, sentiment] = await cachedFetchBatch(
      [
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20',
        'https://api.coingecko.com/api/v3/search/trending',
        'https://api.alternative.me/fng/?limit=1',
      ],
      {
        tags: ['crypto-data'],
        timeout: 15000,
        retries: 3,
        cacheOptions: { ttlSeconds: 60 },
      }
    );

    const combined: CombinedData = {
      prices,
      trending,
      sentiment,
    };

    return NextResponse.json(combined, {
      headers: {
        'Cache-Control': 'public, s-maxage=60',
      },
    });
  } catch (error) {
    console.error('Batch fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 502 }
    );
  }
}
```

---

## Example 6: Monitoring and Alerts

Create a monitoring endpoint `/src/app/api/health/route.ts`:

```typescript
import { NextResponse } from 'next/server';
import { getGlobalCache } from '@/lib/api-cache';
import { getGlobalRateLimiter } from '@/lib/rate-limiter';
import { getAllCircuitBreakerStates } from '@/lib/api-helpers';

interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  cache: {
    hitRate: number;
    memoryUsage: number;
    evictions: number;
  };
  rateLimiter: {
    globalTokens: number;
    backingOff: boolean;
  };
  circuitBreakers: {
    openCount: number;
    failingAPIs: string[];
  };
  alerts: string[];
}

export async function GET() {
  const cache = getGlobalCache();
  const limiter = getGlobalRateLimiter();
  const stats = cache.getStats();
  const sizeInfo = cache.getSizeInfo();
  const rateLimitInfo = cache.getRateLimitInfo();
  const circuitBreakerStates = getAllCircuitBreakerStates();

  const openCircuitBreakers = Object.entries(circuitBreakerStates)
    .filter(([_, state]) => state.state === 'open')
    .map(([url]) => url);

  const alerts: string[] = [];

  // Check for issues
  if (stats.hitRate < 0.3) {
    alerts.push('Low cache hit rate (< 30%)');
  }

  if (sizeInfo.percentageUsed > 90) {
    alerts.push('Cache memory usage critical (> 90%)');
  }

  if (stats.evictions > 100) {
    alerts.push('High cache eviction rate');
  }

  if (rateLimitInfo.isBackingOff) {
    alerts.push('Global rate limiter is backing off');
  }

  if (openCircuitBreakers.length > 0) {
    alerts.push(`${openCircuitBreakers.length} circuit breakers are open`);
  }

  const globalStatus = limiter.getGlobalStatus();
  let healthStatus: 'healthy' | 'degraded' | 'unhealthy' = 'healthy';

  if (alerts.length > 0) {
    healthStatus = alerts.length > 2 ? 'unhealthy' : 'degraded';
  }

  const response: HealthStatus = {
    status: healthStatus,
    cache: {
      hitRate: parseFloat((stats.hitRate * 100).toFixed(2)),
      memoryUsage: sizeInfo.percentageUsed,
      evictions: stats.evictions,
    },
    rateLimiter: {
      globalTokens: Math.floor(globalStatus.tokens),
      backingOff: rateLimitInfo.isBackingOff,
    },
    circuitBreakers: {
      openCount: openCircuitBreakers.length,
      failingAPIs: openCircuitBreakers,
    },
    alerts,
  };

  const statusCode = healthStatus === 'healthy' ? 200 : healthStatus === 'degraded' ? 206 : 503;

  return NextResponse.json(response, { status: statusCode });
}
```

Usage:
```bash
# Check system health
curl https://example.com/api/health

# Example response
{
  "status": "healthy",
  "cache": {
    "hitRate": 75.5,
    "memoryUsage": 30.0,
    "evictions": 5
  },
  "rateLimiter": {
    "globalTokens": 950,
    "backingOff": false
  },
  "circuitBreakers": {
    "openCount": 0,
    "failingAPIs": []
  },
  "alerts": []
}
```

---

## Example 7: Testing

```typescript
import { getGlobalCache, resetGlobalCache } from '@/lib/api-cache';
import { getGlobalRateLimiter, resetGlobalRateLimiter } from '@/lib/rate-limiter';
import { resetCircuitBreaker, clearAll } from '@/lib/api-helpers';

describe('API Caching and Rate Limiting', () => {
  beforeEach(() => {
    // Clean up before each test
    resetGlobalCache();
    resetGlobalRateLimiter();
    resetCircuitBreaker();
  });

  test('cache stores and retrieves data', () => {
    const cache = getGlobalCache();
    const testData = { id: 1, name: 'Test' };

    cache.set('test-key', testData, ['test-tag']);
    const result = cache.get('test-key');

    expect(result).toEqual(testData);
  });

  test('rate limiter blocks after limit', () => {
    const limiter = getGlobalRateLimiter();

    // Simulate 101 requests (exceeds default limit of 100)
    for (let i = 0; i < 100; i++) {
      const result = limiter.checkLimit('192.168.1.1', '/api/prices');
      expect(result.allowed).toBe(true);
    }

    // Next request should be rate limited
    const result = limiter.checkLimit('192.168.1.1', '/api/prices');
    expect(result.allowed).toBe(false);
  });

  test('cache invalidation by tag works', () => {
    const cache = getGlobalCache();

    cache.set('key1', { data: 1 }, ['tag1']);
    cache.set('key2', { data: 2 }, ['tag2']);
    cache.set('key3', { data: 3 }, ['tag1', 'tag2']);

    const invalidated = cache.invalidateByTag('tag1');

    expect(invalidated).toBe(2); // key1 and key3
    expect(cache.get('key1')).toBeNull();
    expect(cache.get('key2')).not.toBeNull();
    expect(cache.get('key3')).toBeNull();
  });
});
```

---

## Tips and Tricks

### Debugging Cache Issues

```typescript
// Check cache stats in real-time
const cache = getGlobalCache();
const stats = cache.getStats();

console.log('Cache Stats:', {
  hitRate: `${(stats.hitRate * 100).toFixed(2)}%`,
  totalSize: `${(stats.currentSize / 1024 / 1024).toFixed(2)}MB`,
  entries: cache.keys().length,
  topUrls: stats.mostRequestedUrls.slice(0, 5),
});
```

### Performance Tuning

```typescript
// For high-traffic endpoints, increase burst limit
limiter.setRouteLimit('/api/prices', {
  requestsPerWindow: 500,
  windowSizeMs: 60 * 1000,
  maxBurstSize: 1000, // Allow 2x spike
});

// For cold-start friendly cache with longer TTL
cache.set(key, data, ['preload'], {
  ttlSeconds: 3600, // 1 hour for preloaded data
  staleWhileRevalidateSeconds: 1800,
});
```

### Production Checklist

- [ ] Set `CACHE_ADMIN_TOKEN` environment variable for cache invalidation
- [ ] Monitor `/api/cache-stats` regularly
- [ ] Check `/api/health` for alerts
- [ ] Set up alerts for circuit breaker states
- [ ] Configure rate limits based on expected traffic
- [ ] Test cache invalidation in staging
- [ ] Set up logging for circuit breaker events
