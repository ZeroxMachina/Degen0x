import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import WhaleWatchDashboard from "@/components/WhaleWatchDashboard";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Whale Watch Dashboard — Live Large Crypto Transactions | ${SITE_NAME}`,
  description: `Track large cryptocurrency whale transactions in real-time. Monitor exchange inflows/outflows, whale-to-whale transfers, and market-moving transactions across Bitcoin, Ethereum, Solana, and more.`,
  alternates: { canonical: `${SITE_URL}/whale-watch` },
  openGraph: {
    title: `Whale Watch Dashboard — Live Large Crypto Transactions | ${SITE_NAME}`,
    description: `Real-time whale activity monitoring. Track large crypto transactions across major blockchains and identify market-moving positions.`,
    url: `${SITE_URL}/whale-watch`,
    type: "website",
  },
};

export default function WhaleWatchPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Whale Watch Dashboard — ${SITE_NAME}`,
    description: "Real-time monitoring of large cryptocurrency transactions and whale activity",
    url: `${SITE_URL}/whale-watch`,
    isPartOf: { "@type": "WebSite", name: SITE_NAME },
    mainEntity: {
      "@type": "Thing",
      name: "Whale Watch",
      description: "Track large cryptocurrency transactions and whale activity in real-time",
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
            { label: "Whale Watch", href: "/whale-watch" },
          ]}
        />

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-3">
            Whale Watch Dashboard
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            Monitor large cryptocurrency transactions in real-time. Track whale activity,
            exchange inflows/outflows, and market-moving transactions across Bitcoin,
            Ethereum, Solana, and other major blockchains.
          </p>
        </div>

        {/* Dashboard Component */}
        <div className="mb-8">
          <WhaleWatchDashboard />
        </div>

        {/* Info Section */}
        <section className="mb-8">
          <div className="glass rounded-xl p-6">
            <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">
              How to Use Whale Watch
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-[var(--color-text)] mb-2">
                  Filter by Chain
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Select specific blockchains to monitor transactions on Bitcoin, Ethereum,
                  Solana, and other networks.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-text)] mb-2">
                  Filter by Type
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Watch exchange inflows (selling pressure), outflows (accumulation), or
                  whale-to-whale transfers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-text)] mb-2">
                  Real-Time Updates
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  The dashboard auto-refreshes with new transactions. Newest transactions
                  appear at the top.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Color Coding Info */}
        <section className="mb-8">
          <div className="glass rounded-xl p-6">
            <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">
              Understanding Transaction Types
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div>
                  <h3 className="font-semibold text-[var(--color-text)]">
                    Exchange Inflow (Red)
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Large deposits to exchange wallets. Often signals preparation for selling
                    and may indicate selling pressure.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div>
                  <h3 className="font-semibold text-[var(--color-text)]">
                    Exchange Outflow (Green)
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Large withdrawals from exchanges. Often signals accumulation or moving
                    assets to cold storage.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div>
                  <h3 className="font-semibold text-[var(--color-text)]">
                    Whale-to-Whale (Yellow)
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Direct transfers between known whale wallets. May indicate whale
                    coordination or large portfolio adjustments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="p-4 rounded-xl border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)]">
          <strong className="text-[var(--color-text)]">Disclaimer:</strong> This is a simulated
          dashboard for demonstration purposes. Real whale activity data would require integration
          with blockchain monitoring services and on-chain analytics providers. Transaction
          amounts and addresses are generated for illustration only.
        </div>
      </div>
    </>
  );
}
