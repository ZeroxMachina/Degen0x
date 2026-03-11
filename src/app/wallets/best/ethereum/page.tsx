import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { ethereumWallets } from "@/data/wallets";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Best Ethereum Wallets of ${CURRENT_YEAR} - ETH & ERC-20 | ${SITE_NAME}`,
  description: `The best Ethereum wallets for ${CURRENT_YEAR}. Compare MetaMask, Rabby, Ledger, and more for ETH, ERC-20 tokens, DeFi, and NFTs.`,
};

const faqs = [
  {
    question: "What is the best Ethereum wallet?",
    answer:
      "MetaMask is the most widely used and best-supported Ethereum wallet. It integrates with virtually every Ethereum dApp, DEX, and DeFi protocol. For security-conscious users, Rabby offers transaction simulation that shows you exactly what will happen before you sign. For maximum security, pair either with a Ledger or Trezor hardware wallet.",
  },
  {
    question: "Do Ethereum wallets support ERC-20 tokens?",
    answer:
      "Yes, all Ethereum wallets automatically support ERC-20 tokens since they use the same underlying Ethereum address. You may need to manually add token contract addresses for less common tokens, but major tokens like USDC, USDT, UNI, and LINK are typically auto-detected.",
  },
  {
    question: "What about Layer 2 networks like Arbitrum and Optimism?",
    answer:
      "Most modern Ethereum wallets support Layer 2 networks out of the box. MetaMask, Rabby, and other EVM wallets can connect to Arbitrum, Optimism, Base, Polygon, and other L2s with a simple network switch. These L2s offer much lower gas fees while inheriting Ethereum's security.",
  },
];

export default function BestEthereumWalletsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Wallets", href: "/wallets" },
          { label: "Best Wallets", href: "/wallets/best" },
          { label: "Ethereum Wallets", href: "/wallets/best/ethereum" },
        ]}
      />

      <AffiliateDisclosure />

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-4">
          Best Ethereum Wallets of {CURRENT_MONTH} {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          Ethereum is the backbone of DeFi, NFTs, and thousands of dApps. The right wallet gives you
          seamless access to this ecosystem while keeping your ETH and tokens secure. We tested the
          top Ethereum wallets for dApp compatibility, gas management, security, and ease of use.
        </p>
      </header>

      <section className="mb-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
        <h2 className="text-xl font-bold text-white mb-3">Why Ethereum Wallets Matter</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Unlike simple Bitcoin wallets, Ethereum wallets need to handle smart contract interactions,
          token approvals, gas fee estimation, and multi-network switching. A good Ethereum wallet makes
          DeFi and NFT activity safe and intuitive, while a poor one can lead to costly mistakes like
          overpaying gas or signing malicious approvals.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="text-center p-3 rounded-lg bg-[var(--color-bg)]/50">
            <p className="text-[var(--color-primary)] font-bold text-lg">$100B+</p>
            <p className="text-xs text-[var(--color-text-secondary)]">Secured in Ethereum wallets</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-[var(--color-bg)]/50">
            <p className="text-[var(--color-primary)] font-bold text-lg">4,000+</p>
            <p className="text-xs text-[var(--color-text-secondary)]">dApps on Ethereum</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-[var(--color-bg)]/50">
            <p className="text-[var(--color-primary)] font-bold text-lg">10+</p>
            <p className="text-xs text-[var(--color-text-secondary)]">Layer 2 networks supported</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Best Ethereum Wallets, Ranked</h2>
        <div className="space-y-6">
          {ethereumWallets.map((product, index) => (
            <ProductCard key={product.name} product={product} rank={index + 1} categorySlug="wallets" />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/wallets/compare/metamask-vs-phantom" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-white text-sm">MetaMask vs Phantom</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">ETH vs SOL wallet comparison</p>
          </Link>
          <Link href="/wallets/best/defi" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-white text-sm">Best DeFi Wallets</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">For DeFi power users</p>
          </Link>
          <Link href="/wallets/tools/gas-fee-tracker" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-white text-sm">Gas Fee Tracker</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Real-time Ethereum gas prices</p>
          </Link>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
