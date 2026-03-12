import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `DeFi Liquidation Mechanics Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Understand how DeFi liquidation works. Learn about health factors, liquidation penalties, MEV bots, liquidation cascades, and how to protect your positions.",
  keywords: ["defi liquidation", "liquidation mechanics", "health factor", "liquidation penalty"],
};

export default function LiquidationMechanicsPage() {
  return (
    <LearnPageLayout
      title="DeFi Liquidation Mechanics"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="11 min"
      intro="Liquidation is the enforcement mechanism that keeps DeFi lending protocols solvent. When a borrower's collateral value drops below a critical threshold, anyone can repay part of the debt and claim collateral at a discount. Understanding exactly how liquidation works, who performs it, and what it costs is essential for every DeFi borrower to protect their positions and avoid unnecessary losses."
      toc={[
        { id: "how-liquidation-works", title: "how-liquidation-works", level: 2 },
        { id: "how-liquidation-works", title: "How Liquidation Works", level: 2 },
        { id: "health-factor-mechanics", title: "health-factor-mechanics", level: 2 },
        { id: "health-factor-mechanics", title: "Health Factor Mechanics", level: 2 },
        { id: "liquidation-bots", title: "liquidation-bots", level: 2 },
        { id: "liquidation-bots-and-mev", title: "Liquidation Bots and MEV", level: 2 },
        { id: "liquidation-cascades", title: "liquidation-cascades", level: 2 },
        { id: "liquidation-cascades", title: "Liquidation Cascades", level: 2 },
        { id: "protection-strategies", title: "protection-strategies", level: 2 },
        { id: "protection-strategies", title: "Protection Strategies", level: 2 }
      ]}
      faqs={[
        { question: "What happens to my funds during liquidation?", answer: "During liquidation, a liquidator repays a portion of your debt (typically up to 50%) and receives an equivalent value of your collateral plus a liquidation bonus (typically 5-15%). You keep the remaining collateral and borrowed assets, but lose the penalty amount." },
        { question: "Can I get liquidated even with a high health factor?", answer: "A high health factor provides safety margin, but extreme market crashes can cause rapid drops. Flash crashes, oracle delays, and network congestion during volatile periods can all contribute to unexpected liquidation. Maintaining a health factor above 2.0 provides reasonable protection." },
      ]}
      relatedArticles={[
        { title: "Collateralization Ratios", href: "/defi-lending/learn/collateralization-ratios", category: "DeFi Lending" },
        { title: "How DeFi Lending Works", href: "/defi-lending/learn/how-defi-lending-works", category: "DeFi Lending" },
        { title: "DeFi Risk Guide", href: "/defi-lending/learn/defi-risks-guide", category: "DeFi Lending" },
      ]}
    >
      <section id="how-liquidation-works">
        <h2>How Liquidation Works</h2>
        <p>Liquidation in DeFi lending occurs when a borrower's position becomes undercollateralized. Each protocol defines a liquidation threshold for every collateral asset, which is always higher than the maximum loan-to-value ratio. When the value of a borrower's collateral relative to their debt falls below this liquidation threshold, the position becomes eligible for liquidation. In practice, a third party called a liquidator calls a function on the lending protocol's smart contract, repays a portion of the borrower's outstanding debt, and receives the corresponding collateral at a discounted price. This discount, known as the liquidation bonus or penalty, incentivizes liquidators to monitor positions and act quickly. On Aave V3, the close factor typically allows liquidation of up to 50% of the debt in a single transaction, while the liquidation bonus ranges from 5% to 15% depending on the collateral asset's risk profile.</p>
      </section>
      <section id="health-factor-mechanics">
        <h2>Health Factor Mechanics</h2>
        <p>The health factor is the primary metric that determines whether a position can be liquidated. It is calculated by multiplying the total collateral value by the weighted average liquidation threshold, then dividing by the total debt value. A health factor of exactly 1.0 means the position is at the liquidation boundary. Above 1.0, the position is safe. Below 1.0, liquidation can occur. For example, if you have $10,000 in ETH collateral with an 82.5% liquidation threshold and $7,000 in debt, your health factor is ($10,000 times 0.825) divided by $7,000, which equals approximately 1.18. This means your collateral could drop about 15% before liquidation triggers. Different protocols calculate health factors slightly differently, but the core concept remains the same across Aave, Compound, and other major lending platforms.</p>
      </section>
      <section id="liquidation-bots">
        <h2>Liquidation Bots and MEV</h2>
        <p>In practice, most liquidations are performed by automated bots rather than human operators. These bots continuously monitor lending protocol positions, watching for health factors approaching 1.0. When a position becomes liquidatable, multiple bots often compete to execute the liquidation first, since the liquidation bonus represents profit. This competition has become deeply intertwined with Maximum Extractable Value (MEV) on Ethereum and other chains. Sophisticated liquidation bots use flashbots or similar MEV infrastructure to ensure their transactions are included ahead of competitors. Some bots use flash loans to perform liquidations without requiring upfront capital, borrowing the repayment amount, executing the liquidation, selling the received collateral, and repaying the flash loan all in a single atomic transaction. This MEV competition generally benefits the protocol by ensuring rapid liquidation, but it also means that profitable liquidation opportunities are executed within seconds of becoming available.</p>
      </section>
      <section id="liquidation-cascades">
        <h2>Liquidation Cascades</h2>
        <p>Liquidation cascades occur when a large number of positions are liquidated in rapid succession, creating a feedback loop that amplifies price declines. When liquidators receive collateral and immediately sell it on the market, the selling pressure can push prices lower. Lower prices then trigger more liquidations, which create more selling pressure. This cascading effect is one of the most dangerous phenomena in DeFi lending. During major market events, cascades can cause prices to overshoot fair value significantly. The May 2021 and November 2022 crypto market crashes both featured significant liquidation cascades across DeFi protocols. Protocols attempt to mitigate cascade risk through gradual liquidation mechanisms, conservative collateral factors, and circuit breakers, but the interconnected nature of DeFi means that cascades can propagate across multiple protocols simultaneously.</p>
      </section>
      <section id="protection-strategies">
        <h2>Protection Strategies</h2>
        <p>Several strategies can help protect your positions from liquidation. The most straightforward is maintaining a high health factor by borrowing well below your maximum capacity. A health factor of 2.0 or higher provides a substantial safety buffer. You can also use automated tools like DeFi Saver or Instadapp that automatically add collateral or repay debt when your health factor drops below a set threshold. Setting up price alerts through services like Tenderly or DeBank gives you early warning when markets move against your position. Choosing correlated asset pairs for collateral and borrowing reduces liquidation risk since the values move together. For example, depositing stETH and borrowing ETH means even large ETH price swings have minimal impact on your health factor. Finally, maintaining readily available funds to add as emergency collateral can save your position during unexpected market volatility.</p>
      </section>
    </LearnPageLayout>
  );
}
