import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EIP-7702 Smart Accounts Guide 2026: Gasless Transactions & Account Abstraction | degen0x",
  description:
    "Master EIP-7702 (EIP 7702) and smart accounts. Learn how transaction type 0x04 enables gasless transactions, paymasters, passkey authentication, and session keys. 11,000+ mainnet authorizations. Comparison with ERC-4337.",
  keywords: [
    "EIP-7702",
    "EIP 7702",
    "smart accounts",
    "account abstraction",
    "gasless transactions",
    "Ethereum Pectra",
    "paymaster",
    "transaction type 0x04",
    "session keys",
    "passkey authentication",
    "ERC-4337 vs EIP-7702",
    "Hegotá upgrade",
    "EIP-7701",
    "smart account wallets",
    "gasless UX",
    "transaction batching",
  ],
  openGraph: {
    title: "EIP-7702 Smart Accounts Guide 2026: Gasless Transactions & Account Abstraction",
    description:
      "Complete guide to EIP-7702 smart accounts. Learn how delegation enables gasless transactions, paymasters, session keys, and advanced security without wallet migration.",
    url: "https://degen0x.com/learn/eip-7702-smart-accounts-guide-2026",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    modifiedTime: "2026-03-25T00:00:00Z",
    authors: ["degen0x Team"],
    images: [{ url: "https://degen0x.com/og-eip-7702-smart-accounts-guide-2026.svg", width: 1200, height: 630, alt: "EIP-7702 Smart Accounts Guide 2026 — degen0x" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EIP-7702 Smart Accounts Guide 2026 | degen0x",
    description:
      "Master EIP-7702 delegation, gasless transactions, paymasters, and smart account features. Complete technical breakdown + wallet setup guide.",
    images: ["https://degen0x.com/og-eip-7702-smart-accounts-guide-2026.svg"],
  },
};

export default function EIP7702Layout({
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
            headline: "EIP-7702 & Smart Accounts Guide 2026: Gasless Transactions & Account Abstraction",
            description:
              "Complete guide to EIP-7702 smart accounts. Learn about transaction type 0x04, delegation, gasless transactions, paymasters, session keys, and how EIP-7702 compares to ERC-4337.",
            image: "https://degen0x.com/og-eip-7702-smart-accounts-guide-2026.svg",
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
              name: "EIP-7702",
              description: "Ethereum Improvement Proposal 7702 that introduces transaction type 0x04 for smart account delegation",
              url: "https://eips.ethereum.org/EIPS/eip-7702",
            },
            keywords: [
              "EIP-7702",
              "smart accounts",
              "account abstraction",
              "gasless transactions",
              "Ethereum Pectra",
              "paymaster",
              "session keys",
              "passkey authentication",
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
