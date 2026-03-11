import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Off-Chain? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what off-chain means, how off-chain activity relates to blockchain, and why it matters for scalability and privacy.",
};

export default function OffChainPage() {
  return (
    <LearnPageLayout
      title="What Is Off-Chain?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="4 min"
      intro="Off-chain refers to any activity, data, or transaction that occurs outside of the main blockchain. Off-chain processes can include everything from Layer 2 transaction execution to storing NFT metadata on IPFS to performing computations that are later settled on-chain. Off-chain solutions are essential for scaling blockchain technology beyond its inherent throughput limitations while maintaining security through periodic on-chain settlement."
      toc={[
        { id: "definition", title: "What Is Off-Chain?", level: 2 },
        { id: "examples", title: "Examples of Off-Chain Activity", level: 2 },
        { id: "off-vs-on", title: "Off-Chain vs On-Chain", level: 2 },
        { id: "trade-offs", title: "Trade-Offs", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
      ]}
      faqs={[
        {
          question: "Is off-chain data less secure than on-chain data?",
          answer:
            "Generally, yes. On-chain data benefits from the full security of the blockchain's consensus mechanism. Off-chain data relies on the security of wherever it is stored — IPFS, centralized servers, or other systems. However, well-designed off-chain solutions like rollups can achieve near on-chain security by periodically anchoring their state to the main chain.",
        },
        {
          question: "Why not keep everything on-chain?",
          answer:
            "Storing and processing everything on-chain is prohibitively expensive and slow. Blockchain block space is a scarce resource. Storing 1 GB on Ethereum would cost millions of dollars. Off-chain solutions allow most activity to happen cheaply and quickly, with only the essential verification data posted on-chain, dramatically improving scalability and affordability.",
        },
      ]}
      relatedArticles={[
        { title: "What Is On-Chain?", href: "/learn/glossary/on-chain", category: "Glossary" },
        { title: "What Is Layer 2?", href: "/learn/glossary/layer-2", category: "Glossary" },
        { title: "What Is an Oracle?", href: "/learn/glossary/oracle", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Off-Chain?</h2>
      <p>
        Off-chain describes anything that happens outside the blockchain&apos;s consensus layer. Transactions processed on a Layer 2 rollup before being batched and settled on Layer 1 are off-chain during their execution phase. NFT artwork stored on IPFS is off-chain data. Price feeds from external sources are off-chain data brought on-chain by oracles. The term distinguishes activities recorded on the blockchain from those that are not.
      </p>

      <h2 id="examples">Examples of Off-Chain Activity</h2>
      <p>
        Layer 2 solutions execute transactions off-chain for speed and cost savings. NFT metadata and media files are typically stored off-chain. Governance discussions and voting on platforms like Snapshot happen off-chain. Order books on centralized exchanges are off-chain. Crypto payments through the Lightning Network process off-chain with only opening and closing channels settled on Bitcoin&apos;s main chain.
      </p>

      <h2 id="off-vs-on">Off-Chain vs On-Chain</h2>
      <p>
        On-chain activity is recorded permanently in the blockchain ledger, verified by all nodes, and secured by the consensus mechanism. Off-chain activity relies on external systems, which may be centralized or decentralized. The key design question for any blockchain application is what must be on-chain (for security and verifiability) versus what can be off-chain (for efficiency and cost savings).
      </p>

      <h2 id="trade-offs">Trade-Offs</h2>
      <p>
        Off-chain solutions offer higher throughput, lower costs, and greater privacy. However, they introduce additional trust assumptions: you must trust the off-chain system to behave correctly. If an NFT&apos;s metadata server goes down, the NFT loses its content. If a Layer 2 sequencer goes offline, transactions may be delayed. The best designs minimize trust assumptions while maximizing off-chain efficiency.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        Understanding the off-chain vs on-chain distinction is critical for evaluating the security and reliability of any crypto application. When your NFT metadata is stored on a centralized server, that server is a single point of failure. When your DeFi position is managed by an off-chain keeper, you depend on that keeper&apos;s reliability. Knowing where data and computation live helps you assess the real risks of any protocol.
      </p>
    </LearnPageLayout>
  );
}
