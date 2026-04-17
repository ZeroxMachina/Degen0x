import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import ComparisonTable from "@/components/ComparisonTable";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { walletProducts, walletComparisonItems, walletFAQs } from "@/data/wallets";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RelatedContent from '@/components/RelatedContent';


export const metadata: Metadata = {
  title: `Best Crypto Wallets of ${CURRENT_MONTH} ${CURRENT_YEAR} | ${SITE_NAME}`,
  description: `Compare the best crypto wallets of ${CURRENT_YEAR}. Expert-tested reviews of Ledger, Trezor, MetaMask, Phantom, and more. Find the most secure wallet for your needs.`,
};

export default function BestWalletsPage() {
  const topPicks = [
    walletProducts[0], // Ledger Nano X
    walletProducts[2], // Trezor Model T
    walletProducts[4], // MetaMask
    walletProducts[5], // Phantom
    walletProducts[7], // Exodus
    walletProducts[10], // Safe
    walletProducts[9], // Rabby
    walletProducts[6], // Trust Wallet
    walletProducts[8], // Coinbase Wallet
    walletProducts[1], // Ledger Nano S Plus
    walletProducts[3], // Trezor Safe 3
  ];

  const comparisonItems = [
    walletComparisonItems["ledger-nano-x"],
    walletComparisonItems["trezor-model-t"],
    walletComparisonItems["metamask"],
    walletComparisonItems["phantom"],
    walletComparisonItems["exodus"],
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Wallets", href: "/wallets" },
          { label: "Best Wallets", href: "/wallets/best" },
        ]}
      />

      <AffiliateDisclosure />

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Crypto Wallets of {CURRENT_MONTH} {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          We tested and compared over 30 crypto wallets to find the best options for security,
          usability, and features. Whether you need cold storage for long-term holdings or a hot
          wallet for daily DeFi activity, our expert picks cover every use case.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR} | By the {SITE_NAME} Editorial Team
        </p>
      </header>

      {/* Quick Picks */}
      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Our Top Picks at a Glance</h2>
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
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-[var(--color-bg)]/50">
            <span className="text-[var(--color-primary)] font-bold">Best Overall:</span>
            <span className="text-[var(--color-text)]">Ledger Nano X</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-[var(--color-bg)]/50">
            <span className="text-[var(--color-primary)] font-bold">Best for DeFi:</span>
            <span className="text-[var(--color-text)]">MetaMask</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-[var(--color-bg)]/50">
            <span className="text-[var(--color-primary)] font-bold">Best Open-Source:</span>
            <span className="text-[var(--color-text)]">Trezor Model T</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-[var(--color-bg)]/50">
            <span className="text-[var(--color-primary)] font-bold">Best for Solana:</span>
            <span className="text-[var(--color-text)]">Phantom</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-[var(--color-bg)]/50">
            <span className="text-[var(--color-primary)] font-bold">Best for Beginners:</span>
            <span className="text-[var(--color-text)]">Exodus</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-[var(--color-bg)]/50">
            <span className="text-[var(--color-primary)] font-bold">Best Multi-Sig:</span>
            <span className="text-[var(--color-text)]">Safe (Gnosis Safe)</span>
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

      {/* Product Cards */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
          The Best Crypto Wallets of {CURRENT_YEAR}, Ranked
        </h2>
        <div className="space-y-6">
          {topPicks.map((product, index) => (
            <ProductCard
              key={product.slug + index}
              product={product}
              rank={index + 1}
              categorySlug="wallets"
            />
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Quick Comparison</h2>
        <ComparisonTable
          items={comparisonItems}
          features={["Type", "Price", "Supported Coins", "Open Source", "Secure Element", "DeFi Access", "NFT Support", "Staking"]}
          title="Top 5 Wallets Compared"
        />
      </section>

      {/* How We Chose */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">How We Chose the Best Crypto Wallets</h2>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <p className="text-[var(--color-text-secondary)] mb-4">
            Our editorial team evaluated over 30 crypto wallets using a comprehensive methodology that weighs
            the factors most important to users. Each wallet was tested hands-on by at least two team members
            across multiple devices and operating systems.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-[var(--color-text)] font-semibold mb-2">Security (30%)</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Private key management, encryption, secure element chips, open-source code, audit history,
                and track record of handling vulnerabilities.
              </p>
            </div>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold mb-2">Ease of Use (25%)</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Setup process, transaction flow, portfolio management, onboarding experience, and overall
                user interface quality.
              </p>
            </div>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold mb-2">Features (20%)</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Supported blockchains and tokens, DeFi integration, staking, swaps, NFT management,
                and hardware wallet compatibility.
              </p>
            </div>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold mb-2">Value (15%)</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Purchase price (for hardware), transaction fees, swap markup, and overall cost of ownership
                relative to the features offered.
              </p>
            </div>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold mb-2">Community & Support (10%)</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Developer ecosystem, community size, documentation quality, customer support responsiveness,
                and educational resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { label: "Hardware Wallets", href: "/wallets/best/hardware" },
            { label: "Software Wallets", href: "/wallets/best/software" },
            { label: "Mobile Wallets", href: "/wallets/best/mobile" },
            { label: "Desktop Wallets", href: "/wallets/best/desktop" },
            { label: "Bitcoin Wallets", href: "/wallets/best/bitcoin" },
            { label: "Ethereum Wallets", href: "/wallets/best/ethereum" },
            { label: "Solana Wallets", href: "/wallets/best/solana" },
            { label: "Multi-Chain", href: "/wallets/best/multi-chain" },
            { label: "DeFi Wallets", href: "/wallets/best/defi" },
            { label: "NFT Wallets", href: "/wallets/best/nft" },
            { label: "For Beginners", href: "/wallets/best/beginners" },
            { label: "For Security", href: "/wallets/best/security" },
          ].map((link) => (
            <Link href={link.href}
              key={link.href}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-3 text-center card-hover text-sm font-medium text-[var(--color-text)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <FAQSection faqs={walletFAQs} />
      <RelatedContent category="tools" currentSlug="/wallets/best" />
    </div>
  );
}
