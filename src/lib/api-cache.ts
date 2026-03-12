/**
 * Advanced API Caching Layer
 * Provides in-memory LRU cache with TTL, stale-while-revalidate pattern,
 * cache tags, request deduplication, statistics tracking, and rate limiting
 */

// ── Types ──────────────────────────────────────────────────────────────────

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  expiresAt: number;
  staleAt: number;
  hits: number;
  tags?: string[];
  lastAccessTime?: number;
}

export interface CacheStats {
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

export interface RateLimitTracker {
  requestCount: number;
  lastResetTime: number;
  isBackingOff: boolean;
  backoffUntil: number;
}

export interface CacheOptions {
  ttlSeconds?: number;
  staleWhileRevalidateSeconds?: number;
  maxSizeBytes?: number;
  rateLimitRequests?: number;
  rateLimitWindowMs?: number;
  backoffMultiplier?: number;
  cleanupIntervalMs?: number;
}

export interface CacheItem<T> {
  key: string;
  data: T;
  entrySize: number;
}

export interface InFlightRequest {
  promise: Promise<unknown>;
  timestamp: number;
}

// ── Constants ──────────────────────────────────────────────────────────────

const DEFAULT_TTL_SECONDS = 60; // 1 minute default TTL
const DEFAULT_STALE_WHILE_REVALIDATE = 30; // 30 seconds stale window
const DEFAULT_MAX_SIZE_BYTES = 50 * 1024 * 1024; // 50MB default
const DEFAULT_RATE_LIMIT_REQUESTS = 1000;
const DEFAULT_RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const DEFAULT_BACKOFF_MULTIPLIER = 2;
const DEFAULT_CLEANUP_INTERVAL_MS = 30 * 1000; // 30 seconds

// ── ApiCache Class ────────────────────────────────────────────────────────

export class ApiCache {
  private cache = new Map<string, CacheEntry<unknown>>();
  private tagIndex = new Map<string, Set<string>>(); // Maps tags to cache keys
  private stats: CacheStats;
  private rateLimitTracker: RateLimitTracker;
  private options: Required<CacheOptions>;
  private currentSizeBytes = 0;
  private inFlightRequests = new Map<string, InFlightRequest>(); // For deduplication
  private cleanupTimer: NodeJS.Timeout | null = null;
  private urlHits = new Map<string, number>(); // Track URL hit counts

  constructor(options: CacheOptions = {}) {
    this.options = {
      ttlSeconds: options.ttlSeconds ?? DEFAULT_TTL_SECONDS,
      staleWhileRevalidateSeconds:
        options.staleWhileRevalidateSeconds ?? DEFAULT_STALE_WHILE_REVALIDATE,
      maxSizeBytes: options.maxSizeBytes ?? DEFAULT_MAX_SIZE_BYTES,
      rateLimitRequests:
        options.rateLimitRequests ?? DEFAULT_RATE_LIMIT_REQUESTS,
      rateLimitWindowMs: options.rateLimitWindowMs ?? DEFAULT_RATE_LIMIT_WINDOW_MS,
      backoffMultiplier:
        options.backoffMultiplier ?? DEFAULT_BACKOFF_MULTIPLIER,
      cleanupIntervalMs: options.cleanupIntervalMs ?? DEFAULT_CLEANUP_INTERVAL_MS,
    };

    this.stats = {
      hits: 0,
      misses: 0,
      evictions: 0,
      totalRequests: 0,
      hitRate: 0,
      currentSize: 0,
      maxSize: this.options.maxSizeBytes,
      mostRequestedUrls: [],
      averageEntrySize: 0,
    };

    this.rateLimitTracker = {
      requestCount: 0,
      lastResetTime: Date.now(),
      isBackingOff: false,
      backoffUntil: 0,
    };

    // Start automatic cleanup
    this.startCleanup();
  }

  /**
   * Get a value from the cache
   * Returns stale data if available when expired
   */
  get<T>(key: string): T | null {
    const entry = this.cache.get(key) as CacheEntry<T> | undefined;
    if (!entry) {
      this.recordMiss(key);
      return null;
    }

    const now = Date.now();

    // Data is fresh
    if (now < entry.expiresAt) {
      entry.hits++;
      entry.lastAccessTime = now;
      this.recordHit(key);
      return entry.data;
    }

    // Data is stale but within stale-while-revalidate window
    if (now < entry.staleAt) {
      entry.hits++;
      entry.lastAccessTime = now;
      this.recordHit(key);
      return entry.data;
    }

    // Data is too old, remove it
    this.removeEntry(key, entry);
    this.recordMiss(key);
    return null;
  }

  /**
   * Set a value in the cache with TTL
   */
  set<T>(key: string, data: T, tags?: string[]): void {
    const now = Date.now();
    const ttlMs = this.options.ttlSeconds * 1000;
    const staleWhileRevalidateMs =
      this.options.staleWhileRevalidateSeconds * 1000;

    // Remove old entry if it exists
    const existingEntry = this.cache.get(key);
    if (existingEntry) {
      this.currentSizeBytes -= this.estimateSize(existingEntry.data);
      // Remove old tags
      if (existingEntry.tags) {
        for (const tag of existingEntry.tags) {
          this.tagIndex.get(tag)?.delete(key);
        }
      }
    }

    // Create new entry
    const entry: CacheEntry<T> = {
      data,
      timestamp: now,
      expiresAt: now + ttlMs,
      staleAt: now + ttlMs + staleWhileRevalidateMs,
      hits: 0,
      tags,
      lastAccessTime: now,
    };

    const entrySize = this.estimateSize(data);

    // Check if adding this entry would exceed max size
    if (this.currentSizeBytes + entrySize > this.options.maxSizeBytes) {
      this.evictLRU();
    }

    this.cache.set(key, entry);
    this.currentSizeBytes += entrySize;
    this.stats.currentSize = this.currentSizeBytes;

    // Update tag index
    if (tags) {
      for (const tag of tags) {
        if (!this.tagIndex.has(tag)) {
          this.tagIndex.set(tag, new Set());
        }
        this.tagIndex.get(tag)?.add(key);
      }
    }
  }

  /**
   * Check if rate limit is hit
   */
  isRateLimited(): boolean {
    const now = Date.now();

    // Check if currently backing off
    if (this.rateLimitTracker.isBackingOff) {
      if (now >= this.rateLimitTracker.backoffUntil) {
        this.rateLimitTracker.isBackingOff = false;
        this.rateLimitTracker.requestCount = 0;
        this.rateLimitTracker.lastResetTime = now;
      } else {
        return true;
      }
    }

    // Reset counter if window has passed
    if (
      now - this.rateLimitTracker.lastResetTime >
      this.options.rateLimitWindowMs
    ) {
      this.rateLimitTracker.requestCount = 0;
      this.rateLimitTracker.lastResetTime = now;
    }

    return false;
  }

  /**
   * Track a request and check rate limits
   */
  trackRequest(): boolean {
    if (this.isRateLimited()) {
      return false;
    }

    this.rateLimitTracker.requestCount++;

    // Check if we've exceeded the limit
    if (
      this.rateLimitTracker.requestCount >
      this.options.rateLimitRequests
    ) {
      this.rateLimitTracker.isBackingOff = true;
      this.rateLimitTracker.backoffUntil =
        Date.now() + this.options.rateLimitWindowMs;
      return false;
    }

    return true;
  }

  /**
   * Invalidate cache entries by tag
   */
  invalidateByTag(tag: string): number {
    const keys = this.tagIndex.get(tag);
    if (!keys) return 0;

    let count = 0;
    for (const key of keys) {
      const entry = this.cache.get(key);
      if (entry) {
        this.removeEntry(key, entry);
        count++;
      }
    }

    this.tagIndex.delete(tag);
    return count;
  }

  /**
   * Clear a single cache entry
   */
  delete(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry) return false;

    this.removeEntry(key, entry);
    return true;
  }

  /**
   * Clear all cache entries
   */
  clear(): void {
    this.cache.clear();
    this.currentSizeBytes = 0;
    this.stats.currentSize = 0;
  }

  /**
   * Get cache statistics
   */
  getStats(): CacheStats {
    const totalRequests = this.stats.hits + this.stats.misses;
    const hitRate = totalRequests > 0 ? this.stats.hits / totalRequests : 0;
    const entryCount = this.cache.size;
    const averageSize = entryCount > 0 ? this.currentSizeBytes / entryCount : 0;

    // Get top 10 most requested URLs
    const sortedUrls = Array.from(this.urlHits.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([url, hits]) => ({ url, hits }));

    return {
      ...this.stats,
      totalRequests,
      hitRate: parseFloat(hitRate.toFixed(4)),
      mostRequestedUrls: sortedUrls,
      averageEntrySize: parseFloat(averageSize.toFixed(2)),
    };
  }

  /**
   * Get all cache keys
   */
  keys(): string[] {
    return Array.from(this.cache.keys());
  }

  /**
   * Get cache size info
   */
  getSizeInfo() {
    return {
      currentSizeBytes: this.currentSizeBytes,
      maxSizeBytes: this.options.maxSizeBytes,
      percentageUsed: parseFloat(
        ((this.currentSizeBytes / this.options.maxSizeBytes) * 100).toFixed(2)
      ),
      entryCount: this.cache.size,
    };
  }

  /**
   * Get rate limit info
   */
  getRateLimitInfo() {
    return {
      isBackingOff: this.rateLimitTracker.isBackingOff,
      requestCount: this.rateLimitTracker.requestCount,
      rateLimitRequests: this.options.rateLimitRequests,
      backoffUntil: this.rateLimitTracker.backoffUntil,
    };
  }

  /**
   * Wait for an in-flight request or execute a new one
   * Deduplicates concurrent requests for the same URL
   */
  async getOrFetch<T>(
    key: string,
    fetcher: () => Promise<T>,
  ): Promise<T> {
    // Check if there's already an in-flight request
    const inFlight = this.inFlightRequests.get(key);
    if (inFlight) {
      return inFlight.promise as Promise<T>;
    }

    // Create new request
    const promise = fetcher();
    this.inFlightRequests.set(key, {
      promise,
      timestamp: Date.now(),
    });

    try {
      const result = await promise;
      return result;
    } finally {
      // Remove from in-flight after completion
      this.inFlightRequests.delete(key);
    }
  }

  /**
   * Clean up expired and in-flight entries
   */
  private cleanup(): void {
    const now = Date.now();
    const keysToDelete: string[] = [];

    // Find expired entries
    for (const [key, entry] of this.cache.entries()) {
      if (now > entry.staleAt) {
        keysToDelete.push(key);
      }
    }

    // Remove expired entries
    for (const key of keysToDelete) {
      const entry = this.cache.get(key);
      if (entry) {
        this.removeEntry(key, entry);
      }
    }

    // Clean up stale in-flight requests (older than 5 minutes)
    const inFlightTimeout = 5 * 60 * 1000;
    for (const [key, request] of this.inFlightRequests.entries()) {
      if (now - request.timestamp > inFlightTimeout) {
        this.inFlightRequests.delete(key);
      }
    }
  }

  /**
   * Start automatic cleanup timer
   */
  private startCleanup(): void {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
    }

    this.cleanupTimer = setInterval(() => {
      this.cleanup();
    }, this.options.cleanupIntervalMs);
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

  private recordHit(url: string): void {
    this.stats.hits++;
    this.urlHits.set(url, (this.urlHits.get(url) ?? 0) + 1);
  }

  private recordMiss(url: string): void {
    this.stats.misses++;
  }

  private removeEntry(key: string, entry: CacheEntry<unknown>): void {
    this.currentSizeBytes -= this.estimateSize(entry.data);
    this.stats.currentSize = this.currentSizeBytes;

    // Remove from tag index
    if (entry.tags) {
      for (const tag of entry.tags) {
        this.tagIndex.get(tag)?.delete(key);
        if (this.tagIndex.get(tag)?.size === 0) {
          this.tagIndex.delete(tag);
        }
      }
    }

    this.cache.delete(key);
  }

  /**
   * Estimate the size of a value in bytes
   * Used for memory management
   */
  private estimateSize(value: unknown): number {
    try {
      const json = JSON.stringify(value);
      return new Blob([json]).size;
    } catch {
      return 100; // Fallback estimate
    }
  }

  /**
   * Remove least recently used entry
   */
  private evictLRU(): void {
    let lruKey: string | null = null;
    let lruScore = -Infinity;

    for (const [key, entry] of this.cache.entries()) {
      // Score based on: hits (higher is better) and access time (more recent is better)
      // We want to evict entries with low hits and old access times
      const score = entry.hits - ((Date.now() - (entry.lastAccessTime ?? entry.timestamp)) / 1000);
      if (score > lruScore) {
        // This finds the entry with the LOWEST score (least valuable)
        lruScore = score;
        lruKey = key;
      }
    }

    if (lruKey) {
      const entry = this.cache.get(lruKey);
      if (entry) {
        this.removeEntry(lruKey, entry);
        this.stats.evictions++;
      }
    }
  }
}

// ── Singleton Instance ─────────────────────────────────────────────────────

// Global cache instance for the application
let globalCache: ApiCache | null = null;

/**
 * Get or create the global cache instance
 * Configured with reasonable defaults for API caching
 */
export function getGlobalCache(): ApiCache {
  if (!globalCache) {
    globalCache = new ApiCache({
      ttlSeconds: 60, // 1 minute default TTL for API data
      staleWhileRevalidateSeconds: 30, // 30 seconds stale window
      maxSizeBytes: 50 * 1024 * 1024, // 50MB cache
      rateLimitRequests: 1000, // Allow 1000 requests
      rateLimitWindowMs: 60 * 1000, // Per minute
      backoffMultiplier: 2,
    });
  }
  return globalCache;
}

/**
 * Reset the global cache instance (useful for testing)
 */
export function resetGlobalCache(): void {
  if (globalCache) {
    globalCache.clear();
  }
  globalCache = null;
}

// ── Utility function for wrapping async API calls ──────────────────────────

/**
 * Wraps an async API call with caching logic
 * Handles stale-while-revalidate pattern and rate limiting
 */
export async function withCache<T>(
  key: string,
  fetcher: () => Promise<T>,
  cache?: ApiCache,
  options?: CacheOptions
): Promise<T> {
  const cacheInstance = cache ?? getGlobalCache();

  // Check for cached data
  const cachedData = cacheInstance.get<T>(key);
  if (cachedData !== null) {
    return cachedData;
  }

  // Check rate limits
  if (!cacheInstance.trackRequest()) {
    // If rate limited and we have stale data, return it
    const staleData = cacheInstance.get<T>(key);
    if (staleData !== null) {
      return staleData;
    }
    throw new Error("Rate limited and no cached data available");
  }

  // Fetch fresh data
  const freshData = await fetcher();
  cacheInstance.set(key, freshData);
  return freshData;
}
