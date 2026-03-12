import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { CRYPTO_TOKENS } from "@/data/investing";

const token = CRYPTO_TOKENS[7];

export const metadata: Metadata = {
  title: `How to Invest in Polygon (POL) ${CURRENT_YEAR} - Complete Guide`,
  description: `Complete Polygon investment guide for ${CURRENT_YEAR}. Learn about POL fundamentals, zkEVM, enterprise adoption, and how to buy Polygon.`,
  alternates: { canonical: "/investing/crypto/polygon" },
};

const faqs = [
  { question: "What happened to MATIC?", answer: "MATIC was migrated to POL as part of Polygon 2.0, a major protocol upgrade. POL serves as the native token for the unified Polygon ecosystem including the PoS chain, zkEVM, and CDK chains. Existing MATIC holders were able to convert their tokens to POL." },
  { question: "What is Polygon zkEVM?", answer: "Polygon zkEVM is a zero-knowledge rollup that is fully EVM-equivalent, meaning existing Ethereum smart contracts can deploy without modification. It combines the security of ZK proofs with full Ethereum compatibility, offering a significant advancement in L2 technology." },
  { question: "Can I stake POL?", answer: "Yes. POL can be staked on the Polygon PoS chain to earn rewards. The staking process involves delegating to validators through the Polygon staking portal. Yields are variable but typically range from 4-6% APY. POL staking also plays a role in securing future Polygon 2.0 chains." },
];

export default function PolygonPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Polygon", href: "/investing/crypto/polygon" },
      ]} />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">How to Invest in Polygon (POL) in {CURRENT_YEAR}</h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Polygon is a comprehensive Ethereum scaling ecosystem offering PoS chain, zkEVM, and
          CDK for custom chains, with strong enterprise adoption and wide protocol support.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      </header>

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
        <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">Key Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div><p className="text-xs text-[var(--color-text-secondary)]">Ticker</p><p className="text-sm font-semibold text-[var(--color-text)]">{token.ticker}</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Launch Year</p><p className="text-sm font-semibold text-[var(--color-text)]">{token.launchYear}</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Max Supply</p><p className="text-sm font-semibold text-[var(--color-text)]">{token.maxSupply}</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Consensus</p><p className="text-sm font-semibold text-[var(--color-text)]">{token.consensus}</p></div>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What Is Polygon?</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Polygon has evolved from a single PoS sidechain into a comprehensive suite of Ethereum
          scaling solutions. The ecosystem now includes Polygon PoS (the original chain), Polygon
          zkEVM (a ZK-rollup with full EVM equivalence), and Polygon CDK (a framework for
          building custom ZK-powered chains). Major enterprises including Starbucks, Nike, and
          Reddit have built on Polygon.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          The Polygon 2.0 vision aims to unify all Polygon chains into an interconnected ecosystem
          sharing security and liquidity through ZK technology. The MATIC to POL token migration
          is part of this upgrade, positioning POL as the unified staking and governance token
          for the entire ecosystem.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Investment Risks</h2>
        <p className="text-[var(--color-text-secondary)]">
          Polygon faces intense competition from other L2 solutions like Arbitrum, Optimism, and
          Base. The MATIC to POL migration adds complexity for token holders. The PoS chain's
          activity has declined relative to optimistic rollup L2s, and zkEVM adoption is still
          growing. The Polygon 2.0 roadmap is ambitious, and execution risk is significant. Token
          supply inflation through POL could create dilutive pressure.
        </p>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
