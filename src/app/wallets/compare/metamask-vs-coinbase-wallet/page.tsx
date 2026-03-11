import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `MetaMask vs Coinbase Wallet (${CURRENT_YEAR}) - Which Is Better? | ${SITE_NAME}`,
  description: `MetaMask vs Coinbase Wallet side-by-side comparison for ${CURRENT_YEAR}. Features, fees, security, dApp support, and cloud backup compared.`,
};

const items = [
  { name: "MetaMask", slug: "metamask", rating: 4.5, affiliateUrl: "#", features: { Type: "Browser extension + mobile", Price: "Free", "Supported Chains": "All EVM chains", "Open Source": "Yes", "DeFi Access": "Universal", "NFT Support": "Basic gallery", "Cloud Backup": "No", "Hardware Wallet": "Ledger, Trezor", "Swap Fee": "0.875%", "Mobile App": "Yes" } },
  { name: "Coinbase Wallet", slug: "coinbase-wallet", rating: 4.3, affiliateUrl: "#", features: { Type: "Browser extension + mobile", Price: "Free", "Supported Chains": "Major EVM chains", "Open Source": "Partially", "DeFi Access": "Good", "NFT Support": "Good gallery", "Cloud Backup": "Yes (encrypted)", "Hardware Wallet": "Ledger", "Swap Fee": "0.875%", "Mobile App": "Yes" } },
];

const faqs = [
  { question: "Which is better for beginners?", answer: "Coinbase Wallet is generally better for beginners due to simpler setup, cloud backup option, and integration with Coinbase exchange for easy asset transfers. MetaMask has a steeper learning curve but offers more power and flexibility as you grow into DeFi." },
  { question: "Which has better security?", answer: "MetaMask is fully open source, providing code transparency. Coinbase Wallet offers encrypted cloud backup that prevents seed phrase loss but introduces cloud dependency. Neither is objectively more secure — both support hardware wallets for maximum security." },
  { question: "Can I use both?", answer: "Yes. You can install both browser extensions and use each for different purposes. Some users prefer MetaMask for DeFi and Coinbase Wallet for simple token management. Each creates separate accounts with different private keys." },
];

export default function MetaMaskVsCoinbaseWalletPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Wallets", href: "/wallets" }, { label: "Compare", href: "/wallets/compare" }, { label: "MetaMask vs Coinbase Wallet", href: "/wallets/compare/metamask-vs-coinbase-wallet" }]} />
      <AffiliateDisclosure />
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">MetaMask vs Coinbase Wallet ({CURRENT_YEAR})</h1>
        <p className="text-[var(--color-text-secondary)]">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      </header>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">MetaMask and Coinbase Wallet are two of the most popular Ethereum wallets with different philosophies. MetaMask targets experienced DeFi users with maximum dApp compatibility, while Coinbase Wallet focuses on accessibility with cloud backup and exchange integration. This comparison helps you decide which fits your workflow.</p>
      <section className="mb-10">
        <ComparisonTable items={items} features={["Type", "Price", "Supported Chains", "Open Source", "DeFi Access", "NFT Support", "Cloud Backup", "Hardware Wallet", "Swap Fee", "Mobile App"]} title="MetaMask vs Coinbase Wallet" />
      </section>
      <div className="prose-crypto mb-10">
        <p>MetaMask has broader dApp compatibility as the industry standard since 2016. Virtually every Ethereum dApp is tested with MetaMask first, making it the safest choice for DeFi power users who need universal access. The Snaps extension system adds new capabilities like non-EVM chain support and custom transaction insights. Coinbase Wallet offers smoother onboarding with the option to link your Coinbase exchange account and use cloud-encrypted backup for seed phrase recovery, which is a major advantage for users worried about losing their seed phrase.</p>
        <p>For DeFi power users who need to connect to every protocol and manage custom RPC networks, MetaMask is the clear choice. For beginners who want an easy setup with the safety net of cloud backup and a recognized brand behind the wallet, Coinbase Wallet provides a more accessible entry point into self-custody crypto management. Both wallets support Ledger hardware wallet integration for users who want maximum security regardless of which software wallet they prefer.</p>
      </div>
      <FAQSection faqs={faqs} />
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Related Content</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/wallets/best/beginners" className="glass-subtle p-4 glass-hover"><span className="text-xs text-[var(--color-primary)]">Best Of</span><h3 className="text-sm font-semibold text-[var(--color-text)]">Best Wallets for Beginners</h3></Link>
          <Link href="/wallets/learn/how-to-choose-crypto-wallet" className="glass-subtle p-4 glass-hover"><span className="text-xs text-[var(--color-secondary)]">Guide</span><h3 className="text-sm font-semibold text-[var(--color-text)]">How to Choose a Crypto Wallet</h3></Link>
        </div>
      </section>
    </div>
  );
}
