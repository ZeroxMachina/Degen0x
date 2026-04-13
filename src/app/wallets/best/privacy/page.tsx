import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import ComparisonTable from "@/components/ComparisonTable";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { privacyWallets, walletComparisonItems } from "@/data/wallets";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Best Privacy Crypto Wallets of ${CURRENT_YEAR} - Anonymous Wallet Reviews | ${SITE_NAME}`,
  description: `Compare the best privacy-focused crypto wallets of ${CURRENT_YEAR}. Trezor, Rabby, MetaMask and more. CoinJoin, Tor support, no KYC, and private transactions.`,
  alternates: { canonical: "/wallets/best/privacy" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const faqs = [
  { question: "Which crypto wallet is most private?", answer: "Trezor offers the strongest privacy features with built-in CoinJoin for Bitcoin transaction mixing, Tor network connectivity, and passphrase-protected hidden wallets. All transactions are handled locally without transmitting data to third-party servers. Trezor is also fully open-source so you can verify its privacy claims." },
  { question: "Can I use a crypto wallet without KYC?", answer: "Yes. Self-custody wallets like Trezor, MetaMask, Rabby, Phantom, and Exodus do not require any identity verification to create or use. You download the app, generate a wallet, and start using it immediately. KYC is only required when using centralized exchanges or fiat on-ramp services within wallets." },
  { question: "What is CoinJoin?", answer: "CoinJoin is a Bitcoin privacy technique that combines multiple transactions from different users into a single transaction, making it difficult to trace which inputs correspond to which outputs. Trezor Suite supports CoinJoin natively through the Wasabi Wallet coordinator, charging a 0.3% fee for the privacy service." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/wallets/best' },
    { '@type': 'ListItem', position: 4, name: 'Privacy', },
  ],
};

export default function BestPrivacyWalletsPage() {
  const comparisonItems = [
    walletComparisonItems["trezor-model-t"],
    walletComparisonItems["trezor-safe-3"],
    walletComparisonItems["rabby"],
    walletComparisonItems["metamask"],
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="wallets"
      />      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Wallets", href: "/wallets" },
          { label: "Best Wallets", href: "/wallets/best" },
          { label: "Privacy", href: "/wallets/best/privacy" },
        ]}
      />
      <AffiliateDisclosure />
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Best Privacy Crypto Wallets of {CURRENT_MONTH} {CURRENT_YEAR}</h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          Financial privacy is a fundamental right. The best privacy wallets minimize data exposure,
          support transaction mixing, run over Tor, require no identity verification, and keep your
          on-chain activity as private as possible. We evaluated the top options for privacy-conscious users.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      </header>

      <section className="mb-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Quick Verdict</h2>
        <p className="text-[var(--color-text-secondary)]">
          <strong className="text-[var(--color-text)]">Trezor</strong> wallets are the privacy leaders with CoinJoin integration,
          Tor support, passphrase-protected hidden wallets, and fully open-source code. For EVM DeFi users,
          <strong className="text-[var(--color-text)]"> Rabby</strong> and <strong className="text-[var(--color-text)]">MetaMask</strong> are
          solid choices as they require no KYC and offer local key storage. All self-custody wallets provide
          a baseline level of privacy since they do not require identity verification.
        </p>
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
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Best Privacy Wallets, Ranked</h2>
        <div className="space-y-6">
          {privacyWallets.map((product, index) => (
            <ProductCard key={product.name} product={product} rank={index + 1} categorySlug="wallets" />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <ComparisonTable
          items={comparisonItems}
          features={["Type", "Open Source", "Secure Element", "Backup Method", "Price", "Mobile App"]}
          title="Privacy Wallet Comparison"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/wallets/reviews/trezor" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Trezor Review</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Best privacy hardware wallet</p>
          </Link>
          <Link href="/wallets/best/security" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Best for Security</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Most secure wallet options</p>
          </Link>
          <Link href="/wallets/learn/wallet-security-best-practices" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Security Best Practices</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Protect your privacy</p>
          </Link>
        </div>
      </section>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Wallets/best/privacy", "description": "Crypto content on degen0x", "url": "https://degen0x.com/wallets/best/privacy"}) }} />
    </div>
  );
}
