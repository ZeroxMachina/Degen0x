import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import ComparisonTable from "@/components/ComparisonTable";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { privacyWallets, walletComparisonItems } from "@/data/wallets";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Best Privacy Crypto Wallets of ${CURRENT_YEAR} - Anonymous Wallet Reviews | ${SITE_NAME}`,
  description: `Compare the best privacy-focused crypto wallets of ${CURRENT_YEAR}. Trezor, Rabby, MetaMask and more. CoinJoin, Tor support, no KYC, and private transactions.`,
};

const faqs = [
  { question: "Which crypto wallet is most private?", answer: "Trezor offers the strongest privacy features with built-in CoinJoin for Bitcoin transaction mixing, Tor network connectivity, and passphrase-protected hidden wallets. All transactions are handled locally without transmitting data to third-party servers. Trezor is also fully open-source so you can verify its privacy claims." },
  { question: "Can I use a crypto wallet without KYC?", answer: "Yes. Self-custody wallets like Trezor, MetaMask, Rabby, Phantom, and Exodus do not require any identity verification to create or use. You download the app, generate a wallet, and start using it immediately. KYC is only required when using centralized exchanges or fiat on-ramp services within wallets." },
  { question: "What is CoinJoin?", answer: "CoinJoin is a Bitcoin privacy technique that combines multiple transactions from different users into a single transaction, making it difficult to trace which inputs correspond to which outputs. Trezor Suite supports CoinJoin natively through the Wasabi Wallet coordinator, charging a 0.3% fee for the privacy service." },
];

export default function BestPrivacyWalletsPage() {
  const comparisonItems = [
    walletComparisonItems["trezor-model-t"],
    walletComparisonItems["trezor-safe-3"],
    walletComparisonItems["rabby"],
    walletComparisonItems["metamask"],
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Wallets", href: "/wallets" },
          { label: "Best Wallets", href: "/wallets/best" },
          { label: "Privacy", href: "/wallets/best/privacy" },
        ]}
      />
      <AffiliateDisclosure />
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-4">Best Privacy Crypto Wallets of {CURRENT_MONTH} {CURRENT_YEAR}</h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          Financial privacy is a fundamental right. The best privacy wallets minimize data exposure,
          support transaction mixing, run over Tor, require no identity verification, and keep your
          on-chain activity as private as possible. We evaluated the top options for privacy-conscious users.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      </header>

      <section className="mb-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
        <h2 className="text-xl font-bold text-white mb-4">Quick Verdict</h2>
        <p className="text-[var(--color-text-secondary)]">
          <strong className="text-white">Trezor</strong> wallets are the privacy leaders with CoinJoin integration,
          Tor support, passphrase-protected hidden wallets, and fully open-source code. For EVM DeFi users,
          <strong className="text-white"> Rabby</strong> and <strong className="text-white">MetaMask</strong> are
          solid choices as they require no KYC and offer local key storage. All self-custody wallets provide
          a baseline level of privacy since they do not require identity verification.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Best Privacy Wallets, Ranked</h2>
        <div className="space-y-6">
          {privacyWallets.map((product, index) => (
            <ProductCard key={product.name} product={product} rank={index + 1} categorySlug="wallets" />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <ComparisonTable
          items={comparisonItems}
          features={["Type", "Open Source", "Secure Element", "Backup Method", "Price", "Mobile App"]}
          title="Privacy Wallet Comparison"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/wallets/reviews/trezor" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-white text-sm">Trezor Review</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Best privacy hardware wallet</p>
          </Link>
          <Link href="/wallets/best/security" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-white text-sm">Best for Security</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Most secure wallet options</p>
          </Link>
          <Link href="/wallets/learn/wallet-security-best-practices" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-white text-sm">Security Best Practices</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Protect your privacy</p>
          </Link>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
