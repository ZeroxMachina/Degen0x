import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in Ireland (${CURRENT_YEAR}) | degen0x`,
  description:
    "Complete guide to cryptocurrency taxes in Ireland. Learn about Capital Gains Tax, the 33% rate, and Revenue's reporting requirements for Irish crypto investors.",
};

export default function CryptoTaxesIrelandPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in Ireland"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="8 min read"
      intro="Ireland taxes cryptocurrency gains under its Capital Gains Tax (CGT) framework at a rate of 33%, one of the higher rates in Europe. The Irish Revenue Commissioners treat crypto as an asset, meaning all disposals including crypto-to-crypto trades are taxable events. Ireland also has unique payment deadlines with preliminary CGT due in two separate installments during the tax year. Understanding these rules is essential for Irish crypto investors to avoid penalties and interest."
      toc={[
        { id: "cgt-rate", title: "cgt-rate", level: 2 },
        { id: "capital-gains-tax-at-33", title: "Capital Gains Tax at 33%", level: 2 },
        { id: "taxable-events", title: "taxable-events", level: 2 },
        { id: "taxable-events", title: "Taxable Events", level: 2 },
        { id: "payment-deadlines", title: "payment-deadlines", level: 2 },
        { id: "payment-deadlines", title: "Payment Deadlines", level: 2 },
        { id: "income-tax", title: "income-tax", level: 2 },
        { id: "crypto-income-tax", title: "Crypto Income Tax", level: 2 },
        { id: "compliance", title: "compliance", level: 2 },
        { id: "compliance-and-filing", title: "Compliance and Filing", level: 2 }
      ]}
      faqs={[
        { question: "What is the crypto tax rate in Ireland?", answer: "Ireland applies a 33% Capital Gains Tax rate on crypto gains. This is one of the highest CGT rates in Europe. The annual CGT exemption of 1,270 euros applies, meaning the first 1,270 euros of total capital gains (from all sources, not just crypto) in a year are tax-free." },
        { question: "Is crypto-to-crypto trading taxable in Ireland?", answer: "Yes. Revenue treats every crypto-to-crypto swap as a disposal and acquisition. Each trade triggers a CGT calculation. This means swapping Bitcoin for Ethereum, for example, is a taxable event based on the euro value of the Bitcoin at the time of the trade." },
        { question: "When do I need to pay CGT in Ireland?", answer: "Ireland has two CGT payment periods. Gains from January 1 to November 30 must be paid by December 15 of the same year. Gains from December 1 to December 31 must be paid by January 31 of the following year. The annual CGT return (Form 11 or CG1) must be filed by October 31 of the following year." },
        { question: "Can I offset crypto losses against gains?", answer: "Yes. Capital losses from crypto can offset capital gains from the same or future tax years. Losses must be reported to Revenue in the year they occur. Losses can be carried forward indefinitely but cannot be carried back to prior years. Losses can only offset capital gains, not income." },
      ]}
      relatedArticles={[
        { title: "Crypto Taxes in the Netherlands", href: "/taxes/learn/crypto-taxes-netherlands", category: "Taxes" },
        { title: "Crypto Taxes in Sweden", href: "/taxes/learn/crypto-taxes-sweden", category: "Taxes" },
        { title: "DeFi Lending Taxes", href: "/defi-lending/learn/defi-lending-taxes", category: "DeFi Lending" },
      ]}
    >
      <h2 id="cgt-rate">Capital Gains Tax at 33%</h2>
      <p>
        Ireland imposes CGT at 33% on net capital gains from cryptocurrency disposals. The annual personal exemption of 1,270 euros applies to total capital gains from all sources combined, not per asset class. After applying the exemption, the remaining net gains are taxed at the flat 33% rate regardless of the amount. Cost basis is calculated using the FIFO (first-in, first-out) method. Allowable deductions include the original purchase price, exchange fees, and transaction fees directly related to the acquisition and disposal. The 33% rate applies equally to short-term and long-term gains. There is no reduced rate for assets held longer periods. Ireland also has a four-week rule similar to the UK bed and breakfast rule: if you sell crypto at a loss and repurchase the same crypto within four weeks, the loss may be restricted.
      </p>

      <h2 id="taxable-events">Taxable Events</h2>
      <p>
        Revenue treats cryptocurrency as an asset for CGT purposes. Taxable disposal events include selling crypto for euros or any fiat currency, trading one crypto for another, using crypto to purchase goods or services, gifting crypto (deemed disposal at market value), and receiving crypto in exchange for providing liquidity. Transferring crypto between your own wallets is not a taxable event as there is no change in beneficial ownership. Receiving crypto from a hard fork or airdrop is not immediately taxable but creates a new asset with a potential zero cost basis. When that forked or airdropped asset is later sold, the entire proceeds may be a taxable gain. Mining crypto is treated as a trade or miscellaneous income when received, and subsequently selling the mined crypto triggers a separate CGT event. Staking rewards are likely income when received.
      </p>

      <h2 id="payment-deadlines">Payment Deadlines</h2>
      <p>
        Ireland has a unique split-year CGT payment system. For gains realized between January 1 and November 30 of a tax year, the CGT is due by December 15 of the same year (this is the initial period). For gains realized in December (December 1-31), the CGT is due by January 31 of the following year (this is the later period). This means you may need to make two CGT payments within the same tax year. The annual tax return itself (Form 11 for self-assessed individuals or Form CG1 for PAYE workers) is due by October 31 of the year following the tax year. Late payment attracts interest at 0.0219% per day and potential surcharges. The split-year system catches many crypto investors off guard, especially those making gains late in the year who must pay tax before the annual return is due.
      </p>

      <h2 id="income-tax">Crypto Income Tax</h2>
      <p>
        Certain crypto activities are taxed as income rather than capital gains. Mining income is treated as trading income if conducted as a business, or as miscellaneous income for hobbyist miners. The income is valued in euros at the time the crypto is received. Staking rewards, yield farming income, and DeFi lending interest are generally treated as income taxable at your marginal income tax rate (up to 40%) plus USC (Universal Social Charge) and PRSI (Pay Related Social Insurance), bringing the effective marginal rate to approximately 52% for higher earners. Crypto received as salary or wages is taxed as employment income. If you operate a business that earns crypto, it is treated as trading income. The distinction between income and capital gains is important because income tax rates are significantly higher than the 33% CGT rate, but income activities may allow deduction of related expenses.
      </p>

      <h2 id="compliance">Compliance and Filing</h2>
      <p>
        Irish Revenue has been increasing its focus on crypto tax compliance. Revenue has access to data from Irish and EU-based exchanges and participates in international information exchange programs including the EU DAC8 directive and OECD CARF. Self-assessed taxpayers file Form 11, while PAYE workers with crypto gains can file Form CG1 specifically for capital gains. Ensure you include all crypto disposals including crypto-to-crypto trades, which are frequently overlooked. Use crypto tax software that supports euro-based FIFO calculations to generate accurate reports. Koinly, CoinTracker, and CryptoTaxCalculator all support Irish tax rules. Revenue offers a voluntary disclosure process for taxpayers who have previously failed to report crypto gains, which can reduce penalties. Penalties for non-compliance include surcharges of up to 10% of the tax due, plus daily interest and potential publication of tax defaulters.
      </p>
    </LearnPageLayout>
  );
}
