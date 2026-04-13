import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = {
  name: "Orca DEX",
  slug: "orca",
  rating: 3.8,
  description: "Orca is a Solana DEX known for its clean UX, concentrated liquidity Whirlpools, and fair-launch token platform. Prioritizes simplicity and capital efficiency",
  pros: [
    "Cleanest and most user-friendly interface among Solana DEXs",
    "Whirlpool concentrated liquidity pools for capital-efficient LP positions",
    "Fair-launch philosophy with transparent protocol design",
    "Strong integration with Jupiter aggregator for broad accessibility",
  ],
  cons: [
    "Limited to Solana ecosystem only",
    "Lower overall volume compared to Raydium",
    "Concentrated liquidity requires active position management",
    "Fewer new token launches deploy initial liquidity on Orca vs Raydium",
  ],
  fees: "Variable by pool (0.01%-1%)",
  bestFor: "Solana LPs and users seeking clean DeFi UX",
  affiliateUrl: "https://degen0x.com/go/orca",
  category: "exchanges",
};

export const metadata: Metadata = {
  title: "Orca DEX Review (2026) - Solanas User-Friendly DEX | ${SITE_NAME}",
  description: `Complete Orca review for ${CURRENT_YEAR}. Covers Whirlpool concentrated liquidity, swap UX, fees, liquidity provision, and comparison with Raydium.`,
  alternates: { canonical: "/exchanges/reviews/orca" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const overview =
  "Orca is a decentralized exchange on the Solana blockchain that has earned a reputation for having the most user-friendly interface in Solana DeFi. Launched in 2021, Orca takes a design-first approach to decentralized trading, making swaps and liquidity provision accessible to users who might find other DeFi protocols intimidating. The protocol's Whirlpool concentrated liquidity pools are its flagship product, enabling capital-efficient liquidity provision.\n\nOrca consistently ranks among the top DEXs on Solana by volume, with much of its volume coming through Jupiter's aggregation. The protocol has been recognized for its fair-launch approach, transparent governance, and commitment to building a sustainable DeFi protocol without excessive token emissions. The ORCA governance token powers community decision-making and fee distribution.\n\nWhile Raydium may capture more new token launches and overall volume, Orca has established itself as the preferred platform for serious liquidity providers who want concentrated liquidity tools and for users who value a clean, intuitive swapping experience. Orca's Whirlpools SDK has also been adopted by other Solana projects for their liquidity needs.";

const sections = [
  {
    id: "whirlpools",
    title: "Whirlpool Concentrated Liquidity",
    content:
      "Orca's Whirlpools are concentrated liquidity pools that allow LPs to provide liquidity within specific price ranges, similar to Uniswap V3. By concentrating capital where trading actually occurs, LPs earn more fees per dollar deployed compared to standard full-range AMM positions. Whirlpools support custom tick spacing and multiple fee tiers (0.01%, 0.05%, 0.3%, 1%), allowing LPs to optimize for different market conditions. The Whirlpool interface provides clear visualizations of price ranges, active liquidity distribution, and estimated fee earnings to help LPs make informed decisions.",
  },
  {
    id: "swap-experience",
    title: "Swap Experience & UX",
    content:
      "Orca's swap interface is widely regarded as the cleanest in Solana DeFi. The design emphasizes clarity and simplicity, displaying the expected output amount, price impact, minimum received, and routing information in an easy-to-understand format. Swaps execute quickly thanks to Solana's fast block times. Orca automatically selects the best route from its own pools, and users can also access Orca liquidity through Jupiter's aggregator. The platform supports both light and dark themes and provides clear transaction confirmation flows.",
  },
  {
    id: "lp-tools",
    title: "Liquidity Provider Tools",
    content:
      "Orca provides a comprehensive set of tools for liquidity providers. The pool creation interface allows deploying new Whirlpool positions with customizable price ranges and fee tiers. A portfolio dashboard tracks all active positions, showing earned fees, current value, and position health (whether in range or out of range). Orca's analytics page displays pool performance data, historical volume, and fee generation to help LPs identify the most profitable pools. The Whirlpools SDK is available for developers who want to integrate Orca's concentrated liquidity into their own applications.",
  },
  {
    id: "orca-token",
    title: "ORCA Token & Governance",
    content:
      "The ORCA token serves as the protocol's governance token, allowing holders to vote on protocol parameters, fee structures, and development priorities. ORCA was distributed through a fair launch without private sales, aligning with the team's philosophy of community-first development. Token holders participate in governance proposals that shape the protocol's direction. The ORCA token also plays a role in incentive programs for liquidity providers on select pools.",
  },
  {
    id: "ecosystem-position",
    title: "Position in Solana Ecosystem",
    content:
      "Orca holds a strong position in the Solana DeFi ecosystem as the second-largest DEX behind Raydium. Much of Orca's volume flows through Jupiter's aggregation, which routes to Orca pools whenever they offer the best price for a given swap. Orca's Whirlpools have become the preferred concentrated liquidity solution for many Solana projects that want to deploy efficient LP positions. The protocol's clean branding and user-friendly design have made it a common recommendation for DeFi newcomers on Solana.",
  },
];

const fees: Record<string, string> = {
  "Swap Fee": "Variable by pool (0.01%-1%)",
  "Pool Creation": "SOL network fee only",
  "LP Deposit/Withdrawal": "Network fee only",
  "Network Fee": "~$0.001-0.01 per Solana transaction",
};

const security = [
  "Fully on-chain and non-custodial on Solana",
  "Open-source smart contracts with multiple audits",
  "No KYC or account creation required",
  "Fair-launch token distribution without private sales",
  "Decentralized governance through ORCA token",
  "Whirlpools SDK independently audited",
];

const features = [
  "Whirlpool concentrated liquidity pools with custom price ranges",
  "Industry-leading user interface design for DeFi",
  "Multiple fee tiers (0.01%-1%) for different pool strategies",
  "LP portfolio dashboard with position tracking and analytics",
  "Whirlpools SDK for developer integration",
  "ORCA governance token with community voting",
  "Sub-second swap execution on Solana",
  "Integration with Jupiter aggregator for optimal routing",
];

const faqs = [
  {
    question: "How does Orca compare to Raydium?",
    answer:
      "Orca focuses on concentrated liquidity (Whirlpools) and user experience, while Raydium offers a hybrid AMM + order book model with more new token launches. Raydium has higher overall volume, but Orca's concentrated liquidity can provide better capital efficiency for LPs. Jupiter aggregates both, so end users typically get the best price automatically.",
  },
  {
    question: "What are Orca Whirlpools?",
    answer:
      "Whirlpools are Orca's concentrated liquidity pools, similar to Uniswap V3 on Ethereum. They allow liquidity providers to concentrate their capital within specific price ranges, earning more fees per dollar of capital compared to full-range AMM positions. This is more capital efficient but requires active position management.",
  },
  {
    question: "Is Orca safe to use?",
    answer:
      "Orca is a well-audited, open-source protocol on Solana. It is non-custodial, so you maintain control of your funds. Smart contract risk exists as with all DeFi protocols, but Orca has a strong track record without major exploits. Concentrated liquidity positions carry impermanent loss risk that users should understand before providing liquidity.",
  },
  {
    question: "Do I need to use Orca directly or can I use Jupiter?",
    answer:
      "For simple swaps, Jupiter aggregates Orca's liquidity along with all other Solana DEXs, so using Jupiter gives you the best price automatically. Use Orca directly when you want to provide concentrated liquidity, manage LP positions, or access Orca-specific features like pool analytics and position management tools.",
  },
];

const relatedReviews = [
  { name: "Raydium", slug: "raydium" },
  { name: "Jupiter Exchange", slug: "jupiter-exchange" },
  { name: "PancakeSwap", slug: "pancakeswap" },
];

const relatedGuides = [
  { title: "Best Decentralized Exchanges", href: "/exchanges/best/decentralized" },
  { title: "CEX vs DEX", href: "/exchanges/learn/cex-vs-dex" },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Exchanges', item: 'https://degen0x.com/exchanges' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/exchanges/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Orca', },
  ],
};

export default function OrcaReviewPage() {
  return (
    <>
      <ReviewPage
      product={product}
      categoryName="Crypto Exchanges"
      categorySlug="exchanges"
      overview={overview}
      sections={sections}
      fees={fees}
      security={security}
      features={features}
      faqs={faqs}
      relatedReviews={relatedReviews}
      relatedGuides={relatedGuides}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Whirlpool Concentrated Liquidity", "description": "Orca is a Solana DEX known for its clean UX, concentrated liquidity Whirlpools, and fair-launch token platform. Prioritizes simplicity and capital efficiency", "url": "https://degen0x.com/exchanges/reviews/orca", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    </>
  );
}
