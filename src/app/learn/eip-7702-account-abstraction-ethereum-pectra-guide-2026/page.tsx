import { Metadata } from 'next';
import Link from 'next/link';
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: 'EIP-7702: Ethereum Account Abstraction After Pectra Guide 2026 | Degen0x',
  description: 'How EIP-7702 transforms every Ethereum EOA into a smart account. Learn delegation, batching, sponsored gas, session keys, security trade-offs, and what the Pectra upgrade unlocked for wallet UX in 2026.',
  keywords: [
    'EIP-7702',
    'Account Abstraction',
    'Ethereum Pectra',
    'Smart accounts',
    'EOA delegation',
    'Sponsored gas',
    'Session keys',
    'ERC-4337',
    'Wallet UX',
    'Ethereum 2026',
  ],
  openGraph: {
    type: 'article',
    title: 'EIP-7702: Ethereum Account Abstraction After Pectra Guide 2026',
    description: 'The complete 2026 guide to EIP-7702 delegation, smart EOAs, and the post-Pectra wallet landscape.',
    url: 'https://degen0x.com/learn/eip-7702-account-abstraction-ethereum-pectra-guide-2026',
    images: [{ url: "https://degen0x.com/og-eip-7702-pectra-2026.svg", width: 1200, height: 630, alt: "EIP-7702 Account Abstraction Guide 2026" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EIP-7702: Smart EOAs After Pectra',
    description: 'How every Ethereum wallet became programmable in 2026.',
    images: ["https://degen0x.com/og-eip-7702-pectra-2026.svg"],
  },
  alternates: {
    canonical: 'https://degen0x.com/learn/eip-7702-account-abstraction-ethereum-pectra-guide-2026',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': ['Article', 'FAQPage'],
  headline: 'EIP-7702: Ethereum Account Abstraction After Pectra Guide 2026',
  description: 'Complete guide to EIP-7702, the Pectra-era upgrade that lets EOAs delegate execution to smart contract code.',
  datePublished: '2026-04-08',
  dateModified: '2026-04-08',
  author: { '@type': 'Organization', name: 'Degen0x' },
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is EIP-7702?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EIP-7702 is an Ethereum improvement proposal activated in the Pectra upgrade that allows a regular externally owned account (EOA) to temporarily delegate its code execution to a smart contract. The EOA keeps its address and nonce but behaves like a smart account for the duration of the delegation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is EIP-7702 different from ERC-4337?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ERC-4337 introduced account abstraction via a separate UserOperation mempool and requires users to deploy new smart accounts at new addresses. EIP-7702 upgrades existing EOAs in place, so your MetaMask address can gain batching, session keys, and sponsored gas without migrating funds.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is EIP-7702 safe to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EIP-7702 inherits the security of whatever delegate contract you authorize. A malicious or buggy delegate can drain the EOA, so wallets should only sign authorizations for audited, well-known implementations such as the Safe, Biconomy, or Alchemy reference delegates.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can EIP-7702 unlock for end users?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Batched transactions (approve + swap in one click), sponsored gas (apps pay fees on behalf of users), session keys for games, social recovery, transaction simulation with spending limits, and passkey signing — all without changing wallet addresses.',
      },
    },
    {
      '@type': 'Question',
      name: 'When did EIP-7702 go live?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EIP-7702 shipped with the Pectra upgrade on Ethereum mainnet in 2025, alongside EIP-7251 (MaxEB) and EIP-7691 (blob throughput increase). By Q2 2026, all major wallets support it either natively or via opt-in delegation flows.',
      },
    },
  ],
};

export default function Eip7702Guide() {
  const containerStyle: React.CSSProperties = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px 20px',
    backgroundColor: '#0d1117',
    color: '#e6edf3',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    lineHeight: '1.7',
  };
  const h1Style: React.CSSProperties = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    background: 'linear-gradient(135deg, #60a5fa, #a855f7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };
  const h2Style: React.CSSProperties = { fontSize: '2rem', fontWeight: 'bold', marginTop: '48px', marginBottom: '16px', color: '#60a5fa' };
  const h3Style: React.CSSProperties = { fontSize: '1.4rem', fontWeight: 'bold', marginTop: '28px', marginBottom: '12px', color: '#a855f7' };
  const pStyle: React.CSSProperties = { fontSize: '1.05rem', marginBottom: '16px', color: '#c9d1d9' };
  const cardStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 24, marginBottom: 20 };
  const liStyle: React.CSSProperties = { marginBottom: '8px', color: '#c9d1d9' };

  return (
    <div style={containerStyle}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <nav style={{ marginBottom: 24, fontSize: '0.9rem', color: '#8b949e' }}>
        <Link href="/" style={{ color: '#60a5fa' }}>Home</Link> / <Link href="/learn" style={{ color: '#60a5fa' }}>Learn</Link> / EIP-7702
      </nav>

      <h1 style={h1Style}>EIP-7702: Ethereum Account Abstraction After Pectra</h1>
      <p style={{ ...pStyle, fontSize: '1.2rem', color: '#8b949e' }}>
        The Pectra upgrade quietly rewired what an Ethereum address can do. Here&apos;s the 2026 field guide to EIP-7702 — how smart EOAs work, what they unlock, and where the footguns are.
      </p>

      <div style={cardStyle}>
        <strong style={{ color: '#60a5fa' }}>TL;DR</strong>
        <p style={pStyle}>EIP-7702 lets any EOA sign a one-time authorization that points its address at a smart contract. For the lifetime of that authorization, the EOA executes that contract&apos;s code whenever it&apos;s called. Result: your existing wallet gets batching, gas sponsorship, session keys, and social recovery — without moving a single wei.</p>
      </div>

      <h2 style={h2Style}>1. Why Pectra Mattered</h2>
      <p style={pStyle}>
        Pectra (Prague + Electra) bundled together the execution- and consensus-layer upgrades that had been queuing since Dencun. Three changes stand out: EIP-7251 raised the validator max effective balance to 2,048 ETH, EIP-7691 doubled blob target throughput, and EIP-7702 — the one this guide is about — introduced a new transaction type that gives EOAs programmable behavior.
      </p>
      <p style={pStyle}>
        The account abstraction story on Ethereum had been stuck in a two-track stalemate: ERC-4337 delivered smart accounts but only at new addresses, while the vast majority of users and liquidity sat on EOAs. EIP-7702 collapses that divide. The address you&apos;ve been using since 2017 can now behave like a Safe or a Kernel account, on demand.
      </p>

      <h2 style={h2Style}>2. How Delegation Actually Works</h2>
      <p style={pStyle}>
        EIP-7702 introduces transaction type <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 4 }}>0x04</code>, which carries a list of <em>authorization tuples</em>. Each tuple is a signature from an EOA authorizing a specific implementation contract address, scoped to a chain ID and nonce.
      </p>
      <p style={pStyle}>
        When the block is processed, each authorized account has its code field set to a 23-byte pointer: <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 4 }}>0xef0100 || implementation_address</code>. From that moment on, any call to the EOA runs the delegate&apos;s bytecode in the EOA&apos;s storage context. The EOA is still the &ldquo;from&rdquo; address, still pays its own gas (unless sponsored), and still holds its own balance.
      </p>
      <p style={pStyle}>
        Crucially, the delegation persists across transactions until it&apos;s explicitly overwritten with a new authorization — including one that points to the zero address to revert to a plain EOA.
      </p>

      <h3 style={h3Style}>EIP-7702 vs ERC-4337 at a glance</h3>
      <div style={cardStyle}>
        <ul>
          <li style={liStyle}><strong>Address:</strong> 7702 keeps your existing EOA address. 4337 gives you a new contract address.</li>
          <li style={liStyle}><strong>Mempool:</strong> 7702 uses the normal mempool. 4337 uses the UserOperation mempool and bundlers.</li>
          <li style={liStyle}><strong>Upgrade path:</strong> 7702 is a signature. 4337 is a deployment.</li>
          <li style={liStyle}><strong>Revocation:</strong> 7702 can be revoked with a single authorization. 4337 accounts are immutable unless the implementation is upgradeable.</li>
          <li style={liStyle}><strong>Compatibility:</strong> 7702 and 4337 compose — a 7702-delegated EOA can itself be a 4337 entry point.</li>
        </ul>
      </div>

      <h2 style={h2Style}>3. What It Unlocks</h2>
      <p style={pStyle}>
        The UX wins are the obvious headline, but the deeper story is that app developers can finally assume programmable accounts for the 200M+ existing Ethereum EOAs. The patterns worth knowing in 2026:
      </p>
      <div style={cardStyle}>
        <ul>
          <li style={liStyle}><strong>Atomic batching</strong> — approve + swap + stake in one signature, no more stuck approvals.</li>
          <li style={liStyle}><strong>Sponsored gas</strong> — apps pay fees on the user&apos;s behalf via a paymaster, enabling onboarding without ETH.</li>
          <li style={liStyle}><strong>Session keys</strong> — games and trading apps get short-lived, scoped keys for frictionless interactions.</li>
          <li style={liStyle}><strong>Passkey signing</strong> — WebAuthn delegates let users authorize txs with Face ID or Touch ID.</li>
          <li style={liStyle}><strong>Spending limits &amp; simulation</strong> — delegate contracts can enforce per-asset caps and reject suspicious calls client-side.</li>
          <li style={liStyle}><strong>Social recovery</strong> — guardians can rotate the delegate if a key is lost, without moving funds.</li>
        </ul>
      </div>

      <h2 style={h2Style}>4. Security Trade-offs</h2>
      <p style={pStyle}>
        EIP-7702 is powerful because the delegation signature is completely off-protocol — the chain has no opinion about which contract you point at. That&apos;s also why it&apos;s dangerous. If a user is tricked into signing an authorization for a malicious implementation, the attacker gets the same power the user has: full control of the EOA&apos;s balance and allowances.
      </p>
      <p style={pStyle}>
        The mitigations that have emerged in practice:
      </p>
      <div style={cardStyle}>
        <ul>
          <li style={liStyle}><strong>Wallet allowlists</strong> — MetaMask, Rabby, and Frame ship with curated lists of audited delegates and warn loudly on unknown targets.</li>
          <li style={liStyle}><strong>Chain-scoped authorizations</strong> — always sign with a specific chain ID, never <code style={{ background: '#161b22', padding: '2px 6px', borderRadius: 4 }}>0</code> (which is valid on every chain).</li>
          <li style={liStyle}><strong>Nonce discipline</strong> — reuse protection prevents signature replay across re-delegations.</li>
          <li style={liStyle}><strong>Simulation first</strong> — Tenderly, Blockaid, and GoPlus now preview the post-delegation bytecode before the user signs.</li>
          <li style={liStyle}><strong>Revocation UX</strong> — every major wallet surfaces a &ldquo;reset to EOA&rdquo; button that broadcasts a zero-address authorization.</li>
        </ul>
      </div>

      <h2 style={h2Style}>5. The 2026 Landscape</h2>
      <p style={pStyle}>
        A year after Pectra, the ecosystem has settled into a handful of dominant delegate implementations. Safe&apos;s 7702 module is the conservative default for treasuries. Biconomy&apos;s Nexus and Alchemy&apos;s Light Account dominate consumer apps because they ship with paymasters and session keys out of the box. ZeroDev&apos;s Kernel is the plug-in framework of choice for teams that need custom validation logic. For gaming, Privy and Dynamic wrap 7702 delegation behind embedded wallet SDKs so end users never see the concept.
      </p>
      <p style={pStyle}>
        On the infra side, paymaster volume has exploded — Coinbase Developer Platform, Pimlico, and Alchemy together sponsor more than 40% of L2 transactions in Q1 2026, most of them flowing through 7702-delegated EOAs on Base, Arbitrum, and Optimism.
      </p>

      <h2 style={h2Style}>6. Builder&apos;s Checklist</h2>
      <div style={cardStyle}>
        <ul>
          <li style={liStyle}>Pick an audited delegate (Safe, Nexus, Kernel, Light Account). Don&apos;t roll your own.</li>
          <li style={liStyle}>Scope authorizations to a specific chain ID and a finite nonce.</li>
          <li style={liStyle}>Expose a revocation path in your UI. Users must be able to undo delegation in one click.</li>
          <li style={liStyle}>Simulate the post-delegation call graph before signing — surface spending risk to the user.</li>
          <li style={liStyle}>If you sponsor gas, meter carefully and rate-limit by address to prevent paymaster drain attacks.</li>
          <li style={liStyle}>Remember storage collisions: delegate contracts share the EOA&apos;s storage slots. Use namespaced storage (ERC-7201) religiously.</li>
        </ul>
      </div>

      <h2 style={h2Style}>Related Reading</h2>
      <div style={cardStyle}>
        <ul>
          <li style={liStyle}><Link href="/learn/erc-4337-account-abstraction-guide-2026" style={{ color: '#60a5fa' }}>ERC-4337 Account Abstraction Complete Guide 2026</Link></li>
          <li style={liStyle}><Link href="/learn/ethereum-pectra-upgrade-guide-2026" style={{ color: '#60a5fa' }}>Ethereum Pectra Upgrade Full Breakdown 2026</Link></li>
          <li style={liStyle}><Link href="/learn/paymasters-sponsored-gas-guide-2026" style={{ color: '#60a5fa' }}>Paymasters and Sponsored Gas on L2s 2026</Link></li>
          <li style={liStyle}><Link href="/learn/safe-smart-accounts-guide-2026" style={{ color: '#60a5fa' }}>Safe Smart Accounts for Treasuries 2026</Link></li>
        </ul>
      </div>

      <BackToTop />
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Eip 7702 Account Abstraction Ethereum Pectra Guide 2026",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/eip-7702-account-abstraction-ethereum-pectra-guide-2026"
            })
          }}
        />
      </div>
  );
}
