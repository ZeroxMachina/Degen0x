# Quick Start: Rate Limiter & Health Check

## Endpoints Available

### Health Check Endpoint
```
GET /api/health
HEAD /api/health
```

Returns API status, uptime, version, and service health checks.

**Example:**
```bash
curl http://localhost:3000/api/health
```

**Response:**
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
    }
  ],
  "rateLimit": {
    "remaining": 98,
    "resetAt": "2026-03-12T23:05:00.000Z"
  }
}
```

## Protecting Your API Routes

### Step 1: Import the Rate Limiter
```typescript
import { checkRateLimit } from '@/lib/rate-limiter';
import { NextRequest, NextResponse } from 'next/server';
```

### Step 2: Add Rate Limiting Check
```typescript
export async function GET(request: NextRequest) {
  // Check rate limit for this endpoint
  const rateLimitCheck = checkRateLimit(request.headers, '/api/my-endpoint');

  // If rate limited, return 429
  if (rateLimitCheck.response) {
    return rateLimitCheck.response;
  }

  // Your endpoint logic here
  return NextResponse.json({ data: 'success' });
}
```

## Default Rate Limits

| Endpoint | Limit | Window |
|----------|-------|--------|
| Global | 1000 req | 1 min |
| `/api/prices` | 200 req | 1 min |
| `/api/trending` | 150 req | 1 min |
| `/api/fear-greed` | 100 req | 1 min |
| `/api/health` | 100 req | 1 min |

## Custom Rate Limits

```typescript
import { getGlobalRateLimiter } from '@/lib/rate-limiter';

const limiter = getGlobalRateLimiter();

// Set custom limit for your endpoint
limiter.setRouteLimit('/api/webhook', {
  requestsPerWindow: 50,
  windowSizeMs: 60 * 1000, // 1 minute
  maxBurstSize: 75, // Allow burst up to 75
});
```

## Rate Limit Response Headers

All endpoints return these headers:

```
X-RateLimit-Limit: 100          # Total limit
X-RateLimit-Remaining: 95       # Requests remaining
X-RateLimit-Reset: 1678707900   # Unix timestamp
Retry-After: 60                 # Seconds to wait (only on 429)
```

## 429 Too Many Requests Response

When a client exceeds the rate limit:

**Status Code:** 429

**Body:**
```json
{
  "error": "Too Many Requests",
  "message": "Rate limit exceeded",
  "retryAfter": 60,
  "resetAt": "2026-03-12T23:05:00.000Z"
}
```

## Health Check Status Levels

- **healthy (200)**: All services operational
- **degraded (200)**: Some services slow or partially operational
- **unhealthy (503)**: Critical services down

## Monitoring

### Check Rate Limit Status
```bash
curl -I http://localhost:3000/api/health
```

### View Current Uptime
```bash
curl http://localhost:3000/api/health | jq '.uptime'
```

### Monitor Service Health
```bash
curl http://localhost:3000/api/health | jq '.services'
```

## Common Issues

### "Rate limit exceeded" on every request
- Check if you're hitting the global limit (1000/min)
- Check if your IP-specific limit is exceeded
- Wait for the `Retry-After` period

### Health check returns 503
- One or more services may be down
- Check the `services` array for details
- Review service-specific response times

### All endpoints showing degraded
- Check network connectivity
- Verify service endpoints are accessible
- Review logs for timeout errors

## Testing Rate Limiting

```bash
# Make 101 requests quickly (100 is the limit for /api/health)
for i in {1..101}; do
  curl -s http://localhost:3000/api/health -w "\n%{http_code}\n"
done

# Last request should return 429
```

## Files Modified/Created

- ✅ `/src/lib/rate-limiter.ts` - Enhanced with helper functions
- ✅ `/src/app/api/health/route.ts` - New health check endpoint
- ✅ `/RATE_LIMITER_IMPLEMENTATION.md` - Full documentation
- ✅ `/QUICK_START_RATE_LIMITER.md` - This file

## Next Steps

1. Add rate limiting to existing API endpoints
2. Configure custom limits for your specific endpoints
3. Set up monitoring/alerts for rate limit violations
4. Replace mock service checks with real health checks
5. Consider moving to Redis for distributed rate limiting

## Support

For more details, see `RATE_LIMITER_IMPLEMENTATION.md`
