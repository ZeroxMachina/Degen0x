import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Wei? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what wei is, the smallest denomination of Ether, how Ethereum denominations work, and why wei is important for smart contract development.",
};

export default function WeiPage() {
  return (
    <LearnPageLayout title="What Is Wei?" categoryName="Learn Crypto" categorySlug="learn" readTime="4 min read"
      intro="Wei is the smallest denomination of Ether (ETH), named after Wei Dai, a cryptography pioneer. One ETH equals 10^18 (one quintillion) wei. Just as a dollar is divisible into 100 cents, Ether is divisible into many smaller units, with wei being the atomic unit. Wei is critical for smart contract development and precise gas fee calculations, where fractional ETH amounts must be represented as whole numbers."
      toc={[{ id: "definition", title: "What Is Wei?", level: 2 }, { id: "denominations", title: "Ethereum Denominations", level: 2 }, { id: "why-wei-matters", title: "Why Wei Matters", level: 2 }, { id: "conversions", title: "Common Conversions", level: 2 }]}
      faqs={[{ question: "Why is the smallest unit called wei?", answer: "Wei is named after Wei Dai, the creator of b-money, a precursor to Bitcoin. Ethereum's other denominations are also named after notable computer scientists and cryptographers: gwei after Claude Shannon (Shannon), finney after Hal Finney, and szabo after Nick Szabo." },
        { question: "Do I need to know about wei as a regular user?", answer: "For everyday use, no. Wallets display amounts in ETH or gwei. However, understanding wei helps when reading smart contract code, debugging transactions, or working with developer tools. When a transaction shows a value like 1000000000000000000, that is simply 1 ETH expressed in wei." }]}
      relatedArticles={[{ title: "Gas", href: "/learn/glossary/gas", category: "Glossary" }, { title: "Gwei", href: "/learn/glossary/gwei", category: "Glossary" }, { title: "Gas Price", href: "/learn/glossary/gas-price", category: "Glossary" }, { title: "What Is Ethereum?", href: "/learn/what-is-ethereum", category: "Learn Crypto" }]}
    >
      <h2 id="definition">What Is Wei?</h2>
      <p>Wei is the base unit of Ether, representing the smallest indivisible amount of ETH. All ETH values in smart contracts and at the protocol level are stored and calculated in wei. When you see a transaction value of 50000000000000000 wei, that equals 0.05 ETH. This system ensures precision in calculations, as floating-point arithmetic is unreliable in deterministic smart contract execution.</p>

      <h2 id="denominations">Ethereum Denominations</h2>
      <p>Ethereum has several named denominations between wei and ETH. Gwei (gigawei, or 10^9 wei) is the most commonly used intermediate denomination, as gas prices are expressed in gwei. One gwei equals 0.000000001 ETH. Other denominations include szabo (10^12 wei), finney (10^15 wei), and ether (10^18 wei). In practice, users encounter only ETH and gwei in daily interactions.</p>

      <h2 id="why-wei-matters">Why Wei Matters</h2>
      <p>Smart contracts cannot use decimal numbers. All token balances, transfer amounts, and calculations use integer arithmetic in wei. When Solidity code processes a transfer of 1.5 ETH, it actually handles 1500000000000000000 wei. This integer-based approach prevents rounding errors that could be exploited in financial contracts. Developers must be careful with wei-to-ETH conversions to avoid precision loss or overflow errors.</p>

      <h2 id="conversions">Common Conversions</h2>
      <p>Key conversions to remember: 1 ETH = 10^18 wei = 10^9 gwei. 1 gwei = 10^9 wei. A gas price of 30 gwei means each gas unit costs 30,000,000,000 wei. Online tools like eth-converter.com make it easy to convert between denominations. Most development frameworks like ethers.js and web3.js provide built-in utility functions for denomination conversion to prevent manual calculation errors.</p>
    </LearnPageLayout>
  );
}
