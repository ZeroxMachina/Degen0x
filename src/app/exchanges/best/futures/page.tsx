import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { exchanges } from "@/data/exchanges";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best Crypto Futures Exchanges in ${CURRENT_YEAR}`,
  description: `Compare the top crypto futures and derivatives exchanges in ${CURRENT_YEAR}. Leverage, liquidation engines, funding rates, and contract types compared.`,
};

const futuresExchanges = [
  exchanges.find((e) => e.slug === "bybit")!,
  exchanges.find((e) => e.slug === "binance")!,
  exchanges.find((e) => e.slug === "okx")!,
  exchanges.find((e) => e.slug === "bitget")!,
  exchanges.find((e) => e.slug === "gate-io")!,
  exchanges.find((e) => e.slug === "kucoin")!,
];

const faqs = [
  {
    question: "What are crypto futures?",
    answer: "Crypto futures are derivative contracts that allow you to bet on the future price of a cryptocurrency without owning the underlying asset. Perpetual futures (perps) are the most common type in crypto and have no expiration date. You can go long (profit when price rises) or short (profit when price falls).",
  },
  {
    question: "Which exchange is best for crypto futures?",
    answer: "Bybit is the top choice for futures trading due to its industry-leading liquidation engine, deep liquidity, and competitive fees (0.01% maker, 0.06% taker). Binance and OKX are also excellent choices with the widest selection of futures contracts.",
  },
  {
    question: "How much leverage should I use?",
    answer: "Most professional traders use 2x to 5x leverage at most. While exchanges offer up to 100x or 125x leverage, using high leverage dramatically increases your liquidation risk. A 1% price move against a 100x position means total liquidation. Start with low leverage and increase only as you gain experience.",
  },
  {
    question: "What is a funding rate in perpetual futures?",
    answer: "Funding rates are periodic payments between long and short holders to keep the perpetual futures price aligned with the spot price. When the funding rate is positive, longs pay shorts; when negative, shorts pay longs. These payments occur every 8 hours on most exchanges.",
  },
];

export default function FuturesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Exchanges", href: "/exchanges" },
          { label: "Best Exchanges", href: "/exchanges/best" },
          { label: "Futures Trading", href: "/exchanges/best/futures" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Crypto Futures Exchanges ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Crypto futures trading allows you to speculate on price movements with leverage,
          go short during bear markets, and hedge your spot positions. The quality of a futures
          exchange matters enormously since poor liquidation engines, thin order books, or
          unreliable infrastructure can cost you significant money. We have ranked the best
          platforms specifically for derivatives trading.
        </p>

        <div className="bg-[var(--color-danger)]/10 border border-[var(--color-danger)]/30 rounded-lg p-4 mt-6">
          <h3 className="text-[var(--color-danger)] font-semibold mb-2">Risk Warning</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Futures trading with leverage is extremely risky. The vast majority of retail
            traders lose money trading futures. Never trade with money you cannot afford to
            lose, and always use stop-loss orders and proper position sizing.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Futures Features Comparison</h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] mt-4">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--color-bg-card)]">
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--color-text)]">Exchange</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-[var(--color-text)]">Max Leverage</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-[var(--color-text)]">Futures Pairs</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-[var(--color-text)]">Maker Fee</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-[var(--color-text)]">Taker Fee</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Bybit", leverage: "100x", pairs: "300+", maker: "0.01%", taker: "0.06%" },
                { name: "Binance", leverage: "125x", pairs: "350+", maker: "0.02%", taker: "0.05%" },
                { name: "OKX", leverage: "125x", pairs: "250+", maker: "0.02%", taker: "0.05%" },
                { name: "Bitget", leverage: "125x", pairs: "200+", maker: "0.02%", taker: "0.06%" },
                { name: "Gate.io", leverage: "100x", pairs: "200+", maker: "0.015%", taker: "0.05%" },
                { name: "KuCoin", leverage: "100x", pairs: "200+", maker: "0.02%", taker: "0.06%" },
              ].map((row) => (
                <tr key={row.name} className="border-t border-[var(--color-border)]">
                  <td className="px-4 py-3 text-sm font-medium text-[var(--color-text)]">{row.name}</td>
                  <td className="px-4 py-3 text-sm text-center text-[var(--color-text-secondary)]">{row.leverage}</td>
                  <td className="px-4 py-3 text-sm text-center text-[var(--color-text-secondary)]">{row.pairs}</td>
                  <td className="px-4 py-3 text-sm text-center text-[var(--color-text-secondary)]">{row.maker}</td>
                  <td className="px-4 py-3 text-sm text-center text-[var(--color-text-secondary)]">{row.taker}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

        <AuthorAttribution
          author="NullPointer"
          role="Data Engineer"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="exchanges"
        />


      <div className="space-y-4 mb-12">
        {futuresExchanges.map((exchange, index) => (
          <ProductCard
            key={exchange.slug}
            product={exchange}
            rank={index + 1}
            categorySlug="exchanges"
          />
        ))}
      </div>

      <FAQSection faqs={faqs} />
    </div>
  );
}
