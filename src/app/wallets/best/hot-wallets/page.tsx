import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { hotWallets } from "@/data/wallets";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Best Hot Wallets of ${CURRENT_YEAR} - Internet-Connected Wallets | ${SITE_NAME}`,
  description: `The best hot wallets for crypto in ${CURRENT_YEAR}. Compare MetaMask, Phantom, Trust Wallet, and more. Find the most secure internet-connected wallet for trading, DeFi, and NFTs.`,
};

const faqs = [
  {
    question: "What is a hot wallet?",
    answer:
      "A hot wallet is any cryptocurrency wallet that is connected to the internet. This includes browser extension wallets (MetaMask, Phantom), mobile wallets (Trust Wallet), and desktop applications (Exodus). They are called 'hot' because they are always online, making them convenient for quick transactions but potentially vulnerable to online threats.",
  },
  {
    question: "How much crypto should I keep in a hot wallet?",
    answer:
      "A common rule of thumb is to keep only what you need for active trading or upcoming transactions in a hot wallet. Think of it like a checking account versus a savings account. Most experts suggest keeping no more than 10-20% of your total crypto holdings in hot wallets, with the rest in cold storage (hardware wallets).",
  },
  {
    question: "Can hot wallets be hacked?",
    answer:
      "Hot wallets can be compromised through malware, phishing attacks, malicious smart contract approvals, or compromised browser extensions. However, modern hot wallets use strong encryption and security measures to minimize these risks. The most common attack vector is social engineering and phishing, not direct wallet hacks.",
  },
];

export default function BestHotWalletsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Wallets", href: "/wallets" },
          { label: "Best Wallets", href: "/wallets/best" },
          { label: "Hot Wallets", href: "/wallets/best/hot-wallets" },
        ]}
      />

      <AffiliateDisclosure />

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Hot Wallets of {CURRENT_MONTH} {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          Hot wallets give you instant access to your crypto for trading, DeFi, NFTs, and everyday
          transactions. While they trade some security for convenience compared to hardware wallets,
          the best hot wallets include robust protections like transaction simulation and phishing detection.
        </p>
      </header>

      <section className="mb-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
          <h3 className="text-[var(--color-success)] font-semibold mb-2">Advantages of Hot Wallets</h3>
          <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
            <li>+ Free to use with no upfront costs</li>
            <li>+ Instant access and fast transactions</li>
            <li>+ Direct connection to DeFi and dApps</li>
            <li>+ Easy to set up in minutes</li>
            <li>+ Available on all platforms</li>
          </ul>
        </div>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
          <h3 className="text-[var(--color-danger)] font-semibold mb-2">Risks to Consider</h3>
          <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
            <li>- Vulnerable to malware and phishing</li>
            <li>- Private keys stored on internet-connected device</li>
            <li>- Malicious smart contract risk</li>
            <li>- Browser extension can be targeted</li>
            <li>- Not ideal for large long-term holdings</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Best Hot Wallets, Ranked</h2>
        <div className="space-y-6">
          {hotWallets.map((product, index) => (
            <ProductCard key={product.name} product={product} rank={index + 1} categorySlug="wallets" />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/wallets/learn/hot-vs-cold-wallets" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Hot vs Cold Wallets</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Which type is right for you?</p>
          </Link>
          <Link href="/wallets/best/hardware" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Best Hardware Wallets</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">For maximum security</p>
          </Link>
          <Link href="/wallets/learn/wallet-security-best-practices" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Security Best Practices</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Keep your hot wallet safe</p>
          </Link>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
