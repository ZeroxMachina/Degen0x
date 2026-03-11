import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { ComparisonItem } from "@/lib/types";

export const metadata: Metadata = {
  title: `Bitget vs Bybit (${CURRENT_YEAR}): Copy Trading Exchange Comparison | ${SITE_NAME}`,
  description: `Bitget vs Bybit comparison for ${CURRENT_YEAR}. Compare copy trading features, futures fees, coin listings, and trading tools for active traders.`,
};

const items: ComparisonItem[] = [
  { name: "Bitget", slug: "bitget", rating: 4.3, affiliateUrl: "https://cryptodegen.com/go/bitget", features: { "Trading Fees": "0.1% spot / 0.02% futures maker", "Coins Listed": "600+", "Copy Trading": "Yes (largest community)", "Max Leverage": "125x", "Trading Bots": "Yes", "Proof of Reserves": "Yes", "Protection Fund": "$300M+ (BGB fund)", "Launchpad": "Yes (Launchpool)" } },
  { name: "Bybit", slug: "bybit", rating: 4.5, affiliateUrl: "https://cryptodegen.com/go/bybit", features: { "Trading Fees": "0.1% spot / 0.02% futures maker", "Coins Listed": "500+", "Copy Trading": "Yes (growing)", "Max Leverage": "100x", "Trading Bots": "Yes", "Proof of Reserves": "Yes", "Protection Fund": "Not disclosed", "Launchpad": "Yes (Bybit Launchpad)" } },
];

const features = ["Trading Fees", "Coins Listed", "Copy Trading", "Max Leverage", "Trading Bots", "Proof of Reserves", "Protection Fund", "Launchpad"];

export default function BitgetVsBybitPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Exchanges", href: "/exchanges" },
          { label: "Compare", href: "/exchanges/compare" },
          { label: "Bitget vs Bybit", href: "#" },
        ]}
      />

      <AffiliateDisclosure />

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Bitget vs Bybit: Best Copy Trading Exchange in {CURRENT_YEAR}?
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">
        Updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
        Bitget and Bybit are both fast-growing global exchanges that cater to derivatives traders.
        Both offer futures trading, copy trading, and trading bots. Bitget has positioned itself
        as the leader in copy trading, while Bybit has broader name recognition and higher overall
        volume. This comparison helps you decide which fits your trading style.
      </p>

      <ComparisonTable items={items} features={features} title="Bitget vs Bybit: Head-to-Head" />

      <div className="prose-crypto mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">Copy Trading</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          Bitget has the largest copy trading community among crypto exchanges, with over 100,000
          lead traders and transparent performance metrics including win rate, ROI, drawdown,
          and total copier profit. Bitget&apos;s one-click copy trading makes it easy for beginners
          to mirror experienced traders&apos; strategies.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
          Bybit also offers copy trading with a growing community of lead traders. While smaller
          than Bitget&apos;s marketplace, Bybit&apos;s copy trading includes both spot and futures
          strategies. Both platforms allow you to set custom parameters like maximum position size
          and stop-loss levels when copying.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Futures and Derivatives</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          Both platforms offer USDT-margined and coin-margined perpetual contracts. Bitget offers
          up to 125x leverage while Bybit offers up to 100x. Futures fees are identical at
          the base tier: 0.02% maker and 0.06% taker. Both have competitive volume-based fee
          tiers for high-frequency traders.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
          Bybit generally has deeper liquidity on major futures pairs due to its larger overall
          trading volume. For less common pairs, both platforms offer comparable depth.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Security and Protection</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          Bitget maintains a $300 million+ protection fund denominated in BTC and BGB to cover
          potential security incidents. Both exchanges publish proof of reserves and employ
          standard security practices including cold storage, multi-signature wallets, and
          regular third-party audits.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Verdict</h2>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            <strong className="text-white">Choose Bitget if</strong> you want the best copy trading
            experience with the largest community of lead traders. Bitget also offers higher
            max leverage and a transparent protection fund.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            <strong className="text-white">Choose Bybit if</strong> you want deeper liquidity,
            a more established platform, and a wider range of trading products. Bybit has
            better brand recognition and a longer track record.
          </p>
        </div>
      </div>

      <FAQSection
        faqs={[
          {
            question: "Which is better for copy trading, Bitget or Bybit?",
            answer: "Bitget is widely considered the leader in crypto copy trading with the largest community of lead traders and the most detailed performance analytics. If copy trading is your primary focus, Bitget has the edge.",
          },
          {
            question: "Are Bitget and Bybit safe?",
            answer: "Both publish proof of reserves and maintain standard security practices. Bitget has a disclosed $300M+ protection fund. Neither has suffered a major hack. However, neither is as regulated as US-based exchanges.",
          },
          {
            question: "Can US residents use Bitget or Bybit?",
            answer: "No, neither exchange is available to US residents. US-based traders should use regulated alternatives like Coinbase, Kraken, or Gemini.",
          },
        ]}
      />
    </div>
  );
}
