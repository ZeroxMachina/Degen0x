import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { ComparisonItem, FAQ } from "@/lib/types";
import MethodologyBlock from '@/components/MethodologyBlock';
import CompareSchema from '@/components/CompareSchema';

export const metadata: Metadata = {
  title: `Lido vs EigenLayer 2026: Staking vs Restaking Compared`,
  description: `Detailed comparison of Lido vs EigenLayer in ${CURRENT_YEAR}. Compare liquid staking, restaking, yields, risk profiles, and how each protocol fits your staking strategy.`,
  alternates: { canonical: "/defi-lending/compare/lido-vs-eigenlayer" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const items: ComparisonItem[] = [
  { name: "Lido", slug: "lido", rating: 4.8, affiliateUrl: "https://degen0x.com/go/lido", features: { "TVL": "$25B+", "Type": "Liquid staking", "Primary Asset": "stETH", "Base Yield": "~3-4% APR", "Additional Yield": "DeFi composability", "Risk Level": "Low-moderate", "Governance Token": "LDO", "Unique Feature": "Largest liquid staking protocol" } },
  { name: "EigenLayer", slug: "eigenlayer", rating: 4.5, affiliateUrl: "https://degen0x.com/go/eigenlayer", features: { "TVL": "$10B+", "Type": "Restaking", "Primary Asset": "eETH, stETH, ETH", "Base Yield": "Staking yield passthrough", "Additional Yield": "AVS rewards (variable)", "Risk Level": "Moderate-high", "Governance Token": "EIGEN", "Unique Feature": "Restaking for additional yield" } },
];

const features = ["TVL", "Type", "Primary Asset", "Base Yield", "Additional Yield", "Risk Level", "Governance Token", "Unique Feature"];

const faqs: FAQ[] = [
  { question: "What is the difference between staking and restaking?", answer: "Staking means locking ETH to help secure the Ethereum network in exchange for yield (~3-4% APR). Restaking (EigenLayer) takes already-staked ETH and uses it as security for additional services (Actively Validated Services/AVSs), earning extra rewards on top of base staking yield. Think of staking as securing one network, restaking as securing multiple services with the same capital." },
  { question: "Can I use Lido and EigenLayer together?", answer: "Yes, and this is a common strategy. Deposit ETH on Lido to receive stETH (earning staking yield). Then deposit stETH into EigenLayer to earn restaking rewards on top. This stacking approach lets you earn base staking yield plus additional AVS rewards from restaking, though it adds complexity and smart contract risk from each layer." },
  { question: "Is restaking safe?", answer: "Restaking introduces additional risk beyond standard staking. Your restaked ETH can be slashed not only for Ethereum validator misbehavior but also for failures in the AVS services you are securing. Each AVS has its own slashing conditions. The risk compounds with each additional service. Start with well-established AVSs and understand the slashing conditions before restaking significant amounts." },
  { question: "What is stETH and how does it work?", answer: "stETH is Lido's liquid staking token representing your staked ETH plus accumulated rewards. When you deposit ETH with Lido, you receive stETH that automatically accrues staking rewards (the token rebases daily). stETH can be used across DeFi: as collateral on Aave, in Curve liquidity pools, or deposited into EigenLayer for restaking. This composability is stETH's key advantage." },
  { question: "What yields can I expect from EigenLayer?", answer: "EigenLayer yields depend on which AVS services your restaked ETH secures and the demand for those services. Early restaking rewards came primarily from EIGEN token distributions and points programs. As more AVSs launch and generate real revenue, restaking yields should become more predictable. Current additional yields above base staking vary widely and are still maturing." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Defi Lending', item: 'https://degen0x.com/defi-lending' },
    { '@type': 'ListItem', position: 3, name: 'Compare', item: 'https://degen0x.com/defi-lending/compare' },
    { '@type': 'ListItem', position: 4, name: 'Lido Vs Eigenlayer', },
  ],
};

export default function LidoVsEigenlayerPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="defi-lending"
      />      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "DeFi Lending", href: "/defi-lending" }, { label: "Compare", href: "/defi-lending/compare/aave-vs-compound" }, { label: "Lido vs EigenLayer", href: "/defi-lending/compare/lido-vs-eigenlayer" }]} />
      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Lido vs EigenLayer: Staking vs Restaking ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Lido and EigenLayer represent two layers of the Ethereum staking ecosystem. Lido is the dominant liquid staking protocol, converting ETH into the composable stETH token. EigenLayer introduced restaking, allowing staked ETH to secure additional services for extra yield. Understanding how these protocols work independently and together is essential for optimizing your Ethereum staking strategy.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-[var(--color-text)]">The short answer:</strong> Lido is essential for anyone who wants to stake ETH while maintaining liquidity and DeFi composability. EigenLayer is for users willing to accept additional risk for the potential of higher yields through restaking. Many users stack both: Lido for the base layer of liquid staking, EigenLayer for additional yield on top.
        </p>
      </div>
      <section className="mb-12">
        <ComparisonTable items={items} features={features} title="Lido vs EigenLayer Feature Comparison" />
      </section>
      <section className="mb-12 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Detailed Analysis</h2>
        {/* editorial-voice */}
        <div style={{ background: '#1a0f2e', border: '1px solid #3b1f5e', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>⚠️</span>
            <strong style={{ color: '#c084fc', fontSize: 15 }}>Risk Assessment</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Our DeFi researchers monitor governance proposals and treasury health, not just headline rates. A protocol's governance decisions reveal more than its TVL.
          </p>
        </div>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Value Proposition</h3>
        <p className="text-[var(--color-text-secondary)]">Lido solves the liquidity problem of Ethereum staking. Without Lido, staking ETH locks it up with limited withdrawal flexibility. stETH gives you a liquid, yield-bearing token that can be used across DeFi while still earning staking rewards. EigenLayer solves the capital efficiency problem: why should staked ETH only secure one network when it could simultaneously secure many services? Each protocol addresses a different limitation of base Ethereum staking.</p>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Risk Profiles</h3>
        <p className="text-[var(--color-text-secondary)]">Lido&apos;s risks are well-understood: smart contract risk of the Lido protocol, stETH de-peg risk (if market price diverges from underlying value), and validator operator risk. These risks are mitigated by Lido&apos;s long track record and multiple audits. EigenLayer adds additional risk layers: slashing risk from AVS services, complexity risk from managing multiple restaking positions, and the novel risk of a relatively new protocol securing billions of dollars.</p>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Yield Optimization Strategy</h3>
        <p className="text-[var(--color-text-secondary)]">The optimal stacking strategy depends on your risk tolerance. Conservative: stake on Lido, hold stETH, earn ~3-4% APR. Moderate: deposit stETH into Aave as collateral, borrow stablecoins, lend them for additional yield. Aggressive: deposit stETH into EigenLayer, select high-reward AVSs, and layer on additional DeFi strategies. Each layer adds yield potential but also adds complexity and risk. Start conservative and add layers as you gain experience and understanding.</p>
      </section>
      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Defi Lending/compare/lido Vs Eigenlayer", "description": "Crypto content on degen0x", "url": "https://degen0x.com/defi-lending/compare/lido-vs-eigenlayer", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
      <CompareSchema
        title="Lido vs Eigenlayer — degen0x"
        url="/defi-lending/compare/lido-vs-eigenlayer"
        description="A head-to-head look at Lido and Eigenlayer: product, fees, risk, and who each one is built for."
        items={["Lido", "Eigenlayer"]}
      />
      <MethodologyBlock variant="compare" />
    </div>
  );
}
