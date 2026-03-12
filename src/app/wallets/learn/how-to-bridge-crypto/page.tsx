import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Bridge Crypto Between Chains: Complete Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Step-by-step guide to bridging crypto between blockchains in ${CURRENT_YEAR}. Learn how bridges work, which bridges to use, risks involved, and how to move assets across chains safely.`,
};

export default function HowToBridgeCryptoPage() {
  return (
    <LearnPageLayout
      title="How to Bridge Crypto Between Chains: Complete Guide"
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      readTime="10 min"
      intro="Bridging allows you to move cryptocurrency assets from one blockchain to another. As crypto has expanded across dozens of networks — Ethereum, Solana, Arbitrum, Base, Polygon, BNB Chain, and more — bridging has become an essential skill. This guide explains how bridges work, which ones to use, and how to bridge safely without losing funds."
      toc={[
        { id: "what-is-bridging", title: "what-is-bridging", level: 2 },
        { id: "what-is-bridging", title: "What Is Bridging?", level: 2 },
        { id: "how-bridges-work", title: "how-bridges-work", level: 2 },
        { id: "how-crypto-bridges-work", title: "How Crypto Bridges Work", level: 2 },
        { id: "popular-bridges", title: "popular-bridges", level: 2 },
        { id: "popular-bridges", title: "Popular Bridges", level: 2 },
        { id: "step-by-step", title: "step-by-step", level: 2 },
        { id: "step-by-step-bridging-guide", title: "Step-by-Step Bridging Guide", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "bridge-risks-security", title: "Bridge Risks & Security", level: 2 },
        { id: "tips", title: "tips", level: 2 },
        { id: "tips-for-safe-bridging", title: "Tips for Safe Bridging", level: 2 }
      ]}
      faqs={[
        {
          question: "How long does bridging take?",
          answer: "Bridge times vary significantly. Transfers between Ethereum and Layer 2s like Arbitrum or Optimism take about 10-20 minutes when using third-party bridges (like Across or Stargate). Native Optimism bridge withdrawals from L2 to Ethereum take 7 days due to the challenge period. Solana to Ethereum bridges typically take 10-30 minutes. Always check the estimated time before confirming a bridge transaction.",
        },
        {
          question: "Are crypto bridges safe?",
          answer: "Bridges are one of the higher-risk components in crypto. Over $2.5 billion has been stolen from bridge exploits historically, including major hacks of Ronin Bridge, Wormhole, and Nomad. However, well-established bridges with strong security track records (like the native Layer 2 bridges, Across, and Stargate) are generally considered safe for everyday use. Always use reputable bridges and avoid unknown or unaudited ones.",
        },
        {
          question: "Can I bridge any token to any chain?",
          answer: "No. Each bridge supports specific token-chain pairs. Most bridges support major assets like ETH, USDC, and USDT across popular chains. For less common tokens, you may need to swap to a supported asset first, bridge that asset, then swap back on the destination chain. Bridge aggregators like Li.Fi and Socket help find the best route for any token pair.",
        },
      ]}
      relatedArticles={[
        { title: "How to Use MetaMask", href: "/wallets/learn/how-to-use-metamask", category: "Wallets" },
        { title: "Wallet Security Best Practices", href: "/wallets/learn/wallet-security-best-practices", category: "Wallets" },
        { title: "Hot vs Cold Wallets", href: "/wallets/learn/hot-vs-cold-wallets", category: "Wallets" },
      ]}
    >
      <h2 id="what-is-bridging">What Is Bridging?</h2>
      <p>
        Bridging is the process of transferring cryptocurrency assets from one blockchain network to another. Because blockchains are independent systems that cannot natively communicate with each other, bridges act as intermediaries that lock your assets on the source chain and issue equivalent assets on the destination chain. For example, if you have ETH on Ethereum mainnet and want to use it on Arbitrum, a bridge locks your ETH on Ethereum and releases ETH on Arbitrum for you to use. Bridging is essential for accessing DeFi protocols, NFT marketplaces, and applications on different chains.
      </p>

      <h2 id="how-bridges-work">How Crypto Bridges Work</h2>
      <p>
        Most bridges use a lock-and-mint or burn-and-mint mechanism. In lock-and-mint, you send tokens to a smart contract on the source chain that locks them, and the bridge mints equivalent wrapped tokens on the destination chain. In burn-and-mint, tokens are burned (destroyed) on the source chain and minted fresh on the destination. Some bridges use liquidity pools on both chains, where your deposit on one side is matched by a withdrawal from a pool on the other side. This liquidity pool model (used by Across and Stargate) is generally faster because it does not require waiting for cross-chain message verification. Native Layer 2 bridges (Arbitrum Bridge, Optimism Bridge, Base Bridge) use the rollup&apos;s own security model, making them the most trust-minimized option for L2 transfers.
      </p>

      <h2 id="popular-bridges">Popular Bridges</h2>
      <p>
        For Ethereum Layer 2 transfers, the native bridges (Arbitrum Bridge, Optimism Gateway, Base Bridge) are the most secure option, though withdrawals to L1 can be slow. Across Protocol is a fast, low-fee bridge supporting Ethereum, Arbitrum, Optimism, Base, Polygon, and other EVM chains, with typical transfer times under 2 minutes. Stargate (built on LayerZero) supports cross-chain transfers across many EVM chains with deep liquidity. Wormhole connects Ethereum, Solana, and 20+ other chains, making it the primary bridge for non-EVM ecosystems. For finding the best bridge route, aggregators like Li.Fi, Socket (Bungee), and Jumper Exchange compare multiple bridges to find the cheapest and fastest path for your specific transfer.
      </p>

      <h2 id="step-by-step">Step-by-Step Bridging Guide</h2>
      <p>
        To bridge assets, first connect your wallet (like MetaMask or Phantom) to the bridge interface. Select the source chain where your tokens currently reside and the destination chain where you want them. Choose the token and enter the amount you want to bridge. The bridge will show you the estimated output amount, fees, and transfer time. Review all details carefully, including the destination address (it should be your own wallet). Approve the token spending if required, then confirm the bridge transaction. Wait for the transfer to complete — you can usually track progress on the bridge interface. Once complete, switch your wallet to the destination network to see your bridged assets. Ensure you have native gas tokens on the destination chain for future transactions.
      </p>

      <h2 id="risks">Bridge Risks &amp; Security</h2>
      <p>
        Bridges have historically been one of the most exploited components in crypto. The Ronin Bridge hack ($624M), Wormhole exploit ($320M), and Nomad hack ($190M) demonstrated the catastrophic consequences of bridge vulnerabilities. Risks include smart contract bugs, validator collusion (in bridges that rely on a set of validators), oracle manipulation, and governance attacks. The security model of a bridge depends on its architecture: native L2 bridges inherit the security of the underlying rollup, while third-party bridges rely on their own validator sets or optimistic verification systems. The amount of value at risk in bridge contracts makes them high-value targets for attackers.
      </p>

      <h2 id="tips">Tips for Safe Bridging</h2>
      <p>
        Use well-established bridges with strong security track records and completed audits. For Layer 2 transfers, prefer native bridges when time is not critical. Start with a small test transaction before bridging large amounts. Verify the bridge URL carefully, as phishing sites impersonating popular bridges are common. Check that the destination address is correct before confirming. Avoid bridges with anonymous teams or no audit history. Use bridge aggregators to compare fees and find optimal routes. Keep enough native gas tokens on your destination chain for subsequent transactions. Be aware that bridged (wrapped) tokens may have different properties than native tokens, and always verify token contract addresses on the destination chain through official sources.
      </p>
    </LearnPageLayout>
  );
}
