import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Data Availability in Blockchain Explained (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about data availability in blockchain: why it matters for security, DAS (data availability sampling), dedicated DA layers like Celestia and EigenDA, and its role in scaling.",
};

export default function DataAvailabilityPage() {
  return (
    <LearnPageLayout
      title="Data Availability in Blockchain Explained"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="8 min read"
      intro="Data availability (DA) is the guarantee that the data needed to verify blockchain transactions has been published and is accessible to all network participants. While often overlooked in favor of more visible topics like execution speed or consensus mechanisms, data availability is a critical security requirement and the primary cost bottleneck for Layer 2 scaling solutions. Understanding DA is essential for grasping why modular blockchain architectures exist and how the next generation of scaling solutions will achieve orders-of-magnitude improvements in throughput and cost reduction."
      toc={[
        { id: "what-is-da", title: "what-is-da", level: 2 },
        { id: "what-is-data-availability", title: "What Is Data Availability?", level: 2 },
        { id: "da-problem", title: "da-problem", level: 2 },
        { id: "the-data-availability-problem", title: "The Data Availability Problem", level: 2 },
        { id: "das", title: "das", level: 2 },
        { id: "data-availability-sampling-das", title: "Data Availability Sampling (DAS)", level: 2 },
        { id: "da-layers", title: "da-layers", level: 2 },
        { id: "dedicated-da-layers", title: "Dedicated DA Layers", level: 2 },
        { id: "impact", title: "impact", level: 2 },
        { id: "impact-on-blockchain-scaling", title: "Impact on Blockchain Scaling", level: 2 }
      ]}
      faqs={[
        {
          question: "Why can't rollups just store data off-chain?",
          answer:
            "Some do — these are called validiums. However, storing data off-chain introduces a trust assumption: you must trust the off-chain data provider to keep the data available. If the data disappears, users cannot prove their balances or challenge incorrect state transitions. For maximum security, rollups post data to a layer with strong availability guarantees, whether that is Ethereum, Celestia, or another DA layer.",
        },
        {
          question: "How much does data availability cost?",
          answer:
            "On Ethereum mainnet (as calldata), DA has historically been the largest cost component for rollups, sometimes accounting for over 90% of rollup transaction fees. Ethereum's EIP-4844 (Proto-Danksharding) introduced blob space, reducing DA costs by roughly 90%. Dedicated DA layers like Celestia offer even lower costs, with transaction fees often less than a cent.",
        },
        {
          question: "What is the difference between data availability and data storage?",
          answer:
            "Data availability is about guaranteeing that data was published and temporarily accessible for verification. Data storage is about long-term persistence. DA layers need to guarantee availability for a sufficient window (days to weeks) for validators to check the data, but they do not necessarily store it permanently. Separate archival solutions handle long-term storage.",
        },
      ]}
      relatedArticles={[
        { title: "Modular Blockchains", href: "/learn/modular-blockchains", category: "Learn" },
        { title: "Layer 1 vs Layer 2", href: "/learn/layer-1-vs-layer-2", category: "Learn" },
        { title: "Zero-Knowledge Proofs", href: "/learn/zero-knowledge-proofs", category: "Learn" },
        { title: "The Blockchain Trilemma", href: "/learn/blockchain-trilemma", category: "Learn" },
      ]}
    >
      <section id="what-is-da">
        <h2>What Is Data Availability?</h2>
        <p>
          Data availability answers a fundamental question: can anyone who wants to verify the blockchain actually access the data they need? When a block producer creates a new block, they must publish the complete transaction data so that other nodes can independently verify that the transactions are valid and the resulting state changes are correct. If a block producer publishes a block header but withholds the underlying data, no one can verify whether the block is valid, creating a potential avenue for fraud.
        </p>
        <p>
          For Layer 2 rollups, data availability is particularly critical. Rollups process transactions off-chain but must make the transaction data available somewhere so that anyone can reconstruct the L2 state independently. If the rollup operator goes offline or acts maliciously, users need access to the published data to prove their balances and withdraw their funds back to the L1. Without data availability, the security guarantees that rollups inherit from their base layer break down.
        </p>
      </section>

      <section id="da-problem">
        <h2>The Data Availability Problem</h2>
        <p>
          The core challenge is that verifying data availability is fundamentally different from verifying computation. A node can verify a mathematical proof or check a signature efficiently, but verifying that data was published requires actually downloading the data, which does not scale. If blocks grow very large to accommodate more data, only powerful nodes with high bandwidth can download and verify everything, reducing decentralization.
        </p>
        <p>
          This creates a direct tension with the blockchain trilemma: increasing data throughput (more data per block) improves scalability but increases the hardware requirements for nodes, threatening decentralization. The breakthrough innovation that resolves this tension is Data Availability Sampling, which allows lightweight nodes to verify data availability with high confidence by downloading only a small random sample of the data rather than the entire block.
        </p>
      </section>

      <section id="das">
        <h2>Data Availability Sampling (DAS)</h2>
        <p>
          Data Availability Sampling uses a technique called erasure coding to expand block data with redundancy, then allows nodes to randomly sample small portions of the encoded data. If a node can successfully retrieve several random samples, it can be statistically confident that the full data is available, even without downloading it entirely. The probability of missing unavailable data decreases exponentially with the number of samples, providing very high confidence with minimal bandwidth.
        </p>
        <p>
          This is analogous to quality control in manufacturing: instead of inspecting every item on the production line, you randomly sample a statistical number of items. If all samples pass inspection, you can be confident that the entire batch is good. DAS enables light clients to verify data availability without the resources of a full node, allowing much larger blocks (and thus much higher throughput) while preserving decentralization. Celestia, Avail, and Ethereum's future Danksharding all rely on DAS as a core primitive.
        </p>
      </section>

      <section id="da-layers">
        <h2>Dedicated DA Layers</h2>
        <p>
          Celestia was the first blockchain designed exclusively for data availability, launching its mainnet in late 2023. By focusing solely on ordering and publishing data (without executing transactions or maintaining application state), Celestia achieves significantly higher data throughput and lower costs than general-purpose blockchains. Rollups can post their transaction data to Celestia instead of Ethereum, reducing their DA costs by orders of magnitude while relying on Celestia's consensus and DAS for availability guarantees.
        </p>
        <p>
          EigenDA takes a different approach by leveraging Ethereum's restaked security through EigenLayer. Instead of running its own consensus, EigenDA distributes data across Ethereum validators who have opted into EigenLayer restaking, providing DA guarantees backed by Ethereum's economic security. Avail provides a DA layer with built-in validity proofs, allowing light clients to verify not just data availability but also the correctness of data ordering. Each DA layer offers different trust models, performance characteristics, and cost structures, giving rollup developers choices aligned with their specific requirements.
        </p>
      </section>

      <section id="impact">
        <h2>Impact on Blockchain Scaling</h2>
        <p>
          Ethereum's EIP-4844 (Proto-Danksharding), activated in March 2024, introduced blob transactions that provide a dedicated data space for rollups at significantly lower cost than traditional calldata. This single upgrade reduced rollup fees by approximately 90% and represented the first major step in Ethereum's DA scaling roadmap. Full Danksharding, planned for future upgrades, will further increase blob capacity and implement DAS on Ethereum's base layer.
        </p>
        <p>
          The combination of specialized DA layers and improving L1 DA capacity is creating an abundance of affordable data space that enables a new generation of applications. With DA costs approaching zero, blockchain applications that were previously uneconomical become viable: on-chain gaming, social media, IoT data, and enterprise applications that generate large volumes of transactions. The DA revolution is quietly removing one of the most fundamental bottlenecks in blockchain scaling, setting the stage for throughput levels that can serve billions of users.
        </p>
      </section>
    </LearnPageLayout>
  );
}
