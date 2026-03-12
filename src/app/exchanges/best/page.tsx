import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import ComparisonTable from "@/components/ComparisonTable";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { exchanges, exchangeDetailedComparisons, exchangeComparisonFeatures } from "@/data/exchanges";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `10 Best Crypto Exchanges of ${CURRENT_YEAR} (Ranked & Reviewed)`,
  description: `Compare the top 10 crypto exchanges of ${CURRENT_YEAR}. We tested fees, security, features, and ease of use. Find the best exchange for beginners, advanced traders, and everyone in between.`,
};

const faqs = [
  {
    question: "What is the best crypto exchange overall?",
    answer: `Based on our testing in ${CURRENT_YEAR}, Binance ranks highest overall thanks to its unmatched liquidity, low fees, and massive coin selection. However, for US-based users, Coinbase is the best option due to its regulatory compliance and user-friendly interface.`,
  },
  {
    question: "What is the cheapest crypto exchange?",
    answer: "Binance offers the lowest trading fees at 0.1% for spot trades, which can be reduced further to 0.075% using BNB tokens. Kraken is the cheapest US-available exchange with fees starting at 0% for makers on Kraken Pro.",
  },
  {
    question: "What is the safest crypto exchange?",
    answer: "Kraken and Gemini are widely considered the safest exchanges. Kraken has never been hacked since its founding in 2011, and Gemini holds SOC 2 Type 2 certification, the gold standard for security compliance. Both use extensive cold storage and carry insurance.",
  },
  {
    question: "Do I need to pay taxes on crypto exchange transactions?",
    answer: "In most jurisdictions, yes. Buying crypto with fiat is generally not a taxable event, but selling crypto, trading one crypto for another, and earning crypto through staking or rewards are typically taxable. Exchanges like Coinbase provide tax reporting documents to help you stay compliant.",
  },
  {
    question: "How much money do I need to start trading crypto?",
    answer: "Most exchanges let you start with as little as $1 to $10. Coinbase has a minimum purchase of $2, Kraken starts at $1, and Binance starts at $10. You do not need thousands of dollars to begin investing in cryptocurrency.",
  },
  {
    question: "Should I keep my crypto on an exchange?",
    answer: "For small amounts and active trading, keeping crypto on a reputable exchange is fine. For larger holdings or long-term storage, transferring to a personal hardware wallet like Ledger or Trezor provides greater security since you control the private keys.",
  },
];

export default function BestExchangesPage() {
  const rankedExchanges = [...exchanges].sort((a, b) => b.rating - a.rating);
  const comparisonItems = rankedExchanges.slice(0, 5).map((e) => exchangeDetailedComparisons[e.slug]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `10 Best Crypto Exchanges of ${CURRENT_YEAR}`,
    dateModified: new Date().toISOString(),
    author: { "@type": "Organization", name: "degen0x" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Exchanges", href: "/exchanges" },
            { label: "Best Exchanges", href: "/exchanges/best" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          10 Best Crypto Exchanges of {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            Choosing the right cryptocurrency exchange can make or break your trading experience.
            With hundreds of platforms available, the differences in fees, security, and features
            are significant. We spent over 200 hours testing and comparing the top exchanges,
            creating accounts, making trades, and evaluating customer support on each one.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            Our top pick for most people is <strong className="text-[var(--color-text)]">Coinbase</strong> for
            its unmatched ease of use and strong US regulatory compliance. For traders seeking the
            lowest fees and widest selection, <strong className="text-[var(--color-text)]">Binance</strong> leads
            the pack globally. And for those who prioritize security above all else,{" "}
            <strong className="text-[var(--color-text)]">Kraken</strong> is hard to beat with its decade-long
            clean security record.
          </p>
        </div>

        {/* Rankings */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Our Rankings</h2>
          <div className="space-y-4">
            {rankedExchanges.map((exchange, index) => (
              <ProductCard
                key={exchange.slug}
                product={exchange}
                rank={index + 1}
                categorySlug="exchanges"
              />
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
            Top 5 Exchanges Compared
          </h2>
          <ComparisonTable
            items={comparisonItems}
            features={exchangeComparisonFeatures}
            title="Feature Comparison"
          />
        </section>

        {/* Methodology */}
        <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Our Methodology</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            We evaluate each exchange across six key categories, each weighted based on importance
            to the average user:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Fees (25%)", desc: "Trading fees, deposit/withdrawal fees, spread costs, and hidden charges." },
              { title: "Security (25%)", desc: "Cold storage practices, insurance, hack history, 2FA options, and compliance certifications." },
              { title: "Ease of Use (20%)", desc: "Onboarding flow, interface design, mobile app quality, and learning resources." },
              { title: "Coin Selection (15%)", desc: "Number of supported cryptocurrencies, trading pairs, and new listing frequency." },
              { title: "Features (10%)", desc: "Staking, futures, margin trading, earn products, and advanced order types." },
              { title: "Support (5%)", desc: "Customer support channels, response times, and quality of help documentation." },
            ].map((item) => (
              <div key={item.title} className="p-4 rounded-lg bg-[var(--color-bg)]/50">
                <h3 className="text-[var(--color-text)] font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Reviews Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
            Quick Summaries
          </h2>
          <div className="space-y-6">
            {rankedExchanges.slice(0, 5).map((exchange, index) => (
              <div
                key={exchange.slug}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6"
              >
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">
                  {index + 1}. {exchange.name} &mdash; Best for {exchange.bestFor}
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  {exchange.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--color-success)] mb-2">
                      What We Like
                    </h4>
                    <ul className="space-y-1">
                      {exchange.pros.map((pro, i) => (
                        <li
                          key={i}
                          className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2"
                        >
                          <span className="text-[var(--color-success)] mt-0.5">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--color-danger)] mb-2">
                      What Could Improve
                    </h4>
                    <ul className="space-y-1">
                      {exchange.cons.map((con, i) => (
                        <li
                          key={i}
                          className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2"
                        >
                          <span className="text-[var(--color-danger)] mt-0.5">-</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 flex gap-3">
                  <a
                    href={exchange.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="affiliate-cta px-4 py-2 rounded-lg text-white text-sm font-medium"
                  >
                    Visit {exchange.name}
                  </a>
                  <a
                    href={`/exchanges/reviews/${exchange.slug}`}
                    className="px-4 py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] text-sm font-medium hover:bg-[var(--color-bg)]/50 transition-colors"
                  >
                    Read Full Review
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <FAQSection faqs={faqs} />
      </div>
    </>
  );
}
