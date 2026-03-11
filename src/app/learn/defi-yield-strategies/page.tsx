import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `DeFi Yield Strategies for Different Risk Profiles (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Explore DeFi yield strategies for conservative, moderate, and aggressive risk profiles. Learn about stablecoin lending, liquid staking, LP strategies, leveraged yield, and how to evaluate yield sustainability.",
};

export default function DefiYieldStrategiesPage() {
  return (
    <LearnPageLayout
      title="DeFi Yield Strategies for Different Risk Profiles"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="10 min read"
      intro="DeFi offers a spectrum of yield-generating opportunities ranging from conservative stablecoin lending at 3-5% APY to aggressive leveraged strategies potentially exceeding 50% APY. The key to successful DeFi yield generation is matching your strategy to your risk tolerance, understanding the sources and sustainability of yield, and managing the multiple layers of risk inherent in decentralized protocols. This guide breaks down strategies by risk profile to help you find the right approach for your situation."
      toc={[
        { id: "conservative", title: "Conservative Strategies (3-8% APY)", level: 2 },
        { id: "moderate", title: "Moderate Strategies (8-20% APY)", level: 2 },
        { id: "aggressive", title: "Aggressive Strategies (20%+ APY)", level: 2 },
        { id: "sustainability", title: "Evaluating Yield Sustainability", level: 2 },
        { id: "risk-management", title: "Risk Management for Yield Strategies", level: 2 },
      ]}
      faqs={[
        {
          question: "What is a realistic sustainable yield in DeFi?",
          answer:
            "Sustainable yields from real economic activity (lending interest, trading fees) typically range from 3-15% for stablecoin strategies and 5-20% for volatile asset strategies. Yields significantly above these ranges usually involve token emission subsidies, higher risk, or both. If a yield seems too good to be true, it probably is — or it is compensating for risks you may not fully understand.",
        },
        {
          question: "Should I farm yield on stablecoins or volatile assets?",
          answer:
            "Stablecoin strategies have no impermanent loss risk and provide more predictable returns, making them better for conservative investors. Volatile asset strategies can offer higher yields but expose you to price risk and impermanent loss. Your choice should depend on your market outlook: if you are bullish, yield farming on assets you want to hold anyway amplifies returns. If you are neutral or bearish, stablecoin strategies preserve capital while generating income.",
        },
        {
          question: "How do I get started with DeFi yield?",
          answer:
            "Start with the simplest strategy: lending stablecoins on Aave or Compound on a Layer 2 network like Arbitrum or Base. This introduces you to wallet setup, token approvals, and DeFi interfaces with minimal risk. As you become comfortable, gradually explore liquid staking and simple liquidity provision before attempting more complex strategies.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Yield Farming?", href: "/learn/what-is-yield-farming", category: "Learn" },
        { title: "What Is Liquid Staking?", href: "/learn/what-is-liquid-staking", category: "Learn" },
        { title: "Impermanent Loss Explained", href: "/learn/impermanent-loss", category: "Learn" },
        { title: "Risk Management in Crypto", href: "/learn/risk-management-crypto", category: "Learn" },
      ]}
    >
      <section id="conservative">
        <h2>Conservative Strategies (3-8% APY)</h2>
        <p>
          Stablecoin lending on major protocols like Aave, Compound, and Morpho is the most conservative DeFi strategy. Deposit USDC, USDT, or DAI into a lending pool and earn interest from borrowers. Yields typically range from 3-8% depending on market conditions and utilization rates. The risk is limited to smart contract vulnerability in well-audited protocols that have operated for years, and the absence of price risk since you are lending stablecoins.
        </p>
        <p>
          Liquid staking through protocols like Lido (stETH) or Rocket Pool (rETH) provides Ethereum staking yield of approximately 3-5% with the flexibility to exit your position through secondary markets. This strategy is appropriate for ETH holders who plan to hold long-term and want to earn yield on their position. The risk includes smart contract risk in the liquid staking protocol and potential slashing events affecting underlying validators, both of which are low-probability with major protocols but not zero.
        </p>
      </section>

      <section id="moderate">
        <h2>Moderate Strategies (8-20% APY)</h2>
        <p>
          Providing liquidity to stablecoin or correlated-asset pools on DEXs offers moderate yields with limited impermanent loss. Curve Finance's stablecoin pools (USDC/USDT, stETH/ETH) and Uniswap V3 concentrated liquidity positions in narrow ranges around correlated-asset pegs can generate 8-15% from trading fees and incentive rewards. The risk is primarily smart contract exposure and the possibility of a stablecoin de-peg, which would cause significant impermanent loss.
        </p>
        <p>
          LST-ETH liquidity provision involves providing liquidity to pools pairing a liquid staking token with ETH. Since both tokens appreciate with staking rewards and their price ratio remains relatively stable, impermanent loss is typically low. Combined with trading fees, this strategy can yield 8-15% with moderate risk. Some protocols offer additional token incentives on top of the base yield, boosting returns during promotional periods. Using established liquidity management vaults (like those from Arrakis or Gamma Strategies) can automate position management for concentrated liquidity positions.
        </p>
      </section>

      <section id="aggressive">
        <h2>Aggressive Strategies (20%+ APY)</h2>
        <p>
          Leveraged yield farming amplifies returns by borrowing against your collateral to increase your farming position. For example, depositing ETH, borrowing stablecoins, deploying those stablecoins in a high-yield farm, and potentially repeating the loop. This can multiply yields 2-5x but introduces liquidation risk: if the value of your collateral drops significantly, your position is liquidated with penalties. Leveraged strategies require active monitoring and a deep understanding of liquidation mechanics.
        </p>
        <p>
          Providing liquidity on volatile token pairs (like new DeFi governance tokens paired with ETH) offers high fees and farming rewards but exposes you to significant impermanent loss if token prices diverge. Points farming and airdrop strategies involve depositing into new or pre-token protocols in hope of receiving valuable token airdrops, which can be extremely lucrative but are uncertain by nature. These strategies are only suitable for capital you can afford to lose entirely, and they require significant time investment for research, monitoring, and active management.
        </p>
      </section>

      <section id="sustainability">
        <h2>Evaluating Yield Sustainability</h2>
        <p>
          The most important question for any yield opportunity is: where does the yield come from? Sustainable yield has identifiable economic sources: borrowers paying interest to lenders, traders paying fees to liquidity providers, and users paying for protocol services. These yields fluctuate with demand but are fundamentally sustainable because they represent payment for genuine economic services.
        </p>
        <p>
          Unsustainable yields come from token emissions: the protocol distributes its own governance tokens to incentivize deposits, effectively paying yield from its treasury or through dilution. While token incentives can bootstrap liquidity during a protocol's early growth phase, they are inherently temporary. When the incentives end or the token price declines, yield drops dramatically and capital exits. Evaluate every yield opportunity by separating the sustainable base yield (from fees and interest) from the incentivized portion (from token emissions) to understand what your return would be if incentives disappeared.
        </p>
      </section>

      <section id="risk-management">
        <h2>Risk Management for Yield Strategies</h2>
        <p>
          Diversify across multiple protocols and chains to limit exposure to any single smart contract vulnerability. Even if a protocol has been audited and operating for years, concentrating your entire yield strategy in one place creates unnecessary tail risk. A 10% allocation to each of ten protocols ensures that even a total loss in one protocol only impacts 10% of your yield-generating capital.
        </p>
        <p>
          Monitor your positions regularly, especially leveraged ones. Set alerts for collateral ratios approaching liquidation thresholds. Keep reserve capital to add collateral during market downturns. Factor in gas costs and transaction fees when calculating net yields — on Ethereum mainnet, frequent compounding or position management can eat significantly into returns. Use yield aggregators and automated vault strategies that optimize these costs for you. Most importantly, never chase the highest advertised yield without fully understanding the risks: the graveyard of DeFi is full of protocols that offered 1000% APY before collapsing to zero.
        </p>
      </section>
    </LearnPageLayout>
  );
}
