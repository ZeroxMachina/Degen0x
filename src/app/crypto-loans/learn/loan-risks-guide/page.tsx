import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Loan Risks Guide (${CURRENT_YEAR}) | degen0x`,
  description: "Complete guide to crypto loan risks including liquidation, smart contract vulnerabilities, counterparty risk, and strategies to protect your collateral.",
};

export default function LoanRisksGuidePage() {
  return (
    <LearnPageLayout
      title="Crypto Loan Risks Guide"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="11 min read"
      intro="Crypto loans offer powerful financial flexibility, but they come with significant risks that every borrower must understand. From liquidation to platform failure, this guide covers every major risk category and provides actionable strategies to protect your collateral and minimize potential losses."
      toc={[
        { id: "liquidation-risk", title: "liquidation-risk", level: 2 },
        { id: "liquidation-risk", title: "Liquidation Risk", level: 2 },
        { id: "platform-risk", title: "platform-risk", level: 2 },
        { id: "platform-and-smart-contract-risk", title: "Platform and Smart Contract Risk", level: 2 },
        { id: "interest-rate-risk", title: "interest-rate-risk", level: 2 },
        { id: "interest-rate-and-market-risk", title: "Interest Rate and Market Risk", level: 2 },
        { id: "mitigation", title: "mitigation", level: 2 },
        { id: "risk-mitigation-strategies", title: "Risk Mitigation Strategies", level: 2 }
      ]}
      faqs={[
        { question: "What is the biggest risk with crypto loans?", answer: "Liquidation risk is the most immediate threat. If your collateral value drops below the liquidation threshold, your assets are sold automatically, often at a penalty. In volatile markets, this can happen very quickly with no warning." },
        { question: "Can I lose more than my collateral?", answer: "In most overcollateralized crypto loans, your loss is limited to your collateral. You cannot owe more than what you deposited. However, the liquidation penalty (typically 5-15%) means you lose more collateral than strictly necessary to repay the loan." },
      ]}
      relatedArticles={[
        { title: "Liquidation Risk Guide", href: "/crypto-loans/learn/liquidation-risk", category: "Crypto Loans" },
        { title: "Best Low-LTV Loans", href: "/crypto-loans/best/low-ltv", category: "Crypto Loans" },
        { title: "Overcollateralization Explained", href: "/crypto-loans/learn/overcollateralization-explained", category: "Crypto Loans" },
      ]}
    >
      <h2 id="liquidation-risk">Liquidation Risk</h2>
      <p>Liquidation occurs when your collateral value falls below the required threshold. In DeFi, liquidation is instant and automatic, executed by liquidation bots that earn a bonus for closing undercollateralized positions. In CeFi, you may receive a margin call first, but automatic liquidation follows if you do not respond. The liquidation penalty (5-15%) means you lose more than just the loan amount. Flash crashes can trigger liquidations even if prices quickly recover.</p>

      <h2 id="platform-risk">Platform and Smart Contract Risk</h2>
      <p>CeFi platforms carry counterparty risk: the company managing your funds could face insolvency, fraud, or regulatory action. Celsius, BlockFi, and Voyager all failed, resulting in billions in user losses. DeFi protocols carry smart contract risk: bugs or exploits in the code could lead to loss of funds. Oracle manipulation is another DeFi risk where attackers trick the price feed to trigger unfair liquidations or drain lending pools.</p>

      <h2 id="interest-rate-risk">Interest Rate and Market Risk</h2>
      <p>Variable interest rates can spike unexpectedly during high-demand periods, increasing your borrowing costs significantly. In extreme cases, rates have exceeded 100% APR briefly on DeFi protocols. Regulatory risk is growing as governments develop crypto lending frameworks that could restrict operations or change tax treatment. Currency risk also exists if you borrow in a different denomination than your income.</p>

      <h2 id="mitigation">Risk Mitigation Strategies</h2>
      <p>Maintain conservative LTV ratios (under 40%) to buffer against price drops. Diversify across platforms to limit single-point-of-failure risk. Use DeFi automation tools like DeFi Saver for automatic collateral management. Set up price alerts well above your liquidation price. Keep reserve capital to add collateral during downturns. Consider DeFi insurance from protocols like Nexus Mutual to cover smart contract risk. Never borrow more than you can afford to lose.</p>
    </LearnPageLayout>
  );
}
