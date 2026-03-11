import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { mobileWallets } from "@/data/wallets";

export const metadata: Metadata = {
  title: `Best Mobile Crypto Wallets of ${CURRENT_YEAR} - iOS & Android | ${SITE_NAME}`,
  description: `The best mobile crypto wallets for iPhone and Android in ${CURRENT_YEAR}. Compare Phantom, Trust Wallet, Exodus, MetaMask mobile, and more for on-the-go crypto management.`,
};

const faqs = [
  {
    question: "What is the best mobile crypto wallet for iPhone?",
    answer:
      "Phantom is our top pick for iPhone users thanks to its beautiful design, multi-chain support (Solana, Ethereum, Bitcoin, Polygon), and smooth iOS integration. Trust Wallet is also excellent for iPhone if you need the broadest multi-chain coverage with 100+ blockchains supported.",
  },
  {
    question: "Are mobile crypto wallets safe?",
    answer:
      "Mobile crypto wallets are reasonably safe when used properly. iOS and Android both provide sandboxing that isolates wallet apps from other software. Enable biometric authentication, keep your operating system updated, and never store your seed phrase on your phone. For large holdings, pair a mobile wallet with a hardware wallet.",
  },
  {
    question: "Can I use the same wallet on my phone and computer?",
    answer:
      "Yes, most modern wallets like MetaMask, Phantom, and Trust Wallet allow you to import your account using your seed phrase across multiple devices. However, some wallets like Rabby are currently desktop-only. Always use the official app from the correct publisher to avoid fake apps.",
  },
];

export default function BestMobileWalletsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Wallets", href: "/wallets" },
          { label: "Best Wallets", href: "/wallets/best" },
          { label: "Mobile Wallets", href: "/wallets/best/mobile" },
        ]}
      />

      <AffiliateDisclosure />

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-4">
          Best Mobile Crypto Wallets of {CURRENT_MONTH} {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          The best mobile wallets put your crypto at your fingertips. Whether you are making payments,
          swapping tokens, or checking your portfolio on the go, these wallets offer the best combination
          of security, ease of use, and features on iOS and Android.
        </p>
      </header>

      <section className="mb-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
        <h2 className="text-xl font-bold text-white mb-4">What Makes a Great Mobile Wallet?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h3 className="text-white font-semibold mb-1 text-sm">Biometric Security</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Face ID and fingerprint authentication add an extra layer of protection.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1 text-sm">Clean Interface</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Mobile screens are small, so a well-designed UI is essential.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1 text-sm">dApp Browser</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">A built-in browser lets you access DeFi and NFT platforms directly.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1 text-sm">Push Notifications</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Alerts for incoming transactions and price movements keep you informed.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Best Mobile Wallets, Ranked</h2>
        <div className="space-y-6">
          {mobileWallets.map((product, index) => (
            <ProductCard key={product.name} product={product} rank={index + 1} categorySlug="wallets" />
          ))}
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
