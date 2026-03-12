import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How Crypto Loans Are Taxed (${CURRENT_YEAR}) | degen0x`,
  description:
    "Complete guide to crypto loan taxation. Learn when crypto loans trigger tax events, how interest is treated, and the tax implications of liquidation.",
};

export default function CryptoLoanTaxesPage() {
  return (
    <LearnPageLayout
      title="How Crypto Loans Are Taxed"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="9 min read"
      intro="Crypto loans offer a way to access liquidity without triggering a taxable sale, but the tax implications are more complex than many realize. While borrowing itself is generally not a taxable event, activities surrounding the loan, including providing collateral in some DeFi protocols, earning interest from lending, and particularly getting liquidated, all have potential tax consequences. Understanding the complete tax picture of crypto loans is essential for proper compliance."
      toc={[
        { id: "borrowing-tax", title: "borrowing-tax", level: 2 },
        { id: "is-borrowing-taxable", title: "Is Borrowing Taxable?", level: 2 },
        { id: "interest-earned", title: "interest-earned", level: 2 },
        { id: "tax-on-interest-earned", title: "Tax on Interest Earned", level: 2 },
        { id: "liquidation-tax", title: "liquidation-tax", level: 2 },
        { id: "tax-implications-of-liquidation", title: "Tax Implications of Liquidation", level: 2 },
        { id: "defi-complications", title: "defi-complications", level: 2 },
        { id: "defi-specific-tax-complications", title: "DeFi-Specific Tax Complications", level: 2 },
        { id: "record-keeping", title: "record-keeping", level: 2 },
        { id: "record-keeping-requirements", title: "Record Keeping Requirements", level: 2 }
      ]}
      faqs={[
        { question: "Is taking out a crypto loan a taxable event?", answer: "Generally no. In most jurisdictions, borrowing funds is not a taxable event because a loan is not income and there is an obligation to repay. This applies to both crypto-backed loans and traditional loans. However, some DeFi mechanisms may involve token swaps that could trigger tax events." },
        { question: "Is interest paid on crypto loans tax deductible?", answer: "It depends on the use of funds and your jurisdiction. In the US, interest on loans used for investment purposes may be deductible as investment interest expense, subject to limitations. Interest on loans for personal use is generally not deductible. Consult a tax professional for your specific situation." },
        { question: "What happens tax-wise if my loan is liquidated?", answer: "Liquidation is typically a taxable event. When your collateral is sold by the liquidator, it is treated as a disposal of your crypto asset, triggering capital gains or losses. The gain or loss is the difference between the liquidation price and your original cost basis for the collateral." },
        { question: "Is earning interest from lending crypto taxable?", answer: "Yes. In most jurisdictions, interest earned from lending crypto (whether through DeFi or CeFi) is treated as income, taxable at your applicable income tax rate. This applies to both stablecoin and volatile crypto lending interest." },
      ]}
      relatedArticles={[
        { title: "DeFi Lending Taxes", href: "/defi-lending/learn/defi-lending-taxes", category: "DeFi Lending" },
        { title: "Bitcoin-Backed Loans", href: "/crypto-loans/learn/bitcoin-backed-loans", category: "Crypto Loans" },
        { title: "Liquidation Prevention", href: "/crypto-loans/learn/liquidation-prevention", category: "Crypto Loans" },
      ]}
    >
      <h2 id="borrowing-tax">Is Borrowing Taxable?</h2>
      <p>
        In most tax jurisdictions, taking out a loan is not a taxable event. This is because a loan represents an obligation to repay, not income. When you deposit Bitcoin as collateral and receive USDC as a loan, you have not sold your Bitcoin; you have entered into a borrowing arrangement. This is the primary tax benefit of crypto-backed loans: you access liquidity without triggering capital gains tax on appreciated collateral. However, the specific mechanics matter. In some DeFi protocols, depositing collateral may involve wrapping or converting tokens. Whether this token conversion constitutes a taxable disposal depends on your jurisdiction. The IRS has not issued specific guidance on whether receiving derivative tokens (aTokens, cTokens) constitutes a taxable event. Most tax professionals take the position that these are deposit receipts, not taxable swaps.
      </p>

      <h2 id="interest-earned">Tax on Interest Earned</h2>
      <p>
        Interest earned from lending crypto is taxable income in virtually all jurisdictions. Whether you lend through Aave, Compound, a CeFi platform, or participate in a lending pool, the interest you receive is treated as ordinary income taxable at your applicable rate. The income should be reported at the fair market value in your local currency at the time it is received or accrued. For DeFi protocols where interest accrues continuously through the increasing value of interest-bearing tokens, there is a question of whether income is recognized continuously or only when you withdraw. The conservative approach is to recognize income as it accrues. On the borrowing side, interest paid may be deductible. In the US, investment interest expense can be deducted against investment income. Personal interest is generally not deductible. Business loan interest is deductible as a business expense.
      </p>

      <h2 id="liquidation-tax">Tax Implications of Liquidation</h2>
      <p>
        Liquidation is one of the most significant tax events in crypto lending. When your collateral is liquidated, it is treated as a forced sale of your crypto assets. You must calculate the capital gain or loss based on the difference between the liquidation price and your original cost basis. If you deposited Bitcoin that you originally bought at $10,000 and it is liquidated at $25,000, you have a $15,000 capital gain, even though you lost the asset involuntarily. The liquidation penalty effectively reduces your proceeds, increasing any loss or reducing any gain. After liquidation, you still owe any remaining debt if the liquidation was partial. From a tax perspective, the liquidation event, the debt forgiveness (if any), and any remaining collateral return are all separate considerations. The tax hit from liquidation can be particularly painful because it forces you to realize gains at a time when you may not have planned for the tax liability.
      </p>

      <h2 id="defi-complications">DeFi-Specific Tax Complications</h2>
      <p>
        DeFi lending creates additional tax complexity. Providing collateral in some protocols involves token swaps that may be taxable. Claiming governance token rewards from lending is taxable income at fair market value when received. Using flash loans generates minimal tax impact since everything happens in one transaction, but the intermediate steps could technically involve multiple disposals. Refinancing between protocols may involve taxable swaps if the collateral or debt tokens are different. Compound interest that automatically compounds may trigger income recognition at each compounding event. Multi-step DeFi strategies that chain lending, borrowing, and staking create cascading tax events that can be extremely difficult to track manually. Using comprehensive DeFi tax tracking software is essential for accurately reporting all these events.
      </p>

      <h2 id="record-keeping">Record Keeping Requirements</h2>
      <p>
        Proper record keeping for crypto loans includes documenting the date and amount of collateral deposited, the fair market value at deposit time, the loan amount received, all interest payments made or received with dates and values, any collateral additions or withdrawals, any partial loan repayments, and the final disposition. For DeFi activities, record on-chain transaction hashes, timestamps, token amounts, and local currency values at transaction time. Use crypto tax software that can import DeFi transaction data from blockchain explorers. Keep records for at least the statute of limitations period in your jurisdiction, typically three to seven years. For crypto inherited or gifted, maintain records of the original cost basis. Inadequate records can result in a zero cost basis being applied, maximizing your taxable gain.
      </p>
    </LearnPageLayout>
  );
}
