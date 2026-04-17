'use client'

import Breadcrumb from '@/components/Breadcrumb'
import AutoTOC from '@/components/AutoTOC';
import ReadingTime from '@/components/ReadingTime';

export default function MEVProtectionPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[
        { label: 'Learn', href: '/learn' },
        { label: 'MEV Protection Guide', href: '/learn/mev-protection-guide' }
      ]} />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mt-8 mb-2">
        MEV Protection: How to Stop Bots From Stealing Your Profits
      </h1>
      <ReadingTime />
      <AutoTOC />
      <p className="text-gray-400 mb-8">Last updated: March 2026</p>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 border border-blue-700 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-100 mb-4">Key Takeaways</h2>
        <ul className="space-y-2 text-blue-50">
          <li className="flex items-start">
            <span className="mr-3">•</span>
            <span>MEV (Maximal Extractable Value) allows bots to profit from transaction ordering</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">•</span>
            <span>Sandwich attacks are the most common MEV exploitation causing user losses</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">•</span>
            <span>Protection strategies include private RPCs, MEV-resistant protocols, and slippage controls</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">•</span>
            <span>Tools like MEV-Blocker and MEV-Inspect help monitor and minimize exposure</span>
          </li>
        </ul>
      </div>

      {/* Table of Contents */}
      <nav className="bg-gray-900 rounded-lg p-6 mb-8 border border-gray-800">
        <h2 className="text-lg font-bold text-[var(--color-text)] mb-4">Table of Contents</h2>
        <ul className="space-y-2 text-blue-400">
          <li><a href="#what-is-mev" className="hover:text-blue-300">1. What is MEV?</a></li>
          <li><a href="#types-of-mev" className="hover:text-blue-300">2. Types of MEV Attacks</a></li>
          <li><a href="#sandwich-attacks" className="hover:text-blue-300">3. How Sandwich Attacks Work</a></li>
          <li><a href="#protection-strategies" className="hover:text-blue-300">4. Protection Strategies</a></li>
          <li><a href="#recommended-tools" className="hover:text-blue-300">5. Recommended Tools</a></li>
          <li><a href="#faq" className="hover:text-blue-300">6. FAQ</a></li>
        </ul>
      </nav>

      {/* Content Sections */}
      <section id="what-is-mev" className="mb-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What is MEV?</h2>
        <p className="text-gray-300 mb-4">
          Maximal Extractable Value (MEV) refers to the maximum profit that can be extracted from block production by reordering, inserting, or censoring transactions. In blockchain networks, validators, miners, and specialized bots can see pending transactions in the mempool and exploit this information for profit.
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
        <p className="text-gray-300 mb-4">
          MEV extraction is a significant problem in DeFi because it directly impacts users through inflated slippage, failed transactions, and reduced swap returns. The total MEV extracted from Ethereum alone exceeds billions of dollars annually.
        </p>
      </section>

      <section id="types-of-mev" className="mb-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Types of MEV Attacks</h2>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">Sandwich Attacks</h3>
        <p className="text-gray-300 mb-4">
          The most common MEV attack where a bot watches the mempool for pending transactions, inserts its own transaction before yours, then another after to profit from the price movement your transaction causes.
        </p>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">Front-Running</h3>
        <p className="text-gray-300 mb-4">
          Bots detect your swap intent and execute their own transaction first to benefit from the price impact, leaving you with worse execution.
        </p>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">Flashbots and Arbitrage</h3>
        <p className="text-gray-300 mb-4">
          Sophisticated extraction through pure arbitrage opportunities identified across protocols, often using flashloans for low-risk profit extraction.
        </p>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">Liquidation Extraction</h3>
        <p className="text-gray-300 mb-4">
          Monitoring lending protocols for liquidation opportunities and competing to execute them for profit before other liquidators.
        </p>
      </section>

      <section id="sandwich-attacks" className="mb-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How Sandwich Attacks Work</h2>

        <p className="text-gray-300 mb-4">
          A sandwich attack follows a clear three-step pattern:
        </p>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-4">
          <p className="text-gray-300 mb-2"><strong className="text-[var(--color-text)]">Step 1: Observation</strong> - Bot monitors mempool and identifies your pending swap transaction</p>
          <p className="text-gray-300 mb-2"><strong className="text-[var(--color-text)]">Step 2: Front-Run</strong> - Bot submits transaction with higher gas fee to execute before yours, moving the price</p>
          <p className="text-gray-300"><strong className="text-[var(--color-text)]">Step 3: Back-Run</strong> - Bot submits another transaction after yours to exit their position profitably</p>
        </div>

        <p className="text-gray-300 mb-4">
          The result is that you receive less output than expected, with the difference captured as MEV. On Uniswap V3, sandwich attacks can reduce returns by 5-15% per transaction on volatile pairs.
        </p>
      </section>

      <section id="protection-strategies" className="mb-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Protection Strategies</h2>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">1. Use Private RPCs and Dark Pools</h3>
        <p className="text-gray-300 mb-4">
          Route transactions through private mempools that hide your transaction intent from public visibility. Services like MEV-Blocker and Flashbots Protect use encrypted mempools.
        </p>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">2. Set Aggressive Slippage Limits</h3>
        <p className="text-gray-300 mb-4">
          Configure minimum output amounts that transactions will revert if not met, preventing extreme MEV extraction. However, this may cause more failed transactions.
        </p>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">3. Use MEV-Resistant Protocols</h3>
        <p className="text-gray-300 mb-4">
          Protocols like CoW Swap (Coincidence of Wants) use batch auctions to prevent sandwich attacks by solving orders off-chain before execution.
        </p>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">4. Implement Intent-Based Trading</h3>
        <p className="text-gray-300 mb-4">
          Use intent-based architectures where you sign an intent rather than a transaction, allowing solvers to find optimal execution privately.
        </p>

        <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">5. Route Through Multiple Aggregators</h3>
        <p className="text-gray-300 mb-4">
          Distribute swaps across multiple DEX aggregators to reduce single-source MEV exposure and improve overall execution.
        </p>
      </section>

      <section id="recommended-tools" className="mb-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Recommended Tools</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border border-gray-700 rounded-lg p-4">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">MEV-Blocker</h3>
            <p className="text-gray-400 text-sm mb-3">Privacy RPC that encrypts transactions and bundles them to prevent sandwich attacks</p>
            <a href="/tools/mev-blocker" className="text-blue-400 hover:text-blue-300 text-sm">View Tool →</a>
          </div>

          <div className="border border-gray-700 rounded-lg p-4">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">CoW Swap</h3>
            <p className="text-gray-400 text-sm mb-3">MEV-resistant DEX using batch auctions and intent-based architecture</p>
            <a href="/tools/cow-swap" className="text-blue-400 hover:text-blue-300 text-sm">View Tool →</a>
          </div>

          <div className="border border-gray-700 rounded-lg p-4">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">MEV-Inspect</h3>
            <p className="text-gray-400 text-sm mb-3">Monitor and analyze MEV extraction on your transactions in real-time</p>
            <a href="/tools/mev-inspect" className="text-blue-400 hover:text-blue-300 text-sm">View Tool →</a>
          </div>

          <div className="border border-gray-700 rounded-lg p-4">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">MEV-Scanner</h3>
            <p className="text-gray-400 text-sm mb-3">Track MEV activity across protocols and identify protection opportunities</p>
            <a href="/tools/mev-scanner" className="text-blue-400 hover:text-blue-300 text-sm">View Tool →</a>
          </div>
        </div>

        <p className="text-gray-400 text-sm">
          Explore more MEV protection tools in our <a href="/tools" className="text-blue-400 hover:text-blue-300">Tools Directory</a>
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <details className="border border-gray-700 rounded-lg p-4">
            <summary className="text-[var(--color-text)] font-semibold cursor-pointer hover:text-blue-300">
              How much MEV am I losing on swaps?
            </summary>
            <p className="text-gray-300 mt-3">
              On average, retail users lose 2-10% per transaction to MEV depending on transaction size and volatility. Larger transactions attract more MEV extraction. You can use MEV-Inspect to analyze your specific transaction history.
            </p>
          </details>

          <details className="border border-gray-700 rounded-lg p-4">
            <summary className="text-[var(--color-text)] font-semibold cursor-pointer hover:text-blue-300">
              Is MEV unavoidable?
            </summary>
            <p className="text-gray-300 mt-3">
              While MEV cannot be completely eliminated without major protocol changes, you can significantly reduce exposure through private RPCs, MEV-resistant protocols, and proper slippage management. The goal is minimization, not elimination.
            </p>
          </details>

          <details className="border border-gray-700 rounded-lg p-4">
            <summary className="text-[var(--color-text)] font-semibold cursor-pointer hover:text-blue-300">
              What is the difference between MEV-Blocker and Flashbots Protect?
            </summary>
            <p className="text-gray-300 mt-3">
              Both provide MEV protection through encrypted mempools, but MEV-Blocker is permissionless and censorship-resistant, while Flashbots Protect is more centralized. MEV-Blocker is generally recommended for better decentralization.
            </p>
          </details>

          <details className="border border-gray-700 rounded-lg p-4">
            <summary className="text-[var(--color-text)] font-semibold cursor-pointer hover:text-blue-300">
              Can slippage limits completely prevent MEV?
            </summary>
            <p className="text-gray-300 mt-3">
              No, slippage limits can prevent extreme extraction but will cause transactions to fail if MEV pushes the output beyond your limit. This creates a tradeoff between execution certainty and MEV protection.
            </p>
          </details>
        </div>
      </section>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mt-12">
        <h3 className="text-[var(--color-text)] font-bold mb-3">Related Articles</h3>
        <ul className="space-y-2 text-blue-400">
          <li><a href="/learn/dex-aggregators-guide" className="hover:text-blue-300">DEX Aggregators Explained</a></li>
          <li><a href="/learn/modular-blockchains-guide" className="hover:text-blue-300">Modular Blockchains and Scaling</a></li>
          <li><a href="/learn/payfi-guide" className="hover:text-blue-300">PayFi: Payments and DeFi</a></li>
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
              "headline": "Mev Protection Guide",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/mev-protection-guide"
            })
          }}
        />
      </article>
  )
}
