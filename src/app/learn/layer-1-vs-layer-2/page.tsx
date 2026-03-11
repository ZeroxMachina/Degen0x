import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Layer 1 vs Layer 2 Blockchains Explained (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Understand the difference between Layer 1 and Layer 2 blockchains, how scaling solutions work, rollups, sidechains, and which approach is best for different use cases.",
};

export default function Layer1VsLayer2Page() {
  return (
    <LearnPageLayout
      title="Layer 1 vs Layer 2 Blockchains Explained"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="10 min read"
      intro="As blockchain adoption grows, the need for greater transaction throughput has given rise to a multi-layered scaling architecture. Layer 1 (L1) blockchains like Ethereum, Bitcoin, and Solana form the base settlement layer, while Layer 2 (L2) solutions like Arbitrum, Optimism, and Base build on top of L1s to process transactions faster and cheaper. Understanding the relationship between these layers is essential for navigating the modern blockchain ecosystem."
      toc={[
        { id: "layer-1-explained", title: "What Is a Layer 1 Blockchain?", level: 2 },
        { id: "layer-2-explained", title: "What Is a Layer 2 Solution?", level: 2 },
        { id: "rollup-types", title: "Optimistic vs ZK Rollups", level: 2 },
        { id: "other-solutions", title: "Other Scaling Approaches", level: 2 },
        { id: "choosing", title: "Choosing Between L1 and L2", level: 2 },
      ]}
      faqs={[
        {
          question: "Are Layer 2s as secure as Layer 1s?",
          answer:
            "Rollup-based Layer 2s inherit the security of their underlying Layer 1. Optimistic rollups assume transactions are valid and use fraud proofs to catch errors, while ZK rollups use mathematical proofs to verify every batch. Both models ultimately anchor their security to the L1, though they differ in trust assumptions and finality times.",
        },
        {
          question: "Why not just make Layer 1 faster instead?",
          answer:
            "Increasing L1 throughput often requires sacrificing decentralization or security — this is the blockchain trilemma. Running larger blocks requires more powerful nodes, which concentrates the network among fewer operators. Layer 2 solutions scale without compromising the base layer's decentralization, which is why they are the preferred scaling approach for Ethereum.",
        },
        {
          question: "How do I move assets between L1 and L2?",
          answer:
            "You use a bridge to transfer assets between layers. Native bridges provided by L2 protocols are the most secure option. Deposits from L1 to L2 are typically fast (minutes), while withdrawals from optimistic rollups back to L1 can take up to 7 days due to the fraud proof challenge period. Third-party bridges and liquidity networks offer faster withdrawals for a fee.",
        },
      ]}
      relatedArticles={[
        { title: "The Blockchain Trilemma", href: "/learn/blockchain-trilemma", category: "Learn" },
        { title: "What Are Gas Fees?", href: "/learn/what-are-gas-fees", category: "Learn" },
        { title: "Modular Blockchains", href: "/learn/modular-blockchains", category: "Learn" },
        { title: "Data Availability Explained", href: "/learn/data-availability", category: "Learn" },
      ]}
    >
      <section id="layer-1-explained">
        <h2>What Is a Layer 1 Blockchain?</h2>
        <p>
          A Layer 1 blockchain is the base protocol that provides the foundational infrastructure for a blockchain ecosystem. It handles transaction validation, consensus, and data availability independently without relying on any other network. Examples include Ethereum, Bitcoin, Solana, Avalanche, and BNB Chain. Each L1 defines its own rules for block production, transaction finality, and security guarantees.
        </p>
        <p>
          L1 blockchains face inherent scaling limitations due to the blockchain trilemma — the challenge of simultaneously optimizing for security, decentralization, and scalability. Ethereum, for instance, processes roughly 15-30 transactions per second on its base layer, which becomes a bottleneck during periods of high demand, causing gas fees to spike dramatically. Different L1s make different trade-offs: Solana prioritizes speed and low fees but uses higher hardware requirements, while Ethereum prioritizes decentralization and security.
        </p>
      </section>

      <section id="layer-2-explained">
        <h2>What Is a Layer 2 Solution?</h2>
        <p>
          Layer 2 solutions are protocols built on top of a Layer 1 blockchain that handle transaction execution off the main chain while periodically posting compressed transaction data or proofs back to the L1 for security. By processing hundreds or thousands of transactions off-chain and settling them in batches on L1, Layer 2s dramatically increase throughput and reduce costs while inheriting the security of the underlying blockchain.
        </p>
        <p>
          The key insight behind L2 scaling is separation of concerns: the L1 serves as a secure settlement and data availability layer, while the L2 handles fast, cheap execution. Users interact with dApps on the L2 at a fraction of the cost, and the L2 protocol ensures that the L1 can verify and enforce the correctness of all L2 transactions. This architecture allows Ethereum to scale to thousands of transactions per second across multiple L2s without changing the base protocol.
        </p>
      </section>

      <section id="rollup-types">
        <h2>Optimistic vs ZK Rollups</h2>
        <p>
          Optimistic rollups, used by Arbitrum and Optimism, assume all transactions in a batch are valid by default and only compute fraud proofs if a transaction is challenged during a dispute window (typically 7 days). This approach is simpler to implement and supports full EVM compatibility relatively easily, making it straightforward for developers to port existing Ethereum applications. The downside is the long withdrawal period — users must wait for the challenge window to expire before withdrawing funds to L1.
        </p>
        <p>
          Zero-knowledge (ZK) rollups, used by zkSync, StarkNet, and Polygon zkEVM, generate cryptographic validity proofs for every batch of transactions. These proofs mathematically guarantee that all transactions in the batch were executed correctly, eliminating the need for a challenge period. Withdrawals to L1 can be processed as soon as the proof is verified, offering faster finality. However, ZK rollups are more complex to build, and achieving full EVM compatibility with ZK proofs remains an active engineering challenge.
        </p>
      </section>

      <section id="other-solutions">
        <h2>Other Scaling Approaches</h2>
        <p>
          Sidechains like Polygon PoS run their own consensus mechanism and periodically checkpoint state to the parent chain. While they offer high throughput and low fees, they do not inherit the full security of the L1 since they rely on their own set of validators. Validiums are similar to ZK rollups but store transaction data off-chain, further reducing costs at the expense of data availability guarantees.
        </p>
        <p>
          State channels, such as Bitcoin's Lightning Network, allow two parties to conduct multiple transactions off-chain and only settle the final state on the L1. Plasma chains create child chains that periodically commit to the parent chain. Each approach sits at a different point on the trade-off spectrum between security, cost, speed, and complexity, and the optimal choice depends on the specific application requirements.
        </p>
      </section>

      <section id="choosing">
        <h2>Choosing Between L1 and L2</h2>
        <p>
          For most everyday users and applications, Layer 2 solutions offer the best balance of cost, speed, and security. DeFi applications, NFT marketplaces, and gaming platforms on L2s provide a user experience comparable to centralized services while maintaining the trustless properties of blockchain. Popular L2s like Arbitrum, Base, and Optimism host vibrant ecosystems with billions in total value locked.
        </p>
        <p>
          Layer 1 transactions make sense for high-value operations where the absolute security of the base layer is worth the higher cost, such as moving large amounts between cold storage, deploying important smart contracts, or settling L2 batches. As the ecosystem matures, the trend is toward a modular, multi-layer architecture where L1s provide security and data availability while L2s and L3s handle specialized execution, creating a scalable, composable, and efficient blockchain stack.
        </p>
      </section>
    </LearnPageLayout>
  );
}
