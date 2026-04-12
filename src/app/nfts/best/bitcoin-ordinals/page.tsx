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
  title: `Best Bitcoin Ordinals Marketplaces in ${CURRENT_YEAR} | degen0x`,
  description: `Compare the best marketplaces for Bitcoin Ordinals and BRC-20 tokens in ${CURRENT_YEAR}. Trade inscriptions, Runes, and Bitcoin-native NFTs on top platforms.`,
  alternates: { canonical: "/nfts/best/bitcoin-ordinals" }};

const faqs = [
  {
    question: "What are Bitcoin Ordinals?",
    answer: "Bitcoin Ordinals are a way to inscribe data (images, text, audio, video) directly onto individual satoshis (the smallest unit of Bitcoin). This creates NFT-like assets that are stored entirely on the Bitcoin blockchain, making them immutable and permanent without relying on external storage.",
  },
  {
    question: "Where can I buy Bitcoin Ordinals?",
    answer: "Magic Eden is the leading marketplace for Bitcoin Ordinals, offering the best selection and liquidity. OpenSea has also added Ordinals support. Several Bitcoin-native platforms exist, but Magic Eden provides the most user-friendly experience for most collectors.",
  },
  {
    question: "How are Bitcoin Ordinals different from Ethereum NFTs?",
    answer: "Bitcoin Ordinals store all data directly on-chain (on the Bitcoin blockchain), while most Ethereum NFTs store metadata and images on IPFS or centralized servers. Ordinals are tied to specific satoshis, making them truly native to Bitcoin. However, the Bitcoin ecosystem has fewer smart contract capabilities and marketplace features compared to Ethereum.",
  },
  {
    question: "What wallet do I need for Bitcoin Ordinals?",
    answer: "You need a Bitcoin wallet that supports Ordinals, such as Xverse, Leather (formerly Hiro), or UniSat. These wallets can manage both regular Bitcoin and inscribed satoshis. Standard Bitcoin wallets may not recognize or properly handle Ordinals.",
  },
];

export default function BestForBitcoinOrdinalsPage() {
  const recommended = ["magic-eden", "opensea"];
  const filtered = nftMarketplaces
    .filter((m) => recommended.includes(m.slug))
    .sort((a, b) => {
      const order = recommended.indexOf(a.slug) - recommended.indexOf(b.slug);
      return order;
    });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best Bitcoin Ordinals Marketplaces ${CURRENT_YEAR}`,
    dateModified: new Date().toISOString(),
    author: { "@type": "Organization", name: "degen0x" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "NFTs", href: "/nfts" },
            { label: "Best NFT Marketplaces", href: "/nfts/best" },
            { label: "Bitcoin Ordinals", href: "/nfts/best/bitcoin-ordinals" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Bitcoin Ordinals Marketplaces in {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            Bitcoin Ordinals have created an entirely new asset class within the Bitcoin ecosystem,
            enabling NFT-like inscriptions directly on the most secure blockchain in the world. From
            digital art inscribed on satoshis to BRC-20 tokens and Runes, the Bitcoin NFT space is
            rapidly evolving. We evaluated the top platforms for trading Ordinals based on collection
            breadth, user experience, fees, and wallet compatibility.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Best Platforms for Bitcoin Ordinals</h2>
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
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Understanding Bitcoin Ordinals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Fully On-Chain", desc: "All data is stored directly on the Bitcoin blockchain, ensuring permanent and immutable storage." },
              { title: "Satoshi Inscriptions", desc: "Each Ordinal is inscribed on a specific satoshi, creating a unique digital artifact tied to Bitcoin." },
              { title: "Growing Ecosystem", desc: "BRC-20 tokens, Runes, and recursive inscriptions are expanding what is possible on Bitcoin." },
              { title: "Bitcoin Security", desc: "Ordinals inherit the security and decentralization of the Bitcoin network itself." },
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
