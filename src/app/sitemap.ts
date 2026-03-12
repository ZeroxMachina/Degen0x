import { MetadataRoute } from "next";
import { PUBLISHED_PAGES } from "@/lib/published-pages";
import { SITE_URL } from "@/lib/constants";

/**
 * SEO Sitemap for degen0x
 * ─────────────────────────────────────────────────────────────────
 * Generates a dynamic sitemap that includes all published pages with:
 * - Appropriate priority scores based on page type
 * - Dynamic lastModified dates (updates when pages change)
 * - Smart changeFrequency recommendations
 * - Proper URL formatting and validation
 *
 * Only includes published (indexable) pages from PUBLISHED_PAGES.
 * As new pages are added to PUBLISHED_PAGES, the sitemap auto-updates.
 *
 * Search engines can fetch this at: /sitemap.xml
 * ─────────────────────────────────────────────────────────────────
 */

export const dynamic = "force-static";
export const revalidate = 86400; // Revalidate daily (24 hours)

/**
 * Determines priority based on page path and type.
 * Higher priority pages are crawled more frequently by search engines.
 */
function getPriority(path: string): number {
  // Homepage - highest priority
  if (path === "/") return 1.0;

  // Primary category hubs
  if (["/tools", "/exchanges", "/wallets", "/learn", "/investing", "/taxes", "/defi-lending", "/compare"].includes(path)) {
    return 0.9;
  }

  // Category comparison hubs
  if (path === "/compare/exchanges" || path === "/compare/wallets") {
    return 0.85;
  }

  // Individual tools (high user engagement)
  if (path.startsWith("/tools/")) {
    return 0.8;
  }

  // Individual learn/educational pages
  if (path.startsWith("/learn/")) {
    return 0.8;
  }

  // Individual exchange reviews
  if (path.startsWith("/exchanges/")) {
    return 0.75;
  }

  // Individual wallet reviews
  if (path.startsWith("/wallets/")) {
    return 0.75;
  }

  // Individual investing guides
  if (path.startsWith("/investing/")) {
    return 0.75;
  }

  // Individual comparison pages
  if (path.startsWith("/compare/")) {
    return 0.75;
  }

  // Individual tax guides
  if (path.startsWith("/taxes/")) {
    return 0.70;
  }

  // Utility pages
  if (["/about", "/contact", "/prices", "/search", "/methodology"].includes(path)) {
    return 0.6;
  }

  // Legal pages
  if (["/privacy", "/terms"].includes(path)) {
    return 0.3;
  }

  // Default priority for unknown pages
  return 0.5;
}

/**
 * Determines change frequency based on page type and typical update patterns.
 * Helps search engines optimize their crawl budget.
 */
function getChangeFrequency(path: string): "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" {
  // Homepage updates frequently
  if (path === "/") return "daily";

  // Category hubs and tools update frequently
  if (["/tools", "/exchanges", "/wallets", "/learn", "/investing", "/taxes", "/defi-lending", "/compare"].includes(path)) {
    return "weekly";
  }

  // Dynamic pages with market data
  if (path.startsWith("/tools/")) {
    return "weekly";
  }

  // Educational content updates regularly
  if (path.startsWith("/learn/")) {
    return "weekly";
  }

  // Review pages update as new information becomes available
  if (path.startsWith("/exchanges/") || path.startsWith("/wallets/") || path.startsWith("/compare/")) {
    return "monthly";
  }

  // Tax guides update when regulations change
  if (path.startsWith("/taxes/")) {
    return "monthly";
  }

  // Investing guides update monthly
  if (path.startsWith("/investing/")) {
    return "monthly";
  }

  // Utility pages change infrequently
  if (["/about", "/contact", "/prices", "/search", "/methodology"].includes(path)) {
    return "monthly";
  }

  // Legal pages rarely change
  if (["/privacy", "/terms"].includes(path)) {
    return "yearly";
  }

  // Default to monthly
  return "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Current timestamp for lastModified
  // In production, you might want to query your database for actual last update times
  const now = new Date().toISOString();

  // Convert Set to sorted array for consistent ordering
  const sortedPages = Array.from(PUBLISHED_PAGES).sort();

  return sortedPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: getChangeFrequency(path),
    priority: getPriority(path),
  }));
}
