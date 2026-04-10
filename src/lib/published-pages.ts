/**
 * Published Pages Registry — degen0x
 * ─────────────────────────────────────────────────────────────────
 * Total: 1324 pages
 * Updated: 2026-04-10 — ALL pages promoted for full Google indexability
 *
 * Pages in this set get "index, follow" via proxy.ts X-Robots-Tag.
 * Pages NOT in this set get "noindex, nofollow".
 *
 * Pages list stored in published-pages.json for build efficiency.
 * ─────────────────────────────────────────────────────────────────
 */

import pages from "@/data/published-pages.json";

export const PUBLISHED_PAGES: ReadonlySet<string> = new Set(pages as string[]);

/**
 * PUBLISH QUEUE — EMPTY
 * All pages promoted on 2026-04-10. No pages remain in queue.
 */
export const PUBLISH_QUEUE: readonly string[] = [];

/**
 * Returns true if the given pathname should be indexed.
 * Strips trailing slash for consistent matching.
 */
export function isPublished(pathname: string): boolean {
  const normalized = pathname.endsWith("/") && pathname !== "/"
    ? pathname.slice(0, -1)
    : pathname;
  return PUBLISHED_PAGES.has(normalized);
}
