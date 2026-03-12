import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in Germany: Complete Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Complete guide to cryptocurrency taxes in Germany. Learn about the 1-year holding period exemption, the 600 EUR threshold, Finanzamt reporting, and how staking and lending are taxed.",
  keywords: ["crypto taxes Germany", "Finanzamt crypto", "cryptocurrency tax Germany", "bitcoin taxes Germany"],
};

export default function CryptoTaxesGermanyPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in Germany: Complete Guide"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="11 min read"
      intro="Germany has one of the most favorable crypto tax regimes in the world. Cryptocurrency held for more than one year is completely tax-free upon sale, regardless of the gain amount. Short-term gains under 600 EUR are also exempt. However, the rules around staking, lending, and DeFi activities add complexity that German crypto holders must understand to remain compliant with the Finanzamt."
      toc={[
        { id: "german-classification", title: "german-classification", level: 2 },
        { id: "how-germany-classifies-crypto", title: "How Germany Classifies Crypto", level: 2 },
        { id: "one-year-rule", title: "one-year-rule", level: 2 },
        { id: "the-1-year-holding-period-exemption", title: "The 1-Year Holding Period Exemption", level: 2 },
        { id: "short-term-gains", title: "short-term-gains", level: 2 },
        { id: "short-term-gains-the-600-eur-threshold", title: "Short-Term Gains & the 600 EUR Threshold", level: 2 },
        { id: "staking-lending", title: "staking-lending", level: 2 },
        { id: "staking-lending-tax-treatment", title: "Staking & Lending Tax Treatment", level: 2 },
        { id: "reporting", title: "reporting", level: 2 },
        { id: "reporting-to-the-finanzamt", title: "Reporting to the Finanzamt", level: 2 },
        { id: "tools", title: "tools", level: 2 },
        { id: "german-crypto-tax-tools", title: "German Crypto Tax Tools", level: 2 }
      ]}
      faqs={[
        { question: "Is crypto tax-free after 1 year in Germany?", answer: "Yes. If you hold cryptocurrency for more than one year (366 days), any gains from selling are completely tax-free under Section 23 of the German Income Tax Act. This applies regardless of the gain amount." },
        { question: "What is the 600 EUR exemption?", answer: "Short-term crypto gains (held less than 1 year) under 600 EUR per year are tax-free. This is a threshold, not an allowance: if your total short-term gains exceed 600 EUR, the entire amount becomes taxable, not just the excess." },
        { question: "Does staking extend the holding period?", answer: "No. Following the BMF guidance issued in 2022, staking and lending no longer extend the holding period to 10 years. The standard 1-year holding period applies even for staked or lent tokens." },
        { question: "Do I need to report tax-free crypto sales?", answer: "Yes. Even though long-term holdings and gains under 600 EUR are tax-free, you should document all transactions and report them in your tax return. The Finanzamt may request proof of holding periods." },
      ]}
      relatedArticles={[
        { title: "Best Crypto Tax Software", href: "/taxes/best/software", category: "Taxes" },
        { title: "Staking Rewards Tax Guide", href: "/taxes/learn/staking-rewards-taxes", category: "Taxes" },
        { title: "DeFi Tax Guide", href: "/taxes/learn/defi-tax-guide", category: "Taxes" },
      ]}
    >
      <h2 id="german-classification">How Germany Classifies Crypto</h2>
      <p>
        Germany classifies cryptocurrency as a private asset under Section 23 of the Income Tax Act (EStG). Unlike many countries that apply capital gains tax, Germany treats crypto profits as other income (sonstige Einkuenfte). Gains are taxed at your personal income tax rate, which can reach up to 45 percent plus solidarity surcharge. However, this is offset by the generous 1-year holding period exemption that makes long-term gains completely tax-free. The Federal Ministry of Finance (BMF) issued comprehensive guidance in 2022 covering exchange tokens, utility tokens, NFTs, staking, and DeFi activities.
      </p>

      <h2 id="one-year-rule">The 1-Year Holding Period Exemption</h2>
      <p>
        The cornerstone of German crypto taxation is the Spekulationsfrist. If you hold cryptocurrency for more than 365 days before selling, the entire gain is tax-free regardless of amount. The holding period is calculated on a FIFO basis: the first tokens purchased are considered the first sold. If you buy Bitcoin in January and more in June, then sell some the following February, the January purchase exceeds the 1-year period while the June purchase does not. This creates a powerful incentive for long-term holding strategies and careful tracking of acquisition dates for each parcel of tokens.
      </p>

      <h2 id="short-term-gains">Short-Term Gains &amp; the 600 EUR Threshold</h2>
      <p>
        Gains from crypto held less than one year are subject to your personal income tax rate. However, if your total short-term private sale gains across all assets are below 600 EUR for the year, the entire amount is tax-free. This is a Freigrenze (exemption threshold): exceeding 600 EUR by even one euro makes the entire gain taxable, not just the excess. Short-term losses can offset short-term gains and can be carried forward to future years. This threshold applies to the combined total of all private sale transactions, including non-crypto items like collectibles or other personal property sales.
      </p>

      <h2 id="staking-lending">Staking &amp; Lending Tax Treatment</h2>
      <p>
        The BMF guidance clarified that staking and lending do not extend the holding period from 1 year to 10 years, resolving a major concern for German crypto users. Staking rewards are taxable as other income at the time of receipt, valued at fair market value in EUR. The received tokens start a new 1-year holding period. Lending income from DeFi protocols is similarly treated. Mining rewards are taxable when received if conducted as a business activity, with the possibility of deducting expenses like electricity and hardware. Liquidity pool deposits and withdrawals in DeFi may trigger taxable events depending on the structure.
      </p>

      <h2 id="reporting">Reporting to the Finanzamt</h2>
      <p>
        Crypto income and gains are reported in Anlage SO of your annual income tax return filed with the Finanzamt. You must report all dispositions and calculate gains for each transaction. The tax year is the calendar year, and returns are due by July 31 of the following year or later with a tax advisor. The Finanzamt has been increasingly requesting detailed crypto documentation. German exchanges report user data, and the EU DAC8 directive will further expand information sharing between tax authorities. Maintaining detailed records with timestamps and EUR values for every acquisition and disposal is critical for compliance.
      </p>

      <h2 id="tools">German Crypto Tax Tools</h2>
      <p>
        CoinTracking is a German-founded platform offering deep integration with German tax rules including FIFO tracking for the 1-year holding period. Blockpit, popular across the DACH region, generates Finanzamt-ready reports compatible with Anlage SO. Accointing (now part of Blockpit) also serves German users well. These tools automatically identify which dispositions are tax-free based on the holding period, calculate short-term gains against the 600 EUR threshold, track staking rewards as income, and generate comprehensive reports for your Steuerberater. Many German tax advisors now specialize in crypto and can leverage these reports directly.
      </p>
    </LearnPageLayout>
  );
}
