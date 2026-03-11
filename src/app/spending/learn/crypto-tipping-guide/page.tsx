import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Tipping Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn how to tip content creators, streamers, and service providers with cryptocurrency. Lightning tips, social media tipping, and platform guides.",
  keywords: ["crypto tipping", "bitcoin tips", "lightning tips"],
};

export default function CryptoTippingGuidePage() {
  return (
    <LearnPageLayout
      title="Crypto Tipping Guide"
      categoryName="Crypto Spending"
      categorySlug="spending"
      readTime="8 min"
      intro="Cryptocurrency tipping has emerged as a powerful way to support content creators, streamers, and service providers directly. With Lightning Network micropayments and social media tipping integrations, sending small crypto tips is fast, cheap, and accessible."
      toc={[
        { id: "lightning-tips", title: "Lightning Network Tipping", level: 2 },
        { id: "social-media", title: "Social Media Tipping", level: 2 },
        { id: "streaming", title: "Tipping Streamers and Creators", level: 2 },
        { id: "platforms", title: "Tipping Platforms and Tools", level: 2 },
      ]}
      faqs={[
        { question: "What is the cheapest way to tip crypto?", answer: "Lightning Network tips cost fractions of a cent regardless of tip size, making it practical to send tips as small as a few cents." },
        { question: "Can I tip on Twitter/X with Bitcoin?", answer: "Yes. X supports Bitcoin Lightning tips through the Tips feature. Users can add their Lightning address to their profile." },
        { question: "Do I owe taxes on crypto tips I receive?", answer: "Yes. Crypto tips received are generally considered taxable income. The fair market value at receipt should be reported." },
      ]}
      relatedArticles={[
        { title: "Bitcoin Lightning Payments", href: "/spending/learn/bitcoin-lightning-payments", category: "Spending" },
        { title: "Best P2P Crypto Payments", href: "/spending/best/peer-to-peer", category: "Spending" },
        { title: "Crypto Freelancer Payments", href: "/spending/learn/crypto-freelancer-payments", category: "Spending" },
      ]}
    >
      <section id="lightning-tips">
        <h2>Lightning Network Tipping</h2>
        <p>The Lightning Network has revolutionized crypto tipping by making micropayments practical. Before Lightning, sending a small Bitcoin tip cost more in transaction fees than the tip itself. Lightning tips cost fractions of a cent and confirm instantly, making it feasible to tip a few sats for a good tweet, article, or comment. Lightning addresses function like email addresses for receiving tips, providing a static endpoint anyone can send to.</p>
        <p>Setting up Lightning tipping is straightforward. Create a Lightning wallet, generate a Lightning address, and share it on your profiles. Popular Lightning wallets like Phoenix, Breez, and Wallet of Satoshi all support receiving tips via Lightning addresses. Some services offer customizable tipping pages with preset amounts and messages.</p>
      </section>

      <section id="social-media">
        <h2>Social Media Tipping</h2>
        <p>Several social media platforms have integrated crypto tipping features. X supports Bitcoin Lightning tips through its Tips feature. Nostr, the decentralized social protocol, has Lightning tipping built into its core design with zaps enabling one-click tips on any post. Reddit experimented with community tokens for tipping within subreddits.</p>
        <p>Third-party tipping services extend crypto tipping to platforms without native support. Alby is a Lightning browser extension that enables tipping across the web. These tools make it possible to receive crypto tips on any social media platform, blog, or website regardless of native crypto support.</p>
      </section>

      <section id="streaming">
        <h2>Tipping Streamers and Creators</h2>
        <p>Content creators and live streamers are natural beneficiaries of crypto tipping. Unlike traditional platforms that take 30-50% of tips as fees, crypto tips go directly to the creator with minimal intermediary fees. This is particularly impactful for smaller creators where platform fees represent a significant percentage of their income.</p>
        <p>Podcasters have adopted the value-for-value model where listeners stream sats while listening. Podcast apps like Fountain and Podverse support streaming payments that let listeners send fractions of a cent per minute. This creates a direct connection between consumption and compensation without advertising or subscriptions.</p>
      </section>

      <section id="platforms">
        <h2>Tipping Platforms and Tools</h2>
        <p>Several dedicated platforms facilitate crypto tipping. Geyser Fund enables Bitcoin crowdfunding and tipping for projects and creators. Stacker News rewards quality content with Lightning sats. Tallycoin and similar platforms let fans support creators with Bitcoin through customizable tipping pages, widgets, and embeds.</p>
        <p>For developers and open-source contributors, platforms like OpenSats accept and distribute crypto contributions. The ability to tip anonymously with crypto is particularly valued in the open-source community. Corporate tipping through crypto is also emerging, with some companies allowing employees to tip coworkers in small crypto amounts as recognition.</p>
      </section>
    </LearnPageLayout>
  );
}
