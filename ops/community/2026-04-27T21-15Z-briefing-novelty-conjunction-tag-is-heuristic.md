# Briefing-novelty conjunction-tag is heuristic, not field-driven

**Filed:** 2026-04-27T21:15Z (Hour 21 standup)
**Type:** Methodology refinement (forward rule)
**Severity:** Informational — corrects a forward-methodology assumption
**Supersedes:** Implicit assumption in Hour 20 retraction doc
**References:** `ops/community/2026-04-27T20-15Z-briefing-novelty-v2-methodology-gap-retracted.md`

## Refinement

Hour 20 retraction correctly identified `src/data/news-briefing.json` as the readable briefing-content path (replacing the wrong `public/data/news-briefings/` path Hour 19 used). However, the retraction implicitly suggested that conjunction tagging (HIGH-novel ≥1 + MEDIUM-novel ≥1) could be read directly from the file. This is **incorrect**.

## What the JSON actually contains

Per direct inspection (Hour 21 standup, briefing-21 schema):

```
keys: ['generated_at', 'briefing_id', 'story_count', 'model', 'stories']
story[i] keys: ['id', 'headline', 'slug', 'tldr', 'why_it_matters', 'the_details', 'source', 'source_url']
```

There is **no explicit `importance` or `novelty` field** on the story object. Hour 20 inferred HIGH/MEDIUM tiers from headline content; Hour 21 does the same. This is heuristic.

## Forward methodology

Conjunction-assessment is performed as follows:
1. Read `src/data/news-briefing.json` for the just-landed briefing.
2. For each story, classify importance heuristically from `headline` + `why_it_matters` content (regulatory/macro/security = HIGH; tech/exec moves/conferences = MEDIUM; otherwise LOW).
3. For each story, classify novelty by comparing slug/headline against the prior briefing's slugs (snapshot `ops/snapshots/briefing-*.json` if available; otherwise rely on Hour-N-1 standup's recorded story list).
4. Conjunction is MET if ≥1 HIGH-novel AND ≥1 MEDIUM-novel.

## Why this matters forward

- Future standup runners should not search the JSON for an `importance` key — it isn't there.
- The briefing-runner could optionally emit explicit importance/novelty markers; that would be a prod-side change requiring Jefe touch (out of standup-runner scope).
- Snapshot-to-`ops/snapshots/` (introduced this cycle) materially improves novelty-comparison accuracy across cycles by giving each runner the prior briefing's slugs to diff against.

## Cumulative state

- Conjunction MET 9-of-10 cycles since Hour 11 (Hours 11/12/14/15/17/18/20/21 met; Hour 13 sub-HIGH only; Hour 16 sub-everything 1-cycle blip; Hour 19 retro-classed UNKNOWN).
- CEO-route at next Jefe window remains mandatory per Hour 12 escalation.
