import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Cold Storage Strategies for Crypto ${CURRENT_YEAR}`,
  description: "Compare the best cold storage solutions for long-term crypto security. Hardware wallets, multi-sig setups, and institutional custody options reviewed.",
};

const products: Product[] = [
  {
    name: "Ledger Nano X",
    slug: "ledger-nano-x",
    rating: 4.8,
    description: "The Ledger Nano X is the premium hardware wallet for long-term investors. With Bluetooth connectivity, support for 5,500+ tokens, and the Ledger Live app for managing assets and staking, it offers the best combination of security and usability for cold storage.",
    pros: ["Bluetooth for mobile management", "5,500+ token support", "Built-in staking via Ledger Live", "Certified secure element chip"],
    cons: ["$149 price point", "Battery needs occasional charging", "Bluetooth adds minor attack surface"],
    fees: "$149 one-time purchase",
    bestFor: "Premium mobile-friendly cold storage",
    affiliateUrl: "https://degen0x.com/go/ledger-nano-x",
    category: "long-term",
    featured: true,
  },
  {
    name: "Trezor Model T",
    slug: "trezor-model-t",
    rating: 4.7,
    description: "The Trezor Model T features a full-color touchscreen for transaction verification, support for 1,000+ tokens, and fully open-source firmware. Its shamir backup option splits your seed phrase into multiple shares for enhanced recovery security.",
    pros: ["Full touchscreen interface", "Open-source firmware", "Shamir backup for seed splitting", "No Bluetooth (reduced attack surface)"],
    cons: ["Fewer supported tokens than Ledger", "Higher price point", "No native staking support"],
    fees: "$219 one-time purchase",
    bestFor: "Open-source security with touchscreen",
    affiliateUrl: "https://degen0x.com/go/trezor-model-t",
    category: "long-term",
  },
  {
    name: "Coldcard Mk4",
    slug: "coldcard-mk4",
    rating: 4.6,
    description: "Coldcard is the gold standard for Bitcoin-only cold storage. With air-gapped operation, duress PIN support, encrypted microSD backup, and advanced multisig capabilities, it is designed for maximum security without any compromise.",
    pros: ["Air-gapped operation via microSD", "Duress PIN with decoy wallet", "Advanced multisig support", "Bitcoin-focused security design"],
    cons: ["Bitcoin-only (no altcoin support)", "Steep learning curve", "Less intuitive interface"],
    fees: "$148 one-time purchase",
    bestFor: "Maximum-security Bitcoin cold storage",
    affiliateUrl: "https://degen0x.com/go/coldcard",
    category: "long-term",
  },
];

const faqs: FAQ[] = [
  { question: "What is cold storage for cryptocurrency?", answer: "Cold storage means keeping your cryptocurrency private keys completely offline, disconnected from the internet. Hardware wallets are the most common form. This eliminates the risk of remote hacking, malware, and phishing attacks that can compromise online (hot) wallets." },
  { question: "How do I set up a multi-sig cold storage?", answer: "Multi-signature (multisig) requires multiple private keys to authorize transactions. For example, a 2-of-3 multisig requires 2 out of 3 hardware wallets to sign. Tools like Sparrow Wallet, Electrum, or Casa make multisig setup accessible. Store each key in a different physical location for maximum security." },
  { question: "What happens if my hardware wallet breaks?", answer: "Your crypto is safe as long as you have your recovery seed phrase (12 or 24 words). You can restore your wallet on a new device using this seed. Store your seed phrase on durable material (steel plates are recommended) in a secure location separate from the device." },
];

export default function ColdStorageStrategiesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Long-Term", href: "/long-term" }, { label: "Best", href: "/long-term/best" }, { label: "Cold Storage", href: "/long-term/best/cold-storage-strategies" }]} />
      <AffiliateDisclosure />
      <div className="max-w-4xl mb-12">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Best Cold Storage Strategies ({CURRENT_MONTH} {CURRENT_YEAR})</h1>
        <p className="text-xl text-[var(--color-text-secondary)] mb-6">Secure cold storage is the foundation of long-term crypto investing. Hardware wallets keep your private keys offline and protected from the hacks, phishing attacks, and exchange failures that have cost users billions.</p>
        <p className="text-[var(--color-text-secondary)]">We evaluated cold storage solutions on security architecture, token support, backup options, usability, and long-term reliability. The best options combine impenetrable security with practical features for managing your holdings over years and decades.</p>
      </div>
      <div className="space-y-6 mb-12">{products.map((product, index) => (<ProductCard key={product.slug} product={product} rank={index + 1} categorySlug="long-term" />))}</div>
      <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Cold Storage Best Practices</h2>
        {/* editorial-voice */}
        <div style={{ background: '#1a1000', border: '1px solid #422006', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🏔️</span>
            <strong style={{ color: '#eab308', fontSize: 15 }}>Long-Term View</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Time in the market beats timing the market — especially in crypto. Our long-term analysis focuses on fundamentals that compound over years, not months.
          </p>
        </div>
        <div className="space-y-4 text-[var(--color-text-secondary)]">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-[var(--color-text)]">Seed Phrase Security:</strong> Write your recovery seed on steel plates (not paper) and store in a fireproof safe or safety deposit box.</li>
            <li><strong className="text-[var(--color-text)]">Multiple Backups:</strong> Keep 2-3 copies of your seed phrase in different physical locations.</li>
            <li><strong className="text-[var(--color-text)]">Test Recovery:</strong> Before sending large amounts, test the recovery process on a secondary device.</li>
            <li><strong className="text-[var(--color-text)]">Consider Multisig:</strong> For holdings over $100k, a multi-signature setup provides additional security layers.</li>
            <li><strong className="text-[var(--color-text)]">Regular Verification:</strong> Periodically check that your device firmware is updated and your seed phrase backups are intact.</li>
          </ul>
        </div>
      </section>
      <FAQSection faqs={faqs} />
    </div>
  );
}
