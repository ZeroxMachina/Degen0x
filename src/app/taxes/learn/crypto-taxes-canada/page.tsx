import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in Canada: CRA Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Complete guide to cryptocurrency taxes in Canada. Learn how the CRA treats crypto, capital gains inclusion rates, business income rules, and reporting requirements.",
  keywords: ["crypto taxes Canada", "CRA crypto tax", "cryptocurrency tax Canada", "capital gains crypto Canada"],
};

export default function CryptoTaxesCanadaPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in Canada: CRA Guide"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="11 min read"
      intro="The Canada Revenue Agency (CRA) treats cryptocurrency as a commodity, meaning crypto transactions are subject to either capital gains tax or business income tax depending on the nature of your activity. With the capital gains inclusion rate recently increased to two-thirds for gains above $250,000, understanding Canadian crypto tax rules has never been more important."
      toc={[
        { id: "cra-classification", title: "cra-classification", level: 2 },
        { id: "how-the-cra-classifies-crypto", title: "How the CRA Classifies Crypto", level: 2 },
        { id: "capital-gains", title: "capital-gains", level: 2 },
        { id: "capital-gains-vs-business-income", title: "Capital Gains vs Business Income", level: 2 },
        { id: "taxable-events", title: "taxable-events", level: 2 },
        { id: "taxable-dispositions", title: "Taxable Dispositions", level: 2 },
        { id: "cost-basis", title: "cost-basis", level: 2 },
        { id: "adjusted-cost-base-calculations", title: "Adjusted Cost Base Calculations", level: 2 },
        { id: "reporting", title: "reporting", level: 2 },
        { id: "filing-reporting-requirements", title: "Filing & Reporting Requirements", level: 2 },
        { id: "tools", title: "tools", level: 2 },
        { id: "canadian-crypto-tax-software", title: "Canadian Crypto Tax Software", level: 2 }
      ]}
      faqs={[
        { question: "Is crypto taxed as capital gains or income in Canada?", answer: "It depends on your activity. Occasional buying and selling is typically capital gains, while frequent trading, mining as a business, or receiving crypto as payment constitutes business income. The CRA evaluates factors like frequency, intention, and commercial nature." },
        { question: "What is the capital gains inclusion rate?", answer: "As of 2024, the first $250,000 in annual capital gains has a 50% inclusion rate. Gains above $250,000 have a two-thirds inclusion rate. Only the included portion is added to your taxable income and taxed at your marginal rate." },
        { question: "Do I have to report crypto on my Canadian tax return?", answer: "Yes. The CRA requires all crypto dispositions to be reported. Additionally, if you hold crypto in foreign exchanges worth over $100,000 CAD, you may need to file T1135 Foreign Income Verification." },
        { question: "Is crypto-to-crypto trading taxable in Canada?", answer: "Yes. Trading one cryptocurrency for another is a taxable disposition. You must calculate the gain or loss based on the fair market value in CAD at the time of the trade." },
      ]}
      relatedArticles={[
        { title: "Best Crypto Tax Software", href: "/taxes/best/software", category: "Taxes" },
        { title: "Cost Basis Methods Explained", href: "/taxes/learn/cost-basis-methods", category: "Taxes" },
        { title: "Mining Tax Guide", href: "/taxes/learn/mining-tax-guide", category: "Taxes" },
      ]}
    >
      <h2 id="cra-classification">How the CRA Classifies Crypto</h2>
      <p>
        The CRA considers cryptocurrency to be a digital representation of value that can be used as a medium of exchange. It is treated as a commodity rather than currency, which means dispositions are subject to the same tax rules as other property transactions. The CRA has explicitly stated that crypto is not legal tender in Canada and that transactions involving cryptocurrency must be reported in Canadian dollars. The classification of your crypto activity as either capital gains or business income significantly affects your tax liability, as business income is fully taxable while only a portion of capital gains is included in taxable income.
      </p>

      <h2 id="capital-gains">Capital Gains vs Business Income</h2>
      <p>
        The CRA determines whether your crypto profits are capital gains or business income based on several factors: the frequency of transactions, the holding period, your knowledge of markets, the time spent on trading, whether you advertise or market your activity, and your stated intention at purchase. Casual investors who buy and hold typically qualify for capital gains treatment. Day traders, professional traders, and those running mining operations as a business are more likely to have profits classified as business income. Capital gains benefit from the inclusion rate where only 50 percent of gains up to $250,000 are taxable. Business income is 100 percent taxable but allows more deductions for expenses.
      </p>

      <h2 id="taxable-events">Taxable Dispositions</h2>
      <p>
        Taxable events in Canada include selling cryptocurrency for CAD or another fiat currency, trading one crypto for another, using crypto to purchase goods or services, gifting cryptocurrency, and converting crypto to stablecoins. Non-taxable events include buying crypto with CAD, transferring between your own wallets, and holding crypto without disposing. Receiving crypto as a gift is not taxable at the time of receipt, but you inherit the donor&apos;s adjusted cost base. Mining rewards and staking income are taxable as either business income or as a hobby depending on the scale and commercial nature of the activity.
      </p>

      <h2 id="cost-basis">Adjusted Cost Base Calculations</h2>
      <p>
        Canada uses the Adjusted Cost Base (ACB) method, which is essentially a weighted average cost. Every time you acquire more of a cryptocurrency, the new cost is added to your existing pool and the average cost per unit is recalculated. When you dispose of units, you use this average cost to determine your gain or loss. Transaction fees paid to acquire crypto are added to the ACB, while fees paid on disposal reduce the proceeds. The superficial loss rule prevents you from claiming a loss if you repurchase the same crypto within 30 days before or after the sale, similar to wash sale rules in other jurisdictions.
      </p>

      <h2 id="reporting">Filing &amp; Reporting Requirements</h2>
      <p>
        Crypto dispositions are reported on Schedule 3 of your T1 income tax return under Capital Gains. If your activity is classified as business income, report it on T2125 Statement of Business Activities. You must report all dispositions even if the net result is a loss. Capital losses can offset capital gains and unused losses can be carried back 3 years or forward indefinitely. If you hold crypto on foreign platforms worth more than $100,000 CAD at any point during the year, you must also file T1135 Foreign Income Verification Statement. The filing deadline is April 30 for most taxpayers, with self-employed individuals getting until June 15 to file but owing any balance by April 30.
      </p>

      <h2 id="tools">Canadian Crypto Tax Software</h2>
      <p>
        Koinly supports CRA-specific reports including Schedule 3 generation and ACB calculations using the weighted average method required in Canada. CoinTracker also offers Canadian tax support with direct TurboTax integration. CryptoTaxCalculator provides detailed ACB tracking and handles the superficial loss rule automatically. Wealthsimple Tax is a free Canadian tax filing platform that can import crypto transaction summaries. Most dedicated crypto tax tools can generate the reports your accountant needs to file your Canadian return accurately, handling the complex ACB recalculations that make manual tracking extremely difficult for active traders.
      </p>
    </LearnPageLayout>
  );
}
