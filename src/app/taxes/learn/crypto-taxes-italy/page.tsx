import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in Italy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Complete guide to cryptocurrency taxes in Italy. Learn about the 26% capital gains tax, the 2,000-euro threshold, and reporting obligations for Italian crypto investors.",
};

export default function CryptoTaxesItalyPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in Italy"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="8 min read"
      intro="Italy reformed its crypto tax rules significantly with the 2023 Budget Law, establishing clear guidelines for cryptocurrency taxation. Crypto gains are now taxed at a flat 26% rate above a 2,000-euro annual threshold. Italy also introduced a voluntary disclosure program allowing taxpayers to regularize previously unreported crypto holdings. Understanding the current framework is essential for Italian crypto investors to remain compliant with the Agenzia delle Entrate."
      toc={[
        { id: "tax-framework", title: "tax-framework", level: 2 },
        { id: "italian-crypto-tax-framework", title: "Italian Crypto Tax Framework", level: 2 },
        { id: "capital-gains", title: "capital-gains", level: 2 },
        { id: "26-capital-gains-tax", title: "26% Capital Gains Tax", level: 2 },
        { id: "reporting-rw", title: "reporting-rw", level: 2 },
        { id: "quadro-rw-reporting", title: "Quadro RW Reporting", level: 2 },
        { id: "stamp-duty", title: "stamp-duty", level: 2 },
        { id: "ivafe-stamp-duty", title: "IVAFE Stamp Duty", level: 2 },
        { id: "defi-staking", title: "defi-staking", level: 2 },
        { id: "defi-and-staking-rules", title: "DeFi and Staking Rules", level: 2 },
        { id: "compliance", title: "compliance", level: 2 },
        { id: "compliance-and-penalties", title: "Compliance and Penalties", level: 2 }
      ]}
      faqs={[
        { question: "What is the crypto tax rate in Italy?", answer: "Italy applies a flat 26% capital gains tax on cryptocurrency gains exceeding 2,000 euros per year. Gains below this threshold are tax-free. This rate was established by the 2023 Budget Law (Legge di Bilancio 2023) which provided the first comprehensive crypto tax framework in Italy." },
        { question: "Do I need to declare crypto holdings in Italy?", answer: "Yes. Italian tax residents must declare all crypto holdings in Quadro RW of their annual tax return, regardless of whether they are held on Italian or foreign platforms. This applies even if you did not make any trades during the year." },
        { question: "Is the 2,000-euro threshold per transaction or annual?", answer: "The 2,000-euro threshold applies to total net capital gains for the entire tax year. If your combined crypto gains across all transactions exceed 2,000 euros in a year, the full amount (not just the excess) is taxable at 26%." },
        { question: "Can I carry forward crypto losses in Italy?", answer: "Yes. Capital losses from crypto disposals can be carried forward for up to four tax years to offset future gains. You must report the losses on your tax return in the year they occur to preserve the right to carry them forward." },
      ]}
      relatedArticles={[
        { title: "Crypto Taxes in Spain", href: "/taxes/learn/crypto-taxes-spain", category: "Taxes" },
        { title: "Crypto Taxes in France", href: "/taxes/learn/crypto-taxes-france", category: "Taxes" },
        { title: "Crypto Taxes in Switzerland", href: "/taxes/learn/crypto-taxes-switzerland", category: "Taxes" },
      ]}
    >
      <h2 id="tax-framework">Italian Crypto Tax Framework</h2>
      <p>
        Prior to 2023, Italy had no specific legislation governing crypto taxation, leading to confusion and inconsistent treatment. The Agenzia delle Entrate had issued guidance treating crypto similarly to foreign currency, but this created uncertainty. The 2023 Budget Law (Law No. 197/2022) introduced explicit rules classifying crypto-assets as a distinct asset category. This legislation defines crypto-assets broadly to include cryptocurrencies, tokens, and NFTs. Taxable events include selling crypto for fiat, swapping crypto for other crypto (a change from the previous guidance where some argued crypto-to-crypto was not taxable), using crypto to purchase goods or services, and receiving income in crypto. The law also introduced a revaluation option allowing investors to rebase their crypto holdings at January 1, 2023 values by paying a 14% substitute tax.
      </p>

      <h2 id="capital-gains">26% Capital Gains Tax</h2>
      <p>
        The flat 26% tax rate applies to net capital gains exceeding the 2,000-euro annual threshold. Gains are calculated as the difference between the disposal price and the original acquisition cost. When the 2,000-euro threshold is exceeded, the entire gain is taxable, not just the amount over the threshold. The cost basis is determined using the LIFO (last-in, first-out) method, which differs from the FIFO method used in many other countries. If you cannot document your original purchase price, the cost basis is deemed to be zero, making the entire disposal amount a taxable gain. Losses from crypto disposals can offset gains in the same year, and net losses can be carried forward for four years. The tax is reported on the Modello Redditi PF using the appropriate sections for capital gains.
      </p>

      <h2 id="reporting-rw">Quadro RW Reporting</h2>
      <p>
        All Italian tax residents must report their crypto holdings in Quadro RW of the annual tax return. This applies to all crypto assets regardless of where they are held, on Italian exchanges, foreign platforms, or in personal wallets. You must report the value at the beginning and end of the tax year for each type of crypto asset. If you held crypto at any point during the year, even if you sold everything before year-end, you must still report in Quadro RW for the period of holding. The reporting requires identification of the asset type, the value in euros, and whether the asset is held in Italy or abroad. Failure to report in Quadro RW can result in penalties ranging from 3% to 15% of the unreported amount, increasing to 6% to 30% for assets held in countries without tax information exchange agreements.
      </p>

      <h2 id="stamp-duty">IVAFE Stamp Duty</h2>
      <p>
        Italy applies IVAFE (Imposta sul Valore delle Attivita Finanziarie detenute all Estero), a stamp duty of 0.2% annually on the value of crypto assets. This applies to all crypto holdings and is calculated on the market value at December 31st. IVAFE is due regardless of whether you made any gains. It is essentially a wealth tax on crypto and other financial assets. The tax is reported and paid through the annual tax return. For high-value crypto portfolios, IVAFE adds a meaningful recurring cost. Some tax practitioners have debated whether IVAFE should apply to crypto held in self-custody wallets as opposed to exchange-held assets, but the current conservative interpretation includes all holdings regardless of custody method.
      </p>

      <h2 id="defi-staking">DeFi and Staking Rules</h2>
      <p>
        The 2023 legislation provides limited specific guidance on DeFi and staking, leaving some areas open to interpretation. Staking rewards are generally treated as income at the time of receipt, valued at market price in euros. They are subject to the 26% tax rate. DeFi yield farming and lending income follow similar treatment. Swapping tokens through DEXs is a taxable disposal under the new rules that treat crypto-to-crypto trades as taxable events. Providing liquidity to pools involves exchanging your tokens for LP tokens, which constitutes a taxable swap. Airdrops are taxable income when received if they have a determinable market value. NFT transactions including minting, selling, and trading are all within the scope of the legislation and subject to the 26% capital gains rate.
      </p>

      <h2 id="compliance">Compliance and Penalties</h2>
      <p>
        The Agenzia delle Entrate has been strengthening enforcement around crypto tax compliance. The voluntary disclosure program introduced with the 2023 Budget Law allowed taxpayers to regularize previously unreported crypto holdings by paying a reduced penalty. Going forward, penalties for non-compliance include surcharges on unpaid taxes, interest on late payments, and penalties for failure to file Quadro RW. Criminal prosecution is possible for significant tax evasion. Italy participates in international tax information exchange, including the OECD Crypto-Asset Reporting Framework (CARF), which will provide the tax authority with data from foreign exchanges about Italian residents. Using Italian crypto tax software or working with a commercialista experienced in crypto taxation is strongly recommended.
      </p>
    </LearnPageLayout>
  );
}
