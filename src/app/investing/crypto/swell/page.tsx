import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Swell (SWELL)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn about Swell (SWELL), the liquid staking and restaking protocol. Discover how it works, tokenomics, use cases, and how to buy SWELL.",
};

export default function SwellPage() {
  return (
    <LearnPageLayout
      title="What Is Swell (SWELL)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Swell is a non-custodial liquid staking and restaking protocol on Ethereum that issues swETH (liquid staking token) and rswETH (liquid restaking token). Swell is also building its own Layer 2 chain using restaked ETH for security, creating a vertically integrated staking, restaking, and scaling platform within the Ethereum ecosystem."
      toc={[
        { id: "what-is", title: "What Is Swell?", level: 2 },
        { id: "how-it-works", title: "How Does Swell Work?", level: 2 },
        { id: "tokenomics", title: "SWELL Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy SWELL", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        { question: "What is Swell?", answer: "Swell is a liquid staking and restaking protocol offering swETH (staking) and rswETH (restaking) tokens, plus its own L2 chain secured by restaked ETH for integrated Ethereum scaling." },
        { question: "Where can I buy SWELL?", answer: "SWELL is available on Binance, OKX, and DEXs. swETH and rswETH are obtained by depositing ETH through the Swell platform." },
        { question: "Is Swell a good investment?", answer: "Swell offers both staking and restaking plus an L2 roadmap, but faces intense competition. This is not financial advice. Do your own research." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Ethereum", href: "/investing/crypto/ethereum", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Swell?</h2>
      <p>Swell was founded by Daniel Dizon and launched as a liquid staking protocol before expanding into restaking and Layer 2 infrastructure. The protocol offers two primary products: swETH for standard Ethereum liquid staking and rswETH for EigenLayer liquid restaking. Both tokens are designed for maximum DeFi composability and are widely integrated across lending platforms and DEXs.</p>
      <p>Swell is also building the Swell L2, a rollup chain that uses restaked ETH for security through EigenLayer&apos;s EigenDA for data availability. This creates a unique flywheel where staked and restaked ETH on Swell provides security for Swell&apos;s own Layer 2, and the Layer 2 generates activity that creates demand for Swell&apos;s staking products.</p>

      <h2 id="how-it-works">How Does Swell Work?</h2>
      <p>For liquid staking, users deposit ETH and receive swETH, which appreciates as Ethereum staking rewards accrue. For liquid restaking, users deposit ETH and receive rswETH, which earns both Ethereum staking and EigenLayer restaking yields. Professional node operators managed by Swell handle validator operations and AVS selection.</p>
      <p>The Swell L2 operates as a rollup using Polygon CDK and EigenDA, creating a DeFi-focused execution environment. The L2 uses rswETH and swETH as native collateral, encouraging deposits into Swell&apos;s staking products. The Swell Voyage incentive program rewards users with SWELL tokens for providing TVL and participating in the ecosystem.</p>

      <h2 id="tokenomics">SWELL Tokenomics</h2>
      <p>SWELL is the governance token with a total supply distributed through airdrops and ecosystem incentives. The token is used for governance over staking parameters, operator selection, L2 governance, and fee structures. SWELL holders may receive fee revenue sharing as the protocol matures. The token was distributed primarily to early depositors and ecosystem participants.</p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>Swell enables liquid Ethereum staking through swETH, liquid restaking through rswETH, DeFi composability with both tokens across major protocols, Layer 2 execution with restaking-secured infrastructure, and integrated yield strategies combining staking, restaking, and L2 DeFi yields.</p>

      <h2 id="how-to-buy">How to Buy SWELL</h2>
      <p>To buy SWELL, check Binance, OKX, or DEXs for available pairs. To obtain swETH or rswETH, deposit ETH through the Swell platform. Store tokens in MetaMask or a hardware wallet.</p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>Swell faces intense competition in both liquid staking (Lido, Rocket Pool) and liquid restaking (EtherFi, Kelp, Renzo). The L2 roadmap adds execution risk and requires building an ecosystem from scratch. Compounded restaking risks affect rswETH holders. Smart contract risk spans Swell&apos;s contracts, EigenLayer, and the L2 infrastructure. Token unlock schedules and distribution create selling pressure.</p>
    </LearnPageLayout>
  );
}
