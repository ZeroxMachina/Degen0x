/**
 * Advanced Rate Limiter
 * Implements token bucket algorithm with per-IP and global rate limiting
 * Supports configurable limits per route
 */

// ── Types ──────────────────────────────────────────────────────────────────

export interface RateLimitConfig {
  requestsPerWindow: number;
  windowSizeMs: number;
  maxBurstSize?: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
  retryAfterMs?: number;
}

export interface TokenBucket {
  tokens: number;
  lastRefillTime: number;
  refillRate: number;
}

// ── Constants ──────────────────────────────────────────────────────────────

const DEFAULT_WINDOW_SIZE_MS = 60 * 1000; // 1 minute
const DEFAULT_REQUESTS_PER_WINDOW = 100;
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes

// ── RateLimiter Class ──────────────────────────────────────────────────────

export class RateLimiter {
  private globalBucket: TokenBucket;
  private ipBuckets = new Map<string, TokenBucket>();
  private routeLimits = new Map<string, RateLimitConfig>();
  private globalConfig: RateLimitConfig;
  private cleanupTimer: NodeJS.Timeout | null = null;

  constructor(globalConfig: RateLimitConfig = {
    requestsPerWindow: DEFAULT_REQUESTS_PER_WINDOW,
    windowSizeMs: DEFAULT_WINDOW_SIZE_MS,
  }) {
    this.globalConfig = {
      requestsPerWindow: globalConfig.requestsPerWindow,
      windowSizeMs: globalConfig.windowSizeMs,
      maxBurstSize: globalConfig.maxBurstSize ?? globalConfig.requestsPerWindow,
    };

    this.globalBucket = this.createBucket(this.globalConfig);
    this.startCleanup();
  }

  /**
   * Set custom rate limit for a specific route
   */
  setRouteLimit(route: string, config: RateLimitConfig): void {
    this.routeLimits.set(route, {
      requestsPerWindow: config.requestsPerWindow,
      windowSizeMs: config.windowSizeMs,
      maxBurstSize: config.maxBurstSize ?? config.requestsPerWindow,
    });
  }

  /**
   * Check and consume tokens for a request
   */
  checkLimit(
    ip: string,
    route?: string,
  ): RateLimitResult {
    const now = Date.now();

    // Get the config for this route, or use global config
    const config = route && this.routeLimits.has(route)
      ? this.routeLimits.get(route)!
      : this.globalConfig;

    // Refill global bucket
    this.refillBucket(this.globalBucket, config, now);

    // Get or create IP bucket
    let ipBucket = this.ipBuckets.get(ip);
    if (!ipBucket) {
      ipBucket = this.createBucket(config);
      this.ipBuckets.set(ip, ipBucket);
    }

    // Refill IP bucket
    this.refillBucket(ipBucket, config, now);

    // Check if both global and IP limits allow the request
    const globalAllowed = this.globalBucket.tokens >= 1;
    const ipAllowed = ipBucket.tokens >= 1;

    const allowed = globalAllowed && ipAllowed;

    if (allowed) {
      this.globalBucket.tokens--;
      ipBucket.tokens--;
    }

    const resetAtGlobal = this.globalBucket.lastRefillTime + this.globalConfig.windowSizeMs;
    const resetAtIP = ipBucket.lastRefillTime + config.windowSizeMs;
    const resetAt = Math.max(resetAtGlobal, resetAtIP);

    const remainingGlobal = Math.max(0, Math.floor(this.globalBucket.tokens));
    const remainingIP = Math.max(0, Math.floor(ipBucket.tokens));
    const remaining = Math.min(remainingGlobal, remainingIP);

    const retryAfterMs = allowed ? undefined : Math.max(
      resetAtGlobal - now,
      resetAtIP - now,
    );

    return {
      allowed,
      remaining,
      resetAt,
      retryAfterMs,
    };
  }

  /**
   * Reset limit for a specific IP
   */
  resetIP(ip: string): void {
    this.ipBuckets.delete(ip);
  }

  /**
   * Reset all IP limits
   */
  resetAll(): void {
    this.ipBuckets.clear();
    this.globalBucket = this.createBucket(this.globalConfig);
  }

  /**
   * Get current status of IP bucket
   */
  getIPStatus(ip: string): TokenBucket | null {
    return this.ipBuckets.get(ip) ?? null;
  }

  /**
   * Get global bucket status
   */
  getGlobalStatus(): TokenBucket {
    return {
      tokens: this.globalBucket.tokens,
      lastRefillTime: this.globalBucket.lastRefillTime,
      refillRate: this.globalBucket.refillRate,
    };
  }

  /**
   * Stop cleanup timer
   */
  stopCleanup(): void {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
      this.cleanupTimer = null;
    }
  }

  // ── Private methods ────────────────────────────────────────────────────

  private createBucket(config: RateLimitConfig): TokenBucket {
    return {
      tokens: config.maxBurstSize ?? config.requestsPerWindow,
      lastRefillTime: Date.now(),
      refillRate: config.requestsPerWindow / (config.windowSizeMs / 1000),
    };
  }

  private refillBucket(bucket: TokenBucket, config: RateLimitConfig, now: number): void {
    const timePassed = now - bucket.lastRefillTime;
    const tokensToAdd = (timePassed / 1000) * bucket.refillRate;

    bucket.tokens = Math.min(
      config.maxBurstSize ?? config.requestsPerWindow,
      bucket.tokens + tokensToAdd,
    );
    bucket.lastRefillTime = now;
  }

  private startCleanup(): void {
    this.cleanupTimer = setInterval(() => {
      const now = Date.now();
      const maxBucketAge = 30 * 60 * 1000; // 30 minutes

      // Remove old IP buckets
      for (const [ip, bucket] of this.ipBuckets.entries()) {
        if (now - bucket.lastRefillTime > maxBucketAge) {
          this.ipBuckets.delete(ip);
        }
      }
    }, CLEANUP_INTERVAL_MS);
  }
}

// ── Singleton Instance ─────────────────────────────────────────────────────

let globalRateLimiter: RateLimiter | null = null;

/**
 * Get or create the global rate limiter instance
 */
export function getGlobalRateLimiter(): RateLimiter {
  if (!globalRateLimiter) {
    globalRateLimiter = new RateLimiter({
      requestsPerWindow: 1000,
      windowSizeMs: 60 * 1000, // 1 minute
      maxBurstSize: 1500, // Allow burst of 1.5x the window limit
    });

    // Set common route limits
    globalRateLimiter.setRouteLimit("/api/prices", {
      requestsPerWindow: 200,
      windowSizeMs: 60 * 1000,
      maxBurstSize: 250,
    });

    globalRateLimiter.setRouteLimit("/api/trending", {
      requestsPerWindow: 150,
      windowSizeMs: 60 * 1000,
      maxBurstSize: 200,
    });

    globalRateLimiter.setRouteLimit("/api/fear-greed", {
      requestsPerWindow: 100,
      windowSizeMs: 60 * 1000,
      maxBurstSize: 150,
    });
  }

  return globalRateLimiter;
}

/**
 * Reset the global rate limiter instance
 */
export function resetGlobalRateLimiter(): void {
  if (globalRateLimiter) {
    globalRateLimiter.stopCleanup();
  }
  globalRateLimiter = null;
}
