import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";

export const metadata: Metadata = { title: "Liquidation Risk in Crypto Loans: How to Avoid It (2026)", description: "Understand liquidation risk in crypto lending, how it works, what triggers it, and strategies to protect your collateral from being liquidated." };

export default function LiquidationRiskPage() {
  return (
    <LearnPageLayout title="Understanding Liquidation Risk" categoryName="Crypto Loans" categorySlug="crypto-loans" readTime="8 min"
      intro="Liquidation is the biggest risk when borrowing against crypto. When your collateral value drops below a critical threshold, your position is forcibly closed and you lose a portion of your collateral. Understanding liquidation mechanics and how to avoid them is essential for anyone taking crypto-backed loans."
      toc={[{ id: "how-liquidation-works", title: "How Liquidation Works", level: 2 }, { id: "triggers", title: "What Triggers Liquidation", level: 2 }, { id: "prevention", title: "Preventing Liquidation", level: 2 }, { id: "recovery", title: "After Liquidation", level: 2 }]}
      faqs={[
        { question: "Can I get liquidated instantly?", answer: "In fast-moving markets, yes. Flash crashes can trigger liquidation before you have time to react. This is why maintaining a healthy buffer above the liquidation threshold is critical. DeFi management tools can automate protection, but gas costs during congestion can delay automated responses." },
        { question: "How much do I lose in a liquidation?", answer: "In a partial liquidation, you lose the collateral needed to bring your position back to health, plus a liquidation penalty (typically 5-13% depending on the platform). You keep the borrowed assets. In a full liquidation, you may lose all collateral above the borrowed amount." },
        { question: "Can I prevent liquidation during a market crash?", answer: "The best prevention is maintaining a conservative LTV ratio with a large buffer. During crashes, you can add more collateral or repay part of the loan. Automated tools like DeFi Saver can do this for you, though network congestion during crashes may cause delays." },
      ]}
      relatedArticles={[{ title: "LTV Ratio Explained", href: "/crypto-loans/learn/ltv-ratio-explained", category: "Crypto Loans" }, { title: "Liquidation Price Calculator", href: "/crypto-loans/calculators/liquidation-price-calculator", category: "Tool" }]}
    >
      <h2 id="how-liquidation-works">How Liquidation Works</h2>
      <p>When your collateral value drops to the point where your health factor (or LTV) reaches the liquidation threshold, other users or bots can trigger a liquidation. In DeFi, liquidators repay a portion of your debt and receive your collateral at a discount (the liquidation bonus). In CeFi, the platform typically issues a margin call first, then auto-sells your collateral if you do not respond. Either way, you lose collateral equal to the repaid debt plus a penalty.</p>

      <h2 id="triggers">What Triggers Liquidation</h2>
      <p>Liquidation is triggered when the value of your collateral relative to your loan drops below the platform's liquidation threshold. This happens primarily due to price drops in your collateral assets, but can also occur due to interest accrual increasing your debt, oracle price updates that reflect delayed price movements, or flash crashes that briefly push prices below thresholds.</p>

      <h2 id="prevention">Preventing Liquidation</h2>
      <p>Start with a conservative LTV ratio well below the liquidation threshold. Set up price alerts on your collateral assets. Use DeFi management tools that can automatically add collateral or repay loans. Keep additional collateral in your wallet ready to deposit. Consider using stablecoin collateral for a portion of your position to reduce volatility exposure. And monitor your position during periods of high market volatility.</p>

      <h2 id="recovery">After Liquidation</h2>
      <p>If you are partially liquidated, your remaining position is typically brought back to a healthy state. You can continue to use the remaining collateral and outstanding loan normally. If fully liquidated, you lose all deposited collateral but keep the borrowed assets. Review what happened, adjust your risk management strategy, and consider using lower LTV ratios or automated protection tools for future positions.</p>
    </LearnPageLayout>
  );
}
