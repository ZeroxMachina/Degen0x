import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in South Korea (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Complete guide to cryptocurrency taxes in South Korea. Learn about the delayed crypto tax implementation, reporting requirements, and how Korean crypto investors should prepare.",
};

export default function CryptoTaxesSouthKoreaPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in South Korea"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="8 min read"
      intro="South Korea has repeatedly delayed implementing its crypto capital gains tax, reflecting both the political sensitivity of taxing the country's large crypto investor base and the complexity of creating a workable framework. When implemented, gains exceeding 2.5 million KRW annually will be taxed at 20%. Korean crypto investors should understand the planned rules, current obligations, and how to prepare for the eventual implementation of full crypto taxation."
      toc={[
        { id: "tax-status", title: "Current Tax Status", level: 2 },
        { id: "planned-framework", title: "Planned Tax Framework", level: 2 },
        { id: "reporting-exchanges", title: "Exchange Reporting Requirements", level: 2 },
        { id: "business-income", title: "Business and Corporate Crypto", level: 2 },
        { id: "preparation", title: "Preparing for Crypto Taxes", level: 2 },
      ]}
      faqs={[
        { question: "Are crypto gains taxed in South Korea?", answer: "As of the latest postponement, the crypto capital gains tax has been delayed. When implemented, gains exceeding 2.5 million KRW (approximately 1,900 USD) per year will be taxed at 20% plus local income tax, bringing the effective rate to 22%. Check current legislation for the latest implementation timeline." },
        { question: "Do Korean exchanges report to the tax authority?", answer: "Yes. Korean exchanges (Upbit, Bithumb, Korbit, Coinone) are required to report user transaction data to the National Tax Service (NTS). They must also verify user identity through real-name bank accounts linked to exchange accounts." },
        { question: "Are foreign exchange transactions taxable?", answer: "When the crypto tax takes effect, gains from trading on foreign exchanges will also be taxable. Korean residents using Binance or other foreign platforms must self-report their gains. The NTS is working on obtaining data from foreign exchanges through international cooperation agreements." },
        { question: "Is crypto income from airdrops or mining taxed?", answer: "Under current rules, income received in crypto for services or business activities may be taxable as income. When the comprehensive crypto tax is implemented, airdrops and mining rewards will likely fall under its scope. Corporate entities earning crypto already report it as business income." },
      ]}
      relatedArticles={[
        { title: "Crypto Taxes in Thailand", href: "/taxes/learn/crypto-taxes-thailand", category: "Taxes" },
        { title: "Crypto Taxes in Philippines", href: "/taxes/learn/crypto-taxes-philippines", category: "Taxes" },
        { title: "Crypto Taxes in Vietnam", href: "/taxes/learn/crypto-taxes-vietnam", category: "Taxes" },
      ]}
    >
      <h2 id="tax-status">Current Tax Status</h2>
      <p>
        South Korea has had a complex relationship with crypto taxation. The original plan to tax crypto gains starting in 2022 was postponed to 2023, then to 2025, and has been further delayed following political pressure from the large and vocal Korean crypto investor base. The delay reflects concerns about market impact, readiness of tax infrastructure, and fairness of the proposed threshold. Despite the postponement of capital gains tax, crypto is not entirely tax-free in Korea. Corporate entities must report crypto gains as business income. Income earned in cryptocurrency for professional services is taxable. And the virtual asset service provider regulations under the Special Act require robust KYC and reporting systems that will support future tax enforcement.
      </p>

      <h2 id="planned-framework">Planned Tax Framework</h2>
      <p>
        When implemented, the crypto tax will classify gains as other income (gita sodek) under the Income Tax Act. Net gains exceeding the 2.5 million KRW annual exemption will be taxed at a flat 20% national rate plus approximately 2% local income tax, for an effective rate of 22%. The tax applies to the difference between disposal proceeds and acquisition cost, calculated per transaction. The FIFO method will be used when specific identification is not possible. Losses can offset gains within the same tax year, but cannot be carried forward to future years. Crypto received as gifts or inheritance will have special valuation rules, using the average market price over a period before and after the transfer date. The legislation covers all types of virtual assets as defined by the Special Act on Virtual Assets.
      </p>

      <h2 id="reporting-exchanges">Exchange Reporting Requirements</h2>
      <p>
        South Korean crypto exchanges operate under strict regulatory oversight. The Special Act on Reporting and Using Specified Financial Transaction Information requires exchanges to register with the Korea Financial Intelligence Unit (KoFIU). Exchanges must implement real-name verification by linking trading accounts to verified bank accounts at partner banks. This system means the NTS can trace every won deposited to or withdrawn from an exchange back to an identified individual. Korean exchanges are required to report large transactions and suspicious activities. They also provide transaction data to the NTS for tax enforcement purposes. Users of foreign exchanges are required to report foreign financial accounts if their combined balance exceeds 500 million KRW at any point during the year under the Foreign Account Tax Compliance framework.
      </p>

      <h2 id="business-income">Business and Corporate Crypto</h2>
      <p>
        While individual capital gains tax has been delayed, businesses and corporations in South Korea must already account for crypto in their financial statements and tax filings. Corporate entities holding crypto must value it at fair market value and report gains or losses as business income, taxed at the applicable corporate tax rate of 9% to 24% depending on the amount. Businesses accepting crypto as payment must recognize the KRW equivalent as revenue. Companies engaged in crypto mining, staking, or DeFi activities must report all income generated from these activities. The accounting treatment follows Korean International Financial Reporting Standards (K-IFRS), which classify crypto as intangible assets in most cases. Self-employed individuals and freelancers earning crypto for services must report it as business income under existing rules.
      </p>

      <h2 id="preparation">Preparing for Crypto Taxes</h2>
      <p>
        Even though individual crypto capital gains tax has been delayed, Korean investors should prepare by maintaining complete transaction records. Export all transaction histories from Korean exchanges like Upbit, Bithumb, and Coinone. If you use foreign exchanges, download those records as well. Track the KRW value at the time of each acquisition and disposal. For DeFi activities, record all swaps, deposits, withdrawals, and rewards with timestamps and values. When the tax is eventually implemented, having historical records will be essential for calculating cost basis accurately. Several Korean fintech companies are developing crypto tax calculation tools that will support the local tax framework when it launches. Consider using portfolio tracking apps in the meantime to maintain ongoing records of all positions and transactions across all platforms.
      </p>
    </LearnPageLayout>
  );
}
