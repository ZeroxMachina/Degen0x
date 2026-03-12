import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Relay Chain: What It Means in Crypto (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn what a relay chain means in cryptocurrency. Understand how relay chains enable cross-chain communication and secure multi-chain ecosystems like Polkadot.",
  keywords: ["relay chain", "Polkadot relay chain", "cross-chain", "parachain"],
};

export default function RelayChainGlossaryPage() {
  return (
    <LearnPageLayout
      title="Relay Chain: What It Means in Crypto"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="6 min"
      intro="A relay chain is the central chain in a multi-chain architecture that provides shared security, consensus, and cross-chain communication for connected blockchains. Most notably used in the Polkadot ecosystem, the relay chain coordinates the entire network of parachains."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "definition", title: "Definition", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-it-works", title: "How It Works", level: 2 },
        { id: "examples", title: "examples", level: 2 },
        { id: "examples-use-cases", title: "Examples & Use Cases", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 }
      ]}
      faqs={[
        {
          question: "What is the difference between a relay chain and a Layer 1?",
          answer:
            "A relay chain is specifically designed to coordinate multiple connected chains (parachains) rather than hosting smart contracts or applications directly. While a Layer 1 like Ethereum processes transactions and runs applications itself, a relay chain focuses on providing shared security and interoperability for its connected chains.",
        },
        {
          question: "Can you run smart contracts on the Polkadot relay chain?",
          answer:
            "The Polkadot relay chain does not support smart contracts directly. Instead, smart contract functionality is handled by specialized parachains that connect to the relay chain. This design keeps the relay chain lightweight and focused on its core coordination role.",
        },
      ]}
      relatedArticles={[
        { title: "Sidechain", href: "/learn/glossary/sidechain", category: "Glossary" },
        { title: "Sharding", href: "/learn/glossary/sharding", category: "Glossary" },
        { title: "How Cross-Chain Works", href: "/learn/how-cross-chain-works", category: "Learn" },
      ]}
    >
      <section id="definition">
        <h2>Definition</h2>
        <p>
          A relay chain is the backbone of a multi-chain blockchain architecture. It serves as the central hub that connects and coordinates multiple independent blockchains, often called parachains or shards. The relay chain is responsible for the network's shared security model, consensus mechanism, and cross-chain message passing. Rather than processing complex smart contracts or application logic itself, the relay chain focuses exclusively on validating blocks from connected chains, facilitating communication between them, and ensuring the overall security of the ecosystem. This architectural design allows individual chains to specialize in different use cases while benefiting from the collective security of the entire network. The concept was popularized by Polkadot, which uses a relay chain to connect up to 100 parachains simultaneously.
        </p>
      </section>
      <section id="how-it-works">
        <h2>How It Works</h2>
        <p>
          The relay chain operates through a sophisticated system of validators, nominators, and collators. Validators on the relay chain are responsible for verifying the blocks produced by connected parachains and adding them to the relay chain itself. Collators on each parachain collect transactions, produce block candidates, and submit them to relay chain validators for verification. The relay chain uses a nominated Proof of Stake consensus mechanism where validators stake tokens to participate and nominators back validators they trust. Cross-chain messages are routed through the relay chain using a protocol called XCMP (Cross-Chain Message Passing), which allows parachains to send tokens and data to each other securely. The relay chain also handles parachain slot auctions, where projects bid for the right to connect to the relay chain for a fixed period, typically two years. This shared security model means that new chains do not need to bootstrap their own validator sets from scratch.
        </p>
      </section>
      <section id="examples">
        <h2>Examples & Use Cases</h2>
        <p>
          The most prominent relay chain is the Polkadot Relay Chain, which connects specialized parachains like Acala for DeFi, Moonbeam for Ethereum compatibility, and Astar for multi-chain smart contracts. Kusama serves as Polkadot's canary network with its own relay chain for testing new features before they deploy to Polkadot. In the Polkadot ecosystem, the relay chain enables a DeFi application on one parachain to interact with an identity system on another parachain seamlessly. For example, a user could take out a loan on Acala using assets bridged from a different parachain, with the relay chain ensuring the cross-chain messages are delivered correctly and securely. This architecture allows each parachain to optimize for its specific use case while still being able to interact with the broader ecosystem through the central relay chain.
        </p>
      </section>
      <section id="why-it-matters">
        <h2>Why It Matters</h2>
        <p>
          Relay chains represent one of the most important architectural innovations in blockchain scalability and interoperability. By separating the consensus and security layer from the application layer, relay chains allow the blockchain ecosystem to scale horizontally rather than forcing all activity onto a single chain. This design addresses the blockchain trilemma by allowing specialized chains to optimize for speed or functionality while relying on the relay chain for security. For developers, building on a parachain connected to a relay chain means inheriting robust security from day one without needing to recruit thousands of validators. For users, relay chains enable seamless cross-chain experiences where assets and data can move freely between different specialized chains. As the crypto ecosystem matures and the need for interoperability grows, relay chain architectures are becoming increasingly important for enabling a truly interconnected multi-chain future.
        </p>
      </section>
    </LearnPageLayout>
  );
}
