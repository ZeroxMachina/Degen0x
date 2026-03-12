import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `SOL Yield Strategies (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete guide to earning yield on SOL in DeFi. Covers liquid staking, lending, LP strategies, leveraged farming, and Solana-specific yield opportunities.",
  keywords: ["SOL yield", "Solana DeFi yield", "SOL staking", "Solana yield strategies"],
};

export default function SolYieldStrategiesPage() {
  return (
    <LearnPageLayout
      title="SOL Yield Strategies"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="12 min"
      intro="Solana's thriving DeFi ecosystem offers numerous yield opportunities for SOL holders, from straightforward liquid staking to complex leveraged strategies. With fast transactions and near-zero fees, Solana enables yield strategies that would be impractical on Ethereum mainnet due to gas costs. This guide covers the full range of SOL yield approaches available in the Solana ecosystem."
      toc={[
        { id: "liquid-staking", title: "liquid-staking", level: 2 },
        { id: "sol-liquid-staking", title: "SOL Liquid Staking", level: 2 },
        { id: "lending", title: "lending", level: 2 },
        { id: "sol-lending-strategies", title: "SOL Lending Strategies", level: 2 },
        { id: "lp-farming", title: "lp-farming", level: 2 },
        { id: "lp-farming-on-solana-dexs", title: "LP Farming on Solana DEXs", level: 2 },
        { id: "leveraged", title: "leveraged", level: 2 },
        { id: "leveraged-sol-strategies", title: "Leveraged SOL Strategies", level: 2 },
        { id: "risk-assessment", title: "risk-assessment", level: 2 },
        { id: "risk-assessment", title: "Risk Assessment", level: 2 }
      ]}
      faqs={[
        { question: "What is the base SOL staking yield?", answer: "SOL staking yields approximately 6-8% APY from validator rewards, higher than ETH staking due to Solana's different tokenomics and inflation schedule. Liquid staking protocols like Marinade and Jito take a small fee but provide liquidity and DeFi composability." },
        { question: "What are the best Solana yield protocols?", answer: "For lending: Kamino, MarginFi, and Drift. For DEX LP: Orca, Raydium, and Meteora. For liquid staking: Marinade (mSOL), Jito (jitoSOL), and BlazeStake (bSOL). Each serves different yield strategies with varying risk profiles." },
        { question: "Is Solana DeFi safe?", answer: "Solana DeFi has matured significantly but carries risks including network outage potential, younger protocol codebases compared to Ethereum DeFi, and the ecosystem's history of rapid protocol failures. Use audited protocols and diversify positions." },
      ]}
      relatedArticles={[
        { title: "DeFi on Solana", href: "/defi-lending/learn/defi-on-solana", category: "DeFi Lending" },
        { title: "ETH Yield Strategies", href: "/defi-lending/learn/eth-yield-strategies", category: "DeFi Lending" },
        { title: "Leveraged Yield Farming", href: "/defi-lending/learn/leveraged-yield-farming", category: "DeFi Lending" },
      ]}
    >
      <section id="liquid-staking">
        <h2>SOL Liquid Staking</h2>
        <p>SOL liquid staking through protocols like Marinade Finance (mSOL), Jito (jitoSOL), and BlazeStake (bSOL) provides the foundation for SOL yield strategies. These protocols stake your SOL across validators and issue liquid tokens that appreciate in value as staking rewards accrue. SOL staking yields approximately 6-8% APY, meaningfully higher than ETH's 3-4%. Jito's jitoSOL adds MEV (Maximal Extractable Value) rewards from Solana's block space market, potentially boosting yields above standard staking. Liquid staking tokens are widely accepted as collateral in Solana lending protocols, enabling layered yield strategies where you earn staking rewards while also utilizing the capital in DeFi. When choosing a liquid staking provider, consider validator set diversity, the protocol's track record, the token's DeFi integration depth, and fee structure.</p>
      </section>
      <section id="lending">
        <h2>SOL Lending Strategies</h2>
        <p>Lending SOL or SOL LSTs on protocols like Kamino, MarginFi, and Drift generates additional yield from borrowers. When you lend jitoSOL on Kamino, for example, you earn both the base staking yield embedded in jitoSOL and lending interest from borrowers. SOL lending rates typically range from 2-8% depending on borrowing demand, which tends to spike during volatile market periods when traders need SOL for margin positions. The combination of staking yield and lending interest can produce total returns of 8-15% on SOL exposure. Points programs on protocols like MarginFi add speculative upside for users farming potential airdrops. Solana's near-zero transaction costs mean you can actively manage lending positions across protocols to chase the best rates without gas eroding your returns.</p>
      </section>
      <section id="lp-farming">
        <h2>LP Farming on Solana DEXs</h2>
        <p>Providing liquidity on Solana DEXs like Orca, Raydium, and Meteora generates trading fees and token rewards. SOL-paired pools (SOL/USDC, SOL/mSOL) are among the highest-volume pairs on Solana, generating significant fee income. Orca's concentrated liquidity (CLMM) pools allow LPs to focus their capital within specific price ranges for dramatically higher fee capture, though this requires more active management. Kamino automates concentrated liquidity management for users who want the benefits without manual range adjustments. Meteora's dynamic AMM pools offer another approach to SOL LP farming. Raydium provides both standard AMM and concentrated liquidity options. SOL/LST pools like SOL/mSOL have minimal impermanent loss since the assets are highly correlated, making them attractive for lower-risk LP strategies.</p>
      </section>
      <section id="leveraged">
        <h2>Leveraged SOL Strategies</h2>
        <p>Leveraged SOL strategies amplify both yield and price exposure. The most common approach is depositing jitoSOL or mSOL as collateral on Kamino or MarginFi, borrowing SOL, staking it for more LSTs, and repeating. This loop amplifies staking yield proportional to leverage. Kamino's Multiply vaults automate this process with one-click leveraged SOL positions. Drift Protocol enables leveraged long positions on SOL through its perpetual futures markets, combining trading exposure with the platform's lending yield. These strategies carry significant liquidation risk if SOL's price drops rapidly or if the LST de-pegs from SOL. The 2022 FTX collapse caused temporary LST de-pegs on Solana that would have liquidated highly leveraged positions. Size leveraged positions conservatively and maintain buffer above liquidation thresholds.</p>
      </section>
      <section id="risk-assessment">
        <h2>Risk Assessment</h2>
        <p>SOL yield strategies carry ecosystem-specific risks beyond standard DeFi concerns. Solana has experienced network outages that temporarily halt all DeFi activity, which can prevent position management during critical moments. The ecosystem's protocol landscape changes rapidly, with new protocols gaining and losing dominance quickly. SOL's price is more volatile than ETH, amplifying impermanent loss in LP positions and liquidation risk in leveraged strategies. Smart contract risk exists across all Solana DeFi protocols, with codebases generally younger and less audited than Ethereum equivalents. Despite these risks, Solana's low fees and fast transactions enable strategies that are impractical elsewhere, and the ecosystem's higher base staking yield provides a strong foundation for yield optimization.</p>
      </section>
    </LearnPageLayout>
  );
}
