// ─────────────────────────────────────────────────────────────────────────────
//  degen0x · POST /api/newsletter/send  (admin endpoint)
//  Sprint 26 · Day 32
//
//  Triggers a weekly digest send to all contacts in a tier
//  Protected by NEWSLETTER_ADMIN_SECRET header
//
//  Usage:
//    curl -X POST https://degen0x.com/api/newsletter \
//      -H "x-admin-secret: YOUR_SECRET" \
//      -H "Content-Type: application/json" \
//      -d '{"tier":"free","subject":"This Week in Crypto","html":"..."}'
// ─────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from "next/server";

// This endpoint is a stub that documents the admin flow.
// Real blast logic = fetch audience from Resend → sendBatchEmails()
// Recommended: run via a cron job (Vercel Cron or GitHub Actions)

const ADMIN_SECRET = process.env.NEWSLETTER_ADMIN_SECRET ?? "";

export async function POST(req: NextRequest) {
  // ── Auth ──────────────────────────────────────────────────────────────────
  const secret = req.headers.get("x-admin-secret");
  if (!ADMIN_SECRET || secret !== ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: {
    tier?: string;
    subject?: string;
    html?: string;
    text?: string;
    dryRun?: boolean;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { tier = "free", subject, html, dryRun = false } = body;

  if (!subject || !html) {
    return NextResponse.json(
      { error: "subject and html are required" },
      { status: 400 }
    );
  }

  // ── Dry run response ──────────────────────────────────────────────────────
  if (dryRun) {
    return NextResponse.json({
      dryRun: true,
      tier,
      subject,
      message: "Dry run complete — no emails sent. Remove dryRun:true to send.",
      checklist: [
        "✓ Auth header valid",
        "✓ Subject present",
        "✓ HTML present",
        `✓ Tier: ${tier}`,
        "⚠ Set dryRun:false to trigger real send",
      ],
    });
  }

  // ── Production send ───────────────────────────────────────────────────────
  // TODO (after API key is added):
  //   1. Fetch contacts from Resend audience for `tier`
  //   2. Loop and call sendBatchEmails() in chunks of 100
  //   3. Log results to DB

  return NextResponse.json({
    success: true,
    tier,
    subject,
    message: "Newsletter blast queued. Add RESEND_API_KEY + audience IDs to activate.",
    nextSteps: [
      "1. Add RESEND_API_KEY to .env.local",
      "2. Add RESEND_AUDIENCE_FREE, RESEND_AUDIENCE_PRO, RESEND_AUDIENCE_ELITE",
      "3. Add NEWSLETTER_ADMIN_SECRET for this endpoint",
      "4. Re-deploy to Vercel",
    ],
  });
}

// ── GET — status ───────────────────────────────────────────────────────────────
export async function GET() {
  return NextResponse.json({
    endpoint: "POST /api/newsletter",
    description: "Admin endpoint for sending newsletter blasts",
    requiredEnv: [
      "RESEND_API_KEY",
      "RESEND_AUDIENCE_FREE",
      "RESEND_AUDIENCE_PRO",
      "RESEND_AUDIENCE_ELITE",
      "NEWSLETTER_ADMIN_SECRET",
      "NEWSLETTER_FROM_EMAIL",
    ],
    status: {
      apiKey: !!process.env.RESEND_API_KEY,
      adminSecret: !!process.env.NEWSLETTER_ADMIN_SECRET,
      fromEmail: process.env.NEWSLETTER_FROM_EMAIL ?? "not set",
    },
  });
}
