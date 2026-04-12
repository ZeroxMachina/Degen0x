import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { walletProducts } from "@/data/wallets";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best Crypto Wallets in the UK (${CURRENT_YEAR})`,
  description: `Compare the best crypto wallets for UK residents in ${CURRENT_YEAR}. Secure hardware and software wallets with GBP on-ramp support, HMRC-compatible tax exports, and strong security.`,
  keywords: [
    "best crypto wallets UK",
    "UK crypto wallets",
    "best cryptocurrency wallet United Kingdom",
    "best bitcoin wallet UK",
    "hardware wallet UK",
  ],
};

const ukWallets = [
  walletProducts[0], // Ledger Nano X
  walletProducts[2], // Trezor Model T
  walletProducts[4], // MetaMask
  walletProducts[7], // Exodus
  walletProducts[6], // Trust Wallet
];

const faqs = [
  {
    question: "What is the best crypto wallet for UK residents?",
    answer:
      "Ledger Nano X is the best overall wallet for UK residents due to its top-tier security, Bluetooth connectivity, and wide asset support. For a free software option, MetaMask is excellent for Ethereum and DeFi users, while Exodus offers the best all-around desktop experience.",
  },
  {
    question: "Can I buy crypto directly in a wallet in the UK?",
    answer:
      "Yes. MetaMask, Trust Wallet, and Exodus all support direct crypto purchases for UK users via third-party providers like MoonPay, Transak, and Wyre. You can pay with GBP via debit card or bank transfer. Fees are typically 1-5% depending on the provider and payment method.",
  },
  {
    question: "Do I need to report crypto wallet holdings to HMRC?",
    answer:
      "You do not need to report holdings, but you must report any disposals (sales, trades, or spending) that trigger capital gains tax. HMRC requires you to keep records of all crypto transactions, including wallet transfers, for at least 5 years. Good wallet record-keeping is essential.",
  },
  {
    question: "Are hardware wallets available for delivery in the UK?",
    answer:
      "Yes. Ledger and Trezor both ship directly to UK addresses. Delivery typically takes 3-7 business days. Always order from the official manufacturer website to avoid tampered devices. UK import duties may apply on orders over 135 pounds.",
  },
  {
    question: "Which wallet is best for UK tax reporting?",
    answer:
      "Exodus and Ledger Live both export transaction histories in formats compatible with UK tax tools like Koinly and CoinTracker. Koinly in particular is popular with UK users and supports importing data from most major wallets automatically via public address tracking.",
  },
  {
    question: "Is MetaMask safe for UK users?",
    answer:
      "MetaMask is safe when used correctly. It is a non-custodial wallet, meaning you control your private keys. Enable password protection, never share your seed phrase, and be cautious about which dApps you connect to. MetaMask does not hold your funds and cannot freeze or seize them.",
  },
];

export default function UKWalletsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Wallets", href: "/wallets" },
          { label: "Best Wallets", href: "/wallets/best" },
          { label: "Best in the UK", href: "/wallets/best/uk" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Crypto Wallets in the UK ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          UK crypto holders need wallets that combine strong security with practical features
          like GBP on-ramp support and HMRC-compatible transaction exports. Whether you are
          storing Bitcoin long-term or actively using DeFi, choosing the right wallet protects
          your assets and simplifies tax season. Here are the best options for UK residents.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Choosing a Wallet in the UK</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          UK users should consider several factors: security features, supported cryptocurrencies,
          ease of backing up and recovering the wallet, integration with UK-friendly tax tools,
          and whether the wallet supports direct GBP purchases. The FCA&apos;s crypto promotion
          rules do not affect personal wallet choices, as wallets themselves are not regulated
          products.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Self-Custody vs Exchange Custody</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          While FCA-registered exchanges offer convenience, they do not provide FSCS protection
          for crypto holdings. This makes self-custody through personal wallets an attractive
          option for UK users who want full control. Hardware wallets are particularly popular
          among UK holders for securing larger amounts of Bitcoin and Ethereum.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {ukWallets.map((wallet, index) => (
          <ProductCard
            key={wallet.slug}
            product={wallet}
            rank={index + 1}
            categorySlug="wallets"
          />
        ))}
      </div>

      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">UK Wallet Security Best Practices</h2>
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
        <div className="space-y-4 text-[var(--color-text-secondary)]">
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">1.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Store seed phrases in a fireproof safe</h3>
              <p className="text-sm">Consider a metal seed phrase backup for fire and water resistance. Available from Ledger and third parties.</p>
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

          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">2.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Use separate wallets for different purposes</h3>
              <p className="text-sm">Keep a hardware wallet for long-term storage and a software wallet for daily DeFi activities.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">3.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Keep transaction records for HMRC</h3>
              <p className="text-sm">Export your wallet transactions regularly and keep records for at least 5 years as HMRC requires.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
