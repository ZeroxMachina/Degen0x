import { Metadata } from "next";
import WhaleTrackerClient from "./WhaleTrackerClient";

export const metadata: Metadata = {
  title: "Whale Wallet Tracker — Monitor Smart Money Moves | degen0x",
  description:
    "Track whale wallets, smart money flows, and large crypto transactions in real-time. Monitor top holders across Ethereum, Solana, and Bitcoin with our free on-chain analytics tool.",
  keywords: [
    "whale tracker",
    "whale wallet",
    "smart money",
    "on-chain analytics",
    "crypto whale",
    "large transactions",
    "whale alert",
  ],
  openGraph: {
    title: "Whale Wallet Tracker — Monitor Smart Money | degen0x",
    description: "Track whale wallets and smart money moves across Ethereum, Solana, and Bitcoin.",
    type: "website",
    url: "https://degen0x.com/tools/whale-tracker",
    images: [
      {
        url: "https://degen0x.com/api/og?title=Whale+Wallet+Tracker&category=Tools&type=tool",
        width: 1200,
        height: 630,
        alt: "Whale Wallet Tracker on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whale Wallet Tracker — Monitor Smart Money | degen0x",
    description: "Track whale wallets and smart money moves across Ethereum, Solana, and Bitcoin.",
    images: [
      "https://degen0x.com/api/og?title=Whale+Wallet+Tracker&category=Tools&type=tool",
    ],
  },
};

export default function WhaleTrackerPage() {
  return <WhaleTrackerClient />;
}
