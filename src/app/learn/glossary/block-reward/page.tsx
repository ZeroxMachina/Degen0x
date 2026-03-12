import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Block Reward? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what block rewards are, how they work in different consensus mechanisms, their role in tokenomics, and how halvings affect them.",
};

export default function BlockRewardPage() {
  return (
    <LearnPageLayout
      title="What Is a Block Reward?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="4 min"
      intro="A block reward is the cryptocurrency paid to miners or validators for successfully adding a new block to the blockchain. It is the primary incentive mechanism that motivates network participants to secure the blockchain and process transactions. Block rewards consist of newly minted coins plus transaction fees from the transactions included in the block."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-a-block-reward", title: "What Is a Block Reward?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-block-rewards-work", title: "How Block Rewards Work", level: 2 },
        { id: "halvings", title: "halvings", level: 2 },
        { id: "halvings-and-supply-reduction", title: "Halvings and Supply Reduction", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 }
      ]}
      faqs={[
        {
          question: "What is the current Bitcoin block reward?",
          answer:
            "After the April 2024 halving, the Bitcoin block reward is 3.125 BTC per block. This will be halved again to approximately 1.5625 BTC around 2028. Block rewards are the mechanism through which new Bitcoin enters circulation.",
        },
        {
          question: "What happens when all Bitcoin is mined?",
          answer:
            "Bitcoin's 21 million supply cap is expected to be reached around the year 2140. After that, miners will be compensated solely through transaction fees. This transition creates a long-term question about whether fees alone can sustain network security.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Mining?", href: "/learn/glossary/mining", category: "Glossary" },
        { title: "What Is Halving?", href: "/learn/glossary/halving", category: "Glossary" },
        { title: "What Is a Block?", href: "/learn/glossary/block", category: "Glossary" },
        { title: "What Is Gas?", href: "/learn/glossary/gas", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Block Reward?</h2>
      <p>
        A block reward is the payment given to the entity that successfully creates the next block in a blockchain. In proof-of-work systems, this goes to the miner who solves the cryptographic puzzle first. In proof-of-stake systems, this goes to the validator selected to propose the block. The reward typically consists of two components: newly created (minted) coins and the sum of transaction fees within the block.
      </p>

      <h2 id="how-it-works">How Block Rewards Work</h2>
      <p>
        When a miner or validator creates a valid block, they include a special transaction at the beginning called the coinbase transaction (in Bitcoin) that creates new coins and sends them to their address. This is how new cryptocurrency enters circulation. The block also collects fees from every transaction included, which are added to the miner&apos;s total reward.
      </p>

      <h2 id="halvings">Halvings and Supply Reduction</h2>
      <p>
        Many blockchains reduce their block reward over time. Bitcoin halves its reward approximately every four years (every 210,000 blocks). Starting at 50 BTC per block in 2009, the reward has decreased through successive halvings to the current 3.125 BTC. This deflationary schedule ensures that Bitcoin&apos;s total supply approaches but never exceeds 21 million coins, creating digital scarcity.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        Block rewards are the engine of blockchain security. They incentivize miners and validators to invest resources in securing the network. The reward structure also defines a cryptocurrency&apos;s inflation rate and supply schedule, which are fundamental factors in its long-term value proposition. Understanding block rewards is essential for evaluating the economics and sustainability of any blockchain network.
      </p>
    </LearnPageLayout>
  );
}
