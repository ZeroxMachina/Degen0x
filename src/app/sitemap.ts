import { MetadataRoute } from 'next';

const BASE_URL = 'https://degen0x.com';

/**
 * SEO Sitemap Generator for degen0x
 * ─────────────────────────────────────────────────────────────────
 * Comprehensive sitemap for crypto intelligence platform.
 *
 * Priority levels:
 * - 1.0: Homepage (highest traffic, core brand page)
 * - 0.9: Main feature hubs (exchanges, wallets, tools, defi, etc.)
 * - 0.85: Crypto services (cards, loans, taxes, trading)
 * - 0.8: Exchange/wallet reviews and comparison pages
 * - 0.75: Individual tools and service guides
 * - 0.7: Blog and educational articles
 * - 0.65: Community and newsletter
 * - 0.6: Localized and achievement pages
 * - 0.5: Legal and info pages
 * - 0.4: Utility routes (partner redirects)
 *
 * Search engines can fetch this at: /sitemap.xml
 * Revalidated every 24 hours to ensure freshness
 * ─────────────────────────────────────────────────────────────────
 */

export const dynamic = 'force-static';
export const revalidate = 86400; // Revalidate daily (24 hours)

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    // Homepage (Priority 1.0)
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },

    // Main Feature Hubs (Priority 0.9)
    {
      url: `${BASE_URL}/exchanges`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/wallets`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/defi-yields`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/defi-lending`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/prices`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/nfts`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tools`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/trading`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/compare`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/token`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/gas-tracker`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/alerts`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/news`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/learn`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // Crypto Services (Priority 0.85)
    {
      url: `${BASE_URL}/crypto-cards`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/crypto-loans`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/taxes`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/spending`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/long-term`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/investing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/insurance`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/airdrops`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/web3-business`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/dashboard`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/search`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },

    // Exchange Pages (Priority 0.8)
    {
      url: `${BASE_URL}/exchanges/best`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/learn`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/compare`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/binance`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/coinbase`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/kraken`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/bybit`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/okx`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/kucoin`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/gate-io`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/gemini`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/bitget`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/mexc`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/htx`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/phemex`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/uphold`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/bitfinex`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/bitstamp`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/changelly`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/crypto-com`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/coinbase-advanced`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/robinhood-crypto`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/kucoin-vs-binance`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/exchanges/okx-vs-coinbase`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Wallets Pages (Priority 0.8)
    {
      url: `${BASE_URL}/wallets/best`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/wallets/learn`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/wallets/compare`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/wallets/reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/wallets/tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Compare Pages (Priority 0.75)
    {
      url: `${BASE_URL}/compare/exchanges`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/compare/wallets`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },

    // NFTs Pages (Priority 0.8)
    {
      url: `${BASE_URL}/nfts/best`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/nfts/learn`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/nfts/tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/nfts/compare`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/nfts/reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // DeFi Lending Pages (Priority 0.8)
    {
      url: `${BASE_URL}/defi-lending/best`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/defi-lending/learn`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/defi-lending/compare`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/defi-lending/calculators`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/defi-lending/reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Crypto Cards Pages (Priority 0.75)
    {
      url: `${BASE_URL}/crypto-cards/best`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/crypto-cards/learn`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/crypto-cards/compare`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/crypto-cards/calculators`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/crypto-cards/reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },

    // Crypto Loans Pages (Priority 0.75)
    {
      url: `${BASE_URL}/crypto-loans/best`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/crypto-loans/learn`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/crypto-loans/compare`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/crypto-loans/calculators`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/crypto-loans/reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },

    // Trading Pages (Priority 0.8)
    {
      url: `${BASE_URL}/trading/best`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/trading/learn`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/trading/tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Taxes Pages (Priority 0.75)
    {
      url: `${BASE_URL}/taxes/best`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/taxes/learn`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/taxes/compare`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/taxes/calculators`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/taxes/reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },

    // Spending Pages (Priority 0.75)
    {
      url: `${BASE_URL}/spending/best`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/spending/learn`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/spending/compare`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/spending/reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },

    // Long-term Pages (Priority 0.75)
    {
      url: `${BASE_URL}/long-term/best`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/long-term/learn`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/long-term/compare`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/long-term/calculators`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/long-term/reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },

    // Investing Pages (Priority 0.8)
    {
      url: `${BASE_URL}/investing/best`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/investing/learn`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/investing/tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/investing/compare`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/investing/calculators`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/investing/crypto`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/investing/staking`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/investing/trading`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Insurance Pages (Priority 0.75)
    {
      url: `${BASE_URL}/insurance/best`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/insurance/learn`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/insurance/compare`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/insurance/reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },

    // Web3 Business Pages (Priority 0.75)
    {
      url: `${BASE_URL}/web3-business/best`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/web3-business/learn`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/web3-business/compare`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/web3-business/jobs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/web3-business/reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },

    // Blog Pages (Priority 0.7)
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/posts`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/news/hub`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },

    // Learn Pages (Priority 0.7)
    {
      url: `${BASE_URL}/learn/how-to-buy-ethereum`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/how-to-convert-crypto`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/modular-blockchains-guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/ai-depin-crypto-guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/bitcoin-lightning-network`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/hyperliquid-guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/zero-knowledge-proofs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/crypto-gaming-2026-guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/quiz`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/daily-trivia`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/dex-aggregators-guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/crypto-glossary`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/token-vesting-explained`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/crypto-airdrops-2026`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/ai-crypto-agents-guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/trump-crypto-reserve-guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/bitcoin-etf-guide-2026`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/crypto-narrative-trading`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/payfi-guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/bitcoin-layer-2-guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/restaking-eigenlayer`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/glossary`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/mev-protection-guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/rwa-tokenization-guide-2026`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/layer-2-scaling-guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/restaking-eigenlayer-guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/embed-widgets-crypto`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/solana-vs-ethereum-2026`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/real-world-assets-rwa-guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/crypto-regulation-global`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/trivia-leaderboard`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learn/memecoin-trading-strategy`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // Tools Pages (Priority 0.75)
    {
      url: `${BASE_URL}/tools/tax-optimizer`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/token-compare`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/retirement-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/degen-score`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/lending-rates`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/pnl-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/advanced-charting`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/price-alerts`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/ai-trading-signals`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/airdrop-tracker`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/alerts-dashboard`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/backtesting-engine`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/bridge-aggregator`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/chain-comparison`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/converter`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/correlation-matrix`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/crypto-calendar`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/crypto-watchlist`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/crypto-wrapped`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/dca-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/defi-position-manager`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/defi-yields`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/dex-aggregator`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/dominance-tracker`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/embed-widgets`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/etf-tracker`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/exchange-cashback`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/exchange-fees`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/fear-greed-timeline`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/funding-rates`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/impermanent-loss`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/index-fund-simulator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/leaderboard`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/lending-comparison`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/liquidation-heatmap`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/live-prices`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/market-heatmap`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/market-recap`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/memecoin-index`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/mev-scanner`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/multi-chain-gas`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/narrative-tracker`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/news-feed`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/nft-portfolio`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/nft-rarity-checker`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/onchain-analytics`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/options-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/performance-dashboard`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/portfolio-allocator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/portfolio-analytics`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/portfolio-heatmap`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/portfolio-rebalancer`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/portfolio-simulator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/portfolio-tracker`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/portfolio-widget`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/price-ticker`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/regulatory-map`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/research-assistant`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/risk-analyzer`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/robo-advisor`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/salary-in-crypto`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/sentiment-dashboard`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/smart-money-tracker`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/social-metrics`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/staking-apy`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/staking-rewards`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/tax-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/token-screener`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/token-unlocks`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/token-vesting`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/trading-journal`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/vc-funding-tracker`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/volatility-scanner`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/wallet-analyzer`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/wallet-pnl-breakdown`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/wallet-security-audit`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/whale-tracker`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/tools/yield-farming-calculator`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },

    // Community Pages (Priority 0.65)
    {
      url: `${BASE_URL}/community`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.65,
    },
    {
      url: `${BASE_URL}/community/emails`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.65,
    },

    // Newsletter Pages (Priority 0.65)
    {
      url: `${BASE_URL}/newsletter`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.65,
    },
    {
      url: `${BASE_URL}/newsletter/welcome`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.65,
    },

    // Info Pages (Priority 0.5)
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/methodology`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/partners`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/status`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/glossary`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/offline`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },

    // Localized Pages (Priority 0.6)
    {
      url: `${BASE_URL}/ja`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/ar`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/pt-br`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/de`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/fr`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/es`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/ko`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/tr`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // Achievements (Priority 0.6)
    {
      url: `${BASE_URL}/achievements`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ];

  return routes;
}
