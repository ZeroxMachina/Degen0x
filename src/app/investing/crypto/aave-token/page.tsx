import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `How to Invest in Aave (AAVE) ${CURRENT_YEAR} - Complete Guide`,
  description: `Complete Aave token investment guide for ${CURRENT_YEAR}. Learn about AAVE fundamentals, DeFi lending, governance, revenue sharing, risks, and how to buy AAVE.`,
  alternates: { canonical: "/investing/crypto/aave-token" },
};

const faqs = [
  { question: "Is AAVE a good investment?", answer: "Aave is the largest DeFi lending protocol by total value locked, deployed across Ethereum, Arbitrum, Polygon, Optimism, and other chains. The protocol generates significant revenue from borrowing fees, and AAVE token holders benefit from governance rights and the Safety Module staking mechanism. Recent governance proposals to share protocol revenue with AAVE stakers could significantly enhance the token's value proposition." },
  { question: "How does Aave lending work?", answer: "Aave allows users to deposit crypto assets into lending pools to earn interest, and borrowers can take overcollateralized loans against their deposited collateral. Interest rates adjust algorithmically based on supply and demand. Aave pioneered flash loans (uncollateralized loans that must be repaid within a single transaction) and offers both variable and stable interest rate options." },
  { question: "What is the AAVE Safety Module?", answer: "The Safety Module is a staking mechanism where AAVE holders can stake their tokens to backstop the protocol against potential shortfall events (like bad debt from liquidation failures). In return, stakers earn AAVE rewards and a share of protocol fees. Staked AAVE has a 10-day cooldown period for unstaking. The Safety Module creates demand for AAVE while providing insurance-like protection for the protocol." },
];

export default function AaveTokenPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Aave", href: "/investing/crypto/aave-token" },
      ]} />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          How to Invest in Aave (AAVE) in {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Aave is the leading decentralized lending and borrowing protocol in DeFi. The AAVE token
          provides governance rights over the protocol and can be staked in the Safety Module to
          earn rewards while helping secure the protocol against insolvency risk.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>
      </header>

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
        <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">Key Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div><p className="text-xs text-[var(--color-text-secondary)]">Ticker</p><p className="text-sm font-semibold text-[var(--color-text)]">AAVE</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Launch Year</p><p className="text-sm font-semibold text-[var(--color-text)]">2020</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Max Supply</p><p className="text-sm font-semibold text-[var(--color-text)]">16,000,000 AAVE</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Consensus</p><p className="text-sm font-semibold text-[var(--color-text)]">ERC-20 Governance Token</p></div>
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
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What Is Aave?</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Aave (Finnish for "ghost") is a decentralized, non-custodial lending and borrowing protocol
          originally launched as ETHLend in 2017 and rebranded to Aave in 2020. Founded by Stani
          Kulechov, Aave has grown to become the largest lending protocol in DeFi with billions in
          total value locked across multiple blockchain networks. The protocol allows users to earn
          interest on deposited assets, borrow against collateral, and access innovative features
          like flash loans and credit delegation.
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
          Aave v3, the current version, introduced features like Efficiency Mode (eMode) for
          correlated asset borrowing at higher loan-to-value ratios, Portal for cross-chain liquidity
          bridging, and Isolation Mode for listing new assets with capped risk exposure. The protocol
          is deployed on Ethereum, Arbitrum, Optimism, Polygon, Avalanche, Base, and other chains.
          Aave has also launched GHO, its own decentralized stablecoin backed by Aave collateral,
          further expanding the protocol's DeFi footprint.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Use Cases</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          AAVE is used for governance voting on protocol parameters, risk management decisions,
          and strategic direction. Staking AAVE in the Safety Module earns rewards while providing
          protocol insurance. The Aave protocol itself enables earning yield on deposits, leveraged
          trading through recursive borrowing, flash loans for arbitrage and liquidations, and
          stablecoin minting through GHO. Institutional participants use Aave Arc for permissioned
          DeFi lending with KYC-verified counterparties.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Investment Risks</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Smart contract risk is inherent to any DeFi protocol, though Aave has undergone extensive
          auditing and has a strong security track record. Protocol revenue sharing with token
          holders is still being implemented through governance. Competition from other lending
          protocols like Compound, Spark (MakerDAO), and Morpho Blue is increasing. DeFi regulatory
          uncertainty could impact Aave's operations in certain jurisdictions. Bad debt events,
          while managed through the Safety Module, could erode confidence. The relatively small
          total supply of 16 million tokens means large holders can have outsized governance influence.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How to Buy Aave</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          AAVE is available on major exchanges including Coinbase, Binance, Kraken, and Gemini. You
          can also acquire AAVE through decentralized exchanges like Uniswap. After purchasing, AAVE
          can be staked in the Safety Module to earn staking rewards and participate in protocol
          governance. Store AAVE in any Ethereum-compatible wallet like MetaMask, Coinbase Wallet,
          or Ledger hardware wallets. Participating in governance requires delegating or directly
          voting with your AAVE tokens through the Aave governance portal.
        </p>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
