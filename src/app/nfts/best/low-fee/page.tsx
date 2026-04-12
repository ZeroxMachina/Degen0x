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
  title: `Lowest Fee NFT Marketplaces in ${CURRENT_YEAR} | degen0x`,
  description: `Compare the NFT marketplaces with the lowest fees in ${CURRENT_YEAR}. Find platforms with zero or minimal marketplace fees to maximize your NFT trading profits.`,
  alternates: { canonical: "/nfts/best/low-fee" }};

const faqs = [
  {
    question: "Which NFT marketplace has zero fees?",
    answer: "Blur and Zora both charge 0% marketplace fees. Blur is the top choice for Ethereum NFT traders seeking zero fees, while Zora appeals to creators who want fee-free minting and selling. Note that blockchain gas fees still apply on both platforms.",
  },
  {
    question: "What is the difference between marketplace fees and gas fees?",
    answer: "Marketplace fees are charged by the platform as a percentage of each sale (e.g., OpenSea's 2.5%). Gas fees are network transaction costs paid to blockchain validators for processing transactions. You pay gas fees regardless of marketplace fees, and they vary based on network congestion.",
  },
  {
    question: "Do low-fee marketplaces have lower quality NFTs?",
    answer: "No. Low-fee marketplaces like Blur actually have the highest trading volume on Ethereum and trade the same collections available on higher-fee platforms like OpenSea. Fee structure is a business model choice, not an indicator of collection quality.",
  },
  {
    question: "How much can I save with a low-fee marketplace?",
    answer: "The savings are significant for active traders. On a 10 ETH NFT purchase, OpenSea charges 0.25 ETH in fees, while Blur charges nothing. For a trader making 10 such trades per month, that is 2.5 ETH saved monthly by using Blur instead of OpenSea.",
  },
];

export default function LowestFeeMarketplacesPage() {
  const ranked = [...nftMarketplaces].sort((a, b) => {
    const feeA = parseFloat((a.fees || "99").replace(/[^0-9.]/g, ""));
    const feeB = parseFloat((b.fees || "99").replace(/[^0-9.]/g, ""));
    return feeA - feeB;
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Lowest Fee NFT Marketplaces ${CURRENT_YEAR}`,
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
            { label: "Lowest Fees", href: "/nfts/best/low-fee" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Lowest Fee NFT Marketplaces in {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            Marketplace fees can significantly eat into your NFT trading profits. The difference
            between a 0% and 5% fee on a high-value trade is substantial. We ranked every major NFT
            marketplace by their total fee structure, including marketplace fees, creator royalty
            policies, and typical gas costs, to help you keep more of your trading profits.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Marketplaces Ranked by Fees (Lowest First)</h2>
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
            {ranked.map((marketplace, index) => (
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
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Fee Comparison Overview</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--color-text)]">Marketplace</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--color-text)]">Fee</th>
                </tr>
              </thead>
              <tbody>
                {ranked.map((m) => (
                  <tr key={m.slug} className="border-b border-[var(--color-border)]/50">
                    <td className="px-4 py-3 text-sm text-[var(--color-text)]">{m.name}</td>
                    <td className="px-4 py-3 text-sm text-[var(--color-text-secondary)]">{m.fees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          <Link href="/learn" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            All Learning Guides
          </Link>
          <Link href="/tools" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Crypto Tools
          </Link>
          <Link href="/compare" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Compare Projects
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
