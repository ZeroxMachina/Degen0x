import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = { title: `Best Institutional Crypto Lending ${CURRENT_YEAR}`, description: `Compare institutional crypto lending platforms in ${CURRENT_YEAR}. Large-scale borrowing and lending for funds, treasuries, and businesses.` ,
  alternates: { canonical: "/crypto-loans/best/institutional" }};

const products: Product[] = [
  { name: "Nexo Prime", slug: "nexo", rating: 4.6, description: "Nexo Prime serves institutional clients with OTC lending, borrowing, and trading. Features include dedicated account management, customized lending terms,", pros: ["Dedicated institutional team", "Customized loan terms", "Regulatory compliance", "Segregated custody"], cons: ["Minimum requirements", "CeFi counterparty risk", "Longer onboarding process"], fees: "Negotiated institutional rates", bestFor: "Institutional CeFi borrowing", affiliateUrl: "https://degen0x.com/go/nexo", category: "crypto-loans", featured: true },
  { name: "Aave Arc", slug: "aave-loans", rating: 4.4, description: "Aave Arc is a permissioned version of Aave designed for institutional users who require KYC/AML compliance. It offers the same DeFi lending functionality within a regulatory-compliant framework with whitelisted participants.", pros: ["DeFi mechanics with compliance", "Whitelisted institutional pool", "Same Aave security model", "On-chain transparency"], cons: ["Limited participant set", "Less liquidity than public Aave", "Requires institutional onboarding"], fees: "Variable institutional rates", bestFor: "Compliant institutional DeFi", affiliateUrl: "https://degen0x.com/go/aave", category: "crypto-loans" },
];

const faqs: FAQ[] = [
  { question: "What is institutional crypto lending?", answer: "Institutional crypto lending serves large-scale participants (hedge funds, corporate treasuries, market makers) who need to borrow or lend significant amounts of crypto. These services typically offer dedicated support, customized terms, regulatory compliance, and segregated custody." },
  { question: "What size loans are available for institutions?", answer: "Institutional loans can range from hundreds of thousands to hundreds of millions of dollars. Terms are often negotiated individually based on the borrower's profile, collateral quality, and market conditions. DeFi protocols do not have upper limits beyond available liquidity." },
  { question: "How do institutional platforms differ from retail?", answer: "Institutional platforms offer dedicated account management, customized loan terms, segregated custody, regulatory compliance frameworks, OTC execution for large trades, and specialized reporting. They are designed for participants who need compliance, security, and scale." },
];

export default function InstitutionalPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="crypto-loans"
      />      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Loans", href: "/crypto-loans" }, { label: "Best", href: "/crypto-loans/best" }, { label: "Institutional", href: "/crypto-loans/best/institutional" }]} />
      <AffiliateDisclosure />
      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Best Institutional Crypto Lending ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">Institutional crypto lending serves funds, corporate treasuries, market makers, and other large-scale participants who need professional lending infrastructure with compliance, security, and customized terms. We compared the top platforms offering institutional-grade crypto borrowing and lending services.</p>
      </div>
      <div className="space-y-4 mb-12">{products.map((p, i) => (<ProductCard key={p.slug} product={p} rank={i + 1} categorySlug="crypto-loans" />))}</div>
      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Crypto Loans/best/institutional", "description": "Nexo Prime serves institutional clients with OTC lending, borrowing, and trading. Features include dedicated account management, customized lending terms,", "url": "https://degen0x.com/crypto-loans/best/institutional"}) }} />
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
