import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best DeFi Protocol Insurance ${CURRENT_YEAR} - Cover Your Positions`,
  description:
    "Compare the best DeFi protocol insurance options. Protect your deposits in Aave, Uniswap, Curve, and other DeFi protocols against exploits and failures.",
  alternates: { canonical: "/insurance/best/defi-protocols" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const products: Product[] = [
  {
    name: "Nexus Mutual",
    slug: "nexus-mutual",
    rating: 4.8,
    description:
      "Nexus Mutual offers the widest range of DeFi protocol coverage in the market. Their protocol cover product protects against smart contract failures, oracle manipulation, governance attacks, and economic design exploits across over 100 DeFi protocols on Ethereum and other chains.",
    pros: [
      "Covers 100+ DeFi protocols",
      "Proven claim payout track record",
      "Deep capital pool for reliable claims",
    ],
    cons: [
      "KYC required to purchase cover",
      "Premiums vary based on demand",
      "Claims decided by community vote",
    ],
    fees: "2-6% annually",
    bestFor: "Broad DeFi protocol coverage",
    affiliateUrl: "https://degen0x.com/go/nexus-mutual",
    category: "insurance",
    featured: true,
  },
  {
    name: "InsurAce",
    slug: "insurace",
    rating: 4.5,
    description:
      "InsurAce provides multi-chain DeFi protocol insurance covering Ethereum, BSC, Polygon, Avalanche, and more. Their portfolio cover product bundles multiple protocol covers at a discount, ideal for users with diversified DeFi positions across multiple chains.",
    pros: [
      "Multi-chain protocol coverage",
      "Portfolio bundling discounts",
      "No KYC required",
    ],
    cons: [
      "Fewer covered protocols than Nexus",
      "Smaller capital reserves",
      "Less proven claim history",
    ],
    fees: "1.5-5% annually",
    bestFor: "Multi-chain DeFi users",
    affiliateUrl: "https://degen0x.com/go/insurace",
    category: "insurance",
  },
  {
    name: "Unslashed Finance",
    slug: "unslashed",
    rating: 4.2,
    description:
      "Unslashed Finance offers customizable DeFi protocol insurance with a focus on capital efficiency. Their model allows underwriters to provide targeted coverage for specific DeFi protocols, resulting in competitive premiums for popular protocols like Aave, Compound, and MakerDAO.",
    pros: [
      "Competitive premiums for major protocols",
      "Capital-efficient design",
      "Transparent risk assessment",
    ],
    cons: [
      "Limited protocol selection",
      "Newer platform with less history",
      "Lower liquidity in some cover pools",
    ],
    fees: "2-4% annually",
    bestFor: "Cost-effective coverage for major protocols",
    affiliateUrl: "https://degen0x.com/go/unslashed",
    category: "insurance",
  },
];

const faqs: FAQ[] = [
  {
    question: "What DeFi protocols can I get insurance for?",
    answer:
      "Major DeFi protocols like Aave, Compound, Uniswap, Curve, MakerDAO, Lido, and Yearn are widely covered by most insurance providers. Smaller or newer protocols may have limited coverage options. Check each insurance provider's available cover list for specific protocols.",
  },
  {
    question: "Does DeFi protocol insurance cover impermanent loss?",
    answer:
      "No, standard DeFi protocol insurance does not cover impermanent loss, which is considered a normal market risk of providing liquidity. Protocol insurance specifically covers losses from smart contract exploits, oracle failures, governance attacks, and other technical failures.",
  },
  {
    question: "How much DeFi protocol insurance do I need?",
    answer:
      "You should cover the full value of your deposited funds in each protocol. Some users choose to insure only their largest positions to manage premium costs. Consider the risk level of each protocol: battle-tested protocols like Aave may need less coverage than newer ones.",
  },
  {
    question: "Can I transfer DeFi protocol insurance to someone else?",
    answer:
      "Some insurance protocols issue cover as transferable NFTs or tokens that can be sold on secondary markets. Nexus Mutual covers are transferable, while others may have restrictions. Check the specific terms of each provider.",
  },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Insurance', item: 'https://degen0x.com/insurance' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/insurance/best' },
    { '@type': 'ListItem', position: 4, name: 'Defi Protocols', },
  ],
};

export default function DefiProtocolsInsurancePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

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
          { label: "Best", href: "/insurance/best" },
          { label: "DeFi Protocols", href: "/insurance/best/defi-protocols" },
        ]}
      />

      <AffiliateDisclosure />

      <div className="max-w-4xl mb-12">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best DeFi Protocol Insurance of {CURRENT_MONTH} {CURRENT_YEAR}
        </h1>
        <p className="text-xl text-[var(--color-text-secondary)] mb-6">
          DeFi protocols hold billions in user deposits, making them prime targets for hackers. Protocol insurance protects your deposited funds against smart contract exploits, oracle manipulation, governance attacks, and other technical failures that could drain protocol treasuries.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Unlike traditional financial insurance backed by government guarantees, DeFi protocol insurance is provided by decentralized risk pools where capital providers stake funds to back coverage. When a covered protocol suffers an exploit, claims are assessed and paid from these pools. The cost of coverage depends on the protocol being insured, the amount of coverage, and the perceived risk level based on audit history, code complexity, and TVL.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          We evaluated each provider based on the number of DeFi protocols covered, claim history and reliability, capital pool depth, premium pricing, and ease of purchasing cover. Here are the best options for protecting your DeFi deposits.
        </p>
      </div>

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

      <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How DeFi Protocol Insurance Works</h2>
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
        <div className="space-y-4 text-[var(--color-text-secondary)]">
          <p>
            DeFi protocol insurance creates a financial safety net for your deposited funds. When you purchase cover, you pay a premium (typically 2-6% annually) for a specific coverage amount and duration. If the covered protocol suffers a qualifying event, you can file a claim to recover your losses.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-[var(--color-text)]">Covered Events:</strong> Smart contract exploits, oracle manipulation, governance attacks, economic design failures, and admin key compromises depending on the policy.</li>
            <li><strong className="text-[var(--color-text)]">Claim Process:</strong> After an incident, you submit a claim with evidence of loss. Claims may be assessed by community vote (discretionary) or triggered automatically (parametric).</li>
            <li><strong className="text-[var(--color-text)]">Coverage Duration:</strong> Most covers run for 30, 90, or 365 days. Some protocols offer perpetual cover that auto-renews until cancelled.</li>
            <li><strong className="text-[var(--color-text)]">Payout Limits:</strong> Claims are paid up to your coverage amount, minus any applicable deductibles. Ensure your coverage matches your deposit size.</li>
          </ul>
        </div>
      </section>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Insurance/best/defi Protocols", "description": "Compare the best DeFi protocol insurance options. Protect your deposits in Aave, Uniswap, Curve, and other DeFi protocols against exploits and failures.", "url": "https://degen0x.com/insurance/best/defi-protocols", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
