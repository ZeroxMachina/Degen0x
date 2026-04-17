import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { ComparisonItem, FAQ } from "@/lib/types";
import MethodologyBlock from '@/components/MethodologyBlock';
import CompareSchema from '@/components/CompareSchema';

export const metadata: Metadata = {
  title: `Yearn vs Convex 2026: Which Yield Aggregator Is Better?`,
  description: `Detailed comparison of Yearn vs Convex in ${CURRENT_YEAR}. Compare yield strategies, CRV incentives, risk profiles, and which yield aggregator maximizes your DeFi returns.`,
  alternates: { canonical: "/defi-lending/compare/yearn-vs-convex" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const items: ComparisonItem[] = [
  { name: "Yearn Finance", slug: "yearn", rating: 4.6, affiliateUrl: "https://degen0x.com/go/yearn", features: { "TVL": "$1B+", "Strategy Type": "Multi-protocol yield vaults", "Chains": "Ethereum, Arbitrum, Polygon", "Complexity": "Simple (deposit & earn)", "Fee Structure": "20% performance + 2% mgmt", "Governance Token": "YFI", "Best For": "Passive yield on many assets", "Unique Feature": "Auto-compounding multi-strategy vaults" } },
  { name: "Convex Finance", slug: "convex", rating: 4.7, affiliateUrl: "https://degen0x.com/go/convex", features: { "TVL": "$2B+", "Strategy Type": "Curve/Frax boost aggregation", "Chains": "Ethereum, Arbitrum", "Complexity": "Moderate", "Fee Structure": "16% on CRV rewards", "Governance Token": "CVX", "Best For": "Maximizing Curve LP yields", "Unique Feature": "Boosted CRV rewards without locking" } },
];

const features = ["TVL", "Strategy Type", "Chains", "Complexity", "Fee Structure", "Governance Token", "Best For", "Unique Feature"];

const faqs: FAQ[] = [
  { question: "Is Yearn or Convex better for stablecoin yields?", answer: "For stablecoin yields specifically through Curve pools, Convex typically offers higher returns because it provides boosted CRV rewards. Yearn vaults often use Convex as one of their underlying strategies, adding a layer of diversification but also an extra fee layer. If you want maximum yield on a Curve stablecoin pool, deposit directly on Convex. If you want simpler, diversified stablecoin yield, Yearn vaults are easier." },
  { question: "Can I use both Yearn and Convex?", answer: "Yes. Many users deposit Curve LP tokens on Convex for maximum CRV/CVX rewards and use Yearn vaults for other assets where Yearn's multi-strategy approach provides better risk-adjusted returns. They serve slightly different purposes and complement each other well in a diversified DeFi yield strategy." },
  { question: "What are the risks of yield aggregators?", answer: "Both Yearn and Convex carry smart contract risk from their own contracts plus the underlying protocols they interact with (Curve, Aave, Compound, etc.). Strategy risk exists if a yield strategy underperforms or encounters unexpected market conditions. Governance risk is present since both protocols make decisions through token voting. Yearn has survived multiple exploits and recovered, demonstrating resilience." },
  { question: "What is the Curve Wars and how does Convex fit in?", answer: "The Curve Wars refers to the competition among protocols to accumulate veCRV voting power, which determines CRV emission allocation to different Curve pools. Convex controls the largest share of veCRV, allowing it to direct significant CRV rewards to pools that benefit its depositors. CVX token holders can vote on these allocations through Convex's governance system." },
  { question: "Are Yearn vault fees worth it?", answer: "Yearn charges a 20% performance fee and 2% management fee, which is significant. However, the vaults auto-compound rewards, automatically shift between strategies to optimize returns, and save you gas costs from manual harvesting. For small to medium portfolios, the gas savings alone can justify the fees. For very large deposits, direct protocol interaction may be more cost-efficient." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Defi Lending', item: 'https://degen0x.com/defi-lending' },
    { '@type': 'ListItem', position: 3, name: 'Compare', item: 'https://degen0x.com/defi-lending/compare' },
    { '@type': 'ListItem', position: 4, name: 'Yearn Vs Convex', },
  ],
};

export default function YearnVsConvexPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="defi-lending"
      />      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "DeFi Lending", href: "/defi-lending" }, { label: "Compare", href: "/defi-lending/compare/aave-vs-compound" }, { label: "Yearn vs Convex", href: "/defi-lending/compare/yearn-vs-convex" }]} />
      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Yearn vs Convex: Full Comparison ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Yearn Finance and Convex Finance are two of DeFi&apos;s most important yield aggregation protocols. Yearn offers automated multi-strategy vaults across various assets and protocols. Convex specializes in maximizing Curve Finance yields by aggregating CRV boost power. While they overlap in the Curve ecosystem, their approaches and optimal use cases differ significantly.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-[var(--color-text)]">The short answer:</strong> Use Convex if you are focused on maximizing Curve LP yields and want boosted CRV rewards without locking your own CRV. Use Yearn if you want a hands-off yield experience across multiple assets and protocols with automatic strategy rotation.
        </p>
      </div>
      <section className="mb-12">
        <ComparisonTable items={items} features={features} title="Yearn vs Convex Feature Comparison" />
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
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Strategy Approach</h3>
        <p className="text-[var(--color-text-secondary)]">Yearn vaults employ multiple strategies simultaneously, dynamically allocating deposits across different protocols and yield sources. A single Yearn vault might use Curve, Aave, Compound, and other protocols depending on where yields are highest. Convex focuses specifically on the Curve ecosystem, providing boosted CRV and CVX rewards to Curve LP depositors. Yearn is broader; Convex is deeper within its niche.</p>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Fee Structure and Value</h3>
        <p className="text-[var(--color-text-secondary)]">Yearn&apos;s 20% performance fee plus 2% management fee is higher than Convex&apos;s 16% fee on CRV rewards. However, Yearn&apos;s fees cover auto-compounding, strategy management, and gas costs that you would otherwise pay yourself. Convex&apos;s lower fee reflects its more focused service. For small portfolios (under $10,000), Yearn&apos;s bundled approach often provides better net returns after gas savings.</p>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Governance and Tokenomics</h3>
        <p className="text-[var(--color-text-secondary)]">YFI has a fixed supply of 36,666 tokens, making it one of the scarcest DeFi governance tokens. CVX&apos;s value proposition is tied to its ability to control CRV emissions through vlCVX voting. Both tokens grant governance power, but CVX additionally provides direct economic utility in the Curve Wars ecosystem. CVX holders can vote on which Curve pools receive boosted emissions, making it attractive to protocols seeking liquidity.</p>
      </section>
      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Defi Lending/compare/yearn Vs Convex", "description": "Crypto content on degen0x", "url": "https://degen0x.com/defi-lending/compare/yearn-vs-convex", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
      <CompareSchema
        title="Yearn vs Convex — degen0x"
        url="/defi-lending/compare/yearn-vs-convex"
        description="A head-to-head look at Yearn and Convex: product, fees, risk, and who each one is built for."
        items={["Yearn", "Convex"]}
      />
      <MethodologyBlock variant="compare" />
    </div>
  );
}
