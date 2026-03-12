import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Layer 2 Scaling Solutions Compared: Arbitrum, Optimism, zkSync | degen0x`,
  description:
    "Compare Optimistic rollups vs ZK rollups, explore Arbitrum, Optimism, zkSync, StarkNet, and Base, understand trade-offs, and learn how to bridge assets.",
};

export default function Layer2ScalingSolutionsPage() {
  return (
    <LearnPageLayout
      title="Layer 2 Scaling Solutions Compared"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="13 min read"
      intro="Ethereum's success created a problem: the network became so popular that transaction costs (gas fees) exceeded $50-100 during peak usage, making small transactions economically unfeasible. Layer 2 solutions solve this by moving transactions off the main Ethereum chain while maintaining security guarantees. This guide compares Optimistic and ZK rollups, explores leading L2s like Arbitrum and Optimism, discusses emerging solutions, and explains how to bridge assets across networks."
      toc={[
        { id: "what-are-l2s", title: "what-are-l2s", level: 2 },
        { id: "what-are-layer-2s", title: "What Are Layer 2s?", level: 2 },
        { id: "optimistic-vs-zk", title: "optimistic-vs-zk", level: 2 },
        { id: "optimistic-vs-zk-rollups", title: "Optimistic vs ZK Rollups", level: 2 },
        { id: "major-l2-projects", title: "major-l2-projects", level: 2 },
        { id: "major-l2-projects", title: "Major L2 Projects", level: 2 },
        { id: "l2-tradeoffs", title: "l2-tradeoffs", level: 2 },
        { id: "l2-tradeoffs-considerations", title: "L2 Tradeoffs & Considerations", level: 2 },
        { id: "bridging-guide", title: "bridging-guide", level: 2 },
        { id: "bridging-assets-across-l2s", title: "Bridging Assets Across L2s", level: 2 },
        { id: "future-scaling", title: "future-scaling", level: 2 },
        { id: "future-of-l2-scaling", title: "Future of L2 Scaling", level: 2 }
      ]}
      faqs={[
        {
          question: "Are Layer 2s as secure as Ethereum mainnet?",
          answer:
            "Theoretically yes, but practically with nuances. Both Optimistic and ZK rollups cryptographically guarantee that batch withdrawals to mainnet are valid. However, they inherit security from Ethereum mainnet—if Ethereum is compromised, so are the L2s. Additionally, some L2s have centralized sequencers (the entity ordering transactions), which is a temporary security assumption. As L2s decentralize sequencers, this gap closes. In general, L2s are nearly as secure as mainnet but with slightly different assumptions.",
        },
        {
          question: "Can I lose my crypto when bridging to L2?",
          answer:
            "Bridges carry risk. Official Ethereum-L2 bridges use cryptographic guarantees and are very safe, but third-party bridges (like cross-chain bridges between L2s) have higher risk. Multiple bridge hacks have resulted in millions in losses. Always use official L2 bridges from the L2 team when moving large amounts. For smaller amounts, third-party bridges are often fine. Never bridge more than you can afford to lose until you're confident in the bridge security.",
        },
        {
          question: "Why don't all dApps deploy to L2?",
          answer:
            "Different L2s have different tradeoffs, and dApp teams must choose where to deploy. Some L2s are more EVM-compatible, some have better economics, some have larger user bases. Additionally, cross-chain liquidity fragmentation is a real problem—if Uniswap is on 10 different chains, each pool has less liquidity, resulting in higher slippage. Projects are exploring unified liquidity models, but it's still an unsolved problem.",
        },
        {
          question: "What's the withdrawal time from L2 to mainnet?",
          answer:
            "Optimistic rollups require a 7-day challenge period (on Arbitrum and Optimism)—your withdrawal is pending for a week while other validators can challenge it. ZK rollups have near-instant confirmation since proofs are verified on-chain immediately. This is a significant user experience advantage for ZK rollups. However, both Optimistic rollups now support fast exits via liquidity providers who front capital.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Ethereum?", href: "/learn/what-is-ethereum", category: "Learn Crypto" },
        { title: "DeFi Explained", href: "/learn/what-is-defi", category: "Learn Crypto" },
        { title: "Smart Contracts 101", href: "/learn/smart-contracts", category: "Learn Crypto" },
        { title: "Blockchain Scalability", href: "/learn/blockchain-scalability", category: "Learn Crypto" },
      ]}
    >
      <section id="what-are-l2s">
        <h2>What Are Layer 2s?</h2>
        <p>
          Layer 2s (L2s) are blockchain systems that execute transactions separately from Ethereum mainnet (Layer 1) but inherit security from L1. Transactions occur on the L2, keeping records independent of mainnet. Periodically, the L2 sends a single batch of transactions back to mainnet, which cryptographically proves that all L2 transactions were valid. This compression reduces the data needed on mainnet, enabling far higher throughput at lower cost.
        </p>
        <p>
          The fundamental insight is that you don't need every Ethereum validator to process every transaction. Instead, a smaller set of validators process transactions on the L2, and only submit periodic commitments to mainnet for security verification. This allows L2s to achieve 100-1000x throughput improvements and cost reductions compared to mainnet.
        </p>
        <p>
          Users must bridge assets from Ethereum mainnet to L2, execute transactions there, and bridge back when withdrawing. This introduces friction and bridge risk compared to staying on mainnet. However, the cost and speed improvements are dramatic—transactions cost cents instead of dollars, and confirmation times are seconds instead of minutes.
        </p>

        <div className="bg-blue-900 border border-blue-700 rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold text-blue-100 mb-3">L2 Security Model</h3>
          <p className="text-blue-100">
            L2s are "validity scaling"—they execute transactions off-chain but post enough data to mainnet for anyone to verify validity independently. This is different from "consensus scaling" (moving to a different blockchain), which trades finality for speed. L2 security is backed by mainnet's validators, making them nearly as secure as mainnet itself.
          </p>
        </div>
      </section>

      <section id="optimistic-vs-zk">
        <h2>Optimistic Rollups vs ZK Rollups</h2>
        <p>
          Optimistic rollups (Arbitrum, Optimism) assume transactions are valid by default. They post transaction batches to mainnet and assume all transactions are legitimate. If someone disputes a transaction's validity, an interactive dispute resolution process (called fraud proofs) determines what actually happened. The assumption of honesty (optimism) makes the system efficient.
        </p>
        <p>
          ZK rollups (zkSync, StarkNet) use zero-knowledge proofs to cryptographically prove that all transactions in a batch are valid before posting to mainnet. Unlike optimistic rollups which must prove fraud was committed, ZK rollups prove validity upfront. This eliminates the need for dispute periods and makes withdrawals instant (once the proof is verified on mainnet).
        </p>
        <p>
          The tradeoff is computational complexity. Generating ZK proofs is harder than optimistic rollups—the math is more complex and requires more computation. Historically, this made ZK rollups slower and more resource-intensive. However, improvements in proof systems have narrowed this gap, and modern ZK rollups are becoming competitive.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-700">
                <th className="border border-gray-600 px-4 py-2 text-left">Property</th>
                <th className="border border-gray-600 px-4 py-2 text-left">Optimistic Rollups</th>
                <th className="border border-gray-600 px-4 py-2 text-left">ZK Rollups</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-800 hover:bg-gray-750">
                <td className="border border-gray-600 px-4 py-2">Security Assumption</td>
                <td className="border border-gray-600 px-4 py-2">Assume valid, prove fraud</td>
                <td className="border border-gray-600 px-4 py-2">Prove validity cryptographically</td>
              </tr>
              <tr className="bg-gray-800 hover:bg-gray-750">
                <td className="border border-gray-600 px-4 py-2">Withdrawal Time</td>
                <td className="border border-gray-600 px-4 py-2">7 days (challenge period)</td>
                <td className="border border-gray-600 px-4 py-2">~20 min (proof verification)</td>
              </tr>
              <tr className="bg-gray-800 hover:bg-gray-750">
                <td className="border border-gray-600 px-4 py-2">Proof Complexity</td>
                <td className="border border-gray-600 px-4 py-2">Low (dispute if needed)</td>
                <td className="border border-gray-600 px-4 py-2">High (always prove validity)</td>
              </tr>
              <tr className="bg-gray-800 hover:bg-gray-750">
                <td className="border border-gray-600 px-4 py-2">EVM Compatibility</td>
                <td className="border border-gray-600 px-4 py-2">Full (drop-in replacement)</td>
                <td className="border border-gray-600 px-4 py-2">Partial (different opcodes)</td>
              </tr>
              <tr className="bg-gray-800 hover:bg-gray-750">
                <td className="border border-gray-600 px-4 py-2">Fast Exits</td>
                <td className="border border-gray-600 px-4 py-2">Yes (via liquidity providers)</td>
                <td className="border border-gray-600 px-4 py-2">Near-instant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="major-l2-projects">
        <h2>Major Layer 2 Projects</h2>
        <p>
          Arbitrum is the dominant Optimistic rollup by TVL and user base. It maintains full EVM compatibility (smart contracts written for Ethereum work identically on Arbitrum with minimal changes). Arbitrum One is the primary mainnet; Arbitrum Nova targets gaming and social media with even lower fees. The Arbitrum DAO governs protocol changes, giving token holders decision power.
        </p>
        <p>
          Optimism is the second-largest Optimistic rollup. It pioneered several L2 innovations and maintains similar EVM compatibility to Arbitrum. Optimism's governance token (OP) has created one of crypto's largest decentralized governance communities. Optimism is home to major projects like Uniswap, Aave, and Curve, making it a hub for L2 DeFi.
        </p>
        <p>
          Base (built by Coinbase on Optimism's tech stack) is a newer L2 growing rapidly due to Coinbase's distribution. Base aims to be the "onramp for the internet" and benefits from being built on solid Optimistic rollup technology. It's emerging as a strong third competitor alongside Arbitrum and Optimism.
        </p>
        <p>
          zkSync is the leading ZK rollup with significant ecosystem development. It uses ZK-SNARK proofs and supports smart contracts through a VM optimized for ZK proving. StarkNet uses STARKs (a different zero-knowledge proof type) and takes a more innovative approach to smart contract execution. Both ZK rollups face less mature ecosystems but offer inherent advantages like faster withdrawals.
        </p>

        <div className="bg-purple-900 border border-purple-700 rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold text-purple-100 mb-3">L2 Comparison by Size</h3>
          <ul className="text-purple-100 space-y-2">
            <li><strong>Arbitrum:</strong> Largest TVL (~$30B+), full EVM, strong ecosystem</li>
            <li><strong>Optimism:</strong> Second largest TVL, strong governance, Uniswap/Aave</li>
            <li><strong>Base:</strong> Growing rapidly, benefits from Coinbase integration</li>
            <li><strong>zkSync/StarkNet:</strong> Smaller but growing ZK alternatives</li>
          </ul>
        </div>
      </section>

      <section id="l2-tradeoffs">
        <h2>Layer 2 Tradeoffs & Considerations</h2>
        <p>
          EVM compatibility varies across L2s. Arbitrum and Optimism maintain near-full compatibility—Ethereum smart contracts deploy with minimal changes. ZK rollups often require more substantial changes due to different proof systems and available opcodes. This affects dApp compatibility and developer experience. Arbitrum and Optimism's compatibility advantages have driven their ecosystem growth.
        </p>
        <p>
          Liquidity fragmentation is real. If Uniswap liquidity is split across mainnet and 10 different L2s, each chain has less liquidity, resulting in higher slippage for large trades. Unified liquidity solutions are emerging (like intent-based protocols), but they're still immature. For most users, this means trading smaller amounts or accepting slippage on L2s.
        </p>
        <p>
          Sequencer centralization is a current limitation. Most L2s use a centralized sequencer (a single entity ordering transactions). This is acceptable temporarily—the sequencer has no ability to steal funds or reverse transactions, only to delay or censor—but long-term, decentralized sequencers are needed. Arbitrum and Optimism are working toward sequencer decentralization.
        </p>
        <p>
          Withdrawal times differ significantly. Optimistic rollups have 7-day withdrawal delays due to the challenge period (though fast exits via liquidity providers reduce this to minutes). ZK rollups have withdrawal times of 15-30 minutes after proof verification. For frequent trading, this difference is minor. For emergency exits, ZK's advantage is meaningful.
        </p>

        <div className="bg-orange-900 border border-orange-700 rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold text-orange-100 mb-3">Choose L2 Based On:</h3>
          <ul className="text-orange-100 space-y-2">
            <li><strong>For DeFi:</strong> Arbitrum or Optimism (largest liquidity, most projects)</li>
            <li><strong>For Gaming:</strong> Arbitrum Nova or other specialized chains</li>
            <li><strong>For ZK Benefits:</strong> zkSync or StarkNet (faster withdrawals, different architecture)</li>
            <li><strong>For Simplicity:</strong> Arbitrum (largest, most liquid, easiest onboarding)</li>
          </ul>
        </div>
      </section>

      <section id="bridging-guide">
        <h2>Bridging Assets Across Layer 2s</h2>
        <p>
          Official bridges are the safest. Each L2 provides an official bridge to/from Ethereum mainnet. Arbitrum's bridge, Optimism's bridge, and zkSync's bridge are maintained by the protocols themselves and use the highest security standards. These are the bridges to use when moving significant amounts.
        </p>
        <p>
          To bridge from Ethereum to Arbitrum: visit bridge.arbitrum.io (or similar official bridge), connect your wallet, select the token, enter the amount, and approve. The bridge contract locks your mainnet tokens and mints equivalent tokens on Arbitrum. The reverse process withdraws from Arbitrum to mainnet.
        </p>
        <p>
          Multi-bridge solutions like Across and Stargate offer faster bridging and cross-L2 transfers. These protocols use liquidity providers to facilitate instant deposits and withdrawals across chains. They're convenient but introduce additional security assumptions (the protocol's smart contracts must be audited and trustworthy).
        </p>
        <p>
          For cross-L2 transfers (Arbitrum to Optimism directly), use aggregators like Hop Protocol or Across. Direct L2-to-L2 transfers aren't natively supported yet—you must go through mainnet or use a protocol that maintains liquidity on both L2s.
        </p>

        <div className="bg-green-900 border border-green-700 rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold text-green-100 mb-3">Bridging Safety Checklist</h3>
          <ul className="text-green-100 space-y-2">
            <li>Always verify the bridge URL (official domains only)</li>
            <li>Start with small amounts to verify the process</li>
            <li>Use official L2 bridges for large transfers</li>
            <li>Understand withdrawal times before bridging</li>
            <li>Never bridge more than you can afford to lose with unknown bridges</li>
            <li>Verify token symbol matches after bridging</li>
          </ul>
        </div>
      </section>

      <section id="future-scaling">
        <h2>Future of Layer 2 Scaling</h2>
        <p>
          Proto-danksharding (Dencun upgrade) improves L2 economics by making calldata cheaper on mainnet. This reduces L2 costs even further as posting batch data becomes less expensive. Future Ethereum upgrades will continue supporting L2 efficiency.
        </p>
        <p>
          Enshrined rollups (rollups integrated into Ethereum consensus) are a long-term vision. Rather than L2s as separate systems, enshrined rollups would be part of Ethereum's core protocol, improving coordination and security guarantees. This is years away but represents a potential evolution.
        </p>
        <p>
          Interoperability improvements are critical. Unified liquidity protocols and cross-L2 messaging will reduce fragmentation and make multi-L2 deployments more practical. Projects are working on intent-based architectures that abstract away the complexity of choosing which chain to use.
        </p>
        <p>
          L3s (Layer 3s) built on top of L2s are emerging. Arbitrum's Orbit allows anyone to launch custom L3s on top of Arbitrum. This creates nested scaling—an L2 scaling Ethereum, with L3s further scaling the L2. The tradeoff is added complexity and potentially added latency.
        </p>
      </section>

      <section className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
        <h2>Conclusion</h2>
        <p>
          Layer 2s solve Ethereum's scalability challenge by moving transactions off-chain while maintaining security through batch proofs on mainnet. Optimistic rollups (Arbitrum, Optimism) dominate today due to superior EVM compatibility and mature ecosystems. ZK rollups offer faster withdrawals and different architectural benefits but have less developed ecosystems.
        </p>
        <p>
          For most users, Arbitrum or Optimism are the best choices today—they offer fast, cheap transactions with broad dApp support. As ZK rollups mature and sequencer decentralization progresses, the landscape will likely shift. Understanding L2 fundamentals helps you navigate this evolving ecosystem and choose the best chain for your needs.
        </p>
      </section>
    </LearnPageLayout>
  );
}
