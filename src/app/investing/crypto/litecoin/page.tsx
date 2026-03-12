import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Invest in Litecoin (LTC) ${CURRENT_YEAR} - Complete Guide`,
  description: `Complete Litecoin investment guide for ${CURRENT_YEAR}. Learn about LTC fundamentals, halving cycles, MimbleWimble privacy, risks, and how to buy Litecoin.`,
  alternates: { canonical: "/investing/crypto/litecoin" },
};

const faqs = [
  { question: "Is Litecoin a good investment?", answer: "Litecoin is one of the oldest and most battle-tested cryptocurrencies, often described as the silver to Bitcoin's gold. Its consistent uptime, proven security, and growing payment adoption make it a relatively lower-risk crypto investment. However, it faces stiff competition from newer payment-focused blockchains and has seen declining developer mindshare." },
  { question: "What is the Litecoin halving?", answer: "Like Bitcoin, Litecoin undergoes a halving event approximately every four years where the block reward given to miners is cut in half. The most recent halving occurred in August 2023, reducing the reward from 12.5 LTC to 6.25 LTC per block. Halvings reduce the rate of new LTC creation, which historically has been a positive catalyst for price." },
  { question: "How does Litecoin compare to Bitcoin?", answer: "Litecoin produces blocks four times faster than Bitcoin (2.5 minutes vs 10 minutes), has four times the supply cap (84 million vs 21 million), and uses the Scrypt mining algorithm instead of SHA-256. Litecoin also implemented MimbleWimble Extension Blocks for optional transaction privacy, a feature Bitcoin lacks. Both share similar UTXO-based architectures." },
];

export default function LitecoinPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Litecoin", href: "/investing/crypto/litecoin" },
      ]} />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          How to Invest in Litecoin (LTC) in {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Litecoin is one of the earliest altcoins, created in 2011 as a faster and lighter
          version of Bitcoin. With over a decade of continuous operation, LTC is a proven payment
          network with growing merchant adoption and optional privacy features.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>
      </header>

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
        <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">Key Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div><p className="text-xs text-[var(--color-text-secondary)]">Ticker</p><p className="text-sm font-semibold text-[var(--color-text)]">LTC</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Launch Year</p><p className="text-sm font-semibold text-[var(--color-text)]">2011</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Max Supply</p><p className="text-sm font-semibold text-[var(--color-text)]">84,000,000 LTC</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Consensus</p><p className="text-sm font-semibold text-[var(--color-text)]">Proof of Work (Scrypt)</p></div>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What Is Litecoin?</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Litecoin was created in October 2011 by Charlie Lee, a former Google engineer, as a fork
          of Bitcoin's codebase with modifications designed to improve transaction speed and
          accessibility. Litecoin generates blocks every 2.5 minutes compared to Bitcoin's 10 minutes,
          uses the memory-hard Scrypt mining algorithm, and has a maximum supply of 84 million coins.
          It has operated continuously for over a decade with near-perfect uptime.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          Litecoin has historically served as a testbed for Bitcoin upgrades, being the first major
          cryptocurrency to activate Segregated Witness (SegWit) and one of the first to implement
          the Lightning Network. In 2022, Litecoin activated MimbleWimble Extension Blocks (MWEB),
          adding optional confidential transactions that hide transaction amounts, giving users
          enhanced privacy when desired.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Use Cases</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Litecoin is primarily used as a payment currency, offering faster and cheaper transactions
          than Bitcoin on the base layer. It is widely accepted by merchants through payment
          processors like BitPay and is supported by virtually every crypto ATM. Litecoin's MWEB
          privacy feature enables confidential transactions for users who value financial privacy.
          The Litecoin Card enables direct spending of LTC at millions of merchants worldwide.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Investment Risks</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Litecoin's main risk is declining relevance in an increasingly competitive landscape.
          Bitcoin's Lightning Network addresses the speed and cost advantages Litecoin once had,
          while newer blockchains offer faster and cheaper transactions. Developer activity on
          Litecoin is lower than most top-20 cryptocurrencies. The MWEB privacy feature has raised
          some regulatory concerns, leading to delistings on certain exchanges in specific
          jurisdictions. As a proof-of-work chain, Litecoin also faces the same energy consumption
          criticisms as Bitcoin.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How to Buy Litecoin</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Litecoin is available on every major cryptocurrency exchange including Coinbase, Binance,
          Kraken, and Gemini. Its long track record means it is also available on traditional
          platforms like PayPal and Robinhood. After purchasing, LTC can be stored in the official
          Litecoin Core wallet, hardware wallets like Ledger and Trezor, or multi-asset wallets
          like Exodus and Trust Wallet. Litecoin's wide support makes it one of the most accessible
          cryptocurrencies to buy and use.
        </p>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
