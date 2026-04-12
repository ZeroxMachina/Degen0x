'use client';

import Breadcrumb from '@/components/Breadcrumb';

export default function ZeroKnowledgeProofsPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Learn', href: '/learn' },
    { label: 'Zero-Knowledge Proofs', href: '/learn/zero-knowledge-proofs' }
  ];

  const tableOfContents = [
    'What Are Zero-Knowledge Proofs?',
    'How ZK-SNARKs Work',
    'How ZK-STARKs Work',
    'ZK-Rollups Explained',
    'Popular ZK-Rollup Projects',
    'Privacy Applications',
    'Identity Verification',
    'Future of ZK Technology',
    'Key Takeaways'
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100">
      <Breadcrumb items={breadcrumbItems} />

      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Zero-Knowledge Proofs Explained
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            The Technology Behind ZK-Rollups
          </p>
          <p className="text-gray-400">
            Understand how cryptographic proofs enable privacy and scalability without revealing secrets.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="bg-slate-900 rounded-lg p-6 mb-12 border border-slate-800">
          <h2 className="text-xl font-bold text-indigo-400 mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            {tableOfContents.map((item, index) => (
              <li key={index} className="text-gray-300 hover:text-indigo-400 cursor-pointer transition">
                {index + 1}. {item}
              </li>
            ))}
          </ul>
        </div>

        <article className="space-y-8">

          <div>
            <h2 className="text-3xl font-bold text-indigo-400 mb-4">What Are Zero-Knowledge Proofs?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A zero-knowledge proof (ZKP) is a cryptographic method that allows one party to prove to another that a statement is true without revealing any information about the statement itself. Imagine proving you know a password without actually sharing the password that's the essence of zero-knowledge proofs.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Zero-knowledge proofs satisfy three key properties:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-slate-900 p-4 rounded border border-slate-700">
                <h4 className="text-cyan-300 font-bold mb-2">Completeness</h4>
                <p className="text-gray-300 text-sm">If the statement is true, an honest prover can convince an honest verifier with the proof.</p>
              </div>

              <div className="bg-slate-900 p-4 rounded border border-slate-700">
                <h4 className="text-cyan-300 font-bold mb-2">Soundness</h4>
                <p className="text-gray-300 text-sm">If the statement is false, no dishonest prover can convince the verifier (except with negligible probability).</p>
              </div>

              <div className="bg-slate-900 p-4 rounded border border-slate-700">
                <h4 className="text-cyan-300 font-bold mb-2">Zero-Knowledge</h4>
                <p className="text-gray-300 text-sm">The verifier learns nothing except that the statement is true. No information about the secret is revealed.</p>
              </div>
            </div>

            <div className="bg-slate-900 border-l-4 border-indigo-500 p-4 rounded">
              <p className="text-gray-300">
                <span className="font-bold text-indigo-300">Real-World Analogy:</span> Imagine proving you have a book in a locked box without opening the box. You could lock the box with a key you show the verifier, then retrieve the book in a way they can observe, proving you have it but never revealing what's inside.
              </p>
            </div>
          </div>

          <hr className="border-slate-700" />

          <div>
            <h2 className="text-3xl font-bold text-indigo-400 mb-4">How ZK-SNARKs Work</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              SNARK stands for Succinct Non-Interactive Argument of Knowledge. Succinct means the proof is small, Non-Interactive means no back-and-forth between prover and verifier, and Argument of Knowledge proves you know a secret.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-3">How SNARKs Work (Simplified)</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-indigo-400 font-bold">1.</span>
                    <span><span className="font-semibold">Setup Phase:</span> Create public parameters through a trusted setup ceremony</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-400 font-bold">2.</span>
                    <span><span className="font-semibold">Proof Generation:</span> Use secret and public parameters to generate a cryptographic proof</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-400 font-bold">3.</span>
                    <span><span className="font-semibold">Verification:</span> Anyone can verify the proof using public parameters</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-3">Key Characteristics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="bg-slate-900 p-3 rounded border border-slate-700">
                    <p className="text-cyan-300 font-bold mb-1">Advantages</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Very small proof size (~128 bytes)</li>
                      <li>• Fast verification (milliseconds)</li>
                      <li>• Non-interactive</li>
                      <li>• Quantum-resistant variants exist</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900 p-3 rounded border border-slate-700">
                    <p className="text-cyan-300 font-bold mb-1">Disadvantages</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Require trusted setup</li>
                      <li>• Complex to implement</li>
                      <li>• Longer proof generation time</li>
                      <li>• Cryptographic assumptions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border-l-4 border-cyan-500 p-4 rounded">
                <p className="text-gray-300 text-sm">
                  <span className="font-bold text-cyan-300">Trusted Setup Concern:</span> SNARKs require a one-time setup phase using randomness that must be destroyed. If someone obtains this randomness, they could create fake proofs. This is why careful ceremony processes are crucial.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          <div>
            <h2 className="text-3xl font-bold text-indigo-400 mb-4">How ZK-STARKs Work</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              STARK stands for Scalable Transparent Argument of Knowledge. STARKs were created to address some of SNARKs' limitations, particularly the trusted setup requirement.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-3">SNARK vs STARK Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left p-2 text-cyan-300">Feature</th>
                        <th className="text-left p-2 text-cyan-300">SNARK</th>
                        <th className="text-left p-2 text-cyan-300">STARK</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-700">
                        <td className="p-2">Proof Size</td>
                        <td className="p-2">~100-300 bytes</td>
                        <td className="p-2">~10-100 KB</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="p-2">Verification Time</td>
                        <td className="p-2">Fast</td>
                        <td className="p-2">Fast (for batch)</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="p-2">Trusted Setup</td>
                        <td className="p-2">Required</td>
                        <td className="p-2">Not required</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="p-2">Quantum Resistant</td>
                        <td className="p-2">No (varies)</td>
                        <td className="p-2">Yes</td>
                      </tr>
                      <tr>
                        <td className="p-2">Complexity</td>
                        <td className="p-2">Complex</td>
                        <td className="p-2">Very Complex</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-3">STARK Advantages</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-indigo-400">✓</span>
                    <span><span className="font-semibold">Transparent:</span> No trusted setup needed uses public randomness</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-400">✓</span>
                    <span><span className="font-semibold">Quantum Safe:</span> Resistant to quantum computing attacks</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-400">✓</span>
                    <span><span className="font-semibold">Scalable:</span> Proof time grows logarithmically with computation size</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-400">✓</span>
                    <span><span className="font-semibold">Simpler Assumptions:</span> Based on collision-resistant hashing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          <div>
            <h2 className="text-3xl font-bold text-indigo-400 mb-4">ZK-Rollups Explained</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              ZK-rollups are layer 2 scaling solutions that batch hundreds of transactions together, create a zero-knowledge proof of their validity, and submit both the batch and proof to the mainchain. This dramatically increases throughput while maintaining security.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-3">How ZK-Rollups Work</h3>
                <ol className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-indigo-400 font-bold">1.</span>
                    <span><span className="font-semibold">Batch Transactions:</span> Hundreds of L2 transactions are collected</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-400 font-bold">2.</span>
                    <span><span className="font-semibold">Generate Proof:</span> A ZK proof is created proving all transitions are valid</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-400 font-bold">3.</span>
                    <span><span className="font-semibold">Submit to L1:</span> Compressed batch data + proof posted to Ethereum</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-400 font-bold">4.</span>
                    <span><span className="font-semibold">Verification:</span> Mainchain smart contract verifies the proof</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-400 font-bold">5.</span>
                    <span><span className="font-semibold">Finality:</span> Transactions are final as soon as L1 confirms the proof</span>
                  </li>
                </ol>
              </div>

              <div className="bg-slate-900 border-l-4 border-cyan-500 p-4 rounded">
                <p className="text-gray-300">
                  <span className="font-bold text-cyan-300">Why ZK-Rollups are Powerful:</span> A single proof on L1 can verify thousands of L2 transactions. This reduces on-chain data by 90%+ and increases throughput 100-1000x while maintaining L1 security.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          <div>
            <h2 className="text-3xl font-bold text-indigo-400 mb-4">Popular ZK-Rollup Projects</h2>

            <div className="space-y-4">
              <div className="bg-slate-900 p-4 rounded border border-slate-700">
                <h3 className="text-cyan-300 font-bold mb-2">zkSync</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Built by Matter Labs, zkSync aims to scale Ethereum. Uses SNARK proofs. Offers account abstraction and native token support.
                </p>
                <p className="text-gray-400 text-xs">Token: ZK</p>
              </div>

              <div className="bg-slate-900 p-4 rounded border border-slate-700">
                <h3 className="text-cyan-300 font-bold mb-2">StarkNet (now Starknet)</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Built by Starkware, uses STARKs for proofs. Features Cairo programming language for smart contracts.
                </p>
                <p className="text-gray-400 text-xs">Token: STRK</p>
              </div>

              <div className="bg-slate-900 p-4 rounded border border-slate-700">
                <h3 className="text-cyan-300 font-bold mb-2">Polygon zkEVM</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Polygon's implementation of Ethereum-equivalent ZK-rollup. Fully EVM-compatible, enabling direct migration of smart contracts.
                </p>
                <p className="text-gray-400 text-xs">Part of Polygon ecosystem</p>
              </div>

              <div className="bg-slate-900 p-4 rounded border border-slate-700">
                <h3 className="text-cyan-300 font-bold mb-2">Scroll</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Scroll focuses on EVM equivalence, allowing existing Ethereum dApps to deploy with minimal changes.
                </p>
                <p className="text-gray-400 text-xs">Community-driven project</p>
              </div>

              <div className="bg-slate-900 p-4 rounded border border-slate-700">
                <h3 className="text-cyan-300 font-bold mb-2">Linea</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Consensys's ZK-rollup built with zkSNARK technology. Targets Ethereum Virtual Machine compatibility.
                </p>
                <p className="text-gray-400 text-xs">Part of Consensys ecosystem</p>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          <div>
            <h2 className="text-3xl font-bold text-indigo-400 mb-4">Privacy Applications</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Beyond scaling, ZK proofs enable powerful privacy features by proving statements without revealing underlying data.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-3">Private Transactions</h3>
                <p className="text-gray-300 leading-relaxed">
                  Prove you own funds and want to transfer them without revealing sender, receiver, or amount. Used in privacy coins like Zcash.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-3">Confidential Computation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Process sensitive data (medical records, financial data) without exposing it. Prove computations were done correctly without revealing inputs.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-3">Anonymous Voting</h3>
                <p className="text-gray-300 leading-relaxed">
                  Prove your voting rights without revealing your identity or vote. Works for DAOs and governance.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-3">Private DeFi</h3>
                <p className="text-gray-300 leading-relaxed">
                  Trade, lend, or borrow without exposing positions, balances, or transaction history. Maintains liquidity while preserving privacy.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          <div>
            <h2 className="text-3xl font-bold text-indigo-400 mb-4">Identity Verification</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              ZK proofs enable privacy-preserving identity and age verification critical for compliance and KYC.
            </p>

            <div className="space-y-4">
              <div className="bg-slate-900 p-4 rounded border border-slate-700">
                <h3 className="text-cyan-300 font-bold mb-2">Age Verification</h3>
                <p className="text-gray-300 text-sm">
                  Prove you're over 18 without revealing your birthdate, name, or any other personal information. Useful for regulated services.
                </p>
              </div>

              <div className="bg-slate-900 p-4 rounded border border-slate-700">
                <h3 className="text-cyan-300 font-bold mb-2">Credential Verification</h3>
                <p className="text-gray-300 text-sm">
                  Prove you have a university degree, driver's license, or professional certification without sharing the credential itself.
                </p>
              </div>

              <div className="bg-slate-900 p-4 rounded border border-slate-700">
                <h3 className="text-cyan-300 font-bold mb-2">Compliance KYC</h3>
                <p className="text-gray-300 text-sm">
                  Prove you passed KYC checks at one provider and reuse that proof with other providers without re-submitting documents.
                </p>
              </div>

              <div className="bg-slate-900 border-l-4 border-cyan-500 p-4 rounded">
                <p className="text-gray-300 text-sm">
                  <span className="font-bold text-cyan-300">Privacy Advantage:</span> ZK identity solutions reduce data collection, lowering breach risks while maintaining regulatory compliance.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          <div>
            <h2 className="text-3xl font-bold text-indigo-400 mb-4">Future of ZK Technology</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-3">Current Limitations Being Addressed</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-indigo-400">⚙️</span>
                    <span><span className="font-semibold">Proof Generation Speed:</span> Still slow for complex computations; hardware acceleration in progress</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-400">⚙️</span>
                    <span><span className="font-semibold">Hardware Costs:</span> Specialized GPUs needed; becoming more accessible</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-400">⚙️</span>
                    <span><span className="font-semibold">Developer Experience:</span> Complex to implement; tooling improving rapidly</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-3">Emerging Trends</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-indigo-400">→</span>
                    <span><span className="font-semibold">Recursion:</span> Proofs proving proofs, enabling unbounded scaling</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-400">→</span>
                    <span><span className="font-semibold">FPGA/ASIC Acceleration:</span> Custom hardware for proof generation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-400">→</span>
                    <span><span className="font-semibold">Hybrid Solutions:</span> Combining ZK and optimistic rollups</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-400">→</span>
                    <span><span className="font-semibold">Cross-Chain Proofs:</span> Proving states across multiple blockchains</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900 border-l-4 border-cyan-500 p-4 rounded">
                <p className="text-gray-300">
                  <span className="font-bold text-cyan-300">Long-term Vision:</span> ZK proofs are foundational for blockchain's evolution toward privacy-preserving, high-throughput systems that can compete with traditional infrastructure.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          <div>
            <h2 className="text-3xl font-bold text-indigo-400 mb-4">Key Takeaways</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-indigo-950 to-slate-900 p-4 rounded border border-indigo-800">
                <p className="text-gray-200">
                  <span className="font-bold text-indigo-300">1.</span> Zero-knowledge proofs allow proving statements without revealing information, enabling privacy and scalability.
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-950 to-slate-900 p-4 rounded border border-indigo-800">
                <p className="text-gray-200">
                  <span className="font-bold text-indigo-300">2.</span> SNARKs offer small proofs but require trusted setup; STARKs are transparent but larger.
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-950 to-slate-900 p-4 rounded border border-indigo-800">
                <p className="text-gray-200">
                  <span className="font-bold text-indigo-300">3.</span> ZK-rollups batch transactions and prove validity, increasing throughput 100-1000x while maintaining security.
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-950 to-slate-900 p-4 rounded border border-indigo-800">
                <p className="text-gray-200">
                  <span className="font-bold text-indigo-300">4.</span> Beyond scaling, ZK enables privacy, identity verification, and confidential computation applications.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          <div>
            <h2 className="text-3xl font-bold text-indigo-400 mb-4">Related Resources</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/learn" className="block p-4 bg-slate-900 rounded border border-slate-700 hover:border-indigo-500 transition">
                <h3 className="text-cyan-300 font-bold mb-2">← Back to Learn</h3>
                <p className="text-sm text-gray-400">Explore more educational content</p>
              </a>
              <div className="p-4 bg-slate-900 rounded border border-slate-700">
                <h3 className="text-cyan-300 font-bold mb-2">Further Reading</h3>
                <p className="text-sm text-gray-400">Explore Starkware, Matter Labs, and Polygon documentation</p>
              </div>
            </div>
          </div>
        
        
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/tools/defi-portfolio-dashboard" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Defi Portfolio Dashboard</a></li>
            <li><a href="/tools/impermanent-loss-calculator" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Impermanent Loss Calculator</a></li>
            <li><a href="/tools/token-vesting-schedule-tracker" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Token Vesting Schedule Tracker</a></li>
            <li><a href="/compare/coinbase-vs-kraken-vs-gemini" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Coinbase Vs Kraken Vs Gemini</a></li>
          </ul>
        </nav>

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
              "headline": "Zero Knowledge Proofs",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/zero-knowledge-proofs"
            })
          }}
        />
      </article>
      </section>
    </div>
  );
}
