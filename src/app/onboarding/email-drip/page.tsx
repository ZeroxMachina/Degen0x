'use client';
import EmailDripSequence from "@/components/EmailDripSequence";
import Link from "next/link";

const S = {
  bg: "#0d1117", surface: "#161b22", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#6366f1",
};

export default function EmailDripPage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/onboarding" style={{ color: S.text2, textDecoration: "none" }}>Onboarding</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Email Drip Sequence</span>
      </div>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 0" }}>
        <EmailDripSequence userName="Jefe" currentDay={0} />
      </div>
    </main>
  );
}
