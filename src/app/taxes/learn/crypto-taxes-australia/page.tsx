import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in Australia: ATO Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Complete guide to cryptocurrency taxes in Australia. Learn how the ATO treats crypto, CGT discount rules, personal use asset exemptions, and reporting requirements.",
  keywords: ["crypto taxes Australia", "ATO crypto tax", "cryptocurrency tax Australia", "CGT crypto Australia"],
};

export default function CryptoTaxesAustraliaPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in Australia: ATO Guide"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="11 min read"
      intro="The Australian Taxation Office (ATO) has been one of the most active regulators globally when it comes to crypto taxation. The ATO treats cryptocurrency as property and a CGT asset, meaning disposals trigger capital gains tax obligations. Australian investors benefit from a 50 percent CGT discount for assets held longer than 12 months, making long-term holding strategies particularly tax-efficient."
      toc={[
        { id: "ato-classification", title: "ato-classification", level: 2 },
        { id: "how-the-ato-classifies-crypto", title: "How the ATO Classifies Crypto", level: 2 },
        { id: "cgt-rules", title: "cgt-rules", level: 2 },
        { id: "capital-gains-tax-the-50-discount", title: "Capital Gains Tax & the 50% Discount", level: 2 },
        { id: "personal-use", title: "personal-use", level: 2 },
        { id: "personal-use-asset-exemption", title: "Personal Use Asset Exemption", level: 2 },
        { id: "income-events", title: "income-events", level: 2 },
        { id: "crypto-as-income", title: "Crypto as Income", level: 2 },
        { id: "reporting", title: "reporting", level: 2 },
        { id: "reporting-mytax-integration", title: "Reporting & myTax Integration", level: 2 },
        { id: "tools", title: "tools", level: 2 },
        { id: "ato-compatible-tax-software", title: "ATO-Compatible Tax Software", level: 2 }
      ]}
      faqs={[
        { question: "Do I get a CGT discount on crypto in Australia?", answer: "Yes. If you hold cryptocurrency for more than 12 months before disposing, you receive a 50 percent discount on the capital gain. This means only half the gain is added to your taxable income, significantly reducing your tax liability for long-term holdings." },
        { question: "Is the personal use asset exemption still available?", answer: "Yes, but it is very narrow. Crypto qualifies as a personal use asset only if acquired for less than $10,000 and used directly to purchase goods or services. Crypto held as an investment or kept on an exchange does not qualify. The ATO scrutinizes these claims carefully." },
        { question: "Does the ATO know about my crypto?", answer: "Very likely. The ATO has data-matching programs with Australian crypto exchanges and has obtained records from platforms like Binance, CoinSpot, and others. They have sent warning letters to hundreds of thousands of taxpayers about unreported crypto gains." },
        { question: "Can I use FIFO or specific identification in Australia?", answer: "The ATO does not prescribe a specific cost basis method. You can use FIFO, LIFO, or specific identification as long as you apply the method consistently and can identify which parcels were disposed. Most tax software defaults to minimizing your tax liability." },
      ]}
      relatedArticles={[
        { title: "Best Crypto Tax Software", href: "/taxes/best/software", category: "Taxes" },
        { title: "Staking Rewards Tax Guide", href: "/taxes/learn/staking-rewards-taxes", category: "Taxes" },
        { title: "Capital Gains Explained", href: "/taxes/learn/capital-gains", category: "Taxes" },
      ]}
    >
      <h2 id="ato-classification">How the ATO Classifies Crypto</h2>
      <p>
        The ATO classifies cryptocurrency as property and a CGT asset rather than as currency. This applies to all types of crypto including Bitcoin, Ethereum, stablecoins, utility tokens, governance tokens, and NFTs. Each crypto token is considered a separate CGT asset with its own cost base and holding period. The ATO has published extensive guidance and has been proactive in crypto tax enforcement, running data-matching programs with Australian exchanges since 2019. They have access to transaction data from virtually all major platforms operating in Australia.
      </p>

      <h2 id="cgt-rules">Capital Gains Tax &amp; the 50% Discount</h2>
      <p>
        When you dispose of cryptocurrency, you calculate the capital gain as the proceeds minus the cost base. The cost base includes the purchase price, exchange fees, gas fees, and other costs of acquisition. If you have held the crypto for more than 12 months, you can apply the 50 percent CGT discount, which halves the taxable gain. The discounted gain is then added to your assessable income and taxed at your marginal tax rate. Capital losses from crypto can offset capital gains from crypto or other CGT assets. Net capital losses can be carried forward indefinitely but cannot offset other income.
      </p>

      <h2 id="personal-use">Personal Use Asset Exemption</h2>
      <p>
        Crypto qualifies as a personal use asset if it was acquired for less than $10,000 AUD and used directly to purchase goods or services within a short time. Personal use asset gains are exempt from CGT. However, the ATO applies this exemption very narrowly. If you bought crypto on an exchange and held it for any period before spending, or if you bought it primarily as an investment that you occasionally spend, it does not qualify. The longer you hold crypto before using it, the less likely it qualifies as personal use. Losses on personal use assets cannot be claimed as deductions.
      </p>

      <h2 id="income-events">Crypto as Income</h2>
      <p>
        Certain crypto activities generate ordinary income rather than capital gains. Mining rewards are assessable income at fair market value when received, whether mining is a hobby or a business. Staking rewards are similarly treated as income when you gain dominion and control over them. Airdrops received for performing a service are income, while unsolicited airdrops may not be taxable at receipt but have a zero cost base. If you run a crypto trading business, your profits are assessable as business income rather than capital gains, which means no 50 percent CGT discount but the ability to claim business deductions.
      </p>

      <h2 id="reporting">Reporting &amp; myTax Integration</h2>
      <p>
        Crypto capital gains are reported in the Capital Gains section of your tax return, which can be filed through myTax or a registered tax agent. The ATO requires you to keep records of all transactions for at least 5 years, including dates, amounts in AUD, what the crypto was used for, exchange records, and wallet addresses. The ATO pre-fills some crypto data from exchange reports, but this is not comprehensive. The Australian financial year runs from July 1 to June 30, with individual returns due by October 31 if self-lodging or later if using a tax agent. Penalties for non-reporting can be severe.
      </p>

      <h2 id="tools">ATO-Compatible Tax Software</h2>
      <p>
        CryptoTaxCalculator is an Australian-founded platform that offers deep ATO integration and supports all common cost basis methods. Koinly is another popular choice among Australian users, generating ATO-ready reports and supporting imports from CoinSpot, Swyftx, Independent Reserve, and other local exchanges. Syla is a newer Australian crypto tax tool with strong DeFi support. These platforms handle the complex calculations around the CGT discount, parcel matching, and the personal use asset determination, making compliance significantly easier than manual record-keeping.
      </p>
    </LearnPageLayout>
  );
}
