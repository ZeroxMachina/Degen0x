import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { desktopWallets } from "@/data/wallets";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best Desktop Crypto Wallets of ${CURRENT_YEAR} | ${SITE_NAME}`,
  description: `The best desktop crypto wallets for Windows, Mac, and Linux in ${CURRENT_YEAR}. Compare Exodus, MetaMask, Rabby, and more for managing crypto on your computer.`,
  alternates: { canonical: "/wallets/best/desktop" }};

const faqs = [
  {
    question: "What is the best desktop crypto wallet?",
    answer:
      "Exodus is our top pick for desktop users thanks to its beautiful native application, built-in exchange, and portfolio tracking. For DeFi power users, MetaMask and Rabby browser extensions are the go-to choices for connecting to dApps.",
  },
  {
    question: "Is a desktop wallet safer than a mobile wallet?",
    answer:
      "Desktop and mobile wallets have different risk profiles. Desktop wallets can be more vulnerable to malware if you download software from untrusted sources, but they are generally safer from physical theft. Mobile wallets benefit from operating system sandboxing and biometric authentication. Neither is inherently safer; good security practices matter more than the platform.",
  },
  {
    question: "Can I use a browser extension wallet as my desktop wallet?",
    answer:
      "Yes, browser extension wallets like MetaMask, Phantom, and Rabby are the most common type of desktop wallet. They run inside your browser and connect directly to web-based dApps. Some wallets like Exodus offer both a standalone desktop application and a browser extension.",
  },
];

export default function BestDesktopWalletsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Wallets", href: "/wallets" },
          { label: "Best Wallets", href: "/wallets/best" },
          { label: "Desktop Wallets", href: "/wallets/best/desktop" },
        ]}
      />

      <AffiliateDisclosure />

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Desktop Crypto Wallets of {CURRENT_MONTH} {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          Desktop wallets give you full-featured crypto management on your computer. Whether you
          prefer a native application with portfolio charts or a lightweight browser extension for
          DeFi, these are the best desktop wallets available on Windows, Mac, and Linux.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Best Desktop Wallets, Ranked</h2>
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
        <div className="space-y-6">
          {desktopWallets.map((product, index) => (
            <ProductCard key={product.name} product={product} rank={index + 1} categorySlug="wallets" />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Types of Desktop Wallets</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Native Desktop Apps</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Standalone applications like Exodus that install on your computer. They typically offer
              richer interfaces with portfolio charts, built-in exchanges, and better performance.
              Available for Windows, macOS, and Linux.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Browser Extensions</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Wallets like MetaMask, Phantom, and Rabby that run inside your browser (Chrome, Firefox,
              Brave). They are lighter weight and offer seamless integration with web-based dApps, DEXs,
              and NFT marketplaces.
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

      </section>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Wallets/best/desktop", "description": "Crypto content on degen0x", "url": "https://degen0x.com/wallets/best/desktop"}) }} />
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
