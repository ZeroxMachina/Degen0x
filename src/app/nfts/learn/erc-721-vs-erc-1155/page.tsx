import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `ERC-721 vs ERC-1155: NFT Token Standards Compared (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "ERC-721 and ERC-1155 are the two primary NFT token standards on Ethereum. Each has distinct advantages for different use cases...",
};

export default function Erc721VsErc1155LearnPage() {
  return (
    <LearnPageLayout
      title="ERC-721 vs ERC-1155: NFT Token Standards Compared"
      categoryName="NFTs"
      categorySlug="nfts"
      readTime="10 min"
      intro="ERC-721 and ERC-1155 are the two primary NFT token standards on Ethereum. Each has distinct advantages for different use cases, from unique art pieces to gaming items and semi-fungible tokens."
      toc={[
        { id: "section-1", title: "Overview and Fundamentals", level: 2 },
        { id: "section-2", title: "Key Concepts and Mechanics", level: 2 },
        { id: "section-3", title: "Practical Applications", level: 2 },
        { id: "section-4", title: "Best Practices and Tips", level: 2 },
      ]}
      faqs={[
        { question: "What should beginners know about ERC-721 vs ERC-1155?", answer: "Start by understanding the basics covered in this guide. ERC-721 creates individually unique tokens ideal for one-of-one art, while ERC-1155 supports both fungible and non-fungible tokens in a single contract, offering gas savings for collections and gaming items." },
        { question: "Which standard should I use for my NFT project?", answer: "Choose ERC-721 for unique artworks and collections where each item is distinct. Choose ERC-1155 for gaming items, editions, or projects needing both fungible and non-fungible tokens. ERC-1155 is more gas-efficient for batch operations." },
      ]}
      relatedArticles={[
        { title: "NFT Complete Guide", href: "/nfts/learn/nft-complete-guide", category: "NFTs" },
        { title: "NFT Smart Contracts Explained", href: "/nfts/learn/nft-smart-contracts", category: "NFTs" },
        { title: "Best NFT Art Marketplaces", href: "/nfts/best/art", category: "NFTs" },
      ]}
    >
      <section id="section-1">
        <h2>Overview and Fundamentals</h2>
        <p>ERC-721 was the first NFT standard on Ethereum, introduced in 2018 to define a standard interface for non-fungible tokens. Each ERC-721 token has a unique identifier within its contract, making every token distinct. ERC-1155, introduced later, supports multiple token types within a single contract including both fungible and non-fungible tokens, offering greater flexibility and gas efficiency for complex use cases.</p>
        <p>The choice between these standards fundamentally affects gas costs, marketplace compatibility, and functionality. ERC-721 is universally supported and conceptually simpler, while ERC-1155 provides advanced features at the cost of slightly more complexity. Understanding the trade-offs between these standards is essential for creators choosing the technical foundation for their NFT projects.</p>
      </section>

      <section id="section-2">
        <h2>Key Concepts and Mechanics</h2>
        <p>ERC-721 assigns each token a unique tokenId and maps it to an owner address. Transfer functions move individual tokens between addresses. The standard includes approval mechanisms allowing marketplaces to transfer tokens on behalf of owners. Metadata is accessed through a tokenURI function that returns a URL pointing to the token's descriptive information and artwork.</p>
        <p>ERC-1155 uses a token ID system where each ID can represent a unique item or a class of fungible items with a supply. Batch transfer functions allow moving multiple tokens in a single transaction, dramatically reducing gas costs. The standard supports semi-fungible tokens that start as fungible but become non-fungible when redeemed, which is particularly useful for event tickets and gaming items.</p>
      </section>

      <section id="section-3">
        <h2>Practical Applications</h2>
        <p>ERC-721 dominates the art and profile picture NFT categories where each token represents a unique, distinct item. Collections like CryptoPunks and Bored Apes use ERC-721 because each piece is one-of-one. Marketplace infrastructure, rarity tools, and collection analytics are built primarily around the ERC-721 standard, providing the richest ecosystem support for unique digital assets.</p>
        <p>ERC-1155 excels in gaming, where a single contract can manage diverse item types from unique legendary weapons to stacks of common resources. Editions and multi-copy artworks also benefit from ERC-1155, where an artist might mint 100 copies of a piece as a semi-fungible token. The batch operation support makes ERC-1155 ideal for airdrops, game item distributions, and any scenario requiring multiple simultaneous transfers.</p>
      </section>

      <section id="section-4">
        <h2>Best Practices and Tips</h2>
        <p>When choosing between standards, consider your project's specific needs rather than defaulting to one standard. For unique art collections with individual pricing and rarity, ERC-721 provides the best ecosystem support. For gaming projects, multi-edition releases, or projects requiring both fungible and non-fungible tokens, ERC-1155 offers superior gas efficiency and flexibility in a single contract deployment.</p>
        <p>Regardless of standard chosen, follow security best practices including using audited libraries like OpenZeppelin, thorough testing on testnets, and professional audits for contracts handling significant value. Both standards are mature and well-supported, so the choice should be driven by use case requirements rather than perceived superiority of one standard over the other.</p>
      </section>
    </LearnPageLayout>
  );
}
