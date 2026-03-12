import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ProductCard from "@/components/ProductCard";
import FAQSection from "@/components/FAQSection";
import TableOfContents from "@/components/TableOfContents";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { CRYPTO_TOKENS, INVESTING_FAQS } from "@/data/investing";
import { Product } from "@/lib/types";

export const metadata: Metadata = {
  title: `Best Cryptos to Buy in ${CURRENT_YEAR} - Top Picks for ${CURRENT_MONTH}`,
  description: `Discover the best cryptocurrencies to buy right now. Our experts analyze fundamentals, technology, and market potential to identify top crypto picks for ${CURRENT_YEAR}.`,
  alternates: { canonical: "/investing/best/cryptos-to-buy" },
};

const topPicks: Product[] = CRYPTO_TOKENS.slice(0, 7).map(t => ({
  name: t.name,
  slug: t.slug,
  rating: t.rating,
  description: t.description,
  pros: [t.useCase, t.consensus, `Launched ${t.launchYear}`],
  cons: ["Crypto markets are volatile", "Regulatory risks remain"],
  bestFor: t.category,
  affiliateUrl: t.affiliateUrl,
  category: "cryptos-to-buy",
}));

const toc = [
  { id: "top-picks", title: "Top Crypto Picks", level: 2 },
  { id: "how-we-chose", title: "How We Chose These Cryptos", level: 2 },
  { id: "market-overview", title: "Market Overview", level: 2 },
  { id: "investment-strategies", title: "Investment Strategies", level: 2 },
  { id: "risks", title: "Key Risks to Consider", level: 2 },
  { id: "faq", title: "FAQ", level: 2 },
];

export default function BestCryptosToBuyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy" },
      ]} />

      <AffiliateDisclosure />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Cryptos to Buy in {CURRENT_MONTH} {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Choosing the right cryptocurrency to buy requires careful analysis of fundamentals,
          technology, team quality, tokenomics, and market dynamics. Our editorial team has
          evaluated dozens of projects to identify the most compelling investment opportunities
          across different risk profiles and categories.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>
      </header>

      <TableOfContents items={toc} />

      <section id="top-picks" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Top Crypto Picks for {CURRENT_YEAR}</h2>
        <div className="space-y-4">
          {topPicks.map((product, idx) => (
            <ProductCard key={product.slug} product={product} rank={idx + 1} categorySlug="investing" />
          ))}
        </div>
      </section>

      <section id="how-we-chose" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How We Chose These Cryptos</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Our selection process goes far beyond price action. We evaluate each cryptocurrency
          across multiple dimensions to identify projects with genuine long-term potential.
          Market capitalization provides a baseline for stability, but we weigh technology
          innovation, developer ecosystem health, and real-world adoption equally.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-4">
          We analyze on-chain metrics including daily active addresses, transaction volume,
          and TVL (Total Value Locked) for smart contract platforms. Developer activity on
          GitHub repositories shows whether a project is actively improving. We also assess
          tokenomics to understand supply dynamics, inflation schedules, and whether token
          holders have meaningful governance rights.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          Security is non-negotiable. We review audit histories, past incidents, and the
          overall architecture of each blockchain. Projects with multiple independent audits,
          bug bounty programs, and transparent security practices score higher in our rankings.
        </p>
      </section>

      <section id="market-overview" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Crypto Market Overview for {CURRENT_YEAR}</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          The cryptocurrency market has matured significantly with the approval and success
          of spot Bitcoin and Ethereum ETFs bringing institutional capital into the space.
          Regulatory frameworks are taking shape in major economies, providing more clarity
          for investors. Layer 2 scaling solutions have dramatically reduced transaction costs
          on Ethereum, unlocking new use cases.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-4">
          AI and crypto convergence is a dominant narrative, with decentralized compute networks,
          AI agent platforms, and data marketplaces attracting significant investment. Real World
          Asset (RWA) tokenization is bridging traditional finance with DeFi, bringing trillions
          in traditional assets on-chain. These secular trends create opportunities across
          different crypto sectors.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          Despite positive fundamentals, crypto remains a volatile asset class. Price corrections
          of 20-40% are normal even in bull markets. Dollar-cost averaging, proper position
          sizing, and portfolio diversification remain the most effective risk management
          strategies for crypto investors.
        </p>
      </section>

      <section id="investment-strategies" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Investment Strategies for Crypto</h2>
        <div className="space-y-4">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Core Holdings (60-70% of portfolio)</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Allocate the majority of your crypto portfolio to established assets like Bitcoin
              and Ethereum. These have the longest track records, deepest liquidity, and are
              generally considered the lowest-risk crypto investments. They serve as the foundation
              of any well-constructed crypto portfolio.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Growth Positions (20-30% of portfolio)</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Allocate a moderate portion to high-quality altcoins with proven technology and
              growing ecosystems. Projects like Solana, Chainlink, and Arbitrum offer exposure
              to specific crypto themes (speed, oracles, L2 scaling) while maintaining
              reasonable risk profiles.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Speculative Bets (5-10% of portfolio)</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              If your risk tolerance allows, a small allocation to higher-risk opportunities
              like emerging L1s, new DeFi protocols, or AI crypto can capture outsized returns.
              Only invest what you can afford to lose completely, and take profits as positions
              appreciate.
            </p>
          </div>
        </div>
      </section>

      <section id="risks" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Key Risks to Consider</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Cryptocurrency investing carries significant risks that every investor should understand
          before allocating capital. Market volatility is the most obvious risk, with even top
          assets capable of losing 50% or more during bear markets. Regulatory risk remains
          material, as governments worldwide continue to develop crypto-specific regulations
          that could impact certain projects or sectors.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Technology risk is inherent in any crypto investment. Smart contract vulnerabilities,
          consensus mechanism flaws, and bridge exploits have caused billions in losses
          historically. Counterparty risk exists when using centralized exchanges or lending
          platforms. Always prioritize self-custody for significant holdings and diversify
          across multiple projects to reduce concentration risk.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          Finally, be aware of psychological risks. Fear of missing out (FOMO), panic selling
          during dips, and overconfidence during bull markets are common behavioral traps.
          Having a clear investment plan and sticking to it through market cycles is one of
          the most important factors in long-term crypto investing success.
        </p>
      </section>

      <section id="faq">
        <FAQSection faqs={INVESTING_FAQS} />
      </section>
    </div>
  );
}
