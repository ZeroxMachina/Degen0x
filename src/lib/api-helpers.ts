/**
 * API Helper Functions
 * Provides utilities for cached fetching, retry logic, circuit breaker, and timeout handling
 */

import { getGlobalCache } from './api-cache';
import { CacheOptions } from './api-cache';

// ── Types ──────────────────────────────────────────────────────────────────

export interface FetchOptions extends RequestInit {
  timeout?: number;
  retries?: number;
  retryDelayMs?: number;
  retryBackoffMultiplier?: number;
  tags?: string[];
  cacheOptions?: CacheOptions;
  circuitBreakerThreshold?: number;
}

export interface CircuitBreakerState {
  failures: number;
  lastFailureTime: number;
  state: 'closed' | 'open' | 'half-open';
}

// ── Constants ──────────────────────────────────────────────────────────────

const DEFAULT_TIMEOUT_MS = 10 * 1000; // 10 seconds
const DEFAULT_RETRIES = 3;
const DEFAULT_RETRY_DELAY_MS = 1000; // 1 second
const DEFAULT_RETRY_BACKOFF_MULTIPLIER = 2;
const CIRCUIT_BREAKER_THRESHOLD = 5; // Failures before opening
const CIRCUIT_BREAKER_RESET_MS = 60 * 1000; // 1 minute

// ── Circuit Breaker ────────────────────────────────────────────────────────

const circuitBreakers = new Map<string, CircuitBreakerState>();

function getCircuitBreakerState(url: string): CircuitBreakerState {
  if (!circuitBreakers.has(url)) {
    circuitBreakers.set(url, {
      failures: 0,
      lastFailureTime: 0,
      state: 'closed',
    });
  }
  return circuitBreakers.get(url)!;
}

function checkCircuitBreaker(url: string): boolean {
  const state = getCircuitBreakerState(url);
  const now = Date.now();

  // Try to reset if in open state and enough time has passed
  if (state.state === 'open') {
    if (now - state.lastFailureTime > CIRCUIT_BREAKER_RESET_MS) {
      state.state = 'half-open';
      state.failures = 0;
    } else {
      return false; // Circuit is open
    }
  }

  return true; // Circuit is closed or half-open
}

function recordCircuitBreakerSuccess(url: string): void {
  const state = getCircuitBreakerState(url);
  state.failures = 0;
  state.state = 'closed';
}

function recordCircuitBreakerFailure(url: string): void {
  const state = getCircuitBreakerState(url);
  state.failures++;
  state.lastFailureTime = Date.now();

  if (state.failures >= CIRCUIT_BREAKER_THRESHOLD) {
    state.state = 'open';
  }
}

// ── Timeout Promise ────────────────────────────────────────────────────────

function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(
        () => reject(new Error(`Request timeout after ${timeoutMs}ms`)),
        timeoutMs,
      ),
    ),
  ]);
}

// ── Retry Logic ────────────────────────────────────────────────────────────

async function fetchWithRetry(
  url: string,
  options: FetchOptions,
  retryCount = 0,
): Promise<Response> {
  const {
    timeout = DEFAULT_TIMEOUT_MS,
    retries = DEFAULT_RETRIES,
    retryDelayMs = DEFAULT_RETRY_DELAY_MS,
    retryBackoffMultiplier = DEFAULT_RETRY_BACKOFF_MULTIPLIER,
    ...fetchOptions
  } = options;

  try {
    // Check circuit breaker
    if (!checkCircuitBreaker(url)) {
      throw new Error(`Circuit breaker open for ${url}`);
    }

    // Fetch with timeout
    const response = await withTimeout(
      fetch(url, fetchOptions),
      timeout,
    );

    // Check if response is ok
    if (!response.ok) {
      // Retry on server errors (5xx) or specific client errors
      if (
        (response.status >= 500 || response.status === 408 || response.status === 429) &&
        retryCount < retries
      ) {
        recordCircuitBreakerFailure(url);
        const delayMs = retryDelayMs * Math.pow(retryBackoffMultiplier, retryCount);
        await new Promise(resolve => setTimeout(resolve, delayMs));
        return fetchWithRetry(url, options, retryCount + 1);
      }

      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    recordCircuitBreakerSuccess(url);
    return response;
  } catch (error) {
    // Retry on network errors
    if (retryCount < retries) {
      recordCircuitBreakerFailure(url);
      const delayMs = retryDelayMs * Math.pow(retryBackoffMultiplier, retryCount);
      await new Promise(resolve => setTimeout(resolve, delayMs));
      return fetchWithRetry(url, options, retryCount + 1);
    }

    recordCircuitBreakerFailure(url);
    throw error;
  }
}

// ── Main API ────────────────────────────────────────────────────────────────

/**
 * Fetch with automatic caching, retry logic, circuit breaker, and timeout
 */
export async function cachedFetch<T = unknown>(
  url: string,
  options: FetchOptions = {},
): Promise<T> {
  const cache = getGlobalCache();
  const {
    tags = [],
    cacheOptions = {},
    ...fetchOptions
  } = options;

  // Generate cache key from URL and request method
  const method = fetchOptions.method?.toUpperCase() ?? 'GET';
  const cacheKey = `${method} ${url}`;

  // Try to get from cache
  const cached = cache.get<T>(cacheKey);
  if (cached !== null) {
    return cached;
  }

  try {
    // Check if request is already in flight (deduplication)
    const response = await cache.getOrFetch(cacheKey, async () => {
      const res = await fetchWithRetry(url, fetchOptions);

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const contentType = res.headers.get('content-type') ?? '';
      let data: T;

      if (contentType.includes('application/json')) {
        data = await res.json();
      } else if (contentType.includes('text')) {
        data = (await res.text()) as T;
      } else {
        data = (await res.arrayBuffer()) as T;
      }

      return data;
    });

    // Cache the successful response
    cache.set(cacheKey, response, tags);

    return response;
  } catch (error) {
    // Try to return stale cache if available
    const staleData = cache.get<T>(cacheKey);
    if (staleData !== null) {
      console.warn(`Using stale cache for ${url}:`, error);
      return staleData;
    }

    throw error;
  }
}

/**
 * Fetch JSON data with caching and retry
 */
export async function cachedFetchJSON<T = unknown>(
  url: string,
  options: FetchOptions = {},
): Promise<T> {
  const { headers = {}, ...rest } = options;

  return cachedFetch<T>(url, {
    ...rest,
    headers: {
      ...headers,
      'Accept': 'application/json',
    },
  });
}

/**
 * Batch fetch multiple URLs with caching
 */
export async function cachedFetchBatch<T = unknown>(
  urls: string[],
  options: FetchOptions = {},
): Promise<T[]> {
  const promises = urls.map(url => cachedFetch<T>(url, options));
  return Promise.all(promises);
}

/**
 * Reset circuit breaker for a URL or all
 */
export function resetCircuitBreaker(url?: string): void {
  if (url) {
    const state = getCircuitBreakerState(url);
    state.state = 'closed';
    state.failures = 0;
    state.lastFailureTime = 0;
  } else {
    circuitBreakers.clear();
  }
}

/**
 * Get circuit breaker status
 */
export function getCircuitBreakerStatus(url: string): CircuitBreakerState {
  return { ...getCircuitBreakerState(url) };
}

/**
 * Get all circuit breaker states
 */
export function getAllCircuitBreakerStates(): Record<string, CircuitBreakerState> {
  const states: Record<string, CircuitBreakerState> = {};
  for (const [url, state] of circuitBreakers.entries()) {
    states[url] = { ...state };
  }
  return states;
}

/**
 * Invalidate cache by tags
 */
export function invalidateCacheByTags(tags: string[]): void {
  const cache = getGlobalCache();
  for (const tag of tags) {
    cache.invalidateByTag(tag);
  }
}

/**
 * Clear all cache and circuit breakers
 */
export function clearAll(): void {
  const cache = getGlobalCache();
  cache.clear();
  circuitBreakers.clear();
}
