import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best Web3 Law Firms of ${CURRENT_YEAR} - Crypto & Blockchain Legal | ${SITE_NAME}`,
  description: `Compare the best Web3 and crypto law firms of ${CURRENT_YEAR}. Token offerings, DAO structuring, regulatory compliance, and blockchain IP specialists ranked by expertise and client satisfaction.`,
};

const products: Product[] = [
  {
    name: "Anderson Kill",
    slug: "anderson-kill",
    rating: 4.8,
    description: "One of the earliest law firms to establish a dedicated blockchain and cryptocurrency practice. Known for representing policyholders and blockchain companies in complex regulatory matters, including SEC enforcement actions and DAO legal structuring. Deep expertise in the intersection of insurance law and crypto asset protection.",
    pros: ["Pioneer in blockchain legal practice since 2014", "Strong SEC and regulatory defense track record", "Deep insurance and asset protection expertise", "Published thought leadership shaping industry standards"],
    cons: ["Premium pricing for boutique-level service", "Smaller team than global firms", "US-focused practice", "May have longer onboarding for new clients"],
    fees: "Custom hourly rates",
    bestFor: "Regulatory defense and DAO legal structuring",
    affiliateUrl: "#",
    category: "legal",
    featured: true,
  },
  {
    name: "Debevoise & Plimpton",
    slug: "debevoise-plimpton",
    rating: 4.7,
    description: "A global law firm with a dedicated blockchain and digital assets group handling matters across capital markets, regulatory compliance, and fund formation. Advises institutional clients on token offerings, DeFi protocol compliance, and cross-border digital asset transactions.",
    pros: ["Global reach across major financial centers", "Institutional-grade regulatory expertise", "Deep capital markets and fund formation knowledge", "Cross-border transaction capabilities"],
    cons: ["Premium pricing typical of large global firms", "Less suited for early-stage startups", "Slower turnaround than boutique specialists", "May prioritize larger engagements"],
    fees: "Custom hourly rates",
    bestFor: "Institutional clients and cross-border transactions",
    affiliateUrl: "#",
    category: "legal",
  },
  {
    name: "Fenwick & West",
    slug: "fenwick-west",
    rating: 4.6,
    description: "A Silicon Valley-based firm with deep roots in technology law that has built a substantial blockchain and cryptocurrency practice. Advises Web3 startups and established crypto companies on token design, equity structuring, SEC compliance, and venture financing with crypto-specific terms.",
    pros: ["Deep Silicon Valley tech and VC network", "Extensive startup and venture financing experience", "Practical token design and structuring advice", "Strong understanding of hybrid equity-token models"],
    cons: ["West Coast focused with limited international offices", "High demand may mean limited availability", "Hourly rates competitive with top-tier Valley firms", "Less regulatory litigation experience than specialists"],
    fees: "Custom hourly rates",
    bestFor: "Web3 startups and venture-backed token projects",
    affiliateUrl: "#",
    category: "legal",
  },
  {
    name: "DLx Law",
    slug: "dlx-law",
    rating: 4.5,
    description: "A boutique law firm built exclusively for the digital asset and blockchain industry. Founded by former BigLaw attorneys who specialize in token launches, DAO governance frameworks, DeFi regulatory questions, and NFT intellectual property. Known for practical, crypto-native legal advice.",
    pros: ["100% focused on blockchain and digital assets", "Crypto-native team with industry experience", "Practical DAO governance structuring", "Competitive pricing vs. BigLaw alternatives"],
    cons: ["Smaller team limits capacity for large engagements", "Less brand recognition than BigLaw firms", "Limited international presence", "May refer out complex litigation matters"],
    fees: "Custom hourly and project-based",
    bestFor: "DAO governance and DeFi-specific legal matters",
    affiliateUrl: "#",
    category: "legal",
  },
  {
    name: "Latham & Watkins",
    slug: "latham-watkins",
    rating: 4.4,
    description: "One of the world largest law firms with a growing digital assets practice that advises on major crypto-related transactions including token offerings, exchange licensing, stablecoin regulation, and M&A in the blockchain space. Brings institutional credibility and a deep bench of regulatory specialists.",
    pros: ["Massive global footprint across 30+ offices", "Institutional credibility for high-stakes matters", "Deep bench across every legal specialty", "Strong relationships with regulators"],
    cons: ["Highest pricing tier in the market", "Not specialized exclusively in crypto", "Bureaucratic processes typical of large firms", "Better suited for large enterprises than startups"],
    fees: "Premium hourly rates",
    bestFor: "Enterprise-scale crypto transactions and M&A",
    affiliateUrl: "#",
    category: "legal",
  },
];

const faqs: FAQ[] = [
  {
    question: "When does a Web3 project need a lawyer?",
    answer: "Every Web3 project should consult legal counsel before launching a token, forming a DAO with real treasury funds, or engaging in activities that could be classified as securities offerings. Key moments include entity formation, token design and distribution, smart contract terms of service, fundraising (SAFT/SAFE agreements), regulatory filings, and any interaction with US or EU regulators.",
  },
  {
    question: "How much does a Web3 lawyer cost?",
    answer: "Rates vary significantly. Boutique crypto-focused firms typically charge $400 to $700 per hour. Large global firms range from $800 to $1,500+ per hour for senior partners. Many firms offer project-based pricing for specific deliverables like token opinion letters ($15,000 to $50,000), DAO wrapper formation ($10,000 to $30,000), or regulatory compliance reviews. Early-stage startups should budget $20,000 to $100,000 for initial legal structuring.",
  },
  {
    question: "What is a token opinion letter?",
    answer: "A token opinion letter is a formal legal analysis from a qualified attorney that evaluates whether a specific token constitutes a security under applicable law (typically the US Howey test). Exchanges, investors, and regulators often require these letters before listing or investing. A thorough opinion analyzes the token utility, distribution method, governance rights, and economic structure.",
  },
  {
    question: "Can a DAO have legal standing?",
    answer: "Increasingly, yes. Several US states including Wyoming, Tennessee, and Vermont have enacted DAO-specific legislation that allows DAOs to register as legal entities (typically as LLCs). International jurisdictions like the Marshall Islands and Switzerland also offer DAO-friendly structures. A legal wrapper gives a DAO the ability to enter contracts, hold traditional assets, limit member liability, and interact with the traditional legal system.",
  },
  {
    question: "What should I look for in a Web3 law firm?",
    answer: "Prioritize firms with demonstrated blockchain expertise through published research, conference speaking, and real client work in the space. Check that they understand your specific area (DeFi vs. NFTs vs. token launches have different legal considerations). Verify they have relationships with relevant regulators. Ask for references from other crypto clients. Consider whether you need a boutique specialist or a full-service firm based on the complexity and scale of your needs.",
  },
];

export default function LegalPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Web3 Business", href: "/web3-business" },
          { label: "Best Tools", href: "/web3-business/best" },
          { label: "Web3 Law Firms", href: "/web3-business/best/legal" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Web3 Law Firms ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Legal counsel is essential for any serious Web3 project. From token structuring
          and regulatory compliance to DAO formation and intellectual property protection,
          the right law firm can be the difference between a compliant launch and an
          enforcement action. We evaluated leading firms based on their blockchain expertise,
          track record, client satisfaction, and specialization.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-[var(--color-text)]">Anderson Kill</strong> leads our rankings as a
          pioneer in blockchain law with deep regulatory defense experience.{" "}
          <strong className="text-[var(--color-text)]">DLx Law</strong> stands out as the top
          crypto-native boutique for DAO and DeFi-specific matters, while{" "}
          <strong className="text-[var(--color-text)]">Fenwick &amp; West</strong> is ideal for
          venture-backed Web3 startups leveraging Silicon Valley networks.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Top Web3 Law Firms</h2>
        {/* editorial-voice */}
        <div style={{ background: '#1a0808', border: '1px solid #5c1818', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🏗️</span>
            <strong style={{ color: '#ef4444', fontSize: 15 }}>Builder Perspective</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We've been building in crypto since before 'Web3' was a term. These guides reflect hard-earned lessons from shipping products in this space.
          </p>
        </div>
        <div className="space-y-4">
          {products.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              rank={index + 1}
              categorySlug="web3-business"
            />
          ))}
        </div>
      </section>

      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Key Legal Considerations for Web3 Projects</h2>
        <div className="space-y-4 text-[var(--color-text-secondary)]">
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">1.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Entity Structure</h3>
              <p className="text-sm">Choose the right legal entity (LLC, Foundation, DAO wrapper) based on your jurisdiction, token model, and operational needs. The entity structure affects liability, taxation, and regulatory obligations.</p>
            </div>
          </div>

        <AuthorAttribution
          author="0xMachina"
          role="Founder"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="web3-business"
        />

          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">2.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Token Classification</h3>
              <p className="text-sm">Determine whether your token is a utility token, governance token, or could be classified as a security. This classification dictates your regulatory obligations and distribution strategy.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">3.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Regulatory Compliance</h3>
              <p className="text-sm">Navigate SEC, CFTC, FinCEN, and international regulatory frameworks. AML/KYC obligations, money transmitter licensing, and securities registration requirements vary by activity and jurisdiction.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">4.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Intellectual Property</h3>
              <p className="text-sm">Protect your brand, code, and innovations through trademarks, open-source licensing strategy, and patent filings where appropriate. NFT projects need particular attention to IP rights and licensing terms.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
