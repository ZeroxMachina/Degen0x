// ─────────────────────────────────────────────────────────────────────────────
//  degen0x · POST /api/standup-email
//  Sends the hourly standup report email to Jefe via Resend.
//
//  Called by the standup scheduled task after writing the JSON report.
//  Protected by STANDUP_EMAIL_SECRET header.
//
//  Body: { report: StandupReport, to?: string }
//
//  Setup (Vercel env vars):
//    RESEND_API_KEY=re_xxx
//    STANDUP_EMAIL_SECRET=any-secret-string
//    STANDUP_FROM_EMAIL=standup@degen0x.com  (optional)
// ─────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from "next/server";

const RESEND_API = "https://api.resend.com/emails";
const DEFAULT_TO = "amoros@protonmail.com";

// ── Auth ──────────────────────────────────────────────────────────────────────

function authorized(req: NextRequest): boolean {
  const secret = process.env.STANDUP_EMAIL_SECRET ?? "";
  if (!secret) return true; // No secret set = open (dev mode)
  return req.headers.get("x-standup-secret") === secret;
}

// ── Color helper ──────────────────────────────────────────────────────────────

function metricBar(pct: number, color: string): string {
  const filled = Math.max(0, Math.min(100, pct));
  return `<div style="background:#1e293b;border-radius:4px;height:6px;width:100%;margin-top:4px"><div style="background:${color};border-radius:4px;height:6px;width:${filled}%"></div></div>`;
}

// ── HTML builder ──────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function buildHtml(data: any): string {
  const d = data?.date ?? new Date().toISOString().slice(0, 10);
  const r = data?.report ?? {};
  const summary: string = r.summary ?? "";
  const sections: unknown[] = r.sections ?? [];
  const skillsUsed: string[] = r.skills_used ?? [];

  let sectionsHtml = "";

  for (const section of sections as Record<string, unknown>[]) {
    const title = String(section.title ?? "");
    sectionsHtml += `<tr><td style="padding:24px 32px 0"><h2 style="margin:0 0 12px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#94a3b8">${title}</h2></td></tr>`;

    if (Array.isArray(section.items)) {
      const items = (section.items as string[])
        .map((item) => `<li style="margin-bottom:8px;color:#cbd5e1;line-height:1.6">${item}</li>`)
        .join("");
      sectionsHtml += `<tr><td style="padding:0 32px"><ul style="margin:0;padding-left:20px">${items}</ul></td></tr>`;
    }

    if (Array.isArray(section.metrics)) {
      const metricsHtml = (section.metrics as Record<string, unknown>[])
        .map((m) => {
          const label = String(m.label ?? "");
          const value = String(m.value ?? "");
          const pct = Number(m.pct ?? 0);
          const color = String(m.color ?? "#06b6d4");
          return `<tr><td style="padding:8px 0;border-bottom:1px solid #1e293b"><div style="display:flex;justify-content:space-between;align-items:baseline"><span style="color:#94a3b8;font-size:13px">${label}</span><span style="color:${color};font-size:13px;font-weight:600;margin-left:16px;white-space:nowrap">${value}</span></div>${metricBar(pct, color)}</td></tr>`;
        })
        .join("");
      sectionsHtml += `<tr><td style="padding:0 32px"><table width="100%" cellpadding="0" cellspacing="0" border="0">${metricsHtml}</table></td></tr>`;
    }

    if (Array.isArray(section.pages)) {
      const pages = (section.pages as Record<string, string>[])
        .map((p) => `<li style="margin-bottom:6px;color:#cbd5e1;font-size:13px"><code style="background:#1e293b;padding:2px 6px;border-radius:3px;color:#7dd3fc">${p.slug ?? ""}</code> <span style="color:#4ade80">✓</span></li>`)
        .join("");
      sectionsHtml += `<tr><td style="padding:0 32px"><ul style="margin:0;padding-left:20px">${pages}</ul></td></tr>`;
    }
  }

  const badges = skillsUsed
    .map((s) => `<span style="display:inline-block;background:#1e293b;color:#7dd3fc;font-size:11px;padding:3px 8px;border-radius:4px;margin:2px">${s}</span>`)
    .join("");

  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0f172a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#0f172a;padding:32px 16px">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" border="0" style="background:#0f172a;border:1px solid #1e293b;border-radius:12px;overflow:hidden;max-width:600px">
<tr><td style="background:linear-gradient(135deg,#1e293b 0%,#0f172a 100%);padding:24px 32px;border-bottom:1px solid #1e293b">
<table width="100%" cellpadding="0" cellspacing="0"><tr>
<td><div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#475569;margin-bottom:4px">degen0x · STANDUP</div><div style="font-size:22px;font-weight:800;color:#f1f5f9">${d}</div></td>
<td align="right"><div style="background:#4ade80;color:#0f172a;font-size:11px;font-weight:700;padding:4px 10px;border-radius:20px;text-transform:uppercase;letter-spacing:0.06em">LIVE</div></td>
</tr></table></td></tr>
<tr><td style="padding:20px 32px;border-bottom:1px solid #1e293b;background:#1e293b22"><p style="margin:0;color:#94a3b8;font-size:14px;line-height:1.7;font-style:italic">${summary}</p></td></tr>
${sectionsHtml}
<tr><td style="padding:20px 32px;border-top:1px solid #1e293b;margin-top:24px"><div style="margin-bottom:8px;font-size:11px;color:#475569;text-transform:uppercase;letter-spacing:0.08em">Skills used</div><div>${badges}</div></td></tr>
<tr><td style="padding:12px 32px 24px;text-align:center"><div style="font-size:11px;color:#334155">degen0x hourly standup · auto-generated · <a href="https://degen0x.com" style="color:#7dd3fc;text-decoration:none">degen0x.com</a></div></td></tr>
</table></td></tr></table></body></html>`;
}

// ── Text fallback ──────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function buildText(data: any): string {
  const d = data?.date ?? "";
  const r = data?.report ?? {};
  const lines: string[] = [`degen0x Standup — ${d}`, "=".repeat(50), "", r.summary ?? "", ""];
  for (const section of (r.sections ?? []) as Record<string, unknown>[]) {
    lines.push(`\n## ${section.title ?? ""}`);
    for (const item of (section.items ?? []) as string[]) lines.push(`  • ${item}`);
    for (const m of (section.metrics ?? []) as Record<string, unknown>[]) {
      lines.push(`  ${m.label} → ${m.value}`);
    }
  }
  return lines.join("\n");
}

// ── Handler ───────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  if (!authorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const apiKey = process.env.RESEND_API_KEY ?? "";
  if (!apiKey) {
    return NextResponse.json({ error: "RESEND_API_KEY not configured" }, { status: 500 });
  }

  const fromEmail = process.env.STANDUP_FROM_EMAIL ?? "standup@degen0x.com";

  let body: { report?: unknown; to?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const reportData = body.report;
  const to = body.to ?? DEFAULT_TO;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = reportData as any;
  const date = data?.date ?? new Date().toISOString().slice(0, 10);
  const summary: string = data?.report?.summary ?? "";
  const subject = `degen0x Standup · ${date} · ${summary.slice(0, 60)}${summary.length > 60 ? "…" : ""}`;

  const html = buildHtml(data);
  const text = buildText(data);

  const res = await fetch(RESEND_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `degen0x <${fromEmail}>`,
      to: [to],
      subject,
      html,
      text,
      tags: [
        { name: "type", value: "standup" },
        { name: "date", value: date },
      ],
    }),
  });

  const result = await res.json().catch(() => ({}));

  if (!res.ok) {
    return NextResponse.json(
      { error: (result as { message?: string }).message ?? `Resend error ${res.status}` },
      { status: res.status }
    );
  }

  return NextResponse.json({ ok: true, messageId: (result as { id?: string }).id });
}

// Health check
export async function GET() {
  return NextResponse.json({
    ok: true,
    configured: !!process.env.RESEND_API_KEY,
    from: process.env.STANDUP_FROM_EMAIL ?? "standup@degen0x.com",
  });
}
