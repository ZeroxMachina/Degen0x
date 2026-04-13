import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Sonne Finance Review ${CURRENT_YEAR}: Optimism & Base Lending`,
  description: "Complete Sonne Finance review covering Compound-style lending on Optimism and Base, yield rates, SONNE token incentives, and protocol risk analysis.",
  alternates: { canonical: "/defi-lending/reviews/sonne" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Defi Lending', item: 'https://degen0x.com/defi-lending' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/defi-lending/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Sonne', },
  ],
};

export default function SonneReview() {
  return (
    <>
      <ReviewPage
      product={{ name: "Sonne Finance", slug: "sonne", rating: 3.7, description: "Sonne Finance is a Compound V2-style lending protocol on Optimism and Base offering standard lending and borrowing with SONNE token incentive rewards to boost yields.", pros: ["Established lending protocol on Optimism ecosystem", "Compound V2 architecture provides proven and familiar mechanics", "SONNE token rewards enhance base lending yields", "Expanded to Base for multi-chain presence", "Active in Optimism governance and ecosystem grants"], cons: ["Compound V2 architecture lacks newer features like eMode", "Competition from Aave V3 on Optimism is significant", "SONNE token has limited liquidity and utility", "TVL is modest compared to major protocols", "V2 architecture may feel outdated"], bestFor: "Optimism and Base users seeking straightforward lending with token incentives", affiliateUrl: "#", category: "defi-lending" }}
      categoryName="DeFi Lending" categorySlug="defi-lending"
      overview="Sonne Finance is one of the native lending protocols on Optimism, offering a Compound V2-style lending and borrowing platform with additional SONNE token incentives. The protocol has expanded to Base to broaden its reach and serves as a community-oriented alternative to Aave V3 on Optimism. While Sonne does not offer the advanced features of Aave V3 such as efficiency mode or isolation mode, it provides a straightforward lending experience with additional token rewards that can boost overall yields. The protocol has been active in the Optimism ecosystem, receiving grants and participating in governance initiatives."
      sections={[
        { id: "lending", title: "Lending & Borrowing", content: "Sonne operates standard Compound V2-style lending markets where suppliers deposit assets to earn variable interest and receive soTokens representing their position. Borrowers provide collateral and access loans at algorithmically determined rates based on pool utilization. The protocol supports major Optimism and Base assets including ETH, USDC, USDT, OP, wstETH, and others. Interest rates follow standard utilization curves with rates increasing as borrowing demand grows. The familiar Compound mechanics make Sonne accessible to anyone with DeFi lending experience, though the lack of V3 features means less capital efficiency for correlated asset strategies." },
        { id: "sonne-rewards", title: "SONNE Token & Rewards", content: "SONNE token rewards are distributed to lenders and borrowers in select markets, providing additional yield on top of base lending rates. These incentives have been a key driver of Sonne's TVL growth on Optimism. The SONNE token also serves as a governance token for protocol parameter voting. Staking options may provide additional rewards for long-term holders. However, the sustainability of token incentives depends on SONNE maintaining value, which has been challenged by broader market conditions and competition from protocols with stronger value capture mechanisms." },
        { id: "multi-chain", title: "Optimism & Base Deployments", content: "Sonne operates on both Optimism and Base, providing lending access across two major L2 ecosystems. The Optimism deployment is more established with higher TVL and more supported assets, while the Base deployment is newer and growing. Both chains offer very low gas costs, making Sonne practical for position sizes of all ranges. The expansion to Base demonstrates the protocol's growth ambitions, though managing liquidity across two chains can fragment depth. Users should compare TVL and rates on each chain before depositing." },
        { id: "security", title: "Security & Risk", content: "Sonne uses the extensively audited Compound V2 codebase, providing a solid security foundation. The protocol's specific contracts have been reviewed, and standard safety features including liquidation mechanics, oracle validation, and collateral factor management are in place. The Compound V2 architecture has been deployed hundreds of times across DeFi, making its security profile well-understood. However, Sonne's smaller TVL relative to major protocols means less economic incentive for liquidators and potentially less robust liquidation during extreme market events." },
      ]}
      fees={{ "Supply APY": "Variable (2-6%) + SONNE rewards", "Borrow APR": "Variable (3-10%)", "Liquidation Penalty": "5-10%", "Protocol Fee": "Portion of interest", "Gas Costs": "Very low on Optimism and Base" }}
      security={["Compound V2 audited codebase", "Protocol-specific contract reviews", "Oracle price validation", "Automated liquidation engine", "Standard collateral and risk parameters", "Dual-chain deployment"]}
      features={["Compound V2-style lending and borrowing", "SONNE token incentive rewards", "Deployed on Optimism and Base", "soToken receipt tokens for composability", "Support for major L2 assets", "Very low gas costs", "Governance participation through SONNE"]}
      faqs={[
        { question: "Is Sonne Finance better than Aave on Optimism?", answer: "Aave V3 on Optimism generally offers deeper liquidity and more features. Sonne may offer higher total yields when including SONNE incentive rewards, but this depends on SONNE token value. Compare total yields on both platforms." },
        { question: "Can I use Sonne on Ethereum mainnet?", answer: "No, Sonne is deployed on Optimism and Base only. For Ethereum mainnet lending, consider Aave, Compound, or other mainnet-native protocols." },
        { question: "Are SONNE rewards sustainable?", answer: "SONNE rewards depend on the token maintaining value. Like most emission-based incentives, they may decrease over time. Evaluate base lending yields independent of SONNE rewards to assess long-term sustainability." },
      ]}
      relatedReviews={[{ name: "Exactly", slug: "exactly" }, { name: "Lodestar", slug: "lodestar" }, { name: "Granary", slug: "granary" }]}
      relatedGuides={[{ title: "DeFi on Optimism", href: "/defi-lending/learn/defi-on-optimism" }, { title: "Real Yield vs Emissions", href: "/defi-lending/learn/real-yield-vs-emissions" }]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Lending & Borrowing", "description": "Complete Sonne Finance review covering Compound-style lending on Optimism and Base, yield rates, SONNE token incentives, and protocol risk analysis.", "url": "https://degen0x.com/defi-lending/reviews/sonne", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    </>
  );
}
