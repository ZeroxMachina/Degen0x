import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Crypto Bear Market? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what a crypto bear market is, how to identify one, historical bear markets in crypto, and strategies for surviving prolonged downturns.",
};

export default function BearMarketPage() {
  return (
    <LearnPageLayout
      title="What Is a Bear Market?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A bear market is a prolonged period of declining asset prices, typically defined as a drop of 20% or more from recent highs. In crypto, bear markets can be especially severe, with Bitcoin dropping 50-80% and altcoins losing 90% or more of their value. Understanding bear markets helps you prepare psychologically and financially for the inevitable downturns in crypto cycles."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-a-bear-market", title: "What Is a Bear Market?", level: 2 },
        { id: "characteristics", title: "characteristics", level: 2 },
        { id: "characteristics", title: "Characteristics", level: 2 },
        { id: "history", title: "history", level: 2 },
        { id: "historical-crypto-bear-markets", title: "Historical Crypto Bear Markets", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
        { id: "strategies", title: "strategies", level: 2 },
        { id: "bear-market-strategies", title: "Bear Market Strategies", level: 2 }
      ]}
      faqs={[
        {
          question: "How long do crypto bear markets last?",
          answer:
            "Historically, crypto bear markets have lasted 1-2 years. The 2014 bear market lasted about 14 months, the 2018 downturn lasted roughly 12 months, and the 2022 bear market lasted approximately 13 months. However, the recovery period to reach new all-time highs can take additional years.",
        },
        {
          question: "Should I sell during a bear market?",
          answer:
            "This depends on your investment strategy and the assets you hold. If you believe in the long-term value of your holdings (particularly Bitcoin and Ethereum), holding through bear markets has historically been rewarded. However, many altcoins never recover, so evaluating each position individually is important.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Bull Market?", href: "/learn/glossary/bull-market", category: "Glossary" },
        { title: "What Is Crypto Winter?", href: "/learn/glossary/crypto-winter", category: "Glossary" },
        { title: "What Is DCA?", href: "/learn/glossary/dca", category: "Glossary" },
        { title: "What Is HODL?", href: "/learn/glossary/hodl", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Bear Market?</h2>
      <p>
        A bear market describes a sustained period where prices are falling and pessimism dominates market sentiment. The term comes from the way a bear attacks — swiping downward with its paws. In crypto, bear markets are characterized by declining prices, reduced trading volumes, negative media coverage, and widespread fear among investors.
      </p>

      <h2 id="characteristics">Characteristics</h2>
      <p>
        Key signs of a bear market include consistent lower highs and lower lows on price charts, declining trading volume, increasing capitulation (panic selling), project failures and team departures, reduced venture capital funding, and negative sentiment across social media. Bear markets often follow periods of excessive speculation and unsustainable price gains.
      </p>

      <h2 id="history">Historical Crypto Bear Markets</h2>
      <p>
        Bitcoin has experienced several major bear markets. After reaching $1,100 in late 2013, it dropped to around $200 by early 2015. After the 2017 peak of $20,000, Bitcoin fell to roughly $3,200 by December 2018. Following the November 2021 high near $69,000, Bitcoin declined to about $15,500 in late 2022. Each time, the market eventually recovered to reach new all-time highs.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        Bear markets test conviction and expose weak projects. Many altcoins and tokens launched during bull market euphoria fail completely during downturns. Understanding that bear markets are a normal part of market cycles helps you avoid panic selling at the bottom and positions you to accumulate quality assets at lower prices.
      </p>

      <h2 id="strategies">Bear Market Strategies</h2>
      <p>
        Dollar-cost averaging (DCA) into strong projects during bear markets has historically been one of the most effective strategies. Reducing exposure to speculative altcoins, maintaining stablecoin reserves, focusing on learning and research, and avoiding leverage are all prudent bear market approaches. The projects that keep building during bear markets often become the leaders of the next cycle.
      </p>
    </LearnPageLayout>
  );
}
