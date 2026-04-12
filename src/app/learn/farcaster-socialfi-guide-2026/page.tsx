import { Metadata } from "next";
import Link from "next/link";
import { ArticleStructuredData, FAQStructuredData } from "@/components/StructuredData";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Farcaster & SocialFi Guide 2026 — Decentralized Social Media on Crypto | degen0x",
  description:
    "Complete guide to Farcaster, the leading decentralized social protocol. Learn about Frames, Mini Apps, the Neynar acquisition, SocialFi economics, and how Web3 social works in 2026.",
  keywords: [
    "farcaster",
    "farcaster guide",
    "socialfi",
    "socialfi guide 2026",
    "warpcast",
    "farcaster frames",
    "farcaster mini apps",
    "decentralized social media",
    "web3 social",
    "neynar farcaster",
    "farcaster protocol",
    "crypto social network",
  ],
  openGraph: {
    title: "Farcaster & SocialFi: The Complete Guide for 2026",
    description:
      "How Farcaster is building decentralized social media with Frames, Mini Apps, and a $240M+ funded vision for Web3 social.",
    url: "https://degen0x.com/learn/farcaster-socialfi-guide-2026",
    type: "article",
    publishedTime: "2026-03-17T00:00:00Z",
    modifiedTime: "2026-03-17T00:00:00Z",
    authors: ["degen0x Team"],
    images: [
      {
        url: "https://degen0x.com/api/og?title=Farcaster+%26+SocialFi+Guide+2026&category=Learn&type=learn",
        width: 1200,
        height: 630,
        alt: "Farcaster & SocialFi Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farcaster & SocialFi Guide 2026 | degen0x",
    description:
      "Decentralized social media meets crypto — Frames, Mini Apps, and the future of Web3 social.",
    images: [
      {
        url: "https://degen0x.com/api/og?title=Farcaster+%26+SocialFi+Guide+2026&category=Learn&type=learn",
        width: 1200,
        height: 630,
        alt: "Farcaster & SocialFi Guide 2026",
      },
    ],
  },
};

export default function FarcasterSocialFiGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ label: "Learn", href: "/learn" }, { label: "Farcaster & SocialFi Guide 2026" }]} />

      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-xs px-3 py-1 rounded-full font-bold" style={{ background: "#8b5cf620", color: "#8b5cf6" }}>
            SocialFi
          </span>
          <span className="text-xs px-3 py-1 rounded-full font-bold" style={{ background: "#3b82f620", color: "#3b82f6" }}>
            Intermediate
          </span>
          <span className="text-xs px-3 py-1 rounded-full font-bold" style={{ background: "#22c55e20", color: "#22c55e" }}>
            Updated March 2026
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "var(--color-text)", lineHeight: "1.2" }}>
          Farcaster & SocialFi: The Complete Guide to Decentralized Social Media
        </h1>
        <p className="text-lg" style={{ color: "var(--color-text-secondary)", lineHeight: "1.7" }}>
          Farcaster is the most well-funded attempt to build decentralized social media on crypto rails. With $240M+ in combined funding, innovations like Frames (interactive mini-apps inside posts), and a recent acquisition by infrastructure company Neynar, it represents the bleeding edge of what happens when social networking meets blockchain. Here&apos;s everything you need to know about Farcaster, SocialFi, and where Web3 social stands in 2026.
        </p>
      </div>

      {/* Key Stats */}
      <div className="glass rounded-xl p-5 mb-8" style={{ borderLeft: "4px solid #8b5cf6" }}>
        <h2 className="text-sm font-extrabold mb-3 uppercase tracking-wide" style={{ color: "#8b5cf6" }}>
          📊 Farcaster Stats (March 2026)
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" role="list" aria-label="Farcaster protocol statistics">
          {[
            { label: "Peak DAU", value: "~80K" },
            { label: "Current DAU", value: "40-60K" },
            { label: "Total Funding", value: "$240M+" },
            { label: "Farcaster Pro Revenue", value: "$1.2M (first 6 hrs)" },
            { label: "Creator Rewards", value: "$25K+/week" },
            { label: "Acquisition", value: "Neynar (Jan 2026)" },
          ].map((s) => (
            <div key={s.label} role="listitem" aria-label={`${s.label}: ${s.value}`} className="p-3 rounded-lg" style={{ background: "var(--glass-bg)", border: "1px solid var(--color-border)" }}>
              <div className="text-xs" style={{ color: "var(--color-text-secondary)" }}>{s.label}</div>
              <div className="text-sm font-bold" style={{ color: "var(--color-text)" }}>{s.value}</div>
            </div>        ))}


        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-17"
          updatedDate="2026-03-17"
          readingTime={3}
          section="learn"
        />


        </div>
      </div>

      <div style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>

        {/* Section 1: What Is Farcaster */}
        <h2 className="text-xl font-extrabold mt-8 mb-3" style={{ color: "var(--color-text)" }}>
          What Is Farcaster?
        </h2>
        <p className="mb-4">
          Farcaster is a decentralized social media protocol where your identity, social graph (who you follow), and content are stored on a network of peer-to-peer nodes called <strong>Hubs</strong> rather than on a single company&apos;s servers. Think of it like email — the protocol is open, and anyone can build a client (app) on top of it, just like Gmail and Outlook are different clients for the same email protocol.
        </p>
        <p className="mb-4">
          The most popular client was originally called Warpcast (now rebranded to Farcaster after the Neynar acquisition). Users sign up with an Ethereum wallet, register a unique username onchain, and can then post &quot;casts&quot; (the Farcaster equivalent of tweets), follow other users, and interact with content. The key difference from Twitter/X: your data is portable. If you don&apos;t like the Farcaster app, you can take your followers and content to any other client built on the protocol.
        </p>

        {/* Architecture Box */}
        <div className="glass rounded-xl p-5 my-6" style={{ border: "1px solid var(--color-border)" }}>
          <h3 className="text-sm font-bold mb-3" style={{ color: "var(--color-text)" }}>How Farcaster&apos;s Architecture Works</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            {[
              { icon: "🔑", title: "Onchain Identity", desc: "Ethereum-based registration with cryptographic key pairs — you own your identity" },
              { icon: "🌐", title: "Hub Network", desc: "Decentralized nodes store and relay messages — no single point of failure" },
              { icon: "📱", title: "Client Apps", desc: "Multiple apps (Farcaster, Supercast, etc.) read from the same protocol" },
            ].map((step) => (
              <div key={step.title} className="p-3 rounded-lg" style={{ background: "var(--glass-bg)" }}>
                <div className="text-2xl mb-1">{step.icon}</div>
                <div className="text-xs font-bold" style={{ color: "var(--color-text)" }}>{step.title}</div>
                <div className="text-xs mt-1" style={{ color: "var(--color-text-secondary)" }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Frames & Mini Apps */}
        <h2 className="text-xl font-extrabold mt-8 mb-3" style={{ color: "var(--color-text)" }}>
          Frames & Mini Apps: Farcaster&apos;s Killer Feature
        </h2>
        <p className="mb-4">
          Frames launched in January 2024 and immediately changed Farcaster&apos;s trajectory. A Frame turns any cast into an interactive mini-application — you can mint NFTs, play games, take polls, make payments, or check out products without ever leaving your social feed. Frames triggered a 400% spike in daily active users within one week, jumping from ~5,000 to over 24,700 DAU.
        </p>
        <p className="mb-4">
          In 2025, Frames evolved into <strong>Frames v2</strong>, rebranded as <strong>Mini Apps</strong>. These are full-screen applications with onchain transactions, push notifications, and persistent state — essentially turning Farcaster into a mini app platform similar to WeChat mini-programs, but powered by crypto. Mini Apps gained a dedicated app store within the Farcaster client, and October 2025 brought BNB Chain integration to tap into its 4.7 million daily active users.
        </p>
        <p className="mb-4">
          For developers, Frames and Mini Apps represent one of the most accessible onramps to build crypto-native social experiences. You can build a Frame with basic HTML knowledge and progressively add onchain functionality using Farcaster&apos;s EdDSA authentication system — no wallet drain risk, no complex signing flows.
        </p>

        {/* Section 3: SocialFi Landscape */}
        <h2 className="text-xl font-extrabold mt-8 mb-3" style={{ color: "var(--color-text)" }}>
          The SocialFi Landscape in 2026
        </h2>
        <p className="mb-4">
          SocialFi — the intersection of social media and decentralized finance — encompasses a broad range of experiments in crypto-native social. The core premise: users should own their data, monetize their content directly, and participate in the economic value they create on social platforms. In 2026, the space is dominated by two major players.
        </p>
        <div className="overflow-x-auto glass rounded-lg p-4 mb-6" style={{ border: "1px solid var(--color-border)" }}>
          <table className="w-full text-xs" style={{ color: "var(--color-text)" }} aria-label="Comparison of Farcaster and Lens Protocol">
            <thead>
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                <th scope="col" className="text-left py-2 px-2 font-bold">Feature</th>
                <th scope="col" className="text-left py-2 px-2 font-bold">Farcaster</th>
                <th scope="col" className="text-left py-2 px-2 font-bold">Lens Protocol</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Funding", farcaster: "$150M+ (a]6z led)", lens: "$90M+ (Aave-backed)" },
                { feature: "Chain", farcaster: "Ethereum + OP Stack", lens: "Polygon → ZKsync Era" },
                { feature: "Peak DAU", farcaster: "~80K", lens: "~30K" },
                { feature: "Killer Feature", farcaster: "Frames / Mini Apps", lens: "Open Actions / Momoka" },
                { feature: "Monetization", farcaster: "Farcaster Pro ($120/yr)", lens: "Creator collects" },
                { feature: "Data Model", farcaster: "Hub network (off-chain)", lens: "Fully onchain profiles" },
                { feature: "Status (2026)", farcaster: "Acquired by Neynar", lens: "Independent, building Lens v3" },
              ].map((row) => (
                <tr key={row.feature} style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td className="py-2 px-2 font-semibold">{row.feature}</td>
                  <td className="py-2 px-2" style={{ color: "#8b5cf6" }}>{row.farcaster}</td>
                  <td className="py-2 px-2">{row.lens}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          Beyond Farcaster and Lens, the broader SocialFi landscape includes Friend.tech (speculative social token trading, now largely inactive), DeSo (dedicated social blockchain), and various &quot;engage-to-earn&quot; experiments. The honest assessment: no Web3 social platform has cracked 100K sustained daily active users. The market is still searching for product-market fit.
        </p>

        {/* Section 4: Neynar Acquisition */}
        <h2 className="text-xl font-extrabold mt-8 mb-3" style={{ color: "var(--color-text)" }}>
          The Neynar Acquisition: What Changed in 2026
        </h2>
        <p className="mb-4">
          In January 2026, infrastructure company Neynar acquired the Farcaster protocol, its code repositories, the Farcaster app (formerly Warpcast), and the Clanker token launcher. Farcaster co-founders Dan Romero and Varun Srinivasan stepped back to focus on building a new Farcaster-based wallet app, while Neynar — which had been the dominant API and infrastructure provider for Farcaster — took over protocol development and operations.
        </p>
        <p className="mb-4">
          The deal reportedly valued the protocol near $1B. Notably, Farcaster returned approximately $180M in unused funding to investors, signaling a clean transition. The protocol continues operating on its existing decentralized Hub architecture, and users maintain control over their data through cryptographic key pairs. Warpcast has been rebranded: the protocol is &quot;Farcaster,&quot; the main client app is &quot;Farcaster&quot; (mobile), and the website moved to farcaster.xyz.
        </p>

        {/* Section 5: Monetization */}
        <h2 className="text-xl font-extrabold mt-8 mb-3" style={{ color: "var(--color-text)" }}>
          How Farcaster Makes Money (and Pays Creators)
        </h2>
        <p className="mb-4">
          Farcaster&apos;s monetization strategy centers on <strong>Farcaster Pro</strong>, a $120/year subscription that launched in mid-2025. Pro users get 10,000-character casts (vs the standard limit), up to 4 embeds per cast, and — crucially — 100% of subscription revenue is redistributed to weekly creator pools. In its first six hours, 10,000 users subscribed, generating $1.2M.
        </p>
        <p className="mb-4">
          The <strong>Warpcast Rewards</strong> program distributes $25,000+ weekly in USDC across hundreds of creators, creating one of the first sustainable creator economies in Web3 social. Unlike Twitter/X&apos;s ad-revenue sharing, Farcaster&apos;s model is direct: subscribers fund creators, and the platform takes nothing.
        </p>

        {/* Section 6: Getting Started */}
        <h2 className="text-xl font-extrabold mt-8 mb-3" style={{ color: "var(--color-text)" }}>
          How to Get Started on Farcaster
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[
            { step: "1", title: "Download the App", desc: "Get the Farcaster app (iOS/Android) from farcaster.xyz. You can also use web clients like Supercast or Nook." },
            { step: "2", title: "Create Your Account", desc: "Sign up with an email or connect an Ethereum wallet. Your Farcaster ID is registered onchain on OP Mainnet." },
            { step: "3", title: "Set Up Your Profile", desc: "Add a bio, profile picture, and connected addresses. Your profile is portable across all Farcaster clients." },
            { step: "4", title: "Follow Channels", desc: "Channels are topic-based feeds (like subreddits). Follow /crypto, /defi, /base, or any niche that interests you." },
            { step: "5", title: "Explore Mini Apps", desc: "Browse the Mini Apps store for games, tools, and onchain experiences. Try minting an NFT or making a prediction." },
            { step: "6", title: "Cast & Engage", desc: "Post your first cast, reply to others, and build your social graph. Consistent engagement is how you build presence." },
          ].map((card) => (
            <div key={card.step} className="glass rounded-lg p-4" style={{ border: "1px solid var(--color-border)" }}>
              <div className="flex items-start gap-3">
                <span className="font-extrabold text-lg" style={{ color: "#8b5cf6" }}>{card.step}</span>
                <div>
                  <h4 className="text-xs font-bold mb-1" style={{ color: "var(--color-text)" }}>{card.title}</h4>
                  <p className="text-xs" style={{ color: "var(--color-text-secondary)" }}>{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section 7: Challenges */}
        <div className="glass rounded-xl p-5 my-6" style={{ borderLeft: "4px solid #f59e0b" }}>
          <h3 className="text-sm font-bold mb-3" style={{ color: "#f59e0b" }}>⚠️ Challenges & Honest Assessment</h3>
          <div className="space-y-3" role="list" aria-label="Challenges facing Farcaster and SocialFi">
            {[
              { risk: "Growth Plateau", desc: "After 4 years and $240M+ in funding, Farcaster hasn't cracked 100K sustained DAU. Revenue dropped 85% from its peak. The user base remains crypto-native with limited mainstream appeal." },
              { risk: "Airdrop Farming", desc: "SocialFi token incentives create perverse dynamics — users chase airdrops rather than genuine engagement. This distorts engagement metrics and community quality." },
              { risk: "Acquisition Uncertainty", desc: "The Neynar acquisition is still fresh. Protocol direction under new ownership could shift, and the co-founders' departure leaves a leadership gap." },
              { risk: "Infrastructure Friction", desc: "Choosing chains, setting up wallets, managing gas fees — the UX still creates barriers for mainstream users compared to centralized alternatives." },
              { risk: "Network Effects", desc: "Social networks live or die on network effects. With 40-60K DAU, Farcaster faces the cold-start problem that kills most social platforms." },
            ].map((r) => (
              <div key={r.risk} role="listitem">
                <span className="text-xs font-bold" style={{ color: "var(--color-text)" }}>{r.risk}:</span>{" "}
                <span className="text-xs" style={{ color: "var(--color-text-secondary)" }}>{r.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 8: Why It Matters */}
        <h2 className="text-xl font-extrabold mt-8 mb-3" style={{ color: "var(--color-text)" }}>
          Why SocialFi Matters for Crypto
        </h2>
        <p className="mb-4">
          Even if Farcaster never reaches Twitter-scale adoption, the experiments happening on the protocol are significant for the broader crypto ecosystem. Portable social graphs mean users aren&apos;t locked into any single platform. Onchain identity creates the foundation for reputation systems that DeFi, governance, and <Link href="/learn/ai-crypto-agents-guide" style={{ color: "#8b5cf6", textDecoration: "underline" }}>AI agents</Link> can build on. And Frames/Mini Apps demonstrate that crypto UX can be embedded seamlessly into familiar social interfaces rather than requiring users to navigate complex DeFi dashboards.
        </p>
        <p className="mb-4">
          For builders, Farcaster&apos;s open protocol offers something unique: permissionless access to a crypto-native audience with connected wallets. Any developer can build a client, launch a Frame, or create a Mini App without gatekeepers. This is the kind of open platform that <Link href="/learn/account-abstraction" style={{ color: "#8b5cf6", textDecoration: "underline" }}>account abstraction</Link> and <Link href="/learn/smart-wallets-guide-2026" style={{ color: "#8b5cf6", textDecoration: "underline" }}>smart wallets</Link> are making increasingly accessible.
        </p>

        {/* Disclaimer */}
        <div className="glass rounded-xl p-5 my-6" style={{ borderLeft: "4px solid #ef4444" }}>
          <p className="text-xs" style={{ color: "#ef4444" }}>
            <strong>⚠️ Disclaimer:</strong> This guide is for informational purposes only. SocialFi platforms involve financial tokens and incentive mechanisms. Always do your own research and be cautious of airdrop farming schemes or token-driven engagement that may not reflect genuine value.
          </p>
        </div>

        {/* FAQ */}
        <h2 className="text-xl font-extrabold mt-8 mb-3" style={{ color: "var(--color-text)" }}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 mb-6">
          {[
            { q: "What is Farcaster?", a: "Farcaster is a decentralized social media protocol where your identity and social graph are stored on a peer-to-peer network of Hubs, not a company's servers. You own your data and can use any client app built on the protocol." },
            { q: "Is Farcaster free to use?", a: "Basic Farcaster accounts are free (you may pay a small onchain registration fee). Farcaster Pro costs $120/year and unlocks longer casts, more embeds, and contributes to creator reward pools." },
            { q: "What are Farcaster Frames?", a: "Frames are interactive mini-applications embedded inside Farcaster posts. They let you mint NFTs, play games, make payments, and use onchain tools without leaving your social feed. Frames v2, now called Mini Apps, offer full-screen app experiences." },
            { q: "Who owns Farcaster now?", a: "As of January 2026, Neynar (a Haun Ventures-backed infrastructure company) acquired the Farcaster protocol, code, app, and Clanker from co-founders Dan Romero and Varun Srinivasan, who are pivoting to build a wallet app." },
            { q: "How does Farcaster compare to Twitter/X?", a: "Farcaster is much smaller (~40-60K DAU vs hundreds of millions). The key difference is decentralization: your identity and followers are portable, your data is stored on a peer-to-peer network, and anyone can build a client. The tradeoff is a smaller but more crypto-engaged community." },
            { q: "What is SocialFi?", a: "SocialFi is the intersection of social media and decentralized finance. It includes protocols like Farcaster and Lens that let users own their data, monetize content directly, and participate in the economic value of social platforms through tokens and onchain incentives." },
          ].map((faq) => (
            <div key={faq.q} className="glass rounded-lg p-4" style={{ border: "1px solid var(--color-border)" }}>
              <h3 className="text-sm font-bold mb-2" style={{ color: "var(--color-text)" }}>{faq.q}</h3>
              <p className="text-xs" style={{ color: "var(--color-text-secondary)" }}>{faq.a}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <nav aria-label="Related Web3 infrastructure guides" className="glass rounded-xl p-5 mt-8 text-center" style={{ border: "1px solid var(--color-border)" }}>
          <p className="text-sm font-bold mb-3" style={{ color: "var(--color-text)" }}>
            Explore More Web3 Infrastructure
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/learn/ai-crypto-agents-guide" className="affiliate-cta px-5 py-2 rounded-lg text-white font-semibold text-sm" style={{ minHeight: "44px", display: "inline-flex", alignItems: "center" }}>
              AI Agents Guide
            </Link>
            <Link href="/learn/account-abstraction" className="glass px-5 py-2 rounded-lg font-semibold text-sm" style={{ color: "var(--color-text)", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>
              Account Abstraction
            </Link>
            <Link href="/learn/smart-wallets-guide-2026" className="glass px-5 py-2 rounded-lg font-semibold text-sm" style={{ color: "var(--color-text)", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>
              Smart Wallets
            </Link>
          </div>
        </nav>
      </div>

      {/* Structured Data */}
      <ArticleStructuredData
        title="Farcaster & SocialFi: The Complete Guide to Decentralized Social Media"
        description="Complete guide to Farcaster, the leading decentralized social protocol — Frames, Mini Apps, Neynar acquisition, SocialFi economics, and Web3 social in 2026."
        datePublished="2026-03-17T00:00:00Z"
        dateModified="2026-03-17T00:00:00Z"
        slug="learn/farcaster-socialfi-guide-2026"
      />
      <FAQStructuredData
        questions={[
          { question: "What is Farcaster?", answer: "Farcaster is a decentralized social media protocol where your identity and social graph are stored on a peer-to-peer network of Hubs, not a company's servers." },
          { question: "Is Farcaster free to use?", answer: "Basic accounts are free. Farcaster Pro costs $120/year with longer casts and creator rewards." },
          { question: "What are Farcaster Frames?", answer: "Frames are interactive mini-applications embedded inside Farcaster posts for minting NFTs, games, payments, and onchain tools." },
          { question: "Who owns Farcaster now?", answer: "As of January 2026, Neynar acquired the Farcaster protocol from co-founders Dan Romero and Varun Srinivasan." },
          { question: "How does Farcaster compare to Twitter/X?", answer: "Farcaster is much smaller (~40-60K DAU) but offers decentralized, portable identity and an open protocol anyone can build on." },
          { question: "What is SocialFi?", answer: "SocialFi is the intersection of social media and DeFi — protocols that let users own data, monetize content, and earn through onchain social engagement." },
        ]}
      />
    
        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Farcaster Socialfi Guide 2026",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/farcaster-socialfi-guide-2026"
            })
          }}
        />
      </article>
  );
}
