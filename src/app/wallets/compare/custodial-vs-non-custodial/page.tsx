import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";
import RelatedContent from '@/components/RelatedContent';
import MethodologyBlock from '@/components/MethodologyBlock';
import CompareSchema from '@/components/CompareSchema';

export const metadata: Metadata = {
  title: `Custodial vs Non-Custodial Wallets (2026) | degen0x`,
  description: `Custodial vs non-custodial wallet comparison for ${CURRENT_YEAR}. Key ownership, security, recovery options, DeFi access, and privacy compared.`,
  alternates: { canonical: "/wallets/compare/custodial-vs-non-custodial" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const items = [
  { name: "Custodial Wallets", slug: "custodial", rating: 3.8, affiliateUrl: "#", features: { "Key Ownership": "Provider holds keys", "Account Recovery": "Password reset", "KYC Required": "Yes", "DeFi Access": "Limited", "Counterparty Risk": "High", "Regulatory Protection": "Some", "Ease of Use": "Very easy", Privacy: "Low (KYC required)", Control: "Provider controls", Examples: "Coinbase, Binance" } },
  { name: "Non-Custodial Wallets", slug: "software", rating: 4.5, affiliateUrl: "#", features: { "Key Ownership": "You hold keys", "Account Recovery": "Seed phrase only", "KYC Required": "No", "DeFi Access": "Full access", "Counterparty Risk": "None", "Regulatory Protection": "None", "Ease of Use": "Moderate curve", Privacy: "High", Control: "Full user control", Examples: "MetaMask, Ledger, Phantom" } },
];

const faqs = [
  { question: "Which is safer?", answer: "It depends on the user. Non-custodial eliminates counterparty risk but requires responsible key management. Custodial offers account recovery but exposes you to exchange hacks and failures. For users who can securely store a seed phrase, non-custodial is safer. For those who might lose a seed phrase, a reputable custodian may actually be safer." },
  { question: "Can I switch from custodial to non-custodial?", answer: "Yes. Withdraw your crypto from a custodial exchange to a non-custodial wallet address at any time. It is simply a blockchain transfer. The reverse is equally straightforward — deposit from your non-custodial wallet to an exchange address." },
  { question: "What does 'not your keys, not your coins' mean?", answer: "This means if you do not hold private keys, you do not truly own your crypto. In custodial arrangements, the custodian controls the assets and could restrict access. Only non-custodial wallets give cryptographic proof of ownership that no third party can revoke." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Compare', item: 'https://degen0x.com/wallets/compare' },
    { '@type': 'ListItem', position: 4, name: 'Custodial Vs Non Custodial', },
  ],
};

export default function CustodialVsNonCustodialPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="wallets"
      />      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Wallets", href: "/wallets" }, { label: "Compare", href: "/wallets/compare" }, { label: "Custodial vs Non-Custodial", href: "/wallets/compare/custodial-vs-non-custodial" }]} />
      <AffiliateDisclosure />
      <header className="mb-8"><h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">Custodial vs Non-Custodial Wallets ({CURRENT_YEAR})</h1><p className="text-[var(--color-text-secondary)]">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p></header>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">The custody model determines who controls your crypto. Custodial wallets let a third party manage your keys like a bank, while non-custodial wallets give you full control and responsibility. This fundamental choice affects security, convenience, and sovereignty over your digital assets.</p>
      <section className="mb-10"><ComparisonTable items={items} features={["Key Ownership", "Account Recovery", "KYC Required", "DeFi Access", "Counterparty Risk", "Regulatory Protection", "Ease of Use", "Privacy", "Control", "Examples"]} title="Custodial vs Non-Custodial" /></section>
      <div className="prose-crypto mb-10">
        <p>Custodial wallets like exchange accounts manage your private keys on your behalf. You access funds through username and password, and can recover your account if you forget credentials. The major risk is counterparty exposure — if the custodian gets hacked, goes bankrupt, or freezes your account, you lose access. Events like the FTX collapse demonstrate this risk in stark terms, where billions in user assets were lost.</p>
        <p>Non-custodial wallets like MetaMask, Phantom, and Ledger give you sole control through a seed phrase. No third party can freeze your funds or deny access. The responsibility is entirely yours — lose your seed phrase and no one can help you recover. Non-custodial wallets provide full DeFi access, require no personal information, and represent the core crypto principle of financial self-sovereignty. For anyone serious about crypto, learning non-custodial is essential.</p>
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
        </div><div className="grid md:grid-cols-2 gap-4"><Link href="/wallets/best/custodial" className="glass-subtle p-4 glass-hover"><span className="text-xs text-[var(--color-primary)]">Best Of</span><h3 className="text-sm font-semibold text-[var(--color-text)]">Best Custodial Wallets</h3></Link><Link href="/wallets/learn/what-is-a-crypto-wallet" className="glass-subtle p-4 glass-hover"><span className="text-xs text-[var(--color-secondary)]">Guide</span><h3 className="text-sm font-semibold text-[var(--color-text)]">What Is a Crypto Wallet?</h3></Link></div></section>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Wallets/compare/custodial Vs Non Custodial", "description": "Crypto content on degen0x", "url": "https://degen0x.com/wallets/compare/custodial-vs-non-custodial", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
      <CompareSchema
        title="Custodial vs Non Custodial — degen0x"
        url="/wallets/compare/custodial-vs-non-custodial"
        description="A head-to-head look at Custodial and Non Custodial: product, fees, risk, and who each one is built for."
        items={["Custodial", "Non Custodial"]}
      />
      <MethodologyBlock variant="compare" />
      <RelatedContent category="tools" currentSlug="/wallets/compare/custodial-vs-non-custodial" />
    </div>
  );
}
