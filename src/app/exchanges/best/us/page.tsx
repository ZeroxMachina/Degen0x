import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { exchanges } from "@/data/exchanges";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto Exchanges in the US (${CURRENT_YEAR})`,
  description: `Compare the best crypto exchanges available to US residents in ${CURRENT_YEAR}. Fully regulated, SEC-compliant platforms with dollar deposits and tax reporting.`,
};

const usExchanges = [
  exchanges.find((e) => e.slug === "coinbase")!,
  exchanges.find((e) => e.slug === "kraken")!,
  exchanges.find((e) => e.slug === "gemini")!,
  exchanges.find((e) => e.slug === "crypto-com")!,
];

const faqs = [
  {
    question: "Which crypto exchanges are available in the US?",
    answer: "The main exchanges fully available to US residents include Coinbase, Kraken, Gemini, and Crypto.com (app only). Binance is not directly available; US residents must use Binance.US, which has a more limited selection. Bybit, OKX, KuCoin, Bitget, and Gate.io are generally not available to US users.",
  },
  {
    question: "Do I need to report crypto trades to the IRS?",
    answer: "Yes. The IRS treats cryptocurrency as property. Selling, trading, or earning crypto are taxable events. Major US exchanges like Coinbase provide 1099 forms and annual tax reports. You are required to report all crypto transactions on your tax return.",
  },
  {
    question: "Are US crypto exchanges regulated?",
    answer: "Yes. US exchanges are registered as Money Services Businesses with FinCEN and must comply with state money transmission laws. Coinbase is publicly traded on NASDAQ. Gemini is regulated by the NYDFS. All US exchanges must follow KYC (Know Your Customer) and AML (Anti-Money Laundering) regulations.",
  },
  {
    question: "Can I use a VPN to access non-US exchanges?",
    answer: "While technically possible, using a VPN to access restricted exchanges violates their terms of service and may violate US law. If discovered, your account could be frozen and funds potentially seized. We strongly recommend using exchanges that are legally available in your jurisdiction.",
  },
];

export default function USExchangesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Exchanges", href: "/exchanges" },
          { label: "Best Exchanges", href: "/exchanges/best" },
          { label: "Best in the US", href: "/exchanges/best/us" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Crypto Exchanges in the US ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          US residents have fewer exchange options compared to the rest of the world due to
          strict regulatory requirements. However, the exchanges that do operate in the US
          tend to offer stronger consumer protections, insurance coverage, and regulatory
          compliance. Here are the best crypto exchanges for US-based traders, all of which
          are fully licensed and compliant with federal and state regulations.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">US Regulatory Landscape</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          The US crypto regulatory environment is complex, with oversight from the SEC, CFTC,
          FinCEN, and individual state regulators. Exchanges operating in the US must register
          as Money Services Businesses, comply with state money transmission laws (often requiring
          individual state licenses), implement robust KYC and AML programs, and in some states
          obtain specific crypto licenses like New York's BitLicense. This regulatory burden is
          why fewer exchanges serve US customers, but it also provides stronger protections.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {usExchanges.map((exchange, index) => (
          <ProductCard
            key={exchange.slug}
            product={exchange}
            rank={index + 1}
            categorySlug="exchanges"
          />
        ))}
      </div>

      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">State-by-State Availability</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Not all exchanges operate in every US state. New York and Hawaii have particularly
          strict requirements. Here is a general overview:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Available in All 50 States</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Coinbase is the only major exchange available in all 50 US states, including New York.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Most States</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Kraken and Gemini are available in most states. Check their websites for specific state restrictions.</p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
