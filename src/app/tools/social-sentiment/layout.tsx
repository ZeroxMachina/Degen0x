import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Sentiment Radar — Crypto Social Media Sentiment Analysis | degen0x",
  description: "Real-time crypto sentiment analysis from Twitter, Reddit, Telegram. Track social buzz, engagement, and sentiment shifts for top tokens before they pump or dump.",
  keywords: ["crypto sentiment", "social sentiment analysis", "crypto twitter", "crypto reddit", "token sentiment", "market sentiment crypto"],
  openGraph: {
    title: "Social Sentiment Radar — degen0x",
    description: "Track real-time crypto social media sentiment. Spot narrative shifts before they hit the charts.",
    type: "website",
  },
};

export default function SocialSentimentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
