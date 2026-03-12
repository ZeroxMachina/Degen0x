import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { exchanges } from "@/data/exchanges";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto Exchanges for Beginners in ${CURRENT_YEAR}`,
  description: `New to crypto? Compare the most beginner-friendly exchanges of ${CURRENT_YEAR}. Easy sign-up, intuitive interfaces, learning resources, and low minimums.`,
};

const beginnerExchanges = [
  exchanges.find((e) => e.slug === "coinbase")!,
  exchanges.find((e) => e.slug === "kraken")!,
  exchanges.find((e) => e.slug === "gemini")!,
  exchanges.find((e) => e.slug === "crypto-com")!,
  exchanges.find((e) => e.slug === "binance")!,
];

const faqs = [
  {
    question: "What is the easiest crypto exchange to use?",
    answer: "Coinbase is widely considered the easiest exchange for beginners. Its simple buy/sell interface removes complexity, and Coinbase Learn provides educational resources that reward you with free crypto. Kraken and Gemini are also excellent beginner-friendly options.",
  },
  {
    question: "How much money do I need to start buying crypto?",
    answer: "You can start with as little as $1 on most exchanges. Coinbase requires a $2 minimum purchase, Kraken starts at $1, and Crypto.com allows purchases starting at $1. You do not need to buy a whole Bitcoin; you can purchase fractional amounts.",
  },
  {
    question: "Is crypto safe for beginners?",
    answer: "Crypto itself is not inherently unsafe, but beginners should take precautions: use reputable regulated exchanges, enable two-factor authentication, never share your passwords or seed phrases, start with small amounts, and stick to well-known cryptocurrencies like Bitcoin and Ethereum.",
  },
  {
    question: "Should I use a crypto exchange or a crypto app?",
    answer: "For beginners, the distinction barely matters. Apps like Coinbase and Crypto.com function as exchanges with simpler interfaces. As you gain experience, you might want a dedicated exchange interface with more features and lower fees.",
  },
  {
    question: "What crypto should a beginner buy first?",
    answer: "Most experts suggest beginners start with Bitcoin (BTC) or Ethereum (ETH). These are the largest, most established cryptocurrencies with the most liquidity. Once comfortable, you can explore other assets, but always research thoroughly before investing.",
  },
];

export default function BestForBeginnersPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Exchanges", href: "/exchanges" },
          { label: "Best Exchanges", href: "/exchanges/best" },
          { label: "For Beginners", href: "/exchanges/best/beginners" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Crypto Exchanges for Beginners ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Getting started with cryptocurrency can feel overwhelming. With hundreds of exchanges
          to choose from, finding one that is intuitive, secure, and welcoming to newcomers is
          crucial. We have tested and ranked the best exchanges specifically for beginners,
          focusing on ease of use, educational resources, customer support quality, and how
          quickly you can go from zero to your first crypto purchase.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">What Makes an Exchange Beginner-Friendly?</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          A good beginner exchange should offer a clean, uncluttered interface that does not
          overwhelm you with charts and technical jargon. It should provide simple buy/sell
          functionality, accept common payment methods like bank transfers and debit cards,
          offer responsive customer support, and ideally include learning resources to help you
          understand what you are doing. Security is also paramount since beginners are more
          susceptible to scams and phishing attacks.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Our Top Picks</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          <strong className="text-[var(--color-text)]">Coinbase</strong> takes the top spot for beginners with
          its intuitive interface, earn-while-you-learn program, and strong US regulatory
          compliance. <strong className="text-[var(--color-text)]">Kraken</strong> comes in second with its
          excellent customer support and solid educational content. <strong className="text-[var(--color-text)]">Gemini</strong> rounds
          out the top three with its SOC 2 security certification giving newcomers peace of mind.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {beginnerExchanges.map((exchange, index) => (
          <ProductCard
            key={exchange.slug}
            product={exchange}
            rank={index + 1}
            categorySlug="exchanges"
          />
        ))}
      </div>

      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Tips for Crypto Beginners</h2>
        <div className="space-y-4 text-[var(--color-text-secondary)]">
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">1.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Start small</h3>
              <p className="text-sm">Only invest money you can afford to lose. Start with $50 or $100 to learn the ropes before committing larger amounts.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">2.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Enable two-factor authentication</h3>
              <p className="text-sm">Use an authenticator app (not SMS) for 2FA on your exchange account. This is the single most important security step.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">3.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Learn about fees before trading</h3>
              <p className="text-sm">Understand the fee structure of your chosen exchange. Simple buy/sell interfaces often charge higher fees than advanced trading views.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">4.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Consider dollar-cost averaging</h3>
              <p className="text-sm">Instead of trying to time the market, set up recurring purchases to buy a fixed dollar amount regularly, smoothing out price volatility.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">5.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Never share your seed phrase</h3>
              <p className="text-sm">If you move crypto to a personal wallet, your seed phrase is the master key. Never share it, and store it offline in a secure location.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
