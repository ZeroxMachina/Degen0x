import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Rollup? Optimistic vs ZK Rollups (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what rollups are, how optimistic and ZK rollups differ, and why they are critical to blockchain scaling. A comprehensive guide to Layer 2 rollup technology.",
};

export default function WhatIsARollupPage() {
  return (
    <LearnPageLayout
      title="What Is a Rollup? Optimistic vs ZK"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="10 min read"
      intro="Rollups are Layer 2 scaling solutions that execute transactions off the main blockchain (Layer 1) but post transaction data back to it for security. By bundling hundreds of transactions into a single batch, rollups dramatically reduce costs while inheriting the security guarantees of the underlying chain. They are the primary scaling strategy for Ethereum and have become the foundation of the multi-chain future."
      toc={[
        { id: "what-are-rollups", title: "what-are-rollups", level: 2 },
        { id: "what-are-rollups", title: "What Are Rollups?", level: 2 },
        { id: "optimistic-rollups", title: "optimistic-rollups", level: 2 },
        { id: "optimistic-rollups", title: "Optimistic Rollups", level: 2 },
        { id: "zk-rollups", title: "zk-rollups", level: 2 },
        { id: "zk-rollups", title: "ZK Rollups", level: 2 },
        { id: "comparison", title: "comparison", level: 2 },
        { id: "optimistic-vs-zk-key-differences", title: "Optimistic vs ZK: Key Differences", level: 2 }
      ]}
      faqs={[
        {
          question: "Which is better, optimistic or ZK rollups?",
          answer:
            "Neither is universally better. Optimistic rollups are more mature and fully EVM-compatible, making them easier for existing Ethereum apps to deploy on. ZK rollups offer faster finality and stronger cryptographic guarantees but are more complex to build and have historically had limited EVM compatibility. Both approaches are converging as technology matures.",
        },
        {
          question: "Are rollups safe?",
          answer:
            "Rollups inherit security from their parent chain (typically Ethereum). As long as the data is posted to L1, anyone can verify the state and detect fraud. However, many rollups currently have training wheels such as upgradeable contracts, centralized sequencers, and limited fraud proof systems. These are being progressively decentralized over time.",
        },
        {
          question: "How much cheaper are rollups than Ethereum?",
          answer:
            "Rollups are typically 10-100x cheaper than Ethereum mainnet. Simple transfers on Arbitrum or Base cost under $0.01, compared to several dollars on Ethereum. After EIP-4844 introduced blob space, rollup costs decreased even further, making most transactions cost fractions of a cent.",
        },
      ]}
      relatedArticles={[
        { title: "Layer 1 vs Layer 2", href: "/learn/layer-1-vs-layer-2", category: "Learn Crypto" },
        { title: "Zero Knowledge Proofs", href: "/learn/zero-knowledge-proofs", category: "Learn Crypto" },
        { title: "Arbitrum Ecosystem", href: "/learn/arbitrum-ecosystem", category: "Learn Crypto" },
        { title: "Data Availability", href: "/learn/data-availability", category: "Learn Crypto" },
      ]}
    >
      <section id="what-are-rollups">
        <h2>What Are Rollups?</h2>
        <p>
          Rollups process transactions on a separate execution layer and then roll up the results into compressed batches that are posted to the Layer 1 blockchain. This design offloads computation from the main chain while preserving its security guarantees. The key insight is that verifying a batch of transactions is much cheaper than executing each one individually on Layer 1.
        </p>
        <p>
          Every rollup has a sequencer that orders transactions and produces batches, and a mechanism for ensuring the validity of those batches. The transaction data posted to L1 allows anyone to reconstruct the rollup state independently, ensuring censorship resistance. If the sequencer goes offline, users can still force their transactions through the L1 contract, guaranteeing that funds are never permanently stuck.
        </p>
      </section>

      <section id="optimistic-rollups">
        <h2>Optimistic Rollups</h2>
        <p>
          Optimistic rollups assume transactions are valid by default and only verify them if someone submits a fraud proof during a challenge period, typically seven days. This optimistic approach means blocks are posted quickly and cheaply because no additional computation is needed upfront. If a fraudulent batch is detected, the fraud proof triggers a re-execution on L1 that reverts the invalid state.
        </p>
        <p>
          Arbitrum and Optimism (OP Stack) are the two dominant optimistic rollup implementations. Arbitrum uses interactive fraud proofs where the challenger and defender narrow down the disputed instruction through a back-and-forth process. The OP Stack uses non-interactive fraud proofs with a single L1 execution step. Both approaches have been battle-tested with billions of dollars in TVL. Base, built on the OP Stack, has become one of the most active L2 networks.
        </p>
      </section>

      <section id="zk-rollups">
        <h2>ZK Rollups</h2>
        <p>
          ZK (zero-knowledge) rollups use cryptographic validity proofs to mathematically verify that every batch of transactions was executed correctly. Instead of assuming validity and waiting for challenges, ZK rollups prove correctness proactively. This means finality is achieved as soon as the proof is verified on L1, without any challenge period. The trade-off is that generating ZK proofs is computationally intensive and expensive.
        </p>
        <p>
          Major ZK rollup projects include zkSync Era, StarkNet, Scroll, Polygon zkEVM, and Linea. These platforms differ in their proof systems (SNARKs vs STARKs), EVM compatibility approach, and decentralization roadmap. ZK rollups are considered the long-term future of Ethereum scaling because their cryptographic proofs provide the strongest security guarantees and enable the fastest cross-chain communication.
        </p>
      </section>

      <section id="comparison">
        <h2>Optimistic vs ZK: Key Differences</h2>
        <p>
          The fundamental difference is verification method. Optimistic rollups use fraud proofs with a 7-day challenge window, meaning withdrawals to L1 take a week. ZK rollups use validity proofs that provide near-instant finality once the proof is generated and verified, enabling faster L1 withdrawals. However, optimistic rollups currently offer better EVM compatibility, making it easier for existing smart contracts to deploy without modification.
        </p>
        <p>
          In terms of cost, optimistic rollups are cheaper to operate because they do not need to generate proofs for every batch. ZK rollups spend significant resources on proof generation, though this cost is amortized across all transactions in the batch and is decreasing as proving technology improves. Both types benefit from EIP-4844 blob space, which reduces the cost of posting data to Ethereum. The market is increasingly moving toward a multi-rollup future where both types coexist and serve different use cases.
        </p>
      </section>
    </LearnPageLayout>
  );
}
