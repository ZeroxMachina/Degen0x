import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { exchanges } from "@/data/exchanges";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto Exchanges in India (${CURRENT_YEAR})`,
  description: `Compare the best crypto exchanges for Indian residents in ${CURRENT_YEAR}. INR deposit support via UPI and bank transfer, compliant with Indian tax regulations, and competitive trading fees.`,
  keywords: [
    "best crypto exchanges India",
    "Indian crypto exchanges",
    "buy crypto India",
    "best cryptocurrency exchange India",
    "buy bitcoin India",
    "UPI crypto exchange",
  ],
};

const indiaExchanges = [
  exchanges.find((e) => e.slug === "binance")!,
  exchanges.find((e) => e.slug === "kraken")!,
  exchanges.find((e) => e.slug === "coinbase")!,
  exchanges.find((e) => e.slug === "crypto-com")!,
  exchanges.find((e) => e.slug === "kucoin")!,
];

const faqs = [
  {
    question: "Is cryptocurrency legal in India?",
    answer:
      "Yes. Cryptocurrency is legal to buy, sell, and hold in India. The Supreme Court overturned the RBI banking ban in 2020. However, crypto is heavily taxed. There is a 30% tax on crypto gains with no deduction for losses, and a 1% TDS on all crypto transactions above 10,000 INR.",
  },
  {
    question: "What is the 1% TDS on crypto in India?",
    answer:
      "Section 194S of the Income Tax Act requires a 1% Tax Deducted at Source (TDS) on all cryptocurrency transactions exceeding 10,000 INR per year. Indian exchanges deduct this automatically. On P2P platforms, the buyer is responsible for deducting TDS. This has significantly impacted trading volumes on Indian platforms.",
  },
  {
    question: "Can I deposit INR on crypto exchanges?",
    answer:
      "INR deposit support varies by exchange and has been inconsistent due to banking partner issues. Indian exchanges like WazirX and CoinDCX typically support UPI, IMPS, and bank transfer for INR deposits. International exchanges may have limited INR support. P2P trading is also an option.",
  },
  {
    question: "What is the best crypto exchange for Indian beginners?",
    answer:
      "For Indian beginners, local exchanges with INR support and UPI deposits offer the simplest experience. International exchanges like Binance are popular for their wider coin selection and lower fees but may have a steeper learning curve. Always use exchanges that comply with Indian tax requirements.",
  },
  {
    question: "Can I set off crypto losses against gains in India?",
    answer:
      "No. Under current Indian tax law, losses from one crypto asset cannot be set off against gains from another. Each transaction is taxed individually at 30% on any profit. This is one of the most restrictive crypto tax regimes globally and makes frequent trading very costly.",
  },
  {
    question: "Should I use an Indian or international exchange?",
    answer:
      "Indian exchanges offer easier INR deposits and automatic TDS compliance. International exchanges offer lower fees, more coins, and better liquidity. Many Indian traders use both: an Indian exchange for fiat on/off-ramp and an international exchange for trading. Consider your priorities carefully.",
  },
];

export default function IndiaExchangesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Exchanges", href: "/exchanges" },
          { label: "Best Exchanges", href: "/exchanges/best" },
          { label: "Best in India", href: "/exchanges/best/india" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Crypto Exchanges in India ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          India is one of the largest cryptocurrency markets by user base, despite facing some
          of the world&apos;s most challenging tax regulations. With a flat 30% tax on gains and
          1% TDS on transactions, choosing the right exchange is crucial for Indian traders.
          We have evaluated both local Indian exchanges and global platforms accessible to Indian
          residents, ranking them by fees, INR support, coin selection, and regulatory compliance.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Indian Crypto Tax Landscape</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          India introduced its crypto tax framework in the 2022 Union Budget. The key provisions
          include a flat 30% tax on all crypto profits with no deductions allowed (except cost
          of acquisition), a 1% TDS on all transactions above 10,000 INR, no loss set-off
          between different crypto assets, and no distinction between short-term and long-term
          holdings. These rules make India one of the most heavily taxed crypto markets globally.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Choosing the Right Exchange</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Indian users face a unique choice between local exchanges (easier INR deposits, automatic
          TDS compliance) and international platforms (lower fees, more coins). Many experienced
          traders use a hybrid approach: deposit INR on a local exchange, convert to USDT, transfer
          to an international exchange for trading, then reverse the process to withdraw. This adds
          complexity but can save significantly on fees for active traders.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {indiaExchanges.map((exchange, index) => (
          <ProductCard
            key={exchange.slug}
            product={exchange}
            rank={index + 1}
            categorySlug="exchanges"
          />
        ))}
      </div>

      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Payment Methods for Indian Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">UPI (Unified Payments Interface)</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Instant INR deposits. Free on most platforms. The most popular method in India.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">IMPS / NEFT Bank Transfer</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Low or no fees. IMPS is instant, NEFT takes 30 min to 2 hours. Widely supported.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">P2P Trading</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Buy directly from other users. Flexible payment methods. Available on Binance and others.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Net Banking</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Direct bank-to-exchange transfers. Supported on most Indian exchanges. Fees vary by bank.</p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
