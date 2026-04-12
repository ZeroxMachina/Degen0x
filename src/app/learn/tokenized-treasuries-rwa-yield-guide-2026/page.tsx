import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title:
    "Tokenized Treasuries Guide 2026: RWA Yield, BUIDL, USDY & More | degen0x",
  description:
    "Complete guide to tokenized U.S. Treasuries in 2026. Compare BlackRock BUIDL, Ondo USDY, Circle USYC yields. Learn how to earn 4-5% APY on-chain with government bonds.",
};

export default function TokenizedTreasuriesGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      {/* Header Section */}
      <div className="mb-8">
        <div className="mb-4 flex flex-wrap gap-2">
          <span
            className="inline-block px-3 py-1 text-xs font-semibold rounded-full"
            style={{
              background: "rgba(168, 85, 247, 0.1)",
              color: "#a855f7",
              border: "1px solid rgba(168, 85, 247, 0.3)",
            }}
          >
            RWA
          </span>
          <span
            className="inline-block px-3 py-1 text-xs font-semibold rounded-full"
            style={{
              background: "rgba(34, 197, 94, 0.1)",
              color: "#22c55e",
              border: "1px solid rgba(34, 197, 94, 0.3)",
            }}
          >
            Yield
          </span>
          <span
            className="inline-block px-3 py-1 text-xs font-semibold rounded-full"
            style={{
              background: "rgba(34, 197, 94, 0.1)",
              color: "#22c55e",
              border: "1px solid rgba(34, 197, 94, 0.3)",
            }}
          >
            Updated March 2026
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-4">
          Tokenized Treasuries & RWA Yield Guide 2026
        </h1>
        <p
          className="text-lg"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Everything you need to know about earning 4-5% APY on-chain with
          government-backed real-world assets, featuring BlackRock BUIDL, Ondo
          USDY, and Circle USYC.
        </p>
      </div>

      {/* Key Stats Card */}
      <div
        className="glass mb-8 p-6"
        style={{
          background: "var(--glass-bg)",
          border: "1px solid var(--color-border)",
          borderRadius: 12,
          borderLeft: "4px solid #a855f7",
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div
              className="text-sm font-medium mb-1"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Market Size
            </div>
            <div className="text-2xl font-bold">$5.8B+</div>
          </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={6}
          section="learn"
        />

          <div>
            <div
              className="text-sm font-medium mb-1"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Total RWA On-Chain
            </div>
            <div className="text-2xl font-bold">$12B+</div>
          </div>
          <div>
            <div
              className="text-sm font-medium mb-1"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Average Yield
            </div>
            <div className="text-2xl font-bold">4.2-5.5%</div>
          </div>
          <div>
            <div
              className="text-sm font-medium mb-1"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Stablecoin Market
            </div>
            <div className="text-2xl font-bold">$311B</div>
          </div>
        </div>
      </div>

      {/* What Are Tokenized Treasuries */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What Are Tokenized Treasuries?</h2>
        <p className="mb-4" style={{ color: "var(--color-text-secondary)" }}>
          Tokenized treasuries are blockchain-based representations of U.S.
          government bonds and Treasury securities. They give you exposure to
          real-world assets—specifically, debt obligations of the U.S.
          government—directly on-chain. Instead of buying physical Treasury
          bonds through a traditional broker, you purchase digital tokens that
          represent fractional ownership of these government-backed securities.
        </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            This is one of those topics where surface-level understanding is dangerous. We've seen traders lose significant capital from misconceptions covered in this guide.
          </p>
        </div>
        <p className="mb-4" style={{ color: "var(--color-text-secondary)" }}>
          Each token is backed 1:1 (or close to it) by actual U.S. Treasury
          holdings in custody, managed by regulated custodians and issuers. When
          the underlying Treasury pays interest, that yield flows to token
          holders. This means you get the safety and predictability of
          government bonds—the safest debt instruments on Earth—with the
          composability, liquidity, and speed of blockchain.
        </p>
        <p style={{ color: "var(--color-text-secondary)" }}>
          The tokenized Treasury market has exploded since 2024, growing from
          hundreds of millions to over $5.8 billion in March 2026. Major players
          like BlackRock, Franklin Templeton, Circle, and Ondo Finance now offer
          tokenized Treasury products, making it easier than ever for crypto
          participants to access real-world yield without leaving your wallet.
        </p>
      </section>

      {/* Why It Matters */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          Why Tokenized Treasuries Matter in 2026
        </h2>

        <div className="space-y-4 mb-6">
          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h3 className="font-semibold mb-2">Risk-Free Yield</h3>
            <p style={{ color: "var(--color-text-secondary)" }}>
              U.S. Treasuries are backed by the full faith and credit of the
              U.S. government. They&apos;re the safest yield available on-chain.
              No smart contract risk. No counterparty risk (the U.S. government
              won&apos;t default). Just clean, low-risk returns of 4-5% APY.
            </p>
          </div>

          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h3 className="font-semibold mb-2">Institutional Adoption</h3>
            <p style={{ color: "var(--color-text-secondary)" }}>
              When BlackRock and Franklin Templeton move into tokenized RWAs, you
              know crypto is becoming mainstream. These products are regulatory
              compliant and backed by Fortune 500 companies. That&apos;s a game changer
              for legitimacy.
            </p>
          </div>

          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h3 className="font-semibold mb-2">Better Than Stablecoins</h3>
            <p style={{ color: "var(--color-text-secondary)" }}>
              Unlike stablecoins (which just hold dollars with minimal yield),
              tokenized Treasuries give you actual interest. You&apos;re getting paid
              to participate in on-chain finance, not just staying stable.
            </p>
          </div>

          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h3 className="font-semibold mb-2">Composability & Liquidity</h3>
            <p style={{ color: "var(--color-text-secondary)" }}>
              Your tokenized Treasuries can be used in DeFi protocols, lent out
              for additional yield, or traded instantly. You get Treasury
              safety with blockchain flexibility. That&apos;s not possible with
              traditional bonds.
            </p>
          </div>
        </div>
      </section>

      {/* Top Products Comparison */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          Top Tokenized Treasury Products Compared
        </h2>

        <div className="overflow-x-auto mb-6">
          <table
            className="w-full border-collapse text-sm"
            style={{ borderCollapse: "collapse" }}
          >
            <thead>
              <tr style={{ borderBottom: "2px solid var(--color-border)" }}>
                <th
                  className="text-left p-3 font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  Product
                </th>
                <th
                  className="text-left p-3 font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  Issuer
                </th>
                <th
                  className="text-left p-3 font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  Underlying
                </th>
                <th
                  className="text-left p-3 font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  Yield
                </th>
                <th
                  className="text-left p-3 font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  Min Investment
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                style={{
                  borderBottom: "1px solid var(--color-border)",
                  background: "rgba(255, 255, 255, 0.02)",
                }}
              >
                <td className="p-3 font-medium">BUIDL</td>
                <td className="p-3">BlackRock</td>
                <td className="p-3">U.S. Treasuries</td>
                <td className="p-3">~5.0%</td>
                <td className="p-3">Varies</td>
              </tr>
              <tr
                style={{
                  borderBottom: "1px solid var(--color-border)",
                  background: "rgba(255, 255, 255, 0.02)",
                }}
              >
                <td className="p-3 font-medium">USYC</td>
                <td className="p-3">Circle</td>
                <td className="p-3">Short-duration Treasuries</td>
                <td className="p-3">~4.8%</td>
                <td className="p-3">$100</td>
              </tr>
              <tr
                style={{
                  borderBottom: "1px solid var(--color-border)",
                  background: "rgba(255, 255, 255, 0.02)",
                }}
              >
                <td className="p-3 font-medium">USDY</td>
                <td className="p-3">Ondo Finance</td>
                <td className="p-3">U.S. Treasuries</td>
                <td className="p-3">~4.8%</td>
                <td className="p-3">$100</td>
              </tr>
              <tr
                style={{
                  borderBottom: "1px solid var(--color-border)",
                  background: "rgba(255, 255, 255, 0.02)",
                }}
              >
                <td className="p-3 font-medium">OUSG</td>
                <td className="p-3">Ondo Finance</td>
                <td className="p-3">Short-term Treasuries</td>
                <td className="p-3">~4.2%</td>
                <td className="p-3">$100</td>
              </tr>
              <tr
                style={{
                  borderBottom: "1px solid var(--color-border)",
                  background: "rgba(255, 255, 255, 0.02)",
                }}
              >
                <td className="p-3 font-medium">BENJI</td>
                <td className="p-3">Franklin Templeton</td>
                <td className="p-3">Government Money Fund</td>
                <td className="p-3">~4.5%</td>
                <td className="p-3">Varies</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p
          className="text-sm"
          style={{ color: "var(--color-text-secondary)" }}
        >
          <strong>Note:</strong> Yields fluctuate based on underlying Treasury
          rates. Data as of March 2026. Minimum investments vary by jurisdiction
          and token chain availability.
        </p>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">How Tokenized Treasuries Work</h2>

        <div className="space-y-4">
          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold"
                style={{ background: "rgba(168, 85, 247, 0.2)", color: "#a855f7" }}
              >
                1
              </div>
              <div>
                <h3 className="font-semibold mb-2">Issue & Custody</h3>
                <p style={{ color: "var(--color-text-secondary)" }}>
                  The issuer (BlackRock, Ondo, Circle, etc.) purchases actual
                  U.S. Treasury securities and places them in custody with a
                  regulated custodian. For every Treasury held, they mint an
                  equivalent amount of tokens on-chain. You own a digital claim
                  on the Treasury.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold"
                style={{ background: "rgba(168, 85, 247, 0.2)", color: "#a855f7" }}
              >
                2
              </div>
              <div>
                <h3 className="font-semibold mb-2">Yield Accrual</h3>
                <p style={{ color: "var(--color-text-secondary)" }}>
                  When the Treasury pays interest (every 6 months for most
                  bonds), that yield gets distributed to token holders. You
                  either earn it directly in your wallet or it compounds if the
                  protocol auto-reinvests. The token itself grows in value or
                  distributes rewards—it depends on the specific product design.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold"
                style={{ background: "rgba(168, 85, 247, 0.2)", color: "#a855f7" }}
              >
                3
              </div>
              <div>
                <h3 className="font-semibold mb-2">Trade or Redeem</h3>
                <p style={{ color: "var(--color-text-secondary)" }}>
                  You can sell your tokens on the secondary market (DEXs,
                  CEXs) or redeem them directly with the issuer for underlying
                  cash value. Redemptions are typically processed within
                  business days. Unlike traditional Treasuries, you have
                  instant liquidity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risks */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Risks to Consider</h2>

        <div className="space-y-4">
          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h3 className="font-semibold mb-2">Smart Contract Risk</h3>
            <p style={{ color: "var(--color-text-secondary)" }}>
              The token contract itself could have bugs or vulnerabilities. Even
              though these are issued by reputable names, audits don&apos;t catch
              everything. Start small if you&apos;re new to a protocol.
            </p>
          </div>

          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h3 className="font-semibold mb-2">Custody & Operational Risk</h3>
            <p style={{ color: "var(--color-text-secondary)" }}>
              If the custodian fails or gets hacked, the underlying Treasuries
              could be at risk. The issuer is responsible for choosing reliable
              custodians (all major ones use institutional-grade services), but
              it&apos;s not zero risk. It&apos;s just lower than DeFi smart contract risk.
            </p>
          </div>

          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h3 className="font-semibold mb-2">Regulatory Risk</h3>
            <p style={{ color: "var(--color-text-secondary)" }}>
              The regulatory landscape for tokenized RWAs is still evolving.
              New rules could affect yields, redemption options, or which
              tokens are available to you. Stick with issuers who are proactive
              about compliance (BlackRock, Franklin Templeton, registered
              platforms).
            </p>
          </div>

          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h3 className="font-semibold mb-2">Liquidity & Secondary Market Risk</h3>
            <p style={{ color: "var(--color-text-secondary)" }}>
              Although most tokenized Treasuries trade on major platforms, the
              secondary market could be thinner than you expect. You might face
              slippage when selling large amounts. Redemption directly from the
              issuer is safer but slower.
            </p>
          </div>

          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h3 className="font-semibold mb-2">Interest Rate Risk</h3>
            <p style={{ color: "var(--color-text-secondary)" }}>
              If interest rates rise, existing Treasury prices fall. If you want
              to sell before maturity, you&apos;ll get less than you paid. However,
              if you hold to maturity, you get full face value back regardless.
            </p>
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">How to Buy Tokenized Treasuries</h2>

        <div className="space-y-4 mb-6">
          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h3 className="font-semibold mb-3">Step 1: Choose Your Product</h3>
            <p style={{ color: "var(--color-text-secondary)" }}>
              Decide based on your goals. Want maximum safety and institutional
              credibility? BUIDL. Want lower minimum investment? USDY or USYC.
              Want short-duration exposure? OUSG. Each product is available on
              different chains and platforms.
            </p>
          </div>

          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h3 className="font-semibold mb-3">Step 2: Set Up Your Wallet</h3>
            <p style={{ color: "var(--color-text-secondary)" }}>
              Most tokenized Treasuries live on Ethereum, Polygon, or other EVM
              chains. Get a Web3 wallet (MetaMask, Ledger, Trezor, etc.), fund
              it with stablecoins or crypto, and bridge to the right chain if needed.
            </p>
          </div>

          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h3 className="font-semibold mb-3">Step 3: Complete KYC (If Required)</h3>
            <p style={{ color: "var(--color-text-secondary)" }}>
              Many tokenized Treasury platforms (especially BlackRock BUIDL)
              require identity verification due to regulatory requirements. Use
              the issuer&apos;s official portal or a registered partner like Coinbase.
            </p>
          </div>

          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h3 className="font-semibold mb-3">Step 4: Buy via DEX or Issuer Portal</h3>
            <p style={{ color: "var(--color-text-secondary)" }}>
              <strong>Direct purchase:</strong> Use the issuer&apos;s web portal or
              platform to mint/purchase tokens directly.
            </p>
            <p
              style={{ color: "var(--color-text-secondary)" }}
              className="mt-2"
            >
              <strong>Secondary market:</strong> Trade on Uniswap, Curve, Coinbase,
              or other CEXs/DEXs. Check for liquidity pools before trading large amounts.
            </p>
          </div>

          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h3 className="font-semibold mb-3">Step 5: Hold & Collect Yield</h3>
            <p style={{ color: "var(--color-text-secondary)" }}>
              Once you own tokens, sit back and earn. Yield accrues
              automatically. You can hold in your wallet, stake them in DeFi
              protocols for additional returns, or use them as collateral.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          Tokenized Treasuries vs Traditional Bonds vs Stablecoins
        </h2>

        <div className="overflow-x-auto">
          <table
            className="w-full border-collapse text-sm"
            style={{ borderCollapse: "collapse" }}
          >
            <thead>
              <tr style={{ borderBottom: "2px solid var(--color-border)" }}>
                <th
                  className="text-left p-3 font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  Feature
                </th>
                <th
                  className="text-left p-3 font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  Tokenized Treasuries
                </th>
                <th
                  className="text-left p-3 font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  Traditional Bonds
                </th>
                <th
                  className="text-left p-3 font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  Stablecoins
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                <td className="p-3 font-medium">Safety</td>
                <td className="p-3">Very High</td>
                <td className="p-3">Very High</td>
                <td className="p-3">Medium</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                <td className="p-3 font-medium">Yield</td>
                <td className="p-3">4-5% APY</td>
                <td className="p-3">4-5% APY</td>
                <td className="p-3">0-2% APY</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                <td className="p-3 font-medium">Liquidity</td>
                <td className="p-3">Instant (24/7)</td>
                <td className="p-3">Low (business hours)</td>
                <td className="p-3">Instant</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                <td className="p-3 font-medium">Min Investment</td>
                <td className="p-3">$100-$1,000</td>
                <td className="p-3">$100-$10,000</td>
                <td className="p-3">$1</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                <td className="p-3 font-medium">On-Chain?</td>
                <td className="p-3">Yes</td>
                <td className="p-3">No</td>
                <td className="p-3">Yes</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                <td className="p-3 font-medium">DeFi Composable?</td>
                <td className="p-3">Yes</td>
                <td className="p-3">No</td>
                <td className="p-3">Limited</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                <td className="p-3 font-medium">Interest Rate Risk</td>
                <td className="p-3">Yes</td>
                <td className="p-3">Yes</td>
                <td className="p-3">No</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h3 className="font-semibold mb-2">
              Can I use tokenized Treasuries in DeFi?
            </h3>
            <p style={{ color: "var(--color-text-secondary)" }}>
              Yes. Many DeFi protocols are building support for tokenized
              Treasuries. You can lend them out for additional yield, use them as
              collateral, or provide liquidity in trading pairs. However, not all
              protocols support them yet—check availability before depositing.
            </p>
          </div>

          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h3 className="font-semibold mb-2">
              What if I need to sell before the bond matures?
            </h3>
            <p style={{ color: "var(--color-text-secondary)" }}>
              You can sell on the secondary market anytime. If interest rates
              have risen since you bought, your token might be worth less than
              face value. But you can exit immediately without waiting for
              maturity. Alternatively, redeem directly with the issuer, though
              this takes a few business days.
            </p>
          </div>

          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h3 className="font-semibold mb-2">
              How is yield paid? Daily, monthly, or at maturity?
            </h3>
            <p style={{ color: "var(--color-text-secondary)" }}>
              It varies by product. Some tokens accrue yield continuously (the
              token&apos;s value grows daily). Others pay yield in batches or at
              specific intervals. Check the specific product documentation. Most
              follow the underlying Treasury&apos;s coupon schedule (every 6 months).
            </p>
          </div>

          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h3 className="font-semibold mb-2">
              Which tokenized Treasury product should I choose?
            </h3>
            <p style={{ color: "var(--color-text-secondary)" }}>
              BlackRock BUIDL offers institutional credibility and scale (~$2B
              AUM). Circle USYC and Ondo USDY offer lower minimums and better
              accessibility. Franklin Templeton BENJI provides a government money
              fund alternative. Consider factors: yield, your budget, chain
              preference, and liquidity needs.
            </p>
          </div>

          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h3 className="font-semibold mb-2">
              Are there tax implications for tokenized Treasuries?
            </h3>
            <p style={{ color: "var(--color-text-secondary)" }}>
              Yes. Like traditional Treasuries, U.S. residents owe federal income
              tax on yield (ordinary income rates). State income tax may apply
              too. Consult a tax professional. The treatment depends on your
              jurisdiction and the specific token structure.
            </p>
          </div>

          <div
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 20,
            }}
          >
            <h3 className="font-semibold mb-2">
              What&apos;s the difference between USDY, OUSG, and USYC?
            </h3>
            <p style={{ color: "var(--color-text-secondary)" }}>
              <strong>USDY</strong> (Ondo) holds longer-duration Treasuries for
              ~4.8% yield. <strong>OUSG</strong> (Ondo) focuses on short-term
              Treasuries for ~4.2% yield, lower volatility. <strong>USYC</strong> (Circle)
              holds short-duration Treasuries for ~4.8% yield. Choose based on
              your risk tolerance and yield preference.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-12">
        <div
          style={{
            background: "var(--glass-bg)",
            border: "1px solid var(--color-border)",
            borderRadius: 12,
            padding: 20,
            borderLeft: "4px solid #22c55e",
          }}
        >
          <h2 className="text-xl font-bold mb-4">Key Takeaways</h2>
          <ul style={{ color: "var(--color-text-secondary)" }}>
            <li className="mb-3">
              ✓ Tokenized Treasuries are on-chain representations of U.S.
              government bonds, offering 4-5% APY with minimal risk.
            </li>
            <li className="mb-3">
              ✓ The market has grown to $5.8B+ (March 2026) with major
              institutional players like BlackRock, Franklin Templeton, and Circle.
            </li>
            <li className="mb-3">
              ✓ They offer better liquidity, composability, and accessibility
              than traditional Treasuries while maintaining the same safety
              profile.
            </li>
            <li className="mb-3">
              ✓ Key risks include smart contract risk, custody risk, regulatory
              uncertainty, and interest rate risk—though these are generally low
              compared to DeFi.
            </li>
            <li className="mb-3">
              ✓ You can buy via issuer portals or secondary markets (DEXs, CEXs),
              and use them in DeFi for additional yield stacking.
            </li>
            <li>
              ✓ Best suited for conservative crypto investors seeking
              government-backed income without leaving on-chain finance.
            </li>
          </ul>
        </div>
      </section>

      {/* Related Resources */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Explore More</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/learn/stablecoins-guide">
            <div
              style={{
                background: "var(--glass-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: 12,
                padding: 20,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.5)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <h3 className="font-semibold mb-2">Stablecoins Guide</h3>
              <p
                className="text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Understand USDC, USDT, PYUSD, and the broader stablecoin
                ecosystem.
              </p>
            </div>
          </Link>

          <Link href="/learn/defi-yield-farming-guide">
            <div
              style={{
                background: "var(--glass-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: 12,
                padding: 20,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.5)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <h3 className="font-semibold mb-2">DeFi Yield Farming Guide</h3>
              <p
                className="text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Learn how to earn yield through liquidity pools and lending
                protocols.
              </p>
            </div>
          </Link>

          <Link href="/learn/staking-guide">
            <div
              style={{
                background: "var(--glass-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: 12,
                padding: 20,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.5)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <h3 className="font-semibold mb-2">Staking Guide</h3>
              <p
                className="text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Discover how to earn rewards by staking crypto on PoS networks.
              </p>
            </div>
          </Link>

          <Link href="/tools/dca-calculator">
            <div
              style={{
                background: "var(--glass-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: 12,
                padding: 20,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.5)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <h3 className="font-semibold mb-2">DCA Calculator</h3>
              <p
                className="text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Plan your dollar-cost averaging strategy for long-term investing.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pt-8 border-t" style={{ borderColor: "var(--color-border)" }}>
        <div
          style={{
            background: "rgba(59, 130, 246, 0.05)",
            border: "1px solid rgba(59, 130, 246, 0.2)",
            borderRadius: 12,
            padding: 16,
          }}
        >
          <p
            className="text-xs"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <strong>Disclaimer:</strong> This guide is educational only and not
            financial advice. Tokenized Treasuries are still an evolving asset
            class with regulatory uncertainty. Do your own research, consult a
            financial advisor, and only invest what you can afford to lose. The
            cryptocurrency and RWA markets are volatile. Historical yields are
            not guarantees of future performance. Past performance is not
            indicative of future results.
          </p>
        </div>
      </section>
    
        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      </article>
  );
}
