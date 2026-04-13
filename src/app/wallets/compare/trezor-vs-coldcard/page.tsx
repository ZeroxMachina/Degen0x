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
  title: `Trezor vs Coldcard (${CURRENT_YEAR}): Open-Source Wallet Showdown | ${SITE_NAME}`,
  description: `Trezor vs Coldcard comparison for ${CURRENT_YEAR}. Two open-source hardware wallets compared on Bitcoin features, security, multi-coin support, and price.`,
  alternates: { canonical: "/wallets/compare/trezor-vs-coldcard" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const items: ComparisonItem[] = [
  { name: "Trezor Safe 3", slug: "trezor-safe-3", rating: 4.6, affiliateUrl: "https://degen0x.com/go/trezor", features: { "Type": "Multi-coin hardware wallet", "Price": "$79", "Supported Coins": "8,000+", "Air-Gapped": "No (USB-C)", "Secure Element": "Yes", "Open Source": "Yes (fully)", "Shamir Backup": "Yes", "Bitcoin-Specific": "CoinJoin privacy" } },
  { name: "Coldcard Mk4", slug: "coldcard-mk4", rating: 4.6, affiliateUrl: "https://degen0x.com/go/coldcard", features: { "Type": "Bitcoin-only wallet", "Price": "$149", "Supported Coins": "Bitcoin only", "Air-Gapped": "Yes (microSD + NFC)", "Secure Element": "Yes (dual)", "Open Source": "Yes (fully)", "Shamir Backup": "No (BIP-85 instead)", "Bitcoin-Specific": "PSBT, duress wallet, dice roll" } },
];

const features = ["Type", "Price", "Supported Coins", "Air-Gapped", "Secure Element", "Open Source", "Shamir Backup", "Bitcoin-Specific"];

const faqs = [
  { question: "Are both Trezor and Coldcard fully open source?", answer: "Yes. Both Trezor and Coldcard have fully open-source firmware and hardware designs, allowing anyone to audit the code. This sets them apart from Ledger, which has partially closed-source firmware." },
  { question: "Which is better for Bitcoin privacy?", answer: "Coldcard offers more Bitcoin-specific features but Trezor has built-in CoinJoin support through Trezor Suite, which helps break transaction chain analysis. For pure transaction privacy, Trezor's CoinJoin is easier to use. For cold storage security, Coldcard's air-gapped operation is superior." },
  { question: "Can I use Coldcard with Trezor Suite?", answer: "No. Coldcard is designed to work with its own companion software or with wallets like Sparrow Wallet, Specter Desktop, or Electrum. Trezor Suite only works with Trezor devices." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Compare', item: 'https://degen0x.com/wallets/compare' },
    { '@type': 'ListItem', position: 4, name: 'Trezor Vs Coldcard', },
  ],
};

export default function TrezorVsColdcardPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Wallets", href: "/wallets" },
          { label: "Compare", href: "/wallets/compare" },
          { label: "Trezor vs Coldcard", href: "/wallets/compare/trezor-vs-coldcard" },
        ]}
      />
      <AffiliateDisclosure />

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Trezor vs Coldcard: Open-Source Wallet Showdown ({CURRENT_YEAR})</h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Both Trezor and Coldcard are fully open-source hardware wallets, but they serve different
          audiences. We compare their security models, features, and ideal use cases.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      </header>

      <section className="mb-10">
        <ComparisonTable items={items} features={features} title="Trezor Safe 3 vs Coldcard Mk4" />
      </section>

      <div className="prose-crypto">
        <h2>Open-Source Philosophy</h2>
        <p>
          Both wallets share a commitment to open-source transparency. Trezor was the first
          commercial hardware wallet and has championed open-source design since 2014. Coldcard
          followed with a Bitcoin-focused approach that makes every aspect of the device auditable.
          This shared philosophy means the security community can verify both devices independently.
        </p>

        <h2>Security Model Differences</h2>
        <p>
          Coldcard employs dual secure elements and supports fully air-gapped operation via microSD
          card signing. It never needs to be plugged into a computer. Trezor Safe 3 added a secure
          element while maintaining USB-C connectivity. Trezor also offers Shamir Backup, which
          splits your seed into multiple shares requiring a threshold to recover.
        </p>
        <p>
          Coldcard offers BIP-85 derived child keys as an alternative to Shamir, letting you
          derive independent wallets from a single master seed. Each approach has its merits:
          Shamir is better for social recovery, BIP-85 is better for compartmentalization.
        </p>

        <h2>Multi-Coin vs Bitcoin-Only</h2>
        <p>
          Trezor supports over 8,000 coins and tokens, making it one of the most versatile
          hardware wallets. Coldcard intentionally supports only Bitcoin to minimize attack
          surface. If you hold only Bitcoin, the reduced complexity of Coldcard is a security
          advantage. If you hold a diverse portfolio, Trezor is the practical choice.
        </p>

        <h2 id="verdict">Verdict</h2>
        <div className="not-prose rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 my-6">
          <p className="text-[var(--color-text-secondary)] mb-4">
            <strong className="text-[var(--color-text)]">Choose Trezor if:</strong> You want an open-source
            wallet with broad coin support, CoinJoin privacy, Shamir Backup, and a polished
            desktop experience. Trezor Safe 3 offers the best value at $79.
          </p>
          <p className="text-[var(--color-text-secondary)]">
            <strong className="text-[var(--color-text)]">Choose Coldcard if:</strong> You are a Bitcoin-only
            holder who wants maximum security through air-gapped signing, dual secure elements,
            and advanced features like duress wallets and dice roll entropy.
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
          <Link href="/wallets/reviews/trezor" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <span className="text-xs text-[var(--color-primary)]">Review</span>
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Trezor Full Review</h3>
          </Link>
          <Link href="/wallets/compare/ledger-vs-coldcard" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <span className="text-xs text-[var(--color-primary)]">Compare</span>
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Ledger vs Coldcard</h3>
          </Link>
        </div>
      </section>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Wallets/compare/trezor Vs Coldcard", "description": "Crypto content on degen0x", "url": "https://degen0x.com/wallets/compare/trezor-vs-coldcard", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
