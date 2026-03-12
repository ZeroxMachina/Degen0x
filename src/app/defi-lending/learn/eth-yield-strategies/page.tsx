import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `ETH Yield Strategies (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete guide to earning yield on ETH in DeFi. Covers staking, liquid staking, restaking, lending, LP strategies, and advanced ETH yield optimization.",
  keywords: ["ETH yield", "Ethereum staking yield", "liquid staking", "ETH DeFi strategies"],
};

export default function EthYieldStrategiesPage() {
  return (
    <LearnPageLayout
      title="ETH Yield Strategies"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="13 min"
      intro="Ethereum's transition to proof-of-stake created a foundational yield layer for ETH holders, and DeFi has built extensive yield opportunities on top of this base. From simple staking to complex restaking and leveraged strategies, ETH yield options span the full risk-reward spectrum. This guide covers every major approach to earning yield on your ETH holdings."
      toc={[
        { id: "staking-basics", title: "staking-basics", level: 2 },
        { id: "eth-staking-liquid-staking", title: "ETH Staking & Liquid Staking", level: 2 },
        { id: "restaking", title: "restaking", level: 2 },
        { id: "restaking-strategies", title: "Restaking Strategies", level: 2 },
        { id: "lending-yield", title: "lending-yield", level: 2 },
        { id: "eth-lending-yield", title: "ETH Lending Yield", level: 2 },
        { id: "lp-strategies", title: "lp-strategies", level: 2 },
        { id: "eth-lp-strategies", title: "ETH LP Strategies", level: 2 },
        { id: "leveraged-staking", title: "leveraged-staking", level: 2 },
        { id: "leveraged-staking-strategies", title: "Leveraged Staking Strategies", level: 2 },
        { id: "risk-framework", title: "risk-framework", level: 2 },
        { id: "risk-framework", title: "Risk Framework", level: 2 }
      ]}
      faqs={[
        { question: "What is the base ETH staking yield?", answer: "The base ETH staking yield fluctuates around 3-4% APY, determined by the number of active validators and network activity. This rate adjusts automatically through the Ethereum protocol and represents the risk-free rate of the Ethereum ecosystem." },
        { question: "Is liquid staking better than solo staking?", answer: "Liquid staking provides flexibility by giving you a tradeable token (like stETH) while your ETH is staked. This enables DeFi composability but adds smart contract risk. Solo staking earns the same base yield with less smart contract risk but requires 32 ETH and technical setup." },
        { question: "Can I earn more than the base staking rate?", answer: "Yes, through strategies like restaking (additional rewards for securing other networks), lending staked ETH derivatives, providing liquidity in LST pools, or leveraged staking. Each adds incremental yield but also additional risk layers." },
      ]}
      relatedArticles={[
        { title: "Stablecoin Yield Strategies", href: "/defi-lending/learn/stablecoin-yield-strategies", category: "DeFi Lending" },
        { title: "LSD Yield Strategies", href: "/defi-lending/learn/lsd-yield-strategies", category: "DeFi Lending" },
        { title: "Restaking Yield Guide", href: "/defi-lending/learn/restaking-yield-guide", category: "DeFi Lending" },
      ]}
    >
      <section id="staking-basics">
        <h2>ETH Staking and Liquid Staking</h2>
        <p>ETH staking is the foundation of all ETH yield strategies. Solo staking requires 32 ETH and running validator software, earning the protocol's base yield of approximately 3-4% APY. Liquid staking protocols like Lido (stETH), Rocket Pool (rETH), and Coinbase (cbETH) remove the 32 ETH minimum and technical requirements by pooling deposits and issuing liquid receipt tokens. These tokens represent your staked ETH plus accrued rewards and can be freely traded, used as collateral in lending protocols, or deployed in DeFi strategies. The liquid staking token market has grown enormously, with Lido's stETH becoming one of the most widely held tokens in DeFi. When choosing a liquid staking provider, consider factors including the protocol's track record, validator set decentralization, fee structure (typically 5-10% of staking rewards), and the liquidity depth of their receipt token.</p>
      </section>
      <section id="restaking">
        <h2>Restaking Strategies</h2>
        <p>Restaking through EigenLayer and similar protocols allows staked ETH to simultaneously secure additional protocols and networks, earning supplementary rewards on top of base staking yield. By depositing stETH, rETH, or native ETH into restaking protocols, you extend your staked ETH's security guarantees to Actively Validated Services (AVSs) that pay for this security. Restaking can add 1-5% additional yield depending on which AVSs you opt into, though the reward landscape is still developing. Liquid restaking tokens (LRTs) like those from EtherFi, Renzo, and Kelp DAO add another layer of liquidity, allowing you to use your restaked position in DeFi. The restaking ecosystem is newer and carries additional smart contract risk, slashing risk from AVS participation, and the complexity of managing multiple protocol interactions.</p>
      </section>
      <section id="lending-yield">
        <h2>ETH Lending Yield</h2>
        <p>Lending ETH on protocols like Aave, Compound, and Spark generates variable interest from borrowers who need ETH for trading, shorting, or DeFi strategies. ETH lending yields typically range from 1-5% APY, fluctuating with market conditions. During high-volatility periods, borrowing demand surges and lending rates spike. Lending liquid staking tokens like stETH or rETH on protocols that support them generates dual yield: the base staking return continues to accrue in the token's value while the lending interest adds on top. Some protocols specifically cater to LST lending with efficiency mode parameters that enable higher loan-to-value ratios for correlated ETH/stETH positions.</p>
      </section>
      <section id="lp-strategies">
        <h2>ETH LP Strategies</h2>
        <p>Providing liquidity in ETH-paired pools on DEXs generates trading fee income and often additional token rewards. ETH/stablecoin pools on major DEXs are among the highest-volume trading pairs, generating significant fee income for liquidity providers. ETH/LST pools (like ETH/stETH) offer lower impermanent loss since the assets are highly correlated, making them attractive for risk-conscious LPs. Concentrated liquidity on Uniswap V3 or similar protocols can dramatically increase fee capture for ETH pairs but requires active range management. On L2 DEXs with vote-directed incentive systems, ETH pairs often receive substantial token emissions that boost total yield significantly above fee income alone.</p>
      </section>
      <section id="leveraged-staking">
        <h2>Leveraged Staking Strategies</h2>
        <p>Leveraged staking involves depositing stETH or similar LSTs as collateral, borrowing ETH against them, staking the borrowed ETH for more LSTs, and repeating. This recursive loop amplifies staking yield proportional to the leverage applied. For example, 3x leverage on a 4% staking yield creates approximately 12% gross yield minus borrowing costs. Platforms like Seamless and Morpho offer automated leveraged staking vaults that handle the looping process. The risk is that if the LST price diverges from ETH (a de-peg event), leveraged positions can face rapid liquidation. The stETH de-peg during the 2022 market downturn demonstrated this risk, with leveraged positions facing significant losses. Only pursue this strategy with deep understanding of the liquidation mechanics and a clear plan for managing de-peg scenarios.</p>
      </section>
      <section id="risk-framework">
        <h2>Risk Framework</h2>
        <p>ETH yield strategies can be organized by risk level. Low risk includes simple liquid staking through Lido or Rocket Pool, accepting only smart contract and minor slashing risk on top of ETH price exposure. Medium risk includes lending LSTs on established protocols or providing liquidity in correlated ETH/LST pools. Higher risk includes restaking (additional slashing risk from AVSs), leveraged staking loops (liquidation risk during de-pegs), and LP positions in volatile ETH pairs (impermanent loss). The highest risk strategies involve newer protocols, higher leverage, or combinations of multiple yield sources. Always evaluate whether incremental yield justifies incremental risk, and remember that ETH itself carries significant price volatility that affects all strategies regardless of their DeFi-specific risk profile.</p>
      </section>
    </LearnPageLayout>
  );
}
