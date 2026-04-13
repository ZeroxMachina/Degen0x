import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { stakingPlatforms } from "@/data/staking";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Liquid Staking Protocols of ${CURRENT_YEAR} (Compared)`,
  description: `Compare the best liquid staking protocols in ${CURRENT_YEAR}. Lido, Rocket Pool, Jito, Marinade, and StakeWise reviewed for yields, security, and DeFi composability.`,
  alternates: { canonical: "/investing/staking/best/liquid-staking" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const faqs = [
  {
    question: "What is liquid staking?",
    answer: "Liquid staking allows you to stake your cryptocurrency and receive a liquid derivative token in return. This token represents your staked position and can be freely traded, used as collateral in DeFi, or provided as liquidity. You earn staking rewards while maintaining access to your capital.",
  },
  {
    question: "What are the risks of liquid staking?",
    answer: "Liquid staking introduces smart contract risk (the protocol could be exploited), de-peg risk (the liquid staking token could trade below the value of the underlying asset), and governance risk (protocol changes could affect your position). These risks exist on top of the standard staking risks like slashing.",
  },
  {
    question: "Which liquid staking token has the most DeFi integrations?",
    answer: "Lido's stETH has by far the most DeFi integrations, accepted as collateral on Aave, Compound, MakerDAO, and dozens of other protocols. On Solana, JitoSOL leads in DeFi integrations across the Solana ecosystem.",
  },
  {
    question: "Can I use liquid staking tokens as collateral for loans?",
    answer: "Yes, most major lending protocols accept liquid staking tokens as collateral. For example, you can deposit stETH on Aave to borrow stablecoins. This strategy is called leveraged staking and can amplify returns, but also increases risk significantly.",
  },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Investing', item: 'https://degen0x.com/investing' },
    { '@type': 'ListItem', position: 3, name: 'Staking', item: 'https://degen0x.com/investing/staking' },
    { '@type': 'ListItem', position: 4, name: 'Best', item: 'https://degen0x.com/investing/staking/best' },
    { '@type': 'ListItem', position: 5, name: 'Liquid Staking', },
  ],
};

export default function BestLiquidStakingPage() {
  const liquidPlatforms = stakingPlatforms.filter(
    (p) =>
      p.slug === "lido" ||
      p.slug === "rocket-pool" ||
      p.slug === "jito" ||
      p.slug === "marinade" ||
      p.slug === "stakewise" ||
      p.slug === "coinbase-staking"
  ).sort((a, b) => b.rating - a.rating);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best Liquid Staking Protocols of ${CURRENT_YEAR}`,
    dateModified: new Date().toISOString(),
    author: { "@type": "Organization", name: "degen0x" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Investing", href: "/investing" },
            { label: "Staking", href: "/investing/staking" },
            { label: "Best Liquid Staking", href: "/investing/staking/best/liquid-staking" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Liquid Staking Protocols of {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            Liquid staking has revolutionized how people participate in proof-of-stake networks. Instead of
            locking your assets and losing access to them, liquid staking protocols issue derivative tokens
            that represent your staked position. These tokens can be used throughout DeFi while your
            underlying stake continues to earn rewards.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            <strong className="text-[var(--color-text)]">Lido</strong> dominates Ethereum liquid staking with stETH
            and its unparalleled DeFi integration. <strong className="text-[var(--color-text)]">Jito</strong> leads
            Solana liquid staking with MEV-enhanced yields. <strong className="text-[var(--color-text)]">Rocket Pool</strong>
            {" "}offers the most decentralized Ethereum staking with permissionless node operation.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Our Rankings</h2>
          <div className="space-y-4">
            {liquidPlatforms.map((platform, index) => (
              <ProductCard
                key={platform.slug}
                product={platform}
                rank={index + 1}
                categorySlug="investing/staking"
              />
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How Liquid Staking Works</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            When you deposit your crypto into a liquid staking protocol, the protocol stakes it with
            validators on your behalf and mints a derivative token that represents your staked position.
            This token accrues value over time as staking rewards are earned.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#041a12', border: '1px solid #064e3b', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📈</span>
            <strong style={{ color: '#10b981', fontSize: 15 }}>Research Perspective</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Our investment research is opinionated by design — we believe conviction backed by on-chain data beats diversification into projects you don't understand.
          </p>
        </div>
          <p className="text-[var(--color-text-secondary)] mb-4">
            There are two main token models: rebasing tokens (like stETH) where your token balance
            increases daily, and value-accruing tokens (like rETH, JitoSOL, mSOL) where the token
            price appreciates relative to the underlying asset. Both achieve the same result of
            delivering staking rewards, but have different implications for DeFi usage and tax reporting.
          </p>
          <p className="text-[var(--color-text-secondary)]">
            The total value locked in liquid staking protocols exceeded $40 billion in {CURRENT_YEAR},
            making it one of the largest sectors in DeFi. This growth reflects the strong demand for
            staking yields combined with capital efficiency.
          </p>
        </section>

        <FAQSection faqs={faqs} />
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
    </>
  );
}
