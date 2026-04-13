import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = {
  name: "PancakeSwap",
  slug: "pancakeswap",
  rating: 4.0,
  description:
    "PancakeSwap is the largest DEX on BNB Chain, offering token swaps, yield farming, lottery, NFT marketplace, and perpetual futures across multiple chains.",
  pros: [
    "Largest DEX on BNB Chain with deepest liquidity",
    "Multi-chain deployment across BNB Chain, Ethereum, Arbitrum, and more",
    "Extensive DeFi features: farming, lottery, IFOs, NFT marketplace",
    "Very low gas fees on BNB Chain (under $0.10 per transaction)",
  ],
  cons: [
    "BNB Chain raises centralization concerns for some users",
    "High CAKE token emissions create inflationary pressure",
    "Interface can feel overwhelming with many features and promotions",
    "Smart contract risk across multiple chain deployments",
  ],
  fees: "0.25% standard swap fee",
  bestFor: "BNB Chain DeFi users and yield farmers",
  affiliateUrl: "https://degen0x.com/go/pancakeswap",
  category: "exchanges",
};

export const metadata: Metadata = {
  title: `PancakeSwap Review (${CURRENT_YEAR}) - BNB Chain's Biggest DEX | ${SITE_NAME}`,
  description: `Complete PancakeSwap review for ${CURRENT_YEAR}. Covers BNB Chain trading, yield farming, V3 concentrated liquidity, CAKE token, and multi-chain expansion.`,
  alternates: { canonical: "/exchanges/reviews/pancakeswap" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const overview =
  "PancakeSwap is the largest decentralized exchange on the BNB Chain (formerly Binance Smart Chain) and one of the biggest DEXs in all of DeFi. Launched in 2020, PancakeSwap quickly rose to prominence by offering Uniswap-style automated market making with much lower gas fees on BNB Chain. The platform has since expanded to Ethereum, Arbitrum, Base, zkSync, and other chains, becoming a true multi-chain DEX.\n\nPancakeSwap offers far more than simple token swaps. The platform includes yield farming with CAKE token rewards, a prediction market, lottery, NFT marketplace, IFO (Initial Farm Offering) launchpad, and perpetual futures trading. This breadth of features makes PancakeSwap a comprehensive DeFi hub, particularly for users in the BNB Chain ecosystem.\n\nThe CAKE token is central to PancakeSwap's ecosystem, serving as the governance token, farming reward, and utility token across all platform features. PancakeSwap V3 introduced concentrated liquidity pools (similar to Uniswap V3), improving capital efficiency for liquidity providers. While the platform's association with BNB Chain raises centralization concerns for some DeFi purists, PancakeSwap's low fees, deep liquidity, and extensive feature set have made it a staple of the DeFi landscape.";

const sections = [
  {
    id: "multi-chain",
    title: "Multi-Chain Deployment",
    content:
      "PancakeSwap has expanded beyond its BNB Chain origins to deploy on Ethereum, Arbitrum, Base, zkSync Era, Polygon zkEVM, Linea, and other chains. Each deployment offers swap functionality with chain-specific liquidity pools. BNB Chain remains the primary deployment with the deepest liquidity and most features, while other chains provide access to their respective ecosystems. This multi-chain strategy ensures PancakeSwap remains relevant as the DeFi landscape fragments across multiple networks. Cross-chain swaps are facilitated through integrated bridge partners.",
  },
  {
    id: "v3-liquidity",
    title: "V3 Concentrated Liquidity",
    content:
      "PancakeSwap V3 introduced concentrated liquidity pools that allow LPs to provide liquidity within custom price ranges, dramatically improving capital efficiency compared to the original V2 full-range model. V3 pools support multiple fee tiers (0.01%, 0.05%, 0.25%, 1%) and provide tools for position management including range visualization, fee accrual tracking, and one-click harvesting. V2 pools still operate alongside V3 for backward compatibility. The migration to V3 has improved execution for traders through tighter spreads on major pairs.",
  },
  {
    id: "yield-farming",
    title: "Yield Farming & CAKE Rewards",
    content:
      "PancakeSwap's yield farming program is one of the largest in DeFi. Users can stake LP tokens in farms to earn CAKE token rewards on top of swap fees. Farm APR varies by pool, with popular pairs often offering double-digit returns. The Syrup Pools allow users to stake CAKE directly to earn other tokens from partner projects. PancakeSwap has implemented a CAKE emissions reduction schedule and buyback-and-burn mechanism to manage inflation, though high emission rates remain a concern for some investors.",
  },
  {
    id: "additional-features",
    title: "Prediction Market, Lottery & NFTs",
    content:
      "PancakeSwap offers a prediction market where users can predict whether BNB or CAKE prices will go up or down in short timeframes. The lottery allows CAKE holders to purchase tickets for periodic jackpot drawings. An NFT marketplace supports buying, selling, and trading PancakeSwap-themed and partner collection NFTs. IFOs (Initial Farm Offerings) give users the opportunity to buy new project tokens using CAKE. These gamified features differentiate PancakeSwap from purely swap-focused DEXs and contribute to user engagement.",
  },
  {
    id: "perpetual-futures",
    title: "Perpetual Futures",
    content:
      "PancakeSwap offers perpetual futures trading powered by an integration with on-chain derivatives infrastructure. Users can trade perpetual contracts on major assets with leverage. The futures interface includes standard trading tools, take-profit/stop-loss orders, and position management. While less feature-rich than dedicated perps platforms like Hyperliquid or GMX, PancakeSwap's futures offering adds another dimension to its comprehensive DeFi suite and allows users to stay within a single platform for multiple trading needs.",
  },
];

const fees: Record<string, string> = {
  "V2 Swap Fee": "0.25% (0.17% to LPs, 0.03% to treasury, 0.05% to buyback)",
  "V3 Swap Fee": "Variable by pool (0.01%-1%)",
  "Farm Deposit/Withdrawal": "Network gas fee only",
  "Lottery Ticket": "~5 CAKE per ticket",
  "BNB Chain Gas": "Under $0.10 per transaction",
  "Ethereum Gas": "Standard Ethereum gas fees",
};

const security = [
  "Multiple security audits by CertiK, PeckShield, and SlowMist",
  "Fully on-chain and non-custodial across all chains",
  "Open-source smart contracts on GitHub",
  "Timelock on contract upgrades for community review",
  "Bug bounty program with significant rewards",
  "No KYC or account creation required",
  "Emergency pause functionality controlled by multisig",
];

const features = [
  "Multi-chain DEX on BNB Chain, Ethereum, Arbitrum, Base, and more",
  "V3 concentrated liquidity pools with multiple fee tiers",
  "Extensive yield farming with CAKE rewards and Syrup Pools",
  "IFO launchpad for new project token sales",
  "Prediction market, lottery, and gamified DeFi features",
  "NFT marketplace for digital collectibles",
  "Perpetual futures trading with leverage",
  "CAKE governance token with staking and fee-sharing",
];

const faqs = [
  {
    question: "Is PancakeSwap safe?",
    answer:
      "PancakeSwap has been audited multiple times by CertiK, PeckShield, and SlowMist. It is fully non-custodial and open-source. The protocol has operated since 2020 without a major exploit of its core contracts. However, smart contract risk exists for all DeFi protocols, and users should be cautious with farm deposits on smaller, less audited pools.",
  },
  {
    question: "What chain should I use PancakeSwap on?",
    answer:
      "BNB Chain offers the deepest liquidity, lowest fees, and most features. Use Ethereum or Arbitrum deployments when you want to swap tokens native to those chains without bridging. For most PancakeSwap features including farming, lottery, and IFOs, BNB Chain is the primary deployment.",
  },
  {
    question: "Is CAKE a good investment?",
    answer:
      "CAKE is PancakeSwap's utility and governance token. Its value depends on platform usage, fee generation, and the balance between emissions and burns. CAKE has faced inflationary pressure from high farming rewards, though the team has implemented emission reductions. Evaluate CAKE based on PancakeSwap's fundamental usage metrics and your own investment thesis.",
  },
  {
    question: "How does PancakeSwap compare to Uniswap?",
    answer:
      "Uniswap is the largest DEX on Ethereum and pioneered the AMM model. PancakeSwap adapted this model for BNB Chain with much lower fees and added gamified features. Uniswap has a stronger decentralization ethos and is the standard on Ethereum L1. PancakeSwap offers a broader feature set and lower costs on BNB Chain. Both now have multi-chain deployments.",
  },
];

const relatedReviews = [
  { name: "Raydium", slug: "raydium" },
  { name: "Jupiter Exchange", slug: "jupiter-exchange" },
  { name: "Orca DEX", slug: "orca" },
];

const relatedGuides = [
  { title: "Best Decentralized Exchanges", href: "/exchanges/best/decentralized" },
  { title: "CEX vs DEX", href: "/exchanges/learn/cex-vs-dex" },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Exchanges', item: 'https://degen0x.com/exchanges' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/exchanges/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Pancakeswap', },
  ],
};

export default function PancakeSwapReviewPage() {
  return (
    <>
      <ReviewPage
      product={product}
      categoryName="Crypto Exchanges"
      categorySlug="exchanges"
      overview={overview}
      sections={sections}
      fees={fees}
      security={security}
      features={features}
      faqs={faqs}
      relatedReviews={relatedReviews}
      relatedGuides={relatedGuides}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Multi-Chain Deployment", "description": "PancakeSwap is the largest DEX on BNB Chain, offering token swaps, yield farming, lottery, NFT marketplace, and perpetual futures across multiple chains.", "url": "https://degen0x.com/exchanges/reviews/pancakeswap", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    </>
  );
}
