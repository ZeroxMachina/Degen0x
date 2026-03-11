import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Rollup: What It Means in Crypto (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn what a rollup means in cryptocurrency. Understand how rollups bundle transactions off-chain and post data to Layer 1 for scalability and lower fees.",
  keywords: ["rollup", "layer 2 rollup", "optimistic rollup", "zk rollup", "blockchain scaling"],
};

export default function RollupGlossaryPage() {
  return (
    <LearnPageLayout
      title="Rollup: What It Means in Crypto"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="6 min"
      intro="A rollup is a Layer 2 scaling solution that executes transactions off-chain, bundles them together, and posts compressed data back to the main blockchain. Rollups dramatically increase throughput and reduce fees while inheriting the security of the underlying Layer 1."
      toc={[
        { id: "definition", title: "Definition", level: 2 },
        { id: "how-it-works", title: "How It Works", level: 2 },
        { id: "examples", title: "Examples & Use Cases", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
      ]}
      faqs={[
        {
          question: "What is the difference between optimistic and ZK rollups?",
          answer:
            "Optimistic rollups assume transactions are valid by default and use a fraud proof system where anyone can challenge invalid transactions within a dispute period (usually 7 days). ZK rollups use cryptographic zero-knowledge proofs to mathematically verify every batch of transactions, providing faster finality but requiring more computational resources to generate proofs.",
        },
        {
          question: "Are rollups safe to use?",
          answer:
            "Rollups inherit security from their underlying Layer 1 blockchain. Since transaction data is posted to the main chain, users can always reconstruct the rollup state and withdraw funds even if the rollup operators go offline. However, each rollup has different maturity levels and trust assumptions worth researching.",
        },
        {
          question: "How much can rollups reduce gas fees?",
          answer:
            "Rollups can reduce gas fees by 10 to 100 times compared to transacting directly on Ethereum. The exact savings depend on the type of rollup, network congestion, and the complexity of transactions being processed.",
        },
      ]}
      relatedArticles={[
        { title: "ZK Rollup", href: "/learn/glossary/zk-rollup", category: "Glossary" },
        { title: "Sidechain", href: "/learn/glossary/sidechain", category: "Glossary" },
        { title: "How Layer 2 Works", href: "/learn/how-layer-2-works", category: "Learn" },
      ]}
    >
      <section id="definition">
        <h2>Definition</h2>
        <p>
          A rollup is a Layer 2 scaling technology that processes and executes transactions outside the main blockchain (off-chain) and then posts the compressed transaction data back to the Layer 1 chain. The term "rollup" comes from the concept of rolling up hundreds or thousands of transactions into a single batch. By moving computation off-chain while keeping data on-chain, rollups achieve significant scalability improvements without sacrificing the security guarantees of the underlying blockchain. Rollups are currently the dominant scaling strategy for Ethereum, with Vitalik Buterin and the Ethereum community describing a "rollup-centric roadmap" as the primary path to scaling the network. There are two main types: optimistic rollups and zero-knowledge (ZK) rollups, each using different methods to ensure the validity of off-chain computations.
        </p>
      </section>
      <section id="how-it-works">
        <h2>How It Works</h2>
        <p>
          Rollups work by running a separate execution environment where transactions are processed. A sequencer collects user transactions, orders them, and executes them off-chain. The results are then compressed and posted to the Layer 1 chain as calldata or blob data. In optimistic rollups, the system assumes all transactions are valid and posts them without proofs. A challenge period (typically 7 days) allows anyone to submit a fraud proof if they detect an invalid transaction. If a fraud proof succeeds, the invalid batch is reverted and the malicious sequencer is penalized. In ZK rollups, the sequencer generates a cryptographic validity proof (a SNARK or STARK) for each batch of transactions. This proof mathematically demonstrates that all transactions in the batch were executed correctly. The Layer 1 smart contract verifies this proof before accepting the batch, providing immediate finality without a challenge period. Both types post enough data to Layer 1 that anyone can reconstruct the full rollup state independently.
        </p>
      </section>
      <section id="examples">
        <h2>Examples & Use Cases</h2>
        <p>
          Leading optimistic rollups include Arbitrum and Optimism (OP Mainnet), which are currently the most widely used Layer 2 solutions on Ethereum. These networks support full EVM compatibility, meaning existing Ethereum applications can deploy on them with minimal changes. Arbitrum hosts major DeFi protocols and has billions of dollars in total value locked. On the ZK rollup side, zkSync Era and StarkNet are prominent examples, using zero-knowledge proofs for faster finality and potentially greater scalability. Base, built on the OP Stack by Coinbase, demonstrates how rollups enable major companies to launch their own Layer 2 networks. Rollups are used for DeFi trading, NFT minting, gaming, and general-purpose applications where users benefit from lower fees and faster confirmations while maintaining access to Ethereum's liquidity and security.
        </p>
      </section>
      <section id="why-it-matters">
        <h2>Why It Matters</h2>
        <p>
          Rollups are arguably the most important scaling innovation in cryptocurrency today. They address the fundamental challenge of blockchain scalability without requiring users to trust a separate set of validators or compromise on security. Ethereum's gas fees during peak usage can make simple transactions cost tens of dollars, making the network impractical for everyday use. Rollups reduce these costs by orders of magnitude while keeping the security anchor on Ethereum's battle-tested Layer 1. For the broader crypto ecosystem, rollups enable use cases that were previously economically unfeasible, such as micropayments, high-frequency DeFi trading, and blockchain gaming. The rise of rollup frameworks like the OP Stack and ZK Stack also enables the creation of application-specific rollups, where projects can launch customized Layer 2 networks tailored to their specific requirements. Understanding rollups is essential for any crypto participant as they increasingly become the default layer where users interact with blockchain applications.
        </p>
      </section>
    </LearnPageLayout>
  );
}
