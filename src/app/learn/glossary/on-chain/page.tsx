import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is On-Chain? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what on-chain means, why on-chain data matters, and how on-chain analysis provides insights into blockchain activity.",
};

export default function OnChainPage() {
  return (
    <LearnPageLayout
      title="What Is On-Chain?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="On-chain refers to any activity, transaction, or data that is recorded directly on a blockchain and verified by its consensus mechanism. On-chain data is permanent, transparent, and tamper-resistant. On-chain analysis — examining blockchain data for insights into network health, user behavior, and market trends — has become a major discipline in crypto research and investment analysis."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-on-chain", title: "What Is On-Chain?", level: 2 },
        { id: "what-is-onchain", title: "what-is-onchain", level: 2 },
        { id: "what-lives-on-chain", title: "What Lives On-Chain", level: 2 },
        { id: "onchain-analysis", title: "onchain-analysis", level: 2 },
        { id: "on-chain-analysis", title: "On-Chain Analysis", level: 2 },
        { id: "key-metrics", title: "key-metrics", level: 2 },
        { id: "key-on-chain-metrics", title: "Key On-Chain Metrics", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-on-chain-matters", title: "Why On-Chain Matters", level: 2 }
      ]}
      faqs={[
        {
          question: "Can on-chain data be deleted?",
          answer:
            "No. Once data is recorded on a blockchain and confirmed by the network, it is permanently stored in the ledger. This immutability is a core property of blockchain technology. Even if a smart contract is deactivated, the historical record of all interactions remains accessible on-chain indefinitely.",
        },
        {
          question: "Is on-chain activity anonymous?",
          answer:
            "On-chain activity is pseudonymous, not anonymous. Transactions are linked to addresses, not real identities. However, analytics firms can often connect addresses to identities through exchange deposits, social media disclosures, and transaction pattern analysis. Privacy-focused chains and tools like mixers aim to provide stronger anonymity.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Off-Chain?", href: "/learn/glossary/off-chain", category: "Glossary" },
        { title: "What Is a Block Explorer?", href: "/learn/glossary/block-explorer", category: "Glossary" },
        { title: "What Is Blockchain?", href: "/learn/glossary/blockchain", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is On-Chain?</h2>
      <p>
        On-chain means recorded and verified on a blockchain. When you send Bitcoin, that transaction is on-chain. When a smart contract executes on Ethereum, the state changes are on-chain. On-chain data is the authoritative record of everything that has happened on the network, maintained by thousands of nodes worldwide and secured by the blockchain&apos;s consensus mechanism.
      </p>

      <h2 id="what-is-onchain">What Lives On-Chain</h2>
      <p>
        Transaction records (sender, receiver, amount, timestamp) are on-chain. Smart contract code and state are on-chain. Token balances, NFT ownership records, and DeFi position data are on-chain. Governance votes that occur through smart contracts are on-chain. Essentially, any data that is written to the blockchain&apos;s state through validated transactions is considered on-chain data.
      </p>

      <h2 id="onchain-analysis">On-Chain Analysis</h2>
      <p>
        On-chain analysis is the practice of examining blockchain data to derive insights. Analysts study transaction volumes, active addresses, exchange flows, whale movements, smart contract interactions, and more. Tools like Glassnode, Nansen, and Dune Analytics provide dashboards and metrics that help investors and researchers understand network activity, identify trends, and inform decisions.
      </p>

      <h2 id="key-metrics">Key On-Chain Metrics</h2>
      <p>
        Active addresses measure how many unique addresses transact daily. Exchange netflows track whether crypto is moving onto or off of exchanges (net outflows suggest accumulation). Realized value metrics compare the price at which coins last moved to the current price. DeFi metrics include total value locked (TVL), protocol revenue, and user counts. These metrics provide objective data in a market often driven by narratives.
      </p>

      <h2 id="why-it-matters">Why On-Chain Matters</h2>
      <p>
        On-chain data provides a transparent, verifiable record of economic activity that has no equivalent in traditional finance. Anyone can independently audit the Bitcoin supply, verify DeFi protocol TVL, or trace token flows. This transparency is a fundamental innovation. On-chain analysis has become an indispensable tool for serious crypto investors, researchers, and regulators seeking to understand market dynamics beyond price charts.
      </p>
    </LearnPageLayout>
  );
}
