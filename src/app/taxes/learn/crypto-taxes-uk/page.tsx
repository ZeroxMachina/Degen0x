import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in the UK: HMRC Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Complete guide to cryptocurrency taxes in the UK. Learn how HMRC treats crypto, Capital Gains Tax rates, Income Tax rules, Self Assessment reporting, and allowable deductions.",
  keywords: ["crypto taxes UK", "HMRC crypto", "cryptocurrency tax UK", "capital gains tax crypto UK", "bitcoin taxes UK"],
};

export default function CryptoTaxesUKPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in the UK: HMRC Guide"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="12 min read"
      intro="HMRC classifies cryptocurrency as a cryptoasset subject to Capital Gains Tax on disposals and Income Tax when received as earnings. With the annual CGT allowance reduced to just 3,000 pounds, more UK crypto holders than ever must file returns. This guide covers everything from taxable events and reporting requirements to DeFi-specific rules and recommended software."
      toc={[
        { id: "hmrc-overview", title: "hmrc-overview", level: 2 },
        { id: "how-hmrc-classifies-crypto", title: "How HMRC Classifies Crypto", level: 2 },
        { id: "capital-gains", title: "capital-gains", level: 2 },
        { id: "capital-gains-tax-rules", title: "Capital Gains Tax Rules", level: 2 },
        { id: "income-tax", title: "income-tax", level: 2 },
        { id: "income-tax-on-crypto", title: "Income Tax on Crypto", level: 2 },
        { id: "taxable-events", title: "taxable-events", level: 2 },
        { id: "taxable-vs-non-taxable-events", title: "Taxable vs Non-Taxable Events", level: 2 },
        { id: "reporting", title: "reporting", level: 2 },
        { id: "self-assessment-reporting", title: "Self Assessment & Reporting", level: 2 },
        { id: "tax-tools", title: "tax-tools", level: 2 },
        { id: "recommended-uk-tax-software", title: "Recommended UK Tax Software", level: 2 }
      ]}
      faqs={[
        { question: "What is the CGT allowance for crypto in the UK?", answer: "The annual Capital Gains Tax allowance is 3,000 pounds for the 2024/25 tax year. Only gains above this threshold are taxable, and it applies to all capital gains combined, not just crypto." },
        { question: "Do I need to report crypto if I have not sold?", answer: "No. Simply holding cryptocurrency is not a taxable event. You only need to report when you dispose of crypto through selling, trading, spending, or gifting beyond the annual gift allowance." },
        { question: "How does HMRC know about my crypto?", answer: "HMRC has data-sharing agreements with major UK crypto exchanges and uses blockchain analytics firms. They have sent nudge letters to crypto holders encouraging voluntary disclosure of unreported gains." },
        { question: "Can I offset crypto losses against gains?", answer: "Yes. Capital losses from crypto disposals can offset gains in the same tax year. Unused losses can be carried forward indefinitely, but you must report them to HMRC within 4 years to claim them." },
        { question: "Is transferring between my own wallets taxable?", answer: "No. Moving crypto between your own wallets is not a disposal and is not taxable. However, maintain clear records of all transfers in case HMRC queries them." },
      ]}
      relatedArticles={[
        { title: "Best Crypto Tax Software", href: "/taxes/best/software", category: "Taxes" },
        { title: "Capital Gains Tax Explained", href: "/taxes/learn/capital-gains", category: "Taxes" },
        { title: "DeFi Tax Guide", href: "/taxes/learn/defi-tax-guide", category: "Taxes" },
      ]}
    >
      <h2 id="hmrc-overview">How HMRC Classifies Crypto</h2>
      <p>
        HMRC does not consider cryptocurrency to be currency or money. Instead, it is classified as a cryptoasset and treated as property for tax purposes. The Cryptoassets Manual published by HMRC covers exchange tokens like Bitcoin and Ethereum, utility tokens, security tokens, and stablecoins. Each type may be treated differently depending on its characteristics, but the vast majority of retail crypto holdings fall under exchange token rules. The two primary taxes that apply are Capital Gains Tax on disposals and Income Tax when crypto is received as payment, mining rewards, or other earnings.
      </p>

      <h2 id="capital-gains">Capital Gains Tax Rules</h2>
      <p>
        When you dispose of cryptocurrency by selling, trading for another token, spending, or gifting, you must calculate the capital gain or loss. The gain equals the disposal value minus the allowable cost, which includes the purchase price plus transaction fees. HMRC uses Section 104 share pooling rules: you calculate an average cost basis across all holdings of the same token. The same-day rule and 30-day bed and breakfasting rule also apply, meaning repurchases within 30 days are matched against the disposal. Gains above the 3,000 pound annual allowance are taxed at 18 percent for basic rate taxpayers and 24 percent for higher and additional rate taxpayers following recent rate changes.
      </p>

      <h2 id="income-tax">Income Tax on Crypto</h2>
      <p>
        Cryptocurrency received as income is subject to Income Tax and National Insurance contributions at fair market value on the date of receipt. This includes wages paid in crypto, mining rewards from regular mining activity, staking income, airdrops received in exchange for a service, referral bonuses, and DeFi yield. The GBP value at receipt becomes your cost basis for future CGT calculations when you eventually dispose of the crypto. Income Tax rates range from 20 percent to 45 percent depending on your tax band. If your crypto activity constitutes a trade, profits are taxed as trading income rather than capital gains.
      </p>

      <h2 id="taxable-events">Taxable vs Non-Taxable Events</h2>
      <p>
        Taxable disposals include selling crypto for GBP, trading one cryptocurrency for another, using crypto to pay for goods or services, and gifting crypto to anyone other than a spouse or civil partner. Non-taxable events include buying crypto with GBP, holding crypto without disposing, transferring between your own wallets, gifting to a spouse or civil partner, and receiving airdrops without providing a service. Donations to registered charities are also exempt from CGT. Understanding which events trigger tax obligations is essential for accurate reporting and to avoid overpaying.
      </p>

      <h2 id="reporting">Self Assessment &amp; Reporting</h2>
      <p>
        UK crypto gains and income must be reported via the Self Assessment tax return. If your total capital gains from all sources exceed the annual CGT allowance, you must file a return even if you do not normally submit one. Crypto gains are reported on the SA108 Capital Gains supplementary pages. The UK tax year runs from April 6 to April 5, with online filing deadlines of January 31 for the previous tax year. Crypto income is reported on the main SA100 form or the self-employment pages if you are trading. HMRC can charge penalties of up to 200 percent of the unpaid tax for deliberate non-disclosure.
      </p>

      <h2 id="tax-tools">Recommended UK Tax Software</h2>
      <p>
        Koinly is the most widely used crypto tax tool among UK users, supporting HMRC-ready reports and Section 104 share pooling calculations. It imports data from over 700 exchanges and wallets. Recap is a UK-specific tool built from the ground up for HMRC compliance. CryptoTaxCalculator and CoinTracker also support UK tax rules. These tools automate the complex calculations required by HMRC, including same-day and 30-day matching rules. Most offer a free preview of your tax liability before you pay for the full report, which you can then submit with your Self Assessment or share with your accountant.
      </p>
    </LearnPageLayout>
  );
}
