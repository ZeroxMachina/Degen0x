import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a DEX? Decentralized Exchange Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what a DEX is, how decentralized exchanges work, popular DEXs, and the differences between DEXs and centralized exchanges.",
};

export default function DexPage() {
  return (
    <LearnPageLayout
      title="What Is a DEX (Decentralized Exchange)?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A DEX (Decentralized Exchange) is a cryptocurrency exchange that operates without a central authority, allowing users to trade directly from their wallets using smart contracts. Unlike centralized exchanges, DEXs do not custody your funds, do not require identity verification, and are accessible to anyone with a crypto wallet. Uniswap, Curve, and SushiSwap are among the most popular DEXs."
      toc={[
        { id: "definition", title: "What Is a DEX?", level: 2 },
        { id: "how-it-works", title: "How DEXs Work", level: 2 },
        { id: "dex-vs-cex", title: "DEX vs CEX", level: 2 },
        { id: "why-it-matters", title: "Why DEXs Matter", level: 2 },
        { id: "limitations", title: "Limitations", level: 2 },
      ]}
      faqs={[
        {
          question: "Do DEXs have fees?",
          answer:
            "Yes. DEX fees include a swap fee (typically 0.3% paid to liquidity providers) and blockchain gas fees for the transaction. Gas fees vary by network — Ethereum mainnet can be expensive during congestion, while Layer 2 networks and alternative chains offer much lower fees.",
        },
        {
          question: "Can I get rugged on a DEX?",
          answer:
            "While the DEX protocol itself is typically safe if well-audited, the tokens you trade on a DEX may not be. Anyone can list a token on a permissionless DEX, including scammers. Always verify token contract addresses through official sources and be cautious with unknown tokens.",
        },
      ]}
      relatedArticles={[
        { title: "What Is an AMM?", href: "/learn/glossary/amm", category: "Glossary" },
        { title: "What Is a Centralized Exchange?", href: "/learn/glossary/centralized-exchange", category: "Glossary" },
        { title: "What Is a Liquidity Pool?", href: "/learn/glossary/liquidity-pool", category: "Glossary" },
        { title: "What Is Slippage?", href: "/learn/glossary/slippage", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a DEX?</h2>
      <p>
        A decentralized exchange is a peer-to-peer marketplace that enables cryptocurrency trading without an intermediary. Trades are executed by smart contracts on a blockchain, and users maintain custody of their funds throughout the process. No accounts, identity verification, or deposits are needed — you simply connect your wallet and trade.
      </p>

      <h2 id="how-it-works">How DEXs Work</h2>
      <p>
        Most DEXs use an Automated Market Maker (AMM) model. Liquidity providers deposit pairs of tokens into pools. When you make a swap, you trade against the pool rather than a specific counterparty. The smart contract determines the exchange rate based on the ratio of tokens in the pool. Fees from trades are distributed to liquidity providers as compensation for the capital they provide.
      </p>

      <h2 id="dex-vs-cex">DEX vs CEX</h2>
      <p>
        DEXs offer self-custody (you hold your keys), permissionless access (no KYC), global availability, and full transparency. CEXs offer faster execution, lower fees, fiat on-ramps, advanced trading tools, and customer support. DEXs are better for privacy and security; CEXs are better for ease of use and trading features. Many users utilize both.
      </p>

      <h2 id="why-it-matters">Why DEXs Matter</h2>
      <p>
        DEXs embody the core principles of crypto — decentralization, self-custody, and permissionless access. They eliminate the counterparty risk of centralized exchanges (as demonstrated by the FTX collapse). They enable immediate listing of new tokens without gatekeeping. And they allow users anywhere in the world to access financial services without permission from any authority.
      </p>

      <h2 id="limitations">Limitations</h2>
      <p>
        DEXs can have higher costs (gas fees), more slippage for large trades, complex user interfaces, no fiat currency support, and vulnerability to front-running and sandwich attacks. Liquidity for smaller tokens can be thin, resulting in poor execution prices. The learning curve for managing wallets, gas fees, and token approvals remains a barrier for mainstream adoption.
      </p>
    </LearnPageLayout>
  );
}
