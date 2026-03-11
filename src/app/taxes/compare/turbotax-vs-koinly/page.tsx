import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { ComparisonItem, FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: `TurboTax vs Koinly ${CURRENT_YEAR}: Built-In Crypto vs Dedicated Tax Software`,
  description: `Compare TurboTax's built-in crypto features vs Koinly's dedicated crypto tax platform. Which approach is better for crypto tax reporting in ${CURRENT_YEAR}?`,
};

const items: ComparisonItem[] = [
  { name: "TurboTax Crypto", slug: "turbotax-crypto", rating: 3.7, affiliateUrl: "https://cryptodegen.com/go/turbotax", features: { "Type": "General tax software", "Crypto Integration": "Built-in for select exchanges", "Exchange Support": "20+", "DeFi Support": "Minimal", "Cost Basis Methods": "FIFO, LIFO, HIFO", "International": "US only", "Filing": "Complete tax return filing", "Price": "$89+ (Premier tier)" } },
  { name: "Koinly", slug: "koinly", rating: 4.5, affiliateUrl: "https://cryptodegen.com/go/koinly", features: { "Type": "Dedicated crypto tax tool", "Crypto Integration": "Comprehensive", "Exchange Support": "800+", "DeFi Support": "Excellent", "Cost Basis Methods": "FIFO, LIFO, HIFO, ACB, more", "International": "20+ countries", "Filing": "Export to TurboTax or other", "Price": "From $49/year" } },
];

const features = ["Type", "Crypto Integration", "Exchange Support", "DeFi Support", "Cost Basis Methods", "International", "Filing", "Price"];

const faqs: FAQ[] = [
  { question: "Can I use TurboTax without Koinly for crypto taxes?", answer: "Yes, TurboTax Premier includes basic crypto tax support with direct import from select major exchanges. For simple portfolios with only a few exchanges and no DeFi activity, TurboTax alone may be sufficient. For more complex situations, a dedicated tool like Koinly produces better results." },
  { question: "Do I need both TurboTax and Koinly?", answer: "Many users use Koinly for crypto tax calculations and then export the results to TurboTax for filing their complete tax return. This combines Koinly's superior crypto tracking with TurboTax's comprehensive tax filing. You can also use Koinly's reports with other filing methods." },
  { question: "Which is better for DeFi users?", answer: "Koinly is dramatically better for DeFi users. TurboTax has minimal DeFi support and cannot automatically parse on-chain DeFi transactions. Koinly supports hundreds of DeFi protocols and can categorize complex transactions automatically. DeFi users should use Koinly or a similar dedicated tool." },
];

export default function TurboTaxVsKoinlyPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Taxes", href: "/taxes" }, { label: "Compare", href: "/taxes/compare/turbotax-vs-koinly" }, { label: "TurboTax vs Koinly", href: "/taxes/compare/turbotax-vs-koinly" }]} />
      <h1 className="text-4xl font-bold text-white mb-4">TurboTax vs Koinly: Built-In vs Dedicated Crypto Tax ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          This comparison addresses a common question: should you use TurboTax's built-in crypto support or a dedicated crypto tax tool like Koinly? These are fundamentally different products. TurboTax is a complete tax filing solution with basic crypto features, while Koinly is a specialized crypto tax calculator that exports data for filing.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-white">The short answer:</strong> For simple portfolios with a few major exchanges and no DeFi, TurboTax alone works fine. For anything more complex, use Koinly for crypto calculations and export to TurboTax or another filing solution. Many users combine both tools.
        </p>
      </div>
      <section className="mb-12">
        <ComparisonTable items={items} features={features} title="TurboTax vs Koinly Feature Comparison" />
      </section>
      <section className="mb-12 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4">Detailed Analysis</h2>
        <h3 className="text-xl font-bold text-white mt-6 mb-3">Different Tools for Different Jobs</h3>
        <p className="text-[var(--color-text-secondary)]">It is important to understand that TurboTax and Koinly serve different purposes. TurboTax is a complete tax preparation and filing solution that handles all aspects of your tax return. Its crypto features are one component of a larger product. Koinly is a specialized tool focused exclusively on crypto tax calculations that produces reports for use in your tax filing process. Many users use both tools together for the best results.</p>
        <h3 className="text-xl font-bold text-white mt-6 mb-3">Exchange and DeFi Coverage</h3>
        <p className="text-[var(--color-text-secondary)]">Koinly supports over 800 exchanges and wallets compared to TurboTax's approximately 20 direct integrations. For DeFi activity, the gap is even wider. Koinly can parse on-chain transactions from hundreds of protocols across multiple blockchains, while TurboTax has virtually no automated DeFi support. If you use DeFi protocols, small exchanges, or have extensive on-chain activity, TurboTax alone will not capture your complete crypto tax picture.</p>
        <h3 className="text-xl font-bold text-white mt-6 mb-3">The Combined Approach</h3>
        <p className="text-[var(--color-text-secondary)]">The most common and effective approach for crypto-active taxpayers is to use Koinly for all crypto tax calculations, then export the Form 8949 data and import it into TurboTax for filing your complete tax return. This gives you the best of both worlds: Koinly's comprehensive crypto tracking and TurboTax's reliable tax filing with all other income sources, deductions, and credits handled properly.</p>
      </section>
      <FAQSection faqs={faqs} />
    </div>
  );
}
