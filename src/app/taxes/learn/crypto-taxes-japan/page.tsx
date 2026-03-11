import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in Japan (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Complete guide to cryptocurrency taxes in Japan. Learn about the miscellaneous income classification, progressive tax rates up to 55%, NTA reporting, and how crypto-to-crypto trades are taxed.",
  keywords: ["crypto taxes Japan", "NTA crypto tax", "cryptocurrency tax Japan", "bitcoin taxes Japan"],
};

export default function CryptoTaxesJapanPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in Japan"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="10 min read"
      intro="Japan was among the first countries to establish a legal framework for cryptocurrency, but its tax treatment remains one of the most aggressive globally. Crypto profits are classified as miscellaneous income and taxed at progressive rates that can reach 55 percent when combined with local inhabitant tax. Understanding these rules is essential for Japan's large and active crypto community."
      toc={[
        { id: "classification", title: "How Japan Classifies Crypto Income", level: 2 },
        { id: "tax-rates", title: "Progressive Tax Rates", level: 2 },
        { id: "taxable-events", title: "Taxable Events in Japan", level: 2 },
        { id: "cost-basis", title: "Cost Basis Methods", level: 2 },
        { id: "reporting", title: "NTA Filing Requirements", level: 2 },
        { id: "reform", title: "Potential Tax Reform", level: 2 },
      ]}
      faqs={[
        { question: "What is the maximum crypto tax rate in Japan?", answer: "The combined maximum rate is approximately 55 percent, consisting of up to 45 percent national income tax plus 10 percent local inhabitant tax. This applies to miscellaneous income exceeding 40 million yen." },
        { question: "Can crypto losses offset other income in Japan?", answer: "No. Since crypto is classified as miscellaneous income, losses can only offset other miscellaneous income within the same year. Crypto losses cannot offset salary or business income and cannot be carried forward." },
        { question: "Is crypto-to-crypto trading taxable in Japan?", answer: "Yes. Every trade between cryptocurrencies is a taxable event. You must calculate the gain in JPY at the time of each trade, making reporting extremely complex for active traders." },
        { question: "Do Japanese exchanges report to the NTA?", answer: "Yes. Licensed Japanese exchanges report user transaction data to the National Tax Agency. The NTA has been actively auditing crypto traders and has access to comprehensive exchange data." },
      ]}
      relatedArticles={[
        { title: "Best Crypto Tax Software", href: "/taxes/best/software", category: "Taxes" },
        { title: "How Crypto Is Taxed", href: "/taxes/learn/how-crypto-is-taxed", category: "Taxes" },
        { title: "Day Trading Taxes", href: "/taxes/learn/day-trading-taxes", category: "Taxes" },
      ]}
    >
      <h2 id="classification">How Japan Classifies Crypto Income</h2>
      <p>
        The National Tax Agency classifies cryptocurrency profits as miscellaneous income (zatsu shotoku) rather than capital gains. This has significant tax implications: miscellaneous income is subject to progressive rates rather than the flat 20 percent rate applied to stocks and securities. Crypto losses cannot offset income from other categories and cannot be carried forward. The classification makes Japan one of the less favorable jurisdictions for crypto trading, though ongoing lobbying efforts continue to push for reclassification to bring crypto in line with other financial instruments.
      </p>

      <h2 id="tax-rates">Progressive Tax Rates</h2>
      <p>
        Crypto profits are added to your total taxable income and taxed at progressive national rates from 5 percent to 45 percent, plus a flat 10 percent local inhabitant tax. The combined rate can reach 55 percent for high earners. For example, someone earning 10 million yen in salary who realizes 5 million yen in crypto gains pays the marginal rate on those gains based on their total income bracket. This contrasts with countries like Germany where long-term crypto gains are tax-free, or Singapore where there is no capital gains tax. The high rates create significant incentive for Japanese residents to seek professional tax planning.
      </p>

      <h2 id="taxable-events">Taxable Events in Japan</h2>
      <p>
        Taxable events include selling crypto for JPY, trading one crypto for another, using crypto to purchase goods or services, receiving crypto as salary or payment, and receiving mining or staking rewards. Every crypto-to-crypto trade requires calculating the JPY value at the time of exchange. Non-taxable events include purchasing crypto with JPY, transferring between your own wallets, and holding. Gifting crypto triggers gift tax for the recipient if total gifts exceed 1.1 million yen per year. Inherited crypto is subject to inheritance tax based on fair market value at the time of death.
      </p>

      <h2 id="cost-basis">Cost Basis Methods</h2>
      <p>
        Japan allows two cost basis methods: the moving average method and the total average method. The moving average method recalculates your average cost with each new purchase, providing a running cost basis. The total average method calculates the average across all purchases made during the entire year. You must choose one method and apply it consistently. The moving average method is more accurate but requires detailed tracking. The total average method is simpler but may produce less favorable results. The NTA provides worksheets to help taxpayers compute their gains under either method.
      </p>

      <h2 id="reporting">NTA Filing Requirements</h2>
      <p>
        Final tax returns (kakutei shinkoku) must be filed between February 16 and March 15 if miscellaneous income exceeds 200,000 yen. Salaried workers with a single employer and less than 200,000 yen in additional income may be exempt from filing, though this threshold covers all miscellaneous income combined. Licensed exchanges like bitFlyer, Coincheck, and GMO Coin provide annual transaction summaries. The NTA publishes detailed calculation guides for crypto and has increased enforcement activities significantly, sending inquiry letters and conducting audits of active traders.
      </p>

      <h2 id="reform">Potential Tax Reform</h2>
      <p>
        The Japan Blockchain Association and Web3 industry groups have been lobbying for reclassification of crypto from miscellaneous income to a separate self-assessed taxation category with a flat 20 percent rate, matching the treatment of stocks. Progress has been made on the corporate side, with token issuers gaining relief from unrealized gains taxation. Individual taxpayer reform has been slower, though government statements have acknowledged the need for a more competitive framework. The ruling party has included crypto tax reform in policy discussions, giving the community cautious optimism about future changes that could significantly reduce the tax burden.
      </p>
    </LearnPageLayout>
  );
}
