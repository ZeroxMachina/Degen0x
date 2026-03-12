import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Stake Avalanche (AVAX): Complete Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn how to stake Avalanche (AVAX) and earn rewards. Covers validator delegation, liquid staking with sAVAX, current APY rates, and step-by-step staking instructions.",
  keywords: ["stake avalanche", "AVAX staking", "avalanche staking rewards", "avalanche validators", "how to stake AVAX"],
};

export default function StakeAvalanchePage() {
  return (
    <LearnPageLayout
      title="How to Stake Avalanche (AVAX): Complete Guide"
      categoryName="Staking"
      categorySlug="investing/staking"
      readTime="9 min"
      intro="Avalanche staking offers AVAX holders approximately 8-10% APY through its unique consensus mechanism that combines high throughput with strong decentralization. With a minimum delegation of 25 AVAX and a 14-day lock-up period, Avalanche provides a balanced staking experience with competitive yields and reasonable flexibility."
      toc={[
        { id: "overview", title: "overview", level: 2 },
        { id: "avalanche-staking-overview", title: "Avalanche Staking Overview", level: 2 },
        { id: "rewards", title: "rewards", level: 2 },
        { id: "staking-rewards-apy", title: "Staking Rewards & APY", level: 2 },
        { id: "how-to-stake", title: "how-to-stake", level: 2 },
        { id: "how-to-stake-avax-step-by-step", title: "How to Stake AVAX Step-by-Step", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-of-staking-avalanche", title: "Risks of Staking Avalanche", level: 2 },
        { id: "validators", title: "validators", level: 2 },
        { id: "validators-delegation", title: "Validators & Delegation", level: 2 },
        { id: "tax-implications", title: "tax-implications", level: 2 },
        { id: "tax-implications", title: "Tax Implications", level: 2 }
      ]}
      faqs={[
        { question: "What is the minimum AVAX needed to stake?", answer: "You need a minimum of 25 AVAX to delegate to a validator on Avalanche. Running your own validator requires a minimum of 2,000 AVAX. Liquid staking protocols like Benqi offer sAVAX with lower minimums." },
        { question: "How long is the Avalanche staking lock-up?", answer: "The minimum staking period on Avalanche is 14 days. When you delegate, you choose a delegation period between 14 days and 1 year. Your AVAX is locked for the entire chosen duration and cannot be withdrawn early." },
        { question: "What APY does Avalanche staking offer?", answer: "Avalanche staking typically yields 8-10% APY depending on the validator chosen and the staking duration. Longer staking periods may qualify for slightly higher rewards. Liquid staking through Benqi offers similar rates minus a small protocol fee." },
        { question: "Is there slashing on Avalanche?", answer: "Avalanche does not implement traditional slashing penalties. Instead, validators who are unresponsive or malicious simply do not receive rewards. This makes delegation safer for stakers compared to networks with active slashing mechanisms." },
      ]}
      relatedArticles={[
        { title: "What Is Crypto Staking?", href: "/investing/staking/learn/what-is-staking", category: "Staking" },
        { title: "Best Staking Platforms", href: "/investing/staking/best", category: "Staking" },
        { title: "Staking Risks", href: "/investing/staking/learn/staking-risks", category: "Staking" },
      ]}
    >
      <section id="overview">
        <h2>Avalanche Staking Overview</h2>
        <p>
          Avalanche uses a novel consensus protocol that achieves high throughput and fast finality while maintaining a large, permissionless validator set. The network consists of three built-in blockchains: the X-Chain for asset transfers, the C-Chain for smart contracts, and the P-Chain where staking and validation occur. AVAX holders can participate in network security by either running a validator node or delegating their tokens to an existing validator on the P-Chain. The Avalanche consensus mechanism relies on repeated random sampling of validators, allowing the network to achieve consensus quickly without requiring all validators to communicate with each other. This design supports thousands of validators and makes the network highly resistant to attacks. With subnets allowing custom blockchain deployments that can leverage the same validator set, staking AVAX positions participants at the center of a growing multi-chain ecosystem that includes gaming, DeFi, and enterprise applications.
        </p>
      </section>

      <section id="rewards">
        <h2>Staking Rewards &amp; APY</h2>
        <p>
          Avalanche staking rewards come from the network&apos;s predetermined emission schedule rather than ongoing inflation. The maximum supply of AVAX is capped at 720 million tokens, and staking rewards are distributed from a pool of unreleased tokens. Current staking APY ranges from 8-10% for delegators, with the exact rate depending on the total amount of AVAX staked network-wide and the validator&apos;s delegation fee. Validators set their own delegation fees, typically ranging from 2% to 20% of the rewards generated. Unlike many networks where inflation dilutes non-stakers, Avalanche&apos;s fixed supply means staking rewards represent a genuine transfer from the emission pool rather than inflating the total supply indefinitely. The staking reward rate adjusts based on the staking duration selected, with longer commitments potentially earning higher rewards. Transaction fees on Avalanche are burned rather than distributed to validators, creating deflationary pressure that benefits all token holders regardless of staking status.
        </p>
      </section>

      <section id="how-to-stake">
        <h2>How to Stake AVAX Step-by-Step</h2>
        <p>
          To stake AVAX natively, you need to transfer your tokens to the P-Chain using the Avalanche Core wallet or another compatible wallet. First, set up your wallet and fund it with AVAX on the C-Chain from an exchange. Use the cross-chain transfer feature to move AVAX from the C-Chain to the P-Chain. Navigate to the staking section, browse available validators, select one with a good track record and reasonable delegation fee, choose your staking duration (minimum 14 days), and confirm the delegation of at least 25 AVAX. For a simpler experience, liquid staking through Benqi allows you to deposit AVAX on the C-Chain and receive sAVAX, a liquid staking token that accrues staking rewards and can be used in DeFi protocols across the Avalanche ecosystem. Exchange staking through platforms like Coinbase or Binance offers the easiest entry point but typically provides lower yields. Remember that native staking on Avalanche locks your tokens for the entire chosen duration with no early withdrawal option, so plan your staking period carefully.
        </p>
      </section>

      <section id="risks">
        <h2>Risks of Staking Avalanche</h2>
        <p>
          Avalanche staking has a unique risk profile compared to other networks. The fixed lock-up period is perhaps the most significant consideration, as your AVAX cannot be withdrawn before the delegation period ends. During a 14-day minimum lock-up, market conditions can change dramatically, and you have no option to exit your position. Unlike networks with slashing penalties, Avalanche validators who misbehave simply do not earn rewards rather than losing staked tokens, which makes delegation somewhat safer. However, if your validator has poor uptime, you also receive reduced rewards for that period. Smart contract risk applies when using liquid staking protocols like Benqi. The cross-chain transfer process between C-Chain and P-Chain adds operational complexity and potential for user error. Market risk remains the primary concern, as AVAX can experience significant price volatility that outweighs staking returns. The minimum delegation of 25 AVAX also creates a barrier for smaller holders who may prefer liquid staking alternatives.
        </p>
      </section>

      <section id="validators">
        <h2>Validators &amp; Delegation</h2>
        <p>
          Avalanche supports over 1,200 active validators, making it one of the more decentralized networks by validator count. When choosing a validator, evaluate their uptime percentage, delegation fee rate, remaining delegation capacity, stake amount, and time remaining in their validation period. Validators must stake a minimum of 2,000 AVAX and can accept delegations up to 5 times their own stake. This ratio mechanism helps prevent excessive concentration of stake with any single validator. The Avalanche Explorer provides detailed information about each validator&apos;s performance metrics and delegation parameters. Some validators are operated by well-known entities in the Avalanche ecosystem, while others are independent operators contributing to network decentralization. When your chosen delegation period ends, rewards are automatically distributed and your AVAX becomes available along with your accrued staking rewards. You can then choose to redelegate or use your tokens elsewhere. Consider spreading delegations across multiple validators to reduce the impact of any single validator&apos;s poor performance.
        </p>
      </section>

      <section id="tax-implications">
        <h2>Tax Implications</h2>
        <p>
          Avalanche staking rewards are generally treated as taxable income when received. Since AVAX staking rewards are distributed at the end of your delegation period rather than continuously, the tax event occurs when the rewards become accessible in your wallet. The fair market value of the AVAX rewards at that time constitutes ordinary income for tax purposes. Cross-chain transfers between the C-Chain and P-Chain are typically not considered taxable events since you maintain ownership of the same asset. However, exchanging AVAX for liquid staking tokens like sAVAX may be treated as a taxable event in some jurisdictions. When you subsequently sell or trade staking rewards, capital gains or losses are calculated based on the difference between your cost basis and the sale price. The lock-up period means you cannot realize gains or losses on staked AVAX until the delegation period concludes, which affects your tax planning timeline. Maintaining records of delegation dates, amounts, reward distributions, and fair market values is essential for accurate tax reporting.
        </p>
      </section>
    </LearnPageLayout>
  );
}
