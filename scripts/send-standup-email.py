#!/usr/bin/env python3
"""
degen0x · Hourly Standup Email Sender
Reads the latest standup JSON report and sends it to Jefe via Resend API.

SETUP REQUIRED (Jefe):
  1. Add RESEND_API_KEY to /sessions/exciting-vigilant-volta/mnt/cryptodegen/.env.local
  2. Verify degen0x.com domain in Resend dashboard (resend.com)
  3. Optionally set STANDUP_FROM_EMAIL (default: standup@degen0x.com)

Usage:
  python3 scripts/send-standup-email.py
  python3 scripts/send-standup-email.py --date 2026-03-15
  python3 scripts/send-standup-email.py --to other@email.com
"""

import json
import os
import sys
import argparse
import urllib.request
import urllib.error
from datetime import date
from pathlib import Path

# ── Config ────────────────────────────────────────────────────────────────────

WORKSPACE = Path(__file__).parent.parent
REPORTS_DIR = WORKSPACE / "reports"
ENV_FILE = WORKSPACE / ".env.local"

RECIPIENT = "amoros@protonmail.com"
RESEND_API = "https://api.resend.com/emails"

# ── Load .env.local ───────────────────────────────────────────────────────────

def load_env(path: Path) -> dict:
    env = {}
    if path.exists():
        for line in path.read_text().splitlines():
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, _, v = line.partition("=")
                env[k.strip()] = v.strip()
    return env

# ── Color helpers ─────────────────────────────────────────────────────────────

COLOR_NAMES = {
    "#4ade80": "#4ade80",  # green
    "#06b6d4": "#06b6d4",  # cyan
    "#f59e0b": "#f59e0b",  # amber
    "#ef4444": "#ef4444",  # red
    "#a78bfa": "#a78bfa",  # purple
    "#10b981": "#10b981",  # emerald
}

def metric_bar(pct: int, color: str) -> str:
    filled = max(0, min(100, pct))
    return (
        f'<div style="background:#1e293b;border-radius:4px;height:6px;width:100%;margin-top:4px">'
        f'<div style="background:{color};border-radius:4px;height:6px;width:{filled}%"></div>'
        f'</div>'
    )

# ── HTML builder ──────────────────────────────────────────────────────────────

def build_html(report_data: dict) -> str:
    d = report_data.get("date", str(date.today()))
    block = report_data.get("block", "standup")
    r = report_data.get("report", {})
    summary = r.get("summary", "")
    sections = r.get("sections", [])
    skills_used = r.get("skills_used", [])

    sections_html = ""
    for section in sections:
        title = section.get("title", "")
        sections_html += f"""
        <tr><td style="padding:24px 32px 0">
          <h2 style="margin:0 0 12px;font-size:13px;font-weight:700;text-transform:uppercase;
                     letter-spacing:0.08em;color:#94a3b8">{title}</h2>
        </td></tr>"""

        if "items" in section:
            items_html = "".join(
                f'<li style="margin-bottom:8px;color:#cbd5e1;line-height:1.6">{item}</li>'
                for item in section["items"]
            )
            sections_html += f"""
            <tr><td style="padding:0 32px">
              <ul style="margin:0;padding-left:20px">{items_html}</ul>
            </td></tr>"""

        if "metrics" in section:
            metrics_html = ""
            for m in section["metrics"]:
                label = m.get("label", "")
                value = m.get("value", "")
                pct = m.get("pct", 0)
                color = m.get("color", "#06b6d4")
                metrics_html += f"""
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #1e293b">
                    <div style="display:flex;justify-content:space-between;align-items:baseline">
                      <span style="color:#94a3b8;font-size:13px">{label}</span>
                      <span style="color:{color};font-size:13px;font-weight:600;
                                   margin-left:16px;white-space:nowrap">{value}</span>
                    </div>
                    {metric_bar(pct, color)}
                  </td>
                </tr>"""
            sections_html += f"""
            <tr><td style="padding:0 32px">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">{metrics_html}</table>
            </td></tr>"""

        if "pages" in section:
            pages_html = "".join(
                f'<li style="margin-bottom:6px;color:#cbd5e1;font-size:13px">'
                f'<code style="background:#1e293b;padding:2px 6px;border-radius:3px;color:#7dd3fc">'
                f'{p.get("slug","")}</code> '
                f'<span style="color:#4ade80">✓</span></li>'
                for p in section["pages"]
            )
            sections_html += f"""
            <tr><td style="padding:0 32px">
              <ul style="margin:0;padding-left:20px">{pages_html}</ul>
            </td></tr>"""

    skills_badges = "".join(
        f'<span style="display:inline-block;background:#1e293b;color:#7dd3fc;'
        f'font-size:11px;padding:3px 8px;border-radius:4px;margin:2px">{s}</span>'
        for s in skills_used
    )

    return f"""<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0f172a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#0f172a;padding:32px 16px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" border="0"
             style="background:#0f172a;border:1px solid #1e293b;border-radius:12px;overflow:hidden;max-width:600px">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#1e293b 0%,#0f172a 100%);padding:24px 32px;
                       border-bottom:1px solid #1e293b">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <div style="font-size:11px;font-weight:700;text-transform:uppercase;
                            letter-spacing:0.1em;color:#475569;margin-bottom:4px">degen0x · {block.upper()}</div>
                <div style="font-size:22px;font-weight:800;color:#f1f5f9">{d}</div>
              </td>
              <td align="right">
                <div style="background:#4ade80;color:#0f172a;font-size:11px;font-weight:700;
                            padding:4px 10px;border-radius:20px;text-transform:uppercase;
                            letter-spacing:0.06em">LIVE</div>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- Summary -->
        <tr><td style="padding:20px 32px;border-bottom:1px solid #1e293b;background:#1e293b22">
          <p style="margin:0;color:#94a3b8;font-size:14px;line-height:1.7;font-style:italic">
            {summary}
          </p>
        </td></tr>

        <!-- Sections -->
        {sections_html}

        <!-- Footer -->
        <tr><td style="padding:20px 32px;border-top:1px solid #1e293b;margin-top:24px">
          <div style="margin-bottom:8px;font-size:11px;color:#475569;text-transform:uppercase;
                      letter-spacing:0.08em">Skills used</div>
          <div>{skills_badges}</div>
        </td></tr>
        <tr><td style="padding:12px 32px 24px;text-align:center">
          <div style="font-size:11px;color:#334155">
            degen0x hourly standup · auto-generated · <a href="https://degen0x.com"
            style="color:#7dd3fc;text-decoration:none">degen0x.com</a>
          </div>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>"""

# ── Plain text fallback ───────────────────────────────────────────────────────

def build_text(report_data: dict) -> str:
    d = report_data.get("date", str(date.today()))
    r = report_data.get("report", {})
    summary = r.get("summary", "")
    sections = r.get("sections", [])

    lines = [f"degen0x Standup — {d}", "=" * 50, "", summary, ""]
    for section in sections:
        lines.append(f"\n## {section.get('title', '')}")
        for item in section.get("items", []):
            lines.append(f"  • {item}")
        for m in section.get("metrics", []):
            lines.append(f"  {m.get('label','')} → {m.get('value','')}")
    return "\n".join(lines)

# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--date", default=str(date.today()), help="Report date (YYYY-MM-DD)")
    parser.add_argument("--to", default=RECIPIENT, help="Recipient email")
    parser.add_argument("--dry-run", action="store_true", help="Print email without sending")
    args = parser.parse_args()

    # Load env
    env = load_env(ENV_FILE)
    api_key = env.get("RESEND_API_KEY", os.environ.get("RESEND_API_KEY", ""))
    from_email = env.get("STANDUP_FROM_EMAIL", env.get("NEWSLETTER_FROM_EMAIL", "standup@degen0x.com"))

    if not api_key and not args.dry_run:
        print("[send-standup-email] ⚠️  RESEND_API_KEY not set in .env.local — skipping send")
        print("[send-standup-email] Add RESEND_API_KEY=re_xxx to .env.local to enable emails")
        sys.exit(0)

    # Load report
    report_path = REPORTS_DIR / f"{args.date}-standup.json"
    if not report_path.exists():
        print(f"[send-standup-email] ❌ Report not found: {report_path}")
        sys.exit(1)

    report_data = json.loads(report_path.read_text())
    html = build_html(report_data)
    text = build_text(report_data)

    subject = f"degen0x Standup · {args.date} · {report_data.get('report', {}).get('summary', '')[:60]}..."

    if args.dry_run:
        print(f"[DRY RUN] To: {args.to}")
        print(f"[DRY RUN] From: {from_email}")
        print(f"[DRY RUN] Subject: {subject}")
        print("[DRY RUN] HTML preview saved to /tmp/standup-preview.html")
        Path("/tmp/standup-preview.html").write_text(html)
        sys.exit(0)

    # Send via Resend
    payload = json.dumps({
        "from": f"degen0x <{from_email}>",
        "to": [args.to],
        "subject": subject,
        "html": html,
        "text": text,
        "tags": [{"name": "type", "value": "standup"}, {"name": "date", "value": args.date}],
    }).encode()

    req = urllib.request.Request(
        RESEND_API,
        data=payload,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        method="POST",
    )

    try:
        with urllib.request.urlopen(req) as resp:
            result = json.loads(resp.read())
            print(f"[send-standup-email] ✅ Sent to {args.to} — message ID: {result.get('id','?')}")
    except urllib.error.HTTPError as e:
        body = e.read().decode()
        print(f"[send-standup-email] ❌ Resend error {e.code}: {body}")
        sys.exit(1)

if __name__ == "__main__":
    main()
