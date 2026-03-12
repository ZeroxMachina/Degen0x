import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Bridge Crypto (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Step-by-step guide to bridging cryptocurrency between blockchains including bridge types, popular bridges, fees, and security considerations.",
  keywords: ["bridge crypto", "cross-chain bridge", "how to bridge tokens", "blockchain bridge", "crypto bridge guide"],
};

export default function HowToBridgeCryptoPage() {
  return (
    <LearnPageLayout title="How to Bridge Crypto" categoryName="Crypto Education" categorySlug="learn" readTime="7 min" intro="Bridging allows you to transfer assets between different blockchain networks — for example, moving ETH from Ethereum mainnet to Arbitrum for lower-cost DeFi interactions. As the multi-chain ecosystem grows, bridging has become an essential skill for navigating DeFi across multiple networks."
      toc={[
        { id: "what-is-bridging", title: "what-is-bridging", level: 2 },
        { id: "what-is-bridging", title: "What Is Bridging?", level: 2 },
        { id: "bridge-types", title: "bridge-types", level: 2 },
        { id: "types-of-bridges", title: "Types of Bridges", level: 2 },
        { id: "how-to-bridge", title: "how-to-bridge", level: 2 },
        { id: "how-to-bridge", title: "How to Bridge", level: 2 },
        { id: "popular-bridges", title: "popular-bridges", level: 2 },
        { id: "popular-bridges", title: "Popular Bridges", level: 2 },
        { id: "security", title: "security", level: 2 },
        { id: "security-considerations", title: "Security Considerations", level: 2 }
      ]}
      faqs={[
        { question: "How long does bridging take?", answer: "Bridge times vary significantly. Official L2 bridges from Ethereum can take minutes to hours (or 7 days for optimistic rollup withdrawals back to L1). Third-party bridges like Across and Stargate typically complete in minutes. Speed depends on the bridge type, source and destination networks, and network congestion." },
        { question: "Are bridges safe?", answer: "Bridges have been the target of some of the largest hacks in crypto history. Official canonical bridges (operated by L2 networks) are generally the safest option. Third-party bridges offer convenience and speed but introduce additional smart contract risk. Always use well-established bridges with strong security track records." },
        { question: "What are bridge fees?", answer: "Bridge fees include the bridge protocol fee (typically 0.01-0.5% of the transfer), gas fees on the source chain, and sometimes gas fees on the destination chain. Official bridges are usually cheaper but slower, while third-party bridges charge higher fees for faster processing." },
      ]}
      relatedArticles={[
        { title: "What Is a Bridge?", href: "/learn/what-is-a-bridge", category: "Learn" },
        { title: "How to Use Layer 2", href: "/learn/how-to-use-layer-2", category: "Learn" },
        { title: "What Is Interoperability?", href: "/learn/what-is-interoperability", category: "Learn" },
        { title: "How to Use MetaMask", href: "/learn/how-to-use-metamask", category: "Learn" },
      ]}
    >
      <section id="what-is-bridging"><h2>What Is Bridging?</h2><p>Bridging is the process of transferring assets from one blockchain to another. Since blockchains are independent networks that do not natively communicate, bridges provide the infrastructure to lock assets on one chain and mint equivalent representations on another, or use liquidity pools on both sides to facilitate swaps. Bridging enables you to access DeFi opportunities, lower transaction costs, or use specific applications available on different networks.</p><p>When you bridge ETH from Ethereum to Arbitrum, for example, your ETH is locked in a bridge contract on Ethereum, and an equivalent amount of ETH is made available to you on Arbitrum. The bridged ETH is fully backed by the locked ETH on the source chain. Understanding this mechanism helps you appreciate both the utility and the risks of bridging.</p></section>
      <section id="bridge-types"><h2>Types of Bridges</h2><p>Canonical bridges are the official bridges operated by Layer 2 networks (Arbitrum Bridge, Optimism Gateway, Base Bridge). They offer the highest security guarantees because they use the same trust assumptions as the L2 itself, but may have longer withdrawal times — optimistic rollup bridges require a 7-day challenge period for withdrawals back to Ethereum.</p><p>Third-party bridges (Across, Stargate, Hop Protocol, Wormhole) offer faster transfers and support a wider range of network combinations. They achieve speed by using liquidity providers who front the capital and are reimbursed later. These bridges introduce additional smart contract risk but are significantly more convenient for frequent cross-chain users. Aggregators like LI.FI and Socket compare rates across multiple bridges to find optimal routes.</p></section>
      <section id="how-to-bridge"><h2>How to Bridge</h2><p>To bridge assets: navigate to the bridge interface, connect your wallet, select the source network and destination network, choose the token and amount to bridge, review the estimated fee and time, and confirm the transaction. You will need to have gas tokens on the source chain to pay for the transaction. Some bridges automatically provide a small amount of gas tokens on the destination chain for your first transaction.</p><p>After initiating the bridge, wait for the transaction to confirm on the source chain and then for the bridge to process the transfer. Canonical bridges may require additional time for finality. Third-party bridges typically complete within minutes. Track your bridge transaction through the bridge's interface or through block explorers on both chains. Once completed, your assets will appear in your wallet on the destination network.</p></section>
      <section id="popular-bridges"><h2>Popular Bridges</h2><p>For Ethereum to L2 transfers, the official bridges (Arbitrum Bridge, Optimism Gateway, Base Bridge) are the safest option. Across Protocol is a fast third-party bridge for Ethereum and its L2s. Stargate Finance enables cross-chain transfers across many networks with native asset finality. Wormhole connects a wide range of networks including Solana and Cosmos chains. Portal Bridge provides access to non-EVM chains.</p><p>Bridge aggregators like LI.FI, Socket, and Jumper Exchange compare routes across multiple bridges to find the best combination of speed, cost, and reliability. MetaMask has integrated bridge functionality directly into the wallet. For large transfers, consider using canonical bridges despite longer wait times to minimize smart contract risk. For smaller, frequent transfers, third-party bridges and aggregators offer the best convenience.</p></section>
      <section id="security"><h2>Security Considerations</h2><p>Bridge exploits have resulted in some of the largest losses in crypto history (Ronin, Wormhole, Nomad). To minimize risk: use well-established bridges with long track records and significant audits, avoid bridging through newly launched or unaudited bridges, verify you are using the official bridge interface (bookmark URLs), and split large transfers into multiple smaller transactions.</p><p>Be aware of additional risks: some bridges may charge hidden fees through unfavorable exchange rates, phishing sites frequently impersonate popular bridges, and bridge tokens may not be fungible with native tokens on the destination chain (wrapped tokens versus native tokens). Always verify the token you receive on the destination chain is the one accepted by the DeFi protocols you intend to use.</p></section>
    </LearnPageLayout>
  );
}
