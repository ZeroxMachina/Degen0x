# Design-Polish Channel — 5-Cycle Locked Canonical

**Filed:** 2026-04-27T20:15Z (Hour 20 UTC)
**Type:** Methodology decision (re-baseline)
**Supersedes:** `ops/build-cycle/2026-04-27T19-15Z-design-polish-4-cycle-rebaseline-decision.md` (Hour 19 4-cycle "steady channel" doc)

## Decision

Effective Hour 20: **`design-polish ships hourly`** is codified canonical expectation for the design-polish channel. The 5-cycle ship-streak meets Hour 19's lock criterion ("5-cycle streak locks `design-polish ships hourly` as canonical expectation; gap ≥1 cycle re-opens cluster classification").

## Evidence — 5-cycle ship sequence Hours 16→20

| Hour | Commit | Page polished | Hex→CSS-var count | Notes |
|---|---|---|---|---|
| 16 | `5a629c6d8` | crypto-tax-guide-2026 (intermediate) | — | First in streak |
| 17 | `fc210b2e2` | crypto-tax-guide-2026 (final) | ~264 | Theme-token polish + dedup JSON-LD + focus rings |
| 18 | `5422e8439` | ethereum-pectra-upgrade-guide | ~132 | Same recipe + missing rounded-xl/p/border |
| 19 | `933926583` | ethereum-fusaka-glamsterdam-guide | ~158 | Same recipe + missing href on related links |
| 20 | `754ae67a2` | onchain-analysis-smart-money-tracking-tools-guide | ~259 | Same recipe + related-card hover states |

## System SLO trajectory

| Hour | System SLO | Δ | Runner-only SLO | Δ |
|---|---|---|---|---|
| 16 | 11-of-25 = 44.00% | — | 7-of-25 = 28.00% | — |
| 17 | 11-of-26 = 42.31% | -1.69pp | 7-of-26 = 26.92% | -1.08pp |
| 18 | 12-of-27 = 44.44% | +2.13pp | 7-of-27 = 25.93% | -0.99pp |
| 19 | 13-of-28 = 46.43% | +1.99pp | 7-of-28 = 25.00% | -0.93pp |
| 20 | **14-of-29 = 48.28%** | +1.85pp | **7-of-29 = 24.14%** | -0.86pp |

Net 5-cycle: system +4.28pp via design-polish channel exclusively; runner-only -3.86pp (flat numerator, growing denominator). Bifurcation widens monotonically as expected.

## Decision rationale

A 5-cycle streak in 5 hours, all driven by the same Jefe-shell channel polishing the same recipe (theme-token hex→CSS-var + JSON-LD dedup + focus-visible rings + missing structural classes), is empirically inconsistent with a coincidental cluster. The most parsimonious model is: **a Jefe-driven workstream is actively ranging through the theme-token polish backlog at roughly 1 page per hour**, plausibly continuing until the backlog is cleared or the workstream switches.

## Hour 21 watchpoint

- **6-cycle streak holds:** continues to confirm `design-polish ships hourly`. SLO advances to 15-of-30 = 50.00% (system); runner-only 7-of-30 = 23.33%.
- **6-cycle gap (no design-polish ship):** locked canonical reverts to "cluster of 5". System SLO holds at 14-of-30 = 46.67%; runner-only 7-of-30 = 23.33%. Gap-reversion doc to be filed at Hour 21 if triggered.

## Standup-runner non-effect

This re-baseline is **expectation-only**. The standup runner does NOT execute design-polish ships (V2 src-moratorium per `ops/HOURLY_AGENDA_FORMAT.md`). The channel is sole-Jefe-shell-owned. This doc tracks the channel's behavior so the CEO-route narrative is grounded in monotonic evidence — not so the runner attempts to replicate it.

## Predecessor links

- `ops/build-cycle/2026-04-27T17-15Z-design-polish-cluster-of-3-watchpoint.md` (3-cycle confirmation)
- `ops/build-cycle/2026-04-27T18-15Z-design-polish-3-cycle-confirmation.md` (Hour 18 confirmation; if exists)
- `ops/build-cycle/2026-04-27T19-15Z-design-polish-4-cycle-rebaseline-decision.md` (Hour 19 "steady channel"; superseded by this doc)
