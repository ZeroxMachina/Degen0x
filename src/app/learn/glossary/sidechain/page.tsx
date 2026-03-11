import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Sidechain: What It Means in Crypto (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn what a sidechain means in cryptocurrency. Understand how sidechains extend blockchain functionality with their own consensus while bridging to the main chain.",
  keywords: ["sidechain", "blockchain sidechain", "Layer 2 sidechain", "Polygon sidechain"],
};

export default function SidechainGlossaryPage() {
  return (
    <LearnPageLayout
      title="Sidechain: What It Means in Crypto"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="6 min"
      intro="A sidechain is an independent blockchain that runs parallel to a main chain (parent chain) and is connected to it through a two-way bridge. Sidechains have their own consensus mechanisms and can process transactions independently, offering increased scalability and flexibility."
      toc={[
        { id: "definition", title: "Definition", level: 2 },
        { id: "how-it-works", title: "How It Works", level: 2 },
        { id: "examples", title: "Examples & Use Cases", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
      ]}
      faqs={[
        {
          question: "What is the difference between a sidechain and a Layer 2?",
          answer:
            "A sidechain has its own independent consensus mechanism and security model, meaning it does not inherit security from the parent chain. A true Layer 2 like a rollup relies on the parent chain for security by posting transaction data or proofs back to it. Sidechains trade some security guarantees for greater flexibility and independence.",
        },
        {
          question: "Are sidechains safe to use?",
          answer:
            "Sidechains have their own security models separate from the main chain. Their safety depends on the strength of their own validator set and consensus mechanism. While generally safe for everyday use, they do not inherit the full security of the parent chain, so very high-value transactions may be better suited for the main chain or a true Layer 2.",
        },
      ]}
      relatedArticles={[
        { title: "Rollup", href: "/learn/glossary/rollup", category: "Glossary" },
        { title: "Relay Chain", href: "/learn/glossary/relay-chain", category: "Glossary" },
        { title: "How Bridges Work", href: "/learn/how-bridges-work", category: "Learn" },
      ]}
    >
      <section id="definition">
        <h2>Definition</h2>
        <p>
          A sidechain is a separate blockchain that operates independently but is connected to a main blockchain (often called the parent chain or mainnet) through a two-way peg or bridge mechanism. Unlike Layer 2 solutions that derive their security from the main chain, sidechains have their own set of validators, their own consensus rules, and their own block production schedule. The two-way bridge allows assets to be transferred between the main chain and the sidechain, enabling users to move tokens from one chain to the other and back. This architecture allows sidechains to implement different features, parameters, or consensus mechanisms that would be difficult or impossible to implement on the main chain. Sidechains can process transactions faster and cheaper than the parent chain while still maintaining a connection that allows assets to flow freely between them.
        </p>
      </section>
      <section id="how-it-works">
        <h2>How It Works</h2>
        <p>
          When a user wants to move assets from a main chain to a sidechain, they send their tokens to a special bridge contract on the main chain. These tokens are locked in the contract, and an equivalent amount of tokens are minted or released on the sidechain. The user can then transact freely on the sidechain with lower fees and faster confirmations. When they want to move back, the process reverses: sidechain tokens are burned, and the original tokens on the main chain are unlocked. The bridge between chains is typically managed by a set of bridge validators or a multisignature arrangement that verifies transactions on both sides. The sidechain runs its own consensus mechanism, which could be Proof of Stake, Proof of Authority, or any other algorithm suited to its specific use case. Block times, gas limits, and other parameters can be customized independently from the main chain, allowing the sidechain to optimize for its particular requirements.
        </p>
      </section>
      <section id="examples">
        <h2>Examples & Use Cases</h2>
        <p>
          Polygon PoS (formerly Matic) is one of the most well-known sidechains, operating as a Proof of Stake sidechain connected to Ethereum. It offers significantly lower transaction fees and faster block times while maintaining compatibility with Ethereum smart contracts. Gnosis Chain (formerly xDai) is another sidechain that focuses on stable transactions and community governance. Ronin, the sidechain built specifically for Axie Infinity, demonstrates how sidechains can be customized for specific applications like gaming where high throughput and low cost are essential. Rootstock (RSK) serves as a sidechain to Bitcoin, bringing smart contract functionality to the Bitcoin ecosystem. Liquid Network is a Bitcoin sidechain designed for fast, confidential transfers between exchanges and traders. These examples show how sidechains serve different niches from DeFi and gaming to cross-exchange settlements and privacy-focused transactions.
        </p>
      </section>
      <section id="why-it-matters">
        <h2>Why It Matters</h2>
        <p>
          Sidechains play a crucial role in the blockchain ecosystem by providing a practical solution for scalability and specialization without requiring changes to the main chain protocol. They allow experimentation with new features, consensus mechanisms, and governance models in a live environment without risking the stability of the parent chain. For users, sidechains offer immediate benefits in the form of lower transaction costs and faster processing times, making blockchain technology accessible for everyday applications. For developers, sidechains provide a familiar environment with tools compatible with the parent chain while offering the freedom to customize parameters for their specific needs. While sidechains do introduce additional trust assumptions around bridge security and independent consensus, they remain an important part of the multi-chain ecosystem. Understanding the tradeoffs between sidechains, rollups, and other scaling solutions helps users and developers choose the right infrastructure for their specific requirements and risk tolerance.
        </p>
      </section>
    </LearnPageLayout>
  );
}
