import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Data Availability Sampling Explained: Light Nodes & DA",
  description: 'Learn how Data Availability Sampling enables light nodes without full blocks. Explore Celestia, EigenDA, and KZG commitments.',
  keywords: ['data availability', 'sampling', 'light nodes', 'Celestia', 'EigenDA', 'rollups', 'danksharding'],
  openGraph: {
    title: 'Data Availability Sampling Explained: Light Nodes & DA Layers',
    description: 'Complete guide to Data Availability Sampling, DA layers, and reducing blockchain data requirements.',
    images: [{ url: 'https://degen0x.com/og-learn.svg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Availability Sampling Explained: Light Nodes & DA Layers',
    description: 'Learn how DAS enables light nodes and scales blockchains with dedicated DA layers.',
  },
  alternates: {
    canonical: 'https://degen0x.com/learn/data-availability-sampling-explained',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Data Availability Sampling Explained: Light Nodes & DA Layers',
  description: 'Comprehensive guide to Data Availability Sampling, DA problems in rollups, and KZG commitments for blockchain scaling.',
  image: 'https://degen0x.com/og-learn.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-11',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the Data Availability problem?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In rollups, a sequencer publishes transactions and a proof (validium) or commitment to full data (optimistic rollup). If the sequencer hides the data, users cannot verify the rollup is valid or withdraw their funds. Full nodes must download all data (~100MB/day per rollup) to verify availability. Light nodes cannot verify without downloading everything, limiting scalability. DAS solves this by letting light nodes sample small random chunks to statistically confirm availability.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does Data Availability Sampling (DAS) work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DAS uses erasure coding: encode data into n shares such that any k shares can reconstruct the original. Light nodes randomly request small samples of shares from the network. If they get 90 positive responses, they confirm with high probability that >k shares exist (data is available). No single light node downloads full blocks. This reduces bandwidth from 100MB/day to <10MB/day per light node.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is Celestia and how does it provide DA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Celestia is a dedicated blockchain for Data Availability only. Rollups post transaction data to Celestia (not Ethereum), reducing costs by 10-100x. Celestia uses DAS, allowing light nodes to verify data availability without downloading full 1MB blocks. Users run Celestia light nodes (requires ~5GB storage) instead of full nodes (500GB+). This decentralizes DA verification and enables unlimited rollups to use Celestia without congestion.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are KZG commitments and how do they enable DAS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'KZG (Kate-Zaverucha-Goldberg) commitments are cryptographic proofs of data availability. A sequencer commits to data using a single 48-byte KZG proof. Light nodes request samples and receive proof-verified chunks. If proof fails, the entire commitment is invalid. Ethereum is adopting KZG for Proto-Danksharding (EIP-4844), reducing rollup DA costs by 16x. KZG is more efficient than Merkle proofs for large datasets.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is EigenDA and how does it work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'EigenDA uses Ethereum stakers as DA validators. Stakers download data and answer DA queries from rollups. EigenDA is cheaper than Celestia (uses existing Ethereum security) but less proven. Early rollups (EigenLayer) use EigenDA. Tradeoffs: Celestia is decentralized and independent; EigenDA is more integrated with Ethereum but depends on restaking incentives.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is full Danksharding and how does it change DAS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Full Danksharding (Ethereum\'s long-term scaling) applies DAS to Ethereum itself. Instead of running rollups on Ethereum, Ethereum becomes a data availability layer with 64 shards. Each shard can be verified via DAS. Light nodes sample across all shards, verifying Ethereum\'s full capacity is available. This could enable 100,000+ TPS on Ethereum without increasing node hardware requirements significantly.'
        }
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
    { '@type': 'ListItem', position: 3, name: 'Data Availability Sampling Explained', },
  ],
};

export default function DataAvailabilitySamplingExplained() {
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

  const tableOfContents = [
    { id: 'da-problem', title: 'The Data Availability Problem' },
    { id: 'das-mechanics', title: 'How DAS Works' },
    { id: 'celestia-protocol', title: 'Celestia: Dedicated DA Layer' },
    { id: 'kzg-commitments', title: 'KZG Commitments & Proofs' },
    { id: 'eigendata', title: 'EigenDA and Restaking' },
    { id: 'danksharding', title: 'Danksharding and Full DAS' },
    { id: 'faq', title: 'FAQ' },
  ];

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
          <span style={{ color: '#c9d1d9' }}>Data Availability</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#6366f1', color: '#fff' }}>Learn</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Advanced</span>
          <h1 style={h1Style}>Data Availability Sampling Explained: Light Nodes &amp; DA Layers</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Data Availability Sampling enables light nodes to verify blockchain data without downloading full blocks. Celestia and EigenDA reduce rollup costs by 10-100x using DAS and KZG commitments.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 11, 2026</span>
            <span>Reading time: 15 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={15}
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

        <section id="da-problem">
          <h2 style={h2Style}>The Data Availability Problem</h2>
          <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Data availability is critical for blockchain security. In rollup systems (Arbitrum, Optimism, Starknet), a sequencer posts transaction data and proofs to Ethereum. Validators verify proofs but must be able to verify the data actually exists. If a sequencer hides the data after posting proofs, users cannot withdraw funds or prove fraud. This is the data availability (DA) problem.
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

          <h3 style={h3Style}>Why Full Nodes Cannot Scale</h3>
          <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Full nodes must download and verify all data to confirm availability. Arbitrum posts ~1-2MB of data per minute to Ethereum. A full node verifying Arbitrum needs ~1.4 GB daily (~500 GB annually). If 100 rollups use Ethereum, nodes need 140 GB daily—impossible for most users. This limits decentralization and creates a bottleneck: only wealthy nodes can verify DA, centralizing the network.
          </p>

          <h3 style={h3Style}>Light Node Limitations</h3>
          <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Light nodes (used by wallets, mobile users) do not download full blocks. Instead, they trust validators and sample block headers. But they cannot verify data availability without downloading the full data. This creates a trust assumption: light nodes must trust that validators are honest and data is available. If validators collude and hide data, light nodes cannot detect it.
          </p>
        </section>

        <section id="das-mechanics">
          <h2 style={h2Style}>How Data Availability Sampling Works</h2>
          <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            DAS solves the DA problem using erasure coding. Take a block of data (1 MB) and encode it into 64 shares such that any 32 shares can reconstruct the original block. If all 64 shares are available, the data is definitely available. If only 31 shares are available, reconstruction is impossible.
          </p>

          <h3 style={h3Style}>Random Sampling</h3>
          <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            A light node requests a small random sample of shares (e.g., 5 shares out of 64). The network responds with those shares. If the light node gets all 5 responses, the probability that &gt;32 shares exist is extremely high (99.99%+). The node repeats this process dozens of times, making the statistical confidence asymptotically certain that the data is available.
          </p>

          <h3 style={h3Style}>Bandwidth Requirements</h3>
          <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Full node verifying Arbitrum: ~1,400 GB/year. Light node with DAS: ~10 GB/year (100x improvement). Light nodes download only randomly sampled shares, not full blocks. The network distributes shares among peers; no single node needs to hold all shares. This allows thousands of light nodes to verify DA simultaneously without centralizing data storage.
          </p>

          <h3 style={h3Style}>Honest Majority Assumption</h3>
          <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            DAS assumes the network (validators, peers) is mostly honest. If &gt;50% of nodes provide incorrect shares, the protocol can fail. But because shares are randomly distributed, a single attacker cannot control which shares specific light nodes receive. An attacker would need to control &gt;50% of the peer network to successfully hide data—unrealistic for decentralized networks.
          </p>
        </section>

        <section id="celestia-protocol">
          <h2 style={h2Style}>Celestia: Dedicated DA Layer</h2>
          <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Celestia is a dedicated blockchain for data availability only. Rollups (Arbitrum, Optimism, others) can post transaction data to Celestia instead of Ethereum. Celestia uses DAS, allowing light nodes to verify DA without downloading full blocks. This decouples DA from settlement (Ethereum), enabling rollups to use Celestia for DA and Ethereum for settlement.
          </p>

          <h3 style={h3Style}>Celestia Architecture</h3>
          <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Celestia validators receive transactions, batch them into blocks, and apply DAS encoding. Light nodes verify DAS and confirm availability. The chain&apos;s only purpose: provide DA guarantees. Celestia does not execute transactions or settle disputes—that happens on rollups or Ethereum. This simplicity makes Celestia scalable: block size can grow without increasing full node bandwidth requirements.
          </p>

          <h3 style={h3Style}>Cost Reduction</h3>
          <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Posting 1 MB to Ethereum costs ~$50-200 (depending on gas prices). Posting to Celestia costs ~$0.10-1 (100-1000x cheaper). For rollups processing millions of transactions daily, this difference is massive: Arbitrum saves $10M+ annually by using Celestia instead of Ethereum for DA. Users benefit through lower transaction fees.
          </p>

          <h3 style={h3Style}>Rollup Flexibility</h3>
          <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Celestia enables new rollup designs. Sovereign rollups settle to Celestia (not Ethereum), creating full autonomy. Celestia rollups can have custom VMs, execution, and settlement without Ethereum constraints. Dymension (Cosmos app-chain) uses Celestia for DA; Optimism is exploring Celestia DA. This creates a modular stack: Celestia (DA), Ethereum (settlement), custom rollups (execution).
          </p>
        </section>

        <section id="kzg-commitments">
          <h2 style={h2Style}>KZG Commitments &amp; Cryptographic Proofs</h2>
          <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            KZG (Kate-Zaverucha-Goldberg) commitments are cryptographic proofs that a sequencer has committed to specific data. Instead of posting entire transaction data, a sequencer posts a single 48-byte KZG proof. Light nodes can request data samples and verify proofs, confirming samples are legitimate parts of the committed data.
          </p>

          <h3 style={h3Style}>How KZG Works</h3>
          <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            A sequencer has data D (e.g., 1 MB of transactions). Using a trusted ceremony (performed for Ethereum), it generates a KZG commitment: C = commit(D). C is 48 bytes, published on-chain. To prove chunk i of D is valid, the sequencer provides a proof π. Light nodes verify: verify(C, i, D[i], π). If the proof is invalid, D[i] is fraudulent. If valid, D[i] is definitely part of the original data D.
          </p>

          <h3 style={h3Style}>Ethereum Proto-Danksharding (EIP-4844)</h3>
          <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Ethereum adopted KZG for Proto-Danksharding (EIP-4844, live April 2024). Rollups can post data blobs with KZG commitments, reducing DA costs by 16x. Before EIP-4844, rollup DA costs dominated fees (~$1 per transaction). After EIP-4844, DA costs &lt;$0.05 per transaction. This incentivizes rollups to use Ethereum over Celestia for certain use cases where Ethereum&apos;s security premium justifies slightly higher costs.
          </p>

          <h3 style={h3Style}>Trusted Ceremony and Security</h3>
          <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            KZG requires a trusted ceremony: randomly generated parameters are combined to create the public key. If all randomness is deleted, the ceremony is secure. Ethereum&apos;s KZG ceremony involved 150,000+ participants; the chance someone retained randomness is negligible. If randomness leaked, an attacker could create false proofs, breaking KZG security. This is the primary security assumption.
          </p>
        </section>

        <section id="eigendata">
          <h2 style={h2Style}>EigenDA and Ethereum Restaking</h2>
          <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            EigenDA is a DA layer built using EigenLayer, which allows Ethereum stakers to restake their ETH to secure additional services (DA, bridges, sequencers). Stakers download data and confirm availability; rollups query EigenDA stakers for DA guarantees. This leverages Ethereum&apos;s existing security without requiring a separate validator set.
          </p>

          <h3 style={h3Style}>Restaking Economics</h3>
          <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Ethereum stakers earn 3-5% annually from protocol rewards. By restaking with EigenLayer, they earn additional fees from rollups (EigenDA customers). Tradeoff: restakers accept slashing risk (if they fail to provide DA, they lose stake). This economic incentive aligns staker interests with providing reliable DA. EigenDA costs rollups more than Celestia but less than Ethereum&apos;s base layer.
          </p>

          <h3 style={h3Style}>Adoption and Risks</h3>
          <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            EigenDA launched in 2024 with early customers (Eigenlayer partners). Risks: restaking is newer technology with unproven track record. If EigenLayer has a bug, restaked ETH could be slashed. Celestia is older and battle-tested. EigenDA offers Ethereum integration advantage (same validator set); Celestia offers independence and proven uptime. Teams evaluate risk tolerance when choosing DA layers.
          </p>
        </section>

        <section id="danksharding">
          <h2 style={h2Style}>Full Danksharding and DAS at Ethereum Scale</h2>
          <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Full Danksharding (Ethereum&apos;s long-term scalability roadmap) applies DAS to Ethereum itself. Instead of a monolithic chain, Ethereum becomes a data availability layer with 64 data shards. Each shard can be verified independently via DAS, enabling Ethereum to process 100,000+ transactions per second without increasing full node bandwidth significantly.
          </p>

          <h3 style={h3Style}>Sharding Design</h3>
          <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            In Full Danksharding, 64 shards process data in parallel. Validators rotate among shards, sampling DA proofs across all shards. A light node samples a few blocks from each shard, verifying Ethereum&apos;s full capacity is available. This maintains Ethereum&apos;s security properties (no shard can hide data from honest light nodes) while scaling to 100,000+ TPS.
          </p>

          <h3 style={h3Style}>Light Client Bandwidth</h3>
          <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Even with 64 shards at 100,000 TPS (1.6 gigabytes per second), light clients download only ~10 MB daily through DAS. This enables Ethereum light clients on mobile devices and embedded systems. Compare: Ethereum today requires light clients to download ~5 MB daily; Danksharding barely increases this despite 100x throughput increase.
          </p>

          <h3 style={h3Style}>Timeline</h3>
          <p style={{ color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Full Danksharding is 3-5 years away (2027-2029 estimate). Intermediate steps: Proto-Danksharding (EIP-4844, done), Danksharding roadmap (blob throughput increases). Until then, rollups use Celestia, EigenDA, or Ethereum&apos;s Proto-Danksharding for DA. When Full Danksharding launches, Ethereum becomes the primary DA layer for all rollups.
          </p>
        </section>

        <section id="faq">
          <h2 style={h2Style}>FAQ</h2>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 16, fontWeight: 600, color: '#e6edf3', marginBottom: 12 }}>What is the Data Availability problem?</h3>
            <p style={{ color: '#8b949e' }}>
              In rollups, a sequencer publishes transactions and a proof (validium) or commitment to full data (optimistic rollup). If the sequencer hides the data, users cannot verify the rollup is valid or withdraw their funds. Full nodes must download all data (~100MB/day per rollup) to verify availability. Light nodes cannot verify without downloading everything, limiting scalability. DAS solves this by letting light nodes sample small random chunks to statistically confirm availability.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 16, fontWeight: 600, color: '#e6edf3', marginBottom: 12 }}>How does Data Availability Sampling (DAS) work?</h3>
            <p style={{ color: '#8b949e' }}>
              DAS uses erasure coding: encode data into n shares such that any k shares can reconstruct the original. Light nodes randomly request small samples of shares from the network. If they get 90 positive responses, they confirm with high probability that &gt;k shares exist (data is available). No single light node downloads full blocks. This reduces bandwidth from 100MB/day to &lt;10MB/day per light node.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 16, fontWeight: 600, color: '#e6edf3', marginBottom: 12 }}>What is Celestia and how does it provide DA?</h3>
            <p style={{ color: '#8b949e' }}>
              Celestia is a dedicated blockchain for Data Availability only. Rollups post transaction data to Celestia (not Ethereum), reducing costs by 10-100x. Celestia uses DAS, allowing light nodes to verify data availability without downloading full 1MB blocks. Users run Celestia light nodes (requires ~5GB storage) instead of full nodes (500GB+). This decentralizes DA verification and enables unlimited rollups to use Celestia without congestion.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 16, fontWeight: 600, color: '#e6edf3', marginBottom: 12 }}>What are KZG commitments and how do they enable DAS?</h3>
            <p style={{ color: '#8b949e' }}>
              KZG (Kate-Zaverucha-Goldberg) commitments are cryptographic proofs of data availability. A sequencer commits to data using a single 48-byte KZG proof. Light nodes request samples and receive proof-verified chunks. If proof fails, the entire commitment is invalid. Ethereum is adopting KZG for Proto-Danksharding (EIP-4844), reducing rollup DA costs by 16x. KZG is more efficient than Merkle proofs for large datasets.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 16, fontWeight: 600, color: '#e6edf3', marginBottom: 12 }}>What is EigenDA and how does it work?</h3>
            <p style={{ color: '#8b949e' }}>
              EigenDA uses Ethereum stakers as DA validators. Stakers download data and answer DA queries from rollups. EigenDA is cheaper than Celestia (uses existing Ethereum security) but less proven. Early rollups (EigenLayer) use EigenDA. Tradeoffs: Celestia is decentralized and independent; EigenDA is more integrated with Ethereum but depends on restaking incentives.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 16, fontWeight: 600, color: '#e6edf3', marginBottom: 12 }}>What is full Danksharding and how does it change DAS?</h3>
            <p style={{ color: '#8b949e' }}>
              Full Danksharding (Ethereum&apos;s long-term scaling) applies DAS to Ethereum itself. Instead of running rollups on Ethereum, Ethereum becomes a data availability layer with 64 shards. Each shard can be verified via DAS. Light nodes sample across all shards, verifying Ethereum&apos;s full capacity is available. This could enable 100,000+ TPS on Ethereum without increasing node hardware requirements significantly.
            </p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only and should not be construed as financial or investment advice. Cryptocurrency investments carry significant risk including total loss of capital. Always conduct your own due diligence and consult with qualified financial advisors before making investment decisions.
        </div>
      </div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            <li><Link href="/tools/compound-interest-crypto-calculator" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Compound Interest Crypto Calculator</Link></li>
            <li><Link href="/tools/crypto-airdrop-tracker" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Crypto Airdrop Tracker</Link></li>
            <li><Link href="/tools/crypto-correlation-matrix" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Crypto Correlation Matrix</Link></li>
            <li><Link href="/tools/crypto-exchange-fee-comparison-tool" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Crypto Exchange Fee Tool</Link></li>
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
