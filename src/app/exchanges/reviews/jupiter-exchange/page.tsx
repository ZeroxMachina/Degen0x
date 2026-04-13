import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = {
  name: "Jupiter Exchange",
  slug: "jupiter-exchange",
  rating: 4.2,
  description:
    "Jupiter is Solana's leading DEX aggregator, routing swaps across all Solana liquidity sources for the best prices. Also offers limit orders, DCA, and perpetual futures.",
  pros: [
    "Best swap execution on Solana by aggregating all liquidity sources",
    "Limit orders, DCA, and perpetual futures in one platform",
    "Zero platform fees on basic swaps (only DEX and network fees)",
    "Most comprehensive Solana token support including new launches",
  ],
  cons: [
    "Limited to Solana ecosystem only",
    "Perpetual futures still maturing compared to dedicated platforms",
    "Can be complex for complete DeFi beginners",
    "Dependent on underlying DEX liquidity availability",
  ],
  fees: "0% platform fee on swaps; 0.1%/0.12% perp fees",
  bestFor: "Solana traders seeking optimal swap execution",
  affiliateUrl: "https://degen0x.com/go/jupiter",
  category: "exchanges",
};

export const metadata: Metadata = {
  title: `Jupiter Exchange Review (${CURRENT_YEAR}) - Solana's Top DEX Aggregator | ${SITE_NAME}`,
  description: `Complete Jupiter review for ${CURRENT_YEAR}. Covers DEX aggregation, perpetual futures, limit orders, DCA, JUP token, and the Solana trading experience.`,
  alternates: { canonical: "/exchanges/reviews/jupiter-exchange" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const overview =
  "Jupiter is the dominant DEX aggregator on the Solana blockchain, processing the majority of all Solana swap volume by routing trades across every available liquidity source on the network. Launched in 2021, Jupiter evolved from a simple swap aggregator into a comprehensive trading platform offering limit orders, dollar-cost averaging (DCA), perpetual futures, and a token launch platform (LFG Launchpad).\n\nJupiter's core value is finding the best swap price by splitting and routing trades across Raydium, Orca, Meteora, and dozens of other Solana DEXs simultaneously. The aggregator's routing engine analyzes all possible paths and splits trades across multiple pools to minimize price impact and maximize output. For Solana users, Jupiter has become the default frontend for all token swaps.\n\nThe JUP governance token was distributed through one of the largest airdrops in crypto history and powers the protocol's decentralized governance. Jupiter's team, led by pseudonymous founder Meow, has been recognized for consistent execution and rapid feature development. The protocol is open-source and has established itself as essential Solana infrastructure.";

const sections = [
  {
    id: "dex-aggregation",
    title: "DEX Aggregation Engine",
    content:
      "Jupiter's aggregation engine is the most sophisticated swap router on Solana. When you initiate a swap, Jupiter scans all available liquidity sources (Raydium, Orca, Meteora, Lifinity, Phoenix, and more) to find the optimal execution path. For larger trades, the engine splits the order across multiple pools and routes to minimize price impact. The routing algorithm considers pool depths, fee tiers, and multi-hop paths to deliver the best possible output amount. This aggregation means users never need to manually check individual DEXs for the best price.",
  },
  {
    id: "limit-orders",
    title: "Limit Orders & DCA",
    content:
      "Jupiter offers on-chain limit orders that execute when the market price reaches your specified level. This brings traditional exchange functionality to DeFi, allowing you to set buy or sell orders and walk away. The DCA (dollar-cost averaging) feature automates periodic purchases of any Solana token at customizable intervals (minutes, hours, days). Both features run through Jupiter's keeper network, which monitors market conditions and executes orders when conditions are met. These tools transform Jupiter from a simple swap interface into a comprehensive trading platform.",
  },
  {
    id: "perpetual-futures",
    title: "Perpetual Futures Trading",
    content:
      "Jupiter launched perpetual futures (JLP) trading, allowing users to open leveraged long and short positions on major assets including SOL, ETH, and BTC with up to 100x leverage. The liquidity for perpetual futures comes from the JLP (Jupiter Liquidity Provider) pool, which serves as the counterparty for all trades. JLP holders earn trading fees and funding rate payments. The perps interface includes standard trading features like take-profit/stop-loss orders and real-time PnL tracking. While still newer than dedicated perps platforms, Jupiter's futures product has grown rapidly in volume.",
  },
  {
    id: "jup-token",
    title: "JUP Token & Governance",
    content:
      "The JUP token is Jupiter's governance token, distributed through a massive airdrop to Solana users. JUP holders can vote on protocol proposals including fee structures, new feature development, and treasury management. The token is also used for the LFG Launchpad, where JUP stakers get priority access to new token launches. Jupiter's governance has been actively community-driven, with regular votes on significant protocol decisions.",
  },
  {
    id: "lfg-launchpad",
    title: "LFG Launchpad",
    content:
      "Jupiter's LFG (Launch for Greatness) Launchpad is a community-curated token launch platform. New projects submit proposals to launch on LFG, and JUP token holders vote on which projects proceed. Selected projects launch their tokens directly through Jupiter with built-in liquidity bootstrapping. This model differs from traditional launchpads by putting the community in control of project selection rather than the exchange. Notable projects have launched through LFG, generating significant interest and participation.",
  },
];

const fees: Record<string, string> = {
  "Token Swaps": "0% platform fee (underlying DEX fees apply)",
  "Limit Orders": "0.1% taker fee on execution",
  "DCA Orders": "0.1% per execution",
  "Perps (Open/Close)": "0.06% of position size",
  "Perps (Borrow Rate)": "Variable hourly rate",
  "Network Fee": "~$0.001-0.01 per Solana transaction",
};

const security = [
  "Open-source smart contracts on GitHub",
  "Multiple security audits by leading firms",
  "Non-custodial with full self-custody",
  "Decentralized governance through JUP token",
  "No account creation or KYC required",
  "Active bug bounty program",
  "Transparent on-chain execution for all trades",
];

const features = [
  "Best-in-class DEX aggregation across all Solana liquidity sources",
  "On-chain limit orders with keeper-based execution",
  "Automated DCA for periodic token purchases",
  "Perpetual futures with up to 100x leverage via JLP pool",
  "LFG Launchpad with community-curated token launches",
  "JUP governance token with active community voting",
  "Zero platform fee on basic swaps",
  "Support for virtually every SPL token on Solana",
];

const faqs = [
  {
    question: "What is Jupiter Exchange?",
    answer:
      "Jupiter is the leading DEX aggregator on Solana. It routes your token swaps across all available Solana liquidity sources (Raydium, Orca, Meteora, etc.) to find the best execution price. Jupiter also offers limit orders, DCA automation, perpetual futures trading, and the LFG token launch platform.",
  },
  {
    question: "Does Jupiter charge fees on swaps?",
    answer:
      "Jupiter does not charge a platform fee on basic token swaps. You only pay the underlying DEX's swap fee (typically 0.25-0.3%) and Solana's network transaction fee (under $0.01). Limit orders and DCA executions carry a small 0.1% taker fee. Perpetual futures have separate fee structures.",
  },
  {
    question: "How does Jupiter compare to using Raydium directly?",
    answer:
      "Jupiter aggregates liquidity from Raydium and all other Solana DEXs, so you typically get equal or better prices through Jupiter than swapping directly on any single DEX. For most users, Jupiter should be the default choice for Solana swaps because the aggregation ensures optimal execution.",
  },
  {
    question: "What is the JLP pool?",
    answer:
      "JLP (Jupiter Liquidity Provider) is the liquidity pool that backs Jupiter's perpetual futures market. JLP depositors provide capital that serves as the counterparty for leveraged trades. In return, JLP holders earn trading fees, borrow fees, and funding rate payments from the futures market. Returns vary based on trading volume and trader profitability.",
  },
];

const relatedReviews = [
  { name: "Raydium", slug: "raydium" },
  { name: "Orca DEX", slug: "orca" },
  { name: "Hyperliquid", slug: "hyperliquid" },
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
    { '@type': 'ListItem', position: 4, name: 'Jupiter Exchange', },
  ],
};

export default function JupiterExchangeReviewPage() {
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
    </>
  );
}
