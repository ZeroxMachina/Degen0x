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
  title: `Best NFT Marketplaces for Free Minting in ${CURRENT_YEAR} | degen0x`,
  description: `Find the best NFT marketplaces with free minting in ${CURRENT_YEAR}. Create and list NFTs without upfront gas costs using lazy minting and low-cost chains.`,
  alternates: { canonical: "/nfts/best/free-mint" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const faqs = [
  {
    question: "Can I really mint NFTs for free?",
    answer: "Yes, several platforms offer free or near-free minting. OpenSea supports lazy minting where the NFT is created on-chain only when someone purchases it, meaning no upfront gas cost. Zora and platforms on Layer 2 networks offer minting for fractions of a cent. On Solana, minting costs are typically under $0.01.",
  },
  {
    question: "What is lazy minting?",
    answer: "Lazy minting is a technique where the NFT metadata is stored off-chain until a buyer purchases the item. At that point, the NFT is minted on-chain and the gas fee is included in the purchase price, effectively making minting free for the creator. OpenSea popularized this approach.",
  },
  {
    question: "Which blockchain has the cheapest NFT minting?",
    answer: "Solana and Layer 2 networks like Polygon, Base, and Zora Network offer the cheapest minting costs, typically under $0.01 per NFT. Ethereum mainnet is the most expensive for minting, with gas costs ranging from $5 to $50+ depending on network congestion.",
  },
  {
    question: "Are free-minted NFTs lower quality?",
    answer: "Not at all. The minting cost has no relationship to the quality or value of the NFT. Many successful collections and established artists use free or low-cost minting options. The value of an NFT comes from the art, the artist, the community, and market demand, not from how much it cost to mint.",
  },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Nfts', item: 'https://degen0x.com/nfts' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/nfts/best' },
    { '@type': 'ListItem', position: 4, name: 'Free Mint', },
  ],
};

export default function BestForFreeMintPage() {
  const recommended = ["opensea", "zora", "magic-eden", "rarible", "tensor"];
  const filtered = nftMarketplaces
    .filter((m) => recommended.includes(m.slug))
    .sort((a, b) => {
      const order = recommended.indexOf(a.slug) - recommended.indexOf(b.slug);
      return order;
    });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best NFT Marketplaces for Free Minting ${CURRENT_YEAR}`,
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
            { label: "Free Minting", href: "/nfts/best/free-mint" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best NFT Marketplaces for Free Minting in {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            High minting costs should not be a barrier to creating NFTs. The best platforms offer
            lazy minting, Layer 2 support, or native low-cost blockchains that allow creators to
            list their work with minimal or zero upfront costs. We evaluated each platform on their
            free minting capabilities, supported chains, and the overall creator experience for
            those working on a budget.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Best Platforms for Free Minting</h2>
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
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Free Minting Options Compared</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Lazy Minting (OpenSea)", desc: "NFT is minted on-chain only when purchased. Zero upfront cost for creators on Ethereum." },
              { title: "Zora Network L2", desc: "Mint on Zora's own Layer 2 for fractions of a cent with full Ethereum security." },
              { title: "Solana Minting", desc: "Solana's low fees make minting cost under $0.01 per NFT on platforms like Magic Eden." },
              { title: "Polygon Support", desc: "Several platforms support Polygon minting with gas fees under $0.01 per transaction." },
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
    </>
  );
}
