import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in Nigeria (${CURRENT_YEAR}) | degen0x`,
  description:
    "Complete guide to cryptocurrency taxes in Nigeria. Learn about capital gains tax, SEC regulation, and how Nigerian crypto investors should handle tax obligations.",
};

export default function CryptoTaxesNigeriaPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in Nigeria"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="8 min read"
      intro="Nigeria has the largest crypto market in Africa, with massive peer-to-peer trading volumes. Despite the Central Bank of Nigeria's previous restrictions on banks servicing crypto exchanges, the regulatory landscape has been evolving with the SEC establishing a framework for digital asset regulation. Crypto gains are potentially subject to Capital Gains Tax under Nigerian tax law, though enforcement has been limited. Nigerian crypto investors should understand their potential tax obligations as the regulatory environment matures."
      toc={[
        { id: "regulatory-landscape", title: "regulatory-landscape", level: 2 },
        { id: "regulatory-landscape", title: "Regulatory Landscape", level: 2 },
        { id: "capital-gains-tax", title: "capital-gains-tax", level: 2 },
        { id: "capital-gains-tax", title: "Capital Gains Tax", level: 2 },
        { id: "income-tax", title: "income-tax", level: 2 },
        { id: "income-tax-on-crypto", title: "Income Tax on Crypto", level: 2 },
        { id: "sec-framework", title: "sec-framework", level: 2 },
        { id: "sec-digital-asset-framework", title: "SEC Digital Asset Framework", level: 2 },
        { id: "practical-guidance", title: "practical-guidance", level: 2 },
        { id: "practical-guidance", title: "Practical Guidance", level: 2 }
      ]}
      faqs={[
        { question: "Is crypto taxed in Nigeria?", answer: "Under Nigerian tax law, gains from disposing of assets including cryptocurrency may be subject to Capital Gains Tax at 10%. Additionally, income received in crypto is subject to personal income tax at progressive rates up to 24%. However, the lack of specific crypto tax legislation and limited enforcement means practical application has been inconsistent." },
        { question: "What was the CBN crypto ban?", answer: "In February 2021, the Central Bank of Nigeria directed banks and financial institutions to stop facilitating crypto transactions. This did not make crypto illegal to own or trade but prevented banks from servicing crypto exchanges. This restriction has been evolving, and the SEC has been working on regulatory frameworks that may ease banking access for licensed crypto platforms." },
        { question: "Does FIRS collect tax on crypto?", answer: "The Federal Inland Revenue Service (FIRS) has the mandate to collect taxes including CGT and income tax that may apply to crypto activities. While there is no specific crypto tax collection mechanism, FIRS could assess taxes on crypto gains under existing legislation. As digital asset regulation develops, tax enforcement is expected to increase." },
        { question: "Should I report crypto on my Nigerian tax return?", answer: "Technically, all taxable income and gains should be reported. If you have realized gains from crypto trading, these may be subject to CGT. Income earned in crypto should be included in your income tax return. Working with a Nigerian tax advisor can help determine your specific obligations given the evolving regulatory framework." },
      ]}
      relatedArticles={[
        { title: "Crypto Taxes in South Africa", href: "/taxes/learn/crypto-taxes-south-africa", category: "Taxes" },
        { title: "Crypto Taxes in Turkey", href: "/taxes/learn/crypto-taxes-turkey", category: "Taxes" },
        { title: "Crypto Freelancing", href: "/spending/learn/crypto-freelancing", category: "Spending" },
      ]}
    >
      <h2 id="regulatory-landscape">Regulatory Landscape</h2>
      <p>
        Nigeria&apos;s crypto regulatory landscape has been complex and evolving. The Central Bank of Nigeria&apos;s 2021 directive to banks created a challenging environment but did not stop crypto adoption. Nigeria remained one of the top P2P crypto markets globally, with traders using peer-to-peer platforms to circumvent banking restrictions. The SEC Nigeria subsequently established a framework for regulating digital assets, issuing rules for Virtual Assets Service Providers (VASPs). This regulatory development signals a shift toward formal oversight that will likely include clearer tax obligations. The Nigerian government has also explored launching a central bank digital currency (eNaira), indicating recognition of digital assets in the financial system. The regulatory trajectory suggests increasing formalization that will bring crypto activities more clearly within the tax system.
      </p>

      <h2 id="capital-gains-tax">Capital Gains Tax</h2>
      <p>
        Under the Capital Gains Tax Act, gains arising from the disposal of any asset are subject to CGT at 10%. Cryptocurrency, as a form of property, falls within the scope of this Act. The gain is calculated as the difference between the disposal proceeds and the acquisition cost plus allowable expenses. However, the practical application of CGT to crypto has been limited due to the lack of specific guidance, the difficulty of tracking P2P transactions, and limited enforcement infrastructure. The Companies Income Tax Act also includes provisions for capital gains realized by corporate entities. As regulatory clarity improves and exchanges become licensed, the infrastructure for tracking and taxing crypto gains will strengthen. Nigerian investors should anticipate increased enforcement and maintain transaction records accordingly.
      </p>

      <h2 id="income-tax">Income Tax on Crypto</h2>
      <p>
        Income earned in cryptocurrency is subject to personal income tax under the Personal Income Tax Act. This includes crypto received as salary or wages, payment for freelance services, mining income, and potentially staking and DeFi yields. Nigerian personal income tax rates are progressive, ranging from 7% to 24% depending on income level. For employees receiving crypto compensation, the employer should apply PAYE (Pay As You Earn) withholding based on the naira value at the time of payment. Self-employed individuals and freelancers earning crypto must self-assess and report the income. The Finance Act introduced provisions that may affect digital economy taxation, potentially providing additional framework for taxing crypto income. Businesses operating in the crypto space must also comply with Companies Income Tax obligations.
      </p>

      <h2 id="sec-framework">SEC Digital Asset Framework</h2>
      <p>
        The Securities and Exchange Commission Nigeria has established rules for the regulation of digital assets. The framework includes registration requirements for VASPs, rules for digital asset offerings and exchanges, custody requirements, and AML/KYC obligations. Licensed exchanges will be required to maintain transaction records and potentially share data with tax authorities. The SEC framework classifies digital assets into categories including crypto-assets, utility tokens, and security tokens, with different regulatory requirements for each. This classification may also affect tax treatment, as security tokens may be subject to different rules than utility tokens or pure cryptocurrencies. The SEC&apos;s regulatory approach is expected to facilitate banking relationships for licensed crypto platforms, making it easier for the tax authority to monitor crypto transactions.
      </p>

      <h2 id="practical-guidance">Practical Guidance</h2>
      <p>
        Nigerian crypto investors should take a proactive approach to compliance despite the current enforcement gap. Maintain detailed records of all crypto transactions including P2P trades, exchange transactions, and DeFi activities. Record naira values at the time of each transaction. If you trade primarily through P2P platforms, keep screenshots and records of each trade including the counterparty, amount, and rate. Consider setting aside a portion of crypto profits for potential tax obligations. As the SEC framework is implemented and exchanges become licensed, historical transaction data may become accessible to tax authorities. Working with a Nigerian tax advisor who understands both the current tax laws and the evolving crypto regulatory framework can help ensure you are prepared for increasing compliance requirements.
      </p>
    </LearnPageLayout>
  );
}
