import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Solana DeFi Lending Protocols ${CURRENT_YEAR} - Earn Yield on SOL`,
  description: `Compare the best DeFi lending protocols on Solana in ${CURRENT_YEAR}. Earn yield with near-zero transaction fees and sub-second finality.`,
};

const products: Product[] = [
  {
    name: "Kamino Finance",
    slug: "kamino",
    rating: 4.6,
    description: "Kamino Finance is Solana's leading lending and liquidity protocol, combining lending markets with automated liquidity management. Users can lend, borrow, and provide concentrated liquidity through Kamino's integrated platform with competitive yields and low transaction costs.",
    pros: ["Integrated lending and LP management", "Leading Solana DeFi TVL", "Near-zero transaction fees", "Concentrated liquidity automation"],
    cons: ["Solana-only ecosystem", "Newer than Ethereum protocols", "Solana network outage risk"],
    fees: "Variable supply/borrow spread",
    bestFor: "Solana DeFi power users",
    affiliateUrl: "https://cryptodegen.com/go/kamino",
    category: "defi-lending",
    featured: true,
  },
  {
    name: "Marginfi",
    slug: "marginfi",
    rating: 4.4,
    description: "Marginfi is a decentralized lending protocol on Solana offering a wide range of collateral assets including SOL, mSOL, JitoSOL, and various SPL tokens. Its risk engine and isolated lending pools provide granular risk management for different asset categories.",
    pros: ["Wide Solana asset support", "Isolated risk pools", "Points-based incentive system", "Active community governance"],
    cons: ["Token not yet launched", "Competitive Solana lending market", "Governance still centralizing"],
    fees: "Variable borrow rates",
    bestFor: "Solana lending diversification",
    affiliateUrl: "https://cryptodegen.com/go/marginfi",
    category: "defi-lending",
  },
  {
    name: "Solend",
    slug: "solend",
    rating: 4.3,
    description: "Solend was one of the first lending protocols on Solana, offering a straightforward lending and borrowing experience. With multiple lending pools for different risk profiles, Solend provides options ranging from the conservative main pool to higher-yield isolated pools.",
    pros: ["Pioneer Solana lending protocol", "Multiple risk-tiered pools", "Simple user interface", "SLND governance token"],
    cons: ["Past governance controversy", "Competition from newer protocols", "Smaller TVL than Kamino"],
    fees: "Variable supply/borrow spread",
    bestFor: "Solana lending beginners",
    affiliateUrl: "https://cryptodegen.com/go/solend",
    category: "defi-lending",
  },
];

const faqs: FAQ[] = [
  { question: "Why use Solana for DeFi lending?", answer: "Solana offers near-zero transaction fees (under $0.01 per transaction) and sub-second finality, making DeFi interactions dramatically cheaper and faster than Ethereum mainnet. This makes Solana ideal for smaller positions where Ethereum gas costs would eat into yields, and for strategies requiring frequent transactions." },
  { question: "What are the risks of Solana DeFi?", answer: "Solana DeFi carries smart contract risk similar to any DeFi ecosystem, plus Solana-specific risks including network outages (which have occurred historically), smaller audit ecosystem compared to Ethereum, and lower total liquidity. Protocols are also newer and less battle-tested than their Ethereum counterparts." },
  { question: "Can I earn yield on SOL?", answer: "Yes. You can earn yield on SOL through liquid staking (JitoSOL, mSOL, bSOL), lending SOL on protocols like Kamino and Marginfi, or providing SOL liquidity on DEXs like Raydium and Orca. Staking yields are typically 6-8% APY, while lending yields vary by demand." },
];

export default function SolanaPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "DeFi Lending", href: "/defi-lending" }, { label: "Best", href: "/defi-lending/best" }, { label: "Solana", href: "/defi-lending/best/solana" }]} />
      <AffiliateDisclosure />
      <h1 className="text-4xl font-bold text-white mb-4">Best Solana DeFi Lending Protocols ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Solana has emerged as the second-largest DeFi ecosystem by activity, offering lightning-fast transactions at near-zero cost. The Solana lending landscape has matured significantly, with several protocols now managing billions in total value locked. For users who want to earn yield on SOL and SPL tokens without the gas costs of Ethereum, these Solana-native protocols offer compelling alternatives.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-white">Kamino Finance</strong> leads Solana DeFi lending with its integrated lending and liquidity platform. <strong className="text-white">Marginfi</strong> offers the widest asset selection, and <strong className="text-white">Solend</strong> provides a straightforward experience for Solana lending beginners.
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
