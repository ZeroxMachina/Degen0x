import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `eToro vs Robinhood: Which Is Better? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Detailed comparison of eToro vs Robinhood for crypto and stock trading. Compare fees, copy trading, coin selection, and platform features.",
};

export default function EtoroVsRobinhoodPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Exchanges", href: "/exchanges" }, { label: "Compare", href: "/exchanges/compare" }, { label: "eToro vs Robinhood", href: "#" }]} />
      <AffiliateDisclosure />
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">eToro vs Robinhood: Which Multi-Asset Platform Is Better in {CURRENT_YEAR}?</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">eToro and Robinhood both offer crypto trading alongside stocks, making them popular choices for investors who want a unified platform. eToro is the social trading pioneer with copy trading features, while Robinhood is the zero-commission trailblazer with a sleek US-focused interface. This comparison helps you decide between them.</p>

      <div className="overflow-x-auto glass mb-8">
        <table className="w-full">
          <thead><tr className="glass-table-header"><th className="px-6 py-3 text-left text-sm font-semibold text-[var(--color-text)]">Feature</th><th className="px-6 py-3 text-center text-sm font-semibold text-[var(--color-text)]">eToro</th><th className="px-6 py-3 text-center text-sm font-semibold text-[var(--color-text)]">Robinhood</th></tr></thead>
          <tbody>
            {[["Cryptocurrencies", "~80", "~20"], ["Crypto Fees", "1%-2.9% spread", "Spread markup (~1%)"], ["Copy Trading", "Yes (CopyTrader)", "No"], ["Countries", "140+", "US only"], ["Stocks", "Global markets", "US markets"], ["Withdrawal Fee", "$5", "Free"], ["Virtual Trading", "$100K paper account", "No"], ["Options Trading", "No (US)", "Yes"]].map(([feature, etoro, rob]) => (
              <tr key={feature} className="border-t border-[var(--glass-border)] glass-table-row"><td className="px-6 py-3 text-sm text-[var(--color-text-secondary)]">{feature}</td><td className="px-6 py-3 text-center text-sm text-[var(--color-text-secondary)]">{etoro}</td><td className="px-6 py-3 text-center text-sm text-[var(--color-text-secondary)]">{rob}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose-crypto">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Fee Comparison</h2>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">Robinhood is cheaper for crypto trading, with spread markups of approximately 0.5% to 1% versus eToro's 1% to 2.9%. Neither charges explicit commissions, but eToro's wider spreads result in higher effective costs. eToro also charges a $5 withdrawal fee and 0.5% on non-USD deposits. Robinhood charges no withdrawal fees. For cost-conscious crypto traders, Robinhood has a clear advantage. Both offer zero-commission stock trading.</p>

        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Copy Trading and Social Features</h2>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">eToro's CopyTrader is its defining feature and something Robinhood simply does not offer. The ability to automatically replicate successful traders' portfolios is genuinely useful for beginners and passive investors. eToro's social feed provides market commentary and community engagement. Robinhood has no social or copy trading features. If automated portfolio replication and social investing appeal to you, eToro is the only choice between the two.</p>

        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Availability and Markets</h2>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">eToro operates in over 140 countries, making it accessible to a global audience. Robinhood is exclusively available in the United States. eToro provides access to international stock markets, while Robinhood focuses on US-listed securities. For international users, eToro is the only option. For US users, both are available, with Robinhood offering the additional benefit of options trading which eToro does not provide in the US.</p>

        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Verdict</h2>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
          <p className="text-[var(--color-text-secondary)] leading-relaxed"><strong className="text-[var(--color-text)]">Choose eToro if</strong> you want copy trading features, more crypto selections (~80 vs ~20), global market access, and a social investing experience. Best for international users and those who want to follow expert traders.</p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4"><strong className="text-[var(--color-text)]">Choose Robinhood if</strong> you are a US-based investor who wants the lowest-cost crypto and stock trading with a clean, simple interface. Best for cost-conscious US users who also want options trading.</p>
        </div>
      </div>

      <FAQSection faqs={[
        { question: "Is eToro available in the US?", answer: "Yes, eToro is available in the US, though some features like certain CopyPortfolios may be restricted for US users. Both crypto and stock trading are available for US accounts." },
        { question: "Which has more crypto?", answer: "eToro supports approximately 80 cryptocurrencies compared to Robinhood's approximately 20. eToro offers a broader selection of altcoins and DeFi tokens." },
        { question: "Can I do copy trading on Robinhood?", answer: "No, Robinhood does not offer copy trading or social trading features. This is exclusive to eToro through its CopyTrader and Smart Portfolios features." },
      ]} />
    </div>
  );
}
