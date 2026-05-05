/**
 * Next.js Middleware for degen0x
 * ─────────────────────────────────────────────────────────────────
 * SEO Strategy: index by default. Only user-state, admin, and
 * transient utility paths are noindex'd. This replaces the prior
 * "50 pillar pages" allow-list, which contradicted the sitemap
 * (1,500+ URLs advertised vs ~50 indexable) and caused a ~97%
 * impressions drop after April 21, 2026.
 *
 * To noindex a path, add a prefix to NOINDEX_PREFIXES below.
 * NOTE: matched as prefixes — "/admin" covers "/admin", "/admin/foo",
 * etc. Paths are normalized to strip trailing slashes before matching.
 * ─────────────────────────────────────────────────────────────────
 */

import { NextRequest, NextResponse } from "next/server";

/**
 * Path prefixes that should be excluded from search indexes.
 * Keep this list small and only include paths that:
 *   - expose user-state (dashboards, profiles, settings, notifications)
 *   - are admin/internal-only
 *   - are transient/utility (search results, share landing, redirects)
 *   - are non-content (offline shell, sync endpoints)
 */
const NOINDEX_PREFIXES: readonly string[] = [
  "/admin",
  "/dashboard",
  "/profile",
  "/settings",
  "/notifications",
  "/onboarding",
  "/start",
  "/search",
  "/share",
  "/go",
  "/offline",
  "/xp-sync",
  "/xp-attestation",
];

function isNoindexPath(pathname: string): boolean {
  // Normalize: strip trailing slash for matching (root "/" stays "/")
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  for (const prefix of NOINDEX_PREFIXES) {
    if (normalized === prefix || normalized.startsWith(prefix + "/")) {
      return true;
    }
  }
  return false;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip for static assets and API routes
  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname.match(/\.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot|xml|json|txt)$/)
  ) {
    return NextResponse.next();
  }

  const response = NextResponse.next();

  if (isNoindexPath(pathname)) {
    // User-state / admin / utility path: noindex, follow (pass link equity)
    response.headers.set("X-Robots-Tag", "noindex, follow");
    response.headers.set(
      "Cache-Control",
      "public, max-age=1800, s-maxage=43200, stale-while-revalidate=86400"
    );
  } else {
    // Default: index, follow with full snippet/preview directives
    response.headers.set(
      "X-Robots-Tag",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );
    response.headers.set(
      "Cache-Control",
      "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800"
    );
  }

  // Security headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=()"
  );

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};
