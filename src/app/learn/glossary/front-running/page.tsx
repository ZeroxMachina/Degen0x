import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Front-Running in Crypto Explained (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what front-running is in crypto, how bots detect and exploit pending transactions, the impact on DeFi traders, and strategies to protect your trades.",
};

export default function FrontRunningPage() {
  return (
    <LearnPageLayout
      title="Front-Running"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="6 min read"
      intro="Front-running in crypto occurs when an entity detects a pending transaction in the mempool and submits their own transaction ahead of it with a higher gas price to profit from the anticipated price impact. This practice exploits the transparency of blockchain mempools where pending transactions are visible before confirmation. Front-running is a major component of MEV extraction and directly harms DeFi users by worsening their trade execution prices."
      toc={[
        { id: "what-is-frontrunning", title: "What Is Front-Running?", level: 2 },
        { id: "how-it-works", title: "How Front-Running Works", level: 2 },
        { id: "impact", title: "Impact on Traders", level: 2 },
        { id: "protection", title: "How to Protect Yourself", level: 2 },
      ]}
      faqs={[
        { question: "Is front-running the same as insider trading?", answer: "They are related but different. Traditional front-running involves trading ahead of known client orders based on privileged information. In crypto, front-running exploits the public mempool where anyone can see pending transactions. While the mechanism differs, the effect is similar: the front-runner profits at the expense of the original trader." },
        { question: "Can front-running be stopped completely?", answer: "Complete elimination is difficult because transaction ordering is inherent to blockchain design. However, solutions like encrypted mempools, private transaction pools, and fair ordering protocols can significantly reduce front-running. User-level protections like using Flashbots or setting tight slippage can minimize individual exposure." },
      ]}
      relatedArticles={[
        { title: "MEV", href: "/learn/glossary/mev", category: "Glossary" },
        { title: "Sandwich Attack", href: "/learn/glossary/sandwich-attack", category: "Glossary" },
        { title: "Mempool", href: "/learn/glossary/mempool", category: "Glossary" },
      ]}
    >
      <section id="what-is-frontrunning">
        <h2>What Is Front-Running?</h2>
        <p>Front-running is the practice of executing a transaction ahead of a known pending transaction to profit from its expected price impact. In traditional finance, front-running is illegal because brokers trade before their clients. In crypto, the public mempool allows anyone to see unconfirmed transactions, creating a transparent but exploitable environment. Automated bots continuously monitor the mempool for profitable front-running opportunities and can execute within milliseconds of detecting a target transaction.</p>
      </section>

      <section id="how-it-works">
        <h2>How Front-Running Works</h2>
        <p>When a user submits a large buy order on a DEX, it appears in the mempool before being confirmed. A front-running bot detects this transaction, calculates the expected price impact, and submits its own buy transaction with a higher gas fee to be included in the block first. The bot buys before the victim, pushing the price up. The victim trade then executes at a worse price. The front-runner may then sell immediately after the victim trade for a profit. This entire process happens within a single block.</p>
      </section>

      <section id="impact">
        <h2>Impact on Traders</h2>
        <p>Front-running directly increases the cost of trading on DEXs. Traders receive fewer tokens for their purchases and less value for their sales than they would without front-running interference. The gas war between competing front-running bots also increases network congestion and transaction costs for all users. Studies estimate that DeFi users lose millions of dollars weekly to front-running and related MEV extraction. This hidden cost disproportionately affects larger trades and can make certain trades uneconomical.</p>
      </section>

      <section id="protection">
        <h2>How to Protect Yourself</h2>
        <p>Route transactions through private mempools using services like Flashbots Protect, which prevent your transactions from being visible to front-runners. Set tight slippage tolerances so front-running your trade becomes unprofitable. Break large trades into smaller pieces across multiple blocks. Use DEXs with built-in MEV protection or batch auction mechanisms that prevent front-running by design. Consider using limit orders instead of market orders on platforms that support them. On newer chains with faster block times, front-running is less profitable but not eliminated.</p>
      </section>
    </LearnPageLayout>
  );
}
