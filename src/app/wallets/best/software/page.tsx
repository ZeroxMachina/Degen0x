import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { softwareWallets } from "@/data/wallets";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best Software Wallets of ${CURRENT_YEAR} - Hot Wallet Reviews | ${SITE_NAME}`,
  description: `Compare the best software crypto wallets of ${CURRENT_YEAR}. MetaMask, Phantom, Trust Wallet, and more. Expert reviews of browser, mobile, and desktop wallets.`,
  alternates: { canonical: "/wallets/best/software" }};

const faqs = [
  {
    question: "Are software wallets safe?",
    answer:
      "Software wallets are generally safe for everyday transactions and moderate amounts of crypto. They encrypt your private keys on your device and require a password or biometric to access. However, because they are connected to the internet, they are more vulnerable to malware and phishing than hardware wallets. For large holdings, consider using a hardware wallet as your primary storage and a software wallet for daily transactions.",
  },
  {
    question: "What is the best free software wallet?",
    answer:
      "MetaMask is the best free software wallet for Ethereum and EVM chains, while Phantom is the best for Solana. For multi-chain support, Trust Wallet covers the most blockchains. All of these wallets are free to download and use, with fees only applying to on-chain transactions and optional swap features.",
  },
  {
    question: "Should I use a browser extension or mobile wallet?",
    answer:
      "It depends on your use case. Browser extensions are ideal for DeFi and dApp interactions on your computer. Mobile wallets are better for payments, quick transfers, and managing your portfolio on the go. Many wallets, like MetaMask and Phantom, offer both options and sync between them.",
  },
];

export default function BestSoftwareWalletsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Wallets", href: "/wallets" },
          { label: "Best Wallets", href: "/wallets/best" },
          { label: "Software Wallets", href: "/wallets/best/software" },
        ]}
      />

      <AffiliateDisclosure />

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Software Wallets of {CURRENT_MONTH} {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          Software wallets (hot wallets) are free, easy-to-use applications that run on your phone,
          browser, or desktop. They are the go-to choice for interacting with DeFi protocols, NFT
          marketplaces, and dApps. Here are our top picks based on security, features, and user experience.
        </p>
      </header>

      <section className="mb-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Why Use a Software Wallet?</h2>
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
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-[var(--color-text)] font-semibold mb-1 text-sm">Instant Access</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">No hardware needed. Install and start using immediately from your browser or phone.</p>
          </div>
          <div>
            <h3 className="text-[var(--color-text)] font-semibold mb-1 text-sm">DeFi Ready</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Connect to thousands of DeFi protocols, DEXs, and dApps with a single click.</p>
          </div>
          <div>
            <h3 className="text-[var(--color-text)] font-semibold mb-1 text-sm">Free to Use</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">All software wallets are free to download. You only pay network transaction fees.</p>
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

      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Best Software Wallets, Ranked</h2>
        <div className="space-y-6">
          {softwareWallets.map((product, index) => (
            <ProductCard
              key={product.name}
              product={product}
              rank={index + 1}
              categorySlug="wallets"
            />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Software Wallet Security Tips</h2>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <ul className="space-y-3 text-[var(--color-text-secondary)]">
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)] font-bold mt-0.5">1.</span>
              <span>Always download wallets from official websites or app stores. Fake wallet apps are a common scam vector.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)] font-bold mt-0.5">2.</span>
              <span>Write down your seed phrase on paper and store it securely. Never save it digitally or take a screenshot.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)] font-bold mt-0.5">3.</span>
              <span>Regularly review and revoke unused token approvals using tools like Revoke.cash or Etherscan's token approval checker.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)] font-bold mt-0.5">4.</span>
              <span>Use a dedicated browser profile for crypto to isolate your wallet from other browsing activity.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-primary)] font-bold mt-0.5">5.</span>
              <span>Consider pairing your software wallet with a hardware wallet for high-value transactions.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/wallets/best/hot-wallets" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Best Hot Wallets</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">All internet-connected wallets</p>
          </Link>
          <Link href="/wallets/best/mobile" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Best Mobile Wallets</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Top iOS and Android picks</p>
          </Link>
          <Link href="/wallets/learn/wallet-security-best-practices" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Security Best Practices</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Stay safe with hot wallets</p>
          </Link>
        </div>
      </section>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Wallets/best/software", "description": "Crypto content on degen0x", "url": "https://degen0x.com/wallets/best/software"}) }} />
    </div>
  );
}
