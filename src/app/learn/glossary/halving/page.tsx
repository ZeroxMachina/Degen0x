import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Halving? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what Bitcoin halving is, how it affects supply and price, and why it is one of the most anticipated events in crypto.",
};

export default function HalvingPage() {
  return (
    <LearnPageLayout
      title="What Is Halving?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="Halving is an event where the reward for mining new blocks is cut in half, reducing the rate at which new coins are created. Bitcoin's halving occurs every 210,000 blocks (roughly every four years). This mechanism enforces Bitcoin's fixed supply of 21 million coins and creates a predictable disinflationary monetary policy. Halvings are among the most closely watched events in the cryptocurrency market."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-halving", title: "What Is Halving?", level: 2 },
        { id: "bitcoin-halvings", title: "bitcoin-halvings", level: 2 },
        { id: "bitcoin-halving-history", title: "Bitcoin Halving History", level: 2 },
        { id: "price-impact", title: "price-impact", level: 2 },
        { id: "price-impact", title: "Price Impact", level: 2 },
        { id: "miner-economics", title: "miner-economics", level: 2 },
        { id: "impact-on-miners", title: "Impact on Miners", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-halving-matters", title: "Why Halving Matters", level: 2 }
      ]}
      faqs={[
        {
          question: "When is the next Bitcoin halving?",
          answer:
            "Bitcoin halvings occur every 210,000 blocks. The most recent halving was in April 2024, reducing the block reward from 6.25 BTC to 3.125 BTC. The next halving is expected around 2028. After all 32 halvings are complete (estimated around 2140), no new Bitcoin will be created.",
        },
        {
          question: "Does halving always cause a price increase?",
          answer:
            "Historically, Bitcoin's price has risen significantly in the 12-18 months following each halving. However, past performance does not guarantee future results. The market increasingly prices in halvings ahead of time, and each cycle has different macroeconomic conditions. The supply reduction is real, but its price impact depends on demand dynamics.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Mining?", href: "/learn/glossary/mining", category: "Glossary" },
        { title: "What Is Block Reward?", href: "/learn/glossary/block-reward", category: "Glossary" },
        { title: "What Is Bitcoin Dominance?", href: "/learn/glossary/bitcoin-dominance", category: "Glossary" },
        { title: "What Is Difficulty?", href: "/learn/glossary/difficulty", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Halving?</h2>
      <p>
        A halving is a programmed event in a cryptocurrency&apos;s protocol that reduces the block reward by 50%. In Bitcoin, miners receive newly minted BTC for each block they successfully mine. Halving cuts this reward in half, slowing the rate of new supply entering the market. This mechanism is hardcoded into Bitcoin&apos;s protocol and cannot be changed without consensus from the network.
      </p>

      <h2 id="bitcoin-halvings">Bitcoin Halving History</h2>
      <p>
        Bitcoin launched with a 50 BTC block reward in 2009. The first halving in November 2012 reduced it to 25 BTC. The second in July 2016 reduced it to 12.5 BTC. The third in May 2020 reduced it to 6.25 BTC. The fourth in April 2024 reduced it to 3.125 BTC. This process will continue until approximately the year 2140, when the last fraction of Bitcoin is mined.
      </p>

      <h2 id="price-impact">Price Impact</h2>
      <p>
        Each halving reduces the daily new supply of Bitcoin. If demand remains constant or grows while new supply is halved, basic economics suggests upward price pressure. Historically, significant bull runs have followed halvings, though with varying timelines. The narrative around halving as a bullish catalyst has itself become a self-reinforcing factor in market psychology.
      </p>

      <h2 id="miner-economics">Impact on Miners</h2>
      <p>
        Halvings directly cut miner revenue from block rewards in half overnight. Miners with higher operating costs may become unprofitable and shut down, temporarily reducing hash rate. The network self-corrects through difficulty adjustments, and transaction fees become an increasingly important revenue source. Each halving tests the mining industry and drives efficiency improvements.
      </p>

      <h2 id="why-it-matters">Why Halving Matters</h2>
      <p>
        Halving is the mechanism that enforces Bitcoin&apos;s scarcity. Unlike fiat currencies where central banks can print unlimited money, Bitcoin&apos;s supply schedule is fixed and transparent. Halving events create a predictable reduction in inflation that distinguishes Bitcoin from every traditional monetary system. This programmatic scarcity is central to Bitcoin&apos;s value proposition as digital gold.
      </p>
    </LearnPageLayout>
  );
}
