import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Crypto Mining? Complete Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what crypto mining is, how it works, what hardware you need, and whether mining is still profitable. A comprehensive guide to cryptocurrency mining.",
};

export default function WhatIsMiningPage() {
  return (
    <LearnPageLayout
      title="What Is Crypto Mining?"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="10 min read"
      intro="Crypto mining is the process of validating transactions and adding new blocks to a blockchain network using computational power. Miners compete to solve complex mathematical puzzles, and the first to find a valid solution earns the right to add the next block and receive newly minted cryptocurrency as a reward. Mining is the backbone of proof-of-work blockchains like Bitcoin and plays a critical role in securing decentralized networks."
      toc={[
        { id: "how-mining-works", title: "How Crypto Mining Works", level: 2 },
        { id: "mining-hardware", title: "Mining Hardware and Equipment", level: 2 },
        { id: "mining-pools", title: "Mining Pools Explained", level: 2 },
        { id: "profitability", title: "Mining Profitability in 2025", level: 2 },
      ]}
      faqs={[
        {
          question: "Is crypto mining still profitable?",
          answer:
            "Mining profitability depends on several factors including electricity costs, hardware efficiency, the cryptocurrency being mined, and current network difficulty. After Bitcoin halvings, block rewards decrease, making it harder for small-scale miners. Miners with access to cheap electricity and efficient ASIC hardware can still be profitable, but hobbyist mining on most networks is generally not worthwhile.",
        },
        {
          question: "How much electricity does crypto mining use?",
          answer:
            "Bitcoin mining alone consumes an estimated 100-150 TWh of electricity annually, comparable to the energy usage of some small countries. A single ASIC miner can draw 1,500-3,500 watts continuously. This energy consumption is one of the primary criticisms of proof-of-work mining, and has driven interest in proof-of-stake alternatives.",
        },
        {
          question: "Can I mine Bitcoin on my phone or laptop?",
          answer:
            "No. Bitcoin mining requires specialized ASIC hardware that is millions of times more efficient than consumer devices. Mining on a phone or laptop would cost far more in electricity than any crypto earned and could damage your device. Some alternative coins can be mined with GPUs, but even this requires dedicated setups.",
        },
      ]}
      relatedArticles={[
        { title: "Proof of Work Explained", href: "/learn/proof-of-work", category: "Learn Crypto" },
        { title: "What Is Staking?", href: "/learn/what-is-staking", category: "Learn Crypto" },
        { title: "What Is Bitcoin?", href: "/learn/what-is-bitcoin", category: "Learn Crypto" },
        { title: "Consensus Mechanisms", href: "/learn/consensus-mechanisms", category: "Learn Crypto" },
      ]}
    >
      <section id="how-mining-works">
        <h2>How Crypto Mining Works</h2>
        <p>
          At its core, crypto mining involves using computational power to find a hash value that meets the network&apos;s difficulty target. Miners collect pending transactions from the mempool, organize them into a candidate block, and repeatedly hash the block header with different nonce values until they find an output below the target threshold. This process, known as proof of work, ensures that creating new blocks requires real energy expenditure.
        </p>
        <p>
          When a miner finds a valid hash, they broadcast the block to the network. Other nodes verify the block&apos;s validity, and if accepted, the miner receives the block reward plus transaction fees. On Bitcoin, the block reward started at 50 BTC in 2009 and halves approximately every four years. As of 2024, the reward is 3.125 BTC per block, with the next halving expected in 2028.
        </p>
        <p>
          The difficulty of mining adjusts automatically based on the total network hash rate. If more miners join the network, difficulty increases to maintain the target block time. For Bitcoin, the target is one block every 10 minutes on average. This self-adjusting mechanism ensures consistent block production regardless of how much mining power is online.
        </p>
      </section>

      <section id="mining-hardware">
        <h2>Mining Hardware and Equipment</h2>
        <p>
          Bitcoin mining requires Application-Specific Integrated Circuits (ASICs), which are purpose-built machines designed solely for SHA-256 hashing. Modern ASICs like the Bitmain Antminer S21 deliver over 200 TH/s while consuming around 3,500 watts. These machines cost between $2,000 and $15,000 depending on efficiency and generation. GPU mining is no longer viable for Bitcoin but remains relevant for some altcoins.
        </p>
        <p>
          Beyond the mining hardware itself, miners need adequate power supplies, cooling systems, and internet connectivity. Large-scale mining operations are typically located near cheap energy sources such as hydroelectric dams, wind farms, or regions with low electricity rates. Proper ventilation is essential since mining equipment generates significant heat that can damage components and reduce lifespan.
        </p>
      </section>

      <section id="mining-pools">
        <h2>Mining Pools Explained</h2>
        <p>
          Solo mining has become impractical for most miners due to the enormous network hash rate. Mining pools allow multiple miners to combine their computational power and share rewards proportionally based on each participant&apos;s contribution. Popular Bitcoin mining pools include Foundry USA, AntPool, F2Pool, and ViaBTC. Pool fees typically range from 1% to 3% of earnings.
        </p>
        <p>
          Pools use different reward distribution methods. Pay-per-share (PPS) pays miners for each valid share submitted regardless of whether the pool finds a block. Full pay-per-share (FPPS) includes transaction fees in the payout. Proportional pools only pay when a block is found, distributing rewards based on each miner&apos;s share of total work submitted during that round.
        </p>
      </section>

      <section id="profitability">
        <h2>Mining Profitability in 2025</h2>
        <p>
          Mining profitability is determined by the relationship between revenue (block rewards plus transaction fees) and costs (hardware, electricity, maintenance, and cooling). The most critical variable is electricity cost. Miners paying under $0.05 per kWh can remain profitable in most market conditions, while those paying over $0.10 per kWh struggle to break even outside of bull markets.
        </p>
        <p>
          The 2024 Bitcoin halving reduced block rewards from 6.25 to 3.125 BTC, putting significant pressure on miners with older hardware or expensive energy. However, rising Bitcoin prices and growing transaction fee revenue from Ordinals and BRC-20 tokens have partially offset the reduced block reward. Miners who invest in the latest-generation ASICs and secure favorable energy contracts are best positioned for long-term profitability.
        </p>
      </section>
    </LearnPageLayout>
  );
}
