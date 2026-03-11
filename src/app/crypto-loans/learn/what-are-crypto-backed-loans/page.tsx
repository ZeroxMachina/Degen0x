import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";

export const metadata: Metadata = { title: "What Are Crypto-Backed Loans? Complete Guide (2026)", description: "Learn how crypto-backed loans work, their benefits, risks, and how to get started. Borrow against Bitcoin, Ethereum, and other crypto without selling." };

export default function WhatAreCryptoLoansPage() {
  return (
    <LearnPageLayout title="What Are Crypto-Backed Loans?" categoryName="Crypto Loans" categorySlug="crypto-loans" readTime="10 min"
      intro="Crypto-backed loans allow you to borrow money using your cryptocurrency as collateral, similar to how a traditional secured loan uses your home or car. The key advantage is accessing liquidity without selling your crypto, which avoids triggering a taxable event and lets you maintain your long-term positions."
      toc={[{ id: "how-they-work", title: "How Crypto Loans Work", level: 2 }, { id: "benefits", title: "Benefits of Crypto Loans", level: 2 }, { id: "risks", title: "Key Risks", level: 2 }, { id: "getting-started", title: "How to Get Started", level: 2 }]}
      faqs={[
        { question: "Do I keep my crypto when I take a loan?", answer: "Yes and no. Your crypto is deposited as collateral and is locked while the loan is active. You maintain ownership and get it back when you repay. However, if you are liquidated due to price drops, you may lose some or all of your collateral." },
        { question: "Are crypto loans a taxable event?", answer: "In most jurisdictions, borrowing against crypto is not a taxable event because you are not selling. However, liquidation is typically treated as a sale and subject to capital gains tax. Consult a tax professional for your specific situation." },
        { question: "What is the typical interest rate on crypto loans?", answer: "Rates vary widely: CeFi platforms charge 0-14% APR depending on tier and platform, while DeFi protocols charge variable rates typically between 2-10% based on market demand. Shop around for the best rate." },
      ]}
      relatedArticles={[{ title: "LTV Ratio Explained", href: "/crypto-loans/learn/ltv-ratio-explained", category: "Crypto Loans" }, { title: "Liquidation Risk", href: "/crypto-loans/learn/liquidation-risk", category: "Crypto Loans" }, { title: "Best Crypto Loan Platforms", href: "/crypto-loans/best", category: "Crypto Loans" }]}
    >
      <h2 id="how-they-work">How Crypto Loans Work</h2>
      <p>The basic process is straightforward: you deposit cryptocurrency as collateral, and in return you receive a loan in fiat currency, stablecoins, or another crypto asset. The loan amount is determined by the loan-to-value (LTV) ratio, which defines what percentage of your collateral value you can borrow. For example, at 50% LTV, $10,000 of Bitcoin collateral allows you to borrow $5,000. The collateral remains locked until the loan is fully repaid.</p>

      <h2 id="benefits">Benefits of Crypto Loans</h2>
      <p>The primary benefit is accessing liquidity without selling your crypto. This avoids capital gains tax events, allows you to maintain long-term positions that may appreciate, and provides cash for immediate needs. Other benefits include fast approval (instant in DeFi, minutes in CeFi), no credit checks required in DeFi, and the ability to borrow in multiple currencies. For long-term holders who are bullish on crypto but need cash, borrowing against holdings is often more tax-efficient than selling.</p>

      <h2 id="risks">Key Risks</h2>
      <p>The biggest risk is liquidation. If your collateral value drops below the liquidation threshold, the platform will sell your collateral to repay the loan, potentially at a loss. Interest rate risk exists on variable-rate loans where costs can increase unexpectedly. Platform risk exists for CeFi lenders (as demonstrated by Celsius). And opportunity cost exists because your collateral is locked and cannot be used for other purposes while the loan is active.</p>

      <h2 id="getting-started">How to Get Started</h2>
      <p>For CeFi: Create an account on a platform like Nexo, complete KYC verification, deposit crypto collateral, and draw from your credit line. For DeFi: Set up a Web3 wallet, connect to a protocol like Aave, deposit collateral, and borrow. Start with conservative LTV ratios (under 50%) to give yourself plenty of buffer against liquidation, and always monitor your position during volatile markets.</p>
    </LearnPageLayout>
  );
}
