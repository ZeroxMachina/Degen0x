# INCIDENT (TEMPLATE STUB — pre-staged at Hour 17, fire at Hour 18)

**Pre-staged:** 2026-04-20T17:14Z
**Intended filename on fire:** `ops/incidents/2026-04-20T18-00Z-jefe-asks-10h-overdue.md`
**Fire condition:** At Hour 18 UTC standup, after the opening T2 jefe-touch check:
  1. `stat` shows BOTH ask files' mtimes unchanged from file-creation (Q1: 14:18:13Z, Q2: 16:19:40Z)
  2. `grep -c '\[x\]'` shows **0** on BOTH ask files
  3. `date -u +%H` returns **≥ 18**

If any condition fails → DO NOT fire. Reshuffle Hour 18 agenda to execute whichever decision Jefe made.

---

**BELOW THIS LINE IS THE TEMPLATE BODY. On fire: (1) copy to the intended filename, (2) fill `<TOKEN>` placeholders, (3) delete this pre-stage file in same commit.**

---

# INCIDENT — Jefe asks 10h+ overdue (both unresolved)

**Filed:** `<FIRE_TIMESTAMP_UTC>`
**Severity:** P0 (escalated from carry-forward)
**Escalation trigger:** Hour 15 T3 (UTC hour ≥ 18 AND both ask checkbox counts = 0 AND both mtimes flat)

## Summary

Two Jefe asks filed by the standup runner remain untouched after one standup cycle each has executed the overdue-ping SLA:

- **Q1 — reset-vs-rebase decision** (`ops/incidents/2026-04-20T14-14Z-jefe-ask-reset-vs-rebase.md`)
  - Filed: 2026-04-20T14:18:13Z
  - Age at fire: `<Q1_AGE>` (≥ 3h 42min; expected ~3h 42min at Hour 18 = 11h 0min total since file)
  - Checkboxes filled: 0/2
- **Q2 — sitemap cherry-pick authorization** (`ops/incidents/2026-04-20T16-14Z-sitemap-wrong-domain.md`)
  - Filed: 2026-04-20T16:19:40Z
  - Age at fire: `<Q2_AGE>` (≥ 1h 42min; expected ~1h 42min at Hour 18 = 3h 0min total since file)
  - Checkboxes filled: 0/2

## Impact

- **Q1 blocks:** branch reconcile (local +15/−61 vs origin/main by Hour 18), restarting build-cycle runner, clearing the 746-file WIP backlog. Each idle cycle adds mechanical +1/−1 drift.
- **Q2 blocks:** single-file sitemap regen fix (41d+ of `cryptodegen.com` `<loc>` entries served to crawlers). Each idle cycle continues the bleed at background rate.
- **Both together:** 27h+ of build-cycle silence, flat 6.91 SEO score, flat 32.7% indexation, flat page-manifest and dapps.ts data freshness.

## What this incident is NOT asking

This is not a re-ask. It is an explicit escalation notice that the SLA ladder has tripped. The ORIGINAL asks remain the canonical decision surfaces:
- Q1 awaits one of: APPROVE reset / APPROVE rebase / DEFER with target date.
- Q2 awaits one of: APPROVE standalone cherry-pick / DEFER into the Q1 decision.

## Ask (if Jefe wants to respond to this doc specifically)

Tick one below to acknowledge receipt of the escalation (this is purely optional — ticking original ask checkboxes is what actually unblocks work):

- [ ] Ack — still pending decision, will reply within 6h
- [ ] Ack — deprioritized; clear the escalation ladder and return to carry-forward

If neither checkbox is ticked by Hour 24 UTC standup, this runner will file `ops/incidents/2026-04-20T24-00Z-jefe-asks-16h-overdue.md` as the next rung.

## References

- Escalation trigger: `ops/HOURLY_AGENDA.md` Hour 15 T3 and Hour 17 T1
- Original Q1: `ops/incidents/2026-04-20T14-14Z-jefe-ask-reset-vs-rebase.md`
- Original Q2: `ops/incidents/2026-04-20T16-14Z-sitemap-wrong-domain.md`
- Missing build-cycle runner: `ops/incidents/2026-04-20T14-14Z-missing-build-cycle-runner.md`
- Sitemap evidence: `ops/seo/2026-04-20-sitemap-dryrun.md`
- Rebrand sweep plan (gated on Q2): `ops/seo/2026-04-20-rebrand-sweep-plan.md`

## Status

- [ ] Jefe acknowledged (either by ticking above or by ticking original asks)
- [ ] Standup runner closed (auto-closes when either original ask is ticked)
