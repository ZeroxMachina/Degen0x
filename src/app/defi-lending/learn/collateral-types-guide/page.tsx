import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Collateral Types in DeFi Lending (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Guide to collateral types in DeFi lending. Understand how different assets perform as collateral, LTV ratios, and choosing the right collateral for your loans.",
};

export default function CollateralTypesGuidePage() {
  return (
    <LearnPageLayout title="Collateral Types in DeFi Lending" categoryName="DeFi Lending" categorySlug="defi-lending" readTime="9 min read"
      intro="The type of collateral you use in DeFi lending directly impacts your loan terms, liquidation risk, and capital efficiency. Different assets offer different LTV ratios, liquidation thresholds, and risk profiles. From major tokens like ETH and BTC to liquid staking derivatives, stablecoins, LP tokens, and real-world assets, the collateral landscape is expanding rapidly. Understanding these options helps you choose the optimal collateral for your specific needs."
      toc={[{ id: "major-assets", title: "Major Crypto Assets as Collateral", level: 2 }, { id: "lst-collateral", title: "Liquid Staking Token Collateral", level: 2 }, { id: "stablecoin-collateral", title: "Stablecoin Collateral", level: 2 }, { id: "exotic-collateral", title: "Exotic and Emerging Collateral", level: 2 }]}
      faqs={[
        { question: "Which collateral type gives the highest LTV?", answer: "Stablecoins offer the highest LTV ratios (up to 90%+) because their value is relatively stable. Among volatile assets, ETH and BTC offer the highest LTVs (75-82.5%) due to their deep liquidity and lower volatility relative to altcoins. Correlated pairs in eMode can reach 90%+." },
        { question: "Can I use LP tokens as collateral?", answer: "Some protocols accept LP tokens as collateral. Aave V3 supports certain LP tokens in specific markets. Specialized protocols are more likely to accept LP tokens. Using LP tokens as collateral adds impermanent loss risk on top of standard liquidation risk." },
        { question: "What makes good DeFi collateral?", answer: "Good collateral has deep liquidity for efficient liquidation, reliable price oracles, low volatility relative to borrowed assets, and broad protocol support. ETH is the gold standard of DeFi collateral due to its ubiquity, liquidity, and oracle reliability." },
      ]}
      relatedArticles={[
        { title: "LTV Ratio Guide", href: "/crypto-loans/learn/ltv-ratio-guide", category: "Crypto Loans" },
        { title: "Liquid Staking in Lending", href: "/defi-lending/learn/liquid-staking-lending", category: "DeFi Lending" },
        { title: "NFT Collateral Lending", href: "/defi-lending/learn/nft-collateral-lending", category: "DeFi Lending" },
      ]}
    >
      <h2 id="major-assets">Major Crypto Assets as Collateral</h2>
      <p>ETH is the most widely accepted DeFi collateral, supported by virtually every lending protocol with the highest LTV ratios among volatile assets (typically 80-82.5% on Aave). Its deep liquidity on both centralized and decentralized exchanges ensures efficient liquidation, and Chainlink provides reliable, widely-used price feeds. WBTC (Wrapped Bitcoin) is the primary way to use Bitcoin as DeFi collateral, with LTV ratios of 70-75%. WBTC adds custodian risk (BitGo holds the underlying BTC). tBTC from Threshold Network offers a more decentralized alternative. Other major tokens like LINK, UNI, and AAVE are supported on major protocols but with lower LTV ratios (50-68%) reflecting their higher volatility and lower liquidity compared to ETH. For each collateral type, understand the liquidation threshold, liquidation penalty, and available liquidity at potential liquidation prices.</p>

      <h2 id="lst-collateral">Liquid Staking Token Collateral</h2>
      <p>Liquid staking tokens (LSTs) like stETH (Lido), rETH (Rocket Pool), cbETH (Coinbase), and sfrxETH (Frax) have become major collateral types. These tokens represent staked ETH plus accumulated staking rewards, making them productive collateral that earns yield even while locked as collateral. Aave V3 supports multiple LSTs with high LTV ratios, especially in efficiency mode (eMode) for the ETH-correlated category where stETH/ETH positions can achieve 90%+ LTV. The risk with LST collateral includes potential depeg from ETH (as seen temporarily with stETH during the 2022 market crisis), smart contract risk of the staking protocol, and slashing risk for the underlying validators. Despite these risks, LSTs are among the most capital-efficient collateral types because they earn staking yield while simultaneously serving as loan collateral.</p>

      <h2 id="stablecoin-collateral">Stablecoin Collateral</h2>
      <p>Stablecoins as collateral enable the highest LTV ratios because their value is designed to remain constant. Depositing USDC as collateral to borrow DAI (or vice versa) achieves 90%+ LTV with minimal liquidation risk because both sides of the position are dollar-denominated. This is useful for stablecoin arbitrage, interest rate optimization, and accessing specific stablecoins not available on your preferred exchange. The primary risk with stablecoin collateral is depeg events. USDC depegged briefly during the SVB crisis, and algorithmic stablecoins have shown catastrophic depeg potential (UST). Even brief depegs can trigger liquidation for high-LTV stablecoin positions. Diversifying collateral across multiple stablecoins or using stablecoins with different backing mechanisms reduces depeg concentration risk.</p>

      <h2 id="exotic-collateral">Exotic and Emerging Collateral</h2>
      <p>The collateral landscape is expanding beyond traditional crypto tokens. Real-world asset (RWA) tokens representing US Treasuries, real estate, and other traditional assets are being accepted as collateral on certain protocols. MakerDAO has been a pioneer in accepting RWA collateral for DAI generation. NFTs as collateral are supported by specialized protocols like BendDAO and NFTfi, allowing blue-chip NFT holders to borrow against their collections. Yield-bearing tokens from DeFi protocols (yvTokens from Yearn, aTokens from Aave) can serve as collateral on some platforms, enabling recursive yield strategies. Restaking tokens from EigenLayer are an emerging collateral type. As the DeFi ecosystem matures, the range of acceptable collateral will continue to expand, with each new type introducing its own unique risk considerations around pricing, liquidity, and smart contract security.</p>
    </LearnPageLayout>
  );
}
