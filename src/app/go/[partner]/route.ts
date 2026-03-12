import { NextRequest, NextResponse } from "next/server";
import { AFFILIATE_PARTNERS } from "@/lib/affiliate";

/**
 * Affiliate redirect route: /go/[partner]
 *
 * - Logs affiliate click metadata (console for now; plug in analytics later)
 * - Attaches UTM parameters to outbound URL
 * - Redirects with 302 (temporary, so browsers don't cache)
 *
 * Future: POST click data to analytics endpoint / Supabase
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ partner: string }> }
) {
  const { partner: partnerSlug } = await params;
  const { searchParams } = request.nextUrl;

  const partner = AFFILIATE_PARTNERS.find((p) => p.slug === partnerSlug);

  if (!partner) {
    // Unknown partner — redirect to homepage
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Collect incoming UTM params (from internal links) to pass through
  const utmSource   = searchParams.get("utm_source")   || "degen0x";
  const utmMedium   = searchParams.get("utm_medium")   || "affiliate";
  const utmCampaign = searchParams.get("utm_campaign") || partner.category;
  const utmContent  = searchParams.get("utm_content")  || partnerSlug;

  // Log click for analytics (replace with real event tracking later)
  console.log(`[AFFILIATE CLICK] partner=${partnerSlug} source=${utmSource} medium=${utmMedium} campaign=${utmCampaign} content=${utmContent} time=${new Date().toISOString()}`);

  // Build destination URL
  const destination = new URL(partner.fallbackUrl);
  destination.searchParams.set("utm_source",   utmSource);
  destination.searchParams.set("utm_medium",   utmMedium);
  destination.searchParams.set("utm_campaign", utmCampaign);
  destination.searchParams.set("utm_content",  utmContent);
  destination.searchParams.set("ref",          "degen0x");

  const response = NextResponse.redirect(destination.toString(), { status: 302 });

  // Set affiliate click cookie for attribution window (30 days)
  response.cookies.set(`aff_${partnerSlug}`, "1", {
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
    sameSite: "lax",
    httpOnly: false,
  });

  return response;
}
