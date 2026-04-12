import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { ComparisonItem, FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: `Compound vs Venus ${CURRENT_YEAR}: DeFi Lending Protocol Comparison`,
  description: `Compare Compound vs Venus in ${CURRENT_YEAR}. Analyze yields, security, multi-chain support, and which protocol is better for different DeFi strategies.`,
};

const items: ComparisonItem[] = [
  { name: "Compound", slug: "compound", rating: 4.6, affiliateUrl: "https://degen0x.com/go/compound", features: { "TVL": "$3B+", "Primary Chain": "Ethereum", "Chains": "3", "Architecture": "Isolated markets V3", "Governance Token": "COMP", "Supported Assets": "20+", "Rate Model": "Variable only", "Unique Feature": "Single-asset risk isolation" } },
  { name: "Venus", slug: "venus", rating: 4.2, affiliateUrl: "https://degen0x.com/go/venus", features: { "TVL": "$2B+", "Primary Chain": "BNB Chain", "Chains": "1", "Architecture": "Pool-based V4", "Governance Token": "XVS", "Supported Assets": "30+", "Rate Model": "Variable", "Unique Feature": "VAI stablecoin, low fees" } },
];

const features = ["TVL", "Primary Chain", "Chains", "Architecture", "Governance Token", "Supported Assets", "Rate Model", "Unique Feature"];

const faqs: FAQ[] = [
  { question: "Is Venus safe to use?", answer: "Venus has improved significantly since early exploits in its history. It now has multiple audits, improved oracle infrastructure, and more conservative risk parameters. However, being on BNB Chain means it operates in a different security environment than Ethereum-based protocols." },
  { question: "Why would I choose Venus over Compound?", answer: "Venus is the better choice if you primarily operate on BNB Chain and want low transaction fees. BNB Chain gas costs are a fraction of Ethereum, making Venus more accessible for smaller positions. Venus also supports BNB Chain native assets not available on Compound." },
  { question: "Which protocol has better security?", answer: "Compound has a longer security track record on Ethereum with no major exploits of its core V3 contracts. Venus had early security issues but has since undergone extensive auditing and risk parameter improvements. Both are considered reputable within their respective ecosystems." },
];

export default function CompoundVsVenusPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "DeFi Lending", href: "/defi-lending" }, { label: "Compare", href: "/defi-lending/compare/compound-vs-venus" }, { label: "Compound vs Venus", href: "/defi-lending/compare/compound-vs-venus" }]} />
      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Compound vs Venus: Full Comparison ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Compound and Venus serve similar roles in their respective ecosystems. Compound is the established Ethereum-native lending protocol, while Venus is the leading lending protocol on BNB Chain. This comparison examines the tradeoffs between security, fees, yields, and ecosystem considerations.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-[var(--color-text)]">The short answer:</strong> Compound is better for Ethereum users who prioritize security track record and the broader Ethereum DeFi ecosystem. Venus is better for BNB Chain users who want low fees and access to BNB-native assets.
        </p>
      </div>
      <section className="mb-12">
        <ComparisonTable items={items} features={features} title="Compound vs Venus Feature Comparison" />
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
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Fee Environment</h3>
        <p className="text-[var(--color-text-secondary)]">The most immediate difference between these protocols is transaction cost. Compound on Ethereum mainnet requires gas fees that can range from $5 to $50+ per transaction during busy periods. Venus on BNB Chain typically costs under $0.50 per transaction. This makes Venus significantly more practical for smaller positions and frequent interactions like position management and reward claiming.</p>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Architecture Differences</h3>
        <p className="text-[var(--color-text-secondary)]">Compound V3 uses isolated single-asset markets where each base asset operates independently with its own collateral set. Venus uses a more traditional pool-based model similar to earlier Compound versions. Compound's isolation model provides better risk containment but less capital flexibility. Venus's pool model provides more composability but shared risk across assets.</p>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Ecosystem and Composability</h3>
        <p className="text-[var(--color-text-secondary)]">Compound benefits from the deep Ethereum DeFi ecosystem with countless integrations across yield optimizers, aggregators, and strategy platforms. Venus has growing BNB Chain integrations but the ecosystem is smaller. If composability and integration with other DeFi protocols is important to your strategy, Compound's Ethereum positioning provides more options.</p>
      </section>
      <FAQSection faqs={faqs} />
    </div>
  );
}
