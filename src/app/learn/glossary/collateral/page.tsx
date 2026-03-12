import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Collateral in Crypto? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what collateral means in crypto, how it works in DeFi lending, over-collateralization, liquidation risks, and why it matters for borrowing.",
};

export default function CollateralPage() {
  return (
    <LearnPageLayout
      title="What Is Collateral in Crypto?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="Collateral in crypto refers to assets pledged as security for a loan or leveraged position. Because crypto lending often occurs without traditional credit checks, borrowers must deposit cryptocurrency worth more than the loan value (over-collateralization). If the collateral value drops below a certain threshold, the position is liquidated to repay the lender."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-collateral", title: "What Is Collateral?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-it-works-in-crypto", title: "How It Works in Crypto", level: 2 },
        { id: "over-collateralization", title: "over-collateralization", level: 2 },
        { id: "over-collateralization", title: "Over-Collateralization", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks", title: "Risks", level: 2 }
      ]}
      faqs={[
        {
          question: "What is a collateral ratio?",
          answer:
            "The collateral ratio is the value of your deposited collateral divided by the value of your loan, expressed as a percentage. For example, depositing $150 of ETH to borrow $100 gives a 150% collateral ratio. Most DeFi protocols require minimum ratios between 110% and 200%.",
        },
        {
          question: "What happens if my collateral gets liquidated?",
          answer:
            "If the value of your collateral falls below the protocol's minimum threshold, your position is partially or fully liquidated. The protocol sells your collateral to repay the loan. You keep the borrowed funds but lose your collateral. Liquidations often include a penalty fee on top of the loss.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Liquidation?", href: "/learn/glossary/liquidation", category: "Glossary" },
        { title: "What Is DeFi?", href: "/learn/glossary/defi", category: "Glossary" },
        { title: "What Is Leverage?", href: "/learn/glossary/leverage", category: "Glossary" },
        { title: "What Is a Stablecoin?", href: "/learn/glossary/stablecoin", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Collateral?</h2>
      <p>
        Collateral is an asset that a borrower pledges to a lender as security for a loan. If the borrower fails to repay, the lender can seize the collateral. In traditional finance, a house serves as collateral for a mortgage. In crypto, digital assets like ETH, BTC, or stablecoins serve as collateral for on-chain loans.
      </p>

      <h2 id="how-it-works">How It Works in Crypto</h2>
      <p>
        In DeFi lending protocols like Aave and Compound, you deposit crypto as collateral into a smart contract. The protocol then allows you to borrow a percentage of the collateral&apos;s value in another asset. For example, you might deposit $1,000 worth of ETH and borrow $500 in USDC. The smart contract automatically manages the collateral and enforces repayment rules.
      </p>

      <h2 id="over-collateralization">Over-Collateralization</h2>
      <p>
        Most crypto loans require over-collateralization, meaning you must deposit collateral worth more than the loan. This buffer accounts for the volatility of crypto assets. If you deposit $150 to borrow $100, the extra $50 protects the lender in case the collateral drops in value. This is the opposite of traditional under-collateralized lending where credit scores enable borrowing more than you deposit.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        Collateral enables trustless borrowing and lending in DeFi — no identity verification, credit score, or relationship with a bank is needed. It allows crypto holders to access liquidity without selling their assets, which can have tax and strategic advantages. Understanding collateral mechanics is essential for anyone participating in DeFi lending or leveraged trading.
      </p>

      <h2 id="risks">Risks</h2>
      <p>
        The primary risk is liquidation during sharp market downturns. If the collateral value falls too quickly, you may not have time to add more collateral or repay the loan. Cascading liquidations can amplify market crashes as forced selling drives prices lower, triggering more liquidations. Smart contract bugs and oracle failures can also cause inappropriate liquidations.
      </p>
    </LearnPageLayout>
  );
}
