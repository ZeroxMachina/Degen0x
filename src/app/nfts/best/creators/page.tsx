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
  title: `Best NFT Marketplaces for Creators in ${CURRENT_YEAR} | degen0x`,
  description: `Find the best NFT marketplaces for creators in ${CURRENT_YEAR}. Platforms with the best minting tools, royalty support, custom contracts, and creator-focused features.`,
  alternates: { canonical: "/nfts/best/creators" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const faqs = [
  {
    question: "Which marketplace is best for first-time NFT creators?",
    answer: "OpenSea is the best starting point for first-time creators due to its free lazy minting, intuitive collection creation tools, and massive audience. Rarible is another strong option with its straightforward minting interface and multi-chain support.",
  },
  {
    question: "Can I set my own royalties as a creator?",
    answer: "Yes, most marketplaces allow creators to set royalty percentages (typically 5-10%) on secondary sales. However, enforcement varies by platform. Foundation and SuperRare fully enforce royalties, while Blur and some others make them optional for buyers.",
  },
  {
    question: "Should I deploy my own smart contract for NFTs?",
    answer: "Deploying your own smart contract gives you maximum control over your collection, including custom functionality, royalty enforcement, and independence from any single marketplace. Zora and Rarible offer tools for custom contract deployment. For simple collections, using a marketplace's shared contract is easier and cheaper.",
  },
  {
    question: "How do I maximize visibility as an NFT creator?",
    answer: "List on multiple marketplaces to reach the widest audience. OpenSea for general exposure, Foundation or SuperRare for art curation, and chain-specific platforms for targeted communities. Build a social media presence, engage with collectors, and consider launching through a platform's launchpad feature.",
  },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Nfts', item: 'https://degen0x.com/nfts' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/nfts/best' },
    { '@type': 'ListItem', position: 4, name: 'Creators', },
  ],
};

export default function BestForCreatorsPage() {
  const recommended = ["zora", "rarible", "opensea", "foundation", "superrare"];
  const filtered = nftMarketplaces
    .filter((m) => recommended.includes(m.slug))
    .sort((a, b) => {
      const order = recommended.indexOf(a.slug) - recommended.indexOf(b.slug);
      return order;
    });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best NFT Marketplaces for Creators ${CURRENT_YEAR}`,
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
            { label: "For Creators", href: "/nfts/best/creators" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best NFT Marketplaces for Creators in {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            For NFT creators, the marketplace you choose directly impacts your reach, revenue, and
            creative control. The best creator-focused platforms offer powerful minting tools, strong
            royalty enforcement, custom smart contract deployment, and active communities of collectors.
            We evaluated each platform from the creator's perspective, testing minting workflows,
            storefront customization, and the overall experience of launching and managing a collection.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Best Platforms for NFT Creators</h2>
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
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What Creators Should Prioritize</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Minting Tools", desc: "Look for easy-to-use creation interfaces, batch minting, and support for various media types." },
              { title: "Royalty Enforcement", desc: "Choose platforms that enforce creator royalties to ensure ongoing revenue from secondary sales." },
              { title: "Custom Contracts", desc: "Platforms like Zora and Rarible let you deploy your own smart contracts for maximum control." },
              { title: "Community & Reach", desc: "Consider the platform's audience size, curation features, and promotional tools for new collections." },
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
