import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Stake Sui (SUI): Complete Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn how to stake Sui (SUI) and earn rewards. Covers delegation to validators, liquid staking with afSUI, APY rates, and step-by-step staking instructions.",
  keywords: ["stake sui", "SUI staking", "sui staking rewards", "sui validators", "how to stake SUI"],
};

export default function StakeSuiPage() {
  return (
    <LearnPageLayout
      title="How to Stake Sui (SUI): Complete Guide"
      categoryName="Staking"
      categorySlug="investing/staking"
      readTime="9 min"
      intro="Sui staking lets SUI holders earn approximately 3-5% APY by delegating to validators on this high-performance layer-1 blockchain built with the Move programming language. With easy delegation through Sui Wallet and liquid staking options, participating in Sui network security is straightforward."
      toc={[
        { id: "overview", title: "overview", level: 2 },
        { id: "sui-staking-overview", title: "Sui Staking Overview", level: 2 },
        { id: "rewards", title: "rewards", level: 2 },
        { id: "staking-rewards-apy", title: "Staking Rewards & APY", level: 2 },
        { id: "how-to-stake", title: "how-to-stake", level: 2 },
        { id: "how-to-stake-sui-step-by-step", title: "How to Stake SUI Step-by-Step", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-of-staking-sui", title: "Risks of Staking Sui", level: 2 },
        { id: "validators", title: "validators", level: 2 },
        { id: "validators-staking-pools", title: "Validators & Staking Pools", level: 2 },
        { id: "tax-implications", title: "tax-implications", level: 2 },
        { id: "tax-implications", title: "Tax Implications", level: 2 }
      ]}
      faqs={[
        { question: "What APY can I earn staking SUI?", answer: "SUI staking currently offers approximately 3-5% APY. The rate depends on validator commission, network stake subsidy distribution, and total SUI staked. Rewards are distributed at the end of each epoch (approximately 24 hours)." },
        { question: "Is there a minimum SUI required to stake?", answer: "There is no protocol-enforced minimum for delegating SUI. You need enough tokens to cover the small gas fee for the delegation transaction. Most wallets allow you to stake any amount above this threshold." },
        { question: "How long is the SUI unstaking period?", answer: "SUI unstaking takes effect at the end of the current epoch, approximately 24 hours. After requesting unstaking, your tokens become available at the epoch boundary. Liquid staking tokens can be swapped instantly on DEXs." },
        { question: "Does SUI have slashing?", answer: "Sui does not currently implement slashing penalties for delegators. Validators with poor performance earn fewer rewards, which reduces delegator returns, but staked principal is not at risk of being slashed." },
      ]}
      relatedArticles={[
        { title: "What Is Crypto Staking?", href: "/investing/staking/learn/what-is-staking", category: "Staking" },
        { title: "Best Staking Platforms", href: "/investing/staking/best", category: "Staking" },
        { title: "Aptos Staking Guide", href: "/investing/staking/aptos", category: "Staking" },
      ]}
    >
      <section id="overview">
        <h2>Sui Staking Overview</h2>
        <p>
          Sui is a layer-1 blockchain developed by Mysten Labs, featuring an object-centric data model and the Move programming language designed for safety and performance. The network uses a delegated proof-of-stake consensus mechanism where SUI holders delegate their tokens to validators who process transactions and produce checkpoints. Sui&apos;s innovative architecture enables parallel transaction processing, achieving high throughput while maintaining decentralization across its validator set. Staking on Sui is designed to be straightforward, with delegation built directly into the Sui Wallet and other compatible wallets. Rewards are distributed at the end of each epoch, which lasts approximately 24 hours, and are automatically compounded into your staked position unless explicitly withdrawn. The network launched its mainnet in May 2023 and has rapidly grown its validator ecosystem and staking participation rate.
        </p>
      </section>

      <section id="rewards">
        <h2>Staking Rewards &amp; APY</h2>
        <p>
          Sui staking rewards come from a combination of the network&apos;s stake subsidy fund and gas fees collected during each epoch. The current APY ranges from 3-5% depending on validator performance and commission rates. The stake subsidy is a predetermined pool of SUI tokens allocated at genesis to incentivize network participation, distributed proportionally to validators based on their stake and performance. Gas fees collected during an epoch are also shared among validators and their delegators. Validator commission rates typically range from 2-10% and directly impact your net yield. As the Sui ecosystem matures and transaction volume increases, gas fee revenue may become a more significant component of total rewards. The relatively modest APY compared to some other networks reflects Sui&apos;s tokenomics design, which prioritizes long-term sustainability over aggressive short-term incentives.
        </p>
      </section>

      <section id="how-to-stake">
        <h2>How to Stake SUI Step-by-Step</h2>
        <p>
          To stake SUI, download and set up a compatible wallet such as Sui Wallet (browser extension), Suiet, or Ethos Wallet. Transfer SUI from an exchange to your wallet address. Open the wallet and navigate to the staking section, where you will see a list of active validators with their performance metrics, commission rates, and total delegated stake. Select a validator that meets your criteria for reliability and fees, enter the amount of SUI you wish to delegate, and confirm the transaction. Your delegation becomes active at the start of the next epoch, and rewards begin accruing automatically. For liquid staking, protocols like Aftermath Finance offer afSUI tokens that represent your staked position while remaining usable in Sui DeFi applications. Haedal Protocol is another liquid staking option on Sui. You can split your delegation across multiple validators to diversify risk. To unstake, initiate a withdrawal in your wallet and your tokens become available at the next epoch boundary.
        </p>
      </section>

      <section id="risks">
        <h2>Risks of Staking Sui</h2>
        <p>
          Sui staking carries several risks worth understanding before committing your tokens. Validator performance risk means that delegating to validators with low uptime results in reduced rewards, though Sui does not implement slashing for delegators. Smart contract risk applies when using liquid staking protocols, as vulnerabilities in the protocol code could affect deposited funds. As a relatively new blockchain that launched in 2023, Sui has a shorter track record than established networks like Ethereum or Cosmos, meaning there is less historical data to assess long-term reliability and performance. Token unlock events from early investors, team allocations, and ecosystem grants create potential selling pressure that can negatively impact SUI price and consequently your staking returns in dollar terms. Competition from other Move-based blockchains and the broader layer-1 market could affect Sui&apos;s long-term adoption and token value. Market volatility is amplified by the network&apos;s relatively young age and evolving tokenomics.
        </p>
      </section>

      <section id="validators">
        <h2>Validators &amp; Staking Pools</h2>
        <p>
          Sui maintains a growing validator set with nodes operated by a diverse mix of institutional operators, infrastructure providers, and community members. When selecting a validator, evaluate their APY history, commission rate, total stake, epoch participation rate, and community reputation. The Sui Explorer and tools like Suivision provide comprehensive validator analytics including historical performance data. The Mysten Labs foundation supports network decentralization through validator incentive programs and geographic distribution initiatives. Some validators actively contribute to the Sui ecosystem through developer tools, educational content, or governance participation. Liquid staking pools like Aftermath Finance distribute delegations across multiple validators, providing built-in diversification. Consider supporting validators of various sizes to promote a healthy and decentralized network. Regularly reviewing your delegation choices and adjusting when validator performance changes ensures you maintain optimal staking returns.
        </p>
      </section>

      <section id="tax-implications">
        <h2>Tax Implications</h2>
        <p>
          SUI staking rewards are treated as taxable income in most jurisdictions at the fair market value when received. Since Sui distributes rewards every epoch (approximately 24 hours), this creates daily taxable events that require consistent tracking. Rewards that auto-compound increase your staked balance, with each compounding event potentially constituting a separate income event. In the United States, the IRS treats staking rewards as ordinary income at the time of receipt. Capital gains or losses apply when you later sell or trade SUI tokens received as rewards, calculated based on the difference between your cost basis and sale price. The exchange of SUI for liquid staking tokens may be treated as a taxable event in certain jurisdictions. Using crypto tax software that supports Sui blockchain data is recommended to automate the tracking of frequent reward distributions. Consult a tax professional for guidance specific to your jurisdiction and circumstances.
        </p>
      </section>
    </LearnPageLayout>
  );
}
