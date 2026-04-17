import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { ComparisonItem } from "@/lib/types";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RelatedContent from '@/components/RelatedContent';


export const metadata: Metadata = {
  title: `Trust Wallet vs MetaMask (${CURRENT_YEAR}): Multi-Chain Wallet Comparison | ${SITE_NAME}`,
  description: `Trust Wallet vs MetaMask comparison for ${CURRENT_YEAR}. Compare from the multi-chain perspective: native chain support, mobile UX, staking, and security.`,
};

const items: ComparisonItem[] = [
  { name: "Trust Wallet", slug: "trust-wallet", rating: 4.4, affiliateUrl: "https://degen0x.com/go/trust-wallet", features: { "Native Chains": "100+", "Bitcoin Support": "Yes (native)", "Solana Support": "Yes (native)", "Cosmos Support": "Yes (native)", "Mobile-First": "Yes", "dApp Browser": "Built-in (mobile)", "Staking": "Multi-chain staking", "Backed By": "Binance-affiliated" } },
  { name: "MetaMask", slug: "metamask", rating: 4.5, affiliateUrl: "https://degen0x.com/go/metamask", features: { "Native Chains": "EVM chains only", "Bitcoin Support": "Via Snaps (limited)", "Solana Support": "Via Snaps (limited)", "Cosmos Support": "No", "Mobile-First": "No (browser extension)", "dApp Browser": "Browser extension", "Staking": "ETH staking only", "Backed By": "Consensys" } },
];

const features = ["Native Chains", "Bitcoin Support", "Solana Support", "Cosmos Support", "Mobile-First", "dApp Browser", "Staking", "Backed By"];

const faqs = [
  { question: "Which wallet supports more chains natively?", answer: "Trust Wallet supports over 100 chains natively, including non-EVM chains like Bitcoin, Solana, Cosmos, and Polkadot. MetaMask only natively supports EVM-compatible chains. MetaMask Snaps add some non-EVM support but it is still limited compared to Trust Wallet." },
  { question: "Is Trust Wallet owned by Binance?", answer: "Trust Wallet was acquired by Binance in 2018 but has operated as an independent entity. It is self-custody, meaning Binance does not have access to your private keys. The wallet has its own development team and roadmap." },
  { question: "Which is better for DeFi?", answer: "MetaMask is better for Ethereum-based DeFi due to its deep integration with virtually every EVM dApp. Trust Wallet is better for multi-chain DeFi across Solana, Cosmos, and other ecosystems. Your choice depends on which chains you use most." },
];

export default function TrustWalletVsMetamaskPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Wallets", href: "/wallets" },
          { label: "Compare", href: "/wallets/compare" },
          { label: "Trust Wallet vs MetaMask", href: "/wallets/compare/trust-wallet-vs-metamask" },
        ]}
      />
      <AffiliateDisclosure />

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Trust Wallet vs MetaMask: Multi-Chain Perspective ({CURRENT_YEAR})</h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          This comparison examines Trust Wallet and MetaMask from a multi-chain perspective,
          focusing on native chain support, mobile experience, and cross-ecosystem capabilities.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      </header>

      <section className="mb-10">
        <ComparisonTable items={items} features={features} title="Trust Wallet vs MetaMask: Multi-Chain" />
      </section>

      <div className="prose-crypto">
        <h2>Native Multi-Chain Support</h2>
        <p>
          Trust Wallet&apos;s biggest advantage is native support for over 100 blockchains. You can
          hold Bitcoin, Solana, Cosmos, Polkadot, and all EVM tokens in a single wallet without
          any configuration. MetaMask is fundamentally an EVM wallet; support for non-EVM chains
          through Snaps is still maturing and not as seamless as Trust Wallet&apos;s native integration.
        </p>
        <p>
          For users who hold assets across many different ecosystems, Trust Wallet provides a
          unified experience that MetaMask cannot match. For users who primarily use Ethereum
          and its L2s, MetaMask&apos;s EVM-focused approach is perfectly adequate.
        </p>

        <h2>Mobile vs Desktop</h2>
        <p>
          Trust Wallet was designed mobile-first with a polished iOS and Android experience.
          Its built-in dApp browser on mobile provides access to DeFi protocols across all
          supported chains. MetaMask is primarily a browser extension that was later adapted
          for mobile. The desktop extension experience is superior for MetaMask, while Trust
          Wallet wins on mobile.
        </p>

        <h2>Staking Capabilities</h2>
        <p>
          Trust Wallet supports staking across multiple chains including BNB, Solana, Cosmos,
          Polkadot, and more, all within the wallet interface. MetaMask offers ETH staking
          through integrated providers like Lido and Rocket Pool but lacks multi-chain staking
          options. For passive yield across multiple ecosystems, Trust Wallet is more versatile.
        </p>

        <h2 id="verdict">Verdict</h2>
        <div className="not-prose rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 my-6">
          <p className="text-[var(--color-text-secondary)] mb-4">
            <strong className="text-[var(--color-text)]">Choose Trust Wallet if:</strong> You hold assets on
            multiple non-EVM chains, prefer mobile-first crypto management, and want built-in
            multi-chain staking capabilities.
          </p>
          <p className="text-[var(--color-text-secondary)]">
            <strong className="text-[var(--color-text)]">Choose MetaMask if:</strong> You primarily use
            Ethereum and EVM L2s, prefer a browser extension workflow for DeFi, and want the
            widest dApp compatibility in the EVM ecosystem.
          </p>
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


      <section className="mb-12 mt-10">
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/wallets/compare/metamask-vs-trust-wallet" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <span className="text-xs text-[var(--color-primary)]">Compare</span>
            <h3 className="font-semibold text-[var(--color-text)] text-sm">MetaMask vs Trust Wallet</h3>
          </Link>
          <Link href="/wallets/learn/defi-wallet-guide" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <span className="text-xs text-[var(--color-primary)]">Guide</span>
            <h3 className="font-semibold text-[var(--color-text)] text-sm">DeFi Wallet Guide</h3>
          </Link>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <RelatedContent category="tools" currentSlug="/wallets/compare/trust-wallet-vs-metamask" />
    </div>
  );
}
