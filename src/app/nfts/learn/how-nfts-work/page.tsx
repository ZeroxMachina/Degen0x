import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How NFTs Work: Technical Deep Dive (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Understanding the technical foundations of NFTs provides critical context for collectors, creators, and investors...",
};

export default function HowNftsWorkPage() {
  return (
    <LearnPageLayout
      title="How NFTs Work: Technical Deep Dive"
      categoryName="NFTs"
      categorySlug="nfts"
      readTime="10 min"
      intro="Understanding the technical foundations of NFTs provides critical context for collectors, creators, and investors. From blockchain mechanics to metadata standards and smart contract interactions, this guide explains the technology powering the NFT ecosystem."
      toc={[
        { id: "section-1", title: "Blockchain Foundations", level: 2 },
        { id: "section-2", title: "Token Standards and Smart Contracts", level: 2 },
        { id: "section-3", title: "Metadata and Storage", level: 2 },
        { id: "section-4", title: "Marketplace Mechanics", level: 2 },
      ]}
      faqs={[
        { question: "What should beginners know about how NFTs work?", answer: "Start by understanding the basics covered in this guide. Focus on fundamental concepts before exploring advanced strategies. The space evolves quickly, so staying informed through community engagement and continued learning is essential." },
        { question: "How does this relate to the broader ecosystem?", answer: "How NFTs Work: Technical Deep Dive is an important component of the ecosystem that connects to market dynamics, economics, and participant strategies. Understanding this topic provides valuable context for effective navigation." },
      ]}
      relatedArticles={[
        { title: "NFT Complete Guide", href: "/nfts/learn/nft-complete-guide", category: "NFTs" },
        { title: "NFT Smart Contracts Explained", href: "/nfts/learn/nft-smart-contracts", category: "NFTs" },
        { title: "Best NFT Art Marketplaces", href: "/nfts/best/art", category: "NFTs" },
      ]}
    >
      <section id="section-1">
        <h2>Blockchain Foundations</h2>
        <p>NFTs exist as entries on distributed ledgers maintained by blockchain networks. Each NFT is a unique token stored in a smart contract, with ownership recorded immutably on the blockchain. When you purchase an NFT, the transaction updates the ownership record in the contract state, and this change is verified by the network consensus mechanism and recorded permanently.</p>
        <p>The blockchain provides several guarantees critical for digital ownership: immutability ensures ownership records cannot be altered, transparency allows anyone to verify ownership history, and decentralization means no single entity controls the registry. These properties create digital scarcity and verifiable provenance that were impossible before blockchain technology.</p>
      </section>

      <section id="section-2">
        <h2>Token Standards and Smart Contracts</h2>
        <p>NFT smart contracts implement standardized interfaces that define how tokens are created, transferred, and queried. ERC-721 is the original NFT standard on Ethereum, creating individually unique tokens with distinct identifiers. ERC-1155 enables both fungible and non-fungible tokens within a single contract, offering gas efficiency for collections. Understanding these standards helps evaluate the technical quality of NFT projects.</p>
        <p>Smart contracts can include additional functionality beyond basic ownership tracking. Royalty enforcement through ERC-2981 ensures creators receive secondary sale fees. Access control mechanisms gate content or experiences to token holders. Programmable metadata enables dynamic NFTs that change based on conditions. The sophistication of the underlying contract significantly impacts an NFT's functionality and long-term value.</p>
      </section>

      <section id="section-3">
        <h2>Metadata and Storage</h2>
        <p>NFT metadata contains the descriptive information about a token including its name, description, image URL, and attributes. This metadata is typically stored off-chain due to the cost of on-chain storage. The token contract contains a URI pointing to the metadata location. Where this metadata is stored, whether on IPFS, Arweave, or centralized servers, determines the permanence and reliability of the NFT content.</p>
        <p>On-chain NFTs store all data directly on the blockchain, providing maximum durability but at higher cost and with size limitations. IPFS provides content-addressed storage where data persists as long as at least one node hosts it. Arweave offers permanent storage through economic incentives. Understanding storage choices helps collectors evaluate whether their NFT content will persist long-term.</p>
      </section>

      <section id="section-4">
        <h2>Marketplace Mechanics</h2>
        <p>NFT marketplaces facilitate listing, discovery, and trading of tokens. Listings can use fixed prices, English auctions, or Dutch auctions. Most marketplaces use off-chain order books with on-chain settlement, where sellers sign listing messages and buyers execute purchases through marketplace smart contracts that handle the atomic swap of tokens for payment.</p>
        <p>Understanding marketplace mechanics helps users optimize their trading experience. Gas costs vary by marketplace contract efficiency. Royalty enforcement differs across platforms. Collection offers, trait-based bidding, and aggregator tools provide advanced trading capabilities. Familiarity with these mechanics enables more effective buying and selling strategies across the NFT ecosystem.</p>
      </section>
    </LearnPageLayout>
  );
}
