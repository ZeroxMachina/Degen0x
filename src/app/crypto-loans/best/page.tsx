import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import ComparisonTable from "@/components/ComparisonTable";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { CRYPTO_LOAN_PRODUCTS, LOAN_COMPARISON_ITEMS, LOAN_COMPARISON_FEATURES, LOAN_FAQS } from "@/data/crypto-loans";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto Loan Platforms of ${CURRENT_YEAR} (Ranked & Reviewed)`,
  description: `Compare the best crypto loan platforms of ${CURRENT_YEAR}. We tested rates, LTV ratios, collateral support, and security. Find the best way to borrow against your crypto.`,
};

export default function BestCryptoLoansPage() {
  const ranked = CRYPTO_LOAN_PRODUCTS.filter((p) => p.slug !== "celsius").sort((a, b) => b.rating - a.rating);
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Loans", href: "/crypto-loans" }, { label: "Best Crypto Loans", href: "/crypto-loans/best" }]} />
      <h1 className="text-4xl font-bold text-white mb-4">Best Crypto Loan Platforms of {CURRENT_YEAR}</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <AffiliateDisclosure />
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">Crypto-backed loans let you access liquidity without selling your crypto assets. Whether you need cash for expenses, want to avoid taxable events, or plan to leverage your holdings, these platforms offer various ways to borrow against Bitcoin, Ethereum, and other cryptocurrencies. We evaluated each platform for interest rates, loan-to-value ratios, collateral options, security, and overall borrower experience.</p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">For DeFi borrowers, <strong className="text-white">Aave</strong> offers the deepest liquidity and most flexible terms. For CeFi borrowers wanting a simple experience, <strong className="text-white">Nexo</strong> provides competitive rates with no monthly payments required. For DAI stablecoin borrowers, <strong className="text-white">MakerDAO</strong> pioneered the space and remains a strong choice.</p>
      </div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Our Rankings</h2>
        <div className="space-y-4">{ranked.map((p, i) => (<ProductCard key={p.slug} product={p} rank={i + 1} categorySlug="crypto-loans" />))}</div>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Platform Comparison</h2>
        <ComparisonTable items={LOAN_COMPARISON_ITEMS} features={LOAN_COMPARISON_FEATURES} title="Feature Comparison" />
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Browse by Loan Type</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "Bitcoin Loans", href: "/crypto-loans/best/bitcoin-loans", desc: "Borrow against BTC" },
            { title: "DeFi Loans", href: "/crypto-loans/best/defi", desc: "No KYC required" },
            { title: "Low Interest", href: "/crypto-loans/best/low-interest", desc: "Cheapest rates" },
            { title: "Flash Loans", href: "/crypto-loans/best/flash-loans", desc: "Zero-collateral DeFi" },
            { title: "NFT Collateral", href: "/crypto-loans/best/nft-collateral", desc: "Borrow against NFTs" },
            { title: "Institutional", href: "/crypto-loans/best/institutional", desc: "Large-scale borrowing" },
          ].map((c) => (<Link key={c.href} href={c.href} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 card-hover"><h3 className="text-lg font-semibold text-white mb-1">{c.title}</h3><p className="text-sm text-[var(--color-text-secondary)]">{c.desc}</p></Link>))}
        </div>
      </section>
      <FAQSection faqs={LOAN_FAQS} />
    </div>
  );
}
