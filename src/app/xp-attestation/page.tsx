import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import EASXPAttestation from "@/components/EASXPAttestation";

export const metadata: Metadata = {
  title: "On-chain XP Attestation — degen0x | Verify Your Crypto",
  description: "Mint a verifiable on-chain credential via Ethereum Attestation Service (EAS). Prove your crypto education, XP earned, and course completions — permanently on",
  alternates: { canonical: "/xp-attestation" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const S = {
  bg: "#0d1117", surface: "#161b22", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e",
};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Xp Attestation', },
  ],
};

export default function XPAttestationPage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="xp-attestation"
      />      <div style={{
        background: "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(13,17,23,0) 60%)",
        borderBottom: `1px solid ${S.border}`, padding: "48px 24px 40px",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 52, marginBottom: 12 }}>⛓️</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.6rem)", fontWeight: 900, marginBottom: 12, lineHeight: 1.15 }}>
            On-chain XP Attestation
          </h1>
          <p style={{ color: S.text2, fontSize: 16, lineHeight: 1.7, maxWidth: 520, margin: "0 auto 24px" }}>
            Turn your degen0x education into a permanent, verifiable credential on Ethereum. Powered by the Ethereum Attestation Service — trustless, portable, forever.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            {[["🔒 Trustless", "No central authority"], ["♾️ Permanent", "Lives on Ethereum forever"], ["🌐 Portable", "Use across all DeFi & DAOs"], ["⛽ Gasless", "degen0x pays gas"]].map(([title, desc]) => (
              <div key={String(title)} style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.25)", borderRadius: 8, padding: "8px 14px", fontSize: 12 }}>
                <div style={{ fontWeight: 700, color: "#818cf8" }}>{title}</div>
                <div style={{ color: S.text2, marginTop: 2 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 760, margin: "40px auto", padding: "0 16px 80px" }}>
        <EASXPAttestation xpAmount={3750} completedCourse="Intermediate DeFi" />
      </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "On-chain XP Attestation \u2014 degen0x | Verify Your Crypto", "description": "Mint a verifiable on-chain credential via Ethereum Attestation Service (EAS). Prove your crypto education, XP earned, and course completions \u2014 permanently on", "url": "https://degen0x.com/xp-attestation"}) }} />
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
    </main>
  );
}
