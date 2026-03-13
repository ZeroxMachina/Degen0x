import { Metadata } from "next";
import TokenRadarClient from "./TokenRadarClient";

export const metadata: Metadata = {
  title: "Token Launch Radar — Track New Crypto Listings | degen0x",
  description:
    "Discover new token launches, upcoming IDOs, and fresh crypto listings before they pump. Track launch schedules, tokenomics, and early signals with our free token radar.",
  keywords: [
    "new crypto listings",
    "token launch",
    "IDO tracker",
    "upcoming ICO",
    "new coin launches",
    "crypto presale",
    "token radar",
  ],
};

export default function TokenRadarPage() {
  return <TokenRadarClient />;
}
