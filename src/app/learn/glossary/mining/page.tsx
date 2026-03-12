import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Mining? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what cryptocurrency mining is, how proof-of-work mining secures blockchains, and the economics of mining operations.",
};

export default function MiningPage() {
  return (
    <LearnPageLayout
      title="What Is Mining?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="6 min"
      intro="Mining is the process of using computational power to validate transactions, secure the network, and create new blocks on a proof-of-work blockchain. Miners compete to solve cryptographic puzzles; the winner gets to add the next block and receives a block reward of newly minted cryptocurrency plus transaction fees. Mining is how Bitcoin and other PoW networks achieve decentralized consensus without a central authority."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-mining", title: "What Is Mining?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-mining-works", title: "How Mining Works", level: 2 },
        { id: "mining-hardware", title: "mining-hardware", level: 2 },
        { id: "mining-hardware", title: "Mining Hardware", level: 2 },
        { id: "mining-pools", title: "mining-pools", level: 2 },
        { id: "mining-pools", title: "Mining Pools", level: 2 },
        { id: "economics", title: "economics", level: 2 },
        { id: "mining-economics", title: "Mining Economics", level: 2 }
      ]}
      faqs={[
        {
          question: "Can I mine Bitcoin on my laptop?",
          answer:
            "Technically yes, but you would never find a block. Bitcoin mining now requires specialized ASIC hardware that is orders of magnitude more efficient than consumer computers. Mining Bitcoin on a laptop would cost more in electricity than you could ever earn. Some smaller cryptocurrencies can still be mined with GPUs, but Bitcoin mining is firmly industrial-scale.",
        },
        {
          question: "Is mining bad for the environment?",
          answer:
            "Bitcoin mining consumes significant electricity, comparable to that of some small countries. However, the environmental impact depends on the energy source. An increasing percentage of mining uses renewable energy, stranded gas, or surplus hydroelectric power. The debate continues, but the industry has been trending toward cleaner energy sources driven by economic incentives.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Proof of Work?", href: "/learn/glossary/pow", category: "Glossary" },
        { title: "What Is Hash Rate?", href: "/learn/glossary/hash-rate", category: "Glossary" },
        { title: "What Is Difficulty?", href: "/learn/glossary/difficulty", category: "Glossary" },
        { title: "What Is Block Reward?", href: "/learn/glossary/block-reward", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Mining?</h2>
      <p>
        Cryptocurrency mining is the process by which new transactions are verified and added to a proof-of-work blockchain. Miners use specialized computers to perform trillions of hash calculations per second, competing to find a value that meets the network&apos;s difficulty target. The first miner to find a valid solution broadcasts their block to the network and earns the block reward and transaction fees.
      </p>

      <h2 id="how-it-works">How Mining Works</h2>
      <p>
        A miner collects pending transactions from the mempool, assembles them into a candidate block, and repeatedly hashes the block header with different nonce values. Each hash produces a random-looking output. If the hash is below the current difficulty target, the block is valid. Because each hash is essentially a random guess, finding a valid one requires enormous computational effort. The difficulty adjusts to maintain consistent block times.
      </p>

      <h2 id="mining-hardware">Mining Hardware</h2>
      <p>
        Bitcoin mining has evolved from CPUs (2009) to GPUs (2010) to FPGAs (2011) to specialized ASICs (2013-present). Modern Bitcoin ASICs are purpose-built chips that perform SHA-256 hashing hundreds of trillions of times per second. Other cryptocurrencies use different algorithms designed to be ASIC-resistant, allowing GPU mining. The hardware arms race has made mining a capital-intensive industrial operation.
      </p>

      <h2 id="mining-pools">Mining Pools</h2>
      <p>
        Because finding a block solo is extremely unlikely for individual miners, most join mining pools. A pool combines the hash power of many miners and distributes rewards proportionally based on each miner&apos;s contribution. Pools reduce reward variance: instead of a tiny chance of a large reward, miners receive smaller, more frequent payouts. Major pools include Foundry, Antpool, and F2Pool.
      </p>

      <h2 id="economics">Mining Economics</h2>
      <p>
        Mining profitability depends on hardware efficiency, electricity costs, the current difficulty, the block reward, transaction fees, and the cryptocurrency&apos;s market price. After halving events reduce block rewards, miners must be more efficient or rely more on transaction fees. The most profitable operations are located where electricity is cheapest and often use the latest-generation ASIC hardware.
      </p>
    </LearnPageLayout>
  );
}
