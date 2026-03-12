import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { ComparisonItem, FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: `Fixed vs Variable Rate DeFi Lending ${CURRENT_YEAR}: Comparison`,
  description: `Compare fixed and variable rate lending in DeFi in ${CURRENT_YEAR}. Analyze rate mechanics, protocols, risk profiles, and when each is the better choice.`,
};

const items: ComparisonItem[] = [
  { name: "Variable Rate", slug: "defi-lending", rating: 4.5, affiliateUrl: "https://degen0x.com/go/aave", features: { "Rate Predictability": "Low (changes every block)", "Average Rates": "Often lower than fixed", "Liquidity": "Instant entry/exit", "Protocols": "Aave, Compound, Morpho", "Lock-up Required": "None", "Best Market": "Stable or declining rates", "Complexity": "Simple", "Risk": "Rate volatility" } },
  { name: "Fixed Rate", slug: "defi-lending", rating: 4.2, affiliateUrl: "https://degen0x.com/go/notional", features: { "Rate Predictability": "High (locked for term)", "Average Rates": "Includes certainty premium", "Liquidity": "Term-based (limited early exit)", "Protocols": "Notional, Pendle, Term", "Lock-up Required": "Yes (term maturity)", "Best Market": "Rising rate environment", "Complexity": "Moderate", "Risk": "Opportunity cost, liquidity" } },
];

const features = ["Rate Predictability", "Average Rates", "Liquidity", "Protocols", "Lock-up Required", "Best Market", "Complexity", "Risk"];

const faqs: FAQ[] = [
  { question: "Are fixed rates always higher than variable?", answer: "Generally yes, because fixed rates include a premium for certainty. However, during periods of high borrowing demand, variable rates can spike well above available fixed rates. The spread between fixed and variable rates reflects market expectations for future rate movements." },
  { question: "Can I switch between fixed and variable?", answer: "On protocols like Aave, you can switch between stable and variable rates. For true fixed-rate protocols like Notional, you would need to wait for maturity or sell your position on secondary markets to switch. Plan your rate strategy before entering positions." },
  { question: "Which is better for borrowing?", answer: "Variable rates are better for short-term borrowing where flexibility matters. Fixed rates are better when you need cost predictability for longer-term positions. If you are borrowing to fund a strategy with a known return, fixing your borrowing cost eliminates rate risk." },
];

export default function FixedVsVariableRatePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "DeFi Lending", href: "/defi-lending" }, { label: "Compare", href: "/defi-lending/compare/fixed-vs-variable-rate" }, { label: "Fixed vs Variable Rate", href: "/defi-lending/compare/fixed-vs-variable-rate" }]} />
      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Fixed vs Variable Rate DeFi Lending ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Choosing between fixed and variable rates in DeFi lending is one of the most impactful decisions for both lenders and borrowers. Variable rates offer flexibility and often lower average costs, while fixed rates provide certainty and protection against rate spikes. This comparison analyzes both approaches to help you make an informed choice.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-[var(--color-text)]">The short answer:</strong> Variable rates are better for short-term, flexible positions. Fixed rates are better for long-term planning and protection against rate increases. Most users benefit from a mix of both based on their time horizon and risk tolerance.
        </p>
      </div>
      <section className="mb-12">
        <ComparisonTable items={items} features={features} title="Fixed vs Variable Rate Comparison" />
      </section>
      <section className="mb-12 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Detailed Analysis</h2>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Rate Behavior</h3>
        <p className="text-[var(--color-text-secondary)]">Variable rates on Aave and Compound adjust algorithmically based on pool utilization. During normal conditions, rates are relatively stable but can spike 10x or more during high-demand periods. Fixed rates on Notional or Term Finance are locked at the time of transaction and remain constant until maturity. This behavioral difference has practical implications: variable rate borrowers may face unexpectedly high costs during market stress, while fixed rate borrowers have cost certainty but may overpay during calm markets.</p>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Protocol Availability</h3>
        <p className="text-[var(--color-text-secondary)]">Variable rate lending is widely available across nearly every lending protocol on every chain. Fixed rate options are more limited. Notional Finance offers the most comprehensive fixed-rate lending on Ethereum with quarterly maturity dates. Pendle Finance enables fixed yield through yield tokenization. Term Finance uses auction-based rate discovery. Aave's stable rate is not truly fixed but provides more rate stability than the variable option. The limited availability of fixed-rate options means variable rates are the default for most DeFi users.</p>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Strategy Implications</h3>
        <p className="text-[var(--color-text-secondary)]">For yield farmers running leveraged strategies, the spread between borrowing cost and farming return determines profitability. Variable borrowing rates can compress or eliminate this spread unpredictably. Fixing borrowing costs locks in the spread for the term, providing more predictable strategy returns. For passive lenders, fixed rates guarantee a minimum return while variable rates may outperform during high-demand periods. Consider your strategy's sensitivity to rate changes when choosing between fixed and variable.</p>
      </section>
      <FAQSection faqs={faqs} />
    </div>
  );
}
