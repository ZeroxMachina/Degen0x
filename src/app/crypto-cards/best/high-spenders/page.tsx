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
  title: `Best Crypto Cards for High Spenders in ${CURRENT_YEAR}`,
  description: `Compare the best crypto cards for high spenders in ${CURRENT_YEAR}. Premium perks, highest cashback tiers, airport lounges, and elite benefits for big spenders.`,
  alternates: { canonical: "/crypto-cards/best/high-spenders" }};

const highSpenderCards = [
  cryptoCards.find((c) => c.slug === "crypto-com-visa")!,
  cryptoCards.find((c) => c.slug === "binance-card")!,
  cryptoCards.find((c) => c.slug === "nexo-card")!,
  cryptoCards.find((c) => c.slug === "plutus-card")!,
  cryptoCards.find((c) => c.slug === "wirex-card")!,
  cryptoCards.find((c) => c.slug === "gemini-card")!,
];

const faqs = [
  {
    question: "Which crypto card gives the highest rewards for big spenders?",
    answer: "The Crypto.com Visa Obsidian card offers 5% cashback with no monthly spending cap, plus a $1,000 monthly ATM allowance, airport lounge access, and streaming reimbursements. The Binance Card offers up to 8% but is not available in the US. For credit card spenders, the Gemini Credit Card offers uncapped 3% at restaurants.",
  },
  {
    question: "Is there a spending cap on crypto card rewards?",
    answer: "Spending caps vary by issuer. The Crypto.com Visa has reduced its monthly cashback caps over time but still offers generous limits at higher tiers. The Gemini Credit Card has uncapped rewards. Always check current terms, as issuers can change caps at any time.",
  },
  {
    question: "Do high-tier crypto cards justify the staking cost?",
    answer: "It depends on your spending volume. For the Crypto.com Icy White (5% cashback, $40,000 CRO stake), spending $5,000 per month earns $250 in cashback, or $3,000 per year. Combined with streaming perks ($27/month) and lounge access, the total annual value can exceed $3,300, making it worthwhile for consistent high spenders.",
  },
  {
    question: "What premium perks are available on crypto cards?",
    answer: "Top-tier crypto cards offer airport lounge access (LoungeKey), streaming service reimbursements (Spotify, Netflix, Amazon Prime), higher ATM withdrawal limits, priority customer support, enhanced earn rates on crypto deposits, and exclusive event access.",
  },
  {
    question: "Can I use a crypto card for large business expenses?",
    answer: "Some crypto cards have daily and monthly spending limits that may restrict very large transactions. The Crypto.com Obsidian has the highest limits. For business expenses, consider whether the card is designed for personal or business use and check the issuer terms regarding commercial spending.",
  },
  {
    question: "How do crypto cards compare to Amex Platinum or Chase Sapphire for high spenders?",
    answer: "Traditional premium cards like Amex Platinum excel in travel-specific perks, purchase protection, and established loyalty programs. Crypto cards compete on raw cashback rates (up to 5%–8% vs 1%–5x points) and appeal to those who want to accumulate crypto. The best strategy for many high spenders is to use both types for different spending categories.",
  },
];

export default function BestHighSpendersCardsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Cards", href: "/crypto-cards" },
          { label: "Best Crypto Cards", href: "/crypto-cards/best" },
          { label: "High Spenders", href: "/crypto-cards/best/high-spenders" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Crypto Cards for High Spenders ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          If you spend $5,000 or more per month, the right crypto card can earn you
          thousands of dollars in crypto rewards annually. High-spending tiers on crypto
          cards unlock premium perks that rival traditional luxury credit cards, including
          airport lounge access, concierge services, and elevated earn rates. We ranked
          the best cards for users who want maximum value from high monthly spending.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Why High Spenders Benefit Most from Crypto Cards</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Crypto card rewards scale linearly with spending, so high spenders earn the most.
          A 5% cashback rate on $10,000 monthly spending generates $500 in crypto per month,
          or $6,000 per year. If that crypto appreciates, the effective return is even higher.
          Premium tiers also come with perks that have fixed dollar value (lounge access,
          streaming) regardless of spending, further boosting the return for users who would
          pay for those services anyway.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Our Top Picks</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          The <strong className="text-[var(--color-text)]">Crypto.com Visa Obsidian</strong> is the undisputed
          king for high spenders with 5% cashback, full premium perks, and the highest spending
          limits. The <strong className="text-[var(--color-text)]">Binance Card</strong> offers 8% for major BNB
          holders outside the US. The <strong className="text-[var(--color-text)]">Nexo Card</strong> is unique
          for high-net-worth individuals who want to spend from their portfolio without selling
          and triggering taxable events.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {highSpenderCards.map((card, index) => (
          <ProductCard
            key={card.slug}
            product={card}
            rank={index + 1}
            categorySlug="crypto-cards"
          />
        ))}
      </div>

      {/* Annual Value Calculator */}
      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Estimated Annual Value at $5,000/Month Spending</h2>
        <div className="space-y-4 text-[var(--color-text-secondary)]">
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg shrink-0">$3,324</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Crypto.com Visa (Icy White / 5%)</h3>
              <p className="text-sm">$3,000 in cashback + $156 Spotify + $168 Netflix. Requires $40,000 CRO stake.</p>
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

          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg shrink-0">$4,800</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Binance Card (8% tier)</h3>
              <p className="text-sm">$4,800 in BNB cashback. Requires 600+ BNB stake (approx. $150,000+). Not US available.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg shrink-0">$2,400</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Coinbase Card (4% tier)</h3>
              <p className="text-sm">$2,400 in crypto rewards. No staking required but 2.49% spread on crypto spending may reduce effective rate.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg shrink-0">$1,200</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Nexo Card (2% + credit-line benefits)</h3>
              <p className="text-sm">$1,200 in BTC/NEXO rewards plus the tax benefit of not selling your crypto to fund spending.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Our Methodology</h2>
        <p className="text-[var(--color-text-secondary)]">
          High spender rankings are based on total annual value at $5,000 and $10,000 monthly
          spending levels. We calculate cashback earnings, perk values (streaming, lounges),
          and subtract all fees and staking opportunity costs. We weight uncapped or high-cap
          rewards (30%), premium perk value (25%), spending limits (20%), overall card
          experience (15%), and issuer stability (10%). Cards that deliver the highest net
          value for consistent $5,000+/month spenders rank highest.
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
            { title: "Best Crypto Cards with Staking Rewards", href: "/crypto-cards/best/staking-rewards" },
            { title: "Best Crypto Cards for Travel", href: "/crypto-cards/best/travel" },
            { title: "Best Crypto Business Cards", href: "/crypto-cards/best/business" },
            { title: "Best Crypto Cashback Cards", href: "/crypto-cards/best/cashback" },
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
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Best Crypto Cards with Staking Rewards", "description": "Crypto content on degen0x", "url": "https://degen0x.com/crypto-cards/best/high-spenders"}) }} />
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/learn" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            All Learning Guides
          </Link>
          <Link href="/tools" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Crypto Tools
          </Link>
          <Link href="/compare" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Compare Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
