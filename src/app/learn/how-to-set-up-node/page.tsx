import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Set Up a Blockchain Node (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Guide to setting up a blockchain node including hardware requirements, software installation, node types, and maintenance for Ethereum and other networks.",
  keywords: ["blockchain node", "run a node", "Ethereum node", "full node setup", "node requirements", "how to run node"],
};

export default function HowToSetUpNodePage() {
  return (
    <LearnPageLayout title="How to Set Up a Node" categoryName="Crypto Education" categorySlug="learn" readTime="8 min" intro="Running a blockchain node gives you direct, trustless access to blockchain data without relying on third-party providers. Nodes verify transactions independently, contribute to network decentralization, and provide the infrastructure backbone for DeFi applications. This guide covers the practical steps for setting up and maintaining a blockchain node."
      toc={[
        { id: "why-run", title: "why-run", level: 2 },
        { id: "why-run-a-node", title: "Why Run a Node?", level: 2 },
        { id: "types", title: "types", level: 2 },
        { id: "node-types", title: "Node Types", level: 2 },
        { id: "requirements", title: "requirements", level: 2 },
        { id: "hardware-requirements", title: "Hardware Requirements", level: 2 },
        { id: "setup", title: "setup", level: 2 },
        { id: "setup-process", title: "Setup Process", level: 2 },
        { id: "maintenance", title: "maintenance", level: 2 },
        { id: "ongoing-maintenance", title: "Ongoing Maintenance", level: 2 }
      ]}
      faqs={[
        { question: "How much does it cost to run a node?", answer: "Hardware costs range from $500-$2,000 for a dedicated machine. Cloud hosting costs $50-$200+ per month. Storage is the primary ongoing cost — Ethereum full nodes require 1TB+ SSD with growing requirements. Power and internet costs are modest for home setups." },
        { question: "Do I earn rewards for running a node?", answer: "Running a non-validating node does not earn direct rewards but provides trustless blockchain access. To earn rewards on Ethereum, you need to also run a validator (requiring 32 ETH). Some networks do provide rewards for running specific node types like RPC nodes or archive nodes." },
        { question: "Can I run a node on a Raspberry Pi?", answer: "Light nodes and some full nodes can run on a Raspberry Pi 4 or 5 with external SSD storage. Ethereum full nodes are challenging on a Pi due to resource requirements. Dedicated hardware or a mini PC provides a better experience for full nodes on major networks." },
      ]}
      relatedArticles={[
        { title: "What Is a Node?", href: "/learn/what-is-a-node", category: "Learn" },
        { title: "What Is a Validator?", href: "/learn/what-is-a-validator", category: "Learn" },
        { title: "How to Stake Ethereum", href: "/learn/how-to-stake-ethereum", category: "Learn" },
        { title: "What Is Consensus?", href: "/learn/what-is-consensus", category: "Learn" },
      ]}
    >
      <section id="why-run"><h2>Why Run a Node?</h2><p>Running your own node provides trustless blockchain access — you verify all transactions yourself rather than trusting a third-party provider like Infura or Alchemy. This eliminates censorship risk (no provider can block your transactions or queries), improves privacy (your queries are not logged by providers), and contributes to network decentralization by adding an independent verification point.</p><p>Developers benefit from unlimited RPC requests without rate limits, faster local query responses, and the ability to query historical state. Node operators can also provide RPC services to others, potentially earning income. For validators, running your own node rather than relying on third-party infrastructure reduces dependency and improves security.</p></section>
      <section id="types"><h2>Node Types</h2><p>Full nodes store the complete current state and validate all blocks and transactions. Light nodes store only block headers and request specific data as needed, using much less storage. Archive nodes store the complete historical state at every block, requiring multiple terabytes of storage. Most users benefit from running a full node, which provides complete verification with manageable storage requirements.</p><p>On Ethereum, you need both an execution layer client (Geth, Nethermind, Besu, Erigon) and a consensus layer client (Prysm, Lighthouse, Teku, Nimbus, Lodestar). Client diversity is important for network health — running minority clients reduces the risk of a single client bug affecting the majority of the network. Check client distribution and consider running less popular clients to improve diversity.</p></section>
      <section id="requirements"><h2>Hardware Requirements</h2><p>Ethereum full node requirements include: a modern multi-core CPU, 16GB+ RAM, a 2TB+ NVMe SSD (with headroom for growth), and a stable internet connection with at least 25 Mbps and no data caps. Storage is the most critical component — blockchain data grows continuously, and SSDs are essential for the I/O performance needed for sync and validation.</p><p>Other networks have varying requirements. Solana validators need significantly more powerful hardware. Bitcoin full nodes have moderate requirements. Cosmos and other chains vary by network. Check official documentation for current requirements before purchasing hardware. For home setups, a dedicated mini PC or NUC provides a good balance of performance, power efficiency, and noise level.</p></section>
      <section id="setup"><h2>Setup Process</h2><p>For an Ethereum node: install a compatible operating system (Ubuntu Linux recommended), install the execution client and consensus client, generate a JWT secret for client communication, configure both clients with appropriate flags and the shared JWT secret, and start both services. The node will begin syncing from the network — initial sync can take hours to days depending on the sync method and hardware.</p><p>Snap sync (default in Geth) is the fastest sync method, downloading recent state snapshots rather than replaying all historical transactions. After initial sync, the node stays current by processing new blocks in real-time. Configure your firewall to allow required P2P ports and set up monitoring to track sync status, peer connections, and resource utilization.</p></section>
      <section id="maintenance"><h2>Ongoing Maintenance</h2><p>Node maintenance includes keeping client software updated (particularly for network upgrades and security patches), monitoring disk usage (periodically pruning state if needed), ensuring the node stays in sync, and maintaining stable internet connectivity. Set up alerts for sync delays, low peer counts, and disk space warnings. Regular client updates are essential for staying compatible with network upgrades.</p><p>Plan for storage growth — blockchain data increases over time, so ensure you have headroom or a plan to expand storage. Database corruption can occur during power outages, so consider a UPS (uninterruptible power supply) for home setups. Keep backup configurations documented so you can rebuild quickly if needed. The effort of maintaining a node is modest once running — most of the work is in the initial setup and periodic updates.</p></section>
    </LearnPageLayout>
  );
}
