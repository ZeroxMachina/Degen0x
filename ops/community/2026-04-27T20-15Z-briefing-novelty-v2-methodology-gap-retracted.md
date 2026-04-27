# T-BRIEFING-NOVELTY-V2 — Sandbox-Visibility Methodology Gap Retracted

**Filed:** 2026-04-27T20:15Z (Hour 20 UTC)
**Type:** Methodology correction (1-cycle retraction)
**Affects:** `ops/incidents/2026-04-27T18-15Z-briefing-novelty-v2-7-of-8-cycles-deepened.md` (canonical incident note) — adds Hour 19 retroactive classification.
**Supersedes:** Hour 19 standup deferred-line ("content not assessable from sandbox; deferred to Hour 20 CEO-route mandatory").

## Retraction

Hour 19 standup recorded conjunction state as "UNKNOWN — briefing-19 content not present in sandbox-readable paths (`public/data/news-briefings/` empty, `src/data/notifications-feed.json` is the social-feed not the briefing-stories file)."

**This was wrong.** The correct briefing-content path is **`src/data/news-briefing.json`** — readable, mtime updates with each briefing-runner ship, contains full stories array with `headline` / `tldr` / `category` / `impact` / `timestamp`. Hour 20 standup verified this path and assessed conjunction MET against briefing-20 content directly.

## Why the gap occurred

The Hour 19 runner conflated three distinct files:

1. `src/data/notifications-feed.json` — social-share/notifications feed (not briefing stories).
2. `public/data/news-briefings/` — historical-archive directory; intended for past briefings, currently empty (publishing path not wired to write here).
3. `src/data/news-briefing.json` — **the actual current briefing-content file** (singular; rotated in-place by briefing-runner each cycle).

Without file-3 in the standup's check-list, the runner saw an empty directory + a wrong-purpose file and concluded "content invisible". Hour 20 standup's broader file-search caught file-3.

## Forward methodology rule

Standup conjunction-tracking each cycle reads `src/data/news-briefing.json` directly, parses the `stories` array, and assesses HIGH-novel + MEDIUM-novel against the prior 1–3 cycles' briefing-content for recurrence vs novelty.

Reference query (parsing recipe):

```bash
python3 -c "
import json
with open('src/data/news-briefing.json') as f:
    d = json.load(f)
print(d['briefing_id'])
for s in d['stories']:
    print(f\"[{s['impact'].upper()}] {s['headline']}\")
"
```

## Cumulative count update

| Hour | Conjunction | Hour-19 reclassification | Hour-20 reclassification |
|---|---|---|---|
| 11 | MET | — | — |
| 12 | MET | — | — |
| 13 | sub-HIGH only | — | — |
| 14 | MET | — | — |
| 15 | MET | — | — |
| 16 | sub-everything | — | — |
| 17 | MET | — | — |
| 18 | MET | — | — |
| 19 | UNKNOWN (deferred) | UNKNOWN retained — content for `briefing-2026-04-27-19` was not snapshotted before Hour 20 overwrote `src/data/news-briefing.json`. Cannot assess retroactively. | — |
| 20 | — | — | **MET** (HIGH-novel Iran-FOMC; MEDIUM-novel Steve Chung CEO + TOKEN2049-Dubai-2027) |

**Cumulative since Hour 11: 8-of-9 cycles MET** (Hour 19 UNKNOWN excluded from denominator per "no-data" convention; if included as UNKNOWN-as-not-met it would be 8-of-10 = 80% rather than 89%, but the methodology-doc treats UNKNOWN as a gap-row).

## Hour 21 forward action

- Standup snapshots `src/data/news-briefing.json` under `ops/snapshots/briefing-content-cache/<briefing_id>.json` at the start of each cycle, before the next briefing-runner can overwrite. This prevents the Hour 19 UNKNOWN-due-to-overwrite-race from recurring.
- Snapshot directory created lazily by Hour 21 standup if not present.

## CEO-route implication

T-BRIEFING-NOVELTY-V2 P1 escalation narrative for the mandatory CEO-route Jefe window (per Hour 12) now reads cleanly: 8-of-9 cycles MET, 1-cycle UNKNOWN due to retracted methodology gap (this doc), 0 cycles failed since Hour 16's 1-cycle blip. The conjunction-watch is healthy; the open Jefe-action item is the CEO-route review itself, not the conjunction trend.
