import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is an NFT? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what non-fungible tokens are, how they work, and their applications in art, gaming, and digital ownership.",
};

export default function NftPage() {
  return (
    <LearnPageLayout
      title="What Is an NFT?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="6 min"
      intro="An NFT (Non-Fungible Token) is a unique digital asset verified on a blockchain that represents ownership of a specific item — digital art, music, video, in-game items, virtual real estate, or other digital and physical assets. Unlike fungible tokens where each unit is identical, every NFT has unique properties and cannot be exchanged one-for-one with another. NFTs enable verifiable digital ownership and provenance."
      toc={[
        { id: "definition", title: "What Is an NFT?", level: 2 },
        { id: "how-it-works", title: "How NFTs Work", level: 2 },
        { id: "use-cases", title: "Use Cases", level: 2 },
        { id: "market-history", title: "Market History", level: 2 },
        { id: "why-it-matters", title: "Why NFTs Matter", level: 2 },
      ]}
      faqs={[
        {
          question: "Can I just screenshot an NFT?",
          answer:
            "You can screenshot the image, but you do not own the NFT. The NFT is the blockchain record of ownership, not the image itself. It is like photographing a painting in a museum — you have a copy of the image but not the original artwork. The blockchain-verified ownership is what has value, not the visual representation alone.",
        },
        {
          question: "Are NFTs a good investment?",
          answer:
            "NFTs are highly speculative. Some early buyers of projects like CryptoPunks saw enormous returns, but the vast majority of NFTs have lost significant value since the 2021-2022 peak. Most NFTs have little or no secondary market demand. Treat NFTs as collectibles or cultural artifacts rather than financial investments, and only spend what you can afford to lose.",
        },
      ]}
      relatedArticles={[
        { title: "What Is ERC-721?", href: "/learn/glossary/erc-721", category: "Glossary" },
        { title: "What Is Floor Price?", href: "/learn/glossary/floor-price", category: "Glossary" },
        { title: "What Is Minting?", href: "/learn/glossary/mint", category: "Glossary" },
        { title: "What Is a Smart Contract?", href: "/learn/glossary/smart-contract", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is an NFT?</h2>
      <p>
        An NFT is a cryptographic token on a blockchain that represents a unique, non-interchangeable asset. &quot;Non-fungible&quot; means it cannot be exchanged equally for another — each NFT has a distinct identity and properties. Unlike Bitcoin or ETH, where every unit is identical and interchangeable (fungible), each NFT is one of a kind, identified by a unique token ID and metadata stored in a smart contract.
      </p>

      <h2 id="how-it-works">How NFTs Work</h2>
      <p>
        NFTs are created (minted) on a blockchain through smart contracts, most commonly using the ERC-721 or ERC-1155 standards on Ethereum. The smart contract records the token ID, owner address, and a link to the metadata (typically stored on IPFS or Arweave). Ownership is tracked on-chain and can be transferred through sales or gifts. Marketplaces like OpenSea and Blur facilitate discovery, trading, and auctions.
      </p>

      <h2 id="use-cases">Use Cases</h2>
      <p>
        Digital art and collectibles are the most visible NFT use case, with projects like CryptoPunks and Bored Ape Yacht Club becoming cultural phenomena. Gaming NFTs represent in-game items that players truly own. Music NFTs give fans direct access to artists. NFT tickets provide verifiable event access. Domain names (ENS), membership passes, and real-world asset tokenization expand the scope beyond digital media.
      </p>

      <h2 id="market-history">Market History</h2>
      <p>
        CryptoKitties launched in 2017 and introduced NFTs to a broader audience. The market exploded in 2021, with NFT sales reaching billions of dollars monthly. High-profile sales and celebrity endorsements fueled mainstream attention. The market cooled significantly in 2022-2023, with trading volumes declining over 90% from peaks. The industry has since shifted focus from speculation toward utility and long-term cultural value.
      </p>

      <h2 id="why-it-matters">Why NFTs Matter</h2>
      <p>
        NFTs solve the fundamental problem of digital ownership. Before NFTs, digital files could be infinitely copied with no way to verify the &quot;original.&quot; NFTs create verifiable scarcity and provenance for digital assets. Whether the current market reflects their long-term value is debated, but the underlying technology of blockchain-verified digital ownership has applications far beyond profile pictures and speculative trading.
      </p>
    </LearnPageLayout>
  );
}
