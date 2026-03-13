/**
 * Next.js Middleware for degen0x
 * ─────────────────────────────────────────────────────────────────
 * SEO Strategy: Only 50 pillar pages are indexed.
 * All other pages get noindex, follow to consolidate authority.
 * ─────────────────────────────────────────────────────────────────
 */

import { NextRequest, NextResponse } from "next/server";
import { isPillarPage } from "@/lib/pillar-pages";

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

  // Normalize pathname for pillar check (strip trailing slash)
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");

  if (isPillarPage(normalized)) {
    // Pillar page: index, follow — full SEO treatment
    response.headers.set(
      "X-Robots-Tag",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );
    response.headers.set(
      "Cache-Control",
      "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800"
    );
  } else {
    // Non-pillar page: noindex but still follow (pass link equity)
    response.headers.set("X-Robots-Tag", "noindex, follow");
    response.headers.set(
      "Cache-Control",
      "public, max-age=1800, s-maxage=43200, stale-while-revalidate=86400"
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
