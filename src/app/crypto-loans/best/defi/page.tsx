import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best DeFi Loan Platforms ${CURRENT_YEAR} - Decentralized Borrowing`,
  description: `Compare the best DeFi loan platforms in ${CURRENT_YEAR}. Borrow against crypto without KYC through decentralized lending protocols.`,
};

const products: Product[] = [
  { name: "Aave", slug: "aave-loans", rating: 4.8, description: "Aave is the largest DeFi lending protocol offering permissionless borrowing across 10+ chains. No KYC, no credit checks, no monthly payments. Variable and stable rate options with deep liquidity for all major crypto assets.", pros: ["Fully permissionless, no KYC", "10+ chain deployments", "Variable and stable rates", "Flash loan capabilities"], cons: ["Requires Web3 wallet knowledge", "Gas costs on Ethereum", "Liquidation risk in volatile markets"], fees: "Variable borrow rates", bestFor: "DeFi-native borrowers", affiliateUrl: "https://cryptodegen.com/go/aave", category: "crypto-loans", featured: true },
  { name: "Compound", slug: "compound-loans", rating: 4.5, description: "Compound V3 offers simplified DeFi borrowing with isolated risk markets. Each market focuses on one borrowable asset with multiple collateral options, providing cleaner risk isolation than pool-based models.", pros: ["Battle-tested since 2018", "Isolated risk per market", "COMP reward incentives", "Simple borrowing interface"], cons: ["Fewer assets than Aave", "Limited chain availability", "Variable rates only"], fees: "Variable borrow rates", bestFor: "Conservative DeFi borrowers", affiliateUrl: "https://cryptodegen.com/go/compound", category: "crypto-loans" },
  { name: "MakerDAO", slug: "makerdao", rating: 4.6, description: "MakerDAO pioneered decentralized lending by allowing users to open collateralized Vaults and mint DAI stablecoins. With governance-controlled stability fees and a wide range of accepted collateral types, Maker remains a cornerstone of DeFi borrowing.", pros: ["Pioneer of DeFi lending", "Borrow DAI directly", "Multiple collateral types", "Governance-set stable rates"], cons: ["Can only borrow DAI", "Higher collateralization ratios", "Complex vault management"], fees: "Stability fee (variable)", bestFor: "DAI stablecoin borrowers", affiliateUrl: "https://cryptodegen.com/go/makerdao", category: "crypto-loans" },
];

const faqs: FAQ[] = [
  { question: "Do DeFi loans require KYC?", answer: "No. DeFi lending protocols are permissionless and do not require identity verification, credit checks, or any personal information. You simply connect a Web3 wallet, deposit collateral, and borrow. This is one of the core advantages of DeFi over CeFi lending." },
  { question: "Are DeFi loans safe?", answer: "DeFi loans carry smart contract risk, liquidation risk, and oracle risk. Top protocols like Aave and Compound have operated for years without major exploits, but risk can never be fully eliminated. Only borrow what you can manage and maintain healthy collateral ratios." },
  { question: "Can I get a DeFi loan in the US?", answer: "Yes. DeFi protocols are permissionless and accessible from anywhere with an internet connection. However, the regulatory landscape is evolving. Users should stay informed about any regulatory changes that may affect DeFi usage in their jurisdiction." },
];

export default function DefiLoansPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Loans", href: "/crypto-loans" }, { label: "Best", href: "/crypto-loans/best" }, { label: "DeFi Loans", href: "/crypto-loans/best/defi" }]} />
      <AffiliateDisclosure />
      <h1 className="text-4xl font-bold text-white mb-4">Best DeFi Loan Platforms ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">DeFi loans offer a fundamentally different borrowing experience than traditional finance. No applications, no credit checks, no KYC, and no waiting periods. You simply deposit crypto collateral into a smart contract and borrow instantly. These permissionless protocols operate 24/7 on blockchain networks and are accessible to anyone with a Web3 wallet. We compared the top DeFi lending protocols to help you find the best option for your borrowing needs.</p>
      </div>
      <div className="space-y-4 mb-12">{products.map((p, i) => (<ProductCard key={p.slug} product={p} rank={i + 1} categorySlug="crypto-loans" />))}</div>
      <FAQSection faqs={faqs} />
    </div>
  );
}
