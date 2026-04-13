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
  title: `Best NFT Marketplaces for Photography in 2026 | degen0x`,
  description: `Find the best NFT marketplaces for photographers in ${CURRENT_YEAR}. Sell and collect photography NFTs on curated platforms with gallery-quality presentation.`,
  alternates: { canonical: "/nfts/best/photography" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const faqs = [
  {
    question: "Can photographers sell their work as NFTs?",
    answer: "Yes, photographers can mint their images as NFTs and sell them on various marketplaces. Platforms like SuperRare and Foundation offer curated environments ideal for fine art photography, while OpenSea provides the broadest audience reach. Many photographers have found significant success selling limited edition prints as NFTs.",
  },
  {
    question: "What makes a good photography NFT marketplace?",
    answer: "A good photography NFT marketplace offers high-resolution image display, curated collections, strong community of photography collectors, enforced creator royalties, and gallery-style presentation. The platform should also handle metadata properly to preserve image quality and provenance information.",
  },
  {
    question: "How should I price my photography NFTs?",
    answer: "Pricing depends on your reputation, the quality and uniqueness of the work, edition size, and market demand. 1-of-1 pieces command higher prices than editions. Research comparable photography NFTs on your chosen platform, start with accessible prices to build a collector base, and adjust based on demand.",
  },
  {
    question: "Should I sell photography as 1-of-1 or editions?",
    answer: "Both approaches work well. 1-of-1 pieces create scarcity and can command premium prices, similar to fine art prints. Editions allow more collectors to own your work at lower price points, building a broader fan base. Many photographers use a mixed strategy with flagship 1-of-1s and accessible edition drops.",
  },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Nfts', item: 'https://degen0x.com/nfts' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/nfts/best' },
    { '@type': 'ListItem', position: 4, name: 'Photography', },
  ],
};

export default function BestForPhotographyPage() {
  const recommended = ["superrare", "foundation", "opensea", "zora", "rarible"];
  const filtered = nftMarketplaces
    .filter((m) => recommended.includes(m.slug))
    .sort((a, b) => {
      const order = recommended.indexOf(a.slug) - recommended.indexOf(b.slug);
      return order;
    });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best NFT Marketplaces for Photography ${CURRENT_YEAR}`,
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
            { label: "For Photography", href: "/nfts/best/photography" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best NFT Marketplaces for Photography in {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            Photography NFTs have carved out a distinct niche in the digital art world, attracting
            serious collectors and established photographers alike. The best platforms for photography
            offer gallery-quality image display, strong curation, active collector communities, and
            tools designed for visual artists. We tested each platform with actual photography listings
            to evaluate image quality, discovery, and the overall selling experience.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Best Platforms for Photography NFTs</h2>
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
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Tips for Photography NFT Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Image Quality", desc: "Use high-resolution files and ensure the platform displays your work without compression artifacts." },
              { title: "Edition Strategy", desc: "Balance scarcity with accessibility by offering limited editions alongside rare 1-of-1 pieces." },
              { title: "Story & Context", desc: "Include detailed descriptions, location data, and the story behind each photograph to enhance value." },
              { title: "Community Building", desc: "Engage with collectors on social platforms and within the marketplace community to build a following." },
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
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Image Quality", "description": "Find the best NFT marketplaces for photographers in ${CURRENT_YEAR}. Sell and collect photography NFTs on curated platforms with gallery-quality presentation.", "url": "https://degen0x.com/nfts/best/photography", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
</>
  );
}
