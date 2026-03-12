import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Loan-to-Value Strategies for Crypto (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Master LTV ratio strategies for crypto loans. Learn optimal borrowing ratios, how to manage LTV during volatility, and advanced LTV optimization techniques.",
  keywords: ["ltv strategy", "loan to value crypto", "optimal ltv ratio", "crypto borrowing ratio"],
};

export default function LoanToValueStrategiesPage() {
  return (
    <LearnPageLayout
      title="Loan-to-Value Strategies"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="8 min"
      intro="Your loan-to-value ratio is the single most important number in crypto borrowing. It determines your liquidation risk, capital efficiency, and available strategies. Understanding how to set, monitor, and optimize your LTV ratio can mean the difference between profitable borrowing and costly liquidation. This guide covers practical LTV strategies for different risk profiles and market conditions."
      toc={[
        { id: "optimal-ltv", title: "optimal-ltv", level: 2 },
        { id: "finding-your-optimal-ltv", title: "Finding Your Optimal LTV", level: 2 },
        { id: "market-conditions", title: "market-conditions", level: 2 },
        { id: "ltv-by-market-conditions", title: "LTV by Market Conditions", level: 2 },
        { id: "dynamic-management", title: "dynamic-management", level: 2 },
        { id: "dynamic-ltv-management", title: "Dynamic LTV Management", level: 2 },
        { id: "advanced-strategies", title: "advanced-strategies", level: 2 },
        { id: "advanced-ltv-strategies", title: "Advanced LTV Strategies", level: 2 }
      ]}
      faqs={[
        { question: "What LTV ratio is safe?", answer: "Conservative borrowers maintain 25-35% LTV, providing a large buffer against price drops. Moderate risk tolerance allows 40-50% LTV. Above 60% LTV is aggressive and requires active monitoring. The appropriate level depends on your collateral's volatility and your ability to respond to margin calls." },
        { question: "Should I maintain the same LTV in bull and bear markets?", answer: "No. Lower your LTV during uncertain or bearish markets to increase your safety buffer. You can be slightly more aggressive during confirmed uptrends but always maintain enough margin for unexpected corrections." },
      ]}
      relatedArticles={[
        { title: "LTV Ratio Explained", href: "/crypto-loans/learn/ltv-ratio-explained", category: "Crypto Loans" },
        { title: "Margin Call Guide", href: "/crypto-loans/learn/margin-call-guide", category: "Crypto Loans" },
      ]}
    >
      <section id="optimal-ltv">
        <h2>Finding Your Optimal LTV</h2>
        <p>Your optimal LTV depends on three factors: your collateral's historical volatility, the platform's liquidation threshold, and your ability to respond to margin calls. For Bitcoin collateral with a liquidation threshold at 80% LTV, borrowing at 40% LTV means Bitcoin would need to drop 50% before liquidation. Historically, Bitcoin has seen 50% or larger drawdowns during bear markets, so 40% provides a reasonable but not bulletproof buffer. For more volatile altcoins, lower LTV ratios are appropriate. A good rule of thumb is to set your target LTV at half the liquidation threshold. This provides a 50% price drop buffer before liquidation, which has survived most historical market events except the most extreme crashes. Conservative borrowers target even lower ratios for additional peace of mind.</p>
      </section>
      <section id="market-conditions">
        <h2>LTV by Market Conditions</h2>
        <p>Adjust your target LTV based on market conditions. During established bull markets with strong momentum, a higher LTV (40-50%) is more defensible because price trends are in your favor and recoveries from dips are quicker. During range-bound markets, maintain moderate LTV (30-40%) as the direction is uncertain. During bear markets or high-uncertainty periods, reduce LTV to 20-30% or consider repaying loans entirely. Watch for macro catalysts that could trigger sharp moves: central bank decisions, regulatory announcements, and major protocol events can all cause rapid price changes. Ahead of known high-volatility events, temporarily reducing your LTV by adding collateral or partially repaying provides additional protection.</p>
      </section>
      <section id="dynamic-management">
        <h2>Dynamic LTV Management</h2>
        <p>Active LTV management means adjusting your position as market conditions change. When your collateral appreciates and LTV drops, you can either withdraw excess collateral for other uses or borrow additional funds while maintaining your target ratio. When collateral drops and LTV rises, add more collateral or partially repay to restore your target ratio. Automated tools like DeFi Saver can maintain your target LTV by automatically adding collateral from reserves or repaying debt when thresholds are breached. On CeFi platforms, set up alerts at multiple LTV levels: an early warning at your target ratio, a caution alert at 10% above target, and an urgent alert near the margin call level. Having a pre-defined action plan for each alert level eliminates emotional decision-making during stressful market conditions.</p>
      </section>
      <section id="advanced-strategies">
        <h2>Advanced LTV Strategies</h2>
        <p>Advanced borrowers use LTV optimization techniques for better capital efficiency. Correlated collateral strategies use assets that move together (like ETH and stETH) to effectively increase LTV without increasing liquidation risk, since the collateral and debt values move in tandem. DeFi eMode on Aave allows higher LTV for correlated asset pairs. LTV laddering involves maintaining multiple positions at different LTV levels, liquidating smaller high-LTV positions first while protecting core low-LTV positions. Cross-platform LTV optimization distributes borrowing across multiple protocols to access different collateral factors and diversify smart contract risk. These advanced strategies require thorough understanding of protocol mechanics and active management, making them suitable only for experienced DeFi users.</p>
      </section>
    </LearnPageLayout>
  );
}
