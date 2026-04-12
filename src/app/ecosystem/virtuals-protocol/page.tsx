import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import VirtualsProtocolClient from "./VirtualsProtocolClient";

export const metadata: Metadata = {
  title: "Virtuals Protocol: AI Agent Launchpad Guide 2026 | degen0x",
  description: "Complete guide to Virtuals Protocol — the leading AI agent launchpad on Base. Learn how to create, trade, and earn from tokenized AI agents with 17,700+ agents",
  keywords: [
    "virtuals protocol",
    "virtuals protocol guide",
    "AI agent crypto",
    "AI agent launchpad",
    "VIRTUAL token",
    "Base AI agents",
    "AIXBT",
    "tokenized AI agents",
    "GAME framework",
    "AI crypto 2026",
  ],
  openGraph: {
    title: "Virtuals Protocol: AI Agent Launchpad Guide 2026",
    description:
      "Complete guide to Virtuals Protocol — the leading AI agent launchpad on Base. Create, trade, and earn from tokenized AI agents.",
    type: "article",
    url: "https://degen0x.com/ecosystem/virtuals-protocol",
    publishedTime: "2026-03-17T00:00:00Z",
    modifiedTime: "2026-03-17T00:00:00Z",
    images: [
      {
        url: "https://degen0x.com/api/og?title=Virtuals+Protocol:+AI+Agent+Launchpad&category=Ecosystem&type=page",
        width: 1200,
        height: 630,
        alt: "Virtuals Protocol Guide on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtuals Protocol: AI Agent Launchpad Guide 2026 | degen0x",
    description:
      "Create, trade, and earn from tokenized AI agents on Base. 17,700+ agents, $8B+ DEX volume.",
    images: [
      "https://degen0x.com/api/og?title=Virtuals+Protocol:+AI+Agent+Launchpad&category=Ecosystem&type=page",
    ],
  },

  alternates: { canonical: "/ecosystem/virtuals-protocol" }};

export default function VirtualsProtocolPage() {
  return <VirtualsProtocolClient />;
}
