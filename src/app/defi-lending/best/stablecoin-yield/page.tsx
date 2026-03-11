import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Stablecoin Yield Platforms ${CURRENT_YEAR} - Earn on USDC, USDT, DAI`,
  description: `Compare the best stablecoin yield opportunities in ${CURRENT_YEAR}. Earn up to 15% APY on USDC, USDT, DAI, and other stablecoins through DeFi lending protocols.`,
};

const products: Product[] = [
  {
    name: "Aave",
    slug: "aave",
    rating: 4.8,
    description: "Aave offers competitive stablecoin supply rates across multiple chains. USDC and USDT deposits earn variable APY that typically ranges from 3-8% depending on market demand. Multi-chain deployment means you can find the best rates across Ethereum, Arbitrum, Optimism, and Polygon.",
    pros: ["Multi-chain stablecoin markets", "Deep liquidity ensures low slippage", "Variable rates respond to demand", "Proven security track record"],
    cons: ["Variable rates can drop during low demand", "Gas fees on Ethereum mainnet", "No fixed rate option natively"],
    fees: "Variable supply/borrow spread",
    bestFor: "Most stablecoin lenders",
    affiliateUrl: "https://cryptodegen.com/go/aave",
    category: "defi-lending",
    featured: true,
  },
  {
    name: "Curve Finance",
    slug: "curve",
    rating: 4.7,
    description: "Curve Finance specializes in stablecoin liquidity pools, offering LPs trading fees plus CRV token incentives. The 3pool (DAI/USDC/USDT) is the gold standard for stablecoin yield, with additional boosted pools offering enhanced returns through gauge voting.",
    pros: ["Deepest stablecoin liquidity pools", "Low impermanent loss on stable pairs", "CRV rewards boost returns", "Gauge voting for enhanced yields"],
    cons: ["Complex gauge and voting system", "Returns depend on CRV price", "UI can be intimidating for newcomers"],
    fees: "0.04% swap fee to LPs",
    bestFor: "Stablecoin liquidity providers",
    affiliateUrl: "https://cryptodegen.com/go/curve",
    category: "defi-lending",
  },
  {
    name: "Spark",
    slug: "spark",
    rating: 4.5,
    description: "Spark offers the DAI Savings Rate (DSR) which provides a stable, governance-set yield on DAI deposits. The DSR has been consistently competitive, often outperforming variable lending rates. Simply deposit DAI and earn a predictable return set by MakerDAO governance.",
    pros: ["Predictable governance-set yield", "No impermanent loss risk", "Simple deposit mechanism", "Backed by MakerDAO ecosystem"],
    cons: ["Only DAI supported", "Rate changes via governance votes", "Lower than aggressive DeFi strategies"],
    fees: "No fees on DSR",
    bestFor: "DAI holders seeking stable returns",
    affiliateUrl: "https://cryptodegen.com/go/spark",
    category: "defi-lending",
  },
  {
    name: "Yearn Finance",
    slug: "yearn",
    rating: 4.5,
    description: "Yearn Finance vaults automatically optimize stablecoin yields by moving funds between lending protocols, liquidity pools, and farming strategies. The USDC and DAI vaults are among the most popular, offering hands-off yield optimization that typically outperforms manual strategies.",
    pros: ["Automated yield optimization", "Hands-off stablecoin earning", "Gas-efficient auto-compounding", "Multiple stablecoin vaults available"],
    cons: ["2% management + 20% performance fees", "Strategy risks beyond simple lending", "Returns vary based on market conditions"],
    fees: "2% management + 20% performance",
    bestFor: "Passive stablecoin yield seekers",
    affiliateUrl: "https://cryptodegen.com/go/yearn",
    category: "defi-lending",
  },
  {
    name: "Morpho",
    slug: "morpho",
    rating: 4.6,
    description: "Morpho optimizes stablecoin lending rates by peer-to-peer matching on top of Aave and Compound. Stablecoin depositors consistently receive better rates than the underlying pool rate, while maintaining the same liquidity guarantees and security properties.",
    pros: ["Better rates than base protocols", "Same security as Aave/Compound", "Automatic rate optimization", "No lock-up periods"],
    cons: ["Dependent on underlying protocols", "Improvement margin varies", "Lower brand recognition"],
    fees: "Improved spread vs base protocols",
    bestFor: "Stablecoin rate optimizers",
    affiliateUrl: "https://cryptodegen.com/go/morpho",
    category: "defi-lending",
  },
];

const faqs: FAQ[] = [
  { question: "What stablecoin yields the highest APY?", answer: "Yields vary by platform and market conditions. Generally, USDT and USDC offer the highest lending rates due to strong borrowing demand. DAI offers competitive yields through the DAI Savings Rate. Curve LP pools with gauge incentives can offer even higher returns but come with additional complexity." },
  { question: "Is stablecoin yield farming safe?", answer: "Stablecoin yield on established protocols like Aave and Compound is among the safest DeFi activities, but it is not risk-free. Smart contract risk, stablecoin depeg risk, and protocol governance risk all exist. Stick to audited protocols and consider insurance for large positions." },
  { question: "Are stablecoin yields taxable?", answer: "In most jurisdictions, yes. Interest earned on stablecoin deposits is typically treated as ordinary income and taxed at your income tax rate. Some jurisdictions may treat it differently. Consult a tax professional familiar with crypto taxation in your country." },
  { question: "What is the difference between lending APY and LP yield?", answer: "Lending APY comes from borrowers paying interest on supplied stablecoins. LP yield comes from earning trading fees (and sometimes token incentives) by providing liquidity to decentralized exchanges. LP yield can be higher but carries impermanent loss risk, though this is minimal for stablecoin-only pools." },
];

export default function StablecoinYieldPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "DeFi Lending", href: "/defi-lending" }, { label: "Best", href: "/defi-lending/best" }, { label: "Stablecoin Yield", href: "/defi-lending/best/stablecoin-yield" }]} />
      <AffiliateDisclosure />
      <h1 className="text-4xl font-bold text-white mb-4">Best Stablecoin Yield Platforms ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Stablecoin yield is one of the most popular entry points into DeFi. By depositing stablecoins like USDC, USDT, or DAI into lending protocols or liquidity pools, you can earn significantly higher interest rates than traditional savings accounts while avoiding the price volatility of other crypto assets. We have tested and compared the top platforms to help you find the best stablecoin yields available today.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          Our top recommendation is <strong className="text-white">Aave</strong> for its combination of deep liquidity, multi-chain access, and proven security. For hands-off optimization, <strong className="text-white">Yearn Finance</strong> automatically finds the best yields across DeFi. And for stablecoin LPs, <strong className="text-white">Curve Finance</strong> remains the gold standard with its purpose-built stablecoin pools.
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
