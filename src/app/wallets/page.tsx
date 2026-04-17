import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import RelatedContent from '@/components/RelatedContent';

export const metadata: Metadata = {
  title: `Best Crypto Wallets of 2026 - Reviews, Comparisons & Guides | degen0x`,
  description: "Compare the best crypto wallets for security, ease of use, and features. Expert reviews of hardware wallets, software wallets, and more. Find the perfect",
  alternates: { canonical: "/wallets" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const BEST_OF_LINKS = [
  { title: "Best Crypto Wallets Overall", href: "/wallets/best", description: "Our top picks across all wallet types" },
  { title: "Best Hardware Wallets", href: "/wallets/best/hardware", description: "Top cold storage solutions for maximum security" },
  { title: "Best Software Wallets", href: "/wallets/best/software", description: "Best hot wallets for daily crypto use" },
  { title: "Best Hot Wallets", href: "/wallets/best/hot-wallets", description: "Internet-connected wallets for active traders" },
  { title: "Best Mobile Wallets", href: "/wallets/best/mobile", description: "Top wallets for iOS and Android" },
  { title: "Best Desktop Wallets", href: "/wallets/best/desktop", description: "Best wallets for Windows, Mac, and Linux" },
  { title: "Best Bitcoin Wallets", href: "/wallets/best/bitcoin", description: "Top wallets for storing BTC" },
  { title: "Best Ethereum Wallets", href: "/wallets/best/ethereum", description: "Best wallets for ETH and ERC-20 tokens" },
  { title: "Best Solana Wallets", href: "/wallets/best/solana", description: "Top wallets for the Solana ecosystem" },
  { title: "Best Multi-Chain Wallets", href: "/wallets/best/multi-chain", description: "Wallets supporting multiple blockchains" },
  { title: "Best DeFi Wallets", href: "/wallets/best/defi", description: "Top wallets for decentralized finance" },
  { title: "Best NFT Wallets", href: "/wallets/best/nft", description: "Best wallets for managing NFT collections" },
  { title: "Best Wallets for Beginners", href: "/wallets/best/beginners", description: "Easy-to-use wallets for newcomers" },
  { title: "Best Wallets for Security", href: "/wallets/best/security", description: "Maximum security for your crypto" },
  { title: "Best Wallets for Privacy", href: "/wallets/best/privacy", description: "Wallets prioritizing user privacy" },
];

const REVIEW_LINKS = [
  { title: "Ledger Review", href: "/wallets/reviews/ledger", description: "Nano X & Nano S Plus" },
  { title: "Trezor Review", href: "/wallets/reviews/trezor", description: "Model T & Safe 3" },
  { title: "MetaMask Review", href: "/wallets/reviews/metamask", description: "The most popular Ethereum wallet" },
  { title: "Phantom Review", href: "/wallets/reviews/phantom", description: "The go-to Solana wallet" },
  { title: "Trust Wallet Review", href: "/wallets/reviews/trust-wallet", description: "Binance's multi-chain wallet" },
  { title: "Exodus Review", href: "/wallets/reviews/exodus", description: "Beautiful multi-asset wallet" },
  { title: "Coinbase Wallet Review", href: "/wallets/reviews/coinbase-wallet", description: "Self-custody from Coinbase" },
  { title: "Rabby Review", href: "/wallets/reviews/rabby", description: "Security-focused DeFi wallet" },
  { title: "Safe Review", href: "/wallets/reviews/safe", description: "Industry-standard multi-sig" },
];

const COMPARISON_LINKS = [
  { title: "Ledger vs Trezor", href: "/wallets/compare/ledger-vs-trezor", description: "The ultimate hardware wallet showdown" },
  { title: "MetaMask vs Phantom", href: "/wallets/compare/metamask-vs-phantom", description: "Ethereum vs Solana hot wallets" },
  { title: "Exodus vs Trust Wallet", href: "/wallets/compare/exodus-vs-trust-wallet", description: "Multi-chain wallet comparison" },
  { title: "Coinbase Wallet vs MetaMask", href: "/wallets/compare/coinbase-wallet-vs-metamask", description: "Which Ethereum wallet is better?" },
];

const LEARN_LINKS = [
  { title: "What Is a Crypto Wallet?", href: "/wallets/learn/what-is-a-crypto-wallet", description: "Everything you need to know" },
  { title: "Hot vs Cold Wallets", href: "/wallets/learn/hot-vs-cold-wallets", description: "Which type is right for you?" },
  { title: "How to Set Up a Wallet", href: "/wallets/learn/how-to-set-up-wallet", description: "Step-by-step guide" },
  { title: "Seed Phrase Explained", href: "/wallets/learn/seed-phrase-explained", description: "Protect your recovery phrase" },
  { title: "Custodial vs Non-Custodial", href: "/wallets/learn/custodial-vs-non-custodial", description: "Who holds your keys?" },
  { title: "How to Transfer Crypto", href: "/wallets/learn/how-to-transfer-crypto", description: "Send crypto safely between wallets" },
  { title: "Wallet Security Best Practices", href: "/wallets/learn/wallet-security-best-practices", description: "Keep your crypto safe" },
  { title: "Multi-Sig Wallets", href: "/wallets/learn/multi-sig-wallets", description: "Shared custody explained" },
  { title: "Wallet Backup Guide", href: "/wallets/learn/wallet-backup-guide", description: "Never lose access to your funds" },
];

const TOOL_LINKS = [
  { title: "Gas Fee Tracker", href: "/wallets/tools/gas-fee-tracker", description: "Real-time Ethereum gas prices" },
  { title: "Wallet Comparison Tool", href: "/wallets/tools/wallet-comparison", description: "Compare wallets side by side" },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', },
  ],
};

export default function WalletsHubPage() {
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
        ]}
      />

      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Crypto Wallets</span>
        </h1>
        <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
          Find the perfect crypto wallet for your needs. Expert reviews, head-to-head comparisons,
          and comprehensive guides covering hardware wallets, software wallets, and everything in between.
          Updated for {CURRENT_MONTH} {CURRENT_YEAR}.
        </p>
      </section>

      {/* Quick Links */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[
          { label: "Best Wallets", href: "/wallets/best", icon: "&#9733;" },
          { label: "Reviews", href: "#reviews", icon: "&#128269;" },
          { label: "Compare", href: "#comparisons", icon: "&#8596;" },
          { label: "Learn", href: "#guides", icon: "&#128218;" },
        ].map((item) => (
          <Link href={item.href}
            key={item.href}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover text-center"
          >
            <span className="text-2xl mb-2 block" dangerouslySetInnerHTML={{ __html: item.icon }} />
            <span className="font-semibold text-[var(--color-text)] text-sm">{item.label}</span>
          </Link>
        ))}
      </section>

      {/* Best-Of Guides */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Best Crypto Wallets by Category</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {BEST_OF_LINKS.map((item) => (
            <Link href={item.href}
              key={link.href}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 card-hover"
            >
              <h3 className="font-semibold text-[var(--color-text)] mb-1">{link.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Wallet Reviews</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {REVIEW_LINKS.map((item) => (
            <Link href={item.href}
              key={link.href}
            >
              <h3 className="font-semibold text-[var(--color-text)] mb-1">{link.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Comparisons */}
      <section id="comparisons" className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Wallet Comparisons</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {COMPARISON_LINKS.map((item) => (
            <Link href={item.href}
              key={link.href}
            >
              <h3 className="font-semibold text-[var(--color-text)] mb-1">{link.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section id="guides" className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Wallet Guides & Education</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {LEARN_LINKS.map((item) => (
            <Link href={item.href}
              key={link.href}
            >
              <h3 className="font-semibold text-[var(--color-text)] mb-1">{link.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Wallet Tools</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {TOOL_LINKS.map((item) => (
            <Link href={item.href}
              key={link.href}
            >
              <h3 className="font-semibold text-[var(--color-text)] mb-1">{link.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">About Our Wallet Reviews</h2>
        <div className="prose prose-sm prose-invert max-w-none text-[var(--color-text-secondary)]">
          <p className="mb-4">
            At {SITE_NAME}, our team of crypto security experts and daily wallet users rigorously tests
            every wallet we recommend. Our review process includes hands-on testing of setup, transactions,
            dApp interactions, recovery processes, and security features.
          </p>
          <p className="mb-4">
            We evaluate wallets across key criteria: security architecture, ease of use, supported assets
            and blockchains, DeFi and dApp compatibility, backup and recovery options, customer support,
            and overall value. Our ratings are independent and never influenced by partnerships.
          </p>
          <p>
            Whether you are looking for the most secure hardware wallet to protect your savings or the
            most versatile software wallet for daily DeFi activity, our guides help you find the right
            tool. We update our reviews regularly to reflect firmware updates, new features, and changes
            in the crypto landscape.
          </p>
        </div>
      </section>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Best Crypto Wallets Overall", "description": "Compare the best crypto wallets for security, ease of use, and features. Expert reviews of hardware wallets, software wallets, and more. Find the perfect", "url": "https://degen0x.com/wallets", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
          <Link href="/learn" style={{
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
            Learning Guides
          </Link>
        </div>
      </div>
      <RelatedContent category="tools" currentSlug="/wallets" />
    </div>
  );
}
