import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { walletComparisonItems } from "@/data/wallets";
import Link from "next/link";

export const metadata: Metadata = {
  title: `MetaMask vs Phantom (${CURRENT_YEAR}) - Which Wallet Is Better? | ${SITE_NAME}`,
  description: `MetaMask vs Phantom side-by-side comparison for ${CURRENT_YEAR}. Chain support, DeFi features, NFTs, fees, and user experience compared.`,
};

const faqs = [
  { question: "Should I use MetaMask or Phantom?", answer: "If you primarily use Ethereum and EVM chains, MetaMask has the broadest dApp compatibility. If you use Solana or want the best NFT experience, Phantom is the better choice. If you use both ecosystems, you can install both wallets in the same browser and use them for their respective strengths." },
  { question: "Can I use both MetaMask and Phantom?", answer: "Yes. You can install both browser extensions simultaneously. MetaMask will be the default for EVM dApps, and Phantom will be the default for Solana dApps. Most dApps let you choose which wallet to connect. Using both is a common setup among multi-chain DeFi users." },
  { question: "Which has lower fees?", answer: "Both wallets are free to download and use. For swaps, MetaMask charges 0.875% and Phantom charges 0.85%. However, the underlying blockchain fees differ significantly: Solana transactions on Phantom cost fractions of a cent, while Ethereum transactions on MetaMask can cost several dollars depending on network congestion." },
  { question: "Which is more secure?", answer: "MetaMask is fully open-source, which provides transparency for security auditing. Phantom includes transaction simulation that previews outcomes before signing. Both support hardware wallet integration. Neither is objectively more secure than the other, but their security approaches differ." },
  { question: "Does Phantom support Ethereum?", answer: "Yes. Phantom added Ethereum and Polygon support, making it a multi-chain wallet. However, MetaMask has deeper EVM integration with more extensive dApp compatibility, custom RPC support, and the MetaMask Snaps extension system for additional functionality." },
];

export default function MetaMaskVsPhantomPage() {
  const items = [
    walletComparisonItems["metamask"],
    walletComparisonItems["phantom"],
  ];

  const allFeatures = [
    "Type", "Price", "Supported Coins", "Mobile App", "Open Source",
    "DeFi Access", "NFT Support", "Staking", "Multi-Sig", "Backup Method",
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Wallets", href: "/wallets" },
          { label: "Compare", href: "/wallets/compare" },
          { label: "MetaMask vs Phantom", href: "/wallets/compare/metamask-vs-phantom" },
        ]}
      />
      <AffiliateDisclosure />

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">MetaMask vs Phantom: Which Wallet Should You Choose in {CURRENT_YEAR}?</h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          MetaMask and Phantom are the two most popular software wallets for DeFi and dApp access. We compare
          their chain support, features, user experience, and security to help you decide.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      </header>

      <section className="mb-10">
        <ComparisonTable items={items} features={allFeatures} title="MetaMask vs Phantom" />
      </section>

      <div className="prose-crypto">
        <h2>Chain Support</h2>
        <p>
          MetaMask supports Ethereum and every EVM-compatible chain (Polygon, Arbitrum, Optimism, Base, Avalanche,
          BNB Chain, and hundreds more). Through MetaMask Snaps, experimental support for non-EVM chains is being
          added. Phantom supports Solana, Ethereum, Polygon, and Bitcoin. MetaMask wins on chain breadth, but
          Phantom wins on cross-ecosystem coverage by including both Solana and Bitcoin alongside EVM chains.
        </p>

        <h2>DeFi & dApp Compatibility</h2>
        <p>
          MetaMask is the industry standard for EVM dApp connectivity. Nearly every Ethereum-based protocol
          supports MetaMask, making it essential for serious DeFi users. Phantom is the standard for Solana dApps
          and has growing Ethereum dApp support. For maximum compatibility across the EVM ecosystem, MetaMask
          is the safer choice. For Solana DeFi, Phantom is unmatched.
        </p>

        <h2>NFT Experience</h2>
        <p>
          Phantom significantly outperforms MetaMask in NFT management. Phantom displays NFTs in a beautiful gallery
          with collection grouping, floor prices, spam detection, and the ability to burn unwanted tokens. MetaMask
          shows NFTs with basic image previews and collection names but lacks Phantom&apos;s gallery polish and
          NFT-specific features.
        </p>

        <h2>User Experience</h2>
        <p>
          Phantom is widely regarded as having the superior user interface. Its design is modern, animations are smooth,
          and navigation is intuitive. MetaMask is functional but can feel cluttered, especially for new users. Both
          offer mobile apps and browser extensions. MetaMask&apos;s mobile dApp browser is functional but not as polished as
          Phantom&apos;s.
        </p>

        <h2>Swap Features</h2>
        <p>
          Both wallets include built-in swap aggregators. MetaMask charges 0.875% and sources from multiple DEXs.
          Phantom charges 0.85% and uses Jupiter (Solana) and 0x (Ethereum). On Solana, Phantom swaps are nearly
          instant and virtually free in gas costs. On Ethereum, both wallets face the same gas fee environment.
        </p>

        <h2 id="verdict">Our Verdict</h2>
        <div className="not-prose rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 my-6">
          <p className="text-[var(--color-text-secondary)] mb-4">
            <strong className="text-[var(--color-text)]">Choose MetaMask if:</strong> You are an Ethereum and EVM-focused DeFi user
            who needs maximum dApp compatibility, or you need the MetaMask Snaps extension system.
          </p>
          <p className="text-[var(--color-text-secondary)]">
            <strong className="text-[var(--color-text)]">Choose Phantom if:</strong> You use Solana, want the best NFT experience,
            prefer a more polished UI, or need multi-ecosystem support (Solana + Ethereum + Bitcoin).
          </p>
        </div>
      </div>

      <section className="mb-12 mt-10">
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/wallets/reviews/metamask" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <span className="text-xs text-[var(--color-primary)]">Review</span>
            <h3 className="font-semibold text-[var(--color-text)] text-sm">MetaMask Full Review</h3>
          </Link>
          <Link href="/wallets/reviews/phantom" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <span className="text-xs text-[var(--color-primary)]">Review</span>
            <h3 className="font-semibold text-[var(--color-text)] text-sm">Phantom Full Review</h3>
          </Link>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
