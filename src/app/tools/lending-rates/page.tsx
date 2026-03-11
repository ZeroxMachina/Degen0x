import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH, SITE_URL } from "@/lib/constants";
import LendingRatesClient from "./LendingRatesClient";

export const metadata: Metadata = {
  title: `Crypto Lending Rates Comparison | DeFi & CeFi Yields | ${SITE_NAME}`,
  description: `Compare real-time lending rates across 15+ DeFi and CeFi platforms including Aave, Compound, MakerDAO, Celsius, and more. Find the best APY for USDC, USDT, ETH, and 10+ crypto assets. Interactive table with risk scores and yield strategies.`,
  alternates: { canonical: `${SITE_URL}/tools/lending-rates` },
};

export default function LendingRatesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `Crypto Lending Rates Comparison — ${SITE_NAME}`,
    description: "Interactive tool to compare crypto lending rates across DeFi and CeFi platforms",
    url: `${SITE_URL}/tools/lending-rates`,
    applicationCategory: "FinanceApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Lending Rates", href: "/tools/lending-rates" },
          ]}
        />

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-3">
            Crypto Lending Rates Comparison
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            Compare real-time lending rates across 15+ DeFi and CeFi platforms. Find the best APY
            for stablecoins, ETH, and 10+ major cryptocurrencies. Interactive filters, risk scores,
            and side-by-side comparisons.
          </p>
        </div>

        {/* Client Component */}
        <LendingRatesClient />

        {/* FAQ Section */}
        <section className="mt-16 mb-8">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "What's the difference between DeFi and CeFi lending?",
                a: "DeFi (decentralized) protocols are blockchain-based and non-custodial — you control your keys. CeFi (centralized) platforms are custodial services run by companies. DeFi typically offers higher yields but more technical risk; CeFi offers convenience with centralized risk.",
              },
              {
                q: "How often are these rates updated?",
                a: "Lending rates fluctuate continuously based on supply and demand. This page shows indicative rates as of March 2026. Always check live rates on protocol websites before depositing.",
              },
              {
                q: "What's a risk score?",
                a: "Risk scores consider factors like audit status, TVL (total value locked), protocol age, and smart contract complexity. Low risk = battle-tested protocols with large TVL. High risk = newer or smaller protocols with higher yields but less proven security.",
              },
              {
                q: "Do these yields guarantee returns?",
                a: "No. Lending yields are variable and depend on borrower demand. During bear markets, yields can drop significantly. High yields may indicate elevated risk. Always research before depositing.",
              },
              {
                q: "What's TVL (Total Value Locked)?",
                a: "TVL is the total value of crypto assets deposited in a protocol. Larger TVL generally indicates stronger liquidity and lower slippage but doesn't guarantee safety.",
              },
              {
                q: "How do I choose between lending platforms?",
                a: "Consider your risk tolerance, preferred chain, asset type (stablecoins vs. volatile assets), and need for liquidity. Diversify across low-risk protocols rather than chasing the highest yield.",
              },
            ].map((item, i) => (
              <div key={i} className="glass rounded-xl p-5">
                <h3 className="font-bold text-[var(--color-text)] mb-2 text-sm">{item.q}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimers */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-5 mb-6">
          <h3 className="font-bold text-[var(--color-text)] mb-3 text-sm">Important Disclaimers</h3>
          <ul className="text-xs text-[var(--color-text-secondary)] space-y-2 list-disc list-inside">
            <li>
              <strong className="text-[var(--color-text)]">Indicative Rates:</strong> Rates shown are
              estimates as of March 2026 and subject to change. Always verify on official protocol
              websites before transacting.
            </li>
            <li>
              <strong className="text-[var(--color-text)]">Not Investment Advice:</strong> This tool
              is for informational purposes only. Cryptocurrency is highly volatile and risky. Do
              your own research before investing.
            </li>
            <li>
              <strong className="text-[var(--color-text)]">Smart Contract Risk:</strong> All
              blockchain protocols carry smart contract risk. Hacks and exploits can happen. Use
              only funds you can afford to lose.
            </li>
            <li>
              <strong className="text-[var(--color-text)]">Variable Returns:</strong> Lending yields
              are variable and depend on borrower demand. Yields can decrease significantly or drop
              to zero.
            </li>
            <li>
              <strong className="text-[var(--color-text)]">Affiliate Links:</strong> Some platform
              links are affiliate partnerships. This does not affect your rates but helps support
              CryptoDegen.
            </li>
          </ul>
        </div>

        {/* Related Resources */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Related Tools & Guides</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "DeFi Yields Tracker",
                href: "/tools/defi-yields",
                tag: "Tools",
              },
              {
                title: "Staking APY Comparison",
                href: "/tools/staking-apy",
                tag: "Yield",
              },
              {
                title: "How to Lend Crypto Safely",
                href: "/learn/how-to-lend-crypto",
                tag: "Education",
              },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="glass rounded-xl p-5 hover:bg-[var(--color-surface)] transition-colors block"
              >
                <span className="glass-pill inline-block text-[var(--color-primary)] text-xs font-medium px-3 py-1 mb-2 rounded-full">
                  {item.tag}
                </span>
                <h3 className="font-semibold text-[var(--color-text)] text-sm">{item.title}</h3>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
