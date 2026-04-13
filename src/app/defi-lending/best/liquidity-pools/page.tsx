import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Liquidity Pools ${CURRENT_YEAR} - Top LP Opportunities in DeFi`,
  description: `Compare the best liquidity pools for earning yield in ${CURRENT_YEAR}. Earn trading fees and token rewards by providing liquidity on top DEXs and DeFi protocols.`,
  alternates: { canonical: "/defi-lending/best/liquidity-pools" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const products: Product[] = [
  {
    name: "Curve Finance",
    slug: "curve",
    rating: 4.7,
    description: "Curve Finance dominates stablecoin and pegged-asset liquidity pools with its specialized AMM design that minimizes slippage. LPs earn trading fees plus CRV",
    pros: ["Deepest stablecoin LP pools", "Minimal impermanent loss on stable pairs", "CRV gauge rewards boost returns", "Industry-standard for stablecoin swaps"],
    cons: ["Complex gauge and voting system", "UI is not beginner-friendly", "Volatile pool yields depend on CRV price"],
    fees: "0.04% swap fee to LPs",
    bestFor: "Stablecoin liquidity providers",
    affiliateUrl: "https://degen0x.com/go/curve",
    category: "defi-lending",
    featured: true,
  },
  {
    name: "Uniswap V3",
    slug: "uniswap",
    rating: 4.6,
    description: "Uniswap V3 introduced concentrated liquidity, allowing LPs to provide capital within custom price ranges for dramatically improved capital efficiency. Top pools like ETH/USDC generate substantial trading fee revenue for active LPs who manage their positions.",
    pros: ["Highest trading volume DEX", "Concentrated liquidity for better returns", "Multi-chain deployment", "Wide token pair selection"],
    cons: ["Concentrated LP requires active management", "Higher impermanent loss risk", "Complex position management"],
    fees: "0.01-1% per swap (tier dependent)",
    bestFor: "Active LPs seeking high returns",
    affiliateUrl: "https://degen0x.com/go/uniswap",
    category: "defi-lending",
  },
  {
    name: "Balancer",
    slug: "balancer",
    rating: 4.4,
    description: "Balancer offers flexible multi-asset liquidity pools with customizable weightings. Unlike traditional 50/50 pools, Balancer allows asymmetric pools (like 80/20 ETH/WBTC) that reduce impermanent loss while still earning trading fees and BAL token rewards.",
    pros: ["Custom pool weightings reduce IL", "Multi-asset pools possible", "BAL token incentives", "Boosted pools for yield optimization"],
    cons: ["Lower volume than Uniswap", "Complex pool configurations", "Smaller LP community"],
    fees: "Variable per pool",
    bestFor: "LPs wanting reduced impermanent loss",
    affiliateUrl: "https://degen0x.com/go/balancer",
    category: "defi-lending",
  },
  {
    name: "Aerodrome",
    slug: "aerodrome",
    rating: 4.5,
    description: "Aerodrome is the leading DEX on Base (Coinbase L2), combining the ve(3,3) model with deep liquidity incentives. LPs earn AERO token emissions directed by veAERO voters, making it one of the highest-yielding LP opportunities on any L2 network.",
    pros: ["Highest yields on Base network", "ve(3,3) tokenomics drive emissions", "Low gas costs on L2", "Rapidly growing TVL"],
    cons: ["Only available on Base", "AERO token price volatility affects yields", "Newer protocol"],
    fees: "Variable per pool",
    bestFor: "Base network liquidity providers",
    affiliateUrl: "https://degen0x.com/go/aerodrome",
    category: "defi-lending",
  },
];

const faqs: FAQ[] = [
  { question: "What is a liquidity pool?", answer: "A liquidity pool is a collection of funds locked in a smart contract that facilitates trading on decentralized exchanges. Liquidity providers (LPs) deposit pairs of tokens into pools and earn trading fees whenever someone swaps between those tokens. LPs also often receive additional token incentives from the protocol." },
  { question: "What is impermanent loss?", answer: "Impermanent loss occurs when the price ratio of tokens in your liquidity pool changes compared to when you deposited. The greater the price divergence, the more you lose versus simply holding the tokens. It is called impermanent because the loss only becomes permanent when you withdraw. For stablecoin pools, impermanent loss is minimal." },
  { question: "How much can you earn from liquidity pools?", answer: "Returns vary widely depending on the pool, trading volume, and incentives. Stablecoin pools typically yield 2-10% APY from trading fees. Volatile pairs can yield 20-100%+ but carry higher impermanent loss risk. Incentivized pools with token rewards can offer even higher returns temporarily." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Defi Lending', item: 'https://degen0x.com/defi-lending' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/defi-lending/best' },
    { '@type': 'ListItem', position: 4, name: 'Liquidity Pools', },
  ],
};

export default function LiquidityPoolsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="defi-lending"
      />      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "DeFi Lending", href: "/defi-lending" }, { label: "Best", href: "/defi-lending/best" }, { label: "Liquidity Pools", href: "/defi-lending/best/liquidity-pools" }]} />
      <AffiliateDisclosure />
      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Best Liquidity Pools ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Providing liquidity to decentralized exchanges is one of the most popular ways to earn yield in DeFi. By depositing token pairs into liquidity pools, you earn a share of trading fees generated by swaps, plus additional token incentives from many protocols. We have evaluated the top liquidity pool platforms based on yield consistency, impermanent loss characteristics, security, and overall LP experience.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          For stablecoin LPs, <strong className="text-[var(--color-text)]">Curve Finance</strong> remains the clear leader with its purpose-built AMM. Active LPs should consider <strong className="text-[var(--color-text)]">Uniswap V3</strong> concentrated liquidity for superior capital efficiency. On Base L2, <strong className="text-[var(--color-text)]">Aerodrome</strong> offers some of the highest LP yields available anywhere.
        </p>
      </div>
      <div className="space-y-4 mb-12">
        {products.map((product, index) => (
          <ProductCard key={product.slug} product={product} rank={index + 1} categorySlug="defi-lending" />
        ))}
      </div>
      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Defi Lending/best/liquidity Pools", "description": "Curve Finance dominates stablecoin and pegged-asset liquidity pools with its specialized AMM design that minimizes slippage. LPs earn trading fees plus CRV", "url": "https://degen0x.com/defi-lending/best/liquidity-pools", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/learn" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            All Learning Guides
          </Link>
          <Link href="/tools" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Crypto Tools
          </Link>
          <Link href="/compare" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Compare Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
