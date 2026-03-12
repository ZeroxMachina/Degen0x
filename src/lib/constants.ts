import { CategoryInfo } from "./types";

export const SITE_NAME = "degen0x";
export const SITE_URL = "https://degen0x.com";
export const SITE_DESCRIPTION = "degen0x is the leading crypto comparison and review platform. Compare exchanges, wallets, DeFi protocols, and more. Expert reviews, tools, and guides to help you navigate the crypto world.";
export const CURRENT_YEAR = new Date().getFullYear();
export const CURRENT_MONTH = new Date().toLocaleString('default', { month: 'long' });

export const CATEGORIES: CategoryInfo[] = [
  {
    name: "Exchanges",
    slug: "exchanges",
    description: "Compare and find the best crypto exchanges. Expert reviews, fee comparisons, and security analysis.",
    icon: "⇄",
    color: "#6366f1",
    subcategories: [
      { name: "Best Exchanges", slug: "best", description: "Top-rated crypto exchanges" },
      { name: "Exchange Reviews", slug: "reviews", description: "In-depth exchange reviews" },
      { name: "For Beginners", slug: "best/beginners", description: "Best exchanges for beginners" },
      { name: "Low Fee", slug: "best/low-fee", description: "Cheapest crypto exchanges" },
      { name: "DEXs", slug: "best/decentralized", description: "Best decentralized exchanges" },
    ],
  },
  {
    name: "Wallets",
    slug: "wallets",
    description: "Find the perfect crypto wallet. Hardware wallets, software wallets, and mobile wallets compared.",
    icon: "🔐",
    color: "#06b6d4",
    subcategories: [
      { name: "Best Wallets", slug: "best", description: "Top-rated crypto wallets" },
      { name: "Hardware Wallets", slug: "best/hardware", description: "Best cold storage solutions" },
      { name: "Software Wallets", slug: "best/software", description: "Best hot wallets" },
      { name: "Wallet Reviews", slug: "reviews", description: "In-depth wallet reviews" },
      { name: "For Beginners", slug: "best/beginners", description: "Best wallets for beginners" },
    ],
  },
  {
    name: "Investing",
    slug: "investing",
    description: "Crypto investment guides, portfolio strategies, and token analysis. Build your crypto portfolio with confidence.",
    icon: "📈",
    color: "#22c55e",
    subcategories: [
      { name: "Best Cryptos to Buy", slug: "best/cryptos-to-buy", description: "Top crypto picks" },
      { name: "Staking", slug: "best/staking", description: "Best staking opportunities" },
      { name: "Crypto ETFs", slug: "best/crypto-etfs", description: "Best crypto ETFs" },
      { name: "Trading Bots", slug: "best/portfolio-bots", description: "Best trading bots" },
      { name: "Investment Guides", slug: "learn/how-to-invest-in-crypto", description: "How to invest in crypto" },
    ],
  },
  {
    name: "DeFi Lending",
    slug: "defi-lending",
    description: "Compare DeFi lending protocols. Earn yield, borrow assets, and explore liquidity pools.",
    icon: "🏦",
    color: "#8b5cf6",
    subcategories: [
      { name: "Best Protocols", slug: "best", description: "Top DeFi lending protocols" },
      { name: "Stablecoin Yield", slug: "best/stablecoin-yield", description: "Best stablecoin yields" },
      { name: "Yield Aggregators", slug: "best/yield-aggregators", description: "Best yield aggregators" },
      { name: "Protocol Reviews", slug: "reviews", description: "DeFi protocol reviews" },
      { name: "Guides", slug: "learn/what-is-defi-lending", description: "Learn about DeFi lending" },
    ],
  },
  {
    name: "Loans",
    slug: "crypto-loans",
    description: "Compare crypto-backed loan platforms. Borrow against your crypto without selling.",
    icon: "💰",
    color: "#f59e0b",
    subcategories: [
      { name: "Best Platforms", slug: "best", description: "Top crypto loan platforms" },
      { name: "Bitcoin Loans", slug: "best/bitcoin-loans", description: "Best Bitcoin-backed loans" },
      { name: "DeFi Loans", slug: "best/defi", description: "Best DeFi lending protocols" },
      { name: "Platform Reviews", slug: "reviews", description: "Crypto lending platform reviews" },
      { name: "Guides", slug: "learn/what-are-crypto-backed-loans", description: "Learn about crypto loans" },
    ],
  },
  {
    name: "Taxes",
    slug: "taxes",
    description: "Navigate crypto taxes with confidence. Best tax software, guides, and calculators.",
    icon: "📋",
    color: "#ef4444",
    subcategories: [
      { name: "Best Tax Software", slug: "best/software", description: "Top crypto tax software" },
      { name: "Tax Guide", slug: "learn/crypto-tax-guide", description: "Complete crypto tax guide" },
      { name: "Software Reviews", slug: "reviews", description: "Tax software reviews" },
      { name: "Tax Calculator", slug: "calculators/tax-calculator", description: "Crypto tax calculator" },
      { name: "Free Tools", slug: "best/free-tools", description: "Free crypto tax tools" },
    ],
  },
  {
    name: "Insurance",
    slug: "insurance",
    description: "Protect your crypto assets. Smart contract cover, exchange insurance, and DeFi protection.",
    icon: "🛡️",
    color: "#14b8a6",
    subcategories: [
      { name: "Best Providers", slug: "best", description: "Top crypto insurance providers" },
      { name: "Smart Contract Cover", slug: "best/smart-contract", description: "Smart contract insurance" },
      { name: "Protocol Reviews", slug: "reviews", description: "Insurance protocol reviews" },
      { name: "Guides", slug: "learn/what-is-crypto-insurance", description: "Learn about crypto insurance" },
    ],
  },
  {
    name: "Long-Term Strategies",
    slug: "long-term",
    description: "Long-term crypto wealth building. Crypto IRAs, HODL strategies, and retirement planning.",
    icon: "🎯",
    color: "#ec4899",
    subcategories: [
      { name: "Crypto IRA", slug: "best/crypto-ira", description: "Best crypto IRA providers" },
      { name: "HODL Strategies", slug: "learn/hodl-strategy", description: "Long-term holding strategies" },
      { name: "Passive Income", slug: "learn/passive-income", description: "Passive crypto income" },
      { name: "Retirement", slug: "calculators/retirement-calculator", description: "Crypto retirement calculator" },
    ],
  },
  {
    name: "Web3 Business",
    slug: "web3-business",
    description: "Build and manage Web3 businesses. DAO tools, grants, crypto banking, and compliance.",
    icon: "🏗️",
    color: "#f97316",
    subcategories: [
      { name: "DAO Tools", slug: "best/dao-tools", description: "Best DAO governance tools" },
      { name: "Grants", slug: "best/grants", description: "Web3 grants and funding" },
      { name: "Business Banking", slug: "best/business-banking", description: "Crypto-friendly banks" },
      { name: "Guides", slug: "learn/how-to-start-web3-business", description: "Start a Web3 business" },
    ],
  },
  {
    name: "Cards",
    slug: "crypto-cards",
    description: "Compare the best crypto credit cards, debit cards, and rewards cards. Earn Bitcoin, ETH, and cashback on every purchase.",
    icon: "💎",
    color: "#e11d48",
    subcategories: [
      { name: "Best Crypto Cards", slug: "best", description: "Top-rated crypto cards" },
      { name: "Best Cashback", slug: "best/cashback", description: "Best crypto cashback cards" },
      { name: "Best Rewards", slug: "best/rewards", description: "Best crypto rewards cards" },
      { name: "Card Reviews", slug: "reviews", description: "In-depth card reviews" },
      { name: "For Beginners", slug: "best/beginners", description: "Best cards for beginners" },
    ],
  },
  {
    name: "NFTs",
    slug: "nfts",
    description: "Navigate the NFT ecosystem. Compare marketplaces, discover collections, and learn about digital ownership.",
    icon: "🎨",
    color: "#d946ef",
    subcategories: [
      { name: "Best Marketplaces", slug: "best", description: "Top NFT marketplaces" },
      { name: "For Beginners", slug: "best/beginners", description: "Best marketplaces for beginners" },
      { name: "NFT Art", slug: "best/art", description: "Best platforms for NFT art" },
      { name: "Marketplace Reviews", slug: "reviews", description: "In-depth marketplace reviews" },
      { name: "NFT Guides", slug: "learn/what-are-nfts", description: "Learn about NFTs" },
    ],
  },
  {
    name: "Spending",
    slug: "spending",
    description: "Spend your crypto in the real world. Debit cards, payment apps, and merchant guides.",
    icon: "💳",
    color: "#a855f7",
    subcategories: [
      { name: "Best Debit Cards", slug: "best/debit-cards", description: "Top crypto debit cards" },
      { name: "Cashback Cards", slug: "best/cashback", description: "Best crypto cashback cards" },
      { name: "Payment Apps", slug: "best/payment-apps", description: "Best crypto payment apps" },
      { name: "Guides", slug: "learn/spending-crypto", description: "How to spend crypto" },
    ],
  },
  {
    name: "Learn Crypto",
    slug: "learn",
    description: "Start your crypto journey here. Beginner guides, glossary, security tips, and fundamental concepts.",
    icon: "📚",
    color: "#0ea5e9",
    subcategories: [
      { name: "What is Crypto?", slug: "what-is-cryptocurrency", description: "Cryptocurrency basics" },
      { name: "What is Blockchain?", slug: "what-is-blockchain", description: "Blockchain fundamentals" },
      { name: "For Beginners", slug: "crypto-for-beginners", description: "Crypto for beginners" },
      { name: "Security Guide", slug: "crypto-security-guide", description: "Protect your crypto" },
      { name: "Glossary", slug: "crypto-glossary", description: "Crypto terminology" },
    ],
  },
];

export const NAV_ITEMS = CATEGORIES.map((cat) => ({
  label: cat.name,
  href: `/${cat.slug}`,
  subcategories: cat.subcategories.map((sub) => ({
    label: sub.name,
    href: `/${cat.slug}/${sub.slug}`,
    description: sub.description,
  })),
}));
