import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Bedrock (uniETH)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Bedrock (uniETH), the multi-asset liquid restaking protocol. Discover how it works, tokenomics, use cases, and how to buy uniETH.",
};

export default function BedrockPage() {
  return (
    <LearnPageLayout
      title="What Is Bedrock (uniETH)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Bedrock is a multi-asset liquid restaking protocol that issues uniETH, a liquid restaking token backed by diversified ETH staking and restaking strategies. Built in partnership with RockX, Bedrock provides a unified token that represents exposure to multiple restaking protocols, simplifying the restaking experience while maintaining DeFi composability across Ethereum and Layer 2 ecosystems."
      toc={[
        { id: "what-is", title: "What Is Bedrock?", level: 2 },
        { id: "how-it-works", title: "How Does Bedrock Work?", level: 2 },
        { id: "tokenomics", title: "uniETH Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy uniETH", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        { question: "What is Bedrock?", answer: "Bedrock is a multi-asset liquid restaking protocol issuing uniETH, a token representing diversified ETH restaking positions across multiple protocols for simplified yield and DeFi composability." },
        { question: "Where can I get uniETH?", answer: "uniETH can be obtained by depositing ETH through the Bedrock platform, or purchased on DEXs like Uniswap and Curve on Ethereum and Layer 2s." },
        { question: "Is Bedrock a good investment?", answer: "Bedrock provides diversified restaking exposure, but the restaking market carries compounded slashing risk. This is not financial advice. Do your own research." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Ethereum", href: "/investing/crypto/ethereum", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Bedrock?</h2>
      <p>
        Bedrock was developed in partnership with RockX, a professional blockchain infrastructure company, and has grown to manage billions in restaked assets. The protocol recognized that the restaking landscape (EigenLayer, Symbiotic, Karak, etc.) was becoming complex, with users needing to choose between multiple platforms and strategies. Bedrock simplifies this by offering uniETH as a diversified restaking token that allocates across multiple restaking protocols.
      </p>
      <p>
        Beyond ETH, Bedrock has expanded to support Bitcoin restaking through uniBTC, demonstrating its multi-asset approach to liquid restaking. The protocol&apos;s institutional backing and professional node operation provide enterprise-grade reliability for the underlying staking and restaking operations.
      </p>

      <h2 id="how-it-works">How Does Bedrock Work?</h2>
      <p>
        Users deposit ETH into Bedrock and receive uniETH tokens. The deposited ETH is staked on Ethereum and restaked across protocols like EigenLayer according to the protocol&apos;s allocation strategy. uniETH appreciates in value as staking rewards and restaking yields accumulate. The diversified allocation reduces concentration risk compared to restaking through a single protocol.
      </p>
      <p>
        Professional node operators managed by RockX handle the staking and restaking operations, including validator management, AVS selection on EigenLayer, and risk monitoring. uniETH tokens can be used across DeFi for lending, liquidity provision, and yield strategies. The protocol supports instant liquidity through DEX pool integrations alongside standard redemption with the unstaking queue.
      </p>

      <h2 id="tokenomics">uniETH Tokenomics</h2>
      <p>
        uniETH has an elastic supply based on total deposits. The exchange rate versus ETH increases as staking and restaking rewards accrue. Bedrock charges a management fee on yields to fund operations. There may be a separate governance token for protocol governance decisions. uniETH is available on Ethereum mainnet and multiple Layer 2 networks for maximum DeFi accessibility.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        uniETH serves as diversified restaking exposure in a single token, DeFi collateral with restaking yield, liquidity provision in restaking-focused pools, simplified access to the EigenLayer and broader restaking ecosystem, and institutional-grade managed restaking. The protocol is suited for users who want restaking exposure without managing complex multi-protocol positions.
      </p>

      <h2 id="how-to-buy">How to Buy uniETH</h2>
      <p>
        To get uniETH, deposit ETH through the Bedrock platform or purchase on Curve and Uniswap. uniETH is also available on Layer 2 DEXs. After acquiring, use uniETH in DeFi protocols for additional yield opportunities. Store uniETH in MetaMask or a hardware wallet.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        uniETH carries compounded risk from both Ethereum staking and restaking layers. Slashing events on either layer would reduce uniETH value. Smart contract risk spans Bedrock&apos;s own contracts and all integrated restaking protocols. The professional custody model introduces centralization around RockX&apos;s operations.
      </p>
      <p>
        Competition from other liquid restaking tokens (rsETH, pufETH, ezETH) fragments the market. Restaking yields may not justify the additional risk over simple liquid staking. Regulatory uncertainty around restaking products is significant. The uniETH/ETH peg could deviate during market stress or protocol incidents.
      </p>
    </LearnPageLayout>
  );
}
