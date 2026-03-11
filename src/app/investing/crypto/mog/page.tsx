import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Mog Coin (MOG)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Mog Coin (MOG), the Ethereum meme coin inspired by internet mogger culture. Discover MOG tokenomics and how to buy.",
};

export default function MogCoinPage() {
  return (
    <LearnPageLayout
      title="What Is Mog Coin (MOG)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Mog Coin (MOG) is an Ethereum-based meme coin inspired by internet 'mogger' culture, a term used to describe someone who dominates or outshines others. Launched in 2023, MOG has built a cult-like following within crypto meme communities and became one of the top-performing meme tokens on Ethereum."
      toc={[
        { id: "what-is", title: "What Is Mog Coin?", level: 2 },
        { id: "how-it-works", title: "How Does Mog Coin Work?", level: 2 },
        { id: "tokenomics", title: "MOG Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy MOG", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Mog Coin?",
          answer:
            "Mog Coin (MOG) is an Ethereum meme token themed around internet 'mogger' culture. It features cat imagery with sunglasses and has become one of the top meme coins on Ethereum by market capitalization.",
        },
        {
          question: "Where can I buy MOG?",
          answer:
            "MOG is available on exchanges like Coinbase, KuCoin, and Gate.io. It can also be swapped on Uniswap using ETH.",
        },
        {
          question: "Is Mog Coin a good investment?",
          answer:
            "MOG is a speculative meme coin with no formal utility. It has shown strong community growth, but like all meme tokens, its value is sentiment-driven and highly volatile.",
        },
      ]}
      relatedArticles={[
        {
          title: "Best Cryptos to Buy",
          href: "/investing/best/cryptos-to-buy",
          category: "Investing",
        },
        {
          title: "How to Invest in Crypto",
          href: "/investing/learn/how-to-invest-in-crypto",
          category: "Investing",
        },
      ]}
    >
      <section id="what-is">
        <h2>What Is Mog Coin?</h2>
        <p>
          Mog Coin (MOG) is an Ethereum-based meme cryptocurrency that draws its branding from the internet slang term "mogging," which refers to dominating or outperforming someone. The token features a cat wearing sunglasses as its mascot, blending cat meme culture with the alpha-mentality aesthetic popular in online communities. MOG launched in mid-2023 and has since developed a dedicated community known for aggressive marketing and cultural engagement.
        </p>
        <p>
          The project has no formal utility or development roadmap but has gained notable traction through organic community growth, social media virality, and its distinctive brand identity within the crowded Ethereum meme coin landscape.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How Does Mog Coin Work?</h2>
        <p>
          MOG is an ERC-20 token on the Ethereum blockchain. It uses no custom smart contract logic beyond standard token functionality. Transactions are processed and secured by Ethereum's proof-of-stake consensus. The project includes a transaction tax mechanism that redistributes a small percentage of each trade to existing holders and burns a portion, creating deflationary pressure. This tax-on-transfer model incentivizes holding over frequent trading and gradually reduces the total supply over time.
        </p>
      </section>

      <section id="tokenomics">
        <h2>MOG Tokenomics</h2>
        <p>
          MOG launched with a total supply of approximately 390 trillion tokens. The tokenomics include a built-in tax on transactions that funds redistribution to holders and token burns. Liquidity pool tokens were burned at launch to permanently lock liquidity. The large nominal supply creates a very low per-token price, which is a common strategy in meme coins to attract retail investors who prefer owning millions or billions of tokens. Over time, the burn mechanism reduces the total supply, theoretically increasing scarcity.
        </p>
      </section>

      <section id="use-cases">
        <h2>Key Use Cases</h2>
        <p>
          MOG is primarily used as a speculative trading asset and community membership token. It serves as a cultural identifier within the mogger meme community, a tradable asset on Ethereum DEXs and centralized exchanges, and a vehicle for holder rewards through its redistribution mechanism. The community has created merchandise, social media content, and cultural artifacts around the MOG brand. Some DeFi protocols have integrated MOG into liquidity pools and yield farming opportunities.
        </p>
      </section>

      <section id="how-to-buy">
        <h2>How to Buy MOG</h2>
        <p>
          MOG can be purchased on centralized exchanges including Coinbase, KuCoin, and Gate.io. For decentralized trading, Uniswap on Ethereum provides the primary liquidity. To buy on Uniswap, connect your wallet, ensure you have ETH for the swap and gas fees, and exchange ETH for MOG. Be aware that the transaction tax will apply to on-chain trades. For lower-fee alternatives, check if MOG is available on Layer 2 exchanges. Store MOG in any Ethereum-compatible wallet such as MetaMask or a Ledger hardware wallet.
        </p>
      </section>

      <section id="risks">
        <h2>Risks and Considerations</h2>
        <p>
          MOG carries significant risk as a meme coin with no underlying utility or revenue generation. The transaction tax, while beneficial for holders, can discourage trading activity and reduce liquidity. Ethereum gas fees make small trades expensive, potentially limiting participation from smaller investors. The enormous total supply requires substantial and sustained demand to drive meaningful price appreciation. Competition from other meme coins, shifting cultural trends, and potential regulatory scrutiny of speculative tokens are ongoing risk factors.
        </p>
      </section>
    </LearnPageLayout>
  );
}
