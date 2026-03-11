import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { exchanges } from "@/data/exchanges";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Most Secure Crypto Exchanges in ${CURRENT_YEAR}`,
  description: `Find the safest crypto exchanges with the strongest security features in ${CURRENT_YEAR}. Cold storage, insurance, compliance certifications, and hack history compared.`,
};

const secureExchanges = [
  exchanges.find((e) => e.slug === "kraken")!,
  exchanges.find((e) => e.slug === "gemini")!,
  exchanges.find((e) => e.slug === "coinbase")!,
  exchanges.find((e) => e.slug === "crypto-com")!,
  exchanges.find((e) => e.slug === "binance")!,
  exchanges.find((e) => e.slug === "okx")!,
  exchanges.find((e) => e.slug === "bybit")!,
];

const faqs = [
  {
    question: "Which is the safest crypto exchange?",
    answer: "Kraken is widely considered the safest exchange, having never suffered a major security breach since its founding in 2011. Gemini is also highly regarded due to its SOC 2 Type 2 certification and NYDFS regulation. Coinbase carries significant insurance and is publicly audited.",
  },
  {
    question: "Has any major exchange ever been hacked?",
    answer: "Yes. Notable exchange hacks include Mt. Gox (2014, 850,000 BTC lost), Bitfinex (2016, 120,000 BTC), and Binance (2019, 7,000 BTC but fully reimbursed via SAFU fund). These events highlight the importance of choosing exchanges with strong security track records and insurance funds.",
  },
  {
    question: "What security features should I look for?",
    answer: "Look for two-factor authentication (preferably hardware key support), cold storage for the majority of assets, withdrawal address whitelisting, anti-phishing codes, insurance coverage, proof of reserves audits, and regulatory compliance certifications like SOC 2.",
  },
  {
    question: "How do I protect myself when using a crypto exchange?",
    answer: "Enable 2FA with an authenticator app (not SMS), use a unique strong password, enable withdrawal address whitelisting, set up anti-phishing codes, be cautious of phishing emails and fake websites, never share your credentials, and consider hardware wallet storage for large amounts.",
  },
];

export default function SecurityPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Exchanges", href: "/exchanges" },
          { label: "Best Exchanges", href: "/exchanges/best" },
          { label: "Most Secure", href: "/exchanges/best/security" },
        ]}
      />

      <h1 className="text-4xl font-bold text-white mb-4">
        Most Secure Crypto Exchanges ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Security should be your top priority when choosing a crypto exchange. With billions
          of dollars lost to exchange hacks over the years, selecting a platform with a proven
          security track record, robust infrastructure, and proper insurance is essential. We
          have ranked exchanges based on their security features, hack history, regulatory
          compliance, and asset protection measures.
        </p>
        <h2 className="text-xl font-bold text-white mt-8 mb-4">Security Features Comparison</h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] mt-4">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--color-bg-card)]">
                <th className="px-4 py-3 text-left text-sm font-semibold text-white">Feature</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-white">Kraken</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-white">Gemini</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-white">Coinbase</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Major Hacks", kraken: "None ever", gemini: "None ever", coinbase: "None ever" },
                { feature: "Cold Storage %", kraken: "95%+", gemini: "95%+", coinbase: "98%+" },
                { feature: "SOC 2 Certified", kraken: "Yes", gemini: "Yes (Type 2)", coinbase: "Yes" },
                { feature: "Insurance", kraken: "Yes", gemini: "Yes", coinbase: "Yes (FDIC on USD)" },
                { feature: "2FA Options", kraken: "App, Hardware Key", gemini: "App, Hardware Key", coinbase: "App, Hardware Key, SMS" },
                { feature: "Proof of Reserves", kraken: "Yes", gemini: "Partial", coinbase: "Audited (public co.)" },
                { feature: "Bug Bounty Program", kraken: "Yes", gemini: "Yes", coinbase: "Yes" },
              ].map((row) => (
                <tr key={row.feature} className="border-t border-[var(--color-border)]">
                  <td className="px-4 py-3 text-sm font-medium text-white">{row.feature}</td>
                  <td className="px-4 py-3 text-sm text-center text-[var(--color-text-secondary)]">{row.kraken}</td>
                  <td className="px-4 py-3 text-sm text-center text-[var(--color-text-secondary)]">{row.gemini}</td>
                  <td className="px-4 py-3 text-sm text-center text-[var(--color-text-secondary)]">{row.coinbase}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4 mb-12">
        {secureExchanges.map((exchange, index) => (
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
