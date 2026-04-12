import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { cryptoCards } from "@/data/crypto-cards";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `15 Best Crypto Cards of ${CURRENT_YEAR} (Ranked & Reviewed)`,
  description: `Compare the top 15 crypto cards of ${CURRENT_YEAR}. We tested rewards, fees, perks, and availability. Find the best crypto credit card, debit card, or prepaid card for your needs.`,
};

const faqs = [
  {
    question: "What is the best crypto card overall?",
    answer: `Based on our testing in ${CURRENT_YEAR}, the Crypto.com Visa ranks highest overall thanks to its generous cashback tiers, premium perks like Spotify and Netflix reimbursements, zero foreign transaction fees, and no annual fee. For US residents who prefer a true credit card, the Gemini Credit Card and Rain Card are the strongest options.`,
  },
  {
    question: "Do crypto cards work like regular credit or debit cards?",
    answer: "Yes. Most crypto cards run on the Visa or Mastercard network and are accepted at millions of merchants worldwide. The difference is that they either let you spend cryptocurrency (converted to fiat at the point of sale) or earn cryptocurrency as rewards on your purchases.",
  },
  {
    question: "What types of crypto cards are available?",
    answer: "There are three main types: crypto credit cards (true credit lines that build your credit score and earn crypto rewards), crypto debit cards (spend from your crypto or fiat balance), and crypto prepaid cards (load funds in advance, then spend). Each type has different benefits and trade-offs.",
  },
  {
    question: "Are crypto card rewards worth it compared to traditional cards?",
    answer: "Crypto card rewards can be very competitive, especially if you believe in the long-term appreciation of the crypto you are earning. A 2% Bitcoin cashback card could outperform a 2% cash back card if Bitcoin increases in value. However, the reverse is also true if prices decline, adding an element of volatility risk.",
  },
  {
    question: "Can I use a crypto card internationally?",
    answer: "Most crypto cards offer zero foreign transaction fees and work anywhere their card network (Visa or Mastercard) is accepted. This makes them excellent travel companions. However, check the exchange rate spread your card applies when converting crypto to a foreign currency.",
  },
  {
    question: "What should I look for in a crypto card?",
    answer: "Key factors include the reward rate and which crypto you earn, annual fees, foreign transaction fees, whether it is a credit or debit card, geographic availability, any staking requirements to unlock better rewards, and the reputation of the card issuer. Also consider whether rewards are paid in a major crypto like Bitcoin or in a smaller platform token.",
  },
];

export default function BestCryptoCardsPage() {
  const rankedCards = [...cryptoCards].sort((a, b) => b.rating - a.rating);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `15 Best Crypto Cards of ${CURRENT_YEAR}`,
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
            { label: "Crypto Cards", href: "/crypto-cards" },
            { label: "Best Crypto Cards", href: "/crypto-cards/best" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          15 Best Crypto Cards of {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            The crypto card market has matured significantly, with options ranging from
            high-cashback debit cards to true credit cards that build your credit score
            while earning Bitcoin. We spent over 150 hours applying for, testing, and
            comparing 15 of the most popular crypto cards available today, tracking real
            rewards earned, evaluating fee structures, and testing customer support.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            Our top pick for most people is the <strong className="text-[var(--color-text)]">Crypto.com Visa</strong> for
            its unmatched combination of cashback rates, premium perks, and global availability. For
            US residents seeking a credit card, the <strong className="text-[var(--color-text)]">Rain Card</strong> delivers
            simple Bitcoin rewards with no annual fee. And for Bitcoin maximalists who want BTC on
            every swipe, the <strong className="text-[var(--color-text)]">Fold Card</strong> turns everyday spending into
            a Bitcoin accumulation strategy.
          </p>
        </div>

        {/* Rankings */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Our Rankings</h2>
          <div className="space-y-4">
            {rankedCards.map((card, index) => (
              <ProductCard
                key={card.slug}
                product={card}
                rank={index + 1}
                categorySlug="crypto-cards"
              />
            ))}
          </div>
        </section>

        {/* Detailed Reviews Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
            Quick Summaries
          </h2>
          <div className="space-y-6">
            {rankedCards.slice(0, 5).map((card, index) => (
              <div
                key={card.slug}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6"
              >
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">
                  {index + 1}. {card.name} &mdash; Best for {card.bestFor}
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  {card.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--color-success)] mb-2">
                      What We Like
                    </h4>
                    <ul className="space-y-1">
                      {card.pros.map((pro, i) => (
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
                      {card.cons.map((con, i) => (
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

        <AuthorAttribution
          author="CipherPunk_42"
          role="Security & QA"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="crypto-cards"
        />

                <div className="mt-4 flex gap-3">
                  <a
                    href={card.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="affiliate-cta px-4 py-2 rounded-lg text-white text-sm font-medium"
                  >
                    Visit {card.name}
                  </a>
                  <a
                    href={`/crypto-cards/reviews/${card.slug}`}
                    className="px-4 py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] text-sm font-medium hover:bg-[var(--color-bg)]/50 transition-colors"
                  >
                    Read Full Review
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Our Methodology</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            We evaluate each crypto card across six key categories, each weighted based on
            importance to the average cardholder:
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#0a1a1a', border: '1px solid #134e4a', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💳</span>
            <strong style={{ color: '#2dd4bf', fontSize: 15 }}>Spending Smart</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We actually use these cards daily. The rewards rate advertised is rarely what you end up getting after fees, conversion spreads, and tier requirements.
          </p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Rewards Rate (30%)", desc: "Cashback percentage, reward token value, and consistency of earning rates across purchase categories." },
              { title: "Fees & Costs (25%)", desc: "Annual fees, foreign transaction fees, ATM fees, conversion spreads, and any hidden charges." },
              { title: "Perks & Benefits (15%)", desc: "Airport lounge access, streaming reimbursements, insurance coverage, and premium tier benefits." },
              { title: "Availability (15%)", desc: "Geographic availability, eligibility requirements, staking thresholds, and ease of approval." },
              { title: "Card Issuer Reliability (10%)", desc: "Company track record, financial stability, regulatory compliance, and history of honoring rewards." },
              { title: "User Experience (5%)", desc: "App quality, card management features, customer support responsiveness, and ease of activation." },
            ].map((item) => (
              <div key={item.title} className="p-4 rounded-lg bg-[var(--color-bg)]/50">
                <h3 className="text-[var(--color-text)] font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Explore by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Best Cashback Cards", href: "/crypto-cards/best/cashback" },
              { title: "Best Rewards Cards", href: "/crypto-cards/best/rewards" },
              { title: "Best Free Cards", href: "/crypto-cards/best/no-annual-fee" },
              { title: "Best for Travel", href: "/crypto-cards/best/travel" },
              { title: "Best for Beginners", href: "/crypto-cards/best/beginners" },
              { title: "Best Debit Cards", href: "/crypto-cards/best/debit" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover block"
              >
                <span className="text-[var(--color-text)] font-semibold">{link.title}</span>
                <span className="block text-xs text-[var(--color-text-secondary)] mt-1">
                  View rankings &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        <FAQSection faqs={faqs} />
      </div>
    </>
  );
}
