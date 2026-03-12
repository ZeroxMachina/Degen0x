import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Parachain? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what parachains are in the Polkadot ecosystem, how they connect to the relay chain, parachain auctions, and why application-specific chains matter.",
  keywords: ["parachain", "Polkadot parachain", "parachain auction", "relay chain", "application-specific blockchain"],
};

export default function ParachainPage() {
  return (
    <LearnPageLayout title="What Is a Parachain?" categoryName="Glossary" categorySlug="learn/glossary" readTime="4 min" intro="A parachain is an application-specific blockchain that runs in parallel within the Polkadot or Kusama network, sharing the security of the central relay chain. The name comes from 'parallelized chain' — multiple parachains process transactions simultaneously while the relay chain coordinates consensus and enables cross-chain communication. Parachains allow different blockchains to be purpose-built for specific use cases while benefiting from shared security and native interoperability."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "definition", title: "Definition", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-it-works", title: "How It Works", level: 2 },
        { id: "parachain-slots", title: "parachain-slots", level: 2 },
        { id: "parachain-slots-and-auctions", title: "Parachain Slots and Auctions", level: 2 }
      ]}
      faqs={[
        { question: "How many parachains can Polkadot support?", answer: "Polkadot was initially designed to support approximately 100 parachain slots, though this number can increase through governance decisions and technical upgrades. Kusama, Polkadot's canary network, serves as a testing ground where parachains can deploy with lower barriers. Not all slots need to be permanently leased — parathreads provide a pay-as-you-go alternative for chains that do not need continuous block production." },
        { question: "What is the difference between a parachain and a sidechain?", answer: "Parachains inherit security from Polkadot's relay chain — the same validators that secure Polkadot also validate parachain blocks. Sidechains (like Polygon PoS relative to Ethereum) have their own independent validator sets and security assumptions. This shared security model means parachains do not need to bootstrap their own validator network, but they are also more dependent on the relay chain's functionality and must secure a slot through auctions or agile coretime purchases." },
      ]}
      relatedArticles={[
        { title: "Layer 0", href: "/learn/glossary/layer-0", category: "Glossary" },
        { title: "Cross-Chain", href: "/learn/glossary/cross-chain", category: "Glossary" },
        { title: "Interoperability", href: "/learn/glossary/interoperability", category: "Glossary" },
        { title: "Polkadot Ecosystem Guide", href: "/learn/polkadot-ecosystem-guide", category: "Learn" },
      ]}
    >
      <section id="definition"><h2>Definition</h2><p>A parachain is a specialized Layer 1 blockchain that operates within the Polkadot ecosystem, running in parallel alongside other parachains while sharing the security and finality guarantees of Polkadot's relay chain. Each parachain can have its own token, governance, and transaction logic optimized for specific use cases — DeFi, identity, gaming, smart contracts, or any other application. The relay chain provides consensus and cross-chain messaging, while parachains handle application-specific execution. This architecture allows the Polkadot network to process many transactions in parallel across different chains, overcoming the throughput limitations of monolithic blockchains where all applications compete for the same block space.</p></section>
      <section id="how-it-works"><h2>How It Works</h2><p>Parachains produce blocks using their own collators (block-producing nodes), which collect transactions and create block candidates. These candidates are submitted to Polkadot's relay chain validators, who verify the parachain blocks and include them in the relay chain's finalized state. This shared validation model means parachains inherit the full economic security of the relay chain without needing their own validator sets. Cross-chain messages between parachains are routed through the relay chain using XCMP (Cross-Consensus Message Format), enabling native interoperability without bridges. Parachains built with Substrate (Polkadot's development framework) can customize their runtime — consensus, fee structure, governance, and state transition logic — while maintaining compatibility with the broader Polkadot ecosystem.</p></section>
      <section id="parachain-slots"><h2>Parachain Slots and Auctions</h2><p>Connecting to Polkadot's relay chain requires securing a parachain slot, which was historically done through candle auctions where projects bid DOT tokens. Projects used crowdloans to gather DOT from community supporters, who locked their tokens for the lease duration (up to 96 weeks) in exchange for the parachain's native tokens. Notable parachain auction winners include Acala (DeFi hub), Moonbeam (EVM compatibility), and Astar (multi-VM smart contracts). Polkadot has since transitioned to an agile coretime model, where blockspace on the relay chain can be purchased more flexibly — either as bulk coretime for continuous access or on-demand coretime for occasional use. This new model lowers barriers to entry and makes Polkadot more accessible to smaller projects and experimental chains.</p></section>
    </LearnPageLayout>
  );
}
