import { Metadata } from "next";
import WhaleTrackerClient from "./WhaleTrackerClient";
import Breadcrumb from "@/components/Breadcrumb";

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
        url: "https://degen0x.com/og-whale-tracker.svg",
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
      "https://degen0x.com/og-whale-tracker.svg",
    ],
  },
};

export default function WhaleTrackerPage() {
  return (
    <div style={{ background: "var(--color-bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Whale Tracker" },
          ]}
        />
        <WhaleTrackerClient />
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Whale Tracker",
              "url": "https://degen0x.com/tools/whale-tracker",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </div>
  );
}
