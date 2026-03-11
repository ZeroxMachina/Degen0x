import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Restaking Explained: How EigenLayer Works (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn how restaking works, what EigenLayer is, how Actively Validated Services (AVS) generate additional yield, and the risks of restaking your staked ETH.",
};

export default function RestakingExplainedPage() {
  return (
    <LearnPageLayout
      title="Restaking Explained: How EigenLayer Works"
      categoryName="Staking"
      categorySlug="investing/staking"
      readTime="14 min"
      intro="Restaking is one of the most significant innovations in the Ethereum staking ecosystem. Pioneered by EigenLayer, restaking allows staked ETH to secure additional services beyond the Ethereum base layer, creating new revenue streams for stakers. This guide explains the mechanics of restaking, how AVS generate yield, and the additional risks to be aware of."
      toc={[
        { id: "what-is-restaking", title: "What Is Restaking?", level: 2 },
        { id: "eigenlayer-overview", title: "EigenLayer Overview", level: 2 },
        { id: "avs-explained", title: "Actively Validated Services (AVS)", level: 2 },
        { id: "how-to-restake", title: "How to Restake", level: 2 },
        { id: "lrt-ecosystem", title: "Liquid Restaking Tokens", level: 2 },
        { id: "risks-considerations", title: "Risks & Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "Do I need to already be staking ETH to restake?",
          answer: "Not necessarily. EigenLayer supports both native ETH restaking (for solo validators) and liquid staking token restaking (for holders of stETH, rETH, etc.). If you hold a liquid staking token, you can restake it on EigenLayer without running your own validator.",
        },
        {
          question: "How much extra yield does restaking provide?",
          answer: "Restaking yields vary based on AVS demand and the specific services your operator supports. Currently, additional yields range from 1% to 5% APY on top of base staking rewards. As the AVS ecosystem matures and more services launch, yield opportunities may expand.",
        },
        {
          question: "Can I lose my staked ETH through restaking?",
          answer: "Yes. Restaking introduces additional slashing conditions from each AVS you opt into. If your operator or the AVS experiences issues that trigger slashing, a portion of your restaked ETH can be penalized. EigenLayer implements slashing limits, but the risk is real and should be carefully considered.",
        },
      ]}
      relatedArticles={[
        { title: "Liquid Staking Explained", href: "/investing/staking/learn/liquid-staking-explained", category: "Staking" },
        { title: "Staking Risks", href: "/investing/staking/learn/staking-risks", category: "Staking" },
        { title: "EigenLayer Review", href: "/investing/staking/reviews/eigenlayer", category: "Reviews" },
      ]}
    >
      <h2 id="what-is-restaking">What Is Restaking?</h2>
      <p>
        Restaking is the process of taking assets that are already staked on a proof-of-stake network
        (like Ethereum) and opting them into securing additional protocols and services. Instead of
        your staked ETH only securing the Ethereum base layer, restaking extends that economic security
        to other systems that need it, earning you additional rewards in the process.
      </p>
      <p>
        Think of it like a security guard who works at a bank during the day (securing Ethereum) and
        then takes a second shift at a jewelry store at night (securing an AVS). The guard earns two
        paychecks for their time, but also takes on additional responsibilities and risks. If they
        fail at either job, there are consequences.
      </p>
      <p>
        The concept was introduced by Sreeram Kannan and the EigenLayer team, who recognized that
        Ethereum&apos;s massive staked capital (over $70 billion) could be leveraged to bootstrap
        security for new protocols without each one needing to build its own validator set from scratch.
      </p>

      <h2 id="eigenlayer-overview">EigenLayer Overview</h2>
      <p>
        EigenLayer is the protocol that enables restaking on Ethereum. It acts as a middleware layer
        between Ethereum&apos;s base staking and the services that want to borrow its economic security.
        The protocol has three main participants: restakers (who provide capital), operators (who run
        the infrastructure), and AVS (which consume security).
      </p>
      <p>
        Restakers deposit their ETH or liquid staking tokens into EigenLayer and delegate to operators.
        Operators run the software for one or more AVS and are responsible for performing the validation
        tasks each service requires. AVS pay rewards to operators and restakers for the security
        provided. The protocol takes a 10% fee on AVS rewards distributed through the system.
      </p>

      <h2 id="avs-explained">Actively Validated Services (AVS)</h2>
      <p>
        Actively Validated Services are the protocols and systems that use EigenLayer&apos;s restaked
        security. Each AVS defines its own set of tasks, validation rules, slashing conditions, and
        reward structures. The diversity of AVS is what makes restaking powerful: restaked ETH can
        secure everything from oracle networks to cross-chain bridges to data availability layers.
      </p>
      <p>
        EigenDA, EigenLayer&apos;s own data availability service, was one of the first AVS to launch.
        It provides a scalable data availability solution for Layer 2 rollups, competing with
        alternatives like Celestia. Other AVS include decentralized sequencer networks, keeper
        networks for DeFi protocols, and cross-chain messaging systems.
      </p>
      <p>
        Each AVS sets its own reward budget and slashing parameters. When choosing operators, restakers
        should understand which AVS those operators support and the associated risk-reward profiles.
        Not all AVS carry the same level of risk or offer the same rewards.
      </p>

      <h2 id="how-to-restake">How to Restake</h2>
      <p>
        There are two paths to restake on EigenLayer: native restaking and LST restaking. Native
        restaking is for solo validators who redirect their validator&apos;s withdrawal credentials to
        an EigenPod smart contract. This provides the most direct form of restaking but requires
        running your own Ethereum validator with 32 ETH.
      </p>
      <p>
        LST restaking is accessible to anyone holding liquid staking tokens like stETH, rETH, or
        cbETH. You deposit your LST into EigenLayer&apos;s strategy contracts and delegate to an
        operator. The process requires interacting with smart contracts through a Web3 wallet. After
        depositing, you continue earning base staking rewards from your LST plus additional AVS
        rewards through EigenLayer.
      </p>
      <p>
        A third option is using Liquid Restaking Token (LRT) protocols like EtherFi, Renzo, or
        Kelp. These protocols handle the restaking process for you and issue a liquid token
        representing your restaked position, adding another layer of composability but also
        another layer of smart contract risk.
      </p>

      <h2 id="lrt-ecosystem">Liquid Restaking Tokens</h2>
      <p>
        The Liquid Restaking Token (LRT) ecosystem emerged as a natural evolution of liquid staking
        applied to restaking. LRT protocols like EtherFi (eETH), Renzo (ezETH), and Kelp (rsETH)
        allow users to restake through EigenLayer while maintaining liquidity through a tradeable
        token. These tokens represent a share of the underlying restaked ETH plus accumulated base
        staking and AVS rewards.
      </p>
      <p>
        LRTs add convenience and DeFi composability to restaking, but they also add another protocol
        layer with its own smart contract risk. The LRT space is competitive, with different protocols
        offering various approaches to operator selection, AVS diversification, and fee structures.
        Due diligence on the specific LRT protocol is as important as understanding EigenLayer itself.
      </p>

      <h2 id="risks-considerations">Risks and Considerations</h2>
      <p>
        Restaking introduces compounded risks that stakers must carefully evaluate. Slashing risk is
        amplified because your restaked ETH can be slashed for AVS-specific failures on top of
        standard Ethereum slashing conditions. If an operator misbehaves in any AVS they support,
        your restaked position can be penalized. EigenLayer implements slashing limits to cap
        maximum losses, but the risk is non-trivial.
      </p>
      <p>
        Smart contract risk is compounded across multiple protocol layers: the base staking protocol
        (Lido, Rocket Pool), EigenLayer itself, individual AVS contracts, and potentially LRT
        protocols. Each additional layer increases the total attack surface. The restaking stack is
        still relatively new and has not been battle-tested to the same extent as base liquid staking.
      </p>
      <p>
        Operator risk is a unique concern in restaking. You delegate to operators who choose which
        AVS to support and maintain the infrastructure. If an operator has poor uptime, supports
        buggy AVS, or acts maliciously, your restaked funds are at risk. Choosing reputable operators
        with transparent operations is critical for managing this risk.
      </p>
    </LearnPageLayout>
  );
}
