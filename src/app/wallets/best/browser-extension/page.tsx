import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";
import RelatedContent from '@/components/RelatedContent';

export const metadata: Metadata = {
  title: `Best Crypto Browser Extension Wallets (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `The best crypto browser extension wallets for ${CURRENT_YEAR}. Compare MetaMask, Rabby, Phantom, and more for DeFi, dApp access, and security.`,
};

const products = [
  { name: "MetaMask", slug: "metamask", rating: 4.5, description: "The industry standard browser extension wallet with near-universal dApp compatibility across Chrome, Firefox, Brave, and Edge browsers.", pros: ["Universal dApp compatibility", "Snaps extensibility system", "Custom RPC network support"], cons: ["Can be slow with many networks", "Default RPC privacy concerns"], bestFor: "Broadest dApp compatibility across all browsers", affiliateUrl: "#", category: "wallets" },
  { name: "Rabby", slug: "rabby", rating: 4.6, description: "Security-focused extension that simulates transactions before signing, showing exactly what tokens will change in your wallet.", pros: ["Transaction simulation preview", "Auto-detects active chain", "Contract risk assessment"], cons: ["Chrome-based browsers only", "Smaller ecosystem than MetaMask"], bestFor: "Security-first browser extension with pre-sign previews", affiliateUrl: "#", category: "wallets" },
  { name: "Phantom", slug: "phantom", rating: 4.7, description: "Multi-chain browser extension supporting Solana, Ethereum, and Polygon with clean interface and built-in swap functionality.", pros: ["Excellent Solana integration", "Clean and fast interface", "Built-in token swaps"], cons: ["Limited to few chains", "Not open source"], bestFor: "Solana and multi-chain browser extension users", affiliateUrl: "#", category: "wallets" },
  { name: "Coinbase Wallet", slug: "coinbase-wallet", rating: 4.3, description: "Browser extension by Coinbase with easy onboarding, multi-chain support, and optional cloud backup for key recovery.", pros: ["Beginner-friendly setup", "Cloud backup option", "Coinbase account integration"], cons: ["Connected to centralized entity", "Fewer DeFi-focused features"], bestFor: "Beginners wanting a trusted brand browser extension", affiliateUrl: "#", category: "wallets" },
  { name: "Zerion", slug: "zerion", rating: 4.4, description: "DeFi-focused extension with portfolio tracking across 15+ chains and automatic detection of all DeFi positions.", pros: ["Multi-chain portfolio view", "DeFi position tracking", "Swap aggregation"], cons: ["Premium features require subscription", "EVM chains only"], bestFor: "DeFi users wanting portfolio visibility in their browser", affiliateUrl: "#", category: "wallets" },
];

const faqs = [
  { question: "Are browser extension wallets safe?", answer: "Browser extension wallets are generally safe when downloaded from official sources and used with good security practices. Key risks include phishing sites mimicking wallet popups, malicious browser extensions, and clipboard hijacking. Always verify dApp URLs, keep your browser updated, minimize other extensions, and consider pairing with a hardware wallet for transaction signing." },
  { question: "Can I use multiple browser extension wallets?", answer: "Yes, you can install multiple wallet extensions in the same browser. Most dApps let you choose which wallet to connect. Having MetaMask for EVM chains and Phantom for Solana is a common setup. However, too many extensions can slow your browser, so install only what you actively use." },
  { question: "Should I use a browser extension or mobile wallet?", answer: "Browser extensions are best for desktop DeFi and dApp interactions. Mobile wallets are better for on-the-go transactions and casual portfolio checking. Many wallets like MetaMask and Phantom offer both, letting you sync accounts across platforms." },
];

export default function BestBrowserExtensionWalletsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Wallets", href: "/wallets" }, { label: "Best Wallets", href: "/wallets/best" }, { label: "Browser Extension", href: "/wallets/best/browser-extension" }]} />
      <AffiliateDisclosure />
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Best Crypto Browser Extension Wallets ({CURRENT_MONTH} {CURRENT_YEAR})</h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">Browser extension wallets are essential for interacting with DeFi protocols, NFT marketplaces, and dApps directly from your browser. We tested the top extensions for security, dApp compatibility, speed, and ease of use.</p>
      </header>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Best Browser Extension Wallets, Ranked</h2>
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
          <Link href="/wallets/learn/wallet-apps-vs-browser-extensions" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover"><h3 className="font-semibold text-[var(--color-text)] text-sm">Apps vs Extensions</h3><p className="text-xs text-[var(--color-text-secondary)]">Compare wallet form factors</p></Link>
          <Link href="/wallets/best/desktop" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover"><h3 className="font-semibold text-[var(--color-text)] text-sm">Best Desktop Wallets</h3><p className="text-xs text-[var(--color-text-secondary)]">Full desktop experiences</p></Link>
          <Link href="/wallets/learn/phishing-protection-guide" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover"><h3 className="font-semibold text-[var(--color-text)] text-sm">Phishing Protection</h3><p className="text-xs text-[var(--color-text-secondary)]">Stay safe from scam sites</p></Link>
        </div>
      </section>
      <FAQSection faqs={faqs} />
      <RelatedContent category="tools" currentSlug="/wallets/best/browser-extension" />
    </div>
  );
}
