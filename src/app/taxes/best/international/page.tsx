import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto Tax Software for International Users (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Compare crypto tax tools with international tax support. Find software that handles country-specific rules for UK, EU, Australia, Canada, and more.",
  keywords: ["international crypto tax", "crypto tax uk", "crypto tax europe", "crypto tax australia", "global crypto tax"],
};

export default function BestInternationalTaxPage() {
  return (
    <LearnPageLayout
      title="Best Crypto Tax Software for International Users"
      categoryName="Taxes"
      categorySlug="taxes"
      readTime="9 min"
      intro="Crypto tax rules vary dramatically between countries, from tax-free jurisdictions to complex reporting requirements. Many crypto tax tools are US-centric, but several platforms offer comprehensive international support with country-specific calculations, forms, and cost basis methods. This guide identifies the best options for non-US crypto taxpayers and covers key considerations for international tax compliance."
      toc={[
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-country-specific-tools-matter", title: "Why Country-Specific Tools Matter", level: 2 },
        { id: "top-international", title: "top-international", level: 2 },
        { id: "top-international-tax-tools", title: "Top International Tax Tools", level: 2 },
        { id: "country-specific", title: "country-specific", level: 2 },
        { id: "country-specific-considerations", title: "Country-Specific Considerations", level: 2 },
        { id: "choosing", title: "choosing", level: 2 },
        { id: "choosing-the-right-tool", title: "Choosing the Right Tool", level: 2 }
      ]}
      faqs={[
        { question: "Can US-focused tools work for international users?", answer: "Basic gain/loss calculations may work, but country-specific rules around holding periods, tax-free thresholds, and reporting formats differ significantly. Using a tool with proper support for your country ensures accurate calculations and generates the correct forms." },
        { question: "What if my country is not supported?", answer: "For unsupported countries, use a tool that generates generic gain/loss reports. Apply your country's specific rules manually or work with a local tax professional who can interpret the data according to your jurisdiction's requirements." },
      ]}
      relatedArticles={[
        { title: "Crypto Taxes UK", href: "/taxes/learn/crypto-taxes-uk", category: "Taxes" },
        { title: "Crypto Taxes Australia", href: "/taxes/learn/crypto-taxes-australia", category: "Taxes" },
        { title: "Crypto Taxes Canada", href: "/taxes/learn/crypto-taxes-canada", category: "Taxes" },
      ]}
    >
      <section id="why-it-matters">
        <h2>Why Country-Specific Tools Matter</h2>
        <p>Crypto tax rules differ significantly between jurisdictions. Germany exempts crypto held for over one year from capital gains tax. The UK uses share pooling rather than FIFO for cost basis calculation. Australia treats crypto as property with a 50% CGT discount for assets held over 12 months. Japan taxes crypto gains as miscellaneous income at rates up to 55%. Portugal had no crypto tax until recently but now taxes short-term gains. These differences mean that a US-optimized tax tool may produce incorrect results for international users. Using software that understands your country's specific rules, holding period benefits, tax-free thresholds, and reporting formats ensures compliance and avoids overpaying taxes by missing applicable exemptions or deductions.</p>
      </section>
      <section id="top-international">
        <h2>Top International Tax Tools</h2>
        <p>Koinly supports tax reporting for over 20 countries with country-specific calculations and forms, making it the broadest international option. It handles UK share pooling, Australian CGT discount, German holding period exemption, and many other country-specific rules. CryptoTaxCalculator supports numerous countries with automatic application of local tax rules. Accointing (Glassnode) has strong European support, particularly for Germany, Austria, and Switzerland. CoinPanda supports over 65 countries with competitive international pricing. Divly focuses specifically on European markets with strong support for Nordic countries. For each tool, verify that your specific country is actively supported with correct tax calculations rather than just being listed as a supported export format.</p>
      </section>
      <section id="country-specific">
        <h2>Country-Specific Considerations</h2>
        <p>UK users need tools that implement share pooling rules for cost basis, which averages the cost across all holdings of the same asset. The bed-and-breakfasting rule must be applied when repurchasing the same asset within 30 days. Australian users need CGT discount calculation for assets held over 12 months and personal use asset exemptions. Canadian users need tools that handle the 50% capital gains inclusion rate and the superficial loss rule similar to wash sales. German users benefit hugely from the one-year holding period exemption, making holding period tracking essential. Japanese users face progressive tax rates on crypto income and need tools that calculate according to the miscellaneous income framework. For each jurisdiction, verify that the tax tool implements the specific rules that matter most for your situation.</p>
      </section>
      <section id="choosing">
        <h2>Choosing the Right Tool</h2>
        <p>Start by confirming your country is actively supported with proper tax calculations, not just generic export. Import your transactions and check that country-specific rules like holding period exemptions and cost basis methods are correctly applied. Verify that the generated report format matches what your tax authority requires. Consider whether the tool supports your local currency for cost basis calculations, as using USD instead of your local currency can introduce conversion errors. Check for local language support if needed. Read reviews from users in your specific country to understand real-world accuracy. If your country has particularly complex rules, consider combining a crypto tax tool for transaction processing with a local tax professional for filing and compliance review.</p>
      </section>
    </LearnPageLayout>
  );
}
