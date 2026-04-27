# T-LOCK-ESCALATION — 7-cycle steady-state stale-lock-at-entry pattern

**Filed:** 2026-04-27T07:18Z (Hour 07 UTC standup)
**Severity:** P3 (documentation-only — no production impact, mechanism healthy)
**Status:** OPEN-AS-DOCUMENTATION (closes if mv-recipe fails 2 consecutive cycles)

## Origin

Hour 06 standup spec stated: *"threshold review: if Hour 07 shows a 7th consecutive cycle, consider documentation-only incident filing to formalize the steady-state."* Hour 07 session entry observes 1 stale `.git/objects/maintenance.lock` (0B, 11min old) → 7th-consecutive stale-at-entry confirmed. This filing formalizes the steady-state per the named trigger.

## Trigger

Stale lock(s) observed in `.git/` at session entry on 7 consecutive standup cycles (Hour 01 through Hour 07 UTC, 2026-04-27).

## Empirical record (7 cycles)

| Hour | Locks at entry | Recipe result | Time on entry-lock |
|---|---|---|---|
| 01 | 2 (HEAD + maintenance) | mv-to-stale OK | 33min / 33min |
| 02 | 1 (maintenance) | natural-clear | 50min |
| 03 | 3 (HEAD + index + maintenance) | mv-to-stale OK | 33 / 34 / 92 min |
| 04 | 1 (maintenance) | mv-to-stale OK | 8min |
| 05 | 3 (index + HEAD + maintenance) | mv-to-stale OK | various |
| 06 | 1 (maintenance) | mv-to-stale OK + 1 commit-stage failure caught by GIT_INDEX_FILE-tmp override | 5min |
| 07 | 1 (maintenance) | mv-to-stale (in-flight this cycle) | 11min |

**Mechanism diagnosis:**
- Maintenance.lock-at-entry is the steady-state shape — appears in 6 of 7 cycles.
- The `mv .git/objects/maintenance.lock .git/objects/maintenance.lock.stale.<unixtime>` recipe (per `reference_github_push_auth.md` memory) succeeds in all 7 cycles.
- One commit-stage lock failure (Hour 06) was caught by the documented `GIT_INDEX_FILE=$(mktemp)` fallback recipe, also documented in the format spec.
- Two Cowork sandbox sessions hitting the same .git directory near-simultaneously is the proximate cause; this is structural to the multi-runner topology.

## Decision: documentation-only

This filing does NOT request remediation, does NOT trigger an incident response, does NOT escalate the watch. Reasons:

1. **No production impact.** Origin/main is healthy; lock state is internal to the standup runner's git operations.
2. **Mechanism healthy.** The mv-recipe and the GIT_INDEX_FILE-tmp-override fallback have a 7-of-7 success record across the watch window.
3. **Pattern, not anomaly.** A 7-cycle steady-state is no longer an alarm; it is the operational baseline.
4. **Escalating implies remediation.** Filing as a P0/P1/P2 incident-with-action would route this to the human-shell allowlist queue alongside actually-actionable items (T-EOD-QA-EGRESS, Plan-B reset, design-polish stream coordination). That dilutes signal.

## Re-trigger criterion

If the mv-recipe + GIT_INDEX_FILE-tmp-override fallback **both fail in the same cycle**, OR if the recipe fails on **2 consecutive cycles**, escalate this filing to P2 with a remediation request. Until then, this remains documentation-only.

## What changes for the next cycle

- Future standup cycles SHOULD continue to apply the mv-recipe at session entry without re-narrating the lock observation in the agenda header (the doublefire P1-LATENT bullet in §Incidents is sufficient).
- Future standup cycles MAY skip filing same-shape lock incidents per the same recurrence-rule applied to broken-internal-links.

## Closes when

- mv-recipe + GIT_INDEX_FILE-tmp-override fallback both fail in the same cycle (escalates to remediation), OR
- 5 consecutive cycles observe zero stale-locks-at-entry (the pattern resolves naturally; documentation-only filing closes as obsolete).
