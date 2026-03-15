"use client";

import { useState } from "react";

/* ─── TYPES ─────────────────────────────────────────────────────────────────── */
interface AttestationProps {
  walletAddress?: string;
  xpAmount: number;
  completedCourse?: string;
  onAttest?: (txHash: string) => void;
}

interface MockAttestation {
  uid: string;
  txHash: string;
  schema: string;
  attester: string;
  recipient: string;
  time: number;
  data: { xp: number; course: string; level: string };
}

/* ─── CONSTANTS ─────────────────────────────────────────────────────────────── */
const EAS_SCHEMA = "0x1234...abcd"; // degen0x XP schema on EAS
const EAS_EXPLORER_BASE = "https://easscan.org/attestation/view/";
const LEVELS = [
  { min: 0, max: 999, name: "Newbie", color: "#8b949e" },
  { min: 1000, max: 4999, name: "Hodler", color: "#58a6ff" },
  { min: 5000, max: 14999, name: "Degen", color: "#f0883e" },
  { min: 15000, max: 49999, name: "Whale", color: "#bc8cff" },
  { min: 50000, max: Infinity, name: "Satoshi", color: "#3fb950" },
];

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330",
  border: "#30363d", text: "#e6edf3", text2: "#8b949e",
  green: "#3fb950", blue: "#58a6ff", orange: "#f0883e",
  yellow: "#d29922", purple: "#bc8cff", red: "#f85149", indigo: "#6366f1",
};

function getLevel(xp: number) {
  return LEVELS.find((l) => xp >= l.min && xp <= l.max) ?? LEVELS[0];
}

function shortAddr(addr: string) {
  return addr.slice(0, 6) + "..." + addr.slice(-4);
}

function shortUid(uid: string) {
  return uid.slice(0, 10) + "..." + uid.slice(-6);
}

/* ─── ATTESTATION CARD ───────────────────────────────────────────────────────── */
function AttestationCard({ att }: { att: MockAttestation }) {
  const level = getLevel(att.data.xp);
  return (
    <div style={{
      background: `linear-gradient(135deg, ${S.indigo}15, ${S.green}08)`,
      border: `1px solid ${S.indigo}50`,
      borderRadius: 14,
      padding: "18px 20px",
      marginBottom: 12,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
        <div style={{ fontSize: 28 }}>🏅</div>
        <div>
          <div style={{ fontWeight: 800, fontSize: 15, color: S.text }}>On-chain XP Attestation</div>
          <div style={{ fontSize: 11, color: S.text2, marginTop: 2 }}>
            {new Date(att.time * 1000).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
          </div>
        </div>
        <div style={{
          marginLeft: "auto", background: `${level.color}20`, border: `1px solid ${level.color}50`,
          borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 700, color: level.color,
        }}>
          {level.name}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10, marginBottom: 14 }}>
        {[
          ["XP Attested", att.data.xp.toLocaleString() + " XP", S.green],
          ["Course", att.data.course, S.blue],
          ["Recipient", shortAddr(att.recipient), S.text2],
          ["UID", shortUid(att.uid), S.indigo],
        ].map(([k, v, c]) => (
          <div key={String(k)} style={{ background: S.surface2, borderRadius: 8, padding: "8px 12px" }}>
            <div style={{ fontSize: 10, color: S.text2, textTransform: "uppercase", letterSpacing: "0.04em" }}>{k}</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: String(c), marginTop: 3 }}>{v}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <a
          href={`${EAS_EXPLORER_BASE}${att.uid}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "6px 14px", background: `${S.indigo}20`, color: "#818cf8",
            border: `1px solid ${S.indigo}40`, borderRadius: 7, fontSize: 12, fontWeight: 600,
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 5,
          }}
        >
          🔍 View on EAS Explorer
        </a>
        <a
          href={`https://etherscan.io/tx/${att.txHash}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "6px 14px", background: `${S.green}10`, color: S.green,
            border: `1px solid ${S.green}30`, borderRadius: 7, fontSize: 12, fontWeight: 600,
            textDecoration: "none",
          }}
        >
          ⛓️ Etherscan
        </a>
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────────────────────────────── */
export default function EASXPAttestation({
  walletAddress = "",
  xpAmount = 0,
  completedCourse = "Intro to Crypto",
  onAttest,
}: AttestationProps) {
  const [step, setStep] = useState<"idle" | "confirm" | "signing" | "mining" | "done">("idle");
  const [attestation, setAttestation] = useState<MockAttestation | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [existingAttestations] = useState<MockAttestation[]>([
    // Demo historical attestation
    {
      uid: "0xab12cd34ef56gh78ij90kl12mn34op56qr78st90uv12wx34yz56ab78cd90ef12",
      txHash: "0xdead1234beef5678cafe9012babe3456feed7890cafe1234dead5678beef9012",
      schema: EAS_SCHEMA,
      attester: "0xdegen0x000000000000000000000000000000000000",
      recipient: walletAddress || "0x0000000000000000000000000000000000000000",
      time: Math.floor(Date.now() / 1000) - 86400 * 7,
      data: { xp: 1500, course: "Bitcoin Basics", level: "Hodler" },
    },
  ]);

  const level = getLevel(xpAmount);

  const handleAttest = async () => {
    if (!walletAddress) {
      setError("Connect your wallet first to mint an on-chain attestation.");
      return;
    }
    setError(null);
    setStep("confirm");
  };

  const handleConfirm = async () => {
    setStep("signing");
    await new Promise((r) => setTimeout(r, 1500));
    setStep("mining");
    await new Promise((r) => setTimeout(r, 2500));

    const newAtt: MockAttestation = {
      uid: "0x" + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join(""),
      txHash: "0x" + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join(""),
      schema: EAS_SCHEMA,
      attester: "0xdegen0x000000000000000000000000000000000000",
      recipient: walletAddress,
      time: Math.floor(Date.now() / 1000),
      data: { xp: xpAmount, course: completedCourse, level: level.name },
    };

    setAttestation(newAtt);
    setStep("done");
    onAttest?.(newAtt.txHash);
  };

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{
        background: S.surface, border: `1px solid ${S.border}`, borderRadius: 16,
        padding: 24, marginBottom: 16,
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span style={{ fontSize: 28 }}>⛓️</span>
              <div>
                <div style={{ fontWeight: 800, fontSize: 18 }}>On-chain XP Attestation</div>
                <div style={{ fontSize: 12, color: S.text2, marginTop: 2 }}>via Ethereum Attestation Service (EAS)</div>
              </div>
            </div>
            <p style={{ color: S.text2, fontSize: 13, lineHeight: 1.7, maxWidth: 500, margin: 0 }}>
              Mint a verifiable, on-chain credential proving your crypto education and XP earned on degen0x.
              Stored permanently on Ethereum — anyone can verify your knowledge without trusting degen0x.
            </p>
          </div>
          <div style={{
            background: `${level.color}20`, border: `1px solid ${level.color}40`,
            borderRadius: 12, padding: "14px 20px", textAlign: "center", flexShrink: 0,
          }}>
            <div style={{ fontSize: 11, color: S.text2, marginBottom: 4 }}>Current Level</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: level.color }}>{level.name}</div>
            <div style={{ fontSize: 12, color: S.text2, marginTop: 2 }}>{xpAmount.toLocaleString()} XP</div>
          </div>
        </div>

        {/* What gets attested */}
        <div style={{
          marginTop: 20, background: S.surface2, border: `1px solid ${S.border}`,
          borderRadius: 10, padding: "14px 16px",
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: S.text2, textTransform: "uppercase", marginBottom: 10, letterSpacing: "0.05em" }}>
            Attestation Contents
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 8 }}>
            {[
              ["Platform", "degen0x.com"],
              ["XP Amount", `${xpAmount.toLocaleString()} XP`],
              ["Level", level.name],
              ["Course", completedCourse],
              ["Schema", "degen0x EAS v1"],
              ["Network", "Ethereum Mainnet"],
            ].map(([k, v]) => (
              <div key={String(k)} style={{ fontSize: 12, display: "flex", gap: 6 }}>
                <span style={{ color: S.text2 }}>{k}:</span>
                <span style={{ color: S.text, fontWeight: 600 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action button */}
        {step === "idle" && (
          <button
            onClick={handleAttest}
            style={{
              marginTop: 16, width: "100%", padding: "13px 24px",
              background: `linear-gradient(135deg, ${S.indigo}, #4f46e5)`,
              color: "#fff", border: "none", borderRadius: 10,
              fontWeight: 700, fontSize: 15, cursor: "pointer",
              boxShadow: `0 4px 20px ${S.indigo}40`,
            }}
          >
            ⛓️ Mint XP Attestation On-chain (Free)
          </button>
        )}

        {step === "confirm" && (
          <div style={{ marginTop: 16, background: `${S.indigo}10`, border: `1px solid ${S.indigo}40`, borderRadius: 10, padding: 16 }}>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Confirm Attestation</div>
            <p style={{ fontSize: 13, color: S.text2, marginBottom: 16 }}>
              You'll sign a gasless EAS attestation. This creates a permanent on-chain record of your {xpAmount.toLocaleString()} XP and {completedCourse} completion. No ETH required — degen0x pays gas.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={handleConfirm}
                style={{ flex: 1, padding: "10px 20px", background: S.indigo, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}
              >
                Sign & Mint ✓
              </button>
              <button
                onClick={() => setStep("idle")}
                style={{ padding: "10px 20px", background: S.surface2, color: S.text2, border: `1px solid ${S.border}`, borderRadius: 8, fontWeight: 600, cursor: "pointer" }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {(step === "signing" || step === "mining") && (
          <div style={{ marginTop: 16, textAlign: "center", padding: "20px", color: S.text2, fontSize: 14 }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>{step === "signing" ? "✍️" : "⛏️"}</div>
            {step === "signing" ? "Signing attestation..." : "Mining on Ethereum..."}
          </div>
        )}

        {step === "done" && attestation && (
          <div style={{ marginTop: 16 }}>
            <div style={{ background: `${S.green}15`, border: `1px solid ${S.green}40`, borderRadius: 10, padding: "12px 16px", marginBottom: 12, textAlign: "center", fontWeight: 700, color: S.green }}>
              🎉 Attestation minted successfully!
            </div>
            <AttestationCard att={attestation} />
          </div>
        )}

        {error && (
          <div style={{ marginTop: 12, background: `${S.red}15`, border: `1px solid ${S.red}40`, borderRadius: 8, padding: "10px 14px", fontSize: 13, color: S.red }}>
            {error}
          </div>
        )}
      </div>

      {/* Existing Attestations */}
      {existingAttestations.length > 0 && (
        <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 16, padding: 20 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 14 }}>
            Past Attestations
          </div>
          {existingAttestations.map((att) => (
            <AttestationCard key={att.uid} att={att} />
          ))}
        </div>
      )}

      {/* Info box */}
      <div style={{ marginTop: 16, background: `${S.indigo}08`, border: `1px solid ${S.indigo}25`, borderRadius: 12, padding: "14px 18px" }}>
        <div style={{ fontSize: 12, color: S.text2, lineHeight: 1.7 }}>
          <strong style={{ color: "#818cf8" }}>What is EAS?</strong> Ethereum Attestation Service is a permissionless protocol for making on-chain attestations about anything. degen0x uses it to create verifiable, portable credentials for your crypto knowledge — usable in hiring, DeFi protocol whitelists, DAO memberships, and more.
        </div>
      </div>
    </div>
  );
}
