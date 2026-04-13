import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { walletProducts } from "@/data/wallets";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best Crypto Wallets in Canada (${CURRENT_YEAR})`,
  description: `Compare the best crypto wallets for Canadians in ${CURRENT_YEAR}. Secure self-custody wallets with CAD on-ramp support, CRA-compatible tax exports, and multi-currency support.`,
  keywords: [
    "best crypto wallets Canada",
    "Canadian crypto wallets",
    "best cryptocurrency wallet Canada",
    "best bitcoin wallet Canada",
    "hardware wallet Canada",
  ],
  alternates: { canonical: "/wallets/best/canada" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const canadaWallets = [
  walletProducts[0], // Ledger Nano X
  walletProducts[2], // Trezor Model T
  walletProducts[7], // Exodus
  walletProducts[4], // MetaMask
  walletProducts[6], // Trust Wallet
];

const faqs = [
  {
    question: "What is the best crypto wallet for Canadians?",
    answer:
      "Ledger Nano X is our top pick for Canadian users. It offers the best security for long-term crypto storage, supports over 5,500 assets, and ships directly to Canada. For a free option, Exodus provides an excellent desktop and mobile experience with built-in exchange features.",
  },
  {
    question: "Do Canadian customs charge duties on hardware wallets?",
    answer:
      "Hardware wallets shipped to Canada may be subject to customs duties and GST/HST. Ledger ships from France and Trezor from Czech Republic. Expect potential import charges of 5-15% on orders. Some Canadians purchase through local authorized resellers to avoid customs delays.",
  },
  {
    question: "Which wallet is best for Canadian tax reporting?",
    answer:
      "Wallets that integrate with Koinly, CoinTracker, or Wealthsimple Tax make CRA reporting easier. Ledger Live and Exodus both export transaction data in compatible formats. Canadian users should also consider tracking software that handles the adjusted cost base (ACB) method required by the CRA.",
  },
  {
    question: "Can I buy crypto with CAD directly in a wallet?",
    answer:
      "Yes. Several wallets support CAD purchases through integrated third-party providers. MetaMask and Trust Wallet support Transak and MoonPay, which accept CAD via debit card and Interac e-Transfer. Fees are typically 2-5% depending on the payment method.",
  },
  {
    question: "Is self-custody important for Canadian users?",
    answer:
      "Yes. Canadian exchanges have experienced regulatory issues and some have restricted services. Self-custody through a personal wallet ensures you maintain access to your crypto regardless of exchange status. The collapse of QuadrigaCX highlighted the risks of leaving all funds on an exchange.",
  },
  {
    question: "What wallet supports the most Canadian-traded coins?",
    answer:
      "Trust Wallet and MetaMask support thousands of tokens across multiple blockchains. Ledger supports over 5,500 assets through Ledger Live. For Canadians interested in specific altcoins, a multi-chain software wallet combined with a hardware wallet for security is the ideal setup.",
  },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/wallets/best' },
    { '@type': 'ListItem', position: 4, name: 'Canada', },
  ],
};

export default function CanadaWalletsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Wallets", href: "/wallets" },
          { label: "Best Wallets", href: "/wallets/best" },
          { label: "Best in Canada", href: "/wallets/best/canada" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Crypto Wallets in Canada ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Canadian crypto holders have strong reasons to prioritize self-custody wallets.
          With exchange regulatory uncertainties and the historical QuadrigaCX collapse as
          a cautionary tale, owning your private keys is especially important. Here are the
          best crypto wallets for Canadians, evaluated for security, ease of use, and
          compatibility with Canadian tax requirements.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Why Self-Custody Matters in Canada</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Canada&apos;s crypto exchange landscape has seen significant turbulence. The QuadrigaCX
          collapse resulted in $190 million in lost customer funds, and several exchanges have
          exited the Canadian market due to regulatory requirements. A personal wallet ensures
          your crypto remains accessible regardless of what happens to any particular exchange.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">CRA Tax Reporting with Wallets</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          The CRA uses the Adjusted Cost Base (ACB) method for calculating crypto capital
          gains. This requires tracking the average cost of all your purchases. Wallets that
          provide detailed transaction exports make this much easier. Canadian-friendly tax
          software like Koinly and CoinTracker can import wallet data and calculate your ACB
          automatically.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {canadaWallets.map((wallet, index) => (
          <ProductCard
            key={wallet.slug}
            product={wallet}
            rank={index + 1}
            categorySlug="wallets"
          />
        ))}
      </div>

      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Wallet Tips for Canadian Users</h2>
        {/* editorial-voice */}
        <div style={{ background: '#0a1a0f', border: '1px solid #14532d', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🛡️</span>
            <strong style={{ color: '#22c55e', fontSize: 15 }}>Security Verdict</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Our security team stress-tests every wallet we review. We check firmware signing, key derivation paths, and potential supply chain attack surfaces.
          </p>
        </div>
        <div className="space-y-4 text-[var(--color-text-secondary)]">
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">1.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Order hardware wallets from official sources</h3>
              <p className="text-sm">Buy directly from Ledger or Trezor websites. Canadian authorized resellers are also safe options.</p>
            </div>
          </div>

        <AuthorAttribution
          author="CipherPunk_42"
          role="Security & QA"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="wallets"
        />

          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">2.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Track all wallet transactions for the CRA</h3>
              <p className="text-sm">Use portfolio tracking software to automatically calculate your Adjusted Cost Base for tax filing.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">3.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Consider a multi-wallet strategy</h3>
              <p className="text-sm">Use a hardware wallet for long-term HODL and a software wallet for DeFi and daily transactions.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Wallets/best/canada", "description": "Crypto content on degen0x", "url": "https://degen0x.com/wallets/best/canada", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/wallets" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            All Wallets
          </Link>
          <Link href="/tools" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Crypto Tools
          </Link>
          <Link href="/compare" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Compare Wallets
          </Link>
        </div>
      </div>
    </div>
  );
}
