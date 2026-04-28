# Rate Limiter Code Examples

## Table of Contents
1. [Health Check Endpoint Usage](#health-check-endpoint-usage)
2. [Protecting API Routes](#protecting-api-routes)
3. [Custom Rate Limits](#custom-rate-limits)
4. [Testing Rate Limiting](#testing-rate-limiting)
5. [Advanced Patterns](#advanced-patterns)

## Health Check Endpoint Usage

### Basic Health Check Request

```bash
# Full health check
curl http://localhost:3000/api/health

# Lightweight HEAD request (no body)
curl -I http://localhost:3000/api/health

# Pretty print the response
curl http://localhost:3000/api/health | jq .
```

### Check Health Status Only

```bash
curl http://localhost:3000/api/health | jq '.status'
# Output: "healthy"
```

### Check Service Health Details

```bash
curl http://localhost:3000/api/health | jq '.services'
# Output:
# [
#   {
#     "name": "coingecko-api",
#     "status": "healthy",
#     "responseTime": 45,
#     "lastChecked": "2026-03-12T23:04:00.000Z"
#   },
#   ...
# ]
```

### Check Application Uptime

```bash
curl http://localhost:3000/api/health | jq '.uptime'
# Output: 1234567890 (milliseconds since app start)

# Convert to human-readable format
curl http://localhost:3000/api/health | jq '.uptime / 1000 / 60 | floor' | xargs -I {} echo "Uptime: {} minutes"
```

### Monitor Rate Limit Status

```bash
curl -i http://localhost:3000/api/health 2>&1 | grep -E "X-RateLimit|Retry-After"
# Output:
# X-RateLimit-Limit: 100
# X-RateLimit-Remaining: 98
# X-RateLimit-Reset: 1678707900
```

## Protecting API Routes

### Simple Protection

```typescript
// src/app/api/my-endpoint/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/rate-limiter';

export async function GET(request: NextRequest) {
  // Check rate limit
  const rateLimitCheck = checkRateLimit(request.headers, '/api/my-endpoint');

  // Return 429 if rate limited
  if (rateLimitCheck.response) {
    return rateLimitCheck.response;
  }

  // Your handler logic
  return NextResponse.json({
    success: true,
    remaining: rateLimitCheck.remaining,
  });
}
```

### With Error Handling

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/rate-limiter';

export async function GET(request: NextRequest) {
  try {
    // Check rate limit first
    const rateLimitCheck = checkRateLimit(request.headers, '/api/data');
    if (rateLimitCheck.response) {
      return rateLimitCheck.response;
    }

    // Your handler logic
    const data = await fetchData();

    return NextResponse.json({
      data,
      headers: {
        'X-RateLimit-Remaining': rateLimitCheck.remaining.toString(),
      },
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
```

### POST Endpoint with Rate Limiting

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/rate-limiter';

export async function POST(request: NextRequest) {
  // Check rate limit on POST requests too
  const rateLimitCheck = checkRateLimit(request.headers, '/api/submit');
  if (rateLimitCheck.response) {
    return rateLimitCheck.response;
  }

  // Parse request body
  const body = await request.json();

  // Process request
  const result = await processSubmission(body);

  return NextResponse.json(result, {
    status: 201,
    headers: {
      'X-RateLimit-Remaining': rateLimitCheck.remaining.toString(),
    },
  });
}
```

## Custom Rate Limits

### Set Custom Limit for New Endpoint

```typescript
// Set up rate limits for a webhook endpoint
import { getGlobalRateLimiter } from '@/lib/rate-limiter';

const limiter = getGlobalRateLimiter();

// Allow 50 requests per minute, with burst up to 75
limiter.setRouteLimit('/api/webhook', {
  requestsPerWindow: 50,
  windowSizeMs: 60 * 1000, // 1 minute
  maxBurstSize: 75, // Allow burst of 75
});
```

### Set Different Limits for Different Routes

```typescript
import { getGlobalRateLimiter } from '@/lib/rate-limiter';

const limiter = getGlobalRateLimiter();

// Strict limit for authentication
limiter.setRouteLimit('/api/auth/login', {
  requestsPerWindow: 5,
  windowSizeMs: 60 * 1000,
  maxBurstSize: 10,
});

// Moderate limit for data fetching
limiter.setRouteLimit('/api/data/fetch', {
  requestsPerWindow: 100,
  windowSizeMs: 60 * 1000,
  maxBurstSize: 150,
});

// Generous limit for public read-only endpoints
limiter.setRouteLimit('/api/public/info', {
  requestsPerWindow: 500,
  windowSizeMs: 60 * 1000,
  maxBurstSize: 750,
});
```

### Rate Limit per Hour Instead of Minute

```typescript
import { getGlobalRateLimiter } from '@/lib/rate-limiter';

const limiter = getGlobalRateLimiter();

// 1000 requests per hour
limiter.setRouteLimit('/api/expensive-operation', {
  requestsPerWindow: 1000,
  windowSizeMs: 60 * 60 * 1000, // 1 hour
  maxBurstSize: 1500,
});
```

## Testing Rate Limiting

### Manual Testing with curl

```bash
# Test 101 requests (100 is the limit for /api/health)
for i in {1..101}; do
  response=$(curl -s -w "\n%{http_code}" http://localhost:3000/api/health)
  status=$(echo "$response" | tail -n 1)
  echo "Request $i: HTTP $status"
done

# Last few requests should show 429
```

### Testing with a Script

```bash
#!/bin/bash
# test-rate-limit.sh

echo "Testing rate limiting for /api/health (100 req/min limit)"
echo ""

success=0
rate_limited=0

for i in {1..110}; do
  response=$(curl -s -w "\n%{http_code}" http://localhost:3000/api/health)
  status=$(echo "$response" | tail -n 1)

  if [ "$status" = "200" ]; then
    ((success++))
  elif [ "$status" = "429" ]; then
    ((rate_limited++))
  fi

  echo "Request $i: $status"
done

echo ""
echo "Summary:"
echo "  Success (200): $success"
echo "  Rate Limited (429): $rate_limited"
```

### Testing Individual Routes

```bash
#!/bin/bash
# test-endpoint.sh - Test a specific endpoint

ENDPOINT=${1:-/api/health}
LIMIT=${2:-100}

echo "Testing $ENDPOINT (limit: $LIMIT requests/minute)"

for i in $(seq 1 $((LIMIT + 10))); do
  curl -s -o /dev/null -w "Request %{redirect_url} - Status: %{http_code}\n" \
    http://localhost:3000$ENDPOINT
done
```

### Using curl with Rate Limit Headers

```bash
# Test and capture rate limit info
curl -v http://localhost:3000/api/health 2>&1 | grep -E "X-RateLimit|Retry-After|^< HTTP"

# Example output:
# < HTTP/1.1 200 OK
# < X-RateLimit-Limit: 100
# < X-RateLimit-Remaining: 99
# < X-RateLimit-Reset: 1678707900
```

## Advanced Patterns

### IP-Based Rate Limiting Check

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getClientIP } from '@/lib/rate-limiter';

export async function GET(request: NextRequest) {
  const ip = getClientIP(request.headers);
  console.log(`Request from IP: ${ip}`);

  const rateLimitCheck = checkRateLimit(request.headers, '/api/user-data');
  if (rateLimitCheck.response) {
    console.warn(`Rate limit exceeded for IP: ${ip}`);
    return rateLimitCheck.response;
  }

  return NextResponse.json({
    yourIP: ip,
    data: 'success',
  });
}
```

### Tiered Rate Limiting Based on User Type

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getGlobalRateLimiter } from '@/lib/rate-limiter';

export async function GET(request: NextRequest) {
  // Get user tier from auth/session
  const userTier = getUserTier(request);

  // Select appropriate rate limit
  let route = '/api/data';
  if (userTier === 'premium') {
    route = '/api/data-premium';
  } else if (userTier === 'enterprise') {
    route = '/api/data-enterprise';
  }

  const rateLimitCheck = checkRateLimit(request.headers, route);
  if (rateLimitCheck.response) {
    return rateLimitCheck.response;
  }

  return NextResponse.json({
    tier: userTier,
    remaining: rateLimitCheck.remaining,
  });
}
```

### Configure Different Limits for User Tiers

```typescript
import { getGlobalRateLimiter } from '@/lib/rate-limiter';

const limiter = getGlobalRateLimiter();

// Free tier: 100 requests/minute
limiter.setRouteLimit('/api/data', {
  requestsPerWindow: 100,
  windowSizeMs: 60 * 1000,
  maxBurstSize: 150,
});

// Premium tier: 1000 requests/minute
limiter.setRouteLimit('/api/data-premium', {
  requestsPerWindow: 1000,
  windowSizeMs: 60 * 1000,
  maxBurstSize: 1500,
});

// Enterprise tier: 10000 requests/minute
limiter.setRouteLimit('/api/data-enterprise', {
  requestsPerWindow: 10000,
  windowSizeMs: 60 * 1000,
  maxBurstSize: 15000,
});
```

### Logging Rate Limit Events

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/rate-limiter';

export async function GET(request: NextRequest) {
  const rateLimitCheck = checkRateLimit(request.headers, '/api/critical');

  if (rateLimitCheck.response) {
    // Log rate limit violation
    console.warn('Rate limit violation:', {
      timestamp: new Date().toISOString(),
      route: '/api/critical',
      remaining: rateLimitCheck.remaining,
      resetAt: new Date(rateLimitCheck.resetAt).toISOString(),
    });

    // Send to monitoring service
    // await sendToMonitoring({ event: 'rate_limit_exceeded' });

    return rateLimitCheck.response;
  }

  return NextResponse.json({ success: true });
}
```

### Combine Rate Limiting with Caching

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/rate-limiter';

const cache = new Map<string, { data: unknown; timestamp: number }>();

export async function GET(request: NextRequest) {
  // Check rate limit
  const rateLimitCheck = checkRateLimit(request.headers, '/api/expensive');
  if (rateLimitCheck.response) {
    return rateLimitCheck.response;
  }

  // Check cache
  const cached = cache.get('expensive-data');
  if (cached && Date.now() - cached.timestamp < 60000) {
    return NextResponse.json(cached.data, {
      headers: { 'X-Cache': 'HIT' },
    });
  }

  // Fetch and cache
  const data = await expensiveOperation();
  cache.set('expensive-data', { data, timestamp: Date.now() });

  return NextResponse.json(data, {
    headers: { 'X-Cache': 'MISS' },
  });
}
```

### Rate Limiting Middleware Pattern

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/rate-limiter';

// Reusable middleware function
export function withRateLimit(route: string) {
  return function middleware(handler: (req: NextRequest) => Promise<NextResponse>) {
    return async (request: NextRequest) => {
      const rateLimitCheck = checkRateLimit(request.headers, route);
      if (rateLimitCheck.response) {
        return rateLimitCheck.response;
      }
      return handler(request);
    };
  };
}

// Usage
const protectedHandler = withRateLimit('/api/protected')(async (request) => {
  return NextResponse.json({ data: 'success' });
});

export const GET = protectedHandler;
```

## Performance Tips

### 1. Check Rate Limit Early
Always check rate limit as the first operation in your handler:

```typescript
export async function GET(request: NextRequest) {
  // ✅ Check rate limit first (fails fast)
  const rateLimitCheck = checkRateLimit(request.headers, '/api/endpoint');
  if (rateLimitCheck.response) return rateLimitCheck.response;

  // Then do expensive operations
  const data = await expensiveOperation();
  return NextResponse.json(data);
}
```

### 2. Reuse Rate Limit Check Object
Store the rate limit check result and reuse it:

```typescript
export async function GET(request: NextRequest) {
  const rateLimitCheck = checkRateLimit(request.headers, '/api/endpoint');
  if (rateLimitCheck.response) return rateLimitCheck.response;

  return NextResponse.json(
    { data: 'success' },
    {
      headers: {
        'X-RateLimit-Remaining': rateLimitCheck.remaining.toString(),
        'X-RateLimit-Reset': Math.ceil(rateLimitCheck.resetAt / 1000).toString(),
      },
    }
  );
}
```

### 3. Use Appropriate Window Sizes
Choose window size based on expected usage pattern:

```typescript
// High-frequency operations (burst protection)
limiter.setRouteLimit('/api/search', {
  requestsPerWindow: 100,
  windowSizeMs: 1000, // 1 second window
  maxBurstSize: 150,
});

// Normal operations
limiter.setRouteLimit('/api/data', {
  requestsPerWindow: 100,
  windowSizeMs: 60 * 1000, // 1 minute window
  maxBurstSize: 150,
});

// Background jobs
limiter.setRouteLimit('/api/batch-process', {
  requestsPerWindow: 10,
  windowSizeMs: 60 * 60 * 1000, // 1 hour window
  maxBurstSize: 15,
});
```
