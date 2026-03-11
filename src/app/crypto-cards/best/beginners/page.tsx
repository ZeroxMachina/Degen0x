import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { cryptoCards } from "@/data/crypto-cards";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto Cards for Beginners in ${CURRENT_YEAR}`,
  description: `New to crypto cards? Compare the most beginner-friendly crypto cards of ${CURRENT_YEAR}. Simple setup, no staking required, and easy-to-understand rewards.`,
};

const beginnerCards = [
  cryptoCards.find((c) => c.slug === "coinbase-card")!,
  cryptoCards.find((c) => c.slug === "rain-card")!,
  cryptoCards.find((c) => c.slug === "gemini-card")!,
  cryptoCards.find((c) => c.slug === "crypto-com-visa")!,
  cryptoCards.find((c) => c.slug === "fold-card")!,
  cryptoCards.find((c) => c.slug === "bitpay-card")!,
];

const faqs = [
  {
    question: "What is the easiest crypto card to get started with?",
    answer: "The Coinbase Card is the easiest to get started with if you already have a Coinbase account. Simply order the card, and you can spend your crypto balance immediately. The Rain Card is the easiest if you want a traditional credit card experience with automatic Bitcoin rewards.",
  },
  {
    question: "Do I need to own crypto to use a crypto card?",
    answer: "Not always. Credit cards like the Gemini Credit Card and Rain Card work like normal credit cards; you pay with dollars and earn crypto rewards. Debit cards like the Coinbase Card and BitPay Card do require you to hold crypto or fiat in your account to spend.",
  },
  {
    question: "Is a crypto credit card or debit card better for beginners?",
    answer: "A crypto credit card is often better for beginners because it works exactly like a traditional credit card. You spend dollars, pay your bill monthly, and earn crypto rewards without needing to understand crypto wallets or conversions. A crypto debit card requires managing a crypto balance.",
  },
  {
    question: "Do I need to understand blockchain to use a crypto card?",
    answer: "No. Crypto cards work just like any Visa or Mastercard at the point of sale. The crypto conversion or reward earning happens automatically behind the scenes. You do not need to understand blockchain, wallets, or private keys to use one effectively.",
  },
  {
    question: "What are the risks of using a crypto card?",
    answer: "The main risks are crypto price volatility (your reward value can decrease), potential conversion fees when spending crypto, and the possibility that the card issuer could change reward rates. For credit cards, the same risks as traditional credit cards apply, including interest charges on carried balances.",
  },
  {
    question: "How do I get my first crypto card?",
    answer: "For the Coinbase Card, create a Coinbase account, complete identity verification, and order the card from the app. For the Rain Card or Gemini Card, apply online with a credit check like any traditional credit card. For Crypto.com, download the app, create an account, and select your card tier.",
  },
];

export default function BestBeginnersCardsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Cards", href: "/crypto-cards" },
          { label: "Best Crypto Cards", href: "/crypto-cards/best" },
          { label: "For Beginners", href: "/crypto-cards/best/beginners" },
        ]}
      />

      <h1 className="text-4xl font-bold text-white mb-4">
        Best Crypto Cards for Beginners ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Getting your first crypto card should not feel intimidating. The best beginner crypto
          cards require no staking, no complex setup, and no deep understanding of
          cryptocurrency mechanics. They work like normal payment cards while quietly building
          your crypto portfolio with every purchase. We ranked these cards based on simplicity
          of setup, clarity of rewards, and overall ease of use.
        </p>
        <h2 className="text-xl font-bold text-white mt-8 mb-4">What Makes a Crypto Card Beginner-Friendly</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          A beginner-friendly crypto card should have a simple application process, no staking
          requirements, transparent fee structures, straightforward rewards that are easy to
          understand, and integration with a well-known platform. Ideally, it should function
          identically to a traditional card at the point of sale so you do not need to explain
          anything special to merchants or worry about technical issues.
        </p>
        <h2 className="text-xl font-bold text-white mt-8 mb-4">Our Top Picks</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          The <strong className="text-white">Coinbase Card</strong> is our top beginner pick
          thanks to its seamless integration with the Coinbase app, which millions of users
          already know and trust. The <strong className="text-white">Rain Card</strong> is perfect
          for beginners who want a normal credit card with Bitcoin rewards and zero crypto
          knowledge required. The <strong className="text-white">Gemini Credit Card</strong> rounds
          out the top three with its familiar credit card structure and choice of 60+ reward tokens.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {beginnerCards.map((card, index) => (
          <ProductCard
            key={card.slug}
            product={card}
            rank={index + 1}
            categorySlug="crypto-cards"
          />
        ))}
      </div>

      {/* Getting Started Guide */}
      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Getting Started with Your First Crypto Card</h2>
        <div className="space-y-4 text-[var(--color-text-secondary)]">
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">1.</span>
            <div>
              <h3 className="text-white font-semibold">Choose your card type</h3>
              <p className="text-sm">Decide between a credit card (works like any credit card, earns crypto rewards) or a debit card (spends from your crypto balance). Credit cards are easier for true beginners.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">2.</span>
            <div>
              <h3 className="text-white font-semibold">Create an account with the issuer</h3>
              <p className="text-sm">Sign up on Coinbase, Gemini, or Crypto.com. You will need to complete identity verification (KYC), which typically requires a photo ID and takes a few minutes.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">3.</span>
            <div>
              <h3 className="text-white font-semibold">Apply for the card</h3>
              <p className="text-sm">For credit cards like Rain and Gemini, there will be a credit check. For debit cards like Coinbase, approval is typically instant once your account is verified.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">4.</span>
            <div>
              <h3 className="text-white font-semibold">Select your reward preferences</h3>
              <p className="text-sm">If your card lets you choose which crypto to earn, start with Bitcoin or Ethereum. These are the most established, liquid, and widely understood cryptocurrencies.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">5.</span>
            <div>
              <h3 className="text-white font-semibold">Start spending normally</h3>
              <p className="text-sm">Use your card for everyday purchases just like any other payment card. Your crypto rewards will accumulate automatically in your account with no extra effort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Our Methodology</h2>
        <p className="text-[var(--color-text-secondary)]">
          For beginner rankings, we prioritize ease of use above all else. Our evaluation
          weighs simplicity of application and onboarding (30%), clarity of reward structure
          (25%), no staking or complex requirements (20%), platform trustworthiness and
          brand recognition (15%), and quality of educational resources and customer support
          (10%). We test the entire sign-up flow from a newcomer perspective and evaluate
          how well each card explains its own features.
        </p>
      </section>

      {/* Related Links */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Related Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "How Crypto Cards Work", href: "/crypto-cards/learn/how-crypto-cards-work" },
            { title: "Best Free Crypto Cards", href: "/crypto-cards/best/no-annual-fee" },
            { title: "Credit vs Debit vs Prepaid", href: "/crypto-cards/learn/credit-vs-debit-vs-prepaid" },
            { title: "Best Exchanges for Beginners", href: "/exchanges/best/beginners" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover block"
            >
              <span className="text-white font-semibold">{link.title}</span>
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
