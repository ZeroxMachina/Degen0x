'use client';
import { useState } from "react";
import Link from "next/link";

const S = { bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d", text: "#e6edf3", text2: "#8b949e", blue: "#58a6ff", green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff", cyan: "#06b6d4" };

interface ToggleProps { label: string; desc: string; enabled: boolean; onToggle: () => void; icon: string }
function Toggle({ label, desc, enabled, onToggle, icon }: ToggleProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderBottom: `1px solid ${S.border}` }}>
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
        <span style={{ fontSize: 20 }}>{icon}</span>
        <div>
          <div style={{ fontWeight: 600, fontSize: 14 }}>{label}</div>
          <div style={{ color: S.text2, fontSize: 12, marginTop: 2 }}>{desc}</div>
        </div>
      </div>
      <button onClick={onToggle} style={{ width: 44, height: 24, borderRadius: 12, border: "none", cursor: "pointer", background: enabled ? S.green : S.border, position: "relative", transition: "background 0.2s" }}>
        <div style={{ width: 18, height: 18, borderRadius: 9, background: "#fff", position: "absolute", top: 3, left: enabled ? 23 : 3, transition: "left 0.2s" }} />
      </button>
    </div>
  );
}

export default function NotificationSettingsPage() {
  const [prefs, setPrefs] = useState({
    priceAlerts: true, whaleAlerts: false, newDappListings: true, courseUpdates: true,
    xpMilestones: true, dailyChallengeReminder: true, weeklyDigest: true, securityAlerts: true,
    emailNewsletter: true, emailWeeklyReport: true, emailProductUpdates: true, emailDripCampaign: true,
    pushFrequency: "realtime" as "realtime" | "hourly" | "daily",
    emailFrequency: "weekly" as "daily" | "weekly" | "monthly",
    quietHoursEnabled: false, quietHoursStart: "22:00", quietHoursEnd: "08:00",
  });
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  const toggle = (key: keyof typeof prefs) => {
    setPrefs(p => ({ ...p, [key]: !p[key] }));
    setSaved(false);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await fetch("/api/notifications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: "demo-user", prefs }),
      });
      setSaved(true);
    } catch { /* silently fail in demo */ }
    setSaving(false);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link><span>/</span>
        <Link href="/settings" style={{ color: S.text2, textDecoration: "none" }}>Settings</Link><span>/</span>
        <span style={{ color: S.text }}>Notifications</span>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "40px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
          <div>
            <h1 style={{ fontSize: "1.8rem", fontWeight: 800, margin: 0 }}>Notification Preferences</h1>
            <p style={{ color: S.text2, fontSize: 14, margin: "6px 0 0" }}>Control how and when degen0x reaches you</p>
          </div>
          <button onClick={handleSave} disabled={saving} style={{ padding: "10px 24px", background: saved ? S.green : S.blue, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: "pointer", opacity: saving ? 0.6 : 1 }}>
            {saving ? "Saving..." : saved ? "Saved!" : "Save Changes"}
          </button>
        </div>

        {/* Push Notifications */}
        <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 14, padding: "20px 24px", marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <span style={{ fontSize: 16 }}>🔔</span>
            <h2 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>Push Notifications</h2>
          </div>
          <Toggle icon="💰" label="Price Alerts" desc="Get notified when tokens hit your target price" enabled={prefs.priceAlerts} onToggle={() => toggle("priceAlerts")} />
          <Toggle icon="🐋" label="Whale Alerts" desc="Large transactions on tracked protocols" enabled={prefs.whaleAlerts} onToggle={() => toggle("whaleAlerts")} />
          <Toggle icon="🆕" label="New dApp Listings" desc="When new protocols are added to the ecosystem" enabled={prefs.newDappListings} onToggle={() => toggle("newDappListings")} />
          <Toggle icon="📚" label="Course Updates" desc="New lessons, chapters, and course content" enabled={prefs.courseUpdates} onToggle={() => toggle("courseUpdates")} />
          <Toggle icon="⭐" label="XP Milestones" desc="Level ups, badge unlocks, and XP achievements" enabled={prefs.xpMilestones} onToggle={() => toggle("xpMilestones")} />
          <Toggle icon="🎯" label="Daily Challenge Reminder" desc="Remind me to complete the daily challenge" enabled={prefs.dailyChallengeReminder} onToggle={() => toggle("dailyChallengeReminder")} />
          <Toggle icon="📊" label="Weekly Digest" desc="Summary of your progress and top DeFi moves" enabled={prefs.weeklyDigest} onToggle={() => toggle("weeklyDigest")} />
          <Toggle icon="🛡️" label="Security Alerts" desc="Critical security updates and exploit warnings" enabled={prefs.securityAlerts} onToggle={() => toggle("securityAlerts")} />

          <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ color: S.text2, fontSize: 13, fontWeight: 600 }}>Frequency:</span>
            {(["realtime", "hourly", "daily"] as const).map(f => (
              <button key={f} onClick={() => { setPrefs(p => ({ ...p, pushFrequency: f })); setSaved(false); }} style={{ padding: "6px 14px", borderRadius: 6, border: `1px solid ${prefs.pushFrequency === f ? S.blue : S.border}`, background: prefs.pushFrequency === f ? `${S.blue}20` : "transparent", color: prefs.pushFrequency === f ? S.blue : S.text2, fontSize: 12, fontWeight: 600, cursor: "pointer", textTransform: "capitalize" }}>
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Email Notifications */}
        <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 14, padding: "20px 24px", marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <span style={{ fontSize: 16 }}>📧</span>
            <h2 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>Email Notifications</h2>
          </div>
          <Toggle icon="📰" label="Newsletter" desc="Weekly crypto news, guides, and alpha" enabled={prefs.emailNewsletter} onToggle={() => toggle("emailNewsletter")} />
          <Toggle icon="📈" label="Weekly Report" desc="Your portfolio performance and XP summary" enabled={prefs.emailWeeklyReport} onToggle={() => toggle("emailWeeklyReport")} />
          <Toggle icon="🚀" label="Product Updates" desc="New features, tools, and platform improvements" enabled={prefs.emailProductUpdates} onToggle={() => toggle("emailProductUpdates")} />
          <Toggle icon="🎓" label="Learning Journey" desc="Personalized course recommendations and tips" enabled={prefs.emailDripCampaign} onToggle={() => toggle("emailDripCampaign")} />

          <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ color: S.text2, fontSize: 13, fontWeight: 600 }}>Frequency:</span>
            {(["daily", "weekly", "monthly"] as const).map(f => (
              <button key={f} onClick={() => { setPrefs(p => ({ ...p, emailFrequency: f })); setSaved(false); }} style={{ padding: "6px 14px", borderRadius: 6, border: `1px solid ${prefs.emailFrequency === f ? S.purple : S.border}`, background: prefs.emailFrequency === f ? `${S.purple}20` : "transparent", color: prefs.emailFrequency === f ? S.purple : S.text2, fontSize: 12, fontWeight: 600, cursor: "pointer", textTransform: "capitalize" }}>
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Quiet Hours */}
        <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 14, padding: "20px 24px", marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 16 }}>🌙</span>
              <div>
                <h2 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>Quiet Hours</h2>
                <p style={{ color: S.text2, fontSize: 12, margin: "4px 0 0" }}>Pause non-critical notifications during sleep</p>
              </div>
            </div>
            <button onClick={() => toggle("quietHoursEnabled")} style={{ width: 44, height: 24, borderRadius: 12, border: "none", cursor: "pointer", background: prefs.quietHoursEnabled ? S.green : S.border, position: "relative", transition: "background 0.2s" }}>
              <div style={{ width: 18, height: 18, borderRadius: 9, background: "#fff", position: "absolute", top: 3, left: prefs.quietHoursEnabled ? 23 : 3, transition: "left 0.2s" }} />
            </button>
          </div>
          {prefs.quietHoursEnabled && (
            <div style={{ display: "flex", gap: 16, marginTop: 16, alignItems: "center" }}>
              <div>
                <label style={{ color: S.text2, fontSize: 11, fontWeight: 600 }}>FROM</label>
                <input type="time" value={prefs.quietHoursStart} onChange={e => { setPrefs(p => ({ ...p, quietHoursStart: e.target.value })); setSaved(false); }} style={{ display: "block", marginTop: 4, padding: "8px 12px", background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 6, color: S.text, fontSize: 14 }} />
              </div>
              <span style={{ color: S.text2, marginTop: 16 }}>to</span>
              <div>
                <label style={{ color: S.text2, fontSize: 11, fontWeight: 600 }}>UNTIL</label>
                <input type="time" value={prefs.quietHoursEnd} onChange={e => { setPrefs(p => ({ ...p, quietHoursEnd: e.target.value })); setSaved(false); }} style={{ display: "block", marginTop: 4, padding: "8px 12px", background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 6, color: S.text, fontSize: 14 }} />
              </div>
            </div>
          )}
        </div>

        {/* Danger zone */}
        <div style={{ background: `${S.surface}`, border: `1px solid #f8514930`, borderRadius: 14, padding: "20px 24px" }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 8px", color: "#f85149" }}>Unsubscribe All</h2>
          <p style={{ color: S.text2, fontSize: 13, margin: "0 0 12px" }}>Turn off all email and push notifications. You can re-enable them anytime.</p>
          <button onClick={() => { setPrefs(p => ({ ...p, priceAlerts: false, whaleAlerts: false, newDappListings: false, courseUpdates: false, xpMilestones: false, dailyChallengeReminder: false, weeklyDigest: false, securityAlerts: false, emailNewsletter: false, emailWeeklyReport: false, emailProductUpdates: false, emailDripCampaign: false })); setSaved(false); }} style={{ padding: "8px 16px", background: "#f8514920", color: "#f85149", border: "1px solid #f8514940", borderRadius: 6, fontWeight: 600, fontSize: 12, cursor: "pointer" }}>
            Turn Off All Notifications
          </button>
        </div>
      </div>
    </main>
  );
}
