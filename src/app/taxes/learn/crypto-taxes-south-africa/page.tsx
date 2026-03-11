import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in South Africa (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Complete guide to cryptocurrency taxes in South Africa. Learn about income tax vs CGT treatment, SARS requirements, and how to report crypto gains.",
};

export default function CryptoTaxesSouthAfricaPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in South Africa"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="8 min read"
      intro="South Africa has established relatively clear cryptocurrency tax rules through SARS (South African Revenue Service) guidance. Crypto is treated as an intangible asset, and gains are taxed either as income tax or capital gains tax depending on the nature of your activities. Frequent traders pay income tax at marginal rates up to 45%, while long-term investors benefit from the more favorable CGT regime. SARS has been proactive in issuing crypto tax guidance and collecting data from exchanges."
      toc={[
        { id: "tax-classification", title: "Income Tax vs Capital Gains", level: 2 },
        { id: "income-tax-rates", title: "Income Tax on Crypto Trading", level: 2 },
        { id: "cgt-treatment", title: "Capital Gains Tax Treatment", level: 2 },
        { id: "reporting-sars", title: "Reporting to SARS", level: 2 },
        { id: "defi-mining", title: "DeFi, Mining, and Staking", level: 2 },
      ]}
      faqs={[
        { question: "How does SARS classify crypto?", answer: "SARS classifies cryptocurrency as an intangible asset of a financial nature. It is not legal tender, not a financial instrument, and not a security. Gains from disposal are taxed either as revenue (income tax) or capital gains depending on the taxpayer's intention and trading pattern." },
        { question: "What determines income tax vs CGT treatment?", answer: "SARS considers several factors: your intention when acquiring crypto, the frequency and volume of trades, whether trading is your primary income source, and your overall trading pattern. Active traders are treated as earning revenue (income tax), while long-term holders are treated as making capital gains (CGT)." },
        { question: "What is the CGT inclusion rate in South Africa?", answer: "For individuals, only 40% of the capital gain is included in taxable income (the inclusion rate). This is then taxed at your marginal income tax rate. The effective maximum CGT rate for individuals is therefore approximately 18% (45% marginal rate times 40% inclusion). There is also an annual CGT exclusion of 40,000 ZAR." },
        { question: "Must I pay tax on crypto received as payment?", answer: "Yes. Crypto received as payment for goods or services is taxable at the ZAR market value when received. This applies to salaries, freelance payments, and business income. The amount is included in your gross income and taxed at your marginal rate." },
      ]}
      relatedArticles={[
        { title: "Crypto Taxes in Nigeria", href: "/taxes/learn/crypto-taxes-nigeria", category: "Taxes" },
        { title: "Crypto Taxes in Ireland", href: "/taxes/learn/crypto-taxes-ireland", category: "Taxes" },
        { title: "Crypto Taxes in New Zealand", href: "/taxes/learn/crypto-taxes-new-zealand", category: "Taxes" },
      ]}
    >
      <h2 id="tax-classification">Income Tax vs Capital Gains</h2>
      <p>
        The fundamental question in South African crypto taxation is whether your gains are treated as revenue (taxed as income) or capital in nature (taxed under CGT). SARS uses an intention-based test: if you acquired crypto with the primary intention of holding as a long-term investment, gains are capital. If you acquired crypto to trade for profit through frequent buying and selling, gains are revenue. The badges of trade test considers factors including the nature and quantity of the asset, the frequency of similar transactions, the period of holding, the circumstances of the sale, and the motive of the taxpayer. Active day traders and frequent traders are almost certainly earning revenue. Long-term holders who buy and hold for years are more likely to have capital gains. Mixed activity (some trading, some holding) may require splitting positions between income and capital treatment.
      </p>

      <h2 id="income-tax-rates">Income Tax on Crypto Trading</h2>
      <p>
        If your crypto gains are classified as revenue, they are added to your total taxable income and subject to South Africa&apos;s progressive income tax rates. The current rates range from 18% for income up to approximately 237,100 ZAR to 45% for income above approximately 1,817,000 ZAR. The full gain is included in income with no inclusion rate reduction. This makes the income tax treatment significantly more expensive than CGT for profitable traders. However, trading losses can be deducted against other income if you are carrying on a trade. Expenses directly related to trading activities (exchange fees, software costs, etc.) are deductible. If crypto trading is your business, you must register for provisional tax and make biannual advance payments. VAT does not apply to crypto trading as financial services are exempt.
      </p>

      <h2 id="cgt-treatment">Capital Gains Tax Treatment</h2>
      <p>
        For crypto gains treated as capital, the CGT regime is more favorable. Individuals benefit from a 40% inclusion rate, meaning only 40% of the net capital gain is included in taxable income. At the maximum marginal rate of 45%, the effective CGT rate is approximately 18%. There is an annual exclusion of 40,000 ZAR for individuals, and a lifetime exclusion of 1.8 million ZAR on death. Capital losses can only be offset against capital gains, not against revenue income. Unused capital losses carry forward to future years. For companies and trusts, the inclusion rate is higher (80% for companies, 80% for trusts). The cost base for CGT includes the original acquisition cost plus directly attributable transaction costs. The FIFO method is commonly used when specific identification is not possible.
      </p>

      <h2 id="reporting-sars">Reporting to SARS</h2>
      <p>
        Crypto gains and income must be reported on your annual income tax return (ITR12). Capital gains are reported in the capital gains schedule, while revenue gains are included in the appropriate income section. SARS has added specific crypto-related questions to the tax return in recent years, asking whether the taxpayer held or traded in crypto during the tax year. South African exchanges like Luno and VALR are required to comply with local regulations and may share user data with SARS. SARS also participates in international information exchange under the OECD Common Reporting Standard (CRS). The tax year for individuals runs from March 1 to February 28/29, with filing deadlines typically in October or November for e-filing. Keep records for at least five years as SARS can audit returns within this period.
      </p>

      <h2 id="defi-mining">DeFi, Mining, and Staking</h2>
      <p>
        Mining income in South Africa is treated as revenue (taxable as income) because it involves an active profit-generating process. The ZAR value of coins when mined is taxable, and mining expenses including electricity and equipment are deductible. Staking rewards are also likely income at the time of receipt. DeFi yields from lending and liquidity provision are income when earned or claimed. Each swap within DeFi protocols is a disposal that triggers either income or CGT depending on your classification. Airdrops received are income at market value if they have a determinable price. South Africa&apos;s exchange control regulations may also be relevant for crypto held on foreign platforms, as residents face restrictions on moving capital offshore. SARS has indicated it will continue to expand its guidance on DeFi and emerging crypto activities as the ecosystem evolves.
      </p>
    </LearnPageLayout>
  );
}
