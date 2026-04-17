import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";
import RelatedContent from '@/components/RelatedContent';

export const metadata: Metadata = {
  title: `Software vs Hardware Wallets (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Software wallet vs hardware wallet comparison for ${CURRENT_YEAR}. Security, cost, convenience, DeFi access, and portability compared side by side.`,
};

const items = [
  { name: "Software Wallets", slug: "software", rating: 4.2, affiliateUrl: "#", features: { "Form Factor": "App or extension", Cost: "Free", "Key Storage": "Encrypted on device", "Internet Exposure": "Always online", "DeFi Ease": "Seamless", "Tx Speed": "Instant", Portability: "Any device", "Setup Difficulty": "Easy", "Attack Surface": "Larger", "Best For": "Active DeFi use" } },
  { name: "Hardware Wallets", slug: "hardware", rating: 4.6, affiliateUrl: "#", features: { "Form Factor": "Physical device", Cost: "$55-$250+", "Key Storage": "Secure element chip", "Internet Exposure": "Offline", "DeFi Ease": "Requires connection", "Tx Speed": "Requires device", Portability: "Must carry device", "Setup Difficulty": "Moderate", "Attack Surface": "Minimal", "Best For": "Long-term storage" } },
];

const faqs = [
  { question: "Do I need a hardware wallet?", answer: "If you hold more crypto than you can afford to lose, a hardware wallet is strongly recommended. The cost of a device is trivial compared to the value it protects. For small amounts used in DeFi, a software wallet suffices. Many users combine both." },
  { question: "Can I use a software wallet with a hardware wallet?", answer: "Yes, this is the recommended setup. MetaMask and Rabby connect to Ledger and Trezor for transaction signing. You get the interface and dApp connectivity of software with the key security of hardware." },
  { question: "Are software wallets safe for large amounts?", answer: "For large amounts, software wallets alone are not recommended. They store keys on internet-connected devices with inherent risk. Hardware wallets add a critical security layer. Use hardware for any amount that would be painful to lose." },
];

export default function SoftwareVsHardwarePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Wallets", href: "/wallets" }, { label: "Compare", href: "/wallets/compare" }, { label: "Software vs Hardware", href: "/wallets/compare/software-vs-hardware" }]} />
      <AffiliateDisclosure />
      <header className="mb-8"><h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">Software vs Hardware Wallets ({CURRENT_YEAR})</h1><p className="text-[var(--color-text-secondary)]">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p></header>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">Software wallets run as apps on your phone or computer, while hardware wallets are dedicated physical devices for key storage. This comparison breaks down the security, convenience, cost, and feature trade-offs to help you choose the right type for your crypto strategy.</p>
      <section className="mb-10"><ComparisonTable items={items} features={["Form Factor", "Cost", "Key Storage", "Internet Exposure", "DeFi Ease", "Tx Speed", "Portability", "Setup Difficulty", "Attack Surface", "Best For"]} title="Software vs Hardware Wallets" /></section>
      <div className="prose-crypto mb-10">
        <p>Software wallets offer unmatched convenience for daily crypto use. Free to install, instant to set up, and seamlessly integrated with dApps, they are the go-to for active DeFi participation. However, because they run on internet-connected devices, they are vulnerable to malware, phishing, and OS exploits. Major software wallets include MetaMask, Phantom, Trust Wallet, and Exodus, each offering different strengths across chains and features.</p>
        <p>Hardware wallets provide the strongest security by isolating private keys on a dedicated device with a secure element chip. Keys never leave the device, so even full computer compromise cannot steal your crypto. The trade-off is friction — you need the physical device for every transaction. Leading hardware wallets include Ledger, Trezor, Coldcard, and Keystone. The optimal approach for most users is combining both types.</p>
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
        </div><div className="grid md:grid-cols-2 gap-4"><Link href="/wallets/best/hardware" className="glass-subtle p-4 glass-hover"><span className="text-xs text-[var(--color-primary)]">Best Of</span><h3 className="text-sm font-semibold text-[var(--color-text)]">Best Hardware Wallets</h3></Link><Link href="/wallets/best/software" className="glass-subtle p-4 glass-hover"><span className="text-xs text-[var(--color-secondary)]">Best Of</span><h3 className="text-sm font-semibold text-[var(--color-text)]">Best Software Wallets</h3></Link></div></section>
      <RelatedContent category="tools" currentSlug="/wallets/compare/software-vs-hardware" />
    </div>
  );
}
