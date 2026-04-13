import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `MetaMask vs Coinbase Wallet (${CURRENT_YEAR}) - Which Is Better? | ${SITE_NAME}`,
  description: `MetaMask vs Coinbase Wallet side-by-side comparison for ${CURRENT_YEAR}. Features, fees, security, dApp support, and cloud backup compared.`,
  alternates: { canonical: "/wallets/compare/metamask-vs-coinbase-wallet" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const items = [
  { name: "MetaMask", slug: "metamask", rating: 4.5, affiliateUrl: "#", features: { Type: "Browser extension + mobile", Price: "Free", "Supported Chains": "All EVM chains", "Open Source": "Yes", "DeFi Access": "Universal", "NFT Support": "Basic gallery", "Cloud Backup": "No", "Hardware Wallet": "Ledger, Trezor", "Swap Fee": "0.875%", "Mobile App": "Yes" } },
  { name: "Coinbase Wallet", slug: "coinbase-wallet", rating: 4.3, affiliateUrl: "#", features: { Type: "Browser extension + mobile", Price: "Free", "Supported Chains": "Major EVM chains", "Open Source": "Partially", "DeFi Access": "Good", "NFT Support": "Good gallery", "Cloud Backup": "Yes (encrypted)", "Hardware Wallet": "Ledger", "Swap Fee": "0.875%", "Mobile App": "Yes" } },
];

const faqs = [
  { question: "Which is better for beginners?", answer: "Coinbase Wallet is generally better for beginners due to simpler setup, cloud backup option, and integration with Coinbase exchange for easy asset transfers. MetaMask has a steeper learning curve but offers more power and flexibility as you grow into DeFi." },
  { question: "Which has better security?", answer: "MetaMask is fully open source, providing code transparency. Coinbase Wallet offers encrypted cloud backup that prevents seed phrase loss but introduces cloud dependency. Neither is objectively more secure — both support hardware wallets for maximum security." },
  { question: "Can I use both?", answer: "Yes. You can install both browser extensions and use each for different purposes. Some users prefer MetaMask for DeFi and Coinbase Wallet for simple token management. Each creates separate accounts with different private keys." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Compare', item: 'https://degen0x.com/wallets/compare' },
    { '@type': 'ListItem', position: 4, name: 'Metamask Vs Coinbase Wallet', },
  ],
};

export default function MetaMaskVsCoinbaseWalletPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="wallets"
      />      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Wallets", href: "/wallets" }, { label: "Compare", href: "/wallets/compare" }, { label: "MetaMask vs Coinbase Wallet", href: "/wallets/compare/metamask-vs-coinbase-wallet" }]} />
      <AffiliateDisclosure />
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">MetaMask vs Coinbase Wallet ({CURRENT_YEAR})</h1>
        <p className="text-[var(--color-text-secondary)]">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      </header>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">MetaMask and Coinbase Wallet are two of the most popular Ethereum wallets with different philosophies. MetaMask targets experienced DeFi users with maximum dApp compatibility, while Coinbase Wallet focuses on accessibility with cloud backup and exchange integration. This comparison helps you decide which fits your workflow.</p>
      <section className="mb-10">
        <ComparisonTable items={items} features={["Type", "Price", "Supported Chains", "Open Source", "DeFi Access", "NFT Support", "Cloud Backup", "Hardware Wallet", "Swap Fee", "Mobile App"]} title="MetaMask vs Coinbase Wallet" />
      </section>
      <div className="prose-crypto mb-10">
        <p>MetaMask has broader dApp compatibility as the industry standard since 2016. Virtually every Ethereum dApp is tested with MetaMask first, making it the safest choice for DeFi power users who need universal access. The Snaps extension system adds new capabilities like non-EVM chain support and custom transaction insights. Coinbase Wallet offers smoother onboarding with the option to link your Coinbase exchange account and use cloud-encrypted backup for seed phrase recovery, which is a major advantage for users worried about losing their seed phrase.</p>
        <p>For DeFi power users who need to connect to every protocol and manage custom RPC networks, MetaMask is the clear choice. For beginners who want an easy setup with the safety net of cloud backup and a recognized brand behind the wallet, Coinbase Wallet provides a more accessible entry point into self-custody crypto management. Both wallets support Ledger hardware wallet integration for users who want maximum security regardless of which software wallet they prefer.</p>
      </div>
      <FAQSection faqs={faqs} />
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Related Content</h2>
        {/* editorial-voice */}
        <div style={{ background: '#0a1a0f', border: '1px solid #14532d', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🛡️</span>
            <strong style={{ color: '#22c55e', fontSize: 15 }}>Security Verdict</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            The wallet space moves fast. We update our reviews when significant firmware updates or security incidents occur, not on a fixed schedule.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/wallets/best/beginners" className="glass-subtle p-4 glass-hover"><span className="text-xs text-[var(--color-primary)]">Best Of</span><h3 className="text-sm font-semibold text-[var(--color-text)]">Best Wallets for Beginners</h3></Link>
          <Link href="/wallets/learn/how-to-choose-crypto-wallet" className="glass-subtle p-4 glass-hover"><span className="text-xs text-[var(--color-secondary)]">Guide</span><h3 className="text-sm font-semibold text-[var(--color-text)]">How to Choose a Crypto Wallet</h3></Link>
        </div>
      </section>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Wallets/compare/metamask Vs Coinbase Wallet", "description": "Crypto content on degen0x", "url": "https://degen0x.com/wallets/compare/metamask-vs-coinbase-wallet"}) }} />
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
