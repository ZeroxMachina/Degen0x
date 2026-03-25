import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import PectraValidatorCalc from "@/components/PectraValidatorCalc";
import {
  generateArticleSchema,
  generateFAQSchema,
  combineSchemas,
} from "@/lib/structured-data";
import { SITE_URL } from "@/lib/constants";

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Ethereum Pectra Upgrade 2026: EIP-7702 & Changes | degen0x",
  description:
    "Full guide to Ethereum's April 2026 Pectra upgrade — EIP-7702 smart wallets, EIP-7251 validator max 2048 ETH, and doubled blob throughput for cheaper L2 fees.",
  keywords: [
    "ethereum pectra upgrade",
    "EIP-7702",
    "EIP-7251",
    "pectra mainnet 2026",
    "ethereum account abstraction",
    "ethereum upgrade 2026",
    "ethereum staking improvements",
    "smart wallet ethereum",
    "ethereum prague electra",
    "ethereum blob scaling",
  ],
  openGraph: {
    title: "Ethereum Pectra Upgrade Guide 2026: EIP-7702 & What Changes",
    description:
      "Ethereum's most ambitious upgrade yet targets April 2026. 11 EIPs, smart wallet superpowers, 2048 ETH validators, and cheaper L2 transactions. Here's what changes for you.",
    url: `${SITE_URL}/learn/ethereum-pectra-upgrade-guide`,
    type: "article",
    publishedTime: "2026-03-15T00:00:00Z",
    modifiedTime: "2026-03-15T00:00:00Z",
    authors: ["degen0x Team"],
    images: [
      {
        url: `${SITE_URL}/api/og?title=Ethereum+Pectra+Upgrade&category=Learn&type=learn`,
        width: 1200,
        height: 630,
        alt: "Ethereum Pectra Upgrade Guide 2026 — EIP-7702, EIP-7251 | degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethereum Pectra Upgrade Guide 2026: EIP-7702 & What Changes",
    description:
      "11 EIPs. Smart wallets for everyone. Validators up to 2048 ETH. Cheaper L2 fees. Everything changing in Ethereum's April 2026 Pectra upgrade →",
    images: [`${SITE_URL}/api/og?title=Ethereum+Pectra+Upgrade&category=Learn&type=learn`],
  },
  alternates: {
    canonical: `${SITE_URL}/learn/ethereum-pectra-upgrade-guide`,
  },
};

// ─── Structured Data ─────────────────────────────────────────────────────────
const articleSchema = generateArticleSchema({
  title: "Ethereum Pectra Upgrade Guide 2026: EIP-7702, EIP-7251 & Everything That Changes",
  description:
    "Comprehensive guide to Ethereum's Pectra upgrade (Prague + Electra) targeting April 2026 mainnet. Covers EIP-7702 native account abstraction for smart wallets, EIP-7251 validator consolidation up to 2048 ETH, EIP-7691 doubled blob throughput, faster deposits, and execution-layer withdrawals.",
  url: `${SITE_URL}/learn/ethereum-pectra-upgrade-guide`,
  datePublished: "2026-03-15T00:00:00Z",
  dateModified: "2026-03-15T00:00:00Z",
  author: "degen0x Team",
  image: `${SITE_URL}/api/og?title=Ethereum+Pectra+Upgrade&category=Learn&type=learn`,
  wordCount: 2900,
});

const faqSchema = generateFAQSchema([
  {
    question: "What is the Ethereum Pectra upgrade?",
    answer:
      "Pectra is Ethereum's largest upgrade ever, combining the Prague execution layer hard fork and the Electra consensus layer upgrade. It includes 11 EIPs and targets mainnet activation in April 2026. Key improvements include EIP-7702 for native account abstraction (smart wallets), EIP-7251 raising validator limits to 2048 ETH, and EIP-7691 doubling blob throughput to lower L2 fees.",
  },
  {
    question: "What is EIP-7702 and how does it affect me?",
    answer:
      "EIP-7702 lets your regular Ethereum wallet (EOA) temporarily behave like a smart contract during a transaction. This enables gasless transactions (someone else pays your fees), transaction batching (combine multiple actions into one click), and social recovery. You don't need to move to a new address — your existing MetaMask, Coinbase Wallet, or Rainbow wallet becomes 'smart' after the upgrade.",
  },
  {
    question: "Do I need to do anything as an ETH holder before Pectra?",
    answer:
      "No action is required from regular ETH holders. The upgrade happens at the protocol level automatically. Your ETH balance, wallets, and private keys remain identical. If you run a validator, you may want to review the new consolidation options introduced by EIP-7251.",
  },
  {
    question: "What does Pectra mean for Ethereum stakers?",
    answer:
      "Pectra is a major quality-of-life upgrade for stakers. EIP-7251 raises the maximum validator balance from 32 ETH to 2,048 ETH, letting large operators consolidate many validators into one — reducing infrastructure overhead and network bandwidth. EIP-6110 cuts deposit processing time from ~9 hours to ~13 minutes. EIP-7002 enables execution-layer withdrawals, reducing trust requirements in staking pools.",
  },
  {
    question: "Will Pectra make Ethereum Layer 2 transactions cheaper?",
    answer:
      "Yes. EIP-7691 doubles Ethereum's blob throughput (from ~3 to ~6 blobs per block on average). Blobs are the data structure rollups use to post transaction batches to Ethereum. More blob capacity means lower data costs for L2s like Arbitrum, Base, Optimism, and zkSync — which should translate to additional 30–40% fee reductions for L2 users.",
  },
  {
    question: "When is the Ethereum Pectra mainnet launch date?",
    answer:
      "Pectra is targeting an April 2026 mainnet activation, following the final testnet milestone reached in March 2026. Ethereum core developers are coordinating the exact activation epoch on upcoming All Core Developers calls. Check the Ethereum Foundation blog or ethereum.org for real-time status updates.",
  },
]);

const schemas = combineSchemas([articleSchema, faqSchema]);

// ─── Page Component ───────────────────────────────────────────────────────────
export default function EthereumPectraUpgradeGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <StructuredData data={schemas} />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Learn", href: "/learn" },
          { label: "Ethereum Pectra Upgrade Guide" },
        ]}
      />

      {/* Badges */}
      <div className="flex gap-3 mb-4 mt-8">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#6e40c9]/20 text-[#a371f7] border border-[#6e40c9]/30">
          Ethereum
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1f6feb]/20 text-[#58a6ff] border border-[#1f6feb]/30">
          Intermediate
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#3fb950]/20 text-[#3fb950] border border-[#3fb950]/30">
          🔔 Coming April 2026
        </span>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#a371f7] to-[#58a6ff] bg-clip-text text-transparent">
        Ethereum Pectra Upgrade: Everything That Changes
      </h1>
      <p className="text-xl text-[#8b949e] mb-4">
        Ethereum&rsquo;s biggest upgrade yet hits mainnet in April 2026. Smart wallets for everyone, validators up to 2048 ETH, cheaper L2 fees — here&rsquo;s your complete breakdown of all 11 EIPs and what they mean for you.
      </p>
      <p className="text-sm text-[#8b949e] mb-8">
        Updated March 2026 &middot; 13 min read
      </p>

      {/* Table of Contents */}
      <nav
        className="rounded-xl p-6 mb-10 border"
        style={{ background: "#161b22", borderColor: "#30363d" }}
      >
        <h2 className="text-base font-semibold text-[#e6edf3] mb-4">📋 In This Guide</h2>
        <ol className="space-y-2 text-sm text-[#58a6ff]">
          <li><a href="#what-is-pectra" className="hover:underline">1. What Is the Pectra Upgrade?</a></li>
          <li><a href="#eip-7702" className="hover:underline">2. EIP-7702: Native Account Abstraction — Smart Wallets for Everyone</a></li>
          <li><a href="#eip-7251" className="hover:underline">3. EIP-7251: Raise the Validator Maximum to 2048 ETH</a></li>
          <li><a href="#eip-7691" className="hover:underline">4. EIP-7691: Double Blob Throughput for Cheaper L2 Fees</a></li>
          <li><a href="#other-eips" className="hover:underline">5. Other Key EIPs: Deposits, Withdrawals & More</a></li>
          <li><a href="#impact-holders" className="hover:underline">6. Impact on ETH Holders</a></li>
          <li><a href="#impact-stakers" className="hover:underline">7. Impact on Stakers & Validators</a></li>
          <li><a href="#impact-devs" className="hover:underline">8. Impact on Developers & dApps</a></li>
          <li><a href="#timeline" className="hover:underline">9. Upgrade Timeline & What Comes Next</a></li>
          <li><a href="#faq" className="hover:underline">10. FAQ</a></li>
        </ol>
      </nav>

      {/* ─── Section 1 ──────────────────────────────────────────────────────────── */}
      <h2 id="what-is-pectra" className="text-3xl font-bold text-[#e6edf3] mt-12 mb-4">
        1. What Is the Pectra Upgrade?
      </h2>
      <p className="text-[#8b949e] mb-4">
        <strong className="text-[#e6edf3]">Pectra</strong> combines two simultaneous Ethereum upgrades: the <strong className="text-[#e6edf3]">Prague</strong> execution layer hard fork and the <strong className="text-[#e6edf3]">Electra</strong> consensus layer upgrade — hence the portmanteau. It&rsquo;s the most ambitious Ethereum upgrade in history, shipping more EIPs in a single release than any predecessor.
      </p>
      <p className="text-[#8b949e] mb-4">
        The upgrade targets <strong className="text-[#e6edf3]">April 2026 mainnet activation</strong>, following a successful final testnet run in March 2026. Core developers confirmed on the most recent All Core Developers (ACD) call that the codebase is ready for production deployment.
      </p>
      <p className="text-[#8b949e] mb-6">
        Pectra doesn&rsquo;t change Ethereum&rsquo;s fundamental architecture — it&rsquo;s not a new consensus mechanism or tokenomics overhaul. Instead, it focuses on <strong className="text-[#e6edf3]">user experience, staker efficiency, and Layer 2 scalability</strong> — the three pillars of Ethereum&rsquo;s near-term roadmap.
      </p>

      <div
        className="rounded-xl p-5 mb-8 border"
        style={{ background: "#161b22", borderColor: "#6e40c9" }}
      >
        <p className="text-sm font-semibold text-[#e6edf3] mb-3">⚡ Pectra at a Glance</p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          {[
            ["Upgrade Name", "Pectra (Prague + Electra)"],
            ["Target Date", "April 2026 (mainnet)"],
            ["EIPs Included", "11 (largest batch ever)"],
            ["Testnet Status", "Final milestone passed March 2026"],
            ["Key Theme", "UX, staking efficiency, L2 scaling"],
            ["Predecessor", "Dencun (March 2024, blobs)"],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-[#8b949e] text-xs mb-1">{label}</p>
              <p className="text-[#e6edf3] font-medium">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Section 2 ──────────────────────────────────────────────────────────── */}
      <h2 id="eip-7702" className="text-3xl font-bold text-[#e6edf3] mt-12 mb-4">
        2. EIP-7702: Native Account Abstraction — Smart Wallets for Everyone
      </h2>
      <p className="text-[#8b949e] mb-4">
        EIP-7702 is the headline feature of Pectra and arguably the most user-facing Ethereum improvement in years. It lets any regular Ethereum wallet — called an <strong className="text-[#e6edf3]">Externally Owned Account (EOA)</strong> — temporarily behave like a smart contract for the duration of a single transaction.
      </p>
      <p className="text-[#8b949e] mb-4">
        Before Pectra, your MetaMask wallet was a simple address with a private key: one signature, one action. Smart contract wallets (like Safe or Argent) offered programmable features, but required setting up a new address and migrating your assets. EIP-7702 eliminates that friction entirely.
      </p>

      <div
        className="rounded-xl p-5 mb-6 border"
        style={{ background: "#161b22", borderColor: "#30363d" }}
      >
        <p className="text-sm font-semibold text-[#e6edf3] mb-3">✨ What EIP-7702 Enables</p>
        <ul className="text-sm text-[#8b949e] space-y-2 list-disc list-inside">
          <li><strong className="text-[#e6edf3]">Transaction batching:</strong> Approve and swap in a single click instead of two separate transactions — saving time and gas</li>
          <li><strong className="text-[#e6edf3]">Gas sponsorship:</strong> A dapp or employer can pay your Ethereum gas fees, enabling gasless UX for new users who don&rsquo;t hold ETH</li>
          <li><strong className="text-[#e6edf3]">Passkey / biometric signing:</strong> Sign transactions with Face ID or Touch ID instead of seed phrases</li>
          <li><strong className="text-[#e6edf3]">Social recovery:</strong> Designate trusted contacts to help recover access if you lose your key</li>
          <li><strong className="text-[#e6edf3]">Sub-keys and spending limits:</strong> Create limited-permission keys for specific dapps without exposing your master key</li>
          <li><strong className="text-[#e6edf3]">No address change:</strong> Your existing wallet address and all your assets stay exactly where they are</li>
        </ul>
      </div>

      <p className="text-[#8b949e] mb-4">
        Unlike ERC-4337 (the existing account abstraction standard), EIP-7702 is <strong className="text-[#e6edf3]">built directly into Ethereum&rsquo;s core protocol.</strong> It doesn&rsquo;t require the external bundler and paymaster infrastructure that ERC-4337 relies on — making it cheaper, more reliable, and easier for wallets to adopt.
      </p>
      <p className="text-[#8b949e] mb-4">
        EIP-7702 is also backward-compatible with ERC-4337, so existing smart wallet infrastructure continues to work. MetaMask, Rainbow, and Coinbase Wallet have all announced EIP-7702 support in time for Pectra mainnet.
      </p>
      <p className="text-[#8b949e] mb-6">
        The crypto community has dubbed this the <strong className="text-[#e6edf3]">&ldquo;iPhone moment&rdquo; for Ethereum wallets.</strong> For the first time, mainstream users won&rsquo;t need to understand gas, seed phrases, or transaction confirmations to use Ethereum dapps. This is the UX foundation Ethereum has been building toward since The Merge.
      </p>

      {/* ─── Section 3 ──────────────────────────────────────────────────────────── */}
      <h2 id="eip-7251" className="text-3xl font-bold text-[#e6edf3] mt-12 mb-4">
        3. EIP-7251: Raise the Validator Maximum to 2,048 ETH
      </h2>
      <p className="text-[#8b949e] mb-4">
        Since Ethereum&rsquo;s Merge in 2022, validators have been capped at 32 ETH effective balance — meaning any ETH above 32 in a validator&rsquo;s balance doesn&rsquo;t earn additional rewards. Large staking operators running thousands of ETH had to spin up dozens of separate 32 ETH validators, creating enormous operational overhead and straining network bandwidth with hundreds of thousands of attestations per slot.
      </p>
      <p className="text-[#8b949e] mb-4">
        <strong className="text-[#e6edf3]">EIP-7251 raises the maximum effective validator balance from 32 ETH to 2,048 ETH.</strong> A staking pool with 2,048 ETH can now run a single validator instead of 64. The benefits cascade in multiple directions:
      </p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-[#30363d]">
              <th className="text-left py-3 px-4 text-[#e6edf3]">Before Pectra</th>
              <th className="text-left py-3 px-4 text-[#e6edf3]">After Pectra (EIP-7251)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["32 ETH max effective balance per validator", "2,048 ETH max effective balance per validator"],
              ["64 validators needed per 2,048 ETH", "1 validator needed per 2,048 ETH"],
              ["Rewards only on first 32 ETH", "Rewards earned on full balance up to 2,048 ETH"],
              ["Auto-compounding requires exit + re-entry", "Compounding happens natively within the validator"],
              ["Network carries hundreds of thousands of attestations", "Significantly reduced attestation load on the network"],
            ].map(([before, after], i) => (
              <tr key={i} className="border-b border-[#21262d]">
                <td className="py-3 px-4 text-[#f85149] text-sm">{before}</td>
                <td className="py-3 px-4 text-[#3fb950] text-sm">{after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-[#8b949e] mb-6">
        Validators can optionally consolidate: a large operator running 64 individual 32 ETH validators can merge them into a single 2,048 ETH validator. This is voluntary — existing 32 ETH validators continue to work without any changes. Compounding also becomes native: staking rewards that accumulate above 32 ETH now earn yield automatically, no manual exit and re-stake required. Model your compounding returns with the{" "}
        <a href="/tools/staking-apy" className="text-[#58a6ff] hover:underline">Staking APY Calculator</a>.
      </p>

      {/* ─── Section 4 ──────────────────────────────────────────────────────────── */}
      <h2 id="eip-7691" className="text-3xl font-bold text-[#e6edf3] mt-12 mb-4">
        4. EIP-7691: Double Blob Throughput for Cheaper L2 Fees
      </h2>
      <p className="text-[#8b949e] mb-4">
        The Dencun upgrade (March 2024) introduced <strong className="text-[#e6edf3]">blobs</strong> — a special data availability layer that lets Ethereum Layer 2 rollups post transaction batches to Ethereum at a fraction of the previous cost. Dencun dropped L2 fees by 90%+ overnight.
      </p>
      <p className="text-[#8b949e] mb-4">
        Pectra&rsquo;s <strong className="text-[#e6edf3]">EIP-7691 doubles blob capacity.</strong> The target number of blobs per block increases from 3 to 6 (average), with the maximum rising from 6 to 9. This directly benefits every major L2 — Arbitrum, Base, Optimism, Scroll, zkSync Era, and others — by providing more bandwidth at lower cost.
      </p>

      <div
        className="rounded-xl p-5 mb-6 border"
        style={{ background: "#161b22", borderColor: "#30363d" }}
      >
        <p className="text-sm font-semibold text-[#e6edf3] mb-3">📊 Blob Capacity: Before vs. After</p>
        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          {[
            ["Pre-Dencun", "~$0.20–5.00", "Calldata"],
            ["Post-Dencun", "~$0.001–0.05", "Blobs (3 avg)"],
            ["Post-Pectra", "~30–40% lower", "Blobs (6 avg)"],
          ].map(([era, cost, method]) => (
            <div key={era} className="rounded-lg p-4" style={{ background: "#0d1117" }}>
              <p className="text-[#8b949e] text-xs mb-1">{era}</p>
              <p className="text-[#e6edf3] font-bold text-lg mb-1">{cost}</p>
              <p className="text-[#8b949e] text-xs">{method}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#8b949e] mt-3">Approximate L2 transaction costs. Costs are variable and depend on network congestion.</p>
      </div>

      <p className="text-[#8b949e] mb-6">
        Cheaper L2 transactions compound with EIP-7702: once users can batch DeFi actions into single transactions <em>and</em> pay lower base fees on L2s, the cost of complex on-chain interactions drops dramatically. This is the combination Ethereum needs to compete with cheaper monolithic chains like Solana for retail users.
      </p>

      {/* ─── Section 5 ──────────────────────────────────────────────────────────── */}
      <h2 id="other-eips" className="text-3xl font-bold text-[#e6edf3] mt-12 mb-4">
        5. Other Key EIPs in Pectra
      </h2>
      <p className="text-[#8b949e] mb-6">
        Beyond the three headliners, Pectra ships eight additional EIPs that meaningfully improve the protocol:
      </p>

      <div className="space-y-4 mb-8">
        {[
          {
            eip: "EIP-6110",
            title: "Cut Deposit Processing from 9 Hours to 13 Minutes",
            desc: "Moves validator deposit processing entirely to the execution layer, eliminating the long delay between depositing 32 ETH and becoming an active validator. New validators go live in ~13 minutes instead of the current ~9 hours — a 97% reduction in activation time.",
          },
          {
            eip: "EIP-7002",
            title: "Execution-Layer Triggered Withdrawals",
            desc: "Allows validator withdrawals to be initiated directly from the execution layer using withdrawal credentials, rather than requiring validator-layer signing. This is huge for staking pools and delegated stakers: a smart contract can now autonomously trigger validator exits without trusting a separate signing key.",
          },
          {
            eip: "EIP-7549",
            title: "Committee Index Removed from Attestations",
            desc: "A bandwidth optimization that reduces the size of attestation data passed around the network. Primarily benefits node operators and contributes to the overall efficiency gains from EIP-7251 consolidation.",
          },
          {
            eip: "EIP-2537",
            title: "BLS12-381 Precompile",
            desc: "Adds a precompile for BLS12-381 curve operations, making it dramatically cheaper on-chain to verify BLS signatures. Critical infrastructure for advanced cryptographic applications, ZK proof verification, and cross-chain bridges that rely on BLS signature schemes.",
          },
          {
            eip: "EIP-7685",
            title: "General-Purpose Execution Layer Requests",
            desc: "Creates a standardized framework for the execution layer to make requests to the consensus layer. EIP-6110 (deposits) and EIP-7002 (withdrawals) are both built on top of this framework, making future protocol upgrades cleaner and more modular.",
          },
        ].map((item) => (
          <div
            key={item.eip}
            className="rounded-xl p-5 border"
            style={{ background: "#161b22", borderColor: "#30363d" }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold px-2 py-1 rounded bg-[#1f6feb]/20 text-[#58a6ff] border border-[#1f6feb]/30">
                {item.eip}
              </span>
              <p className="text-sm font-semibold text-[#e6edf3]">{item.title}</p>
            </div>
            <p className="text-sm text-[#8b949e]">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* ─── Section 6 ──────────────────────────────────────────────────────────── */}
      <h2 id="impact-holders" className="text-3xl font-bold text-[#e6edf3] mt-12 mb-4">
        6. Impact on ETH Holders
      </h2>
      <p className="text-[#8b949e] mb-4">
        If you hold ETH in a wallet or on an exchange, <strong className="text-[#e6edf3]">no action is required from you.</strong> Pectra activates at the protocol level — your ETH balance, wallet address, and private keys are entirely unaffected.
      </p>
      <p className="text-[#8b949e] mb-4">
        The indirect benefits for holders are meaningful: EIP-7702 makes Ethereum wallets dramatically more user-friendly, lowering the barrier for new participants. EIP-7691&rsquo;s blob scaling keeps Ethereum competitive on L2 transaction costs. Together, these changes are designed to drive adoption — which historically correlates with ETH price appreciation.
      </p>
      <p className="text-[#8b949e] mb-6">
        For holders using liquid staking (Lido, Rocket Pool, etc.), the platforms will upgrade their validator infrastructure to take advantage of EIP-7251 and EIP-7002. You won&rsquo;t need to do anything — your stETH or rETH tokens continue to work exactly as before, and improved validator efficiency may marginally increase protocol-level yields over time.
      </p>

      {/* ─── Section 7 ──────────────────────────────────────────────────────────── */}
      <h2 id="impact-stakers" className="text-3xl font-bold text-[#e6edf3] mt-12 mb-4">
        7. Impact on Stakers & Validators
      </h2>
      <p className="text-[#8b949e] mb-4">
        Pectra is the biggest validator quality-of-life upgrade since the Merge. Here&rsquo;s what changes for solo stakers and institutional operators:
      </p>

      <div className="space-y-4 mb-8">
        {[
          {
            audience: "Solo Stakers (32 ETH)",
            icon: "🏠",
            points: [
              "No mandatory changes — your 32 ETH validator runs exactly as before",
              "Rewards exceeding 32 ETH now compound automatically within your validator (no manual exits)",
              "EIP-6110: New validators you spin up activate in ~13 minutes instead of ~9 hours",
              "EIP-7002: You can trigger withdrawals directly from your execution-layer withdrawal credentials",
            ],
          },
          {
            audience: "Large Operators & Staking Pools",
            icon: "🏛️",
            points: [
              "Option to consolidate multiple 32 ETH validators into single validators up to 2,048 ETH",
              "Dramatically reduces attestation load and infrastructure overhead",
              "EIP-7002 allows smart contracts to autonomously manage validator exits — enabling trustless liquid staking protocols",
              "Bandwidth savings from EIP-7549 reduce node resource requirements",
            ],
          },
          {
            audience: "Liquid Staking Protocols (Lido, Rocket Pool, Ether.fi)",
            icon: "💧",
            points: [
              "Can design safer, more autonomous withdrawal mechanisms using EIP-7002",
              "Validator consolidation reduces operational costs, potentially improving user APY",
              "EIP-6110 faster deposits improves capital efficiency for deposit queue management",
            ],
          },
        ].map((group) => (
          <div
            key={group.audience}
            className="rounded-xl p-5 border"
            style={{ background: "#161b22", borderColor: "#30363d" }}
          >
            <p className="text-sm font-semibold text-[#e6edf3] mb-3">
              {group.icon} {group.audience}
            </p>
            <ul className="text-sm text-[#8b949e] space-y-1 list-disc list-inside">
              {group.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-[#8b949e] mb-6">
        Track your staking APY and model consolidation scenarios with the{" "}
        <a href="/tools/staking-apy" className="text-[#58a6ff] hover:underline">Staking APY Calculator</a>.
        For a deep dive on how Ethereum validation works before and after Pectra, see our{" "}
        <a href="/learn/validator-staking-guide" className="text-[#58a6ff] hover:underline">Ethereum Validator Staking Guide</a>.
      </p>

      {/* ─── Validator Consolidation Calculator ─────────────────────────────────── */}
      <PectraValidatorCalc />

      {/* ─── Section 8 ──────────────────────────────────────────────────────────── */}
      <h2 id="impact-devs" className="text-3xl font-bold text-[#e6edf3] mt-12 mb-4">
        8. Impact on Developers & dApps
      </h2>
      <p className="text-[#8b949e] mb-4">
        Pectra opens new design space for dapp developers that didn&rsquo;t exist before. EIP-7702 is the most transformative — it lets dapps offer gasless onboarding without complex ERC-4337 bundler infrastructure. A new user can land on your dapp, connect their wallet, and complete a transaction with gas sponsored by the protocol — without ever touching ETH.
      </p>
      <p className="text-[#8b949e] mb-4">
        Transaction batching means users can complete multi-step DeFi flows in a single click. A lending protocol can let users supply collateral and borrow in one transaction. A DEX can batch approvals with swaps. The UX patterns that required smart contract wallets yesterday become available to every EOA user.
      </p>
      <p className="text-[#8b949e] mb-4">
        The <strong className="text-[#e6edf3]">BLS12-381 precompile (EIP-2537)</strong> significantly reduces the cost of BLS signature verification on-chain — enabling cheaper ZK proof verification, more efficient cross-chain bridge designs, and threshold signature schemes. This matters for developers building advanced cryptographic applications on Ethereum.
      </p>
      <p className="text-[#8b949e] mb-6">
        For L2-focused developers, more blob capacity from EIP-7691 means less contention and more predictable data costs — improving the economics of rollup-based application chains. Learn more in our{" "}
        <a href="/learn/layer-2-scaling-guide" className="text-[#58a6ff] hover:underline">Layer 2 Scaling Guide</a>{" "}
        and{" "}
        <a href="/learn/account-abstraction" className="text-[#58a6ff] hover:underline">Account Abstraction Explained</a>.
      </p>

      {/* ─── Section 9 ──────────────────────────────────────────────────────────── */}
      <h2 id="timeline" className="text-3xl font-bold text-[#e6edf3] mt-12 mb-4">
        9. Upgrade Timeline & What Comes Next
      </h2>
      <p className="text-[#8b949e] mb-6">
        Pectra follows Ethereum&rsquo;s established testnets-first upgrade path:
      </p>

      <div className="space-y-3 mb-8">
        {[
          ["Q4 2025", "Mekong testnet — early EIP-7702 testing", "completed"],
          ["Jan 2026", "Holesky & Sepolia testnets activated", "completed"],
          ["March 2026", "Final testnet milestone — all 11 EIPs confirmed", "completed"],
          ["April 2026", "Mainnet activation (exact epoch TBD via ACD call)", "upcoming"],
          ["2026–2027", "Fusaka upgrade (Verkle Trees) — next in roadmap", "future"],
        ].map(([date, desc, status]) => (
          <div
            key={date}
            className="flex items-start gap-4 rounded-xl p-4 border"
            style={{ background: "#161b22", borderColor: "#30363d" }}
          >
            <div className="flex flex-col items-center gap-1 min-w-[80px]">
              <span className="text-xs font-bold text-[#e6edf3]">{date}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  status === "completed"
                    ? "bg-[#3fb950]/20 text-[#3fb950]"
                    : status === "upcoming"
                    ? "bg-[#e3b341]/20 text-[#e3b341]"
                    : "bg-[#30363d] text-[#8b949e]"
                }`}
              >
                {status}
              </span>
            </div>
            <p className="text-sm text-[#8b949e]">{desc}</p>
          </div>
        ))}
      </div>

      <p className="text-[#8b949e] mb-6">
        After Pectra, the Ethereum roadmap continues with <strong className="text-[#e6edf3]">Fusaka</strong> — the next upgrade targeting{" "}
        <strong className="text-[#e6edf3]">Verkle Trees</strong>, which will reduce the state proof size needed for light clients and stateless nodes. Beyond that, full Danksharding will push blob capacity into the hundreds per block. Ethereum&rsquo;s scaling roadmap is a multi-year journey, with Pectra representing a critical milestone that makes the network noticeably better for everyday users today. Follow progress on our{" "}
        <a href="/tools/crypto-calendar" className="text-[#58a6ff] hover:underline">Crypto Calendar</a>.
      </p>

      {/* ─── FAQ ────────────────────────────────────────────────────────────────── */}
      <h2 id="faq" className="text-3xl font-bold text-[#e6edf3] mt-12 mb-6">
        10. Frequently Asked Questions
      </h2>
      <div className="space-y-5 mb-12">
        {[
          {
            q: "What is the Ethereum Pectra upgrade?",
            a: "Pectra combines the Prague execution layer and Electra consensus layer upgrades. It ships 11 EIPs targeting mainnet in April 2026, focused on user experience (EIP-7702 smart wallets), staking efficiency (EIP-7251 validator max 2048 ETH), and L2 scaling (EIP-7691 doubled blob throughput).",
          },
          {
            q: "What is EIP-7702 and how does it affect me?",
            a: "EIP-7702 lets your regular Ethereum wallet temporarily act as a smart contract for a transaction. This enables gasless transactions, transaction batching, passkey signing, and social recovery — without moving to a new wallet address. MetaMask, Coinbase Wallet, and Rainbow have all announced support.",
          },
          {
            q: "Do I need to do anything as an ETH holder before Pectra?",
            a: "No action required. The upgrade is automatic at the protocol level. Your ETH, wallet, and private keys are unchanged. Validator operators may optionally choose to consolidate validators under EIP-7251, but this is entirely voluntary.",
          },
          {
            q: "What does Pectra mean for Ethereum stakers?",
            a: "Major improvements: EIP-7251 raises validator max from 32 to 2,048 ETH with native compounding. EIP-6110 cuts deposit activation from ~9 hours to ~13 minutes. EIP-7002 enables autonomous execution-layer withdrawals. Solo stakers can keep their 32 ETH validators unchanged — upgrades are all opt-in.",
          },
          {
            q: "Will Pectra make Ethereum Layer 2 transactions cheaper?",
            a: "Yes. EIP-7691 doubles average blob throughput from 3 to 6 per block, lowering data costs for Arbitrum, Base, Optimism, zkSync, and all other Ethereum rollups. Analysts estimate an additional 30–40% reduction in L2 transaction fees.",
          },
          {
            q: "When is the Ethereum Pectra mainnet launch date?",
            a: "Pectra targets April 2026 mainnet activation. The exact activation epoch will be confirmed on an upcoming All Core Developers call. The final testnet milestone was successfully completed in March 2026.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-xl p-5 border"
            style={{ background: "#161b22", borderColor: "#30363d" }}
          >
            <p className="font-semibold text-[#e6edf3] mb-2">{item.q}</p>
            <p className="text-sm text-[#8b949e]">{item.a}</p>
          </div>
        ))}
      </div>

      {/* Related Articles */}
      <div
        className="rounded-xl p-6 border"
        style={{ background: "#161b22", borderColor: "#30363d" }}
      >
        <h3 className="text-base font-semibold text-[#e6edf3] mb-4">📚 Related Resources</h3>
        <ul className="space-y-2 text-sm">
          {[
            ["/learn/account-abstraction", "Account Abstraction Explained: ERC-4337 & Smart Wallets"],
            ["/learn/validator-staking-guide", "Ethereum Validator Staking Guide 2026"],
            ["/learn/layer-2-scaling-guide", "Ethereum Layer 2 Scaling Guide: Rollups, Blobs & More"],
            ["/learn/solana-vs-ethereum-2026", "Solana vs Ethereum 2026: Which Chain Wins?"],
            ["/tools/staking-apy", "Staking APY Calculator — Model Your ETH Staking Returns"],
            ["/tools/crypto-calendar", "Crypto Calendar — Track Ethereum Upgrade Dates"],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-[#58a6ff] hover:underline">
                → {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <BackToTop />
    </div>
  );
}
