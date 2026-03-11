import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in Portugal (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Complete guide to cryptocurrency taxes in Portugal. Learn about the new 28% tax on short-term gains, the 1-year exemption for long-term holders, NHR status, and reporting requirements.",
  keywords: ["crypto taxes Portugal", "cryptocurrency tax Portugal", "Portugal crypto tax 2024", "NHR crypto tax"],
};

export default function CryptoTaxesPortugalPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in Portugal"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="9 min read"
      intro="Portugal was once considered a crypto tax haven with zero taxation on individual crypto gains. That changed with the 2023 State Budget, which introduced a 28 percent tax on short-term crypto gains (assets held less than 365 days). However, crypto held for more than one year remains tax-free for individuals, preserving Portugal's appeal for long-term crypto investors."
      toc={[
        { id: "new-framework", title: "Portugal's New Crypto Tax Rules", level: 2 },
        { id: "short-term", title: "28% Tax on Short-Term Gains", level: 2 },
        { id: "long-term", title: "Tax-Free Long-Term Holdings", level: 2 },
        { id: "nhr", title: "Non-Habitual Resident (NHR) Status", level: 2 },
        { id: "reporting", title: "Reporting Requirements", level: 2 },
        { id: "planning", title: "Tax Planning for Portugal", level: 2 },
      ]}
      faqs={[
        { question: "Is crypto still tax-free in Portugal?", answer: "Partially. Crypto held for more than 365 days is still tax-free upon sale for individual investors. Short-term gains (held less than 365 days) are now taxed at 28 percent since the 2023 budget changes." },
        { question: "Does the 28% rate apply to crypto-to-crypto trades?", answer: "Yes. Exchanging one cryptocurrency for another is a taxable event if the disposed asset was held for less than 365 days. The gain is calculated based on the EUR value at the time of the trade." },
        { question: "Does NHR status help with crypto taxes?", answer: "The traditional NHR program offered tax benefits, though new applications are now under a revised framework. Existing NHR holders may benefit from reduced rates on certain foreign-source income. The domestic crypto tax rules apply regardless of NHR status for Portugal-sourced crypto gains." },
        { question: "Are staking rewards taxable in Portugal?", answer: "Staking rewards and other crypto income may be classified as income from capital (rendimentos de capitais) and taxed at 28 percent. The exact treatment depends on the nature of the activity and how it is classified under Portuguese tax categories." },
      ]}
      relatedArticles={[
        { title: "Crypto Taxes in Singapore", href: "/taxes/learn/crypto-taxes-singapore", category: "Taxes" },
        { title: "Crypto Taxes in UAE & Dubai", href: "/taxes/learn/crypto-taxes-uae", category: "Taxes" },
        { title: "Best Crypto Tax Software", href: "/taxes/best/software", category: "Taxes" },
      ]}
    >
      <h2 id="new-framework">Portugal&apos;s New Crypto Tax Rules</h2>
      <p>
        Until 2023, Portugal was famous for having zero taxes on individual crypto gains. The 2023 State Budget changed this by introducing taxation on crypto assets under a new category for crypto-assets (ativos virtuais). The new framework distinguishes between short-term and long-term holdings, with short-term gains taxed at 28 percent and long-term gains remaining tax-free. This was a compromise between maintaining Portugal&apos;s attractiveness for crypto investors and generating tax revenue. The rules apply to all crypto assets including Bitcoin, Ethereum, stablecoins, and NFTs.
      </p>

      <h2 id="short-term">28% Tax on Short-Term Gains</h2>
      <p>
        Gains from selling cryptocurrency held for less than 365 days are subject to a flat 28 percent tax rate. This is the same rate that applies to other capital gains and investment income in Portugal. Taxpayers can opt to include crypto gains in their overall income and be taxed at progressive rates instead, which may be beneficial for those in lower income brackets. The gain is calculated as the sale price minus the acquisition cost, including any transaction fees. Losses from short-term dispositions can offset short-term gains within the same year but cannot be carried forward.
      </p>

      <h2 id="long-term">Tax-Free Long-Term Holdings</h2>
      <p>
        The defining advantage of Portugal&apos;s crypto tax regime is the exemption for long-term holdings. Crypto assets held for 365 days or more are completely exempt from capital gains tax upon sale, with no limit on the gain amount. This is similar to Germany&apos;s 1-year holding period exemption. The holding period is calculated from the date of acquisition to the date of disposal. FIFO (First In, First Out) is generally used to determine which tokens are being sold. This exemption makes Portugal highly attractive for long-term crypto investors who plan their exit strategies around the 1-year holding period.
      </p>

      <h2 id="nhr">Non-Habitual Resident (NHR) Status</h2>
      <p>
        Portugal&apos;s Non-Habitual Resident program offered significant tax advantages to new residents, including a flat 20 percent rate on Portuguese-source income from qualifying activities and potential exemptions on foreign-source income. The traditional NHR program was closed to new applicants in 2024, replaced by a revised incentive focused on scientific research and innovation. Existing NHR holders retain their benefits for the 10-year duration. For crypto specifically, the domestic tax rules apply regardless of NHR status, meaning short-term gains are taxed at 28 percent and long-term gains remain exempt for all Portuguese tax residents.
      </p>

      <h2 id="reporting">Reporting Requirements</h2>
      <p>
        Crypto gains and income must be reported in the annual IRS (Imposto sobre o Rendimento das Pessoas Singulares) tax return. Short-term crypto gains are declared in Annex G for capital gains or Annex J for foreign-source gains. The tax year is the calendar year, with filing typically due between April and June. Portuguese tax authorities have been increasing their data collection capabilities and participate in international information exchange frameworks. Crypto exchanges operating in the EU are subject to reporting requirements under DAC8, which will provide Portuguese authorities with comprehensive transaction data.
      </p>

      <h2 id="planning">Tax Planning for Portugal</h2>
      <p>
        The most straightforward tax planning strategy is to hold crypto assets for more than 365 days before selling to qualify for the tax-free exemption. For active traders, the 28 percent flat rate on short-term gains is still competitive compared to countries like Japan (up to 55 percent) or India (30 percent with no loss offset). Traders can also elect to be taxed at progressive rates if their total income falls in a lower bracket. Maintaining detailed records of acquisition dates and costs is essential to prove holding periods. Portugal remains one of the best jurisdictions in Europe for crypto investors, particularly those with a long-term investment horizon.
      </p>
    </LearnPageLayout>
  );
}
