import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `MEV (Maximal Extractable Value) Explained (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what MEV is, how miners and validators extract value from transaction ordering, types of MEV including frontrunning and sandwich attacks, and how to protect yourself.",
};

export default function MEVPage() {
  return (
    <LearnPageLayout
      title="MEV (Maximal Extractable Value)"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="8 min read"
      intro="Maximal Extractable Value (MEV) refers to the profit that block producers (miners or validators) can extract by including, excluding, or reordering transactions within a block. MEV has become one of the most significant issues in blockchain design, affecting transaction costs, fairness, and the user experience. Understanding MEV is critical for any DeFi user because it directly impacts the prices you receive on trades and the costs you pay for transactions."
      toc={[
        { id: "what-is-mev", title: "what-is-mev", level: 2 },
        { id: "what-is-mev", title: "What Is MEV?", level: 2 },
        { id: "types", title: "types", level: 2 },
        { id: "types-of-mev", title: "Types of MEV", level: 2 },
        { id: "impact", title: "impact", level: 2 },
        { id: "impact-on-users", title: "Impact on Users", level: 2 },
        { id: "protection", title: "protection", level: 2 },
        { id: "protecting-against-mev", title: "Protecting Against MEV", level: 2 }
      ]}
      faqs={[
        { question: "How much MEV is extracted daily?", answer: "MEV extraction on Ethereum alone amounts to millions of dollars daily. The total value extracted has exceeded billions cumulatively since DeFi's growth. This represents a hidden tax on DeFi users whose transactions are frontrun, sandwiched, or otherwise exploited by MEV searchers and block producers." },
        { question: "Is MEV extraction illegal?", answer: "MEV extraction exists in a legal gray area. It is not currently illegal as it operates within the technical rules of blockchain protocols. However, some forms like sandwich attacks are considered unethical by the community. Regulatory frameworks for MEV have not been established, though the comparison to traditional market front-running raises legal questions." },
      ]}
      relatedArticles={[
        { title: "Front-Running", href: "/learn/glossary/front-running", category: "Glossary" },
        { title: "Sandwich Attack", href: "/learn/glossary/sandwich-attack", category: "Glossary" },
        { title: "Gas", href: "/learn/glossary/gas", category: "Glossary" },
      ]}
    >
      <section id="what-is-mev">
        <h2>What Is MEV?</h2>
        <p>MEV is the maximum value that can be extracted from block production beyond the standard block reward and gas fees by manipulating the order of transactions. Block producers have the power to decide which transactions to include and in what order. This ordering power creates profit opportunities, especially in DeFi where the sequence of transactions affects prices on decentralized exchanges. MEV was originally called Miner Extractable Value but was renamed to Maximal Extractable Value after Ethereum moved to proof of stake.</p>
      </section>

      <section id="types">
        <h2>Types of MEV</h2>
        <p>Front-running involves detecting a pending profitable transaction and inserting a transaction ahead of it. Back-running places a transaction immediately after a large trade to capture the price impact. Sandwich attacks combine both, placing transactions before and after a victim trade. Liquidation MEV extracts profit from triggering DeFi lending liquidations. Arbitrage MEV captures price differences across DEXs. Each type exploits the transparency of the mempool where pending transactions are visible before being included in blocks.</p>
      </section>

      <section id="impact">
        <h2>Impact on Users</h2>
        <p>MEV acts as an invisible tax on DeFi users. Sandwich attacks cause traders to receive worse prices than they should. Front-running increases gas costs as MEV bots compete to be first. Network congestion from MEV activity raises transaction costs for everyone. In some cases, MEV extraction can destabilize consensus mechanisms when the value extractable from reorganizing blocks exceeds the block reward. The cumulative impact discourages retail participation and reduces the efficiency of decentralized markets.</p>
      </section>

      <section id="protection">
        <h2>Protecting Against MEV</h2>
        <p>Use private transaction services like Flashbots Protect or MEV Blocker that route transactions directly to block builders, bypassing the public mempool. Set tighter slippage tolerances on DEX trades to make sandwich attacks unprofitable. Use limit orders instead of market orders when possible. Split large trades into smaller amounts over time. Some DEX aggregators offer MEV-protection features. On a protocol level, solutions like encrypted mempools, fair ordering services, and MEV redistribution mechanisms are being developed to address the problem systematically.</p>
      </section>
    </LearnPageLayout>
  );
}
