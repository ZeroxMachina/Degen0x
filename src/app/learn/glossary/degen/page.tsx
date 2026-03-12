import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Degen? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what degen means in crypto, the degen culture, common degen strategies, risks, and how the term has evolved in the DeFi community.",
};

export default function DegenPage() {
  return (
    <LearnPageLayout
      title="What Is a Degen?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="4 min"
      intro="'Degen' (short for 'degenerate') is crypto slang for a high-risk trader or investor who embraces speculative and often reckless trading strategies. Originally a self-deprecating term, it has evolved into a badge of honor in some crypto communities. Degens are known for aping into new tokens, yield farming with untested protocols, and prioritizing potential gains over risk management."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-a-degen", title: "What Is a Degen?", level: 2 },
        { id: "culture", title: "culture", level: 2 },
        { id: "degen-culture", title: "Degen Culture", level: 2 },
        { id: "strategies", title: "strategies", level: 2 },
        { id: "common-degen-strategies", title: "Common Degen Strategies", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "the-reality-check", title: "The Reality Check", level: 2 }
      ]}
      faqs={[
        {
          question: "Is being a degen a good thing?",
          answer:
            "In crypto culture, being a 'degen' can be seen as positive (signaling boldness and deep involvement in DeFi) or negative (signaling reckless gambling). The healthiest approach is to understand the risks involved and only engage in high-risk strategies with funds you can genuinely afford to lose completely.",
        },
        {
          question: "What is degen farming?",
          answer:
            "Degen farming refers to providing liquidity or staking tokens in new, unaudited DeFi protocols that offer extremely high yields (often 1,000%+ APY). These yields are unsustainable and often indicate significant risk of rug pulls, smart contract exploits, or token inflation that destroys value.",
        },
      ]}
      relatedArticles={[
        { title: "What Does Ape In Mean?", href: "/learn/glossary/ape-in", category: "Glossary" },
        { title: "What Is a Rug Pull?", href: "/learn/glossary/rug-pull", category: "Glossary" },
        { title: "What Is FOMO?", href: "/learn/glossary/fomo", category: "Glossary" },
        { title: "What Is a Memecoin?", href: "/learn/glossary/memecoin", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Degen?</h2>
      <p>
        A degen is someone in the crypto space who engages in high-risk trading and investing behavior. The term derives from &quot;degenerate gambler&quot; but has been reclaimed by the community as a term of identity. Degens are often early adopters of new DeFi protocols, active participants in token launches, and unapologetically risk-tolerant.
      </p>

      <h2 id="culture">Degen Culture</h2>
      <p>
        Degen culture celebrates risk-taking, speed, and deep involvement in crypto&apos;s bleeding edge. Degens share trading wins and losses openly on social media, use distinctive slang (aping in, WAGMI, NGMI), and view losses as the cost of playing the game. The culture emerged primarily during DeFi Summer 2020 and intensified during the 2021 bull market.
      </p>

      <h2 id="strategies">Common Degen Strategies</h2>
      <p>
        Aping into new token launches minutes after liquidity is added. Farming extremely high-yield (and high-risk) DeFi protocols. Leveraged trading on volatile assets. Buying memecoins based on social media momentum. Participating in presales and IDOs. Flipping NFTs. These strategies can produce extraordinary returns but more commonly result in significant losses.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        Degens play an important role in the crypto ecosystem as early adopters and liquidity providers for new projects. They test new protocols, discover exploits, and provide the initial activity that helps projects gain traction. However, the degen approach is not suitable for most investors, and the survivorship bias in degen success stories obscures the many who lose everything.
      </p>

      <h2 id="risks">The Reality Check</h2>
      <p>
        The vast majority of degen trading results in net losses. For every screenshot of massive gains, there are countless unreported losses. Addiction to high-risk trading, emotional decision-making, and lack of risk management are common pitfalls. If you engage in degen activities, do so only with funds you can completely lose, set strict limits, and be honest about your results.
      </p>
    </LearnPageLayout>
  );
}
