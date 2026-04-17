'use client';

import Breadcrumb from '@/components/Breadcrumb';
import RelatedContent from '@/components/RelatedContent';
import Diagram from '@/components/Diagram';

export default function RestakingEigenLayerPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Learn', href: '/learn' },
    { label: 'Restaking & EigenLayer', href: '/learn/restaking-eigenlayer' }
  ];

  const tableOfContents = [
    'What is Restaking?',
    'How EigenLayer Works',
    'Actively Validated Services (AVS)',
    'Liquid Restaking Tokens',
    'Risks of Restaking',
    'Yield Optimization Strategies',
    'Future of the Restaking Ecosystem',
    'Key Takeaways'
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100">
      <Breadcrumb items={breadcrumbItems} />

      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Restaking & EigenLayer
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            Maximizing Your Staked ETH Returns
          </p>
          <p className="text-gray-400">
            Learn how to earn additional yield by securing multiple networks with your staked Ethereum.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="bg-slate-900 rounded-lg p-6 mb-12 border border-slate-800">
          <h2 className="text-xl font-bold text-violet-400 mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            {tableOfContents.map((item, index) => (
              <li key={index} className="text-gray-300 hover:text-violet-400 cursor-pointer transition">
                {index + 1}. {item}
              </li>
            ))}
          </ul>
        </div>

        <article className="space-y-8">

          <div>
            <h2 className="text-3xl font-bold text-violet-400 mb-4">What is Restaking?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Restaking is the practice of using your already-staked Ethereum or other staked assets to simultaneously secure additional networks or services. Instead of your staked ETH only earning rewards from Ethereum validators, it can earn rewards from multiple different networks at the same time.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Think of it like renting out your security. Your staked Ethereum provides security guarantees to Ethereum. With restaking, you lend those same security guarantees to other networks and services through a smart contract, earning additional yield without needing to stake more capital.
            </p>

            <div className="bg-slate-900 border-l-4 border-violet-500 p-4 rounded">
              <p className="text-gray-300">
                <span className="font-bold text-violet-300">Key Benefit:</span> Restaking unlocks additional revenue streams on capital that's already deployed, significantly increasing yield for Ethereum stakers.
              </p>
            </div>

            <div className="space-y-3 mt-6">
              <h3 className="text-2xl font-semibold text-fuchsia-400">Traditional Staking vs Restaking</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900 p-4 rounded border border-slate-700">
                  <p className="text-fuchsia-300 font-bold mb-2">Traditional Staking</p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Stake ETH on Ethereum</li>
                    <li>• Earn ~3-4% APY</li>
                    <li>• Secure only Ethereum</li>
                    <li>• Slashing risk only from Ethereum</li>
                  </ul>
                </div>
                <div className="bg-slate-900 p-4 rounded border border-slate-700">
                  <p className="text-fuchsia-300 font-bold mb-2">Restaking (EigenLayer)</p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Deposit staked ETH in EigenLayer</li>
                    <li>• Earn 3-4% base + additional AVS yields</li>
                    <li>• Secure Ethereum + multiple AVS</li>
                    <li>• Slashing risk from participating networks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          <div>
            <h2 className="text-3xl font-bold text-violet-400 mb-4">How EigenLayer Works</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              EigenLayer is a smart contract protocol that enables liquid restaking on Ethereum. It's the primary infrastructure enabling restaking at scale.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-fuchsia-400 mb-3">EigenLayer Architecture</h3>
                <ol className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-violet-400 font-bold">1.</span>
                    <span><span className="font-semibold">Stake ETH:</span> Deposit staked ETH (via LSTs or solo validators) into EigenLayer contracts</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-violet-400 font-bold">2.</span>
                    <span><span className="font-semibold">Receive restaking token:</span> Get a liquid restaking token (LRT) representing your deposit</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-violet-400 font-bold">3.</span>
                    <span><span className="font-semibold">Opt into AVS:</span> Choose which Actively Validated Services to secure</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-violet-400 font-bold">4.</span>
                    <span><span className="font-semibold">Earn rewards:</span> Collect staking rewards from Ethereum + AVS rewards</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-violet-400 font-bold">5.</span>
                    <span><span className="font-semibold">Risk slashing:</span> Accept potential slashing if validators behave maliciously</span>
                  </li>
                </ol>
              </div>

              <div className="bg-slate-900 p-4 rounded border border-slate-700">
                <h3 className="text-fuchsia-300 font-bold mb-3">Key Features</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li className="flex gap-2">
                    <span className="text-violet-400">→</span>
                    <span><span className="font-semibold">Modular Security:</span> Security is decoupled from tokens, can be applied to any network</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-violet-400">→</span>
                    <span><span className="font-semibold">Opt-in AVS:</span> Choose which services to secure; fine-grained control</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-violet-400">→</span>
                    <span><span className="font-semibold">Liquid Restaking:</span> LRTs are liquid and can be traded, unlike traditional staking</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-violet-400">→</span>
                    <span><span className="font-semibold">Primitive Layer:</span> Designed to be the base layer for restaking infrastructure</span>
                  </li>
                </ul>
              </div>

              <div className="bg-violet-950 border-l-4 border-violet-500 p-4 rounded">
                <p className="text-gray-300 text-sm">
                  <span className="font-bold text-violet-300">Important:</span> EigenLayer is still in early stages. The protocol has been audited, but restaking represents higher risk than traditional staking due to slashing exposure.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          <div>
            <h2 className="text-3xl font-bold text-violet-400 mb-4">Actively Validated Services (AVS)</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              AVS are networks or services that use EigenLayer to source their security. They pay operators (validators) to secure them, and those operators use restaked ETH as collateral.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-fuchsia-400 mb-3">Types of AVS</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="bg-slate-900 p-3 rounded border border-slate-700">
                    <p className="text-fuchsia-300 font-bold mb-1">Rollups & Side Chains</p>
                    <p className="text-sm">Layer 2 scaling solutions that rent EigenLayer security instead of running own validator set.</p>
                  </div>
                  <div className="bg-slate-900 p-3 rounded border border-slate-700">
                    <p className="text-fuchsia-300 font-bold mb-1">Data Availability Services</p>
                    <p className="text-sm">Services that commit to data availability (like EigenDA), secured by restakers.</p>
                  </div>
                  <div className="bg-slate-900 p-3 rounded border border-slate-700">
                    <p className="text-fuchsia-300 font-bold mb-1">Execution Environments</p>
                    <p className="text-sm">Custom execution layers that need security guarantees.</p>
                  </div>
                  <div className="bg-slate-900 p-3 rounded border border-slate-700">
                    <p className="text-fuchsia-300 font-bold mb-1">Oracle Networks</p>
                    <p className="text-sm">Price feeds and other oracle services secured by staked collateral.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-fuchsia-400 mb-3">Earning from AVS</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  When you opt into an AVS, you earn rewards from multiple sources:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-violet-400">•</span>
                    <span><span className="font-semibold">Base Staking Rewards:</span> Ethereum validator rewards (continue earning)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-violet-400">•</span>
                    <span><span className="font-semibold">AVS Rewards:</span> Direct payments from AVS operators</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-violet-400">•</span>
                    <span><span className="font-semibold">AVS Tokens:</span> Many AVS launch their own tokens for governance and incentives</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900 p-4 rounded border border-slate-700">
                <h3 className="text-fuchsia-300 font-bold mb-2">Popular AVS Examples</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• Eigenda - EigenLayer's data availability solution</li>
                  <li>• Mantle - L2 rollup using EigenLayer security</li>
                  <li>• Various oracle and middleware services</li>
                  <li>• More launching as ecosystem develops</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          <div>
            <h2 className="text-3xl font-bold text-violet-400 mb-4">Liquid Restaking Tokens</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Liquid Restaking Tokens (LRTs) are derivative tokens that represent your stake in an EigenLayer restaking protocol. They allow your restaked capital to remain liquid and tradeable.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-fuchsia-400 mb-3">Major Liquid Restaking Tokens</h3>

                <div className="space-y-3">
                  <div className="bg-slate-900 p-4 rounded border border-slate-700">
                    <h4 className="text-fuchsia-300 font-bold mb-2">ezETH (EigenLayer)</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      Token from the EigenLayer foundation, representing restaked Ethereum. Has native integration with EigenLayer.
                    </p>
                    <p className="text-gray-400 text-xs">Initial yields: 8-12%+ depending on AVS participation</p>
                  </div>

                  <div className="bg-slate-900 p-4 rounded border border-slate-700">
                    <h4 className="text-fuchsia-300 font-bold mb-2">rsETH (Kelp DAO)</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      Community-driven liquid restaking token, aggregates multiple operators and AVS strategies.
                    </p>
                    <p className="text-gray-400 text-xs">Multi-asset support with diverse yield strategies</p>
                  </div>

                  <div className="bg-slate-900 p-4 rounded border border-slate-700">
                    <h4 className="text-fuchsia-300 font-bold mb-2">pufETH (Puffer Finance)</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      Permissionless liquid restaking focused on decentralization and small validators.
                    </p>
                    <p className="text-gray-400 text-xs">Emphasizes censorship resistance</p>
                  </div>

                  <div className="bg-slate-900 p-4 rounded border border-slate-700">
                    <h4 className="text-fuchsia-300 font-bold mb-2">Others: weETH, mETH, etc.</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      Various protocols launching LRT solutions with different strategies.
                    </p>
                    <p className="text-gray-400 text-xs">New entrants continuously emerging</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-fuchsia-400 mb-3">LRT Advantages</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-violet-400">✓</span>
                    <span><span className="font-semibold">Liquidity:</span> Trade your restaked position without unstaking</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-violet-400">✓</span>
                    <span><span className="font-semibold">Composability:</span> Use LRTs as collateral in DeFi protocols</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-violet-400">✓</span>
                    <span><span className="font-semibold">Strategy Management:</span> Let experts manage AVS selection and rewards</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-violet-400">✓</span>
                    <span><span className="font-semibold">Lower Entry:</span> Access restaking with smaller amounts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          <div>
            <h2 className="text-3xl font-bold text-violet-400 mb-4">Risks of Restaking</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              While restaking offers higher yields, it introduces new risks that traditional staking doesn't have. Understanding these is critical before deploying capital.
            </p>

            <div className="space-y-4">
              <div className="bg-red-950 border-l-4 border-red-500 p-4 rounded">
                <h3 className="text-red-300 font-bold mb-2">Slashing Risk (Most Important)</h3>
                <p className="text-gray-300 text-sm mb-2">
                  If validators misbehave or are compromised, some of your staked ETH may be slashed. The extent of slashing varies by AVS and type of misbehavior.
                </p>
                <p className="text-gray-300 text-sm">
                  Multiple AVS means multiple slashing conditions you're exposed to. Careful AVS selection is critical.
                </p>
              </div>

              <div className="bg-red-950 border-l-4 border-red-500 p-4 rounded">
                <h3 className="text-red-300 font-bold mb-2">Operator Risk</h3>
                <p className="text-gray-300 text-sm">
                  You're trusting operators (validators) to not behave maliciously. Compromised or negligent operators can cause slashing losses.
                </p>
              </div>

              <div className="bg-red-950 border-l-4 border-red-500 p-4 rounded">
                <h3 className="text-red-300 font-bold mb-2">Smart Contract Risk</h3>
                <p className="text-gray-300 text-sm">
                  EigenLayer contracts hold billions in value. Bugs or exploits could result in total loss, though audits have been performed.
                </p>
              </div>

              <div className="bg-red-950 border-l-4 border-red-500 p-4 rounded">
                <h3 className="text-red-300 font-bold mb-2">Liquidity Risk</h3>
                <p className="text-gray-300 text-sm">
                  LRT tokens may trade at a discount to their underlying value if there's low liquidity or high redemption pressure.
                </p>
              </div>

              <div className="bg-red-950 border-l-4 border-red-500 p-4 rounded">
                <h3 className="text-red-300 font-bold mb-2">Correlated Failure Risk</h3>
                <p className="text-gray-300 text-sm">
                  Multiple AVS may face the same underlying cause (network upgrade, layer 1 issue), causing correlated slashing across all.
                </p>
              </div>

              <div className="bg-red-950 border-l-4 border-red-500 p-4 rounded">
                <h3 className="text-red-300 font-bold mb-2">Unlock/Exit Risk</h3>
                <p className="text-gray-300 text-sm">
                  If an AVS faces issues, you may face lock-in periods before exiting, unable to sell even if price crashes.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          <div>
            <h2 className="text-3xl font-bold text-violet-400 mb-4">Yield Optimization Strategies</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-fuchsia-400 mb-3">Conservative Strategy</h3>
                <p className="text-gray-300 leading-relaxed mb-2">
                  Opt into only the most established, battle-tested AVS (like EigenDA). Accept lower yields for reduced risk.
                </p>
                <p className="text-gray-400 text-sm">Expected yield: 5-7% APY</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-fuchsia-400 mb-3">Diversified Strategy</h3>
                <p className="text-gray-300 leading-relaxed mb-2">
                  Spread stake across multiple AVS from reputable teams. Balances yield opportunities with risk diversification.
                </p>
                <p className="text-gray-400 text-sm">Expected yield: 10-15% APY</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-fuchsia-400 mb-3">Aggressive Strategy</h3>
                <p className="text-gray-300 leading-relaxed mb-2">
                  Opt into many new, higher-yielding AVS. Accept significant slashing risk for maximum returns.
                </p>
                <p className="text-gray-400 text-sm">Expected yield: 20%+ APY (but with substantial risk)</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-fuchsia-400 mb-3">DeFi Composability Strategy</h3>
                <p className="text-gray-300 leading-relaxed mb-2">
                  Use LRTs as collateral in lending protocols (Aave, Compound) while earning restaking yields. Compound returns.
                </p>
                <p className="text-gray-400 text-sm">Expected yield: 15-25% APY plus additional leverage</p>
              </div>

              <div className="bg-violet-950 border-l-4 border-violet-500 p-4 rounded">
                <p className="text-gray-300 text-sm">
                  <span className="font-bold text-violet-300">Best Practice:</span> Start small, understand your risk tolerance, monitor slashing events, and adjust your AVS portfolio periodically.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          <div>
            <h2 className="text-3xl font-bold text-violet-400 mb-4">Future of the Restaking Ecosystem</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-fuchsia-400 mb-3">Growing AVS Ecosystem</h3>
                <p className="text-gray-300 leading-relaxed">
                  More L2s, data services, and infrastructure projects will emerge needing security. This expands yield opportunities but also complexity.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-fuchsia-400 mb-3">Multi-Asset Restaking</h3>
                <p className="text-gray-300 leading-relaxed">
                  EigenLayer is exploring restaking with other assets beyond ETH (liquid staking tokens, other cryptocurrencies), increasing capital efficiency.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-fuchsia-400 mb-3">Operator Markets</h3>
                <p className="text-gray-300 leading-relaxed">
                  Specialized companies will emerge as operators, managing staker capital and AVS selection, similar to stake pools.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-fuchsia-400 mb-3">Risk Markets</h3>
                <p className="text-gray-300 leading-relaxed">
                  Insurance protocols and slashing derivatives will emerge to manage and hedge slashing risk, making restaking safer.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-fuchsia-400 mb-3">Standardization</h3>
                <p className="text-gray-300 leading-relaxed">
                  As the ecosystem matures, standards will emerge for AVS quality assessment, operator reputation, and slashing prevention.
                </p>
              </div>

              <div className="bg-slate-900 border-l-4 border-violet-500 p-4 rounded">
                <p className="text-gray-300">
                  <span className="font-bold text-violet-300">Vision:</span> Restaking could become the standard way Ethereum security is monetized, creating a robust market for consensus security services.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          <div>
            <h2 className="text-3xl font-bold text-violet-400 mb-4">Key Takeaways</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-violet-950 to-slate-900 p-4 rounded border border-violet-800">
                <p className="text-gray-200">
                  <span className="font-bold text-violet-300">1.</span> Restaking lets you earn additional yield on staked ETH by securing multiple networks simultaneously through EigenLayer.
                </p>
              </div>
              <div className="bg-gradient-to-br from-violet-950 to-slate-900 p-4 rounded border border-violet-800">
                <p className="text-gray-200">
                  <span className="font-bold text-violet-300">2.</span> Liquid restaking tokens (ezETH, rsETH, pufETH) make restaking accessible and liquid without sacrificing staking rewards.
                </p>
              </div>
              <div className="bg-gradient-to-br from-violet-950 to-slate-900 p-4 rounded border border-violet-800">
                <p className="text-gray-200">
                  <span className="font-bold text-violet-300">3.</span> Slashing risk is the primary concern with restaking; participating in multiple AVS increases your exposure to different failure modes.
                </p>
              </div>
              <div className="bg-gradient-to-br from-violet-950 to-slate-900 p-4 rounded border border-violet-800">
                <p className="text-gray-200">
                  <span className="font-bold text-violet-300">4.</span> Higher yields require taking more risk; balance your restaking portfolio based on your risk tolerance and understanding of protocols.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-slate-700" />

          <div>
            <h2 className="text-3xl font-bold text-violet-400 mb-4">Related Resources</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/learn" className="block p-4 bg-slate-900 rounded border border-slate-700 hover:border-violet-500 transition">
                <h3 className="text-fuchsia-300 font-bold mb-2">← Back to Learn</h3>
                <p className="text-sm text-gray-400">Explore more educational content</p>
              </a>
              <div className="p-4 bg-slate-900 rounded border border-slate-700">
                <h3 className="text-fuchsia-300 font-bold mb-2">EigenLayer Resources</h3>
                <p className="text-sm text-gray-400">Visit eigenlayer.xyz for official documentation and updates</p>
              </div>
            </div>
          </div>
        
        
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/tools/altcoin-season-index" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Altcoin Season Index</a></li>
            <li><a href="/tools/crypto-airdrop-tracker" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Airdrop Tracker</a></li>
            <li><a href="/tools/crypto-portfolio-tracker-free" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Portfolio Tracker Free</a></li>
            <li><a href="/tools/dollar-cost-average-backtest-tool" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Dollar Cost Average Backtest Tool</a></li>
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
              "headline": "Restaking Eigenlayer",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/restaking-eigenlayer"
            })
          }}
        />
      </article>
      </section>
      <Diagram slug="staking-rewards" />
      <RelatedContent category="learn" currentSlug="/learn/restaking-eigenlayer" />
    </div>
  );
}
