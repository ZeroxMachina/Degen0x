import { Metadata } from "next";
import { promises as fs } from "fs";
import path from "path";
import { SITE_NAME } from "@/lib/constants";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: `${SITE_NAME} - Onboarding the Next 1 Billion to Web3`,
  description: "The crypto world is powerful but intimidating. Free tools, honest reviews, and clear explanations. No account needed. No paywall. Ever.",
};

// Regenerate the homepage at most once per minute so fresh hourly briefings
// propagate quickly without waiting for a full redeploy.
export const revalidate = 60;

// Read the latest briefing from disk at request time. Using a static `import`
// snapshots the JSON at build time, which is why the homepage news widget
// was rendering stale stories until the next deploy.
const BRIEFING_PATH = path.join(process.cwd(), "src", "data", "news-briefing.json");

async function loadBriefing() {
  try {
    const raw = await fs.readFile(BRIEFING_PATH, "utf8");
    return JSON.parse(raw);
  } catch {
    // Fall through — HomeNewsSection has its own client-side fetch fallback.
    return undefined;
  }
}

export default async function HomePage() {
  const initialBriefing = await loadBriefing();
  return <HomeContent initialBriefing={initialBriefing} />;
}
