import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Modular Blockchains Explained (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about modular blockchains: how separating execution, settlement, consensus, and data availability creates more scalable and flexible blockchain architectures.",
};

export default function ModularBlockchainsPage() {
  return (
    <LearnPageLayout
      title="Modular Blockchains Explained"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="Modular blockchains represent a paradigm shift in how blockchain systems are designed. Instead of a single chain handling all functions (execution, consensus, settlement, and data availability), modular architectures separate these functions across specialized layers. This separation allows each layer to be independently optimized, creating a more scalable, flexible, and efficient system. The modular approach is central to Ethereum's scaling roadmap and has spawned a new generation of specialized blockchain infrastructure."
      toc={[
        { id: "monolithic-vs-modular", title: "Monolithic vs Modular Architecture", level: 2 },
        { id: "four-functions", title: "The Four Core Functions", level: 2 },
        { id: "modular-stack", title: "The Modular Blockchain Stack", level: 2 },
        { id: "key-projects", title: "Key Projects in the Modular Ecosystem", level: 2 },
        { id: "implications", title: "Implications and Trade-offs", level: 2 },
      ]}
      faqs={[
        {
          question: "Is Ethereum a modular blockchain?",
          answer:
            "Ethereum is transitioning toward a modular architecture. The base layer focuses on consensus and data availability, while execution is increasingly handled by Layer 2 rollups. This rollup-centric roadmap effectively separates Ethereum into specialized layers, though the base layer still performs all functions for transactions submitted directly to it.",
        },
        {
          question: "What is the relationship between modular blockchains and rollups?",
          answer:
            "Rollups are a key component of the modular blockchain stack. They handle execution (processing transactions) while relying on a separate chain for settlement and data availability. The modular thesis argues that optimizing each layer independently produces better results than trying to optimize everything on a single chain.",
        },
        {
          question: "Will modular blockchains replace monolithic ones?",
          answer:
            "Both architectures will likely coexist. Monolithic chains like Solana optimize for a different set of trade-offs (simplicity, composability within a single execution environment) that have valid use cases. The modular approach is favored for maximizing decentralization and scalability simultaneously, while monolithic approaches may provide better performance for specific applications.",
        },
      ]}
      relatedArticles={[
        { title: "Data Availability Explained", href: "/learn/data-availability", category: "Learn" },
        { title: "Layer 1 vs Layer 2", href: "/learn/layer-1-vs-layer-2", category: "Learn" },
        { title: "The Blockchain Trilemma", href: "/learn/blockchain-trilemma", category: "Learn" },
        { title: "Restaking Explained", href: "/learn/restaking-explained", category: "Learn" },
      ]}
    >
      <section id="monolithic-vs-modular">
        <h2>Monolithic vs Modular Architecture</h2>
        <p>
          Traditional (monolithic) blockchains like Bitcoin and the original Ethereum handle all four core functions — execution, consensus, settlement, and data availability — on a single layer. Every node must execute every transaction, reach consensus on the order, settle the final state, and store all data. This approach is simple and provides strong security guarantees, but it limits scalability because the system is constrained by the capacity of a single layer performing all functions.
        </p>
        <p>
          Modular blockchains decouple these functions across specialized layers, each optimized for its specific role. Execution layers process transactions as fast as possible. Settlement layers provide finality and dispute resolution. Data availability layers ensure that transaction data is accessible and verifiable. Consensus layers agree on the ordering and validity of operations. This separation of concerns mirrors how the internet was built: different protocols handling different functions (TCP for transport, HTTP for web pages, DNS for names) created a more scalable and adaptable system than any monolithic alternative.
        </p>
      </section>

      <section id="four-functions">
        <h2>The Four Core Functions</h2>
        <p>
          Execution is the computation of transaction results — what happens when you swap tokens, interact with a smart contract, or transfer assets. In a modular stack, execution layers (rollups, L2s, or app-chains) can be optimized for maximum throughput and low latency without being constrained by the other functions. Multiple execution layers can operate in parallel, each serving different applications or user communities.
        </p>
        <p>
          Consensus determines the ordering of transactions and ensures all participants agree on the canonical state. Settlement provides finality — the guarantee that a transaction cannot be reversed. In Ethereum's modular model, rollups submit proofs to Ethereum's settlement layer, and once verified, the transactions achieve the same finality as native Ethereum transactions. Data availability ensures that the data needed to verify transaction validity is published and accessible to anyone who needs it. If data is not available, validators cannot verify correctness, which is why DA is considered the critical bottleneck in modular architectures.
        </p>
      </section>

      <section id="modular-stack">
        <h2>The Modular Blockchain Stack</h2>
        <p>
          In the Ethereum-centric modular stack, Ethereum serves as the settlement and consensus layer, providing maximum security and decentralization. Rollups (Arbitrum, Optimism, zkSync, StarkNet) serve as execution layers, processing transactions at high speed and low cost. Dedicated data availability layers (Celestia, EigenDA, Avail) provide cheap, scalable data storage that rollups can use instead of posting all data to expensive Ethereum block space.
        </p>
        <p>
          This stack can be extended further. Layer 3s (app-chains built on top of L2s) provide even more specialized execution environments for specific applications like gaming or social media. Shared sequencing services coordinate transaction ordering across multiple rollups. Interoperability layers enable communication between different execution environments. Each component is developed independently and can be upgraded or replaced without affecting the rest of the stack, creating a more innovative and resilient ecosystem.
        </p>
      </section>

      <section id="key-projects">
        <h2>Key Projects in the Modular Ecosystem</h2>
        <p>
          Celestia is the first purpose-built modular data availability layer, designed exclusively to order and publish data without executing transactions. By focusing on this single function, Celestia achieves much higher data throughput than general-purpose blockchains, dramatically reducing the cost of data availability for rollups. Celestia's launch in late 2023 was a landmark moment for the modular blockchain thesis, proving that specialized DA layers could attract significant adoption.
        </p>
        <p>
          EigenDA leverages Ethereum's restaked security to provide a high-throughput DA layer, offering a different trust model than Celestia by relying on Ethereum validators rather than its own consensus. Avail, built by former Polygon team members, provides DA with a focus on validity proofs and light client verification. On the execution side, frameworks like OP Stack (Optimism), Arbitrum Orbit, and ZK Stack (zkSync) enable developers to launch custom rollups with minimal effort, turning the deployment of a new execution environment from a multi-year project into a configuration exercise.
        </p>
      </section>

      <section id="implications">
        <h2>Implications and Trade-offs</h2>
        <p>
          The modular approach offers significant advantages: each layer can innovate independently, teams can specialize in what they do best, and the overall system can scale beyond the limitations of any single chain. Competition between providers at each layer drives efficiency and cost reduction. The ability to mix and match components creates a customizable architecture where application developers can choose the exact trade-offs (security, cost, speed, privacy) that best serve their users.
        </p>
        <p>
          The trade-offs include increased complexity for users and developers navigating a multi-layer ecosystem, fragmented liquidity across many execution environments, and potential trust assumption mismatches between layers. Cross-layer communication introduces latency and bridging risks. The user experience of interacting with applications across different rollups and chains remains a significant challenge, though improvements in account abstraction, chain abstraction, and intent-based systems are progressively addressing these friction points.
        </p>
      </section>
    </LearnPageLayout>
  );
}
