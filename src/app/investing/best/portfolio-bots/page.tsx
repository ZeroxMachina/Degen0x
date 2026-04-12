import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ProductCard from "@/components/ProductCard";
import FAQSection from "@/components/FAQSection";
import TableOfContents from "@/components/TableOfContents";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { PORTFOLIO_BOTS } from "@/data/investing";
import { FAQ } from "@/lib/types";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best Crypto Trading Bots ${CURRENT_YEAR} - Portfolio Automation Tools`,
  description: `Compare the best crypto trading bots and portfolio automation tools for ${CURRENT_YEAR}. DCA bots, grid bots, rebalancing tools, and automated strategies reviewed.`,
  alternates: { canonical: "/investing/best/portfolio-bots" },
};

const faqs: FAQ[] = [
  {
    question: "Are crypto trading bots profitable?",
    answer: "Crypto trading bots can be profitable when configured correctly, but they are not guaranteed money makers. DCA bots and grid bots tend to perform well in ranging and trending markets. Success depends on strategy selection, market conditions, and proper risk management. Always backtest and paper trade before using real capital.",
  },
  {
    question: "Are crypto trading bots safe?",
    answer: "Reputable trading bots like 3Commas and Cryptohopper connect to exchanges via API keys with trade-only permissions. They cannot withdraw your funds. However, risks include poor strategy configuration leading to losses, API key security, and bot platform vulnerabilities. Use withdrawal-disabled API keys and enable IP restrictions.",
  },
  {
    question: "Do I need coding skills to use a trading bot?",
    answer: "No. Modern crypto trading bots offer visual interfaces for strategy configuration. Platforms like Pionex have pre-built bots you can activate with a few clicks. More advanced platforms like 3Commas offer customizable settings but still do not require programming knowledge.",
  },
];

const toc = [
  { id: "top-picks", title: "Top Portfolio Bots", level: 2 },
  { id: "what-are-bots", title: "What Are Crypto Trading Bots", level: 2 },
  { id: "bot-types", title: "Types of Trading Bots", level: 2 },
  { id: "getting-started", title: "Getting Started", level: 2 },
  { id: "faq", title: "FAQ", level: 2 },
];

export default function BestPortfolioBotsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Best Portfolio Bots", href: "/investing/best/portfolio-bots" },
      ]} />

      <AffiliateDisclosure />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Crypto Portfolio Bots for {CURRENT_MONTH} {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Automated trading bots help you execute strategies 24/7 without emotional decision-making.
          We have tested the top crypto bot platforms for strategy variety, ease of use, exchange
          compatibility, and performance.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>
      </header>

      <TableOfContents items={toc} />

      <section id="top-picks" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Top Portfolio Bots for {CURRENT_YEAR}</h2>
        <div className="space-y-4">
          {PORTFOLIO_BOTS.map((product, idx) => (
            <ProductCard key={product.slug} product={product} rank={idx + 1} categorySlug="investing" />
          ))}
        </div>
      </section>

      <section id="what-are-bots" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What Are Crypto Trading Bots?</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Crypto trading bots are software programs that automatically execute trades on your behalf
          based on predefined strategies. They connect to your exchange account via API keys and
          can operate 24/7, removing emotional bias from trading decisions. Bots excel at executing
          repetitive strategies like dollar-cost averaging, grid trading, and portfolio rebalancing
          with precision and consistency.
        </p>
        {/* editorial-voice */}
        <div style={{ background: '#041a12', border: '1px solid #064e3b', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📈</span>
            <strong style={{ color: '#10b981', fontSize: 15 }}>Research Perspective</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We are long-term Bitcoin and Ethereum believers. Our analysis of other assets applies the same rigorous framework regardless of personal conviction.
          </p>
        </div>
        <p className="text-[var(--color-text-secondary)]">
          While bots automate execution, they do not eliminate risk. A poorly configured bot can
          lose money just as easily as manual trading. The best approach is to start with
          well-understood strategies like DCA bots, test with small amounts or paper trading,
          and gradually increase allocation as you gain confidence.
        </p>
      </section>

      <section id="bot-types" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Types of Trading Bots</h2>
        <div className="space-y-4">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">DCA Bots</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Automatically buy a fixed amount at regular intervals, regardless of price. Ideal
              for long-term accumulation and reducing the impact of volatility on your average cost.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Grid Bots</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Place buy and sell orders at preset intervals within a price range. Profits from
              natural price oscillations. Works best in ranging, sideways markets.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Rebalancing Bots</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Automatically maintain your desired portfolio allocation by selling overweight
              positions and buying underweight ones. Enforces disciplined portfolio management.
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

      </section>

      <section id="getting-started" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Getting Started with Trading Bots</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Start by choosing a bot platform that supports your preferred exchange. Create API keys
          on your exchange with trading permissions only and disable withdrawals for security.
          Begin with a simple DCA or grid bot using paper trading mode. Once you understand how
          the bot operates and are comfortable with the risk, switch to live trading with a small
          allocation and scale up gradually.
        </p>
      </section>

      <section id="faq">
        <FAQSection faqs={faqs} />
      </section>
    </div>
  );
}
