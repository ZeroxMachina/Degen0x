import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in Singapore (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Complete guide to cryptocurrency taxes in Singapore. Learn about the no capital gains tax policy, when crypto income is taxable, GST treatment, and IRAS compliance requirements.",
  keywords: ["crypto taxes Singapore", "IRAS crypto", "cryptocurrency tax Singapore", "Singapore crypto tax free"],
};

export default function CryptoTaxesSingaporePage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in Singapore"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="9 min read"
      intro="Singapore is one of the most crypto-friendly tax jurisdictions in the world. There is no capital gains tax, which means individual investors who buy and sell cryptocurrency for investment purposes generally owe no tax on their profits. However, businesses and individuals whose crypto activities constitute a trade may be subject to income tax. Understanding the line between investment and trading is key to Singapore's crypto tax treatment."
      toc={[
        { id: "no-cgt", title: "no-cgt", level: 2 },
        { id: "no-capital-gains-tax-in-singapore", title: "No Capital Gains Tax in Singapore", level: 2 },
        { id: "income-tax", title: "income-tax", level: 2 },
        { id: "when-crypto-income-is-taxable", title: "When Crypto Income Is Taxable", level: 2 },
        { id: "trading-vs-investing", title: "trading-vs-investing", level: 2 },
        { id: "trading-vs-investing-classification", title: "Trading vs Investing Classification", level: 2 },
        { id: "gst-treatment", title: "gst-treatment", level: 2 },
        { id: "gst-treatment-of-crypto", title: "GST Treatment of Crypto", level: 2 },
        { id: "business-crypto", title: "business-crypto", level: 2 },
        { id: "businesses-using-crypto", title: "Businesses Using Crypto", level: 2 },
        { id: "compliance", title: "compliance", level: 2 },
        { id: "iras-compliance-record-keeping", title: "IRAS Compliance & Record Keeping", level: 2 }
      ]}
      faqs={[
        { question: "Is crypto tax-free in Singapore?", answer: "Capital gains from crypto investments are tax-free in Singapore since there is no capital gains tax. However, if your crypto activities are deemed to be a trade or business, the profits are taxable as income at prevailing corporate or personal income tax rates." },
        { question: "How does IRAS determine if crypto is trading vs investment?", answer: "IRAS considers factors including holding period, frequency of transactions, reason for acquisition, financing method, and whether you have the expertise of a trader. Long-term holders with infrequent trades are more likely to be classified as investors." },
        { question: "Are airdrops and staking rewards taxable in Singapore?", answer: "Airdrops are generally not taxable if received without performing services. Staking rewards may be taxable if they constitute income from a trade or business. For individual investors, staking rewards from personal holdings are typically not taxable." },
        { question: "Do Singapore residents need to declare crypto?", answer: "You do not need to declare crypto holdings or capital gains from investments. However, if you earn income from crypto activities classified as a trade, that income must be declared in your annual tax return to IRAS." },
      ]}
      relatedArticles={[
        { title: "Crypto Taxes in UAE & Dubai", href: "/taxes/learn/crypto-taxes-uae", category: "Taxes" },
        { title: "Crypto Taxes in Portugal", href: "/taxes/learn/crypto-taxes-portugal", category: "Taxes" },
        { title: "Best Crypto Tax Software", href: "/taxes/best/software", category: "Taxes" },
      ]}
    >
      <h2 id="no-cgt">No Capital Gains Tax in Singapore</h2>
      <p>
        Singapore does not impose a capital gains tax, and this extends to cryptocurrency. Individual investors who buy and hold crypto as a long-term investment and sell for a profit do not owe any tax on those gains. This applies to all types of crypto assets including Bitcoin, Ethereum, altcoins, and NFTs when held as investments. Singapore&apos;s Inland Revenue Authority (IRAS) has confirmed this treatment in its e-Tax Guide on income tax treatment of digital tokens. This makes Singapore one of the most attractive jurisdictions globally for crypto investors alongside the UAE and certain other tax-free regimes.
      </p>

      <h2 id="income-tax">When Crypto Income Is Taxable</h2>
      <p>
        While capital gains are tax-free, income derived from crypto activities is taxable. This includes situations where crypto trading constitutes a business or trade, salary paid in cryptocurrency, crypto received as payment for goods or services, and profits from crypto businesses such as exchanges, mining operations, or trading firms. Singapore&apos;s personal income tax rates are progressive from 0 to 22 percent, while the corporate tax rate is a flat 17 percent. Income is assessed in Singapore dollars at the exchange rate on the date of receipt or transaction.
      </p>

      <h2 id="trading-vs-investing">Trading vs Investing Classification</h2>
      <p>
        The critical distinction in Singapore is between investment activity (tax-free) and trading activity (taxable). IRAS evaluates this based on the badges of trade: the subject matter, holding period, frequency of transactions, supplementary work on the asset, circumstances of the sale, and the taxpayer&apos;s motive. A person who buys Bitcoin and holds it for two years before selling is almost certainly an investor. Someone who trades crypto daily with leverage, uses technical analysis, and derives their primary income from trading may be classified as conducting a trade. The classification is evaluated on a case-by-case basis and can apply differently to different activities of the same person.
      </p>

      <h2 id="gst-treatment">GST Treatment of Crypto</h2>
      <p>
        IRAS updated its GST guidance for digital payment tokens in 2020. The supply of digital payment tokens (like Bitcoin and Ethereum) is treated as an exempt supply for GST purposes, meaning no GST is charged on the sale or exchange of these tokens. This applies to tokens that are used or intended to be used as a means of payment. However, tokens that do not qualify as digital payment tokens, such as certain utility or security tokens, may be subject to different GST treatment depending on their characteristics and the nature of the transaction.
      </p>

      <h2 id="business-crypto">Businesses Using Crypto</h2>
      <p>
        Businesses that accept cryptocurrency as payment must recognize the income at fair market value in SGD at the time of receipt. Companies that mine crypto or operate as trading firms are subject to corporate income tax on their profits. Businesses can deduct expenses related to their crypto activities, including hardware costs for mining, exchange fees, and employee salaries. Companies holding crypto as investments on their balance sheet may need to recognize unrealized gains or losses depending on accounting standards. The Monetary Authority of Singapore (MAS) also imposes licensing requirements on crypto service providers under the Payment Services Act.
      </p>

      <h2 id="compliance">IRAS Compliance &amp; Record Keeping</h2>
      <p>
        Even though many crypto transactions are tax-free in Singapore, maintaining comprehensive records is advisable. If IRAS queries your classification as an investor versus a trader, you will need documentation to support your position. Keep records of purchase dates and prices, holding periods, transaction history, and the rationale for your transactions. Singapore residents who are classified as traders must file their crypto profits in their annual income tax return. The tax year is the calendar year, with returns due by April 15 (paper) or April 18 (electronic). Non-compliance with income tax obligations carries penalties including fines and potential prosecution.
      </p>
    </LearnPageLayout>
  );
}
