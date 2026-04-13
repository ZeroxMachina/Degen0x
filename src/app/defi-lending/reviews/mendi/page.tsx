import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Mendi Finance Review 2026: Linea Lending Protocol`,
  description: "Detailed Mendi Finance review covering Compound-style lending on Linea, yield rates, MENDI token rewards, and the protocol's role in the Linea ecosystem.",
  alternates: { canonical: "/defi-lending/reviews/mendi" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Defi Lending', item: 'https://degen0x.com/defi-lending' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/defi-lending/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Mendi', },
  ],
};

export default function MendiReview() {
  return (
    <>
      <ReviewPage
      product={{ name: "Mendi Finance", slug: "mendi", rating: 3.7, description: "Mendi Finance is the leading Compound-style lending protocol on Linea (ConsenSys L2), offering lending and borrowing markets with MENDI token incentives for the growing Linea ecosystem.", pros: ["Leading lending protocol on Linea network", "Built on proven Compound V2 architecture", "MENDI token rewards boost effective yields", "Low gas costs on Linea L2", "Ecosystem support from ConsenSys/Linea foundation"], cons: ["Linea ecosystem is still developing and maturing", "Compound V2 lacks modern features like eMode", "TVL is modest compared to multi-chain protocols", "MENDI token liquidity is limited", "Competing against potential Aave deployment on Linea"], bestFor: "DeFi users seeking lending opportunities on Linea with early-mover incentives", affiliateUrl: "#", category: "defi-lending" }}
      categoryName="DeFi Lending" categorySlug="defi-lending"
      overview="Mendi Finance has established itself as the primary lending protocol on Linea, ConsenSys's zkEVM Layer 2 network. Using Compound V2 architecture, Mendi offers familiar lending and borrowing mechanics for Linea-native and bridged assets. The protocol benefits from Linea's ecosystem development programs and ConsenSys's broader support for DeFi infrastructure. MENDI token rewards incentivize early adoption and provide additional yield on top of base lending rates. As Linea continues to grow its DeFi ecosystem, Mendi's first-mover advantage positions it as a key infrastructure provider, though it faces the risk of larger protocols eventually deploying on the network."
      sections={[
        { id: "linea-lending", title: "Lending on Linea", content: "Mendi provides the primary lending markets on Linea, supporting ETH, USDC, USDT, wBTC, and other tokens bridged to the network. The Compound V2 architecture offers tried-and-true lending mechanics including variable interest rates, supply and borrow operations, and collateral management. Linea's low gas costs make lending operations practical for positions of all sizes, removing the gas cost barrier that limits participation on Ethereum mainnet. As the first major lending protocol on Linea, Mendi captures organic borrowing demand from the ecosystem's DeFi activity." },
        { id: "mendi-rewards", title: "MENDI Token & Rewards", content: "MENDI token rewards are distributed to lenders and borrowers in select markets, boosting effective yields above base lending rates. The token also serves as a governance mechanism for protocol parameter decisions. MENDI rewards have been instrumental in attracting early TVL to the protocol and to the Linea ecosystem more broadly. The sustainability of these incentives depends on MENDI token value and the protocol's transition from incentivized to organic demand as the Linea ecosystem matures. Users should evaluate base yields independent of MENDI rewards for long-term sustainability assessment." },
        { id: "ecosystem", title: "Linea Ecosystem Position", content: "Mendi benefits from its early deployment on Linea and support from the Linea Foundation's ecosystem development programs. ConsenSys's backing of Linea provides institutional credibility, and the network's zkEVM technology offers Ethereum compatibility with lower costs. Mendi's position as the primary lending protocol means it captures most of the lending demand on the network. However, this position could be challenged if Aave, Compound, or other major protocols deploy on Linea, potentially drawing liquidity away from Mendi. The protocol's community and incentive programs aim to build loyalty that persists even as competition arrives." },
        { id: "security", title: "Security & Risks", content: "Mendi uses the well-audited Compound V2 codebase with protocol-specific customizations that have been reviewed. Standard safety features including oracle validation, automated liquidations, and collateral management are in place. The primary risks include the Linea ecosystem's early stage of development, limited liquidator infrastructure due to lower TVL, and the general risks of building on a newer L2 network. The Compound V2 architecture is proven but lacks newer safety features found in V3-based protocols like isolation mode and supply caps, which could limit risk management capabilities." },
      ]}
      fees={{ "Supply APY": "Variable (2-8%) + MENDI rewards", "Borrow APR": "Variable (3-12%)", "Liquidation Penalty": "5-10%", "MENDI Incentives": "Variable additional APY", "Gas Costs": "Very low on Linea" }}
      security={["Compound V2 audited codebase", "Protocol-specific customization reviews", "Oracle price validation", "Automated liquidation engine", "ConsenSys ecosystem backing", "Standard lending safety parameters"]}
      features={["Compound V2 lending on Linea", "MENDI token incentive rewards", "Support for major bridged and native assets", "Very low gas costs on Linea L2", "First-mover lending protocol on Linea", "Governance through MENDI token", "Ecosystem grant participation"]}
      faqs={[
        { question: "Is Linea safe for DeFi?", answer: "Linea is a zkEVM L2 backed by ConsenSys, providing institutional credibility. However, it is newer than established L2s and has less real-world stress testing. The zkEVM technology is still maturing across the industry." },
        { question: "What happens if Aave deploys on Linea?", answer: "Aave deployment on Linea could draw liquidity from Mendi. However, Mendi's community, MENDI rewards, and established user base provide some defensibility. Multiple lending protocols can coexist on a single chain." },
        { question: "Are MENDI rewards sustainable?", answer: "Like most emission-based incentives, MENDI rewards are designed to bootstrap early adoption. Long-term sustainability depends on the protocol generating enough organic demand to justify its existence beyond token incentives." },
      ]}
      relatedReviews={[{ name: "Lendle", slug: "lendle" }, { name: "ZeroLend", slug: "zerolend" }, { name: "LayerBank", slug: "layerbank" }]}
      relatedGuides={[{ title: "Multi-Chain Yield Farming", href: "/defi-lending/learn/multi-chain-yield-farming" }, { title: "Real Yield vs Emissions", href: "/defi-lending/learn/real-yield-vs-emissions" }]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Lending on Linea", "description": "Detailed Mendi Finance review covering Compound-style lending on Linea, yield rates, MENDI token rewards, and the protocol's role in the Linea ecosystem.", "url": "https://degen0x.com/defi-lending/reviews/mendi", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    </>
  );
}
