import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in Europe: Complete Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Comprehensive guide to cryptocurrency taxes across Europe. Country-by-country tax rules, MiCA implications, VAT treatment, and reporting requirements for European crypto holders.",
  keywords: [
    "crypto taxes Europe",
    "cryptocurrency tax EU",
    "crypto tax MiCA",
    "bitcoin taxes Europe",
    "crypto capital gains Europe",
    "DAC8 crypto reporting",
  ],
};

export default function CryptoTaxesEuropePage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in Europe: What You Need to Know"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="16 min"
      intro="Crypto taxation across Europe varies significantly from country to country, as each EU member state sets its own direct tax rules. While the EU has unified its regulatory framework through MiCA, tax treatment remains a national matter. Some European countries like Portugal and Switzerland offer favorable crypto tax conditions, while others like France and Denmark impose substantial taxes. The new DAC8 directive will bring automatic exchange of crypto transaction data across EU member states. This guide covers the key rules across major European jurisdictions."
      toc={[
        { id: "eu-overview", title: "Overview of Crypto Taxation in Europe", level: 2 },
        { id: "country-comparison", title: "Country-by-Country Tax Comparison", level: 2 },
        { id: "dac8", title: "DAC8: EU-Wide Crypto Reporting", level: 2 },
        { id: "vat-treatment", title: "VAT Treatment of Cryptocurrency", level: 2 },
        { id: "defi-staking", title: "DeFi and Staking Taxes in the EU", level: 2 },
        { id: "tax-residency", title: "Tax Residency and Cross-Border Issues", level: 2 },
        { id: "tax-software", title: "Recommended Tax Software for Europe", level: 2 },
      ]}
      faqs={[
        {
          question: "Which European country has the lowest crypto taxes?",
          answer:
            "Several European countries offer favorable crypto tax treatment. Portugal does not tax crypto capital gains for individual investors (though business activity is taxed). Switzerland taxes crypto as wealth rather than capital gains for individuals. Germany exempts gains on crypto held for over one year. Malta does not tax long-term crypto gains. However, tax laws change frequently, so always verify current rules.",
        },
        {
          question: "Is crypto-to-crypto trading taxable in Europe?",
          answer:
            "In most European countries, yes. Trading one cryptocurrency for another is considered a disposal and triggers capital gains tax. The notable exception is Portugal, where individual crypto trading is generally not subject to capital gains tax. In Germany, crypto-to-crypto trades are taxable unless the original asset was held for more than one year.",
        },
        {
          question: "What is DAC8 and how does it affect crypto taxes?",
          answer:
            "DAC8 (Directive on Administrative Cooperation 8) is an EU directive that requires crypto service providers to report user transaction data to tax authorities. This data is then automatically exchanged between EU member states. DAC8 aims to close the tax reporting gap for crypto and will make it much harder to underreport crypto income across the EU.",
        },
        {
          question: "Do I owe VAT on buying or selling crypto in Europe?",
          answer:
            "No. Following the European Court of Justice ruling in the Hedqvist case (2015), the exchange of fiat currency for cryptocurrency is exempt from VAT across all EU member states. However, goods and services purchased with crypto are subject to normal VAT rules, and the crypto payment triggers a capital gains event.",
        },
        {
          question: "Can I move to a low-tax European country for crypto?",
          answer:
            "You can legally change your tax residency, but simply moving for tax purposes requires genuinely relocating your life and economic center. Most countries require you to spend at least 183 days per year to establish tax residency. Some countries have exit taxes on unrealized gains when you leave. Consult a cross-border tax advisor before making any moves.",
        },
      ]}
      relatedArticles={[
        { title: "Crypto Taxes in Germany", href: "/taxes/learn/crypto-taxes-germany", category: "Taxes" },
        { title: "EU Crypto Regulation (MiCA)", href: "/learn/crypto-regulation-eu", category: "Learn" },
        { title: "Best Crypto Tax Software", href: "/taxes/best/software", category: "Taxes" },
      ]}
    >
      <h2 id="eu-overview">Overview of Crypto Taxation in Europe</h2>
      <p>
        Unlike the regulatory framework (which MiCA has largely unified), cryptocurrency
        taxation in Europe remains a patchwork of national rules. Each EU member state, plus
        the UK, Switzerland, and Norway, sets its own rules for how crypto gains are calculated,
        what rates apply, and what exemptions exist. This creates both complexity and opportunity
        for European crypto holders.
      </p>
      <p>
        The general principle across most European countries is that cryptocurrency is treated
        as property or an asset, and disposing of it triggers capital gains tax. However, the
        rates, holding period benefits, and exemptions vary enormously. Understanding the rules
        in your specific country of tax residence is essential for compliance.
      </p>

      <h2 id="country-comparison">Country-by-Country Tax Comparison</h2>
      <p>
        Germany exempts crypto gains entirely if held for more than one year, making it one
        of the most favorable jurisdictions for long-term holders. Short-term gains under
        EUR 600 per year are also exempt. France applies a flat 30% tax (the &quot;flat tax&quot;)
        on crypto capital gains for occasional traders, while habitual traders face higher
        progressive rates. The Netherlands taxes crypto under its wealth tax system (Box 3)
        based on the value of holdings on January 1, rather than on realized gains.
      </p>
      <p>
        Portugal historically did not tax individual crypto gains, but introduced rules in
        2023 taxing gains on assets held less than one year at 28%. Assets held over a year
        remain tax-free. Italy taxes crypto gains at a flat 26% rate with an annual exemption
        threshold. Spain applies progressive capital gains rates from 19% to 28%. Switzerland
        treats crypto as property subject to cantonal wealth tax, but individual capital gains
        are generally tax-free (unless classified as professional trading).
      </p>

      <h2 id="dac8">DAC8: EU-Wide Crypto Reporting</h2>
      <p>
        The DAC8 directive, adopted in 2023, requires all crypto-asset service providers
        operating in the EU to collect and report detailed transaction data to local tax
        authorities. This data is then shared automatically between all EU member states.
        DAC8 aligns with the OECD Crypto-Asset Reporting Framework (CARF) and will
        significantly increase transparency. Implementation is expected to take effect across
        member states by 2026, covering both domestic and cross-border crypto transactions.
      </p>

      <h2 id="vat-treatment">VAT Treatment of Cryptocurrency</h2>
      <p>
        The European Court of Justice ruled in 2015 (Hedqvist case, C-264/14) that exchanging
        fiat currency for cryptocurrency is a supply of services exempt from VAT. This ruling
        applies across all EU member states. However, if you use crypto to purchase goods or
        services, the transaction is subject to normal VAT rules. Mining may be considered a
        non-taxable activity for VAT purposes if there is no identifiable customer, though
        interpretations vary by member state.
      </p>

      <h2 id="defi-staking">DeFi and Staking Taxes in the EU</h2>
      <p>
        DeFi taxation in Europe is largely uncharted territory, with few countries providing
        specific guidance. In general, receiving staking or yield farming rewards is likely
        treated as income at the time of receipt, and subsequent disposal triggers capital
        gains. Liquidity pool transactions may be treated as disposals in some jurisdictions.
        Token swaps through DEXs are generally treated the same as centralized exchange trades.
        Given the lack of specific guidance, conservative reporting is advisable.
      </p>

      <h2 id="tax-residency">Tax Residency and Cross-Border Issues</h2>
      <p>
        If you live in one EU country and use exchanges based in another, your tax obligations
        are determined by your country of tax residence, not where the exchange is located.
        Double taxation treaties between European countries generally prevent being taxed
        twice on the same income. However, the interaction between different national rules
        can create complexity, especially for people who relocate during a tax year.
      </p>

      <h2 id="tax-software">Recommended Tax Software for Europe</h2>
      <p>
        Several crypto tax platforms offer strong European support. Koinly supports tax
        reports for most European countries and integrates with European exchanges. Blockpit
        is Austria-based and specializes in DACH region (Germany, Austria, Switzerland) tax
        compliance. CoinTracking offers detailed reports for German tax rules including the
        one-year holding period exemption. Accointing (now part of Blockpit) provides
        portfolio tracking and tax reporting across European jurisdictions.
      </p>
    </LearnPageLayout>
  );
}
