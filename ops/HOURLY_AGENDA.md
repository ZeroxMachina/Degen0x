# degen0x · Hourly Ops Standup

**Timestamp:** 2026-04-20T16:14Z
**Cycle:** Hour 16 UTC — second cycle under flat-task-format regime (Hour 15 shipped the spec)
**Runner:** `degen-morning-standup` scheduled task (Claude Opus 4.7) — single-agent topology confirmed 25th hour (publish/build/design/community/QA still silent)
**Latest commit (local master):** `dfa87f76` — *ops: Hour 15 UTC standup — flat-task-format regime begins, jefe-ask still untouched* (~60min old)
**Latest commit (origin/main):** `53c60909` — *news: hourly briefing briefing-2026-04-20-16* (~7min old)

> **Hour 16 has new information.** The sitemap dry-run rehearsal (Hour 15 T1) uncovered that `public/sitemap.xml` points 100% to the old `cryptodegen.com` brand, not `degen0x.com`. This is a P1 correctness bug, not just a freshness issue, and reshapes the recovery plan below.

---

## 🚨 Incidents / Overrides

- **P1 (NEW, filed this cycle) — PRODUCTION SITEMAP ADVERTISES WRONG BRAND DOMAIN.** `ops/incidents/2026-04-20T16-14Z-sitemap-wrong-domain.md` — every `<loc>` in `public/sitemap.xml` is on `cryptodegen.com` (pre-rebrand). Generator config is correct (`degen0x.com`); it just hasn't been run. Likely a major contributor to the 32.7% indexation rate. Evidence: `ops/seo/2026-04-20-sitemap-dryrun.md`. Recommended action: standalone sitemap-only commit + cherry-pick to origin/main — **adds new Jefe ask (Q2), independent of the larger reconcile decision.**
- **P0 (still open, 2h past overdue-ping trigger moved) — JEFE-ASK UNTOUCHED, 8h+ blocker age.** `ops/incidents/2026-04-20T14-14Z-jefe-ask-reset-vs-rebase.md` — both Status checkboxes unchecked, mtime 14:18Z (filed) still the newest mtime. 0 of 2 checkboxes filled. Hour 15's T3 set 18:00Z UTC as the overdue-ping trigger — still 1h 46min away; not filing the overdue doc yet.
- **P0 (still open, 25h+) — MISSING BUILD-CYCLE RUNNER.** `ops/deploys.log` last non-standup non-news entry is 10:58Z (**5h 16min silent now**). Evidence: the 10 most recent log lines are 6× STANDUP + 4× SKIPPED (all self-written). No independent build/publish/design/community/QA cycles. Still gated on Q1 of jefe-ask.
- **P1 (flat) — Branch divergence +13 / −59** (was +12/−58 at Hour 15). +1/−1 mechanical drift per cycle (local gained `dfa87f76`, origin gained `53c60909`). Will be +14/−60 after this cycle's commit.
- **P1 (still open) — SEO score FLAT at 6.91** for 3rd day; the wrong-domain sitemap finding elevates *why* it's flat — some of that gap is fixable without the three recovery codemods.
- **P2 (~ GREEN) — `.git/index.lock` reappeared ONCE this cycle during `git diff origin/main`.** Dance-cleared via `mv .git/index.lock .git/index.lock.mvd-<timestamp>` — 5th cycle where dance works on the 1st attempt. Still no root-cause fix; dance remains the standing workaround.
- **P2 (flat) — 746 uncommitted files** (unchanged vs Hour 15 — this cycle's writes are all under `ops/`).
- **MITIGANT — prod healthy** (except for the sitemap bug, which has been bleeding for 41 days not minutes). Origin/main `53c60909` = briefing-16 shipped ~16:04Z. Local `src/data/news-briefing.json` at 16:07Z is **byte-equal to origin**: `briefing-2026-04-20-16`. **6th consecutive hour** of parallel-runner determinism.

---

## What shipped last hour (Hour 15 UTC, 15:14Z → 16:14Z)

- `dfa87f76` committed ~15:14Z — Hour 15 standup bundle: new agenda (flat-task format), `ops/HOURLY_AGENDA_FORMAT.md` spec, deploys.log + hourly-log.csv entries.
- `53c60909` landed on origin/main ~16:04Z — `briefing-2026-04-20-16` (parallel news-runner cadence unbroken).
- Local `src/data/news-briefing.json` regen'd 16:07Z; `src/data/notifications-feed.json` regen'd 16:08Z.
- 15:58Z SKIPPED entry in `deploys.log` — explicit no-deploy refusal (9 unpushed commits, branch clean vs origin, held pending Jefe reconcile).
- **Hour 15 T1 executed this cycle** — sitemap dry-run written to `ops/seo/2026-04-20-sitemap-dryrun.md`; surfaced the wrong-domain P1 (filed as `ops/incidents/2026-04-20T16-14Z-sitemap-wrong-domain.md`).
- **Hour 15 T3 executed this cycle** — jefe-ask doc check: UNTOUCHED (mtime flat, 0 checkboxes). No reshuffle triggered; Hour 18 overdue-ping still pending.

## What's at risk

- **Sitemap bleed** — 41 days of advertising the wrong domain to Google. Every hour without a regen-and-push is measurable crawl-budget waste and suppressed new-page discovery.
- **Jefe feedback loop invisibility** — Jefe-ask mtime flat since 14:18Z. Without a touch, Hour 18 files the overdue-ping (per Hour 15 T3). That's 2 cycles from now.
- **Compounding drift** — branch delta +13/−59. Mechanically benign but the eventual reconcile diff is now larger than when originally proposed.
- **Format-spec entropy** — only 2 cycles in; need 4–5 successful cycles before the format is load-bearing against future runners' context gaps.

---

## KPI Snapshot

| Metric | Value | Source | Note |
|---|---|---|---|
| Latest commit (local master) | `dfa87f76` | `git log -1` | ~60min old — Hour 15 flush |
| Latest commit (origin/main) | `53c60909` | `git log origin/main -1` | ~7min old — briefing-16 |
| Local vs origin/main | **+13 / −59** | `rev-list --left-right --count` | +1/−1 mechanical drift vs Hour 15 |
| Uncommitted files | 746 | `git status --short \| wc -l` | flat vs Hour 15 |
| `.git/index.lock` present | NO (transient reappear → dance-cleared) | `ls .git/index.lock` | 1 cleared occurrence; no blocker |
| Open incidents | 9 (+1 this cycle: wrong-domain sitemap) | `ls ops/incidents/` | was 8 at Hour 15 |
| Commits on this runner (last 24h) | 7 | `git log --since="24h"` | 6 standups + 1 design; news separate |
| news-briefing freshness (local) | ~7min (16:07Z) | mtime | GREEN |
| news-briefing id (local) | `briefing-2026-04-20-16` | JSON | byte-equal to origin — **6th hour determinism** |
| news-briefing on origin/main | `briefing-2026-04-20-16` | `53c60909` | GREEN |
| notifications-feed freshness | ~6min (16:08Z) | mtime | GREEN |
| page-manifest freshness | uncommitted; mtime 2026-04-18 21:39Z (~43h) | mtime | YELLOW — flat 8 cycles |
| PUBLISHED_PAGES count | 1,515 | `published-pages.json` | flat; sitemap URL count is unrelated (sitemap walks FS not this file) |
| `src/app/**/page.tsx` count | 1,849 | `find` | discovered this cycle; +334 vs PUBLISHED_PAGES (unpublished drafts) |
| Sitemap URL count | 2,234 | `grep -c <loc>` | stale count — 385 URLs are routes since deleted |
| Sitemap brand domain | **cryptodegen.com (WRONG)** | sitemap content | **NEW P1** — see incident above |
| Sitemap age | 7d 23h (9 days in ~25h) | mtime 2026-04-12 17:08Z | RED |
| SEO compliance (latest) | 6.91 / 10 | `ops/seo/2026-04-20.md` | flat 3rd day; root-cause partially reframed by wrong-domain finding |
| Organic traffic (24h) | MODELLED 152 clicks / 12,640 imp | `ops/seo/2026-04-20.md` | OAuth day 8 |
| Indexed pages (GSC) | 496 MODELLED | SEO brief §1 | 32.7% — correlates with wrong-domain sitemap |
| CWV p75 | not available | — | OAuth blocker day 8 |
| deploys.log last non-standup non-news entry | 10:58Z | tail | **5h 16min silent** |
| Jefe-ask touched? | NO | `grep '\[x\]'` → 0 | mtime flat since 14:18Z (filed) |
| Hour 18 overdue-ping due? | NOT YET | 1h 46min remaining | trigger = UTC hour ≥ 18 |

---

## Hour 16 → 17 Tasks (flat list — standup-only execution)

> **Reranking rationale.** The Hour 15 plan held sitemap refresh behind the full Jefe reconcile. Hour 16's dry-run finding (wrong brand domain) changes the cost/benefit math: the sitemap is not "stale data" that can wait — it's a 41-day correctness bug that's actively suppressing indexation. T1 below asks Jefe to decouple the sitemap fix from the broader reconcile, since it touches exactly one file and is trivially reversible. T2 and T3 keep the observation loops warm.

### T1 — Sitemap regen cherry-pick proposal (prep + ask; execution gated on Jefe Q2)

- **What:** Prepare the exact command sequence a Jefe-authorized standup would run to regen and ship the sitemap as a standalone commit, and stage the ask in the Hour 16 incident so Jefe can approve it separately from the broader reconcile. Do NOT run the generator or touch `public/sitemap.xml` this cycle.
- **Why:** The dry-run showed the current sitemap is 100% wrong-domain (`cryptodegen.com`), not merely stale. That's a first-order SEO correctness bug with a trivially-scoped fix (one file, reversible). Asking Jefe to green-light *just this one commit* is much smaller than asking for the full reset-vs-rebase decision and buys back measurable indexation in the interim.
- **How (Hour 17 standup):**
  1. `stat ops/incidents/2026-04-20T16-14Z-sitemap-wrong-domain.md` — check whether Jefe has filled either Status checkbox.
  2. If APPROVE checkbox ticked: `node scripts/generate-sitemap.mjs` (writes public/sitemap.xml + out/sitemap.xml), `git add public/sitemap.xml`, `git commit -m "seo: regenerate sitemap with correct degen0x.com domain"`, `git cherry-pick --no-commit` onto an origin/main-tracking branch, push. Confirm live URL at `https://degen0x.com/sitemap.xml`. Submit to GSC sitemap section (pending OAuth).
  3. If DENY/DEFER or untouched: file Hour 17 overdue-ping if hour ≥ 18 UTC (per Hour 15 T3 trigger); otherwise re-propose in Hour 17 agenda with one more cycle of aging-cost data.
- **Deliverable (Hour 17):** either (a) regenerated-and-pushed sitemap with GSC submission + entry in `ops/seo/2026-04-20-sitemap-push.md`, OR (b) updated incident with cycle-N aging note and escalation to Hour 18 overdue-ping.
- **Rollback:** if regen emits unexpected URL shape (e.g., wrong base URL, truncated set, empty file) → `git revert HEAD`; sitemap version pinned in git history. Pre-flight guard: check URL count of output matches `find src/app -name page.tsx | wc -l` within ±2% before committing.

### T2 — Recurring jefe-touch check (first op of every standup — continued from Hour 15 T3)

- **What:** Run the 10-line jefe-touch check as the opening operation of every standup, now extended to also stat `ops/incidents/2026-04-20T16-14Z-sitemap-wrong-domain.md` (two-ask tracking).
- **Why:** Two open Jefe asks now (reset-vs-rebase, and the new sitemap-specific Q2). The standup must convert a touch on either into immediate action.
- **How (Hour 17 standup, first op):**
  - `stat -c "%y %n" ops/incidents/2026-04-20T14-14Z-jefe-ask-reset-vs-rebase.md ops/incidents/2026-04-20T16-14Z-sitemap-wrong-domain.md` — compare mtimes against the values in this agenda (14:18Z and 16:14Z respectively).
  - `grep -c '\[x\]' <both files>` — checkbox deltas.
  - If either mtime advanced OR any checkbox filled → reshuffle tasks same cycle; do NOT proceed with T1 as prepared — execute whichever decision Jefe made.
  - If untouched AND UTC hour ≥ 18 → file `ops/incidents/2026-04-20T18-00Z-jefe-ask-10h-overdue.md` (thin, ≤100 lines, cross-refs both asks).
- **Deliverable:** reported in next agenda §Incidents. File touch-delta report either into a new incident (if overdue) or inline in the agenda (if touched).
- **Rollback:** none — passive read-only.

### T3 — Sweep cryptodegen.com references in docs (prep-only this cycle, commit only with T1)

- **What:** Build the grep-and-replace command list for the 4 docs that still reference `cryptodegen.com` (`SETUP_OG_IMAGE.md`, `SEO_INFRASTRUCTURE.md`, `SEO_DEPLOYMENT_SUMMARY.md`, `SEO_DEPLOYMENT_CHECKLIST.md`) and the `public/og-image.svg` OG badge. Save the plan to `ops/seo/2026-04-20-rebrand-sweep-plan.md`. Do NOT execute until the sitemap T1 ships (brand-consistency commits should follow the primary fix, not precede it).
- **Why:** The sitemap is the bleeding artery; docs and OG are paper cuts. Sweeping them after T1 lands keeps the commits clean (one-theme-per-commit) and ensures the first public-facing fix is the highest-value one.
- **How (Hour 17 standup):** `grep -rn "cryptodegen\.com" SETUP_OG_IMAGE.md SEO_INFRASTRUCTURE.md SEO_DEPLOYMENT_SUMMARY.md SEO_DEPLOYMENT_CHECKLIST.md public/og-image.svg` → collect occurrences → write planned sed/Edit operations into `ops/seo/2026-04-20-rebrand-sweep-plan.md`. No edits yet.
- **Deliverable:** `ops/seo/2026-04-20-rebrand-sweep-plan.md` (plan doc — one commit prep, no source changes).
- **Rollback:** none — plan doc only; no source files touched.

---

## Commit plan for this cycle

Bundled commit `ops: Hour 16 UTC standup — wrong-domain sitemap finding + new P1 incident`:

- `ops/HOURLY_AGENDA.md` (this file)
- `ops/seo/2026-04-20-sitemap-dryrun.md` (new — Hour 15 T1 deliverable)
- `ops/incidents/2026-04-20T16-14Z-sitemap-wrong-domain.md` (new — P1 filed this cycle)
- `ops/deploys.log` (entry appended)
- `ops/hourly-log.csv` (entry appended)

No changes to `src/`, `public/`, or `scripts/`. Standup-only; all writes are under `ops/`.

---

**One-line summary:** *Hour 16: shipped sitemap dry-run + new P1 wrong-domain incident (public sitemap is 100% cryptodegen.com); priority = Jefe Q2 approval for standalone sitemap regen cherry-pick (jefe-ask Q1 still untouched at 2h post-file / 8h blocker-age).*
