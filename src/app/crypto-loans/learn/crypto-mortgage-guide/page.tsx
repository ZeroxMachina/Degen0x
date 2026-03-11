import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Mortgage Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn about crypto-backed mortgages. Understand how to use Bitcoin and crypto assets to qualify for or secure a home mortgage.",
  keywords: ["crypto mortgage", "bitcoin mortgage", "crypto backed mortgage", "crypto home loan"],
};

export default function CryptoMortgageGuidePage() {
  return (
    <LearnPageLayout
      title="Crypto Mortgage Guide"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="9 min"
      intro="Crypto mortgages allow homebuyers to leverage their cryptocurrency holdings to purchase real estate. Whether using crypto as proof of assets for traditional mortgage qualification, taking a crypto-backed loan for a down payment, or using specialized crypto mortgage providers, there are multiple paths to homeownership for crypto holders. This guide explores the available options and their practical considerations."
      toc={[
        { id: "options-overview", title: "Crypto Mortgage Options", level: 2 },
        { id: "crypto-as-assets", title: "Using Crypto as Proof of Assets", level: 2 },
        { id: "crypto-backed-down-payment", title: "Crypto-Backed Down Payments", level: 2 },
        { id: "specialized-providers", title: "Specialized Providers", level: 2 },
        { id: "tax-implications", title: "Tax Implications", level: 2 },
      ]}
      faqs={[
        { question: "Can I use Bitcoin to buy a house?", answer: "Not directly in most cases, but you can use Bitcoin as collateral for a loan to make a down payment, or convert Bitcoin to fiat for the purchase. Some specialized lenders consider crypto holdings in mortgage qualification. The tax implications of selling crypto for a home purchase should be carefully considered." },
        { question: "Will banks accept crypto as proof of income?", answer: "Most traditional banks do not accept crypto trading profits as qualifying income for mortgages. However, some lenders will consider crypto assets as reserves. Specialized crypto-friendly lenders are more accommodating. Documentation requirements are typically more extensive for crypto-based income." },
      ]}
      relatedArticles={[
        { title: "How Crypto Loans Work", href: "/crypto-loans/learn/how-crypto-loans-work", category: "Crypto Loans" },
        { title: "Crypto Loans vs Selling", href: "/crypto-loans/learn/crypto-loans-vs-selling", category: "Crypto Loans" },
      ]}
    >
      <section id="options-overview">
        <h2>Crypto Mortgage Options</h2>
        <p>There are several approaches to using cryptocurrency in the home buying process. The simplest is selling crypto to generate a down payment, though this triggers capital gains taxes. A more tax-efficient approach is taking a crypto-backed loan for the down payment, maintaining your crypto exposure while accessing fiat. Some traditional lenders now accept crypto assets as reserves when qualifying for a mortgage, improving your chances of approval. Specialized crypto mortgage providers offer mortgages specifically designed for crypto holders, with underwriting criteria adapted for crypto wealth. Each approach has different tax implications, risk profiles, and practical requirements that homebuyers should carefully evaluate based on their specific financial situation.</p>
      </section>
      <section id="crypto-as-assets">
        <h2>Using Crypto as Proof of Assets</h2>
        <p>Some mortgage lenders will consider cryptocurrency holdings as asset reserves when evaluating your mortgage application. This does not mean using crypto as collateral for the mortgage itself, but rather demonstrating that you have sufficient financial resources. Requirements typically include holding the crypto for at least 60-90 days to show stability, providing exchange statements and wallet documentation, and the lender applying a haircut to the crypto value to account for volatility. Not all lenders accept this, and those that do may discount the value significantly. Working with a mortgage broker experienced in crypto assets can help identify lenders with favorable crypto asset policies and navigate the documentation requirements.</p>
      </section>
      <section id="crypto-backed-down-payment">
        <h2>Crypto-Backed Down Payments</h2>
        <p>Taking a crypto-backed loan to fund a down payment allows you to keep your crypto holdings while purchasing property. You deposit crypto as collateral on a lending platform, borrow fiat or stablecoins, convert to your local currency, and use it for the down payment. The advantage is avoiding the capital gains tax event from selling crypto and maintaining your price exposure. The risk is that you now have two obligations: the crypto loan and the mortgage. If crypto prices drop significantly, you face margin calls on the crypto loan simultaneously with your mortgage payments. This strategy works best for borrowers with conservative LTV ratios on the crypto loan and stable income to cover both payment obligations.</p>
      </section>
      <section id="specialized-providers">
        <h2>Specialized Providers</h2>
        <p>A small but growing number of mortgage providers specialize in serving crypto-wealthy borrowers. Companies like Milo and Figure offer mortgage products that incorporate crypto assets into underwriting. These providers understand crypto income patterns, can evaluate exchange and DeFi protocol statements, and offer mortgage terms adapted for crypto holders. Some offer Bitcoin-collateralized mortgages where your BTC serves as direct collateral for the home loan. These products are still relatively new and may have higher interest rates or more restrictive terms than traditional mortgages. Geographic availability varies, and regulatory requirements differ by jurisdiction. As the crypto industry matures and more mortgage providers develop crypto expertise, options and terms are expected to improve.</p>
      </section>
      <section id="tax-implications">
        <h2>Tax Implications</h2>
        <p>The tax implications of using crypto for home purchase vary significantly by approach. Selling crypto to fund a purchase triggers capital gains taxes on any appreciation, potentially consuming a significant portion of your proceeds. Taking a crypto-backed loan is not a taxable event in most jurisdictions, making it more tax-efficient if you have large unrealized gains. However, if your collateral is liquidated, that liquidation is typically a taxable event. Interest on crypto loans used for home purchase may or may not be deductible depending on your jurisdiction and specific circumstances. Consult a tax professional experienced with both real estate and cryptocurrency before proceeding, as the interaction between crypto taxation and mortgage-related tax benefits creates complexity that requires professional guidance.</p>
      </section>
    </LearnPageLayout>
  );
}
