import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How DeFi Lending Works (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete guide to how DeFi lending works. Learn about lending pools, interest rates, collateralization, liquidation, and how to earn yield in decentralized finance.",
  keywords: ["how defi lending works", "defi lending explained", "decentralized lending", "defi lending guide"],
};

export default function HowDefiLendingWorksPage() {
  return (
    <LearnPageLayout
      title="How DeFi Lending Works"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="12 min"
      intro="DeFi lending allows anyone to earn interest by supplying crypto assets to lending pools or borrow assets by posting collateral, all without intermediaries. This guide explains the complete mechanics of how decentralized lending works, from pool-based models and interest rate algorithms to collateral management and liquidation processes."
      toc={[
        { id: "overview", title: "DeFi Lending Overview", level: 2 },
        { id: "lending-pools", title: "How Lending Pools Work", level: 2 },
        { id: "interest-rates", title: "Interest Rate Models", level: 2 },
        { id: "collateral-borrowing", title: "Collateral and Borrowing", level: 2 },
        { id: "liquidation", title: "Liquidation Process", level: 2 },
        { id: "getting-started", title: "Getting Started", level: 2 },
      ]}
      faqs={[
        { question: "Is DeFi lending safe?", answer: "DeFi lending on established protocols is relatively safe but not risk-free. Major risks include smart contract vulnerabilities, oracle failures, and market volatility causing liquidation. Using audited protocols with long track records minimizes risk." },
        { question: "How much can I earn from DeFi lending?", answer: "Yields vary by asset and protocol. Stablecoin lending typically earns 3-8% APY. Volatile asset yields fluctuate more. Additional token incentives can boost returns but may decrease over time." },
        { question: "Do I need to lock my funds?", answer: "Most DeFi lending protocols allow instant withdrawal as long as there is available liquidity in the pool. Your funds are not locked for a fixed period, unlike many CeFi products." },
      ]}
      relatedArticles={[
        { title: "DeFi Interest Rates Explained", href: "/defi-lending/learn/defi-interest-rates-explained", category: "DeFi Lending" },
        { title: "Collateralization Ratios", href: "/defi-lending/learn/collateralization-ratios", category: "DeFi Lending" },
        { title: "Liquidation Mechanics", href: "/defi-lending/learn/liquidation-mechanics", category: "DeFi Lending" },
        { title: "Best DeFi Lending for Beginners", href: "/defi-lending/best/beginners", category: "DeFi Lending" },
      ]}
    >
      <section id="overview">
        <h2>DeFi Lending Overview</h2>
        <p>Decentralized finance lending eliminates traditional financial intermediaries by using smart contracts on blockchains to facilitate lending and borrowing. Instead of a bank matching lenders with borrowers, smart contracts create pooled lending markets where anyone can supply assets to earn interest and anyone can borrow by posting sufficient collateral. The entire process is transparent, permissionless, and governed by code rather than human decision-makers. Major protocols like Aave, Compound, and Spark collectively manage tens of billions of dollars in lending activity.</p>
        <p>The fundamental innovation is that DeFi lending is overcollateralized. Borrowers must deposit more value in collateral than they borrow, eliminating the need for credit checks, identity verification, or trust between parties. If a borrower's collateral value drops too far, the protocol automatically liquidates the position to protect lenders.</p>
      </section>
      <section id="lending-pools">
        <h2>How Lending Pools Work</h2>
        <p>DeFi lending protocols operate through liquidity pools. Lenders deposit assets into a pool and receive interest-bearing tokens (like aTokens on Aave or cTokens on Compound) representing their share. These tokens accrue value over time as interest payments flow into the pool from borrowers. The pool model means your funds are not lent to a specific borrower but instead contribute to a shared pool that multiple borrowers can draw from. This provides better liquidity for lenders since you can withdraw anytime there are available funds in the pool, without waiting for a specific borrower to repay.</p>
        <p>Each asset typically has its own pool with independent supply and borrow rates. The protocol's smart contracts track all deposits, withdrawals, borrows, and repayments in real-time, with interest calculated every block.</p>
      </section>
      <section id="interest-rates">
        <h2>Interest Rate Models</h2>
        <p>Most DeFi lending protocols use algorithmic interest rate models tied to pool utilization. Utilization is the ratio of borrowed funds to total supplied funds. When utilization is low (lots of supply, little borrowing), rates are low to incentivize borrowing. When utilization is high, rates increase to incentivize more deposits and discourage excessive borrowing. This creates a self-balancing mechanism that keeps pools liquid and rates market-driven. Protocols typically have a target utilization range with a kink point where rates increase steeply if utilization exceeds the optimal threshold.</p>
      </section>
      <section id="collateral-borrowing">
        <h2>Collateral and Borrowing</h2>
        <p>To borrow on DeFi lending protocols, you must first supply collateral. Each asset has a collateral factor (or loan-to-value ratio) that determines how much you can borrow against it. For example, if ETH has a collateral factor of 80%, depositing $10,000 of ETH allows you to borrow up to $8,000. In practice, you should borrow well below the maximum to avoid liquidation. Different assets have different collateral factors based on their volatility and liquidity. Stablecoins typically have higher collateral factors than volatile tokens. Some newer or less liquid assets may only be available for lending but not as collateral.</p>
      </section>
      <section id="liquidation">
        <h2>Liquidation Process</h2>
        <p>Liquidation is the mechanism that protects lenders when a borrower's collateral value drops too close to their loan value. Each protocol defines a liquidation threshold. If a borrower's health factor (collateral value relative to borrowed value) drops below the threshold, anyone can repay a portion of the borrower's debt and receive the borrower's collateral at a discount. This incentivizes liquidators to keep the protocol solvent. Liquidation typically involves a 5-15% penalty on the borrower's collateral. To avoid liquidation, borrowers should maintain a healthy collateral ratio and monitor their positions, especially during periods of high market volatility.</p>
      </section>
      <section id="getting-started">
        <h2>Getting Started</h2>
        <p>To start with DeFi lending, you need a crypto wallet like MetaMask, some tokens to supply, and a small amount of the chain's native token for gas fees. Begin by visiting a reputable protocol like Aave on a low-cost chain like Arbitrum or Base. Connect your wallet, choose an asset to supply, and approve the transaction. You will immediately start earning interest. For borrowing, supply collateral first, then navigate to the borrow section to take a loan against it. Start conservatively with small amounts and stable assets until you understand the mechanics fully.</p>
      </section>
    </LearnPageLayout>
  );
}
