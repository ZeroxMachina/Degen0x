import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

/**
 * SEO Sitemap Generator for CryptoDegen
 *
 * This sitemap serves 2,275+ pages with intelligent priority assignment:
 * - Homepage (1.0): Daily
 * - Category pages (0.8): Weekly
 * - Best/guides (0.9): Weekly
 * - Reviews (0.8): Weekly
 * - Comparisons (0.7): Weekly
 * - Learn/Tools (0.6): Monthly
 * - Tertiary pages (0.5): Monthly
 *
 * Optimized for static export build (output: 'export' in next.config.ts)
 */

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  // Define all routes organized by category
  const routes = [
    // ==========================================
    // Homepage
    // ==========================================
    "",

    // ==========================================
    // Exchanges
    // ==========================================
    "/exchanges",
    // Exchanges - Best
    "/exchanges/best",
    "/exchanges/best/advanced-traders",
    "/exchanges/best/altcoins",
    "/exchanges/best/argentina",
    "/exchanges/best/australia",
    "/exchanges/best/beginners",
    "/exchanges/best/bitcoin",
    "/exchanges/best/brazil",
    "/exchanges/best/canada",
    "/exchanges/best/chile",
    "/exchanges/best/colombia",
    "/exchanges/best/decentralized",
    "/exchanges/best/egypt",
    "/exchanges/best/europe",
    "/exchanges/best/france",
    "/exchanges/best/futures",
    "/exchanges/best/germany",
    "/exchanges/best/hong-kong",
    "/exchanges/best/india",
    "/exchanges/best/indonesia",
    "/exchanges/best/japan",
    "/exchanges/best/kenya",
    "/exchanges/best/low-fee",
    "/exchanges/best/margin-trading",
    "/exchanges/best/mexico",
    "/exchanges/best/mobile-app",
    "/exchanges/best/netherlands",
    "/exchanges/best/nigeria",
    "/exchanges/best/no-kyc",
    "/exchanges/best/philippines",
    "/exchanges/best/poland",
    "/exchanges/best/security",
    "/exchanges/best/singapore",
    "/exchanges/best/south-africa",
    "/exchanges/best/south-korea",
    "/exchanges/best/spain",
    "/exchanges/best/staking-rewards",
    "/exchanges/best/sweden",
    "/exchanges/best/switzerland",
    "/exchanges/best/thailand",
    "/exchanges/best/turkey",
    "/exchanges/best/uae",
    "/exchanges/best/uk",
    "/exchanges/best/us",
    "/exchanges/best/usa",
    "/exchanges/best/vietnam",
    // Exchanges - Reviews
    "/exchanges/reviews/backpack",
    "/exchanges/reviews/binance",
    "/exchanges/reviews/bingx",
    "/exchanges/reviews/bitfinex",
    "/exchanges/reviews/bitget",
    "/exchanges/reviews/bitmart",
    "/exchanges/reviews/bitstamp",
    "/exchanges/reviews/bybit",
    "/exchanges/reviews/coinbase",
    "/exchanges/reviews/crypto-com",
    "/exchanges/reviews/dydx",
    "/exchanges/reviews/gate-io",
    "/exchanges/reviews/gemini",
    "/exchanges/reviews/gmx",
    "/exchanges/reviews/htx",
    "/exchanges/reviews/hyperliquid",
    "/exchanges/reviews/jupiter-exchange",
    "/exchanges/reviews/kraken",
    "/exchanges/reviews/kucoin",
    "/exchanges/reviews/lbank",
    "/exchanges/reviews/mexc",
    "/exchanges/reviews/okx",
    "/exchanges/reviews/orca",
    "/exchanges/reviews/pancakeswap",
    "/exchanges/reviews/phemex",
    "/exchanges/reviews/pionex",
    "/exchanges/reviews/probit",
    "/exchanges/reviews/raydium",
    "/exchanges/reviews/whitebit",
    // Exchanges - Compare
    "/exchanges/compare/binance-vs-bybit",
    "/exchanges/compare/binance-vs-kraken",
    "/exchanges/compare/binance-vs-okx",
    "/exchanges/compare/bitget-vs-bybit",
    "/exchanges/compare/bybit-vs-okx",
    "/exchanges/compare/coinbase-vs-binance",
    "/exchanges/compare/coinbase-vs-crypto-com",
    "/exchanges/compare/coinbase-vs-gemini",
    "/exchanges/compare/coinbase-vs-kraken",
    "/exchanges/compare/coinbase-vs-robinhood",
    "/exchanges/compare/crypto-com-vs-binance",
    "/exchanges/compare/crypto-com-vs-coinbase",
    "/exchanges/compare/gate-io-vs-mexc",
    "/exchanges/compare/gemini-vs-coinbase",
    "/exchanges/compare/kraken-vs-binance",
    "/exchanges/compare/kraken-vs-coinbase",
    "/exchanges/compare/kraken-vs-gemini",
    "/exchanges/compare/kucoin-vs-gate-io",
    // Exchanges - Learn
    "/exchanges/learn/api-trading-guide",
    "/exchanges/learn/cex-vs-dex",
    "/exchanges/learn/copy-trading-explained",
    "/exchanges/learn/crypto-arbitrage-guide",
    "/exchanges/learn/exchange-fees-explained",
    "/exchanges/learn/exchange-hacks-history",
    "/exchanges/learn/exchange-security-tips",
    "/exchanges/learn/how-to-buy-crypto",
    "/exchanges/learn/how-to-buy-crypto-australia",
    "/exchanges/learn/how-to-buy-crypto-canada",
    "/exchanges/learn/how-to-buy-crypto-europe",
    "/exchanges/learn/how-to-buy-crypto-india",
    "/exchanges/learn/how-to-buy-crypto-uk",
    "/exchanges/learn/how-to-buy-crypto-usa",
    "/exchanges/learn/how-to-choose-exchange",
    "/exchanges/learn/how-to-read-charts",
    "/exchanges/learn/how-to-short-crypto",
    "/exchanges/learn/kyc-explained",
    "/exchanges/learn/leverage-trading-guide",
    "/exchanges/learn/limit-vs-market-orders",
    "/exchanges/learn/maker-vs-taker-fees",
    "/exchanges/learn/proof-of-reserves",
    "/exchanges/learn/spot-vs-futures",
    "/exchanges/learn/stop-loss-orders",
    "/exchanges/learn/trading-pairs-explained",
    // Exchanges - Tools
    "/exchanges/tools/dca-calculator",
    "/exchanges/tools/fee-calculator",
    "/exchanges/tools/profit-loss-calculator",

    // ==========================================
    // Wallets
    // ==========================================
    "/wallets",
    // Wallets - Best
    "/wallets/best",
    "/wallets/best/australia",
    "/wallets/best/beginners",
    "/wallets/best/bitcoin",
    "/wallets/best/canada",
    "/wallets/best/defi",
    "/wallets/best/desktop",
    "/wallets/best/ethereum",
    "/wallets/best/europe",
    "/wallets/best/hardware",
    "/wallets/best/hot-wallets",
    "/wallets/best/mobile",
    "/wallets/best/multi-chain",
    "/wallets/best/nft",
    "/wallets/best/privacy",
    "/wallets/best/security",
    "/wallets/best/software",
    "/wallets/best/solana",
    "/wallets/best/uk",
    "/wallets/best/usa",
    // Wallets - Reviews
    "/wallets/reviews/bitget-wallet",
    "/wallets/reviews/coinbase-wallet",
    "/wallets/reviews/exodus",
    "/wallets/reviews/keystone",
    "/wallets/reviews/ledger",
    "/wallets/reviews/metamask",
    "/wallets/reviews/okx-wallet",
    "/wallets/reviews/onekey",
    "/wallets/reviews/phantom",
    "/wallets/reviews/rabby",
    "/wallets/reviews/safe",
    "/wallets/reviews/safepal",
    "/wallets/reviews/tangem",
    "/wallets/reviews/trezor",
    "/wallets/reviews/trust-wallet",
    "/wallets/reviews/zengo",
    // Wallets - Compare
    "/wallets/compare/coinbase-wallet-vs-metamask",
    "/wallets/compare/exodus-vs-coinbase-wallet",
    "/wallets/compare/exodus-vs-trust-wallet",
    "/wallets/compare/ledger-vs-coldcard",
    "/wallets/compare/ledger-vs-keystone",
    "/wallets/compare/ledger-vs-trezor",
    "/wallets/compare/metamask-vs-phantom",
    "/wallets/compare/metamask-vs-trust-wallet",
    "/wallets/compare/phantom-vs-solflare",
    "/wallets/compare/rabby-vs-metamask",
    "/wallets/compare/trezor-vs-coldcard",
    "/wallets/compare/trust-wallet-vs-metamask",
    // Wallets - Learn
    "/wallets/learn/custodial-vs-non-custodial",
    "/wallets/learn/defi-wallet-guide",
    "/wallets/learn/hardware-wallet-setup-guide",
    "/wallets/learn/hot-vs-cold-wallets",
    "/wallets/learn/how-to-bridge-crypto",
    "/wallets/learn/how-to-set-up-wallet",
    "/wallets/learn/how-to-transfer-crypto",
    "/wallets/learn/how-to-use-metamask",
    "/wallets/learn/how-to-use-phantom",
    "/wallets/learn/multi-sig-wallets",
    "/wallets/learn/multi-sig-wallets-explained",
    "/wallets/learn/nft-wallet-guide",
    "/wallets/learn/passphrase-vs-seed-phrase",
    "/wallets/learn/seed-phrase-explained",
    "/wallets/learn/seed-phrase-security",
    "/wallets/learn/wallet-backup-guide",
    "/wallets/learn/wallet-backup-strategies",
    "/wallets/learn/wallet-recovery-guide",
    "/wallets/learn/wallet-security-best-practices",
    "/wallets/learn/what-is-a-crypto-wallet",
    // Wallets - Tools
    "/wallets/tools/gas-fee-tracker",
    "/wallets/tools/wallet-comparison",

    // ==========================================
    // Investing
    // ==========================================
    "/investing",
    // Investing - Best
    "/investing/best",
    "/investing/best/ai-crypto",
    "/investing/best/airdrops",
    "/investing/best/apps",
    "/investing/best/beginners",
    "/investing/best/copy-trading",
    "/investing/best/crypto-etfs",
    "/investing/best/cryptos-to-buy",
    "/investing/best/defi-tokens",
    "/investing/best/layer-2",
    "/investing/best/long-term",
    "/investing/best/meme-coins",
    "/investing/best/passive-income",
    "/investing/best/portfolio-bots",
    "/investing/best/rwa",
    "/investing/best/staking",
    "/investing/best/trading-platforms",
    // Investing - Crypto
    "/investing/crypto/aave-token",
    "/investing/crypto/akash",
    "/investing/crypto/algorand",
    "/investing/crypto/altlayer",
    "/investing/crypto/aptos",
    "/investing/crypto/arbitrum",
    "/investing/crypto/arweave",
    "/investing/crypto/astar",
    "/investing/crypto/avalanche",
    "/investing/crypto/axie-infinity",
    "/investing/crypto/base-chain",
    "/investing/crypto/beam",
    "/investing/crypto/bitcoin",
    "/investing/crypto/bittensor",
    "/investing/crypto/blast",
    "/investing/crypto/blur",
    "/investing/crypto/bnb",
    "/investing/crypto/cardano",
    "/investing/crypto/celestia",
    "/investing/crypto/celo",
    "/investing/crypto/chainlink",
    "/investing/crypto/cosmos",
    "/investing/crypto/cronos",
    "/investing/crypto/decentraland",
    "/investing/crypto/dogecoin",
    "/investing/crypto/dymension",
    "/investing/crypto/eigenlayer",
    "/investing/crypto/enjin",
    "/investing/crypto/ethena",
    "/investing/crypto/ethereum",
    "/investing/crypto/ethfi",
    "/investing/crypto/fantom",
    "/investing/crypto/fetch-ai",
    "/investing/crypto/filecoin",
    "/investing/crypto/flow",
    "/investing/crypto/gala",
    "/investing/crypto/harmony",
    "/investing/crypto/hedera",
    "/investing/crypto/helium",
    "/investing/crypto/illuvium",
    "/investing/crypto/immutable-x",
    "/investing/crypto/injective",
    "/investing/crypto/internet-computer",
    "/investing/crypto/jito",
    "/investing/crypto/jupiter",
    "/investing/crypto/kaspa",
    "/investing/crypto/kava",
    "/investing/crypto/lido",
    "/investing/crypto/linea",
    "/investing/crypto/litecoin",
    "/investing/crypto/magic",
    "/investing/crypto/mantle",
    "/investing/crypto/marinade",
    "/investing/crypto/merlin",
    "/investing/crypto/mina",
    "/investing/crypto/mode",
    "/investing/crypto/monero",
    "/investing/crypto/moonbeam",
    "/investing/crypto/movement",
    "/investing/crypto/near",
    "/investing/crypto/nervos",
    "/investing/crypto/ocean-protocol",
    "/investing/crypto/ondo",
    "/investing/crypto/optimism",
    "/investing/crypto/pendle",
    "/investing/crypto/polkadot",
    "/investing/crypto/polygon",
    "/investing/crypto/pyth-network",
    "/investing/crypto/render",
    "/investing/crypto/rocket-pool",
    "/investing/crypto/saga",
    "/investing/crypto/sandbox",
    "/investing/crypto/scroll",
    "/investing/crypto/sei",
    "/investing/crypto/shiba-inu",
    "/investing/crypto/singularitynet",
    "/investing/crypto/solana",
    "/investing/crypto/stacks",
    "/investing/crypto/starknet",
    "/investing/crypto/stellar",
    "/investing/crypto/stepn",
    "/investing/crypto/sui",
    "/investing/crypto/the-graph",
    "/investing/crypto/theta",
    "/investing/crypto/thorchain",
    "/investing/crypto/toncoin",
    "/investing/crypto/tron",
    "/investing/crypto/uniswap",
    "/investing/crypto/vechain",
    "/investing/crypto/wax",
    "/investing/crypto/worldcoin",
    "/investing/crypto/xrp",
    "/investing/crypto/zilliqa",
    "/investing/crypto/zksync",
    // Investing - Learn
    "/investing/learn/ai-crypto-tokens",
    "/investing/learn/bitcoin-halving-explained",
    "/investing/learn/crypto-bear-market-strategies",
    "/investing/learn/crypto-bull-market-strategies",
    "/investing/learn/crypto-derivatives-explained",
    "/investing/learn/crypto-etfs-explained",
    "/investing/learn/crypto-index-funds",
    "/investing/learn/crypto-investing-for-beginners",
    "/investing/learn/crypto-lending-investing",
    "/investing/learn/crypto-portfolio-rebalancing",
    "/investing/learn/crypto-sentiment-analysis",
    "/investing/learn/defi-vs-cefi-investing",
    "/investing/learn/depin-investing-guide",
    "/investing/learn/diversification",
    "/investing/learn/dollar-cost-averaging",
    "/investing/learn/fundamental-analysis",
    "/investing/learn/gaming-crypto-guide",
    "/investing/learn/how-to-buy-aptos",
    "/investing/learn/how-to-buy-avalanche",
    "/investing/learn/how-to-buy-bitcoin",
    "/investing/learn/how-to-buy-bnb",
    "/investing/learn/how-to-buy-cardano",
    "/investing/learn/how-to-buy-chainlink",
    "/investing/learn/how-to-buy-cosmos",
    "/investing/learn/how-to-buy-dogecoin",
    "/investing/learn/how-to-buy-ethereum",
    "/investing/learn/how-to-buy-litecoin",
    "/investing/learn/how-to-buy-monero",
    "/investing/learn/how-to-buy-near",
    "/investing/learn/how-to-buy-polkadot",
    "/investing/learn/how-to-buy-shiba-inu",
    "/investing/learn/how-to-buy-solana",
    "/investing/learn/how-to-buy-stellar",
    "/investing/learn/how-to-buy-sui",
    "/investing/learn/how-to-buy-toncoin",
    "/investing/learn/how-to-buy-tron",
    "/investing/learn/how-to-buy-xrp",
    "/investing/learn/how-to-invest-in-crypto",
    "/investing/learn/layer-2-investing",
    "/investing/learn/liquidity-mining-guide",
    "/investing/learn/market-cap-explained",
    "/investing/learn/meme-coin-investing",
    "/investing/learn/on-chain-analysis-guide",
    "/investing/learn/portfolio-allocation",
    "/investing/learn/privacy-coins-guide",
    "/investing/learn/risk-management",
    "/investing/learn/rwa-tokens-explained",
    "/investing/learn/staking-explained",
    "/investing/learn/technical-analysis",
    "/investing/learn/tokenomics-guide",
    "/investing/learn/whale-tracking-guide",
    "/investing/learn/yield-vs-growth",
    // Investing - Calculators
    "/investing/calculators/dca-calculator",
    "/investing/calculators/profit-calculator",
    "/investing/calculators/roi-calculator",
    "/investing/calculators/staking-calculator",
    // Investing - Staking
    "/investing/staking",
    "/investing/staking/best",
    "/investing/staking/best/beginners",
    "/investing/staking/best/ethereum",
    "/investing/staking/best/highest-apy",
    "/investing/staking/best/liquid-staking",
    "/investing/staking/best/restaking",
    "/investing/staking/best/solana",
    "/investing/staking/best/validators",
    "/investing/staking/reviews/coinbase-staking",
    "/investing/staking/reviews/eigenlayer",
    "/investing/staking/reviews/jito",
    "/investing/staking/reviews/kraken-staking",
    "/investing/staking/reviews/lido",
    "/investing/staking/reviews/marinade",
    "/investing/staking/reviews/rocket-pool",
    "/investing/staking/reviews/stakewise",
    "/investing/staking/compare/coinbase-vs-lido",
    "/investing/staking/compare/eigenlayer-vs-lido",
    "/investing/staking/compare/jito-vs-marinade",
    "/investing/staking/compare/lido-vs-rocket-pool",
    "/investing/staking/learn/liquid-staking-explained",
    "/investing/staking/learn/restaking-explained",
    "/investing/staking/learn/staking-rewards-taxes",
    "/investing/staking/learn/staking-risks",
    "/investing/staking/learn/validator-guide",
    "/investing/staking/learn/what-is-staking",
    "/investing/staking/calculators/compound-staking-calculator",
    "/investing/staking/calculators/staking-rewards-calculator",

    // ==========================================
    // Taxes
    // ==========================================
    "/taxes",
    // Taxes - Best
    "/taxes/best",
    "/taxes/best/accountants",
    "/taxes/best/defi-tax-tools",
    "/taxes/best/free-tools",
    "/taxes/best/software",
    // Taxes - Reviews
    "/taxes/reviews/cointracker",
    "/taxes/reviews/cryptotaxcalculator",
    "/taxes/reviews/koinly",
    "/taxes/reviews/taxbit",
    "/taxes/reviews/tokentax",
    // Taxes - Compare
    "/taxes/compare/koinly-vs-cointracker",
    "/taxes/compare/koinly-vs-cryptotaxcalculator",
    "/taxes/compare/taxbit-vs-cointracker",
    // Taxes - Learn
    "/taxes/learn/airdrop-tax-guide",
    "/taxes/learn/airdrop-taxes",
    "/taxes/learn/capital-gains",
    "/taxes/learn/cost-basis-methods",
    "/taxes/learn/crypto-tax-guide",
    "/taxes/learn/crypto-taxes-australia",
    "/taxes/learn/crypto-taxes-brazil",
    "/taxes/learn/crypto-taxes-canada",
    "/taxes/learn/crypto-taxes-europe",
    "/taxes/learn/crypto-taxes-germany",
    "/taxes/learn/crypto-taxes-india",
    "/taxes/learn/crypto-taxes-japan",
    "/taxes/learn/crypto-taxes-portugal",
    "/taxes/learn/crypto-taxes-singapore",
    "/taxes/learn/crypto-taxes-uae",
    "/taxes/learn/crypto-taxes-uk",
    "/taxes/learn/crypto-taxes-usa",
    "/taxes/learn/defi-tax-guide",
    "/taxes/learn/defi-taxes",
    "/taxes/learn/how-crypto-is-taxed",
    "/taxes/learn/how-to-file",
    "/taxes/learn/irs-form-8949",
    "/taxes/learn/mining-tax-guide",
    "/taxes/learn/mining-taxes",
    "/taxes/learn/nft-tax-guide",
    "/taxes/learn/nft-taxes",
    "/taxes/learn/reporting-requirements",
    "/taxes/learn/staking-rewards-taxes",
    "/taxes/learn/staking-taxes",
    "/taxes/learn/tax-loss-harvesting",
    "/taxes/learn/wash-sale-rule",
    // Taxes - Calculators
    "/taxes/calculators/capital-gains-calculator",
    "/taxes/calculators/tax-calculator",

    // ==========================================
    // DeFi Lending
    // ==========================================
    "/defi-lending",
    // DeFi Lending - Best
    "/defi-lending/best",
    "/defi-lending/best/cross-chain",
    "/defi-lending/best/ethereum",
    "/defi-lending/best/fixed-rate",
    "/defi-lending/best/layer-2",
    "/defi-lending/best/liquidity-pools",
    "/defi-lending/best/solana",
    "/defi-lending/best/stablecoin-yield",
    "/defi-lending/best/yield-aggregators",
    // DeFi Lending - Reviews
    "/defi-lending/reviews/aave",
    "/defi-lending/reviews/benqi",
    "/defi-lending/reviews/compound",
    "/defi-lending/reviews/curve",
    "/defi-lending/reviews/euler",
    "/defi-lending/reviews/fraxlend",
    "/defi-lending/reviews/goldfinch",
    "/defi-lending/reviews/lido",
    "/defi-lending/reviews/maple",
    "/defi-lending/reviews/morpho",
    "/defi-lending/reviews/radiant",
    "/defi-lending/reviews/silo",
    "/defi-lending/reviews/spark",
    "/defi-lending/reviews/venus",
    "/defi-lending/reviews/yearn",
    // DeFi Lending - Compare
    "/defi-lending/compare/aave-vs-compound",
    "/defi-lending/compare/aave-vs-morpho",
    "/defi-lending/compare/curve-vs-uniswap",
    "/defi-lending/compare/lido-vs-eigenlayer",
    "/defi-lending/compare/lido-vs-rocket-pool",
    "/defi-lending/compare/spark-vs-aave",
    "/defi-lending/compare/yearn-vs-convex",
    // DeFi Lending - Learn
    "/defi-lending/learn/apy-vs-apr",
    "/defi-lending/learn/defi-insurance-guide",
    "/defi-lending/learn/defi-risks-guide",
    "/defi-lending/learn/flash-loans-explained",
    "/defi-lending/learn/how-to-earn-yield",
    "/defi-lending/learn/impermanent-loss",
    "/defi-lending/learn/liquidity-pools-explained",
    "/defi-lending/learn/liquidity-providing-guide",
    "/defi-lending/learn/smart-contract-risks",
    "/defi-lending/learn/tvl-explained",
    "/defi-lending/learn/what-is-defi-lending",
    "/defi-lending/learn/yield-farming-guide",
    // DeFi Lending - Calculators
    "/defi-lending/calculators/impermanent-loss-calculator",
    "/defi-lending/calculators/yield-calculator",

    // ==========================================
    // Crypto Loans
    // ==========================================
    "/crypto-loans",
    // Crypto Loans - Best
    "/crypto-loans/best",
    "/crypto-loans/best/bitcoin-loans",
    "/crypto-loans/best/credit-lines",
    "/crypto-loans/best/defi",
    "/crypto-loans/best/ethereum-loans",
    "/crypto-loans/best/flash-loans",
    "/crypto-loans/best/institutional",
    "/crypto-loans/best/low-interest",
    "/crypto-loans/best/low-ltv",
    "/crypto-loans/best/margin-lending",
    "/crypto-loans/best/nft-collateral",
    "/crypto-loans/best/no-credit-check",
    "/crypto-loans/best/no-kyc",
    "/crypto-loans/best/stablecoin",
    "/crypto-loans/best/stablecoin-loans",
    // Crypto Loans - Reviews
    "/crypto-loans/reviews/aave-loans",
    "/crypto-loans/reviews/celsius",
    "/crypto-loans/reviews/compound-loans",
    "/crypto-loans/reviews/makerdao",
    "/crypto-loans/reviews/nexo",
    "/crypto-loans/reviews/salt-lending",
    "/crypto-loans/reviews/youhodler",
    // Crypto Loans - Compare
    "/crypto-loans/compare/cefi-vs-defi-loans",
    "/crypto-loans/compare/compound-vs-aave-loans",
    "/crypto-loans/compare/makerdao-vs-compound",
    "/crypto-loans/compare/nexo-vs-aave",
    "/crypto-loans/compare/nexo-vs-celsius",
    // Crypto Loans - Learn
    "/crypto-loans/learn/cefi-vs-defi-lending",
    "/crypto-loans/learn/crypto-loan-taxes",
    "/crypto-loans/learn/crypto-mortgage",
    "/crypto-loans/learn/flash-loans-explained",
    "/crypto-loans/learn/how-to-borrow-against-crypto",
    "/crypto-loans/learn/interest-rates-comparison",
    "/crypto-loans/learn/liquidation-risk",
    "/crypto-loans/learn/loan-risks-guide",
    "/crypto-loans/learn/ltv-ratio-explained",
    "/crypto-loans/learn/overcollateralization-explained",
    "/crypto-loans/learn/repayment-strategies",
    "/crypto-loans/learn/what-are-crypto-backed-loans",
    // Crypto Loans - Calculators
    "/crypto-loans/calculators/liquidation-price-calculator",
    "/crypto-loans/calculators/loan-calculator",
    "/crypto-loans/calculators/ltv-calculator",

    // ==========================================
    // Crypto Cards
    // ==========================================
    "/crypto-cards",
    // Crypto Cards - Best
    "/crypto-cards/best",
    "/crypto-cards/best/beginners",
    "/crypto-cards/best/business",
    "/crypto-cards/best/cashback",
    "/crypto-cards/best/debit",
    "/crypto-cards/best/high-spenders",
    "/crypto-cards/best/no-annual-fee",
    "/crypto-cards/best/prepaid",
    "/crypto-cards/best/rewards",
    "/crypto-cards/best/staking-rewards",
    "/crypto-cards/best/travel",
    // Crypto Cards - Reviews
    "/crypto-cards/reviews/baanx-card",
    "/crypto-cards/reviews/binance-card",
    "/crypto-cards/reviews/bitpay-card",
    "/crypto-cards/reviews/bybit-card",
    "/crypto-cards/reviews/coinbase-card",
    "/crypto-cards/reviews/crypto-com-card",
    "/crypto-cards/reviews/crypto-com-visa",
    "/crypto-cards/reviews/fold-card",
    "/crypto-cards/reviews/gemini-card",
    "/crypto-cards/reviews/gnosis-card",
    "/crypto-cards/reviews/hi-card",
    "/crypto-cards/reviews/hold-card",
    "/crypto-cards/reviews/nexo-card",
    "/crypto-cards/reviews/plutus-card",
    "/crypto-cards/reviews/rain-card",
    "/crypto-cards/reviews/swipe-card",
    "/crypto-cards/reviews/wirex-card",
    // Crypto Cards - Compare
    "/crypto-cards/compare/bitpay-vs-crypto-com",
    "/crypto-cards/compare/coinbase-card-vs-gemini-card",
    "/crypto-cards/compare/crypto-com-vs-binance-card",
    "/crypto-cards/compare/crypto-com-vs-bybit-card",
    "/crypto-cards/compare/crypto-com-vs-coinbase-card",
    "/crypto-cards/compare/fold-vs-coinbase-card",
    "/crypto-cards/compare/nexo-vs-crypto-com",
    "/crypto-cards/compare/wirex-vs-plutus",
    // Crypto Cards - Learn
    "/crypto-cards/learn/best-card-strategies",
    "/crypto-cards/learn/best-crypto-card-rewards",
    "/crypto-cards/learn/card-security-tips",
    "/crypto-cards/learn/cashback-vs-rewards",
    "/crypto-cards/learn/crypto-card-fees-compared",
    "/crypto-cards/learn/crypto-card-fees-explained",
    "/crypto-cards/learn/crypto-card-rewards-explained",
    "/crypto-cards/learn/crypto-card-security",
    "/crypto-cards/learn/crypto-card-tax-implications",
    "/crypto-cards/learn/crypto-card-taxes",
    "/crypto-cards/learn/crypto-vs-traditional-cards",
    "/crypto-cards/learn/how-crypto-cards-work",
    "/crypto-cards/learn/how-to-choose-crypto-card",
    "/crypto-cards/learn/prepaid-vs-debit-crypto",
    "/crypto-cards/learn/staking-for-card-tiers",
    // Crypto Cards - Calculators
    "/crypto-cards/calculators/card-comparison-tool",
    "/crypto-cards/calculators/cashback-calculator",
    "/crypto-cards/calculators/rewards-calculator",

    // ==========================================
    // NFTs
    // ==========================================
    "/nfts",
    // NFTs - Best
    "/nfts/best",
    "/nfts/best/art",
    "/nfts/best/beginners",
    "/nfts/best/bitcoin-ordinals",
    "/nfts/best/creators",
    "/nfts/best/ethereum",
    "/nfts/best/free-mint",
    "/nfts/best/gaming",
    "/nfts/best/low-fee",
    "/nfts/best/music",
    "/nfts/best/photography",
    "/nfts/best/solana",
    // NFTs - Reviews
    "/nfts/reviews/blur",
    "/nfts/reviews/foundation",
    "/nfts/reviews/looksrare",
    "/nfts/reviews/magic-eden",
    "/nfts/reviews/opensea",
    "/nfts/reviews/rarible",
    "/nfts/reviews/superrare",
    "/nfts/reviews/tensor",
    "/nfts/reviews/x2y2",
    "/nfts/reviews/zora",
    // NFTs - Compare
    "/nfts/compare/foundation-vs-superrare",
    "/nfts/compare/looksrare-vs-x2y2",
    "/nfts/compare/magic-eden-vs-opensea",
    "/nfts/compare/opensea-vs-blur",
    "/nfts/compare/opensea-vs-rarible",
    "/nfts/compare/tensor-vs-magic-eden",
    // NFTs - Learn
    "/nfts/learn/bitcoin-ordinals-explained",
    "/nfts/learn/dynamic-nfts",
    "/nfts/learn/how-to-buy-nfts",
    "/nfts/learn/how-to-create-nfts",
    "/nfts/learn/nft-art-guide",
    "/nfts/learn/nft-domain-names",
    "/nfts/learn/nft-flipping-guide",
    "/nfts/learn/nft-fractionalization",
    "/nfts/learn/nft-gaming-guide",
    "/nfts/learn/nft-investing-guide",
    "/nfts/learn/nft-lending-borrowing",
    "/nfts/learn/nft-marketplaces-explained",
    "/nfts/learn/nft-music",
    "/nfts/learn/nft-photography",
    "/nfts/learn/nft-royalties",
    "/nfts/learn/nft-royalties-explained",
    "/nfts/learn/nft-security-tips",
    "/nfts/learn/nft-storage",
    "/nfts/learn/nft-tax-guide",
    "/nfts/learn/soulbound-tokens",
    "/nfts/learn/what-are-nfts",
    // NFTs - Tools
    "/nfts/tools/floor-price-tracker",
    "/nfts/tools/profit-calculator",
    "/nfts/tools/rarity-checker",

    // ==========================================
    // Insurance
    // ==========================================
    "/insurance",
    // Insurance - Best
    "/insurance/best",
    "/insurance/best/defi-protocols",
    "/insurance/best/depeg-cover",
    "/insurance/best/exchange-cover",
    "/insurance/best/protocol-cover",
    "/insurance/best/smart-contract",
    "/insurance/best/wallet-protection",
    // Insurance - Reviews
    "/insurance/reviews/bridge-mutual",
    "/insurance/reviews/insurace",
    "/insurance/reviews/nexus-mutual",
    "/insurance/reviews/risk-harbor",
    "/insurance/reviews/unslashed",
    // Insurance - Learn
    "/insurance/learn/crypto-custody-insurance",
    "/insurance/learn/crypto-insurance-guide",
    "/insurance/learn/defi-hack-protection",
    "/insurance/learn/defi-insurance-how-it-works",
    "/insurance/learn/exchange-insurance-explained",
    "/insurance/learn/exchange-insurance-fdic",
    "/insurance/learn/how-to-insure-your-crypto",
    "/insurance/learn/insurance-protocols-compared",
    "/insurance/learn/rug-pull-protection",
    "/insurance/learn/smart-contract-audit-guide",
    "/insurance/learn/smart-contract-cover-explained",
    "/insurance/learn/stablecoin-depeg-risks",
    "/insurance/learn/what-is-crypto-insurance",

    // ==========================================
    // Long Term
    // ==========================================
    "/long-term",
    // Long Term - Best
    "/long-term/best",
    "/long-term/best/advisors",
    "/long-term/best/blue-chip-crypto",
    "/long-term/best/cold-storage-strategies",
    "/long-term/best/crypto-ira",
    "/long-term/best/dividend-crypto",
    "/long-term/best/dividend-tokens",
    "/long-term/best/hodl-coins",
    "/long-term/best/self-directed",
    "/long-term/best/staking-long-term",
    // Long Term - Learn
    "/long-term/learn/bear-market-strategies",
    "/long-term/learn/bitcoin-halving-guide",
    "/long-term/learn/bitcoin-ira-guide",
    "/long-term/learn/bitcoin-retirement-strategy",
    "/long-term/learn/bull-market-strategies",
    "/long-term/learn/crypto-correlation-guide",
    "/long-term/learn/crypto-estate-planning",
    "/long-term/learn/crypto-index-funds",
    "/long-term/learn/crypto-inheritance",
    "/long-term/learn/crypto-retirement-planning",
    "/long-term/learn/crypto-savings-accounts",
    "/long-term/learn/dollar-cost-averaging",
    "/long-term/learn/hodl-strategy",
    "/long-term/learn/macro-analysis-crypto",
    "/long-term/learn/market-cycles",
    "/long-term/learn/on-chain-analysis-guide",
    "/long-term/learn/passive-income",
    "/long-term/learn/portfolio-rebalancing",
    "/long-term/learn/risk-management",
    "/long-term/learn/tax-loss-harvesting-crypto",

    // ==========================================
    // Web3 Business
    // ==========================================
    "/web3-business",
    // Web3 Business - Best
    "/web3-business/best",
    "/web3-business/best/accounting",
    "/web3-business/best/business-banking",
    "/web3-business/best/corporate-cards",
    "/web3-business/best/dao-tools",
    "/web3-business/best/grants",
    "/web3-business/best/launchpads",
    "/web3-business/best/legal",
    "/web3-business/best/payment-processing",
    "/web3-business/best/payroll",
    "/web3-business/best/treasury-tools",
    // Web3 Business - Learn
    "/web3-business/learn/accepting-crypto-payments",
    "/web3-business/learn/blockchain-scalability",
    "/web3-business/learn/business-taxes",
    "/web3-business/learn/crypto-payroll",
    "/web3-business/learn/dao-formation",
    "/web3-business/learn/decentralized-governance",
    "/web3-business/learn/defi-for-businesses",
    "/web3-business/learn/fundraising",
    "/web3-business/learn/how-to-start-web3-business",
    "/web3-business/learn/interoperability-guide",
    "/web3-business/learn/regulatory-compliance",
    "/web3-business/learn/smart-contract-development",
    "/web3-business/learn/token-launch-guide",
    "/web3-business/learn/tokenomics-design",
    "/web3-business/learn/treasury-management",
    "/web3-business/learn/web3-hiring-guide",
    "/web3-business/learn/web3-legal-frameworks",
    "/web3-business/learn/web3-marketing",
    "/web3-business/learn/web3-security-best-practices",

    // ==========================================
    // Spending
    // ==========================================
    "/spending",
    // Spending - Best
    "/spending/best",
    "/spending/best/bill-pay",
    "/spending/best/cashback",
    "/spending/best/crypto-to-fiat",
    "/spending/best/debit-cards",
    "/spending/best/gift-cards",
    "/spending/best/merchants",
    "/spending/best/online-shopping",
    "/spending/best/payment-apps",
    "/spending/best/rewards",
    "/spending/best/travel",
    // Spending - Reviews
    "/spending/reviews/bitpay-app",
    "/spending/reviews/coingate",
    "/spending/reviews/crypto-com-pay",
    "/spending/reviews/nowpayments",
    // Spending - Compare
    "/spending/compare/bitpay-vs-coingate",
    "/spending/compare/crypto-com-pay-vs-bitpay",
    // Spending - Learn
    "/spending/learn/bitcoin-atm-guide",
    "/spending/learn/bitcoin-payments-guide",
    "/spending/learn/cbdc-explained",
    "/spending/learn/cross-border-payments",
    "/spending/learn/crypto-atm-guide",
    "/spending/learn/crypto-cashback-guide",
    "/spending/learn/crypto-debit-cards-explained",
    "/spending/learn/crypto-gift-cards",
    "/spending/learn/crypto-paypal-guide",
    "/spending/learn/crypto-real-estate",
    "/spending/learn/crypto-remittances",
    "/spending/learn/crypto-shopping-guide",
    "/spending/learn/crypto-subscription-payments",
    "/spending/learn/crypto-travel-guide",
    "/spending/learn/how-to-spend-bitcoin",
    "/spending/learn/layer-2-payments",
    "/spending/learn/lightning-network-payments",
    "/spending/learn/merchant-adoption-guide",
    "/spending/learn/merchant-crypto-acceptance",
    "/spending/learn/pay-bills-with-crypto",
    "/spending/learn/spending-crypto",
    "/spending/learn/stablecoin-payments",
    "/spending/learn/tax-implications-spending",

    // ==========================================
    // Learn
    // ==========================================
    "/learn",
    "/learn/blockchain-trilemma",
    "/learn/crypto-ai-intersection",
    "/learn/crypto-derivatives",
    "/learn/crypto-for-beginners",
    "/learn/crypto-glossary",
    "/learn/crypto-insurance-options",
    "/learn/crypto-legal-status",
    "/learn/crypto-lending-explained",
    "/learn/crypto-market-cycles",
    "/learn/crypto-market-indicators",
    "/learn/crypto-portfolio-management",
    "/learn/crypto-regulation",
    "/learn/crypto-regulation-australia",
    "/learn/crypto-regulation-canada",
    "/learn/crypto-regulation-eu",
    "/learn/crypto-regulation-india",
    "/learn/crypto-regulation-japan",
    "/learn/crypto-regulation-singapore",
    "/learn/crypto-regulation-uk",
    "/learn/crypto-regulation-us",
    "/learn/crypto-regulation-usa",
    "/learn/crypto-scams",
    "/learn/crypto-security-guide",
    "/learn/crypto-sentiment-analysis",
    "/learn/crypto-vs-stocks",
    "/learn/defi-yield-strategies",
    "/learn/how-to-dyor",
    "/learn/tokenomics-explained",
    "/learn/what-are-gas-fees",
    "/learn/what-are-nfts",
    "/learn/what-are-smart-contracts",
    "/learn/what-are-stablecoins",
    "/learn/what-is-a-dao",
    "/learn/what-is-a-dex",
    "/learn/what-is-bitcoin",
    "/learn/what-is-blockchain",
    "/learn/what-is-cryptocurrency",
    "/learn/what-is-defi",
    "/learn/what-is-ethereum",
    "/learn/what-is-liquid-staking",
    "/learn/what-is-web3",
    "/learn/what-is-yield-farming",

    // ==========================================
    // Glossary
    // ==========================================
    "/learn/glossary",
    "/learn/glossary/address",
    "/learn/glossary/airdrop",
    "/learn/glossary/altcoin",
    "/learn/glossary/amm",
    "/learn/glossary/ape-in",
    "/learn/glossary/arbitrage",
    "/learn/glossary/asic",
    "/learn/glossary/bag-holder",
    "/learn/glossary/bear-market",
    "/learn/glossary/bitcoin-dominance",
    "/learn/glossary/block",
    "/learn/glossary/block-explorer",
    "/learn/glossary/block-reward",
    "/learn/glossary/blockchain",
    "/learn/glossary/bridge",
    "/learn/glossary/btfd",
    "/learn/glossary/bull-market",
    "/learn/glossary/burn",
    "/learn/glossary/candlestick",
    "/learn/glossary/cefi",
    "/learn/glossary/centralized-exchange",
    "/learn/glossary/cold-wallet",
    "/learn/glossary/collateral",
    "/learn/glossary/consensus",
    "/learn/glossary/cross-chain",
    "/learn/glossary/crypto-winter",
    "/learn/glossary/dao",
    "/learn/glossary/dapp",
    "/learn/glossary/dca",
    "/learn/glossary/decentralization",
    "/learn/glossary/defi",
    "/learn/glossary/degen",
    "/learn/glossary/dex",
    "/learn/glossary/diamond-hands",
    "/learn/glossary/difficulty",
    "/learn/glossary/eip",
    "/learn/glossary/erc-20",
    "/learn/glossary/erc-721",
    "/learn/glossary/ethereum-virtual-machine",
    "/learn/glossary/fiat",
    "/learn/glossary/flash-loan",
    "/learn/glossary/flippening",
    "/learn/glossary/floor-price",
    "/learn/glossary/fomo",
    "/learn/glossary/fork",
    "/learn/glossary/fud",
    "/learn/glossary/gas",
    "/learn/glossary/genesis-block",
    "/learn/glossary/governance-token",
    "/learn/glossary/gwei",
    "/learn/glossary/halving",
    "/learn/glossary/hardware-wallet",
    "/learn/glossary/hash-rate",
    "/learn/glossary/hodl",
    "/learn/glossary/hot-wallet",
    "/learn/glossary/ico",
    "/learn/glossary/impermanent-loss",
    "/learn/glossary/interoperability",
    "/learn/glossary/kyc",
    "/learn/glossary/layer-1",
    "/learn/glossary/layer-2",
    "/learn/glossary/leverage",
    "/learn/glossary/liquidation",
    "/learn/glossary/liquidity",
    "/learn/glossary/liquidity-pool",
    "/learn/glossary/mainnet",
    "/learn/glossary/market-cap",
    "/learn/glossary/market-maker",
    "/learn/glossary/memecoin",
    "/learn/glossary/mempool",
    "/learn/glossary/merkle-tree",
    "/learn/glossary/metaverse",
    "/learn/glossary/mining",
    "/learn/glossary/mint",
    "/learn/glossary/moon",
    "/learn/glossary/multi-sig",
    "/learn/glossary/nft",
    "/learn/glossary/node",
    "/learn/glossary/nonce",
    "/learn/glossary/off-chain",
    "/learn/glossary/on-chain",
    "/learn/glossary/oracle",
    "/learn/glossary/paper-hands",
    "/learn/glossary/peer-to-peer",
    "/learn/glossary/play-to-earn",
    "/learn/glossary/pos",
    "/learn/glossary/pow",
    "/learn/glossary/private-key",
    "/learn/glossary/protocol",
    "/learn/glossary/pump-and-dump",
    "/learn/glossary/rug-pull",
    "/learn/glossary/satoshi",
    "/learn/glossary/seed-phrase",
    "/learn/glossary/sharding",
    "/learn/glossary/slippage",
    "/learn/glossary/smart-contract",
    "/learn/glossary/stablecoin",
    "/learn/glossary/staking",
    "/learn/glossary/swap",
    "/learn/glossary/testnet",

    // ==========================================
    // Auto-Added Routes (2026-03-10)
    // ==========================================
    "/crypto-cards/best/canada",  // auto-added 2026-03-10
    "/crypto-cards/best/europe",  // auto-added 2026-03-10
    "/crypto-cards/best/no-fees",  // auto-added 2026-03-10
    "/crypto-cards/best/uk",  // auto-added 2026-03-10
    "/crypto-cards/best/virtual",  // auto-added 2026-03-10
    "/crypto-cards/learn/crypto-card-cashback-guide",  // auto-added 2026-03-10
    "/crypto-cards/learn/crypto-card-fees-guide",  // auto-added 2026-03-10
    "/crypto-cards/learn/crypto-card-for-business",  // auto-added 2026-03-10
    "/crypto-cards/learn/crypto-card-limits",  // auto-added 2026-03-10
    "/crypto-cards/learn/crypto-card-staking-benefits",  // auto-added 2026-03-10
    "/crypto-cards/learn/crypto-cashback-explained",  // auto-added 2026-03-10
    "/crypto-cards/learn/spending-crypto-vs-fiat",  // auto-added 2026-03-10
    "/crypto-cards/learn/staking-rewards-cards",  // auto-added 2026-03-10
    "/crypto-cards/learn/travel-crypto-cards",  // auto-added 2026-03-10
    "/crypto-cards/learn/virtual-crypto-cards",  // auto-added 2026-03-10
    "/crypto-cards/reviews/club-card",  // auto-added 2026-03-10
    "/crypto-cards/reviews/holyheld-card",  // auto-added 2026-03-10
    "/crypto-cards/reviews/shakepay-card",  // auto-added 2026-03-10
    "/crypto-loans/compare/aave-vs-compound-lending",  // auto-added 2026-03-10
    "/crypto-loans/compare/euler-vs-silo",  // auto-added 2026-03-10
    "/crypto-loans/compare/fraxlend-vs-aave",  // auto-added 2026-03-10
    "/crypto-loans/compare/makerdao-vs-aave",  // auto-added 2026-03-10
    "/crypto-loans/compare/maple-vs-goldfinch",  // auto-added 2026-03-10
    "/crypto-loans/compare/morpho-vs-aave",  // auto-added 2026-03-10
    "/crypto-loans/compare/nexo-vs-blockfi",  // auto-added 2026-03-10
    "/crypto-loans/compare/radiant-vs-aave",  // auto-added 2026-03-10
    "/crypto-loans/compare/spark-vs-aave",  // auto-added 2026-03-10
    "/crypto-loans/compare/venus-vs-benqi",  // auto-added 2026-03-10
    "/crypto-loans/learn/bitcoin-backed-loans",  // auto-added 2026-03-10
    "/crypto-loans/learn/business-crypto-loans",  // auto-added 2026-03-10
    "/crypto-loans/learn/collateral-requirements",  // auto-added 2026-03-10
    "/crypto-loans/learn/crypto-credit-lines",  // auto-added 2026-03-10
    "/crypto-loans/learn/crypto-loan-interest-rates",  // auto-added 2026-03-10
    "/crypto-loans/learn/crypto-loan-strategies",  // auto-added 2026-03-10
    "/crypto-loans/learn/crypto-loans-vs-selling",  // auto-added 2026-03-10
    "/crypto-loans/learn/crypto-mortgage-guide",  // auto-added 2026-03-10
    "/crypto-loans/learn/defi-vs-cefi-lending",  // auto-added 2026-03-10
    "/crypto-loans/learn/flash-loan-guide",  // auto-added 2026-03-10
    "/crypto-loans/learn/how-crypto-loans-work",  // auto-added 2026-03-10
    "/crypto-loans/learn/institutional-crypto-lending",  // auto-added 2026-03-10
    "/crypto-loans/learn/liquidation-prevention",  // auto-added 2026-03-10
    "/crypto-loans/learn/loan-aggregators",  // auto-added 2026-03-10
    "/crypto-loans/learn/loan-to-value-strategies",  // auto-added 2026-03-10
    "/crypto-loans/learn/ltv-ratio-guide",  // auto-added 2026-03-10
    "/crypto-loans/learn/margin-call-guide",  // auto-added 2026-03-10
    "/crypto-loans/learn/margin-lending-guide",  // auto-added 2026-03-10
    "/crypto-loans/learn/refinancing-crypto-loans",  // auto-added 2026-03-10
    "/crypto-loans/learn/risks-of-crypto-loans",  // auto-added 2026-03-10
    "/crypto-loans/learn/self-repaying-loans",  // auto-added 2026-03-10
    "/crypto-loans/learn/stablecoin-borrowing-guide",  // auto-added 2026-03-10
    "/crypto-loans/learn/stablecoin-lending",  // auto-added 2026-03-10
    "/crypto-loans/reviews/abracadabra",  // auto-added 2026-03-10
    "/crypto-loans/reviews/benqi-loans",  // auto-added 2026-03-10
    "/crypto-loans/reviews/celsius-successor",  // auto-added 2026-03-10
    "/crypto-loans/reviews/ledn",  // auto-added 2026-03-10
    "/crypto-loans/reviews/liquity",  // auto-added 2026-03-10
    "/crypto-loans/reviews/makerdao-loans",  // auto-added 2026-03-10
    "/crypto-loans/reviews/unchained",  // auto-added 2026-03-10
    "/crypto-loans/reviews/venus-loans",  // auto-added 2026-03-10
    "/defi-lending/best/arbitrum",  // auto-added 2026-03-10
    "/defi-lending/best/avalanche",  // auto-added 2026-03-10
    "/defi-lending/best/base",  // auto-added 2026-03-10
    "/defi-lending/best/beginners",  // auto-added 2026-03-10
    "/defi-lending/best/bitcoin",  // auto-added 2026-03-10
    "/defi-lending/best/high-yield",  // auto-added 2026-03-10
    "/defi-lending/best/institutional",  // auto-added 2026-03-10
    "/defi-lending/best/no-kyc",  // auto-added 2026-03-10
    "/defi-lending/best/polygon",  // auto-added 2026-03-10
    "/defi-lending/best/real-world-assets",  // auto-added 2026-03-10
    "/defi-lending/compare/aave-vs-spark",  // auto-added 2026-03-10
    "/defi-lending/compare/cefi-vs-defi-lending",  // auto-added 2026-03-10
    "/defi-lending/compare/compound-vs-venus",  // auto-added 2026-03-10
    "/defi-lending/compare/ethereum-vs-solana-defi",  // auto-added 2026-03-10
    "/defi-lending/compare/fixed-vs-variable-rate",  // auto-added 2026-03-10
    "/defi-lending/compare/lending-vs-staking",  // auto-added 2026-03-10
    "/defi-lending/compare/maple-vs-goldfinch",  // auto-added 2026-03-10
    "/defi-lending/compare/overcollateralized-vs-undercollateralized",  // auto-added 2026-03-10
    "/defi-lending/learn/basis-trade-yield",  // auto-added 2026-03-10
    "/defi-lending/learn/btc-yield-strategies",  // auto-added 2026-03-10
    "/defi-lending/learn/collateral-types-guide",  // auto-added 2026-03-10
    "/defi-lending/learn/collateralization-ratios",  // auto-added 2026-03-10
    "/defi-lending/learn/cross-chain-lending",  // auto-added 2026-03-10
    "/defi-lending/learn/defi-composability-guide",  // auto-added 2026-03-10
    "/defi-lending/learn/defi-credit-scoring",  // auto-added 2026-03-10
    "/defi-lending/learn/defi-governance-explained",  // auto-added 2026-03-10
    "/defi-lending/learn/defi-insurance-options",  // auto-added 2026-03-10
    "/defi-lending/learn/defi-interest-rates-explained",  // auto-added 2026-03-10
    "/defi-lending/learn/defi-lending-strategies",  // auto-added 2026-03-10
    "/defi-lending/learn/defi-lending-taxes",  // auto-added 2026-03-10
    "/defi-lending/learn/delta-neutral-yield",  // auto-added 2026-03-10
    "/defi-lending/learn/eth-yield-strategies",  // auto-added 2026-03-10
    "/defi-lending/learn/fixed-rate-lending",  // auto-added 2026-03-10
    "/defi-lending/learn/flash-loans-guide",  // auto-added 2026-03-10
    "/defi-lending/learn/governance-participation",  // auto-added 2026-03-10
    "/defi-lending/learn/how-defi-lending-works",  // auto-added 2026-03-10
    "/defi-lending/learn/impermanent-loss-guide",  // auto-added 2026-03-10
    "/defi-lending/learn/interest-rate-models",  // auto-added 2026-03-10
    "/defi-lending/learn/lending-pool-mechanics",  // auto-added 2026-03-10
    "/defi-lending/learn/lending-protocols-compared",  // auto-added 2026-03-10
    "/defi-lending/learn/lending-risk-management",  // auto-added 2026-03-10
    "/defi-lending/learn/leveraged-yield-farming",  // auto-added 2026-03-10
    "/defi-lending/learn/liquid-staking-lending",  // auto-added 2026-03-10
    "/defi-lending/learn/liquidation-mechanics",  // auto-added 2026-03-10
    "/defi-lending/learn/liquidity-mining-explained",  // auto-added 2026-03-10
    "/defi-lending/learn/lsd-yield-strategies",  // auto-added 2026-03-10
    "/defi-lending/learn/nft-collateral-lending",  // auto-added 2026-03-10
    "/defi-lending/learn/oracle-risk-lending",  // auto-added 2026-03-10
    "/defi-lending/learn/real-world-asset-lending",  // auto-added 2026-03-10
    "/defi-lending/learn/recursive-lending-strategy",  // auto-added 2026-03-10
    "/defi-lending/learn/restaking-yield-guide",  // auto-added 2026-03-10
    "/defi-lending/learn/smart-contract-audit-guide",  // auto-added 2026-03-10
    "/defi-lending/learn/sol-yield-strategies",  // auto-added 2026-03-10
    "/defi-lending/learn/stablecoin-yield-strategies",  // auto-added 2026-03-10
    "/defi-lending/learn/undercollateralized-lending",  // auto-added 2026-03-10
    "/defi-lending/learn/variable-vs-fixed-rates",  // auto-added 2026-03-10
    "/defi-lending/learn/yield-farming-strategies",  // auto-added 2026-03-10
    "/defi-lending/reviews/alpaca-finance",  // auto-added 2026-03-10
    "/defi-lending/reviews/aurelius",  // auto-added 2026-03-10
    "/defi-lending/reviews/bastion",  // auto-added 2026-03-10
    "/defi-lending/reviews/centrifuge",  // auto-added 2026-03-10
    "/defi-lending/reviews/clearpool",  // auto-added 2026-03-10
    "/defi-lending/reviews/credix",  // auto-added 2026-03-10
    "/defi-lending/reviews/drift",  // auto-added 2026-03-10
    "/defi-lending/reviews/exactly",  // auto-added 2026-03-10
    "/defi-lending/reviews/extra-finance",  // auto-added 2026-03-10
    "/defi-lending/reviews/fluid",  // auto-added 2026-03-10
    "/defi-lending/reviews/granary",  // auto-added 2026-03-10
    "/defi-lending/reviews/impermax",  // auto-added 2026-03-10
    "/defi-lending/reviews/init-capital",  // auto-added 2026-03-10
    "/defi-lending/reviews/juice-finance",  // auto-added 2026-03-10
    "/defi-lending/reviews/kamino",  // auto-added 2026-03-10
    "/defi-lending/reviews/kinza",  // auto-added 2026-03-10
    "/defi-lending/reviews/layerbank",  // auto-added 2026-03-10
    "/defi-lending/reviews/lendle",  // auto-added 2026-03-10
    "/defi-lending/reviews/lodestar",  // auto-added 2026-03-10
    "/defi-lending/reviews/mango-markets",  // auto-added 2026-03-10
    "/defi-lending/reviews/maple-finance",  // auto-added 2026-03-10
    "/defi-lending/reviews/marginfi",  // auto-added 2026-03-10
    "/defi-lending/reviews/mendi",  // auto-added 2026-03-10
    "/defi-lending/reviews/moonwell",  // auto-added 2026-03-10
    "/defi-lending/reviews/notional",  // auto-added 2026-03-10
    "/defi-lending/reviews/orbit",  // auto-added 2026-03-10
    "/defi-lending/reviews/pac-finance",  // auto-added 2026-03-10
    "/defi-lending/reviews/seamless",  // auto-added 2026-03-10
    "/defi-lending/reviews/solend",  // auto-added 2026-03-10
    "/defi-lending/reviews/sonne",  // auto-added 2026-03-10
    "/defi-lending/reviews/sturdy",  // auto-added 2026-03-10
    "/defi-lending/reviews/tarot",  // auto-added 2026-03-10
    "/defi-lending/reviews/tender",  // auto-added 2026-03-10
    "/defi-lending/reviews/truefi",  // auto-added 2026-03-10
    "/defi-lending/reviews/yei-finance",  // auto-added 2026-03-10
    "/defi-lending/reviews/zerolend",  // auto-added 2026-03-10
    "/exchanges/best/austria",  // auto-added 2026-03-10
    "/exchanges/best/bahrain",  // auto-added 2026-03-10
    "/exchanges/best/bangladesh",  // auto-added 2026-03-10
    "/exchanges/best/belgium",  // auto-added 2026-03-10
    "/exchanges/best/bulgaria",  // auto-added 2026-03-10
    "/exchanges/best/cambodia",  // auto-added 2026-03-10
    "/exchanges/best/cameroon",  // auto-added 2026-03-10
    "/exchanges/best/copy-trading",  // auto-added 2026-03-10
    "/exchanges/best/croatia",  // auto-added 2026-03-10
    "/exchanges/best/czech-republic",  // auto-added 2026-03-10
    "/exchanges/best/day-trading",  // auto-added 2026-03-10
    "/exchanges/best/denmark",  // auto-added 2026-03-10
    "/exchanges/best/ethiopia",  // auto-added 2026-03-10
    "/exchanges/best/finland",  // auto-added 2026-03-10
    "/exchanges/best/ghana",  // auto-added 2026-03-10
    "/exchanges/best/greece",  // auto-added 2026-03-10
    "/exchanges/best/high-volume",  // auto-added 2026-03-10
    "/exchanges/best/hungary",  // auto-added 2026-03-10
    "/exchanges/best/institutional",  // auto-added 2026-03-10
    "/exchanges/best/ireland",  // auto-added 2026-03-10
    "/exchanges/best/israel",  // auto-added 2026-03-10
    "/exchanges/best/italy",  // auto-added 2026-03-10
    "/exchanges/best/ivory-coast",  // auto-added 2026-03-10
    "/exchanges/best/kuwait",  // auto-added 2026-03-10
    "/exchanges/best/laos",  // auto-added 2026-03-10
    "/exchanges/best/leverage",  // auto-added 2026-03-10
    "/exchanges/best/malaysia",  // auto-added 2026-03-10
    "/exchanges/best/middle-east",  // auto-added 2026-03-10
    "/exchanges/best/mongolia",  // auto-added 2026-03-10
    "/exchanges/best/morocco",  // auto-added 2026-03-10
    "/exchanges/best/myanmar",  // auto-added 2026-03-10
    "/exchanges/best/nepal",  // auto-added 2026-03-10
    "/exchanges/best/new-zealand",  // auto-added 2026-03-10
    "/exchanges/best/norway",  // auto-added 2026-03-10
    "/exchanges/best/pakistan",  // auto-added 2026-03-10
    "/exchanges/best/peru",  // auto-added 2026-03-10
    "/exchanges/best/portugal",  // auto-added 2026-03-10
    "/exchanges/best/privacy",  // auto-added 2026-03-10
    "/exchanges/best/qatar",  // auto-added 2026-03-10
    "/exchanges/best/romania",  // auto-added 2026-03-10
    "/exchanges/best/saudi-arabia",  // auto-added 2026-03-10
    "/exchanges/best/senegal",  // auto-added 2026-03-10
    "/exchanges/best/sri-lanka",  // auto-added 2026-03-10
    "/exchanges/best/swing-trading",  // auto-added 2026-03-10
    "/exchanges/best/taiwan",  // auto-added 2026-03-10
    "/exchanges/best/tanzania",  // auto-added 2026-03-10
    "/exchanges/best/tunisia",  // auto-added 2026-03-10
    "/exchanges/best/uganda",  // auto-added 2026-03-10
    "/exchanges/best/zimbabwe",  // auto-added 2026-03-10
    "/exchanges/compare",  // auto-added 2026-03-10
    "/exchanges/compare/bitfinex-vs-kraken",  // auto-added 2026-03-10
    "/exchanges/compare/bitstamp-vs-coinbase",  // auto-added 2026-03-10
    "/exchanges/compare/bybit-vs-crypto-com",  // auto-added 2026-03-10
    "/exchanges/compare/centralized-vs-decentralized",  // auto-added 2026-03-10
    "/exchanges/compare/cex-fees-comparison",  // auto-added 2026-03-10
    "/exchanges/compare/coinbase-vs-cash-app",  // auto-added 2026-03-10
    "/exchanges/compare/coinbase-vs-paypal",  // auto-added 2026-03-10
    "/exchanges/compare/curve-vs-uniswap",  // auto-added 2026-03-10
    "/exchanges/compare/dydx-vs-gmx",  // auto-added 2026-03-10
    "/exchanges/compare/etoro-vs-coinbase",  // auto-added 2026-03-10
    "/exchanges/compare/etoro-vs-robinhood",  // auto-added 2026-03-10
    "/exchanges/compare/gemini-vs-crypto-com",  // auto-added 2026-03-10
    "/exchanges/compare/gemini-vs-kraken",  // auto-added 2026-03-10
    "/exchanges/compare/htx-vs-kucoin",  // auto-added 2026-03-10
    "/exchanges/compare/hyperliquid-vs-dydx",  // auto-added 2026-03-10
    "/exchanges/compare/jupiter-vs-raydium",  // auto-added 2026-03-10
    "/exchanges/compare/jupiter-vs-uniswap",  // auto-added 2026-03-10
    "/exchanges/compare/kraken-vs-bybit",  // auto-added 2026-03-10
    "/exchanges/compare/kucoin-vs-binance",  // auto-added 2026-03-10
    "/exchanges/compare/mexc-vs-bybit",  // auto-added 2026-03-10
    "/exchanges/compare/mexc-vs-gate-io",  // auto-added 2026-03-10
    "/exchanges/compare/okx-vs-coinbase",  // auto-added 2026-03-10
    "/exchanges/compare/okx-vs-htx",  // auto-added 2026-03-10
    "/exchanges/compare/opensea-vs-blur",  // auto-added 2026-03-10
    "/exchanges/compare/pancakeswap-vs-uniswap",  // auto-added 2026-03-10
    "/exchanges/compare/phemex-vs-bybit",  // auto-added 2026-03-10
    "/exchanges/compare/pionex-vs-binance",  // auto-added 2026-03-10
    "/exchanges/compare/robinhood-vs-coinbase",  // auto-added 2026-03-10
    "/exchanges/compare/robinhood-vs-webull-crypto",  // auto-added 2026-03-10
    "/exchanges/compare/spot-vs-derivatives",  // auto-added 2026-03-10
    "/exchanges/compare/uniswap-vs-sushiswap",  // auto-added 2026-03-10
    "/exchanges/compare/us-vs-international-exchanges",  // auto-added 2026-03-10
    "/exchanges/learn/amm-explained",  // auto-added 2026-03-10
    "/exchanges/learn/copy-trading-guide",  // auto-added 2026-03-10
    "/exchanges/learn/cross-exchange-arbitrage",  // auto-added 2026-03-10
    "/exchanges/learn/crypto-derivatives-guide",  // auto-added 2026-03-10
    "/exchanges/learn/dark-pools-crypto",  // auto-added 2026-03-10
    "/exchanges/learn/decentralized-exchange-guide",  // auto-added 2026-03-10
    "/exchanges/learn/decentralized-vs-centralized",  // auto-added 2026-03-10
    "/exchanges/learn/dollar-cost-averaging-exchanges",  // auto-added 2026-03-10
    "/exchanges/learn/exchange-aggregators",  // auto-added 2026-03-10
    "/exchanges/learn/exchange-api-trading",  // auto-added 2026-03-10
    "/exchanges/learn/exchange-deposit-methods",  // auto-added 2026-03-10
    "/exchanges/learn/exchange-earn-products",  // auto-added 2026-03-10
    "/exchanges/learn/exchange-insurance",  // auto-added 2026-03-10
    "/exchanges/learn/exchange-insurance-funds",  // auto-added 2026-03-10
    "/exchanges/learn/exchange-launchpads",  // auto-added 2026-03-10
    "/exchanges/learn/exchange-referral-programs",  // auto-added 2026-03-10
    "/exchanges/learn/exchange-regulation-guide",  // auto-added 2026-03-10
    "/exchanges/learn/exchange-regulations-by-country",  // auto-added 2026-03-10
    "/exchanges/learn/exchange-security-checklist",  // auto-added 2026-03-10
    "/exchanges/learn/exchange-security-features",  // auto-added 2026-03-10
    "/exchanges/learn/exchange-staking-guide",  // auto-added 2026-03-10
    "/exchanges/learn/exchange-tax-reporting",  // auto-added 2026-03-10
    "/exchanges/learn/exchange-verification-guide",  // auto-added 2026-03-10
    "/exchanges/learn/exchange-vip-programs",  // auto-added 2026-03-10
    "/exchanges/learn/exchange-vs-wallet",  // auto-added 2026-03-10
    "/exchanges/learn/exchange-withdrawal-guide",  // auto-added 2026-03-10
    "/exchanges/learn/fiat-on-ramps-guide",  // auto-added 2026-03-10
    "/exchanges/learn/front-running-explained",  // auto-added 2026-03-10
    "/exchanges/learn/funding-rates-explained",  // auto-added 2026-03-10
    "/exchanges/learn/grid-trading-bots",  // auto-added 2026-03-10
    "/exchanges/learn/how-exchange-listings-work",  // auto-added 2026-03-10
    "/exchanges/learn/how-to-choose-crypto-exchange",  // auto-added 2026-03-10
    "/exchanges/learn/how-to-read-crypto-charts",  // auto-added 2026-03-10
    "/exchanges/learn/how-to-read-order-book",  // auto-added 2026-03-10
    "/exchanges/learn/how-to-transfer-between-exchanges",  // auto-added 2026-03-10
    "/exchanges/learn/how-to-use-leverage",  // auto-added 2026-03-10
    "/exchanges/learn/impermanent-loss-explained",  // auto-added 2026-03-10
    "/exchanges/learn/kyc-verification-guide",  // auto-added 2026-03-10
    "/exchanges/learn/limit-orders-vs-market-orders",  // auto-added 2026-03-10
    "/exchanges/learn/liquidation-explained",  // auto-added 2026-03-10
    "/exchanges/learn/liquidity-explained",  // auto-added 2026-03-10
    "/exchanges/learn/margin-call-explained",  // auto-added 2026-03-10
    "/exchanges/learn/mev-explained",  // auto-added 2026-03-10
    "/exchanges/learn/order-types-explained",  // auto-added 2026-03-10
    "/exchanges/learn/otc-trading-guide",  // auto-added 2026-03-10
    "/exchanges/learn/p2p-trading-guide",  // auto-added 2026-03-10
    "/exchanges/learn/perpetual-futures-explained",  // auto-added 2026-03-10
    "/exchanges/learn/sandwich-attacks-explained",  // auto-added 2026-03-10
    "/exchanges/learn/slippage-explained",  // auto-added 2026-03-10
    "/exchanges/learn/spot-vs-futures-trading",  // auto-added 2026-03-10
    "/exchanges/learn/volume-profile-explained",  // auto-added 2026-03-10
    "/exchanges/learn/what-are-trading-pairs",  // auto-added 2026-03-10
    "/exchanges/learn/what-is-a-crypto-broker",  // auto-added 2026-03-10
    "/exchanges/learn/what-is-otc-trading",  // auto-added 2026-03-10
    "/exchanges/learn/what-is-proof-of-reserves",  // auto-added 2026-03-10
    "/exchanges/reviews/backpack-exchange",  // auto-added 2026-03-10
    "/exchanges/reviews/bitmex",  // auto-added 2026-03-10
    "/exchanges/reviews/cash-app",  // auto-added 2026-03-10
    "/exchanges/reviews/deribit",  // auto-added 2026-03-10
    "/exchanges/reviews/etoro",  // auto-added 2026-03-10
    "/exchanges/reviews/fidelity-crypto",  // auto-added 2026-03-10
    "/exchanges/reviews/hashkey",  // auto-added 2026-03-10
    "/exchanges/reviews/interactive-brokers-crypto",  // auto-added 2026-03-10
    "/exchanges/reviews/paypal-crypto",  // auto-added 2026-03-10
    "/exchanges/reviews/revolut-crypto",  // auto-added 2026-03-10
    "/exchanges/reviews/robinhood",  // auto-added 2026-03-10
    "/exchanges/reviews/schwab-crypto",  // auto-added 2026-03-10
    "/exchanges/reviews/sofi-crypto",  // auto-added 2026-03-10
    "/exchanges/reviews/td-ameritrade-crypto",  // auto-added 2026-03-10
    "/exchanges/reviews/uphold",  // auto-added 2026-03-10
    "/exchanges/reviews/venmo-crypto",  // auto-added 2026-03-10
    "/exchanges/reviews/webull-crypto",  // auto-added 2026-03-10
    "/insurance/best/cross-chain",  // auto-added 2026-03-10
    "/insurance/best/exchange-coverage",  // auto-added 2026-03-10
    "/insurance/best/yield-farming",  // auto-added 2026-03-10
    "/insurance/learn/bridge-hack-insurance",  // auto-added 2026-03-10
    "/insurance/learn/crypto-insurance-complete-guide",  // auto-added 2026-03-10
    "/insurance/learn/crypto-insurance-vs-traditional",  // auto-added 2026-03-10
    "/insurance/learn/defi-insurance-claims-process",  // auto-added 2026-03-10
    "/insurance/learn/insurance-claims-process",  // auto-added 2026-03-10
    "/insurance/learn/insurance-cost-analysis",  // auto-added 2026-03-10
    "/insurance/learn/insurance-dao-governance",  // auto-added 2026-03-10
    "/insurance/learn/insurance-pool-mechanics",  // auto-added 2026-03-10
    "/insurance/learn/insurance-pricing-models",  // auto-added 2026-03-10
    "/insurance/learn/mutual-vs-traditional-insurance",  // auto-added 2026-03-10
    "/insurance/learn/nft-insurance",  // auto-added 2026-03-10
    "/insurance/learn/parametric-insurance",  // auto-added 2026-03-10
    "/insurance/learn/parametric-insurance-crypto",  // auto-added 2026-03-10
    "/insurance/learn/risk-assessment-defi",  // auto-added 2026-03-10
    "/insurance/learn/self-insurance-strategies",  // auto-added 2026-03-10
    "/insurance/learn/smart-contract-cover",  // auto-added 2026-03-10
    "/insurance/learn/stablecoin-depeg-insurance",  // auto-added 2026-03-10
    "/insurance/learn/validator-slashing-insurance",  // auto-added 2026-03-10
    "/insurance/learn/yield-insurance",  // auto-added 2026-03-10
    "/insurance/reviews/sherlock",  // auto-added 2026-03-10
    "/insurance/reviews/solace",  // auto-added 2026-03-10
    "/investing/best/blue-chip-crypto",  // auto-added 2026-03-10
    "/investing/best/buy-today",  // auto-added 2026-03-10
    "/investing/best/crypto-for-beginners",  // auto-added 2026-03-10
    "/investing/best/crypto-index-funds",  // auto-added 2026-03-10
    "/investing/best/crypto-to-mine",  // auto-added 2026-03-10
    "/investing/best/depin-tokens",  // auto-added 2026-03-10
    "/investing/best/dividend-crypto",  // auto-added 2026-03-10
    "/investing/best/green-crypto",  // auto-added 2026-03-10
    "/investing/best/high-yield",  // auto-added 2026-03-10
    "/investing/best/low-market-cap",  // auto-added 2026-03-10
    "/investing/best/metaverse",  // auto-added 2026-03-10
    "/investing/best/portfolio-trackers",  // auto-added 2026-03-10
    "/investing/best/privacy-coins",  // auto-added 2026-03-10
    "/investing/best/under-1-dollar",  // auto-added 2026-03-10
    "/investing/best/under-10-dollars",  // auto-added 2026-03-10
    "/investing/best/yield-farming",  // auto-added 2026-03-10
    "/investing/compare/aave-vs-compound",  // auto-added 2026-03-10
    "/investing/compare/active-vs-passive-crypto",  // auto-added 2026-03-10
    "/investing/compare/arbitrum-vs-optimism",  // auto-added 2026-03-10
    "/investing/compare/avalanche-vs-solana",  // auto-added 2026-03-10
    "/investing/compare/bitcoin-vs-ethereum",  // auto-added 2026-03-10
    "/investing/compare/bitcoin-vs-gold",  // auto-added 2026-03-10
    "/investing/compare/bitcoin-vs-litecoin",  // auto-added 2026-03-10
    "/investing/compare/bitcoin-vs-sp500",  // auto-added 2026-03-10
    "/investing/compare/cardano-vs-solana",  // auto-added 2026-03-10
    "/investing/compare/cefi-vs-defi-investing",  // auto-added 2026-03-10
    "/investing/compare/chainlink-vs-band-protocol",  // auto-added 2026-03-10
    "/investing/compare/cosmos-vs-polkadot",  // auto-added 2026-03-10
    "/investing/compare/dca-vs-timing-market",  // auto-added 2026-03-10
    "/investing/compare/direct-crypto-vs-etf",  // auto-added 2026-03-10
    "/investing/compare/ethereum-vs-bnb-chain",  // auto-added 2026-03-10
    "/investing/compare/polygon-vs-arbitrum",  // auto-added 2026-03-10
    "/investing/compare/solana-vs-ethereum",  // auto-added 2026-03-10
    "/investing/compare/spot-vs-futures-investing",  // auto-added 2026-03-10
    "/investing/compare/staking-vs-lending",  // auto-added 2026-03-10
    "/investing/compare/uniswap-vs-pancakeswap",  // auto-added 2026-03-10
    "/investing/crypto/aave",  // auto-added 2026-03-10
    "/investing/crypto/across",  // auto-added 2026-03-10
    "/investing/crypto/act",  // auto-added 2026-03-10
    "/investing/crypto/aerodrome",  // auto-added 2026-03-10
    "/investing/crypto/ai16z",  // auto-added 2026-03-10
    "/investing/crypto/akash-token",  // auto-added 2026-03-10
    "/investing/crypto/alt",  // auto-added 2026-03-10
    "/investing/crypto/amp",  // auto-added 2026-03-10
    "/investing/crypto/ankr",  // auto-added 2026-03-10
    "/investing/crypto/apecoin",  // auto-added 2026-03-10
    "/investing/crypto/api3",  // auto-added 2026-03-10
    "/investing/crypto/ar-io",  // auto-added 2026-03-10
    "/investing/crypto/aragon",  // auto-added 2026-03-10
    "/investing/crypto/atlas",  // auto-added 2026-03-10
    "/investing/crypto/axelar",  // auto-added 2026-03-10
    "/investing/crypto/babylon",  // auto-added 2026-03-10
    "/investing/crypto/balancer",  // auto-added 2026-03-10
    "/investing/crypto/banana-gun",  // auto-added 2026-03-10
    "/investing/crypto/band-protocol",  // auto-added 2026-03-10
    "/investing/crypto/bedrock",  // auto-added 2026-03-10
    "/investing/crypto/bitlayer",  // auto-added 2026-03-10
    "/investing/crypto/bnb-token",  // auto-added 2026-03-10
    "/investing/crypto/bob",  // auto-added 2026-03-10
    "/investing/crypto/boba",  // auto-added 2026-03-10
    "/investing/crypto/bome",  // auto-added 2026-03-10
    "/investing/crypto/bonk",  // auto-added 2026-03-10
    "/investing/crypto/bonkbot",  // auto-added 2026-03-10
    "/investing/crypto/bouncebit",  // auto-added 2026-03-10
    "/investing/crypto/brett",  // auto-added 2026-03-10
    "/investing/crypto/camelot",  // auto-added 2026-03-10
    "/investing/crypto/cartesi",  // auto-added 2026-03-10
    "/investing/crypto/cat-in-a-dogs-world",  // auto-added 2026-03-10
    "/investing/crypto/celer",  // auto-added 2026-03-10
    "/investing/crypto/celsius-token",  // auto-added 2026-03-10
    "/investing/crypto/chainflip",  // auto-added 2026-03-10
    "/investing/crypto/compound",  // auto-added 2026-03-10
    "/investing/crypto/conflux",  // auto-added 2026-03-10
    "/investing/crypto/convex",  // auto-added 2026-03-10
    "/investing/crypto/core-dao",  // auto-added 2026-03-10
    "/investing/crypto/coti",  // auto-added 2026-03-10
    "/investing/crypto/cow",  // auto-added 2026-03-10
    "/investing/crypto/crvusd",  // auto-added 2026-03-10
    "/investing/crypto/crypto-com-token",  // auto-added 2026-03-10
    "/investing/crypto/curve",  // auto-added 2026-03-10
    "/investing/crypto/cyber",  // auto-added 2026-03-10
    "/investing/crypto/dai",  // auto-added 2026-03-10
    "/investing/crypto/dash",  // auto-added 2026-03-10
    "/investing/crypto/decred",  // auto-added 2026-03-10
    "/investing/crypto/dia",  // auto-added 2026-03-10
    "/investing/crypto/dimo",  // auto-added 2026-03-10
    "/investing/crypto/diva",  // auto-added 2026-03-10
    "/investing/crypto/dodo",  // auto-added 2026-03-10
    "/investing/crypto/dog-go-to-the-moon",  // auto-added 2026-03-10
    "/investing/crypto/drift",  // auto-added 2026-03-10
    "/investing/crypto/dydx",  // auto-added 2026-03-10
    "/investing/crypto/dydx-chain",  // auto-added 2026-03-10
    "/investing/crypto/dym-token",  // auto-added 2026-03-10
    "/investing/crypto/ens",  // auto-added 2026-03-10
    "/investing/crypto/eos",  // auto-added 2026-03-10
    "/investing/crypto/ergo",  // auto-added 2026-03-10
    "/investing/crypto/ethena-token",  // auto-added 2026-03-10
    "/investing/crypto/ethfi-token",  // auto-added 2026-03-10
    "/investing/crypto/farcaster",  // auto-added 2026-03-10
    "/investing/crypto/fartcoin",  // auto-added 2026-03-10
    "/investing/crypto/first-digital-usd",  // auto-added 2026-03-10
    "/investing/crypto/flare",  // auto-added 2026-03-10
    "/investing/crypto/floki",  // auto-added 2026-03-10
    "/investing/crypto/flux",  // auto-added 2026-03-10
    "/investing/crypto/frax",  // auto-added 2026-03-10
    "/investing/crypto/frax-share",  // auto-added 2026-03-10
    "/investing/crypto/friends-tech",  // auto-added 2026-03-10
    "/investing/crypto/galxe",  // auto-added 2026-03-10
    "/investing/crypto/gamefi",  // auto-added 2026-03-10
    "/investing/crypto/gigachad",  // auto-added 2026-03-10
    "/investing/crypto/gmt-token",  // auto-added 2026-03-10
    "/investing/crypto/gmx-token",  // auto-added 2026-03-10
    "/investing/crypto/gnosis",  // auto-added 2026-03-10
    "/investing/crypto/goatseus",  // auto-added 2026-03-10
    "/investing/crypto/gods",  // auto-added 2026-03-10
    "/investing/crypto/grass",  // auto-added 2026-03-10
    "/investing/crypto/gt",  // auto-added 2026-03-10
    "/investing/crypto/guildfi",  // auto-added 2026-03-10
    "/investing/crypto/handshake",  // auto-added 2026-03-10
    "/investing/crypto/hashflow",  // auto-added 2026-03-10
    "/investing/crypto/hbar",  // auto-added 2026-03-10
    "/investing/crypto/hivemapper",  // auto-added 2026-03-10
    "/investing/crypto/horizen",  // auto-added 2026-03-10
    "/investing/crypto/ht",  // auto-added 2026-03-10
    "/investing/crypto/hyperlane",  // auto-added 2026-03-10
    "/investing/crypto/icp-token",  // auto-added 2026-03-10
    "/investing/crypto/iota",  // auto-added 2026-03-10
    "/investing/crypto/iotex",  // auto-added 2026-03-10
    "/investing/crypto/joe",  // auto-added 2026-03-10
    "/investing/crypto/jup",  // auto-added 2026-03-10
    "/investing/crypto/jupiter-token",  // auto-added 2026-03-10
    "/investing/crypto/kadena",  // auto-added 2026-03-10
    "/investing/crypto/kamino",  // auto-added 2026-03-10
    "/investing/crypto/kcs",  // auto-added 2026-03-10
    "/investing/crypto/kelp",  // auto-added 2026-03-10
    "/investing/crypto/kmno",  // auto-added 2026-03-10
    "/investing/crypto/kujira",  // auto-added 2026-03-10
    "/investing/crypto/kyber",  // auto-added 2026-03-10
    "/investing/crypto/layerzero",  // auto-added 2026-03-10
    "/investing/crypto/lens",  // auto-added 2026-03-10
    "/investing/crypto/leo",  // auto-added 2026-03-10
    "/investing/crypto/liquity",  // auto-added 2026-03-10
    "/investing/crypto/livepeer",  // auto-added 2026-03-10
    "/investing/crypto/lombard",  // auto-added 2026-03-10
    "/investing/crypto/loopring",  // auto-added 2026-03-10
    "/investing/crypto/maestro",  // auto-added 2026-03-10
    "/investing/crypto/maker",  // auto-added 2026-03-10
    "/investing/crypto/mana-token",  // auto-added 2026-03-10
    "/investing/crypto/manta",  // auto-added 2026-03-10
    "/investing/crypto/manta-token",  // auto-added 2026-03-10
    "/investing/crypto/mantle-lsp",  // auto-added 2026-03-10
    "/investing/crypto/mantra",  // auto-added 2026-03-10
    "/investing/crypto/mars-protocol",  // auto-added 2026-03-10
    "/investing/crypto/maverick",  // auto-added 2026-03-10
    "/investing/crypto/melania",  // auto-added 2026-03-10
    "/investing/crypto/metis",  // auto-added 2026-03-10
    "/investing/crypto/mobox",  // auto-added 2026-03-10
    "/investing/crypto/mog",  // auto-added 2026-03-10
    "/investing/crypto/morpho-token",  // auto-added 2026-03-10
    "/investing/crypto/mother",  // auto-added 2026-03-10
    "/investing/crypto/mx-token",  // auto-added 2026-03-10
    "/investing/crypto/myria",  // auto-added 2026-03-10
    "/investing/crypto/myro",  // auto-added 2026-03-10
    "/investing/crypto/nano",  // auto-added 2026-03-10
    "/investing/crypto/neiro",  // auto-added 2026-03-10
    "/investing/crypto/neo",  // auto-added 2026-03-10
    "/investing/crypto/neutron",  // auto-added 2026-03-10
    "/investing/crypto/nexo-token",  // auto-added 2026-03-10
    "/investing/crypto/nosana",  // auto-added 2026-03-10
    "/investing/crypto/oasis",  // auto-added 2026-03-10
    "/investing/crypto/obol",  // auto-added 2026-03-10
    "/investing/crypto/okb",  // auto-added 2026-03-10
    "/investing/crypto/one-inch",  // auto-added 2026-03-10
    "/investing/crypto/orca-token",  // auto-added 2026-03-10
    "/investing/crypto/ordi",  // auto-added 2026-03-10
    "/investing/crypto/osmosis",  // auto-added 2026-03-10
    "/investing/crypto/pancakeswap-token",  // auto-added 2026-03-10
    "/investing/crypto/paraswap",  // auto-added 2026-03-10
    "/investing/crypto/parcl",  // auto-added 2026-03-10
    "/investing/crypto/peaq",  // auto-added 2026-03-10
    "/investing/crypto/pendle-token",  // auto-added 2026-03-10
    "/investing/crypto/pepe",  // auto-added 2026-03-10
    "/investing/crypto/phantasma",  // auto-added 2026-03-10
    "/investing/crypto/photon",  // auto-added 2026-03-10
    "/investing/crypto/pixel",  // auto-added 2026-03-10
    "/investing/crypto/pixel-token",  // auto-added 2026-03-10
    "/investing/crypto/pnut",  // auto-added 2026-03-10
    "/investing/crypto/polygon-zkevm",  // auto-added 2026-03-10
    "/investing/crypto/polyhedra",  // auto-added 2026-03-10
    "/investing/crypto/popcat",  // auto-added 2026-03-10
    "/investing/crypto/portal",  // auto-added 2026-03-10
    "/investing/crypto/prime",  // auto-added 2026-03-10
    "/investing/crypto/puffer",  // auto-added 2026-03-10
    "/investing/crypto/pumpbtc",  // auto-added 2026-03-10
    "/investing/crypto/pyusd",  // auto-added 2026-03-10
    "/investing/crypto/quant",  // auto-added 2026-03-10
    "/investing/crypto/radiant-token",  // auto-added 2026-03-10
    "/investing/crypto/rai",  // auto-added 2026-03-10
    "/investing/crypto/rats",  // auto-added 2026-03-10
    "/investing/crypto/ravencoin",  // auto-added 2026-03-10
    "/investing/crypto/raydium-token",  // auto-added 2026-03-10
    "/investing/crypto/react",  // auto-added 2026-03-10
    "/investing/crypto/redstone",  // auto-added 2026-03-10
    "/investing/crypto/render-network",  // auto-added 2026-03-10
    "/investing/crypto/renzo",  // auto-added 2026-03-10
    "/investing/crypto/reserve-rights",  // auto-added 2026-03-10
    "/investing/crypto/ronin",  // auto-added 2026-03-10
    "/investing/crypto/rune",  // auto-added 2026-03-10
    "/investing/crypto/safe-token",  // auto-added 2026-03-10
    "/investing/crypto/sats",  // auto-added 2026-03-10
    "/investing/crypto/secret",  // auto-added 2026-03-10
    "/investing/crypto/seedify",  // auto-added 2026-03-10
    "/investing/crypto/sentinel",  // auto-added 2026-03-10
    "/investing/crypto/shadow",  // auto-added 2026-03-10
    "/investing/crypto/skale",  // auto-added 2026-03-10
    "/investing/crypto/slerf",  // auto-added 2026-03-10
    "/investing/crypto/solv",  // auto-added 2026-03-10
    "/investing/crypto/sommelier",  // auto-added 2026-03-10
    "/investing/crypto/songbird",  // auto-added 2026-03-10
    "/investing/crypto/space-id",  // auto-added 2026-03-10
    "/investing/crypto/spx",  // auto-added 2026-03-10
    "/investing/crypto/ssv",  // auto-added 2026-03-10
    "/investing/crypto/staderlabs",  // auto-added 2026-03-10
    "/investing/crypto/stakewise",  // auto-added 2026-03-10
    "/investing/crypto/stargate",  // auto-added 2026-03-10
    "/investing/crypto/stargaze",  // auto-added 2026-03-10
    "/investing/crypto/stride",  // auto-added 2026-03-10
    "/investing/crypto/strk",  // auto-added 2026-03-10
    "/investing/crypto/super",  // auto-added 2026-03-10
    "/investing/crypto/supra",  // auto-added 2026-03-10
    "/investing/crypto/sushi",  // auto-added 2026-03-10
    "/investing/crypto/swell",  // auto-added 2026-03-10
    "/investing/crypto/synapse",  // auto-added 2026-03-10
    "/investing/crypto/synthetix",  // auto-added 2026-03-10
    "/investing/crypto/syscoin",  // auto-added 2026-03-10
    "/investing/crypto/taiko",  // auto-added 2026-03-10
    "/investing/crypto/tellor",  // auto-added 2026-03-10
    "/investing/crypto/tensor-token",  // auto-added 2026-03-10
    "/investing/crypto/tezos",  // auto-added 2026-03-10
    "/investing/crypto/treasure",  // auto-added 2026-03-10
    "/investing/crypto/trump",  // auto-added 2026-03-10
    "/investing/crypto/trust-wallet-token",  // auto-added 2026-03-10
    "/investing/crypto/turbo",  // auto-added 2026-03-10
    "/investing/crypto/ultra",  // auto-added 2026-03-10
    "/investing/crypto/uma",  // auto-added 2026-03-10
    "/investing/crypto/umee",  // auto-added 2026-03-10
    "/investing/crypto/unibot",  // auto-added 2026-03-10
    "/investing/crypto/unstoppable",  // auto-added 2026-03-10
    "/investing/crypto/usdc",  // auto-added 2026-03-10
    "/investing/crypto/usdt",  // auto-added 2026-03-10
    "/investing/crypto/velodrome",  // auto-added 2026-03-10
    "/investing/crypto/virtual-protocol",  // auto-added 2026-03-10
    "/investing/crypto/vulcan-forged",  // auto-added 2026-03-10
    "/investing/crypto/w-token",  // auto-added 2026-03-10
    "/investing/crypto/waves",  // auto-added 2026-03-10
    "/investing/crypto/wen",  // auto-added 2026-03-10
    "/investing/crypto/wen-token",  // auto-added 2026-03-10
    "/investing/crypto/wif",  // auto-added 2026-03-10
    "/investing/crypto/worldcoin-id",  // auto-added 2026-03-10
    "/investing/crypto/wormhole",  // auto-added 2026-03-10
    "/investing/crypto/xnet",  // auto-added 2026-03-10
    "/investing/crypto/yearn",  // auto-added 2026-03-10
    "/investing/crypto/yield-guild",  // auto-added 2026-03-10
    "/investing/crypto/zcash",  // auto-added 2026-03-10
    "/investing/crypto/zeta-markets",  // auto-added 2026-03-10
    "/investing/crypto/zetachain",  // auto-added 2026-03-10
    "/investing/learn/ai-crypto-tokens-guide",  // auto-added 2026-03-10
    "/investing/learn/bear-market-survival-guide",  // auto-added 2026-03-10
    "/investing/learn/bitcoin-etf-complete-guide",  // auto-added 2026-03-10
    "/investing/learn/bull-market-guide",  // auto-added 2026-03-10
    "/investing/learn/crypto-accumulation-strategy",  // auto-added 2026-03-10
    "/investing/learn/crypto-diversification-guide",  // auto-added 2026-03-10
    "/investing/learn/crypto-investment-risks",  // auto-added 2026-03-10
    "/investing/learn/crypto-ira-guide",  // auto-added 2026-03-10
    "/investing/learn/crypto-lending-as-investment",  // auto-added 2026-03-10
    "/investing/learn/crypto-market-cycles-guide",  // auto-added 2026-03-10
    "/investing/learn/crypto-portfolio-strategies",  // auto-added 2026-03-10
    "/investing/learn/crypto-regulation-guide",  // auto-added 2026-03-10
    "/investing/learn/crypto-scam-protection",  // auto-added 2026-03-10
    "/investing/learn/crypto-valuation-methods",  // auto-added 2026-03-10
    "/investing/learn/crypto-vs-real-estate",  // auto-added 2026-03-10
    "/investing/learn/crypto-vs-stocks",  // auto-added 2026-03-10
    "/investing/learn/crypto-whitepaper-guide",  // auto-added 2026-03-10
    "/investing/learn/earn-free-crypto",  // auto-added 2026-03-10
    "/investing/learn/ethereum-etf-guide",  // auto-added 2026-03-10
    "/investing/learn/gaming-crypto-investing",  // auto-added 2026-03-10
    "/investing/learn/how-to-buy-polygon",  // auto-added 2026-03-10
    "/investing/learn/how-to-buy-uniswap",  // auto-added 2026-03-10
    "/investing/learn/how-to-read-crypto-charts",  // auto-added 2026-03-10
    "/investing/learn/how-to-sell-crypto",  // auto-added 2026-03-10
    "/investing/learn/layer-2-investing-guide",  // auto-added 2026-03-10
    "/investing/learn/meme-coin-investing-guide",  // auto-added 2026-03-10
    "/investing/learn/pump-and-dump-explained",  // auto-added 2026-03-10
    "/investing/learn/rebalancing-crypto-portfolio",  // auto-added 2026-03-10
    "/investing/learn/rug-pull-guide",  // auto-added 2026-03-10
    "/investing/learn/sec-crypto-regulations",  // auto-added 2026-03-10
    "/investing/learn/social-token-guide",  // auto-added 2026-03-10
    "/investing/learn/stablecoin-investing-guide",  // auto-added 2026-03-10
    "/investing/learn/tax-efficient-crypto-investing",  // auto-added 2026-03-10
    "/investing/learn/tokenomics-explained",  // auto-added 2026-03-10
    "/investing/learn/what-are-meme-coins",  // auto-added 2026-03-10
    "/investing/learn/what-is-market-cap",  // auto-added 2026-03-10
    "/investing/learn/yield-farming-vs-staking",  // auto-added 2026-03-10
    "/investing/staking/aptos",  // auto-added 2026-03-10
    "/investing/staking/avalanche",  // auto-added 2026-03-10
    "/investing/staking/cardano",  // auto-added 2026-03-10
    "/investing/staking/celestia",  // auto-added 2026-03-10
    "/investing/staking/cosmos",  // auto-added 2026-03-10
    "/investing/staking/ethereum",  // auto-added 2026-03-10
    "/investing/staking/injective",  // auto-added 2026-03-10
    "/investing/staking/learn/liquid-staking-guide",  // auto-added 2026-03-10
    "/investing/staking/near",  // auto-added 2026-03-10
    "/investing/staking/polkadot",  // auto-added 2026-03-10
    "/investing/staking/sei",  // auto-added 2026-03-10
    "/investing/staking/solana",  // auto-added 2026-03-10
    "/investing/staking/sui",  // auto-added 2026-03-10
    "/investing/staking/toncoin",  // auto-added 2026-03-10
    "/investing/staking/tron",  // auto-added 2026-03-10
    "/investing/tools/crypto-converter",  // auto-added 2026-03-10
    "/investing/tools/portfolio-tracker",  // auto-added 2026-03-10
    "/investing/tools/staking-apy",  // auto-added 2026-03-10
    "/learn/account-abstraction",  // auto-added 2026-03-10
    "/learn/altcoin-season",  // auto-added 2026-03-10
    "/learn/aml-kyc-crypto-guide",  // auto-added 2026-03-10
    "/learn/amm-explained",  // auto-added 2026-03-10
    "/learn/aptos-ecosystem-guide",  // auto-added 2026-03-10
    "/learn/arbitrum-ecosystem",  // auto-added 2026-03-10
    "/learn/arbitrum-ecosystem-guide",  // auto-added 2026-03-10
    "/learn/avalanche-ecosystem",  // auto-added 2026-03-10
    "/learn/avalanche-ecosystem-guide",  // auto-added 2026-03-10
    "/learn/base-ecosystem",  // auto-added 2026-03-10
    "/learn/base-ecosystem-guide",  // auto-added 2026-03-10
    "/learn/bitcoin-ecosystem-guide",  // auto-added 2026-03-10
    "/learn/bitcoin-ordinals",  // auto-added 2026-03-10
    "/learn/bnb-chain-ecosystem",  // auto-added 2026-03-10
    "/learn/bnb-chain-ecosystem-guide",  // auto-added 2026-03-10
    "/learn/cardano-ecosystem-guide",  // auto-added 2026-03-10
    "/learn/cbdc-explained",  // auto-added 2026-03-10
    "/learn/common-crypto-scams",  // auto-added 2026-03-10
    "/learn/consensus-mechanisms",  // auto-added 2026-03-10
    "/learn/cosmos-ecosystem-guide",  // auto-added 2026-03-10
    "/learn/crypto-airdrops-guide",  // auto-added 2026-03-10
    "/learn/crypto-exchange-hacks-history",  // auto-added 2026-03-10
    "/learn/crypto-faucets",  // auto-added 2026-03-10
    "/learn/crypto-governance",  // auto-added 2026-03-10
    "/learn/crypto-insurance-guide",  // auto-added 2026-03-10
    "/learn/crypto-licensing-guide",  // auto-added 2026-03-10
    "/learn/crypto-narratives",  // auto-added 2026-03-10
    "/learn/crypto-recovery-scams",  // auto-added 2026-03-10
    "/learn/crypto-regulation-2026",  // auto-added 2026-03-10
    "/learn/crypto-regulation-asia",  // auto-added 2026-03-10
    "/learn/crypto-scams-guide",  // auto-added 2026-03-10
    "/learn/crypto-travel-rule",  // auto-added 2026-03-10
    "/learn/dao-participation",  // auto-added 2026-03-10
    "/learn/data-availability",  // auto-added 2026-03-10
    "/learn/decentralized-physical-infrastructure",  // auto-added 2026-03-10
    "/learn/decentralized-science",  // auto-added 2026-03-10
    "/learn/defi-composability",  // auto-added 2026-03-10
    "/learn/defi-exploit-prevention",  // auto-added 2026-03-10
    "/learn/defi-regulation-outlook",  // auto-added 2026-03-10
    "/learn/ethereum-ecosystem-guide",  // auto-added 2026-03-10
    "/learn/fantom-ecosystem-guide",  // auto-added 2026-03-10
    "/learn/fundamental-analysis-crypto",  // auto-added 2026-03-10
    "/learn/glossary/airdrop-farming",  // auto-added 2026-03-10
    "/learn/glossary/ape",  // auto-added 2026-03-10
    "/learn/glossary/apr",  // auto-added 2026-03-10
    "/learn/glossary/apy",  // auto-added 2026-03-10
    "/learn/glossary/ascending-triangle",  // auto-added 2026-03-10
    "/learn/glossary/atomic-swap",  // auto-added 2026-03-10
    "/learn/glossary/bollinger-band",  // auto-added 2026-03-10
    "/learn/glossary/bonding",  // auto-added 2026-03-10
    "/learn/glossary/bonding-curve",  // auto-added 2026-03-10
    "/learn/glossary/borrowing",  // auto-added 2026-03-10
    "/learn/glossary/bytecode",  // auto-added 2026-03-10
    "/learn/glossary/candle",  // auto-added 2026-03-10
    "/learn/glossary/cold-storage",  // auto-added 2026-03-10
    "/learn/glossary/collateralization",  // auto-added 2026-03-10
    "/learn/glossary/composability",  // auto-added 2026-03-10
    "/learn/glossary/consensus-mechanism",  // auto-added 2026-03-10
    "/learn/glossary/cryptography",  // auto-added 2026-03-10
    "/learn/glossary/cup-and-handle",  // auto-added 2026-03-10
    "/learn/glossary/custodial",  // auto-added 2026-03-10
    "/learn/glossary/death-cross",  // auto-added 2026-03-10
    "/learn/glossary/deflation",  // auto-added 2026-03-10
    "/learn/glossary/delegator",  // auto-added 2026-03-10
    "/learn/glossary/derivatives",  // auto-added 2026-03-10
    "/learn/glossary/descending-triangle",  // auto-added 2026-03-10
    "/learn/glossary/doji",  // auto-added 2026-03-10
    "/learn/glossary/double-bottom",  // auto-added 2026-03-10
    "/learn/glossary/double-top",  // auto-added 2026-03-10
    "/learn/glossary/dust",  // auto-added 2026-03-10
    "/learn/glossary/engulfing",  // auto-added 2026-03-10
    "/learn/glossary/epoch",  // auto-added 2026-03-10
    "/learn/glossary/evm",  // auto-added 2026-03-10
    "/learn/glossary/farming",  // auto-added 2026-03-10
    "/learn/glossary/fibonacci",  // auto-added 2026-03-10
    "/learn/glossary/finality",  // auto-added 2026-03-10
    "/learn/glossary/flag",  // auto-added 2026-03-10
    "/learn/glossary/front-running",  // auto-added 2026-03-10
    "/learn/glossary/gas-limit",  // auto-added 2026-03-10
    "/learn/glossary/gas-price",  // auto-added 2026-03-10
    "/learn/glossary/golden-cross",  // auto-added 2026-03-10
    "/learn/glossary/governance",  // auto-added 2026-03-10
    "/learn/glossary/hammer",  // auto-added 2026-03-10
    "/learn/glossary/head-and-shoulders",  // auto-added 2026-03-10
    "/learn/glossary/inflation",  // auto-added 2026-03-10
    "/learn/glossary/initial-dex-offering",  // auto-added 2026-03-10
    "/learn/glossary/layer-0",  // auto-added 2026-03-10
    "/learn/glossary/lending-protocol",  // auto-added 2026-03-10
    "/learn/glossary/liquid-staking",  // auto-added 2026-03-10
    "/learn/glossary/macd",  // auto-added 2026-03-10
    "/learn/glossary/margin-call",  // auto-added 2026-03-10
    "/learn/glossary/market-depth",  // auto-added 2026-03-10
    "/learn/glossary/mev",  // auto-added 2026-03-10
    "/learn/glossary/moving-average",  // auto-added 2026-03-10
    "/learn/glossary/order-book",  // auto-added 2026-03-10
    "/learn/glossary/over-collateralized",  // auto-added 2026-03-10
    "/learn/glossary/parachain",  // auto-added 2026-03-10
    "/learn/glossary/pennant",  // auto-added 2026-03-10
    "/learn/glossary/pool",  // auto-added 2026-03-10
    "/learn/glossary/relay-chain",  // auto-added 2026-03-10
    "/learn/glossary/resistance",  // auto-added 2026-03-10
    "/learn/glossary/restaking",  // auto-added 2026-03-10
    "/learn/glossary/rollup",  // auto-added 2026-03-10
    "/learn/glossary/rsi",  // auto-added 2026-03-10
    "/learn/glossary/rugpull",  // auto-added 2026-03-10
    "/learn/glossary/scalability",  // auto-added 2026-03-10
    "/learn/glossary/security-token",  // auto-added 2026-03-10
    "/learn/glossary/sidechain",  // auto-added 2026-03-10
    "/learn/glossary/slashing",  // auto-added 2026-03-10
    "/learn/glossary/snapshot",  // auto-added 2026-03-10
    "/learn/glossary/solidity",  // auto-added 2026-03-10
    "/learn/glossary/spread",  // auto-added 2026-03-10
    "/learn/glossary/state-channel",  // auto-added 2026-03-10
    "/learn/glossary/stop-loss",  // auto-added 2026-03-10
    "/learn/glossary/subnet",  // auto-added 2026-03-10
    "/learn/glossary/support",  // auto-added 2026-03-10
    "/learn/glossary/sybil-attack",  // auto-added 2026-03-10
    "/learn/glossary/take-profit",  // auto-added 2026-03-10
    "/learn/glossary/token",  // auto-added 2026-03-10
    "/learn/glossary/tokenomics",  // auto-added 2026-03-10
    "/learn/glossary/total-supply",  // auto-added 2026-03-10
    "/learn/glossary/trading-pair",  // auto-added 2026-03-10
    "/learn/glossary/transaction-fee",  // auto-added 2026-03-10
    "/learn/glossary/treasury",  // auto-added 2026-03-10
    "/learn/glossary/trustless",  // auto-added 2026-03-10
    "/learn/glossary/tvl",  // auto-added 2026-03-10
    "/learn/glossary/unbonding",  // auto-added 2026-03-10
    "/learn/glossary/under-collateralized",  // auto-added 2026-03-10
    "/learn/glossary/utility-token",  // auto-added 2026-03-10
    "/learn/glossary/validator",  // auto-added 2026-03-10
    "/learn/glossary/vault",  // auto-added 2026-03-10
    "/learn/glossary/vesting",  // auto-added 2026-03-10
    "/learn/glossary/virtual-machine",  // auto-added 2026-03-10
    "/learn/glossary/volatility",  // auto-added 2026-03-10
    "/learn/glossary/volume",  // auto-added 2026-03-10
    "/learn/glossary/wedge",  // auto-added 2026-03-10
    "/learn/glossary/wei",  // auto-added 2026-03-10
    "/learn/glossary/whale",  // auto-added 2026-03-10
    "/learn/glossary/wrapped-token",  // auto-added 2026-03-10
    "/learn/glossary/yield",  // auto-added 2026-03-10
    "/learn/hardware-security-modules",  // auto-added 2026-03-10
    "/learn/how-to-avoid-gas-fees",  // auto-added 2026-03-10
    "/learn/how-to-bridge-crypto",  // auto-added 2026-03-10
    "/learn/how-to-buy-ethereum",  // auto-added 2026-03-10
    "/learn/how-to-claim-airdrop",  // auto-added 2026-03-10
    "/learn/how-to-convert-crypto",  // auto-added 2026-03-10
    "/learn/how-to-create-wallet",  // auto-added 2026-03-10
    "/learn/how-to-do-crypto-taxes",  // auto-added 2026-03-10
    "/learn/how-to-dollar-cost-average",  // auto-added 2026-03-10
    "/learn/how-to-evaluate-ico",  // auto-added 2026-03-10
    "/learn/how-to-mint-nft",  // auto-added 2026-03-10
    "/learn/how-to-participate-in-governance",  // auto-added 2026-03-10
    "/learn/how-to-provide-liquidity",  // auto-added 2026-03-10
    "/learn/how-to-read-blockchain-explorer",  // auto-added 2026-03-10
    "/learn/how-to-recover-lost-crypto",  // auto-added 2026-03-10
    "/learn/how-to-research-crypto",  // auto-added 2026-03-10
    "/learn/how-to-set-up-node",  // auto-added 2026-03-10
    "/learn/how-to-spot-rug-pulls",  // auto-added 2026-03-10
    "/learn/how-to-stake-ethereum",  // auto-added 2026-03-10
    "/learn/how-to-stake-solana",  // auto-added 2026-03-10
    "/learn/how-to-track-portfolio",  // auto-added 2026-03-10
    "/learn/how-to-use-defi",  // auto-added 2026-03-10
    "/learn/how-to-use-hardware-wallet",  // auto-added 2026-03-10
    "/learn/how-to-use-layer-2",  // auto-added 2026-03-10
    "/learn/how-to-use-lightning-network",  // auto-added 2026-03-10
    "/learn/how-to-use-metamask",  // auto-added 2026-03-10
    "/learn/how-to-use-multisig",  // auto-added 2026-03-10
    "/learn/how-to-use-uniswap",  // auto-added 2026-03-10
    "/learn/how-to-verify-smart-contract",  // auto-added 2026-03-10
    "/learn/impermanent-loss",  // auto-added 2026-03-10
    "/learn/injective-ecosystem-guide",  // auto-added 2026-03-10
    "/learn/intent-based-trading",  // auto-added 2026-03-10
    "/learn/is-cryptocurrency-safe",  // auto-added 2026-03-10
    "/learn/kyc-aml-crypto",  // auto-added 2026-03-10
    "/learn/layer-1-vs-layer-2",  // auto-added 2026-03-10
    "/learn/mantle-ecosystem-guide",  // auto-added 2026-03-10
    "/learn/mev-explained",  // auto-added 2026-03-10
    "/learn/mica-regulation-guide",  // auto-added 2026-03-10
    "/learn/modular-blockchains",  // auto-added 2026-03-10
    "/learn/multi-sig-security",  // auto-added 2026-03-10
    "/learn/near-ecosystem-guide",  // auto-added 2026-03-10
    "/learn/node-running-guide",  // auto-added 2026-03-10
    "/learn/operational-security-crypto",  // auto-added 2026-03-10
    "/learn/optimism-ecosystem",  // auto-added 2026-03-10
    "/learn/optimism-ecosystem-guide",  // auto-added 2026-03-10
    "/learn/perpetual-futures",  // auto-added 2026-03-10
    "/learn/phishing-attacks-crypto",  // auto-added 2026-03-10
    "/learn/polkadot-ecosystem-guide",  // auto-added 2026-03-10
    "/learn/polygon-ecosystem-guide",  // auto-added 2026-03-10
    "/learn/privacy-coins",  // auto-added 2026-03-10
    "/learn/proof-of-stake",  // auto-added 2026-03-10
    "/learn/proof-of-work",  // auto-added 2026-03-10
    "/learn/real-world-assets-crypto",  // auto-added 2026-03-10
    "/learn/restaking-explained",  // auto-added 2026-03-10
    "/learn/risk-management-crypto",  // auto-added 2026-03-10
    "/learn/rug-pulls-explained",  // auto-added 2026-03-10
    "/learn/sec-crypto-overview",  // auto-added 2026-03-10
    "/learn/sei-ecosystem-guide",  // auto-added 2026-03-10
    "/learn/self-custody-guide",  // auto-added 2026-03-10
    "/learn/sim-swap-protection",  // auto-added 2026-03-10
    "/learn/smart-contract-risks",  // auto-added 2026-03-10
    "/learn/smart-contract-security",  // auto-added 2026-03-10
    "/learn/social-engineering-crypto",  // auto-added 2026-03-10
    "/learn/solana-ecosystem-guide",  // auto-added 2026-03-10
    "/learn/stablecoin-regulation",  // auto-added 2026-03-10
    "/learn/sui-ecosystem-guide",  // auto-added 2026-03-10
    "/learn/technical-analysis-crypto",  // auto-added 2026-03-10
    "/learn/testnet-guide",  // auto-added 2026-03-10
    "/learn/ton-ecosystem-guide",  // auto-added 2026-03-10
    "/learn/two-factor-authentication-guide",  // auto-added 2026-03-10
    "/learn/validator-guide",  // auto-added 2026-03-10
    "/learn/whale-watching",  // auto-added 2026-03-10
    "/learn/what-are-meme-coins",  // auto-added 2026-03-10
    "/learn/what-are-zk-proofs",  // auto-added 2026-03-10
    "/learn/what-is-a-bridge",  // auto-added 2026-03-10
    "/learn/what-is-a-flash-loan",  // auto-added 2026-03-10
    "/learn/what-is-a-hash",  // auto-added 2026-03-10
    "/learn/what-is-a-liquidity-pool",  // auto-added 2026-03-10
    "/learn/what-is-a-node",  // auto-added 2026-03-10
    "/learn/what-is-a-rollup",  // auto-added 2026-03-10
    "/learn/what-is-a-sidechain",  // auto-added 2026-03-10
    "/learn/what-is-a-smart-contract",  // auto-added 2026-03-10
    "/learn/what-is-a-token",  // auto-added 2026-03-10
    "/learn/what-is-a-validator",  // auto-added 2026-03-10
    "/learn/what-is-account-abstraction",  // auto-added 2026-03-10
    "/learn/what-is-an-airdrop",  // auto-added 2026-03-10
    "/learn/what-is-an-altcoin",  // auto-added 2026-03-10
    "/learn/what-is-an-oracle",  // auto-added 2026-03-10
    "/learn/what-is-apy-vs-apr",  // auto-added 2026-03-10
    "/learn/what-is-composability",  // auto-added 2026-03-10
    "/learn/what-is-consensus",  // auto-added 2026-03-10
    "/learn/what-is-cosmos-ecosystem",  // auto-added 2026-03-10
    "/learn/what-is-depin",  // auto-added 2026-03-10
    "/learn/what-is-gamefi",  // auto-added 2026-03-10
    "/learn/what-is-gas",  // auto-added 2026-03-10
    "/learn/what-is-impermanent-loss",  // auto-added 2026-03-10
    "/learn/what-is-interoperability",  // auto-added 2026-03-10
    "/learn/what-is-layer-2",  // auto-added 2026-03-10
    "/learn/what-is-liquidity",  // auto-added 2026-03-10
    "/learn/what-is-market-cap",  // auto-added 2026-03-10
    "/learn/what-is-mev",  // auto-added 2026-03-10
    "/learn/what-is-mining",  // auto-added 2026-03-10
    "/learn/what-is-move-language",  // auto-added 2026-03-10
    "/learn/what-is-polkadot-ecosystem",  // auto-added 2026-03-10
    "/learn/what-is-proof-of-stake",  // auto-added 2026-03-10
    "/learn/what-is-proof-of-work",  // auto-added 2026-03-10
    "/learn/what-is-restaking",  // auto-added 2026-03-10
    "/learn/what-is-rwa",  // auto-added 2026-03-10
    "/learn/what-is-slashing",  // auto-added 2026-03-10
    "/learn/what-is-socialfi",  // auto-added 2026-03-10
    "/learn/what-is-staking",  // auto-added 2026-03-10
    "/learn/what-is-tokenomics",  // auto-added 2026-03-10
    "/learn/what-is-tvl",  // auto-added 2026-03-10
    "/learn/what-is-volume",  // auto-added 2026-03-10
    "/learn/zero-knowledge-proofs",  // auto-added 2026-03-10
    "/long-term/best/crypto-401k",  // auto-added 2026-03-10
    "/long-term/best/crypto-savings-accounts",  // auto-added 2026-03-10
    "/long-term/best/estate-planning",  // auto-added 2026-03-10
    "/long-term/best/inflation-hedge",  // auto-added 2026-03-10
    "/long-term/learn/accumulation-strategies",  // auto-added 2026-03-10
    "/long-term/learn/bitcoin-etf-guide",  // auto-added 2026-03-10
    "/long-term/learn/bitcoin-standard",  // auto-added 2026-03-10
    "/long-term/learn/bitcoin-store-of-value",  // auto-added 2026-03-10
    "/long-term/learn/bitcoin-supercycle-theory",  // auto-added 2026-03-10
    "/long-term/learn/cold-storage-guide",  // auto-added 2026-03-10
    "/long-term/learn/conviction-investing",  // auto-added 2026-03-10
    "/long-term/learn/conviction-investing-crypto",  // auto-added 2026-03-10
    "/long-term/learn/crypto-adoption-curves",  // auto-added 2026-03-10
    "/long-term/learn/crypto-bear-market-investing",  // auto-added 2026-03-10
    "/long-term/learn/crypto-correlation-analysis",  // auto-added 2026-03-10
    "/long-term/learn/crypto-etf-guide",  // auto-added 2026-03-10
    "/long-term/learn/crypto-inheritance-guide",  // auto-added 2026-03-10
    "/long-term/learn/crypto-inheritance-planning",  // auto-added 2026-03-10
    "/long-term/learn/crypto-mutual-funds",  // auto-added 2026-03-10
    "/long-term/learn/crypto-network-effects",  // auto-added 2026-03-10
    "/long-term/learn/crypto-retirement-complete-guide",  // auto-added 2026-03-10
    "/long-term/learn/crypto-trust-setup",  // auto-added 2026-03-10
    "/long-term/learn/crypto-vs-gold-investment",  // auto-added 2026-03-10
    "/long-term/learn/endowment-crypto-strategy",  // auto-added 2026-03-10
    "/long-term/learn/ethereum-etf-guide",  // auto-added 2026-03-10
    "/long-term/learn/ethereum-investment-thesis",  // auto-added 2026-03-10
    "/long-term/learn/generational-wealth-crypto",  // auto-added 2026-03-10
    "/long-term/learn/grayscale-products",  // auto-added 2026-03-10
    "/long-term/learn/institutional-crypto-adoption",  // auto-added 2026-03-10
    "/long-term/learn/layer-1-comparison",  // auto-added 2026-03-10
    "/long-term/learn/metcalfes-law-crypto",  // auto-added 2026-03-10
    "/long-term/learn/pension-fund-crypto-allocation",  // auto-added 2026-03-10
    "/long-term/learn/portfolio-rebalancing-guide",  // auto-added 2026-03-10
    "/long-term/learn/solana-investment-thesis",  // auto-added 2026-03-10
    "/long-term/learn/sovereign-wealth-funds-crypto",  // auto-added 2026-03-10
    "/long-term/learn/stacking-sats",  // auto-added 2026-03-10
    "/long-term/learn/time-in-market-vs-timing",  // auto-added 2026-03-10
    "/news",  // auto-added 2026-03-10
    "/nfts/best/fractional",  // auto-added 2026-03-10
    "/nfts/best/free-minting",  // auto-added 2026-03-10
    "/nfts/best/no-code-creators",  // auto-added 2026-03-10
    "/nfts/best/polygon",  // auto-added 2026-03-10
    "/nfts/best/rwa-nfts",  // auto-added 2026-03-10
    "/nfts/compare/erc721-vs-erc1155",  // auto-added 2026-03-10
    "/nfts/compare/ordinals-vs-ethereum-nfts",  // auto-added 2026-03-10
    "/nfts/compare/solana-vs-ethereum-nfts",  // auto-added 2026-03-10
    "/nfts/learn/dynamic-nfts-guide",  // auto-added 2026-03-10
    "/nfts/learn/erc-721-vs-erc-1155",  // auto-added 2026-03-10
    "/nfts/learn/how-nfts-work",  // auto-added 2026-03-10
    "/nfts/learn/ipfs-nft-storage",  // auto-added 2026-03-10
    "/nfts/learn/nft-airdrops-guide",  // auto-added 2026-03-10
    "/nfts/learn/nft-communities",  // auto-added 2026-03-10
    "/nfts/learn/nft-community-building",  // auto-added 2026-03-10
    "/nfts/learn/nft-complete-guide",  // auto-added 2026-03-10
    "/nfts/learn/nft-drops-guide",  // auto-added 2026-03-10
    "/nfts/learn/nft-future-trends",  // auto-added 2026-03-10
    "/nfts/learn/nft-lending-guide",  // auto-added 2026-03-10
    "/nfts/learn/nft-licensing-rights",  // auto-added 2026-03-10
    "/nfts/learn/nft-marketing-guide",  // auto-added 2026-03-10
    "/nfts/learn/nft-marketplaces-compared",  // auto-added 2026-03-10
    "/nfts/learn/nft-metadata-guide",  // auto-added 2026-03-10
    "/nfts/learn/nft-minting-guide",  // auto-added 2026-03-10
    "/nfts/learn/nft-rarity-guide",  // auto-added 2026-03-10
    "/nfts/learn/nft-smart-contracts",  // auto-added 2026-03-10
    "/nfts/learn/nft-staking-guide",  // auto-added 2026-03-10
    "/nfts/learn/nft-tax-strategies",  // auto-added 2026-03-10
    "/nfts/learn/nft-utility",  // auto-added 2026-03-10
    "/nfts/learn/nft-valuation",  // auto-added 2026-03-10
    "/nfts/learn/nft-valuation-methods",  // auto-added 2026-03-10
    "/nfts/learn/ordinals-inscriptions-guide",  // auto-added 2026-03-10
    "/nfts/learn/soulbound-tokens-guide",  // auto-added 2026-03-10
    "/nfts/reviews/element-market",  // auto-added 2026-03-10
    "/nfts/reviews/ordinals-market",  // auto-added 2026-03-10
    "/prices",  // auto-added 2026-03-10
    "/spending/best/bills",  // auto-added 2026-03-10
    "/spending/best/food-delivery",  // auto-added 2026-03-10
    "/spending/best/gaming",  // auto-added 2026-03-10
    "/spending/best/international-payments",  // auto-added 2026-03-10
    "/spending/best/merchant-services",  // auto-added 2026-03-10
    "/spending/best/peer-to-peer",  // auto-added 2026-03-10
    "/spending/learn/bitcoin-lightning-payments",  // auto-added 2026-03-10
    "/spending/learn/bitcoin-payments-merchants",  // auto-added 2026-03-10
    "/spending/learn/cross-border-crypto-payments",  // auto-added 2026-03-10
    "/spending/learn/crypto-budgeting",  // auto-added 2026-03-10
    "/spending/learn/crypto-debit-cards-compared",  // auto-added 2026-03-10
    "/spending/learn/crypto-donations",  // auto-added 2026-03-10
    "/spending/learn/crypto-freelancer-payments",  // auto-added 2026-03-10
    "/spending/learn/crypto-freelancing",  // auto-added 2026-03-10
    "/spending/learn/crypto-gaming-payments",  // auto-added 2026-03-10
    "/spending/learn/crypto-gaming-purchases",  // auto-added 2026-03-10
    "/spending/learn/crypto-payment-apps-guide",  // auto-added 2026-03-10
    "/spending/learn/crypto-payroll-guide",  // auto-added 2026-03-10
    "/spending/learn/crypto-point-of-sale",  // auto-added 2026-03-10
    "/spending/learn/crypto-remittances-guide",  // auto-added 2026-03-10
    "/spending/learn/crypto-rewards-programs",  // auto-added 2026-03-10
    "/spending/learn/crypto-salary-guide",  // auto-added 2026-03-10
    "/spending/learn/crypto-tipping",  // auto-added 2026-03-10
    "/spending/learn/crypto-tipping-guide",  // auto-added 2026-03-10
    "/spending/learn/merchant-crypto-adoption",  // auto-added 2026-03-10
    "/spending/learn/paying-bills-with-crypto",  // auto-added 2026-03-10
    "/spending/learn/stablecoin-payments-guide",  // auto-added 2026-03-10
    "/spending/learn/stablecoin-spending",  // auto-added 2026-03-10
    "/spending/learn/where-to-spend-crypto",  // auto-added 2026-03-10
    "/spending/reviews/bitpay",  // auto-added 2026-03-10
    "/spending/reviews/flexa",  // auto-added 2026-03-10
    "/spending/reviews/fold-app",  // auto-added 2026-03-10
    "/spending/reviews/lolli",  // auto-added 2026-03-10
    "/spending/reviews/moon-browser",  // auto-added 2026-03-10
    "/spending/reviews/purse-io",  // auto-added 2026-03-10
    "/spending/reviews/spedn",  // auto-added 2026-03-10
    "/spending/reviews/travala",  // auto-added 2026-03-10
    "/taxes/best/beginners",  // auto-added 2026-03-10
    "/taxes/best/business",  // auto-added 2026-03-10
    "/taxes/best/day-traders",  // auto-added 2026-03-10
    "/taxes/best/defi",  // auto-added 2026-03-10
    "/taxes/best/free",  // auto-added 2026-03-10
    "/taxes/best/international",  // auto-added 2026-03-10
    "/taxes/best/nft-taxes",  // auto-added 2026-03-10
    "/taxes/compare/cointracker-vs-zenledger",  // auto-added 2026-03-10
    "/taxes/compare/crypto-tax-software-comparison",  // auto-added 2026-03-10
    "/taxes/compare/free-vs-paid-crypto-tax",  // auto-added 2026-03-10
    "/taxes/compare/koinly-vs-taxbit",  // auto-added 2026-03-10
    "/taxes/compare/tokentax-vs-coinledger",  // auto-added 2026-03-10
    "/taxes/compare/turbotax-vs-koinly",  // auto-added 2026-03-10
    "/taxes/learn/bridge-transaction-taxes",  // auto-added 2026-03-10
    "/taxes/learn/crypto-donations-taxes",  // auto-added 2026-03-10
    "/taxes/learn/crypto-gifts-taxes",  // auto-added 2026-03-10
    "/taxes/learn/crypto-inheritance-taxes",  // auto-added 2026-03-10
    "/taxes/learn/crypto-taxes-argentina",  // auto-added 2026-03-10
    "/taxes/learn/crypto-taxes-colombia",  // auto-added 2026-03-10
    "/taxes/learn/crypto-taxes-france",  // auto-added 2026-03-10
    "/taxes/learn/crypto-taxes-hong-kong",  // auto-added 2026-03-10
    "/taxes/learn/crypto-taxes-ireland",  // auto-added 2026-03-10
    "/taxes/learn/crypto-taxes-italy",  // auto-added 2026-03-10
    "/taxes/learn/crypto-taxes-mexico",  // auto-added 2026-03-10
    "/taxes/learn/crypto-taxes-netherlands",  // auto-added 2026-03-10
    "/taxes/learn/crypto-taxes-new-zealand",  // auto-added 2026-03-10
    "/taxes/learn/crypto-taxes-nigeria",  // auto-added 2026-03-10
    "/taxes/learn/crypto-taxes-norway",  // auto-added 2026-03-10
    "/taxes/learn/crypto-taxes-philippines",  // auto-added 2026-03-10
    "/taxes/learn/crypto-taxes-poland",  // auto-added 2026-03-10
    "/taxes/learn/crypto-taxes-south-africa",  // auto-added 2026-03-10
    "/taxes/learn/crypto-taxes-south-korea",  // auto-added 2026-03-10
    "/taxes/learn/crypto-taxes-spain",  // auto-added 2026-03-10
    "/taxes/learn/crypto-taxes-sweden",  // auto-added 2026-03-10
    "/taxes/learn/crypto-taxes-switzerland",  // auto-added 2026-03-10
    "/taxes/learn/crypto-taxes-thailand",  // auto-added 2026-03-10
    "/taxes/learn/crypto-taxes-turkey",  // auto-added 2026-03-10
    "/taxes/learn/crypto-taxes-vietnam",  // auto-added 2026-03-10
    "/taxes/learn/day-trading-taxes",  // auto-added 2026-03-10
    "/taxes/learn/defi-yield-taxes",  // auto-added 2026-03-10
    "/taxes/learn/hard-fork-taxes",  // auto-added 2026-03-10
    "/taxes/learn/liquidity-pool-taxes",  // auto-added 2026-03-10
    "/taxes/learn/nft-trading-taxes",  // auto-added 2026-03-10
    "/taxes/learn/wrapped-token-taxes",  // auto-added 2026-03-10
    "/taxes/reviews/accointing",  // auto-added 2026-03-10
    "/taxes/reviews/coinledger",  // auto-added 2026-03-10
    "/taxes/reviews/coinpanda",  // auto-added 2026-03-10
    "/taxes/reviews/hr-block-crypto",  // auto-added 2026-03-10
    "/taxes/reviews/turbotax-crypto",  // auto-added 2026-03-10
    "/taxes/reviews/zenledger",  // auto-added 2026-03-10
    "/token",  // auto-added 2026-03-10
    "/tools",  // auto-added 2026-03-10
    "/tools/converter",  // auto-added 2026-03-10
    "/tools/dca-calculator",  // auto-added 2026-03-10
    "/tools/defi-yields",  // auto-added 2026-03-10
    "/tools/gas-tracker",  // auto-added 2026-03-10
    "/tools/pnl-calculator",  // auto-added 2026-03-10
    "/tools/portfolio-tracker",  // auto-added 2026-03-10
    "/tools/price-alerts",  // auto-added 2026-03-10
    "/tools/price-ticker",  // auto-added 2026-03-10
    "/tools/staking-apy",  // auto-added 2026-03-10
    "/tools/tax-calculator",  // auto-added 2026-03-10
    "/tools/token-screener",  // auto-added 2026-03-10
    "/tools/whale-tracker",  // auto-added 2026-03-10
    "/trading/best",  // auto-added 2026-03-10
    "/trading/best/copy-trading",  // auto-added 2026-03-10
    "/trading/best/crypto-signals",  // auto-added 2026-03-10
    "/trading/best/day-trading",  // auto-added 2026-03-10
    "/trading/best/futures-trading",  // auto-added 2026-03-10
    "/trading/best/options-trading",  // auto-added 2026-03-10
    "/trading/best/paper-trading",  // auto-added 2026-03-10
    "/trading/best/scalping",  // auto-added 2026-03-10
    "/trading/best/swing-trading",  // auto-added 2026-03-10
    "/trading/best/trading-bots",  // auto-added 2026-03-10
    "/trading/learn/algorithmic-trading",  // auto-added 2026-03-10
    "/trading/learn/arbitrage-trading",  // auto-added 2026-03-10
    "/trading/learn/backtesting-strategies",  // auto-added 2026-03-10
    "/trading/learn/basis-trading-explained",  // auto-added 2026-03-10
    "/trading/learn/bear-market-strategies",  // auto-added 2026-03-10
    "/trading/learn/bollinger-bands-guide",  // auto-added 2026-03-10
    "/trading/learn/breakout-trading",  // auto-added 2026-03-10
    "/trading/learn/breakout-trading-guide",  // auto-added 2026-03-10
    "/trading/learn/bull-bear-flags",  // auto-added 2026-03-10
    "/trading/learn/bull-market-strategies",  // auto-added 2026-03-10
    "/trading/learn/candlestick-patterns-guide",  // auto-added 2026-03-10
    "/trading/learn/chart-patterns-guide",  // auto-added 2026-03-10
    "/trading/learn/correlation-trading",  // auto-added 2026-03-10
    "/trading/learn/covered-call-strategy",  // auto-added 2026-03-10
    "/trading/learn/crypto-market-cycles",  // auto-added 2026-03-10
    "/trading/learn/crypto-options-basics",  // auto-added 2026-03-10
    "/trading/learn/crypto-trading-for-beginners",  // auto-added 2026-03-10
    "/trading/learn/crypto-trading-journal",  // auto-added 2026-03-10
    "/trading/learn/crypto-trading-mistakes",  // auto-added 2026-03-10
    "/trading/learn/crypto-trading-psychology",  // auto-added 2026-03-10
    "/trading/learn/crypto-trading-taxes",  // auto-added 2026-03-10
    "/trading/learn/day-trading-crypto",  // auto-added 2026-03-10
    "/trading/learn/dca-bot-strategy",  // auto-added 2026-03-10
    "/trading/learn/dca-vs-lump-sum",  // auto-added 2026-03-10
    "/trading/learn/delta-neutral-strategy",  // auto-added 2026-03-10
    "/trading/learn/double-top-bottom-pattern",  // auto-added 2026-03-10
    "/trading/learn/fear-greed-index-guide",  // auto-added 2026-03-10
    "/trading/learn/fibonacci-retracement-guide",  // auto-added 2026-03-10
    "/trading/learn/fundamental-analysis-crypto",  // auto-added 2026-03-10
    "/trading/learn/funding-rate-arbitrage",  // auto-added 2026-03-10
    "/trading/learn/grid-bot-strategy",  // auto-added 2026-03-10
    "/trading/learn/grid-trading-guide",  // auto-added 2026-03-10
    "/trading/learn/head-and-shoulders-pattern",  // auto-added 2026-03-10
    "/trading/learn/high-frequency-trading",  // auto-added 2026-03-10
    "/trading/learn/leverage-trading-risks",  // auto-added 2026-03-10
    "/trading/learn/liquidation-explained",  // auto-added 2026-03-10
    "/trading/learn/macd-indicator-guide",  // auto-added 2026-03-10
    "/trading/learn/market-making",  // auto-added 2026-03-10
    "/trading/learn/market-making-explained",  // auto-added 2026-03-10
    "/trading/learn/mean-reversion",  // auto-added 2026-03-10
    "/trading/learn/mean-reversion-strategy",  // auto-added 2026-03-10
    "/trading/learn/momentum-trading",  // auto-added 2026-03-10
    "/trading/learn/momentum-trading-guide",  // auto-added 2026-03-10
    "/trading/learn/moving-averages-explained",  // auto-added 2026-03-10
    "/trading/learn/on-chain-analysis-trading",  // auto-added 2026-03-10
    "/trading/learn/pairs-trading-crypto",  // auto-added 2026-03-10
    "/trading/learn/position-sizing-guide",  // auto-added 2026-03-10
    "/trading/learn/position-trading",  // auto-added 2026-03-10
    "/trading/learn/range-trading",  // auto-added 2026-03-10
    "/trading/learn/range-trading-guide",  // auto-added 2026-03-10
    "/trading/learn/risk-management-guide",  // auto-added 2026-03-10
    "/trading/learn/rsi-indicator-guide",  // auto-added 2026-03-10
    "/trading/learn/scalping-crypto",  // auto-added 2026-03-10
    "/trading/learn/sentiment-analysis-guide",  // auto-added 2026-03-10
    "/trading/learn/signal-trading",  // auto-added 2026-03-10
    "/trading/learn/social-trading-guide",  // auto-added 2026-03-10
    "/trading/learn/statistical-arbitrage",  // auto-added 2026-03-10
    "/trading/learn/stop-loss-strategies",  // auto-added 2026-03-10
    "/trading/learn/straddle-strategy-crypto",  // auto-added 2026-03-10
    "/trading/learn/support-resistance-levels",  // auto-added 2026-03-10
    "/trading/learn/swing-trading-crypto",  // auto-added 2026-03-10
    "/trading/learn/take-profit-strategies",  // auto-added 2026-03-10
    "/trading/learn/technical-analysis-basics",  // auto-added 2026-03-10
    "/trading/learn/trading-bots-guide",  // auto-added 2026-03-10
    "/trading/learn/trailing-stop-guide",  // auto-added 2026-03-10
    "/trading/learn/trend-lines-guide",  // auto-added 2026-03-10
    "/trading/learn/trend-trading",  // auto-added 2026-03-10
    "/trading/learn/triangular-arbitrage",  // auto-added 2026-03-10
    "/trading/learn/volume-analysis-guide",  // auto-added 2026-03-10
    "/trading/learn/whale-tracking-guide",  // auto-added 2026-03-10
    "/trading/tools/liquidation-map",  // auto-added 2026-03-10
    "/wallets/best/android",  // auto-added 2026-03-10
    "/wallets/best/browser-extension",  // auto-added 2026-03-10
    "/wallets/best/custodial",  // auto-added 2026-03-10
    "/wallets/best/institutional",  // auto-added 2026-03-10
    "/wallets/best/ios",  // auto-added 2026-03-10
    "/wallets/best/open-source",  // auto-added 2026-03-10
    "/wallets/best/staking",  // auto-added 2026-03-10
    "/wallets/compare/custodial-vs-non-custodial",  // auto-added 2026-03-10
    "/wallets/compare/evm-vs-solana-wallets",  // auto-added 2026-03-10
    "/wallets/compare/hot-vs-cold-wallets",  // auto-added 2026-03-10
    "/wallets/compare/metamask-vs-coinbase-wallet",  // auto-added 2026-03-10
    "/wallets/compare/metamask-vs-rabby",  // auto-added 2026-03-10
    "/wallets/compare/mobile-vs-desktop",  // auto-added 2026-03-10
    "/wallets/compare/multisig-vs-single-key",  // auto-added 2026-03-10
    "/wallets/compare/phantom-vs-backpack",  // auto-added 2026-03-10
    "/wallets/compare/software-vs-hardware",  // auto-added 2026-03-10
    "/wallets/compare/tangem-vs-ledger",  // auto-added 2026-03-10
    "/wallets/learn/account-abstraction-wallets",  // auto-added 2026-03-10
    "/wallets/learn/air-gapped-wallets-guide",  // auto-added 2026-03-10
    "/wallets/learn/browser-extension-wallets",  // auto-added 2026-03-10
    "/wallets/learn/choosing-first-wallet",  // auto-added 2026-03-10
    "/wallets/learn/defi-wallet-setup",  // auto-added 2026-03-10
    "/wallets/learn/desktop-wallet-guide",  // auto-added 2026-03-10
    "/wallets/learn/erc20-tokens-wallet-guide",  // auto-added 2026-03-10
    "/wallets/learn/gas-fees-explained",  // auto-added 2026-03-10
    "/wallets/learn/hardware-wallet-firmware-updates",  // auto-added 2026-03-10
    "/wallets/learn/hardware-wallet-setup",  // auto-added 2026-03-10
    "/wallets/learn/how-to-add-custom-tokens",  // auto-added 2026-03-10
    "/wallets/learn/how-to-bridge-tokens",  // auto-added 2026-03-10
    "/wallets/learn/how-to-choose-crypto-wallet",  // auto-added 2026-03-10
    "/wallets/learn/how-to-recover-wallet",  // auto-added 2026-03-10
    "/wallets/learn/mobile-wallet-guide",  // auto-added 2026-03-10
    "/wallets/learn/mobile-wallet-security",  // auto-added 2026-03-10
    "/wallets/learn/mpc-wallets-explained",  // auto-added 2026-03-10
    "/wallets/learn/multi-chain-wallets",  // auto-added 2026-03-10
    "/wallets/learn/multisig-setup-guide",  // auto-added 2026-03-10
    "/wallets/learn/nft-storage-guide",  // auto-added 2026-03-10
    "/wallets/learn/nft-wallet-setup",  // auto-added 2026-03-10
    "/wallets/learn/paper-wallet-guide",  // auto-added 2026-03-10
    "/wallets/learn/passphrase-vs-password",  // auto-added 2026-03-10
    "/wallets/learn/phishing-protection-guide",  // auto-added 2026-03-10
    "/wallets/learn/private-key-management",  // auto-added 2026-03-10
    "/wallets/learn/seed-phrase-guide",  // auto-added 2026-03-10
    "/wallets/learn/shamir-backup-explained",  // auto-added 2026-03-10
    "/wallets/learn/smart-contract-wallets",  // auto-added 2026-03-10
    "/wallets/learn/social-recovery-wallets",  // auto-added 2026-03-10
    "/wallets/learn/types-of-crypto-wallets",  // auto-added 2026-03-10
    "/wallets/learn/wallet-address-formats",  // auto-added 2026-03-10
    "/wallets/learn/wallet-apps-vs-browser-extensions",  // auto-added 2026-03-10
    "/wallets/learn/wallet-connect-guide",  // auto-added 2026-03-10
    "/wallets/learn/wallet-drainer-scams",  // auto-added 2026-03-10
    "/wallets/learn/wallet-for-defi-guide",  // auto-added 2026-03-10
    "/wallets/learn/wallet-gas-optimization",  // auto-added 2026-03-10
    "/wallets/learn/wallet-inheritance-planning",  // auto-added 2026-03-10
    "/wallets/learn/wallet-migration-guide",  // auto-added 2026-03-10
    "/wallets/learn/wallet-permissions-guide",  // auto-added 2026-03-10
    "/wallets/learn/wallet-transaction-fees",  // auto-added 2026-03-10
    "/wallets/learn/wallet-types-explained",  // auto-added 2026-03-10
    "/wallets/reviews/arculus",  // auto-added 2026-03-10
    "/wallets/reviews/argent",  // auto-added 2026-03-10
    "/wallets/reviews/atomic",  // auto-added 2026-03-10
    "/wallets/reviews/backpack-wallet",  // auto-added 2026-03-10
    "/wallets/reviews/bc-vault",  // auto-added 2026-03-10
    "/wallets/reviews/binance-web3-wallet",  // auto-added 2026-03-10
    "/wallets/reviews/bitbox",  // auto-added 2026-03-10
    "/wallets/reviews/blue-wallet",  // auto-added 2026-03-10
    "/wallets/reviews/coldcard",  // auto-added 2026-03-10
    "/wallets/reviews/dcent",  // auto-added 2026-03-10
    "/wallets/reviews/electrum",  // auto-added 2026-03-10
    "/wallets/reviews/ellipal",  // auto-added 2026-03-10
    "/wallets/reviews/foundation",  // auto-added 2026-03-10
    "/wallets/reviews/frame",  // auto-added 2026-03-10
    "/wallets/reviews/gridplus",  // auto-added 2026-03-10
    "/wallets/reviews/jade",  // auto-added 2026-03-10
    "/wallets/reviews/jade-wallet",  // auto-added 2026-03-10
    "/wallets/reviews/keepkey",  // auto-added 2026-03-10
    "/wallets/reviews/keplr",  // auto-added 2026-03-10
    "/wallets/reviews/mycelium",  // auto-added 2026-03-10
    "/wallets/reviews/ngrave",  // auto-added 2026-03-10
    "/wallets/reviews/phantom-solana",  // auto-added 2026-03-10
    "/wallets/reviews/rainbow",  // auto-added 2026-03-10
    "/wallets/reviews/safe-wallet",  // auto-added 2026-03-10
    "/wallets/reviews/sparrow",  // auto-added 2026-03-10
    "/wallets/reviews/wasabi",  // auto-added 2026-03-10
    "/wallets/reviews/xdefi",  // auto-added 2026-03-10
    "/wallets/reviews/zerion",  // auto-added 2026-03-10
    "/web3-business/best/accounting-tools",  // auto-added 2026-03-10
    "/web3-business/best/crypto-payroll",  // auto-added 2026-03-10
    "/web3-business/best/dao-tooling",  // auto-added 2026-03-10
    "/web3-business/best/invoicing",  // auto-added 2026-03-10
    "/web3-business/best/smart-contract-platforms",  // auto-added 2026-03-10
    "/web3-business/best/token-launch-platforms",  // auto-added 2026-03-10
    "/web3-business/best/treasury-management",  // auto-added 2026-03-10
    "/web3-business/learn/blockchain-development-guide",  // auto-added 2026-03-10
    "/web3-business/learn/blockchain-for-enterprise",  // auto-added 2026-03-10
    "/web3-business/learn/community-building-web3",  // auto-added 2026-03-10
    "/web3-business/learn/crypto-accounting-guide",  // auto-added 2026-03-10
    "/web3-business/learn/crypto-business-guide",  // auto-added 2026-03-10
    "/web3-business/learn/crypto-compliance-guide",  // auto-added 2026-03-10
    "/web3-business/learn/dao-treasury-management",  // auto-added 2026-03-10
    "/web3-business/learn/defi-business-models",  // auto-added 2026-03-10
    "/web3-business/learn/ico-vs-ido-vs-ieo",  // auto-added 2026-03-10
    "/web3-business/learn/metaverse-business",  // auto-added 2026-03-10
    "/web3-business/learn/nft-brand-strategy",  // auto-added 2026-03-10
    "/web3-business/learn/nft-business-applications",  // auto-added 2026-03-10
    "/web3-business/learn/smart-contract-audit-business",  // auto-added 2026-03-10
    "/web3-business/learn/token-economics-design",  // auto-added 2026-03-10
    "/web3-business/learn/token-sale-guide",  // auto-added 2026-03-10
    "/web3-business/learn/web3-analytics-tools",  // auto-added 2026-03-10
    "/web3-business/learn/web3-business-models",  // auto-added 2026-03-10
    "/web3-business/learn/web3-customer-acquisition",  // auto-added 2026-03-10
    "/web3-business/learn/web3-growth-hacking",  // auto-added 2026-03-10
    "/web3-business/learn/web3-legal-considerations",  // auto-added 2026-03-10
    "/web3-business/learn/web3-marketing-guide",  // auto-added 2026-03-10
    "/web3-business/learn/web3-partnerships",  // auto-added 2026-03-10
    "/web3-business/learn/web3-startup-funding",  // auto-added 2026-03-10
    "/web3-business/reviews/bitpay-business",  // auto-added 2026-03-10
    "/web3-business/reviews/coinbase-commerce",  // auto-added 2026-03-10
    "/web3-business/reviews/ramp-network",  // auto-added 2026-03-10
    "/web3-business/reviews/sablier",  // auto-added 2026-03-10
    "/web3-business/reviews/stripe-crypto",  // auto-added 2026-03-10
    "/web3-business/reviews/superfluid",  // auto-added 2026-03-10
    "/web3-business/reviews/utrust",  // auto-added 2026-03-10

    // ==========================================
    // Static Pages
    // ==========================================
    "/about",
    "/contact",
    "/methodology",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => {
    // Default values
    let priority = 0.5;
    let changeFrequency: "daily" | "weekly" | "monthly" = "weekly";

    // Priority assignment logic
    if (route === "") {
      // Homepage
      priority = 1.0;
      changeFrequency = "daily";
    } else if (route === "/about" || route === "/contact") {
      // Legal/contact pages
      priority = 0.7;
      changeFrequency = "monthly";
    } else if (route.endsWith("/best")) {
      // "Best" list pages - high priority
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (route.endsWith("/reviews")) {
      // Reviews category pages
      priority = 0.8;
      changeFrequency = "weekly";
    } else if (route.includes("/reviews/")) {
      // Individual review pages
      priority = 0.8;
      changeFrequency = "weekly";
    } else if (route.includes("/compare/")) {
      // Comparison pages
      priority = 0.7;
      changeFrequency = "weekly";
    } else if (route.includes("/learn/")) {
      // Learning content
      priority = 0.6;
      changeFrequency = "monthly";
    } else if (route.includes("/tools/") || route.includes("/calculators/")) {
      // Tools and calculators
      priority = 0.6;
      changeFrequency = "monthly";
    } else if (route.includes("/token/")) {
      // Token pages - medium priority, updated frequently
      priority = 0.6;
      changeFrequency = "weekly";
    } else if (route.includes("/glossary/")) {
      // Glossary entries
      priority = 0.4;
      changeFrequency = "monthly";
    } else if (route.includes("/prices/")) {
      // Price pages
      priority = 0.5;
      changeFrequency = "daily";
    }
    // Category index pages (single segment like /exchanges, /wallets, etc.)
    else if (!route.includes("/", 1)) {
      priority = 0.8;
      changeFrequency = "weekly";
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });
}
