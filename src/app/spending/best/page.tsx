import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { Product } from "@/lib/types";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best Ways to Spend Crypto in ${CURRENT_YEAR} - Cards, Apps & More | ${SITE_NAME}`,
  description: `Compare the best crypto debit cards, payment apps, and spending options in ${CURRENT_YEAR}. Expert reviews of Crypto.com Visa, Coinbase Card, BitPay, and more.`,
};

const topSpendingProducts: Product[] = [
  {
    name: "Crypto.com Visa Card",
    slug: "crypto-com-visa",
    rating: 4.8,
    description: "The leading crypto debit card with up to 5% cashback in CRO, free Spotify and Netflix rebates on higher tiers, and no annual fee on the base card. Accepted worldwide wherever Visa is accepted.",
    pros: ["Up to 5% crypto cashback", "Free Spotify/Netflix on higher tiers", "No annual fee (base tier)", "Airport lounge access (premium tiers)"],
    cons: ["Requires CRO staking for best rewards", "180-day staking lock-up", "Cashback paid in CRO only"],
    fees: "No annual fee (base)",
    bestFor: "Overall crypto spending",
    affiliateUrl: "#",
    category: "spending",
    featured: true,
  },
  {
    name: "Coinbase Card",
    slug: "coinbase-card",
    rating: 4.6,
    description: "Spend any crypto in your Coinbase account and earn up to 4% back in crypto rewards. Choose from multiple reward currencies including BTC, ETH, DOGE, and more. No annual fee.",
    pros: ["Choose your reward currency", "Spend any supported crypto", "Seamless Coinbase integration", "No annual fee"],
    cons: ["2.49% liquidation fee on crypto spends", "Lower reward rates than competitors", "US only currently"],
    fees: "No annual fee",
    bestFor: "Coinbase users",
    affiliateUrl: "#",
    category: "spending",
    featured: true,
  },
  {
    name: "BitPay Card",
    slug: "bitpay-card",
    rating: 4.4,
    description: "Convert crypto to dollars and load them onto a prepaid Mastercard. Supports Bitcoin, Ethereum, and a wide range of altcoins. Works with Apple Pay and Google Pay.",
    pros: ["Supports 15+ cryptocurrencies", "Apple Pay and Google Pay compatible", "No conversion fees on loading", "Widely accepted"],
    cons: ["$5 monthly inactivity fee", "No crypto cashback rewards", "US only"],
    fees: "$0 annual / $5 inactivity",
    bestFor: "Multi-crypto spending",
    affiliateUrl: "#",
    category: "spending",
  },
  {
    name: "Binance Card",
    slug: "binance-card",
    rating: 4.3,
    description: "Spend crypto directly from your Binance account with up to 8% cashback in BNB. Supports a wide range of cryptocurrencies and offers competitive conversion rates through Binance liquidity.",
    pros: ["Up to 8% BNB cashback", "Real-time crypto conversion", "No monthly or annual fees", "Wide crypto support"],
    cons: ["Not available in the US", "Cashback in BNB only", "Requires BNB staking for best rates"],
    fees: "No annual fee",
    bestFor: "Binance users outside US",
    affiliateUrl: "#",
    category: "spending",
  },
  {
    name: "Fold Card",
    slug: "fold-card",
    rating: 4.2,
    description: "A Bitcoin rewards debit card that gives you sats back on every purchase. Spin the rewards wheel after each transaction for a chance to win up to 100% back in Bitcoin. Unique gamification approach.",
    pros: ["Bitcoin rewards on every purchase", "Fun spin-the-wheel rewards", "No crypto conversion needed (spend USD)", "Lightning Network integration"],
    cons: ["Variable reward rates", "Requires Fold+ subscription for best perks", "Limited to Bitcoin rewards"],
    fees: "$0 free / $150/yr Fold+",
    bestFor: "Bitcoin maximalists",
    affiliateUrl: "#",
    category: "spending",
  },
];

const categoryLinks = [
  { title: "Best Crypto Debit Cards", href: "/spending/best/debit-cards", description: "Complete ranking of all crypto debit cards with detailed comparisons" },
  { title: "Best Crypto Cashback Cards", href: "/spending/best/cashback", description: "Cards with the highest crypto cashback rewards" },
  { title: "Best Crypto Cards for Travel", href: "/spending/best/travel", description: "No foreign transaction fees and global acceptance" },
  { title: "Best Crypto Rewards Cards", href: "/spending/best/rewards", description: "Maximize your earnings with every purchase" },
  { title: "Best Crypto Payment Apps", href: "/spending/best/payment-apps", description: "Mobile apps for paying with crypto everywhere" },
  { title: "Where to Spend Crypto", href: "/spending/best/merchants", description: "Retailers and services accepting cryptocurrency" },
];

const faqs = [
  {
    question: "What is the best crypto debit card overall?",
    answer: `Based on our testing in ${CURRENT_YEAR}, the Crypto.com Visa Card is the best overall crypto debit card. It offers the most generous cashback tiers (up to 5%), additional perks like Spotify and Netflix rebates, and has no annual fee on the base tier. For US users who prefer simplicity, the Coinbase Card is an excellent alternative.`,
  },
  {
    question: "How do crypto debit cards work?",
    answer: "Crypto debit cards link to your cryptocurrency holdings and automatically convert your crypto to fiat currency (like USD, EUR, or GBP) at the point of sale. When you swipe or tap your card, the payment network processes it like any other debit card transaction, but the funds come from your crypto balance rather than a bank account.",
  },
  {
    question: "Are crypto debit cards safe to use?",
    answer: "Yes, crypto debit cards from reputable providers are generally safe. They use the same security infrastructure as traditional debit cards, including EMV chips, PINs, and fraud protection. Your crypto is held by the card issuer, so the main risk is the card provider itself. Stick to well-known companies with strong track records.",
  },
  {
    question: "Can I use a crypto debit card at an ATM?",
    answer: "Most crypto debit cards allow ATM withdrawals. The card converts your crypto to fiat and dispenses cash. Most providers offer a free monthly ATM withdrawal allowance (typically $200-$1,000), after which fees of 1-2% apply. International ATM withdrawals may incur additional charges.",
  },
  {
    question: "What happens to my crypto rewards?",
    answer: "Crypto cashback rewards are typically deposited directly into your wallet on the card provider's platform. You can hold them, trade them, or transfer them to an external wallet. Since rewards are paid in cryptocurrency, their value can increase or decrease with market movements.",
  },
];

export default function BestSpendingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best Ways to Spend Crypto in ${CURRENT_YEAR}`,
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
            { label: "Spending", href: "/spending" },
            { label: "Best Spending Options", href: "/spending/best" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Ways to Spend Crypto in {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            Spending cryptocurrency has never been easier. With crypto debit cards, payment apps, and a
            growing number of merchants accepting digital currencies directly, you can use your Bitcoin,
            Ethereum, and other crypto for everything from groceries to flights. We tested the leading
            spending solutions to help you find the best way to put your crypto to work.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            Our top pick for most people is the <strong className="text-[var(--color-text)]">Crypto.com Visa Card</strong> for
            its best-in-class cashback rates and premium perks. If you are already a Coinbase user,
            the <strong className="text-[var(--color-text)]">Coinbase Card</strong> offers seamless integration with your
            existing portfolio. And for Bitcoin enthusiasts, the <strong className="text-[var(--color-text)]">Fold Card</strong> rewards
            every purchase with sats.
          </p>
        </div>

        {/* Top Products */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Our Top Picks</h2>
          <div className="space-y-4">
            {topSpendingProducts.map((product, index) => (
              <div
                key={product.slug}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 card-hover"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-[var(--color-text)] font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--color-text)]">{product.name}</h3>
                      <div className="text-sm text-[var(--color-accent)]">
                        {"*".repeat(Math.floor(product.rating))}{" "}
                        {product.rating}/5
                      </div>
                    </div>

        <AuthorAttribution
          author="CipherPunk_42"
          role="Security & QA"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="spending"
        />

                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="affiliate-cta px-4 py-2 rounded-lg text-white text-sm font-medium whitespace-nowrap"
                  >
                    Get Card
                  </a>
                </div>
                <p className="mt-3 text-sm text-[var(--color-text-secondary)]">{product.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
                    Best for: {product.bestFor}
                  </span>
                  {product.fees && (
                    <span className="inline-flex items-center rounded-full bg-[var(--color-success)]/10 px-3 py-1 text-xs font-medium text-[var(--color-success)]">
                      Fees: {product.fees}
                    </span>
                  )}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-semibold text-[var(--color-success)] mb-1">Pros</h4>
                    <ul className="space-y-1">
                      {product.pros.map((pro, i) => (
                        <li key={i} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-1">
                          <span className="text-[var(--color-success)] mt-0.5">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[var(--color-danger)] mb-1">Cons</h4>
                    <ul className="space-y-1">
                      {product.cons.map((con, i) => (
                        <li key={i} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-1">
                          <span className="text-[var(--color-danger)] mt-0.5">-</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryLinks.map((link) => (
              <Link href={product.affiliateUrl}
                key={link.href}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 card-hover block"
              >
                <h3 className="text-[var(--color-text)] font-semibold mb-1">{link.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{link.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Our Methodology</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            We evaluate each crypto spending product across five key categories:
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a0a1e', border: '1px solid #4a1259', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🛒</span>
            <strong style={{ color: '#d946ef', fontSize: 15 }}>Spending Reality</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Spending crypto should be a conscious choice, not a default. We cover the tax implications and opportunity costs that most spending guides ignore.
          </p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Rewards & Cashback (30%)", desc: "Cashback rates, reward currencies, bonus categories, and overall earning potential." },
              { title: "Fees & Costs (25%)", desc: "Annual fees, conversion spreads, ATM fees, foreign transaction fees, and hidden charges." },
              { title: "Usability (20%)", desc: "Sign-up process, app quality, card delivery time, and day-to-day convenience." },
              { title: "Crypto Support (15%)", desc: "Number of supported cryptocurrencies, conversion options, and wallet integration." },
              { title: "Availability (10%)", desc: "Geographic availability, supported currencies, and regulatory compliance." },
            ].map((item) => (
              <div key={item.title} className="p-4 rounded-lg bg-[var(--color-bg)]/50">
                <h3 className="text-[var(--color-text)] font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <FAQSection faqs={faqs} />
      </div>
    </>
  );
}
