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
  },
};

export default function WhaleTrackerPage() {
  return <WhaleTrackerClient />;
}
