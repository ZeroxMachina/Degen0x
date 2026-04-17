import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import ComparisonTable from "@/components/ComparisonTable";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { hardwareWallets, walletComparisonItems, hardwareWalletFAQs } from "@/data/wallets";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RelatedContent from '@/components/RelatedContent';


import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata: Metadata = {
  title: `Best Hardware Wallets 2026 — Cold Storage Reviews & Rankings | degen0x`,
  description: `The best hardware wallets of 2026, ranked and tested. Ledger Nano X vs Trezor Model T vs Coldcard Mk4 vs Foundation Passport 2. Expert cold storage reviews with up-to-date pricing.`,
  keywords: "best hardware wallet 2026, cold wallet, ledger vs trezor, coldcard, foundation passport, crypto cold storage",
  alternates: { canonical: "/wallets/best/hardware" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const WHATS_NEW_2026 = [
  {
    icon: "🛡️",
    title: "Dual Secure Element Chips",
    desc: "Coldcard Mk4 ships with two independent Secure Element chips, raising the bar for tamper-resistance beyond any other hardware wallet.",
  },
  {
    icon: "📡",
    title: "True Air-Gap Goes Mainstream",
    desc: "Both Coldcard Mk4 and Foundation Passport 2 offer fully air-gapped operation via PSBT / QR codes — no USB data connection ever required.",
  },
  {
    icon: "🇺🇸",
    title: "US-Made Open-Source Option",
    desc: "Foundation Devices (USA) manufactures Passport 2 with fully open-source hardware schematics and firmware — first of its kind at scale.",
  },
  {
    icon: "📱",
    title: "Better Mobile Companion Apps",
    desc: "Ledger Live and the new Envoy app (for Passport 2) now support DeFi, NFT management, and real-time portfolio tracking on iOS + Android.",
  },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/wallets/best' },
    { '@type': 'ListItem', position: 4, name: 'Hardware', },
  ],
};

export default function BestHardwareWalletsPage() {
  const comparisonItems = [
    walletComparisonItems["ledger-nano-x"],
    walletComparisonItems["trezor-model-t"],
    walletComparisonItems["coldcard-mk4"],
    walletComparisonItems["foundation-passport-2"],
    walletComparisonItems["trezor-safe-3"],
    walletComparisonItems["ledger-nano-s-plus"],
  ].filter(Boolean);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <ArticleSchema
        headline="Dual Secure Element Chips"
        description="Dual Secure Element Chips"
        url="/wallets/best/hardware"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Wallets"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/wallets/best/hardware" />
        <ReadingTime />
      </div>
<AuthoritySources url="/wallets/best/hardware" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Wallets", href: "/wallets" },
          { label: "Best Wallets", href: "/wallets/best" },
          { label: "Hardware Wallets", href: "/wallets/best/hardware" },
        ]}
      />

      <AffiliateDisclosure />

      {/* Hero */}
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-4">
          ✅ Updated {CURRENT_MONTH} {CURRENT_YEAR}
        </div>
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Hardware Wallets of {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
          Hardware wallets (cold wallets) are the only way to truly own your crypto. By storing private keys on a
          physically isolated device, they protect you from exchange hacks, malware, and remote exploits. We tested
          every major hardware wallet — including two air-gapped additions new to our 2026 rankings.
        </p>

        {/* Quick picks bar */}
        <div className="mt-6 flex flex-wrap gap-3">
          {[
            { label: "🏆 Best Overall", name: "Ledger Nano X", href: "#ledger-nano-x" },
            { label: "🔓 Best Open-Source", name: "Trezor Model T", href: "#trezor-model-t" },
            { label: "₿ Best Bitcoin-Only", name: "Coldcard Mk4", href: "#coldcard-mk4" },
            { label: "📱 Best for Mobile", name: "Foundation Passport 2", href: "#foundation-passport" },
            { label: "💰 Best Budget", name: "Trezor Safe 3", href: "#trezor-safe-3" },
          ].map((pick) => (
            <a
              key={pick.name}
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-primary)]/60 transition-colors text-sm"
            >
              <span className="text-[var(--color-text-secondary)] text-xs">{pick.label}</span>
              <span className="text-[var(--color-text)] font-semibold text-xs">{pick.name}</span>
            </a>
          ))}
        </div>
      </header>

      {/* What's New in 2026 */}
      <section className="mb-10 rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-6">
        <h2 className="text-lg font-bold text-[var(--color-text)] mb-4">🆕 What&apos;s New in Hardware Wallets for 2026</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {WHATS_NEW_2026.map((item) => (
            <div key={item.title} className="flex gap-3">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <div className="text-sm font-bold text-[var(--color-text)] mb-0.5">{item.title}</div>
                <div className="text-sm text-[var(--color-text-secondary)]">{item.desc}</div>
              </div>

        <AuthorAttribution
          author="CipherPunk_42"
          role="Security & QA"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="wallets"
        />

            </div>
          ))}
        </div>
      </section>

      {/* Quick Verdict */}
      <section className="mb-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Our {CURRENT_YEAR} Verdict at a Glance</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          The <strong className="text-[var(--color-text)]">Ledger Nano X</strong> remains the top pick for most users — Bluetooth,
          5,500+ coin support, and a polished app. Open-source fans should choose the{" "}
          <strong className="text-[var(--color-text)]">Trezor Model T</strong> or the new{" "}
          <strong className="text-[var(--color-text)]">Trezor Safe 3</strong> ($79 with Secure Element). For Bitcoin maximalists
          who want uncompromising air-gap security, the <strong className="text-[var(--color-text)]">Coldcard Mk4</strong> (dual
          Secure Element, fully air-gapped) is the new benchmark. If you want open-source hardware down to the PCB
          schematic, the US-built <strong className="text-[var(--color-text)]">Foundation Passport 2</strong> is the only option
          with a removable battery and QR-only signing.
        </p>
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
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 text-sm">
          {[
            { label: "Most Beginner-Friendly", winner: "Ledger Nano X" },
            { label: "Best Open-Source", winner: "Trezor Model T" },
            { label: "Most Secure (BTC)", winner: "Coldcard Mk4" },
            { label: "Most Transparent HW", winner: "Foundation Passport 2" },
            { label: "Best Under $80", winner: "Trezor Safe 3" },
            { label: "Best for DeFi", winner: "Ledger Nano X" },
          ].map((item) => (
            <div key={item.label} className="rounded-lg bg-[var(--color-bg)] p-3">
              <div className="text-xs text-[var(--color-text-secondary)] mb-1">{item.label}</div>
              <div className="font-semibold text-[var(--color-primary)] text-sm">{item.winner}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Rankings */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
          Best Hardware Wallets {CURRENT_YEAR}, Ranked
        </h2>
        <div className="space-y-6">
          {hardwareWallets.map((product, index) => (
            <ProductCard
              key={`${product.name}-${index}`}
              product={product}
              rank={index + 1}
              categorySlug="wallets"
            />
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-12">
        <ComparisonTable
          items={comparisonItems}
          features={["Price", "Supported Coins", "Secure Element", "Open Source", "Backup Method", "Mobile App", "Staking"]}
          title={`Hardware Wallet Comparison — ${CURRENT_YEAR}`}
        />
      </section>

      {/* Airgap vs USB Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Air-Gap vs USB: Which Connection Should You Use?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5">
            <h3 className="text-[var(--color-text)] font-bold mb-2 flex items-center gap-2">
              <span>📡</span> Air-Gapped (QR / PSBT / microSD)
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-3 leading-relaxed">
              The device never establishes a data connection to any computer. Transactions are created on the
              computer, exported via QR code or microSD, signed on the air-gapped device, then the signed
              transaction is brought back to the computer for broadcast. No software exploit can reach the keys.
            </p>
            <div className="text-xs font-semibold text-amber-400">Best for: Coldcard Mk4 · Foundation Passport 2</div>
          </div>
          <div className="rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-5">
            <h3 className="text-[var(--color-text)] font-bold mb-2 flex items-center gap-2">
              <span>🔌</span> USB / Bluetooth Connection
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-3 leading-relaxed">
              The hardware wallet connects to your computer or phone via USB-C or Bluetooth. The companion app
              communicates with the device for signing, but private keys never leave the hardware. Easier to use
              daily, with access to DeFi, NFTs, and full portfolio management through apps like Ledger Live.
            </p>
            <div className="text-xs font-semibold text-[var(--color-primary)]">Best for: Ledger Nano X · Trezor Model T · Trezor Safe 3</div>
          </div>
        </div>
      </section>

      {/* What to Look For */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">What to Look for in a Hardware Wallet ({CURRENT_YEAR})</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">🔒 Secure Element Chip</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              A dedicated Secure Element (like CC EAL5+ or ATECC608A) stores your private keys in tamper-resistant
              hardware, the same tech used in bank cards. In 2026, look for dual-SE designs (Coldcard Mk4) for
              maximum protection.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">📖 Open-Source Firmware</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Open-source code lets security researchers audit every line. Trezor is fully open-source; Foundation
              Passport 2 publishes hardware schematics too. Ledger open-sourced its companion app but keeps
              firmware proprietary for SE certification reasons.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">🪙 Coin Coverage</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Ledger supports 5,500+ assets; Trezor Safe 3 supports 8,000+. If you&apos;re Bitcoin-only, Coldcard and
              Passport 2 offer a smaller, more focused attack surface. Never store altcoins on a Bitcoin-only device.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">🛠️ Recovery Backup Method</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Standard BIP39 (12 or 24-word seed) works everywhere. Trezor supports Shamir Backup (SLIP-39) for
              splitting your seed among multiple shares. Coldcard supports SeedXOR for mathematically combining
              partial seeds. Always engrave your seed on metal, never store it digitally.
            </p>
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Hardware Wallet Prices {CURRENT_YEAR}</h2>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
                <th className="text-left px-4 py-3 text-xs font-bold text-[var(--color-text-secondary)] uppercase tracking-wider">Wallet</th>
                <th className="text-center px-4 py-3 text-xs font-bold text-[var(--color-text-secondary)] uppercase tracking-wider">Price</th>
                <th className="text-center px-4 py-3 text-xs font-bold text-[var(--color-text-secondary)] uppercase tracking-wider">Coins</th>
                <th className="text-center px-4 py-3 text-xs font-bold text-[var(--color-text-secondary)] uppercase tracking-wider">Secure Element</th>
                <th className="text-center px-4 py-3 text-xs font-bold text-[var(--color-text-secondary)] uppercase tracking-wider">Air-Gap</th>
                <th className="text-center px-4 py-3 text-xs font-bold text-[var(--color-text-secondary)] uppercase tracking-wider">Best For</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Coldcard Mk4", price: "$157", coins: "BTC only", se: "Dual ✅", airgap: "✅ Full", bestFor: "Max Security", highlight: false },
                { name: "Foundation Passport 2", price: "$199", coins: "BTC only", se: "✅", airgap: "✅ Full (QR)", bestFor: "Open-Source BTC", highlight: false },
                { name: "Ledger Nano X", price: "$149", coins: "5,500+", se: "✅ CC EAL5+", airgap: "❌", bestFor: "Most Users", highlight: true },
                { name: "Trezor Model T", price: "$219", coins: "1,800+", se: "❌ (MCU only)", airgap: "❌", bestFor: "Open-Source Multi", highlight: false },
                { name: "Trezor Safe 3", price: "$79", coins: "8,000+", se: "✅", airgap: "❌", bestFor: "Budget Open-Source", highlight: false },
                { name: "Ledger Nano S Plus", price: "$79", coins: "5,500+", se: "✅ CC EAL5+", airgap: "❌", bestFor: "Budget Ledger", highlight: false },
              ].map((row) => (
                <tr key={row.name} className={`border-b border-[var(--color-border)] ${row.highlight ? "bg-[var(--color-primary)]/5" : ""}`}>
                  <td className="px-4 py-3 font-semibold text-[var(--color-text)]">
                    {row.name}
                    {row.highlight && <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-[var(--color-primary)]/20 text-[var(--color-primary)]">#1</span>}
                  </td>
                  <td className="px-4 py-3 text-center font-mono font-bold text-[var(--color-text)]">{row.price}</td>
                  <td className="px-4 py-3 text-center text-[var(--color-text-secondary)]">{row.coins}</td>
                  <td className="px-4 py-3 text-center text-[var(--color-text-secondary)]">{row.se}</td>
                  <td className="px-4 py-3 text-center text-[var(--color-text-secondary)]">{row.airgap}</td>
                  <td className="px-4 py-3 text-center text-xs text-[var(--color-text-secondary)]">{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Related Pages */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/wallets/compare/ledger-vs-trezor" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Ledger vs Trezor 2026</h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">Head-to-head cold wallet comparison</p>
          </Link>
          <Link href="/wallets/learn/hardware-wallet-setup-guide" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Hardware Wallet Setup Guide</h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">Step-by-step setup for beginners</p>
          </Link>
          <Link href="/wallets/best/security" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Most Secure Crypto Wallets</h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">Maximum protection for any amount</p>
          </Link>
          <Link href="/wallets/learn/hot-vs-cold-wallets" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Hot vs Cold Wallets Explained</h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">Which wallet type do you need?</p>
          </Link>
          <Link href="/wallets/learn/wallet-security-best-practices" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Wallet Security Best Practices</h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">Keep your seed phrase safe</p>
          </Link>
          <Link href="/wallets/best/privacy" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Best Privacy Wallets</h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">Maximum anonymity options</p>
          </Link>
        </div>
      </section>

      <FAQSection faqs={hardwareWalletFAQs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Dual Secure Element Chips", "description": "Crypto content on degen0x", "url": "https://degen0x.com/wallets/best/hardware", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
      <RelatedContent category="tools" currentSlug="/wallets/best/hardware" />
    </div>
  );
}
