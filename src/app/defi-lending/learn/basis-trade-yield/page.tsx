import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Basis Trade Yield Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn how basis trade yield strategies work in crypto DeFi. Understand the spread between spot and futures, funding rate mechanics, and implementation approaches.",
  keywords: ["basis trade", "crypto basis trade", "funding rate yield", "futures basis strategy"],
};

export default function BasisTradeYieldPage() {
  return (
    <LearnPageLayout
      title="Basis Trade Yield Guide"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="10 min"
      intro="The basis trade is a classic strategy adapted from traditional finance to crypto markets, capturing the spread between spot prices and futures or perpetual contract prices. When futures trade at a premium to spot (contango), traders can buy spot and short futures to earn the basis as it converges. In crypto, the perpetual funding rate mechanism creates a continuous basis opportunity that DeFi protocols are increasingly automating."
      toc={[
        { id: "what-is-basis", title: "What Is the Basis Trade?", level: 2 },
        { id: "funding-rates", title: "Funding Rate Mechanics", level: 2 },
        { id: "defi-implementation", title: "DeFi Implementation", level: 2 },
        { id: "risks", title: "Risks & Considerations", level: 2 },
      ]}
      faqs={[
        { question: "How much can you earn from basis trades?", answer: "Annualized returns typically range from 5-30% depending on market sentiment. During bull markets with high leverage demand, funding rates can produce yields exceeding 20% APY. During neutral or bearish periods, yields compress to 5-10% or may become negative." },
        { question: "Is the basis trade market-neutral?", answer: "Yes, when properly hedged. The long spot position and short futures position cancel out price exposure, leaving only the basis/funding rate as the return source. However, imperfect hedging or liquidation of the short leg can introduce directional exposure." },
        { question: "Can I do basis trades entirely on-chain?", answer: "Yes, using DeFi perpetual exchanges like GMX, dYdX, or Drift for the short leg and spot holding or lending for the long leg. Protocols like Ethena (USDe) automate this strategy at the protocol level." },
      ]}
      relatedArticles={[
        { title: "Delta-Neutral Yield", href: "/defi-lending/learn/delta-neutral-yield", category: "DeFi Lending" },
        { title: "Real Yield vs Emissions", href: "/defi-lending/learn/real-yield-vs-emissions", category: "DeFi Lending" },
        { title: "Perp DEX Guide", href: "/exchanges/learn/perp-dex-guide", category: "Exchanges" },
      ]}
    >
      <section id="what-is-basis">
        <h2>What Is the Basis Trade?</h2>
        <p>The basis is the difference between the spot price of an asset and its futures price. In crypto, perpetual futures typically trade at a premium to spot during bullish periods because leveraged traders are willing to pay a premium for long exposure. The basis trade captures this premium by simultaneously buying spot and shorting futures. As the premium converges (through funding rate payments in perpetuals, or at expiry for dated futures), the trader profits from the spread without exposure to the asset's price direction. This strategy has been used in traditional finance for decades and has become increasingly popular in crypto due to the persistently high funding rates driven by speculative demand for leverage. The basis trade is essentially a bet on market structure rather than price direction.</p>
      </section>
      <section id="funding-rates">
        <h2>Funding Rate Mechanics</h2>
        <p>Perpetual futures use funding rates to keep their price aligned with spot. When the perp price exceeds spot (positive funding), long holders pay short holders periodically, typically every 8 hours. When the perp is below spot (negative funding), shorts pay longs. During bullish markets, funding rates are consistently positive as demand for leveraged long positions drives perps above spot. A basis trader who is short perpetuals receives these funding payments while their long spot position offsets any price movement. The annualized yield from funding rates varies dramatically with market conditions but has historically averaged 10-20% during moderately bullish periods. Funding rates are not fixed and can change direction, which is the primary risk for basis traders.</p>
      </section>
      <section id="defi-implementation">
        <h2>DeFi Implementation</h2>
        <p>Implementing basis trades in DeFi involves holding spot crypto (potentially staked or in a lending protocol for additional yield) and shorting the same asset on a perpetual DEX. Popular DEXs for the short leg include GMX on Arbitrum, dYdX, Drift on Solana, and Hyperliquid. The spot leg can be held as native tokens, deposited in lending protocols, or staked for additional returns. Some protocols automate the entire strategy: Ethena's USDe stablecoin essentially runs a basis trade at the protocol level, backing its stablecoin with staked ETH and short ETH perp positions. The sUSDe yield reflects the combined staking and funding rate returns. Automated basis trade vaults abstract away the complexity of position management, rebalancing, and funding rate collection.</p>
      </section>
      <section id="risks">
        <h2>Risks and Considerations</h2>
        <p>The basis trade's primary risk is funding rate reversal. During bear markets or periods of high short interest, funding rates can turn negative, meaning the short position costs money instead of generating yield. If this persists, the strategy loses money. Liquidation risk on the short leg requires adequate margin maintenance; a rapid price spike can liquidate the short position before the trader can add margin, breaking the hedge and creating unhedged spot exposure at an unfavorable price. Exchange risk matters because the short position is held on a centralized or decentralized exchange that could face exploits or insolvency. Correlation risk arises if the spot and futures prices diverge unexpectedly. Execution risk includes the costs of opening, managing, and closing positions across multiple venues. Despite these risks, the basis trade remains one of the most reliable market-neutral yield strategies in crypto when properly managed and sized conservatively.</p>
      </section>
    </LearnPageLayout>
  );
}
