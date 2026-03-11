import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RWA Tokenization Guide 2026: How Real-World Assets Are Going On-Chain",
  description:
    "A complete guide to real-world asset (RWA) tokenization in 2026. How it works, the top protocols, risks, yield opportunities, and which assets are going on-chain.",
};

export default function RWATokenizationGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-xs px-3 py-1 rounded-full font-bold" style={{ background: "#f59e0b20", color: "#f59e0b" }}>
            DeFi · RWA
          </span>
          <span className="text-xs px-3 py-1 rounded-full font-bold" style={{ background: "#22c55e20", color: "#22c55e" }}>
            Updated March 2026
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "var(--color-text)", lineHeight: "1.2" }}>
          RWA Tokenization 2026: The Complete Guide
        </h1>
        <p className="text-lg" style={{ color: "var(--color-text-secondary)", lineHeight: "1.7" }}>
          Real-world assets — from US Treasuries to real estate to private credit — are going on-chain at an accelerating pace. Here&apos;s everything you need to know about the RWA megatrend.
        </p>
      </div>

      <div className="glass rounded-xl p-5 mb-8" style={{ borderLeft: "4px solid #f59e0b" }}>
        <h2 className="text-sm font-extrabold mb-3 uppercase tracking-wide" style={{ color: "#f59e0b" }}>
          📊 RWA Market 2026 Snapshot
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Total RWA On-Chain Value", value: "$14.5B+" },
            { label: "Tokenized T-Bills / MMFs", value: "$8.2B" },
            { label: "Private Credit On-Chain", value: "$3.4B" },
            { label: "Tokenized Real Estate", value: "$1.1B" },
            { label: "Top Protocol", value: "Ondo Finance" },
            { label: "YoY Growth", value: "+340%" },
          ].map((s) => (
            <div key={s.label} className="p-3 rounded-lg"
              style={{ background: "var(--glass-bg)", border: "1px solid var(--color-border)" }}>
              <div className="text-xs" style={{ color: "var(--color-text-secondary)" }}>{s.label}</div>
              <div className="text-sm font-bold" style={{ color: "var(--color-text)" }}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
        <h2 className="text-xl font-extrabold mt-8 mb-3" style={{ color: "var(--color-text)" }}>
          What Is RWA Tokenization?
        </h2>
        <p>
          Real-world asset (RWA) tokenization is the process of representing ownership of a traditional
          financial asset — such as a government bond, piece of real estate, or private credit instrument —
          as a token on a blockchain. The token confers the same economic rights as the underlying asset
          (yield, appreciation, voting rights) but with the programmability, transferability, and
          composability of a blockchain-native asset.
        </p>
        <p className="mt-4">
          The simplest and most successful RWA category to date has been tokenized US Treasury bills and
          money market funds. In a high-rate environment, these offer attractive yields (4–5%+) that
          can be accessed by DeFi users without exiting the crypto ecosystem. Protocols like Ondo Finance,
          BlackRock&apos;s BUIDL fund, and Superstate have collectively brought over $8B in tokenized T-bills
          on-chain.
        </p>

        <h2 className="text-xl font-extrabold mt-8 mb-3" style={{ color: "var(--color-text)" }}>
          Top RWA Protocols in 2026
        </h2>
        <div className="space-y-3 my-4">
          {[
            {
              name: "Ondo Finance (ONDO)",
              desc: "The largest tokenized Treasury platform, offering OUSG (short-term US Treasuries) and USDY (yield-bearing stablecoin). Manages $2.5B+ in tokenized assets.",
              color: "#6366f1",
            },
            {
              name: "BlackRock BUIDL",
              desc: "BlackRock's tokenized money market fund on Ethereum. The entry of the world's largest asset manager into on-chain RWAs is a watershed moment for institutional credibility.",
              color: "#0052ff",
            },
            {
              name: "Centrifuge",
              desc: "Focuses on real-world private credit — bringing invoice financing, real estate loans, and trade finance on-chain. Integrated with MakerDAO and Aave.",
              color: "#22c55e",
            },
            {
              name: "Maple Finance",
              desc: "Institutional lending protocol specializing in undercollateralized loans to vetted crypto-native businesses. Has paid out $100M+ in interest to lenders.",
              color: "#f59e0b",
            },
            {
              name: "RealT / Tokeny",
              desc: "Fractional real estate tokenization, primarily US residential properties. Tokens generate rental yield and can be traded on secondary markets.",
              color: "#ec4899",
            },
          ].map((p) => (
            <div key={p.name} className="glass p-4 rounded-xl" style={{ borderLeft: `3px solid ${p.color}` }}>
              <div className="text-sm font-bold mb-1" style={{ color: "var(--color-text)" }}>{p.name}</div>
              <div className="text-xs" style={{ color: "var(--color-text-secondary)" }}>{p.desc}</div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-extrabold mt-8 mb-3" style={{ color: "var(--color-text)" }}>
          Why Is RWA Tokenization Growing So Fast?
        </h2>
        <p>
          Several converging forces are driving RWA adoption. First, the high interest rate environment of
          2023–2025 created enormous demand for yield-bearing stablecoins as alternatives to USDC/USDT, which
          pass none of their yield to holders. Tokenized Treasuries filled that gap perfectly.
        </p>
        <p className="mt-4">
          Second, traditional finance giants — BlackRock, Franklin Templeton, JPMorgan — have entered the space,
          lending institutional credibility and regulatory comfort. When BlackRock launches an on-chain product,
          pension funds and endowments take notice.
        </p>
        <p className="mt-4">
          Third, DeFi protocols are increasingly integrating RWA as high-quality collateral. MakerDAO (now Sky)
          holds billions in tokenized RWAs backing DAI. Aave and Compound have RWA integrations. This creates a
          virtuous cycle: more DeFi utility drives more RWA demand.
        </p>

        <h2 className="text-xl font-extrabold mt-8 mb-3" style={{ color: "var(--color-text)" }}>
          Risks of RWA Investing
        </h2>
        <p>
          The primary risk in RWA is the legal enforceability of on-chain token rights in off-chain courts.
          A smart contract cannot physically seize a piece of real estate. The bridge between on-chain tokens
          and off-chain assets requires legal structures (trusts, SPVs, custodians) that introduce
          counterparty risk and jurisdictional complexity.
        </p>
        <p className="mt-4">
          Additional risks include: regulatory changes (particularly around tokenized securities), liquidity
          risk (RWA tokens often have thin secondary markets), smart contract risk, and the creditworthiness
          of underlying borrowers in private credit protocols.
        </p>
      </div>

      <div className="mt-10 pt-8" style={{ borderTop: "1px solid var(--color-border)" }}>
        <h3 className="text-sm font-bold mb-4"
          style={{ color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Related Guides
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: "Real World Assets (RWA) Guide", href: "/learn/real-world-assets-rwa-guide" },
            { label: "Best DeFi Lending Platforms", href: "/defi-lending/best" },
            { label: "Staking Yields Calculator", href: "/tools/staking-apy" },
            { label: "Yield Farming Guide", href: "/tools/yield-farming-calculator" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="glass p-3 rounded-xl text-sm card-hover"
              style={{ color: "var(--color-primary)" }}>
              → {l.label}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
