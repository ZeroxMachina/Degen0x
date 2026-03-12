import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in Mexico (${CURRENT_YEAR}) | degen0x`,
  description:
    "Complete guide to cryptocurrency taxes in Mexico. Learn about income tax obligations, SAT reporting, and how Mexican crypto investors should handle their tax filings.",
};

export default function CryptoTaxesMexicoPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in Mexico"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="8 min read"
      intro="Mexico does not have specific cryptocurrency tax legislation, but crypto gains fall under existing income tax rules administered by the SAT (Servicio de Administracion Tributaria). Crypto is treated as a virtual asset under the Fintech Law, and gains from trading are subject to income tax. The lack of specific crypto tax guidance creates ambiguity, making it important for Mexican crypto investors to understand how general tax principles apply to their crypto activities."
      toc={[
        { id: "tax-treatment", title: "tax-treatment", level: 2 },
        { id: "tax-treatment-of-crypto", title: "Tax Treatment of Crypto", level: 2 },
        { id: "income-tax-rates", title: "income-tax-rates", level: 2 },
        { id: "income-tax-rates", title: "Income Tax Rates", level: 2 },
        { id: "taxable-events", title: "taxable-events", level: 2 },
        { id: "taxable-events", title: "Taxable Events", level: 2 },
        { id: "sat-reporting", title: "sat-reporting", level: 2 },
        { id: "sat-reporting-requirements", title: "SAT Reporting Requirements", level: 2 },
        { id: "compliance", title: "compliance", level: 2 },
        { id: "compliance-strategies", title: "Compliance Strategies", level: 2 }
      ]}
      faqs={[
        { question: "Are crypto gains taxable in Mexico?", answer: "Yes. While Mexico lacks specific crypto tax legislation, gains from selling or trading cryptocurrency are considered taxable income under the general Income Tax Law (Ley del ISR). The SAT treats crypto as property, and profits from its sale are subject to income tax at your applicable rate." },
        { question: "What tax rate applies to crypto gains in Mexico?", answer: "Crypto gains are taxed at your marginal income tax rate, which ranges from 1.92% to 35% depending on your total annual income. There is no separate capital gains rate for crypto. The specific rate depends on where the gain falls in your total income bracket." },
        { question: "Do I need to issue invoices (facturas) for crypto sales?", answer: "The requirement to issue CFDI (Comprobante Fiscal Digital por Internet) for crypto transactions is unclear. In practice, most individual investors do not issue invoices for crypto trades. However, if crypto trading constitutes a business activity, invoicing requirements may apply. Consult a Mexican tax advisor for your specific situation." },
        { question: "How does the Fintech Law affect crypto taxes?", answer: "The 2018 Fintech Law regulates virtual assets and the platforms that deal in them but does not specifically address taxation. It requires regulated institutions dealing with virtual assets to obtain authorization from the Bank of Mexico. The law establishes the legal framework that recognizes crypto as virtual assets." },
      ]}
      relatedArticles={[
        { title: "Crypto Taxes in Argentina", href: "/taxes/learn/crypto-taxes-argentina", category: "Taxes" },
        { title: "Crypto Taxes in Colombia", href: "/taxes/learn/crypto-taxes-colombia", category: "Taxes" },
        { title: "How Crypto Loans Are Taxed", href: "/crypto-loans/learn/crypto-loan-taxes", category: "Crypto Loans" },
      ]}
    >
      <h2 id="tax-treatment">Tax Treatment of Crypto</h2>
      <p>
        Mexico classifies cryptocurrency as virtual assets under the Fintech Law (Ley para Regular las Instituciones de Tecnologia Financiera), but tax treatment falls under the general Income Tax Law (Ley del ISR). The SAT considers crypto gains as taxable income from the alienation (enajenacion) of property. This means that selling, trading, or exchanging crypto triggers a taxable event similar to selling other types of property. The gain is calculated as the difference between the sale price and the original acquisition cost, including any transaction fees paid. While this framework is straightforward in principle, the absence of specific crypto guidance leaves many practical questions unanswered, particularly regarding DeFi activities, staking, and cross-border transactions.
      </p>

      <h2 id="income-tax-rates">Income Tax Rates</h2>
      <p>
        Crypto gains are added to your total annual income and taxed at progressive income tax rates ranging from 1.92% to 35%. The rate depends on your total income bracket. For individuals (personas fisicas), the annual tax return must include all income sources including crypto gains. Monthly provisional payments may be required if crypto trading generates significant regular income. Residents pay tax on worldwide income, including gains from foreign exchanges. Non-residents are taxed only on Mexican-source income. Corporate entities (personas morales) that hold or trade crypto must include gains in their corporate income, taxed at the flat corporate rate of 30%. The ISR also requires inflation adjustment for cost basis when holding assets for extended periods, though applying this to crypto is practically complex.
      </p>

      <h2 id="taxable-events">Taxable Events</h2>
      <p>
        Selling crypto for Mexican pesos or any fiat currency is a clear taxable event. Trading one cryptocurrency for another is also considered taxable, as it involves the alienation of the original asset. Using crypto to purchase goods or services triggers a disposal at fair market value. Receiving crypto as payment for services is taxable income at the peso value when received. Mining income is taxable when coins are received, valued at the market price in pesos at that time. Airdrops and forks that result in new tokens may be treated as income, though guidance is limited. Staking rewards are likely taxable as income when received. Gifting crypto may have implications under gift tax provisions if the value exceeds certain thresholds. The lack of specific rules means many of these treatments are based on interpretation of general tax principles.
      </p>

      <h2 id="sat-reporting">SAT Reporting Requirements</h2>
      <p>
        Individual taxpayers must report crypto gains on their annual tax return (declaracion anual) filed in April. If crypto constitutes a significant income source, monthly provisional tax payments may be required. Mexico does not currently have a specific form for crypto reporting, so gains are included in the general income sections. Mexican exchanges regulated under the Fintech Law may report user data to the SAT. The SAT has been expanding its data collection capabilities and has expressed interest in crypto tax compliance. For holdings on foreign platforms, Mexico participates in international information exchange agreements, and the implementation of the OECD CARF framework will bring additional reporting from foreign exchanges. Maintaining detailed records of all transactions with dates, amounts, and peso values is essential for accurate reporting.
      </p>

      <h2 id="compliance">Compliance Strategies</h2>
      <p>
        Given the lack of specific guidance, Mexican crypto investors should take a conservative approach to compliance. Keep detailed records of all purchases, sales, trades, and other crypto activities with MXN values at the time of each transaction. Use a crypto tax calculator that can handle peso valuations and export data suitable for Mexican tax reporting. Consider working with a contador publico (public accountant) who has experience with crypto taxation, as the interpretation of general tax rules applied to crypto requires professional judgment. If you are a frequent trader generating significant income, consult with a tax advisor about the need for monthly provisional payments to avoid penalties and interest. The SAT offers voluntary compliance programs that may be beneficial if you have unreported crypto income from prior years.
      </p>
    </LearnPageLayout>
  );
}
