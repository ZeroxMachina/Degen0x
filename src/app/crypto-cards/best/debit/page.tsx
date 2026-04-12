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
  title: `Best Crypto Debit Cards of ${CURRENT_YEAR} - Spend Your Crypto`,
  description: `Compare the best crypto debit cards of ${CURRENT_YEAR}. Spend Bitcoin, ETH, and other crypto anywhere Visa or Mastercard is accepted. Ranked by rewards, fees, and features.`,
};

const debitCards = [
  cryptoCards.find((c) => c.slug === "crypto-com-visa")!,
  cryptoCards.find((c) => c.slug === "coinbase-card")!,
  cryptoCards.find((c) => c.slug === "binance-card")!,
  cryptoCards.find((c) => c.slug === "fold-card")!,
  cryptoCards.find((c) => c.slug === "bybit-card")!,
  cryptoCards.find((c) => c.slug === "wirex-card")!,
  cryptoCards.find((c) => c.slug === "gnosis-card")!,
  cryptoCards.find((c) => c.slug === "plutus-card")!,
];

const faqs = [
  {
    question: "How does a crypto debit card work?",
    answer: "A crypto debit card draws funds from your cryptocurrency balance (on an exchange, wallet, or dedicated account) and converts them to fiat currency at the point of sale. The merchant receives regular dollars, euros, or local currency. You see the crypto deduction in your linked account, and the conversion happens instantly.",
  },
  {
    question: "What is the best crypto debit card overall?",
    answer: `The Crypto.com Visa is our top-rated crypto debit card in ${CURRENT_YEAR} for its combination of high cashback (up to 5%), zero annual fees, global availability, and premium perks. For US users specifically, the Coinbase Card is excellent for its ease of use and integration with the popular Coinbase platform.`,
  },
  {
    question: "Is using a crypto debit card a taxable event?",
    answer: "In most jurisdictions, yes. When you spend cryptocurrency through a debit card, you are effectively selling that crypto for fiat at the point of sale. This triggers a capital gains or loss event based on the difference between your cost basis and the sale price. Keep records of all transactions for tax reporting.",
  },
  {
    question: "Can I spend stablecoins with a crypto debit card?",
    answer: "Yes, most crypto debit cards support stablecoin spending (USDC, USDT, DAI). Spending stablecoins avoids the volatility risk and simplifies tax reporting since stablecoins maintain a roughly $1 value. The Coinbase Card and Crypto.com Visa both support multiple stablecoins.",
  },
  {
    question: "What happens if my crypto balance runs out during a purchase?",
    answer: "The transaction will be declined, similar to a regular debit card with insufficient funds. Some cards allow you to set a backup funding source or automatically sell from a secondary crypto holding. Always ensure you have enough balance before making large purchases.",
  },
  {
    question: "Can I use a crypto debit card for recurring subscriptions?",
    answer: "Yes, you can set up recurring payments with most crypto debit cards. However, ensure you maintain a sufficient crypto balance or the payment will fail. Some users prefer to keep a stablecoin balance for predictable recurring charges rather than spending volatile assets.",
  },
];

export default function BestDebitCardsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Cards", href: "/crypto-cards" },
          { label: "Best Crypto Cards", href: "/crypto-cards/best" },
          { label: "Debit Cards", href: "/crypto-cards/best/debit" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Crypto Debit Cards ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Crypto debit cards are the most direct way to spend your cryptocurrency in the real
          world. They convert your Bitcoin, Ethereum, or other holdings to fiat instantly at
          the point of sale, letting you use crypto for everything from coffee to rent. Unlike
          crypto credit cards, debit cards draw directly from your existing balance with no
          credit check or interest charges. We ranked the best crypto debit cards by reward
          rates, supported currencies, fees, and overall spending experience.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Crypto Debit Cards vs Credit Cards</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Crypto debit cards spend your existing crypto balance and do not extend credit or
          build your credit score. They are simpler to obtain (no credit check) and have no
          risk of accruing interest. However, spending volatile crypto triggers taxable events,
          which can complicate your tax situation. For users who already hold significant crypto
          and want to spend it, debit cards are the most natural option.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Our Top Picks</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          The <strong className="text-[var(--color-text)]">Crypto.com Visa</strong> leads with the highest
          cashback rates and the most comprehensive debit card perks on the market. The{" "}
          <strong className="text-[var(--color-text)]">Coinbase Card</strong> offers the easiest experience
          for US users already on Coinbase, with flexible reward token choices. The{" "}
          <strong className="text-[var(--color-text)]">Binance Card</strong> delivers the highest cashback
          potential at 8% for users outside the US who hold BNB.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {debitCards.map((card, index) => (
          <ProductCard
            key={card.slug}
            product={card}
            rank={index + 1}
            categorySlug="crypto-cards"
          />
        ))}
      </div>

      {/* Debit Card Features */}
      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Key Features to Compare</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[var(--color-text-secondary)]">
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-1">Supported Cryptocurrencies</h3>
            <p className="text-sm">The more crypto assets your card supports for spending, the more flexibility you have. Coinbase leads with 100+ assets, while others support 10-50 tokens.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-1">Conversion Spread</h3>
            <p className="text-sm">The hidden cost of converting crypto to fiat at the point of sale. Ranges from 0% (Binance) to 2.49% (Coinbase). This directly impacts the effective value of your spending.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-1">ATM Access</h3>
            <p className="text-sm">Most crypto debit cards allow cash withdrawals at ATMs. Free monthly allowances vary from $200 to $1,000 depending on the card tier, with fees of 2%+ beyond the limit.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-1">Spending Limits</h3>
            <p className="text-sm">Daily and monthly spending caps vary by card and tier. Higher tiers generally offer higher limits. Check that your card supports your expected spending volume.</p>
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

      </section>

      {/* Methodology */}
      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Our Methodology</h2>
        <p className="text-[var(--color-text-secondary)]">
          Debit card rankings focus on the spending experience and effective cost. We weight
          cashback and rewards (25%), conversion spread and fees (25%), supported cryptocurrencies
          for spending (20%), ATM access and limits (10%), spending limits (10%), and app and
          card management experience (10%). We test actual transactions including in-store
          purchases, online orders, and ATM withdrawals to verify real-world performance.
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
      </section>

      {/* Related Links */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Related Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Best Crypto Prepaid Cards", href: "/crypto-cards/best/prepaid" },
            { title: "Best Crypto Cashback Cards", href: "/crypto-cards/best/cashback" },
            { title: "Credit vs Debit vs Prepaid Crypto Cards", href: "/crypto-cards/learn/credit-vs-debit-vs-prepaid" },
            { title: "Tax Implications of Crypto Card Spending", href: "/crypto-cards/learn/tax-implications" },
          ].map((link) => (
            <Link href={link.href}
              key={link.href}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover block"
            >
              <span className="text-[var(--color-text)] font-semibold">{link.title}</span>
              <span className="block text-xs text-[var(--color-text-secondary)] mt-1">
                Read more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
