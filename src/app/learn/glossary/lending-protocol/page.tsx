import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Lending Protocol? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what DeFi lending protocols are, how they work, major platforms like Aave and Compound, and how to evaluate lending protocols for safety and returns.",
};

export default function LendingProtocolPage() {
  return (
    <LearnPageLayout title="What Is a Lending Protocol?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="A lending protocol is a DeFi application that enables trustless borrowing and lending of cryptocurrency without intermediaries. Lenders deposit assets into smart contract pools and earn interest from borrowers who take loans by posting collateral. Interest rates are determined algorithmically based on supply and demand. Lending protocols like Aave, Compound, and Morpho form the backbone of DeFi, enabling leverage, capital efficiency, and yield generation."
      toc={[{ id: "definition", title: "What Is a Lending Protocol?", level: 2 }, { id: "how-lending-works", title: "How DeFi Lending Works", level: 2 }, { id: "major-protocols", title: "Major Lending Protocols", level: 2 }, { id: "evaluating-protocols", title: "Evaluating Lending Protocols", level: 2 }]}
      faqs={[{ question: "How do lending protocols determine interest rates?", answer: "Most lending protocols use utilization-based interest rate models. When a lending pool has low utilization (lots of supply, little borrowing), rates are low. As utilization increases, rates rise to attract more deposits and discourage excessive borrowing. At extreme utilization levels, rates spike dramatically to prevent liquidity shortages." },
        { question: "Can I lose money lending on DeFi?", answer: "While rare, yes. Risks include smart contract exploits, oracle manipulation attacks, bad debt from failed liquidations during extreme volatility, and governance attacks. Major protocols have insurance funds and strong track records, but no DeFi protocol is completely risk-free. Diversify across protocols and prioritize those with extensive audit histories." }]}
      relatedArticles={[{ title: "Borrowing", href: "/learn/glossary/borrowing", category: "Glossary" }, { title: "Collateralization", href: "/learn/glossary/collateralization", category: "Glossary" }, { title: "What Is DeFi?", href: "/learn/what-is-defi", category: "Learn Crypto" }, { title: "APR", href: "/learn/glossary/apr", category: "Glossary" }]}
    >
      <h2 id="definition">What Is a Lending Protocol?</h2>
      <p>A lending protocol is a set of smart contracts that create a decentralized money market. Lenders deposit assets and earn interest. Borrowers post collateral and borrow against it. The protocol manages the matching of supply and demand, interest rate calculations, collateral management, and liquidation of undercollateralized positions, all without human intervention. This creates a 24/7 global lending market accessible to anyone with a crypto wallet.</p>

      <h2 id="how-lending-works">How DeFi Lending Works</h2>
      <p>Lenders deposit tokens into a lending pool and receive interest-bearing receipt tokens (aTokens on Aave, cTokens on Compound). These receipt tokens accrue interest continuously. Borrowers deposit collateral, then borrow assets up to their collateral&apos;s LTV limit. If the borrower&apos;s collateral value drops below the liquidation threshold, liquidators repay the debt and seize the collateral at a discount. This mechanism ensures the protocol remains solvent.</p>

      <h2 id="major-protocols">Major Lending Protocols</h2>
      <p>Aave is the largest lending protocol by TVL, supporting multiple chains and hundreds of assets with advanced features like flash loans and efficiency mode. Compound pioneered the cToken model and algorithmic interest rates. Morpho optimizes lending rates through peer-to-peer matching. Spark (by MakerDAO) focuses on DAI lending. Each protocol has different risk parameters, supported assets, and fee structures. Major protocols have processed billions in loans without insolvency events.</p>

      <h2 id="evaluating-protocols">Evaluating Lending Protocols</h2>
      <p>Key evaluation criteria include audit history and bug bounty programs, TVL and its stability over time, governance quality and risk parameter management, oracle reliability, and liquidation efficiency. Check the protocol&apos;s historical handling of extreme market conditions. Review the asset listing process to ensure risky tokens are properly isolated. Protocols with modular architecture (like Morpho) and isolated lending markets (like Aave V3) provide better risk containment than monolithic pools.</p>
    </LearnPageLayout>
  );
}
