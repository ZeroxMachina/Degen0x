import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import ComparisonTable from "@/components/ComparisonTable";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { multiChainWallets, walletComparisonItems } from "@/data/wallets";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Best Multi-Chain Wallets of 2026 - Cross-Chain Wallet Reviews | degen0x`,
  description: `Compare the best multi-chain crypto wallets of ${CURRENT_YEAR}. Trust Wallet, Exodus, Phantom and more. Manage assets across multiple blockchains from one wallet.`,
  alternates: { canonical: "/wallets/best/multi-chain" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const faqs = [
  { question: "What is a multi-chain wallet?", answer: "A multi-chain wallet supports multiple blockchain networks from a single application. Instead of using separate wallets for Ethereum, Solana, Bitcoin, and other chains, a multi-chain wallet lets you manage all your assets in one place. This simplifies portfolio management and reduces the number of seed phrases you need to secure." },
  { question: "Which wallet supports the most blockchains?", answer: "Trust Wallet supports over 100 blockchains and millions of tokens, making it the most broadly compatible multi-chain wallet. Ledger hardware wallets support 5,500+ assets across many chains. Exodus supports 300+ assets across major chains with a focus on user experience." },
  { question: "Are multi-chain wallets less secure?", answer: "Multi-chain wallets are not inherently less secure than single-chain wallets. The security depends on the wallet's architecture: how keys are stored, whether it is open-source, and the quality of its codebase. Using a hardware wallet like Ledger with a multi-chain software interface gives you the best of both worlds." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/wallets/best' },
    { '@type': 'ListItem', position: 4, name: 'Multi Chain', },
  ],
};

export default function BestMultiChainWalletsPage() {
  const comparisonItems = [
    walletComparisonItems["trust-wallet"],
    walletComparisonItems["exodus"],
    walletComparisonItems["ledger-nano-x"],
    walletComparisonItems["phantom"],
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
          { label: "Multi-Chain Wallets", href: "/wallets/best/multi-chain" },
        ]}
      />
      <AffiliateDisclosure />
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Best Multi-Chain Wallets of {CURRENT_MONTH} {CURRENT_YEAR}</h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          The crypto ecosystem spans dozens of blockchains. A multi-chain wallet lets you manage assets
          across Ethereum, Solana, Bitcoin, Polygon, and many more networks from a single interface. We
          tested the top options to find the best multi-chain wallets.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      </header>

      <section className="mb-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Quick Verdict</h2>
        <p className="text-[var(--color-text-secondary)]">
          <strong className="text-[var(--color-text)]">Trust Wallet</strong> wins for sheer chain coverage with 100+ supported networks.
          <strong className="text-[var(--color-text)]"> Exodus</strong> offers the best user experience for managing a diverse portfolio.
          For hardware security across multiple chains, the <strong className="text-[var(--color-text)]">Ledger Nano X</strong> is unbeatable
          with 5,500+ asset support and Bluetooth connectivity.
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
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Best Multi-Chain Wallets, Ranked</h2>
        <div className="space-y-6">
          {multiChainWallets.map((product, index) => (
            <ProductCard key={product.name} product={product} rank={index + 1} categorySlug="wallets" />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <ComparisonTable
          items={comparisonItems}
          features={["Type", "Price", "Supported Coins", "Mobile App", "DeFi Access", "Staking", "NFT Support"]}
          title="Multi-Chain Wallet Comparison"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/wallets/reviews/trust-wallet" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Trust Wallet Review</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Detailed Trust Wallet analysis</p>
          </Link>
          <Link href="/wallets/best/beginners" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Best for Beginners</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Easiest wallets to start with</p>
          </Link>
          <Link href="/wallets/learn/how-to-transfer-crypto" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">How to Transfer Crypto</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Move crypto between wallets</p>
          </Link>
        </div>
      </section>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Wallets/best/multi Chain", "description": "Crypto content on degen0x", "url": "https://degen0x.com/wallets/best/multi-chain", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    </div>
  );
}
