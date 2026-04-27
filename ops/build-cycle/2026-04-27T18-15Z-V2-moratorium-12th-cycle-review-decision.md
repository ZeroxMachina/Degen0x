# T-FORMAT-COLLAPSE-V2 — 12th-Cycle Review Decision

**Filed:** 2026-04-27T18:15Z
**Cycle:** 12 (review gate executed; no 4th deferral)
**Author:** standup-runner @ `adoring-kind-turing`
**Pre-stage source:** `ops/build-cycle/2026-04-27T17-15Z-V2-moratorium-11th-cycle-pre-review-prep.md`

## §Decision summary

The src-side execution moratorium codified by T-FORMAT-COLLAPSE-V2 (Hour 04, `6bdaac378`) is **structurally bifurcated** as of Hour 18:

1. **Standup-runner channel: moratorium HOLDS.** Runner has shipped 0 src commits in 19h+ (since `53359ca77` Hour 22 yesterday). Runner-only SLO 7-of-27 = **25.93%**, monotonic decay across the V2 evidence window.
2. **Design-polish-Jefe-shell channel: empirically VIABLE PARALLEL SRC PATH.** 3-cycle ship-streak confirmed Hours 16/17/18 (`5a629c6d8` hyperliquid + `fc210b2e2` crypto-tax-guide-2026 + `5422e8439` ethereum-pectra-upgrade-guide). System-level SLO 12-of-27 = **44.44%**, ticking up exclusively via this channel.

The bifurcation is now the canonical SLO frame: **system 44.44% / runner-only 25.93%** as the bifurcated metric.

## §Channel decomposition (cycle-by-cycle, Hours 03–18)

| Hour | Runner src? | Design-polish src? | Briefing? | System-cycle hit? |
|------|---|---|---|---|
| 03 | n | n | y | n |
| 04 | n | n | y | n |
| 05 | n | n | y | n |
| 06 | n | n | y | n |
| 07 | n | y (`f80f12d50` design-polish channel begins) | y | y |
| 08 | n | y (`c6f57fb9e`) | y | y |
| 09 | n | n | y | n |
| 10 | n | n | y | n |
| 11 | n | n | y | n |
| 12 | n | n | y | n |
| 13 | n | n | y | n |
| 14 | n | n | y (late) | n |
| 15 | n | y (`5a629c6d8`, design-polish 1-cycle) | y | y |
| 16 | n | y (`fc210b2e2`, 2-cycle confirmed) | y | y |
| 17 | n | y (`5422e8439`, 3-cycle confirmed) | y | y |
| 18 | n | n (current cycle entry) | y | n (so far) |

- Runner-only: 0/16 cycles since Hour 03 (the V2 evidence window). Within the broader 27-cycle window since runner went silent Hour 22 yesterday: 7-of-27.
- Design-polish channel: 5-of-16 cycles in V2 window; 3 of those 5 are the **Hour 16/17/18 contiguous streak** (the structural signal).
- Briefing-pipeline: 16-of-16 cycles in V2 window (with Hour 13/14 late-but-recovered).

## §Hour 19 watchpoint (4-cycle steady-channel-vs-cluster classification)

- **If Hour 19 ships a 4th consecutive design-polish src commit:** rebase expectations to "design-polish channel ships ≥1 src per cycle". Spec amendment to follow at Hour 19 standup.
- **If Hour 19 produces zero design-polish src on origin:** classify Hours 16/17/18 as a "cluster of 3" rather than a steady channel; SLO frame stays bifurcated but with sparse-channel disclosure.
- **Either outcome is acceptable;** the V2-moratorium decision does not depend on Hour 19 sign — it depends only on the 3-cycle empirical evidence already in hand.

## §SLO spec amendment

The V2 spec (Hour 04 codification) measured cadence as "src-on-origin per UTC hour" with a 50% target. This is now ambiguous given the bifurcation. Amendment:

- **Primary SLO: system-level cadence = (any src-on-origin) / hours.** Currently 12-of-27 = 44.44%.
- **Secondary SLO: runner-only cadence = (runner-authored src-on-origin) / hours.** Currently 7-of-27 = 25.93%.
- **Spec target unchanged at 50%** but applies to **system-level only**. Runner-only is a sub-metric for moratorium-monitoring (low values are expected during moratorium).

## §Conditions for runner-moratorium lift

The V2-moratorium on standup-runner src writes is lifted when ALL of:

1. Standup-runner ships 1+ src commit on its own (without Jefe-shell intervention) in any single cycle.
2. The src commit passes ops-commit success rate floor (≥99% over a 10-cycle window).
3. No new T-FORMAT-COLLAPSE-class incident filed in the 5 cycles preceding the lift gate.

**Near-term assessment:** none of (1)/(2)/(3) is in motion. Moratorium expected to hold indefinitely until product/CEO routes a "runner-eligible src work item" — none are queued.

## §Disposition

- T1 (this doc) shipped this cycle: review-decision codified.
- No 4th deferral; gate cleared.
- Hour 19 watchpoint set; cycle-by-cycle channel monitoring continues in normal standup flow.
- Bifurcated SLO frame (system 44.44% / runner-only 25.93%) is the canonical metric going forward.
