import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ProductCard from "@/components/ProductCard";
import FAQSection from "@/components/FAQSection";
import TableOfContents from "@/components/TableOfContents";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { COPY_TRADING_PLATFORMS, COPY_TRADING_FAQS } from "@/data/investing";

export const metadata: Metadata = {
  title: `Best Crypto Copy Trading Platforms ${CURRENT_YEAR} - Follow Top Traders`,
  description: `Compare the best crypto copy trading platforms for ${CURRENT_YEAR}. Automatically replicate trades from experienced traders on Bybit, OKX, eToro, and more.`,
  alternates: { canonical: "/investing/best/copy-trading" },
};

const toc = [
  { id: "top-picks", title: "Top Copy Trading Platforms", level: 2 },
  { id: "how-it-works", title: "How Copy Trading Works", level: 2 },
  { id: "choosing-traders", title: "Choosing Traders to Follow", level: 2 },
  { id: "risks", title: "Copy Trading Risks", level: 2 },
  { id: "faq", title: "FAQ", level: 2 },
];

export default function BestCopyTradingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Best Copy Trading", href: "/investing/best/copy-trading" },
      ]} />

      <AffiliateDisclosure />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Crypto Copy Trading Platforms for {CURRENT_MONTH} {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Copy trading allows you to automatically replicate the trades of experienced crypto
          traders. We evaluate the top platforms based on trader selection quality, transparency,
          risk controls, and fees.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>
      </header>

      <TableOfContents items={toc} />

      <section id="top-picks" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Top Copy Trading Platforms for {CURRENT_YEAR}</h2>
        <div className="space-y-4">
          {COPY_TRADING_PLATFORMS.map((product, idx) => (
            <ProductCard key={product.slug} product={product} rank={idx + 1} categorySlug="investing" />
          ))}
        </div>
      </section>

      <section id="how-it-works" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How Copy Trading Works</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          When you select a trader to copy, every trade they open or close is automatically
          replicated in your account at a proportional size. If a trader opens a long position
          using 5% of their portfolio, 5% of your allocated copy trading capital is used for the
          same trade. Most platforms let you set maximum position sizes, stop-loss limits, and
          choose which types of trades to copy.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          Platforms typically charge a profit-sharing fee (8-10% of profits) that goes to the
          trader you follow. This aligns incentives since traders only earn when you profit.
          You retain full control of your capital and can stop copying a trader at any time.
        </p>
      </section>

      <section id="choosing-traders" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Choosing Traders to Follow</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Look beyond raw returns when selecting traders to copy. Evaluate their risk metrics
          including maximum drawdown, Sharpe ratio, win rate, and average trade duration. A trader
          with consistent 20% annual returns and low drawdown is generally safer than one showing
          200% returns with extreme volatility. Check how long they have been trading on the
          platform and whether their track record spans both bull and bear markets.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          Diversify by following multiple traders with different strategies. Combine a conservative
          spot trader with a moderate derivatives trader to balance risk and reward. Start with
          small allocations and increase only after observing consistent performance over several
          weeks or months.
        </p>
      </section>

      <section id="risks" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Copy Trading Risks</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Past performance does not guarantee future results. Traders who showed impressive returns
          during a bull market may perform poorly during downturns. Market conditions change, and
          strategies that worked previously may stop working. Additionally, slippage between the
          trader's execution and your copy can affect returns, especially during volatile periods.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          The biggest risk is complacency. Copy trading should not be treated as fully passive.
          Monitor the traders you follow regularly, review their changing risk metrics, and be
          prepared to stop copying if their strategy shifts or performance deteriorates significantly.
        </p>
      </section>

      <section id="faq">
        <FAQSection faqs={COPY_TRADING_FAQS} />
      </section>
    </div>
  );
}
