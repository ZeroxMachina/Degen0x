import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import JitoClient from "./JitoClient";

export const metadata: Metadata = {
  title: "Jito: Solana Liquid Staking & MEV Guide 2026 | degen0x",
  description:
    "Complete guide to Jito — Solana's leading liquid staking protocol with MEV-powered yields. JitoSOL, MEV tips, validator staking, JTO governance, and how to earn enhanced staking rewards.",
  keywords: [
    "jito",
    "jito guide",
    "solana staking",
    "JitoSOL",
    "liquid staking",
    "MEV solana",
    "JTO token",
    "jito review 2026",
    "solana defi",
  ],
  openGraph: {
    title: "Jito: Solana Liquid Staking & MEV Guide 2026",
    description:
      "Solana's leading liquid staking protocol. MEV-powered yields, JitoSOL, JTO governance. Complete guide.",
    type: "article",
    url: "https://degen0x.com/ecosystem/jito",
    publishedTime: "2026-03-17T00:00:00Z",
    modifiedTime: "2026-03-17T00:00:00Z",
    images: [
      {
        url: "https://degen0x.com/api/og?title=Jito:+Solana+Liquid+Staking+%26+MEV+Guide+2026&category=Ecosystem&type=page",
        width: 1200,
        height: 630,
        alt: "Jito Guide on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jito: Solana Liquid Staking & MEV Guide 2026 | degen0x",
    description:
      "Solana's #1 liquid staking. MEV-powered yields. JitoSOL. Complete guide inside.",
    images: [
      "https://degen0x.com/api/og?title=Jito:+Solana+Liquid+Staking+%26+MEV+Guide+2026&category=Ecosystem&type=page",
    ],
  },

  alternates: { canonical: "/ecosystem/jito" }};

export default function JitoPage() {
  return <JitoClient />;
}
