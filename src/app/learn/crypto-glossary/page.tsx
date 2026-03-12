import { Metadata } from 'next';
import CryptoGlossaryClient from './CryptoGlossaryClient';

export const metadata: Metadata = {
  title: 'Crypto Glossary | degen0x - Complete Cryptocurrency Terms Dictionary',
  description:
    'Comprehensive glossary of 200+ cryptocurrency and blockchain terms. Learn about Bitcoin, Ethereum, DeFi, NFTs, trading, and security concepts with real-world examples and related terms.',
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

export default function CryptoGlossaryPage() {
  return (
    <>
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
        type="application/ld+json"
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
    </>
  );
}
