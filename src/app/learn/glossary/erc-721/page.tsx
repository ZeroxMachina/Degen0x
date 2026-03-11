import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is ERC-721? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what ERC-721 is, how non-fungible tokens work, and why this standard revolutionized digital ownership on Ethereum.",
};

export default function Erc721Page() {
  return (
    <LearnPageLayout
      title="What Is ERC-721?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="ERC-721 is the Ethereum token standard for non-fungible tokens (NFTs). Unlike ERC-20 tokens where each unit is identical, every ERC-721 token has a unique identifier, making it suitable for representing one-of-a-kind digital assets like artwork, collectibles, domain names, and in-game items. This standard enabled the entire NFT ecosystem."
      toc={[
        { id: "definition", title: "What Is ERC-721?", level: 2 },
        { id: "how-it-works", title: "How ERC-721 Works", level: 2 },
        { id: "vs-erc20", title: "ERC-721 vs ERC-20", level: 2 },
        { id: "use-cases", title: "Use Cases", level: 2 },
        { id: "ecosystem-impact", title: "Ecosystem Impact", level: 2 },
      ]}
      faqs={[
        {
          question: "What makes ERC-721 tokens non-fungible?",
          answer:
            "Each ERC-721 token has a unique tokenId that distinguishes it from every other token in the contract. This means no two ERC-721 tokens are interchangeable. One CryptoPunk is not equivalent to another because each has different attributes and a unique identity on the blockchain.",
        },
        {
          question: "Where is the actual NFT image stored?",
          answer:
            "The ERC-721 contract stores a tokenURI that points to the metadata and media. The actual image or file is typically stored off-chain on IPFS, Arweave, or sometimes centralized servers. The blockchain only stores ownership records and the reference link, not the media file itself.",
        },
      ]}
      relatedArticles={[
        { title: "What Is an NFT?", href: "/learn/glossary/nft", category: "Glossary" },
        { title: "What Is ERC-20?", href: "/learn/glossary/erc-20", category: "Glossary" },
        { title: "What Is a Smart Contract?", href: "/learn/glossary/smart-contract", category: "Glossary" },
        { title: "What Is Floor Price?", href: "/learn/glossary/floor-price", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is ERC-721?</h2>
      <p>
        ERC-721 is an Ethereum token standard proposed in January 2018 that defines the interface for non-fungible tokens. The standard was inspired by CryptoKitties, one of the first NFT projects that demonstrated demand for unique digital assets. ERC-721 provides a minimal interface for tracking and transferring individual tokens with distinct identities.
      </p>

      <h2 id="how-it-works">How ERC-721 Works</h2>
      <p>
        An ERC-721 contract maintains a mapping from unique token IDs to owner addresses. Key functions include ownerOf (returns who owns a specific token), transferFrom (moves a token between addresses), and approve (grants permission to transfer a specific token). Each token also has a tokenURI function that returns a link to its metadata, which typically includes the name, description, and image URL.
      </p>

      <h2 id="vs-erc20">ERC-721 vs ERC-20</h2>
      <p>
        The fundamental difference is fungibility. ERC-20 tokens are interchangeable like dollar bills; one USDC equals any other USDC. ERC-721 tokens are unique like original paintings; each has distinct properties. ERC-20 tracks balances per address, while ERC-721 tracks ownership per individual token. This makes ERC-721 ideal for representing unique assets but less efficient for bulk transfers.
      </p>

      <h2 id="use-cases">Use Cases</h2>
      <p>
        ERC-721 powers digital art collections, profile picture projects, virtual real estate in metaverse platforms, gaming items, event tickets, domain names (ENS), and membership passes. The standard has also been explored for real-world asset tokenization, including property deeds and certificates of authenticity for physical goods.
      </p>

      <h2 id="ecosystem-impact">Ecosystem Impact</h2>
      <p>
        ERC-721 catalyzed an entirely new digital economy. Marketplaces like OpenSea, creator royalty systems, and NFT-gated communities all emerged from this standard. Later standards like ERC-1155 (which supports both fungible and non-fungible tokens in a single contract) built on the foundation laid by ERC-721, but the original standard remains widely used.
      </p>
    </LearnPageLayout>
  );
}
