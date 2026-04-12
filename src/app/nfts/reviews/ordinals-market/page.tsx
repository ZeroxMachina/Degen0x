import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Ordinals Market Review ${CURRENT_YEAR}: Fees, Features, Pros & Cons`,
  description: "In-depth Ordinals Market review covering Bitcoin inscription trading, BRC-20 tokens, fees, features, and whether it is the right platform for Bitcoin NFTs.",
  alternates: { canonical: "/nfts/reviews/ordinals-market" }};

export default function OrdinalsMarketReview() {
  return (
    <ReviewPage
      product={{
        name: "Ordinals Market",
        slug: "ordinals-market",
        rating: 3.8,
        description: "Ordinals Market is a dedicated marketplace for Bitcoin Ordinals inscriptions, offering trading, collection browsing, and analytics specifically designed for the Bitcoin NFT ecosystem.",
        pros: ["Dedicated focus on Bitcoin Ordinals and inscriptions", "Specialized tooling for BRC-20 and Runes tokens", "Deep Bitcoin NFT collection analytics", "Growing liquidity for Bitcoin-native digital assets", "No platform fees on some transaction types"],
        cons: ["Smaller user base than multi-chain marketplaces like Magic Eden", "Bitcoin transaction fees can be high during congestion", "Limited features compared to Ethereum NFT marketplaces", "UI complexity due to Bitcoin UTXO management"],
        bestFor: "Bitcoin Ordinals collectors and BRC-20 traders",
        affiliateUrl: "#",
        category: "nfts",
      }}
      categoryName="NFT Marketplaces"
      categorySlug="nfts"
      overview="Ordinals Market emerged as a specialized marketplace for Bitcoin Ordinals inscriptions during the inscription boom that began in early 2023. Unlike general-purpose NFT marketplaces that added Bitcoin support as an afterthought, Ordinals Market was built from the ground up for the unique characteristics of Bitcoin-native digital assets. The platform supports inscription trading, BRC-20 token exchange, and Runes protocol assets, providing a focused experience for Bitcoin NFT participants.

The marketplace addresses the technical complexities unique to Bitcoin NFTs. Unlike Ethereum NFTs that use smart contracts, Bitcoin inscriptions are embedded directly in transaction data, requiring different handling for listings, transfers, and trades. Ordinals Market abstracts much of this complexity while maintaining compatibility with popular Bitcoin wallets like Xverse, Leather, and UniSat.

As the Bitcoin NFT ecosystem matures, Ordinals Market competes with Magic Eden, which has captured significant market share in the Bitcoin inscription space. The marketplace differentiates through deeper Bitcoin-specific analytics, community focus, and specialized tools designed exclusively for the Ordinals ecosystem rather than treating Bitcoin as one of many supported chains."
      sections={[
        { id: "inscription-trading", title: "Inscription Trading Experience", content: "Trading inscriptions on Ordinals Market follows a familiar marketplace pattern adapted for Bitcoin's UTXO model. Sellers list their inscriptions at a set price, and buyers can purchase directly or place collection offers. The platform handles the PSBT (Partially Signed Bitcoin Transaction) flow required for trustless Bitcoin NFT trades, where the seller signs their half of the transaction and the buyer completes it. Collection pages display floor prices, volume, holder counts, and listing activity. The search and discovery features help users find trending collections, rare inscriptions, and underpriced listings across the Bitcoin NFT ecosystem." },
        { id: "brc20-runes", title: "BRC-20 and Runes Support", content: "Beyond standard inscriptions, Ordinals Market supports BRC-20 fungible token trading and the newer Runes protocol. BRC-20 tokens brought fungible token capabilities to Bitcoin through the Ordinals protocol, creating a new category of Bitcoin-native tokens. Runes, introduced with the Bitcoin halving, offer a more efficient alternative for fungible tokens on Bitcoin. The marketplace provides trading interfaces, price charts, and liquidity for both token standards, positioning itself as a comprehensive Bitcoin token exchange alongside its NFT marketplace functionality." },
        { id: "wallet-integration", title: "Wallet Integration and Security", content: "Ordinals Market integrates with the major Bitcoin Ordinals wallets including Xverse, Leather (formerly Hiro), and UniSat. The non-custodial trading model ensures users maintain control of their inscriptions until a trade executes. The platform uses PSBT-based trading, which is the Bitcoin-native equivalent of smart contract escrow, providing trustless exchange without requiring users to deposit assets into platform custody. Wallet connection is straightforward, though users must ensure their wallet properly segregates inscription UTXOs from spending UTXOs to avoid accidentally destroying inscriptions during regular Bitcoin transactions." },
        { id: "analytics-tools", title: "Analytics and Discovery Tools", content: "The platform provides Bitcoin-specific analytics including inscription rarity rankings, minting activity tracking, and collection performance metrics. Users can view on-chain data about inscription creation dates, content types, and holder distribution. These analytics tools help collectors make informed decisions about which inscriptions to acquire and when to sell. The discovery interface highlights trending collections, recent large sales, and emerging artists in the Bitcoin NFT space, providing a curated entry point for newcomers to the Ordinals ecosystem." },
      ]}
      fees={{ "Trading Fee": "Variable (check current rates)", "Listing Fee": "Free", "Bitcoin Network Fee": "Varies with network congestion", "BRC-20 Trading": "Variable per trade" }}
      security={["Non-custodial PSBT-based trading", "Compatible with hardware wallets via supported software", "No asset custody by the platform", "Inscription verification and authenticity checking", "UTXO segregation guidance for inscription safety"]}
      features={["Bitcoin Ordinals inscription marketplace", "BRC-20 and Runes token trading", "Collection analytics and rarity tools", "Multi-wallet support (Xverse, Leather, UniSat)", "Collection offers and bulk trading", "Inscription content browsing and discovery"]}
      faqs={[
        { question: "What are Bitcoin Ordinals?", answer: "Bitcoin Ordinals are a protocol that assigns serial numbers to individual satoshis, enabling data to be inscribed (attached) to specific satoshis. This creates Bitcoin-native NFTs without requiring smart contracts or sidechains." },
        { question: "How do I start buying Ordinals?", answer: "Install a compatible Bitcoin wallet like Xverse or UniSat, fund it with Bitcoin, connect to Ordinals Market, and browse available inscriptions. Ensure your wallet supports Ordinals to properly display and manage your inscriptions." },
        { question: "Are Ordinals Market fees competitive?", answer: "Ordinals Market fees are competitive with other Bitcoin NFT marketplaces. The primary cost consideration is Bitcoin network fees, which can be significant during periods of high network congestion." },
      ]}
      relatedReviews={[
        { name: "Magic Eden", slug: "magic-eden" },
        { name: "Tensor", slug: "tensor" },
      ]}
      relatedGuides={[
        { title: "Ordinals and Inscriptions Guide", href: "/nfts/learn/ordinals-inscriptions-guide" },
        { title: "How NFTs Work", href: "/nfts/learn/how-nfts-work" },
      ]}
    />
  );
}
