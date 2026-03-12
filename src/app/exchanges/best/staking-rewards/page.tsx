import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { exchanges } from "@/data/exchanges";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto Exchanges for Staking in ${CURRENT_YEAR}`,
  description: `Earn passive income staking crypto on exchanges. Compare staking APYs, supported assets, lock-up periods, and risks across the top platforms in ${CURRENT_YEAR}.`,
};

const stakingExchanges = [
  exchanges.find((e) => e.slug === "binance")!,
  exchanges.find((e) => e.slug === "kraken")!,
  exchanges.find((e) => e.slug === "crypto-com")!,
  exchanges.find((e) => e.slug === "coinbase")!,
  exchanges.find((e) => e.slug === "bybit")!,
  exchanges.find((e) => e.slug === "okx")!,
  exchanges.find((e) => e.slug === "kucoin")!,
];

const faqs = [
  {
    question: "What is crypto staking?",
    answer: "Staking involves locking up cryptocurrency to support a blockchain network's operations (like validating transactions on proof-of-stake networks). In return, you earn rewards, similar to earning interest. Many exchanges simplify this process, allowing you to stake with a few clicks.",
  },
  {
    question: "Which exchange offers the best staking rewards?",
    answer: "Rewards vary by asset and change frequently. Binance and Crypto.com generally offer competitive rates across the most assets. Kraken is notable for offering ETH staking with some of the lowest commissions. Always compare current rates before committing.",
  },
  {
    question: "Is staking crypto safe?",
    answer: "Staking on reputable exchanges is relatively safe, but risks include: exchange insolvency, slashing penalties (rare on major networks), price depreciation during lock-up periods, and regulatory changes. Staking through your own validator eliminates exchange risk but adds technical complexity.",
  },
  {
    question: "Can I unstake my crypto at any time?",
    answer: "It depends on the exchange and staking option. Flexible staking allows instant redemption. Fixed/locked staking has set terms (30, 60, 90, or 120 days). ETH unstaking on some platforms may take several days due to network withdrawal queues.",
  },
];

export default function StakingRewardsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Exchanges", href: "/exchanges" },
          { label: "Best Exchanges", href: "/exchanges/best" },
          { label: "Staking Rewards", href: "/exchanges/best/staking-rewards" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Crypto Exchanges for Staking ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Staking is one of the easiest ways to earn passive income on your crypto holdings.
          Instead of letting your coins sit idle, you can earn rewards simply by holding and
          staking them on a supported exchange. We have compared the best exchanges for staking
          based on available assets, reward rates, lock-up flexibility, and platform reliability.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Sample Staking Rates</h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] mt-4">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--color-bg-card)]">
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--color-text)]">Asset</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-[var(--color-text)]">Binance</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-[var(--color-text)]">Kraken</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-[var(--color-text)]">Crypto.com</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-[var(--color-text)]">Coinbase</th>
              </tr>
            </thead>
            <tbody>
              {[
                { asset: "Ethereum (ETH)", binance: "2.5-3.5%", kraken: "3-4%", crypto: "2-3%", coinbase: "2.5-3.2%" },
                { asset: "Solana (SOL)", binance: "5-7%", kraken: "4-6%", crypto: "4-5%", coinbase: "4-5%" },
                { asset: "Polkadot (DOT)", binance: "10-12%", kraken: "8-12%", crypto: "8-10%", coinbase: "8-11%" },
                { asset: "Cardano (ADA)", binance: "2-4%", kraken: "3-5%", crypto: "2-3%", coinbase: "2-3%" },
                { asset: "Cosmos (ATOM)", binance: "8-12%", kraken: "8-14%", crypto: "6-10%", coinbase: "7-10%" },
              ].map((row) => (
                <tr key={row.asset} className="border-t border-[var(--color-border)]">
                  <td className="px-4 py-3 text-sm font-medium text-[var(--color-text)]">{row.asset}</td>
                  <td className="px-4 py-3 text-sm text-center text-[var(--color-text-secondary)]">{row.binance}</td>
                  <td className="px-4 py-3 text-sm text-center text-[var(--color-text-secondary)]">{row.kraken}</td>
                  <td className="px-4 py-3 text-sm text-center text-[var(--color-text-secondary)]">{row.crypto}</td>
                  <td className="px-4 py-3 text-sm text-center text-[var(--color-text-secondary)]">{row.coinbase}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[var(--color-text-secondary)] mt-2 italic">
          Rates are approximate and change frequently. Check each exchange for current rates.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {stakingExchanges.map((exchange, index) => (
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
