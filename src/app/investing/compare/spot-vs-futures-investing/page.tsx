import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = { title: `Spot vs Futures Crypto Investing (${CURRENT_YEAR}) | ${SITE_NAME}`, description: `Spot vs futures crypto investing comparison for ${CURRENT_YEAR}. Direct ownership vs leveraged contracts — risk, returns, strategies, and which is right for you.` };

const items = [
  { name: "Spot Investing", slug: "spot", rating: 4.6, affiliateUrl: "#", features: { "Ownership": "Direct asset ownership", "Leverage": "None (1x)", "Max Loss": "100% of investment", "Holding Period": "Unlimited", "Funding Costs": "None", "Complexity": "Low", "Tax Treatment": "Capital gains on sale", "Staking/Yield": "Yes (can stake held assets)", "Liquidation Risk": "None", "Best For": "Long-term investors and HODLers" } },
  { name: "Futures Investing", slug: "futures", rating: 3.8, affiliateUrl: "#", features: { "Ownership": "Contract exposure (no asset ownership)", "Leverage": "Up to 125x on some platforms", "Max Loss": "Entire margin (or more with cross-margin)", "Holding Period": "Perpetual or expiry-based", "Funding Costs": "Funding rate payments (every 8 hours)", "Complexity": "High", "Tax Treatment": "Complex (varies by jurisdiction)", "Staking/Yield": "No (contract only)", "Liquidation Risk": "High with leverage", "Best For": "Experienced traders and hedgers" } },
];

const faqs = [
  { question: "Should beginners trade crypto futures?", answer: "No. Crypto futures with leverage amplify both gains and losses, and the extreme volatility of cryptocurrency markets makes leveraged positions especially dangerous. Studies consistently show that the vast majority of leveraged crypto traders lose money. Beginners should focus on spot investing, dollar-cost averaging, and understanding market dynamics before considering any leveraged products." },
  { question: "What is a funding rate?", answer: "Funding rates are periodic payments between long and short traders in perpetual futures contracts. When the futures price is above the spot price, longs pay shorts (positive funding rate), incentivizing shorts and pushing the price down toward spot. When futures trade below spot, shorts pay longs. Funding rates typically settle every 8 hours and can significantly impact the cost of holding leveraged positions over time." },
  { question: "Can futures be used for hedging?", answer: "Yes, this is one of the most legitimate uses of crypto futures. If you hold significant crypto positions, you can open short futures positions to hedge against price declines without selling your spot holdings (and triggering taxable events). Institutions frequently use Bitcoin and Ethereum futures to manage portfolio risk. Hedging with futures requires careful position sizing and risk management." },
];

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Investing", href: "/investing" }, { label: "Compare", href: "/investing/compare" }, { label: "Spot vs Futures Investing" }]} />
      <AffiliateDisclosure />
      <header className="mb-8"><h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">Spot vs Futures Crypto Investing ({CURRENT_YEAR})</h1><p className="text-[var(--color-text-secondary)]">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p></header>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">Spot investing means buying and holding actual cryptocurrency, while futures investing involves trading contracts that derive value from the underlying asset price. Futures offer leverage and the ability to profit from price declines, but introduce liquidation risk, funding costs, and complexity that make them unsuitable for most investors. Understanding the differences is critical for choosing the right approach for your risk tolerance and investment goals.</p>
      <section className="mb-10"><ComparisonTable items={items} features={["Ownership", "Leverage", "Max Loss", "Holding Period", "Funding Costs", "Complexity", "Tax Treatment", "Staking/Yield", "Liquidation Risk", "Best For"]} title="Spot vs Futures Investing" /></section>
      <div className="prose-crypto mb-10">
        <p>Spot investing is the foundation of sound cryptocurrency portfolio management. When you buy Bitcoin or Ethereum on spot markets, you own the actual asset — you can transfer it to self-custody, stake it for yield, use it in DeFi, or hold indefinitely with no ongoing costs. There is no liquidation risk, no funding payments, and no contract expiry to manage. The maximum loss is your invested capital (if the asset goes to zero), but there is no leverage that can amplify losses beyond your investment. Dollar-cost averaging into spot positions has historically been the most reliable strategy for building crypto wealth over multi-year timeframes. Spot investing also provides the clearest tax treatment with straightforward capital gains calculations.</p>
        <p>Futures trading is a professional tool that most retail investors misuse. Leverage amplifies both gains and losses — a 10x leveraged position is liquidated by just a 10% adverse price movement, which is routine in crypto markets. Perpetual futures contracts carry ongoing funding rate costs that can erode positions over time, particularly during trending markets when funding rates spike. The primary legitimate uses of futures are hedging existing spot positions against downside risk, executing market-neutral strategies, and expressing short-term directional views with defined risk parameters. Statistics from exchanges consistently show that 70-90% of leveraged traders lose money. For the vast majority of investors, spot investing with proper position sizing and dollar-cost averaging will produce better risk-adjusted returns than leveraged futures trading.</p>
      </div>
      <section className="mb-10"><h2 className="text-2xl font-bold mb-4">Related Content</h2>
        {/* editorial-voice */}
        <div style={{ background: '#041a12', border: '1px solid #064e3b', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📈</span>
            <strong style={{ color: '#10b981', fontSize: 15 }}>Research Perspective</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Tokenomics analysis is our edge. Most retail investors skip the vesting schedule and supply inflation data that often determines long-term price action.
          </p>
        </div><ul className="space-y-2"><li><Link href="/investing/compare/active-vs-passive-crypto" className="text-blue-600 hover:underline">Active vs Passive Crypto Investing</Link></li><li><Link href="/investing/learn/crypto-investment-risks" className="text-blue-600 hover:underline">Crypto Investment Risks</Link></li></ul></section>
      <FAQSection faqs={faqs} />
    </div>
  );
}
