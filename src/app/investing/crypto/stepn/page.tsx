import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is STEPN (GMT)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about STEPN (GMT), the move-to-earn lifestyle app. Discover how it works, tokenomics, use cases, and how to buy GMT.",
};

export default function StepnPage() {
  return (
    <LearnPageLayout
      title="What Is STEPN (GMT)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="7 min read"
      intro="STEPN is a move-to-earn lifestyle app that rewards users with crypto tokens for walking, jogging, or running outdoors. Built on Solana with multi-chain support, STEPN combines fitness tracking with GameFi elements through NFT sneakers that generate token rewards based on physical activity."
      toc={[
        { id: "what-is", title: "What Is STEPN?", level: 2 },
        { id: "how-it-works", title: "How Does STEPN Work?", level: 2 },
        { id: "tokenomics", title: "GMT Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy GMT", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is STEPN?",
          answer: "STEPN is a move-to-earn app where users buy NFT sneakers and earn crypto rewards for physical activity like walking, jogging, or running.",
        },
        {
          question: "Where can I buy GMT?",
          answer: "GMT is available on Binance, Coinbase, OKX, and other major exchanges.",
        },
        {
          question: "Is STEPN a good investment?",
          answer: "STEPN pioneered move-to-earn but the model's sustainability is debated. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Gala Games", href: "/investing/crypto/gala", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is STEPN?</h2>
      <p>
        STEPN was founded by Yawn Rong and Jerry Huang and launched in late 2021, quickly becoming one of the most popular Web3 lifestyle apps. The app gamifies physical activity by rewarding users who walk, jog, or run while wearing GPS-tracked NFT sneakers. At its peak in early 2022, STEPN had millions of active users and generated substantial daily revenue through sneaker NFT sales and marketplace fees.
      </p>
      <p>
        The platform operates on multiple blockchains including Solana, BNB Chain, and Ethereum. Users must first purchase an NFT sneaker to begin earning, creating an upfront investment requirement. Different sneaker types are optimized for different speeds (walking, jogging, running), and sneaker attributes like efficiency and resilience affect earning potential and repair costs.
      </p>

      <h2 id="how-it-works">How Does STEPN Work?</h2>
      <p>
        Users equip NFT sneakers and track their outdoor movement through GPS. The app verifies genuine physical activity and rewards users with GST (Green Satoshi Token) for in-game utility and GMT for governance and premium features. Sneakers have energy limits that regenerate over time, preventing unlimited earning. Sneakers can be leveled up, repaired, and enhanced with gems to improve earning potential.
      </p>

      <h2 id="tokenomics">GMT Tokenomics</h2>
      <p>
        GMT has a maximum supply of 6 billion tokens. It is the governance token used for leveling sneakers past level 28, minting high-quality sneakers, voting on governance proposals, and accessing premium features. GST is the separate utility token earned through activity, used for repairs, leveling, and gem upgrades. GMT has a burning mechanism tied to high-level sneaker activities.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        STEPN rewards physical activity with crypto tokens, gamifies fitness through NFT sneaker progression, provides a social fitness community with achievement systems, and enables trading of sneaker NFTs on the marketplace. The app aims to promote healthy lifestyles while introducing mainstream users to Web3 concepts.
      </p>

      <h2 id="how-to-buy">How to Buy GMT</h2>
      <p>
        To buy GMT, register on Binance, Coinbase, or OKX. Complete identity verification, deposit funds, and purchase GMT tokens. To participate in the STEPN ecosystem, download the STEPN app and purchase an NFT sneaker through the in-app marketplace using SOL or other supported currencies.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        The move-to-earn model has been criticized as potentially unsustainable, relying on new user investment to fund existing user rewards. STEPN&apos;s user base and token prices declined dramatically from their 2022 peaks. The upfront cost of purchasing NFT sneakers creates a barrier and financial risk for new users. Competition from other fitness and lifestyle apps, both Web3 and traditional, adds pressure.
      </p>
      <p>
        Regulatory scrutiny of the move-to-earn model as a potential pyramid scheme has been raised in some jurisdictions. The dual-token model (GMT/GST) adds complexity. Long-term sustainability depends on the app maintaining an engaged user base willing to pay for sneakers and in-app features beyond pure earning motivation.
      </p>
    </LearnPageLayout>
  );
}
