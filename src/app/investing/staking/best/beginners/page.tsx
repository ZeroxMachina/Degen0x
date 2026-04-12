import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { stakingPlatforms } from "@/data/staking";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best Staking Platforms for Beginners in ${CURRENT_YEAR}`,
  description: `Find the easiest crypto staking platforms for beginners in ${CURRENT_YEAR}. Simple staking with no technical knowledge required. Compare Coinbase, Lido, and more.`,
};

const faqs = [
  {
    question: "What is the easiest way to start staking crypto?",
    answer: "The easiest way to start staking is through a centralized exchange like Coinbase. Simply buy a stakeable asset (like ETH or SOL), navigate to the staking section, and enable staking with one click. No technical knowledge, wallet setup, or minimum amounts required.",
  },
  {
    question: "Do I need technical knowledge to stake?",
    answer: "Not for basic staking. Centralized platforms like Coinbase handle everything for you. DeFi protocols like Lido require a Web3 wallet (like MetaMask) but the staking process is still straightforward. Running your own validator does require technical knowledge and is not recommended for beginners.",
  },
  {
    question: "What should a beginner stake first?",
    answer: "Ethereum (ETH) and Solana (SOL) are the most popular choices for beginner stakers. Both are established networks with strong ecosystems and reliable staking yields. Start with a small amount to understand the process before committing larger sums.",
  },
  {
    question: "Can I lose my staked crypto?",
    answer: "While uncommon, there are risks. Slashing can cause loss of staked funds (more common with small, unreliable validators). Smart contract bugs in DeFi protocols are another risk. Centralized platforms like Coinbase typically absorb slashing losses on behalf of users, making them safer for beginners.",
  },
];

export default function BestStakingBeginnersPage() {
  const beginnerPlatforms = stakingPlatforms.filter(
    (p) =>
      p.slug === "coinbase-staking" ||
      p.slug === "lido" ||
      p.slug === "kraken-staking" ||
      p.slug === "marinade" ||
      p.slug === "jito"
  ).sort((a, b) => {
    const order = ["coinbase-staking", "lido", "kraken-staking", "jito", "marinade"];
    return order.indexOf(a.slug) - order.indexOf(b.slug);
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best Staking Platforms for Beginners in ${CURRENT_YEAR}`,
    dateModified: new Date().toISOString(),
    author: { "@type": "Organization", name: "degen0x" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Investing", href: "/investing" },
            { label: "Staking", href: "/investing/staking" },
            { label: "Best for Beginners", href: "/investing/staking/best/beginners" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Staking Platforms for Beginners in {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            Starting with crypto staking does not have to be complicated. The best platforms for
            beginners offer one-click staking, clear explanations of risks and rewards, and no
            minimum requirements. Whether you prefer the familiarity of a centralized exchange
            or want to explore DeFi staking, there is an option that matches your comfort level.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            Our top recommendation for beginners is{" "}
            <strong className="text-[var(--color-text)]">Coinbase Staking</strong> for its unmatched ease of use
            and regulatory protection. For beginners ready to explore DeFi,{" "}
            <strong className="text-[var(--color-text)]">Lido</strong> provides straightforward liquid staking
            with just a Web3 wallet connection.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Our Recommendations</h2>
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
          <div className="space-y-4">
            {beginnerPlatforms.map((platform, index) => (
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
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Getting Started: Step by Step</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Choose Your Platform", desc: "Start with Coinbase for the simplest experience, or Lido if you already have a Web3 wallet like MetaMask." },
              { step: "2", title: "Buy a Stakeable Asset", desc: "Purchase ETH or SOL on your chosen platform. Both are excellent choices with strong staking ecosystems." },
              { step: "3", title: "Enable Staking", desc: "On Coinbase, navigate to the staking section and enable it. On Lido, connect your wallet and deposit ETH." },
              { step: "4", title: "Start Earning", desc: "Rewards begin accruing immediately. Ethereum rewards appear as stETH balance increases or cbETH value appreciation." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-[var(--color-text)] font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-[var(--color-text)] font-semibold">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
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

            ))}
          </div>
        </section>

        <FAQSection faqs={faqs} />
      </div>
    </>
  );
}
