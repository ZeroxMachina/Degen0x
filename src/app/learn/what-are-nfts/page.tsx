import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Are NFTs? Non-Fungible Tokens Explained (${CURRENT_YEAR})`,
  description:
    "Understand NFTs (Non-Fungible Tokens): what they are, how they work, use cases in art, gaming, and identity, and what the future holds for digital ownership.",
};

export default function WhatAreNftsPage() {
  return (
    <LearnPageLayout
      title="What Are NFTs? Non-Fungible Tokens Explained"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="12 min"
      intro="Non-Fungible Tokens (NFTs) are unique digital assets stored on a blockchain that represent ownership of a specific item — whether that is a piece of art, a collectible, a gaming item, a domain name, or even a real-world asset like property. Unlike cryptocurrencies such as Bitcoin or ETH, which are fungible (each unit is interchangeable), every NFT is one-of-a-kind and cannot be replicated. This guide explains how NFTs work, their real-world use cases, and what makes them significant."
      toc={[
        { id: "what-are-nfts", title: "Understanding NFTs", level: 2 },
        { id: "how-nfts-work", title: "How NFTs Work", level: 2 },
        { id: "use-cases", title: "NFT Use Cases", level: 2 },
        { id: "buying-selling", title: "Buying and Selling NFTs", level: 2 },
        { id: "risks-considerations", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What does 'non-fungible' mean?",
          answer:
            "Fungible means interchangeable — one dollar bill is worth the same as another dollar bill. Non-fungible means unique and not interchangeable. Just as the Mona Lisa is unique and not interchangeable with any other painting, an NFT represents a unique digital item that cannot be swapped one-for-one with another NFT.",
        },
        {
          question: "Why would someone pay for an NFT if I can just screenshot it?",
          answer:
            "Screenshotting an image does not give you ownership of the NFT any more than photographing the Mona Lisa gives you ownership of the painting. The blockchain provides a verifiable, tamper-proof record of who owns the original asset. Ownership may confer rights, access, community membership, or bragging rights that a screenshot cannot provide.",
        },
        {
          question: "Are NFTs bad for the environment?",
          answer:
            "NFTs minted on proof-of-stake blockchains (like Ethereum since the Merge) have a negligible environmental footprint. The energy concerns were primarily associated with proof-of-work systems. Most NFT activity today occurs on energy-efficient networks.",
        },
        {
          question: "Can NFTs be used for more than just art?",
          answer:
            "Absolutely. NFTs are used for gaming items, event tickets, music royalties, domain names, identity credentials, real estate deeds, academic certificates, and much more. Any asset that benefits from verifiable uniqueness, provenance tracking, or programmable ownership can be represented as an NFT.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Ethereum?", href: "/learn/what-is-ethereum", category: "Learn Crypto" },
        { title: "What Is Web3?", href: "/learn/what-is-web3", category: "Learn Crypto" },
        { title: "What Is Blockchain?", href: "/learn/what-is-blockchain", category: "Learn Crypto" },
        { title: "Crypto Security Guide", href: "/learn/crypto-security-guide", category: "Learn Crypto" },
        { title: "Best Crypto Wallets", href: "/wallets/best", category: "Wallets" },
      ]}
    >
      <h2 id="what-are-nfts">Understanding NFTs</h2>
      <p>
        An NFT is a cryptographic token on a blockchain that represents something unique. While a Bitcoin is identical to any other Bitcoin (making it fungible), each NFT has a distinct identifier that differentiates it from every other token. This uniqueness is enforced by the blockchain, which maintains an immutable record of each NFT&apos;s creation, ownership history, and associated metadata.
      </p>
      <p>
        The most common NFT standards are ERC-721 (each token is completely unique) and ERC-1155 (allows both unique and semi-fungible tokens within a single contract) on Ethereum. Other blockchains like Solana, Polygon, and Tezos have their own NFT standards. The token itself typically contains a reference (URI) to the asset&apos;s metadata, which may include an image, description, attributes, and other properties.
      </p>
      <p>
        What makes NFTs powerful is not just uniqueness but programmability. Smart contract logic can encode royalty payments (ensuring creators earn a percentage every time their NFT is resold), access controls (granting token holders entry to exclusive content or events), and composability (allowing NFTs to interact with DeFi protocols, games, and other applications).
      </p>

      <h2 id="how-nfts-work">How NFTs Work</h2>
      <p>
        Creating an NFT (often called &quot;minting&quot;) involves deploying or interacting with a smart contract on a blockchain. The minting process assigns a unique token ID, records the creator&apos;s address, and stores a link to the asset&apos;s metadata. The metadata — which includes the image, name, description, and properties — is typically stored on decentralized storage networks like IPFS or Arweave to ensure it remains accessible even if a central server goes offline.
      </p>
      <p>
        Ownership of an NFT is determined by the blockchain. Your wallet address is recorded as the owner in the smart contract&apos;s storage. To transfer an NFT, you sign a transaction that updates this ownership record. Marketplaces facilitate buying and selling by matching buyers with sellers and handling the simultaneous exchange of payment for the NFT in a single atomic transaction.
      </p>
      <p>
        Smart contract royalties allow creators to receive a percentage of every secondary sale. While marketplace enforcement of royalties has been inconsistent, newer standards and protocols are developing on-chain enforcement mechanisms. This creates a fundamentally new economic model where creators can earn ongoing revenue from their work, unlike traditional art markets where the artist only profits from the initial sale.
      </p>

      <h2 id="use-cases">NFT Use Cases</h2>
      <p>
        Digital art was the first major NFT use case and remains one of the most visible. Artists can sell their work directly to collectors without galleries or auction houses taking large commissions. Provenance (the history of ownership) is permanently recorded on the blockchain, solving a longstanding problem in the art world. Collections like CryptoPunks and Art Blocks have established digital art as a recognized category among collectors.
      </p>
      <p>
        Gaming is another major frontier. NFTs enable players to truly own their in-game items — weapons, skins, characters, land — and trade or sell them on open markets. Unlike traditional games where items exist only within the game&apos;s server, NFT-based items persist on the blockchain and can potentially be used across multiple games or platforms. Games like Axie Infinity and Gods Unchained demonstrated the potential of play-to-earn models.
      </p>
      <p>
        Beyond art and gaming, NFTs are being used for event ticketing (preventing counterfeiting and enabling secondary markets), music (allowing artists to sell directly to fans with embedded royalties), identity and credentials (tamper-proof diplomas and certifications), domain names (decentralized naming systems like ENS), and real-world asset tokenization (representing physical goods, property titles, or financial instruments as blockchain tokens).
      </p>

      <h2 id="buying-selling">Buying and Selling NFTs</h2>
      <p>
        To buy an NFT, you need a Web3 wallet funded with the native cryptocurrency of the blockchain where the NFT exists (typically ETH for Ethereum-based NFTs). Connect your wallet to an NFT marketplace like OpenSea, Blur, or Magic Eden. You can browse collections, view rarity attributes, check price history, and make offers or purchase at the listed price.
      </p>
      <p>
        When evaluating an NFT purchase, consider the collection&apos;s creator reputation, community size and engagement, trading volume and floor price trends, the utility or access rights the NFT grants, and whether the metadata is stored on decentralized infrastructure (IPFS/Arweave) rather than centralized servers that could go offline.
      </p>
      <p>
        Selling an NFT typically involves listing it on a marketplace at a fixed price or as an auction. You will pay a gas fee for any on-chain actions (listing, accepting offers, transferring). Some marketplaces use off-chain order books to reduce gas costs. Be aware of marketplace fees (typically 1-5%) and any creator royalties that will be deducted from the sale price.
      </p>

      <h2 id="risks-considerations">Risks and Considerations</h2>
      <p>
        The NFT market is highly speculative. Many NFT collections lose the majority of their value after initial hype fades. The vast majority of NFTs minted during the 2021-2022 boom have experienced significant price declines. Treat any NFT purchase as a high-risk investment and never spend more than you can afford to lose.
      </p>
      <p>
        Scams are prevalent in the NFT space. Fake collections impersonating popular projects, phishing sites that drain wallets, and rug pulls (where creators abandon a project after collecting funds) are common. Always verify collection addresses through official channels, never click suspicious links, and use hardware wallets for valuable holdings. Be especially cautious of unsolicited offers, airdrops from unknown sources, and projects promising guaranteed returns.
      </p>
      <p>
        Legal and intellectual property considerations are still evolving. Owning an NFT does not necessarily grant you copyright or commercial rights to the underlying art — those rights depend on the specific terms set by the creator. The regulatory status of NFTs varies by jurisdiction, and some NFTs may be classified as securities. Research the legal framework in your jurisdiction before significant investments.
      </p>
    </LearnPageLayout>
  );
}
