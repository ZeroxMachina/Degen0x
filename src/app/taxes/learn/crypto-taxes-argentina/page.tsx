import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in Argentina (${CURRENT_YEAR}) | degen0x`,
  description:
    "Complete guide to cryptocurrency taxes in Argentina. Learn about income tax on digital assets, personal assets tax, and navigating crypto compliance in Argentina's complex tax system.",
};

export default function CryptoTaxesArgentinaPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in Argentina"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="8 min read"
      intro="Argentina has one of the highest crypto adoption rates in Latin America, driven by persistent inflation and currency controls. The tax treatment of crypto in Argentina is complex, involving income tax on gains, personal assets tax on holdings, and the challenge of valuation in a country with multiple exchange rates. The AFIP (Administracion Federal de Ingresos Publicos) has been increasing scrutiny of crypto transactions while the regulatory framework continues to evolve."
      toc={[
        { id: "income-tax", title: "income-tax", level: 2 },
        { id: "income-tax-on-crypto", title: "Income Tax on Crypto", level: 2 },
        { id: "personal-assets", title: "personal-assets", level: 2 },
        { id: "personal-assets-tax-bienes-personales", title: "Personal Assets Tax (Bienes Personales)", level: 2 },
        { id: "valuation-challenges", title: "valuation-challenges", level: 2 },
        { id: "valuation-and-exchange-rate-challenges", title: "Valuation and Exchange Rate Challenges", level: 2 },
        { id: "reporting-afip", title: "reporting-afip", level: 2 },
        { id: "afip-reporting-requirements", title: "AFIP Reporting Requirements", level: 2 },
        { id: "practical-tips", title: "practical-tips", level: 2 },
        { id: "practical-tips-for-argentine-investors", title: "Practical Tips for Argentine Investors", level: 2 }
      ]}
      faqs={[
        { question: "How is crypto taxed in Argentina?", answer: "Crypto gains in Argentina are subject to income tax (Impuesto a las Ganancias). For individuals, digital currency gains from Argentine sources are taxed at 15%. The personal assets tax (Bienes Personales) also applies to crypto holdings at rates up to 2.25% on the value of assets held as of December 31st." },
        { question: "Is the 15% rate for all crypto gains?", answer: "The 15% cedular (schedular) tax applies to gains from the sale of digital currencies sourced in Argentina. However, the exact application and whether crypto-to-crypto trades are covered has been debated. Gains from foreign-source crypto activities may be taxed at progressive rates. Consult a local tax advisor for your specific situation." },
        { question: "Do I owe personal assets tax on crypto?", answer: "Yes. Crypto holdings are subject to the Bienes Personales tax, which applies to total personal assets above the minimum threshold. Rates range from 0.5% to 2.25% depending on the total value of your assets. Crypto held on foreign platforms may be subject to higher rates as foreign assets." },
        { question: "Which exchange rate should I use for crypto valuation?", answer: "Argentina has multiple exchange rates (official, blue, MEP, CCL). For tax purposes, the AFIP generally requires using the official exchange rate. However, this can create distortions when crypto is acquired through peer-to-peer markets at rates closer to the parallel market rate. Professional guidance is recommended." },
      ]}
      relatedArticles={[
        { title: "Crypto Taxes in Mexico", href: "/taxes/learn/crypto-taxes-mexico", category: "Taxes" },
        { title: "Crypto Taxes in Colombia", href: "/taxes/learn/crypto-taxes-colombia", category: "Taxes" },
        { title: "Stablecoin Spending", href: "/spending/learn/stablecoin-spending", category: "Spending" },
      ]}
    >
      <h2 id="income-tax">Income Tax on Crypto</h2>
      <p>
        Argentina introduced specific taxation of digital currency gains through modifications to the Income Tax Law. For individuals, gains from the disposal of digital currencies are subject to a cedular tax of 15% when the source is Argentine. This applies to selling crypto for Argentine pesos or using it to purchase goods and services in Argentina. The gain is calculated as the difference between the selling price and the acquisition cost, adjusted for inflation using the IPC (Consumer Price Index). This inflation adjustment is significant in Argentina given the country&apos;s high inflation rates and can substantially reduce the taxable gain. For corporate entities, crypto gains are included in general business income and taxed at the corporate rate of 25% to 35% depending on the amount. Income received in crypto (salaries, freelance payments) is taxable at progressive income tax rates.
      </p>

      <h2 id="personal-assets">Personal Assets Tax (Bienes Personales)</h2>
      <p>
        The Bienes Personales tax is an annual wealth tax applied to the total value of personal assets held as of December 31st. Crypto holdings are included in this calculation. The tax applies to assets above a minimum non-taxable threshold, which has been adjusted periodically. Rates are progressive, ranging from 0.5% to 2.25%. Assets held outside of Argentina, including crypto on foreign exchanges, historically faced higher rates (up to 2.25%) compared to domestic assets. This creates a meaningful annual cost for holding significant crypto positions. The value for tax purposes is determined at the market price in ARS on December 31st, using the official exchange rate for conversion from USD. Recent tax reforms have modified these rates and thresholds, so checking current legislation is essential.
      </p>

      <h2 id="valuation-challenges">Valuation and Exchange Rate Challenges</h2>
      <p>
        Argentina&apos;s multiple exchange rates create unique challenges for crypto tax compliance. The official exchange rate, the parallel (blue dollar) rate, and various financial exchange rates (MEP, CCL) can differ by 50% or more. Most crypto acquired through P2P platforms or international exchanges reflects the parallel market rate rather than the official rate. When reporting to AFIP using the official rate, this can create artificial gains or losses. For example, if you bought Bitcoin using dollars acquired at the blue rate of 1,000 ARS/USD, but AFIP values it at the official rate of 500 ARS/USD, the cost basis appears lower and the apparent gain is higher. This is one of the most challenging aspects of Argentine crypto taxation and requires careful documentation and potentially professional guidance to navigate.
      </p>

      <h2 id="reporting-afip">AFIP Reporting Requirements</h2>
      <p>
        Argentine tax residents must report crypto holdings and transactions to AFIP through the annual income tax return and the Bienes Personales declaration. AFIP has been actively monitoring crypto activities and has issued resolutions requiring financial institutions and payment platforms to report crypto-related transactions. Argentine exchanges and fintech platforms that facilitate crypto purchases report user data to AFIP. The tax authority also receives information from banks about transfers to crypto platforms. AFIP Resolution 4614/2019 expanded reporting requirements for virtual wallets and crypto platforms. Taxpayers must include crypto in their sworn asset declaration (declaracion jurada de bienes personales) and report any gains on their income tax return. The penalty for non-compliance includes fines and potential criminal sanctions for significant tax evasion.
      </p>

      <h2 id="practical-tips">Practical Tips for Argentine Investors</h2>
      <p>
        Given the complexity of Argentine crypto taxation, several practical strategies can help with compliance. Maintain detailed records of every transaction including the exchange rate used, the platform, and the ARS equivalent at the time of each trade. Use crypto tax software that supports ARS and can handle inflation adjustments. Given the inflation adjustment mechanism, holding periods matter significantly for reducing taxable gains, as longer holding periods allow for greater inflation-adjusted cost basis increases. Be aware that using crypto as a mechanism to circumvent currency controls (cepo cambiario) carries legal risks beyond tax implications. Consider consulting a contador publico (certified accountant) experienced in crypto taxation, as the intersection of crypto, inflation adjustment, multiple exchange rates, and evolving regulations requires specialized knowledge.
      </p>
    </LearnPageLayout>
  );
}
