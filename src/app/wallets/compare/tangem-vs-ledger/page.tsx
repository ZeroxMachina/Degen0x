import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Tangem vs Ledger (${CURRENT_YEAR}) - NFC Cards vs USB Hardware Wallet | ${SITE_NAME}`,
  description: `Tangem vs Ledger hardware wallet comparison for ${CURRENT_YEAR}. NFC cards vs USB devices, security models, ease of use, and coin support compared.`,
  alternates: { canonical: "/wallets/compare/tangem-vs-ledger" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const items = [
  { name: "Tangem", slug: "tangem", rating: 4.3, affiliateUrl: "#", features: { "Form Factor": "NFC smart cards", Price: "From $55 (3 cards)", Connection: "NFC tap", Coins: "7,000+", "Secure Element": "Yes (EAL6+)", Battery: "None needed", Screen: "Phone display", Backup: "Backup cards", "Open Source": "Partially", "Mobile App": "Required" } },
  { name: "Ledger", slug: "ledger", rating: 4.7, affiliateUrl: "#", features: { "Form Factor": "USB device", Price: "From $79", Connection: "USB-C / Bluetooth", Coins: "5,500+", "Secure Element": "Yes (EAL5+)", Battery: "Yes (Nano X)", Screen: "On-device", Backup: "24-word seed phrase", "Open Source": "Partially", "Mobile App": "Ledger Live" } },
];

const faqs = [
  { question: "Is Tangem as secure as Ledger?", answer: "Both use certified secure element chips. The security architectures differ but both protect against key extraction. Tangem's no-seed-phrase approach eliminates a common attack vector, while Ledger's on-device screen prevents phone-based display attacks. Both have independent audits." },
  { question: "What if I lose my Tangem cards?", answer: "Tangem comes in sets of 2-3 cards that back each other up. Lose one and the others still work. Lose all cards and funds are lost — there is no seed phrase recovery. Store at least one backup card in a separate secure location." },
  { question: "Which is better for DeFi?", answer: "Ledger has better DeFi support through Ledger Live's dApp access and integration with browser wallets like MetaMask and Rabby. Tangem connects to dApps via WalletConnect but the experience is less mature. For heavy DeFi use, Ledger is better." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Compare', item: 'https://degen0x.com/wallets/compare' },
    { '@type': 'ListItem', position: 4, name: 'Tangem Vs Ledger', },
  ],
};

export default function TangemVsLedgerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="wallets"
      />      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Wallets", href: "/wallets" }, { label: "Compare", href: "/wallets/compare" }, { label: "Tangem vs Ledger", href: "/wallets/compare/tangem-vs-ledger" }]} />
      <AffiliateDisclosure />
      <header className="mb-8"><h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">Tangem vs Ledger ({CURRENT_YEAR})</h1><p className="text-[var(--color-text-secondary)]">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p></header>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">Tangem and Ledger represent fundamentally different hardware wallet designs. Tangem uses NFC smart cards you tap against your phone, while Ledger uses USB devices with secure element chips and on-device screens. This comparison examines which approach better suits different users and use cases.</p>
      <section className="mb-10"><ComparisonTable items={items} features={["Form Factor", "Price", "Connection", "Coins", "Secure Element", "Battery", "Screen", "Backup", "Open Source", "Mobile App"]} title="Tangem vs Ledger" /></section>
      <div className="prose-crypto mb-10">
        <p>Tangem&apos;s card form factor is revolutionary for portability — cards fit in your physical wallet, require no batteries, and connect via NFC tap. The three-card set provides built-in backup without seed phrases. Ledger offers traditional on-device screen verification, broader ecosystem support through Ledger Live&apos;s extensive app catalog, and more mature third-party wallet integration for DeFi access through MetaMask and Rabby.</p>
        <p>Tangem excels for users who want simplicity and portability above all else. The tap-to-sign experience is the fastest hardware wallet interaction available. Ledger excels for users who want maximum control with on-device transaction verification, broader DeFi integration, and the Ledger Live ecosystem. For everyday spending and mobile-first users, Tangem wins. For comprehensive portfolio management and DeFi power use, Ledger has the edge.</p>
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
        </div><div className="grid md:grid-cols-2 gap-4"><Link href="/wallets/best/hardware" className="glass-subtle p-4 glass-hover"><span className="text-xs text-[var(--color-primary)]">Best Of</span><h3 className="text-sm font-semibold text-[var(--color-text)]">Best Hardware Wallets</h3></Link><Link href="/wallets/compare/software-vs-hardware" className="glass-subtle p-4 glass-hover"><span className="text-xs text-[var(--color-secondary)]">Compare</span><h3 className="text-sm font-semibold text-[var(--color-text)]">Software vs Hardware Wallets</h3></Link></div></section>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Wallets/compare/tangem Vs Ledger", "description": "Crypto content on degen0x", "url": "https://degen0x.com/wallets/compare/tangem-vs-ledger"}) }} />
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
