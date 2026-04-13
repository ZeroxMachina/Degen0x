import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { stakingDetailedComparisons, stakingComparisonFeatures } from "@/data/staking";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `EigenLayer vs Lido: Restaking vs Liquid Staking (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Detailed comparison of EigenLayer vs Lido. Compare restaking yields, risks, composability, and fees to understand how these protocols complement each other.",
  alternates: { canonical: "/investing/staking/compare/eigenlayer-vs-lido" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Investing', item: 'https://degen0x.com/investing' },
    { '@type': 'ListItem', position: 3, name: 'Staking', item: 'https://degen0x.com/investing/staking' },
    { '@type': 'ListItem', position: 4, name: 'Compare', item: 'https://degen0x.com/investing/staking/compare' },
    { '@type': 'ListItem', position: 5, name: 'Eigenlayer Vs Lido', },
  ],
};

export default function EigenLayerVsLidoPage() {
  const eigenlayer = stakingDetailedComparisons["eigenlayer"];
  const lido = stakingDetailedComparisons["lido"];

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Staking", href: "/investing/staking" },
          { label: "Compare", href: "/investing/staking" },
          { label: "EigenLayer vs Lido", href: "#" },
        ]}
      />

      <AffiliateDisclosure />

      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
        EigenLayer vs Lido: Restaking vs Liquid Staking in {CURRENT_YEAR}
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">
        Updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
        EigenLayer and Lido are not direct competitors but rather complementary protocols in the
        Ethereum staking stack. Lido provides the base liquid staking layer (stake ETH, receive stETH),
        while EigenLayer adds a restaking layer on top (restake stETH for additional yield). Understanding
        how they work together and differ is key to optimizing your staking strategy.
      </p>

      <ComparisonTable
        items={[eigenlayer, lido]}
        features={stakingComparisonFeatures}
        title="EigenLayer vs Lido: Feature Comparison"
      />

      <div className="prose-crypto mt-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How They Work Together</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          Many users use both Lido and EigenLayer as part of a layered staking strategy. The typical
          flow is: stake ETH on Lido to receive stETH (earning ~3-3.5% APY), then restake that stETH
          on EigenLayer to earn additional AVS rewards (adding ~1-5% APY). The total combined yield
          can reach 4-8% APY, significantly higher than base staking alone.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
          This layered approach maximizes capital efficiency since the same ETH generates returns from
          both Ethereum validation and AVS security. However, it also compounds risks across multiple
          protocol layers. Users should carefully consider their risk tolerance before layering
          staking strategies.
        </p>

        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Yield Comparison</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          Lido alone provides 3-3.5% APY from base Ethereum staking after its 10% fee. EigenLayer
          on top can add 1-5% additional APY from AVS rewards, though this varies based on which
          services are active and their reward budgets. The combined yield potential of 4-8% makes
          the Lido + EigenLayer stack one of the most attractive ETH yield strategies available.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
          For users who want to use Lido without EigenLayer, the base staking yield is straightforward
          and predictable. EigenLayer yields are more variable and depend on the AVS ecosystem&apos;s
          maturity and demand for security services.
        </p>

        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Risk Comparison</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          Lido&apos;s risk profile is relatively well-understood: smart contract risk, validator slashing
          risk (mitigated by insurance), and stETH de-peg risk during extreme market events. The
          protocol has years of battle-testing and a clean security track record.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
          EigenLayer adds additional risk layers: AVS-specific slashing conditions, operator risk,
          additional smart contract surface area, and the relative novelty of the restaking model.
          While EigenLayer has safety mechanisms like slashing limits and withdrawal delays, the
          risk profile is inherently more complex than base liquid staking.
        </p>

        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Verdict</h2>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            <strong className="text-[var(--color-text)]">Use Lido alone if</strong> you want simple, predictable
            ETH staking yields with established security and maximum DeFi composability. Lido is
            sufficient for most users who want to earn staking rewards without additional complexity.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            <strong className="text-[var(--color-text)]">Use both Lido and EigenLayer if</strong> you want to
            maximize your ETH yield and are comfortable with the additional risk of restaking. This
            strategy is best suited for experienced DeFi users who understand the compounding risks
            and actively monitor their positions.
          </p>
        </div>
      </div>

        <AuthorAttribution
          author="SatoshiGhost"
          role="Lead Researcher"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="investing"
        />


      <FAQSection
        faqs={[
          {
            question: "Can I restake stETH on EigenLayer?",
            answer:
              "Yes, EigenLayer supports stETH as a restaking asset. You deposit your stETH into EigenLayer's strategy contract and delegate to an operator who opts into AVS. You continue earning Lido staking rewards plus additional AVS rewards through EigenLayer.",
          },
          {
            question: "What are the combined fees?",
            answer:
              "Lido charges 10% of base staking rewards. EigenLayer charges 10% of AVS rewards, plus operators take their own commission (typically 5-10%). The fees stack: you pay Lido fees on base staking and EigenLayer fees on the additional restaking yield.",
          },
          {
            question: "Is the combined strategy worth the extra risk?",
            answer:
              "It depends on your risk tolerance and the current AVS reward environment. When AVS rewards are robust, the additional yield can be significant (1-5% extra APY). However, the additional smart contract and slashing risks are real. Many users allocate only a portion of their staked ETH to restaking while keeping the rest in Lido alone.",
          },
        ]}
      />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Investing/staking/compare/eigenlayer Vs Lido", "description": "Detailed comparison of EigenLayer vs Lido. Compare restaking yields, risks, composability, and fees to understand how these protocols complement each other.", "url": "https://degen0x.com/investing/staking/compare/eigenlayer-vs-lido"}) }} />
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
