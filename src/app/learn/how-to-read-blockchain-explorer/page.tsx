import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Read a Blockchain Explorer (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Guide to reading blockchain explorers like Etherscan including transaction details, address information, smart contracts, and token tracking.",
  keywords: ["blockchain explorer", "Etherscan", "how to read Etherscan", "block explorer", "transaction hash", "blockchain transparency"],
};

export default function HowToReadBlockchainExplorerPage() {
  return (
    <LearnPageLayout title="How to Read a Blockchain Explorer" categoryName="Crypto Education" categorySlug="learn" readTime="7 min" intro="Blockchain explorers are essential tools for verifying transactions, researching addresses, analyzing smart contracts, and understanding on-chain activity. Etherscan is the most popular explorer for Ethereum, but similar tools exist for every major blockchain. Learning to navigate these tools gives you direct access to transparent, verifiable blockchain data."
      toc={[
        { id: "overview", title: "What Is a Block Explorer?", level: 2 },
        { id: "transactions", title: "Reading Transactions", level: 2 },
        { id: "addresses", title: "Exploring Addresses", level: 2 },
        { id: "contracts", title: "Smart Contract Info", level: 2 },
        { id: "tools", title: "Popular Explorers", level: 2 },
      ]}
      faqs={[
        { question: "What is a transaction hash?", answer: "A transaction hash (txid) is a unique identifier for every blockchain transaction. It is a long alphanumeric string that you can paste into a block explorer to view the full details of the transaction including status, sender, recipient, amount, gas used, and timestamp." },
        { question: "Can I see other people's transactions?", answer: "Yes, most blockchains are public and transparent. Anyone can view any address's transaction history, balances, and token holdings through a block explorer. This is a fundamental property of public blockchains. Only the identity behind an address is private unless voluntarily revealed." },
        { question: "How do I verify a smart contract on Etherscan?", answer: "Go to the contract's address on Etherscan and check the 'Contract' tab. Verified contracts show their source code, which you can read and audit. Unverified contracts only show bytecode. Interacting with unverified contracts carries higher risk since you cannot review what the code does." },
      ]}
      relatedArticles={[
        { title: "How to Verify a Smart Contract", href: "/learn/how-to-verify-smart-contract", category: "Learn" },
        { title: "What Is a Hash?", href: "/learn/what-is-a-hash", category: "Learn" },
        { title: "What Is Gas?", href: "/learn/what-is-gas", category: "Learn" },
        { title: "How to Research Crypto", href: "/learn/how-to-research-crypto", category: "Learn" },
      ]}
    >
      <section id="overview"><h2>What Is a Block Explorer?</h2><p>A blockchain explorer is a web application that reads and presents blockchain data in a human-readable format. It indexes every block, transaction, address, and smart contract on the blockchain, allowing users to search and browse this data freely. Block explorers are the equivalent of a financial ledger that anyone can audit — they make blockchain transparency accessible and practical.</p><p>Every major blockchain has at least one block explorer: Etherscan for Ethereum, Solscan and Solana Explorer for Solana, Arbiscan for Arbitrum, BaseScan for Base, and so on. Most explorers share similar layouts and functionality, so learning one transfers well to others. Block explorers are indispensable for verifying transactions, researching tokens, and performing due diligence on smart contracts.</p></section>
      <section id="transactions"><h2>Reading Transactions</h2><p>Transaction pages show: the status (success, failed, or pending), the block number where the transaction was included, the timestamp, the sender (From) and recipient (To) addresses, the value transferred, gas fees paid, and for smart contract interactions the input data describing what function was called. Failed transactions still cost gas but do not execute the intended action.</p><p>Token transfers appear separately from native currency (ETH) transfers in the transaction details. Internal transactions show nested calls between smart contracts triggered by the original transaction. The gas price and gas used determine the total fee. Reading transaction details helps you verify that transfers completed correctly, debug failed transactions, and understand what smart contract interactions actually did.</p></section>
      <section id="addresses"><h2>Exploring Addresses</h2><p>Address pages show the current balance, complete transaction history, token holdings (ERC-20, ERC-721 NFTs), and for smart contracts the contract code and interaction history. You can see every transaction an address has ever sent or received, providing complete transparency about its on-chain activity. The token holdings tab shows all tokens held by the address across different standards.</p><p>Address analytics can reveal useful information: large token holders (whales), team wallet activity, exchange deposit addresses, and contract deployment history. Some explorers label known addresses (exchange wallets, protocol treasuries, notable entities), making it easier to identify the parties in transactions. This transparency is valuable for research and due diligence on projects and counterparties.</p></section>
      <section id="contracts"><h2>Smart Contract Info</h2><p>Smart contract addresses have a "Contract" tab showing whether the source code is verified. Verified contracts display readable Solidity code, the compiler version, and optimization settings. The "Read Contract" section lets you query public functions without making transactions, while "Write Contract" allows you to interact with contract functions through your connected wallet.</p><p>When researching a protocol, check: whether the contract is verified (unverified is a red flag), the contract's creation date and deployer address, whether the contract is a proxy (upgradeable), who has owner or admin privileges, and the contract's interaction volume and unique users. This information helps assess the legitimacy and risk level of protocols before you interact with them.</p></section>
      <section id="tools"><h2>Popular Explorers</h2><p>Etherscan (etherscan.io) is the gold standard for Ethereum. Its family of explorers covers most EVM chains: Arbiscan, BaseScan, Optimism Etherscan, Polygonscan, and BscScan. Solscan and Solana Beach serve the Solana ecosystem. Mintscan covers Cosmos chains. Each blockchain typically has multiple explorer options with slightly different features and interfaces.</p><p>Advanced tools complement basic explorers: Dune Analytics allows custom queries on blockchain data. Nansen and Arkham Intelligence add wallet labels and analytics. DeFi Llama tracks protocol TVL and metrics. Token Sniffer and GoPlus analyze token contracts for security risks. Building familiarity with these tools gives you a comprehensive toolkit for on-chain research and analysis.</p></section>
    </LearnPageLayout>
  );
}
