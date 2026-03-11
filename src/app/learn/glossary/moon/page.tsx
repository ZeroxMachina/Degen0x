import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Moon (Mooning)? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what 'moon' and 'mooning' mean in crypto, the psychology behind the term, and its role in crypto culture.",
};

export default function MoonPage() {
  return (
    <LearnPageLayout
      title="What Is Moon?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="4 min"
      intro="In crypto slang, 'moon' or 'mooning' describes a cryptocurrency experiencing a dramatic and rapid price increase. When someone says an asset is 'going to the moon,' they believe its price will rise significantly. The phrase 'when moon?' is a common question asking when an asset's price will surge. The term reflects the speculative, optimistic culture of the crypto community."
      toc={[
        { id: "definition", title: "What Does Moon Mean?", level: 2 },
        { id: "origin", title: "Origin and Usage", level: 2 },
        { id: "psychology", title: "Psychology of Moon Culture", level: 2 },
        { id: "reality-check", title: "Reality Check", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
      ]}
      faqs={[
        {
          question: "What qualifies as 'mooning'?",
          answer:
            "There is no official threshold, but the term generally refers to rapid price gains of 100% or more in a short period. Small-cap tokens might 'moon' with a 10x gain, while Bitcoin 'mooning' might mean a 50-100% move. The term is subjective and used loosely across the crypto community, often driven by excitement rather than precise measurement.",
        },
        {
          question: "Should I buy when people say a coin will moon?",
          answer:
            "Be extremely cautious. By the time a coin is being widely promoted as about to moon, the early gains may have already occurred. Social media hype and 'moon' calls are frequently used to attract buyers while early investors sell (pump and dump). Always conduct your own research and be wary of excessive promotional language around any asset.",
        },
      ]}
      relatedArticles={[
        { title: "What Is FOMO?", href: "/learn/glossary/fomo", category: "Glossary" },
        { title: "What Is HODL?", href: "/learn/glossary/hodl", category: "Glossary" },
        { title: "What Is Pump and Dump?", href: "/learn/glossary/pump-and-dump", category: "Glossary" },
        { title: "What Is a Bull Market?", href: "/learn/glossary/bull-market", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Does Moon Mean?</h2>
      <p>
        &quot;Moon&quot; in crypto refers to a price that is rising dramatically, or the expectation that it will. The imagery evokes a rocket shooting upward toward the moon. &quot;To the moon&quot; is a rallying cry expressing bullish conviction. &quot;When moon?&quot; asks impatiently when the expected price surge will happen. The term has become one of the most recognizable pieces of crypto vocabulary.
      </p>

      <h2 id="origin">Origin and Usage</h2>
      <p>
        The moon metaphor predates crypto, originating in stock market culture. It gained mainstream crypto popularity during the 2017 bull run when Bitcoin went from $1,000 to nearly $20,000. Since then, it has been applied to countless altcoins, memecoins, and NFTs. Moon-related language (rocket emojis, moon emojis, &quot;LFG&quot;) dominates crypto social media during bullish periods.
      </p>

      <h2 id="psychology">Psychology of Moon Culture</h2>
      <p>
        Moon culture reflects the speculative nature of crypto markets and the human desire for rapid wealth creation. It creates a shared vocabulary for expressing optimism and creates community bonding around shared financial hopes. However, it can also foster unrealistic expectations, encourage reckless investing, and create an echo chamber where critical thinking is replaced by groupthink and blind optimism.
      </p>

      <h2 id="reality-check">Reality Check</h2>
      <p>
        For every token that moons, hundreds or thousands decline to near zero. Survivorship bias means we hear about the winners but not the losers. Moon calls on social media are often self-serving: influencers promoting tokens they already hold. Historical data shows that buying assets after they have already begun mooning typically results in buying near the top. Most parabolic moves are followed by severe corrections.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        Understanding moon culture helps you navigate crypto social media and sentiment. Recognizing when moon enthusiasm is driving irrational behavior protects you from making emotional decisions. While the crypto market does produce genuine moonshots, distinguishing between informed analysis and hype-driven promotion is critical. The best investors maintain discipline regardless of how excited the crowd becomes.
      </p>
    </LearnPageLayout>
  );
}
