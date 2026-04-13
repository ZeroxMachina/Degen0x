import { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import CryptoGlossaryClient from './CryptoGlossaryClient';

export const metadata: Metadata = {
  title: "Crypto Glossary - Complete Cryptocurrency Terms Dictionary",
  description: "Comprehensive glossary of 200+ cryptocurrency and blockchain terms. Learn about Bitcoin, Ethereum, DeFi, NFTs, trading, and security concepts with real-world",
  keywords: [
    'crypto glossary',
    'cryptocurrency terms',
    'blockchain terminology',
    'bitcoin glossary',
    'ethereum glossary',
    'DeFi definitions',
    'NFT glossary',
    'crypto definitions',
    'web3 terms',
    'digital currency'
  ],
  openGraph: {
    title: 'Crypto Glossary - degen0x',
    description:
      'Complete glossary of 200+ cryptocurrency and blockchain terms with detailed definitions and examples.',
    type: 'website',
    url: 'https://degen0x.com/learn/crypto-glossary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Glossary - degen0x',
    description:
      'Complete glossary of 200+ cryptocurrency and blockchain terms with detailed definitions and examples.',
  },
  alternates: {
    canonical: 'https://degen0x.com/learn/crypto-glossary'
  }
};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://degen0x.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Crypto Glossary', },
  ],
};

export default function CryptoGlossaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'DefinedTermSet',
            name: 'Crypto Glossary',
            description:
              'A comprehensive glossary of cryptocurrency and blockchain terminology',
            url: 'https://degen0x.com/learn/crypto-glossary',
            hasDefinedTerm: [
              { '@type': 'DefinedTerm', name: 'Bitcoin', description: 'The first and most widely recognized cryptocurrency, created by Satoshi Nakamoto in 2009.' },
              { '@type': 'DefinedTerm', name: 'Blockchain', description: 'A distributed ledger technology that maintains a continuously growing list of records called blocks.' },
              { '@type': 'DefinedTerm', name: 'Ethereum', description: 'A blockchain platform that enables smart contracts and decentralized applications.' },
              { '@type': 'DefinedTerm', name: 'DeFi', description: 'A financial system built on blockchains that removes intermediaries like banks.' },
              { '@type': 'DefinedTerm', name: 'Smart Contract', description: 'A self-executing program on a blockchain that automatically executes terms when conditions are met.' },
              { '@type': 'DefinedTerm', name: 'NFT', description: 'A unique, non-interchangeable digital asset representing ownership of something specific.' },
              { '@type': 'DefinedTerm', name: 'Mining', description: 'The process of solving complex puzzles to validate transactions on Proof of Work blockchains.' },
              { '@type': 'DefinedTerm', name: 'Stablecoin', description: 'A cryptocurrency designed to maintain a stable value by being backed by reserves or an algorithm.' },
              { '@type': 'DefinedTerm', name: 'Gas Fee', description: 'The cost of performing a transaction or executing a smart contract on a blockchain.' },
              { '@type': 'DefinedTerm', name: 'Wallet', description: 'A digital tool for storing, sending, and receiving cryptocurrency.' },
            ]
          })
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What is cryptocurrency?', acceptedAnswer: { '@type': 'Answer', text: 'Cryptocurrency is a digital currency that uses cryptographic techniques for security, operating on a decentralized network.' } },
              { '@type': 'Question', name: 'What is blockchain?', acceptedAnswer: { '@type': 'Answer', text: 'A blockchain is a distributed ledger technology that maintains records called blocks, secured by cryptography.' } },
              { '@type': 'Question', name: 'What is DeFi?', acceptedAnswer: { '@type': 'Answer', text: 'DeFi (Decentralized Finance) is a financial system built on blockchains that removes intermediaries like banks.' } },
              { '@type': 'Question', name: 'What is an NFT?', acceptedAnswer: { '@type': 'Answer', text: 'An NFT (Non-Fungible Token) is a unique digital asset representing ownership of something specific, stored on a blockchain.' } },
              { '@type': 'Question', name: 'What is a smart contract?', acceptedAnswer: { '@type': 'Answer', text: 'A smart contract is a self-executing program on a blockchain that automatically executes terms when conditions are met.' } },
            ]
          })
        }}
      />
      <CryptoGlossaryClient />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Crypto Glossary - degen0x", "description": "Complete glossary of 200+ cryptocurrency and blockchain terms with detailed definitions and examples.", "url": "https://degen0x.com/learn/crypto-glossary", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/learn/[slug]" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>[Slug]</a>
  <a href="/learn/aave-v4-gho-stablecoin-defi-lending-guide-2026" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Aave V4 Gho Stablecoin Defi Lending Guide 2026</a>
  <a href="/learn/aave-v4-guide" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Aave V4 Guide</a>
  <a href="/learn/abstract-chain-consumer-crypto-zk-rollup-guide-2026" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Abstract Chain Consumer Crypto Zk Rollup Guide 2026</a>
  <a href="/learn/abstract-chain-guide" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Abstract Chain Guide</a>
  <a href="/learn/account-abstraction" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Account Abstraction</a>
  <a href="/learn/account-abstraction-erc-4337-guide" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Account Abstraction Erc 4337 Guide</a>
  <a href="/learn/advanced-defi-strategies" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Advanced Defi Strategies</a>
</nav>
      </>
  );
}
