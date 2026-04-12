import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Best Crypto Insurance Protocols of ${CURRENT_YEAR} - Compare Coverage`,
  description: "Compare the best crypto insurance protocols. Expert analysis of Nexus Mutual, InsurAce, Unslashed, and more. Find the right coverage for smart contracts,",
  alternates: { canonical: "/insurance/best" }};

const products: Product[] = [
  {
    name: "Nexus Mutual",
    slug: "nexus-mutual",
    rating: 4.7,
    description:
      "The leading decentralized insurance protocol offering smart contract cover, custody cover, and protocol cover. Nexus Mutual operates as a discretionary mutual where NXM token holders govern claims assessment.",
    pros: [
      "Largest capital pool in crypto insurance",
      "Wide range of cover products",
      "Transparent on-chain claims process",
    ],
    cons: [
      "Requires KYC for membership",
      "NXM token needed for governance",
      "Cover pricing can be expensive during high demand",
    ],
    fees: "1.3-7% annual premium",
    bestFor: "DeFi power users seeking comprehensive coverage",
    affiliateUrl: "https://degen0x.com/go/nexus-mutual",
    category: "insurance",
    featured: true,
  },
  {
    name: "InsurAce",
    slug: "insurace",
    rating: 4.5,
    description:
      "A multi-chain decentralized insurance protocol that provides portfolio-based coverage across Ethereum, BSC, Polygon, and more. InsurAce offers bundled cover at discounted rates for users with positions across multiple protocols.",
    pros: [
      "Multi-chain coverage support",
      "Portfolio bundling discounts",
      "No KYC required",
    ],
    cons: [
      "Smaller capital pool than Nexus Mutual",
      "Newer protocol with shorter track record",
      "Limited cover options compared to Nexus",
    ],
    fees: "1-5% annual premium",
    bestFor: "Multi-chain DeFi users wanting bundled coverage",
    affiliateUrl: "https://degen0x.com/go/insurace",
    category: "insurance",
  },
  {
    name: "Unslashed Finance",
    slug: "unslashed",
    rating: 4.3,
    description:
      "A parametric insurance protocol that offers coverage against exchange hacks, stablecoin depegs, smart contract exploits, and validator slashing. Unslashed uses predefined parameters for automatic payouts.",
    pros: [
      "Parametric payouts reduce claim disputes",
      "Covers exchange risks",
      "Validator slashing protection",
    ],
    cons: [
      "Parametric model may not cover full losses",
      "Limited protocol selection",
      "Lower liquidity than larger competitors",
    ],
    fees: "2-8% annual premium",
    bestFor: "Stakers and exchange users wanting automated payouts",
    affiliateUrl: "https://degen0x.com/go/unslashed",
    category: "insurance",
  },
  {
    name: "Neptune Mutual",
    slug: "neptune-mutual",
    rating: 4.2,
    description:
      "A parametric cover protocol built on Ethereum and Arbitrum. Neptune Mutual specializes in DeFi coverage with a transparent reporting process and automated incident resolution through community consensus.",
    pros: [
      "Parametric covers mean faster payouts",
      "Transparent cover creation process",
      "Available on Arbitrum for lower costs",
    ],
    cons: [
      "Smaller selection of covers",
      "Relatively new in the market",
      "Limited chain support",
    ],
    fees: "2-6% annual premium",
    bestFor: "Users seeking fast, dispute-free claim payouts",
    affiliateUrl: "https://degen0x.com/go/neptune-mutual",
    category: "insurance",
  },
  {
    name: "Risk Harbor",
    slug: "risk-harbor",
    rating: 4.0,
    description:
      "An algorithmic risk management protocol that underwrites and automates DeFi coverage. Risk Harbor focuses on stablecoin depeg protection and uses automated market makers to price risk dynamically.",
    pros: [
      "Algorithmic pricing for fair premiums",
      "Automated claims settlement",
      "Stablecoin depeg specialization",
    ],
    cons: [
      "Narrow focus on stablecoin risk",
      "Complex for beginners",
      "Smaller community and liquidity",
    ],
    fees: "1.5-5% annual premium",
    bestFor: "Stablecoin holders seeking depeg protection",
    affiliateUrl: "https://degen0x.com/go/risk-harbor",
    category: "insurance",
  },
];

const faqs: FAQ[] = [
  {
    question: "How does crypto insurance work?",
    answer:
      "Crypto insurance protocols pool capital from underwriters (often called stakers) who earn yield for providing coverage. When users purchase a policy, they pay a premium. If a covered event occurs (like a smart contract hack), policyholders can file a claim. If approved by assessors or resolved parametrically, the claim is paid from the capital pool.",
  },
  {
    question: "Is crypto insurance worth the cost?",
    answer:
      "It depends on your exposure and risk tolerance. If you have significant DeFi positions, the premium cost (typically 1-8% annually) can be a worthwhile hedge against catastrophic losses. For smaller holdings, the cost-benefit may be less compelling.",
  },
  {
    question: "What events does crypto insurance cover?",
    answer:
      "Common covered events include smart contract exploits, exchange hacks, stablecoin depegs, oracle failures, validator slashing, and protocol governance attacks. Each policy specifies exact conditions that trigger a payout.",
  },
  {
    question: "How are claims assessed in decentralized insurance?",
    answer:
      "Methods vary by protocol. Nexus Mutual uses community assessors who vote on claims. Parametric protocols like Unslashed use predefined triggers (such as a token price falling below a threshold) for automatic payouts without subjective assessment.",
  },
];

const subCategories = [
  { title: "Smart Contract Cover", href: "/insurance/best/smart-contract", desc: "Protection against smart contract bugs and exploits" },
  { title: "Exchange Cover", href: "/insurance/best/exchange-cover", desc: "Coverage for exchange hacks and insolvency" },
  { title: "Protocol Cover", href: "/insurance/best/protocol-cover", desc: "Insurance for DeFi protocol failures" },
  { title: "Depeg Cover", href: "/insurance/best/depeg-cover", desc: "Stablecoin depeg protection" },
  { title: "Wallet Protection", href: "/insurance/best/wallet-protection", desc: "Coverage for wallet compromise and theft" },
  { title: "DeFi Protocol Insurance", href: "/insurance/best/defi-protocols", desc: "Best coverage for DeFi yield farming" },
];

export default function BestInsurancePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="insurance"
      />      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Insurance", href: "/insurance" },
          { label: "Best Crypto Insurance", href: "/insurance/best" },
        ]}
      />

      <AffiliateDisclosure />

      <div className="max-w-4xl mb-12">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Crypto Insurance Protocols of {CURRENT_MONTH} {CURRENT_YEAR}
        </h1>
        <p className="text-xl text-[var(--color-text-secondary)] mb-6">
          We evaluated the top crypto insurance protocols based on capital pool size, claim payout history, coverage breadth, pricing transparency, and protocol security. Here are the best options for protecting your digital assets.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Crypto insurance is critical for anyone with meaningful DeFi exposure. Smart contract exploits alone have resulted in billions of dollars in losses across the industry. These protocols offer various types of coverage, from smart contract protection to exchange custody insurance and stablecoin depeg hedging. Our methodology considers on-chain data, historical claim resolution, community governance strength, and overall value for policyholders.
        </p>
      </div>

      {/* Product Rankings */}
      <div className="space-y-6 mb-12">
        {products.map((product, index) => (
          <ProductCard
            key={product.slug}
            product={product}
            rank={index + 1}
            categorySlug="insurance"
          />
        ))}
      </div>

      {/* Sub-category Links */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Browse by Coverage Type</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subCategories.map((cat) => (
            <Link href={cat.href}
              key={cat.href}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 card-hover"
            >
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-1">{cat.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Our Methodology</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Our insurance protocol ratings are based on extensive analysis of several key factors. We assess capital pool adequacy to ensure protocols can pay out large claims. We review historical claim handling to evaluate how effectively protocols have resolved past incidents. We analyze premium pricing relative to the risk covered, community governance mechanisms, smart contract audit status, and the diversity of coverage options offered.
        </p>
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
        <p className="text-[var(--color-text-secondary)]">
          Each protocol is tested firsthand by our team, who purchases coverage and evaluates the user experience from quoting to claim filing. We update these rankings monthly to reflect changes in protocol performance and market conditions.
        </p>
      </section>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Smart Contract Cover", "description": "Compare the best crypto insurance protocols. Expert analysis of Nexus Mutual, InsurAce, Unslashed, and more. Find the right coverage for smart contracts,", "url": "https://degen0x.com/insurance/best"}) }} />
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/learn" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            All Learning Guides
          </Link>
          <Link href="/tools" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Crypto Tools
          </Link>
          <Link href="/compare" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Compare Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
