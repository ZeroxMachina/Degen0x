import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Proof of Stake? Staking & Validation Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn what Proof of Stake is, how staking works, validator requirements, staking rewards, slashing penalties, and how PoS compares to Proof of Work.",
  keywords: ["proof of stake", "PoS", "staking", "validator", "ethereum staking", "crypto staking"],
};

export default function WhatIsProofOfStakePage() {
  return (
    <LearnPageLayout
      title="What Is Proof of Stake? Staking & Validation Explained"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="9 min"
      intro="Proof of Stake (PoS) is a blockchain consensus mechanism where validators are chosen to create new blocks based on the amount of cryptocurrency they have staked as collateral. Since Ethereum's historic transition to PoS in 2022, it has become the dominant consensus mechanism in the blockchain industry, offering network security through economic incentives rather than computational work."
      toc={[
        { id: "how-pos-works", title: "how-pos-works", level: 2 },
        { id: "how-proof-of-stake-works", title: "How Proof of Stake Works", level: 2 },
        { id: "validator-role", title: "validator-role", level: 2 },
        { id: "the-role-of-validators", title: "The Role of Validators", level: 2 },
        { id: "staking-rewards", title: "staking-rewards", level: 2 },
        { id: "staking-rewards", title: "Staking Rewards", level: 2 },
        { id: "slashing", title: "slashing", level: 2 },
        { id: "slashing-penalties", title: "Slashing Penalties", level: 2 },
        { id: "pos-variations", title: "pos-variations", level: 2 },
        { id: "pos-variations", title: "PoS Variations", level: 2 },
        { id: "advantages-disadvantages", title: "advantages-disadvantages", level: 2 },
        { id: "advantages-and-disadvantages", title: "Advantages and Disadvantages", level: 2 }
      ]}
      faqs={[
        {
          question: "How much can you earn from staking?",
          answer: "Staking yields vary by network. Ethereum staking typically yields 3-5% annually, while other networks may offer higher rates. Yields depend on the total amount staked network-wide, network activity generating fees, and the specific staking method you use.",
        },
        {
          question: "Is staking safe?",
          answer: "Staking carries several risks: the value of staked tokens can decrease, validators can be slashed for misbehavior or downtime, and some protocols have unbonding periods where tokens are locked and cannot be sold. Liquid staking protocols mitigate liquidity risk but introduce smart contract risk.",
        },
        {
          question: "Do I need to run a validator to stake?",
          answer: "No. While running your own validator requires significant capital and technical knowledge, most people stake through liquid staking protocols like Lido, exchange staking services, or delegated staking on networks like Cosmos. These options require no technical expertise.",
        },
        {
          question: "What is the minimum to stake Ethereum?",
          answer: "Running your own Ethereum validator requires 32 ETH. However, liquid staking protocols like Lido and Rocket Pool allow you to stake any amount, and many exchanges offer ETH staking with no minimum. These services pool deposits from many users to run validators.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Proof of Work?", href: "/learn/what-is-proof-of-work", category: "Learn" },
        { title: "What Is Liquid Staking?", href: "/learn/what-is-liquid-staking", category: "Learn" },
        { title: "What Is Slashing?", href: "/learn/what-is-slashing", category: "Learn" },
        { title: "What Is a Validator?", href: "/learn/what-is-a-validator", category: "Learn" },
      ]}
    >
      <section id="how-pos-works">
        <h2>How Proof of Stake Works</h2>
        <p>
          In Proof of Stake, participants lock up cryptocurrency as collateral — called staking — to become validators who can propose and validate new blocks. The protocol selects validators to create blocks based on factors including the size of their stake, duration of staking, and randomization to prevent concentration of power. This replaces the energy-intensive mining process of Proof of Work with an economic bonding mechanism.
        </p>
        <p>
          The security model is fundamentally economic: validators have financial skin in the game. If they act honestly, they earn rewards from newly minted tokens and transaction fees. If they act maliciously — such as trying to approve fraudulent transactions or creating conflicting blocks — they lose a portion of their staked collateral through a process called slashing. This creates a powerful deterrent where the cost of cheating always exceeds the potential profit.
        </p>
        <p>
          The consensus process works through rounds of block proposals and attestations. A validator is randomly selected to propose a new block, and a committee of other validators attests to its validity. Once enough attestations are collected, the block is considered finalized and added to the chain. This process is dramatically more energy-efficient than Proof of Work, consuming roughly 99.95% less electricity while maintaining strong security guarantees.
        </p>
      </section>

      <section id="validator-role">
        <h2>The Role of Validators</h2>
        <p>
          Validators are the backbone of any Proof of Stake network. They run specialized software that maintains a copy of the blockchain, validates incoming transactions, proposes new blocks when selected, and attests to blocks proposed by other validators. Running a validator requires a minimum stake of the network's native cryptocurrency — 32 ETH for Ethereum — along with reliable hardware and a stable internet connection.
        </p>
        <p>
          Validator responsibilities include staying online consistently, processing transactions accurately, and responding to network events promptly. Validators that go offline or fail to participate in their assigned duties receive inactivity penalties that gradually reduce their stake. These penalties are relatively mild for short outages but accumulate over time, incentivizing validators to maintain high uptime. The validator role requires both technical competence and economic commitment, creating a naturally high-quality set of network participants.
        </p>
      </section>

      <section id="staking-rewards">
        <h2>Staking Rewards</h2>
        <p>
          Validators earn rewards for successfully performing their duties — proposing valid blocks and making correct attestations. Reward rates are determined by the protocol and depend on the total amount of stake in the network. When fewer tokens are staked, individual rewards are higher to attract more participation; when more tokens are staked, rewards decrease because the network is already well-secured. This creates a self-regulating economic equilibrium.
        </p>
        <p>
          On Ethereum, staking rewards come from two sources: newly issued ETH through the protocol's inflation mechanism and transaction fees paid by users including priority tips. During periods of high network activity, fee income can significantly boost validator returns. The overall annual yield for Ethereum staking has generally ranged between 3% and 5%, making it comparable to many traditional fixed-income investments while carrying additional risks from token price volatility and slashing.
        </p>
      </section>

      <section id="slashing">
        <h2>Slashing Penalties</h2>
        <p>
          Slashing is the mechanism that enforces honest behavior by destroying a portion of a misbehaving validator's stake. The most severe offenses include proposing two different blocks at the same height (double proposal) and making contradictory attestations (surround voting). These actions indicate an intentional attempt to attack the network and result in immediate slashing of at least 1/32 of the validator's stake on Ethereum, with additional penalties proportional to how many other validators are slashed simultaneously.
        </p>
        <p>
          The correlation penalty mechanism means that if a large number of validators are slashed at the same time — suggesting a coordinated attack rather than an individual mistake — the penalties escalate dramatically, potentially destroying the entirety of each validator's stake. This creates an enormous deterrent against large-scale attacks. Individual slashing events from honest mistakes like running redundant validator software are penalized more lightly but still represent meaningful financial losses.
        </p>
      </section>

      <section id="pos-variations">
        <h2>PoS Variations</h2>
        <p>
          Delegated Proof of Stake (DPoS), used by networks like Cosmos and Polkadot, allows token holders to delegate their stake to validators without running validator software themselves. This increases participation since anyone can earn staking rewards through delegation while validators compete for delegators by maintaining strong performance and taking reasonable commission rates. DPoS tends to have fewer validators than pure PoS but enables broader economic participation.
        </p>
        <p>
          Nominated Proof of Stake (NPoS), used by Polkadot, introduces a more sophisticated selection mechanism where nominators back validators and share in both rewards and risks. Liquid Proof of Stake, pioneered by Tezos, allows stakers to participate without locking their tokens. Each variation makes different trade-offs between decentralization, participation accessibility, and economic security, contributing to the diverse landscape of Proof of Stake implementations.
        </p>
      </section>

      <section id="advantages-disadvantages">
        <h2>Advantages and Disadvantages</h2>
        <p>
          The primary advantages of PoS include dramatically lower energy consumption compared to PoW, lower barriers to participation since validators do not need specialized mining hardware, native yield generation through staking rewards, and stronger economic penalties for misbehavior through slashing. These properties have made PoS the default choice for new blockchain projects and led Ethereum to transition away from PoW.
        </p>
        <p>
          Disadvantages include potential wealth concentration where rich stakers earn more rewards and become richer, the nothing-at-stake problem where validators face no external cost for validating multiple chain histories, longer time-to-finality in some implementations, and the dependency on the staked asset's value for security — if the token price crashes, the economic security of the network decreases proportionally. Critics also argue that PoS is less battle-tested than PoW and that its security assumptions may not hold under extreme adversarial conditions.
        </p>
      </section>
    </LearnPageLayout>
  );
}
