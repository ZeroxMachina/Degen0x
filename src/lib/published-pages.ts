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

  // ── Day 43 — Advanced DeFi, News Hub, Inheritance & Parallel EVM (published Mar 16) ──
  "/learn/advanced-defi-strategies",
  "/news",
  "/learn/crypto-inheritance-planning",
  "/learn/parallel-evm-guide",

  // ── Day 43b — Sui & On-Chain Analytics (published Mar 16) ─────
  "/learn/sui-blockchain-guide",
  "/learn/on-chain-analytics-guide",

  // ── Day 44 — MEV Protection + Crypto Card Reviews (published Mar 16) ──
  "/learn/mev-protection-guide",
  "/crypto-cards/reviews/crypto-com-card",
  "/crypto-cards/reviews/coinbase-card",
  "/crypto-cards/reviews/binance-card",
  "/crypto-cards/compare/crypto-com-vs-coinbase-card",

  // ── Day 45 — Smart Wallets, Intent DEX, Restaking AVS (published Mar 16) ──
  "/learn/smart-wallets-guide-2026",
  "/learn/intent-based-dex-trading-guide",
  "/learn/restaking-avs-ecosystem-guide-2026",

  // ── Day 46 — FHE & AI Agent Payments Guides (published Mar 16) ──────────
  "/learn/fhe-crypto-guide-2026",
  "/learn/ai-agent-payments-x402-guide",

  // ── Day 47 — Stablechains & Crypto Index Funds (published Mar 16) ────────
  "/learn/stablechains-guide-2026",
  "/learn/crypto-index-funds-guide-2026",

  // ── Day 47b — Morpho Protocol (published Mar 16) ──────────────────────────
  "/learn/morpho-protocol-guide",

  // ── Day 48 — Story Protocol & Aster Chain (published Mar 16) ──────────────
  "/learn/story-protocol-ip-guide",
  "/learn/aster-chain-guide",

  // ── Day 48b — Copy Trading & Trading Bots (published Mar 16) ─────────────
  "/learn/crypto-copy-trading-guide",
  "/learn/crypto-trading-bots-guide-2026",

  // ── Day 49 — Staked ETFs & SEC-CFTC MOU (published Mar 16) ─────────────
  "/learn/staked-crypto-etfs-guide-2026",
  "/learn/sec-cftc-mou-crypto-guide",

  // ── Day 49b — Jupiter & Ondo Finance (published Mar 16) ────────────────
  "/learn/jupiter-solana-guide",
  "/learn/ondo-finance-rwa-guide",

  // ── Day 49c — Fair Launches & Peaq DePIN (published Mar 16) ───────────
  "/learn/fair-token-launches-guide-2026",
  "/learn/peaq-depin-robotics-guide-2026",

  // ── Day 50 — Hyperliquid Trading & FOMC Guide (published Mar 17) ────────
  "/learn/hyperliquid-trading-guide",
  "/learn/fomc-fed-rate-crypto-guide",

  // ── Day 50b — Telegram Bots & Virtuals Protocol (published Mar 17) ─────
  "/learn/telegram-trading-bots-guide-2026",
  "/ecosystem/virtuals-protocol",

  // ── Day 51 — Crypto Card Reviews Batch 2 (published Mar 17) ─────────────
  "/crypto-cards/reviews/bybit-card",
  "/crypto-cards/reviews/gemini-card",
  "/crypto-cards/reviews/nexo-card",
  "/crypto-cards/reviews/fold-card",
  "/crypto-cards/reviews/bitpay-card",

  // ── Day 51 — Learn Guides Batch (published Mar 17) ─────────────────
  "/learn/bitcoin-runes-guide-2026",
  "/learn/farcaster-socialfi-guide-2026",

  // ── Day 51 — Publish Cycle 2026-03-17 ─────────────────────────────
  "/learn/stacks-sbtc-bitcoin-smart-contracts-guide-2026",
  "/learn/liquid-restaking-tokens-compared-2026",

  // ── Day 52 — Monad & Smart Wallets (published Mar 17) ────────────
  "/learn/monad-blockchain-guide",
  "/learn/smart-wallets-account-abstraction-guide",

  // ── Day 53 — Hyperliquid & Oracles (published Mar 17) ───────────
  "/ecosystem/hyperliquid",
  "/learn/crypto-oracles-guide-2026",

  // ── Day 54 — DeFi Insurance & Airdrop Farming (published Mar 17) ──
  "/learn/defi-insurance-guide-2026",
  "/learn/airdrop-farming-guide-2026",

  // ── Day 55 — Cross-Chain Interop & DAO Governance (published Mar 17) ──
  "/learn/cross-chain-interoperability-guide-2026",
  "/learn/dao-governance-voting-guide-2026",

  // ── Day 56 — Sui Blockchain & Portfolio Rebalancing (published Mar 17) ──
  "/learn/sui-blockchain-guide-2026",
  "/learn/crypto-portfolio-rebalancing-guide-2026",

  // ── Day 57 — Bitcoin Liquid Staking Tokens (published Mar 17) ──────────
  "/learn/bitcoin-liquid-staking-tokens-guide-2026",

  // ── Day 58 — Aerodrome Finance Guide (published Mar 17) ─────────────────
  "/learn/aerodrome-finance-guide",

  // ── Day 59 — Karak Network & Fluid Protocol (published Mar 17) ─────────
  "/learn/karak-network-guide",
  "/learn/fluid-protocol-guide",

  // ── Day 60 — Yield-Bearing Stablecoins (published Mar 17) ─────────────
  "/learn/yield-bearing-stablecoins",

  // ── Day 61 — GPU Compute & DeFi Insurance Guides (published Mar 17) ──
  "/learn/decentralized-gpu-compute-networks-guide",
  "/learn/defi-insurance-guide-2026",

  // ── Day 62 — Solana ETF & Crypto Payroll (published Mar 17) ──────────
  "/learn/solana-etf-guide-2026",
  "/learn/crypto-payroll-guide-2026",

  // ── Day 63 — Maple Finance & Institutional Credit (published Mar 17) ─
  "/ecosystem/maple-finance",
  "/learn/onchain-institutional-credit-guide",

  // ── Day 64 — Initia Ecosystem & Crypto Custody Guide (published Mar 17) ──
  "/ecosystem/initia",
  "/learn/crypto-custody-guide-2026",

  // ── Day 65 — Tempo Blockchain & SEC Digital Commodities (published Mar 23) ──
  "/learn/tempo-blockchain-machine-payments-guide",
  "/learn/sec-digital-commodities-classification-guide",

  // ── Day 66 — Smart Contract Security & Onchain Identity (published Mar 23) ──
  "/learn/smart-contract-security-guide",
  "/learn/onchain-identity-guide",

  // ── Day 67 — TEE Guide & Solana DeFi Ecosystem (published Mar 23) ──
  "/learn/tee-verifiable-compute-guide",
  "/learn/solana-defi-ecosystem-guide-2026",

  // ── Day 68 — Ecosystem Deep-Dives: Major Protocols (published Mar 23) ──
  "/ecosystem/chainlink",
  "/ecosystem/dydx",
  "/ecosystem/gmx",
  "/ecosystem/ethena",
  "/ecosystem/jupiter",

  // ── Daily Publish — 2026-03-23 ────────────────────────────────
  "/learn/megaeth-guide-2026",
  "/learn/story-protocol-ip-tokenization-guide",

  // ── Daily Publish Cycle — 2026-03-23 (batch 2) ──────────────
  "/learn/decentralized-gpu-compute-guide-2026",
  "/learn/cross-chain-interoperability-guide-2026",

  // ── Daily Publish Cycle — 2026-03-23 (batch 3) ──────────────
  "/learn/bitcoin-supply-shock-guide-2026",

  // ── Daily Publish Cycle — 2026-03-23 (batch 4) ──────────────
  "/learn/solana-blinks-actions-guide-2026",
  "/learn/nftfi-nft-finance-guide-2026",

  // ── Daily Publish Cycle — 2026-03-23 (batch 5) ──────────────
  "/learn/solana-firedancer-guide-2026",
  "/learn/bitcoin-covenants-opcat-guide-2026",

  // ── Daily Publish Cycle — 2026-03-23 (batch 6) ──────────────
  "/learn/crypto-dca-strategy-guide-2026",
  "/learn/tradfi-defi-convergence-guide-2026",

  // ── Daily Publish Cycle — 2026-03-23 (batch 7) ──────────────
  "/learn/unichain-guide-2026",
  "/learn/appchains-app-specific-rollups-guide-2026",

  // ── Daily Build Cycle — 2026-03-23 (batch 8) ──────────────
  "/learn/symbiotic-protocol-restaking-guide",
  "/learn/modular-blockchain-stack-guide-2026",

  // ── Daily Build Cycle — 2026-03-23 (batch 9) ──────────────
  "/learn/flash-loans-guide-2026",
  "/learn/defi-vaults-structured-products-guide-2026",

  // ── Daily Build Cycle — 2026-03-23 (batch 10) ──────────────
  "/learn/mica-eu-crypto-regulation-guide-2026",
  "/learn/distributed-validator-technology-dvt-guide",

  // ── Daily Publish Cycle — 2026-03-23 (batch 11) ──────────────
  "/learn/zkml-guide-2026",
  "/learn/ai-agent-identity-nhi-guide",

  // ── Daily Publish Cycle — 2026-03-23 (batch 12) ──────────────
  "/learn/defi-points-airdrop-farming-guide-2026",
  "/learn/ethereum-blob-space-economics-guide",

  // ── Daily Publish Cycle — 2026-03-23 (batch 13) ──────────────
  "/learn/best-perpetual-dex-guide",
  "/learn/cross-chain-bridges-guide",
  "/learn/ethereum-fusaka-glamsterdam-guide-2026",
  "/learn/ai-agent-wallets-autonomous-payments-guide-2026",

  // ── Daily Build Cycle — 2026-03-23 (batch 14) ──────────────
  "/learn/solana-token-extensions-guide-2026",
  "/learn/real-yield-defi-guide-2026",

  // ── Day 69 — Crypto Cards & Loans Expansion (published Mar 23) ──
  "/crypto-cards/best/debit",
  "/crypto-cards/best/no-annual-fee",
  "/crypto-cards/calculators/rewards-calculator",
  "/crypto-loans/best/bitcoin-loans",
  "/crypto-loans/best/stablecoin",

  // ── Day 70 — Tokenized Gold & AMM Guides (published Mar 23) ────
  "/learn/tokenized-gold-guide-2026",
  "/learn/amm-liquidity-pools-guide-2026",

  // ── Day 71 — Risk, Security, Safety, RWA & Gaming (published Mar 23) ──
  "/learn/crypto-risk-management-guide-2026",
  "/learn/crypto-security-masterclass-2026",
  "/learn/defi-safety-guide-2026",
  "/learn/rwa-tokenization-guide-2026",
  "/learn/crypto-gaming-2026-guide",

  // ── Daily Publish Cycle — 2026-03-24 ──────────────────────────
  "/learn/bitcoin-mining-profitability-guide-2026",
  "/learn/crypto-etf-options-trading-guide-2026",

  // ── Daily Publish Cycle — 2026-03-24 (batch 2) ──────────────
  "/learn/zk-coprocessors-guide-2026",
  "/learn/erc-7683-cross-chain-intents-guide",

  // ── Daily Publish Cycle — 2026-03-24 (batch 3) ──────────────
  "/learn/defi-liquidation-protection-guide-2026",

  // ── Daily Publish Cycle — 2026-03-24 (batch 4) ──────────────
  "/learn/crypto-wallet-security-guide-2026",
  "/learn/crypto-market-cycles-guide-2026",

  // ── Daily Build Cycle — 2026-03-24 (batch 5) ──────────────
  "/learn/vetokenomics-curve-wars-guide-2026",
  "/learn/delta-neutral-yield-strategies-guide-2026",

  // ── Daily Publish Cycle — 2026-03-24 (batch 6) ──────────────
  "/learn/berachain-guide",
  "/learn/trump-crypto-reserve-guide",
  "/learn/celestia-guide",
  "/learn/depin-guide",
  "/learn/layer-2-scaling-guide",

  // ── Daily Publish Cycle — 2026-03-24 (batch 7) ──────────────
  "/learn/bitcoin-bitvm-programmability-guide",
  "/learn/crypto-market-making-guide-2026",

  // ── Daily Publish Cycle — 2026-03-24 (batch 8) ──────────────
  "/learn/onchain-analytics-guide-2026",
  "/learn/crypto-arbitrage-strategies-guide-2026",

  // ── Daily Publish Cycle — 2026-03-24 (batch 9) ──────────────
  "/learn/polymarket-prediction-markets-guide-2026",
  "/learn/scroll-zkevm-guide-2026",

  // ── Daily Publish Cycle — 2026-03-24 (batch 10) ──────────────
  "/learn/sei-network-parallel-evm-guide",
  "/learn/advanced-staking-strategies-guide-2026",
  "/learn/crypto-tax-loss-harvesting-guide-2026",
  "/learn/cold-storage-seed-phrase-security-guide-2026",

  // ── Daily Publish Cycle — 2026-03-24 (batch 11) ──────────────
  "/learn/onchain-identity-reputation-guide-2026",
  "/learn/leveraged-tokens-guide-2026",

  // ── Daily Publish Cycle — 2026-03-24 (batch 12) ──────────────
  "/learn/tokenized-treasuries-rwa-yield-guide-2026",
  "/tools/funding-rate-tracker",

  // ── Daily Publish Cycle — 2026-03-24 (batch 13) ──────────────
  "/learn/solana-developer-platform-sdp-guide",
  "/learn/agentic-payments-protocols-guide-2026",

  // ── Daily Publish Cycle — 2026-03-24 (batch 14) ──────────────
  "/learn/raas-rollup-as-a-service-guide-2026",
  "/learn/staking-as-a-service-providers-guide-2026",

  // ── Daily Publish Cycle — 2026-03-24 (batch 15) ──────────────
  "/learn/depin-earning-guide-2026",
  "/learn/btcfi-yield-strategies-guide-2026",

  // ── Daily Build Cycle — 2026-03-24 (batch 16) ──────────────
  "/learn/layer-3-chains-guide-2026",
  "/learn/mpc-wallets-guide-2026",

  // ── Daily Publish Cycle — 2026-03-25 ──────────────────────────
  "/learn/erc-8183-agentic-commerce-guide",
  "/learn/crypto-retirement-ira-pension-guide-2026",

  // ── Daily Build Cycle — 2026-03-25 (batch 2) ──────────────
  "/learn/morgan-stanley-bitcoin-etf-msbt-guide",
  "/learn/onchain-credit-scoring-guide-2026",

  // ── Daily Publish Cycle — 2026-03-25 (batch 3) ──────────────
  "/ecosystem/pendle",
  "/ecosystem/rocketpool",
  "/ecosystem/makerdao",
  "/ecosystem/yearn",
  "/ecosystem/ondo",

  // ── Daily Build Cycle — 2026-03-25 (batch 4) ──────────────
  "/learn/solana-liquid-staking-guide-2026",
  "/learn/corporate-crypto-treasury-guide-2026",

  // ── Daily Build Cycle — 2026-03-25 (batch 5) ──────────────
  "/learn/cross-chain-messaging-protocols-guide-2026",
  "/learn/fully-onchain-gaming-autonomous-worlds-guide-2026",

  // ── Daily Build Cycle — 2026-03-25 (batch 6) ──────────────
  "/learn/lido-v3-stvaults-guide-2026",
  "/learn/institutional-crypto-adoption-guide-2026",

  // ── Daily Build Cycle — 2026-03-25 (batch 7) ──────────────
  "/learn/eip-7702-smart-accounts-guide-2026",
  "/learn/passkey-embedded-wallets-guide-2026",

  // ── Daily Publish Cycle — 2026-03-25 (batch 8) ──────────────
  "/learn/governance-security-attack-vectors-2026",
  "/learn/funding-rate-arbitrage-guide-2026",

  // ── Daily Publish Cycle — 2026-03-25 (batch 9) ──────────────
  "/learn/bitcoin-safe-haven-guide-2026",
  "/learn/btc-yield-earning-strategies-guide-2026",

  // ── Daily Publish Cycle — 2026-03-25 (batch 10) ──────────────
  "/learn/ethereum-layer-2-comparison-guide-2026",
  "/learn/onchain-order-book-clob-dex-guide-2026",

  // ── Daily Publish Cycle — 2026-03-25 (batch 11) ──────────────
  "/learn/katana-perps-idex-acquisition-guide",
  "/learn/tokenized-funds-institutional-defi-guide",

  // ── Daily Publish Cycle — 2026-03-25 (batch 12) ──────────────
  "/learn/congressional-tokenization-hearing-guide-2026",
  "/learn/bitgo-ipo-crypto-infrastructure-guide",

  // ── Daily Publish Cycle — 2026-03-25 (batch 13) ──────────────
  "/learn/nasdaq-tokenized-equities-trading-guide-2026",
  "/learn/grayscale-hype-etf-defi-guide",

  // ── Daily Publish Cycle — 2026-03-25 (batch 14) ──────────────
  "/learn/socialfi-creator-tokens-guide-2026",
  "/learn/crypto-options-strategies-guide-2026",

  // ── Daily Publish Cycle — 2026-03-25 (batch 15) ──────────────
  "/learn/defi-insurance-protocols-guide-2026",
  "/learn/distributed-validator-technology-dvt-guide-2026",

  // ── Daily Publish Cycle — 2026-03-25 (batch 16) ──────────────
  "/learn/ai-agent-frameworks-comparison-2026",
  "/learn/rwa-platforms-comparison-2026",

  // ── Daily Build Cycle — 2026-03-25 (batch 17) ──────────────
  "/learn/ethereum-verkle-trees-hegota-guide-2026",
  "/learn/sui-hashi-bitcoin-defi-guide",

  // ── Daily Publish Cycle — 2026-03-25 (batch 18) ──────────────
  "/learn/solver-networks-order-flow-auctions-guide-2026",
  "/learn/aptos-blockchain-guide-2026",

  // ── Daily Publish Cycle — 2026-03-25 (batch 19) ──────────────
  "/learn/onchain-privacy-infrastructure-guide-2026",
  "/learn/world-chain-proof-of-personhood-guide-2026",

  // ── Daily Publish Cycle — 2026-03-25 (batch 20) ──────────────
  "/learn/crypto-on-ramps-off-ramps-guide-2026",
  "/learn/crypto-portfolio-allocation-guide-2026",

  // ── Daily Publish Cycle — 2026-03-25 (batch 21) ──────────────
  "/learn/tokenized-real-estate-guide-2026",
  "/learn/web3-gaming-gamefi-guide-2026",

  // ── Daily Publish Cycle — 2026-03-27 ──────────────────────────
  "/crypto-loans/calculators/loan-calculator",
  "/crypto-loans/calculators/ltv-calculator",
  "/exchanges/best/bitcoin",
  "/exchanges/best/usa",
  "/crypto-cards/compare/crypto-com-vs-binance-card",

  // ── Daily Publish Cycle — 2026-03-27 (batch 2) ──────────────────
  "/learn/virtuals-protocol-guide",
  "/learn/grass-protocol-depin-guide",

  // ── Daily Build Cycle — 2026-03-27 ──────────────────────────
  "/learn/perp-dex-wars-comparison-2026",
  "/learn/paradex-zk-perpetuals-guide-2026",

  // ── Daily Publish Cycle — 2026-03-27 (batch 3) ──────────────
  "/learn/initia-blockchain-guide-2026",
  "/learn/kite-ai-payment-blockchain-guide-2026",

  // ── Daily Publish Cycle — 2026-03-27 (batch 4) ──────────────
  "/learn/eclipse-svm-layer-2-guide-2026",
  "/learn/walrus-decentralized-storage-guide-2026",

  // ── Daily Publish Cycle — 2026-03-27 (batch 5) ──────────────
  "/learn/desci-decentralized-science-guide-2026",
  "/learn/gamblefi-onchain-betting-guide-2026",

  // ── Daily Publish Cycle — 2026-03-27 (batch 6) ──────────────
  "/crypto-cards/best/prepaid",
  "/crypto-cards/best/staking-rewards",
  "/crypto-loans/best/low-interest",
  "/crypto-loans/best/defi",
  "/tools/dao-treasury-dashboard",

  // ── Daily Publish Cycle — 2026-03-27 (batch 7, learn guides) ──
  "/learn/shared-sequencing-decentralized-sequencers-guide-2026",
  "/learn/wrapped-bitcoin-comparison-guide-2026",

  // ── Daily Publish Cycle — 2026-03-27 (batch 8, automated) ──
  "/learn/defi-lending-protocol-comparison-2026",
  "/learn/defi-yield-aggregators-guide-2026",

  // ── Daily Publish Cycle — 2026-03-28 ──────────────────────────
  "/learn/railgun-privacy-defi-guide-2026",
  "/learn/no-code-ai-trading-agents-guide-2026",

  // ── Daily Publish Cycle — 2026-03-28 (batch 2) ──────────────
  "/learn/citrea-bitcoin-zk-rollup-guide-2026",
  "/learn/unichain-uniswap-layer-2-guide-2026",

  // ── Daily Publish Cycle — 2026-03-28 (batch 3) ──────────────
  "/learn/solana-lst-comparison-marinade-jito-sanctum-2026",
  "/learn/rwa-yield-vs-defi-yield-comparison-2026",

  // ── Daily Publish Cycle — 2026-03-28 (batch 4) ──────────────
  "/learn/ton-defi-ecosystem-guide-2026",
  "/learn/sui-defi-ecosystem-guide-2026",

  // ── Daily Publish Cycle — 2026-03-28 (batch 5, automated) ──
  "/learn/dyor-token-research-guide-2026",
  "/learn/crypto-leverage-trading-guide-2026",

  // ── Daily Build Cycle — 2026-03-28 (batch 6) ──────────────
  "/learn/smart-contract-security-audit-guide-2026",
  "/learn/data-availability-celestia-eigenda-avail-comparison-2026",

  // ── Daily Publish Cycle — 2026-03-28 (batch 7, automated) ──
  "/crypto-cards/compare/nexo-vs-crypto-com",
  "/crypto-cards/compare/fold-vs-coinbase-card",
  "/crypto-cards/reviews/plutus-card",
  "/wallets/reviews/zengo",
  "/wallets/reviews/zerion",

  // ── Daily Publish Cycle — 2026-03-28 (batch 8, automated) ──
  "/learn/starknet-validity-rollup-guide-2026",
  "/learn/crypto-etf-in-kind-redemption-guide-2026",

  // ── Daily Publish Cycle — 2026-03-28 (batch 9, automated) ──
  "/learn/depin-ecosystem-guide-2026",
  "/learn/crypto-gas-fees-transaction-costs-guide-2026",

  // ── Daily Publish Cycle — 2026-03-28 (batch 10, automated) ──
  "/learn/crypto-bear-market-investing-guide-2026",
  "/learn/smart-money-onchain-signals-guide-2026",

  // ── Daily Publish Cycle — 2026-03-28 (batch 11, automated) ──
  "/learn/yield-tokenization-guide-2026",
  "/tools/token-security-scanner",

  // ── Daily Publish Cycle — 2026-03-28 (batch 12, automated) ──
  "/learn/tariffs-trade-war-crypto-impact-guide-2026",
  "/tools/stablecoin-yield-tracker",

  // ── Daily Publish Cycle — 2026-03-29 (automated) ──────────────
  "/learn/telegram-mini-apps-ton-gaming-guide-2026",
  "/learn/onchain-forex-stablecoin-diversity-guide-2026",

  // ── Daily Publish Cycle — 2026-03-29 (batch 2, automated) ──
  "/learn/cross-chain-intents-guide",

  // ── Daily Publish Cycle — 2026-03-29 (batch 3, automated) ──
  "/learn/crypto-technical-analysis-guide-2026",

  // ── Daily Publish Cycle — 2026-03-29 (batch 4, automated) ──
  "/learn/crypto-wallet-security-guide-2026",
  "/learn/crypto-passive-income-guide-2026",
  "/learn/cryptocurrency-beginners-guide-2026",

  // ── Daily Publish Cycle — 2026-04-01 (automated) ─────────────
  "/learn/restaking-comparison-eigenlayer-symbiotic-karak-2026",
  "/learn/tokenized-treasury-bills-guide-2026",

  // ── Daily Publish Cycle — 2026-04-01 (batch 2, automated) ──
  "/learn/know-your-agent-kya-guide-2026",
  "/learn/sui-private-transactions-seal-framework-guide-2026",

  // ── Daily Publish Cycle — 2026-04-01 (batch 3, automated) ──
  "/learn/stablecoin-payments-infrastructure-guide-2026",
  "/learn/omnichain-defi-unified-liquidity-guide-2026",

  // ── Daily Publish Cycle — 2026-04-01 (batch 4, automated) ──
  "/tools/defi-risk-scanner",
  "/tools/dex-screener",
  "/learn/bitcoin-etf-guide-2026",
  "/ecosystem/1inch",
  "/ecosystem/aerodrome",

  // ── Daily Publish Cycle — 2026-04-01 (batch 5, automated) ──
  "/status",
  "/status/api-health",
  "/copy-trading",
  "/airdrops",
  "/defi-yields",

  // ── Courses (published Apr 1) ─────────────────────────────────
  "/courses",
  "/courses/crypto-101",
  "/courses/defi-masterclass",
  "/courses/layer2-deep-dive",
  "/courses/solana-deep-dive",
  "/courses/crypto-security",
  "/courses/rwa-tokenization",

  // ── Daily Publish Cycle — 2026-04-02 (automated) ─────────────
  "/learn/euler-v2-modular-lending-guide-2026",
  "/learn/hyperlane-permissionless-interoperability-guide-2026",
  "/learn/crypto-staking-guide-2026",
  "/learn/flash-loans-defi-guide-2026",
]);

/**
 * PUBLISH QUEUE — ordered by priority (publish 20/day)
 * Move slugs up into PUBLISHED_PAGES each day.
 *
 * Queue is empty — all pages have been published as of 2026-04-01.
 *
 * NOTE 2026-03-27: Two pages have mismatched slugs and were NOT promoted:
 *   - /learn/crypto-wallet-security-token-approvals-guide (no page.tsx — found crypto-wallet-security-guide-2026 instead)
 *   Fix the slugs or scaffold the pages before next publish cycle.
 */
export const PUBLISH_QUEUE: readonly string[] = [
  // Queue empty — all pages published as of 2026-04-02.
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
