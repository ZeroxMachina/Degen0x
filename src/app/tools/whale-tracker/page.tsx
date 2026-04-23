import { Metadata } from "next";
import WhaleTrackerClient from "./WhaleTrackerClient";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from '@/components/RelatedContent';
import StructuredData from "@/components/StructuredData";
import {
  generateToolPageSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  combineSchemas,
} from "@/lib/structured-data";

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

// ─── Structured Data ─────────────────────────────────────────────────────────
const toolSchema = generateToolPageSchema({
  name: "Whale Wallet Tracker",
  description:
    "Monitor whale wallets, smart money flows, and large crypto transactions in real-time across Ethereum, Solana, and Bitcoin.",
  url: "https://degen0x.com/tools/whale-tracker",
  category: "FinanceApplication",
  image: "https://degen0x.com/og-whale-tracker.svg",
});

const faqSchema = generateFAQSchema([
  {
    question: "What is a crypto whale?",
    answer:
      "A crypto whale is a wallet or entity that holds enough of a given asset to influence its market price. Common thresholds are 1,000+ BTC, 10,000+ ETH, or any single transaction worth $1M+. Because their trades can move the market, monitoring whale activity is a core on-chain analysis technique.",
  },
  {
    question: "Why should I track whale wallets?",
    answer:
      "Whale wallets often signal early demand, distribution before a sell-off, and rotation between sectors. Tracking them is not a guarantee of future price action, but it surfaces directional conviction from large, informed market participants before that flow shows up on centralized exchanges.",
  },
  {
    question: "What chains does this whale tracker support?",
    answer:
      "The Whale Wallet Tracker covers Ethereum mainnet, Solana, and Bitcoin. We surface the largest recent transfers, top holder movements, and exchange inflows/outflows for each network.",
  },
  {
    question: "Is this whale tracker free?",
    answer:
      "Yes. The degen0x Whale Wallet Tracker is free to use, requires no signup, and does not require connecting a wallet. All data is read directly from public on-chain sources.",
  },
]);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://degen0x.com/" },
  { name: "Tools", url: "https://degen0x.com/tools" },
  { name: "Whale Tracker", url: "https://degen0x.com/tools/whale-tracker" },
]);

const schemas = combineSchemas([toolSchema, faqSchema, breadcrumbSchema]);

export default function WhaleTrackerPage() {
  return (
    <div style={{ background: "var(--color-bg)" }}>
      <StructuredData data={schemas} />
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
      <RelatedContent category="tools" currentSlug="/tools/whale-tracker" />
    </div>
  );
}
