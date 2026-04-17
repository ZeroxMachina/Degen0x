import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { nftMarketplaces } from "@/data/nfts";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata: Metadata = {
  title: `Best NFT Marketplaces for Art in 2026 | degen0x`,
  description: `Discover the best NFT marketplaces for digital art in ${CURRENT_YEAR}. Curated platforms for artists and collectors featuring galleries, auctions, and premium art curation.`,
  alternates: { canonical: "/nfts/best/art" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const faqs = [
  {
    question: "What is the best NFT marketplace for digital art?",
    answer: "SuperRare is the premier platform for high-end 1-of-1 digital art, while Foundation offers a strong balance of curation and accessibility. For emerging artists, OpenSea and Rarible provide the broadest reach with lower barriers to entry.",
  },
  {
    question: "How do artists make money selling NFT art?",
    answer: "Artists earn from primary sales (the initial sale of their NFT) and secondary sales through creator royalties (typically 5-10% of each resale). Some platforms like Foundation charge a 5% fee while enforcing 10% creator royalties, ensuring artists benefit from their work's growing value.",
  },
  {
    question: "What is the difference between 1-of-1 and edition NFTs?",
    answer: "A 1-of-1 NFT is a unique, single-edition piece, much like a traditional painting. Edition NFTs are multiple copies of the same artwork, similar to prints. SuperRare specializes in 1-of-1 works, while platforms like Zora and Foundation support both editions and unique pieces.",
  },
  {
    question: "Do I need to be invited to sell art on NFT marketplaces?",
    answer: "Most marketplaces are now open to all creators. SuperRare still has a selective application process for artists. Foundation previously required invitations but has opened up access. OpenSea, Rarible, and Zora allow anyone to mint and list art without approval.",
  },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Nfts', item: 'https://degen0x.com/nfts' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/nfts/best' },
    { '@type': 'ListItem', position: 4, name: 'Art', },
  ],
};

export default function BestForArtPage() {
  const recommended = ["superrare", "foundation", "opensea", "rarible", "zora"];
  const filtered = nftMarketplaces
    .filter((m) => recommended.includes(m.slug))
    .sort((a, b) => {
      const order = recommended.indexOf(a.slug) - recommended.indexOf(b.slug);
      return order;
    });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best NFT Marketplaces for Art ${CURRENT_YEAR}`,
    dateModified: new Date().toISOString(),
    author: { "@type": "Organization", name: "degen0x" },
  };

  return (
    <>
      <ArticleSchema
        headline="Curation Quality"
        description="Curation Quality"
        url="/nfts/best/art"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="NFTs"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/nfts/best/art" />
        <ReadingTime />
      </div>
<AuthoritySources url="/nfts/best/art" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "NFTs", href: "/nfts" },
            { label: "Best NFT Marketplaces", href: "/nfts/best" },
            { label: "For Art", href: "/nfts/best/art" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best NFT Marketplaces for Art in {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            Digital art has become one of the most vibrant segments of the NFT ecosystem, with dedicated
            platforms offering curated galleries, auction systems, and artist-focused tools. Whether you
            are a collector seeking museum-quality pieces or an artist looking to reach a global audience,
            choosing the right art-focused marketplace is essential. We evaluated platforms on curation
            quality, artist support, auction mechanics, and the overall collecting experience.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Best Platforms for Art NFTs</h2>
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
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What Art Collectors Should Consider</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Curation Quality", desc: "Platforms with strong curation attract higher quality artwork and more serious collectors." },
              { title: "Auction Mechanics", desc: "Reserve auctions, timed auctions, and offer systems affect how art is priced and sold." },
              { title: "Royalty Enforcement", desc: "Platforms that enforce creator royalties help artists earn from secondary sales." },
              { title: "Community", desc: "Active collector communities drive engagement, discovery, and long-term value appreciation." },
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
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Curation Quality", "description": "Discover the best NFT marketplaces for digital art in ${CURRENT_YEAR}. Curated platforms for artists and collectors featuring galleries, auctions, and premium art curation.", "url": "https://degen0x.com/nfts/best/art", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
</>
  );
}
