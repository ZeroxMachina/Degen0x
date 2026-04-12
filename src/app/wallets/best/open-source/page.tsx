import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Best Open-Source Crypto Wallets (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `The best open-source crypto wallets for ${CURRENT_YEAR}. Compare MetaMask, Rabby, Electrum, Frame, and Blockstream Jade for code transparency and security.`,
  alternates: { canonical: "/wallets/best/open-source" }};

const products = [
  { name: "MetaMask", slug: "metamask", rating: 4.5, description: "The most popular open-source Ethereum wallet with millions of users, extensive third-party auditing, and full source code on GitHub.", pros: ["Fully open source on GitHub", "Massive community review and auditing", "Regular professional security audits"], cons: ["Default RPC has privacy concerns", "Browser extension attack surface"], bestFor: "Open-source Ethereum wallet with broadest dApp compatibility", affiliateUrl: "#", category: "wallets" },
  { name: "Rabby", slug: "rabby", rating: 4.6, description: "Open-source security-focused wallet with transaction simulation and risk alerts built by the DeBank team with active GitHub development.", pros: ["Open source with active development", "Pre-transaction security simulation", "Multi-chain risk assessment"], cons: ["Shorter track record than MetaMask", "Primarily Chrome-based browsers"], bestFor: "Security-first open-source wallet with transaction preview", affiliateUrl: "#", category: "wallets" },
  { name: "Electrum", slug: "electrum", rating: 4.3, description: "One of the oldest open-source Bitcoin wallets since 2011 with advanced features, multisig support, and reproducible builds.", pros: ["Battle-tested since 2011", "Reproducible deterministic builds", "Advanced Bitcoin scripting"], cons: ["Bitcoin only", "Dated user interface"], bestFor: "Open-source Bitcoin wallet with the longest track record", affiliateUrl: "#", category: "wallets" },
  { name: "Frame", slug: "frame", rating: 4.2, description: "Privacy-focused system-level wallet with zero telemetry, full open-source transparency, and native hardware wallet integration.", pros: ["System-level OS integration", "Zero data collection policy", "Excellent hardware wallet support"], cons: ["Desktop only", "Smaller user community"], bestFor: "Privacy-conscious users wanting transparent open-source code", affiliateUrl: "#", category: "wallets" },
  { name: "Blockstream Jade", slug: "jade", rating: 4.2, description: "Fully open-source hardware wallet with both firmware and hardware design published, plus air-gapped QR code signing.", pros: ["Hardware design is also open source", "Air-gapped operation via QR codes", "Budget-friendly pricing"], cons: ["Bitcoin and Liquid only", "Novel virtual secure element"], bestFor: "Open-source hardware wallet with verifiable design", affiliateUrl: "#", category: "wallets" },
];

const faqs = [
  { question: "Why does open source matter for crypto wallets?", answer: "Open-source wallets allow security researchers and the community to inspect code for vulnerabilities, backdoors, or privacy issues. This transparency creates accountability that closed-source wallets cannot provide. When millions of dollars in crypto are controlled by wallet software, the ability to verify that code is doing exactly what it claims is a critical security property." },
  { question: "Are open-source wallets less polished than closed-source?", answer: "Not necessarily. MetaMask and Rabby are both fully open source while offering polished, user-friendly interfaces. The open-source model often attracts talented developer contributions that improve the product. Some open-source projects do prioritize functionality over design, but the best ones deliver both." },
  { question: "Can I verify the wallet code myself?", answer: "Yes. All open-source wallets publish their source code on platforms like GitHub. If you are a developer, you can read the code, build from source, and verify the published version matches. Even non-developers benefit from the thousands of others who can and do review the code, providing security through community oversight." },
];

export default function BestOpenSourceWalletsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="wallets"
      />      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Wallets", href: "/wallets" }, { label: "Best Wallets", href: "/wallets/best" }, { label: "Open-Source Wallets", href: "/wallets/best/open-source" }]} />
      <AffiliateDisclosure />
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Best Open-Source Crypto Wallets ({CURRENT_MONTH} {CURRENT_YEAR})</h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">Open-source wallets provide code transparency that lets anyone verify security claims. We evaluated the best options for code quality, audit history, community contributions, and overall usability.</p>
      </header>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Best Open-Source Wallets, Ranked</h2>
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
          <Link href="/wallets/best/security" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover"><h3 className="font-semibold text-[var(--color-text)] text-sm">Best Security Wallets</h3><p className="text-xs text-[var(--color-text-secondary)]">Maximum asset protection</p></Link>
          <Link href="/wallets/reviews/frame" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover"><h3 className="font-semibold text-[var(--color-text)] text-sm">Frame Wallet Review</h3><p className="text-xs text-[var(--color-text-secondary)]">Privacy-first open-source wallet</p></Link>
          <Link href="/wallets/learn/wallet-security-best-practices" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover"><h3 className="font-semibold text-[var(--color-text)] text-sm">Wallet Security Guide</h3><p className="text-xs text-[var(--color-text-secondary)]">Best practices for safety</p></Link>
        </div>
      </section>
      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Wallets/best/open Source", "description": "The most popular open-source Ethereum wallet with millions of users, extensive third-party auditing, and full source code on GitHub.", "url": "https://degen0x.com/wallets/best/open-source"}) }} />
    </div>
  );
}
