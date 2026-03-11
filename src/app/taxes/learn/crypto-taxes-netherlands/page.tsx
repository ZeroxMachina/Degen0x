import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in the Netherlands (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Complete guide to cryptocurrency taxes in the Netherlands. Learn about Box 3 wealth tax, deemed income rules, and how crypto holdings are taxed.",
};

export default function CryptoTaxesNetherlandsPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in the Netherlands"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="9 min read"
      intro="The Netherlands takes a unique approach to crypto taxation. Rather than taxing capital gains directly, crypto assets fall under Box 3 of the Dutch tax system, which taxes wealth based on a deemed return. This means you pay tax on what the government assumes you earned from your holdings, not on your actual profits. Recent court rulings have changed how this deemed return is calculated, making it important to understand the current rules."
      toc={[
        { id: "box-3-system", title: "Understanding Box 3 Taxation", level: 2 },
        { id: "deemed-return", title: "Deemed Return Calculation", level: 2 },
        { id: "reporting-holdings", title: "Reporting Crypto Holdings", level: 2 },
        { id: "professional-trading", title: "Professional Trading (Box 1)", level: 2 },
        { id: "defi-staking", title: "DeFi, Staking, and Mining", level: 2 },
        { id: "planning-strategies", title: "Tax Planning Strategies", level: 2 },
      ]}
      faqs={[
        { question: "How is crypto taxed in the Netherlands?", answer: "Crypto is taxed under Box 3 as part of your total wealth. Instead of taxing actual gains, the Dutch tax authority (Belastingdienst) applies a deemed return based on your asset allocation between savings and investments. This deemed return is then taxed at approximately 36%. The reference date for valuation is January 1st of each year." },
        { question: "Do I pay tax on unrealized crypto gains in the Netherlands?", answer: "Effectively yes. Since Box 3 taxes your total wealth position rather than realized gains, you owe tax on the value of your crypto holdings on January 1st regardless of whether you sold anything. The tax is based on the deemed return percentage applied to your total Box 3 assets minus the tax-free threshold." },
        { question: "What is the tax-free threshold for Box 3?", answer: "The Box 3 tax-free threshold (heffingsvrij vermogen) is approximately 57,000 euros per person. For fiscal partners filing jointly, this doubles to approximately 114,000 euros. Only wealth above this threshold is subject to Box 3 taxation." },
        { question: "Can I deduct crypto losses in the Netherlands?", answer: "Since Box 3 taxes deemed returns rather than actual returns, you cannot directly deduct losses. However, if your crypto holdings decrease in value, your Box 3 tax base will be lower on the next January 1st reference date. Recent court rulings have opened the possibility of challenging deemed returns that significantly exceed actual returns." },
      ]}
      relatedArticles={[
        { title: "Crypto Taxes in France", href: "/taxes/learn/crypto-taxes-france", category: "Taxes" },
        { title: "Crypto Taxes in Switzerland", href: "/taxes/learn/crypto-taxes-switzerland", category: "Taxes" },
        { title: "Crypto Taxes in Ireland", href: "/taxes/learn/crypto-taxes-ireland", category: "Taxes" },
      ]}
    >
      <h2 id="box-3-system">Understanding Box 3 Taxation</h2>
      <p>
        The Dutch tax system divides income into three boxes. Box 1 covers employment and business income, Box 2 covers substantial shareholdings, and Box 3 covers savings and investments including cryptocurrency. Under Box 3, the government does not tax your actual capital gains. Instead, it assumes a fictitious return on your assets and taxes that deemed return at a flat rate of approximately 36%. Your crypto holdings are valued on January 1st of the tax year (the peildatum or reference date). The value of all your Box 3 assets minus liabilities is calculated, and the tax-free threshold of roughly 57,000 euros is subtracted. The deemed return percentage is then applied to the remaining amount.
      </p>

      <h2 id="deemed-return">Deemed Return Calculation</h2>
      <p>
        Following the landmark Hoge Raad (Supreme Court) ruling in December 2021, the deemed return system was reformed. Previously, asset allocation between savings and investments used a sliding scale. Under the new system, actual asset composition determines the deemed return rate. Savings receive a lower deemed return rate based on average savings interest rates, while investments like crypto receive a higher deemed return rate. Crypto is classified as an investment (belegging), which means it receives the higher deemed return rate. The exact percentages are updated annually by the government. The deemed return rate for investments has been set based on long-term average returns for mixed investment portfolios. This can result in taxation on returns you never actually earned if your crypto performed poorly.
      </p>

      <h2 id="reporting-holdings">Reporting Crypto Holdings</h2>
      <p>
        You must report the total value of all your cryptocurrency holdings as of January 1st on your annual tax return. This includes coins held on exchanges, in personal wallets, in DeFi protocols, staked assets, and any other form of crypto holdings. Use the market value in euros on January 1st at midnight. The Belastingdienst expects you to use fair market value from a reputable exchange. For tokens without clear market prices, use the best available valuation. You must report all holdings regardless of whether you traded during the year. Keep detailed records of all wallet addresses and exchange accounts, as the Dutch tax authority has been actively requesting data from exchanges and can cross-reference reported holdings with exchange records.
      </p>

      <h2 id="professional-trading">Professional Trading (Box 1)</h2>
      <p>
        If the Belastingdienst determines that your crypto activities constitute a business or professional trading, your gains may be taxed under Box 1 instead of Box 3. Box 1 applies progressive income tax rates ranging from roughly 37% to 49.5%, plus social security contributions. Factors that indicate professional trading include: high frequency of trades, significant volume relative to your other income, use of sophisticated tools and strategies, borrowing to trade, and deriving your primary income from trading. Box 1 taxation is based on actual profits and losses rather than deemed returns. While rates are higher, you can deduct actual losses and business expenses. Most casual investors remain under Box 3, but active day traders should assess their classification carefully with a tax advisor.
      </p>

      <h2 id="defi-staking">DeFi, Staking, and Mining</h2>
      <p>
        DeFi positions, staking rewards, and mining income create additional complexity under Dutch tax law. For Box 3 taxpayers, the total value of all crypto including tokens locked in DeFi protocols, LP tokens, and staked assets must be included in the January 1st valuation. The deemed return system means the specific yield earned from staking or DeFi does not directly affect your tax calculation. It is all captured in the deemed return on total wealth. For those classified under Box 1, staking rewards and DeFi yields are taxable income when received. Mining income for professional miners is taxed as business income under Box 1, with the ability to deduct equipment and electricity costs. Airdrops and forks add to your portfolio value and should be included in the January 1st valuation at their market price on that date.
      </p>

      <h2 id="planning-strategies">Tax Planning Strategies</h2>
      <p>
        Since Box 3 tax is based on the January 1st snapshot, some investors consider temporarily reducing holdings before the reference date. However, the Belastingdienst has anti-avoidance rules (peildatumarbitrage) and may look through transactions that have no purpose other than tax avoidance. The tax-free threshold provides meaningful relief for smaller portfolios. Fiscal partners can combine their thresholds for approximately 114,000 euros of tax-free wealth. If your actual returns are significantly below the deemed return, you may be able to file an objection (bezwaar) following the Supreme Court ruling, requesting taxation based on actual returns. Several Dutch crypto tax tools like Accointing and Koinly support Box 3 reporting, but you primarily need to track your portfolio value on January 1st rather than every individual transaction.
      </p>
    </LearnPageLayout>
  );
}
