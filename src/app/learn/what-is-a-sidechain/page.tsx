import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Sidechain? Blockchain Sidechains Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what sidechains are, how they differ from Layer 2 rollups, their security model, popular sidechain implementations, and when sidechains make sense.",
  keywords: ["sidechain", "blockchain sidechain", "Polygon PoS", "sidechain vs L2", "two-way peg", "blockchain scaling"],
};

export default function WhatIsASidechainPage() {
  return (
    <LearnPageLayout
      title="What Is a Sidechain?"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="7 min"
      intro="A sidechain is an independent blockchain that runs parallel to a main blockchain (like Ethereum or Bitcoin) and is connected to it through a two-way bridge. Unlike Layer 2 rollups that derive security from the main chain, sidechains have their own consensus mechanism and validator set, offering different trade-offs between security, cost, and performance."
      toc={[
        { id: "how-sidechains-work", title: "how-sidechains-work", level: 2 },
        { id: "how-sidechains-work", title: "How Sidechains Work", level: 2 },
        { id: "sidechain-vs-l2", title: "sidechain-vs-l2", level: 2 },
        { id: "sidechains-vs-layer-2", title: "Sidechains vs Layer 2", level: 2 },
        { id: "security-model", title: "security-model", level: 2 },
        { id: "security-model", title: "Security Model", level: 2 },
        { id: "popular-sidechains", title: "popular-sidechains", level: 2 },
        { id: "popular-sidechains", title: "Popular Sidechains", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "when-to-use-sidechains", title: "When to Use Sidechains", level: 2 }
      ]}
      faqs={[
        { question: "Is Polygon a sidechain?", answer: "Polygon PoS was originally a sidechain with its own validator set. It has been transitioning toward becoming a ZK-validium, which would derive more security from Ethereum. The distinction illustrates how the boundaries between sidechains and L2s are blurring as projects upgrade their security models." },
        { question: "Are sidechains secure?", answer: "Sidechains are only as secure as their own validator set and consensus mechanism. Unlike L2 rollups that inherit the main chain's security, a sidechain can be compromised if its validators collude. This makes the size and decentralization of the validator set a critical consideration." },
        { question: "How do assets move between chains?", answer: "Assets move between the main chain and sidechain through a two-way bridge. You lock assets on the main chain, and equivalent tokens are minted on the sidechain. To withdraw, you burn the sidechain tokens and unlock the original assets. This bridge is a critical security component." },
      ]}
      relatedArticles={[
        { title: "What Is Layer 2?", href: "/learn/what-is-layer-2", category: "Learn" },
        { title: "What Is a Bridge?", href: "/learn/what-is-a-bridge", category: "Learn" },
        { title: "What Is a Rollup?", href: "/learn/what-is-a-rollup", category: "Learn" },
        { title: "Polygon Ecosystem Guide", href: "/learn/polygon-ecosystem-guide", category: "Learn" },
      ]}
    >
      <section id="how-sidechains-work">
        <h2>How Sidechains Work</h2>
        <p>
          A sidechain operates as an independent blockchain with its own block production, consensus rules, and state. It connects to the main chain (parent chain) through a bridge that enables assets to move between the two networks. When a user wants to use the sidechain, they lock their assets on the main chain through the bridge smart contract, and corresponding tokens are minted on the sidechain. To return, the sidechain tokens are burned and the original assets are unlocked.
        </p>
        <p>
          The sidechain processes transactions using its own validator set, which can implement any consensus mechanism — Proof of Stake, Proof of Authority, or BFT variants. Because the sidechain has its own block space independent of the main chain, it can offer significantly lower transaction costs and higher throughput. Transactions on the sidechain are final according to its own consensus rules, without waiting for main chain confirmation.
        </p>
        <p>
          This independence is both the primary advantage and the primary risk of sidechains. They can optimize for specific use cases without being constrained by the main chain's limitations, but they also cannot rely on the main chain's security guarantees. If the sidechain's validators collude or the consensus mechanism fails, users' assets on the sidechain are at risk.
        </p>
      </section>

      <section id="sidechain-vs-l2">
        <h2>Sidechains vs Layer 2</h2>
        <p>
          The key distinction between sidechains and Layer 2 solutions is their security model. Layer 2 rollups inherit security from the main chain — even if all rollup operators go offline or act maliciously, users can always recover their funds through the main chain using fraud proofs (optimistic rollups) or validity proofs (ZK rollups). Sidechains have no such fallback; their security depends entirely on their own validator set.
        </p>
        <p>
          This creates different trade-off profiles. Sidechains typically offer lower costs and faster transactions because they are not constrained by the main chain's data availability requirements. L2 rollups offer stronger security guarantees but must pay for data posting to the main chain, which constitutes a significant portion of their operating costs. For applications where the security of the main chain is essential, L2s are preferred. For applications where cost and speed are prioritized and the sidechain's own security is sufficient, sidechains remain attractive.
        </p>
      </section>

      <section id="security-model">
        <h2>Security Model</h2>
        <p>
          Sidechain security depends on the size, diversity, and incentive alignment of its validator set. A sidechain with only a handful of validators controlled by a single entity offers minimal security beyond the operator's reputation. A sidechain with hundreds of independent, well-staked validators provides meaningful economic security, though still less than what rollups inherit from Ethereum's massive validator set.
        </p>
        <p>
          The bridge between the sidechain and main chain is often the weakest security link. Bridge exploits have resulted in some of the largest losses in crypto history, as bridges hold concentrated pools of locked assets that are attractive targets. The bridge's security depends on its design — multisig bridges are only as secure as their signers, while trustless bridges using cryptographic proofs offer stronger guarantees but are more complex to implement correctly.
        </p>
      </section>

      <section id="popular-sidechains">
        <h2>Popular Sidechains</h2>
        <p>
          Polygon PoS has been the most successful sidechain, achieving massive adoption through EVM compatibility, low fees, and aggressive ecosystem development. It processes millions of transactions daily and hosts thousands of applications. Gnosis Chain (formerly xDai) serves as a community-governed sidechain optimized for stable payments and decentralized applications. Ronin, built for the Axie Infinity gaming ecosystem, demonstrates how application-specific sidechains can optimize for particular use cases.
        </p>
        <p>
          In the Bitcoin ecosystem, Liquid Network by Blockstream is a federated sidechain enabling faster, more confidential Bitcoin transactions for traders and businesses. RSK (Rootstock) brings smart contract functionality to Bitcoin through a merge-mined sidechain. These Bitcoin sidechains extend Bitcoin's functionality without modifying Bitcoin's conservative base layer protocol, though they operate under different security assumptions than Bitcoin itself.
        </p>
      </section>

      <section id="use-cases">
        <h2>When to Use Sidechains</h2>
        <p>
          Sidechains make sense when applications need extreme cost efficiency and high throughput but can accept the trade-off of a separate security model. Gaming applications, social media platforms, and low-value payment systems often fit this profile — the cost of each transaction must be minimal for the application to function, and the amounts at risk per transaction are relatively small.
        </p>
        <p>
          Application-specific sidechains (app-chains) allow projects to customize the entire blockchain stack for their specific needs — adjusting block times, transaction formats, and consensus parameters to optimize performance. This approach is particularly popular in the Cosmos ecosystem, where the Cosmos SDK makes it relatively straightforward to launch custom chains connected through the IBC protocol. The choice between a sidechain, an L2 rollup, and remaining on the main chain depends on the specific security, cost, and performance requirements of each application.
        </p>
      </section>
    </LearnPageLayout>
  );
}
