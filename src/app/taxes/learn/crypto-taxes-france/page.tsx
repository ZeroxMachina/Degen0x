import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Taxes in France (${CURRENT_YEAR}) | degen0x`,
  description:
    "Complete guide to cryptocurrency taxes in France. Learn about the flat tax regime, reporting requirements, and how to calculate your crypto tax obligations.",
};

export default function CryptoTaxesFrancePage() {
  return (
    <LearnPageLayout
      title="Crypto Taxes in France"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="9 min read"
      intro="France applies a flat tax regime to cryptocurrency gains, making it one of the more straightforward European countries for crypto taxation. Since 2019, occasional crypto traders benefit from the 30% flat tax (PFU - Prelevement Forfaitaire Unique), while professional traders face income tax rates. Understanding whether you qualify as an occasional or professional trader is critical for determining your tax obligations. This guide covers everything French crypto investors need to know about declaring and paying crypto taxes."
      toc={[
        { id: "tax-framework", title: "tax-framework", level: 2 },
        { id: "french-crypto-tax-framework", title: "French Crypto Tax Framework", level: 2 },
        { id: "flat-tax", title: "flat-tax", level: 2 },
        { id: "the-30-flat-tax-pfu", title: "The 30% Flat Tax (PFU)", level: 2 },
        { id: "calculating-gains", title: "calculating-gains", level: 2 },
        { id: "calculating-crypto-gains", title: "Calculating Crypto Gains", level: 2 },
        { id: "reporting-requirements", title: "reporting-requirements", level: 2 },
        { id: "reporting-requirements", title: "Reporting Requirements", level: 2 },
        { id: "defi-nft-taxes", title: "defi-nft-taxes", level: 2 },
        { id: "defi-and-nft-taxation", title: "DeFi and NFT Taxation", level: 2 },
        { id: "tax-optimization", title: "tax-optimization", level: 2 },
        { id: "tax-optimization-strategies", title: "Tax Optimization Strategies", level: 2 }
      ]}
      faqs={[
        { question: "What is the crypto tax rate in France?", answer: "Occasional crypto traders in France pay a flat tax of 30% (PFU) on net capital gains. This includes 12.8% income tax and 17.2% social contributions. Professional traders are taxed under BIC (industrial and commercial profits) at progressive income tax rates up to 45%." },
        { question: "Do I need to report crypto holdings on foreign exchanges?", answer: "Yes. French tax residents must declare all crypto accounts held on platforms based outside of France using form 3916-bis. Failure to declare foreign crypto accounts can result in fines of 750 euros per undeclared account, or 1,500 euros for accounts on platforms in non-cooperative jurisdictions." },
        { question: "Is crypto-to-crypto trading taxable in France?", answer: "No. In France, crypto-to-crypto swaps are not taxable events. Tax is only triggered when you convert cryptocurrency to fiat currency (euros, dollars, etc.) or use crypto to purchase goods or services." },
        { question: "When do I need to file my crypto taxes in France?", answer: "Crypto gains must be reported on your annual income tax declaration, typically due in May or June. You must use form 2086 for capital gains calculations and form 3916-bis for foreign account declarations." },
      ]}
      relatedArticles={[
        { title: "Crypto Taxes in Spain", href: "/taxes/learn/crypto-taxes-spain", category: "Taxes" },
        { title: "Crypto Taxes in Italy", href: "/taxes/learn/crypto-taxes-italy", category: "Taxes" },
        { title: "Crypto Taxes in the Netherlands", href: "/taxes/learn/crypto-taxes-netherlands", category: "Taxes" },
      ]}
    >
      <h2 id="tax-framework">French Crypto Tax Framework</h2>
      <p>
        France classifies cryptocurrency as movable property (biens meubles) under Article 150 VH bis of the French Tax Code, established by the 2019 Finance Law. This classification determines how gains are calculated and taxed. The key distinction in French crypto tax law is between occasional traders, who benefit from the flat tax, and professional traders, who are taxed under the BIC regime. The tax authorities (Direction Generale des Finances Publiques) determine your status based on factors including frequency of trades, total volume, tools used, and whether trading constitutes your primary income source. Most individual investors are classified as occasional traders.
      </p>

      <h2 id="flat-tax">The 30% Flat Tax (PFU)</h2>
      <p>
        The Prelevement Forfaitaire Unique (PFU) applies a flat 30% rate to crypto capital gains for occasional traders. This 30% breaks down into 12.8% income tax and 17.2% social contributions (CSG/CRDS). You may opt instead for the progressive income tax scale (bareme progressif) if it results in a lower rate, which benefits those in lower tax brackets. Under the progressive scale, gains are taxed at your marginal rate (0%, 11%, 30%, 41%, or 45%) plus the 17.2% social contributions. The flat tax applies only to net annual gains: if your total crypto disposals in a year result in a net loss, no tax is owed, but losses cannot be carried forward to offset gains in future years.
      </p>

      <h2 id="calculating-gains">Calculating Crypto Gains</h2>
      <p>
        France uses a unique formula to calculate taxable gains on each disposal. The gain is calculated as: selling price minus (total acquisition cost of entire portfolio multiplied by selling price divided by total portfolio value before the sale). This proportional method means each sale disposes of a fraction of your entire portfolio rather than specific lots. This is fundamentally different from FIFO or specific identification methods used in other countries. You must track the total acquisition cost of your entire crypto portfolio and its total market value at the time of each disposal. Crypto-to-crypto trades do not trigger tax, but you must still track them to maintain accurate portfolio cost basis calculations.
      </p>

      <h2 id="reporting-requirements">Reporting Requirements</h2>
      <p>
        French crypto investors must complete several forms during their annual tax declaration. Form 2086 is used to report capital gains and losses from crypto disposals, showing each taxable transaction and the gain calculation. Form 2042-C must include your total net crypto gains on line 3AN (gains) or 3BN (losses). Form 3916-bis requires declaration of all crypto accounts held on platforms domiciled outside France. This applies to accounts on exchanges like Binance, Coinbase, and Kraken if they are not registered as French entities. The penalties for failing to declare foreign crypto accounts are significant, ranging from 750 to 1,500 euros per undeclared account per year, with potential increases for accounts with values exceeding 50,000 euros.
      </p>

      <h2 id="defi-nft-taxes">DeFi and NFT Taxation</h2>
      <p>
        DeFi activities in France create complex tax situations. Staking rewards and yield farming income are generally considered taxable when converted to fiat, though the exact treatment depends on whether you are classified as occasional or professional. Liquidity provision may trigger the disposal rules if tokens are swapped. NFT sales are taxed similarly to other crypto disposals under the flat tax for occasional sellers. However, NFT creators may be taxed under the BNC (non-commercial profits) regime as this constitutes a professional creative activity. Airdrops are typically taxable at the time of receipt if they can be assigned a market value. The French tax administration continues to refine guidance on these newer crypto activities.
      </p>

      <h2 id="tax-optimization">Tax Optimization Strategies</h2>
      <p>
        Several strategies can help minimize your French crypto tax burden legally. Since crypto-to-crypto swaps are not taxable, you can rebalance your portfolio between cryptocurrencies without triggering tax. Time your conversions to fiat strategically, particularly if your annual gains might fall under a lower progressive tax bracket. Consider whether the flat tax or progressive scale is more advantageous for your situation, as the choice applies to all capital income for the year. Converting to stablecoins pegged to fiat is a gray area. Using a crypto tax software that supports the French proportional calculation method is essential for accurate reporting, as manual calculations across many transactions are error-prone. Popular options that support France include Waltio, CoinTracker, and Koinly.
      </p>
    </LearnPageLayout>
  );
}
