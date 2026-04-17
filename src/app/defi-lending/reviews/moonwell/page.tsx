import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";
import MethodologyBlock from '@/components/MethodologyBlock';

export const metadata: Metadata = {
  title: `Moonwell Review 2026: Base & Moonbeam Lending Protocol`,
  description:
    "Complete Moonwell review covering lending markets on Base and Moonbeam, yield rates, governance, safety features, and how it compares to alternatives.",
  alternates: { canonical: "/defi-lending/reviews/moonwell" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Defi Lending', item: 'https://degen0x.com/defi-lending' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/defi-lending/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Moonwell', },
  ],
};

export default function MoonwellReview() {
  return (
    <>
      <ReviewPage
      product={{
        name: "Moonwell",
        slug: "moonwell",
        rating: 4.2,
        description:
          "Moonwell is a decentralized lending and borrowing protocol deployed on Base, Moonbeam, and Moonriver, offering competitive yields, user-friendly interface, and strong governance through the WELL token.",
        pros: [
          "Leading lending protocol on Base with growing TVL",
          "Clean and intuitive user interface suitable for beginners",
          "Active governance through WELL token with engaged community",
          "Multi-chain presence across Base, Moonbeam, and Moonriver",
          "Competitive supply rates on Base driven by strong borrowing demand",
        ],
        cons: [
          "Moonbeam and Moonriver deployments have lower liquidity",
          "Fewer supported assets compared to Aave or Compound",
          "WELL token has experienced price volatility",
          "Less battle-tested than Ethereum-native lending protocols",
          "Some features lag behind more established competitors",
        ],
        bestFor: "Base ecosystem users seeking a reliable lending protocol with an intuitive interface",
        affiliateUrl: "#",
        category: "defi-lending",
      }}
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      overview="Moonwell has emerged as one of the most prominent lending protocols on Base, Coinbase's Layer 2 network, after initially launching on Moonbeam and Moonriver in the Polkadot ecosystem. The protocol offers a Compound-style lending and borrowing platform with a focus on user experience and community governance. Moonwell's expansion to Base has driven significant TVL growth, benefiting from the strong adoption of the Base ecosystem and Coinbase's user base. The protocol supports major assets including ETH, USDC, cbETH, and other tokens native to each deployment chain. Moonwell's clean interface and straightforward lending mechanics make it particularly accessible for users new to DeFi who are entering through the Base ecosystem."
      sections={[
        { id: "base-deployment", title: "Base Deployment & Growth", content: "Moonwell's deployment on Base has become its flagship market, attracting significant TVL as the Base ecosystem has grown rapidly. The protocol supports lending and borrowing of ETH, USDC, USDbC, cbETH, wstETH, AERO, and other Base-native assets. Competitive supply rates driven by strong borrowing demand have attracted depositors, while the low gas costs on Base make the protocol accessible for positions of all sizes. The Base deployment benefits from Coinbase's ecosystem and user base, bringing DeFi lending to a broader audience. Moonwell has become one of the go-to protocols for earning yield on Base." },
        { id: "lending-mechanics", title: "Lending & Borrowing Mechanics", content: "Moonwell follows the proven Compound V2 lending model where suppliers deposit assets to earn variable interest and borrowers put up collateral to access loans. Interest rates are determined algorithmically based on utilization ratios for each asset pool. Suppliers receive mTokens representing their deposits plus accrued interest. Borrowers can access multiple asset types against their collateral, with loan-to-value ratios set per asset based on risk profiles. The protocol implements standard DeFi lending safety features including automated liquidations, collateral factors, and reserve requirements. Moonwell also distributes WELL token rewards to incentivize participation in select markets." },
        { id: "governance", title: "Governance & WELL Token", content: "Moonwell is governed by holders of the WELL token through an on-chain governance system. Token holders can propose and vote on protocol parameters including supported assets, risk settings, reward distributions, and protocol upgrades. The governance system has been active, with regular proposals for adding new assets and adjusting parameters as markets evolve. The WELL token also serves as an incentive mechanism, with rewards distributed to suppliers and borrowers in select markets. Staking WELL tokens provides additional governance power and potential rewards, aligning long-term holders with protocol growth." },
        { id: "security", title: "Security & Safety", content: "Moonwell's smart contracts have been audited by multiple security firms including Halborn and others. The protocol implements standard safety features including oracle price validation via Chainlink feeds, automated liquidation mechanisms, supply and borrow caps, and guardian-controlled emergency pause functionality. The Compound V2 architecture on which Moonwell is built has been extensively battle-tested across the DeFi ecosystem. However, Moonwell's own smart contracts have a shorter track record than Compound itself. The protocol maintains a bug bounty program to incentivize responsible vulnerability disclosure." },
      ]}
      fees={{ "Supply APY": "Variable (2-8% on Base)", "Borrow APR": "Variable (3-12%)", "Liquidation Penalty": "5-10%", "WELL Rewards": "Additional APY on select markets", "Gas Costs": "Very low on Base (~$0.01-0.05)" }}
      security={["Multiple security audits from Halborn and others", "Built on battle-tested Compound V2 architecture", "Chainlink oracle price feeds", "Automated liquidation mechanisms", "Supply and borrow caps per asset", "Guardian-controlled emergency pause", "Active bug bounty program"]}
      features={["Lending and borrowing on Base, Moonbeam, and Moonriver", "Competitive yields driven by strong borrowing demand", "WELL governance token with staking rewards", "Clean and intuitive user interface", "Support for major ecosystem-native assets", "mToken system for composable lending positions", "Low gas costs on Base and Moonbeam"]}
      faqs={[
        { question: "Is Moonwell safe to use?", answer: "Moonwell has been audited and uses the proven Compound V2 architecture. However, it has a shorter track record than established protocols. Standard DeFi risks apply, including smart contract risk. Only deposit what you can afford to lose." },
        { question: "Which chain should I use Moonwell on?", answer: "Base is currently Moonwell's most active deployment with the highest TVL and most competitive rates. It also has very low gas fees. Moonbeam and Moonriver offer alternatives if you are already in the Polkadot ecosystem." },
        { question: "How do I earn WELL rewards?", answer: "WELL token rewards are distributed to suppliers and borrowers in select markets. Simply deposit or borrow in eligible markets and rewards accrue automatically. Check the Moonwell interface for current reward rates per market." },
      ]}
      relatedReviews={[
        { name: "Seamless", slug: "seamless" },
        { name: "Moonwell", slug: "moonwell" },
        { name: "LayerBank", slug: "layerbank" },
      ]}
      relatedGuides={[
        { title: "DeFi on Base", href: "/defi-lending/learn/defi-on-base" },
        { title: "DeFi on Polkadot", href: "/defi-lending/learn/defi-on-polkadot" },
      ]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Base Deployment & Growth", "description": "Complete Moonwell review covering lending markets on Base and Moonbeam, yield rates, governance, safety features, and how it compares to alternatives.", "url": "https://degen0x.com/defi-lending/reviews/moonwell", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
