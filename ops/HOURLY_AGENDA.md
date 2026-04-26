# degen0x · Hourly Ops Standup

**Timestamp:** 2026-04-26T13:50Z
**Cycle:** Hour 13 UTC (Sunday) — **FIRST cycle after blackout #2**. Last *committed* standup was Hour 17 UTC on 2026-04-20 (`c601b77c`); the prior agenda for 2026-04-23T13:49Z was written but never committed. Standup-runner silence: **~143h 35min** (~5.98 days). Flat-task-format regime continues (per `ops/HOURLY_AGENDA_FORMAT.md` adopted Hour 15 on 2026-04-20).
**Runner:** `degen-morning-standup` scheduled task (Claude Opus 4.7), session `jolly-intelligent-brahmagupta`. Only this runner executing. The publish-deploy and news-briefing runners last fired on 2026-04-23 — see "What shipped" below.
**Latest commit (local master):** `d2ec10fa7` — *fix(seo): regenerate sitemap to degen0x.com post-rebrand* — **71h 25min old, Jefe-authored locally on 2026-04-23T14:25Z, not pushed.**
**Latest commit (origin/main):** `6a4ad4921` — *news: hourly briefing briefing-2026-04-23-15* — **70h 45min old.**
**Branch divergence:** **+17 / −69** (was +15/−60 at the prior agenda; +2 from Jefe's local sitemap+JSON-LD work, +9 origin commits we never fetched-merged including the i18n catch-all migration).

> **This cycle overrides normal T1/T2/T3 priorities per format spec §44 (production incident).** Two facts dominate: (1) cadence has failed for the *second* multi-day stretch in a week, and (2) Jefe shipped substantial work directly to origin/main during blackout-1's tail (i18n catch-all migration, universal schema ramp-to-9.5) without engaging the incident protocol — making the local-master commits *actively incompatible* with origin if pushed. The previously-open Q1 (reset-vs-rebase) is no longer ambiguous; the answer is "reset to origin/main, archive ops/ history." Q2 (sitemap-wrong-domain) is **resolved on origin already** (origin sitemap = 9,452 degen0x.com URLs, 0 cryptodegen.com).

---

## 🚨 Incidents / Overrides

- **P0 (NEW — THIS CYCLE) — SECOND MULTI-DAY SCHEDULER BLACKOUT.** Filed `ops/incidents/2026-04-26T13-50Z-second-multi-day-scheduler-blackout.md`. News-runner self-healed for two cycles (Hour 14 + 15 on 2026-04-23) then died again at 15:06Z; standup-runner never recovered (143h 35min silent). Jefe acted via direct commits during the gap, *not* via incident-doc checkboxes — making the wait-for-checkbox protocol provably dead. Local commits `d2ec10fa7` and `ad75816c` are now redundant and would *regress* origin if pushed. Recommended action: **B — reset master to origin/main, archive ops/ on a separate branch.** Cannot execute from this runner (auth scope + doublefire risk).
- **P0 (UNCHANGED, now 143h 33min) — JEFE-ASK Q1 (RESET-VS-REBASE) UNTOUCHED BY CHECKBOX, BUT EFFECTIVELY ANSWERED BY JEFE'S COMMITS.** `ops/incidents/2026-04-20T14-14Z-jefe-ask-reset-vs-rebase.md` mtime flat at 14:18:13Z, 0/4 checkboxes. Jefe committed `ad75816c` and `d2ec10fa7` to master and 9 commits to origin/main during this incident's open window — the *behavior* says "rebase/reset, the incident doc is not how I work." This cycle's blackout-2 incident treats Q1 as resolved-by-action and recommends B; Jefe can override by editing the new incident file.
- **P0→RESOLVED-ON-ORIGIN — JEFE-ASK Q2 (SITEMAP WRONG-DOMAIN).** `origin/main:public/sitemap.xml` = 0 cryptodegen.com / 9,452 degen0x.com (incl. i18n hreflang). Bleed is over for any crawler reading origin. Local mirror `d2ec10fa7` is a 1,849-URL subset that would *regress* origin if pushed; do not push. Marking Q2 resolved-on-origin in the new blackout-2 incident; will close Q2 incident file once master is reset.
- **P0 (UNCHANGED) — BLACKOUT-1 INCIDENT UNTOUCHED.** `ops/incidents/2026-04-23T13-49Z-multi-day-scheduler-blackout.md` — 71h 55min old, 0/3 checkboxes, also ignored by Jefe. Now consolidated under blackout-2; will close once reconcile lands.
- **P1 — DOUBLEFIRE / CROSS-CLONE SCHEDULER PATTERN.** During the 2026-04-23 self-heal window, three distinct sandboxed sessions fired the publish-deploy slot in one hour (`zen-pensive-feynman` 13:50Z, `friendly-funny-gauss` 13:53Z, `amazing-affectionate-dijkstra` 14:58Z) with different HEADs. Reset (B) must not be executed from any of them — only from a single human shell, otherwise a `.git/index.lock` race will leave master half-rewritten.
- **P1 — USER-VISIBLE FRESHNESS REGRESSION.** Site shows `briefing-2026-04-23-15` on a 2026-04-26 visit. Top headline cites the Senate Clarity Act letter from 2026-04-23 as "today's news." Brand damage at every page-view. Not prod-down (origin healthy at `6a4ad492`), but eroding trust. Restart of the news-briefing scheduled task is the highest community-growth priority for this hour.
- **P1 (FROZEN, mechanical) — Branch divergence +17 / −69.** +2 vs blackout-1 cycle (Jefe's two local commits) and +9 origin (i18n catch-all + JSON-LD ramp + sitemap regen + 4 news briefings). Will be +18/−69 post-this-commit. Reset (B) clears it.
- **P1 (FLAT) — SEO score 6.91** in last report (`ops/seo/2026-04-23.md`); origin's universal schema + i18n hreflang sitemap should lift this to 8+ once Search Console re-crawls, but no GSC data this cycle (no live API). Re-audit after reset.
- **P2 (drift accelerating) — 958 uncommitted files** (745 untracked, 211 modified, 2 added). Up from 752 at blackout-1 cycle. Top contributors: 204 in `src/app/*` (i18n migration WIP that conflicts with origin's catch-all routes), 182 in `reports/community-drafts/*` (community runner drafts). All untracked WIP becomes irrelevant after reset (B); the modified `src/app/*` files actively conflict with origin's history.
- **MITIGANT — Origin/main is healthy and ahead.** Vercel still serves `6a4ad492` which includes the universal schema + i18n catch-all + correct sitemap. Real users get the *better* state of the site already; the rot is local.

---

## What shipped since the last *committed* standup (Hour 17 UTC 2026-04-20 → now)

- **Origin/main (Jefe pushed direct, 9 commits since c601b77c was authored):**
  - `b6d58e06`+`a7ca10086`+`c80feaa9`+`f294adad`+`83989e4e` — i18n localization v4.1 → full-site (5,214 pages across TR/VI/PT-BR), with hreflang sitemap.
  - `4074b187` — `force-dynamic` on i18n pages to dodge OOM on Vercel.
  - `50a0d015` — replaces 5,235 individual i18n pages with 3 catch-all routes + JSON data (architectural cleanup).
  - `be9ea2d0`+`6a4ad492` — news briefings 14 + 15 on 2026-04-23.
  - `ecf2da33` — news briefing 17 from 2026-04-20 (already mentioned in blackout-1).
- **Local master (Jefe authored locally, 2 net-new commits, never pushed):**
  - `ad75816c` (2026-04-23T16:02Z) — SoftwareApplication+BreadcrumbList JSON-LD on 5 tool pages. **Made redundant** by origin's `a9e890954` from 2026-04-17 (universal schema on 73 tool pages).
  - `d2ec10fa7` (2026-04-23T14:25Z) — sitemap regen to degen0x.com with 1,849 URLs. **Made redundant *and* regressive** by origin's `a7ca10086` (2,802 URLs with hreflang) and the subsequent regen pushing it to 9,452 URLs.
- **Standup runner:** zero commits. Hour 13 2026-04-23 wrote the agenda but never committed it (still a pending `M` in working tree, mtime 14:10Z).
- **News briefings:** silent on origin since 2026-04-23T15:06Z (~70h45m); still showing `briefing-2026-04-23-15` to users.
- **Pre-staged Hour 18 overdue-ping:** never fired across two blackouts; retired this cycle to `ops/incidents/.retired/hour-18-overdue-ping-NEVER-FIRED-blackout1-then-blackout2.md`.

## What's at risk

- **Cadence might restart for one cycle and die again.** That's literally what happened on 2026-04-23 (Hour 14 + 15 only). If Hour 14 UTC today (2026-04-26T14:50Z-ish) does not fire, we are in a same-failure-mode regression and the scheduler infra needs human inspection — not another incident doc.
- **Pushing local-master without reconcile is now actively destructive**, not just messy. If any runner force-pushes (none should, but the doublefire pattern means three sessions could try), origin loses i18n + universal schema. Treat all pushes as "must come from a single human shell."
- **/news widget brand damage compounding.** Every hour the site continues to show `briefing-2026-04-23-15` is another hour of "this place is abandoned" signal to organic visitors. SEO score pressure from freshness category will start showing in next audit.
- **958 dirty files include 204 in src/app that conflict with origin's catch-all migration.** These are the WIP artifacts of a half-finished local i18n attempt that origin already replaced with a different (better) architecture. Hard reset will discard them; that is the correct outcome but worth flagging so nobody assumes there's salvageable code in there.
- **`98771ac74` (design polish on AuthorAttribution+RelatedContent) is the *only* local commit with potential forward value.** It pre-dates Jefe's ramp-to-9.5 work but does not obviously conflict. If reset is executed via plan B, this one commit deserves a re-cherry-pick check before discarding.

---

## KPI Snapshot

| Metric                         | Value                                                       | Source                                                  | Note                                                            |
| ------------------------------ | ----------------------------------------------------------- | ------------------------------------------------------- | --------------------------------------------------------------- |
| Latest commit (local master)   | `d2ec10fa7`                                                 | `git log -1`                                            | 71h 25min old; Jefe-authored locally; would-regress-if-pushed   |
| Latest commit (origin/main)    | `6a4ad4921`                                                 | `git log -1 origin/main`                                | 70h 45min old (briefing-15 from 2026-04-23)                     |
| Local vs origin/main           | **+17 / −69**                                               | `git rev-list --left-right --count`                     | +2 / +9 vs blackout-1 cycle                                     |
| Uncommitted files              | **958**                                                     | `git status --porcelain \| wc -l`                       | 745 untracked, 211 modified, 2 added; +210 vs blackout-1 cycle  |
| `news-briefing.json` top story | `story-2026-04-23-15-001` (Senate Clarity Act letter)       | `jq` on JSON                                            | **70h 45min stale** on user-facing /news                        |
| news-briefing.json mtime       | 2026-04-23T15:05Z                                           | `stat`                                                  | Frozen since blackout-2 began                                   |
| origin sitemap.xml URLs        | **9,452** (degen0x.com), **0** (cryptodegen.com)            | `git show origin/main:public/sitemap.xml`               | Q2 effectively resolved on origin                               |
| local sitemap.xml URLs         | 1,849 (degen0x.com), 0 (cryptodegen.com)                    | `cat public/sitemap.xml`                                | Subset of origin; do not push                                   |
| Indexed pages (last known)     | ~914                                                        | last published-pages snapshot                           | No live GSC data this cycle                                     |
| SEO score                      | **6.91** (flat)                                             | `ops/seo/2026-04-23.md`                                 | Will lift once origin's i18n+schema is what GSC re-crawls       |
| Q1 jefe-ask age                | **143h 33min** (5.98 days, 0/4 checkboxes)                  | `stat` + `grep`                                         | Treated as resolved-by-Jefe-action; see blackout-2 incident     |
| Q2 jefe-ask age                | **141h 31min** (5.90 days, 0/9 checkboxes)                  | same                                                    | Resolved on origin; close after reset                           |
| Blackout-1 incident age        | **71h 55min** (0/3 checkboxes)                              | same                                                    | Consolidated under blackout-2                                   |
| Blackout-2 duration (this)     | **~70h45m news / ~143h35m standup**                         | now − 6a4ad4921 / now − c601b77c                        | NEW metric                                                      |
| Last deploys.log non-standup   | 2026-04-23T14:58Z (publish-deploy SKIPPED)                  | tail of deploys.log                                     | ~70h 52min runner silence                                       |
| Doublefire / cross-clone count | 3 sessions / 1 hour (2026-04-23 13:50/13:53/14:58)          | deploys.log + hourly-log.csv                            | Open P1 — must not run reset until guarded                      |

---

## Tasks (flat)

**Format note:** Per `ops/HOURLY_AGENDA_FORMAT.md`, tasks are flat T1/T2/T3 executed by the next standup cycle. The task spec asks for explicit assignments to `build-cycle / design-polish / community-growth` runners; those runners do not exist — annotations below are kept as fiction-metadata so the spec is honored, but every annotation is **NO-OP** because all three are gated on the reconcile (B). T1 is executed by *this* cycle; T2 and T3 are for the next standup cycle (Hour 14 UTC, expected 2026-04-26T14:50Z if scheduler is healthy).

### T1 — File the second-blackout incident, write fresh agenda, retire dead pending stub, commit ops/ (THIS CYCLE)

- **What:** Write `ops/incidents/2026-04-26T13-50Z-second-multi-day-scheduler-blackout.md` (done above), overwrite `ops/HOURLY_AGENDA.md` with this content, append `ops/deploys.log` STANDUP entry, append `ops/hourly-log.csv` row, retire `ops/incidents/.pending/hour-18-overdue-ping.md` to `.retired/`. Commit only `ops/` paths.
- **Why:** Document the new ground truth before the next runner-fire (or human session) starts. The blackout-2 incident is the *single new artifact* that materially changes the decision tree from blackout-1: it explains why the answer to Q1 is now obviously B, and why Q2 is moot. Without this doc, the next agent will re-litigate the same decision space.
- **How (executed this cycle):**
  1. Wrote `ops/incidents/2026-04-26T13-50Z-second-multi-day-scheduler-blackout.md`.
  2. `mv ops/incidents/.pending/hour-18-overdue-ping.md ops/incidents/.retired/hour-18-overdue-ping-NEVER-FIRED-blackout1-then-blackout2.md`.
  3. Wrote this file (`ops/HOURLY_AGENDA.md`).
  4. Appending `ops/deploys.log` and `ops/hourly-log.csv` (next).
  5. `git add ops/ && git commit -m "ops: Hour 13 standup — file blackout-2 incident, recommend reset to origin/main"`. **No `git push`** — gated on B.
- **Deliverable:** five files modified/added/moved, all under `ops/`. `git status --porcelain | grep -v '^??' | grep -v '^ M src/' | wc -l` should show ~6 staged paths after commit.
- **Rollback:** None needed — all writes under `ops/`. If the incident text needs revision, next cycle amends.
- **Fiction-assignment:** N/A — standup-own work.

### T2 — Next cycle (Hour 14 UTC ~2026-04-26T14:50Z): scheduler health probe + Jefe-touch on blackout-2 incident

- **What:** Three checks.
  1. Did Hour 14 fire? If yes, this file's mtime advances and the next standup commit lands. If not, escalate: file `ops/incidents/2026-04-26T14-50Z-blackout2-no-self-heal.md` describing the 3rd blackout in a week and request scheduler infra inspection (not another Jefe-ask checkbox).
  2. Did Jefe edit `ops/incidents/2026-04-26T13-50Z-second-multi-day-scheduler-blackout.md`? `stat -c %Y` it and `grep -c '\[x\]'` it. Baseline: mtime ≈ this cycle's commit time, 0/4 checkboxes (the trailing "Open status checkboxes" block).
  3. Did the news-briefing runner self-heal? `stat -c %Y src/data/news-briefing.json` — if mtime advanced past 2026-04-23T15:05Z, briefing fired again; if not, news is now ≥71h45m stale and dominates the user-impact priority.
- **Why:** The next cycle should branch on three independent signals (scheduler, Jefe, news-runner) not on assumed state. Highest-leverage if all three are flat: file the 3rd-blackout escalation and stop writing new agendas (write a single "scheduler is broken" file and let humans intervene). Highest-leverage if any one is hot: pivot to executing it.
- **How:**
  ```bash
  NOW=$(date -u +%s)
  AGENDA_MTIME=$(stat -c %Y ops/HOURLY_AGENDA.md)
  INCIDENT_MTIME=$(stat -c %Y ops/incidents/2026-04-26T13-50Z-second-multi-day-scheduler-blackout.md)
  INCIDENT_CHECKS=$(grep -c '^- \[x\]' ops/incidents/2026-04-26T13-50Z-second-multi-day-scheduler-blackout.md)
  NEWS_MTIME=$(stat -c %Y src/data/news-briefing.json)
  # Branch on whether mtimes/check-counts advanced past this cycle's baselines.
  ```
- **Deliverable (conditional):** either a fresh standup commit (scheduler healthy), an escalation incident file (no self-heal), or an executed reconcile (Jefe answered).
- **Rollback:** N/A — all writes under `ops/`.
- **Fiction-assignment:** build-cycle = NO-OP (gated on B). design-polish = NO-OP (gated on B). community-growth = NO-OP (gated on news-runner self-heal).

### T3 — Next *human* shell (not a scheduled-task sandbox): execute reconcile plan B, restart news-runner

- **What:** Two-step reconcile, performed from a single non-sandbox shell so no doublefire race can occur.
  1. **Archive local ops/ history**, then reset:
     ```bash
     git fetch origin
     git checkout -B archive/ops-2026-04-09-thru-04-23 master
     git push origin archive/ops-2026-04-09-thru-04-23
     git checkout master
     git reset --hard origin/main
     # If push needed (it isn't, since master will == origin/main):
     # git push --force-with-lease origin master
     ```
  2. **Triage `98771ac74` (design polish on AuthorAttribution+RelatedContent)**: cherry-pick onto a feature branch, eyeball for conflicts vs origin's universal schema work, decide keep-or-drop. *Optional* — not blocking.
  3. **Restart news-briefing scheduled task** so /news widget gets a fresh briefing for 2026-04-26. Verify scheduler infrastructure isn't itself the failure mode (the doublefire pattern + cross-clone HEADs at 2026-04-23 13:50/13:53/14:58Z suggest the scheduler is firing from multiple sandboxes; pin to a single one if possible).
- **Why:** This is the single highest-leverage action across the next 24h. Reset clears the +17/−69 divergence, drops two redundant/regressive code commits, archives the ops/ documentation onto a separate branch where it can be referenced but not muddy master. Restart restores user-visible freshness on /news.
- **How (cannot be executed by this runner):**
  - Authorization: scheduled-task spec doesn't grant `git push` or destructive git ops.
  - Safety: doublefire makes any sandbox-side reset unsafe regardless of authorization.
  - Therefore: T3 is a Jefe-or-equivalent-human action. The blackout-2 incident file documents this.
- **Deliverable:** master == origin/main (push not actually needed since origin is the canonical truth); `archive/ops-2026-04-09-thru-04-23` branch live on origin; news-briefing.json mtime advances within an hour of restart.
- **Rollback:** the archive branch *is* the rollback. If anything in the discarded ops/ work turns out to matter, cherry-pick from `archive/ops-2026-04-09-thru-04-23`.
- **Fiction-assignment:** build-cycle = OWNER-of-reset (NO-OP this hour, executes when human shell available). design-polish = re-cherry-pick `98771ac74` candidate (NO-OP this hour). community-growth = restart news-runner once master is reset (NO-OP this hour, but this is the highest community-growth lift available — fresh /news the moment cadence restarts).

---

## Commit Plan (executed this cycle)

```bash
# All within ops/ — no src/ touched.
git add ops/HOURLY_AGENDA.md \
        ops/incidents/2026-04-26T13-50Z-second-multi-day-scheduler-blackout.md \
        ops/incidents/.retired/hour-18-overdue-ping-NEVER-FIRED-blackout1-then-blackout2.md \
        ops/deploys.log \
        ops/hourly-log.csv

# Note: the prior agenda for 2026-04-23 was written but never committed — this commit
# overwrites it cleanly with the 2026-04-26 content. The diff is large; that's expected.
# The .pending/hour-18-overdue-ping.md is gone as a side-effect of the mv (git tracks rm).

git commit -m "ops: Hour 13 UTC standup (Sunday) — file blackout-2 incident, recommend reset to origin/main"

# DO NOT push. Push is part of plan B and must come from a single human shell,
# not from this scheduled-task sandbox (doublefire P1).
```

---

## One-line summary (for the runner return-string)

`Hour 13: shipped blackout-2 incident, priority = plan-B reset (next human shell)`

---

## SEO Brief Append — 2026-04-26T14:10Z (seo-manager scheduled task, session stoic-nice-carson)

The Head-of-SEO scheduled task ran a full audit against **origin/main `6a4ad4921`** (not local master) and produced `ops/seo/2026-04-26.md`. Headline: compliance score = **9.12 / 10 (Strong)** when measured on the actually-served codebase — origin already absorbed the ramp-to-9.5 universal backfill, the post-rebrand sitemap regen, and the i18n catch-all collapse. The 6.91 score from prior briefs was always the local fork's, not the live site's.

The next standup cycle should pick up these three actions **AFTER** the plan-B reset has landed (T3 above) so they can be committed from a clean shell on the canonical history. All three are additive, low-risk, and the first two are single-command commits.

### T-SEO-1 — Backfill RelatedContent on the 373 origin pages still missing it (P0 · Programmer)
- **What:** Author `scripts/codemods/inject-related-content.mjs`, run it across `src/data/published-pages.json` ∩ pages-with-no-RelatedContent-import (= 373 pages, the 28.2% gap that survived the universal wrapper-level backfill in `a9e890954`). Component already exists at `src/components/RelatedContent.tsx`. `relatedLinks` derived from URL-prefix → cluster map.
- **Why:** Internal Linking is the only sub-90% category remaining on the rubric. Closing this gap is the single biggest one-command compliance lever still on the table. Expected lift: Internal Linking 8 → 9 (+0.08 compliance).
- **How:** From clean shell on origin/main: write the codemod, run, commit single-file-set with theme `feat(seo): backfill RelatedContent on 373 origin pages`. Verify with `git grep -l "RelatedContent" -- 'src/app/**/*.tsx' | wc -l` ≥ 1,320 (was 951).
- **Deliverable:** new `scripts/codemods/inject-related-content.mjs` + ~373 modified `page.tsx` files.
- **Rollback:** revert the commit.

### T-SEO-2 — Refresh `src/data/freshness-index.json` and commit (P0 · DevOps / Data Engineer)
- **What:** Re-run the freshness-refresh entrypoint introduced in `e012a0de2` so all 952 entries advance from `2026-04-17` (9 days stale) to `2026-04-26`. Every `LastUpdated` stamp on the live site currently renders the same stale date.
- **Why:** Visible-to-every-visitor freshness regression on 1,837 pages. Expected lift: Freshness & Maintenance 7 → 9 (+0.04 compliance) plus a real trust signal that compounds with returning organic traffic. Same scheduler-infrastructure root cause as blackout-2; deeper fix is restoring the cron, but today's one-command run unblocks the visible-impact symptom.
- **How:** `node scripts/refresh-freshness.mjs` (or whatever the canonical entrypoint is per `e012a0de2`'s commit body) → `git add src/data/freshness-index.json && git commit -m "fix(seo): refresh freshness-index to 2026-04-26 (was 9d stale)"`.
- **Deliverable:** updated `src/data/freshness-index.json`, single commit.
- **Rollback:** trivially safe.
- **Followup (separate task next cycle):** file `ops/incidents/2026-04-26TXX-freshness-cron-not-firing.md` paired with the blackout-2 incident.

### T-SEO-3 — HowToSchema codemod across `/learn/*-guide-*` + ship `/learn/how-to-stake-eth` (P1 · Programmer)
- **What:** Two parts. (a) Author `scripts/codemods/inject-howto-schema.mjs` that fires `generateHowToSchema` (used on only 22 pages today) across `/learn/*-guide-*` pages with a step-shaped body (`<ol>` or `<h2>Step` heuristic). (b) Ship the new `/learn/how-to-stake-eth/page.tsx` — highest-volume single keyword-opportunity target on the queue (~3,200 mo modelled @ pos 6) and a clean POC for the codemod's payload shape.
- **Why:** Structured Data is at the rubric ceiling (10/10) but HowToSchema unlocks SERP rich-result eligibility (steps widget) on guide pages. Modelled retained-position CTR lift: +6-9% on the impacted ~108 guide pages over 14d. Also addresses the single biggest topical inventory gap (`/learn/how-to-*` has only 3 pages on origin, despite obviously high search demand).
- **How:** From clean shell on origin/main:
  1. Write `scripts/codemods/inject-howto-schema.mjs`.
  2. Ship `/learn/how-to-stake-eth/page.tsx` using the standard wrapper pattern with derived metadata + `ArticleSchema` + `HowToSchema` + `BreadcrumbList`. Steps content covers 4 ways: solo, Lido, Rocket Pool, exchange staking. Use `degen-content-writer` for prose pass.
  3. Two logical commits.
- **Deliverable:** codemod file, schema additions on ~108 guide pages, new how-to-stake-eth page.
- **Rollback:** revert either commit independently.
- **Verification:** Google Rich Results Test on 5 random newly-schema'd guide pages + the new how-to page. Expect "HowTo" detected on all 6.

### One-line SEO summary

`Compliance 9.12 / 10 (origin/main, +2.21 nominal vs prior local audit / 0.00 vs origin baseline). Top opportunity: ship /learn/how-to-stake-eth + HowToSchema codemod across guide pages — modelled +3,200/mo organic and +6-9% retained-position CTR.`
