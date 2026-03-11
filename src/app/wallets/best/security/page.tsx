import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import ComparisonTable from "@/components/ComparisonTable";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { securityWallets, walletComparisonItems } from "@/data/wallets";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Most Secure Crypto Wallets of ${CURRENT_YEAR} - Security-Focused Reviews | ${SITE_NAME}`,
  description: `The most secure crypto wallets of ${CURRENT_YEAR}. Ledger, Trezor, Safe, Rabby and more. Expert analysis of hardware security, open-source code, and multi-sig protection.`,
};

const faqs = [
  { question: "What is the most secure crypto wallet?", answer: "For individual users, the Ledger Nano X with its CC EAL5+ Secure Element chip offers the strongest hardware security. Trezor Model T provides the highest transparency with fully open-source code. For organizations, Safe (Gnosis Safe) provides the best security through multi-signature approval requiring multiple parties to authorize transactions." },
  { question: "Is a hardware wallet really necessary?", answer: "If you hold any meaningful amount of crypto (generally over $500), a hardware wallet is strongly recommended. Hardware wallets keep your private keys offline on a dedicated device, protecting against malware, phishing, remote hacking, and keyloggers. The $79-$219 cost is minimal compared to the potential loss from a compromised hot wallet." },
  { question: "What is the difference between a Secure Element chip and regular encryption?", answer: "A Secure Element chip is a dedicated, tamper-resistant hardware component specifically designed to store cryptographic keys. It provides physical security against extraction attempts, while regular software encryption relies on your computer or phone's general-purpose processor. Secure Elements are the same technology used in bank cards and passports for a reason." },
];

export default function BestSecurityWalletsPage() {
  const comparisonItems = [
    walletComparisonItems["ledger-nano-x"],
    walletComparisonItems["trezor-model-t"],
    walletComparisonItems["safe"],
    walletComparisonItems["rabby"],
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Wallets", href: "/wallets" },
          { label: "Best Wallets", href: "/wallets/best" },
          { label: "Security", href: "/wallets/best/security" },
        ]}
      />
      <AffiliateDisclosure />
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-4">Most Secure Crypto Wallets of {CURRENT_MONTH} {CURRENT_YEAR}</h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          Security should be the top priority when choosing a crypto wallet. We analyzed hardware security,
          open-source transparency, multi-sig capabilities, and transaction safety features to find the most
          secure wallets for protecting your digital assets.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      </header>

      <section className="mb-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
        <h2 className="text-xl font-bold text-white mb-4">Quick Verdict</h2>
        <p className="text-[var(--color-text-secondary)]">
          The <strong className="text-white">Ledger Nano X</strong> offers the best hardware security with a certified
          Secure Element chip. The <strong className="text-white">Trezor Model T</strong> provides the best open-source
          transparency. <strong className="text-white">Safe</strong> is the gold standard for organizational security
          with multi-sig. <strong className="text-white">Rabby</strong> is the safest hot wallet for DeFi users with
          its pre-transaction simulation.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Most Secure Wallets, Ranked</h2>
        <div className="space-y-6">
          {securityWallets.map((product, index) => (
            <ProductCard key={product.name} product={product} rank={index + 1} categorySlug="wallets" />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <ComparisonTable
          items={comparisonItems}
          features={["Type", "Secure Element", "Open Source", "Multi-Sig", "Backup Method", "Price"]}
          title="Security Wallet Comparison"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/wallets/compare/ledger-vs-trezor" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-white text-sm">Ledger vs Trezor</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Hardware wallet showdown</p>
          </Link>
          <Link href="/wallets/learn/wallet-security-best-practices" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-white text-sm">Security Best Practices</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Protect your crypto assets</p>
          </Link>
          <Link href="/wallets/learn/multi-sig-wallets" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-white text-sm">Multi-Sig Explained</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Advanced wallet security</p>
          </Link>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
