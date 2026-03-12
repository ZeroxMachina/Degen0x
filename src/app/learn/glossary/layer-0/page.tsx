import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Layer 0? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what Layer 0 blockchains are, how they enable interoperability between chains, and how projects like Polkadot, Cosmos, and LayerZero function as foundational infrastructure.",
  keywords: ["layer 0", "layer zero", "blockchain infrastructure", "interoperability layer", "cross-chain protocol"],
};

export default function LayerZeroPage() {
  return (
    <LearnPageLayout title="What Is Layer 0?" categoryName="Glossary" categorySlug="learn/glossary" readTime="4 min" intro="Layer 0 refers to the foundational infrastructure protocols that sit beneath Layer 1 blockchains (like Ethereum or Bitcoin), enabling them to communicate, share data, and transfer assets across different networks. Layer 0 protocols provide the underlying framework for building and connecting multiple blockchains, addressing one of crypto's biggest challenges: interoperability between isolated blockchain ecosystems."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "definition", title: "Definition", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-it-works", title: "How It Works", level: 2 },
        { id: "examples", title: "examples", level: 2 },
        { id: "key-examples", title: "Key Examples", level: 2 }
      ]}
      faqs={[
        { question: "What is the difference between Layer 0 and Layer 1?", answer: "Layer 1 blockchains (Ethereum, Solana, Bitcoin) are standalone networks that process and finalize transactions independently. Layer 0 protocols sit beneath Layer 1s, providing the infrastructure for multiple Layer 1s to connect and interoperate. Think of Layer 0 as the foundation or highway system, and Layer 1s as the cities connected by those highways. Layer 0 does not replace Layer 1 — it connects them." },
        { question: "Is LayerZero the same as Layer 0?", answer: "LayerZero (the protocol) is one specific cross-chain messaging protocol that enables communication between blockchains, but 'Layer 0' is the broader category term. Other Layer 0 projects include Polkadot, Cosmos, and Avalanche's subnet architecture. LayerZero (the company) chose its name to reflect its position in the blockchain stack, but it is just one approach among several." },
        { question: "Why do we need Layer 0?", answer: "Without Layer 0 infrastructure, each blockchain operates as an isolated ecosystem. Users must rely on centralized bridges or exchanges to move assets between chains, creating security risks and friction. Layer 0 protocols enable native cross-chain communication, allowing applications to span multiple blockchains seamlessly, which is essential for a multi-chain future where no single blockchain serves all use cases." },
      ]}
      relatedArticles={[
        { title: "Cross-Chain", href: "/learn/glossary/cross-chain", category: "Glossary" },
        { title: "Interoperability", href: "/learn/glossary/interoperability", category: "Glossary" },
        { title: "Bridge", href: "/learn/glossary/bridge", category: "Glossary" },
        { title: "Parachain", href: "/learn/glossary/parachain", category: "Glossary" },
      ]}
    >
      <section id="definition"><h2>Definition</h2><p>Layer 0 is the infrastructure layer that enables different blockchains to be built on top of it and communicate with each other. The blockchain stack is often described in layers: Layer 0 provides the base infrastructure and cross-chain communication, Layer 1 provides the base blockchain (consensus, execution, data availability), Layer 2 provides scaling solutions built on top of Layer 1, and application layers sit on top. Layer 0 protocols solve the interoperability problem — the inability of independent blockchains to natively share data, verify each other's state, or transfer assets without trusted intermediaries. By creating standardized communication protocols at the foundational level, Layer 0 aims to transform isolated blockchains into an interconnected network of networks.</p></section>
      <section id="how-it-works"><h2>How It Works</h2><p>Layer 0 protocols use various approaches to enable cross-chain communication. Relay chain models (Polkadot) create a central chain that coordinates consensus and messaging between connected chains (parachains). Hub-and-spoke models (Cosmos) use a central hub with IBC (Inter-Blockchain Communication) protocol to route messages between independent chains. Cross-chain messaging protocols (LayerZero, Wormhole) provide a universal messaging layer that allows smart contracts on different chains to send and receive messages directly. Each approach involves trade-offs between security assumptions, decentralization, latency, and the degree of shared security between connected chains. The critical challenge is verifying that cross-chain messages are authentic without trusting a centralized intermediary.</p></section>
      <section id="examples"><h2>Key Examples</h2><p>Polkadot is a Layer 0 that provides shared security through its relay chain, with application-specific parachains connected via XCMP (Cross-Consensus Message Format). Cosmos builds an ecosystem of sovereign chains connected through the IBC protocol, with each chain maintaining its own security using Tendermint consensus. LayerZero provides an omnichain messaging protocol using ultra-light nodes and decentralized verifier networks to enable communication between any supported chain. Avalanche allows the creation of custom subnets (independent chains) that can communicate through the Avalanche primary network. Each represents a different philosophical approach to the multi-chain future — shared security versus sovereign security, hub-and-spoke versus mesh networks, and protocol-level versus application-level interoperability.</p></section>
    </LearnPageLayout>
  );
}
