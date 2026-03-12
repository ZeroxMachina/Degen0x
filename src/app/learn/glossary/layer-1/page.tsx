import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Layer 1? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what Layer 1 blockchains are, how they differ from Layer 2 solutions, and why they form the foundation of the crypto ecosystem.",
};

export default function Layer1Page() {
  return (
    <LearnPageLayout
      title="What Is Layer 1?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="Layer 1 (L1) refers to the base blockchain network itself — the foundational layer that processes and finalizes transactions without relying on any other network. Bitcoin, Ethereum, Solana, and Avalanche are all Layer 1 blockchains. L1s define the core rules for consensus, security, and data availability. They are the settlement layer upon which Layer 2 solutions and applications are built."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-layer-1", title: "What Is Layer 1?", level: 2 },
        { id: "examples", title: "examples", level: 2 },
        { id: "major-layer-1-blockchains", title: "Major Layer 1 Blockchains", level: 2 },
        { id: "l1-vs-l2", title: "l1-vs-l2", level: 2 },
        { id: "layer-1-vs-layer-2", title: "Layer 1 vs Layer 2", level: 2 },
        { id: "scalability-trilemma", title: "scalability-trilemma", level: 2 },
        { id: "the-scalability-trilemma", title: "The Scalability Trilemma", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-layer-1-matters", title: "Why Layer 1 Matters", level: 2 }
      ]}
      faqs={[
        {
          question: "Which Layer 1 is the best?",
          answer:
            "There is no single best L1. Each makes different trade-offs. Bitcoin prioritizes security and decentralization. Ethereum balances programmability with decentralization. Solana prioritizes speed and throughput. The best choice depends on your use case: store of value, DeFi, gaming, or other applications each have different requirements.",
        },
        {
          question: "Can Layer 1 blockchains scale on their own?",
          answer:
            "L1 scaling is limited by the blockchain trilemma — improving throughput typically requires sacrificing decentralization or security. Some L1s (like Solana) accept this trade-off. Ethereum's strategy is to scale via Layer 2 solutions while keeping L1 highly decentralized and secure. Sharding is another L1 scaling approach being explored.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Layer 2?", href: "/learn/glossary/layer-2", category: "Glossary" },
        { title: "What Is Blockchain?", href: "/learn/glossary/blockchain", category: "Glossary" },
        { title: "What Is Consensus?", href: "/learn/glossary/consensus", category: "Glossary" },
        { title: "What Is Sharding?", href: "/learn/glossary/sharding", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Layer 1?</h2>
      <p>
        Layer 1 is the base-level blockchain architecture that validates and finalizes transactions independently. It includes the consensus mechanism, networking protocol, and data structure that define how the blockchain operates. All transactions ultimately settle on Layer 1, making it the source of truth and the foundation of security for the entire ecosystem built on top of it.
      </p>

      <h2 id="examples">Major Layer 1 Blockchains</h2>
      <p>
        Bitcoin is the original L1, optimized for secure value transfer. Ethereum is the leading smart contract L1 with the largest developer and application ecosystem. Solana offers high throughput with lower fees. Avalanche provides sub-second finality. Cardano emphasizes peer-reviewed research. Each L1 has its own consensus mechanism, programming language, and design philosophy.
      </p>

      <h2 id="l1-vs-l2">Layer 1 vs Layer 2</h2>
      <p>
        Layer 1 processes transactions on the main chain, while Layer 2 solutions process transactions off-chain and periodically settle back to L1. L2s inherit L1 security while offering higher throughput and lower fees. Think of L1 as the highway and L2 as express lanes: they both get you to the same destination, but L2 reduces congestion on the main road.
      </p>

      <h2 id="scalability-trilemma">The Scalability Trilemma</h2>
      <p>
        Every L1 faces the blockchain trilemma: balancing security, decentralization, and scalability. Maximizing any two typically comes at the expense of the third. Bitcoin and Ethereum prioritize security and decentralization. High-throughput chains like Solana lean toward scalability and security with fewer validators. This fundamental trade-off drives the multi-chain and multi-layer architecture of the crypto ecosystem.
      </p>

      <h2 id="why-it-matters">Why Layer 1 Matters</h2>
      <p>
        Layer 1 blockchains are the foundation of the entire crypto ecosystem. They provide the security guarantees that all applications depend on. The properties of the L1 — its consensus mechanism, throughput, finality time, and decentralization — determine what can be built on top of it. Choosing which L1 to build on or invest in is one of the most consequential decisions in the crypto space.
      </p>
    </LearnPageLayout>
  );
}
