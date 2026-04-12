import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Zerion Wallet Review (${CURRENT_YEAR}) - Best DeFi Portfolio Wallet? | ${SITE_NAME}`,
  description: `Detailed Zerion wallet review for ${CURRENT_YEAR}. Covers multi-chain DeFi tracking, swap aggregation, NFT management, and portfolio analytics.`,
  alternates: { canonical: "/wallets/reviews/zerion" }};

const product = {
  name: "Zerion",
  slug: "zerion",
  rating: 4.4,
  description: "Zerion is a multi-chain DeFi wallet and portfolio tracker that aggregates positions across hundreds of protocols and chains into a single unified dashboard.",
  pros: [
    "Exceptional DeFi portfolio tracking across 15+ chains",
    "Built-in swap aggregator finds best prices across DEXs",
    "Clean, modern interface with real-time position updates",
    "Automatic detection of DeFi positions, NFTs, and airdrops",
  ],
  cons: [
    "No hardware wallet standalone mode — browser extension only",
    "Primarily EVM-focused with limited non-EVM support",
    "Premium features require Zerion DNA NFT or subscription",
  ],
  bestFor: "DeFi power users who need comprehensive multi-chain portfolio tracking",
  affiliateUrl: "#",
  category: "wallets",
};

const overview = `Zerion has evolved from a simple DeFi dashboard into a full-featured crypto wallet that combines portfolio tracking, token swaps, and NFT management in one seamless package. The wallet automatically detects and displays your positions across more than 15 EVM-compatible chains, including Ethereum, Arbitrum, Optimism, Base, Polygon, and many others. What sets Zerion apart from typical wallets is its deep DeFi integration — it recognizes lending positions on Aave, liquidity pool stakes on Uniswap, yield farming positions on Convex, and hundreds of other protocol interactions. Rather than showing raw token balances, Zerion presents your net worth with full context of where your assets are deployed and how they are performing.

The swap functionality aggregates prices from multiple DEXs and bridge protocols, routing trades through the most efficient path. The NFT gallery provides a visual overview of your collections with floor price estimates and rarity data. For users managing assets across multiple chains and protocols, Zerion provides a level of portfolio visibility that few other wallets can match.`;

const sections = [
  {
    id: "portfolio-tracking",
    title: "Portfolio Tracking & DeFi Integration",
    content: "Zerion's portfolio tracking is its crown jewel. The dashboard aggregates your total net worth across all connected chains and automatically categorizes assets into tokens, DeFi positions, and NFTs. Each DeFi position shows the protocol name, current value, profit or loss, and underlying tokens. For example, a Uniswap V3 liquidity position displays both token amounts, accumulated fees, and the current price range. Aave lending positions show your supplied collateral, borrowed amounts, and health factor. This level of detail eliminates the need to visit individual protocol dashboards to check your positions. The portfolio also tracks historical performance with charts showing your total net worth over time, making it easy to see how your DeFi strategy is performing across market conditions.",
  },
  {
    id: "swap-aggregation",
    title: "Swap Aggregation & Cross-Chain Bridges",
    content: "The built-in swap feature aggregates prices from major DEXs including Uniswap, SushiSwap, Curve, 1inch, and Paraswap to find the best execution price for your trade. For cross-chain transfers, Zerion integrates bridge protocols like Socket and LI.FI to move assets between chains with minimal friction. The interface displays the expected output, price impact, gas estimate, and any bridge fees before you confirm. Multi-hop routes are supported, meaning Zerion can chain together multiple swaps and bridges to get you from any token on one chain to any token on another chain in a single transaction flow. Swap fees are competitive with standalone DEX aggregators, and the convenience of executing everything within the wallet interface saves considerable time for active traders.",
  },
  {
    id: "nft-management",
    title: "NFT Gallery & Management",
    content: "Zerion provides a visually rich NFT gallery that displays your collections across all connected chains. Each NFT shows its image, collection name, floor price estimate, and rarity rank when available. You can filter NFTs by chain, collection, or type, and the gallery supports both ERC-721 and ERC-1155 standards. The ability to see floor price estimates for your entire NFT portfolio adds a financial dimension that many wallet NFT views lack. You can send NFTs directly from the gallery interface, and Zerion also highlights any unclaimed airdrops or NFT rewards that you may have missed. For collectors managing portfolios across Ethereum, Polygon, and Layer 2 networks, this unified view is particularly valuable.",
  },
  {
    id: "user-experience",
    title: "User Experience & Interface Design",
    content: "Zerion features a minimalist, modern design that prioritizes clarity over complexity. The main dashboard presents your net worth prominently with a clean breakdown by category. Navigation between tokens, DeFi positions, NFTs, and transaction history is intuitive with a sidebar menu on desktop and bottom tabs on mobile. The color scheme and typography are consistent across platforms, creating a cohesive experience whether you access Zerion through the browser extension, mobile app, or web interface. Transaction notifications provide real-time updates on pending and confirmed transactions, and the activity feed shows a human-readable history of all your on-chain actions rather than raw transaction hashes.",
  },
];

const fees: Record<string, string> = {
  "Wallet Download": "Free",
  "Swap Fee": "0.5% on trades (waived for DNA holders)",
  "Bridge Fee": "Variable based on route and protocol",
  "Portfolio Tracking": "Free for basic features",
  "Network Fees": "Standard blockchain gas fees apply",
  "Premium Features": "Zerion DNA NFT or subscription required",
};

const security = [
  "Self-custody wallet with local private key storage",
  "12-word seed phrase backup for wallet recovery",
  "Browser extension with phishing detection warnings",
  "Transaction simulation previews before signing",
  "No KYC or account registration required",
  "Open-source smart contracts for swap routing",
];

const features = [
  "Multi-chain portfolio dashboard tracking 15+ EVM chains",
  "Automatic DeFi position detection across hundreds of protocols",
  "Swap aggregation across major DEXs for best pricing",
  "Cross-chain bridge integration for seamless asset transfers",
  "NFT gallery with floor price estimates and rarity data",
  "Real-time transaction notifications and activity feed",
  "Browser extension and mobile app with synced experience",
  "Airdrop detection and claim interface",
];

const faqs = [
  {
    question: "Is Zerion wallet free?",
    answer: "Zerion is free to download and use for basic portfolio tracking and wallet functionality. Swaps carry a 0.5% fee that is waived for holders of the Zerion DNA NFT. Some premium analytics features may require a subscription or DNA NFT ownership. Network gas fees apply to all on-chain transactions as with any wallet.",
  },
  {
    question: "How does Zerion compare to MetaMask?",
    answer: "Zerion excels at portfolio tracking and DeFi position visualization, automatically showing your positions across multiple chains and protocols in one view. MetaMask has broader dApp compatibility and a larger user base. If you primarily interact with DeFi and want to track positions across chains, Zerion is the stronger choice. For maximum dApp compatibility, MetaMask remains the safer bet.",
  },
  {
    question: "Does Zerion support hardware wallets?",
    answer: "Zerion supports connecting Ledger hardware wallets through the browser extension, allowing you to view your hardware wallet portfolio with Zerion's tracking features while keeping your keys secure on the Ledger device. Trezor support is also available. However, Zerion does not have a standalone desktop app for hardware wallet management.",
  },
];

const relatedReviews = [
  { name: "Rabby", slug: "rabby" },
  { name: "Rainbow", slug: "rainbow" },
  { name: "MetaMask", slug: "metamask" },
];

const relatedGuides = [
  { title: "What Is a Crypto Wallet?", href: "/wallets/learn/what-is-a-crypto-wallet" },
  { title: "Wallet for DeFi Guide", href: "/wallets/learn/wallet-for-defi-guide" },
  { title: "Best Multi-Chain Wallets", href: "/wallets/best/multi-chain" },
];

export default function ZerionReviewPage() {
  return (
    <ReviewPage
      product={product}
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      overview={overview}
      sections={sections}
      fees={fees}
      security={security}
      features={features}
      faqs={faqs}
      relatedReviews={relatedReviews}
      relatedGuides={relatedGuides}
    />
  );
}
