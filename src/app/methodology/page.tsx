import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Rating Methodology - How ${SITE_NAME} Evaluates Crypto Products`,
  description: `Our transparent rating methodology explains exactly how we evaluate crypto exchanges, wallets, DeFi protocols, and other crypto products.`,
};

export default function MethodologyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Methodology", href: "/methodology" }]} />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-6">Rating Methodology</h1>

      <div className="prose-crypto">
        <p>
          At {SITE_NAME}, we believe in complete transparency about how we evaluate and rate crypto products. This page explains our methodology for each product category.
        </p>

        <h2 id="rating-scale">Our Rating Scale</h2>
        <p>
          We use a 5-star rating scale with 0.1 increments. Each product is scored across multiple weighted criteria specific to its category. The final rating is a weighted average of all criteria scores.
        </p>
        <ul>
          <li><strong>5.0:</strong> Exceptional — Best-in-class across virtually all criteria</li>
          <li><strong>4.0-4.9:</strong> Excellent — Strong performance with minor areas for improvement</li>
          <li><strong>3.0-3.9:</strong> Good — Solid option with some notable limitations</li>
          <li><strong>2.0-2.9:</strong> Fair — Significant areas for improvement</li>
          <li><strong>1.0-1.9:</strong> Poor — Major concerns in multiple areas</li>
        </ul>

        <h2 id="exchanges">Crypto Exchange Ratings</h2>
        <p>We evaluate crypto exchanges on these weighted criteria:</p>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 my-4">
          <ul>
            <li><strong>Security (25%)</strong> — Track record, insurance, audits, proof of reserves, 2FA, cold storage practices</li>
            <li><strong>Fees (20%)</strong> — Trading fees, withdrawal fees, deposit fees, spread, fee tier structure</li>
            <li><strong>Coin Selection (15%)</strong> — Number and quality of supported assets, trading pairs</li>
            <li><strong>User Experience (15%)</strong> — UI/UX design, mobile app quality, onboarding process</li>
            <li><strong>Features (10%)</strong> — Staking, earn programs, advanced trading tools, API access</li>
            <li><strong>Customer Support (10%)</strong> — Response time, available channels, knowledge base quality</li>
            <li><strong>Regulatory Compliance (5%)</strong> — Licenses held, KYC/AML compliance, geographic availability</li>
          </ul>
        </div>

        <h2 id="wallets">Crypto Wallet Ratings</h2>
        <p>We evaluate crypto wallets on these weighted criteria:</p>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 my-4">
          <ul>
            <li><strong>Security (30%)</strong> — Open-source code, security audits, track record, encryption, key management</li>
            <li><strong>Supported Assets (20%)</strong> — Blockchain networks and tokens supported</li>
            <li><strong>User Experience (20%)</strong> — Setup ease, daily usage, backup/recovery process</li>
            <li><strong>Features (15%)</strong> — DApp browser, in-wallet swaps, staking, NFT support</li>
            <li><strong>Privacy (10%)</strong> — Data collection policies, KYC requirements, tracking</li>
            <li><strong>Price (5%)</strong> — Hardware cost or premium features pricing</li>
          </ul>
        </div>

        <h2 id="defi">DeFi Protocol Ratings</h2>
        <p>We evaluate DeFi protocols on these weighted criteria:</p>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 my-4">
          <ul>
            <li><strong>Security & Audits (30%)</strong> — Audit history, bug bounty programs, incident track record</li>
            <li><strong>Yield/Rates (20%)</strong> — Competitive APY/APR, rate stability</li>
            <li><strong>TVL & Liquidity (15%)</strong> — Total value locked, market depth, slippage</li>
            <li><strong>User Experience (15%)</strong> — Interface quality, documentation, onboarding</li>
            <li><strong>Governance (10%)</strong> — Decentralization level, community involvement, DAO structure</li>
            <li><strong>Chain Support (10%)</strong> — Multi-chain availability, bridge partnerships</li>
          </ul>
        </div>

        <h2 id="tax-software">Tax Software Ratings</h2>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 my-4">
          <ul>
            <li><strong>Exchange Integrations (25%)</strong> — Number of supported exchanges, wallets, DeFi protocols</li>
            <li><strong>Accuracy (25%)</strong> — Calculation accuracy, DeFi/NFT handling, edge case support</li>
            <li><strong>User Experience (20%)</strong> — Ease of use, import process, report generation</li>
            <li><strong>Price (15%)</strong> — Pricing tiers, value for money, free tier limitations</li>
            <li><strong>Tax Form Support (10%)</strong> — Countries supported, form types, accountant access</li>
            <li><strong>Customer Support (5%)</strong> — Response time, documentation, community</li>
          </ul>
        </div>

        <h2 id="updates">How We Keep Ratings Current</h2>
        <p>
          Crypto products evolve rapidly. We review and update our ratings on a regular schedule:
        </p>
        <ul>
          <li><strong>Monthly:</strong> Best-of roundup pages are refreshed with latest pricing and features</li>
          <li><strong>Quarterly:</strong> Individual product reviews undergo comprehensive re-evaluation</li>
          <li><strong>As Needed:</strong> Major product changes, security incidents, or significant fee updates trigger immediate review</li>
        </ul>

        <h2 id="independence">Editorial Independence</h2>
        <p>
          Our rating methodology is applied consistently regardless of whether we have a commercial relationship with the product. Advertisers cannot pay for higher ratings, and our editorial team operates independently from our business development team. If a product scores well in our methodology, it earns a high rating — period.
        </p>
      </div>
    </div>
  );
}
