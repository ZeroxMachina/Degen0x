import { useState, useEffect } from "react";

const SKILLS = {
  ceo: { name: "CEO", icon: "👑", color: "#f59e0b" },
  pm: { name: "Project Manager", icon: "📋", color: "#8b5cf6" },
  analytics: { name: "Analytics", icon: "📊", color: "#06b6d4" },
  publishQueue: { name: "Publish Queue", icon: "🚀", color: "#10b981" },
  qa: { name: "QA Tester", icon: "🧪", color: "#ef4444" },
  devops: { name: "DevOps", icon: "⚙️", color: "#6366f1" },
  dataEngineer: { name: "Data Engineer", icon: "🔌", color: "#14b8a6" },
  researcher: { name: "Researcher", icon: "🔍", color: "#a78bfa" },
  contentWriter: { name: "Content Writer", icon: "✍️", color: "#f472b6" },
  seo: { name: "SEO Content", icon: "🎯", color: "#22d3ee" },
  pageScaffold: { name: "Page Scaffold", icon: "🏗️", color: "#fb923c" },
  programmer: { name: "Programmer", icon: "💻", color: "#4ade80" },
  uxDesigner: { name: "UX Designer", icon: "🎨", color: "#c084fc" },
  graphicDesigner: { name: "Graphic Designer", icon: "🖼️", color: "#f43f5e" },
  communityManager: { name: "Community Mgr", icon: "📣", color: "#fbbf24" },
};

const BLOCKS = [
  {
    id: "standup",
    name: "Morning Standup",
    time: "9:00 AM",
    hour: 9,
    skills: ["pm", "ceo", "analytics"],
    description: "Review overnight metrics, set daily priorities, identify blockers",
    gradient: "linear-gradient(135deg, #f59e0b33, #8b5cf633)",
    accent: "#f59e0b",
  },
  {
    id: "publish",
    name: "Publish & Deploy",
    time: "10:00 AM",
    hour: 10,
    skills: ["dataEngineer", "publishQueue", "qa", "devops"],
    description: "Verify data pipelines → promote pages → QA check → deploy to prod",
    gradient: "linear-gradient(135deg, #10b98133, #6366f133)",
    accent: "#10b981",
  },
  {
    id: "build",
    name: "Build Cycle",
    time: "11:00 AM",
    hour: 11,
    skills: ["researcher", "contentWriter", "seo", "pageScaffold", "programmer"],
    description: "Research → write → optimize SEO → scaffold page → build components",
    gradient: "linear-gradient(135deg, #a78bfa33, #22d3ee33)",
    accent: "#a78bfa",
  },
  {
    id: "design",
    name: "Design & Polish",
    time: "2:00 PM",
    hour: 14,
    skills: ["uxDesigner", "graphicDesigner", "programmer"],
    description: "UX audit new pages → create visuals → implement refinements",
    gradient: "linear-gradient(135deg, #c084fc33, #f43f5e33)",
    accent: "#c084fc",
  },
  {
    id: "community",
    name: "Community & Growth",
    time: "3:00 PM",
    hour: 15,
    skills: ["communityManager", "analytics", "graphicDesigner"],
    description: "Identify top content → draft social posts → create social visuals",
    gradient: "linear-gradient(135deg, #fbbf2433, #f43f5e33)",
    accent: "#fbbf24",
  },
  {
    id: "eod",
    name: "QA & Close-of-Day",
    time: "5:00 PM",
    hour: 17,
    skills: ["qa", "dataEngineer", "devops", "pm"],
    description: "Full test sweep → data health → deploy verify → daily scorecard",
    gradient: "linear-gradient(135deg, #ef444433, #6366f133)",
    accent: "#ef4444",
  },
];

function getSimulatedTime() {
  const now = new Date();
  return now.getHours() + now.getMinutes() / 60;
}

function getBlockStatus(block, currentHour) {
  const blockEnd = block.hour + 1;
  if (currentHour >= blockEnd) return "completed";
  if (currentHour >= block.hour && currentHour < blockEnd) return "active";
  return "upcoming";
}

function PulsingDot({ color }) {
  return (
    <span style={{ position: "relative", display: "inline-block", width: 10, height: 10 }}>
      <span
        style={{
          position: "absolute",
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: color,
          animation: "pulse 2s ease-in-out infinite",
        }}
      />
      <span
        style={{
          position: "absolute",
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: color,
          opacity: 0.4,
          animation: "pulsering 2s ease-in-out infinite",
        }}
      />
    </span>
  );
}

function SkillChip({ skillKey, isActive }) {
  const skill = SKILLS[skillKey];
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 10px",
        borderRadius: 20,
        fontSize: 12,
        fontWeight: 500,
        background: isActive ? `${skill.color}22` : "rgba(255,255,255,0.04)",
        border: `1px solid ${isActive ? skill.color + "66" : "rgba(255,255,255,0.08)"}`,
        color: isActive ? skill.color : "rgba(255,255,255,0.4)",
        transition: "all 0.5s ease",
        transform: isActive ? "scale(1.05)" : "scale(1)",
      }}
    >
      <span>{skill.icon}</span>
      <span>{skill.name}</span>
    </div>
  );
}

function HandoffArrow({ isActive }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 2px",
        color: isActive ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.15)",
        fontSize: 14,
        transition: "all 0.5s ease",
      }}
    >
      →
    </div>
  );
}

function TimelineBlock({ block, status, index }) {
  const isActive = status === "active";
  const isCompleted = status === "completed";

  return (
    <div
      style={{
        position: "relative",
        padding: 20,
        borderRadius: 16,
        background: isActive
          ? block.gradient
          : isCompleted
          ? "rgba(255,255,255,0.03)"
          : "rgba(255,255,255,0.02)",
        border: `1px solid ${
          isActive ? block.accent + "44" : isCompleted ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.05)"
        }`,
        backdropFilter: "blur(20px)",
        transition: "all 0.6s ease",
        opacity: isCompleted ? 0.6 : 1,
        animation: isActive ? "glowpulse 3s ease-in-out infinite" : "none",
        "--glow-color": block.accent,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {isActive && <PulsingDot color={block.accent} />}
          {isCompleted && <span style={{ fontSize: 14, color: "#4ade80" }}>✓</span>}
          {!isActive && !isCompleted && (
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                border: "2px solid rgba(255,255,255,0.2)",
                display: "inline-block",
              }}
            />
          )}
          <div>
            <div
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: isActive ? "#fff" : isCompleted ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.7)",
                letterSpacing: "-0.02em",
              }}
            >
              {block.name}
            </div>
            <div
              style={{
                fontSize: 12,
                color: isActive ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.3)",
                marginTop: 2,
              }}
            >
              {block.description}
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            fontFamily: "monospace",
            color: isActive ? block.accent : "rgba(255,255,255,0.3)",
            padding: "4px 10px",
            borderRadius: 8,
            background: isActive ? block.accent + "15" : "transparent",
          }}
        >
          {block.time}
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 6, marginTop: 8 }}>
        {block.skills.map((sk, i) => (
          <div key={sk} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <SkillChip skillKey={sk} isActive={isActive} />
            {i < block.skills.length - 1 && <HandoffArrow isActive={isActive} />}
          </div>
        ))}
      </div>

      {isActive && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            borderRadius: "0 0 16px 16px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              background: `linear-gradient(90deg, transparent, ${block.accent}, transparent)`,
              animation: "scanline 2s linear infinite",
            }}
          />
        </div>
      )}
    </div>
  );
}

function SkillGrid() {
  const currentHour = getSimulatedTime();
  const activeBlock = BLOCKS.find((b) => {
    const status = getBlockStatus(b, currentHour);
    return status === "active";
  });
  const activeSkillKeys = activeBlock ? activeBlock.skills : [];

  return (
    <div
      style={{
        padding: 20,
        borderRadius: 16,
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 14, letterSpacing: "0.05em", textTransform: "uppercase" }}>
        All 15 Skills
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
        {Object.entries(SKILLS).map(([key, skill]) => {
          const isActive = activeSkillKeys.includes(key);
          return (
            <div
              key={key}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 10px",
                borderRadius: 10,
                background: isActive ? `${skill.color}15` : "rgba(255,255,255,0.02)",
                border: `1px solid ${isActive ? skill.color + "44" : "rgba(255,255,255,0.04)"}`,
                transition: "all 0.5s ease",
              }}
            >
              <span style={{ fontSize: 16 }}>{skill.icon}</span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? skill.color : "rgba(255,255,255,0.4)",
                }}
              >
                {skill.name}
              </span>
              {isActive && (
                <span style={{ marginLeft: "auto" }}>
                  <PulsingDot color={skill.color} />
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DayProgress() {
  const currentHour = getSimulatedTime();
  const dayStart = 9;
  const dayEnd = 18;
  const progress = Math.max(0, Math.min(1, (currentHour - dayStart) / (dayEnd - dayStart)));
  const completedBlocks = BLOCKS.filter((b) => getBlockStatus(b, currentHour) === "completed").length;
  const activeBlock = BLOCKS.find((b) => getBlockStatus(b, currentHour) === "active");

  return (
    <div
      style={{
        padding: 20,
        borderRadius: 16,
        background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(6,182,212,0.1), rgba(245,158,11,0.1))",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: "-0.03em" }}>
            degen0x ops
          </div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>
            {activeBlock
              ? `${activeBlock.name} in progress`
              : currentHour >= 18
              ? "Day complete — see you tomorrow"
              : currentHour < 9
              ? "Waiting for 9 AM kickoff"
              : "Between blocks"}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 28, fontWeight: 800, fontFamily: "monospace", color: "#fff" }}>
            {completedBlocks}/{BLOCKS.length}
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>blocks done</div>
        </div>
      </div>

      <div style={{ position: "relative", height: 6, borderRadius: 3, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: `${progress * 100}%`,
            borderRadius: 3,
            background: "linear-gradient(90deg, #4f46e5, #0891b2, #d97706)",
            transition: "width 1s ease",
          }}
        />
        {BLOCKS.map((block) => {
          const pos = ((block.hour - dayStart) / (dayEnd - dayStart)) * 100;
          return (
            <div
              key={block.id}
              style={{
                position: "absolute",
                left: `${pos}%`,
                top: -3,
                width: 2,
                height: 12,
                background: getBlockStatus(block, currentHour) === "active" ? block.accent : "rgba(255,255,255,0.15)",
                borderRadius: 1,
              }}
            />
          );
        })}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>9 AM</span>
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>6 PM</span>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
      {[
        { label: "Skills", value: "15", sub: "active", color: "#6366f1" },
        { label: "Daily Blocks", value: "6", sub: "scheduled", color: "#06b6d4" },
        { label: "Handoffs", value: "22", sub: "per day", color: "#f59e0b" },
        { label: "Cadence", value: "M-F", sub: "weekdays", color: "#10b981" },
      ].map((stat) => (
        <div
          key={stat.label}
          style={{
            padding: 16,
            borderRadius: 12,
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: stat.color, fontFamily: "monospace" }}>{stat.value}</div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>{stat.label}</div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>{stat.sub}</div>
        </div>
      ))}
    </div>
  );
}

export default function DashboardApp() {
  const [currentHour, setCurrentHour] = useState(getSimulatedTime());
  const [simMode, setSimMode] = useState(false);
  const [simHour, setSimHour] = useState(9);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!simMode) setCurrentHour(getSimulatedTime());
    }, 30000);
    return () => clearInterval(interval);
  }, [simMode]);

  const effectiveHour = simMode ? simHour : currentHour;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#080d1c",
        color: "#fff",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: "24px 20px",
      }}
    >
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes pulsering { 0% { transform: scale(1); opacity: 0.4; } 100% { transform: scale(2.5); opacity: 0; } }
        @keyframes scanline { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        @keyframes glowpulse { 0%, 100% { box-shadow: 0 0 20px rgba(var(--glow-r, 99), var(--glow-g, 102), var(--glow-b, 241), 0.1); } 50% { box-shadow: 0 0 40px rgba(var(--glow-r, 99), var(--glow-g, 102), var(--glow-b, 241), 0.2); } }
        input[type="range"] { -webkit-appearance: none; background: rgba(255,255,255,0.1); height: 4px; border-radius: 2px; outline: none; }
        input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; width: 16px; height: 16px; border-radius: 50%; background: linear-gradient(135deg, #4f46e5, #0891b2); cursor: pointer; border: 2px solid #fff; }
      `}</style>

      <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
        <DayProgress />
        <Stats />

        <div
          style={{
            padding: "12px 16px",
            borderRadius: 12,
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <button
            onClick={() => setSimMode(!simMode)}
            style={{
              padding: "6px 14px",
              borderRadius: 8,
              border: `1px solid ${simMode ? "#6366f1" : "rgba(255,255,255,0.15)"}`,
              background: simMode ? "rgba(99,102,241,0.15)" : "transparent",
              color: simMode ? "#6366f1" : "rgba(255,255,255,0.5)",
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {simMode ? "⏱ Simulating" : "⏱ Simulate"}
          </button>
          {simMode && (
            <>
              <input
                type="range"
                min="7"
                max="19"
                step="0.25"
                value={simHour}
                onChange={(e) => setSimHour(parseFloat(e.target.value))}
                style={{ flex: 1 }}
              />
              <span style={{ fontFamily: "monospace", fontSize: 13, color: "rgba(255,255,255,0.6)", minWidth: 60 }}>
                {Math.floor(simHour)}:{String(Math.round((simHour % 1) * 60)).padStart(2, "0")}{" "}
                {simHour < 12 ? "AM" : "PM"}
              </span>
            </>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {BLOCKS.map((block, i) => (
            <TimelineBlock
              key={block.id}
              block={block}
              status={getBlockStatus(block, effectiveHour)}
              index={i}
            />
          ))}
        </div>

        <SkillGrid />

        <div style={{ textAlign: "center", padding: "12px 0", fontSize: 11, color: "rgba(255,255,255,0.2)" }}>
          degen0x ops dashboard — 15 skills, 6 blocks, 22 handoffs/day
        </div>
      </div>
    </div>
  );
}