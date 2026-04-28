# Rate Limiter & Health Check Implementation

## Overview

This document describes the rate limiting utility and health check endpoint created for the degen0x crypto project.

## Files Created/Modified

### 1. `/src/lib/rate-limiter.ts` (Enhanced)
Enhanced the existing rate limiter with helper functions for Next.js integration.

#### Existing Features
- **RateLimiter Class**: Token bucket algorithm implementation
  - Per-IP rate limiting
  - Global rate limiting
  - Configurable windows (requests per minute/hour)
  - Automatic bucket refilling based on elapsed time
  - Configurable burst size
  - Automatic cleanup of stale IP buckets (30-minute TTL)

#### New Features Added
- **getClientIP(headers: Headers)**: Extracts client IP from request headers
  - Checks headers in order: `x-forwarded-for`, `x-real-ip`, `x-client-ip`
  - Handles comma-separated lists in `x-forwarded-for`
  - Falls back to `127.0.0.1` if no IP found

- **checkRateLimit(headers: Headers, route?: string)**: Helper function for API routes
  - Returns either `{ response: null, remaining, resetAt }` if allowed
  - Returns `{ response: Response, remaining, resetAt }` with 429 status if rate limited
  - Automatically generates 429 responses with proper headers
  - Sets standard rate limiting headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`, `Retry-After`

#### Configuration

Default global limits:
```typescript
{
  requestsPerWindow: 1000,
  windowSizeMs: 60 * 1000, // 1 minute
  maxBurstSize: 1500, // Allow burst of 1.5x the window limit
}
```

Pre-configured route limits:
- `/api/prices`: 200 requests/minute (burst: 250)
- `/api/trending`: 150 requests/minute (burst: 200)
- `/api/fear-greed`: 100 requests/minute (burst: 150)

### 2. `/src/app/api/health/route.ts` (New)
Comprehensive health check endpoint for monitoring API status and service connectivity.

#### Features

**GET /api/health**
- Returns full health status with service details
- Checks three key services (configurable):
  1. `coingecko-api` - External crypto data provider
  2. `analytics` - Analytics service
  3. `cache` - Internal cache system
- Status codes:
  - `200` for healthy or degraded
  - `503` for unhealthy

**HEAD /api/health**
- Lightweight health check without service details
- Useful for load balancers and health checks
- Returns `200` with minimal response body

#### Response Format

```typescript
interface HealthCheckResponse {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string; // ISO 8601 timestamp
  version: string; // Application version
  uptime: number; // Milliseconds since app start
  services: ServiceHealth[]; // Array of service statuses
  rateLimit: {
    remaining: number; // Requests remaining in current window
    resetAt: string; // ISO 8601 timestamp when limit resets
  };
}

interface ServiceHealth {
  name: string;
  status: 'healthy' | 'degraded' | 'unhealthy';
  responseTime: number; // Milliseconds
  lastChecked: string; // ISO 8601 timestamp
}
```

#### Example Response

```json
{
  "status": "healthy",
  "timestamp": "2026-03-12T23:04:00.000Z",
  "version": "1.0.0",
  "uptime": 1234567890,
  "services": [
    {
      "name": "coingecko-api",
      "status": "healthy",
      "responseTime": 45,
      "lastChecked": "2026-03-12T23:04:00.000Z"
    },
    {
      "name": "analytics",
      "status": "healthy",
      "responseTime": 12,
      "lastChecked": "2026-03-12T23:04:00.000Z"
    },
    {
      "name": "cache",
      "status": "healthy",
      "responseTime": 8,
      "lastChecked": "2026-03-12T23:04:00.000Z"
    }
  ],
  "rateLimit": {
    "remaining": 98,
    "resetAt": "2026-03-12T23:05:00.000Z"
  }
}
```

#### Rate Limiting
- Limited to 100 requests per minute
- Returns `429 Too Many Requests` when exceeded
- Includes rate limit headers in all responses

#### Response Headers
- `X-RateLimit-Limit`: 100
- `X-RateLimit-Remaining`: Current remaining requests
- `X-RateLimit-Reset`: Unix timestamp when limit resets
- `Retry-After`: Seconds to wait before retrying (on 429)
- `Cache-Control`: no-cache, no-store, must-revalidate

#### Mocked Services
The health check uses mock service responses for development. In production:
- Replace mock checks with actual network requests
- Implement real timeout handling
- Add actual connectivity checks
- Monitor response times

## Usage Examples

### Using the Health Endpoint

```bash
# Full health check
curl http://localhost:3000/api/health

# Lightweight health check (HEAD)
curl -I http://localhost:3000/api/health

# Check rate limit status
curl -v http://localhost:3000/api/health 2>&1 | grep "X-RateLimit"
```

### Using Rate Limiter in API Routes

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/rate-limiter';

export async function GET(request: NextRequest) {
  // Check rate limit
  const rateLimitCheck = checkRateLimit(request.headers, '/api/my-endpoint');

  // Return 429 if rate limited
  if (rateLimitCheck.response) {
    return rateLimitCheck.response;
  }

  // Your handler logic here
  return NextResponse.json({
    message: 'Success',
    remaining: rateLimitCheck.remaining,
  });
}
```

### Setting Custom Rate Limits

```typescript
import { getGlobalRateLimiter } from '@/lib/rate-limiter';

const limiter = getGlobalRateLimiter();

// Set custom limit for a new endpoint
limiter.setRouteLimit('/api/webhook', {
  requestsPerWindow: 50,
  windowSizeMs: 60 * 1000, // 1 minute
  maxBurstSize: 75, // Allow burst
});
```

## Rate Limiting Algorithm

The implementation uses a **token bucket algorithm** with:
- **Per-IP buckets**: Each IP gets its own token bucket
- **Global bucket**: All requests share a global bucket
- **Automatic refilling**: Tokens are added based on elapsed time
- **Burst support**: Clients can exceed the rate momentarily if tokens are available
- **Sliding window**: Uses elapsed time rather than fixed windows

### How It Works

1. Each IP and global counter maintains a bucket of tokens
2. Each request consumes 1 token (if available)
3. Tokens refill over time at the configured rate
4. If no tokens available, request is rejected with 429 status
5. The `Retry-After` header tells clients when to retry

## Performance Considerations

- **In-memory storage**: Buckets stored in memory (no external cache)
- **Cleanup**: Old IP buckets automatically removed after 30 minutes of inactivity
- **Scalability**: For production with multiple instances, consider using Redis
- **Overhead**: Minimal per-request overhead (~1ms per check)

## Production Recommendations

1. **Use External Cache**: Consider moving to Redis for distributed rate limiting:
   ```typescript
   // Example: Redis implementation
   const redis = await Redis.connect();
   const key = `rate-limit:${ip}`;
   const count = await redis.incr(key);
   await redis.expire(key, 60);
   ```

2. **Update Health Checks**: Replace mocked service checks with real checks:
   ```typescript
   const response = await fetch('https://api.coingecko.com/api/v3/ping', {
     signal: AbortSignal.timeout(5000),
   });
   ```

3. **Monitor Rate Limit Usage**: Track which IPs are hitting limits
   ```typescript
   if (!result.allowed) {
     logger.warn(`Rate limit exceeded for IP: ${ip}`);
     // Send to monitoring service
   }
   ```

4. **Dynamic Limits**: Adjust limits based on time of day or load
   ```typescript
   const isHighLoad = getCurrentLoad() > 80;
   const limit = isHighLoad ? 50 : 100; // Reduce during high load
   ```

5. **IP Whitelist**: Allow unlimited access for trusted services
   ```typescript
   const WHITELISTED_IPS = ['127.0.0.1', '::1'];
   if (WHITELISTED_IPS.includes(ip)) {
     return { allowed: true, remaining: Infinity };
   }
   ```

## Testing

### Test Rate Limiting

```typescript
import { RateLimiter } from '@/lib/rate-limiter';

const limiter = new RateLimiter({
  requestsPerWindow: 5,
  windowSizeMs: 1000,
});

// Make 6 requests
for (let i = 0; i < 6; i++) {
  const result = limiter.checkLimit('test-ip', '/api/test');
  console.log(`Request ${i + 1}:`, result.allowed); // 5th will be false
}
```

### Test Health Endpoint

```bash
# Test health endpoint
npm run dev

# In another terminal
curl http://localhost:3000/api/health | jq .

# Test rate limiting
for i in {1..110}; do
  curl -s http://localhost:3000/api/health > /dev/null
  echo "Request $i"
done
# 101st+ requests should return 429
```

## File Locations

- Rate Limiter: `/src/lib/rate-limiter.ts` (332 lines)
- Health Endpoint: `/src/app/api/health/route.ts` (211 lines)
- Documentation: `/RATE_LIMITER_IMPLEMENTATION.md`

## Related Files

- `/src/lib/api-helpers.ts` - Companion utilities for API requests
- `/src/lib/api-cache.ts` - Caching layer for API responses
- `/src/app/api/prices/route.ts` - Example API endpoint
