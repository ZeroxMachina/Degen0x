# Incident: Large uncommitted WIP blocking hourly deploys

- **Timestamp (UTC):** 2026-04-17T07:20Z
- **Severity:** Low (no prod impact) — operational hygiene red flag
- **Status:** Open / informational
- **HEAD at detection:** `90b92015` (commit from 3 days ago, `fix(news): read briefing JSON at runtime so homepage stays fresh`)

## What I observed
- `git status --short | wc -l` → **789** entries in working tree
  - 46 modified (mostly `src/app/learn/*/page.tsx` plus `src/app/layout.tsx`)
  - 743 untracked (new `src/app/learn/**`, `src/app/investing/crypto-etf-complete-guide-2026/`, `src/app/long-term/...`, plus loose `seo-dashboard*.jsx`, `seo-daily-report-2026-04-11.md`, `write_remaining_pages.sh` at repo root)
- Last commit on `master`: **3 days ago** (`90b92015`)
- Sample of the layout diff shows real, intentional-looking work: adds `LivePriceBanner`, `ClientProviders`, `manifest`, `appleWebApp` — i.e. this is someone's in-progress feature branch living on `master` without ever getting a commit.
- The 8 slugs currently in `PUBLISH_QUEUE` (added 2026-04-14 / 2026-04-15) all exist on disk as **untracked** directories — they have never been committed, so promoting them to `PUBLISHED_PAGES` this hour would either ship nothing (if only `published-pages.ts` is staged) or ship a partial, unreviewed pile of everything-at-once.

## Root cause (likely)
The build / scaffold cycles in recent days have been writing files to the repo but nothing has been running `git commit`. The publish-queue + devops scheduled tasks each run in isolation, so no one has been closing the loop. Evidence: recent commit history is dominated by build-fix commits after a big SWC parse-error crisis, and the WIP keeps growing between hourly runs.

## Why I refused to deploy this cycle
The hourly deploy skill is scoped to "only the files that changed this cycle." Nothing was modified in the last hour except `src/data/news-briefing.json` and `src/data/notifications-feed.json` (both owned by other scheduled tasks). The 789-file mass is pre-existing state that I did not produce and cannot vouch for. Pushing `git add -A` would conflate an unknown WIP with a routine hourly roll and very likely break prod (the last comparable event triggered the 632-SWC-error spree visible in `git log`).

## Data freshness (for the record — all green)
- `news-briefing.json`: `generated_at = 2026-04-17T07:00:00Z` (20 min old at check time), 7 stories, valid JSON.
- `notifications-feed.json`: 30 items, newest dated `2026-04-17` ("UK FCA Drops '24-Hour Trap' in Final Crypto Framework"), valid JSON.

## Recommended next steps (for a human-in-the-loop cycle)
1. Triage the 46 modified files: either commit them as a clear feature commit (`feat: live price banner + client providers + PWA manifest`) or `git restore` the subset that's junk.
2. Triage the 743 untracked entries — most are legitimate new `src/app/learn/**` pages; the loose root-level `seo-dashboard*.jsx` and `seo-daily-report-2026-04-11.md` belong under `/sessions/admiring-funny-gates/mnt/Degen0x/` reports, not the repo root.
3. Add the root-level dashboard/report files to `.gitignore` or move them out of the repo.
4. Once the tree is clean, run one focused deploy that promotes the 8 stale P1 `learn` pages sitting in `PUBLISH_QUEUE` (they are overdue — queued 2026-04-14/15, now 2026-04-17).
5. Consider wiring the build/scaffold scheduled tasks to commit their own output so the publish/deploy cycle isn't left holding unlabelled state.

## Files untouched this run
No `published-pages.ts` edit, no `git add`, no `git commit`, no `git push`, no Vercel action.
