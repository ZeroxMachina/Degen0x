import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `DeFi Interest Rates Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Understand how DeFi interest rates work. Learn about utilization-based models, APY vs APR, variable vs fixed rates, and factors driving DeFi lending yields.",
  keywords: ["defi interest rates", "defi apy explained", "lending rates defi", "defi yield"],
};

export default function DefiInterestRatesExplainedPage() {
  return (
    <LearnPageLayout
      title="DeFi Interest Rates Explained"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="10 min"
      intro="DeFi interest rates are fundamentally different from traditional banking rates. Instead of being set by central authorities, they are determined algorithmically based on supply and demand within lending pools. Understanding how these rates work, what drives them, and how to compare them effectively is essential for maximizing your DeFi lending returns."
      toc={[
        { id: "how-rates-determined", title: "How Rates Are Determined", level: 2 },
        { id: "utilization-model", title: "The Utilization Rate Model", level: 2 },
        { id: "apy-vs-apr", title: "APY vs APR", level: 2 },
        { id: "rate-factors", title: "Factors Affecting Rates", level: 2 },
        { id: "optimizing-yields", title: "Optimizing Your Yields", level: 2 },
      ]}
      faqs={[
        { question: "Why do DeFi rates change so frequently?", answer: "DeFi rates adjust with every block based on pool utilization. When borrowing demand increases, rates rise. When more lenders deposit, utilization drops and rates decrease. This creates a dynamic, market-driven rate environment." },
        { question: "What is a good APY for DeFi lending?", answer: "It depends on the asset and current market conditions. For stablecoins, 3-8% APY is typical on major protocols. For volatile assets, rates vary more. Always compare rates across protocols and understand what generates the yield." },
      ]}
      relatedArticles={[
        { title: "How DeFi Lending Works", href: "/defi-lending/learn/how-defi-lending-works", category: "DeFi Lending" },
        { title: "Variable vs Fixed Rates", href: "/defi-lending/learn/variable-vs-fixed-rates", category: "DeFi Lending" },
        { title: "Yield Farming Strategies", href: "/defi-lending/learn/yield-farming-strategies", category: "DeFi Lending" },
      ]}
    >
      <section id="how-rates-determined">
        <h2>How Rates Are Determined</h2>
        <p>In DeFi lending, interest rates are set by algorithms encoded in smart contracts, not by human decision-makers. The primary input is pool utilization: the percentage of deposited funds currently being borrowed. Each protocol defines a rate curve that maps utilization to an interest rate. When more people borrow (increasing utilization), rates rise to attract new lenders and discourage excessive borrowing. When borrowing demand is low, rates drop to encourage borrowing. This creates an efficient, self-adjusting market where rates reflect real-time supply and demand dynamics without any central authority involvement.</p>
      </section>
      <section id="utilization-model">
        <h2>The Utilization Rate Model</h2>
        <p>Most DeFi protocols use a kinked interest rate model with two slopes. Below the optimal utilization point (typically 80-90%), rates increase gradually. Above the optimal point, rates increase sharply to strongly incentivize new deposits and discourage further borrowing. This kink ensures that lending pools maintain sufficient liquidity for withdrawals. For example, Aave might set rates at 3% at 50% utilization, 5% at 80% utilization, and 50%+ above 90% utilization. The steep rate increase above optimal utilization acts as an emergency mechanism to restore pool balance quickly.</p>
      </section>
      <section id="apy-vs-apr">
        <h2>APY vs APR</h2>
        <p>APR (Annual Percentage Rate) is the simple interest rate without compounding. APY (Annual Percentage Yield) includes the effect of compounding, where earned interest generates additional interest. In DeFi, interest typically compounds continuously with every block. The difference between APR and APY grows larger at higher rates: a 10% APR with continuous compounding results in approximately 10.5% APY. When comparing yields, make sure you are comparing the same metric. Some protocols display APR while others show APY. Additionally, many display a combined rate including token incentives, which should be analyzed separately from the base lending rate.</p>
      </section>
      <section id="rate-factors">
        <h2>Factors Affecting Rates</h2>
        <p>Several factors influence DeFi lending rates beyond the basic utilization model. Market sentiment drives borrowing demand, with bull markets increasing demand for leverage and thus raising rates. Token incentive programs can boost effective yields significantly but may decrease over time. Cross-protocol arbitrage keeps rates relatively aligned across platforms. The specific asset matters, as stablecoin rates differ from volatile asset rates. Network conditions affect gas costs, which impact the effective yield for smaller positions. Governance decisions on risk parameters and rate curves also influence the rate environment.</p>
      </section>
      <section id="optimizing-yields">
        <h2>Optimizing Your Yields</h2>
        <p>To maximize lending yields, monitor rates across multiple protocols and chains, as significant rate differences often exist. Rate aggregators like Morpho can automatically optimize your rates. Consider the total yield including base lending rate, token incentives, and any loyalty rewards. Factor in gas costs for entering and exiting positions, especially on Ethereum mainnet. Use Layer 2 networks for smaller positions where gas costs would otherwise erode returns. Diversify across protocols and assets to balance risk and return. Periodically rebalance your positions as rates shift with market conditions.</p>
      </section>
    </LearnPageLayout>
  );
}
