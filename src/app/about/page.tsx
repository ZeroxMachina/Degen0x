import { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'About degen0x | Built by Degens, for Degens',
  description: "Meet the anonymous team building permissionless, transparent crypto tools. Self-sovereign builders committed to sound money, Austrian economics, and Bitcoin",
  openGraph: {
    title: 'About degen0x',
    description: 'Built by Degens, for Degens — Free, transparent, permissionless crypto infrastructure.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://degen0x.com/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About degen0x | Built by Degens, for Degens',
    description: "Meet the anonymous team building permissionless, transparent crypto tools. Self-sovereign builders committed to sound money, Austrian economics, and Bitcoin",
    image: 'https://degen0x.com/og-default.svg',
  },
};

const teamMembers = [
  {
    handle: '0xMachina',
    role: 'Founder & Architect',
    philosophy: '"Sound money or no money."',
    bio: 'Systems thinker obsessed with building permissionless infrastructure. Code is law. Austrian economics devotee. Running nodes since the Silk Road era. Doesn\'t trust—verifies.',
  },
  {
    handle: 'SatoshiGhost',
    role: 'Lead Researcher',
    philosophy: '"If you can\'t read the contract, you don\'t own the asset."',
    bio: 'On-chain forensics and protocol analysis. Former TradFi quant. Has traced every major DeFi exploit in real-time. Can read smart contracts faster than most read English.',
  },
  {
    handle: 'DegenSensei',
    role: 'Content Lead',
    philosophy: '"Everyone\'s a genius in a bull market. We write for the bear."',
    bio: 'Translates complex DeFi mechanics into human language. Aped into 200+ protocols for research. Believes the best education comes from getting rekt at least once.',
  },
  {
    handle: 'NullPointer',
    role: 'Data Engineer',
    philosophy: '"Data delayed is data denied."',
    bio: 'Builds data pipelines that keep degen0x running in real-time. Obsessed with API uptime, caching, sub-second latency. Thinks decentralization will eventually make centralized APIs obsolete.',
  },
  {
    handle: 'CipherPunk_42',
    role: 'Security & QA',
    philosophy: '"Verify, then verify again."',
    bio: 'Audits every line of code before production. Paranoid about supply chain attacks, XSS, data leakage. Hardware wallet collector. Trust but verify, then trust no one.',
  },
];

const values = [
  {
    title: 'Self-Sovereignty',
    description: 'Your keys, your coins, your rules. We build tools that maximize personal agency and minimize dependence on intermediaries.',
  },
  {
    title: 'Transparency',
    description: 'No black boxes. No hidden fees. No opaque algorithms. What you see is what you get. Code is readable. Data is verifiable.',
  },
  {
    title: 'Sound Money',
    description: 'Hard money advocates. Austrian school believers. Bitcoin is money; everything else is credit. We value honest money over easy monetary policy.',
  },
  {
    title: 'Permissionless Access',
    description: 'No whitelists. No KYC. No borders. Anyone with an internet connection should be able to access financial tools without asking permission.',
  },
  {
    title: 'Privacy',
    description: 'Financial privacy is human rights. We don\'t track. We don\'t sell. We don\'t share. Your data stays yours.',
  },
];

const principles = [
  'Bitcoin maximalism: Because sound money solves coordination problems.',
  'Austrian economics: Because central planning has a 100-year track record of failure.',
  'DeFi composability: Because "money legos" are more powerful than any single protocol.',
  'Cypherpunk ethos: Privacy through cryptography, not permission.',
  'Self-custody always: Because counterparty risk is not a feature.',
  'No rent-seeking: Because we don\'t extract value, we create it.',
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#0d1117', color: '#e6edf3', minHeight: '100vh' }}>

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="about"
      />      <Breadcrumb />

      {/* Hero Section */}
      <section
        style={{
          borderBottom: '1px solid #30363d',
          paddingTop: '80px',
          paddingBottom: '80px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '20px', paddingRight: '20px' }}>
          <h1
            style={{
              fontSize: '64px',
              fontWeight: '700',
              marginBottom: '20px',
              letterSpacing: '-2px',
              lineHeight: '1.1',
            }}
          >
            Built by Degens,<br />for Degens
          </h1>
          <p
            style={{
              fontSize: '20px',
              color: '#8b949e',
              marginBottom: '40px',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '1.6',
            }}
          >
            We're anonymous builders obsessed with creating free, transparent, and permissionless crypto tools. No corporate speak. No VC messaging. Just code, conviction, and community.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section
        style={{
          borderBottom: '1px solid #30363d',
          paddingTop: '60px',
          paddingBottom: '60px',
          backgroundColor: '#161b22',
        }}
      >
        <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '20px', paddingRight: '20px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '30px' }}>Our Mission</h2>
          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#e6edf3',
              maxWidth: '900px',
              marginBottom: '20px',
            }}
          >
            degen0x exists to democratize access to financial tools that were previously gatekept by institutions. We believe in a world where anyone—regardless of geography, wealth, or political connection—can access, understand, and benefit from decentralized finance.
          </p>
          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#e6edf3',
              maxWidth: '900px',
            }}
          >
            We don't build for VCs or exit buyers. We build because we believe permissionless money is inevitable. We build because surveillance capitalism is the enemy. We build because sound money beats easy money. Always.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section
        style={{
          borderBottom: '1px solid #30363d',
          paddingTop: '60px',
          paddingBottom: '60px',
        }}
      >
        <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '20px', paddingRight: '20px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '40px' }}>Our Values</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
            }}
          >
            {values.map((value, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#161b22',
                  border: '1px solid #30363d',
                  padding: '30px',
                  borderRadius: '8px',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: '#58a6ff' }}>
                  {value.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#8b949e' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        style={{
          borderBottom: '1px solid #30363d',
          paddingTop: '60px',
          paddingBottom: '60px',
          backgroundColor: '#161b22',
        }}
      >
        <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '20px', paddingRight: '20px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '40px' }}>The Team</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px',
            }}
          >
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#0d1117',
                  border: '1px solid #30363d',
                  borderRadius: '8px',
                  padding: '30px',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#58a6ff',
                    marginBottom: '8px',
                    fontFamily: 'monospace',
                  }}
                >
                  {member.handle}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#8b949e',
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  {member.role}
                </p>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#e6edf3',
                    marginBottom: '16px',
                  }}
                >
                  {member.bio}
                </p>
                <p
                  style={{
                    fontSize: '15px',
                    color: '#58a6ff',
                    fontStyle: 'italic',
                    borderLeft: '3px solid #58a6ff',
                    paddingLeft: '12px',
                  }}
                >
                  {member.philosophy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section
        style={{
          borderBottom: '1px solid #30363d',
          paddingTop: '60px',
          paddingBottom: '60px',
        }}
      >
        <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '20px', paddingRight: '20px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '40px' }}>Our Principles</h2>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#8b949e',
              marginBottom: '30px',
            }}
          >
            We operate from a coherent philosophical foundation—one rooted in Austrian economics, cypherpunk values, and the proven superiority of decentralized systems.
          </p>
          <ul
            style={{
              listStyle: 'none',
              padding: '0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px',
            }}
          >
            {principles.map((principle, idx) => (
              <li
                key={idx}
                style={{
                  padding: '20px',
                  backgroundColor: '#161b22',
                  border: '1px solid #30363d',
                  borderRadius: '6px',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#e6edf3',
                  position: 'relative',
                  paddingLeft: '35px',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: '12px',
                    color: '#58a6ff',
                    fontSize: '18px',
                    fontWeight: '700',
                  }}
                >
                  ◆
                </span>
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Editorial Independence */}
      <section
        style={{
          borderBottom: '1px solid #30363d',
          paddingTop: '60px',
          paddingBottom: '60px',
          backgroundColor: '#161b22',
        }}
      >
        <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '20px', paddingRight: '20px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '30px' }}>Editorial Independence</h2>
          <div
            style={{
              backgroundColor: '#0d1117',
              border: '2px solid #30363d',
              borderRadius: '8px',
              padding: '40px',
            }}
          >
            <p
              style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#e6edf3',
                marginBottom: '20px',
              }}
            >
              We don't accept paid placements. We don't promote projects in exchange for affiliate commissions. We don't have "partnerships" that bias our analysis. Our only incentive is to build the best tools and tell the truth about crypto.
            </p>
            <p
              style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#e6edf3',
                marginBottom: '20px',
              }}
            >
              If we write about a protocol, it's because we've studied it. If we criticize something, it's because the critique is warranted. If we stay silent, it's because we don't have enough information to responsibly comment.
            </p>
            <p
              style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#e6edf3',
              }}
            >
              Our credibility is our only asset. We protect it fiercely.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          paddingTop: '60px',
          paddingBottom: '60px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '20px', paddingRight: '20px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px' }}>Join the Movement</h2>
          <p
            style={{
              fontSize: '18px',
              color: '#8b949e',
              marginBottom: '40px',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Follow us on social, run a node, audit our code, disagree with us in public. The tools we build are for you.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" style={{ scrollMarginTop: 24, marginTop: 48 }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 40 }}>Frequently Asked Questions</h2>
        <div style={{ display: 'grid', gap: 16 }}>
            <details style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 8, padding: '16px 20px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 600, color: '#e6edf3', fontSize: 15 }}>Who are the people building degen0x?</summary>
              <p style={{ marginTop: 12, color: '#c9d1d9', lineHeight: 1.7, fontSize: 14 }}>degen0x is built by a team of anonymous developers who believe in sound money, Austrian economics, and permissionless finance. We prioritize the integrity of our work over personal recognition. Our team includes a founder/architect, researchers, content creators, data engineers, and security specialists—all united by a commitment to transparency and technical excellence.</p>
            </details>
            <details style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 8, padding: '16px 20px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 600, color: '#e6edf3', fontSize: 15 }}>Why is degen0x anonymous?</summary>
              <p style={{ marginTop: 12, color: '#c9d1d9', lineHeight: 1.7, fontSize: 14 }}>Anonymity protects our independence. We can't be pressured by VCs, regulators, or institutional interests because there's no individual to target. It also reflects our cypherpunk philosophy: code and ideas matter more than personalities. We're evaluated entirely on what we build, not who we are.</p>
            </details>
            <details style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 8, padding: '16px 20px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 600, color: '#e6edf3', fontSize: 15 }}>What are degen0x's core values?</summary>
              <p style={{ marginTop: 12, color: '#c9d1d9', lineHeight: 1.7, fontSize: 14 }}>Our core values are self-sovereignty (your keys, your coins), transparency (no black boxes), sound money (Austrian economics), permissionless access (no KYC or borders), and privacy (financial privacy as a human right). These values guide every decision we make about what tools to build and how to build them.</p>
            </details>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About degen0x',
            description: 'Built by Degens, for Degens — Free, transparent, permissionless crypto infrastructure.',
            url: 'https://degen0x.io/about',
            organization: {
              '@type': 'Organization',
              name: 'degen0x',
              description: 'Anonymous builders creating permissionless, transparent crypto tools.',
              url: 'https://degen0x.io',
              sameAs: [
                'https://twitter.com/degen0x',
                'https://github.com/degen0x',
              ],
              knowsAbout: [
                'Decentralized Finance',
                'Bitcoin',
                'Cryptocurrency',
                'Smart Contracts',
                'Austrian Economics',
              ],
            },
            mainEntity: {
              '@type': 'Organization',
              name: 'degen0x',
              mission: 'Democratize access to financial tools through permissionless, transparent crypto infrastructure.',
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'Who are the people building degen0x?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'degen0x is built by a team of anonymous developers who believe in sound money, Austrian economics, and permissionless finance. We prioritize the integrity of our work over personal recognition. Our team includes a founder/architect, researchers, content creators, data engineers, and security specialists—all united by a commitment to transparency and technical excellence.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Why is degen0x anonymous?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Anonymity protects our independence. We can\'t be pressured by VCs, regulators, or institutional interests because there\'s no individual to target. It also reflects our cypherpunk philosophy: code and ideas matter more than personalities. We\'re evaluated entirely on what we build, not who we are.'
                }
              },
              {
                '@type': 'Question',
                'name': 'What are degen0x\'s core values?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Our core values are self-sovereignty (your keys, your coins), transparency (no black boxes), sound money (Austrian economics), permissionless access (no KYC or borders), and privacy (financial privacy as a human right). These values guide every decision we make about what tools to build and how to build them.'
                }
              }
            ]
          }),
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
            All Learning Guides
          </Link>
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
            Crypto Tools
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
            Compare Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
