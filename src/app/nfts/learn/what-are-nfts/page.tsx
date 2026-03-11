import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Are NFTs? Complete Guide to Non-Fungible Tokens (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn what NFTs are, how they work, and why they matter. This complete guide covers blockchain basics, use cases, how to get started, and the future of non-fungible tokens.",
};

export default function WhatAreNftsPage() {
  return (
    <LearnPageLayout
      title="What Are NFTs? Complete Guide to Non-Fungible Tokens"
      categoryName="NFTs"
      categorySlug="nfts"
      readTime="14 min"
      intro="Non-fungible tokens (NFTs) have transformed how we think about digital ownership, art, and collectibles. An NFT is a unique digital asset stored on a blockchain that proves ownership of a specific item, whether it is digital art, music, a video clip, or even virtual real estate. Unlike cryptocurrencies such as Bitcoin, where each unit is identical, every NFT is one of a kind. This guide explains how NFTs work, what makes them valuable, and how you can get started."
      toc={[
        { id: "nft-basics", title: "NFT Basics: What Makes Them Unique", level: 2 },
        { id: "how-nfts-work", title: "How NFTs Work on the Blockchain", level: 2 },
        { id: "types-of-nfts", title: "Types of NFTs", level: 2 },
        { id: "why-nfts-have-value", title: "Why NFTs Have Value", level: 2 },
        { id: "nft-use-cases", title: "Real-World NFT Use Cases", level: 2 },
        { id: "getting-started", title: "How to Get Started with NFTs", level: 2 },
        { id: "risks-and-challenges", title: "Risks and Challenges", level: 2 },
      ]}
      faqs={[
        {
          question: "Are NFTs a good investment?",
          answer:
            "NFTs can be profitable but are highly speculative. Most NFTs lose value over time, and the market is volatile. Only invest what you can afford to lose, do thorough research on the project and team, and avoid buying solely because of hype.",
        },
        {
          question: "Can I create my own NFT?",
          answer:
            "Yes, anyone can create an NFT. Platforms like OpenSea and Rarible allow you to mint NFTs for free using lazy minting. You upload your digital file, add metadata, and list it on the marketplace. No coding experience is required.",
        },
        {
          question: "What blockchain are NFTs on?",
          answer:
            "Ethereum is the most popular blockchain for NFTs, but NFTs also exist on Solana, Polygon, Bitcoin (via Ordinals), Tezos, and many other chains. Each blockchain has different costs, speeds, and community ecosystems.",
        },
        {
          question: "Can NFTs be copied or stolen?",
          answer:
            "While anyone can screenshot or download the image associated with an NFT, they cannot replicate the blockchain record of ownership. However, NFTs can be stolen through phishing attacks or compromised wallets. Always protect your private keys and use hardware wallets for valuable NFTs.",
        },
        {
          question: "What happens if the marketplace shuts down?",
          answer:
            "Your NFT still exists on the blockchain regardless of any marketplace. However, the media file (image, video) associated with the NFT may become inaccessible if it was stored on centralized servers. NFTs using decentralized storage like IPFS or Arweave are more resilient.",
        },
      ]}
      relatedArticles={[
        { title: "How to Buy NFTs", href: "/nfts/learn/how-to-buy-nfts", category: "NFTs" },
        { title: "NFT Marketplaces Explained", href: "/nfts/learn/nft-marketplaces-explained", category: "NFTs" },
        { title: "NFT Security Best Practices", href: "/nfts/learn/nft-security-tips", category: "NFTs" },
      ]}
    >
      <h2 id="nft-basics">NFT Basics: What Makes Them Unique</h2>
      <p>
        NFT stands for non-fungible token. Fungible means interchangeable, like dollar bills or Bitcoin, where
        one unit is identical to another. Non-fungible means unique and not interchangeable. Each NFT has a
        distinct identifier recorded on a blockchain, making it impossible to duplicate or substitute.
      </p>
      <p>
        Think of it like the difference between a generic concert ticket and a signed original painting.
        Concert tickets of the same class are interchangeable, but a specific painting by a specific artist
        is one of a kind. NFTs bring this concept of uniqueness to the digital world, where copying has
        traditionally been effortless.
      </p>

      <h2 id="how-nfts-work">How NFTs Work on the Blockchain</h2>
      <p>
        NFTs are created (minted) through smart contracts on a blockchain. The most common standard is
        ERC-721 on Ethereum, which defines how unique tokens are created, transferred, and tracked. When
        you mint an NFT, the smart contract assigns a unique token ID and records your wallet address as
        the owner. This record is permanent, public, and verifiable by anyone.
      </p>
      <p>
        The actual media file (image, video, or audio) is typically not stored on the blockchain itself
        due to cost and size constraints. Instead, the NFT contains a link to the file, which may be stored
        on IPFS (a decentralized file network), Arweave (permanent storage), or traditional cloud servers.
        The choice of storage significantly affects the long-term durability of the NFT.
      </p>
      <p>
        When an NFT is sold, the smart contract transfers ownership on-chain. The entire history of
        ownership, every sale price, and every transfer is permanently recorded. This provenance trail is
        one of the most powerful features of NFTs and is impossible to forge.
      </p>

      <h2 id="types-of-nfts">Types of NFTs</h2>
      <p>
        The NFT ecosystem encompasses far more than profile picture collections. Digital art NFTs range
        from generative art created by algorithms to hand-crafted pieces by established artists. Music NFTs
        allow artists to sell songs, albums, and concert experiences directly to fans. Gaming NFTs represent
        in-game items, characters, and virtual land that players truly own and can trade freely.
      </p>
      <p>
        Photography NFTs have created a new market for digital photographers. Domain name NFTs (like ENS
        and Unstoppable Domains) serve as human-readable blockchain addresses. Virtual real estate in
        metaverse platforms like Decentraland and The Sandbox allows owners to build experiences on digital
        land. Even event tickets and membership passes are being issued as NFTs, providing verifiable
        authenticity and enabling secondary markets.
      </p>

      <h2 id="why-nfts-have-value">Why NFTs Have Value</h2>
      <p>
        NFT value comes from several factors: scarcity, provenance, utility, community, and cultural
        significance. A limited supply combined with high demand drives prices up, just like physical
        collectibles. The verifiable history of ownership on-chain adds value, especially for art where
        provenance matters. Some NFTs provide utility like access to communities, events, or future
        airdrops, which creates ongoing value beyond the asset itself.
      </p>
      <p>
        Community is a major value driver. Projects like Bored Ape Yacht Club became valuable partly
        because of the exclusive community and brand that formed around them. Cultural significance also
        plays a role: historically important NFTs or those created by celebrated artists command premium
        prices. However, the vast majority of NFTs have little to no resale value, and speculative pricing
        can collapse rapidly.
      </p>

      <h2 id="nft-use-cases">Real-World NFT Use Cases</h2>
      <p>
        Beyond collectibles and art, NFTs are finding practical applications across industries. In supply
        chain management, NFTs can track the provenance of luxury goods, ensuring authenticity. In real
        estate, tokenized property deeds could streamline transactions and fractional ownership. The
        music industry uses NFTs to let artists sell directly to fans while retaining more revenue than
        traditional streaming models provide.
      </p>
      <p>
        Educational institutions are experimenting with NFT-based diplomas and certifications that are
        tamper-proof and instantly verifiable. Gaming studios are building economies where players own
        their items across multiple games. Sports organizations issue NFT tickets that double as
        collectible memorabilia. These practical applications suggest that NFT technology will persist
        even as speculative interest fluctuates.
      </p>

      <h2 id="getting-started">How to Get Started with NFTs</h2>
      <p>
        To begin exploring NFTs, you need a crypto wallet (MetaMask is the most popular for Ethereum
        NFTs), some cryptocurrency to pay for purchases and gas fees, and access to an NFT marketplace
        like OpenSea, Blur, or Magic Eden. Start by browsing collections that interest you, joining their
        Discord communities, and learning about the projects before making any purchases.
      </p>
      <p>
        If you want to start with minimal cost, explore NFTs on lower-fee blockchains like Polygon or
        Solana, where transaction costs are a fraction of Ethereum. Many platforms also offer free minting
        for creators, so you can experiment with creating your own NFTs without spending anything.
      </p>

      <h2 id="risks-and-challenges">Risks and Challenges</h2>
      <p>
        The NFT space carries significant risks. Market volatility means prices can drop dramatically, and
        many projects lose all value. Scams are prevalent, including rug pulls where project creators
        disappear with funds, phishing attacks targeting wallet credentials, and counterfeit collections
        impersonating popular projects. Smart contract vulnerabilities can also put assets at risk.
      </p>
      <p>
        Environmental concerns about blockchain energy consumption have decreased with Ethereum&apos;s
        transition to proof-of-stake, but remain a topic of discussion. Regulatory uncertainty is another
        challenge, as governments worldwide are still determining how NFTs should be classified and taxed.
        Always do your own research, never invest more than you can afford to lose, and prioritize
        security when interacting with the NFT ecosystem.
      </p>
    </LearnPageLayout>
  );
}
