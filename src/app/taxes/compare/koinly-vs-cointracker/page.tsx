import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { TAX_COMPARISON_ITEMS, TAX_COMPARISON_FEATURES } from "@/data/taxes";

export const metadata: Metadata = {
  title: `Koinly vs CoinTracker ${CURRENT_YEAR} - Which Crypto Tax Software Is Better?`,
  description: `Compare Koinly vs CoinTracker side by side. Pricing, features, DeFi support, integrations, and which is better for your crypto tax needs.`,
  alternates: { canonical: "/taxes/compare/koinly-vs-cointracker" },
};

const items = TAX_COMPARISON_ITEMS.filter(i => ["koinly", "cointracker"].includes(i.slug));

const faqs = [
  { question: "Which is cheaper, Koinly or CoinTracker?", answer: "Koinly is generally cheaper. Its Newbie plan starts at $49/year for 100 transactions vs CoinTracker's Base plan at $59/year. At higher tiers, the difference grows: Koinly's Hodler plan is $99 for 1,000 transactions vs CoinTracker's Plus plan at $199. Koinly also offers a more generous free tier." },
  { question: "Which has better DeFi support?", answer: "Koinly has broader DeFi support with automatic detection for more protocols. CoinTracker's DeFi capabilities have improved but still trail Koinly, especially for complex multi-protocol strategies. For DeFi-heavy portfolios, Koinly is the better choice (though CryptoTaxCalculator is best of all for DeFi)." },
  { question: "Which integrates with TurboTax?", answer: "CoinTracker has a direct one-click TurboTax integration, which is its biggest advantage. Koinly generates TurboTax-compatible CSV files that must be imported manually. If seamless TurboTax filing is your top priority, CoinTracker wins this comparison." },
];

export default function KoinlyVsCoinTrackerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Taxes", href: "/taxes" },
        { label: "Koinly vs CoinTracker", href: "/taxes/compare/koinly-vs-cointracker" },
      ]} />

      <AffiliateDisclosure />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Koinly vs CoinTracker: Which Is Better in {CURRENT_YEAR}?</h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-2">
        Koinly and CoinTracker are two of the most popular crypto tax platforms. Koinly leads
        in integrations and pricing, while CoinTracker excels with its TurboTax integration
        and portfolio tracking. Here is a detailed comparison to help you choose.
      </p>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>

      <div className="mb-12">
        <ComparisonTable items={items} features={TAX_COMPARISON_FEATURES} title="Koinly vs CoinTracker Comparison" />
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Key Differences</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          The biggest differentiator is CoinTracker's direct TurboTax integration. If you use
          TurboTax for tax filing, CoinTracker provides the smoothest workflow with one-click
          data transfer. Koinly requires exporting a CSV and importing it into TurboTax manually,
          which works but adds an extra step.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Koinly wins on integrations (800+ vs 500+), pricing (cheaper at every tier), international
          support (20+ countries vs 10+), and DeFi tracking depth. For users outside the US or
          those with diverse exchange and DeFi activity, Koinly provides better coverage at a
          lower price.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          CoinTracker offers superior portfolio tracking with real-time performance metrics and
          a cleaner, more polished user interface. If portfolio management alongside tax reporting
          is important to you, CoinTracker provides a more integrated experience.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Our Recommendation</h2>
        <p className="text-[var(--color-text-secondary)]">
          Choose Koinly if you want the best overall value, use multiple exchanges, have
          international tax needs, or are active in DeFi. Choose CoinTracker if you use TurboTax
          and want the simplest possible filing experience, or if real-time portfolio tracking
          is a priority alongside tax reporting.
        </p>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
