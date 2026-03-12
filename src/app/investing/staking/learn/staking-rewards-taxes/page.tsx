import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Staking Rewards & Taxes: A Complete Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn how staking rewards are taxed, the difference between income tax and capital gains, and how to report staking income. Covers US, UK, and general international guidelines.",
};

export default function StakingRewardsTaxesPage() {
  return (
    <LearnPageLayout
      title="Staking Rewards & Taxes: What You Need to Know"
      categoryName="Staking"
      categorySlug="investing/staking"
      readTime="13 min"
      intro="Staking rewards create tax obligations in most jurisdictions, but the rules are complex and still evolving. This guide breaks down how staking income is taxed, the difference between regular staking and liquid staking for tax purposes, and practical strategies for tracking and reporting your staking rewards. Note: this is educational content, not tax advice. Consult a tax professional for your specific situation."
      toc={[
        { id: "reward-taxation", title: "reward-taxation", level: 2 },
        { id: "how-staking-rewards-are-taxed", title: "How Staking Rewards Are Taxed", level: 2 },
        { id: "income-vs-capital-gains", title: "income-vs-capital-gains", level: 2 },
        { id: "income-tax-vs-capital-gains", title: "Income Tax vs Capital Gains", level: 2 },
        { id: "liquid-staking-taxes", title: "liquid-staking-taxes", level: 2 },
        { id: "liquid-staking-tax-implications", title: "Liquid Staking Tax Implications", level: 2 },
        { id: "restaking-taxes", title: "restaking-taxes", level: 2 },
        { id: "restaking-tax-considerations", title: "Restaking Tax Considerations", level: 2 },
        { id: "record-keeping", title: "record-keeping", level: 2 },
        { id: "record-keeping-best-practices", title: "Record Keeping Best Practices", level: 2 },
        { id: "tax-tools", title: "tax-tools", level: 2 },
        { id: "tax-reporting-tools", title: "Tax Reporting Tools", level: 2 }
      ]}
      faqs={[
        {
          question: "Do I have to pay taxes on staking rewards?",
          answer: "In most jurisdictions including the US, yes. Staking rewards are generally treated as taxable income when received, valued at their fair market value at the time of receipt. When you later sell or trade the rewards, any change in value is subject to capital gains tax. Tax laws vary by country, so consult a local tax professional.",
        },
        {
          question: "When are staking rewards taxed?",
          answer: "In the US, the IRS considers staking rewards as taxable income at the time they are received (or when you gain dominion and control over them). For rebasing tokens like stETH, this may mean each daily rebase event creates a taxable event. For value-accruing tokens like rETH, the tax treatment is less clear and may differ.",
        },
        {
          question: "Are liquid staking tokens taxed differently?",
          answer: "The tax treatment of liquid staking tokens is still evolving. Converting ETH to stETH may or may not be a taxable event depending on your jurisdiction and how you interpret the transaction. The IRS has not provided specific guidance on liquid staking tokens. Conservative approaches treat the swap as a taxable disposal, while others view it as a non-taxable deposit.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Staking?", href: "/investing/staking/learn/what-is-staking", category: "Staking" },
        { title: "Staking Risks", href: "/investing/staking/learn/staking-risks", category: "Staking" },
        { title: "Staking Rewards Calculator", href: "/investing/staking/calculators/staking-rewards-calculator", category: "Tools" },
      ]}
    >
      <h2 id="reward-taxation">How Staking Rewards Are Taxed</h2>
      <p>
        In the United States, the IRS treats staking rewards as ordinary income, taxable at the time
        they are received. The fair market value of the tokens at the moment you gain dominion and
        control over them determines your taxable income. For example, if you receive 0.01 ETH in
        staking rewards when ETH is priced at $3,000, you would report $30 in income.
      </p>
      <p>
        This treatment applies to all forms of staking: direct staking on centralized exchanges,
        delegated staking through validators, and rewards from liquid staking protocols. The tax
        rate depends on your overall income bracket, which in the US can range from 10% to 37%
        for federal income tax.
      </p>
      <p>
        Many other countries follow similar approaches, treating staking rewards as income. The UK
        treats them as miscellaneous income, Australia considers them as ordinary income, and
        Germany may exempt them from tax if held for more than one year. Tax laws vary significantly
        by jurisdiction and are subject to change.
      </p>

      <h2 id="income-vs-capital-gains">Income Tax vs Capital Gains</h2>
      <p>
        Staking rewards create two separate tax events. First, when rewards are received, they are
        taxed as ordinary income at their fair market value. This establishes the cost basis for
        those tokens. Second, when you later sell, trade, or spend those reward tokens, any change
        in value from the time of receipt is subject to capital gains or losses tax.
      </p>
      <p>
        For example, if you received 0.01 ETH worth $30 as a staking reward and later sold it when
        it was worth $50, you would owe capital gains tax on the $20 gain. If the asset&apos;s value
        decreased and you sold at $20, you could claim a $10 capital loss. The holding period
        (short-term vs long-term) affects the capital gains rate in the US.
      </p>

      <h2 id="liquid-staking-taxes">Liquid Staking Tax Implications</h2>
      <p>
        Liquid staking creates additional tax complexity. A key unresolved question is whether
        depositing ETH into a liquid staking protocol and receiving stETH or rETH constitutes a
        taxable exchange. A conservative interpretation treats it as a disposal of ETH and acquisition
        of a new asset (taxable event). A more favorable interpretation treats it as a deposit
        (non-taxable) since the economic exposure remains the same.
      </p>
      <p>
        Rebasing tokens like stETH create particularly complex situations because your balance
        changes daily. Each rebase could technically be a separate income event, requiring daily
        tracking of fair market values. Value-accruing tokens like rETH may be simpler since your
        balance does not change; instead, the value per token increases, and tax may only be
        triggered when you sell or convert.
      </p>
      <p>
        The lack of clear regulatory guidance on liquid staking token taxation means that different
        tax professionals may reach different conclusions. Document your approach and be consistent.
        Using crypto tax software that supports liquid staking tokens can help manage the complexity.
      </p>

      <h2 id="restaking-taxes">Restaking Tax Considerations</h2>
      <p>
        Restaking through EigenLayer adds another layer of tax complexity. Depositing stETH into
        EigenLayer may or may not be a taxable event. AVS rewards received through restaking are
        likely taxable as income, similar to base staking rewards. The conversion to and from
        Liquid Restaking Tokens (LRTs) introduces additional potential taxable events.
      </p>
      <p>
        Given the novelty of restaking, there is essentially no specific tax guidance available.
        Users engaging in restaking should maintain detailed records of all deposits, withdrawals,
        and reward claims. Working with a tax professional who understands DeFi is strongly
        recommended for anyone participating in restaking strategies.
      </p>

      <h2 id="record-keeping">Record Keeping Best Practices</h2>
      <p>
        Maintaining accurate records is essential for tax compliance. For every staking transaction,
        record the date, the amount of tokens received or sent, the fair market value at the time,
        the platform used, and any fees paid. For liquid staking, additionally track the exchange
        rate between the LST and the underlying asset at the time of deposit and withdrawal.
      </p>
      <p>
        Export transaction histories regularly from every platform and protocol you use. Blockchain
        explorers can serve as backup records since all on-chain transactions are permanently
        recorded. Organize records by tax year and keep them for at least seven years as most tax
        authorities require. Waiting until tax season to compile records is far more difficult
        than maintaining them throughout the year.
      </p>

      <h2 id="tax-tools">Tax Reporting Tools</h2>
      <p>
        Several crypto tax software platforms support staking reward tracking and reporting. Tools
        like Koinly, CoinTracker, TokenTax, and CryptoTaxCalculator can import transactions from
        major exchanges and blockchain addresses, calculate your tax obligations, and generate
        reports compatible with tax filing software.
      </p>
      <p>
        When choosing a tax tool, verify that it supports the specific staking protocols and liquid
        staking tokens you use. Not all tools handle rebasing tokens, restaking, or DeFi interactions
        correctly. Review the generated reports carefully and consider having a tax professional
        review complex situations involving multiple staking layers and DeFi strategies.
      </p>
    </LearnPageLayout>
  );
}
