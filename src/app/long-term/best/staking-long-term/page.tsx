import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Staking for Long-Term Investors ${CURRENT_YEAR}`,
  description: "Compare the best staking platforms and protocols for long-term crypto investors. Earn passive income while holding your assets securely.",
};

const products: Product[] = [
  {
    name: "Lido",
    slug: "lido",
    rating: 4.7,
    description: "Lido is the largest liquid staking protocol, allowing you to stake ETH and receive stETH that continues to earn rewards while remaining liquid and usable in DeFi. Perfect for long-term ETH holders who want staking rewards without the 32 ETH minimum.",
    pros: ["No minimum ETH requirement", "stETH remains liquid and DeFi-compatible", "Largest TVL in liquid staking", "Automated reward compounding"],
    cons: ["10% fee on staking rewards", "Smart contract risk", "stETH can trade at slight discount"],
    fees: "10% of staking rewards",
    bestFor: "Liquid ETH staking for long-term holders",
    affiliateUrl: "https://cryptodegen.com/go/lido",
    category: "long-term",
    featured: true,
  },
  {
    name: "Coinbase Staking",
    slug: "coinbase-staking",
    rating: 4.4,
    description: "Coinbase offers simple staking for ETH, SOL, ATOM, and other assets directly through its exchange interface. With no technical setup required and automatic reward collection, it is the easiest entry point for long-term investors who want to earn on their holdings.",
    pros: ["No technical setup required", "Multiple stakeable assets", "Automatic reward collection", "Trusted US-regulated platform"],
    cons: ["25-35% commission on rewards", "Lower yields than DeFi options", "Limited unstaking flexibility for some assets"],
    fees: "25-35% commission on staking rewards",
    bestFor: "Simple staking for beginners",
    affiliateUrl: "https://cryptodegen.com/go/coinbase",
    category: "long-term",
  },
  {
    name: "Rocket Pool",
    slug: "rocket-pool",
    rating: 4.6,
    description: "Rocket Pool is a decentralized ETH staking protocol that offers both liquid staking (rETH) and the ability to run your own node with just 8 ETH. For long-term investors committed to Ethereum, Rocket Pool provides decentralized staking with competitive yields.",
    pros: ["Truly decentralized staking", "Node operation with only 8 ETH", "rETH liquid staking token", "Higher yields for node operators"],
    cons: ["Lower liquidity than Lido", "Node operation requires technical skill", "14% commission on liquid staking"],
    fees: "14% of staking rewards (liquid staking)",
    bestFor: "Decentralized ETH staking",
    affiliateUrl: "https://cryptodegen.com/go/rocket-pool",
    category: "long-term",
  },
];

const faqs: FAQ[] = [
  { question: "Is staking safe for long-term investors?", answer: "Staking on established protocols like Lido and Rocket Pool is generally considered safe, but risks include smart contract vulnerabilities, slashing penalties (rare), and potential illiquidity during protocol upgrades. For maximum safety, consider staking through regulated exchanges or using liquid staking tokens that maintain DeFi composability." },
  { question: "How much can I earn from long-term staking?", answer: "ETH staking currently yields approximately 3-5% APY. Other proof-of-stake assets like SOL, ATOM, and DOT offer varying yields. With compounding over years, these returns can significantly boost your long-term portfolio. For example, 4% APY compounded over 10 years turns $10,000 into approximately $14,800." },
  { question: "Should I use liquid staking or traditional staking?", answer: "Liquid staking (Lido, Rocket Pool) is generally better for long-term investors because your staked assets remain usable. You can use stETH or rETH as collateral in DeFi, sell if needed, or simply hold and accumulate rewards. Traditional staking locks your tokens but may offer slightly higher yields in some cases." },
];

export default function StakingLongTermPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Long-Term", href: "/long-term" }, { label: "Best", href: "/long-term/best" }, { label: "Staking", href: "/long-term/best/staking-long-term" }]} />
      <AffiliateDisclosure />
      <div className="max-w-4xl mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Best Staking for Long-Term Investors ({CURRENT_MONTH} {CURRENT_YEAR})</h1>
        <p className="text-xl text-[var(--color-text-secondary)] mb-6">Staking turns idle crypto holdings into yield-generating assets. For long-term investors, staking provides a way to earn passive income on tokens you plan to hold for years, with the power of compounding working in your favor over time.</p>
        <p className="text-[var(--color-text-secondary)]">We compared staking platforms and protocols on yield rates, fee structures, liquidity, security, and suitability for multi-year holding periods. The best options let you earn rewards while maintaining flexibility and security.</p>
      </div>
      <div className="space-y-6 mb-12">{products.map((product, index) => (<ProductCard key={product.slug} product={product} rank={index + 1} categorySlug="long-term" />))}</div>
      <FAQSection faqs={faqs} />
    </div>
  );
}
