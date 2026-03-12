import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Flash Loan? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what flash loans are, how they work, and why they are both a powerful DeFi tool and a vector for exploits.",
};

export default function FlashLoanPage() {
  return (
    <LearnPageLayout
      title="What Is a Flash Loan?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A flash loan is an uncollateralized loan that must be borrowed and repaid within a single blockchain transaction. If the borrower cannot repay the full amount plus fees by the end of the transaction, the entire operation is automatically reverted as if it never happened. Flash loans are unique to DeFi and enable arbitrage, collateral swaps, and self-liquidation without requiring upfront capital."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-a-flash-loan", title: "What Is a Flash Loan?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-flash-loans-work", title: "How Flash Loans Work", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "legitimate-use-cases", title: "Legitimate Use Cases", level: 2 },
        { id: "flash-loan-attacks", title: "flash-loan-attacks", level: 2 },
        { id: "flash-loan-attacks", title: "Flash Loan Attacks", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-flash-loans-matter", title: "Why Flash Loans Matter", level: 2 }
      ]}
      faqs={[
        {
          question: "Do I need collateral for a flash loan?",
          answer:
            "No. Flash loans require zero collateral because the loan must be repaid within the same transaction. If repayment fails, the blockchain reverts the entire transaction, so the lender never actually loses funds. The atomicity of blockchain transactions is what makes this possible.",
        },
        {
          question: "Are flash loans only used for attacks?",
          answer:
            "No. While flash loan attacks receive the most attention, legitimate uses include arbitrage trading, collateral swapping in lending protocols, self-liquidation to avoid penalties, and complex DeFi position management. They democratize access to strategies that previously required large capital reserves.",
        },
      ]}
      relatedArticles={[
        { title: "What Is DeFi?", href: "/learn/glossary/defi", category: "Glossary" },
        { title: "What Is Arbitrage?", href: "/learn/glossary/arbitrage", category: "Glossary" },
        { title: "What Is Liquidity?", href: "/learn/glossary/liquidity", category: "Glossary" },
        { title: "What Is a Smart Contract?", href: "/learn/glossary/smart-contract", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Flash Loan?</h2>
      <p>
        A flash loan is a DeFi primitive that allows anyone to borrow any amount of available assets from a lending pool without posting collateral, provided the loan is repaid within the same transaction. This is possible because blockchain transactions are atomic: either every step succeeds, or the entire transaction reverts. Protocols like Aave and dYdX pioneered flash loans.
      </p>

      <h2 id="how-it-works">How Flash Loans Work</h2>
      <p>
        A flash loan transaction bundles multiple operations together. First, the borrower receives the loaned tokens. Then, they execute their desired operations (arbitrage, collateral swap, etc.). Finally, they repay the loan plus a small fee. If the final repayment step fails for any reason, the EVM reverts everything, including the initial borrowing. The lender faces zero risk of loss.
      </p>

      <h2 id="use-cases">Legitimate Use Cases</h2>
      <p>
        Arbitrage traders use flash loans to exploit price differences across DEXs without needing capital. Borrowers on lending platforms use them to swap collateral types in a single transaction. Users facing liquidation can flash-loan funds to repay debt and avoid liquidation penalties. These operations were previously available only to well-capitalized traders and institutions.
      </p>

      <h2 id="flash-loan-attacks">Flash Loan Attacks</h2>
      <p>
        Flash loans can be used to manipulate oracle prices or exploit protocol vulnerabilities. An attacker might borrow a large amount, manipulate a price feed by trading on a low-liquidity pool, exploit the mispriced asset in another protocol, and repay the loan with profit. These attacks have resulted in hundreds of millions of dollars in losses across DeFi and have driven improvements in oracle design and protocol security.
      </p>

      <h2 id="why-it-matters">Why Flash Loans Matter</h2>
      <p>
        Flash loans represent a financial primitive with no equivalent in traditional finance. They democratize access to large amounts of capital for anyone with the technical skill to construct the transaction. They also serve as a stress test for DeFi protocols, exposing vulnerabilities that might otherwise remain hidden until exploited by a well-funded attacker.
      </p>
    </LearnPageLayout>
  );
}
