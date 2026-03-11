import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { ComparisonItem, FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: `Free vs Paid Crypto Tax Software (${CURRENT_YEAR}): Is Free Good Enough?`,
  description: `Compare free and paid crypto tax software options. Understand the limitations of free tools and when it is worth paying for premium crypto tax reporting in ${CURRENT_YEAR}.`,
};

const items: ComparisonItem[] = [
  { name: "Free Crypto Tax Tools", slug: "free-tools", rating: 3.5, affiliateUrl: "#", features: { "Transaction Limit": "25-100 typically", "DeFi Support": "Limited or none", "Exchange Support": "Major exchanges only", "Cost Basis Methods": "FIFO only usually", "Customer Support": "Community forums", "Tax Forms": "Basic (8949, Schedule D)", "Historical Reports": "Limited", "Accuracy": "Good for simple portfolios" } },
  { name: "Paid Crypto Tax Tools", slug: "paid-tools", rating: 4.5, affiliateUrl: "#", features: { "Transaction Limit": "1,000 to unlimited", "DeFi Support": "Comprehensive", "Exchange Support": "400-800+", "Cost Basis Methods": "Multiple (FIFO, LIFO, HIFO, etc.)", "Customer Support": "Email, chat, priority", "Tax Forms": "Complete set + international", "Historical Reports": "Full history", "Accuracy": "Excellent for all portfolios" } },
];

const features = ["Transaction Limit", "DeFi Support", "Exchange Support", "Cost Basis Methods", "Customer Support", "Tax Forms", "Historical Reports", "Accuracy"];

const faqs: FAQ[] = [
  { question: "When is free crypto tax software good enough?", answer: "Free tools work well if you have fewer than 25-100 transactions, trade only on major exchanges, have no DeFi activity, and are comfortable with FIFO cost basis. If your crypto activity is limited to buying and selling on Coinbase or Binance with few transactions, a free tool is likely sufficient." },
  { question: "Which free crypto tax tools are best?", answer: "TaxBit offers a free consumer plan with decent exchange support. Koinly's free tier allows reviewing up to 10,000 transactions but requires payment to generate reports. CoinTracker's free tier covers 25 transactions. Each has different strengths, so try multiple options with your data." },
  { question: "Is it worth paying for crypto tax software?", answer: "If you have more than 100 transactions, use DeFi protocols, trade on multiple exchanges, or want to optimize your cost basis method, paid software is almost certainly worth the cost. The tax savings from HIFO cost basis selection alone often exceeds the software cost. Errors from inadequate tools can be much more expensive." },
];

export default function FreeVsPaidCryptoTaxPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Taxes", href: "/taxes" }, { label: "Compare", href: "/taxes/compare/free-vs-paid-crypto-tax" }, { label: "Free vs Paid", href: "/taxes/compare/free-vs-paid-crypto-tax" }]} />
      <h1 className="text-4xl font-bold text-white mb-4">Free vs Paid Crypto Tax Software ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Several crypto tax tools offer free tiers, but are they good enough for accurate reporting? This comparison examines the trade-offs between free and paid crypto tax software, helping you decide whether the investment in a paid tool is worthwhile for your situation.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-white">The short answer:</strong> Free tools work for simple portfolios with few transactions on major exchanges. If you have DeFi activity, many transactions, or want tax optimization through cost basis method selection, paid tools are worth the investment.
        </p>
      </div>
      <section className="mb-12">
        <ComparisonTable items={items} features={features} title="Free vs Paid Crypto Tax Software Comparison" />
      </section>
      <section className="mb-12 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4">Detailed Analysis</h2>
        <h3 className="text-xl font-bold text-white mt-6 mb-3">Transaction Limits</h3>
        <p className="text-[var(--color-text-secondary)]">The most immediate limitation of free tools is transaction count. Most free tiers support only 25 to 100 transactions. Active traders can exceed this in a single day. Even occasional traders may have more transactions than they realize when counting all trades, conversions, and transfers. Paid tools typically start at 1,000 transactions and scale to unlimited. Exceeding your free tier limit means losing access to reports until you upgrade.</p>
        <h3 className="text-xl font-bold text-white mt-6 mb-3">DeFi and Advanced Features</h3>
        <p className="text-[var(--color-text-secondary)]">Free tools almost universally lack comprehensive DeFi support. If you have used any DeFi protocols for lending, borrowing, swapping, providing liquidity, or yield farming, a free tool will likely misclassify or miss transactions entirely. This can lead to inaccurate tax reports that either overstate your gains or fail to capture taxable income. Paid tools invest significantly in DeFi transaction parsing and offer much better accuracy for on-chain activity.</p>
        <h3 className="text-xl font-bold text-white mt-6 mb-3">Cost Basis Optimization</h3>
        <p className="text-[var(--color-text-secondary)]">Most free tools default to FIFO cost basis and do not offer alternatives. Paid tools allow you to compare different methods like HIFO, LIFO, and specific identification. Choosing the optimal cost basis method can reduce your tax liability by thousands of dollars. This single feature alone often justifies the cost of paid software. Some paid tools let you preview your tax liability under each method before choosing, making the optimization process straightforward.</p>
      </section>
      <FAQSection faqs={faqs} />
    </div>
  );
}
