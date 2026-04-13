import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import ComparisonTable from "@/components/ComparisonTable";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { solanaWallets, walletComparisonItems } from "@/data/wallets";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best Solana Wallets of ${CURRENT_YEAR} - SOL Wallet Reviews | ${SITE_NAME}`,
  description: `Compare the best Solana wallets of ${CURRENT_YEAR}. Phantom, Trust Wallet, Coinbase Wallet and more. Expert picks for SOL staking, DeFi, and NFTs.`,
  alternates: { canonical: "/wallets/best/solana" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const faqs = [
  { question: "What is the best Solana wallet?", answer: "Phantom is widely considered the best Solana wallet due to its native SOL support, built-in staking, excellent NFT display, and fast performance. It was originally built for Solana and offers the deepest integration with the Solana ecosystem including Jupiter-powered swaps and comprehensive dApp connectivity." },
  { question: "Can I stake SOL in a wallet?", answer: "Yes. Phantom and several other wallets support native SOL staking. You can delegate your SOL to validators directly from the wallet and earn staking rewards. Current SOL staking APY is typically 6-8%. Rewards are earned each epoch (approximately every 2-3 days)." },
  { question: "Do hardware wallets support Solana?", answer: "Yes. The Ledger Nano X and Nano S Plus support Solana natively through the Ledger Live app. You can also connect your Ledger to Phantom for the best combination of hardware security and software convenience. Trezor has limited Solana support through third-party integrations." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/wallets/best' },
    { '@type': 'ListItem', position: 4, name: 'Solana', },
  ],
};

export default function BestSolanaWalletsPage() {
  const comparisonItems = [
    walletComparisonItems["phantom"],
    walletComparisonItems["coinbase-wallet"],
    walletComparisonItems["trust-wallet"],
    walletComparisonItems["ledger-nano-x"],
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Wallets", href: "/wallets" },
          { label: "Best Wallets", href: "/wallets/best" },
          { label: "Solana Wallets", href: "/wallets/best/solana" },
        ]}
      />
      <AffiliateDisclosure />
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Best Solana Wallets of {CURRENT_MONTH} {CURRENT_YEAR}</h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          Solana&apos;s fast transactions and low fees make it one of the most popular blockchains for DeFi, NFTs, and
          memecoins. Choosing the right Solana wallet is essential for accessing the ecosystem. We tested every major
          option to find the best wallets for SOL holders.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      </header>

      <section className="mb-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Quick Verdict</h2>
        <p className="text-[var(--color-text-secondary)]">
          <strong className="text-[var(--color-text)]">Phantom</strong> is the clear winner for Solana users. It was built for the
          Solana ecosystem and offers the best combination of speed, features, and user experience. For hardware
          security, pair Phantom with a <strong className="text-[var(--color-text)]">Ledger Nano X</strong>. If you want multi-chain
          access beyond Solana, <strong className="text-[var(--color-text)]">Trust Wallet</strong> supports 100+ chains including Solana.
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
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Best Solana Wallets, Ranked</h2>
        <div className="space-y-6">
          {solanaWallets.map((product, index) => (
            <ProductCard key={product.name} product={product} rank={index + 1} categorySlug="wallets" />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <ComparisonTable
          items={comparisonItems}
          features={["Type", "Price", "Supported Coins", "NFT Support", "Staking", "Mobile App", "Open Source"]}
          title="Solana Wallet Comparison"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">What to Look for in a Solana Wallet</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Native SOL Staking</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">The best Solana wallets let you stake SOL directly to validators and earn rewards without leaving the wallet interface.</p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Jupiter Swap Integration</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Jupiter is Solana&apos;s leading DEX aggregator. Wallets with Jupiter integration offer the best swap rates for SPL tokens.</p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">NFT Support</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Solana is a major NFT ecosystem. Look for wallets with gallery displays, collection grouping, and marketplace integration.</p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Transaction Speed</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Solana processes transactions in under a second. Your wallet should handle this speed without lag or delays in confirmation display.</p>
          </div>
        </div>

        <AuthorAttribution
          author="CipherPunk_42"
          role="Security & QA"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="wallets"
        />

      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/wallets/reviews/phantom" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Phantom Review</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Full Phantom wallet review</p>
          </Link>
          <Link href="/wallets/best/nft" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Best NFT Wallets</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Top wallets for NFT collectors</p>
          </Link>
          <Link href="/wallets/learn/how-to-set-up-wallet" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">How to Set Up a Wallet</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Step-by-step setup guide</p>
          </Link>
        </div>
      </section>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Wallets/best/solana", "description": "Crypto content on degen0x", "url": "https://degen0x.com/wallets/best/solana"}) }} />
    </div>
  );
}
