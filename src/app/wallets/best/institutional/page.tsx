import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Best Institutional Crypto Wallets (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `The best institutional crypto wallets for ${CURRENT_YEAR}. Compare Safe, Ledger Enterprise, and GridPlus for DAO treasuries, fund management, and enterprise custody.`,
  alternates: { canonical: "/wallets/best/institutional" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const products = [
  { name: "Safe (Gnosis Safe)", slug: "safe-wallet", rating: 4.6, description: "The industry-standard multisig wallet securing over $100B in assets for DAOs, protocols, and institutional treasuries across 15+ EVM chains.", pros: ["Battle-tested with $100B+ secured", "Highly configurable governance rules", "Open source and multiply audited"], cons: ["EVM chains only", "Higher gas costs per transaction", "Requires technical setup knowledge"], bestFor: "DAO treasuries and on-chain institutional governance", affiliateUrl: "#", category: "wallets" },
  { name: "Ledger Enterprise", slug: "ledger", rating: 4.5, description: "Institutional-grade custody combining Ledger hardware security with governance workflows, policy engines, and compliance tools.", pros: ["Hardware security module foundation", "Governance and policy engine", "Multi-approval workflows"], cons: ["Premium pricing tier", "Requires integration work", "Complex initial setup"], bestFor: "Enterprises needing hardware-secured governance", affiliateUrl: "#", category: "wallets" },
  { name: "GridPlus Lattice1", slug: "gridplus", rating: 4.3, description: "Enterprise hardware wallet with large touchscreen, SafeCard backup storage, and support for complex signing workflows and batch operations.", pros: ["Large touchscreen for verification", "SafeCard backup system", "Batch transaction support"], cons: ["Premium device cost", "Limited non-EVM support", "Niche user community"], bestFor: "Power users and small institutions wanting hardware security", affiliateUrl: "#", category: "wallets" },
];

const faqs = [
  { question: "What makes an institutional wallet different?", answer: "Institutional wallets add governance layers that personal wallets lack: multi-signature requirements, role-based access controls, spending policies with approval thresholds, audit trails, and compliance reporting. They provide dedicated support SLAs, insurance options, and integration APIs for connecting to accounting and portfolio management systems." },
  { question: "Do institutional wallets require KYC?", answer: "On-chain solutions like Safe do not require KYC since anyone can deploy a Safe multisig. Managed institutional custody services require extensive KYC and AML compliance. The choice depends on whether you need regulated custody with insurance and compliance or prefer on-chain sovereignty with programmable governance." },
  { question: "How much does institutional custody cost?", answer: "Costs vary widely. Safe is free to use beyond gas fees. Managed custody platforms typically charge setup fees, monthly platform fees, and basis-point fees on assets under custody. Enterprise solutions can cost tens of thousands annually, justified by security, compliance, and governance features." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/wallets/best' },
    { '@type': 'ListItem', position: 4, name: 'Institutional', },
  ],
};

export default function BestInstitutionalWalletsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="wallets"
      />      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Wallets", href: "/wallets" }, { label: "Best Wallets", href: "/wallets/best" }, { label: "Institutional Wallets", href: "/wallets/best/institutional" }]} />
      <AffiliateDisclosure />
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Best Institutional Crypto Wallets ({CURRENT_MONTH} {CURRENT_YEAR})</h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">Institutional wallets provide enterprise-grade security, governance controls, and regulatory compliance for organizations managing significant digital asset portfolios. We evaluated solutions for security, access controls, compliance, and integration capabilities.</p>
      </header>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Best Institutional Wallets, Ranked</h2>
        {/* editorial-voice */}
        <div style={{ background: '#0a1a0f', border: '1px solid #14532d', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🛡️</span>
            <strong style={{ color: '#22c55e', fontSize: 15 }}>Security Verdict</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Our security team stress-tests every wallet we review. We check firmware signing, key derivation paths, and potential supply chain attack surfaces.
          </p>
        </div>
        <div className="space-y-6">{products.map((product, index) => (<ProductCard key={product.name} product={product} rank={index + 1} categorySlug="wallets" />))}</div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/wallets/reviews/safe-wallet" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover"><h3 className="font-semibold text-[var(--color-text)] text-sm">Safe Wallet Review</h3><p className="text-xs text-[var(--color-text-secondary)]">Industry-standard multisig</p></Link>
          <Link href="/wallets/learn/multisig-setup-guide" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover"><h3 className="font-semibold text-[var(--color-text)] text-sm">Multisig Setup Guide</h3><p className="text-xs text-[var(--color-text-secondary)]">Configure multi-signature security</p></Link>
          <Link href="/wallets/best/security" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover"><h3 className="font-semibold text-[var(--color-text)] text-sm">Best Security Wallets</h3><p className="text-xs text-[var(--color-text-secondary)]">Top security-focused wallets</p></Link>
        </div>
      </section>
      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Wallets/best/institutional", "description": "The industry-standard multisig wallet securing over $100B in assets for DAOs, protocols, and institutional treasuries across 15+ EVM chains.", "url": "https://degen0x.com/wallets/best/institutional"}) }} />
    </div>
  );
}
