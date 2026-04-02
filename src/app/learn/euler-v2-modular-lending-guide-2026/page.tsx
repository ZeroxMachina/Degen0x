import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Euler V2 Modular Lending Architecture Guide 2026 | degen0x',
  description: 'Deep dive into Euler V2\'s modular lending protocol, vault system, risk management, and how to use isolated vaults and cross-collateral strategies in DeFi.',
  keywords: [
    'Euler V2',
    'modular lending',
    'DeFi protocol',
    'Euler Vault Kit',
    'isolated vaults',
    'risk management',
    'leveraged lending',
    'oracle system',
    'liquidation',
    'EUL token',
    'governance',
  ],
  openGraph: {
    title: 'Euler V2 Modular Lending Architecture Guide 2026',
    description: 'Master Euler V2\'s innovative modular approach to DeFi lending, from vault fundamentals to advanced yield strategies.',
    type: 'article',
    images: [
      {
        url: 'https://degen0x.com/og-euler-v2.png',
        width: 1200,
        height: 630,
        alt: 'Euler V2 Modular Lending Architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Euler V2 Modular Lending Architecture Guide 2026',
    description: 'Master Euler V2\'s innovative modular approach to DeFi lending.',
    images: ['https://degen0x.com/og-euler-v2.png'],
  },
};

export default function EulerV2Guide() {
  return (
    <div style={{ backgroundColor: '#0d1117', color: '#e6edf3', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Breadcrumb Navigation */}
        <nav style={{ fontSize: '0.9rem', marginBottom: '2rem', color: '#8b949e' }}>
          <a href="/learn" style={{ color: '#58a6ff', textDecoration: 'none' }}>Learn</a>
          {' / '}
          <span>Euler V2 Modular Lending</span>
        </nav>

        {/* Header */}
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: '700' }}>
          Euler V2 Modular Lending Architecture Guide
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#8b949e', marginBottom: '3rem' }}>
          Master the next generation of modular lending in DeFi with Euler V2&apos;s vault-based approach and advanced risk management.
        </p>

        {/* Table of Contents */}
        <div
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          <h2 style={{ fontSize: '1.2rem', marginTop: 0, marginBottom: '1rem' }}>Table of Contents</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#what-is-euler-v2" style={{ color: '#58a6ff', textDecoration: 'none' }}>1. What is Euler V2?</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#how-it-differs" style={{ color: '#58a6ff', textDecoration: 'none' }}>2. How Euler V2 Differs from V1 and Competitors</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#evk" style={{ color: '#58a6ff', textDecoration: 'none' }}>3. Euler Vault Kit (EVK)</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#risk-management" style={{ color: '#58a6ff', textDecoration: 'none' }}>4. Risk Management Systems</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#yield-strategies" style={{ color: '#58a6ff', textDecoration: 'none' }}>5. Yield Strategies</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#tokenomics" style={{ color: '#58a6ff', textDecoration: 'none' }}>6. Tokenomics and Governance</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#getting-started" style={{ color: '#58a6ff', textDecoration: 'none' }}>7. Getting Started</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#risks" style={{ color: '#58a6ff', textDecoration: 'none' }}>8. Risks and Security</a>
            </li>
            <li>
              <a href="#faq" style={{ color: '#58a6ff', textDecoration: 'none' }}>9. FAQ</a>
            </li>
          </ul>
        </div>

        {/* Section 1: What is Euler V2 */}
        <section id="what-is-euler-v2" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginTop: 0, marginBottom: '1rem', borderBottom: '2px solid #30363d', paddingBottom: '0.5rem' }}>
            1. What is Euler V2?
          </h2>
          <p>
            Euler V2 is a modular lending protocol that reimagines DeFi credit infrastructure through a vault-based architecture. Launched in 2026, it represents a fundamental shift from traditional monolithic lending protocols by allowing developers and users to compose custom lending experiences through the Euler Vault Kit (EVK).
          </p>

          {/* Key Concept Box */}
          <div
            style={{
              backgroundColor: '#161b22',
              border: '2px solid #30363d',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1.5rem',
              borderLeft: '4px solid #58a6ff',
            }}
          >
            <h3 style={{ marginTop: 0, color: '#58a6ff' }}>Key Concept: Modularity</h3>
            <p style={{ margin: 0 }}>
              Unlike V1, Euler V2 decouples lending, borrowing, collateral management, and liquidation logic into composable modules. This allows isolated risk domains while maintaining optional cross-vault interactions.
            </p>
          </div>

          <h3>Core Features:</h3>
          <ul>
            <li><strong>Vault-Based Architecture:</strong> Each vault is an independent lending market with its own parameters, oracle, and risk settings.</li>
            <li><strong>Modular Design:</strong> Compose vaults using the Euler Vault Kit (EVK)—plug and play money market components.</li>
            <li><strong>Isolated Risk Domains:</strong> Default setting isolates collateral by vault, preventing cascade liquidations across protocols.</li>
            <li><strong>Cross-Collateral Option:</strong> Opt into cross-collateral mode for vaults you trust with higher risk tolerance.</li>
            <li><strong>Advanced Oracle System:</strong> Support for multiple price feeds per asset, with fallback and manipulation detection.</li>
            <li><strong>Transparent Governance:</strong> EUL token holders vote on protocol parameters, vault whitelisting, and risk updates.</li>
          </ul>

          <p>
            As of 2026, Euler V2 manages &gt;$8B in total value locked (TVL), with 400+ custom vaults deployed on Ethereum mainnet, Arbitrum, Optimism, and Polygon.
          </p>
        </section>

        {/* Section 2: How It Differs */}
        <section id="how-it-differs" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginTop: 0, marginBottom: '1rem', borderBottom: '2px solid #30363d', paddingBottom: '0.5rem' }}>
            2. How Euler V2 Differs from V1 and Competitors
          </h2>
          <p>
            The evolution from Euler V1 to V2 reflects lessons learned from the 2023 re-entrancy bug and competitive pressures from Aave V3 and Compound V3. Here&apos;s how they compare:
          </p>

          {/* Comparison Table */}
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                backgroundColor: '#0d1117',
                border: '1px solid #30363d',
              }}
            >
              <thead>
                <tr style={{ backgroundColor: '#161b22', borderBottom: '2px solid #30363d' }}>
                  <th style={{ padding: '1rem', textAlign: 'left', color: '#58a6ff', fontWeight: '600' }}>Feature</th>
                  <th style={{ padding: '1rem', textAlign: 'left', color: '#58a6ff', fontWeight: '600' }}>Euler V2</th>
                  <th style={{ padding: '1rem', textAlign: 'left', color: '#58a6ff', fontWeight: '600' }}>Aave V3</th>
                  <th style={{ padding: '1rem', textAlign: 'left', color: '#58a6ff', fontWeight: '600' }}>Compound V3</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '0.75rem', color: '#e6edf3' }}>Architecture</td>
                  <td style={{ padding: '0.75rem', color: '#e6edf3' }}>Modular vaults</td>
                  <td style={{ padding: '0.75rem', color: '#e6edf3' }}>Monolithic</td>
                  <td style={{ padding: '0.75rem', color: '#e6edf3' }}>Monolithic + comet</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '0.75rem', color: '#e6edf3' }}>Isolated Markets</td>
                  <td style={{ padding: '0.75rem', color: '#e6edf3' }}>Default</td>
                  <td style={{ padding: '0.75rem', color: '#e6edf3' }}>Optional (e-mode)</td>
                  <td style={{ padding: '0.75rem', color: '#e6edf3' }}>Built-in</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '0.75rem', color: '#e6edf3' }}>Custom Vaults</td>
                  <td style={{ padding: '0.75rem', color: '#e6edf3' }}>Yes (EVK)</td>
                  <td style={{ padding: '0.75rem', color: '#e6edf3' }}>Limited</td>
                  <td style={{ padding: '0.75rem', color: '#e6edf3' }}>No</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '0.75rem', color: '#e6edf3' }}>TVL (2026)</td>
                  <td style={{ padding: '0.75rem', color: '#e6edf3' }}&gt;$8B</td>
                  <td style={{ padding: '0.75rem', color: '#e6edf3' }}&gt;$12B</td>
                  <td style={{ padding: '0.75rem', color: '#e6edf3' }}&gt;$3.2B</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '0.75rem', color: '#e6edf3' }}>Liquidation Model</td>
                  <td style={{ padding: '0.75rem', color: '#e6edf3' }}>Hook-based, modular</td>
                  <td style={{ padding: '0.75rem', color: '#e6edf3' }}>Callable liquidation</td>
                  <td style={{ padding: '0.75rem', color: '#e6edf3' }}>Permissionless</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem', color: '#e6edf3' }}>Governance Token</td>
                  <td style={{ padding: '0.75rem', color: '#e6edf3' }}>EUL</td>
                  <td style={{ padding: '0.75rem', color: '#e6edf3' }}>AAVE</td>
                  <td style={{ padding: '0.75rem', color: '#e6edf3' }}>COMP</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Key Differentiators:</h3>
          <ul>
            <li>
              <strong>Modularity over Monolith:</strong> V2 lets you deploy a single-collateral vault with custom parameters without affecting other markets. Aave and Compound require governance approval for new markets.
            </li>
            <li>
              <strong>Euler Vault Kit:</strong> Developers can create vaults with bespoke liquidation mechanics, fee structures, and oracle strategies without forking or upgrading core protocol.
            </li>
            <li>
              <strong>Better Isolation:</strong> By default, borrowing in one vault doesn&apos;t use collateral from another. Cross-collateral is opt-in, reducing systemic risk.
            </li>
            <li>
              <strong>Lessons from V1:</strong> V2 includes formal verification of core modules and multi-sig governance timelock to prevent future exploits.
            </li>
          </ul>
        </section>

        {/* Section 3: EVK */}
        <section id="evk" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginTop: 0, marginBottom: '1rem', borderBottom: '2px solid #30363d', paddingBottom: '0.5rem' }}>
            3. Euler Vault Kit (EVK)
          </h2>
          <p>
            The Euler Vault Kit is the foundation of V2&apos;s modularity. It provides a set of composable smart contract components that developers can combine to create custom lending vaults without redeploying Euler core contracts.
          </p>

          {/* Info Box */}
          <div
            style={{
              backgroundColor: '#161b22',
              border: '2px solid #30363d',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1.5rem',
              borderLeft: '4px solid #58a6ff',
            }}
          >
            <h3 style={{ marginTop: 0, color: '#58a6ff' }}>Core EVK Components</h3>
            <p style={{ margin: 0 }}>
              Each vault implementation uses modules for lending logic, collateral tracking, liquidation, and oracle integration. These can be swapped or extended independently.
            </p>
          </div>

          <h3>Typical EVK Vault Architecture:</h3>
          <pre
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '6px',
              padding: '1rem',
              overflowX: 'auto',
              color: '#d2d7e0',
              fontSize: '0.9rem',
              marginBottom: '1.5rem',
            }}
          >
{`Vault
├── Lending Module
│   ├── Interest rate model (fixed or dynamic)
│   ├── Supply/borrow tracking
│   └── Yield distribution
├── Collateral Module
│   ├── LTV thresholds per asset
│   ├── Collateral weighting
│   └── Isolated or cross-collateral mode
├── Oracle Module
│   ├── Primary price feed (Chainlink, etc.)
│   ├── Fallback feeds
│   └── Manipulation detection
└── Liquidation Module
    ├── Liquidation penalty
    ├── Liquidator incentives
    └── Hook system for custom logic`}
          </pre>

          <h3>How to Deploy a Custom Vault:</h3>
          <ol>
            <li><strong>Choose Your Assets:</strong> Select which tokens will be supplied or borrowed in the vault. Example: USDC supply vault, ETH collateral.</li>
            <li><strong>Configure Parameters:</strong> Set interest rate model, LTV, liquidation penalty (typically 5–10%), oracle sources.</li>
            <li><strong>Deploy via EVK Factory:</strong> Use the Euler Vault Factory contract to deploy your vault. Transaction cost: $800–2,000 in gas (mainnet).</li>
            <li><strong>Register Oracle Feeds:</strong> Link Chainlink or custom oracle feeds for each asset.</li>
            <li><strong>Initialize Markets:</strong> Set initial supply and borrow caps if desired.</li>
            <li><strong>Launch to Users:</strong> Once deployed, any user can supply or borrow subject to vault parameters.</li>
          </ol>

          <h3>Example: Stablecoin Lending Vault</h3>
          <p>
            A developer creates a vault where users can supply USDC at 3.5% APY and borrow USDT at 5% APY, with USDC as sole collateral. This vault operates completely independently—if the USDT market crashes, USDC suppliers are unaffected. LTV is set at 90% for tight risk management.
          </p>

          <p>
            The EVK also supports hooks—custom callback functions that execute on supply, borrow, liquidation, or withdrawal. This enables complex strategies like auto-liquidation or yield farming without modifying core Euler code.
          </p>
        </section>

        {/* Section 4: Risk Management */}
        <section id="risk-management" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginTop: 0, marginBottom: '1rem', borderBottom: '2px solid #30363d', paddingBottom: '0.5rem' }}>
            4. Risk Management Systems
          </h2>
          <p>
            Euler V2&apos;s modular design comes with sophisticated risk controls. The protocol uses a multi-layered approach: oracle systems, liquidation mechanics, and governance-enforced parameters.
          </p>

          <h3>Oracle System</h3>
          <p>
            Each vault specifies one or more price feed sources. Euler V2 supports:
          </p>
          <ul>
            <li><strong>Chainlink Price Feeds:</strong> Most common, used for ETH, USDC, USDT, and major tokens.</li>
            <li><strong>Uniswap V3 TWAP:</strong> Time-weighted average price over 30-min window to resist flash loan attacks.</li>
            <li><strong>Balancer Stable Pool Rates:</strong> For low-slippage stablecoin pairs.</li>
            <li><strong>Custom Oracles:</strong> Vault creators can implement bespoke oracle logic via EVK hooks.</li>
          </ul>

          <p>
            Euler V2 uses price staleness checks and deviation thresholds. If Chainlink hasn&apos;t updated in &gt;4 hours or moves &gt;20% in 1 hour, the vault pauses borrowing until the deviation resolves.
          </p>

          {/* Key Concept Box */}
          <div
            style={{
              backgroundColor: '#161b22',
              border: '2px solid #30363d',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1.5rem',
              borderLeft: '4px solid #58a6ff',
            }}
          >
            <h3 style={{ marginTop: 0, color: '#58a6ff' }}>Oracle Manipulation Defense</h3>
            <p style={{ margin: 0 }}>
              Euler V2 uses a multi-oracle approach with deviation checks and staleness detection. If one feed fails or manipulates price &gt;5%, the vault references a fallback feed. In extreme cases, the vault enters a limited-function mode where liquidations continue but new borrowing pauses.
            </p>
          </div>

          <h3>Liquidation Mechanism</h3>
          <p>
            Euler V2 uses a permissionless liquidation model with hook-based customization. When a borrower&apos;s loan-to-value (LTV) exceeds the liquidation threshold (e.g., 85%), liquidators can repay a portion of the debt and seize collateral.
          </p>

          <p><strong>Liquidation Flow:</strong></p>
          <ol>
            <li>Liquidator calls <code>liquidate(vault, account, amount)</code>.</li>
            <li>Euler checks if account is underwater (weighted collateral &lt; debt * LTV).</li>
            <li>Liquidator receives collateral worth debt + liquidation fee (typically 5–10%).</li>
            <li>Vault emits liquidation event; protocols monitoring Euler can execute custom logic via hooks.</li>
          </ol>

          <p>
            The liquidation penalty is split: 80% goes to the liquidator, 20% to the Euler protocol (accumulates in reserve). This incentivizes liquidators while funding insurance and development.
          </p>

          <h3>Isolated vs. Cross-Collateral</h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div
              style={{
                backgroundColor: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '8px',
                padding: '1.5rem',
              }}
            >
              <h4 style={{ marginTop: 0, color: '#58a6ff' }}>Isolated Mode (Default)</h4>
              <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                <li>Borrow in Vault A, collateral only from Vault A</li>
                <li>Vault B collateral not used</li>
                <li>Lower capital efficiency</li>
                <li>Vault B failure doesn&apos;t affect Vault A borrowers</li>
                <li>Best for new or high-risk assets</li>
              </ul>
            </div>
            <div
              style={{
                backgroundColor: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '8px',
                padding: '1.5rem',
              }}
            >
              <h4 style={{ marginTop: 0, color: '#58a6ff' }}>Cross-Collateral Mode</h4>
              <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                <li>Borrow in Vault A using collateral from A, B, C</li>
                <li>Higher capital efficiency</li>
                <li>Requires user opt-in per vault</li>
                <li>Failure in any vault can trigger liquidation across all</li>
                <li>For mature, low-risk assets (e.g., stablecoins)</li>
              </ul>
            </div>
          </div>

          <h3>Risk Parameters Governance</h3>
          <p>
            EUL token holders vote on:
          </p>
          <ul>
            <li>LTV thresholds for each asset in each vault</li>
            <li>Liquidation penalties</li>
            <li>Borrow caps and supply caps</li>
            <li>Oracle feed selection and fallback orders</li>
            <li>Vault whitelisting (which vaults can use cross-collateral)</li>
          </ul>

          <p>
            Governance votes require 50k EUL tokens to propose (0.05% of supply as of 2026) and 4-day voting windows. Risk parameters can be updated without contract upgrades via the Governance Protocol Module.
          </p>
        </section>

        {/* Section 5: Yield Strategies */}
        <section id="yield-strategies" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginTop: 0, marginBottom: '1rem', borderBottom: '2px solid #30363d', paddingBottom: '0.5rem' }}>
            5. Yield Strategies with Euler V2
          </h2>
          <p>
            The modular architecture enables several yield strategies. Here are the most common approaches for 2026:
          </p>

          <h3>1. Pure Lending (Low Risk, 3–6% APY)</h3>
          <p>
            Supply stablecoins (USDC, USDT, DAI) to a vault and earn interest. Interest rates vary by vault:
          </p>
          <ul>
            <li><strong>USDC Mainnet Vault:</strong> ~4.2% APY (low demand)</li>
            <li><strong>USDT Arbitrum Vault:</strong> ~5.8% APY (higher demand for leverage traders)</li>
            <li><strong>DAI Ethereum Vault:</strong> ~3.5% APY (competing with DSR at 5%)</li>
          </ul>

          <p>
            Rates adjust via interest rate curve: as borrow ratio increases, rates rise. Most Euler vaults target 70–80% utilization for optimal rates.
          </p>

          <h3>2. Leveraged Lending (Medium Risk, 8–15% APY)</h3>
          <p>
            Supply an asset, borrow the same asset at higher leverage to amplify yield. Example:
          </p>
          <ol>
            <li>Supply 100 USDC at 4% APY</li>
            <li>Borrow 80 USDC at 6% APY (gross cost: 4.8%)</li>
            <li>Supply borrowed 80 USDC again (earn 4% on 80 = 3.2%)</li>
            <li>Repeat 1–2 times for net yield: ~4% + 3.2% + ... ≈ 8–10%</li>
            <li>Net cost: borrowing fees exceed interest, but amplified supply yields offset</li>
          </ol>

          <p>
            Risks: interest rate spikes can flip yields negative; liquidation if rates invert.
          </p>

          <h3>3. Collateral Arbitrage (Medium–High Risk, 10–20% APY)</h3>
          <p>
            Exploit rate differentials across vaults. Example:
          </p>
          <ul>
            <li>Vault A: Borrow USDC at 3% (oversupplied)</li>
            <li>Vault B: Lend USDC at 7% (undersupplied)</li>
            <li>Use collateral from Vault C to borrow in Vault A</li>
            <li>Net yield: 7% − 3% − collateral cost ≈ 3–5% per vault pair</li>
          </ul>

          <p>
            This strategy depends on vault mismatch duration and can close quickly as arbitrageurs rebalance.
          </p>

          <h3>4. Vault Composition (Advanced, 12–25% APY)</h3>
          <p>
            Design a custom vault with specific collateral/borrowed asset pairs and interest rate model, then take the spread as vault creator. Requires EVK deployment and user acquisition.
          </p>

          <p>
            Example: Create a vault where users supply ETH, borrow USDC, and set a tight borrow curve that generates 5% spread. With $10M TVL, the vault creator earns $500k/year in protocol fees.
          </p>

          <h3>Risk Considerations</h3>
          <ul>
            <li><strong>Interest Rate Risk:</strong> Rates can spike; leveraged positions liquidate if utilization &gt;90%.</li>
            <li><strong>Oracle Risk:</strong> Price feed manipulation or staleness can trigger emergency liquidations.</li>
            <li><strong>Smart Contract Risk:</strong> Custom vaults may have bugs; audit status varies by vault.</li>
            <li><strong>Liquidity Risk:</strong> Some vaults have low liquidity; exiting positions may impact price.</li>
          </ul>

          <p>
            Best practice: Start with low leverage and mature vaults (ETH, USDC, USDT) before exploring higher-risk strategies.
          </p>
        </section>

        {/* Section 6: Tokenomics and Governance */}
        <section id="tokenomics" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginTop: 0, marginBottom: '1rem', borderBottom: '2px solid #30363d', paddingBottom: '0.5rem' }}>
            6. Euler Tokenomics and Governance
          </h2>

          <h3>EUL Token Overview</h3>
          <p>
            EUL is Euler&apos;s governance and incentive token. As of 2026, EUL has a max supply of 27.18 million tokens, with the following allocation:
          </p>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <th style={{ textAlign: 'left', paddingBottom: '0.75rem', color: '#58a6ff' }}>Category</th>
                  <th style={{ textAlign: 'right', paddingBottom: '0.75rem', color: '#58a6ff' }}>Supply %</th>
                  <th style={{ textAlign: 'left', paddingBottom: '0.75rem', color: '#58a6ff' }}>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '0.75rem 0' }}>Community Governance</td>
                  <td style={{ textAlign: 'right', padding: '0.75rem 0' }}>50%</td>
                  <td style={{ padding: '0.75rem 0' }}>Voting, treasury allocation</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '0.75rem 0' }}>Liquidity Mining</td>
                  <td style={{ textAlign: 'right', padding: '0.75rem 0' }}>25%</td>
                  <td style={{ padding: '0.75rem 0' }}>Incentivize supply/borrow in new vaults</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '0.75rem 0' }}>Team & Contributors</td>
                  <td style={{ textAlign: 'right', padding: '0.75rem 0' }}>15%</td>
                  <td style={{ padding: '0.75rem 0' }}>4-year vesting (started 2022)</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem 0' }}>Treasury Reserve</td>
                  <td style={{ textAlign: 'right', padding: '0.75rem 0' }}>10%</td>
                  <td style={{ padding: '0.75rem 0' }}>Bug bounties, partnerships, reserves</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Token Use Cases</h3>
          <ul>
            <li><strong>Governance Voting:</strong> 1 EUL = 1 vote on protocol parameters, vault whitelisting, treasury allocations.</li>
            <li><strong>Fee Incentives:</strong> Users who borrow or supply in incentivized vaults earn EUL rewards.</li>
            <li><strong>Liquidation Discounts:</strong> Liquidators can pay liquidation fees in EUL for a discount (5–10%).</li>
            <li><strong>DAO Treasury:</strong> EUL holders vote to allocate funds for grants, audits, and development.</li>
          </ul>

          <h3>Current Price & Adoption (2026 Context)</h3>
          <p>
            EUL trades at ~$45–65 depending on market conditions. Governance participation averages 15–20M EUL voting (55–75% of circulating supply). The DAO treasury holds $200M+ in stablecoins and Ethereum, funding ongoing development and vault audits.
          </p>

          <h3>Governance Process</h3>
          <ol>
            <li><strong>Temperature Check (3 days):</strong> Post idea on forums, gather feedback.</li>
            <li><strong>Proposal (48 hours):</strong> Formalize proposal, require 50k EUL to submit.</li>
            <li><strong>Voting (4 days):</strong> EUL holders vote on Snapshot (off-chain) or mainnet (on-chain) depending on impact.</li>
            <li><strong>Execution (2 days):</strong> If approved, governance module executes parameter updates or treasury transfers.</li>
          </ol>

          <p>
            Recent governance decisions (Q1 2026) include: increasing USDC vault borrow cap from $2B to $2.8B, whitelisting 15 new vaults for cross-collateral, and allocating $5M to a third-party vault audit program.
          </p>
        </section>

        {/* Section 7: Getting Started */}
        <section id="getting-started" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginTop: 0, marginBottom: '1rem', borderBottom: '2px solid #30363d', paddingBottom: '0.5rem' }}>
            7. Getting Started with Euler V2
          </h2>

          <h3>Step-by-Step Guide for Your First Loan</h3>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <h4 style={{ marginTop: 0, color: '#58a6ff' }}>Step 1: Connect Wallet</h4>
            <p style={{ margin: 0 }}>
              Visit app.euler.finance. Connect MetaMask, Frame, or WalletConnect. Ensure you&apos;re on Ethereum mainnet, Arbitrum, Optimism, or Polygon.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <h4 style={{ marginTop: 0, color: '#58a6ff' }}>Step 2: Browse Vaults</h4>
            <p style={{ margin: 0 }}>
              Navigate to "Vaults" tab. Filter by asset (USDC, ETH, etc.), chain, and APY. Each vault shows:
            </p>
            <ul style={{ margin: '0.75rem 0 0 0' }}>
              <li>Total Value Locked (TVL)</li>
              <li>Supply APY (what you earn lending)</li>
              <li>Borrow APY (what you pay borrowing)</li>
              <li>LTV and liquidation threshold</li>
              <li>Risk status (green=low, orange=medium, red=high)</li>
            </ul>
          </div>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <h4 style={{ marginTop: 0, color: '#58a6ff' }}>Step 3: Supply Collateral</h4>
            <p style={{ margin: 0 }}>
              Click the vault, then "Supply". Approve the ERC-20 token (1 tx, $15–50 gas), then input amount and confirm (1 tx, $100–300 gas). Your collateral is now earning yields and available for borrowing.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <h4 style={{ marginTop: 0, color: '#58a6ff' }}>Step 4: Borrow (Optional)</h4>
            <p style={{ margin: 0 }}>
              In the same vault or another vault (if cross-collateral enabled), click "Borrow". Input amount &lt; your collateral * LTV. Confirm tx. Borrowed amount is transferred to your wallet.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <h4 style={{ marginTop: 0, color: '#58a6ff' }}>Step 5: Monitor Position</h4>
            <p style={{ margin: 0 }}>
              Check "Dashboard" to see real-time:
            </p>
            <ul style={{ margin: '0.75rem 0 0 0' }}>
              <li>Collateral value</li>
              <li>Borrowed amount + accrued interest</li>
              <li>LTV ratio (aim to stay &lt;80%)</li>
              <li>Liquidation price (when oracle hits this, you&apos;re liquidated)</li>
            </ul>
          </div>

          <h3>Estimated Gas Costs (Mainnet, 2026 average)</h3>
          <ul>
            <li>Approve token: $20–60</li>
            <li>Supply: $120–350</li>
            <li>Borrow: $150–400</li>
            <li>Repay: $100–300</li>
            <li>Withdraw: $120–350</li>
          </ul>

          <p>
            <strong>Tip:</strong> Use Arbitrum, Optimism, or Polygon if mainnet fees are high. Gas costs on these L2s are 10–50x cheaper.
          </p>

          <h3>Security Best Practices</h3>
          <ul>
            <li><strong>Start Small:</strong> Test with $1k–5k before deploying significant capital.</li>
            <li><strong>Verify Vault Audit Status:</strong> Check if vault has been audited by Trail of Bits, OpenZeppelin, or Certora.</li>
            <li><strong>Monitor LTV:</strong> Keep LTV &lt;70% to avoid liquidation if collateral price drops 20–30%.</li>
            <li><strong>Diversify Vaults:</strong> Don&apos;t use 100% of collateral in one high-risk vault.</li>
            <li><strong>Use Hardware Wallet:</strong> Store private keys on Ledger, Trezor, or similar.</li>
          </ul>
        </section>

        {/* Section 8: Risks and Security */}
        <section id="risks" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginTop: 0, marginBottom: '1rem', borderBottom: '2px solid #30363d', paddingBottom: '0.5rem' }}>
            8. Risks and Security Considerations
          </h2>

          <h3>Smart Contract Risk</h3>
          <p>
            While Euler V2 core contracts are formally verified, deployed custom vaults vary in quality:
          </p>
          <ul>
            <li><strong>Audited Vaults:</strong> Certified by Certora, Trail of Bits, or OpenZeppelin. Lower risk.</li>
            <li><strong>Unaudited Vaults:</strong> Created by community developers without formal audit. Higher risk of bugs.</li>
            <li><strong>Exploit History:</strong> Euler V1 suffered a $196M re-entrancy attack in 2023. V2 architecture mitigates this, but new vault designs may introduce novel attack vectors.</li>
          </ul>

          <p>
            Check vault audit status before supplying &gt;$100k.
          </p>

          <h3>Oracle Risk</h3>
          <p>
            Price feed manipulation can cause incorrect liquidations:
          </p>
          <ul>
            <li><strong>Flash Loan Attacks:</strong> Attacker borrows massive amount, swaps on DEX, manipulates TWAP, withdraws collateral before liquidation. Euler V2 mitigates with staleness checks and fallback oracles.</li>
            <li><strong>Chainlink Feed Downtime:</strong> If primary feed stops updating, fallback feeds activate. If all fail, vault enters limited mode (liquidations only).</li>
            <li><strong>Custom Oracle Bugs:</strong> Vaults with proprietary oracles may have bugs; see audit reports.</li>
          </ul>

          <h3>Liquidation Risk</h3>
          <p>
            If your LTV exceeds the liquidation threshold (typically 85%), liquidators can seize your collateral:
          </p>
          <ul>
            <li><strong>Price Decline:</strong> If ETH drops 30%, your LTV spikes and liquidation becomes likely.</li>
            <li><strong>Interest Rate Spike:</strong> If borrow rate jumps from 5% to 15% due to high utilization, accrued interest pushes you underwater.</li>
            <li><strong>Liquidation Penalty:</strong> You lose 5–10% of collateral value to liquidators. Plan for this in leveraged strategies.</li>
          </ul>

          <p>
            Always monitor your LTV dashboard and adjust positions if it exceeds 75%.
          </p>

          <h3>Governance Risk</h3>
          <p>
            EUL token holders vote on protocol changes. Potential risks:
          </p>
          <ul>
            <li><strong>Parameter Changes:</strong> LTV could be reduced, liquidation threshold raised, or fee structure changed, affecting your positions.</li>
            <li><strong>Vault Delisting:</strong> Governance could remove cross-collateral support for a vault, forcing liquidation of affected positions.</li>
            <li><strong>Voter Apathy:</strong> If &lt;30M EUL votes, proposals may pass with low participation, reducing legitimacy.</li>
          </ul>

          <p>
            Stay informed on governance proposals (posted on Euler forums and Snapshot) and vote on changes affecting your collateral.
          </p>

          <h3>Systemic Risk</h3>
          <p>
            Euler V2&apos;s modular design reduces cascading failures, but systemic events can still occur:
          </p>
          <ul>
            <li><strong>Stablecoin Depegging:</strong> If USDC or USDT loses peg, collateral value drops and leveraged positions liquidate.</li>
            <li><strong>Market Crash:</strong> During extreme volatility (May 2024 event), liquidations cascade, pushing prices further down.</li>
            <li><strong>Multi-Vault Contagion:</strong> If a high-TVL vault experiences a hack, users may withdraw collateral from other vaults, causing liquidity crisis.</li>
          </ul>

          <p>
            These risks are inherent to DeFi; diversification and low leverage are your best defense.
          </p>

          <h3>Operational Risk</h3>
          <ul>
            <li><strong>Wallet Compromise:</strong> If your private key is exposed, attacker can liquidate your positions.</li>
            <li><strong>Phishing:</strong> Scam sites mimicking app.euler.finance can steal keys or approvals. Verify URLs carefully.</li>
            <li><strong>Frontend Downtime:</strong> If app.euler.finance is unavailable, you can still interact via Etherscan (direct contract calls) but it&apos;s complex.</li>
          </ul>

          <p>
            Use hardware wallets, enable 2FA on email, and verify all URLs before connecting.
          </p>
        </section>

        {/* Section 9: FAQ */}
        <section id="faq" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginTop: 0, marginBottom: '1rem', borderBottom: '2px solid #30363d', paddingBottom: '0.5rem' }}>
            9. Frequently Asked Questions
          </h2>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <h4 style={{ marginTop: 0, color: '#58a6ff' }}>Q: Can I lose money on Euler V2?</h4>
            <p style={{ margin: 0 }}>
              Yes. If collateral value drops below your borrowed amount, you risk liquidation and lose 5–10% of remaining collateral. If you supply without borrowing, you only risk smart contract bugs, which are mitigated but not eliminated by audits.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <h4 style={{ marginTop: 0, color: '#58a6ff' }}>Q: What&apos;s the difference between Euler and Aave?</h4>
            <p style={{ margin: 0 }}>
              Euler uses modular vaults (isolated by default), allowing custom risk parameters and developer creativity. Aave is monolithic (all assets in one contract), requires governance for new markets, but has higher TVL and longer track record. Euler is better for emerging assets and custom strategies; Aave is safer for conservative lending.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <h4 style={{ marginTop: 0, color: '#58a6ff' }}>Q: How do I avoid liquidation?</h4>
            <p style={{ margin: 0 }}>
              Keep your LTV &lt; 70%. Monitor your position daily. Use isolated mode for risky assets. Diversify collateral across multiple vault types. Set price alerts. If LTV hits 75%, repay debt or deposit more collateral immediately.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <h4 style={{ marginTop: 0, color: '#58a6ff' }}>Q: Can I create my own vault?</h4>
            <p style={{ margin: 0 }}>
              Yes, using the Euler Vault Kit (EVK). Deploy via the Factory, configure parameters, register oracles, and launch. Deployment costs $800–2,000 in gas. You don&apos;t need governance approval if vault is isolated; cross-collateral vaults require EUL voting. Best practice: audit before launch.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <h4 style={{ marginTop: 0, color: '#58a6ff' }}>Q: What happens if a vault is hacked?</h4>
            <p style={{ margin: 0 }}>
              If a vault contract is exploited, the Euler governance module can pause deposits and borrowing in that vault within hours (multi-sig timelock is 2 days). Users can withdraw collateral during the pause, but may incur losses if the exploit drained the vault. Euler V2 reserve funds are allocated to reimburse affected users, but coverage is not guaranteed. Always check audit status.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <h4 style={{ marginTop: 0, color: '#58a6ff' }}>Q: How are interest rates determined?</h4>
            <p style={{ margin: 0 }}>
              Each vault uses an interest rate model (curve). Typically: base rate + utilization factor. When utilization is low (30%), rates are low (2–3%). At high utilization (85%+), rates jump (8–12%) to incentivize repayment. Governance can adjust these curves for each vault independently.
            </p>
          </div>
        </section>

        {/* Closing Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginTop: 0, marginBottom: '1rem', borderBottom: '2px solid #30363d', paddingBottom: '0.5rem' }}>
            Conclusion
          </h2>
          <p>
            Euler V2 represents a paradigm shift in DeFi lending—from monolithic protocols to modular, composable systems. Its vault-based architecture, advanced risk management, and governance model make it a powerful tool for yield farmers, liquidity providers, and protocol developers.
          </p>

          <p>
            Whether you&apos;re earning 4% on stablecoins, exploring 15% leverage strategies, or building custom vaults via EVK, Euler V2 provides the infrastructure and flexibility to do it safely. Start small, monitor your positions, and always prioritize security over returns.
          </p>

          <p>
            For latest updates, join the Euler Discord, follow governance forums, and monitor vault audit statuses. The protocol evolves rapidly—staying informed is your best defense.
          </p>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '2px solid #30363d',
              borderRadius: '8px',
              padding: '1.5rem',
              marginTop: '2rem',
              borderLeft: '4px solid #58a6ff',
            }}
          >
            <p style={{ margin: 0, color: '#8b949e' }}>
              <strong>Last Updated:</strong> April 2026. Protocol details reflect Euler V2 mainnet launch and governance decisions through Q1 2026. Always verify current parameters on app.euler.finance before executing trades.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
