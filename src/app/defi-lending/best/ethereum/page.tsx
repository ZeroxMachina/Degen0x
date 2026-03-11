import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Ethereum DeFi Lending Protocols ${CURRENT_YEAR} - ETH Mainnet`,
  description: `Compare the best DeFi lending protocols on Ethereum mainnet in ${CURRENT_YEAR}. Earn yield and borrow on the most battle-tested DeFi ecosystem.`,
};

const products: Product[] = [
  {
    name: "Aave V3",
    slug: "aave",
    rating: 4.8,
    description: "Aave V3 on Ethereum mainnet remains the gold standard for DeFi lending, with the deepest liquidity pools and widest asset selection. The protocol supports over 30 assets for lending and borrowing with competitive variable rates and robust risk management parameters.",
    pros: ["Deepest Ethereum liquidity", "30+ supported assets", "Proven 5+ year track record", "Flash loan capabilities"],
    cons: ["Higher gas costs on mainnet", "Variable rates fluctuate", "Complex for newcomers"],
    fees: "Variable supply/borrow spread",
    bestFor: "Most Ethereum DeFi users",
    affiliateUrl: "https://cryptodegen.com/go/aave",
    category: "defi-lending",
    featured: true,
  },
  {
    name: "Compound V3",
    slug: "compound",
    rating: 4.6,
    description: "Compound V3 on Ethereum pioneered the isolated market model where each base asset (USDC, ETH) has its own market with dedicated collateral types. This design improves risk isolation and capital efficiency for Ethereum mainnet lenders and borrowers.",
    pros: ["Pioneer of DeFi lending", "Isolated market risk model", "Simple and clean UX", "COMP rewards"],
    cons: ["Fewer assets than Aave", "Higher mainnet gas costs", "V3 has fewer markets"],
    fees: "Variable supply/borrow spread",
    bestFor: "Conservative Ethereum lenders",
    affiliateUrl: "https://cryptodegen.com/go/compound",
    category: "defi-lending",
  },
  {
    name: "Morpho",
    slug: "morpho",
    rating: 4.7,
    description: "Morpho optimizes Ethereum lending rates by creating a peer-to-peer matching layer on top of Aave and Compound. When matched P2P, both lenders and borrowers get better rates than the underlying pool rate, while unmatched positions fall back to the base protocol.",
    pros: ["Better rates than Aave/Compound alone", "Same security guarantees", "Automatic P2P matching", "No additional lockup"],
    cons: ["Dependent on underlying protocols", "P2P matching not guaranteed", "Ethereum gas costs apply"],
    fees: "Improved spread vs base protocols",
    bestFor: "Rate-conscious Ethereum users",
    affiliateUrl: "https://cryptodegen.com/go/morpho",
    category: "defi-lending",
  },
  {
    name: "Spark",
    slug: "spark",
    rating: 4.5,
    description: "Spark Protocol on Ethereum is the lending arm of the MakerDAO ecosystem, offering DAI borrowing at competitive rates set by governance and the DAI Savings Rate for depositors. It uniquely bridges traditional MakerDAO vault mechanics with a modern lending interface.",
    pros: ["DAI Savings Rate for depositors", "Governance-set competitive rates", "MakerDAO ecosystem integration", "Predictable borrowing costs"],
    cons: ["Primarily DAI-focused", "Smaller market than Aave", "Limited asset variety"],
    fees: "Governance-set rates",
    bestFor: "DAI-focused Ethereum users",
    affiliateUrl: "https://cryptodegen.com/go/spark",
    category: "defi-lending",
  },
  {
    name: "Lido",
    slug: "lido",
    rating: 4.7,
    description: "Lido is Ethereum's dominant liquid staking protocol, converting staked ETH into liquid stETH tokens. While technically a staking protocol rather than lending, Lido-generated stETH is widely used as collateral across Ethereum DeFi lending markets, making it a cornerstone of the Ethereum yield ecosystem.",
    pros: ["Largest ETH liquid staking protocol", "stETH accepted across DeFi", "No minimum stake requirement", "Consistent staking yields"],
    cons: ["10% fee on staking rewards", "Centralization concerns", "stETH depeg risk"],
    fees: "10% of staking rewards",
    bestFor: "ETH holders wanting liquid staking",
    affiliateUrl: "https://cryptodegen.com/go/lido",
    category: "defi-lending",
  },
];

const faqs: FAQ[] = [
  { question: "Why use Ethereum mainnet for DeFi lending?", answer: "Ethereum mainnet has the deepest liquidity, most battle-tested protocols, and widest asset selection of any DeFi ecosystem. While gas costs are higher, large positions benefit from superior security, reliability, and the ability to interact with the broadest ecosystem of DeFi composability." },
  { question: "Are gas costs worth it for Ethereum DeFi?", answer: "For positions above $10,000, Ethereum mainnet gas costs are generally manageable relative to the yields earned. For smaller positions, Layer 2 networks offer the same protocols at a fraction of the cost. Consider your position size when choosing between Ethereum mainnet and L2 alternatives." },
  { question: "What is the safest way to earn yield on ETH?", answer: "The safest approach is liquid staking through Lido (stETH) or staking directly through the Ethereum network. For lending, depositing into Aave or Compound on Ethereum mainnet represents the most battle-tested option. Always diversify across protocols to reduce single-protocol risk." },
];

export default function EthereumPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "DeFi Lending", href: "/defi-lending" }, { label: "Best", href: "/defi-lending/best" }, { label: "Ethereum", href: "/defi-lending/best/ethereum" }]} />
      <AffiliateDisclosure />
      <h1 className="text-4xl font-bold text-white mb-4">Best Ethereum DeFi Lending Protocols ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Ethereum remains the home of DeFi lending. The original blockchain for decentralized finance hosts the most mature, battle-tested, and liquid lending protocols in the ecosystem. While gas costs on mainnet are higher than Layer 2 alternatives, the security guarantees, composability options, and protocol maturity of Ethereum mainnet DeFi are unmatched.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-white">Aave V3</strong> is our top pick for Ethereum mainnet lending thanks to its deep liquidity, wide asset support, and proven security. <strong className="text-white">Morpho</strong> offers improved rates on top of Aave and Compound. For ETH yield, <strong className="text-white">Lido</strong> provides the foundation of Ethereum's liquid staking ecosystem.
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
