import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Hyperlane Permissionless Interoperability Guide | Degen0x Learn`,
  description: `Comprehensive guide to Hyperlane's permissionless cross-chain messaging protocol. Learn how Hyperlane enables sovereign interoperability across blockchains with modular security modules and no gatekeepers.`,
  keywords: [
    `Hyperlane`,
    `cross-chain messaging`,
    `interoperability`,
    `permissionless`,
    `ISM`,
    `Warp Routes`,
    `blockchain bridges`,
    `Mailbox contracts`,
    `interchain accounts`,
    `crypto protocols`,
  ],
  openGraph: {
    title: `Hyperlane Permissionless Interoperability Guide | Degen0x Learn`,
    description: `Learn how Hyperlane enables sovereign, permissionless cross-chain messaging and token transfers.`,
    type: `article`,
    url: `https://degen0x.com/learn/hyperlane-permissionless-interoperability-guide-2026`,
  },
  twitter: {
    card: `summary_large_image`,
    title: `Hyperlane Permissionless Interoperability Guide | Degen0x Learn`,
    description: `Comprehensive guide to Hyperlane's permissionless cross-chain messaging protocol.`,
  },
};

export default function HyperlanePermissionlessGuide() {
  const styles = {
    container: `min-h-screen bg-[#0d1117] text-[#e6edf3] font-sans`,
    wrapper: `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12`,
    header: `mb-8 pb-8 border-b border-[#30363d]`,
    breadcrumb: `text-sm text-[#8b949e] mb-4 flex gap-2 items-center`,
    breadcrumbLink: `text-[#58a6ff] hover:underline cursor-pointer`,
    title: `text-4xl sm:text-5xl font-bold mb-4 text-[#e6edf3]`,
    subtitle: `text-lg text-[#8b949e] mb-6`,
    toc: `bg-[#161b22] border border-[#30363d] rounded-lg p-6 mb-8`,
    tocTitle: `text-xl font-bold mb-4 text-[#e6edf3]`,
    tocList: `space-y-2`,
    tocLink: `text-[#58a6ff] hover:underline cursor-pointer block`,
    section: `mb-12`,
    sectionTitle: `text-2xl sm:text-3xl font-bold mb-6 text-[#e6edf3] scroll-mt-20`,
    subsectionTitle: `text-xl font-bold mb-4 text-[#e6edf3] mt-8 scroll-mt-20`,
    paragraph: `text-[#e6edf3] mb-4 leading-relaxed`,
    infoBox: `bg-[#161b22] border-l-4 border-[#58a6ff] p-6 rounded-lg my-6`,
    infoBoxTitle: `font-bold text-[#e6edf3] mb-2`,
    infoBoxContent: `text-[#8b949e]`,
    table: `w-full border-collapse my-6`,
    tableHeader: `bg-[#161b22] border border-[#30363d]`,
    tableCell: `border border-[#30363d] px-4 py-3 text-left text-[#e6edf3]`,
    tableRow: `hover:bg-[#161b22] transition`,
    ul: `list-disc list-inside space-y-2 mb-4 text-[#e6edf3]`,
    li: `text-[#e6edf3]`,
    ol: `list-decimal list-inside space-y-2 mb-4 text-[#e6edf3]`,
    strong: `font-bold text-[#e6edf3]`,
    codeInline: `bg-[#161b22] border border-[#30363d] px-2 py-1 rounded text-[#79c0ff] font-mono text-sm`,
    codeBlock: `bg-[#161b22] border border-[#30363d] rounded-lg p-4 overflow-x-auto my-4 font-mono text-sm text-[#79c0ff]`,
    highlight: `text-[#58a6ff]`,
    faqItem: `bg-[#161b22] border border-[#30363d] rounded-lg p-6 mb-4`,
    faqQuestion: `font-bold text-[#e6edf3] mb-3 text-lg`,
    faqAnswer: `text-[#8b949e] leading-relaxed`,
  };

  return (
    <div style={{ backgroundColor: `#0d1117`, color: `#e6edf3` }} className={styles.container}>
      <div className={styles.wrapper}>
        {/* Breadcrumb Navigation */}
        <nav style={{ fontSize: `14px`, color: `#8b949e`, marginBottom: `16px` }} className={styles.breadcrumb}>
          <span style={{ cursor: `pointer`, color: `#58a6ff` }}>Degen0x</span>
          <span>/</span>
          <span style={{ cursor: `pointer`, color: `#58a6ff` }}>Learn</span>
          <span>/</span>
          <span>Hyperlane Permissionless Interoperability</span>
        </nav>

        {/* Header */}
        <header className={styles.header}>
          <h1 style={{ fontSize: `48px`, fontWeight: `bold`, marginBottom: `16px` }} className={styles.title}>
            Hyperlane: Permissionless Cross-Chain Interoperability
          </h1>
          <p style={{ fontSize: `18px`, color: `#8b949e` }} className={styles.subtitle}>
            A comprehensive guide to the sovereign, modular interoperability protocol enabling permissionless
            cross-chain messaging and token transfers.
          </p>
          <p style={{ fontSize: `14px`, color: `#8b949e`, marginTop: `12px` }}>
            Last Updated: April 2026 | Read Time: 15-20 minutes
          </p>
        </header>

        {/* Table of Contents */}
        <div
          style={{
            backgroundColor: `#161b22`,
            border: `1px solid #30363d`,
            borderRadius: `8px`,
            padding: `24px`,
            marginBottom: `32px`,
          }}
          className={styles.toc}
        >
          <h2 style={{ fontSize: `18px`, fontWeight: `bold`, marginBottom: `16px` }} className={styles.tocTitle}>
            Table of Contents
          </h2>
          <ul style={{ listStyle: `none`, padding: 0, margin: 0, display: `flex`, flexDirection: `column`, gap: `8px` }}>
            <li>
              <a style={{ color: `#58a6ff`, textDecoration: `none`, cursor: `pointer` }} href="#what-is-hyperlane">
                1. What is Hyperlane?
              </a>
            </li>
            <li>
              <a style={{ color: `#58a6ff`, textDecoration: `none`, cursor: `pointer` }} href="#key-differences">
                2. How Hyperlane Differs from Other Protocols
              </a>
            </li>
            <li>
              <a style={{ color: `#58a6ff`, textDecoration: `none`, cursor: `pointer` }} href="#architecture">
                3. Architecture and Core Components
              </a>
            </li>
            <li>
              <a style={{ color: `#58a6ff`, textDecoration: `none`, cursor: `pointer` }} href="#permissionless">
                4. Permissionless Deployment
              </a>
            </li>
            <li>
              <a style={{ color: `#58a6ff`, textDecoration: `none`, cursor: `pointer` }} href="#warp-routes">
                5. Warp Routes and Token Transfers
              </a>
            </li>
            <li>
              <a style={{ color: `#58a6ff`, textDecoration: `none`, cursor: `pointer` }} href="#interchain-accounts">
                6. Interchain Accounts and Queries
              </a>
            </li>
            <li>
              <a style={{ color: `#58a6ff`, textDecoration: `none`, cursor: `pointer` }} href="#security">
                7. Security Model and Modular ISMs
              </a>
            </li>
            <li>
              <a style={{ color: `#58a6ff`, textDecoration: `none`, cursor: `pointer` }} href="#ecosystem">
                8. Ecosystem and Adoption
              </a>
            </li>
            <li>
              <a style={{ color: `#58a6ff`, textDecoration: `none`, cursor: `pointer` }} href="#getting-started">
                9. Getting Started for Developers
              </a>
            </li>
            <li>
              <a style={{ color: `#58a6ff`, textDecoration: `none`, cursor: `pointer` }} href="#risks">
                10. Risks and Limitations
              </a>
            </li>
            <li>
              <a style={{ color: `#58a6ff`, textDecoration: `none`, cursor: `pointer` }} href="#faq">
                11. Frequently Asked Questions
              </a>
            </li>
          </ul>
        </div>

        {/* Section 1: What is Hyperlane */}
        <section id="what-is-hyperlane" className={styles.section} style={{ scrollMarginTop: `80px` }}>
          <h2 className={styles.sectionTitle}>What is Hyperlane?</h2>

          <p className={styles.paragraph}>
            Hyperlane is a <span style={{ color: `#58a6ff` }}>permissionless interoperability protocol</span> that enables
            any blockchain to communicate with any other blockchain without requiring approval from a centralized gatekeeper
            or validator set. Launched in 2023, Hyperlane has become one of the most flexible cross-chain messaging
            solutions in the crypto ecosystem, prioritizing <span style={{ color: `#58a6ff` }}>sovereign control</span> over
            trust assumptions.
          </p>

          <p className={styles.paragraph}>
            At its core, Hyperlane provides a standardized way for smart contracts on different blockchains to send messages,
            verify their authenticity, and trigger state changes across chains. Unlike centralized bridges that require trust
            in a multisig or validator set, Hyperlane allows each chain to define its own security model through modular
            <span style={{ color: `#58a6ff` }}> Interchain Security Modules (ISMs)</span>.
          </p>

          <div
            style={{
              backgroundColor: `#161b22`,
              borderLeft: `4px solid #58a6ff`,
              padding: `24px`,
              borderRadius: `8px`,
              marginTop: `24px`,
              marginBottom: `24px`,
            }}
          >
            <p style={{ fontWeight: `bold`, color: `#e6edf3`, marginBottom: `8px` }}>Key Innovation</p>
            <p style={{ color: `#8b949e`, margin: 0 }}>
              Hyperlane enables <span style={{ color: `#e6edf3` }}>sovereign consensus</span> — each chain can define who or
              what it trusts to verify cross-chain messages, rather than relying on a single global validator set.
            </p>
          </div>

          <h3 className={styles.subsectionTitle}>Core Features</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Permissionless deployment:</span> Deploy Hyperlane to any chain,
              including private or rollup chains
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Modular security:</span> Define your own security assumptions via ISMs
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Warp Routes:</span> Native cross-chain token transfers with customizable
              security
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Interchain accounts:</span> Control smart contracts on remote chains
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Interchain queries:</span> Read state from other chains
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Ecosystem-agnostic:</span> Works across EVM, Solana, Cosmos, and other
              chains
            </li>
          </ul>
        </section>

        {/* Section 2: Key Differences */}
        <section id="key-differences" className={styles.section} style={{ scrollMarginTop: `80px` }}>
          <h2 className={styles.sectionTitle}>How Hyperlane Differs from Other Protocols</h2>

          <p className={styles.paragraph}>
            The interoperability landscape includes several major players. Here&apos;s how Hyperlane distinguishes itself:
          </p>

          <div style={{ overflowX: `auto`, marginTop: `24px`, marginBottom: `24px` }}>
            <table style={{ width: `100%`, borderCollapse: `collapse` }}>
              <thead>
                <tr style={{ backgroundColor: `#161b22` }}>
                  <th style={{ border: `1px solid #30363d`, padding: `12px`, textAlign: `left`, color: `#e6edf3` }}>
                    Aspect
                  </th>
                  <th style={{ border: `1px solid #30363d`, padding: `12px`, textAlign: `left`, color: `#e6edf3` }}>
                    Hyperlane
                  </th>
                  <th style={{ border: `1px solid #30363d`, padding: `12px`, textAlign: `left`, color: `#e6edf3` }}>
                    LayerZero
                  </th>
                  <th style={{ border: `1px solid #30363d`, padding: `12px`, textAlign: `left`, color: `#e6edf3` }}>
                    Axelar
                  </th>
                  <th style={{ border: `1px solid #30363d`, padding: `12px`, textAlign: `left`, color: `#e6edf3` }}>
                    Wormhole
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>
                    <span style={{ fontWeight: `bold` }}>Permissionless</span>
                  </td>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>Yes</td>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>Limited</td>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>Limited</td>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>Limited</td>
                </tr>
                <tr style={{ backgroundColor: `rgba(22, 27, 34, 0.5)` }}>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>
                    <span style={{ fontWeight: `bold` }}>Security Model</span>
                  </td>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>Modular (ISMs)</td>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>Ultra Light Client</td>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>Validator Set</td>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>Guardian Set</td>
                </tr>
                <tr>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>
                    <span style={{ fontWeight: `bold` }}>Sovereign Consensus</span>
                  </td>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>Yes</td>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>No</td>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>Partial</td>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>Limited</td>
                </tr>
                <tr style={{ backgroundColor: `rgba(22, 27, 34, 0.5)` }}>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>
                    <span style={{ fontWeight: `bold` }}>Supported Chains</span>
                  </td>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>&gt;50</td>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>&gt;80</td>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>&gt;40</td>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>&gt;30</td>
                </tr>
                <tr>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>
                    <span style={{ fontWeight: `bold` }}>Governance Token</span>
                  </td>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>None</td>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>ZRO</td>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>AXL</td>
                  <td style={{ border: `1px solid #30363d`, padding: `12px`, color: `#e6edf3` }}>W</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.subsectionTitle}>Why Choose Hyperlane?</h3>
          <p className={styles.paragraph}>
            <span style={{ color: `#58a6ff` }}>Permissionless by default:</span> Unlike LayerZero and Axelar which require
            approval to deploy to new chains, Hyperlane allows anyone to deploy and operate the protocol on any blockchain.
          </p>

          <p className={styles.paragraph}>
            <span style={{ color: `#58a6ff` }}>Sovereign control:</span> Each chain defines its own security assumptions
            rather than trusting a global set of validators or guardians. This eliminates single points of failure.
          </p>

          <p className={styles.paragraph}>
            <span style={{ color: `#58a6ff` }}>No governance token:</span> Hyperlane has no native token, reducing
            incentive misalignment and protocol dependencies. Value flows directly to relayers and validators.
          </p>
        </section>

        {/* Section 3: Architecture */}
        <section id="architecture" className={styles.section} style={{ scrollMarginTop: `80px` }}>
          <h2 className={styles.sectionTitle}>Architecture and Core Components</h2>

          <p className={styles.paragraph}>
            Hyperlane&apos;s architecture consists of three main layers: contracts, off-chain relayers, and security modules.
            Understanding each is crucial to using the protocol effectively.
          </p>

          <h3 className={styles.subsectionTitle}>1. Mailbox Contracts</h3>

          <p className={styles.paragraph}>
            The <span style={{ color: `#58a6ff` }}>Mailbox</span> is the central smart contract deployed on each chain. It
            handles:
          </p>

          <ul className={styles.ul}>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Message sending:</span> Contracts call <span style={{ color: `#79c0ff` }}>dispatch()</span> to send cross-chain messages
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Message proving:</span> Relayers prove message inclusion in merkle roots
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Message delivery:</span> Relayers call <span style={{ color: `#79c0ff` }}>process()</span> to deliver verified messages
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Gas accounting:</span> Tracks gas costs and payment for cross-chain
              execution
            </li>
          </ul>

          <p className={styles.paragraph}>
            Each chain maintains its own independent Mailbox. Messages are identified by a unique hash that includes sender,
            recipient, nonce, and body.
          </p>

          <h3 className={styles.subsectionTitle}>2. Interchain Security Modules (ISMs)</h3>

          <p className={styles.paragraph}>
            ISMs are the core innovation of Hyperlane. Instead of a single global validator set, ISMs allow each contract to
            define custom security thresholds and verification logic.
          </p>

          <div
            style={{
              backgroundColor: `#161b22`,
              borderLeft: `4px solid #58a6ff`,
              padding: `24px`,
              borderRadius: `8px`,
              marginTop: `24px`,
              marginBottom: `24px`,
            }}
          >
            <p style={{ fontWeight: `bold`, color: `#e6edf3`, marginBottom: `8px` }}>ISM Types</p>
            <ul style={{ listStyle: `disc`, listStylePosition: `inside`, margin: 0 }}>
              <li style={{ color: `#8b949e`, marginBottom: `8px` }}>
                <span style={{ color: `#e6edf3` }}>Multisig ISM:</span> Requires M-of-N validator signatures
              </li>
              <li style={{ color: `#8b949e`, marginBottom: `8px` }}>
                <span style={{ color: `#e6edf3` }}>Merkle ISM:</span> Verifies merkle roots from origin chain block headers
              </li>
              <li style={{ color: `#8b949e`, marginBottom: `8px` }}>
                <span style={{ color: `#e6edf3` }}>Light client ISM:</span> Verifies light client consensus (PoS validator
                signatures)
              </li>
              <li style={{ color: `#8b949e` }}>
                <span style={{ color: `#e6edf3` }}>Custom ISM:</span> Deploy any custom verification logic
              </li>
            </ul>
          </div>

          <p className={styles.paragraph}>
            ISMs can be composed into <span style={{ color: `#58a6ff` }}>routing ISMs</span> that apply different security
            levels based on message size, sender, or other conditions. This flexibility is what makes Hyperlane truly
            permissionless.
          </p>

          <h3 className={styles.subsectionTitle}>3. Relayers and Validators</h3>

          <p className={styles.paragraph}>
            <span style={{ color: `#58a6ff` }}>Relayers</span> are off-chain actors that:
          </p>

          <ul className={styles.ul}>
            <li className={styles.li}>Monitor the origin chain Mailbox for dispatched messages</li>
            <li className={styles.li}>Retrieve merkle proofs from the origin chain</li>
            <li className={styles.li}>Submit proofs to the destination chain Mailbox</li>
            <li className={styles.li}>Call <span style={{ color: `#79c0ff` }}>process()</span> to deliver the message</li>
          </ul>

          <p className={styles.paragraph}>
            <span style={{ color: `#58a6ff` }}>Validators</span> (ISM participants) sign messages and merkle roots. They are
            economically incentivized via relayer competition and optional slashing mechanisms.
          </p>

          <h3 className={styles.subsectionTitle}>Message Flow Diagram</h3>

          <div
            style={{
              backgroundColor: `#161b22`,
              border: `1px solid #30363d`,
              borderRadius: `8px`,
              padding: `24px`,
              marginTop: `24px`,
              marginBottom: `24px`,
            }}
          >
            <pre
              style={{
                color: `#79c0ff`,
                fontSize: `12px`,
                margin: 0,
                fontFamily: `monospace`,
                whiteSpace: `pre-wrap`,
                wordWrap: `break-word`,
              }}
            >
{`Origin Chain              Relayer              Destination Chain
   │                         │                          │
   │  dispatch(message)      │                          │
   ├────────────────────────>│                          │
   │                         │                          │
   │  (merkle root update)   │                          │
   │                         │  process(message,proof)  │
   │                         ├─────────────────────────>│
   │                         │                          │
   │                         │        ISM verifies      │
   │                         │          proof           │
   │                         │                          │
   │                         │  (execute handler)       │
   │                         │<─────────────────────────┤
   │                         │                          │`}
            </pre>
          </div>
        </section>

        {/* Section 4: Permissionless Deployment */}
        <section id="permissionless" className={styles.section} style={{ scrollMarginTop: `80px` }}>
          <h2 className={styles.sectionTitle}>Permissionless Deployment</h2>

          <p className={styles.paragraph}>
            One of Hyperlane&apos;s most powerful features is that <span style={{ color: `#58a6ff` }}>anyone can deploy</span>{' '}
            the Mailbox contract and supporting infrastructure to any blockchain without needing approval from the Hyperlane
            team, a DAO, or any gatekeeper.
          </p>

          <h3 className={styles.subsectionTitle}>Why This Matters</h3>

          <p className={styles.paragraph}>
            Traditional bridges like Axelar and LayerZero require formal governance approval to add support for new chains.
            This creates bottlenecks and centralized decision-making. Hyperlane&apos;s permissionless model means:
          </p>

          <ul className={styles.ul}>
            <li className={styles.li}>Private rollups can integrate Hyperlane immediately</li>
            <li className={styles.li}>Testnets and staging environments can use real interoperability</li>
            <li className={styles.li}>Experimental chains (like new rollups or sidechains) get bridge support day one</li>
            <li className={styles.li}>No single entity can block integration</li>
          </ul>

          <h3 className={styles.subsectionTitle}>How to Deploy</h3>

          <p className={styles.paragraph}>
            Deploying Hyperlane involves:
          </p>

          <ol className={styles.ol}>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Deploy Mailbox contract:</span> Published by Hyperlane, same code across
              chains
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Deploy ISMs:</span> Define your chain&apos;s security assumptions
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Set up relayers:</span> Run or hire relayers to relay messages
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Register routes:</span> Connect to Hyperlane&apos;s domain registry
            </li>
          </ol>

          <div
            style={{
              backgroundColor: `#161b22`,
              borderLeft: `4px solid #58a6ff`,
              padding: `24px`,
              borderRadius: `8px`,
              marginTop: `24px`,
              marginBottom: `24px`,
            }}
          >
            <p style={{ fontWeight: `bold`, color: `#e6edf3`, marginBottom: `8px` }}>Example: Arbitrum Nova</p>
            <p style={{ color: `#8b949e`, margin: 0 }}>
              Arbitrum Nova enabled Hyperlane support without waiting for approval. The team deployed the Mailbox,
              configured a light client ISM to verify messages from Ethereum, and Hyperlane integration was live.
            </p>
          </div>
        </section>

        {/* Section 5: Warp Routes */}
        <section id="warp-routes" className={styles.section} style={{ scrollMarginTop: `80px` }}>
          <h2 className={styles.sectionTitle}>Warp Routes and Token Transfers</h2>

          <p className={styles.paragraph}>
            <span style={{ color: `#58a6ff` }}>Warp Routes</span> are Hyperlane&apos;s solution for native cross-chain token
            transfers. Unlike wrapped token bridges, Warp Routes allow tokens to move directly between chains with full
            control over the security model.
          </p>

          <h3 className={styles.subsectionTitle}>How Warp Routes Work</h3>

          <p className={styles.paragraph}>
            A Warp Route consists of a pair of contracts: a <span style={{ color: `#58a6ff` }}>HypSynthetic</span> token on
            the destination chain and a <span style={{ color: `#58a6ff` }}>HypCollateral</span> contract locking the original
            token on the origin chain.
          </p>

          <p className={styles.paragraph}>
            When you transfer tokens via a Warp Route:
          </p>

          <ol className={styles.ol}>
            <li className={styles.li}>
              Tokens are locked (or burned) on the origin chain via the Mailbox
            </li>
            <li className={styles.li}>
              A cross-chain message is dispatched to the destination chain
            </li>
            <li className={styles.li}>
              Relayers prove message inclusion and submit it to the destination
            </li>
            <li className={styles.li}>
              The destination contract mints synthetic tokens (or releases locked tokens)
            </li>
            <li className={styles.li}>
              Tokens can be transferred back in the same manner
            </li>
          </ol>

          <h3 className={styles.subsectionTitle}>Types of Warp Routes</h3>

          <div
            style={{
              backgroundColor: `#161b22`,
              borderLeft: `4px solid #58a6ff`,
              padding: `24px`,
              borderRadius: `8px`,
              marginTop: `24px`,
              marginBottom: `24px`,
            }}
          >
            <p style={{ color: `#8b949e`, marginBottom: `8px` }}>
              <span style={{ color: `#e6edf3` }}>Collateral routes:</span> Lock tokens on origin, mint on destination
            </p>
            <p style={{ color: `#8b949e`, marginBottom: `8px` }}>
              <span style={{ color: `#e6edf3` }}>Synthetic routes:</span> Mint synthetic tokens on non-origin chains
            </p>
            <p style={{ color: `#8b949e` }}>
              <span style={{ color: `#e6edf3` }}>NFT routes:</span> Transfer ERC-721 and ERC-1155 NFTs across chains
            </p>
          </div>

          <h3 className={styles.subsectionTitle}>Custom Security for Token Transfers</h3>

          <p className={styles.paragraph}>
            Unlike centralized bridges with fixed security, Warp Routes inherit the destination chain&apos;s ISM. You can
            create a Warp Route with:
          </p>

          <ul className={styles.ul}>
            <li className={styles.li}>Light client verification (most secure, requires on-chain headers)</li>
            <li className={styles.li}>Validator multisig (faster, requires trust in validators)</li>
            <li className={styles.li}>Optimistic mode (cheapest, assumes honesty with fraud proving)</li>
          </ul>

          <p className={styles.paragraph}>
            This flexibility means you can trade security for cost, or vice versa, on a per-route basis.
          </p>
        </section>

        {/* Section 6: Interchain Accounts & Queries */}
        <section id="interchain-accounts" className={styles.section} style={{ scrollMarginTop: `80px` }}>
          <h2 className={styles.sectionTitle}>Interchain Accounts and Queries</h2>

          <p className={styles.paragraph}>
            Beyond token transfers, Hyperlane enables two powerful primitives for cross-chain smart contract interaction:
            interchain accounts and interchain queries.
          </p>

          <h3 className={styles.subsectionTitle}>Interchain Accounts (ICA)</h3>

          <p className={styles.paragraph}>
            Interchain accounts allow a smart contract on one chain to control a contract on another chain. An ICA is a
            contract address derived from your origin account, deployed on the destination chain.
          </p>

          <p className={styles.paragraph}>
            Use cases include:
          </p>

          <ul className={styles.ul}>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Liquidations:</span> Liquidate positions on other chains from your primary
              chain
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Portfolio management:</span> Rebalance assets across chains atomically
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Governance:</span> Execute proposals across multiple chains
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Revenue streams:</span> Collect fees from multiple chains to a single
              address
            </li>
          </ul>

          <div
            style={{
              backgroundColor: `#161b22`,
              borderLeft: `4px solid #58a6ff`,
              padding: `24px`,
              borderRadius: `8px`,
              marginTop: `24px`,
              marginBottom: `24px`,
            }}
          >
            <p style={{ fontWeight: `bold`, color: `#e6edf3`, marginBottom: `8px` }}>Example: Cross-Chain Liquidation</p>
            <p style={{ color: `#8b949e` }}>
              A user has a &lt;$1M undercollateralized position on Polygon. Their account on Ethereum calls an interchain
              account on Polygon to withdraw collateral and pay down debt, all in a single cross-chain message.
            </p>
          </div>

          <h3 className={styles.subsectionTitle}>Interchain Queries (ICQ)</h3>

          <p className={styles.paragraph}>
            Interchain queries allow contracts to read state from other chains without message delivery guarantees. ICQs are
            useful for:
          </p>

          <ul className={styles.ul}>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Price feeds:</span> Query oracle prices from other chains
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Balance checks:</span> Verify a user&apos;s balance on another chain
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Governance data:</span> Read vote counts or delegation data from other
              chains
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>State verification:</span> Prove that a condition occurred on another chain
            </li>
          </ul>

          <p className={styles.paragraph}>
            ICQs are asynchronous (not immediate like smart contract calls on Ethereum), so they&apos;re best for
            non-time-sensitive reads.
          </p>
        </section>

        {/* Section 7: Security */}
        <section id="security" className={styles.section} style={{ scrollMarginTop: `80px` }}>
          <h2 className={styles.sectionTitle}>Security Model and Modular ISMs</h2>

          <p className={styles.paragraph}>
            Hyperlane&apos;s security model is fundamentally different from centralized bridges. Instead of trusting a
            global set of validators or guardians, each chain defines its own trust assumptions.
          </p>

          <h3 className={styles.subsectionTitle}>Sovereign Consensus Principle</h3>

          <p className={styles.paragraph}>
            The core principle is <span style={{ color: `#58a6ff` }}>sovereign consensus</span>: every blockchain should be
            able to define the security assumptions for messages entering its network. This eliminates common sources of
            bridge failures:
          </p>

          <ul className={styles.ul}>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>No global validator set:</span> If a validator is compromised, only
              specific message routes are affected, not all cross-chain communication
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>No single bridge failure:</span> Users choose which ISM to trust for each
              route
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Graceful degradation:</span> If an ISM fails, only that specific route is
              affected
            </li>
          </ul>

          <h3 className={styles.subsectionTitle}>ISM Security Trade-offs</h3>

          <p className={styles.paragraph}>
            Each ISM type represents a different point on the security vs. cost spectrum:
          </p>

          <div
            style={{
              backgroundColor: `#161b22`,
              borderLeft: `4px solid #58a6ff`,
              padding: `24px`,
              borderRadius: `8px`,
              marginTop: `24px`,
              marginBottom: `24px`,
            }}
          >
            <p style={{ color: `#8b949e`, marginBottom: `12px` }}>
              <span style={{ color: `#e6edf3`, fontWeight: `bold` }}>Light Client ISM:</span> Most secure (verifies full
              validator signatures), highest gas cost, requires origin chain header syncing
            </p>
            <p style={{ color: `#8b949e`, marginBottom: `12px` }}>
              <span style={{ color: `#e6edf3`, fontWeight: `bold` }}>Multisig ISM:</span> Good security for lower cost,
              depends on validator set honesty, faster confirmation
            </p>
            <p style={{ color: `#8b949e` }}>
              <span style={{ color: `#e6edf3`, fontWeight: `bold` }}>Optimistic ISM:</span> Lowest cost, assumes honesty
              with fraud proving for slashing
            </p>
          </div>

          <h3 className={styles.subsectionTitle}>Known Attack Vectors</h3>

          <p className={styles.paragraph}>
            While Hyperlane&apos;s modular approach is more resilient than centralized bridges, developers should be aware
            of potential risks:
          </p>

          <ul className={styles.ul}>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Validator collusion:</span> If you use a multisig ISM, malicious validators
              can forge messages
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Relayer front-running:</span> Relayers can choose to withhold or delay
              message delivery
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Header syncing failures:</span> Light client ISMs require up-to-date origin
              chain headers; if syncing breaks, messages can&apos;t be verified
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Routing errors:</span> Misconfigured ISM routing can lead to messages being
              rejected or delivered to wrong handlers
            </li>
          </ul>

          <h3 className={styles.subsectionTitle}>Security Best Practices</h3>

          <ul className={styles.ul}>
            <li className={styles.li}>Use light client ISMs for high-value transfers</li>
            <li className={styles.li}>Set reasonable timeout thresholds for pending messages</li>
            <li className={styles.li}>Monitor relayer behavior and ISM validator set health</li>
            <li className={styles.li}>Test cross-chain contract logic thoroughly on testnets</li>
            <li className={styles.li}>Use message nonces to prevent replay attacks</li>
          </ul>
        </section>

        {/* Section 8: Ecosystem */}
        <section id="ecosystem" className={styles.section} style={{ scrollMarginTop: `80px` }}>
          <h2 className={styles.sectionTitle}>Ecosystem and Adoption</h2>

          <p className={styles.paragraph}>
            As of April 2026, Hyperlane has grown to support over 50 blockchains and has been integrated by dozens of
            protocols across DeFi, NFTs, and infrastructure.
          </p>

          <h3 className={styles.subsectionTitle}>Supported Chains</h3>

          <p className={styles.paragraph}>
            Hyperlane now enables interoperability across:
          </p>

          <ul className={styles.ul}>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Ethereum and Layer 2s:</span> Arbitrum, Optimism, Polygon, zkSync, Base
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Cosmos ecosystem:</span> Cosmoshub, Osmosis, Juno, Injective
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Solana:</span> Full interoperability with SPL tokens
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Avalanche:</span> C-Chain and subnets
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Binance Smart Chain:</span> Full support with optimized ISMs
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Custom rollups:</span> Arbitrum Orbit, OP Stack, Polygon CDK
            </li>
          </ul>

          <h3 className={styles.subsectionTitle}>Major Protocols Using Hyperlane</h3>

          <div
            style={{
              backgroundColor: `#161b22`,
              borderLeft: `4px solid #58a6ff`,
              padding: `24px`,
              borderRadius: `8px`,
              marginTop: `24px`,
              marginBottom: `24px`,
            }}
          >
            <p style={{ color: `#8b949e`, marginBottom: `10px` }}>
              <span style={{ color: `#e6edf3` }}>Yield aggregators:</span> Leveraging Warp Routes to bridge assets across
              yield markets
            </p>
            <p style={{ color: `#8b949e`, marginBottom: `10px` }}>
              <span style={{ color: `#e6edf3` }}>Derivatives platforms:</span> Using interchain accounts for liquidations
              across chains
            </p>
            <p style={{ color: `#8b949e`, marginBottom: `10px` }}>
              <span style={{ color: `#e6edf3` }}>DEXs and AMMs:</span> Enabling cross-chain swaps with Hyperlane messaging
            </p>
            <p style={{ color: `#8b949e` }}>
              <span style={{ color: `#e6edf3` }}>Governance systems:</span> Executing DAO votes across multiple chains
            </p>
          </div>

          <h3 className={styles.subsectionTitle}>Developer Activity</h3>

          <p className={styles.paragraph}>
            Hyperlane&apos;s GitHub repositories have seen strong community contribution, with developers actively deploying
            new ISMs, building Warp Routes, and creating cross-chain dApps. The permissionless model has led to a vibrant
            ecosystem of third-party relayers and infrastructure providers.
          </p>
        </section>

        {/* Section 9: Getting Started */}
        <section id="getting-started" className={styles.section} style={{ scrollMarginTop: `80px` }}>
          <h2 className={styles.sectionTitle}>Getting Started for Developers</h2>

          <h3 className={styles.subsectionTitle}>Environment Setup</h3>

          <p className={styles.paragraph}>
            To start building with Hyperlane:
          </p>

          <ol className={styles.ol}>
            <li className={styles.li}>
              Install the Hyperlane CLI: <span style={{ color: `#79c0ff` }}>npm install -g @hyperlane-xyz/cli</span>
            </li>
            <li className={styles.li}>
              Clone the Hyperlane monorepo: <span style={{ color: `#79c0ff` }}>git clone https://github.com/hyperlane-xyz/hyperlane-monorepo</span>
            </li>
            <li className={styles.li}>
              Review the TypeScript SDK: <span style={{ color: `#79c0ff` }}>@hyperlane-xyz/sdk</span>
            </li>
            <li className={styles.li}>Explore example contracts in the <span style={{ color: `#79c0ff` }}>solidity</span> directory</li>
          </ol>

          <h3 className={styles.subsectionTitle}>Writing Your First Cross-Chain Contract</h3>

          <p className={styles.paragraph}>
            Here&apos;s a minimal example of a contract that sends a message:
          </p>

          <div
            style={{
              backgroundColor: `#161b22`,
              border: `1px solid #30363d`,
              borderRadius: `8px`,
              padding: `16px`,
              marginTop: `16px`,
              marginBottom: `16px`,
              overflowX: `auto`,
            }}
          >
            <pre style={{ color: `#79c0ff`, fontSize: `12px`, margin: 0, fontFamily: `monospace` }}>
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IMailbox} from '@hyperlane-xyz/core/interfaces/IMailbox.sol';

contract HelloWorld {
    IMailbox public mailbox;

    constructor(address _mailbox) {
        mailbox = IMailbox(_mailbox);
    }

    function sendMessage(
        uint32 destinationDomain,
        address recipient,
        string calldata message
    ) external payable returns (bytes32) {
        bytes memory body = abi.encode(recipient, message);
        return mailbox.dispatch{value: msg.value}(
            destinationDomain,
            abi.encodePacked(recipient),
            body
        );
    }
}`}
            </pre>
          </div>

          <h3 className={styles.subsectionTitle}>Deploying to Testnet</h3>

          <p className={styles.paragraph}>
            Hyperlane is deployed on all major testnets (Sepolia, Mumbai, Fuji, etc.). To test:
          </p>

          <ol className={styles.ol}>
            <li className={styles.li}>Deploy your contract to two different testnet chains</li>
            <li className={styles.li}>
              Configure the ISM for each chain in your contract&apos;s constructor
            </li>
            <li className={styles.li}>Call the send function with destination domain ID</li>
            <li className={styles.li}>Monitor transaction on the explorer</li>
            <li className={styles.li}>Wait for relayers to process the message (typically 5-10 minutes)</li>
          </ol>

          <h3 className={styles.subsectionTitle}>Important Addresses (Mainnet)</h3>

          <p className={styles.paragraph}>
            Key contract addresses vary by chain. Use the Hyperlane documentation to find:
          </p>

          <ul className={styles.ul}>
            <li className={styles.li}>Mailbox address for your chain</li>
            <li className={styles.li}>ISM addresses (Multisig, Light Client, etc.)</li>
            <li className={styles.li}>Warp Route deployments for token pairs</li>
          </ul>

          <p className={styles.paragraph}>
            All addresses are published in the <span style={{ color: `#79c0ff` }}>@hyperlane-xyz/registry</span> npm
            package.
          </p>

          <h3 className={styles.subsectionTitle}>Resources</h3>

          <ul className={styles.ul}>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Hyperlane Docs:</span> https://docs.hyperlane.xyz
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>GitHub:</span> https://github.com/hyperlane-xyz/hyperlane-monorepo
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Discord:</span> Community support and dev discussions
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Example contracts:</span> https://github.com/hyperlane-xyz/example-contracts
            </li>
          </ul>
        </section>

        {/* Section 10: Risks */}
        <section id="risks" className={styles.section} style={{ scrollMarginTop: `80px` }}>
          <h2 className={styles.sectionTitle}>Risks and Limitations</h2>

          <p className={styles.paragraph}>
            While Hyperlane offers significant advantages, users and developers should be aware of potential risks and
            limitations.
          </p>

          <h3 className={styles.subsectionTitle}>Technical Risks</h3>

          <ul className={styles.ul}>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Message ordering:</span> Messages are not guaranteed to arrive in order;
              applications must handle reordering
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Timeout risk:</span> If relayers don&apos;t process a message, it may be
              stuck indefinitely
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>ISM misconfiguration:</span> Incorrectly configured ISMs can reject valid
              messages or accept invalid ones
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Chain reorg risk:</span> Deep reorganizations on source chains can
              invalidate message proofs
            </li>
          </ul>

          <h3 className={styles.subsectionTitle}>Economic Risks</h3>

          <ul className={styles.ul}>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Relayer incentives:</span> If relayer rewards are too low, messages may
              not be relayed
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Validator incentives:</span> Underfunded ISM validators may go offline
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Gas price spikes:</span> Cross-chain messages are expensive during network
              congestion
            </li>
          </ul>

          <h3 className={styles.subsectionTitle}>Operational Risks</h3>

          <ul className={styles.ul}>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Relayer availability:</span> Relayers can go offline, halting message
              delivery
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Smart contract bugs:</span> Bugs in ISMs or message handlers can lock
              funds
            </li>
            <li className={styles.li}>
              <span style={{ color: `#58a6ff` }}>Oracle risks:</span> Light client ISMs depend on header syncing, which can
              break if oracles fail
            </li>
          </ul>

          <h3 className={styles.subsectionTitle}>Mitigating Risks</h3>

          <div
            style={{
              backgroundColor: `#161b22`,
              borderLeft: `4px solid #58a6ff`,
              padding: `24px`,
              borderRadius: `8px`,
              marginTop: `24px`,
              marginBottom: `24px`,
            }}
          >
            <ul style={{ listStyle: `disc`, listStylePosition: `inside`, margin: 0 }}>
              <li style={{ color: `#8b949e`, marginBottom: `10px` }}>
                Audit ISM and contract logic by professional security firms
              </li>
              <li style={{ color: `#8b949e`, marginBottom: `10px` }}>
                Use multiple relayers to avoid single relayer failures
              </li>
              <li style={{ color: `#8b949e`, marginBottom: `10px` }}>
                Implement timeouts and fallback logic in application code
              </li>
              <li style={{ color: `#8b949e` }}>
                Start with smaller amounts on testnet before mainnet deployment
              </li>
            </ul>
          </div>
        </section>

        {/* Section 11: FAQ */}
        <section id="faq" className={styles.section} style={{ scrollMarginTop: `80px` }}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>

          <div
            style={{
              backgroundColor: `#161b22`,
              border: `1px solid #30363d`,
              borderRadius: `8px`,
              padding: `24px`,
              marginBottom: `24px`,
            }}
          >
            <p style={{ fontWeight: `bold`, color: `#e6edf3`, marginBottom: `12px`, fontSize: `16px` }}>
              How does Hyperlane differ from a traditional multisig bridge?
            </p>
            <p style={{ color: `#8b949e`, margin: 0, lineHeight: `1.6` }}>
              Traditional multisig bridges have a fixed set of signers that approve all cross-chain transfers. Hyperlane
              allows each chain to define its own security model via ISMs. You can use a multisig ISM, but you can also use
              light client verification, optimistic proving, or custom logic. This modularity means you&apos;re not locked into a
              single trust assumption across all routes.
            </p>
          </div>

          <div
            style={{
              backgroundColor: `#161b22`,
              border: `1px solid #30363d`,
              borderRadius: `8px`,
              padding: `24px`,
              marginBottom: `24px`,
            }}
          >
            <p style={{ fontWeight: `bold`, color: `#e6edf3`, marginBottom: `12px`, fontSize: `16px` }}>
              Can I use Hyperlane without running my own relayer?
            </p>
            <p style={{ color: `#8b949e`, margin: 0, lineHeight: `1.6` }}>
              Yes. The Hyperlane team and community operate public relayers that serve all registered routes. However, for
              critical applications, running your own relayer ensures message delivery isn&apos;t dependent on third parties.
              Relayers are lightweight and can run on commodity hardware.
            </p>
          </div>

          <div
            style={{
              backgroundColor: `#161b22`,
              border: `1px solid #30363d`,
              borderRadius: `8px`,
              padding: `24px`,
              marginBottom: `24px`,
            }}
          >
            <p style={{ fontWeight: `bold`, color: `#e6edf3`, marginBottom: `12px`, fontSize: `16px` }}>
              What happens if a message delivery fails?
            </p>
            <p style={{ color: `#8b949e`, margin: 0, lineHeight: `1.6` }}>
              Messages that aren&apos;t processed within a certain timeframe (default is 1 week) are considered failed. The
              sender can claim a refund or retry with a different ISM. Applications should implement timeout logic to handle
              failed messages gracefully.
            </p>
          </div>

          <div
            style={{
              backgroundColor: `#161b22`,
              border: `1px solid #30363d`,
              borderRadius: `8px`,
              padding: `24px`,
              marginBottom: `24px`,
            }}
          >
            <p style={{ fontWeight: `bold`, color: `#e6edf3`, marginBottom: `12px`, fontSize: `16px` }}>
              How much does it cost to send a cross-chain message?
            </p>
            <p style={{ color: `#8b949e`, margin: 0, lineHeight: `1.6` }}>
              Costs vary by origin and destination chains, message size, and gas prices. A typical Warp Route token transfer
              costs between $2-50 depending on network congestion. Custom messages may be cheaper or more expensive depending
              on computation. Use the Hyperlane estimator tool to calculate exact costs for your use case.
            </p>
          </div>

          <div
            style={{
              backgroundColor: `#161b22`,
              border: `1px solid #30363d`,
              borderRadius: `8px`,
              padding: `24px`,
              marginBottom: `24px`,
            }}
          >
            <p style={{ fontWeight: `bold`, color: `#e6edf3`, marginBottom: `12px`, fontSize: `16px` }}>
              Is Hyperlane audited?
            </p>
            <p style={{ color: `#8b949e`, margin: 0, lineHeight: `1.6` }}>
              Hyperlane&apos;s core contracts have been audited by multiple firms including Trail of Bits, Certora, and Zellic.
              However, individual ISM implementations and Warp Routes should be audited separately based on your risk
              tolerance. Always review code before deploying to mainnet with significant funds.
            </p>
          </div>

          <div
            style={{
              backgroundColor: `#161b22`,
              border: `1px solid #30363d`,
              borderRadius: `8px`,
              padding: `24px`,
              marginBottom: `24px`,
            }}
          >
            <p style={{ fontWeight: `bold`, color: `#e6edf3`, marginBottom: `12px`, fontSize: `16px` }}>
              Can I deploy Hyperlane to my private blockchain?
            </p>
            <p style={{ color: `#8b949e`, margin: 0, lineHeight: `1.6` }}>
              Absolutely. One of Hyperlane&apos;s core strengths is permissionless deployment. You can deploy the Mailbox
              contracts and ISMs to any EVM-compatible chain, including private blockchains and sidechains. Configure your own
              validators or relayers and you have full interoperability without any external dependencies.
            </p>
          </div>
        </section>

        {/* Footer CTA */}
        <div
          style={{
            borderTop: `1px solid #30363d`,
            marginTop: `48px`,
            paddingTop: `32px`,
            textAlign: `center`,
          }}
        >
          <h3 style={{ fontSize: `20px`, fontWeight: `bold`, color: `#e6edf3`, marginBottom: `16px` }}>Ready to Build?</h3>
          <p style={{ color: `#8b949e`, marginBottom: `24px`, fontSize: `16px` }}>
            Start exploring Hyperlane with the documentation, join the developer community, and deploy your first
            cross-chain application.
          </p>
          <div style={{ display: `flex`, gap: `16px`, justifyContent: `center`, flexWrap: `wrap` }}>
            <a
              href="https://docs.hyperlane.xyz"
              style={{
                backgroundColor: `#161b22`,
                border: `1px solid #30363d`,
                color: `#58a6ff`,
                padding: `12px 24px`,
                borderRadius: `6px`,
                textDecoration: `none`,
                fontSize: `14px`,
                fontWeight: `500`,
                cursor: `pointer`,
              }}
            >
              Read the Docs
            </a>
            <a
              href="https://github.com/hyperlane-xyz"
              style={{
                backgroundColor: `#161b22`,
                border: `1px solid #30363d`,
                color: `#58a6ff`,
                padding: `12px 24px`,
                borderRadius: `6px`,
                textDecoration: `none`,
                fontSize: `14px`,
                fontWeight: `500`,
                cursor: `pointer`,
              }}
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
