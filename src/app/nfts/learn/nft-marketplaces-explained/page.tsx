import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `NFT Marketplaces Explained: How They Work & How to Choose (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Understand how NFT marketplaces work, the different types available, fee structures, and how to choose the right platform for buying, selling, or creating NFTs.",
};

export default function NftMarketplacesExplainedPage() {
  return (
    <LearnPageLayout
      title="NFT Marketplaces Explained"
      categoryName="NFTs"
      categorySlug="nfts"
      readTime="12 min"
      intro="NFT marketplaces are platforms where you can buy, sell, create, and discover non-fungible tokens. They range from general-purpose platforms like OpenSea to specialized venues like SuperRare for premium art or Tensor for Solana trading. Understanding how these marketplaces work, what fees they charge, and what features they offer is essential for making informed decisions as a collector, trader, or creator."
      toc={[
        { id: "how-marketplaces-work", title: "How NFT Marketplaces Work", level: 2 },
        { id: "types-of-marketplaces", title: "Types of NFT Marketplaces", level: 2 },
        { id: "fee-structures", title: "Understanding Fee Structures", level: 2 },
        { id: "key-features", title: "Key Features to Look For", level: 2 },
        { id: "choosing-marketplace", title: "How to Choose the Right Marketplace", level: 2 },
        { id: "multi-marketplace", title: "Using Multiple Marketplaces", level: 2 },
      ]}
      faqs={[
        {
          question: "What is the best NFT marketplace for beginners?",
          answer:
            "OpenSea is generally the best starting point for beginners. It has the most intuitive interface, supports multiple blockchains, and offers lazy minting for free NFT creation. Magic Eden is another excellent beginner-friendly option, especially for Solana NFTs.",
        },
        {
          question: "Do I need a different wallet for each marketplace?",
          answer:
            "Not necessarily. MetaMask works with most Ethereum-based marketplaces, and Phantom works with Solana marketplaces. However, if you trade across different blockchains, you will need compatible wallets for each chain. Some wallets like Coinbase Wallet support multiple chains.",
        },
        {
          question: "Are NFT marketplace fees negotiable?",
          answer:
            "Marketplace fees are fixed by the platform and cannot be negotiated. However, you can choose platforms with lower fees. Blur charges 0%, X2Y2 charges 0.5%, and Tensor offers reduced fees for TNSR token holders. Creator royalties may be optional on some platforms.",
        },
        {
          question: "Can I list my NFT on multiple marketplaces?",
          answer:
            "Yes, you can list the same NFT on multiple marketplaces simultaneously. When it sells on one platform, the listing is automatically invalidated on others. Many traders use aggregators like Blur or OpenSea Pro to view listings across multiple platforms.",
        },
        {
          question: "What happens if an NFT marketplace shuts down?",
          answer:
            "Your NFTs remain on the blockchain and in your wallet regardless of any marketplace. You can access and sell them through any compatible marketplace. However, any marketplace-specific features or stored metadata on centralized servers could be lost.",
        },
      ]}
      relatedArticles={[
        { title: "Best NFT Marketplaces", href: "/nfts/best", category: "NFTs" },
        { title: "How to Buy NFTs", href: "/nfts/learn/how-to-buy-nfts", category: "NFTs" },
        { title: "OpenSea vs Blur", href: "/nfts/compare/opensea-vs-blur", category: "NFTs" },
      ]}
    >
      <h2 id="how-marketplaces-work">How NFT Marketplaces Work</h2>
      <p>
        NFT marketplaces serve as intermediaries that connect buyers and sellers. When a seller lists an
        NFT, the marketplace creates an order that specifies the price, duration, and terms. The actual
        NFT remains in the seller&apos;s wallet until a buyer completes the purchase, at which point a
        smart contract executes the swap atomically, transferring the NFT to the buyer and the payment
        to the seller in a single transaction.
      </p>
      <p>
        Marketplaces index blockchain data to display collection pages, price histories, and ownership
        records. They provide search, filtering, and discovery tools that make navigating the vast NFT
        ecosystem manageable. Most also handle the technical complexity of smart contract interactions,
        presenting users with simple buy, sell, and offer interfaces.
      </p>

      <h2 id="types-of-marketplaces">Types of NFT Marketplaces</h2>
      <p>
        General marketplaces like OpenSea and Rarible list NFTs of all types across multiple blockchains.
        They offer the widest selection and highest liquidity for most collections. Professional trading
        platforms like Blur and Tensor prioritize speed, analytics, and low fees for active traders,
        often aggregating listings from other marketplaces as well.
      </p>
      <p>
        Art-focused marketplaces like SuperRare, Foundation, and KnownOrigin curate high-quality digital
        art with gallery-style presentation. These platforms attract serious art collectors and typically
        command higher prices. Chain-specific marketplaces like Magic Eden (Solana and Bitcoin Ordinals)
        specialize in particular blockchain ecosystems, offering optimized experiences for those communities.
      </p>

      <h2 id="fee-structures">Understanding Fee Structures</h2>
      <p>
        NFT marketplace fees fall into three categories: marketplace fees charged by the platform on each
        sale, creator royalties paid to the original creator on secondary sales, and blockchain gas fees
        paid to network validators. Marketplace fees range from 0% (Blur, Zora) to 5% (Foundation).
        Creator royalties typically range from 5% to 10% but enforcement varies by platform.
      </p>
      <p>
        Gas fees are not controlled by the marketplace and depend on the blockchain and network congestion.
        Ethereum gas fees can be substantial during peak times, while Solana and Polygon charge fractions
        of a cent per transaction. Some platforms absorb gas costs for certain actions or offer gasless
        features like lazy minting to reduce the barrier to entry for creators.
      </p>

      <h2 id="key-features">Key Features to Look For</h2>
      <p>
        Important features include supported blockchains, collection verification systems, trading tools
        (auctions, offers, bundles), creator tools (minting, royalty settings), analytics (price history,
        volume, rarity data), and security measures (stolen item detection, verified badges). Mobile app
        availability matters if you want to trade on the go.
      </p>
      <p>
        For traders, sweep tools, real-time floor tracking, and portfolio analytics are essential. For
        creators, look for free or low-cost minting, customizable collection pages, and strong royalty
        enforcement. For casual collectors, prioritize ease of use, clear collection pages, and good
        search functionality.
      </p>

      <h2 id="choosing-marketplace">How to Choose the Right Marketplace</h2>
      <p>
        Your choice should align with your primary activity. If you are buying your first NFTs, start
        with OpenSea for its simplicity and breadth. If you are an active trader seeking the best
        execution and lowest fees, Blur on Ethereum or Tensor on Solana are top choices. If you are a
        creator, evaluate each platform&apos;s minting tools, audience, and royalty policies.
      </p>
      <p>
        The blockchain you prefer also narrows your options. Ethereum collectors have the most marketplace
        choices. Solana users gravitate toward Magic Eden and Tensor. Bitcoin Ordinals traders use Magic
        Eden or specialized Ordinals platforms. Consider starting with one marketplace and expanding as
        you become more comfortable with the ecosystem.
      </p>

      <h2 id="multi-marketplace">Using Multiple Marketplaces</h2>
      <p>
        Experienced NFT users often use multiple marketplaces simultaneously. Aggregator platforms like
        Blur and OpenSea Pro pull listings from several marketplaces into a single interface, letting you
        find the best price regardless of where the NFT is listed. This is particularly useful for
        ensuring you get the best deal on popular collections.
      </p>
      <p>
        As a seller, listing on multiple platforms maximizes your exposure. Since NFTs live in your wallet
        rather than on any specific marketplace, there is no lock-in. Cross-listing is a common strategy
        for both individual sellers and large collection projects seeking to reach the widest possible
        audience.
      </p>
    </LearnPageLayout>
  );
}
