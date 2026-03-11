import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import ComparisonTable from "@/components/ComparisonTable";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { beginnerWallets, walletComparisonItems } from "@/data/wallets";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Best Crypto Wallets for Beginners (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `The easiest crypto wallets for beginners in ${CURRENT_YEAR}. Exodus, Coinbase Wallet, Phantom and more. Simple setup, intuitive interfaces, and step-by-step guides.`,
};

const faqs = [
  { question: "What is the easiest crypto wallet to use?", answer: "Exodus is the easiest crypto wallet for beginners thanks to its intuitive design, built-in exchange, and multi-platform support. Coinbase Wallet is also excellent for beginners, especially those already using Coinbase exchange. Both offer straightforward setup processes and clean interfaces that do not overwhelm new users." },
  { question: "Do I need a crypto wallet if I use an exchange?", answer: "Using a self-custody wallet is strongly recommended for anyone holding crypto long-term. Exchange wallets (custodial) mean the exchange holds your keys, which exposes you to exchange hacks and insolvency risks. A self-custody wallet gives you full control of your assets. You can start with an exchange and gradually move funds to your own wallet." },
  { question: "How much crypto should I have before getting a hardware wallet?", answer: "There is no strict threshold, but many experts recommend a hardware wallet once you hold more than $500-$1,000 in crypto. The cost of a hardware wallet ($79-$149) is a small price for security. Even with smaller amounts, a hardware wallet is worthwhile if you plan to accumulate over time." },
];

export default function BestBeginnersWalletsPage() {
  const comparisonItems = [
    walletComparisonItems["exodus"],
    walletComparisonItems["coinbase-wallet"],
    walletComparisonItems["phantom"],
    walletComparisonItems["trust-wallet"],
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Wallets", href: "/wallets" },
          { label: "Best Wallets", href: "/wallets/best" },
          { label: "For Beginners", href: "/wallets/best/beginners" },
        ]}
      />
      <AffiliateDisclosure />
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-4">Best Crypto Wallets for Beginners ({CURRENT_YEAR})</h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          Starting your crypto journey can be overwhelming. The right wallet makes it simple with easy setup,
          clear interfaces, and helpful guidance. We tested every major wallet from a beginner&apos;s perspective
          to find the most approachable options.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      </header>

      <section className="mb-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
        <h2 className="text-xl font-bold text-white mb-4">Quick Verdict</h2>
        <p className="text-[var(--color-text-secondary)]">
          <strong className="text-white">Exodus</strong> is our top pick for beginners with its stunning design
          and intuitive interface. <strong className="text-white">Coinbase Wallet</strong> is ideal if you already
          use Coinbase exchange, as the integration makes transferring funds effortless. For your first hardware
          wallet, the <strong className="text-white">Ledger Nano S Plus</strong> at $79 is the best value entry point.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Best Beginner Wallets, Ranked</h2>
        <div className="space-y-6">
          {beginnerWallets.map((product, index) => (
            <ProductCard key={product.name} product={product} rank={index + 1} categorySlug="wallets" />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <ComparisonTable
          items={comparisonItems}
          features={["Type", "Price", "Supported Coins", "Mobile App", "DeFi Access", "Staking", "Backup Method"]}
          title="Beginner Wallet Comparison"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/wallets/learn/what-is-a-crypto-wallet" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-white text-sm">What Is a Crypto Wallet?</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Wallet basics explained</p>
          </Link>
          <Link href="/wallets/learn/how-to-set-up-wallet" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-white text-sm">How to Set Up a Wallet</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Step-by-step setup guide</p>
          </Link>
          <Link href="/wallets/learn/seed-phrase-explained" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-white text-sm">Seed Phrase Explained</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Understand your backup words</p>
          </Link>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
