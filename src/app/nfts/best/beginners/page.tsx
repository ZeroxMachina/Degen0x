import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { nftMarketplaces } from "@/data/nfts";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best NFT Marketplaces for Beginners in 2026 | degen0x`,
  description: `Discover the best NFT marketplaces for beginners in ${CURRENT_YEAR}. Easy-to-use platforms with simple minting, intuitive browsing, and helpful onboarding for first-time NFT buyers and creators.`,
  alternates: { canonical: "/nfts/best/beginners" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const faqs = [
  {
    question: "What is the easiest NFT marketplace to use?",
    answer: "OpenSea is widely considered the easiest NFT marketplace for beginners. It offers an intuitive interface, supports multiple blockchains, and provides lazy minting so creators can list NFTs without paying upfront gas fees. The platform also has extensive help documentation and tutorials.",
  },
  {
    question: "Do I need technical knowledge to buy NFTs?",
    answer: "No, you do not need technical knowledge to buy NFTs. You only need a crypto wallet (like MetaMask or Phantom), some cryptocurrency to cover the purchase price and gas fees, and a basic understanding of how to connect your wallet to a marketplace. Most platforms guide you through the process step by step.",
  },
  {
    question: "How much does it cost to start buying NFTs?",
    answer: "You can start buying NFTs for as little as a few dollars on Layer 2 networks like Polygon or Solana where gas fees are minimal. On Ethereum mainnet, gas fees can range from $5 to $50+ depending on network congestion, plus the cost of the NFT itself. Many collections offer free mints where you only pay gas.",
  },
  {
    question: "What wallet do I need for NFT marketplaces?",
    answer: "For Ethereum-based marketplaces like OpenSea and Blur, MetaMask is the most popular wallet. For Solana marketplaces like Magic Eden and Tensor, Phantom is the standard choice. Most wallets are free browser extensions that take just a few minutes to set up.",
  },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Nfts', item: 'https://degen0x.com/nfts' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/nfts/best' },
    { '@type': 'ListItem', position: 4, name: 'Beginners', },
  ],
};

export default function BestForBeginnersPage() {
  const recommended = ["opensea", "rarible", "magic-eden", "foundation", "zora"];
  const filtered = nftMarketplaces
    .filter((m) => recommended.includes(m.slug))
    .sort((a, b) => b.rating - a.rating);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best NFT Marketplaces for Beginners ${CURRENT_YEAR}`,
    dateModified: new Date().toISOString(),
    author: { "@type": "Organization", name: "degen0x" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "NFTs", href: "/nfts" },
            { label: "Best NFT Marketplaces", href: "/nfts/best" },
            { label: "For Beginners", href: "/nfts/best/beginners" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best NFT Marketplaces for Beginners in {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            Getting started with NFTs does not have to be intimidating. The best marketplaces for
            beginners offer intuitive interfaces, helpful tutorials, and straightforward buying and
            minting processes. We evaluated each platform based on ease of use, onboarding experience,
            support resources, and how quickly a complete newcomer can make their first purchase or
            create their first NFT.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Our Top Picks for Beginners</h2>
        {/* editorial-voice */}
        <div style={{ background: '#1a0d1e', border: '1px solid #5b2141', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🎨</span>
            <strong style={{ color: '#f472b6', fontSize: 15 }}>NFT Reality</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            The NFT market has matured significantly. We focus on utility and community value rather than floor price speculation.
          </p>
        </div>
          <div className="space-y-4">
            {filtered.map((marketplace, index) => (
              <ProductCard
                key={marketplace.slug}
                product={marketplace}
                rank={index + 1}
                categorySlug="nfts"
              />
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What Beginners Should Look For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Simple Interface", desc: "Clean design with clear navigation, easy search, and straightforward buy/sell flows." },
              { title: "Multi-Chain Support", desc: "Access to low-cost chains like Polygon and Solana alongside Ethereum." },
              { title: "Free Minting", desc: "Lazy minting or gasless options so creators can start without spending ETH." },
              { title: "Educational Content", desc: "Built-in guides, tooltips, and help documentation for NFT newcomers." },
            ].map((item) => (
              <div key={item.title} className="p-4 rounded-lg bg-[var(--color-bg)]/50">
                <h3 className="text-[var(--color-text)] font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <FAQSection faqs={faqs} />
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
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Simple Interface", "description": "Discover the best NFT marketplaces for beginners in ${CURRENT_YEAR}. Easy-to-use platforms with simple minting, intuitive browsing, and helpful onboarding for first-time NFT buyers and creators.", "url": "https://degen0x.com/nfts/best/beginners", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
</>
  );
}
