import { Metadata } from "next";
import UsualClient from "./UsualClient";

export const metadata: Metadata = {
  title: "Usual Money: USD0 Revenue-Sharing Stablecoin Guide 2026 — $1.4B Supply | degen0x",
  description:
    "Complete guide to Usual Money — the RWA-backed stablecoin protocol with $1.4B USD0 supply, ~12% APY on USD0++, and 100% revenue sharing to $USUAL holders. How USD0 works, risks, and how to earn yield.",
  keywords: [
    "usual money",
    "USD0 stablecoin",
    "usual protocol",
    "USUAL token",
    "RWA stablecoin",
    "revenue sharing stablecoin",
    "USD0++ bond",
    "usual review 2026",
    "treasury bill yield",
  ],
  openGraph: {
    title: "Usual Money: USD0 Revenue-Sharing Stablecoin Guide 2026",
    description:
      "$1.4B supply. ~12% APY. 100% revenue sharing. Complete guide to USD0.",
    type: "article",
    url: "https://degen0x.com/ecosystem/usual",
    publishedTime: "2026-03-17T00:00:00Z",
    modifiedTime: "2026-03-17T00:00:00Z",
    images: [
      {
        url: "https://degen0x.com/api/og?title=Usual+Money:+USD0+Stablecoin+Guide+2026&category=Ecosystem&type=page",
        width: 1200,
        height: 630,
        alt: "Usual Money Guide on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Usual Money: USD0 Stablecoin Guide 2026 | degen0x",
    description:
      "$1.4B supply. ~12% APY. RWA-backed with 100% revenue sharing. Complete stablecoin guide inside.",
    images: [
      "https://degen0x.com/api/og?title=Usual+Money:+USD0+Stablecoin+Guide+2026&category=Ecosystem&type=page",
    ],
  },
};

export default function UsualPage() {
  return <UsualClient />;
}
