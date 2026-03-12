import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { exchanges } from "@/data/exchanges";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto Exchanges in the USA (${CURRENT_YEAR})`,
  description: `Compare the best crypto exchanges available to US residents in ${CURRENT_YEAR}. SEC-regulated platforms with USD deposits, FDIC-insured cash balances, and comprehensive tax reporting tools.`,
  keywords: [
    "best crypto exchanges USA",
    "US crypto exchanges",
    "best cryptocurrency exchange America",
    "regulated crypto exchanges US",
    "buy crypto USA",
  ],
};

const usaExchanges = [
  exchanges.find((e) => e.slug === "coinbase")!,
  exchanges.find((e) => e.slug === "kraken")!,
  exchanges.find((e) => e.slug === "gemini")!,
  exchanges.find((e) => e.slug === "crypto-com")!,
  exchanges.find((e) => e.slug === "binance")!,
];

const faqs = [
  {
    question: "Which crypto exchanges are legal in the USA?",
    answer:
      "The major exchanges fully licensed to operate in the US include Coinbase, Kraken, Gemini, and Crypto.com. Binance operates a separate US entity called Binance.US with limited features. All must comply with FinCEN, SEC, and state-level regulations.",
  },
  {
    question: "Do I need to report crypto to the IRS?",
    answer:
      "Yes. The IRS treats cryptocurrency as property. Selling, trading, or earning crypto are taxable events. Starting in 2025, exchanges must issue 1099-DA forms for digital asset transactions. Keep detailed records of all purchases and sales.",
  },
  {
    question: "What payment methods can I use on US exchanges?",
    answer:
      "US exchanges accept ACH bank transfers (free, 1-5 days), wire transfers ($10-$25 fee, same day), debit cards (instant, 2-4% fee), and some support PayPal, Apple Pay, and Google Pay. ACH is the most cost-effective option.",
  },
  {
    question: "Are crypto exchanges insured in the USA?",
    answer:
      "Most US exchanges insure USD cash balances through FDIC-insured bank partners (up to $250,000). Crypto holdings are typically covered by private insurance policies. Coinbase insures up to $320 billion in crypto assets through Lloyd's of London.",
  },
  {
    question: "Can I use Binance in the USA?",
    answer:
      "Binance.com is not available to US residents. However, Binance.US is a separate, regulated entity that operates in most US states. It offers fewer trading pairs and features compared to the global platform.",
  },
  {
    question: "What is the cheapest crypto exchange in the USA?",
    answer:
      "Kraken offers some of the lowest fees for US users at 0.16% maker and 0.26% taker. Coinbase Advanced Trade charges 0.04-0.60% depending on volume. Avoid using simple buy interfaces which typically charge 1.5-3.5% in hidden spreads.",
  },
];

export default function USAExchangesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Exchanges", href: "/exchanges" },
          { label: "Best Exchanges", href: "/exchanges/best" },
          { label: "Best in the USA", href: "/exchanges/best/usa" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Crypto Exchanges in the USA ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          The United States has one of the most heavily regulated cryptocurrency markets in the
          world. While this limits the number of exchanges available to American residents, it
          also means stronger consumer protections, insurance coverage, and tax reporting tools.
          We have tested every major platform available to US users and ranked them based on
          fees, security, coin selection, and regulatory compliance.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">US Regulatory Environment</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Crypto regulation in the US spans multiple agencies: the SEC oversees securities
          aspects, the CFTC handles commodities and derivatives, FinCEN manages anti-money
          laundering compliance, and each state has its own licensing requirements. New York
          requires a BitLicense, making it one of the hardest states for exchanges to operate
          in. The regulatory landscape continues to evolve with new legislation being debated
          in Congress around stablecoin frameworks and market structure.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">How We Ranked These Exchanges</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Our rankings prioritize regulatory compliance and security track record above all else
          for US users. We then evaluated trading fees, supported cryptocurrencies, deposit
          and withdrawal methods, mobile app quality, customer support responsiveness, and
          the availability of advanced features like staking and earn programs.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {usaExchanges.map((exchange, index) => (
          <ProductCard
            key={exchange.slug}
            product={exchange}
            rank={index + 1}
            categorySlug="exchanges"
          />
        ))}
      </div>

      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Payment Methods in the USA</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">ACH Bank Transfer</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Free on most exchanges. Takes 1-5 business days to settle. Best for cost-conscious buyers.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Wire Transfer</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">$10-$25 fee. Same-day settlement. Ideal for larger deposits over $10,000.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Debit Card</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Instant purchase. 2-4% fee. Best for small, time-sensitive buys.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">PayPal / Apple Pay</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Supported on select exchanges. Fees vary. Convenient for users already in these ecosystems.</p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
