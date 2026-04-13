import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `MetaMask vs Rabby (2026) - Which Wallet Is Better? | degen0x`,
  description: `MetaMask vs Rabby wallet comparison for ${CURRENT_YEAR}. Transaction simulation, security features, multi-chain support, and dApp compatibility compared.`,
  alternates: { canonical: "/wallets/compare/metamask-vs-rabby" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const items = [
  { name: "MetaMask", slug: "metamask", rating: 4.5, affiliateUrl: "#", features: { Type: "Extension + mobile", Price: "Free", "Tx Simulation": "Via Snaps only", "Open Source": "Yes", "Auto Chain Switch": "No", "Risk Alerts": "Basic", "dApp Compatibility": "Universal", "Mobile App": "Yes", Snaps: "Yes", "Hardware Wallet": "Ledger, Trezor" } },
  { name: "Rabby", slug: "rabby", rating: 4.6, affiliateUrl: "#", features: { Type: "Extension + mobile", Price: "Free", "Tx Simulation": "Built-in", "Open Source": "Yes", "Auto Chain Switch": "Yes", "Risk Alerts": "Advanced", "dApp Compatibility": "Very good", "Mobile App": "Yes", Snaps: "No", "Hardware Wallet": "Ledger, Trezor, GridPlus" } },
];

const faqs = [
  { question: "Should I switch from MetaMask to Rabby?", answer: "If you frequently interact with DeFi and want built-in transaction simulation, Rabby is worth trying. You can import your MetaMask seed phrase into Rabby. Many users run both — Rabby for DeFi with its security features, and MetaMask as a backup for dApps that require it." },
  { question: "Is Rabby as secure as MetaMask?", answer: "Both are open source and support hardware wallets. Rabby adds transaction simulation and contract risk assessment that MetaMask lacks. MetaMask has a longer track record and larger security research community. Both are reasonable for security-conscious users." },
  { question: "Does Rabby work with all dApps?", answer: "Rabby works with the vast majority of dApps through standard Web3 provider injection. In rare cases, dApps checking specifically for MetaMask may not detect Rabby. Rabby includes a MetaMask compatibility mode for these situations." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Compare', item: 'https://degen0x.com/wallets/compare' },
    { '@type': 'ListItem', position: 4, name: 'Metamask Vs Rabby', },
  ],
};

export default function MetaMaskVsRabbyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="wallets"
      />      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Wallets", href: "/wallets" }, { label: "Compare", href: "/wallets/compare" }, { label: "MetaMask vs Rabby", href: "/wallets/compare/metamask-vs-rabby" }]} />
      <AffiliateDisclosure />
      <header className="mb-8"><h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">MetaMask vs Rabby ({CURRENT_YEAR})</h1><p className="text-[var(--color-text-secondary)]">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p></header>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">MetaMask is the established industry standard with the broadest dApp ecosystem, while Rabby is the security-focused challenger with transaction simulation and risk assessment features. This comparison helps you decide which fits your DeFi workflow best.</p>
      <section className="mb-10"><ComparisonTable items={items} features={["Type", "Price", "Tx Simulation", "Open Source", "Auto Chain Switch", "Risk Alerts", "dApp Compatibility", "Mobile App", "Snaps", "Hardware Wallet"]} title="MetaMask vs Rabby" /></section>
      <div className="prose-crypto mb-10">
        <p>Rabby&apos;s standout feature is pre-transaction simulation. Before you sign any transaction, Rabby shows you exactly what tokens will leave and enter your wallet, including approval changes. This catches common attack vectors that MetaMask misses. Rabby also auto-detects which chain a dApp uses and switches automatically, eliminating manual chain-switching friction that MetaMask users experience frequently when moving between Ethereum, Arbitrum, and other networks.</p>
        <p>MetaMask&apos;s advantage is ecosystem dominance and the Snaps extensibility system that allows third-party developers to add capabilities. Its universal dApp compatibility means you never have to worry about a protocol not working. For security-conscious DeFi users, Rabby&apos;s built-in protections are compelling and increasingly making it the preferred choice among experienced users. For maximum compatibility guarantees, MetaMask remains the safest bet.</p>
      </div>
      <FAQSection faqs={faqs} />
      <section className="mt-12"><h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Related Content</h2>
        {/* editorial-voice */}
        <div style={{ background: '#0a1a0f', border: '1px solid #14532d', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🛡️</span>
            <strong style={{ color: '#22c55e', fontSize: 15 }}>Security Verdict</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            The wallet space moves fast. We update our reviews when significant firmware updates or security incidents occur, not on a fixed schedule.
          </p>
        </div><div className="grid md:grid-cols-2 gap-4"><Link href="/wallets/best/ethereum" className="glass-subtle p-4 glass-hover"><span className="text-xs text-[var(--color-primary)]">Best Of</span><h3 className="text-sm font-semibold text-[var(--color-text)]">Best Ethereum Wallets</h3></Link><Link href="/wallets/learn/phishing-protection-guide" className="glass-subtle p-4 glass-hover"><span className="text-xs text-[var(--color-secondary)]">Guide</span><h3 className="text-sm font-semibold text-[var(--color-text)]">Phishing Protection Guide</h3></Link></div></section>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Wallets/compare/metamask Vs Rabby", "description": "Crypto content on degen0x", "url": "https://degen0x.com/wallets/compare/metamask-vs-rabby", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/wallets" style={{
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
            All Wallets
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
            Compare Wallets
          </Link>
        </div>
      </div>
    </div>
  );
}
