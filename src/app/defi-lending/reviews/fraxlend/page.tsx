import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { Product } from "@/lib/types";
import { CURRENT_YEAR } from "@/lib/constants";

const product: Product = {
  name: "Fraxlend",
  slug: "fraxlend",
  rating: 4.0,
  description: "Fraxlend is the lending component of the Frax ecosystem, offering isolated pair lending markets with dynamic interest rates and deep integration with FRAX",
  pros: ["Deep Frax ecosystem integration", "Isolated pair lending reduces systemic risk", "Dynamic interest rate curves", "frxETH/sfrxETH collateral support", "No governance needed for new markets"],
  cons: ["Heavily tied to Frax ecosystem health", "Primarily FRAX-denominated markets", "Smaller TVL than major protocols", "Complex Frax ecosystem to understand", "Limited non-Frax asset markets"],
  fees: "Variable (per pair market)",
  bestFor: "Frax ecosystem participants",
  affiliateUrl: "#",
  category: "defi-lending",
};

export const metadata: Metadata = {
  title: `Fraxlend Review (2026) | degen0x`,
  description: "In-depth Fraxlend review covering isolated pair lending, Frax ecosystem integration, dynamic interest rates, frxETH collateral, and yield opportunities.",
  alternates: { canonical: "/defi-lending/reviews/fraxlend" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Defi Lending', item: 'https://degen0x.com/defi-lending' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/defi-lending/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Fraxlend', },
  ],
};

export default function FraxlendReview() {
  return (
    <>
      <ReviewPage
      product={product}
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      overview="Fraxlend is the lending arm of the Frax Finance ecosystem, providing isolated pair lending markets primarily denominated in FRAX stablecoin. Each Fraxlend pair is an independent market between two assets with its own interest rate curve, collateral ratio, and liquidation parameters. The protocol is deeply integrated with Frax's broader product suite including frxETH liquid staking, sFRAX savings product, and FPI inflation-pegged stablecoin. This integration creates synergies where Fraxlend serves as the lending infrastructure connecting various Frax ecosystem products while maintaining risk isolation between individual markets."
      sections={[
        { id: "pair-lending", title: "Isolated Pair Lending", content: "Fraxlend operates on a pair-based model where each lending market consists of exactly two assets: an asset to lend (usually FRAX) and an asset to use as collateral. Each pair operates independently with its own parameters, meaning a problem in one market cannot affect others. This architecture allows Fraxlend to support a wider range of collateral types than pooled protocols, since the risk is isolated. Pairs can be created permissionlessly using the Fraxlend pair deployer, though governance can also create specially configured pairs with custom parameters." },
        { id: "rate-curves", title: "Dynamic Interest Rate Curves", content: "Fraxlend uses innovative time-weighted variable interest rate curves that adjust based on utilization. When utilization is high, rates increase to incentivize repayment and new lending. When utilization is low, rates decrease to attract borrowers. The rate curves are more responsive than traditional DeFi lending models, helping to maintain healthy utilization levels. Each pair can have a custom rate curve optimized for its specific asset dynamics. This granular control over interest rates helps prevent situations where rates become either too expensive for borrowers or too low for lenders." },
        { id: "frax-integration", title: "Frax Ecosystem Integration", content: "Fraxlend is tightly integrated with the broader Frax ecosystem. frxETH and sfrxETH can be used as collateral to borrow FRAX, creating a loop where ETH stakers can leverage their staking position. sFRAX holders earn yield that partially comes from Fraxlend lending revenue. The AMO (Algorithmic Market Operations) controller can deploy FRAX into Fraxlend to manage interest rates and FRAX liquidity. This integration means Fraxlend both supports and benefits from the Frax ecosystem's products, creating a flywheel effect as the ecosystem grows." },
        { id: "liquidations", title: "Liquidation Mechanism", content: "Fraxlend uses a Dutch auction liquidation mechanism for undercollateralized positions. When a position falls below the required collateral ratio, a Dutch auction begins where the discount starts small and increases over time until a liquidator steps in. This mechanism is designed to minimize the impact on borrowers by giving them the best possible liquidation price while still ensuring positions are resolved quickly. The gradual discount increase encourages competitive liquidation without the MEV extraction and cascading liquidation issues seen in some other protocols." },
        { id: "fxs-governance", title: "FXS Governance", content: "Fraxlend is governed through the FXS token, which also governs the broader Frax ecosystem. veFXS holders (FXS locked for governance) can vote on Fraxlend parameters, new pair deployments, and integration decisions. The shared governance means Fraxlend decisions are made in the context of the broader ecosystem strategy. This can be an advantage for alignment but also means Fraxlend governance is influenced by participants whose primary interest may be other Frax products rather than lending specifically." },
      ]}
      fees={{ "Supply Rate": "Variable per pair", "Borrow Rate": "Variable per pair (dynamic curves)", "Protocol Fee": "Portion of interest to Frax treasury", "Liquidation Discount": "Variable (Dutch auction)", "Gas Costs": "Standard Ethereum gas fees" }}
      security={["Isolated pair architecture limits contagion", "Multiple audits of core contracts", "AMO controller oversight for FRAX markets", "Dutch auction liquidations prevent cascading", "Timelock on governance changes", "Bug bounty program through Immunefi"]}
      features={["Isolated pair lending markets", "Dynamic time-weighted interest rate curves", "frxETH/sfrxETH collateral integration", "Permissionless pair creation", "Dutch auction liquidation mechanism", "Deep Frax ecosystem integration with sFRAX and FPI"]}
      faqs={[
        { question: "Do I need FRAX to use Fraxlend?", answer: "Most Fraxlend markets are denominated in FRAX, so you would typically lend FRAX or borrow FRAX against collateral. However, non-FRAX pairs may exist. The protocol works best as part of the broader Frax ecosystem." },
        { question: "How does Fraxlend differ from Aave?", answer: "Fraxlend uses isolated pair lending (each market has exactly two assets) versus Aave's pooled model. Fraxlend has dynamic rate curves and deep Frax ecosystem integration, while Aave offers more assets and broader chain support. Fraxlend is more specialized while Aave is more general-purpose." },
        { question: "What happens if Frax loses its peg?", answer: "Since Fraxlend markets are primarily FRAX-denominated, a FRAX depeg would affect the value of lender deposits and could trigger liquidations. However, the isolated market structure would contain the impact to individual pairs rather than causing protocol-wide issues." },
      ]}
      relatedReviews={[{ name: "Spark Protocol", slug: "/defi-lending/reviews/spark" }, { name: "Aave", slug: "/defi-lending/reviews/aave" }]}
      relatedGuides={[{ title: "What is DeFi Lending", href: "/defi-lending/learn/what-is-defi-lending" }, { title: "APY vs APR", href: "/defi-lending/learn/apy-vs-apr" }]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Isolated Pair Lending", "description": "Fraxlend is the lending component of the Frax ecosystem, offering isolated pair lending markets with dynamic interest rates and deep integration with FRAX", "url": "https://degen0x.com/defi-lending/reviews/fraxlend", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    </>
  );
}
