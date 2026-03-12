import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Yield in Crypto? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what yield means in crypto, the different sources of DeFi yield, how to evaluate yield opportunities, and the difference between real yield and emission-based yield.",
};

export default function YieldPage() {
  return (
    <LearnPageLayout title="What Is Yield?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="Yield in crypto refers to the return earned on cryptocurrency holdings through various DeFi activities such as lending, staking, providing liquidity, or participating in protocol incentives. Yield is typically expressed as an annual percentage (APR or APY) and can come from multiple sources including interest payments, trading fees, token emissions, and protocol revenue sharing. Understanding yield sources is essential for evaluating the sustainability and risk of DeFi opportunities."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-yield", title: "What Is Yield?", level: 2 },
        { id: "yield-sources", title: "yield-sources", level: 2 },
        { id: "sources-of-defi-yield", title: "Sources of DeFi Yield", level: 2 },
        { id: "real-vs-emission", title: "real-vs-emission", level: 2 },
        { id: "real-yield-vs-emission-yield", title: "Real Yield vs Emission Yield", level: 2 },
        { id: "evaluating-yield", title: "evaluating-yield", level: 2 },
        { id: "evaluating-yield-opportunities", title: "Evaluating Yield Opportunities", level: 2 }
      ]}
      faqs={[{ question: "What is real yield?", answer: "Real yield comes from actual economic activity: interest paid by borrowers, trading fees from swaps, protocol revenue distributed to token holders. It is sustainable because it is backed by genuine demand. Emission yield comes from token inflation and is only sustainable if the token price holds. The real yield movement emphasizes protocols that generate genuine revenue rather than relying on token printing." },
        { question: "Why are crypto yields so much higher than traditional finance?", answer: "Crypto yields are higher due to the risk premium for smart contract exposure, the nascent and competitive nature of DeFi markets, the efficiency gains from disintermediation, and in many cases, unsustainable token emission subsidies that inflate apparent returns. As DeFi matures and risk decreases, yields are gradually converging toward traditional finance levels for equivalent risk profiles." }]}
      relatedArticles={[{ title: "APR", href: "/learn/glossary/apr", category: "Glossary" }, { title: "APY", href: "/learn/glossary/apy", category: "Glossary" }, { title: "Farming", href: "/learn/glossary/farming", category: "Glossary" }, { title: "DeFi Yield Strategies", href: "/learn/defi-yield-strategies", category: "Learn Crypto" }]}
    >
      <h2 id="definition">What Is Yield?</h2>
      <p>Yield is the income generated from deploying capital in DeFi protocols. When you lend ETH on Aave, the interest paid by borrowers is your yield. When you provide liquidity on Uniswap, the trading fees you earn are your yield. When you stake SOL, the network rewards are your yield. Yield compensates you for the risks you take: smart contract risk, impermanent loss, opportunity cost of locked capital, and market volatility.</p>

      <h2 id="yield-sources">Sources of DeFi Yield</h2>
      <p>Lending yield comes from borrowers paying interest on their loans. Liquidity provision yield comes from trading fees earned on DEXs. Staking yield comes from network inflation rewards and transaction fees. Protocol emissions distribute newly created tokens to incentivize specific behaviors. Revenue sharing distributes protocol profits to token holders or stakers. Most DeFi positions earn from a combination of these sources, making it important to understand each component.</p>

      <h2 id="real-vs-emission">Real Yield vs Emission Yield</h2>
      <p>Real yield is backed by actual revenue: borrower interest, trading fees, or protocol revenue. It is sustainable as long as the underlying economic activity continues. Emission yield is paid in newly minted tokens and dilutes existing holders. A protocol paying 50% APY in its own token while the token price drops 60% results in a net loss despite the impressive headline yield. Always separate real yield from emission-based incentives when evaluating opportunities.</p>

      <h2 id="evaluating-yield">Evaluating Yield Opportunities</h2>
      <p>When evaluating yield, ask where the yield comes from, whether it is sustainable, and what risks you are taking to earn it. High yields always mean high risk. Check the protocol&apos;s audit history, TVL trend, and team reputation. Compare the yield to the risk-free rate (US Treasury yield as a benchmark). If a DeFi opportunity offers significantly more than the risk-free rate, the excess return should be proportional to the additional risks you are accepting.</p>
    </LearnPageLayout>
  );
}
