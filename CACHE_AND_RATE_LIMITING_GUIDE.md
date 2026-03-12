# Advanced API Caching and Rate Limiting System

## Overview

A comprehensive caching and rate limiting system has been implemented for the Next.js crypto site with advanced features for performance optimization, API protection, and monitoring.

## Files Created/Modified

### 1. `/src/lib/api-cache.ts` (Enhanced - 578 lines)

**Advanced in-memory LRU cache with the following features:**

#### Core Features:
- **In-Memory LRU Cache**: Least Recently Used eviction policy based on hit count and access time
- **TTL-Based Expiration**: Configurable time-to-live for cache entries
- **Stale-While-Revalidate Pattern**: Returns stale data while fetching fresh data in background
- **Cache Tags**: Group related cache entries for bulk invalidation (e.g., "prices", "trending")
- **Request Deduplication**: Multiple concurrent requests to the same URL wait for the first response
- **Automatic Cleanup**: Background process removes expired entries every 30 seconds
- **Statistics Tracking**: Comprehensive metrics including hit/miss rates and most requested URLs
- **Memory Management**: Configurable max size with automatic LRU eviction

#### Key Interfaces:
```typescript
interface CacheEntry<T> {
  data: T;
  timestamp: number;
  expiresAt: number;
  staleAt: number;
  hits: number;
  tags?: string[];
  lastAccessTime?: number;
}

interface CacheStats {
  hits: number;
  misses: number;
  evictions: number;
  totalRequests: number;
  hitRate: number;
  currentSize: number;
  maxSize: number;
  mostRequestedUrls: Array<{ url: string; hits: number }>;
  averageEntrySize: number;
}
```

#### Key Methods:
- `get<T>(key: string): T | null` - Retrieve cached data
- `set<T>(key: string, data: T, tags?: string[]): void` - Cache data with optional tags
- `invalidateByTag(tag: string): number` - Invalidate all entries with a specific tag
- `delete(key: string): boolean` - Delete single cache entry
- `clear(): void` - Clear all cache entries
- `getOrFetch<T>(key: string, fetcher: () => Promise<T>): Promise<T>` - Deduplicates in-flight requests
- `getStats(): CacheStats` - Get comprehensive cache statistics
- `keys(): string[]` - Get all cache keys
- `getSizeInfo()` - Get memory usage info
- `getRateLimitInfo()` - Get rate limit status
- `startCleanup()` / `stopCleanup()` - Manage background cleanup

#### Default Configuration:
```typescript
{
  ttlSeconds: 60,                    // 1 minute
  staleWhileRevalidateSeconds: 30,   // 30 seconds
  maxSizeBytes: 50 * 1024 * 1024,    // 50MB
  cleanupIntervalMs: 30 * 1000       // 30 seconds
}
```

#### Usage Example:
```typescript
import { getGlobalCache } from '@/lib/api-cache';

const cache = getGlobalCache();

// Cache with tags
cache.set('prices_btc', priceData, ['prices', 'trending']);

// Retrieve
const data = cache.get('prices_btc');

// Invalidate by tag
cache.invalidateByTag('prices'); // Invalidates all price entries

// Stats
const stats = cache.getStats();
console.log(`Cache hit rate: ${stats.hitRate}`);
```

---

### 2. `/src/lib/rate-limiter.ts` (New - 252 lines)

**Token bucket rate limiter with per-IP and global limits:**

#### Features:
- **Token Bucket Algorithm**: Smooth rate limiting with burst capability
- **Per-IP Rate Limiting**: Individual limits for each client IP
- **Global Rate Limiting**: Overall server-wide rate limit
- **Route-Specific Limits**: Different limits for different API endpoints
- **Burst Support**: Allow temporary spike above normal rate
- **Configurable Windows**: Define custom time windows for rate limits
- **Circuit Breaker Integration**: Works with circuit breaker pattern
- **Automatic Cleanup**: Removes stale IP bucket data after 30 minutes

#### Key Interfaces:
```typescript
interface RateLimitConfig {
  requestsPerWindow: number;
  windowSizeMs: number;
  maxBurstSize?: number;
}

interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
  retryAfterMs?: number;
}
```

#### Key Methods:
- `checkLimit(ip: string, route?: string): RateLimitResult` - Check if request is allowed
- `setRouteLimit(route: string, config: RateLimitConfig): void` - Set custom route limit
- `resetIP(ip: string): void` - Reset limit for specific IP
- `resetAll(): void` - Reset all limits
- `getIPStatus(ip: string): TokenBucket | null` - Get IP bucket status
- `getGlobalStatus(): TokenBucket` - Get global bucket status
- `stopCleanup(): void` - Stop cleanup timer

#### Default Configuration:
```typescript
{
  global: {
    requestsPerWindow: 1000,
    windowSizeMs: 60 * 1000,      // 1 minute
    maxBurstSize: 1500            // 1.5x normal limit
  },
  routes: {
    '/api/prices': {
      requestsPerWindow: 200,
      maxBurstSize: 250
    },
    '/api/trending': {
      requestsPerWindow: 150,
      maxBurstSize: 200
    },
    '/api/fear-greed': {
      requestsPerWindow: 100,
      maxBurstSize: 150
    }
  }
}
```

#### Usage Example:
```typescript
import { getGlobalRateLimiter } from '@/lib/rate-limiter';

const limiter = getGlobalRateLimiter();

// Check if request is allowed
const result = limiter.checkLimit('192.168.1.1', '/api/prices');

if (!result.allowed) {
  return new Response('Too Many Requests', {
    status: 429,
    headers: {
      'Retry-After': Math.ceil(result.retryAfterMs! / 1000).toString(),
    },
  });
}
```

---

### 3. `/src/lib/api-helpers.ts` (New - 300 lines)

**Helper functions for API fetching with automatic caching, retry logic, and circuit breaker:**

#### Features:
- **Automatic Caching**: Wraps fetch calls with automatic caching
- **Retry Logic**: Exponential backoff retry for failed requests
- **Circuit Breaker Pattern**: Prevents cascading failures by temporarily blocking failing APIs
- **Request Timeout**: Configurable timeout for hanging requests
- **Batch Requests**: Fetch multiple URLs in parallel with caching
- **Stale Cache Fallback**: Returns stale data if API fails
- **Request Deduplication**: Multiple concurrent requests to same URL share response

#### Key Functions:

**`cachedFetch<T>(url: string, options?: FetchOptions): Promise<T>`**
- Main function for fetching with automatic caching
- Automatically caches successful responses
- Falls back to stale cache on error
- Deduplicates in-flight requests

**`cachedFetchJSON<T>(url: string, options?: FetchOptions): Promise<T>`**
- Convenience wrapper for JSON endpoints
- Sets appropriate Accept headers

**`cachedFetchBatch<T>(urls: string[], options?: FetchOptions): Promise<T[]>`**
- Fetch multiple URLs in parallel
- All requests use same cache settings

**`resetCircuitBreaker(url?: string): void`**
- Reset circuit breaker for specific URL or all

**`getCircuitBreakerStatus(url: string): CircuitBreakerState`**
- Get status of circuit breaker for a URL

**`getAllCircuitBreakerStates(): Record<string, CircuitBreakerState>`**
- Get all circuit breaker states

**`invalidateCacheByTags(tags: string[]): void`**
- Invalidate multiple cache tags at once

**`clearAll(): void`**
- Clear all caches and circuit breakers

#### FetchOptions Configuration:
```typescript
interface FetchOptions extends RequestInit {
  timeout?: number;                    // Default: 10 seconds
  retries?: number;                    // Default: 3
  retryDelayMs?: number;               // Default: 1 second
  retryBackoffMultiplier?: number;     // Default: 2
  tags?: string[];                     // Cache tags for invalidation
  cacheOptions?: CacheOptions;         // Custom cache settings
  circuitBreakerThreshold?: number;    // Failures before opening
}
```

#### Circuit Breaker States:
- **closed**: Normal operation, requests pass through
- **open**: API is failing, requests are rejected immediately
- **half-open**: Testing if API recovered

#### Retry Behavior:
- Retries on network errors
- Retries on 5xx server errors
- Retries on 408 (Request Timeout) and 429 (Too Many Requests)
- Exponential backoff: delay * 2^retryCount

#### Usage Examples:

```typescript
import { cachedFetch, cachedFetchJSON, resetCircuitBreaker } from '@/lib/api-helpers';

// Simple cached fetch
const data = await cachedFetch('https://api.example.com/data');

// JSON fetch with tags and caching
const prices = await cachedFetchJSON<PriceData>(
  'https://api.coingecko.com/api/v3/coins/markets',
  {
    tags: ['prices', 'markets'],
    timeout: 15000,
    retries: 5,
    cacheOptions: { ttlSeconds: 120 }
  }
);

// Batch fetch
const [btc, eth, ada] = await cachedFetchBatch<CoinData>([
  'https://api.example.com/btc',
  'https://api.example.com/eth',
  'https://api.example.com/ada'
]);

// Invalidate cache
invalidateCacheByTags(['prices']);

// Reset circuit breaker if API recovers
resetCircuitBreaker('https://api.example.com/data');
```

---

### 4. `/src/app/api/cache-stats/route.ts` (Enhanced - 136 lines)

**Comprehensive endpoint for monitoring cache and rate limiting:**

#### GET Request - Get Statistics

Returns comprehensive cache, rate limiting, and circuit breaker statistics:

```bash
curl https://example.com/api/cache-stats
```

Response:
```json
{
  "status": "success",
  "timestamp": "2026-03-12T16:00:00.000Z",
  "cache": {
    "statistics": {
      "hits": 1250,
      "misses": 450,
      "evictions": 25,
      "totalRequests": 1700,
      "hitRate": 0.7353,
      "currentSize": 15728640,
      "maxSize": 52428800,
      "mostRequestedUrls": [
        { "url": "GET https://api.coingecko.com/prices", "hits": 150 },
        { "url": "GET https://api.coingecko.com/trending", "hits": 120 }
      ],
      "averageEntrySize": 262144
    },
    "size": {
      "currentSizeBytes": 15728640,
      "maxSizeBytes": 52428800,
      "percentageUsed": 30.0,
      "entryCount": 60
    },
    "rateLimit": {
      "isBackingOff": false,
      "requestCount": 45,
      "rateLimitRequests": 1000,
      "backoffUntil": 0
    },
    "keysCount": 60,
    "keys": ["GET https://api.coingecko.com/prices", ...]
  },
  "rateLimiter": {
    "globalStatus": {
      "tokens": 950,
      "lastRefillTime": 1678650000000,
      "refillRate": 16.67
    },
    "circuitBreakers": {
      "total": 5,
      "states": [
        {
          "url": "https://api.failing.com/data",
          "failures": 5,
          "lastFailureTime": 1678649990000,
          "state": "open"
        }
      ]
    }
  }
}
```

#### POST Requests - Management Actions

**Clear Cache:**
```bash
curl -X POST https://example.com/api/cache-stats?action=clear
```

**Invalidate Cache by Tag:**
```bash
curl -X POST https://example.com/api/cache-stats?action=invalidate-tag \
  -H "Content-Type: application/json" \
  -d '{"tag": "prices"}'
```

Response:
```json
{
  "status": "success",
  "message": "Invalidated 12 entries with tag 'prices'",
  "invalidatedCount": 12,
  "timestamp": "2026-03-12T16:00:00.000Z"
}
```

---

## Integration with Existing API Routes

### Example: Updating `/api/prices/route.ts`

```typescript
import { cachedFetchJSON } from '@/lib/api-helpers';
import { getGlobalRateLimiter } from '@/lib/rate-limiter';
import { getClientIP } from '@/lib/utils'; // Helper function

export async function GET(request: NextRequest) {
  // Check rate limits
  const ip = getClientIP(request);
  const limiter = getGlobalRateLimiter();
  const rateLimit = limiter.checkLimit(ip, '/api/prices');

  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: 'Rate limit exceeded' },
      {
        status: 429,
        headers: {
          'Retry-After': Math.ceil(rateLimit.retryAfterMs! / 1000).toString(),
        },
      }
    );
  }

  try {
    // Fetch with automatic caching and retry
    const data = await cachedFetchJSON<PriceResponse[]>(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=1h,24h,7d',
      {
        tags: ['prices', 'markets'],
        timeout: 15000,
        retries: 5,
        cacheOptions: { ttlSeconds: 60 }
      }
    );

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    });
  } catch (error) {
    console.error('Error fetching prices:', error);
    return NextResponse.json(
      { error: 'Failed to fetch prices' },
      { status: 502 }
    );
  }
}
```

---

## Performance Characteristics

### Cache
- **Lookup Time**: O(1) - HashMap-based storage
- **Insertion Time**: O(1) amortized
- **LRU Eviction**: O(n) where n = cache size
- **Tag Invalidation**: O(m) where m = entries with tag

### Rate Limiter
- **Check Limit**: O(1) - Direct bucket access
- **Cleanup**: O(n) where n = number of IPs (runs every 5 minutes)

### Memory Usage
- Cache: Configurable, defaults to 50MB
- Rate Limiter: ~1KB per IP bucket + 1KB per global bucket
- Circuit Breakers: ~500 bytes per tracked URL

---

## Monitoring and Debugging

### Cache Stats Endpoint
Access `/api/cache-stats` to view:
- Cache hit/miss rates
- Memory usage and percentage
- Most requested URLs
- Current cache entries
- Rate limiter status
- Circuit breaker states

### Useful Queries

```bash
# Get cache statistics
curl https://example.com/api/cache-stats

# Clear all cache
curl -X POST https://example.com/api/cache-stats?action=clear

# Invalidate all price-related cache
curl -X POST https://example.com/api/cache-stats?action=invalidate-tag \
  -H "Content-Type: application/json" \
  -d '{"tag": "prices"}'
```

---

## Configuration Guide

### Adjusting Cache TTL

```typescript
import { getGlobalCache } from '@/lib/api-cache';

const cache = getGlobalCache();
cache.set('my_key', data, ['tag1'], { ttlSeconds: 300 }); // 5 minutes
```

### Setting Per-Route Rate Limits

```typescript
import { getGlobalRateLimiter } from '@/lib/rate-limiter';

const limiter = getGlobalRateLimiter();

// Allow 500 requests per minute with 600 burst
limiter.setRouteLimit('/api/custom', {
  requestsPerWindow: 500,
  windowSizeMs: 60 * 1000,
  maxBurstSize: 600
});
```

### Custom Circuit Breaker Threshold

Modify the `CIRCUIT_BREAKER_THRESHOLD` constant in `/src/lib/api-helpers.ts`:

```typescript
const CIRCUIT_BREAKER_THRESHOLD = 10; // Open after 10 failures
const CIRCUIT_BREAKER_RESET_MS = 120 * 1000; // Try reset after 2 minutes
```

---

## Best Practices

1. **Use Cache Tags**: Always tag cache entries for easy invalidation
   ```typescript
   cache.set(key, data, ['prices', 'markets']);
   ```

2. **Set Appropriate TTL**: Shorter for volatile data, longer for stable data
   ```typescript
   // Prices - update frequently
   cache.set('prices', data, ['prices'], { ttlSeconds: 30 });

   // Static content - cache longer
   cache.set('faq', data, ['content'], { ttlSeconds: 3600 });
   ```

3. **Handle Rate Limits**: Always check limits before processing
   ```typescript
   const limit = limiter.checkLimit(ip, route);
   if (!limit.allowed) {
     return errorResponse(429, { 'Retry-After': limit.retryAfterMs });
   }
   ```

4. **Monitor Circuit Breakers**: Track failing APIs
   ```typescript
   const states = getAllCircuitBreakerStates();
   const failingAPIs = Object.entries(states)
     .filter(([_, state]) => state.state === 'open')
     .map(([url]) => url);
   ```

5. **Clean Up Resources**: Stop timers when needed
   ```typescript
   cache.stopCleanup();
   limiter.stopCleanup();
   ```

---

## Troubleshooting

### High Cache Eviction Rate
- Increase `maxSizeBytes` in cache config
- Use tags to invalidate instead of waiting for TTL
- Reduce `ttlSeconds` for low-hit entries

### Rate Limit False Positives
- Increase `maxBurstSize` for expected traffic spikes
- Adjust `requestsPerWindow` for the route
- Check IP detection logic (ensure correct client IP extraction)

### Memory Issues
- Monitor `/api/cache-stats` for memory usage
- Reduce `maxSizeBytes` if needed
- Implement cache invalidation by tag regularly
- Check for memory leaks in circuit breaker cleanup

---

## Summary

This advanced caching and rate limiting system provides:

✓ **Performance**: LRU cache with O(1) lookups and stale-while-revalidate pattern
✓ **Reliability**: Circuit breaker pattern prevents cascading failures
✓ **Flexibility**: Per-route rate limits and tag-based cache invalidation
✓ **Observability**: Comprehensive stats and monitoring endpoints
✓ **Scalability**: Token bucket algorithm scales to millions of requests
✓ **Developer Experience**: Simple, composable helper functions
