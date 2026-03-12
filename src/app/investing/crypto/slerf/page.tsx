import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Slerf (SLERF)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about Slerf (SLERF), the sloth-themed meme coin on Solana. Discover how it works, tokenomics, use cases, and how to buy SLERF.",
};

export default function SlerfPage() {
  return (
    <LearnPageLayout title="What Is Slerf (SLERF)? Price, Guide & How to Buy" categoryName="Investing" categorySlug="investing" readTime="8 min read" intro="Slerf (SLERF) is a sloth-themed meme coin on Solana that gained notoriety when its creator accidentally burned the presale liquidity pool tokens and the airdrop allocation. This mishap turned into a viral moment, and the community rallied around the token, transforming a catastrophic error into a compelling narrative." toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-slerf", title: "What Is Slerf?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-slerf-work", title: "How Does Slerf Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "slerf-tokenomics", title: "SLERF Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-slerf", title: "How to Buy SLERF", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]} faqs={[{question:"What is Slerf?",answer:"Slerf is a Solana meme coin that became famous after its creator accidentally burned the presale LP tokens and airdrop allocation. The community embraced the mishap, turning it into a viral narrative."},{question:"Where can I buy SLERF?",answer:"SLERF is available on Solana DEXes like Jupiter and Raydium, and has been listed on select centralized exchanges."},{question:"Is Slerf a good investment?",answer:"SLERF is a meme coin driven by its unique origin story and community. It has no underlying utility. This is not financial advice. Do your own research."}]} relatedArticles={[{title:"Best Cryptos to Buy",href:"/investing/best/cryptos-to-buy",category:"Investing"},{title:"How to Invest in Crypto",href:"/investing/learn/how-to-invest-in-crypto",category:"Investing"},{title:"Solana",href:"/investing/crypto/solana",category:"Investing"}]}>
      <h2 id="what-is">What Is Slerf?</h2>
      <p>Slerf (SLERF) is a sloth-themed meme coin that became one of the most memorable tokens in Solana's meme coin history due to a spectacular accident. The creator accidentally burned both the presale liquidity pool tokens and the tokens meant for airdrop, permanently locking liquidity and eliminating the planned airdrop distribution. This event went viral across crypto social media.</p>
      <p>Rather than killing the project, the accident created a unique narrative that attracted massive community support. The permanently locked liquidity was seen as an unintentional feature that protected against rug pulls, and the community rallied around the token's underdog story.</p>

      <h2 id="how-it-works">How Does Slerf Work?</h2>
      <p>SLERF is an SPL token on Solana with permanently locked liquidity due to the accidental burn of LP tokens. This means the core trading liquidity cannot be removed by anyone, providing a level of security against rug pulls. The token trades on DEXes and centralized exchanges through standard market mechanisms.</p>
      <p>The locked liquidity is both a feature and a limitation, as it cannot be adjusted or optimized, but it also provides confidence that the base liquidity will always remain available for trading.</p>

      <h2 id="tokenomics">SLERF Tokenomics</h2>
      <p>SLERF has a fixed supply on Solana with permanently locked initial liquidity. The accidental burn of airdrop tokens effectively reduced the circulating supply that would have been distributed. There are no vesting schedules or future emissions. The tokenomics are unique due to the circumstances of the launch.</p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>SLERF serves as a speculative trading asset, a community-driven meme token with a unique origin story, and a symbol of crypto culture's ability to turn mistakes into narratives. The token functions primarily as a trading vehicle within the Solana meme coin ecosystem.</p>

      <h2 id="how-to-buy">How to Buy SLERF</h2>
      <p>To buy SLERF, swap SOL for SLERF on Jupiter or Raydium on Solana. Check centralized exchanges for additional listings. Store in Phantom or any Solana wallet. Verify the contract address before trading.</p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>Despite locked liquidity, SLERF is still a speculative meme coin with no utility or revenue model. The novelty of its origin story may fade over time. Meme coins are extremely volatile and can lose most of their value. The token has no development roadmap or team building products on top of it. Market interest depends entirely on continued community engagement and meme coin market conditions.</p>
    </LearnPageLayout>
  );
}
