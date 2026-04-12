import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto Accounting Software of ${CURRENT_YEAR} - On-Chain Bookkeeping | ${SITE_NAME}`,
  description: `Compare the best crypto accounting software for businesses in ${CURRENT_YEAR}. Track on-chain transactions, reconcile DeFi activity, generate tax reports, and stay audit-ready.`,
  alternates: { canonical: "/web3-business/best/accounting" }};

const products: Product[] = [
  {
    name: "Bitwave",
    slug: "bitwave",
    rating: 4.8,
    description: "Enterprise-grade crypto accounting and tax platform for businesses. Automatically tracks and categorizes on-chain transactions across hundreds of wallets and",
    pros: ["Enterprise-grade with ERP integrations", "Supports hundreds of chains and wallets", "Automated transaction categorization", "Sub-ledger and journal entry generation"],
    cons: ["Premium pricing for enterprise features", "Onboarding can take time for complex setups", "Overkill for small teams", "Requires accounting knowledge to maximize value"],
    fees: "Custom pricing; starts ~$500/mo",
    bestFor: "Mid-to-large crypto businesses and protocols",
    affiliateUrl: "#",
    category: "accounting",
    featured: true,
  },
  {
    name: "Cryptio",
    slug: "cryptio",
    rating: 4.6,
    description: "Crypto accounting platform that bridges on-chain data with traditional accounting workflows. Provides real-time portfolio tracking, automated reconciliation, and export to QuickBooks, Xero, and NetSuite. Strong focus on making auditors comfortable with crypto data.",
    pros: ["Clean reconciliation workflow", "Direct QuickBooks and Xero integration", "Audit-friendly reporting format", "Multi-entity support"],
    cons: ["Fewer chain integrations than Bitwave", "DeFi tracking still maturing", "US-focused pricing and support", "Manual review needed for complex transactions"],
    fees: "From $299/mo",
    bestFor: "Companies needing clean audit trails",
    affiliateUrl: "#",
    category: "accounting",
  },
  {
    name: "Tres Finance",
    slug: "tres-finance",
    rating: 4.5,
    description: "Real-time crypto accounting and treasury platform designed for institutional-grade reporting. Tracks positions across CeFi and DeFi, provides mark-to-market valuations, and generates fund administrator-ready reports.",
    pros: ["Real-time position tracking", "Fund administrator-ready reporting", "CeFi and DeFi coverage", "Institutional-grade data quality"],
    cons: ["Primarily serves larger organizations", "Custom pricing makes comparison difficult", "Newer platform with smaller client base", "Limited self-service onboarding"],
    fees: "Custom pricing",
    bestFor: "Crypto funds and institutional treasuries",
    affiliateUrl: "#",
    category: "accounting",
  },
  {
    name: "Ledgible",
    slug: "ledgible",
    rating: 4.3,
    description: "Tax and accounting platform for crypto businesses and their advisors. Offers both business and tax professional solutions, handling transaction tracking, cost basis calculation, and tax reporting for corporate crypto holdings.",
    pros: ["CPA and tax professional tools included", "Straightforward cost basis tracking", "Good for businesses with simpler crypto activity", "Regulatory reporting features"],
    cons: ["Less DeFi-focused than competitors", "Fewer chain integrations", "Interface feels less modern", "Limited automation for complex operations"],
    fees: "From $199/mo for businesses",
    bestFor: "Businesses with straightforward crypto activity",
    affiliateUrl: "#",
    category: "accounting",
  },
  {
    name: "Coinshift",
    slug: "coinshift-accounting",
    rating: 4.2,
    description: "Treasury management platform with built-in accounting features for DAO and multi-sig operations. Tracks transactions across Gnosis Safe wallets, provides categorization tools, and generates reports suitable for DAO governance transparency.",
    pros: ["Built for DAO treasury accounting", "Direct Gnosis Safe integration", "Governance-friendly reporting", "Combined treasury and accounting in one tool"],
    cons: ["Narrower scope than full accounting platforms", "Limited ERP integrations", "Best for EVM chains only", "Not a replacement for full accounting software"],
    fees: "Free tier; paid from $199/mo",
    bestFor: "DAOs needing treasury accounting visibility",
    affiliateUrl: "#",
    category: "accounting",
  },
];

const faqs: FAQ[] = [
  {
    question: "Why do crypto businesses need specialized accounting software?",
    answer: "Traditional accounting software like QuickBooks cannot natively track on-chain transactions, handle token-based revenue, reconcile DeFi positions, or calculate cost basis across thousands of crypto transactions. Crypto accounting software bridges on-chain activity with standard accounting practices, ensuring your books are accurate and audit-ready.",
  },
  {
    question: "How does crypto accounting differ from personal crypto tax software?",
    answer: "Personal tax tools like Koinly or CoinTracker focus on individual capital gains reporting. Business crypto accounting requires sub-ledger integration, multi-entity tracking, ERP compatibility, revenue recognition for token-based income, treasury mark-to-market valuations, and audit-ready financial statements that satisfy professional accountants and auditors.",
  },
  {
    question: "Can I use regular accounting software alongside crypto tools?",
    answer: "Yes, and most businesses do. Crypto accounting platforms like Bitwave and Cryptio are designed to integrate with traditional accounting software such as QuickBooks, Xero, and NetSuite. They track and categorize on-chain transactions, then sync journal entries to your standard accounting system for consolidated financial reporting.",
  },
  {
    question: "What records should a crypto business maintain?",
    answer: "Maintain records of all wallet addresses, transaction hashes, timestamps, cost basis for acquired tokens, fair market values at the time of transactions, revenue recognition events, contributor and vendor payments, DeFi protocol interactions, and any governance-related financial decisions. Automated tools dramatically reduce the burden of manual recordkeeping.",
  },
];

export default function AccountingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="web3-business"
      />      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Web3 Business", href: "/web3-business" },
          { label: "Best Tools", href: "/web3-business/best" },
          { label: "Accounting", href: "/web3-business/best/accounting" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Crypto Accounting Software ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Crypto accounting is one of the most painful operational challenges for Web3 businesses. Between
          multi-chain treasury activity, DeFi protocol interactions, token-based compensation, and
          constantly changing regulations, keeping accurate books requires specialized tooling. We
          have tested the leading crypto accounting platforms to find the best solutions for different
          business sizes and complexities.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-[var(--color-text)]">Bitwave</strong> leads our rankings for its enterprise-grade
          capabilities and deep ERP integrations. <strong className="text-[var(--color-text)]">Cryptio</strong> excels
          at producing clean audit trails for companies working with traditional accounting firms. For
          institutional-grade fund reporting, <strong className="text-[var(--color-text)]">Tres Finance</strong> provides
          the most sophisticated position tracking and valuation tools.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Our Rankings</h2>
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
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Key Features to Compare</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Multi-Chain Tracking", desc: "The ability to automatically ingest and categorize transactions across all chains your business operates on." },
            { title: "DeFi Reconciliation", desc: "Automated handling of liquidity pool positions, yield farming, staking rewards, and complex protocol interactions." },
            { title: "ERP Integration", desc: "Direct sync with QuickBooks, Xero, NetSuite, or other accounting systems your team already uses." },
            { title: "Audit Readiness", desc: "Report formats and data quality that satisfy auditors and CPAs who may not be crypto-native." },
            { title: "Cost Basis Methods", desc: "Support for FIFO, LIFO, specific identification, and other cost basis methods required by your jurisdiction." },
            { title: "Multi-Entity Support", desc: "Separate tracking for multiple legal entities, subsidiaries, or DAO structures under one account." },
          ].map((item) => (
            <div key={item.title} className="p-4 rounded-lg bg-[var(--color-bg)]/50">
              <h3 className="text-[var(--color-text)] font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Multi-Chain Tracking", "description": "Enterprise-grade crypto accounting and tax platform for businesses. Automatically tracks and categorizes on-chain transactions across hundreds of wallets and", "url": "https://degen0x.com/web3-business/best/accounting"}) }} />
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
