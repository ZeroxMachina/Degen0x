import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Multisig vs Single-Key Wallets (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Multi-signature vs single-key wallet comparison for ${CURRENT_YEAR}. Security models, use cases, costs, and setup complexity compared.`,
};

const items = [
  { name: "Multisig Wallets", slug: "safe-wallet", rating: 4.5, affiliateUrl: "#", features: { "Keys Required": "M-of-N (e.g. 2-of-3)", "Setup Complexity": "High", "Tx Cost": "Higher (smart contract)", "Recovery Options": "Redundant key holders", Coordination: "Multiple signers", "Single Point of Failure": "No", "Best For": "Teams, DAOs, high-value", Examples: "Safe, Electrum multisig", "Key Storage": "Distributed", Speed: "Slower" } },
  { name: "Single-Key Wallets", slug: "metamask", rating: 4.2, affiliateUrl: "#", features: { "Keys Required": "One key", "Setup Complexity": "Low", "Tx Cost": "Standard", "Recovery Options": "Seed phrase only", Coordination: "None needed", "Single Point of Failure": "Yes", "Best For": "Individual daily use", Examples: "MetaMask, Phantom, Ledger", "Key Storage": "Single location", Speed: "Instant signing" } },
];

const faqs = [
  { question: "Should individuals use multisig?", answer: "Individuals with significant holdings can benefit from personal 2-of-3 multisig across different devices (phone, hardware wallet, backup device). This protects against single device loss. For everyday DeFi with moderate amounts, single-key wallets are more practical." },
  { question: "How much does multisig cost?", answer: "Creating a Safe costs gas for smart contract deployment. Each transaction costs 30-50% more gas than standard due to smart contract logic. On Layer 2 networks, these additional costs are minimal." },
  { question: "Can I convert single-key to multisig?", answer: "You cannot convert an existing wallet. Instead, create a new multisig (like Safe), designate signers, then transfer assets from your old wallet to the new multisig address." },
];

export default function MultisigVsSingleKeyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Wallets", href: "/wallets" }, { label: "Compare", href: "/wallets/compare" }, { label: "Multisig vs Single-Key", href: "/wallets/compare/multisig-vs-single-key" }]} />
      <AffiliateDisclosure />
      <header className="mb-8"><h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">Multisig vs Single-Key Wallets ({CURRENT_YEAR})</h1><p className="text-[var(--color-text-secondary)]">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p></header>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">Multisig wallets require multiple private keys to authorize transactions, while single-key wallets use one key for full control. This comparison explores security implications, practical trade-offs, and ideal use cases for each approach.</p>
      <section className="mb-10"><ComparisonTable items={items} features={["Keys Required", "Setup Complexity", "Tx Cost", "Recovery Options", "Coordination", "Single Point of Failure", "Best For", "Examples", "Key Storage", "Speed"]} title="Multisig vs Single-Key" /></section>
      <div className="prose-crypto mb-10">
        <p>Multisig wallets eliminate the single point of failure inherent in single-key setups. With a 2-of-3 configuration, losing one key does not mean losing funds, and a single compromised key cannot steal assets. This makes multisig the gold standard for organizational treasuries, shared accounts, and high-value individual storage. The trade-off is coordination overhead and higher gas costs due to smart contract execution on every transaction.</p>
        <p>Single-key wallets offer simplicity and speed — one person, one key, instant signing. They are practical for everyday DeFi, trading, and moderate holdings. The risk is concentration: your entire security depends on one seed phrase. For individuals with good seed phrase practices, single-key works well. For organizations or large portfolios, multisig security is worth the added complexity and cost.</p>
      </div>
      <FAQSection faqs={faqs} />
      <section className="mt-12"><h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Related Content</h2><div className="grid md:grid-cols-2 gap-4"><Link href="/wallets/learn/multisig-setup-guide" className="glass-subtle p-4 glass-hover"><span className="text-xs text-[var(--color-primary)]">Guide</span><h3 className="text-sm font-semibold text-[var(--color-text)]">Multisig Setup Guide</h3></Link><Link href="/wallets/reviews/safe-wallet" className="glass-subtle p-4 glass-hover"><span className="text-xs text-[var(--color-secondary)]">Review</span><h3 className="text-sm font-semibold text-[var(--color-text)]">Safe Wallet Review</h3></Link></div></section>
    </div>
  );
}
