/**
 * Health Check Endpoint
 * Returns API status, uptime, version, and dependency health
 *
 * Rate Limited: 100 requests per minute
 * Response: JSON with status, timestamp, version, uptime, and service health checks
 */

import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/rate-limiter';

// Application start time (in production, this would be set at app startup)
const APP_START_TIME = Date.now();

// Package version - in production, read from package.json
const APP_VERSION = '1.0.0';

/**
 * Interface for service health check
 */
interface ServiceHealth {
  name: string;
  status: 'healthy' | 'degraded' | 'unhealthy';
  responseTime: number;
  lastChecked: string;
}

/**
 * Interface for health check response
 */
interface HealthCheckResponse {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string;
  version: string;
  uptime: number; // in milliseconds
  services: ServiceHealth[];
  rateLimit: {
    remaining: number;
    resetAt: string;
  };
}

/**
 * Mock service health check
 * In production, these would make actual requests to your services
 */
async function checkServiceHealth(name: string, url?: string): Promise<ServiceHealth> {
  const startTime = Date.now();

  try {
    // Mock health check - in production, replace with actual service checks
    // Example: const response = await fetch(url, { timeout: 5000 });

    // Simulate service checks with mock data
    let status: 'healthy' | 'degraded' | 'unhealthy' = 'healthy';
    let responseTime = Math.random() * 100; // Simulate 0-100ms response time

    // Mock some services as occasionally degraded
    if (name === 'coingecko-api' && Math.random() > 0.8) {
      status = 'degraded';
      responseTime = Math.random() * 500 + 200; // Slower response
    }

    // Simulate timeout for a service (very rare, 5% chance)
    if (name === 'analytics' && Math.random() > 0.95) {
      status = 'unhealthy';
      responseTime = 5000;
    }

    return {
      name,
      status,
      responseTime: Math.round(responseTime),
      lastChecked: new Date().toISOString(),
    };
  } catch (error) {
    return {
      name,
      status: 'unhealthy',
      responseTime: Date.now() - startTime,
      lastChecked: new Date().toISOString(),
    };
  }
}

/**
 * Determine overall health status based on individual service health
 */
function getOverallStatus(services: ServiceHealth[]): 'healthy' | 'degraded' | 'unhealthy' {
  const unhealthyCount = services.filter(s => s.status === 'unhealthy').length;
  const degradedCount = services.filter(s => s.status === 'degraded').length;

  if (unhealthyCount > 0) {
    return 'unhealthy';
  }

  if (degradedCount > 0) {
    return 'degraded';
  }

  return 'healthy';
}

/**
 * GET /api/health
 * Health check endpoint with service status
 */
export async function GET(request: NextRequest) {
  // Apply rate limiting (100 requests per minute)
  const rateLimitCheck = checkRateLimit(request.headers, '/api/health');

  if (rateLimitCheck.response) {
    return rateLimitCheck.response;
  }

  try {
    // Calculate uptime
    const uptime = Date.now() - APP_START_TIME;

    // Check health of key services
    const [coingeckoHealth, analyticsHealth, cacheHealth] = await Promise.all([
      checkServiceHealth('coingecko-api', 'https://api.coingecko.com/api/v3/ping'),
      checkServiceHealth('analytics', 'https://analytics.example.com/health'),
      checkServiceHealth('cache', undefined), // Local cache check
    ]);

    const services: ServiceHealth[] = [
      coingeckoHealth,
      analyticsHealth,
      cacheHealth,
    ];

    const overallStatus = getOverallStatus(services);

    const response: HealthCheckResponse = {
      status: overallStatus,
      timestamp: new Date().toISOString(),
      version: APP_VERSION,
      uptime,
      services,
      rateLimit: {
        remaining: rateLimitCheck.remaining,
        resetAt: new Date(rateLimitCheck.resetAt).toISOString(),
      },
    };

    // Return appropriate HTTP status based on health
    const statusCode = overallStatus === 'healthy' ? 200 : overallStatus === 'degraded' ? 200 : 503;

    return NextResponse.json(response, {
      status: statusCode,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'X-RateLimit-Limit': '100',
        'X-RateLimit-Remaining': rateLimitCheck.remaining.toString(),
        'X-RateLimit-Reset': Math.ceil(rateLimitCheck.resetAt / 1000).toString(),
      },
    });
  } catch (error) {
    console.error('Health check failed:', error);

    const errorResponse: HealthCheckResponse = {
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      version: APP_VERSION,
      uptime: Date.now() - APP_START_TIME,
      services: [],
      rateLimit: {
        remaining: rateLimitCheck.remaining,
        resetAt: new Date(rateLimitCheck.resetAt).toISOString(),
      },
    };

    return NextResponse.json(errorResponse, {
      status: 503,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'X-RateLimit-Remaining': rateLimitCheck.remaining.toString(),
        'X-RateLimit-Reset': Math.ceil(rateLimitCheck.resetAt / 1000).toString(),
      },
    });
  }
}

/**
 * HEAD /api/health
 * Quick health check without service details
 */
export async function HEAD(request: NextRequest) {
  // Apply rate limiting
  const rateLimitCheck = checkRateLimit(request.headers, '/api/health');

  if (rateLimitCheck.response) {
    return rateLimitCheck.response;
  }

  // Return 200 with headers only
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'X-RateLimit-Remaining': rateLimitCheck.remaining.toString(),
      'X-RateLimit-Reset': Math.ceil(rateLimitCheck.resetAt / 1000).toString(),
    },
  });
}
