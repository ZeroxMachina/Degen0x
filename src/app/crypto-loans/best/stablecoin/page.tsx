import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = { title: `Best Stablecoin Loans ${CURRENT_YEAR} - Borrow USDC, DAI, USDT`, description: `Compare the best platforms for borrowing stablecoins against crypto in ${CURRENT_YEAR}. Get USDC, DAI, or USDT without selling your holdings.` };

const products: Product[] = [
  { name: "Aave", slug: "aave-loans", rating: 4.8, description: "Aave offers stablecoin borrowing across USDC, USDT, DAI, and other stablecoins on 10+ chains. Multi-chain availability means you can find the best rates for stablecoin borrowing depending on demand conditions on each network.", pros: ["Multiple stablecoin options", "Multi-chain rate shopping", "Deep stablecoin liquidity", "No KYC"], cons: ["Variable rates fluctuate", "Gas costs on mainnet", "DeFi knowledge required"], fees: "Variable borrow rates", bestFor: "Multi-stablecoin borrowers", affiliateUrl: "https://cryptodegen.com/go/aave", category: "crypto-loans", featured: true },
  { name: "MakerDAO", slug: "makerdao", rating: 4.6, description: "MakerDAO lets you mint DAI directly by depositing crypto collateral into Vaults. Since you are creating DAI rather than borrowing it from a pool, there is no liquidity constraint. The stability fee determines your borrowing cost.", pros: ["Mint DAI directly (no pool dependency)", "Governance-controlled stable rates", "Wide collateral selection", "Pioneer of stablecoin lending"], cons: ["DAI only (no USDC/USDT)", "Higher collateral ratios", "Complex vault management"], fees: "Stability fee", bestFor: "DAI-focused borrowing", affiliateUrl: "https://cryptodegen.com/go/makerdao", category: "crypto-loans" },
  { name: "Nexo", slug: "nexo", rating: 4.6, description: "Nexo allows borrowing stablecoins (USDC, USDT) or fiat directly against your crypto collateral. The CeFi model provides a simpler experience with no DeFi knowledge required and rates starting at 0% APR for top-tier users.", pros: ["Simple stablecoin borrowing", "Also supports fiat", "Rates from 0% APR", "No DeFi knowledge needed"], cons: ["KYC required", "CeFi counterparty risk", "Best rates need NEXO tokens"], fees: "From 0% APR", bestFor: "Simple CeFi stablecoin loans", affiliateUrl: "https://cryptodegen.com/go/nexo", category: "crypto-loans" },
];

const faqs: FAQ[] = [
  { question: "Why borrow stablecoins instead of fiat?", answer: "Stablecoins are easier to borrow in DeFi (no KYC, instant access), can be used across DeFi protocols for additional yield, and are available 24/7 without banking hours. They maintain a stable value while giving you the flexibility of on-chain assets." },
  { question: "Which stablecoin should I borrow?", answer: "USDC is the most widely accepted and easiest to convert to fiat. DAI is the most decentralized option. USDT has the highest liquidity in certain markets. Choose based on your intended use case and the platform's best rates for each stablecoin." },
  { question: "Is borrowing stablecoins a taxable event?", answer: "In most jurisdictions, borrowing against crypto collateral is not a taxable event because you are not selling assets. However, if your position is liquidated, that may be treated as a sale. Interest paid on loans may be deductible in some cases. Consult a tax professional." },
];

export default function StablecoinLoansPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Loans", href: "/crypto-loans" }, { label: "Best", href: "/crypto-loans/best" }, { label: "Stablecoin Loans", href: "/crypto-loans/best/stablecoin" }]} />
      <AffiliateDisclosure />
      <h1 className="text-4xl font-bold text-white mb-4">Best Stablecoin Loans ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">Borrowing stablecoins against your crypto collateral is one of the most popular use cases for crypto-backed loans. Stablecoins give you dollar-denominated liquidity without selling your holdings, and can be used for expenses, DeFi yield strategies, or conversion to fiat. We compared the best platforms for stablecoin borrowing based on available stablecoins, rates, and user experience.</p>
      </div>
      <div className="space-y-4 mb-12">{products.map((p, i) => (<ProductCard key={p.slug} product={p} rank={i + 1} categorySlug="crypto-loans" />))}</div>
      <FAQSection faqs={faqs} />
    </div>
  );
}
