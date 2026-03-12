import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { BEST_OF_CATEGORIES, INVESTING_FAQS } from "@/data/investing";

export const metadata: Metadata = {
  title: `Best Crypto Investments of ${CURRENT_YEAR} - Top Picks & Strategies`,
  description: `Discover the best crypto investments for ${CURRENT_YEAR}. Expert-rated picks across tokens, staking, ETFs, trading platforms, DeFi, and more. Updated ${CURRENT_MONTH}.`,
  alternates: { canonical: "/investing/best" },
};

export default function BestInvestingOverviewPage() {
  const tokenCategories = BEST_OF_CATEGORIES.filter(c =>
    ["cryptos-to-buy", "long-term", "meme-coins", "defi-tokens", "layer-2", "ai-crypto", "rwa"].includes(c.slug)
  );
  const platformCategories = BEST_OF_CATEGORIES.filter(c =>
    ["trading-platforms", "apps", "beginners", "portfolio-bots", "copy-trading"].includes(c.slug)
  );
  const yieldCategories = BEST_OF_CATEGORIES.filter(c =>
    ["staking", "passive-income", "crypto-etfs", "airdrops"].includes(c.slug)
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Best Crypto Investments", href: "/investing/best" },
      ]} />

      <AffiliateDisclosure />

      <header className="mb-12">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Crypto Investments of {CURRENT_MONTH} {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          Our editorial team evaluates hundreds of cryptocurrencies, platforms, and
          investment products to bring you the best options in every category. Whether
          you are a complete beginner or an experienced trader, find the right investment
          for your goals and risk tolerance.
        </p>
      </header>

      {/* Token & Crypto Picks */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">Best Tokens & Cryptocurrencies</h2>
        <p className="text-[var(--color-text-secondary)] mb-6">
          Our top-rated token picks across different investment themes and risk profiles.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tokenCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/investing/best/${cat.slug}`}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 card-hover"
            >
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">{cat.name}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-3">{cat.description}</p>
              <span className="text-sm text-[var(--color-primary)] font-medium">View picks &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Trading Platforms & Apps */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">Best Platforms & Apps</h2>
        <p className="text-[var(--color-text-secondary)] mb-6">
          The top-rated exchanges, apps, and trading tools for every type of investor.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {platformCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/investing/best/${cat.slug}`}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 card-hover"
            >
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">{cat.name}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-3">{cat.description}</p>
              <span className="text-sm text-[var(--color-primary)] font-medium">View picks &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Yield & Passive Income */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">Best Yield & Passive Income</h2>
        <p className="text-[var(--color-text-secondary)] mb-6">
          Earn yield on your crypto holdings through staking, ETFs, and passive income strategies.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {yieldCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/investing/best/${cat.slug}`}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 card-hover"
            >
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">{cat.name}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-3">{cat.description}</p>
              <span className="text-sm text-[var(--color-primary)] font-medium">View picks &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* How We Pick */}
      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Our Selection Methodology</h2>
        <p className="text-[var(--color-text-secondary)] mb-6">
          Every product and cryptocurrency featured on {SITE_NAME} goes through our
          comprehensive evaluation process. We do not accept payment for higher rankings,
          and our editorial opinions are independent from our business relationships.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-base font-semibold text-[var(--color-text)] mb-2">Hands-On Testing</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Our team personally tests every platform, wallet, and tool we recommend.
              We create accounts, make transactions, and evaluate the real user experience
              before publishing any recommendation.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-[var(--color-text)] mb-2">Data-Driven Analysis</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              We analyze on-chain data, fee structures, security audits, TVL metrics,
              and historical performance to supplement our qualitative reviews with
              quantitative evidence.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-[var(--color-text)] mb-2">Regular Updates</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              The crypto market moves fast, so we update our rankings regularly. Every
              page shows when it was last reviewed, and we re-evaluate whenever significant
              changes occur in the market or with specific products.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={INVESTING_FAQS} />
    </div>
  );
}
