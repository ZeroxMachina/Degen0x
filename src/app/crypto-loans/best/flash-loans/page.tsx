import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = { title: `Best Flash Loan Platforms ${CURRENT_YEAR} - Zero-Collateral DeFi Loans`, description: `Compare flash loan platforms in ${CURRENT_YEAR}. Borrow any amount without collateral in a single transaction for arbitrage, liquidations, and more.` };

const products: Product[] = [
  { name: "Aave", slug: "aave-loans", rating: 4.8, description: "Aave pioneered flash loans and remains the dominant provider. Borrow any amount of available liquidity with zero collateral, provided the loan is repaid within the same transaction. Used for arbitrage, liquidations, collateral swaps, and self-liquidation.", pros: ["Largest flash loan liquidity", "0.05% fee (reduced from 0.09%)", "Multi-chain availability", "Extensive developer documentation"], cons: ["Requires smart contract development skills", "Not for regular borrowing", "Transaction reverts if not repaid"], fees: "0.05% per flash loan", bestFor: "Developers and arbitrageurs", affiliateUrl: "https://cryptodegen.com/go/aave", category: "crypto-loans", featured: true },
  { name: "Uniswap V3", slug: "uniswap-flash", rating: 4.5, description: "Uniswap V3 offers flash swaps that allow users to borrow assets from any liquidity pool, use them, and repay within the same transaction. Flash swaps are particularly useful for arbitrage between Uniswap and other DEXs.", pros: ["Deep liquidity across many pairs", "Integrated with DEX trading", "Wide token availability", "Well-documented API"], cons: ["Must repay with pool tokens", "Different mechanics than flash loans", "Pool-specific liquidity limits"], fees: "Pool swap fee applies", bestFor: "DEX arbitrage traders", affiliateUrl: "https://cryptodegen.com/go/uniswap", category: "crypto-loans" },
  { name: "Balancer", slug: "balancer-flash", rating: 4.3, description: "Balancer offers flash loans from its vault architecture with access to all tokens held across all Balancer pools. The unified vault design means flash loan borrowers can access the total liquidity of the protocol in a single call.", pros: ["Access all vault liquidity", "Unified flash loan interface", "Multi-token flash loans", "No fee for flash loans"], cons: ["Smaller total liquidity than Aave", "Less documentation available", "Fewer developer tools"], fees: "No flash loan fee", bestFor: "Cost-sensitive flash loan users", affiliateUrl: "https://cryptodegen.com/go/balancer", category: "crypto-loans" },
];

const faqs: FAQ[] = [
  { question: "What are flash loans used for?", answer: "Flash loans are primarily used for arbitrage (exploiting price differences across DEXs), liquidations (repaying undercollateralized positions for a profit), collateral swaps (changing loan collateral without closing the position), and self-liquidation (closing your own loan position efficiently). They require smart contract development skills to use." },
  { question: "Can anyone use flash loans?", answer: "Flash loans require smart contract programming skills because the borrow and repay must happen within a single blockchain transaction. Regular users cannot access flash loans through a standard web interface. However, some platforms like DeFi Saver offer flash loan-powered features with user-friendly interfaces." },
  { question: "Are flash loans risky?", answer: "Flash loans are atomically safe for the borrower: if the loan cannot be repaid within the transaction, the entire transaction reverts as if it never happened. The borrower only loses the gas cost of the failed transaction. However, flash loans have been used as tools in DeFi exploits targeting vulnerable protocols." },
];

export default function FlashLoansPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Loans", href: "/crypto-loans" }, { label: "Best", href: "/crypto-loans/best" }, { label: "Flash Loans", href: "/crypto-loans/best/flash-loans" }]} />
      <AffiliateDisclosure />
      <h1 className="text-4xl font-bold text-white mb-4">Best Flash Loan Platforms ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">Flash loans are one of DeFi's most innovative financial primitives: borrow any amount of crypto with zero collateral, as long as you repay within the same blockchain transaction. If the loan is not repaid, the entire transaction reverts as if nothing happened. Flash loans enable arbitrage, efficient liquidations, collateral swaps, and sophisticated DeFi operations that would otherwise require massive capital.</p>
      </div>
      <div className="space-y-4 mb-12">{products.map((p, i) => (<ProductCard key={p.slug} product={p} rank={i + 1} categorySlug="crypto-loans" />))}</div>
      <FAQSection faqs={faqs} />
    </div>
  );
}
