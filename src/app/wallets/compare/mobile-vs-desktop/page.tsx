import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";
import RelatedContent from '@/components/RelatedContent';

export const metadata: Metadata = {
  title: `Mobile vs Desktop Wallets (2026) | degen0x`,
  description: `Mobile wallet vs desktop wallet comparison for ${CURRENT_YEAR}. Portability, security, features, dApp access, and hardware wallet support compared.`,
  alternates: { canonical: "/wallets/compare/mobile-vs-desktop" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const items = [
  { name: "Mobile Wallets", slug: "mobile", rating: 4.3, affiliateUrl: "#", features: { Portability: "Always with you", "Screen Size": "5-7 inches", Biometrics: "Face ID / fingerprint", "dApp Access": "Mobile browser", "QR Scanning": "Built-in camera", "HW Wallet": "Bluetooth/NFC", "Multi-tasking": "Limited", Camera: "Yes", Notifications: "Push alerts", "Best For": "On-the-go use" } },
  { name: "Desktop Wallets", slug: "desktop", rating: 4.4, affiliateUrl: "#", features: { Portability: "Tied to computer", "Screen Size": "13+ inches", Biometrics: "Limited", "dApp Access": "Full browser", "QR Scanning": "Webcam only", "HW Wallet": "USB / Bluetooth", "Multi-tasking": "Full", Camera: "Webcam only", Notifications: "App alerts", "Best For": "DeFi power use" } },
];

const faqs = [
  { question: "Is a mobile wallet secure enough?", answer: "Modern smartphones have strong security features. iOS Secure Enclave and Android hardware security modules provide robust key protection. Combined with biometric auth and a reputable wallet, mobile wallets provide reasonable security for moderate holdings. For large amounts, pair with a hardware wallet." },
  { question: "Can I use the same wallet on both?", answer: "Yes. MetaMask, Phantom, and Coinbase Wallet are available on both platforms. Import the same seed phrase to access accounts on both. Some wallets offer encrypted cloud sync for consistent settings across devices." },
  { question: "Which is better for DeFi?", answer: "Desktop wallets are generally better for DeFi due to larger screens, easier multi-tab management, and more reliable hardware wallet connections. However, mobile wallets have improved significantly and simple DeFi interactions like swaps and staking work well on mobile." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Compare', item: 'https://degen0x.com/wallets/compare' },
    { '@type': 'ListItem', position: 4, name: 'Mobile Vs Desktop', },
  ],
};

export default function MobileVsDesktopPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="wallets"
      />      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Wallets", href: "/wallets" }, { label: "Compare", href: "/wallets/compare" }, { label: "Mobile vs Desktop", href: "/wallets/compare/mobile-vs-desktop" }]} />
      <AffiliateDisclosure />
      <header className="mb-8"><h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">Mobile vs Desktop Wallets ({CURRENT_YEAR})</h1><p className="text-[var(--color-text-secondary)]">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p></header>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">Mobile and desktop wallets serve different use cases. Mobile wallets offer portability and biometric security, while desktop wallets provide larger screens and better dApp integration. Understanding these trade-offs helps you pick the right platform.</p>
      <section className="mb-10"><ComparisonTable items={items} features={["Portability", "Screen Size", "Biometrics", "dApp Access", "QR Scanning", "HW Wallet", "Multi-tasking", "Camera", "Notifications", "Best For"]} title="Mobile vs Desktop Wallets" /></section>
      <div className="prose-crypto mb-10">
        <p>Mobile wallets like Trust Wallet, Phantom, and Rainbow offer the convenience of always having crypto accessible. Biometric authentication provides fast security. Built-in cameras enable QR scanning for payments and air-gapped wallet connections. Push notifications keep you informed. The main limitation is screen size, which makes complex DeFi interactions harder to manage comfortably.</p>
        <p>Desktop wallets like MetaMask, Rabby, and Frame excel at dApp interactions through full browser integration. Larger screens make reviewing complex transactions and managing multiple DeFi positions much more comfortable. USB connections to hardware wallets are more reliable than Bluetooth. Desktop is preferred for serious DeFi use. Many users maintain wallets on both platforms synced via the same seed phrase for maximum flexibility.</p>
      </div>
      <FAQSection faqs={faqs} />
      <section className="mt-12"><h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Related Content</h2>
        {/* editorial-voice */}
        <div style={{ background: '#0a1a0f', border: '1px solid #14532d', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🛡️</span>
            <strong style={{ color: '#22c55e', fontSize: 15 }}>Security Verdict</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            The wallet space moves fast. We update our reviews when significant firmware updates or security incidents occur, not on a fixed schedule.
          </p>
        </div><div className="grid md:grid-cols-2 gap-4"><Link href="/wallets/best/ios" className="glass-subtle p-4 glass-hover"><span className="text-xs text-[var(--color-primary)]">Best Of</span><h3 className="text-sm font-semibold text-[var(--color-text)]">Best iOS Wallets</h3></Link><Link href="/wallets/best/desktop" className="glass-subtle p-4 glass-hover"><span className="text-xs text-[var(--color-secondary)]">Best Of</span><h3 className="text-sm font-semibold text-[var(--color-text)]">Best Desktop Wallets</h3></Link></div></section>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Wallets/compare/mobile Vs Desktop", "description": "Crypto content on degen0x", "url": "https://degen0x.com/wallets/compare/mobile-vs-desktop", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
      <RelatedContent category="tools" currentSlug="/wallets/compare/mobile-vs-desktop" />
    </div>
  );
}
