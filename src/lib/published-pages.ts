/**
 * PUBLISHED PAGES CONFIG
 * ─────────────────────────────────────────────────────────────────
 * Controls which pages are indexed by Google.
 * Pages NOT in this list receive X-Robots-Tag: noindex via middleware.
 *
 * Launch strategy:
 *   - Day 1 (today):  50 pillar pages below
 *   - Day 2+:         Add 20 pages per day following PUBLISH_QUEUE order
 *
 * To publish a new page: move it from PUBLISH_QUEUE into PUBLISHED_PAGES.
 * ─────────────────────────────────────────────────────────────────
 */

export const PUBLISHED_PAGES: ReadonlySet<string> = new Set([
  // ── Core / Utility ─────────────────────────────────────────────
  "/",
  "/about",
  "/methodology",
  "/contact",
  "/prices",
  "/search",

  // ── Category Hubs ───────────────────────────────────────────────
  "/tools",
  "/exchanges",
  "/wallets",
  "/learn",
  "/investing",
  "/taxes",
  "/defi-lending",
  "/compare",
  "/compare/exchanges",
  "/compare/wallets",

  // ── Tools (highest utility & time-on-site) ──────────────────────
  "/tools/dca-calculator",
  "/tools/tax-calculator",
  "/tools/portfolio-tracker",
  "/tools/staking-apy",
  "/tools/gas-tracker",
  "/tools/impermanent-loss",
  "/tools/pnl-calculator",
  "/tools/converter",
  "/tools/fear-greed-timeline",
  "/tools/yield-farming-calculator",
  "/tools/lending-comparison",
  "/tools/exchange-fees",
  "/tools/whale-tracker",
  "/tools/liquidation-heatmap",
  "/tools/options-calculator",
  "/tools/defi-position-manager",
  "/tools/wallet-analyzer",
  "/tools/token-screener",
  "/tools/backtesting-engine",
  "/tools/robo-advisor",

  // ── Learn / Guides (highest search-volume topics) ───────────────
  "/learn/bitcoin-etf-guide",
  "/learn/crypto-etfs-complete-guide",
  "/learn/crypto-regulations-2026",
  "/learn/memecoins-guide-2026",
  "/learn/zero-knowledge-proofs-guide",
  "/learn/bitcoin-halving-2028-guide",
  "/learn/altcoin-season",
  "/learn/common-crypto-scams",
  "/learn/crypto-airdrops-2026",
  "/learn/consensus-mechanisms",

  // ── Compare Pages ───────────────────────────────────────────────
  "/compare/wallets/ledger-vs-trezor",
  "/compare/wallets/metamask-vs-phantom",
  "/compare/wallets/exodus-vs-trust-wallet",
  "/compare/exchanges/bybit-vs-binance",
  "/compare/exchanges/gate-io-vs-kucoin",

  // ── Day 2 — More Tools (published Mar 11) ──────────────────────
  "/tools/staking-rewards",
  "/tools/onchain-analytics",
  "/tools/airdrop-tracker",
  "/tools/funding-rates",
  "/tools/portfolio-analytics",
  "/tools/social-metrics",
  "/tools/correlation-matrix",
  "/tools/market-heatmap",
  "/tools/dominance-tracker",
  "/tools/token-unlocks",
  "/tools/defi-yields",
  "/tools/nft-rarity-checker",
  "/tools/nft-portfolio",
  "/tools/smart-money-tracker",
  "/tools/risk-analyzer",
  "/tools/sentiment-dashboard",
  "/tools/narrative-tracker",
  "/tools/crypto-calendar",
  "/tools/trading-journal",
  "/tools/portfolio-rebalancer",

  // ── Day 3 — Exchange Reviews (published Mar 12) ────────────────
  "/exchanges/coinbase",
  "/exchanges/binance",
  "/exchanges/kraken",
  "/exchanges/bybit",
  "/exchanges/kucoin",
  "/exchanges/gate-io",
  "/exchanges/okx",
  "/exchanges/bitget",
  "/exchanges/mexc",
  "/exchanges/htx",
  "/exchanges/phemex",
  "/exchanges/bitfinex",
  "/exchanges/gemini",
  "/exchanges/crypto-com",
  "/exchanges/robinhood-crypto",
  "/exchanges/coinbase-advanced",
  "/exchanges/bitstamp",
  "/exchanges/uphold",
  "/exchanges/changelly",

  // ── Static / Legal (always indexed) ────────────────────────────
  "/privacy",
  "/terms",
]);

/**
 * PUBLISH QUEUE — ordered by priority (publish 20/day)
 * Move slugs up into PUBLISHED_PAGES each day.
 */
export const PUBLISH_QUEUE: readonly string[] = [
  // Day 4 — Wallet Reviews (next up)
  "/wallets",
  "/wallets/metamask",
  "/wallets/phantom",
  "/wallets/ledger",
  "/wallets/trezor",
  "/wallets/exodus",
  "/wallets/trust-wallet",
  "/wallets/coinbase-wallet",
  "/wallets/rainbow",
  "/wallets/argent",
  "/wallets/zerion",
  "/wallets/rabby",
  "/wallets/frame",
  "/wallets/brave-wallet",
  "/wallets/uniswap-wallet",
  "/wallets/safepal",
  "/wallets/ellipal",
  "/wallets/bitbox",
  "/wallets/coldcard",
  "/wallets/foundation-passport",

  // Day 5 — Investing Best-Of (high search intent)
  "/investing/best/staking",
  "/investing/best/crypto-ira",
  "/investing/best/bitcoin-etfs",
  "/investing/best/altcoins",
  "/investing/best/defi",
  "/investing/best/nfts",
  "/investing/best/layer2",
  "/investing/best/ai-crypto",
  "/investing/best/gaming-tokens",
  "/investing/best/rwa",
  "/investing/best/memecoins",
  "/investing/best/exchanges-for-beginners",
  "/investing/best/exchanges-for-advanced",
  "/investing/best/exchanges-for-day-trading",
  "/investing/best/cold-wallets",
  "/investing/best/hot-wallets",
  "/investing/best/defi-protocols",
  "/investing/best/yield-farming",
  "/investing/best/stablecoins",
  "/investing/best/crypto-savings",

  // Day 6 — Learn (broad crypto education)
  "/learn/amm-explained",
  "/learn/bitcoin-lightning-network",
  "/learn/bitcoin-ordinals",
  "/learn/blockchain-trilemma",
  "/learn/cbdc-explained",
  "/learn/cross-chain-bridges-guide",
  "/learn/crypto-ai-intersection",
  "/learn/crypto-derivatives",
  "/learn/crypto-etfs-complete-guide",
  "/learn/account-abstraction-explained",
  "/learn/arbitrum-ecosystem",
  "/learn/avalanche-ecosystem",
  "/learn/base-ecosystem",
  "/learn/bnb-chain-ecosystem",
  "/learn/cosmos-ecosystem-guide",
  "/learn/aptos-ecosystem-guide",
  "/learn/cardano-ecosystem-guide",
  "/learn/bitcoin-strategic-reserve",
  "/learn/bitcoin-layer-2-guide",
  "/learn/aml-kyc-crypto-guide",

  // Day 7 — Taxes
  "/taxes",
  "/taxes/how-crypto-is-taxed",
  "/taxes/crypto-tax-loss-harvesting",
  "/taxes/defi-taxes",
  "/taxes/nft-taxes",
  "/taxes/staking-taxes",
  "/taxes/mining-taxes",
  "/taxes/airdrops-taxes",
  "/taxes/crypto-gifts-taxes",
  "/taxes/crypto-business-taxes",
  "/taxes/us-crypto-tax-guide",
  "/taxes/uk-crypto-tax-guide",
  "/taxes/canada-crypto-tax-guide",
  "/taxes/australia-crypto-tax-guide",
  "/taxes/germany-crypto-tax-guide",
  "/taxes/portugal-crypto-tax-guide",
  "/taxes/singapore-crypto-tax-guide",
  "/taxes/uae-crypto-tax-guide",
  "/taxes/crypto-tax-software",
  "/taxes/irs-crypto-reporting",
];

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
