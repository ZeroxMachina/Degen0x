import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Crypto Winter? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what crypto winter means, how it differs from a bear market, historical crypto winters, and strategies for surviving extended downturns.",
};

export default function CryptoWinterPage() {
  return (
    <LearnPageLayout
      title="What Is Crypto Winter?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="Crypto winter is an extended period of severely depressed cryptocurrency prices and negative market sentiment that goes beyond a typical bear market. Characterized by project failures, layoffs, reduced investment, and a general exodus of retail interest, crypto winters can last for years and test the resolve of even the most committed participants."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-crypto-winter", title: "What Is Crypto Winter?", level: 2 },
        { id: "vs-bear-market", title: "vs-bear-market", level: 2 },
        { id: "crypto-winter-vs-bear-market", title: "Crypto Winter vs Bear Market", level: 2 },
        { id: "history", title: "history", level: 2 },
        { id: "historical-crypto-winters", title: "Historical Crypto Winters", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
        { id: "surviving", title: "surviving", level: 2 },
        { id: "surviving-crypto-winter", title: "Surviving Crypto Winter", level: 2 }
      ]}
      faqs={[
        {
          question: "How long does a crypto winter last?",
          answer:
            "Historical crypto winters have lasted approximately 1-2 years from peak to trough, with full recovery to new all-time highs taking an additional 1-2 years. The total cycle from winter to new bull market has typically been around 3-4 years, roughly aligned with Bitcoin halving cycles.",
        },
        {
          question: "Is crypto winter a good time to invest?",
          answer:
            "Historically, accumulating quality assets during crypto winters has been highly rewarding when the market eventually recovers. However, many projects fail completely during these periods, so extreme selectivity is important. Dollar-cost averaging into blue-chip assets (Bitcoin, Ethereum) has been the most reliable strategy.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Bear Market?", href: "/learn/glossary/bear-market", category: "Glossary" },
        { title: "What Is DCA?", href: "/learn/glossary/dca", category: "Glossary" },
        { title: "What Is HODL?", href: "/learn/glossary/hodl", category: "Glossary" },
        { title: "What Is a Bull Market?", href: "/learn/glossary/bull-market", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Crypto Winter?</h2>
      <p>
        Crypto winter is the colloquial term for the most severe and prolonged downturns in the cryptocurrency market. It goes beyond a standard bear market correction — it represents a period where the entire industry contracts. Companies lay off staff, venture capital funding dries up, retail investors lose interest, and many projects shut down entirely.
      </p>

      <h2 id="vs-bear-market">Crypto Winter vs Bear Market</h2>
      <p>
        While all crypto winters involve bear markets, not all bear markets qualify as crypto winters. A bear market is defined by price declines of 20%+ from recent highs. Crypto winter adds severe sentiment deterioration, industry-wide failures, significant loss of market participants, and a period where mainstream media declares crypto is dead. It represents a fundamental shakeout of the ecosystem.
      </p>

      <h2 id="history">Historical Crypto Winters</h2>
      <p>
        The 2014-2015 winter followed the Mt. Gox collapse and saw Bitcoin drop from over $1,000 to below $200. The 2018-2019 winter followed the ICO bubble and brought Bitcoin from $20,000 to $3,200. The 2022 winter was marked by the Terra/Luna collapse, Three Arrows Capital, FTX, and multiple CeFi failures. Each winter eliminated weak projects and set the stage for the next innovation cycle.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        Crypto winters are where the strongest projects are forged. Teams that continue building during downturns emerge as leaders of the next cycle. Understanding the cyclical nature of crypto markets helps you maintain perspective during both euphoric highs and devastating lows. The best long-term investments are often made when sentiment is at its worst.
      </p>

      <h2 id="surviving">Surviving Crypto Winter</h2>
      <p>
        Maintain emergency cash reserves outside of crypto. Focus on projects with strong fundamentals, revenue, and active development. Avoid leverage during uncertain periods. Use the downtime to learn, build skills, and research. Dollar-cost average into conviction positions. Remember that previous crypto winters all ended, and those who survived and accumulated were richly rewarded.
      </p>
    </LearnPageLayout>
  );
}
