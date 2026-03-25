import { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Airdrop Eligibility Checker — Find Free Crypto Airdrops | ${SITE_NAME}`,
  description:
    "Check your wallet eligibility for upcoming crypto airdrops. Track DeFi, L2, and NFT airdrops with estimated values and requirements.",
  alternates: { canonical: `${SITE_URL}/tools/airdrop-eligibility` },
  openGraph: {
    title: `Airdrop Eligibility Checker | ${SITE_NAME}`,
    description:
      "Check your wallet eligibility for upcoming crypto airdrops across DeFi, L2, and NFT ecosystems.",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/api/og?title=Airdrop+Eligibility+Checker&category=Tools&type=tool`,
        width: 1200,
        height: 630,
        alt: "Airdrop Eligibility Checker on degen0x",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
