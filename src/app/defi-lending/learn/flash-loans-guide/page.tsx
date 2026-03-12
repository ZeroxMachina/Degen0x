import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Flash Loans Guide: How They Work (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete guide to flash loans in DeFi. Learn how uncollateralized instant loans work, common use cases, risks, and how to execute flash loan transactions.",
  keywords: ["flash loans", "flash loan guide", "defi flash loans", "uncollateralized loans"],
};

export default function FlashLoansGuidePage() {
  return (
    <LearnPageLayout
      title="Flash Loans: Complete Guide"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="10 min"
      intro="Flash loans are one of the most innovative concepts in DeFi, allowing users to borrow any amount of assets without collateral as long as the loan is repaid within the same transaction. This unique primitive enables arbitrage, collateral swaps, self-liquidation, and complex multi-step strategies that would be impossible in traditional finance. This guide explains how flash loans work and how they are used in practice."
      toc={[
        { id: "what-are-flash-loans", title: "what-are-flash-loans", level: 2 },
        { id: "what-are-flash-loans", title: "What Are Flash Loans", level: 2 },
        { id: "how-they-work", title: "how-they-work", level: 2 },
        { id: "how-flash-loans-work", title: "How Flash Loans Work", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "common-use-cases", title: "Common Use Cases", level: 2 },
        { id: "providers", title: "providers", level: 2 },
        { id: "flash-loan-providers", title: "Flash Loan Providers", level: 2 },
        { id: "risks-considerations", title: "risks-considerations", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        { question: "Do I need collateral for a flash loan?", answer: "No collateral is required because the loan must be repaid within the same transaction. If the repayment fails, the entire transaction reverts as if it never happened. This atomic execution guarantees the protocol cannot lose funds." },
        { question: "How much does a flash loan cost?", answer: "Fees vary by provider. Aave charges 0.05% for flash loans (reduced from 0.09%). Balancer offers flash loans with 0% fee. Uniswap flash swaps have no explicit fee but require returning equivalent value. Gas costs also apply and can be significant for complex operations." },
      ]}
      relatedArticles={[
        { title: "How DeFi Lending Works", href: "/defi-lending/learn/how-defi-lending-works", category: "DeFi Lending" },
        { title: "DeFi Composability Guide", href: "/defi-lending/learn/defi-composability-guide", category: "DeFi Lending" },
      ]}
    >
      <section id="what-are-flash-loans">
        <h2>What Are Flash Loans</h2>
        <p>Flash loans are uncollateralized loans that must be borrowed and repaid within a single blockchain transaction. Unlike traditional loans where you provide collateral and repay over time, flash loans exploit the atomic nature of blockchain transactions. If the loan is not repaid by the end of the transaction, the entire operation reverts, meaning the borrow never actually occurred. This eliminates default risk entirely, which is why no collateral is needed. Flash loans were pioneered by Aave in January 2020 and have since become a fundamental DeFi building block. They can involve enormous sums, with individual flash loans exceeding hundreds of millions of dollars, because the protocol bears zero risk. The borrower only pays a small fee plus gas costs, regardless of the loan amount.</p>
      </section>
      <section id="how-they-work">
        <h2>How Flash Loans Work</h2>
        <p>A flash loan transaction contains three core steps bundled into a single atomic operation. First, the borrower requests funds from a flash loan provider like Aave. Second, the borrower executes their desired operations using the borrowed funds, such as arbitrage trades, collateral swaps, or liquidations. Third, the borrower repays the borrowed amount plus any fee back to the protocol. All three steps must succeed for the transaction to be valid. If the repayment fails for any reason, perhaps because the arbitrage opportunity was not profitable enough to cover the loan plus fees, the entire transaction reverts. The blockchain behaves as if none of the intermediate steps ever happened. This atomic guarantee is possible because blockchain transactions are all-or-nothing. Smart contract developers typically create custom contracts that implement a callback function which the flash loan provider calls after delivering the funds.</p>
      </section>
      <section id="use-cases">
        <h2>Common Use Cases</h2>
        <p>The most common use case for flash loans is arbitrage, where traders exploit price differences between decentralized exchanges. A flash loan provides the capital to buy an asset cheaply on one exchange and sell it for more on another, keeping the profit after repaying the loan. Collateral swaps allow borrowers to change their collateral asset without repaying their debt first: borrow via flash loan, repay existing debt, withdraw collateral, swap to new collateral, redeposit, and reborrow to repay the flash loan. Self-liquidation lets borrowers close underwater positions efficiently by repaying their own debt with a flash loan, withdrawing their collateral, and selling enough to repay the flash loan. Yield farming position management uses flash loans to leverage up or unwind leveraged positions in a single transaction. Flash loans are also used in governance attacks and have been involved in several DeFi exploits where attackers used them to manipulate oracle prices temporarily.</p>
      </section>
      <section id="providers">
        <h2>Flash Loan Providers</h2>
        <p>Aave is the largest flash loan provider, offering flash loans on all its deployed chains with a 0.05% fee. The maximum flash loan size is limited by the available liquidity in each lending pool. Balancer offers flash loans at zero fee, making it attractive for cost-sensitive operations, though available assets are limited to tokens in Balancer pools. Uniswap V2 and V3 offer flash swaps, which are similar to flash loans but integrated into the swap mechanism. dYdX offers flash loans through its margin trading infrastructure. DODO protocol provides flash loans for its pool assets. When choosing a provider, consider the available liquidity for your target asset, the fee structure, the chains supported, and the gas efficiency of the implementation. Many developers build contracts that can use multiple flash loan providers as fallbacks.</p>
      </section>
      <section id="risks-considerations">
        <h2>Risks and Considerations</h2>
        <p>While flash loans themselves are riskless for the borrower in terms of losing funds (failed transactions simply revert), there are important considerations. Smart contract risk in your custom flash loan contract could lead to unexpected behavior or locked funds. High gas costs on Ethereum mainnet can make small flash loan operations unprofitable, as complex multi-step transactions consume significant gas. Competition from other flash loan users, especially MEV bots, can front-run profitable opportunities before your transaction is processed. Flash loans have been used in numerous protocol exploits, often to manipulate prices or governance votes temporarily. As a result, protocols have implemented various defenses against flash loan attacks, including time-weighted average price oracles and governance time locks. For legitimate users, the main risk is wasted gas fees on failed transactions if market conditions change between transaction submission and execution.</p>
      </section>
    </LearnPageLayout>
  );
}
