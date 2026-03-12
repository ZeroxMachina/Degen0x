import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Tokenomics: What It Means in Crypto (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn what tokenomics means in cryptocurrency. Understand token supply, distribution, utility, and economic design that determine a crypto project's long-term value.",
  keywords: ["tokenomics", "token economics", "crypto tokenomics", "token supply distribution"],
};

export default function TokenomicsGlossaryPage() {
  return (
    <LearnPageLayout
      title="Tokenomics: What It Means in Crypto"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="6 min"
      intro="Tokenomics is the study of the economic design and mechanics of a cryptocurrency token. It encompasses supply schedules, distribution methods, utility functions, and incentive structures that collectively determine a token's value proposition and long-term sustainability."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "definition", title: "Definition", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-it-works", title: "How It Works", level: 2 },
        { id: "examples", title: "examples", level: 2 },
        { id: "examples-use-cases", title: "Examples & Use Cases", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 }
      ]}
      faqs={[
        {
          question: "What makes good tokenomics?",
          answer:
            "Good tokenomics aligns the incentives of all participants, has a clear and sustainable value accrual mechanism, avoids excessive concentration of tokens among insiders, includes appropriate vesting schedules, and creates genuine demand for the token through utility rather than speculation alone. Transparency and fair distribution are also critical factors.",
        },
        {
          question: "Does total supply affect a token's price?",
          answer:
            "Total supply alone does not determine price. What matters is the combination of circulating supply, demand, and market capitalization. A token with 1 billion supply at one dollar each has the same market cap as a token with 1 million supply at one thousand dollars each. Investors should focus on market cap and fully diluted valuation rather than unit price.",
        },
      ]}
      relatedArticles={[
        { title: "Total Supply", href: "/learn/glossary/total-supply", category: "Glossary" },
        { title: "Vesting", href: "/learn/glossary/vesting", category: "Glossary" },
        { title: "Token", href: "/learn/glossary/token", category: "Glossary" },
      ]}
    >
      <section id="definition">
        <h2>Definition</h2>
        <p>
          Tokenomics, a portmanteau of token and economics, refers to the comprehensive economic model that governs a cryptocurrency token. It encompasses every aspect of how a token is created, distributed, used, and potentially destroyed within its ecosystem. Key components of tokenomics include the total and circulating supply, the emission schedule that determines how new tokens enter circulation, the allocation breakdown among founders, investors, community, and treasury, the token's utility within its platform, fee mechanisms, staking rewards, burn mechanisms, and governance rights. Well-designed tokenomics create a self-sustaining economic system where the interests of users, developers, investors, and validators are aligned toward the long-term success of the protocol. Poorly designed tokenomics, on the other hand, can lead to death spirals, excessive inflation, insider dumping, or lack of genuine demand for the token.
        </p>
      </section>
      <section id="how-it-works">
        <h2>How It Works</h2>
        <p>
          Tokenomics operates through several interconnected mechanisms. Supply mechanics determine whether a token is inflationary with new tokens continuously minted, deflationary with tokens regularly burned, or has a fixed supply cap like Bitcoin's 21 million. Distribution mechanics define who receives tokens and when, typically including allocations for the team, early investors, public sale, ecosystem development, and community incentives. Vesting schedules control when allocated tokens become transferable, preventing large sell-offs that could crash the price. Utility mechanics create demand by requiring the token for transactions, governance votes, staking for network security, accessing premium features, or paying for services within the ecosystem. Value accrual mechanisms determine how protocol revenue flows back to token holders, such as through fee sharing, buybacks, or burns. Economic incentives ensure that rational actors are motivated to behave honestly and contribute to the network's growth, with rewards for positive participation and penalties for malicious behavior.
        </p>
      </section>
      <section id="examples">
        <h2>Examples & Use Cases</h2>
        <p>
          Bitcoin's tokenomics are elegantly simple: a fixed supply of 21 million coins, with new coins distributed to miners through block rewards that halve approximately every four years. This deflationary emission schedule creates increasing scarcity over time. Ethereum's tokenomics changed dramatically with the merge and EIP-1559, which introduced fee burning. During periods of high network usage, more ETH is burned than created, making ETH deflationary. Uniswap's UNI token has governance utility, allowing holders to vote on protocol parameters and fee structures. Many DeFi tokens use a vote-escrow model popularized by Curve Finance, where locking tokens for longer periods grants greater governance power and higher rewards. Some protocols like MakerDAO use surplus revenue to buy back and burn their governance token, directly linking protocol success to token value. Each of these examples demonstrates different approaches to creating sustainable token economics that serve both the protocol and its community.
        </p>
      </section>
      <section id="why-it-matters">
        <h2>Why It Matters</h2>
        <p>
          Tokenomics is one of the most critical factors in evaluating any cryptocurrency investment. A project with revolutionary technology but poor tokenomics can fail as a token investment, while a simpler project with well-designed economics can sustain long-term value. Understanding tokenomics helps investors identify red flags like excessive team allocations, short vesting periods that allow early insiders to dump on retail investors, inflationary models without sustainable demand drivers, or tokens that lack genuine utility. Conversely, strong tokenomics features like aligned incentives, transparent distribution, meaningful utility, and deflationary pressure signal a project that is designed for long-term sustainability. For builders, designing effective tokenomics is one of the most challenging aspects of launching a crypto project, requiring an understanding of game theory, behavioral economics, and the specific dynamics of crypto markets. The field of tokenomics design has become its own discipline within the crypto industry, with specialized firms and researchers dedicated to modeling and optimizing token economic systems.
        </p>
      </section>
    </LearnPageLayout>
  );
}
