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
  title: `Best Crypto Rewards Cards of ${CURRENT_YEAR} - Maximize Your Earnings`,
  description: `Compare the best crypto rewards cards of ${CURRENT_YEAR}. Earn Bitcoin, ETH, and more on every purchase. We tested reward programs, perks, and earning potential.`,
  alternates: { canonical: "/crypto-cards/best/rewards" }};

const rewardsCards = [
  cryptoCards.find((c) => c.slug === "crypto-com-visa")!,
  cryptoCards.find((c) => c.slug === "fold-card")!,
  cryptoCards.find((c) => c.slug === "gemini-card")!,
  cryptoCards.find((c) => c.slug === "coinbase-card")!,
  cryptoCards.find((c) => c.slug === "rain-card")!,
  cryptoCards.find((c) => c.slug === "plutus-card")!,
  cryptoCards.find((c) => c.slug === "nexo-card")!,
];

const faqs = [
  {
    question: "What is a crypto rewards card?",
    answer: "A crypto rewards card earns you cryptocurrency on your purchases instead of traditional points, miles, or cash back. Some cards let you choose which crypto you earn (BTC, ETH, etc.), while others pay in the platform native token. The rewards are deposited into an associated crypto wallet or exchange account.",
  },
  {
    question: "Which crypto rewards card earns the most?",
    answer: "The Crypto.com Visa offers the highest potential rewards at up to 5% plus premium perks like streaming reimbursements. For flat-rate simplicity, the Fold Card Premium guarantees 1.5% in Bitcoin. The Gemini Credit Card earns up to 3% at restaurants. The best card for you depends on your spending habits and staking willingness.",
  },
  {
    question: "Can I choose which cryptocurrency I earn?",
    answer: "Some cards allow you to choose. The Coinbase Card lets you select from dozens of supported cryptocurrencies. The Gemini Credit Card offers 60+ options. Others like the Fold Card only earn Bitcoin, and cards like Crypto.com pay exclusively in CRO.",
  },
  {
    question: "Are crypto rewards better than airline miles or hotel points?",
    answer: "It depends on your goals. If you believe crypto will appreciate over time, earning 2% in Bitcoin could outperform 2x airline miles. However, airline miles offer predictable value for frequent travelers. Crypto rewards add volatility risk but also upside potential.",
  },
  {
    question: "Do crypto rewards cards have higher fees than regular cards?",
    answer: "Not necessarily. Many top crypto rewards cards like the Gemini Credit Card, Rain Card, and Crypto.com Visa charge no annual fee. Fees are comparable to traditional rewards cards, though some crypto debit cards charge conversion spreads that can eat into rewards.",
  },
  {
    question: "What happens to my rewards if the crypto market crashes?",
    answer: "Your rewards are denominated in cryptocurrency, so their dollar value fluctuates with the market. A 2% Bitcoin reward earned during a bull market is worth less in dollars during a bear market. However, you still own the underlying crypto, which could recover over time.",
  },
];

export default function BestRewardsCardsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Cards", href: "/crypto-cards" },
          { label: "Best Crypto Cards", href: "/crypto-cards/best" },
          { label: "Rewards", href: "/crypto-cards/best/rewards" },
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
          Crypto rewards cards turn your everyday spending into a passive crypto accumulation
          strategy. Whether you earn Bitcoin at the grocery store, Ethereum at restaurants, or
          choose from dozens of altcoins, these cards make it effortless to build your crypto
          portfolio without actively trading. We evaluated each card on the total value of its
          rewards program, including cashback rates, bonus categories, perks, and the quality
          of the reward token.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">What Sets Rewards Cards Apart from Cashback Cards</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          While cashback and rewards overlap, we define rewards cards more broadly to include
          cards with tiered earning categories, sign-up bonuses, loyalty perks like streaming
          reimbursements and lounge access, and flexible reward redemption options. A pure
          cashback card might offer a flat rate, while a rewards card provides a richer
          ecosystem of earning opportunities.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Our Top Picks</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          The <strong className="text-[var(--color-text)]">Crypto.com Visa</strong> dominates with its
          combination of high cashback, Spotify and Netflix reimbursements, airport lounge
          access, and earn-rate boosts. The <strong className="text-[var(--color-text)]">Fold Card</strong> offers
          a unique gamified Bitcoin rewards experience with its spin-the-wheel mechanic. The{" "}
          <strong className="text-[var(--color-text)]">Gemini Credit Card</strong> is the best traditional
          credit card option with tiered category rewards and 60+ crypto choices.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {rewardsCards.map((card, index) => (
          <ProductCard
            key={card.slug}
            product={card}
            rank={index + 1}
            categorySlug="crypto-cards"
          />
        ))}
      </div>

      {/* Rewards Ecosystem Comparison */}
      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Rewards Ecosystem Comparison</h2>
        <div className="space-y-4 text-[var(--color-text-secondary)]">
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">1.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Most comprehensive rewards: Crypto.com Visa</h3>
              <p className="text-sm">Cashback plus streaming reimbursements, airport lounges, earn-rate boosts, and ATM withdrawal allowances. The richest total rewards package available.</p>
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
            <span className="text-[var(--color-primary)] font-bold text-lg">2.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Most fun to use: Fold Card</h3>
              <p className="text-sm">Spin-the-wheel after every purchase with a chance to earn up to 100% back in Bitcoin. Gamified rewards keep you engaged with every swipe.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">3.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Best category earnings: Gemini Credit Card</h3>
              <p className="text-sm">3% at dining, 2% at groceries, 1% everywhere else. Choose from 60+ cryptocurrencies. Functions exactly like a traditional rewards credit card.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">4.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Most flexible reward choices: Coinbase Card</h3>
              <p className="text-sm">Pick your reward crypto from over 100 options in the Coinbase ecosystem. Switch reward tokens anytime without penalty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Our Methodology</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Our rewards card rankings consider the full value proposition beyond raw cashback rates:
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
            <span><strong className="text-[var(--color-text)]">Total reward value (30%):</strong> Combined value of cashback, bonuses, and ancillary perks like streaming and lounge access.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-primary)]">&#8226;</span>
            <span><strong className="text-[var(--color-text)]">Reward flexibility (20%):</strong> Choice of reward tokens, ease of redemption, and ability to customize earning preferences.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-primary)]">&#8226;</span>
            <span><strong className="text-[var(--color-text)]">Earning consistency (20%):</strong> Reliability of earning rates and the issuer track record of maintaining reward programs.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-primary)]">&#8226;</span>
            <span><strong className="text-[var(--color-text)]">Fees and costs (15%):</strong> Net reward value after accounting for annual fees, staking costs, and conversion spreads.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-primary)]">&#8226;</span>
            <span><strong className="text-[var(--color-text)]">Ecosystem benefits (15%):</strong> Additional platform perks, loyalty tiers, and synergies with the issuer broader product suite.</span>
          </li>
        </ul>
      </section>

      {/* Related Links */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Related Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Best Crypto Cashback Cards", href: "/crypto-cards/best/cashback" },
            { title: "Best Cards for Staking Rewards", href: "/crypto-cards/best/staking-rewards" },
            { title: "Best Crypto Cards for Beginners", href: "/crypto-cards/best/beginners" },
            { title: "How Crypto Cards Work", href: "/crypto-cards/learn/how-crypto-cards-work" },
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
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Best Crypto Cashback Cards", "description": "Crypto content on degen0x", "url": "https://degen0x.com/crypto-cards/best/rewards"}) }} />
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
