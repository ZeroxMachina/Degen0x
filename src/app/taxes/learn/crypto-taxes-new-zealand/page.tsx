import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in New Zealand (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Complete guide to cryptocurrency taxes in New Zealand. Learn about income tax on crypto, IRD guidelines, and when crypto gains are taxable for NZ investors.",
};

export default function CryptoTaxesNewZealandPage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in New Zealand"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="8 min read"
      intro="New Zealand does not have a specific capital gains tax, but cryptocurrency gains are often taxable under income tax rules. The Inland Revenue Department (IRD) treats crypto as property, and gains are taxable if you acquired crypto with the purpose of disposal or if you are in the business of trading crypto. The IRD has issued specific guidance on crypto taxation, making New Zealand one of the more clearly defined jurisdictions in the Asia-Pacific region."
      toc={[
        { id: "tax-treatment", title: "How Crypto Is Taxed in NZ", level: 2 },
        { id: "when-taxable", title: "When Crypto Gains Are Taxable", level: 2 },
        { id: "income-types", title: "Types of Crypto Income", level: 2 },
        { id: "gst-implications", title: "GST Implications", level: 2 },
        { id: "reporting-filing", title: "Reporting and Filing", level: 2 },
      ]}
      faqs={[
        { question: "Does New Zealand have a capital gains tax on crypto?", answer: "New Zealand does not have a general capital gains tax. However, crypto gains are taxable as income if you bought crypto with the intention of selling it at a profit, if you are in the business of trading crypto, or if you are a dealer or miner. The key factor is the purpose behind your crypto activities." },
        { question: "What tax rate applies to crypto gains in NZ?", answer: "Taxable crypto gains are added to your total income and taxed at your marginal income tax rate. NZ individual income tax rates range from 10.5% to 39%. The rate depends on your total income including crypto gains." },
        { question: "Are airdrops and forks taxable in New Zealand?", answer: "The IRD treats airdrops as income if they can be converted to money. The value at the time of receipt is the taxable amount. Hard forks that result in new coins are similarly treated as income if the new coins have a market value. Both establish a cost base for future disposal calculations." },
        { question: "Do I need to report crypto if I just held and didn't sell?", answer: "If you only held crypto and did not dispose of any during the tax year, you generally do not need to report it on your income tax return. However, you should maintain records of your holdings for when you do eventually sell, as you will need to demonstrate your cost basis." },
      ]}
      relatedArticles={[
        { title: "Crypto Taxes in Thailand", href: "/taxes/learn/crypto-taxes-thailand", category: "Taxes" },
        { title: "Crypto Taxes in South Korea", href: "/taxes/learn/crypto-taxes-south-korea", category: "Taxes" },
        { title: "Crypto Taxes in the Philippines", href: "/taxes/learn/crypto-taxes-philippines", category: "Taxes" },
      ]}
    >
      <h2 id="tax-treatment">How Crypto Is Taxed in NZ</h2>
      <p>
        New Zealand treats cryptocurrency as property under existing tax law. The IRD has published specific guidance in its cryptocurrency information releases, providing clarity on how different crypto activities are taxed. Unlike countries with explicit capital gains taxes, NZ only taxes crypto gains as income when they fall under specific provisions of the Income Tax Act 2007. The most relevant provisions are the purpose of disposal test (section CB 4), the business of dealing test (section CB 5), and provisions relating to amounts received for services. The critical question is whether your crypto activities constitute a profit-making scheme or are simply passive investment. The IRD looks at factors including your stated intention when acquiring the crypto, the pattern and frequency of transactions, and your overall trading behavior.
      </p>

      <h2 id="when-taxable">When Crypto Gains Are Taxable</h2>
      <p>
        Crypto gains are taxable when you acquired the crypto with the purpose or intention of disposing of it. This includes active traders who buy crypto specifically to sell at a profit. If you buy crypto as a long-term investment with no specific intention to sell, gains may not be taxable, but this must be supportable by your actual behavior. The business test applies if you are in the business of trading crypto, evidenced by systematic trading activity, significant volume, and intention to profit from regular trading. Miners and stakers are generally taxed on the value of crypto when received as this constitutes income from an activity. Gains from crypto held as part of a profit-making scheme or undertaking are also taxable. The IRD can challenge your characterization based on your actual trading pattern, so maintaining consistency between your stated purpose and behavior is important.
      </p>

      <h2 id="income-types">Types of Crypto Income</h2>
      <p>
        Several types of crypto income are taxable regardless of the capital gains question. Mining income is taxable at the NZD value when coins are received. If mining is a business, related expenses (electricity, equipment depreciation) are deductible. Staking rewards are income at fair market value when received. Crypto received as payment for goods or services is taxable income. DeFi yield and lending interest are income when earned or received. Airdrops with determinable market value are income when received. Salaries or wages paid in crypto are taxable employment income. For all income types, the NZD value at the time of receipt establishes both the income amount and the cost base for future disposal. Exchange fees and gas costs directly related to income-producing activities may be deductible. Losses from crypto trading activities may be deductible against other income if the activity is classified as a business.
      </p>

      <h2 id="gst-implications">GST Implications</h2>
      <p>
        New Zealand&apos;s Goods and Services Tax (GST) at 15% applies to goods and services. The treatment of crypto under GST has been clarified: buying and selling crypto is treated as a financial service and is exempt from GST. This means you do not charge or pay GST on crypto trades. However, if you use crypto to purchase goods or services, the supplier may need to charge GST on the supply. For businesses that accept crypto as payment, the GST treatment is the same as receiving NZD. The value for GST purposes is the NZD equivalent at the time of the transaction. Crypto mining conducted as a business is not subject to GST on the mining output itself, but GST applies to the purchase of mining equipment and services. The GST exemption for crypto trading simplifies compliance for active traders.
      </p>

      <h2 id="reporting-filing">Reporting and Filing</h2>
      <p>
        Taxable crypto income and gains are reported on your annual Individual Income Tax Return (IR3). The tax year in New Zealand runs from April 1 to March 31. Returns are generally due by July 7 following the end of the tax year, with extensions available through tax agents. Report crypto income in the appropriate section depending on the type: business income for traders, other income for mining or staking, or salary and wages if received as employment income. You must keep records of all transactions for at least seven years. The IRD has been increasingly sophisticated in tracking crypto activities and receives data from NZ-based exchanges. Crypto tax software options supporting NZD include Koinly, CryptoTaxCalculator (an NZ-based company), and CoinTracker. These tools can categorize transactions and generate reports suitable for IR3 filing.
      </p>
    </LearnPageLayout>
  );
}
