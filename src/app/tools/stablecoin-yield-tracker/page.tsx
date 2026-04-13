import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import StructuredData from "@/components/StructuredData";
import StablecoinYieldTracker from "@/components/StablecoinYieldTracker";
import { generateToolPageSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Stablecoin Yield Tracker - Best Stablecoin APY Rates",
  description:
    "Compare yield-bearing stablecoin rates across sDAI, USDY, sUSDe, and 15+ yield sources. Find safe, high-yield stablecoin opportunities.",
  keywords: [
    "stablecoin yield",
    "APY rates",
    "sDAI",
    "USDY",
    "sUSDe",
    "stablecoin tracker",
    "yield farming",
    "DeFi yields",
    "best stablecoin rates",
  ],
  openGraph: {
    title: "Stablecoin Yield Tracker - Best Stablecoin APY Rates",
    description:
      "Compare yield-bearing stablecoin rates across sDAI, USDY, sUSDe, and 15+ yield sources. Find safe, high-yield stablecoin opportunities.",
    url: "https://degen0x.com/tools/stablecoin-yield-tracker",
    type: "website",
    images: [
      {
        url: "https://degen0x.com/og-stablecoin-yield-tracker.svg",
        width: 1200,
        height: 630,
        alt: "Stablecoin Yield Tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stablecoin Yield Tracker - Best APY Rates",
    description:
      "Compare yield-bearing stablecoin rates across sDAI, USDY, sUSDe, and 15+ yield sources.",
    images: ["https://degen0x.com/og-stablecoin-yield-tracker.svg"],
  },

  alternates: { canonical: "/tools/stablecoin-yield-tracker" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://degen0x.com/tools' },
    { '@type': 'ListItem', position: 3, name: 'Stablecoin Yield Tracker', },
  ],
};

export default function StablecoinYieldTrackerPage() {
  // Generate structured data
  const toolSchema = generateToolPageSchema({
    name: "Stablecoin Yield Tracker",
    description:
      "Compare yield-bearing stablecoin rates across sDAI, USDY, sUSDe, and 15+ yield sources. Find safe, high-yield stablecoin opportunities.",
    url: "https://degen0x.com/tools/stablecoin-yield-tracker",
    category: "Finance",
    applicationCategory: "FinanceApplication",
    image: "https://degen0x.com/og-stablecoin-yield-tracker.svg",
  });

  const faqs = [
    {
      question: "What is stablecoin yield?",
      answer:
        "Stablecoin yield refers to the interest or returns you earn by holding or lending stablecoins like USDC, DAI, or USDT. These yields come from lending platforms (like Aave or Compound), yield aggregators, or through protocols like sDAI that automatically distribute yields to holders.",
    },
    {
      question: "How do I earn yield on stablecoins?",
      answer:
        "You can earn stablecoin yield by: (1) Lending your stablecoins on platforms like Aave, Compound, or Morpho, (2) Holding yield-bearing stablecoins like sDAI or sUSDe, (3) Providing liquidity to decentralized exchanges like Curve, or (4) Using yield aggregators like Yearn Finance that automatically route your stablecoins to the highest-yielding opportunities.",
    },
    {
      question: "What's the difference between sDAI and USDC?",
      answer:
        "sDAI is a yield-bearing version of DAI that automatically accumulates yield from the DAI Savings Rate (set by MakerDAO governance). You hold sDAI and it grows over time without any additional action. USDC is a standard stablecoin; to earn yield on USDC, you must deposit it on a lending protocol like Aave. sDAI offers passive yield, while USDC requires active management.",
    },
    {
      question: "Is it safe to earn stablecoin yield?",
      answer:
        "Stablecoin yield involves several risk layers: smart contract risk (bugs in the protocol), protocol risk (governance or economic decisions), market risk (volatility in collateral), and liquidity risk. Low-risk options include established protocols like Aave and Compound with long track records. Higher-risk but higher-yield options include newer protocols or algorithms that manage their own collateral (like sUSDe).",
    },
    {
      question: "What is APY vs APR?",
      answer:
        "APY (Annual Percentage Yield) includes compounding—the interest you earn on your interest. APR (Annual Percentage Rate) is simple interest without compounding. For example, if you earn 5% APR and it compounds monthly, your actual return is higher (about 5.12% APY). Most yield trackers show APY because it reflects your true annual earnings.",
    },
    {
      question: "Do I need to do anything to earn stablecoin yield?",
      answer:
        "It depends on the method: Yield-bearing tokens (like sDAI) require you to simply hold them—they compound automatically. Lending protocols require you to deposit your stablecoins and are fully controlled by you. Yield aggregators (like Yearn) manage your funds and move them between protocols automatically. Always check what you're trusting with your funds.",
    },
  ];

  const faqSchema = generateFAQSchema(faqs);
  const structuredData = combineSchemas(toolSchema, faqSchema);

  return (
    <div style={{ background: "#0d1117", color: "#e6edf3", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="tools"
      />      <StructuredData data={structuredData} />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Stablecoin Yield Tracker" },
          ]}
        />
      </div>
      <StablecoinYieldTracker />
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Stablecoin Yield Tracker",
              "url": "https://degen0x.com/tools/stablecoin-yield-tracker",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
            <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/tools" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            All Tools
          </Link>
          <Link href="/learn" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Learning Guides
          </Link>
          <Link href="/compare" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Compare Tools
          </Link>
        </div>
      </div>
    </div>
  );
}
