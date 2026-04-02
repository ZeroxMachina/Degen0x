import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flash Loans in DeFi: Complete 2026 Guide | degen0x',
  description: 'Master flash loans: atomic uncollateralized borrowing, major providers (Aave, dYdX, Balancer), technical walkthrough, use cases, attacks, and 2026 developments.',
  keywords: [
    'flash loans',
    'DeFi',
    'Aave flash loans',
    'dYdX',
    'Balancer',
    'atomic transactions',
    'arbitrage',
    'smart contracts',
    'uncollateralized borrowing',
    'flash loan attacks',
    'Ethereum',
  ],
  openGraph: {
    title: 'Flash Loans in DeFi: Complete 2026 Guide',
    description: 'Master flash loans: atomic uncollateralized borrowing, major providers, technical walkthrough, and security considerations.',
    type: 'article',
    url: 'https://degen0x.com/learn/flash-loans-defi-guide-2026',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flash Loans in DeFi: Complete 2026 Guide',
    description: 'Atomic uncollateralized borrowing explained. Aave, dYdX, Balancer comparison + code walkthrough.',
  },
};

export default function FlashLoansGuide() {
  return (
    <div style={{ backgroundColor: '#0d1117', color: '#e6edf3', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Breadcrumb Navigation */}
        <nav style={{ marginBottom: '2rem', fontSize: '0.875rem', color: '#8b949e' }}>
          <a href="/learn" style={{ color: '#58a6ff', textDecoration: 'none' }}>Learn</a>
          {' / '}
          <span>Flash Loans in DeFi: 2026 Guide</span>
        </nav>

        {/* Header */}
        <header style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#e6edf3' }}>
            Flash Loans in DeFi: Complete Technical Guide
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#8b949e', marginBottom: '1rem' }}>
            Master atomic uncollateralized borrowing in blockchain. From Aave to 2026 innovations.
          </p>
          <div style={{ color: '#8b949e', fontSize: '0.875rem' }}>
            <span>Updated: April 2026</span> • <span>Read time: 12–15 min</span>
          </div>
        </header>

        {/* Table of Contents */}
        <div style={{
          backgroundColor: '#161b22',
          border: '1px solid #30363d',
          borderRadius: '0.5rem',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#e6edf3' }}>
            Table of Contents
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <a href="#what-are-flash-loans" style={{ color: '#58a6ff', textDecoration: 'none' }}>1. What Are Flash Loans?</a>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <a href="#how-flash-loans-work" style={{ color: '#58a6ff', textDecoration: 'none' }}>2. How Flash Loans Work Technically</a>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <a href="#major-providers" style={{ color: '#58a6ff', textDecoration: 'none' }}>3. Major Flash Loan Providers</a>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <a href="#use-cases" style={{ color: '#58a6ff', textDecoration: 'none' }}>4. Flash Loan Use Cases</a>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <a href="#attacks" style={{ color: '#58a6ff', textDecoration: 'none' }}>5. Flash Loan Attacks &amp; History</a>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <a href="#fees" style={{ color: '#58a6ff', textDecoration: 'none' }}>6. Flash Loan Fees Comparison</a>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <a href="#building" style={{ color: '#58a6ff', textDecoration: 'none' }}>7. Building a Flash Loan: Code Walkthrough</a>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <a href="#chains" style={{ color: '#58a6ff', textDecoration: 'none' }}>8. Flash Loans Across Chains</a>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <a href="#risks" style={{ color: '#58a6ff', textDecoration: 'none' }}>9. Risks &amp; Ethical Considerations</a>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <a href="#2026-developments" style={{ color: '#58a6ff', textDecoration: 'none' }}>10. Flash Loans in 2026</a>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <a href="#faq" style={{ color: '#58a6ff', textDecoration: 'none' }}>11. Frequently Asked Questions</a>
            </li>
          </ul>
        </div>

        {/* Section 1: What Are Flash Loans */}
        <section id="what-are-flash-loans" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: '#e6edf3' }}>
            What Are Flash Loans?
          </h2>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Flash loans are uncollateralized loans that must be borrowed and repaid within a single atomic transaction. They represent one of DeFi&apos;s most powerful and contentious innovations, enabling capital-efficient arbitrage, liquidations, and protocol manipulations—all without requiring collateral upfront.
          </p>

          <div style={{
            backgroundColor: '#161b22',
            border: '1px solid #58a6ff',
            borderLeft: '4px solid #58a6ff',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#58a6ff' }}>
              Core Principle
            </h3>
            <p style={{ color: '#e6edf3', margin: 0 }}>
              A flash loan is atomic: either the entire transaction succeeds (borrow, execute, repay), or the entire transaction reverts as if nothing happened. There is no in-between state.
            </p>
          </div>

          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            The key innovation is <strong>atomicity</strong>. Traditional lending requires collateral or credit checks before funds change hands. Flash loans bypass this by leveraging blockchain&apos;s transaction model: the loan provider only releases funds if the entire transaction succeeds, including the repayment with fees.
          </p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            Why They Matter
          </h3>
          <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#e6edf3', lineHeight: '1.8' }}>
            <li><strong>Permissionless Capital Access:</strong> Anyone can access millions without collateral—if they can execute profitable logic within one block.</li>
            <li><strong>Arbitrage Efficiency:</strong> Traders can exploit price discrepancies across exchanges without locking up their own capital.</li>
            <li><strong>Protocol Flexibility:</strong> Enable complex multi-step operations (swaps, liquidations, migrations) in one atomic unit.</li>
            <li><strong>Market Impact:</strong> Massive capital deployment within microseconds, affecting prices and creating both opportunities and risks.</li>
          </ul>
        </section>

        {/* Section 2: How Flash Loans Work Technically */}
        <section id="how-flash-loans-work" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: '#e6edf3' }}>
            How Flash Loans Work Technically
          </h2>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Flash loans work through a combination of smart contract callbacks and transaction atomicity. Here&apos;s the step-by-step flow:
          </p>

          {/* Flash Loan Flow Diagram */}
          <div style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#e6edf3' }}>
              Flash Loan Execution Flow
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              <div style={{
                backgroundColor: '#0d1117',
                border: '1px solid #30363d',
                borderRadius: '0.375rem',
                padding: '1rem'
              }}>
                <div style={{ fontWeight: 'bold', color: '#58a6ff', marginBottom: '0.5rem' }}>Step 1: Initiate Flash Loan</div>
                <div style={{ color: '#8b949e', fontSize: '0.875rem' }}>
                  Borrower calls flash loan function on protocol contract (e.g., `flashLoan()`), specifying token, amount, and callback contract.
                </div>
              </div>

              <div style={{
                backgroundColor: '#0d1117',
                border: '1px solid #30363d',
                borderRadius: '0.375rem',
                padding: '1rem'
              }}>
                <div style={{ fontWeight: 'bold', color: '#58a6ff', marginBottom: '0.5rem' }}>Step 2: Transfer Funds</div>
                <div style={{ color: '#8b949e', fontSize: '0.875rem' }}>
                  Protocol transfers loan amount to borrower contract. No collateral required; trust is secured by transaction atomicity.
                </div>
              </div>

              <div style={{
                backgroundColor: '#0d1117',
                border: '1px solid #30363d',
                borderRadius: '0.375rem',
                padding: '1rem'
              }}>
                <div style={{ fontWeight: 'bold', color: '#58a6ff', marginBottom: '0.5rem' }}>Step 3: Execute Callback</div>
                <div style={{ color: '#8b949e', fontSize: '0.875rem' }}>
                  Protocol invokes `executeOperation()` or `flashLoanReceiver()` callback on borrower contract. Borrower executes arbitrage, swaps, or liquidations here.
                </div>
              </div>

              <div style={{
                backgroundColor: '#0d1117',
                border: '1px solid #30363d',
                borderRadius: '0.375rem',
                padding: '1rem'
              }}>
                <div style={{ fontWeight: 'bold', color: '#58a6ff', marginBottom: '0.5rem' }}>Step 4: Calculate Fee</div>
                <div style={{ color: '#8b949e', fontSize: '0.875rem' }}>
                  Protocol calculates fee (typically 0.05%–1% of loan amount). Borrower must have sufficient funds to cover repayment &amp; fee.
                </div>
              </div>

              <div style={{
                backgroundColor: '#0d1117',
                border: '1px solid #30363d',
                borderRadius: '0.375rem',
                padding: '1rem'
              }}>
                <div style={{ fontWeight: 'bold', color: '#58a6ff', marginBottom: '0.5rem' }}>Step 5: Validate &amp; Revert</div>
                <div style={{ color: '#8b949e', fontSize: '0.875rem' }}>
                  Protocol checks if funds received back (principal + fee). If not, entire transaction reverts. If yes, loan completes successfully.
                </div>
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            The Callback Pattern
          </h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Flash loans rely on a callback pattern similar to ERC20 `approve()`. The borrower contract must implement an interface that the lender calls mid-transaction. Example function signature:
          </p>
          <pre style={{
            backgroundColor: '#0d1117',
            border: '1px solid #30363d',
            borderRadius: '0.5rem',
            padding: '1rem',
            overflow: 'auto',
            marginBottom: '1rem',
            fontSize: '0.85rem',
            color: '#79c0ff'
          }}>
{`function executeOperation(
  address asset,
  uint256 amount,
  uint256 premium,
  address initiator,
  bytes calldata params
) external override returns (bytes32) {
  // Execute arbitrage, swaps, liquidations, etc.

  // Approve lender to pull repayment
  IERC20(asset).approve(
    address(LENDER),
    amount + premium
  );

  return keccak256("ERC3156FlashBorrower.onFlashLoan");
}`}
          </pre>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            Why Atomicity Matters
          </h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Atomicity is the security mechanism. If the borrower doesn&apos;t repay the loan + fee by the end of the transaction, the <strong>entire transaction reverts</strong>, undoing all state changes. This means the protocol is never left with a loss—only the borrower can lose (if arbitrage fails).
          </p>
        </section>

        {/* Section 3: Major Flash Loan Providers */}
        <section id="major-providers" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: '#e6edf3' }}>
            Major Flash Loan Providers
          </h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Several DeFi protocols now offer flash loans, each with different fee structures, liquidity, and chain availability:
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#e6edf3' }}>
            1. Aave (Most Popular)
          </h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Aave offers flash loans via the Lending Pool. They charge a 0.09% fee and support hundreds of assets. Aave is available on Ethereum, Arbitrum, Optimism, Base, Polygon, and other chains. Total flash loan capacity is tied to Aave&apos;s liquidity pools.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#e6edf3' }}>
            2. dYdX (Highest Liquidity)
          </h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            dYdX offers flash loans with 2 wei fee per borrow (essentially free). dYdX v3 provides massive liquidity and lower fees than competitors. However, dYdX v4 moved to a new chain (dYdX Chain) in 2024, shifting focus from Ethereum flash loans.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#e6edf3' }}>
            3. Balancer (LBP Flash Loans)
          </h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Balancer offers flash loans with 0% fee (except gas). They support any token in Balancer liquidity pools. Available on Ethereum, Arbitrum, and Polygon, Balancer is ideal for flash loan arbitrage between Balancer pools.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#e6edf3' }}>
            4. Uniswap V4 Hooks (Emerging)
          </h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Uniswap V4 introduced &quot;hooks&quot;—custom contracts that can borrow and repay within a swap. This enables in-swap flash loans and is reshaping how flash loans integrate with DEXes.
          </p>

          {/* Provider Comparison Table */}
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              backgroundColor: '#161b22',
              border: '1px solid #30363d'
            }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #30363d', backgroundColor: '#0d1117' }}>
                  <th style={{ padding: '1rem', textAlign: 'left', color: '#58a6ff', fontWeight: 'bold' }}>Provider</th>
                  <th style={{ padding: '1rem', textAlign: 'left', color: '#58a6ff', fontWeight: 'bold' }}>Fee</th>
                  <th style={{ padding: '1rem', textAlign: 'left', color: '#58a6ff', fontWeight: 'bold' }}>Max Liquidity</th>
                  <th style={{ padding: '1rem', textAlign: 'left', color: '#58a6ff', fontWeight: 'bold' }}>Chains</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>Aave</td>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>0.09%</td>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>Varies (&lt;$1B typical)</td>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>Ethereum, Arbitrum, Base, Optimism, Polygon</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>dYdX v3</td>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>~2 wei</td>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>&gt;$1B (Ethereum only now)</td>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>Ethereum</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>Balancer</td>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>0%</td>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>Pool-dependent</td>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>Ethereum, Arbitrum, Polygon</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>Uniswap V4</td>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>Protocol-dependent</td>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>Hook-dependent</td>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>All (protocol-dependent)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Flash Loan Use Cases */}
        <section id="use-cases" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: '#e6edf3' }}>
            Flash Loan Use Cases
          </h2>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            1. Arbitrage
          </h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            The classic use case. Borrow funds, buy on one DEX, sell on another at a premium, repay the loan + fee, pocket the profit. Flash loans eliminate the need to hold capital between trades.
          </p>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            <strong>Example:</strong> USDC trades at $1.001 on Uniswap V3 and $0.999 on Curve. Borrow $100k USDC, buy on Curve, sell on Uniswap, repay + fee, keep $2k profit (minus ~$9 fee).
          </p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            2. Collateral Swaps
          </h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Swap collateral in lending protocols without closing positions. Borrow the new collateral, repay the old debt, then repay the flash loan from liquidation proceeds or swapped assets.
          </p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            3. Self-Liquidation &amp; Refinancing
          </h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Users approaching liquidation can use flash loans to liquidate their own position, swap collateral, and refinance before the transaction ends. This prevents forced liquidations and maintains control.
          </p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            4. Yield Optimization
          </h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Deploy flash loan capital into high-yield opportunities (liquidity mining, yield farming) within a single block, harvest rewards, and repay. Maximizes per-block returns.
          </p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            5. Oracle Manipulation &amp; Protocol Attacks
          </h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: '#e6edf3' }}>
            (Historical, now mitigated.) Flash loans can temporarily move prices to manipulate price oracles, allowing attackers to borrow more collateral or trigger cascading liquidations. Modern protocols now use time-weighted average prices (TWAP) to prevent this.
          </p>
        </section>

        {/* Section 5: Flash Loan Attacks */}
        <section id="attacks" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: '#e6edf3' }}>
            Flash Loan Attacks &amp; History
          </h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Flash loans have been weaponized multiple times. Here are the most notable attacks and how protocols defend against them:
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            bZx Attacks (February 2020)
          </h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Attacker borrowed massive amounts of tokens via flash loans, manipulated prices on Uniswap and Kyber, and profited from price differences. Total loss: ~$600k. This exposed the oracle manipulation vulnerability.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            Harvest Finance Attack (October 2020)
          </h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Attacker used flash loans to manipulate Curve&apos;s oracle, which Harvest was using for yield farming. Stole $34M by artificially dropping stablecoin prices, tricking Harvest into unprofitable trades.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            Pancake Bunny Attack (May 2021)
          </h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Flash loan attack via Curve&apos;s oracle. Attacker manipulated BUNNY&apos;s price by borrowing massive amounts, which Pancake Bunny&apos;s contracts read directly. Loss: $45M.
          </p>

          <div style={{
            backgroundColor: '#7d3c29',
            border: '1px solid #f85149',
            borderLeft: '4px solid #f85149',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#f85149' }}>
              Warning: Common Attack Vector
            </h3>
            <p style={{ color: '#e6edf3', margin: 0 }}>
              <strong>Oracle Manipulation:</strong> Many attacks exploit protocols that read prices directly from DEX pools. If a protocol doesn&apos;t use time-weighted average prices (TWAP), an attacker can flash loan billions, move the price temporarily, and exploit any logic that depends on that price—all in one block.
            </p>
          </div>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            How Protocols Now Defend
          </h3>
          <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#e6edf3', lineHeight: '1.8' }}>
            <li><strong>TWAP Oracles:</strong> Use time-weighted average prices over multiple blocks. Flash loans can only affect one block, making manipulation unprofitable.</li>
            <li><strong>Chainlink &amp; Alternative Oracles:</strong> Rely on decentralized, off-chain price feeds instead of on-chain DEX prices.</li>
            <li><strong>Circuit Breakers:</strong> Pause trading or liquidations if prices move beyond a threshold in a single block.</li>
            <li><strong>Flash Loan Guards:</strong> Add checks to ensure balances before and after flash loan operations haven&apos;t diverged suspiciously.</li>
            <li><strong>Multi-Block Checks:</strong> Require certain state changes to persist across multiple blocks, invalidating single-transaction attacks.</li>
          </ul>
        </section>

        {/* Section 6: Flash Loan Fees */}
        <section id="fees" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: '#e6edf3' }}>
            Flash Loan Fees Comparison
          </h2>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Flash loan fees vary by protocol. Here&apos;s a breakdown of typical costs as of 2026:
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              backgroundColor: '#161b22',
              border: '1px solid #30363d'
            }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #30363d', backgroundColor: '#0d1117' }}>
                  <th style={{ padding: '1rem', textAlign: 'left', color: '#58a6ff', fontWeight: 'bold' }}>Protocol</th>
                  <th style={{ padding: '1rem', textAlign: 'left', color: '#58a6ff', fontWeight: 'bold' }}>Fee Rate</th>
                  <th style={{ padding: '1rem', textAlign: 'left', color: '#58a6ff', fontWeight: 'bold' }}>Example: $1M Loan</th>
                  <th style={{ padding: '1rem', textAlign: 'left', color: '#58a6ff', fontWeight: 'bold' }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>Aave</td>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>0.09%</td>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>$900</td>
                  <td style={{ padding: '1rem', color: '#8b949e', fontSize: '0.85rem' }}>Fixed + gas costs</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>dYdX v3</td>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>~2 wei</td>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>&lt;$0.01</td>
                  <td style={{ padding: '1rem', color: '#8b949e', fontSize: '0.85rem' }}>Essentially free (Ethereum only)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>Balancer</td>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>0%</td>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>$0 (gas only)</td>
                  <td style={{ padding: '1rem', color: '#8b949e', fontSize: '0.85rem' }}>Free protocol fee, token-dependent</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>Uniswap V4</td>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>Varies</td>
                  <td style={{ padding: '1rem', color: '#e6edf3' }}>Hook-dependent</td>
                  <td style={{ padding: '1rem', color: '#8b949e', fontSize: '0.85rem' }}>Set by individual hooks</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            <strong>Gas Costs:</strong> Don&apos;t forget gas. Flash loan transactions are complex and typically cost 200k–500k gas on Ethereum. At 30 gwei, that&apos;s $6–$15 per transaction (highly variable with network conditions). On cheaper chains like Arbitrum or Base, gas is negligible.
          </p>

          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            <strong>Profit Threshold:</strong> For a flash loan to be profitable, the arbitrage spread or yield opportunity must exceed protocol fees + gas costs. This is why most flash loan activity happens on Ethereum and Arbitrum where liquidity is deepest.
          </p>
        </section>

        {/* Section 7: Building a Flash Loan */}
        <section id="building" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: '#e6edf3' }}>
            Building a Flash Loan: Code Walkthrough
          </h2>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Here&apos;s a conceptual walkthrough of implementing an Aave flash loan arbitrage bot in Solidity:
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            Step 1: Contract Setup
          </h3>
          <pre style={{
            backgroundColor: '#0d1117',
            border: '1px solid #30363d',
            borderRadius: '0.5rem',
            padding: '1rem',
            overflow: 'auto',
            marginBottom: '1rem',
            fontSize: '0.85rem',
            color: '#79c0ff'
          }}>
{`pragma solidity ^0.8.0;

import {IFlashLoanReceiver} from "@aave/core-v3/interfaces/IFlashLoanReceiver.sol";
import {IPool} from "@aave/core-v3/interfaces/IPool.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract FlashLoanArbitrage is IFlashLoanReceiver {
  address public immutable pool;
  address public immutable owner;

  constructor(address _pool) {
    pool = _pool;
    owner = msg.sender;
  }`}
          </pre>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            Step 2: Initiate Flash Loan
          </h3>
          <pre style={{
            backgroundColor: '#0d1117',
            border: '1px solid #30363d',
            borderRadius: '0.5rem',
            padding: '1rem',
            overflow: 'auto',
            marginBottom: '1rem',
            fontSize: '0.85rem',
            color: '#79c0ff'
          }}>
{`function executeArbitrage(
  address asset,
  uint256 amount
) external onlyOwner {
  address receiverAddress = address(this);

  // Call flashLoan on Aave pool
  IPool(pool).flashLoan(
    receiverAddress,
    asset,           // Token to borrow
    amount,          // Amount
    abi.encode()     // Params (empty in this example)
  );
}`}
          </pre>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            Step 3: Implement Callback
          </h3>
          <pre style={{
            backgroundColor: '#0d1117',
            border: '1px solid #30363d',
            borderRadius: '0.5rem',
            padding: '1rem',
            overflow: 'auto',
            marginBottom: '1rem',
            fontSize: '0.85rem',
            color: '#79c0ff'
          }}>
{`function executeOperation(
  address asset,
  uint256 amount,
  uint256 premium,
  address initiator,
  bytes calldata params
) external override returns (bytes32) {
  // Now we have \`amount\` of \`asset\`

  // Step 1: Swap on DEX A (buy at lower price)
  // pseudocode: swapOnUniswap(asset, amount)

  // Step 2: Swap on DEX B (sell at higher price)
  // pseudocode: swapOnCurve(asset, profit)

  // Step 3: Calculate repayment
  uint256 amountOwed = amount + premium;

  // Step 4: Approve Aave to pull repayment
  IERC20(asset).approve(address(pool), amountOwed);

  // Transaction reverts here if we don't have amountOwed
  return keccak256("ERC3156FlashBorrower.onFlashLoan");
}`}
          </pre>

          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            <strong>Key Points:</strong>
          </p>
          <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', color: '#e6edf3', lineHeight: '1.8' }}>
            <li>The callback function <strong>must return the correct bytes32 magic value</strong> or the transaction reverts.</li>
            <li>You have the full amount at the start of <code style={{ color: '#79c0ff' }}>executeOperation()</code>.</li>
            <li>By the end, you must have approved the lender to take <code style={{ color: '#79c0ff' }}>amount + premium</code>.</li>
            <li>Any failure between steps causes a revert, locking nothing and leaving no debt.</li>
          </ul>
        </section>

        {/* Section 8: Flash Loans Across Chains */}
        <section id="chains" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: '#e6edf3' }}>
            Flash Loans Across Chains
          </h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Flash loans are available on multiple blockchains, with varying liquidity and providers:
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            Ethereum
          </h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Largest liquidity. Aave, dYdX v3, Balancer all active. Most flash loan activity happens here due to TVL and volume. Gas costs are higher but justified by opportunity size.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            Arbitrum
          </h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Growing flash loan activity. Aave, Balancer available. Lower gas costs (~$0.01–$0.10) make small arbitrage opportunities viable. Popular for cross-exchange flash loan arbitrage.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            Base
          </h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Aave recently deployed here. Increasingly used for flash loans as liquidity grows. Ultra-low gas costs enable very small arbitrage spreads to be profitable.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            Optimism &amp; Polygon
          </h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Aave and Balancer available. Lower liquidity than Ethereum or Arbitrum, so fewer arbitrage opportunities. Still viable for specific pairs with deep liquidity.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#e6edf3' }}>
            Solana (Equivalent Mechanisms)
          </h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Solana doesn&apos;t have traditional flash loans because it processes transactions sequentially (not atomically within a block). However, Solana has atomic, composable swaps via DEXes like Marinade and Jupiter Aggregator, which achieve similar capital efficiency. Flash loan equivalents on Solana use Seahorse or Anchor frameworks to compose multiple instructions atomically.
          </p>
        </section>

        {/* Section 9: Risks & Ethical Considerations */}
        <section id="risks" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: '#e6edf3' }}>
            Risks &amp; Ethical Considerations
          </h2>

          <div style={{
            backgroundColor: '#7d3c29',
            border: '1px solid #f85149',
            borderLeft: '4px solid #f85149',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#f85149' }}>
              Risk: Execution Failure
            </h3>
            <p style={{ color: '#e6edf3', margin: 0 }}>
              If your arbitrage strategy doesn&apos;t execute as planned (price moves, slippage, insufficient liquidity), the entire transaction reverts. You lose gas fees but avoid debt. However, gas costs can quickly add up if your strategy consistently fails.
            </p>
          </div>

          <div style={{
            backgroundColor: '#7d3c29',
            border: '1px solid #f85149',
            borderLeft: '4px solid #f85149',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#f85149' }}>
              Risk: Smart Contract Bugs
            </h3>
            <p style={{ color: '#e6edf3', margin: 0 }}>
              A single bug in your callback logic could drain all loaned funds. Always audit your code. Even a missing approve call or incorrect swap calculation can result in total loss.
            </p>
          </div>

          <div style={{
            backgroundColor: '#7d3c29',
            border: '1px solid #f85149',
            borderLeft: '4px solid #f85149',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#f85149' }}>
              Risk: Front-Running &amp; MEV
            </h3>
            <p style={{ color: '#e6edf3', margin: 0 }}>
              Miners or MEV bots can see your pending flash loan transaction and front-run it, capturing the arbitrage opportunity before you. Consider using MEV-resistant pools (MEV-resistant MEV protection via Flashbots, Dark Pools, or private mempools).
            </p>
          </div>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            Ethical Considerations
          </h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Flash loans are legitimate tools but can be weaponized. Consider:
          </p>
          <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#e6edf3', lineHeight: '1.8' }}>
            <li><strong>Market Impact:</strong> Large flash loan operations can move prices for other traders, potentially harming them.</li>
            <li><strong>Protocol Exploitation:</strong> Using flash loans to attack protocols with weak oracles or guard rails is unethical and often illegal.</li>
            <li><strong>Legitimate Use:</strong> Arbitrage, collateral swaps, and self-liquidation are fair and beneficial for markets.</li>
            <li><strong>Regulatory Risk:</strong> Flash loan attacks may violate securities laws or anti-fraud rules depending on jurisdiction.</li>
          </ul>
        </section>

        {/* Section 10: Flash Loans in 2026 */}
        <section id="2026-developments" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: '#e6edf3' }}>
            Flash Loans in 2026: Emerging Developments
          </h2>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            Uniswap V4 Hooks Revolution
          </h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Uniswap V4 introduced hooks—custom code executed at specific points in the swap lifecycle. This enables <strong>in-swap flash loans</strong>: borrowing within a DEX swap and repaying after the swap settles. By 2026, hooks are becoming the dominant flash loan paradigm, integrating flash loans directly into swap execution rather than requiring external arbitrage contracts.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            Account Abstraction Integration
          </h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Account abstraction (AA) enables smart contract wallets with custom transaction logic. AA allows flash loans to be packaged as single &quot;user operations&quot;, making flash loan arbitrage accessible to non-technical users via wallet interfaces. Flash loans become a standard DeFi primitive rather than a specialized tool.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            Cross-Chain Flash Loans
          </h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            As bridges improve, cross-chain flash loans become feasible. Borrow on Ethereum, execute on Arbitrum, repay on Polygon—all within one atomic unit. Projects like Aave and Balancer are exploring this, though it remains technically challenging.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            MEV-Resistant Flash Loans
          </h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Flashbots Protect and encrypted mempools (like Shutter Network) are making flash loan execution more resistant to front-running. By 2026, MEV-aware flash loan strategies are becoming standard to maximize profitability.
          </p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            Regulatory Scrutiny
          </h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: '#e6edf3' }}>
            Regulators are beginning to scrutinize flash loan attacks as potential market manipulation. By 2026, expect compliance frameworks around flash loan usage, particularly for institutional participants. Some protocols may require KYC for large flash loans.
          </p>
        </section>

        {/* Section 11: FAQ */}
        <section id="faq" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: '#e6edf3' }}>
            Frequently Asked Questions
          </h2>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#58a6ff' }}>
              Q: Can I make unlimited profit from flash loans?
            </h3>
            <p style={{ lineHeight: '1.6', color: '#e6edf3' }}>
              No. Profits are limited by arbitrage spreads and yield opportunities. If a spread is &lt;0.09% (Aave fee), you lose money. In 2026, many spreads are tighter due to bot competition, making consistent profit difficult.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#58a6ff' }}>
              Q: What happens if my arbitrage fails mid-transaction?
            </h3>
            <p style={{ lineHeight: '1.6', color: '#e6edf3' }}>
              The entire transaction reverts. You lose only gas fees (not the loan amount). This is the beauty of atomicity—no debt persists.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#58a6ff' }}>
              Q: Is using flash loans legal?
            </h3>
            <p style={{ lineHeight: '1.6', color: '#e6edf3' }}>
              Legitimate use (arbitrage, collateral swaps) is legal. Attacking protocols with flash loans may constitute fraud or market manipulation and could violate securities laws. Consult legal counsel before deploying flash loan strategies at scale.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#58a6ff' }}>
              Q: Why would I use flash loans instead of my own capital?
            </h3>
            <p style={{ lineHeight: '1.6', color: '#e6edf3' }}>
              Flash loans enable capital efficiency: arbitrage a $10M spread with $0 capital. Your own capital remains available for other opportunities. Flash loans also provide leverage without collateral risk (transaction fails = revert, no liquidation).
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#58a6ff' }}>
              Q: Can I use flash loans on Solana?
            </h3>
            <p style={{ lineHeight: '1.6', color: '#e6edf3' }}>
              Solana doesn&apos;t have traditional flash loans due to sequential processing. However, Solana DEXes like Jupiter offer atomic swaps and composable instructions that achieve similar capital efficiency.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#58a6ff' }}>
              Q: How do I avoid MEV/front-running on my flash loan?
            </h3>
            <p style={{ lineHeight: '1.6', color: '#e6edf3' }}>
              Use private mempools (Flashbots Protect, MEV-Hide), encrypted mempools (Shutter Network), or MEV-minimized chains (Polygon, Arbitrum with MEV-aware bundlers). Uniswap V4 hooks also allow custom execution logic resistant to front-running.
            </p>
          </div>
        </section>

        {/* Footer/Conclusion */}
        <div style={{
          backgroundColor: '#161b22',
          border: '1px solid #30363d',
          borderRadius: '0.5rem',
          padding: '1.5rem',
          marginBottom: '2rem',
          marginTop: '2rem'
        }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#e6edf3' }}>
            Summary
          </h3>
          <p style={{ lineHeight: '1.6', color: '#e6edf3', marginBottom: '1rem' }}>
            Flash loans are one of DeFi&apos;s most powerful primitives, enabling uncollateralized capital deployment within atomic transactions. They power arbitrage, enable protocol arbitrage, and have become essential infrastructure for DeFi traders. However, they also pose security risks if protocols don&apos;t defend against oracle manipulation.
          </p>
          <p style={{ lineHeight: '1.6', color: '#e6edf3', marginBottom: '1rem' }}>
            In 2026, flash loans are evolving: Uniswap V4 hooks integrate them into DEXes, account abstraction makes them accessible, and regulatory frameworks are emerging. Whether you&apos;re building a flash loan bot or defending a protocol against flash loan attacks, understanding the mechanics is essential.
          </p>
          <p style={{ lineHeight: '1.6', color: '#8b949e' }}>
            Start small, test extensively on testnets, audit your code, and always understand the risks before deploying flash loan strategies on mainnet.
          </p>
        </div>

        {/* Navigation Links */}
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '2rem',
          paddingTop: '2rem',
          borderTop: '1px solid #30363d'
        }}>
          <a href="/learn" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: '0.875rem' }}>
            ← Back to Learn
          </a>
          <a href="#what-are-flash-loans" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: '0.875rem' }}>
            Top ↑
          </a>
        </nav>
      </div>
    </div>
  );
}
