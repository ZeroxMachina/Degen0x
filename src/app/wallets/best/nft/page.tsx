import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import ComparisonTable from "@/components/ComparisonTable";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { nftWallets, walletComparisonItems } from "@/data/wallets";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Best NFT Wallets of ${CURRENT_YEAR} - Top Wallets for NFTs | ${SITE_NAME}`,
  description: `Compare the best wallets for NFTs in ${CURRENT_YEAR}. Phantom, MetaMask, Rabby and more. Expert-tested for NFT display, minting, trading, and multi-chain collections.`,
};

const faqs = [
  { question: "What is the best wallet for NFTs?", answer: "Phantom offers the best NFT experience with its beautiful gallery display, collection grouping, floor price data, and spam NFT detection. It supports NFTs on Solana, Ethereum, Polygon, and Bitcoin (Ordinals). MetaMask is the most widely compatible for Ethereum NFT marketplaces like OpenSea and Blur." },
  { question: "Can I view my NFTs in my wallet?", answer: "Yes. Most modern wallets automatically detect and display your NFTs. Phantom, MetaMask, Trust Wallet, and Coinbase Wallet all show NFT galleries. The quality of the display varies: Phantom has the richest NFT interface, while others provide basic image previews with collection information." },
  { question: "Should I use a hardware wallet for NFTs?", answer: "If you hold valuable NFTs, using a hardware wallet adds significant security. You can connect a Ledger to MetaMask or Phantom to sign NFT transactions while keeping your keys offline. This protects against phishing attacks that target NFT collectors." },
];

export default function BestNFTWalletsPage() {
  const comparisonItems = [
    walletComparisonItems["phantom"],
    walletComparisonItems["metamask"],
    walletComparisonItems["rabby"],
    walletComparisonItems["trust-wallet"],
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Wallets", href: "/wallets" },
          { label: "Best Wallets", href: "/wallets/best" },
          { label: "NFT Wallets", href: "/wallets/best/nft" },
        ]}
      />
      <AffiliateDisclosure />
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Best NFT Wallets of {CURRENT_MONTH} {CURRENT_YEAR}</h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          The right wallet makes collecting, viewing, and trading NFTs seamless. We tested the leading wallets
          for NFT gallery quality, marketplace compatibility, multi-chain collection support, and security features
          that protect against the scams targeting NFT collectors.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      </header>

      <section className="mb-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Quick Verdict</h2>
        <p className="text-[var(--color-text-secondary)]">
          <strong className="text-[var(--color-text)]">Phantom</strong> has the best NFT experience across Solana, Ethereum, and
          Bitcoin Ordinals. For Ethereum-only collectors, <strong className="text-[var(--color-text)]">MetaMask</strong> is the
          most widely compatible with NFT marketplaces. <strong className="text-[var(--color-text)]">Rabby</strong> adds security
          with transaction simulation that helps prevent NFT-related scams.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Best NFT Wallets, Ranked</h2>
        <div className="space-y-6">
          {nftWallets.map((product, index) => (
            <ProductCard key={product.name} product={product} rank={index + 1} categorySlug="wallets" />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <ComparisonTable
          items={comparisonItems}
          features={["Type", "Price", "Supported Coins", "NFT Support", "DeFi Access", "Mobile App", "Open Source"]}
          title="NFT Wallet Comparison"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/wallets/reviews/phantom" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Phantom Review</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Best overall NFT wallet</p>
          </Link>
          <Link href="/wallets/best/solana" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Best Solana Wallets</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Top wallets for Solana NFTs</p>
          </Link>
          <Link href="/wallets/learn/wallet-security-best-practices" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Security Best Practices</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Protect your NFT collection</p>
          </Link>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
