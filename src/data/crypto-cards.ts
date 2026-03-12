import { Product, ComparisonItem } from "@/lib/types";

export const cryptoCards: Product[] = [
  {
    name: "Crypto.com Visa",
    slug: "crypto-com-visa",
    rating: 4.7,
    description:
      "The flagship Crypto.com Visa card offers tiered cashback rewards from 1% to 5% based on CRO staking levels. Higher tiers unlock premium perks including airport lounge access, Spotify and Netflix reimbursements, and elevated earn rates across the Crypto.com ecosystem.",
    pros: [
      "Up to 5% cashback in CRO on all purchases",
      "Free Spotify, Netflix, and Amazon Prime reimbursements on higher tiers",
      "No annual fees on any card tier",
      "Airport lounge access with Icy White and Obsidian tiers",
      "Zero foreign transaction fees worldwide",
    ],
    cons: [
      "Best rewards require significant CRO staking ($4,000 to $400,000)",
      "Cashback paid in CRO, which is subject to price volatility",
      "CRO staking is locked for 180 days",
      "Reward tiers have been reduced multiple times since launch",
    ],
    fees: "No annual fee; CRO staking required for higher tiers ($400–$400,000)",
    bestFor: "Crypto enthusiasts who want premium perks and high cashback",
    affiliateUrl: "https://degen0x.com/go/crypto-com-visa",
    category: "crypto-cards",
    featured: true,
  },
  {
    name: "Coinbase Card",
    slug: "coinbase-card",
    rating: 4.4,
    description:
      "The Coinbase Card is a Visa debit card that lets you spend any cryptocurrency in your Coinbase account and earn up to 4% back in crypto rewards. It draws from your Coinbase balance at the point of sale, converting crypto to USD in real time.",
    pros: [
      "Up to 4% back in crypto on every purchase",
      "Choose which crypto to earn as rewards (BTC, ETH, DOGE, and more)",
      "Spend any of your 100+ Coinbase-held assets directly",
      "No annual fee or activation fee",
      "Integrates seamlessly with the Coinbase app",
    ],
    cons: [
      "2.49% liquidation fee when spending crypto (not USD)",
      "Highest reward tiers limited to select assets",
      "Debit card only, no credit-building capability",
      "Only available to US residents",
    ],
    fees: "No annual fee; 2.49% crypto liquidation spread per transaction",
    bestFor: "Coinbase users who want to spend and earn crypto seamlessly",
    affiliateUrl: "https://degen0x.com/go/coinbase-card",
    category: "crypto-cards",
    featured: true,
  },
  {
    name: "Binance Card",
    slug: "binance-card",
    rating: 4.3,
    description:
      "The Binance Visa Card lets you convert and spend crypto anywhere Visa is accepted with cashback up to 8% depending on BNB holdings. Funds are automatically converted from your Binance spot wallet at the point of sale with zero fees on transactions.",
    pros: [
      "Up to 8% cashback with high BNB staking levels",
      "Zero transaction fees on purchases",
      "Spend from your Binance spot wallet directly",
      "Supports multiple cryptocurrencies for spending",
      "Real-time conversion with competitive exchange rates",
    ],
    cons: [
      "Not available in the US",
      "Highest cashback requires holding 600+ BNB ($150,000+)",
      "Cashback paid in BNB token",
      "Limited card management features compared to traditional banks",
    ],
    fees: "No annual fee; no transaction fees; BNB staking for higher cashback tiers",
    bestFor: "Binance users outside the US who hold BNB",
    affiliateUrl: "https://degen0x.com/go/binance-card",
    category: "crypto-cards",
    featured: true,
  },
  {
    name: "Nexo Card",
    slug: "nexo-card",
    rating: 4.2,
    description:
      "The Nexo Card is a credit-line card that lets you spend against your crypto portfolio without selling your holdings. It uses your deposited crypto as collateral, giving you instant spending power while your assets continue to appreciate.",
    pros: [
      "Spend without selling your crypto holdings",
      "Up to 2% cashback paid in Bitcoin or NEXO tokens",
      "No minimum repayment schedule or monthly payments",
      "Zero foreign transaction fees in 200+ countries",
      "Credit line available instantly upon depositing collateral",
    ],
    cons: [
      "Interest charged on outstanding balance (0% with NEXO Platinum loyalty)",
      "Crypto collateral can be liquidated if prices drop significantly",
      "Limited availability in some US states",
      "Requires depositing crypto as collateral upfront",
    ],
    fees: "No annual fee; variable APR on credit line (0%–13.9% based on loyalty tier)",
    bestFor: "HODLers who want liquidity without selling crypto",
    affiliateUrl: "https://degen0x.com/go/nexo-card",
    category: "crypto-cards",
  },
  {
    name: "Gemini Credit Card",
    slug: "gemini-card",
    rating: 4.1,
    description:
      "The Gemini Credit Card is a true credit card (not debit or prepaid) that earns up to 3% back in crypto at dining, 2% at groceries, and 1% on everything else. Rewards are paid in your choice of 60+ cryptocurrencies directly to your Gemini account.",
    pros: [
      "Real credit card that builds your credit score",
      "Up to 3% back in crypto at restaurants",
      "Choose from 60+ cryptocurrencies for rewards",
      "No annual fee",
      "No foreign transaction fees",
    ],
    cons: [
      "Rewards rates are lower than some competitors for non-dining purchases",
      "Requires a credit check for approval",
      "Interest charges apply if balance is not paid in full (APR 18.24%–25.24%)",
      "Crypto rewards are taxable income in the US",
    ],
    fees: "No annual fee; APR 18.24%–25.24% variable",
    bestFor: "Credit-building with crypto rewards on everyday spending",
    affiliateUrl: "https://degen0x.com/go/gemini-card",
    category: "crypto-cards",
  },
  {
    name: "BitPay Card",
    slug: "bitpay-card",
    rating: 4.0,
    description:
      "The BitPay Card is a prepaid Mastercard that lets you convert Bitcoin and other supported cryptocurrencies into US dollars and spend them anywhere Mastercard is accepted. It is one of the oldest crypto card offerings, backed by the established BitPay payment processor.",
    pros: [
      "Convert crypto to USD instantly for spending",
      "Accepted anywhere Mastercard is accepted worldwide",
      "Supports BTC, ETH, BCH, LTC, XRP, and several stablecoins",
      "No conversion fees when loading from crypto",
      "Established brand with years of track record",
    ],
    cons: [
      "No cashback or crypto rewards on purchases",
      "$5 monthly inactivity fee after 90 days",
      "$3 ATM withdrawal fee domestically",
      "Prepaid model requires loading funds before spending",
    ],
    fees: "$10 card issuance fee; $5/mo inactivity fee; $3 domestic ATM fee",
    bestFor: "Spending Bitcoin and crypto at physical stores and online retailers",
    affiliateUrl: "https://degen0x.com/go/bitpay-card",
    category: "crypto-cards",
  },
  {
    name: "Fold Card",
    slug: "fold-card",
    rating: 4.3,
    description:
      "The Fold Card is a Bitcoin rewards debit card that lets you earn Bitcoin on every purchase through a unique spin-the-wheel rewards mechanism. Every transaction gives you a chance to earn between 0.5% and 100% back in Bitcoin, making everyday spending feel like a game.",
    pros: [
      "Earn Bitcoin on every single purchase",
      "Unique spin-the-wheel mechanic with up to 100% Bitcoin back",
      "Premium tier offers guaranteed 1.5% base Bitcoin rewards",
      "Connects to your existing bank account (not crypto wallet)",
      "Lightning Network integration for instant Bitcoin transfers",
    ],
    cons: [
      "Base free tier only offers 0.5% average rewards",
      "Premium Fold+ costs $150/year for best rewards",
      "Rewards are variable, not guaranteed on standard tier",
      "Only earns Bitcoin, no other cryptocurrency options",
    ],
    fees: "Free tier or Fold+ at $150/year for premium rewards",
    bestFor: "Bitcoin maximalists who want BTC rewards on every purchase",
    affiliateUrl: "https://degen0x.com/go/fold-card",
    category: "crypto-cards",
  },
  {
    name: "Wirex Card",
    slug: "wirex-card",
    rating: 3.9,
    description:
      "The Wirex Card is a multi-currency card supporting both traditional currencies and cryptocurrencies with up to 8% cashback through WXT token staking. It offers in-app exchange between fiat and crypto, making it a versatile all-in-one financial tool for global travelers and crypto users.",
    pros: [
      "Multi-currency support for both fiat and crypto in one card",
      "Up to 8% cryptoback with WXT token staking",
      "In-app exchange between 60+ fiat and cryptocurrencies",
      "Available in 130+ countries across Europe, Asia, and more",
      "X-Accounts for earning yield on idle balances",
    ],
    cons: [
      "Maximum cashback requires significant WXT staking",
      "Exchange rates include a small spread markup",
      "Not available in the US",
      "Customer support response times can be slow",
    ],
    fees: "Free standard card; premium plans from $2.99/mo to $29.99/mo",
    bestFor: "Global travelers who want multi-currency crypto and fiat spending",
    affiliateUrl: "https://degen0x.com/go/wirex-card",
    category: "crypto-cards",
  },
  {
    name: "Plutus Card",
    slug: "plutus-card",
    rating: 4.1,
    description:
      "The Plutus Card is a Visa debit card offering decentralized cashback rewards through the PLU token. It stands out by letting users choose perk selections from popular brands and earn up to 8% back, all while maintaining a non-custodial approach to rewards.",
    pros: [
      "Up to 8% decentralized cashback in PLU tokens",
      "Choose from curated perks like Netflix, Spotify, and Deliveroo rebates",
      "Non-custodial rewards model with DEX-traded PLU token",
      "No staking lockup required for base rewards",
      "Strong privacy focus with minimal data collection",
    ],
    cons: [
      "PLU token has lower liquidity than major cryptocurrencies",
      "Best rewards require Plutus Pro or Premium subscription ($14.99+/mo)",
      "Only available in the UK and EEA countries",
      "Reward redemption requires on-chain PLU claiming",
    ],
    fees: "Free tier available; Pro $14.99/mo; Premium $49.99/mo",
    bestFor: "Privacy-conscious users in Europe who value decentralized rewards",
    affiliateUrl: "https://degen0x.com/go/plutus-card",
    category: "crypto-cards",
  },
  {
    name: "Gnosis Card",
    slug: "gnosis-card",
    rating: 3.8,
    description:
      "The Gnosis Card (Gnosis Pay) lets you spend directly from your Gnosis Safe smart contract wallet wherever Visa is accepted. It bridges DeFi and everyday spending by connecting your on-chain assets to a physical Visa card with no intermediary custody.",
    pros: [
      "Spend directly from your Gnosis Safe wallet on-chain",
      "No custodial intermediary holds your funds",
      "Visa acceptance worldwide at millions of merchants",
      "Integrated with Gnosis Chain for low-cost transactions",
      "Progressive decentralization roadmap",
    ],
    cons: [
      "Requires familiarity with Gnosis Safe and smart contract wallets",
      "Limited to Gnosis Chain assets for direct spending",
      "Newer product with less established track record",
      "Geographic availability is still expanding",
    ],
    fees: "Card issuance fee varies by region; no annual fee",
    bestFor: "DeFi-native users who want to spend directly from their Safe wallet",
    affiliateUrl: "https://degen0x.com/go/gnosis-card",
    category: "crypto-cards",
  },
  {
    name: "Bybit Card",
    slug: "bybit-card",
    rating: 4.0,
    description:
      "The Bybit Card is a Mastercard debit card linked directly to your Bybit exchange account, allowing you to spend crypto holdings at millions of merchants worldwide. It supports multiple cryptocurrencies for spending and offers cashback rewards with no annual fee.",
    pros: [
      "Linked directly to your Bybit exchange balance",
      "Spend from multiple cryptocurrency wallets",
      "Up to 3% cashback on eligible purchases",
      "No annual fee or monthly maintenance charges",
      "Instant top-up from Bybit trading account",
    ],
    cons: [
      "Not available to US residents",
      "Cashback rates vary by spending category and tier",
      "Exchange-dependent; requires trusting Bybit with funds",
      "Fewer premium perks compared to Crypto.com tiers",
    ],
    fees: "No annual fee; standard foreign transaction rates apply",
    bestFor: "Active Bybit traders who want to spend exchange balances directly",
    affiliateUrl: "https://degen0x.com/go/bybit-card",
    category: "crypto-cards",
  },
  {
    name: "Swipe Card",
    slug: "swipe-card",
    rating: 3.7,
    description:
      "The Swipe Card is a Visa debit card that lets you spend crypto with up to 4% cashback based on SXP token staking. It converts your crypto to fiat at the point of sale and was one of the early players in the crypto card space before being acquired by Binance.",
    pros: [
      "Up to 4% cashback through SXP staking tiers",
      "Supports Bitcoin, Ethereum, and many ERC-20 tokens",
      "Zero transaction fees on purchases",
      "Apple Pay and Google Pay compatible",
    ],
    cons: [
      "SXP token has seen significant price decline",
      "Product development has slowed after Binance acquisition",
      "Customer support quality has decreased over time",
      "Limited availability in many regions",
    ],
    fees: "No annual fee; SXP staking required for best cashback rates",
    bestFor: "SXP token holders seeking cashback on crypto spending",
    affiliateUrl: "https://degen0x.com/go/swipe-card",
    category: "crypto-cards",
  },
  {
    name: "Baanx Card",
    slug: "baanx-card",
    rating: 3.8,
    description:
      "The Baanx Card is a crypto-native banking card offering both debit and credit-line functionality. It powers white-label card programs for several crypto companies and provides direct crypto spending with competitive exchange rates and a straightforward mobile app.",
    pros: [
      "Both debit and crypto-backed credit-line options",
      "White-label infrastructure trusted by major crypto brands",
      "Competitive exchange rates on crypto-to-fiat conversion",
      "Available in the UK and select European markets",
      "Growing ecosystem with multiple partner integrations",
    ],
    cons: [
      "Smaller brand recognition compared to Crypto.com or Coinbase",
      "Rewards program is less generous than top competitors",
      "Limited cryptocurrency selection for spending",
      "App features still maturing compared to established fintech apps",
    ],
    fees: "No annual fee on basic card; premium tiers available",
    bestFor: "Users who want a crypto-native alternative to traditional banking cards",
    affiliateUrl: "https://degen0x.com/go/baanx-card",
    category: "crypto-cards",
  },
  {
    name: "Hi Card",
    slug: "hi-card",
    rating: 3.6,
    description:
      "The Hi Card is a Visa debit card from the Hi Dollar ecosystem that rewards users with HI tokens on purchases. It offers membership tiers based on HI token holdings and provides perks like higher cashback, ATM withdrawals, and access to exclusive earn products.",
    pros: [
      "Earn HI token rewards on every purchase",
      "Tiered membership with escalating perks",
      "No foreign transaction fees",
      "Integrated with Hi Dollar earn and staking platform",
    ],
    cons: [
      "HI token has limited liquidity and exchange listings",
      "Reward value depends heavily on HI token price performance",
      "Smaller user base and less community support",
      "Available in limited regions",
    ],
    fees: "No annual fee; HI token staking for premium tiers",
    bestFor: "Hi Dollar ecosystem participants who want card spending rewards",
    affiliateUrl: "https://degen0x.com/go/hi-card",
    category: "crypto-cards",
  },
  {
    name: "Rain Card",
    slug: "rain-card",
    rating: 4.2,
    description:
      "The Rain Card is a Visa credit card available in the US that earns between 1% and 1.5% cashback in Bitcoin on every purchase with no annual fee. It functions like a traditional credit card with the added benefit of automatically converting your rewards to Bitcoin.",
    pros: [
      "True credit card that builds your credit score",
      "1%–1.5% cashback automatically paid in Bitcoin",
      "No annual fee and no foreign transaction fees",
      "Works like a normal credit card with added BTC rewards",
      "Available nationwide in the US",
    ],
    cons: [
      "Lower cashback rate compared to some crypto debit cards",
      "Only earns Bitcoin, no other cryptocurrency options",
      "Variable APR applies to carried balances (17.99%–29.99%)",
      "Newer issuer with limited track record compared to major banks",
    ],
    fees: "No annual fee; APR 17.99%–29.99% variable",
    bestFor: "US residents who want a simple Bitcoin rewards credit card",
    affiliateUrl: "https://degen0x.com/go/rain-card",
    category: "crypto-cards",
  },
];

export function getCryptoCard(slug: string): Product | undefined {
  return cryptoCards.find((c) => c.slug === slug);
}

export function getCryptoCardsBySlug(slugs: string[]): Product[] {
  return slugs
    .map((slug) => cryptoCards.find((c) => c.slug === slug))
    .filter((c): c is Product => c !== undefined);
}

export function getTopCryptoCards(count: number = 5): Product[] {
  return [...cryptoCards].sort((a, b) => b.rating - a.rating).slice(0, count);
}

export function getCryptoCardComparison(slugs: string[]): ComparisonItem[] {
  return cryptoCards
    .filter((c) => slugs.includes(c.slug))
    .map((c) => ({
      name: c.name,
      slug: c.slug,
      features: {
        Fees: c.fees || "N/A",
        "Best For": c.bestFor,
        Rating: c.rating.toFixed(1) + "/5.0",
      },
      rating: c.rating,
      affiliateUrl: c.affiliateUrl,
    }));
}
