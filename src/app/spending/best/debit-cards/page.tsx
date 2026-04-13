import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { Product } from "@/lib/types";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `7 Best Crypto Debit Cards of 2026 (Ranked & Compared) | degen0x`,
  description: `Compare the best crypto debit cards of ${CURRENT_YEAR}. We tested Crypto.com Visa, Coinbase Card, Binance Card, BitPay, Fold, and more. Find the right card for your needs.`,
  alternates: { canonical: "/spending/best/debit-cards" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const debitCards: Product[] = [
  {
    name: "Crypto.com Visa Card",
    slug: "crypto-com-visa",
    rating: 4.8,
    description: "The gold standard of crypto debit cards. Five card tiers ranging from the free Midnight Blue to the exclusive Obsidian, each offering progressively better",
    pros: ["Up to 5% CRO cashback on all purchases", "Free Spotify, Netflix, and Amazon Prime rebates (higher tiers)", "No annual fees on any tier", "Airport lounge access with Jade Green and above"],
    cons: ["Best rewards require significant CRO staking ($400 to $400,000)", "180-day staking lock-up period", "Cashback paid exclusively in CRO token", "Reward tiers can change with policy updates"],
    fees: "No annual fee",
    bestFor: "Best overall crypto debit card",
    affiliateUrl: "#",
    category: "spending",
    featured: true,
  },
  {
    name: "Coinbase Card",
    slug: "coinbase-card",
    rating: 4.6,
    description: "Spend any cryptocurrency held in your Coinbase account and earn up to 4% back in the crypto of your choice. The only major crypto card that lets you pick your reward currency from a list that includes BTC, ETH, DOGE, DAI, and more. Simple integration with the Coinbase ecosystem.",
    pros: ["Choose your reward cryptocurrency", "Spend any of 100+ supported cryptos", "Seamless Coinbase wallet integration", "Instant spend notifications and tracking"],
    cons: ["2.49% liquidation spread on crypto transactions", "Rewards rate varies by chosen crypto (1-4%)", "Currently only available in the US", "No premium tier perks like lounge access"],
    fees: "No annual fee",
    bestFor: "Flexible crypto rewards",
    affiliateUrl: "#",
    category: "spending",
    featured: true,
  },
  {
    name: "Binance Card",
    slug: "binance-card",
    rating: 4.5,
    description: "Spend crypto directly from your Binance account with up to 8% cashback in BNB. Supports a broad range of cryptocurrencies with real-time conversion at Binance exchange rates. Available in Europe and select regions.",
    pros: ["Up to 8% cashback in BNB (highest in the market)", "Real-time conversion at Binance exchange rates", "Support for 15+ cryptocurrencies", "Zero annual or monthly fees"],
    cons: ["Not available in the United States", "Highest cashback tier requires substantial BNB holding", "Rewards paid only in BNB", "Card availability limited to certain regions"],
    fees: "No annual fee",
    bestFor: "Highest cashback potential",
    affiliateUrl: "#",
    category: "spending",
  },
  {
    name: "BitPay Card",
    slug: "bitpay-card",
    rating: 4.3,
    description: "A prepaid Mastercard that lets you convert crypto to USD and load it onto the card. Supports Bitcoin, Ethereum, and over a dozen altcoins. Compatible with Apple Pay and Google Pay for contactless payments.",
    pros: ["Supports 15+ cryptocurrencies", "Apple Pay and Google Pay compatible", "No conversion fees when loading card", "Instant virtual card available"],
    cons: ["$5 monthly inactivity fee after 90 days", "No crypto cashback rewards", "US only availability", "Prepaid model requires manual loading"],
    fees: "$0 annual / $5 inactivity fee",
    bestFor: "Multi-crypto prepaid spending",
    affiliateUrl: "#",
    category: "spending",
  },
  {
    name: "Fold Card",
    slug: "fold-card",
    rating: 4.2,
    description: "A unique Bitcoin rewards debit card where you spend dollars (not crypto) and earn Bitcoin back. Every purchase triggers a spin-the-wheel reward where you can win 1% to 100% back in sats. Fold+ subscription unlocks boosted rewards.",
    pros: ["Earn Bitcoin on every dollar spent", "Gamified spin-the-wheel rewards (up to 100% back)", "No crypto conversion (spend USD)", "Lightning Network integration for withdrawals"],
    cons: ["Best perks require $150/year Fold+ subscription", "Variable reward rates (average 1-3%)", "Bitcoin-only rewards", "Relatively new product with evolving features"],
    fees: "$0 free / $150/yr Fold+",
    bestFor: "Bitcoin rewards enthusiasts",
    affiliateUrl: "#",
    category: "spending",
  },
  {
    name: "Wirex Card",
    slug: "wirex-card",
    rating: 4.1,
    description: "A multi-currency card supporting both traditional and crypto accounts. Earn up to 8% Cryptoback in WXT tokens on in-store purchases. Supports 150+ currencies and offers inter-bank exchange rates for fiat conversions.",
    pros: ["Up to 8% Cryptoback rewards in WXT", "Support for 150+ fiat and crypto currencies", "Inter-bank exchange rates", "Available in 130+ countries"],
    cons: ["Best rewards require WXT token staking", "Cryptoback paid in WXT (lower liquidity token)", "Premium plans from $14.99/month", "Some features locked behind higher tiers"],
    fees: "$0-$14.99/month",
    bestFor: "Multi-currency global spending",
    affiliateUrl: "#",
    category: "spending",
  },
  {
    name: "Nexo Card",
    slug: "nexo-card",
    rating: 4.0,
    description: "Spend against your crypto collateral without selling it. The Nexo Card works as a credit line backed by your crypto holdings, letting you borrow against your portfolio and spend via a Mastercard. Earn up to 2% back in NEXO or BTC.",
    pros: ["Spend without selling your crypto (borrow against it)", "Up to 2% cashback in NEXO or BTC", "No monthly or annual fees", "Instant credit line based on portfolio value"],
    cons: ["Interest charged on borrowed amounts (0-13.9% APR)", "Requires crypto collateral in Nexo account", "Lower cashback than competitor cards", "Liquidation risk if collateral drops significantly"],
    fees: "No annual fee (interest on credit line)",
    bestFor: "Spending without selling crypto",
    affiliateUrl: "#",
    category: "spending",
  },
];

const faqs = [
  {
    question: "What is a crypto debit card and how does it work?",
    answer: "A crypto debit card is linked to your cryptocurrency holdings and works like a traditional debit card. When you make a purchase, the card provider automatically converts the required amount of crypto to fiat currency (USD, EUR, etc.) and processes the payment through the Visa or Mastercard network. The merchant receives fiat, so they do not need to accept crypto directly.",
  },
  {
    question: "Which crypto debit card has the highest cashback?",
    answer: `The Binance Card offers up to 8% cashback in BNB, the highest rate available. However, this requires significant BNB staking. The Crypto.com Visa offers up to 5% with CRO staking. For users who prefer not to stake tokens, the Coinbase Card offers up to 4% without any staking requirement.`,
  },
  {
    question: "Do crypto debit cards charge conversion fees?",
    answer: "Most crypto debit cards charge a conversion spread (the difference between the exchange rate they give you and the market rate) rather than an explicit fee. This spread typically ranges from 0.5% to 2.5%. Some cards, like the Binance Card, use their exchange rates which tend to be more competitive. The BitPay Card charges no conversion fee when loading.",
  },
  {
    question: "Can I use a crypto debit card internationally?",
    answer: "Yes, most crypto debit cards work internationally wherever Visa or Mastercard is accepted. However, foreign transaction fees vary by provider. The Crypto.com Visa charges no foreign transaction fees, making it ideal for travel. Some cards may apply an additional 1-3% fee for international transactions.",
  },
  {
    question: "What happens if the crypto market crashes while I have money on my card?",
    answer: "It depends on the card type. Prepaid cards like BitPay convert crypto to fiat when you load the card, so subsequent price drops do not affect your balance. Cards that convert at the point of sale, like Crypto.com and Coinbase, use the exchange rate at the time of purchase, so your spending power fluctuates with the market.",
  },
  {
    question: "Are crypto debit card rewards taxable?",
    answer: "Tax treatment varies by jurisdiction. In the US, crypto cashback rewards from spending are generally treated as a discount or rebate and may not be immediately taxable (similar to traditional cashback). However, if you later sell the rewarded crypto at a profit, that gain is taxable. Consult a tax professional for guidance specific to your situation.",
  },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Spending', item: 'https://degen0x.com/spending' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/spending/best' },
    { '@type': 'ListItem', position: 4, name: 'Debit Cards', },
  ],
};

export default function BestDebitCardsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `7 Best Crypto Debit Cards of ${CURRENT_YEAR}`,
    dateModified: new Date().toISOString(),
    author: { "@type": "Organization", name: "degen0x" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
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
            { label: "Debit Cards", href: "/spending/best/debit-cards" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          7 Best Crypto Debit Cards of {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            Crypto debit cards bridge the gap between your digital assets and everyday spending. We applied
            for, received, and used each of these cards for real-world purchases, ATM withdrawals, and
            online shopping. After months of testing, we ranked them based on cashback rewards, fees,
            supported cryptocurrencies, availability, and overall user experience.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            The <strong className="text-[var(--color-text)]">Crypto.com Visa Card</strong> earns our top spot for its
            unmatched combination of cashback rewards and premium perks. The <strong className="text-[var(--color-text)]">Coinbase Card</strong> is
            the best choice for US users who want flexible reward options, and
            the <strong className="text-[var(--color-text)]">Binance Card</strong> offers the highest potential cashback
            for users outside the United States.
          </p>
        </div>

        {/* Rankings */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Our Rankings</h2>
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
          <div className="space-y-4">
            {debitCards.map((card, index) => (
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
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="py-3 px-4 text-[var(--color-text)] font-semibold">Card</th>
                  <th className="py-3 px-4 text-[var(--color-text)] font-semibold">Max Cashback</th>
                  <th className="py-3 px-4 text-[var(--color-text)] font-semibold">Annual Fee</th>
                  <th className="py-3 px-4 text-[var(--color-text)] font-semibold">Network</th>
                  <th className="py-3 px-4 text-[var(--color-text)] font-semibold">Availability</th>
                </tr>
              </thead>
              <tbody className="text-[var(--color-text-secondary)]">
                {[
                  { name: "Crypto.com Visa", cashback: "5% CRO", fee: "Free", network: "Visa", avail: "Global (130+)" },
                  { name: "Coinbase Card", cashback: "4% (choice)", fee: "Free", network: "Visa", avail: "US only" },
                  { name: "Binance Card", cashback: "8% BNB", fee: "Free", network: "Visa", avail: "EU / Select" },
                  { name: "BitPay Card", cashback: "None", fee: "$0 / $5 inact.", network: "Mastercard", avail: "US only" },
                  { name: "Fold Card", cashback: "~1-3% BTC", fee: "$0 / $150 sub", network: "Visa", avail: "US only" },
                  { name: "Wirex Card", cashback: "8% WXT", fee: "$0-$15/mo", network: "Visa/MC", avail: "130+ countries" },
                  { name: "Nexo Card", cashback: "2% NEXO/BTC", fee: "Free", network: "Mastercard", avail: "EU / Select" },
                ].map((row) => (
                  <tr key={row.name} className="border-b border-[var(--color-border)]/50">
                    <td className="py-3 px-4 text-[var(--color-text)] font-medium">{row.name}</td>
                    <td className="py-3 px-4">{row.cashback}</td>
                    <td className="py-3 px-4">{row.fee}</td>
                    <td className="py-3 px-4">{row.network}</td>
                    <td className="py-3 px-4">{row.avail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How to Choose */}
        <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How to Choose a Crypto Debit Card</h2>
          <div className="space-y-4 text-[var(--color-text-secondary)]">
            <p>
              Choosing the right crypto debit card depends on your spending habits, location, and
              crypto portfolio. Consider these key factors when making your decision:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
                <h3 className="text-[var(--color-text)] font-semibold mb-1">Cashback Rate</h3>
                <p className="text-sm">Higher cashback is better, but consider whether you are comfortable holding the reward token. Some cards pay in Bitcoin, others in proprietary tokens with less liquidity.</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
                <h3 className="text-[var(--color-text)] font-semibold mb-1">Staking Requirements</h3>
                <p className="text-sm">Many cards require you to lock up tokens to unlock the best reward tiers. Calculate whether the rewards justify the staking commitment and the associated opportunity cost.</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
                <h3 className="text-[var(--color-text)] font-semibold mb-1">Geographic Availability</h3>
                <p className="text-sm">Some cards are US-only, others are EU-focused, and some are truly global. Verify availability in your country before getting excited about a particular card.</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
                <h3 className="text-[var(--color-text)] font-semibold mb-1">Total Cost of Ownership</h3>
                <p className="text-sm">Factor in conversion spreads, ATM fees, inactivity fees, and monthly subscription costs. A card with high cashback but high fees might not save you money overall.</p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} />
            <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/learn" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            All Learning Guides
          </Link>
          <Link href="/tools" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Crypto Tools
          </Link>
          <Link href="/compare" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Compare Projects
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
