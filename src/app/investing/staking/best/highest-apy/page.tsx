import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { stakingPlatforms } from "@/data/staking";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Highest Staking APY Platforms of ${CURRENT_YEAR} (Best Yields)`,
  description: `Find the highest staking APY platforms in ${CURRENT_YEAR}. Compare yields across Ethereum, Solana, and restaking protocols to maximize your staking returns.`,
  alternates: { canonical: "/investing/staking/best/highest-apy" }};

const faqs = [
  {
    question: "Which staking platform has the highest APY?",
    answer: `In ${CURRENT_YEAR}, Jito offers the highest single-asset staking APY for Solana at 7-8% through MEV reward sharing. For Ethereum, EigenLayer restaking can boost total yields to 5-8% when combining base staking rewards with AVS rewards. Pure ETH liquid staking yields are typically 3-4%.`,
  },
  {
    question: "Are high staking APYs sustainable?",
    answer: "Staking APYs are determined by network economics, not arbitrary promises. Higher APYs on established networks like Solana reflect the network's inflation schedule and validator economics. Be cautious of extremely high yields (20%+) on newer chains, as these often come from unsustainable token emissions.",
  },
  {
    question: "How can I maximize my staking returns?",
    answer: "Maximize returns by choosing protocols with the lowest fees (Jito at 4% or Marinade native at 0%), enabling auto-compounding where available, and using liquid staking tokens in DeFi for additional yield. Restaking through EigenLayer can further boost Ethereum staking returns.",
  },
  {
    question: "Does higher APY mean higher risk?",
    answer: "Generally, yes. Higher yields often come from additional protocol layers (like restaking) or newer networks with higher inflation. Each additional yield source typically adds smart contract risk, slashing risk, or market risk. Understanding and accepting these tradeoffs is important.",
  },
];

export default function HighestAPYStakingPage() {
  const sortedPlatforms = [...stakingPlatforms].sort((a, b) => b.rating - a.rating);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Highest Staking APY Platforms of ${CURRENT_YEAR}`,
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
            { label: "Investing", href: "/investing" },
            { label: "Staking", href: "/investing/staking" },
            { label: "Highest APY", href: "/investing/staking/best/highest-apy" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Highest Staking APY Platforms of {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            Maximizing staking returns requires choosing the right platform, the right network, and
            understanding how to layer yields through DeFi composability. This guide ranks staking
            platforms by their effective APY, factoring in fees, compounding frequency, and additional
            yield opportunities like MEV sharing and restaking.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            <strong className="text-[var(--color-text)]">Jito</strong> leads with the highest base staking APY
            for SOL through MEV rewards. <strong className="text-[var(--color-text)]">EigenLayer</strong> offers
            the highest combined yields for ETH through restaking. For set-and-forget staking,{" "}
            <strong className="text-[var(--color-text)]">Lido</strong> provides competitive ETH yields with
            automatic compounding through stETH rebasing.
          </p>
        </div>

        {/* APY Comparison Card */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Current APY Ranges</h2>
        {/* editorial-voice */}
        <div style={{ background: '#041a12', border: '1px solid #064e3b', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📈</span>
            <strong style={{ color: '#10b981', fontSize: 15 }}>Research Perspective</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Our investment research is opinionated by design — we believe conviction backed by on-chain data beats diversification into projects you don't understand.
          </p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { name: "Jito (SOL)", apy: "6.5%–8.0%", note: "Includes MEV rewards" },
              { name: "Marinade (SOL)", apy: "6.0%–7.5%", note: "Liquid or native staking" },
              { name: "EigenLayer (ETH)", apy: "4.0%–8.0%", note: "Base + AVS rewards" },
              { name: "Lido (ETH)", apy: "3.0%–3.5%", note: "Auto-compounding stETH" },
              { name: "Rocket Pool (ETH)", apy: "2.8%–3.2%", note: "Decentralized validators" },
              { name: "StakeWise (ETH)", apy: "3.0%–3.5%", note: "Vault-based staking" },
            ].map((item) => (
              <div key={item.name} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
                <h3 className="text-[var(--color-text)] font-semibold mb-1">{item.name}</h3>
                <p className="text-2xl font-bold text-[var(--color-success)]">{item.apy}</p>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--color-text-secondary)]">
            * APY rates are approximate and fluctuate based on network conditions. Rates shown are as of {CURRENT_MONTH} {CURRENT_YEAR}.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">All Platforms Ranked</h2>
          <div className="space-y-4">
            {sortedPlatforms.map((platform, index) => (
              <ProductCard
                key={platform.slug}
                product={platform}
                rank={index + 1}
                categorySlug="investing/staking"
              />
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
