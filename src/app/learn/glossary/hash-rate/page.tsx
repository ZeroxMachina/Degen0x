import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Hash Rate? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what hash rate is, how it measures network security, and why it matters for proof-of-work blockchains.",
};

export default function HashRatePage() {
  return (
    <LearnPageLayout
      title="What Is Hash Rate?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="Hash rate measures the total computational power being used to mine and process transactions on a proof-of-work blockchain. It represents the number of hash calculations the network can perform per second. A higher hash rate means more miners are competing, making the network more secure and harder to attack. Bitcoin's hash rate is measured in exahashes per second (EH/s)."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-hash-rate", title: "What Is Hash Rate?", level: 2 },
        { id: "measurement", title: "measurement", level: 2 },
        { id: "how-hash-rate-is-measured", title: "How Hash Rate Is Measured", level: 2 },
        { id: "security", title: "security", level: 2 },
        { id: "hash-rate-and-security", title: "Hash Rate and Security", level: 2 },
        { id: "trends", title: "trends", level: 2 },
        { id: "hash-rate-trends", title: "Hash Rate Trends", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-hash-rate-matters", title: "Why Hash Rate Matters", level: 2 }
      ]}
      faqs={[
        {
          question: "Does a higher hash rate mean higher Bitcoin price?",
          answer:
            "Not directly. Hash rate reflects mining investment and network security, not price. However, the two are correlated over time: higher prices make mining more profitable, attracting more hash rate. Conversely, some argue that growing hash rate signals miner confidence, which can be a bullish indicator.",
        },
        {
          question: "What happens when hash rate drops suddenly?",
          answer:
            "When hash rate drops, blocks are produced more slowly until the next difficulty adjustment. This happened during China's mining ban in 2021, when Bitcoin's hash rate fell roughly 50%. The network continued operating but with slower block times until difficulty adjusted downward. The network recovered to new highs within months.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Mining?", href: "/learn/glossary/mining", category: "Glossary" },
        { title: "What Is Difficulty?", href: "/learn/glossary/difficulty", category: "Glossary" },
        { title: "What Is Proof of Work?", href: "/learn/glossary/pow", category: "Glossary" },
        { title: "What Is an ASIC?", href: "/learn/glossary/asic", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Hash Rate?</h2>
      <p>
        Hash rate is the speed at which a mining device or network performs cryptographic hash calculations. Each hash is essentially a guess at finding a valid block. The more hashes per second, the more guesses are being made. For a single miner, hash rate determines their probability of finding a block. For the network as a whole, total hash rate indicates the collective computational effort securing the chain.
      </p>

      <h2 id="measurement">How Hash Rate Is Measured</h2>
      <p>
        Hash rate is measured in hashes per second. Common units include kilohash (KH/s, thousands), megahash (MH/s, millions), gigahash (GH/s, billions), terahash (TH/s, trillions), petahash (PH/s, quadrillions), and exahash (EH/s, quintillions). Individual ASIC miners operate in the terahash range, while Bitcoin&apos;s total network hash rate is measured in exahashes, reflecting the enormous scale of global mining operations.
      </p>

      <h2 id="security">Hash Rate and Security</h2>
      <p>
        A higher hash rate makes 51% attacks exponentially more expensive. To attack Bitcoin, an adversary would need to control more than half the network&apos;s total hash power. At current levels, this would require billions of dollars in hardware and electricity, making it economically irrational. Hash rate is therefore the most direct measure of a proof-of-work blockchain&apos;s security.
      </p>

      <h2 id="trends">Hash Rate Trends</h2>
      <p>
        Bitcoin&apos;s hash rate has grown exponentially since its inception, driven by the evolution from CPU mining to GPUs, FPGAs, and finally specialized ASIC hardware. Temporary drops occur due to regulatory actions (like China&apos;s 2021 ban), halving events that reduce profitability, or seasonal energy cost fluctuations. Despite short-term dips, the long-term trend has been consistently upward.
      </p>

      <h2 id="why-it-matters">Why Hash Rate Matters</h2>
      <p>
        Hash rate is a key health metric for proof-of-work networks. It indicates the level of investment miners are making in securing the chain, the network&apos;s resistance to attack, and the competitiveness of the mining industry. Investors, analysts, and miners all monitor hash rate trends to assess network strength and anticipate mining economics changes.
      </p>
    </LearnPageLayout>
  );
}
