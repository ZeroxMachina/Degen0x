import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Invest in Fantom (FTM) ${CURRENT_YEAR} - Complete Guide`,
  description: `Complete Fantom investment guide for ${CURRENT_YEAR}. Learn about FTM fundamentals, Sonic upgrade, DeFi ecosystem, risks, and how to buy Fantom.`,
  alternates: { canonical: "/investing/crypto/fantom" },
};

const faqs = [
  { question: "Is Fantom a good investment?", answer: "Fantom is an EVM-compatible Layer 1 with a loyal DeFi community and the involvement of DeFi pioneer Andre Cronje. The upcoming Sonic upgrade promises massive performance improvements. However, Fantom's DeFi TVL declined significantly from its 2022 peaks, and competition from other high-performance EVM chains is intense. The Multichain bridge exploit in 2023 also damaged ecosystem confidence." },
  { question: "What is the Sonic upgrade?", answer: "Sonic is Fantom's major network upgrade that introduces the Fantom Virtual Machine (FVM), a new execution engine that dramatically increases throughput to over 2,000 transactions per second with sub-second finality. Sonic also introduces a new database architecture for more efficient state storage. The upgrade positions Fantom as one of the fastest EVM-compatible chains, aiming to recapture market share lost to newer competitors." },
  { question: "Who is Andre Cronje?", answer: "Andre Cronje is a prominent DeFi developer known as the creator of Yearn Finance and a key architect of the Fantom ecosystem. His involvement has been a major draw for DeFi developers and users. Cronje serves as a director at the Fantom Foundation and has driven the development of Sonic and other core infrastructure. His reputation in DeFi brings both credibility and community attention to Fantom." },
];

export default function FantomPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Fantom", href: "/investing/crypto/fantom" },
      ]} />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          How to Invest in Fantom (FTM) in {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Fantom is an EVM-compatible Layer 1 blockchain known for its DeFi ecosystem and the
          involvement of Andre Cronje. The network is undergoing a major evolution with the Sonic
          upgrade, promising dramatically improved performance and new capabilities.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>
      </header>

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
        <h2 className="text-lg font-semibold text-white mb-4">Key Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div><p className="text-xs text-[var(--color-text-secondary)]">Ticker</p><p className="text-sm font-semibold text-white">FTM</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Launch Year</p><p className="text-sm font-semibold text-white">2019</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Max Supply</p><p className="text-sm font-semibold text-white">3,175,000,000 FTM</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Consensus</p><p className="text-sm font-semibold text-white">Lachesis (aBFT Proof of Stake)</p></div>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">What Is Fantom?</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Fantom is a DAG-based (Directed Acyclic Graph) smart contract platform that uses the
          Lachesis consensus mechanism to achieve asynchronous Byzantine Fault Tolerance. Launched
          in 2019, Fantom gained significant traction in the 2021-2022 DeFi cycle, particularly
          after Andre Cronje began building on the platform. The Opera chain provides EVM
          compatibility, allowing Ethereum developers to deploy contracts on Fantom with minimal
          modifications while benefiting from faster and cheaper transactions.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          The Sonic upgrade represents a new era for Fantom, introducing a redesigned virtual machine
          and database layer that dramatically improves throughput and reduces storage requirements.
          Fantom has maintained a loyal DeFi community and continues to attract developers interested
          in high-performance EVM execution. The Fantom Foundation's treasury provides runway for
          ecosystem grants and development incentives to rebuild momentum after the challenges of
          the 2022-2023 bear market.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Use Cases</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Fantom hosts a DeFi ecosystem including SpookySwap (DEX), Beethoven X (balancer-style
          protocol), Geist Finance (lending), and various yield farming opportunities. FTM is used
          for gas fees, staking with validators to earn rewards, and governance. The chain also
          supports NFTs, gaming applications, and enterprise use cases. With the Sonic upgrade,
          Fantom aims to attract new applications requiring high throughput, including perpetual
          DEXs, gaming, and social applications.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Investment Risks</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Fantom's TVL declined significantly from its 2022 peaks, and the Multichain bridge
          exploit in 2023 caused hundreds of millions in losses for ecosystem participants, damaging
          trust. Competition from Solana, Arbitrum, Base, and newer EVM chains makes recapturing
          market share challenging. The ecosystem's heavy dependence on Andre Cronje's involvement
          creates key-person risk. While the Sonic upgrade promises improvements, execution risk
          exists. FTM's token is largely fully circulating, which reduces dilution risk but also
          means there are fewer catalysts from supply reduction.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">How to Buy Fantom</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          FTM is available on major exchanges including Binance, Coinbase, Kraken, and OKX. After
          purchasing, you can stake FTM through the official Fantom wallet (fWallet) or through
          MetaMask configured for the Fantom Opera network. Staking earns approximately 4-6% APY
          depending on the lock-up period. FTM can also be stored on Ledger hardware wallets.
          Consider that the Sonic upgrade may introduce changes to tokenomics, so stay updated on
          migration details.
        </p>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
