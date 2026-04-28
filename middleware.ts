/**
 * Next.js Middleware for degen0x
 * ─────────────────────────────────────────────────────────────────
 * SEO Strategy: Only 50 pillar pages are indexed.
 * All other pages get noindex, follow to consolidate authority.
 *
 * NOTE: Pillar pages are inlined here (not imported) because
 * middleware runs on Vercel Edge Runtime which restricts imports.
 * ─────────────────────────────────────────────────────────────────
 */

import { NextRequest, NextResponse } from "next/server";

const PILLAR_PAGES: Set<string> = new Set([
  "/",
  "/tools",
  "/learn",
  "/exchanges",
  "/wallets",
  "/investing",
  "/taxes",
  "/nfts",
  "/defi-lending",
  "/crypto-cards",
  "/crypto-loans",
  "/insurance",
  "/web3-business",
  "/spending",
  "/compare",
  "/blog",
  "/exchanges/best",
  "/wallets/best",
  "/investing/best",
  "/taxes/best",
  "/nfts/best",
  "/defi-lending/best",
  "/exchanges/best/beginners",
  "/exchanges/reviews/binance",
  "/exchanges/reviews/coinbase",
  "/exchanges/reviews/kraken",
  "/exchanges/reviews/bybit",
  "/exchanges/reviews/okx",
  "/wallets/reviews/ledger",
  "/wallets/reviews/trezor",
  "/wallets/reviews/metamask",
  "/wallets/reviews/phantom",
  "/investing/crypto/bitcoin",
  "/investing/crypto/ethereum",
  "/investing/crypto/solana",
  "/investing/crypto/xrp",
  "/investing/crypto/cardano",
  "/exchanges/compare/coinbase-vs-binance",
  "/exchanges/compare/kraken-vs-coinbase",
  "/wallets/compare/ledger-vs-trezor",
  "/wallets/compare/metamask-vs-phantom",
  "/investing/compare/bitcoin-vs-ethereum",
  "/tools/portfolio-tracker",
  "/tools/market-heatmap",
  "/tools/gas-tracker",
  "/tools/live-prices",
  "/tools/dca-calculator",
  "/learn/crypto-glossary",
  "/learn/account-abstraction",
  "/learn/solana-alpenglow-guide",
  "/learn/onchain-finance-onfi-guide",
  "/investing/staking",
  "/investing/staking/best",
]);

function isPillarPage(pathname: string): boolean {
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  return PILLAR_PAGES.has(normalized);
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
