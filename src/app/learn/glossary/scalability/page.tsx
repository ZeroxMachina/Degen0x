import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Scalability: What It Means in Crypto (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn what scalability means in cryptocurrency. Understand blockchain throughput challenges, Layer 2 solutions, and why scalability is key to mass adoption.",
  keywords: ["blockchain scalability", "crypto scalability", "transaction throughput", "scaling solutions"],
};

export default function ScalabilityGlossaryPage() {
  return (
    <LearnPageLayout
      title="Scalability: What It Means in Crypto"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="6 min"
      intro="Scalability in cryptocurrency refers to a blockchain network's ability to handle an increasing number of transactions efficiently without sacrificing speed, cost, or decentralization. It is one of the biggest challenges facing blockchain technology today."
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
          question: "Why can't blockchains just increase block size for scalability?",
          answer:
            "Increasing block size helps throughput but increases hardware requirements for running nodes, which reduces decentralization. Fewer people can afford to run nodes with large storage and bandwidth needs. This is the core tension of the blockchain trilemma between scalability, security, and decentralization.",
        },
        {
          question: "Which blockchain is the most scalable?",
          answer:
            "Different blockchains make different tradeoffs. Solana achieves high throughput on Layer 1 but with fewer validators. Ethereum prioritizes decentralization and uses Layer 2 rollups for scaling. The most scalable solution depends on what tradeoffs you consider acceptable.",
        },
      ]}
      relatedArticles={[
        { title: "Rollup", href: "/learn/glossary/rollup", category: "Glossary" },
        { title: "Sharding", href: "/learn/glossary/sharding", category: "Glossary" },
        { title: "How Layer 2 Works", href: "/learn/how-layer-2-works", category: "Learn" },
      ]}
    >
      <section id="definition">
        <h2>Definition</h2>
        <p>
          Scalability in the context of blockchain and cryptocurrency describes how well a network can grow to accommodate more users, transactions, and applications without a degradation in performance. A scalable blockchain can process thousands or millions of transactions per second while maintaining low fees and fast confirmation times. This concept is central to the blockchain trilemma, which states that it is inherently difficult for a decentralized system to simultaneously achieve high scalability, strong security, and full decentralization. Most blockchains must make tradeoffs among these three properties. Bitcoin, for example, prioritizes security and decentralization but processes only about seven transactions per second. Visa, by comparison, handles around 65,000 transactions per second, illustrating the gap that blockchain technology must close to achieve mainstream adoption for everyday payments and applications.
        </p>
      </section>
      <section id="how-it-works">
        <h2>How It Works</h2>
        <p>
          Blockchain scalability can be approached through several strategies. On-chain scaling (Layer 1) involves modifying the base protocol itself, such as increasing block sizes, reducing block times, or implementing sharding to split the network into parallel processing groups. Off-chain scaling (Layer 2) moves transaction execution away from the main chain while still relying on it for security. This includes rollups, state channels, and sidechains. Rollups bundle hundreds of transactions into a single on-chain proof. State channels allow parties to transact privately off-chain and only settle the final result on-chain. Other approaches include parallel execution where multiple transactions are processed simultaneously, data availability sampling that allows light nodes to verify blocks without downloading all data, and modular architectures that separate consensus, execution, and data availability into specialized layers. Each approach involves different tradeoffs in terms of trust assumptions, latency, and compatibility with existing applications.
        </p>
      </section>
      <section id="examples">
        <h2>Examples & Use Cases</h2>
        <p>
          Ethereum represents the most prominent scalability journey in crypto. Starting with roughly 15 transactions per second on its base layer, Ethereum has adopted a rollup-centric roadmap where Layer 2 networks like Arbitrum, Optimism, and zkSync handle most user transactions. Together, these Layer 2s process thousands of transactions per second at a fraction of the cost. Solana takes a different approach with its Proof of History mechanism and parallel transaction processing, achieving thousands of TPS on Layer 1. Polkadot uses sharding through its parachain architecture where multiple specialized chains process transactions in parallel. The Lightning Network scales Bitcoin for payments by creating off-chain payment channels. In DeFi, scalability determines whether a protocol can support high-frequency trading, yield farming, and lending at costs accessible to average users rather than just whales who can afford high gas fees.
        </p>
      </section>
      <section id="why-it-matters">
        <h2>Why It Matters</h2>
        <p>
          Scalability is arguably the single most important technical challenge facing blockchain technology. Without sufficient scalability, blockchain networks cannot support the transaction volumes needed for mainstream applications like payments, social media, gaming, and enterprise use cases. High fees during network congestion price out small users and limit the types of applications that can be built. The scalability problem directly impacts user experience, as slow confirmations and expensive transactions drive users away from decentralized alternatives. For investors, a blockchain's scalability roadmap is a critical factor in evaluating its long-term potential. Networks that solve scalability while maintaining security and decentralization are positioned to capture the most value as blockchain adoption grows. The ongoing innovation in scaling solutions, from zero-knowledge proofs to data availability layers, represents one of the most active areas of blockchain research and development, with billions of dollars in funding directed at solving this fundamental challenge.
        </p>
      </section>
    </LearnPageLayout>
  );
}
