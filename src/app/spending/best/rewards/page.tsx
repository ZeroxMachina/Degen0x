import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { Product } from "@/lib/types";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best Crypto Rewards Cards of 2026 - Earn BTC, ETH & More | degen0x`,
  description: `Compare the best crypto rewards cards of ${CURRENT_YEAR}. Earn Bitcoin, Ethereum, and other cryptocurrencies on everyday spending. Expert-tested rankings and reviews.`,
  alternates: { canonical: "/spending/best/rewards" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const rewardsCards: Product[] = [
  {
    name: "Crypto.com Visa Card",
    slug: "crypto-com-visa",
    rating: 4.8,
    description: "The most comprehensive crypto rewards program available. Beyond cashback, cardholders earn CRO staking rewards, subscription rebates worth up to $167/month",
    pros: ["Up to 5% CRO cashback + subscription rebates", "Staking rewards on locked CRO", "Airport lounge access (higher tiers)", "Zero annual fees across all tiers"],
    cons: ["Top rewards require substantial CRO staking", "All rewards paid in CRO", "Reward tier changes have occurred historically", "180-day staking lockup"],
    fees: "No annual fee",
    bestFor: "Most comprehensive rewards package",
    affiliateUrl: "#",
    category: "spending",
    featured: true,
  },
  {
    name: "Coinbase Card",
    slug: "coinbase-card",
    rating: 4.6,
    description: "The most flexible crypto rewards card. Choose from multiple reward currencies including BTC, ETH, DOGE, DAI, and others. Reward rates vary by currency (1% to 4%), letting you match your earning strategy to your investment thesis.",
    pros: ["Choose your reward cryptocurrency", "Up to 4% back in select cryptos", "No staking or lock-up requirements", "Integrated with largest US exchange"],
    cons: ["2.49% liquidation spread reduces effective rewards", "Highest rewards only on certain tokens", "Limited to US users", "Reward options and rates can change"],
    fees: "No annual fee",
    bestFor: "Choosing your reward crypto",
    affiliateUrl: "#",
    category: "spending",
  },
  {
    name: "Fold Card (Fold+)",
    slug: "fold-card-plus",
    rating: 4.3,
    description: "A Bitcoin-only rewards system with a unique gamification twist. Fold+ subscribers get boosted base rewards, daily bonus spins, and exclusive promotional offers. The spin-the-wheel mechanic adds excitement to every purchase with chances to win up to 100% back.",
    pros: ["Earn pure Bitcoin on every purchase", "Gamified reward spins (up to 100% back)", "Daily bonus spins for Fold+ members", "Lightning Network for instant reward withdrawals"],
    cons: ["Fold+ subscription costs $150/year", "Average effective reward rate is 1-3%", "No altcoin reward options", "Variable and unpredictable reward amounts"],
    fees: "$150/year (Fold+)",
    bestFor: "Bitcoin-only rewards",
    affiliateUrl: "#",
    category: "spending",
  },
  {
    name: "Binance Card",
    slug: "binance-card",
    rating: 4.3,
    description: "The highest headline cashback rate in the industry at 8% BNB. Seven reward tiers based on your 30-day average BNB balance provide a clear path to increasing rewards. Real-time conversion at Binance exchange rates ensures competitive pricing.",
    pros: ["Up to 8% BNB cashback (industry highest)", "Seven progressive reward tiers", "No monthly or annual fees", "Best-in-class exchange rates via Binance"],
    cons: ["Not available in the United States", "8% tier requires 600+ BNB holdings", "Rewards only in BNB", "Limited geographic availability"],
    fees: "No annual fee",
    bestFor: "Maximum reward potential",
    affiliateUrl: "#",
    category: "spending",
  },
  {
    name: "Wirex Card",
    slug: "wirex-card",
    rating: 4.0,
    description: "Unique X-tras program offers boosted rewards at partner merchants on top of the base Cryptoback rate. Earn up to 8% WXT on in-store purchases, with additional promotional rates at select retailers. The reward ecosystem extends beyond just card spending.",
    pros: ["Up to 8% Cryptoback in WXT", "Boosted rewards at partner merchants", "In-store purchase bonuses", "DeFi earning options for WXT rewards"],
    cons: ["Best rates require premium subscription", "WXT token has moderate liquidity", "Complex tier and pricing structure", "Reduced rates for online purchases"],
    fees: "$0-$14.99/month",
    bestFor: "In-store reward bonuses",
    affiliateUrl: "#",
    category: "spending",
  },
];

const faqs = [
  {
    question: "What is the difference between crypto cashback and crypto rewards?",
    answer: "The terms are often used interchangeably, but there is a subtle distinction. Crypto cashback refers specifically to a percentage of your spending returned in crypto. Crypto rewards encompass a broader set of benefits including cashback, staking bonuses, subscription rebates, airport lounge access, and promotional offers. The best rewards cards combine multiple benefit types.",
  },
  {
    question: "Should I earn rewards in Bitcoin or altcoins?",
    answer: "It depends on your investment strategy. Bitcoin rewards are the most conservative choice given BTC's established market position and liquidity. Altcoin rewards (like CRO, BNB, or WXT) may offer higher headline rates but carry more risk due to lower market caps and potential volatility. Many experienced users earn in altcoins and periodically convert to BTC or ETH.",
  },
  {
    question: "How much can I realistically earn with a crypto rewards card?",
    answer: "On a monthly spending of $3,000, a 3% crypto rewards card would earn you $90 in crypto per month, or $1,080 per year. At 5%, that becomes $1,800 per year. However, account for conversion spreads (which reduce effective earnings by 0.5-2.5%) and consider that your crypto rewards can appreciate or depreciate with market movements.",
  },
  {
    question: "Can I combine crypto rewards with traditional credit card rewards?",
    answer: "Yes, and many savvy users do exactly this. Use traditional rewards credit cards for categories where they offer the best rates (like dining or grocery) and use your crypto card for categories where crypto rewards are superior. This strategy maximizes your total reward earnings across all spending categories.",
  },
  {
    question: "Do crypto rewards expire?",
    answer: "Crypto rewards from debit cards do not typically expire since they are deposited as cryptocurrency into your wallet. Once earned, they are yours to hold, trade, or withdraw indefinitely. This is actually an advantage over some traditional reward programs where points can expire after a set period of inactivity.",
  },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Spending', item: 'https://degen0x.com/spending' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/spending/best' },
    { '@type': 'ListItem', position: 4, name: 'Rewards', },
  ],
};

export default function BestRewardsCardsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Spending", href: "/spending" },
          { label: "Best", href: "/spending/best" },
          { label: "Rewards Cards", href: "/spending/best/rewards" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Crypto Rewards Cards ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Crypto rewards cards let you accumulate digital assets through everyday spending. Unlike
          simple cashback cards, the best rewards programs combine multiple earning mechanisms including
          purchase rewards, staking bonuses, subscription rebates, and promotional offers. We evaluated
          the total reward value of each card to determine which offers the best overall earning potential.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Beyond Simple Cashback</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          The most valuable crypto rewards cards go far beyond a simple cashback percentage. Consider the
          Crypto.com Visa: the 5% cashback alone on $3,000 monthly spending is $150/month. Add Spotify ($14.99),
          Netflix ($15.49), and Amazon Prime ($14.99) rebates, and the total monthly value reaches $195. Over a
          year, that is over $2,340 in rewards, potentially more if CRO appreciates.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {rewardsCards.map((card, index) => (
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
                  {card.fees}
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

      {/* Rewards Value Comparison */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Annual Rewards Comparison (on $3,000/mo spending)</h2>
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
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="py-3 px-4 text-[var(--color-text)] font-semibold">Card</th>
                <th className="py-3 px-4 text-[var(--color-text)] font-semibold">Cashback/Year</th>
                <th className="py-3 px-4 text-[var(--color-text)] font-semibold">Extra Perks/Year</th>
                <th className="py-3 px-4 text-[var(--color-text)] font-semibold">Cost/Year</th>
                <th className="py-3 px-4 text-[var(--color-text)] font-semibold">Net Value/Year</th>
              </tr>
            </thead>
            <tbody className="text-[var(--color-text-secondary)]">
              {[
                { name: "Crypto.com (5%)", cashback: "$1,800", perks: "$540", cost: "$0", net: "$2,340" },
                { name: "Coinbase (4%)", cashback: "$1,440", perks: "$0", cost: "$0*", net: "$1,440*" },
                { name: "Binance (8%)", cashback: "$2,880", perks: "$0", cost: "$0", net: "$2,880" },
                { name: "Fold+ (~2%)", cashback: "$720", perks: "$0", cost: "$150", net: "$570" },
                { name: "Wirex (8%)", cashback: "$2,880", perks: "$0", cost: "$180", net: "$2,700" },
              ].map((row) => (
                <tr key={row.name} className="border-b border-[var(--color-border)]/50">
                  <td className="py-3 px-4 text-[var(--color-text)] font-medium">{row.name}</td>
                  <td className="py-3 px-4">{row.cashback}</td>
                  <td className="py-3 px-4">{row.perks}</td>
                  <td className="py-3 px-4">{row.cost}</td>
                  <td className="py-3 px-4 font-semibold text-[var(--color-success)]">{row.net}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-[var(--color-text-secondary)] mt-2">
            *Coinbase net value does not account for the 2.49% liquidation spread which reduces effective rewards. Binance and Wirex figures assume top-tier qualification. All values are estimates based on maximum reward rates.
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Spending/best/rewards", "description": "The most comprehensive crypto rewards program available. Beyond cashback, cardholders earn CRO staking rewards, subscription rebates worth up to $167/month", "url": "https://degen0x.com/spending/best/rewards", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
  );
}
