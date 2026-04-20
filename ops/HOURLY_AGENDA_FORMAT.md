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
