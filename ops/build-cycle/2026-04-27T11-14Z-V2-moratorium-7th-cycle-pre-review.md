# V2-moratorium 7th-cycle pre-review (Hour 13 checkpoint staging)

**Filed:** 2026-04-27T11:14Z (Hour 11 standup, T3)
**For consumption by:** Hour 13 standup runner OR next human-shell window (whichever comes first)
**Status:** PRE-STAGED — confirms or supersedes at Hour 13

## Cadence trajectory under V2 moratorium

| Cycle | runner src commits | origin src commits (human-shell) | runner-only SLO | system-level SLO |
|---|---|---|---|---|
| Hour 04 | 0 | 0 | 7-of-14 = 50.00% | 7-of-14 = 50.00% |
| Hour 05 | 0 | 0 | 7-of-15 = 46.67% | 7-of-15 = 46.67% |
| Hour 06 | 0 | 0 | 7-of-16 = 43.75% | 7-of-16 = 43.75% |
| Hour 07 | 0 | 1 (`f80f12d50`) + 5 backfilled | 7-of-17 = 41.18% | 8-of-17 = 47.06% |
| Hour 08 | 0 | 1 (`c6f57fb9e`) | 7-of-18 = 38.89% | 9-of-18 = 50.00% |
| Hour 09 | 0 | 0 | 7-of-19 = 36.84% | 9-of-19 = 47.37% |
| Hour 10 | 0 | 0 | 7-of-20 = 35.00% | 9-of-20 = 45.00% |
| Hour 11 | 0 | 0 | **7-of-21 = 33.33%** | **9-of-21 = 42.86%** |

## System-level erosion slope (Hours 08 → 11)

50.00 → 47.37 → 45.00 → 42.86
Δ per cycle: −2.63, −2.37, −2.14 — converging on **−2.1pp/cycle**

## Extrapolation

Assuming zero src commits at Hour 12 and Hour 13:

- Hour 12: 9-of-22 = **40.91%** (Δ = −1.95)
- Hour 13: 9-of-23 = **39.13%** (Δ = −1.78)

Erosion slope is decelerating (−2.6 → −2.4 → −2.1 → −2.0 → −1.8) because the denominator grows. Asymptotic floor as t → ∞ with zero src work = 0%, but practically the curve flattens around 40% before crossing.

## Structural-unreachability calculation

V2 moratorium reversal-criterion (per `ops/HOURLY_AGENDA_FORMAT.md`):

> "if a future cycle observes 3 consecutive successful src/ commits from inside the standup runner (e.g., post-Plan-B-reset, post-egress-allowlist-update), revisit this moratorium and consider relaxing."

Current state:
- **0 runner src commits in 21 cycles** (Hour 14 → Hour 11 inclusive)
- **0 runner src commits since V2 spec landed** (`6bdaac378` Hour 04, 7 cycles ago)

To trigger reversal, runner needs 3 consecutive cycles each with ≥1 successful src commit. With current per-cycle probability of runner-side src commit ≈ 0/21 = 0, the probability of 3 consecutive successes is **0** under the empirical distribution.

The reversal criterion is **structurally unreachable** under the current sandbox topology. Either:

1. The sandbox topology changes (egress allowlist, lock-clearance, longer timeout) — would require human-shell action
2. The reversal criterion changes (1 successful runner src commit instead of 3) — would require spec amendment
3. We accept the reversal criterion as aspirational and codify human-shell as the primary src executor — would require Jefe-decision

## Jefe-decision options for Hour 13 review

**Option A — Extend moratorium with no changes.** Status quo. SLO continues sub-50%, eventually plateaus around 38–40%. Pro: zero overhead. Con: kicks the question to Hour 19+ checkpoint.

**Option B — Allowlist-fix (T-EOD-QA-EGRESS) as unblock.** Resolves prod-unverifiable problem AND may unblock src-side runner work if the lock-clearance issue is allowlist-adjacent. Pro: fixes 2 incidents at once. Con: requires Cowork-side allowlist changes (out-of-band from Jefe-shell direct push).

**Option C — Escalate to dedicated-build-runner.** Provision a separate scheduled-task with longer timeout, separate egress profile, decoupled from briefing-push lock-contention. Pro: clean separation; build cadence becomes independent of standup runner. Con: requires 1-cycle Jefe setup window; new entity to monitor.

**Option D — Revisit reversal criterion.** Soften from "3 consecutive runner src commits" to "1 successful runner src commit OR 3 consecutive human-shell src commits." Pro: 0-effort. Con: weakens the watchdog signal; risks re-confirming a regime-shift on a single false positive.

**Option E — Accept and codify human-shell as primary src executor.** Most-honest acknowledgment: the standup runner does ops/, the human-shell does src/. Codify into `ops/HOURLY_AGENDA_FORMAT.md` and retire the moratorium concept (it becomes the operating model, not an exceptional state). Pro: clears 7 cycles of accumulated narrative debt. Con: loses the "we'll fix it eventually" framing.

## Recommendation (pre-staged, subject to Hour 13 evidence)

**Option E** is the empirically-honest answer. 7 cycles of zero-runner-src-commits + 4-cycle monotonic SLO erosion + structural unreachability of the reversal criterion = the moratorium has become the steady-state, not the deviation. Codifying it removes the implicit "this is temporary" framing that's been driving the per-cycle re-narration of the same evidence.

**However**, if Hour 12 brings a human-shell src ship (resetting the 3-cycle zero-on-origin streak), revisit this recommendation: a sustained human-shell stream might justify holding the framing as "moratorium with healthy fallback."

Hour 13 standup should:

1. Verify this document is still aligned with cycle-13 evidence (re-run cadence calc).
2. If aligned: file `ops/incidents/2026-04-27T13-14Z-v2-moratorium-jefe-decision.md` proposing Option E.
3. If misaligned (e.g., human-shell shipped Hour 12): downgrade urgency to LATENT-WATCH and revisit at Hour 19.

## Carry to Hour 12 standup

If Hour 12 brings a human-shell src ship, append a "## Hour 12 update" section to this doc noting the regime change. Otherwise, leave doc as-is for Hour 13 consumption.
