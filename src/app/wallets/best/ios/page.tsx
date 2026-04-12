import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Best Crypto Wallets for iPhone & iOS (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `The best iOS crypto wallets for ${CURRENT_YEAR}. Compare Trust Wallet, Phantom, Coinbase Wallet, Rainbow, and Exodus for iPhone and iPad.`,
  alternates: { canonical: "/wallets/best/ios" }};

const products = [
  { name: "Trust Wallet", slug: "trust-wallet", rating: 4.4, description: "Feature-rich iOS wallet supporting 10M+ tokens across 100+ blockchains with built-in dApp browser, staking, and swap features.", pros: ["Massive multi-chain support", "Built-in dApp browser", "Face ID integration"], cons: ["Owned by Binance", "Interface can feel crowded"], bestFor: "Broadest multi-chain iOS wallet experience", affiliateUrl: "#", category: "wallets" },
  { name: "Phantom", slug: "phantom", rating: 4.7, description: "Beautifully designed iOS app for Solana, Ethereum, and Polygon with smooth animations and native iOS design language.", pros: ["Native iOS design quality", "Smooth animations and UX", "Excellent NFT gallery"], cons: ["Limited chain support", "Not open source"], bestFor: "Best-designed iOS wallet for Solana and Ethereum", affiliateUrl: "#", category: "wallets" },
  { name: "Coinbase Wallet", slug: "coinbase-wallet", rating: 4.3, description: "User-friendly iOS wallet with iCloud backup option, Coinbase exchange integration, and support for major EVM chains.", pros: ["iCloud encrypted key backup", "Coinbase account linking", "Simple onboarding flow"], cons: ["Tied to Coinbase ecosystem", "Fewer DeFi features"], bestFor: "iOS beginners who want easy setup with cloud backup", affiliateUrl: "#", category: "wallets" },
  { name: "Rainbow", slug: "rainbow", rating: 4.3, description: "Ethereum-focused iOS wallet built with Apple-quality aesthetics, beautiful NFT display, and ENS name integration.", pros: ["Apple-quality design standards", "Best NFT display on iOS", "Deep ENS integration"], cons: ["EVM chains only", "Limited advanced features"], bestFor: "iOS users who value beautiful design and NFT display", affiliateUrl: "#", category: "wallets" },
  { name: "Exodus", slug: "exodus", rating: 4.5, description: "Multi-platform wallet with excellent iOS app featuring portfolio tracking, built-in exchange, and staking for multiple networks.", pros: ["Beautiful portfolio charts", "Built-in exchange", "Multi-asset staking"], cons: ["Higher exchange fees", "Not open source"], bestFor: "All-in-one iOS portfolio management and trading", affiliateUrl: "#", category: "wallets" },
];

const faqs = [
  { question: "Are iPhone crypto wallets secure?", answer: "iPhone wallets benefit from iOS security features including Face ID, Secure Enclave for cryptographic operations, and App Store screening. The iOS sandbox prevents apps from accessing each other's data. When combined with a reputable wallet app, an iPhone provides a reasonably secure environment for crypto storage. For large holdings, pair your iOS wallet with a hardware wallet via Bluetooth." },
  { question: "Can I use a hardware wallet with my iPhone?", answer: "Yes. Ledger Nano X connects via Bluetooth to the Ledger Live iOS app and some third-party wallets. Keystone and Jade support air-gapped QR code signing with iPhone cameras. USB connections are limited by iOS port constraints but work with newer USB-C iPhones." },
  { question: "Should I backup my wallet to iCloud?", answer: "iCloud backup is convenient but involves trade-offs. Wallets like Coinbase Wallet encrypt your key before storing it in iCloud. However, if someone gains access to your Apple ID and wallet password, they could recover your wallet. For maximum security, use an offline seed phrase backup. For convenience with moderate balances, encrypted cloud backup is reasonable." },
];

export default function BestIOSWalletsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="wallets"
      />      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Wallets", href: "/wallets" }, { label: "Best Wallets", href: "/wallets/best" }, { label: "iOS Wallets", href: "/wallets/best/ios" }]} />
      <AffiliateDisclosure />
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Best Crypto Wallets for iPhone & iOS ({CURRENT_MONTH} {CURRENT_YEAR})</h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">The best iOS wallets combine Apple security features like Face ID and Secure Enclave with robust crypto functionality. We tested the top iPhone wallets for user experience, security, feature completeness, and App Store reliability.</p>
      </header>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Best iOS Wallets, Ranked</h2>
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
        <div className="space-y-6">{products.map((product, index) => (<ProductCard key={product.name} product={product} rank={index + 1} categorySlug="wallets" />))}</div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/wallets/best/android" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover"><h3 className="font-semibold text-[var(--color-text)] text-sm">Best Android Wallets</h3><p className="text-xs text-[var(--color-text-secondary)]">Top wallets for Android</p></Link>
          <Link href="/wallets/best/mobile" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover"><h3 className="font-semibold text-[var(--color-text)] text-sm">Best Mobile Wallets</h3><p className="text-xs text-[var(--color-text-secondary)]">All mobile wallets compared</p></Link>
          <Link href="/wallets/learn/mobile-wallet-security" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover"><h3 className="font-semibold text-[var(--color-text)] text-sm">Mobile Wallet Security</h3><p className="text-xs text-[var(--color-text-secondary)]">Keep your phone wallet safe</p></Link>
        </div>
      </section>
      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Wallets/best/ios", "description": "Feature-rich iOS wallet supporting 10M+ tokens across 100+ blockchains with built-in dApp browser, staking, and swap features.", "url": "https://degen0x.com/wallets/best/ios"}) }} />
    </div>
  );
}
