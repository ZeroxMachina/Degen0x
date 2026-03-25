// ─────────────────────────────────────────────────────────────────────────────
//  degen0x · /api/notifications
//  Sprint 57
//
//  GET  — Retrieve notification preferences for a wallet/email
//  POST — Update notification preferences
//  Stores prefs in-memory (replace with DB in production)
// ─────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from "next/server";

export interface NotificationPrefs {
  // Push categories
  priceAlerts: boolean;
  whaleAlerts: boolean;
  newDappListings: boolean;
  courseUpdates: boolean;
  xpMilestones: boolean;
  dailyChallengeReminder: boolean;
  weeklyDigest: boolean;
  securityAlerts: boolean;
  // Email categories
  emailNewsletter: boolean;
  emailWeeklyReport: boolean;
  emailProductUpdates: boolean;
  emailDripCampaign: boolean;
  // Frequency
  pushFrequency: "realtime" | "hourly" | "daily";
  emailFrequency: "daily" | "weekly" | "monthly";
  // Quiet hours
  quietHoursEnabled: boolean;
  quietHoursStart: string; // "22:00"
  quietHoursEnd: string;   // "08:00"
}

const DEFAULT_PREFS: NotificationPrefs = {
  priceAlerts: true,
  whaleAlerts: false,
  newDappListings: true,
  courseUpdates: true,
  xpMilestones: true,
  dailyChallengeReminder: true,
  weeklyDigest: true,
  securityAlerts: true,
  emailNewsletter: true,
  emailWeeklyReport: true,
  emailProductUpdates: true,
  emailDripCampaign: true,
  pushFrequency: "realtime",
  emailFrequency: "weekly",
  quietHoursEnabled: false,
  quietHoursStart: "22:00",
  quietHoursEnd: "08:00",
};

// In-memory store (replace with DB)
const prefsStore = new Map<string, NotificationPrefs>();

function getUserId(req: NextRequest): string | null {
  const url = new URL(req.url);
  return url.searchParams.get("userId") || url.searchParams.get("wallet") || null;
}

export async function GET(req: NextRequest) {
  const userId = getUserId(req);
  if (!userId) {
    return NextResponse.json({ error: "userId or wallet query param required" }, { status: 400 });
  }

  const prefs = prefsStore.get(userId) ?? { ...DEFAULT_PREFS };
  return NextResponse.json({ userId, prefs, defaults: !prefsStore.has(userId) });
}

export async function POST(req: NextRequest) {
  let body: { userId?: string; wallet?: string; prefs?: Partial<NotificationPrefs> };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const userId = body.userId || body.wallet;
  if (!userId) {
    return NextResponse.json({ error: "userId or wallet required in body" }, { status: 400 });
  }

  const existing = prefsStore.get(userId) ?? { ...DEFAULT_PREFS };
  const updated: NotificationPrefs = { ...existing, ...body.prefs };
  prefsStore.set(userId, updated);

  console.log(`[notifications] prefs_updated userId=${userId}`, JSON.stringify(updated));

  return NextResponse.json({ success: true, userId, prefs: updated }, { status: 200 });
}
