import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Sturdy Finance Review 2026: Isolated Lending Vaults`,
  description: "Complete Sturdy Finance review covering isolated lending pairs, yield aggregation, vault strategies, and the protocol's V2 redesign after its exploit.",
  alternates: { canonical: "/defi-lending/reviews/sturdy" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Defi Lending', item: 'https://degen0x.com/defi-lending' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/defi-lending/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Sturdy', },
  ],
};

export default function SturdyReview() {
  return (
    <>
      <ReviewPage
      product={{ name: "Sturdy Finance", slug: "sturdy", rating: 3.6, description: "Sturdy Finance is a DeFi lending protocol that pivoted to isolated lending pairs and yield vault strategies after a V1 exploit, offering an aggregation layer that connects lenders with the highest-yield borrowing demand.", pros: ["Isolated lending pairs provide granular risk management", "Yield aggregation optimizes lender returns across vaults", "V2 redesign incorporates lessons from V1 exploit", "Supports diverse collateral types including LP tokens", "Innovative approach to matching lending supply with yield demand"], cons: ["V1 exploit history may deter risk-averse users", "Lower TVL compared to major lending protocols", "Complex vault system has steeper learning curve", "Some vaults have limited liquidity", "Governance token has limited trading volume"], bestFor: "DeFi users seeking isolated lending pairs with exotic collateral support", affiliateUrl: "#", category: "defi-lending" }}
      categoryName="DeFi Lending" categorySlug="defi-lending"
      overview="Sturdy Finance has undergone a significant transformation after suffering an exploit in its V1 iteration. The protocol's V2 redesign introduces isolated lending pairs and yield vault aggregation, a fundamentally different architecture from its original design. Sturdy V2 creates individual lending markets where lenders supply assets and borrowers put up specific collateral types, with each pair isolated from others. The aggregation layer connects lenders to the best-yielding vaults automatically, optimizing returns while maintaining risk isolation. This approach allows Sturdy to support exotic collateral types like LP tokens and yield-bearing assets that would be too risky for shared-pool protocols. The protocol operates primarily on Ethereum mainnet and represents an innovative approach to DeFi lending architecture."
      sections={[
        { id: "isolated-pairs", title: "Isolated Lending Pairs", content: "Sturdy V2's core architecture creates individual lending markets for specific collateral-debt pairs. Each pair operates independently, meaning a failure in one market does not affect others. This isolation enables Sturdy to support riskier collateral types like LP tokens, yield-bearing vault shares, and other DeFi positions that shared-pool protocols cannot safely accept. Each pair has its own interest rate curve, liquidation parameters, and oracle configuration tailored to the specific collateral type. This granular risk management is more conservative than shared-pool approaches but allows for broader collateral diversity." },
        { id: "yield-aggregation", title: "Yield Aggregation Layer", content: "Sturdy's aggregation layer sits on top of the isolated lending pairs, automatically routing lender deposits to the highest-yielding vaults. This creates a better experience for lenders who can deposit stablecoins or other assets and have them automatically allocated to the most productive lending pairs. The aggregation considers both the base lending rate and any incentive rewards when determining optimal allocation. This system aims to deliver consistently competitive yields while the isolation layer beneath protects against concentrated risk." },
        { id: "v2-redesign", title: "V2 Redesign & Recovery", content: "Sturdy V1 suffered a reentrancy exploit that resulted in approximately $800K in losses. The team responded by completely redesigning the protocol architecture for V2, moving from a shared-pool model to the current isolated pair design. The V2 redesign specifically addresses the vulnerability patterns that enabled the V1 exploit and introduces additional safety measures. The protocol's willingness to rebuild rather than patch demonstrates commitment, though the exploit history remains a factor in user trust and risk assessment." },
        { id: "security", title: "Security & Risk Factors", content: "Sturdy V2 has been audited by security firms with the isolated pair architecture specifically reviewed. The design inherently limits blast radius from any single market failure. Standard safety features including oracle validation, liquidation mechanisms, and configurable risk parameters are implemented. However, users should consider the V1 exploit history when evaluating risk. The complex vault and aggregation architecture introduces additional code surface area compared to simpler lending protocols. Supporting exotic collateral types also means relying on accurate pricing for assets that may have less liquid markets." },
      ]}
      fees={{ "Supply APY": "Variable (3-12% through aggregation)", "Borrow APR": "Variable per pair (5-20%)", "Performance Fee": "Portion of yield spread", "Liquidation Penalty": "5-15% depending on pair", "Gas Costs": "Ethereum mainnet rates" }}
      security={["V2 architecture security audits completed", "Isolated pair design limits risk propagation", "Oracle validation per collateral type", "Automated liquidation per pair", "Configurable risk parameters", "Lessons incorporated from V1 exploit"]}
      features={["Isolated lending pairs for granular risk management", "Yield aggregation layer for optimized returns", "Support for exotic collateral including LP tokens", "V2 architecture redesigned after exploit", "Automated lender allocation to highest yields", "Configurable per-pair risk parameters", "Diverse collateral type support"]}
      faqs={[
        { question: "Is Sturdy V2 safe after the V1 exploit?", answer: "Sturdy V2 uses a completely different architecture designed to address V1's vulnerabilities. The isolated pair design and security audits provide improved safety. However, the exploit history warrants extra caution; only deposit what you can afford to lose." },
        { question: "How does Sturdy's aggregation work?", answer: "The aggregation layer automatically allocates your deposits to the highest-yielding lending pairs. You deposit once and the system optimizes across available vaults, considering both base rates and incentives." },
        { question: "What makes Sturdy different from Aave?", answer: "Sturdy uses isolated pairs instead of shared pools, supports exotic collateral types like LP tokens, and includes a yield aggregation layer. It is higher risk but potentially higher reward for specific use cases." },
      ]}
      relatedReviews={[{ name: "Exactly", slug: "exactly" }, { name: "Sonne", slug: "sonne" }, { name: "Granary", slug: "granary" }]}
      relatedGuides={[{ title: "DeFi on Ethereum", href: "/defi-lending/learn/defi-on-ethereum" }, { title: "Yield Optimizer Guide", href: "/defi-lending/learn/yield-optimizer-guide" }]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Isolated Lending Pairs", "description": "Complete Sturdy Finance review covering isolated lending pairs, yield aggregation, vault strategies, and the protocol's V2 redesign after its exploit.", "url": "https://degen0x.com/defi-lending/reviews/sturdy", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    </>
  );
}
