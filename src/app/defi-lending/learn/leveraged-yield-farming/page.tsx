import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Leveraged Yield Farming Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete guide to leveraged yield farming in DeFi. Learn how leverage amplifies yields, liquidation mechanics, strategy selection, and risk management best practices.",
  keywords: ["leveraged yield farming", "DeFi leverage", "leveraged farming strategy", "amplified yield DeFi"],
};

export default function LeveragedYieldFarmingPage() {
  return (
    <LearnPageLayout
      title="Leveraged Yield Farming Guide"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="14 min"
      intro="Leveraged yield farming amplifies DeFi returns by borrowing additional capital to increase the size of yield-generating positions. While leverage can multiply yields from 2x to 10x or more, it equally amplifies risks including impermanent loss, liquidation, and smart contract exposure. This guide explains the mechanics, strategies, and risk management approaches for leveraged farming."
      toc={[
        { id: "mechanics", title: "mechanics", level: 2 },
        { id: "how-leveraged-farming-works", title: "How Leveraged Farming Works", level: 2 },
        { id: "strategies", title: "strategies", level: 2 },
        { id: "leverage-strategy-types", title: "Leverage Strategy Types", level: 2 },
        { id: "platforms", title: "platforms", level: 2 },
        { id: "leveraged-farming-platforms", title: "Leveraged Farming Platforms", level: 2 },
        { id: "liquidation", title: "liquidation", level: 2 },
        { id: "understanding-liquidation-risk", title: "Understanding Liquidation Risk", level: 2 },
        { id: "risk-management", title: "risk-management", level: 2 },
        { id: "risk-management-best-practices", title: "Risk Management Best Practices", level: 2 }
      ]}
      faqs={[
        { question: "How much leverage should I use for farming?", answer: "Start with 2x leverage maximum until you understand the mechanics. Higher leverage (3-5x+) dramatically increases liquidation risk. Most experienced farmers use 2-3x leverage on correlated pairs and lower leverage on volatile pairs." },
        { question: "What happens if I get liquidated?", answer: "During liquidation, your collateral is sold to repay the borrowed amount plus a penalty fee (typically 5-15%). You lose your collateral and may receive little to no capital back. The severity depends on the penalty percentage and how quickly prices moved." },
        { question: "Is leveraged farming profitable?", answer: "It can be, but many farmers lose money due to liquidations, impermanent loss amplification, and borrowing costs exceeding farming returns. Profitability requires careful strategy selection, constant monitoring, and disciplined risk management." },
      ]}
      relatedArticles={[
        { title: "Recursive Lending Strategy", href: "/defi-lending/learn/recursive-lending-strategy", category: "DeFi Lending" },
        { title: "Delta-Neutral Yield", href: "/defi-lending/learn/delta-neutral-yield", category: "DeFi Lending" },
        { title: "Yield Risk Assessment", href: "/defi-lending/learn/yield-risk-assessment", category: "DeFi Lending" },
      ]}
    >
      <section id="mechanics">
        <h2>How Leveraged Farming Works</h2>
        <p>Leveraged yield farming uses borrowed capital to amplify a farming position beyond what your own capital allows. The process typically works as follows: you deposit assets as collateral into a leveraged farming protocol, the protocol borrows additional assets from lending pools on your behalf, these combined assets are deployed into a farming position (usually a DEX LP pool), and you earn amplified farming rewards while paying interest on the borrowed amount. The net yield is the gross farming return multiplied by leverage minus the borrowing cost. For example, if a farm yields 15% APY and you use 3x leverage with a 5% borrow rate, your gross leveraged yield is approximately 45% minus approximately 10% in borrowing costs (5% on the 2x borrowed portion), yielding roughly 35% net. This simple math hides significant complexity around impermanent loss amplification, liquidation risk, and variable rate fluctuations.</p>
      </section>
      <section id="strategies">
        <h2>Leverage Strategy Types</h2>
        <p>Several distinct leveraged farming strategies exist. Leveraged LP farming borrows to amplify a standard DEX liquidity position, earning magnified trading fees and token rewards. Leveraged staking loops deposit liquid staking tokens, borrow the base asset, stake it, and repeat to amplify staking yield. Long-biased leveraged farming borrows stablecoins against crypto collateral to farm, profiting if the collateral appreciates while earning yield. Short-biased farming borrows crypto against stablecoin collateral, profiting if the borrowed asset depreciates. Delta-neutral leveraged strategies attempt to hedge price exposure while capturing amplified yield, though true delta neutrality is difficult to maintain. Each strategy type has different risk-reward profiles and is suited to different market conditions and user expectations.</p>
      </section>
      <section id="platforms">
        <h2>Leveraged Farming Platforms</h2>
        <p>Major leveraged farming platforms include Alpaca Finance on BNB Chain, Extra Finance on Optimism and Base, Tarot and Impermax for leveraged LP, and Kamino's Multiply vaults on Solana. These platforms handle the borrowing, position management, and liquidation mechanics, presenting users with simplified interfaces for opening leveraged positions. Some platforms offer auto-rebalancing that adjusts positions to maintain target leverage ratios. Automated vault strategies reduce the manual management burden but add additional smart contract risk through the vault contracts. When choosing a platform, evaluate the maximum available leverage, supported farming pairs, borrowing costs, liquidation parameters, and the protocol's security audit history.</p>
      </section>
      <section id="liquidation">
        <h2>Understanding Liquidation Risk</h2>
        <p>Liquidation is the primary risk of leveraged farming. When the value of your collateral (farming position) declines relative to your debt (borrowed amount), the protocol liquidates your position to protect lenders. Liquidation typically occurs when the debt-to-collateral ratio exceeds a threshold (e.g., 85-90%). Several factors can trigger liquidation: price movements in the farmed assets, impermanent loss reducing the LP position value, or borrowing interest accumulating faster than farming rewards. Higher leverage means smaller price movements can trigger liquidation. At 2x leverage, a roughly 50% decline triggers liquidation. At 5x leverage, a 20% decline may suffice. Liquidation penalties (5-15%) mean you lose more than just the gap between your position value and debt. Understanding these mechanics is essential before using any leverage in farming.</p>
      </section>
      <section id="risk-management">
        <h2>Risk Management Best Practices</h2>
        <p>Effective leveraged farming requires disciplined risk management. Start with low leverage (2x) until you deeply understand the mechanics and risks. Use correlated pairs (like ETH/stETH) for lower impermanent loss risk. Set stop-loss or auto-deleverage parameters if the platform supports them. Monitor positions regularly, especially during volatile market periods. Never use more capital than you can afford to lose entirely. Calculate your liquidation price before opening positions and ensure it is far from likely price scenarios. Diversify across multiple platforms and strategies rather than concentrating in a single leveraged position. Consider the total cost of leverage including borrowing rates, platform fees, and gas costs. Finally, recognize that in severe market downturns, many leveraged positions are liquidated simultaneously, and your risk management plan should account for extreme scenarios.</p>
      </section>
    </LearnPageLayout>
  );
}
