import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How Is Crypto Taxed? ${CURRENT_YEAR} Tax Rules Explained`,
  description: `Understand how cryptocurrency is taxed in ${CURRENT_YEAR}. Capital gains rates, income tax treatment, and IRS rules for Bitcoin, Ethereum, and other crypto.`,
  alternates: { canonical: "/taxes/learn/how-crypto-is-taxed" },
};

const toc = [
  { id: "property-classification", title: "Property Classification", level: 2 },
  { id: "capital-gains-tax", title: "Capital Gains Tax", level: 2 },
  { id: "income-tax", title: "Income Tax on Crypto", level: 2 },
  { id: "tax-rates", title: "Tax Rates", level: 2 },
  { id: "reporting", title: "Reporting Requirements", level: 2 },
];

const faqs = [
  { question: "Is crypto taxed like stocks?", answer: "Yes, very similarly. The IRS treats cryptocurrency as property, just like stocks. Capital gains and losses are calculated the same way: sale price minus cost basis equals gain or loss. Short-term and long-term holding periods apply identically. The main difference is that crypto-to-crypto trades are taxable, similar to exchanging one stock for another." },
  { question: "How much tax do I pay on crypto gains?", answer: "Short-term gains (held under one year) are taxed at your ordinary income rate (10-37%). Long-term gains (held over one year) are taxed at preferential rates of 0%, 15%, or 20% based on your income. An additional 3.8% Net Investment Income Tax applies if your income exceeds certain thresholds." },
  { question: "Are crypto-to-crypto trades taxable?", answer: "Yes. Swapping one cryptocurrency for another is a taxable event. You must calculate the gain or loss based on the fair market value of the crypto you received minus the cost basis of the crypto you gave up. This applies to DEX swaps, exchange trades, and any other token-to-token conversions." },
];

export default function HowCryptoIsTaxedPage() {
  return (
    <LearnPageLayout
      title="How Is Cryptocurrency Taxed?"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="10 min"
      intro="The IRS has been clear: cryptocurrency is property, and it is subject to tax. But the specifics of how different crypto activities are taxed can be confusing. This guide breaks down the tax treatment for every type of crypto transaction so you know exactly what you owe."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "Complete Crypto Tax Guide", href: "/taxes/learn/crypto-tax-guide", category: "Taxes" },
        { title: "Capital Gains Explained", href: "/taxes/learn/capital-gains", category: "Taxes" },
        { title: "Cost Basis Methods", href: "/taxes/learn/cost-basis-methods", category: "Taxes" },
      ]}
    >
      <section id="property-classification" className="mb-10">
        <h2>Property Classification</h2>
        <p>
          Since IRS Notice 2014-21, cryptocurrency has been classified as property for federal
          tax purposes. This means general tax principles applicable to property transactions
          apply to crypto. Every Bitcoin, Ethereum, or altcoin you hold is treated like a share
          of stock or a piece of real estate from a tax perspective.
        </p>
        <p>
          This classification has important implications. Unlike foreign currencies, crypto does
          not qualify for Section 988 treatment. Unlike collectibles, most crypto is taxed at
          standard capital gains rates rather than the 28% collectibles rate. And unlike
          securities, crypto is not currently subject to wash sale rules (though legislation to
          change this has been proposed).
        </p>
      </section>

      <section id="capital-gains-tax" className="mb-10">
        <h2>Capital Gains Tax</h2>
        <p>
          When you sell, trade, or spend cryptocurrency, you trigger a capital gains tax event.
          Your gain or loss is the difference between what you received (the sale price or fair
          market value) and your cost basis (what you originally paid plus fees). If the result
          is positive, you have a capital gain. If negative, you have a capital loss.
        </p>
        <p>
          Capital losses can offset capital gains, reducing your tax bill. If your losses exceed
          your gains, you can deduct up to $3,000 per year against ordinary income and carry
          forward remaining losses to future years. This makes strategic tax-loss harvesting a
          powerful tool for crypto investors.
        </p>
      </section>

      <section id="income-tax" className="mb-10">
        <h2>Income Tax on Crypto</h2>
        <p>
          Cryptocurrency received as income is taxed at ordinary income rates based on the fair
          market value at the time of receipt. This includes mining rewards, staking income,
          airdrops, hard fork tokens (if you have dominion and control), referral bonuses,
          payment for goods or services, and interest from lending platforms.
        </p>
        <p>
          The fair market value at receipt becomes your cost basis for that crypto. If you receive
          0.1 ETH worth $200 as staking income, you pay income tax on $200 and your cost basis
          for that 0.1 ETH is $200. When you later sell it, any gain above $200 is a capital gain.
        </p>
      </section>

      <section id="tax-rates" className="mb-10">
        <h2>Tax Rates</h2>
        <p>
          Short-term capital gains (assets held one year or less) are taxed at your marginal
          ordinary income rate, ranging from 10% to 37% for 2024. Long-term capital gains (assets
          held more than one year) are taxed at 0% for income up to $47,025 (single filers),
          15% for income up to $518,900, and 20% for income above that threshold.
        </p>
        <p>
          High-income taxpayers may also owe the 3.8% Net Investment Income Tax (NIIT) on
          capital gains if their modified adjusted gross income exceeds $200,000 (single) or
          $250,000 (married filing jointly). State taxes may add additional liability depending on
          your jurisdiction. Some states like Texas, Florida, and Wyoming have no state income tax.
        </p>
      </section>

      <section id="reporting" className="mb-10">
        <h2>Reporting Requirements</h2>
        <p>
          All crypto transactions must be reported on your tax return. Capital gains and losses
          go on Form 8949 and Schedule D. Crypto income goes on Schedule 1 or Schedule C if you
          are self-employed. Since 2020, the IRS has included a crypto question on the front page
          of Form 1040 asking if you received, sold, exchanged, or disposed of any digital assets.
        </p>
        <p>
          Starting in 2025, exchanges and brokers are required to issue 1099-DA forms reporting
          your crypto transactions to both you and the IRS. This makes accurate reporting more
          important than ever, as the IRS will be able to cross-reference your return against
          exchange-reported data.
        </p>
      </section>
    </LearnPageLayout>
  );
}
