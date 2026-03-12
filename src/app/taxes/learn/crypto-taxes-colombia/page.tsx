import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in Colombia (${CURRENT_YEAR}) | degen0x`,
  description:
    "Complete guide to cryptocurrency taxes in Colombia. Learn about income tax on crypto gains, DIAN reporting, and how Colombian crypto investors should handle compliance.",
};

export default function CryptoTaxesColombiaPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in Colombia"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="8 min read"
      intro="Colombia has been developing its approach to crypto regulation and taxation alongside growing adoption. While crypto is not legal tender, the DIAN (Direccion de Impuestos y Aduanas Nacionales) treats crypto assets as intangible assets subject to income tax. Colombia applies both income tax and a wealth tax that may apply to crypto holdings. As one of the leading crypto markets in Latin America, Colombia is increasingly focused on establishing clear rules for crypto taxation."
      toc={[
        { id: "tax-treatment", title: "tax-treatment", level: 2 },
        { id: "tax-treatment-of-crypto", title: "Tax Treatment of Crypto", level: 2 },
        { id: "income-tax", title: "income-tax", level: 2 },
        { id: "income-tax-on-crypto-gains", title: "Income Tax on Crypto Gains", level: 2 },
        { id: "wealth-tax", title: "wealth-tax", level: 2 },
        { id: "wealth-tax-implications", title: "Wealth Tax Implications", level: 2 },
        { id: "dian-reporting", title: "dian-reporting", level: 2 },
        { id: "dian-reporting", title: "DIAN Reporting", level: 2 },
        { id: "compliance-tips", title: "compliance-tips", level: 2 },
        { id: "compliance-tips", title: "Compliance Tips", level: 2 }
      ]}
      faqs={[
        { question: "How is crypto taxed in Colombia?", answer: "Crypto gains are subject to income tax in Colombia. Gains from the sale or exchange of crypto assets are treated as capital gains or ordinary income depending on the taxpayer's activity. The income tax rate for individuals ranges from 0% to 39% depending on total income. The wealth tax may also apply to crypto holdings." },
        { question: "Is there a capital gains tax on crypto in Colombia?", answer: "Colombia does not have a separate capital gains tax rate for most crypto gains. Gains from selling crypto are generally included in ordinary income. However, certain capital gains may qualify for a preferential rate of 15% if they meet specific conditions under the tax code. Consult a Colombian tax advisor for classification." },
        { question: "Do I report crypto on my DIAN tax return?", answer: "Yes. All income including crypto gains must be reported on your annual income tax return (declaracion de renta). Crypto holdings should also be declared as part of your asset declaration (patrimonio). The DIAN has been expanding its monitoring capabilities for crypto transactions." },
        { question: "Does Colombia tax crypto-to-crypto trades?", answer: "Under general tax principles, exchanging one asset for another may constitute a taxable event if there is a gain. Crypto-to-crypto trades could be taxable if the value of the crypto received exceeds the cost basis of the crypto given up. The specific treatment is not explicitly defined in current guidance." },
      ]}
      relatedArticles={[
        { title: "Crypto Taxes in Argentina", href: "/taxes/learn/crypto-taxes-argentina", category: "Taxes" },
        { title: "Crypto Taxes in Mexico", href: "/taxes/learn/crypto-taxes-mexico", category: "Taxes" },
        { title: "Crypto Freelancing", href: "/spending/learn/crypto-freelancing", category: "Spending" },
      ]}
    >
      <h2 id="tax-treatment">Tax Treatment of Crypto</h2>
      <p>
        Colombia classifies cryptocurrency as an intangible asset rather than a currency or legal tender. The Superintendencia Financiera de Colombia has stated that crypto is not a currency recognized under Colombian law, but has acknowledged its existence as a form of digital asset. For tax purposes, the DIAN applies existing tax framework provisions to crypto transactions. The General Tax Statute (Estatuto Tributario) provides the legal basis for taxing income from all sources, including crypto. Gains from the disposal of crypto assets are taxable income, and holdings are included in your patrimonio (net worth declaration) on the annual tax return. Colombia has been working on specific crypto legislation, but until it is enacted, general tax principles govern the treatment.
      </p>

      <h2 id="income-tax">Income Tax on Crypto Gains</h2>
      <p>
        Individual income tax in Colombia uses progressive rates ranging from 0% to 39% depending on total income. Crypto gains are added to your total taxable income and taxed at your marginal rate. For individuals, income is categorized into different cedulas (schedules): employment income, pensions, capital income, non-labor income, and dividends. Crypto trading gains typically fall under capital income (rentas de capital) or non-labor income. The gain is calculated as the difference between the disposal proceeds in COP (Colombian pesos) and the acquisition cost. Transaction fees and exchange commissions may be deductible. If crypto trading constitutes a habitual business activity, gains may be treated as business income. Corporate entities pay income tax at a flat rate on all income including crypto gains.
      </p>

      <h2 id="wealth-tax">Wealth Tax Implications</h2>
      <p>
        Colombia imposes a wealth tax (impuesto al patrimonio) on individuals and entities whose net worth exceeds a certain threshold. Crypto holdings count toward your total patrimonio and may push you above the wealth tax threshold. The wealth tax rate varies depending on net worth and is assessed on January 1st of each year. Crypto should be valued at fair market value in COP on the assessment date. The wealth tax is in addition to income tax on gains and represents a recurring cost for holding significant crypto positions. The combination of income tax on gains and wealth tax on holdings means that Colombian high-net-worth crypto investors face a meaningful total tax burden. Proper valuation of crypto holdings on the assessment date is important, and using exchange rates from recognized platforms is recommended.
      </p>

      <h2 id="dian-reporting">DIAN Reporting</h2>
      <p>
        The DIAN requires taxpayers to file annual income tax returns that include all income sources and a declaration of assets and liabilities (patrimonio). Crypto gains must be reported in the income section, and crypto holdings must be declared in the asset section. The DIAN has been strengthening its capacity to monitor crypto transactions and has cooperated with Colombian exchanges to obtain user data. Colombia participates in international tax information exchange programs that may provide data about Colombian residents trading on foreign platforms. The annual return is due at different times depending on your tax ID number (NIT), typically between August and October of the year following the tax year. The DIAN offers electronic filing through its MUISCA platform.
      </p>

      <h2 id="compliance-tips">Compliance Tips</h2>
      <p>
        Colombian crypto investors should maintain detailed records of all transactions in COP. Track the peso value at the time of each purchase, sale, and trade. Colombian exchanges like Buda.com and Bitso Colombia can provide transaction histories. For trades on international platforms, convert values to COP using representative market rates. Report all crypto income on your annual return and include holdings in your patrimonio declaration. Consider working with a Colombian contador (accountant) experienced in crypto taxation, as the classification of income under the correct cedula affects your tax calculation. As Colombia moves toward specific crypto legislation and licensing requirements for exchanges, compliance infrastructure will improve. Proactive compliance now positions you well for the more structured regulatory environment ahead.
      </p>
    </LearnPageLayout>
  );
}
