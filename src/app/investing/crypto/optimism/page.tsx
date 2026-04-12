import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `How to Invest in Optimism (OP) ${CURRENT_YEAR} - Complete Guide`,
  description: `Complete Optimism investment guide for ${CURRENT_YEAR}. Learn about OP fundamentals, Superchain vision, governance, risks, and how to buy Optimism.`,
  alternates: { canonical: "/investing/crypto/optimism" },
};

const faqs = [
  { question: "Is Optimism a good investment?", answer: "Optimism is a leading Ethereum Layer 2 with the Superchain vision powering multiple chains including Coinbase's Base, Worldcoin, and Sony's Soneium. The OP Stack is becoming a standard for launching new L2 chains, which could drive significant value to the OP ecosystem. However, OP token's value accrual depends on Superchain revenue sharing and governance utility, which are still developing." },
  { question: "What is the Superchain?", answer: "The Superchain is Optimism's vision for a network of interoperable L2 chains all built on the OP Stack. Each chain shares a common bridge, communication layer, and security model. Chains like Base (Coinbase), Zora, Mode, and others contribute revenue back to the Optimism Collective. This creates a network effect where more chains joining the Superchain increases the value of the OP ecosystem." },
  { question: "How does Optimism governance work?", answer: "Optimism uses a bicameral governance system with the Token House (OP token holders vote on protocol upgrades and incentive allocation) and the Citizens' House (distributes retroactive public goods funding). This dual structure aims to balance token-holder interests with broader ecosystem public goods. OP is used for voting in the Token House governance process." },
];

export default function OptimismPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Optimism", href: "/investing/crypto/optimism" },
      ]} />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          How to Invest in Optimism (OP) in {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Optimism is a leading Ethereum Layer 2 scaling solution using optimistic rollup technology.
          Its OP Stack has become the foundation for the Superchain, a growing network of
          interoperable L2 chains including Coinbase's Base.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>
      </header>

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
        <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">Key Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div><p className="text-xs text-[var(--color-text-secondary)]">Ticker</p><p className="text-sm font-semibold text-[var(--color-text)]">OP</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Launch Year</p><p className="text-sm font-semibold text-[var(--color-text)]">2022</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Max Supply</p><p className="text-sm font-semibold text-[var(--color-text)]">4,294,967,296 OP</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Consensus</p><p className="text-sm font-semibold text-[var(--color-text)]">Optimistic Rollup (Ethereum security)</p></div>
        </div>

        <AuthorAttribution
          author="SatoshiGhost"
          role="Lead Researcher"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="investing"
        />

      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What Is Optimism?</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Optimism is an Ethereum Layer 2 network that uses optimistic rollup technology to bundle
          transactions off-chain and post compressed data to Ethereum for security. This enables
          significantly lower transaction fees (often 90-95% less than Ethereum mainnet) while
          inheriting Ethereum's security guarantees. The Optimism Collective, a governance body,
          manages the protocol and allocates resources to public goods that benefit the broader
          Ethereum ecosystem.
        </p>
        {/* editorial-voice */}
        <div style={{ background: '#041a12', border: '1px solid #064e3b', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📈</span>
            <strong style={{ color: '#10b981', fontSize: 15 }}>Research Perspective</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We are long-term Bitcoin and Ethereum believers. Our analysis of other assets applies the same rigorous framework regardless of personal conviction.
          </p>
        </div>
        <p className="text-[var(--color-text-secondary)]">
          The OP Stack, Optimism's modular open-source framework, has become the standard toolkit
          for launching new L2 chains. Coinbase's Base, one of the fastest-growing L2s, is built on
          the OP Stack. Other notable OP Stack chains include Worldcoin, Zora, Mode, and Sony's
          Soneium. This proliferation of OP Stack chains forms the Superchain, a horizontally
          scalable network that shares security, communication, and governance infrastructure.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Use Cases</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Optimism hosts major DeFi protocols including Velodrome (the leading DEX on OP), Aave,
          Synthetix, and numerous other applications. The OP token is used for governance in the
          Token House, where holders vote on protocol upgrades, incentive programs, and treasury
          management. Retroactive Public Goods Funding (RetroPGF) distributes millions to projects
          that have contributed to the Ethereum and Optimism ecosystems. The Superchain model
          positions OP as infrastructure for the next wave of L2 adoption.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Investment Risks</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          OP's primary risk is that the Superchain model is still evolving, and revenue sharing
          mechanisms between chains are not yet fully implemented. Competition from Arbitrum (which
          has higher TVL), ZK rollups, and new L2 entrants is intense. Token inflation from ongoing
          airdrops, ecosystem incentives, and team allocations can create selling pressure. The
          optimistic rollup model has a 7-day fraud proof window for withdrawals, which is less
          user-friendly than ZK rollups. Dependence on Ethereum for security means OP inherits
          Ethereum's scaling roadmap risks as well.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How to Buy Optimism</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          OP is available on major exchanges including Coinbase, Binance, Kraken, and OKX. You can
          also bridge ETH to Optimism and swap for OP directly on the network using DEXs like
          Velodrome. After purchasing, OP can be delegated to governance delegates to participate
          in protocol governance. Store OP in any Ethereum-compatible wallet like MetaMask
          (configured for the Optimism network), Coinbase Wallet, or Ledger hardware wallets.
        </p>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
