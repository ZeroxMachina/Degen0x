import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Public vs Private Key Cryptography Explained 2026: ECDSA,",
  description: "Master public/private key cryptography: asymmetric encryption, elliptic curves (secp256k1), key derivation (HD wallets BIP-32/44), digital signatures (ECDSA),",
  keywords: ['public key', 'private key', 'cryptography', 'ECDSA', 'elliptic curve', 'secp256k1', 'HD wallet', 'BIP-32', 'BIP-44', 'BIP-39', 'mnemonic', 'multi-sig', 'digital signature', 'quantum computing'],
  openGraph: {
    type: 'article',
    title: 'Public vs Private Key Cryptography Explained 2026: ECDSA, HD Wallets, BIP-32/44 & Quantum Risk',
    description: 'Complete guide to crypto key cryptography, wallet standards, and future threats.',
    publishedTime: '2026-04-10T00:00:00Z',
    modifiedTime: '2026-04-10T00:00:00Z',
    url: 'https://degen0x.com/learn/public-key-vs-private-key-crypto',
    images: [{
      url: 'https://degen0x.com/og-learn.svg',
      width: 1200,
      height: 630,
      alt: 'Public vs Private Key Guide',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Public vs Private Key Cryptography Explained 2026',
    description: 'Master cryptography fundamentals and key management.',
    image: 'https://degen0x.com/og-learn.svg',
  },
  alternates: {
    canonical: 'https://degen0x.com/learn/public-key-vs-private-key-crypto',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Public vs Private Key Cryptography Explained 2026: ECDSA, HD Wallets, BIP-32/44 & Quantum Risk',
  description: 'Complete guide to crypto key cryptography, BIP standards, and security.',
  image: 'https://degen0x.com/og-learn.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is asymmetric encryption and how does it work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Asymmetric encryption uses two mathematically linked keys: public key (anyone can see) and private key (secret). Mechanism: public key = lock, private key = key. Anyone can encrypt data with public key (secure). Only private key holder can decrypt. Example: Alice sends Bob encrypted message with Bob\'s public key. Only Bob (with private key) can decrypt. Used in crypto: public key = wallet address (receive payments), private key = sign transactions (spend). Security: mathematically impossible to derive private key from public key (in polynomial time). Based on elliptic curve math (secp256k1 for Bitcoin/Ethereum). Key size: 256-bit private key → 256-bit public key (cryptographically strong).',
        },
      },
      {
        '@type': 'Question',
        name: 'What is secp256k1 and why use it for crypto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'secp256k1 = standards for elliptic curve cryptography. "sec" = Certicom\'s standards, "p256" = prime field with 256 bits, "k1" = Koblitz curve equation y² = x³ + 7. Chosen by Bitcoin (2009), now standard for Ethereum, Bitcoin, Polkadot, most cryptos. Why secp256k1? (1) Well-studied (40+ years research), (2) Fast verification (key operation for blockchain), (3) No NSA backdoor (not like NIST P-256, which has suspicious design). Alternatives: ed25519 (Solana, faster, different properties), BLS (Ethereum 2.0 staking, signature aggregation). Security: secp256k1 256-bit key = 128-bit security level (due to birthday paradox, Pollard rho). Quantum risk: quantum computer (5,000+ qubits, error correction) could break secp256k1 via Shor\'s algorithm.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are HD wallets and BIP-32/44 standards?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'HD wallets (Hierarchical Deterministic) = derive unlimited keys from single seed/mnemonic. Standard: BIP-32 (Bitcoin Improvement Proposal). Mechanism: seed (256-bit) → master key → child keys (using hierarchical derivation). BIP-44 extends BIP-32 with structure: m/purpose\'/coin\'/account\'/change/address_index. Example: m/44\'/0\'/0\'/0/0 = Bitcoin account 0, change 0, address 0. Benefit: (1) Single seed backs all keys, (2) non-hardened keys allow parent derivation from child, (3) Supports multiple accounts/coins. Implementation: MetaMask, Ledger, Trezor all use BIP-32/44. Backup: single 12-24 word mnemonic (BIP-39) recovers all keys. Risk: mnemonic is single point of failure (steal mnemonic = steal all keys).',
        },
      },
      {
        '@type': 'Question',
        name: 'What are digital signatures and how do they prevent forgery?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Digital signature = cryptographic proof that private key holder authorized transaction. ECDSA (Bitcoin/Ethereum): (1) hash transaction data, (2) sign hash with private key → signature (r, s values), (3) broadcast tx + signature. Verification: anyone can verify signature using public key (no private key needed). Forging: attacker without private key cannot create valid signature (mathematically infeasible). Security: signature is unique per transaction (hash changes → signature changes). Prevents: (1) double spending (can\'t spend same BTC twice without new signature), (2) impersonation (forging someone else\'s signature is hard), (3) tampering (modify tx → signature invalid). Signature size: 64 bytes (secp256k1, Bitcoin). Transaction = 250 bytes typical (includes signature). Optimization: schnorr signatures (65+ byte savings, Taproot upgrade Bitcoin 2021) or BLS (Ethereum 2.0, enables signature aggregation).',
        },
      },
      {
        '@type': 'Question',
        name: 'What is BIP-39 and how do mnemonics work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BIP-39 = mnemonic standard for encoding entropy into human-readable words. Process: (1) generate 128-256 bit entropy, (2) convert to 12-24 word mnemonic using word list (2,048 words), (3) mnemonic → seed via PBKDF2 key derivation, (4) seed → HD wallet master key (BIP-32). Security: 12-word mnemonic = 2^132 entropy (theoretically unbreakable). 24-word = 2^264. Passphrase: optional additional word (not in mnemonic). Adds another security layer (if mnemonic stolen, passphrase protects). Risk: mnemonic is single point of failure. If stolen (photo, email backup), attacker has all keys. Best practice: store mnemonic offline (hardware wallet, cold storage, metal backup). Never digital backup (screenshot = compromised). Recovery: if device lost, import mnemonic into another wallet (MetaMask, Trezor, Ledger). Keys recovered from same mnemonic work identically.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are multi-signature (multisig) wallets and how do they improve security?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Multisig = require multiple signatures to authorize transaction. M-of-N: need M out of N keys to sign. Example: 2-of-3 multisig = 3 private keys exist, need 2 signatures to spend. Benefits: (1) Distributed control (no single point of failure), (2) Threshold security (any 1 key can\'t spend), (3) Institutional adoption (exchanges, funds use 3-of-5 or 5-of-7). Implementations: Bitcoin (native P2SH, P2WSH), Ethereum (Gnosis Safe most popular, requires tx execution after signatures). Cost: multisig tx larger (multiple signatures) = higher fees. Security: multisig is stronger than single key (if 1 key compromised, attacker still can\'t spend). Risk: lose 2+ keys → can\'t spend (lost funds). Mitigation: store keys geographically (NYC, Switzerland, Hong Kong), with different trustees. Time-lock: combine multisig + timelock (delay before tx executes). Enables cancellation if key theft detected.',
        },
      },
    ],
  },
};

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12 };
const badgeStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16, display: 'inline-block' };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };


const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://degen0x.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Public Key Vs Private Key Crypto', },
  ],
};

export default function PublicPrivateKeyCryptoGuide() {
  const tableOfContents = [
    { id: 'crypto-keys-overview', title: 'Crypto Keys Overview' },
    { id: 'asymmetric-encryption', title: 'Asymmetric Encryption Basics' },
    { id: 'elliptic-curves', title: 'Elliptic Curve Cryptography (secp256k1)' },
    { id: 'key-generation', title: 'Key Generation & Entropy' },
    { id: 'digital-signatures', title: 'Digital Signatures (ECDSA)' },
    { id: 'hd-wallets', title: 'HD Wallets & BIP-32/44' },
    { id: 'bip39-mnemonics', title: 'BIP-39: Mnemonic Phrases' },
    { id: 'multisig-wallets', title: 'Multi-Signature Wallets' },
    { id: 'key-management', title: 'Key Management Best Practices' },
    { id: 'quantum-threats', title: 'Quantum Computing Threats' },
    { id: 'comparison-table', title: 'Key Standards Comparison Table' },
    { id: 'faq', title: 'FAQ' },
  ];

  const infoBoxStyle = {
    background: '#161b22',
    border: '1px solid #30363d', borderLeft: '3px solid #a78bfa', borderLeft: '3px solid #a78bfa',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    lineHeight: 1.8,
  };

  const h1Style = {
    fontSize: 36,
    fontWeight: 800,
    marginBottom: 16,
    background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const h2Style = {
    fontSize: 24,
    fontWeight: 700,
    marginTop: 40,
    marginBottom: 16,
    color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12,
  };

  const h3Style = {
    fontSize: 18,
    fontWeight: 600,
    marginTop: 20,
    marginBottom: 12,
    color: '#e6edf3',
  };

  const badgeStyle = {
    display: 'inline-block',
    padding: '6px 12px',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
    marginRight: 8,
    marginBottom: 16,
  };

  const linkStyle = { color: '#58a6ff', textDecoration: 'none' };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse' as const,
    marginBottom: 24,
    fontSize: 14,
  };

  const thStyle = {
    background: '#0d1117',
    border: '1px solid #30363d',
    padding: 12,
    textAlign: 'left' as const,
    fontWeight: 700,
    color: '#e6edf3',
  };

  const tdStyle = {
    border: '1px solid #30363d',
    padding: 12,
    color: '#8b949e',
  };

  return (
    <article id="top" style={{ background: '#0d1117', color: '#e6edf3', minHeight: '100vh', padding: '40px 20px', scrollBehavior: 'smooth' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/learn" style={{ color: '#8b949e', textDecoration: 'none' }}>Learn</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>Public vs Private Keys</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#6366f1', color: '#fff' }}>Learn</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Advanced</span>
          <h1 style={h1Style}>Public vs Private Key Cryptography 2026</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Master asymmetric cryptography: public/private key pairs, elliptic curves (secp256k1), ECDSA digital signatures, HD wallets (BIP-32/44), mnemonic phrases (BIP-39), multi-signature schemes, and quantum computing threats (Grover&apos;s/Shor&apos;s algorithms). Learn key management best practices and wallet security standards.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 10, 2026</span>
            <span>Reading time: 19 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-10"
          updatedDate="2026-04-10"
          readingTime={19}
          section="learn"
        />


        <nav aria-label="Table of Contents" style={{ ...infoBoxStyle, marginBottom: 32 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Table of Contents</h3>
          <ol style={{ marginLeft: 20, color: '#58a6ff' }}>
            {tableOfContents.map(item => (
              <li key={item.id} style={{ marginBottom: 8 }}>
                <a href={`#${item.id}`} style={linkStyle}>{item.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="crypto-keys-overview" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>1. Crypto Keys Overview</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Cryptocurrency security rests on asymmetric cryptography: two mathematically linked keys. Public key = shared identifier (wallet address), private key = secret authorization (sign transactions). Bitcoin (2009) adopted elliptic curve cryptography (secp256k1) for speed and security. Ethereum, Polkadot, most chains use the same standard. Key pair enables: (1) receiving payments (publish public key/address), (2) spending funds (sign tx with private key), (3) proving ownership (signature verification). By 2026, standards have matured (BIP-32/44/39 widely adopted), but key management remains user&apos;s responsibility. Hardware wallets (Ledger, Trezor) help secure keys. Quantum computing poses future threat (5-10 years away for crypto-scale quantum computers).
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We wrote this guide because the existing explanations online are either too simplified or assume PhD-level knowledge. Neither serves most readers.
          </p>
        </div>
          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>The Security Model</strong>
            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 14 }}>
              Crypto&apos;s security model differs from traditional systems (passwords, 2FA). No central authority to reset keys. If you lose private key, funds are permanently lost (no recovery). If someone else gets private key, they control funds (no reversal). This makes key management critical. Never share private keys, seed phrases, or passphrases. Ever.
            </p>
          </div>
        </section>

        <section id="asymmetric-encryption" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>2. Asymmetric Encryption Basics</h2>
          <h3 style={h3Style}>How Public-Private Key Cryptography Works</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Asymmetric encryption uses two linked keys: one public (widely shared), one private (secret). Key property: any data encrypted with public key can only be decrypted with private key (and vice versa). Example: Alice wants to send Bob a secret message. Step 1: Bob generates key pair (public key Kpub, private key Kpriv). Step 2: Bob publishes Kpub, keeps Kpriv secret. Step 3: Alice encrypts message with Bob&apos;s Kpub → ciphertext. Step 4: Bob decrypts with his Kpriv → plaintext. Eavesdropper has ciphertext + Kpub but can&apos;t decrypt (needs Kpriv). Security: mathematically infeasible to derive Kpriv from Kpub (with current computers). Based on hard mathematical problems: discrete logarithm (elliptic curves), factoring (RSA). Crypto application: public key = wallet address (can receive payments), private key = authorization (sign transactions). Message = transaction data, encryption = ECDSA signature.
          </p>
          <h3 style={h3Style}>Authentication: Why Signatures Matter</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Signature = proof that private key holder authorized action (without revealing private key). Process: (1) hash transaction data (SHA-256), (2) sign hash with private key using ECDSA → signature (r, s values), (3) broadcast signature + public key. Anyone can verify: using public key + signature, confirm that private key holder signed this tx. Non-repudiation: signer can&apos;t deny they signed (signature is mathematically linked to private key + message). Prevents: (1) double spending (can&apos;t sign same tx twice without new authorization), (2) tampering (if tx modified, signature is invalid), (3) impersonation (can&apos;t forge signature without private key). Bitcoin/Ethereum use ECDSA signatures on all transactions. Size: ~65-72 bytes (including recovery ID).
          </p>
        </section>

        <section id="elliptic-curves" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>3. Elliptic Curve Cryptography (secp256k1)</h2>
          <h3 style={h3Style}>What Is secp256k1?</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            secp256k1 = standard for elliptic curve cryptography. Full name: "SEC2 prime 256-bit Koblitz curve." Equation: y² = x³ + 7 (mod p), where p = 2^256 - 2^32 - 977. "sec" = standards by Certicom, "p256" = 256-bit prime field, "k1" = Koblitz (special curve form). Bitcoin (2009) chose secp256k1 (not NIST P-256) for paranoia: NIST P-256 has suspicious design (unknown random constants), potentially NSA backdoor. secp256k1: all parameters specified, no mystery. Fast verification: key operation for blockchain (millions of signature checks per block). Adopted by: Bitcoin, Ethereum, Polkadot, Cardano, most major chains. Key size: 256-bit private key → ~256-bit public key (technically 512 bits uncompressed, 264 bits compressed).
          </p>
          <h3 style={h3Style}>Key Derivation: From Private to Public</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Private key = 256-bit random number (0 to secp256k1 order n). Public key = multiply private key × G (generator point on curve). Mathematically: Kpub = Kpriv × G (elliptic curve point multiplication). Example: Kpriv = 1 → Kpub = G. Kpriv = 2 → Kpub = G + G = 2G. Security: reverse operation (extracting Kpriv from Kpub) is hard (discrete log problem). No known fast algorithm (classical computers). Quantum risk: Shor&apos;s algorithm (quantum) solves discrete log in polynomial time → breaks secp256k1. Timeline: full-scale quantum computer (millions of qubits) estimated 10-20 years away. Current quantum computers (hundreds of noisy qubits) can&apos;t threaten crypto yet.
          </p>
          <h3 style={h3Style}>Why Not RSA or Other Curves?</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            RSA (factoring problem): slower verification (not ideal for blockchain). Requires 2048+ bit keys. secp256k1: 256-bit keys, faster. NIST P-256 (also secp256r1): suspicious design (NSA involvement), Dual EC RNG scandal (2013). ed25519 (used by Solana, other chains): fast, modern, but less adoption for Bitcoin/Ethereum. BLS (threshold cryptography, Ethereum 2.0): enables signature aggregation (multiple signatures = 1 combined signature). Each has trade-offs. secp256k1 dominance: network effect (most mining power, most adoption) + proven security (oldest, most researched).
          </p>
        </section>

        <section id="key-generation" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>4. Key Generation & Entropy</h2>
          <h3 style={h3Style}>Generating Secure Random Keys</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Secure key generation requires high-entropy randomness (256 bits for secp256k1). Bad randomness = predictable keys = loss of funds. Example: Blockchain.info wallet (early 2015) had weak randomness, user generated $4M private key guessed by attacker in months. Hardware wallets (Ledger, Trezor) use hardware RNG (entropy from physical processes: thermal noise, electrical fluctuations). Software wallets (MetaMask, Coinbase) depend on OS randomness (/dev/urandom on Linux, CryptGenRandom on Windows). Best practice: hardware wallet for storage (private key never touches computer), software wallet for daily use (limited amount). Key size: 256 bits = 2^256 ≈ 10^77 possible keys. If randomly generated, probability of collision with any other key in universe is negligible.
          </p>
          <h3 style={h3Style}>Entropy Sources for Wallets</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Hardware RNG (Ledger, Trezor, BitBox): on-device entropy generation. Not connected to computer, isolated. Provides ~256 bits entropy. Time-based RNG: measure time between user button presses (Trezor). Accumulates entropy from physical randomness. OS randomness: /dev/urandom (Linux, Mac), CryptGenRandom (Windows), arc4random (iOS). Quality depends on OS entropy pool (seeded from hardware events: disk I/O, network packets, CPU timing). Risk: if OS entropy pool is weak (embedded device, VM, fresh boot), generated keys could be predictable. Mitigation: use hardware wallet (doesn&apos;t depend on OS). For software wallet: ensure OS has gathered entropy (wait 1-2 minutes after boot before generating keys). Entropy testing: NIST SP 800-90B standard for RNG validation. Ledger/Trezor undergo testing, published results.
          </p>
        </section>

        <section id="digital-signatures" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>5. Digital Signatures (ECDSA)</h2>
          <h3 style={h3Style}>How ECDSA Works</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            ECDSA (Elliptic Curve Digital Signature Algorithm): standard for signing on Bitcoin/Ethereum. Process: (1) hash transaction data using SHA-256 → hash H, (2) sign with private key Kpriv + random nonce k → signature (r, s), (3) broadcast tx + signature + public key Kpub. Verification: anyone can check signature using (r, s, H, Kpub) without Kpriv. Math: r = x-coordinate of kG mod n, s = k^-1 (H + r*Kpriv) mod n. Recovery: ECDSA signature doesn&apos;t contain public key, so recovery ID added to allow reconstructing Kpub from (r, s, recovery_id). Bitcoin signature: 71-72 bytes. Ethereum (legacy): 65 bytes (r, s, v where v = recovery_id). Schnorr signature (Bitcoin Taproot 2021, Ethereum future): 64 bytes, more efficient.
          </p>
          <h3 style={h3Style}>Signature Security & Non-Repudiation</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Signature is deterministic per transaction (same tx, same private key, different nonce → different signature). Non-repudiation: signer can&apos;t deny they signed (unless they claim key was stolen). Cryptographically, proving private key holder signed. Prevents: (1) double spend (spend same input twice = two different signatures required), (2) tampering (change tx even 1 byte → hash changes → signature invalid). Forgery: attacker without Kpriv can&apos;t create valid signature for arbitrary tx (no polynomial-time algorithm known). Quantum risk: Shor&apos;s algorithm enables quantum forgery (can derive Kpriv from signature + Kpub).
          </p>
        </section>

        <section id="hd-wallets" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>6. HD Wallets & BIP-32/44</h2>
          <h3 style={h3Style}>What Are HD Wallets?</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            HD wallet (Hierarchical Deterministic): derives unlimited keys from single seed. Standard: BIP-32. Benefit: single 12-24 word mnemonic backup for entire wallet. Before BIP-32: each key needs separate backup (tedious, error-prone). After BIP-32: single seed → derive millions of keys. Mechanism: seed (256-bit entropy) → master key (via PBKDF2) → child keys (via HMAC-based key derivation). Deterministic: same seed always produces same keys (reproducible across devices). Non-hardened vs hardened child keys: non-hardened allows parent to derive from child public key (weaker security, more flexible). Hardened requires private key (stronger, less flexible). Example: 12-word mnemonic → 1M Ethereum addresses (all from single mnemonic).
          </p>
          <h3 style={h3Style}>BIP-44 Hierarchical Structure</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            BIP-44 extends BIP-32 with standardized path structure: m/purpose&apos;/coin_type&apos;/account&apos;/change/address_index. Example path: m/44&apos;/0&apos;/0&apos;/0/5. Meaning: m = master key, 44&apos; = BIP-44 (hardened), 0&apos; = Bitcoin (coin type, hardened), 0&apos; = account 0 (hardened), 0 = external chain (change=0 external, 1 internal), 5 = 5th address. Benefits: (1) multiple coins same wallet (Bitcoin + Ethereum + Litecoin), (2) multiple accounts per coin (account 0, 1, 2...), (3) external/change addresses (privacy: change addresses hidden from recipients). Adoption: MetaMask, Ledger, Trezor, most wallets use BIP-44. Compatibility: wallets following BIP-44 can import same mnemonic → same keys (cross-wallet recovery).
          </p>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Path Component</th>
                <th style={thStyle}>Example</th>
                <th style={thStyle}>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>m</td>
                <td style={tdStyle}>m</td>
                <td style={tdStyle}>Master key (root)</td>
              </tr>
              <tr>
                <td style={tdStyle}>purpose</td>
                <td style={tdStyle}>44&apos;</td>
                <td style={tdStyle}>BIP-44 standard (hardened)</td>
              </tr>
              <tr>
                <td style={tdStyle}>coin_type</td>
                <td style={tdStyle}>0&apos;</td>
                <td style={tdStyle}>Bitcoin (hardened)</td>
              </tr>
              <tr>
                <td style={tdStyle}>coin_type</td>
                <td style={tdStyle}>60&apos;</td>
                <td style={tdStyle}>Ethereum (hardened)</td>
              </tr>
              <tr>
                <td style={tdStyle}>account</td>
                <td style={tdStyle}>0&apos;</td>
                <td style={tdStyle}>Account 0 (hardened)</td>
              </tr>
              <tr>
                <td style={tdStyle}>change</td>
                <td style={tdStyle}>0</td>
                <td style={tdStyle}>External (public) addresses</td>
              </tr>
              <tr>
                <td style={tdStyle}>change</td>
                <td style={tdStyle}>1</td>
                <td style={tdStyle}>Internal (change) addresses</td>
              </tr>
              <tr>
                <td style={tdStyle}>address_index</td>
                <td style={tdStyle}>5</td>
                <td style={tdStyle}>5th address in chain</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="bip39-mnemonics" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>7. BIP-39: Mnemonic Phrases</h2>
          <h3 style={h3Style}>How Mnemonics Work</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            BIP-39: standard for encoding entropy into human-readable words. Process: (1) Generate random entropy (128-256 bits), (2) calculate checksum (entropy SHA-256 truncated), (3) concatenate entropy + checksum, (4) split into 11-bit chunks, (5) map each chunk to word from 2,048-word list, (6) result = 12-24 word mnemonic. Reverse: mnemonic → entropy → seed (via PBKDF2 with passphrase) → HD master key. Example: 12 words = 132 bits entropy (128 + 4-bit checksum) ≈ 2^132 strength. 24 words = 264 bits (256 + 8-bit checksum) ≈ 2^264 strength. Security: checksum catches typing errors (single word mistake detected). Passphrase: optional additional word (not in mnemonic list, unknown to anyone without passphrase). Dramatically increases security (if mnemonic stolen, passphrase = still secure). Trade-off: if passphrase forgotten, can\&apos;t recover wallet. Best practice: store mnemonic + passphrase separately (mnemonic in safe, passphrase in mind/separate location).
          </p>
          <h3 style={h3Style}>Mnemonic Security & Storage</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Risk: mnemonic is single point of failure. If stolen (screenshot, email backup, photo), attacker has all keys. Secure storage: (1) Hardware wallet (mnemonic never exported, stays on device), (2) Metal backup (stamp words on metal plate, fireproof), (3) Vault (bank deposit box), (4) Multi-location (split mnemonic: 6 words in safe A, 6 words in safe B → attacker needs both). Never: screenshot, email backup, cloud storage, chat history. Recovery: if original device lost, import mnemonic into another wallet (Ledger, Trezor, MetaMask). All addresses + private keys recovered (BIP-44 determinism). Multi-device: same mnemonic on Ledger + Trezor + MetaMask = all have same keys (can sign same transactions from any device).
          </p>
        </section>

        <section id="multisig-wallets" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>8. Multi-Signature (Multisig) Wallets</h2>
          <h3 style={h3Style}>How Multisig Works</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Multisig: require M out of N signatures to authorize transaction. Example: 2-of-3 multisig = 3 keys exist, need 2 signatures to spend. Mechanism: Bitcoin P2SH (Pay-to-Script-Hash) or P2WSH (P2W-Script-Hash). Smart contract equivalent: Ethereum Gnosis Safe (most popular, used by funds/exchanges). Benefits: (1) Distributed control (no single point of failure), (2) Threshold security (any 1 key can\&apos;t spend; attacker needs 2/3 keys), (3) Require consensus (multiple trustees approve transactions), (4) Institutions: exchanges use 3-of-5 or 5-of-7 (secure, decentralized). Implementation: each key holder has separate device (Ledger, Trezor, hardware key). To spend: collect signatures from threshold keys. Cost: multisig tx larger (multiple signatures) → higher fees. Bitcoin 2-of-3 multisig: ~300 bytes (vs ~225 bytes single-sig). Ethereum Gnosis Safe: similar cost (execution costs, not tx size).
          </p>
          <h3 style={h3Style}>Multisig Security Topology</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Geographically distributed: keys held in different cities (NYC, Switzerland, Hong Kong). If attacker compromises one location, only 1 key lost (2/3 multisig still spendable). Time-lock: combine multisig + timelock. Transaction signed → waits 48 hours before execution. If key theft detected → cancel before execution. Watchtower: third party monitors for suspicious txs (unusual recipient, large amount) → alert trustees. Institutional setup example: 5-of-7 multisig with 7 trustees (board members, lawyers, exchange execs). Any 5 can spend. Loss tolerance: if 2 trustees lose keys, still spendable (5/7 threshold maintains). Recover: if 3+ lose keys → wallet frozen (funds unspendable). Trade-off: security vs usability (more keys = more complexity, slower execution).
          </p>
        </section>

        <section id="key-management" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>9. Key Management Best Practices</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            (1) <strong>Hardware Wallet (Primary):</strong> Ledger, Trezor, BitBox. Private keys never leave device. Sign txs on-device (attacker can\&apos;t intercept). Support multisig (multiple keys, distributed). Cost: ~$50-150. (2) <strong>Software Wallet (Daily Use):</strong> MetaMask, Coinbase Wallet. Convenient for small amounts (&lt;$1k). Risk: key stored in browser/extension (vulnerable to malware). Use for active trading only. (3) <strong>Staking/Custody:</strong> Exchange staking (Coinbase, Kraken) or institutional custody (BitGo). Trade convenience for regulatory/insurance coverage. (4) <strong>Self-Custody Best Practices:</strong> (a) 12-24 word mnemonic on metal backup (fireproof), (b) passphrase in separate secure location, (c) Hardware wallet for signatures, (d) Never screenshots/digital backups, (e) Test recovery (import mnemonic into new device, verify keys match), (f) Multisig for large amounts (2-of-3 or 3-of-5), (g) Monitor hardware wallet updates. (5) <strong>Avoid:</strong> paper wallets (can degrade), online wallets without 2FA, key export from exchange (counterparty risk).
          </p>
        </section>

        <section id="quantum-threats" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>10. Quantum Computing Threats to Crypto Keys</h2>
          <h3 style={h3Style}>Shor\&apos;s Algorithm & Grover\&apos;s Algorithm</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Shor\&apos;s algorithm (1994): quantum algorithm that solves discrete logarithm in polynomial time. Impact: breaks secp256k1 (and all ECC-based crypto) on quantum computers. Timeline: full-scale quantum computer (error-corrected, millions of qubits) estimated 10-20 years away. Current quantum computers (noisy, 100-1000 qubits): far from threatening crypto (need ~1.6 billion logical qubits to break Bitcoin secp256k1). Grover\&apos;s algorithm (1996): quantum algorithm that searches unsorted database. Impact: halves the security of symmetric encryption (256-bit AES → 128-bit effective security). Impact: less severe than Shor\&apos;s (AES still secure, NIST recommends 256-bit AES).
          </p>
          <h3 style={h3Style}>Post-Quantum Cryptography (PQC)</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            NIST standardizing post-quantum cryptography (2022-2024 process). Candidates: lattice-based (ML-KEM, ML-DSA), hash-based (SPHINCS+), code-based. Adoption timeline: Bitcoin Core discussions (BIP for quantum resistance), Ethereum research (quantum-safe version of signature scheme). Challenge: PQC key sizes are much larger (1-2 KB vs 32 bytes for secp256k1), slower verification. Quantum-resistant hedge: some projects using hybrid signatures (secp256k1 + PQC simultaneously). No quantum threat to crypto in near future (5-10 years). Prepare: monitor NIST standards, follow chain upgrades, move long-term cold storage to quantum-safe methods when available.
          </p>
        </section>

        <section id="comparison-table" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>11. Key Standards Comparison Table</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Standard/Protocol</th>
                <th style={thStyle}>Purpose</th>
                <th style={thStyle}>Adoption</th>
                <th style={thStyle}>Security Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}><strong>secp256k1</strong></td>
                <td style={tdStyle}>Elliptic curve (key derivation)</td>
                <td style={tdStyle}>Bitcoin, Ethereum, most chains</td>
                <td style={tdStyle}>256-bit ≈ 128-bit security</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>ECDSA</strong></td>
                <td style={tdStyle}>Digital signature algorithm</td>
                <td style={tdStyle}>Bitcoin, Ethereum, standard</td>
                <td style={tdStyle}>Prevents forgery (quantum vulnerable)</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>BIP-32</strong></td>
                <td style={tdStyle}>HD wallet key derivation</td>
                <td style={tdStyle}>All major wallets</td>
                <td style={tdStyle}>Deterministic key generation</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>BIP-44</strong></td>
                <td style={tdStyle}>Multi-coin/account structure</td>
                <td style={tdStyle}>MetaMask, Ledger, Trezor</td>
                <td style={tdStyle}>Standard path hierarchy</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>BIP-39</strong></td>
                <td style={tdStyle}>Mnemonic phrase encoding</td>
                <td style={tdStyle}>Industry standard</td>
                <td style={tdStyle}>12/24 words ≈ 132/264-bit entropy</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Schnorr (BIP-340)</strong></td>
                <td style={tdStyle}>Efficient signature (Bitcoin Taproot)</td>
                <td style={tdStyle}>Bitcoin 2021+, Ethereum future</td>
                <td style={tdStyle}>64-byte signatures (smaller)</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>BLS</strong></td>
                <td style={tdStyle}>Signature aggregation (Eth2 staking)</td>
                <td style={tdStyle}>Ethereum 2.0, Polkadot</td>
                <td style={tdStyle}>Multiple sigs → 1 signature</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Multisig (P2SH, P2WSH)</strong></td>
                <td style={tdStyle}>M-of-N signature threshold</td>
                <td style={tdStyle}>Bitcoin, widely used</td>
                <td style={tdStyle}>Distributed security</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="faq" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>FAQ</h2>

          <div style={{ ...infoBoxStyle, marginBottom: 24 }}>
            <h3 style={h3Style}>What is asymmetric encryption and how does it work?</h3>
            <p style={{ marginBottom: 0, lineHeight: 1.8 }}>
              Asymmetric encryption uses two mathematically linked keys: public key (anyone can see) and private key (secret). Mechanism: public key = lock, private key = key. Anyone can encrypt data with public key (secure). Only private key holder can decrypt. Example: Alice sends Bob encrypted message with Bob\&apos;s public key. Only Bob (with private key) can decrypt. Used in crypto: public key = wallet address (receive payments), private key = sign transactions (spend). Security: mathematically impossible to derive private key from public key (in polynomial time). Based on elliptic curve math (secp256k1 for Bitcoin/Ethereum). Key size: 256-bit private key → 256-bit public key (cryptographically strong).
            </p>
          </div>

          <div style={{ ...infoBoxStyle, marginBottom: 24 }}>
            <h3 style={h3Style}>What is secp256k1 and why use it for crypto?</h3>
            <p style={{ marginBottom: 0, lineHeight: 1.8 }}>
              secp256k1 = standards for elliptic curve cryptography. "sec" = Certicom\&apos;s standards, "p256" = prime field with 256 bits, "k1" = Koblitz curve equation y² = x³ + 7. Chosen by Bitcoin (2009), now standard for Ethereum, Bitcoin, Polkadot, most cryptos. Why secp256k1? (1) Well-studied (40+ years research), (2) Fast verification (key operation for blockchain), (3) No NSA backdoor (not like NIST P-256, which has suspicious design). Alternatives: ed25519 (Solana, faster, different properties), BLS (Ethereum 2.0 staking, signature aggregation). Security: secp256k1 256-bit key = 128-bit security level (due to birthday paradox, Pollard rho). Quantum risk: quantum computer (5,000+ qubits, error correction) could break secp256k1 via Shor\&apos;s algorithm.
            </p>
          </div>

          <div style={{ ...infoBoxStyle, marginBottom: 24 }}>
            <h3 style={h3Style}>What are HD wallets and BIP-32/44 standards?</h3>
            <p style={{ marginBottom: 0, lineHeight: 1.8 }}>
              HD wallets (Hierarchical Deterministic) = derive unlimited keys from single seed/mnemonic. Standard: BIP-32 (Bitcoin Improvement Proposal). Mechanism: seed (256-bit) → master key → child keys (using hierarchical derivation). BIP-44 extends BIP-32 with structure: m/purpose&apos;/coin&apos;/account&apos;/change/address_index. Example: m/44&apos;/0&apos;/0&apos;/0/0 = Bitcoin account 0, change 0, address 0. Benefit: (1) Single seed backs all keys, (2) non-hardened keys allow parent derivation from child, (3) Supports multiple accounts/coins. Implementation: MetaMask, Ledger, Trezor all use BIP-32/44. Backup: single 12-24 word mnemonic (BIP-39) recovers all keys. Risk: mnemonic is single point of failure (steal mnemonic = steal all keys).
            </p>
          </div>

          <div style={{ ...infoBoxStyle, marginBottom: 24 }}>
            <h3 style={h3Style}>What are digital signatures and how do they prevent forgery?</h3>
            <p style={{ marginBottom: 0, lineHeight: 1.8 }}>
              Digital signature = cryptographic proof that private key holder authorized transaction. ECDSA (Bitcoin/Ethereum): (1) hash transaction data, (2) sign hash with private key → signature (r, s values), (3) broadcast tx + signature. Verification: anyone can verify signature using public key (no private key needed). Forging: attacker without private key cannot create valid signature (mathematically infeasible). Security: signature is unique per transaction (hash changes → signature changes). Prevents: (1) double spending (can\&apos;t spend same BTC twice without new signature), (2) impersonation (forging someone else\&apos;s signature is hard), (3) tampering (modify tx → signature invalid). Signature size: 64 bytes (secp256k1, Bitcoin). Transaction = 250 bytes typical (includes signature). Optimization: schnorr signatures (65+ byte savings, Taproot upgrade Bitcoin 2021) or BLS (Ethereum 2.0, enables signature aggregation).
            </p>
          </div>

          <div style={{ ...infoBoxStyle, marginBottom: 24 }}>
            <h3 style={h3Style}>What is BIP-39 and how do mnemonics work?</h3>
            <p style={{ marginBottom: 0, lineHeight: 1.8 }}>
              BIP-39 = mnemonic standard for encoding entropy into human-readable words. Process: (1) generate 128-256 bit entropy, (2) convert to 12-24 word mnemonic using word list (2,048 words), (3) mnemonic → seed via PBKDF2 key derivation, (4) seed → HD wallet master key (BIP-32). Security: 12-word mnemonic = 2^132 entropy (theoretically unbreakable). 24-word = 2^264. Passphrase: optional additional word (not in mnemonic). Adds another security layer (if mnemonic stolen, passphrase protects). Risk: mnemonic is single point of failure. If stolen (photo, email backup), attacker has all keys. Best practice: store mnemonic offline (hardware wallet, cold storage, metal backup). Never digital backup (screenshot = compromised). Recovery: if device lost, import mnemonic into another wallet (MetaMask, Trezor, Ledger). Keys recovered from same mnemonic work identically.
            </p>
          </div>

          <div style={{ ...infoBoxStyle, marginBottom: 24 }}>
            <h3 style={h3Style}>What are multi-signature (multisig) wallets and how do they improve security?</h3>
            <p style={{ marginBottom: 0, lineHeight: 1.8 }}>
              Multisig = require multiple signatures to authorize transaction. M-of-N: need M out of N keys to sign. Example: 2-of-3 multisig = 3 private keys exist, need 2 signatures to spend. Benefits: (1) Distributed control (no single point of failure), (2) Threshold security (any 1 key can\&apos;t spend), (3) Institutional adoption (exchanges, funds use 3-of-5 or 5-of-7). Implementations: Bitcoin (native P2SH, P2WSH), Ethereum (Gnosis Safe most popular, requires tx execution after signatures). Cost: multisig tx larger (multiple signatures) = higher fees. Security: multisig is stronger than single key (if 1 key compromised, attacker still can\&apos;t spend). Risk: lose 2+ keys → can\&apos;t spend (lost funds). Mitigation: store keys geographically (NYC, Switzerland, Hong Kong), with different trustees. Time-lock: combine multisig + timelock (delay before tx executes). Enables cancellation if key theft detected.
            </p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only and not cryptographic advice. Cryptography security depends on correct implementation and key management. Private key loss = permanent fund loss (no recovery). Private key compromise = complete fund loss (no reversal). Never share private keys, seed phrases, or passphrases with anyone. Use hardware wallets for secure key storage. For large amounts, use multisig with geographically distributed keys. Quantum computing poses future threat (estimated 10-20 years). Consult cryptography experts before implementing custom solutions. degen0x is not liable for losses from key compromise, poor key management, or implementation errors.
        </div>
      </div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            <li><Link href="/tools/altcoin-season-index" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Altcoin Season Index</Link></li>
            <li><Link href="/tools/bitcoin-dominance-chart-live" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Bitcoin Dominance Chart Live</Link></li>
            <li><Link href="/tools/bitcoin-halving-countdown" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Bitcoin Halving Countdown</Link></li>
            <li><Link href="/tools/bitcoin-mempool-visualizer" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Bitcoin Mempool Visualizer</Link></li>
          </ul>
        </nav>

{/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      
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
