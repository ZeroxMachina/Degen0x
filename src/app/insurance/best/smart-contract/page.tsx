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
  title: `Best Smart Contract Insurance ${CURRENT_YEAR} - Protect Against Exploits`,
  description: "Compare the best smart contract insurance options. Protect your DeFi positions against exploits, bugs, and vulnerabilities with coverage from top insurance",
  alternates: { canonical: "/insurance/best/smart-contract" }};

const products: Product[] = [
  {
    name: "Nexus Mutual",
    slug: "nexus-mutual",
    rating: 4.8,
    description:
      "Nexus Mutual pioneered decentralized smart contract coverage and remains the market leader. Their protocol cover product protects against bugs in smart contract code that lead to loss of deposited funds, including economic design exploits and governance attacks.",
    pros: [
      "Largest selection of covered protocols",
      "Proven claim payout history",
      "Deep capital pool ensures claim coverage",
    ],
    cons: [
      "KYC required for membership",
      "Premiums increase during high demand",
      "Claims require community vote",
    ],
    fees: "2-6% annually",
    bestFor: "Comprehensive smart contract protection",
    affiliateUrl: "https://degen0x.com/go/nexus-mutual",
    category: "insurance",
    featured: true,
  },
  {
    name: "InsurAce",
    slug: "insurace",
    rating: 4.5,
    description:
      "InsurAce offers smart contract cover across multiple chains including Ethereum, BSC, Polygon, and Avalanche. Their portfolio cover product lets you bundle multiple protocol covers at a discount, making it cost-effective for users with diversified DeFi positions.",
    pros: [
      "Multi-chain smart contract coverage",
      "Bundle discounts for multiple protocols",
      "No KYC required",
    ],
    cons: [
      "Fewer covered protocols than Nexus",
      "Claim process can be slower",
      "Smaller capital reserves",
    ],
    fees: "1.5-5% annually",
    bestFor: "Multi-chain DeFi users",
    affiliateUrl: "https://degen0x.com/go/insurace",
    category: "insurance",
  },
  {
    name: "Neptune Mutual",
    slug: "neptune-mutual",
    rating: 4.3,
    description:
      "Neptune Mutual uses a parametric model for smart contract coverage, meaning payouts are triggered automatically when predefined conditions are met. This eliminates subjective claim disputes and speeds up the payout process significantly.",
    pros: [
      "Parametric payouts avoid claim disputes",
      "Fast automated settlement",
      "Available on Layer 2 for lower gas costs",
    ],
    cons: [
      "Parametric model may not cover all scenarios",
      "Fewer protocols covered",
      "Newer protocol with less track record",
    ],
    fees: "2-5% annually",
    bestFor: "Users wanting automated, dispute-free claims",
    affiliateUrl: "https://degen0x.com/go/neptune-mutual",
    category: "insurance",
  },
];

const faqs: FAQ[] = [
  {
    question: "What does smart contract insurance cover?",
    answer:
      "Smart contract insurance covers financial losses that occur when a smart contract is exploited due to a bug, vulnerability, or design flaw. This includes reentrancy attacks, flash loan exploits, oracle manipulation, access control failures, and other code-level vulnerabilities that allow attackers to drain funds.",
  },
  {
    question: "How much does smart contract cover cost?",
    answer:
      "Smart contract cover typically costs between 1.5% and 7% of the covered amount per year, depending on the protocol being covered, the amount of coverage, and current market demand for insurance. Newer or less audited protocols generally carry higher premiums.",
  },
  {
    question: "Does smart contract insurance cover rug pulls?",
    answer:
      "It depends on the policy. Some smart contract covers specifically include malicious actions by protocol teams (including rug pulls). Others only cover technical exploits by external attackers. Always check the cover wording before purchasing.",
  },
  {
    question: "Can I get coverage for any DeFi protocol?",
    answer:
      "Not all protocols are available for coverage. Insurance protocols curate lists of supported protocols based on their own risk assessments. Major protocols like Aave, Compound, Uniswap, and Lido are widely covered, while newer or less established protocols may not be available.",
  },
];

export default function SmartContractCoverPage() {
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
          { label: "Best", href: "/insurance/best" },
          { label: "Smart Contract Cover", href: "/insurance/best/smart-contract" },
        ]}
      />

      <AffiliateDisclosure />

      <div className="max-w-4xl mb-12">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Smart Contract Insurance of {CURRENT_MONTH} {CURRENT_YEAR}
        </h1>
        <p className="text-xl text-[var(--color-text-secondary)] mb-6">
          Smart contract exploits remain one of the biggest risks in DeFi. In {CURRENT_YEAR} alone, hundreds of millions have been lost to code vulnerabilities. Smart contract insurance provides financial protection when the protocols you trust get hacked.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Smart contract cover works by paying you a claim when a covered protocol suffers an exploit that leads to loss of deposited funds. The coverage typically protects against bugs in the protocol code, economic design failures, oracle manipulation attacks, and in some cases, governance attacks or admin key compromises. Coverage does not typically extend to market volatility, impermanent loss, or user error like sending funds to the wrong address.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          We evaluated each insurance provider based on the breadth of protocols covered, historical claim payouts, capital pool depth, premium pricing fairness, and overall user experience. Here are the best options for smart contract protection.
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
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How to Choose Smart Contract Cover</h2>
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
            When selecting smart contract insurance, start by identifying which protocols you have funds deposited in and check which insurance providers offer coverage for those specific protocols. Consider the following factors:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-[var(--color-text)]">Covered Events:</strong> Read the policy wording carefully. Some covers only protect against code exploits, while others also cover economic design failures and governance attacks.</li>
            <li><strong className="text-[var(--color-text)]">Claim Process:</strong> Understand whether claims are assessed by community vote (discretionary) or triggered automatically (parametric). Parametric covers provide faster payouts but may not cover all scenarios.</li>
            <li><strong className="text-[var(--color-text)]">Capital Adequacy:</strong> Check the insurance protocol&apos;s capital pool relative to total active cover. A well-capitalized protocol can pay out even large claims.</li>
            <li><strong className="text-[var(--color-text)]">Premium Cost:</strong> Compare premium rates across providers. Bundling multiple covers can reduce costs if you have positions in several protocols.</li>
          </ul>
        </div>
      </section>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Insurance/best/smart Contract", "description": "Compare the best smart contract insurance options. Protect your DeFi positions against exploits, bugs, and vulnerabilities with coverage from top insurance", "url": "https://degen0x.com/insurance/best/smart-contract"}) }} />
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/learn" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            All Learning Guides
          </Link>
          <Link href="/tools" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Crypto Tools
          </Link>
          <Link href="/compare" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Compare Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
