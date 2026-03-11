import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Mortgages Explained (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn how crypto mortgages work, which lenders accept crypto as collateral for home purchases, and the pros and cons of using Bitcoin to buy real estate.",
};

export default function CryptoMortgagePage() {
  return (
    <LearnPageLayout
      title="Crypto Mortgages Explained"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="10 min read"
      intro="Crypto mortgages allow you to use cryptocurrency holdings as collateral or proof of assets to secure a home loan. As crypto wealth grows, a new category of lenders has emerged to serve borrowers whose net worth is primarily in digital assets. This guide covers how crypto mortgages work, available options, and important considerations."
      toc={[
        { id: "how-they-work", title: "How Crypto Mortgages Work", level: 2 },
        { id: "providers", title: "Available Providers", level: 2 },
        { id: "pros-cons", title: "Pros and Cons", level: 2 },
        { id: "alternatives", title: "Alternatives to Crypto Mortgages", level: 2 },
      ]}
      faqs={[
        { question: "Can I use Bitcoin as a down payment for a house?", answer: "Some lenders accept crypto for down payments after conversion to fiat. Others accept crypto as collateral for the mortgage itself. Milo and USDC.homes pioneered this space, though availability varies by jurisdiction and lender." },
        { question: "What are the risks of a crypto mortgage?", answer: "The main risks are collateral volatility (if crypto prices drop, you may need to add more collateral), limited lender options, potentially higher interest rates than traditional mortgages, and regulatory uncertainty in this emerging space." },
      ]}
      relatedArticles={[
        { title: "How to Borrow Against Crypto", href: "/crypto-loans/learn/how-to-borrow-against-crypto", category: "Crypto Loans" },
        { title: "Best Ethereum Loans", href: "/crypto-loans/best/ethereum-loans", category: "Crypto Loans" },
        { title: "Overcollateralization Explained", href: "/crypto-loans/learn/overcollateralization-explained", category: "Crypto Loans" },
      ]}
    >
      <h2 id="how-they-work">How Crypto Mortgages Work</h2>
      <p>Crypto mortgages come in two main forms. The first is a traditional mortgage where crypto holdings are used to verify income or assets during the underwriting process. The second is a crypto-collateralized mortgage where your digital assets directly secure the loan. In the collateralized model, you deposit crypto (usually BTC or ETH) and receive a home loan, similar to how a standard mortgage uses the property as collateral but with added crypto backing.</p>

      <h2 id="providers">Available Providers</h2>
      <p>Milo was among the first to offer crypto-backed mortgages in the US, allowing borrowers to pledge Bitcoin as collateral without selling. Ledn offers Bitcoin-backed mortgages with competitive terms. Some traditional lenders now accept crypto wealth as qualifying assets for standard mortgage applications. The space is growing but remains limited compared to traditional mortgage markets.</p>

      <h2 id="pros-cons">Pros and Cons</h2>
      <p>The main advantage is accessing home financing without selling crypto holdings, preserving your long-term position and avoiding capital gains taxes. You can also potentially qualify for larger loans than traditional income-based underwriting would allow. The downsides include higher interest rates, margin call risk if crypto prices drop, limited lender options, and less regulatory protection compared to traditional mortgages.</p>

      <h2 id="alternatives">Alternatives to Crypto Mortgages</h2>
      <p>Instead of a crypto-specific mortgage, you could take a crypto-backed loan from Nexo or Aave to fund a down payment, then get a traditional mortgage for the rest. You could also sell crypto strategically over time to build a down payment while managing tax implications. Some borrowers use a combination approach: crypto-backed loans for the down payment and traditional financing for the mortgage itself.</p>
    </LearnPageLayout>
  );
}
