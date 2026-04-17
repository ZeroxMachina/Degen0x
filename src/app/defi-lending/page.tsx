import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { DEFI_LENDING_PRODUCTS, DEFI_FAQS } from "@/data/defi-lending";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthoritySources from '@/components/AuthoritySources';

export const metadata: Metadata = {
  title: `DeFi Lending - Compare Protocols, Earn Yield & Borrow Crypto 2026`,
  description:
    "Compare the best DeFi lending protocols. Earn yield on your crypto, borrow against your assets, and explore liquidity pools. Expert reviews, guides, and tools.",
  alternates: { canonical: "/defi-lending" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const bestOfLinks = [
  { title: "Best DeFi Lending Protocols", href: "/defi-lending/best", desc: "Top-rated protocols compared side by side" },
  { title: "Best Stablecoin Yield", href: "/defi-lending/best/stablecoin-yield", desc: "Highest yields on stablecoins" },
  { title: "Best Yield Aggregators", href: "/defi-lending/best/yield-aggregators", desc: "Auto-optimize your DeFi returns" },
  { title: "Best Liquidity Pools", href: "/defi-lending/best/liquidity-pools", desc: "Top LP opportunities across DeFi" },
  { title: "Best Cross-Chain Lending", href: "/defi-lending/best/cross-chain", desc: "Lend and borrow across blockchains" },
  { title: "Best on Ethereum", href: "/defi-lending/best/ethereum", desc: "Top Ethereum lending protocols" },
  { title: "Best on Solana", href: "/defi-lending/best/solana", desc: "Top Solana lending protocols" },
  { title: "Best Layer 2 Lending", href: "/defi-lending/best/layer-2", desc: "Low-cost lending on L2 networks" },
  { title: "Best Fixed Rate Lending", href: "/defi-lending/best/fixed-rate", desc: "Predictable returns with fixed rates" },
];

const reviewLinks = [
  { name: "Aave", slug: "aave" },
  { name: "Compound", slug: "compound" },
  { name: "Morpho", slug: "morpho" },
  { name: "Spark", slug: "spark" },
  { name: "Yearn Finance", slug: "yearn" },
  { name: "Curve Finance", slug: "curve" },
  { name: "Lido", slug: "lido" },
];

const compareLinks = [
  { title: "Aave vs Compound", href: "/defi-lending/compare/aave-vs-compound" },
  { title: "Lido vs Rocket Pool", href: "/defi-lending/compare/lido-vs-rocket-pool" },
];

const learnLinks = [
  { title: "What Is DeFi Lending?", href: "/defi-lending/learn/what-is-defi-lending" },
  { title: "How to Earn Yield", href: "/defi-lending/learn/how-to-earn-yield" },
  { title: "Impermanent Loss Explained", href: "/defi-lending/learn/impermanent-loss" },
  { title: "Liquidity Pools Explained", href: "/defi-lending/learn/liquidity-pools-explained" },
  { title: "Yield Farming Guide", href: "/defi-lending/learn/yield-farming-guide" },
  { title: "APY vs APR", href: "/defi-lending/learn/apy-vs-apr" },
  { title: "Smart Contract Risks", href: "/defi-lending/learn/smart-contract-risks" },
  { title: "TVL Explained", href: "/defi-lending/learn/tvl-explained" },
];

const toolLinks = [
  { title: "Yield Calculator", href: "/defi-lending/calculators/yield-calculator", desc: "Calculate your expected DeFi yield" },
  { title: "Impermanent Loss Calculator", href: "/defi-lending/calculators/impermanent-loss-calculator", desc: "Estimate impermanent loss on LP positions" },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Defi Lending', },
  ],
};

export default function DefiLendingPage() {
  const topProtocols = [...DEFI_LENDING_PRODUCTS].sort((a, b) => b.rating - a.rating).slice(0, 5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `DeFi Lending Hub - Compare Protocols ${CURRENT_YEAR}`,
    description: "Compare the best DeFi lending protocols. Earn yield, borrow crypto, and explore liquidity pools.",
    url: "https://degen0x.com/defi-lending",
    isPartOf: { "@type": "WebSite", name: SITE_NAME },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "DeFi Lending", href: "/defi-lending" }]} />

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">DeFi Lending Hub</h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            Your complete resource for decentralized lending and borrowing. Compare protocols, find the best yields,
            read expert reviews, and learn how to earn passive income on your crypto assets. Last updated {CURRENT_MONTH} {CURRENT_YEAR}.
          </p>
        </div>

        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[var(--color-text)]">Top-Rated Protocols</h2>
            <Link href="/defi-lending/best" className="text-[var(--color-primary)] hover:underline text-sm font-medium">
              View all rankings &rarr;
            </Link>
          </div>
          <AffiliateDisclosure />
          <div className="space-y-4">
            {topProtocols.map((protocol, index) => (
              <ProductCard key={protocol.slug} product={protocol} rank={index + 1} categorySlug="defi-lending" />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Find the Best Protocol For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bestOfLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 card-hover block">
                <h3 className="text-[var(--color-text)] font-semibold mb-1">{link.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Protocol Reviews</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {reviewLinks.map((review) => (
              <Link key={review.slug} href={`/defi-lending/reviews/${review.slug}`} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover text-center block">
                <span className="text-[var(--color-text)] font-semibold">{review.name}</span>
                <span className="block text-xs text-[var(--color-text-secondary)] mt-1">Full Review</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Head-to-Head Comparisons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {compareLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover block">
                <span className="text-[var(--color-text)] font-semibold">{link.title}</span>
                <span className="block text-xs text-[var(--color-text-secondary)] mt-1">Detailed comparison &rarr;</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Tools & Calculators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {toolLinks.map((tool) => (
              <Link key={tool.href} href={tool.href} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 card-hover block">
                <h3 className="text-[var(--color-text)] font-semibold mb-1">{tool.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Learn About DeFi Lending</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learnLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover block">
                <span className="text-[var(--color-text)] font-semibold">{link.title}</span>
                <span className="block text-xs text-[var(--color-text-secondary)] mt-1">Read guide &rarr;</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How We Review DeFi Protocols</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Our DeFi protocol reviews are based on rigorous analysis including hands-on testing of each platform.
            We evaluate protocols across multiple categories including security audit history, total value locked,
            yield competitiveness, smart contract maturity, governance decentralization, and user experience quality.
          </p>
          <p className="text-[var(--color-text-secondary)]">
            Our team of DeFi researchers actively uses these protocols, deposits real funds, and monitors performance
            over time. We update our ratings monthly to reflect changes in protocol security, yield competitiveness,
            and ecosystem developments. Affiliate partnerships never influence our ratings or recommendations.
          </p>
        </section>

        <FAQSection faqs={DEFI_FAQS} />
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
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Best DeFi Lending Protocols", "description": "Compare the best DeFi lending protocols. Earn yield on your crypto, borrow against your assets, and explore liquidity pools. Expert reviews, guides, and tools.", "url": "https://degen0x.com/defi-lending", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
      <AuthoritySources url="/defi-lending" />
    </>
  );
}
