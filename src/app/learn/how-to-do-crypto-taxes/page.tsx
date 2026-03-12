import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Do Crypto Taxes (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Guide to cryptocurrency tax reporting including taxable events, calculation methods, DeFi tax implications, record keeping, and tax preparation tools.",
  keywords: ["crypto taxes", "cryptocurrency tax", "crypto tax guide", "Bitcoin tax", "DeFi taxes", "crypto tax reporting"],
};

export default function HowToDoCryptoTaxesPage() {
  return (
    <LearnPageLayout title="How to Do Crypto Taxes" categoryName="Crypto Education" categorySlug="learn" readTime="8 min" intro="Cryptocurrency transactions are taxable events in most jurisdictions, and failure to report them can result in penalties. With DeFi activity, multiple chains, and various transaction types, crypto tax reporting can be complex. This guide breaks down what you need to know about crypto taxation and how to prepare your returns."
      toc={[
        { id: "taxable-events", title: "taxable-events", level: 2 },
        { id: "taxable-events", title: "Taxable Events", level: 2 },
        { id: "calculation", title: "calculation", level: 2 },
        { id: "calculating-gains", title: "Calculating Gains", level: 2 },
        { id: "defi-taxes", title: "defi-taxes", level: 2 },
        { id: "defi-tax-implications", title: "DeFi Tax Implications", level: 2 },
        { id: "record-keeping", title: "record-keeping", level: 2 },
        { id: "record-keeping", title: "Record Keeping", level: 2 },
        { id: "tools", title: "tools", level: 2 },
        { id: "tax-preparation-tools", title: "Tax Preparation Tools", level: 2 }
      ]}
      faqs={[
        { question: "Is holding crypto taxable?", answer: "Simply holding cryptocurrency is not a taxable event in most jurisdictions. Tax obligations arise when you dispose of crypto (sell, trade, spend) or receive it as income (mining, staking, airdrops). However, some jurisdictions have wealth taxes that may apply to crypto holdings." },
        { question: "Are crypto-to-crypto trades taxable?", answer: "Yes, in most jurisdictions including the US, trading one cryptocurrency for another is a taxable event. The gain or loss is calculated based on the difference between your cost basis in the disposed crypto and its fair market value at the time of the trade." },
        { question: "What if I do not have complete records?", answer: "Incomplete records make tax preparation difficult but do not exempt you from tax obligations. Tax software can often reconstruct transaction history from exchange exports and on-chain data. A crypto-specialized tax accountant can help navigate gaps in records. Going forward, maintain detailed records from the start." },
      ]}
      relatedArticles={[
        { title: "How to Track Portfolio", href: "/learn/how-to-track-portfolio", category: "Learn" },
        { title: "Crypto Regulation Overview", href: "/learn/crypto-regulation-2026", category: "Learn" },
        { title: "AML/KYC in Crypto", href: "/learn/aml-kyc-crypto-guide", category: "Learn" },
        { title: "How to Dollar Cost Average", href: "/learn/how-to-dollar-cost-average", category: "Learn" },
      ]}
    >
      <section id="taxable-events"><h2>Taxable Events</h2><p>Common taxable events include: selling crypto for fiat currency, trading one crypto for another, spending crypto on goods or services, receiving crypto as income (mining, staking rewards, airdrops, salary), and receiving interest or yield from DeFi protocols. Each of these triggers a tax obligation that must be reported in the tax year it occurs.</p><p>Non-taxable events in most jurisdictions include: buying crypto with fiat, transferring between your own wallets (though this can be difficult to prove), and donating crypto to qualified charities (which may provide a tax deduction). The specific treatment varies by jurisdiction — always verify the rules for your country and consult a tax professional for complex situations.</p></section>
      <section id="calculation"><h2>Calculating Gains</h2><p>Capital gains are calculated as the difference between your proceeds (sale price) and your cost basis (acquisition price plus fees). If you bought Bitcoin at $30,000 and sold at $50,000, your gain is $20,000. Short-term gains (held less than one year in the US) are taxed at ordinary income rates, while long-term gains receive preferential tax rates in many jurisdictions.</p><p>Cost basis methods matter: FIFO (First In, First Out) assumes the oldest purchased units are sold first. LIFO (Last In, First Out) sells the newest first. Specific Identification lets you choose which units to sell. Different methods produce different tax outcomes. Choose the method permitted in your jurisdiction that optimizes your tax situation, and apply it consistently.</p></section>
      <section id="defi-taxes"><h2>DeFi Tax Implications</h2><p>DeFi creates complex tax situations. Token swaps on DEXs are taxable trades. Providing liquidity involves depositing tokens (which may or may not be a taxable event depending on interpretation) and receiving LP tokens. Claiming rewards is taxable income. Impermanent loss may or may not be deductible depending on jurisdiction. Each DeFi interaction creates a potential tax event that needs to be tracked and reported.</p><p>Staking rewards, lending interest, and farming yields are generally treated as income, taxable at the fair market value when received. Bridge transactions between chains are typically not taxable (they are transfers of the same asset) but may complicate record keeping. Wrapping and unwrapping tokens (ETH to WETH) is treated differently across jurisdictions. The tax treatment of many DeFi activities is still evolving and may not have definitive guidance.</p></section>
      <section id="record-keeping"><h2>Record Keeping</h2><p>Maintain records of: every acquisition (date, amount, cost basis including fees), every disposal (date, amount, proceeds, counterparty), exchange deposit and withdrawal addresses (to distinguish between own-wallet transfers and third-party transactions), and DeFi interaction details (protocol, action type, tokens involved, values). Export transaction history from exchanges regularly and save blockchain transaction receipts.</p><p>Start keeping records from day one of your crypto activity. Retroactive record reconstruction is possible but time-consuming and may involve assumptions. Keep records for at least the minimum retention period required by your jurisdiction (typically 3-7 years). Organized records not only simplify tax preparation but also provide essential documentation if you are ever audited.</p></section>
      <section id="tools"><h2>Tax Preparation Tools</h2><p>Crypto tax software (Koinly, CoinTracker, TokenTax, CryptoTaxCalculator) imports transaction data from exchanges and on-chain activity, classifies transactions, calculates gains and losses, and generates tax forms. Most support API connections to major exchanges and wallet address scanning for on-chain transactions. Pricing ranges from free for basic use to several hundred dollars for advanced features and DeFi support.</p><p>For complex situations involving multiple chains, heavy DeFi activity, or international considerations, a tax professional specializing in cryptocurrency can provide valuable guidance. Many CPAs and tax attorneys now offer crypto-specific services. The cost of professional help often pays for itself through proper tax optimization and avoiding costly errors. At minimum, have a professional review your first crypto tax return to ensure accuracy.</p></section>
    </LearnPageLayout>
  );
}
