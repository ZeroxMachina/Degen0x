import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Node? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what blockchain nodes are, the different types of nodes, and why they are essential for network decentralization.",
};

export default function NodePage() {
  return (
    <LearnPageLayout
      title="What Is a Node?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A node is a computer that runs blockchain software and participates in the network by validating, relaying, and storing transaction data. Nodes are the infrastructure of any blockchain — they enforce the protocol rules, maintain copies of the ledger, and ensure the network operates correctly. The more nodes a blockchain has, the more decentralized and resilient it becomes."
      toc={[
        { id: "definition", title: "What Is a Node?", level: 2 },
        { id: "types", title: "Types of Nodes", level: 2 },
        { id: "running-a-node", title: "Running a Node", level: 2 },
        { id: "node-incentives", title: "Node Incentives", level: 2 },
        { id: "why-it-matters", title: "Why Nodes Matter", level: 2 },
      ]}
      faqs={[
        {
          question: "Do I need to run a node to use cryptocurrency?",
          answer:
            "No. Most users interact with blockchains through wallets and applications that connect to nodes run by others (like Infura or Alchemy for Ethereum). However, running your own node gives you the highest level of privacy and trust minimization — you verify everything yourself rather than relying on a third party.",
        },
        {
          question: "Is running a node the same as mining?",
          answer:
            "No. A node validates and stores data but does not necessarily mine or produce blocks. Mining (PoW) and validating (PoS) are specific roles that build on top of basic node functionality. All miners and validators run nodes, but not all nodes mine or validate. A non-mining full node still contributes by verifying transactions and relaying data.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Blockchain?", href: "/learn/glossary/blockchain", category: "Glossary" },
        { title: "What Is Decentralization?", href: "/learn/glossary/decentralization", category: "Glossary" },
        { title: "What Is Consensus?", href: "/learn/glossary/consensus", category: "Glossary" },
        { title: "What Is Peer-to-Peer?", href: "/learn/glossary/peer-to-peer", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Node?</h2>
      <p>
        A node is any computer that connects to a blockchain network and maintains a copy of the ledger. Nodes communicate with each other in a peer-to-peer fashion, sharing new transactions and blocks. Each node independently verifies that transactions and blocks follow the protocol rules. This distributed verification is what makes blockchains trustless — no single node needs to be trusted because every node checks everything.
      </p>

      <h2 id="types">Types of Nodes</h2>
      <p>
        Full nodes store the entire blockchain history and validate every transaction and block. Light nodes (or SPV nodes) store only block headers and verify transactions using Merkle proofs, requiring less storage and bandwidth. Archive nodes store all historical state data, enabling queries about any past point in time. Validator nodes (in PoS) or mining nodes (in PoW) actively participate in block production.
      </p>

      <h2 id="running-a-node">Running a Node</h2>
      <p>
        Running a Bitcoin full node requires downloading the entire blockchain (hundreds of gigabytes) and maintaining sufficient storage, bandwidth, and uptime. Ethereum full nodes need more powerful hardware due to state management. The process involves installing client software (like Bitcoin Core, Geth, or Nethermind), syncing with the network, and keeping the software updated. Cloud services and dedicated hardware simplify the process.
      </p>

      <h2 id="node-incentives">Node Incentives</h2>
      <p>
        In Bitcoin, running a non-mining node has no direct financial reward — operators do it for privacy, security, and to support the network. In proof-of-stake networks, validator nodes earn staking rewards for producing blocks and attesting to the chain. Some networks offer rewards for running specific types of infrastructure nodes. The economic sustainability of node operation is a critical design consideration for any blockchain.
      </p>

      <h2 id="why-it-matters">Why Nodes Matter</h2>
      <p>
        Nodes are the foundation of decentralization. A blockchain with only a few nodes controlled by a small group is effectively centralized, regardless of its consensus mechanism. More nodes mean more independent verification, greater censorship resistance, and higher fault tolerance. The ease and cost of running a node directly affects how decentralized a blockchain can be in practice.
      </p>
    </LearnPageLayout>
  );
}
