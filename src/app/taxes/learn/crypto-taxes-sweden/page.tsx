import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in Sweden (${CURRENT_YEAR}) | degen0x`,
  description:
    "Complete guide to cryptocurrency taxes in Sweden. Learn about the 30% capital gains tax, K4 form reporting, and Skatteverket's rules for Swedish crypto investors.",
};

export default function CryptoTaxesSwedenPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in Sweden"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="8 min read"
      intro="Sweden has one of the most well-defined crypto tax frameworks in Europe. The Swedish Tax Agency (Skatteverket) treats cryptocurrency as an asset, and capital gains are taxed at a flat 30% rate. Sweden requires detailed reporting of each crypto transaction on the K4 form, and the tax authority has been proactive in obtaining data from exchanges and issuing guidance. Swedish crypto investors face a high tax rate but benefit from clear, predictable rules."
      toc={[
        { id: "capital-gains", title: "capital-gains", level: 2 },
        { id: "30-capital-gains-tax", title: "30% Capital Gains Tax", level: 2 },
        { id: "k4-form", title: "k4-form", level: 2 },
        { id: "k4-form-reporting", title: "K4 Form Reporting", level: 2 },
        { id: "taxable-events", title: "taxable-events", level: 2 },
        { id: "taxable-events", title: "Taxable Events", level: 2 },
        { id: "loss-deductions", title: "loss-deductions", level: 2 },
        { id: "loss-deductions", title: "Loss Deductions", level: 2 },
        { id: "compliance", title: "compliance", level: 2 },
        { id: "compliance-and-enforcement", title: "Compliance and Enforcement", level: 2 }
      ]}
      faqs={[
        { question: "What is the crypto tax rate in Sweden?", answer: "Capital gains from cryptocurrency are taxed at a flat 30% in Sweden. This is the standard rate for all capital income (kapitalinkomst). Losses are deductible at 70% against other capital income, or at a reduced rate against earned income if you have no capital income to offset." },
        { question: "Is crypto-to-crypto trading taxable in Sweden?", answer: "Yes. Skatteverket treats every crypto-to-crypto swap as a disposal and acquisition. Each trade triggers a capital gains calculation. You must calculate the SEK value of the transaction at the time of the trade." },
        { question: "How do I report crypto on the K4 form?", answer: "Each crypto disposal must be reported on the K4 attachment (Bilaga K4) to your income tax return. Section D covers other assets including crypto. You report the selling price, cost basis, and gain or loss for each disposal. Skatteverket accepts the average cost method for calculating cost basis." },
        { question: "Does Skatteverket have access to exchange data?", answer: "Yes. Skatteverket has actively obtained user data from Swedish and international exchanges operating in Sweden. They have also received data through EU information exchange mechanisms. The tax authority uses this data to cross-reference with reported income and send inquiry letters to taxpayers who appear to have unreported crypto gains." },
      ]}
      relatedArticles={[
        { title: "Crypto Taxes in Norway", href: "/taxes/learn/crypto-taxes-norway", category: "Taxes" },
        { title: "Crypto Taxes in Ireland", href: "/taxes/learn/crypto-taxes-ireland", category: "Taxes" },
        { title: "Crypto Taxes in the Netherlands", href: "/taxes/learn/crypto-taxes-netherlands", category: "Taxes" },
      ]}
    >
      <h2 id="capital-gains">30% Capital Gains Tax</h2>
      <p>
        Sweden taxes cryptocurrency capital gains at a flat 30% rate as capital income (inkomst av kapital). This rate applies to all capital gains regardless of holding period or amount. There is no reduced rate for long-term holdings. The gain is calculated as the selling price minus the cost basis (omkostnadsbelopp). Skatteverket requires using the average cost method (genomsnittsmetoden) for calculating cost basis, meaning your cost basis is the average acquisition cost of all units of the same cryptocurrency held. Each time you purchase more of a cryptocurrency, the average cost is recalculated. Transaction fees for both buying and selling are added to the cost basis and deducted from the selling price respectively. The 30% rate applies after netting gains and losses from all capital income sources.
      </p>

      <h2 id="k4-form">K4 Form Reporting</h2>
      <p>
        Every disposal of cryptocurrency must be individually reported on Bilaga K4, Section D (other assets) of the Swedish income tax return. For each transaction, you report the type of asset (cryptocurrency name), the selling price in SEK, the cost basis in SEK, and the resulting gain or loss. If you have hundreds or thousands of trades, this can be extremely tedious to do manually. Crypto tax software that generates K4-compatible reports is essentially required for active traders. Skatteverket accepts electronic filings that include K4 data. The tax return is generally due on May 2 of the year following the tax year. Skatteverket pre-fills some information on tax returns, though crypto data is generally not pre-filled. You are responsible for accurate reporting of all crypto transactions.
      </p>

      <h2 id="taxable-events">Taxable Events</h2>
      <p>
        Skatteverket defines taxable crypto events broadly. Selling crypto for SEK or any fiat currency is a disposal. Swapping one cryptocurrency for another is a disposal of the first and acquisition of the second. Using crypto to pay for goods or services is a disposal at market value. Paying network fees with crypto (like ETH gas fees) constitutes a disposal of that crypto. Receiving crypto as salary is taxed as employment income, and the crypto then has a cost basis equal to the value taxed as income. Mining income is taxed differently depending on whether it is a hobby (capital income) or a business (earned income). Staking rewards are generally income at the time of receipt. Airdrops with market value are income when received. The comprehensive definition of taxable events means almost every crypto activity has tax consequences.
      </p>

      <h2 id="loss-deductions">Loss Deductions</h2>
      <p>
        Capital losses from crypto can be deducted against capital gains. However, the deduction is limited to 70% of the loss amount. If you have 100,000 SEK in crypto gains and 100,000 SEK in crypto losses, the net is not zero: you owe tax on 30,000 SEK (the 30% of the loss that is not deductible). This asymmetric treatment of gains and losses is an important consideration for Swedish crypto investors. If your total capital income is negative (losses exceed gains), 30% of the deficit reduces your tax on earned income, up to a deficit of 100,000 SEK. For deficits exceeding 100,000 SEK, only 21% of the excess reduces earned income tax. The loss limitation means it is generally more tax-efficient to avoid realizing losses and gains simultaneously if possible. Strategic timing of disposals can optimize the tax impact.
      </p>

      <h2 id="compliance">Compliance and Enforcement</h2>
      <p>
        Skatteverket has been one of Europe&apos;s most aggressive tax authorities regarding crypto compliance. The agency has obtained bulk user data from exchanges including Coinbase and has sent thousands of inquiry letters (forfragan) to taxpayers suspected of having unreported crypto income. Sweden participates in EU information exchange directives and the OECD frameworks for cross-border data sharing. The tax authority has also published extensive guidance on its website about how different crypto activities should be taxed, reducing ambiguity. Penalties for non-compliance include tax surcharges (skattetillagg) of 40% of the evaded tax. Crypto tax software supporting Swedish rules and K4 generation includes Koinly, Divly (a Swedish company), and CoinTracker. Given Skatteverket&apos;s active enforcement, compliance is strongly recommended for Swedish crypto investors.
      </p>
    </LearnPageLayout>
  );
}
