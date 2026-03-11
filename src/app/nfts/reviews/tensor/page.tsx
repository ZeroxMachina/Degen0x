import { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";
import { Product } from "@/lib/types";

const product: Product = {
  name: "Tensor",
  slug: "tensor",
  rating: 4.1,
  description:
    "Tensor is the leading professional NFT trading platform on Solana, offering real-time analytics, advanced order types, compressed NFT support, and DeFi-style trading tools for serious NFT traders.",
  pros: [
    "Best-in-class Solana NFT trading experience",
    "Real-time analytics and floor price tracking",
    "Advanced order types including limit and collection bids",
    "Compressed NFT (cNFT) support for low-cost trading",
    "TNSR token rewards for active traders",
  ],
  cons: [
    "Solana-only with no multi-chain support",
    "Complex interface not ideal for beginners",
    "Smaller overall market compared to Ethereum platforms",
    "Token reward sustainability uncertain long-term",
  ],
  fees: "1.5% marketplace fee (reduced with TNSR)",
  bestFor: "Professional Solana NFT traders",
  affiliateUrl: "https://cryptodegen.com/go/tensor",
  category: "nfts",
};

export const metadata: Metadata = {
  title: `Tensor Review: Professional Solana NFT Trading (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "In-depth Tensor review covering Solana NFT trading tools, TNSR rewards, compressed NFT support, advanced analytics, and whether it's the right platform for you.",
};

export default function TensorReviewPage() {
  return (
    <ReviewPage
      product={product}
      categoryName="NFT Marketplaces"
      categorySlug="nfts"
      overview="Tensor launched as a professional-grade NFT trading platform built specifically for Solana, bringing the speed, analytics, and sophistication of DeFi trading interfaces to the NFT market. The platform has grown rapidly to become one of the two dominant Solana NFT marketplaces alongside Magic Eden, with a particular focus on serving active traders who demand real-time data and advanced order types.

What distinguishes Tensor from other Solana NFT platforms is its trading-first design philosophy. The interface resembles a financial trading terminal more than a traditional NFT marketplace, with real-time order books, collection analytics, portfolio dashboards, and advanced order types including limit orders and collection-wide bids. This design attracts traders who approach NFTs as financial instruments requiring professional-grade execution tools.

Tensor was also an early adopter of compressed NFT technology on Solana, enabling trading of NFTs minted using state compression at dramatically lower costs. The TNSR token rewards active traders and provides governance rights, creating a loyalty-driven ecosystem for Solana's most active NFT participants."
      sections={[
        {
          id: "trading-terminal",
          title: "Trading Terminal Interface",
          content:
            "Tensor's interface is designed for information density and trading speed, more closely resembling a financial terminal than a traditional marketplace. The main view displays collections in a sortable table with real-time metrics including floor price, volume, listed percentage, and holder counts. Collection pages feature an order book-style layout showing current asks, active bids, and recent trades. The portfolio dashboard provides comprehensive analytics on your holdings with real-time valuation updates. While extremely powerful for active traders, the interface complexity can overwhelm casual users or collectors who prefer visual browsing. Tensor excels for those who want maximum data at their fingertips and prioritize execution speed over aesthetic presentation.",
        },
        {
          id: "advanced-orders",
          title: "Advanced Order Types and Tools",
          content:
            "Tensor offers the most advanced NFT trading tools available on Solana. Limit orders allow traders to set specific buy prices and wait for execution rather than buying at the current floor. Collection bids enable bidding on entire collection floors with a single transaction. Sweep tools let traders purchase multiple floor-priced items simultaneously. Real-time alerts notify traders of price movements and new listing activity. AMM pools enable liquidity provision for NFT collections, applying DeFi innovation to NFT trading by letting users deposit NFTs and SOL into automated market making pools. These tools collectively create an experience closer to a DeFi protocol than a traditional NFT marketplace.",
        },
        {
          id: "compressed-nfts",
          title: "Compressed NFT Support",
          content:
            "Tensor has been a pioneer in supporting compressed NFTs on Solana. Compressed NFTs use state compression technology to reduce minting costs by up to 99%, storing NFT data in Merkle trees rather than individual on-chain accounts. This enables collections to mint millions of NFTs at negligible cost, opening up use cases in gaming, loyalty programs, and large-scale distributions. Tensor provides full trading support for cNFTs including listing, buying, bidding, and analytics, with the same interface quality as regular Solana NFTs. This capability is particularly important as gaming NFTs and mass-market collections increasingly adopt compression to achieve viable economics.",
        },
        {
          id: "tnsr-rewards",
          title: "TNSR Token and Rewards Program",
          content:
            "The TNSR token is Tensor's governance and rewards token, distributed to active traders based on trading volume and platform engagement. Token holders gain governance rights for voting on protocol development, fee structures, and reward distributions. TNSR holders also receive fee discounts on marketplace transactions, with discounts scaling based on holdings. The rewards program is structured to incentivize genuine trading activity and long-term platform loyalty, with reward tiers that benefit consistent users over one-time large traders. The fee discount mechanism means high-volume Tensor users effectively pay less than the headline 1.5% marketplace fee.",
        },
        {
          id: "ecosystem-position",
          title: "Solana Ecosystem Position",
          content:
            "Tensor competes directly with Magic Eden for Solana NFT trading volume, with each platform attracting different user profiles. Tensor captures the professional trading segment with its advanced tools and analytics, while Magic Eden serves a broader audience including collectors and new minters through its Launchpad. Many active Solana NFT traders use both platforms, checking prices and liquidity across each. Tensor's Solana-only focus means it cannot serve traders interested in Ethereum, Bitcoin Ordinals, or other chains, but the specialization allows it to deliver a more refined Solana experience than multi-chain competitors. The near-instant finality and sub-cent gas fees on Solana make Tensor's trading terminal particularly responsive.",
        },
      ]}
      fees={{
        "Marketplace Fee": "1.5% (reduced with TNSR holdings)",
        "Creator Royalties": "Optional",
        "Listing Fee": "Free",
        "AMM Pool Fee": "Variable (set by pool creator)",
        "Gas Fees": "Solana network fees (under $0.01)",
        "TNSR Discount": "Up to 50% fee reduction",
      }}
      security={[
        "Audited smart contracts for marketplace and AMM protocols",
        "Non-custodial architecture on Solana",
        "Backed by prominent Solana ecosystem investors",
        "Collection verification system for legitimate projects",
        "Real-time monitoring for suspicious trading patterns",
        "Hardware wallet support through Ledger integration",
      ]}
      features={[
        "Professional-grade Solana NFT trading interface",
        "Advanced order types: limits, collection bids, sweeps",
        "Compressed NFT (cNFT) trading support",
        "AMM pools for NFT liquidity provision",
        "Real-time analytics and portfolio tracking",
        "TNSR token rewards and fee discounts",
        "DeFi-style trading experience for NFTs",
        "Collection analytics with holder distribution data",
      ]}
      faqs={[
        {
          question: "Is Tensor better than Magic Eden for Solana NFTs?",
          answer:
            "Tensor is better for active traders who want advanced analytics, limit orders, and DeFi-style tools. Magic Eden is better for general browsing, new collection discovery, and its Launchpad. Many serious Solana NFT traders use both platforms for different purposes.",
        },
        {
          question: "What are compressed NFTs on Tensor?",
          answer:
            "Compressed NFTs use Solana's state compression technology to dramatically reduce minting costs by storing data in Merkle trees. Tensor fully supports trading cNFTs with the same features as regular NFTs. This technology is especially useful for gaming collections and large-scale distributions.",
        },
        {
          question: "How do I earn TNSR tokens?",
          answer:
            "You earn TNSR by actively trading on Tensor. Rewards are distributed based on trading volume and platform engagement, with consistent activity rewarded more than sporadic large trades. TNSR can also be used for fee discounts of up to 50% on marketplace transactions.",
        },
        {
          question: "Does Tensor support Ethereum NFTs?",
          answer:
            "No, Tensor is exclusively a Solana NFT platform. It does not support Ethereum, Bitcoin Ordinals, or any other blockchain. This Solana-only focus allows Tensor to provide the most optimized trading experience for Solana NFT traders.",
        },
      ]}
      relatedReviews={[
        { name: "Magic Eden", slug: "magic-eden" },
        { name: "Foundation", slug: "foundation" },
        { name: "X2Y2", slug: "x2y2" },
      ]}
      relatedGuides={[
        {
          title: "NFT Investing Guide",
          href: "/nfts/learn/nft-investing-guide",
        },
        {
          title: "How to Buy NFTs",
          href: "/nfts/learn/how-to-buy-nfts",
        },
      ]}
    />
  );
}
