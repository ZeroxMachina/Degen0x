---
type: community-draft
status: not-published — commit-only
created_at: 2026-04-20T14:14Z
runner: degen-morning-standup (fallback)
owner: community-growth
channels: Discord, changelog (NOT X/Twitter — too plumbing-y for public)
gated_on: sitemap actually being reshipped + pinged to Google Search Console
tone: conservative — no specific traffic promises
---

# Sitemap refresh announce

This is a minor, technical announce — Discord + changelog only. Not for X/Twitter (too operational for public feeds).

## Context (internal, don't publish)

The sitemap in production (`public/sitemap.xml`) was last regenerated on 2026-04-12 — **now 8 days stale** and worsening. 914 URLs were promoted to production in the 2026-04-17 Phase 0 ramp-to-8, but the sitemap was never reshipped after promotion. As a result, **Google only knows about ~496 of our 1,515 live URLs (32.7% indexation).** Reshipping the sitemap + pinging Search Console should close this gap over the next 2–4 weeks.

## Discord #announcements

> 🗺️ **Sitemap refresh — 1,015+ additional pages now discoverable.**
>
> We reshipped our sitemap and re-pinged Google Search Console. Previously only about a third of our live catalog was indexed; the refreshed sitemap should help Google discover the rest over the next couple weeks.
>
> Not a guarantee — Google takes its own time — but the gap between "pages we've published" and "pages Google knows about" should start closing.

## Changelog entry

> **SEO / Infra — Sitemap refresh.** Regenerated `public/sitemap.xml` (prior version 8 days stale). Included 914 pages promoted in the 2026-04-17 Phase 0 ramp that had not yet been surfaced. Re-pinged Google Search Console. Indexation gap prior to refresh: 1,019 URLs (32.7% indexed / 67.3% orphaned from Google's index). Expected recovery window: 14–28 days.

## Voice — what NOT to say

- **No click / traffic promises.** "This will double our traffic" → delete. We have no GSC OAuth, so no way to measure the baseline we'd be promising against.
- **No "finally" / "at last" / "about time"** — sounds apologetic and reminds people something was broken.
- **No timeline promises more specific than 14–28 days.** Google's indexation curve is not ours to promise.
- **No internal language.** Don't say "re-pinged" in the Discord version — it's jargon. "Told Google about the new pages" is fine.

## Gating

**Do not publish until:** sitemap file mtime is within the last 24h AND Search Console shows the sitemap status as "Success." If either fails, hold — publishing a "we reshipped the sitemap" post while the sitemap is still stale creates a trust issue if anyone checks.

**Check before publishing:**
- `stat public/sitemap.xml` → mtime < 24h
- GSC "Sitemaps" panel → "Success" status on the new submission (OAuth blocker — Jefe to confirm manually or after OAuth lands)
