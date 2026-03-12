import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";

export const metadata: Metadata = { title: "Flash Loans Explained: How They Work in DeFi (2026)", description: "Learn how flash loans work, their use cases, risks, and impact on DeFi. Understand this unique financial primitive that allows zero-collateral borrowing." };

export default function FlashLoansExplainedPage() {
  return (
    <LearnPageLayout title="Flash Loans Explained" categoryName="Crypto Loans" categorySlug="crypto-loans" readTime="8 min"
      intro="Flash loans are one of DeFi's most innovative financial primitives: uncollateralized loans that must be borrowed and repaid within a single blockchain transaction. If the loan is not repaid by the end of the transaction, everything reverts as if nothing happened. This guide explains how flash loans work, their practical applications, and their impact on DeFi."
      toc={[
        { id: "how-they-work", title: "how-they-work", level: 2 },
        { id: "how-flash-loans-work", title: "How Flash Loans Work", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "common-use-cases", title: "Common Use Cases", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-controversies", title: "Risks & Controversies", level: 2 },
        { id: "future", title: "future", level: 2 },
        { id: "the-future-of-flash-loans", title: "The Future of Flash Loans", level: 2 }
      ]}
      faqs={[
        { question: "Can anyone use flash loans?", answer: "Flash loans require smart contract programming skills because the entire borrow-use-repay sequence must execute within a single transaction. Regular users cannot access flash loans through standard interfaces, but tools like DeFi Saver use flash loans behind the scenes to power user-friendly features." },
        { question: "Are flash loans free?", answer: "Most protocols charge a small fee. Aave charges 0.05% of the borrowed amount. Balancer charges no fee for flash loans. The borrower also pays gas costs for the transaction. Since flash loans are atomic, the only risk to the borrower is the gas cost of a failed transaction." },
        { question: "Have flash loans been used for exploits?", answer: "Yes. Flash loans have been used as a tool in many DeFi exploits, particularly for oracle manipulation attacks. However, flash loans are not malicious by themselves, they simply provide capital. The underlying vulnerabilities in exploited protocols would have been exploitable by well-capitalized attackers regardless." },
      ]}
      relatedArticles={[{ title: "Best Flash Loan Platforms", href: "/crypto-loans/best/flash-loans", category: "Crypto Loans" }, { title: "Smart Contract Risks", href: "/defi-lending/learn/smart-contract-risks", category: "DeFi Lending" }]}
    >
      <h2 id="how-they-work">How Flash Loans Work</h2>
      <p>Flash loans exploit the atomic nature of blockchain transactions. A transaction either succeeds entirely or fails entirely (reverts). A flash loan transaction contains three steps: borrow the funds, execute your desired operations (arbitrage, collateral swap, etc.), and repay the loan plus fee. If the repayment fails for any reason, the entire transaction reverts including the initial borrow, so the lender never loses funds. This atomicity is what makes zero-collateral lending possible.</p>

      <h2 id="use-cases">Common Use Cases</h2>
      <p>Arbitrage is the most common use: exploiting price differences between DEXs or lending protocols. Collateral swaps let borrowers change their loan collateral without closing and reopening positions. Self-liquidation enables borrowers to efficiently unwind leveraged positions. And debt refinancing allows moving loans between protocols in a single transaction to get better rates.</p>

      <h2 id="risks">Risks & Controversies</h2>
      <p>The main controversy around flash loans is their use in DeFi exploits. Attackers use flash loans to temporarily access large amounts of capital for oracle manipulation, governance attacks, and economic exploits. However, flash loans are tools, not weapons. They democratize access to capital that was previously available only to whales and institutional players. The root cause of flash loan exploits is always a vulnerability in the targeted protocol.</p>

      <h2 id="future">The Future of Flash Loans</h2>
      <p>Flash loans continue to evolve with the DeFi ecosystem. As protocols become more composable and cross-chain operations improve, flash loan use cases are expanding. Account abstraction and smart contract wallets may make flash loan-powered features more accessible to regular users, enabling sophisticated operations through simple interfaces.</p>
    </LearnPageLayout>
  );
}
