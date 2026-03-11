import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Bull Market? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what a crypto bull market is, how to identify one, historical bull runs, and strategies for maximizing gains while managing risk.",
};

export default function BullMarketPage() {
  return (
    <LearnPageLayout
      title="What Is a Bull Market?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A bull market is a sustained period of rising asset prices characterized by optimism, growing investment, and increasing confidence. In crypto, bull markets can produce extraordinary gains — Bitcoin has risen over 1,000% in previous bull cycles. Understanding bull market dynamics helps you capitalize on opportunities while preparing for the inevitable correction."
      toc={[
        { id: "definition", title: "What Is a Bull Market?", level: 2 },
        { id: "characteristics", title: "Characteristics", level: 2 },
        { id: "history", title: "Historical Crypto Bull Markets", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
        { id: "strategies", title: "Bull Market Strategies", level: 2 },
      ]}
      faqs={[
        {
          question: "How long do crypto bull markets last?",
          answer:
            "Historical crypto bull markets have lasted roughly 12-18 months from the breakout above previous all-time highs to the cycle peak. However, the lead-up period from bear market bottoms can extend this to 2-3 years. Each cycle has shown slightly different timing.",
        },
        {
          question: "What triggers a crypto bull market?",
          answer:
            "Common catalysts include Bitcoin halvings (which reduce new supply), increasing institutional adoption, favorable regulation, macroeconomic conditions (like low interest rates), and technological breakthroughs. Bull markets are typically fueled by a combination of these factors plus growing retail interest.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Bear Market?", href: "/learn/glossary/bear-market", category: "Glossary" },
        { title: "What Is FOMO?", href: "/learn/glossary/fomo", category: "Glossary" },
        { title: "What Is Halving?", href: "/learn/glossary/halving", category: "Glossary" },
        { title: "What Is Bitcoin Dominance?", href: "/learn/glossary/bitcoin-dominance", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Bull Market?</h2>
      <p>
        A bull market describes a prolonged period where prices are rising and optimism prevails. The term comes from the way a bull attacks — thrusting its horns upward. In crypto, bull markets are characterized by new all-time highs, increasing media attention, growing trading volumes, and an influx of new investors entering the market.
      </p>

      <h2 id="characteristics">Characteristics</h2>
      <p>
        Key indicators of a bull market include consistent higher highs and higher lows on price charts, expanding trading volume, positive news coverage, increasing social media engagement, strong developer activity, growing venture capital investment, and new products launching (ETFs, institutional custody solutions). Euphoria and speculation intensify as the cycle progresses.
      </p>

      <h2 id="history">Historical Crypto Bull Markets</h2>
      <p>
        The 2013 bull run saw Bitcoin rise from under $100 to over $1,100. The 2017 cycle pushed Bitcoin from $1,000 to nearly $20,000 and spawned the ICO boom. The 2020-2021 bull market took Bitcoin from $5,000 to $69,000, driven by institutional adoption, DeFi Summer, and the NFT explosion. Each cycle brought new narratives, technologies, and participants to the ecosystem.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        Bull markets create wealth but also breed overconfidence and excessive risk-taking. Many investors make most of their returns during bull markets but give them back by not taking profits. Understanding where you are in the cycle — early accumulation, markup, or euphoria — helps you make better allocation and risk management decisions.
      </p>

      <h2 id="strategies">Bull Market Strategies</h2>
      <p>
        Have a plan for taking profits at predetermined levels rather than trying to time the exact top. Diversify across established projects rather than concentrating in speculative tokens. Gradually reduce risk exposure as euphoria increases. Keep records for tax purposes. Remember that every bull market ends — the question is whether you capture gains or ride them back down.
      </p>
    </LearnPageLayout>
  );
}
