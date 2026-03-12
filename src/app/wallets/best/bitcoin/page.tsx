import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { bitcoinWallets } from "@/data/wallets";

export const metadata: Metadata = {
  title: `Best Bitcoin Wallets of ${CURRENT_YEAR} - BTC Storage & Security | ${SITE_NAME}`,
  description: `The best Bitcoin wallets for ${CURRENT_YEAR}. Compare hardware and software BTC wallets for security, privacy, and ease of use. Ledger, Trezor, Exodus, and more.`,
};

const faqs = [
  {
    question: "What is the safest way to store Bitcoin?",
    answer:
      "The safest way to store Bitcoin is in a hardware wallet (cold storage) like the Ledger Nano X or Trezor Model T. These devices keep your private keys completely offline, protecting them from hackers and malware. For maximum security, use a hardware wallet with a strong PIN, passphrase, and securely stored seed phrase backup.",
  },
  {
    question: "Do I need a Bitcoin-specific wallet?",
    answer:
      "No, most modern multi-chain wallets support Bitcoin alongside other cryptocurrencies. However, some Bitcoin-specific wallets offer advanced features like coin control, custom fee settings, and Lightning Network support that multi-chain wallets may lack. If Bitcoin is your primary holding, a BTC-focused wallet may offer a better experience.",
  },
  {
    question: "What about Lightning Network wallets?",
    answer:
      "Lightning Network wallets like Phoenix, Breez, and Muun enable fast, low-cost Bitcoin payments. They are ideal for small, everyday transactions. However, for long-term storage of significant amounts, a standard on-chain Bitcoin wallet (preferably hardware) is recommended. Some wallets support both on-chain and Lightning transactions.",
  },
];

export default function BestBitcoinWalletsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Wallets", href: "/wallets" },
          { label: "Best Wallets", href: "/wallets/best" },
          { label: "Bitcoin Wallets", href: "/wallets/best/bitcoin" },
        ]}
      />

      <AffiliateDisclosure />

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Bitcoin Wallets of {CURRENT_MONTH} {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          Bitcoin is the most valuable cryptocurrency, and choosing the right wallet to store it
          is critical. We evaluated wallets based on BTC-specific security features, UTXO management,
          fee customization, and overall reliability to find the best options for Bitcoin holders.
        </p>
      </header>

      <section className="mb-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">What to Look for in a Bitcoin Wallet</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-[var(--color-text)] font-semibold mb-1 text-sm">Security Architecture</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Hardware wallets with secure element chips offer the strongest protection for BTC holdings.</p>
          </div>
          <div>
            <h3 className="text-[var(--color-text)] font-semibold mb-1 text-sm">Fee Control</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Good Bitcoin wallets let you set custom transaction fees and replace-by-fee (RBF) for pending transactions.</p>
          </div>
          <div>
            <h3 className="text-[var(--color-text)] font-semibold mb-1 text-sm">Address Types</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Support for SegWit (bech32) and Taproot addresses provides lower fees and better privacy.</p>
          </div>
          <div>
            <h3 className="text-[var(--color-text)] font-semibold mb-1 text-sm">Backup Options</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Seed phrase backup, optional passphrase, and multi-sig support for advanced users.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Best Bitcoin Wallets, Ranked</h2>
        <div className="space-y-6">
          {bitcoinWallets.map((product, index) => (
            <ProductCard key={product.name} product={product} rank={index + 1} categorySlug="wallets" />
          ))}
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
