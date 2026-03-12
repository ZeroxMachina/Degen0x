import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Friend.tech (FRIEND)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about Friend.tech (FRIEND), the SocialFi platform tokenizing social connections. Discover how it works, tokenomics, use cases, and how to buy FRIEND.",
};

export default function FriendsTechPage() {
  return (
    <LearnPageLayout title="What Is Friend.tech (FRIEND)? Price, Guide & How to Buy" categoryName="Investing" categorySlug="investing" readTime="8 min read" intro="Friend.tech is a SocialFi application built on Base that tokenizes social connections through tradeable 'keys' (formerly shares) tied to individual users. By purchasing someone's keys, holders gain access to private chat rooms with that person, creating a market for social access and influence. Friend.tech sparked the SocialFi narrative and generated massive trading volume during its initial launch." toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-friend-tech", title: "What Is Friend.tech?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-friend-tech-work", title: "How Does Friend.tech Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "friend-tokenomics", title: "FRIEND Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-friend", title: "How to Buy FRIEND", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]} faqs={[{question:"What is Friend.tech?",answer:"Friend.tech is a SocialFi app on Base where users buy and sell 'keys' tied to individuals, granting access to private chats and creating markets around social influence."},{question:"Where can I buy FRIEND?",answer:"FRIEND token is available on Uniswap (Base) and some centralized exchanges. Keys of individual users are purchased within the Friend.tech app."},{question:"Is Friend.tech a good investment?",answer:"Friend.tech pioneered SocialFi but user activity has declined significantly from peak levels. This is not financial advice. Do your own research."}]} relatedArticles={[{title:"Best Cryptos to Buy",href:"/investing/best/cryptos-to-buy",category:"Investing"},{title:"How to Invest in Crypto",href:"/investing/learn/how-to-invest-in-crypto",category:"Investing"},{title:"Base",href:"/investing/crypto/base",category:"Investing"}]}>
      <h2 id="what-is">What Is Friend.tech?</h2>
      <p>Friend.tech launched in August 2023 on Coinbase&apos;s Base network and quickly became one of the most viral crypto applications of the year. The platform introduced a bonding curve mechanism for social tokens, where the price of each user&apos;s keys increases as more people buy them and decreases as people sell. This created speculative markets around individual social influence, with popular crypto personalities seeing their keys trade at significant ETH values.</p>
      <p>The application attracted crypto Twitter influencers, traders, and content creators who saw an opportunity to monetize their social capital directly. At its peak, Friend.tech processed millions in daily trading volume and generated substantial protocol fees. The platform&apos;s V2 launch introduced clubs (group chats) and the FRIEND token, expanding beyond individual keys to community-level social tokens.</p>

      <h2 id="how-it-works">How Does Friend.tech Work?</h2>
      <p>Each Friend.tech user has keys that others can purchase using ETH on Base. Key prices follow a bonding curve that increases quadratically with supply, meaning early buyers get lower prices and later buyers pay exponentially more. Key holders gain access to a private chat room with the key subject. A 10% fee is charged on each key trade, split between the protocol and the key subject, incentivizing popular users to remain active on the platform.</p>
      <p>Friend.tech V2 introduced clubs, which function as group-based social tokens with their own bonding curves. Club keys grant access to group chats organized around topics or communities. The FRIEND token was airdropped to active users and serves as the governance and utility token for the broader Friend.tech ecosystem.</p>

      <h2 id="tokenomics">FRIEND Tokenomics</h2>
      <p>FRIEND was airdropped to early Friend.tech users based on their activity, including key trading volume, key holdings, and platform engagement. The token is used for governance over the Friend.tech protocol, potential fee sharing from platform revenue, and access to premium features. The airdrop rewarded the most active participants from Friend.tech&apos;s first season of usage, though distribution was concentrated among power users.</p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>Friend.tech enables tokenized social access through tradeable keys, direct monetization of social influence for creators, speculative trading on social capital and influence, private group communication through clubs and key-gated chats, and SocialFi experimentation combining social networks with financial incentives.</p>

      <h2 id="how-to-buy">How to Buy FRIEND</h2>
      <p>To buy FRIEND, bridge ETH to Base and swap for FRIEND on Uniswap or a Base DEX. To buy individual user keys, use the Friend.tech app directly with ETH on Base. Store FRIEND in MetaMask configured for the Base network.</p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>Friend.tech user activity and trading volume have declined significantly from peak levels. The SocialFi model faces sustainability questions as speculative interest wanes. Key prices are highly volatile and illiquid for less popular subjects. The platform&apos;s centralized control over the application introduces platform risk. Competition from other SocialFi protocols like Farcaster offers alternative approaches. Regulatory classification of social tokens is unclear.</p>
    </LearnPageLayout>
  );
}
