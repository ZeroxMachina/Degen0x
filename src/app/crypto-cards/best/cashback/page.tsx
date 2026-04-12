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
  title: `Best Crypto Cashback Cards of ${CURRENT_YEAR} - Earn Up to 8% Back`,
  description: `Compare the best crypto cashback cards of ${CURRENT_YEAR}. Earn up to 8% back in Bitcoin, ETH, or other crypto on every purchase. Expert-tested rankings and reviews.`,
  alternates: { canonical: "/crypto-cards/best/cashback" }};

const cashbackCards = [
  cryptoCards.find((c) => c.slug === "crypto-com-visa")!,
  cryptoCards.find((c) => c.slug === "binance-card")!,
  cryptoCards.find((c) => c.slug === "fold-card")!,
  cryptoCards.find((c) => c.slug === "coinbase-card")!,
  cryptoCards.find((c) => c.slug === "wirex-card")!,
  cryptoCards.find((c) => c.slug === "gemini-card")!,
  cryptoCards.find((c) => c.slug === "plutus-card")!,
];

const faqs = [
  {
    question: "Which crypto card has the highest cashback rate?",
    answer: "The Binance Card offers up to 8% cashback for users who hold 600+ BNB, while the Wirex Card also advertises up to 8% with WXT staking. For most users without significant token holdings, the Crypto.com Visa at 1%–5% and the Coinbase Card at up to 4% offer the most accessible high-rate cashback.",
  },
  {
    question: "Is crypto cashback the same as regular cash back?",
    answer: "Crypto cashback works similarly to traditional cash back in that you earn a percentage of your spending. The key difference is that rewards are paid in cryptocurrency instead of dollars. This means your cashback value can increase if the token appreciates, but it can also decrease if prices drop.",
  },
  {
    question: "Do I need to stake tokens to get the best cashback rates?",
    answer: "Many crypto cards require staking the platform native token (like CRO, BNB, or WXT) to unlock the highest cashback tiers. Cards like the Coinbase Card and Rain Card offer their rewards without any staking requirement, though typically at lower rates.",
  },
  {
    question: "Are crypto cashback rewards taxable?",
    answer: "In the US, cashback earned from spending is generally treated like a purchase discount and is not taxable at the time of receipt. However, when you later sell or trade those crypto rewards, any gain is subject to capital gains tax. Tax rules vary by country, so consult a local tax professional.",
  },
  {
    question: "Can I convert my crypto cashback to cash?",
    answer: "Yes. Most cards deposit rewards into an associated exchange or wallet account where you can sell the crypto for fiat currency and withdraw to your bank. The ease of doing so depends on the platform, but major issuers like Coinbase and Crypto.com make it straightforward.",
  },
  {
    question: "Do cashback rates ever change?",
    answer: "Yes, crypto card issuers have historically adjusted cashback rates. Crypto.com, for example, has reduced its reward tiers several times since launch. It is important to read the current terms and not rely solely on promotional rates when choosing a card.",
  },
];

export default function BestCashbackCardsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Cards", href: "/crypto-cards" },
          { label: "Best Crypto Cards", href: "/crypto-cards/best" },
          { label: "Cashback", href: "/crypto-cards/best/cashback" },
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
          Crypto cashback cards let you earn cryptocurrency on everyday purchases, effectively
          dollar-cost averaging into digital assets every time you buy groceries, fill up your
          tank, or pay for dinner. The best cards offer rates ranging from 1% to 8% back, though
          the highest tiers often require staking the platform native token.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">How We Ranked These Cards</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          We ranked cashback cards primarily by the effective cashback rate available to most
          users without extreme staking requirements. We also factored in the liquidity and
          stability of the reward token, fees that could offset earnings, and the overall
          reliability of the issuer. A card paying 8% in an illiquid token you cannot easily
          sell is worth less than a card paying 3% in Bitcoin.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Our Top Picks</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          The <strong className="text-[var(--color-text)]">Crypto.com Visa</strong> leads our cashback rankings
          thanks to its tiered rewards up to 5% with accessible staking thresholds and zero
          annual fees. The <strong className="text-[var(--color-text)]">Binance Card</strong> offers the absolute
          highest rate at 8% but requires substantial BNB holdings. For a no-staking option,
          the <strong className="text-[var(--color-text)]">Fold Card</strong> earns Bitcoin on every purchase
          with its unique spin-the-wheel rewards.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {cashbackCards.map((card, index) => (
          <ProductCard
            key={card.slug}
            product={card}
            rank={index + 1}
            categorySlug="crypto-cards"
          />
        ))}
      </div>

      {/* Cashback Comparison */}
      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Cashback Rate Breakdown</h2>
        <div className="space-y-4 text-[var(--color-text-secondary)]">
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg shrink-0">8%</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Binance Card / Wirex Card</h3>
              <p className="text-sm">Maximum tier requiring significant token staking (600+ BNB or high WXT holdings). Achievable for large portfolio holders.</p>
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
            <span className="text-[var(--color-primary)] font-bold text-lg shrink-0">5%</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Crypto.com Visa (Icy White / Obsidian)</h3>
              <p className="text-sm">Requires $40,000+ CRO staking. Includes premium perks like airport lounges and streaming reimbursements.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg shrink-0">4%</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Coinbase Card</h3>
              <p className="text-sm">Up to 4% back in select crypto rewards. No staking required, though top rates are limited to certain reward tokens.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg shrink-0">3%</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Gemini Credit Card</h3>
              <p className="text-sm">3% at restaurants, 2% at groceries, 1% on everything else. No staking needed; true credit card.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg shrink-0">1.5%</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Fold Card (Premium) / Rain Card</h3>
              <p className="text-sm">Guaranteed flat rates in Bitcoin. Fold+ costs $150/year; Rain has no annual fee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Our Methodology</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          For cashback-focused rankings, we weight our evaluation criteria to prioritize
          effective reward rates and the real-world value of the rewards earned:
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
        <ul className="space-y-2 text-[var(--color-text-secondary)]">
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-primary)]">&#8226;</span>
            <span><strong className="text-[var(--color-text)]">Effective cashback rate (35%):</strong> The actual percentage earned by a typical user without extreme staking requirements.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-primary)]">&#8226;</span>
            <span><strong className="text-[var(--color-text)]">Reward token quality (25%):</strong> Liquidity, market cap, and exchange availability of the reward cryptocurrency.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-primary)]">&#8226;</span>
            <span><strong className="text-[var(--color-text)]">Fee impact (20%):</strong> Annual fees, conversion spreads, and hidden costs that could offset cashback earnings.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-primary)]">&#8226;</span>
            <span><strong className="text-[var(--color-text)]">Accessibility (10%):</strong> Geographic availability and ease of qualifying for the card.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-primary)]">&#8226;</span>
            <span><strong className="text-[var(--color-text)]">Issuer reliability (10%):</strong> Track record of honoring cashback rates and financial stability of the issuer.</span>
          </li>
        </ul>
      </section>

      {/* Related Links */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Related Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Best Crypto Rewards Cards", href: "/crypto-cards/best/rewards" },
            { title: "Best Free Crypto Cards", href: "/crypto-cards/best/no-annual-fee" },
            { title: "How Crypto Cards Work", href: "/crypto-cards/learn/how-crypto-cards-work" },
            { title: "Tax Implications of Crypto Rewards", href: "/crypto-cards/learn/tax-implications" },
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
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Best Crypto Rewards Cards", "description": "Crypto content on degen0x", "url": "https://degen0x.com/crypto-cards/best/cashback"}) }} />
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
