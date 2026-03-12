import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Decentralization? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what decentralization means in crypto, why it matters, the spectrum of decentralization, and how it affects security, censorship resistance, and governance.",
};

export default function DecentralizationPage() {
  return (
    <LearnPageLayout
      title="What Is Decentralization?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="Decentralization is the distribution of control, decision-making, and data away from a single central authority to a network of participants. In crypto, decentralization means no single entity controls the network — power is spread across thousands of nodes, miners, or validators. It is the foundational principle that gives blockchain technology its unique properties of censorship resistance, trustlessness, and resilience."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-decentralization", title: "What Is Decentralization?", level: 2 },
        { id: "spectrum", title: "spectrum", level: 2 },
        { id: "the-decentralization-spectrum", title: "The Decentralization Spectrum", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
        { id: "trade-offs", title: "trade-offs", level: 2 },
        { id: "trade-offs", title: "Trade-Offs", level: 2 },
        { id: "measuring", title: "measuring", level: 2 },
        { id: "measuring-decentralization", title: "Measuring Decentralization", level: 2 }
      ]}
      faqs={[
        {
          question: "Is Bitcoin truly decentralized?",
          answer:
            "Bitcoin is widely considered the most decentralized cryptocurrency. No single entity controls its protocol, mining, or development. However, mining has become concentrated among large pools, and a few core developers maintain the software. Decentralization exists on a spectrum, and even Bitcoin has areas of concentration.",
        },
        {
          question: "Why does decentralization matter?",
          answer:
            "Decentralization provides censorship resistance (no one can block transactions), fault tolerance (no single point of failure), trustlessness (no need to trust any party), and resilience (the network continues even if some participants leave). These properties are what make crypto fundamentally different from traditional financial systems.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Blockchain?", href: "/learn/glossary/blockchain", category: "Glossary" },
        { title: "What Is a Node?", href: "/learn/glossary/node", category: "Glossary" },
        { title: "What Is Consensus?", href: "/learn/glossary/consensus", category: "Glossary" },
        { title: "What Is a DAO?", href: "/learn/glossary/dao", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Decentralization?</h2>
      <p>
        Decentralization means spreading authority and operations across multiple independent participants rather than concentrating them in one place. A centralized system has a single point of control — like a bank managing your account. A decentralized system distributes that control — like Bitcoin, where thousands of independent nodes collectively maintain the network without any single operator.
      </p>

      <h2 id="spectrum">The Decentralization Spectrum</h2>
      <p>
        Decentralization is not binary — it exists on a spectrum. Bitcoin sits near the fully decentralized end, while private blockchains are closer to the centralized end. Most projects fall somewhere in between. Decentralization can be measured across multiple dimensions: infrastructure (how many nodes), governance (who makes decisions), token distribution (how concentrated holdings are), and development (how many teams contribute).
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        Decentralization provides the core value propositions of cryptocurrency. Censorship resistance means no government or company can freeze your account or block your transactions. Trustlessness means you do not need to trust any single party with your money. Resilience means the network continues operating even if large portions go offline. Without decentralization, crypto is just a slow, expensive database.
      </p>

      <h2 id="trade-offs">Trade-Offs</h2>
      <p>
        Decentralization comes with costs. More decentralized networks tend to be slower and more expensive per transaction than centralized alternatives. Decision-making is slower and more difficult. Upgrades require widespread consensus among diverse stakeholders. This is known as the blockchain trilemma — the tension between decentralization, security, and scalability.
      </p>

      <h2 id="measuring">Measuring Decentralization</h2>
      <p>
        The Nakamoto Coefficient measures how many entities would need to collude to compromise a network. Node count and geographic distribution indicate infrastructure decentralization. Token distribution metrics like the Gini coefficient reveal economic decentralization. Evaluating the number of independent client implementations and development teams indicates software decentralization. No single metric captures the full picture.
      </p>
    </LearnPageLayout>
  );
}
