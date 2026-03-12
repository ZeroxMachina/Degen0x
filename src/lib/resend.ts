// ─────────────────────────────────────────────────────────────────────────────
//  degen0x · Resend ESP Integration
//  Sprint 26 · Day 32
//
//  SETUP INSTRUCTIONS FOR JEFE:
//  1. Sign up at https://resend.com (free tier: 3,000 emails/month)
//  2. Add your domain (degen0x.com) and verify DNS records
//  3. Copy your API key → add to .env.local as RESEND_API_KEY
//  4. Set NEWSLETTER_FROM_EMAIL=newsletter@degen0x.com
//  5. Run `npm run dev` — the /api/subscribe endpoint is live
//
//  Tier system:
//    Free    → weekly digest only
//    Pro $9  → weekly digest + alpha picks + DeFi yields
//    Elite $29 → everything + whale alerts + private TG group access
// ─────────────────────────────────────────────────────────────────────────────

export type NewsletterTier = "free" | "pro" | "elite";

export interface SubscribePayload {
  email: string;
  firstName?: string;
  tier: NewsletterTier;
  source?: string; // e.g. "homepage", "tools/converter", "ja", "de"
  language?: string; // "en" | "ja" | "de" | "es" | "fr" | "pt-br"
}

export interface ResendContact {
  email: string;
  first_name?: string;
  last_name?: string;
  unsubscribed?: boolean;
}

// ─── Resend API wrapper ───────────────────────────────────────────────────────

const RESEND_API_KEY = process.env.RESEND_API_KEY ?? "";
const RESEND_BASE = "https://api.resend.com";

// Audience IDs — create these in your Resend dashboard and add to .env.local
const AUDIENCE_IDS: Record<NewsletterTier, string> = {
  free: process.env.RESEND_AUDIENCE_FREE ?? "",
  pro: process.env.RESEND_AUDIENCE_PRO ?? "",
  elite: process.env.RESEND_AUDIENCE_ELITE ?? "",
};

export const FROM_EMAIL =
  process.env.NEWSLETTER_FROM_EMAIL ?? "newsletter@degen0x.com";

export const FROM_NAME = "degen0x";

// ─── Core helpers ─────────────────────────────────────────────────────────────

async function resendFetch<T>(
  path: string,
  options: RequestInit = {}
): Promise<{ data: T | null; error: string | null }> {
  if (!RESEND_API_KEY) {
    console.warn("[Resend] RESEND_API_KEY not set — skipping real send");
    return { data: null, error: "RESEND_API_KEY not configured" };
  }

  const res = await fetch(`${RESEND_BASE}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const json = await res.json().catch(() => ({}));

  if (!res.ok) {
    const msg = (json as { message?: string }).message ?? `HTTP ${res.status}`;
    return { data: null, error: msg };
  }

  return { data: json as T, error: null };
}

// ─── Add contact to audience ──────────────────────────────────────────────────

export async function addContactToAudience(
  payload: SubscribePayload
): Promise<{ success: boolean; error?: string; contactId?: string }> {
  const audienceId = AUDIENCE_IDS[payload.tier];

  if (!audienceId) {
    return {
      success: false,
      error: `Audience ID for tier "${payload.tier}" not configured (RESEND_AUDIENCE_${payload.tier.toUpperCase()})`,
    };
  }

  const body: Record<string, unknown> = {
    email: payload.email,
    unsubscribed: false,
  };

  if (payload.firstName) body.first_name = payload.firstName;

  const result = await resendFetch<{ id: string }>(
    `/audiences/${audienceId}/contacts`,
    { method: "POST", body: JSON.stringify(body) }
  );

  if (result.error) return { success: false, error: result.error };
  return { success: true, contactId: result.data?.id };
}

// ─── Send welcome email ───────────────────────────────────────────────────────

export interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
  tags?: { name: string; value: string }[];
}

export async function sendEmail(
  options: SendEmailOptions
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const body = {
    from: `${FROM_NAME} <${FROM_EMAIL}>`,
    to: [options.to],
    subject: options.subject,
    html: options.html,
    ...(options.text ? { text: options.text } : {}),
    ...(options.replyTo ? { reply_to: options.replyTo } : {}),
    ...(options.tags ? { tags: options.tags } : {}),
  };

  const result = await resendFetch<{ id: string }>("/emails", {
    method: "POST",
    body: JSON.stringify(body),
  });

  if (result.error) return { success: false, error: result.error };
  return { success: true, messageId: result.data?.id };
}

// ─── Bulk send (for digest blasts) ───────────────────────────────────────────

export async function sendBatchEmails(
  emails: SendEmailOptions[]
): Promise<{ sent: number; failed: number; errors: string[] }> {
  const results = await Promise.allSettled(emails.map(sendEmail));
  let sent = 0;
  let failed = 0;
  const errors: string[] = [];

  for (const r of results) {
    if (r.status === "fulfilled" && r.value.success) {
      sent++;
    } else {
      failed++;
      if (r.status === "fulfilled" && r.value.error) errors.push(r.value.error);
      else if (r.status === "rejected") errors.push(String(r.reason));
    }
  }

  return { sent, failed, errors };
}

// ─── Unsubscribe ──────────────────────────────────────────────────────────────

export async function unsubscribeContact(
  email: string,
  tier: NewsletterTier
): Promise<{ success: boolean; error?: string }> {
  const audienceId = AUDIENCE_IDS[tier];
  if (!audienceId) return { success: false, error: "Audience not configured" };

  // Resend uses PATCH to update unsubscribed flag
  const result = await resendFetch(`/audiences/${audienceId}/contacts/${encodeURIComponent(email)}`, {
    method: "PATCH",
    body: JSON.stringify({ unsubscribed: true }),
  });

  if (result.error) return { success: false, error: result.error };
  return { success: true };
}

// ─── Tag helpers ──────────────────────────────────────────────────────────────

export function buildTags(payload: SubscribePayload) {
  return [
    { name: "tier", value: payload.tier },
    { name: "source", value: payload.source ?? "unknown" },
    { name: "language", value: payload.language ?? "en" },
  ];
}

// ─── Tier upgrade ─────────────────────────────────────────────────────────────

export async function upgradeTier(
  email: string,
  fromTier: NewsletterTier,
  toTier: NewsletterTier
): Promise<{ success: boolean; error?: string }> {
  // Remove from old audience
  const fromId = AUDIENCE_IDS[fromTier];
  const toId = AUDIENCE_IDS[toTier];

  if (fromId) {
    await resendFetch(`/audiences/${fromId}/contacts/${encodeURIComponent(email)}`, {
      method: "DELETE",
    });
  }

  // Add to new audience
  if (!toId) return { success: false, error: `Target audience "${toTier}" not configured` };

  const result = await resendFetch<{ id: string }>(`/audiences/${toId}/contacts`, {
    method: "POST",
    body: JSON.stringify({ email, unsubscribed: false }),
  });

  if (result.error) return { success: false, error: result.error };
  return { success: true };
}
