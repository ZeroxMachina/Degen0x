import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { CRYPTO_TOKENS } from "@/data/investing";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


const token = CRYPTO_TOKENS[9];

export const metadata: Metadata = {
  title: `How to Invest in Arbitrum (ARB) ${CURRENT_YEAR} - Complete Guide`,
  description: `Complete Arbitrum investment guide for ${CURRENT_YEAR}. Learn about ARB fundamentals, L2 dominance, DeFi ecosystem, Orbit chains, and how to buy Arbitrum.`,
  alternates: { canonical: "/investing/crypto/arbitrum" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const faqs = [
  { question: "What is Arbitrum?", answer: "Arbitrum is the leading Ethereum Layer 2 network using optimistic rollup technology. It processes transactions off the Ethereum mainnet at much lower costs while inheriting Ethereum's security. Arbitrum has the highest TVL among all L2s and hosts the largest L2 DeFi ecosystem." },
  { question: "Is ARB a good investment?", answer: "ARB is the governance token for Arbitrum DAO, which controls the network treasury and protocol upgrades. The investment case depends on continued L2 adoption, fee revenue growth, and potential future value accrual mechanisms. As a governance-only token currently, its value proposition is tied to the ecosystem's growth." },
  { question: "What are Orbit chains?", answer: "Orbit chains are Layer 3 networks built on top of Arbitrum using the Arbitrum Orbit framework. They allow projects to launch their own dedicated chains that settle to Arbitrum, creating a multi-layered scaling architecture. Gaming and application-specific chains are primary use cases." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Investing', item: 'https://degen0x.com/investing' },
    { '@type': 'ListItem', position: 3, name: 'Crypto', item: 'https://degen0x.com/investing/crypto' },
    { '@type': 'ListItem', position: 4, name: 'Arbitrum', },
  ],
};

export default function ArbitrumPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Arbitrum", href: "/investing/crypto/arbitrum" },
      ]} />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">How to Invest in Arbitrum (ARB) in {CURRENT_YEAR}</h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Arbitrum is the leading Ethereum Layer 2 rollup by TVL, powering the largest L2 DeFi
          ecosystem with fast, cheap Ethereum transactions.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      </header>

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
        <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">Key Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div><p className="text-xs text-[var(--color-text-secondary)]">Ticker</p><p className="text-sm font-semibold text-[var(--color-text)]">{token.ticker}</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Launch Year</p><p className="text-sm font-semibold text-[var(--color-text)]">{token.launchYear}</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Max Supply</p><p className="text-sm font-semibold text-[var(--color-text)]">{token.maxSupply}</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Consensus</p><p className="text-sm font-semibold text-[var(--color-text)]">{token.consensus}</p></div>
        </div>

        <AuthorAttribution
          author="SatoshiGhost"
          role="Lead Researcher"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="investing"
        />

      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What Is Arbitrum?</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Built by Offchain Labs, Arbitrum is an optimistic rollup that batches transactions
          and posts compressed data to Ethereum mainnet. It is fully EVM-compatible, meaning
          existing Ethereum smart contracts can deploy without modification. Arbitrum hosts
          hundreds of DeFi protocols including GMX, Camelot, Radiant, and Pendle, making it
          the most active L2 DeFi ecosystem.
        </p>
        {/* editorial-voice */}
        <div style={{ background: '#041a12', border: '1px solid #064e3b', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📈</span>
            <strong style={{ color: '#10b981', fontSize: 15 }}>Research Perspective</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We are long-term Bitcoin and Ethereum believers. Our analysis of other assets applies the same rigorous framework regardless of personal conviction.
          </p>
        </div>
        <p className="text-[var(--color-text-secondary)]">
          The Arbitrum Orbit framework enables Layer 3 chains to be built on top of Arbitrum,
          creating dedicated execution environments for specific applications like gaming or
          enterprise use cases. The Arbitrum DAO governs the network with one of the largest
          governance treasuries in crypto.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Investment Risks</h2>
        <p className="text-[var(--color-text-secondary)]">
          ARB is currently a governance-only token without direct fee sharing, meaning its value
          does not directly capture the network's revenue. The sequencer remains centralized,
          creating a single point of failure and censorship risk. Competition from other L2s
          (Optimism, Base, zkSync) is intensifying. Large token unlocks from team and investor
          allocations could create selling pressure. The 7-day withdrawal period to Ethereum is
          a UX drawback compared to ZK-rollups.
        </p>
      </section>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Investing/crypto/arbitrum", "description": "Crypto content on degen0x", "url": "https://degen0x.com/investing/crypto/arbitrum", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
