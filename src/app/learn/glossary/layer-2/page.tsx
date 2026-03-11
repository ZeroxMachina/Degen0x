import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Layer 2? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what Layer 2 scaling solutions are, how they work, and why they are critical for blockchain scalability.",
};

export default function Layer2Page() {
  return (
    <LearnPageLayout
      title="What Is Layer 2?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="6 min"
      intro="Layer 2 (L2) refers to a secondary protocol built on top of a Layer 1 blockchain to improve its scalability and efficiency. L2 solutions process transactions off the main chain while inheriting the security of the underlying L1. They significantly reduce fees and increase throughput, making blockchain technology practical for everyday use. Rollups (optimistic and zero-knowledge) are the dominant L2 technology for Ethereum."
      toc={[
        { id: "definition", title: "What Is Layer 2?", level: 2 },
        { id: "how-it-works", title: "How Layer 2 Works", level: 2 },
        { id: "types", title: "Types of Layer 2 Solutions", level: 2 },
        { id: "examples", title: "Major Layer 2 Networks", level: 2 },
        { id: "why-it-matters", title: "Why Layer 2 Matters", level: 2 },
      ]}
      faqs={[
        {
          question: "Is Layer 2 as secure as Layer 1?",
          answer:
            "Well-designed L2s inherit the security of their underlying L1. Optimistic rollups assume transactions are valid and allow a challenge period for fraud proofs. ZK-rollups use mathematical proofs to verify correctness. Both settle back to L1, meaning your assets are ultimately secured by the base chain. However, L2s do introduce additional trust assumptions around sequencers and provers.",
        },
        {
          question: "How do I move assets to a Layer 2?",
          answer:
            "You use a bridge to transfer assets from L1 to L2. Most L2s have official bridges that lock your assets on L1 and mint equivalents on L2. Moving from L2 back to L1 (withdrawing) can take minutes (ZK-rollups) to days (optimistic rollups). Third-party bridges offer faster withdrawals but introduce additional trust assumptions.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Layer 1?", href: "/learn/glossary/layer-1", category: "Glossary" },
        { title: "What Is Gas?", href: "/learn/glossary/gas", category: "Glossary" },
        { title: "What Is a Bridge?", href: "/learn/glossary/bridge", category: "Glossary" },
        { title: "What Is Sharding?", href: "/learn/glossary/sharding", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Layer 2?</h2>
      <p>
        Layer 2 is a collective term for solutions designed to scale a blockchain by handling transactions off the main chain (Layer 1) while still leveraging L1 for security and finality. L2s batch many transactions together and submit compressed proofs or data to L1, spreading the cost of L1 settlement across many users. This approach can reduce fees by 10-100x while maintaining security guarantees.
      </p>

      <h2 id="how-it-works">How Layer 2 Works</h2>
      <p>
        L2 solutions execute transactions on their own faster and cheaper environment. Periodically, they compress the transaction data or proofs and post them to the L1 blockchain. This settlement step anchors the L2 state to the L1&apos;s security. Users interact with the L2 using the same wallets and tools they use for L1, but enjoy dramatically lower fees and faster confirmation times.
      </p>

      <h2 id="types">Types of Layer 2 Solutions</h2>
      <p>
        Optimistic rollups (Arbitrum, Optimism, Base) assume transactions are valid and include a dispute period where anyone can submit a fraud proof if they detect an invalid transaction. ZK-rollups (zkSync, StarkNet, Scroll) use zero-knowledge proofs to mathematically verify every batch of transactions, offering stronger security guarantees and faster finality. State channels and Plasma are earlier L2 designs with more limited applicability.
      </p>

      <h2 id="examples">Major Layer 2 Networks</h2>
      <p>
        Arbitrum is currently the largest Ethereum L2 by total value locked. Base (built by Coinbase) has grown rapidly through consumer-friendly applications. Optimism powers the OP Stack used by multiple L2s. zkSync and StarkNet lead the ZK-rollup space. The Lightning Network is Bitcoin&apos;s primary L2, enabling fast and cheap Bitcoin payments through payment channels.
      </p>

      <h2 id="why-it-matters">Why Layer 2 Matters</h2>
      <p>
        Layer 2 solutions are essential for blockchain to reach mainstream scale. Ethereum&apos;s roadmap is explicitly centered on L2 scaling, with the base chain optimized for security and data availability. Without L2s, high gas fees price out most users and use cases. L2s make DeFi, gaming, social, and micropayment applications practical by bringing costs down to fractions of a cent per transaction.
      </p>
    </LearnPageLayout>
  );
}
