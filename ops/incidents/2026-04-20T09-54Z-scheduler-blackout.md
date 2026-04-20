# Incident: Scheduler blackout 2026-04-18T22:00Z → 2026-04-20T09:54Z

**Filed by:** `degen-morning-standup` (Claude Opus 4.7)
**Filed at:** 2026-04-20T09:54Z
**Severity:** P0
**Status:** OPEN — root cause unknown

## Summary
The entire scheduled-task fabric went dark for ~36h. No hourly standup, news briefing, notifications-feed, page-manifest, or SEO-manager brief ran between the 2026-04-18T22:00Z cycle and now. Production is up; pipeline feeding it is frozen.

## Signals
- `ops/hourly-log.csv` has no rows between 2026-04-18T22:00Z and 2026-04-20T09:54Z.
- `src/data/news-briefing.json` `generated_at` = 2026-04-18T22:03:16Z — ~36h stale.
- `src/data/notifications-feed.json` mtime = 2026-04-19T00:04Z — ~34h stale.
- `src/data/page-manifest.json` mtime = 2026-04-18T23:39Z — ~34h stale.
- `src/data/dapps.ts` mtime = 2026-04-18T23:39Z — ~34h stale.
- `ops/seo/` has no brief for 2026-04-19 or 2026-04-20.
- `git log --since="24 hours ago"` returns 0 commits. HEAD (`98771ac7`) is 36h old.
- `.git/index.lock` present (empty, Apr 20 11:54 local); blocks any committing task.
- `.git/refs/tags/auth-probe-1776425042.lock.stale.87` corrupt → `git fetch` fails.

## Possible root causes (ranked)
1. Cron scheduler off at the OS / Cowork layer — would explain all-tasks-simultaneous silence. Check scheduled-tasks MCP list output first.
2. Shared `.git/index.lock` blocker — each scheduled task hits it, retries, dies quietly. Would explain data-feed writes landing (they don't need git) but hourly-log / incident files not updating (they do).
3. Auth/credential rotation — `auth-probe-*` tag artifacts in `.git/refs/tags/` suggest recent probe-and-retry auth dances. PAT in `.auto-memory/.github-token` may have expired.
4. GitHub remote state diverged so far (+22 on remote) that every push fails, tasks give up, subsequent writes never persist.

## Action plan (assigned to next build-cycle agent)
1. `mv .git/index.lock .git/index.lock.stale.$$` then retry.
2. Inspect `.git/refs/tags/` for `auth-probe-*.lock*` files; `mv` them out of the way; re-run `git fetch origin`.
3. Compare local `master` (5f2b355e..98771ac7) to `origin/main` HEAD to understand the +22 — likely another runner has been pushing.
4. Manually trigger the news-briefing generator and confirm a fresh `briefing-2026-04-20-10` lands in `src/data/news-briefing.json`. This is the canary.
5. If generator runs but commit fails, the blocker is git. If generator doesn't run at all, the blocker is the scheduler itself — escalate to Jefe.
6. Close incidents 2026-04-17T07-20Z-uncommitted-wip, 2026-04-18T21-25Z-stale-data-feeds, 2026-04-18T21-46Z-cycle-close-data-stale-still-open, 2026-04-18T22-00Z-cycle-close-data-stale-hour-2 once pipeline is green — they are all facets of this root cause.

## Blast radius
- No customer-facing outage (site up, stale news widget only).
- Internal: build, QA, publish, SEO audit, and standup agents have all been running on stale state for 36h; any agenda or report dated 2026-04-19 does not exist, and any report dated 2026-04-20 prior to 09:54Z also does not exist.
