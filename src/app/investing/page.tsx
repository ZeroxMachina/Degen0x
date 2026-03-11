import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { BEST_OF_CATEGORIES, LEARN_ARTICLES, CALCULATORS, CRYPTO_TOKENS, INVESTING_FAQS } from "@/data/investing";

export const metadata: Metadata = {
  title: `Crypto Investing Guide ${CURRENT_YEAR} - Best Tokens, Strategies & Tools`,
  description: `Your complete crypto investing resource. Compare top cryptocurrencies, staking platforms, ETFs, trading bots, and learn proven investment strategies. Updated ${CURRENT_MONTH} ${CURRENT_YEAR}.`,
  alternates: { canonical: "/investing" },
};

export default function InvestingHubPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
      ]} />

      {/* Hero */}
      <header className="mb-16 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Crypto Investing</span> Hub
        </h1>
        <p className="text-xl text-[var(--color-text-secondary)] mb-4">
          Everything you need to build, manage, and grow your cryptocurrency portfolio.
          From choosing your first Bitcoin to advanced DeFi yield strategies, our expert
          guides and comparison tools help you invest with confidence.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Updated {CURRENT_MONTH} {CURRENT_YEAR} by the {SITE_NAME} editorial team
        </p>
      </header>

      {/* Quick Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[
          { label: "Tokens Reviewed", value: "50+" },
          { label: "Platforms Compared", value: "30+" },
          { label: "Investment Guides", value: `${LEARN_ARTICLES.length}` },
          { label: "Free Calculators", value: `${CALCULATORS.length}` },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
            <div className="text-sm text-[var(--color-text-secondary)]">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Best-of Categories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-2">Best-of Guides</h2>
        <p className="text-[var(--color-text-secondary)] mb-8">
          Our editors rigorously compare and rank the top options in each investing category.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {BEST_OF_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/investing/best/${cat.slug}`}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 card-hover"
            >
              <h3 className="text-base font-semibold text-white mb-1">{cat.name}</h3>
              <p className="text-xs text-[var(--color-text-secondary)]">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Tokens */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-2">Crypto Token Guides</h2>
        <p className="text-[var(--color-text-secondary)] mb-8">
          Deep-dive investment analyses of the most important cryptocurrencies.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {CRYPTO_TOKENS.map((token) => (
            <Link
              key={token.slug}
              href={`/investing/crypto/${token.slug}`}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 card-hover text-center"
            >
              <div className="text-2xl font-bold gradient-text mb-1">{token.ticker}</div>
              <h3 className="text-sm font-semibold text-white mb-1">{token.name}</h3>
              <span className="inline-block rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-medium px-2 py-0.5">
                {token.category}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Learn Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-2">Investment Guides & Education</h2>
        <p className="text-[var(--color-text-secondary)] mb-8">
          Master the fundamentals of crypto investing with our comprehensive guides.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {LEARN_ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/investing/learn/${article.slug}`}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 card-hover flex items-center justify-between"
            >
              <h3 className="text-sm font-semibold text-white">{article.title}</h3>
              <span className="text-xs text-[var(--color-text-secondary)] whitespace-nowrap ml-4">{article.readTime}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Calculators */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-2">Free Crypto Calculators</h2>
        <p className="text-[var(--color-text-secondary)] mb-8">
          Plan your investments and estimate returns with our interactive tools.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CALCULATORS.map((calc) => (
            <Link
              key={calc.slug}
              href={`/investing/calculators/${calc.slug}`}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 card-hover text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">&#128200;</span>
              </div>
              <h3 className="text-base font-semibold text-white mb-1">{calc.title}</h3>
              <p className="text-xs text-[var(--color-text-secondary)]">{calc.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* How We Evaluate */}
      <section className="mb-16 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-white mb-4">How We Evaluate Crypto Investments</h2>
        <p className="text-[var(--color-text-secondary)] mb-6">
          Our editorial team uses a rigorous methodology to evaluate every cryptocurrency,
          platform, and investment product we feature. Here is what we analyze:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Technology & Security", desc: "Code quality, audit history, consensus mechanism, and track record of the underlying technology." },
            { title: "Tokenomics & Supply", desc: "Token distribution, inflation schedule, vesting periods, and alignment of incentives." },
            { title: "Team & Ecosystem", desc: "Team background, developer activity, partnerships, and the health of the broader ecosystem." },
            { title: "Risk & Reward Profile", desc: "Volatility analysis, liquidity depth, regulatory status, and potential upside vs. downside." },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQSection faqs={INVESTING_FAQS} />
    </div>
  );
}
