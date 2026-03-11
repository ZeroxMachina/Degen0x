import { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { Product } from "@/lib/types";
import { CURRENT_YEAR } from "@/lib/constants";

const product: Product = {
  name: "InsurAce",
  slug: "insurace",
  rating: 3.8,
  description: "InsurAce is a multi-chain DeFi insurance protocol offering coverage across 10+ networks with portfolio bundling discounts and no KYC requirement, making it the most accessible decentralized insurance option.",
  pros: ["Multi-chain coverage across 10+ networks", "Portfolio bundling for discounted premiums", "No KYC required", "Competitive pricing", "Simple and intuitive interface"],
  cons: ["Smaller capital pool than Nexus Mutual", "Fewer covered protocols overall", "Less proven claim history", "Lower liquidity in some cover pools", "INSUR token has limited utility"],
  fees: "1.5-5% annually",
  bestFor: "Multi-chain DeFi users seeking bundled coverage",
  affiliateUrl: "#",
  category: "insurance",
};

export const metadata: Metadata = {
  title: `InsurAce Review (${CURRENT_YEAR}) | CryptoDegen`,
  description: "In-depth InsurAce review covering multi-chain coverage, portfolio bundling, claim process, pricing model, and comparison with other DeFi insurance protocols.",
};

export default function InsurAceReviewPage() {
  return (
    <ReviewPage
      product={product}
      categoryName="Insurance"
      categorySlug="insurance"
      overview="InsurAce has established itself as the leading multi-chain DeFi insurance protocol since launching in 2021. The platform supports coverage across Ethereum, BSC, Polygon, Avalanche, Arbitrum, Optimism, and other networks. Its innovative portfolio cover product bundles multiple protocol covers at a discount, making comprehensive protection more affordable. Without KYC requirements, InsurAce provides permissionless access to DeFi insurance. The protocol has processed claims from several major incidents including the Terra/Luna collapse, demonstrating real-world reliability. While its capital pool is smaller than Nexus Mutual, InsurAce fills a critical niche for multi-chain DeFi users."
      sections={[
        { id: "multi-chain", title: "Multi-Chain Coverage", content: "InsurAce stands out with coverage across 10+ blockchain networks. This is particularly valuable for DeFi users with positions spread across chains. Rather than needing separate providers for each chain, InsurAce provides a single interface for all coverage. The protocol supports DeFi protocols native to each chain, so you can insure Aave on Ethereum and PancakeSwap on BSC from the same dashboard. Coverage availability and pricing vary by chain based on capital allocation and assessed risk." },
        { id: "portfolio-cover", title: "Portfolio Cover", content: "InsurAce's portfolio cover is its most innovative feature. Instead of purchasing individual covers, you bundle multiple protocol covers into a single policy at a 10-20% discount. The discount comes from diversification benefits: the probability of all covered protocols being exploited simultaneously is lower than individual risks combined. The portfolio pricing engine calculates correlation risk between protocols and passes savings to cover buyers. This makes comprehensive DeFi coverage significantly more affordable for diversified users." },
        { id: "claim-process", title: "Claim Assessment", content: "InsurAce uses an advisory board and community voting mechanism for claims. When an incident occurs, the advisory board evaluates whether it qualifies as a covered event, then community members confirm. InsurAce has processed claims from several major incidents including Terra/Luna and various DeFi exploits. The process typically takes 7-14 days from incident to payout, which is reliable though slightly slower than some competitors." },
        { id: "pricing", title: "Pricing Model", content: "InsurAce uses an actuarial pricing model considering protocol audit history, TVL, code complexity, and historical incidents. Premiums range from 1.5% to 5% annually. Major protocols like Aave and Compound have lower premiums, while newer protocols command higher rates. Pricing is transparent and displayed upfront with no hidden fees or dynamic adjustments during the cover period." },
        { id: "mining", title: "Mining & Staking", content: "InsurAce offers earning opportunities for capital providers through underwriting mining (staking capital to back policies) and investment mining (deploying idle capital in low-risk DeFi strategies). INSUR stakers earn governance rights and boosted rewards. The dual-earning model makes capital provision attractive, though stakers bear the risk of claims reducing the pool." },
      ]}
      fees={{ "Cover Premium": "1.5-5% annually", "Portfolio Discount": "10-20% off bundled covers", "Claim Fee": "No fee to submit", "Staking": "No fee; earn premium share + INSUR", "Withdrawal": "Standard gas fees" }}
      security={["Smart contracts audited by multiple firms", "Advisory board oversight for claims", "Segregated cover pools", "Investment limited to low-risk protocols", "Bug bounty program", "Transparent capital reporting"]}
      features={["Coverage across 10+ blockchain networks", "Portfolio bundling with discount pricing", "No KYC requirement", "Underwriting and investment mining", "Actuarial pricing model", "Cover for DeFi, CeFi, and stablecoins"]}
      faqs={[
        { question: "Do I need INSUR tokens to buy cover?", answer: "No. You can purchase cover using stablecoins or native tokens on each chain. INSUR tokens are only needed for governance voting and boosted mining rewards." },
        { question: "How does portfolio bundling save money?", answer: "Portfolio bundling calculates the joint probability of multiple protocols all being exploited simultaneously. Since this is lower than individual risks combined, InsurAce passes the savings as a 10-20% premium discount." },
        { question: "How does InsurAce compare to Nexus Mutual?", answer: "InsurAce offers multi-chain coverage without KYC and generally lower premiums, but has a smaller capital pool and less proven claim history. Nexus Mutual covers more protocols and has a stronger track record but requires KYC." },
      ]}
      relatedReviews={[{ name: "Nexus Mutual", slug: "/insurance/reviews/nexus-mutual" }, { name: "Unslashed Finance", slug: "/insurance/reviews/unslashed" }]}
      relatedGuides={[{ title: "Complete Crypto Insurance Guide", href: "/insurance/learn/crypto-insurance-guide" }, { title: "Insurance Protocols Compared", href: "/insurance/learn/insurance-protocols-compared" }]}
    />
  );
}
