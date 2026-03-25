import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DAO Governance Security 2026: Attack Vectors, Exploits & Defenses | degen0x",
  description:
    "Learn about DAO governance attacks — flashloan exploits, vote buying, delegate concentration, and time-lock bypasses. Real case studies (Beanstalk, Tornado Cash, Compound) and defense mechanisms. $28B+ under DAO governance.",
  keywords: [
    "DAO governance attacks",
    "governance security",
    "flashloan governance attack",
    "vote buying crypto",
    "DAO security",
    "governance exploit",
    "Beanstalk attack",
    "Tornado Cash governance",
    "Compound governance attack",
    "conviction voting",
    "veto council",
    "futarchy",
    "DAO defense mechanisms",
    "delegate concentration",
    "governance attack vectors",
  ],
  openGraph: {
    title: "DAO Governance Security 2026: Attack Vectors, Exploits & Defenses",
    description:
      "Complete guide to DAO governance attacks and defenses. Flashloan exploits, vote buying, delegate concentration — real case studies and how to protect your protocol.",
    url: "https://degen0x.com/learn/governance-security-attack-vectors-2026",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    modifiedTime: "2026-03-25T00:00:00Z",
    authors: ["degen0x Team"],
    images: [{ url: "https://degen0x.com/og-governance-security-attack-vectors-2026.svg", width: 1200, height: 630, alt: "DAO Governance Security Guide 2026 — degen0x" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DAO Governance Security 2026 | degen0x",
    description:
      "Flashloan attacks, vote buying, delegate concentration — real DAO exploits and how to defend your protocol. $780M+ lost to governance attacks in 2025.",
    images: ["https://degen0x.com/og-governance-security-attack-vectors-2026.svg"],
  },
};

export default function GovernanceSecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "DAO Governance Security 2026: Attack Vectors, Real Exploits & How to Defend Your Protocol",
            description:
              "Comprehensive guide to DAO governance attacks and defense mechanisms. Covers flashloan exploits, vote buying, delegate concentration, time-lock bypasses, and emerging defenses like futarchy and conviction voting.",
            image: "https://degen0x.com/og-governance-security-attack-vectors-2026.svg",
            datePublished: "2026-03-25T00:00:00Z",
            dateModified: "2026-03-25T00:00:00Z",
            author: {
              "@type": "Organization",
              name: "degen0x",
              url: "https://degen0x.com",
            },
            publisher: {
              "@type": "Organization",
              name: "degen0x",
              url: "https://degen0x.com",
            },
            mainEntity: {
              "@type": "Thing",
              name: "DAO Governance Security",
              description: "Security considerations, attack vectors, and defense mechanisms for decentralized autonomous organization governance systems",
            },
            keywords: [
              "DAO governance attacks",
              "flashloan governance",
              "vote buying",
              "governance security",
              "conviction voting",
              "futarchy",
              "veto council",
              "delegate concentration",
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a DAO governance attack?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A DAO governance attack is when a malicious actor manipulates the voting or proposal system of a decentralized autonomous organization to steal funds, change protocol rules, or gain unauthorized control. Common methods include flashloan-enabled voting, vote buying through bribe markets, and exploiting low voter participation to push through malicious proposals.",
                },
              },
              {
                "@type": "Question",
                name: "How much money has been lost to governance attacks?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Over $780 million was lost to governance-related attacks in 2025 alone. Notable incidents include the Beanstalk flashloan attack ($181M in 2022), the UPCX exploit ($70M in 2025), and the Compound GoldenBoyz incident ($24M in 2024). With $28 billion under DAO governance, the attack surface continues to grow.",
                },
              },
              {
                "@type": "Question",
                name: "How do flashloan governance attacks work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In a flashloan governance attack, the attacker borrows a massive amount of governance tokens within a single transaction, uses them to vote on or execute a malicious proposal, then repays the loan — all atomically. The Beanstalk attack used $1B+ in flashloans to acquire 67% voting power and drain $181M from the protocol.",
                },
              },
              {
                "@type": "Question",
                name: "What is conviction voting and how does it prevent attacks?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Conviction voting is a governance mechanism where vote weight increases the longer tokens are committed without withdrawal. This prevents last-minute vote swings and flashloan attacks because an attacker would need to lock tokens for extended periods, making attacks economically impractical.",
                },
              },
              {
                "@type": "Question",
                name: "What is futarchy in DAO governance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Futarchy is an experimental governance model where decisions are made through prediction markets rather than token voting. Stakeholders trade 'pass' and 'reject' tokens, and the market price determines the proposal outcome. It's resistant to vote buying because better-informed participants can dominate prediction markets. Optimism and MetaDAO on Solana are actively experimenting with futarchy.",
                },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
