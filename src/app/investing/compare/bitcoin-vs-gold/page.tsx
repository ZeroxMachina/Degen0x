import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Bitcoin vs Gold (${CURRENT_YEAR}) - Investment Comparison | ${SITE_NAME}`,
  description: `Bitcoin vs Gold as a store of value in ${CURRENT_YEAR}. Compare scarcity, returns, volatility, and portfolio diversification benefits.`,
  alternates: { canonical: "/investing/compare/bitcoin-vs-gold" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const items = [
  { name: "Bitcoin (BTC)", slug: "bitcoin", rating: 4.8, affiliateUrl: "#", features: { "Asset Type": "Digital / Cryptocurrency", "Supply Cap": "21 million (mathematically fixed)", "Annual Returns (10yr avg)": "~100%+ (highly variable)", "Volatility": "High (50-80% drawdowns)", "Portability": "Instant global transfer", "Divisibility": "100 million satoshis per BTC", "Storage Cost": "Near zero (self-custody)", "Regulatory Status": "Commodity (US)", "ETF Available": "Yes", "Track Record": "15+ years" } },
  { name: "Gold", slug: "gold", rating: 4.5, affiliateUrl: "#", features: { "Asset Type": "Physical commodity", "Supply Cap": "~2% annual mining increase", "Annual Returns (10yr avg)": "~5-8%", "Volatility": "Moderate (20-30% drawdowns)", "Portability": "Physical requires logistics", "Divisibility": "Limited by physical form", "Storage Cost": "Vault/insurance costs", "Regulatory Status": "Established commodity", "ETF Available": "Yes (GLD, IAU)", "Track Record": "5,000+ years" } },
];

const faqs = [
  { question: "Is Bitcoin digital gold?", answer: "Bitcoin shares key properties with gold: scarcity, durability, and fungibility. However, Bitcoin's fixed mathematical supply is arguably superior to gold's expandable supply. Bitcoin's volatility is currently much higher than gold's, making it a less reliable short-term store of value but potentially superior long-term." },
  { question: "Should I hold Bitcoin or gold?", answer: "Many investors hold both. Gold provides stability, inflation protection, and a millennia-long track record. Bitcoin offers higher growth potential, digital portability, and programmatic scarcity. A portfolio with both benefits from gold's stability and Bitcoin's growth, with typical allocations of 5-10% each." },
  { question: "Will Bitcoin replace gold?", answer: "Bitcoin is unlikely to fully replace gold due to gold's deep cultural and industrial use. However, Bitcoin is capturing an increasing share of the store-of-value market, particularly among younger investors. The two assets may coexist serving similar but not identical portfolio functions." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Investing', item: 'https://degen0x.com/investing' },
    { '@type': 'ListItem', position: 3, name: 'Compare', item: 'https://degen0x.com/investing/compare' },
    { '@type': 'ListItem', position: 4, name: 'Bitcoin Vs Gold', },
  ],
};

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="investing"
      />      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Investing", href: "/investing" }, { label: "Compare", href: "/investing/compare" }, { label: "Bitcoin vs Gold" }]} />
      <AffiliateDisclosure />
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">Bitcoin vs Gold ({CURRENT_YEAR})</h1>
        <p className="text-[var(--color-text-secondary)]">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      </header>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">Bitcoin is often called digital gold due to its scarcity and store-of-value properties. But how does it actually compare to physical gold as an investment? This analysis examines both assets across returns, risk, portability, and portfolio role to help you decide how to allocate between them.</p>
      <section className="mb-10">
        <ComparisonTable items={items} features={["Asset Type", "Supply Cap", "Annual Returns (10yr avg)", "Volatility", "Portability", "Divisibility", "Storage Cost", "Regulatory Status", "ETF Available", "Track Record"]} title="Bitcoin vs Gold" />
      </section>
      <div className="prose-crypto mb-10">
        <p>Bitcoin&apos;s mathematical scarcity — exactly 21 million coins ever — is arguably superior to gold&apos;s physical scarcity, which expands approximately 2% annually through mining. Bitcoin can be sent anywhere in the world in minutes, stored at negligible cost, and divided into fractions. Gold requires physical storage, insurance, and faces logistical challenges for transfer. Bitcoin ETFs now provide the same convenient investment access that gold ETFs have offered for decades.</p>
        <p>Gold&apos;s advantages are its five-thousand-year track record as a store of value, lower volatility suitable for wealth preservation, and established regulatory and institutional frameworks. Gold has proven itself through every kind of economic crisis, while Bitcoin has only existed during a largely favorable monetary environment. For investors with a long time horizon, a combined allocation to both assets may provide the best risk-adjusted exposure to the store-of-value thesis across both traditional and digital paradigms.</p>
      </div>
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Related Content</h2>
        {/* editorial-voice */}
        <div style={{ background: '#041a12', border: '1px solid #064e3b', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📈</span>
            <strong style={{ color: '#10b981', fontSize: 15 }}>Research Perspective</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Tokenomics analysis is our edge. Most retail investors skip the vesting schedule and supply inflation data that often determines long-term price action.
          </p>
        </div>
        <ul className="space-y-2">
          <li><Link href="/investing/learn/bitcoin-etf-complete-guide" className="text-blue-600 hover:underline">Bitcoin ETF Complete Guide</Link></li>
          <li><Link href="/investing/learn/crypto-vs-stocks" className="text-blue-600 hover:underline">Crypto vs Stocks</Link></li>
        </ul>
      </section>
      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Investing/compare/bitcoin Vs Gold", "description": "Crypto content on degen0x", "url": "https://degen0x.com/investing/compare/bitcoin-vs-gold", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
