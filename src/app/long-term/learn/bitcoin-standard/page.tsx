import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `The Bitcoin Standard: Why Bitcoin as a Store of Value (${CURRENT_YEAR}) | degen0x`,
  description: "Understanding Bitcoin as a store of value. The Bitcoin Standard thesis, monetary properties, scarcity mechanics, and why Bitcoiners see it as digital gold.",
};

export default function BitcoinStandardPage() {
  return (
    <LearnPageLayout title="The Bitcoin Standard: Why Bitcoin as a Store of Value" categoryName="Long-Term Strategies" categorySlug="long-term" readTime="9 min read"
      intro="The Bitcoin Standard thesis argues that Bitcoin's fixed supply, decentralization, and censorship resistance make it the hardest money ever created, positioning it to serve as a global store of value and eventually a reserve asset. This thesis draws on Austrian economics, monetary history, and network theory to explain why a purely digital asset with no intrinsic use could become the foundation of a new monetary system."
      toc={[
        { id: "monetary-properties", title: "monetary-properties", level: 2 },
        { id: "bitcoin", title: "Bitcoin", level: 2 }
      ]}
      faqs={[
        { question: "What is the Bitcoin Standard?", answer: "The Bitcoin Standard is both a book by Saifedean Ammous and an investment thesis. It argues that Bitcoin's monetary properties (fixed supply, divisibility, portability, durability, verifiability, and decentralization) make it superior to gold and fiat currency as a store of value. Proponents believe Bitcoin will absorb significant value from gold, bonds, and real estate over time." },
        { question: "Why is Bitcoin compared to gold?", answer: "Bitcoin shares key properties with gold: scarcity (limited supply), durability (the network has operated since 2009 without downtime), and resistance to confiscation. However, Bitcoin improves on gold in portability (can be sent globally in minutes), divisibility (down to 0.00000001 BTC), and verifiability (anyone can verify the total supply). This is why Bitcoin is often called digital gold." },
        { question: "Can Bitcoin really become a reserve asset?", answer: "It is already happening gradually. Companies like MicroStrategy hold Bitcoin on their balance sheets. Nations like El Salvador have adopted Bitcoin as legal tender. Bitcoin ETFs have attracted billions in institutional capital. Whether Bitcoin becomes a global reserve asset alongside or replacing gold depends on continued adoption, regulatory acceptance, and the network maintaining its security and decentralization." }
      ]}
      relatedArticles={[
        { title: "The Ethereum Investment Thesis", href: "/long-term/learn/ethereum-investment-thesis", category: "Long-Term" },
        { title: "Bitcoin ETF Guide", href: "/long-term/learn/bitcoin-etf-guide", category: "Long-Term" },
        { title: "Stacking Sats", href: "/long-term/learn/stacking-sats", category: "Long-Term" }
      ]}
    >
      <h2 id="monetary-properties">Bitcoin&apos;s Monetary Properties</h2>
      <p>Money serves three functions: store of value, medium of exchange, and unit of account. Bitcoin&apos;s proponents argue it excels at the first and will eventually fulfill all three. As a store of value, Bitcoin has key advantages. Its supply is absolutely fixed at 21 million coins, enforced by code and consensus. No government, company, or individual can create more Bitcoin. This is unprecedented in monetary history: even gold&apos;s supply increases by approximately 1.5% annually through mining. Bitcoin is also perfectly divisible (each Bitcoin contains 100 million satoshis), easily portable (you can carry billions of dollars in a wallet on your phone or in your memory with a seed phrase), durable (the network has maintained 99.98% uptime since 2009), and verifiable (anyone can audit the total supply by running a node). These properties combined create what advocates describe as the hardest money in human history: money that cannot be debased, confiscated, or counterfeited.</p>

      <h2 id="scarcity">Digital Scarcity and Halvings</h2>
      <p>Bitcoin&apos;s supply schedule is the cornerstone of its monetary thesis. New Bitcoin is created through mining rewards, which halve approximately every four years. The initial reward was 50 BTC per block, reduced to 25 in 2012, 12.5 in 2016, 6.25 in 2020, and 3.125 in 2024. This halving schedule means the rate of new supply issuance decreases exponentially, making Bitcoin increasingly scarce. By 2140, all 21 million Bitcoin will have been mined. Currently, over 19.5 million Bitcoin exist, meaning more than 93% of the total supply has already been created. The stock-to-flow model, popularized by the analyst PlanB, uses this scarcity metric to value Bitcoin by comparing existing supply (stock) to annual production (flow). While the model has been debated, the underlying concept is sound: decreasing new supply combined with increasing demand creates upward price pressure. Each halving cycle has historically preceded significant price appreciation, though past performance does not guarantee future results.</p>

      <h2 id="store-of-value">The Store of Value Argument</h2>
      <p>The global store of value market is enormous. Gold represents approximately thirteen trillion dollars, global real estate is estimated at over three hundred trillion dollars, and global bond markets exceed one hundred trillion dollars. Bitcoin&apos;s current market capitalization is a fraction of these markets. The Bitcoin Standard thesis argues that Bitcoin will capture a meaningful share of these stores of value because it is superior on key metrics. Compared to gold, Bitcoin is easier to store, transport, divide, and verify. Compared to real estate, Bitcoin is more liquid, more portable, and not subject to property taxes or maintenance costs. Compared to bonds, Bitcoin cannot be debased by central bank money printing. If Bitcoin captures even 10% of gold&apos;s market, each Bitcoin would be worth significantly more than current prices. This asymmetric upside is what attracts long-term investors: the potential loss is capped at your investment, but the potential gain is orders of magnitude larger. The adoption curve is still early, similar to the internet in the late 1990s.</p>

      <h2 id="risks">Risks to the Thesis</h2>
      <p>The Bitcoin Standard thesis is not without significant risks. Regulatory risk remains: governments could ban Bitcoin transactions, making it difficult to use in practice. Mining centralization could compromise the network&apos;s decentralization, especially as mining concentrates in regions with the cheapest electricity. A critical bug in Bitcoin&apos;s code, while increasingly unlikely given years of review, could undermine trust. Quantum computing could eventually threaten Bitcoin&apos;s cryptographic foundations, though solutions are being researched and the timeline for quantum threats is uncertain. Competition from other cryptocurrencies, central bank digital currencies, or entirely new technologies could diminish Bitcoin&apos;s value proposition. The energy consumption debate could lead to restrictions in environmentally conscious jurisdictions. Perhaps the most fundamental risk is that the thesis is simply wrong: that a digital asset without intrinsic use, government backing, or physical form cannot serve as a meaningful store of value over the long term. Investors should size their Bitcoin positions to reflect both the potential upside and these material risks.</p>
    </LearnPageLayout>
  );
}
