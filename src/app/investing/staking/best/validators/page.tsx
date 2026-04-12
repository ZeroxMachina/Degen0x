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
  title: `Best Staking Validators of ${CURRENT_YEAR} (Compared)`,
  description: `Compare the best staking validators and validator services in ${CURRENT_YEAR}. Find top-performing validators for Ethereum and Solana staking.`,
  alternates: { canonical: "/investing/staking/best/validators" }};

const faqs = [
  {
    question: "What is a staking validator?",
    answer: "A staking validator is a node that participates in a proof-of-stake blockchain's consensus mechanism. Validators propose and attest to new blocks, securing the network in exchange for rewards. You can run your own validator or delegate your stake to existing validators through staking platforms.",
  },
  {
    question: "How do I choose a good validator?",
    answer: "Look for validators with high uptime (above 99%), consistent performance history, reasonable commission rates, and transparent operations. For decentralization, consider delegating to mid-sized validators rather than the largest ones. Check the validator's track record for slashing events and their communication with delegators.",
  },
  {
    question: "What happens if my validator gets slashed?",
    answer: "If a validator is slashed, a portion of the staked ETH is burned as a penalty. On Ethereum, the penalty ranges from a small amount for isolated incidents to up to the full stake for correlated failures. Most liquid staking protocols have insurance mechanisms to protect delegators from slashing losses.",
  },
  {
    question: "Can I run my own validator?",
    answer: "Yes. Running an Ethereum validator requires 32 ETH and consistent uptime with proper hardware. Rocket Pool lowers this to 8 ETH by pooling funds from stakers. Running a Solana validator requires significant hardware investment and SOL for voting costs. Most users find it simpler to delegate to existing validators.",
  },
];

export default function BestValidatorsPage() {
  const validatorPlatforms = [...stakingPlatforms]
    .filter((p) => p.slug !== "kraken-staking")
    .sort((a, b) => b.rating - a.rating);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best Staking Validators of ${CURRENT_YEAR}`,
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
            { label: "Best Validators", href: "/investing/staking/best/validators" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Staking Validators of {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            Choosing the right validator or validator service is critical for maximizing your staking
            returns while minimizing risks. The best validators maintain near-perfect uptime, charge
            reasonable commissions, and have never been slashed. We evaluate validator performance
            across all major staking platforms.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            <strong className="text-[var(--color-text)]">Lido</strong> offers a curated set of professional
            validators for ETH staking. <strong className="text-[var(--color-text)]">Rocket Pool</strong> provides
            a permissionless validator network where anyone can operate a node. For Solana,{" "}
            <strong className="text-[var(--color-text)]">Marinade</strong> distributes stake across 400+ validators
            using its algorithmic scoring system.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Our Rankings</h2>
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
          <div className="space-y-4">
            {validatorPlatforms.map((platform, index) => (
              <ProductCard
                key={platform.slug}
                product={platform}
                rank={index + 1}
                categorySlug="investing/staking"
              />
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What Makes a Good Validator</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {[
              { title: "Uptime", desc: "Top validators maintain 99.9%+ uptime. Downtime directly reduces your staking rewards and can result in penalties." },
              { title: "Commission Rate", desc: "Validators charge 4-35% of rewards. Lower is not always better since it must cover operational costs for sustainability." },
              { title: "Slashing History", desc: "Check for any past slashing events. A clean record indicates responsible operation and proper infrastructure." },
              { title: "Geographic Distribution", desc: "Validators operating from diverse locations improve network resilience and reduce correlated failure risks." },
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
