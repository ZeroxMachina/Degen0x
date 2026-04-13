import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { ComparisonItem, FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: `Aave vs Compound ${CURRENT_YEAR}: Which DeFi Lending Protocol Is Better?`,
  description: `Detailed comparison of Aave vs Compound in ${CURRENT_YEAR}. Compare yields, features, security, supported assets, and multi-chain availability.`,
  alternates: { canonical: "/defi-lending/compare/aave-vs-compound" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const items: ComparisonItem[] = [
  { name: "Aave", slug: "aave", rating: 4.8, affiliateUrl: "https://degen0x.com/go/aave", features: { "TVL": "$15B+", "Chains": "10+", "Supported Assets": "100+", "Rate Options": "Variable + Stable", "Flash Loans": "Yes (0.05% fee)", "Governance Token": "AAVE", "Architecture": "Pool-based V3", "Unique Feature": "eMode, Isolation Mode" } },
  { name: "Compound", slug: "compound", rating: 4.6, affiliateUrl: "https://degen0x.com/go/compound", features: { "TVL": "$3B+", "Chains": "3", "Supported Assets": "20+", "Rate Options": "Variable only", "Flash Loans": "No", "Governance Token": "COMP", "Architecture": "Isolated markets V3", "Unique Feature": "Single-asset risk isolation" } },
];

const features = ["TVL", "Chains", "Supported Assets", "Rate Options", "Flash Loans", "Governance Token", "Architecture", "Unique Feature"];

const faqs: FAQ[] = [
  { question: "Is Aave or Compound better for beginners?", answer: "Compound V3 is slightly more beginner-friendly due to its simpler single-asset market model. However, Aave's wider asset selection and multi-chain availability make it more versatile as you grow more experienced. Both have clean interfaces suitable for newcomers to DeFi." },
  { question: "Which protocol has better yields?", answer: "Yields vary by asset and market conditions. Aave tends to have more competitive rates for major assets due to higher utilization from its larger user base. Compound sometimes offers better rates on specific assets. We recommend checking current rates on both before depositing." },
  { question: "Can I use both Aave and Compound?", answer: "Absolutely. Many DeFi users diversify across both protocols to spread smart contract risk and access the best rates for different assets. Using Morpho can optimize rates across both simultaneously." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Defi Lending', item: 'https://degen0x.com/defi-lending' },
    { '@type': 'ListItem', position: 3, name: 'Compare', item: 'https://degen0x.com/defi-lending/compare' },
    { '@type': 'ListItem', position: 4, name: 'Aave Vs Compound', },
  ],
};

export default function AaveVsCompoundPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="defi-lending"
      />      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "DeFi Lending", href: "/defi-lending" }, { label: "Compare", href: "/defi-lending/compare/aave-vs-compound" }, { label: "Aave vs Compound", href: "/defi-lending/compare/aave-vs-compound" }]} />
      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Aave vs Compound: Full Comparison ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Aave and Compound are the two pillars of DeFi lending, with a combined TVL exceeding $18 billion. Both protocols allow users to earn yield by supplying assets and borrow against crypto collateral, but they differ significantly in architecture, feature set, and multi-chain strategy. This comparison breaks down every meaningful difference to help you choose the right protocol for your needs.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-[var(--color-text)]">The short answer:</strong> Aave is better for users who want maximum flexibility, multi-chain access, and advanced features like flash loans. Compound is better for users who prioritize simplicity and the risk isolation benefits of single-asset markets. Both are excellent protocols with strong security track records.
        </p>
      </div>
      <section className="mb-12">
        <ComparisonTable items={items} features={features} title="Aave vs Compound Feature Comparison" />
      </section>
      <section className="mb-12 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Detailed Analysis</h2>
        {/* editorial-voice */}
        <div style={{ background: '#1a0f2e', border: '1px solid #3b1f5e', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>⚠️</span>
            <strong style={{ color: '#c084fc', fontSize: 15 }}>Risk Assessment</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Our DeFi researchers monitor governance proposals and treasury health, not just headline rates. A protocol's governance decisions reveal more than its TVL.
          </p>
        </div>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Security & Track Record</h3>
        <p className="text-[var(--color-text-secondary)]">Both protocols have excellent security track records with no major exploits of their core lending contracts. Compound has a slightly longer history (since 2018 vs Aave's 2020 V2 launch), but Aave has been battle-tested with higher TVL. Both maintain extensive audit programs and bug bounties.</p>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Multi-Chain Availability</h3>
        <p className="text-[var(--color-text-secondary)]">Aave clearly wins on multi-chain availability with 10+ chain deployments versus Compound's 3. If you need to lend or borrow on Arbitrum, Optimism, Base, Polygon, or Avalanche, Aave is the more accessible choice. Compound is available on Ethereum, Arbitrum, and Base.</p>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Architecture Philosophy</h3>
        <p className="text-[var(--color-text-secondary)]">Aave V3 uses a pool-based model where all assets share liquidity within a market. Compound V3 uses isolated single-asset markets where each base asset has its own separate market. Compound's approach provides better risk isolation but less capital efficiency. Aave's approach provides more flexibility and composability.</p>
      </section>
      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Defi Lending/compare/aave Vs Compound", "description": "Crypto content on degen0x", "url": "https://degen0x.com/defi-lending/compare/aave-vs-compound", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
  );
}
