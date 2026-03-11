import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";

export const metadata: Metadata = {
  title: "TVL Explained: What Total Value Locked Means in DeFi (2026)",
  description: "Learn what Total Value Locked (TVL) means in DeFi, why it matters, how it is calculated, and its limitations as a metric for evaluating DeFi protocols.",
};

export default function TvlExplainedPage() {
  return (
    <LearnPageLayout title="TVL Explained: Total Value Locked" categoryName="DeFi Lending" categorySlug="defi-lending" readTime="7 min"
      intro="Total Value Locked (TVL) is the most widely cited metric in DeFi, representing the total dollar value of assets deposited in a protocol's smart contracts. While TVL is useful for gauging protocol adoption and liquidity depth, it has important limitations that every DeFi user should understand."
      toc={[{ id: "what-is-tvl", title: "What Is TVL?", level: 2 }, { id: "why-it-matters", title: "Why TVL Matters", level: 2 }, { id: "limitations", title: "Limitations of TVL", level: 2 }, { id: "better-metrics", title: "Better Metrics to Consider", level: 2 }]}
      faqs={[
        { question: "Where can I check DeFi TVL?", answer: "DefiLlama is the most popular and comprehensive TVL tracking platform. It tracks TVL across hundreds of protocols and dozens of blockchains, with historical data, chain breakdowns, and double-count adjustments." },
        { question: "Does higher TVL mean a protocol is safer?", answer: "Higher TVL generally indicates more trust and adoption, but it does not guarantee safety. A high-TVL protocol is a larger target for attackers and could still be exploited. TVL should be one of many factors in your risk assessment, not the sole determinant." },
        { question: "Why does TVL fluctuate so much?", answer: "TVL changes due to asset price movements (if ETH drops 20%, ETH-denominated TVL drops accordingly), capital flows in and out of protocols, and changes in incentive programs that attract or repel depositors." },
      ]}
      relatedArticles={[{ title: "What Is DeFi Lending?", href: "/defi-lending/learn/what-is-defi-lending", category: "DeFi Lending" }, { title: "Best DeFi Lending Protocols", href: "/defi-lending/best", category: "DeFi Lending" }]}
    >
      <h2 id="what-is-tvl">What Is TVL?</h2>
      <p>Total Value Locked measures the aggregate dollar value of all crypto assets deposited in a DeFi protocol's smart contracts. For a lending protocol like Aave, TVL includes all supplied assets. For a DEX like Uniswap, TVL includes all liquidity pool deposits. TVL is calculated by multiplying the quantity of each token held by the protocol by its current market price, then summing across all tokens and pools.</p>

      <h2 id="why-it-matters">Why TVL Matters</h2>
      <p>TVL serves as a proxy for protocol adoption, user trust, and liquidity depth. Higher TVL generally means more users trust the protocol with their funds, traders experience less slippage, borrowers have access to deeper liquidity, and the protocol is more likely to sustain operations long-term. TVL trends over time can indicate whether a protocol is growing or declining in relevance.</p>

      <h2 id="limitations">Limitations of TVL</h2>
      <p>TVL has several important limitations. It is heavily influenced by asset prices (a rising market inflates TVL without new deposits), can be artificially boosted through incentive programs that attract mercenary capital, does not account for double-counting across composable protocols, and says nothing about protocol revenue, profitability, or user activity. A protocol with $1 billion in TVL but no trading volume or borrowing activity is less healthy than one with $100 million TVL and high utilization.</p>

      <h2 id="better-metrics">Better Metrics to Consider</h2>
      <p>Alongside TVL, consider protocol revenue (fees generated), utilization rate (percentage of supplied assets being borrowed), unique active users, revenue per dollar of TVL, and the ratio of organic TVL to incentivized TVL. These metrics paint a more complete picture of protocol health and sustainability than TVL alone. DefiLlama and Token Terminal are excellent resources for accessing these additional metrics.</p>
    </LearnPageLayout>
  );
}
