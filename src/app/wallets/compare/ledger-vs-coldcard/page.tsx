import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { ComparisonItem } from "@/lib/types";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Ledger vs Coldcard (2026): Bitcoin Hardware Wallet Comparison | degen0x`,
  description: `Ledger vs Coldcard comparison for ${CURRENT_YEAR}. Compare security, Bitcoin features, air-gapped signing, and multi-coin support for hardware wallets.`,
  alternates: { canonical: "/wallets/compare/ledger-vs-coldcard" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const items: ComparisonItem[] = [
  { name: "Ledger Nano X", slug: "ledger-nano-x", rating: 4.7, affiliateUrl: "https://degen0x.com/go/ledger", features: { "Type": "Multi-coin hardware wallet", "Price": "$149", "Supported Coins": "5,500+", "Bitcoin-Only Mode": "No", "Air-Gapped": "No (USB + Bluetooth)", "Secure Element": "Yes (CC EAL5+)", "Open Source": "Partial", "Display": "128x64 OLED" } },
  { name: "Coldcard Mk4", slug: "coldcard-mk4", rating: 4.6, affiliateUrl: "https://degen0x.com/go/coldcard", features: { "Type": "Bitcoin-only hardware wallet", "Price": "$149", "Supported Coins": "Bitcoin only", "Bitcoin-Only Mode": "Yes (only)", "Air-Gapped": "Yes (microSD + NFC)", "Secure Element": "Yes (dual SE)", "Open Source": "Yes (fully)", "Display": "128x64 OLED" } },
];

const features = ["Type", "Price", "Supported Coins", "Bitcoin-Only Mode", "Air-Gapped", "Secure Element", "Open Source", "Display"];

const faqs = [
  { question: "Is Coldcard better than Ledger for Bitcoin?", answer: "For Bitcoin-only security, Coldcard is generally considered superior. It offers air-gapped signing, dual secure elements, fully open-source firmware, and advanced Bitcoin features like PSBT support and dice roll entropy. Ledger is better if you need multi-coin support alongside Bitcoin." },
  { question: "Can Coldcard store Ethereum?", answer: "No. Coldcard is a Bitcoin-only device by design. This is intentional -- by supporting only Bitcoin, Coldcard reduces attack surface and complexity. If you need to store other cryptocurrencies, you will need a separate wallet like Ledger or Trezor." },
  { question: "What does air-gapped mean?", answer: "An air-gapped device never connects to the internet or any computer directly. Coldcard can sign transactions using a microSD card or NFC, meaning it never needs to be plugged into a potentially compromised computer. This eliminates USB-based attack vectors." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Compare', item: 'https://degen0x.com/wallets/compare' },
    { '@type': 'ListItem', position: 4, name: 'Ledger Vs Coldcard', },
  ],
};

export default function LedgerVsColdcardPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Wallets", href: "/wallets" },
          { label: "Compare", href: "/wallets/compare" },
          { label: "Ledger vs Coldcard", href: "/wallets/compare/ledger-vs-coldcard" },
        ]}
      />
      <AffiliateDisclosure />

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Ledger vs Coldcard: Multi-Coin vs Bitcoin Maximalist ({CURRENT_YEAR})</h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Ledger is the most popular multi-coin hardware wallet. Coldcard is the gold standard
          for Bitcoin-only security. We compare security architecture, features, and use cases.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      </header>

      <section className="mb-10">
        <ComparisonTable items={items} features={features} title="Ledger Nano X vs Coldcard Mk4" />
      </section>

      <div className="prose-crypto">
        <h2>Security Architecture</h2>
        <p>
          Coldcard features dual secure elements from different manufacturers, providing redundancy
          against supply chain attacks. It operates fully air-gapped via microSD card transactions,
          meaning it never needs to connect to a computer or phone. The entire firmware is
          open-source and auditable.
        </p>
        <p>
          Ledger uses a single certified secure element (CC EAL5+) and connects via USB or
          Bluetooth. Its firmware is partially closed-source, which means users must trust
          Ledger&apos;s security claims for some components. However, Ledger&apos;s secure element
          chip is battle-tested and used in banking applications.
        </p>

        <h2>Bitcoin-Specific Features</h2>
        <p>
          Coldcard excels with PSBT (Partially Signed Bitcoin Transaction) support, BIP-85 derived
          child keys, dice roll entropy for seed generation, countdown PIN, brick-me PIN, and
          duress wallet support. These features are designed for serious Bitcoin holders who
          want maximum control and security.
        </p>
        <p>
          Ledger supports Bitcoin with all standard features through Ledger Live but lacks
          the advanced Bitcoin-specific capabilities that Coldcard offers. For Bitcoin power
          users, Coldcard provides a significantly richer feature set.
        </p>

        <h2 id="verdict">Verdict</h2>
        <div className="not-prose rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 my-6">
          <p className="text-[var(--color-text-secondary)] mb-4">
            <strong className="text-[var(--color-text)]">Choose Ledger if:</strong> You hold multiple
            cryptocurrencies and want one device to manage them all, prefer Bluetooth mobile
            management, and want a polished software experience through Ledger Live.
          </p>
          <p className="text-[var(--color-text-secondary)]">
            <strong className="text-[var(--color-text)]">Choose Coldcard if:</strong> You are a Bitcoin
            maximalist who wants the highest possible security with air-gapped signing, fully
            open-source firmware, and advanced Bitcoin features.
          </p>
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


      <section className="mb-12 mt-10">
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/wallets/reviews/ledger" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <span className="text-xs text-[var(--color-primary)]">Review</span>
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Ledger Full Review</h3>
          </Link>
          <Link href="/wallets/learn/hardware-wallet-setup-guide" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <span className="text-xs text-[var(--color-primary)]">Guide</span>
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Hardware Wallet Setup Guide</h3>
          </Link>
        </div>
      </section>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Wallets/compare/ledger Vs Coldcard", "description": "Crypto content on degen0x", "url": "https://degen0x.com/wallets/compare/ledger-vs-coldcard", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
