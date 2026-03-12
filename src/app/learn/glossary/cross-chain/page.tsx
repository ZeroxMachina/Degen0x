import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Cross-Chain? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what cross-chain technology is, how it enables interoperability between blockchains, key protocols, and why it matters for the multi-chain future.",
};

export default function CrossChainPage() {
  return (
    <LearnPageLayout
      title="What Is Cross-Chain?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="Cross-chain refers to technology and protocols that enable interaction between different blockchain networks. By default, blockchains are isolated — Bitcoin cannot natively communicate with Ethereum. Cross-chain solutions build connections between these networks, allowing assets, data, and messages to move freely across the multi-chain ecosystem."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-cross-chain", title: "What Is Cross-Chain?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-cross-chain-works", title: "How Cross-Chain Works", level: 2 },
        { id: "solutions", title: "solutions", level: 2 },
        { id: "cross-chain-solutions", title: "Cross-Chain Solutions", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
        { id: "challenges", title: "challenges", level: 2 },
        { id: "challenges", title: "Challenges", level: 2 }
      ]}
      faqs={[
        {
          question: "What is the difference between cross-chain and multi-chain?",
          answer:
            "Multi-chain refers to the state of having multiple blockchains in the ecosystem. Cross-chain refers to the technology that connects them. A multi-chain world needs cross-chain solutions to function efficiently, allowing users and applications to operate across multiple networks seamlessly.",
        },
        {
          question: "Is cross-chain technology secure?",
          answer:
            "Cross-chain bridges have historically been major targets for hackers, with billions lost in exploits. Security depends heavily on the specific implementation — some use trusted validators, others use cryptographic proofs. The technology is improving, but cross-chain interactions remain one of the higher-risk activities in crypto.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Bridge?", href: "/learn/glossary/bridge", category: "Glossary" },
        { title: "What Is Interoperability?", href: "/learn/glossary/interoperability", category: "Glossary" },
        { title: "What Is Layer 1?", href: "/learn/glossary/layer-1", category: "Glossary" },
        { title: "What Is Layer 2?", href: "/learn/glossary/layer-2", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Cross-Chain?</h2>
      <p>
        Cross-chain technology enables different blockchains to communicate with each other. Without cross-chain capabilities, each blockchain operates as a separate, isolated network. Cross-chain protocols break down these barriers, allowing a user to move their ETH into the Solana ecosystem, or allowing a smart contract on one chain to trigger actions on another.
      </p>

      <h2 id="how-it-works">How Cross-Chain Works</h2>
      <p>
        Cross-chain communication typically works through bridges (lock-and-mint mechanisms), relay chains (intermediary networks that connect multiple chains), or messaging protocols (like LayerZero or Chainlink CCIP) that allow smart contracts to send messages across networks. Each approach has different trust assumptions, speed, cost, and security characteristics.
      </p>

      <h2 id="solutions">Cross-Chain Solutions</h2>
      <p>
        Bridges like Wormhole and Stargate allow token transfers between chains. Messaging protocols like LayerZero and Axelar enable general cross-chain communication. Cosmos&apos;s IBC (Inter-Blockchain Communication) protocol connects blockchains built with the Cosmos SDK. Polkadot uses relay chains and parachains for cross-chain interoperability. Each solution targets different aspects of the interoperability problem.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        The future of crypto is multi-chain. Different blockchains optimize for different use cases — some for speed, others for security, others for privacy. Cross-chain technology ensures that users and capital can flow between these networks, preventing liquidity fragmentation and enabling applications that leverage the strengths of multiple chains.
      </p>

      <h2 id="challenges">Challenges</h2>
      <p>
        Cross-chain solutions face security challenges (bridge exploits have cost billions), latency issues (cross-chain transactions are slower than native ones), complexity (more points of failure), and trust assumptions (many bridges rely on trusted validator sets). Building truly trustless, fast, and secure cross-chain infrastructure remains one of the biggest open problems in blockchain technology.
      </p>
    </LearnPageLayout>
  );
}
