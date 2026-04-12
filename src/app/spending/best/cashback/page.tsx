import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { Product } from "@/lib/types";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best Crypto Cashback Cards of ${CURRENT_YEAR} - Earn Crypto on Every Purchase | ${SITE_NAME}`,
  description: `Compare the best crypto cashback cards of ${CURRENT_YEAR}. Earn Bitcoin, Ethereum, and other crypto rewards on everyday spending. Up to 8% back on purchases.`,
};

const cashbackCards: Product[] = [
  {
    name: "Crypto.com Visa Card",
    slug: "crypto-com-visa",
    rating: 4.8,
    description: "Offers the most well-rounded cashback program with five tiers. The entry-level Midnight Blue earns 1% CRO back, while the top-tier Obsidian earns 5%. Additional perks include 100% rebates on Spotify, Netflix, and Amazon Prime subscriptions on qualifying tiers.",
    pros: ["Up to 5% cashback in CRO", "Subscription rebates (Spotify, Netflix, Amazon Prime)", "No spending caps on cashback", "Staking rewards on locked CRO"],
    cons: ["Requires CRO staking for best rates ($400-$400,000)", "Cashback only in CRO token", "180-day lock-up period", "Reward rates subject to policy changes"],
    fees: "No annual fee",
    bestFor: "Highest all-around cashback",
    affiliateUrl: "#",
    category: "spending",
    featured: true,
  },
  {
    name: "Binance Card",
    slug: "binance-card",
    rating: 4.5,
    description: "The highest potential cashback of any crypto card at 8% in BNB. The card tier is determined by your average BNB balance over 30 days. Even the base tier offers a respectable 0.1% cashback, scaling up through seven tiers.",
    pros: ["Up to 8% cashback (highest available)", "Seven reward tiers", "Zero fees on card transactions", "Real-time Binance exchange rates"],
    cons: ["Not available in the US", "8% tier requires 600+ BNB holdings", "Cashback in BNB only", "Limited to select regions"],
    fees: "No annual fee",
    bestFor: "Maximum cashback percentage",
    affiliateUrl: "#",
    category: "spending",
  },
  {
    name: "Coinbase Card",
    slug: "coinbase-card",
    rating: 4.5,
    description: "The only major crypto card that lets you choose your cashback currency. Pick from BTC (1.5%), ETH (1.5%), DOGE (4%), DAI (4%), or other options. No staking required to earn rewards, making it the most accessible cashback option.",
    pros: ["Choose your reward crypto", "Up to 4% back in select cryptos", "No staking requirements", "No annual fee"],
    cons: ["2.49% liquidation spread on crypto spends", "Highest cashback only on certain tokens", "US only", "Lower BTC/ETH cashback rate (1.5%)"],
    fees: "No annual fee",
    bestFor: "Cashback without staking",
    affiliateUrl: "#",
    category: "spending",
  },
  {
    name: "Wirex Card",
    slug: "wirex-card",
    rating: 4.1,
    description: "Earn up to 8% Cryptoback in WXT tokens on in-store purchases. The X-tras program offers additional cashback boosts at partner merchants. Multi-currency accounts let you hold and spend in both fiat and crypto.",
    pros: ["Up to 8% Cryptoback in WXT", "Extra rewards at partner merchants", "In-store purchases qualify", "Available in 130+ countries"],
    cons: ["Highest cashback requires premium plan ($14.99/mo)", "WXT token has lower liquidity", "Online purchases get lower rates", "Cashback caps on free tier"],
    fees: "$0-$14.99/month",
    bestFor: "In-store crypto cashback",
    affiliateUrl: "#",
    category: "spending",
  },
  {
    name: "Fold Card",
    slug: "fold-card",
    rating: 4.0,
    description: "A unique approach to cashback: every purchase triggers a spin-the-wheel reward ranging from 1% to 100% back in Bitcoin. The Fold+ subscription boosts base reward rates and adds daily spin bonuses. You spend dollars and earn sats.",
    pros: ["Chance to win up to 100% back in BTC", "Spend USD, earn Bitcoin", "Daily bonus spins with Fold+", "Lightning Network withdrawals"],
    cons: ["Unpredictable reward amounts", "Average cashback around 1-3%", "Fold+ costs $150/year for best rewards", "Bitcoin-only rewards"],
    fees: "$0 free / $150/yr Fold+",
    bestFor: "Gamified Bitcoin cashback",
    affiliateUrl: "#",
    category: "spending",
  },
  {
    name: "Nexo Card",
    slug: "nexo-card",
    rating: 3.9,
    description: "Earn up to 2% back in NEXO tokens or 0.5% in Bitcoin on purchases made through the Nexo credit line. Unique in that you borrow against your crypto instead of selling it, so you maintain market exposure while spending.",
    pros: ["Earn rewards while keeping crypto exposure", "Up to 2% back in NEXO", "No monthly or annual fees", "Credit line means no taxable crypto sales"],
    cons: ["Lower cashback than competitors (max 2%)", "Interest on borrowed amounts", "Requires collateral in Nexo account", "Liquidation risk in volatile markets"],
    fees: "No annual fee",
    bestFor: "Cashback without selling crypto",
    affiliateUrl: "#",
    category: "spending",
  },
];

const faqs = [
  {
    question: "How does crypto cashback work?",
    answer: "When you make a purchase with a crypto cashback card, a percentage of your spending is returned to you in cryptocurrency. This works similarly to traditional cashback credit cards, except instead of receiving dollars back, you receive Bitcoin, Ethereum, or another cryptocurrency. The rewards are typically deposited into your wallet on the card provider's platform.",
  },
  {
    question: "Is crypto cashback taxable?",
    answer: "In most jurisdictions, crypto cashback earned through spending is treated as a purchase discount or rebate, which is generally not immediately taxable. However, if you later sell or trade the earned crypto at a profit, that gain would be subject to capital gains tax. Tax laws vary by country, so consult a qualified tax professional for advice specific to your situation.",
  },
  {
    question: "Which card has the best cashback without staking?",
    answer: `The Coinbase Card offers up to 4% cashback (in DOGE or DAI) without requiring any token staking. The Fold Card free tier also requires no staking and pays Bitcoin rewards on every purchase, though the average rate is lower at around 1-2%.`,
  },
  {
    question: "Can I get cashback on all purchases?",
    answer: "Most crypto cashback cards offer rewards on nearly all purchases, but there are common exclusions. Financial transactions (like buying other gift cards, paying bills to financial institutions, or funding gambling accounts) are typically excluded. Some cards also cap the amount of cashback you can earn monthly, especially on free tiers.",
  },
  {
    question: "How do cashback tiers work on crypto cards?",
    answer: "Most crypto cards determine your cashback tier based on how much of the platform's native token you stake (lock up). For example, Crypto.com offers 1% at the base tier with no staking, 2% with $400 staked, 3% with $4,000, and up to 5% with $40,000 staked. Higher tiers also unlock additional perks beyond just cashback.",
  },
];

export default function BestCashbackCardsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best Crypto Cashback Cards of ${CURRENT_YEAR}`,
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
            { label: "Best", href: "/spending/best" },
            { label: "Cashback Cards", href: "/spending/best/cashback" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Crypto Cashback Cards ({CURRENT_YEAR})
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            Earning crypto rewards on everyday spending is one of the simplest ways to accumulate
            digital assets. We compared the leading crypto cashback cards to find which ones offer
            the best reward rates, the most flexible earning options, and the fewest strings attached.
            Whether you want to stack sats or earn altcoin rewards, there is a card that fits your strategy.
          </p>
          <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">How We Ranked These Cards</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            We prioritized effective cashback rate (accounting for fees and staking requirements), reward
            flexibility, ease of earning, and the long-term value proposition of each reward currency.
            A card offering 8% back in a volatile low-cap token may not be as valuable as 3% back in Bitcoin,
            depending on your risk tolerance and investment thesis.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {cashbackCards.map((card, index) => (
            <div
              key={card.slug}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 card-hover"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-[var(--color-text)] font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-text)]">{card.name}</h3>
                    <div className="text-sm text-[var(--color-accent)]">{card.rating}/5</div>
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
              <p className="mt-3 text-sm text-[var(--color-text-secondary)]">{card.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
                  Best for: {card.bestFor}
                </span>
                {card.fees && (
                  <span className="inline-flex items-center rounded-full bg-[var(--color-success)]/10 px-3 py-1 text-xs font-medium text-[var(--color-success)]">
                    Fees: {card.fees}
                  </span>
                )}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-semibold text-[var(--color-success)] mb-1">Pros</h4>
                  <ul className="space-y-1">
                    {card.pros.map((pro, i) => (
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
                    {card.cons.map((con, i) => (
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

        {/* Cashback Strategy Tips */}
        <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Maximizing Your Crypto Cashback</h2>
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
          <div className="space-y-4 text-[var(--color-text-secondary)]">
            <div className="flex items-start gap-3">
              <span className="text-[var(--color-primary)] font-bold text-lg">1.</span>
              <div>
                <h3 className="text-[var(--color-text)] font-semibold">Use your crypto card for recurring bills</h3>
                <p className="text-sm">Set up your crypto card for subscriptions and monthly bills. This passive spending accumulates significant rewards over time without changing your habits.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[var(--color-primary)] font-bold text-lg">2.</span>
              <div>
                <h3 className="text-[var(--color-text)] font-semibold">Calculate your effective reward rate</h3>
                <p className="text-sm">Factor in conversion spreads and fees. A 4% cashback card with a 2.5% spread only nets you 1.5% in real value. Cards with lower headline rates but zero fees can be more valuable.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[var(--color-primary)] font-bold text-lg">3.</span>
              <div>
                <h3 className="text-[var(--color-text)] font-semibold">Consider the reward token long-term</h3>
                <p className="text-sm">Earning 8% in a token that drops 50% is worse than earning 2% in Bitcoin. Evaluate the long-term prospects and liquidity of the reward cryptocurrency.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[var(--color-primary)] font-bold text-lg">4.</span>
              <div>
                <h3 className="text-[var(--color-text)] font-semibold">Stack multiple cards strategically</h3>
                <p className="text-sm">Use different cards for different categories. One card might be better for daily spending while another offers bonuses at specific merchants or for travel.</p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} />
      </div>
    </>
  );
}
