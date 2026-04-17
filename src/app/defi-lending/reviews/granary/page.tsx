import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";
import MethodologyBlock from '@/components/MethodologyBlock';

export const metadata: Metadata = {
  title: `Granary Finance Review 2026: Multi-Chain Aave Fork`,
  description: "Detailed Granary Finance review covering multi-chain lending, Aave V2 architecture, yield rates, and risk analysis across supported networks.",
  alternates: { canonical: "/defi-lending/reviews/granary" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Defi Lending', item: 'https://degen0x.com/defi-lending' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/defi-lending/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Granary', },
  ],
};

export default function GranaryReview() {
  return (
    <>
      <ReviewPage
      product={{ name: "Granary Finance", slug: "granary", rating: 3.5, description: "Granary Finance is a multi-chain lending protocol built on Aave V2 architecture, deployed across Ethereum, Optimism, Arbitrum, and other networks, offering lending and borrowing with protocol-specific incentives.", pros: ["Multi-chain deployment across major networks", "Built on proven Aave V2 lending architecture", "Familiar interface for Aave users", "GRAIN token incentives add yield on top of base rates", "Supports assets on multiple ecosystems"], cons: ["Using older Aave V2 rather than V3 architecture", "Competing directly with Aave's own multi-chain deployments", "Lower TVL and liquidity than Aave itself", "GRAIN token has experienced significant price decline", "Limited differentiation from the protocol it forked"], bestFor: "Multi-chain DeFi users seeking Aave-style lending with additional token incentives", affiliateUrl: "#", category: "defi-lending" }}
      categoryName="DeFi Lending" categorySlug="defi-lending"
      overview="Granary Finance is an Aave V2 fork deployed across multiple networks including Ethereum, Optimism, Arbitrum, Base, and Fantom. The protocol offers standard lending and borrowing mechanics inherited from Aave V2 with additional GRAIN token incentives. While Granary provides a functional lending platform, it faces the fundamental challenge of competing with Aave's own multi-chain deployments which offer deeper liquidity and the more advanced V3 architecture. Granary has carved a niche by deploying on chains where Aave was slower to arrive and by offering GRAIN rewards that temporarily boost yields above Aave's base rates. However, the sustainability of this approach depends on the GRAIN token maintaining value and the protocol finding lasting differentiation."
      sections={[
        { id: "aave-v2-fork", title: "Aave V2 Architecture", content: "Granary inherits Aave V2's pool-based lending model, where suppliers deposit assets to earn variable interest and borrowers access loans against collateral. The Aave V2 architecture is well-understood and has been extensively battle-tested across DeFi. Granary maintains the same lending mechanics including variable interest rates, liquidation systems, and collateral factor configurations. However, using V2 rather than V3 means Granary lacks newer features like efficiency mode, isolation mode, and supply caps that Aave V3 introduced. This architectural gap becomes more significant as the DeFi ecosystem increasingly adopts V3-based innovations." },
        { id: "multi-chain", title: "Multi-Chain Presence", content: "Granary operates on Ethereum, Optimism, Arbitrum, Base, Fantom, and Avalanche, providing lending markets across multiple ecosystems. Each deployment supports the major assets native to that chain. The multi-chain strategy aimed to capture users on chains where Aave had not yet deployed, but Aave V3 has since expanded to most of these networks. Granary's advantage on these chains has diminished as users increasingly prefer the deeper liquidity of Aave's official deployments. The Fantom deployment has seen reduced activity alongside the broader decline of the Fantom ecosystem." },
        { id: "grain-token", title: "GRAIN Token & Incentives", content: "Granary distributes GRAIN tokens to lenders and borrowers as additional incentives on top of base lending yields. These incentives initially attracted significant TVL by offering yields that exceeded Aave's base rates. However, the GRAIN token has experienced substantial price decline from its peak, reducing the effective additional yield from incentives. The sustainability of token-based incentives depends on the protocol generating sufficient value to support GRAIN's price, which has been challenging given the competition from Aave's own deployments." },
        { id: "risks", title: "Risk Assessment", content: "Granary's primary risk is its competitive position relative to Aave. With Aave V3 deployed on most of the same chains with deeper liquidity and more features, Granary's value proposition has weakened. Lower TVL means less liquidator activity and potentially slower liquidations during market stress. The GRAIN token's declining value reduces the incentive for users to choose Granary over Aave. Standard DeFi risks including smart contract vulnerabilities and oracle failures also apply. The Aave V2 codebase is well-audited, which mitigates some technical risk, but the protocol's smaller scale introduces operational risks." },
      ]}
      fees={{ "Supply APY": "Variable (1-5%) + GRAIN rewards", "Borrow APR": "Variable (3-12%)", "Liquidation Penalty": "5-15%", "Protocol Fee": "Portion of interest spread", "Gas Costs": "Varies by chain" }}
      security={["Built on audited Aave V2 codebase", "Oracle price feeds for position valuation", "Automated liquidation mechanisms", "Standard DeFi safety parameters", "Multi-chain deployment", "Governance-controlled risk settings"]}
      features={["Aave V2-based lending and borrowing", "Multi-chain deployment across 6+ networks", "GRAIN token incentive rewards", "Familiar interface for Aave users", "Support for major assets per chain", "Variable interest rate models", "Standard liquidation and collateral management"]}
      faqs={[
        { question: "Why would I use Granary instead of Aave?", answer: "Granary's main appeal was GRAIN token incentives that boosted yields above Aave rates. As GRAIN's value has declined, this advantage has weakened. Users should compare current total yields including incentives before choosing." },
        { question: "Is Granary Finance safe?", answer: "Granary uses the well-audited Aave V2 codebase, which provides a solid security foundation. However, lower TVL and liquidity compared to Aave itself may create issues during market stress." },
        { question: "Is Granary still actively developed?", answer: "Development activity has slowed compared to the protocol's launch period. Users should check recent governance proposals and updates to assess the current level of active development." },
      ]}
      relatedReviews={[{ name: "Lodestar", slug: "lodestar" }, { name: "Sonne", slug: "sonne" }, { name: "Sturdy", slug: "sturdy" }]}
      relatedGuides={[{ title: "Real Yield vs Emissions", href: "/defi-lending/learn/real-yield-vs-emissions" }, { title: "Multi-Chain Yield Farming", href: "/defi-lending/learn/multi-chain-yield-farming" }]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Aave V2 Architecture", "description": "Detailed Granary Finance review covering multi-chain lending, Aave V2 architecture, yield rates, and risk analysis across supported networks.", "url": "https://degen0x.com/defi-lending/reviews/granary", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/defi-lending/reviews/aave" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Aave</a>
  <a href="/defi-lending/reviews/alpaca-finance" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Alpaca Finance</a>
  <a href="/defi-lending/reviews/aurelius" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Aurelius</a>
  <a href="/defi-lending/reviews/bastion" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Bastion</a>
  <a href="/defi-lending/reviews/benqi" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Benqi</a>
  <a href="/defi-lending/reviews/centrifuge" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Centrifuge</a>
  <a href="/defi-lending/reviews/clearpool" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Clearpool</a>
  <a href="/defi-lending/reviews/compound" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Compound</a>
</nav>
      <MethodologyBlock variant="review" />
      </>
  );
}
