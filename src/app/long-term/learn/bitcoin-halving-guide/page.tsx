import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Bitcoin Halving Explained: Impact on Price & Mining (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Everything you need to know about Bitcoin halvings. Learn how halvings work, their historical impact on price, mining economics, and what each halving means for investors.",
  keywords: ["Bitcoin halving", "BTC halving", "Bitcoin halving price", "halving explained", "Bitcoin supply"],
};

export default function BitcoinHalvingGuidePage() {
  return (
    <LearnPageLayout
      title="Bitcoin Halving Explained: Impact on Price & Mining"
      categoryName="Long-Term Strategies"
      categorySlug="long-term"
      readTime="10 min read"
      intro="The Bitcoin halving is one of the most anticipated events in crypto, occurring approximately every four years and reducing the mining reward by 50%. This programmatic supply reduction is central to Bitcoin's monetary policy and has historically preceded significant bull markets. Understanding the halving mechanism, its impact on mining economics, and its historical correlation with price cycles is essential for any long-term Bitcoin investor."
      toc={[
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-the-halving-works", title: "How the Halving Works", level: 2 },
        { id: "history", title: "history", level: 2 },
        { id: "halving-history-price-impact", title: "Halving History & Price Impact", level: 2 },
        { id: "mining-impact", title: "mining-impact", level: 2 },
        { id: "impact-on-mining-economics", title: "Impact on Mining Economics", level: 2 },
        { id: "supply-dynamics", title: "supply-dynamics", level: 2 },
        { id: "supply-demand-dynamics", title: "Supply & Demand Dynamics", level: 2 },
        { id: "investment-strategy", title: "investment-strategy", level: 2 },
        { id: "halving-investment-strategies", title: "Halving Investment Strategies", level: 2 },
        { id: "future-halvings", title: "future-halvings", level: 2 },
        { id: "future-halvings-long-term-outlook", title: "Future Halvings & Long-Term Outlook", level: 2 }
      ]}
      faqs={[
        { question: "When is the next Bitcoin halving?", answer: "Bitcoin halvings occur every 210,000 blocks, approximately every 4 years. The most recent halving occurred in April 2024, reducing the block reward from 6.25 to 3.125 BTC. The next halving is expected around 2028." },
        { question: "Does the halving always cause a price increase?", answer: "Historically, every halving has been followed by a significant bull market within 12-18 months. However, past performance does not guarantee future results, and each cycle has unique dynamics. The halving reduces new supply, but demand is the other critical factor." },
        { question: "What happens when all Bitcoin is mined?", answer: "The last Bitcoin is expected to be mined around 2140. After that, miners will be compensated solely through transaction fees. This transition will happen gradually as block rewards approach zero over the coming decades." },
        { question: "Should I buy Bitcoin before or after the halving?", answer: "Historical data suggests accumulating before the halving has been profitable, but the biggest price moves typically occur 6-18 months after. DCA leading into and through the halving period has historically been the most reliable approach." },
      ]}
      relatedArticles={[
        { title: "HODL Strategy", href: "/long-term/learn/hodl-strategy", category: "Long-Term" },
        { title: "Dollar Cost Averaging", href: "/long-term/learn/dollar-cost-averaging", category: "Long-Term" },
        { title: "Macro Analysis & Crypto", href: "/long-term/learn/macro-analysis-crypto", category: "Long-Term" },
      ]}
    >
      <h2 id="how-it-works">How the Halving Works</h2>
      <p>
        Bitcoin&apos;s protocol includes a rule that the block reward (the amount of new BTC created with each block) is cut in half every 210,000 blocks, approximately every four years. When Bitcoin launched in 2009, the reward was 50 BTC per block. After the first halving in 2012, it became 25 BTC. The second halving in 2016 reduced it to 12.5 BTC. The third in 2020 reduced it to 6.25 BTC. The fourth halving in April 2024 reduced it to 3.125 BTC. This schedule continues until approximately 2140, when all 21 million Bitcoin will have been mined. The halving is hard-coded into Bitcoin&apos;s protocol and cannot be changed without consensus.
      </p>

      <h2 id="history">Halving History &amp; Price Impact</h2>
      <p>
        Each halving has preceded a major bull cycle, though with varying timeframes. After the 2012 halving, Bitcoin rose from about $12 to over $1,100 within a year. After the 2016 halving, Bitcoin went from about $650 to nearly $20,000 within 18 months. After the 2020 halving, Bitcoin climbed from about $8,700 to over $69,000. The pattern shows significant appreciation within 12-18 months post-halving, though each cycle has seen diminishing percentage returns (which is natural as the market cap grows). The 2024 halving continued this pattern with new all-time highs, aided by additional demand from spot Bitcoin ETFs.
      </p>

      <h2 id="mining-impact">Impact on Mining Economics</h2>
      <p>
        The halving directly impacts mining profitability by cutting revenue in half overnight while costs (electricity, hardware, facilities) remain unchanged. Less efficient miners are forced to shut down, creating a natural selection process that concentrates mining among the most efficient operators. Hash rate typically drops temporarily after a halving as unprofitable miners exit, then recovers and surpasses previous levels as remaining miners upgrade equipment and capture the departed hash rate&apos;s share. The difficulty adjustment, which recalibrates every 2,016 blocks, ensures blocks continue to be produced approximately every 10 minutes regardless of hash rate changes.
      </p>

      <h2 id="supply-dynamics">Supply &amp; Demand Dynamics</h2>
      <p>
        The halving creates a supply shock by reducing the rate of new Bitcoin entering the market. After the 2024 halving, only approximately 450 BTC per day are newly mined, compared to 900 before the halving. If demand remains constant or increases, the reduced supply pressure should support higher prices. However, newly mined Bitcoin represents a small fraction of total supply; most price impact comes from changes in demand and the behavior of existing holders. The halving&apos;s most powerful effect may be psychological: it reinforces Bitcoin&apos;s scarcity narrative and attracts media attention, which drives new demand. The combination of reduced supply and increased attention creates a powerful price catalyst.
      </p>

      <h2 id="investment-strategy">Halving Investment Strategies</h2>
      <p>
        The most reliable halving strategy is to accumulate Bitcoin steadily through DCA in the months leading up to and following the halving. Historical data suggests the major price appreciation occurs 6-18 months after the halving, not immediately. Avoid the temptation to use leverage; the post-halving bull market has historically included sharp corrections of 20-40% along the way. Consider the halving as one factor in a broader investment thesis rather than a guaranteed catalyst. Pair your halving-aware accumulation with a profit-taking plan for the eventual bull market peak. Some investors also look at halving cycles to time entries and exits for altcoins, which tend to follow Bitcoin&apos;s lead.
      </p>

      <h2 id="future-halvings">Future Halvings &amp; Long-Term Outlook</h2>
      <p>
        Future halvings will continue to reduce the block reward, but each halving&apos;s supply impact diminishes. The 2028 halving will reduce the reward to 1.5625 BTC per block. By around 2032, over 99% of all Bitcoin will have been mined. As block rewards shrink, transaction fees must increasingly compensate miners to maintain network security. The long-term sustainability of Bitcoin&apos;s security model is a topic of active debate. Some argue that growing adoption and transaction volume will generate sufficient fee revenue, while others see the declining block reward as a potential future concern. For investors, each subsequent halving is likely to have less dramatic supply impact, meaning other demand factors will become proportionally more important for price.
      </p>
    </LearnPageLayout>
  );
}
