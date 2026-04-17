import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { exchanges } from "@/data/exchanges";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RelatedContent from '@/components/RelatedContent';


export const metadata: Metadata = {
  title: `Best Crypto Exchanges for Margin Trading (${CURRENT_YEAR})`,
  description: `Compare margin trading features across top crypto exchanges in ${CURRENT_YEAR}. Leverage limits, margin rates, liquidation policies, and cross vs isolated margin.`,
};

const marginExchanges = [
  exchanges.find((e) => e.slug === "binance")!,
  exchanges.find((e) => e.slug === "bybit")!,
  exchanges.find((e) => e.slug === "kraken")!,
  exchanges.find((e) => e.slug === "okx")!,
  exchanges.find((e) => e.slug === "kucoin")!,
  exchanges.find((e) => e.slug === "bitget")!,
];

const faqs = [
  {
    question: "What is crypto margin trading?",
    answer: "Margin trading lets you borrow funds from the exchange to trade with more capital than you own. For example, with 5x margin, you can trade with $5,000 using only $1,000 of your own funds. This amplifies both gains and losses.",
  },
  {
    question: "What is the difference between cross margin and isolated margin?",
    answer: "Isolated margin limits your risk to the margin allocated to a specific position. If that position is liquidated, only the isolated margin is lost. Cross margin uses your entire account balance as collateral, reducing liquidation risk for individual positions but putting your whole balance at stake.",
  },
  {
    question: "What happens when I get liquidated?",
    answer: "Liquidation occurs when your margin balance falls below the maintenance margin requirement due to losses. The exchange force-closes your position to prevent further losses. Some exchanges have insurance funds that cover negative balances, while others may pass the debt to you.",
  },
  {
    question: "Can US residents margin trade crypto?",
    answer: "Margin trading options are very limited for US residents due to regulatory restrictions. Kraken offers margin trading in the US for eligible accounts. Most other major exchanges do not offer margin to US users.",
  },
];

export default function MarginTradingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Exchanges", href: "/exchanges" },
          { label: "Best Exchanges", href: "/exchanges/best" },
          { label: "Margin Trading", href: "/exchanges/best/margin-trading" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Crypto Exchanges for Margin Trading ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Margin trading allows experienced traders to amplify their positions by borrowing
          funds against their existing collateral. While it can significantly increase potential
          returns, it also magnifies losses and carries liquidation risk. We have evaluated
          exchanges based on their margin trading features, leverage options, interest rates,
          and liquidation policies.
        </p>

        <div className="bg-[var(--color-danger)]/10 border border-[var(--color-danger)]/30 rounded-lg p-4 mt-6">
          <h3 className="text-[var(--color-danger)] font-semibold mb-2">Risk Warning</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Margin trading carries substantial risk of loss. You can lose more than your initial
            investment. Only experienced traders should engage in margin trading, and always
            use proper risk management techniques including stop-loss orders.
          </p>
        </div>

        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Margin Trading Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="rounded-lg border border-[var(--color-border)] p-4">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Cross Margin</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Uses your entire account balance as collateral. Lower liquidation risk per position but higher total account risk.</p>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] p-4">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Isolated Margin</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Each position has its own dedicated margin. Losses are limited to the margin allocated to that specific position.</p>
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

      </div>

      <div className="space-y-4 mb-12">
        {marginExchanges.map((exchange, index) => (
          <ProductCard
            key={exchange.slug}
            product={exchange}
            rank={index + 1}
            categorySlug="exchanges"
          />
        ))}
      </div>

      <FAQSection faqs={faqs} />
      <RelatedContent category="tools" currentSlug="/exchanges/best/margin-trading" />
    </div>
  );
}
