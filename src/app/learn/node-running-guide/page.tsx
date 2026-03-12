import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Run a Blockchain Node (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn how to run a blockchain node, the hardware requirements, different node types, and why running your own node contributes to network decentralization.",
};

export default function NodeRunningGuidePage() {
  return (
    <LearnPageLayout
      title="How to Run a Blockchain Node"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="10 min read"
      intro="Running a blockchain node means operating software that maintains a copy of the blockchain, validates transactions, and participates in the network's peer-to-peer communication. Node operators are the backbone of decentralized networks, ensuring that no single entity controls the truth of the blockchain. Whether you want to contribute to decentralization, verify your own transactions, or prepare to become a validator, this guide covers everything you need to know about running a node."
      toc={[
        { id: "why-run-a-node", title: "why-run-a-node", level: 2 },
        { id: "why-run-a-node", title: "Why Run a Node?", level: 2 },
        { id: "node-types", title: "node-types", level: 2 },
        { id: "types-of-nodes", title: "Types of Nodes", level: 2 },
        { id: "hardware-requirements", title: "hardware-requirements", level: 2 },
        { id: "hardware-requirements", title: "Hardware Requirements", level: 2 },
        { id: "setup-guide", title: "setup-guide", level: 2 },
        { id: "setting-up-your-node", title: "Setting Up Your Node", level: 2 }
      ]}
      faqs={[
        {
          question: "Do I earn money by running a node?",
          answer:
            "Running a basic full node does not earn rewards on most networks. You need to run a validator node and stake tokens to earn rewards. However, some DePIN and infrastructure networks do reward node operators. Running an RPC node and selling API access is another way to monetize, though it requires significant infrastructure investment.",
        },
        {
          question: "How much does it cost to run a node?",
          answer:
            "Costs vary widely by network. An Ethereum full node can run on a $500-1,000 computer with 2TB SSD. Solana requires enterprise-grade hardware costing $3,000-5,000. Cloud hosting ranges from $50-500/month depending on the chain. Electricity and internet costs add $20-50/month for home setups.",
        },
        {
          question: "Can I run a node on a Raspberry Pi?",
          answer:
            "For some lighter blockchains, yes. Bitcoin and some Cosmos chains can run on a Raspberry Pi 4 with an external SSD. Ethereum full nodes can technically run on a Pi but perform poorly. Most modern chains require more powerful hardware. Dedicated mini-PCs like Intel NUC offer a better balance of cost and performance for home node operation.",
        },
      ]}
      relatedArticles={[
        { title: "Validator Guide", href: "/learn/validator-guide", category: "Learn Crypto" },
        { title: "What Is Staking?", href: "/learn/what-is-staking", category: "Learn Crypto" },
        { title: "What Is Mining?", href: "/learn/what-is-mining", category: "Learn Crypto" },
        { title: "Consensus Mechanisms", href: "/learn/consensus-mechanisms", category: "Learn Crypto" },
      ]}
    >
      <section id="why-run-a-node">
        <h2>Why Run a Node?</h2>
        <p>
          Running your own node provides the highest level of trust and privacy when interacting with a blockchain. Instead of relying on third-party RPC providers like Infura or Alchemy, your transactions and queries go directly through your own verified copy of the blockchain. This eliminates the risk of censorship, data collection, or inaccurate responses from intermediaries. For serious crypto users, self-sovereignty includes verifying the chain yourself.
        </p>
        <p>
          Node running also contributes to network decentralization. The more independently operated nodes a network has, the harder it is for any entity to censor transactions or manipulate the blockchain state. Some networks reward node operators through airdrops or special allocations, recognizing their contribution to decentralization. Running a node is also a prerequisite for becoming a validator on proof-of-stake networks.
        </p>
      </section>

      <section id="node-types">
        <h2>Types of Nodes</h2>
        <p>
          Full nodes download and verify the entire blockchain history, maintaining the complete current state. They can independently validate every transaction without trusting anyone. Light nodes only download block headers and request specific data on demand, requiring less storage but more trust in full nodes for some data. Archive nodes store every historical state, not just the current one, and are used by block explorers and analytics services.
        </p>
        <p>
          Validator nodes are full nodes that also participate in consensus by proposing and attesting to blocks. They require staked tokens and must maintain high uptime. RPC nodes serve API requests from wallets and dApps, acting as the interface between users and the blockchain. Relay nodes help propagate transactions and blocks across the peer-to-peer network without necessarily storing the full state.
        </p>
      </section>

      <section id="hardware-requirements">
        <h2>Hardware Requirements</h2>
        <p>
          Ethereum full nodes require a multi-core CPU (4+ cores), 16GB RAM, 2TB NVMe SSD, and a stable 25+ Mbps internet connection. The entire Ethereum state is around 1TB and growing. Bitcoin full nodes are lighter, needing around 600GB of storage. Solana validators require high-end hardware: 24+ cores, 256GB RAM, and fast NVMe storage due to the chain&apos;s high throughput.
        </p>
        <p>
          For home setups, dedicated mini-PCs or repurposed desktops work well for Ethereum and Cosmos chains. Avoid running nodes on computers you use daily, as the constant disk I/O and network usage can impact performance. Cloud providers like Hetzner, OVH, and AWS offer suitable server configurations, though costs add up over time. Many operators start on cloud infrastructure and migrate to dedicated hardware once they are comfortable with operations.
        </p>
      </section>

      <section id="setup-guide">
        <h2>Setting Up Your Node</h2>
        <p>
          The general setup process involves installing an operating system (Ubuntu is the most common choice), downloading the node client software, configuring network ports, and syncing the blockchain. For Ethereum, you need both an execution client (Geth, Nethermind, or Besu) and a consensus client (Prysm, Lighthouse, or Teku). Initial sync can take hours to days depending on the chain and your hardware.
        </p>
        <p>
          Use checkpoint sync when available to dramatically reduce initial sync time. Configure monitoring tools like Grafana and Prometheus to track node health, disk usage, and peer connections. Set up automatic updates for security patches but review major version upgrades carefully before applying them. Join the node operator community for your chosen network, as they provide invaluable support for troubleshooting issues and staying informed about network changes.
        </p>
      </section>
    </LearnPageLayout>
  );
}
