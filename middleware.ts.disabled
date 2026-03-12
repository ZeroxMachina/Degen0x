/**
 * Next.js Middleware for degen0x
 * ─────────────────────────────────────────────────────────────────
 * Handles critical SEO and security tasks at the edge:
 * - Adds X-Robots-Tag: noindex to unpublished pages
 * - Prevents indexing of draft/private content
 * - Ensures published pages are properly crawled
 * - Handles redirects and rewrites
 *
 * Runs on every request before Next.js routing.
 * ─────────────────────────────────────────────────────────────────
 */

import { NextRequest, NextResponse } from "next/server";
import { isPublished } from "@/lib/published-pages";

/**
 * Middleware function that runs on every incoming request
 * @param request - The incoming HTTP request
 * @returns Modified response with appropriate headers
 */
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip middleware for API routes and static assets
  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/public/") ||
    pathname.match(/\.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$/)
  ) {
    return NextResponse.next();
  }

  // Create response
  const response = NextResponse.next();

  // Check if the page is published
  const published = isPublished(pathname);

  if (!published) {
    /**
     * For unpublished pages, add X-Robots-Tag: noindex
     * This tells all search engines (Google, Bing, etc.) not to index this page.
     * The browser still loads the page normally (HTTP 200), but search engines skip it.
     */
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nocache");

    /**
     * Additional cache control to prevent caching in CDNs
     * Unpublished pages can change at any time, so we disable caching
     */
    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0, s-maxage=0");

    /**
     * Prevent search engine snippets and previews
     */
    response.headers.set("X-Robots-Tag", "noimageindex");
  } else {
    /**
     * For published pages, allow indexing with aggressive caching
     */
    response.headers.set("X-Robots-Tag", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    /**
     * Enable aggressive caching for published pages
     * This helps with performance and reduces server load
     */
    response.headers.set("Cache-Control", "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800");
  }

  /**
   * Set additional security headers
   */
  // Prevent MIME type sniffing
  response.headers.set("X-Content-Type-Options", "nosniff");

  // Enable XSS protection in older browsers
  response.headers.set("X-XSS-Protection", "1; mode=block");

  // Clickjacking protection
  response.headers.set("X-Frame-Options", "SAMEORIGIN");

  // Referrer policy for privacy
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Permissions policy (formerly Feature Policy)
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=()"
  );

  return response;
}

/**
 * Configure which routes this middleware runs on
 * Using matcher to avoid running on all requests (performance)
 */
export const config = {
  // Apply middleware to all routes except those listed
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};
