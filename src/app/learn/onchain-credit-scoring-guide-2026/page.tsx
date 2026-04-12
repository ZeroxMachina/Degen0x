import { Metadata } from "next";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from '@/lib/structured-data';
import StructuredData from '@/components/StructuredData';
import Breadcrumb from '@/components/Breadcrumb';
import BackToTop from '@/components/BackToTop';
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


const S = {
  bg: "var(--color-bg, #0d1117)",
  surface: "var(--color-surface, #161b22)",
  border: "var(--glass-border, #30363d)",
  text: "var(--color-text, #e6edf3)",
  text2: "var(--color-text-secondary, #8b949e)",
  primary: "#8b5cf6",
  blue: "#58a6ff",
  green: "#3fb950",
  orange: "#f0883e",
  yellow: "#d29922",
};

export const metadata: Metadata = {
  title: "Onchain Credit Scoring Guide 2026 — DeFi Credit Ratings Explained | degen0x",
  description: "How onchain credit scoring works in 2026. Compare Credora, Spectral & Cred Protocol. Learn how DeFi credit ratings enable undercollateralized lending and unlock trillions in capital.",
  keywords: "onchain credit scoring, DeFi lending, Credora, Spectral, Cred Protocol, undercollateralized lending, credit ratings, RedStone Stack, DeFi credit risk",
  openGraph: {
    type: "article",
    title: "Onchain Credit Scoring Guide 2026 — DeFi Credit Ratings Explained",
    description: "How onchain credit scoring works in 2026. Compare Credora, Spectral & Cred Protocol. Learn how DeFi credit ratings enable undercollateralized lending and unlock trillions in capital.",
    publishedTime: "2026-03-25T00:00:00Z",
    authors: ["degen0x"],
    url: "https://degen0x.com/learn/onchain-credit-scoring-guide-2026",
    images: [{ url: "https://degen0x.com/og-onchain-credit-scoring-guide-2026.svg", width: 1200, height: 630, alt: "Onchain Credit Scoring Guide 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Onchain Credit Scoring Guide 2026 — DeFi Credit Ratings Explained | degen0x",
    description: "How onchain credit scoring works in 2026. Compare Credora, Spectral & Cred Protocol. Learn how DeFi credit ratings enable undercollateralized lending and unlock trillions in capital.",
    images: ["https://degen0x.com/og-onchain-credit-scoring-guide-2026.svg"],
  },
};

const articleSchema = generateArticleSchema({
  headline: "Onchain Credit Scoring Guide 2026 — DeFi Credit Ratings Explained",
  description: "How onchain credit scoring works in 2026. Compare Credora, Spectral & Cred Protocol. Learn how DeFi credit ratings enable undercollateralized lending and unlock trillions in capital.",
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  author: "degen0x",
});

const faqSchema = generateFAQSchema([
  {
    question: "What is onchain credit scoring?",
    answer: "Onchain credit scoring evaluates wallet activity, DeFi interactions, and repayment history to generate a creditworthiness score. Unlike traditional credit, it's based entirely on transparent, verifiable blockchain data.",
  },
  {
    question: "How does onchain credit scoring enable undercollateralized lending?",
    answer: "Traditional DeFi requires 150%+ overcollateralization because there's no credit history. Onchain credit scores assess risk based on wallet behavior, allowing borrowers with strong credit ratings to access capital with lower collateral requirements.",
  },
  {
    question: "What are the main protocols doing onchain credit scoring?",
    answer: "The leading protocols are Credora (acquired by RedStone in Sept 2025), Spectral (MACRO scores 300-850), and Cred Protocol (real-time credit scoring). Each uses different methodologies but all leverage onchain data.",
  },
  {
    question: "How does Spectral's MACRO score work?",
    answer: "MACRO is Spectral's flagship credit score ranging from 300-850, similar to traditional credit scores. It evaluates DeFi transaction history, repayment patterns, and Non-Fungible Credits (NFCs) to determine creditworthiness.",
  },
  {
    question: "What is the RedStone Stack?",
    answer: "RedStone Stack is a unified intelligence layer that combines oracle data with credit risk assessment. It enables protocols to incorporate real-time pricing, credit ratings, and risk scores into lending decisions.",
  },
  {
    question: "What are privacy risks with onchain credit scoring?",
    answer: "Onchain credit requires transparency, but excessive data exposure could enable wallet targeting and surveillance. Zero-knowledge proofs are emerging as a solution to verify credit scores without revealing underlying wallet activity.",
  },
]);

const schema = combineSchemas([articleSchema, faqSchema]);

export default function OnchaincreditScoringGuide() {
  const readingTime = 12;

  return (
    <>
      <StructuredData schema={schema} />
      <article style={{ background: S.bg, color: S.text, minHeight: "100vh", paddingBottom: "4rem" }}>
        {/* Header */}
        <div style={{ borderBottom: `1px solid ${S.border}`, background: S.surface }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem 1.5rem" }}>
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Learn", href: "/learn" },
                { label: "Onchain Credit Scoring Guide 2026" },
              ]}
            />

            <div style={{ marginTop: "1.5rem", marginBottom: "1rem" }}>
              <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.35rem 0.75rem",
                    background: `${S.primary}20`,
                    border: `1px solid ${S.primary}`,
                    borderRadius: "0.375rem",
                    fontSize: "0.85rem",
                    color: S.primary,
                    fontWeight: "600",
                  }}
                >
                  DeFi
                </span>
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.35rem 0.75rem",
                    background: `${S.blue}20`,
                    border: `1px solid ${S.blue}`,
                    borderRadius: "0.375rem",
                    fontSize: "0.85rem",
                    color: S.blue,
                    fontWeight: "600",
                  }}
                >
                  Credit
                </span>
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.35rem 0.75rem",
                    background: `${S.orange}20`,
                    border: `1px solid ${S.orange}`,
                    borderRadius: "0.375rem",
                    fontSize: "0.85rem",
                    color: S.orange,
                    fontWeight: "600",
                  }}
                >
                  Intermediate
                </span>
              </div>
            </div>

            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                lineHeight: "1.2",
                marginBottom: "0.75rem",
              }}
            >
              Onchain Credit Scoring Guide 2026
            </h1>

            <p
              style={{
                fontSize: "1.25rem",
                color: S.text2,
                lineHeight: "1.6",
                marginBottom: "1rem",
              }}
            >
              How DeFi credit ratings enable undercollateralized lending and unlock trillions in capital
            </p>

            <p style={{ color: S.text2, fontSize: "0.9rem" }}>
              Updated March 25, 2026 · {readingTime} min read
            </p>
          </div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-25"
          updatedDate="2026-04-12"
          readingTime={6}
          section="learn"
        />


        {/* Main Content */}
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 1.5rem" }}>
          {/* Table of Contents */}
          <div
            style={{
              background: S.surface,
              border: `1px solid ${S.border}`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            <h2 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "1rem" }}>
              Table of Contents
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { text: "What Is Onchain Credit Scoring?", id: "what-is" },
                { text: "Why DeFi Needs Credit Scores", id: "why-needed" },
                { text: "How Onchain Credit Scoring Works", id: "how-works" },
                { text: "Key Protocols Compared", id: "protocols" },
                { text: "The RedStone Stack & Credit Intelligence", id: "redstone" },
                { text: "Use Cases & Real-World Applications", id: "use-cases" },
                { text: "Privacy & ZK Solutions", id: "privacy" },
                { text: "Risks & Challenges", id: "risks" },
                { text: "The Road Ahead", id: "future" },
                { text: "FAQ", id: "faq" },
              ].map((item) => (
                <li key={item.id} style={{ marginBottom: "0.5rem" }}>
                  <a
                    style={{ color: S.blue, textDecoration: "none" }}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 1 */}
          <section id="what-is" style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "1rem", color: S.primary }}>
              What Is Onchain Credit Scoring?
            </h2>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              Onchain credit scoring is a fundamental primitive that evaluates wallet activity, DeFi interactions, and repayment history to generate a creditworthiness score entirely from blockchain data. Unlike traditional credit bureaus that rely on bank records and payment history, onchain credit is transparent, cryptographically verifiable, and based on immutable transaction records.
            </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Understanding this concept is a prerequisite for making informed decisions in DeFi. Most losses in crypto come from misunderstanding the fundamentals.
          </p>
        </div>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              In essence, a protocol analyzes your wallet's behavior—how you trade, borrow, lend, repay, and interact with different DeFi protocols—to assign you a credit score. This score then becomes a signal of your creditworthiness that other protocols can use to determine lending terms, collateral requirements, and interest rates.
            </p>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              The beauty of onchain credit is that it's permissionless. Unlike TradFi where you need a bank relationship, anyone with a wallet can build a credit history simply by participating in DeFi. Your history is always available, never locked behind corporate databases.
            </p>
          </section>

          {/* Section 2 */}
          <section id="why-needed" style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "1rem", color: S.primary }}>
              Why DeFi Needs Credit Scores
            </h2>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              Here's the bottleneck: current DeFi lending requires 150% or higher overcollateralization. If you want to borrow $100, you need to deposit $150+ in collateral. This is economically inefficient and fundamentally different from traditional finance, where the TradFi credit market alone exceeds $12 trillion.
            </p>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              Why the massive overcollateralization? Because without credit history, protocols have no way to assess default risk. They're lending to unknown counterparties with no track record. The only solution is to require excessive collateral to cover potential losses.
            </p>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              Onchain credit scores solve this. By analyzing a wallet's history, protocols can assess risk. A wallet with a strong credit score—consistent repayments, long DeFi tenure, high-value interactions—becomes eligible for lower collateral requirements. A borrower with a 750+ credit score might only need 110% collateral instead of 150%.
            </p>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              This unlocks the path for the $12+ trillion TradFi credit market to flow onchain. As credit infrastructure matures, onchain markets can serve the same lending functions as traditional finance—with better capital efficiency and no intermediaries.
            </p>
          </section>

          {/* Section 3 */}
          <section id="how-works" style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "1rem", color: S.primary }}>
              How Onchain Credit Scoring Works
            </h2>

            <h3 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "0.75rem", marginTop: "1.5rem" }}>
              Data Sources
            </h3>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              Credit scoring protocols analyze multiple on-chain data streams:
            </p>
            <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem", color: S.text }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Transaction History</strong>: Volume, frequency, and patterns of token transfers
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>DeFi Participation</strong>: Lending/borrowing activity, liquidity provision, yield farming history
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Repayment Record</strong>: Whether loans were repaid on-time, partial defaults, liquidations
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Wallet Age & Tenure</strong>: How long the wallet has been active in DeFi
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Token Holdings</strong>: Portfolio composition and diversification
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Smart Contract Interactions</strong>: Which protocols the wallet interacts with and how frequently
              </li>
            </ul>

            <h3 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "0.75rem", marginTop: "1.5rem" }}>
              Scoring Models
            </h3>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              Different protocols use different methodologies, but they share common principles:
            </p>
            <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem", color: S.text }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Machine Learning Models</strong>: Spectral and others train ML models on historical DeFi data to predict default probability
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Weighted Scoring</strong>: Different factors (repayment history, protocol diversity, tenure) are weighted differently
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Real-Time Updates</strong>: Scores update as new transactions occur, reflecting current wallet health
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Decentralized Oracle Integration</strong>: RedStone and others combine credit scores with pricing data for holistic risk assessment
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="protocols" style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "1rem", color: S.primary }}>
              Key Protocols Compared
            </h2>
            <p style={{ lineHeight: "1.8", marginBottom: "1.5rem", color: S.text }}>
              The onchain credit space has crystallized around three major players. Here's how they compare:
            </p>

            <div
              style={{
                overflowX: "auto",
                marginBottom: "1.5rem",
                border: `1px solid ${S.border}`,
                borderRadius: "0.75rem",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.95rem",
                }}
              >
                <thead>
                  <tr style={{ borderBottom: `1px solid ${S.border}`, background: S.surface }}>
                    <th style={{ padding: "1rem", textAlign: "left", fontWeight: "600" }}>Protocol</th>
                    <th style={{ padding: "1rem", textAlign: "left", fontWeight: "600" }}>Score Range</th>
                    <th style={{ padding: "1rem", textAlign: "left", fontWeight: "600" }}>Methodology</th>
                    <th style={{ padding: "1rem", textAlign: "left", fontWeight: "600" }}>Key Feature</th>
                    <th style={{ padding: "1rem", textAlign: "left", fontWeight: "600" }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                    <td style={{ padding: "1rem", fontWeight: "600" }}>Credora</td>
                    <td style={{ padding: "1rem" }}>Variable</td>
                    <td style={{ padding: "1rem" }}>ML-based risk scoring</td>
                    <td style={{ padding: "1rem" }}>Institutional focus</td>
                    <td style={{ padding: "1rem", color: S.green }}>Acquired by RedStone (Sept 2025)</td>
                  </tr>
                  <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                    <td style={{ padding: "1rem", fontWeight: "600" }}>Spectral</td>
                    <td style={{ padding: "1rem" }}>300–850 (MACRO)</td>
                    <td style={{ padding: "1rem" }}>Behavioral + NFCs</td>
                    <td style={{ padding: "1rem" }}>Non-Fungible Credits</td>
                    <td style={{ padding: "1rem", color: S.green }}>Live & Growing</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "1rem", fontWeight: "600" }}>Cred Protocol</td>
                    <td style={{ padding: "1rem" }}>Real-time scores</td>
                    <td style={{ padding: "1rem" }}>Real-time credit assessment</td>
                    <td style={{ padding: "1rem" }}>Instant lending decisions</td>
                    <td style={{ padding: "1rem", color: S.green }}>Active</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "0.75rem", marginTop: "1.5rem" }}>
              Credora (Now RedStone)
            </h3>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              Credora was backed by Coinbase Ventures and S&P Global, positioning it at the intersection of traditional and onchain credit. When RedStone acquired Credora in September 2025, it signaled a shift toward integrating credit scoring with oracle infrastructure. RedStone's positioning as a unified intelligence layer means credit scores are being baked into price feeds and risk assessments.
            </p>

            <h3 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "0.75rem", marginTop: "1.5rem" }}>
              Spectral
            </h3>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              Spectral's MACRO score is the most familiar to users—a 300-850 range that mirrors traditional credit scores. MACRO evaluates behavioral patterns, historical repayment, and introduces Non-Fungible Credits (NFCs)—tokenized credit representations that can be traded or bundled. This makes credit itself a tradeable asset, enabling new financial primitives.
            </p>

            <h3 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "0.75rem", marginTop: "1.5rem" }}>
              Cred Protocol
            </h3>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              Cred Protocol focuses on real-time credit scoring and instant lending decisions. Rather than static scores updated periodically, Cred aims for continuous credit assessment, enabling flash loans and just-in-time lending decisions based on fresh onchain data.
            </p>
          </section>

          {/* Section 5 */}
          <section id="redstone" style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "1rem", color: S.primary }}>
              The RedStone Stack & Credit Intelligence
            </h2>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              The RedStone Stack represents the evolution beyond standalone credit scoring. By combining oracle data with credit assessment, RedStone creates a unified intelligence layer for DeFi protocols.
            </p>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              Traditional oracles provide price feeds. RedStone Stack provides price feeds <em>plus</em> credit risk assessment, enabling protocols to make nuanced lending decisions. A borrower with ETH collateral and a MACRO score of 750 gets different terms than someone with the same collateral but a 400 score.
            </p>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              This integration is critical for 2026. As credit ratings become the default in onchain markets, protocols need a single source of truth for both price data and counterparty risk. RedStone's acquisition of Credora positions it to provide exactly that.
            </p>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              The stack also enables composability. A lending protocol can pull RedStone's price feed, grab the associated credit scores, calculate LTV ratios dynamically, and execute the entire transaction in a single atomic operation. This is DeFi at its best.
            </p>
          </section>

          {/* Section 6 */}
          <section id="use-cases" style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "1rem", color: S.primary }}>
              Use Cases & Real-World Applications
            </h2>

            <h3 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "0.75rem", marginTop: "1.5rem" }}>
              Undercollateralized Lending
            </h3>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              The primary use case. Borrowers with strong credit scores can access capital with 110–120% collateral instead of 150%+. This dramatically improves capital efficiency and becomes the dominant lending model as credit infrastructure matures.
            </p>

            <h3 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "0.75rem", marginTop: "1.5rem" }}>
              Institutional Lending Pools
            </h3>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              Maple Finance, Morpho, and Aave are all exploring credit-scored lending pools. Rather than generic lending, they offer credit-tiered pools where borrowers with higher scores access better rates. Lenders get better risk-adjusted returns.
            </p>

            <h3 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "0.75rem", marginTop: "1.5rem" }}>
              DAO Treasury Management
            </h3>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              DAOs hold billions in treasuries. Rather than letting stablecoins sit idle, they can deploy them to undercollateralized lending strategies targeting only borrowers with credit scores above a certain threshold. This generates yield while maintaining risk discipline.
            </p>

            <h3 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "0.75rem", marginTop: "1.5rem" }}>
              Dynamic Liquidation Thresholds
            </h3>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              Instead of fixed LTV ratios, protocols can adjust liquidation thresholds based on credit scores. A 800+ MACRO score wallet might have a 150% LTV, while a 500 score has 120%. This creates better incentives for building credit history.
            </p>
          </section>

          {/* Section 7 */}
          <section id="privacy" style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "1rem", color: S.primary }}>
              Privacy & ZK Solutions
            </h2>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              Onchain credit introduces a transparency-privacy tension. Credit scores require public data analysis, but exposing all underlying transaction data enables wallet surveillance and targeting.
            </p>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              Zero-knowledge proofs are emerging as the solution. Instead of revealing wallet transaction history to compute credit scores, ZK proofs allow you to prove "my credit score is at least 700" without exposing which transactions led to that score.
            </p>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              This preserves the credit signal—protocols know you're creditworthy—while protecting privacy. Some protocols are already experimenting with ZK-based credit attestations, enabling private credit checks on public blockchains.
            </p>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              As 2026 progresses, expect more focus on privacy-preserving credit infrastructure. The protocols that balance transparency with data protection will win market share.
            </p>
          </section>

          {/* Section 8 */}
          <section id="risks" style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "1rem", color: S.primary }}>
              Risks & Challenges
            </h2>

            <h3 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "0.75rem", marginTop: "1.5rem" }}>
              Model Risk
            </h3>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              Credit scoring models are trained on historical data. In volatile markets, past performance doesn't predict future behavior. A borrower who looked creditworthy in a bull market may default in a crash. Overfitting to historical patterns is a real risk.
            </p>

            <h3 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "0.75rem", marginTop: "1.5rem" }}>
              Sybil Attacks
            </h3>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              Attackers can create multiple wallets and "build credit history" through circular transactions. If protocols aren't careful, they can be gamed by sophisticated actors creating fake transaction history.
            </p>

            <h3 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "0.75rem", marginTop: "1.5rem" }}>
              Regulatory Uncertainty
            </h3>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              Credit scoring is regulated in traditional finance. Regulators are watching onchain credit. By 2026, expect clarification on whether credit algorithms need disclosure, appeal mechanisms, or modification rights.
            </p>

            <h3 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "0.75rem", marginTop: "1.5rem" }}>
              Counterparty Concentration
            </h3>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              If all DeFi protocols use the same credit scoring provider, we create systemic risk. If that provider's score is gamed or miscalculated, entire markets collapse. Diversity of credit providers is essential.
            </p>
          </section>

          {/* Section 9 */}
          <section id="future" style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "1rem", color: S.primary }}>
              The Road Ahead
            </h2>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              By 2026, onchain credit scoring is no longer experimental—it's infrastructure. We're entering a phase where:
            </p>
            <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem", color: S.text }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Credit Ratings Become Default</strong>: Major protocols won't launch undercollateralized lending without integrated credit scoring
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Institutional Adoption Accelerates</strong>: Traditional finance institutions will tap onchain credit for yield and efficiency
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Privacy Infrastructure Matures</strong>: ZK proofs and similar tech will balance credit signals with privacy
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Cross-Chain Credit</strong>: Expect credit scores that aggregate activity across multiple chains
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>Regulatory Frameworks Emerge</strong>: Governments will issue guidance on onchain credit scoring
              </li>
            </ul>
            <p style={{ lineHeight: "1.8", marginBottom: "1rem", color: S.text }}>
              The bigger picture: onchain credit is the missing piece that unlocks DeFi's potential to replace TradFi credit infrastructure. It's not just about borrowing and lending—it's about building financial systems that are transparent, efficient, and accessible to everyone.
            </p>
          </section>

          {/* Section 10 - FAQ */}
          <section id="faq" style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "1.5rem", color: S.primary }}>
              Frequently Asked Questions
            </h2>

            {[
              {
                q: "What is onchain credit scoring?",
                a: "Onchain credit scoring evaluates wallet activity, DeFi interactions, and repayment history to generate a creditworthiness score based entirely on transparent blockchain data. Unlike traditional credit bureaus, scores are permissionless and always accessible.",
              },
              {
                q: "How does onchain credit scoring enable undercollateralized lending?",
                a: "Traditional DeFi requires 150%+ overcollateralization because there's no credit history. Onchain credit scores assess risk based on wallet behavior, allowing borrowers with strong credit ratings to access capital with lower collateral requirements—typically 110–130% LTV instead of 150%+.",
              },
              {
                q: "What are the main onchain credit protocols?",
                a: "The three leading protocols are Credora (acquired by RedStone in September 2025, backed by Coinbase Ventures), Spectral (with MACRO scores ranging 300–850), and Cred Protocol (focusing on real-time credit assessment). Each uses different methodologies but all leverage onchain behavioral data.",
              },
              {
                q: "How does Spectral's MACRO score work?",
                a: "MACRO is Spectral's credit score ranging 300–850, similar to traditional credit scores like FICO. It evaluates DeFi transaction history, repayment patterns, and Non-Fungible Credits (NFCs). Different MACRO ranges unlock different lending terms across Spectral's ecosystem.",
              },
              {
                q: "What is the RedStone Stack?",
                a: "RedStone Stack is a unified intelligence layer combining oracle price data with credit risk assessment. Instead of separate price feeds and credit scores, RedStone provides integrated risk and pricing data, enabling protocols to make dynamic lending decisions based on both collateral value and borrower creditworthiness.",
              },
              {
                q: "How do zero-knowledge proofs help with privacy in onchain credit?",
                a: "ZK proofs allow you to prove 'my credit score is at least 700' without revealing the underlying transactions. This preserves the credit signal for protocols while protecting wallet privacy, enabling privacy-preserving credit checks on public blockchains.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: "1.5rem",
                  paddingBottom: "1.5rem",
                  borderBottom: idx < 5 ? `1px solid ${S.border}` : "none",
                }}
              >
                <h3 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.75rem", color: S.blue }}>
                  {item.q}
                </h3>
                <p style={{ lineHeight: "1.7", color: S.text }}>
                  {item.a}
                </p>
              </div>
            ))}
          </section>

          {/* Disclaimer */}
          <div
            style={{
              background: `${S.orange}15`,
              border: `1px solid ${S.orange}40`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginTop: "3rem",
              marginBottom: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "0.9rem",
                color: S.text,
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              <strong>Disclaimer:</strong> This guide is educational content for learning about onchain credit scoring. It is not financial advice. Credit scores involve assumptions, historical data, and models that may not predict future performance. Always conduct your own research and understand the risks before borrowing or lending. Credit scoring protocols may be gamed, models may fail in extreme market conditions, and regulatory frameworks are still evolving. Use credit-scored lending as part of a diversified risk strategy, never as your sole risk management tool.
            </p>
          </div>

          {/* Internal Links */}
          <div
            style={{
              background: S.surface,
              border: `1px solid ${S.border}`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            <h3 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "1rem" }}>
              Related Guides
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { href: "/learn/morpho-protocol-guide", text: "Morpho Protocol Guide" },
                { href: "/ecosystem/aave", text: "Aave Protocol Overview" },
                { href: "/learn/advanced-defi-strategies", text: "Advanced DeFi Strategies" },
                { href: "/learn/onchain-institutional-credit-guide", text: "Onchain Institutional Credit Guide" },
                { href: "/tools/defi-risk-scanner", text: "DeFi Risk Scanner Tool" },
              ].map((link, idx) => (
                <li key={idx} style={{ marginBottom: "0.5rem" }}>
                  <a
                    style={{ color: S.blue, textDecoration: "none" }}
                  >
                    → {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <BackToTop />
      
        
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/investing/blue-chip-crypto-tokens-list" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Blue Chip Crypto Tokens List</a></li>
            <li><a href="/investing/crypto-onchain-analysis-investing" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Onchain Analysis Investing</a></li>
            <li><a href="/investing/undervalued-crypto-tokens-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Undervalued Crypto Tokens 2026</a></li>
            <li><a href="/tools/blockchain-explorer-tool" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Blockchain Explorer Tool</a></li>
          </ul>
        </nav>

        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      </article>
    </>
  );
}