import { Metadata } from "next";
import { nftMarketplaces } from "@/data/nfts";
import ReviewPage from "@/components/ReviewPage";

const product = nftMarketplaces.find((m) => m.slug === "blur")!;

export const metadata: Metadata = {
  title: "Blur Review 2026: Fees, Features, Pros & Cons",
  description:
    "Our in-depth Blur review covers zero fees, trading tools, BLUR token rewards, pros and cons, and whether it's the right NFT marketplace for you. Updated March 2026.",
};

export default function BlurReview() {
  return (
    <ReviewPage
      product={product}
      categoryName="NFT Marketplaces"
      categorySlug="nfts"
      overview="Blur launched in October 2022 and rapidly disrupted the NFT marketplace landscape by targeting professional traders with zero marketplace fees, real-time floor tracking, and advanced portfolio analytics. Within months of launch, Blur surpassed OpenSea in Ethereum NFT trading volume, fundamentally shifting the competitive dynamics of the market. The platform was created by Pacman (pseudonymous founder) and backed by Paradigm, one of the most prominent crypto venture firms.

Blur's core value proposition is speed and cost efficiency. The platform is designed for traders who execute multiple transactions daily and need real-time data to make informed decisions. Unlike OpenSea's broad marketplace approach, Blur focuses exclusively on Ethereum and strips away visual frills in favor of data-dense interfaces, instant listings, and sweep tools that let traders buy multiple NFTs from a collection floor in a single transaction.

Beyond trading, Blur introduced Blend, an NFT lending protocol that allows users to borrow ETH against their NFT holdings or offer loans to other collectors. This was a significant innovation that brought DeFi-style liquidity to NFT portfolios. The BLUR governance token incentivizes trading activity and has created a loyalty-driven ecosystem where active traders earn rewards proportional to their marketplace engagement."
      sections={[
        {
          id: "user-experience",
          title: "User Experience",
          content:
            "Blur's interface is purpose-built for traders rather than casual browsers. The main dashboard displays collections ranked by volume, floor price changes, and listing activity. Each collection page shows a real-time order book-style view with bids, asks, and recent sales. The trait-based filtering is powerful, allowing traders to quickly identify underpriced items based on rarity. The portfolio view provides comprehensive analytics on holdings, including unrealized gains/losses and floor price exposure. While incredibly functional for experienced traders, the interface can be intimidating for newcomers who expect a more visual, gallery-style browsing experience.",
        },
        {
          id: "trading-tools",
          title: "Trading Tools",
          content:
            "Blur's trading tools are the most advanced of any NFT marketplace. Sweep functionality allows buying multiple floor-priced items in a single transaction, essential for traders building positions in collections. Collection bids can be placed at specific price points, and the bidding pool system enables capital-efficient bidding across multiple collections simultaneously. Real-time notifications alert traders to listing events, price changes, and bid activity. The platform also aggregates listings from other marketplaces (OpenSea, X2Y2, LooksRare), ensuring traders always see the best available prices across the ecosystem.",
        },
        {
          id: "blend-lending",
          title: "Blend Lending Protocol",
          content:
            "Blend is Blur's integrated NFT lending protocol that enables peer-to-peer borrowing against NFT collateral. Borrowers can access ETH liquidity without selling their NFTs, while lenders earn yield by providing loans secured by blue-chip collections. The protocol uses a unique perpetual lending structure with no fixed expiration dates, giving borrowers flexibility. Interest rates are determined by market supply and demand rather than fixed terms. Blend has processed billions in loan volume, particularly for high-value collections like CryptoPunks and Bored Ape Yacht Club. The system is integrated directly into the trading interface, making it seamless to borrow or lend.",
        },
        {
          id: "blur-token",
          title: "BLUR Token & Rewards",
          content:
            "The BLUR token is the governance token of the Blur ecosystem, distributed to active traders through seasonal airdrop campaigns. Token rewards are calculated based on trading volume, bid activity, and loyalty (listing exclusively or primarily on Blur). The token can be used for governance voting on protocol proposals and future developments. BLUR incentives have been a key driver of Blur's volume growth, though they have also attracted short-term mercenary capital. The sustainability of trading rewards beyond initial distribution phases remains an important consideration for the platform's long-term competitiveness.",
        },
        {
          id: "analytics",
          title: "Analytics & Data",
          content:
            "Blur provides institutional-grade analytics that rival dedicated NFT data platforms. Collection pages display comprehensive metrics including volume trends, holder distribution, listed supply percentage, and sales velocity. Individual item pages show detailed trait rarity scores, last sale prices, and estimated values based on trait floor prices. The portfolio analytics dashboard tracks performance across all holdings with real-time profit and loss calculations. Historical data is readily accessible for trend analysis. These analytics tools are a major differentiator, giving traders the data infrastructure typically found only on paid analytics platforms.",
        },
      ]}
      fees={{
        "Marketplace Fee": "0% (zero fees)",
        "Creator Royalties": "Optional (minimum 0.5% if enabled)",
        "Listing Fee": "Free",
        "Buyer Fee": "None",
        "Gas Fees": "Ethereum network gas fees apply",
        "Blend Lending": "Variable interest rates",
      }}
      security={[
        "Smart contract audits for marketplace and Blend lending protocol",
        "Non-custodial architecture where users maintain wallet control at all times",
        "Backed by Paradigm, providing institutional credibility",
        "Escrow-free trading through direct wallet-to-wallet settlements",
        "Collection verification system to flag counterfeit listings",
        "Real-time monitoring for suspicious trading activity",
      ]}
      features={[
        "Zero marketplace fees on all trades",
        "Real-time floor tracking and portfolio analytics",
        "Sweep tools for buying multiple floor items in one transaction",
        "Blend lending protocol for NFT-backed loans",
        "Cross-marketplace aggregation (OpenSea, X2Y2, LooksRare)",
        "Collection bids and trait-specific bidding",
        "BLUR token rewards for active traders",
        "Institutional-grade analytics and data tools",
      ]}
      faqs={[
        {
          question: "Is Blur really free to use?",
          answer:
            "Yes, Blur charges 0% marketplace fees on all trades. Sellers keep the full sale price minus any optional creator royalties and Ethereum gas fees. This makes Blur the cheapest Ethereum NFT marketplace for active traders.",
        },
        {
          question: "How does Blur make money with zero fees?",
          answer:
            "Blur's business model centers on the BLUR token ecosystem and its Blend lending protocol. Revenue comes from lending protocol fees and the value appreciation of the BLUR token. The zero-fee model is designed to attract maximum trading volume and build market dominance.",
        },
        {
          question: "Is Blur good for beginners?",
          answer:
            "Blur is not ideal for beginners. The platform is designed for professional traders and features a data-heavy interface that can be overwhelming for newcomers. Beginners are better served by OpenSea, which offers a more intuitive browsing and buying experience.",
        },
        {
          question: "Does Blur support chains other than Ethereum?",
          answer:
            "No, Blur currently only supports Ethereum. If you want to trade NFTs on Solana, Polygon, or other chains, you will need to use multi-chain platforms like OpenSea or chain-specific marketplaces like Magic Eden.",
        },
        {
          question: "What is Blur's Blend protocol?",
          answer:
            "Blend is Blur's built-in NFT lending protocol. It allows NFT holders to borrow ETH using their NFTs as collateral, and lenders to earn yield by providing loans. Loans are perpetual with no fixed expiration and rates are set by market supply and demand.",
        },
      ]}
      relatedReviews={[
        { name: "OpenSea", slug: "opensea" },
        { name: "LooksRare", slug: "looksrare" },
        { name: "X2Y2", slug: "x2y2" },
      ]}
      relatedGuides={[
        { title: "NFT Investing Guide", href: "/nfts/learn/nft-investing-guide" },
        { title: "Best NFT Marketplaces", href: "/nfts/best" },
      ]}
    />
  );
}
