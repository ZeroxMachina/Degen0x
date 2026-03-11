import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { exchanges } from "@/data/exchanges";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto Exchanges in Japan (${CURRENT_YEAR})`,
  description: `Compare the best crypto exchanges for Japanese residents in ${CURRENT_YEAR}. JFSA-licensed platforms with JPY deposits, cold wallet custody requirements, and investor protection.`,
  keywords: [
    "best crypto exchanges Japan",
    "Japanese crypto exchanges",
    "buy crypto Japan",
    "JFSA licensed crypto exchange",
    "best cryptocurrency exchange Japan",
  ],
};

const japanExchanges = [
  exchanges.find((e) => e.slug === "binance")!,
  exchanges.find((e) => e.slug === "kraken")!,
  exchanges.find((e) => e.slug === "coinbase")!,
  exchanges.find((e) => e.slug === "crypto-com")!,
  exchanges.find((e) => e.slug === "kucoin")!,
];

const faqs = [
  {
    question: "What crypto exchanges are licensed in Japan?",
    answer:
      "The Japanese Financial Services Agency (JFSA) licenses all crypto exchanges operating in Japan. Licensed exchanges include bitFlyer, Coincheck, GMO Coin, bitbank, and Liquid. Global platforms must obtain JFSA registration to serve Japanese users, which is why some major exchanges operate separate Japanese entities.",
  },
  {
    question: "How is crypto taxed in Japan?",
    answer:
      "Japan classifies crypto gains as 'miscellaneous income,' taxed at progressive rates up to 55% (including local inhabitant tax). This is one of the highest crypto tax rates globally. There is no distinction between short-term and long-term gains. The Japanese government has been discussing moving to a flat 20% separate tax rate.",
  },
  {
    question: "Can I deposit JPY on crypto exchanges?",
    answer:
      "Yes. JFSA-licensed exchanges all support JPY deposits via bank transfer (furikomi), convenience store payments (konbini), and some accept quick deposits through online banking. Bank transfers are typically free or carry a small fee. Deposits arrive same day during business hours.",
  },
  {
    question: "Is Japan crypto-friendly?",
    answer:
      "Japan was one of the first countries to create a legal framework for cryptocurrency. The Payment Services Act recognizes crypto as a form of payment. However, the high tax rate on gains (up to 55%) and strict listing requirements for new tokens make it a mixed picture for traders.",
  },
  {
    question: "What coins are available on Japanese exchanges?",
    answer:
      "JFSA-licensed exchanges can only list tokens that have been approved (whitelisted) by the Japan Virtual and Crypto Assets Exchange Association (JVCEA). This means Japanese exchanges offer fewer tokens than global platforms. Major coins like BTC, ETH, XRP, and SOL are available, but many altcoins are not.",
  },
  {
    question: "What consumer protections exist for Japanese crypto users?",
    answer:
      "Japan has some of the strongest crypto consumer protections globally. Exchanges must keep customer assets segregated from company funds, store at least 95% of crypto in cold wallets, maintain minimum capital requirements, and have systems to prioritize customer claims in case of bankruptcy.",
  },
];

export default function JapanExchangesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Exchanges", href: "/exchanges" },
          { label: "Best Exchanges", href: "/exchanges/best" },
          { label: "Best in Japan", href: "/exchanges/best/japan" },
        ]}
      />

      <h1 className="text-4xl font-bold text-white mb-4">
        Best Crypto Exchanges in Japan ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Japan has been a pioneer in cryptocurrency regulation, being one of the first countries
          to legally recognize crypto as a form of payment. The JFSA (Japan Financial Services
          Agency) maintains strict licensing requirements that ensure strong consumer protections
          but also limit the number of available tokens. Here are the best crypto exchanges for
          Japanese residents.
        </p>
        <h2 className="text-xl font-bold text-white mt-8 mb-4">Japanese Regulatory Framework</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Japan&apos;s crypto regulatory framework is built on the Payment Services Act and the
          Financial Instruments and Exchange Act. The JFSA licenses all crypto exchanges and
          the JVCEA (Japan Virtual and Crypto Assets Exchange Association) serves as a
          self-regulatory organization. Key requirements include cold wallet custody for 95%+
          of assets, segregation of customer funds, annual audits, and minimum capital reserves.
        </p>
        <h2 className="text-xl font-bold text-white mt-8 mb-4">Tax Considerations for Japanese Traders</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Crypto gains in Japan are classified as miscellaneous income and taxed at progressive
          rates that can reach 55% (including 10% local inhabitant tax). This steep rate applies
          to all gains regardless of holding period. The government has been debating a reform
          to classify crypto under the 20% separate taxation system, which would significantly
          reduce the tax burden. Japanese traders should use tax software to track their
          obligations carefully.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {japanExchanges.map((exchange, index) => (
          <ProductCard
            key={exchange.slug}
            product={exchange}
            rank={index + 1}
            categorySlug="exchanges"
          />
        ))}
      </div>

      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Payment Methods for Japanese Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-white font-semibold mb-2">Bank Transfer (Furikomi)</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Standard bank transfer. Low fees. Arrives same day during business hours.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-white font-semibold mb-2">Quick Deposit (Internet Banking)</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Instant deposits through linked online banking. Free on many exchanges. Very popular in Japan.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-white font-semibold mb-2">Convenience Store (Konbini)</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Pay at 7-Eleven, Lawson, or FamilyMart. Small fee. Good for cash users without bank accounts.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-white font-semibold mb-2">Pay-easy</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">ATM-based payment system. Available at banks and post offices. Low fees, near-instant.</p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
