import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Layer 2? Blockchain Scaling Solutions Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn what Layer 2 scaling solutions are, how rollups work, the difference between optimistic and ZK rollups, and why L2s are essential for blockchain scalability.",
  keywords: ["layer 2", "L2", "blockchain scaling", "rollups", "optimistic rollup", "zk rollup"],
};

export default function WhatIsLayer2Page() {
  return (
    <LearnPageLayout
      title="What Is Layer 2? Blockchain Scaling Solutions Explained"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="9 min"
      intro="Layer 2 (L2) refers to a category of scaling solutions built on top of existing blockchains — primarily Ethereum — that process transactions off the main chain while inheriting its security guarantees. L2s dramatically reduce transaction costs and increase throughput, making blockchain applications accessible to millions of users who were previously priced out by high fees."
      toc={[
        { id: "scaling-problem", title: "scaling-problem", level: 2 },
        { id: "the-scaling-problem", title: "The Scaling Problem", level: 2 },
        { id: "how-l2s-work", title: "how-l2s-work", level: 2 },
        { id: "how-layer-2s-work", title: "How Layer 2s Work", level: 2 },
        { id: "types-of-l2s", title: "types-of-l2s", level: 2 },
        { id: "types-of-layer-2-solutions", title: "Types of Layer 2 Solutions", level: 2 },
        { id: "optimistic-rollups", title: "optimistic-rollups", level: 2 },
        { id: "optimistic-rollups", title: "Optimistic Rollups", level: 2 },
        { id: "zk-rollups", title: "zk-rollups", level: 2 },
        { id: "zk-rollups", title: "ZK Rollups", level: 2 },
        { id: "l2-ecosystem", title: "l2-ecosystem", level: 2 },
        { id: "the-l2-ecosystem", title: "The L2 Ecosystem", level: 2 },
        { id: "using-l2s", title: "using-l2s", level: 2 },
        { id: "using-layer-2-networks", title: "Using Layer 2 Networks", level: 2 }
      ]}
      faqs={[
        {
          question: "Are Layer 2s as secure as Ethereum?",
          answer: "Layer 2 rollups inherit Ethereum's security by posting transaction data to L1 and using fraud proofs (optimistic) or validity proofs (ZK) to ensure correctness. However, many L2s have additional trust assumptions around sequencer centralization and upgrade mechanisms that introduce risk not present on L1.",
        },
        {
          question: "Which Layer 2 should I use?",
          answer: "The best L2 depends on your needs. Arbitrum and Optimism are mature with broad DeFi support. Base offers a Coinbase-integrated experience. zkSync and StarkNet are leading ZK rollups. Consider factors like available applications, transaction costs, bridge security, and decentralization status.",
        },
        {
          question: "How do I move assets to a Layer 2?",
          answer: "You bridge assets from Ethereum to an L2 using the L2's official bridge or third-party bridges. Official bridges are the most secure but can have withdrawal delays (7 days for optimistic rollups). Third-party bridges offer faster transfers but introduce additional smart contract risk.",
        },
        {
          question: "Will Layer 2s replace Ethereum?",
          answer: "No. L2s complement Ethereum by handling execution while relying on Ethereum for security and data availability. Ethereum is evolving into a settlement and data availability layer, with L2s handling most user-facing transactions. This is the intended scaling roadmap endorsed by the Ethereum community.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Rollup?", href: "/learn/what-is-a-rollup", category: "Learn" },
        { title: "How to Use Layer 2", href: "/learn/how-to-use-layer-2", category: "Learn" },
        { title: "What Is a Bridge?", href: "/learn/what-is-a-bridge", category: "Learn" },
        { title: "Arbitrum Ecosystem Guide", href: "/learn/arbitrum-ecosystem-guide", category: "Learn" },
      ]}
    >
      <section id="scaling-problem">
        <h2>The Scaling Problem</h2>
        <p>
          Ethereum, despite being the most successful smart contract platform, processes only about 15-30 transactions per second. During periods of high demand, this limited throughput creates fierce competition for block space, driving gas fees to levels that make simple transactions cost $50-200 or more. This pricing out of everyday users represented the biggest obstacle to blockchain achieving mainstream adoption and fulfilling its promise of open, accessible financial infrastructure.
        </p>
        <p>
          The blockchain trilemma — the difficulty of simultaneously achieving scalability, security, and decentralization — means that simply increasing Ethereum's throughput would require sacrificing either decentralization or security. Layer 2 solutions elegantly sidestep this trade-off by moving execution off-chain while anchoring security to Ethereum's battle-tested consensus mechanism. This modular approach allows the ecosystem to scale dramatically while preserving the properties that make Ethereum valuable.
        </p>
      </section>

      <section id="how-l2s-work">
        <h2>How Layer 2s Work</h2>
        <p>
          Layer 2 solutions batch hundreds or thousands of transactions together, execute them in their own environment, and then post compressed transaction data and a proof of correctness back to Ethereum (Layer 1). By amortizing the cost of L1 data posting across many transactions, each individual transaction becomes vastly cheaper — typically 10-100x less than executing directly on Ethereum.
        </p>
        <p>
          The security model depends on the L2 type but generally works as follows: users submit transactions to the L2 sequencer, which orders and executes them rapidly. The sequencer periodically posts compressed transaction data to Ethereum, creating an immutable record. A proving mechanism then ensures that the L2 state transitions are valid — either through fraud proofs that allow anyone to challenge incorrect state updates, or through cryptographic validity proofs that mathematically guarantee correctness. If the L2 sequencer misbehaves, users can always recover their funds through Ethereum's base layer.
        </p>
      </section>

      <section id="types-of-l2s">
        <h2>Types of Layer 2 Solutions</h2>
        <p>
          The two primary categories of Layer 2 solutions are optimistic rollups and ZK (zero-knowledge) rollups. Optimistic rollups assume transactions are valid unless challenged — hence the name "optimistic." They post transaction data to L1 and include a challenge period during which anyone can submit a fraud proof if they detect an invalid state transition. ZK rollups use mathematical proofs to cryptographically guarantee the correctness of every batch, eliminating the need for a challenge period.
        </p>
        <p>
          Other L2 approaches include state channels, which are best suited for repeated transactions between known parties, and validiums, which are similar to ZK rollups but store data off-chain for even lower costs at the expense of some security assumptions. Plasma was an earlier L2 approach that has largely been superseded by rollups. The industry has converged on rollups as the primary scaling approach due to their superior combination of security, general-purpose functionality, and cost efficiency.
        </p>
      </section>

      <section id="optimistic-rollups">
        <h2>Optimistic Rollups</h2>
        <p>
          Optimistic rollups, exemplified by Arbitrum and Optimism (the OP Stack), are currently the most widely adopted L2 category. They achieve high throughput and low costs by processing transactions off-chain and only posting compressed data to Ethereum. The "optimistic" assumption is that all submitted transactions are valid — the system operates on the principle that fraud is rare and can be caught and penalized after the fact.
        </p>
        <p>
          The fraud proof mechanism works through a challenge period, typically seven days, during which anyone monitoring the chain can submit a fraud proof if they detect an incorrect state transition. If a fraud proof is validated, the invalid batch is reverted and the malicious sequencer is penalized. This challenge period is the primary drawback of optimistic rollups: withdrawals from the L2 to Ethereum take seven days through the official bridge, though third-party bridges can provide faster liquidity at additional cost and risk.
        </p>
      </section>

      <section id="zk-rollups">
        <h2>ZK Rollups</h2>
        <p>
          ZK rollups use zero-knowledge proofs to cryptographically prove the validity of every batch of transactions without requiring a challenge period. After executing transactions off-chain, the rollup generates a mathematical proof — typically a SNARK or STARK — that demonstrates all state transitions are correct. This proof is verified on Ethereum, and because it provides mathematical certainty, withdrawals can be processed immediately without waiting for a challenge period.
        </p>
        <p>
          The trade-off is that generating zero-knowledge proofs is computationally expensive and technically complex. ZK rollups like zkSync Era, StarkNet, Polygon zkEVM, and Scroll are still maturing their technology. Achieving full EVM equivalence — the ability to run any Ethereum smart contract without modification — has been particularly challenging for ZK systems, though recent advances have made this increasingly viable. Many experts believe ZK rollups will eventually become the dominant L2 technology due to their superior security properties and faster finality.
        </p>
      </section>

      <section id="l2-ecosystem">
        <h2>The L2 Ecosystem</h2>
        <p>
          The L2 ecosystem has grown rapidly, with Arbitrum, Optimism, Base, zkSync, StarkNet, and others collectively processing more transactions than Ethereum itself. Each L2 has developed its own ecosystem of DeFi protocols, NFT platforms, gaming applications, and social apps. This has created a vibrant but fragmented landscape where liquidity and users are distributed across multiple networks.
        </p>
        <p>
          The proliferation of L2s has also spawned new infrastructure needs: cross-L2 bridges, unified liquidity layers, chain abstraction protocols, and shared sequencer networks. The vision is an interconnected web of L2s that feel like a single coherent platform to end users, with assets and data flowing seamlessly between them while Ethereum serves as the shared security and settlement layer. Achieving this vision is one of the most active areas of blockchain development.
        </p>
      </section>

      <section id="using-l2s">
        <h2>Using Layer 2 Networks</h2>
        <p>
          Getting started with Layer 2 is straightforward. Add the L2 network to your wallet (most wallets like MetaMask support this natively), bridge assets from Ethereum using the official bridge or a third-party bridge, and start using applications on the L2. The user experience is identical to using Ethereum — the same wallet, the same contract interactions — but transactions confirm in seconds and cost a fraction of a cent.
        </p>
        <p>
          Many users now onboard directly to L2s through centralized exchanges that support L2 withdrawals, bypassing the bridging step entirely. Coinbase supports direct withdrawals to Base, and many exchanges support Arbitrum and Optimism withdrawals. This direct-to-L2 onramp is becoming the standard path for new users, as it avoids the complexity and cost of bridging from Ethereum mainnet. As L2 adoption continues to grow, the distinction between L1 and L2 is becoming increasingly transparent to end users.
        </p>
      </section>
    </LearnPageLayout>
  );
}
