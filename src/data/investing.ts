import { Product, ComparisonItem, FAQ } from "@/lib/types";

// ─── Crypto Tokens & Coins ─────────────────────────────────────────────────────

export interface CryptoToken {
  name: string;
  slug: string;
  ticker: string;
  category: string;
  description: string;
  launchYear: number;
  consensus: string;
  maxSupply: string;
  useCase: string;
  website: string;
  rating: number;
  affiliateUrl: string;
}

export const CRYPTO_TOKENS: CryptoToken[] = [
  {
    name: "Bitcoin",
    slug: "bitcoin",
    ticker: "BTC",
    category: "Store of Value",
    description: "The original cryptocurrency and the largest by market cap. Bitcoin serves as a decentralized digital store of value and peer-to-peer payment network.",
    launchYear: 2009,
    consensus: "Proof of Work (SHA-256)",
    maxSupply: "21,000,000 BTC",
    useCase: "Digital gold, store of value, peer-to-peer payments",
    website: "https://bitcoin.org",
    rating: 4.8,
    affiliateUrl: "https://degen0x.com/go/buy-bitcoin",
  },
  {
    name: "Ethereum",
    slug: "ethereum",
    ticker: "ETH",
    category: "Smart Contract Platform",
    description: "The leading smart contract platform powering DeFi, NFTs, and thousands of decentralized applications.",
    launchYear: 2015,
    consensus: "Proof of Stake (Beacon Chain)",
    maxSupply: "No hard cap (deflationary post-merge)",
    useCase: "Smart contracts, DeFi, NFTs, dApps platform",
    website: "https://ethereum.org",
    rating: 4.7,
    affiliateUrl: "https://degen0x.com/go/buy-ethereum",
  },
  {
    name: "Solana",
    slug: "solana",
    ticker: "SOL",
    category: "High-Performance L1",
    description: "A high-throughput blockchain designed for speed and low costs, powering DeFi, NFTs, and consumer applications.",
    launchYear: 2020,
    consensus: "Proof of Stake + Proof of History",
    maxSupply: "No hard cap (inflationary with burn)",
    useCase: "High-speed DeFi, NFTs, payments, consumer apps",
    website: "https://solana.com",
    rating: 4.5,
    affiliateUrl: "https://degen0x.com/go/buy-solana",
  },
  {
    name: "Cardano",
    slug: "cardano",
    ticker: "ADA",
    category: "Smart Contract Platform",
    description: "A peer-reviewed blockchain built through academic research, emphasizing security and sustainability.",
    launchYear: 2017,
    consensus: "Ouroboros Proof of Stake",
    maxSupply: "45,000,000,000 ADA",
    useCase: "Smart contracts, identity, supply chain, governance",
    website: "https://cardano.org",
    rating: 4.1,
    affiliateUrl: "https://degen0x.com/go/buy-cardano",
  },
  {
    name: "Polkadot",
    slug: "polkadot",
    ticker: "DOT",
    category: "Interoperability",
    description: "A multi-chain protocol enabling cross-blockchain transfers of any data or asset type through parachains.",
    launchYear: 2020,
    consensus: "Nominated Proof of Stake",
    maxSupply: "No hard cap (inflationary)",
    useCase: "Cross-chain interoperability, parachains, shared security",
    website: "https://polkadot.network",
    rating: 4.0,
    affiliateUrl: "https://degen0x.com/go/buy-polkadot",
  },
  {
    name: "Avalanche",
    slug: "avalanche",
    ticker: "AVAX",
    category: "Smart Contract Platform",
    description: "A fast, low-cost smart contract platform using subnets for customizable blockchain networks.",
    launchYear: 2020,
    consensus: "Avalanche Consensus (PoS)",
    maxSupply: "720,000,000 AVAX",
    useCase: "DeFi, subnets, enterprise blockchains, gaming",
    website: "https://avax.network",
    rating: 4.2,
    affiliateUrl: "https://degen0x.com/go/buy-avalanche",
  },
  {
    name: "Chainlink",
    slug: "chainlink",
    ticker: "LINK",
    category: "Oracle Network",
    description: "The leading decentralized oracle network providing real-world data to smart contracts across multiple blockchains.",
    launchYear: 2017,
    consensus: "Decentralized Oracle Network",
    maxSupply: "1,000,000,000 LINK",
    useCase: "Price feeds, VRF, cross-chain (CCIP), data oracles",
    website: "https://chain.link",
    rating: 4.4,
    affiliateUrl: "https://degen0x.com/go/buy-chainlink",
  },
  {
    name: "Polygon",
    slug: "polygon",
    ticker: "POL",
    category: "Layer 2 / Scaling",
    description: "An Ethereum scaling ecosystem offering multiple solutions including zkEVM, PoS chain, and CDK for custom chains.",
    launchYear: 2017,
    consensus: "Proof of Stake",
    maxSupply: "10,000,000,000 POL",
    useCase: "Ethereum scaling, zkEVM, enterprise solutions, gaming",
    website: "https://polygon.technology",
    rating: 4.1,
    affiliateUrl: "https://degen0x.com/go/buy-polygon",
  },
  {
    name: "NEAR Protocol",
    slug: "near",
    ticker: "NEAR",
    category: "Smart Contract Platform",
    description: "A sharded proof-of-stake blockchain designed for usability with human-readable accounts and progressive onboarding.",
    launchYear: 2020,
    consensus: "Nightshade Sharding (PoS)",
    maxSupply: "1,000,000,000 NEAR",
    useCase: "dApps, AI integration, chain abstraction, user-friendly Web3",
    website: "https://near.org",
    rating: 4.0,
    affiliateUrl: "https://degen0x.com/go/buy-near",
  },
  {
    name: "Arbitrum",
    slug: "arbitrum",
    ticker: "ARB",
    category: "Layer 2 / Scaling",
    description: "The leading Ethereum Layer 2 rollup using optimistic rollup technology for fast, cheap Ethereum transactions.",
    launchYear: 2021,
    consensus: "Optimistic Rollup (inherits Ethereum security)",
    maxSupply: "10,000,000,000 ARB",
    useCase: "Ethereum scaling, DeFi, Orbit chains, gaming",
    website: "https://arbitrum.io",
    rating: 4.3,
    affiliateUrl: "https://degen0x.com/go/buy-arbitrum",
  },
];

// ─── Investing Products (Platforms, ETFs, Bots, etc.) ───────────────────────────

export const TRADING_PLATFORMS: Product[] = [
  {
    name: "Coinbase",
    slug: "coinbase",
    rating: 4.6,
    description: "The most trusted US-based crypto exchange with an intuitive interface, strong regulatory compliance, and a wide selection of assets. Ideal for beginners and long-term investors.",
    pros: ["Beginner-friendly interface", "Strong regulatory compliance", "Large asset selection", "Insured custodial wallets"],
    cons: ["Higher fees on simple trades", "Customer support can be slow", "Limited advanced charting"],
    fees: "0%-0.60%",
    bestFor: "Beginners & US investors",
    affiliateUrl: "https://degen0x.com/go/coinbase",
    category: "trading-platforms",
    featured: true,
  },
  {
    name: "Binance",
    slug: "binance",
    rating: 4.5,
    description: "The world's largest exchange by trading volume offering hundreds of trading pairs, derivatives, staking, and launchpad services at industry-low fees.",
    pros: ["Lowest trading fees", "Huge asset selection (600+)", "Advanced trading features", "Strong liquidity"],
    cons: ["Regulatory challenges in some regions", "Complex interface for beginners", "US version is limited"],
    fees: "0.01%-0.10%",
    bestFor: "Active traders & global users",
    affiliateUrl: "https://degen0x.com/go/binance",
    category: "trading-platforms",
    featured: true,
  },
  {
    name: "Kraken",
    slug: "kraken",
    rating: 4.4,
    description: "A veteran exchange known for security, competitive fees, and a robust selection of assets. Offers both simple and pro trading interfaces.",
    pros: ["Excellent security track record", "Competitive fees", "Good staking rewards", "Proof of reserves"],
    cons: ["No credit card purchases in US", "Fewer altcoins than competitors", "Mobile app could improve"],
    fees: "0%-0.26%",
    bestFor: "Security-focused investors",
    affiliateUrl: "https://degen0x.com/go/kraken",
    category: "trading-platforms",
  },
  {
    name: "Bybit",
    slug: "bybit",
    rating: 4.3,
    description: "A derivatives-focused exchange offering spot, futures, and options trading with competitive fees, a copy-trading feature, and a growing ecosystem.",
    pros: ["Great for derivatives", "Copy trading available", "Competitive fees", "Fast execution"],
    cons: ["Not available in the US", "Less regulated", "Newer to spot trading"],
    fees: "0.01%-0.10%",
    bestFor: "Derivatives & copy trading",
    affiliateUrl: "https://degen0x.com/go/bybit",
    category: "trading-platforms",
  },
  {
    name: "OKX",
    slug: "okx",
    rating: 4.2,
    description: "A comprehensive exchange offering spot, derivatives, DeFi, and Web3 tools. Known for its integrated wallet and strong global presence.",
    pros: ["All-in-one platform", "Built-in Web3 wallet", "Competitive fees", "Wide range of products"],
    cons: ["Not available in US", "Can be complex for beginners", "Customer support varies"],
    fees: "0.02%-0.10%",
    bestFor: "All-in-one crypto platform",
    affiliateUrl: "https://degen0x.com/go/okx",
    category: "trading-platforms",
  },
];

export const STAKING_PLATFORMS: Product[] = [
  {
    name: "Lido",
    slug: "lido",
    rating: 4.6,
    description: "The largest liquid staking protocol allowing you to stake ETH and receive stETH tokens that can be used across DeFi while earning staking rewards.",
    pros: ["No minimum stake", "Liquid staking (stETH)", "DeFi composability", "Battle-tested protocol"],
    cons: ["Smart contract risk", "Staking spread fee", "Concentration concerns"],
    fees: "10% of rewards",
    bestFor: "ETH liquid staking",
    affiliateUrl: "https://degen0x.com/go/lido",
    category: "staking",
    featured: true,
  },
  {
    name: "Rocket Pool",
    slug: "rocket-pool",
    rating: 4.4,
    description: "A decentralized Ethereum staking protocol that lets you stake with as little as 0.01 ETH or run your own node with 8 ETH.",
    pros: ["Truly decentralized", "Low minimums", "Node operator option", "rETH token"],
    cons: ["Lower TVL than Lido", "Slightly lower APY", "More complex for node operators"],
    fees: "5-15% of rewards",
    bestFor: "Decentralized ETH staking",
    affiliateUrl: "https://degen0x.com/go/rocket-pool",
    category: "staking",
  },
  {
    name: "Coinbase Staking",
    slug: "coinbase-staking",
    rating: 4.3,
    description: "Stake directly from your Coinbase account with support for ETH, SOL, ADA, and more. Earn rewards with no technical setup required.",
    pros: ["Extremely easy to use", "Multiple assets supported", "Regulated platform", "cbETH liquid staking"],
    cons: ["Higher commission (25-35%)", "Custodial staking", "Lower net yields"],
    fees: "25-35% of rewards",
    bestFor: "Beginner stakers",
    affiliateUrl: "https://degen0x.com/go/coinbase",
    category: "staking",
  },
  {
    name: "Marinade Finance",
    slug: "marinade",
    rating: 4.2,
    description: "The leading Solana staking platform offering both liquid staking (mSOL) and native staking across hundreds of validators.",
    pros: ["Top Solana staking solution", "Liquid staking (mSOL)", "Validator diversity", "Strong Solana DeFi integration"],
    cons: ["Solana-only", "Smart contract risk", "Variable APY"],
    fees: "~6% of rewards",
    bestFor: "SOL staking",
    affiliateUrl: "https://degen0x.com/go/marinade",
    category: "staking",
  },
  {
    name: "Jito",
    slug: "jito",
    rating: 4.1,
    description: "A Solana liquid staking protocol that captures MEV rewards on top of standard staking yields, offering higher returns.",
    pros: ["MEV-boosted yields", "JitoSOL liquid staking", "Higher APY than competitors", "Growing DeFi integration"],
    cons: ["MEV rewards variable", "Solana-only", "Newer protocol", "Concentration risk"],
    fees: "4% of rewards",
    bestFor: "Maximum SOL staking yield",
    affiliateUrl: "https://degen0x.com/go/jito",
    category: "staking",
  },
];

export const CRYPTO_ETFS: Product[] = [
  {
    name: "iShares Bitcoin Trust (IBIT)",
    slug: "ibit",
    rating: 4.7,
    description: "BlackRock's spot Bitcoin ETF offering institutional-grade exposure to Bitcoin with the lowest expense ratio among major issuers.",
    pros: ["Lowest expense ratio (0.25%)", "BlackRock's reputation", "Highest trading volume", "Strong institutional backing"],
    cons: ["No direct BTC ownership", "Management fee", "No staking/yield", "Market hours only"],
    fees: "0.25% expense ratio",
    bestFor: "Low-cost BTC exposure",
    affiliateUrl: "https://degen0x.com/go/ibit",
    category: "crypto-etfs",
    featured: true,
  },
  {
    name: "Fidelity Wise Origin Bitcoin Fund (FBTC)",
    slug: "fbtc",
    rating: 4.5,
    description: "Fidelity's spot Bitcoin ETF backed by their own custodial solution. Offers reliable Bitcoin exposure through a trusted financial institution.",
    pros: ["Fidelity custody", "Competitive fees", "Strong brand trust", "Self-custody model"],
    cons: ["Slightly higher expense ratio", "No BTC ownership", "No staking", "Market hours only"],
    fees: "0.25% expense ratio",
    bestFor: "Fidelity account holders",
    affiliateUrl: "https://degen0x.com/go/fbtc",
    category: "crypto-etfs",
  },
  {
    name: "iShares Ethereum Trust (ETHA)",
    slug: "etha",
    rating: 4.4,
    description: "BlackRock's spot Ethereum ETF providing easy exposure to ETH through traditional brokerage accounts.",
    pros: ["Easy ETH exposure", "BlackRock management", "Good liquidity", "IRA eligible"],
    cons: ["No staking rewards", "Management fee", "No smart contract interaction", "Market hours only"],
    fees: "0.25% expense ratio",
    bestFor: "ETH exposure in brokerage",
    affiliateUrl: "https://degen0x.com/go/etha",
    category: "crypto-etfs",
  },
  {
    name: "Grayscale Bitcoin Trust (GBTC)",
    slug: "gbtc",
    rating: 3.9,
    description: "The original Bitcoin investment vehicle, now converted to a spot ETF. Higher fees but longest track record in the space.",
    pros: ["Longest track record", "Converted from trust", "Strong brand recognition", "Wide brokerage availability"],
    cons: ["Highest expense ratio (1.5%)", "Ongoing fund outflows", "More expensive than competitors"],
    fees: "1.50% expense ratio",
    bestFor: "Existing GBTC holders",
    affiliateUrl: "https://degen0x.com/go/gbtc",
    category: "crypto-etfs",
  },
  {
    name: "Bitwise Bitcoin ETF (BITB)",
    slug: "bitb",
    rating: 4.2,
    description: "A crypto-native asset manager's Bitcoin ETF offering competitive fees and transparent on-chain proof of reserves.",
    pros: ["Crypto-native expertise", "On-chain transparency", "Competitive fees", "Portion of profits to BTC devs"],
    cons: ["Smaller AUM", "Less brand recognition", "Lower liquidity"],
    fees: "0.20% expense ratio",
    bestFor: "Crypto-native investors wanting ETF exposure",
    affiliateUrl: "https://degen0x.com/go/bitb",
    category: "crypto-etfs",
  },
];

export const PORTFOLIO_BOTS: Product[] = [
  {
    name: "3Commas",
    slug: "3commas",
    rating: 4.4,
    description: "A leading crypto trading bot platform offering DCA bots, grid bots, and smart trading terminals connected to major exchanges.",
    pros: ["Multiple bot strategies", "DCA & grid bots", "Smart trading terminal", "Paper trading available"],
    cons: ["Monthly subscription cost", "Learning curve", "Past security incident"],
    fees: "From $29/month",
    bestFor: "Automated DCA strategies",
    affiliateUrl: "https://degen0x.com/go/3commas",
    category: "portfolio-bots",
    featured: true,
  },
  {
    name: "Pionex",
    slug: "pionex",
    rating: 4.3,
    description: "An exchange with 16 built-in free trading bots including grid, DCA, arbitrage, and rebalancing bots. No separate subscription needed.",
    pros: ["Free built-in bots", "16 bot strategies", "Low trading fees", "No subscription"],
    cons: ["Limited to Pionex exchange", "Smaller asset selection", "Less customization"],
    fees: "0.05% trading fee",
    bestFor: "Free automated trading",
    affiliateUrl: "https://degen0x.com/go/pionex",
    category: "portfolio-bots",
  },
  {
    name: "Shrimpy",
    slug: "shrimpy",
    rating: 4.1,
    description: "A portfolio management and rebalancing platform that automates your crypto portfolio allocation across multiple exchanges.",
    pros: ["Portfolio rebalancing", "Multi-exchange support", "Social trading", "Backtesting"],
    cons: ["Limited bot strategies", "Monthly fee", "Smaller user base"],
    fees: "From $15/month",
    bestFor: "Portfolio rebalancing",
    affiliateUrl: "https://degen0x.com/go/shrimpy",
    category: "portfolio-bots",
  },
  {
    name: "Cryptohopper",
    slug: "cryptohopper",
    rating: 4.2,
    description: "A cloud-based trading bot platform with marketplace for strategies, signals, and templates. Supports multiple exchanges.",
    pros: ["Strategy marketplace", "Cloud-based (24/7)", "Backtesting & paper trading", "Signal integration"],
    cons: ["Expensive higher tiers", "Complex setup", "Variable signal quality"],
    fees: "From $24.16/month",
    bestFor: "Strategy marketplace",
    affiliateUrl: "https://degen0x.com/go/cryptohopper",
    category: "portfolio-bots",
  },
];

export const COPY_TRADING_PLATFORMS: Product[] = [
  {
    name: "Bybit Copy Trading",
    slug: "bybit-copy",
    rating: 4.4,
    description: "Copy top-performing traders on Bybit with transparent track records, customizable risk settings, and support for both spot and derivatives.",
    pros: ["Large trader pool", "Transparent performance data", "Spot & derivatives", "Customizable risk settings"],
    cons: ["Not available in US", "Profit sharing fees", "Past performance not guaranteed"],
    fees: "10% profit sharing",
    bestFor: "Derivatives copy trading",
    affiliateUrl: "https://degen0x.com/go/bybit",
    category: "copy-trading",
    featured: true,
  },
  {
    name: "OKX Copy Trading",
    slug: "okx-copy",
    rating: 4.2,
    description: "Follow and automatically replicate trades from experienced traders on OKX. Supports both spot and futures strategies.",
    pros: ["Large exchange ecosystem", "Multiple strategy types", "Adjustable position sizing", "Detailed analytics"],
    cons: ["Not available in US", "Fee structure complex", "Variable trader quality"],
    fees: "8-10% profit sharing",
    bestFor: "Spot copy trading",
    affiliateUrl: "https://degen0x.com/go/okx",
    category: "copy-trading",
  },
  {
    name: "eToro",
    slug: "etoro-copy",
    rating: 4.0,
    description: "A regulated social trading platform where you can copy the portfolios and trades of successful crypto investors with full transparency.",
    pros: ["Regulated platform", "Social trading features", "Easy to use", "Copy entire portfolios"],
    cons: ["Higher spreads", "Limited crypto selection", "Withdrawal fees"],
    fees: "Spread-based",
    bestFor: "Social investing",
    affiliateUrl: "https://degen0x.com/go/etoro",
    category: "copy-trading",
  },
];

export const CRYPTO_APPS: Product[] = [
  {
    name: "Coinbase App",
    slug: "coinbase-app",
    rating: 4.5,
    description: "The most popular crypto app in the US offering simple buying, selling, staking, and portfolio tracking with a clean mobile interface.",
    pros: ["Most beginner-friendly", "Strong security", "Learn & earn rewards", "Apple/Google Pay support"],
    cons: ["Higher fees on simple trades", "Can be slow during high traffic"],
    fees: "0%-0.60%",
    bestFor: "Beginners on mobile",
    affiliateUrl: "https://degen0x.com/go/coinbase",
    category: "apps",
    featured: true,
  },
  {
    name: "Crypto.com App",
    slug: "crypto-com-app",
    rating: 4.3,
    description: "An all-in-one crypto app with trading, staking, crypto debit card, DeFi wallet, and earn features all in one mobile application.",
    pros: ["All-in-one features", "Crypto debit card", "Wide asset selection", "Earn/staking features"],
    cons: ["Complex fee structure", "CRO staking requirements", "App can be slow"],
    fees: "0%-0.075%",
    bestFor: "All-in-one crypto app",
    affiliateUrl: "https://degen0x.com/go/crypto-com",
    category: "apps",
  },
  {
    name: "Trust Wallet",
    slug: "trust-wallet-app",
    rating: 4.2,
    description: "A non-custodial multi-chain wallet app supporting thousands of tokens, built-in DEX, staking, and dApp browser.",
    pros: ["Non-custodial", "Multi-chain support", "Built-in DEX", "dApp browser"],
    cons: ["No fiat on-ramp in all regions", "No customer support for lost keys", "Learning curve for DeFi"],
    fees: "No platform fees",
    bestFor: "Self-custody mobile wallet",
    affiliateUrl: "https://degen0x.com/go/trust-wallet",
    category: "apps",
  },
  {
    name: "Phantom",
    slug: "phantom-app",
    rating: 4.4,
    description: "A popular multi-chain wallet originally built for Solana, now supporting Ethereum and Bitcoin with a sleek mobile experience.",
    pros: ["Beautiful UI", "Multi-chain (SOL, ETH, BTC)", "Built-in swap", "NFT gallery"],
    cons: ["Limited to three chains", "No advanced trading", "Newer to ETH/BTC"],
    fees: "0.85% swap fee",
    bestFor: "Solana & multi-chain mobile",
    affiliateUrl: "https://degen0x.com/go/phantom",
    category: "apps",
  },
];

// ─── Comparison Items ───────────────────────────────────────────────────────────

export const PLATFORM_COMPARISON: ComparisonItem[] = [
  {
    name: "Coinbase",
    slug: "coinbase",
    features: {
      "Trading Fees": "0%-0.60%",
      "Supported Coins": "250+",
      "Staking": "Yes (ETH, SOL, ADA)",
      "Mobile App": "Excellent",
      "Regulation": "SEC-regulated (US)",
      "Minimum Deposit": "$1",
    },
    rating: 4.6,
    affiliateUrl: "https://degen0x.com/go/coinbase",
  },
  {
    name: "Binance",
    slug: "binance",
    features: {
      "Trading Fees": "0.01%-0.10%",
      "Supported Coins": "600+",
      "Staking": "Yes (100+ assets)",
      "Mobile App": "Excellent",
      "Regulation": "Varies by region",
      "Minimum Deposit": "$1",
    },
    rating: 4.5,
    affiliateUrl: "https://degen0x.com/go/binance",
  },
  {
    name: "Kraken",
    slug: "kraken",
    features: {
      "Trading Fees": "0%-0.26%",
      "Supported Coins": "200+",
      "Staking": "Yes (15+ assets)",
      "Mobile App": "Good",
      "Regulation": "FinCEN registered (US)",
      "Minimum Deposit": "$1",
    },
    rating: 4.4,
    affiliateUrl: "https://degen0x.com/go/kraken",
  },
];

export const ETF_COMPARISON: ComparisonItem[] = [
  {
    name: "IBIT (BlackRock)",
    slug: "ibit",
    features: {
      "Expense Ratio": "0.25%",
      "Asset": "Bitcoin",
      "AUM": "$50B+",
      "Custodian": "Coinbase Custody",
      "Trading Volume": "Highest",
      "IRA Eligible": "Yes",
    },
    rating: 4.7,
    affiliateUrl: "https://degen0x.com/go/ibit",
  },
  {
    name: "FBTC (Fidelity)",
    slug: "fbtc",
    features: {
      "Expense Ratio": "0.25%",
      "Asset": "Bitcoin",
      "AUM": "$15B+",
      "Custodian": "Fidelity Digital Assets",
      "Trading Volume": "High",
      "IRA Eligible": "Yes",
    },
    rating: 4.5,
    affiliateUrl: "https://degen0x.com/go/fbtc",
  },
  {
    name: "ETHA (BlackRock)",
    slug: "etha",
    features: {
      "Expense Ratio": "0.25%",
      "Asset": "Ethereum",
      "AUM": "$5B+",
      "Custodian": "Coinbase Custody",
      "Trading Volume": "High",
      "IRA Eligible": "Yes",
    },
    rating: 4.4,
    affiliateUrl: "https://degen0x.com/go/etha",
  },
];

export const STAKING_COMPARISON: ComparisonItem[] = [
  {
    name: "Lido",
    slug: "lido",
    features: {
      "Supported Assets": "ETH",
      "APY Range": "3.0%-3.5%",
      "Liquid Staking": "Yes (stETH)",
      "Minimum Stake": "Any amount",
      "Commission": "10%",
      "Type": "DeFi Protocol",
    },
    rating: 4.6,
    affiliateUrl: "https://degen0x.com/go/lido",
  },
  {
    name: "Rocket Pool",
    slug: "rocket-pool",
    features: {
      "Supported Assets": "ETH",
      "APY Range": "2.8%-3.2%",
      "Liquid Staking": "Yes (rETH)",
      "Minimum Stake": "0.01 ETH",
      "Commission": "5-15%",
      "Type": "Decentralized Protocol",
    },
    rating: 4.4,
    affiliateUrl: "https://degen0x.com/go/rocket-pool",
  },
  {
    name: "Coinbase",
    slug: "coinbase-staking",
    features: {
      "Supported Assets": "ETH, SOL, ADA, ATOM +",
      "APY Range": "2.0%-12%",
      "Liquid Staking": "Yes (cbETH)",
      "Minimum Stake": "$1",
      "Commission": "25-35%",
      "Type": "Centralized Exchange",
    },
    rating: 4.3,
    affiliateUrl: "https://degen0x.com/go/coinbase",
  },
];

// ─── FAQs ───────────────────────────────────────────────────────────────────────

export const INVESTING_FAQS: FAQ[] = [
  {
    question: "What is the best cryptocurrency to invest in?",
    answer: "The best cryptocurrency depends on your goals and risk tolerance. Bitcoin (BTC) is considered the safest long-term hold due to its proven track record and institutional adoption. Ethereum (ETH) is the top smart contract platform with strong fundamentals. For higher risk/reward, explore established altcoins like Solana and Chainlink. Always diversify and never invest more than you can afford to lose.",
  },
  {
    question: "How much should I invest in cryptocurrency?",
    answer: "Most financial advisors suggest allocating 1-5% of your total portfolio to crypto if you are a conservative investor, and up to 10-15% if you have a higher risk tolerance. Start small, learn the market dynamics, and only increase your position as you become more comfortable. Never invest emergency funds or money you need in the short term.",
  },
  {
    question: "Is cryptocurrency a good investment in 2026?",
    answer: "Cryptocurrency continues to mature with growing institutional adoption, spot ETFs for Bitcoin and Ethereum, and regulatory clarity in major markets. The long-term outlook for established cryptocurrencies remains positive, though volatility is still expected. Evaluate your risk tolerance, diversify across assets, and consider dollar-cost averaging to reduce timing risk.",
  },
  {
    question: "What is the safest way to invest in crypto?",
    answer: "The safest approaches include: (1) Dollar-cost averaging into Bitcoin and Ethereum through a regulated exchange like Coinbase, (2) Using crypto ETFs like IBIT or FBTC for exposure without self-custody risk, (3) Diversifying across asset types and market caps, (4) Storing long-term holdings in a hardware wallet, and (5) Only investing money you can afford to lose.",
  },
  {
    question: "Should I stake my cryptocurrency?",
    answer: "Staking can be a good way to earn passive income on proof-of-stake tokens you plan to hold long-term. Yields typically range from 3-12% APY depending on the asset. Consider risks like lock-up periods, smart contract vulnerabilities (for DeFi staking), and the underlying token's price volatility. Liquid staking protocols like Lido let you stake while maintaining liquidity.",
  },
];

export const STAKING_FAQS: FAQ[] = [
  {
    question: "What is crypto staking?",
    answer: "Staking is the process of locking up your cryptocurrency to help secure a proof-of-stake blockchain network. In return, you earn rewards (similar to interest) paid in the staked token. You can stake through centralized exchanges, liquid staking protocols, or by running your own validator node.",
  },
  {
    question: "What are the risks of staking?",
    answer: "Key staking risks include: token price decline erasing your rewards, slashing penalties if your validator misbehaves, smart contract vulnerabilities in DeFi staking, lock-up periods preventing you from selling, and counterparty risk with centralized staking providers. Liquid staking protocols help mitigate lock-up risk but introduce smart contract risk.",
  },
  {
    question: "What is liquid staking?",
    answer: "Liquid staking lets you stake tokens while receiving a liquid derivative token (like stETH for Ethereum) that represents your staked position. This derivative can be used in DeFi protocols for lending, borrowing, or providing liquidity, effectively earning yield on top of your staking rewards.",
  },
  {
    question: "How much can I earn from staking?",
    answer: "Staking rewards vary by network and provider. Ethereum staking typically yields 3-4% APY, Solana offers 6-8%, and Cosmos chains can yield 10-20%. Centralized exchanges take a commission (25-35%), while DeFi protocols charge less (4-10%). Returns are paid in the staked token, so your dollar-denominated returns depend on price movement.",
  },
];

export const ETF_FAQS: FAQ[] = [
  {
    question: "What is a crypto ETF?",
    answer: "A crypto ETF (Exchange-Traded Fund) is a regulated investment fund that tracks the price of a cryptocurrency like Bitcoin or Ethereum. Spot crypto ETFs hold the actual asset, while futures-based ETFs track futures contracts. ETFs trade on traditional stock exchanges and can be bought through regular brokerage accounts, including IRAs.",
  },
  {
    question: "What is the best Bitcoin ETF?",
    answer: "The iShares Bitcoin Trust (IBIT) from BlackRock is widely considered the best Bitcoin ETF due to its low 0.25% expense ratio, highest trading volume, strong liquidity, and institutional backing. Fidelity's FBTC and Bitwise's BITB are also strong options with competitive fees and unique advantages like self-custody and on-chain transparency.",
  },
  {
    question: "Are crypto ETFs safe?",
    answer: "Crypto ETFs remove self-custody and exchange risks since they are regulated by the SEC and held by licensed custodians. However, the underlying crypto assets remain volatile, so your investment value can still fluctuate significantly. ETFs also charge management fees that reduce returns compared to holding crypto directly.",
  },
  {
    question: "Can I buy crypto ETFs in my IRA?",
    answer: "Yes, spot Bitcoin and Ethereum ETFs like IBIT, FBTC, and ETHA can be purchased in traditional and Roth IRAs through most major brokerages. This offers a tax-advantaged way to gain crypto exposure. Check with your specific IRA custodian for availability.",
  },
];

export const TRADING_PLATFORM_FAQS: FAQ[] = [
  {
    question: "What is the best crypto trading platform?",
    answer: "The best platform depends on your needs. Coinbase is best for beginners and US-based investors due to its simple interface and regulatory compliance. Binance offers the lowest fees and widest asset selection for global traders. Kraken provides excellent security with competitive fees. For derivatives trading, Bybit and OKX are top choices.",
  },
  {
    question: "What should I look for in a crypto trading platform?",
    answer: "Key factors include: security track record and practices, fee structure (maker/taker fees, withdrawal fees), supported cryptocurrencies, regulatory compliance in your region, user interface quality, customer support responsiveness, available features (staking, lending, derivatives), and mobile app quality.",
  },
  {
    question: "Are crypto trading platforms safe?",
    answer: "Major regulated platforms like Coinbase and Kraken have strong security records. Look for platforms with: proof of reserves, cold storage for majority of funds, two-factor authentication, insurance coverage, and regulatory licenses. However, no exchange is 100% safe, so consider moving large holdings to your own hardware wallet.",
  },
];

export const BEGINNER_FAQS: FAQ[] = [
  {
    question: "How do I start investing in cryptocurrency?",
    answer: "To start: (1) Choose a reputable exchange like Coinbase, (2) Complete identity verification, (3) Fund your account via bank transfer or debit card, (4) Start with Bitcoin or Ethereum as your first purchase, (5) Consider dollar-cost averaging by investing a fixed amount regularly, and (6) Learn about secure storage options like hardware wallets.",
  },
  {
    question: "How much money do I need to start investing in crypto?",
    answer: "You can start with as little as $1 on most major exchanges. Many platforms allow fractional purchases, so you do not need to buy an entire Bitcoin. Starting with $50-$100 is common for beginners. Focus on learning and building good habits before investing larger amounts.",
  },
  {
    question: "What are the biggest mistakes crypto beginners make?",
    answer: "Common mistakes include: investing more than you can afford to lose, chasing pumps and buying at all-time highs, not using two-factor authentication, keeping large amounts on exchanges, not diversifying, panic selling during dips, falling for scams and too-good-to-be-true yields, and not understanding what you are investing in.",
  },
];

export const PASSIVE_INCOME_FAQS: FAQ[] = [
  {
    question: "How can I earn passive income with crypto?",
    answer: "Major passive income strategies include: staking proof-of-stake tokens (3-12% APY), providing liquidity on DEXs (variable yields), lending crypto on platforms like Aave (2-8% APY), yield farming in DeFi (higher risk/reward), running validator nodes, and earning interest through CeFi platforms. Each carries different risk profiles.",
  },
  {
    question: "What is yield farming?",
    answer: "Yield farming involves providing liquidity or staking tokens across DeFi protocols to earn rewards, often in the form of governance tokens. While yields can be high, risks include impermanent loss, smart contract exploits, token price depreciation, and rug pulls. Start with established protocols like Aave, Uniswap, or Curve.",
  },
  {
    question: "Is crypto passive income taxable?",
    answer: "Yes, in most jurisdictions crypto passive income (staking rewards, lending interest, yield farming rewards) is taxable as ordinary income at the time you receive it, based on the fair market value at receipt. You may also owe capital gains tax when you later sell or trade these rewards. Consult a tax professional for your specific situation.",
  },
];

export const MEME_COIN_FAQS: FAQ[] = [
  {
    question: "What are meme coins?",
    answer: "Meme coins are cryptocurrencies that originate from internet memes, cultural references, or community-driven narratives rather than specific technological innovations. Examples include Dogecoin (DOGE), Shiba Inu (SHIB), and Pepe (PEPE). While some have achieved significant market caps, they are generally considered high-risk, speculative investments.",
  },
  {
    question: "Should I invest in meme coins?",
    answer: "Meme coins are extremely high risk. If you choose to speculate, only use money you can afford to lose completely, keep meme coin exposure to a small fraction (under 5%) of your portfolio, research the tokenomics and community, watch for rug pull warning signs, and take profits along the way rather than waiting for unrealistic targets.",
  },
];

export const DEFI_TOKEN_FAQS: FAQ[] = [
  {
    question: "What are DeFi tokens?",
    answer: "DeFi tokens are cryptocurrencies associated with decentralized finance protocols. They typically serve as governance tokens (voting on protocol changes), fee-sharing tokens (earning protocol revenue), or utility tokens (discounts, staking). Examples include UNI (Uniswap), AAVE (Aave), and MKR (MakerDAO).",
  },
  {
    question: "How do I evaluate DeFi tokens?",
    answer: "Key metrics include: Total Value Locked (TVL), protocol revenue and fee generation, token distribution and vesting schedules, governance participation rates, security audit history, competitive positioning, and the ratio of market cap to revenue (similar to P/E ratio in traditional finance).",
  },
];

export const LAYER2_FAQS: FAQ[] = [
  {
    question: "What are Layer 2 solutions?",
    answer: "Layer 2 solutions are protocols built on top of existing blockchains (primarily Ethereum) that process transactions off the main chain while inheriting its security. They significantly reduce fees and increase throughput. Main types include optimistic rollups (Arbitrum, Optimism) and ZK rollups (zkSync, StarkNet).",
  },
  {
    question: "Which Layer 2 should I use?",
    answer: "Arbitrum has the highest TVL and most DeFi activity, making it ideal for DeFi users. Base (by Coinbase) is growing rapidly for consumer apps. Optimism focuses on public goods and governance. For ZK-rollup technology, zkSync and StarkNet are leading options. Your choice depends on which apps and tokens you want to access.",
  },
];

export const AI_CRYPTO_FAQS: FAQ[] = [
  {
    question: "What are AI crypto tokens?",
    answer: "AI crypto tokens are associated with projects that combine artificial intelligence with blockchain technology. These include decentralized compute networks (Render, Akash), AI agent platforms (Fetch.ai, SingularityNET), data marketplaces (Ocean Protocol), and inference networks. They aim to decentralize AI development and provide open access to AI resources.",
  },
  {
    question: "Are AI crypto tokens a good investment?",
    answer: "AI crypto represents a high-growth narrative with significant potential but also substantial risk. The sector benefits from the broader AI trend, but many projects are early-stage with unproven technology. Invest in projects with real usage metrics, strong teams, and clear competitive advantages. Diversify across the AI crypto sector rather than concentrating in single tokens.",
  },
];

export const RWA_FAQS: FAQ[] = [
  {
    question: "What are Real World Assets (RWA) in crypto?",
    answer: "RWA tokens represent real-world assets like US Treasury bonds, real estate, commodities, or private credit that have been tokenized on a blockchain. This enables 24/7 trading, fractional ownership, global access, and DeFi composability for traditional assets. Major examples include Ondo Finance (tokenized treasuries) and Centrifuge (real-world credit).",
  },
  {
    question: "Are RWA tokens safe?",
    answer: "RWA tokens carry unique risks including: smart contract risk, legal and regulatory uncertainty, custodial risk (someone must hold the real assets), oracle risk (price feeds must be accurate), and liquidity risk. Established protocols with institutional backing and legal frameworks tend to be safer. Always verify the backing and audit status of RWA tokens.",
  },
];

export const AIRDROP_FAQS: FAQ[] = [
  {
    question: "What are crypto airdrops?",
    answer: "Airdrops are free token distributions given to wallet holders, usually to reward early users or promote a new project. Retroactive airdrops reward past protocol usage (like Uniswap's UNI airdrop). To qualify, you typically need to use a protocol before it launches its token, bridge assets, participate in governance, or meet specific criteria.",
  },
  {
    question: "How do I find upcoming airdrops?",
    answer: "To find potential airdrops: use protocols that have not yet launched tokens, participate in testnets, join Discord communities, follow crypto airdrop tracking sites, bridge assets to new chains, and engage with early-stage dApps. Be cautious of scam airdrops that ask you to connect your wallet to malicious sites or send crypto to receive tokens.",
  },
];

export const COPY_TRADING_FAQS: FAQ[] = [
  {
    question: "What is crypto copy trading?",
    answer: "Copy trading lets you automatically replicate the trades of experienced traders. When a trader you follow opens or closes a position, the same trade is executed in your account proportionally. Platforms like Bybit and OKX offer transparent performance metrics to help you choose traders to follow.",
  },
  {
    question: "Is copy trading profitable?",
    answer: "Results vary significantly. While top traders may show impressive returns, past performance does not guarantee future results. Risks include market downturns affecting all strategies, trader style drift, and profit-sharing fees reducing net returns. Start with a small allocation, diversify across multiple traders, and set strict risk limits.",
  },
];

// ─── Best-of Category Page Data ─────────────────────────────────────────────────

export const BEST_OF_CATEGORIES = [
  { name: "Best Cryptos to Buy", slug: "cryptos-to-buy", description: "Top-rated cryptocurrencies for your portfolio" },
  { name: "Best Long-Term Crypto", slug: "long-term", description: "Cryptocurrencies with strong long-term potential" },
  { name: "Best Staking Platforms", slug: "staking", description: "Top staking platforms and protocols" },
  { name: "Best Crypto ETFs", slug: "crypto-etfs", description: "Top-rated crypto exchange-traded funds" },
  { name: "Best Trading Platforms", slug: "trading-platforms", description: "Top crypto exchanges and trading platforms" },
  { name: "Best Portfolio Bots", slug: "portfolio-bots", description: "Top automated trading and portfolio bots" },
  { name: "Best Copy Trading", slug: "copy-trading", description: "Top crypto copy trading platforms" },
  { name: "Best Crypto Apps", slug: "apps", description: "Top-rated mobile crypto apps" },
  { name: "Best for Beginners", slug: "beginners", description: "Best crypto platforms for beginners" },
  { name: "Best Passive Income", slug: "passive-income", description: "Top passive income crypto strategies" },
  { name: "Best Airdrops", slug: "airdrops", description: "Upcoming and active crypto airdrops" },
  { name: "Best RWA Tokens", slug: "rwa", description: "Top real-world asset tokens" },
  { name: "Best Meme Coins", slug: "meme-coins", description: "Top meme coins by market cap and community" },
  { name: "Best DeFi Tokens", slug: "defi-tokens", description: "Top decentralized finance tokens" },
  { name: "Best Layer 2 Tokens", slug: "layer-2", description: "Top Ethereum Layer 2 scaling tokens" },
  { name: "Best AI Crypto", slug: "ai-crypto", description: "Top AI and machine learning crypto projects" },
];

// ─── Learn Article Data ─────────────────────────────────────────────────────────

export const LEARN_ARTICLES = [
  { title: "How to Invest in Crypto", slug: "how-to-invest-in-crypto", readTime: "12 min read" },
  { title: "Crypto Investing for Beginners", slug: "crypto-investing-for-beginners", readTime: "10 min read" },
  { title: "Portfolio Allocation Guide", slug: "portfolio-allocation", readTime: "8 min read" },
  { title: "Dollar-Cost Averaging Strategy", slug: "dollar-cost-averaging", readTime: "7 min read" },
  { title: "Staking Explained", slug: "staking-explained", readTime: "9 min read" },
  { title: "Crypto ETFs Explained", slug: "crypto-etfs-explained", readTime: "8 min read" },
  { title: "Market Cap Explained", slug: "market-cap-explained", readTime: "6 min read" },
  { title: "Tokenomics Guide", slug: "tokenomics-guide", readTime: "10 min read" },
  { title: "Fundamental Analysis", slug: "fundamental-analysis", readTime: "11 min read" },
  { title: "Technical Analysis", slug: "technical-analysis", readTime: "12 min read" },
  { title: "Risk Management", slug: "risk-management", readTime: "9 min read" },
  { title: "Diversification Strategies", slug: "diversification", readTime: "8 min read" },
];

// ─── Calculator Data ────────────────────────────────────────────────────────────

export const CALCULATORS = [
  { title: "Profit Calculator", slug: "profit-calculator", description: "Calculate your crypto gains and losses" },
  { title: "DCA Calculator", slug: "dca-calculator", description: "Plan your dollar-cost averaging strategy" },
  { title: "Staking Calculator", slug: "staking-calculator", description: "Estimate your staking rewards" },
  { title: "ROI Calculator", slug: "roi-calculator", description: "Calculate return on investment" },
];
