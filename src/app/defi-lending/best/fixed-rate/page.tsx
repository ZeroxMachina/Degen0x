import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Fixed Rate DeFi Lending ${CURRENT_YEAR} - Predictable Yield`,
  description: `Compare the best fixed-rate DeFi lending protocols in ${CURRENT_YEAR}. Lock in predictable yields without worrying about rate volatility.`,
};

const products: Product[] = [
  {
    name: "Pendle Finance",
    slug: "pendle",
    rating: 4.7,
    description: "Pendle Finance enables fixed-rate yield through yield tokenization. By splitting yield-bearing assets into principal tokens (PT) and yield tokens (YT), users can buy PTs at a discount to lock in a guaranteed fixed rate until maturity. Pendle supports assets from Aave, Lido, Rocket Pool, and more.",
    pros: ["Lock in guaranteed fixed rates", "Wide range of yield-bearing assets", "Multi-chain (Ethereum, Arbitrum)", "Active secondary market for yield tokens"],
    cons: ["Requires understanding of PT/YT mechanics", "Fixed rate locked until maturity", "Complexity can deter beginners"],
    fees: "Trading spread on PT/YT",
    bestFor: "Users wanting guaranteed DeFi yields",
    affiliateUrl: "https://cryptodegen.com/go/pendle",
    category: "defi-lending",
    featured: true,
  },
  {
    name: "Notional Finance",
    slug: "notional",
    rating: 4.4,
    description: "Notional Finance offers fixed-rate lending and borrowing using a novel fCash token system. Lenders lock funds for fixed terms (3 months to 1 year) at rates set by market demand. The protocol has processed billions in fixed-rate loans on Ethereum.",
    pros: ["True fixed-rate lending", "Multiple maturity options", "Proven protocol with significant TVL", "Clean fixed-rate borrowing"],
    cons: ["Funds locked until maturity", "Lower flexibility than variable rates", "Ethereum mainnet gas costs"],
    fees: "Fixed rate spread",
    bestFor: "Fixed-term yield seekers",
    affiliateUrl: "https://cryptodegen.com/go/notional",
    category: "defi-lending",
  },
  {
    name: "Term Finance",
    slug: "term-finance",
    rating: 4.2,
    description: "Term Finance runs on-chain auction-based fixed-rate lending markets. Lenders and borrowers submit bids and offers, with the protocol clearing rates through a transparent auction process. This market-driven approach often results in competitive fixed rates.",
    pros: ["Auction-based fair rate discovery", "Transparent market clearing", "Multiple collateral types", "Regular auction cycles"],
    cons: ["Must participate in auction timing", "Newer protocol", "Smaller market size"],
    fees: "Auction spread",
    bestFor: "Sophisticated fixed-rate investors",
    affiliateUrl: "https://cryptodegen.com/go/term-finance",
    category: "defi-lending",
  },
];

const faqs: FAQ[] = [
  { question: "What is fixed-rate DeFi lending?", answer: "Fixed-rate DeFi lending locks in a guaranteed interest rate for a specified period, unlike variable-rate protocols where rates change based on supply and demand. This predictability is valuable for users who want to know exactly what return they will earn, similar to a traditional certificate of deposit." },
  { question: "Are fixed rates higher or lower than variable rates?", answer: "Fixed rates can be higher or lower than current variable rates depending on market expectations. When markets expect rates to fall, fixed rates may be higher than current variable rates (locking in a premium). When rates are expected to rise, fixed rates may be lower. The trade-off is predictability versus potential upside." },
  { question: "What happens if I need my funds before the fixed term ends?", answer: "Most fixed-rate protocols allow early exit through secondary markets, but you may receive less than expected if market rates have changed. Pendle allows selling PT tokens on their AMM, while Notional allows unwinding positions before maturity with a potential penalty or bonus depending on rate movements." },
];

export default function FixedRatePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "DeFi Lending", href: "/defi-lending" }, { label: "Best", href: "/defi-lending/best" }, { label: "Fixed Rate", href: "/defi-lending/best/fixed-rate" }]} />
      <AffiliateDisclosure />
      <h1 className="text-4xl font-bold text-white mb-4">Best Fixed Rate DeFi Lending ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Variable DeFi yields can swing wildly with market conditions, making it difficult to plan around expected returns. Fixed-rate protocols solve this by allowing you to lock in a guaranteed yield for a specific period. Whether you are managing treasury funds, planning for known expenses, or simply want peace of mind, fixed-rate DeFi lending provides the predictability that variable-rate protocols cannot match.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-white">Pendle Finance</strong> leads fixed-rate DeFi with its innovative yield tokenization model that supports a wide range of underlying yield sources. <strong className="text-white">Notional Finance</strong> offers traditional fixed-term lending markets. <strong className="text-white">Term Finance</strong> provides auction-based rate discovery for the most market-efficient fixed rates.
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
