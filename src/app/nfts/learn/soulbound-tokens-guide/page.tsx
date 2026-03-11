import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Soulbound Tokens Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Soulbound tokens are non-transferable NFTs permanently bound to a wallet address, designed to represent identity...",
};

export default function SoulboundTokensGuidePage() {
  return (
    <LearnPageLayout
      title="Soulbound Tokens Guide"
      categoryName="NFTs"
      categorySlug="nfts"
      readTime="10 min"
      intro="Soulbound tokens are non-transferable NFTs permanently bound to a wallet address, designed to represent identity, credentials, achievements, and reputation in decentralized systems."
      toc={[
        { id: "section-1", title: "What Are Soulbound Tokens", level: 2 },
        { id: "section-2", title: "Technical Implementation", level: 2 },
        { id: "section-3", title: "Use Cases", level: 2 },
        { id: "section-4", title: "Challenges and Future", level: 2 },
      ]}
      faqs={[
        { question: "What are soulbound tokens?", answer: "Soulbound tokens (SBTs) are non-transferable NFTs that remain permanently bound to the wallet that received them. They represent credentials, achievements, affiliations, or identity attributes that should not be bought or sold." },
        { question: "How are soulbound tokens different from regular NFTs?", answer: "Regular NFTs can be freely transferred and traded. Soulbound tokens disable transfer functionality, ensuring the token stays with its original recipient. This makes them suitable for representing earned credentials rather than purchased assets." },
      ]}
      relatedArticles={[
        { title: "NFT Complete Guide", href: "/nfts/learn/nft-complete-guide", category: "NFTs" },
        { title: "Dynamic NFTs Guide", href: "/nfts/learn/dynamic-nfts-guide", category: "NFTs" },
        { title: "Best NFT Art Marketplaces", href: "/nfts/best/art", category: "NFTs" },
      ]}
    >
      <section id="section-1">
        <h2>What Are Soulbound Tokens</h2>
        <p>Soulbound tokens, a concept popularized by Ethereum co-founder Vitalik Buterin, are non-transferable digital tokens that represent commitments, credentials, and affiliations. The name draws from the gaming concept of soulbound items that cannot be traded once acquired. In the Web3 context, these tokens create a persistent, verifiable on-chain identity layer that reflects earned reputation rather than purchased status.</p>
        <p>The significance of soulbound tokens lies in their ability to represent aspects of identity that should not be commodified. Academic degrees, professional certifications, community participation records, and medical credentials are all examples where transferability would undermine the credential's meaning. By making these tokens non-transferable, soulbound tokens create a trustworthy on-chain reputation system.</p>
      </section>

      <section id="section-2">
        <h2>Technical Implementation</h2>
        <p>Soulbound tokens are implemented by modifying standard NFT contracts to disable transfer functions. The ERC-5192 standard formalizes the soulbound interface by adding a locked function that indicates whether a token is transferable. When locked, marketplace contracts cannot execute transfers and the token remains with its original recipient permanently or until specific conditions are met.</p>
        <p>Implementation approaches range from fully non-transferable tokens to conditionally transferable ones that can be unlocked under specific governance decisions. Some implementations allow the issuer to revoke tokens, which is important for credentials that can expire or be invalidated. The technical simplicity of disabling transfers belies the significant implications for creating trustworthy on-chain identity systems.</p>
      </section>

      <section id="section-3">
        <h2>Use Cases</h2>
        <p>Education and professional credentials represent a natural use case where soulbound tokens can verify qualifications without reliance on centralized databases. A university could issue soulbound degree tokens, employers could issue work history tokens, and professional organizations could issue certification tokens, all creating a portable, verifiable resume on-chain that follows the individual across platforms.</p>
        <p>DAO governance benefits from soulbound tokens through reputation-based voting that cannot be bought. Instead of token-weighted governance where wealthy participants dominate, soulbound reputation tokens earned through meaningful contribution enable more equitable decision-making. Event attendance tokens prove participation. Community membership tokens establish affiliation. The applications for non-transferable digital credentials continue to expand rapidly.</p>
      </section>

      <section id="section-4">
        <h2>Challenges and Future</h2>
        <p>Privacy is the primary challenge for soulbound tokens since they create publicly visible credential records tied to wallet addresses. Solutions include zero-knowledge proofs that verify credentials without revealing details, selective disclosure mechanisms, and privacy-preserving computation on encrypted token data. Balancing transparency with privacy is essential for widespread adoption.</p>
        <p>Recovery mechanisms present another challenge since lost wallet access means lost identity tokens. Social recovery, multi-signature backup, and institutional recovery options must be developed. Despite these challenges, soulbound tokens represent a foundational primitive for decentralized identity, reputation, and credentialing systems that could transform how trust and qualifications are verified in the digital economy.</p>
      </section>
    </LearnPageLayout>
  );
}
