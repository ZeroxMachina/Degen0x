import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Complete Crypto Tax Guide ${CURRENT_YEAR} - Everything You Need to Know`,
  description: `The definitive crypto tax guide for ${CURRENT_YEAR}. Learn how cryptocurrency is taxed, what you owe, and how to file correctly with the IRS.`,
  alternates: { canonical: "/taxes/learn/crypto-tax-guide" },
};

const toc = [
  { id: "overview", title: "Tax Overview", level: 2 },
  { id: "taxable-events", title: "Taxable Events", level: 2 },
  { id: "non-taxable-events", title: "Non-Taxable Events", level: 2 },
  { id: "record-keeping", title: "Record Keeping", level: 2 },
  { id: "filing-tips", title: "Filing Tips", level: 2 },
];

const faqs = [
  { question: "Do I have to pay taxes on crypto?", answer: "Yes. The IRS treats cryptocurrency as property. Any time you sell, trade, or spend crypto at a gain, you owe capital gains tax. Receiving crypto as income (mining, staking, airdrops, payment for services) is taxed as ordinary income at its fair market value when received." },
  { question: "What happens if I do not report crypto on my taxes?", answer: "Failure to report crypto can result in penalties, interest, and potential criminal charges. The IRS receives data from major exchanges through 1099 forms and has partnered with blockchain analytics firms. They have sent warning letters to hundreds of thousands of crypto holders and are increasing enforcement." },
  { question: "Do I owe taxes if I just hold crypto and do not sell?", answer: "No. Simply buying and holding cryptocurrency is not a taxable event. You only owe taxes when you dispose of crypto (sell, trade, or spend it) or receive it as income. However, you should still track your cost basis for when you eventually sell." },
];

export default function CryptoTaxGuidePage() {
  return (
    <LearnPageLayout
      title="Complete Crypto Tax Guide"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="15 min"
      intro="Cryptocurrency taxation can be complex, but understanding the basics is essential for every crypto investor. This comprehensive guide covers how crypto is taxed in the United States, what triggers a taxable event, how to calculate what you owe, and best practices for staying compliant with the IRS."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "How Crypto Is Taxed", href: "/taxes/learn/how-crypto-is-taxed", category: "Taxes" },
        { title: "Capital Gains Explained", href: "/taxes/learn/capital-gains", category: "Taxes" },
        { title: "How to File Crypto Taxes", href: "/taxes/learn/how-to-file", category: "Taxes" },
      ]}
    >
      <section id="overview" className="mb-10">
        <h2>Crypto Tax Overview</h2>
        <p>
          The IRS classifies cryptocurrency as property, not currency. This means crypto
          transactions are subject to capital gains tax rules similar to stocks, real estate,
          and other investment assets. Every time you dispose of cryptocurrency you must
          calculate whether you had a gain or loss and report it on your tax return.
        </p>
        <p>
          Tax rates depend on how long you held the asset. Short-term capital gains (held less
          than one year) are taxed at your ordinary income rate, which can be as high as 37%.
          Long-term capital gains (held more than one year) benefit from preferential rates of
          0%, 15%, or 20% depending on your income bracket. This makes holding period a critical
          factor in tax planning.
        </p>
      </section>

      <section id="taxable-events" className="mb-10">
        <h2>Taxable Events</h2>
        <p>
          Selling crypto for fiat currency triggers capital gains tax on any profit. Trading one
          cryptocurrency for another (such as swapping ETH for SOL) is also a taxable event based
          on the fair market value at the time of the trade. Using crypto to purchase goods or
          services is treated as a sale at the moment of spending.
        </p>
        <p>
          Receiving cryptocurrency as income is taxed differently. Mining rewards, staking income,
          airdrops, and payments for work are all treated as ordinary income at the fair market
          value when received. This income forms the cost basis for future capital gains
          calculations when you eventually sell or trade those tokens.
        </p>
      </section>

      <section id="non-taxable-events" className="mb-10">
        <h2>Non-Taxable Events</h2>
        <p>
          Buying cryptocurrency with fiat currency is not taxable. Transferring crypto between
          your own wallets or exchange accounts is not taxable as long as you maintain the same
          cost basis. Donating crypto to a qualified charity can actually provide a tax deduction
          equal to the fair market value without triggering capital gains.
        </p>
        <p>
          Gifting cryptocurrency is generally not taxable for the sender up to the annual gift
          tax exclusion ($18,000 per recipient in 2024). The recipient inherits the original cost
          basis and holding period. Receiving crypto as a gift is not taxable until you sell it.
        </p>
      </section>

      <section id="record-keeping" className="mb-10">
        <h2>Record Keeping</h2>
        <p>
          Maintaining detailed records is essential for accurate tax reporting. For every
          transaction, you should track the date, amount of crypto, fair market value at the time,
          purpose of the transaction, fees paid, and the counterparty (exchange or wallet address).
          Most crypto tax software can import this data directly from exchanges and blockchains.
        </p>
        <p>
          Keep records for at least three years after filing (the standard IRS audit window),
          though six years is recommended for significant underreporting protection. Export
          transaction histories from exchanges regularly since some platforms only retain data
          for a limited period or may shut down.
        </p>
      </section>

      <section id="filing-tips" className="mb-10">
        <h2>Filing Tips</h2>
        <p>
          Use dedicated crypto tax software like Koinly, CoinTracker, or CryptoTaxCalculator to
          automate calculations. These tools import your transaction history, calculate gains and
          losses, and generate the tax forms you need (Form 8949 and Schedule D). Manual
          calculation is extremely error-prone for anyone with more than a handful of transactions.
        </p>
        <p>
          File on time even if you cannot pay the full amount. The failure-to-file penalty is
          significantly higher than the failure-to-pay penalty. If you have complex situations
          involving DeFi, international exchanges, or large amounts, consider consulting a
          crypto-specialized tax professional. The cost of professional help is often far less
          than the risk of penalties from incorrect filing.
        </p>
      </section>
    </LearnPageLayout>
  );
}
