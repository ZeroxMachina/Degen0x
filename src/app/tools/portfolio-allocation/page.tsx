import { Metadata } from "next";
import Link from "next/link";
import PortfolioAllocationAdvisor from "@/components/PortfolioAllocationAdvisor";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Crypto Portfolio Allocation Advisor - Risk-Based",
  description: "Get personalized crypto portfolio allocation based on your risk tolerance. Interactive tool with BTC, ETH, altcoins, DeFi, stablecoins, and more. Adjust",
  keywords:
    "crypto portfolio allocation, portfolio advisor, risk tolerance, asset allocation, bitcoin allocation, ethereum allocation, portfolio builder, crypto allocation tool",
  openGraph: {
    title: "Crypto Portfolio Allocation Advisor",
    description:
      "Smart portfolio allocation recommendations based on your risk tolerance. From Conservative to Degen strategies.",
    url: "https://degen0x.com/tools/portfolio-allocation",
    type: "website",
    images: [
      {
        url: "https://degen0x.com/og-portfolio-allocation.png",
        width: 1200,
        height: 630,
        alt: "Crypto Portfolio Allocation Advisor Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Portfolio Allocation Advisor",
    description: "Smart portfolio allocation based on risk tolerance",
  },

  alternates: { canonical: "/tools/portfolio-allocation" }};

export default function PortfolioAllocationPage() {
  return (
    <div style={{ background: "var(--color-bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Portfolio Allocation Advisor" },
          ]}
        />

        {/* Header */}
        <div style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
          <div style={{ maxWidth: 800, marginBottom: "1rem" }}>
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
                color: "var(--color-text)",
              }}
            >
              Portfolio Allocation Advisor
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--color-text-secondary)" }}>
              Discover your ideal crypto portfolio allocation based on your risk tolerance. From conservative Bitcoin strategies to aggressive degen positions.
            </p>
          </div>
        </div>

        <AuthorAttribution
          author="0xMachina"
          role="Founder"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="tools"
        />


        {/* Tool Component */}
        <PortfolioAllocationAdvisor />

        {/* Info Section */}
        <div
          style={{
            marginTop: "3rem",
            padding: "2rem",
            borderRadius: "16px",
            background: "var(--glass-bg)",
            border: "1px solid var(--glass-border)",
            maxWidth: 900,
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", color: "var(--color-text)" }}>
            Understanding Portfolio Allocation
          </h2>
          <div style={{ color: "var(--color-text-secondary)", lineHeight: 1.6, space: "1.5rem" }}>
            <p style={{ marginBottom: "1rem" }}>
              Portfolio allocation is the process of dividing your investment funds among different asset classes and crypto categories. A well-allocated portfolio balances potential returns against risk tolerance and investment goals.
            </p>

            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.5rem", color: "var(--color-text)" }}>
              Risk Categories
            </h3>
            <div style={{ marginBottom: "1rem" }}>
              <div style={{ marginBottom: "0.8rem" }}>
                <strong style={{ color: "var(--color-text)" }}>Conservative:</strong> Focused on capital preservation with majority Bitcoin and stablecoins. Best for risk-averse investors.
              </div>
              <div style={{ marginBottom: "0.8rem" }}>
                <strong style={{ color: "var(--color-text)" }}>Moderate:</strong> Balanced mix of Bitcoin, Ethereum, established altcoins, and DeFi. Suitable for long-term investors.
              </div>
              <div style={{ marginBottom: "0.8rem" }}>
                <strong style={{ color: "var(--color-text)" }}>Aggressive:</strong> Higher exposure to altcoins, DeFi protocols, and mid-cap projects. For experienced traders.
              </div>
              <div style={{ marginBottom: "0.8rem" }}>
                <strong style={{ color: "var(--color-text)" }}>Degen:</strong> Maximum risk exposure with speculative positions. Only for sophisticated investors understanding high volatility.
              </div>
            </div>

            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.5rem", color: "var(--color-text)" }}>
              Key Asset Classes
            </h3>
            <ul style={{ list: "disc", paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}><strong>Bitcoin (BTC):</strong> The largest and most established cryptocurrency by market cap.</li>
              <li style={{ marginBottom: "0.5rem" }}><strong>Ethereum (ETH):</strong> Leading smart contract platform with extensive ecosystem.</li>
              <li style={{ marginBottom: "0.5rem" }}><strong>Large Cap Alts:</strong> Top altcoins like SOL, XRP, BNB with market cap 10B+.</li>
              <li style={{ marginBottom: "0.5rem" }}><strong>Mid Cap:</strong> Growing projects with 1B-10B market cap.</li>
              <li style={{ marginBottom: "0.5rem" }}><strong>Small Cap/Meme:</strong> Speculative positions, high volatility and growth potential.</li>
              <li style={{ marginBottom: "0.5rem" }}><strong>DeFi:</strong> Decentralized finance protocols and yields.</li>
              <li style={{ marginBottom: "0.5rem" }}><strong>Stablecoins:</strong> USDT, USDC, DAI for stability and cash positions.</li>
            </ul>

            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.5rem", color: "var(--color-text)" }}>
              Rebalancing Tips
            </h3>
            <p>
              Review your allocation quarterly and rebalance when allocations drift more than 5-10% from targets. Use dollar-cost averaging (DCA) for regular purchases to smooth out volatility. Consider tax implications when rebalancing.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div
          style={{
            marginTop: "2rem",
            padding: "1.5rem",
            borderRadius: "12px",
            background: "rgba(239, 68, 68, 0.08)",
            border: "1px solid rgba(239, 68, 68, 0.2)",
          }}
        >
          <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>
            <strong style={{ color: "var(--color-text)" }}>Disclaimer:</strong> This tool provides educational recommendations only and should not be considered financial advice. Cryptocurrency investments carry significant risk. Always do your own research (DYOR) and consult with a financial advisor before making investment decisions.
          </p>
        </div>
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Portfolio Allocation",
              "url": "https://degen0x.com/tools/portfolio-allocation",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
            <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/tools" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            All Tools
          </Link>
          <Link href="/learn" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Learning Guides
          </Link>
          <Link href="/compare" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Compare Tools
          </Link>
        </div>
      </div>
    </div>
  );
}
