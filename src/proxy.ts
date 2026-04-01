import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isPublished } from "@/lib/published-pages";

/**
 * Proxy — controls Google indexing via X-Robots-Tag headers.
 *
 * Pages in PUBLISHED_PAGES → indexed normally.
 * All other pages → noindex, nofollow until promoted to PUBLISHED_PAGES.
 *
 * To publish a new batch of pages, add their paths to PUBLISHED_PAGES
 * in src/lib/published-pages.ts and redeploy.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Always allow static assets, API routes, Next internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/static") ||
    pathname.match(/\.(ico|png|jpg|jpeg|gif|svg|webp|woff|woff2|ttf|css|js|json|xml|txt)$/)
  ) {
    return NextResponse.next();
  }

  const response = NextResponse.next();

  if (isPublished(pathname)) {
    // Published: allow full indexing
    response.headers.set("X-Robots-Tag", "index, follow");
  } else {
    // Not yet published: keep out of Google index
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  // Run on all page routes, skip static files and API
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|manifest.json|sw.js|robots.txt|sitemap.xml).*)",
  ],
};
