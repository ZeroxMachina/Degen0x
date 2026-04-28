import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { walletProducts } from "@/data/wallets";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RelatedContent from '@/components/RelatedContent';


import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata: Metadata = {
  title: `Best Crypto Wallets in Australia (2026)`,
  description: `Compare the best crypto wallets for Australians in ${CURRENT_YEAR}. Secure wallets with AUD on-ramp support, ATO-compatible reporting, and hardware and software options.`,
  keywords: [
    "best crypto wallets Australia",
    "Australian crypto wallets",
    "best cryptocurrency wallet Australia",
    "best bitcoin wallet Australia",
    "hardware wallet Australia",
  ],
  alternates: { canonical: "/wallets/best/australia" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const australiaWallets = [
  walletProducts[0], // Ledger Nano X
  walletProducts[2], // Trezor Model T
  walletProducts[7], // Exodus
  walletProducts[4], // MetaMask
  walletProducts[6], // Trust Wallet
];

const faqs = [
  {
    question: "What is the best crypto wallet for Australians?",
    answer:
      "Ledger Nano X is the top choice for Australian users who prioritize security. It ships to Australia and supports thousands of assets. For a free alternative, Exodus offers a polished experience with built-in exchange and staking features, plus easy tax export for ATO compliance.",
  },
  {
    question: "Do I need to report wallet holdings to the ATO?",
    answer:
      "The ATO requires you to report crypto disposals (sales, trades, swaps) that trigger capital gains tax. Simply holding crypto in a wallet is not a taxable event. However, the ATO uses data matching with exchanges, so ensure your records are complete and consistent.",
  },
  {
    question: "Can I buy crypto with AUD in a wallet?",
    answer:
      "Yes. MetaMask and Trust Wallet support AUD purchases through integrated providers like Transak and MoonPay. You can pay via debit card or bank transfer. Fees range from 2-5%. For better rates, buy on an exchange first and transfer to your wallet.",
  },
  {
    question: "Do customs duties apply to hardware wallets shipped to Australia?",
    answer:
      "Hardware wallets shipped from overseas may be subject to GST (10%) and customs duties on orders over AUD 1,000. Most individual hardware wallet purchases fall under this threshold and are processed without additional charges. Delivery takes 7-14 business days from Europe.",
  },
  {
    question: "Which wallet is best for Australian DeFi users?",
    answer:
      "MetaMask is the best wallet for Ethereum-based DeFi. For Solana DeFi, Phantom is the top choice. Both are available as browser extensions and mobile apps. Australian DeFi users should track all interactions carefully, as each swap and yield claim is a taxable event under ATO rules.",
  },
  {
    question: "How do I get the 50% CGT discount with crypto in Australia?",
    answer:
      "Australian residents receive a 50% capital gains tax discount on crypto held for more than 12 months. To take advantage of this, use a wallet that clearly records acquisition dates. Transfer crypto from exchanges to your wallet early and maintain records of your original purchase dates.",
  },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/wallets/best' },
    { '@type': 'ListItem', position: 4, name: 'Australia', },
  ],
};

export default function AustraliaWalletsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <ArticleSchema
        headline="Wallets"
        description="Wallets"
        url="/wallets/best/australia"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Wallets"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/wallets/best/australia" />
        <ReadingTime />
      </div>
<AuthoritySources url="/wallets/best/australia" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Wallets", href: "/wallets" },
          { label: "Best Wallets", href: "/wallets/best" },
          { label: "Best in Australia", href: "/wallets/best/australia" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Crypto Wallets in Australia ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Australian crypto holders benefit from clear ATO guidelines and a 50% capital gains
          discount for holdings over 12 months. Choosing the right wallet helps you stay
          organized for tax time while keeping your assets secure. We have evaluated the best
          hardware and software wallets available to Australian residents.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Self-Custody in Australia</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          While Australian exchanges are AUSTRAC-registered, crypto assets are not covered by
          government compensation schemes. Self-custody through personal wallets gives
          Australians full control of their assets. Hardware wallets are particularly popular
          for securing Bitcoin and Ethereum long-term, while software wallets serve DeFi and
          daily transactions.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Tax-Smart Wallet Management</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          The ATO has been proactive in crypto tax enforcement through data-matching programs.
          Australians should choose wallets that provide detailed transaction records and
          integrate with ATO-compatible tax software like Koinly, Syla, or CoinTracker.
          The 50% CGT discount for holdings over 12 months makes long-term self-custody
          particularly attractive from a tax perspective.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {australiaWallets.map((wallet, index) => (
          <ProductCard
            key={wallet.slug}
            product={wallet}
            rank={index + 1}
            categorySlug="wallets"
          />
        ))}
      </div>

      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Wallet Tips for Australian Users</h2>
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
              <h3 className="text-[var(--color-text)] font-semibold">Track your 12-month holding period</h3>
              <p className="text-sm">Record acquisition dates carefully to qualify for the 50% CGT discount on holdings over 12 months.</p>
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
              <h3 className="text-[var(--color-text)] font-semibold">Use ATO-compatible tax software</h3>
              <p className="text-sm">Integrate your wallet with Koinly or Syla for automatic ATO-ready tax reports at the end of the financial year.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">3.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Separate hot and cold storage</h3>
              <p className="text-sm">Keep long-term holdings on a hardware wallet and use a software wallet for smaller amounts and DeFi.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Wallets/best/australia", "description": "Crypto content on degen0x", "url": "https://degen0x.com/wallets/best/australia", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
      <RelatedContent category="tools" currentSlug="/wallets/best/australia" />
    </div>
  );
}
