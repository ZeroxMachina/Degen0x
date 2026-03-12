import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Understanding Crypto Market Cycles (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about crypto market cycles: the four phases of accumulation, markup, distribution, and markdown. Understand Bitcoin halving cycles, market psychology, and how to position for each phase.",
};

export default function CryptoMarketCyclesPage() {
  return (
    <LearnPageLayout
      title="Understanding Crypto Market Cycles"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="Crypto markets move in cycles of boom and bust that have historically repeated with notable regularity. Understanding these cycles — their phases, drivers, and psychological patterns — helps investors make more rational decisions and avoid the emotional extremes that lead to buying at peaks and selling at bottoms. While no cycle repeats exactly, recognizing the structural patterns that drive crypto markets provides a significant edge in long-term investment strategy."
      toc={[
        { id: "four-phases", title: "four-phases", level: 2 },
        { id: "the-four-phases-of-a-market-cycle", title: "The Four Phases of a Market Cycle", level: 2 },
        { id: "bitcoin-halving", title: "bitcoin-halving", level: 2 },
        { id: "bitcoin-halving-and-cycle-timing", title: "Bitcoin Halving and Cycle Timing", level: 2 },
        { id: "psychology", title: "psychology", level: 2 },
        { id: "market-psychology-through-the-cycle", title: "Market Psychology Through the Cycle", level: 2 },
        { id: "positioning", title: "positioning", level: 2 },
        { id: "positioning-for-each-phase", title: "Positioning for Each Phase", level: 2 }
      ]}
      faqs={[
        {
          question: "How long is a typical crypto market cycle?",
          answer:
            "Historically, crypto market cycles have lasted approximately four years, roughly aligned with Bitcoin's halving schedule. Bull markets have typically lasted 12-18 months from halving to peak, followed by 12-18 months of decline and 12-18 months of accumulation. However, each cycle has unique characteristics and there is no guarantee future cycles will follow the same timeline.",
        },
        {
          question: "Are crypto cycles becoming less volatile?",
          answer:
            "There is evidence of decreasing percentage volatility across cycles. Bitcoin's peak-to-trough drawdowns have decreased from over 90% in early cycles to approximately 75-80% in more recent ones. As the market matures, institutional participation increases, and regulatory clarity improves, cycles may continue to dampen in amplitude, though crypto is likely to remain more volatile than traditional assets.",
        },
        {
          question: "Can you time the market based on cycles?",
          answer:
            "Perfectly timing market tops and bottoms is extremely difficult, even for experienced traders. However, understanding the general phase of the cycle can inform broad positioning decisions — being more aggressive during accumulation phases and more defensive during late-stage euphoria. Most successful long-term investors use dollar-cost averaging rather than attempting to time exact cycle turning points.",
        },
      ]}
      relatedArticles={[
        { title: "Risk Management in Crypto", href: "/learn/risk-management-crypto", category: "Learn" },
        { title: "Crypto Portfolio Management", href: "/learn/crypto-portfolio-management", category: "Learn" },
        { title: "Crypto Sentiment Analysis", href: "/learn/crypto-sentiment-analysis", category: "Learn" },
        { title: "Technical Analysis for Crypto", href: "/learn/technical-analysis-crypto", category: "Learn" },
      ]}
    >
      <section id="four-phases">
        <h2>The Four Phases of a Market Cycle</h2>
        <p>
          The accumulation phase occurs after a prolonged bear market when prices have bottomed and volatility has decreased. Smart money — institutional investors, experienced traders, and value-oriented buyers — begins accumulating positions at depressed prices. Media attention is minimal, public interest is low, and general sentiment ranges from despair to apathy. This phase can last months as the market builds a base for the next move.
        </p>
        <p>
          The markup (bull market) phase begins as prices break above the accumulation range with increasing volume. Early gains attract more buyers, creating a positive feedback loop. The market transitions from disbelief to hope to optimism, and eventually to euphoria as prices reach new all-time highs. The distribution phase occurs near the cycle peak when smart money begins selling into the enthusiasm of late buyers. The markdown (bear market) follows as selling accelerates, optimism turns to anxiety, then fear, then despair, and prices retrace a significant portion of the bull market gains.
        </p>
      </section>

      <section id="bitcoin-halving">
        <h2>Bitcoin Halving and Cycle Timing</h2>
        <p>
          Bitcoin's halving event, which cuts the block reward in half approximately every four years, has historically been a major catalyst for market cycles. The halving creates a supply shock: the rate of new Bitcoin entering circulation is cut by 50%, reducing selling pressure from miners. Historically, Bitcoin has reached a new all-time high within 12-18 months after each halving, though the exact timing and magnitude have varied.
        </p>
        <p>
          The 2012 halving preceded a run from roughly $12 to over $1,100. The 2016 halving preceded a rise from roughly $650 to nearly $20,000. The 2020 halving preceded a rise from roughly $8,700 to nearly $69,000. The 2024 halving occurred in April 2024. While past performance does not guarantee future results, the halving cycle remains one of the most closely watched events in crypto. Altcoin markets generally follow Bitcoin's lead, often with amplified moves in both directions, creating a broader market cycle that extends beyond Bitcoin itself.
        </p>
      </section>

      <section id="psychology">
        <h2>Market Psychology Through the Cycle</h2>
        <p>
          Market psychology follows a remarkably consistent emotional arc through each cycle. At the bottom, sentiment is dominated by despair, disbelief, and calls for crypto's death. As prices begin to recover, disbelief gradually gives way to cautious hope. As the bull market accelerates, hope transforms into optimism, then excitement, then euphoria. At the peak, the dominant emotions are greed and complacency — the belief that prices can only go up.
        </p>
        <p>
          The cycle top is characterized by widespread media coverage, celebrities endorsing crypto projects, an explosion of low-quality projects capitalizing on the hype, and a general sense that investing in crypto is easy money. Conversely, cycle bottoms are marked by capitulation selling, project failures, industry layoffs, and media narratives about the end of crypto. Understanding this emotional pattern helps investors maintain perspective: extreme euphoria is a sell signal, and extreme despair is a buy signal. The challenge is having the discipline to act against the prevailing sentiment.
        </p>
      </section>

      <section id="positioning">
        <h2>Positioning for Each Phase</h2>
        <p>
          During the accumulation phase, focus on building positions in high-conviction assets at depressed valuations. Dollar-cost averaging (investing a fixed amount at regular intervals) is the most effective strategy, as it removes the need to time the exact bottom. Prioritize assets with strong fundamentals, active development, and proven market fit — these are most likely to survive the bear market and lead the next bull run. Use the quiet market period to research and educate yourself.
        </p>
        <p>
          During the markup phase, maintain your core positions and consider taking incremental profits at predetermined price targets rather than trying to time the absolute top. As the market reaches euphoric territory, progressively increase your cash allocation by scaling out of speculative positions. During the distribution and markdown phases, preserve capital by maintaining a significant cash or stablecoin position. Avoid the temptation to buy dips aggressively during the early stages of a bear market, as prices often decline far more than expected. The discipline to sell during euphoria and buy during despair is the single most valuable skill in cycle-aware investing.
        </p>
      </section>
    </LearnPageLayout>
  );
}
