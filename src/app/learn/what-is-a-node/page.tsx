import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Node? Blockchain Nodes Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what blockchain nodes are, types of nodes including full nodes and light nodes, why running a node matters for decentralization, and how to set up your own node.",
  keywords: ["blockchain node", "full node", "light node", "running a node", "node operator", "decentralization"],
};

export default function WhatIsANodePage() {
  return (
    <LearnPageLayout
      title="What Is a Node? Blockchain Nodes Explained"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="7 min"
      intro="A node is a computer that runs blockchain software, maintaining a copy of the ledger and participating in the network's operation. Nodes are the fundamental infrastructure of any blockchain — they validate transactions, relay data between peers, store the blockchain's history, and collectively ensure that no single entity can control or censor the network."
      toc={[
        { id: "what-are-nodes", title: "what-are-nodes", level: 2 },
        { id: "what-are-nodes", title: "What Are Nodes", level: 2 },
        { id: "types", title: "types", level: 2 },
        { id: "types-of-nodes", title: "Types of Nodes", level: 2 },
        { id: "why-run", title: "why-run", level: 2 },
        { id: "why-run-a-node", title: "Why Run a Node", level: 2 },
        { id: "node-requirements", title: "node-requirements", level: 2 },
        { id: "node-requirements", title: "Node Requirements", level: 2 },
        { id: "node-providers", title: "node-providers", level: 2 },
        { id: "node-providers", title: "Node Providers", level: 2 }
      ]}
      faqs={[
        { question: "Do I need to run a node to use crypto?", answer: "No. Most users interact with blockchains through wallets and applications that connect to nodes operated by infrastructure providers like Infura or Alchemy. Running your own node provides maximum privacy and trustlessness but is not required for everyday use." },
        { question: "How much does it cost to run a node?", answer: "Running an Ethereum full node requires a computer with at least 16GB RAM, a multi-core processor, 2TB+ SSD storage, and a reliable internet connection. The hardware cost is typically a few hundred to a few thousand dollars, plus ongoing electricity and internet costs." },
        { question: "What is the difference between a node and a validator?", answer: "All validators are nodes, but not all nodes are validators. A node maintains a copy of the blockchain and validates transactions. A validator additionally participates in consensus by staking tokens and proposing/attesting to blocks. You can run a non-validating node for privacy and verification benefits without staking." },
      ]}
      relatedArticles={[
        { title: "What Is a Validator?", href: "/learn/what-is-a-validator", category: "Learn" },
        { title: "How to Set Up a Node", href: "/learn/how-to-set-up-node", category: "Learn" },
        { title: "What Is Decentralization?", href: "/learn/glossary/decentralization", category: "Learn" },
        { title: "What Is Consensus?", href: "/learn/what-is-consensus", category: "Learn" },
      ]}
    >
      <section id="what-are-nodes">
        <h2>What Are Nodes</h2>
        <p>
          Every blockchain network consists of a distributed collection of nodes — computers running the blockchain's client software. Each node independently downloads, verifies, and stores a copy of the blockchain's transaction history and current state. When a new block is produced, nodes verify every transaction within it against the protocol's rules before accepting it. This independent verification by thousands of nodes is what makes blockchains trustless — you do not need to trust any single participant because every node checks every transaction.
        </p>
        <p>
          Nodes communicate with each other through a peer-to-peer network, sharing new transactions and blocks as they appear. When you submit a transaction through your wallet, it propagates through the node network until it reaches a block producer who includes it in a block. The block then propagates back through the network, with each node independently verifying and storing it. This distributed architecture means there is no central server that can be taken down, censored, or compromised.
        </p>
      </section>

      <section id="types">
        <h2>Types of Nodes</h2>
        <p>
          Full nodes download and verify every block and transaction since the blockchain's genesis, maintaining a complete copy of the current state. They provide the highest level of security and trustlessness, as they independently verify everything without relying on any third party. Archive nodes are full nodes that additionally store every historical state, enabling queries about past balances and contract states at any block height — these require significantly more storage (multiple terabytes for Ethereum).
        </p>
        <p>
          Light nodes (also called light clients) download only block headers and request specific data from full nodes as needed. They sacrifice some trustlessness for dramatically lower resource requirements, making them suitable for mobile devices and resource-constrained environments. Pruned nodes store only recent state data, discarding old historical data to reduce storage requirements while still fully validating new blocks. Each node type makes different trade-offs between resource requirements and the level of independent verification provided.
        </p>
      </section>

      <section id="why-run">
        <h2>Why Run a Node</h2>
        <p>
          Running your own node provides maximum privacy, trustlessness, and censorship resistance. When you use a third-party node provider, your wallet queries their servers for blockchain data, potentially exposing your addresses and transaction patterns. With your own node, all queries stay local — no one can see what addresses you are checking or what transactions you are preparing. Your node also provides the strongest guarantee that the data you receive is accurate and uncensored.
        </p>
        <p>
          Running nodes also strengthens the overall network. More independently operated nodes means more geographic, jurisdictional, and operational diversity, making the network more resilient against targeted attacks, government takedowns, or infrastructure failures. Node operators are the foundation of blockchain decentralization, and the community benefits from having as many independent node operators as possible, even if each individual node operator may not see a direct financial return.
        </p>
      </section>

      <section id="node-requirements">
        <h2>Node Requirements</h2>
        <p>
          Ethereum full node requirements include a modern multi-core processor, at least 16GB of RAM (32GB recommended), a fast NVMe SSD with at least 2TB of storage, and a broadband internet connection with at least 25Mbps bandwidth and no data caps. The initial blockchain sync can take several hours to days depending on hardware and network speed. Ongoing requirements include keeping the software updated and ensuring consistent uptime.
        </p>
        <p>
          Other blockchains have varying requirements. Bitcoin full nodes are lighter, requiring around 1TB of storage and modest processing power. Solana validators need significantly more powerful hardware to handle high transaction throughput. The trend across the industry is toward reducing node requirements through statelessness, state expiry, and other efficiency improvements that make running nodes more accessible to a broader range of participants.
        </p>
      </section>

      <section id="node-providers">
        <h2>Node Providers</h2>
        <p>
          For users and developers who do not want to run their own nodes, infrastructure providers like Infura, Alchemy, QuickNode, and Ankr operate large fleets of nodes and provide API access. These services handle the operational complexity of node management and offer high availability, low latency, and additional developer tools. Most wallets and decentralized applications connect to the blockchain through these providers.
        </p>
        <p>
          The reliance on centralized node providers is a known tension in the blockchain ecosystem. If a major provider experiences an outage or decides to censor certain transactions, applications dependent on it could be affected. Decentralized node networks like Pocket Network and Lava Protocol aim to address this by creating incentive-compatible networks of independent node operators, providing the convenience of a managed service with the resilience of decentralization.
        </p>
      </section>
    </LearnPageLayout>
  );
}
