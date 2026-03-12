import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Invest in Monero (XMR) ${CURRENT_YEAR} - Complete Guide`,
  description: `Complete Monero investment guide for ${CURRENT_YEAR}. Learn about XMR fundamentals, privacy technology, ring signatures, risks, and how to buy Monero.`,
  alternates: { canonical: "/investing/crypto/monero" },
};

const faqs = [
  { question: "Is Monero a good investment?", answer: "Monero is the leading privacy-focused cryptocurrency with proven technology and a dedicated community. Its strong privacy guarantees make it uniquely positioned in an era of increasing financial surveillance. However, regulatory risk is the primary concern, as several exchanges have delisted XMR due to compliance requirements. This limits liquidity and accessibility." },
  { question: "Is Monero legal?", answer: "Monero is legal to own and use in most jurisdictions. However, some exchanges in certain countries have delisted XMR due to regulatory pressure around privacy coins. Japan, South Korea, and Australia have seen some exchanges remove Monero. Using Monero for illegal activities is, of course, illegal, just as using cash for illegal purposes would be." },
  { question: "How does Monero privacy work?", answer: "Monero uses three main privacy technologies: ring signatures (hide the sender among a group of possible signers), stealth addresses (create one-time addresses for each transaction so the receiver's real address is never on the blockchain), and RingCT (hides transaction amounts). Together, these make Monero transactions virtually untraceable by default." },
];

export default function MoneroPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Monero", href: "/investing/crypto/monero" },
      ]} />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          How to Invest in Monero (XMR) in {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Monero is the leading privacy-focused cryptocurrency, providing untraceable and
          unlinkable transactions by default. XMR uses advanced cryptographic techniques to
          ensure financial privacy for all users without optional opt-in requirements.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>
      </header>

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
        <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">Key Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div><p className="text-xs text-[var(--color-text-secondary)]">Ticker</p><p className="text-sm font-semibold text-[var(--color-text)]">XMR</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Launch Year</p><p className="text-sm font-semibold text-[var(--color-text)]">2014</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Max Supply</p><p className="text-sm font-semibold text-[var(--color-text)]">No hard cap (tail emission: 0.6 XMR/block)</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Consensus</p><p className="text-sm font-semibold text-[var(--color-text)]">Proof of Work (RandomX)</p></div>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What Is Monero?</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Monero was launched in April 2014 as a fork of the Bytecoin protocol, based on the
          CryptoNote technology. Unlike Bitcoin, where all transactions are transparent on the
          blockchain, Monero makes privacy the default. Every Monero transaction automatically
          obscures the sender, receiver, and amount using ring signatures, stealth addresses, and
          Ring Confidential Transactions (RingCT). This makes Monero fungible, meaning every XMR
          is interchangeable and cannot be tainted by its transaction history.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          Monero uses the RandomX proof-of-work algorithm, specifically designed to be efficient on
          consumer CPUs and resistant to ASIC mining. This promotes mining decentralization, as
          anyone with a regular computer can mine XMR. The project is maintained by a global
          community of volunteer developers and funded through a community crowdfunding system rather
          than a centralized company or foundation with pre-mined tokens.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Use Cases</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Monero is used for private financial transactions, protecting personal and business
          financial data from surveillance and blockchain analysis. Use cases include salary
          payments where employees prefer privacy, donations where anonymity is desired, business
          transactions where competitive intelligence from on-chain analysis is a concern, and
          personal financial privacy. Monero is also used for CPU mining as a way to earn
          cryptocurrency without specialized hardware.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Investment Risks</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Regulatory risk is Monero's most significant challenge. Multiple major exchanges have
          delisted XMR in various jurisdictions due to anti-money laundering compliance requirements.
          This reduces liquidity and accessibility for investors. The perception of Monero as a
          tool for illicit activity, while inaccurate as a characterization of its primary use,
          creates reputational headwinds. The lack of exchange listings also means XMR may not
          benefit as much from bull market rallies when retail investors primarily use major exchanges.
          Additionally, the proof-of-work model faces environmental scrutiny.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How to Buy Monero</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Due to delistings on some major exchanges, buying Monero requires checking which platforms
          support it in your jurisdiction. Kraken, KuCoin, and Binance (in some regions) still list
          XMR. Decentralized options include atomic swaps with Bitcoin, the Haveno decentralized
          exchange, and LocalMonero-style peer-to-peer platforms. After purchasing, the official
          Monero GUI wallet or Feather Wallet provide the best experience for self-custody. Ledger
          hardware wallets also support XMR.
        </p>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
