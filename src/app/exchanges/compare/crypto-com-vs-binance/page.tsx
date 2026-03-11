import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { ComparisonItem } from "@/lib/types";

export const metadata: Metadata = {
  title: `Crypto.com vs Binance (${CURRENT_YEAR}): Which Exchange Should You Use? | ${SITE_NAME}`,
  description: `Crypto.com vs Binance comparison for ${CURRENT_YEAR}. Compare trading fees, card rewards, staking, coin selection, and ecosystem features.`,
};

const items: ComparisonItem[] = [
  { name: "Crypto.com", slug: "crypto-com", rating: 4.4, affiliateUrl: "https://cryptodegen.com/go/crypto-com", features: { "Trading Fees": "0.075% maker / 0.075% taker", "Coins Listed": "350+", "Visa Card": "Yes (tiered rewards)", "Staking": "Yes (CRO staking)", "DeFi Wallet": "Yes", "NFT Marketplace": "Yes", "US Available": "Yes", "Earn Products": "Yes (Crypto Earn)" } },
  { name: "Binance", slug: "binance", rating: 4.7, affiliateUrl: "https://cryptodegen.com/go/binance", features: { "Trading Fees": "0.1% spot (0.075% w/ BNB)", "Coins Listed": "600+", "Visa Card": "Yes (limited regions)", "Staking": "Yes (BNB ecosystem)", "DeFi Wallet": "Yes", "NFT Marketplace": "Yes", "US Available": "No (Binance.US only)", "Earn Products": "Yes (Binance Earn)" } },
];

const features = ["Trading Fees", "Coins Listed", "Visa Card", "Staking", "DeFi Wallet", "NFT Marketplace", "US Available", "Earn Products"];

export default function CryptoComVsBinancePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Exchanges", href: "/exchanges" },
          { label: "Compare", href: "/exchanges/compare" },
          { label: "Crypto.com vs Binance", href: "#" },
        ]}
      />

      <AffiliateDisclosure />

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Crypto.com vs Binance: Which Ecosystem Is Better in {CURRENT_YEAR}?
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">
        Updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
        Crypto.com and Binance are both full-ecosystem crypto platforms offering far more than
        just trading. Both have native tokens, Visa cards, staking programs, DeFi wallets, NFT
        marketplaces, and earn products. The key differences lie in US availability, fee structures,
        and the strength of their respective ecosystems.
      </p>

      <ComparisonTable items={items} features={features} title="Crypto.com vs Binance: Head-to-Head" />

      <div className="prose-crypto mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">Crypto Visa Cards</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          Crypto.com&apos;s Visa card program is one of its biggest differentiators. Cards are
          tiered based on CRO staking amount, offering cashback rewards of up to 5% on purchases
          plus additional perks like free Spotify, Netflix, and airport lounge access at higher
          tiers. This makes Crypto.com one of the best options for spending crypto in daily life.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
          Binance also offers a Visa card in select regions, but with fewer tiers and less
          generous rewards. For users who want to spend crypto and earn card rewards, Crypto.com
          has a clear advantage.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Trading and Fees</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          Both exchanges offer competitive fees. Crypto.com charges a flat 0.075% at its base
          tier, which is slightly below Binance&apos;s 0.1% (or 0.075% with BNB discount). However,
          Binance offers more advanced trading features, deeper liquidity, and more trading pairs.
          For pure trading, Binance is the more powerful platform.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">US Availability</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          Crypto.com is fully available in the United States, making it a strong alternative
          to Coinbase and Kraken with its card rewards program. Binance is not available to US
          residents; the separate Binance.US entity has limited features and coin selection.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Verdict</h2>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            <strong className="text-white">Choose Crypto.com if</strong> you are a US-based user who
            values the Visa card rewards program, wants a full ecosystem including a DeFi wallet and
            earn products, and prefers a platform available in the US with competitive fees.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            <strong className="text-white">Choose Binance if</strong> you are outside the US and
            prioritize the deepest liquidity, widest coin selection, most advanced trading tools,
            and the largest crypto ecosystem globally.
          </p>
        </div>
      </div>

      <FAQSection
        faqs={[
          {
            question: "Is Crypto.com available in the US?",
            answer: "Yes, Crypto.com is fully available in the United States, including its Visa card program, trading platform, and DeFi wallet. Binance is not available to US residents.",
          },
          {
            question: "Which has better staking rewards?",
            answer: "Both offer competitive staking programs. Crypto.com integrates staking with card tier benefits. Binance offers a wider variety of staking and earn products. Specific APYs vary by asset and change frequently.",
          },
          {
            question: "Is CRO or BNB a better investment?",
            answer: "This is not investment advice. BNB has a larger market cap and deeper utility within the Binance ecosystem. CRO provides utility within Crypto.com's card and DeFi ecosystem. Both derive value from their platform usage.",
          },
        ]}
      />
    </div>
  );
}
