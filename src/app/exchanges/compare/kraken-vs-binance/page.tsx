import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { ComparisonItem } from "@/lib/types";

export const metadata: Metadata = {
  title: `Kraken vs Binance (${CURRENT_YEAR}): Global Exchange Comparison | ${SITE_NAME}`,
  description: `Kraken vs Binance comparison for ${CURRENT_YEAR}. Compare fees, regulation, staking, futures trading, and global availability.`,
};

const items: ComparisonItem[] = [
  { name: "Kraken", slug: "kraken", rating: 4.7, affiliateUrl: "https://cryptodegen.com/go/kraken", features: { "Trading Fees": "0.16% maker / 0.26% taker", "Coins Listed": "200+", "Futures": "Yes (up to 50x)", "Staking": "Yes (20+ assets)", "Regulation": "US FinCEN, multi-country", "Proof of Reserves": "Yes (cryptographic audit)", "US Available": "Yes", "Fiat Support": "7+ currencies" } },
  { name: "Binance", slug: "binance", rating: 4.7, affiliateUrl: "https://cryptodegen.com/go/binance", features: { "Trading Fees": "0.1% (0.075% with BNB)", "Coins Listed": "600+", "Futures": "Yes (up to 125x)", "Staking": "Yes (extensive)", "Regulation": "UAE, varies by region", "Proof of Reserves": "Yes (Merkle tree)", "US Available": "No (Binance.US only)", "Fiat Support": "50+ currencies" } },
];

const features = ["Trading Fees", "Coins Listed", "Futures", "Staking", "Regulation", "Proof of Reserves", "US Available", "Fiat Support"];

export default function KrakenVsBinancePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Exchanges", href: "/exchanges" },
          { label: "Compare", href: "/exchanges/compare" },
          { label: "Kraken vs Binance", href: "#" },
        ]}
      />

      <AffiliateDisclosure />

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Kraken vs Binance: Regulation vs Volume ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">
        Updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
        Kraken and Binance represent two different philosophies in crypto exchange design. Kraken
        prioritizes regulatory compliance and transparency with features like proof of reserves
        auditing. Binance prioritizes maximum features, coin selection, and the lowest fees. Your
        choice depends on whether you value regulation or raw trading capability.
      </p>

      <ComparisonTable items={items} features={features} title="Kraken vs Binance: Head-to-Head" />

      <div className="prose-crypto mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">Regulation and Trust</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          Kraken is one of the oldest crypto exchanges (founded 2011) and has pursued regulatory
          compliance aggressively. It holds licenses in multiple countries, is registered with US
          FinCEN, and pioneered cryptographic proof of reserves auditing. Kraken has never been
          fined by any regulator for fraud or market manipulation.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
          Binance has faced regulatory challenges in multiple jurisdictions and has paid significant
          fines. It is not available to US residents directly. However, Binance has made progress in
          obtaining licenses in key markets including Dubai and France. Binance publishes Merkle
          tree proof of reserves but has faced scrutiny over the completeness of these audits.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Trading Fees and Features</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          Binance has lower fees across the board. Base spot fees are 0.1% versus Kraken&apos;s
          0.16%/0.26%. Binance futures fees are also lower. With BNB discounts, the gap widens
          further. For cost-conscious traders, Binance is substantially cheaper.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
          Binance also offers far more coins (600+ vs 200+), higher leverage (125x vs 50x), and
          more trading products. Kraken focuses on quality over quantity and provides a more
          curated selection of assets with generally higher liquidity per pair.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Staking and Earn</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          Both offer comprehensive staking programs. Kraken&apos;s staking is available in most
          jurisdictions and supports over 20 assets with competitive APYs. Binance Earn offers
          more staking options, flexible savings, locked staking, and liquidity farming. For
          passive yield, Binance has more variety.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Verdict</h2>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            <strong className="text-white">Choose Kraken if</strong> you value regulatory compliance,
            transparency, proof of reserves, and a trusted platform with a clean track record.
            Kraken is available in the US and ideal for traders who prioritize trust.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            <strong className="text-white">Choose Binance if</strong> you are outside the US and
            want the lowest fees, widest coin selection, highest leverage, and the most trading
            features available on any exchange.
          </p>
        </div>
      </div>

      <FAQSection
        faqs={[
          {
            question: "Can I use both Kraken and Binance?",
            answer: "If you are outside the US, yes. Many traders use Kraken for fiat on-ramps and regulated staking while using Binance for altcoin trading and derivatives. US residents can only use Kraken (or the limited Binance.US).",
          },
          {
            question: "Which has better customer support?",
            answer: "Kraken is generally rated higher for customer support with 24/7 live chat and historically faster response times. Binance has a larger support team but response quality can vary. Both have improved their support significantly in recent years.",
          },
          {
            question: "Is Kraken or Binance cheaper?",
            answer: "Binance is cheaper across all fee tiers. Base spot fees are 0.1% versus Kraken's 0.16%/0.26%, and BNB discounts reduce Binance fees further. For cost-sensitive traders, Binance offers clear savings.",
          },
        ]}
      />
    </div>
  );
}
