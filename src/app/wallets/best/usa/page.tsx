import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { walletProducts } from "@/data/wallets";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best Crypto Wallets in the USA (${CURRENT_YEAR})`,
  description: `Compare the best crypto wallets for US residents in ${CURRENT_YEAR}. Secure, US-compliant hardware and software wallets with strong customer support and tax reporting integration.`,
  keywords: [
    "best crypto wallets USA",
    "US crypto wallets",
    "best cryptocurrency wallet America",
    "best bitcoin wallet USA",
    "hardware wallet USA",
  ],
  alternates: { canonical: "/wallets/best/usa" }};

const usaWallets = [
  walletProducts[0], // Ledger Nano X
  walletProducts[2], // Trezor Model T
  walletProducts[4], // MetaMask
  walletProducts[7], // Exodus
  walletProducts[6], // Trust Wallet
];

const faqs = [
  {
    question: "What is the safest crypto wallet for US residents?",
    answer:
      "Hardware wallets like Ledger and Trezor are the safest options for US residents. They store your private keys offline, making them virtually immune to online attacks. Ledger is the most popular globally and ships directly to US addresses with fast delivery.",
  },
  {
    question: "Do I need a crypto wallet if I use an exchange?",
    answer:
      "For small amounts or active trading, keeping crypto on a reputable US exchange is acceptable. However, for larger holdings, a personal wallet gives you full control of your private keys. The crypto saying 'not your keys, not your coins' reflects the risk of exchange custody.",
  },
  {
    question: "Are there tax implications for moving crypto to a wallet?",
    answer:
      "No. Moving cryptocurrency from an exchange to your personal wallet is not a taxable event in the US. Only selling, trading, or spending crypto triggers capital gains taxes. However, keep records of transfers for accurate cost basis tracking.",
  },
  {
    question: "Which wallet works best with US tax software?",
    answer:
      "Exodus and Coinbase Wallet integrate well with US crypto tax platforms like TurboTax, CoinTracker, and Koinly. Ledger Live also exports transaction histories in formats compatible with major tax reporting tools. Look for wallets that provide detailed CSV exports.",
  },
  {
    question: "Can I buy crypto directly in a wallet?",
    answer:
      "Yes. Many wallets now support direct crypto purchases via debit card or bank transfer. MetaMask, Exodus, and Trust Wallet all have built-in buy features through third-party providers like MoonPay and Transak. Fees are typically higher than exchange purchases.",
  },
  {
    question: "What wallet should a US beginner use?",
    answer:
      "Coinbase Wallet is the most beginner-friendly option for US users due to its simple interface and integration with the Coinbase exchange. Exodus is another excellent choice with its clean design and built-in exchange. Start with a software wallet and graduate to hardware as your holdings grow.",
  },
];

export default function USAWalletsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Wallets", href: "/wallets" },
          { label: "Best Wallets", href: "/wallets/best" },
          { label: "Best in the USA", href: "/wallets/best/usa" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Crypto Wallets in the USA ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Choosing the right crypto wallet as a US resident involves considering security,
          ease of use, tax reporting compatibility, and whether the wallet supports the
          assets you hold. With stricter IRS enforcement on crypto tax reporting, having a
          wallet that provides clean transaction histories is increasingly important. Here
          are the best crypto wallets for Americans.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Hardware vs Software Wallets</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          US users should consider their holdings and usage patterns when choosing between
          hardware and software wallets. Hardware wallets (Ledger, Trezor) are best for
          long-term storage of significant amounts. Software wallets (MetaMask, Exodus) are
          better for daily use, DeFi interaction, and smaller amounts. Many users combine
          both for different purposes.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Tax Reporting Considerations</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          With the IRS requiring detailed crypto transaction reporting, US users should choose
          wallets that provide comprehensive transaction histories and integrate with tax
          software. Every transfer, swap, and DeFi interaction needs to be tracked for
          accurate tax filing. Wallets with built-in address labeling and CSV export features
          save significant time during tax season.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {usaWallets.map((wallet, index) => (
          <ProductCard
            key={wallet.slug}
            product={wallet}
            rank={index + 1}
            categorySlug="wallets"
          />
        ))}
      </div>

      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Wallet Security Tips for US Users</h2>
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
        <div className="space-y-4 text-[var(--color-text-secondary)]">
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">1.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Buy hardware wallets directly from manufacturers</h3>
              <p className="text-sm">Never buy from third-party sellers on Amazon or eBay. Tampered devices can steal your crypto.</p>
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

          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">2.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Store your seed phrase offline</h3>
              <p className="text-sm">Write it on paper or stamp it on metal. Never store digitally, take photos, or put it in cloud storage.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">3.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Use a dedicated device for large holdings</h3>
              <p className="text-sm">If using a software wallet for significant amounts, consider a dedicated phone or computer.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Wallets/best/usa", "description": "Crypto content on degen0x", "url": "https://degen0x.com/wallets/best/usa"}) }} />
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/wallets" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            All Wallets
          </Link>
          <Link href="/tools" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Crypto Tools
          </Link>
          <Link href="/compare" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Compare Wallets
          </Link>
        </div>
      </div>
    </div>
  );
}
