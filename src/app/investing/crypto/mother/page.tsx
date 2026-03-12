import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Mother Iggy (MOTHER)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about Mother Iggy (MOTHER), the celebrity-backed meme coin on Solana. Discover how it works, tokenomics, use cases, and how to buy MOTHER.",
};

export default function MotherIggyPage() {
  return (
    <LearnPageLayout title="What Is Mother Iggy (MOTHER)? Price, Guide & How to Buy" categoryName="Investing" categorySlug="investing" readTime="8 min read" intro="Mother Iggy (MOTHER) is a celebrity-backed meme coin on Solana associated with musician Iggy Azalea. The token represents a growing trend of celebrities and public figures launching their own crypto tokens, leveraging their existing fanbases to create community-driven digital assets." toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-mother-iggy", title: "What Is Mother Iggy?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-mother-iggy-work", title: "How Does Mother Iggy Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "mother-tokenomics", title: "MOTHER Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-mother", title: "How to Buy MOTHER", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]} faqs={[{question:"What is Mother Iggy?",answer:"Mother Iggy (MOTHER) is a Solana-based meme coin backed by musician Iggy Azalea. It combines celebrity influence with meme coin culture to build a community-driven token."},{question:"Where can I buy MOTHER?",answer:"MOTHER is available on Solana DEXes like Jupiter and Raydium, and has been listed on select centralized exchanges."},{question:"Is Mother Iggy a good investment?",answer:"MOTHER is a celebrity-driven meme coin with speculative value tied to continued celebrity engagement. Celebrity tokens carry unique risks. This is not financial advice. Do your own research."}]} relatedArticles={[{title:"Best Cryptos to Buy",href:"/investing/best/cryptos-to-buy",category:"Investing"},{title:"How to Invest in Crypto",href:"/investing/learn/how-to-invest-in-crypto",category:"Investing"},{title:"Solana",href:"/investing/crypto/solana",category:"Investing"}]}>
      <h2 id="what-is">What Is Mother Iggy?</h2>
      <p>Mother Iggy (MOTHER) is a Solana-based meme token launched by musician and cultural figure Iggy Azalea. The token taps into the celebrity coin trend where public figures leverage their social media following and cultural influence to create crypto communities. Iggy Azalea actively promoted the token across her social media platforms, driving initial interest and trading volume.</p>
      <p>The project represents the intersection of celebrity culture and decentralized finance, where fan engagement is tokenized and communities form around shared cultural affinity rather than technological utility.</p>

      <h2 id="how-it-works">How Does Mother Iggy Work?</h2>
      <p>MOTHER is an SPL token on Solana that trades through standard DEX mechanisms and centralized exchange listings. The token has no protocol-level utility beyond transfers and trading. Its market dynamics are driven by celebrity engagement, social media activity, and broader meme coin sentiment.</p>
      <p>The celebrity backing provides a unique marketing channel compared to anonymous meme coins, as the celebrity's existing fanbase provides a built-in audience for the token.</p>

      <h2 id="tokenomics">MOTHER Tokenomics</h2>
      <p>MOTHER has a defined total supply on Solana. The token distribution includes allocations that may be associated with the celebrity and team behind the project. Liquidity is maintained through Solana DEX pools and centralized exchange market makers. The specifics of insider allocations and vesting schedules should be researched before investing.</p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>MOTHER functions as a celebrity fan token, speculative trading asset, and community membership token. It may provide access to exclusive content, events, or interactions with the celebrity. The token represents a digital expression of fan community identity.</p>

      <h2 id="how-to-buy">How to Buy MOTHER</h2>
      <p>To buy MOTHER, swap SOL for MOTHER on Jupiter or Raydium DEX on Solana. Check centralized exchanges for additional listings. Store in Phantom or any Solana wallet. Verify the contract address before trading.</p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>Celebrity-backed tokens carry unique risks including potential loss of celebrity interest, reputational issues, and insider selling. MOTHER has no fundamental utility or revenue model. Celebrity engagement may be temporary, and once promotion ceases, trading interest often declines significantly. Regulatory scrutiny of celebrity token endorsements is increasing. Meme coin volatility applies to celebrity tokens as well.</p>
    </LearnPageLayout>
  );
}
