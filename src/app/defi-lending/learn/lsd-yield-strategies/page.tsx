import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `LSD Yield Strategies Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete guide to Liquid Staking Derivative yield strategies. Learn how to maximize returns with stETH, rETH, cbETH through lending, LP, and leveraged approaches.",
  keywords: ["LSD yield", "liquid staking derivatives", "stETH strategies", "LSD DeFi"],
};

export default function LsdYieldStrategiesPage() {
  return (
    <LearnPageLayout
      title="LSD Yield Strategies"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="11 min"
      intro="Liquid Staking Derivatives (LSDs) like stETH, rETH, and cbETH have become foundational DeFi assets, enabling ETH holders to earn staking yield while maintaining liquidity for additional yield strategies. The LSD ecosystem supports a wide range of strategies from simple holding to complex leveraged positions, each adding incremental yield on top of the base staking return."
      toc={[
        { id: "lsd-basics", title: "lsd-basics", level: 2 },
        { id: "lsd-basics-yield-sources", title: "LSD Basics & Yield Sources", level: 2 },
        { id: "lending-strategies", title: "lending-strategies", level: 2 },
        { id: "lsd-lending-strategies", title: "LSD Lending Strategies", level: 2 },
        { id: "lp-strategies", title: "lp-strategies", level: 2 },
        { id: "lsd-lp-strategies", title: "LSD LP Strategies", level: 2 },
        { id: "leveraged-lsd", title: "leveraged-lsd", level: 2 },
        { id: "leveraged-lsd-strategies", title: "Leveraged LSD Strategies", level: 2 }
      ]}
      faqs={[
        { question: "Which LSD has the best yield?", answer: "Base staking yields are similar across major LSDs (3-4%). Jito's jitoSOL may offer slightly higher yields from MEV. The real difference is in DeFi composability and incentive opportunities available for each token." },
        { question: "Is holding stETH the same as staking ETH?", answer: "stETH represents staked ETH and earns equivalent staking rewards, but adds Lido smart contract risk. The convenience of liquidity and DeFi composability comes at the cost of this additional risk layer." },
        { question: "Can I use LSDs as collateral?", answer: "Yes, major LSDs like stETH, rETH, and cbETH are accepted as collateral on Aave V3, Compound, and most DeFi lending protocols, often with special efficiency mode parameters for ETH-correlated borrowing." },
      ]}
      relatedArticles={[
        { title: "ETH Yield Strategies", href: "/defi-lending/learn/eth-yield-strategies", category: "DeFi Lending" },
        { title: "Restaking Yield Guide", href: "/defi-lending/learn/restaking-yield-guide", category: "DeFi Lending" },
        { title: "Recursive Lending Strategy", href: "/defi-lending/learn/recursive-lending-strategy", category: "DeFi Lending" },
      ]}
    >
      <section id="lsd-basics">
        <h2>LSD Basics and Yield Sources</h2>
        <p>Liquid Staking Derivatives are tokens issued by staking protocols that represent staked ETH (or other PoS assets) plus accumulated staking rewards. Major LSDs include Lido's stETH (rebasing token that updates balance daily), Rocket Pool's rETH and Coinbase's cbETH (appreciation tokens whose price increases relative to ETH as rewards accrue). The base yield from staking is approximately 3-4% APY for ETH, set by Ethereum's validator economics. Beyond this base yield, LSD holders can access additional returns through lending, liquidity provision, leveraged strategies, and ecosystem incentive programs. The total yield stack can range from the base 3-4% up to 15-20% or more with aggressive strategies, each layer adding both yield and risk. Understanding each layer is essential for building an LSD yield strategy that matches your risk tolerance.</p>
      </section>
      <section id="lending-strategies">
        <h2>LSD Lending Strategies</h2>
        <p>Depositing LSDs into lending protocols like Aave V3 generates lending interest on top of the embedded staking yield. When you supply stETH to Aave, the token continues to accrue staking rewards in your position while borrowers pay you additional interest for accessing the stETH. Aave V3's efficiency mode (eMode) for ETH-correlated assets enables higher LTV ratios for stETH collateral when borrowing ETH, improving capital efficiency. This creates opportunities for recursive lending: deposit stETH, borrow ETH in eMode, swap for more stETH, and redeposit. The net yield is the staking spread multiplied by effective leverage. On Solana, similar strategies use jitoSOL or mSOL on Kamino or MarginFi. Lending LSDs is one of the most popular and accessible yield enhancement strategies, with the main risk being smart contract failure in the lending protocol.</p>
      </section>
      <section id="lp-strategies">
        <h2>LSD LP Strategies</h2>
        <p>Providing liquidity in LSD/ETH pools on DEXs captures trading fees while maintaining staking yield exposure. Curve's stETH/ETH pool is one of the largest LP positions in DeFi, providing stable returns with minimal impermanent loss since stETH and ETH trade near parity. Uniswap V3 concentrated liquidity for stETH/ETH can generate higher fee income with tight ranges but requires more active management. Balancer's LSD pools offer another venue with potentially different fee and incentive dynamics. On L2s, LSD pools on Velodrome, Aerodrome, and other DEXs may receive additional token incentives through vote-directed emission systems. The combination of staking yield, trading fees, and token incentives can produce total returns of 6-12% on LSD LP positions with moderate risk.</p>
      </section>
      <section id="leveraged-lsd">
        <h2>Leveraged LSD Strategies</h2>
        <p>Leveraged LSD strategies amplify the staking yield spread through recursive lending loops or automated leverage vaults. The basic approach deposits an LSD, borrows the base asset (ETH or SOL), swaps for more LSD, and repeats. Platforms like Seamless, Morpho, and Kamino offer automated vaults that handle this process. The effective yield equals the staking spread multiplied by leverage, minus borrowing costs. At 3x leverage with a 2% staking spread and 1% borrowing cost, the net amplified yield is approximately 3% on top of base staking. The primary risk is LSD de-pegging from the base asset, which happened with stETH in 2022 during the Three Arrows Capital collapse. De-peg events can trigger cascading liquidations in leveraged positions. Conservative leverage ratios and de-peg monitoring are essential for managing this strategy safely.</p>
      </section>
    </LearnPageLayout>
  );
}
