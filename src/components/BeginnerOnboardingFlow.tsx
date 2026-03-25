'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e",
  green: "#3fb950", blue: "#58a6ff", orange: "#f0883e",
  yellow: "#d29922", purple: "#bc8cff", cyan: "#06b6d4", indigo: "#6366f1",
};

const AVATARS = ["🧛", "🤖", "👽", "🎯", "🦾", "⚡", "🔮", "💎", "🦊", "🐉"];

const PATHS = [
  {
    id: "investor",
    emoji: "📈",
    label: "Investor",
    desc: "I want to grow my wealth through crypto assets",
    color: S.green,
    xpBonus: "Bitcoin & Altcoins path",
  },
  {
    id: "defi",
    emoji: "🌊",
    label: "DeFi Explorer",
    desc: "I want to earn yield and use DeFi protocols",
    color: S.blue,
    xpBonus: "DeFi & Yield path",
  },
  {
    id: "nft",
    emoji: "🎨",
    label: "NFT Creator/Collector",
    desc: "I want to create, collect, or trade digital art",
    color: S.purple,
    xpBonus: "NFT & Creator path",
  },
  {
    id: "trader",
    emoji: "⚡",
    label: "Active Trader",
    desc: "I want to trade crypto and capitalize on market moves",
    color: S.orange,
    xpBonus: "Trading & TA path",
  },
  {
    id: "builder",
    emoji: "🏗️",
    label: "Builder",
    desc: "I want to build dApps and understand the tech",
    color: S.cyan,
    xpBonus: "Developer path",
  },
];

const KNOWLEDGE = [
  { id: "none", label: "Completely new", emoji: "🐣", desc: "Never bought or used crypto before" },
  { id: "beginner", label: "I own some crypto", emoji: "🌱", desc: "Bought on Coinbase/Binance but not much else" },
  { id: "intermediate", label: "DeFi curious", emoji: "🌿", desc: "Used MetaMask, tried a DEX or two" },
  { id: "advanced", label: "Experienced", emoji: "🌳", desc: "Yield farming, bridging, multiple chains" },
];

const INTERESTS = [
  { id: "bitcoin", label: "Bitcoin", emoji: "₿" },
  { id: "ethereum", label: "Ethereum", emoji: "Ξ" },
  { id: "defi", label: "DeFi / Yield", emoji: "🌊" },
  { id: "nfts", label: "NFTs", emoji: "🎨" },
  { id: "gaming", label: "Gaming / GameFi", emoji: "🎮" },
  { id: "l2", label: "Layer 2s", emoji: "⚡" },
  { id: "staking", label: "Staking", emoji: "🔒" },
  { id: "trading", label: "Trading", emoji: "📊" },
  { id: "dao", label: "DAOs / Governance", emoji: "🏛️" },
  { id: "privacy", label: "Privacy / ZK", emoji: "🔐" },
];

const STEPS = ["Welcome", "Your Name", "Learning Path", "Your Level", "Interests", "Your First Mission"];

export default function BeginnerOnboardingFlow({ onComplete }: { onComplete?: () => void }) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(AVATARS[0]);
  const [path, setPath] = useState("");
  const [level, setLevel] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [showDone, setShowDone] = useState(false);

  const progress = Math.round((step / (STEPS.length - 1)) * 100);

  const totalXP = 50 + (path ? 100 : 0) + (level ? 50 : 0) + interests.length * 10;

  const toggleInterest = (id: string) => {
    setInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const canNext = () => {
    if (step === 1) return name.trim().length > 0;
    if (step === 2) return path !== "";
    if (step === 3) return level !== "";
    if (step === 4) return interests.length > 0;
    return true;
  };

  const next = () => {
    if (step < STEPS.length - 1) setStep(step + 1);
    if (step === STEPS.length - 2) setShowDone(true);
  };

  const back = () => {
    if (step > 0) setStep(step - 1);
  };

  const selectedPath = PATHS.find((p) => p.id === path);

  if (showDone && step === STEPS.length - 1) {
    return (
      <div style={{ backgroundColor: S.bg, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <div style={{ maxWidth: 560, width: "100%", textAlign: "center" }}>
          {/* Celebration */}
          <div style={{ fontSize: 72, marginBottom: 16 }}>🎉</div>
          <h1 style={{ fontSize: "2rem", fontWeight: 900, color: S.text, marginBottom: 8 }}>
            Welcome to degen0x, {name}!
          </h1>
          <p style={{ color: S.text2, fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>
            Your crypto journey starts now. You've earned your first <strong style={{ color: S.yellow }}>{totalXP} XP</strong> just for setting up your profile!
          </p>

          {/* XP Badge */}
          <div style={{ background: `${S.yellow}15`, border: `1px solid ${S.yellow}40`, borderRadius: 16, padding: "24px", marginBottom: 24, display: "inline-block" }}>
            <div style={{ fontSize: 40, marginBottom: 8 }}>{avatar}</div>
            <div style={{ fontWeight: 800, fontSize: 18, color: S.text }}>{name}</div>
            <div style={{ color: S.text2, fontSize: 13, marginBottom: 12 }}>Level 1 · Crypto Curious</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <span style={{ fontSize: 28, fontWeight: 900, color: S.yellow }}>{totalXP}</span>
              <span style={{ color: S.text2, fontSize: 14 }}>XP earned</span>
            </div>
          </div>

          {/* Path Summary */}
          {selectedPath && (
            <div style={{ background: `${selectedPath.color}10`, border: `1px solid ${selectedPath.color}30`, borderRadius: 12, padding: "16px", marginBottom: 24 }}>
              <div style={{ fontWeight: 700, color: selectedPath.color, marginBottom: 4 }}>
                {selectedPath.emoji} Your Path: {selectedPath.label}
              </div>
              <div style={{ fontSize: 13, color: S.text2 }}>We've curated your course list for the {selectedPath.xpBonus}</div>
            </div>
          )}

          {/* First Missions */}
          <div style={{ textAlign: "left", marginBottom: 32 }}>
            <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: S.text }}>🎯 Your First Missions</div>
            {[
              { icon: "📚", text: "Complete your first lesson", xp: "+50 XP", link: "/courses" },
              { icon: "🧠", text: "Take a quiz and earn XP", xp: "+25 XP", link: "/courses" },
              { icon: "🌐", text: "Explore 5 dApps in the Ecosystem Store", xp: "+50 XP", link: "/ecosystem" },
              { icon: "🔥", text: "Start your learning streak", xp: "+10 XP/day", link: "/courses" },
            ].map((m, i) => (
              <Link key={i} href={m.link} style={{ textDecoration: "none" }}>
                <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "12px 16px", marginBottom: 8, display: "flex", alignItems: "center", gap: 12, transition: "border-color 0.2s" }}>
                  <span style={{ fontSize: 20 }}>{m.icon}</span>
                  <span style={{ flex: 1, fontSize: 14, color: S.text }}>{m.text}</span>
                  <span style={{ fontSize: 12, fontWeight: 800, color: S.green }}>{m.xp}</span>
                </div>
              </Link>
            ))}
          </div>

          <Link href="/courses" style={{ display: "block", background: `linear-gradient(135deg, ${S.indigo}, ${S.cyan})`, color: "#fff", padding: "16px 32px", borderRadius: 14, fontWeight: 800, fontSize: 16, textDecoration: "none", marginBottom: 12 }}>
            🚀 Start Learning Now
          </Link>
          <Link href="/" style={{ display: "block", color: S.text2, fontSize: 14, textDecoration: "none" }}>
            Explore degen0x first →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: S.bg, minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>

      {/* Header */}
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontWeight: 900, fontSize: 20, background: `linear-gradient(135deg, ${S.indigo}, ${S.cyan})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          degen0x
        </div>
        <div style={{ fontSize: 13, color: S.text2 }}>Step {step + 1} of {STEPS.length}</div>
      </div>

      {/* Progress Bar */}
      <div style={{ height: 3, background: S.surface2 }}>
        <div style={{ height: "100%", background: `linear-gradient(90deg, ${S.indigo}, ${S.cyan})`, width: `${progress}%`, transition: "width 0.4s ease" }} />
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
        <div style={{ maxWidth: 560, width: "100%" }}>

          {/* Step 0: Welcome */}
          {step === 0 && (
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 64, marginBottom: 20 }}>🌐</div>
              <h1 style={{ fontSize: "2.2rem", fontWeight: 900, color: S.text, marginBottom: 12, lineHeight: 1.2 }}>
                Welcome to degen0x
              </h1>
              <p style={{ color: S.text2, fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
                The most comprehensive platform to learn, explore, and master crypto — made for the next billion users. Earn XP, complete courses, explore 100+ dApps, and build your on-chain reputation.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 40, flexWrap: "wrap" }}>
                {[
                  { icon: "🎓", text: "Learn at your pace" },
                  { icon: "⚡", text: "Earn XP & badges" },
                  { icon: "🌐", text: "Explore 100+ dApps" },
                  { icon: "🏆", text: "Climb the leaderboard" },
                ].map((item) => (
                  <div key={item.text} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: "12px 16px", fontSize: 13, display: "flex", alignItems: "center", gap: 8 }}>
                    <span>{item.icon}</span>
                    <span style={{ color: S.text2 }}>{item.text}</span>
                  </div>
                ))}
              </div>
              <div style={{ color: S.text2, fontSize: 13, marginBottom: 24 }}>Takes about 2 minutes · Free forever</div>
            </div>
          )}

          {/* Step 1: Name & Avatar */}
          {step === 1 && (
            <div>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, color: S.text, marginBottom: 8 }}>What should we call you?</h2>
              <p style={{ color: S.text2, marginBottom: 28, fontSize: 15 }}>Choose a name and avatar for your degen0x profile.</p>

              {/* Avatar selector */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: S.text2, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.05em" }}>Choose Avatar</div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {AVATARS.map((a) => (
                    <button key={a} onClick={() => setAvatar(a)} style={{
                      width: 52, height: 52, borderRadius: 14, fontSize: 28, cursor: "pointer",
                      background: avatar === a ? `${S.indigo}20` : S.surface2,
                      border: `2px solid ${avatar === a ? S.indigo : S.border}`,
                      transition: "all 0.2s",
                    }}>
                      {a}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name input */}
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: S.text2, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.05em" }}>Display Name</div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name or alias..."
                  maxLength={24}
                  style={{
                    width: "100%", padding: "14px 16px", background: S.surface2, border: `1px solid ${name ? S.indigo : S.border}`,
                    borderRadius: 12, color: S.text, fontSize: 16, outline: "none", boxSizing: "border-box",
                    transition: "border-color 0.2s",
                  }}
                />
              </div>
            </div>
          )}

          {/* Step 2: Learning Path */}
          {step === 2 && (
            <div>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, color: S.text, marginBottom: 8 }}>What's your main goal?</h2>
              <p style={{ color: S.text2, marginBottom: 24, fontSize: 15 }}>We'll personalize your learning path and course recommendations.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {PATHS.map((p) => (
                  <button key={p.id} onClick={() => setPath(p.id)} style={{
                    background: path === p.id ? `${p.color}15` : S.surface,
                    border: `2px solid ${path === p.id ? p.color : S.border}`,
                    borderRadius: 14, padding: "16px 18px", cursor: "pointer",
                    display: "flex", alignItems: "center", gap: 14, textAlign: "left",
                    transition: "all 0.2s",
                  }}>
                    <span style={{ fontSize: 28 }}>{p.emoji}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: 15, color: path === p.id ? p.color : S.text }}>{p.label}</div>
                      <div style={{ fontSize: 13, color: S.text2, marginTop: 2 }}>{p.desc}</div>
                    </div>
                    {path === p.id && <span style={{ fontSize: 18, color: p.color }}>✓</span>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Knowledge Level */}
          {step === 3 && (
            <div>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, color: S.text, marginBottom: 8 }}>How much do you know?</h2>
              <p style={{ color: S.text2, marginBottom: 24, fontSize: 15 }}>Be honest — we'll start you at the right level.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {KNOWLEDGE.map((k) => (
                  <button key={k.id} onClick={() => setLevel(k.id)} style={{
                    background: level === k.id ? `${S.indigo}15` : S.surface,
                    border: `2px solid ${level === k.id ? S.indigo : S.border}`,
                    borderRadius: 14, padding: "16px 18px", cursor: "pointer",
                    display: "flex", alignItems: "center", gap: 14, textAlign: "left",
                    transition: "all 0.2s",
                  }}>
                    <span style={{ fontSize: 28 }}>{k.emoji}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: 15, color: level === k.id ? S.indigo : S.text }}>{k.label}</div>
                      <div style={{ fontSize: 13, color: S.text2, marginTop: 2 }}>{k.desc}</div>
                    </div>
                    {level === k.id && <span style={{ fontSize: 18, color: S.indigo }}>✓</span>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Interests */}
          {step === 4 && (
            <div>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, color: S.text, marginBottom: 8 }}>What excites you most?</h2>
              <p style={{ color: S.text2, marginBottom: 24, fontSize: 15 }}>Pick at least one topic to personalize your feed. ({interests.length} selected)</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 10 }}>
                {INTERESTS.map((item) => {
                  const selected = interests.includes(item.id);
                  return (
                    <button key={item.id} onClick={() => toggleInterest(item.id)} style={{
                      background: selected ? `${S.indigo}20` : S.surface,
                      border: `2px solid ${selected ? S.indigo : S.border}`,
                      borderRadius: 12, padding: "14px 16px", cursor: "pointer",
                      display: "flex", alignItems: "center", gap: 10, textAlign: "left",
                      transition: "all 0.2s",
                    }}>
                      <span style={{ fontSize: 22 }}>{item.emoji}</span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: selected ? S.indigo : S.text }}>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 5: First Mission */}
          {step === 5 && (
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>🎯</div>
              <h2 style={{ fontSize: "2rem", fontWeight: 900, color: S.text, marginBottom: 8 }}>You're all set, {name}!</h2>
              <p style={{ color: S.text2, fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
                Here's what we've prepared for you based on your {selectedPath?.label} path.
              </p>

              {/* XP earned so far */}
              <div style={{ background: `${S.yellow}15`, border: `1px solid ${S.yellow}30`, borderRadius: 12, padding: "16px", marginBottom: 24 }}>
                <div style={{ fontSize: 13, color: S.text2, marginBottom: 4 }}>XP Earned This Setup</div>
                <div style={{ fontSize: 32, fontWeight: 900, color: S.yellow }}>{totalXP} XP</div>
                <div style={{ fontSize: 12, color: S.text2, marginTop: 4 }}>You're officially Level 1: Crypto Curious 🐣</div>
              </div>

              {/* Recommended first course */}
              <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 14, padding: "20px", marginBottom: 24, textAlign: "left" }}>
                <div style={{ fontSize: 13, color: S.text2, fontWeight: 700, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.05em" }}>📚 Recommended First Course</div>
                <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>
                  {path === "investor" ? "Bitcoin & Crypto Fundamentals" :
                   path === "defi" ? "DeFi Mastery: From Zero to Yield" :
                   path === "nft" ? "NFT Deep Dive: Create & Collect" :
                   path === "trader" ? "Crypto Trading Masterclass" :
                   "Blockchain Development Fundamentals"}
                </div>
                <div style={{ color: S.text2, fontSize: 13, marginBottom: 12 }}>
                  {level === "none" ? "Starts from absolute zero — perfect for you!" :
                   level === "beginner" ? "Skips the basics and builds on what you know." :
                   "Advanced modules selected based on your experience."}
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 6, background: `${S.green}20`, color: S.green }}>+500 XP</span>
                  <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 6, background: `${S.blue}20`, color: S.blue }}>
                    {level === "none" ? "Beginner" : level === "beginner" ? "Intermediate" : "Advanced"}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 40, gap: 12 }}>
            {step > 0 ? (
              <button onClick={back} style={{
                padding: "14px 24px", borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: "pointer",
                background: S.surface2, border: `1px solid ${S.border}`, color: S.text2,
              }}>
                ← Back
              </button>
            ) : <div />}

            <button
              onClick={next}
              disabled={!canNext()}
              style={{
                flex: step === 0 ? 1 : undefined,
                padding: "14px 32px", borderRadius: 12, fontSize: 15, fontWeight: 800, cursor: canNext() ? "pointer" : "not-allowed",
                background: canNext() ? `linear-gradient(135deg, ${S.indigo}, ${S.cyan})` : S.surface2,
                border: "none", color: canNext() ? "#fff" : S.text2,
                transition: "all 0.2s",
                minWidth: 160,
              }}
            >
              {step === STEPS.length - 1 ? "🚀 Let's Go!" : step === 0 ? "Get Started →" : "Continue →"}
            </button>
          </div>

          {/* Step dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 24 }}>
            {STEPS.map((_, i) => (
              <div key={i} style={{
                width: i === step ? 20 : 6, height: 6, borderRadius: 3,
                background: i <= step ? S.indigo : S.surface2,
                transition: "all 0.3s",
              }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
