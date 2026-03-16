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

  // ── Day 2 Bonus — New High-Value Tools (Sprint 39) ─────────────
  "/tools/portfolio-allocation",

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

  // ── Day 6-7 — Learn Articles (crypto education fundamentals) ────
  "/learn/amm-explained",
  "/learn/bitcoin-lightning-network",
  "/learn/bitcoin-ordinals",
  "/learn/blockchain-trilemma",
  "/learn/cbdc-explained",
  "/learn/cross-chain-bridges-guide",
  "/learn/crypto-ai-intersection",
  "/learn/crypto-derivatives",
  "/learn/account-abstraction-explained",
  "/learn/arbitrum-ecosystem",
  "/learn/crypto-for-beginners",
  "/learn/what-is-web3",
  "/learn/what-is-ethereum",
  "/learn/what-is-mining",
  "/learn/what-is-a-bridge",
  "/learn/what-is-tvl",
  "/learn/what-is-mev",
  "/learn/impermanent-loss",
  "/learn/layer-1-vs-layer-2",
  "/learn/defi-composability",

  // ── Day 7 — Tax Guides (regional tax compliance) ────────────────
  "/taxes/how-crypto-is-taxed",
  "/taxes/crypto-tax-loss-harvesting",
  "/taxes/defi-taxes",
  "/taxes/nft-taxes",
  "/taxes/staking-taxes",
  "/taxes/us-crypto-tax-guide",
  "/taxes/uk-crypto-tax-guide",
  "/taxes/canada-crypto-tax-guide",

  // ── Day 7 — Additional Tools (published Mar 12) ────────────────
  "/tools/price-alerts",
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

  // ── Day 8 — Wallet Reviews (published Mar 12) ─────────────────
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

  // ── Day 8 — Investing Best-Of (published Mar 12) ─────────────
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
  "/investing/best/cryptos-to-buy",

  // ── Static / Legal (always indexed) ────────────────────────────
  "/privacy",
  "/terms",

  // ── Day 9 — Learn Ecosystems (published Mar 12, Sprint 11) ────
  "/learn/avalanche-ecosystem",
  "/learn/base-ecosystem",
  "/learn/bnb-chain-ecosystem",
  "/learn/cosmos-ecosystem-guide",
  "/learn/aptos-ecosystem-guide",
  "/learn/cardano-ecosystem-guide",
  "/learn/bitcoin-strategic-reserve",
  "/learn/bitcoin-layer-2-guide",
  "/learn/aml-kyc-crypto-guide",

  // ── Day 9 — Remaining Taxes (published Mar 12, Sprint 11) ─────
  "/taxes/mining-taxes",
  "/taxes/airdrops-taxes",
  "/taxes/crypto-gifts-taxes",
  "/taxes/crypto-business-taxes",
  "/taxes/australia-crypto-tax-guide",
  "/taxes/germany-crypto-tax-guide",
  "/taxes/portugal-crypto-tax-guide",
  "/taxes/singapore-crypto-tax-guide",
  "/taxes/uae-crypto-tax-guide",
  "/taxes/crypto-tax-software",
  "/taxes/irs-crypto-reporting",

  // ── Day 10 — Blog System (published Mar 12, Sprint 11) ────────
  "/blog",
  "/blog/bitcoin-dominance-2026-what-it-means",
  "/blog/defi-lending-rates-march-2026",
  "/blog/crypto-tax-reporting-2026-what-changed",
  "/blog/layer-2-comparison-base-arbitrum-zksync",
  "/blog/5-mistakes-new-crypto-investors-make",
  "/blog/memecoins-are-they-worth-it-2026",
  "/blog/ethereum-pectra-upgrade-what-to-expect",
  "/blog/stablecoin-regulation-2026-global-overview",
  "/blog/solana-vs-ethereum-2026-ecosystem-comparison",

  // ── Day 10 — Additional Tools (published Mar 12, Sprint 11) ───
  "/tools/advanced-charting",
  "/tools/ai-trading-signals",
  "/tools/bridge-aggregator",
  "/tools/dex-aggregator",
  "/tools/mev-scanner",
  "/tools/multi-chain-gas",
  "/tools/regulatory-map",
  "/tools/research-assistant",
  "/tools/salary-in-crypto",
  "/tools/tax-optimizer",
  "/tools/volatility-scanner",
  "/tools/index-fund-simulator",
  "/tools/crypto-calendar",

  // ── Day 10 — Crypto Cards (published Mar 12, Sprint 11) ───────
  "/crypto-cards",
  "/crypto-cards/best",
  "/crypto-cards/best/cashback",
  "/crypto-cards/best/rewards",
  "/crypto-cards/best/travel",
  "/crypto-cards/best/beginners",

  // ── Day 11 — DeFi Lending (published Mar 12, Sprint 12) ──────
  "/defi-lending/best",
  "/defi-lending/reviews",
  "/defi-lending/best/stablecoin-yield",
  "/defi-lending/best/yield-aggregators",

  // ── Day 11 — Category Expansions (published Mar 12, Sprint 12)
  "/insurance",
  "/insurance/best",
  "/nfts",
  "/nfts/best",
  "/spending",
  "/spending/best/debit-cards",

  // ── Day 11 — Remaining Tools (published Mar 12, Sprint 12) ───
  "/tools/alerts-dashboard",
  "/tools/crypto-watchlist",
  "/tools/crypto-wrapped",
  "/tools/degen-score",
  "/tools/embed-widgets",
  "/tools/exchange-cashback",
  "/tools/leaderboard",
  "/tools/lending-rates",
  "/tools/live-prices",
  "/tools/performance-dashboard",
  "/tools/portfolio-heatmap",
  "/tools/portfolio-simulator",
  "/tools/portfolio-widget",
  "/tools/price-ticker",
  "/tools/token-vesting",

  // ── Day 12 — Web3 Business & Long-Term (published Mar 12, Sprint 12)
  "/web3-business",
  "/long-term",
  "/trading",
  "/community",
  "/dashboard",
  "/achievements",
  "/newsletter",

  // ── Day 13 — International Pages (published Mar 14) ────────────
  "/es",
  "/fr",
  "/de",
  "/pt-br",
  "/ja",

  // ── Day 14 — International Expansion + Learn Guides (published Mar 15) ──
  "/ko",
  "/ar",
  "/tr",
  "/learn/bitcoin-20-million-supply-milestone",
  "/learn/tokenomics-protocol-revenue-guide",

  // ── Day 15 — Learn Guides (published Mar 15) ─────────────────
  "/learn/solana-alpenglow-guide",
  "/learn/onchain-finance-onfi-guide",
  "/learn/stablecoin-payments-guide-2026",

  // ── Day 16 — DeFi & Emerging Tech Guides (published Mar 16) ──
  "/learn/payfi-guide",
  "/learn/pendle-finance-guide",
  "/learn/quantum-resistant-crypto-guide",
  "/learn/best-perpetual-dex-guide",

  // ── Day 17 — Crypto Loans Hub + High-Value Best-Of Pages (published Mar 15) ──
  "/crypto-loans",
  "/crypto-loans/best",
  "/exchanges/best/us",
  "/wallets/best/hardware",
  "/investing/crypto/bitcoin",

  // ── Day 18 — Learn Guides: Tax & Pectra Upgrade (published Mar 16) ──
  "/learn/crypto-tax-guide-2026",
  "/learn/ethereum-pectra-upgrade-guide",

  // ── Day 19 — Learn Guides: Sonic & Ethena (published Mar 15) ──────
  "/learn/sonic-blockchain-guide",
  "/learn/ethena-usde-guide",

  // ── Day 20 — Stablecoin & Meme Launchpad Guides (published Mar 15) ──
  "/learn/genius-act-stablecoin-guide",
  "/learn/best-meme-coin-launchpads-2026",

  // ── Day 21 — Crypto Regulation & Privacy Guides (published Mar 15) ──
  "/learn/clarity-act-crypto-guide",
  "/learn/privacy-coins-guide-2026",

  // ── Day 22 — Bitcoin Reserve & Tokenized Treasuries (published Mar 15) ──
  "/learn/bitcoin-strategic-reserve-guide",
  "/learn/tokenized-treasuries-guide-2026",

  // ── Day 23 — TON Blockchain & Crypto Options (published Mar 15) ──
  "/learn/ton-blockchain-guide",
  "/learn/crypto-options-trading-guide",

  // ── Day 24 — DeFAI Guide (published Mar 15) ──────────────────────
  "/learn/defai-guide-2026",

  // ── Day 25 — New L2 Guides (published Mar 15) ────────────────────
  "/learn/megaeth-guide",
  "/learn/abstract-chain-guide",

  // ── Day 26 — Bitcoin Staking (published Mar 15) ──────────────────
  "/learn/babylon-protocol-bitcoin-staking",

  // ── Day 27 — Tokenized Stocks build cycle (published Mar 15) ─────
  "/learn/tokenized-stocks-guide-2026",
  "/tools/tokenized-stocks-tracker",

  // ── Day 28 — Altcoin ETF build cycle (published Mar 15) ──────────
  "/learn/altcoin-etf-guide-2026",
  "/tools/altcoin-etf-tracker",

  // ── Day 29 — Exchange & Wallet Hubs + Staking Hub (published Mar 15) ──
  "/exchanges/best",
  "/exchanges/best/beginners",
  "/wallets/best",
  "/wallets/best/beginners",
  "/investing/staking",

  // ── Day 30 — Exchange Hubs, Wallet Reviews & Staking Hub (published Mar 15) ──
  "/exchanges/best/advanced-traders",
  "/exchanges/best/low-fee",
  "/wallets/best/mobile",
  "/wallets/reviews/ledger",
  "/wallets/reviews/trezor",

  // ── Day 31 — Wallet Reviews, Staking Hub & DeFi Guide (published Mar 15) ──
  "/learn/uniswap-v4-hooks-guide",
  "/wallets/reviews/metamask",
  "/wallets/reviews/phantom",
  "/investing/staking/best",
  "/investing/staking/reviews/lido",

  // ── Day 32 — Staking Reviews, DeFi Lending Reviews & Exchange Reviews (published Mar 16) ──
  "/investing/staking/reviews/rocket-pool",
  "/defi-lending/reviews/aave",
  "/defi-lending/reviews/compound",
  "/defi-lending/reviews/morpho",
  "/exchanges/reviews/coinbase",

  // ── Day 33 — Exchange Reviews & InfoFi/BTCFi/Aave Guides (published Mar 16) ──
  "/exchanges/reviews/binance",
  "/exchanges/reviews/kraken",
  "/exchanges/reviews/bybit",
  "/exchanges/reviews/okx",
  "/learn/kaito-ai-infofi-guide",
  "/learn/btcfi-bitcoin-defi-guide-2026",
  "/learn/aave-v4-guide",

  // ── Day 34 — Bitcoin Treasury & Crypto Debit Cards Guides (published Mar 16) ──
  "/learn/bitcoin-treasury-companies-guide",
  "/learn/crypto-debit-cards-guide-2026",

  // ── Day 35 — AI & DeFi Yield Guides (published Mar 16) ────────────────────
  "/learn/bittensor-tao-guide",
  "/learn/stablecoin-yield-strategies-2026",

  // ── Day 36 — Based Rollups & Preconfirmations (published Mar 16) ──────────
  "/learn/based-rollups-preconfirmations-guide",

  // ── Day 37 — Aztec Network Guide (published Mar 16) ─────────────────────
  "/learn/aztec-network-guide",

  // ── Day 38 — Hyperliquid HIP-3 Tokenized Futures (published Mar 16) ──────
  "/learn/hyperliquid-hip3-tokenized-futures-guide",

  // ── Day 39 — Ethereum Roadmap & DeFi Options (published Mar 16) ──────────
  "/learn/ethereum-2026-upgrade-roadmap",
  "/learn/defi-options-trading-guide",

  // ── Day 39 — Movement Network Guide (published Mar 16) ────────────────────
  "/learn/movement-network-guide",

  // ── Day 40 — Ecosystem Hub + Hyperliquid + EigenLayer + AI Agents Guide (published Mar 16) ──
  "/glossary",
  "/ecosystem",
  "/ecosystem/hyperliquid",
  "/ecosystem/eigenlayer",
  "/learn/ai-crypto-agents-guide",

  // ── Day 41 — Data Availability, DeFi Options & Ecosystem Deep-Dives (published Mar 16) ──
  "/learn/data-availability-layer-guide-2026",
  "/learn/defi-options-trading-guide-2026",
  "/ecosystem/aave",
  "/ecosystem/lido",
  "/ecosystem/uniswap",

  // ── Day 42 — Chain Abstraction, Prediction Markets, Ecosystem & AI DePIN (published Mar 16) ──
  "/learn/chain-abstraction-guide-2026",
  "/learn/crypto-prediction-markets-guide-2026",
  "/ecosystem/compound",
  "/ecosystem/curve",
  "/learn/ai-depin-crypto-guide",
]);

/**
 * PUBLISH QUEUE — ordered by priority (publish 20/day)
 * Move slugs up into PUBLISHED_PAGES each day.
 */
export const PUBLISH_QUEUE: readonly string[] = [
  // Remaining queue — next publish cycle
  "/learn/advanced-defi-strategies",
  "/news",
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
