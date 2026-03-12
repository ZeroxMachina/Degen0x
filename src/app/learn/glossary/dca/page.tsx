import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is DCA? Dollar-Cost Averaging Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what dollar-cost averaging (DCA) is, how it works for crypto investing, its advantages over lump-sum investing, and how to set up a DCA strategy.",
};

export default function DcaPage() {
  return (
    <LearnPageLayout
      title="What Is DCA (Dollar-Cost Averaging)?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="Dollar-cost averaging (DCA) is an investment strategy where you invest a fixed amount of money at regular intervals, regardless of the asset's price. Instead of trying to time the market with a single large purchase, DCA spreads your investment over time, reducing the impact of volatility and emotional decision-making. It is one of the most recommended strategies for crypto investing."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-dca", title: "What Is DCA?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-dca-works", title: "How DCA Works", level: 2 },
        { id: "advantages", title: "advantages", level: 2 },
        { id: "advantages", title: "Advantages", level: 2 },
        { id: "limitations", title: "limitations", level: 2 },
        { id: "limitations", title: "Limitations", level: 2 },
        { id: "getting-started", title: "getting-started", level: 2 },
        { id: "getting-started", title: "Getting Started", level: 2 }
      ]}
      faqs={[
        {
          question: "Is DCA better than lump-sum investing?",
          answer:
            "Studies in traditional markets show lump-sum investing outperforms DCA about two-thirds of the time because markets tend to go up over time. However, in volatile crypto markets, DCA significantly reduces the risk of buying at a peak. DCA is psychologically easier and produces more consistent results for most investors.",
        },
        {
          question: "How often should I DCA into crypto?",
          answer:
            "Common intervals are weekly, bi-weekly, or monthly. The specific frequency matters less than consistency. Weekly DCA provides more data points and smoother cost averaging, while monthly is simpler to manage. Choose an interval that fits your budget and stick with it.",
        },
      ]}
      relatedArticles={[
        { title: "What Is HODL?", href: "/learn/glossary/hodl", category: "Glossary" },
        { title: "What Is a Bear Market?", href: "/learn/glossary/bear-market", category: "Glossary" },
        { title: "What Is BTFD?", href: "/learn/glossary/btfd", category: "Glossary" },
        { title: "What Is a Bull Market?", href: "/learn/glossary/bull-market", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is DCA?</h2>
      <p>
        Dollar-cost averaging is the practice of investing a predetermined amount on a regular schedule — for example, buying $100 of Bitcoin every Monday. When prices are high, your fixed amount buys less. When prices are low, it buys more. Over time, this averages out your cost basis and removes the stress of trying to find the perfect entry point.
      </p>

      <h2 id="how-it-works">How DCA Works</h2>
      <p>
        Suppose you invest $100 weekly into Bitcoin. In week one, Bitcoin is $50,000 — you get 0.002 BTC. In week two, it drops to $40,000 — you get 0.0025 BTC. In week three, it rises to $45,000 — you get 0.00222 BTC. Your average cost per Bitcoin is lower than the arithmetic average of the three prices because you bought more units when the price was lower.
      </p>

      <h2 id="advantages">Advantages</h2>
      <p>
        DCA removes emotional decision-making from investing. It eliminates the paralysis of trying to time the market. It automatically buys more when prices are cheap and less when prices are expensive. It creates investing discipline through a regular schedule. And it makes crypto investing accessible regardless of how much capital you have — even small weekly amounts compound over time.
      </p>

      <h2 id="limitations">Limitations</h2>
      <p>
        In a consistently rising market, DCA results in a higher average cost than a lump-sum purchase at the beginning. DCA does not protect against investing in fundamentally flawed assets — regularly buying a token that goes to zero still results in total loss. Transaction fees can also eat into returns for very small or frequent purchases.
      </p>

      <h2 id="getting-started">Getting Started</h2>
      <p>
        Most major exchanges offer automatic recurring purchases. Set a budget you can afford consistently (not money you might need short-term). Choose a frequency (weekly or monthly). Select your assets (Bitcoin and Ethereum are the most common DCA targets). Set it up and do not check prices obsessively — the whole point is to remove emotional decision-making from the process.
      </p>
    </LearnPageLayout>
  );
}
