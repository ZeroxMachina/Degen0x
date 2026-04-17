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
  title: `Maple vs Goldfinch 2026: Institutional DeFi Lending Compared`,
  description: `Compare Maple Finance vs Goldfinch in ${CURRENT_YEAR}. Analyze institutional lending approaches, yields, risk profiles, and borrower types.`,
  alternates: { canonical: "/defi-lending/compare/maple-vs-goldfinch" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const items: ComparisonItem[] = [
  { name: "Maple Finance", slug: "maple", rating: 4.1, affiliateUrl: "https://degen0x.com/go/maple", features: { "TVL": "$100M+", "Focus": "Institutional credit", "Borrowers": "Crypto-native institutions", "Collateral": "Over + undercollateralized", "KYC Required": "For borrowers", "Chains": "Ethereum, Solana, Base", "Governance": "MPL token", "Unique Feature": "Pool delegates curate loans" } },
  { name: "Goldfinch", slug: "goldfinch", rating: 4.0, affiliateUrl: "https://degen0x.com/go/goldfinch", features: { "TVL": "$80M+", "Focus": "Real-world emerging market credit", "Borrowers": "Global businesses", "Collateral": "Off-chain assets", "KYC Required": "UID verification", "Chains": "Ethereum", "Governance": "GFI token", "Unique Feature": "Trust through consensus model" } },
];

const features = ["TVL", "Focus", "Borrowers", "Collateral", "KYC Required", "Chains", "Governance", "Unique Feature"];

const faqs: FAQ[] = [
  { question: "Which protocol has higher yields?", answer: "Goldfinch typically offers higher yields (8-12% APY) due to emerging market credit risk premiums. Maple yields vary by pool but generally range from 5-10%. Higher Goldfinch yields reflect higher credit and country risk from emerging market borrowers." },
  { question: "Are these protocols safe for retail investors?", answer: "Both carry meaningful credit risk that differs from traditional DeFi lending. Defaults have occurred on both platforms. Retail investors should understand they are exposed to borrower default risk, not just smart contract risk. Diversification across pools and protocols is important." },
  { question: "Do I need KYC to lend?", answer: "Goldfinch requires UID verification for all participants. Maple allows permissionless lending to some pools but may require KYC for others depending on pool delegate requirements. Check specific pool requirements before committing funds." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Defi Lending', item: 'https://degen0x.com/defi-lending' },
    { '@type': 'ListItem', position: 3, name: 'Compare', item: 'https://degen0x.com/defi-lending/compare' },
    { '@type': 'ListItem', position: 4, name: 'Maple Vs Goldfinch', },
  ],
};

export default function MapleVsGoldfinchPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="defi-lending"
      />      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "DeFi Lending", href: "/defi-lending" }, { label: "Compare", href: "/defi-lending/compare/maple-vs-goldfinch" }, { label: "Maple vs Goldfinch", href: "/defi-lending/compare/maple-vs-goldfinch" }]} />
      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Maple vs Goldfinch: Full Comparison ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Maple Finance and Goldfinch both facilitate undercollateralized lending but serve fundamentally different markets. Maple focuses on institutional crypto-native borrowers, while Goldfinch extends credit to real-world businesses in emerging markets. This comparison examines yields, risks, and which is more suitable for different investor profiles.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-[var(--color-text)]">The short answer:</strong> Choose Maple for institutional credit exposure with crypto-native borrowers and more liquid positions. Choose Goldfinch for real-world asset yield diversification with emerging market exposure and potentially higher returns.
        </p>
      </div>
      <section className="mb-12">
        <ComparisonTable items={items} features={features} title="Maple vs Goldfinch Feature Comparison" />
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
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Credit Risk Profiles</h3>
        <p className="text-[var(--color-text-secondary)]">Maple's borrowers are typically crypto trading firms, market makers, and DeFi protocols with revenue-generating businesses. Credit assessment relies on pool delegates who evaluate borrower financials. Goldfinch's borrowers are fintech lenders and businesses in emerging markets like Africa, Southeast Asia, and Latin America. Credit risk is assessed through the trust through consensus mechanism where backers stake capital to signal confidence in specific borrowers.</p>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Default History</h3>
        <p className="text-[var(--color-text-secondary)]">Both protocols have experienced defaults. Maple faced significant defaults during the 2022 crypto credit crisis when several institutional borrowers including Orthogonal Trading defaulted on loans. Goldfinch has experienced smaller defaults from individual emerging market borrowers. Both protocols have since tightened underwriting standards and improved risk management processes. Understanding this default history is essential when evaluating expected returns versus actual realized returns.</p>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Liquidity Considerations</h3>
        <p className="text-[var(--color-text-secondary)]">Maple pools generally offer more liquidity flexibility with periodic withdrawal windows. Goldfinch positions can be less liquid as underlying loans have fixed terms that may extend months or years. Goldfinch does have a senior pool that provides some liquidity, and secondary markets exist for some positions. Evaluate your liquidity needs carefully before committing to either platform, as early exit may not always be possible at favorable terms.</p>
      </section>
      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Defi Lending/compare/maple Vs Goldfinch", "description": "Crypto content on degen0x", "url": "https://degen0x.com/defi-lending/compare/maple-vs-goldfinch", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
        title="Maple vs Goldfinch — degen0x"
        url="/defi-lending/compare/maple-vs-goldfinch"
        description="A head-to-head look at Maple and Goldfinch: product, fees, risk, and who each one is built for."
        items={["Maple", "Goldfinch"]}
      />
      <MethodologyBlock variant="compare" />
    </div>
  );
}
