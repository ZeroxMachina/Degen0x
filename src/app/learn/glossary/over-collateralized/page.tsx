import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Over-Collateralized? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what over-collateralization means in DeFi lending, why protocols require it, how it protects lenders, and its role in stablecoin design.",
};

export default function OverCollateralizedPage() {
  return (
    <LearnPageLayout title="What Is Over-Collateralized?" categoryName="Learn Crypto" categorySlug="learn" readTime="4 min read"
      intro="Over-collateralization means providing collateral worth more than the value of the loan or obligation it secures. In DeFi, most lending protocols require borrowers to deposit 110-200% of the loan value in collateral. This excess coverage protects lenders against the volatility of crypto assets and ensures protocol solvency even during rapid market downturns. Over-collateralization is the standard security model in decentralized lending."
      toc={[{ id: "definition", title: "What Is Over-Collateralization?", level: 2 }, { id: "why-overcollateralize", title: "Why Over-Collateralize?", level: 2 }, { id: "stablecoins", title: "Over-Collateralized Stablecoins", level: 2 }, { id: "tradeoffs", title: "Trade-offs and Limitations", level: 2 }]}
      faqs={[{ question: "How much over-collateralization is typical?", answer: "Most DeFi lending protocols require 125-200% collateralization. MakerDAO requires 150% for ETH-backed DAI. Aave allows 80% LTV for ETH (equivalent to 125% collateralization). More volatile assets require higher ratios. The specific requirement depends on the asset's volatility, liquidity, and the protocol's risk parameters." },
        { question: "Is over-collateralization capital efficient?", answer: "No, and this is its main drawback. To borrow $1,000, you need to lock up $1,500-2,000 in collateral. This capital is idle and cannot be used for other purposes. Various innovations like undercollateralized lending, credit scoring, and looping strategies attempt to improve capital efficiency while managing risk." }]}
      relatedArticles={[{ title: "Collateralization", href: "/learn/glossary/collateralization", category: "Glossary" }, { title: "Under-Collateralized", href: "/learn/glossary/under-collateralized", category: "Glossary" }, { title: "Liquidation", href: "/learn/glossary/liquidation", category: "Glossary" }, { title: "Borrowing", href: "/learn/glossary/borrowing", category: "Glossary" }]}
    >
      <h2 id="definition">What Is Over-Collateralization?</h2>
      <p>Over-collateralization is a risk management mechanism where the value of pledged collateral exceeds the value of the loan. If you deposit $15,000 in ETH to borrow $10,000 in USDC, your loan is 150% over-collateralized. The extra $5,000 provides a safety buffer: if ETH&apos;s price drops, the collateral still covers the loan. This buffer is what makes trustless lending possible without any knowledge of the borrower&apos;s creditworthiness.</p>

      <h2 id="why-overcollateralize">Why Over-Collateralize?</h2>
      <p>Crypto assets are volatile, often moving 10-20% in a single day. Without over-collateralization, a sharp price drop could leave loans undercollateralized, meaning the protocol could not recover the full loan value by selling the collateral. Over-collateralization provides a buffer that absorbs price swings. The liquidation mechanism activates before collateral value falls below the loan value, protecting lenders from losses.</p>

      <h2 id="stablecoins">Over-Collateralized Stablecoins</h2>
      <p>MakerDAO&apos;s DAI is the most prominent over-collateralized stablecoin. Users deposit crypto collateral (ETH, WBTC, stablecoins) at a minimum 150% ratio to mint DAI. If the collateral value drops below the threshold, the position is liquidated to maintain DAI&apos;s backing. This model is considered more decentralized and trustless than fiat-backed stablecoins like USDC, but requires more capital to maintain the peg.</p>

      <h2 id="tradeoffs">Trade-offs and Limitations</h2>
      <p>The main limitation of over-collateralization is capital inefficiency. Users must lock up significantly more value than they borrow, reducing the productivity of their capital. This creates an inherent advantage for centralized lending platforms that can use credit assessments to offer undercollateralized loans. DeFi innovations like leveraged looping, recursive borrowing, and modular lending markets attempt to improve effective capital efficiency within the over-collateralization framework.</p>
    </LearnPageLayout>
  );
}
