import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Compound vs Aave Loans (${CURRENT_YEAR}) | degen0x`,
  description: "Compare Compound and Aave for crypto borrowing. Analyze rates, supported assets, governance, and which DeFi lending protocol is better for your needs.",
};

export default function CompoundVsAaveLoansPage() {
  return (
    <LearnPageLayout
      title="Compound vs Aave Loans"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="10 min read"
      intro="Compound and Aave are the two largest DeFi lending protocols, collectively securing billions in TVL. Both enable permissionless borrowing against crypto collateral, but they differ in features, chain support, rate models, and governance approaches. This comparison helps you decide which protocol best fits your borrowing needs."
      toc={[
        { id: "overview", title: "overview", level: 2 },
        { id: "protocol-overview", title: "Protocol Overview", level: 2 },
        { id: "rates", title: "rates", level: 2 },
        { id: "interest-rate-comparison", title: "Interest Rate Comparison", level: 2 },
        { id: "features", title: "features", level: 2 },
        { id: "feature-differences", title: "Feature Differences", level: 2 },
        { id: "verdict", title: "verdict", level: 2 },
        { id: "which-should-you-choose", title: "Which Should You Choose", level: 2 }
      ]}
      faqs={[
        { question: "Is Aave or Compound safer?", answer: "Both have strong security track records. Aave has more total audits and a larger safety module. Compound has a simpler codebase which some argue reduces attack surface. Both have operated for years without major exploits on their core contracts." },
        { question: "Can I use both Aave and Compound?", answer: "Yes. Many users borrow from whichever protocol offers the better rate at any given time. Since both are permissionless, you can maintain positions on both and shift between them based on conditions." },
      ]}
      relatedArticles={[
        { title: "Aave Loans Review", href: "/crypto-loans/reviews/aave-loans", category: "Crypto Loans" },
        { title: "Compound Loans Review", href: "/crypto-loans/reviews/compound-loans", category: "Crypto Loans" },
        { title: "Best DeFi Loans", href: "/crypto-loans/best/defi", category: "Crypto Loans" },
      ]}
    >
      <h2 id="overview">Protocol Overview</h2>
      <p>Aave launched in 2020 as an evolution of ETHLend and has grown into a multi-chain protocol deployed on Ethereum, Arbitrum, Optimism, Polygon, Avalanche, and more. Compound, launched in 2018, pioneered the pooled lending model and recently upgraded to Compound III with a streamlined, single-asset borrowing design. Aave offers more features and chains; Compound offers simplicity and efficiency.</p>

      <h2 id="rates">Interest Rate Comparison</h2>
      <p>Both protocols use algorithmic interest rate models that adjust based on pool utilization. Rates are broadly similar for major assets, though they can diverge during high-demand periods. Aave offers both stable and variable rate options (though stable rates are being phased out in V3). Compound III focuses on variable rates only. In practice, rate differences are usually small, so other factors often matter more than rate alone.</p>

      <h2 id="features">Feature Differences</h2>
      <p>Aave offers flash loans, multi-chain deployment, efficiency mode for correlated assets, and isolation mode for new assets. Compound III simplifies the model to single-borrow-asset markets (primarily USDC), which reduces complexity and gas costs. Aave supports more collateral types and has a built-in governance token safety module. Compound has lower gas costs on its V3 markets and a cleaner interface.</p>

      <h2 id="verdict">Which Should You Choose</h2>
      <p>Choose Aave if you want maximum flexibility, multi-chain access, more collateral options, or need to borrow non-stablecoin assets. Choose Compound III if you primarily want to borrow USDC with low gas costs and prefer a simpler interface. For large positions, compare rates at the time of borrowing since the cheaper option changes frequently. Many advanced users maintain positions on both.</p>
    </LearnPageLayout>
  );
}
