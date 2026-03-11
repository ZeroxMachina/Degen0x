import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { walletProducts } from "@/data/wallets";

export const metadata: Metadata = {
  title: `Best Crypto Wallets in Europe (${CURRENT_YEAR})`,
  description: `Compare the best crypto wallets for European residents in ${CURRENT_YEAR}. Secure self-custody wallets with EUR on-ramp support, MiCA-era considerations, and multi-language interfaces.`,
  keywords: [
    "best crypto wallets Europe",
    "European crypto wallets",
    "best cryptocurrency wallet EU",
    "best bitcoin wallet Europe",
    "hardware wallet Europe",
  ],
};

const europeWallets = [
  walletProducts[0], // Ledger Nano X
  walletProducts[2], // Trezor Model T
  walletProducts[4], // MetaMask
  walletProducts[7], // Exodus
  walletProducts[6], // Trust Wallet
];

const faqs = [
  {
    question: "What is the best crypto wallet for Europeans?",
    answer:
      "Ledger Nano X, made by the Paris-based company Ledger, is the top choice for European users. It ships from France with fast delivery across Europe, no customs issues within the EU, and supports over 5,500 assets. Trezor, made in Czech Republic, is another excellent European-made option.",
  },
  {
    question: "Are there crypto wallets made in Europe?",
    answer:
      "Yes. Ledger is headquartered in Paris, France, and Trezor is made by SatoshiLabs in Prague, Czech Republic. Both are among the most trusted hardware wallet manufacturers globally. Buying from a European manufacturer means faster shipping, no customs, and EU consumer protections.",
  },
  {
    question: "How does MiCA affect crypto wallets?",
    answer:
      "MiCA primarily regulates crypto asset service providers (exchanges, brokers) rather than personal wallets. Self-custody wallets remain fully legal to use across the EU. However, MiCA's Travel Rule requirements mean exchanges may ask for wallet ownership verification when you withdraw to a personal wallet.",
  },
  {
    question: "Which wallet supports the most European languages?",
    answer:
      "Ledger Live supports French, German, Spanish, Portuguese, Italian, Russian, and more. Trust Wallet supports over 70 languages. MetaMask supports all major European languages. Exodus offers English, Spanish, and Portuguese. Multi-language support is generally strong across top wallets.",
  },
  {
    question: "Can I buy crypto with EUR in a wallet?",
    answer:
      "Yes. MetaMask, Trust Wallet, and Exodus support EUR purchases via debit card and bank transfer through integrated providers like MoonPay, Transak, and Ramp Network. Ramp Network, a European company, often provides the best EUR rates and supports SEPA transfers.",
  },
  {
    question: "How should European users handle crypto taxes with wallets?",
    answer:
      "Tax treatment varies significantly by country (Germany has a 1-year holding exemption, France uses a flat 30% rate, etc.). Use a tax tool like Koinly or Blockpit (an Austrian company specializing in European tax compliance) to import your wallet transactions and generate country-specific tax reports.",
  },
];

export default function EuropeWalletsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Wallets", href: "/wallets" },
          { label: "Best Wallets", href: "/wallets/best" },
          { label: "Best in Europe", href: "/wallets/best/europe" },
        ]}
      />

      <h1 className="text-4xl font-bold text-white mb-4">
        Best Crypto Wallets in Europe ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          European crypto users have a unique advantage: two of the world&apos;s leading hardware
          wallet manufacturers, Ledger and Trezor, are based in Europe. This means faster
          shipping, no customs duties within the EU, and products designed with European
          privacy standards in mind. Whether you hold Bitcoin, Ethereum, or a diverse
          portfolio, here are the best wallets for European residents.
        </p>
        <h2 className="text-xl font-bold text-white mt-8 mb-4">European-Made Security</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Ledger (France) uses certified secure element chips and has sold over 6 million
          devices globally. Trezor (Czech Republic) pioneered the hardware wallet concept
          and maintains fully open-source firmware. Both companies operate under EU GDPR
          regulations, providing strong data privacy protections. European users benefit
          from EU consumer protection laws, including 2-year warranty requirements.
        </p>
        <h2 className="text-xl font-bold text-white mt-8 mb-4">MiCA and Self-Custody</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          The EU&apos;s MiCA regulation does not restrict personal crypto wallet usage. Self-custody
          remains a fundamental right for European crypto holders. However, the Travel Rule
          under MiCA requires exchanges to verify ownership of personal wallets for transfers
          above certain thresholds. This makes keeping organized records of your wallet
          addresses more important than ever.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {europeWallets.map((wallet, index) => (
          <ProductCard
            key={wallet.slug}
            product={wallet}
            rank={index + 1}
            categorySlug="wallets"
          />
        ))}
      </div>

      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Wallet Tips for European Users</h2>
        <div className="space-y-4 text-[var(--color-text-secondary)]">
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">1.</span>
            <div>
              <h3 className="text-white font-semibold">Buy European-made hardware wallets</h3>
              <p className="text-sm">Ledger and Trezor ship from within the EU, meaning no customs, fast delivery, and EU warranty protection.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">2.</span>
            <div>
              <h3 className="text-white font-semibold">Use country-specific tax software</h3>
              <p className="text-sm">Blockpit (Austria) specializes in EU tax reporting. Koinly supports most European countries. Choose based on your location.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">3.</span>
            <div>
              <h3 className="text-white font-semibold">Register your wallet addresses with exchanges</h3>
              <p className="text-sm">Under MiCA Travel Rule requirements, pre-registering your wallet addresses speeds up withdrawals from exchanges.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
