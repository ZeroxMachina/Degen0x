import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Crypto Bridge? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what blockchain bridges are, how they work, the different types, security considerations, and why cross-chain bridges matter for DeFi.",
};

export default function BridgePage() {
  return (
    <LearnPageLayout
      title="What Is a Bridge?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A blockchain bridge is a protocol that enables the transfer of assets and data between different blockchain networks. Since blockchains are isolated by default, bridges solve the interoperability problem by connecting them, allowing users to move tokens from Ethereum to Solana, for example. Bridges are essential infrastructure for a multi-chain ecosystem."
      toc={[
        { id: "definition", title: "What Is a Bridge?", level: 2 },
        { id: "how-it-works", title: "How Bridges Work", level: 2 },
        { id: "types", title: "Types of Bridges", level: 2 },
        { id: "why-it-matters", title: "Why Bridges Matter", level: 2 },
        { id: "risks", title: "Security Risks", level: 2 },
      ]}
      faqs={[
        {
          question: "Are bridges safe to use?",
          answer:
            "Bridges are one of the riskiest parts of the crypto ecosystem. Billions of dollars have been stolen from bridge exploits. Use well-established bridges with strong security track records, bridge only amounts you can afford to lose, and consider the security model of any bridge before using it.",
        },
        {
          question: "How long do bridge transfers take?",
          answer:
            "Transfer times vary from minutes to hours depending on the bridge and the blockchains involved. Some optimistic bridges require a challenge period of up to 7 days for withdrawals. Fast bridges offer quicker transfers but may charge higher fees.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Cross-Chain?", href: "/learn/glossary/cross-chain", category: "Glossary" },
        { title: "What Is Interoperability?", href: "/learn/glossary/interoperability", category: "Glossary" },
        { title: "What Is Layer 2?", href: "/learn/glossary/layer-2", category: "Glossary" },
        { title: "What Is a Smart Contract?", href: "/learn/glossary/smart-contract", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Bridge?</h2>
      <p>
        A blockchain bridge connects two separate blockchain networks, allowing users to move assets between them. Without bridges, tokens on Ethereum cannot be used on Solana, and Bitcoin cannot be used in Ethereum DeFi. Bridges break down these silos by creating representations of assets on the destination chain while locking the original assets on the source chain.
      </p>

      <h2 id="how-it-works">How Bridges Work</h2>
      <p>
        The most common mechanism is lock-and-mint. You send tokens to a smart contract on the source chain, which locks them. The bridge then mints equivalent wrapped tokens on the destination chain. When you want to return, you burn the wrapped tokens and the original tokens are unlocked. Validators or relayers verify that the lock event occurred before authorizing the mint.
      </p>

      <h2 id="types">Types of Bridges</h2>
      <p>
        Trusted bridges rely on a centralized operator or small group of validators. Trustless bridges use cryptographic proofs or the security of the underlying chains. Optimistic bridges assume transactions are valid and use a challenge period for disputes. ZK bridges use zero-knowledge proofs for verification, offering stronger security guarantees. Native bridges are built by the Layer 2 team themselves and inherit the security of the base layer.
      </p>

      <h2 id="why-it-matters">Why Bridges Matter</h2>
      <p>
        As the crypto ecosystem grows across multiple chains, bridges are critical infrastructure. They enable users to access DeFi opportunities on different networks, move liquidity where it is needed, and use assets across ecosystems. Without bridges, each blockchain would be an isolated economy with limited utility.
      </p>

      <h2 id="risks">Security Risks</h2>
      <p>
        Bridges have been the target of some of the largest crypto exploits in history, with billions of dollars lost. The Ronin bridge ($625M), Wormhole ($320M), and Nomad ($190M) hacks demonstrated the risks. Bridge security depends on their validator set, smart contract code, and economic design. Users should carefully evaluate bridge security before transferring significant value.
      </p>
    </LearnPageLayout>
  );
}
