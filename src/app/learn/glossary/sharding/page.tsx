import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Sharding? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what sharding is, how it improves blockchain scalability, and its role in Ethereum's long-term scaling roadmap.",
};

export default function ShardingPage() {
  return (
    <LearnPageLayout
      title="What Is Sharding?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="Sharding is a database scaling technique adapted for blockchains that splits the network into smaller partitions (shards), each capable of processing transactions independently. Instead of every node processing every transaction, nodes only need to handle the data for their assigned shard. This parallel processing dramatically increases throughput while maintaining decentralization. Sharding is a key component of Ethereum's long-term scaling strategy."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-sharding", title: "What Is Sharding?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-sharding-works", title: "How Sharding Works", level: 2 },
        { id: "danksharding", title: "danksharding", level: 2 },
        { id: "danksharding-and-ethereum", title: "Danksharding and Ethereum", level: 2 },
        { id: "challenges", title: "challenges", level: 2 },
        { id: "challenges", title: "Challenges", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-sharding-matters", title: "Why Sharding Matters", level: 2 }
      ]}
      faqs={[
        {
          question: "Does sharding reduce security?",
          answer:
            "This is a critical concern. If validators are split across shards, each shard has fewer validators and is potentially easier to attack. Solutions include random validator assignment (preventing attackers from concentrating in one shard), frequent reshuffling of validators, and cross-shard communication protocols that allow shards to verify each other's work.",
        },
        {
          question: "When will Ethereum implement sharding?",
          answer:
            "Ethereum's sharding approach has evolved. Rather than execution sharding (splitting computation), Ethereum is pursuing danksharding, which focuses on providing cheap data availability for Layer 2 rollups. Proto-danksharding (EIP-4844) was implemented in 2024, and full danksharding is part of the longer-term roadmap. The focus is on making data cheaper for rollups rather than sharding execution.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Layer 1?", href: "/learn/glossary/layer-1", category: "Glossary" },
        { title: "What Is Layer 2?", href: "/learn/glossary/layer-2", category: "Glossary" },
        { title: "What Is Blockchain?", href: "/learn/glossary/blockchain", category: "Glossary" },
        { title: "What Is a Node?", href: "/learn/glossary/node", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Sharding?</h2>
      <p>
        Sharding divides a blockchain network into multiple parallel chains (shards) that process transactions simultaneously. The concept is borrowed from database management, where sharding distributes data across multiple servers to handle more requests. In blockchain, sharding aims to increase throughput linearly — if you have 64 shards, you can theoretically process 64 times more transactions than a single chain.
      </p>

      <h2 id="how-it-works">How Sharding Works</h2>
      <p>
        In a sharded blockchain, the state and transaction processing are divided across multiple shards. Each shard operates semi-independently with its own subset of validators. A coordination layer (beacon chain in Ethereum) manages communication between shards and ensures the overall network remains consistent. Cross-shard transactions require special protocols to maintain atomicity and prevent double-spending across shard boundaries.
      </p>

      <h2 id="danksharding">Danksharding and Ethereum</h2>
      <p>
        Ethereum&apos;s approach to sharding has evolved from traditional execution sharding to danksharding, which focuses on providing abundant, cheap data space for Layer 2 rollups. Proto-danksharding (EIP-4844, implemented in 2024) introduced &quot;blobs&quot; — large data attachments that rollups use to post transaction data cheaply. Full danksharding will expand this capacity enormously, making rollup transactions even cheaper.
      </p>

      <h2 id="challenges">Challenges</h2>
      <p>
        Sharding introduces significant complexity. Cross-shard communication adds latency and design challenges. Validator assignment must be random and unpredictable to prevent attacks. Data availability across shards must be guaranteed. The interaction between sharding and existing applications must be carefully managed. These challenges explain why sharding has been one of the most difficult problems in blockchain engineering.
      </p>

      <h2 id="why-it-matters">Why Sharding Matters</h2>
      <p>
        Sharding represents one of the most promising approaches to scaling blockchains while preserving decentralization. Unlike simply increasing block size (which raises hardware requirements and centralizes the network), sharding allows more throughput without requiring each node to process everything. Combined with Layer 2 solutions, sharding could eventually support the transaction volumes needed for global-scale decentralized applications.
      </p>
    </LearnPageLayout>
  );
}
