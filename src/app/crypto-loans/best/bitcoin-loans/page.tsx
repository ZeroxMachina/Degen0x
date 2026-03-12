import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Bitcoin-Backed Loans ${CURRENT_YEAR} - Borrow Against BTC`,
  description: `Compare the best Bitcoin-backed loan platforms in ${CURRENT_YEAR}. Get cash against your BTC without selling. Compare rates, LTV ratios, and terms.`,
};

const products: Product[] = [
  { name: "Nexo", slug: "nexo", rating: 4.7, description: "Nexo offers instant Bitcoin-backed loans with rates starting at 0% APR for Platinum-tier users. Borrow up to 90% LTV against your BTC with no monthly repayments required and flexible repayment on your schedule.", pros: ["Rates as low as 0% APR", "Up to 90% LTV on Bitcoin", "No monthly payment requirements", "Instant loan approval"], cons: ["Best rates require NEXO token holdings", "CeFi counterparty risk", "Not available in all US states"], fees: "From 0% APR", bestFor: "CeFi Bitcoin borrowers", affiliateUrl: "https://degen0x.com/go/nexo", category: "crypto-loans", featured: true },
  { name: "Aave", slug: "aave-loans", rating: 4.7, description: "Aave allows decentralized borrowing against wrapped Bitcoin (WBTC) across multiple chains. No KYC required, variable rates based on market demand, and the ability to borrow any supported asset against your BTC collateral.", pros: ["No KYC required", "Borrow any supported asset", "Multi-chain availability", "Proven security track record"], cons: ["Requires wrapping BTC to WBTC", "Variable rates can spike", "Technical knowledge needed"], fees: "Variable borrow rates", bestFor: "DeFi-native BTC holders", affiliateUrl: "https://degen0x.com/go/aave", category: "crypto-loans" },
  { name: "MakerDAO", slug: "makerdao", rating: 4.5, description: "MakerDAO accepts WBTC as collateral for borrowing DAI stablecoins. The stability fee is governance-controlled and often competitive with market rates. MakerDAO's battle-tested infrastructure provides reliable Bitcoin-backed borrowing.", pros: ["Borrow DAI at competitive rates", "Battle-tested since 2017", "Governance-controlled stability", "No KYC needed"], cons: ["Can only borrow DAI", "Higher collateralization ratios", "Must wrap BTC to WBTC"], fees: "Stability fee (variable)", bestFor: "DAI borrowers with BTC collateral", affiliateUrl: "https://degen0x.com/go/makerdao", category: "crypto-loans" },
];

const faqs: FAQ[] = [
  { question: "Can I get a loan against my Bitcoin without selling it?", answer: "Yes. Bitcoin-backed loans let you deposit BTC as collateral and receive a loan in fiat, stablecoins, or other crypto. You maintain ownership of your Bitcoin and get it back when you repay the loan. This avoids triggering a taxable event from selling." },
  { question: "What is the maximum I can borrow against Bitcoin?", answer: "Maximum LTV varies by platform: Nexo offers up to 90% LTV, while DeFi protocols typically allow 70-80% LTV for WBTC. Higher LTV means more borrowing power but greater liquidation risk if Bitcoin's price drops." },
  { question: "What happens if Bitcoin price drops while I have a loan?", answer: "If Bitcoin's price drops enough that your collateral value falls below the liquidation threshold, your position may be liquidated. The platform sells your BTC to repay the loan. To avoid this, maintain a healthy LTV ratio, set up price alerts, and keep additional collateral ready." },
];

export default function BitcoinLoansPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Loans", href: "/crypto-loans" }, { label: "Best", href: "/crypto-loans/best" }, { label: "Bitcoin Loans", href: "/crypto-loans/best/bitcoin-loans" }]} />
      <AffiliateDisclosure />
      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Best Bitcoin-Backed Loans ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">Bitcoin holders who need liquidity but do not want to sell their BTC can use crypto-backed loans to borrow against their holdings. This preserves your long-term Bitcoin position while giving you access to cash, stablecoins, or other assets for immediate needs. We compared the top platforms for Bitcoin-backed lending based on rates, LTV ratios, and security.</p>
      </div>
      <div className="space-y-4 mb-12">{products.map((p, i) => (<ProductCard key={p.slug} product={p} rank={i + 1} categorySlug="crypto-loans" />))}</div>
      <FAQSection faqs={faqs} />
    </div>
  );
}
