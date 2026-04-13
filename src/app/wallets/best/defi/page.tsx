import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import ComparisonTable from "@/components/ComparisonTable";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { defiWallets, walletComparisonItems } from "@/data/wallets";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Best DeFi Wallets of ${CURRENT_YEAR} - Top Wallets for DeFi | ${SITE_NAME}`,
  description: `Compare the best wallets for DeFi in ${CURRENT_YEAR}. MetaMask, Rabby, Phantom, Safe and more. Expert picks for lending, swapping, yield farming, and dApp access.`,
  alternates: { canonical: "/wallets/best/defi" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const faqs = [
  { question: "What is the best wallet for DeFi?", answer: "MetaMask is the most widely compatible DeFi wallet, supported by virtually every Ethereum-based dApp. Rabby is the safest choice for DeFi with its pre-transaction simulation. Phantom is best for Solana DeFi. Safe is essential for teams managing DeFi positions collectively." },
  { question: "Do I need a special wallet for DeFi?", answer: "You need a self-custody wallet that can connect to decentralized applications. Browser extension wallets like MetaMask, Rabby, and Phantom are designed for dApp connectivity. Exchange wallets (like the Coinbase exchange app) cannot directly interact with DeFi protocols." },
  { question: "How do I stay safe using DeFi?", answer: "Use a wallet with transaction simulation (like Rabby), verify website URLs before connecting, regularly revoke unused token approvals, start with small amounts on new protocols, and consider using a hardware wallet for signing DeFi transactions. Never approve unlimited token spending on unverified contracts." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/wallets/best' },
    { '@type': 'ListItem', position: 4, name: 'Defi', },
  ],
};

export default function BestDeFiWalletsPage() {
  const comparisonItems = [
    walletComparisonItems["metamask"],
    walletComparisonItems["rabby"],
    walletComparisonItems["phantom"],
    walletComparisonItems["safe"],
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
          { label: "DeFi Wallets", href: "/wallets/best/defi" },
        ]}
      />
      <AffiliateDisclosure />
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Best DeFi Wallets of {CURRENT_MONTH} {CURRENT_YEAR}</h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          DeFi wallets are your gateway to decentralized finance: lending, borrowing, swapping, yield farming,
          and liquidity provision. The right wallet provides seamless dApp connectivity, transaction security,
          and multi-chain access. We tested the top options across Ethereum, Solana, and EVM ecosystems.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      </header>

      <section className="mb-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Quick Verdict</h2>
        <p className="text-[var(--color-text-secondary)]">
          <strong className="text-[var(--color-text)]">MetaMask</strong> is the safest bet for broad DeFi compatibility.
          <strong className="text-[var(--color-text)]"> Rabby</strong> is the best choice for security-conscious DeFi users
          thanks to its transaction simulation. <strong className="text-[var(--color-text)]">Phantom</strong> is essential for
          Solana DeFi. For teams and DAOs, <strong className="text-[var(--color-text)]">Safe</strong> provides multi-sig security
          for collective DeFi treasury management.
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
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Best DeFi Wallets, Ranked</h2>
        <div className="space-y-6">
          {defiWallets.map((product, index) => (
            <ProductCard key={product.name} product={product} rank={index + 1} categorySlug="wallets" />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <ComparisonTable
          items={comparisonItems}
          features={["Type", "Price", "Supported Coins", "DeFi Access", "Open Source", "Multi-Sig", "Mobile App"]}
          title="DeFi Wallet Comparison"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/wallets/compare/metamask-vs-phantom" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">MetaMask vs Phantom</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Head-to-head DeFi wallet comparison</p>
          </Link>
          <Link href="/wallets/best/security" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Best for Security</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Most secure wallet options</p>
          </Link>
          <Link href="/wallets/learn/wallet-security-best-practices" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Wallet Security Guide</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Protect your DeFi positions</p>
          </Link>
        </div>
      </section>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Wallets/best/defi", "description": "Crypto content on degen0x", "url": "https://degen0x.com/wallets/best/defi"}) }} />
    </div>
  );
}
