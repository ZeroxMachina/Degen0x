import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Staking on Exchanges: A Guide (${CURRENT_YEAR}) | degen0x`,
  description: "Learn how staking works on crypto exchanges. APY rates, lock periods, risks, liquid staking, and the best exchanges for staking rewards.",
};

export default function ExchangeStakingGuide() {
  return (
    <LearnPageLayout
      title="Staking on Exchanges: A Guide"
      categoryName="Exchanges"
      categorySlug="exchanges"
      readTime="9 min read"
      intro="Staking on exchanges lets you earn passive income on your crypto holdings without the technical complexity of running your own validator node. Major exchanges handle the infrastructure while you collect rewards. This guide covers how exchange staking works, expected returns, risks, and the best platforms for earning staking rewards."
      toc={[
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-exchange-staking-works", title: "How Exchange Staking Works", level: 2 },
        { id: "apy-rates", title: "apy-rates", level: 2 },
        { id: "apy-rates-and-rewards", title: "APY Rates and Rewards", level: 2 },
        { id: "lock-periods", title: "lock-periods", level: 2 },
        { id: "lock-periods-and-flexibility", title: "Lock Periods and Flexibility", level: 2 },
        { id: "liquid-staking", title: "liquid-staking", level: 2 },
        { id: "liquid-staking-on-exchanges", title: "Liquid Staking on Exchanges", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "staking-risks", title: "Staking Risks", level: 2 },
        { id: "platforms", title: "platforms", level: 2 },
        { id: "best-exchanges-for-staking", title: "Best Exchanges for Staking", level: 2 },
        { id: "getting-started", title: "getting-started", level: 2 },
        { id: "getting-started", title: "Getting Started", level: 2 }
      ]}
      faqs={[
        { question: "Is staking on exchanges safe?", answer: "Exchange staking carries custodial risk since the exchange holds your assets. Use reputable, regulated exchanges and avoid staking more than you can afford to lose. The underlying staking mechanism is generally safe, but exchange failures (like FTX) can result in loss of staked assets." },
        { question: "What APY can I expect?", answer: "Rates vary by asset and exchange. ETH staking typically yields 3-5% APY. Other assets range from 1% to 20%+ depending on the token and lock period. Higher APY usually means higher risk or longer lock periods." },
        { question: "Can I unstake at any time?", answer: "It depends on the product. Flexible staking allows unstaking anytime. Locked staking has fixed periods (30, 60, 90, or 120 days). ETH staking may have withdrawal queues. Check unstaking terms before committing." },
        { question: "Do I pay fees on staking rewards?", answer: "Exchanges typically take a commission from staking rewards, usually 10-25% of earned rewards. The displayed APY is usually the rate after the exchange's commission. Compare net rates across platforms." },
      ]}
      relatedArticles={[
        { title: "Exchange Earn Products", href: "/exchanges/learn/exchange-earn-products", category: "Exchanges" },
        { title: "DCA Tools on Exchanges", href: "/exchanges/learn/dollar-cost-averaging-exchanges", category: "Exchanges" },
        { title: "How to Choose a Crypto Exchange", href: "/exchanges/learn/how-to-choose-exchange", category: "Exchanges" },
      ]}
    >
      <section id="how-it-works">
        <h2>How Exchange Staking Works</h2>
        <p>Proof-of-stake blockchains like Ethereum, Solana, Cardano, and Polkadot require validators to lock up (stake) tokens to secure the network. In return, validators earn rewards paid in the native token. Running a validator requires technical expertise and significant minimum stakes.</p>
        <p>Exchanges simplify this by pooling user deposits and running validator infrastructure on behalf of customers. You deposit your tokens into the staking program and the exchange delegates them to validators. Rewards are distributed proportionally to stakers minus the exchange's commission.</p>
        <p>The key advantage is accessibility. Ethereum requires 32 ETH (worth tens of thousands of dollars) to run a solo validator. Through exchange staking, you can stake any amount. The exchange handles the technical operations, uptime requirements, and slashing risk management.</p>
      </section>

      <section id="apy-rates">
        <h2>APY Rates and Rewards</h2>
        <p>Staking APY varies by asset, network conditions, and exchange. Ethereum staking typically offers 3-5% APY. Solana ranges from 5-8%. Cosmos ecosystem tokens often provide 10-20%. These rates fluctuate based on total network staking participation and block rewards.</p>
        <p>Exchanges display APY after their commission, which typically ranges from 10-25% of raw rewards. Coinbase takes 25% of ETH staking rewards, while Kraken and Binance take smaller cuts. Always compare net APY across platforms for the same asset.</p>
        <p>Rewards are usually paid daily or weekly and can be auto-compounded on some platforms. Compounding significantly improves long-term returns. A 5% APY compounded daily yields approximately 5.13% effective annual return compared to simple interest.</p>
      </section>

      <section id="lock-periods">
        <h2>Lock Periods and Flexibility</h2>
        <p>Flexible staking allows you to stake and unstake at any time with no lock period. The tradeoff is typically lower APY compared to locked products. Flexible staking suits traders who want to earn yield while maintaining the ability to sell quickly.</p>
        <p>Locked staking offers higher APY in exchange for committing funds for fixed periods: 30, 60, 90, or 120 days are common options. During the lock period, you cannot access, trade, or withdraw the staked assets. Higher lock periods generally offer better rates.</p>
        <p>Some assets have protocol-level unstaking periods. Ethereum withdrawals can take days depending on the exit queue. Cosmos ecosystem tokens typically have 21-day unbonding periods. These protocol delays apply regardless of whether the exchange offers "flexible" staking.</p>
      </section>

      <section id="liquid-staking">
        <h2>Liquid Staking on Exchanges</h2>
        <p>Liquid staking solves the illiquidity problem by issuing a receipt token representing your staked position. When you stake ETH on Coinbase, you receive cbETH. Binance issues BETH. These tokens can be traded, used as collateral, or transferred while your underlying stake continues earning rewards.</p>
        <p>Liquid staking tokens typically trade at a slight discount to the underlying asset due to liquidity and risk premiums. The discount fluctuates based on market conditions and demand. Over time, as staking rewards accumulate, the token's value relative to the base asset increases.</p>
        <p>The advantage is capital efficiency. You earn staking rewards while retaining the ability to sell your position immediately via the liquid staking token. The disadvantage is additional smart contract risk and the possibility of the token trading at a deeper discount during market stress.</p>
      </section>

      <section id="risks">
        <h2>Staking Risks</h2>
        <p>Custodial risk is the biggest concern. When you stake on an exchange, the exchange controls your private keys. If the exchange is hacked, goes bankrupt, or freezes withdrawals, your staked assets are at risk. The FTX collapse demonstrated this risk clearly.</p>
        <p>Slashing risk occurs when a validator behaves maliciously or has extended downtime. The protocol can penalize the validator by destroying a portion of staked tokens. Reputable exchanges use professional infrastructure to minimize slashing risk, but it is not zero.</p>
        <p>Opportunity cost is a real consideration. During locked staking periods, you cannot sell if the market drops significantly or if better opportunities arise. The staking APY must compensate for this lost flexibility. In volatile markets, the inability to sell can result in losses that dwarf staking rewards.</p>
      </section>

      <section id="platforms">
        <h2>Best Exchanges for Staking</h2>
        <p>Kraken offers competitive staking rates with a good selection of assets and both flexible and locked options. The platform is known for reliable reward distribution and transparent commission structures. Kraken supports staking for ETH, SOL, DOT, ATOM, and many other assets.</p>
        <p>Binance Earn provides one of the broadest staking selections with both locked and flexible products. Coinbase offers simple ETH staking with cbETH liquid staking. OKX and Bybit also provide competitive staking programs with various assets and lock periods.</p>
        <p>For maximum safety, prefer regulated exchanges with strong track records for staking. The slightly lower APY at regulated platforms is often worth the reduced custodial risk compared to higher-yield offerings at less established exchanges.</p>
      </section>

      <section id="getting-started">
        <h2>Getting Started</h2>
        <p>Start by deciding which assets you want to stake based on your existing holdings and conviction levels. Staking should complement your investment strategy, not drive it. Only stake assets you plan to hold long-term regardless of staking rewards.</p>
        <p>Compare APY rates, lock periods, and exchange commissions across platforms. Small differences in APY compound significantly over time. Also consider the exchange's security track record and regulatory status when choosing where to stake.</p>
        <p>Begin with flexible staking to test the process before committing to locked periods. Verify that rewards are distributed as advertised. Once comfortable, you can explore locked staking for higher yields on positions you intend to hold for extended periods.</p>
      </section>
    </LearnPageLayout>
  );
}
