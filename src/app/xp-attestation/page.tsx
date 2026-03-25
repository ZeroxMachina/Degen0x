import type { Metadata } from "next";
import EASXPAttestation from "@/components/EASXPAttestation";

export const metadata: Metadata = {
  title: "On-chain XP Attestation — degen0x | Verify Your Crypto Knowledge",
  description: "Mint a verifiable on-chain credential via Ethereum Attestation Service (EAS). Prove your crypto education, XP earned, and course completions — permanently on Ethereum.",
};

const S = {
  bg: "#0d1117", surface: "#161b22", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e",
};

export default function XPAttestationPage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{
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
    </main>
  );
}
