import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Stake Cardano (ADA): Complete Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn how to stake Cardano (ADA) and earn rewards. Step-by-step guide covering delegation, stake pools, current APY rates, and best practices for ADA staking.",
  keywords: ["stake cardano", "ADA staking", "cardano staking rewards", "cardano stake pools", "how to stake ADA"],
};

export default function StakeCardanoPage() {
  return (
    <LearnPageLayout
      title="How to Stake Cardano (ADA): Complete Guide"
      categoryName="Staking"
      categorySlug="investing/staking"
      readTime="9 min"
      intro="Cardano offers one of the most user-friendly staking experiences in cryptocurrency, with no lock-up periods and no minimum delegation requirements. ADA holders can earn approximately 3-5% APY by delegating to stake pools while retaining full custody of their tokens. This guide walks you through every aspect of Cardano staking."
      toc={[
        { id: "overview", title: "Cardano Staking Overview", level: 2 },
        { id: "rewards", title: "Staking Rewards & APY", level: 2 },
        { id: "how-to-stake", title: "How to Stake ADA Step-by-Step", level: 2 },
        { id: "risks", title: "Risks of Staking Cardano", level: 2 },
        { id: "validators", title: "Stake Pools & Validators", level: 2 },
        { id: "tax-implications", title: "Tax Implications", level: 2 },
      ]}
      faqs={[
        {
          question: "Is there a lock-up period for Cardano staking?",
          answer: "No, Cardano staking has no lock-up period. Your ADA remains liquid and in your wallet at all times while delegated. You can spend, send, or undelegate your ADA at any time without any waiting period or penalties.",
        },
        {
          question: "What is the minimum amount of ADA to stake?",
          answer: "There is no strict minimum to delegate ADA. You need a small deposit of 2 ADA to register your staking address, plus transaction fees. After that, your entire wallet balance is automatically delegated to your chosen stake pool.",
        },
        {
          question: "How often are Cardano staking rewards paid?",
          answer: "Cardano staking rewards are distributed every epoch, which lasts 5 days. However, there is an initial delay of 15-20 days before you receive your first rewards after delegating. After that, rewards arrive consistently every 5 days.",
        },
        {
          question: "Can I stake ADA on exchanges?",
          answer: "Yes, most major exchanges like Coinbase, Kraken, and Binance offer ADA staking. However, exchange staking typically offers lower returns due to fees and means you do not control your private keys. Delegating from your own wallet like Daedalus or Yoroi is recommended for better security and returns.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Crypto Staking?", href: "/investing/staking/learn/what-is-staking", category: "Staking" },
        { title: "Best Staking Platforms", href: "/investing/staking/best", category: "Staking" },
        { title: "Staking Risks", href: "/investing/staking/learn/staking-risks", category: "Staking" },
      ]}
    >
      <section id="overview">
        <h2>Cardano Staking Overview</h2>
        <p>
          Cardano uses a unique proof-of-stake protocol called Ouroboros, which was the first provably secure proof-of-stake algorithm developed through peer-reviewed academic research. Unlike many other staking systems, Cardano&apos;s delegation mechanism allows ADA holders to stake their tokens without locking them up or transferring custody to a third party. When you delegate your ADA to a stake pool, the tokens never leave your wallet. You maintain full control and can spend or move your ADA at any time. The protocol automatically includes your wallet&apos;s entire balance in the delegation, including any new ADA you receive. This design makes Cardano staking exceptionally user-friendly and eliminates the opportunity cost typically associated with staking lock-up periods. The system supports thousands of stake pools, fostering a highly decentralized network where even small pool operators can participate meaningfully in block production.
        </p>
      </section>

      <section id="rewards">
        <h2>Staking Rewards &amp; APY</h2>
        <p>
          Cardano staking rewards come from a combination of monetary expansion (new ADA creation) and transaction fees collected by the network. The current APY for ADA staking ranges from 3-5%, with most well-performing stake pools delivering around 4% annualized returns. Rewards are distributed every epoch, which lasts 5 days, but there is an initial delay of approximately 15-20 days before your first rewards arrive after delegating. Each stake pool sets parameters including a fixed fee per epoch and a variable margin percentage. The fixed fee covers operational costs and is deducted first, while the margin represents the pool operator&apos;s profit share. Lower margin pools generally provide better returns to delegators, but extremely low margins may indicate unsustainable operations. The total rewards available decrease gradually over time as the reserve fund depletes, though this process will take many decades to significantly impact staking yields.
        </p>
      </section>

      <section id="how-to-stake">
        <h2>How to Stake ADA Step-by-Step</h2>
        <p>
          Staking Cardano is straightforward and can be done directly from supported wallets. First, download a Cardano-compatible wallet such as Daedalus (full node), Yoroi (light wallet), or Eternl. Transfer your ADA to the wallet and allow it to sync. Navigate to the staking or delegation section within the wallet, which displays a list of available stake pools with their performance metrics. Research pools based on their saturation level, pledge amount, margin, and historical performance. Select your preferred pool and confirm the delegation transaction, which requires a small fee plus a 2 ADA refundable deposit. Your delegation becomes active after a waiting period of about 15-20 days, after which rewards arrive every 5 days automatically. You can switch pools at any time with a simple transaction, and the change takes effect after the current epoch cycle completes. No unstaking is required since your ADA remains freely accessible in your wallet throughout the entire process.
        </p>
      </section>

      <section id="risks">
        <h2>Risks of Staking Cardano</h2>
        <p>
          Cardano staking is considered one of the safest staking options available due to its non-custodial design and lack of slashing penalties. Your ADA never leaves your wallet, eliminating the smart contract risks present in liquid staking protocols on other chains. However, several risks still apply. Pool performance risk means that if your chosen stake pool produces fewer blocks than expected due to poor luck or downtime, your rewards for that epoch will be lower. Saturation risk occurs when a pool exceeds its ideal size, reducing per-delegator rewards and indicating you should switch to a less saturated pool. Market risk remains significant as the price of ADA can fluctuate substantially, potentially erasing staking gains in dollar terms. Regulatory risk could impact staking activities as governments develop cryptocurrency frameworks. Despite these considerations, the fact that Cardano does not implement slashing and maintains non-custodial delegation makes it one of the lower-risk staking options across all proof-of-stake networks.
        </p>
      </section>

      <section id="validators">
        <h2>Stake Pools &amp; Validators</h2>
        <p>
          The Cardano ecosystem supports over 3,000 registered stake pools, making it one of the most decentralized proof-of-stake networks. When selecting a stake pool, key factors to evaluate include the pool&apos;s saturation level (pools approaching or exceeding saturation deliver reduced rewards), pledge amount (higher pledge indicates greater operator commitment), margin and fixed fees, lifetime return on investment (ROA), and historical block production reliability. Tools like PoolTool, ADAPools, and CardanoScan provide detailed analytics on pool performance. The Cardano Foundation and IOHK have implemented mechanisms to encourage decentralization, including saturation limits that cap the effective stake any single pool can control. Mission-driven pools that support charitable causes or specific communities are popular in the Cardano ecosystem, allowing delegators to support projects they believe in while earning rewards. Multi-pool operators exist but are less dominant than in some other networks, helping maintain a healthy distribution of stake across the ecosystem.
        </p>
      </section>

      <section id="tax-implications">
        <h2>Tax Implications</h2>
        <p>
          Cardano staking rewards are generally treated as taxable income in most jurisdictions. In the United States, the IRS considers staking rewards as ordinary income at their fair market value when received. Since Cardano distributes rewards every 5 days, this creates frequent taxable events that require careful record-keeping. Each reward distribution should be recorded with the date, amount of ADA received, and the fair market value in your local currency at the time of receipt. When you later sell or trade ADA that was received as staking rewards, any change in value from the time of receipt constitutes a capital gain or loss. The 2 ADA deposit required for delegation is refundable and typically not a taxable event. Given the frequency of reward distributions and the complexity of tracking cost basis across multiple epochs, using cryptocurrency tax software that supports Cardano is highly recommended. Always consult with a qualified tax professional for guidance specific to your situation and jurisdiction.
        </p>
      </section>
    </LearnPageLayout>
  );
}
