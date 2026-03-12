import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in Norway (${CURRENT_YEAR}) | degen0x`,
  description:
    "Complete guide to cryptocurrency taxes in Norway. Learn about the 22% capital gains rate, Skatteetaten reporting, and Norwegian crypto tax rules.",
};

export default function CryptoTaxesNorwayPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in Norway"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="8 min read"
      intro="Norway taxes cryptocurrency gains at a 22% rate as capital income, administered by Skatteetaten (the Norwegian Tax Administration). Norway has established clear guidelines for crypto taxation, and Skatteetaten has been active in enforcement, obtaining data from exchanges and providing detailed guidance. Norwegian crypto investors benefit from relatively clear rules but must ensure accurate reporting of all transactions, including crypto-to-crypto trades."
      toc={[
        { id: "tax-rate", title: "tax-rate", level: 2 },
        { id: "22-capital-gains-rate", title: "22% Capital Gains Rate", level: 2 },
        { id: "taxable-events", title: "taxable-events", level: 2 },
        { id: "taxable-events", title: "Taxable Events", level: 2 },
        { id: "wealth-tax", title: "wealth-tax", level: 2 },
        { id: "wealth-tax-on-crypto", title: "Wealth Tax on Crypto", level: 2 },
        { id: "reporting", title: "reporting", level: 2 },
        { id: "reporting-requirements", title: "Reporting Requirements", level: 2 },
        { id: "tips-tools", title: "tips-tools", level: 2 },
        { id: "tips-and-tools", title: "Tips and Tools", level: 2 }
      ]}
      faqs={[
        { question: "What is the crypto tax rate in Norway?", answer: "Crypto gains are taxed at 22% as capital income (kapitalinntekt) in Norway. This flat rate applies to net gains after deducting losses. Additionally, crypto holdings are subject to wealth tax at 1% for net wealth exceeding approximately 1.7 million NOK (with a higher rate of 1.1% above approximately 20 million NOK)." },
        { question: "Is crypto-to-crypto trading taxable in Norway?", answer: "Yes. Skatteetaten considers every crypto-to-crypto swap a taxable disposal. Each trade triggers a capital gains calculation based on the NOK value at the time of the trade. This applies to all exchanges including decentralized exchanges." },
        { question: "How do I calculate cost basis in Norway?", answer: "Norway uses the FIFO (first-in, first-out) method for determining which units are sold. The cost basis includes the purchase price plus transaction fees. Each cryptocurrency is tracked separately, so your Bitcoin FIFO queue is independent from your Ethereum queue." },
        { question: "Does Skatteetaten have my exchange data?", answer: "Likely yes. Skatteetaten has obtained user data from Norwegian and international exchanges and uses it to identify unreported crypto income. Norway participates in EU and OECD information exchange frameworks. Voluntary correction of past returns before being contacted by the tax authority results in reduced penalties." },
      ]}
      relatedArticles={[
        { title: "Crypto Taxes in Sweden", href: "/taxes/learn/crypto-taxes-sweden", category: "Taxes" },
        { title: "Crypto Taxes in the Netherlands", href: "/taxes/learn/crypto-taxes-netherlands", category: "Taxes" },
        { title: "Crypto Taxes in Switzerland", href: "/taxes/learn/crypto-taxes-switzerland", category: "Taxes" },
      ]}
    >
      <h2 id="tax-rate">22% Capital Gains Rate</h2>
      <p>
        Norway taxes cryptocurrency capital gains at a flat 22% rate as capital income. This is the same rate applied to other forms of capital income such as interest and rental income. The 22% applies to net gains: total capital gains minus total capital losses from all capital income sources. Unlike Sweden&apos;s 70% loss deduction limitation, Norway allows full deduction of capital losses against capital gains. If your net capital income is negative (losses exceed gains), the deficit provides a tax credit at 22% that reduces your total tax. This means losses are fully valuable in Norway, which is more favorable than many other jurisdictions. The gain on each transaction is the selling price in NOK minus the cost basis in NOK. Transaction fees on both the buy and sell side are included in the calculation.
      </p>

      <h2 id="taxable-events">Taxable Events</h2>
      <p>
        Skatteetaten defines taxable disposal events for crypto as: selling for NOK or foreign fiat, trading one crypto for another, using crypto to purchase goods or services, gifting crypto to others, and using crypto to pay fees (such as network gas fees). Transferring crypto between your own wallets is not a taxable event. Receiving crypto as salary is taxed as employment income at progressive rates up to approximately 47.4%, and the crypto then has a cost basis equal to the taxed amount. Mining income for individuals is generally capital income at 22%, while business mining is taxed as business income. Staking rewards are income when received. Airdrops and hard fork tokens are taxable events if they have a market value at the time of receipt. The broad definition of taxable events means Norwegian investors need comprehensive transaction tracking.
      </p>

      <h2 id="wealth-tax">Wealth Tax on Crypto</h2>
      <p>
        Norway imposes an annual wealth tax on net assets exceeding approximately 1.7 million NOK per person. The rate is 1% on net wealth above this threshold, increasing to 1.1% for net wealth above approximately 20 million NOK. Crypto holdings are included in the wealth tax calculation at their market value on January 1st of the assessment year. For married couples, each person has their own threshold. The wealth tax applies to the total value of all assets minus liabilities, so debt can offset the crypto value. Crypto must be valued at the exchange rate (in NOK) on January 1st using a reputable source. Skatteetaten provides guidance on acceptable valuation methods. The wealth tax is an annual cost of holding crypto that adds to the overall tax burden, particularly for significant portfolios.
      </p>

      <h2 id="reporting">Reporting Requirements</h2>
      <p>
        Crypto transactions and holdings must be reported on the annual tax return (skattemelding). The return is pre-filled by Skatteetaten with information from employers, banks, and other sources. Crypto information is generally not pre-filled, so you must add it manually. Report each disposal in the capital gains section with selling price, cost basis, and gain or loss. Crypto holdings as of January 1st must be reported for wealth tax purposes. The tax return is due by April 30 of the year following the tax year. Skatteetaten has an online portal (Altinn) for electronic filing. If you discover errors after filing, you can submit a corrected return (endringsmelding) within three years. Voluntary corrections before being contacted by the tax authority result in reduced penalties compared to corrections made after an inquiry.
      </p>

      <h2 id="tips-tools">Tips and Tools</h2>
      <p>
        Norwegian crypto investors should use crypto tax software to manage the complexity of FIFO calculations across multiple transactions. Koinly, CoinTracker, and Recap (a Nordic-focused tool) support Norwegian tax rules and NOK-based calculations. Export all transaction data from exchanges at least annually and store it securely. For DeFi activities, track each on-chain transaction with its NOK value. Consider the timing of disposals relative to the January 1st wealth tax valuation date. Skatteetaten&apos;s website provides detailed guidance on crypto taxation in Norwegian, including examples of common scenarios. If you have complex situations involving DeFi, cross-border activities, or significant values, consulting a Norwegian tax advisor (skatteradgiver) is recommended. The combination of 22% capital gains tax and up to 1.1% annual wealth tax means Norwegian crypto investors face a meaningful total tax burden that should factor into investment decisions.
      </p>
    </LearnPageLayout>
  );
}
