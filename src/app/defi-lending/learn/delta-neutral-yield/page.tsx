import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Delta-Neutral Yield Strategies (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn delta-neutral yield strategies in DeFi. Understand how to hedge price exposure while capturing yields from funding rates, basis trades, and LP positions.",
  keywords: ["delta neutral", "DeFi hedging", "market neutral yield", "delta neutral farming"],
};

export default function DeltaNeutralYieldPage() {
  return (
    <LearnPageLayout
      title="Delta-Neutral Yield Strategies"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="12 min"
      intro="Delta-neutral strategies aim to capture DeFi yields while hedging away price exposure, allowing you to earn returns regardless of whether crypto prices go up or down. By combining long and short positions or using derivatives to offset spot exposure, these strategies isolate the yield component from price risk. This guide explains the mechanics, popular implementations, and practical challenges of maintaining delta neutrality in DeFi."
      toc={[
        { id: "concept", title: "What Is Delta Neutrality?", level: 2 },
        { id: "strategies", title: "Popular Delta-Neutral Strategies", level: 2 },
        { id: "implementation", title: "Implementation Approaches", level: 2 },
        { id: "challenges", title: "Challenges & Limitations", level: 2 },
      ]}
      faqs={[
        { question: "Is delta-neutral farming truly risk-free?", answer: "No. While delta-neutral strategies hedge price risk, they still carry smart contract risk, liquidation risk on the short leg, funding rate changes, and execution risk from imperfect hedging. They are lower risk than unhedged strategies but not risk-free." },
        { question: "What yields can delta-neutral strategies achieve?", answer: "Typical yields range from 5-20% APY depending on market conditions, funding rates, and the specific strategy. Yields are highest during bull markets when funding rates are consistently positive." },
        { question: "How much capital do I need?", answer: "Delta-neutral strategies require sufficient capital to maintain both long and short legs efficiently. On L2s, $1,000+ is practical. On Ethereum mainnet, $5,000+ is recommended to justify gas costs for position management." },
      ]}
      relatedArticles={[
        { title: "Basis Trade Yield", href: "/defi-lending/learn/basis-trade-yield", category: "DeFi Lending" },
        { title: "Leveraged Yield Farming", href: "/defi-lending/learn/leveraged-yield-farming", category: "DeFi Lending" },
        { title: "Yield Risk Assessment", href: "/defi-lending/learn/yield-risk-assessment", category: "DeFi Lending" },
      ]}
    >
      <section id="concept">
        <h2>What Is Delta Neutrality?</h2>
        <p>Delta measures the sensitivity of a position to price changes in the underlying asset. A delta-neutral position has approximately zero net delta, meaning it does not gain or lose value when the asset price moves. In DeFi, this is achieved by combining a long position (holding or depositing the asset) with an offsetting short position (through perpetual futures, borrowing, or options). The goal is to capture yields from the long position (staking, lending, LP fees) while the short position cancels out the price exposure. For example, you might deposit ETH into a lending protocol to earn interest while simultaneously shorting ETH on a perpetual DEX. If ETH rises, your lending position gains value but your short loses equally. If ETH falls, the opposite occurs. The net result is approximately zero price exposure while earning lending yield minus shorting costs.</p>
      </section>
      <section id="strategies">
        <h2>Popular Delta-Neutral Strategies</h2>
        <p>The most common delta-neutral strategy is the funding rate harvest: hold spot crypto and short the same amount on a perpetual futures exchange. When funding rates are positive (which they usually are during bullish markets), short sellers receive periodic payments from long traders. Combined with spot staking or lending yield, this can produce attractive risk-adjusted returns. LP delta-neutral strategies deposit into DEX pools while hedging the non-stable asset with a short position. This captures trading fees while neutralizing price exposure on the volatile asset. Basis trade strategies exploit the difference between spot and futures prices, going long spot and short futures to capture the premium as it converges to zero at expiry. Each strategy has different mechanics but shares the goal of isolating yield from directional price risk.</p>
      </section>
      <section id="implementation">
        <h2>Implementation Approaches</h2>
        <p>Implementing delta-neutral strategies in DeFi requires coordinating across multiple protocols. A typical funding rate strategy involves depositing ETH as collateral on a lending protocol, borrowing stablecoins, and opening a short perpetual position on a DEX like GMX, dYdX, or Drift. The ETH collateral earns staking or lending yield while the short position earns funding payments. Maintaining delta neutrality requires periodic rebalancing as prices move, since the spot and short positions may diverge over time. Some protocols are building automated delta-neutral vaults that handle the hedging and rebalancing automatically, reducing the operational complexity. On Solana, Drift Protocol's composability between lending and perpetual futures enables efficient delta-neutral implementation within a single platform.</p>
      </section>
      <section id="challenges">
        <h2>Challenges and Limitations</h2>
        <p>Delta-neutral strategies face several practical challenges. Funding rates can turn negative during bear markets, converting the short leg from a yield source into a cost. This can make the overall strategy unprofitable during extended downtrends. Rebalancing costs from frequent position adjustments eat into returns, particularly on Ethereum mainnet. Liquidation risk exists on the short leg if the asset price rises significantly and the position is not adequately collateralized. Imperfect hedging means positions are rarely perfectly delta-neutral, creating residual exposure that accumulates over time. Smart contract risk is amplified because these strategies typically interact with multiple protocols simultaneously. The complexity of managing multi-protocol positions also introduces operational risk from errors in execution or monitoring. Despite these challenges, delta-neutral strategies remain popular among sophisticated DeFi users seeking consistent, market-direction-independent yields.</p>
      </section>
    </LearnPageLayout>
  );
}
