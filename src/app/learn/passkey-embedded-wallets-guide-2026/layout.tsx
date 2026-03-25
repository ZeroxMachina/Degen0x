import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Passkey Wallets & Embedded Wallets Guide 2026: No Seed Phrases Required | degen0x",
  description:
    "Complete guide to passkey wallets and embedded wallets. Learn how WebAuthn/FIDO2 replaces seed phrases. Compare Coinbase Smart Wallet, Privy, Dynamic, Web3Auth, Turnkey & Para. Step-by-step setup guide.",
  keywords: [
    "passkey crypto wallets",
    "passkey wallets 2026",
    "embedded wallets guide",
    "coinbase smart wallet",
    "privy embedded wallet",
    "webauthn wallets",
    "fido2 authentication",
    "non-custodial wallets",
    "account abstraction wallets",
    "web3auth",
    "dynamic wallet",
    "turnkey mpc wallet",
    "passkey security",
    "no seed phrase wallet",
    "biometric crypto wallet",
    "erc-4337 wallets",
    "social recovery wallets",
  ],
  openGraph: {
    title: "Passkey Wallets & Embedded Wallets: 2026 Guide (No Seed Phrases)",
    description:
      "Replace seed phrases with biometrics. Compare Coinbase Smart Wallet, Privy, Dynamic, Web3Auth & more embedded wallet providers.",
    url: "https://degen0x.com/learn/passkey-embedded-wallets-guide-2026",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    modifiedTime: "2026-03-25T00:00:00Z",
    authors: ["degen0x Team"],
    images: [{ url: "https://degen0x.com/og-passkey-embedded-wallets-guide-2026.svg", width: 1200, height: 630, alt: "Passkey Wallets & Embedded Wallets Guide 2026 — degen0x" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Passkey & Embedded Wallets Guide 2026 | degen0x",
    description:
      "No more seed phrases. Learn passkey wallets, embedded wallets, and compare top providers: Coinbase, Privy, Dynamic, Web3Auth.",
    images: ["https://degen0x.com/og-passkey-embedded-wallets-guide-2026.svg"],
  },
};

export default function PasskeyEmbeddedWalletsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
