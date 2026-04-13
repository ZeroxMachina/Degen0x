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
  title: `Best Restaking Platforms of 2026 (Compared)`,
  description: `Compare the best restaking platforms in ${CURRENT_YEAR}. EigenLayer and restaking protocols reviewed for additional yield, risks, and AVS opportunities.`,
  alternates: { canonical: "/investing/staking/best/restaking" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const faqs = [
  {
    question: "What is restaking?",
    answer: "Restaking is the process of taking already-staked assets (like stETH or natively staked ETH) and opting them into additional security services called Actively Validated Services (AVS). This extends Ethereum's security model to new protocols while earning stakers additional rewards on top of their base staking yield.",
  },
  {
    question: "What are the risks of restaking?",
    answer: "Restaking introduces additional slashing conditions from each AVS you opt into. If an AVS operator misbehaves or the AVS has a bug, your restaked funds could be slashed. There is also increased smart contract risk from the additional protocol layer and the complexity of managing multiple service agreements.",
  },
  {
    question: "How much extra yield does restaking provide?",
    answer: "Restaking yields vary significantly depending on the AVS and current demand. Currently, restaking can add an additional 1-5% APY on top of base Ethereum staking yields. As more AVS launch and competition increases, yields may stabilize. The total yield depends on how many and which AVS you opt into.",
  },
  {
    question: "Can I restake liquid staking tokens?",
    answer: "Yes, EigenLayer supports restaking of liquid staking tokens including stETH, rETH, cbETH, and others. This means you can earn base staking rewards from your liquid staking protocol plus additional rewards from the AVS you opt into through EigenLayer.",
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
    { '@type': 'ListItem', position: 5, name: 'Restaking', },
  ],
};

export default function BestRestakingPage() {
  const restakingPlatforms = stakingPlatforms.filter(
    (p) => p.slug === "eigenlayer" || p.slug === "lido"
  ).sort((a, b) => b.rating - a.rating);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best Restaking Platforms of ${CURRENT_YEAR}`,
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
            { label: "Best Restaking", href: "/investing/staking/best/restaking" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Restaking Platforms of {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            Restaking is one of the most significant innovations in the staking ecosystem, allowing
            stakers to earn additional yield by extending Ethereum&apos;s security to new protocols and
            services. Pioneered by EigenLayer, restaking has grown into a multi-billion dollar sector
            that creates new revenue streams for ETH stakers.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            <strong className="text-[var(--color-text)]">EigenLayer</strong> is the dominant restaking protocol,
            supporting both native ETH restaking and liquid staking token restaking. The ecosystem
            around it includes Liquid Restaking Tokens (LRTs) from protocols like EtherFi and Renzo,
            which provide liquidity for restaked positions.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Our Rankings</h2>
          <div className="space-y-4">
            {restakingPlatforms.map((platform, index) => (
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
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How Restaking Works</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Restaking works by allowing staked ETH (either natively staked or through liquid staking
            tokens) to be used as security for additional services beyond the Ethereum base layer.
            These services, called Actively Validated Services (AVS), include oracle networks, data
            availability layers, cross-chain bridges, and other infrastructure that benefits from
            economic security.
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
            When you restake, you opt-in to specific AVS that your operator supports. Each AVS has its
            own slashing conditions, meaning your restaked ETH could be partially slashed if the operator
            or AVS experiences issues. In return, each AVS pays rewards to restakers and operators,
            creating additional yield on top of base staking returns.
          </p>
          <p className="text-[var(--color-text-secondary)]">
            The restaking ecosystem is still young and evolving rapidly. New AVS launch regularly, and
            the reward structures are being refined. For risk-aware stakers, restaking represents an
            opportunity to meaningfully increase yields while contributing to the broader Ethereum
            security model.
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
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Best Restaking Platforms of 2026 (Compared)", "description": "Compare the best restaking platforms in ${CURRENT_YEAR}. EigenLayer and restaking protocols reviewed for additional yield, risks, and AVS opportunities.", "url": "https://degen0x.com/investing/staking/best/restaking", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
</>
  );
}
