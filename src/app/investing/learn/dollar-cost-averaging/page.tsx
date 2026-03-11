import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Dollar-Cost Averaging (DCA) Crypto Strategy ${CURRENT_YEAR} - Guide`,
  description: `Learn how dollar-cost averaging works for crypto investing. DCA strategies, benefits, drawbacks, and how to set up automated purchases.`,
  alternates: { canonical: "/investing/learn/dollar-cost-averaging" },
};

const toc = [
  { id: "what-is-dca", title: "What Is Dollar-Cost Averaging", level: 2 },
  { id: "how-it-works", title: "How DCA Works in Crypto", level: 2 },
  { id: "benefits", title: "Benefits of DCA", level: 2 },
  { id: "setting-up", title: "Setting Up a DCA Strategy", level: 2 },
];

const faqs = [
  { question: "Is DCA better than lump sum investing?", answer: "Studies show lump sum investing outperforms DCA about two-thirds of the time because markets tend to go up over time. However, DCA provides psychological benefits by reducing the stress of timing decisions and the risk of investing everything at a market peak. For volatile assets like crypto, DCA is often the better choice for most investors." },
  { question: "How often should I DCA into crypto?", answer: "Weekly or monthly purchases work well for most investors. Weekly DCA provides more averaging points but incurs more transaction fees. Monthly DCA is simpler and works well for most people. The most important thing is consistency rather than frequency." },
  { question: "Should I DCA into multiple cryptocurrencies?", answer: "Yes. DCA into Bitcoin and Ethereum at minimum. You can allocate a portion to altcoins you have researched. A common approach is to DCA 50% into BTC, 30% into ETH, and 20% across selected altcoins." },
];

export default function DollarCostAveragingPage() {
  return (
    <LearnPageLayout
      title="Dollar-Cost Averaging Strategy for Crypto"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="7 min"
      intro="Dollar-cost averaging is one of the most effective and beginner-friendly investment strategies for cryptocurrency. By investing a fixed amount at regular intervals regardless of price, you reduce the impact of volatility and remove emotion from your investment decisions."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Risk Management", href: "/investing/learn/risk-management", category: "Investing" },
      ]}
    >
      <section id="what-is-dca" className="mb-10">
        <h2>What Is Dollar-Cost Averaging?</h2>
        <p>
          Dollar-cost averaging (DCA) is an investment strategy where you invest a fixed amount
          of money at regular intervals, regardless of the asset price. When prices are low,
          your fixed amount buys more units. When prices are high, it buys fewer. Over time,
          this averages out your cost basis and reduces the risk of making one large purchase
          at an unfavorable price.
        </p>
      </section>

      <section id="how-it-works" className="mb-10">
        <h2>How DCA Works in Crypto</h2>
        <p>
          Suppose you decide to invest $100 per week into Bitcoin. In week one, BTC is at $50,000
          and you get 0.002 BTC. In week two, BTC drops to $40,000 and your $100 buys 0.0025 BTC.
          In week three, BTC recovers to $45,000 and you get 0.0022 BTC. Your average cost per
          BTC across these three weeks is lower than the average price, because you bought more
          when it was cheaper. This mathematical advantage compounds over many purchase cycles.
        </p>
      </section>

      <section id="benefits" className="mb-10">
        <h2>Benefits of DCA</h2>
        <p>
          DCA removes the stress of timing the market. It is psychologically easier than trying
          to predict price movements. It enforces discipline and regular investing habits. It
          naturally buys more during dips and less during peaks. It works particularly well
          for volatile assets like cryptocurrency where short-term price predictions are
          essentially impossible. DCA also makes it easier to invest during scary bear markets
          when most investors stop buying.
        </p>
      </section>

      <section id="setting-up" className="mb-10">
        <h2>Setting Up a DCA Strategy</h2>
        <p>
          Most major exchanges support recurring purchases. On Coinbase, Kraken, or Binance, set
          up automatic weekly or monthly purchases for your chosen assets. Define your budget
          (e.g., $200/month), split it across target assets (e.g., $100 BTC, $60 ETH, $40
          altcoins), and let the automation run. Review and adjust quarterly, but avoid stopping
          during market downturns. Bear markets are when DCA provides the most value by lowering
          your average cost.
        </p>
      </section>
    </LearnPageLayout>
  );
}
