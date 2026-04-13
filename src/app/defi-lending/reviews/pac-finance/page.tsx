import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Pac Finance Review ${CURRENT_YEAR}: Blast L2 Lending & Points`,
  description: "In-depth Pac Finance review covering lending on Blast, points farming, yield strategies, and risk analysis for this Blast-native lending protocol.",
  alternates: { canonical: "/defi-lending/reviews/pac-finance" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Defi Lending', item: 'https://degen0x.com/defi-lending' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/defi-lending/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Pac Finance', },
  ],
};

export default function PacFinanceReview() {
  return (
    <>
      <ReviewPage
      product={{ name: "Pac Finance", slug: "pac-finance", rating: 3.5, description: "Pac Finance is a lending protocol on Blast L2 offering lending and borrowing markets with integration into Blast's native yield and points ecosystem for enhanced return opportunities.", pros: ["Blast native yield integration boosts deposit returns", "Participation in Blast ecosystem points programs", "Low gas costs on Blast L2", "Standard lending mechanics familiar to DeFi users", "Growing presence in Blast DeFi ecosystem"], cons: ["Had a controversial parameter change that triggered unexpected liquidations", "Completely dependent on Blast ecosystem success", "Small TVL and limited track record", "Points value is speculative and uncertain", "Blast network still proving long-term viability"], bestFor: "Blast ecosystem users seeking lending with native yield and points integration", affiliateUrl: "#", category: "defi-lending" }}
      categoryName="DeFi Lending" categorySlug="defi-lending"
      overview="Pac Finance is a lending protocol operating on Blast L2 that offers standard lending and borrowing markets enhanced by Blast's native yield features. The protocol gained attention during the Blast ecosystem's growth period, attracting depositors seeking to maximize their Blast points and yield exposure. However, Pac Finance also became known for a controversial incident where a collateral parameter change triggered unexpected liquidations for users, raising concerns about governance and parameter management practices. Despite this controversy, the protocol continues to operate within the Blast ecosystem, serving users who seek lending markets with Blast-specific yield advantages."
      sections={[
        { id: "lending", title: "Lending & Borrowing", content: "Pac Finance offers pool-based lending markets for Blast-native assets including ETH, USDB, and other tokens. The lending mechanics follow standard DeFi patterns: suppliers deposit assets to earn interest, and borrowers provide collateral to access loans. Interest rates adjust algorithmically based on utilization. The protocol integrates with Blast's native yield, meaning deposits earn both the network-level ETH staking yield and lending interest from borrowers. This dual-yield structure provides competitive returns compared to lending on chains without native yield features." },
        { id: "controversy", title: "Liquidation Controversy", content: "Pac Finance gained notoriety for an incident where the team changed collateral factor parameters without adequate notice to users, triggering a wave of unexpected liquidations. Users who had positions calibrated to the previous risk parameters found themselves suddenly undercollateralized and faced significant losses. This event raised serious concerns about the protocol's governance practices and the lack of timelock mechanisms on parameter changes. The incident served as a cautionary example for the broader DeFi community about the importance of transparent governance and gradual parameter adjustments with adequate user notification." },
        { id: "points", title: "Points & Incentives", content: "Pac Finance participates in the Blast ecosystem's points and incentive programs, distributing points to users for lending and borrowing activity. These points are expected to have value in future Blast token distributions, creating speculative incentives for participation. The points farming aspect has been a key driver of TVL, though it also means much of the liquidity is motivated by short-term speculation rather than organic lending demand. Users should evaluate whether the base yield justifies their positions independently of points speculation." },
        { id: "risks", title: "Risk Assessment", content: "Beyond standard DeFi risks, Pac Finance carries additional concerns from its liquidation controversy. The incident demonstrated that protocol parameters can change suddenly and without user consent, creating unpredictable risk. The protocol's dependence on Blast adds network-level risk, and the relatively small TVL means limited liquidator infrastructure. Users should monitor parameter changes closely, maintain conservative collateral ratios well above minimum requirements, and treat any capital deployed to Pac Finance as higher-risk. The lack of robust governance and timelock mechanisms is a meaningful risk factor." },
      ]}
      fees={{ "Supply APY": "Blast native yield + variable lending interest", "Borrow APR": "Variable (4-18%)", "Liquidation Penalty": "5-15%", "Gas Costs": "Low on Blast L2" }}
      security={["Standard lending safety features", "Oracle price validation", "Automated liquidation engine", "Blast native yield integration", "Note: parameter changes have historically lacked timelocks"]}
      features={["Lending and borrowing on Blast L2", "Blast native yield integration", "Points and ecosystem incentive participation", "Support for Blast-native assets", "Low gas costs on Blast L2", "Standard DeFi lending mechanics"]}
      faqs={[
        { question: "Is Pac Finance safe after the liquidation incident?", answer: "The incident revealed governance weaknesses including lack of timelocks on parameter changes. While the protocol continues to operate, users should maintain very conservative collateral ratios and monitor for parameter changes closely." },
        { question: "What caused the unexpected liquidations?", answer: "The team changed collateral factor parameters without adequate notice, suddenly reducing the allowed loan-to-value ratios. Users whose positions were sized based on previous parameters found themselves below liquidation thresholds and were liquidated." },
        { question: "Should I use Pac Finance or another Blast lending protocol?", answer: "Compare Pac Finance with alternatives like Orbit and Juice Finance on Blast. Consider each protocol's track record, governance practices, TVL, and rates. The liquidation incident is a meaningful risk factor specific to Pac Finance." },
      ]}
      relatedReviews={[{ name: "Orbit", slug: "orbit" }, { name: "Juice Finance", slug: "juice-finance" }, { name: "ZeroLend", slug: "zerolend" }]}
      relatedGuides={[{ title: "Points Farming in DeFi", href: "/defi-lending/learn/points-farming-defi" }, { title: "DeFi Risks Guide", href: "/defi-lending/learn/defi-risks-guide" }]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}
