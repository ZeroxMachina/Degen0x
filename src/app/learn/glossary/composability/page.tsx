import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Composability? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what composability means in DeFi, how protocols build on each other like building blocks, and why it drives blockchain innovation.",
  keywords: ["composability", "DeFi composability", "money legos", "composable protocols", "DeFi building blocks"],
};

export default function ComposabilityGlossaryPage() {
  return (
    <LearnPageLayout title="What Is Composability?" categoryName="Glossary" categorySlug="learn/glossary" readTime="4 min" intro="Composability is the ability for different protocols and smart contracts to interact with and build upon each other seamlessly. Often described as 'money legos,' composable DeFi protocols can be combined in novel ways — for example, using a lending protocol's receipt token as collateral in another protocol. This property is a key driver of innovation in decentralized finance."
      toc={[{ id: "definition", title: "Definition", level: 2 },{ id: "examples", title: "Examples", level: 2 },{ id: "implications", title: "Implications", level: 2 }]}
      faqs={[
        { question: "Why is composability important?", answer: "Composability enables permissionless innovation — anyone can build new financial products by combining existing protocols without needing approval. This creates an accelerating cycle of innovation as each new protocol adds building blocks that others can use, similar to how software libraries enable rapid development." },
        { question: "Are there risks to composability?", answer: "Yes, composability creates dependency chains. If one protocol in a composed strategy has a vulnerability, it can cascade to affect all protocols built on top of it. This systemic risk is unique to DeFi and means that evaluating a protocol's security requires understanding the security of all its dependencies." },
      ]}
      relatedArticles={[
        { title: "What Is Composability?", href: "/learn/what-is-composability", category: "Learn" },
        { title: "DApp", href: "/learn/glossary/dapp", category: "Glossary" },
        { title: "Smart Contract", href: "/learn/glossary/smart-contract", category: "Glossary" },
        { title: "DeFi", href: "/learn/glossary/defi", category: "Glossary" },
      ]}
    >
      <section id="definition"><h2>Definition</h2><p>Composability means that protocols and smart contracts can interact with each other in an open, permissionless manner. On Ethereum and other smart contract platforms, any protocol can call any other protocol's functions, read its data, and build on its outputs. This is possible because all protocols share the same execution environment, state, and standards. Composability is what allows a single transaction to span multiple protocols — borrowing from Aave, swapping on Uniswap, and depositing into a yield farm in one atomic operation.</p></section>
      <section id="examples"><h2>Examples</h2><p>Liquid staking tokens (stETH, rETH) demonstrate composability: stake ETH and receive a liquid token that can be used as collateral on Aave, traded on Uniswap, or deposited in yield strategies. Flash loans are only possible because of composability — borrow, use funds across multiple protocols, and repay within a single transaction. Yield aggregators like Yearn compose lending, trading, and staking protocols into automated strategies that would be impossible without composability.</p></section>
      <section id="implications"><h2>Implications</h2><p>Composability lowers barriers to innovation because new protocols can leverage existing infrastructure rather than building everything from scratch. It creates network effects where each new protocol adds value to the entire ecosystem. However, it also creates systemic risk through dependency chains and can amplify the impact of protocol failures. The balance between innovation benefits and systemic risk is a fundamental tension in DeFi protocol design and risk management.</p></section>
    </LearnPageLayout>
  );
}
