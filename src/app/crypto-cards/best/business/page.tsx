import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { cryptoCards } from "@/data/crypto-cards";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto Business Cards of ${CURRENT_YEAR}`,
  description: `Compare the best crypto cards for businesses and freelancers in ${CURRENT_YEAR}. Earn crypto on business expenses, manage team spending, and simplify expense tracking.`,
};

const businessCards = [
  cryptoCards.find((c) => c.slug === "nexo-card")!,
  cryptoCards.find((c) => c.slug === "crypto-com-visa")!,
  cryptoCards.find((c) => c.slug === "gnosis-card")!,
  cryptoCards.find((c) => c.slug === "baanx-card")!,
  cryptoCards.find((c) => c.slug === "bybit-card")!,
  cryptoCards.find((c) => c.slug === "wirex-card")!,
];

const faqs = [
  {
    question: "Are there dedicated crypto business cards?",
    answer: "The crypto card market is still maturing for business use cases. While most cards are designed for personal use, several are suitable for freelancers and small businesses. The Nexo Card is popular for business owners who want to spend against their crypto treasury without selling. Gnosis Pay serves DAOs and Web3 businesses directly.",
  },
  {
    question: "Can I use a personal crypto card for business expenses?",
    answer: "Most crypto card terms of service are designed for personal use. Using them for business expenses may violate the terms and create complications for expense tracking and tax reporting. Check the specific card issuer terms before using a personal card for business purposes.",
  },
  {
    question: "How do crypto cards help with business treasury management?",
    answer: "Cards like the Nexo Card let you spend against your crypto holdings as collateral, keeping your treasury invested while accessing liquidity. This is valuable for businesses that hold crypto on their balance sheet but need fiat for operational expenses without triggering taxable disposal events.",
  },
  {
    question: "Can I get expense reports from crypto card transactions?",
    answer: "Most crypto cards provide transaction history through their apps and some offer CSV exports for accounting. However, the expense management features are generally less robust than dedicated business cards from traditional providers. You may need to use additional software for proper expense categorization.",
  },
  {
    question: "Are crypto card rewards considered business income?",
    answer: "Tax treatment of crypto card rewards for businesses is complex and varies by jurisdiction. Rewards earned from business spending may be treated as rebates (not taxable) or income (taxable). The distinction can depend on whether the card is classified as a credit card versus a debit card. Consult a crypto-savvy accountant.",
  },
  {
    question: "What about crypto cards for DAOs and Web3 companies?",
    answer: "Gnosis Pay is specifically designed for Web3 organizations, letting you spend directly from a Gnosis Safe multisig wallet. This is groundbreaking for DAOs that need to convert on-chain treasury to real-world spending without centralized intermediaries. Baanx also offers white-label solutions for crypto businesses.",
  },
];

export default function BestBusinessCardsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Cards", href: "/crypto-cards" },
          { label: "Best Crypto Cards", href: "/crypto-cards/best" },
          { label: "Business", href: "/crypto-cards/best/business" },
        ]}
      />

      <h1 className="text-4xl font-bold text-white mb-4">
        Best Crypto Business Cards ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Businesses and freelancers in the crypto space need payment solutions that bridge
          on-chain assets and real-world expenses. Whether you run a Web3 startup with a crypto
          treasury, freelance and get paid in crypto, or manage a DAO with on-chain funds, the
          right crypto card can simplify spending while keeping your digital assets working for
          you. We evaluated cards specifically suited for business and professional use cases.
        </p>
        <h2 className="text-xl font-bold text-white mt-8 mb-4">Business Use Cases for Crypto Cards</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          The most common business use cases include spending from a crypto treasury without
          selling assets (using the Nexo Card credit-line model), managing DAO operational
          expenses through on-chain wallets (via Gnosis Pay), earning crypto rewards on business
          expenses to grow company holdings, and simplifying international payments for remote
          teams with zero foreign transaction fees.
        </p>
        <h2 className="text-xl font-bold text-white mt-8 mb-4">Our Top Picks</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          The <strong className="text-white">Nexo Card</strong> is our top business pick for its
          credit-line model that lets businesses spend against crypto holdings without triggering
          taxable events. <strong className="text-white">Gnosis Pay</strong> is revolutionary for
          DAOs and Web3-native organizations spending directly from Safe wallets. The{" "}
          <strong className="text-white">Crypto.com Visa</strong> offers high cashback rates that
          can offset significant business expenses.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {businessCards.map((card, index) => (
          <ProductCard
            key={card.slug}
            product={card}
            rank={index + 1}
            categorySlug="crypto-cards"
          />
        ))}
      </div>

      {/* Business Scenarios */}
      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Best Card by Business Type</h2>
        <div className="space-y-4 text-[var(--color-text-secondary)]">
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">1.</span>
            <div>
              <h3 className="text-white font-semibold">Freelancers paid in crypto: Nexo Card</h3>
              <p className="text-sm">Deposit your crypto earnings as collateral and spend from the credit line for daily expenses. Your crypto stays invested and you only pay interest on what you spend. Ideal for freelancers who earn in BTC or ETH.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">2.</span>
            <div>
              <h3 className="text-white font-semibold">DAOs and Web3 organizations: Gnosis Pay</h3>
              <p className="text-sm">Spend directly from a Gnosis Safe multisig wallet. No need to bridge funds to centralized platforms. Governance-approved spending flows directly to the card.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">3.</span>
            <div>
              <h3 className="text-white font-semibold">Small businesses wanting crypto rewards: Crypto.com Visa</h3>
              <p className="text-sm">High cashback rates on operational spending build your crypto position passively. Zero foreign fees help international businesses save on cross-border expenses.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">4.</span>
            <div>
              <h3 className="text-white font-semibold">Crypto-native startups: Baanx Card</h3>
              <p className="text-sm">White-label card infrastructure and crypto-native banking features. Designed for businesses operating in the digital asset space with direct crypto-to-fiat spending.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Our Methodology</h2>
        <p className="text-[var(--color-text-secondary)]">
          Business card rankings prioritize spending limits and flexibility (25%), treasury
          management capabilities (25%), expense tracking and reporting features (20%), reward
          value on typical business spending categories (15%), and international payment support
          (15%). We evaluate each card from the perspective of three business archetypes:
          freelancers, Web3 startups, and traditional small businesses that hold crypto.
        </p>
      </section>

      {/* Related Links */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Related Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Best Crypto Cards for High Spenders", href: "/crypto-cards/best/high-spenders" },
            { title: "Best Crypto Cards for Travel", href: "/crypto-cards/best/travel" },
            { title: "Web3 Business Tools", href: "/web3-business/best/dao-tools" },
            { title: "Crypto-Friendly Business Banking", href: "/web3-business/best/business-banking" },
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
