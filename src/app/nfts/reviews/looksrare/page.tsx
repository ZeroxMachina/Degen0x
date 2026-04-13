import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";
import { Product } from "@/lib/types";

const product: Product = {
  name: "LooksRare",
  slug: "looksrare",
  rating: 3.7,
  description: "LooksRare is a community-first Ethereum NFT marketplace that rewards users with LOOKS tokens for trading activity. It focuses on competitive fees and token",
  pros: [
    "LOOKS token rewards for trading activity",
    "2% marketplace fee undercuts OpenSea",
    "Community governance through token voting",
    "Revenue sharing with LOOKS stakers in WETH",
    "Clean and straightforward trading interface",
  ],
  cons: [
    "Significantly lower trading volume than OpenSea or Blur",
    "History of wash trading to earn token rewards",
    "Ethereum-only with no multi-chain support",
    "Limited collection discovery and analytics tools",
  ],
  fees: "2% marketplace fee",
  bestFor: "Reward-seeking NFT traders",
  affiliateUrl: "https://degen0x.com/go/looksrare",
  category: "nfts",
};

export const metadata: Metadata = {
  title: `LooksRare Review: Community-First NFT Marketplace (${CURRENT_YEAR}) | degen0x`,
  description:
    "In-depth LooksRare review covering LOOKS token rewards, staking, trading features, fees, and whether this community-governed marketplace is right for you.",
  alternates: { canonical: "/nfts/reviews/looksrare" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Nfts', item: 'https://degen0x.com/nfts' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/nfts/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Looksrare', },
  ],
};

export default function LooksRareReviewPage() {
  return (
    <>
      <ReviewPage
      product={product}
      categoryName="NFT Marketplaces"
      categorySlug="nfts"
      overview="LooksRare launched in January 2022 as a community-first alternative to OpenSea, distributing value back to users through the LOOKS token. The platform attracted immediate attention with a targeted airdrop to OpenSea power users and a token-incentivized trading model that rewards marketplace activity. Operating exclusively on Ethereum, LooksRare focuses on providing a clean trading experience with competitive 2% marketplace fees.

The core philosophy centers on community ownership through the LOOKS token. Holders can stake their tokens to earn a share of the platform's trading fee revenue in WETH, creating direct alignment between community participation and marketplace success. Governance proposals are voted on by token holders, giving the community meaningful influence over platform direction and fee structures.

While LooksRare attracted significant volume in its early months, much of the initial activity was attributed to wash trading driven by generous token incentives. The platform has since adjusted reward mechanisms to better align incentives with genuine trading. Despite lower volume compared to market leaders, LooksRare maintains a dedicated user base attracted by its token economics and community governance model."
      sections={[
        {
          id: "trading-interface",
          title: "Trading Interface and Experience",
          content:
            "LooksRare offers a clean, no-frills trading interface that prioritizes function over form. Collection pages display floor prices, volume metrics, and listing activity in a straightforward layout. The buying process is streamlined: connect wallet, browse collections, click buy, and confirm the transaction. The interface loads quickly and avoids overwhelming users with excessive data points or complex features. However, the platform lacks the advanced analytics and sweep tools found on Blur, and the collection discovery features are more limited than what OpenSea provides. For traders who want a simple and fast Ethereum NFT trading experience, the interface delivers effectively.",
        },
        {
          id: "looks-tokenomics",
          title: "LOOKS Token and Staking Rewards",
          content:
            "The LOOKS token is the centerpiece of the LooksRare ecosystem. Users earn LOOKS through trading activity on the platform, with rewards distributed based on volume and engagement. Token holders can stake LOOKS to receive a share of marketplace trading fee revenue paid in WETH, creating a direct connection between platform usage and staker returns. The revenue-sharing model provides tangible yields that vary based on overall trading volume. LOOKS also serves as the governance token, enabling holders to vote on protocol proposals affecting fees, reward structures, and platform development priorities. LooksRare has iteratively adjusted its reward design to reduce wash trading incentives and better compensate genuine marketplace participation.",
        },
        {
          id: "trading-features",
          title: "Trading Features and Tools",
          content:
            "LooksRare supports standard NFT trading features including fixed-price listings, individual item offers, and collection-wide offers. The platform aggregates its own listings alongside listings from other marketplaces for more comprehensive price discovery. Bulk listing and delisting tools help sellers manage larger inventories efficiently. Both ERC-721 and ERC-1155 token standards are fully supported. While functional for everyday trading, the feature set is more basic compared to Blur's professional sweep tools or OpenSea's broader marketplace capabilities. LooksRare is best suited for traders who want simple execution with token reward benefits rather than advanced trading infrastructure.",
        },
        {
          id: "fees-royalties",
          title: "Fee Structure and Royalties",
          content:
            "LooksRare charges a 2% marketplace fee on all sales, undercutting OpenSea's 2.5% by half a percentage point. On a 10 ETH trade, that difference saves 0.05 ETH. Creator royalties are optional on LooksRare, with buyers choosing whether to honor them at the time of purchase. The platform's fee revenue feeds directly into the LOOKS staking pool, where it is distributed to stakers as WETH. This transparent revenue distribution model means users can see exactly how much trading fee revenue is generated and shared. Standard Ethereum gas fees apply on top of marketplace fees for all transactions.",
        },
        {
          id: "community-governance",
          title: "Community Governance",
          content:
            "LooksRare's governance model gives LOOKS token holders voting power over key platform decisions. Proposals can address fee structures, reward mechanisms, feature priorities, treasury allocations, and strategic direction. The governance process follows a standard proposal, discussion, and voting workflow common to decentralized protocols. While community governance gives users genuine influence, voter participation rates are modest compared to the total token supply, meaning engaged community members have outsized influence. The governance model represents a meaningful differentiation from centralized marketplaces where platform decisions are made unilaterally by the company.",
        },
      ]}
      fees={{
        "Marketplace Fee": "2% per sale",
        "Creator Royalties": "Optional (buyer's choice)",
        "Listing Fee": "Free",
        "LOOKS Staking Yield": "Share of trading fees in WETH",
        "Gas Fees": "Ethereum network fees apply",
      }}
      security={[
        "Smart contract audits by reputable security firms",
        "Non-custodial trading architecture",
        "Open-source smart contracts for community verification",
        "Collection verification badges for legitimate projects",
        "Wallet-to-wallet settlement without fund custody",
      ]}
      features={[
        "LOOKS token trading rewards and staking",
        "2% marketplace fee lower than OpenSea",
        "Revenue sharing with LOOKS stakers in WETH",
        "Community governance through token voting",
        "Collection offers and bulk listing tools",
        "Cross-marketplace listing aggregation",
        "ERC-721 and ERC-1155 support",
        "Clean and fast trading interface",
      ]}
      faqs={[
        {
          question: "How do I earn LOOKS tokens?",
          answer:
            "You earn LOOKS tokens by trading NFTs on LooksRare. Rewards are distributed based on your trading volume relative to overall platform volume. You can also earn by staking LOOKS to receive a share of marketplace trading fee revenue distributed in WETH.",
        },
        {
          question: "Is LooksRare better than OpenSea?",
          answer:
            "LooksRare offers lower fees (2% vs 2.5%) and token rewards for trading. However, OpenSea has significantly more collections, higher liquidity, multi-chain support, and more advanced features. LooksRare is best for traders who value token incentives on Ethereum.",
        },
        {
          question: "What happened with LooksRare wash trading?",
          answer:
            "In its early months, LooksRare's generous token rewards attracted wash trading where users traded between their own wallets to farm LOOKS tokens. The platform has since adjusted its reward mechanisms to better incentivize genuine trading activity and reduce artificial volume.",
        },
        {
          question: "Can I stake LOOKS tokens?",
          answer:
            "Yes, LOOKS tokens can be staked on the platform to earn a share of marketplace trading fee revenue. Staking rewards are paid in WETH. The yield varies based on total trading volume and the amount of LOOKS staked across all participants.",
        },
      ]}
      relatedReviews={[
        { name: "X2Y2", slug: "x2y2" },
        { name: "Magic Eden", slug: "magic-eden" },
        { name: "Foundation", slug: "foundation" },
      ]}
      relatedGuides={[
        {
          title: "NFT Marketplaces Explained",
          href: "/nfts/learn/nft-marketplaces-explained",
        },
        {
          title: "NFT Investing Guide",
          href: "/nfts/learn/nft-investing-guide",
        },
      ]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}
