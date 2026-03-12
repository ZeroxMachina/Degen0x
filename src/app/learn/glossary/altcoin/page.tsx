import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is an Altcoin? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what altcoins are, the major categories, how they differ from Bitcoin, and what to consider before investing. A comprehensive guide to alternative cryptocurrencies.",
};

export default function AltcoinPage() {
  return (
    <LearnPageLayout
      title="What Is an Altcoin?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="An altcoin is any cryptocurrency other than Bitcoin. The term combines 'alternative' and 'coin.' Altcoins range from major projects like Ethereum and Solana to thousands of smaller tokens. While some altcoins introduce genuine technological innovation, others are purely speculative. Understanding the altcoin landscape is essential for navigating crypto markets."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-an-altcoin", title: "What Is an Altcoin?", level: 2 },
        { id: "categories", title: "categories", level: 2 },
        { id: "categories-of-altcoins", title: "Categories of Altcoins", level: 2 },
        { id: "examples", title: "examples", level: 2 },
        { id: "notable-examples", title: "Notable Examples", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-altcoins-matter", title: "Why Altcoins Matter", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-of-altcoins", title: "Risks of Altcoins", level: 2 }
      ]}
      faqs={[
        {
          question: "Is Ethereum an altcoin?",
          answer:
            "Technically yes — any cryptocurrency that is not Bitcoin is classified as an altcoin. However, Ethereum is so large and established that many in the industry treat it as a distinct category alongside Bitcoin. Some use the term 'altcoin' only for coins outside the top two.",
        },
        {
          question: "Are altcoins a good investment?",
          answer:
            "Altcoins carry higher risk than Bitcoin but also offer potentially higher returns. Many altcoins have outperformed Bitcoin during bull markets, but the vast majority lose value over time. Thorough research, diversification, and only investing what you can afford to lose are essential.",
        },
        {
          question: "How many altcoins exist?",
          answer:
            "There are tens of thousands of altcoins, though only a few hundred have meaningful market caps, active development, and real utility. New tokens are created daily, but most fail or become inactive within months.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Bitcoin Dominance?", href: "/learn/glossary/bitcoin-dominance", category: "Glossary" },
        { title: "What Is a Memecoin?", href: "/learn/glossary/memecoin", category: "Glossary" },
        { title: "What Is Market Cap?", href: "/learn/glossary/market-cap", category: "Glossary" },
        { title: "What Is DeFi?", href: "/learn/glossary/defi", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is an Altcoin?</h2>
      <p>
        The term altcoin was coined in the early days of cryptocurrency when Bitcoin was the only established project. Every new cryptocurrency that launched after Bitcoin was considered an &quot;alternative coin.&quot; Over time, the altcoin ecosystem has grown to include thousands of projects with diverse purposes, technologies, and use cases.
      </p>
      <p>
        Some altcoins are built from scratch with entirely new blockchains, while others are tokens created on existing platforms like Ethereum. The distinction between coins (which have their own blockchain) and tokens (which are built on another chain) is an important subcategory within the altcoin space.
      </p>

      <h2 id="categories">Categories of Altcoins</h2>
      <p>
        Platform coins like Ethereum, Solana, and Avalanche power programmable blockchains for smart contracts and decentralized applications. Stablecoins like USDC and USDT maintain a stable value pegged to fiat currencies. DeFi tokens like UNI, AAVE, and CRV provide governance and utility within decentralized finance protocols.
      </p>
      <p>
        Privacy coins such as Monero and Zcash focus on transaction anonymity. Memecoins like Dogecoin and Shiba Inu are community-driven tokens often inspired by internet culture. Utility tokens provide access to specific services or platforms. Each category carries different risk profiles and investment characteristics.
      </p>

      <h2 id="examples">Notable Examples</h2>
      <p>
        Ethereum (ETH) is the largest altcoin and pioneered smart contract functionality. Solana (SOL) offers high-speed, low-cost transactions. Chainlink (LINK) provides decentralized oracle services. Polygon (MATIC) scales Ethereum with Layer 2 solutions. Each of these altcoins serves a distinct purpose in the broader ecosystem and has established significant market presence.
      </p>

      <h2 id="why-it-matters">Why Altcoins Matter</h2>
      <p>
        Altcoins drive innovation in the cryptocurrency space. While Bitcoin established digital scarcity and peer-to-peer value transfer, altcoins introduced smart contracts, decentralized finance, NFTs, cross-chain interoperability, and countless other features. Competition among altcoins pushes the entire ecosystem forward in terms of speed, cost, and functionality.
      </p>

      <h2 id="risks">Risks of Altcoins</h2>
      <p>
        Most altcoins are significantly more volatile than Bitcoin. Many projects fail, losing 90% or more of their value. Rug pulls and scams are more common among smaller altcoins. Altcoins also tend to be more heavily impacted during bear markets, with many never recovering their all-time highs. Thorough research and position sizing are critical.
      </p>
    </LearnPageLayout>
  );
}
