import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is TVL (Total Value Locked)? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what TVL means in DeFi, how it is calculated, why it matters, and how to use TVL as a metric for evaluating protocols.",
};

export default function TvlPage() {
  return (
    <LearnPageLayout title="What Is TVL (Total Value Locked)?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="Total Value Locked (TVL) is the total amount of assets deposited in a DeFi protocol, measured in US dollars. TVL is the most widely used metric for gauging the size and adoption of DeFi protocols, representing the capital that users have entrusted to smart contracts. Higher TVL generally indicates greater user trust and utility, though it should be analyzed alongside other metrics for a complete picture."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-tvl", title: "What Is TVL?", level: 2 },
        { id: "how-calculated", title: "how-calculated", level: 2 },
        { id: "how-tvl-is-calculated", title: "How TVL Is Calculated", level: 2 },
        { id: "using-tvl", title: "using-tvl", level: 2 },
        { id: "using-tvl-for-analysis", title: "Using TVL for Analysis", level: 2 },
        { id: "limitations", title: "limitations", level: 2 },
        { id: "limitations-of-tvl", title: "Limitations of TVL", level: 2 }
      ]}
      faqs={[{ question: "What is a good TVL for a DeFi protocol?", answer: "There is no universal standard. Major protocols like Aave and Lido have TVLs exceeding $10 billion. Mid-tier protocols range from $100M to $1B. New but promising protocols may have $10-100M. Compare TVL within the same protocol category and consider the ratio of TVL to market cap for valuation context." },
        { question: "Can TVL be manipulated?", answer: "Yes. Projects can inflate TVL through token incentives that attract mercenary capital, recursive deposits, or counting the same assets multiple times across layers. Always examine where the TVL comes from and whether it would remain if incentives were removed. Organic TVL backed by genuine usage is more valuable than incentivized TVL." }]}
      relatedArticles={[{ title: "What Is DeFi?", href: "/learn/what-is-defi", category: "Learn Crypto" }, { title: "Yield", href: "/learn/glossary/yield", category: "Glossary" }, { title: "Pool", href: "/learn/glossary/pool", category: "Glossary" }, { title: "Vault", href: "/learn/glossary/vault", category: "Glossary" }]}
    >
      <h2 id="definition">What Is TVL?</h2>
      <p>TVL measures the total value of cryptocurrency assets deposited into a DeFi protocol&apos;s smart contracts. When you deposit ETH into Aave for lending, or provide liquidity to a Uniswap pool, those assets count toward the protocol&apos;s TVL. The metric is typically displayed in USD terms, fluctuating both with deposit and withdrawal activity and with price changes of the underlying assets. DefiLlama is the most widely used TVL tracking platform.</p>

      <h2 id="how-calculated">How TVL Is Calculated</h2>
      <p>TVL is calculated by summing the USD value of all tokens held in a protocol&apos;s smart contracts at a given time. For a lending protocol, this includes both deposited collateral and supplied lending capital. For a DEX, it includes all tokens in liquidity pools. Some trackers count staked governance tokens, while others do not. Double-counting can occur when receipt tokens from one protocol are deposited into another, which is why some trackers distinguish between TVL and adjusted TVL.</p>

      <h2 id="using-tvl">Using TVL for Analysis</h2>
      <p>TVL is most useful for comparing protocols within the same category. A lending protocol with $5B TVL is likely more trusted than one with $50M. The TVL-to-market-cap ratio helps identify potential over or undervaluation. Protocols where TVL significantly exceeds market cap may be undervalued, while those where market cap far exceeds TVL may be overvalued. Tracking TVL trends over time reveals whether a protocol is gaining or losing user traction.</p>

      <h2 id="limitations">Limitations of TVL</h2>
      <p>TVL has significant limitations as a standalone metric. It does not measure revenue, user count, or transaction activity. A protocol can have high TVL from a few whale depositors while having minimal actual usage. Token price fluctuations change TVL without any new deposits. Incentivized TVL through high token emissions may disappear when rewards end. Always combine TVL with revenue, user count, and transaction metrics for a complete analysis of protocol health.</p>
    </LearnPageLayout>
  );
}
