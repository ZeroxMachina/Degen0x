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
  title: `Best Cross-Chain Lending Protocols ${CURRENT_YEAR} - Multi-Chain DeFi`,
  description: `Compare the best cross-chain DeFi lending protocols of ${CURRENT_YEAR}. Lend and borrow across Ethereum, Arbitrum, Optimism, Polygon, Base, and more.`,
  alternates: { canonical: "/defi-lending/best/cross-chain" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const products: Product[] = [
  {
    name: "Aave",
    slug: "aave",
    rating: 4.8,
    description: "Aave leads cross-chain DeFi lending with deployments on 10+ networks including Ethereum, Arbitrum, Optimism, Polygon, Avalanche, Base, and more. Each",
    pros: ["10+ chain deployments", "Consistent UX across all chains", "Cross-chain portal feature in V3", "Deepest multi-chain liquidity"],
    cons: ["Rates vary by chain", "Each chain is a separate market", "Bridging still required for some operations"],
    fees: "Variable supply/borrow spread",
    bestFor: "Multi-chain DeFi users",
    affiliateUrl: "https://degen0x.com/go/aave",
    category: "defi-lending",
    featured: true,
  },
  {
    name: "Radiant Capital",
    slug: "radiant",
    rating: 4.2,
    description: "Radiant Capital is built specifically for cross-chain lending, allowing users to deposit collateral on one chain and borrow on another using LayerZero omnichain technology. This creates a unified lending market across multiple blockchains without manual bridging.",
    pros: ["True cross-chain lending and borrowing", "Deposit on one chain, borrow on another", "Built on LayerZero for interoperability", "RDNT token incentives"],
    cons: ["Smaller TVL than Aave", "Cross-chain complexity adds risk", "Token emission dependency"],
    fees: "Variable borrow rates",
    bestFor: "Users needing cross-chain borrowing",
    affiliateUrl: "https://degen0x.com/go/radiant",
    category: "defi-lending",
  },
  {
    name: "Compound",
    slug: "compound",
    rating: 4.5,
    description: "Compound V3 has expanded beyond Ethereum to select Layer 2 networks, bringing its battle-tested lending markets to Arbitrum, Base, and Polygon. While not as broadly deployed as Aave, Compound offers reliable cross-chain lending with its improved V3 architecture.",
    pros: ["Battle-tested smart contracts", "V3 improvements on L2s", "Simple, clean interface", "COMP governance on all chains"],
    cons: ["Fewer chain deployments than Aave", "Limited asset selection per chain", "Smaller L2 markets"],
    fees: "Variable supply/borrow spread",
    bestFor: "Conservative multi-chain lenders",
    affiliateUrl: "https://degen0x.com/go/compound",
    category: "defi-lending",
  },
];

const faqs: FAQ[] = [
  { question: "What is cross-chain lending?", answer: "Cross-chain lending allows you to lend or borrow assets across different blockchain networks. Instead of being limited to one chain, cross-chain protocols let you supply collateral on Ethereum and borrow on Arbitrum, for example, or access the best yields regardless of which network they are on." },
  { question: "Is cross-chain lending safe?", answer: "Cross-chain lending introduces additional risks compared to single-chain protocols, including bridge risk, oracle risk across chains, and smart contract risk on multiple networks. Established protocols like Aave mitigate these risks through extensive audits and conservative deployments, but users should be aware of the added complexity." },
  { question: "Which chain has the best DeFi lending rates?", answer: "Rates vary based on supply and demand on each chain. Layer 2 networks like Arbitrum and Base often offer slightly higher yields due to lower supply, while Ethereum mainnet has the deepest liquidity. Check rates across chains before depositing, as differences can be significant." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Defi Lending', item: 'https://degen0x.com/defi-lending' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/defi-lending/best' },
    { '@type': 'ListItem', position: 4, name: 'Cross Chain', },
  ],
};

export default function CrossChainPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="defi-lending"
      />      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "DeFi Lending", href: "/defi-lending" }, { label: "Best", href: "/defi-lending/best" }, { label: "Cross-Chain", href: "/defi-lending/best/cross-chain" }]} />
      <AffiliateDisclosure />
      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Best Cross-Chain Lending Protocols ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          As DeFi expands across multiple blockchains, the ability to lend and borrow across chains has become increasingly important. Cross-chain lending protocols enable users to access the best yields regardless of which network they are on, supply collateral on one chain while borrowing on another, and manage unified positions across the multi-chain ecosystem. We evaluated the top cross-chain lending options based on chain coverage, security, and user experience.
        </p>
      </div>
      <div className="space-y-4 mb-12">
        {products.map((product, index) => (
          <ProductCard key={product.slug} product={product} rank={index + 1} categorySlug="defi-lending" />
        ))}
      </div>
      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Defi Lending/best/cross Chain", "description": "Aave leads cross-chain DeFi lending with deployments on 10+ networks including Ethereum, Arbitrum, Optimism, Polygon, Avalanche, Base, and more. Each", "url": "https://degen0x.com/defi-lending/best/cross-chain"}) }} />
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
