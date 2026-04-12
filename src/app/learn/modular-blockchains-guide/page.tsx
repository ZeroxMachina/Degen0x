'use client'

import Breadcrumb from '@/components/Breadcrumb'

export default function ModularBlockchainsPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[
        { label: 'Learn', href: '/learn' },
        { label: 'Modular Blockchains', href: '/learn/modular-blockchains-guide' }
      ]} />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mt-8 mb-2">
        Modular Blockchains Explained: Celestia, EigenDA & the Future of Scaling
      </h1>
      <p className="text-gray-400 mb-8">Last updated: March 2026</p>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-orange-900 to-orange-800 border border-orange-700 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-orange-100 mb-4">Key Takeaways</h2>
        <ul className="space-y-2 text-orange-50">
          <li className="flex items-start">
            <span className="mr-3">•</span>
            <span>Modular blockchains separate consensus, data availability, and execution into layers</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">•</span>
            <span>Monolithic chains like Ethereum do everything; modularity enables specialization</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">•</span>
            <span>Celestia (DA layer), Arbitrum (execution layer), and Ethereum (settlement) work together</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">•</span>
            <span>Modular design enables extreme scalability but adds complexity and fragmentation</span>
          </li>
        </ul>
      </div>

      {/* Table of Contents */}
      <nav className="bg-gray-900 rounded-lg p-6 mb-8 border border-gray-800">
        <h2 className="text-lg font-bold text-[var(--color-text)] mb-4">Table of Contents</h2>
        <ul className="space-y-2 text-blue-400">
          <li><a href="#monolithic-vs-modular" className="hover:text-blue-300">1. Monolithic vs Modular</a></li>
          <li><a href="#data-availability" className="hover:text-blue-300">2. Data Availability Layers</a></li>
          <li><a href="#execution-settlement" className="hover:text-blue-300">3. Execution & Settlement</a></li>
          <li><a href="#key-projects" className="hover:text-blue-300">4. Key Projects</a></li>
          <li><a href="#tradeoffs" className="hover:text-blue-300">5. Tradeoffs & Challenges</a></li>
          <li><a href="#faq" className="hover:text-blue-300">6. FAQ</a></li>
        </ul>
      </nav>

      {/* Content Sections */}
      <section id="monolithic-vs-modular" className="mb-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Monolithic vs Modular Blockchains</h2>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">Monolithic Architecture</h3>
        <p className="text-gray-300 mb-4">
          Monolithic blockchains like Ethereum, Bitcoin, and Solana do everything themselves:
        </p>
        <ul className="space-y-2 text-gray-300 mb-4 ml-4">
          <li className="flex items-start"><span className="mr-3">•</span> <span><strong>Consensus:</strong> Validate transactions and reach agreement on block order</span></li>
          <li className="flex items-start"><span className="mr-3">•</span> <span><strong>Data Availability:</strong> Store transaction data so nodes can verify the chain</span></li>
          <li className="flex items-start"><span className="mr-3">•</span> <span><strong>Execution:</strong> Run smart contracts and state transitions</span></li>
          <li className="flex items-start"><span className="mr-3">•</span> <span><strong>Settlement:</strong> Finalize transactions and resolve disputes</span></li>
        </ul>
        <p className="text-gray-300 mb-4">
          This simplicity is elegant but creates bottlenecks. Ethereum can process ~15 transactions per second because resources are split across all four functions.
        </p>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">Modular Architecture</h3>
        <p className="text-gray-300 mb-4">
          Modular blockchains specialize: each layer does one job exceptionally well, then composes with others.
        </p>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-4">
          <p className="text-gray-300 mb-3"><strong className="text-[var(--color-text)]">Data Availability Layer:</strong> Stores transaction data (Celestia, EigenDA)</p>
          <p className="text-gray-300 mb-3"><strong className="text-[var(--color-text)]">Execution Layer:</strong> Runs transactions and state (Arbitrum, Optimism, StarkNet)</p>
          <p className="text-gray-300 mb-3"><strong className="text-[var(--color-text)]">Settlement Layer:</strong> Finalizes and resolves disputes (Ethereum)</p>
          <p className="text-gray-300"><strong className="text-[var(--color-text)]">Consensus:</strong> Separate mechanism for settlement layer</p>
        </div>

        <p className="text-gray-300 mb-4">
          By specializing, each layer can optimize independently. Celestia becomes world-class at data availability without worrying about execution. Arbitrum becomes world-class at computation without redundantly storing data.
        </p>
      </section>

      <section id="data-availability" className="mb-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Data Availability Layers</h2>

        <p className="text-gray-300 mb-4">
          The data availability problem: For a blockchain to be trustlessly verified, its transaction data must be stored somewhere. In monolithic chains, all full nodes store all data, but this limits scalability.
        </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We wrote this guide because the existing explanations online are either too simplified or assume PhD-level knowledge. Neither serves most readers.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">Celestia: Specializing in Data Availability</h3>
        <p className="text-gray-300 mb-4">
          Celestia is a blockchain optimized solely for data availability. It doesn't execute transactions—it just securely stores data. This allows Celestia to scale to massive throughput (40 MB/s of data).
        </p>
        <p className="text-gray-300 mb-4">
          Execution layers like Arbitrum post transaction batches to Celestia, then prove validity on Ethereum. This separates concerns: Celestia proves data was available, Arbitrum proves computation was correct.
        </p>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">EigenDA: Restaking-Based DA</h3>
        <p className="text-gray-300 mb-4">
          EigenDA uses Ethereum validators to provide data availability through restaking. Operators can participate in DA without running new infrastructure, leveraging existing Ethereum security.
        </p>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">DA Sampling</h3>
        <p className="text-gray-300 mb-4">
          A key innovation: light clients don't need to download entire blocks. They download small random samples to statistically verify data availability. This makes light clients much faster and cheaper.
        </p>
      </section>

      <section id="execution-settlement" className="mb-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Execution and Settlement Layers</h2>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">Execution Layers</h3>
        <p className="text-gray-300 mb-4">
          Execution rollups process transactions and maintain state. They post compressed batches to DA layers and proofs to settlement layers, but don't store all data themselves.
        </p>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">Optimistic vs ZK Execution</h3>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-4">
          <p className="text-gray-300 mb-3"><strong className="text-[var(--color-text)]">Optimistic Rollups (Arbitrum, Optimism):</strong> Assume transactions are valid; fraud provers can challenge incorrect state within a dispute window</p>
          <p className="text-gray-300"><strong className="text-[var(--color-text)]">ZK Rollups (StarkNet, zkSync):</strong> Prove computation is correct cryptographically; no dispute window needed</p>
        </div>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">Settlement Layers</h3>
        <p className="text-gray-300 mb-4">
          Settlement layers are typically existing monolithic chains (Ethereum). They don't execute transactions; they verify proofs from execution layers and finalize state. Ethereum acts as the ultimate source of truth and provides security guarantees.
        </p>
      </section>

      <section id="key-projects" className="mb-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Key Modular Blockchain Projects</h2>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">Celestia (TIA)</h3>
        <p className="text-gray-300 mb-4">
          Pure data availability blockchain. Enables low-cost sovereign rollups without Ethereum's base fees. Rollups like Dymension and Rollups-As-a-Service providers deploy atop Celestia.
        </p>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">Arbitrum (ARB)</h3>
        <p className="text-gray-300 mb-4">
          Optimistic rollup on Ethereum. Executes transactions at scale while inheriting Ethereum security. Currently posts to Ethereum's calldata but can be configured to use DA layers.
        </p>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">Optimism (OP)</h3>
        <p className="text-gray-300 mb-4">
          Similar to Arbitrum, Optimism is an optimistic rollup scaling Ethereum. Focus on user experience and developer tooling. Plans for modular scaling through Alt-DA support.
        </p>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">StarkNet (STRK)</h3>
        <p className="text-gray-300 mb-4">
          ZK rollup with CAIRO runtime. Uses zero-knowledge proofs for state verification. More complex but avoids dispute windows. Supports Cairo programming language.
        </p>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">Avail (AVL)</h3>
        <p className="text-gray-300 mb-4">
          Data availability and light client focused. Optimized for light clients to verify data with minimal bandwidth. Powers sovereign rollups and light clients.
        </p>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">Eigenlayer (EigenDA)</h3>
        <p className="text-gray-300 mb-4">
          Restaking protocol providing DA through existing Ethereum validators. Leverages Ethereum security for data availability without new blockchain.
        </p>
      </section>

      <section id="tradeoffs" className="mb-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Modular Tradeoffs & Challenges</h2>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">Advantages of Modularity</h3>
        <ul className="space-y-3 text-gray-300 mb-6">
          <li className="flex items-start"><span className="mr-3 text-green-400">✓</span> <span><strong>Extreme Scalability:</strong> Each layer optimizes independently; data availability becomes non-bottleneck</span></li>
          <li className="flex items-start"><span className="mr-3 text-green-400">✓</span> <span><strong>Flexibility:</strong> Execution layers can choose security model (optimistic vs ZK), language, etc.</span></li>
          <li className="flex items-start"><span className="mr-3 text-green-400">✓</span> <span><strong>Reusability:</strong> Multiple execution layers share same DA and settlement infrastructure</span></li>
          <li className="flex items-start"><span className="mr-3 text-green-400">✓</span> <span><strong>Sovereign Rollups:</strong> Execution layers can be updated without settlement layer coordination</span></li>
        </ul>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">Challenges & Concerns</h3>
        <ul className="space-y-3 text-gray-300 mb-6">
          <li className="flex items-start"><span className="mr-3 text-red-400">✗</span> <span><strong>Complexity:</strong> Understanding modular stack requires expertise. User experience is complicated.</span></li>
          <li className="flex items-start"><span className="mr-3 text-red-400">✗</span> <span><strong>Liquidity Fragmentation:</strong> Liquidity splits across multiple execution layers, reducing efficiency</span></li>
          <li className="flex items-start"><span className="mr-3 text-red-400">✗</span> <span><strong>Cross-Layer Bridges:</strong> Moving value between layers requires bridges, adding risk and friction</span></li>
          <li className="flex items-start"><span className="mr-3 text-red-400">✗</span> <span><strong>Economic Security:</strong> Shared security is weaker than independent chains; validators might be inadequately incentivized</span></li>
          <li className="flex items-start"><span className="mr-3 text-red-400">✗</span> <span><strong>Unproven at Scale:</strong> Most modular stacks are nascent; long-term economic sustainability unclear</span></li>
        </ul>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">The Blockchain Trilemma Still Applies</h3>
        <p className="text-gray-300 mb-4">
          Modularity doesn't solve the fundamental trilemma—blockchains can't optimize for decentralization, security, and scalability simultaneously. Modular designs shift the tradeoff but don't eliminate it. A DA layer that's extremely scalable might require running a full node with significant resources, reducing decentralization.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <details className="border border-gray-700 rounded-lg p-4">
            <summary className="text-[var(--color-text)] font-semibold cursor-pointer hover:text-blue-300">
              Is Ethereum monolithic or modular?
            </summary>
            <p className="text-gray-300 mt-3">
              Currently, Ethereum is monolithic—it does everything. However, Ethereum is evolving toward supporting modular stacks. Danksharding will optimize Ethereum's data availability layer. In the future, Ethereum will settle and finalize execution-layer transactions while specializing in security and consensus.
            </p>
          </details>

          <details className="border border-gray-700 rounded-lg p-4">
            <summary className="text-[var(--color-text)] font-semibold cursor-pointer hover:text-blue-300">
              Can rollups on different DA layers communicate?
            </summary>
            <p className="text-gray-300 mt-3">
              Yes, but it requires cross-layer bridges. A rollup on Celestia can't directly call one on EigenDA—they need a bridge smart contract that atomically swaps or transfers value. This adds friction but is technically possible.
            </p>
          </details>

          <details className="border border-gray-700 rounded-lg p-4">
            <summary className="text-[var(--color-text)] font-semibold cursor-pointer hover:text-blue-300">
              Which is better: modular or monolithic?
            </summary>
            <p className="text-gray-300 mt-3">
              Neither is categorically better. Monolithic chains are simpler and have network effects. Modular stacks scale infinitely but are complex and fragmented. The market will likely support both, with monolithic chains serving as settlement layers and rollups as execution.
            </p>
          </details>

          <details className="border border-gray-700 rounded-lg p-4">
            <summary className="text-[var(--color-text)] font-semibold cursor-pointer hover:text-blue-300">
              What's the investment thesis for modular blockchains?
            </summary>
            <p className="text-gray-300 mt-3">
              If modular stacks become dominant, their tokens capture value from becoming internet-scale infrastructure. Celestia captures DA value, Arbitrum captures execution value, and Ethereum captures settlement value. Early bets on modular infra could be high-ROI if adoption scales.
            </p>
          </details>

          <details className="border border-gray-700 rounded-lg p-4">
            <summary className="text-[var(--color-text)] font-semibold cursor-pointer hover:text-blue-300">
              Is Solana modular?
            </summary>
            <p className="text-gray-300 mt-3">
              Solana is monolithic. It does all four functions. However, Solana is exploring modular designs through Firedancer (a new validator client) and state compression techniques that might enable execution/DA separation in the future.
            </p>
          </details>
        </div>
      </section>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mt-12">
        <h3 className="text-[var(--color-text)] font-bold mb-3">Explore Modular Chain Tools</h3>
        <ul className="space-y-2 text-blue-400">
          <li><a href="/tools/celestia-explorer" className="hover:text-blue-300">Celestia Block Explorer</a></li>
          <li><a href="/tools/arbitrum-bridge" className="hover:text-blue-300">Arbitrum Bridge & Analytics</a></li>
          <li><a href="/tools/rollup-analytics" className="hover:text-blue-300">Rollup Analytics Dashboard</a></li>
          <li><a href="/tools/da-layer-tracker" className="hover:text-blue-300">DA Layer Comparison Tool</a></li>
        </ul>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mt-6">
        <h3 className="text-[var(--color-text)] font-bold mb-3">Related Articles</h3>
        <ul className="space-y-2 text-blue-400">
          <li><a href="/learn/mev-protection-guide" className="hover:text-blue-300">MEV Protection on Rollups</a></li>
          <li><a href="/learn/dex-aggregators-guide" className="hover:text-blue-300">DEX Aggregators Across Chains</a></li>
          <li><a href="/learn/crypto-narrative-trading" className="hover:text-blue-300">Modular Blockchain Narrative</a></li>
        </ul>
      </div>
    
        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Modular Blockchains Guide",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/modular-blockchains-guide"
            })
          }}
        />
      </article>
  )
}
