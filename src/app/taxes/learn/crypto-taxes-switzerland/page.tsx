import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in Switzerland (${CURRENT_YEAR}) | degen0x`,
  description:
    "Complete guide to cryptocurrency taxes in Switzerland. Learn about the wealth tax, capital gains exemptions, and how Swiss crypto investors benefit from one of the most favorable tax regimes.",
};

export default function CryptoTaxesSwitzerlandPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in Switzerland"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="9 min read"
      intro="Switzerland is widely regarded as one of the most crypto-friendly countries for taxation. Private investors benefit from no capital gains tax on crypto profits, though wealth tax applies to holdings and income received in crypto is taxable. The Swiss Federal Tax Administration (FTA) provides official valuations for major cryptocurrencies, and each canton may have different wealth tax rates. Understanding the distinction between private investing and professional trading is crucial, as professional traders lose the capital gains exemption."
      toc={[
        { id: "capital-gains", title: "capital-gains", level: 2 },
        { id: "capital-gains-tax-exemption", title: "Capital Gains Tax Exemption", level: 2 },
        { id: "wealth-tax", title: "wealth-tax", level: 2 },
        { id: "wealth-tax-on-crypto", title: "Wealth Tax on Crypto", level: 2 },
        { id: "income-tax", title: "income-tax", level: 2 },
        { id: "income-tax-on-crypto", title: "Income Tax on Crypto", level: 2 },
        { id: "professional-trading", title: "professional-trading", level: 2 },
        { id: "professional-vs-private-trading", title: "Professional vs Private Trading", level: 2 },
        { id: "cantonal-differences", title: "cantonal-differences", level: 2 },
        { id: "cantonal-differences", title: "Cantonal Differences", level: 2 }
      ]}
      faqs={[
        { question: "Is crypto tax-free in Switzerland?", answer: "Capital gains from crypto are tax-free for private investors in Switzerland. However, crypto holdings are subject to annual wealth tax, and income received in crypto (mining, staking, salary) is subject to income tax. Professional traders do not benefit from the capital gains exemption." },
        { question: "How is crypto valued for wealth tax?", answer: "The Swiss Federal Tax Administration publishes official year-end valuations for major cryptocurrencies. These values are used for wealth tax declarations. For tokens not listed by the FTA, you must use the market value from a reputable exchange on December 31st. If no market value exists, the token is valued at acquisition cost." },
        { question: "What makes someone a professional crypto trader?", answer: "The FTA uses five criteria to assess professional trading status: high transaction volume and frequency, using borrowed capital for trading, short holding periods, crypto gains constituting a significant portion of total income, and trading activity being systematic and organized. Meeting several of these criteria may result in professional classification." },
        { question: "Do I need to declare crypto on my tax return?", answer: "Yes. All crypto holdings must be declared on your annual tax return as part of your wealth declaration, regardless of whether you made any trades. Income from crypto activities (mining, staking, airdrops) must also be reported as income." },
      ]}
      relatedArticles={[
        { title: "Crypto Taxes in Ireland", href: "/taxes/learn/crypto-taxes-ireland", category: "Taxes" },
        { title: "Crypto Taxes in the Netherlands", href: "/taxes/learn/crypto-taxes-netherlands", category: "Taxes" },
        { title: "Cold Storage Guide", href: "/long-term/learn/cold-storage-guide", category: "Long-Term" },
      ]}
    >
      <h2 id="capital-gains">Capital Gains Tax Exemption</h2>
      <p>
        Switzerland does not tax capital gains from movable private property for individual investors. This means that profits from buying and selling cryptocurrency as a private investor are entirely tax-free, regardless of the amount. This exemption applies to all crypto assets including Bitcoin, Ethereum, altcoins, and tokens. There is no holding period requirement, unlike some countries that require holding assets for a minimum period to qualify for capital gains exemptions. The exemption also means that capital losses cannot be deducted against other income. This favorable treatment has made Switzerland a popular jurisdiction for crypto investors. However, the exemption only applies to private (non-professional) investors, and the distinction between private and professional trading is a critical classification that determines your entire tax treatment.
      </p>

      <h2 id="wealth-tax">Wealth Tax on Crypto</h2>
      <p>
        While capital gains are exempt, Switzerland imposes an annual wealth tax on total net assets, including cryptocurrency holdings. The tax is levied at both the cantonal and municipal level, with rates varying significantly by location. Typical effective wealth tax rates range from 0.1% to 1% of total net wealth, depending on the canton and municipality. Crypto holdings must be declared at their market value on December 31st. The FTA publishes official year-end valuations for approximately 20-30 of the most common cryptocurrencies. For tokens not on the FTA list, use the market value from a major exchange. Tokens with no determinable market value should be reported at acquisition cost. All crypto must be listed individually in the wealth declaration (Wertschriftenverzeichnis) with quantities and values. DeFi positions, staked assets, and tokens locked in protocols should be included at their withdrawable value.
      </p>

      <h2 id="income-tax">Income Tax on Crypto</h2>
      <p>
        While capital gains are exempt, income received in cryptocurrency is fully taxable at progressive income tax rates that vary by canton but can reach 40% or more including federal, cantonal, and municipal taxes. Taxable crypto income includes: salary or wages paid in crypto (taxed at the CHF value when received), mining rewards (taxable as self-employment income or hobby income depending on scale), staking rewards (taxable as income at fair market value when received), airdrops (taxable if they have a determinable market value), and liquidity mining or yield farming rewards (taxable as income when claimed). For mining and staking conducted as a business, expenses like electricity and equipment can be deducted. For individuals earning crypto income, it is added to other income and taxed at the marginal rate. Social security contributions also apply to employment and self-employment crypto income.
      </p>

      <h2 id="professional-trading">Professional vs Private Trading</h2>
      <p>
        The classification as a professional or private trader is the most consequential determination for Swiss crypto taxation. Professional traders lose the capital gains exemption and are taxed on gains as self-employment income at progressive rates, plus they owe social security contributions (AHV/IV/EO). The FTA applies a five-factor test: the total volume and frequency of transactions, the use of borrowed capital (leverage) for trading, trading gains representing a significant share of total income, short average holding periods, and systematic or organized trading activity. No single factor is determinative. Tax authorities look at the overall picture. Private investors who trade occasionally and hold for the medium to long term generally remain classified as private. Those who day-trade actively with large volumes, especially using leverage, risk professional classification. The classification is made by cantonal tax authorities and can vary somewhat between cantons.
      </p>

      <h2 id="cantonal-differences">Cantonal Differences</h2>
      <p>
        Switzerland&apos;s 26 cantons have significant autonomy in setting tax rates, leading to meaningful differences in the effective tax burden on crypto holdings and income. Crypto-friendly cantons like Zug (known as Crypto Valley) have lower overall tax rates and a welcoming regulatory environment. Cantons like Geneva and Basel-Stadt have higher tax rates. The wealth tax rates applicable to crypto holdings vary from as low as 0.1% in low-tax cantons to approaching 1% in higher-tax jurisdictions. Income tax rates for crypto income also vary significantly. Some cantons have issued specific guidance on crypto taxation, while others rely on federal principles. The city of Zug and the Canton of Zug accept Bitcoin and Ether for tax payments up to 100,000 CHF. When choosing where to base your crypto activities in Switzerland, cantonal tax differences can have a substantial impact on your total tax burden.
      </p>
    </LearnPageLayout>
  );
}
