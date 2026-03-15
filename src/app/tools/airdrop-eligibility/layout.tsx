import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airdrop Eligibility Checker - Find Free Crypto Airdrops",
  description: "Check your wallet eligibility for upcoming crypto airdrops. Track DeFi, L2, and NFT airdrops with estimated values and requirements.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
