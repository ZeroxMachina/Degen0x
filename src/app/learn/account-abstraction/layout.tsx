import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Abstraction Guide 2026 | degen0x",
  description: "Master ERC-4337 Account Abstraction in 2026. Learn how Smart Contract Wallets work, compare top AA implementations (Safe, Biconomy, ZeroDev), and implement gas sponsorship, social recovery, and session keys.",
  keywords: "account abstraction, ERC-4337, smart contract wallet, Safe, Biconomy, ZeroDev, gas sponsorship, social recovery, session keys, bundlers, paymasters",
  openGraph: {
    title: "Account Abstraction Guide 2026 | degen0x",
    description: "Complete guide to ERC-4337 Account Abstraction: wallets, implementations, and developer integration.",
    type: "article",
    publishedTime: "2026-03-13T00:00:00Z",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
