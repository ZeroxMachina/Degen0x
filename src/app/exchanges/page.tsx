import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { exchanges } from "@/data/exchanges";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto Exchanges of ${CURRENT_YEAR} - Compare & Review`,
  description: `Compare the best cryptocurrency exchanges of ${CURRENT_YEAR}. Expert reviews, fee comparisons, security analysis, and tools to help you find the right exchange for your needs.`,
};

const bestOfLinks = [
  { title: "Best Exchanges Overall", href: "/exchanges/best", description: "Our top-rated exchanges across all categories" },
  { title: "Best for Beginners", href: "/exchanges/best/beginners", description: "Easy-to-use platforms for crypto newcomers" },
  { title: "Lowest Fee Exchanges", href: "/exchanges/best/low-fee", description: "Save money with the cheapest trading fees" },
  { title: "Best for Advanced Traders", href: "/exchanges/best/advanced-traders", description: "Professional tools and deep liquidity" },
  { title: "Best DEXs", href: "/exchanges/best/decentralized", description: "Trade without intermediaries" },
  { title: "Best for Staking", href: "/exchanges/best/staking-rewards", description: "Earn passive income on your holdings" },
  { title: "Best to Buy Bitcoin", href: "/exchanges/best/bitcoin", description: "The easiest ways to purchase BTC" },
  { title: "Best for Altcoins", href: "/exchanges/best/altcoins", description: "Access the widest selection of tokens" },
  { title: "Best in the US", href: "/exchanges/best/us", description: "Fully regulated US exchanges" },
  { title: "Most Secure", href: "/exchanges/best/security", description: "Top security features and track records" },
  { title: "Best Mobile Apps", href: "/exchanges/best/mobile-app", description: "Trade on the go with top-rated apps" },
  { title: "Best for Futures", href: "/exchanges/best/futures", description: "Derivatives and contract trading" },
  { title: "Best for Margin Trading", href: "/exchanges/best/margin-trading", description: "Leverage your positions" },
  { title: "Best No-KYC", href: "/exchanges/best/no-kyc", description: "Trade without identity verification" },
];

const reviewLinks = [
  { name: "Coinbase", slug: "coinbase" },
  { name: "Binance", slug: "binance" },
  { name: "Kraken", slug: "kraken" },
  { name: "Gemini", slug: "gemini" },
  { name: "Crypto.com", slug: "crypto-com" },
  { name: "KuCoin", slug: "kucoin" },
  { name: "Bybit", slug: "bybit" },
  { name: "OKX", slug: "okx" },
  { name: "Bitget", slug: "bitget" },
  { name: "Gate.io", slug: "gate-io" },
];

const compareLinks = [
  { title: "Coinbase vs Binance", href: "/exchanges/compare/coinbase-vs-binance" },
  { title: "Kraken vs Gemini", href: "/exchanges/compare/kraken-vs-gemini" },
  { title: "Coinbase vs Kraken", href: "/exchanges/compare/coinbase-vs-kraken" },
  { title: "Binance vs Bybit", href: "/exchanges/compare/binance-vs-bybit" },
  { title: "Crypto.com vs Coinbase", href: "/exchanges/compare/crypto-com-vs-coinbase" },
];

const learnLinks = [
  { title: "How to Buy Crypto", href: "/exchanges/learn/how-to-buy-crypto" },
  { title: "How to Choose an Exchange", href: "/exchanges/learn/how-to-choose-exchange" },
  { title: "Exchange Fees Explained", href: "/exchanges/learn/exchange-fees-explained" },
  { title: "CEX vs DEX", href: "/exchanges/learn/cex-vs-dex" },
  { title: "KYC Explained", href: "/exchanges/learn/kyc-explained" },
  { title: "Limit vs Market Orders", href: "/exchanges/learn/limit-vs-market-orders" },
  { title: "Spot vs Futures Trading", href: "/exchanges/learn/spot-vs-futures" },
  { title: "How to Read Charts", href: "/exchanges/learn/how-to-read-charts" },
  { title: "Exchange Security Tips", href: "/exchanges/learn/exchange-security-tips" },
];

const toolLinks = [
  { title: "Fee Calculator", href: "/exchanges/tools/fee-calculator", description: "Compare trading fees across exchanges" },
  { title: "DCA Calculator", href: "/exchanges/tools/dca-calculator", description: "Plan your dollar-cost averaging strategy" },
  { title: "Profit/Loss Calculator", href: "/exchanges/tools/profit-loss-calculator", description: "Calculate your crypto gains and losses" },
];

const faqs = [
  {
    question: "What is a cryptocurrency exchange?",
    answer: "A cryptocurrency exchange is a platform where you can buy, sell, and trade digital currencies like Bitcoin and Ethereum. Exchanges act as intermediaries that match buyers with sellers and facilitate transactions. They can be centralized (operated by a company) or decentralized (peer-to-peer).",
  },
  {
    question: "How do I choose the right crypto exchange?",
    answer: "Consider factors like security track record, fee structure, available cryptocurrencies, regulatory compliance, user interface, customer support, and available trading features. Beginners should prioritize ease of use and security, while advanced traders may want deep liquidity and advanced order types.",
  },
  {
    question: "Are crypto exchanges safe?",
    answer: "Reputable exchanges employ strong security measures including cold storage, two-factor authentication, and insurance funds. However, no exchange is 100% risk-free. It is generally recommended to store large amounts in a personal wallet rather than leaving funds on an exchange for extended periods.",
  },
  {
    question: "What fees do crypto exchanges charge?",
    answer: "Exchanges typically charge trading fees (maker/taker fees ranging from 0% to 0.5%), deposit fees (often free for crypto, variable for fiat), withdrawal fees (varies by cryptocurrency), and sometimes spread fees on simplified trading interfaces.",
  },
  {
    question: "Can I use a crypto exchange in the US?",
    answer: "Yes, several exchanges operate legally in the US including Coinbase, Kraken, and Gemini. However, some global exchanges like Binance and Bybit are not available to US residents. Always verify that an exchange is available in your state before signing up.",
  },
];

export default function ExchangesPage() {
  const topExchanges = [...exchanges].sort((a, b) => b.rating - a.rating).slice(0, 5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Best Crypto Exchanges of ${CURRENT_YEAR}`,
    description: `Compare the best cryptocurrency exchanges of ${CURRENT_YEAR}. Expert reviews, fee comparisons, and security analysis.`,
    url: "https://degen0x.com/exchanges",
    isPartOf: { "@type": "WebSite", name: SITE_NAME },
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
            { label: "Crypto Exchanges", href: "/exchanges" },
          ]}
        />

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
            Crypto Exchanges Hub
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            Your complete resource for comparing crypto exchanges. Find expert reviews,
            head-to-head comparisons, guides, and tools to help you choose the best
            exchange for your trading needs. Last updated {CURRENT_MONTH} {CURRENT_YEAR}.
          </p>
        </div>

        {/* Top Exchanges Quick Look */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[var(--color-text)]">Top-Rated Exchanges</h2>
            <Link
              href="/exchanges/best"
              className="text-[var(--color-primary)] hover:underline text-sm font-medium"
            >
              View all rankings &rarr;
            </Link>
          </div>
          <AffiliateDisclosure />
          <div className="space-y-4">
            {topExchanges.map((exchange, index) => (
              <ProductCard
                key={exchange.slug}
                product={exchange}
                rank={index + 1}
                categorySlug="exchanges"
              />
            ))}
          </div>
        </section>

        {/* Best-Of Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Find the Best Exchange For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bestOfLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 card-hover block"
              >
                <h3 className="text-[var(--color-text)] font-semibold mb-1">{link.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Exchange Reviews */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Exchange Reviews</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {reviewLinks.map((review) => (
              <Link
                key={review.slug}
                href={`/exchanges/reviews/${review.slug}`}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover text-center block"
              >
                <span className="text-[var(--color-text)] font-semibold">{review.name}</span>
                <span className="block text-xs text-[var(--color-text-secondary)] mt-1">
                  Full Review
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Comparisons */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Head-to-Head Comparisons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {compareLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover block"
              >
                <span className="text-[var(--color-text)] font-semibold">{link.title}</span>
                <span className="block text-xs text-[var(--color-text-secondary)] mt-1">
                  Detailed comparison &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Tools & Calculators</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {toolLinks.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
              >
                <h3 className="text-[var(--color-text)] font-semibold mb-1">{tool.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Learn Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Learn About Crypto Exchanges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learnLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
              >
                <span className="text-[var(--color-text)] font-semibold">{link.title}</span>
                <span className="block text-xs text-[var(--color-text-secondary)] mt-1">
                  Read guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How We Review Exchanges</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Our exchange reviews are based on rigorous hands-on testing. Each exchange is evaluated
            across multiple categories including fees, security, ease of use, available
            cryptocurrencies, customer support, and regulatory compliance. We maintain accounts on
            every exchange we review and regularly update our ratings to reflect changes in the industry.
          </p>
          <p className="text-[var(--color-text-secondary)]">
            Our editorial team consists of experienced traders and crypto researchers who have
            collectively spent thousands of hours using these platforms. We believe in full transparency:
            when you click an affiliate link and sign up, we may receive a commission at no extra cost
            to you. This helps us keep our content free and up-to-date.
          </p>
        </section>

        <FAQSection faqs={faqs} />
      </div>
    </>
  );
}
