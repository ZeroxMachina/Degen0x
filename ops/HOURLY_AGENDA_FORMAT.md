# Hourly Agenda Format Spec

**Adopted:** 2026-04-20T15:14Z (Hour 15 UTC) — per Hour 14 regime-change mandate.
**Applies to:** `ops/HOURLY_AGENDA.md` from Hour 15 forward.
**Supersedes:** "assigned to build-cycle / design-polish / community-growth" queueing format used Hours 09–14.

## Why this format exists

24 hours of evidence (Hours 10–14) showed the runner topology is single-agent: only `degen-morning-standup` and the parallel news-briefing generator execute. Build-cycle, design-polish, and community-growth queues had zero commits attributable to named runners in that window. Hour 14 standup absorbed their responsibilities as fallback. Continuing to assign tasks to non-existent agents produced queue buildup (6h jefe-ask carry-forward, 4h community-drafts carry-forward) with no throughput. The flat format removes the fiction and makes the next standup cycle the explicit executor of everything.

If Jefe restores multi-agent runners (answer to Q1 of `ops/incidents/2026-04-20T14-14Z-jefe-ask-reset-vs-rebase.md`), we re-introduce agent-assignment — but as optional metadata, not primary structure.

## Structure of each agenda file

1. **Header block** — timestamp (ISO 8601 UTC), cycle, runner, latest commit local + origin.
2. **Format-change notice** (first few cycles only; remove once stable).
3. **Incidents / Overrides** — bulleted, one line per incident, P0/P1/P2 tagged; include the MITIGANT line for production health.
4. **What shipped last hour** — 3–7 bullets, concrete commits + data refreshes.
5. **What's at risk** — 2–4 bullets, forward-looking only.
6. **KPI snapshot** — table with Metric / Value / Source / Note columns.
7. **Tasks (flat)** — numbered T1, T2, T3 (max 3). Each task has:
   - **What:** concrete action.
   - **Why:** leverage rationale — why this task in this hour.
   - **How:** exact command sequence the NEXT standup cycle will run.
   - **Deliverable:** file path(s) that will exist afterward.
   - **Rollback:** plan if it fails or needs to be undone. If none needed, say so.
8. **Commit plan for this cycle** — exhaustive list of files being touched by this standup, gated to read-only-on-src.
9. **One-line summary** — `Hour <HH>: shipped <X>, priority = <Y>.`

## Execution responsibility

Every task in §7 is executed by **the next standup cycle** directly — no queueing for non-existent agents. If a task requires destructive operations (rebase, reset, force-push, mass codemod), it MUST be explicitly gated on a Jefe answer and noted as such in the §Why block.

### Standup-as-sole-executor (added 2026-04-27, Hour 03 — T-FORMAT-COLLAPSE landed)

**Empirical evidence (Hours 22 → 03):** 7 consecutive ops/ commits succeed (the standup runner reliably writes and commits agenda + format + methodology files); 6 consecutive src/ strip attempts no-show (no `feat(og)` / `feat(seo)` / `fix(links)` commits land in the standup window even when down-shifted to single-file 6-reference edits). Build-cycle SLO: 7-of-13 cycles = 54%.

**Doctrine:**

- The standup runner is the **sole executor of record** for ops/-only tasks. There is no `build-cycle`, `design-polish`, or `community-growth` runner attached to this scheduler topology. Do NOT use those terms as task owners or column tags in `ops/HOURLY_AGENDA.md` — they generate queue buildup with no throughput.
- src/ tasks MAY be scheduled but MUST carry an explicit "if no-show, route to <X>" fallback line (see § Execution-path gating).
- Future restoration of multi-agent runners (Jefe-confirmed) re-opens the agent-assignment metadata path; until then, omit it.

## Execution-path gating (added 2026-04-27, Hour 03)

Every §Task that touches `src/` MUST include in its §How block a fallback line: **"If standup runner does not execute this within 1 cycle, route to <X>"** where `<X>` is one of: `human-shell`, `dedicated-build-runner`, `T-FORMAT-COLLAPSE-V2-deferred`. After 2 consecutive standup-runner no-shows on the same src/ task, that task MUST be retired from the standup runner and re-routed per its declared fallback. Do NOT keep re-scheduling; the prior 6-cycle carry-forward of the strip + 8th-cluster + JSON-LD three-fer is the documented anti-pattern this gate prevents.

## Src-side execution moratorium (added 2026-04-27, Hour 04 — T-FORMAT-COLLAPSE-V2 trigger)

**Empirical update (Hours 22 → 04, +1 cycle vs V1):** 8 consecutive ops/ commits succeed; **7 consecutive src/ strip / stub / SVG / JSON-LD attempts no-show** across the same window. Single-file edits (Hour 02 quantum-resistant 6-ref strip), single-directory stubs (Hour 03 zero-knowledge-proofs-guide stub variant), and bundled three-fers (Hours 22–01 strip + 8th-cluster OG + covenants-opcat JSON-LD) all failed at the same cycle. Build-cycle SLO drops to 7-of-14 = 50%.

**Conclusion:** the standup runner has no usable `src/` write path under the current sandbox-egress + lock-clearance + transient-shell topology. Continuing to schedule src-edits through this runner is an empirically-falsified anti-pattern. Hour 03 spec named this as the gate; Hour 04 entry triggers it.

**Doctrine (V2):**

- src/-touching §Tasks are formally retired from standup-runner ownership.
- Any §Task touching `src/` MUST name an alternate executor at proposal-time. Acceptable executors:
  1. **Jefe / human-shell single-session bundle** (proven path: Hours 18–21 build-cycle ship sequence)
  2. **Dedicated build-cycle scheduled-task** with a separate sandbox-egress profile and longer timeout window
  3. **CI-driven codemod** (PR-based, runs outside the hourly cron)
- §Tasks failing this requirement are rejected from §Tasks at write-time and routed to `ops/blocked-pending-executor.md` (TBD — first instance lands when V2 catches a proposal).
- The standup-runner itself is restricted to: ops/ docs, agenda commits, methodology codifications, watches/escalations, and incident filings.

**Suggested Jefe-shell single-session bundle (~30min effort, unblocks ~25 broken /learn refs without per-page edits):**

```bash
cd "$DEGEN0X_REPO"
for slug in zero-knowledge-proofs-guide common-crypto-scams \
            defi-for-beginners cross-chain-bridges-guide-2026 \
            restaking-guide bitcoin-etf-guide; do
  mkdir -p src/app/learn/$slug
  # write minimal page.tsx with H1 + canonical + noindex stub
  # (use Hour 18–21 build-cycle ship sequence as template)
done
git add src/app/learn/
git commit -m "feat(stubs): top-6 missing /learn target dirs (unblocks ~25 broken refs per ops/SCOPE_METHODOLOGY.md 107/50 surface)"
```

**Reversal criteria:** if a future cycle observes 3 consecutive successful src/ commits from inside the standup runner (e.g., post-Plan-B-reset, post-egress-allowlist-update), revisit this moratorium and consider relaxing.

## Priority renumbering

Priorities renumber monotonically T1, T2, T3 each cycle. Do NOT preserve numbers across cycles — continuity lives in the "What shipped last hour" and §Incidents sections.

## Length discipline

- Agendas SHOULD be under 4,000 words.
- Tasks SHOULD be executable from the §How block alone by a standup cycle that has no other context.
- Incidents that recur for 3+ cycles MUST be consolidated into a single §Incidents bullet, not re-narrated.

## When to deviate

- **Production incident:** top of §Incidents as P0, override normal priorities, first task is always "restore prod."
- **Jefe-touch detected on the jefe-ask doc:** reshuffle tasks same cycle to execute the reconcile immediately, collapse §Incidents P0s, push T1/T2/T3 to next cycle.
- **Runner-topology restored (multi-agent confirmed):** revisit this spec and re-introduce agent-assignment metadata on each task.

## Retired watches (added 2026-04-27, Hour 06)

This section records standup watches that have been formally retired by empirical disconfirmation. Retiring a watch transparently prevents zombie-watch resurrection by future cycles and keeps §Incidents focused on live signal.

### T-BRIEFING-NOVELTY-V2 (retired 2026-04-27 Hour 06)

- **Origin:** opened Hour 04 (2026-04-27 04:14Z) after briefing-04 shipped 4/5 HIGH with 4/5 recurrences (highest content-staleness ratio observed in this run).
- **V2 hypothesis:** "high-impact draws ≥4/5 correlate with static-pool reuse rather than novelty inflow."
- **V2 trigger conditions:** if any future cycle exhibits ≥4/5 HIGH AND ≥3/5 recurrences, file a Content-Quality-Regression incident.
- **Empirical record under V2 watch:**
  - Hour 05 (2026-04-27 05:18Z): briefing-05 = 3/5 HIGH + 2/5 recurrences → both V2 thresholds unmet.
  - Hour 06 (2026-04-27 06:14Z): briefing-06 = 3/5 HIGH + 1/5 recurrences → both V2 thresholds unmet, recurrence ratio further below.
- **Decision:** retired. Trigger conditions doubly unmet for two consecutive cycles; recurrence ratio moved opposite to V2's predicted regime. The V2 hypothesis appears to describe a single Hour 04 outlier, not a sustained content-pool dynamic.
- **Future re-trigger criterion:** if any cycle independently observes ≥4/5 HIGH AND ≥3/5 recurrences, file a fresh Content-Quality-Regression incident from first principles. **Do NOT resurrect T-BRIEFING-NOVELTY-V2 as a named watch** — re-investigate the content-pool dynamic from scratch with current evidence.
