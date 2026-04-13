import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Superfluid Review ${CURRENT_YEAR}: Fees, Features, Pros & Cons`,
  description: "Superfluid review: Money streaming on blockchain. Real-time payments, subscriptions, payroll. Compare token streams and payment automation tools.",
  alternates: { canonical: "/web3-business/reviews/superfluid" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Web3 Business', item: 'https://degen0x.com/web3-business' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/web3-business/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Superfluid', },
  ],
};

export default function SuperfluidReview() {
  return (
    <>
      <ReviewPage
      product={{
        name: "Superfluid",
        slug: "superfluid",
        rating: 4.3,
        description: "Superfluid is a token streaming protocol enabling real-time continuous payment flows for subscriptions, salaries, and any recurring payment use case on EVM chains.",
        pros: [
          "Real-time payment streaming with per-second granularity",
          "Gas-efficient streaming architecture",
          "Multi-chain support across major EVM networks",
          "Programmable payment flows via smart contracts",
          "Active developer community and ecosystem",
        ],
        cons: [
          "Requires wrapped Super Tokens for streaming",
          "Complexity of token wrapping may confuse new users",
          "Limited non-EVM chain support",
          "Dashboard interface could be more intuitive",
        ],
        bestFor: "Web3 organizations needing real-time payment streaming",
        affiliateUrl: "#",
        category: "web3-business",
      }}
      categoryName="Web3 Business"
      categorySlug="web3-business"
      overview={`Superfluid revolutionizes how payments work by enabling continuous, real-time money streaming on the blockchain. Instead of periodic batch payments, Superfluid allows money to flow continuously from sender to receiver at a specified rate per second, creating a fundamentally new payment primitive for subscriptions, salaries, and recurring payments.

The protocol operates on multiple EVM chains and uses a gas-efficient architecture where streams, once opened, do not require additional transactions to maintain. This means ongoing salary payments or subscription flows continue automatically without repeated manual transactions or gas costs.

Superfluid's programmable nature allows developers to build complex payment logic including multi-hop streams, conditional flows, and integration with DeFi protocols for automated treasury management.`}
      sections={[
        { id: "core-features", title: "Core Features", content: "Superfluid enables continuous payment streams that transfer tokens in real-time at per-second granularity. Streams are gas-efficient, requiring only opening and closing transactions. The protocol supports batch operations for managing multiple streams simultaneously, distributions for one-to-many payments, and composable flows that integrate with other DeFi protocols for advanced treasury automation." },
        { id: "integration", title: "Integration and Setup", content: "Integration involves wrapping tokens into Super Tokens (Superfluid's streaming-compatible format), then creating streams through the dashboard, SDK, or direct smart contract interaction. The Superfluid SDK provides JavaScript and Solidity libraries for application integration. Comprehensive documentation and tutorials cover common use cases from basic streaming to complex programmable flows." },
        { id: "pricing-settlement", title: "Pricing and Settlement", content: "Superfluid charges no protocol fees for basic streaming functionality. Users pay only blockchain gas costs for opening and closing streams. The protocol's gas efficiency means ongoing streams have zero marginal cost. Enterprise and advanced features may have associated costs. Token wrapping and unwrapping incur standard gas fees." },
      ]}
      fees={{
        "Protocol Fee": "Free for basic streaming",
        "Gas Costs": "Opening and closing streams only",
        "Token Wrapping": "Standard gas fees",
        "Ongoing Streams": "No additional cost",
      }}
      security={[
        "Multiple smart contract audits",
        "Bug bounty program",
        "Formal verification of core contracts",
        "Active security monitoring",
        "Decentralized protocol architecture",
      ]}
      features={[
        "Real-time payment streaming",
        "Per-second payment granularity",
        "Multi-chain EVM support",
        "Batch stream management",
        "One-to-many distributions",
        "Programmable payment flows",
      ]}
      faqs={[
        { question: "How does Superfluid streaming work?", answer: "Superfluid creates continuous payment flows where tokens transfer in real-time at a per-second rate. Once a stream is opened with a single transaction, payments flow automatically until the stream is closed or the sender's balance is depleted." },
        { question: "What are Super Tokens?", answer: "Super Tokens are wrapped versions of regular ERC-20 tokens that are compatible with Superfluid's streaming protocol. You wrap tokens before streaming and unwrap them to convert back to regular tokens." },
      ]}
      relatedReviews={[
        { name: "Sablier", slug: "sablier" },
      ]}
      relatedGuides={[
        { title: "Crypto Business Guide", href: "/web3-business/learn/crypto-business-guide" },
        { title: "Web3 Legal Considerations", href: "/web3-business/learn/web3-legal-considerations" },
      ]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}
