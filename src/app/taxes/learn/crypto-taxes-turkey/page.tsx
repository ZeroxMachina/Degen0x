import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in Turkey (${CURRENT_YEAR}) | degen0x`,
  description:
    "Complete guide to cryptocurrency taxes in Turkey. Learn about current tax obligations, upcoming regulations, and how Turkish crypto investors should handle reporting.",
};

export default function CryptoTaxesTurkeyPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in Turkey"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="8 min read"
      intro="Turkey has one of the highest crypto adoption rates globally, yet the regulatory and tax framework for cryptocurrency remains evolving. While there is no specific crypto capital gains tax in Turkey currently, crypto activities may fall under existing income tax provisions. The Turkish government has been developing comprehensive crypto legislation that will establish clear rules for taxation, licensing, and oversight. Turkish crypto investors should understand both current obligations and prepare for incoming regulations."
      toc={[
        { id: "current-status", title: "current-status", level: 2 },
        { id: "current-tax-status", title: "Current Tax Status", level: 2 },
        { id: "income-tax", title: "income-tax", level: 2 },
        { id: "income-tax-considerations", title: "Income Tax Considerations", level: 2 },
        { id: "upcoming-regulation", title: "upcoming-regulation", level: 2 },
        { id: "upcoming-regulation", title: "Upcoming Regulation", level: 2 },
        { id: "exchange-oversight", title: "exchange-oversight", level: 2 },
        { id: "exchange-oversight", title: "Exchange Oversight", level: 2 },
        { id: "practical-guidance", title: "practical-guidance", level: 2 },
        { id: "practical-guidance", title: "Practical Guidance", level: 2 }
      ]}
      faqs={[
        { question: "Is crypto taxed in Turkey?", answer: "Turkey does not currently have a specific crypto capital gains tax. However, crypto income may be subject to general income tax provisions. The government has been developing comprehensive crypto legislation that is expected to introduce clear tax rules. It is advisable to treat crypto gains as taxable under existing income tax law until specific legislation is enacted." },
        { question: "What happened with Turkey's crypto payment ban?", answer: "In April 2021, the Central Bank of Turkey prohibited the use of crypto for payments, meaning crypto cannot be used to buy goods and services directly. However, trading and holding crypto remains legal. Exchanges continue to operate, and buying and selling crypto for Turkish lira is permitted." },
        { question: "Do Turkish exchanges report to tax authorities?", answer: "Turkish crypto exchanges are subject to existing anti-money laundering regulations and cooperate with MASAK (Financial Crimes Investigation Board). While there is no formal crypto-specific tax reporting framework yet, exchanges may share data with tax authorities as part of AML compliance. Upcoming legislation is expected to formalize these reporting requirements." },
        { question: "How should I prepare for crypto taxes in Turkey?", answer: "Maintain complete records of all crypto transactions including purchases, sales, trades, and any income received in crypto. Track the TRY value at the time of each transaction. When specific legislation is enacted, historical records will be essential for calculating your tax obligations accurately." },
      ]}
      relatedArticles={[
        { title: "Crypto Taxes in Poland", href: "/taxes/learn/crypto-taxes-poland", category: "Taxes" },
        { title: "Crypto Taxes in Nigeria", href: "/taxes/learn/crypto-taxes-nigeria", category: "Taxes" },
        { title: "Crypto Taxes in South Africa", href: "/taxes/learn/crypto-taxes-south-africa", category: "Taxes" },
      ]}
    >
      <h2 id="current-status">Current Tax Status</h2>
      <p>
        Turkey does not have specific legislation that explicitly addresses cryptocurrency taxation. This regulatory gap has created uncertainty for the millions of Turkish crypto investors. The Revenue Administration (Gelir Idaresi Baskanligi) has not issued formal guidance on how crypto gains should be reported. However, the absence of specific crypto tax law does not mean crypto gains are tax-free. Under general Turkish tax principles, income from any source is potentially taxable. The Income Tax Law (Gelir Vergisi Kanunu) covers various categories of income, and crypto gains could fall under capital gains from movable property sales or other income categories. The practical reality is that enforcement has been limited due to the lack of specific rules and reporting frameworks.
      </p>

      <h2 id="income-tax">Income Tax Considerations</h2>
      <p>
        Under existing Turkish income tax law, individuals are taxed on worldwide income at progressive rates of 15% to 40%. If crypto gains are classified as capital gains from the sale of movable property, they may benefit from certain exemptions. Sales of movable property held for more than one year by individuals outside of commercial activity may be exempt from income tax under certain conditions. However, frequent trading could be classified as commercial activity (ticari kazanc), which would be subject to full income tax with no exemption. Corporate entities that trade or hold crypto must include any gains in their corporate tax calculations at the standard rate of 25%. Self-employed individuals earning crypto for services must declare it as professional income. The ambiguity in the current framework makes professional tax advice important for Turkish crypto investors.
      </p>

      <h2 id="upcoming-regulation">Upcoming Regulation</h2>
      <p>
        The Turkish government has been working on comprehensive crypto asset legislation. Draft laws have circulated that would establish a licensing regime for crypto service providers, define tax obligations for crypto transactions, create reporting requirements for platforms and investors, and establish oversight by the Capital Markets Board (SPK). The expected legislation would likely introduce a withholding tax on crypto transactions collected at the exchange level, similar to the existing BSMV (Banking and Insurance Transaction Tax) applied to financial transactions. A transaction-based tax would simplify collection but could impact trading volumes. The timeline for enactment has shifted multiple times, but regulatory momentum continues. Turkish investors should monitor legislative developments closely and be prepared for retroactive application of new rules.
      </p>

      <h2 id="exchange-oversight">Exchange Oversight</h2>
      <p>
        Turkish crypto exchanges operate in a partially regulated environment. MASAK (Mali Suclari Arastirma Kurulu), the financial intelligence unit, oversees AML compliance for crypto platforms. Exchanges must implement KYC procedures and report suspicious transactions. The collapse of Turkish exchange Thodex in 2021, where the founder fled with an estimated billions in user funds, accelerated regulatory efforts. Currently, major Turkish exchanges like BtcTurk, Paribu, and Bitci are the largest platforms. They implement identity verification and may share user data with authorities. When formal crypto regulation passes, exchanges will likely be required to implement tax withholding and reporting to the Revenue Administration. The Central Bank ban on crypto payments means exchanges can facilitate trading but not payment processing for goods and services.
      </p>

      <h2 id="practical-guidance">Practical Guidance</h2>
      <p>
        Turkish crypto investors should adopt a proactive approach despite the current regulatory ambiguity. Keep detailed transaction records for all crypto activities including dates, amounts, TRY values, and counterparties. Export trade history from all exchanges regularly. For significant crypto holdings or active trading, consult a Turkish tax advisor (mali musavir) about whether to report gains under existing income tax provisions. Consider the risk that future legislation may require retrospective disclosure of crypto holdings and transactions. If you are earning income in crypto (freelancing, staking, business), this income is likely taxable under current law even without specific crypto rules. Monitor announcements from the Revenue Administration, SPK, and the Grand National Assembly for developments in crypto legislation.
      </p>
    </LearnPageLayout>
  );
}
