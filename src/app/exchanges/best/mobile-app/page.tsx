import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { exchanges } from "@/data/exchanges";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto Exchange Apps in ${CURRENT_YEAR} - Mobile Trading`,
  description: `Compare the best crypto trading apps for iPhone and Android in ${CURRENT_YEAR}. User-friendly interfaces, fast execution, and full-featured mobile trading.`,
};

const mobileExchanges = [
  exchanges.find((e) => e.slug === "crypto-com")!,
  exchanges.find((e) => e.slug === "coinbase")!,
  exchanges.find((e) => e.slug === "binance")!,
  exchanges.find((e) => e.slug === "okx")!,
  exchanges.find((e) => e.slug === "kraken")!,
  exchanges.find((e) => e.slug === "bybit")!,
  exchanges.find((e) => e.slug === "gemini")!,
];

const faqs = [
  {
    question: "Which crypto exchange has the best mobile app?",
    answer: "Crypto.com and Coinbase offer the best mobile app experiences for everyday use. Crypto.com integrates trading, staking, card management, and DeFi into one polished app. Coinbase excels in simplicity and ease of use. For advanced mobile trading, Binance and OKX offer the most features.",
  },
  {
    question: "Can I do everything on mobile that I can do on desktop?",
    answer: "Most major exchanges offer full-featured mobile apps that mirror desktop capabilities including trading, deposits, withdrawals, staking, and account management. However, detailed charting and advanced order types may be easier to manage on a larger screen.",
  },
  {
    question: "Are mobile crypto apps safe to use?",
    answer: "Yes, when using official apps from reputable exchanges downloaded from the Apple App Store or Google Play Store. Enable biometric authentication, app lock, and 2FA. Be cautious of fake app clones and always verify you are downloading the official app.",
  },
];

export default function MobileAppPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Exchanges", href: "/exchanges" },
          { label: "Best Exchanges", href: "/exchanges/best" },
          { label: "Mobile Apps", href: "/exchanges/best/mobile-app" },
        ]}
      />

      <h1 className="text-4xl font-bold text-white mb-4">
        Best Crypto Exchange Mobile Apps ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          More crypto trading happens on mobile than desktop. Having a well-designed, reliable
          mobile app is essential for monitoring your portfolio, executing trades on the go,
          and managing your crypto holdings from anywhere. We tested the mobile apps of every
          major exchange on both iOS and Android, evaluating design, performance, features,
          and reliability.
        </p>
        <h2 className="text-xl font-bold text-white mt-8 mb-4">What We Tested</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="rounded-lg border border-[var(--color-border)] p-4">
            <h3 className="text-white font-semibold mb-2">Design & UX</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Interface clarity, navigation, onboarding flow, and overall user experience quality.</p>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] p-4">
            <h3 className="text-white font-semibold mb-2">Performance</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">App speed, load times, real-time price updates, and execution reliability under load.</p>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] p-4">
            <h3 className="text-white font-semibold mb-2">Features</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Charting tools, order types, portfolio tracking, price alerts, and biometric security.</p>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-12">
        {mobileExchanges.map((exchange, index) => (
          <ProductCard
            key={exchange.slug}
            product={exchange}
            rank={index + 1}
            categorySlug="exchanges"
          />
        ))}
      </div>

      <FAQSection faqs={faqs} />
    </div>
  );
}
