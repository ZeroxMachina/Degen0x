import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best Web3 Grants Programs of ${CURRENT_YEAR} - Funding for Builders | ${SITE_NAME}`,
  description: `Discover the best Web3 grants programs in ${CURRENT_YEAR}. Get non-dilutive funding from Ethereum, Solana, Optimism, and other major ecosystems. Grant sizes, requirements, and application tips.`,
  alternates: { canonical: "/web3-business/best/grants" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const products: Product[] = [
  {
    name: "Ethereum Foundation Grants",
    slug: "ethereum-foundation-grants",
    rating: 4.8,
    description: "The largest and most established grants program in Web3, funding research, development, and community initiatives across the Ethereum ecosystem. Supports",
    pros: ["Largest grant pool in Web3", "Wide scope covering research to community", "Strong credibility and ecosystem recognition", "No equity or token requirements"],
    cons: ["Highly competitive application process", "Long review timelines", "Preference for Ethereum-specific projects", "Less structured milestone tracking"],
    fees: "Free to apply",
    bestFor: "Ethereum ecosystem builders and researchers",
    affiliateUrl: "#",
    category: "grants",
    featured: true,
  },
  {
    name: "Gitcoin Grants",
    slug: "gitcoin-grants",
    rating: 4.7,
    description: "Quadratic funding platform that democratizes grant allocation through community voting. Projects receive matching funds proportional to the number of individual contributors, amplifying grassroots support for public goods.",
    pros: ["Community-driven quadratic funding model", "Recurring grant rounds", "Strong network effects and visibility", "Open to diverse project types"],
    cons: ["Funding amounts vary with matching pool", "Requires active community engagement", "Sybil resistance challenges", "Round-based timing constraints"],
    fees: "Free to apply",
    bestFor: "Open-source and public goods projects",
    affiliateUrl: "#",
    category: "grants",
  },
  {
    name: "Optimism RetroPGF",
    slug: "optimism-retropgf",
    rating: 4.6,
    description: "Retroactive Public Goods Funding program that rewards projects for impact already delivered to the Optimism ecosystem. Unlike traditional grants that fund future work, RetroPGF compensates proven contributions after the fact.",
    pros: ["Rewards proven impact, not promises", "Large funding pools (millions per round)", "Growing OP token ecosystem", "Backed by Optimism Collective governance"],
    cons: ["Retroactive model requires upfront work", "Round timing is unpredictable", "Evaluation criteria evolve each round", "Concentrated on Optimism ecosystem"],
    fees: "Free to apply",
    bestFor: "Teams with existing Optimism ecosystem contributions",
    affiliateUrl: "#",
    category: "grants",
  },
  {
    name: "Solana Foundation Grants",
    slug: "solana-foundation-grants",
    rating: 4.5,
    description: "Grants program funding development on the Solana blockchain, supporting DeFi protocols, developer tools, infrastructure projects, and ecosystem growth initiatives. Focused on high-performance applications that leverage Solana speed and low costs.",
    pros: ["Strong focus on technical development", "Growing ecosystem with many opportunities", "Connections to Solana ecosystem VCs", "Milestone-based funding structure"],
    cons: ["Solana-ecosystem specific", "Competitive application process", "Grant sizes can be smaller than Ethereum", "Requires Solana technical expertise"],
    fees: "Free to apply",
    bestFor: "Solana-native builders and developers",
    affiliateUrl: "#",
    category: "grants",
  },
  {
    name: "Uniswap Foundation Grants",
    slug: "uniswap-foundation-grants",
    rating: 4.4,
    description: "Grants program focused on advancing the Uniswap protocol and broader DeFi ecosystem. Funds research, development, governance tooling, and community initiatives that enhance decentralized exchange infrastructure.",
    pros: ["Well-funded treasury backing", "Clear focus on DeFi infrastructure", "Transparent governance process", "Supports research and development"],
    cons: ["Narrowly focused on Uniswap/DeFi", "Smaller grant pool than L1 foundations", "Application reviews can be slow", "High competition for larger grants"],
    fees: "Free to apply",
    bestFor: "DeFi developers and researchers",
    affiliateUrl: "#",
    category: "grants",
  },
  {
    name: "Arbitrum Grants (STIP/LTIPP)",
    slug: "arbitrum-grants",
    rating: 4.3,
    description: "Incentive programs from the Arbitrum DAO providing ARB token grants to projects building on the Arbitrum ecosystem. Includes both short-term incentive programs and longer-term initiatives to grow the Layer 2 network.",
    pros: ["Large ARB token allocations", "DAO-governed with community input", "Growing L2 ecosystem momentum", "Multiple program tracks available"],
    cons: ["Token-based grants subject to price volatility", "Governance approval process can be lengthy", "Program structures change frequently", "High competition for limited pools"],
    fees: "Free to apply",
    bestFor: "Projects building on Arbitrum L2",
    affiliateUrl: "#",
    category: "grants",
  },
];

const faqs: FAQ[] = [
  {
    question: "What are Web3 grants?",
    answer: "Web3 grants are non-dilutive funding provided by blockchain foundations, protocol DAOs, and ecosystem funds to support development, research, and community building. Unlike venture capital, grants do not require giving up equity or tokens. They typically fund open-source development, public goods, infrastructure improvements, and ecosystem growth initiatives.",
  },
  {
    question: "How much funding can I get from a Web3 grant?",
    answer: "Grant amounts vary widely. Small grants for individual contributors or early-stage projects range from $5,000 to $25,000. Mid-size grants for development teams typically range from $25,000 to $100,000. Large-scale infrastructure or research grants can exceed $500,000. Retroactive funding programs like Optimism RetroPGF have distributed millions to top recipients.",
  },
  {
    question: "What makes a strong grant application?",
    answer: "The strongest applications clearly articulate the problem being solved, demonstrate the team capability to deliver, provide a realistic timeline with measurable milestones, explain how the project benefits the specific ecosystem, and show evidence of prior work or a working prototype. Including community support, user traction, or prior contributions to the ecosystem significantly strengthens your case.",
  },
  {
    question: "Can I apply to multiple grants programs simultaneously?",
    answer: "Yes, applying to multiple programs is common and generally encouraged. However, be transparent about other funding sources in your applications and avoid double-funding the same work. Each ecosystem appreciates different aspects of your project, so tailor each application to the specific grant criteria and ecosystem priorities.",
  },
  {
    question: "Do I need a legal entity to receive a grant?",
    answer: "Requirements vary by program. Some grants can be disbursed to individuals or DAOs directly on-chain. Others, especially larger grants from established foundations, require a legal entity for compliance and tax reporting purposes. If you do not have an entity, consider forming a simple LLC or working with a fiscal sponsor that handles grant administration.",
  },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Web3 Business', item: 'https://degen0x.com/web3-business' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/web3-business/best' },
    { '@type': 'ListItem', position: 4, name: 'Grants', },
  ],
};

export default function GrantsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Web3 Business", href: "/web3-business" },
          { label: "Best Tools", href: "/web3-business/best" },
          { label: "Web3 Grants", href: "/web3-business/best/grants" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Web3 Grants Programs ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Web3 grants offer non-dilutive funding to build on top of leading blockchain ecosystems. Unlike
          venture capital, grants let you keep full ownership of your project while receiving financial
          support from the foundations and DAOs that benefit from your work. We have tracked and evaluated
          the most active grant programs to help you find the right funding source for your project.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          The <strong className="text-[var(--color-text)]">Ethereum Foundation</strong> remains the largest and most
          established program, while <strong className="text-[var(--color-text)]">Gitcoin Grants</strong> offers a
          unique community-driven quadratic funding model. For teams that have already shipped,{" "}
          <strong className="text-[var(--color-text)]">Optimism RetroPGF</strong> rewards proven impact retroactively
          with substantial funding rounds.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Top Grants Programs</h2>
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
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Tips for Getting Funded</h2>
        <div className="space-y-4 text-[var(--color-text-secondary)]">
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">1.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Build first, then apply</h3>
              <p className="text-sm">Applications with working prototypes or prior contributions are significantly more competitive than ideas alone. Ship a minimum viable product before seeking grant funding.</p>
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
              <h3 className="text-[var(--color-text)] font-semibold">Align with ecosystem priorities</h3>
              <p className="text-sm">Each grant program has specific focus areas. Research what each ecosystem is actively funding and frame your project around those priorities.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">3.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Define clear milestones</h3>
              <p className="text-sm">Break your project into measurable deliverables with realistic timelines. Grant reviewers need to see that you can execute, not just ideate.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">4.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Engage the community</h3>
              <p className="text-sm">Active participation in the ecosystem through governance, forums, and social channels builds credibility and relationships with grant reviewers.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Web3 Business/best/grants", "description": "The largest and most established grants program in Web3, funding research, development, and community initiatives across the Ethereum ecosystem. Supports", "url": "https://degen0x.com/web3-business/best/grants", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
