// ─────────────────────────────────────────────
//  Newsletter Subscription API
//  degen0x · Sprint 43
//  Handles newsletter signups, preference management,
//  and automated welcome email trigger
// ─────────────────────────────────────────────

import { NextRequest, NextResponse } from "next/server";

// In-memory store for demo — would be database in production
const subscribers = new Map<
  string,
  {
    email: string;
    tier: "free" | "pro" | "whale";
    preferences: string[];
    referralCode: string;
    subscribedAt: string;
    confirmed: boolean;
  }
>();

function generateReferralCode(): string {
  return "DEGEN" + Math.random().toString(36).substring(2, 8).toUpperCase();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, tier = "free", preferences = [] } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email required" },
        { status: 400 }
      );
    }

    if (subscribers.has(email)) {
      return NextResponse.json(
        { error: "Already subscribed", referralCode: subscribers.get(email)?.referralCode },
        { status: 409 }
      );
    }

    const referralCode = generateReferralCode();

    subscribers.set(email, {
      email,
      tier,
      preferences,
      referralCode,
      subscribedAt: new Date().toISOString(),
      confirmed: false,
    });

    // In production: trigger welcome email via Resend/SendGrid
    // await sendWelcomeEmail(email, tier, referralCode);

    return NextResponse.json({
      success: true,
      message: "Subscribed successfully! Check your email for confirmation.",
      referralCode,
      tier,
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    totalSubscribers: subscribers.size,
    tiers: {
      free: [...subscribers.values()].filter((s) => s.tier === "free").length,
      pro: [...subscribers.values()].filter((s) => s.tier === "pro").length,
      whale: [...subscribers.values()].filter((s) => s.tier === "whale").length,
    },
  });
}
