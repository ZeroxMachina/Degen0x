/**
 * Top 50 Pillar Pages — these are indexed by search engines (index, follow).
 * All other pages get noindex, follow to consolidate SEO authority.
 *
 * Selection criteria:
 * - High-traffic hub/category pages
 * - Top exchange & wallet reviews (by market cap / popularity)
 * - Key comparison pages (highest search volume matchups)
 * - Core learn/educational content
 * - Top crypto asset pages (BTC, ETH, SOL, XRP)
 * - Essential tool pages (portfolio, heatmap, gas, prices)
 */
export const PILLAR_PAGES: Set<string> = new Set([
  // ── Core Hub Pages ──────────────────────────────────────────
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

  // ── Best-of Category Pages ──────────────────────────────────
  "/exchanges/best",
  "/wallets/best",
  "/investing/best",
  "/taxes/best",
  "/nfts/best",
  "/defi-lending/best",
  "/exchanges/best/beginners",

  // ── Top Exchange Reviews ────────────────────────────────────
  "/exchanges/reviews/binance",
  "/exchanges/reviews/coinbase",
  "/exchanges/reviews/kraken",
  "/exchanges/reviews/bybit",
  "/exchanges/reviews/okx",

  // ── Top Wallet Reviews ──────────────────────────────────────
  "/wallets/reviews/ledger",
  "/wallets/reviews/trezor",
  "/wallets/reviews/metamask",
  "/wallets/reviews/phantom",

  // ── Top Crypto Asset Pages ──────────────────────────────────
  "/investing/crypto/bitcoin",
  "/investing/crypto/ethereum",
  "/investing/crypto/solana",
  "/investing/crypto/xrp",
  "/investing/crypto/cardano",

  // ── High-Value Comparison Pages ─────────────────────────────
  "/exchanges/compare/coinbase-vs-binance",
  "/exchanges/compare/kraken-vs-coinbase",
  "/wallets/compare/ledger-vs-trezor",
  "/wallets/compare/metamask-vs-phantom",
  "/investing/compare/bitcoin-vs-ethereum",

  // ── Top Tools ───────────────────────────────────────────────
  "/tools/portfolio-tracker",
  "/tools/market-heatmap",
  "/tools/gas-tracker",
  "/tools/live-prices",
  "/tools/dca-calculator",

  // ── Key Learn Content ───────────────────────────────────────
  "/learn/crypto-glossary",
  "/learn/account-abstraction",

  // ── Staking Hub ─────────────────────────────────────────────
  "/investing/staking",
  "/investing/staking/best",
]);

/**
 * Check if a given pathname is a pillar page.
 * Normalizes trailing slashes for consistent matching.
 */
export function isPillarPage(pathname: string): boolean {
  // Normalize: remove trailing slash (except for root "/")
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  return PILLAR_PAGES.has(normalized);
}
