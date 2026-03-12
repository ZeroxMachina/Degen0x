import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { ComparisonItem, FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: `CoinTracker vs ZenLedger ${CURRENT_YEAR}: Which Crypto Tax Software Is Better?`,
  description: `Compare CoinTracker vs ZenLedger for crypto tax reporting. Pricing, features, DeFi support, and TurboTax integration compared in ${CURRENT_YEAR}.`,
};

const items: ComparisonItem[] = [
  { name: "CoinTracker", slug: "cointracker", rating: 4.3, affiliateUrl: "https://degen0x.com/go/cointracker", features: { "Free Tier": "Up to 25 transactions", "Paid Plans": "From $59/year", "Exchanges": "500+", "DeFi Support": "Good", "TurboTax Integration": "Direct one-click", "Portfolio Tracking": "Excellent real-time", "Tax Forms": "8949, Schedule D", "CPA Access": "No" } },
  { name: "ZenLedger", slug: "zenledger", rating: 4.0, affiliateUrl: "https://degen0x.com/go/zenledger", features: { "Free Tier": "Up to 25 transactions", "Paid Plans": "From $49/year", "Exchanges": "400+", "DeFi Support": "Good", "TurboTax Integration": "CSV export", "Portfolio Tracking": "Basic", "Tax Forms": "8949, Schedule D, FBAR", "CPA Access": "Yes (premium)" } },
];

const features = ["Free Tier", "Paid Plans", "Exchanges", "DeFi Support", "TurboTax Integration", "Portfolio Tracking", "Tax Forms", "CPA Access"];

const faqs: FAQ[] = [
  { question: "Which is better for TurboTax users?", answer: "CoinTracker has a clear advantage for TurboTax users with its direct one-click integration. ZenLedger requires exporting a CSV file and importing it into TurboTax manually, which works but adds extra steps and potential for import errors." },
  { question: "Which tool is better for CPAs?", answer: "ZenLedger is better for those working with CPAs. Its premium plans include CPA access features, allowing your tax professional to view your data directly. This makes collaboration with your accountant more efficient. CoinTracker does not offer dedicated CPA access features." },
  { question: "Which handles DeFi better?", answer: "Both tools have improved their DeFi support significantly. CoinTracker has a slight edge in automatic DeFi transaction categorization, particularly for Ethereum-based protocols. ZenLedger handles DeFi well but may require more manual categorization for complex transactions." },
];

export default function CoinTrackerVsZenLedgerPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Taxes", href: "/taxes" }, { label: "Compare", href: "/taxes/compare/cointracker-vs-zenledger" }, { label: "CoinTracker vs ZenLedger", href: "/taxes/compare/cointracker-vs-zenledger" }]} />
      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">CoinTracker vs ZenLedger: Full Comparison ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          CoinTracker and ZenLedger are both established crypto tax platforms aimed at simplifying crypto tax reporting. CoinTracker stands out with its TurboTax integration and portfolio tracking, while ZenLedger offers CPA collaboration features and broader tax form support. This comparison helps you decide which fits your needs.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-[var(--color-text)]">The short answer:</strong> CoinTracker is better for self-filing users who want TurboTax integration and real-time portfolio tracking. ZenLedger is better for users who work with CPAs and need professional collaboration features or FBAR reporting.
        </p>
      </div>
      <section className="mb-12">
        <ComparisonTable items={items} features={features} title="CoinTracker vs ZenLedger Feature Comparison" />
      </section>
      <section className="mb-12 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Detailed Analysis</h2>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Portfolio Tracking</h3>
        <p className="text-[var(--color-text-secondary)]">CoinTracker doubles as a portfolio tracker with real-time price updates, performance charts, and asset allocation views. This makes it useful year-round, not just during tax season. ZenLedger's portfolio tracking is more basic, primarily showing holdings and their current values without the detailed analytics CoinTracker provides.</p>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Professional Features</h3>
        <p className="text-[var(--color-text-secondary)]">ZenLedger has an edge for users working with tax professionals. Its premium plans include CPA access that allows your accountant to log in and review your crypto tax data directly. ZenLedger also generates FBAR forms for users with foreign exchange accounts, a feature CoinTracker does not offer. These professional features make ZenLedger a strong choice for complex tax situations.</p>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Pricing Comparison</h3>
        <p className="text-[var(--color-text-secondary)]">Both platforms offer free tiers for up to 25 transactions. ZenLedger's paid plans start at $49 per year, slightly cheaper than CoinTracker's $59 starting price. At higher tiers, ZenLedger's unlimited plan at $399 includes CPA access, while CoinTracker's top tier at $599 focuses on unlimited transaction support and priority features. Choose based on which features matter most for your situation.</p>
      </section>
      <FAQSection faqs={faqs} />
    </div>
  );
}
