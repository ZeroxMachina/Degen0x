import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Self-Insurance Strategies for Crypto (${CURRENT_YEAR}) | degen0x`,
  description: "Learn self-insurance strategies for crypto investors. Build your own protection through diversification, reserves, and risk management without buying insurance.",
};

export default function SelfInsuranceStrategiesPage() {
  return (
    <LearnPageLayout title="Self-Insurance Strategies for Crypto" categoryName="Crypto Insurance" categorySlug="insurance" readTime="8 min read"
      intro="Self-insurance is the practice of managing risk through your own strategies rather than purchasing formal insurance products. For many crypto investors, the cost of DeFi insurance premiums, the limitations of coverage, and the immaturity of insurance protocols make self-insurance an attractive complement or alternative. Effective self-insurance requires disciplined risk management, diversification, and reserve building."
      toc={[
        { id: "diversification", title: "diversification", level: 2 },
        { id: "diversification-as-insurance", title: "Diversification as Insurance", level: 2 },
        { id: "reserve-fund", title: "reserve-fund", level: 2 },
        { id: "building-a-reserve-fund", title: "Building a Reserve Fund", level: 2 },
        { id: "position-sizing", title: "position-sizing", level: 2 },
        { id: "position-sizing-rules", title: "Position Sizing Rules", level: 2 },
        { id: "combined-approach", title: "combined-approach", level: 2 },
        { id: "combining-self-and-formal-insurance", title: "Combining Self and Formal Insurance", level: 2 }
      ]}
      faqs={[
        { question: "What is self-insurance?", answer: "Self-insurance means managing risk through your own actions rather than buying insurance from a third party. This includes diversifying across protocols, maintaining cash reserves for unexpected losses, limiting position sizes, and using only battle-tested protocols. You accept the risk but manage it actively." },
        { question: "Is self-insurance better than buying DeFi insurance?", answer: "It depends. Self-insurance avoids premium costs and insurance protocol risk, but leaves you fully exposed to tail-risk events. Formal insurance provides a backstop for catastrophic losses. The best approach combines both: self-insurance for manageable risks and formal insurance for catastrophic ones." },
        { question: "How much should I keep in reserves?", answer: "A common approach is setting aside 5-10% of DeFi yield into a self-insurance fund until it reaches 10-20% of your total DeFi exposure. This reserve covers moderate losses while premium savings offset the opportunity cost." },
      ]}
      relatedArticles={[
        { title: "Insurance Cost Analysis", href: "/insurance/learn/insurance-cost-analysis", category: "Insurance" },
        { title: "Lending Risk Management", href: "/defi-lending/learn/lending-risk-management", category: "DeFi Lending" },
        { title: "Smart Contract Cover", href: "/insurance/learn/smart-contract-cover", category: "Insurance" },
      ]}
    >
      <h2 id="diversification">Diversification as Insurance</h2>
      <p>Diversification is the most powerful self-insurance tool. By spreading your capital across multiple protocols, chains, and strategies, you ensure that no single failure causes catastrophic loss. If you diversify equally across four protocols and one is exploited, you lose 25% rather than everything. This is equivalent to insurance with a 75% recovery rate and zero premium. Diversify across risk dimensions: protocol diversification (Aave, Compound, Morpho), chain diversification (Ethereum, Arbitrum, Base), stablecoin diversification (USDC, DAI, USDT), and strategy diversification (simple lending, yield farming, fixed-rate). Each dimension of diversification reduces a different type of concentrated risk. The key discipline is maintaining diversification even when one protocol or strategy offers higher yields, which tempts concentration.</p>

      <h2 id="reserve-fund">Building a Reserve Fund</h2>
      <p>A self-insurance reserve fund is capital set aside specifically to cover DeFi losses. Build it by allocating 5-10% of your DeFi yield into a separate, low-risk account (cold wallet holding stablecoins, high-yield savings account, or Treasury bills). Over time, this fund grows to provide meaningful loss coverage. For example, if you earn 6% annually on $100,000 in DeFi and set aside 10% of yield ($600/year), after three years you have an $1,800 reserve. While modest, this covers small losses and partial large losses. The reserve serves a psychological function too: knowing you have a buffer reduces the temptation to take excessive risk for higher yields. When you suffer a loss, draw from the reserve and rebuild it from future yields.</p>

      <h2 id="position-sizing">Position Sizing Rules</h2>
      <p>Position sizing is the discipline of limiting how much capital you allocate to any single risk exposure. Common rules include: no more than 25% of total DeFi capital in any single protocol, no more than 50% on any single chain, no more than 10% in any unaudited or new protocol, and no more than 5% in experimental strategies. These percentages ensure that a total loss in any single position is survivable. The Kelly Criterion from betting theory provides a mathematical framework: the optimal bet size is proportional to your edge divided by the risk. Applied to DeFi, this means larger allocations to lower-risk, well-understood protocols and smaller allocations to higher-risk, higher-reward opportunities. Regularly rebalance positions as values change to maintain your target allocation limits.</p>

      <h2 id="combined-approach">Combining Self and Formal Insurance</h2>
      <p>The optimal risk management approach combines self-insurance and formal insurance. Use formal insurance (Nexus Mutual, InsurAce) for your largest, most concentrated positions where a loss would be financially significant. Use self-insurance (diversification, reserves, position sizing) for smaller positions and general portfolio protection. For example, if you have $200,000 in DeFi: allocate across four protocols ($50,000 each), buy smart contract cover for the two riskiest positions ($50,000 each at approximately 3% cost = $3,000/year), self-insure the two lowest-risk positions through a reserve fund and diversification. This hybrid approach costs less than insuring everything while providing better protection than self-insurance alone. Review and adjust this balance quarterly based on portfolio changes, protocol risk assessments, and insurance market conditions.</p>
    </LearnPageLayout>
  );
}
