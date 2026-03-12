import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in Thailand (${CURRENT_YEAR}) | degen0x`,
  description:
    "Complete guide to cryptocurrency taxes in Thailand. Learn about the 15% withholding tax, capital gains obligations, and the Revenue Department's crypto tax rules.",
};

export default function CryptoTaxesThailandPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in Thailand"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="8 min read"
      intro="Thailand has established formal crypto tax rules through the Revenue Department and the SEC Thailand. Crypto gains are subject to personal income tax at progressive rates up to 35%, and a 15% withholding tax applies to certain crypto income. Thailand briefly considered and then dropped a proposed transaction tax on crypto, but the income tax obligations remain. The regulatory framework balances encouraging the growing Thai crypto market with ensuring tax compliance."
      toc={[
        { id: "tax-framework", title: "tax-framework", level: 2 },
        { id: "thai-crypto-tax-framework", title: "Thai Crypto Tax Framework", level: 2 },
        { id: "income-tax", title: "income-tax", level: 2 },
        { id: "personal-income-tax-on-crypto", title: "Personal Income Tax on Crypto", level: 2 },
        { id: "withholding-tax", title: "withholding-tax", level: 2 },
        { id: "withholding-tax", title: "Withholding Tax", level: 2 },
        { id: "vat-exemption", title: "vat-exemption", level: 2 },
        { id: "vat-exemption", title: "VAT Exemption", level: 2 },
        { id: "reporting-compliance", title: "reporting-compliance", level: 2 },
        { id: "reporting-and-compliance", title: "Reporting and Compliance", level: 2 }
      ]}
      faqs={[
        { question: "How are crypto gains taxed in Thailand?", answer: "Crypto gains are treated as assessable income under the Revenue Code. They are subject to personal income tax at progressive rates from 5% to 35% depending on your total income bracket. Gains are calculated as the difference between the selling price and the acquisition cost." },
        { question: "Is there a withholding tax on crypto?", answer: "Yes. A 15% withholding tax applies to certain crypto income including gains from trading on authorized exchanges. This withholding can be credited against your annual income tax liability. The withholding mechanism simplifies collection and ensures some tax is captured at the point of transaction." },
        { question: "Is VAT charged on crypto trading in Thailand?", answer: "The Thai government exempted crypto trading on authorized exchanges from VAT through the end of 2023, and this exemption has been extended. Without the exemption, a 7% VAT would apply to crypto transactions. Check the current status of the VAT exemption as it may be extended further or made permanent." },
        { question: "Can I offset crypto losses against gains in Thailand?", answer: "Crypto losses can be offset against crypto gains within the same tax year when calculating your net assessable income. However, you cannot carry forward crypto losses to offset gains in future years under current rules." },
      ]}
      relatedArticles={[
        { title: "Crypto Taxes in South Korea", href: "/taxes/learn/crypto-taxes-south-korea", category: "Taxes" },
        { title: "Crypto Taxes in the Philippines", href: "/taxes/learn/crypto-taxes-philippines", category: "Taxes" },
        { title: "Crypto Taxes in Vietnam", href: "/taxes/learn/crypto-taxes-vietnam", category: "Taxes" },
      ]}
    >
      <h2 id="tax-framework">Thai Crypto Tax Framework</h2>
      <p>
        Thailand&apos;s crypto tax framework is established under the Revenue Code, with the Revenue Department issuing specific guidelines for digital asset taxation. Cryptocurrency and digital tokens are classified as digital assets under the Emergency Decree on Digital Asset Business B.E. 2561 (2018). This decree established the regulatory framework administered by the SEC Thailand for market oversight and the Revenue Department for taxation. The SEC licenses and regulates digital asset exchanges, brokers, and dealers operating in Thailand. Major licensed exchanges include Bitkub, Satang Pro, and Zipmex. The tax framework treats crypto gains as assessable income, and the Revenue Department has issued directives on calculation methods, withholding requirements, and reporting obligations.
      </p>

      <h2 id="income-tax">Personal Income Tax on Crypto</h2>
      <p>
        Crypto gains fall under assessable income category 4(10) of the Revenue Code, covering capital gains from transfers of digital assets. Gains are added to your total assessable income and taxed at progressive rates: 5% for income up to 150,000 THB (after the 150,000 THB exemption), escalating through brackets up to 35% for income exceeding 5 million THB. The gain is calculated as the selling price minus the cost of acquisition. The Revenue Department allows either the FIFO method or the moving average cost method for calculating cost basis. Both methods are acceptable, but you must use the same method consistently throughout the tax year. Expenses directly related to the transaction, such as exchange fees, can be deducted. All gains and losses from crypto transactions during the year are netted to determine the net assessable amount.
      </p>

      <h2 id="withholding-tax">Withholding Tax</h2>
      <p>
        A 15% withholding tax applies to profits or benefits from holding or possessing digital tokens, and to capital gains from the transfer of digital assets in certain circumstances. The withholding is collected at source by the paying party or the exchange. This withheld amount serves as a tax credit against your annual income tax liability. If your effective tax rate is lower than 15%, you can claim a refund of the excess withholding when you file your annual return. If your effective rate is higher, you owe the difference. The withholding mechanism ensures the government captures some tax revenue upfront rather than relying solely on annual returns. The application of withholding tax to specific transaction types has been refined through Revenue Department rulings, and the exact scope may vary.
      </p>

      <h2 id="vat-exemption">VAT Exemption</h2>
      <p>
        Thailand initially planned to apply 7% VAT to crypto transactions, which would have made trading extremely expensive. In response to industry feedback and concerns about driving trading activity offshore, the government issued a Royal Decree exempting digital asset trading on authorized exchanges from VAT. This exemption was initially temporary but has been extended. The VAT exemption applies only to trades conducted through SEC-licensed exchanges. Transactions on unlicensed platforms or peer-to-peer trades may technically be subject to VAT, creating an incentive to use regulated platforms. The VAT exemption has been a significant boost for Thailand&apos;s crypto market, keeping trading costs competitive with regional alternatives. The government continues to evaluate whether to make the exemption permanent.
      </p>

      <h2 id="reporting-compliance">Reporting and Compliance</h2>
      <p>
        Thai taxpayers must report crypto income on their annual personal income tax return (PND 90 or PND 91). The tax year follows the calendar year, and returns are due by March 31 of the following year (with extensions for e-filing). Licensed exchanges report transaction data to the Revenue Department, giving tax authorities visibility into trading activity. The Revenue Department has been building infrastructure to cross-reference exchange data with tax returns. Taxpayers who trade on foreign exchanges or through DeFi protocols must self-report their gains. The Revenue Department has emphasized that all crypto income must be reported regardless of where the trading occurs. Penalties for non-compliance include surcharges on unpaid tax, fines for failure to file, and potential criminal prosecution for serious evasion.
      </p>
    </LearnPageLayout>
  );
}
