// ─────────────────────────────────────────────────────────────────────────────
//  degen0x · POST /api/subscribe
//  Sprint 26 · Day 32
//
//  Handles newsletter signups from any page (homepage, /ja, /de, tools, etc.)
//  1. Validates email + tier
//  2. Adds contact to Resend audience
//  3. Fires welcome email from email-templates.ts
//  4. Returns success/error JSON
// ─────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from "next/server";
import {
  addContactToAudience,
  sendEmail,
  buildTags,
  type SubscribePayload,
  type NewsletterTier,
} from "@/lib/resend";
import { EMAIL_WELCOME } from "@/lib/email-templates";

// Simple email regex — RFC 5322 lite
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_TIERS: NewsletterTier[] = ["free", "pro", "elite"];

function buildWelcomeHtml(firstName: string, tier: NewsletterTier): string {
  // Personalise the existing template
  const name = firstName || "Degen";
  let tierNote = "";
  if (tier === "pro")
    tierNote = `<p style="color:#f7931a;font-weight:700">🚀 You're on Pro — weekly alpha picks + DeFi yield reports are on their way.</p>`;
  if (tier === "elite")
    tierNote = `<p style="color:#bc8cff;font-weight:700">💎 You're on Elite — whale alerts + private Telegram access incoming!</p>`;

  return EMAIL_WELCOME.html
    .replace(/\{\{first_name\}\}/g, name)
    .replace("<!-- TIER_NOTE -->", tierNote);
}

function buildWelcomeText(firstName: string, tier: NewsletterTier): string {
  const name = firstName || "Degen";
  let tierNote = "";
  if (tier === "pro") tierNote = "\n\nYou're on Pro — weekly alpha picks + DeFi yield reports incoming.";
  if (tier === "elite") tierNote = "\n\nYou're on Elite — whale alerts + private Telegram access incoming!";
  return `Welcome to degen0x, ${name}!${tierNote}\n\nWe're your trusted guide to the crypto world.\n\nhttps://degen0x.com`;
}

export async function POST(req: NextRequest) {
  // ── Parse body ────────────────────────────────────────────────────────────
  let body: Partial<SubscribePayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { email, firstName, tier = "free", source, language } = body;

  // ── Validate ──────────────────────────────────────────────────────────────
  if (!email || typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  if (!VALID_TIERS.includes(tier as NewsletterTier)) {
    return NextResponse.json(
      { error: `Invalid tier. Must be one of: ${VALID_TIERS.join(", ")}` },
      { status: 400 }
    );
  }

  const payload: SubscribePayload = {
    email: email.toLowerCase().trim(),
    firstName: firstName?.trim(),
    tier: tier as NewsletterTier,
    source: source ?? req.headers.get("referer") ?? "unknown",
    language: language ?? "en",
  };

  // ── Add to Resend audience ─────────────────────────────────────────────────
  const contactResult = await addContactToAudience(payload);

  if (!contactResult.success) {
    console.error("[subscribe] Failed to add contact:", contactResult.error);
    // We log the error but don't block — still send welcome email
  }

  // ── Send welcome email ─────────────────────────────────────────────────────
  const tags = buildTags(payload);
  const emailResult = await sendEmail({
    to: payload.email,
    subject: EMAIL_WELCOME.subject,
    html: buildWelcomeHtml(payload.firstName ?? "", payload.tier),
    text: buildWelcomeText(payload.firstName ?? "", payload.tier),
    replyTo: "support@degen0x.com",
    tags,
  });

  if (!emailResult.success) {
    console.error("[subscribe] Failed to send welcome email:", emailResult.error);
  }

  // ── Log (replace with DB insert later) ───────────────────────────────────
  const logEntry = {
    ts: new Date().toISOString(),
    email: payload.email,
    tier: payload.tier,
    source: payload.source,
    language: payload.language,
    contactId: contactResult.contactId,
    messageId: emailResult.messageId,
  };
  console.log("[subscribe] new_signup", JSON.stringify(logEntry));

  // ── Response ──────────────────────────────────────────────────────────────
  return NextResponse.json(
    {
      success: true,
      tier: payload.tier,
      message: "Welcome! Check your inbox for a confirmation email.",
    },
    { status: 201 }
  );
}

// ── GET — health check ────────────────────────────────────────────────────────
export async function GET() {
  const configured = !!(process.env.RESEND_API_KEY);
  return NextResponse.json({
    endpoint: "POST /api/subscribe",
    status: configured ? "ready" : "needs_api_key",
    hint: configured
      ? "Resend API key is configured ✓"
      : "Set RESEND_API_KEY in .env.local to enable email sending",
    tiers: ["free", "pro", "elite"],
  });
}
