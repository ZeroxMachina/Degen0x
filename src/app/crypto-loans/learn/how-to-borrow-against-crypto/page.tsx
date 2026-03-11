import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";

export const metadata: Metadata = { title: "How to Borrow Against Crypto: Step-by-Step Guide (2026)", description: "Step-by-step guide to borrowing against your cryptocurrency. Learn how to take a crypto-backed loan on both CeFi and DeFi platforms." };

export default function HowToBorrowPage() {
  return (
    <LearnPageLayout title="How to Borrow Against Crypto" categoryName="Crypto Loans" categorySlug="crypto-loans" readTime="9 min"
      intro="Borrowing against your crypto allows you to access liquidity without selling your holdings. This step-by-step guide walks you through the process on both centralized (CeFi) and decentralized (DeFi) platforms, from choosing a platform to managing your loan."
      toc={[{ id: "choosing-platform", title: "Choosing a Platform", level: 2 }, { id: "cefi-steps", title: "CeFi Borrowing Steps", level: 2 }, { id: "defi-steps", title: "DeFi Borrowing Steps", level: 2 }, { id: "management", title: "Managing Your Loan", level: 2 }]}
      faqs={[
        { question: "How quickly can I get a crypto loan?", answer: "DeFi loans are instant once your wallet is connected and collateral deposited. CeFi loans typically take minutes to hours after account setup (initial KYC verification may take 1-2 days for new accounts)." },
        { question: "What is the minimum amount I can borrow?", answer: "DeFi protocols generally have no minimum (though gas costs make very small loans impractical). CeFi platforms may have minimums ranging from $50 to $500 depending on the platform." },
        { question: "Can I repay my loan at any time?", answer: "Most crypto loan platforms allow full or partial repayment at any time without penalties. DeFi protocols have no prepayment penalties. Some CeFi platforms may have minimum hold periods, so check the terms." },
      ]}
      relatedArticles={[{ title: "Best Crypto Loan Platforms", href: "/crypto-loans/best", category: "Crypto Loans" }, { title: "LTV Ratio Explained", href: "/crypto-loans/learn/ltv-ratio-explained", category: "Crypto Loans" }]}
    >
      <h2 id="choosing-platform">Choosing a Platform</h2>
      <p>Consider whether you prefer CeFi (simpler, supports fiat, requires KYC) or DeFi (permissionless, transparent, requires wallet). Compare interest rates across platforms, check supported collateral assets, understand LTV ratios and liquidation terms, and evaluate the platform's security track record. For large amounts, consider splitting across multiple platforms to reduce single-platform risk.</p>

      <h2 id="cefi-steps">CeFi Borrowing Steps</h2>
      <p>On a CeFi platform like Nexo: 1) Create an account and complete KYC verification. 2) Deposit cryptocurrency to your account. 3) Navigate to the borrowing section and review your available credit line. 4) Choose the amount and currency to borrow (fiat or stablecoin). 5) Confirm the loan terms and rate. 6) Receive funds to your account or linked bank. The process is straightforward and designed to feel like traditional banking.</p>

      <h2 id="defi-steps">DeFi Borrowing Steps</h2>
      <p>On a DeFi protocol like Aave: 1) Set up a Web3 wallet (MetaMask, Rabby) and fund it with the collateral asset plus ETH for gas. 2) Connect your wallet to the protocol's interface. 3) Navigate to the Supply section and deposit your collateral. 4) Switch to the Borrow section and select the asset you want to borrow. 5) Choose your amount (staying well below maximum LTV). 6) Confirm the transaction in your wallet. Your borrowed assets appear in your wallet immediately.</p>

      <h2 id="management">Managing Your Loan</h2>
      <p>After borrowing, actively monitor your position. Set up price alerts for your collateral assets. Check your health factor or LTV regularly, especially during volatile markets. Have a plan for adding collateral or partial repayment if your position approaches the liquidation zone. Consider using DeFi management tools like DeFi Saver for automated protection. And keep records of all transactions for tax purposes.</p>
    </LearnPageLayout>
  );
}
