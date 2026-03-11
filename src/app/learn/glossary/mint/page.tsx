import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Minting? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what minting means in crypto, how it applies to tokens and NFTs, and the mechanics of creating new digital assets on-chain.",
};

export default function MintPage() {
  return (
    <LearnPageLayout
      title="What Is Minting?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="Minting is the process of creating new tokens or NFTs on a blockchain. When you mint an NFT, a new unique token is generated and recorded on-chain. When a protocol mints tokens, new supply is created according to the protocol's rules. Minting is the opposite of burning (destroying tokens). The term borrows from the concept of minting physical coins and represents the creation of new digital assets."
      toc={[
        { id: "definition", title: "What Is Minting?", level: 2 },
        { id: "nft-minting", title: "NFT Minting", level: 2 },
        { id: "token-minting", title: "Token Minting", level: 2 },
        { id: "minting-mechanics", title: "Minting Mechanics", level: 2 },
        { id: "why-it-matters", title: "Why Minting Matters", level: 2 },
      ]}
      faqs={[
        {
          question: "Does minting an NFT cost money?",
          answer:
            "Yes. Minting requires a blockchain transaction, which costs gas fees. On Ethereum mainnet, minting can cost anywhere from a few dollars to hundreds during peak congestion. Layer 2 solutions and alternative chains like Solana or Polygon offer much cheaper minting. Some platforms offer 'lazy minting' where the NFT is minted only when first purchased.",
        },
        {
          question: "Is minting the same as buying?",
          answer:
            "Not exactly. Minting creates a brand new token that did not exist before, typically during an initial launch. Buying is acquiring an already-existing token on a secondary market. Minting is the primary market event; buying and selling happen on the secondary market afterward. Mint prices are often set by the creator, while secondary prices are set by supply and demand.",
        },
      ]}
      relatedArticles={[
        { title: "What Is an NFT?", href: "/learn/glossary/nft", category: "Glossary" },
        { title: "What Is Burn?", href: "/learn/glossary/burn", category: "Glossary" },
        { title: "What Is ERC-721?", href: "/learn/glossary/erc-721", category: "Glossary" },
        { title: "What Is Gas?", href: "/learn/glossary/gas", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Minting?</h2>
      <p>
        Minting is the act of creating a new digital asset on a blockchain. The term applies broadly: miners &quot;mint&quot; new Bitcoin through mining, protocols &quot;mint&quot; governance tokens for distribution, and creators &quot;mint&quot; NFTs by deploying unique tokens. In all cases, minting results in a new token that is recorded on the blockchain and assigned to an owner address.
      </p>

      <h2 id="nft-minting">NFT Minting</h2>
      <p>
        NFT minting is the process of creating a unique non-fungible token on a blockchain. A creator uploads their artwork or media, associates it with metadata, and calls the mint function on an NFT smart contract. The contract generates a new token with a unique ID, stores the metadata reference, and assigns ownership to the minter. Popular NFT collections open minting to the public, often causing gas wars as buyers rush to secure tokens.
      </p>

      <h2 id="token-minting">Token Minting</h2>
      <p>
        Fungible token minting increases the total supply of a cryptocurrency. In proof-of-work chains, new tokens are minted as block rewards for miners. In proof-of-stake chains, new tokens are minted as staking rewards for validators. DeFi protocols may mint tokens as liquidity incentives. Stablecoins like USDC are minted when users deposit fiat currency and burned when they redeem.
      </p>

      <h2 id="minting-mechanics">Minting Mechanics</h2>
      <p>
        On a technical level, minting calls a function on a smart contract that creates new tokens and updates the contract&apos;s state. For ERC-20 tokens, the totalSupply increases and the new tokens are assigned to an address. For ERC-721 NFTs, a new tokenId is created with associated metadata. The minting transaction is permanently recorded on the blockchain, establishing provenance from the moment of creation.
      </p>

      <h2 id="why-it-matters">Why Minting Matters</h2>
      <p>
        Minting is the genesis event for every digital asset on a blockchain. It determines initial distribution, sets the starting supply, and establishes on-chain provenance. For NFTs, the mint is often the most exciting and profitable moment. For tokens, minting policies (fixed supply, inflationary, or dynamic) fundamentally shape the asset&apos;s economic properties and long-term value trajectory.
      </p>
    </LearnPageLayout>
  );
}
