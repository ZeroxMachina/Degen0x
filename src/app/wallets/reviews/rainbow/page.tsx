import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Rainbow Wallet Review (${CURRENT_YEAR}) - Best Ethereum Mobile Wallet? | ${SITE_NAME}`,
  description: `Detailed Rainbow wallet review for ${CURRENT_YEAR}. Covers Ethereum and L2 support, NFT experience, swap features, and mobile-first design.`,
  alternates: { canonical: "/wallets/reviews/rainbow" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const product = {
  name: "Rainbow",
  slug: "rainbow",
  rating: 4.3,
  description: "Rainbow is a mobile-first Ethereum wallet known for its beautiful design, excellent NFT experience, and intuitive token swap functionality across EVM chains.",
  pros: [
    "Stunning visual design with best-in-class NFT display",
    "Intuitive mobile-first experience for Ethereum and L2s",
    "Built-in swap with competitive routing across DEXs",
    "Points system rewards active users with potential future value",
  ],
  cons: [
    "Limited to EVM chains — no Bitcoin or Solana support",
    "Browser extension is newer and less mature than mobile app",
    "Fewer advanced DeFi features compared to Rabby or Zerion",
  ],
  bestFor: "Ethereum and NFT enthusiasts who value beautiful design on mobile",
  affiliateUrl: "#",
  category: "wallets",
};

const overview = `Rainbow started as an Ethereum-focused mobile wallet and has grown into a multi-chain EVM wallet available on both iOS and Android, with a browser extension for desktop users. The wallet is built by a team that prioritizes design and user experience above all else, resulting in one of the most visually polished crypto wallets available. Rainbow supports Ethereum mainnet along with popular Layer 2 networks including Arbitrum, Optimism, Base, Polygon, and Zora, making it a strong choice for users who operate primarily within the Ethereum ecosystem.

The wallet includes built-in token swaps powered by aggregated DEX liquidity, an NFT gallery that showcases your collections with rich visual presentation, and ENS name integration that lets you send and receive using human-readable names. Rainbow has also introduced a points system that rewards users for activity within the wallet, creating an incentive layer that could translate into future token value. The overall experience is designed to make interacting with Ethereum feel approachable and enjoyable rather than intimidating.`;

const sections = [
  {
    id: "design-ux",
    title: "Design & User Experience",
    content: "Rainbow's interface is arguably the most visually appealing in the Ethereum wallet space. The main screen displays your portfolio balance with a smooth gradient background that shifts based on your holdings. Token lists show current prices, 24-hour changes, and your position value with clean typography and ample spacing. The transaction flow uses step-by-step screens with clear confirmation details, making it difficult to accidentally send to the wrong address or approve a malicious transaction. Animations throughout the app are smooth and purposeful, adding personality without sacrificing functionality. The design language extends to the browser extension, maintaining visual consistency across platforms. Rainbow proves that crypto wallets do not need to look utilitarian to be functional.",
  },
  {
    id: "nft-experience",
    title: "NFT Gallery & Collection Display",
    content: "The NFT experience in Rainbow is among the best of any wallet. Your collections are displayed in a grid format with high-resolution image previews, and tapping into an NFT reveals detailed metadata including traits, rarity information, and floor price estimates. Rainbow supports NFTs on Ethereum mainnet and all connected Layer 2 networks, automatically organizing them by collection. The gallery includes features for hiding spam NFTs, favoriting collections, and viewing recent sales data. For creators and collectors who want their digital art displayed beautifully, Rainbow treats NFTs as first-class citizens rather than an afterthought appended to a token wallet.",
  },
  {
    id: "swaps-bridges",
    title: "Token Swaps & Cross-Chain Bridges",
    content: "Rainbow includes built-in token swaps that route through multiple DEXs to find optimal pricing. The swap interface is clean and straightforward — select your input and output tokens, enter an amount, and Rainbow displays the expected output along with price impact and gas estimates. Cross-chain swaps are supported through integrated bridge protocols, allowing you to move assets between Ethereum and Layer 2 networks without leaving the wallet. The routing engine compares quotes from sources including Uniswap, 0x Protocol, and other liquidity providers. While the swap feature works well for standard trades, power users executing large or complex multi-hop trades may find more granular control in dedicated DEX aggregators.",
  },
  {
    id: "ens-integration",
    title: "ENS Name Integration",
    content: "Rainbow has deep integration with Ethereum Name Service, allowing users to register, manage, and use ENS names directly within the wallet. When sending tokens, you can enter an ENS name instead of a hexadecimal address, and Rainbow resolves it instantly with a visual confirmation showing the associated avatar and address. Your own ENS name and avatar are displayed prominently in the wallet interface, creating a personalized identity layer. Rainbow also supports ENS profiles, displaying bio information and linked social accounts. This integration makes Rainbow particularly appealing to users who have invested in their on-chain identity through ENS domains.",
  },
];

const fees: Record<string, string> = {
  "Wallet Download": "Free",
  "Swap Fee": "0.85% on swaps",
  "Bridge Fee": "Variable based on bridge protocol used",
  "ENS Registration": "ENS protocol fees plus gas",
  "Network Fees": "Standard blockchain gas fees",
};

const security = [
  "Self-custody with local private key encryption",
  "12-word or 24-word seed phrase backup",
  "Biometric authentication on mobile devices",
  "Transaction simulation for contract interactions",
  "Cloud backup option with password encryption",
  "No KYC or personal information required",
];

const features = [
  "Ethereum and Layer 2 support including Arbitrum, Optimism, Base, and Polygon",
  "Beautiful NFT gallery with rich metadata and floor price display",
  "Built-in DEX aggregator swap with competitive pricing",
  "ENS name registration and management",
  "Cross-chain bridge integration for L2 transfers",
  "Rainbow Points rewards system for active users",
  "Mobile apps for iOS and Android with browser extension",
  "Automatic spam NFT detection and filtering",
];

const faqs = [
  {
    question: "Is Rainbow wallet safe to use?",
    answer: "Rainbow is a self-custody wallet that stores your private keys locally on your device, encrypted with your passcode or biometrics. It does not require any personal information or KYC. The wallet includes transaction simulation to preview the outcome of contract interactions before signing. For maximum security, you should back up your seed phrase offline and enable biometric lock on your device.",
  },
  {
    question: "Does Rainbow support Bitcoin or Solana?",
    answer: "No. Rainbow is focused exclusively on Ethereum and EVM-compatible chains. It supports Ethereum mainnet, Arbitrum, Optimism, Base, Polygon, Zora, and other EVM Layer 2 networks. If you need Bitcoin or Solana support, consider a multi-chain wallet like Exodus or Trust Wallet instead.",
  },
  {
    question: "What are Rainbow Points?",
    answer: "Rainbow Points are a rewards system that tracks your activity within the Rainbow wallet. You earn points for actions like making swaps, bridging assets, and referring friends. While the points do not currently have a defined monetary value, they are widely expected to play a role in a potential future Rainbow token distribution. The points system incentivizes wallet usage and community participation.",
  },
];

const relatedReviews = [
  { name: "Zerion", slug: "zerion" },
  { name: "MetaMask", slug: "metamask" },
  { name: "Coinbase Wallet", slug: "coinbase-wallet" },
];

const relatedGuides = [
  { title: "Best Ethereum Wallets", href: "/wallets/best/ethereum" },
  { title: "NFT Storage Guide", href: "/wallets/learn/nft-storage-guide" },
  { title: "Best NFT Wallets", href: "/wallets/best/nft" },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/wallets/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Rainbow', },
  ],
};

export default function RainbowReviewPage() {
  return (
    <>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}
