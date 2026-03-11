import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Layer-2 Investing Guide (${CURRENT_YEAR}) - L2 Tokens & Scaling | ${SITE_NAME}`,
  description: `Learn about Layer-2 investing in ${CURRENT_YEAR}. Understand rollups, L2 tokens like ARB and OP, how to evaluate L2 networks, and investment strategies for scaling solutions.`,
  alternates: { canonical: "/investing/learn/layer-2-investing" },
};

const toc = [
  { id: "what-are-l2s", title: "What Are Layer-2 Networks?", level: 2 },
  { id: "types-of-l2", title: "Types of Layer-2 Solutions", level: 2 },
  { id: "evaluating-l2s", title: "How to Evaluate L2 Investments", level: 2 },
  { id: "major-l2-tokens", title: "Major L2 Tokens and Ecosystems", level: 2 },
  { id: "investment-strategy", title: "L2 Investment Strategy", level: 2 },
];

const faqs = [
  { question: "What is the best Layer-2 to invest in?", answer: "There is no single best L2. Arbitrum has the largest ecosystem and TVL. Optimism's OP Stack powers Base and other chains, giving it broad infrastructure influence. zkSync and StarkNet offer zero-knowledge proof technology that may be superior long-term. Diversifying across multiple L2s reduces the risk of picking the wrong winner." },
  { question: "Do Layer-2 tokens have value?", answer: "L2 tokens derive value from governance rights over the protocol, fee revenue sharing (in some cases), and ecosystem growth. ARB and OP token holders govern their respective networks. As L2s capture more transaction fees, the value proposition of governance tokens strengthens. However, not all L2s have tokens, and fee revenue distribution varies." },
  { question: "What is the difference between optimistic and ZK rollups?", answer: "Optimistic rollups (Arbitrum, Optimism) assume transactions are valid and use a challenge period for disputes. ZK rollups (zkSync, StarkNet) use mathematical proofs to verify transaction validity. ZK rollups offer faster finality and better security guarantees but are more complex to build. Optimistic rollups are more mature with larger ecosystems today." },
  { question: "Will Layer-2s replace Ethereum?", answer: "Layer-2s are not designed to replace Ethereum but to extend it. Ethereum serves as the settlement and data availability layer while L2s handle execution at scale. This modular architecture means Ethereum and L2s are complementary. L2 success actually increases demand for Ethereum block space (for data posting), potentially benefiting ETH holders." },
  { question: "How do I use Layer-2 networks?", answer: "Bridge assets from Ethereum to an L2 using the official bridge or third-party bridges like Across or Stargate. Once on the L2, use the same wallets (MetaMask, Rabby) with lower gas fees. Access L2-native DeFi protocols, mint NFTs, and trade with near-instant confirmation times. Most L2s feel identical to Ethereum but faster and cheaper." },
];

const relatedArticles = [
  { title: "AI Crypto Tokens", href: "/investing/learn/ai-crypto-tokens", category: "Investing" },
  { title: "DeFi vs CeFi Investing", href: "/investing/learn/defi-vs-cefi-investing", category: "Investing" },
  { title: "Crypto Index Funds", href: "/investing/learn/crypto-index-funds", category: "Investing" },
];

export default function Layer2InvestingPage() {
  return (
    <LearnPageLayout
      title="Layer-2 Investing: Profiting from Ethereum Scaling"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="9 min"
      intro="Layer-2 scaling solutions have become one of the most important infrastructure categories in crypto. Networks like Arbitrum, Optimism, Base, and zkSync process millions of transactions at a fraction of Ethereum's cost while inheriting its security. This guide covers how L2s work, how to evaluate their investment potential, and strategies for positioning in the L2 ecosystem."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2 id="what-are-l2s">What Are Layer-2 Networks?</h2>
      <p>
        Layer-2 (L2) networks are blockchain scaling solutions that process transactions off
        Ethereum&apos;s main chain (Layer-1) while still relying on Ethereum for security and final
        settlement. They batch many transactions together and submit compressed proofs back to
        Ethereum, dramatically reducing the cost per transaction. Users get the same security
        guarantees as Ethereum but with fees that can be 10-100x cheaper and confirmation times
        measured in seconds rather than minutes.
      </p>
      <p>
        The L2 ecosystem has grown rapidly, with networks like Arbitrum, Optimism, and Base
        collectively processing more daily transactions than Ethereum itself. This growth
        reflects a fundamental shift in blockchain architecture from monolithic chains that
        do everything to modular systems where specialized layers handle different functions.
        L2s handle execution, Ethereum handles security and data availability, and the result
        is a more scalable overall system.
      </p>

      <h2 id="types-of-l2">Types of Layer-2 Solutions</h2>
      <p>
        Optimistic rollups are the most mature L2 technology. Arbitrum and Optimism use this
        approach, which processes transactions optimistically (assuming they are valid) and uses
        a challenge period where anyone can submit a fraud proof if they detect an invalid
        transaction. The trade-off is a 7-day withdrawal period to Ethereum, though third-party
        bridges can provide faster exits for a small fee.
      </p>
      <p>
        ZK (zero-knowledge) rollups use cryptographic proofs to mathematically verify the
        correctness of every transaction batch. Networks like zkSync, StarkNet, Scroll, and
        Linea use this approach. ZK rollups offer faster finality (no challenge period needed)
        and stronger security guarantees. They are more complex to develop but are considered
        the long-term superior technology. Both types ultimately settle on Ethereum and inherit
        its security properties.
      </p>

      <h2 id="evaluating-l2s">How to Evaluate L2 Investments</h2>
      <p>
        Total Value Locked (TVL) indicates how much capital users trust the L2 with. Active
        addresses and daily transactions show actual usage. Fee revenue demonstrates that users
        are willing to pay for the service. Developer activity and the number of deployed
        contracts show ecosystem growth. Sequencer revenue minus data posting costs to Ethereum
        represents the L2&apos;s profit margin and is the most fundamental value driver.
      </p>
      <p>
        Beyond metrics, evaluate the L2&apos;s technology roadmap, decentralization plan, and
        ecosystem composition. Is the sequencer decentralized or run by a single entity? What
        major DeFi protocols are deployed? Is there a unique ecosystem of applications not
        available elsewhere? The best L2 investments combine strong metrics, a credible
        decentralization path, and differentiated applications that attract users specifically
        to that network.
      </p>

      <h2 id="major-l2-tokens">Major L2 Tokens and Ecosystems</h2>
      <p>
        Arbitrum (ARB) has the largest DeFi ecosystem with flagship protocols like GMX, Radiant,
        and Camelot. Its Arbitrum Orbit technology allows developers to build custom L3 chains.
        Optimism (OP) powers the OP Stack, which is the technology behind Base (Coinbase&apos;s L2),
        Worldcoin, and other chains. This gives OP strategic influence over a growing superchain
        of interconnected networks.
      </p>
      <p>
        Base, while not having its own token, is backed by Coinbase and has rapidly grown its
        ecosystem. zkSync (ZK token) and StarkNet (STRK) represent the ZK rollup approach with
        different technology stacks. Polygon (POL) has transitioned to a broader ecosystem of
        ZK-powered chains. Each L2 has a distinct strategy, community, and application focus
        that creates different investment profiles.
      </p>

      <h2 id="investment-strategy">L2 Investment Strategy</h2>
      <p>
        A diversified L2 portfolio approach hedges against the uncertainty of which L2 will
        dominate. Consider allocating across the major categories: optimistic rollups (ARB, OP),
        ZK rollups (ZK, STRK), and infrastructure plays. Complement token holdings with active
        participation in L2 ecosystems through DeFi usage, which may qualify for future airdrops
        and incentive programs.
      </p>
      <p>
        Monitor L2 metrics closely using tools like L2Beat, which tracks TVL, risk assessments,
        and decentralization progress for all major L2s. The L2 sector is competitive, and market
        share shifts happen quickly. Set thresholds for rebalancing based on fundamental metrics
        rather than price alone. A declining share of transactions or developer activity on a
        specific L2 may warrant reducing exposure regardless of short-term token price performance.
      </p>
    </LearnPageLayout>
  );
}
