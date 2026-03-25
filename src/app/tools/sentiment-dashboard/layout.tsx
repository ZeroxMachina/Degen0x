import { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Sentiment Dashboard — Real-Time Market Mood | ${SITE_NAME}`,
  description:
    "Track real-time crypto market sentiment from Twitter/X, Reddit, Telegram, Discord, and news. Fear & Greed Index, social volume, and top token mentions.",
  alternates: { canonical: `${SITE_URL}/tools/sentiment-dashboard` },
  openGraph: {
    title: `Crypto Sentiment Dashboard | ${SITE_NAME}`,
    description:
      "Real-time market sentiment aggregated from social media, news, and on-chain data. Fear & Greed Index updated every 60 seconds.",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/api/og?title=Sentiment+Dashboard&category=Tools&type=tool`,
        width: 1200,
        height: 630,
        alt: "Crypto Sentiment Dashboard on degen0x",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
