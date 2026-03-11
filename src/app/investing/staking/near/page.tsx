import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Stake NEAR Protocol (NEAR): Complete Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn how to stake NEAR Protocol (NEAR) and earn rewards. Covers validator delegation, liquid staking with Meta Pool, APY rates, and step-by-step instructions.",
  keywords: ["stake NEAR", "NEAR staking", "NEAR staking rewards", "NEAR validators", "how to stake NEAR"],
};

export default function StakeNearPage() {
  return (
    <LearnPageLayout
      title="How to Stake NEAR Protocol (NEAR): Complete Guide"
      categoryName="Staking"
      categorySlug="investing/staking"
      readTime="9 min"
      intro="NEAR Protocol staking offers token holders approximately 8-11% APY by delegating to validators who secure the sharded Nightshade network. With a user-friendly wallet experience and liquid staking options through Meta Pool, NEAR staking is accessible to both beginners and experienced crypto participants."
      toc={[
        { id: "overview", title: "NEAR Staking Overview", level: 2 },
        { id: "rewards", title: "Staking Rewards & APY", level: 2 },
        { id: "how-to-stake", title: "How to Stake NEAR Step-by-Step", level: 2 },
        { id: "risks", title: "Risks of Staking NEAR", level: 2 },
        { id: "validators", title: "Validators & Staking Pools", level: 2 },
        { id: "tax-implications", title: "Tax Implications", level: 2 },
      ]}
      faqs={[
        { question: "What APY can I earn staking NEAR?", answer: "NEAR staking typically yields 8-11% APY depending on the validator chosen and their commission rate. The reward rate adjusts based on the total NEAR staked network-wide and the network's 5% annual inflation rate." },
        { question: "Is there a minimum amount of NEAR to stake?", answer: "There is no protocol-enforced minimum for delegating NEAR. You need enough to cover transaction fees, which are minimal. Some validators may set their own minimum delegation preferences." },
        { question: "How long is the NEAR unstaking period?", answer: "NEAR has an unstaking period of 52-65 hours (2-3 epochs). During this cooldown, your tokens do not earn rewards. Liquid staking tokens like stNEAR from Meta Pool can be traded instantly on DEXs." },
        { question: "Does NEAR have slashing?", answer: "NEAR does not currently implement slashing for delegators. Validators can be kicked from the active set for poor performance, but delegators do not lose their staked tokens. This makes NEAR delegation relatively low-risk." },
      ]}
      relatedArticles={[
        { title: "What Is Crypto Staking?", href: "/investing/staking/learn/what-is-staking", category: "Staking" },
        { title: "Best Staking Platforms", href: "/investing/staking/best", category: "Staking" },
        { title: "Staking Risks", href: "/investing/staking/learn/staking-risks", category: "Staking" },
      ]}
    >
      <section id="overview">
        <h2>NEAR Staking Overview</h2>
        <p>
          NEAR Protocol is a layer-1 blockchain designed for usability and scalability, featuring a sharded architecture called Nightshade that enables high throughput and low transaction costs. NEAR uses a proof-of-stake consensus mechanism where validators stake NEAR tokens to participate in block production and transaction validation. Token holders can delegate their NEAR to validators through a simple process within the NEAR wallet ecosystem. The network supports over 100 active validators and distributes rewards every epoch, approximately every 12 hours. NEAR&apos;s human-readable account names and intuitive wallet experience make it one of the most accessible blockchains for staking, particularly for users new to cryptocurrency. The network&apos;s focus on developer experience has fostered a growing ecosystem of dApps, making staked NEAR a stake in a thriving smart contract platform.
        </p>
      </section>

      <section id="rewards">
        <h2>Staking Rewards &amp; APY</h2>
        <p>
          NEAR staking rewards are generated through the network&apos;s fixed inflation rate of approximately 5% annually. Of this inflation, 90% goes to validators and their delegators as staking rewards, while 10% goes to the NEAR Protocol treasury. The current APY for NEAR staking ranges from 8-11% depending on the validator chosen and their commission rate. Validators set their own commission fees, typically between 1-10% of rewards generated. The effective yield depends on the total percentage of NEAR staked across the network. With a lower staking ratio, individual stakers earn higher APY because the reward pool is split among fewer participants. NEAR also burns 70% of transaction fees, creating deflationary pressure that partially offsets the inflation used for staking rewards. High-performing validators with excellent uptime and low commissions deliver the best returns to delegators.
        </p>
      </section>

      <section id="how-to-stake">
        <h2>How to Stake NEAR Step-by-Step</h2>
        <p>
          To stake NEAR, create a wallet using MyNearWallet, Meteor Wallet, or the NEAR mobile app. Transfer NEAR from an exchange to your wallet address. Navigate to the staking section in your wallet interface, where you will see a list of available validators with their performance statistics and commission rates. Select a validator with high uptime, reasonable commission, and good community reputation. Enter the amount of NEAR you wish to delegate, leaving a small balance for transaction fees, and confirm the delegation. Your stake becomes active at the start of the next epoch, approximately 12 hours. For liquid staking, visit Meta Pool to deposit NEAR and receive stNEAR, which earns staking rewards while remaining liquid for use in NEAR DeFi protocols. You can also stake through major exchanges like Binance or Coinbase for a simpler experience. To unstake, initiate a withdrawal from your wallet, wait 2-3 epochs for the cooldown period, and then withdraw your tokens.
        </p>
      </section>

      <section id="risks">
        <h2>Risks of Staking NEAR</h2>
        <p>
          NEAR staking carries several risks that delegators should consider. Validator performance risk means that if your chosen validator has poor uptime or gets kicked from the active set, you miss out on rewards for those epochs. Fortunately, NEAR does not implement slashing for delegators, so your principal is not at risk from validator misbehavior. Smart contract risk applies when using liquid staking protocols like Meta Pool, where bugs could potentially affect deposited funds. The 52-65 hour unstaking period creates a brief liquidity gap during which you cannot access or trade your tokens. Market risk is always present as NEAR&apos;s price can fluctuate significantly, potentially outweighing staking returns. The ecosystem is still growing and faces competition from other layer-1 platforms, which could impact long-term demand for NEAR tokens. Diversifying across multiple validators and maintaining some liquid NEAR for flexibility helps manage these various risks.
        </p>
      </section>

      <section id="validators">
        <h2>Validators &amp; Staking Pools</h2>
        <p>
          NEAR Protocol maintains an active validator set of approximately 100 nodes, with a seat price that determines the minimum stake required for validator participation. When evaluating validators for delegation, consider their uptime percentage, commission rate, total stake, number of delegators, and community involvement. The NEAR Explorer provides detailed analytics for each validator, including reward history and performance metrics. The NEAR Foundation supports network decentralization through various validator support programs. Meta Pool operates as a liquid staking pool that distributes stake across multiple validators, offering diversification benefits alongside liquidity. Some validators actively contribute to the NEAR ecosystem through development, education, or governance, which may be worth supporting even if their commission rates are marginally higher. Regularly reviewing your delegation choices and switching validators when performance declines ensures optimal staking returns over time.
        </p>
      </section>

      <section id="tax-implications">
        <h2>Tax Implications</h2>
        <p>
          NEAR staking rewards are generally treated as taxable income in most jurisdictions at the fair market value when received. Since NEAR distributes rewards every epoch (approximately 12 hours), this creates frequent taxable events that require careful tracking. In the United States, the IRS considers staking rewards as ordinary income. Each reward distribution should be recorded with the date, amount, and fair market value in your local currency. When you later sell or trade NEAR received as staking rewards, capital gains or losses are calculated based on the difference between your cost basis and the sale price. Liquid staking token exchanges may also trigger taxable events in some jurisdictions. Using cryptocurrency tax software that supports the NEAR blockchain helps automate reward tracking and tax calculations. Consulting with a tax professional experienced in cryptocurrency is recommended for accurate compliance with your local regulations.
        </p>
      </section>
    </LearnPageLayout>
  );
}
