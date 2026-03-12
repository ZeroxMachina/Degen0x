import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Layer 2 DeFi Lending Protocols ${CURRENT_YEAR} - Low-Cost Lending`,
  description: `Compare the best DeFi lending protocols on Layer 2 networks in ${CURRENT_YEAR}. Earn yield on Arbitrum, Optimism, Base, and other L2s at a fraction of Ethereum mainnet costs.`,
};

const products: Product[] = [
  {
    name: "Aave on Arbitrum",
    slug: "aave",
    rating: 4.8,
    description: "Aave V3 on Arbitrum offers the same battle-tested lending experience as Ethereum mainnet at dramatically lower gas costs. Arbitrum's deep DeFi ecosystem means strong borrowing demand that drives competitive supply yields for lenders.",
    pros: ["Same Aave security on L2", "90%+ gas savings vs mainnet", "Deep Arbitrum DeFi liquidity", "Wide asset selection"],
    cons: ["Slightly less liquidity than mainnet", "L2 bridging required", "Sequencer centralization risk"],
    fees: "Variable supply/borrow spread",
    bestFor: "Cost-conscious DeFi lenders",
    affiliateUrl: "https://degen0x.com/go/aave",
    category: "defi-lending",
    featured: true,
  },
  {
    name: "Aave on Base",
    slug: "aave",
    rating: 4.6,
    description: "Aave on Base (Coinbase L2) brings institutional-grade lending to one of the fastest-growing L2 networks. Base's growing user base and Coinbase integration drive increasing demand, often resulting in competitive yields for early depositors.",
    pros: ["Growing Base ecosystem", "Coinbase ecosystem integration", "Very low transaction costs", "Increasing TVL trajectory"],
    cons: ["Newer deployment with less liquidity", "Fewer supported assets", "Base still maturing"],
    fees: "Variable supply/borrow spread",
    bestFor: "Base ecosystem participants",
    affiliateUrl: "https://degen0x.com/go/aave",
    category: "defi-lending",
  },
  {
    name: "Compound on Arbitrum",
    slug: "compound",
    rating: 4.5,
    description: "Compound V3 on Arbitrum brings the simplified single-asset market model to L2, with USDC and ETH as primary borrowing markets. The isolated risk design and proven Compound architecture make this a reliable low-cost lending option.",
    pros: ["Battle-tested Compound V3 on L2", "Isolated market risk design", "Low gas costs on Arbitrum", "COMP rewards"],
    cons: ["Limited market selection on L2", "Less liquidity than mainnet", "Fewer features than Aave"],
    fees: "Variable supply/borrow spread",
    bestFor: "Conservative L2 lenders",
    affiliateUrl: "https://degen0x.com/go/compound",
    category: "defi-lending",
  },
];

const faqs: FAQ[] = [
  { question: "What is Layer 2 DeFi lending?", answer: "Layer 2 DeFi lending uses the same protocols available on Ethereum mainnet (like Aave and Compound) but deployed on Layer 2 rollup networks like Arbitrum, Optimism, and Base. These L2 networks process transactions off the main Ethereum chain, reducing gas costs by 90-99% while inheriting Ethereum's security." },
  { question: "Is L2 DeFi lending as secure as mainnet?", answer: "L2 deployments of established protocols like Aave use the same audited smart contract code as mainnet. However, L2s introduce additional considerations: sequencer centralization, bridge security, and withdrawal delays. For most users, the trade-off of slightly increased infrastructure risk for dramatically lower costs is worthwhile." },
  { question: "Which L2 is best for DeFi lending?", answer: "Arbitrum currently has the deepest DeFi liquidity among L2s, making it the best overall choice. Base is growing rapidly with strong Coinbase integration. Optimism offers a mature DeFi ecosystem. Your choice should depend on where your assets already are and which ecosystem you prefer." },
];

export default function Layer2Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "DeFi Lending", href: "/defi-lending" }, { label: "Best", href: "/defi-lending/best" }, { label: "Layer 2", href: "/defi-lending/best/layer-2" }]} />
      <AffiliateDisclosure />
      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Best Layer 2 DeFi Lending Protocols ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Layer 2 networks have transformed DeFi lending by making it accessible to everyone, not just whales who can afford Ethereum mainnet gas costs. With transaction fees under $0.10 and the same battle-tested protocols you know from mainnet, L2 lending offers the best of both worlds: Ethereum security with dramatically lower costs. We compared the top L2 lending options across Arbitrum, Optimism, Base, and other networks.
        </p>
      </div>
      <div className="space-y-4 mb-12">
        {products.map((product, index) => (
          <ProductCard key={product.slug} product={product} rank={index + 1} categorySlug="defi-lending" />
        ))}
      </div>
      <FAQSection faqs={faqs} />
    </div>
  );
}
