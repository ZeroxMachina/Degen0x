import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Stake Cosmos (ATOM): Complete Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn how to stake Cosmos (ATOM) and earn rewards. Covers delegation to validators, staking APY, the 21-day unbonding period, and airdrops for ATOM stakers.",
  keywords: ["stake cosmos", "ATOM staking", "cosmos staking rewards", "cosmos validators", "how to stake ATOM"],
};

export default function StakeCosmosPage() {
  return (
    <LearnPageLayout
      title="How to Stake Cosmos (ATOM): Complete Guide"
      categoryName="Staking"
      categorySlug="investing/staking"
      readTime="9 min"
      intro="Cosmos staking lets ATOM holders earn approximately 14-20% APY while participating in governance of the Internet of Blockchains. Beyond regular staking rewards, ATOM stakers frequently receive airdrops from new Cosmos ecosystem projects, making it one of the most rewarding staking opportunities in crypto."
      toc={[
        { id: "overview", title: "overview", level: 2 },
        { id: "cosmos-staking-overview", title: "Cosmos Staking Overview", level: 2 },
        { id: "rewards", title: "rewards", level: 2 },
        { id: "staking-rewards-apy", title: "Staking Rewards & APY", level: 2 },
        { id: "how-to-stake", title: "how-to-stake", level: 2 },
        { id: "how-to-stake-atom-step-by-step", title: "How to Stake ATOM Step-by-Step", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-of-staking-cosmos", title: "Risks of Staking Cosmos", level: 2 },
        { id: "validators", title: "validators", level: 2 },
        { id: "validators-delegation", title: "Validators & Delegation", level: 2 },
        { id: "tax-implications", title: "tax-implications", level: 2 },
        { id: "tax-implications", title: "Tax Implications", level: 2 }
      ]}
      faqs={[
        {
          question: "How long is the Cosmos unbonding period?",
          answer: "The Cosmos Hub has a 21-day unbonding period. During this time your ATOM does not earn rewards and cannot be transferred. This period exists to ensure network security by preventing quick exit in case of attacks.",
        },
        {
          question: "Do I get airdrops for staking ATOM?",
          answer: "Yes, staking ATOM with non-exchange validators has historically qualified holders for numerous airdrops from Cosmos ecosystem projects. Notable airdrops include Osmosis, Juno, Stargaze, and many others. Staking through a personal wallet rather than an exchange is essential for airdrop eligibility.",
        },
        {
          question: "What is the minimum ATOM to stake?",
          answer: "There is no protocol-enforced minimum for delegating ATOM. You can stake any amount, though you need enough to cover the small transaction fee. Some validators may have preferences, but the network itself allows delegation of any positive amount.",
        },
        {
          question: "Can I stake ATOM and still participate in governance?",
          answer: "Yes, staked ATOM gives you governance voting rights on the Cosmos Hub. You can vote on proposals directly, or if you do not vote, your validator will vote on your behalf. Active governance participation is also a common requirement for airdrop eligibility.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Crypto Staking?", href: "/investing/staking/learn/what-is-staking", category: "Staking" },
        { title: "Stride Staking Guide", href: "/investing/staking/stride", category: "Staking" },
        { title: "Best Staking Platforms", href: "/investing/staking/best", category: "Staking" },
      ]}
    >
      <section id="overview">
        <h2>Cosmos Staking Overview</h2>
        <p>
          Cosmos, often called the Internet of Blockchains, uses a Tendermint-based proof-of-stake consensus mechanism that allows ATOM holders to delegate their tokens to validators who secure the Cosmos Hub. The Cosmos ecosystem is built around the Inter-Blockchain Communication (IBC) protocol, which enables seamless communication between independent blockchains. Staking ATOM not only earns you rewards but also gives you a voice in the governance of the Cosmos Hub through on-chain voting. The network maintains an active set of 180 validators, and the delegation model is straightforward: you choose a validator, delegate your ATOM, and start earning rewards after the first block. One of the most compelling aspects of Cosmos staking is the airdrop ecosystem, where new projects launching in the Cosmos ecosystem frequently distribute tokens to active ATOM stakers who use non-custodial wallets and participate in governance.
        </p>
      </section>

      <section id="rewards">
        <h2>Staking Rewards &amp; APY</h2>
        <p>
          Cosmos staking rewards are generated through the network&apos;s dynamic inflation mechanism, which adjusts between 7% and 20% annually based on the staking ratio. When fewer than two-thirds of ATOM is staked, inflation increases to incentivize staking. When more is staked, inflation decreases. The effective APY for ATOM stakers typically ranges from 14-20% before validator commissions. Validators charge commission rates typically between 5-10%, which is deducted from your gross rewards. Beyond standard staking rewards, ATOM stakers have access to one of the richest airdrop ecosystems in cryptocurrency. Projects like Osmosis, Juno, Stargaze, Stride, and dozens of others have distributed free tokens to qualifying ATOM stakers, sometimes worth thousands of dollars. These airdrops often require staking with non-exchange validators, participating in governance, and maintaining a minimum staking amount. When factoring in airdrop value, the total return on staked ATOM can significantly exceed the base staking APY.
        </p>
      </section>

      <section id="how-to-stake">
        <h2>How to Stake ATOM Step-by-Step</h2>
        <p>
          To stake ATOM, start by setting up a Cosmos-compatible wallet such as Keplr (browser extension and mobile), Cosmostation, or Leap Wallet. Purchase ATOM from an exchange and transfer it to your wallet. Open the staking interface in your wallet or visit the Keplr dashboard, browse the list of active validators, and select one or more validators to delegate to. Enter the amount of ATOM you wish to stake, leaving a small amount unstaked for transaction fees. Confirm the delegation transaction and your stake becomes active immediately, with rewards accruing every block. To maximize airdrop eligibility, stake with validators that are not in the top 10 by voting power, actively vote on governance proposals, and maintain your staked position consistently. You can redelegate between validators instantly without waiting for the unbonding period, though each redelegation has a 21-day completion window during which you cannot redelegate the same tokens again. Liquid staking options through Stride protocol allow you to receive stATOM while your tokens remain staked, providing liquidity without sacrificing rewards.
        </p>
      </section>

      <section id="risks">
        <h2>Risks of Staking Cosmos</h2>
        <p>
          Cosmos staking involves several risks that delegators should understand. Slashing is a real possibility on the Cosmos Hub, where validators and their delegators can be penalized for double-signing (5% slash) or extended downtime (0.01% slash). While double-signing slashes are severe but rare, downtime slashes are minor but more common. The 21-day unbonding period is among the longest in the industry, creating significant liquidity risk during volatile market conditions. During this period, you earn no rewards and cannot sell your ATOM. Validator risk is present since your chosen validator may experience technical issues, change their commission rate, or act maliciously. Commission rate changes take effect after a delay, but monitoring your validators regularly is important. Inflation risk means that unstaked ATOM loses relative value as new ATOM is continuously minted for staking rewards. Market risk applies as ATOM price can fluctuate substantially. Diversifying across multiple validators and using liquid staking for a portion of your holdings helps mitigate these various risks.
        </p>
      </section>

      <section id="validators">
        <h2>Validators &amp; Delegation</h2>
        <p>
          The Cosmos Hub maintains an active validator set of 180 validators, with the top validators by total stake processing the most blocks. When choosing a validator, consider their commission rate, uptime history, community involvement, governance participation, and self-delegation amount. Validators with higher self-delegation have more skin in the game and greater incentive to perform well. For airdrop eligibility, many projects specifically exclude delegators of the top validators by voting power and exchange-operated validators. Delegating to mid-range or smaller validators not only improves your airdrop chances but also strengthens network decentralization. The Interchain Foundation provides resources for evaluating validators, and community-maintained lists track validator performance and reputation. Some validators offer additional benefits like educational content, community engagement, or restaking services through protocols in the Cosmos ecosystem. Regularly reviewing your validator choices and redelegating when necessary ensures optimal returns and network participation.
        </p>
      </section>

      <section id="tax-implications">
        <h2>Tax Implications</h2>
        <p>
          Cosmos staking rewards are generally considered taxable income at the time they are received. In the United States and many other jurisdictions, each staking reward distribution triggers an income tax event based on the fair market value of the ATOM received. Since Cosmos distributes rewards with every block, the practical approach is to claim rewards periodically and record the value at claim time. Airdrops received as a result of staking ATOM are also taxable events, typically treated as ordinary income at the fair market value on the date the airdrop tokens become accessible in your wallet. When you later sell staking rewards or airdrop tokens, capital gains or losses are calculated based on the difference between your cost basis (fair market value at receipt) and the sale price. The complexity of tracking rewards, airdrops, and IBC transfers across the Cosmos ecosystem makes crypto tax software essential. Tools that support Cosmos Hub and IBC chains can automatically import transaction data and calculate tax obligations. Professional tax advice is recommended given the evolving regulatory landscape.
        </p>
      </section>
    </LearnPageLayout>
  );
}
