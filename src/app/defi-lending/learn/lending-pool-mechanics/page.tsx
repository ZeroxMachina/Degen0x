import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How DeFi Lending Pools Work (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Understand DeFi lending pool mechanics. Learn how liquidity pools work, how deposits generate interest, and the math behind lending protocol operations.",
};

export default function LendingPoolMechanicsPage() {
  return (
    <LearnPageLayout title="How DeFi Lending Pools Work" categoryName="DeFi Lending" categorySlug="defi-lending" readTime="9 min read"
      intro="Lending pools are the fundamental building blocks of DeFi lending protocols. They aggregate deposits from many lenders, making them available for borrowers to draw from. Understanding how these pools operate, how interest accrues, and how liquidation maintains pool solvency helps you make better decisions as both a lender and borrower."
      toc={[{ id: "pool-structure", title: "Pool Structure and Token Mechanics", level: 2 }, { id: "interest-accrual", title: "How Interest Accrues", level: 2 }, { id: "liquidation-mechanism", title: "Liquidation Mechanism", level: 2 }, { id: "pool-risks", title: "Pool-Level Risks", level: 2 }]}
      faqs={[
        { question: "How do I earn interest in a lending pool?", answer: "When you deposit into a lending pool, you receive interest-bearing tokens (aTokens on Aave, cTokens on Compound). These tokens appreciate in value over time as borrowers pay interest, representing your growing share of the pool's total value." },
        { question: "Can I withdraw at any time?", answer: "Generally yes, as long as there is available liquidity. If utilization is very high (most deposits are borrowed), you may need to wait until borrowers repay or new deposits arrive. This temporary illiquidity is rare for major assets but can occur during market stress." },
        { question: "What happens if a borrower defaults?", answer: "In DeFi, default in the traditional sense is prevented by overcollateralization and automatic liquidation. If a borrower's collateral drops below the required ratio, their position is liquidated before the loan becomes underwater. Bad debt (undercollateralized debt) can occur in extreme scenarios and is absorbed by protocol reserves." },
      ]}
      relatedArticles={[
        { title: "Interest Rate Models", href: "/defi-lending/learn/interest-rate-models", category: "DeFi Lending" },
        { title: "Collateral Types Guide", href: "/defi-lending/learn/collateral-types-guide", category: "DeFi Lending" },
        { title: "Oracle Risk in Lending", href: "/defi-lending/learn/oracle-risk-lending", category: "DeFi Lending" },
      ]}
    >
      <h2 id="pool-structure">Pool Structure and Token Mechanics</h2>
      <p>A lending pool is a smart contract that holds deposited assets. When you deposit USDC into Aave, you receive aUSDC tokens that represent your share of the USDC pool. These receipt tokens are transferable ERC-20 tokens that can be used in other DeFi protocols. The exchange rate between the receipt token and the underlying asset increases over time as interest accrues. On Aave, aTokens rebase (your balance increases over time), while on Compound, cTokens appreciate in value (you hold the same number but each is worth more). Both approaches achieve the same economic result: your deposit grows by the interest earned. The pool maintains a liquidity buffer: not all deposits are lent out. The utilization rate (percentage borrowed) determines how much liquidity is available for withdrawals. Interest rate models ensure utilization stays within target ranges by adjusting rates.</p>

      <h2 id="interest-accrual">How Interest Accrues</h2>
      <p>Interest in DeFi lending pools is calculated per block (or per second in some implementations). The borrow rate is determined by the utilization-based interest rate model. Borrowers owe this rate on their outstanding debt, compounded continuously. The supply rate is derived from the borrow rate: supply rate equals borrow rate multiplied by utilization rate multiplied by (1 minus reserve factor). The reserve factor (typically 5-20%) directs a portion of interest to the protocol treasury rather than to lenders. For example, with a 5% borrow rate, 80% utilization, and 10% reserve factor, the supply rate would be approximately 3.6% (5% times 80% times 90%). Interest compounds with every interaction with the pool (deposit, withdraw, borrow, repay) as the pool&apos;s state is updated. Some protocols also update interest during oracle updates or on a time-based schedule.</p>

      <h2 id="liquidation-mechanism">Liquidation Mechanism</h2>
      <p>Liquidation maintains pool solvency by closing undercollateralized positions before they can cause bad debt. When a borrower&apos;s health factor drops below 1 (their debt exceeds the liquidation threshold of their collateral), any external actor can trigger liquidation. The liquidator repays a portion of the borrower&apos;s debt (typically up to 50% on Aave) and receives the equivalent collateral value plus a liquidation bonus (5-10%). This bonus incentivizes liquidators to act quickly. Professional liquidation bots monitor all positions continuously and compete to liquidate profitable positions. The liquidation process is permissionless: anyone can be a liquidator. For the pool, liquidation is positive because it converts a risky position into recovered capital. For the borrower, it is a costly forced sale. Bad debt occurs when collateral value drops faster than liquidation can occur, leaving the pool with uncovered debt. Protocol reserves and safety modules backstop these rare events.</p>

      <h2 id="pool-risks">Pool-Level Risks</h2>
      <p>Liquidity risk is the possibility that withdrawals exceed available liquidity. During market stress, many lenders may try to withdraw simultaneously while borrowers delay repayment. High utilization prevents withdrawals and interest rate spikes create pressure for the pool to rebalance. Oracle risk affects the entire pool: incorrect price feeds can trigger improper liquidations (harming borrowers) or prevent necessary liquidations (harming lenders). Protocols mitigate this with multiple oracle sources and fallback mechanisms. Bad debt risk occurs when collateral value drops so quickly that liquidation cannot cover the debt. Flash crashes, oracle failures, or low-liquidity collateral can cause bad debt. Protocol reserves absorb small amounts, while safety modules or governance intervention handles larger events. Concentration risk exists when a single large depositor or borrower dominates the pool. Their actions (large withdrawal or borrowing) can significantly impact rates and liquidity for all users.</p>
    </LearnPageLayout>
  );
}
