import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is the Flippening? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what the Flippening is, why it matters to the Ethereum and Bitcoin communities, and what metrics are tracked.",
};

export default function FlippeningPage() {
  return (
    <LearnPageLayout
      title="What Is the Flippening?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="4 min"
      intro="The Flippening refers to a hypothetical event where Ethereum surpasses Bitcoin in total market capitalization, becoming the most valuable cryptocurrency. The term emerged during the 2017 bull run when Ethereum's rapid growth led some to believe it would overtake Bitcoin. While it has not happened yet, the concept represents a broader debate about which blockchain will dominate the future of crypto."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-the-flippening", title: "What Is the Flippening?", level: 2 },
        { id: "metrics-tracked", title: "metrics-tracked", level: 2 },
        { id: "metrics-tracked", title: "Metrics Tracked", level: 2 },
        { id: "arguments-for", title: "arguments-for", level: 2 },
        { id: "arguments-for-the-flippening", title: "Arguments For the Flippening", level: 2 },
        { id: "arguments-against", title: "arguments-against", level: 2 },
        { id: "arguments-against", title: "Arguments Against", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 }
      ]}
      faqs={[
        {
          question: "Has the Flippening ever happened?",
          answer:
            "No. Bitcoin has maintained its position as the largest cryptocurrency by market cap since its creation. Ethereum came closest during the 2017 bull run when ETH briefly reached about 83% of Bitcoin's market cap. The ratio has fluctuated significantly but Bitcoin has always remained on top.",
        },
        {
          question: "Is the Flippening only about market cap?",
          answer:
            "While market cap is the primary metric, some track a broader set of indicators including transaction count, transaction value, active addresses, fees generated, and node count. By some of these alternative metrics, Ethereum has already surpassed Bitcoin, particularly in transaction fees and on-chain activity.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Bitcoin Dominance?", href: "/learn/glossary/bitcoin-dominance", category: "Glossary" },
        { title: "What Is Market Cap?", href: "/learn/glossary/market-cap", category: "Glossary" },
        { title: "What Is an Altcoin?", href: "/learn/glossary/altcoin", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is the Flippening?</h2>
      <p>
        The Flippening is a term coined by the crypto community to describe the moment when Ethereum&apos;s total market capitalization exceeds Bitcoin&apos;s. It represents more than just a numerical milestone; it would signal a fundamental shift in how the market values utility-focused smart contract platforms versus Bitcoin&apos;s store-of-value narrative.
      </p>

      <h2 id="metrics-tracked">Metrics Tracked</h2>
      <p>
        Websites dedicated to tracking the Flippening monitor multiple metrics beyond market cap. These include daily transaction count, total transaction value transferred, total fees paid, number of active addresses, Google search interest, and node count. Ethereum already leads Bitcoin in several of these categories, particularly on-chain transaction volume and fees generated.
      </p>

      <h2 id="arguments-for">Arguments For the Flippening</h2>
      <p>
        Proponents argue that Ethereum&apos;s utility as a platform for DeFi, NFTs, and smart contracts gives it stronger fundamentals than Bitcoin. The shift to proof of stake reduced ETH issuance, and EIP-1559 fee burning makes ETH deflationary during high-activity periods. The growing ecosystem of layer-2 solutions and the network effects of thousands of deployed applications could drive sustained demand.
      </p>

      <h2 id="arguments-against">Arguments Against</h2>
      <p>
        Skeptics point out that Bitcoin&apos;s simplicity is a feature, not a bug. Its singular focus as a decentralized store of value with a fixed supply gives it a clear narrative. Bitcoin&apos;s first-mover advantage, brand recognition, and institutional adoption as digital gold create a powerful moat. Additionally, Ethereum faces competition from other smart contract platforms in a way Bitcoin does not.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        The Flippening debate reflects a fundamental question about what the market values most: a pristine monetary asset or a programmable platform. Regardless of whether it occurs, tracking the ETH/BTC ratio helps investors understand market sentiment and the relative strength of different crypto narratives. It also highlights the evolving nature of the crypto landscape.
      </p>
    </LearnPageLayout>
  );
}
