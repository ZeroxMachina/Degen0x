import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `BTC Yield Strategies (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete guide to earning yield on Bitcoin in DeFi. Covers wrapped BTC lending, LP strategies, Bitcoin L2 DeFi, and risk assessment for BTC yield opportunities.",
  keywords: ["BTC yield", "Bitcoin DeFi", "wBTC yield", "Bitcoin yield strategies"],
};

export default function BtcYieldStrategiesPage() {
  return (
    <LearnPageLayout
      title="BTC Yield Strategies"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="12 min"
      intro="Bitcoin holders have historically had fewer yield options than ETH holders, but the landscape has expanded dramatically with wrapped BTC on Ethereum, native BTC DeFi on emerging Bitcoin L2s, and cross-chain strategies. This guide explores all major approaches to earning yield on your Bitcoin holdings, from conservative lending to cutting-edge Bitcoin-native DeFi."
      toc={[
        { id: "wrapped-btc", title: "wrapped-btc", level: 2 },
        { id: "wrapped-btc-strategies", title: "Wrapped BTC Strategies", level: 2 },
        { id: "lending-btc", title: "lending-btc", level: 2 },
        { id: "btc-lending-on-defi", title: "BTC Lending on DeFi", level: 2 },
        { id: "lp-strategies", title: "lp-strategies", level: 2 },
        { id: "btc-liquidity-provision", title: "BTC Liquidity Provision", level: 2 },
        { id: "bitcoin-l2", title: "bitcoin-l2", level: 2 },
        { id: "bitcoin-l2-defi", title: "Bitcoin L2 DeFi", level: 2 },
        { id: "risk-considerations", title: "risk-considerations", level: 2 },
        { id: "risk-considerations", title: "Risk Considerations", level: 2 }
      ]}
      faqs={[
        { question: "What is the best way to earn yield on Bitcoin?", answer: "The safest approach is lending wBTC on established protocols like Aave V3, earning 0.5-3% APY. For higher yields, consider BTC LP positions on Curve or Uniswap, or explore emerging Bitcoin L2 DeFi opportunities which carry more risk." },
        { question: "Is wrapped BTC safe?", answer: "wBTC is backed 1:1 by Bitcoin held by BitGo custodian. It has a long track record but requires trust in the custodian. Alternatives like tBTC offer more decentralized wrapping mechanisms with different trade-offs." },
        { question: "Can I earn yield on native Bitcoin?", answer: "Emerging Bitcoin L2s like Stacks and others are building DeFi capabilities on top of Bitcoin. These are earlier stage and carry more risk than Ethereum-based BTC strategies, but they allow yield generation without wrapping to another chain." },
      ]}
      relatedArticles={[
        { title: "ETH Yield Strategies", href: "/defi-lending/learn/eth-yield-strategies", category: "DeFi Lending" },
        { title: "Stablecoin Yield Strategies", href: "/defi-lending/learn/stablecoin-yield-strategies", category: "DeFi Lending" },
        { title: "Multi-Chain Yield Farming", href: "/defi-lending/learn/multi-chain-yield-farming", category: "DeFi Lending" },
      ]}
    >
      <section id="wrapped-btc">
        <h2>Wrapped BTC Strategies</h2>
        <p>Wrapped Bitcoin (wBTC) is the most widely used form of Bitcoin in Ethereum DeFi, with billions in circulation across lending protocols, DEXs, and yield strategies. wBTC is custodied by BitGo and maintains a 1:1 peg with native Bitcoin through a proof of reserves system. Alternative wrapped BTC options include tBTC (decentralized wrapping via Threshold Network), cbBTC (Coinbase), and various other bridged BTC tokens on different chains. Using wrapped BTC in Ethereum DeFi gives Bitcoin holders access to the full range of DeFi protocols and yield strategies. The main considerations when choosing a wrapped BTC variant are the trust model (centralized custodian vs decentralized bridge), liquidity depth across DeFi protocols, and the fee structure for wrapping and unwrapping. Most Ethereum DeFi strategies that accept ETH or stablecoins also accept wBTC as collateral or deposit.</p>
      </section>
      <section id="lending-btc">
        <h2>BTC Lending on DeFi</h2>
        <p>Lending wBTC on protocols like Aave V3, Compound, and Spark generates variable interest from borrowers who want to use BTC as trading collateral or access BTC for shorting strategies. BTC lending yields are typically lower than stablecoin yields, ranging from 0.5-3% APY, because borrowing demand for BTC is lower than for stablecoins. However, during volatile market periods, borrowing demand can spike significantly. On L2 protocols, wBTC lending may offer slightly higher rates due to less competition among suppliers. Some protocols offer incentive rewards on top of base lending rates, particularly newer platforms seeking to bootstrap BTC liquidity. Lending wBTC is among the lowest-risk BTC yield strategies in DeFi, adding only smart contract risk on top of the wrapped BTC trust assumptions.</p>
      </section>
      <section id="lp-strategies">
        <h2>BTC Liquidity Provision</h2>
        <p>Providing liquidity in BTC-paired pools generates trading fees and potentially token incentives. Popular LP pairs include wBTC/ETH on Uniswap and wBTC/USDC for stablecoin exposure. Curve offers specialized pools for different BTC variants (wBTC/renBTC/sBTC) with optimized bonding curves for correlated assets. LP positions with BTC carry impermanent loss risk: if BTC's price moves significantly relative to the paired asset, the LP position's value may trail simply holding the assets. For BTC/ETH pairs, impermanent loss is moderate since both assets are correlated as major crypto assets. For BTC/stablecoin pairs, impermanent loss follows BTC's full price volatility. Concentrated liquidity positions on Uniswap V3 can increase fee capture but require active management of price ranges as BTC's price moves.</p>
      </section>
      <section id="bitcoin-l2">
        <h2>Bitcoin L2 DeFi</h2>
        <p>A new frontier for BTC yield is emerging through Bitcoin Layer 2 networks and sidechains. Stacks offers DeFi protocols built on top of Bitcoin using a unique consensus mechanism. Other projects are building rollups, sidechains, and bridge solutions that bring DeFi capabilities to native Bitcoin. These Bitcoin-native DeFi opportunities avoid the trust assumptions of wrapped BTC by keeping Bitcoin on or near the Bitcoin network. However, they are generally early-stage, with less liquidity, fewer audited protocols, and more technical risk than Ethereum-based DeFi. Yields may be higher due to ecosystem incentives and less competition, but the risk profile is correspondingly elevated. This sector is evolving rapidly and worth monitoring for Bitcoin holders who want to avoid Ethereum-based wrapping entirely.</p>
      </section>
      <section id="risk-considerations">
        <h2>Risk Considerations</h2>
        <p>BTC yield strategies layer multiple risks. The wrapping mechanism (wBTC custodial trust, tBTC bridge security) adds a base risk layer that does not exist for native ETH strategies. Smart contract risk from the DeFi protocol itself applies to all strategies. LP strategies add impermanent loss risk proportional to BTC's price volatility. Leveraged strategies amplify all risks and add liquidation potential. Bitcoin L2 DeFi carries additional infrastructure risk from newer, less tested networks and bridge mechanisms. When evaluating BTC yield opportunities, consider whether the additional yield justifies the additional risk layers compared to simply holding Bitcoin. For conservative Bitcoin holders, lending wBTC on Aave V3 provides modest yield with manageable risk, while more aggressive strategies should be sized appropriately for their higher risk profiles.</p>
      </section>
    </LearnPageLayout>
  );
}
