import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best Stablecoin Depeg Cover ${CURRENT_YEAR} - Protect Against Depegging`,
  description:
    "Compare the best stablecoin depeg insurance options. Protect your stablecoin holdings against depegging events with coverage from leading crypto insurance protocols.",
};

const products: Product[] = [
  {
    name: "Risk Harbor",
    slug: "risk-harbor",
    rating: 4.6,
    description:
      "Risk Harbor specializes in stablecoin depeg protection using automated market maker mechanics. When a covered stablecoin drops below a predefined threshold, policyholders can swap their depegged tokens for full-value payout tokens automatically.",
    pros: ["Specialized in depeg protection", "Automated claim settlement via AMM", "No subjective claim assessment"],
    cons: ["Limited stablecoin selection", "Complex mechanism for beginners", "Smaller liquidity pool"],
    fees: "1-4% annually",
    bestFor: "Automated stablecoin depeg protection",
    affiliateUrl: "https://degen0x.com/go/risk-harbor",
    category: "insurance",
    featured: true,
  },
  {
    name: "Nexus Mutual",
    slug: "nexus-mutual",
    rating: 4.5,
    description:
      "Nexus Mutual offers depeg cover as part of their protocol cover product. Coverage triggers when a stablecoin drops below a specified price threshold for a sustained period, protecting against both algorithmic and collateral-backed stablecoin failures.",
    pros: ["Deep capital pool for large claims", "Covers multiple stablecoin types", "Established claim history"],
    cons: ["KYC required", "Sustained depeg required (not flash crashes)", "Higher premiums than specialists"],
    fees: "2-6% annually",
    bestFor: "Large stablecoin positions needing reliable coverage",
    affiliateUrl: "https://degen0x.com/go/nexus-mutual",
    category: "insurance",
  },
  {
    name: "Unslashed Finance",
    slug: "unslashed",
    rating: 4.3,
    description:
      "Unslashed provides parametric depeg insurance with clear, predefined trigger conditions. When a covered stablecoin trades below a specified price on designated oracle feeds, payouts are automatically initiated without manual claim filing.",
    pros: ["Clear parametric triggers", "Automated payout process", "Covers multiple stablecoins"],
    cons: ["Trigger threshold may differ from actual loss", "Smaller capital reserves", "Limited customization"],
    fees: "2-5% annually",
    bestFor: "Parametric depeg protection with clear terms",
    affiliateUrl: "https://degen0x.com/go/unslashed",
    category: "insurance",
  },
];

const faqs: FAQ[] = [
  {
    question: "What is stablecoin depeg cover?",
    answer: "Stablecoin depeg cover is insurance that pays out when a stablecoin loses its peg to its reference asset (usually the US dollar). If a covered stablecoin drops below a predefined threshold (e.g., $0.90 for a USD-pegged stablecoin), the insurance compensates policyholders for the difference between the pegged value and the actual market price.",
  },
  {
    question: "Which stablecoins can I get depeg coverage for?",
    answer: "Major stablecoins like USDC, USDT, DAI, and FRAX are commonly available for depeg coverage. Some providers also cover wrapped or yield-bearing stablecoins. The exact selection depends on the insurance protocol and their risk assessment of each stablecoin.",
  },
  {
    question: "How is the depeg trigger defined?",
    answer: "Different providers define depeg triggers differently. Some use specific price thresholds (e.g., stablecoin drops below $0.95 for 24 hours), while others use oracle-based triggers or time-weighted average prices. Always review the exact trigger conditions before purchasing coverage.",
  },
  {
    question: "Does depeg cover protect against total stablecoin collapse?",
    answer: "Yes, depeg cover typically protects against both partial depegs and total collapses. If a stablecoin goes to zero, the maximum payout would be the full coverage amount. However, the insurance protocol's capital pool must be sufficient to cover all claims in a catastrophic event.",
  },
];

export default function DepegCoverPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Insurance", href: "/insurance" },
        { label: "Best", href: "/insurance/best" },
        { label: "Depeg Cover", href: "/insurance/best/depeg-cover" },
      ]} />
      <AffiliateDisclosure />
      <div className="max-w-4xl mb-12">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Best Stablecoin Depeg Cover of {CURRENT_MONTH} {CURRENT_YEAR}</h1>
        <p className="text-xl text-[var(--color-text-secondary)] mb-6">
          Stablecoins are supposed to maintain a fixed value, but history has shown that depegging events can and do happen. Depeg cover insurance provides a financial safety net when stablecoins fail to hold their peg.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-4">
          The collapse of UST in 2022 demonstrated the catastrophic risk of stablecoin depegging, wiping out tens of billions in value almost overnight. Even collateral-backed stablecoins like USDC have experienced temporary depegs due to banking sector issues. For users holding large stablecoin positions in DeFi protocols, liquidity pools, or simply as a store of value, depeg insurance provides critical protection against these tail risks.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          We compared depeg cover providers based on the range of stablecoins covered, trigger conditions, payout speed, premium pricing, and capital pool adequacy. The following providers offer the best depeg protection available today.
        </p>
      </div>
      <div className="space-y-6 mb-12">
        {products.map((product, index) => (
          <ProductCard key={product.slug} product={product} rank={index + 1} categorySlug="insurance" />
        ))}
      </div>
      <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Understanding Depeg Risks by Stablecoin Type</h2>
        {/* editorial-voice */}
        <div style={{ background: '#0f1a08', border: '1px solid #365314', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🔒</span>
            <strong style={{ color: '#a3e635', fontSize: 15 }}>Coverage Analysis</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Crypto insurance is still immature. Most policies have exclusions that would surprise you. We highlight what's actually covered, not just what's marketed.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-[var(--color-text-secondary)]">
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Fiat-Backed</h3>
            <p>Stablecoins like USDC and USDT are backed by reserves of fiat currency and equivalents. Depeg risks include reserve inadequacy, banking partner failures, and regulatory freezes. These stablecoins are generally considered lower risk but are not immune to depegging.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Crypto-Collateralized</h3>
            <p>DAI and similar stablecoins are backed by crypto collateral. Depeg risks include rapid collateral price drops that outpace liquidation mechanisms, oracle failures, and governance attacks. These carry moderate risk due to their dependence on volatile collateral.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Algorithmic</h3>
            <p>Purely algorithmic stablecoins use supply-demand mechanics rather than collateral to maintain their peg. These carry the highest depeg risk, as demonstrated by several high-profile failures. Insurance premiums for algorithmic stablecoins are typically much higher.</p>
          </div>
        </div>

        <AuthorAttribution
          author="CipherPunk_42"
          role="Security & QA"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="insurance"
        />

      </section>
      <FAQSection faqs={faqs} />
    </div>
  );
}
