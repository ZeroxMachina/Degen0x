import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Hot vs Cold Wallets (${CURRENT_YEAR}) - Which Should You Use? | ${SITE_NAME}`,
  description: `Hot wallet vs cold wallet comparison for ${CURRENT_YEAR}. Security, convenience, cost, and best use cases for each wallet type explained.`,
};

const items = [
  { name: "Hot Wallets", slug: "hot-wallets", rating: 4.0, affiliateUrl: "#", features: { "Internet Connection": "Always connected", "Key Storage": "Device or browser", Cost: "Free", "Setup Time": "Minutes", "Transaction Speed": "Instant signing", "DeFi Access": "Seamless", "Security Level": "Moderate", Recovery: "Seed phrase", "Best For": "Daily use, DeFi, trading", Examples: "MetaMask, Phantom, Trust Wallet" } },
  { name: "Cold Wallets", slug: "hardware", rating: 4.7, affiliateUrl: "#", features: { "Internet Connection": "Offline by default", "Key Storage": "Dedicated hardware", Cost: "$55-$250+", "Setup Time": "30+ minutes", "Transaction Speed": "Requires device", "DeFi Access": "Via companion app", "Security Level": "Maximum", Recovery: "Seed phrase or backup cards", "Best For": "Long-term storage", Examples: "Ledger, Trezor, Coldcard" } },
];

const faqs = [
  { question: "Should I use a hot or cold wallet?", answer: "Most serious crypto users should use both. Keep daily spending and DeFi funds in a hot wallet for convenience, and store the majority in a cold wallet for security. A common approach is to keep no more than you would in a physical wallet in your hot wallet, and treat the cold wallet like a savings account." },
  { question: "Can hot wallets connect to hardware wallets?", answer: "Yes. MetaMask, Rabby, and Phantom can connect to Ledger and Trezor hardware wallets. This gives you the dApp connectivity of a hot wallet while signing transactions on the cold device, combining the best of both approaches." },
  { question: "How much crypto should I keep in a hot wallet?", answer: "Only what you need for active trading and DeFi. A guideline is no more than 10-20% of your total portfolio or an amount you would be comfortable losing entirely. Anything held long-term should be in cold storage." },
];

export default function HotVsColdWalletsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Wallets", href: "/wallets" }, { label: "Compare", href: "/wallets/compare" }, { label: "Hot vs Cold Wallets", href: "/wallets/compare/hot-vs-cold-wallets" }]} />
      <AffiliateDisclosure />
      <header className="mb-8"><h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">Hot vs Cold Wallets ({CURRENT_YEAR})</h1><p className="text-[var(--color-text-secondary)]">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p></header>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">The hot vs cold wallet distinction is one of the most important decisions in crypto security. Hot wallets connect to the internet for convenience, while cold wallets stay offline for maximum security. Understanding these trade-offs helps you build a proper security strategy for your digital assets.</p>
      <section className="mb-10"><ComparisonTable items={items} features={["Internet Connection", "Key Storage", "Cost", "Setup Time", "Transaction Speed", "DeFi Access", "Security Level", "Recovery", "Best For", "Examples"]} title="Hot vs Cold Wallets" /></section>
      <div className="prose-crypto mb-10">
        <p>Hot wallets like MetaMask, Phantom, and Trust Wallet store your private keys on an internet-connected device. This enables instant transaction signing and seamless dApp connections, making them ideal for active DeFi use and trading. The trade-off is exposure to online threats including malware, phishing attacks, and remote exploits that could potentially access your keys. Hot wallets are best for funds you actively use on a daily or weekly basis.</p>
        <p>Cold wallets like Ledger, Trezor, and Coldcard store keys on dedicated hardware that never exposes them to the internet. Transaction signing happens on the device itself, so even if your computer is fully compromised, your keys remain safe and inaccessible to attackers. The trade-off is convenience — every transaction requires the physical device. Many experienced users combine both: a hot wallet for daily DeFi activity and a cold wallet for long-term savings and large holdings.</p>
      </div>
      <FAQSection faqs={faqs} />
      <section className="mt-12"><h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Related Content</h2><div className="grid md:grid-cols-2 gap-4"><Link href="/wallets/best/hardware" className="glass-subtle p-4 glass-hover"><span className="text-xs text-[var(--color-primary)]">Best Of</span><h3 className="text-sm font-semibold text-[var(--color-text)]">Best Hardware Wallets</h3></Link><Link href="/wallets/learn/wallet-security-best-practices" className="glass-subtle p-4 glass-hover"><span className="text-xs text-[var(--color-secondary)]">Guide</span><h3 className="text-sm font-semibold text-[var(--color-text)]">Wallet Security Best Practices</h3></Link></div></section>
    </div>
  );
}
