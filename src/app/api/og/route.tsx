/**
 * Dynamic OG Image Generation API
 * ─────────────────────────────────────────────────────────────────
 * Generates branded social sharing images for any page on degen0x.
 * Uses Next.js ImageResponse (Satori) for edge-compatible SVG→PNG.
 *
 * Usage: /api/og?title=My+Tool&category=Tools&type=tool
 *
 * Sprint 11 — Design Agent
 */
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "degen0x";
  const category = searchParams.get("category") ?? "Crypto";
  const type = searchParams.get("type") ?? "page"; // tool | learn | compare | exchange | wallet | page

  // Color schemes per content type
  const themes: Record<string, { accent: string; gradient: string; icon: string }> = {
    tool: { accent: "#6366f1", gradient: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)", icon: "⚡" },
    learn: { accent: "#0ea5e9", gradient: "linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)", icon: "📚" },
    compare: { accent: "#22c55e", gradient: "linear-gradient(135deg, #22c55e 0%, #06b6d4 100%)", icon: "⚖️" },
    exchange: { accent: "#f59e0b", gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)", icon: "⇄" },
    wallet: { accent: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)", icon: "🔐" },
    page: { accent: "#6366f1", gradient: "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)", icon: "🚀" },
  };

  const theme = themes[type] ?? themes.page;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          background: "#0d1117",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            display: "flex",
          }}
        />

        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${theme.accent}20 0%, transparent 70%)`,
            display: "flex",
          }}
        />

        {/* Top section: logo + category */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                fontSize: "32px",
                fontWeight: 800,
                background: theme.gradient,
                backgroundClip: "text",
                color: "transparent",
                display: "flex",
              }}
            >
              degen0x
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 20px",
              borderRadius: "30px",
              border: `1px solid ${theme.accent}40`,
              background: `${theme.accent}10`,
              fontSize: "18px",
              color: theme.accent,
              fontWeight: 600,
            }}
          >
            <span>{theme.icon}</span>
            <span>{category}</span>
          </div>
        </div>

        {/* Main title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: title.length > 40 ? "48px" : "56px",
              fontWeight: 800,
              color: "#e6edf3",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              display: "flex",
              maxWidth: "900px",
            }}
          >
            {title}
          </div>

          {/* Accent bar */}
          <div
            style={{
              width: "80px",
              height: "4px",
              borderRadius: "2px",
              background: theme.gradient,
              display: "flex",
            }}
          />
        </div>

        {/* Bottom section: URL + branding */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              color: "#8b949e",
              fontWeight: 500,
              display: "flex",
            }}
          >
            degen0x.com
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "16px",
              color: "#8b949e",
            }}
          >
            <span>Compare</span>
            <span style={{ color: theme.accent }}>·</span>
            <span>Review</span>
            <span style={{ color: theme.accent }}>·</span>
            <span>DYOR</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
