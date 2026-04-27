# Methodology Correction — origin/main vs local master in pre-flight checks

**Filed:** 2026-04-27T07:18Z (Hour 07 UTC standup)
**Severity:** P2 (process-quality, no production impact)
**Status:** OPEN-FOR-CODIFICATION (close once `ops/SCOPE_METHODOLOGY.md` amendment lands and one full eod-qa cycle uses the corrected check)

## Summary

For ~10 hours (Hour 22 → Hour 06), the standup runner and publish-deploy runner reported `T-SEO-COVENANTS-JSONLD` as a P1 OPEN incident — *"covenants-opcat zero JSON-LD"* — based on a working-tree check against local master. In reality, the JSON-LD landed on `origin/main` ten hours earlier in `bade67113` (2026-04-26 20:32Z, *"feat(og+seo): bitcoin-protocol cluster opener — covenants-opcat 7th palette + bitcoin-mining JSON-LD close-out"*) and Vercel has been serving the resolved page since.

Local master diverges from origin/main by `+65/-42` because the cherry-pick allowlist (Plan-B-reset path) excludes most origin commits. Pre-flight checks that grep working-tree files therefore measure a synthetic state, not the served state. The runner described a non-existent P1 for 10 cycles.

## Empirical record of the phantom

| Cycle | What the runner reported | What origin actually had |
|---|---|---|
| Hour 22 (22:14Z) | covenants ld+json count=0 (P1 OPEN T-SEO-COVENANTS-JSONLD) | count=2 — `bade67113` shipped 1.5h earlier |
| Hour 23 (23:14Z) | same | count=2 — `bade67113` |
| Hour 00 (00:14Z) | same | count=2 |
| Hour 01 (01:14Z) | same | count=2 |
| Hour 02 (02:14Z) | same | count=2 |
| Hour 03 (03:14Z) | same | count=2 |
| Hour 04 (04:14Z) | same | count=2 |
| Hour 05 (05:18Z) | same | count=2 |
| Hour 06 (06:14Z) | same — incident continued | count=2 |
| Hour 07 (07:18Z) | corrected — closed retroactively | count=2 (cleaned to 2 from earlier 3 by `f80f12d50` 07:02Z) |

**Verification:** `git show origin/main:src/app/learn/bitcoin-covenants-opcat-guide-2026/page.tsx | grep -c "application/ld+json"` returns `2`. `git show master:src/app/learn/bitcoin-covenants-opcat-guide-2026/page.tsx | grep -c "application/ld+json"` returns `0`. Vercel serves origin/main.

## Codification (queued — not yet shipped this cycle)

Append to `ops/SCOPE_METHODOLOGY.md`:

> ### Pre-flight checks MUST measure origin/main, not local master
>
> Local master diverges from origin/main by ~50–70 commits at all times because of the Plan-B-reset cherry-pick allowlist path. Working-tree files reflect local-master state, not the state Vercel serves. Pre-flight checks that grep working-tree paths therefore measure a synthetic branch and may produce phantom incidents.
>
> **Rule:** every pre-flight grep / count / existence check used to gate publish-deploy, eod-qa, or to file a P1/P2 incident MUST be expressed against origin/main using `git show origin/main:<path>` (or `git ls-tree origin/main`), unless the check is *specifically about the cherry-pick-allowlist gap itself* (e.g., divergence count, BUIDL-not-on-published-list).
>
> **Why:** Vercel serves origin/main. Incidents track served-state quality. Working-tree state is internal-runner state and is irrelevant to user impact.
>
> **Examples:**
> - JSON-LD coverage on a learn/ page → origin-check.
> - Broken `/learn/` ref enumeration → origin-check.
> - Sitemap URL count → origin-check.
> - 957-uncommitted-files codemod sweep → working-tree (specifically about local state).
> - Allowlist divergence +N/-M → both branches (specifically about the gap).

## Why this matters

1. **Signal-to-noise.** 10 hours of standup attention, three incident-filings, and a multi-cycle T1 task all routed against a non-incident. The runner-budget cost is not zero.
2. **Decision routing.** `T-FORMAT-COLLAPSE-V2` was triggered partly because the JSON-LD task kept failing to ship. But it was already shipped on origin — the V2 trigger was correct in conclusion (runner cannot ship src) but not in *evidence* (the JSON-LD specifically had been shipped).
3. **107/50 broken-links surface.** This is the next plausibly-phantom incident. Hour 07 T2 re-runs that enumeration against origin/main.

## Re-trigger criterion

If a future cycle observes covenants-opcat ld+json count drift on origin/main (count != 2 OR `bade67113` rolled back), file a fresh `T-SEO-COVENANTS-JSONLD-V2` from first principles. **Do NOT resurrect the original watch** — the original measured the wrong branch.

## Decision

This is a **process incident**, not a product incident. Filed as P2 to track the codification work; no remediation needed beyond the methodology amendment.

## Closes when

- `ops/SCOPE_METHODOLOGY.md` amendment lands and is referenced by next Hour 08+ pre-flight, AND
- one full eod-qa cycle runs the corrected check end-to-end.
