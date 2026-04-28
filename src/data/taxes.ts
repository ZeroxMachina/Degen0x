import { Product, ComparisonItem, FAQ } from "@/lib/types";

export const TAX_PRODUCTS: Product[] = [
  {
    name: "Koinly",
    slug: "koinly",
    rating: 4.8,
    description:
      "Koinly is the leading crypto tax software supporting 800+ integrations, automatic cost basis calculation, and one-click tax report generation for over 20 countries.",
    pros: [
      "Supports 800+ exchanges and wallets",
      "Automatic DeFi and NFT tracking",
      "Free portfolio tracking tier",
      "Multi-country tax report generation",
    ],
    cons: [
      "Paid plans required for tax reports",
      "Some DeFi protocols need manual import",
      "Customer support can be slow during tax season",
    ],
    fees: "From $49/year",
    bestFor: "Most crypto investors",
    affiliateUrl: "https://degen0x.com/go/koinly",
    category: "taxes",
    featured: true,
  },
  {
    name: "CoinTracker",
    slug: "cointracker",
    rating: 4.6,
    description:
      "CoinTracker provides seamless crypto tax reporting with direct integrations to TurboTax and H&R Block, plus real-time portfolio tracking across all your wallets and exchanges.",
    pros: [
      "TurboTax and H&R Block integration",
      "Clean, intuitive interface",
      "Real-time portfolio tracking",
      "Supports 500+ integrations",
    ],
    cons: [
      "Higher pricing than competitors",
      "Limited DeFi support on basic plans",
      "Transaction limits on lower tiers",
    ],
    fees: "From $59/year",
    bestFor: "TurboTax users",
    affiliateUrl: "https://degen0x.com/go/cointracker",
    category: "taxes",
    featured: true,
  },
  {
    name: "TaxBit",
    slug: "taxbit",
    rating: 4.5,
    description:
      "TaxBit offers enterprise-grade crypto tax compliance trusted by major exchanges, with free tax reporting for individual users through its network of exchange partners.",
    pros: [
      "Free through partner exchanges",
      "Enterprise-grade accuracy",
      "IRS compliance focused",
      "Supports all cost basis methods",
    ],
    cons: [
      "Limited exchange integrations vs competitors",
      "Fewer international tax forms",
      "Interface less polished than alternatives",
    ],
    fees: "Free (partner exchanges)",
    bestFor: "Exchange users wanting free reports",
    affiliateUrl: "https://degen0x.com/go/taxbit",
    category: "taxes",
  },
  {
    name: "CryptoTaxCalculator",
    slug: "cryptotaxcalculator",
    rating: 4.7,
    description:
      "CryptoTaxCalculator specializes in advanced DeFi tax tracking with support for complex transactions across hundreds of protocols, staking rewards, liquidity pools, and NFT trading.",
    pros: [
      "Best-in-class DeFi support",
      "Handles complex transactions automatically",
      "Supports 40+ countries",
      "Excellent NFT tax tracking",
    ],
    cons: [
      "No free tier for tax reports",
      "Can be complex for beginners",
      "Higher price for advanced features",
    ],
    fees: "From $49/year",
    bestFor: "DeFi and NFT traders",
    affiliateUrl: "https://degen0x.com/go/cryptotaxcalculator",
    category: "taxes",
    featured: true,
  },
  {
    name: "TokenTax",
    slug: "tokentax",
    rating: 4.4,
    description:
      "TokenTax combines crypto tax software with access to professional CPAs who specialize in cryptocurrency, offering full-service tax filing for complex crypto portfolios.",
    pros: [
      "Full-service CPA filing available",
      "Handles complex margin trading",
      "DeFi and staking support",
      "Expert tax consultation included",
    ],
    cons: [
      "Most expensive option",
      "Fewer exchange integrations",
      "CPA services have long wait times",
    ],
    fees: "From $65/year",
    bestFor: "Traders wanting CPA support",
    affiliateUrl: "https://degen0x.com/go/tokentax",
    category: "taxes",
  },
];

export const TAX_COMPARISON_ITEMS: ComparisonItem[] = TAX_PRODUCTS.map((p) => ({
  name: p.name,
  slug: p.slug,
  rating: p.rating,
  affiliateUrl: p.affiliateUrl,
  features: {
    "Starting Price": p.fees || "N/A",
    "Free Tier": p.slug === "taxbit" ? "Yes" : p.slug === "koinly" ? "Portfolio only" : "No",
    "Exchange Integrations": p.slug === "koinly" ? "800+" : p.slug === "cointracker" ? "500+" : p.slug === "cryptotaxcalculator" ? "400+" : p.slug === "tokentax" ? "200+" : "100+",
    "DeFi Support": p.slug === "cryptotaxcalculator" ? "Excellent" : p.slug === "koinly" ? "Good" : p.slug === "cointracker" ? "Good" : "Basic",
    "NFT Support": p.slug === "cryptotaxcalculator" ? "Excellent" : p.slug === "koinly" ? "Good" : "Basic",
    "TurboTax Integration": p.slug === "cointracker" ? "Yes" : p.slug === "taxbit" ? "Yes" : "No",
    "Countries Supported": p.slug === "koinly" ? "20+" : p.slug === "cryptotaxcalculator" ? "40+" : p.slug === "cointracker" ? "10+" : "US focused",
    "CPA Services": p.slug === "tokentax" ? "Yes" : "No",
  },
}));

export const TAX_COMPARISON_FEATURES = [
  "Starting Price",
  "Free Tier",
  "Exchange Integrations",
  "DeFi Support",
  "NFT Support",
  "TurboTax Integration",
  "Countries Supported",
  "CPA Services",
];

export const TAX_FAQS: FAQ[] = [
  {
    question: "Do I have to pay taxes on cryptocurrency?",
    answer:
      "Yes. In the United States, the IRS treats cryptocurrency as property. Every time you sell, trade, or spend crypto, it is a taxable event. You must report capital gains and losses. Receiving crypto from mining, staking, or airdrops is taxed as ordinary income at its fair market value when received.",
  },
  {
    question: "What is the best crypto tax software?",
    answer:
      "Koinly is the best overall crypto tax software for most users due to its 800+ integrations, automatic DeFi tracking, and multi-country support. CoinTracker is best for TurboTax users, while CryptoTaxCalculator is ideal for DeFi-heavy portfolios.",
  },
  {
    question: "How much does crypto tax software cost?",
    answer:
      "Crypto tax software ranges from free (TaxBit through partner exchanges) to $65+ per year (TokenTax). Most platforms charge between $49 and $99 per year for individual plans, with pricing typically based on transaction count.",
  },
  {
    question: "Can I use free crypto tax software?",
    answer:
      "Yes. TaxBit offers free tax reports through partner exchanges. Koinly has a free portfolio tracking tier but charges for tax report generation. Some software offers free plans for users with fewer than 25 transactions.",
  },
  {
    question: "What happens if I do not report crypto taxes?",
    answer:
      "Failing to report crypto taxes can result in penalties, interest on unpaid taxes, and potential criminal prosecution. The IRS receives data from exchanges and can identify unreported transactions. Penalties typically range from 5% to 25% of unpaid taxes, and willful evasion can carry up to 5 years in prison.",
  },
  {
    question: "How are crypto-to-crypto trades taxed?",
    answer:
      "Crypto-to-crypto trades are taxable events. When you swap one cryptocurrency for another, you must calculate the capital gain or loss based on the difference between your cost basis and the fair market value at the time of the trade. This applies to DEX swaps, token conversions, and trading pairs.",
  },
];
